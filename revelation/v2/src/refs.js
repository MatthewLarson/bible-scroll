/* ---------- Bible reference parser (shared by the page and the build script) ----------
   Finds "Isaiah 44:6", "Psalm 89:27, 37", "Ezekiel 2:8–3:3", "Daniel 7", "1 Kings 6:20" and bare "13:18".
   A bare chapter:verse is Revelation, unless it continues a list that began with another book in the same
   sentence part (Isaiah 13:10; 34:4), or follows a capitalized word that is not a book ("Barnabas 15:9").
   In a plain reference list (listMode), every bare item is Revelation.
   ctx is the text that precedes `text` in the page, so "<i>To the Magnesians</i> 9:1" is seen as following a title. */
const BIBLE_BOOKS = [
 ['Genesis'],['Exodus'],['Leviticus'],['Numbers'],['Deuteronomy'],['Joshua'],['Judges'],['Ruth'],
 ['1 Samuel'],['2 Samuel'],['1 Kings'],['2 Kings'],['1 Chronicles'],['2 Chronicles'],['Ezra'],['Nehemiah'],['Esther'],['Job'],
 ['Psalms','Psalm'],['Proverbs'],['Ecclesiastes'],['Song of Songs','Song of Solomon'],['Isaiah'],['Jeremiah'],['Lamentations'],['Ezekiel'],['Daniel'],
 ['Hosea'],['Joel'],['Amos'],['Obadiah'],['Jonah'],['Micah'],['Nahum'],['Habakkuk'],['Zephaniah'],['Haggai'],['Zechariah'],['Malachi'],
 ['Matthew'],['Mark'],['Luke'],['John'],['Acts'],['Romans'],['1 Corinthians'],['2 Corinthians'],['Galatians'],['Ephesians'],['Philippians'],['Colossians'],
 ['1 Thessalonians'],['2 Thessalonians'],['1 Timothy'],['2 Timothy'],['Titus'],['Philemon'],['Hebrews'],['James'],['1 Peter'],['2 Peter'],
 ['1 John'],['2 John'],['3 John'],['Jude'],['Revelation']
];
const BOOK_OF = {}; BIBLE_BOOKS.forEach(names => names.forEach(n => BOOK_OF[n] = names[0]));
const ONE_CH = new Set(['Obadiah','Philemon','2 John','3 John','Jude']);
const PLAIN_WORDS = new Set('See Compare In At And Also Then From To Or Both Note Like Unlike After Before With Until Since Only Verse Verses Chapter Revelation Rev But Yet So As'.split(' '));
const REV_VC = [20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21];
const _names = Object.keys(BOOK_OF).sort((a,b)=>b.length-a.length).map(n=>n.replace(/ /g,'\\s'));
const _cv = '(\\d{1,3})(?::(\\d{1,3}))?(?:[\\u2013-](\\d{1,3})(?::(\\d{1,3}))?)?';
const REF_RE = new RegExp(`(?:\\b(${_names.join('|')})\\s)?${_cv}(?!\\d|[.:]\\d|\\w)`, 'g');

/* -> [{start, end, book, c, v, c2, v2, label}] */
function findRefs(text, listMode, ctx=''){
  const out = []; let book = null, lastEnd = -1, m;
  REF_RE.lastIndex = 0;
  while((m = REF_RE.exec(text))){
    const [all, bname, c, v, x, y] = m; const start = m.index;
    if(bname){ book = BOOK_OF[bname.replace(/\s/g,' ')]; }
    else {
      // only digit groups with a colon count without a book name, or a ", 37" continuing a verse list
      const before = (ctx + text.slice(0, start)).slice(-30);   // ctx: text just before this node, e.g. an <i>title</i>
      const gap = lastEnd >= 0 ? text.slice(lastEnd, start) : null;
      const continues = gap !== null && /^\s*(?:[;,]|and|,\s*and)\s*$/.test(gap);
      if(!v){
        if(!(continues && /^\s*,\s*$/.test(gap) && out.length && out[out.length-1].v)) { continue; }
        const p = out[out.length-1];   // "Psalm 89:27, 37" -> verse 37 of the same chapter
        const r = {start, end:start+all.length, book:p.book, c:p.c2||p.c, v:+c, c2:null, v2:x?+x:null};
        r.label = `${r.book} ${r.c}:${r.v}${r.v2?'–'+r.v2:''}`; out.push(r); lastEnd = r.end; continue;
      }
      const w = (before.match(/([A-Z][a-z']+)\.?\s$/)||[])[1];
      if(w && !PLAIN_WORDS.has(w)) { lastEnd = -1; continue; }
      if(/[\d.]$/.test(before)) continue;
      book = (!listMode && continues && book) ? book : 'Revelation';
    }
    const r = {start, end:start+all.length, book, c:+c, v:v?+v:null, c2:null, v2:null};
    if(x){ if(y){ r.c2=+x; r.v2=+y; } else if(v) r.v2=+x; else r.c2=+x; }
    if(!r.v && ONE_CH.has(r.book)){ r.v=r.c; r.v2=r.c2; r.c=1; r.c2=null; }
    if(r.book==='Revelation' && (r.c<1 || r.c>22 || (r.v && r.v>REV_VC[r.c-1]))) { continue; }
    const tail = r.v ? `${r.c}:${r.v}` + (r.c2 ? `–${r.c2}:${r.v2}` : r.v2 ? `–${r.v2}` : '') : `${r.c}` + (r.c2?`–${r.c2}`:'');
    r.label = `${r.book} ${tail}`;
    out.push(r); lastEnd = r.end;
  }
  return out;
}
/* verse keys a reference covers, as "Book c:v", capped */
function refVerses(r, vcount, cap=30){
  const keys=[]; const c1=r.c, c2=r.c2||r.c;
  for(let c=c1;c<=c2;c++){
    const n = vcount(r.book,c); if(!n) break;
    const a = (c===c1 && r.v) ? r.v : 1;
    const b = (c===c2) ? (r.v2 || (r.c2 ? (r.v ? (r.v2||n) : n) : (r.v || n))) : n;
    for(let v=a; v<=Math.min(b,n); v++){ keys.push(`${r.book} ${c}:${v}`); if(keys.length>=cap) return keys; }
  }
  return keys;
}
if(typeof module!=='undefined') module.exports = {findRefs, refVerses, BIBLE_BOOKS, BOOK_OF, REV_VC};
