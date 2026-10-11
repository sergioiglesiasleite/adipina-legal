// Connection to a room on the server: REST calls, the live channel (SSE) and reconnection.
// The interface plugs in through setRoomHooks so this module stays free of views.
import { S } from './state.js';
import { roomUrl, saveSession } from './platform.js';
import { uid } from './util.js';

const hooks = { snapshot() {}, render() {}, leave() {}, replaced() {} };
export const setRoomHooks = handlers => Object.assign(hooks, handlers);
export const lostAccess = error => [401, 404, 410].includes(error.status);

export async function api(path, options = {}, token = S.remote?.token) {
  let response;
  try { response = await fetch(roomUrl(S.settings, path), { ...options, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers } }); }
  catch { throw new Error('No hay conexión con el servidor de salas. Comprueba la red y vuelve a intentarlo.'); }
  let data;
  try { data = await response.json(); } catch { throw Object.assign(new Error('El servidor de salas no está disponible.'), { status: response.ok ? undefined : response.status }); }
  if (!response.ok) throw Object.assign(new Error(data.error || 'No se pudo completar la acción.'), { status: response.status });
  return data;
}

// The scoreboard (viewer) session is never saved: it must not replace this device's own room access.
export function saveRoomSession() {
  if (S.remote && !S.remote.viewer) saveSession({ code: S.remote.code, token: S.remote.token, hostKey: S.remote.hostKey || null });
}
export async function connectRoom(session) {
  S.stream?.close(); clearTimeout(S.reconnectTimer);
  S.remote = { ...session, snapshot: null }; S.connected = false; S.lastRoomCode = session.code;
  try {
    const snapshot = await api(`/api/rooms/${session.code}`, {}, session.token);
    S.connected = true; saveRoomSession(); hooks.snapshot(snapshot);
    openStream(session);
  } catch (error) {
    // Only a room that no longer accepts this phone forgets the saved access; a network failure keeps it.
    if (lostAccess(error) && !session.viewer) saveSession(null);
    S.remote = null; S.connected = false;
    hooks.leave(lostAccess(error) ? (session.viewer ? 'home' : 'join') : 'home', null);
    throw error;
  }
}
function openStream(session) {
  if (S.remote?.snapshot?.transport === 'poll') { openPoll(session); return; }
  const stream = new EventSource(roomUrl(S.settings, `/api/rooms/${session.code}/events?token=${encodeURIComponent(session.token)}`));
  S.stream = stream;
  const current = () => S.remote?.token === session.token && S.stream === stream;
  stream.onmessage = event => { if (!current()) return; const wasConnected = S.connected; S.connected = true; hooks.snapshot(JSON.parse(event.data)); if (!wasConnected) hooks.render(); };
  stream.onerror = () => {
    if (!current()) return;
    if (S.connected) { S.connected = false; hooks.render(); }
    api(`/api/rooms/${session.code}`, {}, session.token).then(snapshot => { if (current()) hooks.snapshot(snapshot); }).catch(error => { if (lostAccess(error) && current()) leaveRoom('join', error.message); });
    // EventSource stops retrying after an error response (for example while the server restarts): retry here.
    if (stream.readyState === EventSource.CLOSED) { clearTimeout(S.reconnectTimer); S.reconnectTimer = setTimeout(() => { if (current()) openStream(session); }, 3000); }
  };
  stream.onopen = () => { if (current() && !S.connected) { S.connected = true; hooks.render(); } };
  stream.addEventListener('closed', event => { if (!S.leaving && current()) leaveRoom('home', JSON.parse(event.data || '{}').reason === 'expired' ? 'La sala ha caducado por inactividad.' : 'El maestro ha cerrado la sala.'); });
  stream.addEventListener('revoked', () => { if (!S.leaving && current()) leaveRoom(session.viewer ? 'home' : 'join', session.viewer ? 'Este marcador ya no está conectado a la sala.' : 'Este móvil ya no tiene acceso a la sala. Para volver, usa un código de recuperación del maestro o la clave del maestro.'); });
  stream.addEventListener('replaced', () => { if (!current()) return; stream.close(); S.stream = null; S.remote = null; S.game = null; S.connected = false; hooks.replaced(); });
}
// Supabase functions serve short requests, not a process-long SSE connection. Only one request per phone is
// in flight; inactive phones poll less often. Clock display continues locally between server snapshots.
function openPoll(session) {
  const controller = new AbortController();
  let timer, closed = false;
  const stream = { close() { closed = true; clearTimeout(timer); controller.abort(); } };
  S.stream = stream;
  const current = () => !closed && S.stream === stream && S.remote?.token === session.token;
  const poll = async () => {
    let delay = 3500;
    try {
      const snapshot = await api(`/api/rooms/${session.code}`, { signal: controller.signal }, session.token);
      if (!current()) return;
      const wasConnected = S.connected; S.connected = true; hooks.snapshot(snapshot);
      if (!wasConnected) hooks.render();
      delay = Math.max(1000, Math.min(10000, snapshot.pollAfter || 3500));
    } catch (error) {
      if (!current()) return;
      if (lostAccess(error)) { leaveRoom(session.viewer ? 'home' : 'join', error.message); return; }
      if (S.connected) { S.connected = false; hooks.render(); }
      delay = 5000;
    }
    if (current()) timer = setTimeout(poll, delay);
  };
  timer = setTimeout(poll, Math.max(1000, S.remote.snapshot.pollAfter || 3500));
}
// Every tap carries an operation id; a single automatic retry after a network error reuses it, so the server
// never applies the same tap twice.
export async function roomAction(action, extra = {}, { retry = true } = {}) {
  if (S.busy || !S.remote) return;
  S.busy = true;
  const payload = { turnIndex: S.game?.state.turnIndex, cardSequence: S.game?.state.cardSequence, ...(retry ? { opId: uid() } : {}), ...extra };
  const send = () => api(`/api/rooms/${S.remote.code}/action`, { method: 'POST', body: JSON.stringify({ action, payload }) });
  try {
    let result;
    try { result = await send(); }
    catch (error) { if (!retry || error.status || !S.remote) throw error; await new Promise(resolve => setTimeout(resolve, 1000)); result = await send(); }
    if (result.state !== undefined) hooks.snapshot(result);
    return result;
  } finally { S.busy = false; }
}
export function disconnectRoom({ forget = true } = {}) {
  S.stream?.close(); clearTimeout(S.reconnectTimer);
  if (forget && S.remote && !S.remote.viewer) saveSession(null);
  S.stream = null; S.remote = null; S.game = null; S.connected = false; S.drawingOpen = false;
}
export function leaveRoom(target, message) { disconnectRoom(); hooks.leave(target, message); }
