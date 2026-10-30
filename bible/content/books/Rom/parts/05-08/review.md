# Hostile review: Romans 5-8 (part 05-08)

## Verdict

This is strong work. The Plain English Translation tracks the SBL Greek closely, the terms follow the brief and `terms.json`, the quoted OT, Mishnah, Talmud and Catechism citations I spot-checked are real and mostly exact, no invented sources turned up, there are no em-dashes, `works.json` naming is correct, every spec box is labeled, and the build is clean (`VERBOSE=1 node tools/build.js --check Rom/05-08`: 108 verses, 109 notes, 16 variants, 42 glosses, 0 errors, 0 warnings). The traditions cards cover 8 to 10 traditions each without ranking them. The weak points:

- Three manuscript statements are wrong or unsupported (8:11 Vaticanus, the 7:6 Latin and Textus Receptus claims, and an unverified claim about the Greek of Genesis 3:13).
- One lens claim is anachronistic (4 Ezra and 2 Baruch as things the Romans knew).
- The one brief-listed variant at 5:14 is missing, and the Plain English Translation's 5:14 rendering quietly takes a side.
- A gloss at 6:3 states one church's view of baptism.
- The Orthodox and Pentecostal views on the Romans 7 card rest on weak sources.
- There is a layer of small translation, consistency and counting slips.

Nothing here is critical. Verified as sound: Luther on 7:14-25, the 8:23 P46 omission, 8:28's P46/A/B witnesses, and 5:1's indicative in NA27/UBS4 (see the checks at the end).

## Major

**1. variants.json, 8:11: Vaticanus is on the wrong side.**
The entry puts the genitive `διὰ τοῦ ἐνοικοῦντος αὐτοῦ πνεύματος` (NA28, WH) "with manuscripts including Vaticanus."
- Vaticanus (B) reads the accusative `διὰ τὸ ἐνοικοῦν αὐτοῦ πνεῦμα`, the reading the SBL prints and the Plain English Translation follows. Gordon Fee defends the accusative on B's support.
- The genitive is Sinaiticus, Alexandrinus, C and 81 (Metzger's B-rated choice).
- The `why` says "both are found in strong manuscripts," which is true but gives the reader no sigla.
- Fix: put B with the accusative and אAC81 with the genitive, and name the rating Metzger gives. Quote no more than the sigla.

**2. variants.json and notes.json, 7:6: the Latin and Textus Receptus claims are wrong.**
- The entry says the SBL, NA28 "and the Byzantine text" read `ἀποθανόντες`, that the other reading is only "a few Western witnesses," and compares "the Latin *mortuo in quo detinebamur*."
- The `b` says "the Latin of the Vulgate can be read either way" and that the KJV "leaves it open."
- The Vulgate does not read either way. It has `a lege mortis in qua detinebamur` ("from the law of death"; Douay: "loosed from the law of death"). That is a third reading, not an ambiguity.
- The Textus Receptus as printed (e.g. textus-receptus.com) has the genitive `ἀποθανόντος`, and the KJV's "that being dead wherein we were held" translates it. So the line "SBLGNT, NA28 and the Byzantine text" and the "few Western witnesses" are not safe as written. STEP's edition table shows no 7:6 difference, so the edition data disagrees with the TR print; settle it against Scrivener/Stephanus before fixing.
- Fix: give three readings (`ἀποθανόντες`; `ἀποθανόντος`, with D* F G, the TR and KJV; the Latin "law of death"). Name the witnesses from NA28/Metzger. Correct the `b`. Align note #53 ("a smaller group of Western witnesses").

**3. chapters.json ch. 5 (H lens and the 5:12-21 setting): anachronism.**
- The H lens says Romans' readers knew Adam "from Jewish writings: ... 4 Ezra 7:118 and 2 Baruch 54:15-19."
- Romans was written about AD 56-57. 4 Ezra and 2 Baruch are post-70 (about AD 100) and cannot be sources the Roman readers knew.
- Wisdom of Solomon 2:24 and Sirach 25:24 are fine.
- Note #15 uses 2 Baruch and 4 Ezra as parallels ("a Jewish writer had said the same long before"). That is acceptable if labeled as later parallels. The J lens and the `adam-and-eve` topic repeat 2 Baruch 54:19 as background and should say "later."
- Fix: move 4 Ezra and 2 Baruch out of what the readers "knew" and label them "a few decades later, same debate."

**4. variants.json, 5:14: the brief-listed variant is absent, and the Plain English Translation tilts.**
- The brief lists 5:14. Metzger and NA28 record witnesses that drop `μή` ("those who sinned in the likeness of Adam's transgression"). No entry exists.
- The Plain English Translation "people whose sin was not like Adam's, a broken command" turns `τοὺς μὴ ἁμαρτήσαντας` ("those who did not sin") into "people who sinned, but unlike Adam." That closes the reading that Augustine and Calvin used (infants and others who had not sinned as Adam did) and fits the "all sinned personally" side.
- It also echoes the NIV's phrasing ("breaking a command") closely. Describe the match; do not quote beyond that.
- Fix: add the 5:14 entry. Either render closer to the Greek ("those who did not sin in the way Adam broke a command") or add a gloss and note the other construal. Note #19 does not mention the `μή` reading.

**5. glosses.json, 6:3: the "baptized" gloss states one tradition's view.**
- It reads "immersed in water as a sign of joining Christ." That is the Baptist position (immersion, sign). The same chapter's card has Catholic, Lutheran, Anglican and Orthodox views that deny "sign" or allow pouring.
- Fix: "dipped or washed in water as a rite of joining Christ" or similar, with the disputes left to the card.
- Related, minor: 8:28 "called: invited by God." "Invited" is the resistible-grace sense and sits against the Reformed "effectual call" in the same chapter's cards. Use "summoned by God."

**6. notes.json #59, 7:11: an unverified Greek claim stated as fact.**
- The note says `exapatao` "is the one used in the Greek Old Testament of the snake's deceit," citing Genesis 3:13.
- As I recall, the Septuagint of Genesis 3:13 has the simple `ἠπάτησέν με`; the compound `ἐξηπάτησεν` is Paul's (Romans 7:11; 2 Corinthians 11:3). I could not confirm either way from the sources I reached.
- The repo has no LXX text, so check Rahlfs.
- If it is `ἠπάτησεν`, reword to "the same root; Paul adds a prefix." The echo is still real, but the note's headline claim ("the same verb") would be false.

**7. chapters.json, ch. 7 traditions card: the Orthodox and Pentecostal entries are weak.**
- Orthodox: the only authorities are Origen and Chrysostom. Origenism was condemned in the East (the 5:18 card says so), so Origen is an odd Orthodox witness. The claim that "the Orthodox tradition finds its description in chapter 8 and in the ascetic writers" has no source. Add an actual Orthodox source (Ware, Meyendorff, or a patristic text such as Theodoret, Cyril or Macarius that the lead can verify). Otherwise say "Greek fathers" rather than "the Orthodox tradition."
- Pentecostal: the source array is empty. It carries a generalization ("many Pentecostal and holiness teachers") with no citation. Add an AG or holiness source or drop the card.
- Catholic: "Most modern Catholic commentators, such as Fitzmyer" is stated with one name. Say "Fitzmyer and others," or add Lagrange or Brown.
- Missing: Baptist, which every other card in the part has. The card is also silent on the New Perspective and Jewish reading (Stendahl is only in the deep dive).

## Minor: Plain English Translation and translation

8. **5:7** "Rarely will anyone die for ..." renders `μόλις` ("hardly, with difficulty"), and the wording matches the NIV's shape. Prefer "Hardly anyone will die ...".
9. **5:12** "it is as when sin entered ..." completes a sentence that Paul leaves unfinished. Note #17 correctly says the "so also" is withheld until 5:18, but the Plain English Translation hides the break. Use a dash-free break such as "Just as sin entered ... and so death spread to all people, because all sinned." and let 5:13-17 interrupt.
10. **7:14** "sold into slavery under sin" adds "into slavery" (cf. the NIV's "as a slave"). **7:15** "I do not understand my own actions" is the same first sentence as the ESV's. This is natural English, but flag it in the drift audit. Note #61 does not say that `γινώσκω` can mean "acknowledge, approve" (a common view of this clause).
11. **8:18** "weigh nothing against" sharpens `οὐκ ἄξια πρός` ("are not worth comparing with"). Note #85 itself says Paul "does not call the sufferings small."
12. **8:4** "live by the Spirit" for `περιπατοῦσιν` ("walk"). Notes #34 and #75 say "walk"; 6:4 uses "walk." Same word, two renderings. Likewise the 8:1 variant `plain` field.
13. **δικαίωμα** is rendered "justification" (5:16), "act of righteousness" (5:18) and "what the law rightly requires" (8:4). Notes #24 and #75 mention only 5:18 and 8:4, and none of them flags the 5:16 use or the three renderings. 5:16's note-less "justification" also blurs `δικαίωσις` (5:18). Add a short cross-note.
14. **6:7** "has been freed from sin" renders `δεδικαίωται`, the same verb the Plain English Translation translates "justified" everywhere else. This departs from the brief's "justify." Note #38 explains it, but add a gloss at 6:7 ("the verb translated 'justified' elsewhere") so the Plain English Translation does not hide the repeat.
15. **8:3** "flesh that sin rules" renders `σαρκὸς ἁμαρτίας` with an interpretive genitive. It sits with the "fallen nature" side of the Irving/Barth/Torrance dispute that note #73 presents as open. The brief wanted "sinful flesh" or a note; either keep the interpretive rendering with a gloss, or use a more literal "flesh of sin."
16. **8:23** "the Spirit as the firstfruits" resolves the genitive `τὴν ἀπαρχὴν τοῦ πνεύματος` as epexegetical. A partitive reading ("the first share the Spirit gives") exists. Note #90 does not give it.
17. **6:13** "tools" for `ὅπλα`. Note #42 admits "weapons" is likely better (cf. 7:23, 13:12). The same word in 13:12 must be rendered consistently with this in part 12-16. Lead to align.
18. **Capital "One"** is used for God (8:11, 8:20) and for Christ (5:19), but "one man, Jesus Christ" is lowercase at 5:15 and 5:17. It is harmless but not uniform.
19. **Missing glosses against the brief.**
    - 8:29 "decided beforehand" needs the "predestine" gloss (brief and `terms.json`).
    - 5:9 "God's anger" needs a gloss that mentions "wrath."
    - 7:4 and 8:12 "brothers" lack the "brothers and sisters" gloss (only 7:1 has it).
    - 8:38 "rulers: spiritual rulers" asserts the angelic reading, which note #107 presents as one option.

## Minor: variants

20. **5:2** `p` says "Two of the oldest copies lack 'by faith'." Only Vaticanus is early; the rest (D F G) are later Western copies.
21. **5:1, 8:2, 8:34** give no sigla ("many early manuscripts"; "the evidence is divided"). Name them: at 5:1, Sinaiticus and Vaticanus read the subjunctive originally and later hands corrected to the indicative; Metzger and NA27/UBS4 print the indicative.
22. **8:28:** the `why` calls P46/A/B "early and weighty," then says "a few modern commentators favor" the God reading. Sanday-Headlam, the NIV text and several modern studies favor it. "All things" is C D F G Ψ and the versions. The claim "Westcott-Hort print ὁ θεός" is unverified: STEP lists no WH difference at 8:28, so check or drop. Note #95 says the God witnesses "add" God; say "have God as subject."
23. **Missing entries** a careful reader would want: 6:1 and 6:15 (subjunctive in NA/SBL, future or indicative in TR/Byz, so "Shall we sin?" versus "Should we"); 5:6 (WH `εἴ γε`; the Byzantine drops the second `ἔτι`); 8:26 (`ὑπὲρ ἡμῶν` in the Byzantine; "weakness" singular or plural); 8:2 sigla.
24. **For the lead, not the writer:** the brief says the Byzantine text reads the subjunctive `ἔχωμεν` at 5:1. STEP shows NA, SBL, TR and Byz all read the indicative, and the writer is right. Correct the brief.

## Minor: notes and chapter pages

25. Note #17 title says "five ways to read," but four readings are listed. Note #22 says `basileuo` four times in 5:14-21 (there are five uses). The spec box says "ten verses (5:14-21)," which is eight verses.
26. Chapter 6 C lens says 6:12 and 6:19 both use `melē`. It is 6:13 and 6:19.
27. The `nomos` count "about twenty times in 7-8" (note #65 and the ch. 7 deep dive) is wrong. There are 23 in chapter 7 and 5 in chapter 8, 28 in all.
28. Note #20 says Jewish readers expected "a coming Adam-like figure ... (Community Rule 4:23)." 1QS 4:23 (and CD 3:20) promises the elect "all the glory of Adam," not a figure. Reword.
29. Note #65 says Luther's translation says "principle" at 7:21. Luther's German has "Gesetz." Remove it, or cite a specific Luther comment.
30. Notes #38, #50, #55 and #53 cite the Talmud (Shabbat 30a, Niddah 61b, Kiddushin 30b) and the Mishnah as "the Jewish teachers" and "Jewish law" of Paul's day. These are 200 to 500 years later. #38's `p` line presents the saying as context for Paul. Add a date label ("a later rabbinic saying, about AD 200-500"). #53's "commandments will be changed in the age to come" is attributed to "Jewish thought" through Jeremiah 31:31-34, which does not say that; the idea is a later rabbinic one (Niddah 61b).
31. Note #81 claims Roman adoption brought "release from old debts" and cites Gaius 1.97-107. Gaius does not say that there; under adrogation debts were a legal problem, resolved by the praetor. Drop or source it.
32. Note #102 attributes the question-punctuation of 8:33-34 to "Marcion's followers ... sometimes named." I could not verify that. Cut it or give a patristic source (the commentators who report the punctuation).
33. Note #94 lists 1 Samuel 16:7 and 1 Kings 8:39 as verses where God "searches" the heart; the Hebrew there is "looks at" and "knows." Keep Jeremiah 17:10, Psalm 139:1, Revelation 2:23.
34. Note #36 ends "What remains is a struggle, not a division: Romans 7 and 8:13 show that the old life still pulls." That uses Romans 7 as proof about believers and pre-empts the card at 7:14. Remove "Romans 7."
35. Note #26's sentence "The Gospels do not say that Jesus was sinless in these words" is confusing. Delete it.
36. Note #46 says `hagiasmos` "is the process of being set apart ... not a perfect state." That is a contested point between Wesleyan and Reformed readers. Soften to "can mean."
37. Chapter 5, setting 5:1-11 `views`: "Many scholars (Moo, Dunn, Fitzmyer) see 5:1-11 as the end of the first argument ... others (Wright, Jewett) see 5:1-8:39 as one block." Those two are not opposed. Moo and Dunn also treat 5:1-8:39 as a block. Reword.
38. Setting 5:12-21 `why` presents the Roman churches as "divided over Torah and food" as fact. It is the usual reading but Nanos and others dispute it. The 5:12-21 views box is silent. Add a one-line view or a qualifier.
39. Chapter 8 H lens states the "astrological words of 8:38-39" flatly. Note #107 hedges ("may be"). The `angels` topic says they "are spiritual beings," which is also flat. Make them agree.
40. Chapter 6 T lens: the Mystagogical Catecheses are "attributed to Cyril." Good; keep. "Didache (about the early second century)" is a date many put earlier. Say "late first or early second century."
41. Topics: `ten-commandments`, `law-of-moses` and `faith` sections are thin but acceptable. `faith` ("faith is the path along which believers live in the Spirit") adds nothing; cut or replace with 5:1-2 and 8:24-25.
42. Traditions cards, small points:
    - Baptism (6): no Methodist or Churches of Christ card (the latter is the largest baptismal-remission group among American Restorationists).
    - Assurance (8): the Reformed quote "infallibly assured" is not verbatim (WCF 18.2 says "infallible assurance"); the Lutheran entry cites no confession (Apology IV, or Augsburg Confession XX); the Anglican entry quotes Article 17 about predestination, not assurance, and the sentence about "hope for the baptized" is unsourced.
43. `progress.md` counts are stale (108 notes, 40 glosses; the build shows 109 and 42). Update on hand-over.

## Judgment: original sin folded into `the-fall`

Acceptable, and the writer's note in `proposals/nt/topics.md` is honest about it.
- A separate `original-sin` core would collide on the aliases already in `the-fall` ("original sin", "ancestral sin"), and the brief said to contribute there when it covers the topic.
- The cost is that `the-fall` is typed "Events" and its lead is about Genesis 3, while the 5:12 card is a doctrinal comparison across nine traditions. A reader following `top: the-fall` lands on a short page with a one-section Genesis overview.
- Keep the fold for now. When the lead merges proposals, either lift the doctrine into a `original-sin` core (and move the aliases and the card's `top` together) or strengthen the-fall's section with a short comparison of the traditions. Note the "the Greek means 'because'" line in the topic contribution is flatter than note #17 (which lists the "with the result that" sense only implicitly); keep the topic consistent with the note.

## Checked and found sound

- **Luther on Romans 7:14-25.** The card says he came to read it of the Christian (*simul iustus et peccator*) and changed his earlier view. That matches the Lectures on Romans (1515-16) and the 1522 Preface. The brief's line lumping "Luther's early" with Wesley is the stale one. Augustine's change after 396 and Aquinas knowing both readings are also right.
- Quotations and citations spot-checked as accurate:
  - Catechism: 390, 402-406, 460, 605, 733, 741, 1037, 1058, 1264, 1996, 2005
  - Confessions and councils: Augsburg Confession II, XII; Westminster Confession 6, 13.2, 17, 18; Heidelberg Catechism 7-8; Thirty-Nine Articles 9, 16, 17, 27; Dort II.3, 8, V; Trent sessions 5 and 6; Orange 529
  - Other primary and ancient sources: Gaius, Institutes 1.97-107; Tacitus, Annals 12.25-26 and 15.44; Mishnah Sotah 9:15, Kiddushin 1:1 and Avot 5:21; Gittin 57b; Ovid, Amores 3.4.17; Philo and 4 Maccabees 2:5-6
  - Site quotes: the site's Plain English Translation of Genesis 3:13, 3:17, 18:19, 22:12, Exodus 20:17, Ecclesiastes 1:2 and Psalm 44:22 matches the notes.
- 8:23's omission of `υἱοθεσίαν` in P46 (and Western witnesses), and the 8:28 witnesses P46/A/B for `ὁ θεός`.
- 5:1: NA27/UBS4 print the indicative; the subjunctive has stronger external support (Sinaiticus and Vaticanus originally) and was corrected later. The entry's "follow" and its reason are fine.
- Terms: sin, flesh, law, adoption, anger, redemption, reconciliation and "decided beforehand" follow the brief. "Brothers" follows Acts (recorded in the proposals `terms.json`).
- Fairness: every card names a view in its own words, with no ranking. The 5:18 universalism entries (Origen, Gregory of Nyssa, Barth) are labeled as readings with the replies.
- Spec boxes are labeled and plausible.

## Fixes applied
Numbers follow the review. Note numbers are zero-based positions in notes.json, as the review uses them. The lead's cross-part decisions (.scratch/Rom-review-notes.md) were applied first.

1. Fixed. 8:11 variant: Vaticanus now sits with the accusative (the Plain English Translation's reading), Sinaiticus, Alexandrinus, C and 81 with the genitive, all marked "as reported by Metzger"; edition lists match the edition table; the entry says the Plain English Translation follows the SBL base and Tyndale House GNT, not NA28.
2. Fixed. 7:6 variant now has three readings (ἀποθανόντες; ἀποθανόντος, reported as D* F G, with the KJV following it; the Vulgate "law of death"). The "Byzantine text" claim is kept because the Byzantine word data reads ἀποθανόντες; the Textus Receptus is said to differ among printed editions (the site's edition table records no difference), not asserted. Wrong `b` (Vulgate "either way") corrected; note 53 aligned and its Jeremiah/"age to come" claim re-dated as a later rabbinic idea (Niddah 61b).
3. Fixed. The 4 Ezra and 2 Baruch claim is removed from what the readers "knew" (ch. 5 H lens), labeled "about a generation after Paul / about AD 100" in the H and J lenses, note 15 and the adam-and-eve topic. Also dated 4 Ezra/2 Baruch in note 85.
4. Fixed. New 5:14 variant (μή kept by every edition; a few witnesses omit it, "manuscript lists not checked"). Plain English Translation 5:14 now keeps the "not": "those who had not sinned the way Adam did, by breaking a command"; note 19 gives the omission and the infants/Augustine/Calvin construal; note anchor and 5:19 "the one man obeyed" updated.
5. Fixed. 6:3 gloss no longer states a baptism theology ("dipped or washed in water as a rite of joining Christ"); 8:28 "called" is now "summoned by God".
6. Fixed. Checked against the Swete LXX in .cache: Genesis 3:13 has ἠπάτησέν με, so the reviewer was right. Note 59 now says same root with a prefix, not the same verb.
7. Fixed in part. Orthodox row now speaks of Chrysostom, Origen (condemned in the East on other grounds) and "the Greek fathers generally", with no unsourced claim about "the Orthodox tradition"; Pentecostal row cut (no source); Catholic row "Fitzmyer and other modern Catholic commentators"; a Baptist row added, resting only on the absence of a confessional article (BFM 2000, London 1689). Not added: a Jewish or New Perspective row (the card is "Where Christians differ"; Stendahl stays in the deep dive).
8. Fixed. 5:7 "Hardly anyone will die for a person who is righteous."
9. Fixed. 5:12 is now one sentence that trails off ("Because of this, just as sin entered ... because all sinned ..."), so the Plain English Translation shows the break; the-fall topic quote updated.
10. Fixed. 7:14 "sold under sin" (gloss added); 7:15 "I do not recognize what I do", with a new 7:15 note on ginosko "know/acknowledge/approve" (Psalm 1:6; Matthew 7:23).
11. Fixed. 8:18 "are not worth comparing with the glory"; note 85 updated.
12. Fixed. 8:4 now "walk not by the flesh but by the Spirit"; the 8:1 variant `plain` and `en` follow.
13. Fixed. Cross-note added to note 24 (dikaioma at 5:16, 5:18, 8:4, and dikaiosis at 5:18); gloss at 5:16; cross-reference in note 75.
14. Fixed. Gloss added at 6:7 ("the verb translated 'justified' elsewhere"); note 38 re-dated (item 30).
15. Fixed by gloss and note. 8:3 keeps "flesh that sin rules" with a gloss giving the literal "flesh of sin"; note 73 says the Plain English Translation reads the genitive that way and the dispute turns partly on it.
16. Fixed. Note 90 now gives the partitive reading ("the first share the Spirit gives").
17. Fixed (lead decision 2). 6:13 is now "weapons" twice; note 42 says "tools" is also possible; the chapter deep dive already said "weapons or tools".
18. Fixed. 5:19 "the one man obeyed" is now lower case like 5:15 and 5:17; capital "One" kept for God at 8:11 and 8:20.
19. Fixed. Glosses added: 8:29 "decided beforehand" (predestined), 5:9 "God's anger" (wrath), 7:4 and 8:12 "brothers" (mixed group; the lead's Acts wording); 7:1 gloss rewritten to the lead's wording; 8:38 "rulers" gloss now offers both readings.
20. Fixed. 5:2 `p` and reading now name Vaticanus (early) and D F G (later Western) separately.
21. Fixed in part. 5:1 gives the original hands of Sinaiticus and Vaticanus (the reviewer's attribution, as reported by Metzger). 8:2 and 8:34 give edition lists that match the edition table; manuscript lists are marked "not checked" rather than invented.
22. Fixed. 8:28 lists P46, A, B for "God" and C D F G Psi and the versions for "all things" (as reported); the unverified Westcott-Hort claim is dropped (the edition table shows no difference at 8:28); "some commentators favor it"; note 95 says "have God as the subject".
23. Fixed. New variants: 5:6, 6:1, 6:15, 8:26 (from the edition table). 8:2 sigla: see 21.
24. Noted for the lead. The writer was right that all editions read the indicative at 5:1; the brief line is the lead's to correct (also in the lead's notes).
25. Fixed. Note 17 title "four ways to read the Greek"; note 22 now counts five uses (death 5:14, 17; sin 5:21; grace 5:21; believers 5:17); the spec box says "eight verses".
26. Fixed. Chapter 6 C lens: 6:13 and 6:19.
27. Fixed. nomos is 28 times in chapters 7-8 (23 and 5), counted from the SBL data, in note 66 and the chapter 7 deep dive.
28. Fixed. Note 20 now says Community Rule 4:23 promises "all the glory of Adam", not a figure.
29. Fixed. Luther "principle" claim removed from note 65.
30. Fixed. Notes 38, 50, 53, 55 and the chapter 6 and 7 lenses label Talmud and Mishnah material as later than Paul with dates; note 53's "Jewish thought" claim is now a later rabbinic idea (Niddah 61b).
31. Fixed. "release from old debts" removed from note 81.
32. Fixed. Marcion's followers removed from note 102.
33. Fixed. Note 94 keeps Psalm 139, Jeremiah 17:10, Revelation 2:23 as "searches" and says 1 Samuel 16:7 and 1 Kings 8:39 use "looks at" and "knows".
34. Fixed. "Romans 7 and" removed from note 36.
35. Fixed. The confusing sentence deleted from note 26.
36. Fixed. Note 46: hagiasmos "can mean" process or state; Wesleyan and Reformed readers differ.
37. Fixed. Chapter 5 setting 5:1-11 views reworded (Moo, Dunn, Fitzmyer, Wright, Jewett all treat 5-8 as a block; they differ on whether 5:1-11 closes or opens).
38. Fixed. Setting 5:12-21 `why` qualified ("on the usual reconstruction") and a view added (Nanos and others dispute the Torah-and-food reconstruction).
39. Fixed. Chapter 8 H lens now says "may be astrological terms"; the angels topic says "most often read as spiritual beings"; note 107 agrees.
40. Fixed. Didache dated "late first or early second century" in the chapter 6 deep dive (the reviewer's "T lens" was the deep dive). The Cyril note stays.
41. Partly fixed. The faith topic's empty sentence is replaced by a hope/endurance sentence tied to 8:24-25; ten-commandments and law-of-moses left as they are (acceptable per the review).
42. Fixed in part. A Methodist card row added to the baptism card (Articles of Religion 1784, Article 17). Churches of Christ not added: no source key and no source I can verify. Assurance card: Reformed quote corrected to WCF 18.1-2 wording ("certainly assured", "an infallible assurance of faith"); Lutheran row now cites Apology IV with Luther's Preface; Anglican row no longer claims anything about hope for the baptized and says Article 17 is not about assurance as such.
43. Fixed. progress.md counts updated.
Judgment (original sin in the-fall): kept as the review advises; the-fall topic text now matches note 17 ("most modern commentators take the Greek as 'because'"). The lead decides at merge whether to lift the doctrine into an original-sin core.
