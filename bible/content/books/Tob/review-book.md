# Hostile review: Tobit book-level files (book.json, sources.json)

Reviewed: `content/books/Tob/book.json` (title, lead, facts, authorship, audience, outline, lenses, sections, spec, prompts, topics, reading, both traditions cards, and the whole `canon` block) and `content/books/Tob/sources.json`. Checked the Greek claims against `texts/orig/Tob.json` (`grc` = Sinaiticus, `grc_b` = Vaticanus) and the Latin claims against `texts/src/Tob.lat.json`. Checked consistency with the Plain in `parts/01-06/plain.txt` and `parts/07-14/plain.txt`, the only part files so far. Every source key resolves, locally or in `content/sources.json`. `node tools/build.js --check Tob` gives **1 error**: "chapters.json is missing". That comes from the parts still being in progress, not from book.json. 245 verses.

## Verdict

This is a strong, well-sourced draft. Almost every claim the writer marked as "from memory" checks out:

- **Councils, decrees and confessions:** the Hippo/Carthage, Innocent I, Florence and Trent lists; Trent's "confirming dogmas" sentence and its anathema; Vatican I; the wording of Article VI, Westminster 1.3, Belgic 6 and London 1689 1.3; Wesley dropping the Apocrypha paragraph.
- **Orthodox sources:** Dositheus Q. 3, Philaret Q. 31–35 and Ware's "lower footing".
- **Catholic texts and ancient writers:** the Catechism (120, plus citations of Tobit on alms and marriage); Origen to Africanus; Polycarp 10.2; 2 Clement 16.4; Cyril; Rufinus; Augustine *DDC* 2.8.13; Josephus *Ag. Ap.* 1.38–41.
- **Jerome and the Vulgate:** Jerome's prefaces and the Vulgate readings (4:16, 6:18–22, 8:4–5, 11:9).
- **Other writers:** Drum's "Enemessar = Sargon" and Archibald Alexander's "palpable falsehood" and "fabulous".
- **Greek claims:** all of them (Enemessar, 1:15, forty/fifty days, 5:6, 12:9, 12:12 *mnēmosynon*, 12:15 in the shorter Greek, 14:1 and 14:11 ages, 14:4 Nahum/Jonah, 14:15).

The book is never called Scripture in the site's own voice, except for a mild "older Scriptures" twice. Each church's view is stated with care. The reliability analysis is labeled as Claude's, has the four required parts and ranks no church.

It still needs work before it ships:

- **One answer mixes Catholic and Orthodox grounds.** It credits the Orthodox with a canon argument resting on Florence and Trent.
- **cited_in is incomplete.** It leaves out several standard New Testament parallels, including Matthew 6:1–18, which the page itself leans on twice.
- **Two traditions are missing or thin.** The Anglican row leaves out the Church of England's own Homily on alms, which quotes Tobit. Anabaptist/Amish use of Tobit is missing.
- **Two facts are garbled.** The span of GIII is given wrongly, and an authorship line ("medieval Latin Bibles added...") has no basis I can find.
- **The rest are small.** There are wording slips against the Plain and loose quotations.

Findings: **0 critical, 6 major, 22 minor.**

## Findings

### Major

**1. Major: canon.rejected_why, "How the churches that keep it answer", *On the canon*.**
- *The problem.* It says "Catholic and Orthodox teachers answer... The canon was the church's to recognize, as Hippo, Carthage, Florence and Trent did." The Orthodox churches do not receive Florence: the union was rejected in the East. Trent is a Western council they never accepted. Their own authorities are the Septuagint in use, Apostolic Canon 85, Trullo (692), which received the North African canons, and Jerusalem 1672. As written, the strongest Orthodox case is replaced by the Catholic one.
- *A second overreach.* "Most churches read Tobit as Scripture, as Polycarp, Cyprian and Augustine show." Polycarp echoes a saying with no attribution (*Phil.* 10.2). That shows use, not Scripture status.
- *Fix:* split it: "Catholic teachers point to Hippo, Carthage, Innocent I, Florence and Trent. Orthodox teachers point to the Septuagint the church has always read, and to Jerusalem (1672)." Then: "Cyprian and Augustine cite it as Scripture; Polycarp already repeats its saying on alms."

**2. Major: canon.cited_in is incomplete.**
- *The rule.* The brief asks for every place in the 66 books that quotes, alludes to, or is argued to depend on Tobit.
- *What is missing.* These are standard in the lists of parallels (for example the NA28 index of allusions, and the commentaries of Fitzmyer and Moore):
  - **Matthew 6:1–18** at 12:8: prayer, fasting and alms, the triad of Tobit 12:8. reliability §1 and how_to_read both send the reader to Matthew 6:1–18, but cited_in leaves it out. This is the most serious gap.
  - **Revelation 1:4; Revelation 4:5** at 12:15: the seven spirits before the throne.
  - **Revelation 5:8** at 12:12/12:15 (shorter Greek): the prayers of the saints.
  - **Matthew 18:10** at 12:15: angels who see the Father's face, the guardian-angel text that Catholic and Orthodox writers join to Raphael.
  - **1 Thessalonians 4:4–5** at 8:7: marriage "not for sexual immorality" or "in passionate lust like the Gentiles".
  - **1 Timothy 1:17** at 13:6 and 13:10: "the King of the ages".
  - **Matthew 11:25 / Luke 10:21** at 7:17: "Lord of heaven and earth".
  - **Luke 14:13** at 4:7 and 2:2: inviting the poor.
  - **2 Corinthians 9:7** at 4:7 and 4:16: not giving "with a grudging eye".
  - **Luke 11:41** at 12:9. rejected_why already uses this verse as the Catholic answer on alms.
- *Fix:* add each with an honest strength rating. Most are "shared tradition"; Matthew 6:1–18 and Revelation 1:4/8:2 are often called probable allusions.

**3. Major: Anglican rows (canon.accepted_by "Anglican Communion"; card 1; card 2).**
- *What the rows say.* They say only that Tobit is read and not used for doctrine. The Church of England's own authorized treatment of Tobit's most disputed teaching is left out: the Second Book of Homilies, "An Homily of Alms Deeds" (1563), which Article XXXV commends.
- *What the Homily does (from memory).* It quotes Tobit 4 and 12:9 (alms "purge from all sins" and "deliver from death") as a lesson taught by "the Holy Ghost" in Scripture. It then explains that the cleansing is by Christ's blood, with alms as the fruit and evidence of a living faith. The Early English Printed Sermons database matches a sentence of the Homily ("washeth away synnes") to Tobit 12:9, which confirms that the Homily draws on Tobit. I could not fetch the full text of the Homily (the Toronto copy redirects), so the "Holy Ghost" wording is from memory. Check it before you quote it.
- *Why it matters.* This is the Anglican answer in its strongest form. It is also a Reformation church giving the Protestant reading of 12:9 that the "Reformers' doctrinal objections" section implies no Protestant held.
- *Fix:* add one sentence and a source key (`homilies-alms`) to the Anglican rows, and a line in rejected_why ("Not every Protestant church rejected the alms texts: the Anglican Homily...").

**4. Major: a tradition with a distinct view is missing: Anabaptists, especially the Amish.**
- *The evidence.* The Froschauer Bible that Swiss and Amish Anabaptists used includes the Apocrypha. Old Order Amish wedding sermons are traditionally built on Tobit, which Wikipedia's "Book of Tobit" also reports. That is a living, Tobit-specific use, distinct from both the Lutheran/Anglican and the Reformed/Baptist positions.
- *Fix:* add an "Anabaptist (Amish, Mennonite)" row to accepted_by and card 1. Say what is reported: not Scripture in Mennonite confessions; read with respect; Tobit the traditional text of the Amish wedding sermon. Source it to Kraybill (*The Riddle of Amish Culture*) or a Mennonite encyclopedia (GAMEO, "Apocrypha"), not Wikipedia.

**5. Major: authorship, "Traditional view": "medieval Latin Bibles added that Tobias's family told the story."**
- *No basis found.* No source is given, and I can find no basis for it.
- *What the Latin actually says.* The Vulgate does not add a note on who told the story. At 12:20 Jerome's angel says "narrate omnia mirabilia eius" ("publish all his wonderful works", Douay). At 12:22 "narraverunt omnia mirabilia eius" ("they told all his wonderful works"). Neither concerns writing the book.
- *A point that matters more.* Jerome's Latin tells the whole book in the third person, with no first-person 1:3–3:6. So for Catholic readers of the Vulgate, the "Tobit wrote it" argument from the first person was not available.
- *Fix:* delete the clause, or replace it with what the texts support: "In Jerome's Latin the whole book is told in the third person, and the angel tells them to make known God's wonders (Vulgate 12:20)." If the writer has a source for the original claim, cite it. Otherwise treat it as invented.

**6. Major: GIII's range ("Two Greek books of Tobit" section; canon.provenance "The Greek forms").** Both say GIII covers "6:9–13:8". The NETS introduction to Tobit, which follows Hanhart's Göttingen edition, says GIII is in minuscules 106 and 107 and "preserves the text of only 6.9–12.22". Those manuscripts give GI for 1:1–6:8 and 13:1–14:15. Other secondary accounts give other ranges: one popular site says "6:8–13:6". Fix: "a third form (GIII), in minuscules 106 and 107, for 6:9–12:22 (Hanhart)", with `hanhart-tobit` cited. Hanhart also calls it "a secondary text-form fundamentally related to GII", so "between the other two" should become "close to GII".

### Minor

**7. Minor: card 1, Ethiopian row: "among the 46 Old Testament books of the church's 81-book Bible".** The number depends on how the books are counted. In one count, which Wikipedia attributes to the narrower canon, the 81 books are 54 OT + 27 NT. Another common count gives 46 OT + 35 NT. Since accepted_by says only that Tobit is in both of Cowley's counts, drop "46" ("among the Old Testament books of the church's 81-book Bible, in both ways of counting it"). Add "and Eritrean" to the Ethiopian rows, as the 1 Enoch review did.

**8. Minor: cited_in, Revelation 8:2–4: the rating does not match the text.** It is rated "allusion", but the body ends "direct use of Tobit is possible but not proven". Use "disputed" or "shared tradition", or keep "allusion" and say "probable allusion (many commentators)". Rate the new Revelation 1:4 entry in the same way.

**9. Minor: loose quotations in quotation marks.**
- *Trent.* Card 2 has "with equal devotion". The council says "pari pietatis affectu ac reverentia", "with an equal affection of piety and reverence" (Waterworth). Quote that, or drop the quotation marks.
- *Westminster.* accepted_by has used only "as other human writings". The text is "nor to be any otherwise approved, or made use of, than other human writings."
- *London Baptist.* Card 2's Baptist row cites London 1689 1.3 for "doctrine rests on the 66 books alone". 1.3 is the Apocrypha clause; the 66 are listed in 1.2. Cite 1.2–3. London 1689 also adds "or rule" to Westminster's "canon", so "repeats Westminster's words" should be "nearly repeats".

**10. Minor: rejected_why, Jerome section: "Cyril of Jerusalem kept to the Hebrew list alone".** Cyril's 22 books include Baruch, Lamentations and the Letter of Jeremiah with Jeremiah (*Cat.* 4.35), which are not in the Hebrew canon. He did leave out Tobit. Say "Cyril of Jerusalem gave a 22-book list without Tobit".

**11. Minor: canon.provenance, Ahiqar.**
- *11:18.* The page says Tobit has Ahiqar "bring him to the wedding feast (11:18)". The Plain and the Greek have Ahiqar and Nadab coming to Tobit to rejoice. Fix: "come to share his joy at the homecoming (11:18)".
- *The Elephantine papyrus.* The page says it "tells of... [how he] hid until the king needed him again, and was restored". The papyrus breaks off before the restoration and Nadin's punishment, which are known from the later Syriac, Armenian and Arabic versions (Lindenberger). Say so.

**12. Minor: cited_in, Revelation 21:10–21.** "Tobit's Jerusalem is built of sapphire and emerald". In the longer Greek (13:16) and the Plain, it is the *gates* that are of sapphire and emerald, which is a closer match for Revelation's gates. Use "gates of sapphire and emerald, walls of precious stone".

**13. Minor: cited_in, Matthew 6:19–20 at 4:9.** The note says Tobit "stores up a good treasure". The Plain (4:9) has "put away a good deposit". The link rests on the verb *thēsaurizeis* ("you store up treasure"). Either the Plain should keep "treasure", or the note should explain the Greek. Raise this with the 01-06 writer.

**14. Minor: Greek name forms ("Names and words to know").**
- *Tobit.* "Tōbeith or Tōbit": Swete's Sinaiticus has Τωβείθ, but Vaticanus has Τωβείτ (Tōbeit). The form Tōbit is Alexandrinus's (A, in Swete's apparatus at 1:1).
- *Asmodeus.* Vaticanus has Ἀσμόδαυς (3:8, 3:17), so add "or *Asmodaus*".

**15. Minor: Judaism row: "it has never been read as Scripture in the synagogue".**
- *A real exception.* Weeks, reported on TheTorah.com, notes a medieval Hebrew Tobit (Codex Or. Gaster 28) headed "For the Second Day of Shavuot". That points to liturgical reading in at least some medieval communities.
- *Fix:* "it has never been part of the Jewish Bible, though some medieval communities read a Hebrew Tobit on Shavuot (Weeks)."

**16. Minor: Oriental Orthodox rows.**
- *Sources.* They rest only on Metzger and McDonald. A church source exists, for example the Coptic Orthodox Diocese of Los Angeles page "The Deuterocanonical Books", which calls them authentic and in the Coptic version "in all dialects". Add it.
- *Missing church.* The Assyrian Church of the East has no row, and its Peshitta tradition is uneven for Tobit. Add one line or say it is not covered.

**17. Minor: card 2, "May Tobit be used to establish doctrine?".**
- *Missing rows.* It has no Methodist, Oriental Orthodox or Ethiopian rows, although card 1 has all three.
- *Repetition.* Its Lutheran and Anglican rows largely repeat card 1.
- *Fix:* add the three rows, or fold card 2 into card 1 so the page does not ask nearly the same question twice.

**18. Minor: the site's voice. Twice the page says Tobit "is full of the older Scriptures" and "takes up the older Scriptures"** (provenance; how_to_read). "Older" implies that Tobit is a newer Scripture. Say "the Hebrew Bible" or "the books of the Hebrew Bible".

**19. Minor: spec, "Luke's fish and Raphael's vision".** "I have not found this exact point in the commentaries." The contrast between Luke 24:43 and Tobit 12:19 (angels only seem to eat, while the risen Jesus really eats) is a standard observation in Luke commentaries. Check Fitzmyer, *Luke X–XXIV* (AB 28A), and Nolland on 24:43. Either cite it and drop the claim to originality, or replace the theory.

**20. Minor: how_to_read, "Using it in study or teaching": "It is the best background there is for angels in the Gospels and Acts".** This ranks Tobit above Daniel and 1 Enoch with no basis. Say "one of the best backgrounds".

**21. Minor: accepted_by, Reformed row: "Reformed Bibles printed the Apocrypha into the 1600s, and the habit faded after that."** The Dutch States Bible (1637), ordered by the Synod of Dort, printed the Apocrypha, with a warning, for centuries. The British and Foreign Bible Society stopped printing them only in 1827. Say "Many Reformed Bibles printed them, with warnings, into the 1800s."

**22. Minor: reliability §3, Geography: "ancient writers put at about eleven days' march".** The source is Arrian, *Anabasis* 3.20: Alexander reached Rhagae on the eleventh day, in a forced pursuit of Darius. Say "Alexander, marching hard, took eleven days (Arrian, *Anabasis* 3.20)". That makes the point stronger.

**23. Minor: reliability verdict and §3.**
- *The verdict.* "Catholic teaching allows that" goes slightly beyond the documents. Neither *Divino Afflante Spiritu* nor *Dei Verbum* names Tobit. Say "Catholic teaching on literary forms (*Divino Afflante Spiritu*; *Dei Verbum* 12) leaves room for that, and the Church has made no ruling on Tobit's genre."
- *§3.* "The Orthodox churches have made no ruling" has no source. Soften it to "no ruling known to us".

**24. Minor: works named but missing from works.json.** 2 Clement, Polycarp's *Letter to the Philippians* and the *Story of Ahiqar* are not in `content/works.json` (1 Clement is). Add them so that they auto-link and are tiered. A few claims also have no source key:
- Clement of Alexandria's use of Tobit (canon.accepted_by, early church): add `clement-stromata` (*Stromata* 2.23; 6.12).
- The "Tobias nights" custom.
- The Renaissance "Tobias and the Angel" paintings.

**25. Minor: "Tobit in worship and art": "Cyprian built his treatise *On Works and Almsgiving* on it".** Cyprian quotes Tobit several times, and at length in ch. 20, but he builds just as much on Proverbs, Sirach, Daniel 4 and the Gospels. Say "drew heavily on it".

**26. Minor: the early church row: Athanasius, Jerome and Rufinus "set it among books read in church".** Athanasius's category is books "appointed by the Fathers to be read by those who newly join us" (catechumens), not books read in church. Rufinus's "ecclesiastical" books are the ones read in church. State each one's category.

**27. Minor: Plain points for the part writers.** Book.json depends on these, so they are flagged here:
- *11:4.* Swete's Sinaiticus reads ὁ κύριος ("the Lord"), a slip for ὁ κύων ("the dog"). The Plain has "the dog", and book.json cites 11:4 for the dog. That is right, but it needs a variant entry.
- *5:6.* Swete's Sinaiticus has Gabael living "in Ecbatana" and the distance "from Ecbatana to Garras". The Plain reads Rages both times, following the usual correction. That needs a variant entry too, since book.json's geography argument rests on this verse.

**28. Minor: sources.json.** `charlesworth-otp` is defined but never used. Either cite it with `lindenberger-ahiqar` or remove it. Add keys for the new material: `homilies-alms`, an Amish/Mennonite source, `clement-stromata`, `arrian-anabasis`, `nets-tobit`, and the Coptic page.

## Checked and found correct

- **Lists and decrees:**
  - The Hippo 393 list via Carthage 397 (Breviarium Hipponense), with "Tobias";
  - Innocent I to Exsuperius (405), "Tobiae unus" among the histories;
  - Florence, *Cantate Domino* (1442), the bull of union with the Copts;
  - Trent Session 4, which lists Tobias, receives the books "with an equal affection of piety, and reverence", carries the anathema, and says it will use these "in confirming dogmas, and in restoring morals" (Waterworth, hanover.edu);
  - Vatican I's confirmation of Trent's list.
- **Confessions:**
  - Article VI, verbatim and "as Hierome saith", with Tobias in the 1563 Latin and the 1571 English;
  - Westminster 1.3 and London 1689 1.3 (apart from finding 9);
  - Belgic Confession article 6;
  - Wesley's 1784 Article V, which keeps the list of canonical books and drops the Apocrypha paragraph.
- **Orthodox:**
  - the Confession of Dositheus, Q. 3 ("genuine parts of Scripture", Tobit named);
  - Philaret's Longer Catechism, Q. 31 (22 books), Q. 34 ("they do not exist in the Hebrew") and Q. 35 (Athanasius, "appointed of the Fathers to be read by proselytes"): the numbering in `philaret-catechism` is right;
  - Ware's "lower footing";
  - the OCA Q&A "Canon of Scripture" really exists and calls them "canonical scripture";
  - the Synaxis of the archangels on November 8.
- **Catechism of the Catholic Church:** 120 names Tobit. The Vatican concordance shows Tobit cited at 269, 312, 336, 360, 1434, 1789, 2214, 2300, 2361, 2447 and 2585, which bears out "on almsgiving and on marriage" (1434, 2447; 1611 by name, 2361 quoting 8:4–9). The writer could add angels (336) and the Golden Rule (1789).
- **Lutheran:** Chemnitz's *Examen* (apocrypha not to confirm doctrine); Luther's 1534 heading and the preface to Tobit ("truly beautiful, wholesome, and useful" fiction or drama; LW 35).
- **Fathers and Josephus:**
  - Origen to Africanus (§13: the Hebrews "have them not even in the Apocrypha in Hebrew"; "the Churches use Tobias");
  - Polycarp *Phil.* 10.2 (*eleemosyna de morte liberat*);
  - 2 Clement 16.4 ("almsgiving lightens sin", joined to 1 Peter 4:8);
  - Cyril *Cat.* 4.33–36 (apart from finding 10);
  - Rufinus's "ecclesiastical" books;
  - Ambrose's *De Tobia* against usury;
  - Augustine *DDC* 2.8.13;
  - Josephus *Ag. Ap.* 1.38–41;
  - Athanasius, Festal Letter 39;
  - Jerome's *Prologus Galeatus*, his preface to the books of Solomon and his preface to Tobit (Chromatius and Heliodorus, "the Pharisees", one day's work, the bilingual man);
  - Cajetan reported via Metzger.
- **Catholic magisterium:** *Divino Afflante Spiritu* (1943) on literary forms; *Dei Verbum* 11 (truth "for the sake of salvation") and 12 (truth expressed differently in different forms).
- **Earlier scholarship:** Drum, *Catholic Encyclopedia* 1912, reads Enemessar as Sargon (quoted on taylormarshall.com). Archibald Alexander (1826) says the angel tells "a palpable falsehood", and of the fish story, "If this story does not savour of the fabulous..." (CCEL). The medieval Hebrew and Aramaic texts: Münster (Basel 1542), Fagius (1542) and Neubauer (1878, Bodleian, "Chaldee text").
- **Qumran and dating:** Fitzmyer's DJD 19 (1995) for 4Q196–200, and his 225–175 BC date for the book. Wikipedia also gives "between 225 and 175 BCE". The copies "about 100 BC to the early first century AD" fits Fitzmyer's palaeographic dates as I know them; I did not check these against DJD itself. The Elephantine Ahiqar was copied in the 400s BC.
- **Greek (texts/orig):**
  - Enemessar (1:2);
  - Sennacherib as Shalmaneser's son (1:15 in Sinaiticus; Vaticanus garbles it to "Acherel");
  - forty days in Sinaiticus and fifty in Swete's Vaticanus (1:21; the KJV's 55 comes from another witness);
  - 5:6 two days, mountain and plain;
  - 12:9 *apokathairei pasan hamartian*;
  - 12:12 *mnēmosynon* in both texts (= Acts 10:4);
  - 12:15, where only the shorter Greek has "who present the prayers of the saints";
  - Luke 1:19 against 12:15 (*parestēkasin*);
  - 12:20 "I am going up to the one who sent me";
  - 14:1 aged 112 (Sinaiticus) against 14:11 aged 158 (Vaticanus);
  - 14:4 Nahum (Sinaiticus) and Jonah (Vaticanus);
  - 14:15 Achiacharus (Sinaiticus) against Nebuchadnezzar and Ahasuerus (Vaticanus);
  - the gaps 4:7–18 and 13:7–9, with 11:12 and 11:19 the two single verses.
- **Latin (texts/src):** Vulgate 4:16, 6:18–22, 8:4–5 (the three nights) and 11:9 (the dog wagging its tail) are as described.
- **Liturgy:** the 1662 offertory sentences Tobit 4:7 and 4:8–9; Tobit 8:4b–8 among the Catholic wedding readings; the weekday Mass readings.
- **The Plain:** every other quotation in book.json matches the Plain (4:10, 4:15, 4:17, 5:13, 12:9, 12:12, 12:19, 3:16 "at that very moment", 14:1, 14:15).
- **Structure:** No em-dashes. The reliability analysis is labeled as Claude's, keeps its four parts separate, and ranks no church. Tobit is never called Scripture in the site's own voice (apart from finding 18).

## Fixes applied

1. Fixed. "On the canon" now gives the shared ground and then each church's own authorities. Catholic: Hippo, Carthage, Innocent I, Florence and Trent. Orthodox: the Septuagint in use, Trullo (692), which received the Carthage canons, and Jerusalem 1672. It also says that Polycarp only repeats the saying on alms, while Cyprian and Augustine cite Tobit as Scripture. I did not cite Apostolic Canon 85, because its list does not name Tobit.
2. Fixed. I added ten entries, each with a rating: Matthew 6:1–18 (12:8; it notes that only the shorter Greek has fasting in the triad), Revelation 1:4/4:5 (disputed), Revelation 5:8, Matthew 18:10, 1 Thessalonians 4:4–5, 1 Timothy 1:17, Matthew 11:25 (it notes that "and earth" in 7:17 is only in the shorter Greek), Luke 14:13, 2 Corinthians 9:7 and Luke 11:41. cited_in now has 23 entries. I rated Matthew 6:1–18 "shared tradition", not "allusion", because the longer Greek lacks fasting.
3. Fixed, after checking the wording myself in the archive.org text of the Homily and in Howorth (1906). The verbatim quotations are "The same lesson doth the Holy Ghost also teach in sundry places of the Scripture" and "Mercifulness and alms-giving purgeth from all sins, and delivereth from death". The Homily's explanation is God's grace "vouchsafe[s]" to repute the merciful as clean, with good works the fruit of faith, not the cause of acceptance. It is added to the Anglican row of accepted_by, to both cards and to rejected_why. I used the 01-06 writer's existing `homilies-alms` key word for word.
4. Fixed. Anabaptist rows are added to accepted_by and to card 1. The source is GAMEO, "Apocrypha" (Bender and van der Zijpp, from *Mennonite Encyclopedia* 1:136). GAMEO says Anabaptists denied the Apocrypha inspiration but esteemed Tobit, and that Old Order Amish weddings take the sermon from Tobit; it quotes an Amish ministers' manual ("nevertheless gives a beautiful teaching"). GAMEO does not mention the Froschauer Bible, so I left that out.
5. Fixed. I found no source, so the clause is deleted. In its place: in Jerome's Latin the whole book is in the third person, and the angel tells them to make known God's wonders (Vulgate 12:20). I checked both points in texts/src.
6. Fixed. GIII is now in minuscules 106–107 for 6:9–12:22, with the shorter text elsewhere, following Di Lella's NETS introduction (checked) after Hanhart. "Between the other two" is gone. I did not check Hanhart's own description of GIII, so the page does not say "close to GII". New key `nets-tobit`.
7. Fixed. "46" is dropped, the row says "in both ways of counting", and "and Eritrean" is added.
8. Fixed. The rating stays "allusion", and the text now says "a probable allusion in many commentators' view, but direct use not proven". Revelation 1:4 is rated "disputed".
9. Fixed. Trent now reads "with an equal affection of piety and reverence". Westminster is quoted in full ("to be any otherwise approved, or made use of, than other human writings"). The Baptist row cites London 1.2–3, and "nearly repeats" Westminster, quoting "canon or rule".
10. Fixed. Both places now say "a 22-book list without Tobit".
11. Fixed. 11:18 now matches the current Plain: Ahiqar and Nadab come to share Tobit's joy. The text also says that the Elephantine papyrus breaks off, and that the restoration and Nadin's punishment come from the later versions (Lindenberger).
12. Fixed. It now reads gates of sapphire and emerald, walls of precious stone, and streets of red gems and stone of Ophir, matching the Plain's 13:16–17.
13. Partial. My note now uses the Plain's "deposit" and explains the Greek *thēsaurizeis*. Whether the Plain should keep "deposit" is left to the coordinator and part 01-06.
14. Fixed. Tōbeith (Sinaiticus), Tōbeit (Vaticanus), Tōbit (Alexandrinus); Asmodaus (Vaticanus).
15. Fixed. The row now mentions Codex Or. Gaster 28, headed "For the Second Day of Shavuot", sourced to Simkovich on TheTorah.com (checked), as a medieval custom of some communities. New key `simkovich-tobit-shavuot`.
16. Fixed. Both rows now cite the Coptic Diocese of Los Angeles page (checked: "found in the Coptic version, all dialects"); new key `coptic-la-deuterocanon`. The Assyrian Church of the East is marked "not covered here", because I could not source its practice.
17. Partial. Card 2 now has Oriental Orthodox, Ethiopian Orthodox and Methodist rows, and the Lutheran row is shorter. I kept both cards, because "Is it Scripture?" and "May it ground doctrine?" divide the churches differently: Lutherans and Anglicans answer them differently, and so does the Anglican Homily.
18. Fixed. Both places now say "the Hebrew Bible".
19. Fixed. The theory no longer claims to be original. It says the eat/seem-to-eat contrast "has been drawn by commentators on Luke" and keeps only the fish as my own addition, labeled a guess. I could not check Fitzmyer's or Nolland's commentary on Luke myself.
20. Fixed. It now reads "one of the best backgrounds".
21. Fixed. It now gives the Dutch States Bible (1637) printing them with warnings, and the British and Foreign Bible Society stopping only in 1827. Both facts are from my own knowledge, not checked.
22. Fixed. It now cites Arrian, *Anabasis* 3.20, with Alexander marching hard for eleven days; new key `arrian-anabasis`. A biblical encyclopedia gives the eleven days, and the Arrian reference is from my own knowledge.
23. Fixed. The verdict now says that Catholic teaching on literary forms "leaves room" for reading Tobit as a story, and that the Church has made no ruling on its genre. §3 now says "no ruling known to us".
24. Partial. `content/works.json` now has 2 Clement, Polycarp's Letter to the Philippians and the Story of Ahiqar, in the existing format. `clement-stromata` is added, copied exactly from Deu. I found no source for the "Tobias nights" or for the Renaissance commissions, so both stay hedged ("often called", "often said") with no source key.
25. Fixed. It now reads "drew heavily on it".
26. Fixed. Each writer's own category is given: Athanasius, books "appointed by the Fathers to be read" by new members; Rufinus, "ecclesiastical" books read in church; Jerome, books read for building up the people.
27. Declined here. These are Plain points for the part writers (the variants for 11:4 and 5:6) and are left to the coordinator. book.json's citations of 11:4 and 5:6 match the current Plain.
28. Fixed. `charlesworth-otp` is removed. New keys are added. `homilies-alms` reuses the part's existing definition.

Also matched to the final 07-14 Plain: 12:9 "cleanse away every sin", 12:12 "memorial", 12:15, 13:16–17, 11:18 and 14:15 "Achiacharus king of Media". The 12:15 "present the prayers of the saints" is now always labeled as the shorter Greek. `node tools/build.js --check Tob`: 0 errors, 0 warnings.
