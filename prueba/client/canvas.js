// Drawing canvas for the «Dibujo» mode on screen. Strokes are kept as relative points so a rotation or
// resize redraws them correctly.
import { $ } from './util.js';

export const pen = { strokes: [], ink: '#353348', width: 5, eraser: false, current: null };
let observer = null;
export function resetCanvas() { pen.strokes = []; pen.current = null; }
export function stopCanvas() { observer?.disconnect(); observer = null; }
export function initCanvas(canDraw) {
  const canvas = $('#draw-canvas');
  if (!canvas) return;
  observer = new ResizeObserver(() => redraw()); observer.observe(canvas);
  const point = event => { const rect = canvas.getBoundingClientRect(); return { x: Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width)), y: Math.max(0, Math.min(1, (event.clientY - rect.top) / rect.height)) }; };
  canvas.addEventListener('pointerdown', event => { if (!canDraw() || pen.current) return; event.preventDefault(); canvas.setPointerCapture(event.pointerId); pen.current = { color: pen.ink, width: pen.width, eraser: pen.eraser, pointerId: event.pointerId, points: [point(event)] }; pen.strokes.push(pen.current); redraw(); });
  canvas.addEventListener('pointermove', event => { if (!pen.current || pen.current.pointerId !== event.pointerId) return; pen.current.points.push(point(event)); redraw(); });
  const end = event => { if (pen.current?.pointerId === event.pointerId) pen.current = null; };
  canvas.addEventListener('pointerup', end); canvas.addEventListener('pointercancel', end); canvas.addEventListener('lostpointercapture', end);
  redraw();
}
export function redraw() {
  const canvas = $('#draw-canvas'); if (!canvas) return;
  const rect = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
  const ctx = canvas.getContext('2d'); ctx.scale(dpr, dpr); ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  for (const stroke of pen.strokes) {
    ctx.globalCompositeOperation = stroke.eraser ? 'destination-out' : 'source-over'; ctx.strokeStyle = stroke.color; ctx.fillStyle = stroke.color; ctx.lineWidth = stroke.eraser ? stroke.width * 3 : stroke.width;
    if (stroke.points.length === 1) { const p = stroke.points[0]; ctx.beginPath(); ctx.arc(p.x * rect.width, p.y * rect.height, ctx.lineWidth / 2, 0, Math.PI * 2); ctx.fill(); }
    else { ctx.beginPath(); stroke.points.forEach((p, i) => ctx[i ? 'lineTo' : 'moveTo'](p.x * rect.width, p.y * rect.height)); ctx.stroke(); }
  }
  ctx.globalCompositeOperation = 'source-over';
}
