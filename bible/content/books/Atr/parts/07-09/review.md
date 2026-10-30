# Hostile review: Atrahasis (Atr), part 07-09 (chapters 7-9)

Reviewer's method: every verse read against `python tools/akk-literal.py Atr 7|8|9` and `texts/src/Atr.score.json`; SEAL's Tablet II page (`.cache/dl/seal/node39732.html`, text, translation and commentary) and Tablet I page (node1515) read in this session; Millard's Tyndale Bulletin text (`.scratch/Atr-01-03/millard.txt`) read for the lines quoted; every Bible quotation in notes, chapters, topics and the famine core checked by script against the Plain of all other books (all matched); `VERBOSE=1 node tools/build.js --check Atr` is 0/0. I could not open the copyrighted editions (Lambert/Millard, Foster, Dalley), so "dependence" below is measured only against SEAL's own printed English, which the brief forbids copying. Nothing was confirmed from memory; where I could not verify something I say so.

## Verdict

A careful, honest piece of work. No invented source, witness, museum number, scribe or reading was found: every siglum, museum number, column/line label and colophon detail I checked matches SEAL, the "(lost)" labels do not claim more than the line labels show, and the viewpoint is fair (the critical view is not caricatured, the believing answers are given with Millard as holder, nothing argues against the LORD or his Son). The problems are of five kinds. (1) Many chapter `settings.readers` fields name witnesses that do not contain the lines in question (B, H, I, C0, X, Y are listed for speeches they do not preserve). (2) In several places the Plain follows SEAL's printed English, or SEAL's interpretation of a broken line, where the literal Akkadian does not force it, and a few uncertain or restored readings are given as plain text. (3) One real translation/syntax error (8:92). (4) Some conclusions and views have no named holder or go beyond the evidence (the "poem admits its god is unjust" reading, "bitter laughter", "anger at the plenty", the invented alternative speakers). (5) Cross-part wording drift in the repeated passages and colophon. The 78 variants should be cut by about two thirds in presentation (finding 11).

Findings by severity: **0 critical, 7 major, 21 minor.**

---

## Major

**1. (major) chapters.json, `settings[].readers` in all three chapters: the witnesses named are wrong for many speeches.**
The same boilerplate is attached to speeches whatever the copies are. Checked against `score.json`:
- Ch 7, 7:27-43 says the lines "come from the Sippar copy B ... and from other Old Babylonian copies (D, H, I, C0)". Only B, D and be have these lines; H, I, C0 do not.
- Ch 7, 7:9-24 lists "Middle Babylonian scribes at Babylon (copies X and Y)" and S+T. X and Y do not contain 7:9-24; the Neo-Assyrian Q (Sm. 292, Nineveh) and be do, and Q is not named.
- Ch 8, 8:20-26, 8:41-54, 8:110-118 and ch 9, 9:14-21, 9:24-37, 9:106-123, 9:128-137 (partly), 9:140-163 (from 9:147) say the lines "come from the Sippar copy B". SEAL's table lists B only for Seg. B 1-20, E 29-48, H 7-19, I 3-5, 7a-k (that is 7:27-43 area, 9:134-146 and 9:166-175). B has no preserved text of ch 8 or most of ch 9. B did once hold them (439 lines), but "come from" says the Plain's witness is B.
- 9:14-21 also lists C0 and I; only D and H have it.
Fix: regenerate each `readers` from the real witness list (script over `score.json` sigla for the verse range), and if the point is "Ipiq-Aya's 439-line tablet once held these lines", say that in those words ("these lines stood in Ipiq-Aya's tablet, now lost here; the Plain reads D and H"). Keep the reading of the first hearers (scribes and pupils) but not the false provenance.

**2. (major) plain.txt: Plain wording that follows SEAL's printed English rather than the literal line (agent-writer-world.md: "any English that SEAL itself prints" must not be leaned on; "the Plain must come from the literal line").** Unforced cases:
- 8:36 "Ask him how his land is faring, and tell me." The Akkadian (be) is "ask him and tell me the word (amat) of his land"; SEAL prints "ask him, how fares his land". "how ... is faring" is SEAL's reading, not the line's.
- 8:45-46: the pair of questions "Was it the water? Did I make the river carry it in the night?" reproduces SEAL's two-question frame ("Did I make water (and) river bring (it) in the night?"). The Akkadian lines (I: "mê ina mūši ušābil nāra") have no question particle. Either keep one question and a note, or render the clauses without the invented "Was it the water?" split.
- 8:108 "they crossed the water to the shore": the line says "in front of the sea (qudmiš tâmtim) they crossed". "To the shore" is SEAL's interpretation (its commentary E 163: "from the midst of the sea to the shore"; its translation prints "(sea) to the shore (lit. front of the sea)"). Use "... in front of the sea they crossed" and put SEAL's reading in the note.
- 8:113 "... let it be what you desire." The score gives no meaning for *ṣirimka*; "your wish" comes only from SEAL's print (SEAL: "lū ṣirimka after von Soden"; Groneberg read it differently). Use "... let it be ..." and a note naming von Soden and Groneberg. The gloss at 8:113 ("please, as you wish") compounds it.
- 8:118 "let me live there with you": "there" is the parenthetical "(there)" SEAL itself adds; the Akkadian is "let me sit in front of you".
- 8:7 "incense offerings": the Akkadian and SEAL's gloss are "incense"; "incense offerings" is SEAL's English.
- 8:110 and 9:136-137 "Enki the prince", "the expert, the prince Enki": SEAL's English word for *niššiku* (score gloss: "a title of Ea"). Part 01-03 has the same word at 1:16, so this is a book-level choice; decide it consciously ("ruler"?) or accept it.
- The shared formula "Do not revere your gods; do not pray to your goddess" and "Bring a baked loaf" (7:17-20) is word for word SEAL's print ("Do not revere your gods! Do not pray to your goddess! ... Bring a baked loaf ..."). The glosses are "fear, revere" and "appeal" (*tusallâ*), and the variants' own `en` columns say "plead". It was fixed in part 04-06, so this is a lead decision, but "pray to" is not forced.
- 9:20 and 9:36 "the sea's bounty": SEAL prints "abundance (of the sea)", the "(of the sea)" being its own addition. The score gloss is "produce (of the sea and rivers)", so the idea is defensible; add a note that "of the sea" is read from the lexicon and context.
The drift-audit file claims "0 matches left that the Akkadian does not force"; the above are counterexamples. Describe-and-quote-a-few-words applies: none of these is a long copy, but 8:36 and 8:45-46 are the clearest.

**3. (major) plain.txt 8:91-92: broken syntax that makes the scales the subject.**
8:91 "The daughter watched the scales that weighed out her mother's price," then 8:92 "and the scales that weighed out the daughter's price ... watched." Akkadian: *zibānīt ummi mārtu inaṭal* / *zibānīt mārte inaṭal [...]* ("the daughter looks at the mother's scales / ... looks at the daughter's scales"). The subject of 8:92 is lost, not "the scales". Fix: "and ... watched the scales that weighed out the daughter's price." (put the gap before the verb). Also the "weighed out ... price" is SEAL's reading (E 161d-e "sold into slavery for silver"); it is cited in note 8:91, which is fine, but the Plain adds "price" that the Akkadian lacks. Consider "the scales of her mother" in the Plain and the sale reading in the note.

**4. (major) chapter 9 `views.C`, note 9:168, note 9:78/9:141, the topic `flood` "Whose evil?" claude box: "the poem admits that its high god is unjust".**
The line is *šipra lemna ana nišī ipuš Enlil* in D (SEAL gives "Enlil performed an evil deed on the people"). Problems: (a) the speaker of 9:166-168 is unknown (SEAL gives none; the note itself says so), the opening "Do not listen to evil" rests on one sign SEAL reads "with caution" and compares with Gilgamesh XI 120-121, where it is a god regretting his own words; (b) *lemnu* means "bad, harmful", not "unjust", and a speaker taking the Flood decree as harm to humankind does not show the poem's own verdict; (c) the verb in "ē tašmiā" is second plural, so the addressee is a group (the assembly?), not "perhaps Atrahasis" as the settings entry says, and the "perhaps Enki" speaker has no basis. STYLE rule 3 and the world brief both forbid stating a debated conclusion as settled. Fix: say "a voice in the assembly calls Enlil's decree an evil work (*lemnu*, 'harmful, bad')", give the alternatives (a dissenting god, Enlil's own regret as in Gilgamesh XI, a later comment), then draw the Christian contrast with "evil" as a statement of what the poem says, not "the poem admits its god is unjust". Remove "perhaps Enki ... to perhaps Atrahasis" from `settings` or restate it as "speaker and hearers not preserved; the verb is plural".

**5. (major) plain.txt 9:95, 9:97 and the headings/summary: "bitter laughter" follows von Soden against SEAL's own choice.**
SEAL (commentary G 64) says *ṣīḫtu* here is "vexation" (George 2009), with von Soden keeping "laughter", "taking it as a bitter one"; SEAL's printed English still shows "(bitter) laughter". The score gloss is "laughter". The Plain adds "bitter" (not in the Akkadian) in both lines, the section heading is "Enki's bitter laughter", the chapter summary says he is "laughing bitterly", gloss 9:95 says "angry, scornful laughing", while note 9:95 says "SEAL follows George". The four statements disagree. Fix: Plain "laughter ate at him" (the literal line) with the note giving George ("vexation") and von Soden ("bitter laughter"); neutral heading ("Enki troubled"); correct the summary and the gloss; correct the note's "SEAL follows George", or say exactly which SEAL's print follows.

**6. (major) Uncertain or restored readings given as sure Plain text (agent-writer-world.md: SEAL's "?" restorations become "..." or are explained).**
- 8:9 "the sage of the gods": SEAL restores *apkal* "tentatively" after von Soden and says *tamû* does not take *itti* and suggests *šumu*, "name", instead; its own print is "He adjured the [sa]ge(?)". The Plain gives it without a mark.
- 8:38 "and reached the quay of the Apsu": the verb in be is *ik*?-šu*?-du*?* (three question marks). The note in the variants admits it; the Plain does not.
- 8:66 "lies thrown face down": *saḫ?-pat?* (two question marks); "thrown" is not what the glossed verb (*saḫāpu*, "overwhelm, overturn") says, and "young man" is *eṭlu?*.
- 9:12 "He breathed the scent of apricot": subject unknown (note 9:12 says so; von Soden has "they"), and *armanu* carries "?"; yet the Plain says "He", and then 9:13 "He was full of rage" (restoration brackets) and the heading "Enlil's anger at the plenty" assign it to Enlil. The Tablet I-III parallel SEAL cites for G 13 is Tablet III vi 6, which points at Enlil's rage when the Flood is survived. Note 9:13 states "His rage is at the end of the famine: someone has fed the people" as fact; that is an inference from 9:20, not from the broken lines (9:2-11 are almost entirely lost). The chapter summary "The famine has ended" likewise. Mark as inference ("probably") and drop "at the plenty" from the heading.
- 9:117 "my arm was placed there by all of you": *šaknat* is SEAL's own restoration ("although the space is limited"); George read "tugged". Render "my arm was [placed?] ... by all of you", or "..." with the note.
- 9:135 "Let it go back into its socket": restoration *uppīša* after von Soden; fine with the note, but "it" for *šī*, "she" in the Akkadian, should be explained.
- 9:151 "the throne-bearer of ... lead on": fine. 9:144 "Am I the one to give birth to ...?" and 9:141 "Should I bring my hand down ...?" are rendered as questions; the Akkadian has no interrogative marker (SEAL prints "Can I lay my hands on ...!?" and "Am I to give birth ...?"). Note the reading in the 9:141 note, and give the literal "bring my hand to my people" as the alternative (the note's `orig` gloss has it, but not that the question is interpretive).

**7. (major) Fairness and naming: readings with no named holder, and invented alternatives (STYLE rule 3; agent-writer-world.md: "named holders").**
- `views.S` in all three chapters ("Christian readers who see real spiritual powers ...", "Others see only story") name no holder. Part 01-03's scratch folder shows Heiser's Deuteronomy 32:8 paper (`.scratch/Atr-01-03/heiser.txt`) was opened for the divine-council reading; use it (and Justin, already in 7:69 and ch7 `J`) so the S lens names who reads what.
- Note 7:67 "Some readers have taken it as rebellion or wrongdoing" and note 8:19 "Others have understood a sleep that comes in two parts": no holders. Name them (the site already holds `frymer-kensky-atrahasis`, `kikawada-quinn`, if opened) or delete.
- Settings 9:128-137 `views`: "Another god speaks ... could come from Enlil's side of the council" has no holder and no evidence (SEAL H 1-10 gives Mami, and says Enki's answer at H 11 is to the whole assembly). Delete or label as the writer's own idea.
- Setting 9:166-168 "perhaps Enki ... perhaps Atrahasis": see finding 4.
- Note 3 (7:11) says the council's rulings "are made by vote and can be dodged". The text has an oath and a hearing, not a vote. Remove "by vote".
- Note 8:1 "Alan Millard, a Christian Assyriologist": no opened source says this (his Tyndale Bulletin article does not); the book-level card calls him an Evangelical scholar. Say "the Assyriologist Alan Millard, writing in Tyndale Bulletin" unless the description is checked.

---

## Minor

**8. (minor) plain.txt 9:171 against part 04-06 5:53/5:83/4:63.**
04-06 writes "(Here the scribe marked a count of the lines: fifty-six.)"; 07-09 writes "(37 lines in this column.)". SEAL I 7a is explicit: the 37 gives the length of column viii of B. 5:83 "twenty-six" is, in the Tablet I parallel (416a "26 (lines)", 416b "416 (lines)"), a count of lines in a stretch, not necessarily a column. Recommend one wording for all three parts: "(Here the scribe marked a count of the lines: thirty-seven.)", with SEAL's inference (a 37-line column, so 34 lines are lost) in the existing note 9:171. The 07-09 form is shorter but states more than the line does.

**9. (minor) plain.txt 8:120 "like men" against 9:172 "were man" and 1:1.**
*kī amēli* is singular ("like man"); "like men" is plural and is Lambert/Millard's reading and SEAL's printed title. Part 01-03's 1:1 note says the Plain "keeps the bare wording", and 3:65 writes "When the Gods Were Man". Use "When the gods were like man" (or "were like a man") at 8:120 and note that the NA scribe added *kī*. The note on 8:120 already says it: fix the Plain to match, and align the numeral ("Tablet 1" 8:120, "Tablet 2" 9:172, "Tablet one" 5:85, "Tablet three" 12:105, "Second tablet" 3:65): use one form.

**10. (minor) Colophon wording across parts.**
5:87 "Written by the hand of Ipiq-Aya" / 9:174 and 12:110 "By the hand of Ipiq-Aya"; 5:88 "The month of Nisan, the twenty-first day." / 9:175 "Month of Shabatu, day 28." / 12:111 "Month of Ayyaru, day ..."; 5:89 "The year when King Ammi-saduqa" / 9:176 "The year King Ammi-saduqa built ..." (the "when" is missing; Sumerian *mu ... -e ... in-gan-dím-ma-a*, "the year that ... built"); 5:86 "Its lines" / 12:107 "Its count of lines". The lead should choose the 5:85-91 wording, which is the model, and conform 9:172-176 and 12:105-113. Gloss 9:176 says Dur-Ammi-saduqa is "a town the king built"; the book facts say "a fortress"; *dūru* is a wall or fort: make them agree.

**11. (minor) variants.json: 78 entries; 51 of them are not variants (answer to the writer's question).**
Entries titled "Words kept in another copy" (51: 7:32-38, 47, 48, 69-76; 8:23-48 in part, 8:58, 69, 82, 85, 87, 110, 112; 9:16-37, 137, 166-167) record only that one copy is broken where another has the words; the two readings never disagree. The brief does ask for the Plain's source to be recorded when the base copy is broken, so the writer followed it, but the result is a card with an identical "why" sentence repeated, a second reading that is just "...", and anchors on words like "your gods" or "and said" that tell a reader nothing. Recommendation: (a) keep the roughly 27 entries where copies really differ (7:24, 7:43, 7:58, 7:61, 7:77, 8:1, 8:2, 8:7, 8:13, 8:14, 8:17, 8:18, 8:21, 8:35, 8:45, 8:50, 8:78, 8:80, 8:81, 8:111, 9:31, 9:55, 9:92, 9:93, 9:98, 9:149 and 9:103's 'quarreled?' point as a note); (b) fold each contiguous run of pure fills into one entry anchored on the first verse of the run, with `b` naming the verse range and the copy that supplies it (for example "7:32-38: D is broken; be supplies the words"); the Plain's "..." marks already show the reader where lines are broken; (c) give the per-segment "which copy carries this stretch" information once, in the chapter `deep` box "How Tablet II is pieced together" (ch 7 has it; ch 8 and 9 do not, but they need it). If the build forces one anchor per verse, shorten the repeated `why` to one sentence and make the first reading's `w` carry the copy name. Smaller defects in the entries: 8:45 `en` "if Ea heard me, me" (stray "me"); 9:103 `orig` includes the restored verb in brackets but the entry's `why` says the Plain "leaves it out" while the Akkadian line shown includes it; the entry at 7:47-48 and 9:35-37 explain that "each copy keeps half", which is the one useful sentence, so keep that kind of `b`.

**12. (minor) plain.txt 8:76 and 9:88: "broad plain" against 6:27/6:39 "wide plain".**
8:76 *ṣēru parku* (= *palkû*, SEAL E 151 notes the l>r shift) is the same word as 6:27 and 6:39 *ṣēru palkû*, which part 04-06 renders "wide plain". 9:88 *ṣēra rapša* is a different word (*rapšu*, "wide") rendered "broad". Use "wide plain" for 8:76 (to match 6:27) and keep "wide" for *rapšu* (8:85 "wide shoulders", 9:38 "wide sea"); gloss 8:76 should follow.

**13. (minor) Other repeated-passage drift against 04-06 and 01-03.**
- 7:26 "He brought the elders together" / 8:134 "He gathered the elders" / 5:49 "He gathered the elders": same verb (*upaḫḫir*); use "gathered" and "at his house" (5:49 has "at his door"; the Akkadian differs, which note 7:26 explains).
- 7:63 "formed babies" against 5:79 "formed a baby": *šerru* is singular in both.
- 7:102 "their faces were covered" against 8:81 "Their faces were hidden, like malt kept covered": *katmu* is "covered" in both.
- *tertu* is rendered "instructions" (7:25), "message" (8:35, 8:39, 8:110) and "order" (8:107). Choose one for each sense and add a note (the word covers both).
- 8:107 "took up the order" is close to SEAL's "took the instruction"; "took the message" would match 8:35.
- 7:38-39 "let the gifts put him to shame ... let him wipe" (jussive, the Akkadian *libašma ... lišakkil*) against 5:46-47 "Then the gifts will put him to shame, and he will wipe": 07-09 is the more faithful. Note for the lead (04-06 should change).
- 5:43 "set a baked loaf before him" drops *bila* ("bring"); 7:20 has "Bring a baked loaf and set it before him", correct. Note for the lead.
- 7:19 "Look for Adad's door and his alone" (the question asked): correct and justified. The Akkadian is *Adad-ma šiʾâ bābšu*; the emphatic *-ma* is absent from the Tablet I line (*Namtar šiʾa bābšu*, 5:42), so the difference from 5:42 is real. It would help to say so in note 7:19 (it does not), and "and his alone" reads slightly stiffly; "Look for Adad's door, no one else's" would do.

**14. (minor) chapters.json `views.H` and `deep`: witness counts and lists.**
Ch 8 `H`: "assembled from at least eight copies": the score shows seven (D, H, I, X, Y, be, S+T). Ch 7 `H` omits Q-NA (which carries 7:2-10 and 7:9-24 with be); ch 9 `H` lists "D, H, I and C0 with ... X" and omits B, which carries 9:134-146 and 9:166-175.

**15. (minor) notes 7:84 and 8:97 "salt" and "devoured" (checked, no change needed except wording).**
*idrānu* is glossed "potash" in the score; SEAL's commentary (B 2) says "salt on saline fields" (Streck), so "salt" stands. For 8:97 "devoured", the verb *iriḫama* is preserved at 7:101, so the restoration has a parallel; fine. These are noted because the lexicon glosses differ from the Plain.

**16. (minor) note 9:19 (`spec`) and gloss 9:19: "*ulla* a collar or yoke".**
The score gloss for *ulla* is "(a garment)". SEAL prints "collar" at G 19 and "yoke" at G 33 and G 79. The note's claim is not sourced and is in a `spec` note headed "Claude's comparison", which mixes a lexical statement into a speculation. Move the lexical statement to a `word` note that says SEAL's lexicon gives "garment", SEAL's print varies between "collar" and "yoke", and the Plain uses "yoke" throughout (consistent with 3:78). The spec comparison (release/Jubilee, Luke 4:18) is good and fairly labeled.

**17. (minor) note 9:147 and chapter 9 `deep` "The gods of the flood": parallel to Gilgamesh XI.**
SEAL lists H 20-24 as parallel to Gilg. XI 100-103 and, in its commentary, says Šullat and Ḫaniš are "mentioned in Gilg. XI 99". The note says they appear "in lines 100-103". Fix the line citation (99 for the pair; 100-103 for the parallel set).

**18. (minor) `settings`: missing speech.**
9:125-127 (Enlil answers Enki; G 94-97, "Enlil opened his mouth and said [...] Ea") has no setting. Also the setting 9:128-137 says Mami speaks (SEAL's assumption, H 1-10) but note that 9:133-134 "I took it up and carried ..." is in the first person, which fits Mami as in Tablet I; fine, but add that SEAL says Enki's reply (9:139) is to the whole assembly.

**19. (minor) Unsourced general statements about Mesopotamia (STYLE rule 2; sources-checked.md lists no source for them).**
Note 7:20 (statues "served meals every day"), note 8:55 ("kissing the ground was how one greeted a king or a god's envoy"), note 8:91 ("families ... sold or pledged their own people"), note 9:80 (the oath order "follows the gods' rank"), note 8:10 ("sometimes by sleeping near a holy place after an offering"), note 7:11 ("high gods ran the world like a council of elders"), note 9:114 ("*ūm warḫim* is the day of the new moon, the start of a month"). Some are broad, well-known facts and may stay; others need a source from an opened page or removal. I could not confirm 9:114 independently: SEAL's English prints "By the day of the new mo[on]" and a search found the phrase "by the day of the new moon" only in SEAL's Larsa (C0) page (warḫu glossed "new moon, first day of month"). The Plain's "new-moon day" and the chapter 9 `deep` sentence "set for new-moon day" rest on that gloss alone; say "(SEAL's reading)" or render "on the day of the month" with the note.

**20. (minor) note 7:64 and topic `ancient-near-east`: Millard paraphrase.**
The topic says Millard found "human provocation leading to the Flood" common to both; his words (`millard.txt` line 479-480) are "the basic idea of disturbing deity is surely common to both narratives as the provocation leading to the decision to send the Flood". "Human provocation" slants it. Use his words. Note 7:23 has it right.

**21. (minor) topics.json: no `noah`, `flood` coverage beyond the oath; fine for this part, but `famine` contribution `uncommon` line.**
"Some readers see Atrahasis' plague, drought and famine as a parallel to the 120 years of grace in Genesis 6:3 (mentioned by A. R. Millard)" is accurate to Millard's footnote and his hedge ("a further theme ... may exist"); keep, but say "Millard reports the suggestion and finds the sexagesimal link possible". Also `idolatry` contribution opens with a stray `"'` pair.

**22. (minor) The new topic core `content/proposals/world/topics/famine.json`.**
Checked: no topic with id or `aka` famine, hunger, drought, dearth, starvation, siege, cannibalism exists in `content/topics/` (665 files) or `content/proposals/*/topics/`. Near neighbours exist and should be in `related`: `blessings-and-curses` (Leviticus 26/Deuteronomy 28), `fall-of-jerusalem`, `lamentations`, `harvest`, `fasting`; the core lists only flood, plagues and manna. Every Bible quotation in it matches the current Plain (checked by script). `sources` is empty; fine. Verdict: acceptable as a new core; add the `related` links.

**23. (minor) chapters.json ch 7 `deep` spec box and ch 8 spec box.**
Both are labelled and reasonable. The ch 7 box ends "I know of no source that links these two texts directly": STYLE rule 4 wants "where they overlap with published scholarship", which this phrase does not say. Either state what was searched (Millard's article, the sources already in the book), or drop the sentence. The ch 8 box says "later Jewish and Christian writers called Noah a 'herald of righteousness' (2 Peter 2:5)": 2 Peter is itself a Christian writing; "later" and "Jewish" are not supported by that verse. Say "2 Peter 2:5 calls Noah a herald of righteousness".

**24. (minor) glosses.json.**
No wrong glosses found. 8:113 (see 2), 9:95 (see 5), 9:176 (see 10). 9:135 "be undone" is von Soden's reading, not the plain sense of "socket"; add "(a reading)". 7:67 "grew gloomy: were upset" flattens *ittaʾdar* "grew dark"; "grew dark in mood" keeps the picture the note discusses.

**25. (minor) Reading-level and style.**
Sentences are short and mostly plain. No em-dashes in prose found. Terms like "ninefold", "harrowed", "mooring posts", "constable" are explained by glosses. The 8:82 "Harrowed over and over, life was spent" is hard on the ear at an 8th-grade level but is SEAL's point (E 157); keep with the gloss.

**26. (minor) Traditions cards.**
No chapter in 07-09 has a `traditions` card. The book-level `traditions` already has the Genesis 1-11/Mesopotamia card (Catholic, Evangelical, Adventist). The one question this part raises that Christians really answer differently, whether the gods of the nations are nothing, demons or fallen council members (note 7:69, `views.S`), has no tradition-by-tradition card with catechism or confession sources; the note names only Justin. Leave to the book writer, but record it.

**27. (minor) Mismatch between the ch 8 `sum` and the placement of Segment F.**
The `sum` says "a broken column shows Atrahasis gathering the elders once more" as fact; `views.H` and note 8:122 say the placement is tentative (SEAL: "it is not certain that I and D had exactly the same text"). Hedge the summary.

**28. (minor) 8:15 "... he laid down." and 8:5 "set out on foot".**
*iddi* is transitive ("he put/threw down [something]"), so "he laid down" reads as "he lay down", which SEAL prints with "(?)". Use "... he put down." or keep the gap. "On foot" for *šēpšu iškun* is idiom for "set out"; the added "on foot" is not in the line (the restored *ina* "out of" is Lambert/Millard's, as the note says; fine).

---

## Checked and found sound (so the fixer does not redo it)

- Colophon details (9:171-176): 439 lines, Ipiq-Aya (SIG-Aya read after Wilcke), Shabatu 28, year name, ca. 1628 BC (SEAL I 7f-i); Tablet I and III months from node1515/1517; 416 + 439 + 390 = 1,245.
- Museum numbers and places named in variants: B MLC 1889 (Sippar); be IM 124473 (Sippar); X BE 39099, Y BE 36669 (Babylon); D Istanbul Ni 2552+; H HE 529; I BM 109141; C0 MS 5108 (Schøyen); S+T K.3399+ (Ashurbanipal's palace). All match SEAL's sigla table.
- SEAL commentary cited in notes (E 14, 22, 43, 44, 59, 74, 82, 86, 94, 95, 121, 122, 153, 155, 156, 157, 161d-h, 166, 175; G 12, 24, 49m, 56, 61-64, 67, 87, 92; H 1-10, 16, 24, 25; I 3, 5-6, 7a-i): all accurately reported, including the places where the writer disagrees with SEAL's print.
- 7:60 "shone again": defensible; SEAL prints "became bright (or: returned(?))" and the commentary derives *ittūru* from *ittawrū*; the note says so.
- Bible quotations: 120 quoted strings checked against the current Plain of the other books by script; all matched (the nine non-matches were Atrahasis quotations or sentence fragments).
- Millard quotations ("undoubtedly describe the same Flood", "polytheistic language", "literary borrowing cannot be doubted", "may have been stopped by Enki and Atrahasis", "no counterpart in Genesis") are accurate to the text; the "literary borrowing" sentence is about Gilgamesh XI taking the Flood out of a Creation-Rebellion-Flood complex, as the note says.
- Mami's speech parallel (9:128-137 with 3:72-79) and 9:130 "passed the noise on" match part 01-03's 3:76.
- "Enki" for Ea is kept throughout with notes; "the flood" lowercase; "boat" not "ark" in this part; lowercase "god(s)".

## Fixes applied
