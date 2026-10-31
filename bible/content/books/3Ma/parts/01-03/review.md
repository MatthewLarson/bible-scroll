# Hostile review: 3 Maccabees 1-3 (part 01-03)

Reviewer: separate agent, 2026-10-31. Brief: tools/agent-reviewer.md, tools/agent-reviewer-works.md, tools/brief-3ma.md.
`VERBOSE=1 node tools/build.js --check 3Ma/01-03` gives 0 errors, 0 warnings (92 verses, 71 notes, 18 variants, 33 glosses, 3 chapters, 17 topic contributions). `--check 3Ma` is also 0/0.

## Verdict

The Plain is mostly a faithful and readable rendering of Swete's Greek: I read all 92 verses against `texts/orig/3Ma.json` and found no dropped clause or wrong name or number. The quotations of other books' Plain in the notes and the comparison with 2 Maccabees 3 match the site's current Plain. The weak points are in the apparatus and the sourcing. The critical-text story for 2:1 is incomplete and rests on a restricted digital Rahlfs file (not the current critical edition, Hanhart 1980). Several variant entries misstate which witness reads what or leave out a real divergence (2:29). The dating schools, Raphia, the Dionysus registration, the census and Arsinoe lean on Wikipedia alone. Several factual notes are unsourced or wrong, such as the Raphia Decree treated as a royal decree. A few verses share too much phrasing with NETS. One chapter view contradicts part 04-07. No invented source or fragment found, so nothing is critical. There are 12 major and 17 minor findings.

What I checked and found sound: Polybius 5.81 (Theodotus, two companions, just before daybreak, kills the physician Andreas), 5.83 (Arsinoe addresses the phalanx), 5.86 (Antiochus lost nearly ten thousand foot and over four thousand prisoners; the towns of Coele-Syria honored Ptolemy with crowns, sacrifices and altars). I read the saved Perseus page in `.scratch/3ma-book/pol5.html` (it is truncated at the start of 5.81) and then a Perseus fetch for the two lines about the raid. Mishnah Kelim 1:8-9 matches Sefaria (Kulp). Bavli Yoma 69a (Simon the Righteous and Alexander) matches Sefaria. The quotes from 2 Maccabees 3:15, 19, 26, 34-36, 14:35, 6:7, 6:12, Hebrews 9:7, 2 Chronicles 26, Revelation 13:16, Ezekiel 16:49, Psalm 79:8 and others match the site's Plain.

## Major findings

**1. 2:1: the variant entry is not exact, the Plain shows no sign of it, and the real witnesses are not given.**
Location: variants.json 2:1; plain.txt 2:1; notes #20-21.
The entry gives "Rahlfs and Brenton" as the witness and calls it "a verse missing from Alexandrinus." NETS's introduction (Göttingen PDF, 22-3makk-nets) says that 2:1 "is absent in both Alexandrinus and Venetus," that it is present in the Lucianic text, and that the verse "is most readily explained as an addition." It also says the NETS translator put it in square brackets, though on literary grounds he kept it. The entry says nothing about Venetus lacking it, nothing about the Lucianic witnesses, and nothing about the case that it is secondary. Its "why" ("without the verse the prayer has no speaker") is the literary argument, with no mention of the textual argument against. In plain.txt the verse stands unmarked, so a reader sees Simon's prayer as ordinary base text.
Fix: rewrite the entry to say that Swete's printed text and his footnotes lack the verse, that A and V both lack it (cite NETS's introduction or Hanhart's apparatus, whichever is opened), that the Lucianic group has it, and that some editors and translators bracket it. Mark 2:1 in the Plain (a bracket plus the variant pointer). Say that the Greek is quoted from Rahlfs's text (see 2). The claim that the verse is "missing from Alexandrinus" came from the digital file skipping it, so rephrase it unless a printed page of Swete is opened.

**2. Rahlfs is read from the CCAT-derived digital text, which the works lane said to avoid, and it is used well beyond checking or quoting one verse.**
Location: variants.json (about 14 entries quote Rahlfs Greek), plain.txt 1:19, 2:1, 2:5; sources `rahlfs-lxx`; notes/progress.
notes/bible-site-noncanon.md says Rahlfs (eliranwong/LXX-Rahlfs-1935) "rests on CCAT data with a restrictive user declaration: avoid." The writer's own sources-checked.md says the Rahlfs text was cloned from that GitHub repository. The site key `rahlfs-lxx` cites the 1935 printed edition (revised by Hanhart), not the file actually used. The use here is not limited to one verse: the Plain follows it at 1:19 and 2:5, and about 14 variant entries print its Greek. The current critical edition, Hanhart's Göttingen 3 Maccabees (1980), appears nowhere, and it is the edition NETS follows. As a result readings are assigned to "Rahlfs's edition" as if it were a witness. The real witnesses (V, the Lucianic group, versions) are not named.
Fix: lead decision first. If the CCAT restriction rules the file out, then limit the Greek to what Swete's own apparatus gives (A and V readings) and build the 2:1, 1:19 and 2:5 entries from a source that is opened and allowed (Brenton for sense; NETS or Hanhart's apparatus for the witness lists). Cite the actual source in each `w` line. Add Hanhart to sources if it is opened.

**3. 2:29: Swete's printed Διονύσου (genitive) is not what A and V read, and there is no variant.**
Location: plain.txt 2:29; variants.json (missing); note #47-49.
Swete's apparatus reads "Διονυσω AV": both codices have the dative, Swete prints the genitive (it also records "προκαταχωρισαι] καταχωρησαι V" and "κισσοφυλλω] και Σοφυλλω V vid"). The writer lists the 2:25 and 3:15 corrections of both manuscripts but misses this one, which sits on the verse the book is best known for. The two readings give different grammar ("the ivy-leaf mark of Dionysus" or "the ivy-leaf mark for Dionysus"); the Plain's "the mark of Dionysus, an ivy leaf" can stand for either. Note #49 mentions V's "to be registered" but the variant list does not.
Fix: add a "Swete's text" entry: printed Διονύσου; A and V Διονύσῳ; the Plain's wording works under both; also record A προκαταχωρίσαι, V καταχωρῆσαι, Rahlfs καταχωρίσαι.

**4. 1:19: the "Swete's printed text" reading is misdescribed as Alexandrinus.**
Location: variants.json 1:19 first entry, second reading.
The entry says "Swete's printed text (A, with Swete's spelling of the last word; ...)" for τοὺς πρὸς ἅπαν νῦν διατεταγμένους. The apparatus says "19 διατεταγμενην (sic) A": A has a feminine singular ending, a different form (not a spelling) from the plural Swete prints. So the printed text is Swete's emendation of A, and the entry hides it. Also, the Plain's "wedding rooms" comes from a reading (παστούς, "for the meeting") that the entry credits only to "Rahlfs." NETS (1.19) has the same sense, which suggests a manuscript or Hanhart basis; the entry should give it.
Fix: state A's exact reading from the apparatus, say that Swete's text is a correction, and name the witnesses for παστούς (see 2). Keep the departure disclosure.

**5. 1:4: "Swete corrected Alexandrinus from Venetus" is not shown by anything opened.**
Location: variants.json 1:4 ("p" and "why").
The apparatus only says "πλοκαμους] πολεμους A": the printed text has plokamous, A has polemous. It does not say V has plokamous or that Swete took it from V. The entry states both as fact ("Swete prints ... from Venetus"; "so Swete corrected Alexandrinus from Venetus"). Also the Greek claim that "the wars" makes no sense is argued, but the cause of the error is guessed.
Fix: say "Swete prints plokamous; his footnote records A as polemous; his footnote gives no reading of V here." Drop "from Venetus" unless a printed page shows it. The same applies to the sound-alike explanation at 2:25 (hetairōn/heterōn) and the lost-letters story at 3:15: both say things as fact that are only plausible guesses. The apparatus does support the actual readings at 2:25 ("ετερων A V") and 3:15 ("μεν ως AV").

**6. 3:4: the Plain follows the weaker reading and creates a contradiction.**
Location: plain.txt 3:4; variants.json 3:4.
Swete's nominative ἔνιοι gives "some of them came to be seen as hateful." Read that way the narrator says some Jews were hateful, and then at once (3:5-6) that all people thought well of them. NETS, which follows Hanhart, has "they appeared hateful to some," that is, hated by some outsiders. The entry admits that Rahlfs's reading "fits the next verse better," yet keeps the base text and says it "can mean the same thing loosely." It cannot: the subject changes.
Fix: follow the dative (hateful to some) as a disclosed departure, as the Plain already does at 1:19 and 2:5, or at least gloss "some of them" so it cannot be read as "some Jews were hateful."

**7. Note on 2:27 treats the Raphia Decree as a royal decree set up like the pillar.**
Location: notes #44 (2:27), also #6 (1:7).
The note says "Ptolemaic decrees were set up this way: the Raphia Decree of 15 November 217 BC, which honored this king after his victory, survives in three copies." Wikipedia's Ptolemy IV article (which I fetched) calls it a decree of a priestly synod held at Memphis, in hieroglyphic, Demotic and Greek. It is a decree by the priests honoring the king, not an order of the king, and it was not set up in Alexandria's palace quarter. As a parallel for a royal pillar in Alexandria it misleads. The same article notes that the victory was celebrated "by 12 October," so the Nov 15 date is not "after the victory" in a simple way; leave the day out unless a better source is opened.
Fix: describe it as a priestly synod decree (Memphis), or drop it. For royal decrees on stone give a source actually opened.

**8. Wikipedia is the only source for dating views, Raphia, the Dionysus registration, the census and Arsinoe.**
Location: sources.json (all three keys); chapters.json settings (`views` on the date, repeated in chapters 1, 2 and 3); notes #0-3, #6, #44, #46-47, #50; topics.
- Dating schools (Hadas, Tcherikover, Orian; Bickerman, Anderson, Johnson; Ewald, Willrich, Collins) are given as three bullet views with names, on the strength of one Wikipedia page. I read that page: it lists Hadas, Tcherikover and Orian for the early Roman period (about 25-15 BC) and Ewald, Willrich and Collins for AD 40, and Bickerman, Anderson and Johnson for the late Ptolemaic period. I could not confirm the Collins attribution or the Johnson and Bickerman ones from any other page. The book-level sources.json already has Tcherikover's own article (Zion 10, 1945) with an Orion bibliography summary, and the UBS handbook introduction (tips.translation.bible) states a range, but the part does not use them.
- Raphia date (22 June 217 BC): note #1 says it is "the one modern historians give from Polybius." Polybius gives no calendar date (5.79-86). Only Wikipedia gives it.
- Dionysus registration "sometime before 217 BC": from Wikipedia only (the article cites Hölbl, whom the writer did not open).
- Laographia and the Roman census of 24 BC: Wikipedia only; Tcherikover's summary says the term was already current in Egypt at the end of the Ptolemaic period, which note #46 does not say.
- Arsinoe's marriage (late 220 BC): Wikipedia only.
Fix: replace Wikipedia with the books and articles it cites, opened this session (Hölbl, Tcherikover, the Orion summary, Anderson in Charlesworth, Collins, Johnson, UBS handbook), or remove the name lists and give the three positions without names. Remove the Collins name if it cannot be checked. Drop "from Polybius" from the Raphia date.

**9. "Most scholars" claims with no support.**
Location: topics.json `temple` common line ("Most scholars think the story ... is modeled on Heliodorus in 2 Maccabees 3, not on an event"); notes #8 ("Most scholars think 3 Maccabees borrowed the pattern from 2 Maccabees or from a shared tradition"); chapters.json ch1 readings and views H ("Most scholars think the writer borrowed that pattern"); note #0 ("Daniel 11:10-12, which most readers take to describe these same wars"); topic `egypt` ("usually read of the same war").
The only cited source is Wikipedia, which lists shared elements of the two stories but says nothing about direction or what most scholars think (I read it). Labeling something consensus without a source breaks STYLE rule 3 and rule 2.
Fix: cite a commentary or survey actually opened (Anderson, Collins, Hadas, Emmet) or reword to "the stories share these steps; scholars debate which depends on which."

**10. Unsourced facts in notes (STYLE rule 2).**
Location: notes (numbers are positions in notes.json).
- #5 (1:4): "far beyond a soldier's pay" and "the sum here is in gold, not silver" as a comment on the sum; no source.
- #7 (1:8): the gerousia "governed the Jews of Judea ... beside the high priest" and "later its place was taken by the Sanhedrin"; no source.
- #46 (2:28): laographia as "the register of those who paid a head tax" and "marked you as a native subject, not a citizen" (the topics file repeats "a register for a head tax"); no source, and it is Roman-period usage read back.
- #51 (2:30): Alexandria's Jews "lived as an organized community with their own laws"; the civic-status dispute "turned violent in the Roman period"; no source.
- #54 (3:1): in the chōra "many Jews served as soldiers, farmers and officials"; no source.
- #62 (3:12): "the strategos was the governor of a district (a nome)"; no source (the gloss repeats it).
- #38 (2:21): "a blow to a king of Egypt that no other ancient source records"; a negative claim nobody checked.
- #20 (2:1): "2 Maccabees 3 makes his son Onias III the hero." The site's 2 Maccabees 3:1 names Onias the high priest and gives no father; the only Simon in that chapter is the temple overseer of 3:4. Onias as Simon's son comes from outside the chapter and is not sourced.
- #25 (2:5): "the word comes back in 2:3, 2:17 and 2:21"; the Greek words are different (ὑπερηφανία, ὕβρις/ἀγερωχία, ὕβρις/θράσος), so it is the idea, not the word.
Fix: source each from something opened, or cut the claim.

**11. Phrasing close to NETS in several verses (drift).**
Location: plain.txt 2:9, 2:22, 1:23, 2:21, 1:19, 2:2, 2:1.
The writer's drift audit compared NRSV, RSV, NETS, Lexham and Anderson "in the head"; the writer says only NRSV/RSV shapes were checked. I opened the NETS 3 Maccabees PDF (Göttingen) and compared. I describe the matches, no more:
- 2:22: a run of eleven words shared with NETS ("shook him this way and that like a reed in the wind").
- 2:9: NETS has "you chose this city," "for your name, though you lack nothing," "your great and honored name," and the same sentence order. The Plain's 2:9 keeps all three phrases and the shape of the sentence ("You, King, ... you chose this city ... for your name, though you lack nothing ... your great and honored name").
- 1:23: "rush to arms and to die" plus "turmoil in the place" in NETS's order.
- 2:21: "God, who watches over all things" and "holy among the holy ones" (NETS: "holy among the holy").
- 1:19: "dressed for their weddings" (four words), and "abandoned the chambers" against "deserted the wedding rooms."
- 2:1 and 2:2: the order Simon / facing the sanctuary / hands, and "Lord, Lord, King of the heavens ... of all creation, holy among the holy ones."
Several of these are partly forced by the Greek (ἔνθεν καὶ ἔνθεν ... ὡς κάλαμον ὑπὸ ἀνέμου), but 2:9, 2:22 and 1:23 are the writer's choices of order and word. I did not open NRSV, RSV, Lexham or Anderson, so I cannot clear them.
Fix: rebuild 2:9, 2:22, 1:23 and 2:21 from the Greek with a different shape (for example split 2:9 differently and change "lack nothing," "great and honored name," "this way and that"), then redo the audit with the NETS file opened.

**12. Chapter 3 view J says the festival was "kept by the Jews of Egypt."**
Location: chapters.json ch3 views.J.
The Plain of part 04-07 and its note on 7:19 say no calendar of Jewish festivals names it, and that the one hint (Josephus, Against Apion 2.55) ties a day to Ptolemy VIII, so "if that is the same festival" it was kept. Part 01-03 states as fact that the festival was kept. The brief itself asks "whether anything shows it was kept."
Fix: reword to "The book says the days were fixed as a yearly festival (6:36; 7:19); nothing outside it shows it was kept" and point to the 7:19 note.

## Minor findings

13. **Source keys: duplicates and borrowed keys.** The three Wikipedia pages of this book have three keys: `wikipedia-3-maccabees` (part 01-03), `wikipedia-3macc` (part 04-07), `wiki-3macc` (book). Merge to one. Part 01-03 also uses `polybius-raphia` (defined in Dan 11-12), `mishnah-kelim` (defined in Mat 19-23) and `brenton-lxx` (defined in 1Ch 21-29, dated 1844 while the brief says 1851): fine as global keys, but they break if those parts change. Define them once in content/sources.json or in 3Ma/sources.json. Make the Brenton date match the edition actually read.

14. **Dositheus.** The brief asks for the Dositheus papyrus "only from a source opened." Note #4 says "He appears only here" and nothing about outside attestation. I searched and could not open a source on a papyrus naming Dositheus son of Drimylus, so I cannot say there is one. Say "He appears only here in the book," or add a source.

15. **Theodotus.** Note #3 does not point out that 1:2 gives Theodotus a picked body of soldiers while Polybius 5.81 (opened) gives him two companions. This is a fair difference to list.

16. **2:20 "meet us".** The Plain adds the object "us"; Swete's printed line has none (Rahlfs has ἡμᾶς). Needed in English, but it is a place where the Plain agrees with Rahlfs and the progress line says only 1:19 and 2:5.

17. **Missing variants (apparatus records them, no entry).** 3:16 προσήχθημεν / V προήχθημεν (led up / induced); 3:27 ἐχθίσταις / V αἰσχίσταις (most hateful / most shameful, Plain "loathsome"); 3:28 βασιλείου / V βασιλικοῦ ἀργυρίου (the royal treasury / the royal silver); 2:31 ἐπιπολαίως / V* ἐπὶ πόλεως (mentioned in a note, no entry); 2:2 σθένει / A ἀσθενεῖ.

18. **1:11 and chapter 1 summary.** The Plain says "not all the priests either" (μηδὲ πᾶσιν); the chapter summary says "not even most priests" and the 1:11 variant note says "most priests." Match them to the Greek.

19. **Term consistency.** The proposed term says εὐσέβεια is "godliness"; Plain 1:9 uses "devotion" for εὐσεβείᾳ (2:31, 2:32 use "godliness"). Either use "godliness" at 1:9 or change the term line.

20. **Gloss problems.** 3:19 "lift their necks proudly = act stuck-up" is slangy for a gloss on a king's letter. 3:14 "Asia: the Seleucid lands of Syria" and 3:15 "from Lebanon south to Egypt, Judea included" are unsourced geography. "Insolence" and "exult" have no gloss.

21. **Obscure English.** 1:14 ("it was wrong to make a wonder of that very thing"), 2:26 ("made slanders in those places"), 2:31 ("hated the steps that the city's godliness required"), 3:19 ("will not bear anything true" for γνήσιον), 2:2 ("snorts with boldness and strength") and 1:15 ("enter all of them", no clear antecedent) will not read clearly to an eighth grader. The notes admit most are hard, but the Plain could use clearer words and put the oddity in the note.

22. **"Orthodox" lens.** Chapter views O say "Orthodox Bibles include 3 Maccabees among the Old Testament books read in church." No source for "read in church"; book.json itself says the Coptic and Ethiopian churches do not count the book. Name the churches (Greek, Russian) and drop "read in church" unless sourced. The O readings (ch2, ch3) are the writer's themes, not a cited Orthodox reading.

23. **Chapter 1 H view anachronism.** "Reflects the rules known from Leviticus 16 and the Mishnah": the Mishnah (about AD 200) is later than any date proposed for the book. Say "the same rule is stated later in the Mishnah."

24. **Sirach quotes.** Notes #14, #20, #24 and the topics cite Sirach 42:11, 50:1 and 16:7-10 in the writer's own translation "from the Greek." The site has no Sirach Plain yet (content/books/Sir has only book.json and progress.md), so the quote cannot be matched to anything and may later disagree with it. Mark it as this note's own rendering or wait for Sirach.

25. **Note #59 (3:8).** "A king who makes himself a god's servant against God's people" is unclear and not in the Greek; the first sentence of the same note is enough. The Plain's "the government was a tyranny" renders τυραννικὴ ἡ διάθεσις; say in the note that διάθεσις can also mean "disposition" or "arrangement."

26. **Note #47 (2:29).** "The book turns that history into a threat" presents a motive as fact. Label it a reading, or cite who holds it. Also the note #1 closing line (Polybius gives the date) is covered in 8.

27. **Note #52 (2:31).** "or the price of entry into the faith of their city, Jerusalem" is a guess about which city; the Greek says only "the city." Say so.

28. **Settings.** The elders' attempt to dissuade the king (1:25) and the pillar's escape clause as a separate offer have no setting of their own; the second is covered in 2:28-30, the first is minor. All speeches, prayers and letters named by the brief have a setting.

29. **Chapter 2 view N.** The brand "recalls the mark of the beast" is offered as the first Christians' reading with no source; label it a modern comparison, as the `mark` topic partly does.

## Other checks (no finding)

- Reading level and style: no em-dashes in any part-01-03 file; short sentences; poetry not applicable here; straight quotes only.
- Term use: "the Most Great God" is used at 1:16 and 3:11 (and the 1:9 variant is recorded); temple/sanctuary, Friends, census and citizen terms match the proposed terms.
- Cross-references: all quotes of other books' Plain that I checked match; 2 Maccabees 3 comparison is accurate (robes, girls, flogging, "greatest God," the sacrifice and the confession).
- Settings exist for Simon's prayer, the priests' answer, the city's prayer, the slander, the decree on the pillar and the king's letter; `readers` are named and the date is called debated.

## Fixes applied

