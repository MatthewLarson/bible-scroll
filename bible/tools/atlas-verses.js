// Prints each chapter's verse list (English numbering, as Bible Atlas uses) for a Bible Atlas verse-context call: node tools/atlas-verses.js <id>
const id = process.argv[2], o = { w: require(`../texts/en/${id}.json`).kjv }, ch = {};
for (const k of Object.keys(o.w)) { const [c, v] = k.split(':'); (ch[c] = ch[c] || []).push(v); }
for (const c of Object.keys(ch)) console.log(`${c}\t${ch[c].join(',')}`);
