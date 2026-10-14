// Everything AdiPiña keeps on this device lives under «adipina.*» in localStorage. Each value is validated when
// read, so damaged or old data never blocks the app: it falls back to defaults instead.
import { Game } from '../game.js';

const KEY = name => `adipina.${name}`;
let warned = false, onWriteError = () => {};
export const setStorageWarning = handler => { onWriteError = handler; };
export function read(name, fallback) {
  try { return JSON.parse(localStorage.getItem(KEY(name))) ?? fallback; } catch { return fallback; }
}
export function write(name, value) {
  try { localStorage.setItem(KEY(name), JSON.stringify(value)); }
  catch { if (!warned) { warned = true; onWriteError(); } }
}
export function remove(name) { try { localStorage.removeItem(KEY(name)); } catch { /* Nothing to remove. */ } }

const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const list = (value, check, limit) => Array.isArray(value) ? value.filter(check).slice(-limit) : [];

// ---- Settings ----
export const SETTING_DEFAULTS = { muted: false, vibration: true, countdown: true, answerSize: 'normal', server: '', onboarded: false };
export function loadSettings() {
  const saved = read('settings', {});
  const settings = { ...SETTING_DEFAULTS, ...(isObject(saved) ? saved : {}) };
  // The mute switch used to be stored on its own.
  const legacyMuted = read('muted', null);
  if (typeof legacyMuted === 'boolean' && !isObject(saved)) settings.muted = legacyMuted;
  if (!['normal', 'large', 'huge'].includes(settings.answerSize)) settings.answerSize = 'normal';
  if (typeof settings.server !== 'string') settings.server = '';
  return settings;
}
export const saveSettings = settings => write('settings', settings);

// ---- Local game (format 2: { v, state }); format 1 was the bare state ----
export function loadGame() {
  const saved = read('game', null);
  const state = isObject(saved) && saved.v === 2 ? saved.state : saved;
  if (!isObject(state) || !Array.isArray(state.teams) || !Array.isArray(state.cards) || !Array.isArray(state.deck) || !Array.isArray(state.used) || !isObject(state.turn) || !isObject(state.config)) return null;
  try { return Game.restore(state); } catch { return null; }
}
export const saveGame = game => write('game', game ? { v: 2, state: game.state } : null);

// ---- Cards already seen on this device, so new games start with new cards ----
const MAX_SEEN = 5000;
export const loadSeen = () => list(read('seen', []), id => typeof id === 'string' && id.length <= 120, MAX_SEEN);
export function addSeen(ids) { write('seen', [...new Set([...loadSeen(), ...ids])].slice(-MAX_SEEN)); }
export const clearSeen = () => write('seen', []);

// ---- Saved players, presets, finished games and card reports ----
export const loadPlayers = () => list(read('players', []), name => typeof name === 'string' && name.trim() && name.length <= 60, 200);
export function rememberPlayers(names) { write('players', [...new Set([...loadPlayers(), ...names.map(name => name.trim()).filter(Boolean)])].slice(-200)); }
export const loadPresets = () => list(read('presets', []), preset => isObject(preset) && typeof preset.name === 'string' && isObject(preset.config), 30);
export const savePresets = presets => write('presets', presets.slice(-30));
export const loadHistory = () => list(read('history', []), entry => isObject(entry) && Array.isArray(entry.teams) && typeof entry.date === 'string', 50);
export function addHistory(entry) { write('history', [...loadHistory(), entry].slice(-50)); }
export const loadReports = () => list(read('reports', []), report => isObject(report) && typeof report.answer === 'string', 500);
export const saveReports = reports => write('reports', reports.slice(-500));
export function addReport(report) { saveReports([...loadReports(), report]); }
export const clearReports = () => write('reports', []);

// ---- Clear everything this app stored on the device ----
export function clearAll() {
  try {
    for (let i = localStorage.length - 1; i >= 0; i--) { const key = localStorage.key(i); if (key?.startsWith('adipina.')) localStorage.removeItem(key); }
  } catch { /* Storage not available. */ }
}
