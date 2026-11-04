/* Print the base English line per verse for a book translated from an English base (tier world, English-base
   route: tools/agent-translator-local.md), as the starting draft for the Plain English Translation. The base is a
   public-domain or openly licensed English translation in texts/en/<id>.json; the book's brief names its key.
     node tools/base-lines.js Med 1            all of chapter 1, from the first English text in the file
     node tools/base-lines.js Med 1:3-7 long   a verse range, from the text keyed "long"
   Each line: "c:v  text". */
const fs = require('fs'), path = require('path');
const [id, sel, key] = process.argv.slice(2);
if(!id || !sel){ console.log('usage: node tools/base-lines.js <book id> <chapter>[:<verse>[-<verse>]] [text key]'); process.exit(1); }
const o = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'texts', 'en', id + '.json'), 'utf8'));
const k = key || Object.keys(o.about || {})[0];
if(!o[k]){ console.log(`no English text "${k}" in texts/en/${id}.json; it has: ${Object.keys(o.about || {}).join(', ') || 'none'}`); process.exit(1); }
const [c, vr] = sel.split(':'), [v1, v2] = vr ? vr.split('-').map(Number) : [0, 9999];
Object.keys(o[k]).filter(r => { const [rc, rv] = r.split(':').map(Number); return rc === +c && rv >= v1 && rv <= (v2 || v1); })
  .sort((a, b) => +a.split(':')[1] - +b.split(':')[1])
  .forEach(r => console.log(`${r}  ${o[k][r]}`));
