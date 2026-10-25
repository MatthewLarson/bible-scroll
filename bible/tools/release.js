/* Write the release notes for a publish: what a reader will find new or changed since the last release.
     node tools/build.js --publish && node tools/release.js
   Compares the public build (public/data) with content/releases/_snapshot.json (what the last release contained),
   writes content/releases/<date>.json with one line per change, and updates the snapshot. Only what readers notice
   is listed (books, translation, notes, manuscript differences, topics, articles); the build itself never is.
   The entry's "title" and "summary" are then written by hand (see .claude/commands/publish.md), and a rebuild puts
   it on the Releases page. Nothing to report: no file is written. */
const fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = path.join(__dirname, '..'), P = (...a) => path.join(ROOT, ...a);
const DATA = P('public/data'), DIR = P('content/releases'), SNAP = path.join(DIR, '_snapshot.json');
const json = f => JSON.parse(fs.readFileSync(f, 'utf8'));
if(!fs.existsSync(path.join(DATA, 'catalog.json'))) { console.log('no public build: run node tools/build.js --publish first'); process.exit(1); }
const hash = o => crypto.createHash('sha1').update(JSON.stringify(o)).digest('hex').slice(0, 10);
const byChapter = (keys, val) => { const c = {}; keys.forEach(k => { const n = +k.split(':')[0]; (c[n] = c[n] || []).push(val(k)); }); return c; };
/* a chapter's verses and notes are each hashed, so a release can name the chapters that changed */

/* what the public build holds now, in the snapshot's shape */
const CAT = json(path.join(DATA, 'catalog.json')), now = {books:{}, topics:{}, articles:{}};
for(const b of CAT.books.filter(b => b.status !== 'text')){ const x = json(path.join(DATA, 'books', b.id + '.json'));
  const plain = byChapter(Object.keys(x.plain.v), k => [k, x.plain.v[k]]), notes = {};
  x.notes.forEach(n => { const c = +n.v.split(':')[0]; (notes[c] = notes[c] || []).push([n.v, n.a, n.t, n.b]); });
  now.books[b.id] = {name:b.name, chapters:b.vc.length, nn:x.notes.length, nv:x.variants.length,
    plain:Object.fromEntries(Object.entries(plain).map(([c, v]) => [c, hash(v)])), notes:Object.fromEntries(Object.entries(notes).map(([c, v]) => [c, hash(v)]))}; }
for(const [id, t] of Object.entries(json(path.join(DATA, 'topics/index.json')))) now.topics[id] = t[0];
const AI = path.join(DATA, 'articles/index.json');
if(fs.existsSync(AI)) for(const a of json(AI)) if(!a.draft) now.articles[a.id] = a.title;

/* "3, 5–7 and 12" */
const runs = ns => { const out = []; ns.map(Number).sort((a, b) => a - b).forEach(n => { const r = out[out.length - 1]; if(r && n === r[1] + 1) r[1] = n; else out.push([n, n]); });
  const s = out.map(([a, b]) => a === b ? `${a}` : `${a}–${b}`); return s.length > 1 ? s.slice(0, -1).join(', ') + ' and ' + s[s.length - 1] : s[0]; };
const plural = (n, w) => `${n} ${w}${n === 1 ? '' : 's'}`;
const names = xs => xs.length > 1 ? xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1] : xs[0];

const items = [], old = fs.existsSync(SNAP) ? json(SNAP) : null;
if(!old){
  /* the first release: everything is new, listed by the library's groups */
  for(const g of CAT.groups){ const bs = g.books.map(([id]) => id).filter(id => now.books[id]);
    if(bs.length) items.push({kind:'new', text:`${g.name.replace(/:.*$/, '')}: ${names(bs.map(id => now.books[id].name))}.`}); }
  items.push({kind:'topic', text:`${Object.keys(now.topics).length} topic pages, each gathering one subject from across the collection.`});
} else {
  for(const [id, b] of Object.entries(now.books)){ const o = old.books[id], at = `#/${id}`;
    if(!o){ items.push({kind:'new', hash:at, text:`Added ${b.name}: a Plain English translation of ${b.chapters === 1 ? 'the whole book' : `all ${b.chapters} chapters`}, with ${plural(b.nn, 'study note')}${b.nv ? ` and ${plural(b.nv, 'manuscript difference')} explained` : ''}.`}); continue; }
    const pc = Object.keys(b.plain).filter(c => b.plain[c] !== o.plain[c]);
    const nc = [...new Set([...Object.keys(b.notes), ...Object.keys(o.notes)])].filter(c => b.notes[c] !== o.notes[c]);
    const ch = b.chapters === 1 ? '' : ' ';
    if(pc.length) items.push({kind:'revised', hash:at, text:`Revised the Plain English translation of ${b.name}${ch ? ch + runs(pc) : ''}.`});
    if(nc.length) items.push({kind:'revised', hash:at, text:`${b.nn > o.nn ? `Added ${plural(b.nn - o.nn, 'study note')} and updated others` : 'Updated the study notes'} in ${b.name}${ch ? ch + runs(nc) : ''}.`});
    if(b.nv > o.nv) items.push({kind:'revised', hash:at, text:`${plural(b.nv - o.nv, 'more manuscript difference')} explained in ${b.name}.`});
  }
  for(const [id, o] of Object.entries(old.books)) if(!now.books[id]) items.push({kind:'removed', text:`${o.name} is offline for revision.`});
  const nt = Object.keys(now.topics).filter(id => !old.topics[id]);
  if(nt.length > 6) items.push({kind:'topic', text:`${nt.length} new topic pages, including ${names(nt.slice(0, 5).map(id => now.topics[id]))}.`});
  else nt.forEach(id => items.push({kind:'topic', hash:`#/topic/${id}`, text:`New topic page: ${now.topics[id]}.`}));
  Object.keys(now.articles).filter(id => !old.articles[id]).forEach(id => items.push({kind:'article', hash:`#/articles/${id}`, text:`New article: “${now.articles[id]}”.`}));
}
if(!items.length) { console.log('nothing new for readers since the last release; no notes written'); process.exit(0); }

const date = new Date().toISOString().slice(0, 10); let id = date, n = 1;
while(fs.existsSync(path.join(DIR, id + '.json'))) id = `${date}-${++n}`;
const entry = {date, title:old ? '' : 'Codex Collection opens', summary:'', items};
fs.mkdirSync(DIR, {recursive:true});
fs.writeFileSync(path.join(DIR, id + '.json'), JSON.stringify(entry, null, 1) + '\n');
fs.writeFileSync(SNAP, JSON.stringify(Object.assign({_about:'What the last release contained; written by tools/release.js. Do not edit.'}, now)) + '\n');
console.log(`wrote content/releases/${id}.json (${plural(items.length, 'item')}). Give it a title and a short summary for readers, then rebuild.`);
