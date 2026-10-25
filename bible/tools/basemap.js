// Builds content/atlas/basemap.json from Natural Earth (public domain) GeoJSON: node tools/basemap.js <dir with ne_10m_*.geojson>
// Land, ancient-era lakes and the rivers the Bible names, clipped to the Bible world and simplified.
const fs = require('fs'), path = require('path');
const dir = process.argv[2], out = path.join(__dirname, '../content/atlas/basemap.json');
const BOX = [8, 12, 80, 46];                      // lon/lat of places the site maps: Rome to India, Cush to the Black Sea
const CLIP = [-4, 2, 92, 54];                     // outlines reach well past BOX, so a padded map never shows a cut edge
const TOL = 0.012;                                // degrees; keeps the coast of Israel readable when zoomed in
const RIVERS = { Nile: 'Nile', 'Rosetta Branch': 'Nile', 'Damietta Branch': 'Nile', Tigris: 'Tigris', Dicle: 'Tigris', Euphrates: 'Euphrates',
  Firat: 'Euphrates', 'Al Furat': 'Euphrates', 'Shatt al Arab': 'Shatt al-Arab', Jordan: 'Jordan', Karkheh: 'Karkheh', Tevere: 'Tiber',
  'Kiz?lirmak': 'Halys', 'Byk Menderes': 'Maeander' };
const LAKES = new Set(['Sea of Galilee', 'Dead Sea', 'Lake Urmia', 'Lake Van', 'Lake Tuz', 'Great Bitter Lake']);
const read = f => JSON.parse(fs.readFileSync(path.join(dir, f + '.geojson')));
const r3 = n => Math.round(n * 1000) / 1000;

function clipRing(ring) {                          // Sutherland–Hodgman against CLIP
  const edges = [[0, CLIP[0], 1], [0, CLIP[2], -1], [1, CLIP[1], 1], [1, CLIP[3], -1]];
  for (const [k, v, s] of edges) {
    const res = [], inside = p => (p[k] - v) * s >= 0;
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      const cut = () => { const t = (v - a[k]) / (b[k] - a[k]); return [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])]; };
      if (inside(a)) { res.push(a); if (!inside(b)) res.push(cut()); } else if (inside(b)) res.push(cut());
    }
    ring = res; if (!ring.length) break;
  }
  return ring;
}
function simplify(pts) {                           // Douglas–Peucker
  if (pts.length < 3) return pts;
  const keep = new Uint8Array(pts.length); keep[0] = keep[pts.length - 1] = 1;
  const st = [[0, pts.length - 1]];
  while (st.length) {
    const [i, j] = st.pop(); let m = -1, md = 0;
    const [x1, y1] = pts[i], [x2, y2] = pts[j], dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
    for (let k = i + 1; k < j; k++) {             // distance to the chord, or to its point when a closed ring makes it zero length
      const d = L ? Math.abs(dy * pts[k][0] - dx * pts[k][1] + x2 * y1 - y2 * x1) / L : Math.hypot(pts[k][0] - x1, pts[k][1] - y1);
      if (d > md) { md = d; m = k; } }
    if (md > TOL) { keep[m] = 1; st.push([i, m], [m, j]); }
  }
  return pts.filter((_, k) => keep[k]);
}
const polys = g => g.type === 'Polygon' ? [g.coordinates] : g.type === 'MultiPolygon' ? g.coordinates : [];
const lines = g => g.type === 'LineString' ? [g.coordinates] : g.type === 'MultiLineString' ? g.coordinates : [];
const inBox = p => p[0] >= CLIP[0] && p[0] <= CLIP[2] && p[1] >= CLIP[1] && p[1] <= CLIP[3];
const ring = r => { const c = simplify(clipRing(r)); return c.length >= 4 ? c.map(p => [r3(p[0]), r3(p[1])]) : null; };

const land = read('ne_10m_land').features.flatMap(f => polys(f.geometry)).map(p => ring(p[0])).filter(Boolean);
const lakes = read('ne_10m_lakes').features.filter(f => LAKES.has(f.properties.name))
  .flatMap(f => polys(f.geometry).map(p => ({ name: f.properties.name, ring: ring(p[0]) }))).filter(l => l.ring);
const rivers = read('ne_10m_rivers_lake_centerlines').features.filter(f => RIVERS[f.properties.name])
  .flatMap(f => lines(f.geometry).map(l => ({ name: RIVERS[f.properties.name], line: simplify(l.filter(inBox)).map(p => [r3(p[0]), r3(p[1])]) })))
  .filter(r => r.line.length > 1);
const doc = { source: 'Natural Earth 1:10m (public domain), naturalearthdata.com', box: BOX, land, lakes, rivers };
fs.writeFileSync(out, JSON.stringify(doc));
console.log(`land ${land.length}, lakes ${lakes.length}, rivers ${rivers.length}; ${(fs.statSync(out).size / 1024).toFixed(0)} KB`);
