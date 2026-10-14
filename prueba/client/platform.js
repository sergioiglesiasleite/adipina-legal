// Integration points for the native iPhone app (Capacitor). In a browser everything falls back to web APIs, so
// the same code runs in both. See docs/IOS.md for the plugins the native project should install.
import { read, remove, write } from './store.js';
import { download } from './util.js';

const nativeApp = () => globalThis.Capacitor?.isNativePlatform?.() ? globalThis.Capacitor : null;
// AdiPiña has no JavaScript bundler, so native plugins are not imported from npm: they are registered at runtime
// by name, and only when the native side reports them as installed (otherwise the web fallback is used).
const registered = new Map();
function plugin(name) {
  const cap = nativeApp();
  if (!cap) return null;
  if (cap.Plugins?.[name]) return cap.Plugins[name];
  if (!cap.isPluginAvailable?.(name) || !cap.registerPlugin) return null;
  if (!registered.has(name)) registered.set(name, cap.registerPlugin(name));
  return registered.get(name);
}
export const isNative = () => !!nativeApp();
export { plugin as nativePlugin };

// ---- Room server ----
// The web client talks to its own origin. The iOS build sets window.ADIPINA_SERVER (an HTTPS address) before
// loading app.js; for testing, the address can also be set in Ajustes.
export function serverBase(settings) {
  return String(globalThis.ADIPINA_SERVER || settings.server || '').trim().replace(/\/+$/, '');
}
export const roomUrl = (settings, path) => serverBase(settings) + path;
// Address of a web page that opens invitation («?sala=») and scoreboard («#marcador=») links. The iOS build sets
// window.ADIPINA_LINK_BASE (the published portal, e.g. GitHub Pages). Otherwise: this page when the web app serves
// itself, or the room server when it is the Node server (it serves the app). A Supabase Edge Function cannot serve
// HTML (it is rewritten to text/plain), so without a portal there is no link: '' (invite by code only).
export function inviteBase(settings) {
  const portal = String(globalThis.ADIPINA_LINK_BASE || '').trim().replace(/\/+$/, '');
  if (portal) return portal;
  const server = serverBase(settings);
  if (!server) return `${location.origin}${location.pathname}`.replace(/\/$/, '');
  return /\/functions\/v1\/[^/]+$/.test(server) ? '' : server;
}
// Invitation for a room: a web link when there is a portal, otherwise the app's own scheme (opens AdiPiña directly
// when it is installed, for example from the QR code).
export const inviteUrl = (settings, code) => `${inviteBase(settings) || 'adipina://join'}/?sala=${code}`;

// ---- Room access (token and host key) ----
// The web keeps it in localStorage. In the iPhone app, when the Keychain-backed plugin
// (capacitor-secure-storage-plugin, «SecureStoragePlugin») is installed, the session lives only there and in
// memory: nothing is written to the WebView storage. Capacitor Preferences is NOT used for it: it is plain
// app preferences, not the Keychain. Without the secure plugin the app falls back to the web behaviour.
const SESSION_KEY = 'adipina.room';
const secureStore = () => plugin('SecureStoragePlugin');
let nativeSession = null;
export const sessionStorageKind = () => secureStore() ? 'keychain' : 'web';
// Returns a promise in the app, so a caller that is about to reload (delete all data) can wait for the Keychain.
export function saveSession(session) {
  const secure = secureStore();
  if (!secure) { write('room', session); return Promise.resolve(); }
  nativeSession = session || null;
  remove('room');
  return Promise.resolve(session ? secure.set({ key: SESSION_KEY, value: JSON.stringify(session) }) : secure.remove({ key: SESSION_KEY })).catch(() => {});
}
export const loadSession = () => secureStore() ? nativeSession : read('room', null);
// Called once before the first screen. Moves a session left in the WebView by an older version into the
// Keychain and deletes the web copy.
export async function restoreNativeSession() {
  const secure = secureStore();
  if (!secure) return;
  const legacy = read('room', null);
  if (legacy) {
    remove('room');
    nativeSession = legacy;
    try { await secure.set({ key: SESSION_KEY, value: JSON.stringify(legacy) }); } catch { /* Kept in memory for this run. */ }
    return;
  }
  try { const { value } = await secure.get({ key: SESSION_KEY }); nativeSession = value ? JSON.parse(value) : null; } catch { nativeSession = null; }
}

// ---- Vibration, screen and sharing ----
export function vibrate(settings, pattern = 60) {
  if (!settings.vibration) return;
  const haptics = plugin('Haptics');
  if (haptics) { haptics.vibrate({ duration: Array.isArray(pattern) ? pattern[0] : pattern }).catch?.(() => {}); return; }
  try { navigator.vibrate?.(pattern); } catch { /* Not supported (for example Safari on iPhone). */ }
}
let wakeLock = null;
export async function keepAwake() {
  const keep = plugin('KeepAwake');
  if (keep) { keep.keepAwake().catch?.(() => {}); return; }
  try { if ('wakeLock' in navigator && !wakeLock) { wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release', () => { wakeLock = null; }); } } catch { /* The timer still uses elapsed time without a wake lock. */ }
}
export const hasWakeLock = () => !!wakeLock;
export async function share({ title, text, url }) {
  const native = plugin('Share');
  if (native) {
    try { await native.share({ title, text, url }); return true; }
    // The iOS share sheet rejects the promise when it is closed without sharing: that is not an error. Any other
    // failure tries the web alternatives below.
    catch (error) { if (/cancel/i.test(String(error?.message ?? error))) return true; }
  }
  if (navigator.share) { try { await navigator.share({ title, text, url }); return true; } catch (error) { if (error.name === 'AbortError') return true; } }
  try { if (navigator.clipboard && globalThis.isSecureContext) { await navigator.clipboard.writeText([text, url].filter(Boolean).join(' ')); return 'copied'; } } catch { /* Clipboard not allowed. */ }
  return false;
}
// Saves a text file (exported content, reports). A browser downloads it; the iPhone app cannot (the WebView ignores
// downloads), so it opens the share sheet with the text instead: from there it can be sent or saved in Files.
// Returns 'downloaded', or what share() returns.
export function saveText(filename, text, type = 'application/json', shareText = text) {
  if (!isNative()) { download(filename, text, type); return Promise.resolve('downloaded'); }
  return share({ title: filename, text: shareText });
}
// ---- Text size (Dynamic Type) ----
// The WebView ignores the text size chosen in iOS Settings. TextZoom (@capacitor/text-zoom) reads it, relative to
// the default size, and the page applies it as the official plugin does. Capped at the largest size the interface
// has been checked with (npm run e2e): the accessibility sizes, up to three times larger, overflow the screens.
// Smaller sizes keep the default, since some labels are already small.
export const MAX_TEXT_SCALE = 1.35;
export async function applyTextSize() {
  const zoom = plugin('TextZoom');
  if (!zoom) return null;
  try {
    const { value } = await zoom.getPreferred();
    const scale = Math.min(MAX_TEXT_SCALE, Math.max(1, Number(value) || 1));
    document.body.style.webkitTextSizeAdjust = `${Math.round(scale * 100)}%`;
    return scale;
  } catch { return null; }
}
// Called when the app returns to the foreground (web: visibilitychange; app: Capacitor «appStateChange»).
export function onForeground(callback) {
  document.addEventListener('visibilitychange', () => { if (!document.hidden) callback(); });
  plugin('App')?.addListener?.('appStateChange', ({ isActive }) => { if (isActive) callback(); });
}
// Invitation or scoreboard links opened while the app is running (universal links in the iPhone app).
export function onOpenUrl(callback) { plugin('App')?.addListener?.('appUrlOpen', ({ url }) => callback(url)); }
// The link that launched a closed app (cold start). The web build gets it from location instead.
export async function launchUrl() {
  try { return (await plugin('App')?.getLaunchUrl?.())?.url || null; } catch { return null; }
}
export function onBackground(callback) {
  document.addEventListener('visibilitychange', () => { if (document.hidden) callback(); });
  window.addEventListener('pagehide', callback);
  plugin('App')?.addListener?.('appStateChange', ({ isActive }) => { if (!isActive) callback(); });
}
