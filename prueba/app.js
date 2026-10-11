import { BANK, avatarFor, packConfig, normalize, selectCards } from './content.js';
import { Game, distributePlayers, validateConfig } from './game.js';
import { S, newTeam, cleanConfig } from './client/state.js';
import { $, clock, download, escape, quantity, uid } from './client/util.js';
import * as store from './client/store.js';
import { applyTextSize, inviteBase, inviteUrl, isNative, keepAwake, launchUrl, onBackground, onForeground, onOpenUrl, restoreNativeSession, loadSession, saveSession, saveText, share, vibrate } from './client/platform.js';
import { initSound, ring, success, tick } from './client/sound.js';
import { api, connectRoom, disconnectRoom, lostAccess, roomAction, saveRoomSession, setRoomHooks } from './client/room.js';
import { initCanvas, pen, redraw, resetCanvas, stopCanvas } from './client/canvas.js';
import { canControl, categories, footer, header, isActive, isHost, isViewer, main, selectionInfo } from './client/views.js';
import * as D from './client/dialogs.js';
import { resultText } from './client/stats.js';

function toast(message) { const el = $('#toast'); el.textContent = message; el.classList.add('visible'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('visible'), 4500); }
store.setStorageWarning(() => toast('El navegador no permite guardar. Puedes seguir jugando en esta sesión.'));
const saveSetup = () => store.write('setup', { config: S.config, teams: S.teams });
const saveLocal = () => { if (S.game && !S.remote) store.saveGame(S.game); };
const lines = value => value.split('\n').map(v => v.trim()).filter(Boolean);

function render() {
  stopCanvas();
  $('#app').dataset.screen = S.screen;
  $('#app').dataset.phase = S.game?.state.phase || '';
  $('#app').innerHTML = `${header()}<main id="main" tabindex="-1">${main()}</main>${S.screen === 'game' ? '' : footer()}`;
  if ($('#draw-canvas')) initCanvas(() => canControl() && S.game?.state.phase === 'playing');
  updateTimer();
  trackSeen();
  announce();
}

// Cards count as seen as soon as this phone shows them (not only at the end), so an abandoned game does not
// bring them back. In a room, the other phones learn the cards when the game finishes (usedIds).
const shownHere = new Set();
function trackSeen() {
  const s = S.game?.state;
  if (!s || isViewer()) return;
  const fresh = (S.remote ? [s.current?.id, ...(s.usedIds || [])] : s.used).filter(id => id && !shownHere.has(id));
  if (!fresh.length) return;
  fresh.forEach(id => shownHere.add(id));
  store.addSeen(fresh);
}
// Screen readers (VoiceOver) hear turn changes without seeing the screen. Answers are never announced.
const announcer = Object.assign(document.createElement('div'), { id: 'announcer' });
announcer.setAttribute('role', 'status'); announcer.setAttribute('aria-live', 'polite');
announcer.style.cssText = 'position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap;border:0';
document.body.append(announcer);
let announced = null;
function announce() {
  const game = S.game;
  if (S.screen !== 'game' || !game) { announced = null; return; }
  const s = game.state, team = game.team, key = `${s.phase}:${s.turnIndex}:${s.stage}`;
  if (announced === key) return;
  announced = key;
  const text = {
    handoff: `Turno de ${team.name}.${game.player ? ` ${game.player} da las pistas.` : ''}`,
    playing: isActive() && !isViewer() ? 'Empieza el tiempo. La respuesta está en pantalla.' : `${team.name} está jugando.`,
    paused: 'Partida en pausa.', exhausted: 'No quedan tarjetas.',
    summary: `Fin del turno de ${team.name}: ${s.turn.points} ${Math.abs(s.turn.points) === 1 ? 'punto' : 'puntos'}.`,
    finished: `Partida terminada. ${game.winners.length > 1 ? 'Empate entre' : 'Gana'} ${game.winners.map(item => item.name).join(' y ')}.`
  }[s.phase];
  if (text) announcer.textContent = text;
}
function go(next) { S.screen = next; render(); window.scrollTo({ top: 0, behavior: 'instant' }); $('#main')?.focus({ preventScroll: true }); }

// ---- Feedback: timer, countdown, end of turn ----
function remainingMs() {
  const s = S.game.state;
  return S.remote ? Math.max(0, S.remoteRemainingAt - (s.phase === 'playing' ? performance.now() - S.remoteReceivedAt : 0)) : s.remaining;
}
function updateTimer() {
  const el = $('#time-left'); if (!el || !S.game) return;
  const s = S.game.state, remaining = remainingMs(), secs = Math.ceil(remaining / 1000);
  el.textContent = clock(remaining);
  el.setAttribute('aria-label', `${secs} ${secs === 1 ? 'segundo restante' : 'segundos restantes'}`);
  el.closest('.timer-block').classList.toggle('urgent', secs <= 10);
  $('#time-progress').style.width = `${Math.max(0, Math.min(100, remaining / S.game.turnDuration() * 100))}%`;
  // Countdown: a tick per second in the last 10 s (and a short vibration in the last 5) on the playing phone.
  if (s.phase === 'playing' && secs > 0 && secs <= 10 && S.lastTick !== secs && (isActive() || isViewer())) {
    S.lastTick = secs; tick(S.settings, secs <= 3);
    if (secs <= 5 && isActive()) vibrate(S.settings, 40);
  }
}
function endOfTurnFeedback() { ring(S.settings); if (isActive()) vibrate(S.settings, [200, 100, 200]); S.lastTick = null; }
function recordFinished() {
  const s = S.game.state;
  const key = `${S.remote?.code || 'local'}:${s.turns?.length}:${s.teams.map(team => team.score).join(',')}`;
  if (S.recorded === key || isViewer()) return;
  S.recorded = key;
  const ids = S.remote ? s.usedIds || [] : s.used;
  store.addSeen(ids);
  store.addHistory({ date: new Date().toISOString(), winners: S.game.winners.map(team => team.name), teams: s.teams.map(team => ({ name: team.name, score: team.score })), mode: S.remote ? 'sala' : 'local' });
}

// ---- Rooms ----
function applySnapshot(snapshot) {
  if (!S.remote || (S.remote.snapshot && snapshot.revision < S.remote.snapshot.revision)) return;
  const previous = S.remote.snapshot, oldRevision = previous?.revision, oldPhase = S.game?.state.phase;
  const becameHost = previous && !previous.identity.host && snapshot.identity.host;
  const presence = teams => JSON.stringify(teams?.map(team => team.online));
  const presenceChanged = presence(previous?.teams) !== presence(snapshot.teams);
  if (previous?.identity.host && !snapshot.identity.host) { S.remote.hostKey = null; saveRoomSession(); }
  S.remote.snapshot = snapshot;
  if (becameHost) { toast('Ahora este móvil es el maestro de la sala.'); fetchHostKey(); }
  if (snapshot.state) {
    S.game = Object.create(Game.prototype); S.game.state = snapshot.state; S.game.random = Math.random;
    S.remoteRemainingAt = snapshot.state.remaining; S.remoteReceivedAt = performance.now();
    if (S.screen !== 'game') { S.screen = 'game'; S.drawingOpen = false; resetCanvas(); }
    if (snapshot.state.phase === 'summary' && oldPhase === 'playing') endOfTurnFeedback();
    if (snapshot.state.phase === 'finished' && oldPhase !== 'finished') recordFinished();
  } else { S.game = null; S.screen = 'lobby'; }
  if (oldRevision !== snapshot.revision || oldPhase !== S.game?.state.phase || presenceChanged) {
    if (S.remote.lastSequence !== snapshot.state?.cardSequence) { S.drawingOpen = false; resetCanvas(); }
    S.remote.lastSequence = snapshot.state?.cardSequence;
    render();
  } else updateTimer();
}
setRoomHooks({
  snapshot: applySnapshot, render,
  leave: (target, message) => { go(target); if (message) toast(message); },
  replaced: () => { go('home'); toast('La sala está abierta en otra pestaña de este móvil. Puedes volver aquí con «Volver a la sala».'); }
});
async function fetchHostKey() {
  try {
    const result = await api(`/api/rooms/${S.remote.code}/action`, { method: 'POST', body: JSON.stringify({ action: 'host-key', payload: {} }) });
    S.remote.hostKey = result.hostKey; saveRoomSession(); applySnapshot(result);
    D.hostKeyDialog('Este móvil es ahora el maestro. Esta es su clave de recuperación.');
  } catch (error) { toast(error.message); }
}
// If the server cannot be reached, the host carries on with the same teams and points on this phone.
function continueLocally() {
  const snapshot = S.remote.snapshot, st = snapshot.state, config = cleanConfig(snapshot.config);
  const cards = selectCards(config, S.customCards);
  const game = new Game(config, st.teams, cards, Math.random, { seen: store.loadSeen() });
  Object.assign(game.state, { teams: structuredClone(st.teams), turns: structuredClone(st.turns || []), adjustments: structuredClone(st.adjustments || []), stage: st.stage || 1 });
  game.state.turnIndex = st.phase === 'summary' && !game.lastTurn ? st.turnIndex + 1 : st.turnIndex;
  game.state.phase = st.phase === 'finished' || (st.phase === 'summary' && game.lastTurn) ? 'finished' : 'handoff';
  game.state.remaining = game.turnDuration();
  disconnectRoom({ forget: false });
  S.game = game; S.playType = 'local'; saveLocal(); go('game');
  toast('Seguís en este móvil con los mismos puntos. Puede repetirse alguna tarjeta de la sala.');
}

// ---- Starting games ----
async function begin() {
  S.config.categoryLabels = Object.fromEntries(categories().map(category => [category.id, category.name]));
  const cards = selectCards(S.config, S.customCards), errors = validateConfig(S.config, S.teams, cards);
  if (errors.length) { S.step = 4; go('setup'); toast(errors[0]); return; }
  saveSetup();
  const seen = store.loadSeen();
  if (S.playType === 'room') {
    const session = await api('/api/rooms', { method: 'POST', body: JSON.stringify({ config: S.config, teams: S.teams, customCards: S.customCards, seen: seen.slice(-3000) }) }, null);
    await connectRoom(session);
    D.hostKeyDialog('Sala abierta. Esta es la clave del maestro.');
  } else {
    disconnectRoom(); store.saveGame(null);
    S.game = new Game(S.config, S.teams, cards, Math.random, { seen }); saveLocal(); go('game');
  }
}
function quickStart(customize) {
  const q = S.quick, players = lines(q.players);
  if (players.length && players.length < q.teams) { toast('Hacen falta al menos tantas personas como piñas.'); return; }
  if (new Set(players.map(normalize)).size !== players.length) { toast('Distingue los nombres repetidos, por ejemplo «Ana G.» y «Ana M.».'); return; }
  S.config = cleanConfig(packConfig(S.config, q.pack));
  while (S.teams.length < q.teams) S.teams.push(newTeam(S.teams.length));
  S.teams = S.teams.slice(0, q.teams);
  if (players.length) {
    S.teams = distributePlayers(players, q.teams).map((members, i) => ({ ...S.teams[i], members }));
    S.teamType = 'random'; S.randomPlayers = q.players; S.randomCount = q.teams; store.rememberPlayers(players);
  }
  saveSetup();
  if (customize) { S.step = 0; S.savedPlayers = store.loadPlayers(); go('setup'); } else return begin();
}
function validateStep() {
  const { step, teams, config } = S;
  if (step === 0) {
    if (teams.some(t => !t.name.trim())) return 'Todas las piñas necesitan un nombre.';
    if (new Set(teams.map(t => normalize(t.name))).size !== teams.length) return 'Usa nombres distintos para las piñas.';
    if (S.teamType === 'random' && teams.some(t => !t.members.length)) return 'Sortea los equipos y deja al menos una persona en cada piña.';
  }
  if (step === 1 && !config.modes.length) return 'Selecciona al menos una modalidad.';
  if (step === 2 && !selectCards(config, S.customCards).length) return 'No hay respuestas disponibles. Cambia tu selección o añade respuestas.';
  if (step === 3) return validateConfig(config, teams, selectCards(config, S.customCards))[0];
}
// Changing any content option leaves the chosen pack: the selection is now your own.
const customise = () => { S.config.pack = null; };

// ---- Playing (local or room) ----
async function gameAction(action, extra = {}) {
  initSound(S.settings);
  if (action === 'ready' || action === 'resume') keepAwake();
  if (S.remote) { const result = await roomAction(action, extra); if (action === 'correct' && result) success(S.settings); return; }
  const game = S.game, now = Date.now(), previousPhase = game.state.phase;
  if (action === 'ready') game.start(now);
  else if (['correct', 'skipped', 'forbidden'].includes(action)) { if (game.answer(action, now) && action === 'correct') success(S.settings); resetDrawing(); }
  else if (action === 'award') { if (game.award(extra.teamId, now)) success(S.settings); resetDrawing(); }
  else if (action === 'undo') { game.undo(now); resetDrawing(); }
  else if (action === 'revise') game.revise(extra.index, extra.result, extra.teamId);
  else if (action === 'adjust') game.adjust(extra.teamId, extra.delta);
  else if (action === 'pause') game.pause(now);
  else if (action === 'resume') game.resume(now);
  else if (action === 'reuse') { game.reuse(now); resetDrawing(); }
  else if (action === 'next') { game.nextTurn(); resetDrawing(); }
  else if (action === 'finish') game.finishGame();
  else if (action === 'rematch') { S.game = game.rematch(); resetDrawing(); }
  if (previousPhase === 'playing' && S.game.state.phase === 'summary') endOfTurnFeedback();
  if (S.game.state.phase === 'finished' && previousPhase !== 'finished') recordFinished();
  saveLocal(); render();
}
function resetDrawing() { S.drawingOpen = false; resetCanvas(); }

// ---- Custom content ----
function saveCustom() {
  let id = $('#custom-category').value;
  const categoryTitle = $('#custom-category-name').value.trim(), answers = lines($('#custom-answers').value);
  if (!answers.length) return toast('Añade al menos una respuesta.');
  if (answers.some(a => a.length > 120)) return toast('Cada respuesta puede tener hasta 120 caracteres.');
  if (S.customCards.length + answers.length > 2000) return toast('Puedes guardar hasta 2000 respuestas propias.');
  if (id === 'new') {
    if (!categoryTitle) return toast('Pon un nombre a la categoría nueva.');
    id = categories().find(c => normalize(c.name) === normalize(categoryTitle))?.id || `custom-${uid()}`;
  }
  const added = addCustom(answers.map(answer => ({ answer, category: id, difficulty: $('#custom-difficulty').value })));
  if (!added) return toast('Estas respuestas ya están en el banco o en tu contenido.');
  if (!categories().some(c => c.id === id)) S.customCategories.push({ id, name: categoryTitle, icon: 'star' });
  if (!S.config.categories.includes(id)) S.config.categories.push(id);
  store.write('categories', S.customCategories); saveSetup(); D.closeDialog(); render();
  toast(`${quantity(added, 'respuesta guardada', 'respuestas guardadas')}${answers.length > added ? ` · ${quantity(answers.length - added, 'duplicada omitida', 'duplicadas omitidas')}` : ''}.`);
}
function addCustom(cards) {
  const seen = new Set([...BANK, ...S.customCards].map(card => normalize(card.answer)));
  let added = 0;
  for (const card of cards) {
    const key = normalize(card.answer);
    if (!key || seen.has(key) || S.customCards.length >= 2000) continue;
    seen.add(key); added++;
    S.customCards.push({ id: `card-${uid()}`, answer: card.answer.trim().slice(0, 120), category: card.category, subcategory: null, difficulty: ['easy', 'medium', 'hard'].includes(card.difficulty) ? card.difficulty : 'medium' });
  }
  store.write('cards', S.customCards);
  return added;
}
// A file in the browser; in the iPhone app, the share sheet with the same content as text (see saveText).
async function exportCustom() {
  const data = { app: 'adipina', format: 1, categories: S.customCategories.map(({ id, name }) => ({ id, name })), cards: S.customCards.map(({ answer, category, difficulty }) => ({ answer, category, difficulty })) };
  const result = await saveText('adipina-contenido.json', JSON.stringify(data, null, 2), 'application/json', `Contenido de AdiPiña. Cópialo entero y, en el otro móvil, abre AdiPiña › Ajustes › Pegar contenido copiado.\n${JSON.stringify(data)}`);
  if (result === 'downloaded') toast('Archivo guardado. Ábrelo desde AdiPiña en otro móvil para importarlo.');
  else if (result === 'copied') toast('Contenido copiado. En el otro móvil: Ajustes › Pegar contenido copiado.');
  else if (!result) toast('Este dispositivo no permite compartir el contenido.');
}
// From a file or from pasted text. Text around the data (the line that explains how to import it) is ignored.
async function importCustom(text) {
  try {
    const data = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
    if (data?.app !== 'adipina' || !Array.isArray(data.cards) || !Array.isArray(data.categories)) throw new Error();
    const ids = new Map();
    for (const category of data.categories.slice(0, 200)) {
      if (typeof category?.id !== 'string' || typeof category?.name !== 'string' || !category.name.trim()) continue;
      const existing = categories().find(c => normalize(c.name) === normalize(category.name));
      const id = existing?.id || `custom-${uid()}`;
      if (!existing) S.customCategories.push({ id, name: category.name.trim().slice(0, 40), icon: 'star' });
      ids.set(category.id, id);
    }
    const cards = data.cards.filter(card => typeof card?.answer === 'string' && card.answer.trim()).map(card => ({ ...card, category: ids.get(card.category) || (categories().some(c => c.id === card.category) ? card.category : null) })).filter(card => card.category);
    const added = addCustom(cards);
    store.write('categories', S.customCategories);
    D.closeDialog(); render();
    const repeated = cards.length - added;
    toast(`${added === 1 ? 'Importada' : 'Importadas'} ${quantity(added, 'respuesta', 'respuestas')}${repeated ? ` · ${repeated === 1 ? 'una ya existía' : `${repeated} ya existían`}` : ''}.`);
  } catch { toast('No es un contenido de AdiPiña válido. Comprobad que esté completo.'); }
}

// ---- Actions ----
async function onAction(el, kind) {
  if (el.disabled) return;
  const action = el.dataset.action, value = el.dataset.value, i = Number(el.dataset.team);
  if (kind === 'change') return onChange(el);
  try {
    switch (action) {
      case 'close-dialog': D.closeDialog(); return;
      case 'sound': S.settings.muted = !S.settings.muted; store.saveSettings(S.settings); if (!S.settings.muted) { initSound(S.settings); ring(S.settings); } render(); return;
      case 'settings': D.settingsDialog(); return;
      case 'help': D.helpDialog(); return;
      case 'home':
        if (S.screen === 'game' && S.game?.state.phase !== 'finished' && !isViewer()) { D.exitDialog(); if (!S.remote && S.game?.state.phase === 'playing') { S.game.pause(Date.now()); saveLocal(); render(); } return; }
        if (S.remote) disconnectRoom();
        go('home'); return;
      case 'new-local': case 'new-room': disconnectRoom({ forget: false }); S.remote = null; S.playType = action === 'new-room' ? 'room' : 'local'; go('quick'); return;
      case 'join-page': go('join'); return;
      case 'restore-local': S.game = store.loadGame(); if (!S.game) { toast('No se pudo recuperar la partida guardada.'); store.saveGame(null); render(); return; } resetDrawing(); go('game'); return;
      case 'restore-room': await connectRoom(loadSession()); return;
      // Quick game
      case 'play-type': S.playType = value; render(); return;
      case 'quick-pack': S.quick.pack = value; render(); return;
      case 'quick-less': S.quick.teams = Math.max(2, S.quick.teams - 1); render(); return;
      case 'quick-more': S.quick.teams = Math.min(12, S.quick.teams + 1); render(); return;
      case 'quick-start': await quickStart(false); return;
      case 'quick-customize': await quickStart(true); return;
      case 'use-preset': { const preset = store.loadPresets()[Number(value)]; if (!preset) return; S.config = cleanConfig(preset.config); if (Array.isArray(preset.teams) && preset.teams.length >= 2) S.teams = structuredClone(preset.teams); saveSetup(); await begin(); return; }
      // Setup steps
      case 'step': if (Number(value) > S.step) { const error = validateStep(); if (error) return toast(error); } S.step = Number(value); render(); return;
      case 'next-step': { const error = validateStep(); if (error) return toast(error); S.step++; saveSetup(); go('setup'); return; }
      case 'previous-step': S.step--; go('setup'); return;
      case 'team-type': S.teamType = value; S.savedPlayers = store.loadPlayers(); render(); return;
      case 'team-more': S.teams.push(newTeam(S.teams.length)); saveSetup(); render(); return;
      case 'team-less': S.teams.pop(); saveSetup(); render(); return;
      case 'color': S.teams[i].color = value; saveSetup(); render(); return;
      // A character brings its accent colour, which can still be changed; the classic pineapple keeps its own.
      case 'avatar': { const team = S.teams[i], avatar = avatarFor(value); if (avatar) { team.avatar = avatar.id; team.color = avatar.accent; } else delete team.avatar; saveSetup(); render(); return; }
      case 'accessory': { const acc = S.teams[i].accessories; S.teams[i].accessories = acc.includes(value) ? acc.filter(v => v !== value) : [...acc, value]; saveSetup(); render(); return; }
      case 'add-player': { const current = lines(S.randomPlayers); S.randomPlayers = (current.includes(value) ? current.filter(name => name !== value) : [...current, value]).join('\n'); render(); return; }
      case 'shuffle': {
        const players = lines(S.randomPlayers);
        if (players.length < 2) return toast('Introduce al menos dos personas.');
        if (players.some(p => p.length > 60)) return toast('Los nombres pueden tener hasta 60 caracteres.');
        if (new Set(players.map(normalize)).size !== players.length) return toast('Distingue los nombres repetidos, por ejemplo «Ana G.» y «Ana M.».');
        if (players.length > 100) return toast('Puedes repartir hasta 100 personas.');
        const count = S.randomMethod === 'count' ? S.randomCount : Math.ceil(players.length / S.randomSize);
        if (!Number.isInteger(count) || count < 2 || count > 12 || count > players.length) return toast('Elige de 2 a 12 equipos, con al menos una persona en cada uno.');
        S.teams = distributePlayers(players, count).map((members, index) => ({ ...(S.teams[index] || newTeam(index)), members }));
        store.rememberPlayers(players); S.savedPlayers = store.loadPlayers(); saveSetup(); render(); return;
      }
      case 'format': S.config.format = value; if (value === 'rounds3') { S.config.modes = ['description', 'oneword', 'mime']; S.config.modeStyle = 'rounds'; } break;
      case 'mode': S.config.modes = S.config.modes.includes(value) ? S.config.modes.filter(v => v !== value) : [...S.config.modes, value]; break;
      case 'mode-style': S.config.modeStyle = value; break;
      case 'drawing-option': S.config.drawing = value; break;
      case 'pack': S.config = cleanConfig(packConfig(S.config, value)); break;
      case 'category': customise(); S.config.categories = S.config.categories.includes(value) ? S.config.categories.filter(v => v !== value) : [...S.config.categories, value]; break;
      case 'all-categories': customise(); S.config.categories = categories().map(c => c.id); break;
      case 'no-categories': customise(); S.config.categories = []; break;
      case 'music-sub': { customise(); const subs = S.config.subcategories.music || []; S.config.subcategories.music = subs.includes(value) ? subs.filter(v => v !== value) : [...subs, value]; break; }
      case 'difficulty': customise(); S.config.difficulty = value; break;
      case 'ages': customise(); S.config.ages = value; break;
      case 'mode-fit': customise(); S.config.modeFit = !S.config.modeFit; break;
      case 'source': S.config.source = value; break;
      case 'duration': S.config.duration = Number(value); break;
      case 'goal': S.config.target = value === 'points' ? S.config.target ?? 25 : null; break;
      case 'penalty': S.config.penalty = value === 'true'; break;
      case 'toggle-rule': S.config[value] = !S.config[value]; break;
      case 'custom-editor': D.customEditor(); return;
      case 'save-custom': saveCustom(); return;
      case 'manage-custom': D.manageCustom(); return;
      case 'delete-custom': S.customCards = S.customCards.filter(c => c.id !== value); store.write('cards', S.customCards); render(); D.manageCustom(); return;
      case 'delete-category':
        if (S.customCards.some(card => card.category === value)) return;
        S.customCategories = S.customCategories.filter(category => category.id !== value); S.config.categories = S.config.categories.filter(id => id !== value);
        store.write('categories', S.customCategories); saveSetup(); render(); D.manageCustom(); return;
      case 'begin': await begin(); return;
      case 'save-preset': D.presetDialog(); return;
      case 'save-preset-confirm': { const name = $('#preset-name').value.trim(); if (!name) return toast('Ponle un nombre.'); store.savePresets([...store.loadPresets(), { name: name.slice(0, 40), config: S.config, teams: S.teams }]); D.closeDialog(); toast('Guardada. La encontraréis en «Partida rápida».'); return; }
      // Joining and rooms
      case 'find-room': {
        const code = $('#room-code').value.trim(); if (!/^\d{6}$/.test(code)) return toast('Introduce los 6 números del código.');
        S.joinLobby = await api(`/api/rooms/${code}/lobby`, {}, null); S.joinTeamId = ''; S.joinDetails = null; render(); return;
      }
      case 'join-select': S.joinTeamId = value; S.joinDetails = structuredClone(S.joinLobby.teams.find(t => t.id === value)); render(); return;
      case 'join-room': {
        const details = { name: $('#join-name').value.trim(), members: lines($('#join-members').value), color: $('#join-color').value, avatar: $('#join-avatar').value || null, accessories: [...document.querySelectorAll('input[name="join-accessory"]:checked')].map(input => input.value) };
        const session = await api(`/api/rooms/${S.joinLobby.code}/join`, { method: 'POST', body: JSON.stringify({ teamId: S.joinTeamId, details }) }, null); await connectRoom(session); return;
      }
      case 'recover-room': {
        const code = $('#room-code').value.trim(), key = $('#recovery-key').value.trim();
        if (!/^\d{6}$/.test(code)) return toast('Introduce los 6 números del código de sala.');
        if (!key) return toast('Escribe el código de recuperación o la clave del maestro.');
        const session = await api(`/api/rooms/${code}/recover`, { method: 'POST', body: JSON.stringify({ key }) }, null);
        await connectRoom({ code: session.code, token: session.token, hostKey: session.hostKey || null });
        if (session.hostKey) D.hostKeyDialog('Has recuperado el papel de maestro. Esta es tu clave nueva: la anterior ya no sirve.');
        else toast('Listo: este móvil juega ahora con vuestra piña.');
        return;
      }
      case 'host-claim': await api(`/api/rooms/${S.remote.code}/join`, { method: 'POST', body: JSON.stringify({ teamId: value }) }); applySnapshot(await api(`/api/rooms/${S.remote.code}`)); return;
      case 'release-team': await roomAction('release', { teamId: value }); return;
      case 'leave-room': { const code = S.remote.code; S.leaving = true; try { await roomAction('leave'); } finally { S.leaving = false; } disconnectRoom(); S.joinLobby = await api(`/api/rooms/${code}/lobby`, {}, null); S.joinTeamId = ''; S.joinDetails = null; go('join'); return; }
      case 'disconnect-room': disconnectRoom(); go('home'); return;
      case 'start-room-game': initSound(S.settings); await roomAction('start-game'); keepAwake(); return;
      case 'copy-room': {
        // Without a web portal the invitation is the code alone: a custom-scheme link is not clickable in chats.
        const url = inviteBase(S.settings) ? inviteUrl(S.settings, S.remote.code) : undefined;
        const text = `Únete a nuestra sala de AdiPiña con el código ${S.remote.code}${url ? '' : ': abre la app y entra en «Unirme con código».'}`;
        const result = await share({ title: '¡Haz piña en AdiPiña!', text, url });
        if (result === 'copied') toast('Invitación copiada. Compártela con las otras piñas.');
        else if (!result) D.dialog(`<h2>Invita a las piñas</h2><p>Código: <strong>${S.remote.code}</strong></p>${url ? `<label for="invite-link">Copia este enlace</label><input id="invite-link" readonly value="${url}"/>` : '<p>Abrid AdiPiña y entrad en «Unirme con código».</p>'}`);
        return;
      }
      case 'room-tools': D.roomToolsDialog(); return;
      case 'show-host-key': if (S.remote.hostKey) D.hostKeyDialog(); else await fetchHostKey(); return;
      case 'recovery-code': {
        const result = await roomAction('recovery-code', { teamId: value }, { retry: false });
        if (!result?.recovery) return;
        const team = S.remote.snapshot.teams.find(t => t.id === value);
        D.dialog(`<span class="eyebrow">CAMBIO DE MÓVIL</span><h2>${escape(team?.name || 'Piña')}</h2><div class="room-code-panel"><span>CÓDIGO DE RECUPERACIÓN</span><strong>${result.recovery.code}</strong><small>Sala ${S.remote.code} · un solo uso · caduca en ${Math.round(result.recovery.expiresIn / 60000)} minutos</small></div><p>En el móvil nuevo: «Unirme con código», escribe el código de sala y este código en «Recuperar acceso». Si la piña está jugando, su turno queda en pausa hasta que el móvil nuevo continúe.</p><button type="button" class="btn primary full-width" data-action="close-dialog">Hecho</button>`);
        return;
      }
      case 'transfer-host': {
        const team = S.remote.snapshot.teams.find(t => t.id === value);
        D.dialog(`<h2>¿Pasar el papel de maestro a ${escape(team?.name || 'esta piña')}?</h2><p>Su móvil podrá empezar, pausar y terminar la partida y gestionar la sala. ${S.remote.snapshot.identity.teamId ? 'Este móvil seguirá jugando con vuestra piña.' : 'Este móvil saldrá de la sala.'} La clave del maestro actual dejará de funcionar.</p><div class="stack-actions"><button type="button" class="btn primary" data-action="confirm-transfer-host" data-value="${escape(value)}">Pasar el papel</button><button type="button" class="btn secondary" data-action="close-dialog">Cancelar</button></div>`);
        return;
      }
      case 'confirm-transfer-host': {
        D.closeDialog(); S.leaving = true;
        let result; try { result = await roomAction('transfer-host', { teamId: value }, { retry: false }); } finally { S.leaving = false; }
        if (result?.left) { disconnectRoom(); go('home'); toast('El papel de maestro ha pasado a otra piña.'); }
        else if (result) { S.remote.hostKey = null; saveRoomSession(); render(); toast('El papel de maestro ha pasado a otra piña. Este móvil sigue jugando.'); }
        return;
      }
      case 'close-room-confirm': D.dialog('<h2>¿Cerrar la sala?</h2><p>La partida termina en todos los móviles y sus datos se borran del servidor. No se puede deshacer.</p><div class="stack-actions"><button type="button" class="btn primary" data-action="close-room">Cerrar la sala</button><button type="button" class="btn secondary" data-action="close-dialog">Cancelar</button></div>'); return;
      case 'close-room': D.closeDialog(); S.leaving = true; try { await roomAction('close-room', {}, { retry: false }); } finally { S.leaving = false; } disconnectRoom(); go('home'); toast('Sala cerrada.'); return;
      case 'viewer-link': { const result = await roomAction('viewer-link', {}, { retry: false }); if (result?.viewer) D.viewerDialog(`${inviteBase(S.settings)}/#marcador=${S.remote.code}.${result.viewer.token}`); return; }
      case 'copy-viewer': { const result = await share({ title: 'Marcador de AdiPiña', text: 'Marcador de la partida', url: value }); if (result === 'copied') toast('Enlace copiado.'); return; }
      case 'continue-local': continueLocally(); return;
      // Game
      case 'ready': case 'correct': case 'skipped': case 'forbidden': case 'pause': case 'resume': case 'reuse': case 'next': case 'rematch': case 'undo': D.closeDialog(); await gameAction(action); return;
      case 'finish': D.closeDialog(); await gameAction('finish'); return;
      case 'finish-confirm': D.finishDialog(); return;
      case 'award-picker': D.awardDialog('allPlay'); return;
      case 'steal-picker': D.awardDialog('steal'); return;
      case 'award': D.closeDialog(); await gameAction('award', { teamId: value }); return;
      case 'revise': D.reviseDialog(Number(value)); return;
      case 'revise-set': D.closeDialog(); await gameAction('revise', { index: Number(value), result: el.dataset.result, teamId: el.dataset.team || null }); return;
      case 'adjust-score': D.adjustDialog(); return;
      case 'adjust': await gameAction('adjust', { teamId: value, delta: Number(el.dataset.delta) }); D.adjustDialog(); return;
      case 'report-card': { const card = S.game.state.current; if (!card) return; S.reportCard = { ...card, mode: S.game.state.mode }; D.reportDialog(S.reportCard); return; }
      case 'report-reason': { const card = S.reportCard; if (!card) return D.closeDialog(); S.reportCard = null; store.addReport({ id: card.id, answer: card.answer, category: card.category, reason: el.textContent.trim(), mode: card.mode, date: new Date().toISOString() }); D.closeDialog(); toast('Gracias. Tarjeta reportada en este móvil.'); return; }
      case 'open-canvas': S.drawingOpen = true; render(); return;
      case 'ink': pen.ink = value; pen.eraser = false; render(); return;
      case 'eraser': pen.eraser = !pen.eraser; render(); return;
      case 'undo-stroke': pen.strokes.pop(); redraw(); return;
      case 'clear-canvas': pen.strokes = []; redraw(); return;
      case 'exit-game': if (!S.remote && S.game.state.phase === 'playing') { S.game.pause(Date.now()); saveLocal(); render(); } D.exitDialog(); return;
      case 'confirm-exit': D.closeDialog(); if (S.remote) { S.stream?.close(); S.stream = null; S.remote = null; S.connected = false; } S.game = null; go('home'); return;
      case 'another-game': disconnectRoom(); store.saveGame(null); S.step = 0; go('quick'); return;
      case 'share-result': { const result = await share({ title: 'Resultado de AdiPiña', text: resultText(S.game.state, S.game.winners) }); if (result === 'copied') toast('Resultado copiado.'); else if (!result) toast('Este navegador no permite compartir.'); return; }
      // Settings and data
      case 'export-custom': await exportCustom(); return;
      case 'import-custom': $('#import-file')?.click(); return;
      case 'paste-custom': D.pasteDialog(); return;
      case 'import-text': { const text = $('#import-text').value.trim(); if (!text) return toast('Pega primero el contenido que os han enviado.'); await importCustom(text); return; }
      case 'show-history': D.historyDialog(); return;
      case 'clear-history': store.write('history', []); D.historyDialog(); return;
      case 'show-reports': D.reportsDialog(); return;
      case 'share-reports': { const text = store.loadReports().map(r => `${r.answer} (${r.category}): ${r.reason}`).join('\n'); const result = await share({ title: 'Tarjetas reportadas de AdiPiña', text }); if (result === 'copied') toast('Lista copiada.'); else if (!result && !isNative()) download('adipina-reportes.txt', text, 'text/plain'); else if (!result) toast('Este dispositivo no permite compartir la lista.'); return; }
      case 'clear-reports': store.clearReports(); D.reportsDialog(); return;
      case 'clear-seen': store.clearSeen(); D.settingsDialog(); toast('Las tarjetas vistas podrán volver a salir.'); return;
      case 'clear-all': D.dialog('<h2>¿Borrar todos los datos?</h2><p>Se borran ajustes, equipos, contenido propio, partidas guardadas, historial y el acceso a salas de este móvil. No se puede deshacer.</p><div class="stack-actions"><button type="button" class="btn primary" data-action="clear-all-confirm">Borrar todo</button><button type="button" class="btn secondary" data-action="close-dialog">Cancelar</button></div>'); return;
      case 'clear-all-confirm': disconnectRoom(); await saveSession(null); store.clearAll(); location.reload(); return;
      default: return;
    }
    // Setup changes that fall through the switch: save and redraw.
    saveSetup(); render();
  } catch (error) {
    if (lostAccess(error) && S.remote) toast(error.message);
    else toast(error.message || 'No se ha podido conectar. Comprueba la red y vuelve a intentarlo.');
  }
}
function onChange(el) {
  if (el.dataset.setting) {
    const name = el.dataset.setting, raw = el.value;
    if (name === 'server') {
      const value = raw.trim();
      if (value && !/^https?:\/\/[^\s/]+/i.test(value)) return toast('La dirección debe empezar por https://');
      S.settings.server = value;
    } else S.settings[name] = raw === 'true' ? true : raw === 'false' ? false : raw;
    store.saveSettings(S.settings); if (!S.settings.muted) initSound(S.settings); render(); return;
  }
  if (el.dataset.input === 'import-file' && el.files?.[0]) el.files[0].text().then(importCustom, () => toast('No se ha podido leer el archivo.'));
}

$('#app').addEventListener('click', event => { const el = event.target.closest('[data-action]'); if (el) onAction(el); });
D.setDialogHandler(onAction);
$('#app').addEventListener('input', event => {
  const el = event.target;
  if (el.dataset.field) { const team = S.teams[Number(el.dataset.team)]; team[el.dataset.field] = el.dataset.field === 'members' ? lines(el.value) : el.value; saveSetup(); }
  if (el.dataset.input === 'players') S.randomPlayers = el.value;
  if (el.dataset.input === 'quick-players') S.quick.players = el.value;
  if (el.dataset.input === 'random-value') { if (S.randomMethod === 'count') S.randomCount = Number(el.value); else S.randomSize = Number(el.value); }
  if (el.dataset.input === 'stroke-width') pen.width = Number(el.value);
  if (el.dataset.config) { S.config[el.dataset.config] = el.type === 'number' ? Number(el.value) : el.value; saveSetup(); }
});
$('#app').addEventListener('change', event => {
  const el = event.target;
  if (el.dataset.input === 'random-method') { S.randomMethod = el.value; render(); }
  if (el.dataset.config === 'skipPolicy') render();
  if (el.dataset.teamLevel !== undefined) { S.teams[Number(el.dataset.teamLevel)].difficulty = el.value || null; saveSetup(); }
  if (el.dataset.moveTeam !== undefined) { const from = Number(el.dataset.moveTeam), to = Number(el.value); if (from !== to) { const [member] = S.teams[from].members.splice(Number(el.dataset.member), 1); S.teams[to].members.push(member); saveSetup(); render(); } }
});

// Local clock: the engine works with dates, the interval only refreshes the screen.
setInterval(() => {
  if (!S.game || S.screen !== 'game') return;
  if (!S.remote && S.game.state.phase === 'playing' && S.game.tick(Date.now())) { endOfTurnFeedback(); resetDrawing(); saveLocal(); render(); }
  updateTimer();
}, 100);
setInterval(() => { if (S.game && !S.remote && S.screen === 'game') saveLocal(); }, 1000);
onBackground(() => { if (S.game && !S.remote && S.game.state.phase === 'playing') { S.game.pause(Date.now()); saveLocal(); render(); } });
onForeground(() => {
  applyTextSize(); // The text size may have changed in iOS Settings meanwhile.
  if (S.remote) api(`/api/rooms/${S.remote.code}`).then(applySnapshot).catch(error => toast(error.message));
  // Browsers release the screen lock when the page is hidden; take it again if this phone is mid-turn.
  if (S.game?.state.phase === 'playing' && isActive()) keepAwake();
});

if ('serviceWorker' in navigator && globalThis.isSecureContext) navigator.serviceWorker.register('./sw.js').catch(() => {});
await restoreNativeSession();
await applyTextSize();
S.savedPlayers = store.loadPlayers();
// Links: «?sala=123456» opens the join screen; «#marcador=CÓDIGO.TOKEN» turns this screen into the scoreboard.
function openLink(url) {
  const scoreboard = url.hash.match(/^#marcador=(\d{6})\.([a-f0-9]{48})$/);
  if (scoreboard) { connectRoom({ code: scoreboard[1], token: scoreboard[2], viewer: true }).catch(error => toast(error.message)); return true; }
  const room = url.searchParams.get('sala')?.replace(/\D/g, '').slice(0, 6);
  if (room) { S.lastRoomCode = room; S.joinLobby = null; S.screen = 'join'; }
  return false;
}
// In the iPhone app the page address is the bundle; a universal link that opened the app arrives as launchUrl.
const launched = await launchUrl();
let scoreboard = false;
try { scoreboard = openLink(new URL(launched || location.href)); } catch { scoreboard = openLink(new URL(location.href)); }
if (scoreboard) history.replaceState(null, '', location.pathname);
// In the iPhone app, a link opened while the app is running arrives here instead of reloading the page.
onOpenUrl(url => { try { if (!openLink(new URL(url))) render(); } catch { /* Not a link for this app. */ } });
render();
if (!S.settings.onboarded && !scoreboard) { S.settings.onboarded = true; store.saveSettings(S.settings); D.onboardingDialog(); }
