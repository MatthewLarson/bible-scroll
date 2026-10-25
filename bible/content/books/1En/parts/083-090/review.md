# Hostile review: 1 Enoch 83–90 (Dream Visions, Animal Apocalypse)

Reviewed: plain.txt, notes.json (135), variants.json (10), glosses.json (57), chapters.json (83–90), topics.json,
sources.json, the new topic files content/topics/animal-apocalypse.json and content/topics/maccabean-revolt.json,
and the two new entries in content/terms.json (ʾƎgziʾä ʾäbagʿ "the Lord of the sheep"; nolawyan / nolot "shepherds").
I checked every verse of the Plain against Dillmann's Ge'ez (`gez` + `tr`), the EOTC text, `texts/auto`, the
Vatican Greek of 89:42–49 and Charles (texts/en). `node tools/build.js --check 1En/083-090` now reports
**0 errors, 0 warnings** (the book.json cited_in errors did not show up on this run).

## Verdict

This is a careful, mostly faithful part. The Plain follows the Ge'ez closely, keeps the vision's repetitions, and
follows the EOTC verse breaks where the old machine cut of `gez` was wrong (89:22/23 "wäkbər", 90:1/2, 90:5/6).
It avoids Charles's mistakes where the Ge'ez is against him (87:4 "They said", 89:20 "began to strike", 90:3 "I
cried out", 90:7 "did not cry"). The animal-by-animal decoding is accurate and fair. But the handling of the
witnesses is weaker than the translation. At 87:2 the Plain says "Four" where both Ge'ez texts say "one", and
nothing tells the reader. The 90:38 "word / wild ox" entry credits Charles with a conjecture he did not print:
the site's own Charles text reads "lamb." There is no evidence at all from the Ethiopic manuscript families or
the Aramaic fragments. The canon notes never once say "conflicts," even where 1 Enoch plainly contradicts Haggai
and Ezra. Nearly every statement of the Ethiopian Orthodox view is unsourced, and one (the traditions card on
Genesis 6) may be wrong. None of this is fabricated, and all of it can be fixed. **0 critical, 6 major, 19 minor.**

## Findings

### 1. Major: plain.txt 87:2 "Four came out", against both Ge'ez texts, with no variant or note
- Dillmann: `wä[1]wäṣʾä ʾəmwəʾtu mäkan wä[3]məslehu` ("and **one** came out from that place, and three with him").
  EOTC: `ወአሐዱ፡ ወፅአ … ወሠለስቱ፡ ምስሌሆሙ` ("and **one** came out … and three with them"). Charles has "four."
- The Plain takes Charles's "four" (which the story needs for "one of those four" in 88:1, 88:3 and 89:1, and for
  "seven" in 90:21) and says nothing about it. Note 36 (87:2) and the chapter 85 table ("87:2 Four white men")
  present it as the text. This is the one place in the part where the Plain silently leaves its own source.
- Fix: add a variant at 87:2 (Dillmann and EOTC "one … and three"; "four" from Charles, giving his grounds, or the
  manuscripts if Knibb or Charles report any, marked "from memory" if it is). Explain why the Plain follows
  "four" (88:1 and 89:1 say "one of those four"). Mention it in note 36.

### 2. Major: variants.json 90:38 and note 131 credit the wrong conjecture to Charles, and leave out "lamb"
- The variant's second reading says: "Conjecture of R. H. Charles (1912): Greek *rhēm* (from Hebrew *re'em*) misread
  as *rhēma*." Note 131 says the same ("Charles and most scholars since…"). Charles's English in texts/en/1En.json
  reads "the first among them became **a lamb**, and that lamb became a great animal." So Charles printed "lamb."
  From memory: he explained "word" as Hebrew *millâ* ("word") misread from *ṭāleh* ("lamb"). The *re'em* / ρημ
  proposal is usually credited to Goldschmidt (1892) and taken up by later scholars. Check both points before you
  cite them.
- The site's readers will see "Charles: wild ox" on the variant card and "lamb" in Charles's own translation.
  "Lamb" is also the rendering most older English readers know, and it is the one with the strongest Christian
  pull (Revelation 5:6). It must be one of the readings.
- Fix: make three readings ("word" from all Ethiopic copies, followed; "lamb" from Charles 1912/1917 with his
  explanation; "wild ox" from the *re'em* conjecture, with its real author and who follows it now). Fix note 131
  and the chapter 90 table row ("Probably a wild ox (Charles's correction)").

### 3. Major: canon notes never say "conflicts", even where the text contradicts the 66 books
- The brief requires each canon note to say plainly whether the passage agrees, goes beyond, or conflicts. The
  tally across notes.json is 4 "agrees", 7 "goes beyond", 1 "tension", 1 "differ", and **0 "conflicts"**.
- Note 97 (89:73): its own preview says "Haggai and Ezra say otherwise." 1 Enoch says the rebuilt Temple's bread
  was "defiled and not pure" from the first day. Haggai 2:9 and Ezra 6:15–16 present that Temple as God's will.
  That is a conflict, but the note labels it "goes beyond Malachi."
- Note 86 (89:58, God "glad" at Israel's ruin, against Ezekiel 33:11) is softened to "tension." Note 114 (90:19,
  the sword, against Daniel 11:34) is "differ." Note 46 (89:6, the giants drown, against Numbers 13:33) is a canon
  note with no label at all.
- Fix: call 89:73 a conflict with Haggai, Zechariah and Ezra (and give the Ethiopian Orthodox answer, if there is
  one). Decide 89:58 and 90:19 honestly, and give note 46 a label. Being fair to 1 Enoch does not mean never
  saying that it contradicts the 66 books.

### 4. Major: Ethiopian Orthodox views are unsourced throughout, and the Genesis 6 traditions card may be wrong
- Every E lens (chapters 83–90) and notes 7, 10, 62, 129 and 131 state what "Ethiopian Orthodox teachers/readers"
  hold, with no source. Some examples: the house and tower "point forward to the church" (chapter 89 E); the white
  bull "is Christ" (chapter 90 E); "the path he had shown them" is the Law (note 62). The brief requires the
  Ethiopian Orthodox view "in its strongest form… and sourced." `assefa-animal-2007` (Daniel Assefa, a scholar of
  this exact text from an Ethiopian church background) is defined in sources.json and cited nowhere.
- The chapter 86 traditions card says the Ethiopian Orthodox Church "teaches that angels sinned with human women,"
  following 1 Enoch. From memory, which needs checking: the Ethiopian *andəmta* commentary tradition, as reported
  by Bruk Ayele Asale (*1 Enoch as Christian Scripture*, 2020), reads the Watchers as the children of Seth who came
  down from the holy mountain. That is the story told in the Ethiopic Book of Adam and Eve. If so, the card states
  the opposite of the church's traditional reading.
- Fix: source each E-lens claim (Andəmta commentary, Asale, Assefa, EOTC official publications). Where no source
  can be found, soften the claim ("Ethiopian Orthodox readers commonly…"), or cut it. Re-check the chapter 86 card
  against the andəmta tradition. If both readings exist in the church, say so.

### 5. Major: missing variant entries where the witnesses differ in meaning
`texts/auto`, Dillmann, the EOTC text and Charles differ in these places. The Plain or the notes take a side
without an entry:
- **85:3**: Ge'ez (both texts) `wämsəleha wäṣʾä kalʾ ṭaʿwa`, "with her came out **another** calf." The Plain says
  "with her came two more calves," Charles's "two bulls." Readers need to know the Ge'ez has one more calf.
- **86:3**: Dillmann `wäʾälhəmt konu məslehomu` ("[among those calves] and cattle they were with them"), followed
  by the Plain. EOTC `ወአልሕምተ፡ ኮኑ` (accusative) gives "they **became bulls** among those calves," which is
  Charles's reading. Whether the stars take the form of bulls matters for how the vision pictures the Watchers.
  The chapter 86 summary even uses the reading the Plain rejects (finding 6).
- **89:1**: "taught him a secret, **while he trembled**" against Charles "without his being terrified." Note 42
  mentions it, but this is a manuscript difference that belongs in variants.json, with its witnesses.
- **89:39**: Ge'ez `ʾäbagʿ kʷilomu`, "all" the sheep, against Charles's "the two sheep." Note 69 mentions it. Give
  it an entry, saying which manuscripts have "two" (Charles's apparatus), or say the source is unknown.
- **90:20**: "**The other one** took all the sealed books." No subject stands in the Ge'ez (`wänäśʾä`). Charles
  supplies "the other." Either keep the Ge'ez ambiguity or add a note that the subject is supplied.
- Fix: add the five entries, or notes where only a translation choice is involved.

### 6. Major: no evidence from the Ethiopic manuscript families or the Aramaic fragments
- The writer brief asks for Ethiopic I against Ethiopic II ("as the scholarly editions report them") and for the
  Qumran Aramaic. Every reading in variants.json is Dillmann, EOTC, the Vatican Greek or a modern conjecture. No
  entry names a manuscript family, the Rylands manuscript, or an EMML manuscript.
- The notes do say which Aramaic copies cover which verses, and what I can check matches Milik: 4Q206 for 88:3–89:6
  (note 43), 4Q204 for 89:31–37 (note 66), 4Q205 for 89:43–44 (note 74), and 4Q207 for 86:1–3 (dated 150–125 BC).
  But no reading from them appears anywhere. "Those pieces do not settle the question" (note 43) tells the reader
  nothing.
- Fix: where Knibb's apparatus or Milik/Stuckenbruck report a difference that changes the meaning (for example
  89:1, 89:36 "became a man," 89:39, 90:1, 90:38), add it, marked "from memory" or by whose report. Where the
  writer cannot check, say in the textual-history note that the Ethiopic family evidence has not been weighed
  here. Silence suggests the evidence agrees when nobody has checked.

### 7. Minor: chapters.json 86 summary contradicts the Plain
"They become like bulls among the cattle" uses the EOTC/Charles reading. Plain 86:3 follows Dillmann: "They were
among those calves and cattle." Fix: make the summary match the Plain, or switch the Plain and add the variant
(finding 5).

### 8. Minor: plain.txt 86:2 "large black cattle" drops the Ge'ez "and"
`ʾälhəmtä ʿäbiyanä wäṣälimanä`, "the large **and** the black cattle" (Charles has the same). Some interpreters
read two groups here. Fix: "large and black cattle."

### 9. Minor: small additions to the Ge'ez
- 83:1 "I will tell them to you **one by one**": the Ge'ez has only `bäqdəmekä ʾənägr`, "I will tell them before
  you."
- 89:29 "sent it **back** to them": `fänäwo ḫäbehomu`, "sent it to them."
- 89:63 "when I hand **the sheep** over": Dillmann `kämä ʾəmäṭwomu`, "that I may hand **them** over." EOTC
  `wäʾmäṭwomu`. "Them" may be the shepherds, handed over for judgment. Keep "them," and add a `deb` note if needed.
- 89:1 "That bull was born **a bull**": the Ge'ez has "that bull was born and became a man." The repeated "a bull"
  is Charles's sentence shape ("he was born a bull"), which the Ge'ez does not force.

### 10. Minor: plain.txt 84:3 and note 15 analyze the same Ge'ez differently
Note 15 says the masculine and the feminine "one" (`wäʾi[1] wäʾiʾäḥäti`) together mean "not one, not one," going
with "deed." The Plain uses the masculine for the deed ("not even one") and the feminine again for wisdom ("Not
one bit of wisdom"). Pick one analysis and make the note and the Plain agree.

### 11. Minor: variant `orig` fields do not reproduce the texts they name
- 84:5, Dillmann reading: the entry gives `ወይኩን ፡ ሀጕል`. Dillmann's text is `ወይከውን ፡ ሐጒል`. The given form
  mixes EOTC spelling with Dillmann's wording.
- 90:1: the reading credited to "Dillmann … and EOTC" quotes EOTC's spelled-out `ሠላሳ ፡ ወሰብዐቱ`. Dillmann writes
  the numeral `፴ወ፯`.
- 89:42: "Charles" is listed among the witnesses. A translation is not a witness; move it to `why` or `b`.

### 12. Minor: variants.json 89:43, muddled reasoning
"The Greek's 'many' boars fits the history better: Saul never destroyed the Philistines (89:47)." The Greek's
"many" is about the boars, not the dogs (the Philistines). Fix: say the Greek's "many boars … after them … the
dogs" is less sweeping than the Ethiopic "destroyed them all," which fits Saul's death at the dogs' hands in 89:47.

### 13. Minor: note 83 (89:55) "tigers… unknown in the Near East"
This is not true. The Caspian tiger lived in northern Iran, the Caucasus and eastern Anatolia into modern times.
Also, kind `mis` is meant for "the usual English," and Charles's 1917 word is not the usual English. Fix: "Ge'ez
*ʾänamrət* is the leopard (Hebrew *nemer*); Charles's 'tigers' is a looser rendering."

### 14. Minor: note 95 preview (89:72), "The twelve are the years of exile"
They are twelve shepherds' periods (the body says so), not years. Fix the preview.

### 15. Minor: note 93 (89:68), garbled count
"12 (89:72), 23 (90:1 with 90:5), 23 (90:5) and 12 (90:17)." This reads as if 90:5 counted twice, and it does not
say that 90:1's number is cumulative. Fix: "12 (89:72); 23 more, for 35 in all by 90:1 (the Ethiopic says 37, see
the variant); 23 more, for 58 by 90:5; 12 more by 90:17." The same arithmetic also appears in note 102, the 90:1
variant and the chapter 89 table. Keep it in one place and refer to it.

### 16. Minor: note 105 (90:9), "The oldest Aramaic copy of this book, 4Q207"
Of 1 Enoch as a whole, 4Q208 (Astronomical Book) and 4Q201 are older. Fix: "the oldest Aramaic copy of the
Animal Apocalypse." The chapter 90 "Dating the vision" section says "oldest Aramaic copy (4Q207)" too, and needs
the same fix.

### 17. Minor: note 114 (90:19), status slip
"The two books differ on fighting, and the Bible holds both kinds of hope." This compares 1 Enoch with Daniel, so
in the site's own voice it counts 1 Enoch as part of "the Bible." Fix: "Daniel and 1 Enoch differ on fighting;
the 66 books themselves contain both holy war and patient waiting."

### 18. Minor: notes repeat each other
- Barnabas 16:5 comes three times: note 79 (89:50), note 84 (89:56) and the chapter 89 fact box. Note 79 ties it to
  89:50, but the match is 89:56 and 66, as the box says. Keep note 84, and cut or repoint note 79.
- Jubilees 4:19 is explained in note 1 and again in the chapter 83 fact box.
- Enoch and Elijah as the two witnesses: note 81, note 124 and the two-witnesses topic section.
- STYLE: "Never explain the same point twice."

### 19. Minor: chapter 90 "myth" box used for Daniel
"Daniel's beasts and Enoch's flock" compares two Jewish works. The `myth` type is for parallels in other ancient
cultures. Use a plain `deep` section or an `echo`-style box.

### 20. Minor: settings gaps and boilerplate `readers`
- No setting for the Lord's commission of the sheep (Moses) and the warning to the wolves (89:17–18). No setting
  for the first dream as a vision (83:3–11); 83:1–2 covers only the opening.
- Seven settings repeat the same `readers` sentence word for word ("Most scholars: a Jewish scribal group…").
  The brief asks what the passage *meant* to those readers. Only 83:7–9 and 89:59–64 do that. For 89:31, 89:57
  and 90:22, say what the passage did for readers under Antiochus (for example, 89:57: their own cry to God was
  being heard).

### 21. Minor: works named outside works.json
Note 26 names the "Life of Adam and Eve," which is not in content/works.json. Add it there (book owner) or
rephrase. Note 68's "Assumption of Moses" is an `aka` of "Testament of Moses," which is acceptable, but the
works.json name is better.

### 22. Minor: new topic file animal-apocalypse.json
- `aka` includes "Dream Visions" and "Book of Dream Visions," which is chapters 83–90. This page is about 85–90
  (its own lead says so). A search for "Dream Visions" will land readers on a page that leaves out chapters
  83–84. Drop those two aka's or widen the page.
- `aka` "seventy shepherds" overlaps the existing seventy-years topic, which this part also feeds.
- The lead states "written about 164–160 BC" as fact. Say "most scholars date it to…". The page also never says
  that the Ethiopian Orthodox churches read it as Scripture (STYLE fairness; brief check 3).

### 23. Minor: new topic file maccabean-revolt.json
- The only section's `refs` are "Daniel 11:31–35; John 10:22," but its body cites 1 Maccabees 1:41–64,
  1 Maccabees 4:36–59 and 1 Enoch 90:9–19. The topic page filters by refs, so add them.
- `aka` "Hanukkah" overlaps feasts.json, which already covers Hanukkah. "Hasmoneans" names the later dynasty
  (142–63 BC), not the revolt. Consider moving Hanukkah to `related: ["feasts"]`.
- `sources` lists only goldstein-1macc. Add goldstein-2macc, which the part's contributions use.

### 24. Minor: glosses
- 83:8 "a man of faith" → "someone God can trust." *Mähäymən* is "a believer," one who trusts God. The gloss
  reverses who trusts whom. Try "a true believer."
- 89:59 "seventy shepherds" → "seventy angel overseers." The gloss settles a question that note 87 and the
  89:59–64 setting present as debated (angels or Gentile kings). Try "seventy appointed overseers."

### 25. Minor: mechanics and terms
- Note 67 (89:37) is type `word` but has no `orig` or `kind`. Note 119 (90:26) is type `history` but carries
  `kind: "nu"`, which belongs only on `word` notes.
- Note 48 and the chapter 85 "Why animals?" section rest on Leviticus 11's clean and unclean animals, but neither
  is tagged with the existing `food-laws` topic.
- terms.json: the two new entries are accurate, and the Plain follows them throughout. Every "Lord of the sheep"
  renders `ʾƎgziʾä ʾäbagʿ` or `ʾƎgziʾomu läʾäbagʿ`, and "shepherd" is never used for God or the kings. One thing
  for the book owner: the existing `täklä ṣədq` "the plant of righteousness" entry cites 84:6, where the Ge'ez is
  `täklä zärʾ` ("plant of seed"), and the Plain rightly does not say "plant of righteousness."

## Checked and found sound
- The new `gez` cut agrees with the EOTC breaks the writer followed. Where the machine cut still runs a word over
  (89:23 `wäkbər`, 90:2 `nolawyan bäbägizehu`, 90:6 `bäbägizehomu [50]wä[8]gizeyatä`), the Plain puts the words
  in the right verse.
- Vatican Greek (89:42–49): its description (Byzantine shorthand, Mai 1844, Gildemeister ZDMG 1855, a quotation
  with "next to these it is written…") and the four variant entries match the Greek in texts/orig.
- History: Onias III (2 Maccabees 4:30–38), Beth-zur and the rider in white (2 Maccabees 11:6–10), Judas's death in
  160 BC, the four periods 12/23/23/12, Gehenna south of the city, Barnabas 16:5, Genesis Rabbah 26:5, Targum
  Pseudo-Jonathan Deuteronomy 32:8, Jubilees 4:17–20, Damascus Document 1:9–11, Tertullian and Hippolytus on Enoch
  and Elijah. All of these are accurately reported.
- No em-dashes; the poetry in 84:2–6 is marked with " / "; reading level is close to 8th grade.
- No sentence shapes copied from a modern copyrighted translation turned up. The Plain is close to Charles only
  where the Ge'ez word order forces it (except 89:1, finding 9).

## Fixes applied

Fixed 23 findings and partly fixed 2 (6 and 18). None declined outright; one item under 25 belongs to the book owner. Build: `node tools/build.js --check 1En/083-090` shows 0 errors, 0 warnings (159 verses, 137 notes, 15 variants, 57 glosses, 8 chapter pages, 12 topic contributions).

1. **87:2 "Four":** fixed. I confirmed that Dillmann (፩) and the EOTC (አሐዱ) both read "one." Added a variant: "four" is followed because 88:1, 88:3 and 89:1 say "one of those four" (Dillmann's own numeral in 89:1 is ፬), 90:21 has seven, and ፩ and ፬ are easily confused. I have not checked whether any Ethiopic manuscript reads "four," and the variant says so. The note at 87:2 and the chapter 85 table now point to the variant.
2. **90:38:** fixed. The texts/en Charles reads "lamb," so the earlier credit to Charles was wrong. The variant now has three readings: "word" (all Ethiopic, followed); "lamb" (Charles, with the millah/taleh explanation the reviewer recalls and I also recall); and "wild ox" (re'em read as rhēm, then rhēma), described only as a later conjecture preferred by several modern commentators. I could not verify that Goldschmidt (1892) first proposed it, so no author is named. The note at 90:38 and the chapter 90 table row were corrected to match.
3. **Canon labels:** fixed.
   - 89:73 now says it **conflicts** with Haggai, Zechariah and Ezra (Haggai 1:8; Haggai 2:9; Ezra 6:14–16). It also gives the reading available to those who hold both books as Scripture.
   - 89:58: **agrees** with Deuteronomy 28:63, **conflicts** with Ezekiel 33:11 and Lamentations 3:33.
   - 89:6: **goes beyond** Genesis, and **conflicts** with Numbers 13:33 if that verse is taken literally.
   - 90:19: not a conflict with the 66 books as a whole, which contain both holy war and patient waiting; it **goes beyond** Daniel. The status slip from finding 17 is fixed in the same note.
4. **Ethiopian Orthodox views:** fixed. I added source key `asale-enoch-2020` (Bruk Ayele Asale, *1 Enoch as Christian Scripture*, 2020).
   - The chapter 86 card now says both readings are found in the church: the text of Enoch makes the Watchers angels, while the andəmta commentary, as Asale reports, often makes them Sethites, as in the Ethiopic Conflict of Adam and Eve. This rests on Asale's report as the reviewer recalls it; I could not check the andəmta texts directly. The chapter 86 E lens says the same.
   - Every E lens is softened. Each now states what follows from the churches counting the book as Scripture, cites Cowley or Asale where they support the general point, and says plainly where the church's own commentary on a passage has not been checked (chapter 85).
   - In the notes, the unsourced claims at 83:8, 83:11, 89:29, 89:58, 90:37 and 90:38 now say "readers who receive the book as Scripture," or cite Asale.
   - Assefa is now cited at 90:37, only for what his title shows he studies (the question of military propaganda). I made no claim about his conclusion. He is not used as a voice of the church.
5. **Missing variants:** fixed, with new entries at 85:3, 86:3, 89:1 and 89:39. 90:20 got a `deb` note instead, because only a supplied subject is involved.
   - 85:3: the Ge'ez has "another calf." The Plain keeps "two" because the story needs it, and ካልእ "another" and ክልኤ "two" are easily confused.
   - 86:3: Dillmann against the EOTC's accusative (the stars "became cattle").
   - 89:1 and 89:39: Charles's English against both Ge'ez texts. Each entry says Charles's manuscript basis was not checked.
6. **Ethiopic families and Aramaic readings:** partly fixed. I cannot check Knibb's apparatus or the fragments' readings here, and I will not report readings from memory. Instead, the chapter 85 fact box now says plainly that the variants compare Dillmann, the EOTC, the Vatican Greek and Charles, and that the Ethiopic manuscript families and the Aramaic readings have not been weighed. The 89:1 note and the 86:3 variant say the same for 4Q206 and 4Q207.
7. **Chapter 86 summary:** fixed; it now matches the Plain (the stars are "living among the calves and cattle").
8. **86:2:** fixed; the verse now reads "large and black cattle."
9. **Small additions:** fixed.
   - 83:1: "one by one" removed.
   - 89:29: "back" removed.
   - 89:63: now "so that I may hand them over," with a new `deb` note on who "them" are.
   - 89:1: now "That bull was born, and he became a man." The drift audit log was updated.
10. **84:3:** fixed. The note now says "not one" (masculine) goes with "deed," and the feminine "one" goes with "wisdom," which is how the Plain already reads.
11. **Variant `orig` fields:** fixed. 84:5 now gives Dillmann's own spelling (ወይከውን ፡ ሐጒል); 90:1 gives Dillmann ፴ወ፯ and the EOTC spelled-out number separately; Charles was moved out of the 89:42 witnesses and into `why`.
12. **89:43:** fixed; the `why` now uses the reviewer's reasoning.
13. **89:55:** fixed. The claim that tigers were unknown in the Near East is removed, "tigers" is now called a looser rendering, and the kind is `nu`.
14. **89:72 preview:** fixed; it now says "periods," not years.
15. **Shepherd arithmetic:** fixed. The running count is given once, in the 89:68 note; the 90:5 note now refers to it and to the 90:1 variant.
16. **Oldest copy:** fixed. Both places now call 4Q207 "the oldest Aramaic copy of the Dream Visions."
17. **90:19:** fixed (see finding 3).
18. **Repeats:** partly fixed.
    - Barnabas 16:5: removed from the 89:50 note and from the chapter 89 fact box; the 89:56 note keeps it.
    - Jubilees 4:19: removed from the chapter 83 fact box; the 83:2 note keeps it.
    - Enoch and Elijah: the 89:52 note now refers to 90:31 instead of repeating it. The two-witnesses topic section stays, because topic pages are separate pages and that section is the topic's own summary.
19. **Chapter 90 myth box:** fixed; it is now a plain `deep` section.
20. **Settings:** fixed.
    - Added 83:3–6 (the first dream as a vision) and 89:17–18 (the Lord's charge to Moses and the warning to the wolves).
    - The `readers` text for 89:31, 89:57 and 90:22 now says what the passage meant to readers under the Seleucids.
21. **Works names:** fixed. The "Life of Adam and Eve" is rephrased as later retellings of the story of Adam and Eve, and "Assumption of Moses" is now "a lost ending of the Testament of Moses."
22. **animal-apocalypse.json:** fixed. The aka's "Dream Visions," "Book of Dream Visions" and "seventy shepherds" are dropped. The lead now says "most scholars date it," and it says that the Ethiopian Orthodox churches read the vision as Scripture.
23. **maccabean-revolt.json:** fixed. The section's refs now include 1 Maccabees 1:41–64, 1 Maccabees 4:36–59 and 1 Enoch 90:9–19. "Hanukkah" and "Hasmoneans" are dropped from aka, `feasts` is added to `related`, and goldstein-2macc is added to `sources`.
24. **Glosses:** fixed. 83:8 is now "a true believer," and 89:59 is now "seventy appointed overseers."
25. **Mechanics:** fixed. The 89:37 note now has `orig` and `kind`; `kind` was removed from the 90:26 history note; and the 89:10 note and chapter 85 are now tagged `food-laws`. The terms.json entry for täklä ṣədq, which cites 84:6, belongs to the book owner, and I have left it unchanged.

Also: the regenerated `gez` cut now includes the opening of 89:1 ("one of those four went"), so the earlier report that Dillmann lacked it no longer applies.
