# Hostile review: 2 Peter (2Pe)

Reviewer: hostile-reviewer, 2026-10-29. Checked: plain.txt against `texts/orig/2Pe.json` and `texts/auto/2Pe.json` (word by word, all 61 verses), Jude's published Plain English Translation, notes (82), variants (21), glosses (30), chapters (3), book.json, topics (25), sources, and `node tools/build.js --check 2Pe` (0 errors, 0 warnings; confirmed). Web checks are marked "verified" (opened now) or "not verified".

## Verdict

This is a careful, mostly honest book. The translation is accurate and the Jude alignment is good. The authorship question is given real weight on both sides. The structural weaknesses are these:

1. One real text-critical omission: NA28's change at 3:6 is missing, though the project's own auto data flags it.
2. Several flat claims about what churches or scholars hold, with no source. They are memory-sourced, which STYLE.md rule 2 forbids.
3. Several secondary or weak sources. OrthodoxWiki is the Orthodox voice on the theosis card. Bauckham, Kelly and Neyrey are cited at second hand.
4. Two glosses, the 3:4 and 3:10 ones, settle debates that the notes say are open.
5. The 1:20 card has no Orthodox or Lutheran voice. A source can fill the Lutheran gap (see #3); I did not open an Orthodox source.

There is no invented source and no NIV/ESV copying that I found. Nothing is critical. Several items are major and should be fixed before publishing.

## Findings

### Major

**1. Missing variant at 3:6 (NA28 changed the text).** variants.json has no 3:6 entry.
- `texts/auto/2Pe.json` says: "3:6 word 2 ὧν in NA27+Tyn+SBL+WH+Treg+TR+Byz | ὃν (O=hon) in NA28".
- NA28 therefore reads δι᾿ ὃν (singular: "through/because of which", most naturally the word), where every other edition has δι᾿ ὧν (plural: "through which things / these waters").
- plain.txt 3:6 ("Through these") follows ὧν, against NA28. The writer's stated rule is to follow NA28 where the editions divide in the Catholic Letters. The note on 3:6 also treats only the plural reading.
- Verified in part. NA28's Catholic Letters text is the ECM text (web search). One secondary translation note (OET) says the ECM/NA28 "which" is singular, "likely referring only to the word". I could not open the NA28 apparatus.
- Fix: add a 3:6 variant entry (ὧν / ὃν, with witnesses checked against an opened apparatus). Say what the Plain English Translation follows and why, and align the Plain English Translation and the note with that choice. If ὧν stays, say why it departs from NA28, as the entry for 3:10 does.

**2. 3:7 (αὐτῷ / αὐτοῦ), 3:11 and 1:17 variants are missing or incomplete.**
- 3:7: auto data shows "the same word" (NA, Tyn, SBL, WH, KJV) against "his word" (Treg, TR, Byz). There is no entry.
- 3:11: οὕτως (NA28, NA27, SBL, WH) against οὖν (Tyn, Treg, TR, Byz), plus the bracketed [ὑμᾶς]. The brief listed 3:11 explicitly, and the writer's own log records Byz/TR readings there, yet there is no entry.
- 1:17: auto data shows the second μου ("my beloved ... my") only in NA28, NA27, SBL and WH. Tyndale House lacks it. The 1:17 entry omits the Tyndale reading, and the note says "'my' twice" as if that were the whole critical text.
- 3:3: NA28 and NA27 bracket [ἐν] (auto: "ἡμερῶν [ἐν] ἐμπαιγμονῇ"). The entry does not say so.
- Fix: add or complete these entries.

**3. The 1:20 card lacks Lutheran and Orthodox views. A source can fill the Lutheran gap.**
- The card has Catholic, Reformed and Methodist entries only. Lutherans and Orthodox both have documented positions.
- Lutheran: Formula of Concord, Epitome, "Summary Content, Rule and Norm". The prophetic and apostolic writings alone are the "sole rule and norm", and other writings are only a testimony. I verified this in a search result (Concordia Publishing House, Book of Concord, Epitome). I did not open the page text. The Luther phrase "Scripture interprets itself" (sui ipsius interpres) came back as unverified, so do not use it unless it is checked.
- Orthodox: I did not open a source. Candidates are the Synod of Jerusalem (1672, Dositheus), Decree 2 (my fetch of one URL returned 404), or Vincent of Lérins, *Commonitory* 2. Open one before writing the entry. Leave the Orthodox voice out if it cannot be checked.
- Also in this card:
  - The Catholic entry cites DV 11 for inspiration and DV 10 for interpretation. That answers a neighbouring question, not what the Church does with 1:20. Add a Catholic text that deals with interpretation (for example DV 12, or the Trent decree of session 4).
  - The Reformed entry omits that WCF 1.9's own proof texts cite 2 Peter 1:20-21 (from the standard proof-text list, not opened now). That is the direct hook.
- Fix: add Lutheran (and Orthodox only if verified). Redo the Catholic entry. Add an "Anglican" or "Baptist" line only if sourced.

**4. Unsourced attribution of views to whole traditions (STYLE.md rule 2).** These are claims about what churches hold, with no document behind them:
- 2:1 note: "Arminian, Wesleyan, Lutheran, Catholic and Orthodox readers see that here"; Reformed readers answer "bought as God bought Israel (Deut 32:6)". No named theologian or document. Also, the limited-atonement debate is not an Orthodox one.
- 2:21 note: "(Catholic, Orthodox, Wesleyan ...)" read a real fall; "(Reformed and many Baptist readers)" read it as never truly born again. Unsourced, and it leaves Lutherans out.
- 3:9 note: "most Christian traditions read it so", and "(many Reformed readers)" for the elect reading. Verified: the NET note on 3:9 (fn 25) does lay out Arminian against Calvinist readings and takes "any of you". But Calvin himself (via forum quotes of his commentary; not verified in the CCEL text) reads it of God's love for all, with the hidden counsel of election alongside. The note should cite a named Reformed commentator, not "many Reformed readers".
- 1:10 note: "Christians who hold that a true believer cannot finally fall away tend to read the verse the first way".
- 3:10 deep dive: "The churches have not formally divided over this question; Christians in every tradition hold each of these views." This is a negative claim about all churches. It is sourced to nothing, and the brief said to check it before declining the new-creation card.
- Fix: for each, add one named source (a confession, catechism or theologian) or reduce the sentence to what the opened sources show.

**5. "Earliest" claims about 3:16 are overstated and contradict the note's own cross-reference.**
- The 3:16 note says "this is the earliest place where a New Testament writing counts other Christian writings as Scripture".
- The topics `canon` and `paul` say "the first place" / "the earliest place".
- The note's own `r` list includes 1 Timothy 5:18, which many read as calling Luke 10:7 "Scripture". It depends on how 1 Timothy and 2 Peter are dated, which the book itself calls disputed.
- Fix: use "the only place a New Testament letter explicitly puts Paul's letters with 'the other Scriptures'", or give the date caveat.

**6. Glosses decide questions the notes say are open.**
- glosses.json 3:4: "the fathers fell asleep" = "the first generation died". The note and the setting give the ancestors-of-Israel reading as a live option, and say that defenders of Peter take it.
- glosses.json 3:10: "will be found" = "will be brought into the open before God". This is one of the three readings (Bauckham's). It leaves out Wolters's refining and the other readings in the deep dive.
- glosses.json 1:4: "sharers in the divine nature" = "partners in God's own life". This leans Orthodox and Catholic. Calvin's reading ("quality, not essence") is the one the note cites against it.
- Fix: neutral glosses ("probably the first generation of Christians; see the note"), or none.

**7. Bare "will be found" in the Plain English Translation at 3:10.**
- The Plain English Translation follows εὑρεθήσεται, against NA28's οὐχ εὑρεθήσεται. The reasoning in the variant entry is sound and the NET note supports it (opened).
- Left bare, the sentence ("the earth and the works in it will be found") reads as nonsense at the 8th-grade level, except for the gloss.
- Fix: keep the reading but make the English carry the reader (for example "will be found out") only if the Greek allows, or at least cross-link the gloss and note from the verse, and state in the book's reading notes that the Plain English Translation departs from NA28 here. Do not revert to "burned up".

**8. The theosis card's Orthodox and Lutheran voices are weak sources.**
- The Orthodox entry quotes OrthodoxWiki: "OrthodoxWiki puts it simply". It is a user-edited wiki, not a church document. Athanasius is a real source, but the card needs a recognised Orthodox teacher or text for the essence/energies point ("without becoming God by nature"). Candidates were not opened.
- The Lutheran entry quotes a review at crossings.org (not the Finnish authors) and says "other Lutheran scholars keep the traditional stress on justification ... wary of the language of deification" with no name or document. The confessional counterpart, Formula of Concord Solid Declaration III on Osiander's "essential righteousness", is not mentioned (I did not open it, so I only point to it).
- Fix: replace the wiki with a named Orthodox teacher or document. Name at least one Lutheran who is wary, or cut that sentence.

### Minor

**9. Secondary or unseen sources behind direct claims (rule 2).**
- 1 Enoch 20:2 (note on 2:4, topic `fallen-angels`): "in the Greek of 1 Enoch 20:2". The writer's log says "Greek not seen" (the English was from pseudepigrapha.com). Reword to "in the English translation of the Greek text" or open the Greek.
- Bauckham quotation "the pseudepigraphal device is therefore not a fraudulent means ...": verified as a quotation of WBC p. 161 in several secondary pages (including the JETS 1999 article), not in the commentary. Bauckham's date AD 80-90 came via a page that cites p. 158. Book.json says Kruger "quotes" Kelly, which is honest and checks out: Kruger's opening sentence is Kelly's "scarcely anyone nowadays doubts" (verified via galaxie.com's abstract page). Add "(as quoted in ...)" to the Bauckham quotation too.
- Neyrey's argument is known to the writer only through reviews (Davids via a *Scriptura* review; the deSilva transcript). The 2:19, 3:4 and audience statements attribute it to Neyrey flatly. Fine if marked "as reported by".
- Kruger "too incomplete and insufficient to warrant the dogmatic conclusions": verified now on the galaxie.com page (not in the writer's log; the log has only "no reason to doubt"). The writer's log should be updated.
- Davids: "saying that historical investigation cannot decide it" (book.json "Between the two") is not in the log. The log has only "leaves authorship open". Not verified; cut or verify.

**10. Unverified assertions.**
- Sibylline Oracles 1: "and they mock him as a madman" (2:5 note). Verified: Noah is told to preach repentance. Not verified: any mockery. Cut "mock him as a madman".
- Note 2:6: "*Tephroō* was also used of the ash covering of a volcano". No source. Cut or source.
- 3:10 note: Greek writers "also called [heavenly bodies] *stoicheia*", and "(many modern commentators)" for the physical-elements reading. No source.
- 2:19: "a proverb known in Greek and Jewish moral teaching", with no source.
- 2:5: "Some early Christian writers saw a symbol in the number [eight]". Name one (for example Barnabas 15 or Justin) or cut.
- 1:19: "Most modern commentators read it this way."
- 2:4: "Most scholars think 2 Peter was more cautious about books outside Scripture" (also repeated at 2:11).
- 2:15: "Every printed Greek edition of 2 Peter has Bosor." The texts/orig data agrees with the editions it holds. But the brief listed a Bosor/Beor variant, and Thayer (opened at biblehub 1007) refers to the LXX "Beor" and a Beor spelling in WH. The apparatus (NA28/ECM) was not opened. Say "the critical editions I checked", or check the apparatus. Also Thayer's entry is cited with a source key (`thayer-lexicon`) whose description (1 Timothy) covers other entries, not Bosor.
- 3:9: "The card on 1 Timothy 2:4 sets out how the churches answer." Confirm the card exists before linking it.

**11. Source key descriptions do not cover the use.**
- `calvin-catholic-epistles` is defined in 1Jn as "on 1 John 1:9, 2:2, 3:9 and 5:16", but 2Pe uses it for 2 Peter 1:4 and the Argument.
- `thayer-lexicon` (1Ti) lists only entries 1783 and 2691.
- Both keys live in 1Jn/1Ti folders being written or edited in parallel. Add 2 Peter to their descriptions when merging, or add 2Pe-local keys.

**12. Same English for different Greek against the Jude alignment rule.**
- σειραῖς (2:4) and Jude's δεσμοῖς (1:6) are both "chains". The note in `variants.json` explains the pits/chains difference but the Plain English Translation does not show that the two words differ.
- Fix: add a short sentence to the 2:4 echo note, or choose "ropes/cords" only if that is justifiable. Keep as is if the note says so.
- Otherwise the Jude alignment is good. I confirmed identical English where the Greek matches: "slander the glorious ones", "animals that cannot think", "feast with you", "puffed-up words", "gloom of darkness has been kept", "the words spoken beforehand by", "mockers who live by", "handed down", "shameless self-indulgence", "disown ... Master". Different English where the Greek differs ("slipped in" / "sneak in", "set aside" / "look down on", "sunken rocks" / "stains and flaws", "clouds" / "mists").

**13. Translation points (minor).**
- 2:9 "to be punished" turns the present participle κολαζομένους ("being punished") into a purpose clause, which settles reading (2) of its own note. A neutral English such as "keep the unrighteous under punishment until the day of judgment" would keep both.
- 2:12 "in the animals' destruction" resolves αὐτῶν to the animals. The note says the Greek may mean the teachers' own destruction. Consider "in their destruction" with the note.
- 1:19 "is all the more firm for us" commits to reading (1) of the note. 1:20 "comes into being" commits to the origin sense of γίνεται. Both are defensible and each is noted; flag them in the notes as the Plain English Translation's choice.
- 1:5 and 1:8 prepositions: ἐν τῇ πίστει is "in" (kept); εἰς τὴν ... ἐπίγνωσιν in 1:8 is "toward, for", and the Plain English Translation's "in the knowledge" softens it. Minor.
- 3:2 "the commandment your apostles passed on from the Lord and Savior": "passed on" is supplied. Fine, but the note should say the Greek is a bare genitive chain.
- 3:16 Plain English Translation "will twist these, as they also twist ...": NA28's future with "as they also twist" reads oddly in English. The variant entry covers it; consider "twist these" in the Plain English Translation, or keep the future and add a short note.
- 1:1 "were given a faith": λαχοῦσιν is allotted by lot. Covered in the note.

**14. Smaller note/format problems.**
- Note 1:1 (isotimos): the text `...equal in honor.""Received"...` has a missing space between sentences.
- Note 2:13 (stains): "The same pair returns, reversed, in 3:14". The order is the same (ἄσπιλοι καὶ ἀμώμητοι are in the same order as σπίλοι καὶ μῶμοι); it is the sense that is reversed. Reword.
- Note 3:15 (1): "by the 60s they were colleagues" is the writer's inference, not a sourced fact.
- Chapter 2 "C" view: "the strongest single argument" for date and authorship is an opinion; attribute it ("many scholars") or drop "single".
- The topic `second-coming`: "the first recorded mockery of Christ's return" is an unverifiable superlative.
- Chapter 1 settings' 1:3-11 `to`: "who were cleansed from their old sins" assumes the baptism reading of 1:9, which the note presents as "many commentators".

### Checked and fine
- Authorship and canon: both sides stated at full weight, majority labelled as majority. Quotes verified now or against the writer's logged openings: Kelly via Kruger, Kruger's last line, Calvin (per log), Jerome (per log), Eusebius HE 3.3 and 6.25 (per log), Athanasius 367. Calvin's "I do not here recognize the language of Peter" matches the log (not reopened by me).
- 3:10 variant and ECM claims: the Greek readings and witnesses match `texts/auto` (NA28 οὐχ only; εὑρεθήσεται in NA27, SBL, Tyn, WH, Treg). The statement that no Greek manuscript has "will not be found" is supported by the log's Hixson summary. I did not reopen Hixson. The NET notes on 2:13 (wordplay hard to put in English) and 3:9 (Arminian/Calvinist debate) were verified now.
- No NIV/ESV text reproduced. A spot check of 1:3, 1:17, 2:1, 3:15 and 3:18 against the drift audit finds no long runs.
- The build check passes with 0 errors and 0 warnings.
- Settings exist for the greeting, farewell, voice, prediction, examples, portrait, mockers, mockers' saying, day of the Lord and closing. The audience card hedges the readers and 3:1 correctly.

## Counts
- Critical: 0
- Major: 8 (#1-#8)
- Minor: 6 groups (#9-#14), about 30 separate items

## Fixes applied

Fixer, 2026-10-29. Sources opened this session: texts/orig and texts/auto (2Pe, Jud); NET note on 3:6 (biblia.com); Open English Translation textual notes on 2 Peter 3 (freely-given.org); Formula of Concord Epitome "Rule and Norm" and Solid Declaration 3 (bookofconcord.org); Confession of Dositheus, Decree 2 (crivoice.org); Dei Verbum 10-12 (vatican.va); Westminster Confession 1.9-1.10 with proof texts (apuritansmind.com); Calvin on 2 Peter (CCEL text); Wesley's Notes on 2 Peter (CCEL text); Owen, Death of Death, book 4 (CCEL text); Lossky, "Essences and Energies" (myriobiblos.gr); Justin, Dialogue 138 (newadvent.org); Thayer 1007, 4577, 4747 (biblehub.com); deSilva lecture 1 transcript (biblicalelearning.org); Baasland's review of Davids, Scriptura 99 (2008); Van Neste, "Authorship" (pastoralepistles.com); 1 Enoch 20:2 English (intertextual.bible). Not openable: the NA28/ECM apparatus, Neyrey's JBL article, Kruger's JETS PDF.

1. Accepted. New 3:6 variant (ὧν, every other edition / ὅν, NA28), editions from texts/orig. The Plain English Translation keeps "Through these" with the other editions: the plural is the harder reading and I could not open the evidence for the singular. The why says so, the 3:6 note now gives the NET's antecedent options and the NA28 singular, and a new book.json section ("The Greek text behind the Plain English Translation") names both departures from NA28 (3:6, 3:10). Witnesses are editions only, because no apparatus could be opened.
2. Accepted. New 3:7 (αὐτῷ / αὐτοῦ) and 3:11 (οὕτως / οὖν, with the bracketed ὑμᾶς in b) entries. 1:17 has a third reading (Tyndale House GNT and Tregelles without the second μου), and note 1:17 now says "my" twice in NA28/SBLGNT, once in THGNT. 3:3 shows the bracketed [ἐν] in NA28/NA27.
3. Accepted. 1:20 card: Catholic redone with DV 12 ("in the sacred spirit in which it was written", "living tradition of the whole Church", "subject finally to the judgment of the Church") plus DV 10. Reformed now cites WCF 1.9's proof text 2 Peter 1:20-21 (opened). Lutheran added (Formula of Concord, Epitome, Rule and Norm). Orthodox added (Confession of Dositheus, Decree 2). No Anglican or Baptist entry, since none was sourced.
4. Accepted. Each claim now names a source opened this session, or the wording is cut back to what one shows. 1:10: Calvin ("evidence and proof of election") against Wesley ("ye shall never finally fall"). 2:1: Wesley ("Christ bought even them that perish") against Owen (despotes may be the Father, "bought" may be a deliverance as at Deuteronomy 7:8 and 15:15, "according to their apprehension and their profession"), plus Calvin's own plain reading; Deuteronomy 32:6 and the church labels are gone. 2:21: Wesley ("made shipwreck of the faith") against Calvin ("do not fall away from the grace of God") and Owen ("only common gifts"). 3:9: Wesley and Calvin (God's revealed will toward all, "hidden purpose" aside) against Owen ("any of us"); "most traditions" and "many Reformed readers" are gone. 3:10 deep dive: the negative claim about all churches is cut. Topic perseverance: the same named voices.
5. Accepted. Note 3:16, topic canon and topic paul now say "the only place where a New Testament letter explicitly puts Paul's letters with 'the other Scriptures'", with 1 Timothy 5:18 and the dating caveat.
6. Accepted. New glosses: 1:4 "having a real share in what God is; how far that goes is debated (see the note)"; 3:4 "the ancestors died (Israel's forefathers, or the first Christians: see the note)"; 3:10 now on "lie exposed": literally "will be found".
7. Accepted, by the lead's decision. Plain English Translation 3:10 now reads "will lie exposed" (εὑρεθήσεται kept). I did not use "laid bare": "the earth and the works in it will be laid bare" shares a six-word run with the NIV. A new word note on "the earth and the works in it" gives the literal "will be found" and ties it to "be found by him" in 3:14 and to Wolters's reading. The variant's why now says plainly that NA28 and the ECM print the conjecture "will not be found". Also updated: the 3:14 note, the chapter 3 L view, the deep dive, the spec box, and topics day-of-the-lord and new-creation.
8. Accepted. OrthodoxWiki is replaced by Vladimir Lossky, Mystical Theology, "Essences and Energies" (the key `lossky-mystical`, with quotations), in the card, note 1:4 and topic theosis, and the `orthodoxwiki-theosis` key is removed. The unnamed "wary Lutheran scholars" are replaced by the Formula of Concord, Solid Declaration 3 (it rejects "God's essential righteousness" as the righteousness of faith; the indwelling "follows the preceding righteousness of faith").
9. Accepted. 1 Enoch 20:2 is no longer called "Greek", in note 2:4, topic fallen-angels and the book section. The Bauckham quotation now reads "as quoted by Ray Van Neste" (new key `vanneste-authorship`, opened) in book.json and the chapter 1 deep. The Neyrey attributions now run through sources opened this session: Baasland's review says Davids follows Neyrey (new key `baasland-davids-review`), and deSilva says "the majority of scholars". This covers notes 2:19 and 3:4, the chapter 2 deep and the audience; the unused `neyrey-2pet-polemic` key is dropped. The Davids sentence now quotes the review's quotation of p. 49 ("cannot know from historical investigation"). Kruger's phrase is left as it was (the reviewer verified it).
10. Accepted. These are cut: the Sibylline "madman" and the claim that Noah was mocked; the tephroō volcano; "known in Greek and Jewish moral teaching"; "Most modern commentators" (1:19); "Most scholars ... cautious" (2:4, 2:11), now worded as a possibility. 2:5 now names Justin, Dialogue 138 ("a symbol of the eighth day"). Stoicheia (3:10 note and topic) now follows Thayer 4747: the physical elements for these verses, and the heavenly bodies in early Christian writers such as Justin. 2:15: Thayer 1007 says Westcott and Hort printed Βεωρ, so the note and topic balaam now say "most editions"; this is a note, not a variant entry, because no manuscript could be named. I confirmed that the 1 Timothy 2:4 and Hebrews 6:4-6 cards exist.
11. Accepted. New 2Pe keys `calvin-2peter` and `thayer-2pe` replace `calvin-catholic-epistles` and `thayer-lexicon` throughout 2Pe. 1Jn and 1Ti are untouched.
12. Accepted. Note 2:4 (angels) now gives Jude's δεσμοῖς "bonds" against σειραῖς "a line, a rope / a chain" (Thayer 4577), and says the Plain English Translation uses "chains" for both.
13. Partly accepted.
    - 2:12: Plain English Translation now "in their destruction", and the note explains it.
    - 2:9: Plain English Translation kept. The note now says "to be punished" follows reading (2) and that the Greek has "being punished".
    - 1:19 and 1:20: the notes now say which reading the Plain English Translation follows.
    - 3:2: the note now explains the bare genitive chain.
    - 1:8: declined. Here εἰς marks the sphere ("with regard to"), which "in" carries; "toward" would read as motion.
    - 3:16: declined. The future is kept (NA28), and the note and variant already explain it.
    - 1:1: already covered, as the reviewer said.
14. Accepted. Fixed: the missing space in note 1:1; "reversed" in note 2:13 and the chapter 2 L view (now "same words, same order, sense turned around"). Note 3:15's "by the 60s" is now conditional on Peter writing near his death. The chapter 2 C view no longer says "strongest single argument". Topic second-coming no longer says "first recorded". The chapter 1 setting for 1:3-11 now reads "who, the letter says, had been cleansed ... (1:9)".

Plain English Translation verses changed: 2:12, 3:10. Check: VERBOSE=1 --check 2Pe gives 0 errors, 0 warnings (61 verses, 83 notes, 24 variants, 30 glosses).
For the lead: content/books/Rev/topics.json (from revelation/v2/src/topics1.js) quotes 2 Peter 3:10 as "the earth and the works in it will be found". It now needs the overlay ("will lie exposed"). No other book quotes 2:12 or 3:10.
