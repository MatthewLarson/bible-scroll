/* ---------- render ---------- */
const sheet = document.getElementById('sheet');
const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const ICON = {
  lit:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 L20,6" stroke="${C.ink}" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  sym:`<svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2,6 q4,-6 8,0 t8,0" fill="none" stroke="${C.ink}" stroke-width="2.2" stroke-linecap="round"/></svg>`
};
const wordCard = k => { const w=WORDS[k]; return `<div class="box word"><div class="tag"><span class="kind k-${w.kind}">${KIND[w.kind]}</span><i>${w.ref}</i></div><h5>${w.title}</h5><p class="greek small">${w.greek}</p><p>${w.body}</p></div>`; };
const specCard = s => `<div class="box spec" id="spec-${s.key}"><div class="tag">Claude's speculation <i>my own idea, not established scholarship</i></div><h5>${s.title}</h5><p>${s.body}</p></div>`;
const STENCIL = `<svg viewBox="0 0 16 16" aria-hidden="true"><circle cx="8" cy="8" r="7.5" fill="url(#spray)"/><path d="M8,13 L8,8 M5.6,9 L4.8,3.6 M7.4,8 L7.4,2.6 M9.2,8 L9.6,3 M10.8,9 L11.8,4.6 M5.4,11 L2.6,8.4" stroke="${C.parch}" stroke-width="1.8" stroke-linecap="round"/></svg>`;
const SCROLLI = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3,3 h9 a2,2 0 0 1 0,4 h-1 v6 h-8 a2,2 0 0 1 0,-4 h1 z" fill="none" stroke="${C.ink2}" stroke-width="1.4" stroke-linejoin="round"/></svg>`;
const factCard = t => `<div class="box fact"><div class="tag">${SCROLLI}From history and scholarship</div><p>${t}</p></div>`;
const mythCard = m => `<div class="box myth"><div class="tag">${STENCIL}Aligned mythos · ${m.culture} <i>a parallel from another tradition, not Scripture · ${m.link2}</i></div><h5>${m.title}</h5><p>${m.body}</p><p class="small"><a href="${WIKI(m.link[1])}" target="_blank" rel="noopener">${m.link[0]} on Wikipedia</a></p></div>`;
const linksRow = id => { const L=(EXTRA[id]||{}).links; return L ? `<p class="links"><b>Read more</b>${L.map(([l,t])=>`<a href="${WIKI(t)}" target="_blank" rel="noopener">${l}</a>`).join('')}</p>` : ''; };
const extrasFor = id => { const E=EXTRA[id]||{}; return (E.facts||[]).map(factCard).join('') + (E.myths||[]).map(mythCard).join(''); };
const viewsList = v => `<ul class="views">${['P','H','F','I'].map(k=>`<li class="${k}">${lensGlyph(k)}<b>${LENS[k].name}</b><span>${v[k]}</span></li>`).join('')}</ul>`;

const panels = [];
const add = (id, label, html, cls='') => panels.push({id,label,html:`<section class="panel ${cls}" id="${id}" aria-label="${label}">${html}</section>`});

add('start','Opening',`
  <div class="cart study">A study scroll</div>
  <h1>The Revelation</h1>
  <p class="hand muted" style="font-size:1.1rem;margin-top:4px">of Jesus Christ, shown to John on Patmos</p>
  ${ART.intro()}
  <p class="lede">Revelation is the last book of the Bible. A man named John wrote it while exiled on the island of Patmos, probably around AD 95 under the emperor Domitian. Some scholars date it earlier, in the late 60s under Nero, and that date matters a lot for the preterist view.</p>
  <p>It is three kinds of writing at once. It is a <b>letter</b> to seven churches (1:4), a <b>prophecy</b> (1:3), and an <b>apocalypse</b>, a Jewish style of writing that shows heaven's view of earth through symbols. It has 22 chapters and 404 verses. It echoes the Old Testament more than any other New Testament book, yet it never once says "as it is written."</p>
  <h3>How to use this scroll</h3>
  <p>Scroll sideways to walk through the book in order. Each stop gives a plain summary, the key verse three ways, how it reads literally and as symbol, and what each of the four main views says. Use <b>Lens</b> at the top to highlight one view across the whole scroll.</p>
  <h3>How each kind of information looks</h3>
  <ul class="types">
    <li><i style="background:linear-gradient(90deg,var(--red) 0 22%,transparent 0)"></i><span><b style="color:var(--red);font-family:var(--f-display)">Scripture</b>: red rubric and initial, plain English first, then the KJV and the Greek.</span></li>
    <li><i style="border:1.6px solid var(--ink-3);background:rgba(216,191,142,.5)"></i><span><b style="font-family:var(--f-display)">From history and scholarship</b>: archaeology, ancient writers and what scholars have found.</span></li>
    <li><i style="display:grid;place-items:center">${lensGlyph('P',10)}</i><span><b style="font-family:var(--f-display)">Interpretations</b>: the four views, each marked with its own glyph, plus literal and symbolic readings side by side.</span></li>
    <li><i style="border:1.6px solid var(--ink-2);background:rgba(180,111,38,.15)"></i><span><b style="color:var(--ochre);font-family:var(--f-display)">Translation watch</b>: mistranslations, manuscript differences and common mistakes, with the Greek.</span></li>
    <li><i style="border:1.6px solid var(--olive);background:rgba(85,97,42,.12)"></i><span><b style="color:var(--olive);font-family:var(--f-display)">Church and Israel</b>: notes on that question.</span></li>
    <li><i style="border:2px dotted var(--red);background:rgba(180,111,38,.15)"></i><span><b style="color:var(--red);font-family:var(--f-display)">Aligned mythos</b>: end-times stories from other cultures and religions, with a note on whether there is any real link.</span></li>
    <li><i style="border:2px dashed var(--lapis);background:rgba(35,77,138,.08)"></i><span><b style="color:var(--lapis);font-family:var(--f-display)">Claude's speculation</b>: my own ideas and new connections, not established scholarship.</span></li>
    <li><i style="border:1px solid rgba(35,77,138,.45)"></i><span><b style="color:var(--lapis);font-family:var(--f-display)">Read more</b>: links to Wikipedia articles and sources.</span></li>
  </ul>
  <h3>Translations used</h3>
  <p class="small">The main text is a <b>plain-English rendering</b> I made from the Greek at about an 8th-grade reading level. The <b>KJV</b> (1611, public domain) is quoted in full for comparison. The <b>Greek</b> follows the critical text used by most modern Bibles (NA28/UBS5, SBLGNT), with the <b>Textus Receptus</b> behind the KJV and NKJV noted where they differ. The NKJV, ESV, NASB, CSB, NIV and NLT are cited by name where their wording matters. Revelation has fewer surviving Greek manuscripts than any other New Testament book, so its textual notes matter more than usual.</p>
`);

add('views','Four ways to read',`
  <div class="cart study">Before you begin</div>
  <h2>Four Ways to Read Revelation</h2>
  <p class="lede">Christians have read Revelation four main ways. Each one takes the Bible seriously, and each has been held by careful, faithful people. Many readers mix them.</p>
  <ul class="views" style="gap:12px">
    <li class="P">${lensGlyph('P')}<b>Preterist</b><span>From Latin <i>praeter</i>, "past." Most of the book was fulfilled in the first centuries: the fall of Jerusalem in AD 70 and the conflict with pagan Rome. <i>Partial</i> preterists still expect a future return of Christ (chapters 19–22). Held by many Catholic scholars and by Reformed writers such as R. C. Sproul.</span></li>
    <li class="H">${lensGlyph('H')}<b>Historicist</b><span>The book is a coded map of church history from John's day to the end. This was the standard Protestant view from the Reformation to the 1800s (Luther, Isaac Newton, Matthew Henry, many Puritans).</span></li>
    <li class="F">${lensGlyph('F')}<b>Futurist</b><span>Chapters 4–22 describe events still to come: a tribulation, the Antichrist, Christ's return, and a 1,000-year reign. Most popular American teaching today is a form of this, often dispensational (the <i>Scofield Reference Bible</i>, Hal Lindsey, the <i>Left Behind</i> books).</span></li>
    <li class="I">${lensGlyph('I')}<b>Idealist</b><span>The book is a symbolic picture of the battle between God and evil in every age, not a timeline of particular events. Its roots go back to Augustine. Many modern scholars take an "eclectic" view that mixes idealist and other readings.</span></li>
  </ul>
  <h3>Literal or symbolic?</h3>
  ${spectrum()}
  <p class="small">This is not a choice between "taking the Bible seriously" and "not." Every reader takes some parts literally and some as symbol. A futurist reads the sword from Jesus's mouth as a symbol. An idealist believes Jesus literally returns. The real question at each scene is which parts are which. This scroll shows both readings side by side so you can weigh them.</p>
  <h3>Where each view places the events</h3>
  ${chartViews()}
  <p class="caption">A schematic drawing; the spacing between dates is not to scale.</p>
`);

add('keys','Keys to the code',`
  <div class="cart study">Before you begin</div>
  <h2>Keys to the Code</h2>
  <h3>How the three sevens fit together</h3>
  <p>The middle of the book is built from three sets of seven judgments: seals, trumpets and bowls. Readers disagree about how they relate.</p>
  ${chartStructure()}
  <p class="small"><b>One after another:</b> 21 events in a row, common in popular futurism. <b>Nested:</b> the seventh seal opens into the trumpets, and the seventh trumpet opens into the bowls. <b>Retold:</b> each set of seven covers the same period, ending each time at the end of the world, with growing intensity (a third, then all). This view is called recapitulation and goes back to Victorinus, around AD 260, who wrote the oldest surviving commentary on Revelation. Support for it: the sixth seal already sounds like the end (6:12–17), and the seventh of each set ends with thunder, lightning and an earthquake (8:5; 11:19; 16:18).</p>
  <h3>The time markers</h3>
  <ul class="decoder">
    <li><b>3½ years</b><span>Named five ways: 42 months (11:2; 13:5), 1,260 days (11:3; 12:6), "a time, times and half a time" (12:14), from Daniel 7:25 and 12:7. With 30-day months, 42 × 30 = 1,260. 3½ is half of seven: a broken, cut-short time.</span></li>
    <li><b>3½ days</b><span>The witnesses lie dead (11:9, 11): the same pattern in miniature.</span></li>
    <li><b>5 months</b><span>The locusts (9:5, 10): about the life span of a locust swarm.</span></li>
    <li><b>Hour, day, month, year</b><span>The four angels at the Euphrates are ready for one exact moment (9:15).</span></li>
    <li><b>½ hour</b><span>Silence in heaven (8:1).</span></li>
    <li><b>1 hour</b><span>The ten kings rule (17:12); Babylon falls (18:10, 17, 19).</span></li>
    <li><b>10 days</b><span>Smyrna's suffering (2:10).</span></li>
    <li><b>1,000 years</b><span>Satan bound; the saints reign (20:2–7).</span></li>
  </ul>
  <h3>Revelation's own decoder</h3>
  <p class="small">Sometimes the book explains its own symbols. Start here before guessing. Notice that every time it decodes a symbol, it decodes it into a person, a group or a city, never into a date.</p>
  <ul class="decoder">${DECODER.map(([r,t])=>`<li><b>${r}</b><span>${t}</span></li>`).join('')}</ul>
`);

STATIONS.forEach(s=>{
  const v=s.verse;
  let h = `<div class="cart">${s.cart}</div><h2>${s.title}</h2>${ART[s.art]()}`;
  if(s.caption) h += `<p class="caption">${s.caption}</p>`;
  h += s.sum.map((p,i)=>`<p${i===0?' class="lede"':''}>${p}</p>`).join('');
  h += `<div class="verse"><div class="rub">Scripture · ${v.ref} · plain English</div><div class="plain">${v.plain}</div>
    <dl><dt>KJV</dt><dd class="kjv">${v.kjv}</dd><dt>Greek</dt><dd class="gk"><span class="greek">${v.greek}</span><br>${v.gk}</dd></dl></div>`;
  h += `<div class="readings"><div><h4>${ICON.lit}Read literally</h4><p>${s.lit}</p></div><div><h4>${ICON.sym}Read as symbol</h4><p>${s.sym}</p></div></div>`;
  h += `<h3>Interpretations: the four views</h3>${viewsList(s.views)}`;
  if(s.extra) h += factCard(s.extra.replace(/^<p[^>]*>|<\/p>$/g,''));
  h += extrasFor(s.id);
  if(s.israel) h += `<div class="box israel"><div class="tag">Church and Israel</div><p>${s.israel}</p></div>`;
  (s.words||[]).forEach(k=> h += wordCard(k));
  if(s.spec) h += specCard(s.spec);
  if(s.spec2) h += specCard(s.spec2);
  h += `<p class="echoes"><b>Old Testament echoes</b> · ${s.echoes}</p>` + linksRow(s.id);
  add(s.id, `${s.cart}: ${s.title}`, h);
});

add('beasts','The beasts',`
  <div class="cart study">Study scroll</div>
  <h2>The Beasts and What They Stand For</h2>
  <p class="lede">Revelation's creatures are built from Old Testament pieces, so the best first clue to any beast is where its parts came from. The "strongest reading" column is my judgment of what the text itself supports best. The last column gives the main alternatives fairly.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Creature</th><th>What John sees</th><th>Built from</th><th>Strongest reading</th><th>Other readings</th></tr></thead>
    <tbody>${BEASTS.map(b=>`<tr><td>${b[0]}<br><span class="small muted" style="font-family:var(--f-body)">${b[1]}</span></td><td>${b[2]}</td><td>${b[3]}</td><td>${b[4]}</td><td>${b[5]}</td></tr>`).join('')}</tbody>
  </table></div>
  <h3>The pattern behind them</h3>
  <p>Every evil figure in Revelation is a cheap copy of something holy. The dragon, the beast and the false prophet imitate the Father, the Son and the Spirit (16:13). The beast has a death-wound "as slaughtered," like the Lamb (13:3; 5:6). The land beast has horns "like a lamb" (13:11). The beast "was, is not, and is to come," mocking God, who "is, was and is to come" (17:8; 1:4). The mark on the forehead copies God's seal (13:16; 7:3). The prostitute city mirrors the bride city. A reader who learns to spot the counterfeit is doing exactly what 13:18 asks: "This calls for wisdom."</p>
`,'wide');

add('israel','Church and Israel',`
  <div class="cart study">Study scroll</div>
  <h2>The Church and the Nation of Israel</h2>
  <p class="lede">Does Revelation see one people of God or two? This question shapes how you read chapters 7, 11, 12, 14, 20 and 21. Here is the evidence each side uses, then the main positions.</p>
  <div class="grid2">
    <div><h3 style="color:var(--lapis)">For two distinct peoples</h3>
      <ul class="small">
        <li>The word "church" (<span class="greek">ἐκκλησία</span>) appears 19 times in chapters 1–3, then not again until 22:16.</li>
        <li>The 144,000 are listed tribe by tribe, 12,000 each (7:4–8).</li>
        <li>Jerusalem is central: "the city where their Lord was crucified" (11:8), "the beloved city" (20:9).</li>
        <li>The woman of chapter 12 matches Joseph's dream of Israel (Genesis 37:9).</li>
        <li>Paul expects a future turning of Israel: "all Israel will be saved" (Romans 11:25–26). Daniel's seventy weeks are for "your people" (Daniel 9:24).</li>
      </ul></div>
    <div><h3 style="color:var(--olive)">For one people</h3>
      <ul class="small">
        <li>The church is called a "kingdom and priests" (1:6; 5:10), Israel's own title from Exodus 19:6.</li>
        <li>"Those who say they are Jews and are not" (2:9; 3:9), and Isaiah 60:14 reversed in 3:9.</li>
        <li>John hears 144,000 from Israel and then sees a crowd from every nation (7:4, 9), the same hear-then-see pattern as Lion and Lamb (5:5–6).</li>
        <li>One bride (19:7). One city, with Israel's tribes on the gates and the apostles on the foundations (21:12–14).</li>
        <li>Paul: "If you belong to Christ, you are Abraham's offspring" (Galatians 3:29); "the Israel of God" (6:16); "one new humanity" (Ephesians 2:15).</li>
      </ul></div>
  </div>
  <h3>The main positions</h3>
  <div class="table-wrap"><table>
    <thead><tr><th>Position</th><th>Israel and the church</th><th>How it reads Revelation</th></tr></thead>
    <tbody>
      <tr><td>Dispensational</td><td>Two peoples with two sets of promises. The church is raptured before the tribulation, and God then deals with national Israel.</td><td>Chapters 6–19 are Daniel's 70th week for Israel. The 144,000 are Jewish. The millennium fulfills Israel's land promises.</td></tr>
      <tr><td>Progressive dispensational</td><td>One people of God in Christ, but ethnic Israel keeps a real future role.</td><td>Similar timeline, with more overlap between Israel and the church.</td></tr>
      <tr><td>Historic premillennial</td><td>One people, plus a future mass turning of Jews to Jesus (Romans 11).</td><td>The church goes through the tribulation. Christ then reigns 1,000 years.</td></tr>
      <tr><td>Covenant (amil or postmil)</td><td>One people. The church is the continuation and fulfillment of Israel, not its replacement, and Jewish believers remain part of it.</td><td>The 144,000 and the crowd are the same people. The New Jerusalem is the whole church.</td></tr>
      <tr><td>Preterist</td><td>Varies. The focus is judgment on first-century Jerusalem's leaders, not on the Jewish people.</td><td>Babylon may be Jerusalem in AD 70. This reading has been misused to fuel hostility toward Jews, which careful preterists firmly reject.</td></tr>
      <tr><td>Messianic Jewish</td><td>One body in Messiah, in which Jewish believers keep their Jewish identity and calling.</td><td>Reads the tribal names and Jerusalem as lasting signs of God's faithfulness to Israel.</td></tr>
    </tbody>
  </table></div>
  ${specCard({key:'oneTree', title:'My reading: one tree, with Israel at its root', body:`Revelation never "replaces" Israel. It names the tribes one by one and writes them on the gates of the final city. But it also never keeps two separate peoples in its final picture: there is one bride, one city, one Lamb. My reading is closest to Paul's single olive tree in Romans 11, where Israel is the trunk and the nations are grafted in. The tribe names on the gates say "you enter through Israel," and the apostles on the foundations say "you stand on the gospel." This is my synthesis; it sits between the covenant and historic-premillennial positions. See also my note on the two witnesses as the two branches of that tree (chapter 11).`})}
`,'wide');

add('words','Translation watch',`
  <div class="cart study">Study scroll</div>
  <h2>Translation Watch</h2>
  <p class="lede">Some popular beliefs about Revelation rest on a translation choice, a copying error, or a missing piece of history. Here they are in order, each with the Greek, so you can check them yourself.</p>
  <div class="legend">${Object.entries(KIND).map(([k,v])=>`<span class="word"><span class="kind k-${k}" style="font-family:var(--f-display);font-size:.72rem;letter-spacing:.1em;color:var(--parch-hi);border-radius:var(--wobble);padding:1px 8px">${v}</span></span>`).join('')}</div>
  <p class="small muted"><b>Mistranslation:</b> the English says something the Greek does not. <b>Textual variant:</b> manuscripts differ. <b>Common mistake:</b> a popular belief the text does not say. <b>Debated:</b> the Greek allows more than one reading. <b>Lost nuance:</b> correct English that hides something.</p>
  <div class="grid2">${Object.keys(WORDS).map(wordCard).join('')}</div>
`,'wide');

add('ideas','Claude’s speculation',`
  <div class="cart study">Study scroll</div>
  <h2>Claude's Speculation</h2>
  <p class="lede">You asked for new ideas, not just a summary of what others have said. These are mine. Each one is built on real verses, but none of them is established scholarship, and some parts may overlap with writers I don't know about. Weigh them the way the Bereans did (Acts 17:11).</p>
  <ul class="ideas">${[...STATIONS.flatMap(s=>[s.spec,s.spec2].filter(Boolean).map(sp=>({sp,s}))), {sp:{key:'oneTree',title:'One tree, with Israel at its root'},s:{id:'israel',cart:'Church and Israel'}}].map(({sp,s})=>`<li><button data-go="${s.id}" data-spec="spec-${sp.key}">${sp.title}</button><p class="muted">${s.cart}</p></li>`).join('')}</ul>
  <p class="small muted">Use the button at the top of the page to hide all of these if you want to read only the established material.</p>
`);

const ALLMYTHS = STATIONS.flatMap(s=>((EXTRA[s.id]||{}).myths||[]).map(m=>({m,s})));
add('mythos','Other traditions',`
  <div class="cart study">Study scroll</div>
  <h2>End-Times Stories from Other Traditions</h2>
  <p class="lede">Many cultures tell stories about how the world ends and begins again. Some of these shaped the imagery John used. Others were written down much later, and some look alike with no known connection. The last column says which is which, as best the evidence allows.</p>
  <div class="table-wrap"><table>
    <thead><tr><th>Tradition</th><th>The story</th><th>Where it meets Revelation</th><th>Connection</th></tr></thead>
    <tbody>${ALLMYTHS.map(({m,s})=>`<tr><td>${m.culture}</td><td><a href="${WIKI(m.link[1])}" target="_blank" rel="noopener">${m.title}</a></td><td><button class="linkish" data-go="${s.id}">${s.cart}</button></td><td>${m.link2}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="small muted">Why it matters: Revelation often takes the most famous stories of its world and turns them around. The dragon-slaying god is Jesus, not Apollo. The beast with seven heads is not a cosmic force equal to God, but a creature that is captured. A similar image does not mean Christians borrowed their faith; it often means John was answering the stories his readers already knew.</p>
`,'wide');

add('sources','Sources',`
  <div class="cart study">Study scroll</div>
  <h2>Sources and Further Study</h2>
  <p class="lede">These books stand behind much of this scroll. They come from different views, so reading two or three side by side is the best way to stay fair.</p>
  <ul class="ideas">${BOOKS.map(([t,d])=>`<li><b style="font-family:var(--f-display);font-weight:400">${t}</b><p class="muted">${d}</p></li>`).join('')}</ul>
  <h3>Free online texts</h3>
  <p class="links"><b>Read</b><a href="https://www.blueletterbible.org/kjv/rev/1/1/" target="_blank" rel="noopener">Blue Letter Bible (KJV with Greek lexicon)</a><a href="https://www.biblegateway.com/passage/?search=Revelation+1&version=NIV;ESV;KJV;NASB" target="_blank" rel="noopener">Bible Gateway (compare NIV, ESV, KJV, NASB)</a><a href="https://sblgnt.com/" target="_blank" rel="noopener">SBL Greek New Testament</a><a href="https://www.stepbible.org/?q=reference=Rev.1" target="_blank" rel="noopener">STEP Bible (Tyndale House)</a></p>
`);

add('art','Art and image prompts',`
  <div class="cart study">Study scroll</div>
  <h2>Art and Image Prompts</h2>
  <p class="lede">Every drawing on this scroll is an original sketch made for this page, so it needs no credit or license. The map is drawn from the cities' real locations.</p>
  <h3>Public domain art to look at</h3>
  <p class="small">I could not download outside images into this page from where it was built. These classic works are all public domain or openly licensed and are worth opening side by side with the scroll.</p>
  <ul class="ideas">${ART_SOURCES.map(([t,d,u])=>`<li><a href="${u}" target="_blank" rel="noopener">${t}</a><p class="muted">${d}</p></li>`).join('')}</ul>
  <h3>Prompts for ChatGPT</h3>
  <p class="small">Each prompt follows the text's own details (for example, the dragon's crowns sit on its heads, but the sea beast's crowns sit on its horns). Paste one into ChatGPT's image tool. The shared style block at the end keeps every image in the same scroll-sketch look.</p>
  ${PROMPTS.map(([t,p],i)=>`<div class="prompt"><header><b>${t}</b><button class="copy" data-copy="p${i}">Copy prompt</button></header><textarea id="p${i}" readonly>${esc(p+'\n\n'+STYLE)}</textarea></div>`).join('')}
`,'wide');

panels.forEach(p=>{ if(!STATIONS.some(s=>s.id===p.id) && EXTRA[p.id] && EXTRA[p.id].links) p.html = p.html.replace(/<\/section>$/, linksRow(p.id)+'</section>'); });
sheet.innerHTML = panels.map(p=>p.html).join('');

/* ---------- navigation ---------- */
const track = document.getElementById('track');
const els = [...sheet.querySelectorAll('.panel')];
const where = document.getElementById('where');
const ruler = document.getElementById('ruler');
const chToPanel = {}; STATIONS.forEach(s=>s.ch.forEach(c=>{ if(!chToPanel[c]) chToPanel[c]=s.id; }));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function go(id, specId){
  const el=document.getElementById(id); if(!el) return;
  track.scrollTo({left: el.offsetLeft, behavior: reduce?'auto':'smooth'});
  if(specId){ const sp=document.getElementById(specId); if(sp) el.scrollTo({top: sp.offsetTop-20, behavior: reduce?'auto':'smooth'}); }
}
let rb = `<button data-go="start" title="Opening">✦</button><button data-go="views" class="study">4 views</button><button data-go="keys" class="study">keys</button><span class="sep"></span>`;
for(let c=1;c<=22;c++) rb += `<button data-go="${chToPanel[c]}" data-ch="${c}" title="Chapter ${c}">${c}</button>`;
rb += `<span class="sep"></span>` + [['beasts','beasts'],['israel','church & Israel'],['words','translation watch'],['ideas','speculation'],['mythos','other traditions'],['sources','sources'],['art','art & prompts']].map(([id,l])=>`<button data-go="${id}" class="study">${l}</button>`).join('');
ruler.innerHTML = rb;
document.addEventListener('click', e=>{
  const b=e.target.closest('[data-go]'); if(b){ go(b.dataset.go, b.dataset.spec); return; }
  const c=e.target.closest('[data-copy]'); if(c){ const ta=document.getElementById(c.dataset.copy);
    const done=()=>{ c.textContent='Copied'; setTimeout(()=>c.textContent='Copy prompt',1600); };
    const fallback=()=>{ ta.focus(); ta.select(); c.textContent='Selected: press Ctrl/⌘+C'; };
    try{ navigator.clipboard.writeText(ta.value).then(done, fallback); }catch(_){ fallback(); } }
});
function current(){
  const x = track.scrollLeft + track.clientWidth*0.35; let i=0;
  els.forEach((el,k)=>{ if(el.offsetLeft<=x) i=k; }); return i;
}
let lastI=-1;
function sync(){
  const i=current(); if(i===lastI) return; lastI=i;
  where.textContent = panels[i].label;
  ruler.querySelectorAll('button').forEach(b=>b.classList.toggle('on', b.dataset.go===panels[i].id));
  const on = ruler.querySelector('button.on'); if(on){ const r=on.offsetLeft-ruler.clientWidth/2+on.clientWidth/2; ruler.scrollTo({left:r, behavior:'auto'}); }
}
let raf=0; track.addEventListener('scroll',()=>{ cancelAnimationFrame(raf); raf=requestAnimationFrame(sync); },{passive:true});
document.getElementById('prev').onclick=()=>{ const i=current(); go(panels[Math.max(0,i-1)].id); };
document.getElementById('next').onclick=()=>{ const i=current(); go(panels[Math.min(panels.length-1,i+1)].id); };
document.addEventListener('keydown', e=>{
  if(e.target.closest('textarea,input')) return;
  if(e.key==='ArrowRight'){ e.preventDefault(); document.getElementById('next').click(); }
  if(e.key==='ArrowLeft'){ e.preventDefault(); document.getElementById('prev').click(); }
});
/* vertical wheel reads down a station, then rolls the scroll sideways */
track.addEventListener('wheel', e=>{
  if(Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.ctrlKey) return;
  const p = e.target.closest('.panel');
  if(p){
    const canDown = p.scrollTop + p.clientHeight < p.scrollHeight - 1, canUp = p.scrollTop > 0;
    if((e.deltaY>0 && canDown) || (e.deltaY<0 && canUp)) return;
  }
  const tw = e.target.closest('.table-wrap'); if(tw && tw.scrollWidth>tw.clientWidth && e.shiftKey) return;
  e.preventDefault(); track.scrollLeft += e.deltaY * (e.deltaMode===1?32:1);
},{passive:false});

/* ---------- lenses and speculation toggle ---------- */
const lensBox = document.getElementById('lenses');
lensBox.insertAdjacentHTML('beforeend', `<button class="chip" data-lens="" aria-pressed="true">All views</button>` + ['P','H','F','I'].map(k=>`<button class="chip" data-lens="${k}" aria-pressed="false">${lensGlyph(k,12)}${LENS[k].name}</button>`).join(''));
const store = { get(k){ try{return localStorage.getItem(k)}catch(_){return null} }, set(k,v){ try{localStorage.setItem(k,v)}catch(_){} } };
function setLens(k){
  if(k) document.body.dataset.lens=k; else delete document.body.dataset.lens;
  lensBox.querySelectorAll('[data-lens]').forEach(b=>b.setAttribute('aria-pressed', String(b.dataset.lens===k)));
  store.set('rev-lens', k);
}
lensBox.addEventListener('click', e=>{ const b=e.target.closest('[data-lens]'); if(b) setLens(b.dataset.lens); });
const specBtn=document.getElementById('specToggle');
function setSpec(on){ document.body.classList.toggle('nospec',!on); specBtn.setAttribute('aria-pressed',String(on)); specBtn.textContent = on?"Claude's speculation shown":"Claude's speculation hidden"; store.set('rev-spec', on?'1':'0'); }
specBtn.onclick=()=>setSpec(document.body.classList.contains('nospec'));
setLens(store.get('rev-lens')||''); setSpec(store.get('rev-spec')!=='0');

const h = location.hash.slice(1);
if(h && document.getElementById(h)) requestAnimationFrame(()=>{ track.scrollLeft = document.getElementById(h).offsetLeft; });
sync();
