# Hostile review: James (Jas), flat folder, one part

## Verdict

The translation is sound and the apparatus is mostly honest. I read the Plain English Translation against the SBL/Byzantine Greek and found no mistranslation. I also found no copying of the NIV or ESV, and the quotes of Romans 3:28, 4:2-3 and Hebrews 11:31 match the site's Plain English Translation exactly. `node tools/build.js --check Jas` gives 0 errors and 0 warnings. Most quotations I could reopen were exact (Luther's 1522 preface, the Apology, Dositheus decrees 13 and 15, Wesley on James 2:21, Calvin 3.17.11-12, JDDJ paragraphs 9 and 37, Mishnah Avot only by log). The book still has real problems. Two of the three "Claude's theory" boxes make false claims about originality, one of them demonstrably. The anointing card shows Lutherans and Anglicans only through their 16th-century rejection, which is one-sided. A translation-relevant variant (1:19) is missing, several variant witness lists conflate two variation units, and a number of attributions ("most commentators", "Lutherans are divided", "Protestant churches generally") rest on no opened source, against STYLE.md rule 2. The secondary-sourced items the writer flagged (Ward via IVP, the Assemblies of God via Wikipedia, ECM via Williams) are discussed at the end. Fixable in one pass.

Count: 0 critical, 7 major, 15 minor.

## Findings

### Major

1. **Major. book.json `spec` ("a letter built on Leviticus 19"): the originality claim is false.**
   - The box ends "I know of no published study that makes it."
   - Luke Timothy Johnson, "The Use of Leviticus 19 in the Letter of James," JBL 101 (1982): 391-401, argues that James made deliberate and sustained use of Leviticus 19:12-18. Search results show he pairs Lev 19:12 with Jas 5:12, 19:15 with 2:1 and 2:9, and 19:17b with 5:20. He also treats the passage as a summary of the law's intent. It is reprinted in his *Brother of Jesus, Friend of God* (Eerdmans, 2004). Darian Lockett, CBQ (2020), builds on it.
   - I verified this by web search this session. I could not open the article itself, so the details come from citations.
   - Fix: remove the claim. Either drop the box, or relabel it as an echo of Johnson (1982), which is then not Claude's theory. Johnson's article covers 19:12-18. The writer's extra pairs, 19:13 with 5:4 and 19:16 with 4:11, are the writer's own and could be labeled as an extension.

2. **Major. chapters.json ch. 4 `spec` ("friendship, Abraham and the adulteresses"): "commentators usually treat the two verses separately" is unsupported and probably false.**
   - The title of Johnson's *Brother of Jesus, Friend of God* (2004) already shows that scholar links Abraham as "friend of God" (2:23) with the world-friendship of 4:4.
   - From my own recollection, which I could not confirm in a source I opened, he also has a 1985 essay "Friendship with the World/Friendship with God" in Segovia, ed., *Discipleship in the New Testament*. A search for it returned only sermon material.
   - Fix: delete the sentence "commentators usually treat the two verses separately". Say only that the writer has not checked the literature, or check Johnson and report him.
   - The ch. 1 box (mirror and the face of *genesis*) and the ch. 2 box (Abraham's tent) make no such claim of novelty, only "my own suggestion". Keep them labeled, but see finding 6 on "the usual reading".

3. **Major. 5:14-15 anointing card: Lutheran and Anglican views are shown only as rejection, and Baptist and Methodist views are absent.**
   - The brief asked for "Lutheran and Anglican practice, Reformed and Baptist readings, Pentecostal".
   - The Lutheran cell gives only the Apology (1531) on "rites received from the Fathers". I confirmed that wording is exact, and it appears in the section on the sacraments.
   - The Anglican cell gives only Article 25 against extreme unction as a sacrament. A reader would conclude these churches do not anoint.
   - Common Worship (Church of England) has a rite of "laying on of hands with prayer and anointing" (churchofengland.org, "Wholeness and Healing"). I confirmed that this session.
   - For Lutheran practice I found only secondary mentions (Lutheran Service Book, Pastoral Care Companion; Evangelical Lutheran Worship). I could not confirm them in a primary document. The writer should check the churches' own service books or leave the claim out.
   - Fix:
     - Give each cell the church's current practice as well as its confessional position, from its own books.
     - Add a Baptist cell and a Methodist cell, or say plainly why none was added. The brief asked for a Baptist cell, and the BFM says nothing on it, which is itself worth stating.
     - The Reformed cell is Calvin alone. Add a confession or say it is Calvin's view.
   - Without this the card ranks tradition by omission.

4. **Major. variants.json is missing readings that bear on the Plain English Translation.**
   - **1:19.** Byzantine Ὥστε ("So then") against NA/SBL Ἴστε ("You know this"). The Plain English Translation follows Ἴστε ("You know this, my brothers"), and the KJV's "Wherefore" follows the other. It is in texts/auto and in laparola, and I found no variant entry. It changes the first sentence of the passage.
   - **5:14.** NA28 brackets [αὐτόν] after ἀλείψαντες, and B, P and others omit it (laparola). This is the anointing verse the card is built on, and the Plain English Translation prints "anointed him".
   - **5:11.** εἴδετε ("you saw") against Byzantine ἴδετε ("see"), plus ἐστιν ὁ κύριος. The Plain English Translation rests on the first.
   - **3:5.** The note mentions ὀλίγον but no variant entry exists. The Plain English Translation's "how little a flame" also chooses one sense of ἡλίκον, which deserves a variant or at least a statement in the note.
   - Fix: add entries for 1:19, 5:14 and 5:11, with witnesses from laparola.

5. **Major. The Pentecostal cell and other card claims rest on sources I could not confirm.**
   - The Assemblies of God cell cites "Statement of Fundamental Truths, 12" as "provided for in the atonement", sourced to a Wikipedia summary (`wiki-ag-truths`). The brief wants each view from the church's own document.
   - I tried the AG page and got HTTP 403, and the OCA page returned 404 from my URL. The scratch ag.html and goarch.html do not contain the quoted phrases: "No Scripture instructs a minister…", "leave the results in the hands of the Lord", "express purpose … is healing and forgiveness", "not reserved for the moment of death", "seven priests". I therefore could not reconfirm the Trask and OCA quotes.
   - The writer's log says they were read. Either quote the AG statement itself, or confirm and record the pages. I am not calling the quotes false, only unconfirmed by me.
   - The AG's own statement, which I could not open, may cite James 5:14-16 directly. That would be stronger than the Wikipedia route.
   - The Painter and McKnight quotes in book.json section "The Jewish world of James" are explicitly "as summarized in the Wikipedia article". Wikipedia as a source for what a named scholar says is the pattern rule 2 forbids. Check the books or drop the quotes.

6. **Major. Unsourced attributions presented as fact (STYLE.md rule 2).** Each needs a source opened or the removal of the attribution.
   - book.json canon card: "Lutheran teachers since have differed on how much weight to give his judgment." Chapters.json 2 Lutheran cell: "so Lutherans are divided on how to value the letter." No Lutheran document or teacher is cited.
   - notes: 2:2 "Most commentators take it this way". 2:18 "This is how the Plain English Translation punctuates it, with most modern editions". Laparola's own list shows the editions and translations split both ways on where the quotation ends. 3:6 "as many modern editions do". 5:6 "Most read the verse this way". 5:16 "Catholic and Orthodox teaching connect the verse … Protestant churches generally read".
   - 3:6 reading (3): "The phrase sounds like the Greek religious idea of an endless cycle of births." The writer's own log says an Orphic background was left out as unverified. This is the same claim made unnamed.
   - 1:14: "Many scholars think James is close to this way of thinking." Name them or cut.
   - ch. 2 `views.J`: "The tension with Paul is a tension inside early Jewish Christianity about how Gentiles share in Abraham's family" is stated as fact in a "Jewish reading". Attribute it.
   - ch. 1 box: "the usual reading takes *genesis* simply as natural or from birth". Attribute it, or say "I have not checked".
   - Cards: the Baptist cell's second sentence ("Faith alone justifies; good works are the fruit of the new life") is not in the BFM text quoted. The BFM article 4 has the "gracious and full acquittal" definition, but nothing on James or "faith alone". Say the BFM is silent on James, or use a different Baptist document.

7. **Major. Lutheran/Apology claim in note 2:24.**
   - The note says the Apology "called it the passage most often cited against Reformation teaching".
   - What the Apology says: "From James they cite 2, 24 … Nor is any other passage supposed to be more contrary to our belief." That is "the passage most contrary to our belief as the adversaries suppose", not "most often cited".
   - Fix the wording. The rest of the note, including the 1:18 argument, matches the Apology.

### Minor

8. **Minor. notes.json, 1:2 "brothers".** Typo "fifteen times,." The count itself is right (15 vocative plurals, checked in texts/orig).

9. **Minor. variants.json 4:12.**
   - Laparola lists two separate units. "ὁ νομοθέτης" (with article) is read by ℵ A K L Ψ 33 and the majority; "νομοθέτης" without article by P74 P100 B P and others. "καὶ κριτής" is read by ℵ A B, and the Byzantine omits it.
   - The entry lists Sinaiticus, Alexandrinus, Vaticanus together for "νομοθέτης καὶ κριτής" without the article, and prints NA28 without the article. TAGNT marks NA28 as having ὁ (the auto file shows `[ὁ]`).
   - Re-state the witnesses by unit.

10. **Minor. variants.json 2:19.**
    - The "why" says the article reading "matches the wording of the Shema in Greek". Deut 6:4 and Mark 12:29 read "κύριος … εἷς ἐστιν". The Byzantine order (ὁ θεὸς εἷς ἐστιν) is closer than the chosen one.
    - "The reading with the article is in the oldest manuscripts" also overlooks that B lacks it.
    - Soften, or drop the Shema argument.

11. **Minor. variants.json 5:7.** The "why" sentence "Sinaiticus' 'fruit' takes the farmer's crop as the subject" is unclear. Laparola puts the ℵ* reading in parentheses (uncertain). Reword.

12. **Minor. variants.json 1:17.** The "why" says "All the printed editions keep the reading of most manuscripts". The witnesses for the minority reading match laparola, but "awkward grammar" is a judgment the writer gives no source for. Mark it as such.

13. **Minor. notes.json 5:14 "anointed him with oil".** "The verb *aleipho* is the everyday word … not *chrio*, the word for anointing a king or priest." From my recollection the LXX uses ἀλείφω for priestly anointing in Exod 40:15. I did not check it in an opened text this session. Test it against the Septuagint, or soften. The note itself notes Mark 6:13 as a sign, which weakens the "everyday" contrast.

14. **Minor. Quotations I could not reopen.** The following are in the writer's log as read, but the files are not in scratch. Rule 2 says check them in this session. A fixer should recheck before keeping:
    - Barnes, Ellicott and JFB on 3:6 (e.g. JFB "that is, of the devil"; Barnes "the wheel which is set in motion at birth …").
    - Foord's quotation of LW 35:362 ("epistle of straw"), and the claim that the sentence was dropped after 1537.
    - Trent session 4's list ("one of the apostle James").
    - Josephus *Ant.* 20, and Hegesippus "called the Just by all".
    - Mishnah Avot 2:1.
    - The Anglican Consultative Council (2016) and WCRC association in the JDDJ line.
    - I did reopen and confirm: Luther's 1522 preface (all four quoted lines), the Apology, Calvin 3.17, Wesley, Dositheus 13 and 15, JDDJ 9 and 37.

15. **Minor. sources.json `luther-preface-james`.** It gives LW 35 as "(1960), pp. 395-397". The bible-researcher page the writer cites says "Concordia, 1963, pp. 395-399". The preface to James and Jude runs past 397. Correct the date and pages to what the opened page says.

16. **Minor. Anglican cell.** The text prints "We are justified by Faith only" as a quotation. Article 11 reads "that we are justified by Faith only". Either quote the real wording or drop the quotation marks.

17. **Minor. Plain English Translation 4:14 "a puff of steam".** ἀτμίς means vapor, mist or smoke (the note says "steam or smoke"). "Steam" is the narrowest of these. Consider "a puff of mist" or "vapor", or justify "steam".

18. **Minor. Audience cards.** Every section repeats "most likely Jewish believers … many of them poor laborers and tenants" as the working premise. The debate (diaspora Jews, the whole church) appears only at 1:1. For 2:14-26 and 3:1-18 a one-line "if the readers are all Christians" would be fairer. The 5:1-6 setting says "the letter's real hearers are the poor believers" as fact.

19. **Minor. Unsourced social-history generalizations.**
    - 2:6: "a wealthy man could bring a poor debtor … and the poor man had little hope".
    - 4:13: "many of them Jews of the Dispersion".
    - 3:1: "a teacher, like a rabbi, was respected and often supported".
    - 5:16: "the Council of Trent read 5:14-15 as the sacrament of anointing, which forgives sins" is fine, but pair it with the chapter's source keys.
    - How long the letter takes to read ("about fifteen minutes", book.json).
    - Source them or hedge in the voice of the text, e.g. "likely".

20. **Minor. ECM/NA28 claims.**
    - The Williams review supports "NA28 follows the second edition of the ECM in the Catholic Letters, and ECM is available only for these books".
    - The book's individual NA28 readings (5:4, 4:12, 5:14) come from TAGNT edition marks, not the printed NA28 or the ECM. State that in the entry, as the log does.
    - The 5:4 entry's "NA28, which takes its text of James from the ECM, prints 'defrauded'" is therefore an inference from a word list. The TAGNT mark (N) does support it, and laparola's "NA" is NA27. I accept it, but add "per the TAGNT edition marks".

21. **Minor. ch. 2 deep dive (Orthodox).** The Orthodox cell on justification is the 1672 Dositheus Confession only. It is a genuine Orthodox document, but it is regional and 17th century. Say so ("Synod of Jerusalem, 1672") in the cell, or add a contemporary teacher. The anointing card already ties Dositheus to the OCA, which is good.

22. **Minor. notes 2:21 and 2:24 (Trent).** The citations are accurate (session 6, ch. 10, canon 9). Add "Waterworth translation" or whichever the writer used so a reader can match the wording.

## Checked and found sound

- 1:1 "slave", "the Dispersion" gloss, the three audience views.
- The key-term list: δίψυχος, "complete" for τέλειος with the "perfect" note, "the Lord of Armies" (matches Romans 9:29), "prayed earnestly".
- The Proverbs 3:34 and 10:12 pairs with 1 Peter, and the Matthew quotes.
- The 2:14-26 card is genuinely unranked. The "James against Paul" reading is given its strongest form, and it also gives a Jewish reading and Wesley's.
- 2:11 order of adultery and murder (Vaticanus LXX confirmed in the log).
- The Matthew 5:34 oath card exists (`vows` in content/books/Mat/parts/05-07).
- The Heb 11:31 quote matches the site's Plain English Translation.
- Settings are present for every section (1:1, 1:2-18, 1:19-27, 2:1-13, 2:14-26, 3:1-12, 3:13-18, 4:1-12, 4:13-17, 5:1-6, 5:7-12, 5:13-20).

## Fixes applied

Fixer, 2026-10-29. Sources opened this session are listed in `.scratch/Jas-fix/` (downloads in `dl/`, extracted text beside them). No Plain English Translation verse changed; James 4:6 and 5:20 untouched.

1. Accepted, and went further than the review. Mark E. Taylor (SWJT 64.1, 2021), opened this session, quotes Johnson's conclusion and lists his pairs: Lev 19:12/Jas 5:12, 19:13/5:4, 19:15/2:1, 9, 19:16/4:11, 19:17b/5:20. So 19:13 and 19:16 are Johnson's too, not the writer's, and nothing in the box was Claude's own. Removed the spec box. Johnson's argument is now stated and attributed in book.json "The Jewish world of James" (sources `taylor-ot-james`).
2. Accepted. Deleted "commentators usually treat the two verses separately". The ch. 4 box now says that Johnson has written on friendship with the world against friendship with God (*Brother of Jesus, Friend of God*, 2004; Steele's review, opened) and names what the box adds (`steele-review-johnson` in book sources). I could not open the essay itself, so the box claims nothing about its treatment of 2:23.
3. Accepted. Anointing card rebuilt from documents opened this session:
   - Lutheran: the Apology, plus WELS "Anointing with oil".
   - Reformed: Calvin 4.19.18-21, rechecked on CCEL, plus the PC(USA) Directory for Worship quoted on pcusa.org.
   - Anglican: Article 25, plus Common Worship "Wholeness and Healing", with quotes from the rite.
   - Methodist (new): the British Methodist Worship Book healing service.
   - Baptist (new): the BFM 2000 names two ordinances and is silent on anointing.
   - Pentecostal: see 5.
   - Left out: ELCA and LCMS practice and the UMC Book of Worship. No primary text could be opened (UMC pages return 404).
4. Accepted. Added variants at 1:19 (ἴστε / ἴστε δέ / ὥστε), 3:5 (ἡλίκον / ὀλίγον), 5:11 (εἴδετε / ἴδετε; ὁ κύριος, as two separate entries) and 5:14 ([αὐτόν]), with witnesses from laparola and edition marks from the TAGNT word list. The 3:5 and 5:14 notes now point to them.
5. Accepted.
   - Trask quotes reconfirmed in the AG PDF. The Pentecostal cell now cites only Trask, including his "Divine healing was provided for in the Atonement". `wiki-ag-truths` dropped, because ag.org returned 403.
   - OCA quotes reconfirmed on oca.org (fetched 200).
   - Painter and McKnight quotes, which came through Wikipedia, removed.
   - Also removed McCartney's view in the authorship card, which had the same Wikipedia-only origin.
6. Accepted. Changes:
   - Removed "Lutheran teachers since have differed" (canon card) and "Lutherans are divided" (ch. 2 card).
   - Notes 2:2, 5:6 and 1:14: "most/many" attributions cut or reworded.
   - Note 2:18 now says the editions and translations differ on where the quotation ends (laparola).
   - Note 3:6: "many modern editions" reworded, and reading (3), the cycle of births, removed.
   - Note 5:16 rebuilt on Trent 14 ch. 2, Calvin 3.4.6 and Dositheus 15, each reopened. Deep dive: "Many Protestant churches" cut.
   - ch. 2 Jewish reading: tension with Paul framed as that reading's view.
   - ch. 1 box: "usual reading" replaced with the KJV's "natural face". ch. 2 box: "usual view" softened as well.
   - Baptist cell: the second sentence replaced with what BFM IV says, including that it lists James 2:14-26 among its proof texts.
7. Accepted. Note 2:24 now quotes the Apology: "Nor is any other passage supposed to be more contrary to our belief".
8. Accepted. Typo fixed.
9. Accepted. 4:12 is now restated by unit. The entry covers "and Judge" (ℵ A B and most against Byz/TR). The why gives the article as a separate unit, with its own witnesses and NA28's brackets.
10. Accepted. Dropped the Shema-wording argument and the "oldest manuscripts" claim. The why now names P74, ℵ and A, and gives Vaticanus' order.
11. Accepted. The "fruit" witnesses are restated: ℵ² (the first hand in parentheses in the apparatus), 255, 398, 1175, it-ff, syr-h mg, cop-bo in part. The why is reworded.
12. Accepted. "Awkward grammar" is now marked as this site's judgment, and "all printed editions" is narrowed to the editions in the word list.
13. Accepted. Swete's LXX uses ἀλείφω for priests (Num 3:3 "the anointed priests"; Exod 40 in Swete's numbering), so the aleipho/chrio contrast was false. The note now gives the WELS medicinal reading and the counter-evidence. The 5:14 H view is softened to "used on wounds".
14. Accepted. Each item reopened this session:
    - Barnes, Ellicott and JFB on 3:6 (Bible Hub copy).
    - Foord (Themelios), including the removal after 1537.
    - Trent session 4.
    - Eusebius 2.23 for Hegesippus and Josephus.
    - Avot 2:1 (Sefaria).
    - The Methodist JDDJ page for the ACC 2016 and WCRC. The ACC wording is now quoted: "welcomed and affirmed the substance".
    - All confirmed. The Luther preface lines were rechecked too.
15. Accepted. `luther-preface-james` now reads Concordia 1963, pp. 395-399, as on bible-researcher.com.
16. Accepted. The Anglican cell quotes Article 11 exactly.
17. Partly accepted. The Plain English Translation keeps "a puff of steam", because "mist" would sit on the NIV/ESV wording. The note now gives the range of ἀτμίς (vapor, steam, mist, haze of smoke; Acts 2:19) and says why the Plain English Translation chose "steam".
18. Accepted. The repeated "to" line now gives both readings of the twelve tribes and drops "laborers and tenants". The 5:1-6 setting is no longer stated as fact: "real hearers" is gone, and the "why" is conditional.
19. Accepted.
    - 2:6: courts generalization removed and replaced with Acts 16:19.
    - 4:13: "many of them Jews of the Dispersion" replaced with Acts 18:2-3, here and in the ch. 4 H view.
    - 3:1: rabbi claim removed.
    - 5:16: Trent keys added.
    - Reading time: tied to the Plain English Translation's word count (about 2,500).
20. Accepted. Added source `stepbible-tagnt`. The 5:4 why now says the NA28 reading comes from the word list's edition marks, and the new entries cite it.
21. Accepted. The Orthodox cell now calls Dositheus a seventeenth-century confession adopted by a regional council.
22. Partly accepted. papalencyclicals.net does not name its translator, so I did not add "Waterworth". Added `trent-english`, the English translation printed at papalencyclicals.net, to the Trent citations so readers can match the wording.
