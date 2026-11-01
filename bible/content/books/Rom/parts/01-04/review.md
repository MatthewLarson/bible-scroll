# Hostile review: Romans 1-4 (part 01-04)

Reviewed against `texts/orig/Rom.json` (SBL field), `content/terms.json` and `content/proposals/nt/terms.json`, the Plain English Translation of the Old Testament books that exist, `works.json`, the briefs (`agent-reviewer.md`, `brief-nt.md`, `brief-rom.md`) and web checks where noted. `VERBOSE=1 node tools/build.js --check Rom/01-04` gives 0 errors, 0 warnings.

## Verdict

The Plain English Translation is strong. I read all 117 verses against the SBL Greek and found no mistranslation of substance. The lead decisions (πίστις Χριστοῦ, ἱλαστήριον, "reckon", "works of the law", "brothers", ὀργή) are carried out consistently, and the notes and cards are unusually fair. The weak points are in the apparatus and in a handful of factual claims. The variants never name the real witnesses for most entries ("early witnesses listed in NA28") and two witness claims (P40 at 3:22; the versions at 1:7) are unverified or contradicted by what I could find. Four notes make false statements about Hebrew or Greek text (Psalm 32:2 "reckon", Psalm 5:9 "adds tongues", the kapar/kasah slip, "diastole only twice"). One note puts quote marks around a phrase from a Wisdom translation the site does not have. Several fairness slips state a contested thesis (Sanders) as settled. The same-sex card gives six of seven traditions no source. No invented source, manuscript or find was found; the P40 claim could not be verified and is the nearest case. Marcion/Origen is reported correctly and with hedges. Wisdom of Solomon is cited by reference, but one phrase in quotation marks breaks that.

Findings: 0 critical, 10 major, 38 minor (items 49 and 50 are notes of no-fix, not counted).

---

## Major

**1. variants.json, 3:22: P40 and "a corrector of Sinaiticus" cannot be confirmed.**
The reading "and upon all" is credited to "P40 (200s-300s) and a corrector of Sinaiticus (01), as reported by NA28 and Comfort". I found no source that confirms either siglum for this verse. The Wikipedia page for P40 names no reading at 3:22 and calls the papyrus "proto-Alexandrian", which makes support for a Byzantine addition odd. The `why` also says "Some scholars take it seriously because of the early papyrus", which rests on the same claim.
Fix: check the NA28 apparatus for 3:22. If P40 is cited, say how (it is fragmentary there; NA28 may mark it as uncertain) and state the Sinaiticus corrector as ℵ². If it cannot be checked, say only "the Byzantine text, the Textus Receptus and some early correctors" and drop the papyrus and the "taken seriously" sentence. The date of P40 is third century only.

**2. variants.json, 1:7 and 1:15: the witness account for "in Rome" is incomplete and partly wrong.**
(a) `why` says the words are in "the Latin and Syriac versions". The Old Latin codex g and Origen in Rufinus' Latin lack them at 1:7. The omission list at 1:7 should read G (which has "in the love of God"), the marginal note of 1739 (which says Origen's text lacked the words), 1908, and Origen^lat, plus Old Latin g. (b) The 1:7 entry mentions the 1739 margin but the 1:15 entry does not say whether it has any witness beyond G. (c) The entry says nothing of what G has in place ("in love"). (d) The `b` text adds "the evidence is thin and debated" about Marcion; this belongs in the shorter-Romans section, not under 1:7, where the Marcion report is not about "in Rome" at all.
Fix: rewrite the readings with exact witnesses, add the G replacement, and move the Marcion sentence.

**3. variants.json, whole file: witnesses are named by group, not by manuscript.**
Entries at 1:29, 1:31, 2:8, 2:16, 2:17, 3:22 (reading 1), 4:1 and 4:19 say only "early Greek witnesses listed in NA28" or "as listed in NA28". The project goal is "the readings, their witnesses, which one the Plain English Translation follows and why". A reader cannot check anything. The brief names Sinaiticus, Vaticanus, Alexandrinus, Ephraemi, Claromontanus, Boernerianus. P46 is never used, which is correct for chapters 1-4 (the surviving leaves begin at 5:17; verify), but then say so once in the textual-history topic and the introduction.
Fix: give the actual sigla for each reading from the NA28 or Metzger apparatus (ℵ A B C D F G Ψ 33 81 1739 𝔐), or remove the entry's claim to "witnesses". Do not name a manuscript you have not checked.

**4. variants.json, 2:16: the entry compares the wrong things, and the Plain English Translation breaks the sentence.**
The Greek is ἐν ἡμέρᾳ ὅτε κρίνει ὁ θεός. The Byzantine text reads ἐν ἡμέρᾳ ὅτε κρινεῖ and διὰ Ἰησοῦ χριστοῦ. The entry says "the present tense is the harder reading after 'the day'", which is not an argument (after ὅτε a future is the expected tense, so the present is the harder one: say that). It credits "Tyndale House GNT, Tregelles" with the future without a source; verify before keeping. The "by Jesus Christ" difference changes the English ("through Christ Jesus") and should be a reading line, not a sentence in `why`. The Plain English Translation also adds a verb: "That day comes when God judges ...". The Greek has no "comes" and it ties the clause to 2:15 ("on the day when God judges"), so the Plain English Translation starts a new sentence and drops that link. NIV and ESV keep the link.
Fix: Plain English Translation 2:16, "This will happen on the day when God judges what people keep secret, through Christ Jesus, as my good news says" (or keep one sentence with 2:15). Rewrite the entry.

**5. notes.json, 4:6 ("David and Abraham tied by one word"): false claim about the Hebrew.**
The note says "The Greek Psalm uses 'reckon' where the Hebrew speaks of not 'charging' guilt". Hebrew Psalm 32:2 uses the same verb as Genesis 15:6, חשב (`chashab`): לא יחשב יהוה לו עון. The word-link works in Hebrew as well, which is the point of the rabbinic *gezerah shavah* the note names. The Plain English Translation of Psalm 32:2 ("does not charge") hides the link in English and the note blames the Hebrew for it.
Fix: say that the verb is the same in Hebrew and Greek, that the site's Plain English Translation of Psalm 32:2 renders it "charge", and that Genesis 15:6's Plain English Translation says "reckoned". Check whether the Psalm 32:2 Plain English Translation should read "reckon" for the sake of the Romans quotation (lead alignment).

**6. notes.json, 3:13 (Psalm 5:9): false claim about the Greek.**
The note says the Greek Psalm "adds that 'with their tongues they practiced deceit'". The site's own Plain English Translation of Psalm 5:9 reads "their tongues are slippery with flattery". The clause is in the Hebrew (they make their tongue smooth); the Greek translates it ἐδολιοῦσαν. It is not an addition.
Fix: remove the claim; say Paul follows the Greek wording of the same line.

**7. notes.json, 1:20 (Wisdom 13): a quotation of a translation the site does not have.**
The brief assumed a Plain English Translation of Wisdom; none exists (`content/books/Wis` is absent). The note puts "not to be excused" in quotation marks as if from Wisdom 13:8. That is a phrase from a modern English version, and the project rule is no copyrighted translation and no quoting a Plain English Translation that does not exist. The rest of the note and the chapter-1 spec box cite Wisdom by reference only, which is right.
Fix: paraphrase without quotation marks ("the nature-worshipers are not excused because they stopped at creation (Wisdom 13:8)"). List Wisdom 11:23, 12:10, 13:1-9, 14:12, 14:22-27, 15:1 for the lead to align when Wis is written.

**8. Fairness: Sanders' thesis is stated as settled fact.**
notes.json 3:20 ("Sanders showed that Judaism did not teach earning salvation by works ..."), 4:4 ("E. P. Sanders showed that most Jewish writers ... believed God chose Israel by grace"), chapters.json ch3 deep dive ("showing that Judaism of the time taught ..."), and book.json "Romans and the Jewish people" ("E. P. Sanders showed that Judaism of the time was a religion of covenant and grace"). "Covenantal nomism" is the most influential reading, but critics (Carson, Gathercole, Barclay's "perfections of the gift", Reformed scholars generally) dispute its reach. The site's own note at 3:27 cites Gathercole's dissent, so the later notes contradict the fairness rule.
Fix: "Sanders argued, and many scholars now accept, that ... ; others (Gathercole, Carson) hold that some Jewish texts expected vindication by obedience."

**9. Term and Plain English Translation consistency, 3:19: ἐν τῷ νόμῳ rendered "under the law".**
The Greek is τοῖς ἐν τῷ νόμῳ ("those in the law"). At 2:12 the same preposition is "inside the law". The brief reserves "under the law" for ὑπὸ νόμον. The Plain English Translation at 3:19 uses "under the law", and note 3:19 builds an argument on "the people who are under the law". The reader of the Plain English Translation cannot tell that Paul changes prepositions (ὑπὸ νόμον appears in 6:14-15, written by another part).
Fix: "spoken to those who are inside the law" (or "who have the law"), and adjust the note title.

**10. traditions card at 1:26-27: six of seven views have no source, one is a direct quote with no source, and the Orthodox entry rests on a Father rather than a church text.**
Lutheran, Anglican, Methodist and Baptist views are given with dates and a direct quotation from the United Methodist Book of Discipline ("incompatible with Christian teaching") and no source key. The Orthodox entry cites only Chrysostom, though it states the position of "the Orthodox churches". Reformed and Pentecostal churches are missing though they differ among themselves. The card also assigns "the Baptist Faith and Message, 2000, article 18" with no key.
Fix: add source keys (Book of Discipline, ELCA 2009 statement, Lambeth I.10, BF&M, a Orthodox statement such as the Orthodox Church in America's), state the Orthodox view as a church teaching with a source, and add Reformed (PCA, PCUSA) and Pentecostal entries or say why they are omitted.

---

## Minor

**11. plain.txt 1:26, "the natural use of their bodies".** Greek has τὴν φυσικὴν χρῆσιν (no "of their bodies"); 1:27 correctly reads "the natural use of the woman". The gloss ("natural sexual relations") already says what the reader needs. Remove "of their bodies" or mark it as an addition. The note at 1:26 describes "natural use" as the Greek and does not mention the added words.

**12. plain.txt 1:24.** τοῦ ἀτιμάζεσθαι is a purpose or result clause ("so that their bodies would be dishonored"), not a second event. "and their bodies were dishonored" flattens it. Suggest "so that their bodies were dishonored among themselves".

**13. plain.txt 3:9, "Not at all."** οὐ πάντως is disputed ("not at all" or "not in every way"); the note on προεχόμεθα does not mention it, and "Not at all" is also the NIV wording. Note the alternative or vary the wording.

**14. plain.txt 3:20, "No one of flesh and blood".** πᾶσα σάρξ is "flesh" under the site term (never replaced), and Galatians 2:16 repeats it. "Flesh and blood" imports the idiom of Matthew 16:17 and breaks the term chain the book.json "How to read Romans" section promises. The gloss and the note explain it, but fix the cause: "no flesh will be justified" with the gloss "no human being".

**15. plain.txt 3:30, "through the same faith".** τῆς πίστεως has the article; "same" is an addition and matches a common NIV phrase. Use "through that faith" or "through faith" and keep the note on the article.

**16. plain.txt 3:25, "sins committed beforehand".** Greek προγεγονότων ἁμαρτημάτων. The phrase "committed beforehand" is NIV's. Suggest "sins done earlier" or "earlier sins". Also 1:4 follows NIV's structure closely ("appointed ... Son of God ... by his resurrection from the dead"); the Greek order forces much of it, so only the verb choice could vary.

**17. notes.json, 3:22 ("No distinction").** "Diastole appears in the New Testament only in Romans 3:22 and 10:12" is false: 1 Corinthians 14:7 uses διαστολήν ("distinction" in the notes of an instrument). Say "in Paul, only here, 10:12 and 1 Corinthians 14:7".

**18. notes.json, 3:4 ("By no means!").** "He uses it ten times in Romans ... and almost nowhere else except in Galatians." Also 1 Corinthians 6:15 and Luke 20:16. The count of ten in Romans is correct.

**19. notes.json, 4:20.** "The same word, doxazo, is used in both places" is wrong: 1:21 has ἐδόξασαν, 4:20 has δοὺς δόξαν (noun). The note's own `orig` field shows it. Say "the same root". The chapter 3 spec box has a parallel slip: "the Plain English Translation varies 'glory' and 'praise' in 1:21 and 2:29" (2:29 is ἔπαινος, a different word, so there is no variation to report).

**20. chapters.json, ch3 `L`.** "The 'righteous' family of words occurs eight times in six verses." In 3:21-26 I count seven: δικαιοσύνη (21, 22, 25, 26), δικαιούμενοι (24), δίκαιον and δικαιοῦντα (26).

**21. notes.json, 3:25 ("the place of atonement").** The note says "The Plain English Translation keeps the site's term 'atonement lid' in its gloss". The gloss is "where sin is covered over" (as the term entry requires); the gloss does not contain "atonement lid". Fix the sentence.

**22. notes.json, `orig` typos.** #1:20 "ἡ τε ἀἰδιος" should be ἥ τε ἀΐδιος; #3:23 "ὐστεροῦνται" should be ὑστεροῦνται (rough breathing); #1:17 transliteration "piseōs" should be "pisteōs"; #3:9 "proechómetha" use the ō or o used elsewhere.

**23. notes.json, 1:15 `s` and others.** `dio-roman-history` is cited at 1:7 but the note never uses Dio (book.json does). Add Dio 60.6.6 to the note or drop the key.

**24. notes.json, 2:15 ("Conscience").** "The word *syneidesis* appears in the Greek Old Testament only in Ecclesiastes 10:20 and the Wisdom of Solomon" is too strong (Sirach 42:18 in some witnesses; Job 27:6 in other Greek versions). Hedge ("rare in the Greek Old Testament, with Ecclesiastes 10:20 and Wisdom 17:10 as clear cases").

**25. notes.json, 2:13 ("Justified").** "Catholic teaching (Council of Trent) says God both declares and *makes* righteous". Trent, session 6, chapter 7, says justification is not only forgiveness but also sanctification and renewal; the "declare and make" wording is a modern summary. Quote Trent's actual claim.

**26. notes.json, 1:11 and the Roman setting claims in `settings`.** Several settings state a reconstruction as fact: 1:1-7 `readers` ("Jewish Christians who had returned after the edict of Claudius had lapsed and Gentile Christians who had led the house churches in their absence"); 1:8-15 `readers` ("some of it suspicious (3:8)"); 3:1-8 `readers` ("Jewish Christians in Rome who wondered whether Paul had written off the Jews"). These are hypotheses (Wedderburn, Lampe, Jewett). Add "probably" or "on one reading".

**27. Works labeling.** Sirach 44 (note 4:2, deep dive ch4), 1 Maccabees 2:52 (4:2), Jubilees (4:2, 4:13, topics), 4 Maccabees 17:22 (3:25), 2 Clement and Hermas (4:11) and the Life of Adam and Eve (3:23) are cited without saying for whom they are Scripture (Sirach and 1 Maccabees: Catholic and Orthodox; Jubilees: the Ethiopian church; 4 Maccabees: an appendix in some Orthodox Bibles; the early writings: not Scripture for anyone; the Life of Adam and Eve: no church). The 1:20 note does this correctly for Wisdom. Add one clause at first use in each place.

**28. variants.json, missing entries where the English changes.** (a) 1:1 Χριστοῦ Ἰησοῦ (SBL) against Ἰησοῦ Χριστοῦ (Byzantine); the Plain English Translation says "Christ Jesus". (b) 4:12 τοῖς στοιχοῦσιν (SBL) against the longer "τοῖς ... τοῖς στοιχοῦσιν" of the Byzantine text, which Metzger discusses and which changes "not just circumcised but also walk". (c) 3:25 "διὰ τῆς πίστεως" against the shorter form (check the apparatus). Add or explain why they are left out.

**29. variants.json, 4:1.** Heading says "Two word orders and an omission". The `why` says the editors "prefer the word order that is hardest to explain as a copyist's smoothing", which does not say why. Metzger's reasoning (the committee kept the verb and placed it after ἐροῦμεν) should be summarized and the three readings tied to named manuscripts (item 3).

**30. variants.json, 2:8.** The `why` ("the order is the harder one to explain as a change: the Byzantine order puts the stronger word first, as in Revelation 16:19") is muddled; Revelation 16:19 has the genitives θυμοῦ τῆς ὀργῆς. State that the editors follow the better-attested order and that the meaning is unchanged. The `p` line says the KJV reads "in the opposite order"; the KJV words ("indignation and wrath") should be tied to θυμός and ὀργή in a line.

**31. variants.json, 1:31 and 1:29.** The 1:31 entry is headed "Truce-breakers" but the anchor is "they have no family love". Retitle "\"Implacable\" in the list". Metzger's TCGNT does not discuss 1:31 as far as I could find; remove `metzger` from the key unless checked.

**32. chapters.json, ch2 `C`.** "The breaking-off sentence of 2:17-20 without a main clause is typical of Paul's dictated style." The main clause arrives at 2:21 (the variants entry says so). Remove "without a main clause" and "dictated style" (a guess) or label it a view.

**33. chapters.json, traditions cards without sources.** 2:12-16 Orthodox ("the Church knows where it is but not where it is not" - attributed to no one); 4:11 Anabaptist (no key; the claim "as Calvin and Zwingli used it against them" needs a source); 3:21-31 Orthodox entry says the Orthodox "did not take part in the Western debates" and cites the Confession of Dositheus, which was a direct reply to a Reformed-leaning confession (Lucaris) in the Western debates. Fix the sentence and add source keys.

**34. chapters.json, 3:21-31 Lutheran entry.** "the article by which the church stands or falls (Augsburg Confession 4; Luther)". The Latin phrase is a later (1700s) formula for Luther's Smalcald Articles II.1; Augsburg IV does not say it. Cite the Smalcald Articles.

**35. notes.json, 3:21 (Luther's "paradise").** The `b` text attributes the story to "the preface to his Latin works, 1545" and the wording is a summary, not a quotation. Fine, but the same sentence says Luther "at first feared the phrase"; keep, and mark the account as Luther's own late recollection (historians date the "tower experience" differently).

**36. notes.json, 3:3 and 3:22 cross-reference.** Note 3:3 argues that Paul's use of πίστις for God's faithfulness "supports" the subjective genitive at 3:22. That is a weak argument (πίστις τοῦ θεοῦ is an unambiguous subjective genitive; the dispute at 3:22 is about a different construction). State the move as one proposal among others or drop it.

**37. notes.json, 3:25 (the Day of Atonement).** The ch3 `H` line says the Day of Atonement was "observed by Jews in Rome with fasting in the synagogues". The note does not cite anything. Source it (Philo, Embassy 306 and Special Laws 2.193-203 speak of observance; Suetonius, *Augustus* 76 on the Jewish fast) or soften.

**38. topics.json, `paul`.** Romans is "the only one [letter] addressed to a church he neither founded nor yet visited". Colossians (2:1) fits that description. Say "the only undisputed letter".

**39. topics.json, `romans` (`common`).** "Romans 1-4 is the foundation for the doctrine of justification by faith in every church that teaches it". Catholic and Orthodox teaching do not call it that. Reword: "Churches that teach justification by faith (and others, in different language) draw on Romans 1-4."

**40. topics.json, `textual-history`.** "The earliest copy of Romans is the papyrus P46 (about AD 200)". The surviving leaves of P46 begin at 5:17 (verify); P40 and P27 (third century) contain parts of chapters 1-4. Rephrase: "The oldest large copy is P46; for chapters 1-4 the oldest are P40 and P27." Also correct "earliest copy" in book.json (see review-book.md).

**41. notes.json, 1:26 ("Women in 1:26").** "Chrysostom (*Homilies on Romans* 4) reads it that way" is correct; "some earlier readers took it to mean unnatural acts between a woman and a man" (Augustine, *Nuptial Goods* 1.35) should be named, since the point is being used to qualify a major reading.

**42. notes.json, 1:5 and elsewhere ("obedience of faith").** Fine, but the Catholic reference (*Dei Verbum* 5) is used for one reading only; give a Reformed or Lutheran reference for the others or say the other readings are commentators' positions.

**43. notes.json, Luke 1:79 quote (3:17).** The note quotes "into the way of peace"; the site's Luke 1:79 reads "onto the road of peace". Quote the Plain English Translation exactly. Also note 2:4 gives Exodus 34:6 and Psalm 103:8 in paraphrase; fine.

**44. notes.json, 1:23 (Jeremiah 2:11).** The note paraphrases "my people have swapped their glory" and the Plain English Translation of Jeremiah 2:11 does not exist in the file I could check. Verify against the Plain English Translation when Jer 1-6 is complete; also Jeremiah 10:14 (3:34), Zechariah 14:9, Amos 3:2 and Daniel 7:18 have no Plain English Translation yet. Add them to the lead's alignment list.

**45. Alignment list for the lead (cross-book pairs).** Galatians 2:16, 3:6-14, 3:22; Philippians 3:9; 1 Corinthians 8-10, 12; Habakkuk 2:4 (Plain English Translation pending); Wisdom 11-15; Colossians 2:11-12; Ephesians 2:8-10; Psalm 32:2 "charge" against Romans 4:8 "reckon".

**46. Reading level.** A few notes run to 150 words in one block with several Greek terms (#12, #25, #85, #91). Not above the level of the site, but #85 packs five schools into one paragraph. Split into bullets as done in #91.

**47. notes.json, 4:11 (seal).** "Whether baptism takes the place of circumcision is a question on which the churches disagree. See the card on this verse." The card omits Lutheran, Orthodox and Methodist; at least Lutheran (Small Catechism, baptism) and Orthodox should be added or the omission stated.

**48. notes.json, 3:10.** "Some Greek and Latin copies of the Psalms carry the whole chain of Romans 3:13-18 inside Psalm 14" is correct; name the witnesses (Vaticanus' later hand? Sinaiticus corrector? the Vulgate) or leave out "Greek".

**49. Settings.** All sections have a card, and `to`, `readers`, `why` are filled. One gap: the chain of quotations at 3:10-18 has no separate card for the "closing every mouth" (3:19-20 is included in 3:9-20, so acceptable) and the Abraham/David pair at 4:6-8 is inside 4:1-8. No fix required.

**50. Term check.** ἀδελφοί (1:13 "Brothers", gloss "brothers and sisters"), πίστις Χριστοῦ (3:22, 3:26), δικαιοσύνη θεοῦ, ὀργή, ἔργα νόμου, λογίζομαι ("reckon", one word in 4:3-24; "do you suppose" at 2:3 and "count" at 2:26 are allowed) and φύσις all follow the proposals. The only departures are items 9 and 14 above. 1:7 "saints" and 3:25 "forbearance" have glosses.

---

## Checks that passed

- Marcion/Origen report: correct (Origen, *Commentary on Romans* 10.43, in Rufinus: Marcion removed the last two chapters from 14:23 and the doxology). Properly hedged in the 1:7 entry. See item 2(d) for placement.
- 1739 marginal note at 1:7: reported as a marginal note, not as the text of 1739, which matches the secondary sources I found; wording is acceptable once item 2 is applied.
- Boernerianus omits "in Rome" at 1:7 and 1:15: confirmed.
- Drift against NIV/ESV: the Plain English Translation is independent. Shared phrases are the few listed in items 13, 15 and 16.
- Quotes of other books' Plain English Translation match for Psalm 62:12, 14:2-3, 32:1-2, 51:4, 106:20, 143:2, Isaiah 52:5, 53:12, 59:7-8, Genesis 15:5-6, 17:5, 17:17, 17:24, 18:25, 29:35, Leviticus 16:2, 17:11, Deuteronomy 6:4, 10:17, Exodus 23:7, Proverbs 17:15, Ecclesiastes 7:20, 2 Maccabees 7:28, Acts 18:2, 28:15-16, Jeremiah 31:33 (build also reports 0 warnings), except items 6 and 43.
- Works are named as in `works.json`.
- Reference list: all `sources.json` entries are real books or articles with correct dates and venues (Hooker 1959-60, Packer 1974, Hays 1983/2002, Gathercole 2002, Thorsteinsson 2003, Campbell 2009, Barclay 2015, Qimron-Strugnell DJD 10 1994).
- Spec boxes are labeled "Claude's theory" with a statement of what is original; ch1 and ch4 boxes are plausible and honest.

## Fixes applied

Applied after the lead's cross-part decisions (`.scratch/Rom-review-notes.md`), which override the review where they differ. Fixed: 40; partly: 6 (items 2, 3, 10, 28, 46, 47; the declined parts are 28b and the Pentecostal row of 10); no fix needed or listed for the lead: 4 (44, 45, 49, 50); declined outright: 0.

1. Fixed. The P40 and "corrector of Sinaiticus" claim and the "taken seriously" sentence are cut. The 3:22 entry now names editions only (NA28, SBLGNT, Tyndale House GNT, Westcott-Hort, Tregelles against the Byzantine text and Textus Receptus), as the site's edition data shows, and says "editions only; manuscript lists not checked".
2. Partly. 1:7 and 1:15 rewritten: "Latin and Syriac versions" removed; Boernerianus (confirmed by the review) is named with the reported reading "in the love of God"; the 1739 marginal note and Origen in Rufinus are marked "reported"; the Marcion sentence moved out of 1:7 to the text section of book.json. Old Latin g and minuscule 1908 are not named, since they could not be checked here; the entry says further witnesses are reported but not checked.
3. Partly. Per lead decision 3 every entry now names the editions that print each reading, taken from the site's edition data (`texts/auto/Rom.json` and the SBL and Byzantine word data), with "editions only; manuscript lists not checked". Manuscript names are kept only for Boernerianus and the 1739 margin. The Plain English Translation departs from the SBL base nowhere in this part; where NA28 or Tyndale House GNT differ (1:1, 2:16, 3:25, 4:19) the entry says so. P46's surviving leaves begin at 5:17: stated in the textual-history topic and in book.json.
4. Fixed. Plain English Translation 2:16 now reads "This will happen on the day when God judges ..." (tied to 2:15). Entry rewritten: the present tense is the less expected one after "on the day when"; Tyndale House GNT and Tregelles verified as printing the future from the edition data; the name order (Christ Jesus or Jesus Christ) is now a reading, and Westcott-Hort "on the day in which" is mentioned.
5. Fixed. Note 4:6 now says the verb is the same in Hebrew and Greek (chashab and logizomai), that the link works in Hebrew, and that the site's Plain English Translation of Psalm 32:2 hides it with "charge". For the lead: whether the Plain English Translation of Psalm 32:2 should read "reckon" (see lead list).
6. Fixed. Note 3:13 (Psalm 5:9) no longer says the Greek adds the clause; the clause is in the Hebrew and Paul follows the Greek wording.
7. Fixed. Note 1:20 paraphrases Wisdom 13:8 without quotation marks. List for the lead's alignment when Wis is written: Wisdom 11:23; 12:10; 13:1-9; 14:12; 14:22-27; 15:1; 17:10.
8. Fixed. Sanders is "argued" in notes 3:20 and 4:4, in the ch3 deep dive ("Works of the law") and in book.json; Gathercole and Carson are named as dissenters. "Many scholars now hold" became "Some scholars hold".
9. Fixed. Plain English Translation 3:19 "inside the law"; note retitled, with the difference from "under the law" (hypo nomon, 6:14-15) and a pointer to 2:12; settings and ch3 summary updated.
10. Partly. Sources added to the 1:26-27 card: LCMS (1981) and ELCA (2009) for the Lutheran row, Lambeth 1998, the Book of Discipline (Social Principles), BF&M 2000; a Reformed row added (Westminster Larger Catechism 139; PCUSA Book of Order 2015). The Orthodox row is cut to what is sourced (Chrysostom, Homilies on Romans 4). The Alliance of Baptists clause is cut as unsourced. A Pentecostal row is not added: no verified source. The Episcopal General Convention 2015 statement has no source key (see lead list).
11. Fixed. 1:26 reads "the natural use for one that goes against nature"; gloss and note updated; the note says the Greek has no "of their bodies".
12. Fixed. 1:24 "so that their bodies were dishonored among themselves".
13. Fixed. 3:9 "No, not in any way"; note 3:9 gives both readings of ou pantos.
14. Fixed. 3:20 "No flesh will be justified"; gloss "no human being"; note matches (lead decision 7). Also corrected my own earlier error in that note: the Greek Psalm has "no one living", and "no flesh" is Paul's wording.
15. Fixed. 3:30 "through that faith"; note 3:30 and its anchor updated.
16. Fixed. 3:25 "sins done earlier" (note, chapter 3 deep dive updated); 1:4 "marked out as Son of God" (note 1:4 retitled; topics son-of-god, holy-spirit, resurrection updated).
17. Fixed. Note 3:22: Paul only here, 10:12, and 1 Corinthians 14:7 is the only other New Testament use.
18. Fixed. Note 3:4 lists 1 Corinthians 6:15, Galatians 2:17, 3:21, 6:14 and Luke 20:16.
19. Fixed. Note 4:20: "the same root" (verb in 1:21, noun in 4:20), orig corrected. The ch3 spec box no longer claims a variation at 2:29.
20. Fixed. ch3 `L` says seven times in 3:21-26.
21. Fixed. Note 3:25 now says the gloss is "where sin is covered over".
22. Fixed. orig fixed in notes 1:17 (pisteos), 1:20, 3:9 and 3:23 (hysterountai). I changed the 3:9 transliteration to proechometha.
23. Fixed. Note 1:7 now reports Cassius Dio 60.6.6, and the date of the expulsion is marked as debated.
24. Fixed. Note 2:15 hedged: rare, with Ecclesiastes 10:20 and Wisdom 17:10 as clear cases.
25. Fixed. Note 2:13 states Trent session 6, chapter 7.
26. Fixed. Settings 1:1-7, 1:8-15 and 3:1-8 now say "probably" or "on one reconstruction" (Wedderburn, Lampe), and the book.json Claudius section and `audience.why` likewise.
27. Fixed. Works are labeled at first use in notes 1:20 (already), 2:1, 2:4, 2:11, 3:23, 3:25, 4:2, 4:11, 4:13, 4:17, in the ch1 and ch4 readings and ch4 deep dive, and in the topics abraham, image-of-god, promised-land and idolatry.
28. Partly. (a) 1:1 and (c) 3:25 entries added, from the edition data. (b) Declined: the 4:12 double article "tois ... tois stoichousin" is in both the SBL and Byzantine texts, so no variant exists there; the only difference is word order (and the article tei), which does not change the English.
29. Fixed. 4:1 entry rewritten; the three readings tied to the editions (Westcott-Hort omit the verb). Metzger's reasoning is not summarized, since it could not be checked; the entry says only that he discusses the verse.
30. Fixed. 2:8 entry rewritten: the editors follow the critical order, KJV words tied to thymos and orge, and the Revelation 16:19 comparison removed.
31. Fixed. 1:31 retitled "Implacable" in the list of vices; `metzger` removed from its key (and from 2:8 and 3:22, which he was not checked for).
32. Fixed. ch2 `C` no longer says "without a main clause" and labels the dictation idea a view.
33. Fixed. 2:12-16 Orthodox row now cites Ware and is flagged for the lead to verify; 4:11 Anabaptist row cites Schleitheim and Calvin's Institutes 4.16; the 3:21-31 Orthodox row no longer says the Orthodox did not take part in Western debates (it names the Lucaris and Dositheus confessions).
34. Fixed. 3:21-31 Lutheran row cites the Smalcald Articles II.1 for the chief article and Augsburg 4 for the teaching.
35. Fixed. Note 3:21 marks Luther's account as his own late recollection and says historians date the tower experience differently.
36. Fixed. Note 3:3 states the link to 3:22 as one proposal and says the question there is a different one.
37. Fixed. ch3 `H` now cites Philo (Special Laws 2.193-203) and Suetonius (Augustus 76) instead of an unsourced claim about Rome.
38. Fixed. topics `paul`: "the only undisputed one".
39. Fixed. topics `romans`: reworded.
40. Fixed. topics `textual-history` and book.json: P46 is the oldest large copy, and its surviving leaves begin at 5:17; chapters 1-4 rest on fragments such as P40. P27 was not used (the review's P27 claim could not be confirmed).
41. Fixed. Note 1:26 names Augustine (On the Good of Marriage); the locus is to be checked by the lead.
42. Fixed. Note 1:5: Dei Verbum quotes the first sense; the other two are positions of commentators.
43. Fixed. Note 3:17 quotes Luke 1:79 exactly ("onto the road of peace").
44. No change needed here (Plain English Translation of Jeremiah 2:11, 10:14, Zechariah 14:9, Amos 3:2 and Daniel 7:18 do not yet exist); added to the lead's alignment list.
45. Listed for the lead (see report).
46. Partly. Note 3:20 (works of the law) is rewritten with labeled short pieces; notes 1:7 and 3:22 left as they are.
47. Partly. Note 4:11 now says the card gives four answers and that other churches answer in their own ways; no Lutheran, Orthodox or Methodist rows added, since no source was verified.
48. Fixed. Note 3:10 names the Vulgate and "some Septuagint manuscripts" in place of "Greek and Latin copies".
49. No fix needed.
50. No fix needed; the departures noted in items 9 and 14 are fixed. Lead decisions applied: "brothers" gloss and note with Acts 1:15, 21:17, 28:14 at 1:13; 3:5 "injustice/unjust" (note explains the Greek root elsewhere stays "unrighteousness"); 3:20 "flesh"; workshop wording removed ("lead decision", "editor may override"); no ELCA 1994 declaration claim occurs in this part.
