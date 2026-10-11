import { COLORS } from './util.js';
import { avatarFor, avatarImage } from '../content.js';

export const mascot = { index: 0 };
// Icons and the pineapple mascot, unchanged from the original interface (design by Codex).
// New icons follow the same 24×24 stroke style.
export function icon(name, cls = '') {
  const paths = {
    key: '<circle cx="16" cy="8" r="5"/><path d="m12.5 11.5-9 9H2v-4l8-8M6 17l2 2"/>',
    arrow: '<path d="M4 12h16m-6-6 6 6-6 6"/>', back: '<path d="M20 12H4m6-6-6 6 6 6"/>', check: '<path d="m5 12 4 4L19 6"/>', plus: '<path d="M12 5v14M5 12h14"/>', x: '<path d="m6 6 12 12M6 18 18 6"/>',
    pencil: '<path d="m4 16-1 5 5-1L21 7l-4-4L4 16Zm11-11 4 4M4 16l4 4"/>', person: '<circle cx="12" cy="4" r="2"/><path d="m5 10 7-3 7 3M12 8v7m0 0-5 6m5-6 5 6"/>', chat: '<path d="M21 11a8 8 0 0 1-8 8H7l-5 3 2-6a8 8 0 1 1 17-5Z"/><path d="M8 10h8M8 14h5"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/>', people: '<circle cx="8" cy="7" r="3"/><path d="M2 21v-3a6 6 0 0 1 12 0v3M16 4a3 3 0 0 1 0 6m2 4a5 5 0 0 1 4 5v2"/>',
    shuffle: '<path d="M3 5h3c5 0 7 14 12 14h3m-4-4 4 4-4 3M3 19h3c2 0 4-3 5-6m3-6c1-1 2-2 4-2h3m-4-3 4 3-4 4"/>', volume: '<path d="m11 4-5 4H2v8h4l5 4V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>', mute: '<path d="m11 4-5 4H2v8h4l5 4V4Zm5 5 6 6m-6 0 6-6"/>',
    timer: '<circle cx="12" cy="14" r="8"/><path d="M12 10v4l3 2M9 2h6M12 2v4m6 0 2-2"/>', pause: '<path d="M8 4v16M16 4v16"/>', skip: '<path d="m4 5 10 7-10 7V5Zm14 0v14"/>', play: '<path d="m7 4 14 8-14 8V4Z"/>', lock: '<rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',
    star: '<path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z"/>', magic: '<path d="m3 21 13-13 4 4L7 25M14 10l4 4M5 3v6M2 6h6m12-5v5m-3-2h6"/>',
    film: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h4M3 16h4m10-8h4m-4 8h4"/>', tv: '<rect x="2" y="7" width="20" height="14" rx="3"/><path d="m8 2 4 5 4-5M18 11v6"/>', book: '<path d="M12 5C8 2 5 2 2 4v16c3-2 6-2 10 1 4-3 7-3 10-1V4c-3-2-6-2-10 1Zm0 0v16"/>',
    music: '<path d="M9 18V5l11-3v13M9 8l11-3"/><ellipse cx="6" cy="18" rx="3" ry="3"/><ellipse cx="17" cy="15" rx="3" ry="3"/>', game: '<path d="M7 7h10c4 0 5 6 5 11 0 3-3 3-5 0l-2-2H9l-2 2c-2 3-5 3-5 0 0-5 1-11 5-11Z"/><path d="M7 10v6M4 13h6M16 11h1m2 3h1"/>',
    paw: '<ellipse cx="5" cy="8" rx="2" ry="3"/><ellipse cx="10" cy="5" rx="2" ry="3"/><ellipse cx="16" cy="5" rx="2" ry="3"/><ellipse cx="21" cy="9" rx="2" ry="3"/><path d="M5 19c0-4 5-9 8-9s8 5 8 9c0 5-5 1-8 1s-8 4-8-1Z"/>', cup: '<path d="M3 4h14v11a6 6 0 0 1-12 0V4m12 2h2a4 4 0 0 1 0 8h-2M2 22h18"/>', case: '<rect x="2" y="7" width="20" height="14" rx="3"/><path d="M8 7V3h8v4M2 12q10 6 20 0M12 13v4"/>', ball: '<circle cx="12" cy="12" r="10"/><path d="m8 7 8 1 2 7-6 4-6-5 2-7ZM8 7 6 4m10 4 4-2m-2 9 3 2m-9 2v3m-6-8-4-1"/>',
    trophy: '<path d="M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v4a4 4 0 0 0 4 4m10-8h4v4a4 4 0 0 1-4 4M12 15v6m-5 0h10"/>', undo: '<path d="m8 3-6 6 6 6M2 9h12a7 7 0 0 1 0 14"/>', trash: '<path d="M3 6h18M9 6V2h6v4M5 6l1 15h12l1-15M10 10v7m4-7v7"/>', eraser: '<path d="m3 15 10-12 9 8-8 10H9l-6-6Zm5-6 9 8M14 21h8"/>', wifi: '<path d="M2 8a16 16 0 0 1 20 0M5 12a11 11 0 0 1 14 0m-10 4a5 5 0 0 1 6 0M12 20h.01"/>', copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V3H3v13h5"/>', info: '<circle cx="12" cy="12" r="10"/><path d="M12 10v7M12 6h.01"/>', leaf: '<path d="M20 3C4 1 1 13 7 18c6 6 15 0 13-15ZM4 21 16 9"/>', crown: '<path d="m3 6 5 4 4-7 4 7 5-4-3 14H6L3 6Z"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9 7 7m10 10 2.1 2.1M4.9 19.1 7 17m10-10 2.1-2.1"/>', share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>', flag: '<path d="M5 22V3m0 1h12l-2 4 2 4H5"/>', download: '<path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/>', upload: '<path d="M12 21V9m-5 5 5-5 5 5M4 3h16"/>', screen: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8m-4-4v4"/>'
  };
  return `<svg class="icon ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.star}</svg>`;
}

// A team's pineapple: its illustrated character if it has one, otherwise the classic SVG with colour and accessories.
// `portrait` picks the compact head for small boxes (turn header, ranking). Decorative: the team name is always next to it.
export function pineapple(team = {}, cls = '', portrait = false) {
  const avatar = avatarFor(team.avatar);
  if (avatar) return `<img class="pineapple pineapple-art ${portrait ? 'pineapple-portrait' : ''} ${cls}" src="./${avatarImage(avatar.id, portrait)}" alt="" width="160" height="160" decoding="async"/>`;
  const color = COLORS.includes(team.color) ? team.color : COLORS[0];
  const acc = team.accessories || [];
  const id = `cross-${++mascot.index}`;
  return `<svg class="pineapple ${cls}" viewBox="0 0 220 270" fill="none" aria-hidden="true">
    <defs><pattern id="${id}" width="35" height="35" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0H35V35" stroke="#343548" stroke-opacity=".15" stroke-width="2"/></pattern></defs>
    <ellipse cx="111" cy="254" rx="56" ry="8" fill="#343548" opacity=".08"/>
    <g stroke="#343548" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="m99 91-40-62 39 21L106 9l17 40 36-28-20 62 34-25-20 42" fill="#79a882"/>
      <path d="m108 87-2-40m19 40 13-39m-40 38L79 50" stroke="#4a785d"/>
      <path d="M64 179q-25-2-29-26m116 26q23-3 31-26"/>
      <path d="m88 231-8 17m52-17 8 17"/>
      <rect x="54" y="78" width="113" height="160" rx="54" fill="${color}"/>
      <rect x="54" y="78" width="113" height="160" rx="54" fill="url(#${id})" stroke="none"/>
      <path d="M79 110q11-12 23-12" stroke="white" stroke-opacity=".55" stroke-width="6"/>
      ${acc.includes('headphones') ? '<path d="M53 151v-22a58 58 0 0 1 116 0v22" stroke="#5a557a" stroke-width="10"/><rect x="46" y="136" width="15" height="36" rx="7" fill="#a89acb"/><rect x="161" y="136" width="15" height="36" rx="7" fill="#a89acb"/>' : ''}
      ${acc.includes('glasses') ? '<path d="M67 137h86m-45 0h6" stroke-width="5"/><path d="M70 135h35v10a17 17 0 0 1-34 0l-1-10Zm46 0h35l-1 10a17 17 0 0 1-34 0v-10Z" fill="#343548"/><path d="m78 139 8 8m37-8 8 8" stroke="white" stroke-opacity=".35"/>' : '<path d="M87 143v6m47-6v6" stroke-width="6"/>'}
      <ellipse cx="77" cy="166" rx="10" ry="5" fill="#e27e6d" fill-opacity=".6" stroke="none"/><ellipse cx="145" cy="166" rx="10" ry="5" fill="#e27e6d" fill-opacity=".6" stroke="none"/>
      <path d="M96 170q15 19 29 0" fill="#fcfaf0"/>
      ${acc.includes('hat') ? '<path d="m69 83 9-39q32-13 64 0l10 39" fill="#eab788"/><path d="M77 66h66l4 13H73l4-13Z" fill="#d47964"/><path d="M50 86q60-23 120 0-60 18-120 0Z" fill="#f2cca2"/>' : ''}
    </g></svg>`;
}
