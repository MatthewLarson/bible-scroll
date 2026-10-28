# Hostile review: Jeremiah 7-12 (part 07-12)

Reviewer read plain.txt, notes.json (98), variants.json (21), glosses.json, chapters.json (six chapter pages, settings, two traditions cards), topics.json, sources.json. Compared against texts/orig/Jer.json (literal.js), Swete's Greek (lxx.py), the Qumran transcriptions (dss.py, Jer 7-12 run in full), texts/auto, and the neighbouring parts (01-06, 13-20, 39-45, 50-52). Rashi and Radak were fetched on Sefaria. `VERBOSE=1 node tools/build.js --check Jer/07-12`: 0 errors, 0 warnings.

## Verdict

The translation is strong. Verse by verse it follows the Hebrew closely, the key terms hold (shuv "turn", bat 'ammi "dear people", Queen of Heaven, Topheth, "abhorrent"), and no invented source, fragment or reading turned up. The problems are in the apparatus. (1) The Greek of 12:5 is misreported, and the verse's one real translation choice is explained from a partial list of versions. (2) The 8:10b-12 / 6:12-15 doublet is not aligned with part 01-06 even though the chapter page says it is. (3) The Qumran claims are overstated in several places (4QJer-b "11-25", 4QJer-a "oldest"), and the Qumran and Greek evidence has been used unevenly: 11:19 and 7:10 have no variant entries at all. (4) The Queen of Heaven evidence omits Elephantine, which the brief required. (5) The two Mary/saints cards duplicate cards in 13-20 and 39-45 and are not in step with them. (6) A handful of small factual slips: "third time" at 11:14, "From Tertullian on", "garbled" text in a variant, a wordplay that is not one. No finding is critical. Everything the lead flagged as unverified checked out except the points in findings 3, 4, 11 and 12 below.

Counts: critical 0, major 8, minor 22.

## Verification of the items the lead named

- Taanit 4a on Jer 7:31 / 19:5 (Mesha's son, Jephthah's daughter, Isaac): this is the standard citation and matches the note. I did not fetch the page; the note itself is careful to say it is "one Jewish reading" and that 7:31 has only two of the three clauses. Accept.
- Bailey on Radak and Gehenna: confirmed. Bailey, "Gehenna: The Topography of Hell," Biblical Archaeologist 49 (1986), pp. 188-89, traces the dump idea to David Kimhi (Radak, on Psalm 27:13) and finds no support in sources from the intertestamental or rabbinic periods. Accept. But see minor 22 (topic wording is more absolute than Bailey).
- Herodotus 3.8 (Arabs cut the hair in a circle, shaving the temples): correct. Accept.
- Tertullian on 11:19: the idea is real (Against Marcion 3.19), but "From Tertullian on" is wrong (finding 4), and the source line has no chapter.
- c. 200 BC for 4QJer-b: sources range from "early second century" to "mid second century" BC. Give a range (finding 3).
- Haftarahs: Ninth of Av morning (Jer 8:13-9:23 in Hebrew numbering = English 8:13-9:24) is correct. Tzav is correct for the Ashkenazi custom (7:21-8:3 and 9:22-23 Hebrew = 9:23-24 English). The Sephardi custom stops at 7:28 (7:21-28; 9:22-23). The chapter-7 J lens should say "Ashkenazi custom". Minor 21.
- Rashi on 10:11 (letter to Jeconiah and the exiles, citing Tanchuma, Shoftim 12): confirmed. Rashi on 7:22 (Exodus 19:5): confirmed. Radak on 7:22 (no sacrifice in the Ten Commandments; individual offerings not commanded as such; daily offerings communal): confirmed. Rashi on 11:19 (Menahem "large lamb"; Dunash and Judah ben Kudish "lamb and ox"; Targum Jonathan "choice lamb"; "wood in his bread" as poison): confirmed. Rashi on 12:4 ("not revealed to God what will be their end"): confirmed.
- Orthodox statements on Mary and the saints: the claims are plausible but the cited source (Ware, The Orthodox Church) is not shown to say them. See finding 6.
- Haftarah/Ninth of Av, Avot 4:15, Herodotus, Psalm 79 and the Haggadah, the Letter of Jeremiah 70, 2 Maccabees 15:14: all fine.
- "from memory", "not rechecked": none in any reader-facing text of this part. The first-person "I read..." in the chapter-7 page is the witness statement the brief asks for.

## Findings

### Major

**1. [major] 12:5, Greek misreported; no variant; "feel secure" explained from a partial list of versions.** notes.json 12:5 ("Secure, or stumbling?"), plain 12:5, variants.json (no entry).
- Note says "the Greek has 'you have trusted' (pepoithas)." Swete's Vaticanus reads `καὶ ἐν γῇ εἰρήνης οὐ πέποιθας` ("in a land of peace you have **not** trusted"), and `σοῦ οἱ πόδες τρέχουσιν` for the first clause. The negative reverses the logic of the verse.
- `node tools/literal.js Jer 12:5` gives "[are] falling to [the] ground" for בוֹטֵחַ, which is the project's own literal basis for the verse. The Plain departs from it without saying so. The Plain's "feel secure" is a defensible reading of the Masoretic text (ordinary batach "trust"), and 4QJer-a preserves the consonants בוטח unbracketed, so the consonantal text is not in doubt. The choice is about the lexeme (batach "trust" or a second root "fall, stumble").
- The note names KJV/ASV/WEB/YLT for "secure" and only the BSB for "stumble". It does not tell the reader that ESV and NIV (and RSV/NRSV) also take "stumble"; the lead can check the wording. Naming the free versions on one side and the Berean on the other hides how the major versions split.
- Fix: add a variant entry at 12:5 (MT/4QJer-a "trusting, secure"; Greek "you have not trusted"), correct the note, say plainly that the literal gloss reads "fall" and that major English versions split, and state why "feel secure" is kept (or switch to "stumble", which also gives the a-fortiori argument its force: if even a safe land trips you, what of the Jordan thicket). Also check the Greek in Ziegler; Swete is one manuscript.

**2. [major] 8:10b-12 is not aligned with 6:12-15, and the chapter page says it is.** plain 8:10-12 vs content/books/Jer/parts/01-06/plain.txt 6:12-15; notes.json 8:11; chapters.json ch 8 "deep".
- The ch 8 page says "The Plain keeps the lines in both places and aligns them (see 6:12-15)". They are not aligned. Where the Hebrew is the same (literal.js) the two parts differ:
  - 6:13 "From the smallest of them to the biggest, every one is grabbing profit by cheating. From prophet to priest, every one deals in lies" vs 8:10 "Everyone, small and great, grabs for gain they have no right to. Prophet and priest alike, everyone deals in lies." Hebrew: the same two lines (בצע בצע; מנביא ועד כהן).
  - 6:14 "They put a bandage on the broken place of my dear people as though it were a trifle" vs 8:11 "They have healed the fracture of my dear people as though it were nothing." Hebrew: וירפאו את שבר ... על נקלה, the same. "Healed" is the literal one (and the 8:11 gloss then explains it); 6:14 should match.
  - 6:15 "Did they feel shame when they did something abominable? They felt no shame at all; they did not even know how to blush" vs 8:12 "Were they ashamed when they did something abhorrent? Not at all. They feel no shame, and they do not know how to blush." Hebrew: הבשו כי תועבה עשו גם בוש לא יבשו והכלם לא ידעו, the same (8:12 adds nothing). Tense differs too (felt/feel). Terms: terms.json fixes to'evah as "abhorrent"; 01-06 has "abominable". That is 01-06's error to fix, but the pair has to be reconciled in one pass.
  - The real Hebrew differences (6:12 "houses ... fields and wives together" vs 8:10 "their wives to others, their fields to those who dispossess"; 6:14 "my people" vs 8:11 "daughter of my people"; 6:15 "at the time I have visited them" vs 8:12 "at the time of their punishment") are kept, which is right.
- Brief: "list each difference in a note." Note 8:11 says "almost word for word" and lists nothing.
- Fix: choose one rendering for each shared line (the 8:10-12 wording is nearer the Hebrew in 8:11; "abhorrent" is the term), have 01-06 conform, and put a short table of the true differences in the 8:11 note. Delete or correct "aligns them" in the ch 8 page. Also retitle that deep section (see minor 13).

**3. [major] Qumran claims overstated.**
- notes.json 10:6 says 4QJer-b "has 10:1-5, 9 and 11-25 without them." `dss.py Jer 10` shows 4Q71 preserved text from 9:23 to 10:21 only (10:22 prints empty; 10:23 and 10:24 are 4Q70 only). "11-25" is wrong. The chapter page's own witness paragraph gets it right ("9:23-10:21").
- ch 8 "deep" calls 4QJer-a "the oldest Hebrew witness here." Nothing in the part supports this, and the part itself dates 4QJer-b to about 200 BC. Drop it.
- "a scroll from about 200 BC" (note 10:6; ch 10 "deep"): published dating ranges from early to mid second century BC; write "early second century BC (published estimates run from the late third to the middle of the second)" or "about 200-150 BC".
- ch 10 "deep" says Tov uses this as one of his main "proofs." Say "main examples/arguments"; the minority view is stated right after, which is good.

**4. [major] 11:19: missing variant, wrong history of the Christian reading, source line incomplete.** variants.json (none), notes.json 11:19, chapters.json ch 11 views X, sources.json `tertullian-marcion-3`.
- The Greek differs in substance and the part says so only in prose: Swete 11:19 `ὡς ἀρνίον ἄκακον ἀγόμενον τοῦ θύεσθαι` ("innocent lamb"; Hebrew כבש אלוף) and `ἐμβάλωμεν ξύλον εἰς τὸν ἄρτον αὐτοῦ` ("put wood into his bread"; Hebrew נשחיתה עץ בלחמו). 4QJer-a preserves נשחיתה עץ בלחמו ונכרתנו מארץ חיים (unbracketed), so the scroll sides with the Masoretic wording against the Greek's verb. The brief says to give an entry wherever "the Greek reads differently in substance"; here a Qumran copy is a witness and its agreement is the point.
- "From Tertullian on, Christians read 11:19 as speaking of Christ" is wrong. Justin, Dialogue with Trypho 72, already has the line as Jeremiah's and accuses Jews of cutting it, and Irenaeus cites a form of it. Tertullian (Against Marcion 3.19; also Against the Jews 10) is a later witness. Justin's wording is not the Greek of Jeremiah 11:19, so the note should say the Fathers' quotation is a reading of the Greek text (or a variant of it), not simply "the Greek wording."
- sources.json: `tertullian-marcion-3` duplicates `tertullian-marcion3` already defined in Psa/parts/090-101 (same work, book 3, chapter 19). Reuse the existing key; add "3.19" to the note.
- Plain 11:19 "while it still has its bread": "while it still has" is added. Hebrew בלחמו is "with its bread/food". Either keep it literal ("Let us destroy the tree with its bread") and move the sense to the note, or gloss it.

**5. [major] Elephantine is missing from the Queen of Heaven treatment.** notes.json 7:18, topic `queen-of-heaven`, chapter 7 page.
- Brief: "(Ishtar/Astarte, the Kuntillet Ajrud and Elephantine evidence, honestly weighed)". No mention of Elephantine anywhere in the part (grep: 0). The note covers Akkadian "queen of heaven", Kuntillet 'Ajrud and the figurines, then says "nothing found in Judah names the Queen of Heaven."
- Add the Aramaic evidence for the title itself (the Aramaic "queen of heaven" in fifth-century papyri/ostraca from Egypt, and the Elephantine Judean community with Anat-Yahu and Anat-Bethel, which is the background of 44:15-19 and Pathros), say how far it supports a Judean cult of the goddess in 600 BC, and say which scholars doubt a link. Check each citation; do not take this list from the review.
- The 'Ajrud sentence says "a Hebrew inscription ... blesses people 'by Yahweh ... and his asherah'." The inscriptions read "Yahweh of Samaria / of Teman and his asherah". Say "Yahweh of Samaria" or "of Teman." Note too that 'Ajrud is in the Sinai/Negev, not Judah proper; the note's wording blurs this.

**6. [major] Traditions cards: duplicates, drift between parts, thin sourcing.** chapters.json ch 7 `traditions` (two cards); 13-20 ch 15; 39-45 ch 44.
- There are now four cards on two questions: the Mary card here and the "Is it idolatry to call Mary Queen of Heaven?" card in 39-45 ch 44; the saints card here and the "Do the saints in heaven pray for the living?" card in 13-20 ch 15 (the 13-20 card even cites 2 Maccabees 15:12-16). One page per subject applies. Keep one of each, where the text first needs it (the Mary card at 7:18 or at 44; the saints card at 15:1 or here) and link from the other.
- No direct contradiction, but the versions diverge: (a) Orthodox here cites ware-orthodox and says the title is "Lady and Queen" with Psalm 45:9 applied at feasts; the 39-45 Orthodox view has no source at all. Ware's general survey is not shown to say either; cite an Orthodox liturgical source (for example the hymns for the Dormition) or soften. The statement "has not made her queenship a defined doctrine" is plausible but needs a source. (b) Reformed here: "Reformed teaching finds no basis in Scripture for the title. The only 'Queen of Heaven' in the Bible is the goddess." That is the writer's gloss, not Westminster 21.2 (which is about worship and prayer), and it also begs the question against Catholic readings of Revelation 12:1 that the 39-45 card names. 39-45 has the fairer wording ("some Reformed writers have drawn a line..."). (c) Baptist is present in 39-45 and absent here. Anglican is in neither. (d) Catholic quotes Lumen Gentium 59 as "Queen of the universe" (one translation); 39-45 says "Queen over all things" (the Vatican text and CCC 966). Name one translation consistently. (e) Source keys: here `ccc`; 39-45 uses `catechism-catholic`, which does not exist in sources.json for this work. Reuse `ccc`.
- The saints card: Reformed "No" collapses two questions (do the saints pray for us / may we ask them). WCF 21.2 and 1.3 support the second and the canon point, not the first. Many Reformed writers say Scripture does not teach it. Rephrase. Lutheran: Apology XXI grants the first and rejects the second; say that, as the card does, and add that Luther's Bible printed 2 Maccabees in the Apocrypha as "useful to read." The Orthodox answer here has no catechism, hymn or council cited beyond Ware.
- The 2 Maccabees quotation in note 7:16 (second note) is the writer's own translation and is not too close to any version I can name. Fine.

**7. [major] 7:10 Greek reading is not recorded.** variants.json (none), notes.json 7:10.
- The Greek has `καὶ εἴπατε Ἀπεσχήμεθα τοῦ μὴ ποιεῖν πάντα τὰ βδελύγματα ταῦτα`, "We have kept away from doing all these abominations," against the Hebrew "We are rescued! (so as) to do all these abhorrent things." That is a different claim by the worshipers and it matters for the note's whole discussion of lema'an. Add an entry; no scroll preserves 7:10.

**8. [major] Several Ketiv/Qere and marked readings from texts/auto are not used, and the 4QJer-a differences are not examined.** variants.json.
- texts/auto/Jer.json marks 7:22 (K "brought out" for Q "I brought out"), 8:1 (K "and they bring out"), 8:6 (K plural "courses"), 10:13 (K ארץ without the article) and 10:17 (K "you who dwell" 1cs form). Only 8:7 and 9:8 got entries. 10:13 matters: 4Q70, 4Q71 and 4Q72 all read ארץ without the article, i.e. with the Ketiv. The 10:13 variant is about wind/light and says only that 4QJer-b has the word "whole."
- `dss.py` marks real or possible differences in 4Q70 at 7:30 (two marked words), 7:31, 7:33, 8:1, 8:2 and 8:3 that no entry or note mentions (the marked tokens print as single letters, so they may be scribal marks; the writer should have looked at them, especially 7:31 where the extra token sits between "I commanded" and "came up" and the part's note discusses the third clause of 19:5). Also 4Q70 8:7 `ישמרו` (imperfect) for `שמרו`, 4Q71 10:9 a different word order (`מעשה חכמים כלם` before `תכלת`), 10:5 Greek `ἀργύριον τορευτόν` (in a note, not a variant).
- Fix: add short entries (or one-line notes) for 10:13 (K/Q and scrolls), 10:9 (word order in 4QJer-b against 4QJer-a and the MT), 7:22 and 8:6; check the single-letter marks in 4Q70 and say what they are or that they are not readings.

### Minor

**9. [minor] Sentence shape close to the ESV/NIV.** plain.txt. In most of these the Hebrew forces the order, but the English frame is the same. Rework the frame, not the words:
- 7:2 "everyone in Judah who walks in through these gates to bow down to the LORD" (ESV frame "who enter these gates to worship").
- 7:5-7, the "if you truly ... if you truly ... if you do not oppress the foreigner, the fatherless and the widow ... to your own harm, then I will let you stay in this place" chain follows the ESV's clause order and the same short list.
- 7:11 "Look, I have seen it myself" (ESV "I myself have seen it").
- 7:23 "Listen to my voice, and I will be your God, and you will be my people. Walk in every way that I command you, so that all will go well for you."
- 8:7 "Even the stork in the sky knows its own seasons" (ESV "the stork in the heavens knows her times").
- 10:5 "like a scarecrow in a cucumber patch ... They have to be carried, because they cannot walk" (NIV "like a scarecrow in a melon patch ... they must be carried because they cannot walk").
- 10:9 "Beaten silver comes in from Tarshish, and gold from Uphaz" (ESV "Beaten silver is brought from Tarshish").
- 12:6 "Do not trust them, even if they say fine things to you" (NIV "though they speak well of you").
- The audit log was not kept (by design), so the writer cannot be asked; these are the places a second pass should reword.

**10. [minor] 10:14 "dull and cut off from knowledge."** Hebrew נבער כל אדם מדעת: min before da'at is "without, away from" and "cut off" adds a notion. The identical line at 51:17 in 50-52 has the same wording, so fix both: "Every person has become dull, without knowledge."

**11. [minor] Awkward or unclear English.** 9:16 "I will throw them apart" (והפצותים, "scatter"; the Greek and 8:3 use the scattering idea); 11:15 "Will holy meat take it away from you" (what is "it"?); 8:19 the LORD's reply is put inside the people's quotation marks (the note says the LORD answers); 10:18 "so that they will find it out"; 12:13 "Be ashamed of your harvests" reads as a command but the Hebrew is vocalized as "they will be ashamed" in some readings (give a gloss).

**12. [minor] 10:6 variant `b` is garbled.** "Because this verse has two lines, the omission shown here removes only the second line; the first line ... goes with it." Contradicts itself. Say: "Both lines of 10:6 are lost in the short edition; the entry shows the second line only because it is the one the anchor covers" (or fix the anchor).

**13. [minor] Chapter 8 "deep" heading.** "A Greek that lacks eight verses' worth of repeat" is wrong (8:10b-12 is about 2.5 verses). Retitle "A repeated passage the Greek lacks".

**14. [minor] Chapter 11 summary says "For the third time he tells Jeremiah not to pray (11:14)."** 7:16, 11:14, 14:11: 11:14 is the second. The intercession topic ("forbids it three times", listing 7:16, 11:14, 14:11) is right; fix the chapter page.

**15. [minor] Chapter 7 "deep": the Greek of 7:21 has only "Kyrios" (no "the God of Israel")**, not "the LORD, the God of Israel" as stated. 7:3 has "Kyrios ho theos Israel". Fix the example.

**16. [minor] Note 10:11 (Aramaic).** The "sentence plays on two forms of 'earth', arqa and ar'a" is not wordplay: it is the Ketiv/Qere doublet (ארקא written, ארעא read) in the Aramaic verse. Say so. The note should also state that 4Q71 has the verse and the Greek keeps it (after 10:9) even though 10:10 is absent in both, which strengthens the point of the short edition (the Aramaic verse is old to the short text); and that the Plain does not mark the verse as Aramaic (a "language: Aramaic" cue in the line, if the site supports one).

**17. [minor] Circumcision (9:25-26).** The section heading in plain.txt, "Circumcised in the Body Only," and the chapter 9 deep title settle on the reading that note 9:25 calls only one of two. Use a neutral heading ("Circumcised and Uncircumcised"). The note's "(so many modern versions ...)" is an unchecked count; name two versions or drop it. The Greek 9:26 lists Egypt, Idumaea, Edom, Ammon, Moab and does not name Judah (Swete); worth a one-line mention. Rashi on 9:26 should be quoted with the verse, not "only remarks."

**18. [minor] Cross-book wording.** 7:11 "robbers' den" vs the Plain of Matthew 21:13 / Mark 11:17 "a cave for bandits" for the same Greek `spelaion leston`. The note says the Gospel words are the Greek Jeremiah's; the English should show it (match the Gospels in the note, or set "bandits' cave" here). 7:32 "the valley of Ben-hinnom" (lower case) vs 19:6 "Ben-hinnom's Valley"; 7:31 "the high places of Topheth" vs 19:5 "the high places of Baal" (fine). 7:29-8:3 and 7:22-23 are consistent with 26 and 11.

**19. [minor] Overstated or unsupported chapter-page claims.**
- ch 12 views X: Jer 12:2 "is behind Jesus' quotation of Isaiah (Matthew 15:8)." Jesus quotes Isaiah 29:13; Jeremiah 12:2 is a parallel, not a source. Say "is close to."
- ch 12 readings: "the first sign that Jeremiah was losing his faith in justice" is stronger than the text (he argues, he does not lose faith).
- ch 7 settings: "the Temple gate during a festival crowd." Neither 7:2 nor 26:2 says festival; 26:2 says "all the cities of Judah come to worship." Drop "festival" or mark it as a guess. 7:16-20 "spoken to the prophet privately" is likewise a guess.
- Note 8:11: 1 Thessalonians 5:3 is called a "return" of the "Peace, peace" cry; label it an echo. Note 12:13 cites Deut 28:38 and Lev 26:16 ("sow and others eat") for a verse that says "sown wheat, reaped thorns"; Micah 6:15 and Deut 28:38 fit, Lev 26:16 less so.
- ch 12 "J" lens: Mishnah Avot 4:15 is not in this part's sources; add a source key or drop the number (the numbering of Avot differs among editions).
- ch 12 X: "one of the Old Testament verses cited for God's concern for all peoples" is unsourced; either cite or remove.

**20. [minor] Missing gloss/consistency items.** The Plain 9:14 "the Baals"; the Greek has `εἰδώλων` ("idols"), and 11:6 Greek has "outside Jerusalem" not "streets": one line each in the chapter-page minus paragraph. Glosses.json covers 30 entries, which is fine; "silenced" (8:14) is glossed as "wiped out", but the note says the pun is "silenced/silenced" and the gloss hides it; revise.

**21. [minor] Haftarah wording.** Chapter 7 J lens: "In Jewish practice 7:21-8:3 with 9:22-23 is the reading for Tzav." Say "In the Ashkenazi custom ... (the Sephardi custom reads 7:21-28 with 9:22-23)." Nothing else wrong there.

**22. [minor] Gehenna topic.** "The idea that the valley was Jerusalem's burning garbage dump is first found in a medieval Jewish commentator (Radak)": Bailey says Kimhi gives it and that earlier sources do not support it; "first found" is an absolute. Say "is first reported in the commentary of Radak (about AD 1200) and has no support in sources from Jesus' day (Bailey)". Note 7:32 already phrases it better.

**23. [minor] Note typos and small slips.** 8:12 note 93: "the verse that follows (12:15)" (12:15 is seven verses on; say "the promise in 12:15"). Note 7:18 (cakes): the Greek transliterates the Hebrew (`χαυῶνας`); it does not translate "cakes", so the variant "plain" for the Greek should read "to make chauonas" or a note should say the Greek keeps the Hebrew word. Note 10:3 on hevel says "2:5; 8:19; 10:3, 8, 15 ..." which is fine. Note 7:11: the claim that a "den" is where robbers hide after robbing is standard; give a source or call it a common reading.

**24. [minor] Settings completeness.** Every speech block has a setting. Missing: 10:23-25 is lumped into 10:17-25 (fine), but 11:15-17 (the olive tree) is treated as part of the covenant sermon with no mention that it is poetry and addressed to a feminine singular "beloved" (the note says "Judah"); give it one sentence. Settings for 8:4-9 (shuv and the scribes) and 8:10-17 are merged under 8:1-17; the lying pen (8:8) deserves its own "to" (the scribes and teachers who say "we are wise").

**25. [minor] Sources.** sources.json `ackerman-queen-heaven` and `ackerman-green-tree`: `ackerman-green-tree` appears twice in the corpus; confirm there is one definition. `tertullian-marcion-3` duplicates `tertullian-marcion3` (finding 4). `pius-xii-ad-caeli-reginam` is new and fine.

**26. [minor] Variants that show only the Plain for the Greek where the Greek differs more.** 10:17 Greek "plain" gives "He has gathered your goods from outside," but the next clause (`κατοικοῦσα ἐν ἐκλεκτοῖς`) is also different; the variant says so in prose. 12:9 covers the first "bird of prey" only; Greek has "cave" both times, so the second clause is also a witness difference.

**27. [minor] Dating.** Chapter 10 H: "The northern din in 10:22 is Babylon's army" is stated flatly (it is the H lens, but the C lens never offers the Scythian view that the book's earlier chapters discuss). One clause would do.

**28. [minor] Hebrew numbering.** Handled well: note 9:1 states English 9:1-26 = Hebrew 8:23-9:25, ch 9 C lens repeats it, the haftarah references give both. One gap: the variants for ch 9 do not give the Hebrew number alongside the English (9:8 is Hebrew 9:7). Add "(Hebrew 9:7)" to the 9:8 entry.

**29. [minor] Targum, Vulgate, Peshitta.** The brief lists them as later witnesses; none appears in any variant. At least the Targum of 7:22, 10:11 and 11:19 ("choice lamb") should be named where it bears on a reading. Rashi's report in 11:19 already gives the Targum for "choice lamb"; put it in the variant entry recommended in finding 4.

**30. [minor] Fairness.** 7:22 is handled fairly (four readings, Rashi, Radak, critical). The Gehenna and Topheth notes are fair. The "views" on 7:1 (chapter 7 / chapter 26) are fair. The note at 10:23 ("Churches read such lines in different ways") is a vague nod to a traditions issue and cites no church; either add a card with sources or cut the sentence.

## Fixes applied

1. Fixed. New variant at 12:5 with three readings (MT and 4QJer-a "feel secure"; "stumble"; Greek "you have not trusted", checked in Swete's Vaticanus with lxx.py, Ziegler not available). Note rewritten: the Greek negative, the project's literal gloss "falling", and the split among KJV/ASV/WEB/YLT ("trust") and BSB/NIV ("stumble"). The Plain keeps "feel secure" with the reason stated.
2. Fixed. 8:10b-12 now matches the rebuilt 6:13-15 wherever the Hebrew is the same (8:10 "every one grabs at gain he has no right to", 8:11 "healed the broken place", 8:12 "Are they ashamed of the abomination they have done?"), in the same line breaks. Note 8:11 lists the four real Hebrew differences; the ch 8 deep section is retitled and corrected ("aligns them" now true); variants and glosses re-anchored. Open for the lead: terms.json says to'evah is "abhorrent" but 6:15 and 8:12 both say "abomination".
3. Fixed. 4QJer-b is said to run 9:23-10:21 (checked with dss.py; 10:22 is empty), "11-25" removed; "oldest Hebrew witness" dropped; date given as second century BC with the range of published estimates; Tov's "proofs" became "main examples".
4. Fixed. New variants at 11:19 (innocent lamb; "put wood into his bread" against the MT verb, with 4QJer-a agreeing with the MT, checked in dss.py). Note rewritten: Justin, Dialogue 72, is earlier than Tertullian (Against Marcion 3.19); the Fathers quote the Greek wording; Rashi's report of the Targum is in the variant. Chapter 11 X lens corrected. Source key changed to the existing tertullian-marcion3 (mine removed) and justin-dialogue added. The Plain "while it still has its bread" is now the literal "along with its bread", with "fruit" (KJV, ASV, WEB, BSB) and Rashi's poison reading in the note.
5. Fixed. Elephantine added in a new note (7:18 "to make me angry"), the topic and the Kuntillet 'Ajrud sentence corrected ("Yahweh of Samaria", "of Teman", Sinai-Judah border, asherah disputed). Every new fact checked: Hermopolis letters greeting the temple of the Queen of Heaven at Syene, the oath by AnatYHW, Anat-Bethel, van der Toorn's view, all reported from Mondriaan (2013) citing Porten and Yardeni and Porten; sources mondriaan-anat-yahu and van-der-toorn-anat-yahu added. The note says how far the evidence reaches and that it is later than Jeremiah.
6. Fixed. Ch 7 cards rebuilt. Mary card: same question and top (mary) as 39-45, Baptist added, Catholic cites ccc 966 and 971 and Lumen Gentium 59 as "Queen over all things", Orthodox sourced to the Dormition Lamentations, Reformed no longer rests on a claim about Scripture, every answer has that church's own text. Saints card (top intercession, which 13-20 now points to): Reformed split into "whom we pray to" and "whom the saints pray for", Lutheran as in Augsburg/Apology XXI, Orthodox sourced to the Dormition troparion, Baptist added. Key ccc kept (not catechism-catholic).
7. Fixed. New variant at 7:10 (Greek "We have kept away from doing all these abominations"), and the 7:10 note points to it.
8. Fixed. Variants added for 7:22 (Ketiv/Qere, Greek supports Qere), 8:1, 8:6, 10:9 (4QJer-b and the Greek share a shorter line and a different order), 10:5 (Greek "worked silver"); 10:13 and 10:17 Ketiv/Qere and scroll readings added to the existing entries; 8:7 4QJer-a "they keep" added. The lone-letter signs in 4Q70 (7:30, 7:31, 7:33, 8:1-3) were checked in the dataset: they have no lexeme and are not words; the ch 7 witness paragraph says no reading is taken from them.
9. Fixed. Frames reworked at 7:2, 7:5-7, 7:11, 7:23, 8:7, 10:5, 10:9, 12:6 (words kept where the Hebrew forces them).
10. Fixed. 10:14 "dull, without knowledge". The same wording is needed at 51:17 (part 50-52).
11. Fixed. 9:16 "scatter"; 11:15 reworded ("Can holy meat make your evil pass away from you, so that you can celebrate?") with its variant; 8:19 gets "The LORD answers" (note says the Plain adds it); 10:18 "so that they find out"; 12:13 new note on the command or statement.
12. Fixed. 10:6 variant note rewritten ("Both lines of 10:6 are lost; the entry shows the second line because the anchor covers it").
13. Fixed. Retitled "A repeated passage the Greek lacks".
14. Fixed. Ch 11 summary says "second time (the first was 7:16)"; note 11:14 now says second of three bans.
15. Fixed. 7:3 has "the Lord, the God of Israel"; 7:21 has only "the Lord" (checked in Swete).
16. Partly accepted. The "wordplay" claim is removed. The reviewer's "Ketiv/Qere doublet" is not right either: the Leningrad Codex writes arqa and ar'a both as printed (no Qere in texts/auto), so the note calls them two spellings of one word. Added that 4Q71 has the verse and the Greek keeps it after 10:9. A "language: Aramaic" cue was not added (the site has none that I could find).
17. Fixed. Heading "Circumcised and Uncircumcised"; "so many modern versions" replaced by named versions (WEB, ASV, KJV, BSB); Greek list without Judah added; Rashi quoted (Sefaria numbers it 9:25); "had their own forms of circumcision" softened; "is behind Paul" became "is close to".
18. Fixed. 7:11 now "a cave for bandits" as in the Plain of Matthew, Mark and Luke; 7:31-32 "Ben-hinnom's Valley" as 19:6.
19. Fixed. Jeremiah 12:2 "close to" Isaiah 29:13; "losing his faith" replaced; "festival" and "privately" dropped; 1 Thessalonians 5:3 called an echo; Leviticus 26:16 dropped from the 12:13 note (Genesis 3:18 added); Avot given as "numbered 4:15 in many editions" with the key mishnah-avot; the unsourced "God's concern for all peoples" sentences removed.
20. Fixed. Lines added on 9:14 ("idols") and 11:6 ("outside Jerusalem"); the 8:14 gloss now gives both senses of "silenced".
21. Fixed. Ashkenazi and Sephardi customs stated.
22. Fixed. Gehenna topic now "first reported in the commentary of Radak (about AD 1200) and has no support in sources from Jesus' day (Bailey)".
23. Fixed. "the promise in 12:15"; the 7:18 cakes variant and note say the Greek writes the Hebrew word (chauonas); the 7:11 "den" claim became "many readers take" a reading of the Hebrew.
24. Fixed. 8:1-17 split into three settings (8:1-7, 8:8-12, 8:13-17), the middle one aimed at the scribes and prophets; the 11:15-17 poetry and feminine singular "beloved" is stated.
25. Fixed. tertullian-marcion-3 removed; ackerman-green-tree is defined identically here and in 39-45, so left as is.
26. Fixed. The 10:17 and 12:9 variant notes now say the second clause also differs in the Greek.
27. Fixed. The Scythian view is named in the ch 10 C lens, and the H lens says "if the foe is Babylon".
28. Fixed. "This is Hebrew 9:7" added to the 9:8 entry.
29. Partly accepted. Targum Jonathan's "choice lamb" is named in the 11:19 variant, as reported by Rashi. I did not name the Targum at 7:22 or 10:11: its wording there was not read, so nothing is claimed.
30. Fixed. The vague sentence at 10:23 (and its topic tag) was cut.
