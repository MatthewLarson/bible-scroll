/* ---------- assemble the data ---------- */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const store = { get(k){ try{return localStorage.getItem(k)}catch(_){return null} }, set(k,v){ try{localStorage.setItem(k,v)}catch(_){} } };
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const bgURL = (q, ver='NIV') => `https://www.biblegateway.com/passage/?search=${encodeURIComponent(q)}&version=${ver}`;
const ext = (href, label, cls='') => `<a href="${href}" target="_blank" rel="noopener"${cls?` class="${cls}"`:''}>${label}</a>`;

/* Plain English text */
const PLAIN = []; const PV = {};
{ let cur = null;
  PLAIN_SRC.split('\n').forEach(line => {
    if(line.startsWith('## ')) { cur = {h:line.slice(3), vs:[]}; return; }
    const m = line.match(/^(\d+):(\d+) (.*)$/); if(!m) return;
    const c = +m[1]; const key = `${c}:${m[2]}`; PV[key] = m[3];
    PLAIN[c] = PLAIN[c] || [];
    if(!PLAIN[c].includes(cur)) PLAIN[c].push(cur);
    cur.vs.push(key);
  });
}

/* notes */
NOTES.forEach((n,i) => {
  const w = n.w ? WORDS[n.w] : null;
  n.id = i; n.title = n.t || w.title; n.body = n.b || w.body; n.greek = n.greek || (w && w.greek) || '';
  n.kind = w ? w.kind : null; n.c = +n.v.split(':')[0];
});
const NOTES_AT = {}; NOTES.forEach(n => (NOTES_AT[n.v] = NOTES_AT[n.v] || []).push(n));

/* topics: the translations guide becomes a front page, the rest are topic pages */
const ABOUT = TOPICS.find(t => t.id==='translations-guide');
const TLIST = TOPICS.filter(t => t !== ABOUT);
const KINDS = ['Ideas','People','Places','Symbols','Words'];
TLIST.sort((a,b) => KINDS.indexOf(a.kind)-KINDS.indexOf(b.kind) || a.title.localeCompare(b.title));
const TOP = {}; TLIST.forEach(t => TOP[t.id] = t);
const CH_TOPICS = {};
CHAPTERS.forEach(c => CH_TOPICS[c.n] = [...c.topics]);
TLIST.forEach(t => t.ch.forEach(n => CH_TOPICS[n] && !CH_TOPICS[n].includes(t.id) && CH_TOPICS[n].push(t.id)));
NOTES.forEach(n => n.top && !CH_TOPICS[n.c].includes(n.top) && CH_TOPICS[n.c].push(n.top));
TLIST.forEach(t => t.chs = Object.keys(CH_TOPICS).filter(n => CH_TOPICS[n].includes(t.id)).map(Number));

/* v1 study material attached to the chapter where each station begins */
const STATION_OF = {}; STATIONS.forEach(s => s.ch.forEach(n => { if(!STATION_OF[n]) STATION_OF[n] = s; }));
/* a station spans one or two chapters; EXTRA_PLACE says which chapter page shows each extra (default: the first) */
const placeOf = (st, kind, i) => { const p = (EXTRA_PLACE[st.id] || {})[kind]; const v = Array.isArray(p) ? p[i] : p; return v === undefined ? st.ch[0] : v; };

/* ---------- small builders ---------- */
const ICON = {
  lit:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 L20,6" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  sym:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 q4,-6 8,0 t8,0" fill="none" stroke="${C.ink}" stroke-width="2.2" stroke-linecap="round"/></svg>`
};
const STENCIL = `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7.5" fill="url(#spray)"/><path d="M8,13 L8,8 M5.6,9 L4.8,3.6 M7.4,8 L7.4,2.6 M9.2,8 L9.6,3 M10.8,9 L11.8,4.6 M5.4,11 L2.6,8.4" stroke="${C.parch}" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const SCROLLI = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3,3 h9 a2,2 0 0 1 0,4 h-1 v6 h-8 a2,2 0 0 1 0,-4 h1 z" fill="none" stroke="${C.ink2}" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
const wordCard = k => { const w=WORDS[k]; const n=NOTES.find(x=>x.w===k);
  return `<div class="box word"><div class="tag"><span class="kindb k-${w.kind}">${KIND[w.kind]}</span><i>${w.ref}</i></div><h5>${w.title}</h5><p class="greek small">${w.greek}</p><p>${w.body}</p>${n?`<p class="small"><button class="pill" data-verse="${n.v}">See it in the text, ${n.v}</button></p>`:''}</div>`; };
const specCard = (s, label='Claude’s theory') => `<div class="box spec"><div class="tag">${label} <i>my own idea, not established scholarship</i></div><h5>${s.title}</h5><p>${s.body}</p>${s.refs?`<p class="small reflist">${s.refs}</p>`:''}</div>`;
const factCard = t => `<div class="box fact"><div class="tag">${SCROLLI}From history and scholarship</div><p>${t}</p></div>`;
const mythCard = m => `<div class="box myth"><div class="tag">${STENCIL}Other traditions · ${m.culture} <i>a parallel, not Scripture · ${m.link2}</i></div><h5>${m.title}</h5><p>${m.body}</p><p class="small">${ext(WIKI(m.link[1]), m.link[0]+' on Wikipedia')}</p></div>`;
const linksRow = (L, label='Read more') => L && L.length ? `<p class="links"><b>${label}</b>${L.map(([l,t])=>ext(WIKI(t),l)).join('')}</p>` : '';
const viewsList = v => `<ul class="views">${['P','H','F','I'].map(k=>`<li class="${k}">${lensGlyph(k)}<b>${LENS[k].name}</b><span>${v[k]}</span></li>`).join('')}</ul>`;
/* content blocks shared by chapter deep-dives and topic pages:
   [heading, html] or {h, html} for prose; {table:[[head...],[row...]...], note}; {art, caption}; {spec...}; {fact}; {myth} */
const tableHTML = (rows, note) => `<div class="tblwrap"><table class="tbl" style="--cols:${rows[0].length}"><thead><tr>${rows[0].map(c=>`<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>` + (note ? `<p class="caption">${note}</p>` : '');
const BLOCK = /^\s*<(p|ul|ol|div|table|dl|blockquote)\b/;
function blockHTML(b){
  if(Array.isArray(b)) b = {h:b[0], html:b[1]};
  if(b.spec) return specCard(b);
  if(b.fact) return factCard(b.fact);
  if(b.myth) return mythCard(b.myth);
  if(b.art) return ART[b.art]() + (b.caption ? `<p class="caption">${b.caption}</p>` : '');
  return (b.h ? `<h3>${b.h}</h3>` : '') + (b.html ? (BLOCK.test(b.html) ? b.html : `<p>${b.html}</p>`) : '') + (b.table ? tableHTML(b.table, b.note) : '');
}
const factsBox = f => `<dl class="facts">${f.map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
const topicChips = ids => `<div class="tchips">${ids.filter(id=>TOP[id]).map(id=>`<button data-go="tp-${id}" style="--kc:var(--k-${TOP[id].kind})"><i></i>${TOP[id].title}</button>`).join('')}</div>`;
const noteLink = n => `<button class="linkish" data-note="${n.id}">${n.title}</button>`;
const typeSwatch = t => `<i style="--c:var(--n-${t})"></i>`;

/* ---------- pages ---------- */
const pages = [];
const page = (id, label, html, cls='') => pages.push({id, label, cls, html});

page('intro','Opening',`
  <div class="cart study">A study scroll</div>
  <h1>The Revelation</h1>
  <p class="hand muted" style="font-size:1.1rem;margin-top:4px">of Jesus Christ, shown to John on Patmos</p>
  ${ART.intro()}
  <p class="lede">Revelation is the last book of the Bible. A man named John wrote it while exiled on the island of Patmos, probably around AD 95 under the emperor Domitian. Some scholars date it earlier, in the late 60s under Nero, and that date matters a lot for the preterist view.</p>
  <p>It is three kinds of writing at once: a <b>letter</b> to seven churches (1:4), a <b>prophecy</b> (1:3), and an <b>apocalypse</b>, a Jewish style of writing that shows heaven's view of earth through symbols. It has 22 chapters and 404 verses. It echoes the Old Testament more than any other New Testament book, yet it never once says "as it is written." Most academic scholars read it first as a message to those churches about Rome in their own day, and some Jewish scholars read it as a Jewish apocalypse by a writer who still saw himself as part of Judaism; Christians have also read it in four main ways, set out on the next page.</p>
  <h3>How to read this scroll</h3>
  <p>Every chapter has two pages. On the left is a <b>commentary</b> page: a summary, the key verse, literal and symbolic readings, and the four main views. On the right is the <b>text</b> of the chapter itself. On a wide screen you see both at once; on a phone, swipe from one to the next.</p>
  <p>The top row jumps to any chapter. The second row lists <b>topic pages</b>: deep dives on people, places, symbols, words and ideas. When you open a chapter, that row narrows to the topics in that chapter.</p>
  <p>Any Bible reference, like Daniel 7:13 or 13:18, can be clicked to read the verse. References to Revelation can take you straight to the verse in the text.</p>
  <h3>The notes in the text</h3>
  <p class="small">Underlined words in the Plain English text open notes. Point at one for a short preview; click it for the full note with references and links. The color and line style tell you what kind of note it is. Other translations show the same notes as colored dots after the verse number.</p>
  <ul class="types">${Object.entries(NOTE_TYPES).map(([k,t])=>`<li><i style="background:color-mix(in srgb, ${t.color} 18%, transparent)"></i><span><span class="u t-${k}" style="text-decoration-color:${t.color}">${t.label}</span>: ${({word:'mistranslations, manuscript differences and Greek words worth knowing',history:'archaeology, Roman history and the world of the first readers',echo:'where John borrows from the Old Testament and the words of Jesus',symbol:'what an image means and where it comes from',views:'how the main schools of interpretation read the verse',israel:'notes on the church and the nation of Israel',myth:'parallels from other cultures and religions, with a note on whether there is a real link',spec:'my own ideas and new connections, clearly labeled and easy to hide'})[k]}.</span></li>`).join('')}</ul>
  <h3>Today's words</h3>
  <p class="small">Some phrases only made sense to people who lived in John's world. In the Plain English text these carry a small handwritten line underneath, like <span class="gl"><span class="gl-o">remove your lampstand from its place</span><span class="gl-m">shut your church down</span></span>. The line on top is the faithful translation. The line underneath is not a translation at all: it is a loose modern American way to get the same point across. You can hide these with the "Today's words" button in the header.</p>
`);

page('views','Four ways to read',`
  <div class="cart study">Before you begin</div>
  <h2>Four Ways to Read Revelation</h2>
  <p class="lede">Christians have read Revelation four main ways. Each takes the Bible seriously, and each has been held by careful, faithful people. Many readers mix them.</p>
  <ul class="views" style="gap:12px">
    <li class="P">${lensGlyph('P')}<b>Preterist</b><span>From Latin <i>praeter</i>, "past." Most of the book was fulfilled in the first centuries: the fall of Jerusalem in AD 70 and the conflict with pagan Rome. <i>Partial</i> preterists still expect a future return of Christ (chapters 19–22).</span></li>
    <li class="H">${lensGlyph('H')}<b>Historicist</b><span>The book is a coded map of church history from John's day to the end. The standard Protestant view from the Reformation to the 1800s (Luther, Isaac Newton, Matthew Henry).</span></li>
    <li class="F">${lensGlyph('F')}<b>Futurist</b><span>Chapters 4–22 describe events still to come: a tribulation, the Antichrist, Christ's return, and a 1,000-year reign. Most popular American teaching today is a form of this, often dispensational.</span></li>
    <li class="I">${lensGlyph('I')}<b>Idealist</b><span>A symbolic picture of the battle between God and evil in every age, not a timeline. Its roots go back to Augustine. Many modern scholars mix it with other readings.</span></li>
  </ul>
  <p>Most academic scholars, in universities and many seminaries, read Revelation another way, outside the four: as a message to the churches of John's own day about Rome, written in the style of the Jewish apocalypses, with no claim to map out later history. This is called the historical-critical or contemporary-historical reading (Adela Yarbro Collins, David Aune, Steven Friesen, Craig Koester). It shares the preterist view's first-century setting but not its claim that John foretold AD 70. It is the majority view among academic biblical scholars. Futurists and historicists reject it, and many conservative scholars accept its first-century setting while holding that the book also speaks truly of the future. Some Jewish scholars (John W. Marshall, David Frankfurter) read it as a Jewish apocalypse by a writer who still thought of himself as inside Judaism.</p>
  <p class="small">Use <b>Lens</b> at the top to highlight one view across every chapter.</p>
  <h3>Literal or symbolic?</h3>
  ${spectrum()}
  <p class="small">This is not a choice between "taking the Bible seriously" and "not." Every reader takes some parts literally and some as symbol. A futurist reads the sword from Jesus's mouth as a symbol; an idealist believes Jesus literally returns. The real question at each scene is which parts are which.</p>
  <h3>Where each view places the events</h3>
  ${chartViews()}
  <p class="caption">A schematic drawing; the spacing between dates is not to scale.</p>
  ${topicChips(['four-views','apocalyptic','millennium','tribulation','rapture'])}
`);

page('keys','Keys to the code',`
  <div class="cart study">Before you begin</div>
  <h2>Keys to the Code</h2>
  <h3>How the three sevens fit together</h3>
  <p>The middle of the book is built from three sets of seven judgments: seals, trumpets and bowls. Readers disagree about how they relate.</p>
  ${chartStructure()}
  <p class="small"><b>One after another:</b> 21 events in a row, common in popular futurism. <b>Nested:</b> the seventh seal opens into the trumpets, and the seventh trumpet into the bowls. <b>Retold:</b> each set covers the same period with growing intensity (a third, then all). This view, called recapitulation, goes back to Victorinus around AD 260, author of the oldest surviving commentary on Revelation. Support for it: the sixth seal already sounds like the end (6:12–17), and the seventh of each set ends with thunder, lightning and an earthquake (8:5; 11:19; 16:18).</p>
  <h3>The time markers</h3>
  <ul class="decoder">
    <li><b>3½ years</b><span>Named five ways: 42 months (11:2; 13:5), 1,260 days (11:3; 12:6), "a time, and times, and half a time" (12:14), from Daniel 7:25 and 12:7.</span></li>
    <li><b>3½ days</b><span>The witnesses lie dead (11:9, 11).</span></li>
    <li><b>5 months</b><span>The locusts (9:5, 10).</span></li>
    <li><b>½ hour</b><span>Silence in heaven (8:1).</span></li>
    <li><b>1 hour</b><span>The ten kings rule (17:12); Babylon falls (18:10, 17, 19).</span></li>
    <li><b>10 days</b><span>Smyrna's suffering (2:10).</span></li>
    <li><b>1,000 years</b><span>Satan bound; the saints reign (20:2–7).</span></li>
  </ul>
  <h3>Revelation's own decoder</h3>
  <p class="small">Sometimes the book explains its own symbols. Start here before guessing. When it decodes a symbol, it never decodes it into a date.</p>
  <ul class="decoder">${DECODER.map(([r,t])=>`<li><b>${r}</b><span>${t}</span></li>`).join('')}</ul>
  ${topicChips(['structure','sevens','three-and-a-half','daniel'])}
`);

page('about','About the translations',`
  <div class="cart study">The texts</div>
  <h2>${ABOUT.title}</h2>
  <p class="lede">${ABOUT.lead}</p>
  ${ABOUT.facts ? factsBox(ABOUT.facts) : ''}${ABOUT.sections.map(blockHTML).join('')}
  <h3>Compare on Bible Gateway</h3>
  <p class="links"><b>Revelation 1</b>${['NIV','ESV','NASB','NLT','CSB','NKJV'].map(v=>ext(bgURL('Revelation 1',v),v)).join('')}${ext(bgURL('Revelation 1','NIV;ESV;KJV;NASB'),'side by side')}</p>
  ${linksRow(ABOUT.links)}
`);

/* chapter pairs: commentary on the left, the text on the right */
const VERSIONS = [
  {id:'plain', name:'Plain English', short:'Plain English'},
  {id:'kjv', name:'King James Version (1769 text)', short:'KJV'},
  {id:'web', name:'World English Bible', short:'WEB'},
  {id:'asv', name:'American Standard Version (1901)', short:'ASV'},
  {id:'ylt', name:'Young’s Literal Translation (1898)', short:'YLT'},
  {id:'sblgnt', name:'Greek: SBL Greek New Testament', short:'Greek'},
  {id:'greekwords', name:'Greek word by word, with meanings', short:'Greek words'}
];
CHAPTERS.forEach(c => {
  const st = STATION_OF[c.n], kv = KEYV[c.key], here = (kind, i) => st && placeOf(st, kind, i) === c.n;
  let h = `<div class="cart">Revelation ${c.n}</div><h2>${c.title}</h2>${ART[c.art]()}`;
  if(c.caption) h += `<p class="caption">${c.caption}</p>`;
  h += c.sum.map((p,i)=>`<p${i===0?' class="lede"':''}>${p}</p>`).join('');
  if(c.glance) h += factsBox(c.glance);
  h += `<p><button class="pill tolink" data-go="t${c.n}">Read the text of chapter ${c.n} →</button></p>`;
  h += `<div class="verse"><div class="rub">Key verse · ${c.key}</div><div class="plain">${PV[c.key]}</div>
    <dl><dt>KJV</dt><dd class="kjv">${kv.kjv.replace(/\[([^\]]+)\]/g,'<i>$1</i>')}</dd><dt>Greek</dt><dd><span class="greek">${kv.gk}</span></dd></dl></div>`;
  h += `<div class="readings"><div><h4>${ICON.lit}Read literally</h4><p>${c.lit}</p></div><div><h4>${ICON.sym}Read as symbol</h4><p>${c.sym}</p></div></div>`;
  h += `<h3>Interpretations: the four views</h3>${viewsList(c.views)}`;
  (c.deep||[]).forEach(d => h += blockHTML(d));
  if(st){
    const E = EXTRA[st.id] || {};
    if(st.extra && here('extra')) h += factCard(st.extra.replace(/^<p[^>]*>|<\/p>$/g,''));
    (E.facts||[]).forEach((f, i) => { if(here('facts', i)) h += factCard(f); });
    (E.myths||[]).forEach((m, i) => { if(here('myths', i)) h += mythCard(m); });
    if(st.israel && here('israel')) h += `<div class="box israel"><div class="tag">Church and Israel</div><p>${st.israel}</p></div>`;
    if(st.spec && here('spec')) h += specCard(st.spec);
    if(st.spec2 && here('spec2')) h += specCard(st.spec2);
  }
  h += `<p class="echoes"><b>Old Testament echoes</b> · ${c.echoes}</p>`;
  h += `<h3>Topics in this chapter</h3>${topicChips(CH_TOPICS[c.n])}`;
  if(st && here('links')) h += linksRow((EXTRA[st.id]||{}).links);
  page(`c${c.n}`, `Revelation ${c.n}: ${c.title}`, h);
  page(`t${c.n}`, `Revelation ${c.n}: the text`, `<div class="thead"><div class="row"><h2>Revelation ${c.n}</h2><span class="tname" data-tname></span></div>
    <div class="bg"><span>Also on Bible Gateway:</span>${['NIV','ESV','NASB','NLT','CSB'].map(v=>ext(bgURL('Revelation '+c.n,v),v)).join('')}<button class="linkish tolink" data-go="c${c.n}" style="font-size:.8rem">← commentary</button></div>
    <div class="ntoggles">${Object.entries(NOTE_TYPES).map(([k,t])=>`<button data-ntype="${k}" aria-pressed="true" class="${k==='spec'?'only-spec':''}"><i style="--c:var(--n-${k})"></i>${t.label}</button>`).join('')}</div></div>
    <div class="tbody" data-ch="${c.n}"></div>`, 'text');
});

/* study pages */
page('beasts','The beasts',`
  <div class="cart study">Study page</div>
  <h2>The Beasts and What They Stand For</h2>
  <p class="lede">Revelation's creatures are built from Old Testament pieces, so the best first clue to any beast is where its parts came from. "Strongest reading" is Claude's judgment of what the text supports best, not a church's or a consensus; the alternatives are given fairly.</p>
  ${BEASTS.map(b=>`<div class="card"><h4>${b[0]} <span class="small muted" style="font-family:var(--f-body)">${b[1]}</span></h4><dl><dt>What John sees</dt><dd>${b[2]}</dd><dt>Built from</dt><dd>${b[3]}</dd><dt>Strongest reading</dt><dd>${b[4]}</dd><dt>Other readings</dt><dd>${b[5]}</dd></dl></div>`).join('')}
  <h3>The pattern behind them</h3>
  <p>Every evil figure in Revelation is a cheap copy of something holy. The dragon, the beast and the false prophet imitate the Father, the Son and the Spirit (16:13). The beast has a death-wound "as slaughtered," like the Lamb (13:3; 5:6). The land beast has horns "like a lamb" (13:11). The beast "was, and is not, and is about to come up," mocking God, "who is, who was, and who is coming" (17:8; 1:4). The mark on the forehead copies God's seal (13:16; 7:3). A reader who learns to spot the counterfeit is doing what 13:18 asks: "Here is where wisdom comes in."</p>
  ${topicChips(['dragon','beasts','false-prophet','unholy-trinity','666','mark','antichrist','nero'])}
`);

const ISR = NOTES.filter(n=>n.type==='israel');
page('israel','Church and Israel',`
  <div class="cart study">Study page</div>
  <h2>The Church and the Nation of Israel</h2>
  <p class="lede">Does Revelation see one people of God or two? The question shapes how you read chapters 7, 11, 12, 14, 20 and 21.</p>
  <div class="cols2">
    <div><h3 style="color:var(--lapis)">For two distinct peoples</h3><ul>
      <li>"Church" appears 19 times in chapters 1–3, then not again until 22:16.</li>
      <li>The 144,000 are listed tribe by tribe (7:4–8).</li>
      <li>Jerusalem is central: "where their Lord too was crucified" (11:8), "the beloved city" (20:9).</li>
      <li>The woman of chapter 12 matches Joseph's dream of Israel (Genesis 37:9).</li>
      <li>Paul expects a future turning of Israel (Romans 11:25–26).</li></ul></div>
    <div><h3 style="color:var(--olive)">For one people</h3><ul>
      <li>The church is called a "kingdom and priests" (1:6; 5:10), Israel's title from Exodus 19:6.</li>
      <li>"Those who say they are Jews and are not" (2:9; 3:9).</li>
      <li>John hears 144,000 from Israel and sees a crowd from every nation (7:4, 9).</li>
      <li>One bride (19:7). One city, with Israel's tribes on the gates and the apostles on the foundations (21:12–14).</li>
      <li>Paul: those who belong to Christ are Abraham's offspring and heirs of the promise (Galatians 3:29).</li></ul></div>
  </div>
  <h3>The main positions</h3>
  ${[['Dispensational','Two peoples with two sets of promises. The church is raptured before the tribulation, and God then deals with national Israel.','Chapters 6–19 are Daniel’s 70th week for Israel. The 144,000 are Jewish. The millennium fulfills Israel’s land promises.'],
     ['Progressive dispensational','One people of God in Christ, but ethnic Israel keeps a real future role.','A similar timeline, with more overlap between Israel and the church.'],
     ['Historic premillennial','One people, plus a future mass turning of Jews to Jesus (Romans 11).','The church goes through the tribulation; Christ then reigns 1,000 years.'],
     ['Covenant (amil or postmil)','One people. The church continues and fulfills Israel, and Jewish believers remain part of it.','The 144,000 and the crowd are the same people. The new Jerusalem is the whole church.'],
     ['Preterist','Varies. The focus is judgment on first-century Jerusalem’s leaders, not on the Jewish people.','Babylon may be Jerusalem in AD 70. This has been misused to fuel hostility toward Jews, which careful preterists firmly reject.'],
     ['Messianic Jewish','One body in Messiah, in which Jewish believers keep their Jewish identity and calling.','Reads the tribal names and Jerusalem as lasting signs of God’s faithfulness to Israel.']]
     .map(([a,b,c])=>`<div class="card"><h4>${a}</h4><dl><dt>Israel and church</dt><dd>${b}</dd><dt>Reading Revelation</dt><dd>${c}</dd></dl></div>`).join('')}
  ${specCard({title:'One tree, with Israel at its root', body:`Revelation never "replaces" Israel. It names the tribes one by one and writes them on the gates of the final city. But it also never keeps two separate peoples in its final picture: one bride, one city, one Lamb. My reading is closest to Paul's single olive tree in Romans 11, where Israel is the trunk and the nations are grafted in. The tribe names on the gates say "you enter through Israel," and the apostles on the foundations say "you stand on the gospel."`, refs:'Romans 11:17–24; Revelation 21:12–14; Revelation 19:7'})}
  <h3>Notes on this question in the text</h3>
  <ul class="ideas">${ISR.map(n=>`<li>${noteLink(n)}<p class="muted">${n.v}</p></li>`).join('')}</ul>
  ${topicChips(['church-israel','144000','twelve-tribes','woman-of-ch12','jerusalem','synagogue-of-satan','temple'])}
`);

page('words','Translation watch',`
  <div class="cart study">Study page</div>
  <h2>Translation Watch</h2>
  <p class="lede">Some popular beliefs about Revelation rest on a translation choice, a copying error, or a missing piece of history. Each is given with the Greek so you can check it yourself.</p>
  <p class="small muted"><span class="kindb k-mis">${KIND.mis}</span> the English says something the Greek does not. <span class="kindb k-var">${KIND.var}</span> manuscripts differ. <span class="kindb k-com">${KIND.com}</span> a popular belief the text does not say. <span class="kindb k-deb">${KIND.deb}</span> the Greek allows more than one reading. <span class="kindb k-nu">${KIND.nu}</span> correct English that hides something.</p>
  ${Object.keys(WORDS).map(wordCard).join('')}
  ${topicChips(['textual-history'])}
`);

const SPEC_NOTES = NOTES.filter(n=>n.type==='spec');
const SPEC_TOPICS = TLIST.filter(t=>t.claude);
page('ideas','Claude’s theories',`
  <div class="cart study">Study page</div>
  <h2>Claude's Theories</h2>
  <p class="lede">You asked for new ideas, not just a summary of what others have said. These are mine. Each is built on real verses and cites them, and each says where it overlaps with published scholarship. None of them is established teaching. Weigh them the way the Bereans did (Acts 17:11).</p>
  <h3>In the text</h3>
  <ul class="ideas">${SPEC_NOTES.map(n=>`<li>${noteLink(n)}<p class="muted">${n.v} · ${n.p}</p></li>`).join('')}</ul>
  <h3>On the topic pages</h3>
  <ul class="ideas">${SPEC_TOPICS.map(t=>`<li><button class="linkish" data-go="tp-${t.id}">${t.claude.title}</button><p class="muted">${t.title}</p></li>`).join('')}</ul>
  <h3>On the chapter pages</h3>
  <ul class="ideas">${STATIONS.flatMap(s=>[s.spec,s.spec2].filter(Boolean).map(sp=>`<li><button class="linkish" data-go="c${s.ch[0]}">${sp.title}</button><p class="muted">Revelation ${s.ch[0]}</p></li>`)).join('')}</ul>
  <p class="small muted">The button at the top hides all of these if you want only the established material.</p>
`);

const ALLMYTHS = STATIONS.flatMap(s=>((EXTRA[s.id]||{}).myths||[]).map(m=>({m,s})));
page('mythos','Other traditions',`
  <div class="cart study">Study page</div>
  <h2>End-Times Stories from Other Traditions</h2>
  <p class="lede">Many cultures tell stories about how the world ends and begins again. Some shaped the imagery John used. Others were written down much later, and some look alike with no known connection. Each entry says which, as best the evidence allows.</p>
  ${ALLMYTHS.map(({m,s})=>`<div class="card"><h4>${ext(WIKI(m.link[1]), m.title)}</h4><dl><dt>Tradition</dt><dd>${m.culture}</dd><dt>Meets Revelation</dt><dd><button class="linkish" data-go="c${s.ch[0]}">${s.cart}</button></dd><dt>Connection</dt><dd>${m.link2}</dd></dl></div>`).join('')}
  <h3>Notes in the text</h3>
  <ul class="ideas">${NOTES.filter(n=>n.type==='myth').map(n=>`<li>${noteLink(n)}<p class="muted">${n.v} · ${n.p}</p></li>`).join('')}</ul>
  ${topicChips(['other-traditions','dragon','woman-of-ch12'])}
`);

page('sources','Sources',`
  <div class="cart study">Study page</div>
  <h2>Sources and Further Study</h2>
  <p class="lede">These books stand behind much of this scroll. They come from different views, so reading two or three side by side is the best way to stay fair.</p>
  <ul class="ideas">${BOOKS.map(([t,d])=>`<li><b style="font-family:var(--f-display);font-weight:400">${t}</b><p class="muted">${d}</p></li>`).join('')}</ul>
  <h3>Cited on the topic pages</h3>
  <ul class="srcs">${Object.values(SRC).map(s=>`<li>${s}</li>`).join('')}</ul>
  <h3>Free online texts</h3>
  <p class="links"><b>Read</b>${ext('https://www.blueletterbible.org/kjv/rev/1/1/','Blue Letter Bible')}${ext(bgURL('Revelation 1','NIV;ESV;KJV;NASB'),'Bible Gateway')}${ext('https://sblgnt.com/','SBL Greek New Testament')}${ext('https://www.stepbible.org/?q=reference=Rev.1','STEP Bible')}</p>
  <h3>Text licenses</h3>
  <p class="small">KJV, ASV, YLT and the World English Bible are in the public domain. The Greek text is the SBLGNT, © 2010 Society of Biblical Literature and Logos Bible Software, used under its free license. The word-by-word Greek is from STEPBible's Translators Amalgamated Greek New Testament by Tyndale House, Cambridge, licensed CC BY 4.0. The Plain English rendering and all notes were written for this page.</p>
`);

page('art','Art and image prompts',`
  <div class="cart study">Study page</div>
  <h2>Art and Image Prompts</h2>
  <p class="lede">Every drawing on this scroll is an original sketch made for this page, so it needs no credit or license. The map is drawn from the cities' real locations.</p>
  <h3>Public domain art to look at</h3>
  <ul class="ideas">${ART_SOURCES.map(([t,d,u])=>`<li>${ext(u,t)}<p class="muted">${d}</p></li>`).join('')}</ul>
  <h3>Prompts for ChatGPT</h3>
  <p class="small">Each prompt follows the text's own details. Paste one into ChatGPT's image tool. The shared style block at the end keeps every image in the same scroll-sketch look.</p>
  ${PROMPTS.map(([t,p],i)=>`<div class="prompt"><header><b>${t}</b><button class="copy" data-copy="p${i}">Copy prompt</button></header><textarea id="p${i}" readonly>${esc(p+'\n\n'+STYLE)}</textarea></div>`).join('')}
`);

page('topics','All topics',`
  <div class="cart study">Topic pages</div>
  <h2>All Topics</h2>
  <p class="lede">Deep dives into the ideas, people, places, symbols and words of Revelation. Each page gives the history, the range of readings, common and less common beliefs, and where I have one, my own theory with references.</p>
  ${KINDS.map(k=>`<h3 style="color:var(--k-${k})">${k}</h3>${topicChips(TLIST.filter(t=>t.kind===k).map(t=>t.id))}`).join('')}
`);

TLIST.forEach(t => {
  const tn = NOTES.filter(n=>n.top===t.id);
  let h = `<div class="cart kind" style="--kc:var(--k-${t.kind})">${t.kind}</div><h2>${t.title}</h2>`;
  if(t.chs.length) h += `<p class="small muted">In Revelation ${t.chs.map(n=>`<button class="linkish" data-go="c${n}">${n}</button>`).join(', ')}</p>`;
  h += `<p class="lede">${t.lead}</p>`;
  if(t.facts) h += factsBox(t.facts);
  h += t.sections.map(blockHTML).join('');
  if(t.views) h += `<h3>How the four views read it</h3>${viewsList(t.views)}`;
  if((t.common||[]).length || (t.uncommon||[]).length) h += `<div class="cols2"><div><h3>Common beliefs</h3><ul>${(t.common||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div><div><h3>Less common beliefs</h3><ul>${(t.uncommon||[]).map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`;
  if(t.claude) h += specCard(t.claude);
  if(tn.length) h += `<h3>Notes in the text</h3><ul class="ideas">${tn.map(n=>`<li class="${n.type==='spec'?'only-spec':''}">${noteLink(n)}<p class="muted">${n.v} · ${n.p}</p></li>`).join('')}</ul>`;
  h += linksRow(t.links);
  if((t.sources||[]).length) h += `<h3>Sources</h3><ul class="srcs">${t.sources.map(s=>`<li>${SRC[s]}</li>`).join('')}</ul>`;
  const rel = [...new Set(t.chs.flatMap(n=>CH_TOPICS[n]))].filter(id=>id!==t.id).slice(0,10);
  if(rel.length) h += `<h3>Related topics</h3>${topicChips(rel)}`;
  page(`tp-${t.id}`, t.title, h, 'topic');
});
if(pages.length % 2) page('end','The end', `<div class="cart study">Amen</div><h2>"Come, Lord Jesus"</h2>${ART.omega()}<p class="lede">The book that began "the time is near" ends with a prayer (22:20).</p>`);

const sheet = $('sheet');
sheet.innerHTML = pages.map(p=>`<section class="page ${p.cls}" id="${p.id}" aria-label="${esc(p.label)}">${p.html}</section>`).join('');
const els = [...sheet.children];
const IDX = {}; pages.forEach((p,i)=>IDX[p.id]=i);

/* ---------- Bible references become buttons ---------- */
const SKIP = 'a,button,textarea,select,.tbody,.greek,svg,h1,h2,.cart';
function linkify(root){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => (n.parentElement.closest(SKIP) || !/\d/.test(n.nodeValue)) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  const nodes = []; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    const list = !!node.parentElement.closest('.reflist');
    const prev = node.previousSibling, text = node.nodeValue, refs = findRefs(text, list, prev ? prev.textContent : ''); if(!refs.length) return;
    const frag = document.createDocumentFragment(); let at = 0;
    refs.forEach((r, i) => {
      /* a button is atomic, so a line could break between "(" and the reference: keep brackets with it */
      const lead = text.slice(at, r.start), open = (lead.match(/[(\[“"]$/) || [''])[0];
      const close = (text.slice(r.end, refs[i+1] ? refs[i+1].start : text.length).match(/^[)\]”".,;:]+/) || [''])[0];
      frag.append(lead.slice(0, lead.length - open.length));
      const b = document.createElement('button'); b.className = 'ref' + (r.book==='Revelation'?' rv':'');
      b.dataset.ref = JSON.stringify([r.book,r.c,r.v,r.c2,r.v2]); b.textContent = text.slice(r.start, r.end);
      if(open || close){ const w = document.createElement('span'); w.className = 'nobr'; w.append(open, b, close); frag.append(w); }
      else frag.append(b);
      at = r.end + close.length;
    });
    frag.append(text.slice(at)); node.replaceWith(frag);
  });
}
els.forEach(el => linkify(el));

/* our fonts draw a straight " as a closing quote, so every displayed " becomes “ or ” by what comes before it */
function smartQuotes(root){
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, { acceptNode: n => n.parentElement.closest('textarea,script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT });
  /* the characters around a quote are looked up within its block: a new paragraph, cell or chip starts fresh */
  const inline = e => e.classList.contains('ref') || /^(I|B|EM|STRONG|A|SUP|SUB|SMALL)$/.test(e.tagName)
    || (e.tagName === 'SPAN' && (!!e.closest('.gl') || getComputedStyle(e).display.startsWith('inline')));
  const blockOf = n => { let e = n.parentElement; while(e && e !== root && inline(e)) e = e.parentElement; return e; };
  const ns = []; for(let n; (n = walker.nextNode()); ) ns.push({n, v:n.nodeValue, b:blockOf(n)});
  ns.forEach((t, k) => {
    if(!t.v.includes('"')) return;
    const before = k && ns[k-1].b === t.b ? ns[k-1].v : '', after = ns[k+1] && ns[k+1].b === t.b ? ns[k+1].v : '';
    /* opening after a space or bracket, or when a word follows something that is not a letter or closing mark (a verse number: 3"To) */
    t.n.nodeValue = t.v.replace(/"/g, (q, i) => {
      const p = i ? t.v[i-1] : (before.slice(-1) || ' '), x = t.v[i+1] || after[0] || '';
      return /[\s(\[{—–\-\/]/.test(p) || (/[\p{L}\d]/u.test(x) && !/[\p{L}.,!?;:…’'”)\]]/u.test(p)) ? '\u201c' : '\u201d'; });
  });
}
els.forEach(el => smartQuotes(el));

/* ---------- text pages ---------- */
const TEXTS = { plain:{verses:PV} };
const loading = {};
function loadText(id){
  if(TEXTS[id]) return Promise.resolve(TEXTS[id]);
  return loading[id] = loading[id] || fetch(`text/${id}.json`).then(r=>{ if(!r.ok) throw new Error(r.status); return r.json(); }).then(d=>TEXTS[id]=d);
}
const GLOSS_AT = {}; GLOSSES.forEach(g => (GLOSS_AT[g.v] = GLOSS_AT[g.v] || []).push(g));
/* Plain English verse with note highlights and "today's words" glosses. Both are spans over the verse text;
   a span fully inside another nests in it, and one that partly overlaps an earlier span is dropped. */
function plainVerse(key){
  const t = PV[key], span = (x, k) => { const s = t.indexOf(x.a); return s < 0 ? null : {x, k, s, e:s+x.a.length, kids:[]}; };
  const spans = [...(NOTES_AT[key]||[]).map(n=>span(n,'n')), ...(GLOSS_AT[key]||[]).map(g=>span(g,'g'))].filter(Boolean)
    .sort((a,b) => a.s-b.s || b.e-a.e || (a.k==='g' ? -1 : 1));
  const root = {s:0, e:t.length, kids:[]}, stack = [root];
  spans.forEach(sp => {
    while(sp.s >= stack[stack.length-1].e) stack.pop();
    const top = stack[stack.length-1], prev = top.kids[top.kids.length-1];
    if(sp.e > top.e || (prev && sp.s < prev.e)) return;
    top.kids.push(sp); stack.push(sp);
  });
  /* a gloss box is atomic, so a note's underline can't reach into it; the phrase inside repeats the underline (nt-in) */
  const render = (node, note) => { let out = '', at = node.s;
    node.kids.forEach((c, i) => {
      out += esc(t.slice(at, c.s)); at = c.e;
      const html = wrap(c, render(c, c.k==='n' ? c.x : note), note);
      /* keep punctuation right after a gloss on its line: a gloss box is atomic, so the line could break before it */
      const p = c.k==='g' ? (t.slice(c.e, node.kids[i+1] ? node.kids[i+1].s : node.e).match(/^[.,;:!?"'”’)]+/) || [''])[0] : '';
      out += p ? `<span class="glp">${html}${esc(p)}</span>` : html; at += p.length; });
    return out + esc(t.slice(at, node.e)); };
  const wrap = (c, inner, note) => c.k==='n'
    ? `<span class="nt t-${c.x.type}" role="button" tabindex="0" data-note="${c.x.id}">${inner}</span>`
    : `<span class="gl"><span class="gl-o${note ? ' nt-in t-'+note.type : ''}">${inner}</span><span class="gl-m">${esc(c.x.m)}</span></span>`;
  return render(root);
}
const markers = key => (NOTES_AT[key]||[]).map(n=>`<button class="nm t-${n.type}" data-note="${n.id}" aria-label="${esc(NOTE_TYPES[n.type].label+': '+n.title)}"></button>`).join('');
function verseHTML(ver, key){
  const v = +key.split(':')[1], num = `<span class="vn${v===1?' cv':''}">${v===1?key.split(':')[0]:v}</span>`;
  if(ver==='plain') return `<span class="v" id="v${key.replace(':','-')}">${num}${plainVerse(key)} </span>`;
  const d = TEXTS[ver].verses[key];
  if(ver==='greekwords') return `<span class="v" id="v${key.replace(':','-')}">${num}${markers(key)}${(d||[]).map(([g,gl,lem,str,tr])=>`<span class="gw${tr?' tr':''}" data-gw="${esc(lem+'|'+str+'|'+(tr?'1':''))}"><b>${esc(g)}</b><small>${esc(gl)}</small></span>`).join('')} </span>`;
  const txt = esc(d||'').replace(/\[([^\]]+)\]/g,'<i>$1</i>');
  return `<span class="v" id="v${key.replace(':','-')}">${num}${markers(key)}${txt} </span>`;
}
const TNOTE = {
  kjv:'Words in <i>italics</i> were added by the KJV translators to make the English read smoothly, as in printed KJV Bibles.',
  sblgnt:'SBLGNT © 2010 Society of Biblical Literature and Logos Bible Software. Used under its free license.',
  greekwords:'Greek words and meanings from STEPBible’s TAGNT, Tyndale House, Cambridge, CC BY 4.0. Point at a word for its dictionary form and Strong’s number. Faded words are found only in the Textus Receptus or Byzantine manuscripts, which the KJV follows.',
  plain:'Plain English rendering written for this page from the SBLGNT Greek.'
};
/* One-line glosses: each may run on under the words after its phrase. A gloss that would pass the right edge of the
   column slides left to end at the edge, if that keeps it clear of the gloss before it. Otherwise, where a gloss would
   reach the next gloss or the edge, its phrase box is widened to the gloss's width, which reflows the line; repeat until
   nothing collides. A gloss wider than the whole column wraps. */
function fitGlosses(){
  if(document.body.classList.contains('nogloss')) return;
  const gs = [...document.querySelectorAll('.tbody .gl')], GAP = 8;
  gs.forEach(g => { g.style.minWidth = ''; g.lastChild.style.transform = ''; g.lastChild.classList.remove('wrap'); });
  for(let pass = 0, changed = true; changed && pass < 8; pass++){
    changed = false;
    const m = gs.map(g => { const b = g.getBoundingClientRect(), col = g.parentElement.closest('p').getBoundingClientRect();
      return {g, l:b.left, w:b.width, y:g.lastChild.getBoundingClientRect().top, need:g.lastChild.scrollWidth, L:col.left, R:col.right}; });
    let prevEnd = -Infinity, prevY = null;
    m.forEach((x, i) => {
      if(prevY === null || Math.abs(x.y - prevY) >= 6) prevEnd = -Infinity;
      prevY = x.y;
      let start = x.l, end = x.l + Math.max(x.w, x.need);
      const nx = m[i+1], hitsNext = nx && Math.abs(nx.y - x.y) < 6 && end + GAP > nx.l;
      if(!hitsNext && end > x.R + 1 && x.R - x.need >= prevEnd + GAP && x.need <= x.R - x.L){
        const dx = x.R - end; x.g.lastChild.style.transform = `translateX(${dx}px)`; start += dx; end += dx;
      } else if(x.need > x.w + 1 && (hitsNext || end > x.R + 1)){
        if(x.need > x.R - x.L) x.g.lastChild.classList.add('wrap'); else x.g.style.minWidth = x.need + 'px';
        changed = true;
      }
      prevEnd = end;
    });
    if(changed) gs.forEach(g => g.lastChild.style.transform = '');
  }
}
function renderText(ver){
  const V = VERSIONS.find(x=>x.id===ver);
  document.querySelectorAll('.tbody').forEach(tb => {
    const c = +tb.dataset.ch;
    tb.className = 'tbody' + (ver==='sblgnt'?' greekt':'') + (ver==='greekwords'?' words':'');
    tb.innerHTML = PLAIN[c].map(sec => `<h4>${sec.h}</h4><p>${sec.vs.map(k=>verseHTML(ver,k)).join('')}</p>`).join('')
      + `<p class="textnote">${TNOTE[ver] || (TEXTS[ver].name+'. '+TEXTS[ver].license+'.')}</p>`;
  });
  document.querySelectorAll('.tbody').forEach(smartQuotes);
  document.querySelectorAll('[data-tname]').forEach(s => s.textContent = V.name);
  if(ver==='plain') fitGlosses();
}
const tsel = $('tsel');
tsel.innerHTML = VERSIONS.map(v=>`<option value="${v.id}">${v.short}</option>`).join('');
async function setVersion(ver){
  const anchor = visibleVerse();
  tsel.disabled = true;
  try { await loadText(ver); } catch(e){ tsel.value = current.ver; tsel.disabled = false; flashWhere('That translation could not be loaded. Check your connection and try again.'); return; }
  tsel.disabled = false; current.ver = ver; tsel.value = ver; store.set('rev-ver', ver);
  renderText(ver);
  if(anchor){ const el = $(anchor.id); if(el) anchor.page.scrollTop = el.offsetTop - anchor.off; }
}
function visibleVerse(){
  const p = els[current.idx + (spread && els[current.idx+1] && els[current.idx+1].classList.contains('text') ? 1 : 0)];
  if(!p || !p.classList.contains('text')) return null;
  const top = p.scrollTop + 80; const v = [...p.querySelectorAll('.v')].find(v=>v.offsetTop + v.offsetHeight > top);
  return v ? {id:v.id, page:p, off:v.offsetTop - p.scrollTop} : null;
}
tsel.addEventListener('change', () => setVersion(tsel.value));

/* ---------- layout: snap to spreads of two portrait pages on a landscape desktop ---------- */
const track = $('track');
let spread = false, pw = 600;
const current = {idx:0, ver:'plain'};
function layout(){
  const W = track.clientWidth, H = track.clientHeight;
  const two = Math.min(Math.floor(W/2), Math.floor(H*0.82));
  spread = W > H && two >= 420;
  pw = spread ? two : W;
  const side = spread ? Math.floor((W - 2*pw)/2) : 0;
  document.documentElement.style.setProperty('--pw', pw+'px');
  document.documentElement.style.setProperty('--side', side+'px');
  document.body.classList.toggle('spread', spread);
  track.scrollLeft = firstOf(current.idx) * pw;
  if(current.ver==='plain') fitGlosses();
  document.querySelectorAll('.tblwrap').forEach(tableEdge);
}
/* a table wider than its page scrolls sideways; fade its right edge until the reader reaches the end */
function tableEdge(w){ w.classList.toggle('more', w.scrollLeft + w.clientWidth < w.scrollWidth - 2); }
document.addEventListener('scroll', e => { if(e.target.classList && e.target.classList.contains('tblwrap')) tableEdge(e.target); }, true);
const firstOf = i => spread ? i - (i % 2) : i;
const step = () => spread ? 2 : 1;
function scrollToIdx(i, smooth=true){
  i = Math.max(0, Math.min(els.length-1, i));
  const far = Math.abs(firstOf(i) - firstOf(current.idx)) > 6;
  track.scrollTo({left: firstOf(i) * pw, behavior: (reduce || far || !smooth) ? 'auto' : 'smooth'});
}

/* back pill after a long jump */
const backBtn = $('back'); const backStack = [];
function remember(){ const i = firstOf(current.idx); backStack.push({i, tops:[els[i].scrollTop, els[i+1] ? els[i+1].scrollTop : 0]}); if(backStack.length>20) backStack.shift(); showBack(); }
function showBack(){ const b = backStack[backStack.length-1]; backBtn.hidden = !b; if(b) backBtn.textContent = '← Back to ' + shortLabel(b.i); }
backBtn.onclick = () => { const b = backStack.pop(); if(!b) return; scrollToIdx(b.i, false); els[b.i].scrollTop = b.tops[0]; if(els[b.i+1]) els[b.i+1].scrollTop = b.tops[1]; showBack(); };
const shortLabel = i => { const id = pages[i].id; return /^[ct]\d/.test(id) ? 'chapter '+id.slice(1) : pages[i].label; };

function go(id, push=true){
  const i = IDX[id]; if(i===undefined) return;
  if(push && Math.abs(firstOf(i) - firstOf(current.idx)) > 2) remember();
  scrollToIdx(i);
  return i;
}
function goVerse(key){
  const c = key.split(':')[0], i = IDX['t'+c];
  if(Math.abs(firstOf(i) - firstOf(current.idx)) > 0) remember();
  scrollToIdx(i);
  const p = els[i], v = $('v'+key.replace(':','-')); if(!v) return;
  p.scrollTo({top: Math.max(0, v.offsetTop - 110), behavior: reduce ? 'auto' : 'smooth'});
  v.classList.remove('flash'); void v.offsetWidth; v.classList.add('flash');
  setTimeout(() => v.classList.remove('flash'), 1800);
}

/* ---------- navigation rows ---------- */
const chapNav = $('chapNav'), topicNav = $('topicNav'), where = $('where');
chapNav.innerHTML = `<button data-go="intro" title="Opening">✦</button><button data-go="views" class="study">4 views</button><button data-go="keys" class="study">keys</button><button data-go="about" class="study">texts</button><span class="sep"></span>`
  + CHAPTERS.map(c=>`<button data-go="c${c.n}" data-ch="${c.n}" title="Revelation ${c.n}: ${esc(c.title)}">${c.n}</button>`).join('')
  + `<span class="sep"></span>` + [['beasts','beasts'],['israel','church & Israel'],['words','translation watch'],['ideas','Claude’s theories'],['mythos','other traditions'],['sources','sources'],['art','art & prompts'],['topics','all topics']].map(([id,l])=>`<button data-go="${id}" class="study">${l}</button>`).join('');
let topicFilter = null, allFor = null;
function renderTopicNav(){
  const ids = topicFilter ? CH_TOPICS[topicFilter] : TLIST.map(t=>t.id);
  const here = pages[current.idx] && pages[current.idx].id;
  topicNav.innerHTML = (topicFilter ? `<span class="lbl">Topics in chapter ${topicFilter}</span><button class="all" data-alltopics>show all ${TLIST.length}</button>` : `<span class="lbl">All ${TLIST.length} topics</span>`)
    + ids.filter(id=>TOP[id]).map(id=>`<button class="tchip${'tp-'+id===here?' on':''}" data-go="tp-${id}" style="--kc:var(--k-${TOP[id].kind})"><i></i>${TOP[id].title}</button>`).join('');
  topicNav.scrollLeft = 0;
}
const chapterOf = i => { const m = pages[i] && pages[i].id.match(/^[ct](\d+)$/); return m ? +m[1] : null; };
function sync(){
  const i = Math.round(track.scrollLeft / pw), first = firstOf(i);
  if(first === firstOf(current.idx) && sync.done) return; sync.done = true;
  current.idx = first;
  const a = pages[first], b = spread ? pages[first+1] : null, ch = chapterOf(first);
  where.textContent = ch ? `Revelation ${ch}: ${CHAPTERS[ch-1].title}` : (b ? `${a.label} · ${b.label}` : a.label);
  chapNav.querySelectorAll('button').forEach(x => x.classList.toggle('on', x.dataset.go === a.id || (ch && x.dataset.ch == ch)));
  const on = chapNav.querySelector('button.on'); if(on) chapNav.scrollTo({left: on.offsetLeft - chapNav.clientWidth/2 + on.clientWidth/2});
  if(ch && ch !== topicFilter && ch !== allFor){ topicFilter = ch; allFor = null; renderTopicNav(); }
  else topicNav.querySelectorAll('.tchip').forEach(x => x.classList.toggle('on', x.dataset.go === a.id || (b && x.dataset.go === b.id)));
}
let raf = 0; track.addEventListener('scroll', () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(sync); }, {passive:true});
$('prev').onclick = () => scrollToIdx(current.idx - step());
$('next').onclick = () => scrollToIdx(current.idx + step());
document.addEventListener('keydown', e => {
  if(!$('modal').hidden){ if(e.key==='Escape') closeModal(); return; }
  if((e.key==='Enter' || e.key===' ') && e.target.matches('span[role="button"]')){ e.preventDefault(); e.target.click(); return; }
  if(e.target.closest('textarea,input,select')) return;
  if(e.key==='ArrowRight'){ e.preventDefault(); $('next').click(); }
  if(e.key==='ArrowLeft'){ e.preventDefault(); $('prev').click(); }
});
/* a vertical wheel reads down a page; at the bottom (or top) it turns to the next (or previous) spread */
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

/* ---------- tooltip ---------- */
const tip = $('tip');
function tipFor(el){
  if(el.dataset.note){ const n = NOTES[el.dataset.note], t = NOTE_TYPES[n.type];
    return {c:t.color, html:`<span class="tt"><i></i>${t.label}${n.kind?' · '+KIND[n.kind]:''}</span><b>${n.title}</b>${esc(n.p||'')}`}; }
  if(el.dataset.ref){ const r = parseRefData(el.dataset.ref), keys = verseKeys(r);
    const first = keys.length ? verseText(keys[0]) : null;
    if(first === undefined) loadRefDB().then(() => { if(tip.dataset.for === el.dataset.ref && !tip.hidden) showTip(el); });
    const txt = first ? `${esc(first.slice(0,180))}${first.length>180||keys.length>1?'…':''}` : (first===undefined ? 'Loading…' : 'Click to read on Bible Gateway');
    return {c:'var(--lapis)', html:`<b>${refLabel(r)}</b>${txt}`}; }
  if(el.dataset.gw){ const [lem,str,tr] = el.dataset.gw.split('|');
    return {c:'var(--ochre)', html:`<span class="gk">${esc(lem)}</span>${str?`<span class="small">Strong’s ${esc(str)}</span>`:''}${tr?'<br><span class="small">Only in the Textus Receptus or Byzantine text</span>':''}`}; }
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
const TIPS = '[data-note],[data-ref],[data-gw]';
if(matchMedia('(hover:hover)').matches){
  document.addEventListener('pointerover', e => { const el = e.target.closest(TIPS); if(el && !el.closest('.modal')) showTip(el); });
  document.addEventListener('pointerout', e => { const el = e.target.closest(TIPS); if(el && !el.contains(e.relatedTarget)) hideTip(); });
}
document.addEventListener('focusin', e => { const el = e.target.closest(TIPS); if(el && !el.closest('.modal')) showTip(el); else hideTip(); });
track.addEventListener('scroll', hideTip, {passive:true, capture:true});

/* ---------- references: verse lookups ---------- */
let REFDB = null, refdbLoading = null;
const loadRefDB = () => REFDB ? Promise.resolve(REFDB) : (refdbLoading = refdbLoading || fetch('text/refs.json').then(r=>r.json()).then(d=>REFDB=d));
const parseRefData = s => { const [book,c,v,c2,v2] = JSON.parse(s); return {book,c,v,c2,v2}; };
const refLabel = r => `${r.book} ${r.c}${r.v?':'+r.v:''}${r.c2?'–'+r.c2+(r.v2?':'+r.v2:''):r.v2?'–'+r.v2:''}`;
const vcount = (book, c) => book==='Revelation' ? REV_VC[c-1] : (REFDB && REFDB.vc[book] ? REFDB.vc[book][c-1] : 0);
function verseKeys(r){
  if(r.book==='Revelation') return refVerses(r, vcount, 40);
  if(!REFDB) return r.v ? [`${r.book} ${r.c}:${r.v}`] : [];
  return refVerses(r, vcount, 40);
}
/* undefined = not loaded yet, null = not available */
function verseText(key){
  if(key.startsWith('Revelation ')) return PV[key.slice(11)] || null;
  if(!REFDB) return undefined;
  const e = REFDB.v[key]; return e ? e[0] : null;
}

/* ---------- modal ---------- */
const modal = $('modal'), mbody = $('mbody'), mtype = $('mtype'), mback = $('mback');
let mstack = [], lastFocus = null;
function openModal(view, push=false){
  if(modal.hidden){ lastFocus = document.activeElement; mstack = []; }
  else if(push && mstack.length) {}
  if(!push) mstack = [];
  mstack.push(view);
  renderModal();
}
function renderModal(){
  const view = mstack[mstack.length-1];
  const d = view.kind === 'note' ? noteView(view.id) : refView(view.r);
  modal.querySelector('.mbox').style.setProperty('--c', d.c);
  mtype.innerHTML = d.type; mbody.innerHTML = d.html; linkify(mbody); smartQuotes(mbody);
  mback.hidden = mstack.length < 2;
  modal.hidden = false; hideTip(); mbody.scrollTop = 0;
  $('mclose').focus({preventScroll:true});
  if(d.after) d.after();
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

function noteView(id){
  const n = NOTES[id], t = NOTE_TYPES[n.type];
  let h = `<h3 id="mtitle">${n.title}</h3>`;
  h += `<div class="quote">"${esc(n.a)}" <span class="small">(Revelation ${n.v}, Plain English)</span></div>`;
  if(n.greek) h += `<div class="gk">${n.greek}</div>`;
  if(n.type==='spec') h += `<p class="spec-note">This is my own idea, offered for you to test. It is not established scholarship.</p>`;
  h += `<p>${n.body}</p>`;
  if(n.r) h += `<p class="small reflist"><b style="font-family:var(--f-display);font-weight:400;letter-spacing:.05em">References</b> · ${n.r}</p>`;
  h += linksRow(n.l, 'Further reading');
  if(n.s && n.s.length) h += `<p class="small" style="margin-top:10px"><b style="font-family:var(--f-display);font-weight:400">Sources</b></p><ul class="srcs">${n.s.map(s=>`<li>${SRC[s]}</li>`).join('')}</ul>`;
  h += `<div class="acts"><button class="pill" data-verse="${n.v}">Go to ${n.v} in the text</button>${n.top&&TOP[n.top]?`<button class="pill" data-go="tp-${n.top}" style="border-color:var(--k-${TOP[n.top].kind})">Topic: ${TOP[n.top].title}</button>`:''}${n.w?`<button class="pill" data-go="words">Translation watch</button>`:''}${ext(bgURL('Revelation '+n.v,'NIV;ESV;KJV;NASB'),'Compare translations ↗','pill')}</div>`;
  return {c:t.color, type:`<i></i>${t.label}${n.kind?` <span class="kindb k-${n.kind}">${KIND[n.kind]}</span>`:''}`, html:h};
}
function refView(r){
  const label = refLabel(r), rev = r.book === 'Revelation';
  const keys = verseKeys(r);
  let h = `<h3 id="mtitle">${label}</h3>`, after = null;
  if(rev){
    h += keys.map(k=>`<p class="vrow"><span class="vn">${k.split(':')[1]}</span>${esc(PV[k.slice(11)]||'')}</p>`).join('');
    h += `<p class="small muted">Plain English. Notes on ${keys.length>1?'these verses':'this verse'}: ${keys.flatMap(k=>NOTES_AT[k.slice(11)]||[]).map(n=>noteLink(n)).join(', ') || 'none'}.</p>`;
    h += `<div class="acts"><button class="pill" data-verse="${r.c}:${r.v||1}">Go to ${r.c}:${r.v||1} in the text</button><button class="pill" data-go="c${r.c}">Chapter ${r.c} commentary</button>${ext(bgURL(label,'NIV'),'Read in the NIV on Bible Gateway ↗','pill')}</div>`;
  } else if(!REFDB){
    h += `<p class="muted">Loading the verse…</p>`;
    after = () => loadRefDB().then(() => { if(!modal.hidden && mstack[mstack.length-1].r === r) renderModal(); }, () => { mbody.querySelector('p.muted').textContent = 'The verse text could not be loaded. Use the Bible Gateway link below.'; });
    h += `<div class="acts">${ext(bgURL(label,'NIV'),'Read in the NIV on Bible Gateway ↗','pill')}</div>`;
  } else {
    const have = keys.filter(k=>REFDB.v[k]);
    if(have.length){
      h += `<div class="vlab">World English Bible</div>` + have.map(k=>`<p class="vrow"><span class="vn">${k.split(':')[1]}</span>${esc(REFDB.v[k][0])}</p>`).join('');
      h += `<div class="vlab">King James Version</div>` + have.map(k=>`<p class="vrow"><span class="vn">${k.split(':')[1]}</span>${esc(REFDB.v[k][1]).replace(/\[([^\]]+)\]/g,'<i>$1</i>')}</p>`).join('');
      if(keys.length >= 40) h += `<p class="small muted">The passage continues on Bible Gateway.</p>`;
    } else h += `<p class="muted">This passage is not stored on the page. Read it on Bible Gateway.</p>`;
    h += `<div class="acts">${ext(bgURL(label,'NIV'),'Read in the NIV ↗','pill')}${ext(bgURL(label,'NIV;ESV;KJV;NASB'),'Compare four translations ↗','pill')}</div>`;
  }
  return {c:rev?'var(--red)':'var(--lapis)', type:rev?'Scripture · Revelation':'Scripture', html:h, after};
}

/* ---------- clicks ---------- */
document.addEventListener('click', e => {
  const t = e.target;
  const note = t.closest('[data-note]'); if(note){ openModal({kind:'note', id:+note.dataset.note}, !modal.hidden); return; }
  const ref = t.closest('[data-ref]'); if(ref){ openModal({kind:'ref', r:parseRefData(ref.dataset.ref)}, !modal.hidden); return; }
  const vb = t.closest('[data-verse]'); if(vb){ if(!modal.hidden) closeModal(); goVerse(vb.dataset.verse); return; }
  const g = t.closest('[data-go]'); if(g){ if(!modal.hidden) closeModal(); go(g.dataset.go); return; }
  if(t.closest('[data-alltopics]')){ allFor = topicFilter; topicFilter = null; renderTopicNav(); return; }
  const nt = t.closest('[data-ntype]'); if(nt){ toggleType(nt.dataset.ntype); return; }
  const c = t.closest('[data-copy]'); if(c){ const ta = $(c.dataset.copy);
    const done = () => { c.textContent = 'Copied'; setTimeout(()=>c.textContent='Copy prompt',1600); };
    const fallback = () => { ta.focus(); ta.select(); c.textContent = 'Selected: press Ctrl/⌘+C'; };
    try{ navigator.clipboard.writeText(ta.value).then(done, fallback); }catch(_){ fallback(); } }
});
let whereTimer = 0;
function flashWhere(msg){ const old = where.textContent; where.textContent = msg; clearTimeout(whereTimer); whereTimer = setTimeout(()=>{ sync.done=false; sync(); }, 4000); }

/* ---------- note types, lenses, theories ---------- */
const hidden = new Set((store.get('rev-hide')||'').split(',').filter(k=>NOTE_TYPES[k]));
function applyTypes(){
  Object.keys(NOTE_TYPES).forEach(k => { if(k!=='spec') document.body.classList.toggle('hide-'+k, hidden.has(k)); });
  document.querySelectorAll('[data-ntype]').forEach(b => b.setAttribute('aria-pressed', String(!hidden.has(b.dataset.ntype))));
  store.set('rev-hide', [...hidden].join(','));
}
function toggleType(k){ if(k==='spec'){ setSpec(false); return; } hidden.has(k) ? hidden.delete(k) : hidden.add(k); applyTypes(); }
const lensBox = $('lenses');
lensBox.insertAdjacentHTML('beforeend', `<button class="chip" data-lens="" aria-pressed="true">All views</button>` + ['P','H','F','I'].map(k=>`<button class="chip" data-lens="${k}" aria-pressed="false">${lensGlyph(k,12)}${LENS[k].name}</button>`).join(''));
function setLens(k){
  if(k) document.body.dataset.lens = k; else delete document.body.dataset.lens;
  lensBox.querySelectorAll('[data-lens]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lens===k)));
  store.set('rev-lens', k);
}
lensBox.addEventListener('click', e => { const b = e.target.closest('[data-lens]'); if(b) setLens(b.dataset.lens); });
const specBtn = $('specToggle');
function setSpec(on){ document.body.classList.toggle('nospec', !on); specBtn.setAttribute('aria-pressed', String(on)); specBtn.textContent = on ? "Claude's theories shown" : "Claude's theories hidden"; store.set('rev-spec', on?'1':'0'); }
specBtn.onclick = () => setSpec(document.body.classList.contains('nospec'));
const glossBtn = $('glossToggle');
function setGloss(on){ document.body.classList.toggle('nogloss', !on); glossBtn.setAttribute('aria-pressed', String(on)); glossBtn.textContent = on ? "Today's words shown" : "Today's words hidden"; store.set('rev-gloss', on?'1':'0'); if(on) fitGlosses(); }
glossBtn.onclick = () => setGloss(document.body.classList.contains('nogloss'));

/* ---------- start ---------- */
setLens(store.get('rev-lens')||''); setSpec(store.get('rev-spec')!=='0'); setGloss(store.get('rev-gloss')!=='0');
renderText('plain'); applyTypes(); renderTopicNav();
layout(); addEventListener('resize', () => { hideTip(); layout(); });
document.fonts.ready.then(() => { if(current.ver==='plain') fitGlosses(); });
const hash = location.hash.slice(1);
if(hash && IDX[hash] !== undefined){ current.idx = IDX[hash]; layout(); }
sync();
const savedVer = store.get('rev-ver'); if(savedVer && savedVer !== 'plain' && VERSIONS.some(v=>v.id===savedVer)) setVersion(savedVer);
