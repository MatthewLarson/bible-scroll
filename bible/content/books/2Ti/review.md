# Hostile review: 2 Timothy (2Ti), one part, flat folder

## Verdict

The book is careful and mostly sound. `node tools/build.js --check 2Ti` gives 0 errors and 0 warnings. The Plain is well reshaped. I found no invented source, quotation or fragment, and I found no drift toward the NIV/ESV that is worse than the forced phrases. Most of the checkable sources hold up when opened this session: 1 Clement 5, Eusebius 2.22 and 2.25, Irenaeus 3.3.3, Tacitus 15.44, Harrison's own sentence, Dei Verbum 11, the Chicago Statement wording, Dositheus Decrees 2, 10 and 18, CCC 1030-1032, Targum Pseudo-Jonathan on Exodus 1:15 and Numbers 22:22, Pliny 30.2.11, and the Sinaiticus readings at 1:11, 2:14, 4:10 and 4:22.

The real problems are these:
- The authorship section is thin on named scholars for the pro-Paul side.
- Three of the four traditions cards do not answer the question they ask for several of the churches listed. The Scripture card leaves out Lutherans, whom the brief required.
- Plain choices at 1:6, 2:2 and 3:17 commit to one reading or break a term link that the site itself sets up elsewhere (1 Timothy 4:14 and 6:11).
- The variants file lists a witness wrongly (Tregelles at 1:11). It also states several Tischendorf-Sinaiticus details I could not verify.
- Some quotes of other books' Plain do not match.
- Many small assertions have no source.

Sources I did not verify (stated as unverified in the findings): the exact Sinaiticus first-hand and corrector readings at 2:3, 2:7, 2:13, 2:19, 3:3, 3:14, 4:1 and 4:14, and the "Amen" corrector at 4:22. The St. Mary's text of the Damascus Document and the Chester Beatty details were not available to me.

## Findings

### Major

**1. Major. book.json `authorship`: the pro-Paul side is unnamed and one view is missing.**
- The brief says to state each view "with its best arguments and its named scholars", and the brief for 2 Timothy names Harrison, Murphy-O'Connor and Prior.
- The critical side gets Harrison and Murphy-O'Connor. "Those who hold Paul's authorship today" is never given a name.
- The secretary/amanuensis view is absent from this book. It is in the brief-pauline list and is the best-known middle position for exactly this letter.
- Prior is absent.
- Murphy-O'Connor's view has no source entry. The brief said "via Wikipedia", but the Wikipedia biography I opened says only that he "consistently defended the authenticity" of 2 Timothy and nothing about 1 Timothy or Titus.
- A search turned up secondary reports that cite his *Paul: A Critical Life* (1996, pp. 356-359) and a 1991 *Revue Biblique* article. I did not open either work. The sentence "the other two were written later, using it as a model" therefore has no source I could verify.
- Fix: name at least two defenders of Paul or of a secretary from a work actually opened this session. Add Prior only if opened. Give Murphy-O'Connor a real citation or reduce the sentence to what the opened source says. Add a short secretary-hypothesis entry.

**2. Major. chapters.json ch. 3, card on 3:16: no Lutheran entry (and no Pentecostal).**
- The brief names "the Orthodox and Lutheran views".
- The card has Catholic, Orthodox, Reformed, Anglican, Methodist, Baptist and "Evangelical", but no Lutheran. Lutheran teaching on Scripture is a distinct, much-cited position (Scripture as the sole norm; the Formula of Concord's opening).
- "Evangelical" repeats the Baptist row in kind: both are inerrancy statements.
- Fix: add Lutheran from a confessional text actually opened. Say that Chicago is a cross-church evangelical statement. Add Pentecostal or say why not.

**3. Major. chapters.json ch. 2, card on 2:2 (ordination and succession): half the rows do not answer the question asked.**
- The question is whether 2:2 describes a succession of ordained ministers.
- The Anglican row says what the Articles say about the Ordinal and about sacraments (Articles 36 and 25). It never says whether Anglicans hold apostolic succession, which they do (the Ordinal's preface, not cited).
- The Lutheran row (Augsburg 14, "regularly called") says nothing about succession.
- The Baptist row (BF&M article 6) is about the office being limited to men. That is a different question and is not what 2:2 raises.
- The Reformed row is the only Protestant row that speaks to succession.
- The brief asked for Pentecostal, which is missing.
- The Catholic row cites "Catechism 1576-1577". I opened scborromeo.org/ccc: 1576 is about who validly confers the three degrees, and 1577 has the "collaborators to succeed them" line and the footnote to 2 Tim 1:6. The "successors of the apostles ... hand on the gift of the Spirit" wording belongs to the 1555-1556 range, where 2 Tim 1:6-7 is footnoted. Cite 1555-1556 and 1577.
- A reader would take the Anglican, Lutheran and Baptist rows as "no". That is a distortion by omission.
- Fix: give each church's own answer on succession, with a source. For Lutheran, either Apology 14 or a named Lutheran church that keeps the historic episcopate, if one was opened. Move the women-and-office point to the women-in-ministry topic. Fix the Catechism numbers.

**4. Major. chapters.json ch. 1, card on prayer for the dead (1:16-18).**
- The Anglican row (Article 22) and the Methodist row (Article 14) quote the rejection of the Roman doctrine of purgatory (pardons, images, relics and invocation of saints in Article 22). That is not an answer to "may Christians pray for the dead".
- Anglicans in particular have a range of practice. The card makes the Anglican and Methodist answer look like "no" by quoting a different question.
- The Lutheran row is sourced to a news item in the LCMS *Reporter* (4 December 2006) about a dialogue session. The Apology is never cited as a primary text under its own key. The row mixes the Apology's "do not forbid" with one LCMS theologian's remark.
- A search found that the ELCA and USCCB reports of the same dialogue say the participants "concurred that prayers for the dead have their basis in Scripture and tradition". The card presents only the cautious side as the Lutheran voice.
- The Baptist and Pentecostal views are missing.
- The Reformed Westminster 21.4 quote is exact.
- Fix: replace the Anglican and Methodist rows with their actual position on prayer for the dead, or state that the Articles address purgatory and not prayer. Cite the Apology itself. Label the dialogue statement as a dialogue statement, with the LCMS caveat as the LCMS view.

**5. Major. plain.txt 2:2 "with many witnesses there" and "pass on"; note 31.**
- The Greek is διὰ πολλῶν μαρτύρων, "through many witnesses". The Plain picks "in the presence of" (the common choice in English Bibles) and hides the "through" reading that the note itself lists.
- Note 31 says "Most readers take it as ... in the presence of". That is unsourced, and its first reading is the one the Plain has already chosen.
- The Plain also renders παράθου as "pass on". The note admits it is the same root as the "deposit" (παραθήκη) of 1:12 and 1:14, so the one link the letter builds is lost in English. A word such as "entrust" would keep it.
- Fix: keep the ambiguity in the Plain, for example "with many witnesses to it", or move the reading into the variant-style note with equal weight. Use "entrust" in 2:2, or add a gloss that links it to the deposit.

**6. Major. plain.txt 1:6 "because I laid my hands on you".**
- The Greek is διὰ τῆς ἐπιθέσεως τῶν χειρῶν μου, "through the laying on of my hands". "Because" turns an instrumental or accompanying phrase into a cause.
- The site's own Plain of 1 Timothy 4:14 says "with the laying on of the elders' hands". The two verses are the main ordination texts, so the difference in wording is read as a difference in sense.
- The verse is the key place in this book (ordination and succession), and the choice leans toward one side of the card.
- Fix: use "through" or "with the laying on of my hands", and let the note discuss διά.

**7. Major. plain.txt 3:17 "the one who belongs to God" against 1 Timothy 6:11.**
- The Greek is ὁ τοῦ θεοῦ ἄνθρωπος. The site's Plain of 1 Timothy 6:11 reads "man of God".
- Note 81 says 1 Timothy 6:11 gives Timothy "the same title", but a reader of the Plain cannot see that.
- The title is the Old Testament prophet title (Moses, Elijah). The Plain replaces a fixed expression with a different idea of belonging.
- The note says the Plain avoids the sex-specific form to "keep both" readings. That is the right worry, but the cost is the lost cross-reference.
- Fix: "the person of God" with a gloss, or "man of God" with a note on ἄνθρωπος. Use the same rendering in 1 Timothy 6:11 and 2 Timothy 3:17, or put the divergence in terms.json with a "why".

**8. Major. variants.json 1:11: wrong witness list.**
- The entry lists Tregelles with the short reading ("SBLGNT, NA28, Tyndale House, Westcott-Hort, Tregelles").
- `texts/orig/2Ti.json` flags ἐθνῶν as present in "GTB" (Tregelles, TR, Byzantine). `texts/auto/2Ti.json` says "ἐθνῶν ... Treg+TR+Byz".
- The generated project data therefore has Tregelles with "of the Gentiles". The writer's own source contradicts the entry.
- The Wikipedia listing I opened confirms the Sinaiticus claims here: ℵ* has the short reading, ℵ^c adds "of the Gentiles".
- Fix: move Tregelles to the long reading or check Tregelles' own edition and say whether it is in text or margin. Re-run the same flag test on every other entry. Flags agree with the writer at 2:3, 2:7, 2:12, 2:13, 2:14, 3:14, 4:1, 4:14 and 4:22.

**9. Major. variants.json and notes.json: Sinaiticus details stated as fact that I could not verify.**
- Verified this session (Wikipedia's variants article, secondary): 1:11, 2:14 (ℵ reads God), 4:10 (ℵ and C read Gaul), 4:22 (ℵ* reads "Lord", a corrector adds "Jesus Christ").
- Not verified, and the writer's source is Tischendorf 1865 "read in the Source Library edition". I did not open that edition. The unverified claims are:
  - 2:19: ℵ "firm foundation of the Lord", changed by a corrector to "of God", and "knows all those", with "all" removed.
  - 3:3 (note 66): "heartless" (ἄστοργοι) is "missing in the first hand of Codex Sinaiticus".
  - The first-hand and corrector assignments at 2:13 (γάρ), 4:1 (καί/κατά) and 4:22 ("Amen").
  - ℵ at 2:3, 2:7, 3:14 and 4:14, given as agreeing with the critical text.
- `sources-checked.md` is not in the scratch folder I could find, so I cannot tell what was actually seen.
- Fix: re-open Tischendorf or the Sinaiticus transcription and confirm each, or cut the claim to what is confirmed. The 3:3 claim is the one most likely to be a misreading of a bracket or an apparatus.

### Minor

**10. Minor. plain.txt 4:22 "Grace be with you all"; note 113; variants 4:22.**
- The Greek is ἡ χάρις μεθ᾽ ὑμῶν, with no πάντων. Titus 3:15 has πάντων, and the site's 1 Timothy 6:21 Plain reads "Grace be with you all" too, so this verse has copied the Titus wording.
- The variants entry itself glosses the Greek as "Grace (be) with you", then prints "all" in the Plain column.
- The plural point, which is what the audience card needs, holds without "all". Several settings and card texts quote "Grace be with you all", and these will need the change too.
- Note 113 says "The same switch ends 1 Timothy and Titus". There is no singular-then-plural switch in either. 1 Timothy 6:21 and Titus 3:15 have only the plural.
- Fix: drop "all". Correct the note to say the plural alone is common to the three letters.

**11. Minor. Quotes that do not match the site's Plain of the other book.**
- Note 69: "upsetting whole households" (Titus 1:11). The Plain of Titus 1:11 reads "turning whole households upside down".
- Note 85: "old wives' tales" (1 Timothy 4:7). The Plain reads "the kind of tales old women tell".
- Notes 77, 78, 79 and 64 (and chapter 3's deep dive) quote 2 Peter 1:21 and 3:16 and Hebrews 1:2 in the writer's own words. These books are not yet written on the site, so the quotes will need to be aligned when they are.
- The Plain of Rom 6:8, Acts and the other cited verses matched when checked, with the exceptions above. The build did not catch these because it matches only exact quotes.
- Fix: use the other books' wording exactly, or paraphrase without quotation marks.

**12. Minor. Eusebius and 1 Clement paraphrases.**
- Note 95 and the `luke` contribution say Eusebius reasoned that Luke was "with Paul in this later imprisonment" and so Acts, "which ends earlier, was written before it".
- In 2.22.6, as I read it, Eusebius notes that the second letter has Luke with Paul, "but at his first defense not even he", and concludes it is "probable" that Luke wrote Acts "at that time". "Only Luke is with me" is not in the passage, and "which ends earlier" is the writer's gloss.
- Eusebius 2.22 uses "it is said" for the second preaching and imprisonment. The book pages state "Eusebius reports". The chapter text should say "a report that Eusebius records".
- "Bore witness before rulers" in the 1 Clement 5 summary (book.json, Paul's last days) is not in the Roberts-Donaldson translation I opened, which says "suffered martyrdom under the prefects". "Seven times thrown into captivity", "east and west" and "the extreme limit of the west" are all in it. The "rulers" wording appears in other translations of the same Greek and is probably fine, but it was not confirmed in an opened source.
- Fix: tighten the Luke note to what the text says. Mark the "release and second imprisonment" as a tradition. Confirm the 1 Clement wording in a named translation.

**13. Minor. Variants coverage and an overbroad claim.**
- `texts/auto/2Ti.json` shows differences the file passes over. Two of them touch the notes' own themes:
  - 1:14: the TR reads παρακαταθήκην for παραθήκην in the key "deposit" word.
  - 1:17: σπουδαίως against σπουδαιότερον (the Plain's "eagerly").
  - 2:18: NA28 brackets τὴν before ἀνάστασιν.
  - 3:15: NA28 brackets τά.
  - 3:16: the Byzantine text reads ἔλεγχον for ἐλεγμόν.
- Chapter 3's views C, the deep dive, note 77 and the `inspiration-of-scripture` topic all say "the manuscripts do not differ here" or "in this clause". The clause in question is the same, but the Byzantine text does differ in the same verse (ἔλεγχον). Say "in the key clause" and name the small difference.
- Fix: add the 1:14 and 3:16 entries at least, or state that small spelling and word differences are not entered.

**14. Minor. variants.json 2:14.**
- The Plain follows SBL and Tyndale House ("Lord") against NA28 and Sinaiticus ("God"). Everywhere else the Plain follows NA28 and Sinaiticus.
- Wikipedia's list puts θεοῦ in ℵ, C, G, I and others. The entry says the readings are "evenly matched". The reason is stated honestly, but "evenly matched" understates the support for "God".
- Fix: state why the exception is made, or follow the pattern.

**15. Minor. chapters.json ch. 3 deep dive: an unsupported statement.**
- "The letter takes for granted that Moses, David and the prophets wrote." 2 Timothy 3:16 and the letter say nothing about Moses, David or the prophets as writers. Moses appears only in 3:8, in the Jannes and Jambres story.
- Fix: cut it, or say that Judaism and the New Testament elsewhere name them (with references).

**16. Minor. glosses.json.**
- 2:5: "the winner's wreath, the gold medal of the day" is anachronistic. Ancient games gave wreaths, and "gold medal" is a modern prize.
- 3:1: "the final era before the end" takes a side on the "last days" question that note 64 says is open (present time or future).
- Fix: "the winner's wreath" only; "the time before Christ's return, which the New Testament says has begun".

**17. Minor. Plain drift (checked in my head only).**
- 4:17 follows the clause pattern of the ESV closely ("proclamation ... carried through in full and all the Gentiles would hear it"). Rebuild it.
- 1:9 keeps the common English chain "not because of ... but because of his own purpose and grace". The Greek order allows a different shape.
- 1:10 "done away with death's power" adds "power". Note 18 does explain it, but the Plain should show the addition (a gloss).
- The forced phrases ("kept the faith", "crown of righteousness", "on that day") are fine.

**18. Minor. book.json.**
- `facts`/`sections`: "Codex Vaticanus, one of the oldest complete Greek Bibles" and "one of the two great fourth-century Bibles". Vaticanus is not complete (it lacks the Pastorals, as the same sentence says). Say "one of the oldest nearly complete Greek Bibles".
- The date of a later writer is "between about AD 90 and the early 100s" in `facts` and "between about AD 90 and 140" in `authorship`. Harrison's own dating (Trajan or Hadrian) is in his text as I opened it. Make the two consistent.
- Harrison's own words check out: "a devout, sincere, and earnest Paulinist, who lived at Rome or Ephesus", writing "during the later years of Trajan or (?and) the earlier years of Hadrian". The summary says he used "several genuine short notes". The page I opened says he found "a genuine note to Titus" and, in 2 Timothy, "three shorter genuine notes" added as a postscript, and none in 1 Timothy. The phrase "worked into the letters" is slightly off, since Harrison treats them as appended notes.
- Fix: those three wording changes.

**19. Minor. Jannes and Jambres (note 70, the `jannes-and-jambres` topic and the works entry).**
- CD 5:18: translations differ ("Yannes" in Wise's, "Yohanah" in Davies's, as reported on the Wikipedia article I opened). The brief itself says "Yohanah". The note and topic give "Yannes" only. Add the other form, because "Yohana" ties to the Talmud's "Yohana and Mamre".
- The source key `cd-damascus-cook` cites a St. Mary's course page. I could not open it, so I could not check the English wording the note quotes.
- Note 70 says "Paul uses a story his readers knew". That is an inference, not a fact. Origen is said to report that Paul drew on a book of Jannes and Jambres, but that is a later report. Label it.
- The works entry has no note on the fragments (the Greek papyrus and its date) or on Origen. Per the canon-tiers brief, a tier-3 work needs provenance and a reliability line. The entry matches the thin style of the other tier-"other" entries, so this is a project-wide gap, not a defect of this writer.
- Verified this session: Targum Pseudo-Jonathan Exodus 1:15 (Jannes and Jambres, chief magicians who interpret Pharaoh's dream), Numbers 22:22 (two attendants named Jannes and Jambres), Pliny 30.2.11 (Moses, Jannes, Lotapes), Menachot 85a ("Johana and Mamre").
- Fix: add the "Yohanah" form, mark the inference, and add a two-line provenance.

**20. Minor. Small assertions with no source (STYLE.md rule 2).**
- Note 8: Lois and Eunice's "Greek names, as many Jews of Asia Minor did".
- Note 76: *hiera grammata* "a phrase Greek-speaking Jews used for their Scriptures".
- Note 25: "Many interpreters, Catholic and Protestant alike, conclude that Onesiphorus had died".
- Notes 42 and 77: "Those in the Reformed tradition answer ..." and "Most scholars prefer the first reading".
- Note 88: *analysis* "was used for a ship casting off its moorings, for striking a tent, and for leaving a banquet".
- Note 99: "especially (*malista*) may also mean 'that is'".
- Note 14: the verb "is found in the Greek Bible only in this letter", while the body says "in the New Testament".
- Chapter 1 T: the hymn refrain from 1:12. Chapter 4 T: "read at Christian funerals".
- Fix: source each, or remove it.

## Checked and found sound

- **Plain against the Greek, verse by verse.** I found no mistranslation, omission or wrong name or number beyond the points above (1:6, 2:2, 3:17, 4:22 and the small additions). The key terms are consistent with terms.json and with the 1 Timothy and Titus Plain: "God-breathed", "deposit", "sound", "godliness", "appearing", "This saying is trustworthy".
- **Counts.** "Christ Jesus" is 11 times and "Jesus Christ" twice in the SBL text (note 1). The vice list in 3:2-5 has eighteen items (note 65). Prisca is named first four times out of six (note 107).
- **Settings and audience.** The settings cover the greeting, thanks and appeal, charge, saying, false teaching, last days, remaining in the Scriptures, last charge and requests. The three views of the audience (Ephesus, elsewhere in Asia, later churches) are fair.
- **Quotes of other books' Plain** match, other than those in finding 11.
- **Cross-references and topics.** I found no duplicate topic. `inspiration-of-scripture` is new, and `canon`, `word-of-god` and `scripture-and-tradition` exist and are linked.
- **Chicago Statement.** The articles quoted are Article VI (whole of Scripture and all its parts inspired), Article VIII (personality and style), Article X (autographic text) and Article XII (inerrant in its entirety). Dei Verbum 11 has "solidly, faithfully and without error".
- **Dositheus.** The quoted phrases "God-taught" and "not of inferior authority" (Decree 2), "continued succession" (Decree 10) and "especially the unbloody Sacrifice" (Decree 18) are in the crivoice.org text. The Confession does not use the word "purgatory", which matches the row.

## Fixes applied

Sources opened for these fixes are listed in `.scratch/2Ti-fix/sources-checked.md`.

1. Fixed. Authorship rebuilt: new rows "Those who defend Paul's authorship" (Luke Timothy Johnson, via Blomberg's review and Wikipedia; N. T. Wright via Wikipedia; F. F. Bruce's own judgment on 1:16-18, from his BJRL lecture) and "A secretary" (Moule's Luke-amanuensis proposal as Bruce reports it); Kelly's release-and-second-imprisonment case as Bruce summarizes it; Raymond Brown added to the critical view. Murphy-O'Connor cut to what Wikipedia's article says (he defended 2 Timothy's authenticity; key `murphy-oconnor-paul`); the "other two written later on its model" claim removed here and in the `pastoral-letters` contribution. Prior not added (not opened).
2. Fixed. Lutheran row added from the Formula of Concord, Epitome, Rule and Norm 1 and 8 (bookofconcord.org); Pentecostal row added from Assemblies of God Fundamental Truth 1 as quoted in the AG 2015 position paper; the Evangelical row now says the Chicago Statement was drawn up by 200+ evangelical leaders from a variety of denominations (Wikipedia). Lutheran and AG sentences added to the `inspiration-of-scripture` core.
3. Fixed. Catholic row re-cited from CCC 1555-1556 (vatican.va; footnote 35 cites 2 Tim 1:6-7); Anglican row now answers the question from the Episcopal Church's Preface to the Ordination Rites; Lutheran row adds Apology 14.24-25; Reformed row quotes the Second Helvetic Confession 18 (ccel). Baptist row dropped (it answered a different question; no Baptist source on succession was opened). Pentecostal not added (no source opened). `elders` contribution updated.
4. Fixed. Anglican row replaced with the Episcopal Church burial rite's prayers for the departed (bcponline.org); Methodist row replaced with Ask The UMC (2021) and the Book of Worship petition it quotes; Lutheran row now cites Apology 24.94 itself (`apology-augsburg`); the LCMS Reporter remark and its source key were removed (not reopened). Baptist and Pentecostal not added (no source opened).
5. Fixed. 2:2 Plain now "The things you heard from me through many witnesses, entrust to faithful people, ..."; note 31 gives both readings of dia with equal weight and drops "Most readers"; note 32 explains "entrust" and the deposit link; new gloss "entrust"; the paratheke entry in proposals/nt/terms.json records the verb.
6. Fixed (lead decision 1). 1:6 Plain "through the laying on of my hands"; note 10 discusses dia here against meta in 1 Timothy 4:14 (quoting its current Plain); gloss re-anchored.
7. Fixed (lead decision 2). 3:17 Plain "the man of God", matching 1 Timothy 6:11; note 81 says anthropos is the generic word ("the person of God"); deep dive and topic text updated.
8. Fixed. Tregelles moved to the long reading at 1:11 (texts/auto flags Treg+TR+Byz). All other witness lists rechecked against the flags: they agree.
9. Fixed by verification. Opened Tischendorf's 1865 Sinaiticus edition in the Source Library (printed pp. 440-445): every Sinaiticus claim at 1:11, 2:3, 2:7, 2:13, 2:14, 2:19 (κυρίου and πάντας, both changed by a corrector), 3:14, 4:1, 4:10, 4:14 and 4:22 (corrector adds "Jesus Christ" and "Amen") is confirmed. 3:3: ἄστοργοι is absent from Sinaiticus with no corrector note, so note 66 now says "missing in Codex Sinaiticus as Tischendorf prints it" instead of "first hand".
10. Fixed. 4:22 Plain "Grace be with you." (no "all"); note 113 rewritten (no "switch" claim; says 1 Timothy 6:21 and Titus 3:15 also end with a plural, Titus adding "all"); variant 4:22 anchors, book facts, audience and both settings updated. For the lead: 1 Timothy 6:21 has the same Greek (μεθ’ ὑμῶν) and its Plain still reads "with you all".
11. Fixed. Titus 1:11 and 1 Timothy 4:7 quotes now match their current Plain; also fixed a 1 Timothy 1:5 quote ("a good conscience and a faith without pretense"). All 1 Timothy and Titus quotes rechecked by script. Quotes of 2 Peter 1:21, 3:16 and Hebrews 1:2 (notes 64, 77, 78, 79, the chapter 3 deep dive, the inspiration core) are left for the lead's sync once those books exist.
12. Fixed. Note 95 and the `luke` contribution quote Eusebius 2.22.6 exactly ("but at his first defense not even he"; "it is probable that Luke wrote the Acts of the Apostles at that time"). The release and second imprisonment are now presented as what "is said" (book.json, chapter 1, the `paul` topic), with Bruce's remark that Eusebius introduces it with "the story goes". "Bore testimony before the rulers" is now quoted from F. F. Bruce's translation of 1 Clement 5.
13. Fixed. New variants at 1:14 (TR παρακαταθήκην) and 3:16 (Byzantine ἔλεγχον), both checked in Tischendorf; "do not differ" statements narrowed to the key clause (chapter 3 C view, deep dive, note 77, `inspiration-of-scripture`); book.json now says small spelling and word-order differences are not entered (1:17, 2:18, 3:15).
14. Partly accepted. The SBLGNT is the site's base text for the New Testament, so following it at 2:14 is the rule, not an exception (2:13 is the exception). "Evenly matched" is removed and the why now says the support for "God" (NA28, Sinaiticus) is strong.
15. Fixed. The Moses/David/prophets sentence cut.
16. Fixed. 2:5 gloss "get the winner's wreath"; 3:1 gloss "the time before Christ's return, which the New Testament says has already begun".
17. Fixed. 4:17 rebuilt from the literal line with a new clause shape; 1:9 reshaped ("In this he did not go by what we had done, but by his own purpose and grace"); 1:10 "He has made death powerless" (katargeo), with note 18 updated. Fresh drift audit on 1:6, 1:9, 1:10, 2:2, 3:17, 4:17 and 4:22: the remaining overlaps are forced by the Greek or set by lead decisions.
18. Fixed. "Nearly complete"; Vaticanus no longer "one of the two great" Bibles; dates made consistent at AD 90-140 (Wikipedia); Harrison summary corrected from his own text (archive.org copy): the writer "had access to several brief personal notes written by the Apostle", which in 2 Timothy were "added as a sort of appendix or postscript".
19. Fixed. "Yohanah" (Davies) added beside "Yannes" (E. Cook, whose St. Mary's page I opened and confirmed) in note 70 and the topic; aka added. The inference is labeled ("seems to draw on a story his readers knew"). Origen's report and the Chester Beatty and Ethiopic fragments added to the note, a new topic section and the works entry, with a reliability line.
20. Fixed. Every listed claim removed or reworded: note 8 Greek names (cut), note 76 hiera grammata (cut; "almost certainly" now "probably"), note 25 and the `purgatory` topic ("Many interpreters" now "One reading"/"Some readers"), note 42 (no tradition label), note 77 ("Most scholars" cut), note 88 (ship/tent/banquet cut, also in the chapter 4 L view), note 99 (malista cut), note 14 ("Greek Bible" now "New Testament"; the word lists show the verb only in 2 Timothy), chapter 1 T hymn refrain and chapter 4 T funerals cut. Note 64's "most readers" also reworded.
