# Hostile review: Revelation 17–22

Scope: Plain (plain.txt 17:1–22:21) checked verse by verse against the SBLGNT and the Byzantine text in
`texts/orig/Rev.json`; notes, glosses and chapter pages 17–22 (including `settings` and `traditions` from
`content/overlays/Rev.json`); variants (none exist yet). Everything in `content/books/Rev/` is generated, so each
finding names the source file too (paths under `revelation/` unless marked `bible/`).

## Verdict

The English is clear and at the right level. Most of the history in the chapter pages holds up, including
Herodotus on Babylon, Strabo, Pliny on pearls and on the luxury trade, the Vespasian Roma coin, Juvenal's "bald
Nero", the Targum "second death" texts, Augustine, the Augsburg Confession article 17 and CCC 676. The millennium
card is fair and well sourced.

The slice is not ready to publish, for six reasons:
- **No variants at all.** The Plain silently picks sides in at least ten places where the readings differ. In
  three of them it leaves its own base text, the SBLGNT: 18:3 "drunk", 21:3 "and be their God", and the "Amen"
  in 22:21.
- **The lead's δοῦλος decision is not applied.** The verses still say "servants", in six places.
- **Copyrighted wording.** The Plain has four close matches with copyrighted translations: NIV at 21:4 and
  19:8, ESV at 18:13 and NRSV at 21:7. 21:7 also loses the singular "son" of the 2 Samuel 7:14 promise. The
  notes quote the Old Testament in NIV wording throughout, which is the cause of most of the quote warnings.
- **Glosses settle cruxes.** Three glosses settle debates that the notes present as open: the millennium as "a
  very long time", the lake of fire as "final destruction", and the rider's blood as "his own sacrifice".
- **Missing notes on major cruxes:** "the testimony of Jesus" (19:10), and who sits on the thrones in 20:4 and
  what "came to life" means.
- **A gap in the traditions cards.** There is no traditions card on the lake of fire, even though the chapter
  pages lay out three conflicting views.

One scholarly attribution (Caird on 19:13) is very probably wrong.

**Counts: 0 critical, 14 major, 22 minor.**

## Checks run

- `node tools/import-rev.js`, then `VERBOSE=1 node tools/build.js --check Rev`: 0 errors, 104 warnings, all
  quote mismatches.
- Warnings in this slice:
  - notes 17:1 (Jeremiah 51:13), 17:11 (Revelation 1:4), 18:4 (Jeremiah 51:45), 18:7 (Isaiah 47:7–9),
    18:21 (Jeremiah 51:63–64), 19:7 (Isaiah 54:5), 21:1 (Isaiah 65:17), 21:4 (Isaiah 25:8),
    21:19 (Isaiah 54:11–12) and 21:25 (Isaiah 60:11).
  - chapters 18 (Revelation 11:8, 17:18; Jeremiah 51:7, 29:5–7, 51:45), 20 (Revelation 20:9),
    21 (Revelation 14:5; Isaiah 60:19–20, 60:11) and 22 (Revelation 1:1, 1:3, 1:4, 22:21).
  - Rev-origin topic cores quoting this slice: martyrs 17:6, dating 17:10, white-throne 20:11, new-creation
    21:1, overcomer 22:5, bride 19:8 and 21:10. These belong to the book-level review, but the wording they
    must match is in this slice.
- A script printed every verse with its SBL and Byzantine text and the Plain, chapter by chapter.
- Prose em-dashes: none. The only two are empty table cells in the ch17 kings table, which is fine.

## Findings

### Major

**1. Major. Variants: none exist for chapters 17–22, and the Plain silently takes sides.**
Overlay `content/overlays/Rev.json` has no `variants` key, so the generated variants.json is empty. The brief
requires entries wherever the meaning changes, a major translation footnotes the difference, or the KJV reads
differently.

The catalogue below is what the fixer should write. I give the witnesses as I know them from the NA28 apparatus
and Metzger's *Textual Commentary*. The fixer must check each siglum against NA28 or Metzger before writing it,
and must not add any that cannot be confirmed. Where I say "check", I am not sure.

**A. Must have (meaning changes, or the KJV differs):**

1. **17:8, "and yet will come".**
   - παρέσται, "will be present / will come": Sinaiticus, Alexandrinus, P, 046 and the Byzantine text; NA28,
     SBLGNT.
   - καίπερ ἔστιν, "and yet is": a few late minuscules, Textus Receptus, KJV "and yet is". Usually explained as
     a misreading of καὶ πάρεσται.
   - Follow παρέσται. It also keeps the parody of God "who is, who was and who is coming" (1:4, 8), which
     "and yet is" destroys.
   - Anchor: "and yet will come". Do not let it overlap the gloss at 17:8.
2. **18:3, "have drunk".**
   - πέπωκαν, "have drunk": a few minuscules and several early versions; NA28 (rated uncertain in UBS). The
     Textus Receptus (πέπωκε) and KJV also say "have drunk".
   - πέπτωκαν / πεπτώκασιν, "have fallen (by the wine...)": Alexandrinus, Ephraemi and the Byzantine text,
     with Sinaiticus close; Westcott-Hort, **SBLGNT** (the site's base text).
   - The Plain follows "drunk". It must say so, and why: the image of 14:8 and 17:2 ("made all nations drink"),
     and the transcriptional ease of dropping one letter (τ). It should also admit that the better-attested
     reading is "fallen", which the SBLGNT prints.
3. **19:13, "dipped in blood".**
   - βεβαμμένον, "dipped": Alexandrinus, 046 and the Byzantine text; NA28, SBLGNT, KJV.
   - "Sprinkled" or "spattered" (ῥεραντισμένον, ἐρραμμένον, περιρεραμμένον and other spellings): Sinaiticus,
     some minuscules, and early writers (Origen; Irenaeus in Latin, *aspersam*). Check which hand of Sinaiticus
     has which form.
   - Follow "dipped", as the harder reading. "Sprinkled" looks like an assimilation to Isaiah 63:3 or to the
     sprinkling language of Leviticus. This affects the "whose blood?" debate in the 19:13 note.
4. **20:5, "(The rest of the dead did not come to life until the thousand years were over.)".**
   - The sentence is missing from Sinaiticus, some Byzantine minuscules and the Syriac. Check the exact minuscule
     list (2030 and 2377 are often cited).
   - Present in Alexandrinus, 046, most witnesses, NA28, SBLGNT and KJV.
   - Follow inclusion. Say why the omission matters: without 20:5a there is no explicit second group raised
     after the thousand years, which is the text premillennial readers lean on.
5. **21:3, "his peoples".**
   - λαοί (plural): Sinaiticus, Alexandrinus and others; NA28, SBLGNT.
   - λαός (singular): many minuscules and the Byzantine text; Textus Receptus, KJV "his people".
   - Follow the plural, as the harder reading: it breaks the Old Testament formula "my people" (Leviticus 26:12;
     Ezekiel 37:27). Note #188 already mentions the plural; move that sentence into the variant.
6. **21:3, "and be their God".**
   - Present (αὐτῶν θεός, or θεὸς αὐτῶν): Alexandrinus and others; NA28 [in brackets]; Textus Receptus, KJV.
   - Absent: Sinaiticus and the Byzantine text; **SBLGNT**.
   - The Plain prints it. That departs from the SBLGNT and needs a variant saying so. Alternatively, drop the
     words to follow the SBLGNT and offer them as the other reading.
7. **21:24, "The nations will walk".**
   - Textus Receptus and KJV add "of them which are saved" (τῶν σωζομένων). This comes from a minority of late
     minuscules; check whether they are of the Andreas type.
   - The oldest witnesses and the Byzantine text lack it.
   - Not original. It matters because it narrows "the nations" in exactly the verse note #195 builds on.
8. **22:14, "those who wash their robes".**
   - πλύνοντες τὰς στολὰς αὐτῶν, "wash their robes": Sinaiticus, Alexandrinus, some minuscules, the Vulgate and
     the Sahidic Coptic.
   - ποιοῦντες τὰς ἐντολὰς αὐτοῦ, "do his commandments": 046 and the Byzantine text, the Syriac and the Bohairic
     Coptic, Tertullian and Cyprian; Textus Receptus, KJV.
   - Follow "wash". Keep the capitals comparison now in WORDS `washrobes` (`src/3-data.js:52`): it is Metzger's
     own illustration.
   - Per the lead decision, remove the `var` note. Its source is `v2/src/notes3.js:112` `N('22:14','wash their
     robes',...)` and WORDS `washrobes`.
   - The gloss "those who wash their robes" (`v2/src/glosses.js`) contains the natural anchor. Either anchor
     the variant on "Blessed are those who wash their robes" with the gloss nested inside, or move the gloss's
     point into the variant's `b`. Test with the build, because brief-rev.md says variants may not overlap glosses
     while STYLE.md allows nesting.
9. **22:19, "tree of life".**
   - ξύλου, "tree": every Greek manuscript of this verse except a few copied from printed editions.
   - βίβλου, "book": Erasmus's 1516 back-translation from the Latin (*libro* in some Vulgate copies, a slip for
     *ligno*); Textus Receptus, KJV.
   - This is a variant, not a `mis` word note. Convert note `v2/src/notes3.js:116` and WORDS `bookoflife`
     (`src/3-data.js:54`) into the variant. Note #205's history is basically right, with these corrections:
     - "the first Greek New Testament" should be "the first Greek New Testament to be published". The
       Complutensian was printed in 1514 but not issued until about 1520.
     - Erasmus's only Greek manuscript of Revelation was minuscule 2814 (formerly 1r), a 12th-century
       manuscript with Andreas of Caesarea's commentary. It lacked its last leaf, 22:16–21.
     - Some back-translated readings survived into the Textus Receptus. The `b` should name the ones that reach
       the KJV here: 22:19 "book of life", and 22:21 "with you all" (see 10). Other back-translated wording in
       22:16–21, such as ἐλθέ for ἔρχου in 22:17, can go in the `b` only if checked.
10. **22:21, "be with everyone. Amen."** The ending has four or more forms:
    - μετὰ πάντων, "with all": Alexandrinus and part of the Vulgate; NA28, SBLGNT.
    - μετὰ τῶν ἁγίων, "with the saints": Sinaiticus.
    - μετὰ πάντων τῶν ἁγίων, "with all the saints": 046 and the Byzantine text.
    - μετὰ πάντων ὑμῶν, "with you all": Textus Receptus and KJV. This is Erasmus's back-translation; it has
      almost no Greek manuscript support.
    - "Amen": added in Sinaiticus, 046 and the Byzantine text; absent from Alexandrinus; not in NA28 or SBLGNT.
    - The Plain adds "Amen" against its own base text. Either drop it, or keep it with a variant explaining the
      choice; I recommend dropping it. Also give the reader the KJV's "our Lord Jesus Christ" (Byzantine "Lord
      Jesus Christ").
    - Two entries are cleanest: one on "with everyone" and one on "Amen".

**B. Should have (the KJV differs visibly, or a modern footnote exists):**

11. **18:2.** The NA28 brackets a third clause, "a haunt of every unclean beast" (καὶ φυλακὴ παντὸς θηρίου
    ἀκαθάρτου). SBLGNT prints it. The Byzantine text and KJV lack it and attach "hated" to the bird. The Plain
    follows the longer text. Also, "Fallen! Fallen!" is doubled in SBL and Textus Receptus but single in the
    Byzantine text.
12. **18:6.** Textus Receptus and KJV: "as she rewarded *you*" (ὑμῖν). It is not in NA28 or SBLGNT. The Plain's
    "as she has paid others" supplies "others" as an object; either note it or drop "others".
13. **18:13.** "Spice" (ἄμωμον, amomum): Sinaiticus, Alexandrinus and others; NA28, SBLGNT. Missing from the
    Byzantine text, Textus Receptus and KJV.
14. **18:17.** "Everyone who travels by ship" (ὁ ἐπὶ τόπον πλέων, literally "who sails to a place") versus the
    Textus Receptus "all the company in ships" (ἐπὶ τῶν πλοίων ὁ ὅμιλος, KJV).
15. **19:6.** "Our Lord God": ἡμῶν is in brackets in the NA28, absent from SBLGNT and from the Textus Receptus
    (KJV "the Lord God omnipotent"), and present in the Byzantine text. The Plain follows the bracketed or
    Byzantine word against the SBLGNT. Either follow SBL ("the Lord God, the All-Powerful, rules") or add a
    variant.
16. **20:9.** "Fire came down from heaven": SBL and NA28. The Byzantine text and Textus Receptus have "from God
    out of heaven" (KJV); other witnesses put "from God" after "heaven".
17. **20:14.** The final "the lake of fire" in "This is the second death, the lake of fire" is missing from the
    Textus Receptus (KJV ends "This is the second death"). The Plain restructures the verse ("The lake of fire is
    the second death"), so check that the anchor still works.
18. **21:6.** "It is done": γέγοναν, "they have come to pass" (plural) in NA28 and SBL. The Byzantine text reads
    γέγονα, "I have become (the Alpha and the Omega)". Textus Receptus γέγονε gives KJV "It is done".
19. **21:10.** Textus Receptus and KJV: "that great city, the holy Jerusalem". The Byzantine text adds τὴν
    μεγάλην.

Optional, at the fixer's judgment:
- 19:12, where the Byzantine text adds "having names written"; not in the KJV.
- 19:15, where the Byzantine text adds "two-edged"; not in the KJV.
- 20:2, where the Byzantine text adds "who deceives the whole world"; not in the KJV.
- 22:1, "a pure river" (KJV).
- 22:11, KJV "let him be righteous still" (Textus Receptus δικαιωθήτω).

Every entry needs the full fields (`t`, `p`, `readings` with `w`/`orig`/`en`/`plain`, `follow`, `why`, `s`:
`metzger`). They go in the overlay under `variants["17"]` through `variants["22"]`.

**2. Major. Plain 19:2, 19:5, 19:10, 22:3, 22:6, 22:9 still say "servant(s)" for δοῦλος / σύνδουλος.**
Lead decision (brief-rev.md, terms.json δοῦλος): use "slave(s)".
- In 19:10 and 22:9, "I am a servant with you" should be "I am a fellow slave with you" (σύνδουλός σού εἰμι).
- Source: `v2/src/plain.js` lines 362, 365, 371, 435, 439, 442.
- Everything that quotes these verses changes with them:
  - the ch22 deep table (`v2/src/chdeep.js:121`), which quotes 1:1 and 22:6 "his servants";
  - settings 19:1–10, if it is reworded.
- This also brings the Plain into line with 18:13 and 19:18, which already say "slave(s)" for other Greek words.

**3. Major. Plain 21:4 "the old order of things has passed away" is the NIV's exact phrase.**
The Greek is τὰ πρῶτα ἀπῆλθαν, "the first things have gone". Write "the first things have passed away" or "the
former things are gone". The latter keeps the echo of Isaiah 65:17 "what came before" and of 21:1 "the first
heaven". Source: `v2/src/plain.js:406`. The same line also has πένθος as "sadness", against "grief" in 18:7–8
(see finding 30).

**4. Major. Plain 21:7 "I will be their God, and they will be my children" matches the NRSV word for word. It
also loses the Greek's singular "son".**
The Greek reads ἔσομαι αὐτῷ θεὸς καὶ αὐτὸς ἔσται μοι υἱός: "I will be his God, and he will be my son." This is
the royal adoption formula of 2 Samuel 7:14 ("I will be his father, and he will be my son"), now given to every
victor. Making it plural and "children" erases both the echo and the point that each overcomer inherits the
messianic sonship.

Fix:
- Write "I will be that person's God, and they will be my son", or keep the singular as in 2:26–28 ("To the one
  who wins the victory..."). Matt's 8th-grade standard can carry "son" with a note.
- Add a word note on υἱός with 2 Samuel 7:14, Psalm 2:7 and Romans 8:14–17. Mention that "son" here covers
  daughters too (2 Corinthians 6:18 has "sons and daughters").
- The ch21 `sum` ("Right after the promise 'I will be their God'") changes with it.
- Source: `v2/src/plain.js:409`. Chapter text: `v2/src/chapters.js` (ch21) or `deep21.js`; grep "I will be
  their God".

**5. Major. Plain 18:13 "and slaves, that is, human lives" follows the ESV's structure. The note's title
quotes the KJV.**
The ESV has "and slaves, that is, human souls". Four of the five words match, and so does the choice to read καί
as "that is". The Greek is σωμάτων, καὶ ψυχὰς ἀνθρώπων: "bodies, and human souls/lives". Note #168 itself says
John "adds" the second phrase, which argues for "and".

Fix: keep the case shift John makes, for example "and bodies (that is, slaves) and human lives", or "slaves,
and human lives". The anchor of note #168 (`v2/src/notes3.js:71`) and gloss `v2/src/glosses.js:242` change too,
as do the ch18 `sum` and settings 18:9–24, which quote the phrase.

**6. Major. Notes and chapter pages quote the Old Testament and Paul in NIV wording.**
These quotes are NIV text word for word, or near it (I checked against my knowledge of the NIV and against the
site's Plain):
- Jeremiah 51:7, 13, 45, 63–64 and 29:5–7:
  - notes `v2/src/notes3.js` 17:1, 18:4, 18:21;
  - `deep18.js` spec box and symbols list;
  - settings, if any.
- Isaiah 47:7–9 (18:7), 54:5 (19:7), 65:17 (21:1), 25:8 (21:4), 54:11–12 (21:19, NIV 1984 "stones of turquoise,
  your foundations with sapphires"), 60:11 (21:25 and the ch21 card), 60:19–20 (ch21 card).
- Daniel 4:30 (note at 18:2, `deep18.js` names list; "Is not this the great Babylon I have built... by my
  mighty power and for the glory of my majesty").
- Ezekiel 40:2 (note at 21:10).
- Zechariah 14:11 (note at 22:3; see finding 9).
- 1 Corinthians 6:9–11 (note at 21:8 and the ch21 deep section).
- Ezekiel 16:37–41 (note at 18:16): check it.

The project bars copyrighted translation text in content. For books already on the site, use the site's Plain
exactly; this also clears the build warnings:
- Isaiah: `content/books/Isa/parts/*`. For example:
  - Isaiah 54:11–12: "lay your foundations with lapis lazuli... your gates of sparkling stones".
  - Isaiah 25:8: "He will swallow death up for all time. / The Lord GOD will wipe the tears off every face".
  - Isaiah 60:11: "Your gates will stand open all the time; / day and night they will not be shut".
  - Isaiah 47:7: "I will be the lady forever, for all time".
- Jeremiah: `content/books/Jer/`. For example, Jeremiah 51:45 is "Come out of her, my people! / Let each one save
  his life / from the LORD's blazing anger", not "Run for your lives".

For books not yet written (Daniel, Ezekiel, Zechariah, 1 Corinthians, Hosea), translate fresh from the
Hebrew/Greek. Also fix the 20:2 note #180 and the ch20 fact box: Isaiah 24:22's "punished after many days" is
"after many days they will be called to account" in the site's Isaiah.

**7. Major. 19:10 "the testimony about Jesus is the spirit of prophecy" has no note. The book renders the same
phrase two ways.**
ἡ μαρτυρία Ἰησοῦ is one of the book's best-known cruxes. It can mean:
- Jesus's own testimony (subjective genitive): what Jesus witnessed is what inspires prophecy;
- testimony about Jesus (objective genitive);
- or both.

The Plain has "testimony of Jesus Christ" at 1:2, "testimony about Jesus" at 1:9, 12:17, 19:10 and 20:4, and the
gloss "all true prophecy points to Jesus" picks one side. Nothing anywhere in the book discusses it (I searched
all notes).

Fix:
- Add a `word` note, kind `deb`, at 19:10 on "the testimony about Jesus" (anchor inside the gloss's anchor, or
  shorten the gloss).
- Give both readings. Bauckham and Koester lean to Jesus's own witness, carried on by the prophets. Name who
  holds the objective reading; check before naming.
- Cross-reference 1:2, 1:9, 12:17 and 20:4.
- Tell the 01–05 slice that 1:2 differs, for alignment.

**8. Major. Note #176 at 19:13 and the ch19 deep section cite G. B. Caird for "the blood is Christ's own". Caird
read it as the blood of the martyrs.**
- As I know his commentary (*A Commentary on the Revelation of St. John the Divine*, 1966, on 19:13), Caird
  linked the robe to the winepress of 14:20 and read the blood as the martyrs' blood. That is a third view, not
  this one. Christ's-own-blood readers include Sweet, Boring and Bauckham.
- I could not confirm the page online, so the fixer should check Caird before keeping him or drop his name.
- The note also gives only one alternative in passing (Isaiah 63). The enemies'-blood reading, from Isaiah
  63:1–3, is held by Aune, Osborne and others. It should be stated as a view, not just as the source of the image.
- The gloss "a robe stained with his own sacrifice" (`v2/src/glosses.js:258`) presents the spec reading as the
  plain meaning; change it to "a blood-soaked robe".
- Sources: `v2/src/notes3.js:81`, `v2/src/chdeep.js:114`.

**9. Major. Note #198 at 22:3 misses the exact source of "no longer be any curse" and quotes it in NIV form.**
- Zechariah 14:11 in Hebrew reads וְחֵרֶם לֹא יִהְיֶה־עוֹד, "and there will be no more *herem* (ban, curse of
  destruction)". In the Septuagint it is ἀνάθεμα. Revelation's πᾶν κατάθεμα οὐκ ἔσται ἔτι is a near-quotation.
- The note quotes Zechariah as "Never again will it be destroyed. Jerusalem will be secure." That is the NIV's
  wording, and it hides the parallel.
- Fix: "Zechariah 14:11: 'there will never again be a ban of destruction (*herem*)'", fresh from the Hebrew,
  with a sentence saying that Revelation quotes it. Keep Genesis 3:17 as the wider echo.
- Source: `v2/src/notes3.js:109`.

**10. Major. Glosses that settle open debates.** A gloss gives the feel of the words, not a verdict.
- 20:2 "tied him up for a thousand years" = "locked him up for a very long time" (`v2/src/glosses.js:265`). This
  takes the non-literal side of the book's biggest debate, which note #179 and the ch20 page present as open.
  Try "chained him up for a thousand years, a full, set time".
- 20:14 "the lake of fire" = "final destruction" (`glosses.js:276`). This is the annihilationist reading,
  against 20:10 "tormented day and night forever and ever" and against the three views the ch21 page lays out.
  Try "the place of final judgment".
- 19:13: see finding 8.

**11. Major. 20:4: the Plain resolves two debated points without a note, and the third is under-noted.**
- (a) καὶ κρίμα ἐδόθη αὐτοῖς, "and judgment was given to them". It can mean authority to judge (Plain), or a
  verdict given in their favor, as in Daniel 7:22 "judgment was given for the holy ones of the Most High".
- (b) καὶ οἵτινες οὐ προσεκύνησαν... The Plain begins a new sentence, "They had not worshiped...", which makes
  one group: the beheaded. Many read the καί as adding a second, wider group: all who refused the beast, martyred
  or not. Beale and Aune discuss both.
- (c) ἔζησαν "came to life" against amillennial "lived (and reigned)". Note #182 has the 2:8 parallel, which
  supports the Plain, but it never states the other reading.
- The Plain also adds "their" ("their testimony").
- Fix: add one `word` note, kind `deb`, at 20:4 covering (a) and (b), and add (c) to #182. Daniel 7:9, 22 is
  already in the ch20 echoes.

**12. Major. No `traditions` card on the lake of fire or hell. Chapters 20–21 describe three conflicting views
but never as a "Where Christians differ" card.**
Churches really do conflict here:
- Catholic: eternal punishment, CCC 1033–1037.
- Orthodox: eternal, with a strong patristic thread of hope (Gregory of Nyssa, Isaac the Syrian) and the
  "river of fire" image.
- Lutheran: Augsburg Confession 17 condemns those who teach an end to the punishment of the damned.
- Reformed: Westminster Confession 33.2.
- Baptist: Baptist Faith and Message 2000, article 10.
- Adventist: annihilation, Fundamental Belief 27, consistent with its card on 20:1–6.
- Anglican: the 1995 Doctrine Commission report *The Mystery of Salvation* leaned toward annihilation; check
  before citing.

Add a card to the overlay `traditions_by_chapter["20"]` (on 20:10–15) with `top: "lake-of-fire"`, using only
documents the fixer can confirm. The material in `deep21.js` ("The second death") can stay as the scholarly side.

**13. Major. The 17–18 Babylon card (overlay `traditions_by_chapter["17"]`, Rev.json about line 1141) leaves out
the two traditions with the most distinct historic answers. Its Reformed entry is garbled.**
- **Lutheran**: Luther's prefaces to Revelation (1530 and 1545) and the Lutheran confessions treat the papacy as
  Antichrist (Smalcald Articles II.4; Treatise on the Power and Primacy of the Pope 39–41).
- **Orthodox**: Andrew of Caesarea reads Babylon as the worldly kingdom, and possibly a capital of the last days;
  check his exact wording, which `andrew-caesarea` should support.
- The Reformed entry says "every society that trades with anyone and worships its own wealth". "Trades with
  anyone" is a fragment carried over from the symbols list; rewrite it.
- Check that `geneva-bible`'s note does say Babylon is Rome. It does in the 1560 notes on 17:5 and 17:9, which
  is fine to cite.

**14. Major. οἱ ἅγιοι is "God's people" throughout. terms.json fixes "the saints" (with the gloss "God's holy
people" at first use).**
- In this slice: 17:6, 18:20, 18:24, 19:8, 20:9. Elsewhere in the book: 5:8, 8:3–4, 13:7, 13:10, 14:12.
- Note #173 even calls them "saints" while the Plain says "God's people".
- This needs a lead decision for the whole book: either apply the term, or log Revelation as an exception in
  terms.json with a why. Until then, 19:8's note and Plain contradict each other.
- If "saints" is adopted, 20:9 becomes "the camp of the saints and the beloved city". That also fixes finding 21.

### Minor

**15. Minor. Plain 19:8 "(Fine linen stands for the right things God's people have done.)" copies the NIV's
form**: a parenthesis that opens "Fine linen stands for". Rephrase, for example: "The fine linen is the right
deeds of the saints." The Greek τὸ γὰρ βύσσινον τὰ δικαιώματα τῶν ἁγίων ἐστίν is part of the voice's sentence
in many editions, so the parenthesis is itself an interpretation. Source: `plain.js:369`.

**16. Minor. Plain 18:2 "a prison for every evil spirit".** πνεῦμα ἀκάθαρτον is "unclean spirit" in terms.json,
and the Greek sets it in a row with "unclean bird" and "unclean animal", which the Plain keeps. Write "every
unclean spirit". Source: `plain.js:336`.

**17. Minor. Plain 17:16 "They will strip her, leave her naked".** ἠρημωμένην ποιήσουσιν αὐτὴν καὶ γυμνήν means
"they will make her desolate and naked". "Strip" is not in the Greek, and "desolate" is lost. The same verb
returns in 18:17 and 18:19 (ἠρημώθη, "laid waste"), which the Plain renders "destroyed". Use "lay her waste and
leave her naked", and "laid waste" in 18:17 and 18:19, so the reader hears the chain. Source: `plain.js:331`.
Gloss 17:16's anchor changes with it.

**18. Minor. Plain 18:14 adds "They will say,".** The Greek turns abruptly to address the city in the second
person, and the speaker is not named (it may be the heavenly voice of 18:4). Drop the added words, or bracket
them and add a note. Source: `plain.js:349`.

**19. Minor. Versification.** STYLE.md keys verses by the KJV. KJV 17:10 begins "And there are seven kings". The
Plain puts "They are also seven kings" in 17:9, following the NA/SBL division. Move it to 17:10, or record in
brief-rev.md that Revelation follows NA verse divisions. Source: `plain.js:324`.

**20. Minor. Plain 17:11 "is an eighth king".** The Greek is αὐτὸς ὄγδοός ἐστιν, "he himself is an eighth".
"King" is a reasonable inference, but it is supplied. Write "is himself an eighth", or note it. Spec note #161
then anchors on "an eighth".

**21. Minor. Plain 20:9 "the camp of God's people, the city he loves".** The Greek joins them with καί ("the
camp of the saints *and* the beloved city"). The Plain's comma makes them one place, which some readers hold, but
the Greek leaves it open. The ch20 israel box quotes "The camp of God's people and the beloved city", which is
the build warning. Fix the Plain to "and", and "the beloved city" (ἠγαπημένην, passive, "loved"), and the warning
clears. Gloss 20:9 and `topics3.js:135` change with it.

**22. Minor. Plain 20:10 "where the beast and the false prophet had also been thrown".** The Greek has no verb
(ὅπου καὶ τὸ θηρίον καὶ ὁ ψευδοπροφήτης). The KJV supplies "are", which matters for the eternal-punishment
debate. Write "where the beast and the false prophet are too", or add a note that the verb is supplied.

**23. Minor. Plain 19:15 drops "the wine of".** The Greek is "the winepress of the wine of the fury of the wrath
of God". Keep "wine" (compare 14:10, 16:19 "the wine of his furious anger"): "the winepress of the wine of God's
furious anger".

**24. Minor. Small Plain departures from the SBL text.**
- 17:6 drops the καί before the second "blood", following the Byzantine text; restore it with "and the blood of
  those who bore witness".
- 18:11 is present tense in SBL ("weep and mourn").
- 18:8 κρίνας is aorist, "who has judged her".
- 17:8 ὑπάγει is "is going to destruction"; the Plain's "and go" follows the Byzantine infinitive.
None of these changes the sense much. Align them with the SBL, or note them.

**25. Minor. 21:16: the Plain gives "about 1,400 miles" and drops the symbolic 12,000.** The number is the point
(12 × 1,000), as notes #191 and #220 say. Write "12,000 stadia (about 1,400 miles)" in the Plain, matching the
note. 14:20 does the same, so it belongs to the alignment pass; at least make 21:16 keep the number. The ch21
`sum` also calls the city "a cube" as fact. The Greek says only that length, width and height are equal, and
some read a pyramid; say "as tall as it is wide".

**26. Minor. Note #175 at 19:11: "Romans celebrated a triumph with the victorious general riding a white
horse."** The triumphing general rode in a four-horse chariot, drawn by white horses on the most famous
occasions; he did not ride a horse. Fix the wording. Source: `notes3.js:80`. The gloss "a victory parade horse"
is fine.

**27. Minor. Note #181 at 20:4: the preview says "Beheading by axe was the Roman punishment for citizens."**
- By the first century AD, citizens were beheaded with the sword. The axe was the older Republican form, as the
  body says.
- "The word marks these as martyrs of Rome" claims too much for one verb.
- Fix the preview, and soften the last sentence.
- Source: `notes3.js:88`.

**28. Minor. Note #230 at 18:24: the preview says "Rome killed the apostles."** Tradition holds that Rome killed
Peter and Paul, and the others died elsewhere or by other hands. Write "Rome killed Peter and Paul, by early
tradition." Source: `deep18.js:110`.

**29. Minor. Note #191 at 21:16 (spec): "Several scholars note that a square that size would cover roughly the
area from Rome to the Euphrates, or the Hellenistic world."** No scholar is named, and Rome to the Euphrates is
about 1,500–1,800 miles. Name a source (for example the commentary that makes the claim), or reword it as the
writer's own estimate.

**30. Minor. πένθος is "grief" in 18:7–8 but "sadness" in 21:4.** Use "grief" (or "mourning") in both; 21:4
answers the boast of 18:7.

**31. Minor. Note #223 at 21:21: "Ephesus's Arcadian Way".** The street existed in John's day, but it is named
for the emperor Arcadius, who rebuilt it around AD 400. Write "the harbor street (later rebuilt as the Arcadian
Way)". The ch21 card already says "lit at night in later centuries"; make it match.

**32. Minor. No in-text note on 22:18–19 for Deuteronomy 4:2 and 12:32, and for the common belief that the
warning seals the whole Bible.** The ch22 deep section covers both well, but a reader tapping the verse finds
nothing. Add an `echo` note with the site's Deuteronomy 4:2 wording ("Do not add anything to the word I am
commanding you, and do not take anything away from it"). Point to the deep section for the `com` point.

**33. Minor. Missing echo notes.**
- 22:12 "I bring my reward with me": Isaiah 40:10; 62:11.
- 22:11: Daniel 12:10, "the wicked will act wickedly".
- 21:5 "I am making everything new": Isaiah 43:19.
- 21:6 "to anyone who is thirsty": Isaiah 55:1; the chapter echoes list lacks it too.
- 19:15 "rule them with an iron rod": Psalm 2:9. It is in the echoes list but has no note in this chapter;
  pointing back to 2:27 and 12:5 is enough.

**34. Minor. Glosses that trivialize or mislead.**
- 18:23 "your magic spells" = "your seductive marketing" (`glosses.js:246`). This makes φαρμακεία (sorcery,
  drugs, spells) into advertising; "your bewitching power" is better.
- 22:18 "God will hold that person accountable" softens "add to that person the plagues"; try "God will bring
  this book's plagues on that person".
- 21:22, anchor "the Lamb are its temple": the anchor is a grammatical fragment, and the gloss drops God. Anchor
  "the Lord God, the All-Powerful, and the Lamb are its temple" = "God and Jesus are the temple".

**35. Minor. Writings outside the 66.**
- "Sibylline Oracles" is cited in note #161 (17:11) and in the ch18 Rome card, but it is not in
  `content/works.json`. Add it (tier `other`), or cite it as the book already names it elsewhere.
- Note #192 cites "Tobit 13:16–17" without saying it is Scripture for Catholic and Orthodox Christians. Add
  "(in the Catholic and Orthodox Old Testament)" and put it in `r`.
- Note #213 and the ch21 card use the Targums as evidence for what "second death" meant to John's readers. Add
  that the Targums reached their written form after the first century, though they preserve older synagogue
  usage.

**36. Minor. More cards to consider; not required, but real points of conflict.**
- 19:9, "Blessed are those who are invited to the wedding supper of the Lamb". The Roman Missal uses it at
  communion ("Blessed are those called to the supper of the Lamb"). Scott Hahn's *The Lamb's Supper* reads
  Revelation as the Mass. Protestant readers see a future feast.
- 21:1, the new creation as renewal or as replacement. Lutheran orthodoxy (Johann Gerhard) taught that the world's
  substance would be annihilated. Reformed (Bavinck) and Catholic teaching (CCC 1042–1050) speak of renewal.
- The ch19 views also overstate in "P: Most partial preterists see this as the future Second Coming". Some, such
  as Chilton, read 19:11–21 as the present conquest of the gospel. Write "Many".

## Not faults (checked and confirmed)

Revelation's six "Babylon"s, Juvenal *Satires* 4.38, Horace *Carmen Saeculare* 7, Virgil *Georgics* 2.535, the
Vespasian Roma sestertius (AD 71), Strabo 16.1.5, Pliny *NH* 12.84 and 9.106, Herodotus 1.178–180 and 1.191,
Bava Batra 75a, Barnabas 15, Sanhedrin 97a, Targum Onkelos on Deuteronomy 33:6 and Targum Jonathan on Jeremiah
51:39, 57, Plutarch *De facie* (943), Eusebius *HE* 5.20.2 (Irenaeus to copyists), Didache 10.6, Qur'an 18:94–99
and 21:96, *Völuspá*, Azi Dahaka, Westminster Confession 25.6, Augsburg Confession 17, CCC 676, the Baptist Faith
and Message article 10 wording, Charles Fitch 1843, Petrarch and Avignon, Olivi, Dante *Purgatorio* 32, Dyer
1991, and the Babylon UNESCO listing in 2019. The settings the audience review led to (17:7–18 with the
historicist view, 18:1–8 hedged, 18:9–24 with `climax`, 19:1–10, 19:17–18, 20:6 as the fifth beatitude, 21:3–8,
22:6–21) are accurate and quote the current Plain. Only 22:6–21 needs no change, and 19:1–10 changes only if
"servants" is quoted (finding 2).

## Fixes applied

All 126 verses of 17–22 were rebuilt from `literal.js` with a fresh drift audit (118 changed, 8 kept where the Greek forces the wording; list in `.scratch/Rev-17-22-fix/drift-audit.md`). Every note, gloss and chapter-page quote of a changed verse was re-anchored or re-quoted. Witnesses marked "checked" were read in Tischendorf's 1865 edition of Codex Sinaiticus (Source Library), which also collates the Textus Receptus; the rest are given as "reported by Metzger" or as editions taken from `texts/orig`.

1. Fixed. 21 variants in the overlay (`variants["17"]` to `["22"]`): 17:8; 18:2, 3, 6, 13, 17; 19:6, 13; 20:5, 9, 14; 21:3 (two entries), 6, 10, 24; 22:1, 11, 14, 19, 21. Where the Plain leaves the SBLGNT (18:3 "drunk", 19:6 "our", 21:3 "and be their God"), the entry says so and why. 22:21 now follows the SBLGNT ("with all", no "Amen"), with all four endings in one entry. The 22:14 and 22:19 notes are deleted and their content moved into the variants (the Erasmus/2814/Complutensian history corrected as asked; ἐλθέ in 22:17 confirmed in the TR collation). Optional 19:12, 19:15, 20:2 not added (no KJV difference); 22:1 and 22:11 added.
2. Fixed. 19:2, 19:5, 22:3, 22:6 "slaves"; 19:10 and 22:9 "a fellow slave with you". The ch22 table no longer quotes 1:1.
3. Fixed. 21:4 rebuilt: "Death will be gone, and grief and crying and pain will be gone too. The first things have gone away." (the SBL has no "because"); πένθος is "grief" as in 18:7–8.
4. Fixed. 21:7 "I will be his God, and he will be my son"; new word note (2 Samuel 7:14 in the site's wording, Psalm 2:7, 2 Corinthians 6:18, Romans 8:14–17; "son" includes daughters); ch21 page updated.
5. Fixed. 18:13 "horses and carriages and bodies, and human souls"; the note, the gloss (now on "bodies"), the ch18 summary and symbols list, and settings 18:9–24 changed with it.
6. Fixed. All Old Testament quotes in 17–22's notes and pages now use the site's Plain (Jeremiah 51:7, 13, 45, 63–64; 29:5–7; Isaiah 1:21; 24:22; 25:8; 40:10; 43:19; 47:7–9; 54:5; 54:11–12; 55:1; 60:11; 60:19–20; 63:3; 65:17, 19; Deuteronomy 4:2; 10:17; 2 Samuel 7:14). Books not on the site (Daniel 4:30; 7:10, 11; 12:4; Ezekiel 16:37–41; 27:32; 39:17; 40:2; Hosea 2:19–20; Zechariah 14:11; 1 Corinthians 6:9–11; 15:26) are translated fresh from the Hebrew, Aramaic or Greek, or paraphrased without quote marks. The 20:2 note and the ch20 fact box now say "after many days they will be called to account."
7. Fixed. 19:10 and 20:4 now read "the testimony of Jesus" (as 12:17 already does), with a new `deb` note at 19:10 giving both readings (Bauckham and Koester for Jesus's own witness; the objective reading is given without a name I could not check). The gloss that picked a side is removed. For the lead: 1:2 ("testimony of Jesus Christ") and 1:9 ("my testimony about Jesus") are in the 01–05 slice.
8. Partly. Caird's view could not be confirmed either way (web searches found only his remark that the robe is bloodied before the battle), so his name is removed from the note and from the ch19 page rather than moved to another view. The note now gives three readings (the enemies' blood: Aune, Osborne; the martyrs' blood, unattributed; his own: Bauckham), with my lean labeled as mine. The gloss is now "a blood-soaked robe".
9. Fixed. The 22:3 note is rebuilt around Zechariah 14:11 (ḥerem; Septuagint anathema; Revelation's katathema), fresh from the Hebrew. Plain: "Nothing will be under a curse any longer."
10. Fixed. 20:2 gloss "chained him up for a thousand years, a full, set time". The 20:14 gloss "final destruction" is gone ("the lake of fire" now occurs twice in 20:14); 20:15 has "the place of final judgment". 19:13: see 8.
11. Fixed. 20:4 keeps "judgment was given to them" and the "and" before "those who had not worshiped" (no new sentence), and drops "their". New `deb` note at 20:4 on (a) and (b); (c) added to the 20:5 note (ezēsan, 2:8, and the amillennial "they lived").
12. Fixed. One "Where Christians differ" card at chapter 20, `top: lake-of-fire`, unranked: Catholic (CCC 1033–1037, with von Balthasar's hope), Orthodox (Ware, Gregory of Nyssa, Isaac the Syrian), Lutheran (Augsburg 17), Reformed (Westminster 33.2), Anglican (The Mystery of Salvation, Stott), Baptist (BFM 2000 art. 10, 1689 London 32.2, Fudge), Adventist (Fundamental Beliefs 26–27). The new 20:10 note points to it.
13. Fixed. The Babylon card gains Orthodox (Andrew of Caesarea, kept general: worldly power, in John's day pagan Rome, at the end the seat of the Antichrist's kingdom; worth a check against the Constantinou translation) and Lutheran (Luther's prefaces, Smalcald Articles II.4, Treatise on the Power and Primacy). The Reformed entry is rewritten and cites the Geneva notes at 17:5 and 17:9.
14. Fixed per lead decision 5: "the saints" in 17:6, 18:20, 18:24, 19:8, 20:9 (the first-use gloss is at 5:8).
15. Fixed. 19:8 is inside the voice's words, with no parenthesis: "For the fine linen is the right deeds of the saints."
16. Fixed. 18:2 "a prison for every unclean spirit".
17. Fixed. 17:16 "lay her waste and leave her naked"; 18:17 and 18:19 "laid waste"; gloss re-anchored.
18. Fixed. "They will say" is dropped; 18:14 addresses the city directly, inside the heavenly voice's speech.
19. Declined per lead decision 3: the site keeps the SBL verse division. The 17:10 note now tells KJV readers where their verse starts.
20. Fixed. 17:11 "he himself is an eighth"; the spec note anchors on "an eighth" and says "king" is understood.
21. Fixed. 20:9 "the camp of the saints and the beloved city"; the gloss and the ch20 Israel box changed with it. topics3.js:135 belongs to the book fixer (see below).
22. Fixed. 20:10 "where the beast and the false prophet are too", with a new `deb` note on the supplied verb.
23. Fixed. 19:15 "the winepress of the wine of the furious anger of God"; also "he will shepherd them with an iron rod" (as 12:5 now reads), with a new echo note on Psalm 2:9 and the Septuagint's "shepherd".
24. Fixed. 17:6 restores "and"; 18:11 present tense; 18:8 "who judged her"; 17:8 "it is going to destruction".
25. Fixed. 21:16 "12,000 stadia (about 1,400 miles)" and "It is as tall as it is long and wide"; the ch21 summary, symbol reading, deep card and the 21:22 note no longer state a cube as fact.
26. Fixed. 19:11 note: the general rode in a four-horse chariot, drawn by white horses on the grandest occasions.
27. Fixed. 20:4 note: the axe as the Republican penalty, citizens beheaded with the sword by the first century; the last sentence softened.
28. Fixed. 18:24 preview: "By early tradition, Rome killed Peter and Paul."
29. Fixed. The 21:16 spec note now gives the size comparison as my own estimate (Greece to Mesopotamia) and names no scholars.
30. Fixed. "grief" in 18:7–8 and 21:4.
31. Fixed. The 21:21 note and the ch21 card: the harbor street, later rebuilt as the Arcadian Way about AD 400.
32. Fixed. New echo note at 22:18 with Deuteronomy 4:2 in the site's wording, the "put on" wordplay, and the belief that it seals the whole Bible.
33. Fixed. New echo notes: 22:12 (Isaiah 40:10; 62:11), 22:11 (Daniel 12:10, paraphrased), 21:5 (Isaiah 43:19), 21:6 (Isaiah 55:1), 19:15 (Psalm 2:9; 2:27; 12:5).
34. Fixed. 18:23 gloss on "your magic" = "your bewitching power"; the 22:18 gloss no longer softens the verse; the 21:22 gloss anchors the whole clause and keeps God.
35. Partly. Tobit 13:16–17 is labeled (Catholic and Orthodox Old Testament) and added to `r`; the Targums' later written form is stated in the 21:8 note and on the ch21 page. Sibylline Oracles is left as cited: works.json belongs to the book fixer (lead decision 20).
36. Partly. The ch19 views now say "Many partial preterists" and name Chilton's reading. The two optional cards (19:9 and the Mass; renewal or replacement at 21:1) are not added: optional, and lead decision 17 limits this slice to the final-punishment card. Left for the lead.

For the lead's quote sync, quotes of 17–22 outside this slice that no longer match the Plain: topics white-throne (20:11), new-creation (21:1, 21:3, 21:5), martyrs (17:6), overcomer (20:6, 21:7, 22:5), dating (17:10), beasts, unholy-trinity and nero (17:8), bride (19:7, 19:8, 19:9, 21:10), gog-magog (20:8), patmos and sea (21:1, 20:13), babylon (17:10, 17:18, 18:4), jerusalem (20:9; topics3.js:135), new-jerusalem (21:3, 21:24), temple (21:22), second-death (21:4, and the TP in deep21.js quoting 20:6 and 2:11), book.json (17:18) and the BEASTS table in src/3-data.js (17:18). The overlay settings for 17–22 were updated in this slice.
