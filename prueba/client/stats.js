// Fun facts for the end of the game, computed from the per-turn history kept by the engine.
export function gameStats(state) {
  const turns = state.turns || [];
  const teamName = id => state.teams.find(team => team.id === id)?.name || '';
  if (!turns.length) return null;
  const best = turns.reduce((top, turn) => turn.points > top.points ? turn : top, turns[0]);
  const byPlayer = new Map();
  for (const turn of turns) if (turn.player) {
    const key = `${turn.teamId}|${turn.player}`;
    byPlayer.set(key, { name: turn.player, team: teamName(turn.teamId), correct: (byPlayer.get(key)?.correct || 0) + turn.correct });
  }
  const topPlayer = [...byPlayer.values()].sort((a, b) => b.correct - a.correct)[0] || null;
  const quick = turns.filter(turn => turn.fastest != null).sort((a, b) => a.fastest - b.fastest)[0] || null;
  const correct = turns.reduce((sum, turn) => sum + turn.correct, 0), skipped = turns.reduce((sum, turn) => sum + turn.skipped, 0);
  return {
    bestTurn: best.points > 0 ? { team: teamName(best.teamId), player: best.player, points: best.points, round: best.round } : null,
    topPlayer: topPlayer?.correct ? topPlayer : null,
    fastest: quick ? { ms: quick.fastest, team: teamName(quick.teamId), player: quick.player } : null,
    correct, skipped, turns: turns.length
  };
}
// A short text to share the result with the group chat.
export function resultText(state, winners) {
  const ranking = [...state.teams].sort((a, b) => b.score - a.score).map((team, i) => `${i + 1}. ${team.name}: ${team.score}`).join('\n');
  return `🍍 AdiPiña · ${winners.length > 1 ? 'Empate' : `Gana ${winners[0].name}`}\n${ranking}`;
}
