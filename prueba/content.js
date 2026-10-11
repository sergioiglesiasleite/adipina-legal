import cinema from './content/cinema.js';
import series from './content/series.js';
import books from './content/books.js';
import music from './content/music.js';
import games from './content/games.js';
import famous from './content/famous.js';
import fiction from './content/fiction.js';
import animals from './content/animals.js';
import objects from './content/objects.js';
import jobs from './content/jobs.js';
import sports from './content/sports.js';
import food from './content/food.js';
import actions from './content/actions.js';
import emotions from './content/emotions.js';
import sayings from './content/sayings.js';
import places from './content/places.js';
import spain from './content/spain.js';
import festivities from './content/festivities.js';
import cartoons from './content/cartoons.js';
import heroes from './content/heroes.js';
import history from './content/history.js';
import science from './content/science.js';
import myths from './content/myths.js';
import nature from './content/nature.js';
import transport from './content/transport.js';
import clothes from './content/clothes.js';
import toys from './content/toys.js';
import television from './content/television.js';
import internet from './content/internet.js';
import body from './content/body.js';
import christmas from './content/christmas.js';
import halloween from './content/halloween.js';
import school from './content/school.js';
import travel from './content/travel.js';
import art from './content/art.js';
import prehistory from './content/prehistory.js';

// Each mode has a letter used by cards to say where they work best (D dibujo, M mímica, P pistas).
export const MODES = {
  drawing: { name: 'Dibujo', verb: 'Dibuja', icon: 'pencil', color: 'lavender', letter: 'D', rule: 'Dibuja sin hablar ni escribir letras o números.' },
  mime: { name: 'Mímica', verb: 'Actúa', icon: 'person', color: 'peach', letter: 'M', rule: 'Usa solo gestos. No hables ni hagas sonidos.' },
  description: { name: 'Descripción', verb: 'Da pistas', icon: 'chat', color: 'mint', letter: 'P', rule: 'Da pistas sin decir la respuesta ni palabras derivadas de ella.' },
  oneword: { name: 'Una palabra', verb: 'Di una palabra', icon: 'chat', color: 'mint', letter: 'P', rule: 'Solo puedes decir una palabra por tarjeta. Sin gestos ni sonidos.' },
  taboo: { name: 'Prohibido', verb: 'Da pistas sin…', icon: 'lock', color: 'lavender', letter: 'P', rule: 'Da pistas sin decir la respuesta ni ninguna de las palabras prohibidas.' },
  hum: { name: 'Tararea', verb: 'Tararea', icon: 'music', color: 'peach', letter: 'T', rule: 'Tararea o silba la canción. Sin cantar la letra ni hablar.' }
};
export const BASE_MODES = ['drawing', 'mime', 'description'];
export const FORMATS = {
  classic: { name: 'Clásico', description: 'Cada turno, tarjetas nuevas con las modalidades elegidas.' },
  rounds3: { name: 'Tres rondas', description: 'Las mismas tarjetas en tres rondas: descripción, una palabra y mímica.', sequence: ['description', 'oneword', 'mime'] }
};
export const DIFFICULTIES = { easy: 'Fácil', medium: 'Media', hard: 'Difícil', 'easy-medium': 'Fácil y media', 'medium-hard': 'Media y difícil', mixed: 'Mixta' };
export const CARD_DIFFICULTIES = { easy: 'Fácil', medium: 'Media', hard: 'Difícil' };
export const AGES = { any: 'Sin filtro', family: 'Para todas las edades', kids: 'Solo peques' };
export const ERAS = { '70s': 'Años 70', '80s': 'Años 80', '90s': 'Años 90', '00s': 'Años 2000', '10s': 'Años 2010', '20s': 'Años 2020' };
export const normalize = value => value.normalize('NFD').replace(/[̀-ͯ]/g, '').trim().toLocaleLowerCase('es').replace(/\s+/g, ' ');
export const slug = value => normalize(value).replace(/[^a-z0-9ñ]+/g, '-').replace(/^-|-$/g, '');

const SOURCES = [cinema, series, books, music, games, famous, fiction, animals, objects, jobs, sports, food, actions, emotions, sayings, places, spain, festivities, cartoons, heroes, history, science, myths, nature, transport, clothes, toys, television, internet, body, school, travel, art, prehistory, christmas, halloween];
const DIFFICULTY_CODES = { f: 'easy', m: 'medium', d: 'hard' };
const AGE_TAGS = { k: 'kids', n: 'all', t: 'teens' };

// Category files hold one card per line: «dificultad | respuesta | etiquetas | palabras prohibidas».
// Lines starting with # open a subcategory. See docs/GUIA_CONTENIDO.md.
export function parseCategory(source) {
  const cards = [], problems = [];
  let subcategory = null;
  for (const [index, raw] of source.cards.split('\n').entries()) {
    const line = raw.trim();
    if (!line) continue;
    if (line.startsWith('#')) { subcategory = line.slice(1).trim() || null; continue; }
    const [code = '', answer = '', tags = '', forbidden = ''] = line.split('|').map(part => part.trim());
    const card = { id: `${source.id}:${slug(answer)}`, answer, category: source.id, subcategory, difficulty: DIFFICULTY_CODES[code], modes: source.modes || 'DMP', ages: source.ages || 'all', era: null, region: source.region || null, forbidden: forbidden ? forbidden.split(',').map(word => word.trim()).filter(Boolean) : [] };
    if (!card.difficulty) problems.push(`${source.id}, línea ${index + 1}: dificultad «${code}» desconocida.`);
    for (const tag of tags.split(/\s+/).filter(Boolean)) {
      if (AGE_TAGS[tag]) card.ages = AGE_TAGS[tag];
      else if (/^[DMP]{1,3}$/.test(tag)) card.modes = tag;
      else if (ERAS[tag]) card.era = tag;
      else if (tag === 'es') card.region = 'es';
      else problems.push(`${source.id}, línea ${index + 1}: etiqueta «${tag}» desconocida.`);
    }
    cards.push(card);
  }
  return { cards, problems };
}

const parsed = SOURCES.map(source => ({ source, ...parseCategory(source) }));
export const CATEGORIES = SOURCES.map(({ id, name, icon, subcategories }) => ({ id, name, icon, ...(subcategories ? { subcategories } : {}) }));
export const BANK = parsed.flatMap(entry => entry.cards);
export const CONTENT_PROBLEMS = parsed.flatMap(entry => entry.problems);

// A card can always be described or acted; humming needs a song and «Prohibido» needs forbidden words.
export function cardSupports(card, mode, modeFit = false) {
  if (!card || !Object.hasOwn(MODES, mode)) return false;
  if (mode === 'hum') return card.subcategory === 'Canciones';
  if (mode === 'taboo' && (card.forbidden?.length || 0) < 3) return false;
  if (modeFit && !(card.modes || 'DMP').includes(MODES[mode].letter)) return false;
  return true;
}
function fitsModes(card, modes) {
  return modes.some(mode => cardSupports(card, mode, true));
}
function matchesDifficulty(card, difficulty = 'mixed') {
  if (difficulty === 'mixed') return true;
  if (difficulty === 'easy-medium') return card.difficulty === 'easy' || card.difficulty === 'medium';
  if (difficulty === 'medium-hard') return card.difficulty === 'medium' || card.difficulty === 'hard';
  return card.difficulty === difficulty;
}
export function selectCards(config, customCards = []) {
  const source = config.source === 'custom' ? customCards : [...BANK, ...customCards];
  const modes = config.format === 'rounds3' ? FORMATS.rounds3.sequence : config.modes || BASE_MODES;
  const seen = new Set();
  return source.filter(card => {
    const key = normalize(card.answer);
    if (!key || seen.has(key) || !config.categories.includes(card.category)) return false;
    if (!matchesDifficulty(card, config.difficulty)) return false;
    const subs = config.subcategories?.[card.category];
    if (subs && card.subcategory && !subs.includes(card.subcategory)) return false;
    if (!modes.some(mode => cardSupports(card, mode))) return false;
    if (config.modeFit && !(config.format === 'rounds3' ? modes.every(mode => cardSupports(card, mode, true)) : fitsModes(card, modes))) return false;
    // Metadata filters only apply to bank cards: the group's own cards have no age, era or region and always pass.
    if (card.ages !== undefined) {
      if (config.ages === 'kids' && card.ages !== 'kids') return false;
      if (config.ages === 'family' && card.ages === 'teens') return false;
      if (config.eras?.length && !config.eras.includes(card.era)) return false;
      if (config.region && card.region !== config.region) return false;
    }
    seen.add(key);
    return true;
  });
}

const allCategories = CATEGORIES.map(category => category.id);
const without = (...ids) => allCategories.filter(id => !ids.includes(id));
const SEASONAL = ['christmas', 'halloween'];
// Ready-made selections: each pack is a set of setup values applied on top of the defaults.
export const PACKS = [
  { id: 'familia', name: 'Familia', icon: 'people', description: 'Para jugar con todas las edades.', config: { categories: without(...SEASONAL), difficulty: 'easy-medium', ages: 'family', modes: ['drawing', 'mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'peques', name: 'Peques', icon: 'paw', description: 'De 6 a 10 años: fácil, dibujo y mímica.', config: { categories: without(...SEASONAL), difficulty: 'easy', ages: 'kids', modes: ['drawing', 'mime'], modeStyle: 'mixed', duration: 90, modeFit: true } },
  { id: 'fiesta', name: 'Fiesta', icon: 'star', description: 'Todo vale: mímica, pistas y una palabra.', config: { categories: without(...SEASONAL), difficulty: 'mixed', ages: 'any', modes: ['mime', 'description', 'oneword'], modeStyle: 'mixed', duration: 60 } },
  { id: 'cultura-pop', name: 'Cultura pop', icon: 'film', description: 'Cine, series, música, famosos e internet.', config: { categories: ['cinema', 'series', 'music', 'famous', 'fiction', 'games', 'television', 'internet', 'heroes', 'cartoons'], difficulty: 'mixed', ages: 'any', modes: ['mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'nostalgia', name: 'Nostalgia', icon: 'tv', description: 'Lo que marcó los 70, 80, 90 y 2000.', config: { categories: allCategories, difficulty: 'mixed', ages: 'any', eras: ['70s', '80s', '90s', '00s'], modes: ['mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'de-aqui', name: 'De aquí', icon: 'leaf', description: 'España: tele, fiestas, expresiones y famosos.', config: { categories: allCategories, difficulty: 'mixed', ages: 'any', region: 'es', modes: ['mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'mimica', name: 'Para mímica', icon: 'person', description: 'Tarjetas que se actúan de maravilla.', config: { categories: without(...SEASONAL), difficulty: 'mixed', ages: 'any', modes: ['mime'], modeStyle: 'mixed', duration: 60, modeFit: true } },
  { id: 'dibujar', name: 'Para dibujar', icon: 'pencil', description: 'Tarjetas que se dibujan bien.', config: { categories: without(...SEASONAL), difficulty: 'mixed', ages: 'any', modes: ['drawing'], modeStyle: 'mixed', duration: 90, modeFit: true } },
  { id: 'navidad', name: 'Navidad', icon: 'star', minimum: 150, description: 'Turrones, villancicos y Reyes Magos.', config: { categories: ['christmas'], difficulty: 'mixed', ages: 'any', modes: ['drawing', 'mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'halloween', name: 'Halloween', icon: 'magic', minimum: 120, description: 'Calabazas, sustos y castañas: Halloween y Todos los Santos.', config: { categories: ['halloween'], difficulty: 'mixed', ages: 'any', modes: ['drawing', 'mime', 'description'], modeStyle: 'mixed', duration: 60 } },
  { id: 'tres-rondas', name: 'Tres rondas', icon: 'shuffle', description: 'Personajes muy conocidos en descripción, una palabra y mímica.', config: { format: 'rounds3', categories: ['famous', 'fiction', 'heroes', 'cartoons', 'history', 'myths'], difficulty: 'easy-medium', ages: 'any', modes: ['description', 'oneword', 'mime'], modeStyle: 'rounds', duration: 45, pileSize: 40 } }
];
export function packConfig(base, packId) {
  const pack = PACKS.find(item => item.id === packId);
  if (!pack) return base;
  const reset = { format: 'classic', ages: 'any', eras: null, region: null, modeFit: false, pileSize: 40 };
  return { ...base, ...reset, ...structuredClone(pack.config), source: 'combined', pack: pack.id };
}

// Checks the whole bank. Used by the tests and by anyone editing content (npm run content).
export const CONTENT_MINIMUMS = { perCategory: 90, perDifficulty: 30, perPack: 300, taboo: 800 };
export function validateBank(bank = BANK, { minimums = CONTENT_MINIMUMS } = {}) {
  const errors = [...CONTENT_PROBLEMS];
  const ids = new Set(), answers = new Map();
  for (const card of bank) {
    if (!card.answer || card.answer.length > 60) errors.push(`${card.id}: respuesta vacía o de más de 60 caracteres.`);
    // A closing question mark without the opening one is almost always a doubt left in a draft, not a title.
    if (card.answer.includes('?') && !card.answer.includes('¿')) errors.push(`${card.id}: «${card.answer}» parece una duda sin resolver.`);
    if (ids.has(card.id)) errors.push(`${card.id}: ID repetido.`);
    ids.add(card.id);
    const key = normalize(card.answer);
    if (answers.has(key)) errors.push(`«${card.answer}» aparece en ${answers.get(key)} y en ${card.category}.`);
    else answers.set(key, card.category);
    if (card.forbidden.length && card.forbidden.length < 3) errors.push(`${card.id}: necesita al menos 3 palabras prohibidas o ninguna.`);
    const answerWords = new Set(normalize(card.answer).split(/[^a-z0-9ñ]+/).filter(word => word.length > 3));
    for (const word of card.forbidden) if (answerWords.has(normalize(word))) errors.push(`${card.id}: la palabra prohibida «${word}» forma parte de la respuesta.`);
  }
  if (minimums) {
    for (const category of CATEGORIES) {
      const own = bank.filter(card => card.category === category.id);
      if (own.length < minimums.perCategory) errors.push(`${category.name}: ${own.length} tarjetas (mínimo ${minimums.perCategory}).`);
      for (const difficulty of Object.keys(CARD_DIFFICULTIES)) {
        const count = own.filter(card => card.difficulty === difficulty).length;
        if (count < minimums.perDifficulty) errors.push(`${category.name}: ${count} tarjetas ${CARD_DIFFICULTIES[difficulty].toLowerCase()}s (mínimo ${minimums.perDifficulty}).`);
      }
    }
    for (const pack of PACKS) {
      const count = selectCards(packConfig({ subcategories: {} }, pack.id)).length;
      const minimum = pack.minimum ?? minimums.perPack;
      if (count < minimum) errors.push(`Pack ${pack.name}: ${count} tarjetas (mínimo ${minimum}).`);
    }
    const taboo = bank.filter(card => card.forbidden.length >= 3).length;
    if (taboo < minimums.taboo) errors.push(`Solo ${taboo} tarjetas tienen palabras prohibidas (mínimo ${minimums.taboo}).`);
  }
  return errors;
}
