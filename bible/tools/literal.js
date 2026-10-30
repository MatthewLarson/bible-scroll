/* Print a literal, word-for-word English line per verse, built only from the source glosses, as the starting
   draft for the Plain English Translation. Translating by smoothing this line (rather than writing a verse from scratch)
   keeps the wording tied to the Hebrew or Greek and away from remembered modern translations.
     node tools/literal.js Exo 32          all of chapter 32
     node tools/literal.js Exo 32:7-14     a verse range
   Each line: "c:v  gloss | gloss | ..." in the original word order ("|" separates source words). */
const fs = require('fs'), path = require('path');
const [id, sel] = process.argv.slice(2);
if(!id || !sel){ console.log('usage: node tools/literal.js <book id> <chapter>[:<verse>[-<verse>]]'); process.exit(1); }
const o = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'texts', 'orig', id + '.json'), 'utf8'));
const [c, vr] = sel.split(':'), [v1, v2] = vr ? vr.split('-').map(Number) : [0, 999];   // a whole chapter starts at 0, a psalm's title
Object.keys(o.w).filter(k => { const [kc, kv] = k.split(':').map(Number); return kc === +c && kv >= v1 && kv <= (v2 || v1); })
  .sort((a, b) => +a.split(':')[1] - +b.split(':')[1])
  .forEach(k => console.log(`${k}  ${o.w[k].map(w => w[1]).filter(g => g && g !== '-').join(' | ')}`));
