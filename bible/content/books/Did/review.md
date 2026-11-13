# Hostile review: Didache (`Did`), flat folder, including book.json and sources.json

Reviewer: separate agent (not the writer), 2026-11-12. `node tools/build.js --check Did` gives 0 errors and 0 warnings.

## Verdict

This is a careful, mostly honest book. I found no invented source, reading, fragment or quotation. Every Lake quotation, footnote reading (4:3, 9:2, 9:4, 10:4, 11:5, 14:1 twice) and the Apostolic Constitutions quotations I checked (7.22-26, 30, 32) are exact, and the Plain English Translation follows the Greek closely. I checked all 100 verses plus 1:0 against Lake's Greek and found no mistranslation, only a few term-consistency slips. Quoted Bible verses match the site's wording. Its problems are of a different kind. The book states many comparative claims ("the oldest ...", "the first ...") in the site's own voice with no opened source. It attributes views to unnamed "most" or "many" readers. It misuses one Mishnah passage as evidence for Jewish weekly fasts. It gives a reason for the Didache's rejection that no opened source states. It says "the God of David" stands alone among the witnesses, but the Coptic fragment the book itself lists reads differently. Fixing these is mostly deleting or softening sentences, plus one new variant entry. Nothing here needs the text redone.

Sources opened for this review:
- Lake's OCR: introduction, lines 15495-15640; footnote at 14:1 in both scans.
- Eusebius 3.25 (newadvent).
- Athanasius, Festal Letter 39.7 (newadvent).
- Apostolic Constitutions 7 (newadvent 07157).
- Hermas, Commandment 2 (newadvent).
- Sefaria texts of Mishnah Taanit 1:5-6, 2:9; Berakhot 4:1, 6:1, 6:5, 7:3, 8:1.
- Josephus, Against Apion 2.202 (search result quoting Whiston, Roger Pearse, lexundria).
- Early Christian Writings Didache page (Kirby; quotes Kraft, Draper, Patterson, Schnelle, Crossan, Howell-Smith).
- Kraft's textual notes on Didache 6.3-end (ccat.sas.upenn.edu).
- Search snippets for CCC 120 and WCF 1.2. I could not open the full CCC 120 page; the 46/27 counts were confirmed by snippets, and "ends with Revelation" rests on a fragment, so it is not independently confirmed.
- texts/orig Luk, Mat and Bnb Greek (SBLGNT and Byzantine), and the site's own plain.txt, variants and card files.

## Findings

Counts: critical 0, major 6, minor 20.

### Major

**1. Unsourced superlatives in the site's own voice (major).**
Locations:
- notes.json #61 (7:1), #63 (7:3), #69/#70 (8:2), #81 (9:5), #104, #107 (13:3), #109 and #110 (14:1).
- chapters.json: ch. 2 `views.H` ("the oldest Christian text that names abortion, the killing of newborns and pederasty"), ch. 7 `sum`, ch. 8 `views.H`, ch. 9 `views.L`, ch. 13 `views.L`.
- topics.json: `two-ways`, `lords-supper`, `baptism`, `lords-prayer`, `abortion`, `trinity`.
- book.json `lead` and `facts`.

Examples:
- "the oldest writing outside the New Testament to give them for baptism."
- "the oldest text outside the New Testament that allows baptism by pouring."
- "the oldest known witness to a doxology on the prayer."
- "the first time a Christian writing gives church ministers a priestly title."
- "the oldest rule ... that only the baptized may eat and drink."
- "the oldest Christian manual of conduct."

Evidence: `.scratch/Did/sources-checked.md` lists no source for any of them (no Ignatius, Justin, Barnabas dating, Pliny or Tertullian opened). The book also contradicts itself. Its own facts row says the date is "Argued" (AD 50-70 to about 110). Lake says the Two Ways may be pre-Christian and that Barnabas 19:5 has the same abortion line, so "oldest Christian text that names abortion" cannot be asserted when Barnabas is possibly earlier and both may share a Jewish source. STYLE.md rule 2 binds ("never rely on memory for a checkable detail").
Fix: delete the comparatives, or write "an early ..." or "among the earliest surviving ..." only where an opened scholar says so. Name the scholar. This is about 25 sentences; I suggest a script search for `oldest|earliest|first time|one of the earliest`.

**2. Views attributed to unnamed "most", "many" or "some" readers and churches (major).**
Locations:
- notes #12, #57, #63, #66, #73, #101, #110, #122, #123, #124.
- chapters.json ch. 8 (settings `views`), ch. 9 and 10 `readings`, and ch. 16 ("most readers think the end is lost").
- topics.json `anti-judaism` ("Most readers take 'the hypocrites' as Jews") and `prophecy`.
- book.json (`reliability`: "read by some churches as conflicting with forgiveness by grace through faith alone").

Examples:
- #63: "Churches cite this verse on both sides: those who baptize by pouring ... point to it as early permission; those who baptize only by immersion note that it is a fallback."
- #66: "most readers take 'the hypocrites' to be Jews."
- #110: "most readers take chapter 14 as the weekly Lord's Supper."

Evidence: brief-did.md requires "the debate ... with who holds each view, from sources opened". The writer's own `sources-checked.md` says "any named scholar on the meal debate" was not checked and "left out", yet the views stayed in as unattributed majorities. STYLE.md rule 2: "majority" only if an opened source says so. The statements about what churches do (#63, #45, reliability) cite no catechism, confession or named theologian.
Fix: either open a source for each (Niederwimmer, Milavec, Draper, Jefford or a church document that addresses the Didache) and name it, or reduce each sentence to what the text itself shows ("Readers differ; the Greek allows ...").

**3. Note #88 says "the God of David" "stands alone among the witnesses"; the Coptic fragment the book itself lists reads differently. No variant entry exists for 10:6 (major).**
Locations: notes.json #88 (10:6); variants.json (no 10:6 "Hosanna" entry); chapters.json ch. 16 "Where text ends"; notes #126 (16:8).
Evidence: Kraft's textual notes (ccat.sas.upenn.edu, Didache 6.3-end, note at 10:6) say the Greek manuscript reads "God of David" (Georgian "?"), the Coptic reads "house of David", the Apostolic Constitutions "son of David", and Kraft proposes an original "to David's Lord" (Psalm 110:1). book.json `facts` lists the Coptic fragment as covering 10:3-12:2, so 10:6 is in it. The writer never opened it. The same notes say the Georgian version does not stop at 16:8 but continues with a reference to the final judgment. The book says only the Apostolic Constitutions goes on, and ch. 16 "Where the text ends" says the lost lines are unknown. The Georgian is a direct witness to the Didache's own ending, not a later church's rewriting.
Fix: delete "stands alone among the witnesses" (the claim is false for the Coptic). Add a variants.json entry at 10:6 with readings θεῷ (C), "house" (Coptic), υἱῷ (Apostolic Constitutions), each with its witness. Say in #126, ch. 16 and book.json "The ending" that a Georgian version reportedly continues, citing Kraft's notes by URL as a new source key. If the writer will not open it, say nothing about the Georgian. The Coptic entry itself must still be added. Also reconsider the book.json caution that treats "the God of David" as uncertain only because it is "single".

**4. The "hypocrites" and the fast days: misused Mishnah evidence, and an audience claim that the Greek contradicts (major).**
Locations: notes #66, #67 (8:1); topics.json `fasting`, `anti-judaism`; chapters.json ch. 8 `views.J`; book.json `audience.to` and `reliability` §4.
Evidence:
- Mishnah Taanit 2:9 (opened at Sefaria) is about the order of public drought fasts: "the first set of three fasts is on a Monday, Thursday, and the following Monday". It says nothing about a regular weekly Monday and Thursday fast. Yet note #67 says "The Mishnah sets public fasts ... Monday, Thursday"; the `fasting` topic gives it as proof of the "Jewish rhythm"; ch. 8 `views.J` says "The chapter keeps Jewish practice, two fasts a week and prayer three times a day (Mishnah Taanit 2:9; Mishnah Berakhot 4:1)". Berakhot 4:1 does give three daily prayer times. Luke 18:12 says "twice a week" without naming days.
- book.json `audience.to` says the first readers were "keeping Jewish customs such as two weekly fasts and prayer three times a day". The Greek says the opposite for the fasts: "Your fasts must not be with the hypocrites ... they fast on the second day ... you are to fast on the fourth day and on Preparation Day." The church fasts twice a week but on other days, by design.
- Fairness: note #66 and ch. 8 give two views of who "the hypocrites" are (Jews, or Christians who kept Jewish days), but book.json `reliability` §4 states as settled "the sharp word 'hypocrites' for Jews who fast (8:1) applies Jesus' warning to a whole group", and the `anti-judaism` topic says "the Jewish fast days".
Fix:
- Reword #67 and the topic: "Mishnah Taanit 2:9 puts the first public fasts on Monday and Thursday; whether Jews kept a regular Monday and Thursday fast is not shown by that passage" (or open a source that shows it, e.g. the Talmud, and cite it).
- Delete "keeping ... two weekly fasts" from `audience.to`.
- Make `reliability` §4 neutral: "applies Jesus' warning about 'hypocrites' to a group, read as Jews or as Christians who kept Jewish days".

**5. The canon block gives a reason for the Didache's rejection that no opened source states, and contradicts the book's own dating (major).**
Locations: book.json `canon.rejected_why` ("Not by the apostles"), `canon.summary`, `facts` ("Scripture for"), topics.json `canon`.
Evidence:
- `rejected_why` says the rules "look back on the apostles' age rather than coming from it. The early lists judged it by that standard: Eusebius counted it among the rejected writings." Eusebius 3.25.4 (opened, newadvent) says only "Among the rejected writings must be reckoned ... the extant epistle of Barnabas, and the so-called Teachings of the Apostles." He gives no reason for it. The reasons in 3.25.6-7 are about forgeries by heretics.
- The claim "look back on the apostles' age" is the writer's inference. It conflicts with the same book's date row (Audet AD 50-70 would put it in the apostles' age) and is stated as fact.
- Eusebius's category is *notha*, "spurious" (the NPNF translation says "rejected"). The site uses "rejected" three times in its own voice and never says the Greek is *notha* or that NPNF is the translation.
- `summary` ("probably from about AD 100") and the topic `prophecy` ("around AD 100") assert a single date as fact, though `facts` says "Argued".
- `summary` says "in the early church it was valued for teaching converts but set outside the canon". That generalizes one letter of Athanasius (367, verified at 39.7).
Fix:
- Replace `rejected_why` §1 with what is verified: Eusebius lists it among the "rejected" (Greek *notha*, "spurious") with no reason given; Athanasius sets it outside the canon but for catechumens. State that early sources give no stated reason, then label any further reason as Claude's analysis.
- Give the date as "argued" in the summary and topics, or "about AD 100 (Draper)".
- Name the NPNF translation where "rejected" is used.

**6. The `abortion` core and the 2:2 note state Greek and Roman practice without a source and are one-sided on the Jewish side (major).**
Locations: proposals/works/topics/abortion.json ("In the Greek and Roman world, ending a pregnancy and leaving unwanted newborns to die were common. Jews were known for refusing both."); notes #20 and #22 (2:2: "widely practiced and in some circles admired"); chapters.json ch. 2 `sum` and settings.
Evidence:
- brief-did.md: "the Greek and Roman practice, Jewish and Christian teaching, only from sources opened". sources-checked.md opens only Josephus (Whiston) and the site's Tacitus. No source for Greek or Roman practice was opened.
- The Josephus sentence is exact (verified: "forbids women to cause abortion of what is begotten; or to destroy it afterward"). But a search result from the Jewish Women's Archive entry (jwa.org/encyclopedia/article/abortion) says Josephus's own *Antiquities* is more lenient (a money fine for harm to a fetus), and that rabbinic law later "never considered abortion to be homicide". "Jews were known for refusing both" gives only the strong side; the Exodus 21:22-23 Greek and Hebrew difference is not mentioned in the core or in #22. I could not open the JWA article itself; this is a lead for the writer.
- The Tacitus quotation is accurate to the site's wording, but the Latin *agnatis* means later-born children; "newborn" is a gloss. Say so or drop the line.
Fix: open one source on Greek and Roman exposure and abortion (an edition of Musonius, Plutarch or a reference work), cite it by key, or delete the sentence. Add one line that Jewish sources are not uniform (Exodus 21:22-23, and the *Antiquities* passage if the writer opens it). The core is thin for a topic this contested; at least add the Septuagint reading of Exodus 21:22-23 from the site's own Exodus notes.

### Minor

**7. Matthew 5:5 is called "word for word" and is not (minor).**
Location: notes #35, chapters.json ch. 3 `views.N` ("quotes the Beatitude of the gentle word for word"), terms.json entry for πραΰς ("which Didache 3:7 quotes").
Evidence: Didache 3:7 οἱ πραεῖς κληρονομήσουσι τὴν γῆν, with ἐπεί ("since") before it. SBLGNT Matthew 5:5: μακάριοι οἱ πραεῖς, ὅτι αὐτοὶ κληρονομήσουσι τὴν γῆν. It has "blessed", "because" and "they themselves".
Fix: "nearly Matthew 5:5, without 'blessed', and with 'since' for 'because they themselves'".

**8. Note #8: Luke 6:28 "word for word in Greek" holds only for the Byzantine text (minor).**
Evidence: SBLGNT has καταρωμένους ὑμᾶς. The Byzantine text and the Didache have ὑμῖν. Two-line fix: name the text ("as in the Byzantine text of Luke 6:28; SBLGNT has ὑμᾶς").

**9. Note #47 says Barnabas 19:5 has "the line word for word" (minor).**
Evidence: Didache οὐκ ἀρεῖς τὴν χεῖρά σου ... τὸν φόβον τοῦ θεοῦ; Barnabas 19:5 οὐ μὴ ἄρῃς τὴν χεῖρά σου ... φόβον θεοῦ. Say "nearly the same".

**10. `ὄρος` rendered "hills" (minor).**
Locations: plain.txt 9:4; notes #79; chapters.json ch. 9 `sum`.
Evidence: LSJ ὄρος is "mountain" (and Lake has "mountains"; brief-did.md also says "the mountains"). The site renders ὄρος "mountain" elsewhere. Neither the note nor the terms file gives a reason for "hills". Either use "mountains" or add a "why" in the terms entry for κλάσμα (which already discusses 9:4).

**11. One Greek word, two English renderings, and a note that says they are the same (minor).**
- φθορεῖς: 5:2 "destroyers", 16:3 "corrupters". Note #120 says "'the corrupters' (phthoreis, the word of 5:2)".
- ἀργύριον: 11:6 "money", 11:12 "silver". Note #102 itself says "Argyria ... is money" and then quotes "Give me money".
Fix: one rendering each, or a note.

**12. 4:10 grammar (minor).**
"your slave, man or woman, who hope in the same God" mixes singular and plural; "who hope" refers to both. Suggest "your slaves, man or woman, who hope ..." or "who hopes".

**13. 4:11 "with respect and fear" for ἐν αἰσχύνῃ (minor).**
The note admits the word is "shame" and glosses "modesty". "Respect" softens the Greek; "with modesty and fear" or "in shame and fear" is closer. Barnabas 19:7 (Bnb plain) has the same wording, so align both.

**14. Hedges and "not checked" in content (minor).**
Locations: book.json `sections` ("as reported at Early Christian Writings"); `spec` ("I have not checked a particular study that argues it from this order"); chapters.json ch. 1 `spec` ("not a published reading I have checked"); also the "reports ... quoted at Early Christian Writings" attributions.
STYLE.md rule 2 bans "as reported" and "not rechecked" hedges. The attributions are fine as naming the source; delete the "as reported" phrase and the "I have not checked" clauses (a labeled theory needs no disclaimer of this kind).

**15. Facts from memory, no source opened (minor).**
- #11 "A Roman mile was a thousand paces".
- #15 *quadrans* "the smallest Roman coin".
- #32 Roman officials watched birds "before any public business".
- #58 "meat in the market or at a feast had often been offered to a god first".
- #20 pederasty "widely practiced and in some circles admired".
- Ch. 9 `deep`: "In 1912 many scholars thought the shorter text of Luke ... was the original" (no source; Lake's footnote says only "the earliest text").
Fix: cite a source opened now (LSJ for κοδράντης and μίλιον are on Perseus), or delete.

**16. Note #74 says Mark "and" Paul have the cup "after the meal" (minor).**
Only 1 Corinthians 11:25 says "after supper". Mark 14:23-24 has bread then cup with no "after the meal". Also "By 'the earliest text' Lake meant the shorter text ... in Codex Bezae" is the writer's inference, stated as fact; say "probably" with the reason (Lake's "omits v. 20").

**17. Mishnah Berakhot 6:1 cited for the order "wine, then bread" (minor).**
Location: ch. 9 `views.J`. Berakhot 6:1 (opened) lists the blessings over wine and bread among those over many foods; it gives no order. Berakhot 6:5 (wine before the meal exempts wine after) and 8:1 (order of the blessings over wine and the day, a dispute) are closer. Cite 6:5 or reword.

**18. Chapter 3, 5, 10 and others rely on "See the setting on chapter 1" and one repeated `readers` paragraph (minor).**
The `readers` paragraph is word for word identical in the 1:0 and 1:1-6:3 settings; chapters 3, 4, 5, 6, 7, 8, 10, 11, 12, 14, 15 and 16 point back to it ("See the setting on chapter 1" and similar). brief-did.md: "readers by evidence ... Never one stock line." Chapters 6, 8, 11 and 15 give their own specific readers; the rest should say who is addressed there (the learner in 3:1-4:14; the whole assembled church in 9-10 and 14).

**19. `canon.accepted_by` has only Catholic and Reformed rows; the "no church counts it" claim is unsourced for the others (minor).**
brief-apfathers.md allows dropping a row with no source, so the shortage is fine. But the lead, `facts` and the topic `canon` say "No church counts it as Scripture" for all churches. Search shows the Ethiopian Orthodox church's canon includes church-order books (Sinodos, an Ethiopic *Didascalia*, a different work), and its own "Holy Scriptures" page (eotcmk.org/e/?p=8210, which I could not open) reportedly lists the Didache among theological books, not canonical ones. Open that page and add a sourced Ethiopian row, or write "in no Bible among the churches sourced here".

**20. Variants cover only Lake's footnotes (minor).**
7 entries, one per Lake footnote plus Marana tha. The Oxyrhynchus papyrus (P.Oxy. 1782, 1:3-4 and 2:7-3:2) and the Coptic fragment (10:3-12:2) are named in `facts` but no reading from them is compared anywhere. That is honest (not opened) but leaves finding 3 open. At minimum, add a note at 1:3 and at 10:3 saying which verses those two witnesses cover (from Kirby/Crossan) and that their readings were not collated.

**21. Link of ch. 2 to the `same-sex-relations` topic (minor).**
chapters.json ch. 2 `topics` lists `same-sex-relations` for 2:2 παιδοφθορέω. Note #20 correctly says the word names the sexual abuse of boys, a different subject from consensual relations. Linking a verse that condemns abuse of children to that page, without a line on the difference, may mislead. Add a `pederasty` pointer inside the topic page contribution, or drop the link.

**22. Odd or erroneous phrases in notes (minor).**
- #119 "in the lawless season,, which Lake's margin cites" (double comma).
- #126 P "The Didache's only manuscript ends here, in the middle of a page's worth of thought" is meaningless; also "only manuscript" is wrong, since P.Oxy. 1782 and a Coptic fragment exist (the book says so itself). Say "the one complete manuscript".
- `lead` says it "was known only by name until 1875"; Lake says a "rough reconstruction" was possible from the Apostolic Constitutions and the Church Ordinances. Say "no copy was known".

**23. book.json: "later moved to Jerusalem" (minor).**
`sections` "The discovery and the manuscript" says C "was later moved to Jerusalem". Nothing opened says so (Kirby: "Codex Hierosolymitanus 54", discovered in a monastery in Constantinople; Lake: "Patriarchal library of Jerusalem at Constantinople"). Delete or source.

**24. Short title only transliterated (minor).**
Note #0 gives *Didachē tōn dōdeka apostolōn*. The scan prints ΔΙΔΑΧΗ ΤΩΝ ΔΩΔΕΚΑ ΑΠΟΣΤΟΛΩΝ above the long title (opened, vol. 1 line 15626). The brief asked for it "in a note at 1:0 from the scan". Add the Greek capitals.

**25. Dating of the global source key `didache` and Matthew 6:13 variant (minor, for the lead).**
The writer already lists these in build.md ("late first century" in key `didache` and Mat variant 6:13). I confirm the clash: Lake gives a range, so "late first century" is not his view. No change inside `Did` is needed; list it for the alignment step.

**26. Note #67 and ch. 8: "Preparation Day" gloss (minor).**
The Greek says παρασκευή, defined in note #67 correctly; fine. But the gloss at 8:1 reads "the fourth day and on Preparation Day: Wednesday and Friday" while the plain.txt first mentions "Preparation Day" in the same verse without saying it is the day before the Sabbath. Add "the day before the Sabbath" to the gloss. (Trivial.)

## What I checked and found sound

Listed so the fixer does not re-open them.
- **Greek against the translation.** All verses; no omissions or additions. Tenses and persons: 7:4 `κελεύεις` is rendered "you are to order", with a note; 11:5 and 14:1 follow Lake's emendations with entries.
- **Lake footnotes and variants.** 4:3, 9:4 ("τὸ om. C"), 10:4, 11:5, 14:1 (προσεξομολογησάμενοι C, ἡμῶν C, confirmed against both scans); Marana tha. Lake's margin ref slips in `texts/src/Did.app.json` are correctly decoded in build.md. The Lake quotations in notes, authorship and canon (the three possibilities, "many think", "perhaps especially among Proselytes", "manual of Church instruction", "not a member of 'the Twelve'", "very much what is now called a Missionary", "catechumens before their baptism") are exact.
- **Apostolic Constitutions 7.** 22, 23, 24, 25, 26, 30, 32 quotes exact ("Hosanna to the Son of David", "If any one be holy, let him draw near", "Permit also to your presbyters to give thanks", "After the participation, give thanks in this manner", "great concussion above the clouds", "wicked ... everlasting punishment").
- **Other early texts.** Eusebius 3.25.4 and Athanasius 39.7 wording; Hermas Commandment 2 quotes ("Give to all, for God wishes His gifts to be shared among all"; "render an account to God why and for what they have received", and not in Commandment 4); Mishnah Berakhot 4:1, 7:3 and Taanit 2:9 quotation text; Josephus 2.202.
- **Kirby page.** Audet 50-70 (via Patterson), Schnelle about 110, Draper "c. 100 AD" and "probable" before the end of the first century, Kraft on Syria, Syro-Palestine, Egypt and Asia Minor, Howell-Smith, Bryennios 1883, MS dated June 11, 1056 (Crossan).
- **Barnabas parallels.** 4:9, 19:4-12 Greek and the site's Barnabas wording ("two ways", "abortion", "figure of God"). The book.json claim that Barnabas uses the Didache's English where the Greek is the same is true in the cases I compared.
- **Quotes of other books.** Every note quotation of a Bible verse of 15 characters or more was found in the site's plain.txt files (script run), except the ones listed above and the Swete/Lake/NPNF quotations, which carry their own attribution.
- **Matthew 6:9-13 against 8:2.** Word for word with the site's Matthew except at the three differences listed in note #69; the Mat 6:12 variant already lists the Didache for ἀφίεμεν.
- **Cards named in notes.** Jeremiah 1, Psalm 32, Matthew 6, 7 and 28, Acts 8, 14 and 20, Malachi 1, Ephesians 4 ("Are there still apostles and prophets"), Judith 8 exist.
- **Terms and mechanics.** "the thanksgiving", "overseer", "servant" for παῖς with its note, "Marana tha", "Hosanna", the sorcery/magic-potion entries, "swindler" for ἅρπαξ (as 1 Corinthians 5:10), "sexual sin" for πορνεία. No "Eucharist" in the translation. No em-dashes. Reading level is suitable. works.json names the book "Didache". Chapter pages cover all 16 chapters, and every speech and prayer has a setting.
- **Honest limits.** The writer's decision to leave out the card on 8:3, the Latin, the Birkat ha-Mazon, the Georgian and Ethiopic versions, and named scholars on the meal debate, is consistent with rule 2. Findings 2 and 3 are about sentences that nevertheless claim what was left unopened.

## Fixes applied
Fixer (separate agent), 2026-11-12. Sources opened this session: Kraft, <i>Barnabas and the Didache</i> (1965; updated online edition at ccat.sas.upenn.edu: Didache introduction, Two Ways notes, and translation, textual notes and commentary on 6:3-end), new key `kraft-barnabas-didache`; Aristotle, <i>Politics</i> 7.1335b (Rackham, Perseus), new key `aristotle-politics-7`; the Ethiopian Orthodox Tewahedo Church's "Holy Scriptures" page (eotcmk.org/e/?p=8210), new key `eotc-holy-scriptures`; Eusebius 3.25.4 at New Advent (McGiffert, NPNF 2.1); CCC 120 at vatican.va; Sefaria Mishnah Berakhot 6:1, 6:5, Taanit 1:6, 2:9; Lake's OCR (title page, introduction); texts/orig Did, Mat, Luk, Bnb; tools/lxx.py Exodus 21:22-23; the site's Exodus 21, Luke 22, 1 Corinthians 11 and Galatians 3 text. Counts: 23 fixed, 2 partly, 1 declined (for the lead).

1. Fixed. Every "oldest/first/earliest" claim in the site's voice removed or credited: notes 22, 51, 60, 61, 63, 70, 81, 104, 107, 109, 110; chapters 2 H, 4 L, 7 sum, 8 H, 9 L, 13 L, 14 H; topics two-ways, lords-supper, baptism, lords-prayer, abortion, trinity, sabbath, prayer, apostolic-fathers; book.json lead, section 2, reliability 1. Kept only where Kraft says it, quoted and credited (pouring is "probably the earliest reference to that practice"). Checked by a regex sweep.
2. Fixed. Each "most/many/some readers", "scholars" or "churches" is now either named from Kraft (the hypocrites; the meal debate, with Dix; 14:1 "usually been interpreted as a Eucharistic service"; Sunday against Dugmore's Easter; 1:3b-2:1 as an addition; 11:11 and "spiritual marriage"; 16:5; 16:6; Gospel use, after Koester) or restated as what the text allows: notes 1, 7, 8, 12, 14, 18, 21, 27, 43, 45, 53, 57, 63, 66, 68, 73, 85, 89, 98, 101, 110, 122, 123; chapters 1, 7, 8 (settings views), 9 (views and settings), 1, 9 and 16 deep; topics anti-judaism, lords-supper, synoptic-problem, prophecy; book.json reliability 3 and 4. Lake's own "many think" and "majority of scholars" stay as Lake's.
3. Fixed. Opened Kraft's textual notes. "Stands alone" deleted: note 88 now gives C "God", Coptic "house" and ApCo "son" of David, and Kraft's "to David's Lord" proposal. New variant at 10:6 with the three readings. The Georgian ending (Kraft's translation follows it) is now in note 126, chapter 16 H and deep, book.json "The ending" and the last-days topic; reliability 2 no longer treats "God of David" as a single odd word.
4. Fixed. Note 67 and the fasting topic now say Taanit 2:9 is about drought fasts, not a weekly custom, and credit the weekly Monday-Thursday reading to Kraft (who cites b. Shabbat 24a). Ch. 8 J reworded (Berakhot 4:1 kept for prayer). audience.to now says the church fasts twice a week "on days of their own". Reliability 4, the anti-judaism topic and note 66 give both readings of "the hypocrites".
5. Fixed. rejected_why rewritten: Eusebius gives no reason (3.25.4 opened); Greek <i>notha</i> from Kraft; Athanasius likewise; any further reason labeled Claude's analysis. McGiffert's NPNF translation named wherever "rejected" is quoted (note 0, facts, section 5, accepted_by, canon topic). Summary and prophecy topic no longer give "about AD 100" as fact; "valued for teaching converts" now credited to Athanasius.
6. Fixed. Greek practice sourced to Aristotle, Politics 7.1335b (opened). "Jews were known for refusing both" and "widely practiced and in some circles admired" deleted. The core and note 22 now say Exodus 21:22-23 is read more than one way and the Septuagint sets a different law (lxx.py: ἐξεικονισμένον). The Tacitus line is dropped from note 22, the core and ch. 2 J (agnatis not verified; listed in build.md for the Tacitus owner).
7. Fixed. Note 35, ch. 3 N and the πραΰς term entry now say "nearly" Matthew 5:5: without "Blessed", with "since" for "because they" (SBLGNT checked).
8. Fixed. Note 8: Byzantine ὑμῖν, SBLGNT ὑμᾶς (both checked). Note 13 likewise says the article is Byzantine.
9. Fixed. Note 47: "nearly the same line", with the two differences (Bnb grc 19:5 checked).
10. Fixed. 9:4 now "scattered over the mountains" (ὀρέων; Kraft and Lake have "mountains"). Notes 77 and 79 (anchor), ch. 9 sum, the κλάσμα term entry and the image prompt updated; note 79 adds Kraft on the mountains and Syria or Palestine.
11. Partly. Renderings kept (5:2 "destroyers" fits "of what God has formed"; 16:3 "corrupters" fits the false prophets; 11:12's plural ἀργύρια "silver"). Notes 120 and 102 now say which English the same Greek has elsewhere, and 102 quotes "Give me silver" as the text says.
12. Fixed. 4:10 rebuilt from the Greek: "your slaves, men or women, who hope in the same God"; note 48 anchor moved.
13. Fixed. 4:11 rebuilt: "with modesty and fear" (ἐν αἰσχύνῃ); note 49 and the household-codes topic updated; Barnabas 19:7 listed in build.md for alignment.
14. Fixed. "as reported at Early Christian Writings" (section 0), "I have not checked a particular study" (spec, which now states its overlap with Kraft) and "not a published reading I have checked" (ch. 1 spec) removed.
15. Fixed. The Roman mile and quadrans sentences deleted; bird omens and idol meat now from Kraft; the pederasty sentence replaced with Kraft's account; ch. 9 deep "In 1912 many scholars thought" deleted.
16. Fixed. Note 74: Mark has bread then cup; only 1 Corinthians 11:25 has "after the meal"; Lake "probably" meant the shorter Luke text, since he says it "omits v. 20" (same in ch. 9 deep).
17. Fixed. Ch. 9 J and note 74 cite Berakhot 6:5 for wine "before the meal" and 6:1 only for the wording of the blessings (both opened).
18. Fixed. Each chapter's setting now says who is addressed there (the Two Ways setting of ch. 1, and chs. 2-7, 9, 10, 12-14, 16); no "see the setting on chapter 1" remains.
19. Fixed. Opened the Ethiopian church's Holy Scriptures page: new accepted_by row ("The Didache and Abthulis" under books on church administration, outside the 46 + 35). Lead, facts and canon topic now say "in no Bible among the churches whose lists are given".
20. Fixed. From Kraft: note 7 (P.Oxy. 1782 has 1:3b-4a with a longer 1:4a; the Georgian lacks 1:5-6), note 84 (the Coptic fragment begins at 10:3b), note 91 and ch. 9 deep (the ointment prayer in Coptic and ApCo, not in C or the Georgian), facts and provenance (Georgian version, Ethiopic church order), and the 10:6 variant (finding 3).
21. Partly. `same-sex-relations` dropped from the ch. 2 topics. Note 20 keeps its topic link but now says, with Kraft, that the word names the abuse of boys, later widened by the Apostolic Constitutions, and is not the adult relations the topic treats.
22. Fixed. Double comma in note 119; note 126 preview rewritten ("the one complete Greek manuscript"); the lead now says "No copy was known until 1875, though a rough reconstruction ... (Lake)".
23. Fixed. "later moved to Jerusalem" deleted; the manuscript's other name now credited to Kraft (H, Codex Hierosolymitanus).
24. Fixed. Note 0 gives ΔΙΔΑΧΗ ΤΩΝ ΔΩΔΕΚΑ ΑΠΟΣΤΟΛΩΝ from Lake's printed page (OCR, vol. 1 line 15626).
25. Declined here: no change belongs in `Did`. The `didache` key and the Matthew 6:13 date are listed again in proposals/works/build.md for the lead, with Kraft's mid-second-century view added.
26. Fixed. The 8:1 gloss now says "Wednesday and Friday (Preparation Day is the day before the Sabbath)".
