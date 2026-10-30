# Hostile review: 1 Corinthians 1-4 (part 01-04) and book.json

## Verdict

The Plain English Translation is accurate and readable. I found no mistranslation of substance in the 91 verses, and the variant entries are mostly right. The weak points are in the supporting material. One Talmud attribution is plainly wrong (Rosh Hashanah 16b-17a). Several tradition summaries are unfair or mis-cited: Reformed natural theology, the Catholic citation at 4:5, the Calvin and "all believers build" attribution at 3:10-17, and the readings line that lumps Augustine and the Orthodox at ch. 3. Edition claims in the variants disagree with the Greek word list (1:14, 2:4). Some patristic and Qumran claims have no source key. Several Plain English Translation lines sit close to ESV or NIV wording. The "temple" choice for *naos* conflicts with the existing terms entry for the Synoptics and Acts. `node tools/build.js --check 1Co/01-04` reports 0 warnings and 2 errors. Both errors are in `proposals/nt/topics/new-covenant.json` (the name "new covenant" also leads to topic `covenant`), which is another writer's file and not this part's. This part is otherwise clean. I did not edit any content.

Findings: 0 critical, 7 major, 21 minor.

## Major

1. **Major. chapters.json ch. 3, `views.J` and the deep dive "The Jewish side" (Rosh Hashanah 16b-17a). The Talmud schools are swapped.**
   - What is wrong: `views.J` says "the School of Hillel's view ... was that those in the middle go down and come up". The deep dive says Beth Hillel's view is that God "leans toward mercy" for the middle group, who "go down to Gehenna and are raised up". In the baraita the middle group going down to Gehenna, squealing and rising (Zech 13:9) is **Beth Shammai's** view. Beth Hillel says God, "abounding in kindness" (Ex 34:6), inclines the scale toward mercy, so the middle group does not go down. The deep dive also merges the two schools into one view.
   - Fix: reassign. Shammai: the middle group goes down and comes up. Hillel: mercy tips the scale, so they do not descend. Check against Sefaria's text of b. Rosh Hashanah 16b-17a.
   - Related: the same dive says these texts are "later than Paul". `views.J` says "a Jewish reader of his day would know it". Drop that claim or say the school traditions may be pre-70 but are recorded later.

2. **Major. notes.json 1:21 ("How the world fails to know God"). Reformed teaching is caricatured.**
   - The note says "Karl Barth and many Reformed writers reject a natural theology". Calvin (Institutes 1.3-5), the Belgic Confession art. 2 and Westminster 1.1 affirm a natural knowledge of God and deny only that it saves. Barth's *Nein!* is an exception within the tradition, not "many".
   - Fix: "Barth and his followers reject natural theology. The older Reformed confessions (Belgic art. 2; Westminster 1.1) affirm a real but insufficient knowledge from creation." Name the Catholic pole (Vatican I, Dei Filius) next to CCC 36.

3. **Major. notes.json 4:5 ("Judgment of believers' works"). The Catholic position is mis-cited and mis-stated.**
   - CCC 1021-1022 is the **particular judgment at death**, not "a single final judgment of the whole person". The note also reduces Reformed, Baptist and Lutheran teaching to "a judgment of works alone".
   - Fix: cite the right paragraphs. CCC 1038-1041 covers the Last Judgment and works. CCC 1021-1022 is the judgment at death. Westminster Larger Catechism 90 (and Confession 33) covers the judgment of the righteous. Re-state each view in its own words, or cut the comparison. Paul's text does not require it.

4. **Major. chapters.json ch. 3 `settings` 3:10-17, view "The builders are all believers".**
   - It is attributed to "some Reformed and Lutheran writers, following Calvin's emphasis". Calvin (commentary on 3:10-15) reads the builders as teachers and the materials as doctrines. The attribution is unsourced and, as far as I can tell, wrong.
   - Fix: name a real proponent, or say "some interpreters" with no tradition label.
   - Also verify the card and deep-dive claim that Calvin reads the fire as "the troubles of this life". My recollection is that the commentary reads it as the Spirit's testing of doctrine. Institutes 3.5.6-10 is about purgatory and the Fathers. If this cannot be confirmed in the text, weaken it.

5. **Major. chapters.json ch. 3 `readings` ("Read as a text about the afterlife"). Inaccurate and inconsistent.**
   - It says "Origen, Augustine, Gregory the Great and the Catholic tradition find in it a basis for purgatory". Its own `views.T` says Augustine "did not decide" (*City of God* 21.26). The same entry says "Protestant and Orthodox readers find only the final judgment", but the card and deep dive say Orthodox practice and thought on the fire is divided.
   - Also in the `purgatory` topic text in topics.json: "Orthodox ... read the fire as the judgment itself". This flattens the card.
   - Fix: state the real spread. Origen is a cleansing-fire reading. Augustine is "possible, undecided". Gregory is a purifying fire for small faults. Many Greek Fathers (Chrysostom and others) read it as judgment. Orthodox views are varied. Keep it consistent across the readings entry, the topic text and the card.

6. **Major. variants.json, 1:14 and 2:4. Edition claims contradict the SBL word list (`texts/orig/1Co.json`).**
   - 1:14: the entry says "NA28 and Tyndale House bracket 'to God'". The word flags show τῷ θεῷ is in NA28, NA27, Tregelles, TR and Byz, and **not** in SBL, THGNT or WH. THGNT omits it. Say so (and whether NA28 prints brackets). No manuscript witnesses are named for a variant that appears in the text on the page.
   - 2:4: the entry puts "Tyndale House GNT" with the shorter SBL reading. The flags show λόγοις is in NA28, THGNT, WH, Tregelles, TR and Byz. So SBL alone omits "words", and THGNT reads a longer form. The two-reading layout hides a third reading (πειθοῖς σοφίας λόγοις). Rebuild it as three readings and name the witnesses. The "why" ("scribes added 'human' and 'words' from 2:13") needs the same correction.
   - Fix: re-derive each edition claim from the `w` flags. Remove "brackets" claims unless confirmed from NA28.

7. **Major. notes.json 2:9 ("Where does this quotation come from?"). The Origen and Jerome claims are from memory and unsourced.**
   - Origen (Comm. Matt. 27:9, ser. 117) does ascribe the words to the apocryphal Elijah writing. He does so himself rather than reporting "some thought" it. The note's wording understates this.
   - Jerome rejects that origin and says Paul took the words from Isaiah. His comment on Isaiah 64:4 is the sure reference; the Epistle number is uncertain (my memory says Ep. 57.9, one search source says Ep. 101).
   - There is no source key for either claim. The listed `s` (hays-echoes, clement-1, nag-hammadi-thomas) do not support them.
   - Fix: cite *Commentary on Isaiah* 17 on 64:4 only if the passage is confirmed. Otherwise hedge ("Origen, as Jerome reports it"). Add source keys or drop the specifics.

## Minor

8. **Minor. Term conflict: "temple" for ναός at 3:16-17 (and 6:19 etc., cross-part).**
   - `content/terms.json` (entry for ναός / ἱερόν) sets "sanctuary" for ναός and "temple" for ἱερόν in Matthew, Mark, Luke and Acts. John is the single exception, and the entry says why.
   - 1 Cor 3:16-17 uses "temple". The note says "naos is the inner sanctuary ... not the whole temple area". The gloss at 3:16 says "the sanctuary". Topic `temple` text says "God's sanctuary ... this temple". The part is split between two words.
   - No Pauline entry exists in `proposals/nt/terms.json`.
   - Fix is a lead decision for all Pauline parts (3:16-17, 6:19, 2 Cor 6:16, Eph 2:21): either follow the Synoptic "sanctuary" or add a Pauline entry that says why not. Also check 1 Cor 9:13 (ἱερόν) so that "temple" does not mean two words in one letter.

9. **Minor. Drift toward ESV/NIV.**
   - 3:15 "If someone's work is burned up, he will suffer loss. He himself will be saved, but only as if through fire." is nearly the ESV phrasing ("suffer loss ... himself will be saved, but only as through fire").
   - 2:14 "A natural person does not accept the things of the Spirit of God" is word for word the ESV's first clause. The note itself lists the alternatives ("unspiritual", "worldly").
   - 4:13 "we answer gently" is close to NIV's "we answer kindly". παρακαλοῦμεν is "we appeal, we urge, we comfort", not "answer". Check the project's παρακαλέω entry in `proposals/nt/terms.json` ("urge", "appeal").
   - 4:9 "last of all, like people sentenced to death ... a spectacle to the world, to angels and to ... human beings" tracks ESV closely.
   - 3:13 ("will test what kind of work each one has done") echoes ESV's frame.
   - These are mostly forced by the Greek. Rewrite 3:15, 2:14 and 4:13 at least.

10. **Minor. variants.json, missing entries.**
   - 4:2: Plain English Translation has "moreover" but drops *hōde*. SBL/NA28 read ὧδε λοιπόν. Byz reads ὃ δὲ λοιπόν (KJV "Moreover it is required"). Add an entry. A KJV reader sees the difference, and "here" is not in the Plain English Translation.
   - 1:28: καὶ before "τὰ μὴ ὄντα" (WH, TR, Byz; KJV "and things which are not"). The Plain English Translation has no "and". Add an entry.
   - 4:13: δυσφημούμενοι (NA/SBL) against βλασφημούμενοι (Byz/TR; KJV "defamed"). Minor in sense, but KJV readers notice.
   - 4:17: "Christ Jesus" against "Christ" (NA28, SBL, WH vs THGNT).
   - 1:2: τε in TR and Byz. Optional.

11. **Minor. variants.json, 2:1.** Witness lists are from memory. "Metzger reports that the question was close" is unverified. The word-list flags show NA28, NA27 and WH read μυστήριον, so "NA28 ... chose 'mystery'" is consistent. Give a Metzger reference, or soften. The same applies to the manuscript lists at 1:15 (Vaticanus, Sinaiticus first hand, Alexandrinus, Ephraemi), 3:3 (P46, Claromontanus, second hand of Sinaiticus) and 3:5 ("main Alexandrian witnesses"). They are plausible, but "as reported by NA28" cannot be confirmed here. Tischendorf is available in the Source Library per brief-nt.md. 3:5 should list actual witnesses.

12. **Minor. notes.json 2:6 / chapters.json ch. 2 `settings`.** Several statements about the Corinthians are given as fact: "To correct the idea that Paul's message is simple and unlearned"; "Members who now compared Paul's plain style with Apollos' polish". These are inferences. Add "may" or a view line. The 2:6 `views` also lists no scholar for the "wisdom is the cross" reading beyond Fee and Thiselton, and ironic readings (Corinthians' own slogan) are mentioned only in the note.

13. **Minor. notes.json 1:7.** "This matters later in the chapter" should be "later in the letter" (4:8 and 15:12 are not in chapter 1).

14. **Minor. notes.json 1:13.** "Paul's three questions all expect 'No'" is overstated. The first question has no negative particle, and many take μεμέρισται ὁ Χριστός as a statement ("Christ is divided"). The note also cites 6:11 and Matthew 28:19 as baptism "into the name of the Lord Jesus"; 6:11 is "washed ... in the name" and Matt 28:19 names the Father, Son and Spirit. Adjust.

15. **Minor. notes.json 1:2 ("theirs and ours").** "Most take it with 'place'" is an unsupported consensus label. Commentators are split (Fee, Barrett, Garland and others differ). Say "commentators divide" or give a count with sources. The Plain English Translation follows the "place" reading, so keep the note.

16. **Minor. notes.json 1:20.** The "wise = Greek sage, scribe = Jewish, debater = public disputer" division is given as the sense. Add the view that all three terms are Jewish or all one class (the title asks "or one figure in three words?" but the body does not answer). "Found only here in the Bible" for συζητητής: true of the NT; fine, but say "New Testament".

17. **Minor. notes.json 1:17 and sources.** Winter's claim that Paul faced Corinthian sophists is made in *Philo and Paul among the Sophists* (1997), not in *After Paul Left Corinth* (2001, a study of civic and ethical culture). Add the right source key or change the book.

18. **Minor. notes.json 2:7.** 1QS 3:23 mentions God's "mysteries of understanding" but does not speak of mysteries "shown to the community". Cite 1QS 11:3-6 or 1QpHab 7:4-5, or soften.

19. **Minor. notes.json 2:10.** The Athanasius and Basil claim (true: *Ad Serapionem* 1.22ff; *On the Holy Spirit* 16) has only `fee-empowering` as its source, which does not support it. Add patristic sources or cut the names.

20. **Minor. notes.json 4:1.** "The Latin church translated *mysterion* as *sacramentum*" is true of Eph 1:9, 3:3, 5:32 and Col 1:27, but the Vulgate has *mysteriorum* at 1 Cor 4:1. Say so. The Catholic and Orthodox reading of "mysteries" as including the sacraments needs a source.

21. **Minor. notes.json 4:17.** "'Ways' (hodoi) is the Greek for the Hebrew *derekh* ... the root of later Jewish *halakhah*". *Halakhah* comes from the verb *halakh* ("walk"), not from *derekh*. Fix (3:3 has it right).

22. **Minor. notes.json 4:21.** "The 'rod' is mentioned again at 5:3-5" is false: ῥάβδος does not appear in chapter 5. Say "a case of discipline at 5:3-5 shows what coming with a rod might mean".

23. **Minor. notes.json 3:15 and 3:14, chapters.json ch. 3.** The Maccabees reference is 2 Macc 12:45 in the notes and echoes and 12:46 on the card. CCC 1032 cites 12:46. Unify. Also *houtōs de hōs dia pyros* is quoted as "Houtos hos dia pyros"; add *de*.

24. **Minor. Cards without sources.**
   - ch. 2 "Evangelical" view (Chafer): `[]`. The facts are right (Chafer, *He That Is Spiritual*, 1918, the natural / carnal / spiritual scheme). Add a source key.
   - book.json "Baptist" card: `[]` and vague ("Baptists have differed"). Add BFM 2000.
   - ch. 4 card: the sentences "The phrase in 4:6 is not a statement about the canon" (Catholic) and "The phrase is a warning against going beyond what the apostles taught" (Orthodox) read as the author's verdict and are not tied to any Catholic or Orthodox author. Attribute them or move them out of the tradition voice.
   - ch. 2 card: no Pentecostal or Baptist view of "spiritual person", though the book's own lens T names Pentecostal readings. Optional.
   - ch. 1 card: the Anglican "Chicago-Lambeth Quadrilateral" is not backed by the source key given. Add one.
   - `purgatory` topic and `final-judgment` topic (proposals): both have `"sources": []`. Add CCC 1030-1032 and Calvin, Institutes 3.5.

25. **Minor. Counts and consistency.**
   - ch. 1 `views.L` says *sophia* occurs "16 times in 1:17-2:13"; the word list gives 15 (G4678). Recheck, and recheck "11 times" for *pneuma* in 2:10-16 (the same list shows only 3 forms of the adjective G4152 in that range, so the count depends on what is counted).
   - book.json says Paul's stay was "about AD 50-52" and the Gallio stone "about AD 51-52"; make one of them. The proconsulship dates Gallio, not Paul's stay.
   - book.json says "Nothing in chapters 1-4 is seriously suspected" but then names Walker on 2:6-16, and ch. 4 and the 4:6 notes treat Strugnell's gloss theory as live. Reword to "few doubt".

26. **Minor. Claims stated as settled that are debated.**
   - ch. 3 `views.H`: "A 'human court' (4:3) was a Roman court day". It is a possible sense of ἀνθρωπίνη ἡμέρα, not established. The note says the same more carefully.
   - ch. 4 `views.H`: Paul's manual work and refusal of support as "a refusal of a patron's claim" is Marshall's thesis. Label it a view.
   - note 4:12: "The refusal is another reason for the quarrel" should be "may be".

27. **Minor. Reading level.** The Plain English Translation at 2:4 ("not in the persuasion of wisdom, but in the proof of the Spirit") and 1:10 ("one mind and one view") read stiffly for 8th grade. The notes explain them, but consider "not in persuasive wisdom". Not a correctness matter.

28. **Minor. Missing material.**
   - No note on "call on the name of our Lord" (1:2; Joel 2:32, YHWH language applied to Jesus). Note 1:8 covers a nearby point.
   - No note on whether Peter had been to Corinth (Cephas, 1:12). The Peter topic text does not say.
   - 2:10: the Plain English Translation drops γάρ/δέ ("the Plain English Translation avoids both words"). Say so in the note as well as in the variant.

## Checked and found sound

- Verse-by-verse translation against the SBL and Byz text, 1:1-4:21: no omissions, wrong tenses, wrong names or number errors found. Key terms (flesh, boast, wisdom, servant, bring to nothing, puffed up, brothers, saints, justify, the good news) are consistent with `terms.json`.
- Cicero, *Pro Rabirio* 16; Josephus *Ant.* 20.97-98 and 20.167-168; Seneca *Letter* 7; Seneca *Ben.* 7; Mishnah *Eduyot* 2:10 (twelve months); 4Q169 (hanged men); 4Q174 (temple of men); 1QS 8:5 (planting); Justin, *Dialogue* 89-90; Baur 1831; Walker on 2:6-16; Pearson on *psychikos*; Welborn; Fitzgerald; Symeon of Emesa; Wesley sermon 9; Chafer 1918; CCC 1031 footnote citing 1 Cor 3:15; Westminster 1.6, 32.1; Article 22. All real and accurately described.
- Every verse has a Plain English Translation line. Settings cards cover each section. The `spec` boxes are labeled and modest.

## Fixes applied

Applied 2026-10-29 (review-fixer). Source keys added in this part's sources.json: belgic-confession-art2, chafer-he-that-is-spiritual, lambeth-1888, athanasius-serapion, basil-holy-spirit. Existing keys reused: dei-filius, westminster-larger-catechism, jerome-isaiah, origen-comm-matthew-series, winter-sophists-1013, pesher-habakkuk, eusebius-history, bfm-2000.

1. Accepted. Shammai and Hillel reassigned in `views.J` and the "Jewish side" deep dive (Shammai: middle group goes down and comes up, Zech 13:9; Hillel: mercy tips the scale, Ex 34:6). "Later than Paul" and "a Jewish reader would know it" replaced: the schools are first-century but recorded later.
2. Accepted. Note 1:21 now has Barth and followers as the exception; older Reformed confessions (Belgic art. 2, Westminster 1.1, Calvin Institutes 1.3-5) affirm a real but insufficient knowledge; Catholic pole is Dei Filius plus CCC 36.
3. Accepted. Note 4:5 rewritten: CCC 1021-1022 as the particular judgment, CCC 1038-1041 for the Last Judgment, Westminster Larger Catechism 90 and Confession 33 for the righteous. The works-alone comparison is cut.
4. Accepted. The Calvin attribution for "all believers build" is dropped (view now "some interpreters", with a note that Calvin read the builders as teachers). The "troubles of this life" attribution to Calvin is removed from the deep dive and the Reformed card; Calvin is now given as reading the fire as the Lord's testing of teachers' doctrine (commentary on 3:13), with Institutes 3.5.6 for "deadly fiction". Augustine named as allowing the affliction reading as one possibility. I could not re-read Calvin here; the commentary wording is hedged to "the Lord's testing of their doctrine".
5. Accepted. Readings entry rewritten to the real spread (Origen, Augustine undecided, Gregory, Greek fathers incl. Chrysostom, Orthodox divided, main Protestant churches final judgment only); deep dive, Orthodox card and the `purgatory` topic text made consistent; purgatory and final-judgment proposals now carry sources.
6. Accepted. 1:14 re-derived from the word flags (SBL, THGNT, WH omit "to God"; NA28, Tregelles, TR, Byz have it); bracket claims removed; entry says it names editions only. 2:4 rebuilt as three readings. The "Metzger notes peithoi is not found elsewhere" line is replaced by a plain statement of the noun/adjective difference.
7. Partly accepted. Origen now "traced the words to a lost writing he called the Secrets of Elijah" (key origen-comm-matthew-series); Jerome cited only for his commentary on Isaiah 64:4 (key jerome-isaiah); the Epistle number is not used. Not independently re-read in this pass.
8. Accepted per the lead decision. "Temple" kept for naos; note 3:16 now says the Greek is naos (the inner house of the god), that Matthew-Acts use "sanctuary", and why Paul's image takes "temple"; gloss and `temple` topic text brought into line (no "sanctuary" as the part's word).
9. Partly accepted. Rewrote 3:15 ("forfeit it ... yet like one who comes through fire"), 2:14 ("welcome") and 4:13 ("we appeal to them", with the new variant). 4:9 and 3:13 left: close wording is forced by the Greek. Anchors, glosses and note text for 3:15 updated.
10. Accepted: new variants for 1:28 (kai), 4:2 (hode; Plain English Translation now keeps "Here, moreover"), 4:13 (dysphemoumenoi / blasphemoumenoi), 4:17 ("Jesus"). 1:2 (te) declined as optional and not visible in English.
11. Partly accepted. The Metzger claim at 2:1 is replaced by the plain fact that the editions divide; the 3:5 witness list reduced to editions; "(as reported by NA28)" removed from 1:15 and 3:3. The manuscript lists at 1:15, 2:1 and 3:3 are unchanged and not re-checked against the apparatus (flag for the lead).
12. Accepted. 2:6 note and ch. 2 settings hedged ("possibly", "may"); an "irony / the Corinthians' own words" view added to the 2:6-16 card.
13. Accepted ("later in the letter").
14. Accepted. Note 1:13 no longer says all three questions expect "No"; the first has no negative word and may be a statement; 6:11 and Matthew 28:19 described correctly.
15. Accepted ("commentators divide"; "many take it").
16. Accepted. Note 1:20 gives the one-class view and says "New Testament".
17. Accepted. Winter's claim now cites Philo and Paul among the Sophists (winter-sophists-1013).
18. Accepted. 1QS 3:23 replaced with 1QpHab 7:4-5 (key pesher-habakkuk).
19. Accepted. Athanasius (Letters to Serapion 1) and Basil (On the Holy Spirit 16) get source keys.
20. Accepted. Note 4:1 says the Vulgate has mysteriorum at 4:1 and names the places where it has sacramentum; the sacramental reading is attributed to "many" Catholic and Orthodox writers.
21. Accepted. halakhah now from the verb halakh, not derekh.
22. Accepted. 4:21 note no longer says the rod returns at 5:3-5.
23. Accepted. All Maccabees cites unified to 2 Maccabees 12:45-46 (notes, echoes, card; also the purgatory proposal); "houtos de hos dia pyros" corrected.
24. Accepted. Chafer key added; book.json Baptist card now cites BFM 2000 arts. 1 and 6; ch. 4 Catholic and Orthodox sentences attributed to "Catholic writers" and "Orthodox writers"; Anglican quadrilateral key lambeth-1888 added; purgatory and final-judgment proposals sourced. The optional Pentecostal/Baptist view of the "spiritual person" at ch. 2 was not added.
25. Accepted. sophia count is 15; pneuma wording now "8 pneuma plus 3 pneumatikos = 11"; the Gallio date and Paul's stay are separated in book.json facts and ch. 1; "few doubt" replaces "nothing ... seriously suspected" and Strugnell is named.
26. Accepted. "A Roman court day" softened to "may point to"; Marshall named as the source of the patron view; "may have been another reason" at 4:12.
27. Partly accepted. 2:4 is now "persuasive wisdom". 1:10 "one mind and one view" left: "view" renders gnome and is plain enough.
28. Accepted. New note on "call on the name of our Lord" (1:2, Joel 2:32); Peter and Corinth added to the 1:12 note (Dionysius of Corinth via Eusebius); the 2:10 note now says the Plain English Translation drops gar/de.

## Verification pass (2026-10-29)

Checked against rule 2 (see `.scratch/1Co-01-04-verify/sources-checked.md`). Counts: about 72 items verified and kept, 24 corrected, 21 removed. The main corrections: Chrysostom (Homily 9) takes the materials of 3:12 as actions, rejects the teachers reading and reads the fire as punishment; Calvin on 4:6 does not make it a rule to stay within Scripture; Calvin calls purgatory "a deadly device of Satan" (Institutes 3.5.6); the 2:9 note now states only what the Origen and Jerome source says; manuscript lists at 1:15, 2:1, 3:3 and 3:5 and the "NA28 brackets" claim removed; the `metzger` and `nestle-aland-28` keys removed from every variant; Strugnell, 4Q169, 4Q174, 1QpHab, 1QS, the Heidelberg Disputation, Athanasius and the Assemblies of God citation removed as unconfirmed; the dating of Paul in Corinth now rests only on the Claudius letter of AD 52 naming Gallio. Rosh Hashanah 16b-17a, Eduyot 2:10, the Calvin comment on 3:12-15, the confessions, the Catechism paragraphs, Dei Filius, Chafer and the bibliographies were opened and confirmed. `node tools/build.js --check 1Co/01-04`: 0 errors, 0 warnings.

## Verification check (2026-10-29)

Second, hostile look at the verification pass. Rule 2 followed here: only what I opened in this session (Wikipedia, newadvent, biblehub's reproduction of Calvin, Perseus/Attalus/Latin Library pages as shown by search results, `texts/en`, the part's `plain.txt` files). `node tools/build.js --check 1Co/01-04`: 0 errors, 0 warnings.

**Item (1), hedges and unopenable works.** Grep for "as reported", "not rechecked", "from memory", "unverified", "not checked", "reported by", "second hand", "search result": 0 hits in the part's JSON or book.json. No `metzger`, `nestle-aland` or apparatus key remains in this part (0). "NA28" appears only as an edition label in variants `w` fields, which the log says were checked against `texts/orig/1Co.json`. One unopenable-work problem of another kind: see finding 1.

**Item (2), 10 claims tried, not in the log's verified list.**
- 3:17 note, Chrysostom (Homily 9) aims 3:17 at the man guilty of sexual sin, not at teachers. Verified (newadvent.org/fathers/220109.htm: "attacks him also who had been guilty of uncleanness"; teachers reading appears only under 3:12-15, which he rejects).
- 3:21 note, Seneca, On Benefits 7.3-4 (the wise man owns all things). Verified (Perseus Latin of 7.3.2 as shown in a search result: "Unus est sapiens, cuius omnia sunt"; 7.3.4 raises the objection that gifts to the wise are then impossible).
- 3:21 note, Diogenes Laertius 7.125, Stoic "all things belong to the wise". Verified (Hicks text via Attalus excerpt in a search result: the law gives the wise a perfect right to all things).
- 1:24 note, Wisdom of Solomon 7:25 "a breath of God's power". Verified (RSV/KJV pages: "breath of the power of God").
- 4:7 note, Calvin cites Augustine against the Pelagians on 4:7. Verified (Calvin's comment as reproduced at biblehub.com/commentaries/calvin/1_corinthians/4.htm, read through a search result).
- 1:2 note, Gaius (Romans 16:23) hosts "the whole church". Verified (`texts/en/Rom.json`: WEB "host of the whole assembly", BSB "hosted me and all the church").
- 3:15 note, Amos 4:11 and Zechariah 3:2 "firewood snatched from the fire". Verified (`texts/en/Amo.json`, `Zec.json`: WEB "burning stick plucked out of the fire"; BSB "firebrand snatched"). The Plain English Translation's own words were not compared, only the sense.
- 1:19 note, the quoted Plain English Translation of Isaiah 29:14. Verified: identical to `content/books/Isa/parts/24-30/plain.txt`.
- 1:22 note, Josephus Antiquities 20.97-98 and 20.167-168, men leading crowds into the desert "promising signs of freedom". Partly wrong: a search result quoting Whiston gives 20.167-168 as impostors promising "wonders and signs", and puts the "deliverance and freedom" wording at 20.188 (the Festus passage). 20.97-98 (Theudas, Jordan) was verified in the log, but nothing opened has "freedom" there. See finding 2.
- 1:12 note, "F. C. Baur (1831) read these as four parties". Unverifiable as written: the Wikipedia Baur page states the 1831 essay on the "Christ-party" and Jewish-Christian opposition; it does not mention four parties, Apollos or Cephas. See finding 3.

**Item (3), named modern-scholar attributions the log does not show as checked** (the log's own "Not checked" line lists Fee, Thiselton, Garland, Dunn, Cullmann, Hurtado, Hengel, Jeremias, Aland, Baur, Pearson, Theissen, Meeks, Marshall, Hays, Murphy-O'Connor, Litfin/Winter/Pogoloff/Mitchell). Locations, by note `v` or chapter `n`:
- notes: 1:2 Murphy-O'Connor; 1:8 and 2:8 Hurtado/Fee; 1:10 Mitchell, Conzelmann; 1:12 Baur (four parties), Fee, Thiselton; 1:16 Jeremias, Aland; 1:17 Mitchell, Winter, Litfin, Pogoloff, (Bruce); 1:18 Hengel; 1:19 Hays; 1:21 Barth and followers; 1:24 Fee, Dunn; 1:26 Theissen, Meeks; 2:6 Fee; 2:8 Fee, Thiselton, Cullmann; 2:13 Thiselton; 3:5 John N. Collins; 4:6 Hooker (journal title only checked); 4:10 Welborn; 4:12 Hock.
- chapters: 1 settings, views and deep dive (Baur, Fee, Thiselton, Garland, Mitchell, Martin, Hengel, Litfin, Bruce, Winter, Pogoloff, Theissen, Chow); 2 readings and views (Fee, Thiselton, Walker, Pearson); 3 readings and settings (Fee, Thiselton, Garland); 4 deep dive (Fee, Thiselton, Hooker); topics `1-corinthians` uncommon (Baur); variants 3:1 why (Fee, Thiselton); book.json authorship, lenses, reading, spec (Weiss, Schmithals, Fee, Thiselton, Mitchell, Garland, Walker, Murphy-O'Connor, Theissen, Meeks, Bruce, Winter, Boyarin, Fredriksen, Nanos).
- Count: about 60 location/name pairs, none confirmed as a position by an opened source.

**Item (4), traditions cards.** 0 cards with fewer than two views (ch1 to ch4 each have six; book card six). 0 cards that lost a tradition with a clearly distinct view, but: the Pentecostal view removed from the ch1 card and the Catholic and Orthodox 4:6 sentences were dropped, leaving the 4:6 Catholic and Orthodox views general (acceptable). See finding 1 for the Ware key on the Orthodox views.

### Findings
1. **Major.** `ware-orthodox` (Kallistos Ware, The Orthodox Church) is still cited on Orthodox views: book.json (2 views), `chapters.json` (8 views, ch1 to ch4) and one note. The log lists Ware under "Not checked", and the other four parts removed this key for that reason. The book was never opened here. Remove the key (keep the view only if it states what an opened source says) or open it.
2. **Minor.** 1:22: "promising signs of freedom (Antiquities 20.97-98; 20.167-168)". Opened pages put "deliverance and freedom" at 20.188, and 20.167-168 speaks of wonders and signs. Drop "of freedom" or add 20.188 after opening it.
3. **Minor.** 1:12: Baur "read these as four parties" is not shown by the page opened (only the 1831 Christ-party essay). Keep "Baur (1831) saw a Jewish-Christian opposition party" or cut.
4. **Minor.** book.json Pentecostal view (chapters 12-14 gifts have not ceased) has no source; the log admits it was kept "without a citation". It is a broad statement but names a whole tradition family; give a document or drop.
5. **Minor.** The verification section's counts (72/24/21) cannot be audited against content because the "Not checked" scholar list (item 3) is left in place without a hedge; the pass did not say so in review.md. Add that line to the Verification pass section.

## Verification fixes (2026-10-29)

Second round, following the findings of `## Verification check (2026-10-29)`. Log: `.scratch/1Co-01-04-verify/sources-checked.md` ("Second round"). Counts: about 22 scholar attributions verified and kept, 14 names removed (view kept as "some scholars" or "many commentators"), 2 corrected, 3 dates removed, 6 views re-sourced or reworded. No commentary key (Fee, Thiselton, Garland) remains on any entry of this part; they stay only in book.json's reading list, where their descriptions now state only series and year.
1. `ware-orthodox` removed from all 8 chapter views, 2 book.json views and note 4:10 (and from book.json's sources list). The Orthodox views on chapters 1, 2 and 4 and book.json were reworded to what opened pages state (OrthodoxWiki, Wikipedia "Theosis", the OCA pamphlet) and carry new keys `orthodoxwiki-orthodox-church`, `oca-scripture-tradition`; chapter 2 reuses `wikipedia-theosis`. The sentence about "those outside ... the way back" and the claim about Paul's commanded practices in the liturgy were cut.
2. Note 1:22: Josephus now "promising wonders and signs (Antiquities 20.97-98; 20.167-168)"; "of freedom" dropped, since the "deliverance and freedom" wording is at 20.188, which I did not open.
3. Baur (note 1:12, chapter 1 views and settings, topic): corrected. The 1831 essay reduces the four slogans to two real groups (a Petrine party including the "Christ party", a Pauline party including Apollos), not four parties.
4. book.json Pentecostal view: kept, with new key `wikipedia-cessation-continuation` (a page that states the Pentecostal tradition holds the gifts continue).
5. The "Not checked" scholar list of the first pass is now closed: each name was either verified, stripped to an unnamed view, or removed (see the log). Counts of the first pass stand.

## Card restoration (2026-10-29)

Following `tools/agent-restore-cards.md`. 1 view restored (Pentecostal), 2 views extended (Catholic, Lutheran on 3:15); book.json unchanged. Each restored view cites a page opened in this session; the URLs are in `.scratch/1Co-01-04-verify/sources-checked.md` ("Card restoration"). No card was re-created: none had been turned into a note sentence.

Views still missing: Catholic and Orthodox added sentences on the 4:6 card; Anglican prayer for the departed on the 3:15 card; Baptist 'loss of reward' reading of 3:15 (the Baptist Faith and Message does not say it); Reformed Calvin on splitting a church (not found). The book.json Orthodox views were already re-sourced and stand.

`VERBOSE=1 node tools/build.js --check 1Co/01-04`: 0 errors, 0 warnings in this part.
