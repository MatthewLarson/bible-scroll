# Hostile review: 2 Kings 18–25 (part 18-25)

Reviewed: plain.txt (all 228 verses against `node tools/literal.js 2Ki 18`–`25`), notes.json (162), variants.json (32), glosses.json (82), chapters.json (8), topics.json (23 contributions), sources.json (25 keys), and the new topic cores hezekiah.json, manasseh.json and josiah.json, plus this part's assyria contribution. Build: `node tools/build.js --check 2Ki/18-25` gives 0 errors and 0 warnings. `--check 2Ki` gives 0 errors and 1 warning, which is outside this part (01-08, chapters 8, a "2 Kings 22:3" quotation).

## Verdict

This is a strong part. The translation is close to the Hebrew throughout. I found no verse that copies the NIV or ESV, and the key terms follow terms.json. The variant work on Isaiah 36–39 and Jeremiah 52 is careful, and the history (the Prism, Lachish, the Babylonian Chronicle, the ration tablets, Siloam) is mostly accurate and well sourced. The problems are of four kinds. (1) One variant entry gets its facts backwards: Hamutal, 23:31. (2) Some quotations use ESV/RSV wording or do not match the site's own Plain. (3) The Claude's-theory material does not meet rule 4: no box says where it overlaps with published work, one claims a published idea as Claude's, and one is stated as fact in an ordinary note. There are also fewer boxes than the brief describes. (4) The site's reference parser sends several 2 Kings references to Deuteronomy or 1 Kings. There is also a group of missing variants (Abi/Abijah, the Greek "anger" at 24:3, "messengers/servants" at 19:23, 1QIsa-a at Isaiah 37:27 and 37:9, the Greek at 23:7). A few dating and attribution claims are also off: the 20:1 and 20:12 chronology, Josephus and Berossus, and Luke's genealogy. None of this is critical. Everything can be fixed in place.

Severity count: critical 0, major 10, minor 33.

## Findings

### Major

**1. major: variants.json 23:31 (Hamutal/Hamital) has the wrong verse and a false claim about Jeremiah.**
The site's Leningrad data (texts/orig/2Ki.json, texts/auto/2Ki.json) has no Ketiv at 23:31. There the text reads חֲמוּטַל with no marking. The Ketiv חֲמִיטַל / Qere חֲמוּטַל is at **24:18** only. The entry also says "Jeremiah 52:1 has Hamutal in both its written and read forms." That is wrong. texts/auto/Jer.json gives Jeremiah 52:1 the same pair: `Q(K) חֲמוּטַל … K= חֲמִיטַל`. The brief's list of Qere places ("23:31, 24:18") repeats the first error.
*Fix:* move the entry to 24:18. Say that 23:31 reads Hamutal with no Ketiv in the Leningrad Codex, and that Jeremiah 52:1 has the same Ketiv/Qere as 24:18. Rewrite the `p` and `why` to match.

**2. major: quotations in another version's wording, or not in the site's Plain.**
- notes 19:15 (echo): "the LORD is God; there is no other besides him" (Deuteronomy 4:35). The words "there is no other besides him" match the ESV word for word. They also differ from the site's Plain, which reads "the LORD is God. Apart from him there is no other." *Fix:* quote the site's Plain.
- notes 20:7: "The Lord created medicines from the earth, and a sensible man will not despise them" (Sirach 38:4) is the RSV wording. *Fix:* translate it yourself from the Greek, or name the RSV in the parentheses as STYLE allows.
- notes 19:3: "Shall I bring to the point of birth and not cause to give birth?" (Isaiah 66:9). "Bring to the point of birth" is the ESV phrase. *Fix:* translate it afresh, e.g. "Would I open the womb and not let the child be born?"
- notes 21:2: "the abhorrent ways of those nations" (Deuteronomy 18:9). The site's Plain says "the abhorrent things those nations do." *Fix:* use the Plain.
- notes 19:19: "all the peoples of the earth" (1 Kings 8:43, 8:60). The site's Plain says "all the earth's peoples" (8:43) and "every people on earth" (8:60). *Fix:* use the Plain.

**3. major: the Claude's-theory material does not meet STYLE rule 4.**
The labels are clear: every box is titled "Claude's theory: …" and ends with a disclaimer. But:
- No box (chapters 18, 21, 23, 25) and neither topic `claude` entry says where the idea overlaps with published scholarship, as rule 4 requires.
- Chapter 25 box ("the book ends where it began"). The Jehoiachin–Mephibosheth parallel is published. It is the subject of J. J. Granowski, "Jehoiachin at the King's Table" (in *Reading Between Texts*, ed. D. N. Fewell, 1992), and is common in the commentaries. Yet the box says "This reading is Claude's." Note 25:29 already makes the same point as plain fact ("Now the roles are turned…"). *Fix:* name the published form of the idea. Keep as Claude's only the new part (the frame from 1 Samuel 1:4–9). Remove the duplicate from note 25:29, or turn it into a pointer.
- Chapter 18 box ("the speech answers the reform"). The box calls it speculation that the Rabshakeh voiced a real Judean objection to closing the high places. But note 18:22, an ordinary `views` note, states it as fact: "the Rabshakeh knows that many Judeans saw it differently." This is also a common view in the commentaries. *Fix:* hedge note 18:22 ("may have known"), and say in the box that the idea is published.
- mount-zion `claude` entry ("Kings' Zion theology is conditional, closer to Jeremiah"). This is close to Clements, *Isaiah and the Deliverance of Jerusalem*, which the part already cites at 19:34. *Fix:* say so.
- The count does not match the brief. chapters.json has boxes in 18, 21, 23 and 25 only, with **none in chapter 22**. topics.json has only **two** `claude` entries (hezekiah, mount-zion), not three. *Fix:* either add the missing chapter 22 box and the third topic theory, or correct the part's report.

**4. major: the reference parser sends 2 Kings references to the wrong book (mechanics).**
In tools/refs.js, a bare c:v joined by ";", "," or "and" carries over the previous book. I ran the parser on this part's prose:
- chapters.json 23, deep "Josiah's reform and Deuteronomy, point by point": "Deuteronomy 7:5 and 12:3 and 23:6, 23:14", "Deuteronomy 23:17 and 23:7", "Deuteronomy 18:11 and 23:24" and "Deuteronomy 16:1–8 and 23:21–23" all link to **Deuteronomy** 23:6, 23:14, 23:7, 23:24 and 23:21–23. The 2 Kings verses were meant. *Fix:* write "2 Kings 23:6" and so on, or recast as "(23:6) … Deuteronomy 7:5".
- notes 18:4: "(1 Kings 22:43; 12:3; 15:35)" links to 1 Kings 12:3, and 15:35 drops (1 Kings 15 has 34 verses). 2 Kings 12:3 and 15:35 were meant. *Fix:* "(1 Kings 22:43; 2 Kings 12:3; 15:35)".
- About a dozen links drop silently because a bare number follows "compare": 18:21 "compare 30:1–7" (Isaiah); 19:18 "compare 28:36, 28:64"; 20:8 "(38:9–20)", "(38:21–22)"; 20:13 "and 32:31"; 20:20 "compare 32:3–4"; 22:2 "compare 5:32; 28:14"; 22:3 "(34:8–14)"; 22:8 "compare 28:61; 29:21"; 24:6 "compare 36:30". *Fix:* repeat the book name.

**5. major: the history of Hezekiah's Tunnel is one-sided (notes 20:20; chapters 20, deep "The Siloam tunnel").**
Note 20:20 cites `reich-shukron-tunnel`, but neither text reports what Ronny Reich and Eli Shukron argued. From the pottery and the spring-system excavations, they dated the tunnel earlier than Hezekiah, to around 800 BC or the early 8th century. The deep section mentions only the Hasmonean "minority" (Rogerson and Davies, 1996) and says the evidence has kept "the majority view firm." The 2003 radiocarbon result is real (Frumkin, Shimron and Rosenbaum). But the debate the brief asks about is Hezekiah against an earlier king, not only Hezekiah against the Hasmoneans. *Fix:* add one or two sentences giving the Reich–Shukron view and the reply (the radiometric dates; 2 Chronicles 32:30). Then call Hezekiah's date the majority view, not a settled one.

**6. major: the chronology in notes 20:1 and 20:12 contradicts itself.**
Note 20:1 puts the illness in Hezekiah's 14th year, "the year of the invasion (18:13)", which is 701. In the same note it says the embassy "fits best in 703 BC." But the embassy came *because* Merodach-baladan heard of the illness (20:12), so it cannot be earlier than the illness. Chapter 20 "Read as history" ("703–701") leaves the problem unsolved. *Fix:* say that if the embassy belongs to 703, the illness came before the invasion, and the "fourteenth year" link is a schematic count (see 18:1). Or offer the alternative dates honestly: some put the embassy in Merodach-baladan's first reign, 721–710.

**7. major: notes 19:35 wrongly makes Berossus the source of the plague (a brief issue).**
"Josephus, citing the Babylonian writer Berossus, speaks of a plague (*Antiquities* 10.21)." In *Ant.* 10.20 Josephus cites Berossus only for Sennacherib's rule and campaign. The plague ("a pestilential distemper", 10.21) is Josephus' own retelling, and the Berossus quotation itself is missing from the text. *Fix:* "Josephus describes it as a plague (*Antiquities* 10.21); just before, he names Berossus, but whether the plague detail comes from Berossus is unclear." The rest of the three-way presentation (miracle, plague with Herodotus 2.141, theological telling) is fair, and so is the deep section in chapter 19.

**8. major: chapters.json 25, view X says Luke traces Jesus through Jehoiachin.**
"A hope Matthew and Luke trace to Jesus through Jehoiachin's grandson Zerubbabel (Matthew 1:12)." Luke 3:27 has Zerubbabel son of Shealtiel son of **Neri**, not a line through Jehoiachin/Jeconiah. Only Matthew (1:11–12) runs through Jeconiah. *Fix:* "Matthew traces…". You could add that Luke's list reaches Shealtiel through Neri, a well-known puzzle.

**9. major: missing variants and missing witnesses.**
These are differences that a major translation footnotes, or that change the meaning:
- **18:2, Abi.** The NIV prints "Abijah" with a footnote ("Hebrew Abi"); 2 Chronicles 29:1 reads אֲבִיָּה. There is no variant and no note. *Fix:* add a short variant (MT Kings אֲבִי; 2 Chronicles 29:1 אֲבִיָּה), following MT.
- **24:3, "by the LORD's own word".** MT has עַל־פִּי יְהוָה. The Greek is reported (for example in the Pulpit Commentary, giving πλὴν θυμὸς κυρίου ἦν ἐπὶ τὸν Ιουδαν) to read "the LORD's anger was on Judah", as if from עַל־אַף יְהוָה, the phrase used in 24:20. BHS and several commentators prefer it. Note that Brenton's English here has "the purpose of the Lord", so check this in Rahlfs or the Göttingen edition before you cite it.
- **19:23, "Through your messengers".** Kings has בְּיַד מַלְאָכֶיךָ; Isaiah 37:24 has בְּיַד עֲבָדֶיךָ, "your servants". This is a real Kings–Isaiah difference that the list of Isaiah variants misses.
- **20:12.** The Greek of Kings reads "Marodach" (Brenton: "Marodach Baladan"). It supports the Plain's choice, so add it as a witness to reading 0 instead of resting only on Isaiah 39:1.
- **19:26.** The writer is unsure about 1QIsa-a at Isaiah 37:27. The Great Isaiah Scroll is reported (DJD 32; *Dead Sea Scrolls Bible*) to read הנשדף לפני קדים, "scorched before the east wind". It is a third reading, and it supports Kings' "scorched" against Masoretic Isaiah's "field". Add it as a reading or in `b`, citing `djd32-isaiah`.
- **19:9.** 1QIsa-a at Isaiah 37:9 is widely reported to combine both verbs ("he heard, and turned, and sent"). This bears directly on the "seam" argument in the `why`. Check it in DJD 32 and add it.
- **23:7, "coverings" (בָּתִּים).** The writer is unsure about the Greek here. Codex Vaticanus just transliterates the word (χεττιιν). The Lucianic text is reported to have στολάς, "robes", which supports the common emendation בַּדִּים, "linen garments". That reading lies behind note 23:7's "probably robes or hangings." Name it in the note, or add a variant.
- **24:6.** The Greek of 2 Chronicles 36:8, and the Lucianic text of Kings as reported, add that Jehoiakim was buried "in the garden of Uzza (Ganoza)". This bears on note 24:6 ("How did Jehoiakim die?"). Mention it there, with a hedge.
- **25:19.** MT has הַסֹּפֵר שַׂר הַצָּבָא, "the scribe, the commander of the army". Jeremiah 52:25 has סֹפֵר שַׂר הַצָּבָא, "the scribe of the commander". The Plain ("the secretary of the army commander") follows Jeremiah's sense without saying so. Add a sentence to the 25:19 variant.
- **25:24.** Kings has "Don't fear the Chaldeans' servants"; Jeremiah 40:9 has "Don't be afraid to serve the Chaldeans" (מֵעֲבוֹד). This is a meaning difference in a passage the Plain already compares with Jeremiah.
- **24:10.** The Ketiv is עָלָה, "he went up"; the Qere and the Plain have עָלוּ, "they went up". A one-line variant would explain why 24:11 then says Nebuchadnezzar came "himself". This one is optional.
- **25:3.** Add that the Greek of Kings also lacks the month ("on the ninth of the month"). That shows the gap is old.

**10. major: notes 18:34 and variants 18:34 (Lucianic plus) need sharper wording and support.**
The `why` says, "This reading is given as commentators report it; it has not been checked against the Antiochene edition here." That is an internal note to the writer, not text for the reader. The plus ("Where are the gods of the land of Samaria?") is the standard report (Burney; Montgomery). Rahlfs (B) does not have it. I confirmed this: Rahlfs 18:34 reads "…καὶ ὅτι ἐξείλαντο Σαμάρειαν ἐκ χειρός μου". *Fix:* cite Burney/Montgomery and Fernández Marcos–Busto Saiz for the Lucianic text, and drop the disclaimer. The 18:29 claim, that the Greek (Rahlfs) has ἐκ χειρός μου, checks out (Rahlfs: "ἐξελέσθαι ἐκ χειρός μου"). Brenton's English "out of his hand" does not affect this.

### Minor

**11. minor: plain 18:20 is close in shape to the NIV.**
The Plain's "You say you have a plan and the might to make war, but that is just talk from your lips" follows the NIV's structure ("You say you have … but you speak only …"). The Hebrew is elliptical: אָמַרְתָּ אַךְ־דְּבַר־שְׂפָתַיִם עֵצָה וּגְבוּרָה לַמִּלְחָמָה. *Fix:* rebuild it from the Hebrew, e.g. "You think mere words from your lips are a plan and strength for war?"

**12. minor: plain 18:14, "I have offended", softens חָטָאתִי ("I have sinned / done wrong").**
Note 18:14 explains the word, but the English is weaker than the Hebrew. *Fix:* "I have done wrong."

**13. minor: plain 19:23, "With chariots past counting", sharpens בְּרֹב רִכְבִּי and drops "my".**
*Fix:* "With my many chariots." Update the variant's `plain` to match.

**14. minor: plain 19:31, "The burning zeal", adds "burning".**
The Hebrew is just קִנְאַת. *Fix:* "The zeal of the LORD of Armies". The gloss can carry the feel.

**15. minor: plain 22:13 flattens a repetition that note 22:13 relies on.**
The note says "the words of this scroll" comes back again and again in 22:11–23:3. But the Plain renders דִּבְרֵי הַסֵּפֶר at 22:13 (twice) as "what this scroll says." STYLE asks the Plain to keep repetitions. *Fix:* "about the words of this scroll … did not listen to the words of this scroll."

**16. minor: רָעָה is translated inconsistently.**
It is "a disaster" at 21:12 but "evil" at 22:16 and 22:20 ("bringing evil on this place"). In 22:16 and 22:20 it means calamity, not moral evil. *Fix:* "disaster" in 22:16 and 22:20.

**17. minor: plain 25:7 uses passives that hide who acted.**
The Hebrew has "he blinded … he bound him … he brought him", meaning the king of Babylon. The Plain has "Zedekiah's eyes were put out. He was chained … and taken". *Fix:* keep the active verbs.

**18. minor: plain 24:10, "Then", drops בָּעֵת הַהִיא, "At that time".**

**19. minor: plain 19:4, "the words he has heard", is ambiguous.**
In the Hebrew the one who heard is "the LORD your God." *Fix:* "for the words the LORD your God has heard."

**20. minor: chapters.json 18, "Read as composed speech", gives the wrong count.**
It says batach comes "seven times in 18:19–24 and 18:30". Note 18:19 correctly says eight. *Fix:* "eight times in 18:19–30."

**21. minor: notes 19:12 says "Amos 1:5 names its ruler."**
It does not. Amos 1:5 speaks of "the one who holds the scepter from Beth-eden." *Fix:* "Amos 1:5 threatens its ruler."

**22. minor: notes 20:2 attributes the "wall of the temple" reading to the rabbis in Berakhot 10b.**
Berakhot 10b gives "the walls of his heart" (Resh Lakish) and the Shunammite's wall (R. Levi). The "wall of the sanctuary" reading is the Targum's. *Fix:* check it, and attribute it to the Targum.

**23. minor: notes 23:8 misdescribes how close "gates" and "goat-demons" are.**
It says the words differ "only in one similar-looking letter." In fact שְׁעָרִים and שְׂעִירִים differ by a *yod* and by the shin/sin dot. *Fix:* "differ by one small letter and a dot."

**24. minor: notes 23:12 has two problems.**
The emendation "vayritsem" needs an added suffix, not just new vowels (it is usually given as וַיְרַצֵּם). Also, the transliteration is "vayyarats" in `orig` but "vayyarots" in the body. *Fix:* correct both.

**25. minor: notes 20:9 says modern versions "read the same letters" as a question.**
The usual correction (BHS) is הֲיֵלֵךְ, which adds a letter. The KJV simply takes הָלַךְ as a question. *Fix:* say so.

**26. minor: chapters.json 25 (view H) dates the release to 562.**
Note 25:27 has March 561, which is correct: Adar of Amel-Marduk's accession year. *Fix:* align on 561.

**27. minor: chapters.json 25, deep "The meaning of the ending", has three problems.**
(a) "Joseph's dream about the cupbearer". It was the cupbearer's dream, which Joseph explained. (b) Wolff is listed under "a way to live in exile", but note 25:30 lists him under "a small door left open", which fits his repentance thesis. (c) Note 25:27 credits Levenson with the Joseph echo. Check this: Levenson's JBL article is mainly about the Davidic line. *Fix:* correct (a) and (b), and check (c), citing Granowski or others if needed.

**28. minor: chapters.json 19, deep "The Prism, Lachish and the angel", files the two-campaign theory under "theology over memory".**
Bright's theory of a second campaign around 688 was a way to *keep* the B accounts as history. *Fix:* treat it as a separate, harmonizing view.

**29. minor: chapters.json 24, view A, dates a Lachish ostracon as possibly 597.**
"may belong to this period or to 588." The Lachish letters come from Level II, about 589–586. *Fix:* date them to 589–586. Here you could also note that the commander "Coniah son of Elnathan" (Letter 3) shares a family name with Nehushta's father (24:8). Present that only as a possibility.

**30. minor: chapters.json 21, deep, "Ashurbanipal did hold court in Babylon after 648 BC".**
This is doubtful as worded: after 648 Ashurbanipal installed Kandalanu. *Fix:* "Assyria reasserted control over Babylon in 648."

**31. minor: notes 21:6 has a garbled sentence.**
"Since Hezekiah was Manasseh's father and this son was not Amon…" does not follow. *Fix:* "Amon, who succeeded him, was born late in Manasseh's reign, so the son in this verse was another child."

**32. minor: notes 21:12, "The phrase is a news so shocking".**
This is a grammar slip.

**33. minor: notes 23:33 repeats the 23:33 variant (Qere/Ketiv), and notes 18:7 and 18:8 both tell the Padi story.**
STYLE says "never explain the same point twice." *Fix:* trim the second telling in each case.

**34. minor: notes 25:12 and topics.json (exile, uncommon) disagree about the "empty land".**
The note gives the "empty land" picture to Chronicles alone. The exile topic says "the 'empty land' picture of 2 Kings 25". In fact 25:26 ("all the people, small and great … left for Egypt") does give Kings such a picture. *Fix:* make them agree.

**35. minor: notes 25:13 says the ark is not mentioned after Solomon "except 2 Chronicles 35:3".**
The same note then cites Jeremiah 3:16, which mentions it. *Fix:* reword.

**36. minor: notes 20:11 and the chapter 20 deep section hedge the 1QIsa-a reading differently.**
The note states the reading as fact ("the steps of the upper room of Ahaz"); the deep section says "is reported." The reading במעלות עלית אחז is well established. *Fix:* state it plainly in both, citing `djd32-isaiah`. Note too that it is Isaiah 38:8, not Kings.

**37. minor: notes 23:26, "Lamentations Rabbah", gives no place.**
The substance is right (images half on each door leaf). *Fix:* cite "Lamentations Rabbah 1:53 (on Lamentations 1:18); compare Bavli Taanit 22b."

**38. minor: chapters.json 19, view J, gives no source for the Passover-night tradition.**
The tradition is real. It is sung in the Haggadah poem "Va-amartem zevach Pesach" ("the fat ones of Pul and Lud were burned … on Passover"), and it appears in the midrash. *Fix:* name the poem, so readers can find it. The Sanhedrin 94a items in the same view are correct.

**39. minor: chapters.json 18, view X, says Jesus calls Nehushtan "a sign of his cross" (John 3:14).**
This overstates the text: John compares the lifting up of the serpent with the Son of Man being lifted up. *Fix:* "which Jesus compares to his own lifting up."

**40. minor: notes 20:19 says "as Josiah's reprieve is later called a mercy (22:20)."**
22:20 does not use that word. *Fix:* "as Josiah's reprieve later is."

**41. minor: topic contributions overstate debated points.**
- jerusalem: "Jerusalem grew greatly under Hezekiah, as refugees from the north … filled its new western quarter" is stated as fact. Note 22:14 rightly hedges it ("Many think"); the date and cause of the growth are debated (Broshi against Na'aman). *Fix:* hedge it.
- assyria: "the best-documented event in the Old Testament". *Fix:* "one of the best-documented".

**42. minor: glosses.**
- 18:23 "place a bet with" glossed as "make a wager with" adds nothing.
- 23:3 "the pillar" glossed as "a raised place in the temple" misstates עַמּוּד, which means a pillar. *Fix:* "a pillar in the temple court where kings stood (11:14)."
- 23:5 "the zodiac" is a little anachronistic for מַזָּלוֹת. *Fix:* "the constellations."

**43. minor: variants.json 25:3's `why` claims too much.**
It says it is "the only place in this part where the Plain follows a reading not in the Hebrew of Kings." But 20:12 follows Isaiah's "Merodach," and 25:4 supplies a verb. *Fix:* "the only place where the Plain adds words from another book."

## Things checked and found sound

- The Plain follows its stated readings at 18:27 (Ketiv), 19:23, 19:31, 19:37, 20:4, 23:33, 23:36 and 24:18 (Qere), 20:9 (MT vowels), 25:3, 25:4, and 18:29, 20:13, 23:16 and 18:34 (Kings kept). It handles 18:14–16 (only in Kings) in the 18:14 note.
- The Isaiah and Jeremiah readings I checked are accurately quoted. 18:29 is in Rahlfs as stated. Brenton confirms Greek "rejoiced" at 20:13. The NRSV does follow the Greek at 23:16. The 1QIsa-a marginal addition of Isaiah 38:21–22 is correct.
- Term use matches terms.json: hold on to, abhorrent, under the ban, decrees and rules, being, ghosts of the dead and spirits that know things, ruler, the LORD of Armies, inheritance.
- I found no NIV/ESV drift in the translation apart from item 11.
- These facts are correct: the 46 towns and 200,150 people, the 30 and 800 talents, the Lachish ramp and reliefs, Taharqa and Kawa, Parpola and Arda-Mulissi, Esarhaddon's and Ashurbanipal's lists naming Manasseh, Cogan 1974, the Gemaryahu bulla, the Broad Wall, the Babylonian Chronicle (2 Adar = March 15/16, 597), Weidner 1939 and the ration tablets, Al-Yahudu, the Lachish letters 4 and 3, the Ba'alyasha' seal, the Jaazaniah seal, Taanit 29a, Rosh Hashanah 18b, Yoma 52b and Horayot 12a, Yevamot 49b, Megillah 14b and 10b, Sanhedrin 60a, 93b and 94a, and Josephus *Ant.* 10.38, 10.97 and 10.106–107, and *Against Apion* 1.146–147.
- All 25 keys in sources.json are real works with correct details, and each is used.
- The section on Manasseh in Kings and Chronicles, the 22:8 debate over the scroll and Deuteronomy, the 22:20 Huldah note and the 25:30 note on the ending are fair, and they name their sources.

## Fixes applied

All 10 major findings and all 33 minor findings were fixed. None was rejected.

**Major**
1. Hamutal: the variant now sits at 24:18. It says that 23:31 is written Hamutal with no Ketiv, and that Jeremiah 52:1 has the same Ketiv/Qere pair as 24:18. The `p` and `why` are rewritten.
2. Quotations:
   - 19:15 now quotes the site's Plain of Deuteronomy 4:35 ("compare 4:39").
   - 21:2 quotes the Plain of Deuteronomy 18:9.
   - 19:19 quotes the Plain of 1 Kings 8:43 and 8:60 separately.
   - Sirach 38:4 (20:7) and Isaiah 66:9 (19:3) are now in fresh wording.
   - The same pass reworded, in fresh wording, Isaiah 31:1 (18:21), 2 Chronicles 32:25, 32:31 (20:13) and 32:30 (20:20), Jeremiah 15:4 (24:3) and Ezekiel 12:13 (25:7).
3. Theory boxes (STYLE rule 4):
   - Every box and every topic `claude` entry now says where it overlaps published work, and what, if anything, is Claude's own.
   - Chapter 25: credits Granowski (1992) for the Jehoiachin–Mephibosheth parallel. Only the 1 Samuel 1 frame is kept as Claude's. Note 25:29 is now a pointer that names Granowski (new key `granowski-kings-table`).
   - Chapter 18: says the idea is common in the commentaries. Note 18:22 is hedged ("may have known ... as many commentators suggest").
   - mount-zion: names Clements.
   - hezekiah: notes that commentators often contrast 18:5 with 18:14.
   - Chapter 21 (bowl) and chapter 23 (bones and Passover) say Claude knows of no published form of the idea.
   - Added the missing chapter 22 box, "a widening circle of hearing" (Deuteronomy 31:9–13).
   - Added a third topic theory: josiah, "Josiah as a new Joshua". It credits Nelson 1981 (new key `nelson-josiah-joshua`) and adds only the Megiddo point.
4. References:
   - 18:4 now reads "(1 Kings 22:43; 2 Kings 12:3; 15:35)".
   - The chapter 23 deep section is recast so that each 2 Kings reference carries "2 Kings" and comes before its Deuteronomy citation.
   - Book names were added after "compare" and in the parenthetical references at 18:21, 19:18, 20:8, 20:13, 20:20, 22:2, 22:3, 22:8 and 24:6.
   - The "19:9a/19:9b" forms the parser could not read are spelled out in words in the 18:17 note and on the chapter 18 and 19 pages.
   - Checked with tools/refs.js. Every remaining carried-over reference is an intended continuation (for example "Psalm 71:22; 78:41").
5. Siloam tunnel: the 20:20 note and the chapter 20 deep section now give Reich and Shukron's earlier date (around 800 BC) and the reply (the radiometric dates and 2 Chronicles 32:30). Rogerson and Davies' Hasmonean date is also given (new key `rogerson-davies-siloam`). Hezekiah's date is called the majority view, not a settled one.
6. 20:1 and 20:12 dates: if the embassy belongs to 703, the illness came before the invasion and the link to the fourteenth year is a schematic count. The alternative date in 721–710 is also given. The chapter 20 "Read as history" paragraph is aligned.
7. 19:35: Josephus describes the plague himself (*Antiquities* 10.21). It is unclear whether the detail comes from Berossus.
8. Chapter 25, view X: now "Matthew traces ...", with Luke 3:27's line through Neri noted.
9. Missing variants added:
   - 18:2 Abi/Abijah.
   - 24:3 "word"/"anger", hedged as commentators report it.
   - 19:23 messengers/servants.
   - 23:7 battim/baddim (Vaticanus χεττιιν; Lucianic "robes" as reported). Note 23:7 points to it.
   - 24:6 Ganoza in the Greek of 2 Chronicles 36:8 and the Lucianic text as reported. Note 24:6 mentions it, hedged.
   - 25:19 the secretary. The Plain follows Jeremiah's sense, as the variant now says.
   - 25:24 fear the Chaldeans' servants / fear to serve.
   - 24:10 Ketiv/Qere.
   - 18:11 "mountains of the Medes", the Greek reading also found at 17:6.
   - 1QIsa-a at Isaiah 37:27 (19:26) and 37:9 (19:9), both marked "as reported".
   - 25:3 now notes that the Greek of Kings also lacks the month.
   - 20:12: per the coordinator's rule on Hebrew-form king names, the Plain now reads **Berodach-baladan** (MT Kings), as the site keeps Hebrew name forms elsewhere in 2 Kings. The variant now follows MT, and Isaiah 39:1 and the Greek "Marodach" are reading 1. Note 20:12's anchor is updated.
10. 18:34: the Lucianic reading now cites Burney, Montgomery and the Fernández Marcos–Busto Saiz edition, and the "not checked" sentence is removed.

**Minor**
- 11: 18:20 rebuilt from the Hebrew: "Do you think mere words from your lips make a plan and strength for war?" The variant is updated.
- 12: 18:14 "I have done wrong". The note anchor and gloss are updated.
- 13: 19:23 "With my many chariots". The variant is updated.
- 14: 19:31 "The zeal of the LORD of Armies". The gloss carries "burning".
- 15: 22:13 "the words of this scroll", twice.
- 16: 22:16 and 22:20 now read "disaster".
- 17: 25:7 has active verbs, with "the king of Babylon" supplied as subject. The note anchor is updated.
- 18: 24:10 "At that time".
- 19: 19:4 "the words the LORD your God has heard".
- 20: chapter 18 now says "eight times in 18:19–30".
- 21: 19:12 "threatens its ruler".
- 22: 20:2 attributes "the wall of the temple" to the Targum, and "the walls of his heart" to Berakhot 10b.
- 23: 23:8 "one small letter and the dot on the first letter".
- 24: 23:12 now gives וַיְרַצֵּם with the added suffix. The transliteration is unified as *vayyarots*.
- 25: 20:9 now says the KJV takes the word as a question and the common correction adds a letter (*hayelekh*).
- 26: chapter 25, view H, now dates the release to 561.
- 27:
  - (a) Now "the cupbearer's dream that Joseph explained".
  - (b) Wolff is moved to the hope / call-to-repentance view, matching note 25:30.
  - (c) The Joseph echo is no longer credited to Levenson in note 25:27 ("Several scholars").
- 28: the two-campaign theory is now a separate, harmonizing view in note 18:17 and in the chapter 19 deep section.
- 29: the Lachish letters are dated about 589–586. Coniah son of Elnathan is mentioned as only a possible link to 24:8.
- 30: "Assyria reasserted control over Babylon in 648 BC".
- 31: the 21:6 sentence is rewritten.
- 32: 21:12 grammar fixed.
- 33: the second telling of the Ketiv/Qere in note 23:33 is replaced by a pointer to the variant. The Padi story in 18:8 is trimmed to a pointer to 18:7.
- 34: 25:12 and the exile topic now agree. Chronicles gives the "empty land" picture most fully, and 25:26 suggests it.
- 35: 25:13 ark sentence reworded.
- 36: the 1QIsa-a reading at Isaiah 38:8 is stated plainly in both places, cited to `djd32-isaiah`, and marked as Isaiah, not Kings.
- 37: now "Lamentations Rabbah 1:53, on Lamentations 1:18; compare Bavli Taanit 22b".
- 38: chapter 19, view J, names the Haggadah poem "Va-amartem zevach Pesach".
- 39: "which Jesus compares to his own lifting up (John 3:14)".
- 40: "as Josiah's reprieve later is (22:20)".
- 41: the jerusalem topic is hedged. The assyria topic now says "one of the best-documented".
- 42: the 18:23 gloss is removed. 23:3 is now "a pillar in the temple court where kings stood (11:14)". 23:5 is now "the constellations".
- 43: 25:3 `why` now says "the only place where the Plain adds words from another book".

**Re-audit and check**
- Drift re-audit of the 12 rewritten verses (18:11, 18:14, 18:20, 19:4, 19:23, 19:31, 20:12, 22:13, 22:16, 22:20, 24:10, 25:7): 6 changed, 6 kept as forced. The log is in scratch and records only verse, outcome and reason.
- 18:11 is also aligned with 17:6's wording ("the Habor River of Gozan", "the towns of Media").
- Counts now: 228 verses, 162 notes, 41 variants, 81 glosses, 8 chapter pages, 23 topic contributions, 28 part source keys.
- `--check 2Ki/18-25` and `--check 2Ki`: 0 errors, 0 warnings.
