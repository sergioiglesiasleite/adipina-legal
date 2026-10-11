// Small helpers shared by every screen.
export const $ = selector => document.querySelector(selector);
export const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const quantity = (n, singular, plural) => `${n} ${n === 1 ? singular : plural}`;
export const uid = () => globalThis.crypto?.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`;
export const COLORS = ['#f7cc52', '#ee927e', '#9fb7ec', '#a9c99a', '#c5a2d7', '#f4af62'];
export const COLOR_NAMES = ['Amarilla', 'Coral', 'Azul', 'Verde', 'Lila', 'Naranja'];
export const ACCESSORIES = { glasses: 'Gafas de sol', hat: 'Sombrero', headphones: 'Auriculares' };
export const clock = ms => { const seconds = Math.ceil(ms / 1000); return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; };
export const seconds = ms => `${(ms / 1000).toFixed(1).replace('.', ',')} s`;
export function button(action, label, cls = 'primary', data = '') { return `<button type="button" class="btn ${cls}" data-action="${action}" ${data}>${label}</button>`; }
export function title(kicker, heading, description) { return `<div class="page-title"><span class="eyebrow">${kicker}</span><h1>${heading}</h1><p>${description}</p></div>`; }
// Saves a file on the device (export of custom content, reports).
export function download(filename, text, type = 'application/json') {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const link = Object.assign(document.createElement('a'), { href: url, download: filename });
  document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
