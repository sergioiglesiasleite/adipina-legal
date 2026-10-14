// Ads in the iPhone app, the way Globoom does them (AdMob through @capacitor-community/admob; see docs/ANUNCIOS.md).
// The web version has no ads. Three formats:
// - banner at the bottom of menus and the final results, never during a game (not even between turns);
// - interstitial at natural breaks (passing the phone to the next piña, starting another game), capped by AdPolicy;
// - rewarded video, optional: the next game without ads.
// Ad unit IDs: Google's TEST units unless the release build injects real ones (window.ADIPINA_ADS, from
// scripts/build-app.mjs). The safe case is the default: serving real ads needs something explicit.
import { nativePlugin } from './platform.js';
import { read, write } from './store.js';

// Google's official test units for iOS: they show real ads marked «Test Ad» without earning or costing anything.
export const TEST_AD_UNITS = {
  banner: 'ca-app-pub-3940256099942544/2934735716',
  interstitial: 'ca-app-pub-3940256099942544/4411468910',
  rewarded: 'ca-app-pub-3940256099942544/1712485313'
};
const UNIT = /^ca-app-pub-\d{16}\/\d{10}$/;
// All or nothing: a half set would mix real and test units in the same session.
export function realAdUnits(injected = globalThis.ADIPINA_ADS) {
  if (!injected || typeof injected !== 'object') return null;
  const { banner, interstitial, rewarded } = injected;
  return [banner, interstitial, rewarded].every(id => typeof id === 'string' && UNIT.test(id)) ? { banner, interstitial, rewarded } : null;
}
export const usingTestAds = () => !realAdUnits();
const units = () => realAdUnits() || TEST_AD_UNITS;

// ---- When an interstitial may appear ----
// Sergio's rule (12-oct-2026): a few ads and that is it, the game must never become annoying for a little money. A
// party game is played in long sessions with the phone passed around, so interstitials are rare: never in the first
// game, then at most one every ten minutes and every eight turns, and only at a break (see app.js). These numbers
// are the single place to tune with real data.
export const INTERSTITIAL_POLICY = {
  /** The first game after installing has no interstitials: nobody should see an ad before liking the game. */
  graceGames: 1,
  /** Turns played since the last interstitial. */
  minTurnsBetween: 8,
  /** Seconds since the last interstitial. */
  minSecondsBetween: 600
};
const POLICY_KEY = 'ads';
export class AdPolicy {
  constructor(load = () => read(POLICY_KEY, {}), save = state => write(POLICY_KEY, state)) {
    const saved = load() || {};
    this.save = save;
    this.state = { games: Number(saved.games) || 0, turnsSince: Number(saved.turnsSince) || 0, lastShownAt: Number(saved.lastShownAt) || 0, adFreeGames: Number(saved.adFreeGames) || 0 };
  }
  persist() { this.save({ ...this.state }); }
  recordTurn() { this.state.turnsSince++; this.persist(); }
  /** Called when a game ends. An ad-free game granted by a rewarded video is used up here. */
  recordGameFinished() {
    this.state.games++;
    if (this.state.adFreeGames > 0) this.state.adFreeGames--;
    this.persist();
  }
  /** The current game is free of interstitials and in-game banners (a rewarded video paid for it). */
  get adFree() { return this.state.adFreeGames > 0; }
  grantAdFreeGame() { this.state.adFreeGames = Math.max(this.state.adFreeGames, 1); this.persist(); }
  canShowInterstitial(now = Date.now()) {
    if (this.adFree || this.state.games < INTERSTITIAL_POLICY.graceGames) return false;
    if (this.state.turnsSince < INTERSTITIAL_POLICY.minTurnsBetween) return false;
    return (now - this.state.lastShownAt) / 1000 >= INTERSTITIAL_POLICY.minSecondsBetween;
  }
  recordInterstitialShown(now = Date.now()) { this.state.turnsSince = 0; this.state.lastShownAt = now; this.persist(); }
}

// ---- Native ads ----
const admob = () => nativePlugin('AdMob');
export const adsAvailable = () => !!admob();
export const policy = new AdPolicy();
let initPromise = null, canRequestAds = false, lastError = '';
let bannerWanted = false, bannerRequested = false, bannerListeners = false, interstitialShowing = false;
let interstitialReady = false, interstitialLoading = false, queue = Promise.resolve();
const note = (where, error) => { lastError = `${where}: ${error?.message || error || ''}`.slice(0, 120); console.error(`[anuncios] ${where}`, error); };
export const adsDebug = () => ({ ads: usingTestAds() ? 'prueba' : 'REALES', consent: canRequestAds ? 'ok' : 'pendiente', banner: bannerRequested ? 'pedido' : bannerWanted ? 'sin pedir' : 'no toca', error: lastError || '-' });

/** Idempotent. Starts AdMob and resolves consent (Apple's tracking prompt and Google's EU consent form). */
export function initAds() {
  if (!initPromise) initPromise = (async () => {
    const ad = admob();
    if (!ad) return;
    try {
      await ad.initialize({ initializeForTesting: usingTestAds() });
      await ad.addListener('interstitialAdDismissed', interstitialClosed);
      await ad.addListener('interstitialAdFailedToShow', interstitialClosed);
      // Google may suspend the account for ads served in the EU without consent: nothing is requested until it is
      // resolved, and if resolving fails nothing is requested at all.
      const [tracking, consent] = await Promise.all([ad.trackingAuthorizationStatus(), ad.requestConsentInfo()]);
      if (tracking.status === 'notDetermined') await ad.requestTrackingAuthorization();
      let info = consent;
      if (info.isConsentFormAvailable && info.status === 'REQUIRED') info = await ad.showConsentForm();
      canRequestAds = !!info.canRequestAds;
    } catch (error) { note('inicio o consentimiento', error); canRequestAds = false; }
  })();
  return initPromise;
}
/** Ajustes › Privacidad de los anuncios: Google's form to change the consent at any time (stores require it). */
export async function openAdPrivacy() {
  const ad = admob();
  if (!ad) return false;
  try { await initAds(); await ad.showPrivacyOptionsForm(); return true; } catch (error) { note('privacidad', error); return false; }
}

// The banner only records what is wanted; requests run one at a time and reconcile with the latest wish, so a banner
// that arrives late never lands on top of a turn (Globoom learned this the hard way: see its AdManager).
export function setBanner(wanted) {
  if (bannerWanted === wanted) return queue;
  bannerWanted = wanted;
  queue = queue.then(applyBanner).catch(error => note('banner', error));
  return queue;
}
async function applyBanner() {
  const ad = admob();
  if (!ad || interstitialShowing || bannerWanted === bannerRequested) return;
  if (!bannerWanted) { bannerRequested = false; bannerLayout(false); await ad.removeBanner(); return; }
  await initAds();
  await listenBanner(ad);
  if (!canRequestAds || !bannerWanted || interstitialShowing) return;
  bannerRequested = true;
  await ad.showBanner({ adId: units().banner, adSize: 'ADAPTIVE_BANNER', position: 'BOTTOM_CENTER', isTesting: usingTestAds() });
}
async function listenBanner(ad) {
  if (bannerListeners) return;
  bannerListeners = true;
  try {
    await ad.addListener('bannerAdSizeChanged', size => { if (size?.height > 0) document.documentElement.style.setProperty('--banner-h', `${size.height}px`); });
    // The view only appears when the ad arrives; if by then it is no longer wanted, it is removed now.
    await ad.addListener('bannerAdLoaded', () => {
      if (bannerWanted && !interstitialShowing) { bannerLayout(true); return; }
      bannerLayout(false); queue = queue.then(applyBanner).catch(error => note('banner', error));
    });
    await ad.addListener('bannerAdFailedToLoad', error => { bannerRequested = false; bannerLayout(false); note('banner sin cargar', error); });
  } catch (error) { note('eventos del banner', error); }
}
function bannerLayout(visible) {
  document.body.classList.toggle('has-banner', visible);
  if (!visible) document.documentElement.style.removeProperty('--banner-h');
}

/** Loads an interstitial in advance (1–3 s of network), only when one may be shown. */
export async function preloadInterstitial() {
  const ad = admob();
  if (!ad || !policy.canShowInterstitial() || interstitialReady || interstitialLoading) return;
  await initAds();
  if (!canRequestAds) return;
  interstitialLoading = true;
  try { await ad.prepareInterstitial({ adId: units().interstitial, isTesting: usingTestAds() }); interstitialReady = true; }
  catch (error) { note('intersticial sin cargar', error); }
  finally { interstitialLoading = false; }
}
/** Shows the preloaded interstitial if the policy allows it. Resolves when it is on screen (or did not show). */
export async function showInterstitial() {
  const ad = admob();
  if (!ad || !interstitialReady || !policy.canShowInterstitial()) return false;
  interstitialReady = false;
  const handles = [];
  try {
    const shown = await new Promise(async resolve => {
      const timer = setTimeout(() => resolve(false), 5000);
      handles.push(await ad.addListener('interstitialAdShowed', () => { clearTimeout(timer); interstitialShowing = true; resolve(true); }));
      handles.push(await ad.addListener('interstitialAdFailedToShow', () => { clearTimeout(timer); resolve(false); }));
      try { await ad.showInterstitial(); } catch { clearTimeout(timer); resolve(false); }
    });
    if (shown) policy.recordInterstitialShown();
    return shown;
  } catch (error) { note('intersticial', error); return false; }
  finally { handles.forEach(handle => handle?.remove?.()); }
}
function interstitialClosed() {
  if (!interstitialShowing) return;
  interstitialShowing = false;
  queue = queue.then(applyBanner).catch(error => note('banner', error));
}
// Some devices never report the dismissal: touching the game again means the ad is gone.
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') interstitialClosed(); });
  document.addEventListener('pointerdown', interstitialClosed, { capture: true });
}

/** Rewarded video. Resolves true only if it was watched to the end (then the next game has no ads). */
export async function showRewarded() {
  const ad = admob();
  if (!ad) return false;
  await initAds();
  if (!canRequestAds) return false;
  const handles = [];
  try {
    return await new Promise(async resolve => {
      let earned = false;
      handles.push(await ad.addListener('onRewardedVideoAdReward', () => { earned = true; }));
      handles.push(await ad.addListener('onRewardedVideoAdDismissed', () => resolve(earned)));
      handles.push(await ad.addListener('onRewardedVideoAdFailedToShow', () => resolve(false)));
      try { await ad.prepareRewardVideoAd({ adId: units().rewarded, isTesting: usingTestAds() }); await ad.showRewardVideoAd(); }
      catch (error) { note('vídeo con recompensa', error); resolve(false); }
    });
  } finally { handles.forEach(handle => handle?.remove?.()); }
}
