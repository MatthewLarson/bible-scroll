# Hostile review: 1 Enoch book-level files (book.json, sources.json)

Reviewed: `content/books/1En/book.json` (intro, facts, authorship, audience, outline, lenses, sections, spec, traditions, and the whole `canon` block) and `content/books/1En/sources.json`. Checked against the five part folders `parts/*/` (notes, chapters, traditions cards). `node tools/build.js --check 1En`: **0 errors, 0 warnings** (1063 verses, 721 notes, 95 variants, 108 chapter pages).

## Verdict

This is careful, well-informed work, and most of its facts check out. That includes several of the points the writer marked as unsure. The book is never called Scripture in the site's own voice. It is presented as Scripture for the Ethiopian and Eritrean Orthodox Tewahedo churches, and those churches are named. The reliability analysis keeps its four required parts separate and does not rank churches. Even so, it is not ready to ship.

The errors that matter most fall in three places:

- **The Genesis 6 traditions card.** The Ethiopian row contradicts part 083-090, which cites Asale, and it is sourced to Ephrem, who holds the opposite view. The Catholic row puts words in Augustine's mouth.
- **The `cited_in` list.** Under the app's heading "Where the Bible refers to it", it lists Genesis, Leviticus and Deuteronomy, which are sources 1 Enoch draws on, not places that refer to it. Meanwhile it leaves out well-known New Testament parallels that the part notes already make, above all Matthew 25:41.
- **Wording that runs ahead of the evidence.** Augustine is said to have "followed the Hebrew canon". The book is said to have "dropped out of use by the 400s". Disputed Son of Man links appear as fact in the reliability verdict. The Ethiopian reading of 71:14 is stated as settled, although part 037-071 says it is not.

Findings: **0 critical, 8 major, 23 minor.**

## Findings

### Major

**1. Major: traditions card "Did angels really father the giants?", Ethiopian Orthodox row.** It says "Yes, for most teachers... Ethiopian teachers read Genesis 6 through it." It is sourced to `ephrem-genesis` and `nickelsburg-enoch`.
- *Contradicts the parts.* Part 083-090's card says: "Both answers are found... according to Bruk Ayele Asale, the traditional andəmta commentary often explains them as children of Seth who came down from the holy mountain to the daughters of Cain, the story told in the Ethiopic Conflict of Adam and Eve." Part 001-036, chapter 6 E view, says: "Its tradition also knows the view that the 'sons of God' were Seth's descendants (Asale)."
- *Wrong source.* Ephrem is the classic Syriac witness *for* the Sethite reading. The book.json Oriental Orthodox row cites him for exactly that. Nickelsburg is not a source for current Ethiopian teaching.
- *The parts disagree with each other too.* 001-036 says "Mostly yes... but also the line-of-Seth view", 083-090 says "Both answers are found", and 091-108 says a flat "Yes".
- *Fix:* rewrite the row on the lines of 083-090 ("Both readings are found..."), cite `asale-enoch-2020` (defined in parts/083-090/sources.json), and drop `ephrem-genesis` from this row. Ask the 091-108 and 001-036 writers to bring their cards into line.

**2. Major: same card, Catholic row.** It says that since Augustine, Catholic teachers have held "angels, being spirits, cannot father children (City of God 15.23)". Augustine does not argue this in 15.23.
- He reports the stories of *Silvani* and *Fauni* (incubi) who lay with women. He says it would be impudent to deny them flatly, and he declines to decide the point.
- His actual argument is different. God's holy angels could not have fallen in that way at that time. The "sons of God" of Genesis 6 were men of Seth's line, called "angels of God" in some copies of the Septuagint.
- The "spirits cannot marry" argument belongs to later writers (Chrysostom, Theodoret) and to Matthew 22:30, not to 15.23.
- *Fix:* "Augustine argued that the sons of God were the godly line of Seth and doubted that God's holy angels could have fallen so (City of God 15.23); that became the common Catholic reading."

**3. Major: canon.rejected_why, "The theological reasons", reason (1).** It says: "Augustine and Jerome followed the Hebrew canon: the church received the Old Testament from the Jews, and they did not keep Enoch." That is true of Jerome, but false of Augustine.
- Augustine defended the wider Septuagint canon: Tobit, Judith, 1–2 Maccabees, Wisdom and Sirach (*On Christian Doctrine* 2.8.13; *City of God* 18.36, where he says the church counts Maccabees as canonical although the Jews do not).
- His reason for Enoch in 15.23 is narrower: it was not in the canon kept "in the temple" by the Jewish priests, and its great age made it suspect.
- *Fix:* "Jerome followed the Hebrew canon. Augustine, who accepted a wider Old Testament, still noted that Enoch was never in the canon kept by Israel's priests (City of God 15.23)."

**4. Major: canon.cited_in includes passages that do not refer to 1 Enoch.** The app renders this list under the heading "Where the Bible refers to it" (`app/app.js` canonPage), with the label "Shared tradition". Four entries are sources 1 Enoch builds on, and the writer's own text calls two of them "the reverse direction":
- Genesis 5:21–24 at 12:1;
- Leviticus 16:8–10 at 10:4;
- Deuteronomy 33:2 at 1:9;
- Genesis 6:1–4 at 6:1, which is in the right place only on Milik's minority view that Genesis abbreviates the Enoch story.

As published, the page tells readers that Genesis, Leviticus and Deuteronomy refer to 1 Enoch. That would mislead the very readers Matt cares about.
- *Fix:* move Genesis 5, Leviticus 16 and Deuteronomy 33 into a new `provenance` section ("What it builds on in the Hebrew Bible"). Keep Genesis 6:1–4 only with `kind: "disputed"`, worded as "a few scholars (Milik) argue Genesis abbreviates an older Watchers story; most see 1 Enoch expanding Genesis."
- *Also:* the Leviticus entry should say that the Aramaic name of the angel is ʿAsaʾel (4Q201, 4Q202). "Azazel" in the Greek and Ge'ez is probably assimilated to Leviticus 16, and how far 10:4–8 deliberately models the scapegoat is debated (Hanson; Nickelsburg).

**5. Major: canon.cited_in leaves out well-known New Testament parallels that the part notes already draw.** The brief requires "every place in the 66 books that quotes, alludes to, or is argued to depend on it". Missing, with the parts' anchors:
- **Matthew 25:41**, "the eternal fire prepared for the devil and his angels": 10:6, 10:13, 54:4–6. Cited in 10 echo or canon notes across the parts, and one of the parallels commentators cite most often.
- **1 Peter 1:10–12**, the prophets served a later generation, not their own: 1:2. Four notes.
- **Revelation 8:3–4**, angels bringing the prayers of the saints to God: 9:3, 99:3. Five notes.
- **Revelation 12:7–9**, the war in heaven, Satan and his angels thrown down: 54:6, 69:6.
- **Revelation 9:1**, a star fallen from heaven with the key to the abyss: 86:1, 88:1. Ten notes.
- **Revelation 1:14**, head and hair white like wool: 46:1, 71:10, with Daniel 7:9.
- **John 14:2**, many dwelling places: 39:4–5, 41:2.
- **Acts 3:14** (also 7:52), "the Righteous One" as a title: 38:2, 53:6.
- **1 Thessalonians 5:3**, labor pains on a woman giving birth: 62:4.
- **Luke 1:52**, the mighty brought down from their thrones: 46:4–5.
- **Jude 4**, "deny our only Master and Lord": 48:10.

Each one needs a strength rating. Most are "shared tradition" or "disputed". Matthew 25:41 and Revelation 9:1 are often called probable allusions. Without them, the list is not the complete inventory the brief asks for.

**6. Major: canon.reliability.verdict and section 1 state disputed dependence as fact.**
- The verdict says the book's "ideas appear in Jude, 1 and 2 Peter, the Gospels' Son of Man sayings and Revelation". Section 1 says "When Jesus spoke of the Son of Man on his throne of glory... many hearers would have known these ideas from Enoch's books."
- But `cited_in` itself marks Matthew 19:28, Matthew 25:31–46, John 5:22–27 and 1 Peter 3:19–20 as **disputed**, with the link depending on the Parables' date.
- Some scholars date the Parables to the late 1st century AD: Knibb (1979) and Mearns (1979), with Hindley at AD 115–117. Part 037-071 reports this, but book.json never mentions it (see 16).
- An AI analysis that is meant to be balanced cannot treat in its verdict, as settled, what its own evidence list calls disputed.
- *Fix:* "...appear in Jude and 2 Peter, probably in 1 Peter and Revelation, and, if the Parables are earlier than the Gospels as most scholars think, in the Gospels' Son of Man sayings." Make the same change in section 1.

**7. Major: canon.reliability section 4, "Each church's view", states the Ethiopian reading of 71:14 and of the calendar as settled, with no source.**
- It says "71:14 and the Son of Man passages are read as prophecy of Christ, in whom Enoch's hope is fulfilled."
- Part 037-071, chapter 71 E view, says: "how it reads 71:14 is not fixed in any statement known to us. One reading takes the angel's words as calling Enoch a righteous 'son of man'..."
- The calendar sentence ("read as about God's order in creation rather than as binding against the church's calendar") has no source either. Part 072-082 says only that the church follows the Alexandrian 365-day year.
- Under point 3 of the reviewer brief, a church's view must be stated as its own teachers would state it, and sourced.
- *Fix:* "The Son of Man passages (46–69) are read as prophecy of Christ (Asale); how 71:14 is read is not fixed in any published church statement known to us. The church keeps its own 365-day calendar while reading 72–82 as God's ordering of the lights." Cite `asale-enoch-2020`.

**8. Major: canon.accepted_by, "The early church" row.** It says: "By the 400s it had dropped out of use outside Ethiopia."
- This contradicts book.json's own evidence:
  - the Akhmim codex, copied in the 400s–600s and buried with a Christian;
  - the Coptic Antinoe fragment, 500s–600s;
  - the 8th-century Latin excerpt;
  - Syncellus, about AD 810, who quotes it at length;
  - how_to_read, which says it was "slowly set aside outside Ethiopia".
- It also assumes the book was in use in Ethiopia by the 400s. That is not shown, since the translation date (AD 400–600) is itself an estimate.
- *Fix:* "From the 300s on, church leaders increasingly set it aside, though Christians in Egypt still copied it in the 400s–600s and Byzantine chroniclers quoted it into the 800s. Only in Ethiopia did it remain in the Bible."

### Minor

**9. Minor: rejected_why, Decretum Gelasianum.** The writer's reading is **correct**, and now verified. The standard text (von Dobschütz) has "Liber de Ogia nomine gigante qui post diluvium cum dracone ab hereticis pugnasse perhibetur apocryphus" ("after the Flood"), and no line names Enoch. Remove the first-person hedge ("as far as I know", "This point should be treated as uncertain"). The page does not speak in Claude's voice outside the labeled AI analysis and the spec boxes. *Fix:* "The Decretum Gelasianum (probably 500s) is often said to reject 1 Enoch, but it does not name it. It rejects a 'book about the giant named Og', who heretics said fought a dragon after the Flood, which may come from the related giant traditions."

**10. Minor: rejected_why, "Church fathers who doubted it", leaves out Athanasius.** The Coptic part of his 39th Festal Letter (AD 367) mocks those who claim to have a book of Enoch when there was no Scripture before Moses. Check the wording against D. Brakke's translation before adding. This is the earliest explicit Alexandrian rejection, and it bears on the Coptic church's stance, which the Oriental Orthodox row now sources only to Cowley and Ullendorff. The Tyndale Bulletin article on Jude's use of Enoch also notes that Festal Letter 39 excludes the Enochic traditions.

**11. Minor: accepted_by early church row, and rejected_why, on Barnabas.** "Quotes Enoch, once introducing it as 'Scripture' (Barnabas 16.5)." Barnabas 16.5 does not name Enoch. It introduces, as "the Scripture says", a loose paraphrase like 89:56 and 89:66–67. The passage that names Enoch is **Barnabas 4.3** ("as Enoch says"). *Fix:* "Barnabas cites Enoch by name (4.3) and introduces a passage like 89:56, 66–67 as 'Scripture' (16.5)."

**12. Minor: rejected_why, Origen.** I verified *Against Celsus* 5.54 (ANF: "the books which bear the name Enoch do not at all circulate in the Churches as divine"); "not generally held as divine" slightly softens *ou panu*. "Spoke of it elsewhere as accepted only by those who wish" has no citation. Give it: *Commentary on John* 6.42 (§217), "if anyone cares to accept the book of Enoch as sacred". See also *Homilies on Numbers* 28.2.

**13. Minor: cited_in, Jude 14–15.** "No one disputes that this is a quotation" goes too far. Some conservative interpreters hold that Jude drew on oral tradition or the real Enoch, not on the book. The book.json card on Jude 14 says as much in its Evangelical row ("a genuine saying may have been kept"). *Fix:* "Almost all scholars see a quotation of 1:9; a few hold that Jude and the book share an older saying."

**14. Minor: cited_in kinds and anchors.**
- *Revelation 14:20.* Marked "allusion", but the body says "perhaps a shared image of war". Use "shared tradition" or "disputed".
- *Revelation 6:9–11 at 47:4.* This is a Parables passage, but there is no caveat about the Parables' date, although the Gospel entries carry one. The closer, earlier parallels are 9:3, 9:10, 22:5–7 (Abel's spirit crying out) and 97:3–5. Add those and the caveat.
- *2 Peter 2:4.* Could note that the Greek of 20:2 already uses "Tartarus", which strengthens the link.

**15. Minor: accepted_by, Ethiopian row ("since when").** The brief requires "since when". "Not known" is honest, but the row could give the earliest firm evidence. Ge'ez manuscripts survive from the first half of the 1400s (Lake Tana 9). Fifteenth-century Ethiopian writings cite Henok as Scripture; check the details in Asale 2020 or Erho and Stuckenbruck 2013. The phrase "read and taught with the prophets" has no source. Neither traditions card 1 nor card 3 cites `asale-enoch-2020`, the one monograph on this exact question. Both rely on Cowley's six-page 1974 canon article, which does not discuss Jude. Add Asale to the Ethiopian rows of the canon block, card 1 and card 3.

**16. Minor: canon.provenance, Parables dating.** It gives Milik's AD 270 and the Enoch Seminar majority, which is correctly reported: Camaldoli 2005, in Boccaccini, ed., 2007, with most favoring the late 1st century BC or early 1st century AD. It leaves out the minority late-1st-century AD dates (Knibb 1979, Mearns 1979; Hindley's AD 115–117), which part 037-071 reports. These matter for the direction of the Gospel links (see 6). Add one sentence.

**17. Minor: canon.summary, facts and how_to_read on the Beta Israel and "Jews".**
- The summary says the book is Scripture "for the Beta Israel, Ethiopia's ancient Jewish community", and in the same breath that "Jews... do not count it as Scripture". Say "Rabbinic Judaism" or "most Jews".
- The banner drops the hedge in accepted_by ("treat the details as uncertain"). Their use of Enoch and Jubilees as holy books is reported (Ullendorff; Jubilees is canonical in Haymanot practice). How "ancient" the community is remains disputed.
- The tier label in `app.js` says "Scripture only in the Ethiopian and Eritrean Orthodox Tewahedo churches", which sits awkwardly next to the Beta Israel clause.
- how_to_read's suggested citation names only "the Ethiopian Orthodox churches". Add "and Eritrean".

**18. Minor: accepted_by, "Modern groups" row.** Rastafari, Hebrew Israelite and Hebrew Roots use is stated with an empty source list. The claim is broadly true for some groups (for example, some Hebrew Israelite bodies and some Rastafari readers), but it needs a source or softer wording ("are reported to").

**19. Minor: cross-file canon inconsistency.** book.json says that Enoch is in both the "narrow" and the "broad" counting of the 81-book canon. That fits Cowley, where the narrower and broader canons differ mainly in the New Testament church-order books. Part 091-108's card "Is 1 Enoch inspired Scripture?" says "Henok is part of the church's broader canon of the Old Testament", which implies it is not in the narrower one. Flag this for the 091-108 writer.

**20. Minor: authorship, "Critical scholarship" row.**
- *Examples of pseudonymity.* "Daniel, Baruch, Ezra": the canonical book of Ezra is not pseudonymous. The writings meant are **4 Ezra** and **2 Baruch** (the works.json names). As written, "Baruch" auto-links to the deuterocanonical Baruch.
- *Genesis 5:23.* "The Astronomical Book [draws] on Genesis 5:23" is not an established link. The book's year is 364 days, not 365, and the link is the writer's own spec theory. Drop it, or say "may reflect".

**21. Minor: audience.to.** "Later the whole book was read by Jews at Qumran" is wrong. The Parables are absent there, and the "Dead Sea Scrolls copies" section says the book "was not yet one book". *Fix:* "most of its parts were read at Qumran".

**22. Minor: reliability section 1.** It lists "named archangels (Michael, Gabriel, Raphael, Uriel)" among ideas "that the New Testament takes for granted". The New Testament names only Michael and Gabriel; Raphael appears in Tobit, and Uriel in no book of either canon. *Fix:* "named archangels (the New Testament names Michael and Gabriel; Enoch adds Raphael, Uriel and others)".

**23. Minor: reliability section 2.** "The Aramaic... covers perhaps a fifth of the book" has no source and seems high for the surviving pieces. Give a source (Milik; Nickelsburg's introduction) or say "a small part".

**24. Minor: reliability section 4(a).** It sets the 364-day calendar "against the calendar used in the Temple and assumed in the Bible's feasts". The Bible never says which calendar its feasts follow. Jaubert and others argue that the 364-day year was once priestly, which part 072-082 itself reports. *Fix:* "against the lunar-solar calendar kept in the Second Temple and by later Judaism and the church."

**25. Minor: spec, theories 2 and 3.**
- *Theory 2.* "My only addition is that the Genesis number may have been the spark" is not new. Linking Enoch's 365 years to the solar year is standard (Charles; VanderKam 1984 discusses it alongside Enmeduranki). Either find a genuinely new angle or drop the claim to originality.
- *Theory 3.* "Each part of 1 Enoch returns to Noah" is false for the Astronomical Book (72–82). Say "most parts".

**26. Minor: outline and subtitle use the site's voice for authorship.**
- Outline row 108: "Another book by Enoch" states authorship as fact. Use its self-description: "'Another book that Enoch wrote', as it calls itself".
- The subtitle "the visions of the man who walked with God" reads as the site's claim. Consider "visions in the name of the man who walked with God".

**27. Minor: canon.provenance, "Five books".** "Birth of Noah (106–107): by the 100s BC (found in 4Q204)." 4Q204 dates to the late 1st century BC, so it does not support "by the 100s BC". Give the real basis (its language and its links to the Genesis Apocryphon and 1Q19), or say "by the 1st century BC".

**28. Minor: traditions card 1, Anglican row.** "So it has no church use at all" goes beyond Article VI, which governs what is read in church and appealed to for doctrine. *Fix:* "so it has no place in the church's public reading."

**29. Minor: sources.**
- Hilary's comment on Psalm 133 (Tractatus super Psalmos 132) has no source key anywhere. Add `hilary-psalms`.
- canon.s also lacks `chrysostom-genesis`, `barnabas`, `targum-gen`, `bavli-yoma` and `asale-enoch-2020`, all of which the block relies on.
- The Oriental Orthodox rows of traditions cards 1 and 3 cite only Cowley and Ullendorff, which are studies of Ethiopia. Add a Coptic or Syriac canon source, or Metzger.

**30. Minor: canon.provenance, "The Greek witnesses", Vatican Greek 1809.** "Medieval" is fine; the manuscript is 11th-century. Part 083-090 correctly says the text is an excerpt quoted inside another work, not a plain copy, so add "as a quotation inside another text". Without that, a reader would count it as a manuscript of 1 Enoch.

**31. Minor: the Ethiopic manuscripts section.** "Knibb's edition (1978) printed the 18th-century Rylands Ethiopic manuscript 23" is **correct**: the John Rylands catalogue dates it to the 18th century, with Enoch, Job and Samuel–Kings. But Rylands 23 is an Ethiopic II-type witness, so writers should not cite it as Ethiopic I, which `tools/agent-writer-works.md` implies. No part does so now. Consider adding "an Ethiopic II-type text" here so that none of them does later. "Well over a hundred manuscripts" is plausible but has no source. Erho and Stuckenbruck (2013) is the right source; give their count.

## Checked and found correct

- **Qumran dates:** 4Q201 (200–150 BC), 4Q202 (mid-100s BC), 4Q204 and 4Q205 (late 1st century BC), 4Q206 (first half of the 1st century BC), 4Q207 (150–125 BC), 4Q212 (mid to late 1st century BC), 4Q208 (about 200 BC), 4Q209 (turn of the era), 4Q210 (1st century BC) and 4Q211 (second half of the 1st century BC). These agree with Milik's dates as I know them and with the parts. *Milik's PDF could not be fetched; the archive.org host was refused through the proxy. These are checked from memory, not from the page.*
- **4Q204's contents:** 1:9, Dream Visions, the Epistle and 106–107.
- **XQpapEnoch:** 8:4–9:3, published by Eshel and Eshel, DSD 2005.
- **7Q4, 7Q8 and 7Q12:** identified as 103:3–4, 7–8 (Nebe, Puech, Muro), and the identification is disputed.
- **P.Oxy. 2069:** Milik's identification as 77–78 and 85–87, and the doubts about it.
- **Coptic Antinoe fragment:** 93:3–8, published by Donadoni in 1960.
- **Latin:** 106:1–18 in British Library Royal 5 E XIII (8th century), published by M. R. James in 1893.
- **Michael the Syrian:** his excerpt from chapter 6.
- **Akhmim codex:** 1:1–32:6, with 19:3–21:9 copied twice, published in 1892.
- **Chester Beatty–Michigan papyrus:** 97:6–107:3, with Melito, published by Bonner in 1937.
- **Lake Tana 9:** Ethiopic I, first half of the 1400s.
- **Peiresc's manuscript:** a different Ethiopic book, identified by Ludolf.
- **The book's journey to Europe:** Bruce (1773; copies to Paris and the Bodleian), de Sacy (1800), Laurence (1821; Ge'ez text 1838), Dillmann (1851, from five manuscripts) and Charles (1893, 1906, 1912).
- **Patristic and conciliar texts:**
  - Hilary on Psalm 132/133 ("some book"; "not in the book of the Law");
  - Jerome, *De viris illustribus* 4;
  - Tertullian, *On the Apparel of Women* 1.3 (Noah, Ezra, the Jews' rejection, Jude);
  - *Apostolic Constitutions* 6.16;
  - the Stichometry of Nicephorus (Enoch, 4,800 lines, among the apocrypha);
  - Augustine, *City of God* 15.23 and 18.38, on why the books were kept out;
  - Chrysostom, *Homilies on Genesis* 22;
  - Justin, Athenagoras, Calvin and Luther (Genesis and the Jude preface);
  - Doctrine and Covenants 107:57.
- **Rabbinic texts:** Mishnah Sanhedrin 10:1, Genesis Rabbah 25.1 and 26.5, Yoma 67b, and Targum Pseudo-Jonathan on Genesis 6:4.
- **Sources:** every key resolves; the build passes.
- **Structure:** "Ethiopian Orthodox" and "Oriental Orthodox" are separate rows in all three cards. The reliability analysis has four separate parts and ranks no church. No em-dashes.

## Fixes applied

All changes are in book.json and sources.json. After them, `node tools/build.js --check 1En` reports 0 errors and 0 warnings.

1. Fixed. The Ethiopian row of the Genesis 6 card now uses one wording, sourced only to `asale-enoch-2020`; Ephrem is cited only in the Oriental Orthodox row. The wording, for the part writers' cards to match: "Both readings are found. The church reads 1 Enoch as Scripture, and its text makes the Watchers angels who came down to women (6:1–7:2). But according to Bruk Ayele Asale, the traditional andəmta commentary often explains the "sons of God" as children of Seth who came down from the holy mountain to the daughters of Cain, the story told in the Ethiopic Conflict of Adam and Eve. Teachers differ." The cards in 001-036 and 091-108 are not mine to edit.
2. Fixed. The Catholic row now gives Augustine's actual argument in 15.23: the sons of God are Seth's line, called "angels of God" in some Septuagint copies; he doubts that God's holy angels could have fallen so; and he leaves open the stories of spirits who lay with women.
3. Fixed. Jerome followed the Hebrew canon. Augustine accepted a wider Old Testament (City of God 18.36, on the Maccabees), yet noted that Enoch was not in the canon kept by Israel's priests (15.23).
4. Fixed. Genesis 5:21–24, Leviticus 16:8–10 and Deuteronomy 33:2 are out of cited_in. They are now in a new provenance section, "What it builds on in the Hebrew Bible", which also covers Numbers 24, Zechariah 14:5, Ezekiel 1 and Daniel 7. Genesis 6:1–4 stays in cited_in as "disputed", worded as Milik's minority view. The Leviticus text now gives the Aramaic name ʿAsaʾel (4Q201, 4Q202), says "Azazel" was probably assimilated to Leviticus 16, and says that how far the passage models the scapegoat is debated (Hanson; Nickelsburg).
5. Fixed. I added 11 entries, each with a strength rating:
   - Matthew 25:41 (allusion)
   - Revelation 9:1 (allusion)
   - 1 Peter 1:10–12 (shared tradition)
   - Revelation 8:3–4 (shared tradition)
   - Revelation 12:7–9 (shared tradition)
   - Revelation 1:14 (shared tradition)
   - John 14:2 (shared tradition)
   - Luke 1:52 (shared tradition)
   - Acts 3:14 (disputed)
   - 1 Thessalonians 5:3 (disputed)
   - Jude 4 (disputed)

   cited_in now has 35 entries.
6. Fixed. The verdict and section 1 now say: Jude and 2 Peter; probably 1 Peter and Revelation; and the Gospels' Son of Man sayings only if the Parables are earlier. Section 1 also names the later-date view.
7. Fixed, using the wording you proposed: the Son of Man passages are read as prophecy of Christ (Asale); the reading of 71:14 is not fixed in any published church statement known to us; the church keeps its 365-day calendar while reading 72–82 as God's ordering of the lights.
8. Fixed. The "dropped out of use by the 400s" sentence is gone. It now says the book was increasingly set aside from the 300s on, still copied in Egypt in the 400s–600s, and quoted by Byzantine chroniclers into the 800s, and that only in Ethiopia did it remain in the Bible.
9. Fixed. I used your wording and removed the first-person hedge.
10. Fixed. Athanasius is added, quoting Brakke's translation of paragraph 21: "Who has made the simple folk believe that those books belong to Enoch even though no Scripture existed before Moses?" I checked that sentence through academia.edu. It is also cited in the Coptic row of accepted_by and in the Oriental Orthodox rows of cards 1 and 3. New key: `brakke-festal39`.
11. Fixed. Barnabas 4.3 now carries the citation by name, and 16.5 the passage like 89:56, 66–67 introduced as "Scripture".
12. Fixed. Origen now reads "did not at all circulate in the churches as divine" (Against Celsus 5.54), and Commentary on John 6.42 is added with its proviso. New key: `origen-john`. I could not reach a translation of the Commentary on John; that wording comes from my memory and yours.
13. Fixed, along the lines you proposed.
14. Fixed. Revelation 14:20 is now "shared tradition". Revelation 6:9–11 is anchored at 22:5, cites 9:3, 9:10, 22:5–7 and 97:3–5, and warns about the Parables' date. 2 Peter 2:4 now notes that the Greek of 20:2 names Tartarus.
15. Fixed. The Ethiopian row now gives the earliest firm evidence: Lake Tana 9 and other manuscripts from the first half of the 1400s, and formal quotations in 13 Ethiopic writings of the 1400s–1600s. The quotation count comes from the DFG critical-edition report, new key `dfg-enoch-edition`. The unsourced phrase "read and taught with the prophets" is gone. Asale is added to the Ethiopian rows of the canon block and of cards 1 and 3.
16. Fixed. I added the later dates: Knibb and Mearns (1979), and Hindley (about AD 115–117).
17. Fixed. The summary now says "Rabbinic Judaism" and that the Beta Israel are "reported" to count it among their holy books. how_to_read now says "Ethiopian and Eritrean". The tier label in app.js is outside my files.
18. Softened. The row now says "are reported to", and it says that no reliable survey exists. I could not find a scholarly source for the Rastafari and Hebrew Israelite claims.
19. Flagged, not fixed: the 091-108 card should say Henok is in both the narrower and the broader canon.
20. Fixed. The examples are now 4 Ezra and 2 Baruch. The Genesis 5:23 link now says "may reflect".
21. Fixed, using your wording "most of its parts were read at Qumran".
22. Fixed.
23. Fixed. It now says "only a small part".
24. Fixed. The text now says "lunar-solar calendar kept in the Second Temple and by later Judaism and the church", notes that the Bible never names its calendar, and mentions Jaubert.
25. Fixed. Theory 2 (365 years) is dropped, since it was not new. Theory 3 now says "most parts", with the Astronomical Book named as the exception.
26. Fixed. The subtitle is now "visions in the name of the man who walked with God", and outline row 108 quotes the chapter's own description of itself.
27. Fixed. It now says "by the 1st century BC (4Q204), and probably earlier", citing the links to the Genesis Apocryphon and 1Q19.
28. Fixed, using your wording "no place in the church's public reading".
29. Fixed. Added `hilary-psalms`. canon.s now includes chrysostom-genesis, barnabas, targum-gen, bavli-yoma, asale-enoch-2020, hanson-rebellion, the Parables-dating keys, jaubert-date and metzger-canon. The Oriental Orthodox rows now cite Brakke and Metzger.
30. Fixed. The Vatican manuscript is now dated to the 11th century and described as "quoted inside another text".
31. Fixed. Rylands 23 is labeled an Ethiopic II-type text. "Well over a hundred" is replaced with verified figures: Erho and Stuckenbruck describe more than twenty copies new to scholars, and the new edition uses at least 33 manuscripts, against 8 in Knibb's edition. I could not verify a total count. I added page numbers 87–133 to `erho-stuckenbruck-manuscript`.

