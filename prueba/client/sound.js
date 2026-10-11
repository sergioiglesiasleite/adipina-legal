// Sounds are generated on the device (no audio files). Browsers only allow audio after a tap, so init() is called
// from button handlers.
let context = null;
export function initSound(settings) {
  if (settings.muted) return;
  if (!context) { const Audio = window.AudioContext || window.webkitAudioContext; if (Audio) context = new Audio(); }
  context?.resume().catch(() => {});
}
function tone(frequencies, { gap = .16, length = .25, volume = .18, type = 'sine' } = {}) {
  if (!context) return;
  frequencies.forEach((frequency, i) => {
    const oscillator = context.createOscillator(), gain = context.createGain();
    oscillator.type = type; oscillator.frequency.value = frequency;
    const start = context.currentTime + i * gap;
    gain.gain.setValueAtTime(.0001, start); gain.gain.exponentialRampToValueAtTime(volume, start + .015); gain.gain.exponentialRampToValueAtTime(.0001, start + length);
    oscillator.connect(gain); gain.connect(context.destination); oscillator.start(start); oscillator.stop(start + length + .01);
  });
}
// End of the turn.
export function ring(settings) { if (!settings.muted) tone([660, 880, 1046]); }
// One short tick per second during the last seconds of a turn.
export function tick(settings, last = false) { if (!settings.muted && settings.countdown) tone([last ? 990 : 740], { length: .09, volume: .12, type: 'triangle' }); }
// Correct answer.
export function success(settings) { if (!settings.muted) tone([784, 1175], { gap: .08, length: .14, volume: .14 }); }
