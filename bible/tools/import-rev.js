/* Import the Revelation scroll (revelation/v2, the original study) into content/books/Rev/ and content/topics/.
   Re-run whenever the Revelation files change: it reads the file list from revelation/v2/build.js.
   Topic core files marked "origin":"Rev" are rewritten on every run; to generalize one for the whole Bible, edit it and
   delete its "origin" line, and it is left alone from then on (Revelation's lead becomes an "In Revelation" section). */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..'), REV = path.join(ROOT, '..', 'revelation');
const S = path.join(REV, 'v2/src/'), V1 = path.join(REV, 'src/');
const read = f => fs.readFileSync(f, 'utf8');
const OUT = path.join(ROOT, 'content/books/Rev'); fs.mkdirSync(OUT, {recursive:true});
const W = (f, o) => fs.writeFileSync(path.join(OUT, f), typeof o === 'string' ? o : JSON.stringify(o, null, 1));

/* the data files, in the order revelation/v2/build.js loads them */
const listSrc = read(path.join(REV, 'v2/build.js')).match(/const dataFiles = \[([^\]]+)\]/)[1];
const files = listSrc.split(',').map(s => s.trim()).map(s => s.replace(/^V1\+'(.*)'$/, (_, f) => V1 + f).replace(/^S\+'(.*)'$/, (_, f) => S + f));
const appSrc = read(S + 'app.js');
const appTop = appSrc.slice(0, appSrc.indexOf("const sheet = $('sheet')"));
const kjv = JSON.parse(read(path.join(ROOT, 'texts/en/Rev.json'))).kjv, gk = JSON.parse(read(path.join(ROOT, 'texts/orig/Rev.json'))).sbl;
const stub = `var matchMedia = () => ({matches:false}); var localStorage = {getItem(){return null}, setItem(){}}; var document = {getElementById(){return null}};`;
const code = files.map(read).join('\n') + '\n' + read(S + 'refs.js') + '\nconst KEYV = new Proxy({}, {get:(_, k) => ({kjv:KJV[k]||"", gk:GK[k]||""})});\n' + appTop;
const X = new Function('KJV', 'GK', stub + code + `;return {CHAPTERS, NOTES, TOPICS, WORDS, STATIONS, EXTRA, BEASTS, DECODER, GLOSSES, PLAIN_SRC, SRC, ART, LENS, KIND, BOOKS, PROMPTS, STYLE, ART_SOURCES, pages, CH_TOPICS, ABOUT, NOTE_TYPES, blockHTML, factsBox: typeof factsBox !== 'undefined' ? factsBox : null, EXTRA_PLACE: typeof EXTRA_PLACE !== 'undefined' ? EXTRA_PLACE : {}};`)(kjv, gk);
const strip = s => String(s).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

/* plain text: straight quotes, as the writing guide asks */
W('plain.txt', X.PLAIN_SRC.trim().replace(/[“”]/g, '"').replace(/[‘’]/g, "'") + '\n');
const fixq = s => s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'");

/* notes: translation-watch words fold into their notes (order kept, so note numbers match the old pages) */
const notes = X.NOTES.map(n => { const w = n.w ? X.WORDS[n.w] : null;
  const o = {v:n.v, a:fixq(n.a), type:n.type, t:n.t || w.title, p:n.p || '', b:n.b || w.body};
  if(w){ o.orig = w.greek; o.kind = w.kind; }
  if(n.greek) o.orig = n.greek;
  if(n.kind) o.kind = n.kind;
  ['r','l','s','top'].forEach(k => { if(n[k]) o[k] = n[k]; });
  if(o.top === 'translations-guide') delete o.top;
  return o; });
W('notes.json', notes);
W('glosses.json', X.GLOSSES.map(g => ({v:g.v, a:fixq(g.a), m:g.m})));

/* chapters */
/* a station spans one or two chapters; EXTRA_PLACE says which chapter page shows each of its extras (default: the first; 0 = hidden).
   Every station covering a chapter contributes (the ch22 station overlaps ch21's [21,22]). */
const placeOf = (st, kind, i) => { const p = (X.EXTRA_PLACE[st.id] || {})[kind]; const v = Array.isArray(p) ? p[i] : p; return v === undefined ? st.ch[0] : v; };
const chapters = X.CHAPTERS.map(c => {
  const deep = [], links = [];
  (c.deep || []).forEach(d => deep.push(d.spec ? {box:'spec', title:d.title, b:d.body, refs:d.refs} : {b:X.blockHTML(d)}));
  X.STATIONS.filter(st => st.ch.includes(c.n)).forEach(st => {
    const E = X.EXTRA[st.id] || {}, here = (kind, i) => placeOf(st, kind, i) === c.n;
    if(st.extra && here('extra')) deep.push({box:'fact', b:st.extra.replace(/^<p[^>]*>|<\/p>$/g, '')});
    (E.facts || []).forEach((f, i) => { if(here('facts', i)) deep.push({box:'fact', b:f}); });
    (E.myths || []).forEach((m, i) => { if(here('myths', i)) deep.push({box:'myth', title:m.title, tag:m.culture, note:m.link2, b:m.body, l:[m.link]}); });
    if(st.israel && here('israel')) deep.push({box:'israel', b:st.israel});
    if(st.spec && here('spec')) deep.push({box:'spec', title:st.spec.title, b:st.spec.body, refs:st.spec.refs});
    if(st.spec2 && here('spec2')) deep.push({box:'spec', title:st.spec2.title, b:st.spec2.body, refs:st.spec2.refs});
    (E.links || []).forEach((l, i) => { if(here('links', i)) links.push(l); });
  });
  const o = {n:c.n, title:c.title, key:c.key, sum:c.sum, svg:X.ART[c.art](), caption:c.caption || undefined,
    readings:[['Read literally', c.lit], ['Read as symbol', c.sym]], views:c.views, deep,
    echoes:c.echoes.replace(/\s*·\s*/g, '; '), topics:(c.topics || []).filter(t => t !== 'translations-guide')};
  if(links.length) o.links = links;
  return o; });
/* material written for the whole-Bible site that the original study does not have (who heard each passage, and why)
   lives in content/overlays/Rev.json: {audience, traditions, settings:{"<chapter>":[...]}, traditions_by_chapter:{"<chapter>":[...]}, variants:{"<chapter>":[...]}}, merged in here */
const OVER = fs.existsSync(path.join(ROOT, 'content/overlays/Rev.json')) ? JSON.parse(read(path.join(ROOT, 'content/overlays/Rev.json'))) : {};
chapters.forEach(c => { const s = (OVER.settings || {})[c.n], t = (OVER.traditions_by_chapter || {})[c.n]; if(s) c.settings = s; if(t) c.traditions = t; });
W('chapters.json', chapters);
/* textual variants: the original study has none in the site's format, so they live in the overlay too, as variants:{"<chapter>":[...]} */
W('variants.json', Object.keys(OVER.variants || {}).sort((a, b) => a - b).flatMap(n => OVER.variants[n]));

/* the book's opening pages and its own study pages */
const page = id => X.pages.find(p => p.id === id);
const paras = html => [...html.matchAll(/<p( class="lede")?>([\s\S]*?)<\/p>/g)].map(m => m[2].trim());
const intro = page('intro');
const descs = {}; [...page('views').html.matchAll(/<li class="(\w)">[\s\S]*?<b>[^<]*<\/b><span>([\s\S]*?)<\/span><\/li>/g)].forEach(m => descs[m[1]] = m[2]);
W('book.json', {
  title:'Revelation', subtitle:'of Jesus Christ, shown to John on Patmos', svg:X.ART.intro(),
  lead:paras(intro.html).slice(0, 2),
  facts:[['Author','John, who calls himself God\'s slave, his readers\' brother, and a fellow slave with the prophets (1:1, 9; 22:9). Tradition: the apostle John. Many scholars: another John, a Jewish-Christian prophet of Asia.'],
         ['Date','Probably about AD 95, under Domitian (Irenaeus). Some date it to the late 60s, under Nero.'],
         ['Setting','Patmos, an island off the coast of modern Turkey; sent to seven churches of the Roman province of Asia'],
         ['Kind of writing','A letter, a prophecy and an apocalypse at once (1:1–4)'], ['Language','Greek'], ['Length','22 chapters, 404 verses']],
  ...(OVER.audience ? {audience:OVER.audience} : {}),
  ...(OVER.traditions ? {traditions:OVER.traditions} : {}),
  lenses:Object.entries(X.LENS).map(([k, l]) => ({k, name:l.name, desc:descs[k] || l.gist})),
  sections:X.ABOUT ? [{h:X.ABOUT.title, b:`<p>${X.ABOUT.lead}</p>` + (X.ABOUT.facts && X.factsBox ? X.factsBox(X.ABOUT.facts) : '') + X.ABOUT.sections.map(X.blockHTML).join('')}] : [],
  pages:['views', 'keys', 'beasts', 'israel', 'mythos', 'art'].map(id => page(id)).filter(Boolean).map(p => ({id:p.id, label:p.label, html:p.html})),
  prompts:X.PROMPTS.map(([t, p]) => [t, p + '\n\n' + X.STYLE]),
  reading:X.BOOKS, topics:['four-views', 'apocalyptic', 'structure', 'sevens'],
  sources:Object.keys(X.SRC), links:(X.EXTRA.start || {}).links || []
});
W('sources.json', X.SRC);

/* topics: a shared core file per topic (created once), and Revelation's material as its contribution */
const makeRefs = require('./refs.js'), CAT = JSON.parse(read(path.join(ROOT, 'texts/catalog.json'))), R = makeRefs(CAT.books);
const refsOf = (text, chs) => { const r = R.findRefs(strip(text), 'Rev', false).map(x => x.label);
  return [...new Set(r.length ? r : chs.map(n => `Revelation ${n}`))].join('; ') || 'Revelation'; };
const contrib = [];
X.TOPICS.filter(t => t !== X.ABOUT).forEach(t => {
  const f = path.join(ROOT, 'content/topics', t.id + '.json');
  /* refresh the core while Revelation is still its only author ("origin":"Rev"); once generalized for the whole Bible it is left alone */
  const cur = fs.existsSync(f) ? JSON.parse(read(f)) : null;
  if(!cur || cur.origin === 'Rev') fs.writeFileSync(f, JSON.stringify({id:t.id, title:t.title, kind:t.kind, aka:(cur && cur.aka) || [], lead:t.lead, sections:[], links:t.links || [], sources:[], origin:'Rev'}, null, 1));
  const chs = t.ch || [];
  /* once a topic serves the whole Bible, Revelation's own lead becomes Revelation's first section */
  const shared = cur && cur.origin !== 'Rev';
  contrib.push({id:t.id,
    sections:(shared ? [{h:'In Revelation', b:`<p>${t.lead}</p>`, refs:chs.length ? chs.map(n => `Revelation ${n}`).join('; ') : 'Revelation 1–22'}] : []).concat(t.sections.map(b => { const o = Array.isArray(b) ? {h:b[0], html:b[1]} : b;
      const html = X.blockHTML(Object.assign({}, o, {h:''})); return {h:o.h || (o.spec ? o.title : ''), b:html, refs:refsOf(html, chs)}; })),
    common:t.common || [], uncommon:t.uncommon || [], claude:t.claude || undefined, sources:t.sources || [], links:t.links || []});
});
W('topics.json', contrib);
console.log(`Revelation: ${notes.length} notes, ${X.GLOSSES.length} glosses, ${chapters.length} chapters, ${contrib.length} topics, ${(X.pages||[]).length} old pages`);
