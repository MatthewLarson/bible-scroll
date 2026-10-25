/* Build: assemble the page, the key-verse table, the greek-word file and the reference lookup file. */
const fs = require('fs'), path = require('path');
const S = __dirname + '/src/', V1 = __dirname + '/../src/', OUT = __dirname + '/out/', DL = process.env.DL || __dirname + '/../../.cache/dl/';
fs.mkdirSync(OUT + 'text', {recursive:true});
const read = f => fs.readFileSync(f, 'utf8');
const T = id => JSON.parse(read(__dirname + `/text/${id}.json`));
const kjvR = T('kjv'), gk = T('sblgnt');

const dataFiles = [V1+'2-art.js', S+'art2.js', V1+'3-data.js', V1+'3b-extra.js', S+'plain.js', S+'chapters.js', S+'topics1.js', S+'topics2.js', S+'topics3.js', S+'notes1.js', S+'notes2.js', S+'notes3.js', S+'deep21.js', S+'deep18.js', S+'deep2.js', S+'sayare.js', S+'chdeep.js', S+'glosses.js'];
const code = dataFiles.map(read).join('\n');
const {findRefs, refVerses} = require(S + 'refs.js');
const ctx = {}; new Function('ctx', code + ';Object.assign(ctx,{CHAPTERS,NOTES,TOPICS,WORDS,STATIONS,EXTRA,BEASTS,DECODER});')(ctx);

/* key verses for each chapter page */
const KEYV = {}; ctx.CHAPTERS.forEach(c => KEYV[c.key] = {kjv: kjvR.verses[c.key], gk: gk.verses[c.key]});

/* greek words: keep a flag for words found only in the TR/Byzantine text */
const gw = T('greekwords');
for(const k in gw.verses) gw.verses[k] = gw.verses[k].map(([g,gl,lem,str,ed]) => { const crit = /NA28|SBL|NA27|Tyn|WH|Treg/.test(ed); return crit ? [g,gl,lem,str] : [g,gl,lem,str,1]; });
fs.writeFileSync(OUT+'text/greekwords.json', JSON.stringify(gw));
['kjv','web','asv','ylt','sblgnt'].forEach(id => fs.copyFileSync(__dirname+`/text/${id}.json`, OUT+`text/${id}.json`));

/* reference lookup: every non-Revelation reference anywhere in the content */
const strip = s => String(s).replace(/<[^>]+>/g,'');
const prose = [], lists = [];
const walk = (o, inList) => { if(typeof o === 'string') (inList?lists:prose).push(strip(o)); else if(Array.isArray(o)) o.forEach(x=>walk(x,inList)); else if(o && typeof o==='object') for(const k in o) walk(o[k], inList || k==='r' || k==='refs'); };
walk([ctx.CHAPTERS, ctx.NOTES, ctx.TOPICS, ctx.WORDS, ctx.STATIONS, ctx.EXTRA, ctx.BEASTS, ctx.DECODER]);
prose.push(strip(read(S+'app.js')));
const kjvSrc = read(DL+'es-kjv-1.0.2/package/json/verses-1769.js'); const KJ = JSON.parse(kjvSrc.slice(kjvSrc.indexOf('{'), kjvSrc.lastIndexOf('}')+1));
const kjvName = b => b==='Song of Songs' ? "Solomon's Song" : b;
const vc = {};
for(const k in KJ){ const m = k.match(/^(.*) (\d+):(\d+)$/); const b = m[1]==="Solomon's Song" ? 'Song of Songs' : m[1]; (vc[b] = vc[b] || []); vc[b][m[2]-1] = Math.max(vc[b][m[2]-1]||0, +m[3]); }
const webCache = {};
const webBook = b => { const f = b.toLowerCase().replace(/ /g,'').replace('songofsongs','songofsolomon'); if(webCache[f]) return webCache[f];
  const vs = {}; JSON.parse(read(DL+`world-english-bible-1.0.1/package/json/${f}.json`)).forEach(e => { if(e.verseNumber && e.value){ const key = `${e.chapterNumber}:${e.verseNumber}`; vs[key] = (vs[key]||'') + e.value; } });
  return webCache[f] = vs; };
const clean = s => s.replace(/\s+/g,' ').replace(/^\s*#\s*/,'').trim();
const db = {}; let nrefs = 0, missing = [];
const add = r => { if(r.book==='Revelation') return; nrefs++;
  refVerses(r, (b,c)=>(vc[b]||[])[c-1]||0, 40).forEach(key => { if(db[key]) return;
    const [, b, cv] = key.match(/^(.*) (\d+:\d+)$/); const k = KJ[`${kjvName(b)} ${cv}`], w = webBook(b)[cv];
    if(k && w) db[key] = [clean(w), clean(k)]; else missing.push(key); }); };
prose.forEach(p => findRefs(p, false).forEach(add));
lists.forEach(p => findRefs(p, true).forEach(add));
fs.writeFileSync(OUT+'text/refs.json', JSON.stringify({vc, v: db}));
console.log('refs', nrefs, 'verses', Object.keys(db).length, 'missing', missing.length, missing.slice(0,10));

/* the page */
const html = read(S+'shell.html') + '\n<script>\n' + code + '\n' + read(S+'refs.js') + `\nconst KEYV = ${JSON.stringify(KEYV)};\n` + read(S+'app.js') + '\n</script>\n';
fs.writeFileSync(OUT+'revelation.html', html);
console.log('page', (html.length/1024).toFixed(0)+'KB');
for(const f of fs.readdirSync(OUT+'text')) console.log(' ', f, (fs.statSync(OUT+'text/'+f).size/1024).toFixed(0)+'KB');
