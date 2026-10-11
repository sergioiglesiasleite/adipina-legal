import { FORMATS, MODES, cardSupports, normalize } from './content.js';

export function shuffle(items, random = Math.random) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function distributePlayers(players, count, random = Math.random) {
  if (!Number.isInteger(count) || count < 2 || count > players.length) throw new Error('Necesitas al menos dos equipos y una persona por equipo.');
  const groups = Array.from({ length: count }, () => []);
  shuffle(players, random).forEach((player, i) => groups[i % count].push(player));
  return groups;
}

const between = (value, min, max) => Number.isInteger(value) && value >= min && value <= max;
export function validateConfig(config, teams, cards) {
  const errors = [];
  if (teams.length < 2) errors.push('Forma al menos dos piñas.');
  if (teams.some(team => !team.name.trim())) errors.push('Todas las piñas necesitan un nombre.');
  if (new Set(teams.map(team => normalize(team.name))).size !== teams.length) errors.push('Usa un nombre diferente para cada piña.');
  if (!config.modes.length) errors.push('Elige al menos una modalidad.');
  if (config.modes.some(mode => !MODES[mode])) errors.push('Hay una modalidad desconocida.');
  if (!config.categories.length) errors.push('Elige al menos una categoría.');
  if (!between(config.duration, 10, 600)) errors.push('El turno debe durar entre 10 y 600 segundos.');
  if (!between(config.rounds, 1, 20)) errors.push('Elige entre 1 y 20 rondas.');
  if (config.skipPolicy === 'limited' && !between(config.skipLimit, 1, 99)) errors.push('El límite de saltos debe estar entre 1 y 99.');
  if (config.format !== undefined && !FORMATS[config.format]) errors.push('Ese formato de partida no existe.');
  if (config.format === 'rounds3' && !between(config.pileSize ?? 40, 5, 200)) errors.push('En «Tres rondas» el montón debe tener entre 5 y 200 tarjetas.');
  if (config.target != null && !between(config.target, 3, 500)) errors.push('El objetivo de puntos debe estar entre 3 y 500.');
  if (config.drawingBonus != null && !between(config.drawingBonus, 0, 120)) errors.push('El tiempo extra para dibujar debe estar entre 0 y 120 segundos.');
  if (!cards.length) errors.push('No hay respuestas para esta selección. Añade contenido o cambia las categorías y la dificultad.');
  return errors;
}

// Brings states saved by earlier versions up to date so they can keep playing.
function upgrade(state) {
  state.sequence ??= state.used.length;
  state.turns ??= [];
  state.adjustments ??= [];
  state.allPlay ??= false;
  state.stage ??= 1;
  state.stageComplete ??= false;
  state.pile ??= null;
  for (const entry of state.turn.log) { entry.teamId ??= null; entry.delta ??= 0; }
  return state;
}

export class Game {
  constructor(config, teams, cards, random = Math.random, { seen = [] } = {}) {
    const errors = validateConfig(config, teams, cards);
    if (errors.length) throw new Error(errors.join(' '));
    this.random = random;
    const known = new Set(), unique = cards.filter(card => { const key = normalize(card.answer); if (!key || known.has(key)) return false; known.add(key); return true; });
    // Cards already seen in earlier games go to the bottom of the deck: new ones come first, old ones only if needed.
    const previously = new Set(seen);
    const ordered = [...shuffle(unique.filter(card => previously.has(card.id)), random), ...shuffle(unique.filter(card => !previously.has(card.id)), random)];
    const format = config.format === 'rounds3' ? 'rounds3' : 'classic';
    const pile = format === 'rounds3' ? ordered.slice(-Math.min(config.pileSize ?? 40, ordered.length)) : null;
    const inPlay = pile || ordered;
    this.state = {
      config: { ...structuredClone(config), format },
      teams: teams.map(team => ({ ...structuredClone(team), score: 0, turns: 0 })),
      cards: structuredClone(inPlay), deck: inPlay.map(card => card.id),
      pile: pile ? pile.map(card => card.id) : null, stage: 1, stageComplete: false,
      used: [], sequence: 0, phase: 'handoff', turnIndex: 0, remaining: 0,
      deadline: null, current: null, mode: null, allPlay: false,
      turn: { correct: 0, skipped: 0, points: 0, log: [] }, turns: [], adjustments: [], cycles: 0
    };
    this.state.remaining = this.turnDuration();
  }
  // `pause: false` rebuilds the exact state, which the room server uses to roll back an action whose save failed.
  static restore(state, { pause = true } = {}) {
    const game = Object.create(Game.prototype);
    game.random = Math.random;
    game.state = upgrade(structuredClone(state));
    if (!pause) return game;
    if (game.state.phase === 'playing') game.state.phase = 'paused';
    game.state.deadline = null;
    return game;
  }
  get format() { return this.state.config.format === 'rounds3' ? 'rounds3' : 'classic'; }
  get team() { return this.state.teams[this.state.turnIndex % this.state.teams.length]; }
  get round() { return this.format === 'rounds3' ? this.state.stage : Math.floor(this.state.turnIndex / this.state.teams.length) + 1; }
  get player() { const team = this.team; return team.members?.length ? team.members[team.turns % team.members.length] : null; }
  get canSkip() { const { config, turn, phase } = this.state; return phase === 'playing' && config.skipPolicy !== 'off' && (config.skipPolicy !== 'limited' || turn.skipped < config.skipLimit); }
  get canUndo() { const { phase, turn } = this.state; return ['playing', 'exhausted'].includes(phase) && turn.log.some(entry => entry.result !== 'pending'); }
  // The mode of the whole turn, when it is fixed (by rounds, a single mode or «Tres rondas»).
  get turnMode() {
    const { config } = this.state;
    if (this.format === 'rounds3') return FORMATS.rounds3.sequence[this.state.stage - 1];
    if (config.modeStyle === 'rounds' || config.modes.length === 1) return config.modes[(this.round - 1) % config.modes.length];
    return null;
  }
  get lightning() { const { config } = this.state; return this.format === 'classic' && !!config.lightning && !config.target && this.round === config.rounds; }
  get multiplier() { return this.lightning ? 2 : 1; }
  turnDuration() {
    const { config } = this.state;
    const base = this.lightning ? Math.min(config.duration, 30) : config.duration;
    return (base + (this.turnMode === 'drawing' ? config.drawingBonus || 0 : 0)) * 1000;
  }
  get lastTurn() {
    const s = this.state;
    if (this.format === 'rounds3') return s.stage >= 3 && s.stageComplete;
    const roundEnds = (s.turnIndex + 1) % s.teams.length === 0;
    if (s.config.target) return roundEnds && (s.teams.some(team => team.score >= s.config.target) || s.turnIndex + 1 >= 50 * s.teams.length);
    return s.turnIndex + 1 >= s.config.rounds * s.teams.length;
  }
  // Picks the next card: a mode the card supports and, if the team chose a level, a card of that level.
  takeCard() {
    const s = this.state, fixed = this.turnMode, level = this.team.difficulty;
    const supports = card => (fixed ? [fixed] : s.config.modes).some(mode => cardSupports(card, mode, s.config.modeFit));
    const fits = id => { const card = s.cards.find(item => item.id === id); return supports(card) && (!level || card.difficulty === level); };
    let index = -1;
    for (let i = s.deck.length - 1; i >= 0; i--) if (fits(s.deck[i])) { index = i; break; }
    if (index === -1 && level) for (let i = s.deck.length - 1; i >= 0; i--) if (supports(s.cards.find(item => item.id === s.deck[i]))) { index = i; break; }
    return index === -1 ? null : s.deck.splice(index, 1)[0];
  }
  deal(now) {
    const s = this.state;
    const id = this.takeCard();
    if (!id) {
      // Cards may remain for later modes. End this turn instead of trapping the group in a reuse
      // prompt that cannot produce a compatible card for the current fixed mode.
      if (s.deck.length && this.turnMode && this.format === 'classic') { this.finishTurn(); return; }
      s.remaining = Math.max(0, s.deadline === null ? s.remaining : s.deadline - now);
      s.deadline = null; s.current = null; s.phase = 'exhausted';
      return;
    }
    s.current = s.cards.find(card => card.id === id);
    s.used.push(id);
    s.sequence++;
    // Mixed mode gives each card a modality that suits it (its D/M/P tags). If none suits, words come first:
    // anything can be described, while drawing or acting an unsuitable card is a dead end.
    const allowed = s.config.modes.filter(mode => cardSupports(s.current, mode, s.config.modeFit));
    const fitting = s.config.modes.filter(mode => cardSupports(s.current, mode, true));
    const spoken = allowed.filter(mode => ['description', 'oneword', 'taboo'].includes(mode));
    const options = fitting.length ? fitting : spoken.length ? spoken : allowed;
    s.mode = this.turnMode || options[Math.floor(this.random() * options.length)] || s.config.modes[0];
    s.allPlay = this.format === 'classic' && !!s.config.allPlay && this.random() < 0.15;
    s.turn.log.push({ id, answer: s.current.answer, result: 'pending', mode: s.mode, allPlay: s.allPlay, teamId: null, delta: 0, dealtAt: now });
  }
  start(now) {
    const s = this.state;
    if (s.phase !== 'handoff') return;
    s.phase = 'playing'; s.deadline = now + s.remaining;
    this.deal(now);
  }
  tick(now) {
    const s = this.state;
    if (s.phase !== 'playing') return false;
    s.remaining = Math.max(0, s.deadline - now);
    if (s.remaining === 0) { this.finishTurn(); return true; }
    return false;
  }
  // result: correct · skipped · forbidden (said a forbidden word: counts as a skip, always allowed).
  answer(result, now) {
    const s = this.state;
    if (s.phase !== 'playing' || this.tick(now) || !s.current || !['correct', 'skipped', 'forbidden'].includes(result)) return false;
    if (result === 'skipped' && !this.canSkip) return false;
    return this.resolve(result === 'correct' ? 'correct' : result, this.team.id, now);
  }
  // Gives the point of the current card to any team: «Todos juegan» or a stolen card.
  award(teamId, now) {
    const s = this.state;
    if (s.phase !== 'playing' || this.tick(now) || !s.current || !s.teams.some(team => team.id === teamId)) return false;
    if (!s.allPlay && !s.config.steal) return false;
    return this.resolve(teamId === this.team.id ? 'correct' : 'awarded', teamId, now);
  }
  resolve(result, teamId, now) {
    const s = this.state, entry = s.turn.log.at(-1);
    const delta = result === 'correct' || result === 'awarded' ? this.multiplier : (s.config.penalty ? -1 : 0);
    const credited = result === 'correct' || result === 'awarded' ? teamId : this.team.id;
    s.teams.find(team => team.id === credited).score += delta;
    if (credited === this.team.id) s.turn.points += delta;
    if (result === 'correct') s.turn.correct++;
    else if (result !== 'awarded') s.turn.skipped++;
    Object.assign(entry, { result, teamId: credited, delta, resolvedAt: now });
    const id = s.current.id;
    s.current = null; s.allPlay = false;
    if (this.format === 'rounds3') {
      // In «Tres rondas» a card leaves the round only when guessed; otherwise it goes back under the pile.
      if (result !== 'correct' && result !== 'awarded') s.deck.unshift(id);
      if (!s.deck.length) { s.stageComplete = true; this.finishTurn(now); return true; }
    }
    this.deal(now);
    return true;
  }
  // Takes back the last answer of this turn and shows that card again. The card that was on screen
  // stays used (in «Tres rondas» it goes back to the pile).
  undo(now) {
    const s = this.state;
    if (!this.canUndo) return false;
    if (s.phase === 'playing' && this.tick(now)) return false;
    if (s.phase === 'playing' && s.turn.log.at(-1)?.result === 'pending') {
      const discarded = s.turn.log.pop();
      if (this.format === 'rounds3') s.deck.push(discarded.id);
    }
    const entry = s.turn.log.at(-1);
    this.revert(entry);
    if (this.format === 'rounds3' && entry.result !== 'correct') { const at = s.deck.indexOf(entry.id); if (at !== -1) s.deck.splice(at, 1); }
    entry.result = 'pending'; entry.teamId = null; entry.delta = 0; delete entry.resolvedAt;
    s.current = s.cards.find(card => card.id === entry.id); s.mode = entry.mode; s.allPlay = entry.allPlay;
    // The card on screen changed: a repeated «undo» sent with the old sequence is rejected instead of undoing twice.
    s.sequence++;
    if (s.phase === 'exhausted') { s.phase = 'playing'; s.deadline = now + s.remaining; }
    return true;
  }
  revert(entry) {
    const s = this.state;
    if (!entry.teamId) return;
    s.teams.find(team => team.id === entry.teamId).score -= entry.delta;
    if (entry.teamId === this.team.id) s.turn.points -= entry.delta;
    if (entry.result === 'correct') s.turn.correct--;
    else if (entry.result === 'skipped' || entry.result === 'forbidden') s.turn.skipped--;
  }
  // After the turn ends, fixes a misjudged card (classic format): correct, skipped or pending.
  revise(index, result, teamId = null) {
    const s = this.state, entry = s.turn.log[index];
    if (s.phase !== 'summary' || this.format !== 'classic' || !entry || !['correct', 'skipped', 'pending'].includes(result)) return false;
    this.revert(entry);
    const team = teamId && s.teams.some(item => item.id === teamId) ? teamId : this.team.id;
    entry.result = result === 'correct' && team !== this.team.id ? 'awarded' : result;
    entry.teamId = result === 'pending' ? null : result === 'correct' ? team : this.team.id;
    entry.delta = result === 'pending' ? 0 : result === 'correct' ? this.multiplier : (s.config.penalty ? -1 : 0);
    if (entry.teamId) { s.teams.find(item => item.id === entry.teamId).score += entry.delta; if (entry.teamId === this.team.id) s.turn.points += entry.delta; }
    if (entry.result === 'correct') s.turn.correct++; else if (entry.result === 'skipped') s.turn.skipped++;
    const record = s.turns.at(-1);
    if (record?.turnIndex === s.turnIndex) Object.assign(record, { correct: s.turn.correct, skipped: s.turn.skipped, points: s.turn.points });
    return true;
  }
  // Manual score correction, visible to everyone in the adjustments list.
  adjust(teamId, delta) {
    const s = this.state, team = s.teams.find(item => item.id === teamId);
    if (!team || !Number.isInteger(delta) || delta === 0 || Math.abs(delta) > 10) return false;
    team.score += delta;
    s.adjustments.push({ teamId, delta, turnIndex: s.turnIndex });
    return true;
  }
  pause(now) {
    if (this.state.phase !== 'playing' || this.tick(now)) return;
    this.state.phase = 'paused'; this.state.deadline = null;
  }
  resume(now) {
    if (this.state.phase !== 'paused') return;
    this.state.phase = 'playing'; this.state.deadline = now + this.state.remaining;
  }
  reuse(now) {
    if (this.state.phase !== 'exhausted') return;
    const s = this.state;
    s.deck = shuffle(s.cards.map(card => card.id), this.random); s.cycles++;
    s.phase = 'playing'; s.deadline = now + s.remaining;
    this.deal(now);
  }
  finishTurn() {
    const s = this.state;
    if (!['playing', 'paused', 'exhausted'].includes(s.phase)) return;
    // A card left pending at the end of a «Tres rondas» turn goes back to the pile.
    if (this.format === 'rounds3' && s.current) s.deck.unshift(s.current.id);
    const times = s.turn.log.filter(entry => entry.result === 'correct' && entry.resolvedAt).map(entry => entry.resolvedAt - entry.dealtAt);
    s.turns.push({ turnIndex: s.turnIndex, round: this.round, teamId: this.team.id, player: this.player, correct: s.turn.correct, skipped: s.turn.skipped, points: s.turn.points, fastest: times.length ? Math.min(...times) : null, mode: this.turnMode });
    s.phase = 'summary'; s.current = null; s.deadline = null; s.allPlay = false;
    this.team.turns++;
  }
  nextTurn() {
    const s = this.state;
    if (s.phase !== 'summary') return;
    if (this.lastTurn) { s.phase = 'finished'; return; }
    if (this.format === 'rounds3' && s.stageComplete) { s.stage++; s.stageComplete = false; s.deck = shuffle(s.pile, this.random); }
    s.turnIndex++; s.phase = 'handoff';
    s.turn = { correct: 0, skipped: 0, points: 0, log: [] };
    s.remaining = this.turnDuration();
  }
  finishGame() {
    if (['playing', 'paused', 'exhausted'].includes(this.state.phase)) this.finishTurn();
    this.state.phase = 'finished'; this.state.current = null; this.state.deadline = null;
  }
  get ranking() { return [...this.state.teams].sort((a, b) => b.score - a.score); }
  get winners() { const ranking = this.ranking; return ranking.filter(team => team.score === ranking[0].score); }
  rematch() { return new Game(this.state.config, this.state.teams, this.state.cards, this.random, { seen: this.state.used }); }
}
