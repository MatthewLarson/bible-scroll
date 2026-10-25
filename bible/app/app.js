/* ---------- Codex Collection (the Bible Scroll site) ----------
   One page, three modes: the site's own pages (home /, the scrolls /library, /topics, /articles[/<id>], /mission,
   /releases), a book's sideways scroll (/Rut, /Rut/3, /Rut/3/9) and a topic page (/topic/<id>?from=Rut/3).
   Addresses are real paths (the History API); the server answers every path with index.html.
   All content comes from the JSON directory in data/, loaded as needed. */
const $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const store = { get(k){ try{return localStorage.getItem(k)}catch(_){return null} }, set(k,v){ try{localStorage.setItem(k,v)}catch(_){} } };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const bgURL = (q, ver='NIV') => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(q)}&version=${ver}`;
const WIKI = t => `https://en.wikipedia.org/wiki/Special:Search?search=${encodeURIComponent(t)}&go=Go`;
const ext = (href, label, cls='') => `<a href="${href}" target="_blank" rel="noopener"${cls?` class="${cls}"`:''}>${label}</a>`;
const strip = s => String(s||'').replace(/<[^>]+>/g,'');

/* ---------- data, loaded on demand and kept ---------- */
const cache = {};
const load = path => cache[path] = cache[path] || fetch('data/' + path).then(r => { if(!r.ok) throw new Error(r.status); return r.json(); }).catch(e => { delete cache[path]; throw e; });
let CAT, BYID = {}, TIDX = {}, RF;

const NOTE_TYPES = {
  word:{label:'Translation & original language', color:'#b46f26'}, history:{label:'History & culture', color:'#7a5230'},
  echo:{label:'Scripture connection', color:'#2f7a55'}, symbol:{label:'Symbol', color:'#983220'},
  views:{label:'Interpretations', color:'#4d5d73'}, israel:{label:'Israel & the church', color:'#6b7a1f'},
  canon:{label:'Compared with the Bible', color:'#7b4f9e'}, myth:{label:'Other traditions', color:'#a3466b'}, spec:{label:'Claude’s theory', color:'#234d8a'}
};
const NOTE_DESC = {word:'mistranslations, manuscript differences and original words worth knowing', history:'archaeology, history and the world of the first readers',
  echo:'quotations and allusions, both back to earlier Scripture and forward to later books', symbol:'what an image means and where it comes from',
  views:'how the main schools of interpretation read the verse', israel:'notes on Israel, the Jewish people and the church',
  canon:'where this book agrees with, goes beyond or conflicts with the 66 books of the Bible', myth:'parallels from other cultures and religions, with a note on whether there is a real link', spec:'my own ideas and new connections, clearly labeled and easy to hide'};
const KIND = {mis:'Mistranslation', var:'Textual variant', com:'Common mistake', deb:'Debated', nu:'Lost nuance'};
const LENS_COL = ['#983220','#55612a','#234d8a','#5a3b6b','#b46f26'];
const lensGlyph = (i, size=14) => { const c = LENS_COL[i % 5], sh = [`<circle cx="7" cy="7" r="5.5" fill="${c}"/>`, `<path d="M7,1.5 L12.8,12 L1.2,12 Z" fill="${c}"/>`,
  `<path d="M7,1 L13,7 L7,13 L1,7 Z" fill="${c}"/>`, `<path d="M7,7 m0,-1 a1,1 0 1 1 -1,1 a3,3 0 0 1 3,-3 a5,5 0 0 1 4,5 a6,6 0 0 1 -6,5.5" fill="none" stroke="${c}" stroke-width="1.8"/>`,
  `<rect x="2" y="2" width="10" height="10" rx="2" fill="${c}"/>`][i % 5];
  return `<svg viewBox="0 0 14 14" width="${size}" height="${size}" aria-hidden="true">${sh}</svg>`; };
const ICON = {
  lit:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 L20,6" stroke="#2a1c12" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  sym:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 q4,-6 8,0 t8,0" fill="none" stroke="#2a1c12" stroke-width="2.2" stroke-linecap="round"/></svg>`
};
const SCROLLI = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3,3 h9 a2,2 0 0 1 0,4 h-1 v6 h-8 a2,2 0 0 1 0,-4 h1 z" fill="none" stroke="#5a4330" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
const STENCIL = `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7.5" fill="url(#spray)"/><path d="M8,13 L8,8 M5.6,9 L4.8,3.6 M7.4,8 L7.4,2.6 M9.2,8 L9.6,3 M10.8,9 L11.8,4.6 M5.4,11 L2.6,8.4" stroke="#ebdab3" stroke-width="1.8" stroke-linecap="round"/></svg>`;

/* ---------- small builders ---------- */
const specCard = (s, label='Claude’s theory') => `<div class="box spec"><div class="tag">${label} <i>my own idea, not established scholarship</i></div><h5>${s.title}</h5>${/^\s*<p/.test(s.b||s.body)?(s.b||s.body):`<p>${s.b||s.body}</p>`}${s.refs?`<p class="small reflist">${s.refs}</p>`:''}</div>`;
const linksRow = (L, label='Read more') => L && L.length ? `<p class="links"><b>${label}</b>${L.map(([l,t])=>ext(WIKI(t),l)).join('')}</p>` : '';
const topicChip = (id, from) => { const t = TIDX[id]; return t ? `<button data-topic="${id}" style="--kc:var(--k-${t[1]})"><i></i>${t[0]}</button>` : ''; };
const topicChips = ids => `<div class="tchips">${[...new Set(ids)].map(id => topicChip(id)).join('')}</div>`;
const para = s => /^\s*<(p|h\d|ul|ol|div|table)/.test(s) ? s : `<p>${s}</p>`;
function deepItem(d){
  if(d.svg) return d.svg + (d.caption ? `<p class="caption">${d.caption}</p>` : '');
  if(d.box === 'spec' || d.spec) return specCard({title:d.title, b:d.b || d.body, refs:d.refs});
  if(d.box === 'fact') return `<div class="box fact"><div class="tag">${SCROLLI}From history and scholarship</div>${para(d.b)}</div>`;
  if(d.box === 'israel') return `<div class="box israel"><div class="tag">Israel and the church</div>${para(d.b)}</div>`;
  if(d.box === 'myth') return `<div class="box myth"><div class="tag">${STENCIL}Other traditions${d.tag?' · '+d.tag:''} <i>a parallel, not Scripture${d.note?' · '+d.note:''}</i></div>${d.title?`<h5>${d.title}</h5>`:''}${para(d.b)}${(d.l||[]).map(l=>`<p class="small">${ext(WIKI(l[1]), l[0]+' on Wikipedia')}</p>`).join('')}</div>`;
  return `${d.h?`<h3>${d.h}</h3>`:''}${para(d.b || d.html || '')}`;
}

/* ---------- references ---------- */
let CTX = null;   // the book being read: bare "3:9" belongs to it
const SKIP = 'a,button,textarea,select,input,.tbody,.greek,.heb,svg,h1,h2,.cart,.quote,.nowork';
function linkify(root, ctx = CTX && CTX.id){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => (n.parentElement.closest(SKIP) || !/\d/.test(n.nodeValue)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = []; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const host = node.parentElement.closest('[data-ctx]'), c = host ? host.dataset.ctx : ctx;
    const list = !!node.parentElement.closest('.reflist');
    const block = node.parentElement.closest('p,li,dd,div,td,h3,h4,h5') || root, rg = document.createRange();
    rg.setStart(block, 0); rg.setEnd(node, 0);
    const text = node.nodeValue, refs = RF.findRefs(text, c, list, rg.toString().slice(-30)); if(!refs.length) return;
    const frag = document.createDocumentFragment(); let at = 0;
    refs.forEach((r, i) => {
      /* a button is atomic, so a line could break between "(" and the reference: keep brackets with it */
      const lead = text.slice(at, r.start), open = (lead.match(/[(\[“"]$/) || [''])[0];
      const close = (text.slice(r.end, refs[i+1] ? refs[i+1].start : text.length).match(/^[)\]”".,;:]+/) || [''])[0];
      frag.append(lead.slice(0, lead.length - open.length));
      const b = document.createElement('button'); b.className = 'ref' + (CTX && r.book===CTX.id ? ' rv' : '');
      if(BYID[r.book] && BYID[r.book].t === 'X' && !(CTX && r.book === CTX.id)){ const w = workOf(r.book); b.className += ' work w-' + w.tier; b.dataset.tag = TIER[w.tier].tag; }
      b.dataset.ref = JSON.stringify([r.book,r.c,r.v,r.c2,r.v2]); b.textContent = text.slice(r.start, r.end);
      if(open || close){ const w = document.createElement('span'); w.className = 'nobr'; w.append(open, b, close); frag.append(w); }
      else frag.append(b);
      at = r.end + close.length;
    });
    frag.append(text.slice(at)); node.replaceWith(frag);
  });
  markWorks(root);
}
/* writings outside the 66 books are marked wherever they are named, by tier, so they never pass for Scripture */
const TIER = {
  dc:{tag:'DC', name:'Deuterocanonical', about:'Scripture for Catholic and Orthodox Christians. Protestant Bibles leave it out or print it among the Apocrypha, and it is not in the Jewish Bible.'},
  orth:{tag:'Orth.', name:'Orthodox Scripture', about:'Scripture in Orthodox churches only. It is not in Catholic, Protestant or Jewish Bibles.'},
  eth:{tag:'Eth.', name:'Ethiopian Scripture', about:'Scripture in the Ethiopian and Eritrean Orthodox Tewahedo churches (and reportedly among Ethiopia’s Beta Israel), but not in other Bibles. Some of these books, such as 1 Enoch and Jubilees, were widely read in Jesus’ day.'},
  other:{tag:'non-canon', name:'Not in any Bible', about:'An ancient Jewish or Christian writing that no church counts as Scripture today. It helps show what people believed, but it is not Scripture.'},
  early:{tag:'early church', name:'Early Christian writing', about:'Written by early Christians, valued by the early church, and in no Bible today (a few old manuscripts included some of these).'},
  lost:{tag:'lost', name:'Lost book', about:'A book the Bible itself names and quotes that has not survived. Later books with the same title are not the original.'}
};
let WORK_RX;
function markWorks(root){
  const W = CAT.works || {};
  if(WORK_RX === undefined){ const alts = [];
    for(const [id, w] of Object.entries(W)) for(const a of w.aka || []) alts.push([a.replace(/#$/, ''), a.endsWith('#'), id]);
    alts.sort((x, y) => y[0].length - x[0].length); WORK_RX = alts.length ? {alts, rx:new RegExp('\\b(' + alts.map(([a]) => a.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b(\\s+\\d+(?:[:.]\\d+)?(?:[–-]\\d+(?:[:.]\\d+)?)?)?', 'g')} : null; }
  if(!WORK_RX) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest(SKIP) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = []; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const text = node.nodeValue, parts = []; let at = 0, m; WORK_RX.rx.lastIndex = 0;
    while((m = WORK_RX.rx.exec(text))){ const hit = WORK_RX.alts.find(([a]) => a === m[1]); if(!hit || (hit[1] && !m[2])) continue;
      if(W[hit[2]].book && B && B.meta && W[hit[2]].book === B.meta.id) continue;   // inside the book itself its name needs no label
      parts.push(text.slice(at, m.index)); const b = document.createElement('button'), w = W[hit[2]];
      b.className = 'work w-' + w.tier; b.dataset.work = hit[2]; b.dataset.tag = TIER[w.tier].tag; b.title = `${w.name}: ${TIER[w.tier].name}`; b.textContent = m[0];
      parts.push(b); at = m.index + m[0].length; }
    if(parts.length){ parts.push(text.slice(at)); node.replaceWith(...parts); }
  });
}
const workOf = book => { const e = Object.entries(CAT.works || {}).find(([, w]) => w.book === book); return e ? Object.assign({id:e[0]}, e[1]) : {tier:'other', name:book}; };
/* every page of a book outside the 66 carries its standing, so no page can be mistaken for Scripture */
function tierBand(){
  if(!B || B.meta.t !== 'X') return ''; const w = workOf(B.id), t = TIER[w.tier];
  const sum = B.data && B.data.book.canon && B.data.book.canon.summary;
  return `<div class="tierband w-${w.tier}"><b>${t.name}.</b> ${sum || t.about}${B.data && B.data.book.canon ? ' <button class="linkish" data-go="canon">Is this Scripture?</button>' : ''}</div>`;
}
function canonPage(c){
  const sec = xs => (xs || []).map(x => `<h4>${x.h}</h4>${para(x.b)}${x.refs ? `<p class="small reflist">${x.refs}</p>` : ''}`).join('');
  const KIND_LABEL = {quotation:'Quoted', allusion:'Alluded to', 'shared tradition':'Shared tradition', disputed:'Disputed link'};
  return `<div class="cart study">Is this Scripture?</div><h2>${B.meta.name}: Is It Scripture?</h2>${tierBand()}
    <h3>Who accepts it, and who does not</h3><dl class="facts">${(c.accepted_by || []).map(([k, v, s]) => `<dt>${k}</dt><dd>${v}${s && s.length ? srcList(s) : ''}</dd>`).join('')}</dl>
    <h3>Where it came from</h3>${sec(c.provenance)}
    <h3>Why most churches set it aside</h3>${sec(c.rejected_why)}
    <h3>Where the Bible refers to it</h3>${(c.cited_in || []).length ? `<ul class="outline">${c.cited_in.map(x => `<li><b>${KIND_LABEL[x.kind]}</b><span>${x.ref}${x.at ? ` (here at <button class="ref rv" data-verse="${x.at}">${x.at}</button>)` : ''}. ${x.b}</span></li>`).join('')}</ul>` : '<p>No book of the 66 quotes or clearly refers to it.</p>'}
    <div class="box spec"><div class="tag">AI analysis (Claude): not a church’s judgment</div><h5>How reliable is it, measured by the Bible?</h5>${para((c.reliability || {}).verdict)}${sec((c.reliability || {}).sections)}</div>
    <h3>How to read it</h3>${sec(c.how_to_read)}${srcList(c.s)}`;
}
function workView(id){
  const w = CAT.works[id], t = TIER[w.tier];
  const book = w.book && BYID[w.book] && BYID[w.book].status !== 'text' ? w.book : null;
  return {c:`var(--w-${w.tier})`, type:t.name, html:`<h3 id="mtitle" class="nowork">${w.name}</h3><p>${t.about}</p>${w.note ? `<p>${w.note}</p>` : ''}${book ? `<p><button class="pill" data-book="${book}">Read ${w.name} on this site, with its study notes →</button></p>` : ''}${w.topic && TIDX[w.topic] ? `<p><button class="pill" data-topic="${w.topic}">Topic page: ${TIDX[w.topic][0]}</button></p>` : ''}<p class="small muted">It is not one of the 66 books that every Christian Bible shares.${book ? '' : ' A full study of it is planned.'}</p>`};
}
/* our fonts draw a straight " as a closing quote, so every displayed " becomes “ or ” by what comes before it */
function smartQuotes(root){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('textarea,script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  /* the characters around a quote are looked up within its block: a new paragraph, cell or chip starts fresh */
  const inline = e => e.classList.contains('ref') || /^(I|B|EM|STRONG|A|SUP|SUB|SMALL)$/.test(e.tagName)
    || (e.tagName === 'SPAN' && (!!e.closest('.gl') || getComputedStyle(e).display.startsWith('inline')));
  const blockOf = n => { let e = n.parentElement; while(e && e !== root && inline(e)) e = e.parentElement; return e; };
  const ns = []; for(let n; (n = walker.nextNode()); ) ns.push({n, v:n.nodeValue, b:blockOf(n)});
  ns.forEach((t, k) => {
    if(!/["']/.test(t.v)) return;
    const before = k && ns[k-1].b === t.b ? ns[k-1].v : '', after = ns[k+1] && ns[k+1].b === t.b ? ns[k+1].v : '';
    t.n.nodeValue = t.v.replace(/"/g, (q, i) => {
      const p = i ? t.v[i-1] : (before.slice(-1) || ' '), x = t.v[i+1] || after[0] || '';
      return /[\s(\[{—–\-\/]/.test(p) || (/[\p{L}\d]/u.test(x) && !/[\p{L}.,!?;:…’'”)\]]/u.test(p)) ? '\u201c' : '\u201d'; });
    /* a single quote opens a nested quotation only after a space, bracket, dash or double quote; anywhere else it is
       an apostrophe or a closing quote, which share the glyph ’ */
    t.n.nodeValue = t.n.nodeValue.replace(/'/g, (q, i, v) => {
      const p = i ? v[i-1] : (before.slice(-1) || ' ');
      return /[\s(\[{—–\/\u201c]/.test(p) ? '\u2018' : '\u2019'; });
  });
}
const parseRef = s => { const [book,c,v,c2,v2] = JSON.parse(s); return {book,c,v,c2,v2}; };
const refName = r => RF.label(r);
const vkey = r => `${r.c}:${r.v==null?1:r.v}`;

/* ---------- routing ---------- */
function parseHash(){
  const p = decodeURIComponent(location.pathname), q = location.search.slice(1); const parts = p.split('/').filter(Boolean); const qs = new URLSearchParams(q || '');
  if(parts[0] === 'topic') return {mode:'topic', id:parts[1], from:qs.get('from')};
  if(parts[0] && BYID[parts[0]]) return {mode:'book', id:parts[0], c:parts[1] ? +parts[1] : null, v:parts[2] != null ? +parts[2] : null, page:qs.get('p')};
  if(parts[0] === 'library') return {mode:'library', q:qs.get('q') || ''};
  if(parts[0] === 'topics') return {mode:'topics'};
  if(parts[0] === 'articles') return {mode:'articles', id:parts[1] || null};
  if(parts[0] === 'mission' || parts[0] === 'releases') return {mode:parts[0]};
  return {mode:'home'};
}
const PAGE_OPEN = {home:() => openHome(), library:r => openLibrary(r), topics:() => openTopics(), articles:r => r.id ? openArticle(r) : openArticles(), mission:() => openMission(), releases:() => openReleases()};
const nav = (h, replace=false) => { if(location.pathname + location.search !== h) history[replace ? 'replaceState' : 'pushState'](null, '', h); route(); };
let routing = Promise.resolve();
addEventListener('popstate', () => route());
function route(){
  const r = parseHash();
  routing = routing.then(() => r.mode === 'book' ? openBook(r) : r.mode === 'topic' ? openTopic(r) : PAGE_OPEN[r.mode](r)).catch(e => { console.error(e); flashWhere('That page could not be loaded. Check your connection and try again.'); });
}
function setMode(m){ ['lib','book','topic'].forEach(x => document.body.classList.toggle('mode-'+x, x===m)); hideTip(); if(!modal.hidden) closeModal();
  delete document.body.dataset.page; $('leaf').className = 'leaf'; document.querySelectorAll('#siteNav a[aria-current]').forEach(a => a.removeAttribute('aria-current')); }

/* ---------- the site's own pages: home, the scrolls, articles, mission, releases ---------- */
const SITE_PAGES = {home:'Home', library:'The scrolls', topics:'Topics', articles:'Articles', mission:'Mission', releases:'Releases'};
const STATUS = {reviewed:'Plain English, notes, reviewed', draft:'Plain English and notes (in review)', text:'Original and English texts'};
const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
const fmtDate = d => d ? new Date(d + 'T12:00:00').toLocaleDateString('en-US', {year:'numeric', month:'long', day:'numeric'}) : '';
function sitePage(page, title){
  setMode('lib'); CTX = null; document.body.dataset.page = page; $('leaf').className = 'leaf site';
  document.title = title ? `${title} · Codex Collection` : 'Codex Collection: Read the words. Understand the world. Decide for yourself.';
  where.textContent = SITE_PAGES[page];
  document.querySelectorAll('#siteNav a').forEach(a => a.dataset.page === page ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
}
function pageDone(){ linkify($('leaf')); smartQuotes($('leaf')); $('article').scrollTop = 0; }
/* the passage-and-topic search, wherever a page offers it */
function wireSearch(){
  const q = $('q'), res = $('qres'); if(!q) return;
  const run = () => { const s = q.value.trim(); res.innerHTML = s ? searchResults(s) : ''; };
  q.addEventListener('input', run);
  q.addEventListener('keydown', e => { if(e.key === 'Enter'){ const f = res.querySelector('[data-link]'); if(f) nav(f.dataset.link); } });
  run();
}
const searchBox = (val = '') => `<div class="search"><input id="q" type="search" placeholder="Go to a passage or topic: John 3:16, Ruth 2, covenant…" aria-label="Go to a passage or topic" value="${esc(val)}"></div><ul class="results" id="qres"></ul>`;
const groupOf = id => { const g = CAT.groups.find(g => g.books.some(([b]) => b === id)); return g ? g.name : ''; };
const scrollCard = (b, grp = true) => { const w = b.t === 'X' ? workOf(b.id) : null;
  return `<button class="scard st-${b.status}${w ? ' x w-' + w.tier : ''}" data-book="${b.id}"${w ? ` data-tag="${TIER[w.tier].tag}"` : ''}>
    ${grp ? `<span class="scard-grp">${esc(groupOf(b.id))}</span>` : ''}<b>${b.name}</b>
    <small>${b.vc.length} chapter${b.vc.length > 1 ? 's' : ''} · ${b.status === 'text' ? 'original & English texts' : b.status === 'draft' ? 'translated, in review' : 'translated & reviewed'}</small></button>`; };
const articleCard = a => `<a class="acard" href="/articles/${a.id}"><span class="adate">${fmtDate(a.date)}${a.draft ? ' · <b class="draft">Draft</b>' : ''}</span><h3>${a.title}</h3>${a.summary ? `<p>${a.summary}</p>` : ''}<span class="more">Read the article →</span></a>`;
const NO_ARTICLES = `<div class="empty"><p>The first studies are being written. Articles will take one question, theme or passage at a time, drawing on the whole collection.</p></div>`;
const REL_KIND = {new:'New', revised:'Revised', topic:'Topic', article:'Article', site:'Site', removed:'Offline'};
const releaseItems = (r, max) => { const xs = max ? r.items.slice(0, max) : r.items;
  return `<ul class="ritems">${xs.map(x => `<li><span class="rk rk-${x.kind}">${REL_KIND[x.kind]}</span><span>${x.link ? `<a href="${x.link}">${x.text}</a>` : x.text}</span></li>`).join('')}</ul>${max && r.items.length > max ? `<p class="small muted">and ${r.items.length - max} more</p>` : ''}`; };

/* home: what the collection is, a verse at work, where to start, and what's new */
let SAMPLE = null;
function sampleCard(s){
  /* highlight the notes' phrases in the verse; where two overlap, the shorter (more specific) one wins */
  const spans = [];
  s.notes.map((n, i) => ({i, at:s.text.indexOf(n.a), len:n.a.length})).filter(x => x.at >= 0).sort((a, b) => a.len - b.len)
    .forEach(x => { if(!spans.some(y => x.at < y.at + y.len && y.at < x.at + x.len)) spans.push(x); });
  spans.sort((a, b) => a.at - b.at); let h = '', at = 0;
  spans.forEach(x => { h += esc(s.text.slice(at, x.at)) + `<span class="nt t-${s.notes[x.i].type}" role="button" tabindex="0" data-sample="${x.i}">${esc(s.text.slice(x.at, x.at + x.len))}</span>`; at = x.at + x.len; });
  h += esc(s.text.slice(at));
  const [bk, cv] = s.ref.split(' '), [c, v] = cv.split(':');
  return `<aside class="sample" aria-label="An example verse with its notes">
    <div class="sample-head"><span>See it at work</span><b>${esc(s.name)}</b></div>
    <p class="sample-verse">${h}</p>
    <div class="sample-notes">${s.notes.map((n, i) => `<button class="snote t-${n.type}" data-sample="${i}" aria-pressed="false"><i></i>${n.t}</button>`).join('')}</div>
    <div class="sample-body" id="sampleBody" aria-live="polite"></div>
    <a class="btn ghost" href="/${bk}/${c}/${v}">Read ${esc(s.name)} in context →</a>
  </aside>`;
}
function showSample(i){
  const n = SAMPLE && SAMPLE.notes[i], box = $('sampleBody'); if(!n || !box) return;
  document.querySelectorAll('[data-sample]').forEach(b => { b.classList.toggle('on', +b.dataset.sample === i); if(b.tagName === 'BUTTON') b.setAttribute('aria-pressed', String(+b.dataset.sample === i)); });
  box.innerHTML = `<div class="sample-kind"><i style="--c:var(--n-${n.type})"></i>${NOTE_TYPES[n.type].label}${n.kind ? ` · ${KIND[n.kind]}` : ''}</div>
    <h4>${n.t}</h4>${n.orig ? `<div class="gk">${n.orig}</div>` : ''}<p>${n.p}</p>`;
  smartQuotes(box);
}
async function openHome(){
  const [H, arts, rels] = await Promise.all([load('pages/home.json'), load('articles/index.json').catch(() => []), load('releases.json').catch(() => [])]);
  sitePage('home'); SAMPLE = H.sample || null;
  const done = CAT.books.filter(b => b.status !== 'text'), bible = done.filter(b => b.t !== 'X').length, beyond = done.length - bible;
  const [lead, ...more] = H.lead.split(/(?<=<\/p>)\s*/);
  const stats = [[bible, 'of the 66 books of the Bible translated'], [beyond, beyond === 1 ? 'writing from beyond the Bible' : 'writings from beyond the Bible'], [Object.keys(TIDX).length, 'topic pages across the collection']];
  $('leaf').innerHTML = `
    <section class="hero${SAMPLE ? '' : ' solo'}">
      <div class="hero-text">
        <picture class="hero-logo"><source media="(max-width:700px)" srcset="img/logo-square.webp" width="640" height="618"><img src="img/logo-wide.webp" width="1040" height="337" alt="Codex Collection: ancient writings, clear translations, deeper understanding"></picture>
        <h1 class="tagline">${H.title.split(/(?<=\.)\s+/).map(l => `<span>${esc(l)}</span>`).join(' ')}</h1>
        <div class="lede">${lead}</div>
        <div class="ctas"><a class="btn" href="/library">Browse the scrolls</a><a class="btn ghost" href="/mission">Our mission</a></div>
        ${searchBox()}
      </div>
      ${SAMPLE ? sampleCard(SAMPLE) : ''}
    </section>
    <section class="stats">${stats.map(([n, l]) => `<div><b>${n}</b><span>${l}</span></div>`).join('')}</section>
    <section class="band">
      ${more.length ? `<div class="prose intro">${more.join('')}</div>` : ''}
      <div class="cards3">${H.cards.map((c, i) => `<article class="pcard"><div class="pnum">${ROMAN[i]}</div><h3>${c.h}</h3>${c.html}</article>`).join('')}</div>
    </section>
    ${H.start.length ? `<section class="band"><div class="sechead"><h2>Start reading</h2><a class="more" href="/library">All the scrolls →</a></div>
      <div class="scrolls start">${H.start.map(id => scrollCard(BYID[id])).join('')}</div></section>` : ''}
    <section class="band split">
      <div><div class="sechead"><h2>Articles</h2><a class="more" href="/articles">All articles →</a></div>${arts.length ? `<div class="alist">${arts.slice(0, 3).map(articleCard).join('')}</div>` : NO_ARTICLES}</div>
      <div><div class="sechead"><h2>What's new</h2><a class="more" href="/releases">All releases →</a></div>${rels[0] ? `<div class="rcard"><span class="adate">${fmtDate(rels[0].date)}</span><h3>${rels[0].title}</h3>${rels[0].summary ? para(rels[0].summary) : ''}${releaseItems(rels[0], 5)}</div>` : '<div class="empty"><p>Release notes will appear here with each update.</p></div>'}</div>
    </section>
    <section class="band closing"><p>Translated from the Leningrad Codex, the SBL Greek New Testament and the other best-available texts, with every source named. <a href="/mission">How the collection is made →</a></p></section>`;
  wireSearch(); pageDone();
  if(SAMPLE){ const w = SAMPLE.notes.findIndex(n => n.type === 'word'); showSample(w < 0 ? 0 : w); }
}

/* the scrolls: every book and writing, by group */
function openLibrary(r){
  sitePage('library', 'The scrolls');
  const done = CAT.books.filter(b => b.t !== 'X' && b.status !== 'text').length;
  const groups = CAT.groups.map(g => [g, g.t === 'X' ? g.books.filter(([id]) => BYID[id].status !== 'text') : g.books]).filter(([, bs]) => bs.length);
  $('leaf').innerHTML = `<header class="pagehead"><div class="cart study">The scrolls</div><h1>Every writing in the collection</h1>
    <p class="lede">Each book is a scroll. Inside, every chapter has a commentary page beside its text, with color-coded notes woven in and every reference clickable. ${done} of the 66 books have the Plain English translation so far; the rest have the original and English texts.</p>
    ${searchBox(r.q)}</header>
    <nav class="grpnav" aria-label="Jump to a group">${groups.map(([g], i) => `<button data-jump="g-${i}">${g.name.replace(/:.*$/, '')}</button>`).join('')}</nav>
    <p class="legend"><span><i style="--c:var(--olive)"></i>${STATUS.reviewed}</span><span><i style="--c:var(--ochre)"></i>${STATUS.draft}</span><span><i style="--c:var(--ink-2);border-style:dashed"></i>${STATUS.text}</span></p>
    ${groups.map(([g, bs], i) => { const n = bs.filter(([id]) => BYID[id].status !== 'text').length;
      return `<section class="grp" id="g-${i}"><div class="sechead"><h2>${g.name}</h2>${g.t === 'X' ? '' : `<span class="count">${n} of ${bs.length} translated</span>`}</div>
      ${g.t === 'X' ? `<p class="small muted">These writings are not among the 66 books every Christian Bible shares. Each one's first pages say who accepts it, where it came from and how to read it.</p>` : ''}
      <div class="scrolls">${bs.map(([id]) => scrollCard(BYID[id], false)).join('')}</div></section>`; }).join('')}
    <section class="grp about"><p class="small">Looking for a subject rather than a book? <a href="/topics">Browse the ${Object.keys(TIDX).length} topic pages →</a></p></section>
    <section class="grp about"><h2>About the texts</h2><p class="small">Hebrew: the Leningrad Codex (the oldest complete Hebrew Bible, AD 1008) as edited by STEPBible's TAHOT, with its Ketiv and Qere readings and other manuscript witnesses marked. Greek: the SBL Greek New Testament, compared with the Byzantine majority text (Robinson-Pierpont 2018) and the Textus Receptus behind the KJV. Where the manuscripts differ in a way that matters, the text is marked <span class="vr" style="cursor:default">like this</span>: open it to see each reading, where it comes from, and why one was chosen, and switch the verse to the other reading. English: Berean Standard Bible (CC0), KJV, World English Bible, ASV and Young's Literal Translation (public domain). Word-by-word data from STEPBible (Tyndale House, Cambridge), CC BY 4.0. Cross references from OpenBible.info, CC BY.</p></section>`;
  wireSearch(); smartQuotes($('leaf')); $('article').scrollTop = 0;
}

/* the topics: every topic page, by kind, with a filter that searches titles, other names and the opening lines */
const TOPIC_KINDS = {Ideas:'Beliefs and themes traced through the whole collection.', People:'The people of the Bible and the writings around it.',
  Places:'Lands, cities and landmarks, with what happened there.', Events:'What happened, and how each book tells it.',
  Symbols:'Images and signs, where they come from and what they mean.', Words:'Key Hebrew and Greek words, and how they are translated.',
  Studies:'Longer studies of a question that crosses many books.'};
function openTopics(){
  sitePage('topics', 'Topics');
  const bare = t => t.replace(/^[^\p{L}\d]+/u, ''), ids = Object.keys(TIDX).sort((a, b) => bare(TIDX[a][0]).localeCompare(bare(TIDX[b][0])));
  const kinds = Object.keys(TOPIC_KINDS).filter(k => ids.some(id => TIDX[id][1] === k));
  const card = id => { const [title, kind, lead, , books] = TIDX[id];
    return `<button class="tcard" data-topic="${id}" style="--kc:var(--k-${kind})"><b>${title}</b>${lead ? `<span>${esc(lead)}</span>` : ''}<small>${(books || []).length ? `${books.length} book${books.length > 1 ? 's' : ''}` : ''}</small></button>`; };
  $('leaf').innerHTML = `<header class="pagehead"><div class="cart study">Topics</div><h1>One page for every subject</h1>
    <p class="lede">Each topic gathers everything the collection says about one subject, from every book, in one place. Open a topic from a passage and it shows what relates to that passage first, with a switch for the whole page.</p>
    <div class="search"><input id="tq" type="search" placeholder="Find a topic: covenant, Moses, Jerusalem…" aria-label="Find a topic"></div></header>
    <nav class="grpnav" aria-label="Jump to a kind of topic">${kinds.map(k => `<button data-jump="k-${k}" style="--kc:var(--k-${k})"><i></i>${k} <small>${ids.filter(id => TIDX[id][1] === k).length}</small></button>`).join('')}</nav>
    <p class="muted small" id="tnone" hidden>No topic matches. Try another word, or search for a passage on the <a href="/library">scrolls page</a>.</p>
    ${kinds.map(k => `<section class="grp tkind" id="k-${k}"><div class="sechead"><h2 style="color:var(--k-${k})">${k}</h2><span class="count">${TOPIC_KINDS[k]}</span></div>
      <div class="tcards">${ids.filter(id => TIDX[id][1] === k).map(card).join('')}</div></section>`).join('')}`;
  $('tq').addEventListener('input', e => { const s = e.target.value.trim().toLowerCase(); let any = false;
    $('leaf').querySelectorAll('.tkind').forEach(sec => { let n = 0;
      sec.querySelectorAll('[data-topic]').forEach(b => { const t = TIDX[b.dataset.topic];
        b.hidden = !!s && ![t[0], t[2], ...(t[3] || [])].some(x => String(x || '').toLowerCase().includes(s)); if(!b.hidden) n++; });
      sec.hidden = !n; any = any || !!n; });
    $('tnone').hidden = any; });
  smartQuotes($('leaf')); $('article').scrollTop = 0;
}

async function openMission(){
  const M = await load('pages/mission.json'); sitePage('mission', 'Our mission');
  $('leaf').innerHTML = `<article class="post"><header class="pagehead"><div class="cart study">${esc(M.kicker || 'Our mission')}</div><h1>${M.title}</h1></header>
    <div class="prose">${M.html}</div>
    <div class="ctas"><a class="btn" href="/library">Browse the scrolls</a><a class="btn ghost" href="/articles">Read the articles</a></div></article>`;
  pageDone();
}
async function openArticles(){
  const arts = await load('articles/index.json'); sitePage('articles', 'Articles');
  $('leaf').innerHTML = `<header class="pagehead"><div class="cart study">Articles</div><h1>Studies and analysis</h1>
    <p class="lede">Longer looks at one question, theme or passage at a time, drawing on the whole collection. Like everything here, each one shows its evidence and names its sources, so you can check them.</p></header>
    ${arts.length ? `<div class="alist wide">${arts.map(articleCard).join('')}</div>` : NO_ARTICLES}`;
  pageDone();
}
async function openArticle(r){
  const idx = await load('articles/index.json');
  if(!idx.some(a => a.id === r.id)){ sitePage('articles', 'Article not found'); $('leaf').innerHTML = `<header class="pagehead"><h1>Article not found</h1><p><a class="btn ghost" href="/articles">All articles</a></p></header>`; return; }
  const a = await load(`articles/${r.id}.json`); sitePage('articles', a.title);
  $('leaf').innerHTML = `<article class="post"><a class="back" href="/articles">← All articles</a>
    <header class="pagehead"><div class="cart study">Article${a.draft ? ' · draft' : ''}</div><h1>${a.title}</h1><p class="byline">${a.author ? esc(a.author) + ' · ' : ''}${fmtDate(a.date)}</p></header>
    <div class="prose">${a.html}</div>
    ${a.books.length ? `<h3>In the collection</h3><div class="scrolls">${a.books.map(id => scrollCard(BYID[id])).join('')}</div>` : ''}
    ${a.topics.length ? `<h3>Topics</h3>${topicChips(a.topics)}` : ''}
    ${a.sources.length ? `<h3>Sources</h3><ul class="srcs">${a.sources.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}</article>`;
  pageDone();
}
async function openReleases(){
  const rels = await load('releases.json'); sitePage('releases', 'Releases');
  $('leaf').innerHTML = `<header class="pagehead"><div class="cart study">Releases</div><h1>What's new</h1>
    <p class="lede">Each time the collection is updated, this page lists what you'll find new or changed: new scrolls, revised translations, new notes, topics and articles.</p></header>
    ${rels.length ? `<ol class="rlist">${rels.map(r => `<li class="rel"><div class="rdate">${fmtDate(r.date)}</div><div class="rcard"><h3>${r.title}</h3>${r.summary ? para(r.summary) : ''}${releaseItems(r)}</div></li>`).join('')}</ol>` : '<div class="empty"><p>Release notes will appear here with each update.</p></div>'}`;
  pageDone();
}
function searchResults(s){
  const out = []; const refs = RF.findRefs(s, null, false);
  refs.slice(0,3).forEach(r => out.push(`<li><button class="linkish" data-link="/${r.book}/${r.c}${r.v!=null?'/'+r.v:''}">${refName(r)}</button></li>`));
  const low = s.toLowerCase();
  CAT.books.filter(b => b.name.toLowerCase().startsWith(low)).slice(0,4).forEach(b => out.push(`<li><button class="linkish" data-link="/${b.id}">${b.name}</button> <span class="small muted">${STATUS[b.status]}</span></li>`));
  Object.entries(TIDX).filter(([id, t]) => t[0].toLowerCase().includes(low) || (t[3]||[]).some(a => a.toLowerCase().includes(low))).slice(0,12)
    .forEach(([id, t]) => out.push(`<li><button class="linkish" data-link="/topic/${id}">${t[0]}</button> <span class="small muted">${t[1]} · ${esc(t[2].slice(0,110))}${t[2].length>110?'…':''}</span></li>`));
  return out.join('') || `<li class="muted">Nothing found. Try a book and chapter, like "Genesis 12".</li>`;
}

/* ---------- a book ---------- */
let B = null;            // {id, meta, data (or null for text-only), pages, ...}
const sheet = $('sheet'), track = $('track');
let els = [], pages = [], IDX = {};
const VERS = {
  plain:{name:'Plain English', short:'Plain English'}, bsb:{name:'Berean Standard Bible', short:'BSB'}, kjv:{name:'King James Version (1769 text)', short:'KJV'},
  web:{name:'World English Bible', short:'WEB'}, asv:{name:'American Standard Version (1901)', short:'ASV'}, ylt:{name:'Young’s Literal Translation (1898)', short:'YLT'},
  wlc:{name:'Hebrew: Leningrad Codex (Masoretic Text)', short:'Hebrew'},
  hw:{name:'Hebrew word by word, with meanings', short:'Hebrew words'},
  sbl:{name:'Greek: SBL Greek New Testament', short:'Greek (SBL)'}, byz:{name:'Greek: Byzantine majority text (RP 2018)', short:'Greek (Byzantine)'}, gw:{name:'Greek word by word, with meanings', short:'Greek words'}
};
const TNOTE = {
  plain:id => `Plain English translation written for this site from the ${BYID[id].t==='OT'?'Hebrew Masoretic Text (Leningrad Codex)':BYID[id].t==='X'?(BYID[id].orig_name||'original text'):'Greek SBL Greek New Testament'}. Underlined words open notes; marked words (⁂) open manuscript differences.`,
  bsb:() => 'Berean Standard Bible, dedicated to the public domain (CC0) in 2023.',
  kjv:() => 'Words in <i>italics</i> were added by the KJV translators to make the English read smoothly, as in printed KJV Bibles.',
  web:() => 'World English Bible, public domain.', asv:() => 'American Standard Version, 1901, public domain.', ylt:() => 'Young’s Literal Translation, 1898, public domain.',
  wlc:() => 'The Leningrad Codex (AD 1008), the oldest complete Hebrew Bible, from the Westminster Leningrad Codex via OpenScriptures and STEPBible’s TAHOT (CC BY 4.0). Where the scribes’ marginal reading (Qere) differs from the written text (Ketiv), the Qere is shown, as translators follow it.',
  hw:() => 'Hebrew words and meanings from STEPBible’s TAHOT, Tyndale House, Cambridge, CC BY 4.0. Point at a word for its dictionary form, Strong’s number and grammar. Words outlined in purple differ in some manuscripts (Ketiv/Qere or other witnesses).',
  sbl:() => 'SBL Greek New Testament, © 2010 Society of Biblical Literature and Logos Bible Software, CC BY 4.0.',
  byz:() => 'The New Testament in the Original Greek: Byzantine Textform, Robinson and Pierpont, 2018 edition, public domain. It follows the majority of later manuscripts, the family behind the Textus Receptus and the KJV.',
  gw:() => 'Greek words and meanings from STEPBible’s TAGNT, Tyndale House, Cambridge, CC BY 4.0. Faded words are not in the critical text (NA28/SBL); point at any word to see which editions have it.'
};
const ED_NAMES = {N:'NA28', n:'NA27', S:'SBL', Y:'Tyndale House', W:'Westcott-Hort', G:'Tregelles', T:'Textus Receptus', B:'Byzantine'};

async function openBook(r){
  const meta = BYID[r.id];
  if(!B || B.id !== r.id){
    setMode('book'); where.textContent = `Opening ${meta.name}…`; sheet.innerHTML = '';
    const [data, atlas, base] = await Promise.all([meta.status !== 'text' ? load(`books/${r.id}.json`) : null,
      meta.atlas ? load(`atlas/${r.id}.json`).catch(() => null) : null, meta.atlas ? load('atlas/basemap.json').catch(() => null) : null]);
    B = {id:r.id, meta, data, atlas:atlas && base ? Object.assign(atlas, {base}) : null}; CTX = B; prepBook(B); buildPages(); layoutNow(); applyBookUI();
    document.title = `${meta.name} · Codex Collection`;
  } else setMode('book');
  let target = r.page && IDX[r.page] !== undefined ? r.page : r.c ? (B.data ? (r.v != null ? `t${r.c}` : `c${r.c}`) : `t${r.c}`) : 'intro';
  if(IDX[target] === undefined) target = 'intro';
  scrollToIdx(IDX[target], false);
  sync(true);
  if(r.v != null) setTimeout(() => flashVerse(`${r.c}:${r.v}`), 60);
}
function prepBook(b){
  const d = b.data; b.ver = b.ver || store.get('ver-' + b.meta.t) || (d ? 'plain' : 'bsb');
  b.lenses = [];
  if(b.meta.about) for(const [k, a] of Object.entries(b.meta.about)){ VERS[k] = {name:a.name, short:a.short}; TNOTE[k] = () => a.note; }
  const others = b.meta.t === 'X' ? (b.meta.texts || []) : ['bsb','kjv','web','asv','ylt', ...(b.meta.t==='OT' ? ['wlc','hw'] : ['sbl','byz','gw'])];
  if(!d){ if(!others.includes(b.ver)) b.ver = others[0]; b.vers = others; return; }
  b.vers = ['plain', ...others];
  d.notes.forEach((n, i) => { n.id = i; n.c = +n.v.split(':')[0]; });
  d.variants.forEach((x, i) => { x.id = i; x.pick = x.follow || 0; });
  b.NAT = {}; d.notes.forEach(n => (b.NAT[n.v] = b.NAT[n.v] || []).push(n));
  b.VAT = {}; d.variants.forEach(x => (b.VAT[x.v] = b.VAT[x.v] || []).push(x));
  b.GAT = {}; d.glosses.forEach(g => (b.GAT[g.v] = b.GAT[g.v] || []).push(g));
  b.lenses = (d.book.lenses || []);
  b.SETS = settingsOf(d, b.id); b.SAT = {}; b.SETS.forEach(x => b.SAT[x.start] = x);
}
/* who first heard (or read) each passage, and why: the chapters' "settings", with the verses each covers */
function settingsOf(d, id){
  return d.chapters.flatMap(c => c.settings || []).map((x, i) => { const r = RF.findRefs(x.v, id, true)[0];
    const keys = r ? RF.refVerses(r, 10000).map(k => k.slice(k.indexOf(' ') + 1)) : [];
    return Object.assign({}, x, {i, keys:new Set(keys), start:keys[0]}); });
}
const settingRows = x => [['By', x.by], ['First for', x.to], ['When', x.when], ['Why', x.why], ['For the book’s readers', x.readers]].filter(r => r[1]).map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
const viewParas = vs => (vs||[]).map(([t,b]) => `<p><b>${t}.</b> ${b}</p>`).join('');
function settingCard(x){
  return `<div class="box setting"><div class="tag">Who heard it, and why <i>${x.v}</i></div><h5>${x.what}</h5><dl class="facts">${settingRows(x)}</dl>${viewParas(x.views)}<div class="acts"><button class="pill" data-verse="${x.start}">Go to ${x.v} in the text</button></div></div>`;
}
function settingView(i){
  const x = B.SETS[i];
  const h = `<h3 id="mtitle">${x.what}</h3><p class="small muted">${B.meta.name} ${x.v}</p><dl class="facts">${settingRows(x)}</dl>${viewParas(x.views)}${srcList(x.s)}<div class="acts"><button class="pill" data-verse="${x.start}">Go to ${x.v} in the text</button></div>`;
  return {c:'var(--n-setting)', type:'Who heard it, and why', html:h};
}

/* pages of a book */
const page = (id, label, html, cls='') => pages.push({id, label, cls, html});
function buildPages(){
  pages = []; const b = B, d = b.data, name = b.meta.name;
  if(!d){
    page('intro', name, `<div class="cart study">A scroll in the library</div><h1>${name}</h1>
      <p class="lede">The Plain English translation, notes and commentary for ${name} have not been written yet. You can already read the book in five English translations and in the original ${b.meta.t==='OT'?'Hebrew':'Greek'}, word by word, with every cross reference.</p>
      <p>Choose a translation from <b>Text</b> at the top. Click a verse number for that verse in every translation, its cross references, and the places this site discusses it.</p>
      <p><button class="pill" data-go="t1">Start reading chapter 1 →</button></p>
      <p class="links"><b>Compare</b>${['NIV','ESV','NASB','NLT','CSB'].map(v=>ext(bgURL(name+' 1',v),v)).join('')}</p>`);
    b.meta.vc.forEach((n, i) => page(`t${i+1}`, `${name} ${i+1}`, textPage(i+1), 'text'));
  } else {
    const bk = d.book;
    page('intro', name, introPage(bk));
    if(b.meta.t === 'X' && bk.canon) page('canon', 'Is this Scripture?', canonPage(bk.canon));
    (bk.pages || []).forEach(p => page(p.id, p.label, `<div class="pagehtml">${p.html}</div>`));
    if(d.chapters.length > 1) page('contents', 'Contents', `<div class="cart study">Contents</div><h2>The Chapters of ${name}</h2>
      <ul class="outline">${d.chapters.map(c => `<li><b>${name.replace(/^Psalms$/,'Psalm')} ${c.n}</b><span><button class="linkish" data-go="c${c.n}">${c.title}</button></span></li>`).join('')}</ul>`);
    if(pages.length % 2) page('texts', 'About the texts', textsPage());
    d.chapters.forEach(c => { page(`c${c.n}`, `${name} ${c.n}: ${c.title}`, chapterPage(c)); page(`t${c.n}`, `${name} ${c.n}: the text`, textPage(c.n), 'text'); });
    studyPages(bk);
  }
  if(pages.length % 2) page('end', 'The end', `<div class="cart study">End of the scroll</div><h2>${name}</h2><p class="lede">You have reached the end of ${name}.</p>${nextBookBtn()}`);
  sheet.innerHTML = pages.map(p => `<section class="page ${p.cls}" id="pg-${p.id}" aria-label="${esc(p.label)}">${p.html}</section>`).join('');
  els = [...sheet.children]; IDX = {}; pages.forEach((p, i) => IDX[p.id] = i);
  els.forEach(el => { if(!el.classList.contains('text')) { linkify(el); smartQuotes(el); } });
  b.rendered = new Set();
}
function textsPage(){
  const he = B.meta.t === 'OT';
  return `<div class="cart study">The texts</div><h2>About the Texts</h2>
    <p class="lede">The Plain English is translated directly from the ${he ? 'Hebrew' : 'Greek'}. Use <b>Text</b> at the top to read the same chapter in another translation or in the original.</p>
    ${B.vers.map(v => `<div class="card"><h4>${VERS[v].name}</h4><p class="small">${TNOTE[v](B.id)}</p></div>`).join('')}`;
}
function nextBookBtn(){ const i = CAT.books.findIndex(x => x.id === B.id), n = CAT.books[i+1]; return n ? `<p><button class="pill" data-book="${n.id}">Next book: ${n.name} →</button></p>` : ''; }
function introPage(bk){
  const d = B.data, name = B.meta.name;
  let h = `<div class="cart study">A study scroll</div><h1>${bk.title || name}</h1>${tierBand()}`;
  if(bk.subtitle) h += `<p class="hand muted" style="font-size:1.1rem;margin-top:4px">${bk.subtitle}</p>`;
  if(bk.svg) h += bk.svg;
  h += (bk.lead || []).map((p, i) => `<p${i===0?' class="lede"':''}>${p}</p>`).join('');
  if((bk.facts||[]).length) h += `<dl class="facts">${bk.facts.map(([k,v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  if(bk.audience) h += `<h3>Who it was written for, and why</h3><dl class="facts"><dt>Written for</dt><dd>${bk.audience.to}</dd><dt>Why</dt><dd>${bk.audience.why}</dd></dl>${(bk.audience.views||[]).map(([k,v]) => `<div class="card"><h4>${k}</h4><p class="small">${v}</p></div>`).join('')}${srcList(bk.audience.s)}`;
  if((bk.authorship||[]).length) h += `<h3>Who wrote it, and when</h3>` + bk.authorship.map(([k,v]) => `<div class="card"><h4>${k}</h4><p class="small">${v}</p></div>`).join('');
  if((bk.outline||[]).length) h += `<h3>The shape of the book</h3><ul class="outline">${bk.outline.map(([r,t]) => `<li><b>${r}</b><span>${t}</span></li>`).join('')}</ul>`;
  if(B.lenses.length) h += `<h3>Ways of reading ${name}</h3><ul class="views">${B.lenses.map((l,i) => `<li data-k="${l.k}">${lensGlyph(i)}<b>${l.name}</b><span>${l.desc}</span></li>`).join('')}</ul><p class="small">Use the view buttons at the top to highlight one way of reading across every chapter.</p>`;
  if((bk.traditions||[]).length) h += `<h3>Where Christians differ</h3>` + tradCards(bk.traditions);
  (bk.sections || []).forEach(s => h += `<h3>${s.h}</h3>${para(s.b)}`);
  (bk.spec || []).forEach(s => h += specCard(s));
  h += `<h3>How to read this scroll</h3><p class="small">Every chapter has two pages: a <b>commentary</b> page (summary, key verse, ways of reading, and deeper notes) and the <b>text</b>. On a wide screen you see both at once; on a phone, swipe from one to the next. The top row jumps to any chapter; the second row lists the <b>topics</b> in the chapter you are reading. Click any verse number for that verse in every translation, its cross references, and everywhere this site discusses it.</p>
    <ul class="types">${Object.entries(NOTE_TYPES).filter(([k]) => k !== 'canon' || B.meta.t === 'X').map(([k,t])=>`<li><i style="background:color-mix(in srgb, ${t.color} 18%, transparent)"></i><span><span class="u t-${k}" style="text-decoration-color:${t.color}">${t.label}</span>: ${NOTE_DESC[k]}.</span></li>`).join('')}
    <li><i style="background:color-mix(in srgb, var(--n-variant) 18%, transparent)"></i><span><span class="vr" style="cursor:default">Manuscript difference</span>: the ancient copies disagree here. Open it to see each reading, where it comes from, and why one was chosen.</span></li></ul>
    <p class="small"><b>Today's words.</b> Some phrases only made sense in the ancient world. In the Plain English text these carry a small handwritten line underneath, like <span class="gl" style="--gn:18"><span class="gl-o">a kinsman-redeemer</span><span class="gl-m">a family rescuer</span></span>. The top line is the translation; the line underneath is a loose modern way to get the point across. Hide them with the "Today's words" button.</p>`;
  if((bk.topics||[]).length) h += `<h3>Big topics</h3>${topicChips(bk.topics)}`;
  h += linksRow(bk.links);
  return h;
}
/* "Where Christians differ": one question, each tradition's answer beside the others */
const tradAt = ([b, c]) => `${BYID[b].name}${c ? ' ' + c : ''}`, tradPath = ([b, c]) => `/${b}${c ? '/' + c : ''}`;
const tradCards = list => (list || []).map(x => `<div class="box trad"><div class="tag">Where Christians differ</div><h5>${x.q}</h5><dl class="facts">${x.views.map(([k, v, s]) => `<dt>${k}</dt><dd>${v}${s && s.length ? srcList(s) : ''}</dd>`).join('')}</dl>${srcList(x.s)}`
  + ((x.also||[]).length || x.top ? `<p class="small also">${(x.also||[]).length ? `Asked again at ${x.also.map(a => `<button class="linkish" data-link="${tradPath(a)}" title="${esc(a[2])}">${tradAt(a)}</button>`).join(', ')}. ` : ''}${x.top && B.data.topics[x.top] ? `Topic: <button class="linkish" data-topic="${x.top}">${B.data.topics[x.top][0]}</button>` : ''}</p>` : '') + `</div>`).join('');
function viewsList(c){
  if(!c.views || !B.lenses.length) return '';
  const L = B.lenses.map((l,i) => [l,i]).filter(([l]) => c.views[l.k]);
  return L.length ? `<h3>Ways of reading this chapter</h3><ul class="views">${L.map(([l,i]) => `<li data-k="${l.k}">${lensGlyph(i)}<b>${l.name}</b><span>${c.views[l.k]}</span></li>`).join('')}</ul>` : '';
}
function chapterPage(c){
  const d = B.data, name = B.meta.name, key = c.key || `${c.n}:1`;
  let h = `<div class="cart">${chName(c.n)}</div><h2>${c.title}</h2>`;
  if(c.svg) h += c.svg + (c.caption ? `<p class="caption">${c.caption}</p>` : '');
  h += (c.sum||[]).map((p,i) => `<p${i===0?' class="lede"':''}>${p}</p>`).join('');
  h += `<p><button class="pill tolink" data-go="t${c.n}">Read the text${B.meta.vc.length > 1 ? ' of chapter ' + c.n : ''} →</button></p>`;
  h += `<div class="verse"><div class="rub">Key verse · ${key}</div><div class="plain">${esc(plainOf(key))}</div><dl id="kv-${c.n}"></dl></div>`;
  const sets = (B.SETS || []).filter(x => x.start && +x.start.split(':')[0] === c.n);
  if(sets.length) h += `<h3>Who heard it, and why</h3>` + sets.map(settingCard).join('');
  if((c.readings||[]).length){ const icons = [ICON.lit, ICON.sym];
    h += `<div class="readings">${c.readings.slice(0,2).map(([t,b],i) => `<div><h4>${icons[i]||''}${t}</h4><p>${b}</p></div>`).join('')}</div>`;
    c.readings.slice(2).forEach(([t,b]) => h += `<h3>${t}</h3><p>${b}</p>`); }
  h += viewsList(c);
  h += tradCards(c.traditions);
  (c.deep || []).forEach(x => h += deepItem(x));
  if(c.echoes) h += `<p class="echoes reflist"><b>Connections</b> · ${c.echoes}</p>`;
  const tops = (d.chTopics[c.n] || []);
  if(tops.length) h += `<h3>Topics in this chapter</h3>${topicChips(tops)}`;
  h += atlasBlock(c.n);
  h += linksRow(c.links);
  return h;
}

/* the chapter's places, people and events from Bible Atlas, on a map sketched from Natural Earth outlines */
const ATLAS_URL = id => `https://bible-atlas.com/${encodeURIComponent(id)}`;
function atlasBlock(n){
  const A = B.atlas, ch = A && A.chapters[n]; if(!ch) return '';
  const places = ch.places.map(id => Object.assign({id}, A.places[id])), people = ch.people.map(id => Object.assign({id}, A.people[id])),
    events = ch.events.map(id => Object.assign({id}, A.events[id]));
  if(!places.length && !people.length && !events.length) return '';
  const unmap = new Set((ch.fixes || []).flatMap(f => f.unmap));
  const [x0, y0, x1, y1] = A.base.box, onMap = p => p.lat != null && !unmap.has(p.id) && p.lon >= x0 && p.lon <= x1 && p.lat >= y0 && p.lat <= y1;
  const mapped = places.filter(onMap), off = places.filter(p => !onMap(p));
  const year = d => d == null ? '' : d < 0 ? ` (about ${-d} BC)` : ` (about AD ${d})`;
  const links = (xs, f = x => '') => xs.map(x => ext(ATLAS_URL(x.id), esc(x.name) + f(x))).join(', ');
  let h = `<h3>Places and people in this chapter</h3>`;
  if(mapped.length) h += atlasMap(mapped);
  h += `<dl class="facts atlas">`;
  if(mapped.length) h += `<dt>On the map</dt><dd>${links(mapped)}</dd>`;
  if(off.length) h += `<dt>Not mapped</dt><dd>${links(off, p => p.lat == null ? ' (location unknown)' : unmap.has(p.id) ? ' (its Bible Atlas point is doubtful)' : ' (beyond this map)')}</dd>`;
  if(people.length) h += `<dt>People</dt><dd>${links(people)}</dd>`;
  if(events.length) h += `<dt>Events</dt><dd>${links(events, e => year(e.date))}</dd>`;
  h += `</dl>`;
  if((ch.fixes || []).length) h += `<details class="small"><summary>Bible Atlas links we changed here</summary>${ch.fixes.map(f => `<p>${[f.drop.length ? 'Left out ' + f.drop.map(esc).join(', ') : '', f.unmap.length ? 'No dot for ' + f.unmap.map(id => esc((A.places[id] || {}).name || id)).join(', ') : '', (f.moved || []).length ? 'Moved the dot for ' + f.moved.map(esc).join(', ') : '', (f.added || []).length ? 'Added ' + f.added.map(esc).join(', ') : ''].filter(Boolean).join('; ')}. ${f.why}</p>`).join('')}</details>`;
  return h + `<p class="small muted">Places, people and events as <a href="https://bible-atlas.com" target="_blank" rel="noopener">Bible Atlas</a> links them to this chapter, under its names (mostly the KJV’s). Each name opens its Bible Atlas page with maps, family trees and every verse. A dot marks one proposed site; many ancient places are identified only by tradition or by scholars’ best guess, and some are disputed. Map outlines: Natural Earth (today’s coastlines and rivers).</p>`;
}
function atlasMap(places){
  /* Bible Atlas sometimes gives several places one point (a city's gates, or a region's center for a site it cannot fix);
     they share one dot, named for the first, with the rest in its tooltip, rather than seeming to sit on top of each other */
  const groups = {}; places.forEach(p => (groups[p.lat + ',' + p.lon] = groups[p.lat + ',' + p.lon] || []).push(p));
  const A = B.atlas; A.uses = A.uses || Object.values(A.chapters).flatMap(c => c.places).reduce((u, id) => (u[id] = (u[id] || 0) + 1, u), {});
  const pts = Object.values(groups).map(g => { g.sort((p, q) => A.uses[q.id] - A.uses[p.id]);   // the point belongs to the place the book names most (Jerusalem, not its gates)
    return Object.assign({}, g[0], {all:g.map(p => p.name), label:g.length > 1 ? `${g[0].name} +${g.length - 1}` : g[0].name}); });
  const base = B.atlas.base, W = 480, H = 340, pad = .18;
  let [a, b, c, d] = [Math.min(...pts.map(p => p.lon)), Math.min(...pts.map(p => p.lat)), Math.max(...pts.map(p => p.lon)), Math.max(...pts.map(p => p.lat))];
  const mid = (b + d) / 2, k = Math.cos(mid * Math.PI / 180);
  let w = Math.max((c - a) * k, 3), hh = Math.max(d - b, 3);                // span in "flat" degrees: at least enough for a coast, lake or river to place a lone dot
  w *= 1 + 2*pad; hh *= 1 + 2*pad;
  if(w / hh > W / H) hh = w * H / W; else w = hh * W / H;
  const cx = (a + c) / 2, cy = mid, L = cx - w / 2 / k, R = cx + w / 2 / k, T = cy + hh / 2, Bm = cy - hh / 2;
  const X = lon => (lon - L) * k / w * W, Y = lat => (T - lat) / hh * H;
  /* a ring is drawn when its bounding box meets the view: a continent's outline can surround the view with no point inside it */
  const near = r => { let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
    for(const [x, y] of r){ if(x < x0) x0 = x; if(x > x1) x1 = x; if(y < y0) y0 = y; if(y > y1) y1 = y; }
    return x1 >= L - 2 && x0 <= R + 2 && y1 >= Bm - 2 && y0 <= T + 2; };
  const path = (r, close) => 'M' + r.map(([x, y]) => `${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join('L') + (close ? 'Z' : '');
  const land = base.land.filter(near).map(r => path(r, true)).join('');
  const lakes = base.lakes.filter(l => near(l.ring)).map(l => path(l.ring, true)).join('');
  const rivers = base.rivers.filter(r => near(r.line)).map(r => path(r.line, false)).join('');
  const water = {};                                  // one label per lake, beside its largest part (the Dead Sea has two basins)
  base.lakes.filter(l => near(l.ring)).forEach(l => { const xs = l.ring.map(q => X(q[0])), ys = l.ring.map(q => Y(q[1]));
    const size = Math.max(...xs) - Math.min(...xs) + Math.max(...ys) - Math.min(...ys);
    if(size > 30 && !(water[l.name] && water[l.name].size > size)) water[l.name] = {size, x:Math.max(...xs) + 4, y:(Math.min(...ys) + Math.max(...ys)) / 2}; });
  const fits = (n, w) => w.x >= 24 && w.x + n.length * 5.5 <= W - 24 && w.y >= 24 && w.y <= H - 24;   // inside the unfaded part of the map, or not at all
  const waterNames = Object.entries(water).filter(([n, w]) => fits(n, w)).map(([n, w]) => `<text class="water" x="${w.x.toFixed(1)}" y="${w.y.toFixed(1)}">${esc(n)}</text>`).join('');
  /* labels: try right, left, above, below each dot; a label that would collide is left off (the name is in the list and the tooltip) */
  const boxes = pts.map(p => [X(p.lon) - 4, Y(p.lat) - 4, X(p.lon) + 4, Y(p.lat) + 4]), hit = (q, r) => q[0] < r[2] && q[2] > r[0] && q[1] < r[3] && q[3] > r[1];
  const marks = pts.map(p => { const x = X(p.lon), y = Y(p.lat), tw = p.label.length * 6.2 + 4, th = 13;
    const tries = [[x + 6, y + 4, 'start', [x + 5, y - 8, x + 6 + tw, y + 5]], [x - 6, y + 4, 'end', [x - 6 - tw, y - 8, x - 5, y + 5]],
      [x, y - 8, 'middle', [x - tw/2, y - 8 - th, x + tw/2, y - 6]], [x, y + 16, 'middle', [x - tw/2, y + 5, x + tw/2, y + 18]]];
    const t = tries.find(([, , , r]) => r[0] >= 0 && r[2] <= W && r[1] >= 0 && r[3] <= H && !boxes.some(q => hit(q, r)));
    if(t) boxes.push(t[3]);
    return `<a href="${ATLAS_URL(p.id)}" target="_blank" rel="noopener"><title>${esc(p.all.length > 1 ? p.all.join(', ') + ' (one point on Bible Atlas)' : p.name)}</title><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.6"/>${t ? `<text x="${t[0].toFixed(1)}" y="${t[1].toFixed(1)}" text-anchor="${t[2]}">${esc(p.label)}</text>` : ''}</a>`; }).join('');
  const fid = 'sk' + Math.random().toString(36).slice(2, 7);
  return `<figure class="amap"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Map of the places in this chapter">
    <defs><filter id="${fid}" filterUnits="userSpaceOnUse" x="-8" y="-8" width="${W + 16}" height="${H + 16}"><feTurbulence type="fractalNoise" baseFrequency=".04" numOctaves="2" seed="7"/><feDisplacementMap in="SourceGraphic" scale="3"/></filter>
    <pattern id="${fid}h" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)"><path class="hatch" d="M0,3.5H7"/></pattern>
    <filter id="${fid}b" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="14"/></filter>
    <mask id="${fid}m"><rect x="26" y="26" width="${W-52}" height="${H-52}" rx="60" fill="#fff" filter="url(#${fid}b)"/></mask></defs>
    <g mask="url(#${fid}m)"><rect class="sea" width="${W}" height="${H}"/><rect width="${W}" height="${H}" fill="url(#${fid}h)"/>
    <g filter="url(#${fid})"><path class="land" d="${land}"/><path class="lake" d="${lakes}"/><path class="river" d="${rivers}"/></g>${waterNames}</g>
    <g class="pts">${marks}</g></svg></figure>`;
}
function studyPages(bk){
  const d = B.data, name = B.meta.name;
  const words = d.notes.filter(n => n.type === 'word');
  page('words', 'Translation watch', `<div class="cart study">Study page</div><h2>Translation Watch</h2>
    <p class="lede">Places in ${name} where a translation choice, a copying difference or a lost bit of history changes what readers think the text says. Each comes with the ${B.meta.t==='OT'?'Hebrew':'Greek'} so you can check it yourself.</p>
    <p class="small muted">${Object.entries(KIND).map(([k,v]) => `<span class="kindb k-${k}">${v}</span>`).join(' ')}</p>
    ${words.filter(n => n.kind).map(n => `<div class="box word"><div class="tag"><span class="kindb k-${n.kind}">${KIND[n.kind]}</span><i>${n.v}</i></div><h5>${n.t}</h5>${n.orig?`<p class="greek small">${n.orig}</p>`:''}${para(n.b)}<p class="small"><button class="pill" data-verse="${n.v}">See it in the text, ${n.v}</button></p></div>`).join('') || '<p class="muted">No entries yet.</p>'}`);
  page('variants', 'Manuscript differences', `<div class="cart study">Study page</div><h2>Where the Manuscripts Differ</h2>
    <p class="lede">No original manuscript of any biblical book survives; we have copies of copies. Usually they agree. Where they differ in a way that matters, the Plain English marks the place. Each entry gives the readings, the manuscripts behind each, and why this translation follows the one it does.</p>
    ${d.variants.map(x => `<div class="card"><h4><button class="linkish" data-variant="${x.id}">${x.t}</button> <span class="small muted" style="font-family:var(--f-body)">${x.v}</span></h4><p class="small">${esc(x.p||'')}</p></div>`).join('') || '<p class="muted">No significant differences are noted for this book.</p>'}`);
  const specN = d.notes.filter(n => n.type === 'spec'), specC = d.chapters.flatMap(c => (c.deep||[]).filter(x => x.box === 'spec' || x.spec).map(x => [c, x]));
  page('ideas', 'Claude’s theories', `<div class="cart study">Study page</div><h2>Claude's Theories</h2>
    <p class="lede">New ideas, not just a summary of what others have said. Each rests on real verses and says where it overlaps with published scholarship. None of them is established teaching. Weigh them the way the Bereans did (Acts 17:11).</p>
    ${(bk.spec||[]).map(s => specCard(s)).join('')}
    <h3>In the text</h3><ul class="ideas">${specN.map(n => `<li><button class="linkish" data-note="${n.id}">${n.t}</button><p class="muted">${n.v} · ${esc(n.p||'')}</p></li>`).join('') || '<li class="muted">None yet.</li>'}</ul>
    <h3>On the chapter pages</h3><ul class="ideas">${specC.map(([c, x]) => `<li><button class="linkish" data-go="c${c.n}">${x.title}</button><p class="muted">${name} ${c.n}</p></li>`).join('') || '<li class="muted">None yet.</li>'}</ul>`);
  if((bk.prompts||[]).length) page('prompts', 'Image prompts', `<div class="cart study">Study page</div><h2>Image Prompts</h2>
    <p class="lede">Every drawing here is original. These prompts are for making more in the same scroll-sketch style: paste one into ChatGPT's image tool.</p>
    ${bk.prompts.map(([t,p],i) => `<div class="prompt"><header><b>${t}</b><button class="copy" data-copy="p${i}">Copy prompt</button></header><textarea id="p${i}" readonly>${esc(p)}</textarea></div>`).join('')}`);
  const src = Object.values(d.sources || {});
  page('sources', 'Sources', `<div class="cart study">Study page</div><h2>Sources and Further Study</h2>
    ${(bk.reading||[]).length ? `<ul class="ideas">${bk.reading.map(([t,x]) => `<li><b style="font-family:var(--f-display);font-weight:400">${t}</b><p class="muted">${x}</p></li>`).join('')}</ul>` : ''}
    <h3>Cited in ${name}</h3><ul class="srcs">${src.map(s => `<li>${s}</li>`).join('')}</ul>
    <h3>Texts</h3><p class="small">${TNOTE.plain(B.id)} ${TNOTE[B.meta.t==='OT'?'wlc':'sbl']()} ${TNOTE.bsb()}</p>`);
  const all = Object.keys(d.topics || {});
  page('topics', 'All topics', `<div class="cart study">Topic pages</div><h2>Topics in ${name}</h2>
    <p class="lede">Each topic has one page for the whole Bible. Opened from here, it shows what relates to ${name} first.</p>
    ${['Ideas','People','Places','Events','Symbols','Words','Studies'].map(k => { const ids = all.filter(id => TIDX[id] && TIDX[id][1] === k); return ids.length ? `<h3 style="color:var(--k-${k})">${k}</h3>${topicChips(ids)}` : ''; }).join('')}`);
}

/* ---------- text pages ---------- */
const chName = n => B.meta.vc.length === 1 ? B.meta.name : `${B.meta.name.replace(/^Psalms$/, 'Psalm')} ${n}`;
const plainOf = key => (B.data && B.data.plain.v[key]) || '';
function textPage(n){
  const name = B.meta.name;
  return `<div class="thead"><div class="row"><h2>${chName(n)}</h2><span class="tname" data-tname></span></div>
    ${tierBand()}<div class="bg">${B.meta.t === 'X' ? '' : `<span>Also on Bible Gateway:</span>${['NIV','ESV','NASB','NLT','CSB'].map(v=>ext(bgURL(name+' '+n,v),v)).join('')}`}${B.data?`<button class="linkish tolink" data-go="c${n}" style="font-size:.8rem">← commentary</button>`:''}</div>
    ${B.data ? `<details class="nkey"><summary><span class="sw">${Object.keys(NOTE_TYPES).filter(k => k !== 'canon' || B.meta.t === 'X').concat('variant').map(k => `<i style="--c:var(--n-${k})"></i>`).join('')}</span>Note key</summary><div class="ntoggles">${Object.entries(NOTE_TYPES).filter(([k]) => k !== 'canon' || B.meta.t === 'X').map(([k,t])=>`<button data-ntype="${k}" aria-pressed="true" class="${k==='spec'?'only-spec':''}"><i style="--c:var(--n-${k})"></i>${t.label}</button>`).join('')}<button data-ntype="variant" aria-pressed="true"><i style="--c:var(--n-variant)"></i>Manuscript differences</button></div></details>` : ''}</div>
    <div class="tbody" data-ch="${n}"></div>`;
}
const POETIC = new Set(['Job','Psa','Pro','Ecc','Sng','Lam']);
/* Plain English verse: notes, glosses and variants are spans over the text; a span fully inside another nests in it.
   Each poetry line ( / ) is its own block, so a note or variant over two lines is drawn once per line; a picked variant's text goes in its first piece */
function plainVerse(key){
  const t = plainOf(key), b = B;
  const span = (x, k) => { const a = k === 'v' ? x.readings[x.follow||0].plain : x.a; const s = t.indexOf(a); return s < 0 ? null : {x, k, s, e:s+a.length}; };
  const all = [...(b.NAT[key]||[]).map(n=>span(n,'n')), ...(b.GAT[key]||[]).map(g=>span(g,'g')), ...(b.VAT[key]||[]).map(v=>span(v,'v'))].filter(Boolean);
  const lines = []; for(let s = 0;;){ const i = t.indexOf(' / ', s); lines.push([s, i < 0 ? t.length : i]); if(i < 0) break; s = i + 3; }
  const wrap = (c, inner, note) => c.k==='n' ? `<span class="nt t-${c.x.type}" role="button" tabindex="0" data-note="${c.x.id}">${inner}</span>`
    : c.k==='v' ? `<span class="vr${c.x.pick !== (c.x.follow||0) ? ' alt' : ''}" role="button" tabindex="0" data-variant="${c.x.id}">${inner}</span>`
    : `<span class="gl" style="--gn:${c.x.m.length + 2}"><span class="gl-o${note ? ' nt-in t-'+note.type : ''}">${inner}</span><span class="gl-m">${esc(c.x.m)}</span></span>`;
  const draw = ([ls, le]) => {
    const spans = all.filter(sp => sp.s < le && sp.e > ls).map(sp => ({x:sp.x, k:sp.k, s:Math.max(sp.s, ls), e:Math.min(sp.e, le), first:sp.s >= ls, kids:[]}))
      .sort((a,c) => a.s-c.s || c.e-a.e || (a.k==='g' ? -1 : 1));
    const root = {s:ls, e:le, kids:[]}, stack = [root];
    spans.forEach(sp => { while(sp.s >= stack[stack.length-1].e) stack.pop();
      const top = stack[stack.length-1], prev = top.kids[top.kids.length-1];
      if(sp.e > top.e || (prev && sp.s < prev.e)) return; top.kids.push(sp); stack.push(sp); });
    const render = (node, note) => { let out = '', at = node.s;
      node.kids.forEach(c => { out += esc(t.slice(at, c.s)) + wrap(c, c.k==='v' && c.x.pick !== (c.x.follow||0) ? (c.first ? esc(c.x.readings[c.x.pick].plain) || '<i class="dim">[omitted]</i>' : '') : render(c, c.k==='n' ? c.x : note), note); at = c.e; });
      return out + esc(t.slice(at, node.e)); };
    return render(root); };
  return lines.length > 1 ? lines.map(l => `<span class="ln">${draw(l)}</span>`).join('') : draw(lines[0]);
}
const markers = key => B.data ? (B.NAT[key]||[]).map(n=>`<button class="nm t-${n.type}" data-note="${n.id}" aria-label="${esc(NOTE_TYPES[n.type].label+': '+n.t)}"></button>`).join('') : '';
function verseHTML(ver, key, T){
  const [c, v] = key.split(':').map(Number);
  const num = v === 0 ? '' : `<button class="vn${v===1?' cv':''}" data-vpanel="${key}" aria-label="Verse ${key}: all translations and cross references">${v===1?c:v}</button>`;
  const id = `v${c}-${v}`;
  /* a verse the Plain leaves out (later manuscripts only) is an editorial line in [brackets]; its variant offers the added text */
  if(ver === 'plain'){ const body = plainVerse(key), om = /^\[.*\]$/.test(plainOf(key)) ? ' om' : ''; return v === 0 ? `<span class="v vt" id="${id}">${body}</span>` : `<span class="v${om}" id="${id}">${num}${body} </span>`; }
  if(ver === 'hw' || ver === 'gw'){
    const ws = (T.orig.w || {})[key] || [];
    return `<span class="v" id="${id}">${num}${markers(key)}${ws.map(w => { const he = ver === 'hw';
      const flag = he ? (w[5] ? ' q' : '') : (w[5] && !/[NS]/.test(w[5]) ? ' tr' : '');
      return `<span class="gw${flag}" data-gw="${esc(JSON.stringify(w.slice(1)))}"><b${he?' class="heb"':''}>${esc(w[0])}</b><small>${esc(w[1])}</small></span>`; }).join('')} </span>`;
  }
  const src = isOrig(ver) ? T.orig[ver] : T.en[ver];
  const raw = (src || {})[key]; if(raw == null) return v === 0 ? '' : `<span class="v" id="${id}">${num}<span class="dim">—</span> </span>`;
  const s = esc(raw).replace(/\[([^\]]+)\]/g, '<i>$1</i>');
  return v === 0 ? `<span class="v vt" id="${id}">${s}</span>` : `<span class="v" id="${id}">${num}${markers(key)}${s} </span>`;
}
const ORIG_66 = new Set(['wlc','sbl','byz','hw','gw']);
/* a book outside the 66 names its own texts (catalog `about`): which file holds each, and its script */
const isOrig = ver => ORIG_66.has(ver) || ((B && B.meta.about || {})[ver] || {}).src === 'orig';
async function textsFor(ver){
  const need = {};
  if(!['plain'].includes(ver)) { if(isOrig(ver)) need.orig = load(`orig/${B.id}.json`); else need.en = load(`en/${B.id}.json`); }
  const T = {}; for(const k in need) T[k] = await need[k]; return T;
}
function chapterKeys(n){
  const vc = B.meta.vc[n-1], keys = [];
  if(B.data){ if(B.data.plain.v[`${n}:0`]) keys.push(`${n}:0`); }
  else if(B.meta.id === 'Psa') keys.push(`${n}:0`);
  for(let v = 1; v <= vc; v++) keys.push(`${n}:${v}`); return keys;
}
function renderTextPage(el, T){
  const tb = el.querySelector('.tbody'); if(!tb) return; const n = +tb.dataset.ch, ver = B.ver;
  const he = ver === 'wlc', words = ver === 'hw' || ver === 'gw';
  tb.className = 'tbody' + (he ? ' hebt' : '') + ({greek:' greekt', geez:' gezt'}[((B.meta.about || {})[ver] || {}).script] || (ver==='sbl'||ver==='byz' ? ' greekt' : '')) + (words ? ' words' : '') + (ver==='hw' ? ' hebw' : '');
  const poem = POETIC.has(B.id) && !words ? ' class="poem"' : '';
  let secs;
  if(B.data) secs = B.data.plain.sec.filter(s => s.c === n);
  else secs = [{h:'', vs:chapterKeys(n)}];
  const chip = k => { const x = B.SAT && B.SAT[k]; return x ? `<button class="setchip" data-setting="${x.i}" dir="ltr"><b>${x.what}</b> · who heard it, and why</button>` : ''; };
  tb.innerHTML = secs.map(s => `${s.h ? `<h4>${s.h}</h4>` : ''}<p${poem}${he?' dir="rtl"':''}>${s.vs.map(k => chip(k) + verseHTML(ver, k, T)).join('')}</p>`).join('')
    + `<p class="textnote">${TNOTE[ver](B.id)}</p>`;
  smartQuotes(tb);
}
async function ensureRendered(i){
  const b = B, lo = Math.max(0, i-2), hi = Math.min(els.length-1, i+3), todo = [];
  for(let j = lo; j <= hi; j++) if(els[j].classList.contains('text') && !b.rendered.has(j)) todo.push(j);
  const ckeys = [];
  for(let j = lo; j <= hi; j++){ const m = pages[j].id.match(/^c(\d+)$/); if(m && !b.kvDone?.has(+m[1])) ckeys.push(+m[1]); }
  if(!todo.length && !ckeys.length) return;
  const T = await textsFor(b.ver); if(B !== b) return;
  todo.forEach(j => { if(b.rendered.has(j)) return; renderTextPage(els[j], T); b.rendered.add(j); });
  if(ckeys.length && B.data){ b.kvDone = b.kvDone || new Set(); const en = await load(`en/${b.id}.json`), or = await load(`orig/${b.id}.json`); if(B !== b) return;
    ckeys.forEach(n => { const c = b.data.chapters[n-1], key = c.key || `${n}:1`, dl = $(`kv-${n}`); if(!dl) return;
      /* the key verse in the book's English versions (BSB and KJV for the 66; Charles and the like for books outside them) and its original text */
      const ab = b.meta.about || {}, from = src => Object.keys(ab).filter(k => ab[k].src === src);
      const eng = (en.bsb || en.kjv ? ['bsb','kjv'].filter(k => en[k]) : from('en')).slice(0, 2);
      const ok = (['wlc','sbl'].some(k => or[k]) ? ['wlc','sbl'] : from('orig')).find(k => or[k]?.[key]), o = ok ? or[ok][key] : '';
      const ocls = ab[ok] ? {greek:'greek', geez:'gezt'}[ab[ok].script] || '' : or.lang === 'he' ? 'heb' : 'greek';
      const oname = ab[ok] ? ab[ok].short : or.lang === 'he' ? 'Hebrew' : 'Greek';
      dl.innerHTML = eng.map(k => `<dt>${(VERS[k] || {}).short || k.toUpperCase()}</dt><dd${k === 'kjv' ? ' class="kjv"' : ''}>${esc(en[k][key]||'').replace(/\[([^\]]+)\]/g,'<i>$1</i>')}</dd>`).join('')
        + (o ? `<dt>${oname}</dt><dd><span class="${ocls}">${esc(o)}</span></dd>` : '');
      b.kvDone.add(n); }); }
  document.querySelectorAll('[data-tname]').forEach(s => s.textContent = VERS[b.ver].name);
}
async function setVersion(ver){
  const anchor = visibleVerse();
  tsel.disabled = true;
  try { await textsFor(ver); } catch(e){ tsel.value = B.ver; tsel.disabled = false; flashWhere('That translation could not be loaded. Check your connection and try again.'); return; }
  tsel.disabled = false; B.ver = ver; tsel.value = ver; store.set('ver-' + B.meta.t, ver);
  B.rendered = new Set(); await ensureRendered(current.idx);
  if(anchor){ const el = $(anchor.id); if(el) anchor.page.scrollTop = el.offsetTop - anchor.off; }
}
function visibleVerse(){
  const p = els[current.idx + (spread && els[current.idx+1] && els[current.idx+1].classList.contains('text') ? 1 : 0)];
  if(!p || !p.classList.contains('text')) return null;
  const top = p.scrollTop + 80; const v = [...p.querySelectorAll('.v')].find(v=>v.offsetTop + v.offsetHeight > top);
  return v ? {id:v.id, page:p, off:v.offsetTop - p.scrollTop} : null;
}
const tsel = $('tsel');
tsel.addEventListener('change', () => setVersion(tsel.value));

/* ---------- layout: two portrait pages on a landscape desktop, one on a phone ---------- */
let spread = false, pw = 600;
const current = {idx:0};
function layoutNow(){
  const W = track.clientWidth, H = track.clientHeight;
  const two = Math.min(Math.floor(W/2), Math.floor(H*0.82));
  spread = W > H && two >= 420; pw = spread ? two : W;
  document.documentElement.style.setProperty('--pw', pw+'px');
  document.documentElement.style.setProperty('--side', (spread ? Math.floor((W - 2*pw)/2) : 0)+'px');
  document.body.classList.toggle('spread', spread);
  track.scrollLeft = firstOf(current.idx) * pw;
}
const firstOf = i => spread ? i - (i % 2) : i;
const step = () => spread ? 2 : 1;
function scrollToIdx(i, smooth=true){
  i = Math.max(0, Math.min(els.length-1, i));
  const far = Math.abs(firstOf(i) - firstOf(current.idx)) > 6;
  track.scrollTo({left: firstOf(i) * pw, behavior: (reduce || far || !smooth) ? 'auto' : 'smooth'});
  ensureRendered(i);
}
function go(id){ const i = IDX[id]; if(i === undefined) return; if(Math.abs(firstOf(i) - firstOf(current.idx)) > 2) pushPlace(); scrollToIdx(i); }
async function flashVerse(key){
  const c = key.split(':')[0], i = IDX['t'+c]; if(i === undefined) return;
  scrollToIdx(i, false); await ensureRendered(i);
  const p = els[i], v = $('v'+key.replace(':','-')); if(!v) return;
  p.scrollTo({top: Math.max(0, v.offsetTop - 110), behavior: reduce ? 'auto' : 'smooth'});
  v.classList.remove('flash'); void v.offsetWidth; v.classList.add('flash');
  setTimeout(() => v.classList.remove('flash'), 1800);
}
function goVerse(key){ const [c, v] = key.split(':'); pushPlace(); history.pushState(null, '', `/${B.id}/${c}/${v}`); flashVerse(key); }
/* a long jump leaves a browser history entry, so the browser's back button returns */
function pushPlace(){ const p = pages[firstOf(current.idx)]; if(p) history.replaceState(null, '', placePath(p.id)); }
const placePath = id => { const m = id.match(/^([ct])(\d+)$/); return `/${B.id}` + (m ? `/${m[2]}` + (m[1]==='t' ? '/1' : '') : id === 'intro' ? '' : `?p=${id}`); };

/* ---------- navigation rows ---------- */
const chapNav = $('chapNav'), topicNav = $('topicNav'), where = $('where');
let topicFilter = null, allFor = null;
function applyBookUI(){
  const b = B, d = b.data;
  $('bookbtn').textContent = b.meta.name + ' ▾';
  tsel.innerHTML = b.vers.map(v => `<option value="${v}">${VERS[v].short}</option>`).join(''); tsel.value = b.ver;
  const study = d ? [['words','translation watch'],['variants','manuscripts'],['ideas','Claude’s theories'],...(d.book.prompts||[]).length?[['prompts','image prompts']]:[],['sources','sources'],['topics','topics']] : [];
  chapNav.innerHTML = `<button data-go="intro" title="Opening">✦</button>${(d && d.book.pages || []).map(p => `<button data-go="${p.id}" class="study">${esc(p.label.toLowerCase())}</button>`).join('')}<span class="sep"></span>`
    + b.meta.vc.map((_, i) => `<button data-go="${d?'c':'t'}${i+1}" data-ch="${i+1}" title="${b.meta.name} ${i+1}${d?': '+esc(d.chapters[i].title):''}">${i+1}</button>`).join('')
    + (study.length ? `<span class="sep"></span>` + study.map(([id,l]) => `<button data-go="${id}" class="study">${l}</button>`).join('') : '');
  const lensBox = $('lenses');
  lensBox.innerHTML = b.lenses.length ? `<button class="chip" data-lens="" aria-pressed="true">All views</button>` + b.lenses.map((l,i) => `<button class="chip" data-lens="${l.k}" aria-pressed="false">${lensGlyph(i,12)}${l.name}</button>`).join('') : '';
  lensBox.hidden = !b.lenses.length; setLens('');
  topicFilter = null; allFor = null; renderTopicNav();
}
function renderTopicNav(){
  if(!B || !B.data){ topicNav.innerHTML = ''; return; }
  const ids = topicFilter ? (B.data.chTopics[topicFilter] || []) : Object.keys(B.data.topics || {});
  const n = Object.keys(B.data.topics || {}).length;
  topicNav.innerHTML = (topicFilter ? `<span class="lbl">Topics in chapter ${topicFilter}</span><button class="all" data-alltopics>show all ${n}</button>` : `<span class="lbl">${n} topics in ${B.meta.name}</span>`)
    + ids.filter(id => TIDX[id]).map(id => `<button class="tchip" data-topic="${id}" style="--kc:var(--k-${TIDX[id][1]})"><i></i>${TIDX[id][0]}</button>`).join('');
  smartQuotes(topicNav); topicNav.scrollLeft = 0;
}
const chapterOf = i => { const m = pages[i] && pages[i].id.match(/^[ct](\d+)$/); return m ? +m[1] : null; };
function sync(force){
  if(!document.body.classList.contains('mode-book') || !els.length) return;
  const i = Math.round(track.scrollLeft / pw), first = firstOf(i);
  if(first === firstOf(current.idx) && sync.done && !force) return; sync.done = true;
  current.idx = first; ensureRendered(first);
  const a = pages[first], b = spread ? pages[first+1] : null, ch = chapterOf(first) || (b && chapterOf(first+1));
  const name = B.meta.name;
  where.textContent = ch ? `${chName(ch)}${B.data ? ': ' + B.data.chapters[ch-1].title : ''}` : (b ? `${a.label} · ${b.label}` : a.label);
  chapNav.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.go === a.id || (ch && x.dataset.ch == ch)));
  const on = chapNav.querySelector('button.on'); if(on) chapNav.scrollTo({left: on.offsetLeft - chapNav.clientWidth/2 + on.clientWidth/2});
  if(ch && ch !== topicFilter && ch !== allFor){ topicFilter = ch; allFor = null; renderTopicNav(); }
  if(!force) history.replaceState(null, '', placePath(a.id));
}
let raf = 0; track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => sync()); }, {passive:true});
$('prev').onclick = () => scrollToIdx(current.idx - step());
$('next').onclick = () => scrollToIdx(current.idx + step());
$('home').onclick = () => nav('/');
$('bookbtn').onclick = () => nav('/library');
document.addEventListener('keydown', e => {
  if(!modal.hidden){ if(e.key==='Escape') closeModal(); return; }
  if((e.key==='Enter' || e.key===' ') && e.target.matches('span[role="button"]')){ e.preventDefault(); e.target.click(); return; }
  if(e.target.closest('textarea,input,select') || !document.body.classList.contains('mode-book')) return;
  if(e.key==='ArrowRight'){ e.preventDefault(); $('next').click(); }
  if(e.key==='ArrowLeft'){ e.preventDefault(); $('prev').click(); }
});
let wheelAcc = 0, wheelLock = 0;
track.addEventListener('wheel', e => {
  if(Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.ctrlKey) return;
  const p = e.target.closest('.page');
  if(p){ const canDown = p.scrollTop + p.clientHeight < p.scrollHeight - 2, canUp = p.scrollTop > 0;
    if((e.deltaY>0 && canDown) || (e.deltaY<0 && canUp)) { wheelAcc = 0; return; } }
  e.preventDefault();
  if(performance.now() < wheelLock) return;
  wheelAcc += e.deltaY * (e.deltaMode===1 ? 32 : 1);
  if(Math.abs(wheelAcc) > 60){ scrollToIdx(current.idx + Math.sign(wheelAcc)*step()); wheelAcc = 0; wheelLock = performance.now() + 650; }
}, {passive:false});
[chapNav, topicNav].forEach(row => row.addEventListener('wheel', e => {
  if(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
  e.preventDefault(); row.scrollLeft += e.deltaY * (e.deltaMode===1 ? 32 : 1);
}, {passive:false}));

/* ---------- a topic page: one per topic, filtered to the passage the reader came from ---------- */
const bookOrder = id => CAT.books.findIndex(b => b.id === id);
async function openTopic(r){
  setMode('topic'); document.querySelectorAll('#siteNav a').forEach(a => a.dataset.page === 'topics' ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current'));
  const meta = TIDX[r.id]; if(!meta){ $('leaf').innerHTML = `<h2>Topic not found</h2><p><button class="pill" data-link="/topics">All topics</button></p>`; return; }
  const T = (await load(`topics/${meta[5]}.json`))[r.id];
  const from = r.from ? r.from.split('/') : null, fb = from && BYID[from[0]] ? from[0] : null, fc = fb && from[1] ? +from[1] : null;
  const full = !fb || store.get('topic-full') === '1';
  document.title = `${T.title} · Codex Collection`; where.textContent = T.title;
  const here = fb ? `${BYID[fb].name}${fc ? ' ' + fc : ''}` : '';
  const chKey = fb && fc ? `${fb} ${fc}` : null;
  const rel = s => chKey && (s.ch||[]).includes(chKey) ? 2 : fb && (s.book === fb || (s.ch||[]).some(k => k.startsWith(fb + ' '))) ? 1 : 0;
  const ctxOf = s => s.book || fb || 'Gen';
  const secHTML = s => `<div class="tsec" data-ctx="${ctxOf(s)}"><h3>${s.h}</h3>${para(s.b)}${s.refs?`<p class="small reflist from">${s.refs}</p>`:''}</div>`;
  const noteHTML = n => `<li><button class="linkish" data-link="/${n.book}/${n.v.replace(':','/')}">${BYID[n.book].name} ${n.v} · ${n.t}</button><p class="muted">${esc(n.p)}</p></li>`;
  const core = T.sections.filter(s => !s.book);
  let h = `<div class="cart kind" style="--kc:var(--k-${T.kind})">${T.kind}</div><h2>${T.title}</h2>`;
  if(fb) h += `<p><button class="pill" data-link="/${fb}${fc?'/'+fc:''}">← Back to ${here}</button></p>`;
  h += `<p class="lede">${T.lead}</p>`;
  if(T.books.length) h += `<p class="small muted">In ${T.books.map(id => `<button class="linkish" data-tbook="${id}">${BYID[id].name}</button>`).join(', ')}</p>`;
  if(fb) h += `<div class="filterbar"><span>Showing:</span><span class="seg"><button data-tfull="0" aria-pressed="${!full}">What relates to ${here}</button><button data-tfull="1" aria-pressed="${full}">The full page</button></span></div>`;
  if(!full){
    const top = T.sections.filter(s => rel(s) === 2), mid = T.sections.filter(s => rel(s) === 1 && !top.includes(s));
    const nTop = T.notes.filter(n => n.book === fb && (!fc || +n.v.split(':')[0] === fc)), nMid = T.notes.filter(n => n.book === fb && !nTop.includes(n));
    if(!top.length && !nTop.length) h += `<p class="muted small">Nothing on this page is about ${here} in particular${mid.length || nMid.length ? `; here is what relates to ${BYID[fb].name}` : ''}.</p>`;
    h += top.map(secHTML).join('');
    if(nTop.length) h += `<h3>Notes in ${here}</h3><ul class="ideas">${nTop.map(noteHTML).join('')}</ul>`;
    if(mid.length || nMid.length) h += `<div class="bookgrp"><h3>Elsewhere in ${BYID[fb].name}</h3>${mid.map(secHTML).join('')}${nMid.length?`<ul class="ideas">${nMid.map(noteHTML).join('')}</ul>`:''}</div>`;
    if(!top.length && !mid.length) h += core.map(secHTML).join('');
    const others = T.books.filter(id => id !== fb);
    if(others.length) h += `<div class="bookgrp"><h3>Across the Bible</h3><p class="small">This topic also appears in ${others.map(id => `<button class="linkish" data-tbook="${id}">${BYID[id].name}</button>`).join(', ')}. <button class="linkish" data-tfull="1">Show the full page.</button></p></div>`;
  } else {
    h += core.map(secHTML).join('');
    T.books.forEach(id => { const ss = T.sections.filter(s => s.book === id), ns = T.notes.filter(n => n.book === id), cs = T.chapters.filter(c => c[0] === id);
      if(!ss.length && !ns.length && !cs.length) return;
      h += `<div class="bookgrp" id="tb-${id}"><h3>${BYID[id].name}</h3>${ss.map(secHTML).join('')}`
        + (cs.length ? `<p class="small">Chapter pages: ${cs.map(([b,n,t]) => `<button class="linkish" data-link="/${b}/${n}">${n}. ${t}</button>`).join(' · ')}</p>` : '')
        + (ns.length ? `<h4>Notes in the text</h4><ul class="ideas">${ns.map(noteHTML).join('')}</ul>` : '') + `</div>`; });
  }
  const bel = (L, title) => { const show = full ? L : L.filter(x => !x.book || x.book === fb); return show.length ? `<div><h3>${title}</h3><ul>${show.map(x => `<li data-ctx="${x.book||fb||'Gen'}">${x.t}</li>`).join('')}</ul></div>` : ''; };
  /* every "Where Christians differ" question filed under this topic, wherever in the Bible it is asked */
  const trad = full || !fb ? (T.trad||[]) : (T.trad||[]).filter(e => e.book === fb);
  if(trad.length) h += `<h3>Where Christians differ</h3><ul class="ideas">${trad.map(e => `<li><button class="linkish" data-link="${tradPath([e.book, e.c])}">${tradAt([e.book, e.c])} · ${e.q}</button><p class="muted small">${e.who.join(', ')}</p></li>`).join('')}</ul>`
    + (!full && fb && trad.length < (T.trad||[]).length ? `<p class="small">${T.trad.length - trad.length} more in other books. <button class="linkish" data-tfull="1">Show the full page.</button></p>` : '');
  const beliefs = bel(T.common, 'Common beliefs') + bel(T.uncommon, 'Less common beliefs');
  if(beliefs) h += `<div class="cols2">${beliefs}</div>`;
  (full ? T.claude : T.claude.filter(x => !x.book || x.book === fb)).forEach(c => h += `<div data-ctx="${c.book||fb||'Gen'}">${specCard(c)}</div>`);
  if((T.related||[]).length) h += `<h3>See also</h3>${topicChips(T.related)}`;
  h += linksRow(T.links);
  if((T.sources||[]).length) h += `<h3>Sources</h3><ul class="srcs">${T.sources.map(s => `<li>${s}</li>`).join('')}</ul>`;
  $('leaf').innerHTML = h; CTX = fb ? {id:fb} : null; linkify($('leaf'), fb || null); smartQuotes($('leaf')); $('article').scrollTop = 0;
}

/* ---------- tooltip ---------- */
const tip = $('tip');
function tipFor(el){
  if(el.dataset.note && B && B.data){ const n = B.data.notes[el.dataset.note], t = NOTE_TYPES[n.type];
    return {c:t.color, html:`<span class="tt"><i></i>${t.label}${n.kind?' · '+KIND[n.kind]:''}</span><b>${n.t}</b>${esc(n.p||'')}`}; }
  if(el.dataset.variant && B && B.data){ const x = B.data.variants[el.dataset.variant];
    return {c:'var(--n-variant)', html:`<span class="tt"><i></i>Manuscript difference</span><b>${x.t}</b>${esc(x.p||'')}`}; }
  if(el.dataset.ref){ const r = parseRef(el.dataset.ref); const txt = refPreview(r);
    if(txt === undefined) refTexts(r.book).then(() => { if(tip.dataset.for === el.dataset.ref && !tip.hidden) showTip(el); }).catch(()=>{});
    return {c:'var(--lapis)', html:`<b>${refName(r)}</b>${txt === undefined ? 'Loading…' : esc(txt)}`}; }
  if(el.dataset.gw){ const w = JSON.parse(el.dataset.gw), he = B.meta.t === 'OT';
    if(he) return {c:'var(--ochre)', html:`<span class="gk heb">${esc(w[1])}</span>${w[2]?`<span class="small">Strong’s ${esc(w[2])}</span>`:''}<br><span class="small">${esc(w[3])}</span>${w[4]?`<br><span class="small">Reading: ${esc(w[4])} (Q = the scribes’ marginal reading; K = the written text; other letters are other manuscripts)</span>`:''}`};
    const eds = w[4] ? w[4].split('').map(c => ED_NAMES[c]).join(', ') : 'all major editions';
    return {c:'var(--ochre)', html:`<span class="gk">${esc(w[1])}</span>${w[2]?`<span class="small">Strong’s ${esc(w[2])} · ${esc(w[3])}</span>`:''}<br><span class="small">In: ${eds}</span>`}; }
}
function showTip(el){
  const d = tipFor(el); if(!d) return;
  tip.style.setProperty('--c', d.c); tip.innerHTML = d.html; smartQuotes(tip); tip.hidden = false; tip.dataset.for = el.dataset.ref || el.dataset.note || '';
  const r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
  let x = Math.min(Math.max(8, r.left + r.width/2 - tw/2), innerWidth - tw - 8), y = r.top - th - 8;
  if(y < 8) y = r.bottom + 8;
  tip.style.left = x+'px'; tip.style.top = y+'px';
}
const hideTip = () => { tip.hidden = true; };
const TIPS = '[data-note],[data-ref],[data-gw],[data-variant]';
if(matchMedia('(hover:hover)').matches){
  document.addEventListener('pointerover', e => { const el = e.target.closest(TIPS); if(el && !el.closest('.modal')) showTip(el); });
  document.addEventListener('pointerout', e => { const el = e.target.closest(TIPS); if(el && !el.contains(e.relatedTarget)) hideTip(); });
}
document.addEventListener('focusin', e => { const el = e.target.closest(TIPS); if(el && !el.closest('.modal')) showTip(el); else hideTip(); });
track.addEventListener('scroll', hideTip, {passive:true, capture:true});

/* verse text for references: the Plain English when the book has it, otherwise the BSB */
const refTexts = id => Promise.all([load(`en/${id}.json`), BYID[id].status !== 'text' ? load(`books/${id}.json`) : null]).then(([en, bk]) => ({en, bk}));
function refPreview(r){
  const keys = RF.refVerses(r, 3); if(!keys.length) return 'Open to read';
  const got = textsNow(r.book); if(!got) return undefined;
  const t = keys.map(k => verseLine(got, k.slice(k.indexOf(' ')+1))).join(' ');
  return t.slice(0, 200) + (t.length > 200 || RF.refVerses(r, 4).length > 3 ? '…' : '');
}
const SYNC = {};   // loaded texts, by book
function textsNow(id){ if(SYNC[id]) return SYNC[id]; refTexts(id).then(x => SYNC[id] = x).catch(()=>{}); return null; }
const verseLine = (got, cv) => (got.bk && got.bk.plain.v[cv]) || got.en.bsb[cv] || '';

/* ---------- modal ---------- */
const modal = $('modal'), mbody = $('mbody'), mtype = $('mtype'), mback = $('mback');
let mstack = [], lastFocus = null;
function openModal(view, push=false){
  if(modal.hidden){ lastFocus = document.activeElement; mstack = []; }
  if(!push) mstack = [];
  mstack.push(view); renderModal();
}
async function renderModal(){
  const view = mstack[mstack.length-1];
  const d = view.kind === 'notes' ? notesView(view.ids) : view.kind === 'note' ? noteView(view.id) : view.kind === 'variant' ? variantView(view.id) : view.kind === 'verse' ? await verseView(view.key) : view.kind === 'setting' ? settingView(view.i) : view.kind === 'work' ? workView(view.id) : await refView(view.r);
  if(mstack[mstack.length-1] !== view) return;
  modal.querySelector('.mbox').style.setProperty('--c', d.c);
  modal.classList.toggle('multi', view.kind === 'notes');
  modal.querySelector('.mbox').style.setProperty('--cols', view.kind === 'notes' ? Math.min(view.ids.length, 3) : 1);
  mtype.innerHTML = d.type; mbody.innerHTML = d.html; linkify(mbody); smartQuotes(mbody); wireDeck();
  mback.hidden = mstack.length < 2;
  modal.hidden = false; hideTip(); mbody.scrollTop = 0;
  $('mclose').focus({preventScroll:true});
}
function closeModal(){ modal.hidden = true; mstack = []; if(lastFocus && lastFocus.focus) lastFocus.focus({preventScroll:true}); }
$('mclose').onclick = closeModal;
mback.onclick = () => { mstack.pop(); renderModal(); };
modal.addEventListener('click', e => { if(e.target === modal) closeModal(); });
modal.addEventListener('keydown', e => {
  if(e.key !== 'Tab') return;
  const f = [...modal.querySelectorAll('button:not([hidden]),a[href]')].filter(x=>x.offsetParent);
  if(!f.length) return; const a = f[0], z = f[f.length-1];
  if(e.shiftKey && document.activeElement === a){ e.preventDefault(); z.focus(); }
  else if(!e.shiftKey && document.activeElement === z){ e.preventDefault(); a.focus(); }
});
const srcList = keys => (keys||[]).length ? `<p class="small" style="margin-top:10px"><b style="font-family:var(--f-display);font-weight:400">Sources</b></p><ul class="srcs">${keys.map(s=>`<li>${B.data.sources[s]||s}</li>`).join('')}</ul>` : '';
/* notes that share words: the one clicked, every note around it, and any note that partly overlaps it (a note wholly
   inside the clicked one is left out: it has its own words to click). Hidden kinds of notes stay hidden. */
function notesAt(el){
  const id = +el.dataset.note, n = B.data.notes[id]; if(!el.matches('.nt')) return [id];
  const t = plainOf(n.v), s = t.indexOf(n.a), e = s + n.a.length, shown = m => !hidden.has(m.type) && !(m.type === 'spec' && document.body.classList.contains('nospec'));
  const more = (B.NAT[n.v] || []).filter(m => { if(m.id === id || !shown(m)) return false; const ms = t.indexOf(m.a), me = ms + m.a.length;
    return ms >= 0 && ms < e && me > s && !(ms >= s && me <= e && me - ms < e - s); }).sort((a, b) => t.indexOf(a.a) - t.indexOf(b.a));
  return [id, ...more.map(m => m.id)];
}
/* several notes at once: side by side on a wide screen, one card at a time to swipe through on a narrow one */
function notesView(ids){
  const ps = ids.map((id, i) => { const d = noteView(id);
    return `<section class="mpanel" style="--c:${d.c}" aria-label="Note ${i+1} of ${ids.length}"><div class="mt">${d.type}</div>${i ? d.html.replace(' id="mtitle"', '') : d.html}</section>`; }).join('');
  return {c:'var(--ink-2)', type:`${ids.length} notes on these words`,
    html:`<div class="pager">${ids.map((_, i) => `<button data-deck="${i}" aria-label="Note ${i+1}"${i ? '' : ' class="on"'}></button>`).join('')}<span>Swipe for the next note</span></div><div class="deck" id="deck" style="--n:${Math.min(ids.length, 3)}">${ps}</div>`};
}
function wireDeck(){ const d = $('deck'); if(!d) return;
  d.addEventListener('scroll', () => { const i = Math.round(d.scrollLeft / d.clientWidth); mbody.querySelectorAll('[data-deck]').forEach(b => b.classList.toggle('on', +b.dataset.deck === i)); }, {passive:true}); }
function noteView(id){
  const n = B.data.notes[id], t = NOTE_TYPES[n.type], name = B.meta.name;
  let h = `<h3 id="mtitle">${n.t}</h3><div class="quote">"${esc(n.a)}" <span class="small">(${name} ${n.v}, Plain English)</span></div>`;
  if(n.orig) h += `<div class="gk">${n.orig}</div>`;
  if(n.type==='spec') h += `<p class="spec-note">This is my own idea, offered for you to test. It is not established scholarship.</p>`;
  h += para(n.b);
  if(n.r) h += `<p class="small reflist"><b style="font-family:var(--f-display);font-weight:400;letter-spacing:.05em">References</b> · ${n.r}</p>`;
  h += linksRow(n.l, 'Further reading') + srcList(n.s);
  h += `<div class="acts"><button class="pill" data-verse="${n.v}">Go to ${n.v} in the text</button>${n.top&&TIDX[n.top]?`<button class="pill" data-topic="${n.top}" style="border-color:var(--k-${TIDX[n.top][1]})">Topic: ${TIDX[n.top][0]}</button>`:''}${ext(bgURL(name+' '+n.v,'NIV;ESV;KJV;NASB'),'Compare translations ↗','pill')}</div>`;
  return {c:t.color, type:`<i></i>${t.label}${n.kind?` <span class="kindb k-${n.kind}">${KIND[n.kind]}</span>`:''}`, html:h};
}
function variantView(id){
  const x = B.data.variants[id], f = x.follow || 0, he = B.meta.t === 'OT';
  let h = `<h3 id="mtitle">${x.t}</h3><p>${esc(x.p||'')}</p>`;
  h += x.readings.map((r, i) => `<div class="rdg${x.pick===i?' on':''}"><div class="w">${r.w}${i===f?'<span class="follow">FOLLOWED HERE</span>':''}</div>${r.orig?`<div class="o${he?' heb':''}">${esc(r.orig)}</div>`:''}${r.en?`<div>${esc(r.en)}</div>`:''}
    <p class="small" style="margin:6px 0 0"><button class="pill" data-pick="${id}:${i}"${x.pick===i?' disabled':''}>${x.pick===i?'Shown in the text':'Read the verse this way'}</button></p></div>`).join('');
  h += `<h4 style="margin-top:12px">Why this reading</h4>${para(x.why)}`;
  if(x.b) h += para(x.b);
  h += srcList(x.s) + `<div class="acts"><button class="pill" data-verse="${x.v}">Go to ${x.v} in the text</button><button class="pill" data-go="variants">All manuscript differences</button></div>`;
  return {c:'var(--n-variant)', type:`<i></i>Manuscript difference · ${B.meta.name} ${x.v}`, html:h};
}
async function refView(r){
  const label = refName(r), here = B && r.book === B.id && document.body.classList.contains('mode-book');
  const keys = RF.refVerses(r, 40); let got;
  try { got = await refTexts(r.book); SYNC[r.book] = got; } catch(e){ got = null; }
  let h = `<h3 id="mtitle">${label}</h3>`;
  if(got){ const vlab = got.bk ? 'Plain English' : 'Berean Standard Bible';
    h += `<div class="vlab">${vlab}</div>` + keys.map(k => { const cv = k.slice(k.indexOf(' ')+1); return `<p class="vrow"><span class="vn">${cv.split(':')[1]}</span>${esc(verseLine(got, cv)).replace(/ \/ /g,' ')}</p>`; }).join('');
    if(got.bk) h += `<div class="vlab">Berean Standard Bible</div>` + keys.slice(0,6).map(k => { const cv = k.slice(k.indexOf(' ')+1); return `<p class="vrow"><span class="vn">${cv.split(':')[1]}</span>${esc(got.en.bsb[cv]||'')}</p>`; }).join('');
    if(keys.length >= 40) h += `<p class="small muted">The passage continues.</p>`;
  } else h += `<p class="muted">The verse text could not be loaded. Use the links below.</p>`;
  const target = `${r.c}/${r.v==null?1:r.v}`;
  h += `<div class="acts">${here ? `<button class="pill" data-verse="${vkey(r)}">Go to ${vkey(r)} in the text</button>` : `<button class="pill" data-link="/${r.book}/${target}">Open ${BYID[r.book].name} ${r.c}${r.v!=null?':'+r.v:''} →</button>`}${keys.length===1?`<button class="pill" data-vpanel-ref="${r.book}|${vkey(r)}">Cross references</button>`:''}${ext(bgURL(label,'NIV;ESV;KJV;NASB'),'Compare translations ↗','pill')}</div>`;
  return {c:here?'var(--red)':'var(--lapis)', type:`Scripture · ${BYID[r.book].name}`, html:h};
}
/* one verse: every translation, its cross references, and everywhere the site discusses it */
async function verseView(key){
  const [id, cv] = key.split('|'), meta = BYID[id];
  const [got, links, orig] = await Promise.all([refTexts(id), load(`links/${id}.json`), load(`orig/${id}.json`)]);
  let h = `<h3 id="mtitle">${meta.name} ${cv}</h3>`;
  if(got.bk && got.bk.plain.v[cv]) h += `<div class="vlab">Plain English</div><p class="vrow">${esc(got.bk.plain.v[cv]).replace(/ \/ /g,' / ')}</p>`;
  const sets = got.bk ? (B && B.id === id && B.SETS ? B.SETS : settingsOf(got.bk, id)).filter(x => x.keys.has(cv)) : [];
  if(sets.length) h += `<div class="vlab">Who heard it, and why</div>` + sets.map(x => `<p class="vrow small"><b>${x.what}</b> (${x.v}). ${x.by ? x.by + ', to ' : 'For '}${x.to}. ${x.why}${x.readers ? ' ' + x.readers : ''}${B && B.id === id ? ` <button class="linkish" data-setting="${x.i}">More</button>` : ''}</p>`).join('');
  [['bsb','BSB'],['kjv','KJV'],['web','WEB'],['asv','ASV'],['ylt','YLT']].forEach(([v,l]) => { if(got.en[v] && got.en[v][cv]) h += `<div class="vlab">${l}</div><p class="vrow">${esc(got.en[v][cv]).replace(/\[([^\]]+)\]/g,'<i>$1</i>')}</p>`; });
  if(orig.wlc && orig.wlc[cv]) h += `<div class="vlab">Hebrew (Leningrad Codex)${orig.heb && orig.heb[cv] ? ` · Hebrew Bibles number this ${orig.heb[cv]}` : ''}</div><p class="vrow heb" style="font-size:1.25rem">${esc(orig.wlc[cv])}</p>`;
  if(orig.sbl && orig.sbl[cv]) h += `<div class="vlab">Greek (SBLGNT)</div><p class="vrow greek">${esc(orig.sbl[cv])}</p>`;
  if(orig.byz && orig.byz[cv] && orig.byz[cv] !== orig.sbl[cv]) h += `<div class="vlab">Greek (Byzantine)</div><p class="vrow greek">${esc(orig.byz[cv])}</p>`;
  const by = links.by[cv] || [];
  if(by.length) h += `<div class="vlab">Discussed on this site</div><ul class="cites">${by.map(e => e[0]==='n' ? `<li><button class="linkish" data-link="/${e[1]}/${e[3].replace(':','/')}">${BYID[e[1]].name} ${e[3]}</button> · note: ${esc(e[4])}</li>`
    : e[0]==='c' ? `<li><button class="linkish" data-link="/${e[1]}/${e[2]}">${BYID[e[1]].name} ${e[2]}</button> · chapter page: ${esc(e[3])}</li>`
    : `<li><button class="linkish" data-topic="${e[1]}">Topic: ${esc(e[3])}</button></li>`).join('')}</ul>`;
  const xr = links.x[cv] || [];
  if(xr.length) h += `<div class="vlab">Cross references <span class="small" style="font-family:var(--f-hand);letter-spacing:0">(OpenBible.info, strongest first)</span></div><p class="xr reflist" data-ctx="${id}">${xr.map(x => esc(x[0])).join('; ')}</p>`;
  h += `<div class="acts">${ext(bgURL(meta.name+' '+cv,'NIV;ESV;KJV;NASB'),'Compare on Bible Gateway ↗','pill')}${ext(`https://www.stepbible.org/?q=reference=${encodeURIComponent(meta.name+' '+cv)}`,'STEP Bible ↗','pill')}</div>`;
  return {c:'var(--red)', type:`Verse · ${meta.name} ${cv}`, html:h};
}

/* ---------- clicks ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const ln = t.closest('a[href^="/"]'); if(ln && !ln.target && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && e.button === 0){ e.preventDefault(); if(!modal.hidden) closeModal(); nav(ln.getAttribute('href')); return; }
  const sm = t.closest('[data-sample]'); if(sm){ showSample(+sm.dataset.sample); return; }
  const jp = t.closest('[data-jump]'); if(jp){ const el = $(jp.dataset.jump); if(el) el.scrollIntoView({behavior:reduce?'auto':'smooth', block:'start'}); return; }
  const hb = t.closest('[data-link]'); if(hb){ if(!modal.hidden) closeModal(); nav(hb.dataset.link); return; }
  const bk = t.closest('[data-book]'); if(bk){ nav('/' + bk.dataset.book); return; }
  const tp = t.closest('[data-topic]'); if(tp){ if(!modal.hidden) closeModal();
    const ch = B && document.body.classList.contains('mode-book') ? (chapterOf(current.idx) || (spread && chapterOf(current.idx+1))) : null;
    const from = document.body.classList.contains('mode-book') && B ? `?from=${B.id}${ch?'/'+ch:''}` : (parseHash().from ? `?from=${parseHash().from}` : '');
    nav(`/topic/${tp.dataset.topic}${from}`); return; }
  const tf = t.closest('[data-tfull]'); if(tf){ store.set('topic-full', tf.dataset.tfull); route(); return; }
  const tb = t.closest('[data-tbook]'); if(tb){ const r = parseHash(); if(store.get('topic-full') === '1' || !r.from){ const el = $('tb-' + tb.dataset.tbook); if(el){ el.scrollIntoView({behavior:reduce?'auto':'smooth'}); return; } }
    nav(`/topic/${r.id}?from=${tb.dataset.tbook}`); return; }
  const st = t.closest('[data-setting]'); if(st){ openModal({kind:'setting', i:+st.dataset.setting}, !modal.hidden); return; }
  const wk = t.closest('[data-work]'); if(wk && wk.tagName === 'BUTTON'){ openModal({kind:'work', id:wk.dataset.work}, !modal.hidden); return; }
  const note = t.closest('[data-note]'); if(note){ const ids = notesAt(note); openModal(ids.length > 1 ? {kind:'notes', ids} : {kind:'note', id:ids[0]}, !modal.hidden); return; }
  const dk = t.closest('[data-deck]'); if(dk){ const d = $('deck'); if(d) d.scrollTo({left:+dk.dataset.deck * d.clientWidth, behavior:reduce?'auto':'smooth'}); return; }
  const pick = t.closest('[data-pick]'); if(pick){ const [id, i] = pick.dataset.pick.split(':').map(Number); const x = B.data.variants[id]; x.pick = i;
    const c = +x.v.split(':')[0]; const j = IDX['t'+c]; if(j !== undefined && B.ver === 'plain'){ const el = $('v'+x.v.replace(':','-')); if(el){ el.outerHTML = verseHTML('plain', x.v, {}); smartQuotes($('v'+x.v.replace(':','-'))); } }
    renderModal(); return; }
  const vr = t.closest('[data-variant]'); if(vr){ openModal({kind:'variant', id:+vr.dataset.variant}, !modal.hidden); return; }
  const vp = t.closest('[data-vpanel]'); if(vp){ openModal({kind:'verse', key:`${B.id}|${vp.dataset.vpanel}`}, !modal.hidden); return; }
  const vq = t.closest('[data-vpanel-ref]'); if(vq){ openModal({kind:'verse', key:vq.dataset.vpanelRef}, true); return; }
  const ref = t.closest('[data-ref]'); if(ref){ openModal({kind:'ref', r:parseRef(ref.dataset.ref)}, !modal.hidden); return; }
  const vb = t.closest('[data-verse]'); if(vb){ if(!modal.hidden) closeModal(); goVerse(vb.dataset.verse); return; }
  const g = t.closest('[data-go]'); if(g){ if(!modal.hidden) closeModal(); const id = g.dataset.go;
    if(id.startsWith('tp-')){ nav(`/topic/${id.slice(3)}?from=${B.id}${chapterOf(current.idx)?'/'+chapterOf(current.idx):''}`); return; }
    go(id); return; }
  if(t.closest('[data-alltopics]')){ allFor = topicFilter; topicFilter = null; renderTopicNav(); return; }
  const nt = t.closest('[data-ntype]'); if(nt){ toggleType(nt.dataset.ntype); return; }
  const c = t.closest('[data-copy]'); if(c){ const ta = $(c.dataset.copy);
    const done = () => { c.textContent = 'Copied'; setTimeout(()=>c.textContent='Copy prompt',1600); };
    const fallback = () => { ta.focus(); ta.select(); c.textContent = 'Selected: press Ctrl/⌘+C'; };
    try{ navigator.clipboard.writeText(ta.value).then(done, fallback); }catch(_){ fallback(); } }
});
let whereTimer = 0;
function flashWhere(msg){ where.textContent = msg; clearTimeout(whereTimer); whereTimer = setTimeout(()=>{ sync.done=false; sync(true); }, 4000); }

/* ---------- note types, lenses, theories, glosses ---------- */
const TYPES_ALL = [...Object.keys(NOTE_TYPES), 'variant'];
const hidden = new Set((store.get('hide')||'').split(',').filter(k => TYPES_ALL.includes(k)));
function applyTypes(){
  TYPES_ALL.forEach(k => { if(k!=='spec') document.body.classList.toggle('hide-'+k, hidden.has(k)); });
  document.querySelectorAll('[data-ntype]').forEach(b => b.setAttribute('aria-pressed', String(!hidden.has(b.dataset.ntype))));
  store.set('hide', [...hidden].join(','));
}
function toggleType(k){ if(k==='spec'){ setSpec(false); return; } hidden.has(k) ? hidden.delete(k) : hidden.add(k); applyTypes(); }
function setLens(k){
  if(k) document.body.dataset.lens = k; else delete document.body.dataset.lens;
  $('lenses').querySelectorAll('[data-lens]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lens===k)));
  document.querySelectorAll('.views li').forEach(li => li.classList.toggle('on', li.dataset.k === k));
}
$('lenses').addEventListener('click', e => { const b = e.target.closest('[data-lens]'); if(b) setLens(b.dataset.lens); });
const specBtn = $('specToggle');
function setSpec(on){ document.body.classList.toggle('nospec', !on); specBtn.setAttribute('aria-pressed', String(on)); specBtn.textContent = on ? "Claude's theories shown" : "Claude's theories hidden"; store.set('spec', on?'1':'0'); }
specBtn.onclick = () => setSpec(document.body.classList.contains('nospec'));
const glossBtn = $('glossToggle');
function setGloss(on){ document.body.classList.toggle('nogloss', !on); glossBtn.setAttribute('aria-pressed', String(on)); glossBtn.textContent = on ? "Today's words shown" : "Today's words hidden"; store.set('gloss', on?'1':'0'); }
glossBtn.onclick = () => setGloss(document.body.classList.contains('nogloss'));

/* ---------- start ---------- */
(async function start(){
  setSpec(store.get('spec')!=='0'); setGloss(store.get('gloss')!=='0'); applyTypes();
  try { [CAT, TIDX] = await Promise.all([load('catalog.json'), load('topics/index.json')]); }
  catch(e){ $('leaf').innerHTML = '<h2>The library could not be loaded.</h2><p>Check your connection and reload the page.</p>'; setMode('lib'); return; }
  CAT.books.forEach(b => BYID[b.id] = b); RF = makeRefs(CAT.books);
  if(location.hash.startsWith('#/')) history.replaceState(null, '', location.hash.slice(1));
  addEventListener('resize', () => { hideTip(); if(document.body.classList.contains('mode-book')) layoutNow(); });
  route();
})();
