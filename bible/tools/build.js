/* Build the site from content/ (authored) and texts/ (generated), validating as it goes.
     node tools/build.js              build everything into site/
     node tools/build.js --check Rut  validate one book only, write nothing
     node tools/build.js --check Gen/12-25  validate one part of a book split among writers
     node tools/build.js --publish    build only reviewed books (what goes on the public site)
   A large book can be split into parts: content/books/<id>/parts/<first>-<last>/ (chapter numbers, zero-padded)
   each hold plain.txt, notes/variants/glosses/chapters/topics/sources.json for those chapters; book.json stays in
   the book folder. The build joins the parts in order, so the site never knows the difference.
   Exit code 1 if any error. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const P = (...a) => path.join(ROOT, ...a);
const read = f => fs.readFileSync(f, 'utf8');
// Agents write in parallel: a file read right after another process writes it can come back
// half-written, so a parse failure is retried after a pause before it counts as an error.
const json = (f, tries = 3) => {
  for (let i = 1; ; i++) {
    try { return JSON.parse(read(f)); }
    catch(e){
      if (i >= tries) { err(path.relative(ROOT, f), 'invalid JSON: ' + e.message); return null; }
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 2000 * i);
    }
  }
};
const exists = f => fs.existsSync(f);
const args = process.argv.slice(2);
if(args[0] === '--check' && !args[1]){ console.log('usage: node tools/build.js --check <book id>[/<part>]   (a full build checks everything)'); process.exit(1); }
const CHECK = args[0] === '--check', [ONLY, PART] = CHECK ? args[1].split('/') : [null, null];

const CAT = json(P('texts/catalog.json'));
const R = require('./refs.js')(CAT.books);
const BOOK = {}; CAT.books.forEach(b => BOOK[b.id] = b);
/* "Where Christians differ": a question, then each tradition's answer in its own words, so conflicts sit side by side */
const TRADITIONS = ['Catholic','Orthodox','Oriental Orthodox','Ethiopian Orthodox','Lutheran','Reformed','Anglican','Methodist','Baptist','Pentecostal','Anabaptist','Restorationist','Adventist','Quaker','Evangelical','Dispensationalist','Latter-day Saints',"Jehovah's Witnesses",'Oneness Pentecostal','Unitarian','Messianic Jewish'];
function tradCheck(w, list, srcCheck){ (list || []).forEach((x, j) => { const ws = `${w} traditions[${j}]`;
  if(!x.q) err(ws, 'needs q, the question the traditions answer differently');
  if(!Array.isArray(x.views) || x.views.length < 2) err(ws, 'needs at least two views [tradition, answer]');
  (x.views || []).forEach((p, k) => { if(!Array.isArray(p) || p.length < 2 || p.length > 3) err(ws, `views[${k}] must be [tradition, answer] or [tradition, answer, [source keys]]`);
    else { if(!TRADITIONS.includes(p[0])) err(ws, `views[${k}]: "${p[0]}" is not one of: ${TRADITIONS.join(', ')}`); if(p[2]) srcCheck(ws, p[2]); } });
  if(!x.top) warn(ws, 'needs top, the topic page this question belongs to, so the same question asked in other books links together');
  else if(!TOPICS[x.top]) err(ws, `top "${x.top}" is not a topic`);
  srcCheck(ws, x.s); }); }
const WORKS_ALL = exists(P('content/works.json')) ? json(P('content/works.json')) : {}; delete WORKS_ALL._about;
/* content/proposals/<lane>/: shared-file additions a writing lane proposes until the lead merges them (tools/lanes.md) */
/* a publish build leaves them out: only what the lead has merged is on the site */
const LANES = !process.argv.includes('--publish') && exists(P('content/proposals')) ? fs.readdirSync(P('content/proposals')).filter(l => fs.statSync(P('content/proposals', l)).isDirectory()) : [];
LANES.forEach(l => { const f = P('content/proposals', l, 'works.json'); if(!exists(f)) return; const w = json(f) || {}; delete w._about;
  for(const id in w) if(WORKS_ALL[id] && JSON.stringify(WORKS_ALL[id]) !== JSON.stringify(w[id])) err(`proposals/${l}/works.json ${id}`, 'already defined differently; propose a change in topics.md or build.md instead'); else WORKS_ALL[id] = w[id]; });
const NOTE_TYPES = ['word','history','echo','symbol','views','israel','myth','spec','canon'];
const KINDS = ['mis','var','com','deb','nu'];
const TOPIC_KINDS = ['Ideas','People','Places','Symbols','Words','Events','Studies'];

let errors = 0, warnings = 0;
let errBuf = null;   // while a book loads in a full build, its errors are held back (see run)
const err = (where, msg) => { errors++; const line = `ERROR ${where}: ${msg}`; if(errBuf) errBuf.push(line); else console.log(line); };
const warn = (where, msg) => { warnings++; if(CHECK || process.env.VERBOSE) console.log(`warn  ${where}: ${msg}`); };
const strip = s => String(s == null ? '' : s).replace(/<[^>]+>/g, '');

/* ---------- shared registries ---------- */
const SOURCES = exists(P('content/sources.json')) ? json(P('content/sources.json')) : {};
/* the folders that hold a book's content: the book folder, then its parts in chapter order */
const partsOf = id => { const d = P('content/books', id, 'parts'); return exists(d) ? fs.readdirSync(d).filter(n => /^\d+-\d+$/.test(n)).sort() : []; };
const dirsOf = (id, part) => part ? [P('content/books', id, 'parts', part)] : [P('content/books', id), ...partsOf(id).map(n => P('content/books', id, 'parts', n))];
const bookDirs = fs.readdirSync(P('content/books')).filter(d => BOOK[d] && dirsOf(d).some(x => exists(path.join(x, 'plain.txt'))));
/* a key means one work everywhere: a book may add keys, but not redefine one that another file already defines */
const SRC_FROM = {};
bookDirs.forEach(id => dirsOf(id).forEach(d => { const f = path.join(d, 'sources.json'); if(!exists(f)) return;
  const where = path.relative(ROOT, f);
  Object.entries(json(f) || {}).forEach(([k, v]) => {
    if(SOURCES[k] != null && SOURCES[k] !== v && id !== 'Rev') err(where, `source key "${k}" is already defined differently in ${SRC_FROM[k] || 'content/sources.json'}; reuse it or pick a new key`);
    else if(SOURCES[k] == null) { SOURCES[k] = v; SRC_FROM[k] = where; } });
}));
const TOPICS = {};
const TOPIC_FILES = [['topics', P('content/topics')], ...LANES.map(l => [`proposals/${l}/topics`, P('content/proposals', l, 'topics')]).filter(d => exists(d[1]))]
  .flatMap(([w, d]) => fs.readdirSync(d).filter(f => f.endsWith('.json')).map(f => [`${w}/${f}`, path.join(d, f), f.slice(0, -5)]));
const TOPIC_IDS = new Set(TOPIC_FILES.map(x => x[2]));
TOPIC_FILES.forEach(([f, file, id]) => {
  if(TOPICS[id]) return err(f, `topic "${id}" already exists in ${TOPICS[id]._from}`);
  const t = json(file); if(!t) return;
  if(t.id !== id) err(f, `id "${t.id}" does not match the file name`);
  if(!TOPIC_KINDS.includes(t.kind)) err(f, `unknown kind "${t.kind}"`);
  (t.related||[]).forEach(r => { if(!TOPIC_IDS.has(r)) err(f, `related topic "${r}" does not exist`); });
  TOPICS[id] = Object.assign({sections:[], common:[], uncommon:[], claude:[], links:[], sources:[], aka:[]}, t,
    {sections:(t.sections||[]).map(s => Object.assign({book:null}, s)), claude:t.claude ? [Object.assign({book:null}, t.claude)] : [],
     common:(t.common||[]).map(x => ({t:x, book:null})), uncommon:(t.uncommon||[]).map(x => ({t:x, book:null})), notes:[], chapters:[], trad:[], _from:f});
});

/* one page per subject: a name (title or alias) may lead to only one topic */
{ const owner = {};
  for(const id in TOPICS) [TOPICS[id].title, ...(TOPICS[id].aka||[])].forEach(n => { const k = strip(n).toLowerCase().replace(/^the /, '').replace(/[^\p{L}\d ]/gu, '').trim();
    if(owner[k] && owner[k] !== id) err(TOPICS[id]._from, `the name "${n}" also leads to topic "${owner[k]}"; give each name one page (use "related" to link them)`); else owner[k] = id; }); }

/* ---------- references ---------- */
const refCheck = (where, text, ctx, list) => {
  const refs = R.findRefs(strip(text), ctx, list);
  /* an item naming a work outside the 66 books ("Tobit 4:15", "1 Enoch 1:9", "Avot 5:17") is a citation, shown as text */
  const ours = s => /^\d+[:\u2013-]|^\d+$/.test(s) || Object.keys(R.OF).some(n => s.startsWith(n + ' ') && /^\d/.test(s.slice(n.length + 1)));   // not "Psalms of Solomon 17:21"
  if(list){ const items = strip(text).split(/;/).map(s => s.trim()).filter(Boolean).filter(ours);
    if(refs.length < items.length) warn(where, `reference list has ${items.length} items but only ${refs.length} parse: "${strip(text)}"`); }
  return refs;
};

/* ---------- one book ---------- */
function parsePlain(id, txt, lo = 1, hi = BOOK[id].vc.length){
  const b = BOOK[id], where = `${id}/plain.txt`, sec = [], v = {}; let cur = null, last = [0, -1];
  txt.split('\n').forEach((line, i) => {
    line = line.trimEnd(); if(!line) return;
    if(line.startsWith('## ')){ cur = {h:line.slice(3).trim(), c:null, vs:[]}; sec.push(cur); return; }
    const m = line.match(/^(\d+):(\d+) (.+)$/);
    if(!m){ err(where, `line ${i+1} is not "## heading" or "c:v text": ${line.slice(0,60)}`); return; }
    const c = +m[1], vn = +m[2], key = `${c}:${vn}`;
    if(!cur){ cur = {h:'', c:null, vs:[]}; sec.push(cur); }
    if(c < last[0] || (c === last[0] && vn <= last[1])) err(where, `verse ${key} is out of order`);
    if(v[key]) err(where, `verse ${key} appears twice`);
    if(c > b.vc.length || vn > b.vc[c-1]) err(where, `verse ${key} does not exist in ${b.name}`);
    else if(c < lo || c > hi) err(where, `verse ${key} is outside this part (chapters ${lo}–${hi})`);
    if(/[“”‘’]/.test(m[3])) err(where, `${key} uses curly quotes; use straight quotes`);
    if(cur.c === null) cur.c = c;
    else if(cur.c !== c){ cur = {h:'', c, vs:[]}; sec.push(cur); }   // a section crossing a chapter continues untitled
    v[key] = m[3]; cur.vs.push(key); last = [c, vn];
  });
  b.vc.forEach((n, ci) => { if(ci+1 >= lo && ci+1 <= hi) for(let x = 1; x <= n; x++) if(!v[`${ci+1}:${x}`]) err(where, `missing verse ${ci+1}:${x}`); });
  return {sec, v};
}

function spanCheck(id, plain, items, label){
  items.forEach((n, i) => {
    const where = `${id}/${label}[${i}] ${n.v}`;
    const t = plain.v[n.v];
    if(!t){ err(where, `verse not found`); n._bad = true; return; }
    if(typeof n.a !== 'string' || !n.a){ err(where, `missing anchor "a"`); n._bad = true; return; }
    if(!t.includes(n.a)){ err(where, `anchor not in verse: "${n.a}"  verse: "${t}"`); n._bad = true; return; }
    if(label === 'glosses' && n.a.includes(' / ')) err(where, `a gloss cannot cross a poetry line break`);   // notes and variants may: the app draws them once per line
    n._s = t.indexOf(n.a); n._e = n._s + n.a.length;
  });
}
function overlapCheck(id, all){
  const byv = {}; all.filter(x => !x._bad).forEach(x => (byv[x.v] = byv[x.v] || []).push(x));
  for(const v in byv){ const L = byv[v];
    for(let i = 0; i < L.length; i++) for(let j = i+1; j < L.length; j++){
      const a = L[i], b = L[j];
      if(a._s < b._e && b._s < a._e && !((a._s <= b._s && b._e <= a._e) || (b._s <= a._s && a._e <= b._e)))
        err(`${id} ${v}`, `"${a.a}" (${a._k}) partly overlaps "${b.a}" (${b._k})`);
      if(a._k === b._k && a._k !== 'note' && a._s === b._s && a._e === b._e) err(`${id} ${v}`, `two ${a._k}s on the same phrase "${a.a}"`);
    } }
}
const opt = (f, d) => exists(f) ? (json(f) || d) : d;

function loadBook(id, part){
  const dir = P('content/books', id), b = BOOK[id], dirs = dirsOf(id, part);
  const [lo, hi] = part ? part.split('-').map(Number) : [1, b.vc.length];
  const all = name => dirs.flatMap(d => opt(path.join(d, name), []));   // a list file, joined across the parts
  const out = {id, name:b.name, t:b.t};
  const plain = parsePlain(id, dirs.map(d => path.join(d, 'plain.txt')).filter(exists).map(read).join('\n'), lo, hi);
  const book = opt(path.join(dir, 'book.json'), null);
  if(!book && !part) err(id, 'book.json is missing');
  const lenses = new Set(((book && book.lenses) || []).map(l => l.k));
  const srcCheck = (where, s) => (s || []).forEach(k => { if(!SOURCES[k]) err(where, `unknown source key "${k}"`); });
  const topCheck = (where, t) => { if(t && !TOPICS[t]) err(where, `unknown topic "${t}" (create content/topics/${t}.json)`); };

  const notes = all('notes.json');
  notes.forEach((n, i) => { const w = `${id}/notes[${i}] ${n.v}`; n._k = 'note';
    if(!NOTE_TYPES.includes(n.type)) err(w, `unknown type "${n.type}"`);
    if(!n.t || !n.b) err(w, 'needs t (title) and b (body)');
    if(!n.p) warn(w, 'no preview p'); else if(n.p.length > 140) warn(w, `preview is ${n.p.length} characters (aim for under 120)`);
    const words = strip(n.b).split(/\s+/).filter(Boolean).length; if(words > 220) warn(w, `body is ${words} words (aim for 40–160)`);
    if(n.kind && !KINDS.includes(n.kind)) err(w, `unknown kind "${n.kind}"`);
    topCheck(w, n.top); srcCheck(w, n.s);
    if(n.r) refCheck(w + ' r', n.r, id, true);
  });
  const variants = all('variants.json');
  variants.forEach((x, i) => { const w = `${id}/variants[${i}] ${x.v}`; x._k = 'variant';
    if(!Array.isArray(x.readings) || x.readings.length < 2) { err(w, 'needs two or more readings'); return; }
    const f = x.follow || 0;
    if(!x.readings[f]) err(w, `follow ${f} is not a reading`);
    else if(x.readings[f].plain !== x.a) err(w, `readings[${f}].plain must equal the anchor "${x.a}"`);
    x.readings.forEach((r, j) => { if(!r.w) err(w, `reading ${j} needs w (witness)`); if(typeof r.plain !== 'string') err(w, `reading ${j} needs plain`); });
    if(!x.why) err(w, 'needs why (the reason for the reading followed)');
    srcCheck(w, x.s);
  });
  const glosses = all('glosses.json');
  glosses.forEach((g, i) => { g._k = 'gloss'; if(!g.m) err(`${id}/glosses[${i}]`, 'needs m'); });
  spanCheck(id, plain, notes, 'notes'); spanCheck(id, plain, variants, 'variants'); spanCheck(id, plain, glosses, 'glosses');
  overlapCheck(id, [...notes, ...variants, ...glosses]);

  const chapters = all('chapters.json');
  if(!chapters.length) err(id, `chapters.json is missing: every chapter needs its page`);
  else if(chapters.length !== hi - lo + 1) err(id, `chapters.json has ${chapters.length} chapters, there should be ${hi - lo + 1} (${lo}–${hi})`);
  chapters.forEach((c, i) => { const w = `${id}/chapters ${c.n}`;
    if(c.n !== lo + i) err(w, `chapter numbers must run ${lo}..${hi}`);
    if(!c.title || !(c.sum||[]).length) err(w, 'needs title and sum');
    if(c.key && !plain.v[c.key]) err(w, `key verse ${c.key} not found`);
    (c.topics||[]).forEach(t => topCheck(w, t));
    Object.keys(c.views||{}).forEach(k => { if(!lenses.has(k)) err(w, `view "${k}" is not a lens in book.json`); });
    if(c.echoes) refCheck(w + ' echoes', c.echoes, id, true);
    (c.settings||[]).forEach((x, j) => { const ws = `${w} settings[${j}]`;
      ['v','what','to','why'].forEach(k => { if(!x[k]) err(ws, `needs ${k}`); });
      const r = x.v ? R.findRefs(String(x.v), id, true) : [];
      if(x.v && (r.length !== 1 || r[0].book !== id || r[0].c !== c.n)) err(ws, `v "${x.v}" must be one passage of this book that starts in chapter ${c.n}`);
      (x.views||[]).forEach((p, k) => { if(!Array.isArray(p) || p.length !== 2) err(ws, `views[${k}] must be [label, text]`); });
      srcCheck(ws, x.s); });
    tradCheck(w, c.traditions, srcCheck);
  });
  if(book && BOOK[id].t === 'X'){ const cn = book.canon || {}, cw = `${id}/book.json canon`;
    /* a book outside the 66 must say who accepts it, where it came from, why most set it aside, where the Bible refers to it,
       how reliable it is (Claude's analysis, labeled as such on the page) and how to read it */
    const W0 = WORKS_ALL[cn.work];
    if(!W0 || W0.book !== id) err(cw, `work must be the works.json id whose "book" is "${id}"`); else if(cn.tier !== W0.tier) err(cw, `tier "${cn.tier}" differs from works.json "${W0.tier}"`);
    if(!cn.summary) err(cw, 'needs summary (shown on every page)');
    if(!Array.isArray(cn.accepted_by) || cn.accepted_by.length < 2) err(cw, 'accepted_by needs rows [who, view, [keys]?] for at least two churches or traditions');
    else cn.accepted_by.forEach((r, k) => { if(!Array.isArray(r) || r.length < 2) err(cw, `accepted_by[${k}] must be [who, view, [keys]?]`); else srcCheck(cw, r[2]); });
    const hb = k => { if(!Array.isArray(cn[k]) || !cn[k].length) err(cw, `needs ${k}: [{h, b}]`); else cn[k].forEach((x, j) => { if(!x.h || !x.b) err(cw, `${k}[${j}] needs h and b`); if(x.refs) refCheck(`${cw} ${k}[${j}]`, x.refs, id, true); }); };
    ['provenance','rejected_why','how_to_read'].forEach(hb);
    /* book.json is shared by every part, so its verse refs are checked against the whole book's texts, not only the part being checked */
    const bookVerses = new Set([...Object.keys(plain.v), ...Object.values(json(P('texts/en', id + '.json')) || {}).flatMap(o => o && typeof o === 'object' ? Object.keys(o) : [])]);
    if(!Array.isArray(cn.cited_in)) err(cw, 'needs cited_in: [{ref, at?, kind, b}] (an empty list if the Bible never refers to it)');
    else cn.cited_in.forEach((x, j) => { const cj = `${cw} cited_in[${j}]`;
      if(!['quotation','allusion','shared tradition','disputed'].includes(x.kind)) err(cj, 'kind must be quotation, allusion, shared tradition or disputed');
      if(!x.ref || !R.findRefs(String(x.ref), null, true).length) err(cj, 'ref must be a passage of the 66 books');
      if(x.at && !bookVerses.has(x.at)) err(cj, `at ${x.at} is not a verse of ${id}`); if(!x.b) err(cj, 'needs b'); });
    const rl = cn.reliability || {}; if(!rl.verdict) err(cw, 'needs reliability.verdict'); (rl.sections || []).forEach((x, j) => { if(!x.h || !x.b) err(cw, `reliability.sections[${j}] needs h and b`); });
    srcCheck(cw, cn.s); }
  if(book){ tradCheck(id + "/book.json", book.traditions, srcCheck); (book.topics||[]).forEach(t => topCheck(id + '/book', t)); srcCheck(id + '/book', book.sources);
    ['title','lead','facts'].forEach(k => { if(!book[k]) err(id + '/book.json', `needs ${k}`); });
    const au = book.audience;
    if(!au || !au.to || !au.why) err(id + '/book.json', 'needs audience {to, why}: who the book was first written for, and why');
    else { (au.views||[]).forEach((p, k) => { if(!Array.isArray(p) || p.length !== 2) err(id + '/book.json', `audience views[${k}] must be [label, text]`); }); srcCheck(id + '/book audience', au.s); } }

  const contrib = all('topics.json');
  contrib.forEach((t, i) => { const w = `${id}/topics[${i}] ${t.id}`;
    topCheck(w, t.id);
    ['common','uncommon'].forEach(k => { if(t[k] != null && !Array.isArray(t[k])) err(w, `${k} must be a list of sentences`); });
    if(t.claude != null && (typeof t.claude !== 'object' || Array.isArray(t.claude) || !t.claude.title)) err(w, 'claude must be one {title, body, refs} object');
    (t.sections||[]).forEach((s, j) => { if(!s.refs) err(w, `section ${j} "${s.h}" needs refs`); else refCheck(`${w} section ${j}`, s.refs, id, true); });
    srcCheck(w, t.sources);
  });
  Object.assign(out, {book, plain, notes, variants, glosses, chapters, contrib});
  return out;
}

/* ---------- run ---------- */
const ids = CHECK ? [ONLY] : bookDirs;
if(CHECK && !bookDirs.includes(ONLY)) { console.log(`no content/books/${ONLY}/plain.txt`); process.exit(1); }
if(PART && !partsOf(ONLY).includes(PART)) { console.log(`no content/books/${ONLY}/parts/${PART}/`); process.exit(1); }
/* a book with errors is left out of the site (it shows as texts only) so a book being written never breaks the build */
const B = {}, SKIPPED = [];
/* reviewed: every review (the book's, or each part's) has its fixes written up */
const fixed = f => { if(!exists(f)) return false; const m = read(f).split(/^## Fixes applied\s*$/m); return m.length > 1 && m[1].trim().length > 0; };
const reviewed = id => partsOf(id).length ? partsOf(id).every(n => fixed(P('content/books', id, 'parts', n, 'review.md'))) : fixed(P('content/books', id, 'review.md'));
/* in a full build a book with errors is summarized in one line, since it is usually a book still being written;
   `--check <id>` lists them all */
ids.forEach(id => { const e0 = errors; errBuf = CHECK ? null : [];
  const x = loadBook(id, CHECK ? PART : null); const buf = errBuf; errBuf = null;
  if(errors === e0 || CHECK) { B[id] = x; return; }
  SKIPPED.push(id); errors = e0;
  console.log(`skip  ${id}: ${buf.length} errors, first: ${buf[0].replace(/^ERROR /, '')}  (run: node tools/build.js --check ${id})`);
});
/* --publish builds the public site: a book appears only once its hostile reviews are answered (Revelation was
   reviewed in its own project before import) */
const PUBLISH = args.includes('--publish'), DRAFTS = [];
if(PUBLISH) for(const id in B) if(id !== 'Rev' && !reviewed(id)) { delete B[id]; DRAFTS.push(id); }
/* quotations of a book this site has translated must use the site's own Plain wording: a quoted sentence
   followed by its reference, "..." (Exodus 34:6), is looked up in that book's Plain text */
{ /* the Plain of every translated book: in check mode the other books are read for this alone, quietly */
  const PV = {}; for(const id in B) PV[id] = B[id].plain.v;
  if(CHECK) for(const id of bookDirs) if(!PV[id] || (id === ONLY && PART)){ const e0 = errors, w0 = warnings; errBuf = [];
    try { PV[id] = parsePlain(id, dirsOf(id, null).map(d => path.join(d, 'plain.txt')).filter(exists).map(read).join('\n')).v; } catch(e) {}
    errBuf = null; errors = e0; warnings = w0; }
  const norm = t => strip(t).toLowerCase().replace(/[^\p{L}\d]+/gu, ' ').trim();
  /* a quotation and its reference: "..." (Exodus 34:6); Exodus 34:6 says, "..."; "...," as Exodus 34:6 puts it */
  const REF = '((?:[1-3] )?[A-Z][a-z]+(?: of [A-Z][a-z]+)? \\d+:\\d+(?:[–-]\\d+(?::\\d+)?)?)';   // named only: a bare 12:7 after "Ecclesiastes 3:20;" is not the current book
  const QRES = [[new RegExp('"([^"]{15,}?)[,.!?;:]?"\\s*\\(([^()]{3,40})\\)', 'g'), 1, 2, null],
                [new RegExp('\\b' + REF + ',? ((?:also |then |later )?(?:says|said|has|puts it|adds|declares|promises|commands|tells|warns|asks|cries|sings|prays|records|writes|answers|replies)(?: (?:him|her|them|us|Israel|Moses|David))?)(?: [^".;:!?()]{1,60}?)?[,:]? "([^"]{15,}?)[,.!?;:]?"', 'g'), 3, 1, 2],   // "2 Kings 23:21 says Josiah kept a Passover "..."": a short gap, within the sentence
                [new RegExp('"([^"]{15,}?),?" ((?:as|in) )' + REF + '\\b(?![:\\d])', 'g'), 1, 3, 2],   // the quote must be tied to the reference by "as" or "in", not just followed by a new sentence
                [new RegExp('\\b' + REF + '(?: \\(|,? ?((?: [^".;:!?()]{1,40})?): |, )"([^"]{15,}?)[,.!?;:]?"', 'g'), 3, 1, 2]];   // Psalm 121:4 ("..."); Psalm 121:4: "..."; 1 Kings 20:23 uses the same idea: "..."; (compare 18:22, "...")
  const OTHER = /\b(KJV|NIV|ESV|NRSV|RSV|NASB|NJPS|JPS|BSB|YLT|LXX|Septuagint|Vulgate|Targum|Samaritan|Greek|Latin|Hebrew|Aramaic|Syriac|literally|lit\.)\b/;   // a quotation of another version, not of the Plain
  const quoteCheck = (where, text, ctx) => { if(!text) return; const t = strip(text); const seen = new Set();
    for(const [re, qi, ri, wi] of QRES){ let m; re.lastIndex = 0;
    while((m = re.exec(t))){ const q = m[qi], rt = m[ri]; if(seen.has(q)) continue; seen.add(q);
      const before = t.slice(Math.max(0, m.index + m[0].indexOf(rt) - 40), m.index + m[0].indexOf(rt));   // "the Targum on Genesis 4:8 says" quotes the Targum
      if(OTHER.test(rt) || /\d\s$/.test(before) || (wi && (OTHER.test(m[wi] || '') || OTHER.test(before) || /\bon $/.test(before)))) continue; const refs = R.findRefs(rt, ctx, true); if(refs.length !== 1 || !PV[refs[0].book]) continue;
      const r = refs[0], pv = PV[r.book], keys = R.refVerses(r, 60).map(k => k.slice(k.indexOf(' ') + 1));
      if(!/:/.test(rt.replace(/^[^\d]*\d+/, ''))) [...new Set(keys.map(k => k.split(':')[0]))].forEach(c => { if(pv[c + ':0']) keys.unshift(c + ':0'); });   // a whole psalm includes its title (verse 0)
      const plain = norm(keys.map(k => pv[k] || '').join(' ')); if(!plain) continue;
      if(q.trim().split(/\s+/).length < 5 || !(/^\d/.test(rt) || Object.keys(R.OF).some(n => rt.startsWith(n + ' ')))) continue;   // short phrases are usually a word study; (Rashi on 2:1) cites a commentator
      const parts = q.replace(/\s*\([^()]*\)/g, '').split(/\s*(?:\.\.\.|…)\s*/).map(norm).filter(Boolean);
      if(!parts.every(p => plain.includes(p))) warn(where, `quotes ${r.label} as "${q.slice(0, 70)}", which is not the site's Plain wording`); } } };
  const walk = (where, o, ctx) => { if(typeof o === 'string') quoteCheck(where, o, ctx); else if(o && typeof o === 'object') Object.values(o).forEach(v => walk(where, v, ctx)); };
  /* a bare c:v inside the brackets of another book's reference, "(Psalm 93:1; compare 96:10)", reads as the current book: ask for the name */
  const LISTS = new Set(['r', 'refs', 'echoes', 'v', 'a', 'top', 's']);
  const ambWalk = (where, o, ctx) => { if(typeof o === 'string') R.findRefs(strip(o), ctx, false, '', s => warn(where, `"${s}": the bare reference reads as ${R.BY_ID[ctx] ? R.BY_ID[ctx].name : 'this book'}; write the book name`));
    else if(o && typeof o === 'object') Object.entries(o).forEach(([k, v]) => { if(!LISTS.has(k)) ambWalk(where, v, ctx); }); };
  for(const id in B){ const x = B[id];
    x.notes.forEach((n, i) => ambWalk(`${id}/notes[${i}] ${n.v}`, [n.b, n.p], id));
    x.chapters.forEach(c => ambWalk(`${id}/chapters ${c.n}`, c, id));
    x.contrib.forEach(t => ambWalk(`${id}/topics ${t.id}`, t, id));
    x.variants.forEach((v, i) => ambWalk(`${id}/variants[${i}] ${v.v}`, v, id)); }
  for(const id in B){ const x = B[id];
    x.notes.forEach((n, i) => walk(`${id}/notes[${i}] ${n.v}`, [n.b, n.p], id));
    x.chapters.forEach(c => walk(`${id}/chapters ${c.n}`, c, id));
    x.contrib.forEach(t => walk(`${id}/topics ${t.id}`, t, id));
    if(x.book) walk(`${id}/book.json`, x.book, id); }
  if(!CHECK) for(const id in TOPICS) walk(`topics/${id}.json`, [TOPICS[id].lead, TOPICS[id].sections.filter(s => !s.book)], null);
}

/* atlas: each chapter's places, people and events from Bible Atlas (content/atlas/<id>.json, harvested per tools/agent-atlas.md) */
const ATLAS = {};
/* content/atlas/points.json: a reviewer's fix for a Bible Atlas point that is wrong in every book ({id: {lat, lon, why}}; null lat/lon = location unknown, no dot) */
/* content/proposals/<lane>/points.json: the same, proposed by a writing lane until the lead merges it (see tools/lanes.md) */
const POINTS = exists(P('content/atlas/points.json')) ? json(P('content/atlas/points.json')) || {} : {}, PT_FROM = {};
LANES.forEach(l => { const f = P('content/proposals', l, 'points.json'); if(!exists(f)) return;
  for(const [id, x] of Object.entries(json(f) || {})){
    if(POINTS[id] && JSON.stringify(POINTS[id]) !== JSON.stringify(x)) err(`proposals/${l}/points.json "${id}"`, `already fixed differently in ${PT_FROM[id] || 'atlas/points.json'}`);
    else { POINTS[id] = x; PT_FROM[id] = PT_FROM[id] || `proposals/${l}/points.json`; } } });
for(const [id, x] of Object.entries(POINTS)){ const w = `atlas/points.json "${id}"`;
  if(!x.why) err(w, 'needs why');
  if((x.lat == null) !== (x.lon == null) || (x.lat != null && !(Math.abs(x.lat) <= 90 && Math.abs(x.lon) <= 180))) err(w, 'needs both lat and lon as numbers, or both null'); }
for(const b of CAT.books){ const f = P('content/atlas', b.id + '.json'); if(!exists(f) || (CHECK && b.id !== ONLY)) continue;
  const a = json(f), w = `atlas/${b.id}.json`; if(!a) { err(w, 'does not parse'); continue; }
  const chs = Object.keys(a.chapters || {});
  if(chs.length !== b.vc.length || chs.some(c => !(+c >= 1 && +c <= b.vc.length))) err(w, `needs one entry for each of the ${b.vc.length} chapters`);
  for(const c of chs) for(const k of ['places','people','events']) (a.chapters[c][k] || []).forEach(id => { if(!(a[k] || {})[id]) err(w, `chapter ${c}: ${k} id "${id}" is not in "${k}"`); });
  for(const [id, p] of Object.entries(a.places || {})){
    if(!p.name) err(w, `place "${id}" needs a name`);
    if((p.lat == null) !== (p.lon == null) || (p.lat != null && !(Math.abs(p.lat) <= 90 && Math.abs(p.lon) <= 180))) err(w, `place "${id}" needs both lat and lon as numbers, or both null`); }
  for(const id in a.places) if(POINTS[id]){ const x = POINTS[id]; Object.assign(a.places[id], {lat:x.lat, lon:x.lon});
    for(const ch of Object.values(a.chapters)) if((ch.places || []).includes(id)) ch.fixes = (ch.fixes || []).concat([{drop:[], unmap:[], moved:[a.places[id].name], why:x.why}]); }
  /* a reviewer's corrections (content/atlas/corrections/<id>.json): `drop` removes a Bible Atlas link that does not fit the chapter,
     `unmap` keeps the link but draws no dot where Bible Atlas's point is wrong for this chapter, and `add` links a Bible Atlas entity
     the text names but Bible Atlas does not link here (psalm titles, for example), as {places|people|events: {id: {name, lat?, lon?}}};
     each needs a reason, and the page lists them */
  const cf = P('content/atlas/corrections', b.id + '.json'), fixes = exists(cf) ? json(cf) || [] : [];
  fixes.forEach((x, j) => { const ws = `atlas/corrections/${b.id}.json[${j}]`, ch = a.chapters[x.c];
    if(!ch) { err(ws, `no chapter ${x.c}`); return; }
    if(!x.why) err(ws, 'needs why');
    const added = [];
    for(const [k, ents] of Object.entries(x.add || {})){ if(!['places','people','events'].includes(k)) { err(ws, `add: unknown kind "${k}"`); continue; }
      for(const [id, e] of Object.entries(ents)){ a[k] = a[k] || {};
        if(!e.name) err(ws, `add: "${id}" needs a name`);
        if(k === 'places' && ((e.lat == null) !== (e.lon == null))) err(ws, `add: place "${id}" needs both lat and lon, or both null`);
        if(a[k][id] && a[k][id].name !== e.name) err(ws, `add: "${id}" is already "${a[k][id].name}"`);
        if(!a[k][id]) a[k][id] = Object.assign({}, e, POINTS[id] && k === 'places' ? {lat:POINTS[id].lat, lon:POINTS[id].lon} : {});
        if((ch[k] || []).includes(id)) err(ws, `add: "${id}" is already linked to chapter ${x.c}`); else { ch[k] = (ch[k] || []).concat([id]); added.push(e.name); } } }
    (x.drop || []).forEach(id => { const k = ['places','people','events'].find(k => (ch[k] || []).includes(id));
      if(!k) err(ws, `"${id}" is not linked to chapter ${x.c}`); else ch[k] = ch[k].filter(y => y !== id); });
    (x.unmap || []).forEach(id => { if(!(ch.places || []).includes(id)) err(ws, `"${id}" is not a place in chapter ${x.c}`); });
    ch.fixes = (ch.fixes || []).concat([{drop:(x.drop || []).map(id => (a.places[id] || a.people[id] || a.events[id] || {name:id}).name), unmap:x.unmap || [], added, why:x.why}]); });
  ATLAS[b.id] = a; }

if(CHECK){
  const x = B[ONLY];
  console.log(`${ONLY}: ${Object.keys(x.plain.v).length} verses, ${x.notes.length} notes, ${x.variants.length} variants, ${x.glosses.length} glosses, ${x.chapters.length} chapter pages, ${x.contrib.length} topic contributions`);
  console.log(`${errors} errors, ${warnings} warnings`); process.exit(errors ? 1 : 0);
}

/* topics: merge contributions, notes and chapters into one page each */
const touches = (text, ctx) => [...new Set(R.findRefs(strip(text), ctx, true).flatMap(R.refChapters))];
for(const id in B){ const x = B[id];
  x.contrib.forEach(t => { const T = TOPICS[t.id]; if(!T) return;
    (t.sections||[]).forEach(s => T.sections.push(Object.assign({}, s, {book:id})));
    (t.common||[]).forEach(c => T.common.push({t:c, book:id})); (t.uncommon||[]).forEach(c => T.uncommon.push({t:c, book:id}));
    if(t.claude) T.claude.push(Object.assign({}, t.claude, {book:id}));
    (t.links||[]).forEach(l => { if(!T.links.some(k => k[1] === l[1])) T.links.push(l); });
    (t.sources||[]).forEach(s => { if(!T.sources.includes(s)) T.sources.push(s); });
  });
  x.notes.forEach((n, i) => { if(n.top && TOPICS[n.top]) TOPICS[n.top].notes.push({book:id, i, v:n.v, t:n.t, p:n.p || '', type:n.type}); });
  x.chapters.forEach(c => (c.topics||[]).forEach(t => TOPICS[t] && TOPICS[t].chapters.push([id, c.n, c.title])));
  /* "Where Christians differ" cards: one question can come up in many books; the topic page lists every place it is asked, and each card links to the others */
  [...(x.book.traditions||[]).map(q => [0, q]), ...x.chapters.flatMap(c => (c.traditions||[]).map(q => [c.n, q]))].forEach(([c, q]) => {
    if(TOPICS[q.top]) TOPICS[q.top].trad.push({book:id, c, q:q.q, who:q.views.map(v => v[0]), _card:q}); });
}
for(const id in TOPICS) TOPICS[id].trad.forEach(e => { e._card.also = TOPICS[id].trad.filter(o => o !== e).map(o => [o.book, o.c, o.q]); });
for(const id in TOPICS){ const T = TOPICS[id];
  T.sections.forEach(s => s.ch = s.refs ? touches(s.refs, s.book) : (s.book ? [] : []));
  T.books = [...new Set([...T.sections.map(s=>s.book), ...T.notes.map(n=>n.book), ...T.chapters.map(c=>c[0]), ...T.trad.map(e=>e.book)].filter(Boolean))]
    .sort((a,b) => CAT.books.findIndex(x=>x.id===a) - CAT.books.findIndex(x=>x.id===b));
}
/* chapter -> topics, for the topic row of the reader */
for(const id in B){ const x = B[id], ct = {};
  const add = (c, t) => { if(!TOPICS[t]) return; (ct[c] = ct[c] || []); if(!ct[c].includes(t)) ct[c].push(t); };
  x.chapters.forEach(c => (c.topics||[]).forEach(t => add(c.n, t)));
  x.notes.forEach(n => n.top && add(+n.v.split(':')[0], n.top));
  x.chapters.forEach(c => (c.traditions||[]).forEach(q => q.top && add(c.n, q.top)));
  for(const t in TOPICS) TOPICS[t].sections.forEach(s => s.ch.forEach(k => { const m = k.match(/^(\S+) (\d+)$/); if(m[1] === id) add(+m[2], t); }));
  x.chTopics = ct;
}

/* reverse index: every place a verse is discussed */
const BY = {}; const cite = (key, entry) => { const [b, cv] = [key.slice(0, key.indexOf(' ')), key.slice(key.indexOf(' ')+1)]; ((BY[b] = BY[b] || {})[cv] = BY[b][cv] || []).push(entry); };
for(const id in B){ const x = B[id];
  x.notes.forEach((n, i) => { const seen = new Set();
    R.findRefs(strip((n.r||'')), id, true).concat(R.findRefs(strip(n.b), id, false)).forEach(r => R.refVerses(r, 12).forEach(k => {
      if(seen.has(k) || k === `${id} ${n.v}`) return; seen.add(k); cite(k, ['n', id, i, n.v, n.t]); })); });
  x.chapters.forEach(c => { const seen = new Set();
    R.findRefs(strip(c.echoes||''), id, true).forEach(r => R.refVerses(r, 12).forEach(k => { if(seen.has(k)) return; seen.add(k); cite(k, ['c', id, c.n, c.title]); })); });
}
for(const tid in TOPICS) TOPICS[tid].sections.forEach((s, j) => { const seen = new Set();
  R.findRefs(strip(s.refs||''), s.book, true).forEach(r => R.refVerses(r, 12).forEach(k => { if(seen.has(k)) return; seen.add(k); cite(k, ['t', tid, j, TOPICS[tid].title]); })); });

/* ---------- the site's own pages: content/pages/*.md, content/articles/*.md, content/releases/*.json ----------
   Pages and articles are Markdown under a "key: value" header between --- lines. The Markdown is a small subset:
   # to ### headings, paragraphs, - and 1. lists, > quotes, **bold**, *italic*, [text](url), and lines of raw HTML. */
const mdInline = s => s.replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?!\w)/g, '$1<i>$2</i>')
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, t, u) => `<a href="${u}"${/^https?:/.test(u) ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`);
function md(src){
  const lines = s => s.replace(/\n\s*/g, ' ');
  return src.replace(/^(#{1,3}\s.*)$/gm, '\n$1\n').split(/\n\s*\n/).map(b => b.trim()).filter(Boolean).map(t => { let m;
    if(t.startsWith('<')) return t;
    if((m = t.match(/^(#{1,3})\s+(.+)$/))) return `<h${m[1].length+1}>${mdInline(m[2])}</h${m[1].length+1}>`;
    if(/^[-*]\s/.test(t)) return `<ul>${t.split(/\n(?=[-*]\s)/).map(li => `<li>${mdInline(lines(li.replace(/^[-*]\s+/, '')))}</li>`).join('')}</ul>`;
    if(/^\d+\.\s/.test(t)) return `<ol>${t.split(/\n(?=\d+\.\s)/).map(li => `<li>${mdInline(lines(li.replace(/^\d+\.\s+/, '')))}</li>`).join('')}</ol>`;
    if(t.startsWith('>')) return `<blockquote>${md(t.replace(/^>\s?/gm, ''))}</blockquote>`;
    return `<p>${mdInline(lines(t))}</p>`; }).join('\n');
}
const mdFile = f => { const t = read(f).replace(/^﻿/, '').replace(/\r\n?/g, '\n'), m = t.match(/^---\n([\s\S]*?)\n---\n?/), head = {};
  if(m) m[1].split('\n').forEach(l => { const k = l.match(/^(\w+):\s*(.*)$/); if(k) head[k[1]] = k[2].trim(); });
  return {head, body:m ? t.slice(m[0].length) : t}; };
const listOf = s => (s || '').split(',').map(x => x.trim()).filter(Boolean);
const PAGES = {}, ARTICLES = {}, RELEASES = [];
/* home.md: the lead (before the first ##), then each ## section is one card; "sample" is the verse shown at work,
   "start" the books offered first */
if(exists(P('content/pages/home.md'))){ const {head, body} = mdFile(P('content/pages/home.md')), [lead, ...secs] = body.split(/^## /m);
  if(!head.title) err('content/pages/home.md', 'needs title, the tagline');
  const H = PAGES.home = {title:head.title, lead:md(lead), cards:secs.map(s => { const [h, ...rest] = s.split('\n'); return {h:h.trim(), html:md(rest.join('\n'))}; }),
    start:listOf(head.start).filter(id => { if(!BOOK[id]) err('content/pages/home.md', `start: "${id}" is not a book id`); return B[id]; })};
  if(head.sample){ const [bk, cv] = head.sample.split(' '), x = B[bk];
    if(!BOOK[bk] || !/^\d+:\d+$/.test(cv || '')) err('content/pages/home.md', `sample "${head.sample}" should look like "Gen 1:2"`);
    else if(!x || !x.plain.v[cv]) warn('content/pages/home.md', `sample ${head.sample} is not in this build, so the home page leaves it out`);
    else H.sample = {ref:head.sample, name:`${x.name} ${cv}`, text:x.plain.v[cv],
      notes:x.notes.filter(n => n.v === cv).map(n => ({a:n.a, type:n.type, t:n.t, p:n.p || '', orig:n.orig, kind:n.kind}))}; } }
else err('content/pages/home.md', 'missing');
for(const name of ['mission']){ const f = P('content/pages', name + '.md');
  if(!exists(f)) { err(`content/pages/${name}.md`, 'missing'); continue; }
  const {head, body} = mdFile(f); if(!head.title) err(`content/pages/${name}.md`, 'needs title');
  PAGES[name] = {title:head.title, kicker:head.kicker || '', html:md(body)}; }
/* articles: one file each, <id>.md; a file starting with _ is a template. A draft shows in draft builds only. */
const ARTDIR = P('content/articles');
if(exists(ARTDIR)) for(const f of fs.readdirSync(ARTDIR).filter(f => f.endsWith('.md') && !f.startsWith('_')).sort()){
  const id = f.slice(0, -3), where = `content/articles/${f}`, {head, body} = mdFile(path.join(ARTDIR, f)), status = head.status || 'draft';
  if(!['draft','published'].includes(status)) err(where, `status must be draft or published, not "${status}"`);
  if(PUBLISH && status !== 'published') continue;
  if(!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) err(where, 'the file name is the article\'s address: use lowercase words joined by hyphens');
  if(!head.title) err(where, 'needs title');
  if(!/^\d{4}-\d{2}-\d{2}$/.test(head.date || '') || isNaN(Date.parse(head.date))) err(where, 'needs date as YYYY-MM-DD');
  if(!head.summary) warn(where, 'needs summary, the one or two sentences shown in the list of articles');
  if(!body.trim()) err(where, 'has no text');
  const topics = listOf(head.topics), books = listOf(head.books), sources = listOf(head.sources);
  topics.forEach(t => { if(!TOPICS[t]) err(where, `topic "${t}" is not a topic`); });
  books.forEach(b => { if(!BOOK[b]) err(where, `book "${b}" is not a book id`); });
  sources.forEach(s => { if(SOURCES[s] == null) err(where, `source "${s}" is not in content/sources.json`); });
  ARTICLES[id] = {id, title:head.title || id, date:head.date || '', author:head.author || '', summary:head.summary || '', topics, books,
    draft:status !== 'published', html:md(body), sources:sources.map(s => SOURCES[s] || s)}; }
/* release notes: content/releases/<date>.json, written by tools/release.js at each publish; _snapshot.json is its memory */
const REL_KINDS = ['new','revised','topic','article','site','removed'];
if(exists(P('content/releases'))) for(const f of fs.readdirSync(P('content/releases')).filter(f => f.endsWith('.json') && !f.startsWith('_'))){
  const where = `content/releases/${f}`, r = json(P('content/releases', f)); if(!r) continue;
  if(!/^\d{4}-\d{2}-\d{2}$/.test(r.date || '')) err(where, 'needs date as YYYY-MM-DD');
  if(!r.title) err(where, 'needs title');
  (r.items || []).forEach((x, i) => { if(!REL_KINDS.includes(x.kind)) err(where, `items[${i}] kind must be one of ${REL_KINDS.join(', ')}`); if(!x.text) err(where, `items[${i}] needs text`); });
  RELEASES.push(Object.assign({id:f.slice(0, -5)}, r)); }
RELEASES.sort((a, b) => b.id.localeCompare(a.id));

/* ---------- write ---------- */
const SITE = PUBLISH ? 'public' : 'site';   // writers' builds never touch what is being published
const OUT = P(SITE, 'data');
['books','en','orig','links','topics','atlas','articles','pages'].forEach(d => fs.mkdirSync(path.join(OUT, d), {recursive:true}));
const WROTE = new Set();
const W = (f, o) => { fs.writeFileSync(path.join(OUT, f), JSON.stringify(o)); WROTE.add(f); };
const clean = o => JSON.parse(JSON.stringify(o, (k, v) => k.startsWith('_') ? undefined : v));
const SHARDS = 32, shard = id => { let h = 0; for(const ch of id) h = (h*31 + ch.charCodeAt(0)) >>> 0; return 's' + String(h % SHARDS).padStart(2,'0'); };

/* a book is reviewed once its hostile review has a non-empty "Fixes applied" section */
const catalog = {groups:CAT.groups, books:CAT.books.map(b => ({id:b.id, name:b.name, t:b.t, group:b.group, vc:b.vc,
  status: B[b.id] ? (reviewed(b.id) ? 'reviewed' : 'draft') : 'text', ...(ATLAS[b.id] ? {atlas:1} : {})}))};
/* writings outside the 66 books (content/works.json): the site marks every mention by tier, so a reader can tell them from Scripture at a glance */
const WORKS = WORKS_ALL;
const TIERS = ['dc','orth','eth','other','early','lost'];
for(const [id, w] of Object.entries(WORKS)) { if(!w.name || !TIERS.includes(w.tier)) err(`works.json ${id}`, `needs a name and a tier (${TIERS.join(', ')})`);
  if((w.aka || []).some(a => /^2 Esdras/.test(a))) err(`works.json ${id}`, '"2 Esdras" is the Greek Ezra-Nehemiah on this site, not a separate work'); }
catalog.works = WORKS;
/* books outside the 66: their works.json entry gives the tier; the catalog lists which of their texts exist */
const ORIG_NAMES = {gez:'Ge’ez (classical Ethiopic) text', grc:'Greek text', heb:'Hebrew text', syr:'Syriac text', lat:'Latin text'};
for(const b of catalog.books.filter(b => b.t === 'X')){
  const w = Object.values(WORKS).find(w => w.book === b.id); if(!w) err(`works.json`, `book ${b.id} needs a works.json entry with "book": "${b.id}"`);
  const o = json(P('texts/orig', b.id + '.json')) || {}, e = json(P('texts/en', b.id + '.json')) || {};
  const has = (t, k) => t[k] && typeof t[k] === 'object' && Object.keys(t[k]).length;
  /* each text file describes the texts it holds in "about" ({key: {name, short, note, script?}}); the site offers exactly those */
  const about = {}; [[e, 'en'], [o, 'orig']].forEach(([f, src]) => Object.entries(f.about || {}).forEach(([k, a]) => {
    if(!has(f, k)) err(`texts/${src}/${b.id}.json`, `about lists "${k}" but the file has no such text`); else about[k] = Object.assign({src}, a); }));
  if(!Object.keys(about).length) err(`texts/orig/${b.id}.json`, 'needs "about" describing its texts');
  b.texts = Object.keys(about); b.about = about;
  b.orig_name = ORIG_NAMES[o.lang] || 'original text'; }
W('catalog.json', catalog);
for(const id in ATLAS) W(`atlas/${id}.json`, ATLAS[id]);
if(exists(P('content/atlas/basemap.json'))) { fs.copyFileSync(P('content/atlas/basemap.json'), path.join(OUT, 'atlas/basemap.json')); WROTE.add('atlas/basemap.json'); }
for(const b of CAT.books){
  fs.copyFileSync(P('texts/en', b.id + '.json'), path.join(OUT, 'en', b.id + '.json'));
  fs.copyFileSync(P('texts/orig', b.id + '.json'), path.join(OUT, 'orig', b.id + '.json'));
  const xr = exists(P('texts/xref', b.id + '.json')) ? json(P('texts/xref', b.id + '.json')) : {};
  W(`links/${b.id}.json`, {x:xr, by:BY[b.id] || {}});
}
for(const id in B){ const x = B[id];
  /* every source key the book's pages cite, wherever it is cited, ships with the book so the site can show the citation */
  const used = new Set([...(x.book.sources||[]), ...((x.book.audience||{}).s||[]), ...x.notes.flatMap(n=>n.s||[]), ...x.variants.flatMap(v=>v.s||[]),
    ...x.chapters.flatMap(c => (c.settings||[]).flatMap(t => t.s||[])),
    ...[...(x.book.traditions||[]), ...x.chapters.flatMap(c => c.traditions||[])].flatMap(t => (t.s||[]).concat(...t.views.map(v => v[2]||[])))]);
  const src = {}; used.forEach(k => src[k] = SOURCES[k]);
  const tops = {}; Object.values(x.chTopics).flat().concat(x.book.topics||[], (x.book.traditions||[]).map(q => q.top)).forEach(t => TOPICS[t] && (tops[t] = [TOPICS[t].title, TOPICS[t].kind]));
  W(`books/${id}.json`, clean({id, name:x.name, t:x.t, book:x.book, plain:x.plain, notes:x.notes, variants:x.variants, glosses:x.glosses,
    chapters:x.chapters, chTopics:x.chTopics, topics:tops, sources:src}));
}
const tindex = {}, shards = {};
for(const id in TOPICS){ const T = TOPICS[id];
  tindex[id] = [T.title, T.kind, strip(T.lead).slice(0, 220), T.aka, T.books, shard(id)];
  (shards[shard(id)] = shards[shard(id)] || {})[id] = clean(Object.assign({}, T, {sources:(T.sources||[]).map(k => SOURCES[k] || k)}));
}
W('topics/index.json', tindex);
for(const s in shards) W(`topics/${s}.json`, shards[s]);
for(const id in PAGES) W(`pages/${id}.json`, PAGES[id]);
W('articles/index.json', Object.values(ARTICLES).sort((a, b) => b.date.localeCompare(a.date)).map(({html, sources, ...a}) => a));
for(const id in ARTICLES) W(`articles/${id}.json`, ARTICLES[id]);
W('releases.json', RELEASES);
/* the page: shell + styles + reference parser + app */
const shell = read(P('app/shell.html')).replace('/*BASE_CSS*/', () => read(P('app/base.css')));
/* books/ and topics/ hold only what this build wrote, so a book left out leaves no stale file behind */
['books','topics','articles','pages'].forEach(d => fs.readdirSync(path.join(OUT, d)).forEach(f => { if(!WROTE.has(`${d}/${f}`)) fs.unlinkSync(path.join(OUT, d, f)); }));
/* the logos and icons (made from images/Logos/ by tools/logos.py) are served from img/ */
fs.rmSync(P(SITE, 'img'), {recursive:true, force:true}); fs.cpSync(P('app/img'), P(SITE, 'img'), {recursive:true});
fs.writeFileSync(P(SITE, 'index.html'), shell + '\n<script>\n' + read(P('tools/refs.js')) + '\n' + read(P('app/app.js')) + '\n</script>\n');
/* PROGRESS.md is generated: each book's lane keeps its own content/books/<id>/progress.md ("Status: ..." then its log), so no shared file is ever edited by two writers */
{ const rows = CAT.books.map(b => [b.id, P('content/books', b.id, 'progress.md')]).filter(([, f]) => exists(f)).map(([id, f]) => {
    const t = read(f), st = (t.match(/^Status:\s*(.+)$/m) || [, '?'])[1].trim(), log = t.replace(/^Status:.*$/m, '').trim().split('\n')[0].slice(0, 160);
    return `| ${id} | ${st} | ${log.replace(/\|/g, '/')} |`; });
  const out = `# Progress\n\nGenerated by tools/build.js from content/books/<id>/progress.md; edit those, not this file.\nStatus: \`writing\` → \`written\` → \`reviewed\` (hostile review done, fixes applied) → \`reviewed, ready\` (handed to the lead) → \`reviewed, published\`.\n\n| Book | Status | Latest note |\n|---|---|---|\n${rows.join('\n')}\n`;
  const tmp = P(`PROGRESS.md.${process.pid}.tmp`); fs.writeFileSync(tmp, out); fs.renameSync(tmp, P('PROGRESS.md')); }
const nT = Object.keys(TOPICS).length;
console.log(`built ${Object.keys(B).length} books, ${nT} topics; ${errors} errors, ${warnings} warnings${SKIPPED.length ? '; left out because they have errors (unfinished?): ' + SKIPPED.join(', ') : ''}${DRAFTS.length ? '; left out until reviewed: ' + DRAFTS.join(', ') : ''}`);
process.exit(errors ? 1 : 0);
