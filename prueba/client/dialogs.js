// Dialog windows. Each function opens one; the buttons inside are handled by app.js like any other action.
import { CARD_DIFFICULTIES, FORMATS, MODES } from '../content.js';
import { S } from './state.js';
import { $, button, escape, quantity } from './util.js';
import { icon } from './icons.js';
import { loadHistory, loadReports, loadSeen } from './store.js';
import { inviteBase, isNative, serverBase } from './platform.js';
import { qrSvg } from './qr.js';
import { categories, categoryName } from './views.js';

let handler = () => {};
export const setDialogHandler = callback => { handler = callback; };
export function dialog(content) {
  $('#modal')?.remove();
  const el = document.createElement('dialog'); el.id = 'modal'; el.innerHTML = `<button class="icon-btn dialog-close" data-action="close-dialog" aria-label="Cerrar">${icon('x')}</button>${content}`;
  // VoiceOver announces the dialog by its title.
  const heading = el.querySelector('h2'); if (heading) { heading.id = 'modal-title'; el.setAttribute('aria-labelledby', 'modal-title'); }
  document.body.append(el); el.showModal();
  el.addEventListener('click', event => { const target = event.target.closest('[data-action]'); if (target) handler(target); else if (event.target === el && event.clientX && (event.clientX < el.getBoundingClientRect().left || event.clientX > el.getBoundingClientRect().right || event.clientY < el.getBoundingClientRect().top || event.clientY > el.getBoundingClientRect().bottom)) el.close(); });
  el.addEventListener('change', event => { if (event.target.dataset.setting || event.target.dataset.input) handler(event.target, 'change'); });
  el.addEventListener('close', () => el.remove());
}
export const closeDialog = () => $('#modal')?.close();

export function helpDialog() {
  dialog(`<span class="eyebrow">POCAS REGLAS. MUCHAS RISAS.</span><h2>Cómo se juega</h2><ol class="help-list"><li><strong>Formad al menos dos piñas.</strong> Cada equipo puede tener dos o más personas. Con «Partida rápida» elegís un pack y listo.</li><li><strong>Elegid uno o varios móviles.</strong> Con uno, lo pasáis entre equipos. En sala, cada piña se une con su móvil (código o QR) y el maestro empieza la partida.</li><li><strong>Una persona da las pistas.</strong> Lee la respuesta en privado y la hace adivinar según la modalidad de la tarjeta.</li><li><strong>Tu piña tiene que adivinar.</strong> Pulsa «Acertado» para sumar un punto, o «Saltar» según vuestras reglas. ¿Te has equivocado? «Deshacer la última».</li><li><strong>Cuando acabe el tiempo, cambia la piña.</strong> Gana quien más puntos tenga al final de las rondas o quien llegue antes al objetivo.</li></ol>
    <h3>Modalidades</h3><div class="custom-list">${Object.values(MODES).map(m => `<div><span>${icon(m.icon)} <strong>${m.name}</strong><small>${m.rule}</small></span></div>`).join('')}</div>
    <h3>Formatos y extras</h3><div class="custom-list"><div><span><strong>${FORMATS.rounds3.name}</strong><small>${FORMATS.rounds3.description} Una ronda termina cuando se adivinan todas; las saltadas vuelven al montón.</small></span></div><div><span><strong>¡Todos juegan!</strong><small>Algunas tarjetas las puede acertar cualquier piña: quien da pistas elige quién se lleva el punto.</small></span></div><div><span><strong>Robo de tarjeta</strong><small>Al saltar, otra piña puede robar el punto si la adivina.</small></span></div><div><span><strong>Ronda relámpago</strong><small>La última ronda dura 30 segundos y cada acierto vale doble.</small></span></div></div>
    <p class="notice">${icon('lock')} Pausar oculta la respuesta. En dibujo de pantalla, abre el lienzo antes de enseñar el móvil.</p>`);
}
export function settingsDialog() {
  const st = S.settings, seen = loadSeen().length, reports = loadReports().length;
  const select = (name, value, options) => `<select data-setting="${name}">${options.map(([id, label]) => `<option value="${id}" ${value === id ? 'selected' : ''}>${label}</option>`).join('')}</select>`;
  dialog(`<span class="eyebrow">ESTE MÓVIL</span><h2>Ajustes</h2>
    <label>Sonido ${select('muted', String(st.muted), [['false', 'Activado'], ['true', 'Silenciado']])}</label>
    <label>Cuenta atrás en los últimos 10 segundos ${select('countdown', String(st.countdown), [['true', 'Con sonido y vibración'], ['false', 'Sin aviso']])}</label>
    <label>Vibración ${select('vibration', String(st.vibration), [['true', 'Activada'], ['false', 'Desactivada']])}</label>
    <label>Tamaño de la respuesta ${select('answerSize', st.answerSize, [['normal', 'Normal'], ['large', 'Grande'], ['huge', 'Muy grande']])}</label>
    <h3>Vuestro contenido</h3><p class="hint">${quantity(S.customCards.length, 'respuesta propia', 'respuestas propias')} en ${quantity(S.customCategories.length, 'categoría', 'categorías')}.</p>
    <div class="stack-actions">${button('export-custom', isNative() ? `${icon('share')} Compartir vuestro contenido` : `${icon('download')} Exportar a un archivo`, 'secondary', S.customCards.length ? '' : 'disabled')}${button('import-custom', `${icon('upload')} Importar desde un archivo`, 'secondary')}${button('paste-custom', `${icon('copy')} Pegar contenido copiado`, 'secondary')}</div><input type="file" id="import-file" accept="application/json,.json,text/plain,.txt" hidden data-input="import-file"/>
    <h3>Partidas y tarjetas</h3><div class="stack-actions">${button('show-history', `${icon('trophy')} Vuestras últimas partidas`, 'text')}${button('show-reports', `${icon('flag')} Tarjetas reportadas (${reports})`, 'text')}${button('clear-seen', `${icon('shuffle')} Olvidar tarjetas vistas (${seen})`, 'text', seen ? '' : 'disabled')}</div>
    <h3>Servidor de salas</h3><label for="server-url">Dirección <span>Vacío = este mismo servidor. Solo para pruebas o la app</span></label><input id="server-url" type="url" inputmode="url" placeholder="https://…" value="${escape(st.server)}" data-setting="server"/>${serverBase(st) ? `<p class="hint">Las salas usan ${escape(serverBase(st))}.</p>` : ''}
    <h3>Privacidad</h3><p class="hint">Todo se guarda en este móvil: ajustes, equipos, contenido propio, partidas y tarjetas vistas. En una sala, el servidor guarda la partida hasta que caduca o el maestro la cierra. Sin cuentas ni publicidad.</p>${button('clear-all', `${icon('trash')} Borrar todos los datos de este móvil`, 'text')}`);
}
export function customEditor() {
  dialog(`<span class="eyebrow">HECHO POR VUESTRA PIÑA</span><h2>Vuestras propias respuestas</h2><p>Cosas que os conocéis de memoria. Guardadas en este móvil para futuras partidas.</p><label for="custom-category">Categoría</label><select id="custom-category"><option value="new">Crear una categoría nueva…</option>${categories().map(c => `<option value="${escape(c.id)}">${escape(c.name)}</option>`).join('')}</select><label for="custom-category-name">Nombre de la categoría nueva</label><input id="custom-category-name" maxlength="40" placeholder="Bromas de la familia"/><label for="custom-difficulty">Dificultad</label><select id="custom-difficulty">${Object.entries(CARD_DIFFICULTIES).map(([id, name]) => `<option value="${id}">${name}</option>`).join('')}</select><label for="custom-answers">Respuestas <span>Una por línea · hasta 120 caracteres</span></label><textarea id="custom-answers" rows="6" placeholder="La tortilla de la abuela&#10;El viaje a Valencia"></textarea><p class="hint">Los duplicados y las líneas vacías se omiten automáticamente.</p>${button('save-custom', `Guardar respuestas ${icon('check')}`, 'primary full-width')}`);
}
// Content sent from another phone as text (the iPhone app shares it this way; see saveText in platform.js).
export function pasteDialog() {
  dialog(`<span class="eyebrow">DE OTRO MÓVIL</span><h2>Pegar contenido copiado</h2><p>Pega aquí el mensaje con el contenido de AdiPiña que os han enviado, entero. Se añaden las respuestas que no tengáis ya.</p><label for="import-text">Contenido</label><textarea id="import-text" rows="6" autocomplete="off" spellcheck="false" placeholder="Contenido de AdiPiña…"></textarea>${button('import-text', `Importar ${icon('check')}`, 'primary full-width')}`);
}
export function manageCustom() {
  dialog(`<h2>Vuestras respuestas</h2><p>${S.customCards.length} respuestas guardadas en este móvil.</p><div class="custom-list">${S.customCards.map(card => `<div><span>${escape(card.answer)}<small>${escape(categoryName(card.category))} · ${CARD_DIFFICULTIES[card.difficulty]}</small></span>${button('delete-custom', icon('trash'), 'icon-btn', `data-value="${escape(card.id)}" aria-label="Eliminar ${escape(card.answer)}"`)}</div>`).join('') || '<p>Ya no hay respuestas propias.</p>'}</div>${S.customCategories.length ? `<h3 style="margin-top:24px">Vuestras categorías</h3><p class="hint">Puedes eliminar una categoría cuando no tenga respuestas.</p><div class="custom-list">${S.customCategories.map(category => `<div><span>${escape(category.name)}</span>${button('delete-category', icon('trash'), 'icon-btn', `data-value="${escape(category.id)}" aria-label="Eliminar categoría ${escape(category.name)}" ${S.customCards.some(card => card.category === category.id) ? 'disabled' : ''}`)}</div>`).join('')}</div>` : ''}`);
}
export function hostKeyDialog(intro = '') {
  dialog(`<span class="eyebrow">SOLO PARA EL MAESTRO</span><h2>Clave del maestro</h2>${intro ? `<p>${escape(intro)}</p>` : ''}<label for="host-key">Guárdala fuera de este móvil (una foto o una nota)</label><input id="host-key" readonly value="${escape(S.remote.hostKey)}"/><p class="hint">Si este móvil se pierde o se queda sin batería, abre AdiPiña en otro, pulsa «Unirme con código», escribe el código de sala ${S.remote.code} y esta clave en «Recuperar acceso». Al usarla se genera una nueva. No la compartas: da el control de la sala.</p>${button('close-dialog', 'Entendido', 'primary full-width')}`);
}
export function roomToolsDialog() {
  const data = S.remote.snapshot;
  dialog(`<span class="eyebrow">SALA ${S.remote.code}</span><h2>Gestionar sala</h2><p>Si una piña cambia de móvil, genera un código y escríbelo en el móvil nuevo, en «Unirme con código» › «Recuperar acceso». El móvil anterior dejará de funcionar.</p>
    <div class="custom-list">${data.teams.map(team => `<div><span>${escape(team.name)}<small>${team.id === data.identity.teamId ? 'Este móvil' : team.claimed ? team.online ? 'Conectado' : 'Con móvil · sin conexión ahora' : 'Sin móvil'}</small></span><span class="stack-actions">${team.claimed ? button('recovery-code', 'Código para otro móvil', 'text', `data-value="${escape(team.id)}"`) : ''}${team.claimed && team.id !== data.identity.teamId ? button('transfer-host', 'Hacer maestro', 'text', `data-value="${escape(team.id)}"`) : ''}</span></div>`).join('')}</div>
    <div class="stack-actions">${inviteBase(S.settings) ? button('viewer-link', `${icon('screen')} Marcador para la tele o una tablet`, 'secondary') : ''}${button('show-host-key', S.remote.hostKey ? 'Ver clave del maestro' : 'Generar clave del maestro', 'secondary')}${S.game ? button('adjust-score', 'Corregir el marcador', 'text') : ''}${button('close-room-confirm', 'Cerrar la sala para todos', 'text')}</div>`);
}
export function viewerDialog(url) {
  dialog(`<span class="eyebrow">MARCADOR</span><h2>Abrid el marcador en una pantalla grande</h2><p>Escanead el código desde la tele, una tablet u ordenador, o abrid el enlace. Muestra quién juega, el tiempo y los puntos; nunca las respuestas.</p><div class="room-code-panel"><span>ENLACE DEL MARCADOR</span>${qrSvg(url, 'Código QR del marcador')}</div><label for="viewer-url">Enlace</label><input id="viewer-url" readonly value="${escape(url)}"/><p class="hint">Si generáis otro enlace, el marcador anterior se desconecta.</p>${button('copy-viewer', `${icon('copy')} Copiar enlace`, 'primary full-width', `data-value="${escape(url)}"`)}`);
}
export function adjustDialog() {
  const s = S.game.state;
  dialog(`<span class="eyebrow">MARCADOR</span><h2>Corregir puntos</h2><p>Para resolver una discusión o un error. Todos los móviles verán el ajuste.</p><div class="custom-list">${s.teams.map(team => `<div><span>${escape(team.name)}<small>${quantity(team.score, 'punto', 'puntos')}</small></span><span class="step-control">${button('adjust', '−1', 'icon-btn', `data-value="${escape(team.id)}" data-delta="-1" aria-label="Restar un punto a ${escape(team.name)}"`)}${button('adjust', '+1', 'icon-btn', `data-value="${escape(team.id)}" data-delta="1" aria-label="Sumar un punto a ${escape(team.name)}"`)}</span></div>`).join('')}</div>`);
}
// «Todos juegan» (who guessed it?) and stealing (who stole it after a skip?).
export function awardDialog(kind) {
  const s = S.game.state, active = S.game.team;
  const teams = kind === 'steal' ? s.teams.filter(team => team.id !== active.id) : s.teams;
  dialog(`<span class="eyebrow">${kind === 'steal' ? 'ROBO DE TARJETA' : '¡TODOS JUEGAN!'}</span><h2>${kind === 'steal' ? '¿La ha robado otra piña?' : '¿Quién la ha acertado?'}</h2><div class="stack-actions">${teams.map(team => button('award', escape(team.name), team.id === active.id ? 'primary' : 'secondary', `data-value="${escape(team.id)}"`)).join('')}${button(kind === 'steal' ? 'skipped' : 'close-dialog', kind === 'steal' ? 'Nadie: saltar' : 'Volver', 'text')}</div><p class="hint">El tiempo sigue corriendo.</p>`);
}
export function reviseDialog(index) {
  const s = S.game.state, entry = s.turn.log[index];
  dialog(`<span class="eyebrow">CORREGIR TARJETA</span><h2>${escape(entry.answer)}</h2><div class="stack-actions">${button('revise-set', 'Acertada', 'primary', `data-value="${index}" data-result="correct"`)}${s.teams.filter(team => team.id !== S.game.team.id).map(team => button('revise-set', `La acertó ${escape(team.name)}`, 'secondary', `data-value="${index}" data-result="correct" data-team="${escape(team.id)}"`)).join('')}${button('revise-set', 'Saltada', 'secondary', `data-value="${index}" data-result="skipped"`)}${button('revise-set', 'Sin resolver', 'text', `data-value="${index}" data-result="pending"`)}</div>`);
}
// The card is kept when the dialog opens: the turn may end (and the card change) before a reason is chosen.
export function reportDialog(card) {
  dialog(`<span class="eyebrow">REPORTAR TARJETA</span><h2>${escape(card.answer)}</h2><p>Se guarda en este móvil para revisarla. Podéis enviar la lista desde Ajustes.</p><div class="stack-actions">${[['unknown', 'Casi nadie la conoce'], ['wrong', 'Está mal escrita o es incorrecta'], ['hard', 'La dificultad no encaja'], ['inappropriate', 'Es inapropiada'], ['mode', 'No funciona en esta modalidad']].map(([id, label]) => button('report-reason', label, 'secondary', `data-value="${id}"`)).join('')}</div>`);
}
export function reportsDialog() {
  const reports = loadReports();
  dialog(`<span class="eyebrow">PARA MEJORAR EL BANCO</span><h2>Tarjetas reportadas</h2>${reports.length ? `<div class="custom-list">${reports.slice(-50).reverse().map(report => `<div><span>${escape(report.answer)}<small>${escape(report.reason)} · ${escape(report.date.slice(0, 10))}</small></span></div>`).join('')}</div><div class="stack-actions">${button('share-reports', `${icon('share')} Compartir la lista`, 'primary')}${button('clear-reports', 'Vaciar la lista', 'text')}</div>` : '<p class="hint">Aún no habéis reportado ninguna tarjeta.</p>'}`);
}
export function historyDialog() {
  const history = loadHistory().slice().reverse();
  dialog(`<span class="eyebrow">EN ESTE MÓVIL</span><h2>Vuestras últimas partidas</h2>${history.length ? `<div class="custom-list">${history.map(entry => `<div><span><strong>${escape(entry.winners.join(' y '))}</strong><small>${new Date(entry.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long' })} · ${entry.teams.map(team => `${escape(team.name)} ${team.score}`).join(' · ')}</small></span></div>`).join('')}</div>${button('clear-history', 'Borrar historial', 'text')}` : '<p class="hint">Cuando terminéis una partida aparecerá aquí.</p>'}`);
}
export function presetDialog() {
  dialog(`<span class="eyebrow">PARTIDA FAVORITA</span><h2>Guardar estas reglas</h2><p>Aparecerá en «Partida rápida» con estos equipos y reglas.</p><label for="preset-name">Nombre</label><input id="preset-name" maxlength="40" placeholder="La de los domingos"/>${button('save-preset-confirm', `Guardar ${icon('check')}`, 'primary full-width')}`);
}
export function exitDialog() {
  dialog(`<h2>${S.remote ? '¿Salir de la sala?' : '¿Dejar la partida aquí?'}</h2><p>${S.remote ? 'La partida continúa en los otros móviles. Puedes volver desde este móvil con «Volver a la sala».' : 'Quedará guardada y en pausa. Puedes continuar desde el inicio.'}</p><div class="stack-actions">${button('confirm-exit', 'Volver al inicio', 'secondary')}${button('close-dialog', 'Seguir aquí', 'primary')}</div>`);
}
export function finishDialog() {
  dialog(`<h2>¿Terminamos aquí?</h2><p>Veréis los resultados con los puntos conseguidos hasta ahora${S.remote ? ' en todos los móviles' : ''}.</p><div class="stack-actions">${button('finish', 'Terminar partida', 'primary')}${button('close-dialog', 'Seguir en pausa', 'secondary')}</div>`);
}
export function onboardingDialog() {
  dialog(`<span class="eyebrow">¡BIENVENIDA, PIÑA!</span><h2>Así se juega en 20 segundos</h2><ol class="help-list"><li><strong>«¡A jugar!»</strong> abre la partida rápida: elegid un pack y cuántas piñas sois.</li><li>Quien da pistas pulsa <strong>«Estoy listo»</strong> y ve la respuesta en privado.</li><li>Su piña adivina: <strong>«Acertado»</strong> suma, <strong>«Saltar»</strong> pasa a la siguiente.</li><li>¿Varios móviles? <strong>«Crear sala»</strong> y cada piña se une con el código o el QR.</li></ol>${button('close-dialog', '¡Vamos allá!', 'primary full-width')}`);
}
