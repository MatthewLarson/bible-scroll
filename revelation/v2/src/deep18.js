/* ---------- chapter 18 in depth: what is Babylon? ---------- */
ART.babylonmap = function(){
  const P = (lat,lon) => [20 + (lon-10)*9.4, 16 + (44-lat)*12.2];
  const line = pts => 'M' + pts.map(p => P(...p).map(f1).join(',')).join(' L');
  const coasts = [
    [[44,10],[43.5,10.3],[42.4,11.2],[41.2,13.5],[40.6,14.4],[40,15.6],[39,16.1],[38,15.65],[38.9,16.6],[39,17.1],[40,18.5],[40.6,17.9],[41.9,16],[43.6,13.5],[44,12.4]],
    [[44,15],[42.6,18.1],[41.3,19.4],[39.6,20],[38.3,21.3],[37,21.7],[36.4,22.5],[37.5,23],[38,24],[39,22.9],[40.5,22.8],[40.9,24.5],[40.8,26],[41,28.9],[41.2,29.1],[41.1,31.4],[41.9,33.5],[41.7,36],[41,38.5],[41,40.5],[41.6,41.6]],
    [[40.4,26.7],[39.5,26.3],[38.4,26.3],[37.9,27.3],[37,27.4],[36.7,28.2],[36.3,30],[36.9,30.7],[36.2,32.5],[36.6,34.5],[36.9,36],[36.5,35.9],[35.5,35.8],[34.4,35.8],[33.3,35.2],[32.8,35],[31.8,34.6],[31.3,34.2],[31.2,32.3],[31.5,30.4],[31.2,29.9],[30.9,28.9],[31.6,25.1],[32.8,22.4],[32,20],[30.3,19.6],[31.5,15.5],[32.9,13.2],[33.7,11],[35,11],[36.8,10.2]],
    [[30.3,48.4],[29.4,48.2],[28.4,48.6],[28,49.4]], [[30.2,49.2],[29.6,50]]
  ];
  let s = `<clipPath id="bmapclip">${blob(200,112,140,61,'#000',1,1.42,.8)}</clipPath>` + blob(200,112,140,61,C.ochre,.1,1.42,.8);
  s += `<g clip-path="url(#bmapclip)">` + blob(...P(34.6,21), 40, 73, C.lapis, .14, 2.4, .7) + blob(...P(33.6,31), 22, 74, C.lapis, .12, 1.8, .6);
  coasts.forEach(c => s += K(line(c), 1.8, C.ink2));
  s += blob(...P(35.2,24.9), 7, 71, C.lo, .9, 2.2, .5) + blob(...P(35.1,33.3), 6, 72, C.lo, .9, 1.8, .7);
  s += K(line([[39.3,39.6],[37.6,38.5],[36.6,38.1],[35.9,38.6],[35.3,40.3],[34.4,41],[33.4,43],[32.54,44.42],[31.3,45.9],[30.95,47.2],[30.3,48.4]]), 2.4, C.lapis);
  s += K(line([[38.2,40.3],[37.3,42],[36.3,43.1],[35,43.5],[33.3,44.4],[32.1,46],[31,47.4]]), 1.8, C.lapis) + `</g>`;
  const jer = P(31.78,35.23), bab = P(32.54,44.42), rome = P(41.9,12.5), pat = P(37.31,26.55), eph = P(37.94,27.34), nin = P(36.36,43.15);
  s += `<path d="M${jer[0]},${jer[1]} Q${f1(jer[0]+30)},${f1(jer[1]-80)} ${f1(P(36.8,38)[0])},${f1(P(36.8,38)[1])} T${bab[0]},${bab[1]}" fill="none" stroke="${C.red}" stroke-width="1.8" stroke-dasharray="5 5" stroke-linecap="round"/>`;
  s += T(...P(35.4,37.6).map(f1), 'exile road, 586 BC', 9.5, 'end', C.red);
  s += `<path d="M${rome[0]+6},${rome[1]+4} Q150,170 ${jer[0]-6},${jer[1]+2}" fill="none" stroke="${C.ink2}" stroke-width="1.2" stroke-dasharray="2 4"/>`;
  s += T(...P(33.0,24).map(f1), 'Rome burns the temple, AD 70', 9.5, 'middle', C.ink2);
  [[bab,'Babylon',C.red,9,'end',-8,15],[jer,'Jerusalem',C.ink,7,'end',-9,4],[rome,'Rome: seven hills',C.ink,7,'start',9,4],[pat,'Patmos',C.ochre,5,'end',-8,10],[eph,'Ephesus',C.ink2,4.5,'start',7,-3],[nin,'Nineveh',C.ink2,4,'start',7,-2]].forEach(([p,lab,col,r,anc,dx,dy]) => {
    s += `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${r/1.6}" fill="${col}" stroke="${C.ink}" stroke-width="1.4"/>` + T(f1(p[0]+dx), f1(p[1]+dy), lab, 11.5, anc, C.ink);
  });
  s += T(...P(42.6,46.4).map(f1), 'N', 12, 'middle') + K(`M${f1(P(42.3,46.4)[0])},${f1(P(42.3,46.4)[1])} l0,14 m-5,-9 l5,-5 l5,5`, 1.3);
  s += T(...P(35.3,17).map(f1), 'Mediterranean Sea', 11, 'middle', C.lapis) + T(...P(34.0,40.4).map(f1), 'Euphrates', 9.5, 'end', C.lapis) + T(...P(34.4,44.9).map(f1), 'Tigris', 9.5, 'start', C.lapis) + T(...P(29.6,40).map(f1), 'Arabian Desert', 10, 'middle', C.ink2);
  return svg('Hand-drawn map of the ancient Near East and Mediterranean: Babylon on the Euphrates in modern Iraq, the exile road from Jerusalem, Rome to the far west, Patmos and Ephesus', s, '0 0 400 230');
};
{
const c18 = CHAPTERS[17];
c18.sum.push(`Who is Babylon? The answer shapes how you read chapters 14 and 16–19. Below the four views are her names in the Greek, the real Babylon and where it was, the main identifications through history (including when Jerusalem and the church have been called "Babylon"), and what her symbols mean.`);
c18.deep = [
 {h:'Babylon’s names in Revelation', html:`
  <p>Revelation uses "Babylon" by name six times (14:8; 16:19; 17:5; 18:2; 18:10; 18:21). It also gives her a cluster of other names and titles, each with its own source:</p>
  <ul class="decoder">
   <li><b>Babylon the Great</b><span><i>Babylōn hē megalē</i> (14:8; 16:19; 17:5; 18:2). From Nebuchadnezzar's boast in Daniel 4:30, which in the Aramaic runs: "Isn't this great Babylon, which I built myself as a royal home, by my own great strength and for the honor of my splendor?" The name itself carries pride.</span></li>
   <li><b>The great city</b><span><i>hē polis hē megalē</i> (16:19; 17:18; 18:10, 16, 18, 19, 21). Also used in 11:8 for the city "where their Lord too was crucified," which is why some read Babylon as Jerusalem.</span></li>
   <li><b>The mighty city</b><span><i>hē polis hē ischyra</i> (18:10). Strength is her claim; she falls "in one hour."</span></li>
   <li><b>The great prostitute</b><span><i>hē pornē hē megalē</i> (17:1; 19:2). The prophets' word for idolatry as unfaithfulness, and also for trade sold to anyone (Isaiah 23:15–18 of Tyre).</span></li>
   <li><b>Mother of prostitutes</b><span>"and of the disgusting things of the earth" (17:5). She is the source of many smaller copies.</span></li>
   <li><b>A mystery</b><span><i>mystērion</i> (17:5, 7). Her name is a secret to be decoded, a sign it is not meant literally.</span></li>
   <li><b>The woman</b><span><i>hē gynē</i> (17:3–18), set against the woman clothed with the sun (12:1) and the bride (19:7; 21:9).</span></li>
   <li><b>A queen</b><span>"I sit as a queen. I am no widow" (18:7), from Isaiah 47:7–8.</span></li>
   <li><b>She who sits on many waters</b><span>(17:1), from Jeremiah 51:13. Explained in 17:15 as "peoples, crowds, nations, and languages."</span></li>
  </ul>
  <p class="small">Revelation also says the great city is called Sodom and Egypt "symbolically" (<i>pneumatikōs</i>, literally "spiritually," 11:8). The book itself tells you these city names are spiritual labels.</p>`},
 {art:'babylonmap', caption:'Drawn from real coordinates. Babylon lay on the Euphrates about 55 miles south of modern Baghdad, some 550 miles east of Jerusalem in a straight line, and much farther by the road the exiles walked around the desert. Rome is about 1,400 miles west of Jerusalem.'},
 {h:'The real Babylon', html:`
  <p>Babylon stood on the Euphrates in what is now Iraq, near the modern town of Hillah. In Hebrew it is <i>Bavel</i>, the same word as Babel in Genesis 11. Its own people called it <i>Bāb-ili</i>, "gate of the god." Genesis puns on it with <i>bālal</i>, "confuse" (Genesis 11:9).</p>
  <ul>
   <li><b>About 1750 BC</b>: King Hammurabi makes Babylon a great power and issues his famous law code.</li>
   <li><b>605–562 BC</b>: Nebuchadnezzar II rebuilds the city in glory: the blue-glazed Ishtar Gate, the great ziggurat Etemenanki (often linked to the Tower of Babel), and, by tradition, the Hanging Gardens.</li>
   <li><b>586 BC</b>: his army burns Jerusalem and Solomon's temple and takes the people into exile (2 Kings 25). Psalm 137: "By the rivers of Babylon we sat and wept."</li>
   <li><b>539 BC</b>: the city falls to Cyrus of Persia in a single night (Daniel 5), and the exiles may go home (Ezra 1).</li>
   <li><b>After 300 BC</b>: the Seleucid kings build a new capital nearby, and Babylon slowly empties. By John's day it was mostly ruins. The geographer Strabo, quoting a poet, said "the great city is a great desert" (<i>Geography</i> 16.1.5).</li>
   <li><b>Today</b>: Saddam Hussein rebuilt parts of the palace in the 1980s, stamping bricks with his name like Nebuchadnezzar. The ruins became a UNESCO World Heritage Site in 2019.</li>
  </ul>
  <p>So when Revelation was written, Babylon on the Euphrates was not a world power. John's readers would have heard the name the way we might hear "Waterloo" or "Pharaoh": a famous past standing for something present.</p>`},
 {h:'Place, symbol, or ideal?', html:`
  <p>All three, depending on the reader. The main identifications:</p>
  <div class="card"><h4>Rome</h4><p>The view of most scholars, ancient and modern. She sits on seven hills (17:9), holds royal power "over the kings of the earth" (17:18), and grows rich by sea trade (18:17–19). After Rome destroyed the second temple in AD 70, Jewish and Christian writers called Rome "Babylon," because it had done what Babylon did (1 Peter 5:13; 4 Ezra 3:1–2, 28; 2 Baruch 11:1; Sibylline Oracles 5.143, 159).</p></div>
  <div class="card"><h4>Jerusalem</h4><p>Held by many preterists (e.g. Kenneth Gentry, David Chilton). "The great city" is "where their Lord too was crucified" (11:8); "in her was found the blood of prophets" (18:24) echoes Jesus's words to Jerusalem (Matthew 23:35–37); and the prophets often called Jerusalem a prostitute (see below).</p></div>
  <div class="card"><h4>A rebuilt city on the Euphrates</h4><p>Some futurists expect a literal Babylon to rise again in Iraq, since Isaiah 13:19–20 and Jeremiah 50–51 say it will be destroyed and never inhabited again. Charles Dyer's <i>The Rise of Babylon</i> (1991) made this popular during Saddam's rebuilding.</p></div>
  <div class="card"><h4>Papal Rome</h4><p>The standard Protestant reading from the Reformation to the 1800s (see "Has the church been called Babylon?" below).</p></div>
  <div class="card"><h4>Other modern guesses</h4><p>Writers have named New York, the United States, Mecca, the European Union and the United Nations. None has a clear basis in the text, and each was shaped by its own era's headlines.</p></div>
  <div class="card"><h4>A system, in every age</h4><p>The idealist reading: Babylon is human society organized against God, around power, luxury and false worship. Augustine called it "the earthly city," which "loves itself even to the contempt of God" (<i>City of God</i> 14.28). Every age has a Babylon, and the church always lives in it.</p></div>
  <p class="small">These can overlap. Many readers think John meant Rome for his first readers, and that Rome stands for every power that acts like it.</p>`},
 {h:'Was Israel ever called Babylon?', html:`
  <p><b>Not in so many words.</b> No book of the Bible calls Jerusalem or Israel "Babylon." But the prophets came close, and in ways that matter for Revelation 17–18:</p>
  <ul>
   <li>Jerusalem is called <b>Sodom</b> (Isaiah 1:10; Ezekiel 16:46–49), and Revelation 11:8 calls "the great city" "Sodom and Egypt."</li>
   <li>Jerusalem is called a <b>prostitute</b>: "How has she turned into a prostitute, the town that was faithful!" (Isaiah 1:21; also Jeremiah 3:1–3; Hosea 2; Ezekiel 16 and 23).</li>
   <li>Ezekiel 16 dresses unfaithful Jerusalem in fine linen, embroidered cloth, gold and jewels (16:10–13), and then her own lovers strip her and burn her houses (16:37–41). Revelation 17:16 has the beast and the ten horns do the same to the prostitute.</li>
  </ul>
  <p>Preterists who read Babylon as Jerusalem lean on these parallels. Others answer that Revelation borrows its words for Babylon mostly from the prophets' songs over Babylon and Tyre (Jeremiah 50–51; Isaiah 47; Ezekiel 26–27), not from the oracles against Jerusalem, and that Jerusalem in AD 70 did not hold royal power "over the kings of the earth" (17:18).</p>
  <p class="small">In later Jewish writing, Rome was the one called "Babylon" and "Edom," never Jerusalem. A caution: reading Babylon as Jerusalem has been misused to justify hostility toward Jewish people. The careful preterists who hold it apply it to first-century temple leaders, not to Jews.</p>`},
 {h:'Has the church been called Babylon?', html:`
  <p><b>In the New Testament, the church is "in" Babylon, not Babylon itself.</b> 1 Peter 5:13: "Greetings to you from her who is in Babylon, chosen along with you." "Her" is the church in Rome, greeting other churches from the capital.</p>
  <p><b>Later, yes, often, and usually by one group of Christians about another:</b></p>
  <ul>
   <li><b>Medieval reformers.</b> Followers of Joachim of Fiore and the Spiritual Franciscans (Peter John Olivi, about 1297) called the corrupt, worldly church "the carnal church" and "Babylon." Dante shows the harlot of Revelation 17 seated on the church's chariot (<i>Purgatory</i> 32).</li>
   <li><b>The Avignon papacy (1309–1377).</b> When the popes lived in France, Petrarch called papal Avignon "Babylon," and the period is still known as the "Babylonian captivity" of the papacy.</li>
   <li><b>The Reformation.</b> Martin Luther's <i>On the Babylonian Captivity of the Church</i> (1520) said the papacy held the sacraments captive. The Geneva Bible's notes (1560) and many Puritans identified the papacy with the beast and Babylon, and the Westminster Confession (1646) called the pope "that Antichrist." Catholic writers such as Robert Bellarmine answered that Babylon was pagan Rome.</li>
   <li><b>Revival movements.</b> In 1843 the Millerite preacher Charles Fitch preached "Come Out of Her, My People," applying 18:4 to the Protestant churches that rejected the Advent message. Seventh-day Adventists still read fallen Babylon (14:8) as apostate Christianity. Jehovah's Witnesses teach that "Babylon the Great" is the world empire of false religion, Christendom included.</li>
  </ul>
  <p class="small">A pattern worth noticing: almost every group that has called another church "Babylon" has later had the label thrown back at it. Revelation itself points the warning first at its own churches: "Come out of her, <i>my people</i>" (18:4).</p>`},
 {h:'What her symbols mean', html:`
  <ul class="decoder">
   <li><b>Prostitute</b><span>Selling yourself for gain: idolatry as unfaithfulness to God, and commerce that will trade with anyone for profit (Isaiah 23:17 of Tyre).</span></li>
   <li><b>Wine and the gold cup</b><span>"A cup of gold, that was Babylon, in the hand of the LORD, getting the whole earth drunk" (Jeremiah 51:7). Her influence intoxicates: luxury dulls conscience.</span></li>
   <li><b>Purple and scarlet</b><span>The colors of wealth and rule. Tyrian purple dye was among the costliest goods in the ancient world; Roman law reserved certain purple garments for the emperor and senators.</span></li>
   <li><b>Jewels and pearls</b><span>The same stones that build the new Jerusalem (21:18–21). Babylon wears them; the bride is built from them.</span></li>
   <li><b>Many waters</b><span>Babylon's rivers and canals become "peoples, crowds, nations, and languages" (17:15): a power that sits on top of the nations.</span></li>
   <li><b>Seven hills, seven kings</b><span>Rome's geography, and its line of rulers (17:9–10).</span></li>
   <li><b>Queen, not widow</b><span>Self-sufficiency and the belief that loss can never come (18:7; Isaiah 47:8). Laodicea said the same: "I am rich... I need nothing" (3:17).</span></li>
   <li><b>The cargo list</b><span>Twenty-eight kinds of goods by Bauckham's count (18:12–13), most of them luxury imports to Rome: silk from China, ivory from Africa, citron wood for tables that cost a fortune, cinnamon from Asia. It ends with "bodies, and human souls," the trade word for slaves and John's reminder of what they are.</span></li>
   <li><b>Magic</b><span><i>Pharmakeia</i> (18:23), a word for sorcery, spells and drugs: her deception works like a spell on the nations.</span></li>
   <li><b>Smoke rising</b><span>Like Sodom's smoke (Genesis 19:28). Her judgment is final.</span></li>
   <li><b>The millstone</b><span>Thrown like Jeremiah's scroll-stone into the Euphrates (Jeremiah 51:63–64). Ordinary life ends: no music, no crafts, no lamplight, no weddings (18:22–23).</span></li>
  </ul>`},
 {spec:true, title:'Jeremiah told the exiles both to settle in Babylon and to flee it', body:`The same prophet gave Babylon's exiles two instructions. First: "Build houses and settle in them... Seek the peace of the city I sent you to as exiles, and pray for it to the LORD. When it has peace, you will have peace" (Jeremiah 29:5–7). Later: "Come out of her, my people! Let each one save his life" (Jeremiah 51:45). Revelation quotes only the second (18:4). My reading: John's churches were meant to hold both, the way Daniel did. Daniel served Babylon's kings for decades and sought the city's good, yet would not eat the king's food or stop praying (Daniel 1:8; 6:10). Living in Babylon is not the sin. Taking part in "her sins" (18:4) is. This makes "Come out of her" a call to a different kind of life inside the city, ready to walk away when loyalty demands it, rather than a call to move somewhere else. Many commentators read 18:4 spiritually; setting it beside Jeremiah 29 and Daniel's example is my own emphasis.`, refs:'Jeremiah 29:5–7; Jeremiah 51:45; Daniel 1:8; Daniel 6:10; 18:4; 1 Peter 2:11–12'}
];
}

/* more notes in chapter 18 */
N('18:2','fallen is Babylon the Great','word',{t:'"Babylon the Great"', greek:'Βαβυλὼν ἡ μεγάλη (Babylōn hē megalē)', p:'From Nebuchadnezzar’s boast in Daniel 4:30. Revelation gives her nine names in all.', b:`In Daniel 4:30 the king looks over his capital and boasts that he built this great Babylon by his own strength, for the honor of his splendor. While the words were still in his mouth, he lost his kingdom and his mind. Revelation names Babylon six times and also calls her "the great city," "the mighty city," "the great prostitute," "the mother of prostitutes," "a mystery," "the woman" and "a queen." The chapter 18 page lists each with its source.`, r:'Daniel 4:30; Isaiah 21:9; 14:8; 16:19; 17:5; 18:10; 18:21', top:'babylon'});
N('18:10','Babylon, the mighty city','history',{t:'A ruin by John’s day', p:'The real Babylon was mostly empty in the first century. The name meant a power, not a place.', b:`Babylon on the Euphrates declined after the Seleucid kings built a new capital nearby around 300 BC. By the first century AD it was mostly deserted; Strabo quotes a poet: "The great city is a great desert" (<i>Geography</i> 16.1.5). So John's readers heard "Babylon" the way we might hear "Pharaoh": a famous past standing for something present. See the map on the chapter 18 page.`, l:[['Babylon','Babylon'],['Ishtar Gate','Ishtar Gate']], top:'babylon'});
N('18:12','fine linen, purple, silk, and scarlet','history',{t:'Rome’s luxury imports', p:'Silk came from China, purple dye was among the costliest goods in the empire.', b:`Silk reached Rome over the long trade routes from China, and the Roman writer Pliny complained that India, China and Arabia drained a hundred million sesterces a year from the empire for luxuries (<i>Natural History</i> 12.84). Tyrian purple was so costly that certain purple garments were reserved by law for the emperor and senators. "Fragrant wood" is citron wood, used for tables that cost as much as an estate.`, top:'babylon', s:['bauckham-theology']});
N('18:16','dressed in fine linen, purple, and scarlet','israel',{t:'Is Babylon Jerusalem? The Ezekiel 16 argument', p:'Ezekiel dressed unfaithful Jerusalem in linen and gold, then had her lovers strip and burn her.', b:`Ezekiel 16 pictures Jerusalem dressed by God in fine linen, embroidered cloth, gold and jewels (16:10–13). She turns to other lovers, who then strip off her clothes and burn her houses with fire (Ezekiel 16:37–41). Revelation 17:16 has the beast do the same to the prostitute. Many preterists read this as evidence that Babylon is first-century Jerusalem. Others note that most of chapter 18's wording comes from the songs over Babylon and Tyre instead. The Bible never calls Jerusalem "Babylon" outright.`, r:'Ezekiel 16:10–13; Ezekiel 16:37–41; 17:16; Isaiah 1:21; 11:8', top:'church-israel', s:['gregg-four-views']});
N('18:24','In her was found the blood of prophets','views',{t:'Whose blood?', p:'Jesus said the blood of the prophets would fall on Jerusalem. By early tradition, Rome killed Peter and Paul.', b:`Jesus to Jerusalem: "all the righteous blood poured out on the earth will come on you" (Matthew 23:35–37). Preterists hear this verse as Jerusalem's judgment. But Rome killed Christians under Nero (Tacitus, <i>Annals</i> 15.44), and the verse widens to "all who have been slaughtered on the earth," which sounds like every violent empire. Idealists see the whole history of oppression gathered into one city.`, r:'Matthew 23:35–37; Luke 13:33–34; 17:6; 6:10', top:'babylon'});
