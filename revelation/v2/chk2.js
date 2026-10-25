const fs=require('fs');const d=process.argv[2];
const files=['plain.js','../../src/3-data.js','chapters.js','topics1.js','topics2.js','topics3.js','notes1.js','notes2.js','notes3.js','deep21.js','deep18.js','deep2.js','sayare.js','glosses.js'];
var ART={},f1=x=>x;eval(files.map(f=>fs.readFileSync(d+'/'+f,'utf8')).join('\n')+';global.R={PLAIN_SRC,NOTES,WORDS,TOPICS,SRC,CHAPTERS,GLOSSES}');
const V={};R.PLAIN_SRC.split('\n').forEach(l=>{const m=l.match(/^(\d+:\d+) (.*)/);if(m)V[m[1]]=m[2]});
const ids=new Set(R.TOPICS.map(t=>t.id));let bad=0;
const per={};
R.NOTES.forEach((n,i)=>{const t=V[n.v];per[n.v.split(':')[0]]=(per[n.v.split(':')[0]]||0)+1;
 if(!t){console.log('no verse',n.v);bad++;return}
 if(!t.includes(n.a)){console.log('anchor miss',n.v,JSON.stringify(n.a));bad++}
 if(n.w&&!R.WORDS[n.w]){console.log('no word',n.w);bad++}
 if(!n.w&&(!n.t||!n.b)){console.log('no t/b',n.v,n.a);bad++}
 if(n.top&&!ids.has(n.top)){console.log('no topic',n.top);bad++}
 (n.s||[]).forEach(s=>{if(!R.SRC[s]){console.log('no src',s);bad++}});
});
// overlapping anchors in same verse
const byv={};R.NOTES.forEach(n=>{(byv[n.v]=byv[n.v]||[]).push(n)});
for(const v in byv){const t=V[v];const sp=byv[v].map(n=>[t.indexOf(n.a),t.indexOf(n.a)+n.a.length,n.a]).sort((a,b)=>a[0]-b[0]);for(let i=1;i<sp.length;i++)if(sp[i][0]<sp[i-1][1])console.log('overlap',v,sp[i-1][2],'|',sp[i][2])}
console.log('notes',R.NOTES.length,'bad',bad,JSON.stringify(per));
const used=new Set(R.NOTES.filter(n=>n.w).map(n=>n.w));console.log('unused WORDS',Object.keys(R.WORDS).filter(k=>!used.has(k)));
// glosses: phrase exists; no partial overlap with notes or other glosses (nesting is fine)
const gper={};R.GLOSSES.forEach(g=>{const t=V[g.v];gper[g.v.split(':')[0]]=(gper[g.v.split(':')[0]]||0)+1;
 if(!t||!t.includes(g.a)){console.log('gloss miss',g.v,g.a);bad++;return}
 const s=t.indexOf(g.a),e=s+g.a.length;
 [...(byv[g.v]||[]),...R.GLOSSES.filter(x=>x!==g&&x.v===g.v)].forEach(n=>{const a=t.indexOf(n.a),b=a+n.a.length;
  if(a<e&&s<b&&!((a<=s&&e<=b)||(s<=a&&b<=e))){console.log('gloss overlap',g.v,g.a,'|',n.a);bad++}})});
console.log('glosses',R.GLOSSES.length,'bad total',bad,JSON.stringify(gper));
