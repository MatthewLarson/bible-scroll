# Hostile review: Ignatius to the Philadelphians (IPh)

## Verdict

The Plain English Translation is faithful to Lake's Greek verse by verse. I found no added, dropped or reversed clause, the key terms agree with the published Ephesians, Romans and Smyrnaeans, and bishop, elders and deacons are handled the same way. `node tools/build.js --check IPh` gives 0 errors and 0 warnings. The Lightfoot quotations I checked in the local OCR (p2v2.txt) are accurate: the apparatus readings for 3:1, 5:1, 6:1, 7:1, 8:2, 10:1 and 11:1, the Philadelphia introduction, and the notes on 1:0, 4:1, 5:1, 6:1, 8:2 and 9:1. The Lake introduction, footnotes and dates match his Loeb pages. The Catholic Encyclopedia quotations (O'Connor, Pohle, Arendzen) match what I opened on New Advent. The 8:2 note has a real attribution error: it says Lake and Lightfoot prefer the same reading, and they do not. Lightfoot's inferences about who the opponents were are written into the settings and the audience card as plain fact. Eight or more variants that Lightfoot's apparatus shows are missing. Several "views" notes credit unnamed "some" and "others". Nothing is invented. There are no critical findings.

## Findings

### 1. MAJOR: 8:2 attribution. Lake and Lightfoot do not prefer the same reading, and the Plain English Translation follows Lightfoot's, not Lake's
Locations: notes.json 8:2 (the `views` note "The archives, the gospel and 'It is written'"); chapters.json ch. 8 deep note "The Greek and its punctuation"; book.json `how_to_read` ("the punctuation Lake and Lightfoot prefer"); topics.json `scripture-and-tradition`; progress.md.

Evidence:
- Lake's footnote (OCR 12809-12814) names two readings. The one he prefers is "If I find it not in the charters,—in the Gospel I do not believe". That is the common reading: "I do not believe in the gospel".
- Lightfoot (p2v2.txt, 8:2 note) says this common reading is how the passage is "almost universally taken", and that it uses "the very rare construction which occurs Mark i. 15". He does not adopt it. He argues for his own construction: "Unless I find it (the point at issue) in the archives, I do not believe it (because it appears) in the Gospel. The parallelism demands this."
- The Plain English Translation ("I do not believe it in the gospel") is Lightfoot's construction. The note says the translation "follows Lake's first reading" and that "Lightfoot reads it the same way". The deep note numbers Lightfoot's reading (1), says "Lake prefers this", and calls Lake's real preference (2) "almost universally taken". The note quotes both men and so contradicts itself.
- Lake's second reading, with commas around "in the Gospel", appears to be Zahn's apposition. Lightfoot rejects that one.

Fix: say the translation follows Lightfoot's construction. Say Lake prefers the common reading, which Lightfoot rejects. Or change the translation to Lake's and move Lightfoot's into the note. Correct the deep note, `how_to_read`, topics.json and progress.md to match. The brief required "one punctuation, and the note gives the other".

### 2. MAJOR: debated audience and opponents stated as settled
Locations: book.json `audience.to` ("Some in or near it argued for Jewish practice from the prophets and 'the archives'") and `sections` ("the answer to the Judaizers (5-6; 8-9)"); chapters.json settings for ch. 5 (readers: a church that "had heard some appeal to the prophets against the gospel"), ch. 6 (why: "teachers who used the prophets to urge Jewish ways of life"), ch. 9 (why: "answer those who exalted the priesthood and the prophets"), ch. 9 readers, and the ch. 1 `why`.

Evidence:
- Nothing in 5:2 or 9:1 names opponents.
- At 5:2 Lightfoot himself asks whether the aim is Judaizers who overrated the Old Testament or anti-Judaic Gnostics and Marcionites who rejected it, and answers "the former" only because of the context. At 6:1 he calls identifying the uncircumcised teacher a probable reading.
- Lake says it is "disputed" whether the Judaizing tendency was in docetic circles or a danger from other directions.
- The `views` card gives this debate fairly. The settings and `why` lines contradict it by stating one side as the audience.
- Ch. 1 `why` says Ignatius praises "the very quietness some may have held against him". The note at 1:1 admits the letter does not say so.

Fix: add "on Lightfoot's reading" or "if Lightfoot is right" wherever the opponents or their use of the prophets are described. Remove "had heard some appeal to the prophets against the gospel" from the readers line, or mark it as inference.

### 3. MAJOR: variants incomplete against Lightfoot's apparatus, and one entry understates its witnesses
Location: variants.json (12 entries). The brief and lead decision 8 call for every departure from G, and every meaning-bearing footnote, to be entered. Lightfoot's apparatus (p2v2.txt pp. 249-279) shows these missing:
- **1:0** ἐὰν ἐν ἑνὶ ὦσιν (G, "they are one"): L "si in uno simus", A "si stetis in concordia". The person changes, "we" or "you" for "they". Lightfoot discusses this in his upper and lower notes. Lake's English does not show it.
- **1:1** διακονίαν: A has "dispensation" (οἰκονομίαν), which Lightfoot says was probably substituted because "διακονία seemed an unfit term to apply to a bishop". Also τὸ κοινὸν (gL) against τὸν κοινὸν (G, and A "the common man"). This bears on the overseer's office.
- **3:3** σχίζοντι: g adds "from the truth", A has "of a separator of the church", others add "the church". Also τῷ πάθει: S and A add "of Christ".
- **5:2** ἀγαπῶμεν: g has ἀγαπῶ, A "I love", L "diligamus". Lake's own English footnote offers "let us love", so the variant belongs here. The note at 5:2 mentions only Lake's alternative.
- **6:3** κτήσωνται (Lake, with g and L): G has κτίσωνται, A is different.
- **7:2** G's corrupt πτέσαντες for ὑποπτεύσαντες. This is in the note but not as a variant, though Lake prints a correction of G.
- **9:2** καὶ τὴν ἀνάστασιν: Lake keeps G's καὶ. Lightfoot calls it "almost certainly an interpolation" and omits it.
- **10:2** αἱ ἔγγιστα ἐκκλησίαι: L "quaedam propinquae", g "καὶ ἀεὶ", S "sanctae".
- **Smaller:** 4:1 ὡς (G) against "et" (L) and "καὶ" (g); 6:2 ἐξασθενήσετε (G has -σεται); 8:2 ἄθικτα (G ἄθηκτα) and πρόκειται (g* προκρίνεται).

Entry 2:1 lists only A for "light and truth". In the OCR the apparatus line reads "GL* (but a v. 1. inserts et) g Dam-Rup; lucis et veritatis A", so g and the Damascene florilegium are grouped with the variant too. The OCR is ambiguous. Open the scan of Lightfoot p. 254 and give every witness.

Entry 8:2 (gospel): Lightfoot's apparatus reads "τὸ εὐαγγέλιον or τοῦ εὐαγγελίου" for g. The entry gives only the first.

Fix: add the entries above. Correct the 2:1 witnesses from the scan.

### 4. MAJOR: "views" notes credit unnamed "some" and "others" instead of named churches or writers
Locations: notes.json 8:2 "Christ, the archives no one can tamper with" ("To some it shows ... to others ... to others that 'the gospel' here is already a written standard"); notes.json 4:1 ("Others read it of the place of the meal"); chapters.json ch. 8 C ("Churches cite the verse in their debates on Scripture and tradition").

Evidence:
- Agent-writer-works lesson: no view credited to unnamed "many/most/readers".
- The brief asked for a `views` note at 8:2 giving how the churches read the verse, each from a source that discusses it. The note names no church and cites no confession, catechism or theologian for 8:2, only Lightfoot and the Catholic Encyclopedia citing chapter 3.
- The 4:1 note names Catholic (Pohle) and Lutheran (a district page that speaks of Ignatius in general, not of this verse), with Lightfoot for the Anglican side. Orthodox, Reformed and Baptist are absent.
- The ch. 1 line "some think the overseer's silence was being held against him" (the `p` of the 1:1 `views` note) names no one.

Fix: name each view's holder from an opened source, or cut the sentence. The brief allows "no new card", but the note must then say plainly that no church document discussing this verse was found.

### 5. MINOR: church rows rest on weak sources, one caveat dropped, one carried over unread
Location: book.json `canon.accepted_by`.
- **Lutheran row:** its only source is a Southern District web page. IEp's row said "That is a district page; the synod's own calendar was not opened". IPh dropped that sentence. I confirmed the page says Ignatius "wrote letters to the Christians at Ephesus, Magnesia, Tralles, Rome, Philadelphia, and Smyrna" and "the reality of Christ's bodily presence in the Lord's Supper". Restore the caveat.
- **Orthodox row:** "Not part of the Bible" rests on Reid, a Catholic Encyclopedia article. The only Orthodox source is OCA's commemoration page. This is a church row sourced from outside the church's own document.
- **USCCB 17 October:** the writer's sources-checked.md says "carried over from ISm (PDF, not re-read)". I could not open the PDF either. Secondary reports that cite the USCCB calendar give 17 October 2026 as the Memorial. Either re-read the PDF or word the row from what was opened.
- The Anglican, Reformed and Baptist rows copy ISm. I did not re-open them.

### 6. MINOR: Philadelphia founder stated flatly
Locations: notes.json 1:0 "Philadelphia" and topics.json `philadelphia` "The city" ("was founded by Attalus II"). Lightfoot (p. 237) says the foundation is "distinctly ascribed" to Attalus, then adds "we may be tempted to suspect an error" because the sixth-century John the Lydian says Egyptians founded it, which would point to Ptolemy Philadelphus. State the doubt.

### 7. MINOR: claims given without an opened source
- variants.json 6:1: ὑμῖν and ἡμῖν "were pronounced alike, so they are often confused in manuscripts". No source is given.
- variants.json 3:1: "Lake follows the Latin" and "the participle in G gives no clear construction". Lake gives no reason, and Lightfoot only lists the readings.
- notes.json 10:1 and glosses.json: "the verb first meant to vote by raising the hand" and the gloss "vote for, by raising hands". No lexicon is opened, and the gloss states it as the meaning here. The site's own Acts 14:23 and 2 Corinthians 8:19 renderings are the safe evidence.
- Fix: cite an opened lexicon or cut the claims.

### 8. MINOR: Eusebius 3.36.10 worded differently from ISm
Location: notes.json 11:2 gives "when he was already past Smyrna, from Troas he again addressed in writing those in Philadelphia ... who led it" and calls it "the site's translation of the Greek". The published ISm note quotes the same sentence as "when he had left Smyrna he wrote again from Troas to the Philadelphians and to the church of Smyrna; and particularly to Polycarp". The scratch notes show the Greek was opened (ἤδη δ' ἐπέκεινα τῆς Σμύρνης), so "already past" is probably right. I did not re-open the Greek. Harmonize the wording across the batch, and say which translation is which.

### 9. MINOR: copied settings text
chapters.json: `by`, `to` and `when` are identical strings in about nine settings. `readers` is varied, which meets the rule, but the repeated lines add nothing. Chapters 3 and 8 have no setting of their own; they are covered by "2:1-3:3" and "7:1-8:2", which is acceptable.

### 10. MINOR: Plain English Translation wording
- 4:1 "Then whatever you do, you will do it God's way" turns the purpose clause ἵνα into a result. "So that" is closer.
- 3:1 "tend" for γεωργεῖ loses the farming image. Lightfoot compares John 15:1, where the Father is the γεωργός.
- 6:1 "if neither of them speaks" for ἀμφότεροι ... μὴ λαλῶσιν is fine, but a note that the Greek says "both" would help.

### 11. MINOR: glosses and variant display
- glosses.json: "dirty tricks" for κακοτεχνίας is flippant (Lightfoot: "snares and devices"). "the board of presbyters" for "council of elders" adds nothing.
- variants.json: 7:1 has `"plain": ""` for the G reading. The 8:2 πράσσετε reading has `"plain": ": do nothing ..."`, which will render oddly.

## Checked and found sound
- All 24 lines against `grc`, including the `fixed` slips (3:1 ἀποδιϋλισμόν and the others).
- Terms: overseer with its gloss at 1:0, council of elders, fellow slaves, thanksgiving, altar, the ruler of this age, forbearance, God's runners, elect and an envoy of God (as Smyrnaeans 11:2), "Judaism" and "Christianity", "Farewell". The quotations of the site's Galatians, Philippians, 1 Corinthians, Martyrdom of Polycarp 19:1 and Romans 4:3 match the site wording.
- Lake and Lightfoot quotes in the notes, deep notes and book.json (spot-checked against the OCR): the Philadelphia introduction; the "Docetic Judaism" and "from its Judaic ... side" lines; the 5:2 footnotes; the 8:2 footnote (quoted correctly, though misapplied; see finding 1); the 11:1 footnote; the "condescended to argue" quotation; Lake's three motives; the Cureton abridgment; Grosseteste 1250; Vossius 1646.
- The Catholic Encyclopedia (O'Connor, Pohle, Arendzen) quotations, and the Lutheran district page quotations.
- The reference forms parse. The cross-references to Smyrnaeans, Polycarp and Magnesians are correct.
- `works.json` naming is "Ignatius to the Philadelphians" and Scripture is never claimed in the site's own voice.

## Fixes applied
1. Accepted. The 8:2 note, the ch. 8 deep note and readings, `how_to_read`, topics.json `scripture-and-tradition` and progress.md now say Lake prefers the common reading ("I do not believe in the gospel") and Lightfoot argues for his own construction against it. The Plain English Translation keeps Lightfoot's construction, and the notes say so and give why: the parallel clauses, and the "very rare" construction of Mark 1:15. They also note the evidence on the other side (g and A read "the gospel"). The punctuation was checked in Lake OCR 12790-12814 and Lightfoot pp. 270-272.
2. Accepted. book.json `audience.to`/`why`, the settings for ch. 1, 5, 6 and 9, and topics.json `philadelphia` now present who the opponents were as Lightfoot's inference. They say the letter does not name them and that Lake calls the link to docetism disputed. The ch. 1 "quietness some may have held against him" is removed, and so is the matching 1:1 note line and ch. 1 H view.
3. Accepted. 14 variants added from Lightfoot's apparatus (local OCR p2v2.txt): 1:0 they/we/you; 1:1 διακονίαν/οἰκονομίαν and τὸ/τὸν κοινὸν; 3:3 σχίζοντι additions and "of Christ"; 4:1 ὡς/καί; 5:2 ἀγαπῶμεν/ἀγαπῶ; 6:2 -σετε/-σεται; 6:3 κτήσωνται/κτίσωνται; 7:2 πτέσαντες; 8:2 πρόκειται/προκρίνεται and ἄθικτα/ἄθηκτα; 9:2 καί; 10:2 the nearest churches. The 8:2 gospel entry now gives g's τοῦ εὐαγγελίου. Partly declined on 2:1: the apparatus line "φωτὸς ἀληθείας] GL* (but a v. 1. inserts et) g Dam-Rup; lucis et veritatis A" lists g and Dam-Rup in support of the printed text, not of the variant. The entry now gives all the witnesses that way, with the one Latin manuscript that inserts "et". No scan was opened.
4. Accepted. The "To some ... to others" sentence at 8:2 is replaced with Lightfoot's and Zahn's named readings. The 4:1 "Others read it of the place of the meal" is cut. The Lutheran line now names the Southern District page and says the page speaks of the letters in general. Each place says that no Orthodox, Reformed or Baptist document (4:1), or no church document (8:2, ch. 8 C), discussing the verse was opened. The 1:1 note no longer credits "some".
5. Accepted. The canon rows are re-checked in the saved copies, following the IEp/IRo/ISm pattern. USCCB: the 2026 calendar PDF (.scratch/IRo/web/usccb2026.pdf) was re-read; it has "17 Sat Saint Ignatius of Antioch, Bishop and Martyr / Memorial", and the row names the Liturgical Calendar for 2026. Orthodox: the row now says the "not part of the Bible" statement is Reid's in the Catholic Encyclopedia, and adds the OCA life's own "seven epistles ... Philadelphia". Lutheran: the district caveat is restored. Anglican (Common Worship "17 October Ignatius Bishop of Antioch, Martyr, c.107", Article VI), Reformed, Baptist and EOTC were re-checked in the saved pages.
6. Accepted. The 1:0 note and topics.json `philadelphia` now give Lightfoot's "distinctly ascribed" and his "suspect an error" (John the Lydian, Egyptians, Ptolemy Philadelphus), from p. 237.
7. Accepted. The 6:1 pronunciation claim is cut. The 3:1 "why" now says only what Lake prints and that he gives no note. The 10:1 note now cites the STEPBible Tyndale brief lexicon (Abbott-Smith, opened this session: "to vote by stretching out the hand", by vote at 2 Cor 8:19 and without one at Acts 14:23). The gloss now reads "choose; the word first meant to vote with a raised hand".
8. Partly accepted. The Greek was re-opened (.scratch/IPh/web/euseb.xml: ἤδη δ' ἐπέκεινα τῆς Σμύρνης γενόμενος, ἀπὸ Τρωάδος τοῖς τε ἐν Φιλαδελφίᾳ αὖθις διὰ γραφῆς ὁμιλεῖ ... προηγουμένῳ Πολυκάρπῳ). IPh's wording is the site's own translation of it and is kept. ISm's note uses a different translation (key `eusebius-history`). That note is outside this folder, so it goes to the lead to harmonize.
9. Declined. The `by`, `to` and `when` fields are per-setting fields and the facts are the same for every section. `readers` and `why` vary, which the reviewer accepts.
10. Accepted. 4:1 now ends "..., my fellow slaves, so that whatever you do, you may do it God's way." 3:1 "tend" is now "cultivate", and the ch. 3 summary quote is updated. A note on ἀμφότεροι ("both") is added at 6:1. Both verses were rebuilt from a hand literal line (literal.js has no glosses for this book) and drift-audited. No other book quotes the changed words.
11. Accepted. The glosses now read "wicked schemes" and "the elders who serve with the overseer". The 7:1 G reading now shows "(left out)", and the 8:2 πράσσετε reading reads "I urge you: do nothing to push yourselves forward".
