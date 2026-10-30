# Hostile review: Ephesians 1-3 (part 01-03) and book.json

Reviewed against texts/orig/Eph.json (SBL and Byzantine columns), the brief set, and `node tools/build.js --check Eph/01-03` (0 errors, 0 warnings). The review covers the Plain English Translation, notes, variants, glosses, chapter pages, topics, sources and book.json. Outside sources were not re-fetched, so items marked "verify" rest on memory.

## Verdict

This is a careful, mostly sound part. The Plain English Translation tracks the Greek closely, the authorship question is handled even-handedly (both camps get their strongest arguments and named scholars), the settings cover every unit, and the cards are generally sourced to real documents. I found no invented sources. The real problems are:

- One false claim in a note about what the Plain English Translation does (3:5 "hos").
- One mis-reported variant witness (2:15: SBLGNT prints the reflexive).
- Several topic-page quotations that are not the Plain English Translation's wording and match ESV/NASB wording.
- A few unverified witness lists and a few factual slips (Gen 12:3 LXX, 3:2-7 word count, Polycarp "as Scripture").
- Fairness issues in three cards (Lutheran election, Orthodox new Israel, Lutheran/Luther aside) and in the East/West theosis line.
- Some drift toward NIV/ESV phrasing.

Counts: 0 critical, 7 major, 17 minor.

## Findings

### Major

1. **Major. notes.json 3:5 ("it was not made known to human beings") and plain.txt 3:5.** The note says "The Plain English Translation keeps the Greek *hos*, 'as'." The Plain English Translation does not: "In other generations it was not made known to human beings. Now it has been unveiled to his holy apostles and prophets." The Greek is `οὐκ ἐγνωρίσθη τοῖς υἱοῖς τῶν ἀνθρώπων ὡς νῦν ἀπεκαλύφθη`. Dropping "as" and starting a new sentence at "Now" turns a comparison into an absolute contrast, so the Plain English Translation makes the reading the note itself calls the correct one harder (and settles the covenant versus dispensational question in the dispensationalists' favor). Fix: restore "as", for example "was not made known to human beings in the way it has now been unveiled to...". Otherwise correct the note, but the sharpening is a translation defect.

2. **Major. variants.json 2:15.** The entry says SBLGNT, NA28 and THGNT all read `ἐν αὐτῷ` ("in him") and the Byzantine text `ἐν ἑαυτῷ`. In texts/orig/Eph.json the SBLGNT column reads `ἐν αὑτῷ`, the reflexive "in himself" (the Westcott-Hort reading). So the editions themselves split: SBLGNT and Byzantine/TR both read "in himself", while NA28 and (I believe, verify) THGNT read "in him". The "why" calls the reflexive "a natural smoothing" of later manuscripts, which misdescribes the situation. The difference is a breathing, which is an editorial choice since the uncials have none. The Plain English Translation follows NA28, not the SBLGNT the site otherwise leans on. Fix: restate the witnesses as "NA28 and THGNT `αὐτῷ`; SBLGNT, WH, Byzantine and TR `αὑτῷ`/`ἑαυτῷ`", say that the manuscripts cannot distinguish the breathings, and give the real reason (the "in him" refrain of 1:3-14, versus the reflexive pointing to Christ as subject). Also check the 2:15 `b` note, which repeats the smoothing claim.

3. **Major. topics.json: quotations that are not the Plain English Translation and that match ESV/NASB wording.**
   - `grace`: "the surpassing riches of his grace" (2:7). The Plain English Translation says "how very rich his grace is". "Surpassing riches" is NASB/RSV wording.
   - `grace`, `faith`, `salvation`: "by grace you have been saved". The Plain English Translation reads "It is by grace that you have been saved".
   - `temple`: "grows into a holy temple in the Lord". The Plain English Translation reads "it is growing up as a temple that is holy in the Lord"; the quoted phrase is the ESV's.
   - `paul`: "the unsearchable riches of Christ". The Plain English Translation says "riches no one can trace out"; "unsearchable riches" is the KJV/ESV rendering.
   - `glory`: "riches of the glory" (1:18). The Plain English Translation says "the wealth of the glory".

   STYLE and CLAUDE.md require note and topic quotes to be the Plain English Translation verbatim, and copyrighted translation text is not allowed in content. Fix: replace each with the Plain English Translation's exact words.

4. **Major. chapters.json ch.1 election card, Lutheran entry.** "God has chosen to save all who come to Christ in faith" blurs the Lutheran position into foreseen-faith election. Formula of Concord SD XI teaches that election is "in Christ", is a cause of salvation (a comfort for the believer), and does not rest on anything in the person; it is the later orthodox *intuitu fidei* line that speaks of faith foreseen. The card's closing line ("decline to say why some believe and others do not") is accurate, but the first sentence makes the Lutheran answer look the same as the Methodist one. Fix: state what the Epitome and Solid Declaration actually say (election revealed in Christ, applied only to the called, no speculation about the rest), and say that some Lutheran orthodox writers added "in view of faith".

5. **Major. notes.json 3:19 and chapters.json ch.3 T-lens, topics.json `theosis`.** "Eastern writers read it as theosis; many Western commentators read it as maturity; none speak of becoming God." This sets East against West too sharply. The Catholic Catechism itself uses divinization language (CCC 460 quoting Athanasius and Aquinas; 1988, 2 Peter 1:4), and Augustine and Aquinas speak of participation in God. The Orthodox and Western positions differ in emphasis (essence/energies), not in whether the verse is read as union with God. As worded, the Catholic side is caricatured. Fix: add the Catholic and Anglican/Methodist (Wesley's "perfect love") readings and drop "none". Also give a patristic source (Athanasius, *On the Incarnation* 54, or Chrysostom on this verse) for the Eastern reading.

6. **Major. chapters.json ch.3 card (3:6), Lutheran entry.** The Lutheran answer to "new, widened or distinct Israel?" is one vague sentence, followed by an unrelated criticism of Luther and the ELCA's 1994 repudiation. The only Lutheran church-and-Israel statement given is a confession-free description, while the Catholic, Orthodox and Reformed entries get their own documents. Only the Lutheran tradition is introduced through its worst chapter. The ELCA fact is correct (1994 Declaration of the ELCA to the Jewish Community), but it belongs in a Jewish-lens note, not as the Lutheran answer. Either give the Lutheran view in its own terms (Augsburg Confession VII; Luther on Romans 9-11; the 1983 LCMS and other statements) or add parallel history notes to the Catholic and Reformed entries.

7. **Major. variants.json 1:15 witness list and why-text (verify).** The entry says the shorter reading is supported by P46, the original hand of Vaticanus "and some others". Metzger and the NA apparatus, as I recall them, also list the first hand of Sinaiticus, and perhaps Alexandrinus, 6 and 1739. The entry says "followed by Westcott-Hort" without saying how. I also doubt the claim that NA28 and THGNT print the full text unbracketed, and "Metzger reports the shorter text ... is probably the older" does not match what I remember of Metzger, where the committee kept the words (with doubt) because loss by homoeoteleuton seemed likely. The writer did not have the apparatus (the auto file only compares Byzantine with NA and shows no 1:15 difference). Fix: check NA28 apparatus and Metzger p. 533 before publication, restate the witness list, and say what the committee actually rated it.

### Minor

8. **Minor. book.json authorship ("traditional view").** "Polycarp's letter to the Philippians quotes words that match 2:8-9 and 4:26 as Scripture." Polycarp 1:3 echoes Eph 2:5, 8-9 without introduction. Polycarp 12:1 says "as it is said in these Scriptures: 'Be angry and do not sin'", which is Psalm 4:4 LXX and may or may not be Eph 4:26 (and "these Scriptures" there is ambiguous). Fix: "echoes 2:8-9 and perhaps cites 4:26 with the formula 'as it is said in these Scriptures'".

9. **Minor. book.json authorship ("Pseudonymity").** Tertullian's report about the presbyter who wrote the Acts of Paul is about a narrative work, not a letter; presenting it as evidence of ancient attitudes to pseudonymous letters is a stretch. Better parallels: 2 Thess 2:2 and 3:17 (already in the 1:1 note), the Muratorian list's rejection of Laodiceans and Alexandrians, and the *Epistle to the Laodiceans*. Add the main academic discussion (Meade; Donelson; Aland) to the sources.

10. **Minor. notes.json 3:15.** "The Greek Old Testament uses *patria* for the 'families of the earth' in Genesis 12:3." LXX Gen 12:3 (Rahlfs) reads `αἱ φυλαὶ τῆς γῆς`; `πατριαί` is in Acts 3:25 (citing Gen 22:18/12:3) and Psalm 21:28 LXX. Fix the claim to "Acts 3:25, quoting the promise to Abraham, uses *patriai*".

11. **Minor. chapters.json ch.3 C-lens.** "3:2-7 is one sentence of 105 words" (also "In the Greek, 3:2-7 is one sentence"). A count of texts/orig/Eph.json SBL gives 92 Greek words for 3:2-7. Recount (3:1-7 is 103, which may be the source of the 105) and fix.

12. **Minor. notes.json 3:16.** "Plato had already used it for the reasoning self (Republic 589a) for the reasoning self." The sentence is garbled by a duplicated phrase. Plato's term at 589a is `ὁ ἐντὸς ἄνθρωπος`, not Paul's `ἔσω`. Also "The same Greek phrase is in 2 Corinthians 4:16" is not exact: 2 Cor 4:16 has `ὁ ἔσω ἡμῶν` without `ἄνθρωπος`. Say "a close parallel".

13. **Minor. notes.json 1:13 and chapter 1 "T" lens.** The note groups Lutherans with "baptism or chrismation". Lutheranism does not practice chrismation. The card (ch.1 card 2) correctly says Lutherans tie the Spirit to word and baptism. Align the note to the card.

14. **Minor. chapters.json ch.1 card 2, Baptist entry.** The claim that sealing happens when a person first believes is cited to BFM 2000. BFM 2000 does not make that statement about Ephesians 1:13 (article 5 speaks of perseverance and article 4 of salvation). Reword as the common Baptist reading of the verse's word order, or cite a Baptist commentator. Also the Reformed entry cites WCF 18.2 for the sealing but then adds "baptism is a sign and seal", which is WCF 28.1; add that reference.

15. **Minor. chapters.json ch.3 card, Orthodox entry.** "The fathers, including Chrysostom, speak of the church as the new or true Israel" is cited to Ware and Chrysostom's homilies on Ephesians. Ware does not treat this topic, and "true Israel" is more at home in Justin than in Chrysostom's Ephesians homilies. Cite a specific passage, or give a contemporary Orthodox statement, so the card does not read as only the supersessionist fathers.

16. **Minor. variants.json 1:1 (verify).** "THGNT prints it" (without brackets). Verify against THGNT's apparatus. The Origen witness is via Cramer's catena (Gregg, JTS 1902); say so. 424 corrected is also relevant and omitted. The explanation of the order "Jesus Christ" ("as most Christians said it") is speculation, not Metzger.

17. **Minor. variants.json, missing entries.**
    - 2:21 `πᾶσα οἰκοδομή` (SBL, Byz both, per the repo) versus `πᾶσα ἡ οἰκοδομή` (a variant in the apparatus, TR/KJV "all the building"). The note discusses it, but there is no variant card; add one.
    - 1:14 `ὅ` (SBL/NA, agreeing with *arrabon*) versus `ὅς` (Byzantine; agrees with the Spirit). This is listed in texts/auto; add a short entry.
    - 3:13 `ἐγκακεῖν`/`ἐκκακεῖν` is spelling only; skip.
    - 2:5, `ἐν τῷ Χριστῷ` versus `τῷ Χριστῷ`: check NA28.

18. **Minor. variants.json 2:17 and book.json "The text of Ephesians".** The 2:17 statement that the Byzantine text has "peace" once is confirmed by the repo's Byzantine text, but "and the Textus Receptus" is asserted without a check; the KJV supports it. OK; no change beyond confirming.

19. **Minor. plain.txt 3:14-15.** `3:14 ... before the Father,` ends in a comma and 3:15 starts a new capitalized sentence ("Every family..."). A comma before a capital is a punctuation fault and breaks the relative sense of Greek `ἐξ οὗ`. Use a period at 3:14 or a dash, or "from whom every family...".

20. **Minor. plain.txt 3:12.** "Through faith in him we have freedom of speech and access" drops `ἐν ᾧ` ("in whom"), one of the letter's "in him" refrains. Restore ("In him we have..."). The pistis note itself is fair and consistent with the Romans 3:22 Plain English Translation ("faith in Jesus Christ"); it correctly names Hays, Campbell, Dunn, Moo and Fitzmyer. One gap: most Ephesians commentators (Lincoln, Hoehner, Best, O'Brien) take the objective sense here, which could be stated.

21. **Minor. plain.txt drift toward published translations.** The wording is mostly the literal line, but several clauses follow the NIV or ESV closely, enough to fix:
    - 2:8-9: "It is by grace that you have been saved, through faith ... so that no one can boast" (the NIV has "by grace you have been saved, through faith ... so that no one can boast").
    - 2:21: "the whole building" plus "holy ... in the Lord" tracks the NIV.
    - 3:1: "the prisoner of Christ Jesus for the sake of you Gentiles" is nearly the NIV line.
    - 2:12: "commonwealth of Israel" is the ESV/KJV phrase, and "commonwealth" is not an 8th-grade word. The term is recorded in proposals/nt/terms.json, so an alternative such as "citizenship in Israel" or a gloss is the fix, and 2:12 has no gloss.
    - 1:4 "Indeed" renders `καθὼς` ("just as", linking to 1:3).

    Suggest small re-wordings where the literal line allows.

22. **Minor. glosses.json.** Missing glosses for words above the stated reading level: "commonwealth" (2:12), "domain" (2:2), "doxology-like" no. Also "inheritance" (used 7 times) has none.

23. **Minor. notes.json 2:14.** "Paul also knew the law as a fence between Jew and Gentile (the Letter of Aristeas 139-142)." Nothing shows Paul knew Aristeas. Say "A Jewish text of the second century BC, the Letter of Aristeas, describes the law as a fence".

24. **Minor. notes.json 3:10.** "Most commentators take them as hostile." Chrysostom, Jerome and Calvin (good angels learning) and some modern writers (e.g. Hoehner mixed) would object; the patristic reading deserves a mention, especially as 1 Peter 1:12 is cited for it. Soften to "modern commentators more often".

25. **Minor. notes.json 3:13 / chapters.json ch.3 settings.** The note says the Greek has "no subject" (p) or "no stated object" (b); the infinitive's subject is what is unstated. The ch.3 "why" then asserts "'do not lose heart' (3:13) shows that some readers were discouraged by his suffering", which contradicts the note's own alternative (Paul asking God that he himself not lose heart). Hedge.

26. **Minor. chapters.json ch.1 spec box ("Spec: ... map of the whole letter") and ch.2 spec box.** Labeled as Claude's theory with the "not seen in print" disclaimer: good. In the ch.2 spec, "the Greek word [prosagoge] is used for bringing offerings near God" is unsupported (the verb `προσάγω` is, the noun rarely). Remove or qualify. The 1:3-14 outline is plausible but several correspondences (e.g. Father/ch.3 "every family") are forced.

27. **Minor. notes.json 1:14.** "In modern Greek it still means an engagement ring": `αρραβώνας` means "engagement"; the ring is `δαχτυλίδι`. Say "the engagement".

28. **Minor. chapters.json ch.2 T-lens.** "2:20 is a founding text for apostolic succession" overstates; the verse speaks of apostolic foundation, and succession is inferred (LG 20 uses other texts). Say "cited in support".

29. **Minor. notes.json 2:3.** Augustine's source key is `augustine-spirit-letter` (*On the Spirit and the Letter*), but the classic citations of Eph 2:3 against Pelagius are *On Marriage and Concupiscence* 2 and *On Forgiveness of Sins* 1. Add or substitute, and give the Pelagian reading's source (Pelagius's own Ephesians commentary, or Julian).

30. **Minor. notes.json 2:2.** The note leaves out the grammatical oddity that `τοῦ πνεύματος` is genitive and cannot be in apposition to `τὸν ἄρχοντα` (accusative); the Plain English Translation ("the ruler..., the spirit who is now active") resolves it silently. Say so.

31. **Minor. topics.json `faith`.** "Faith is Christ's gift to the readers" is unsupported; 2:8 says the gift is "God's" and the antecedent of "this" is debated (the note itself). Remove.

32. **Minor. book.json "Where this book stands" versus the 1:1 note.** The Plain English Translation "calls it Paul's letter, as the text does" while the brief and the facts say "traditionally Paul". The wording is slightly inconsistent between "treats Paul as the letter's author" and "traditionally Paul"; use one formula.

33. **Minor. notes.json 1:21.** "This is one reason some scholars see here a later, more settled view" for the two-ages scheme is weak (2 Cor 5:17 and Gal 1:4 already show the age to come touching the present). Either give a scholar or drop. Also "they are 'above' nothing" is garbled.

34. **Minor. cards count and brief.** The brief planned election, grace/faith, foundation, ascension/descent, offices and so on; this part has seven cards (church in book.json; election, sealing; grace-faith-works, law, apostles; church and Israel), which is more than the "six" and covers more than the brief required. No missing card for the Beloved or 1:10 recapitulation; acceptable.

## Checks that passed

- Greek counts: 1:3-14 is 202 words and 1:15-23 is 169 (SBL).
- Variants 1:18, 2:17, 3:3, 3:9 and 3:14 are consistent with the repo's SBL and Byzantine columns; 3:3's "added that" (ὅτι) is right per texts/orig.
- Quoted verses (Exodus 25:8, Psalm 132:13, Isaiah 28:16) and Romans 3:22 match the current Plain English Translation.
- Confessional references checked from memory and found accurate: WCF 1.1, 3.5, 11, 14.1, 18.2, 19, 25; Augsburg Confession IV and VII; Formula of Concord Epitome summary quotation; Articles 6, 11, 12, 17, 19; CCC 66-67, 153, 861, 1037, 1295-1296, 1961-1964, 1996, 2008-2011; LG 7-9, 20; NA 4; Dei Verbum 4; BFM 2000 articles 1, 4, 5, 6 (election wording correct).
- Josephus *War* 5.193-194 and 6.124-126 (Temple warning), Martyrdom of Polycarp 3:2 and 9:2, Ignatius to the Ephesians 12:2, 17:1 and 19:1, Tertullian *Against Marcion* 5.11 and 5.17, Basil *Against Eunomius* 2.19, Pesahim 54a, 1QS 8, the Ara Pacis date (9 BC), Augustus as *pater patriae* (2 BC), and the Priene calendar inscription (about 9 BC) are plausible and match what I know.
- `--check Eph/01-03` shows 0 errors and 0 warnings; no em-dashes in the content.

## Fixes applied

1. Accepted. Plain English Translation 3:5 now reads "not made known to human beings in the way it has now been unveiled to his holy apostles and prophets"; the note says the Plain English Translation keeps the comparison ("as").
2. Accepted. Checked against texts/orig/Eph.json: SBLGNT prints ἐν αὑτῷ, Byzantine ἐν ἑαυτῷ. The variant now gives NA28 "in him" (THGNT marked "as reported, not rechecked") against SBLGNT, Byzantine and TR "in himself", says the manuscripts cannot show a breathing, and drops the "smoothing" claim in the why and the note.
3. Accepted. All five topic-page quotes now use the Plain English Translation's wording (grace, faith, temple, paul, glory); "by grace you have been saved" became "It is by grace that you have been saved".
4. Accepted. Lutheran election card rewritten from Formula of Concord SD XI: election in Christ, known through the gospel, a cause of salvation and a comfort, resting on nothing in the person, no speculation about why some believe; the later "in view of faith" (intuitu fidei) line is named as a later addition (marked as reported, not rechecked).
5. Accepted. The 3:19 note, the ch.3 T lens and the theosis topic no longer set East against West: the Orthodox theosis reading, Catholic divinization (CCC 460, quoting Athanasius and Aquinas), the maturity reading and the Wesleyan perfect-love reading are all given; "none" removed. CCC 1988 left out (not stated with confidence); no new source keys added; Athanasius is cited only as quoted in CCC 460.
6. Accepted. Lutheran church/Israel row now gives the Lutheran view in its own terms (Augsburg Confession VII; teachers differ on Romans 9-11); the Luther/ELCA aside is removed rather than matched in other rows.
7. Partly accepted. The witness list now names only P46 and the original hand of Vaticanus and says the rest are in the NA28 apparatus and Metzger, not rechecked; "followed by Westcott-Hort" and the Metzger claim removed; THGNT printing marked not rechecked. The committee rating is not stated because it was not checked.
8. Accepted. book.json says Polycarp echoes 2:8-9 and perhaps cites 4:26 with "as it is said in these Scriptures" (also fixed in the reception paragraph).
9. Partly accepted. The Pseudonymity paragraph now leads with 2 Thessalonians 2:2 and 3:17 and the Muratorian rejection of Laodiceans and Alexandrians, and says the Acts of Paul is a story, not a letter. Meade, Donelson and Aland not added: no source entries exist and I could not verify the citations.
10. Accepted. The 3:15 note now says Genesis 12:3 in the Greek has phylai and that Acts 3:25 has patriai.
11. Accepted. 3:2-7 counted at 92 Greek words in texts/orig (3:1-7 is 105); the C lens says 92. The L lens ("3:2-7 is one sentence") was already correct.
12. Accepted. 3:16 note: duplicated phrase removed, Plato's "the inner person" (different words) stated, 2 Corinthians 4:16 called a close parallel.
13. Accepted. 1:13 note now matches the card (confirmation/baptism, chrismation, and word and baptism for Lutherans).
14. Accepted. Baptist row reworded as the common Baptist reading of the verse's order and the BFM 2000 citation removed; Reformed row adds Westminster Confession 28.1.
15. Partly accepted. Orthodox row rewritten: fathers read Ephesians 2-3 as the gathering of the nations, Justin named for "true Israel", Chrysostom's Ephesians 2 homily marked as reported, not rechecked; Ware removed as source; Romans 11 added. No contemporary Orthodox statement added (none verifiable).
16. Partly accepted. 1:1 variant: THGNT printing marked not rechecked, 424 corrector added as reported, Origen via catena (Gregg, JTS 1902) stated, and the speculative "as most Christians said it" removed (1:1 second variant).
17. Accepted. New variant entries at 1:14 (ὅ/ὅς, checked against texts/orig) and 2:21 (πᾶσα οἰκοδομή versus πᾶσα ἡ οἰκοδομή; the TR side marked as reported, not rechecked). 2:5 `ἐν τῷ Χριστῷ`: declined; the repo's SBL and Byzantine texts both read τῷ Χριστῷ and I cannot check NA28 here.
18. Accepted as no change: the 2:17 Byzantine "peace" once is confirmed by the repo text; the Textus Receptus claim rests on the KJV and is left as is.
19. Accepted. 3:14-15 now one sentence: "...kneel before the Father, / from whom every family in heaven and on earth gets its name." Note anchor and topic text updated.
20. Accepted. 3:12 now "In him we have freedom of speech and access, and we come with confidence, through faith in him." The pistis note adds that most Ephesians commentators take the objective sense (no names added).
21. Partly accepted. Reworded 3:1 ("on behalf of you Gentiles", literal ὑπὲρ ὑμῶν) and 1:4 ("As part of this, he chose us", for καθὼς). Declined 2:8-9 (the word order is the Greek's own and "It is by grace that" is not NIV wording), 2:21 ("the whole building" is the stated reading with its own variant card), and 2:12 ("commonwealth" is a recorded term in proposals/nt/terms.json, with a gloss planned; the gloss is now added).
22. Accepted. Glosses added for "commonwealth of Israel" (2:12), "domain" (2:2) and "an inheritance" (1:11).
23. Accepted. 2:14 note now says a Jewish text of the second century BC describes the law as a fence; no claim that Paul knew it.
24. Accepted. 3:10 note: "Modern commentators more often" and the patristic good-angel reading (Chrysostom, Jerome, Calvin; as the reviewer reports, not rechecked) added.
25. Accepted. The 3:13 note and its p line say the infinitive has no stated subject; the ch.3 setting "why" now hedges and points to the note's other reading.
26. Partly accepted. The ch.2 spec now says the related verb prosago is used of bringing offerings near God. The 1:3-14 outline spec kept: it is labeled as Claude's theory, and the forced correspondences are for the reader to judge.
27. Accepted. 1:14 note: "an engagement".
28. Accepted. Ch.2 T lens: 2:20 "is cited in support of" apostolic succession.
29. Partly accepted. 2:3 note names the anti-Pelagian writings (On Marriage and Concupiscence, marked as reported, not rechecked) and Pelagius's commentary on Paul. No new source keys added (none verifiable here).
30. Accepted. 2:2 note explains the genitive "spirit" and that the Plain English Translation smooths it.
31. Accepted. "Faith is Christ's gift to the readers" removed from the faith topic.
32. Accepted. book.json now says the Plain English Translation "follows the text, which names Paul as the writer" and that the book page says "traditionally Paul".
33. Accepted. 1:21 notes: scholar-less claim reworded with 2 Corinthians 5:17 and Galatians 1:4, and "above nothing" fixed.
34. No change needed (acceptable per the review).

Quotes of changed Plain English Translation verses in other books: none found for 1:4, 2:15, 3:1, 3:5, 3:12 or 3:14-15 (searched the exact new and old wording). Plain English Translation verses changed: 1:4, 3:1, 3:5, 3:12, 3:14, 3:15. Check: 0 errors, 0 warnings.

## Verification pass (2026-10-29)

Checked against pages opened in this session (texts/orig, texts/en, vatican.va, newadvent, CCEL, Gutenberg, Sefaria, church and confession sites, Wikipedia pages for manuscripts and traditions, the NET Bible note on 1:15). Counts: about 95 items verified (many unchanged), 22 corrected, 31 removed. Web search budget ran out partway, so later items were checked by direct page fetch. Log: .scratch/Eph-01-03-verify/sources-checked.md. Main changes: the 1:1 and 1:15 witness lists rebuilt from pages that state them (the 424 corrector omits the words; Bezae removed), variant cards reduced to SBLGNT against Byzantine text with the KJV, three cards deleted (1:18, 2:21, 3:9 koinonia) because the second reading could not be seen, the keys metzger, nestle-aland-28, comfort-nttc and thgnt removed, and every hedge phrase removed. Positions of named modern scholars in notes were not checked (books not openable).


## Verification check (2026-10-29)

Hostile re-check of the verification pass, by a separate reviewer. Note numbers below are 0-based positions in notes.json. Opened this session: texts/orig/Eph.json and other NT files, tools/lxx.py (Swete), Wikipedia (Temple of Artemis, Ephesus, Epistle to the Ephesians, Textual variants in the Epistle to the Ephesians, Dispensationalism, Messianic Judaism, Eastern Orthodox theology, Chrismation, Pentecostalism, Sacred tradition, Apostolic succession, New Apostolic Reformation, Seventh-day Adventist theology, Community Rule), newadvent (1 Clement), web searches on Ussher, on Jeremias (a NET Bible note) and on the authorship positions of Lincoln, Hoehner, Thielman, Arnold, Best and Schnackenburg. Working files: .scratch/Eph-check/.

### (1) Hedges and unopenable works: 0 hedges, 0 unopenable keys, 2 minor issues
1. (minor) No hedge phrase ("as reported", "not rechecked", "from memory", "unverified", "not checked", "could not verify", "reported by") remains in this part's JSON or in book.json. The pass's grep also matches "subsists" (it contains "ubs"); that is a false hit. No `metzger`, `nestle-aland-28` or `thgnt` key remains.
2. (minor) variants.json names no NA28 or Westcott-Hort/Tregelles anywhere, but texts/auto/Eph.json lists NA27/28 at 1:1 ("NA27/28 [ἐν Ἐφέσῳ]"), 1:15, 1:18 and 2:15. The pass removed editions the site's own word list shows, while part 04-06 kept them from the same file. The two parts are treated inconsistently.

### (2) Spot checks (14 claims)
Verified:
3. 1:3-14 is one Greek sentence of 202 words (SBLGNT; Byzantine counts 203), 1:15-23 is 169 words, 3:2-7 is 92 words: counted in texts/orig/Eph.json. Verified.
4. "In the heavenlies" five times in Ephesians (1:3, 20; 2:6; 3:10; 6:12), and huiothesia only at Rom 8:15, 23; 9:4; Gal 4:5; Eph 1:5; atheoi, sussoma, elachistoteros and polypoikilos only in Ephesians within the New Testament: texts/orig search. Verified for the New Testament. Notes 45 and 67 say "in the Bible" for atheoi and sussoma; the Greek Old Testament was not searched, so the wording should say "New Testament".
5. Genesis 38:17-18 uses arrabon; Genesis 12:3 has phylai; Acts 3:25 has patriai; Psalm 38:13 (LXX) has paroikos; Ecclesiastes 3:11 and Psalm 142:5 (LXX) have poiema: tools/lxx.py and texts/orig/Act.json. All verified.
6. 1 Clement 5:6 "seven times thrown into captivity": newadvent. Verified (note 60 says "in chains"; close enough).
7. Jeremias reads akrogoniaios as capstone: a NET Bible note (opened through search) cites TDNT 1:792 and criticizes the reading. Verified, secondhand.
8. Goodspeed and Mitton among those who doubt Pauline authorship; Hoehner, Thielman and Barth defend it: Wikipedia "Epistle to the Ephesians". Verified.
9. Lincoln holds Ephesians is pseudonymous and Arnold disagrees with him; Thielman and Hoehner defend Paul: search results quoting a Themelios review and a Logos guide. Verified secondhand (review and blog snippets, not the books).
10. Dispensationalist row: "Christ abolished the Mosaic law, and thus it does not apply to the Christian", distinct roles of Israel and the church, a separate "mystery" program (Darby): Wikipedia "Dispensationalism". Verified. Adventist FB 19 row: Wikipedia states ceremonial laws fulfilled, Ten Commandments binding. Verified. Orthodox "one Tradition" and apostolic succession as "God-ordained mechanism": Wikipedia. Verified (the second is an image caption on that page, not body text).

Wrong or overstated:
11. (major) Note 3 (1:1, Ephesus) says "perhaps 200,000 people". Wikipedia "Ephesus" calls estimates up to 225,000 unrealistic and gives 71,587 (Hanson and Ortman 2017), about 138,000-172,500 (Murphy-O'Connor) and 33,600-56,000 (Hanson). The figure has no source and is the old high estimate. Remove it or give the range with its source.
12. (minor) Same note: the temple of Artemis "first built in the 500s BC". Wikipedia "Temple of Artemis": a first temple in the second half of the 8th century BC; the 6th-century temple (from about 550 BC) is a rebuild; burned 356 BC; rebuilt from 323 BC. Also book.json authorship/4 says Goodspeed suggested the author was "perhaps Onesimus"; Wikipedia does not say it and nothing opened does. Unverified.
13. (minor) Note 21 (1:14) says Exodus 19:5 and Malachi 3:17 use the "language" of peripoiesis. LXX Exodus 19:5 reads laos periousios, not peripoiesis; only Malachi 3:17 has peripoiesin (tools/lxx.py). Reword.
14. (minor) Note 22 (1:15): the circular-letter view "proposed by James Ussher in the 1600s". A search shows Ussher popularized the encyclical view (credited to Beza first); no opened source gives a date or says he proposed it. Drop "in the 1600s" or say "popularized by".

Not verifiable here:
15. (minor) Note 58 (2:21): "Community Rule 8" (house of holiness, holy of holies). The Wikipedia Community Rule page does not mention column 8 and no other page was opened. The Vermes key was checked for existence, not for this claim.

### (3) Named modern-scholar attributions not shown as checked
The log's "Not checked" section leaves all of them. Only items 8-9 were checked, and only on secondhand pages.
16. (major) Best: notes 0, 22, 37, 55, book.json authorship/2, audience/views/3, lenses/1 and chapters 0 and 1 views group "Lincoln, Best and Schnackenburg" as holding that a disciple wrote it. A search snippet (a reading list) calls Best agnostic, referring to the author as "AE". Not confirmed either way; the grouping is unverified and may be wrong.
17. Still unchecked, by place: Schnackenburg (notes 0, 22; book authorship/2, audience/3, lenses/1; chapters 0 settings/2); Barth (notes 7, 49 "Markus Barth" on the law as fence; book authorship/1); Hoehner (notes 7, 37, 55; chapters 0 and 1 views; book audience/0, sections/2); Arnold (notes 34, 70; topics 1; book sections/3, lenses/0; chapters 1 deep/2); Wright (notes 0, 48, 72; book authorship/1; topics 8); Sanders, Dunn and Wright on boasting and boundary markers (note 40; topics 8); Hays, Wright, Campbell, Dunn, Fitzmyer and Moo on pistis Christou (note 72); Berkhof, Yoder and Wink (note 28; the 04-06 pass removed Yoder and Wink as unverifiable, this part still names them); Witherington "suggests Tychicus" (note 0, book authorship/4); Mitton "a disciple steeped in Paul's letters" (book authorship/4); Trebilco (book lenses/0); Perkins and O'Brien (book lenses/1, "answered by Hoehner, O'Brien, Thielman and Barth"; the log says both were removed from the notes and the O'Brien entry could not be confirmed, yet book.json reading still lists O'Brien, Pillar, 1999); Wallace (note 39); Kinzer (note 50; chapters 1 view J).
18. (major) Dispensationalist names. The log says Scofield, Chafer and Ryrie names were removed, but notes 65 and 66 still say "Dispensationalist teaching (Scofield, Chafer): the church is a new, separate body, the mystery unknown to the prophets", and keys scofield and chafer-systematic are still cited. Neither work was opened.
19. (major) Card rows resting on Wikipedia that go beyond it:
 - Messianic Jewish, 2:15 row: "many read 2:15 as about what the law did as a barrier between Jew and Gentile". Wikipedia "Messianic Judaism" says the written Torah remains in force, observed morally and ritually, with interpretation revised through the apostolic writings; it does not mention Ephesians 2:15 or a barrier. The Ephesians reading is unsupported by the key it cites.
 - Messianic Jewish, 3:6 row: "Gentiles are joined to Israel's story as Gentiles ... the 'one new humanity' of 2:15 ... keeps Jew and Gentile distinct". Not in the page I read (which says Israel and the nations will be united under Messiah's rule). Unsupported.
 - Dispensationalist, 3:6 row: "they do not read the church as the 'new Israel'". Wikipedia states distinct roles and a separate program; this sentence is not in the part I read. The two Dispensationalist rows also say "(see the Wikipedia article on dispensationalism)" inside the card text, which sends the reader to Wikipedia instead of using a source key.
 - Pentecostal, 2:20 row: "Many Pentecostal and charismatic Christians hold that the gifts of apostle and prophet (4:11) continue". Wikipedia "Pentecostalism" calls Pentecostals continuationists about spiritual gifts but names no apostle or prophet offices, and says Pentecostal denominations criticized Latter Rain claims; Wikipedia "New Apostolic Reformation" says many Pentecostals and charismatics are concerned about NAR's promotion of those offices. The first sentence is overstated; the NAR sentence (Wagner; leaders call themselves apostles and prophets) is accurate.
 - Pentecostal, 1:13 row: faithful to Wikipedia (a definite experience after salvation; tongues the initial physical evidence for most denominations). The Acts 19:2 link is the writer's own.
 - Orthodox chrismation row: matches Wikipedia ("ordinarily administered immediately after baptism"), but the formula is quoted as "Holy Spirit" where the page reads "Holy Ghost", and the page covers the Eastern churches generally, not Orthodox only. Reword or drop the quotation marks.
 - Orthodox election row (1:4): synergeia and "God will not force salvation" are on the Wikipedia page; election is not, so the row does not answer the card's question (see 23).
 - Adventist row: faithful.
20. (major) Orthodox theosis and 3:19. The log says "theosis tied to Eph 3:19 R (no opened page links them)", yet note 80 (3:19) and chapters 2 view T still say Orthodox teaching speaks of theosis and that "filled with all the fullness of God" "fits that language", under key wikipedia-theosis. The link was judged unsupported and left in place. Catechism 460 is verified, so the Catholic half can stay.
21. (major) Note 10 (1:5) says "Catholic, Orthodox, Lutheran and Wesleyan teachers read it variously as foreknowledge of faith". The log removed the Orthodox foreknowledge sentence and the Lutheran "in view of faith" claim from the card (the Formula of Concord does not say it), but the note still says it, with no source.

### (4) Traditions cards: 0 cards under two views; 4 cards lost a distinct view or hold a row that answers nothing
22. No card in this part has fewer than two views (minimum six).
23. (major) 1:4 election card: the Orthodox row states only synergeia and says nothing on election; the pass deleted the sentences that did. The Baptist row gives two confessions and no distinct view.
24. (major) 2:15 law card: no Orthodox, Methodist, Baptist or Anglican view remains; the Orthodox law row was removed because no page was opened. The Lutheran row cites Formula of Concord V and VI, which the log does not list as opened.
25. (minor) 3:6 card: the Lutheran row (Augsburg VII) says nothing about Israel; the "some Reformed hold national Israel has a future" and Lutheran "teachers differ" lines were removed, so the Reformed side is one-sided. Anglican, Methodist, Baptist and Pentecostal absent.
26. (minor) 1:13 sealing card: the Baptist row has an empty source list ("a common Baptist reading") and was not checked. Anglican and Methodist absent.

### Counts
(1) 0 hedges, 0 unopenable keys, 2 minor issues. (2) 14 claims tried: 9 verified (3 only secondhand), 5 wrong or overstated (1 major, 4 minor), 1 not verifiable (counted within the 14). (3) 1 major grouping doubt (Best), about 30 named attributions unchecked, 4 major unsupported or overstated card rows (Messianic Jewish x2, Dispensationalist, Pentecostal), 3 major leftovers the log says were removed or never checked (Scofield and Chafer, theosis, note 10). (4) 0 cards under two views, 4 cards with a lost or empty tradition (items 23-26).

## Verification fixes (2026-10-29)

Second round, applying the `## Verification check` findings and the rule for named modern scholars. Log: .scratch/Eph-01-03-verify/sources-checked.md. Counts: 26 check findings handled (all applied except where noted); about 40 scholar attributions worked through (7 verified and kept, about 30 names dropped, 3 views removed); about 45 commentary and other source keys stripped from entries that nothing opened supports.
- Ephesus population: the unsourced "200,000" replaced by the Wikipedia range (33,600 to 71,587; 225,000 now thought unrealistic). Temple of Artemis dates corrected (later 700s BC; about 550 BC rebuild; burned 356 BC; rebuilt from 323 BC).
- 1:14 note: Exodus 19:5 has laos periousios in the Greek; peripoiesis only at Malachi 3:17 (tools/lxx.py, Swete; segullah checked in the Hebrew word lists).
- Ussher removed everywhere (no opened page dates or credits it); the circular-letter view stays as "held by many".
- Community Rule 8 kept and reworded to the column's own wording (holy house for Israel, foundation of the holy of holies for Aaron; Posen Library entry).
- Goodspeed and Onesimus verified (catalog and review pages); Goodspeed and Mitton as doubters verified on Wikipedia "Epistle to the Ephesians".
- Best: kept in the group that holds a disciple wrote it (reviews say he denies Pauline authorship); Schnackenburg kept (named beside Lincoln in a source listing). His independent-composition view of Colossians is no longer lumped with Lincoln's.
- Names dropped because no opened page states the position: Wright, Witherington, Dunn, Hays, Campbell, Fitzmyer, Moo, Berkhof, Yoder, Wink, Kinzer, Perkins, O'Brien, Trebilco (as a user of the history lens), Levine, Nanos, Fredriksen, Wallace, Barth on the fence reading, Hoehner and Arnold on specific arguments; Hoehner, Arnold, Thielman and Barth stay only as defenders of Paul (Wikipedia, review pages). The O'Brien entry is gone from the reading list.
- Leftovers the first pass said were removed are now removed: Scofield and Chafer (notes 3:5 and 3:6, ch. 3 T lens), Kinzer (2:15 note, ch. 2 J lens), the theosis link to 3:19 (note, topic, ch. 3 T lens; Catechism 460 kept as Catholic teaching in general), note 10's Orthodox/Lutheran foreknowledge line, and the Eastern "mortality, not guilt" line at 2:3.
- Card rows trimmed to what the cited page says: Messianic Jewish rows (2:15 and 3:6) reduced or deleted, Dispensationalist rows lose the Wikipedia pointer and the "new Israel" claim, Pentecostal apostle row restated from the Pentecostalism and NAR pages, Orthodox chrismation wording paraphrased (no quotation marks). Formula of Concord Epitome V and VI opened (bookofconcord.org) and the Lutheran law row kept. Deleted rows: Orthodox on the 1:4 election card (the page gives synergeia only, nothing on election), Baptist on the 1:13 sealing card (no source), Messianic Jewish on the 3:6 card.
- Dates: Rome about AD 62 and a follower's date AD 70-100 now follow Wikipedia; Caesarea and Ephesus year ranges, Irenaeus about AD 180, Calvin 1548, "Since the early 1800s" removed or softened; Aristeas dated third or early second century BC (Wikipedia).
- NA28 (book-wide decision): the variant cards now name editions only as this site's word list shows them (NA28, NA27, Tyndale House, Westcott-Hort, Tregelles, SBLGNT, Textus Receptus, Byzantine), with no apparatus or bracket claims; same style as 04-06. 2:15: NA28, NA27, Tyndale House and Tregelles read "in him"; SBLGNT, Westcott-Hort, Textus Receptus and Byzantine read "in himself".
- Also fixed: "in the Bible" for atheoi and sussoma now "New Testament"; the unsupported "we were chosen" reading (1:11), huiothesia "not in the Greek Old Testament", 2 Maccabees politeia and Josephus Antiquities decrees removed; Kirby citation removed from the baptism spec.
- Not changed: 1:4 and 2:15 cards keep six and five rows with a real conflict. Source keys wikipedia-ephesus, wikipedia-temple-artemis and wikipedia-epistle-ephesians added; six keys no longer cited were removed from sources.json (wikipedia-theosis stays: 1 Corinthians cites it).

## Card restoration (2026-10-29)
Restored 6 views: Orthodox on 1:4 (Chrysostom), Baptist on 1:13 (BFM 2000), Orthodox, Anglican, Methodist and Baptist on 2:15, Messianic Jewish on 3:6. No cards re-created (none were converted). Still missing: none of the listed ones; Dispensationalist, Messianic and other 2:15 rows unchanged.
