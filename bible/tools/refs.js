/* ---------- Bible reference parser, shared by the site and the build ----------
   Finds "Isaiah 44:6", "Psalm 89:27, 37", "Ezekiel 2:8–3:3", "Daniel 7", "1 Kings 6:20" and bare "13:18".
   A bare chapter:verse belongs to the context book (the book being read), unless it continues a list that
   began with another book in the same sentence part ("Isaiah 13:10; 34:4"), or follows a capitalized word
   that is not a book ("Barnabas 15:9"). A book name after a number that is not part of it ("4 Ezra 8:3")
   is a work outside the 66, not a reference. In a plain reference list (listMode), every bare item is the context book.
   Needs the catalog's books: [{id, name, vc:[verses per chapter]}]. */
(function(root){
const ALIASES = {Psa:['Psalm','Psalms'], Sng:['Song of Solomon','Song of Songs'], Rev:['Revelation']};
const PLAIN_WORDS = new Set('See Compare In At And Also Then From To Or Both Note Like Unlike After Before With Until Since Only Verse Verses Chapter Chapters Rev But Yet So As'.split(' '));
const ONE_CH = new Set(['Oba','Phm','2Jn','3Jn','Jud']);

function makeRefs(books){
  const BY_ID = {}, OF = {};
  books.forEach(b => { BY_ID[b.id] = b; OF[b.name] = b.id; (ALIASES[b.id]||[]).forEach(a => OF[a] = b.id); });
  const names = Object.keys(OF).sort((a,b)=>b.length-a.length).map(n=>n.replace(/ /g,'\\s'));
  const cv = '(\\d{1,3})(?::(\\d{1,3}))?(?:[\\u2013-](\\d{1,3})(?::(\\d{1,3}))?)?';
  const RE = new RegExp(`(?:\\b(${names.join('|')})\\s)?${cv}(?!\\d|[.:]\\d|\\w)`, 'g');
  const vcount = (id, c) => (BY_ID[id] && BY_ID[id].vc[c-1]) || 0;
  const valid = r => { const n = BY_ID[r.book].vc.length;
    if(r.c < 1 || r.c > n || (r.c2 && (r.c2 < r.c || r.c2 > n))) return false;
    if(r.v && r.v > vcount(r.book, r.c) && !(r.book==='Psa' && r.v===0)) return false;
    return true; };
  const label = r => `${BY_ID[r.book].name.replace(/^Psalms$/,'Psalm')} ` + (r.v!=null ? `${r.c}:${r.v}` + (r.c2 ? `–${r.c2}:${r.v2}` : r.v2 ? `–${r.v2}` : '') : `${r.c}` + (r.c2?`–${r.c2}`:''));

  /* -> [{start, end, book, c, v, c2, v2, label}] */
  function findRefs(text, ctx, listMode, pre='', onAmb=null){
    const out = []; let book = null, lastEnd = -1, namedAt = -1, m;
    RE.lastIndex = 0;
    while((m = RE.exec(text))){
      const [all, bname, c, v, x, y] = m; const start = m.index; let amb = false;
      if(bname && /\d\s$/.test(pre + text.slice(0, start))) { lastEnd = -1; continue; }   // "4 Ezra 8:3", "4 Maccabees 1:1": a numbered work outside the 66, not Ezra
      if(bname){ book = OF[bname.replace(/\s+/g,' ')]; namedAt = start; }
      else {
        const before = (pre + text.slice(0, start)).slice(-30);   // pre: text just before this one on the page, e.g. an <i>title</i>
        const gap = lastEnd >= 0 ? text.slice(lastEnd, start) : null;
        const continues = gap !== null && /^\s*(?:[;,]|and|,\s*and)\s*$/.test(gap);
        if(!v){   // a bare number only counts as ", 37" continuing a verse list: "Psalm 89:27, 37"
          if(!(continues && /^\s*,\s*$/.test(gap) && out.length && out[out.length-1].v)) continue;
          const p = out[out.length-1];
          const r = {start, end:start+all.length, book:p.book, c:p.c2||p.c, v:+c, c2:null, v2:x?+x:null};
          if(!valid(r)) continue;
          r.label = label(r); out.push(r); lastEnd = r.end; continue;
        }
        const w = (before.match(/([A-Z][a-z']+)\.?\s$/)||[])[1];
        if(w && !PLAIN_WORDS.has(w) && !OF[w]) { lastEnd = -1; continue; }
        if(/[\d.]$/.test(before)) continue;
        const paren = text.lastIndexOf('(', start), sameParen = paren >= 0 && text.lastIndexOf(')', start) < paren && namedAt > paren;
        amb = !listMode && !continues && sameParen && book && book !== ctx;   // "(Psalm 93:1; compare 96:10)": which book is 96:10 in? the build asks for the name
        book = (!listMode && continues && book) ? book : ctx;
        if(amb && onAmb) onAmb(text.slice(Math.max(0, paren), start + all.length) + '…)');
        if(!book) continue;
      }
      const r = {start, end:start+all.length, book, c:+c, v:v!=null?+v:null, c2:null, v2:null};
      if(x){ if(y){ r.c2=+x; r.v2=+y; } else if(v) r.v2=+x; else r.c2=+x; }
      if(r.v==null && ONE_CH.has(r.book)){ r.v=r.c; r.v2=r.c2; r.c=1; r.c2=null; }
      if(!valid(r)) { lastEnd = -1; continue; }
      r.label = label(r);
      out.push(r); lastEnd = r.end;
    }
    return out;
  }
  /* verse keys "id c:v" a reference covers, capped */
  function refVerses(r, cap=40){
    const keys = []; const c2 = r.c2 || r.c;
    for(let c = r.c; c <= c2; c++){
      const n = vcount(r.book, c); if(!n) break;
      const a = (c===r.c && r.v!=null) ? r.v : 1;
      const b = r.c2 ? (c===c2 ? (r.v2 || n) : n) : (r.v!=null ? (r.v2 || r.v) : n);
      for(let v = a; v <= Math.min(b, n); v++){ keys.push(`${r.book} ${c}:${v}`); if(keys.length >= cap) return keys; }
    }
    return keys;
  }
  /* the chapters a reference touches, as "id c" */
  const refChapters = r => { const o = []; for(let c = r.c; c <= (r.c2||r.c); c++) o.push(`${r.book} ${c}`); return o; };
  return {findRefs, refVerses, refChapters, label, BY_ID, OF};
}
if(typeof module !== 'undefined') module.exports = makeRefs; else root.makeRefs = makeRefs;
})(this);
