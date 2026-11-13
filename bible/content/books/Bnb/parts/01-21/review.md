# Hostile review: Epistle of Barnabas (Bnb), part 01-21

Reviewer: separate agent, 2026-11-12. Checked against `texts/orig/Bnb.json` (every verse, Greek against plain.txt), `texts/src/Bnb.app.json`, Lake's OCR in `.cache/dl/lake-ia/`, the Didache's `plain.txt` 1-6, the site's own verse wording by script, and (opened this session) newadvent.org (Origen, Against Celsus 1.63), Sefaria (Mishnah Menachot 11:7) and vatican.va (Nostra Aetate 4). `node tools/build.js --check Bnb/01-21`: 0 errors, 0 warnings. No em-dashes anywhere.

## Verdict

A careful, honest piece of work. The translation is faithful: I found no dropped clauses, no wrong names or numbers, and the Two Ways (18-20) follows the Didache's Plain English Translation word for word where the Greek matches and differs only where the Greek does. The hostile claims about Jews and the covenant are named plainly and set against Romans 9-11, Genesis 17 and Hebrews, with Nostra Aetate 4 checked and quoted correctly. The weaknesses are in a few translation choices that sharpen the text against Jews (4:8, 14:3 "broken the law"; 16:2 "made him holy"), one invented-looking attribution (Lake's margin at 11:9), one overstated claim about Celsus (5:9), a cluster of sweeping unsourced statements ("No church ...", "Jewish readers have always ...") that break STYLE rule 2, a few Lake footnotes that never became variant entries, and padding in the notes. Nothing is critical; the majors should be fixed before review sign-off.

Counts: 0 critical, 10 major, 33 minor (findings 11-43).

## Major

1. **Major. notes.json, 11:9 note "A quotation of uncertain source".** It says "Lake's margin compares Zephaniah 3:19." Both OCRs of Lake's page print the margin at 11:9 as `Cf. Wisd. 3,19` / `Cf. Wisd. 8,19` (apparatus file: `"Cf. Wisd.3, 19"`); there is no Zephaniah in Lake's margin. The Zephaniah parallel comes from the writer's own Septuagint search (sources-checked.md lists "Zep 3:19 (Swete)"), not from Lake. Wisdom 8:19-20 (a good soul entering an undefiled body) fits the "vessel of his Spirit" that follows. Fix: say Lake's margin points to the Wisdom of Solomon (give the number the page image shows; the OCRs disagree 3/8), say the Zephaniah and Ezekiel parallels are the site's, and add the Wisdom of Solomon (a work the site has) to the note's refs. Verified in two OCRs; the page image was not available.

2. **Major. notes.json, 5:9 note "Apostles 'lawless beyond every sin'" (and its `p`).** The `p` says the line "was quoted by the pagan critic Celsus, as Origen reports." Origen, Against Celsus 1.63 (newadvent.org, read this session) says only that the apostles are so described in the catholic epistle of Barnabas, "from which perhaps Celsus took the statement that the apostles were notoriously wicked men." Celsus is not said to have quoted Barnabas. The body also says "The line was used against Christians," which goes beyond Origen. Fix: "Origen suggests Celsus may have drawn his charge from this letter."

3. **Major. plain.txt 4:8 and 14:3, "have broken the law".** Greek `ἠνόμησεν` has no object. The site renders the ἀνομ- family "lawlessness / lawless" (4:1, 4:9, 5:2, 5:9, 14:5 in this very part; terms.json), the site's Exodus 32:7 has "have ruined themselves", and the Law had not yet been given in Exodus 32 on Barnabas's own story. "Broken the law" adds a noun and sharpens the charge against Israel. Fix: "have acted lawlessly" (keep one rendering in both verses), with the Exodus 32:7 wording named in the existing note at 4:7.

4. **Major. plain.txt 16:2 and note 16:1 canon, "made him holy in the temple".** `ἀφιέρωσαν αὐτόν` is "dedicated / consecrated him" (God "shut up" in a sanctuary, as the nations dedicate a god to a shrine). "Made him holy" says Israel made God holy, which is not the sense and makes the charge read as nonsense. The 16:1 canon note then builds on the wrong English. Fix: "they dedicated him in the temple almost the way the nations do", and quote that in the note.

5. **Major. plain.txt 7:8, "The fruit of the rachel is the only sweet part of it."** Greek `οὕτω μόνης τῆς ῥαχοῦς οἱ καρποὶ γλυκεῖς εἰσιν` is "only the rachel's fruits are sweet" (as with that bush, unlike similar thorny plants); it does not say the fruit is the only sweet part of the plant. Lake's English gives the Greek's sense. Note 7:8 ("fruit was sweet") then disagrees with the translation. Fix the verse; keep the note.

6. **Major. plain.txt 13:2-13:5, who-does-what and "greater".** (a) 13:5 "He wanted Manasseh to be blessed ... so Joseph brought him" follows Jacob's speech in 13:4, so a reader takes "he" as Jacob; the Greek subject is Joseph. Name Joseph. (b) 13:2 "the greater will serve the lesser" followed at once by 13:3 "this people is greater than that one" makes the argument contradict itself in English: in the quotation "greater" is the elder (Esau/Israel) who serves, in 13:3 "greater" is the favored people. Note 13:2 says Barnabas "plays on greater" but the plain text gives the reader no way to see it. Fix: render 13:3 with a different word ("this people ranks above that one", the sense of `ὑπερέξει` in 13:2), or add the explanation to the note.

7. **Major. notes.json 16:5 "The fall of Jerusalem", 16:7, and chapters.json settings (24 times).** (a) "The verse shows the letter was written after AD 70" and "the destruction ... by the Romans in AD 70" are stated as settled. The quoted "Scripture" (1 Enoch 89:56, 66, as the preceding note itself says) is about the Babylonian destruction, the verse does not name Rome, and note 16:3 says the verse "cannot settle the date." Rule 7 of the reviewer brief: a debated date is not to be stated as settled. Say "most readers take this as AD 70; the words could also look back to Babylon." (b) "mostly Gentiles who had once served idols (16:7)" and "The words show that the writer and his readers were mostly Gentiles" are stated as fact in note 16:7 and in every `readers` line. Lake says nothing of the sort; 16:7 is "we", which may be a rhetorical "we". Hedge with who argues it, or drop.

8. **Major. Sweeping unsourced claims about churches and Jewish readers (STYLE rule 2; fairness; lens J).** "No church today teaches Barnabas's view" (notes 4:6, 9:4, 14:1; chapters 4, 9, 14; topics), "No church accepted Barnabas's claim" (chapter 9), "Jewish readers have always held / pointed out / read the land as the land" (notes 4:14, 10:12; chapter 11 or 6), "Jewish readers have answered that the rites ... as the Mishnah's detailed rules show" (note 8:7), "Jewish readers have rightly seen this as a deep insult" (chapter 9: editorial, and the site is not to take a side), "Jewish tradition holds that the covenant with Israel stands forever" (chapter 4). None rests on a source opened. The "always" claims are also false as stated: Philo and the midrash read the law and the land allegorically (the writer's own note 10:1 says so). The brief asked for how Jewish scholars read the book; no Jewish scholar or source is named anywhere in the part. Fix: delete "always / rightly / no church" or source each (Nostra Aetate 4 is sourced; a catechism or confession per church family, or a named Jewish scholar read this session, would do). "No church accepted" is wrong in any case: Sinaiticus and Clement of Alexandria used the letter.

9. **Major. notes.json 6:17 "Honey, then milk".** "Barnabas assumes his readers know the custom of touching a newborn's lips with honey" and the `p` ("an ancient custom of giving a newborn honey first. Christians later gave milk and honey to the newly baptized") have no source in sources-checked.md (the Apostolic Tradition is listed as not opened). Verify (Lake's or a lexicon's note, Tertullian, Hippolytus) or cut to what the text says.

10. **Major. variants.json: Lake footnotes with a change of sense left out, or reduced to vague notes.** The brief names 12:10 and 14:1; both are missing, and the notes hand-wave ("Lake's footnote shows small differences in word order", note 12:10; "small difference in the word 'disobedient'", note 12:4; "a shorter text in some copies", note 17:1). Also missing as entries: 6:9 (φησίν in ℵ corrector, C, L and Clement of Alexandria; absent in ℵ first hand and G: it appears only inside a note), 7:7 (ποιήσωσιν ℵ against ποιήσουσιν C G, "what are they to do" against "what will they do"), 14:1 (ζητῶμεν, and G's regrammaring), 17:1 (ἐπιθυμίᾳ in ℵᶜ G against first hand; "in my eagerness" depends on it), 14:3 (G L add "the tablets"). Either make each an entry or state the facts exactly in the note. Note the plain text at 17:1 translates the longer text.

## Minor

### Translation (plain.txt)

11. 1:5 "a short letter": `κατὰ μικρόν` is "a little at a time / in small part"; "letter" is added (πέμπειν has no object).
12. 1:7 "come nearer to the fear of him, with a richer and a higher offering": `προσάγειν` is transitive ("bring / offer"); the English blends two readings and loses the transitive one. Note 2:9 has the same blend (`πῶς προσάγωμεν αὐτῷ`).
13. 4:3 "last and complete": `τέλειον` is "perfect, full"; "last" is not in the Greek (note 4:3 and the chapter heading both lean on it). Choose one word and say why.
14. 4:14 "so that we are not found to be what is written": the brief says keep the formula; `ὡς γέγραπται` is "as it is written". The English turns the formula into a description of the readers.
15. 7:7 "'Cursed,' he says, 'is the one.'" is not English. "One of them is cursed."
16. 7:11 "see me and reach my kingdom": `ἅψασθαι` is "touch / lay hold of" (the note says "touch").
17. 9:4 "clever lies": `ἐσόφιζεν` is "was being clever with them / tricking them"; "lies" is added, and the gloss repeats it. 9:7 "learn the full truth": "truth" added (`πλουσίως`, "richly").
18. 11:11 "hope in Jesus in our spirit": Greek `ἐν τῷ πνεύματι`, no "our"; the Spirit is as likely.
19. `ἀκεραιοσύνη` is "purity" at 3:6 and "innocent" at 10:4; `μελετάω` is "practice" at 4:11 and "think deeply" at 11:5, 11:10; `φθορεύς` is "seducer" at 10:7 and "destroyers" at 20:2 (same word as Didache 5:2). Pick one each or note the choice. Note 10:6 says "the site uses the same plain English" for 10:6 and 19:4; it does not ("one who abuses boys" against "sexually abuse boys").
20. 10:5 "living in the mud": `ἐν τῇ γῇ`, no "mud". "These fish alone are cursed in the same way": "in the same way" added.
21. 16:2 "the span of his hand ... with his palm": Greek has `σπιθαμῇ ... δρακί` ("with a span ... with a handful"); "of his hand" is added.
22. 12:8-9 "Jesus son of Nun": the brief fixed "Joshua ... with a note on the shared name". The writer departs, with a good reason (the argument is the name), and the note and gloss explain it. Defensible; the lead must confirm and record it in terms.json.

### Notes and chapter pages (facts, sources)

23. Note 5:13 `p`: "Three psalms are joined": the verses are Psalm 22:20, 119:120 and 22:16, two psalms.
24. Note 5:14 cites Luke 9:51 as a Gospel telling of Jesus being struck and spat on. Luke 9:51 is "he fixed his face firmly on going to Jerusalem" (echo of Isaiah 50:7, "my face like flint"). Luke 22:63-65 is the verse for striking.
25. Note 4:5: "In Daniel 7:3 the beasts come up out of the sea, which is why most copies say 'sea'": a cause stated as fact. "Which fits" is what the variant entry says.
26. Note 10:6: "(in the Latin of the page the site read)": garbled, and the sort of hedge STYLE rule 2 forbids. Say which edition or translation of Clement was opened. "Modern study confirms none of the three claims" has no source.
27. Note 10:3: "The proverb that the pig does not know its master is Barnabas's own": unsourced.
28. Note 7:10 "never as a figure of a person": Jewish tradition also reads Azazel as a being (a demon or fallen angel, as in the 1 Enoch tradition the site holds). Say "the goat" and drop "never".
29. Note 7:3 and 19:5: "In Jewish tradition the Akedah is recalled in the prayers of the New Year" and "Exposing newborns was legal and common ... Jewish writers condemned it" are unsourced.
30. Note 7:6 and 7:8: the Mishnah checks (Menachot 11:7: the Yom Kippur goat sin offering eaten at night when the day falls before a Sabbath, Babylonians eating it raw: verified on Sefaria) are accurate, but 7:4's "the Babylonian priests" is the writer's gloss (the Mishnah says "the Babylonians"). Say so. Menachot is about the offered goat, not the scapegoat; the note's last sentence ("Barnabas may know a Temple custom of this kind") reaches from raw meat to "gut unwashed with vinegar", which is not in the Mishnah.
31. Note 8:6 "a medical fact of his day": call it a claim; nothing here is verified as medicine.
32. Note 12:2: "Moses piled up weapons and stood on them": Greek says he stood "higher than all"; "on them" is added. (The plain text 12:2 is right; the note is not.) Plain: "weapons ... one on another": Greek `ὅπλον` is singular.
33. Note 13:2 `p`/body: "in the same order Paul cites it" has no meaning (Paul quotes Genesis 25:23 only).
34. Note 4:3 and 16:5: "1 Enoch is Scripture today only in the Ethiopian Orthodox Tewahedo Church" (4:3). The Eritrean Orthodox Tewahedo Church is a separate church that shares the canon. Check the site's 1 Enoch book.json wording and match it.
35. Note 7:9: "Justin Martyr, writing about AD 155": a date for the Dialogue that no opened source gives. Remove or source.
36. Note 15:5: "Lake's margin compares Isaiah 30:26": the apparatus file reads `EI. 30, 8` and the OCRs lose the margin. Not verifiable; confirm on the page image or drop "Lake's margin".
37. Note 12:10 `p` "Barnabas says the Christ is not David's son" overstates 12:11 ("does not call him son"); the note's body is more careful. Align `p`.
38. Note 6:13: "which Lake's margin compares" hangs ambiguously on the list; Lake's margin gives only Matthew 19:30; 20:16 for 6:13.
39. Note 0 (1:1): "Clement of Alexandria, about AD 200" adds a date to Lake's sentence; keep Lake's words or source the date.

### Mechanics and density

40. chapters.json `settings`: 24 of 25 `readers` fields are the same sentence copied (Christians ... Alexandrian ideas ... "end of the first or beginning of the second century"). Boilerplate; keep it once on chapter 1 and give each block its own readers line or none. Chapter 7 has no setting for 7:1-2.
41. Note density (185 notes, 194 verses): candidates that add nothing beyond a cross-reference or repeat another note or a variant entry: 1:4 (way of righteousness), 1:3 (Joel), 4:3 (days cut short), 4:12 (without favoritism), 6:4 (Psalm 118:24), 7:1 (children), 9:6 (seal, repeats the 9:6 history note), 9:9 (repeats 9:8), 15:2, 15:5, 16:8 (repeats 6:11-15 note), 16:10, 19:2, 19:9, 19:11, 20:1, 21:3, 21:9 (repeats the 1:1 note and the 17:1 note on Lake's canon sentence). Notes that restate a variant entry nearly whole: 3:4, 3:6, 5:10, 6:3, 9:2, 10:5, 14:9, 19:7, 21:8, 12:2, 16:9 (the last, 14:3 and 17:1 have no variant entry at all, see 10). Merge into the variant `why` or cut about 15 notes.
42. Notes at 2:4 and 4:6: "Most readers, Jewish and Christian" and "Some readers" are consensus/dissent claims with no named holder (STYLE rule on consensus).
43. Lake's printed slips: the writer reported 5:13 (`ἐπανέστησάν νέστησάν`) and 11:8 (`οἲ`) and the slip in 10:11 (`διδαιώματα`); none belongs in variants (agent brief). Report them to the lead for `tools/lake-fixes.json`; confirm that report exists.

## What was checked and found sound

- Translation, all 194 verses: no omissions or additions of substance beyond those listed; 1:6 follows C and says so; 3:4 follows the manuscripts; 6:3 follows G with reason; Isaiah, Psalm, Genesis and Acts quotations match the site's wording where the Greek matches (Acts 7:49, 8:32, 13:47; Hebrews 3:5; Psalm 1:1; Exodus 20:7; Romans 9:12 deliberately not followed at 13:2, with a note).
- Two Ways 18-20 against content/books/Did/plain.txt 1-6: agrees word for word where the Greek agrees (Did 2:2, 2:3, 2:6, 2:7, 3:8-3:10, 4:1-4:14, 5:1-5:2); differences are real Greek differences and are in notes. The "fresh" renderings are sound ("crooked", "light-bringing angels", "quick to speak").
- Quotation from Lake's introduction at 4:4, 16:3, 17:1, 21:9, 1:1 (not the date at 1:1): correct against the OCR (lines 17009-17140). Nostra Aetate 4 quoted correctly. Menachot 11:7 verified on Sefaria. Hebrews/Romans/Genesis comparisons at 4:6, 9:4, 10:2, 12:10, 14:1, 15:6 are accurate and the conflicts with the 66 are stated plainly, with each view fairly given.
- Terms: `κύριος`, `δεσπότης`, `παῖς`, `ξύλον`, `σταυρός`, `διαθήκη`, `ὁ μέλας`, `τύπος` (6:11 explained) are consistent. "The Jews" is never added to the translation.

## Fixes applied


Fixer, 2026-11-12. Sources opened this session: Lake's OCR (both scans), the Jewish Encyclopedia "Barnabas, Joses" and Ladeuze's Catholic Encyclopedia "Epistle of Barnabas" (full texts), Origen, Against Celsus 1.63 and Tertullian, The Crown 3 and Clement, Instructor 2.10 (New Advent), Rashi on Genesis 1:26 and Mishnah Menachot 11:7 (Sefaria), Swete's Greek of Exodus 32:7, Leviticus 23:29, Isaiah 40:12 (tools/lxx.py), the site's plain.txt of every verse quoted.

1. Accepted. Note 11:9 now says Lake's margin points to the Wisdom of Solomon (no number: the OCRs disagree and no page image was available), quotes Wisdom 8:20, and marks Zephaniah 3:19 and Ezekiel 20:6 (now in the site's wording) as the site's parallels; refs updated.
2. Accepted. Note 5:9 quotes Origen's sentence whole ("from which perhaps Celsus took the statement...") and says Origen does not claim Celsus quoted the letter; the unsourced date AD 248 removed.
3. Accepted. 4:8 and 14:3 "have acted lawlessly"; note 4:7 gives the Greek Exodus 32:7 and the site's "have ruined themselves"; term proposed in proposals/works/terms.json.
4. Accepted. 16:2 "they dedicated him in the temple"; note 16:1 quotes the new wording.
5. Accepted. 7:8 "So the fruit of the rachel alone is sweet."
6. (a) Accepted: 13:5 names Joseph. (b) Partly: 13:3 keeps "greater", because Barnabas uses the same word (meizōn) there; note 13:2 now explains the two senses.
7. Accepted. Note 16:5 rewritten: AD 70 is Ladeuze's reading (Titus), with the Jewish Encyclopedia's "then recently destroyed", and the note says the verse does not name Rome and its quotation is about Babylon. Gentile readers: note 16:7 and the chapter 1 readers line now give Ladeuze's view and the Jewish Encyclopedia's (after Güdemann, a converted Jew) as views.
8. Accepted. Every "No church ...", "Jewish readers have always ...", "rightly", "Jewish tradition holds ..." removed (notes 4:6, 4:14, 8:7, 9:4, 10:12, 14:1; chapters 2, 4, 6, 9, 13, 14, 15; topics covenant, canon) or replaced by named sources: the Jewish Encyclopedia (anti-Judaic spirit; familiarity with the rites; Güdemann), Ladeuze, Rashi, the Mishnah, Nostra Aetate 4. "No church accepted" (chapter 9) cut.
9. Accepted. Note 6:17 rests on the verse's own words and on Tertullian, The Crown 3 (opened; new key tertullian-crown-3); the unsourced newborn custom cut.
10. Accepted. New variant entries 6:9, 7:7, 12:4, 12:10, 14:1, 14:3, 17:1 (17:1's shorter-text sigla are illegible in both scans, and the entry says so); the vague note sentences (12:4, 12:10, 17:1, 14:2, 6:9) now point to them.
11. Accepted. 1:5 "send you a small part of it".
12. Accepted. 1:7 "bring a richer and a higher offering in the fear of him"; 2:9 "bring our offering to him".
13. Accepted. 4:3 "The complete stumbling block"; heading, chapter title ("The Stumbling Block Draws Near"), notes and topics follow.
14. Accepted. 4:14 "so that we are not found to be, as it is written, 'many called, but few chosen'"; note gives the site's Matthew 22:14 and Ladeuze's reading.
15. Accepted. 7:7 "'The other one,' he says, 'is cursed.'"
16. Accepted. 7:11 "lay hold of my kingdom".
17. Accepted. 9:4 "an evil angel was tricking them" (gloss changed); 9:7 "learn richly".
18. Accepted. 11:11 "in the Spirit".
19. Accepted: ἀκεραιοσύνη "purity" (10:4 "as if in purity"), μελετάω "think deeply on" (4:11), proposed in terms. φθορεύς: declined to unify (10:7 "seducer" beside "adulterer"; 20:2 "destroyers of what God has formed", as Didache 5:2); note 10:6 now says so and drops the wrong "same plain English" sentence.
20. Partly. "living on the ground" for ἐν τῇ γῇ; "Just so" kept, since ὡς καί is in the Greek.
21. Accepted. 16:2 "with a span ... with a handful"; gloss changed.
22. Kept, as the reviewer allows; recorded as a term proposal for the lead to confirm.
23. Accepted ("Two psalms").
24. Accepted (Luke 22:63-64).
25. Accepted (causal sentence cut).
26. Accepted. Note 10:6 names the Ante-Nicene translation at New Advent (which leaves the passage in Latin); "Modern study ..." cut.
27. Accepted (now "No book of the Bible has the saying").
28. Accepted (note 7:10 rewritten from Leviticus and Mishnah Yoma).
29. Accepted. The Akedah and exposure sentences cut.
30. Accepted. Note 7:4 says "the Babylonians" (and that the Sefaria English explains them as priests from Babylonia), the offered goat, and that the Mishnah has no entrails or vinegar; chapter 7 and topic day-of-atonement follow.
31. Accepted ("a claim about medicine").
32. Partly. Note fixed ("piled one weapon on another"); plain kept: ἓν ἐφ᾽ ἓν ὅπλον is distributive, "weapons one on another".
33. Accepted.
34. Accepted ("the Ethiopian and Eritrean Orthodox Tewahedo churches", as the 1 Enoch book.json), notes 4:3 and 16:5.
35. Accepted (date removed, note 7:9 and chapter 7).
36. Accepted (note 15:5 cut).
37. Accepted (`p` aligned; Ladeuze's Ebionite reading added).
38. Accepted.
39. Accepted (date removed).
40. Accepted. readers lines removed from 20 settings; specific lines for chapters 1, 3, 4, 9, 15, 16, 18 and 21; chapter 7 setting now 7:1-11. Settings views at 4:1-14 now credited to the Jewish Encyclopedia and Ladeuze.
41. Partly. 17 notes cut (1:3, 1:4, 3:4, 4:3 days, 4:12, 6:3, 6:4, 7:1, 9:6 seal, 9:9, 15:2, 15:5, 16:8, 16:10, 19:11, 21:3, 21:9); variant-restating sentences trimmed in 3:6, 5:10, 6:13, 9:2, 10:5, 12:2, 12:4, 14:9, 16:9, 19:7, 21:8. Declined for 19:2, 19:9 and 20:1: they record real differences from the Didache, which the batch brief requires.
42. Accepted. All unnamed "some/most/many readers/scholars" in the part restated as possibilities or credited to opened sources (also 1:8, 2:6, 4:10, 4:13, 5:2, 5:5, 5:7, 6:18, 12:10, 15:4, 15:9, 17:2, 19:1, 19:5, 19:7; topics two-ways, millennium); "oldest witnesses" in variants named.
43. Done. Slips reported in proposals/works/build.md: 5:13 and 11:8 digital slips; 10:4 προίζει and 10:11 διδαιώματα are misprints on Lake's printed page (both scans), not digital slips.
Also: Barnabas 19:7 aligned with the reviewed Didache 4:10-11 ("your slaves, men or women"; "with modesty and fear").
