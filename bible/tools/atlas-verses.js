// Prints each chapter's verse list (English numbering, as Bible Atlas uses) for a Bible Atlas verse-context call: node tools/atlas-verses.js <id>
// Books outside the 66 have no kjv text; their verses are listed from the first English text instead, but the Atlas
// holds Bible verses only, so for those books harvest by place name (see tools/agent-atlas.md).
const en = require(`../texts/en/${process.argv[2]}.json`), id = process.argv[2], ch = {};
const key = en.kjv ? 'kjv' : Object.keys(en.about || {})[0];
if (!en[key]) { console.error(`texts/en/${id}.json has no English text to list`); process.exit(1); }
if (key !== 'kjv') console.error(`note: ${id} is not a Bible book (using "${key}"); the Atlas verse-context call returns nothing for it, so search by place name`);
for (const k of Object.keys(en[key])) { const [c, v] = k.split(':'); (ch[c] = ch[c] || []).push(v); }
for (const c of Object.keys(ch)) console.log(`${c}\t${ch[c].join(',')}`);
