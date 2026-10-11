// Minimal QR Code generator (ISO/IEC 18004): byte mode, error correction level M, versions 1–20. Enough for an
// invitation link or the scoreboard link, without any dependency. Written for AdiPiña following the standard.

// Error correction level M, indexed by version (index 0 unused).
const ECC_PER_BLOCK = [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26];
const BLOCKS = [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16];
const FORMAT_LEVEL_M = 0;

function rawDataModules(version) {
  let result = (16 * version + 128) * version + 64;
  if (version >= 2) {
    const align = Math.floor(version / 7) + 2;
    result -= (25 * align - 10) * align - 55;
    if (version >= 7) result -= 36;
  }
  return result;
}
const dataCodewords = version => Math.floor(rawDataModules(version) / 8) - ECC_PER_BLOCK[version] * BLOCKS[version];

// Arithmetic in GF(256) with the QR polynomial x^8 + x^4 + x^3 + x^2 + 1.
function multiply(x, y) {
  let z = 0;
  for (let i = 7; i >= 0; i--) { z = (z << 1) ^ ((z >>> 7) * 0x11d); z ^= ((y >>> i) & 1) * x; }
  return z;
}
export function reedSolomonDivisor(degree) {
  const result = new Array(degree).fill(0);
  result[degree - 1] = 1;
  let root = 1;
  for (let i = 0; i < degree; i++) {
    for (let j = 0; j < result.length; j++) { result[j] = multiply(result[j], root); if (j + 1 < result.length) result[j] ^= result[j + 1]; }
    root = multiply(root, 2);
  }
  return result;
}
export function reedSolomonRemainder(data, divisor) {
  const result = divisor.map(() => 0);
  for (const byte of data) {
    const factor = byte ^ result.shift();
    result.push(0);
    divisor.forEach((coefficient, i) => { result[i] ^= multiply(coefficient, factor); });
  }
  return result;
}

function encodeData(bytes) {
  for (let version = 1; version < BLOCKS.length; version++) {
    const countBits = version <= 9 ? 8 : 16, capacity = dataCodewords(version) * 8;
    if (4 + countBits + bytes.length * 8 > capacity) continue;
    const bits = [];
    const push = (value, length) => { for (let i = length - 1; i >= 0; i--) bits.push((value >>> i) & 1); };
    push(0b0100, 4); push(bytes.length, countBits); bytes.forEach(byte => push(byte, 8));
    push(0, Math.min(4, capacity - bits.length));
    push(0, (8 - bits.length % 8) % 8);
    const codewords = [];
    for (let i = 0; i < bits.length; i += 8) codewords.push(bits.slice(i, i + 8).reduce((byte, bit) => (byte << 1) | bit, 0));
    for (let pad = 0xec; codewords.length < capacity / 8; pad ^= 0xec ^ 0x11) codewords.push(pad);
    return { version, codewords };
  }
  throw new Error('El texto es demasiado largo para un código QR.');
}

function interleave(version, data) {
  const blocks = BLOCKS[version], eccLength = ECC_PER_BLOCK[version], raw = Math.floor(rawDataModules(version) / 8);
  const shortBlocks = blocks - raw % blocks, shortLength = Math.floor(raw / blocks), divisor = reedSolomonDivisor(eccLength);
  const all = [];
  for (let i = 0, k = 0; i < blocks; i++) {
    const block = data.slice(k, k + shortLength - eccLength + (i < shortBlocks ? 0 : 1));
    k += block.length;
    const ecc = reedSolomonRemainder(block, divisor);
    if (i < shortBlocks) block.push(0);
    all.push([...block, ...ecc]);
  }
  const result = [];
  for (let i = 0; i < all[0].length; i++) all.forEach((block, j) => { if (i !== shortLength - eccLength || j >= shortBlocks) result.push(block[i]); });
  return result;
}

function alignmentPositions(version, size) {
  if (version === 1) return [];
  const count = Math.floor(version / 7) + 2;
  const step = Math.ceil((version * 4 + 4) / (count * 2 - 2)) * 2;
  const result = [6];
  for (let position = size - 7; result.length < count; position -= step) result.splice(1, 0, position);
  return result;
}
const MASKS = [
  (x, y) => (x + y) % 2 === 0, (x, y) => y % 2 === 0, x => x % 3 === 0, (x, y) => (x + y) % 3 === 0,
  (x, y) => (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0, (x, y) => x * y % 2 + x * y % 3 === 0,
  (x, y) => (x * y % 2 + x * y % 3) % 2 === 0, (x, y) => ((x + y) % 2 + x * y % 3) % 2 === 0
];
export function formatBits(mask) {
  const data = (FORMAT_LEVEL_M << 3) | mask;
  let remainder = data;
  for (let i = 0; i < 10; i++) remainder = (remainder << 1) ^ ((remainder >>> 9) * 0x537);
  return ((data << 10) | remainder) ^ 0x5412;
}
export function versionBits(version) {
  let remainder = version;
  for (let i = 0; i < 12; i++) remainder = (remainder << 1) ^ ((remainder >>> 11) * 0x1f25);
  return (version << 12) | remainder;
}

function build(version, codewords, mask) {
  const size = version * 4 + 17;
  const modules = Array.from({ length: size }, () => new Array(size).fill(false));
  const fixed = Array.from({ length: size }, () => new Array(size).fill(false));
  const set = (x, y, dark) => { modules[y][x] = dark; fixed[y][x] = true; };
  for (let i = 0; i < size; i++) { set(6, i, i % 2 === 0); set(i, 6, i % 2 === 0); }
  for (const [cx, cy] of [[3, 3], [size - 4, 3], [3, size - 4]]) {
    for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) {
      const x = cx + dx, y = cy + dy, distance = Math.max(Math.abs(dx), Math.abs(dy));
      if (x >= 0 && x < size && y >= 0 && y < size) set(x, y, distance !== 2 && distance !== 4);
    }
  }
  const positions = alignmentPositions(version, size), last = positions.length - 1;
  positions.forEach((ax, i) => positions.forEach((ay, j) => {
    if ((i === 0 && j === 0) || (i === 0 && j === last) || (i === last && j === 0)) return;
    for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) set(ax + dx, ay + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
  }));
  const format = formatBits(mask), bit = (value, i) => ((value >>> i) & 1) !== 0;
  for (let i = 0; i <= 5; i++) set(8, i, bit(format, i));
  set(8, 7, bit(format, 6)); set(8, 8, bit(format, 7)); set(7, 8, bit(format, 8));
  for (let i = 9; i < 15; i++) set(14 - i, 8, bit(format, i));
  for (let i = 0; i < 8; i++) set(size - 1 - i, 8, bit(format, i));
  for (let i = 8; i < 15; i++) set(8, size - 15 + i, bit(format, i));
  set(8, size - 8, true);
  if (version >= 7) {
    const bits = versionBits(version);
    for (let i = 0; i < 18; i++) { const a = size - 11 + i % 3, b = Math.floor(i / 3); set(a, b, bit(bits, i)); set(b, a, bit(bits, i)); }
  }
  let index = 0;
  for (let right = size - 1; right >= 1; right -= 2) {
    if (right === 6) right = 5;
    for (let vertical = 0; vertical < size; vertical++) for (let j = 0; j < 2; j++) {
      const x = right - j, upward = ((right + 1) & 2) === 0, y = upward ? size - 1 - vertical : vertical;
      if (!fixed[y][x] && index < codewords.length * 8) { modules[y][x] = bit(codewords[index >>> 3], 7 - (index & 7)); index++; }
    }
  }
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (!fixed[y][x] && MASKS[mask](x, y)) modules[y][x] = !modules[y][x];
  return modules;
}
// Lower is better: long runs, 2×2 blocks and an unbalanced amount of dark modules are penalised.
function penalty(modules) {
  const size = modules.length;
  let score = 0, dark = 0;
  for (let y = 0; y < size; y++) for (const line of [modules[y], modules.map(row => row[y])]) {
    let run = 1;
    for (let x = 1; x <= size; x++) {
      if (x < size && line[x] === line[x - 1]) run++;
      else { if (run >= 5) score += run - 2; run = 1; }
    }
  }
  for (let y = 0; y < size - 1; y++) for (let x = 0; x < size - 1; x++) {
    const color = modules[y][x];
    if (color === modules[y][x + 1] && color === modules[y + 1][x] && color === modules[y + 1][x + 1]) score += 3;
  }
  modules.forEach(row => row.forEach(cell => { if (cell) dark++; }));
  return score + Math.floor(Math.abs(dark * 20 - size * size * 10) / (size * size)) * 10;
}

export function qrMatrix(text) {
  const { version, codewords } = encodeData([...new TextEncoder().encode(text)]);
  const all = interleave(version, codewords);
  let best = null, bestScore = Infinity;
  for (let mask = 0; mask < 8; mask++) {
    const candidate = build(version, all, mask), score = penalty(candidate);
    if (score < bestScore) { best = candidate; bestScore = score; }
  }
  return best;
}
// Black on white with a quiet zone of 4 modules, as scanners expect.
export function qrSvg(text, label = 'Código QR') {
  const modules = qrMatrix(text), size = modules.length + 8;
  let path = '';
  modules.forEach((row, y) => row.forEach((dark, x) => { if (dark) path += `M${x + 4} ${y + 4}h1v1h-1z`; }));
  return `<svg viewBox="0 0 ${size} ${size}" width="220" height="220" role="img" aria-label="${label}" shape-rendering="crispEdges" style="background:#fff;max-width:100%;height:auto"><path d="${path}" fill="#000"/></svg>`;
}
