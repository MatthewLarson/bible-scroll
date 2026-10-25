/* ---------- sketch drawings: original line art in a cave-painting / manuscript hand ---------- */
const C = {ink:'#2a1c12', ink2:'#5a4330', parch:'#ebdab3', hi:'#f6ebcf', lo:'#d8bf8e', red:'#983220', ochre:'#b46f26',
  lapis:'#234d8a', olive:'#55612a', violet:'#5a3b6b', gold:'#c18f2a', green:'#3f7a4a', pale:'#a3ad8c', white:'#f4ecd6'};

function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
const f1 = n => (Math.round(n*10)/10);

function blob(cx,cy,r,seed,fill,op=1,sx=1.25,sy=.85){
  const rnd=rng(seed), n=9, pts=[];
  for(let i=0;i<n;i++){const a=i/n*Math.PI*2, rr=r*(.8+rnd()*.34); pts.push([cx+Math.cos(a)*rr*sx, cy+Math.sin(a)*rr*sy]);}
  let d='';
  for(let i=0;i<n;i++){
    const p=pts[i], q=pts[(i+1)%n], m=[(p[0]+q[0])/2,(p[1]+q[1])/2];
    if(i===0){const pm=pts[n-1]; d+=`M${f1((pm[0]+p[0])/2)},${f1((pm[1]+p[1])/2)}`;}
    d+=` Q${f1(p[0])},${f1(p[1])} ${f1(m[0])},${f1(m[1])}`;
  }
  return `<path d="${d}Z" fill="${fill}" opacity="${op}"/>`;
}
const K = (d,w=2.4,col=C.ink) => `<path d="${d}" fill="none" stroke="${col}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const F = (d,fill,w=2.2) => `<path d="${d}" fill="${fill}" stroke="${C.ink}" stroke-width="${w}" stroke-linejoin="round"/>`;
const dot = (x,y,r=2,fill=C.ink) => `<circle cx="${f1(x)}" cy="${f1(y)}" r="${r}" fill="${fill}"/>`;
const T = (x,y,s,size=12,anchor='start',col=C.ink) => `<text x="${f1(x)}" y="${f1(y)}" font-size="${size}" text-anchor="${anchor}" fill="${col}">${s}</text>`;
function star(x,y,r,fill=C.gold){
  let d=''; for(let i=0;i<10;i++){const a=-Math.PI/2+i*Math.PI/5, rr=i%2?r*.45:r; d+=(i?'L':'M')+f1(x+Math.cos(a)*rr)+','+f1(y+Math.sin(a)*rr);}
  return `<path d="${d}Z" fill="${fill}" stroke="${C.ink}" stroke-width="1"/>`;
}
const crown = (x,y,w=10,fill=C.gold) => F(`M${x-w/2},${y} L${x-w/2},${y-w*.7} L${x-w/4},${y-w*.35} L${x},${y-w*.8} L${x+w/4},${y-w*.35} L${x+w/2},${y-w*.7} L${x+w/2},${y} Z`,fill,1.2);
const waves = (x1,x2,y,n=3,gap=8,col=C.lapis) => { let s=''; for(let r=0;r<n;r++){let d=`M${x1},${y+r*gap}`; for(let x=x1;x<x2;x+=24) d+=` q6,-6 12,0 t12,0`; s+=K(d,1.6,col);} return s; };
const svg = (label, inner, vb='0 0 400 240') => `<svg class="art" viewBox="${vb}" role="img" aria-label="${label}"><g filter="url(#rough)">${inner}</g></svg>`;
const g = (tx,ty,s,inner,flip=false) => `<g transform="translate(${tx},${ty}) scale(${flip?-s:s},${s})">${inner}</g>`;

/* horse: cave-painting silhouette, about 124 x 76 */
function horse(fill){
  return F('M14,32 C26,18 70,16 88,24 C94,12 102,4 112,2 L122,10 L116,18 C108,18 104,26 100,36 C98,46 88,50 78,50 C60,54 36,54 24,48 C14,44 10,38 14,32 Z',fill)
   + K('M86,48 L92,72 M78,50 L74,74 M30,50 L22,72 M40,52 L44,74 M16,34 C6,40 4,50 2,62 M96,14 L90,22 M101,9 L95,17 M106,5 L100,13')
   + dot(113,8,1.6);
}
function rider(item, headFill=C.hi){
  let s = `<circle cx="60" cy="-2" r="6.5" fill="${headFill}" stroke="${C.ink}" stroke-width="2"/>` + K('M60,5 L57,24 L68,38 M59,11 L76,4');
  if(item==='bow') s += K('M77,-12 Q90,4 77,20',2.2) + K('M77,-12 L77,20',1);
  if(item==='sword') s += K('M74,6 L100,-18',3.2) + K('M72,0 L80,10',2);
  if(item==='scales') s += K('M76,4 L76,-12 M64,-12 L88,-12') + F('M64,-12 L59,-3 L69,-3 Z','none',1.4) + F('M88,-12 L83,-3 L93,-3 Z','none',1.4);
  if(item==='death') s += dot(57.5,-3,1.6) + dot(62.5,-3,1.6) + K('M57,2 L63,2',1.2);
  return s;
}
function lamb(opts={}){
  const {horns=7, eyes=7, slain=true, fill=C.white} = opts;
  let s='';
  [[30,30],[42,24],[54,25],[64,31],[54,38],[40,38],[28,38]].forEach(([x,y])=> s+=`<circle cx="${x}" cy="${y}" r="10" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`);
  s += K('M34,46 L34,62 M44,47 L44,62 M58,46 L58,62 M66,42 L68,62');
  s += `<ellipse cx="76" cy="22" rx="10" ry="7.5" fill="${fill}" stroke="${C.ink}" stroke-width="2"/>`;
  for(let i=0;i<horns;i++){const a=-2.6+i*(1.9/(horns-1||1)); const x=76+Math.cos(a)*8, y=21+Math.sin(a)*6; s+=K(`M${f1(x)},${f1(y)} q${f1(Math.cos(a)*6)},${f1(Math.sin(a)*8)} ${f1(Math.cos(a)*4+2)},${f1(Math.sin(a)*12)}`,1.6,C.ochre);}
  for(let i=0;i<eyes;i++){const x=70+i*2.2, y=20+Math.sin(i)*2.2; s+=dot(x+4,y,1.1);}
  if(slain) s += K('M64,27 L70,35',2.6,C.red) + K('M66,34 l1,5 M69,33 l1,4',1.2,C.red);
  return s;
}
/* many-headed monster: necks fan out from a shoulder point */
function heads(bx,by,n,len,spread,hornList,crownsOn,col,wounded=-1){
  let s=''; const start=-Math.PI/2-spread/2;
  for(let i=0;i<n;i++){
    const a=start+i*(spread/(n-1)), L=len*(.82+(i%3)*.1);
    const hx=bx+Math.cos(a)*L, hy=by+Math.sin(a)*L, cx=bx+Math.cos(a+.25)*L*.5, cy=by+Math.sin(a+.25)*L*.5;
    s += K(`M${bx},${by} Q${f1(cx)},${f1(cy)} ${f1(hx)},${f1(hy)}`,5,col) + K(`M${bx},${by} Q${f1(cx)},${f1(cy)} ${f1(hx)},${f1(hy)}`,1.2);
    const dir = Math.cos(a)>=0?1:-1;
    s += F(`M${f1(hx-4*dir)},${f1(hy-5)} L${f1(hx+12*dir)},${f1(hy-1)} L${f1(hx+5*dir)},${f1(hy+2)} L${f1(hx+12*dir)},${f1(hy+5)} L${f1(hx-4*dir)},${f1(hy+5)} Z`, col, 1.6);
    s += dot(hx+2*dir, hy-1.5, 1.2, C.hi);
    const h = hornList[i]||0;
    for(let j=0;j<h;j++){ const ox=hx-2*dir+j*5*dir; s += K(`M${f1(ox)},${f1(hy-5)} l${f1(-2*dir)},-8`,1.8,C.ink); if(crownsOn==='horns') s+=crown(ox-2*dir,hy-13,7); }
    if(crownsOn==='heads') s += crown(hx, hy-6, 9);
    if(i===wounded) s += K(`M${f1(hx-9)},${f1(hy+9)} l12,-4`,2.4,C.red) + K(`M${f1(hx-6)},${f1(hy+5)} l1,6 M${f1(hx-2)},${f1(hy+4)} l1,6`,1,C.red);
  }
  return s;
}
const HORNS10 = [2,1,2,1,2,1,1];

/* ---------- living creatures (glyph scale ~ 40) ---------- */
function wings6(x,y){ let s=''; [-1,1].forEach(d=>{ for(let i=0;i<3;i++){ s+=K(`M${x},${y} q${d*(18+i*4)},${-20+i*14} ${d*(26+i*3)},${-6+i*14}`,1.5,C.ink2); s+=dot(x+d*(16+i*3),y-6+i*10,1.3);} }); return s; }
const lionG=(x,y)=> wings6(x,y)+ (()=>{let s='';for(let i=0;i<14;i++){const a=i/14*Math.PI*2;s+=K(`M${f1(x+Math.cos(a)*10)},${f1(y+Math.sin(a)*10)} L${f1(x+Math.cos(a)*17)},${f1(y+Math.sin(a)*17)}`,2.2,C.ochre);}return s})()+`<circle cx="${x}" cy="${y}" r="10" fill="${C.ochre}" stroke="${C.ink}" stroke-width="2"/>`+dot(x-3.5,y-2,1.4)+dot(x+3.5,y-2,1.4)+K(`M${x-3},${y+4} q3,3 6,0`,1.4);
const oxG=(x,y)=> wings6(x,y)+F(`M${x-9},${y-6} Q${x},${y-10} ${x+9},${y-6} L${x+6},${y+10} Q${x},${y+14} ${x-6},${y+10} Z`,C.ink2)+K(`M${x-9},${y-6} q-10,-2 -10,-12 M${x+9},${y-6} q10,-2 10,-12`,2.6)+dot(x-3.5,y,1.4,C.hi)+dot(x+3.5,y,1.4,C.hi);
const manG=(x,y)=> wings6(x,y)+`<circle cx="${x}" cy="${y}" r="10" fill="${C.hi}" stroke="${C.ink}" stroke-width="2"/>`+dot(x-3.5,y-2,1.4)+dot(x+3.5,y-2,1.4)+K(`M${x},${y-1} l-1,4 h2 M${x-3},${y+5} h6`,1.3)+K(`M${x-10},${y-3} q10,-14 20,0`,1.6,C.ink2);
const eagleG=(x,y)=> wings6(x,y)+F(`M${x-22},${y-4} Q${x-10},${y-8} ${x},${y} Q${x+10},${y-8} ${x+22},${y-4} Q${x+10},${y+4} ${x},${y+8} Q${x-10},${y+4} ${x-22},${y-4} Z`,C.ink2,1.6)+`<circle cx="${x}" cy="${y-6}" r="5" fill="${C.ink2}" stroke="${C.ink}" stroke-width="1.6"/>`+F(`M${x+4},${y-7} l6,2 l-6,2 Z`,C.gold,1)+dot(x+1,y-7,1,C.hi);

/* ---------- scenes ---------- */
const ART = {
intro(){
  let s = blob(120,120,82,3,C.lapis,.14) + blob(300,110,60,9,C.ochre,.16);
  const hand=(x,y,r,sc=1)=>`<g transform="translate(${x},${y}) rotate(${r}) scale(${sc})"><circle r="46" fill="url(#spray)"/>`+K('M0,22 L0,-2',15,C.parch)+K('M-12,10 L-16,-26 M-4,6 L-5,-34 M5,6 L6,-32 M13,10 L17,-22 M-12,16 L-30,0',7,C.parch)+`<ellipse cx="0" cy="12" rx="15" ry="14" fill="${C.parch}"/></g>`;
  s += hand(84,140,-14) + hand(330,150,12,.85);
  s += K('M130,120 Q200,60 270,120 Q200,180 130,120 Z',2.6) + `<circle cx="200" cy="120" r="19" fill="${C.lapis}" stroke="${C.ink}" stroke-width="2"/>` + dot(200,120,7) + dot(195,115,2.4,C.hi);
  s += F('M118,58 Q200,20 282,58 Q262,74 246,64 Q228,84 200,66 Q172,84 154,64 Q138,74 118,58 Z', C.red) + K('M150,60 q50,30 100,0',1.4,C.hi);
  s += K('M130,120 l-12,0 M270,120 l12,0',2) + T(200,218,'apokalypsis: the cover is lifted',13,'middle',C.ink2);
  return svg('An eye with a red veil being lifted, between two cave-style hand stencils', s);
},
patmos(){
  let s = blob(200,120,96,5,C.lapis,.13) + blob(110,80,40,2,C.ochre,.15);
  for(let i=0;i<7;i++){ const x=40+i*53.3, y=210-Math.sin(i/6*Math.PI)*22;
    s += K(`M${x},${y} L${x},${y-30} M${x-9},${y} L${x+9},${y}`,2.2,C.gold) + F(`M${x-8},${y-30} Q${x},${y-22} ${x+8},${y-30} Z`,C.gold,1.4) + F(`M${x},${y-46} Q${x+5},${y-38} ${x},${y-33} Q${x-5},${y-38} ${x},${y-46} Z`,C.ochre,1.2); }
  s += F('M186,80 L168,178 L232,178 L214,80 Z', C.hi) + K('M182,98 L218,98',5,C.gold);
  s += `<circle cx="200" cy="64" r="15" fill="${C.white}" stroke="${C.ink}" stroke-width="2.2"/>`;
  for(let i=0;i<9;i++){const a=Math.PI+i*Math.PI/8; s+=K(`M${f1(200+Math.cos(a)*15)},${f1(64+Math.sin(a)*15)} L${f1(200+Math.cos(a)*24)},${f1(64+Math.sin(a)*24)}`,1.4,C.ink2);}
  s += F('M193,61 q2,-4 4,0 q-2,3 -4,0Z',C.red,1) + F('M203,61 q2,-4 4,0 q-2,3 -4,0Z',C.red,1);
  s += K('M210,70 L270,60',3.4,C.ink2) + K('M268,55 L276,63',2) + K('M214,90 L250,108');
  [[256,96],[268,104],[262,116],[276,92],[282,110],[252,120],[272,124]].forEach(([x,y])=>s+=star(x,y,5));
  s += `<ellipse cx="184" cy="182" rx="9" ry="4" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.6"/><ellipse cx="216" cy="182" rx="9" ry="4" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.6"/>`;
  return svg('One like a son of man, in a long robe with a gold sash, a sword from his mouth, seven stars in his hand, among seven lampstands', s);
},
map(){
  const P=(lat,lon)=>[20+(lon-26.2)*90, 20+(39.5-lat)*104];
  const coast=[[39.5,26.65],[39.3,26.8],[39.05,26.88],[38.9,26.95],[38.75,26.85],[38.6,26.78],[38.48,26.98],[38.43,27.12],[38.5,26.9],[38.62,26.55],[38.42,26.4],[38.28,26.35],[38.2,26.55],[38.15,26.85],[38.02,27.1],[37.92,27.27],[37.75,27.2],[37.6,27.22],[37.4,27.3],[37.2,27.45],[37.02,27.5]];
  const d='M'+coast.map(c=>P(...c).map(f1).join(',')).join(' L');
  const land = d+' L420,280 L420,0 Z';
  let s = `<clipPath id="mapclip">${blob(200,150,128,77,'#000',1,1.45,1.1)}</clipPath>`;
  s += `<g clip-path="url(#mapclip)">` + blob(200,150,128,77,C.lapis,.1,1.45,1.1) + `<path d="${land}" fill="${C.lo}" opacity=".55"/><path d="${land}" fill="url(#hatch)"/>` + K(d,2) + waves(26,100,200,3,9) + `</g>`;
  const pat=P(37.31,26.55); s += blob(pat[0],pat[1],6,4,C.ochre,.9,1.2,1.4) + T(pat[0]+12,pat[1]+4,'Patmos: John in exile',11,'start');
  const cities=[['Ephesus',37.94,27.34,'b'],['Smyrna',38.42,27.14,'r'],['Pergamum',39.12,27.18,'r'],['Thyatira',38.92,27.84,'r'],['Sardis',38.49,28.04,'r'],['Philadelphia',38.35,28.52,'r'],['Laodicea',37.84,29.11,'b']];
  const pts=cities.map(c=>P(c[1],c[2]));
  s += `<path d="${'M'+pts.map(p=>p.map(f1).join(',')).join(' L')+' Z'}" fill="none" stroke="${C.red}" stroke-width="1.8" stroke-dasharray="5 5" stroke-linecap="round"/>`;
  cities.forEach((c,i)=>{const [x,y]=pts[i]; s+=`<circle cx="${f1(x)}" cy="${f1(y)}" r="5.5" fill="${C.red}" stroke="${C.ink}" stroke-width="1.6"/>`;
    const lab=`${i+1}. ${c[0]}`; s += c[3]==='l'?T(x-9,y+4,lab,12.5,'end'):c[3]==='b'?T(x,y+20,lab,12.5,'middle'):T(x+9,y+4,lab,12.5,'start');});
  const hi=P(37.92,29.13), co=P(37.79,29.26);
  s += dot(hi[0]+4,hi[1]-8,3,C.ochre)+T(hi[0]+10,hi[1]-12,'Hierapolis (hot)',10,'start',C.ink2);
  s += dot(co[0]+2,co[1]+2,3,C.lapis)+T(co[0]+9,co[1]+5,'Colossae (cold)',10,'start',C.ink2);
  s += T(350,52,'N',13,'middle')+K('M350,58 L350,74 M345,64 L350,58 L355,64',1.4);
  s += T(28,186,'Aegean Sea',11,'start',C.lapis);
  return svg('Hand-drawn map of western Asia Minor with Patmos and the seven churches in their road order: Ephesus, Smyrna, Pergamum, Thyatira, Sardis, Philadelphia, Laodicea', s, '0 0 400 300');
},
throne(){
  let s = blob(200,128,100,8,C.lapis,.12) + `<ellipse cx="200" cy="214" rx="150" ry="14" fill="${C.lapis}" opacity=".25"/>` + waves(80,320,212,1,0,C.lapis);
  s += K('M106,150 A94,94 0 0 1 294,150',7,C.green) + K('M106,150 A94,94 0 0 1 294,150',1.2);
  for(let i=0;i<24;i++){ const a=Math.PI+.3+(i+.5)*(Math.PI-.6)/24; s+=crown(200+Math.cos(a)*112, 160+Math.sin(a)*106, 8); }
  s += F('M176,150 L176,102 Q200,84 224,102 L224,150 Z',C.gold) + F('M168,150 L232,150 L228,162 L172,162 Z',C.ochre);
  s += g(156,150,.9,lamb());
  s += lionG(60,70)+oxG(340,70)+manG(60,186)+eagleG(340,186);
  return svg('The throne in heaven with an emerald rainbow, twenty-four crowns, a lamb that looks slaughtered, and the four living creatures: lion, ox, human face and eagle', s);
},
horsemen(){
  let s = blob(200,120,110,12,C.ochre,.12) + K('M8,206 Q100,198 200,206 T392,204',1.6,C.ink2);
  const H=[[C.white,'bow'],[C.red,'sword'],[C.ink,'scales'],[C.pale,'death']];
  s += blob(332,170,34,6,C.ink,.55,1.4,.7) + dot(318,166,1.8,C.ochre) + dot(326,166,1.8,C.ochre) + T(330,222,'Hades follows',11,'middle',C.ink2);
  H.forEach(([col,item],i)=>{ const x=8+i*96, y=130; s += g(x,y,.76, horse(col) + rider(item, item==='death'?C.pale:C.hi)); });
  s += T(56,236,'conquest',11,'middle',C.ink2)+T(152,236,'war',11,'middle',C.ink2)+T(248,236,'famine',11,'middle',C.ink2);
  return svg('The four horsemen: a white horse with a bowman, a red horse with a great sword, a black horse with scales, and a pale green horse ridden by Death with Hades following', s);
},
multitude(){
  let s = blob(100,110,80,14,C.olive,.12) + blob(290,120,100,15,C.lapis,.1);
  for(let r=0;r<3;r++) for(let c=0;c<4;c++){ const x=24+c*42, y=46+r*52; let d=''; for(let k=0;k<4;k++) d+=`M${x+k*7},${y} L${x+k*7},${y+26} `; d+=`M${x-4},${y+20} L${x+26},${y+6}`; s+=K(d,2.2,C.ink); }
  s += T(92,212,'12 tribes × 12,000: what John hears',11,'middle',C.ink2);
  const rnd=rng(21);
  for(let i=0;i<46;i++){ const x=210+(i%12)*15+rnd()*6, y=58+Math.floor(i/12)*40+rnd()*6; s += F(`M${f1(x)},${f1(y)} L${f1(x-5)},${f1(y+20)} L${f1(x+5)},${f1(y+20)} Z`,C.white,1.2) + `<circle cx="${f1(x)}" cy="${f1(y-4)}" r="3.4" fill="${[C.ochre,C.ink2,C.red,C.lo][i%4]}" stroke="${C.ink}" stroke-width="1"/>`; if(i%2===0) s+=K(`M${f1(x+5)},${f1(y+4)} q4,-12 2,-22 M${f1(x+7)},${f1(y-6)} l4,-3 M${f1(x+7)},${f1(y-12)} l4,-3`,1.4,C.green); }
  s += T(300,226,'a crowd no one could count: what John sees',11,'middle',C.ink2);
  return svg('Left: twelve groups of tally marks for the 144,000 from the tribes of Israel. Right: a countless crowd in white robes holding palm branches', s);
},
trumpets(){
  let s = blob(200,140,110,17,C.red,.1);
  for(let i=0;i<7;i++){ const x=30+i*52, y=34; s+=F(`M${x},${y+10} Q${x+18},${y+14} ${x+34},${y-6} L${x+40},${y-12} L${x+38},${y+2} Q${x+20},${y+24} ${x},${y+16} Z`,C.lo,1.6) + T(x+18,y+38,i+1,11,'middle',C.ink2); }
  let L = horse(C.ochre).replace('M96,14 L90,22 M101,9 L95,17 M106,5 L100,13','');
  L += `<ellipse cx="60" cy="10" rx="34" ry="12" fill="${C.hi}" opacity=".7" stroke="${C.ink}" stroke-width="1.4"/>` + `<ellipse cx="48" cy="2" rx="26" ry="9" fill="${C.hi}" opacity=".6" stroke="${C.ink}" stroke-width="1.2"/>`;
  L += `<circle cx="116" cy="8" r="8" fill="${C.lo}" stroke="${C.ink}" stroke-width="1.8"/>` + dot(113,6,1.2)+dot(119,6,1.2) + K('M112,12 l2,2 l2,-2 l2,2 l2,-2',1) + crown(116,-1,12) + K('M109,6 q-8,10 -6,22 M111,4 q-10,10 -10,24',1.2,C.ink2);
  L += K('M14,32 C-4,20 -6,-8 14,-10 C24,-10 26,-2 20,2',3.2,C.ink) + F('M20,2 L28,6 L20,8 Z',C.red,1.2);
  s += g(110,120,1.15,L);
  s += T(200,232,'locusts from the abyss (9:7–10)',11,'middle',C.ink2);
  return svg('Seven ram-horn trumpets above a locust shaped like a war horse, with a human face, a gold crown, long hair, wings and a scorpion tail', s);
},
witnesses(){
  let s = blob(110,120,90,19,C.ochre,.13) + blob(300,130,80,23,C.olive,.13);
  s += waves(10,90,196,3,8) + K('M96,200 L190,200',2,C.ink2) + `<rect x="96" y="200" width="94" height="22" fill="url(#hatch)"/>`;
  s += F('M60,196 L66,120 L78,120 L76,196 Z',C.red,1.6) + F('M120,200 L114,120 L102,120 L104,200 Z',C.red,1.6);
  s += blob(90,92,40,4,C.hi,.95,1.1,.9) + `<circle cx="90" cy="70" r="16" fill="url(#sun)" stroke="${C.ink}" stroke-width="1.6"/>` + K('M40,70 A52,52 0 0 1 140,70',5,C.green);
  s += F('M112,100 L144,92 L146,108 L114,114 Z',C.white,1.4) + K('M118,100 l20,-4 M119,106 l20,-4',1,C.ink2);
  [[250,1],[350,-1]].forEach(([x])=>{ s+=K(`M${x},210 L${x},130`,6,C.ink2) + blob(x,112,30,x,C.olive,.85,1.1,.8) + dot(x-8,108,2.6,C.ink)+dot(x+10,116,2.6,C.ink)+dot(x+2,98,2.6,C.ink); });
  [[280],[320]].forEach(([x])=>{ s+=K(`M${x},210 L${x},170 M${x-8},210 L${x+8},210`,2.4,C.gold)+F(`M${x-8},170 Q${x},178 ${x+8},170 Z`,C.gold,1.4)+F(`M${x},154 Q${x+5},162 ${x},167 Q${x-5},162 ${x},154 Z`,C.ochre,1.2); });
  s += T(300,234,'two olive trees, two lampstands (11:4)',11,'middle',C.ink2);
  return svg('A mighty angel with a rainbow and a sun face, legs like pillars of fire, one foot on the sea and one on land, holding a small scroll; beside it two olive trees and two lampstands', s);
},
woman(){
  let s = `<circle cx="96" cy="100" r="62" fill="url(#sun)" opacity=".9"/>`;
  for(let i=0;i<16;i++){const a=i/16*Math.PI*2; s+=K(`M${f1(96+Math.cos(a)*64)},${f1(100+Math.sin(a)*64)} L${f1(96+Math.cos(a)*80)},${f1(100+Math.sin(a)*80)}`,2,C.ochre);}
  for(let i=0;i<12;i++){const a=Math.PI*1.12+i*(Math.PI*.76/11); s+=star(96+Math.cos(a)*44, 82+Math.sin(a)*44, 4.2, C.hi);}
  s += F('M96,70 L76,176 L116,176 Z',C.lapis) + `<circle cx="96" cy="62" r="9" fill="${C.hi}" stroke="${C.ink}" stroke-width="2"/>`;
  s += F('M64,190 Q96,166 128,190 Q96,180 64,190 Z',C.hi,1.6);
  let body = 'M250,208 C200,206 196,176 232,170 C270,164 300,186 336,170 C370,156 386,124 360,104';
  s += K(body,16,C.red) + K(body,1.4);
  s += K('M360,104 C340,80 352,40 380,26',5,C.red) + K('M360,104 C340,80 352,40 380,26',1.2);
  [[370,18],[384,40],[392,14],[358,10]].forEach(([x,y])=>s+=star(x,y,3.4,C.hi)+K(`M${x},${y+6} l-6,${12}`,1,C.ink2));
  s += heads(232,170,7,62,2.2,HORNS10,'heads',C.red);
  s += T(96,226,'clothed with the sun',11,'middle',C.ink2)+T(272,230,'7 heads, 7 crowns, 10 horns',11,'middle',C.ink2);
  return svg('A woman clothed with the sun, moon under her feet and twelve stars, facing a great red dragon with seven crowned heads and ten horns whose tail sweeps stars from the sky', s);
},
beasts(){
  let s = blob(120,140,100,31,C.lapis,.12) + blob(320,150,70,33,C.ochre,.14);
  s += F('M40,196 C40,150 90,136 140,146 C176,152 196,170 196,196 Z',C.ochre);
  s += `<path d="M40,196 C40,150 90,136 140,146 C176,152 196,170 196,196 Z" fill="url(#spots)" opacity=".8"/>`;
  s += F('M60,196 l-6,14 l18,0 l2,-14 Z',C.ink2,1.6) + F('M166,196 l6,14 l-18,0 l-2,-14 Z',C.ink2,1.6);
  s += heads(110,148,7,70,2.3,HORNS10,'horns',C.ochre,5);
  s += waves(10,230,196,3,8);
  s += K('M250,212 L392,212',2,C.ink2) + `<rect x="250" y="212" width="142" height="18" fill="url(#hatch)"/>`;
  s += F('M290,212 C288,180 300,160 324,158 C348,156 362,176 360,212 Z',C.lo);
  s += `<circle cx="324" cy="150" r="14" fill="${C.lo}" stroke="${C.ink}" stroke-width="2"/>` + dot(319,148,1.6)+dot(329,148,1.6);
  s += K('M316,138 q-4,-8 2,-12 M332,138 q4,-8 -2,-12',2.2,C.ochre);
  s += F('M338,154 Q356,150 372,140 Q362,154 376,158 Q358,160 338,158 Z',C.red,1.4);
  for(let i=0;i<4;i++) s += K(`M${290+i*24},20 l-8,${40+i*6}`,2,C.red) + F(`M${282+i*24},${60+i*6} q4,6 0,10 q-4,-4 0,-10Z`,C.ochre,1);
  s += T(118,234,'beast from the sea (13:1)',11,'middle',C.ink2)+T(324,234,'beast from the land (13:11)',11,'middle',C.ink2);
  return svg('Left: a leopard-like beast with bear feet rising from the sea, seven heads, ten crowned horns, one head with a healed wound. Right: a beast from the earth with two lamb horns, speaking fire, calling fire down from the sky', s);
},
zion(){
  let s = blob(150,130,100,41,C.ochre,.12);
  s += F('M40,210 L140,90 L240,210 Z',C.lo) + `<path d="M40,210 L140,90 L240,210 Z" fill="url(#hatch)"/>`;
  s += g(108,62,.6,lamb());
  for(let i=0;i<3;i++){const x=270+i*40, y=40+i*22; s+=`<circle cx="${x}" cy="${y}" r="5" fill="${C.hi}" stroke="${C.ink}" stroke-width="1.6"/>`+K(`M${x},${y+5} L${x-14},${y+12}`,2)+K(`M${x-2},${y+6} q-6,-16 -22,-14 M${x-2},${y+7} q4,-18 18,-20`,1.6,C.ink2);}
  s += K('M300,190 q20,-40 50,-30',4,C.ink2) + K('M300,190 L292,206',3,C.ink);
  [[352,190],[362,190],[357,198],[347,198],[367,198],[352,206],[362,206],[357,214]].forEach(([x,y])=>s+=`<circle cx="${x}" cy="${y}" r="5" fill="${C.violet}" stroke="${C.ink}" stroke-width="1.2"/>`);
  s += T(140,232,'the Lamb on Mount Zion',11,'middle',C.ink2)+T(330,232,'sickle and grapes (14:14–20)',11,'middle',C.ink2);
  return svg('The Lamb standing on Mount Zion, three angels flying, and a sickle beside a cluster of grapes', s);
},
bowls(){
  let s = blob(200,120,120,51,C.red,.09);
  for(let i=0;i<7;i++){ const x=30+i*54, y=40+Math.sin(i/6*Math.PI)*-12+12; s+=`<g transform="rotate(${-28+i*2} ${x} ${y})">`+F(`M${x-16},${y} Q${x},${y+20} ${x+16},${y} Z`,C.gold,1.6)+`</g>`; for(let k=0;k<3;k++) s+=F(`M${x+10+k*3},${y+12+k*12} q3,5 0,8 q-3,-3 0,-8Z`,C.red,1); }
  const frog=(x,y)=> F(`M${x-14},${y} Q${x-12},${y-14} ${x},${y-14} Q${x+12},${y-14} ${x+14},${y} Q${x},${y+6} ${x-14},${y} Z`,C.olive,1.6)+`<circle cx="${x-6}" cy="${y-13}" r="3.4" fill="${C.olive}" stroke="${C.ink}" stroke-width="1.2"/><circle cx="${x+6}" cy="${y-13}" r="3.4" fill="${C.olive}" stroke="${C.ink}" stroke-width="1.2"/>`+dot(x-6,y-13,1.2)+dot(x+6,y-13,1.2)+K(`M${x-14},${y} l-6,6 M${x+14},${y} l6,6`,1.6);
  s += frog(70,166)+frog(120,176)+frog(170,166);
  s += T(120,206,'three spirits like frogs (16:13)',11,'middle',C.ink2);
  s += F('M230,206 Q250,160 300,156 Q350,160 372,206 Z',C.lo) + `<path d="M230,206 Q250,160 300,156 Q350,160 372,206 Z" fill="url(#hatch)"/>` + K('M200,206 L396,206',2,C.ink2);
  s += T(300,226,'Tel Megiddo: a mound, not a mountain',11,'middle',C.ink2);
  return svg('Seven golden bowls pouring red drops, three frog-like spirits, and the low mound of Tel Megiddo', s);
},
babylon(){
  let s='';
  for(let i=0;i<7;i++) s += F(`M${20+i*52},150 Q${46+i*52},${110+(i%2)*10} ${72+i*52},150 Z`,C.lo,1.4);
  s += `<rect x="16" y="150" width="372" height="10" fill="url(#hatch)"/>`;
  s += F('M80,206 C80,172 120,160 170,164 C210,166 232,182 232,206 Z',C.red);
  s += K('M96,206 l-4,18 M120,208 l0,16 M200,208 l2,16 M222,206 l6,16',3);
  s += heads(220,170,7,48,2.0,HORNS10,'none',C.red);
  s += F('M150,164 L132,120 L170,120 Z',C.violet) + `<circle cx="151" cy="112" r="8" fill="${C.hi}" stroke="${C.ink}" stroke-width="1.8"/>` + crown(151,105,10) + K('M158,128 L176,116',2) + F('M172,104 L184,104 L181,116 L175,116 Z',C.gold,1.4) + K('M178,116 L178,122',1.6);
  for(let i=0;i<3;i++){ const x=286+i*38, y=210+(i%2)*8; s += F(`M${x-16},${y} L${x+16},${y} L${x+10},${y+8} L${x-10},${y+8} Z`,C.ink2,1.4)+K(`M${x},${y} L${x},${y-24}`,1.6)+F(`M${x},${y-24} L${x+12},${y-8} L${x},${y-6} Z`,C.hi,1.2); }
  s += waves(260,396,224,1,0) + T(150,236,'the woman on the scarlet beast',11,'middle',C.ink2) + T(324,196,'merchants mourn',11,'middle',C.ink2);
  return svg('A woman in purple holding a gold cup, seated on a scarlet seven-headed beast in front of seven hills, with merchant ships mourning', s);
},
rider(){
  let s = blob(220,110,120,61,C.lapis,.12) + K('M20,40 Q200,-10 380,40',2,C.ink2) + K('M40,44 l-8,-14 M80,30 l-6,-14 M320,30 l6,-14 M360,44 l8,-14',1.4,C.ink2);
  for(let i=0;i<5;i++) s += g(20+i*38,186,.3,horse(C.white)+`<circle cx="60" cy="-2" r="6.5" fill="${C.hi}" stroke="${C.ink}" stroke-width="2"/>`+K('M60,5 L57,24'));
  let r = horse(C.white) + F('M60,4 L50,30 L72,30 Z',C.red) + `<circle cx="60" cy="-3" r="7" fill="${C.hi}" stroke="${C.ink}" stroke-width="2"/>` + dot(62,-4,1.4,C.ochre);
  r += crown(56,-9,8)+crown(62,-12,8)+crown(68,-9,8) + K('M67,-2 L108,-10',3.2,C.ink2) + K('M104,-15 L110,-5',1.6);
  r += K('M52,26 C46,30 44,36 46,42',1.4,C.red) + T(36,48,'King of kings',7,'start',C.ink2);
  s += g(120,80,1.5,r);
  return svg('The rider on a white horse, wearing many crowns and a robe dipped in blood, a sword coming from his mouth, followed by armies on white horses', s);
},
millennium(){
  let s = blob(110,140,80,71,C.ink,.08) + blob(300,120,90,73,C.white,.5);
  s += `<ellipse cx="110" cy="170" rx="72" ry="30" fill="${C.ink}" opacity=".8"/>` + K('M38,170 Q110,206 182,170',2);
  s += K('M70,168 C90,150 130,150 140,166 C150,182 104,188 92,176',8,C.red) + K('M70,168 C90,150 130,150 140,166 C150,182 104,188 92,176',1.2);
  let ch=''; for(let i=0;i<9;i++) ch+=`<ellipse cx="${60+i*12}" cy="${130+Math.sin(i)*4}" rx="6" ry="3.5" fill="none" stroke="${C.ink2}" stroke-width="2"/>`; s+=ch;
  s += `<circle cx="160" cy="62" r="9" fill="none" stroke="${C.gold}" stroke-width="3.4"/>` + K('M168,68 L196,96 M188,88 l6,-6 M194,94 l6,-6',3.4,C.gold);
  for(let i=0;i<5;i++){ const x=232+i*30, y=196; s+=F(`M${x},${y} L${x},${y-26} Q${x+10},${y-32} ${x+20},${y-26} L${x+20},${y} Z`,C.lo,1.4); }
  s += F('M276,110 L276,58 Q300,40 324,58 L324,110 Z',C.white,2.2) + F('M266,110 L334,110 L330,122 L270,122 Z',C.white,2) + K('M270,32 l-10,-10 M300,26 l0,-14 M330,32 l10,-10',1.6,C.gold);
  s += T(110,224,'bound in the abyss',11,'middle',C.ink2) + T(300,224,'thrones; then the great white throne',11,'middle',C.ink2);
  return svg('The dragon chained in a dark pit, a gold key, a row of thrones, and the great white throne', s);
},
city(){
  let s = blob(200,120,120,81,C.ochre,.13) + `<circle cx="200" cy="40" r="30" fill="url(#sun)" opacity=".5"/>`;
  s += F('M200,30 L280,72 L200,114 L120,72 Z',C.hi) + F('M120,72 L200,114 L200,200 L120,158 Z',C.gold) + F('M200,114 L280,72 L280,158 L200,200 Z','#d9a640');
  for(let i=0;i<3;i++){ const t=(i+1)/4;
    const lx=120+80*t, ly=72+42*t; s += F(`M${f1(lx-6)},${f1(ly+86)} L${f1(lx-6)},${f1(ly+68)} Q${f1(lx)},${f1(ly+58)} ${f1(lx+6)},${f1(ly+72)} L${f1(lx+6)},${f1(ly+92)} Z`,C.white,1.4);
    const rx=200+80*t, ry=114-42*t; s += F(`M${f1(rx-6)},${f1(ry+92)} L${f1(rx-6)},${f1(ry+72)} Q${f1(rx)},${f1(ry+58)} ${f1(rx+6)},${f1(ry+68)} L${f1(rx+6)},${f1(ry+86)} Z`,C.white,1.4); }
  s += F('M196,200 Q190,218 172,236 L228,236 Q210,218 204,200 Z',C.lapis,1.6);
  [[150,226],[250,226]].forEach(([x,y])=>{ s+=K(`M${x},${y} L${x},${y-26}`,4,C.ink2)+blob(x,y-34,16,x,C.green,.9,1.2,.8); for(let k=0;k<4;k++) s+=dot(x-8+k*5,y-34+(k%2)*6,2.2,C.red); });
  s += T(330,120,'a cube, like the',11,'middle',C.ink2)+T(330,136,'Most Holy Place',11,'middle',C.ink2)+T(330,152,'(1 Kings 6:20)',11,'middle',C.ink2);
  s += T(70,120,'12 gates,',11,'middle',C.ink2)+T(70,136,'each one pearl',11,'middle',C.ink2);
  return svg('The New Jerusalem drawn as a golden cube with pearl gates, a river flowing out, and the tree of life on both banks', s);
},
omega(){
  let s = blob(200,120,110,91,C.lapis,.12);
  s += `<text x="120" y="160" font-size="120" text-anchor="middle" fill="${C.red}" style="font-family:var(--f-greek)">Α</text><text x="280" y="160" font-size="120" text-anchor="middle" fill="${C.lapis}" style="font-family:var(--f-greek)">Ω</text>`;
  s += star(200,64,18,C.gold) + K('M200,90 L200,200',1.2,C.ink2);
  s += T(200,222,'the bright morning star (22:16)',12,'middle',C.ink2);
  return svg('The Greek letters Alpha and Omega with a morning star between them', s);
}
};

/* ---------- diagrams ---------- */
const LENS = {
  P:{name:'Preterist', gist:'mostly fulfilled in the first centuries', col:C.red},
  H:{name:'Historicist', gist:'unfolds across church history', col:C.olive},
  F:{name:'Futurist', gist:'chapters 4–22 mostly still future', col:C.lapis},
  I:{name:'Idealist', gist:'a timeless pattern for every age', col:C.violet}
};
function lensGlyph(k, size=14){
  const c=LENS[k].col, sh={P:`<circle cx="7" cy="7" r="5.5" fill="${c}"/>`, H:`<path d="M7,1.5 L12.8,12 L1.2,12 Z" fill="${c}"/>`, F:`<path d="M7,1 L13,7 L7,13 L1,7 Z" fill="${c}"/>`, I:`<path d="M7,7 m0,-1 a1,1 0 1 1 -1,1 a3,3 0 0 1 3,-3 a5,5 0 0 1 4,5 a6,6 0 0 1 -6,5.5" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round"/>`}[k];
  return `<svg viewBox="0 0 14 14" width="${size}" height="${size}" aria-hidden="true">${sh}</svg>`;
}
function chartViews(){
  const ticks=['AD 30','70','313','476','1517','Today','Future','Eternity'], x0=86, w=300, step=w/(ticks.length-1);
  const X=i=>x0+i*step;
  let s='';
  ticks.forEach((t,i)=>{ s+=K(`M${f1(X(i))},28 L${f1(X(i))},212`,1,'rgba(90,67,48,.35)')+T(X(i),20,t,10.5,'middle',C.ink2); });
  const row=(k,i)=>40+i*44;
  const bar=(k,i,a,b,label,op=1,dash=false)=>`<rect x="${f1(X(a))}" y="${row(k,i)}" width="${f1(X(b)-X(a))}" height="22" rx="11" fill="${LENS[k].col}" opacity="${op}" ${dash?`stroke="${LENS[k].col}" stroke-dasharray="4 3" fill-opacity=".15"`:''}/>`+(label?T((X(a)+X(b))/2,row(k,i)+15,label,10.5,'middle',op>.6?C.hi:C.ink):'');
  ['P','H','F','I'].forEach((k,i)=>{ s+=T(8,row(k,i)+15,LENS[k].name,12,'start',LENS[k].col); });
  s += bar('P',0,0.55,1.55,'ch. 4–19: AD 60s–300s') + bar('P',0,5.6,7,'20–22 (partial)',.35,true);
  s += bar('H',1,0.6,6,'ch. 4–19 spread across all church history') + bar('H',1,6,7,'',.35,true);
  s += bar('F',2,0.55,0.95,'') + T(X(0.75),row('F',2)+36,'ch. 1–3',10,'middle',C.ink2) + bar('F',2,5.6,7,'ch. 4–22');
  s += bar('I',3,0,7,'every age: the same story of faithfulness, beasts and victory',.28,true);
  return `<svg class="art" viewBox="0 0 400 226" role="img" aria-label="Schematic: where each of the four views places the events of Revelation in history. Spacing is not to scale.">${s}</svg>`;
}
function chartStructure(){
  let s=''; const cols=[C.red,C.ochre,C.lapis], lab=['seals','trumpets','bowls'];
  const row=(y,label)=>T(8,y+4,label,12,'start',C.ink);
  // straight line
  s+=row(34,'One after another'); for(let i=0;i<21;i++) s+=`<circle cx="${150+i*11.5}" cy="34" r="4.2" fill="${cols[Math.floor(i/7)]}"/>`;
  // telescoping
  s+=row(96,'Nested (telescope)');
  for(let i=0;i<7;i++) s+=`<circle cx="${150+i*13}" cy="80" r="4.2" fill="${cols[0]}"/>`;
  s+=K('M228,84 Q232,96 240,96',1.4,C.ink2); for(let i=0;i<7;i++) s+=`<circle cx="${244+i*13}" cy="96" r="4.2" fill="${cols[1]}"/>`;
  s+=K('M322,100 Q326,112 334,112',1.4,C.ink2); for(let i=0;i<7;i++) s+=`<circle cx="${338+i*8.4}" cy="112" r="3.6" fill="${cols[2]}"/>`;
  // recapitulation
  s+=row(170,'Retold three times');
  for(let r=0;r<3;r++) for(let i=0;i<7;i++) s+=`<circle cx="${190+i*24}" cy="${150+r*20}" r="4.2" fill="${cols[r]}"/>`;
  s+=K('M352,140 L352,200',2.4,C.ink)+T(360,174,'the end',11,'start',C.ink2);
  lab.forEach((l,i)=>s+=`<circle cx="${160+i*80}" cy="222" r="4.2" fill="${cols[i]}"/>`+T(168+i*80,226,l,11,'start',C.ink2));
  return `<svg class="art" viewBox="0 0 400 236" role="img" aria-label="Three ways to fit the seven seals, trumpets and bowls together: one after another, nested inside each other, or as three retellings of the same period that all end at the end">${s}</svg>`;
}
function spectrum(){
  let s = K('M20,40 L380,40',2.4,C.ink) + K('M20,34 L20,46 M380,34 L380,46',2.4,C.ink);
  s += T(20,66,'events happen as described',11,'start',C.ink2)+T(380,66,'symbols of spiritual realities',11,'end',C.ink2);
  s += T(20,22,'More literal',12,'start')+T(380,22,'More symbolic',12,'end');
  [['F',.2],['H',.43],['P',.56],['I',.86]].forEach(([k,p])=>{ const x=20+p*360; s+=`<g transform="translate(${x-9},31)">${lensGlyph(k,18).replace('<svg','<svg x="0" y="0"')}</g>`+T(x,92,LENS[k].name,11,'middle',LENS[k].col); });
  return `<svg class="art" viewBox="0 0 400 100" role="img" aria-label="Where each view tends to sit between literal and symbolic reading">${s}</svg>`;
}
