/* ---------- more sketches for chapters that had none ---------- */
Object.assign(ART, {
door(){
  let s = blob(130,120,96,31,C.ochre,.13) + blob(310,130,80,32,C.lapis,.12);
  s += F('M70,214 L70,86 Q118,34 166,86 L166,214 Z', C.lo, 2.2) + `<path d="M70,214 L70,86 Q118,34 166,86 L166,214 Z" fill="url(#hatch)"/>`;
  s += F('M166,214 L166,86 L196,100 L196,206 Z', C.ochre, 2) + dot(186,152,2.6,C.ink);
  s += `<path d="M74,212 L74,90 Q118,44 162,90 L162,212 Z" fill="url(#sun)" opacity=".35"/>`;
  s += `<g transform="translate(218,112)"><circle r="30" fill="url(#spray)"/>` + K('M-8,12 L-8,-4 M-2,-6 L-2,-18 M4,-6 L4,-18 M10,-4 L10,-14',6,C.parch) + `<ellipse cx="1" cy="4" rx="12" ry="10" fill="${C.parch}"/></g>` + K('M200,98 l-8,-6 M200,110 l-10,0 M200,122 l-8,6',1.6,C.ink2);
  [[262,'hot',C.red,'Hierapolis'],[308,'lukewarm',C.ochre,'Laodicea'],[354,'cold',C.lapis,'Colossae']].forEach(([x,lab,col,city],i)=>{
    s += F(`M${x-13},150 Q${x-16},184 ${x-9},198 L${x+9},198 Q${x+16},184 ${x+13},150 Z`, C.hi, 1.8) + K(`M${x-13},150 Q${x},144 ${x+13},150`,1.6);
    s += blob(x,170,8,40+i,col,.7,1.1,.9);
    if(lab==='hot') s += K(`M${x-5},140 q-4,-8 0,-14 q4,-6 0,-12 M${x+5},140 q-4,-8 0,-14`,1.4,C.red);
    if(lab==='cold') s += K(`M${x-8},136 l4,4 l4,-4 l4,4 l4,-4`,1.4,C.lapis);
    if(lab==='lukewarm') s += K(`M${x-10},140 q10,-6 20,0`,1.4,C.ochre);
    s += T(x,214,lab,10.5,'middle',C.ink2) + T(x,227,city,9.5,'middle',C.ink2);
  });
  s += T(118,232,'"I stand at the door and knock" (3:20)',11,'middle',C.ink2);
  return svg('A door standing ajar with light behind it and a cave-stencil hand knocking; beside it three water jars: hot from Hierapolis, lukewarm at Laodicea, cold from Colossae', s);
},
scroll(){
  let s = blob(200,118,110,33,C.red,.08) + blob(120,100,60,34,C.ochre,.14);
  s += `<g transform="translate(46,58)"><circle cx="22" cy="80" r="44" fill="url(#spray)"/>` + K('M2,96 L2,62 M10,58 L10,40 M18,56 L18,36 M26,58 L26,40 M34,62 L36,48',7,C.parch) + `<ellipse cx="18" cy="76" rx="20" ry="18" fill="${C.parch}"/></g>`;
  s += F('M70,92 L246,92 L246,176 L70,176 Z', C.hi, 2.2) + `<ellipse cx="70" cy="134" rx="11" ry="44" fill="${C.lo}" stroke="${C.ink}" stroke-width="2.2"/><ellipse cx="246" cy="134" rx="11" ry="44" fill="${C.lo}" stroke="${C.ink}" stroke-width="2.2"/>`;
  for(let r=0;r<5;r++) s += K(`M88,${106+r*14} q40,-3 70,0 t70,0`,1.1,C.ink2);
  for(let i=0;i<7;i++){ const x=92+i*22, y=176+(i%2?6:0); s += K(`M${x},176 L${x},${y+6}`,1.2,C.ink) + blob(x,y+10,6,50+i,C.red,1,1,1) + T(x,y+13,i+1,8,'middle',C.hi); }
  s += g(276,130,.82,lamb());
  s += T(200,232,'a scroll sealed with seven seals, and the Lamb who can open it',11,'middle',C.ink2);
  return svg('A scroll written inside and out, sealed with seven red wax seals, held out by a stencilled hand; a slaughtered lamb with seven horns and seven eyes stands beside it', s);
},
locust(){
  let s = blob(200,120,116,35,C.ochre,.12) + blob(320,84,50,36,C.red,.12);
  s += waves(10,390,206,3,8);
  s += T(200,238,'the great river Euphrates (9:14)',11,'middle',C.ink2);
  const lionHorse = (fill) => horse(fill).replace('M96,14 L90,22 M101,9 L95,17 M106,5 L100,13','')
    + `<circle cx="114" cy="10" r="13" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.8"/>` + `<circle cx="116" cy="10" r="7" fill="${C.lo}" stroke="${C.ink}" stroke-width="1.4"/>` + dot(118,8,1.3)
    + F('M124,10 Q140,2 150,8 Q140,12 146,18 Q134,16 124,14 Z', C.red, 1.2) + F('M130,10 Q140,6 144,9 Q138,12 130,12 Z', C.gold, .8)
    + K('M16,34 C4,44 -10,40 -16,30', 3, C.ink) + `<circle cx="-18" cy="27" r="3.4" fill="${C.ink}"/>`;
  s += g(26,122,.92,lionHorse(C.red)) + g(170,132,.82,lionHorse(C.lapis)) + g(290,116,.7,lionHorse(C.gold));
  for(let i=0;i<4;i++){ const x=58+i*92; s += `<circle cx="${x}" cy="44" r="8" fill="${C.hi}" stroke="${C.ink}" stroke-width="1.8"/>` + K(`M${x},52 L${x},70 M${x-12},58 L${x+12},58`,2) + K(`M${x-14},50 q14,10 28,0 M${x-14},62 q14,10 28,0`,1.4,C.ink2); }
  s += T(200,22,'four angels bound at the river, now released',11,'middle',C.ink2);
  return svg('Four bound angels released above the river Euphrates, and war horses with lions’ heads breathing fire, with snake-headed tails, their riders’ armor red, blue and yellow', s);
},
angel(){
  let s = blob(200,120,110,37,C.lapis,.1) + blob(200,70,70,38,C.ochre,.13);
  s += waves(8,180,196,3,8) + K('M196,200 L392,200',2,C.ink2) + `<rect x="196" y="200" width="196" height="24" fill="url(#hatch)"/>`;
  s += K('M118,64 A82,82 0 0 1 282,64',6,C.green) + K('M118,64 A82,82 0 0 1 282,64',1.2);
  s += `<ellipse cx="200" cy="96" rx="78" ry="20" fill="${C.hi}" opacity=".7" stroke="${C.ink2}" stroke-width="1.4"/>`;
  s += `<circle cx="200" cy="66" r="19" fill="url(#sun)" stroke="${C.ink}" stroke-width="1.8"/>`;
  s += F('M178,86 L222,86 L232,146 L168,146 Z', C.white, 2);
  s += F('M174,146 L170,198 L186,198 L190,146 Z', C.red, 1.8) + F('M210,146 L214,200 L230,200 L226,146 Z', C.red, 1.8);
  s += K('M180,96 L150,40',3) + K('M220,98 L254,118',3) + F('M250,110 L282,104 L286,122 L254,128 Z', C.hi, 1.6) + K('M256,114 l22,-4 M257,120 l22,-4',1,C.ink2);
  for(let i=0;i<7;i++){ const x=40+i*14, y=30+(i%2)*10; s += K(`M${x},${y} l6,10 l-5,0 l6,12`,1.8,C.gold); }
  s += T(76,72,'seven thunders, sealed',10.5,'middle',C.ink2);
  s += T(200,236,'one foot on the sea, one on the land (10:2)',11,'middle',C.ink2);
  return svg('A mighty angel wrapped in a cloud with a rainbow over his head and a face like the sun, legs like pillars of fire, right foot on the sea and left on the land, raising a hand to heaven and holding a small open scroll; seven thunderbolts beside him', s);
},
seaglass(){
  let s = blob(200,90,110,39,C.violet,.1) + blob(200,170,140,41,C.lapis,.12,1.4,.5);
  s += `<ellipse cx="200" cy="176" rx="170" ry="30" fill="${C.lapis}" opacity=".18" stroke="${C.ink2}" stroke-width="1.6"/>`;
  for(let i=0;i<9;i++){ const x=50+i*38; s += K(`M${x},170 q8,-10 0,-20 q-6,-8 2,-14`,1.6,i%2?C.red:C.ochre); }
  for(let i=0;i<7;i++){ const x=48+i*50, y=40;
    s += `<circle cx="${x}" cy="${y}" r="7" fill="${C.hi}" stroke="${C.ink}" stroke-width="1.6"/>` + F(`M${x-8},${y+8} L${x+8},${y+8} L${x+10},${y+36} L${x-10},${y+36} Z`, C.white, 1.4) + K(`M${x-8},${y+16} L${x+8},${y+16}`,3,C.gold)
      + F(`M${x+8},${y+30} q8,10 18,0 Z`, C.gold, 1.2); }
  for(let i=0;i<6;i++){ const x=70+i*52, y=212;
    s += `<circle cx="${x}" cy="${y-30}" r="6" fill="${C.ochre}" stroke="${C.ink}" stroke-width="1.4"/>` + F(`M${x-7},${y-24} L${x+7},${y-24} L${x+8},${y} L${x-8},${y} Z`, C.white, 1.2)
      + K(`M${x+10},${y-30} q10,8 0,22 M${x+10},${y-30} L${x+10},${y-8} M${x+13},${y-26} L${x+13},${y-11}`,1.3,C.ink2); }
  s += T(200,236,'beside a sea of glass mixed with fire, they sing the song of Moses and the Lamb',10.5,'middle',C.ink2);
  return svg('Seven angels in linen with gold sashes carry gold bowls above a sea of glass mixed with fire, where the victors stand holding harps and singing', s);
},
fallen(){
  let s = blob(130,110,90,43,C.red,.1) + blob(300,130,90,44,C.ink,.08);
  s += waves(170,394,196,3,8);
  for(let i=0;i<6;i++){ const x=24+i*24, h=[60,34,80,22,52,40][i]; s += F(`M${x},196 L${x},${196-h} L${x+16},${196-h-6} L${x+18},196 Z`, i%2?C.lo:C.hi, 1.6); }
  s += K('M20,196 L170,196',2.2) + `<rect x="18" y="196" width="152" height="26" fill="url(#hatch)"/>`;
  for(let i=0;i<4;i++) s += `<ellipse cx="${60+i*22}" cy="${96-i*18}" rx="${22+i*5}" ry="${10+i*3}" fill="${C.ink2}" opacity="${.35-i*.06}"/>`;
  s += F('M246,84 m-30,0 a30,30 0 1 0 60,0 a30,30 0 1 0 -60,0 Z', C.lo, 2.2) + `<circle cx="246" cy="84" r="8" fill="${C.ink2}"/>` + K('M226,70 q20,-8 40,0',1.2,C.ink2);
  s += K('M270,118 q20,30 30,64',1.6,C.ink2) + K('M290,182 q12,-8 24,0 M284,190 q18,-12 36,0',1.4,C.lapis);
  s += `<g transform="translate(338,150)">` + F('M-24,6 L24,6 L16,16 L-16,16 Z', C.ochre, 1.4) + K('M0,6 L0,-22',1.6) + F('M2,-20 L16,-2 L2,-2 Z', C.hi, 1.2) + `</g>`;
  s += `<g transform="translate(200,146) scale(.7)">` + F('M-24,6 L24,6 L16,16 L-16,16 Z', C.ochre, 1.4) + K('M0,6 L0,-22',1.6) + F('M2,-20 L16,-2 L2,-2 Z', C.hi, 1.2) + `</g>`;
  s += T(200,236,'a millstone thrown into the sea; sailors watch the smoke (18:17–21)',10.5,'middle',C.ink2);
  return svg('The burning ruins of a city with smoke rising, a great millstone thrown into the sea, and ships standing far off watching', s);
}
});

/* Megiddo and the Jezreel Valley, drawn from real coordinates */
ART.megiddomap = function(){
  const P = (lat,lon) => [18 + (lon-34.82)*380, 8 + (32.95-lat)*450];
  const line = pts => 'M' + pts.map(p => P(...p).map(f1).join(',')).join(' L');
  const at = (lat,lon) => P(lat,lon).map(f1);
  const coast = [[32.97,35.08],[32.92,35.07],[32.86,35.06],[32.81,35.03],[32.82,34.99],[32.83,34.96],[32.78,34.95],[32.7,34.93],[32.6,34.91],[32.5,34.89],[32.36,34.87]];
  let s = `<clipPath id="mgclip">${blob(200,130,150,83,'#000',1,1.3,.85)}</clipPath>` + blob(200,130,150,83,C.ochre,.1,1.3,.85);
  s += `<g clip-path="url(#mgclip)">`;
  s += `<path d="${line(coast)} L-20,300 L-20,-20 Z" fill="${C.lapis}" opacity=".16"/>` + K(line(coast), 1.8, C.ink2);
  s += blob(...P(32.575,35.31), 52, 90, C.hi, .45, 1.9, .5);
  const hills = (a, b, n) => { let h = ''; for(let i=0;i<n;i++){ const t=n>1 ? i/(n-1) : 0, q=P(a[0]+(b[0]-a[0])*t, a[1]+(b[1]-a[1])*t);
    h += K(`M${f1(q[0]-6)},${f1(q[1]+4)} L${f1(q[0])},${f1(q[1]-5)} L${f1(q[0]+6)},${f1(q[1]+4)}`, 1.4, C.ink2); } return h; };
  s += hills([32.8,35.0],[32.63,35.1],7) + hills([32.5,35.37],[32.42,35.45],4) + hills([32.687,35.385],[32.687,35.395],1);
  s += K(line([[32.49,35.34],[32.56,35.28],[32.62,35.2],[32.67,35.13],[32.74,35.08],[32.79,35.05]]), 1.6, C.lapis);
  s += blob(...P(32.8,35.59), 14, 95, C.lapis, .32, .8, 1.7) + K(line([[32.71,35.575],[32.62,35.565],[32.5,35.555],[32.36,35.545]]), 1.8, C.lapis);
  s += `</g>`;
  s += `<path d="${line([[32.38,34.95],[32.47,35.03],[32.52,35.08],[32.585,35.185],[32.64,35.33],[32.66,35.45],[32.75,35.53]])}" fill="none" stroke="${C.red}" stroke-width="1.8" stroke-dasharray="5 5" stroke-linecap="round"/>`;
  s += T(...at(32.43,35.03), 'Via Maris', 11, 'start', C.red) + T(...at(32.405,35.03), 'the road from Egypt', 9.5, 'start', C.red);
  [[[32.585,35.185],'Megiddo',C.red,8,'end',-10,2,13.5],[[32.67,35.09],'Carmel',C.ochre,5,'end',-9,15,12.5],[[32.70,35.30],'Nazareth',C.ink2,5,'end',-8,-5,12.5],[[32.687,35.39],'Mt. Tabor',C.ochre,4.5,'start',8,4,12],
   [[32.556,35.33],'Jezreel',C.ink2,4.5,'start',8,12,12],[[32.52,35.22],'Taanach',C.ink2,4,'end',-7,11,11],[[32.46,35.4],'Mt. Gilboa',C.ochre,4,'start',9,10,11.5],[[32.81,34.99],'Haifa',C.ink2,4,'start',8,-6,11]
  ].forEach(([p,lab,col,r,anc,dx,dy,fs]) => { const q = P(...p);
    s += `<circle cx="${f1(q[0])}" cy="${f1(q[1])}" r="${r/1.6}" fill="${col}" stroke="${C.ink}" stroke-width="1.4"/>` + T(f1(q[0]+dx), f1(q[1]+dy), lab, fs, anc, C.ink); });
  s += T(...at(32.595,35.44), 'Jezreel Valley', 11.5, 'middle', C.ink2);
  s += T(...at(32.765,35.12), 'Kishon R.', 10, 'start', C.lapis) + T(...at(32.89,35.59), 'Sea of Galilee', 10.5, 'middle', C.lapis) + T(...at(32.63,35.58), 'Jordan R.', 10, 'start', C.lapis);
  const gs = at(32.6,34.86); s += `<g transform="rotate(-90 ${gs[0]} ${gs[1]})">${T(gs[0], gs[1], 'Great Sea', 11, 'middle', C.lapis)}</g>`;
  const n = P(32.56,35.66); s += T(f1(n[0]), f1(n[1]-4), 'N', 12, 'middle') + K(`M${f1(n[0])},${f1(n[1])} l0,14 m-5,-9 l5,-5 l5,5`, 1.3);
  return svg('Hand-drawn map of northern Israel: Megiddo guarding the pass where the Via Maris enters the Jezreel Valley, with Mount Carmel, Nazareth, Mount Tabor, Jezreel, Mount Gilboa, the Kishon River and the Sea of Galilee', s, '0 0 400 260');
};
