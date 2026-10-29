# Hostile review: 2 Thessalonians (2Th), one part, flat folder

Reviewer: hostile-reviewer, 2026-10-29. `node tools/build.js --check 2Th`: 0 errors, 0 warnings (47 verses, 70 notes, 11 variants, 23 glosses, 3 chapters).

## Verdict

A careful, mostly honest book. The Plain is independent of the NIV and ESV (I compared verse by verse against the Greek in my head and found no copying; the nearest overlaps are the structure of 1:10, 2:2 and 2:13, all short and defensible). The authorship debate is given real space on both sides, the quoted Old Testament and Gospel Plains match the site's own (John 17:12, 1 Cor 16:21, Daniel 11:36-37, Isaiah 2:10 and 11:4, Ezekiel 28:2 all checked against the files), and no source, fragment or manuscript is invented. The problems are these. (a) Several flat factual claims are made from memory and at least one is wrong (note 56, hypomone). (b) Three of the five traditions cards are lopsided: the rapture card does not show a real divergence between traditions, the gehenna card omits Orthodox and Lutheran, and the church-discipline card omits Catholic and Orthodox. (c) The book states Pauline authorship as settled in places, and overstates how evenly scholars are split in the lead. (d) Two key terms are rendered inconsistently inside the Bible (olethros, energeia). (e) The headline variant at 2:13 is argued with a reason that its own note undercuts. (f) About a dozen "most commentators" or "many scholars" claims have no named scholar. None of this is fabrication, but 9 findings need fixes before publishing.

What I verified this session, and where:
- Augustine, City of God 20.19 (newadvent.org/fathers/120120.htm): "Some think that the Apostle Paul referred to the Roman empire"; "not absurd"; "I frankly confess I do not know what he means"; "uncertain in what temple he shall sit", with the ruined Solomonic temple or "the Church" as the options. The book's quotes are right.
- Dei Verbum 8, 9, 10 (vatican.va): the 2:15 quotation reads "have learned", the "not from Sacred Scripture alone" and "not above the word of God, but serves it" quotes are right.
- Westminster 25.6 history (opc.org/preface.html): the 1788 PCUSA revision did NOT touch 25.6; the 1903 PCUSA rewrite removed the pope-as-Antichrist identification; the OPC (1936) restored the pre-1903 text but kept that removal. The content's "later American Presbyterian revisions removed it" is therefore safe. The writer's scratch note about a 1789 date (Crossway) is not borne out by the OPC page.
- Formula of Concord, Epitome, Rule and Norm (bookofconcord.org/epitome): "the sole rule and standard", and others only "as witnesses". Right.
- WCF 30.4 proof texts include 1 Thess 5:12; 2 Thess 3:6, 14, 15 (several Westminster sites). Right.
- 2011 British NT Conference survey 63/13/35 of 111, and "80-115" for Menken (Wikipedia, which cites Menken, Routledge 2002 ed., p. 65). Right as reported. The book cites Menken (1994); the page numbers are from the 2002 reprint.
- Young and Steinmann, JETS 62.4 (2019) (rcyoung.org PDF, read): it does say the Caligula incident "would probably have been in Paul's mind" for 2 Thess 2:3-4 and dates the order to late AD 40, citing Ant. 18.261-309, War 2.184-203, Philo Legat. But it is a chronology article on Herod the Great and the sentence is an aside.
- Swete LXX (`.cache/dl`, searched for hypomone): see finding 1.
- NET Bible text-critical notes for 2:3, 2:8, 2:13, 3:6: I could NOT reopen them (biblia.com and netbible.org pages did not return the notes). The witness lists in variants.json are copied from the writer's session and are unverified by me. Also unverified by me: that NA28 brackets "our" at 1:2 and "Jesus" at 2:8, and Chrysostom's homilies on 2 Thess numbering five.

## Findings

### Major

**1. Note 56 (3:5, "the endurance of Christ"): a false flat claim.** The note says the KJV reading "patient waiting for Christ" is doubtful because "hypomone does not elsewhere mean waiting for a person." The Swete Greek Old Testament contradicts this: Psalm 38:8 (39:8) "τίς ἡ ὑπομονή μου; οὐχὶ ὁ κύριος;", Psalm 61:6 (62:6) "παρ᾽ αὐτοῦ ἡ ὑπομονή μου", Psalm 70:5 (71:5) "σὺ εἶ ἡ ὑπομονή μου, κύριε", Jeremiah 14:8 and 17:13 "ὑπομονὴ Ἰσραήλ, Κύριε", Ezra 10:2 "ἐστὶν ὑπομονὴ τῷ Ἰσραήλ" (hope/expectation, the Lord being the one waited for). Fix: drop the sentence, or say that hypomone can mean "expectation" in the Greek Psalms and Jeremiah with God as its object, so the KJV reading is possible, and state what Christ's own endurance reading rests on.

**2. Lead and facts overstate an even split and miscount who holds priority (book.json `lead`, `facts`).** `lead` says the authorship question "divides scholars almost evenly"; the same book's table gives a survey of 63 for, 13 against, 35 unsure. It is one conference's survey and should not be generalized, but the lead contradicts it. `facts` says "one scholar, Wanamaker, puts it before 1 Thessalonians"; Verhoef's HTS paper (the book's own source, `verhoef-2thess`) names Wanamaker and Lecompte on this side, and a search surfaced Gregson (1966) arguing the same. Fix: lead should say "scholars are divided; a 2011 survey of one British conference found a majority for Paul with many unsure, while many German-language scholars and others hold it is later" and `facts` should say "a few scholars, among them Wanamaker".

**3. Pauline authorship stated as settled in settings and notes.** chapters.json ch.3 setting 3:16-18: `by` "Paul, writing the last lines in his own hand" and `why` "to prove by his own handwriting that the letter is truly his"; the `views` below it give the other side, but the headline fields do not. Note 68 (3:17) ends "Either way, the first readers would have seen a change of handwriting," which is false on the pseudonymous view (a later author's readers see whatever he supplies). The 1:1-2 setting is handled correctly (conditional "if Paul wrote it"); use the same pattern. Fix: make `by`/`why` conditional, and change note 68's last sentence to "On the view that Paul wrote it, the first readers would have seen a change of hand."

**4. Key terms not kept the same.**
 (a) *olethros* in 1:9 is "destruction", but the site's Plain renders it "ruin" at 1 Corinthians 5:5 and in the new 1 Thessalonians Plain at 5:3 ("ruin will fall on them"), which note 16 itself cites. 1:9 is the single most contested phrase in the letter, and "destruction" leans toward one reading in a way "ruin" does not. *apoleia* is "ruin" at 2:3 and 2:10, so "ruin" is also the site's word for the root. Fix: "eternal ruin" (and tell the 1 Corinthians and 1 Thessalonians writers), or add a term entry saying why 1:9 differs. (Minor sub-point: terms.json has no olethros entry; add one.)
 (b) *energeia*: "Satan's working" at 2:9 but "a power that leads them astray" at 2:11, while note 42 itself says "the same word", and "power" at 2:9 is a different word (*dynamis*). The English hides the very link the note points out. Fix: "God sends them a working of error" or similar.

**5. 2:13 variant: reasoning is one-sided and contradicted by note 47.** variants.json `why` supports "firstfruits" partly because "the Thessalonians were indeed among the first converts in Macedonia." Note 47 says they came "after Philippi," and 1 Thess 2:2 and Acts 16-17 show Philippi was first, so "firstfruits of Macedonia" would be wrong for Thessalonica. The other argument ("a word Paul uses six times") is a scribal-assimilation argument that favors "from the beginning" as the harder reading, as the entry half admits. In effect the Plain follows the base text without a real reason. Fix: say "a close call; the Plain keeps the SBL/NA28 base text," remove the Macedonia claim or add that Philippi came first, and drop "word Paul uses six times" as a reason for. (Counts of aparche in Paul are right: Rom 8:23; 11:16; 16:5; 1 Cor 15:20, 23; 16:15.)

**6. Gehenna card (1:9) is missing Orthodox and Lutheran, and note 16 makes an unsourced claim.** The card has Catholic, Reformed, Adventist and "Evangelical" only. Orthodox and Lutheran both have distinct teaching on hell (the Lutheran Augsburg Confession, art. 17, rejects the idea that the damned or devils will not suffer eternally; the Orthodox have their own long debate over hell and apokatastasis). I did not open either text this session, so I give them as things to look up, not as verified quotations. Note 16 says option (3) "no major church teaches as doctrine" and that "a few early fathers" held it; no fathers are named and no source is given. Fix: add Orthodox and Lutheran entries sourced to their own texts, and either name the fathers with a source or cut the sentence.

**7. Rapture card (2:6-7) does not show a real divergence between traditions.** The "Orthodox" and "Catholic" entries are what Chrysostom and Augustine/Tertullian thought about the restrainer in the 4th-5th centuries, not what the Orthodox or Catholic churches teach today (CCC 675, cited in the Catholic entry, does not mention the restrainer). The Orthodox entry ends with the writer's own judgment ("Nothing here suggests a removal of the church before the end"), which is not a tradition's statement. Meanwhile Lutheran, Reformed, Baptist and the non-dispensational evangelical views of what restrains him (and of whether there is a rapture before the final trial) are absent, so the card pits one modern school against two Fathers. The question (q) also builds in the dispensational reading ("the church, taken away before he comes"). Fix: retitle the card around "who or what is the restrainer", show the patristic readings as readings, add what Lutheran/Reformed/Baptist/post-tribulation sources actually say (sourced), or fold the card into the antichrist card as the brief allowed. Delete the editorial sentence.

**8. Unsourced statements of what whole communions hold (chapters.json ch.2 `deep`, `readings`, `traditions`).** The deep dive says the future-individual reading "is held today by Orthodox and many Catholic teachers"; no teacher, council or catechism is cited, and the Catechism entry (675) "names no one." Also unsourced: "Lutheran churches today differ on how far this is still to be held" (the Smalcald entry); "Baptists who hold the 1689 Confession today differ" (Baptist entry); "several churches have removed it from their confessions" (only the PCUSA 1903/OPC removal is documented); and "held by few outside some conservative churches." Fix: source each (for example a current Lutheran church-body statement on the pope as Antichrist, which I did not look up), or reduce to what the quoted texts prove.

**9. Church-discipline card (3:14-15) omits Catholic, Orthodox and Baptist.** Only Lutheran, Reformed and Anabaptist appear. Catholic and Orthodox excommunication practice and the congregational Baptist practice (Matthew 18) are real, distinct and large. The Lutheran entry (Smalcald III.9) quotes the lesser ban but does not tie it to 3:14-15, so it is not clear how it answers the card's question. The Reformed entry is fine (WCF 30.4 proof texts do include 2 Thess 3:6, 14, 15). Fix: add Catholic and Orthodox entries sourced to the churches' own documents, add Baptist, and say whether the Lutheran passage cites 2 Thess.

**10. Details stated from memory with no source (STYLE rule 2, CLAUDE.md "no memory sourcing").** Each is plausible and each is a checkable claim stated flatly:
 - Note 11 (1:7): *anesis* "used for loosening a bowstring or a strap".
 - Note 23 (2:1): *parousia* "was used for the official visit of a king or governor"; no source (and the claim is contested in the literature).
 - Note 57 (3:6): *ataktos* "describes a soldier who breaks rank".
 - Note 60 (3:8): "To 'eat bread' from someone without paying meant being their guest or client."
 - Note 3 (1:1): Thessalonica was "the seat of the Roman governor of Macedonia".
 - Note 1 (1:1): Silas is "a short form" of Silvanus.
 - Note 62 / ch.3 `H`: patronage and "Greek disdain for manual labor" explanations, no scholar named.
 - Note 66 (3:15): "Anabaptist churches that practice shunning, and churches that reject it, both cite this verse": the Dordrecht card entry gives one side; the "churches that reject it" are not sourced.
 Fix: open a lexicon or commentary and cite it, or cut the sentence. LSJ for anesis, parousia and ataktos is the obvious source.

### Minor

**11. Unnamed consensus claims.** Notes 15 ("Most modern commentators read one group described twice, in the style of Hebrew poetry"), 22 ("Most translators and commentators keep two persons"), 37 ("A few take the subject to be the lawless one... most read it of the restrainer"), 48 ("A few read the human spirit"), 62 ("Many commentators combine (1) and (2)"), 6 ("Others answer that Paul is saying..."), 51 ("Many readers see here an early sign"). Per the Pauline brief, name them or drop. Note 35's restrainer readings (3) to (6) also give no proponent (for example who reads Paul himself or the gospel preaching as the restrainer); name them from a source you open.

**12. Note 4 (1:2): "Every letter of Paul opens this way" is false.** Colossians has "Grace to you and peace" only (shorter), and the Plain of 1 and 2 Timothy has "Grace, mercy and peace." Say "Most of Paul's letters."

**13. Note 30 (2:4): "has the same phrase as Paul."** The writer's own sources-checked file lists Theodotion Dan 11:36 as *hypsothesetai ... epi panta theon*; Paul has *hyperairomenos epi panta legomenon theon*. Same preposition and "every god", different verb. Say "close to."

**14. Note 39 (2:8): "this is its only use in the other letters of Paul."** The note has just listed 1 Tim 6:14, 2 Tim 4:1, 8 and Titus 2:13 (2 Tim 1:10 is missing too). It should say "in the undisputed letters" or "outside the Pastorals" and then admit that 2 Thess itself is disputed.

**15. Note 50 (2:15): header and body do not match.** Header: "perhaps this letter, if the verb is read as looking forward." The body never says this, and the verb is *edidachthete* ("you were taught"), not an epistolary aorist. Rewrite: "most naturally 1 Thessalonians; on Wanamaker's order, this letter's predecessor was not 1 Thessalonians."

**16. 3:1 "run its course quickly."** In English "run its course" means to reach its natural end (the site's own Daniel 11:36 uses "has run its course" for the fury ending). The Greek *trechei* is "may run/spread". Alternative: "may spread fast" or "race ahead".

**17. Variants missing or unsupported.** Note 67 states that *tropo*/*topo* at 3:16 is a real variant, but variants.json has no entry for it. 1:8 (*en phlogi pyros* in SBL against *en pyri phlogos* in NA, per texts/auto) is discussed only in note 14; the 1:2 and 2:8 "NA28 in brackets" claims, and all witness lists (copied from the NET Bible), could not be re-verified by me (see above). The 2:2 "later corrector of Claromontanus" witness has no source in the checked list.

**18. Young and Steinmann as a source (note 32, `young-steinmann-caligula`).** It is a chronology article; the Paul sentence is one aside. It supports "some scholars think it was in Paul's mind" but it is thin. Add a commentary that discusses the Caligula background, found in a source you open.

**19. Note 32 dating inference is one-sided.** "For dating, those who read (1) note that the letter seems to assume the Temple stands, which fits a date before AD 70." Omitted: a later author could write from Daniel's tradition after AD 70 without assuming a standing temple (the book's own critical lens gives AD 80-115). State both.

**20. Note 58 subtitle (3:6) states as fact: "not expel him."** The text and the interpreters differ (the note's own body says so). Change to "the letter limits it."

**21. Note 61 (3:9):** "the apostles worked so that the idle could not plead their example" is the writer's inference, not the Greek (*hina heautous typon dōmen hymin*). Mark it as a reading or delete.

**22. Jamestown claim (note 62, ch.3 readings, deep, T-lens).** The only source opened was Wikipedia and no source key is given. The brief said "verify before citing; skip if unchecked." Lenin and the 1936 constitution are keyed (and I accept them); Smith should either be keyed to Smith's own text or cut.

**23. Audience wording (book.json `audience.why`, ch.3 setting 3:6-15).** "not a law for a state" / "It applies inside the church, not as a civil law" is a conclusion, and a contested one (the book itself says "readers have debated" in the deep dive). Make it consistent: say what the letter's first hearers were told and leave the extension to the reader.

**24. Antichrist card.** The brief asked for dispensational, preterist and idealist readings next to the confessional ones; the card has five confessional entries (three of them the papacy reading, so the card shows variants of one view, not five). Preterist and idealist appear only in the deep dive. Consider one "Futurist/Preterist/Idealist" pair of entries with named sources. The Catholic reply to the papal identification is absent from this card (the entry says only that the Catechism names no one).

**25. Lenses/alignment.** (a) 1:1 Plain "the church of the Thessalonians in God our Father" against the new 1 Thess 1:1 "the Thessalonians' church, which is in God the Father": same Greek order; harmonize (the brief asks for the pair to be aligned). (b) 3:8 "weigh down any of you" against 1 Thess 2:9 "be a weight on any of you": the Greek is identical; use one wording. (c) 3:18 matches 1 Thess 5:28 plus "all" (fine). (d) "out of line" matches 1 Thess 5:14 (good).

**26. Translation points (small).**
 - 1:6-7: the Greek is one construction ("to repay... and to [give] you rest"); the Plain's "while you ... are given rest" reads as simultaneous. Minor.
 - 2:1: "of how we will be gathered to him" adds "how"; Greek is the noun *episynagoge*, "our gathering to him". Also *hyper* ("on behalf of/concerning") against the "by" reading is not noted.
 - 2:7 "will do so until he is gone from the scene": the Plain chooses "he" = restrainer, a real interpretive choice; the note states this (fine).
 - 3:14: the construal of "through the letter" (with "our word" or with "mark") is not noted.
 - 1:10: the "because" that links "our testimony was believed" to the previous clause is dropped; an added "And".
 - 2:11 energeia: see finding 4(b).
 No NIV/ESV copying found.

**27. Spec note 45 (2:13, Benjamin).** Properly labeled as Claude's theory. But "word for word the Greek of Deut 33:12" is too strong: the LXX has the singular *ēgapēmenos hypo kyriou*, Paul the plural. Say "the same phrase in the plural."

**28. progress.md says 8 settings; chapters.json has 9.** Update progress.md.

**29. Facts/book.json small points.** "(Chrysostom) Five sermons" not checked by me; `facts` "Language: ... many phrases from the Greek Old Testament" fine. `facts` "Place: Probably Corinth" is stated as a conditional elsewhere; add "if Paul wrote it".

### Note density (70 notes for 47 verses)

The notes are readable but heavy. Candidates to remove or merge: 2 (Timothy: merge into 1), 9 (counted worthy: merge into 8), 11 (rest: merge into 10 once the bowstring claim is dropped), 20 (every good thing you long to do), 21 (glory both ways: merge into 17/18), 22 (God and Lord: its trinity point is also made in 51), 44 (judgment falls on), 53 (twisted and evil), 54 (faith and faithful: merge into 55), 59 and 61 (imitate / right: merge into 60), 63 and 64 (busybody pun: merge into 57), 67 (Lord of peace), 69 (grace). That brings the count to about 55 without losing a view or a source. Keep: 0, 15, 16, 25, 27, 32, 35, 36, 42, 47, 49, 57, 58, 62, 65, 66, 68.

### Audience and settings

Coverage is good: a setting for every section, first hearers named exactly (the Thessalonian church, mostly Gentile with some Jews and God-fearers), and the debated date is given conditionally in most places (not at 3:16-18: finding 3). The 1:3-10 setting is the strongest.

### Traditions cards (summary)

- Antichrist (2:3-4): real divergence between Catholic/Orthodox and Reformed-line churches. Quotes verified: Westminster 25.6 (1646 text) and the 1689 Baptist 26.4 are the quoted wordings; Smalcald II.4.10-11 cites 2:4. See findings 8 and 24.
- Rapture/restrainer (2:6-7): see 7.
- Scripture and tradition (2:15): strongest card. Dei Verbum 8-10 and Formula of Concord quotes verified; Westminster 1.6 and 1689 1.1, 1.6 as sourced; Basil On the Holy Spirit 27 is a father's text, not an Orthodox statement of the principle, and the Reformed entry's own reply to 2:15 rests on 2:2. Minor.
- Gehenna (1:9): see 6. CCC 1033 and 1035 quotes as given are right per the writer's sources; I did not reopen them.
- Church discipline (3:14-15): see 9.

## Fixes applied

Fixer, 2026-10-29. Sources opened this session: Swete LXX (tools/lxx.py: Psalm 38:8, 70:5, Jeremiah 14:8, Deuteronomy 33:12, Theodotion Daniel 11:36-37, Isaiah 66:15); texts/auto/2Th.json and texts/orig (NA27/28 brackets at 1:2 and 2:8; the 1:8 word order; epiphaneia and olethros counts); Abbott-Smith via the STEPBible lexicon (anesis, parousia, ataktos, hypomone); CCC 675 (vatican.va); Code of Canon Law 1311-1358 (vatican.va); Augsburg Confession 17 and Smalcald III.9 (bookofconcord.org); Philaret's Longer Catechism q. 383 (azbyka.ru); LCMS Brief Statement 42-43 (Project Wittenberg); LCMS CTCR, The "End Times" (1989) (Project Wittenberg); WELS Statement on the Antichrist (wels.net); OPC preface (opc.org); Second London Confession 26.7, 26.12 (the1689confession.com); Dordrecht Confession 17 (Wikisource); Russell, NTS 34 (1988) (Cambridge Core extract and notes); Wikipedia, Macedonia (Roman province); newadvent, Chrysostom's Homilies on 2 Thessalonians (five).

1. Fixed. Note on 3:5 rewritten: the Greek Old Testament uses hypomone for hope with the Lord as its object (Psalm 39:7; 71:5; Jeremiah 14:8; 17:13 in the Greek), so the KJV reading is possible; the note says what "Christ's endurance" rests on. Source abbott-smith.
2. Fixed. Lead now gives the 2011 survey as one conference's result and names the other side (Trilling, Menken); facts: "a few scholars, among them Wanamaker". Lecompte and Gregson not added (not opened this session).
3. Fixed. 3:16-18 setting `by`/`why` made conditional on both views; note on 3:17 ends "On the view that Paul wrote it...".
4. Fixed. (a) 1:9 Plain "eternal ruin" (lead decision); the 1:9 note says olethros differs from apoleia; card question, chapter readings and T lens, and topics updated; in proposals/nt/terms.json the son-of-ruin entry is corrected and a new olethros entry added. (b) 2:11 Plain "a working that leads them astray", matching "Satan's working" (2:9); note, chapter summary and topics updated; new energeia entry in proposals/nt/terms.json.
5. Fixed. 2:13 variant `why` rewritten: a close call, the Plain keeps the SBL/NA28 base text; the six-uses argument is shown to cut both ways; Philippi came first, so "firstfruits" cannot mean the first converts of Macedonia. The firstfruits note says the same.
6. Fixed. Gehenna card: Orthodox (Philaret, Longer Catechism q. 383) and Lutheran (Augsburg Confession 17) added. Note on 1:9: the unnamed "early fathers" and "no major church teaches" claims cut.
7. Fixed. Rapture card rebuilt around a sourced divergence: "Will the church still be on earth when the lawless one is revealed?" Dispensationalist (Ice), Catholic (CCC 675: the Church passes through a final trial), Lutheran (LCMS CTCR 1989: the rapture comes after the Antichrist; the restrainer is unknown). The Chrysostom, Augustine and Tertullian readings stay in the 2:6 note as readings; the editorial sentence is gone.
8. Fixed. Deep dive: the Orthodox/Catholic/evangelical claim replaced by what CCC 675 and Ice say; "many Lutherans and Reformed no longer hold it" and "held by few... several churches have removed it" replaced by the documented PCUSA 1903 change (OPC preface) and the LCMS Brief Statement 43; the Lutheran card entry now documents the split (Brief Statement 1932 against the ALC Sandusky Declaration 1938, as the WELS statement records; new key wels-antichrist); the Baptist "today differ" sentence cut.
9. Partly. Church-discipline card: Catholic (Code of Canon Law 1311, 1312, 1331, 1341, 1358) and Baptist (Second London Confession 26.7, and 26.12, which cites 3:6, 14-15) added; the Lutheran entry now says Smalcald III.9 does not cite this letter. No Orthodox entry: no Orthodox document on discipline was opened this session.
10. Fixed. anesis "bowstring" cut (Abbott-Smith: "a loosening, relaxation", the opposite of thlipsis); parousia as the visit of a king and ataktos of soldiers not keeping the ranks now cited to Abbott-Smith; "eat bread = guest or client" cut; "seat of the Roman governor" now "capital of the Roman province" (Wikipedia); Silas "short form" cut; the patronage explanation now attributed to R. Russell, NTS 34 (1988) (new key russell-idle-2thess) in the note, H lens, readings, deep dive, setting and topics; "Greek disdain for manual labor" cut; the note on 3:15 now cites only Dordrecht 17 (opened: 3:14 for shunning, 3:15 "not count them as enemies, but admonish them as brethren").
11. Partly. Consensus claims removed or turned into plain readings in the notes on 1:3, 1:8, 1:12, 2:7, 2:13 (Spirit), 2:16 and 3:10. The 2:6 note's readings (3) to (6) still name no proponent: none was found in a source opened this session; they stand as readings, not as consensus claims.
12. Fixed. "Most of Paul's letters open this way; Colossians has a shorter form, and 1 and 2 Timothy add 'mercy'" (checked against the site's Plain).
13. Fixed. "close to Paul's words... with different verbs" (Theodotion Daniel 11:36 in Swete).
14. Fixed. 2 Timothy 1:10 added; "outside those letters, this is its only use in Paul", and both the Pastorals and 2 Thessalonians are noted as disputed (count checked in texts/orig).
15. Fixed. Preview: "Most naturally 1 Thessalonians; on Wanamaker's order of the two letters, an earlier letter now lost"; the body says the same.
16. Fixed. 3:1 "will race ahead and be given glory"; note anchor updated.
17. Partly. New 1:8 variant (SBL and Tregelles en phlogi pyros against NA28, NA27, THGNT, WH, Byzantine and TR en pyri phlogos, from texts/auto); the tropo/topo sentence cut from the 3:16 note (no source); "later corrector of Claromontanus" removed from the 2:2 variant. NA28 brackets at 1:2 and 2:8 confirmed in texts/auto (NA27/28 [ἡμῶν], [Ἰησοῦς]). The NET witness lists at 2:3, 2:8, 2:13 and 3:6 are kept as the writer checked them (listed in the writer's sources-checked.md); I could not reopen the NET notes.
18. Partly. The note on 2:4 now says only what the article says: Young and Steinmann think the episode "would probably have been in Paul's mind". No commentary added: none on the Caligula background was opened this session.
19. Fixed. The later-date answer added to the dating sentence.
20. Fixed. Preview now says the letter limits it.
21. Fixed. Notes on 3:7 and 3:9 merged into 3:8; the inference is gone and the reason given is the Greek's own ("to make ourselves a pattern for you").
22. Fixed. John Smith and Jamestown cut from the note, chapter readings, deep dive, T lens and topics.
23. Fixed. book.json audience: "the rule of 3:10 was given to a small church, about its own members"; 3:6-15 setting: "It is given to a church about its own members"; the deep dive ends the same way.
24. Declined in part. Preterist and idealist are schools of reading, not names in TRADITIONS; they stay in the deep dive. No Catholic document answering the papal identification was opened this session. The card now shows a sourced split inside the Lutheran line (finding 8).
25. Partly. (a) Kept per lead decision 2 (2 Thess 1:1-2 already matches the new 1 Thess 1:1). (b) 3:8 now "so we would not be a weight on any of you", word for word 1 Thessalonians 2:9. (c) and (d) need no change.
26. Fixed. 1:7 "and to give rest to you who are being troubled, and to us with you, at the revealing..." (one construction with 1:6); 1:10 restores the "because" clause; 2:1 "our gathering to him", and the note on 2:1 explains hyper against the KJV's "by"; the construal of "through the letter" at 3:14 added to its note.
27. Fixed. "the phrase of the Greek Deuteronomy 33:12... in the plural (Deuteronomy has the singular)"; preview too.
28. Fixed. progress.md gives 9 settings.
29. Fixed. Chrysostom's five homilies confirmed (newadvent index); Place: "If Paul wrote it, probably Corinth".
Note density. Partly: 70 to 59 notes. Merged 2 into 1, 9 into 8, 11 into 10, 44 into 42, 53 into 52, 54 into 55, 59 and 61 into 60, 63 and 64 into 57, 69 into 67; every view and source kept. Kept 20, 21 and 22 separate (each carries its own reading).

Plain verses changed: 1:7, 1:9, 1:10, 2:1, 2:11, 3:1, 3:8. For the lead's quote sync: 1 Kings (parts/17-22) notes.json quotes 2 Thessalonians 2:11 as "a power of delusion" and Isaiah (parts/13-23) notes.json as "a powerful delusion"; neither matches the Plain before or after; the new wording is "a working that leads them astray".
