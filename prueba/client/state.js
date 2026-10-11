// The whole interface state in one object, shared by the views and the actions.
import { BASE_MODES, CATEGORIES, MODES, PACKS } from '../content.js';
import { COLORS, uid } from './util.js';
import { loadSettings, read } from './store.js';

export const newTeam = index => ({ id: uid(), name: ['Piña colada', 'Tutti frutti', 'Las tropicales', 'Piña power'][index] || `Piña ${index + 1}`, color: COLORS[index % COLORS.length], accessories: index === 0 ? ['glasses'] : index === 1 ? ['hat'] : [], members: [], difficulty: null });
export const DEFAULT_CONFIG = {
  modes: [...BASE_MODES], modeStyle: 'mixed', format: 'classic', categories: CATEGORIES.filter(c => c.id !== 'christmas').map(c => c.id),
  subcategories: { music: ['Canciones', 'Artistas', 'Grupos', 'Instrumentos', 'Bailes'] }, difficulty: 'mixed', source: 'combined',
  duration: 60, rounds: 3, target: null, drawingBonus: 0, skipPolicy: 'unlimited', skipLimit: 3, penalty: false, drawing: 'paper',
  allPlay: false, steal: false, lightning: false, pileSize: 40, ages: 'any', eras: null, region: null, modeFit: false, pack: null
};
// Saved setups from earlier versions may miss fields or hold values that no longer exist.
export function cleanConfig(saved = {}) {
  const config = { ...DEFAULT_CONFIG, ...(saved && typeof saved === 'object' ? saved : {}) };
  config.modes = Array.isArray(config.modes) ? config.modes.filter(mode => MODES[mode]) : [...BASE_MODES];
  if (!config.modes.length) config.modes = [...BASE_MODES];
  if (!Array.isArray(config.categories)) config.categories = DEFAULT_CONFIG.categories;
  if (config.pack && !PACKS.some(pack => pack.id === config.pack)) config.pack = null;
  return config;
}
const saved = read('setup', {});
export const S = {
  config: cleanConfig(saved.config),
  teams: Array.isArray(saved.teams) && saved.teams.length >= 2 ? saved.teams.map(team => ({ difficulty: null, ...team })) : [newTeam(0), newTeam(1)],
  customCategories: read('categories', []), customCards: read('cards', []), settings: loadSettings(),
  screen: 'home', step: 0, playType: 'local', teamType: 'manual',
  randomPlayers: '', randomMethod: 'count', randomCount: 2, randomSize: 2,
  quick: { pack: 'familia', teams: 2, players: '' },
  game: null, remote: null, stream: null, connected: false, busy: false, leaving: false, reconnectTimer: null,
  joinLobby: null, joinTeamId: '', joinDetails: null, lastRoomCode: '',
  savedPlayers: [], drawingOpen: false, reportCard: null, remoteRemainingAt: 0, remoteReceivedAt: 0, lastTick: null, recorded: null
};
