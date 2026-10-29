# Hostile review: 2 Corinthians 1-5 (part 01-05) and book.json

Reviewer: hostile-reviewer agent. Files read: plain.txt, notes.json (71), variants.json (12), glosses.json, chapters.json (5 chapters, 11 traditions cards, 12 settings, 5 spec boxes), topics.json (29), sources.json, content/books/2Co/book.json, the 2Co topic and term proposals in content/proposals/nt/, and the chapters of parts 06-09 and 10-13 (to check book.json's description of them). Checked against texts/orig/2Co.json (SBL, Byzantine, and the per-word edition marks in `w`) and `node tools/literal.js`. `node tools/build.js --check 2Co/01-05` and `--check 2Co`: 0 errors, 0 warnings, so every finding below is a content problem the checker cannot see.

## Verdict

The part is solid, readable and mostly honest: the Plain is close to the Greek, the notes are rich, and the 11 cards cover real disagreements with sources that are mostly real. I found no invented source, manuscript or quotation. The weak points are these. (1) The variants file is thin where it matters. Not one of the 12 entries names a manuscript, the brief requires it, and a handful of KJV-visible and doctrinally relevant variants (5:14 "if one died", 3:14 "which veil", 2:17 "the rest", 3:9, 1:15, 5:18) have no entry. One edition list is wrong (THGNT at 4:6). (2) The two places where the writer overrode the literal line (1:12 and 5:3) are defensible choices, but the stated reasons are unsupported or overstated. (3) A few Plain renderings drift or lose Greek (4:17 "outweighs", 1:3-4 against the NIV, 5:10 drops "according to what he did", 5:2/5:4 for one verb). (4) Several scholar placements look wrong or unverifiable (Thrall as a defender of unity, Gager, Harris on 5:1). (5) The 3:14 cards for Orthodox and Lutheran are defined by anti-Jewish episodes instead of by each tradition's own answer, and seven card entries have no source. (6) The `new-covenant` topic duplicates a section of `covenant`. (7) The `arrabon` term now has two conflicting entries ("first payment" here, "down payment" in Ephesians 1:14).

Findings: 0 critical, 13 major, 31 minor.

---

## What I checked and found sound (so the fixer leaves it alone)

- 5:17: SBL and NA28 agree and lack "all things"; the Plain follows them; the variant entry is correct (`τὰ πάντα` is TR/Byzantine only).
- 5:10: SBL `φαῦλον` against Byzantine `κακόν` makes no English difference; the Plain "bad" is fine (the real problem at 5:10 is in finding 5).
- 4:6 first entry (`λάμψει` against `λάμψαι`), 1:6, 1:10, 1:20, 4:10, 4:14, 5:17: editions match the per-word marks in `w`.
- 5:3: the edition split is real in the project data. SBL, Tyndale House, WH, Tregelles, TR and Byzantine read `ἐνδυσάμενοι`; only NA27/NA28 are marked as printing `ἐκδυσάμενοι`. The Plain follows `ἐνδυσάμενοι`, which is the right call (see finding 2 for the missing evidence).
- CCC 121, 395, 605 (with the Quiercy quote), 615-616, 1021-1022, 1030-1032, 1038-1041, 1121, 1274, 1295-1296, 1441-1442, 1461, 1961-1964, 1999; Westminster 7.5-6, 18.2, 19.6, 22, 27.1, 33.1-2; Dort II.8; Heidelberg 37-40, 83-85; Schleitheim art. 7; Augsburg 6, 11, 17, 25, 28; Formula of Concord SD 5 and 11; Trent sessions 6 and 14; Benedictus Deus (1336); Nostra Aetate 4; ELCA 1994 declaration; Florence's Cantate Domino: all point to the right place for the claim made.
- Publication details in sources.json (Ellis NTS 6, Hooker JTS 22, Bornkamm NTS 8, Marshall NovT 25, Dodd BJRL 17-18, Martyn 1967, Hafemann 1986 and 1995, Harris NIGTC 2005, Thrall ICC 1994/2000, etc.) are correct as far as I know.
- Greek facts checked: `apokrima` and `doloo` are hapax in the NT; `nekrosis` only here and Rom 4:19; `philotimeomai` in Rom 15:20, 2 Cor 5:9, 1 Th 4:11; "new covenant" in Paul only here and 1 Cor 11:25; "old covenant" only 3:14; "comfort" ten times in 1:3-7.
- JW, Adventist and Messianic Jewish cards: accurate and fair to those groups' own teaching (see finding 28 for the sourcing gap on the Adventist entry). They are not caricatured and not ranked.
- No em-dashes anywhere in the part or book.json.

---

## Major findings

**1. Major. variants.json (all 12 entries). No manuscript witnesses; contrary to the brief.**
Every `w` field ends "(editions only; manuscript lists not checked)". brief-nt.md says to "name real witnesses with dates" and gives Metzger, NA28/UBS5 and Tischendorf (Source Library) as sources. The two places where the writer deliberately overrode the literal line (1:12, 5:3) are exactly where a reader needs the manuscripts, and neither entry gives any. For 1:12 the standard lists put `ἁγιότητι` with P46, Sinaiticus, A, B, C and `ἁπλότητι` with D, G and the Byzantine mass (this is what an online summary of the apparatus gives; confirm in Tischendorf or Metzger). For 5:3, `ἐνδυσάμενοι` is carried by P46, Sinaiticus, B, C and the Byzantine text, and `ἐκδυσάμενοι` by D* F G and part of the Latin; confirm the same way. The entry's phrase "The editions are divided" is true, but it makes the manuscript picture look evenly balanced when it is not. Fix: add witnesses and dates to at least 1:1, 1:6, 1:12, 1:20, 3 (new), 4:6, 4:14, 5:3, 5:17; attribute ("reported by Metzger").

**2. Major. variants.json 1:12 and 5:3. The reasons given are weak or unsupported.**
1:12: the `why` says "Paul often joins holiness and sincerity to God's work". Paul never joins `hagiotes` and `eilikrineia` anywhere else (`hagiotes` is rare in Paul; 1 Cor 5:8 pairs `eilikrineia` with truth, and 2 Cor 11:3 has `haplotes`). This is an unsupported claim and should go. The honest reason is external: the better-attested reading is `ἁγιότητι`, and `ἁπλότητι` looks like a scribal assimilation to 8:2, 9:11, 11:3. Also note that the literal line (generated from the NA/TAGNT base) reads `ἁπλότητι` "openness", so the departure from the literal line must be said in the entry. The p field says "(NA28, KJV)" for "simplicity"; consistent with the project data but unverified in NA28's own apparatus. Also a typo: "(hagiotes, haplotes).The" (missing space).
5:3: the argument that "taken off" is the harder reading and that scribes smoothed to "put on" is the opposite of Metzger's published judgment as I understand it (he treats `ἐκδυσάμενοι` as an early change to avoid the tautology "if clothed we will not be found naked"). Present both arguments, label who holds which, and add the witnesses (finding 1).

**3. Major. variants.json 4:6 (second entry). Tyndale House GNT is placed with the wrong reading.**
The `w` marks for `Ἰησοῦ` at 4:6 are `NnYTB`: the Tyndale House text (Y) contains "Jesus Christ", as do NA27/NA28, the TR and Byzantine. The entry lists "Tyndale House GNT" with the shorter SBL/WH/Tregelles reading "face of Christ". Fix: move THGNT to reading 1; the `why` ("shorter reading in the SBLGNT") is fine, but it is no longer SBL/THGNT against NA28.

**4. Major. variants.json. Missing entries for variants that change the English or that the KJV reader will see.**
From the edition marks in `texts/orig/2Co.json` and the Byzantine text:
- 5:14: TR/Byzantine read `ὅτι εἰ εἷς ὑπὲρ πάντων ἀπέθανεν` ("if one died for all, then all were dead", KJV). SBL has `ὅτι εἷς`. The Plain says "because we have reached this conclusion: one died for all". A conditional against a statement of fact matters for the atonement card on this very verse.
- 3:14: TR/Byzantine read `ὅ τι ἐν Χριστῷ καταργεῖται` ("which is done away in Christ"), making the veil the thing removed; SBL/NA28 have `ὅτι` ("because in Christ it is passing away"). The Plain's "it is passing away" is ambiguous about what is passing away (the veil, the covenant, or the reading), and the only way a reader can see why the KJV differs is a variant entry. This is the most important textual point in the supersession discussion.
- 2:17: SBL `οἱ πολλοί` ("the many"); Byzantine `οἱ λοιποί` ("the rest"). The chapter 2 view C line names it, but there is no variants.json entry.
- 3:3: TR/Byzantine `καρδίας` ("of the heart") against `καρδίαις`. Named in the chapter 3 view C line, no entry.
- 3:9: SBL dative `τῇ διακονίᾳ ... δόξα` ("to the ministry... glory") against Byzantine nominative `ἡ διακονία ... δόξα`/`ἐν δόξῃ` (KJV "be glory"). The Plain "had glory" follows SBL; no entry.
- 1:15: note 11 says Westcott-Hort print `χαρά` ("joy") for `χάριν`. The `w` marks agree (W is missing from the `χάριν` mark). A one-line note is not a variants entry, and the brief wants one.
- 5:18: TR/Byzantine `διὰ Ἰησοῦ Χριστοῦ` (KJV "by Jesus Christ") against SBL `διὰ Χριστοῦ`.
- 1:11: Byzantine `ὑμῶν` ("on your behalf") against `ἡμῶν`; 5:12 TR/Byzantine `γὰρ οὐ` against `μὴ`; 5:10 TR/Byzantine `κακόν` ("evil", KJV). These are small but KJV-visible; the first two could be bundled.
- 3:2: please also check whether any witnesses read `ὑμῶν` ("your hearts") for `ἡμῶν` (I recall a variant here in the apparatus; the project data shows no edition split, so I cannot confirm). If so, it belongs in the file.
- 5:10 (check): I recall a reading `τὰ ἴδια τοῦ σώματος` ("the things of his own body") for `τὰ διὰ τοῦ σώματος` in some witnesses; verify in Metzger or Tischendorf.

**5. Major. plain.txt 5:10. A Greek phrase is dropped, and the clause is garbled.**
Greek: `ἵνα κομίσηται ἕκαστος τὰ διὰ τοῦ σώματος πρὸς ἃ ἔπραξεν, εἴτε ἀγαθὸν εἴτε φαῦλον`: "that each may receive the things [done] through the body, in line with what he did, whether good or bad". The Plain, "so that each one may receive back what was done through the body, whether good or bad", drops `πρὸς ἃ ἔπραξεν` entirely and says one "receives back what was done", as if the deed itself were returned. The dropped phrase is the sentence's measure of judgment, and two of the cards (5:10 "Are Christians judged for their deeds?" and the Catholic/Reformed answers) turn on it. Fix, for example: "so that each one may receive what is due for the things done through the body, according to what he did, whether good or bad" (do not copy NIV/ESV wording beyond "good or bad").

**6. Major. plain.txt 4:17 and note 53. "outweighs" loses the Greek image and tracks the NIV.**
The Greek is `αἰώνιον βάρος δόξης` ("an eternal weight of glory"), and note 53 is entirely about "a weight of glory" and a Hebrew word play on `kabod`. The Plain has no "weight": "a glory that outweighs it". The note anchor is "a glory that outweighs it", so the reader finds a note about "weight" under a verse with no weight in it. "far outweighs" is also a signature NIV phrase. Fix: restore "weight" ("a weight of glory beyond all measure, lasting forever") or rewrite the note to match; avoid "outweighs".

**7. Major. plain.txt 1:3-4. Close structural echo of the NIV.**
The Plain's sequence "Father of compassion and the God of all comfort / comforts us in all our trouble / so we are able to comfort others in any trouble ... the comfort God has given us" follows the NIV's clause order and its "in any trouble ... comfort we ourselves receive from God" almost phrase for phrase. The Greek is one long relative sentence; the Plain's breaking into three sentences is good, but the phrases still shadow the NIV. Rephrase the second and third sentences from the Greek (`ἐν πάσῃ θλίψει`, `διὰ τῆς παρακλήσεως ἧς παρακαλούμεθα αὐτοὶ ὑπὸ τοῦ θεοῦ`). Smaller case: 1:20 "our 'Amen' to God, for his glory" is very close to the ESV's "our Amen to God for his glory"; vary it.

**8. Major. book.json authorship, topics 2-corinthians (and brief-2co.md). Thrall is wrongly listed among defenders of the letter's unity.**
book.json: "Defenders of unity include Harris, Garland, Barnett and, with qualifications, Thrall." The topic 2-corinthians repeats it ("Thrall in part"). To my knowledge Thrall's ICC (vol. 1, introduction) argues that 2 Corinthians is composite: chapters 1-9 as one letter and 10-13 as a later, separate one. A search could not give me her exact words, so verify in the ICC introduction before the fix; but "defender of unity" is at best a misleading description. The same error is in brief-2co.md ("Harris, Garland, Thrall, Barnett"), so the writer inherited it, but it is wrong on the page. Also book.json says "most scholars... think the book is made of two or more letters" while the topic page says "Most scholars accept that Paul wrote all of it" (about authenticity, not unity; but the two sentences read as opposed). Harris's own unity argument is that 10-13 was written after an interval, not that it is "one sitting"; the phrase "(5) the letter is one unit written over several days or in several moods" should say so.

**9. Major. chapters.json ch.3 traditions, "Is the covenant with Israel through Moses ended? (3:14-16)". The Orthodox and Lutheran entries are defined by anti-Jewish episodes, not by a doctrinal answer.**
Orthodox: only says the Fathers read the veil as Israel's failure and that Chrysostom's sermons "were later used against Jews", then that teachers are "divided". It gives no Orthodox answer to the question asked (is the Mosaic covenant ended? fulfilled in Christ? what of Israel?). Lutheran: the whole entry is Luther's 1543 tract and the 1994 ELCA repudiation; it does not state the Lutheran confessional position (Law and Gospel; the ceremonial law abrogated, the moral law abiding; Romans 11). A Lutheran or Orthodox reader would call this unfair: it presents each tradition at its worst moment. Fix: state each tradition's teaching in its strongest form first (with sources: Augsburg Confession/Formula of Concord SD 5-6; the Orthodox liturgical and patristic reading of Moses as type), then note the history of misuse. Also the Orthodox 3:6 entry names Origen as a "Greek Father" in an Orthodox card; Origen's standing in the Orthodox church is contested (condemned 553), so say so or use Chrysostom and Cyril of Alexandria.

**10. Major. katargeo "passing away" (plain.txt 3:7, 11, 13, 14; note 35; terms proposal; book.json "key words").**
(a) The English "passing away" is intransitive and slow: it suggests fading (reading 1) and so chooses a side while the note says "English cannot give all three". The Greek is a passive of a transitive verb: "being brought to an end/set aside/rendered ineffective". The note itself says the verb "means to make ineffective, to bring to an end", then renders it as the opposite kind of process. (b) The note's "Scholars divide: (1) faded; (2) temporary by design; (3) Moses wore the veil to protect the people" mixes three different questions (what the verb means; whether the Law was meant to be temporary; why Moses wore the veil). Option 3 is a motive for the veil, not a meaning of the verb. (c) 3:14 "because in Christ it is passing away" leaves the antecedent of "it" open; with the TR variant (finding 4) the question is live. (d) 5:17 `παρῆλθεν` is also "passed away" in the Plain ("The old things have passed away"), making two different Greek words look like one; the fixer should either mark the difference in a gloss or choose a different English for one. (e) The ch.3 deep dive says Paul "twice says it was passing away (3:7, 13)"; the note says four. Make them agree.

**11. Major. topics: `new-covenant` duplicates `covenant` and carries a loaded title.**
content/topics/covenant.json already has a section "The new covenant in Jeremiah and Ezekiel" and lists "new covenant" in its `aka`. The new proposal `new-covenant` is titled "Jeremiah's New Covenant and the Old" with aka "first covenant and second covenant", "Mosaic covenant and the new". CLAUDE.md: one topic per subject, search `aka` first. 1Co 09-11 also tags `new-covenant`, so the duplication will spread. The title also builds a replacement frame ("the Old") into the navigation label, which the passage-by-passage cards are careful to leave open. Fix: either merge into `covenant` and drop the new id (and the 2Co `covenant` contribution "The new covenant in 2 Corinthians", which duplicates it), or keep the id with a neutral title such as "The New Covenant" and remove the `aka` overlap from `covenant`. The lead must decide; the topic file is in proposals.

**12. Major. content/proposals/nt/terms.json. `arrabon` has two entries with different renderings for the same verse.**
Entry 4 (Ephesians): "down payment" (Ephesians 1:14; 2 Corinthians 1:22; 5:5). Entry 26 (2Co): "first payment" (2 Corinthians 1:22; 5:5; Ephesians 1:14). Ephesians 1:14 reads "down payment" in content/books/Eph/parts/01-03/plain.txt; 2Co reads "first payment" at 1:22 and 5:5; note 17 even lists "down payment" as one of the "other versions" while it is this site's own Plain of Ephesians. CLAUDE.md: key terms are rendered the same across the Bible. One writer must give way, with a "why". (I would keep "first payment" and ask the Ephesians fixer to change 1:14, since the 2Co note justifies it.)

**13. Major. chapters.json cards, unsourced entries (7).**
These entries have an empty third element (no source key): ch.3 Dispensationalist (3:6 card and 3:14 card), ch.4 Lutheran and Pentecostal (4:4), ch.5 Lutheran and Adventist (5:1-10), ch.5 Dispensationalist (5:10). The brief requires each tradition's answer "sourced (catechisms, confessions, named theologians)". The Lutheran 5:1-10 entry makes a contested claim (Luther on "sleep", later Lutheran orthodoxy on conscious souls) with no source at all. Fix: cite Scofield/Chafer/Ryrie or the Dallas Seminary statement for Dispensationalists; the Assemblies of God Statement of Fundamental Truths for Pentecostals; Luther's hymn text, Apology/Large Catechism and a Lutheran dogmatics (Pieper, or the Formula's silence) for Lutherans; Seventh-day Adventist Fundamental Belief 26 ("Death and Resurrection") for the Adventist 5:1-10 entry. (The `adventist-beliefs` key points at belief 27 "The Millennium and the End of Sin", which fits the 4:4 entry but not the 5:1-10 one.)

---

## Minor findings

**14. Minor. notes.json 5:1 (note 55) and ch.5 deep dive, Harris's position.**
Harris is listed (a) for "a heavenly body received at death" and (b) among those who hold that Paul "did not change his mind" between 1 Corinthians 15 and 2 Corinthians 5. Secondary sources agree with (a) for Raised Immortal (1983); but Harris also published an article titled as a question, "2 Corinthians 5:1-10: Watershed in Paul's Eschatology?" (Tyndale Bulletin 1971), and his 2005 NIGTC may differ from the 1983 book. Verify both attributions in his own text before keeping them; if unverified, attribute only "Raised Immortal (1983)".

**15. Minor. notes.json 3:7 (note 33), book.json lens J, ch.3 deep dive. Gager attribution.**
The ch.3 "How the letter and the Spirit have been read" paragraph says "A last group (Gager and others) reads the chapter as a contrast between Paul's own mission to Gentiles and the stricter claims of his opponents". Note 32 gives the same idea as "suggested by some Paul-within-Judaism readers". Gager's own treatment is about Paul's address to Gentiles, not about the opponents. I cannot confirm the attribution; name a source or say "some".

**16. Minor. notes.json 5:17 (note 64). Wright grouped with "apocalyptic readers".**
Martyn is the apocalyptic reader; Wright reads new creation as covenant fulfilment/restoration. Split the attribution.

**17. Minor. plain.txt 5:2 and 5:4. One Greek verb, two English renderings.**
`ἐπενδύσασθαι` ("to put on over") occurs at both 5:2 and 5:4. The Plain has "longing to be dressed in our dwelling" (5:2) and "to be dressed over" (5:4); the notes, chapter summary and topic text all talk about "dressed over" as a key image. Use "dressed over" (or "put on over") in both, with a gloss.

**18. Minor. plain.txt 3:3. "prepared through our service" has no Greek behind "prepared".**
`διακονηθεῖσα ὑφ᾽ ἡμῶν` is "served by us/delivered by us" (verb of `diakonia`). The Plain's "prepared" is an interpretation, and it hides the `diakon-` word group that the book's own key-term list keeps visible ("ministry"). Use "delivered through our ministry" or "served by us".

**19. Minor. plain.txt 3:7 against note 33.**
The Plain: "the ministry that brought death"; Greek `ἡ διακονία τοῦ θανάτου`, and note 33 says "Paul's phrase 'ministry of death'". 3:9 keeps "ministry of condemnation". Make 3:7 "the ministry of death" so Exodus 32 readers and the note line up.

**20. Minor. plain.txt 2:17 against 1:12 and note 28.**
`εἰλικρίνεια` is "sincerity" at 1:12 and in note 28 ("his work is 'sincere'") but "pure motives" at 2:17 (`ἐξ εἰλικρινείας`). Keep one English word.

**21. Minor. plain.txt 5:7, 3:18, 4:4. Interpretive commitments that need a note.**
5:7 "guided by faith" adds "guided" for `διά` and book.json quotes it as a famous line; "walk by faith" is plain. 3:18 "from the Lord, who is the Spirit" commits to one of the three readings of `κυρίου πνεύματος` that note 40 lays out. 4:4 `εἰς τὸ μὴ αὐγάσαι` ("so that [they] might not see/shine") is rendered "cannot shine on them" with no note on whether `αὐγάζω` means "see" (the NIV/ESV choice) or "shine".

**22. Minor. plain.txt 5:19 against note 66.**
The note says the periphrastic reading "God, in Christ, was reconciling" is the likelier grammar, but the Plain keeps the KJV word order "God was in Christ, reconciling". The Plain is ambiguous enough to allow both; say so in the note.

**23. Minor. variants.json 1:14.** "NA28 (with the word bracketed)": the `w` marks do not show brackets; confirm in NA28 or drop the parenthesis.

**24. Minor. notes.json 1:1 (note 1).** "Paul's first letter to Corinth was addressed in a similar way (1 Corinthians 1:2)". 1 Cor 1:2 adds "all who call on the name of our Lord in every place", not Achaia. Fix the comparison.

**25. Minor. notes.json 2:5 (note 21).** "did wrong to a person and not to a family (7:12)": 7:12 says "not on account of the one who did the wrong nor the one who was wronged"; "not to a family" is the writer's gloss on 1 Cor 5 and reads oddly. Rewrite.

**26. Minor. chapters.json ch.1 settings 1:1-2.** "when": "some months after Titus brought news that the break had begun to heal". 7:5-16 and the deep dive place the writing right after Titus's report in Macedonia. Remove "some months".

**27. Minor. chapters.json ch.5 view L.** "'reconcile' appears five times in four verses": the five occurrences are in 5:18-20, three verses. "the shortest of Paul's pictures of the cross (5:21)" is an overclaim; say "one of the shortest".

**28. Minor. notes.json 4:8 (note 49), ch.4 deep dive.** Epictetus (born about AD 50) is a later Stoic than Paul; use Seneca (a contemporary) or say these lists are "found later in Epictetus".

**29. Minor. chapters.json ch.5 traditions, Baptist and Reformed 5:1-10.** "the bodies sleep until the resurrection" (Baptist) and "rest in the grave" (Reformed) are not the confessions' wording. WCF 32.1 and the 1689 32.1 say the bodies "return to dust" and the souls "neither die nor sleep"; the 1689 changes "the highest heavens" to "paradise". The Baptist entry as written calls the 1689 Confession "the same as Westminster" yet quotes a different word; keep the actual words.

**30. Minor. sources.json / card "Anabaptist" 5:21.** The key `dordrecht-1632` is defined as "articles 16-17" (the ban and shunning), but the entry uses it for redemption through Christ's blood. Articles 3-4 are the right ones; the key is shared across the site, so the fix is to add the right articles to the entry text or add a new key.

**31. Minor. chapters.json ch.3 traditions, Reformed 3:6.** Calvin Institutes 2.11 is the comparison of the Testaments; Calvin's treatment of "letter and Spirit" in 2 Cor 3:6 is most directly in his commentary on 2 Corinthians. Cite the commentary (or confirm the Institutes section) for the 3:6 reading.

**32. Minor. notes.json 3:17 (note 40).** "Modalist and Unitarian groups read it differently" is true but gives no groups, no source and no reading. Either name the group and the reading (e.g. Oneness Pentecostals, Jehovah's Witnesses: both are covered elsewhere on the site) with a source, or drop the sentence.

**33. Minor. topics.json "paul" and "imperial-cult" contributions.** "his sense of being led in a victory parade as a captive of Christ (2:14)" and "whose captives are led to life" state the captive reading as fact. The Plain, note 26 and the term proposal all say the Plain keeps all three readings open. Re-word to "may picture himself as a captive". The topic `imperial-cult` is also a poor home for the triumph: a Roman military triumph is not emperor worship; the note does not claim that. Use a more fitting topic or add one.

**34. Minor. topics.json "covenant" contribution.** "speaking of the old covenant being read in the synagogues of his day (3:14)": Paul does not say "synagogues". Delete or write "when Moses is read aloud".

**35. Minor. proposals/nt/topics/2-corinthians.json and book.json.** The topic lead says the rivals "Paul's critics call super-apostles"; book.json says Paul "mocks" them with that name, which fits 11:5 and 12:11 better. Also book.json `topics` (29 entries) does not include `the-collection`, `super-apostles`, `thorn-in-the-flesh`, `third-heaven` or `boasting`, which parts 06-09 and 10-13 created or use. As the part that owns book.json, 01-05 should list them.

**36. Minor. book.json authorship.** "Hausrath, Kennedy, Bornkamm" all identify 10-13 with the tearful letter (so the earlier, not the "later"). The sentence "with 10-13 the later, or the 'tearful letter'" confuses two different theories (10-13 as a later letter; 10-13 as the earlier tearful letter). Split them.

**37. Minor. notes.json (notes 21, 25), book.json audience.** "Sent a harsh letter through Titus" is stated as fact. 7:6-7, 13-15 say only that Titus came back with news; that he carried the letter is the standard inference but is not in the text. Say "most likely".

**38. Minor. notes.json 5:17 (note 64) and ch.5 J lens.** Jubilees 4:26 and 1 Enoch 72:1 are cited without the label required for books accepted by one church (the Ethiopian Orthodox Tewahedo church holds both as Scripture). They are not presented as Scripture, which is correct, but add "(Scripture for the Ethiopian church)" at first use or call them "Jewish writings that some churches hold as Scripture".

**39. Minor. Spec boxes (5).** Each ends with "I do not know a commentator who...". That is an unverifiable claim of novelty, and at least one (Jeremiah 32 jar and 2 Cor 4:7) is the kind of link commentators do often mention. Soften to "I have not seen this in the commentaries I know of" or drop the claim. The book.json spec on Exodus 32-34 casts the painful visit as the golden calf and the Corinthians as covenant-breakers; since the letter itself says only that they grieved and then repented (7:6-16), say that the analogy is loose.

**40. Minor. chapters.json ch.1 views T and card.** Cyril of Jerusalem is used for the Orthodox reading of 1:21. I could not confirm that he cites 2 Cor 1:21 in the Mystagogical Catecheses; add the catechesis number (Mystagogical Catechesis 3) so the claim can be checked. The seal card has no Lutheran or Anglican entry; if the writer wants all the main traditions, add them or say why not.

**41. Minor. glosses.json 1:12 "boast about": "take pride in".** The Plain renders `καύχημα` as "proud" at 5:12 ("a reason to be proud of us") and `καυχάομαι` as "boast". Make one pair of words, or add a gloss at 5:12.

**42. Minor. notes.json 3:7 (note 34), note 4:7 (note 48).** "Dead Sea Scrolls were found in jars" is fine; "a familiar object in a city known for its bronze work" (3:18 note) is repeated in chapter 3 view H as a fact about Corinth. The bronze reputation of Corinth is real (Corinthian bronze), but the mirror link to `katoptrizomai` is speculation and should be marked "possible".

**43. Minor. plain.txt 1:18.** `πιστὸς δὲ ὁ θεὸς ὅτι` is an oath formula ("As God is faithful, our word...", compare 1:23). The colon in "God is faithful: our word to you is not 'Yes' and 'No.'" loses the oath force that the 1:23 note ("Does Paul swear an oath?") relies on. Add a clause or a gloss.

**44. Minor. notes.json 2:10 (note 22).** "the Greek-reading Orthodox" is an odd phrase for the Eastern churches; write "Eastern Christians who read the Greek".

---

## Cross-references, glosses, mechanics

- Cross-references look right in the sample I checked (1:17/Matt 5:37; 3:3/Jer 31:33 and Ezek 36:26; 3:16/Exod 34:34; 4:13/Ps 116:10; 5:19/Ps 32 and Rom 4:8). All quotes of other books' Plain pass the build's quote check.
- Settings: every speech/prayer/defense block has a card; the "readers" fields are specific (Corinthian honor culture, Cenchreae, Achaia). The `views` on 1:3-11 ("a wider audience") and 5:1-10 are fair. The dates (AD 55 or 56) are labeled as approximate.
- Reading level: the Plain is within 8th grade except the clauses mentioned above; "inscribed" (3:2-3) and "vouch" (3:1, 5:12) are the hardest words and could carry a gloss.
- The three prompts in book.json (clay pot, veil, triumph) are fine.

## Fixes applied

Fixer pass, 2026-10-29 (review-fixer). Every finding was checked against texts/orig/2Co.json, `node tools/literal.js 2Co`, and the files named. Result: 41 fixed, 3 partly fixed, 0 declined. Verified edition marks: THGNT reads "Jesus Christ" at 4:6; at 2:17 only the Byzantine text reads "the rest" (the TR reads "the many"); at 3:3 the plural "hearts" is read by the Byzantine text too and only the TR has the singular. No manuscripts are named anywhere, since none could be rechecked here.

1. Partly fixed. Variants still give editions only (no manuscripts named, per the lead's rule: nothing that cannot be verified). 1:12 and 5:3 now say that the witness lists are in the NA28/UBS5 apparatus and Metzger and were not rechecked. Ten new entries added (see 4). Book.json's "text" section says the P46/codex statement is "as commonly reported; not rechecked".
2. Fixed. 1:12: the unsupported "Paul often joins holiness and sincerity" is gone; the entry now says the Plain departs from the literal line (which reads "openness"), gives the external reasons (manuscript support said to favor "holiness"; "simplicity" may come from 8:2, 9:11, 11:3), and the missing space is fixed. 5:3: both arguments are given with who holds which (Metzger's reported view that "taken off" is an early change; not rechecked), and the entry now says the Plain departs from the NA-based literal line.
3. Fixed. 4:6: THGNT moved to the "Jesus Christ" reading with NA27/NA28, TR and Byzantine; the bracket claim removed.
4. Fixed in part. New entries: 1:11, 1:15 (WH "joy"), 2:17 (Byzantine only), 3:3 (TR only), 3:9, 3:14, 5:10, 5:12, 5:14, 5:18. Not added: 3:2 ("your hearts") and 5:10 "the things of his own body", because the project data shows no edition split and neither could be verified (the reviewer was also unsure).
5. Fixed. 5:10 now has "what is due for the things done through the body, according to what he did, whether good or bad"; topic text and variant updated.
6. Fixed. 4:17 "a weight of glory beyond all measure, lasting forever"; note anchor changed to match; "outweighs" gone.
7. Fixed. 1:3-4 rebuilt from the Greek ("whenever trouble comes to us ... in every kind of trouble, using the comfort God has given us"); 1:20 now "That is why the "Amen" also goes up to God through him, bringing glory through us". Variant and chapter 1 quote updated.
8. Fixed. Thrall removed from the list of defenders of unity in book.json, the 2-corinthians topic core and tools/brief-2co.md; book.json now says her ICC takes 1-9 as one letter and 10-13 as a later, separate one. Harris's argument is described as a later interval; "most scholars" vs "authorship" no longer read as opposed.
9. Fixed. 3:14 Orthodox and Lutheran entries now state each tradition's own answer (Orthodox: type and shadow fulfilled in Christ, Gregory of Nyssa; Lutheran: Law and Gospel, Formula of Concord SD 5-6) with a short note on the history of misuse last. 3:6 Orthodox entry: Origen's contested standing (condemned 553) is said, and Gregory of Nyssa leads.
10. Fixed. Lead decision: katargeo is "set aside" at 3:7, 11, 13, 14 (neutral between fading and abolishing); 5:17 "passed away" kept and marked as a different verb (gloss, note, term entry, book.json key words). The note was rewritten so its three options answer one question (what is happening to the glory); the veil's motive is left to the 3:13 note; the open "it" at 3:14 is stated; the deep dive now says 3:7, 11, 13 to match.
11. Fixed. The new-covenant topic core is retitled "The Covenant Promised in Jeremiah 31"; its "and the Old" frame and the "first/second covenant" aka entries are gone. For the lead: content/topics/covenant.json still has "new covenant" in its aka and a section on Jeremiah and Ezekiel (shared file, not touched).
12. Fixed. Lead decision: arrabon is "down payment" (1:22, 5:5; note, topic text, summary). In proposals/nt/terms.json the 2 Corinthians "first payment" entry is removed and the single remaining entry has "down payment" with a "why".
13. Fixed. Sourced: 3:6 and 3:14 Dispensationalist (Ryrie, Blaising and Bock; Scofield, Pentecost), 4:4 Lutheran (Large Catechism), 5:1 Adventist (sda-beliefs), 5:10 Dispensationalist (Pentecost). 5:1 Lutheran now rests on Augsburg 17 and says only what the confessions say. Trimmed: the 4:4 Pentecostal entry was removed (no source could be verified; the AG Statement of Fundamental Truths has no article on spiritual warfare that I could confirm). Every remaining entry has a source key.
14. Fixed. Harris is attributed only for Raised Immortal (1983); removed from the "did not change his mind" group (Wright remains).
15. Fixed. Gager is no longer named for the opponents reading (ch.3 deep dive: "some Paul within Judaism readers"); note 3:6 and view J name the school, not an unverified passage-level claim.
16. Fixed. Wright is split from the "apocalyptic" readers and described as reading new creation within the covenant story.
17. Fixed. "dressed over" at 5:2 and 5:4, with a gloss.
18. Fixed. 3:3 "delivered through our ministry".
19. Fixed. 3:7 "the ministry of death".
20. Fixed. 2:17 "sincerity", as at 1:12.
21. Fixed. 5:7 now "we walk by faith, not by what we see" (book.json quote updated); note 3:17 states that the Plain's 3:18 follows one of three readings; new note at 4:4 on augazo (see or shine).
22. Fixed. Note on 5:19 says the Plain's word order can carry either reading.
23. Fixed. The bracket parenthesis on 1:14 is dropped.
24. Fixed. The 1 Corinthians 1:2 comparison is restated accurately (wider than Corinth, no Achaia).
25. Fixed. Note at 2:5 no longer says "not a family".
26. Fixed. Setting 1:1-2: "soon after Titus brought news".
27. Fixed. "five times in three verses (5:18-20)"; "one of the shortest".
28. Fixed. Seneca (Paul's contemporary) and "Epictetus a generation later" in the note and the ch.4 deep dive.
29. Fixed. Reformed and Baptist 5:1-10 now use the confessions' wording (bodies return to dust; souls neither die nor sleep; 1689 "paradise" against Westminster's "highest heavens").
30. Fixed. New source key dordrecht-1632-redemption (articles 3-4) used for the Anabaptist 5:21 entry; the shared key dordrecht-1632 is no longer used here.
31. Fixed. Reformed 3:6: the Institutes 2.11 reference is described as the comparison of the Testaments, and Calvin's comment on 3:6 is placed in his 2 Corinthians commentary (no section number given, since none could be checked).
32. Fixed. The sentence on Modalist and Unitarian groups is dropped.
33. Fixed. Topics paul: the captive reading is hedged ("may see himself as a captive; the Plain leaves that open"). The triumph contribution moved from imperial-cult to the existing topic rome (chapter 2 topics, note top, book.json topics).
34. Fixed. "read when Moses is read aloud (3:14)", no synagogues.
35. Fixed. The topic lead says rivals "he calls super-apostles". Book.json topics now include the-collection, super-apostles, thorn-in-the-flesh, third-heaven and boasting (the five topic cores created by parts 06-09 and 10-13). The other topics those parts use (for example almsgiving, grace, temple) already exist and were left for the lead.
36. Fixed. The partition theories are split (10-13 as a later letter, with Thrall; 10-13 as the earlier tearful letter, with Hausrath, Kennedy, Bornkamm).
37. Fixed. "most likely" for Titus carrying the letter (notes 2:4, 2:12, 2:13, ch.1 deep dive, topic titus, book.json audience).
38. Fixed. Jubilees and 1 Enoch are labeled as Scripture for the Ethiopian Orthodox Tewahedo church (note 5:17, ch.5 view J).
39. Fixed. All five chapter spec boxes and book.json's spec now say "I have not seen ... in the commentaries I know". The book.json Exodus 32-34 analogy is marked loose, with the letter's own words (7:6-16) given.
40. Partly fixed. The seal card and ch.1 view T now cite Mystagogical Catechesis 3 for the chrismation anointing, without claiming that it cites 2 Corinthians 1:21 (not verifiable). No Lutheran or Anglican entry was added to the seal card: no sourced teaching of their own could be confirmed, and adding unsourced entries was the problem in finding 13.
41. Fixed. Gloss added at 5:12 pairing "a reason to be proud of us" with "boast" in 1:12.
42. Fixed. The bronze mirror link is marked as a possibility in the note and the ch.3 view H.
43. Fixed. 1:18 is now "As God is faithful, our word to you ..." (oath form, compare 1:23).
44. Fixed. "Eastern Christians who read the Greek."
Also: glosses added for "vouch for" (3:1) and "inscribed" (3:2) (reading-level note). Partly fixed overall: findings 1, 4 and 40 (reasons above).

Plain verses changed: 1:4, 1:18, 1:20, 1:22, 2:17, 3:3, 3:7, 3:11, 3:13, 3:14, 4:17, 5:2, 5:5, 5:7, 5:10. New counts: 98 verses, 72 notes, 22 variants, 31 glosses, 5 chapter pages, 29 topic contributions. For the lead's quote sync: no other book quotes a verse changed here (checked content/books); Isa 40-44 notes quote 2 Cor 5:17 in older wording that never matched the Plain (5:17 was not changed here), and Eph 01-03 gloss and note call arrabon "a first payment" in a definition (not a quotation).

## Verification pass (2026-10-29)

Verification pass under STYLE rule 2. Counts: about 55 items verified, 14 corrected, about 45 removed (named scholars, whole traditions-card views, and the Metzger and NA28 apparatus claims whose source could not be opened). Corrections that mattered: Thrall takes the book as three letters (1-8, 9, 10-13), not 1-9 plus 10-13; the 1689 Baptist Confession is chapter 31, not 32; Dort's "infinite worth" is article 3, not 8; the Trent "in the person of Christ" quote is not in the session 14 text; Harris is now sourced to his 1971 Tyndale lecture, not Raised Immortal. Source keys dropped: metzger, ellis-2cor5, hughes-2cor-nicnt, marshall-shame-triumph, harris-raised-immortal, benedictus-deus, and thrall-2cor-icc and harris-2cor-nigtc as background keys on notes. Log: .scratch/2Co-01-05-verify/sources-checked.md. Not verified (search budget ran out): some bibliography entries in sources.json and book.json (Breytenbach, Georgi, Bornkamm NTS pages, Hubbard, Martyn, Bultmann, Furnish, Hooker, Allison, Kim), and attributions to Barrett, Furnish, Dunn, Cullmann, Dodd, Garland and Barnett in notes and book.json.

## Verification check (2026-10-29)

Hostile check of the verification pass, working only from sources opened in this session (WebFetch of newadvent.org, Sefaria, anabaptists.org, perseus.tufts.edu, ccel.org; web search results that state the claim; `texts/orig/2Co.json`). Counts: item 1 = 3 findings; item 2 = 13 claims tried (9 verified, 1 wrong, 3 unverifiable or partly); item 3 = 20 modern names still unchecked; item 4 = 2 weak cards and 7 cards that lost a distinct tradition. Severity count for this section: 0 critical, 3 major, 6 minor.

### (1) Hedges, unopened works, commentary keys
1. No hedge strings ("as reported", "not rechecked", "from memory", "unverified", "not checked", "could not verify", "reported by", "metzger", "apparatus") remain in book.json or in this part's JSON. Clean. (Minor, no action: variants.json labels 44 entries "(editions only)"; accurate to the word list.)
2. MAJOR. Commentary keys cited with no opened source. The verification log says Garland and Barnett were seen only in a course-notes list and that ICC and NIGTC cannot be opened here, yet the keys still sit on claim-bearing entries: `garland-2cor-nac` on notes (Corinth and Achaia about l.24, travel plans l.172, pleonekteo l.324, Titus l.350, kapeleuo l.395, "god of this age" l.623), on chapters 1 settings (l.68) and on book.json (l.73, l.217); `barnett-2cor-nicnt` on notes (apostolos l.39, travel plans l.171, painful visit l.266, Troas l.337), chapters (l.89) and book.json (l.218); `thrall-2cor-icc` on book.json (l.70). A key tells the reader the claim is found there; nothing opened shows it. Drop the keys from those `s` lists, or open a page that states the claim.
3. MINOR. 06-09/sources.json still defines `harris-2cor-nigtc`, `betz-2cor-8-9` and `fitzmyer-2cor-qumran`, which no entry in 01-05, 06-09 or book.json cites. `fitzmyer-2cor-qumran` (CBQ 23, 1961, 271-280) was "not found" by the pass, so the title itself is unverified. Delete the orphans.

### (2) Spot checks (claims mostly not in the logs)
1. Irenaeus, Against Heresies 3.7.1 pauses the sentence after "God" so that 2 Cor 4:4 reads "God blinded ... this world" (notes l.617). VERIFIED, newadvent.org/fathers/0103307.htm.
2. Tertullian, Against Marcion 5.11 reports Marcion's reading of 4:4 and gives his own punctuation (same note). VERIFIED, newadvent.org/fathers/03125.htm (chapter 11 of the Second Epistle section).
3. Babylonian Talmud, Yoma 72b, Torah a "potion (sam) of life" or "of death" (notes l.376). VERIFIED, Sefaria API Yoma.72b.
4. Schleitheim Confession article 7 forbids oaths on Christ's authority (notes l.248). VERIFIED, anabaptists.org/history/schleith.html. The article does not cite Matthew 5 by number (it quotes "Yea, yea; Nay, nay"), so the note's wording is acceptable.
5. Westminster Confession ch. 22, lawful oaths (notes l.248). VERIFIED, ccel.org/creeds/westminster-confession.txt.
6. Plutarch, Aemilius Paullus 32: incense in the temples along the triumph route (notes l.359). VERIFIED for the incense (perseus.tufts.edu: "filled with garlands and incense"). The chapter shows no human captives, so the captive picture in the note should not be credited to this chapter.
7. Josephus, Jewish War 7.121-157, triumph of Vespasian and Titus, Simon executed, AD 71 (notes l.359). PARTLY VERIFIED: lexundria 7.153-155 and a Commentary article, via search, state Simon was paraded and put to death at the triumph and give 71; the range 7.121-157 was not read.
8. Augustine, On the Spirit and the Letter, AD 412 (chapter 3 deep dive). VERIFIED, search results quoting the NPNF editor (about the end of 412).
9. Georgi, The Opponents of Paul in Second Corinthians (1986), rivals as "divine men" (book.json l.62, l.288). VERIFIED, Themelios review and Scottish Journal of Theology listing in search results (Fortress 1986; the divine-man thesis stated by a reviewer).
10. Mark Kinzer, Postmissionary Messianic Judaism (2005), against supersessionism. VERIFIED for author, year and thesis (Wikipedia and Christianity Today results). MINOR: the title is one word, "Postmissionary", not "Post-Missionary" (chapter 3 cards, l.413 and l.456).
11. WRONG, MAJOR. "Dodd proposed (1933) that Paul's view developed after the danger in Asia" (chapter 5 readings l.628, deep dive l.636, notes l.777, topics l.79). Bibliographic listings in search results give "The Mind of Paul: A Psychological Approach" as BJRL 17 (January 1933) and "Change and Development" as BJRL 18 (January 1934), so the date 1933 is for the first article. I did not open either article, so drop the year, or cite the second article only after opening it.
12. UNVERIFIABLE. "Wright (1991)" as returning to the Exodus background of 3:6 (chapter 3 deep dive l.306). The Climax of the Covenant (T&T Clark, 1991) exists and has a chapter "Reflected Glory: 2 Corinthians 3", but no page I opened states his reading of "letter"; the log says the book was not opened. (Hafemann is verified in the log.)
13. UNVERIFIABLE. "Origen (about AD 220-230)" and "Augustine himself had earlier read the verse in a way closer to Origen's" (same paragraph). A search for the Origen date returned nothing; nothing opened states the Augustine claim.

### (3) Named modern-scholar attributions the logs do not show as checked
Windisch (chapters l.22, l.149); Barrett (notes l.75 on 1:5, l.288 on the offender, l.864 on "out of our mind"; book.json l.58); Allison (notes l.75); Furnish (notes l.288, l.708); Dunn (notes l.431, l.563); Wright on 3:6 (l.431), on 5:1 as resurrection body (l.777, deep dive l.636) and on 1991 (see 2.12); Cullmann (deep dive l.636); Dodd (see 2.11); Kim on 4:4-6 and conversion (notes l.632, l.671; chapters l.523); Bultmann and Martyn on "by the flesh" (notes l.893); Martyn on new creation (l.909); Hubbard (l.909); Breytenbach (l.925); Hooker, "interchange" (notes l.879, l.981); Gorman (notes l.879, l.981, l.996; chapters l.644, l.649); Murphy-O'Connor and Danker as "historians and archaeologists" (book.json l.114); Bornkamm (book.json l.45, l.119; notes l.275; chapters l.22, l.149), only partly checked (the log opened a review, not his work); Garland and Barnett (see 1.2). Count: 20 names. Also unchecked: "later manuscript endings" naming Philippi (book.json "Place").

### (4) Traditions cards
- No card has fewer than two views.
- WEAK. 4:4 "Who is the god of this age" has two views (Catholic, Reformed). The Reformed view (Westminster 5.4, providence over sins) does not say who the god is, so the card shows no real contrast; the Lutheran, Orthodox and Adventist views were deleted. Add a verified view or turn the card into a note.
- WEAK. 5:18-20 "Who carries the ministry of reconciliation": three Western views remain (Catholic, Lutheran private absolution, Reformed keys); Baptist, Orthodox and Anabaptist views were deleted.
- Lost a clearly distinct view: 2:10 (Orthodox and Baptist), 3:6 (Orthodox and Baptist), 3:14-16 (Orthodox and Dispensationalist; the latter is the one view in which the covenant with Israel stays separately in force), 5:10 (Orthodox, Baptist, Dispensationalist), 5:14-15 (Baptist), 5:21 (Lutheran and Baptist), 1:22 (Baptist seal). Count: 7 cards.

## Verification fixes (2026-10-29)

Second round on the Verification check above. Counts: about 12 attributions verified and kept (Bornkamm, Thrall's three letters, Harris, Hafemann, Martyn, Breytenbach, Hooker, Gorman, Georgi, Wright on 5:21, Kinzer, Dodd's proposal), 4 corrected (Hubbard's view was the individual, not the community; Cullmann holds the dead are still in time; Dodd year dropped; Kinzer title), about 30 removed (names and keys for Windisch, Barrett, Allison, Furnish, Dunn, Wright on 3:6, 5:1, 5:14, 5:17, Kim, Bultmann, Danker, Murphy-O'Connor lens line; Origen and Augustine date and earlier-view claims; Wright 1991; Fitzgerald year; "some say 56 or 57"; Philippi manuscript endings). Handled from the check: unopened commentary keys garland-2cor-nac, barnett-2cor-nicnt, thrall-2cor-icc (and furnish, barrett) removed from entries, kept in book.json reading list; Dodd date; the 4:4 card turned into a sentence; the 5:18-20 card kept (its three views conflict); the 5:10 and 5:14-15 cards regained a verified Baptist view (1689 confession). Five other lost views (2:10, 3:6, 3:14-16, 5:21, 1:22) were not restored because no source was opened. Orphan sources dropped: allison-end-of-ages, bultmann-2cor-eng, dunn-jesus-spirit, kim-origin, luther-freedom. For the lead: 06-09/sources.json still defines orphans harris-2cor-nigtc, betz-2cor-8-9, fitzmyer-2cor-qumran. Log: .scratch/2Co-01-05-verify/sources-checked.md.

## Card restoration (2026-10-29)
Views restored (13): Baptist on the seal (1:22); Orthodox on absolution (2:10), the letter that kills (3:6), the Mosaic covenant (3:14-16), judgment of believers (5:10) and the ministry of reconciliation (5:18); Dispensationalist on 3:14-16 and 5:10; Anabaptist on 5:18 (and a Mennonite 1995 line added to 2:10); Lutheran on 5:21. Card re-created: 4:4 "god of this age" (Catholic, Orthodox, Lutheran, Reformed, Adventist), with the deep-dive sentence trimmed.
Views still missing: Baptist on who pronounces forgiveness (2:10); no page opened states it.
Unkeyed views (5 views): Adventist, Jehovah's Witnesses (5:1-10) keyed to wikipedia-christian-mortalism and restated to the page; Orthodox (5:1-10, Mark of Ephesus and foretaste) and Orthodox (5:21, recapitulation) restated to Wikipedia pages and keyed; Dispensationalist (3:6) restated to progressive dispensationalism and keyed. None removed. Scan: 0 unsourced.
