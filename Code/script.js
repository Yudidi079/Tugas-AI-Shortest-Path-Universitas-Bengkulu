// ─────────────────────────────────────────────────────────────────
//  NODE POSITIONS  — disesuaikan 1:1 dengan gambar referensi
//  viewBox = 0 0 1130 610
// ─────────────────────────────────────────────────────────────────
const NODES = [
  // ── Pintu Gerbang ──
  { id: 'G_DEPAN',  label: 'Gerbang Depan',         x: 40,   y: 382 },
  { id: 'G_MASUK',  label: 'Gerbang Masuk 1',        x: 563,  y: 418 },
  { id: 'G_BELAK',  label: 'Gerbang Belakang',        x: 878,  y: 425 },
  { id: 'KELUAR',   label: 'Keluar',                  x: 980,  y: 428 },

  // ── Zona Barat ──
  { id: 'MSJ',      label: 'Masjid',                 x: 80,   y: 215 },
  { id: 'GEDA',     label: 'Ged. A',                 x: 170,  y: 215 },
  { id: 'GEDB',     label: 'Ged. B',                 x: 170,  y: 275 },
  { id: 'GEDC',     label: 'Ged. C/MAKSI',           x: 175,  y: 335 },
  { id: 'PASCA',    label: 'Pasca Hukum',            x: 175,  y: 372 },
  { id: 'GEDF',     label: 'Ged. F',                 x: 175,  y: 412 },
  { id: 'LABH',     label: 'Lab. Hukum',             x: 132,  y: 472 },

  // ── Zona Pertanian ──
  { id: 'GEDT',      label: 'Ged. T',                x: 323,  y: 215 },
  { id: 'LABAGRO',   label: 'Lab. Agro',             x: 503,  y: 94  },
  { id: 'GEDRENPER', label: 'Ged. Renper',           x: 457,  y: 135 },
  { id: 'DEKAPT',    label: 'Dek. Pertanian',        x: 393,  y: 272 },
  { id: 'GEDV',      label: 'Ged. V',                x: 458,  y: 268 },

  // ── Zona Tengah ──
  { id: 'BASIC',   label: 'Basic Sains',             x: 603,  y: 135 },
  { id: 'PUSKOM',  label: 'Puskom',                  x: 558,  y: 255 },
  { id: 'REKT',    label: 'Rektorat',                x: 568,  y: 385 },
  { id: 'GEDJ',    label: 'Ged. J',                  x: 378,  y: 395 },
  { id: 'GEDI',    label: 'Ged. I',                  x: 240,  y: 445 },
  { id: 'UPT_BI',  label: 'UPT B.Inggris',          x: 390,  y: 465 },
  { id: 'GEDMM',   label: 'Ged. MM',                 x: 298,  y: 525 },
  { id: 'GEDMPP',  label: 'Ged. MPP',                x: 298,  y: 562 },

  // ── Zona Timur ──
  { id: 'DEK_MIPA',  label: 'Dek. MIPA',            x: 723,  y: 38  },
  { id: 'PKM',       label: 'PKM',                   x: 803,  y: 38  },
  { id: 'GBV',       label: 'GB V',                  x: 933,  y: 38  },
  { id: 'PSPD',      label: 'PSPD',                  x: 1038, y: 38  },
  { id: 'GB34',      label: 'GB III & IV',            x: 943,  y: 78  },
  { id: 'PERP',      label: 'Perpustakaan',           x: 888,  y: 158 },
  { id: 'GBI',       label: 'GB I',                  x: 843,  y: 220 },
  { id: 'STADION',   label: 'Stadion',               x: 1048, y: 215 },
  { id: 'DEK_FKIO',  label: 'Dek. FKIO',            x: 883,  y: 265 },
  { id: 'GSG',       label: 'GSG',                   x: 968,  y: 265 },
  { id: 'GBII',      label: 'GB II',                 x: 858,  y: 308 },
  { id: 'LPTIK',     label: 'LPTIK',                 x: 858,  y: 345 },
  { id: 'DEK_FISIP', label: 'Dek. FISIP',            x: 842,  y: 383 },
  { id: 'DEK_TK',    label: 'Dek. Teknik',           x: 968,  y: 358 },
  { id: 'MSJ_BH',    label: 'Masjid Baitul Hikmah',  x: 1002, y: 392 },
];

// ─────────────────────────────────────────────────────────────────
//  EDGES  (bobot = estimasi jarak dalam meter)
// ─────────────────────────────────────────────────────────────────
const EDGES = [
  // ── Gerbang ──
  ['G_DEPAN', 'MSJ',       185],
  ['G_DEPAN', 'PASCA',     135],
  ['G_DEPAN', 'LABH',      200],
  ['G_MASUK', 'REKT',       40],
  ['G_BELAK', 'DEK_FISIP',  58],
  ['G_BELAK', 'MSJ_BH',    130],
  ['G_BELAK', 'KELUAR',    108],
  ['KELUAR',  'DEK_TK',     85],
  ['KELUAR',  'MSJ_BH',     50],

  // ── Zona Barat ──
  ['MSJ',   'GEDA',    55],
  ['MSJ',   'GEDB',    85],
  ['GEDA',  'GEDB',    60],
  ['GEDA',  'GEDT',    60],
  ['GEDB',  'GEDC',    60],
  ['GEDB',  'DEKAPT', 120],
  ['GEDC',  'PASCA',   50],
  ['PASCA', 'GEDF',    50],
  ['GEDF',  'LABH',    60],
  ['GEDF',  'GEDI',   155],
  ['LABH',  'GEDI',   185],

  // ── Zona Pertanian ──
  ['GEDT',      'GEDRENPER', 158],
  ['GEDT',      'DEKAPT',    140],
  ['GEDRENPER', 'LABAGRO',    80],
  ['GEDRENPER', 'BASIC',     162],
  ['LABAGRO',   'DEK_MIPA',  262],
  ['DEKAPT',    'GEDV',       50],
  ['GEDV',      'PUSKOM',    110],

  // ── Zona Tengah ──
  ['BASIC',  'DEK_MIPA', 120],
  ['BASIC',  'PUSKOM',   128],
  ['PUSKOM', 'GBI',      110],
  ['PUSKOM', 'REKT',     148],
  ['REKT',   'G_MASUK',   40],
  ['REKT',   'GEDJ',     200],
  ['REKT',   'DEK_FISIP',285],
  ['GEDJ',   'GEDI',     162],
  ['GEDJ',   'UPT_BI',    80],
  ['GEDI',   'UPT_BI',   158],
  ['GEDI',   'GEDMM',     90],
  ['UPT_BI', 'GEDMM',    100],
  ['GEDMM',  'GEDMPP',    42],

  // ── Zona Timur atas ──
  ['DEK_MIPA', 'PKM',    80],
  ['PKM',      'GBV',   130],
  ['GBV',      'PSPD',  108],
  ['GBV',      'GB34',   76],
  ['PSPD',     'STADION',118],
  ['GB34',     'PERP',  135],
  ['PERP',     'GBI',   130],

  // ── Zona Timur bawah ──
  ['GBI',      'DEK_FKIO',   60],
  ['GBI',      'GBII',        88],
  ['GBI',      'STADION',    210],
  ['STADION',  'GSG',        100],
  ['DEK_FKIO', 'GSG',         90],
  ['DEK_FKIO', 'GBII',        50],
  ['GSG',      'DEK_TK',     100],
  ['GBII',     'LPTIK',       40],
  ['GBII',     'DEK_FISIP',   88],
  ['LPTIK',    'DEK_FISIP',   48],
  ['DEK_FISIP','DEK_TK',     140],
  ['DEK_TK',   'MSJ_BH',      50],
];

// ─────────────────────────────────────────────────────────────────
//  Zone definitions (untuk rendering SVG)
// ─────────────────────────────────────────────────────────────────
const ZONES = [
  {
    label: 'Zona Barat',
    pts:   '5,120 222,120 222,545 5,545',
    fill: '#EDE8DF', stroke: '#C8BCA8',
    lx: 12, ly: 135
  },
  {
    label: 'Zona Pertanian',
    pts:   '222,62 582,62 582,332 222,332',
    fill: '#E5EFD8', stroke: '#B8D0A0',
    lx: 228, ly: 77
  },
  {
    label: 'Zona Tengah',
    pts:   '222,332 665,332 665,598 222,598',
    fill: '#E6E9E2', stroke: '#C0C8B8',
    lx: 228, ly: 347
  },
  {
    label: 'Zona Timur',
    pts:   '665,5 1125,5 1125,498 665,498',
    fill: '#DDE8F0', stroke: '#A8C0D4',
    lx: 672, ly: 18
  },
];

// ─────────────────────────────────────────────────────────────────
//  Adjacency list
// ─────────────────────────────────────────────────────────────────
const adj = {};
NODES.forEach(n => adj[n.id] = []);
EDGES.forEach(function (e) {
  adj[e[0]].push([e[1], e[2]]);
  adj[e[1]].push([e[0], e[2]]);
});

const nodeById = id => NODES.find(n => n.id === id);

let currentPath = [];

// ─────────────────────────────────────────────────────────────────
//  Dijkstra's Algorithm
// ─────────────────────────────────────────────────────────────────
function dijkstra(src, dst) {
  const dist = {}, prev = {};
  NODES.forEach(n => { dist[n.id] = Infinity; prev[n.id] = null; });
  dist[src] = 0;

  const unvisited = new Set(NODES.map(n => n.id));

  while (unvisited.size > 0) {
    let u = null;
    unvisited.forEach(id => { if (u === null || dist[id] < dist[u]) u = id; });
    if (!u || dist[u] === Infinity || u === dst) break;
    unvisited.delete(u);

    (adj[u] || []).forEach(function ([v, w]) {
      if (!unvisited.has(v)) return;
      const alt = dist[u] + w;
      if (alt < dist[v]) { dist[v] = alt; prev[v] = u; }
    });
  }

  const path = [];
  let cur = dst;
  while (cur) { path.unshift(cur); cur = prev[cur]; }

  return { path: path[0] === src ? path : [], dist: dist[dst] };
}

// ─────────────────────────────────────────────────────────────────
//  SVG Map Renderer
// ─────────────────────────────────────────────────────────────────
function drawMap(hlPath) {
  hlPath = hlPath || [];
  const svg = document.getElementById('campus-svg');
  svg.innerHTML = '';

  // Defs (arrowhead marker + drop shadow filter)
  const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  defs.innerHTML =
    '<marker id="arr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">' +
      '<path d="M0,1 L6,3.5 L0,6 Z" fill="#1565C0"/>' +
    '</marker>' +
    '<filter id="ns" x="-30%" y="-30%" width="160%" height="160%">' +
      '<feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#002B5C" flood-opacity="0.15"/>' +
    '</filter>';
  svg.appendChild(defs);

  // Background
  const bgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  bgRect.setAttribute('width', '1130');
  bgRect.setAttribute('height', '610');
  bgRect.setAttribute('fill', '#E8EEF5');
  svg.appendChild(bgRect);

  // Campus border
  const campus = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  campus.setAttribute('x', '4');   campus.setAttribute('y', '4');
  campus.setAttribute('width', '1122'); campus.setAttribute('height', '602');
  campus.setAttribute('rx', '8');  campus.setAttribute('fill', '#F0F4F8');
  campus.setAttribute('stroke', '#BCCDE0'); campus.setAttribute('stroke-width', '1.5');
  svg.appendChild(campus);

  // Zone polygons + labels
  ZONES.forEach(function (z) {
    const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    poly.setAttribute('points', z.pts);
    poly.setAttribute('fill', z.fill);
    poly.setAttribute('stroke', z.stroke);
    poly.setAttribute('stroke-width', '1');
    poly.setAttribute('stroke-dasharray', '4,3');
    svg.appendChild(poly);

    const zt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    zt.setAttribute('x', z.lx);       zt.setAttribute('y', z.ly);
    zt.setAttribute('font-size', '9'); zt.setAttribute('fill', '#90A0B0');
    zt.setAttribute('font-family', 'Plus Jakarta Sans, system-ui');
    zt.setAttribute('font-weight', '600');
    zt.textContent = z.label;
    svg.appendChild(zt);
  });

  // Build set of highlighted edges
  const pathEdges = new Set();
  for (let i = 0; i < hlPath.length - 1; i++) {
    pathEdges.add(hlPath[i] + '-' + hlPath[i + 1]);
    pathEdges.add(hlPath[i + 1] + '-' + hlPath[i]);
  }

  // Draw edges
  EDGES.forEach(function ([a, b, w]) {
    const na = nodeById(a), nb = nodeById(b);
    if (!na || !nb) return;

    const onPath = pathEdges.has(a + '-' + b);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', na.x); line.setAttribute('y1', na.y);
    line.setAttribute('x2', nb.x); line.setAttribute('y2', nb.y);

    if (onPath) {
      line.setAttribute('stroke', '#1565C0');
      line.setAttribute('stroke-width', '2.6');
      line.setAttribute('stroke-linecap', 'round');
      line.setAttribute('marker-end', 'url(#arr)');
    } else {
      line.setAttribute('stroke', '#BACDD8');
      line.setAttribute('stroke-width', '1.1');
      line.setAttribute('stroke-dasharray', '4,3');
    }
    svg.appendChild(line);

    // Weight label on highlighted edges
    if (onPath) {
      const mx = (na.x + nb.x) / 2, my = (na.y + nb.y) / 2;

      const pill = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pill.setAttribute('x', mx - 14); pill.setAttribute('y', my - 14);
      pill.setAttribute('width', '28'); pill.setAttribute('height', '12');
      pill.setAttribute('rx', '3');    pill.setAttribute('fill', 'white');
      pill.setAttribute('opacity', '0.92');
      svg.appendChild(pill);

      const wt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      wt.setAttribute('x', mx);              wt.setAttribute('y', my - 5);
      wt.setAttribute('text-anchor', 'middle'); wt.setAttribute('font-size', '7.5');
      wt.setAttribute('fill', '#1565C0');
      wt.setAttribute('font-family', 'Plus Jakarta Sans, system-ui');
      wt.setAttribute('font-weight', '600');
      wt.textContent = w + 'm';
      svg.appendChild(wt);
    }
  });

  // Draw nodes
  const src     = document.getElementById('src-sel').value;
  const dst     = document.getElementById('dst-sel').value;
  const pathSet = new Set(hlPath);

  NODES.forEach(function (n) {
    const onPath  = pathSet.has(n.id);
    const isStart = onPath && n.id === src;
    const isEnd   = onPath && n.id === dst;

    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    g.style.cursor = 'pointer';

    // Outer ring for path nodes
    if (onPath) {
      const ring = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      ring.setAttribute('cx', n.x); ring.setAttribute('cy', n.y); ring.setAttribute('r', '12');
      ring.setAttribute('fill', 'none');
      ring.setAttribute('stroke', isStart ? '#1B6B3A' : isEnd ? '#B71C1C' : '#1565C0');
      ring.setAttribute('stroke-width', '1.5'); ring.setAttribute('opacity', '0.22');
      g.appendChild(ring);
    }

    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttribute('cx', n.x); c.setAttribute('cy', n.y);
    c.setAttribute('r', onPath ? '7' : '5');
    c.setAttribute('fill', isStart ? '#1B6B3A' : isEnd ? '#B71C1C' : onPath ? '#1565C0' : '#8FAABF');
    c.setAttribute('stroke', 'white'); c.setAttribute('stroke-width', '1.8');
    if (onPath) c.setAttribute('filter', 'url(#ns)');
    g.appendChild(c);

    const lbl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    lbl.setAttribute('x', n.x + 10); lbl.setAttribute('y', n.y + 4);
    lbl.setAttribute('font-size', '8');
    lbl.setAttribute('font-family', 'Plus Jakarta Sans, system-ui');
    lbl.setAttribute('fill', onPath ? '#002B5C' : '#5A7A90');
    lbl.setAttribute('font-weight', onPath ? '600' : '400');
    lbl.textContent = n.label;
    g.appendChild(lbl);

    // Tooltip events
    g.addEventListener('mouseenter', function (e) {
      const tip = document.getElementById('tip');
      tip.textContent = n.label;
      tip.style.display = 'block';
      moveTip(e);
    });
    g.addEventListener('mousemove', moveTip);
    g.addEventListener('mouseleave', function () {
      document.getElementById('tip').style.display = 'none';
    });

    // Click to set as destination
    g.addEventListener('click', function () {
      const ss = document.getElementById('src-sel');
      const ds = document.getElementById('dst-sel');
      if (ss.value !== n.id && ds.value !== n.id) ds.value = n.id;
      runDijkstra();
    });

    svg.appendChild(g);
  });
}

// ─────────────────────────────────────────────────────────────────
//  Tooltip positioning
// ─────────────────────────────────────────────────────────────────
function moveTip(e) {
  const tip = document.getElementById('tip');
  const r   = document.getElementById('map-wrap').getBoundingClientRect();
  let l = e.clientX - r.left + 12;
  let t = e.clientY - r.top  - 38;
  if (l + 220 > r.width) l -= 230;
  if (t < 0) t = e.clientY - r.top + 12;
  tip.style.left = l + 'px';
  tip.style.top  = t + 'px';
}

// ─────────────────────────────────────────────────────────────────
//  Run Dijkstra & update UI
// ─────────────────────────────────────────────────────────────────
function runDijkstra() {
  const src = document.getElementById('src-sel').value;
  const dst = document.getElementById('dst-sel').value;
  if (!src || !dst || src === dst) return;

  const res = dijkstra(src, dst);
  currentPath = res.path;
  drawMap(res.path);

  if (!res.path.length) {
    document.getElementById('metric-block').style.display = 'none';
    document.getElementById('route-wrap').innerHTML =
      '<div class="empty" style="color:#B71C1C">Jalur tidak ditemukan.</div>';
    return;
  }

  // Metric cards
  document.getElementById('metric-block').style.display = 'block';
  document.getElementById('metric-cards').innerHTML =
    '<div class="mc"><div class="mc-l">Total Jarak</div><div class="mc-v">' + res.dist +
    '<span class="mc-u"> m</span></div></div>' +
    '<div class="mc"><div class="mc-l">Jumlah Node</div><div class="mc-v">' + res.path.length +
    '<span class="mc-u"> titik</span></div></div>';

  // Route steps
  let cum = 0;
  document.getElementById('route-wrap').innerHTML = res.path.map(function (id, i) {
    const n   = nodeById(id);
    const cls = i === 0 ? 's' : i === res.path.length - 1 ? 'e' : 'm';
    let di = '';
    if (i < res.path.length - 1) {
      const nxt = res.path[i + 1];
      const ed  = EDGES.find(e => (e[0] === id && e[1] === nxt) || (e[1] === id && e[0] === nxt));
      if (ed) {
        cum += ed[2];
        di = '<div class="sd">&#8595; ' + ed[2] + 'm &nbsp;&middot;&nbsp; kumulatif ' + cum + 'm</div>';
      }
    }
    return '<div class="step" style="animation-delay:' + i * 0.05 + 's">' +
      '<div class="dot ' + cls + '"></div>' +
      '<div><div class="sn">' + (n ? n.label : id) + '</div>' + di + '</div>' +
      '</div>';
  }).join('');
}

// ─────────────────────────────────────────────────────────────────
//  Reset
// ─────────────────────────────────────────────────────────────────
function resetAll() {
  currentPath = [];
  document.getElementById('metric-block').style.display = 'none';
  document.getElementById('route-wrap').innerHTML =
    '<div class="empty">Pilih titik awal &amp; tujuan,<br>lalu klik <strong>Cari Jalur</strong></div>';
  drawMap([]);
}

// ─────────────────────────────────────────────────────────────────
//  Init: populate dropdowns
// ─────────────────────────────────────────────────────────────────
NODES.forEach(function (n) {
  ['src-sel', 'dst-sel'].forEach(function (id) {
    const o = document.createElement('option');
    o.value = n.id;
    o.textContent = n.label;
    document.getElementById(id).appendChild(o);
  });
});

// Default: Masjid → Perpustakaan
document.getElementById('src-sel').value = 'MSJ';
document.getElementById('dst-sel').value = 'PERP';

// Logo upload handler
document.getElementById('logo-input').addEventListener('change', function () {
  if (!this.files[0]) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    document.getElementById('logo-img').src = e.target.result;
    document.getElementById('logo-img').style.display = 'block';
    document.getElementById('logo-hint').style.display = 'none';
  };
  reader.readAsDataURL(this.files[0]);
});

// Initial render
drawMap([]);
