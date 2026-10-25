# Hostile review: Numbers, part 11-21

Reviewer: num-11-21 reviewer agent, 2026-10-23. Scope: chapters 11–21 only (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json, and the six new topic cores caleb, kadesh, red-heifer, bronze-serpent, tassels, sihon-and-og). Checked against texts/orig/Num.json via `node tools/literal.js`, the BSB/KJV in texts/en, texts/auto, and my knowledge of the ESV, NIV, LXX, SP and DSS, with web checks where noted.

## Verdict

This is a strong part. I compared all 351 verses of the Plain with the literal line. The translation sticks closely to the Hebrew: names, numbers and who-does-what are right, the book's terms are mostly kept, and the poetry is set out. I found only a few NIV/ESV echoes in the main text. The notes are dense and usually accurate, and they treat Jewish, Christian and critical readers fairly. The weak spot is the variants file. Its Plain English for the Samaritan and 4QNum-b additions follows the ESV's wording of Deuteronomy closely. Those readings were never checked against a Samaritan text, and the notes say so to the reader in "we could not check" language. One quotation is taken from a hobbyist website but cited to Abegg, Flint and Ulrich. Three Samaritan additions the writer knew about, and a major Septuagint plus at 14:23, have no entry. Other problems: several quotations of Exodus, Leviticus, Genesis and Numbers 1–10 don't match those books' Plain wording, some terms are rendered differently from Leviticus and the other Numbers parts, a handful of rabbinic citations are wrong or vague, and the notes on the Cushite wife and on Heshbon each leave out a major view. Note also that `build.js --check` never runs the quotation check, VERBOSE or not (finding 6), so the writer's clean check proves nothing about quotations.

Counts: 0 critical, 10 major, 17 minor.

## Findings

### 1. Major: the added readings' Plain English follows the ESV's Deuteronomy
**Where:** variants.json at 12:16, 20:13, 21:11, 21:12 and 21:20 (the `plain` of each Samaritan or 4QNum-b reading).
**What:** These readings copy Deuteronomy 1:20–23, 3:24–28, 2:9, 2:17–19 and 2:24–25 into Numbers. Deuteronomy has no site Plain yet. The writer did not build these verses from the Hebrew with the literal-line method, and they track the ESV:
- 12:16 reading: "You have come to the hill country of the Amorites, which the LORD our God is giving us. See, the LORD your God has set the land before you." The ESV of Deuteronomy 1:20–21 is word for word the same.
- 21:20 reading: "Rise up, set out, and cross the Arnon Valley. See, I have given into your hand Sihon the Amorite, king of Heshbon, and his land. Begin to take possession of it, and fight him in battle. Today I will begin to put the dread and the fear of you on the peoples under all the heavens." Compare the ESV of Deuteronomy 2:24–25: "Rise up, set out on your journey and go over the Valley of the Arnon. Behold, I have given into your hand Sihon the Amorite, king of Heshbon, and his land. Begin to take possession, and contend with him in battle. This day I will begin to put the dread and fear of you on the peoples who are under the whole heaven."
- 20:13 reading: "...look with your own eyes, for you will not cross this Jordan. Command Joshua, and encourage him and strengthen him, for he will cross over at the head of this people." The ESV of Deuteronomy 3:27–28 has the same clause order and wording.
- 21:11 reading ("Do not harass Moab ... for I will not give you any of its land as a possession. I have given Ar to the descendants of Lot as a possession") is close to the ESV of Deuteronomy 2:9.
**Fix:** Rebuild each reading from the Hebrew with `node tools/literal.js Deu 1:20-23` and so on. Better still, take the Samaritan wording from Tal–Florentin (key `tal-samaritan`, already cited) and translate that. The SP changes Deuteronomy's first person ("you came near to me") into narrative, so the Deuteronomy text is not the SP text anyway.

### 2. Major: a website quoted and cited as the Dead Sea Scrolls Bible; 4QNum-b placements doubtful
**Where:** variants.json 20:13 (`b`, `s`), 21:12 (`b`), and the 4QNum-b witness lines at 21:11, 21:12, 21:20.
**What:** The note says: The Dead Sea Scrolls English Bible notes that the scroll's addition here "uses words from Deuteronomy 2:2–6 and 3:24–28". That is a quotation from dssenglishbible.com, a private translation site by Craig Davis. It is not *The Dead Sea Scrolls Bible* of Abegg, Flint and Ulrich, yet the entry cites `abegg-dssb`. The same site puts 4QNum-b's Deuteronomy 2:9 text at 21:12–13, not 21:11, and its Deuteronomy 2:24–25 text with 21:21, not 21:20. So listing 4QNum-b as a witness to an addition "at 21:11" and "at 21:20" is not supported by the writer's own source.
**Fix:** Check the placements in Jastram, DJD 12 (`jastram-4qnumb`), or in the real DSSB. Either cite that work, or drop the quotation and the `abegg-dssb` key. State where in the scroll each plus actually stands.

### 3. Major: Samaritan and Greek additions with no entry; witness lists uneven
**Where:** variants.json; notes 14:45 ("as far as Hormah") and the 13:33 variant `b`.
**What:**
- The writer knows of the Samaritan additions at 13:33 (Deuteronomy 1:27–33), 14:40 and 14:45, but gives them no entries and mentions them only in passing. The brief asked for them. Bodor's paper (below) lists all three among the twelve major expansions in the SP.
- The Septuagint at 14:23 has a long plus from Deuteronomy 1:39: "but their children who are with me here, who do not know good or evil, every young one without experience, to them I will give the land." This is a significant LXX harmonization in this part and has no entry.
- The Syro-Hexapla appears only at 12:16. The writer's own source says it has ten of the twelve major SP expansions, including 13:33, 14:40, 14:45, 20:13, 21:11, 21:12 and 21:20. List it consistently, or nowhere.
- "Attila Bodor's 2026 report" is real. It is an abstract for a paper given at the CBA meeting on 19 July 2026, posted on TAB-PUB, ELTE (https://tabpub.elte.hu/variant-literary-editions-of-numbers-extra-masoretic-additions-in-the-samaritan-pentateuch-and-the-syro-hexapla/). But it is cited in prose with no source key. Add a key such as `bodor-numbers-sp`, and say it is a conference abstract.
- The 20:13 reading's `plain` gives only Deuteronomy 3:24–28. The writer's own `b` says the plus also contains 2:2–6, so the reading as shown is incomplete.
**Fix:** Add entries for 13:33 (SP), 14:40 (SP), 14:45 (SP) and 14:23 (LXX). Complete 20:13. Fix the witness lines and add the source key.

### 4. Major: process talk addressed to the reader
**Where:** note 14:45 ("We could not check their exact wording, so no variant entry is given"); variants 12:16, 13:33, 20:13, 21:11, 21:12, 21:20 ("We could not check...", "could not be verified here").
**What:** These are the writer's working notes. A reader learns that the site printed readings it never checked. STYLE rule 2 says that when you are unsure of a detail, leave it out or say it is uncertain. It does not say to publish an unchecked reading.
**Fix:** Check the readings (finding 1). Where a detail still cannot be confirmed, say what the standard reference reports (Tov, Tal–Florentin, DJD 12) and say what is uncertain. Do not write "we".

### 5. Major: NIV wording at 14:34
**Where:** plain.txt 14:34, "Then you will know what it is to have me against you."
**What:** The Hebrew is וִידַעְתֶּם אֶת־תְּנוּאָתִי, "and you will know my opposition." "Know what it is like to have me against you" is the NIV's own paraphrase. The ESV has "you shall know my displeasure."
**Fix:** Retranslate from the Hebrew, for example "and you will learn what it means when I oppose you," or "you will know my opposition." Keep note 14:34 ("God's opposition") anchored to the new wording.

### 6. Major (tool, for the coordinator): `--check` never runs the quotation check
**Where:** tools/build.js.
**What:** In `--check` mode the script prints its summary and calls `process.exit` (about line 215). That happens before the quotation check block at line 237. So `VERBOSE=1 node tools/build.js --check Num/11-21` can never warn about a quotation. In addition, only the book being checked is loaded, so quotations of other books are skipped even if the check did run. The writer's "0 warnings" does not mean the quotations match.
**Fix:** Move the quotation check above the CHECK exit, and in check mode load the plain texts of all books. I ran an equivalent script, and finding 7 lists what it found.

### 7. Major: quotations that don't match the site's Plain wording
Checked with my own script against every book's plain.txt, including all parts:
- note 16:13: "Who made you a prince and judge over us?" (Exodus 2:14). The site has "Who put you as a chief and a judge over us?"
- note 20:26: "Aaron's holy garments will belong to his sons after him" (Exodus 29:29–30). The site has "Aaron's holy clothes will go to his sons after him."
- note 16:6: "fire went out from before the LORD and ate them up" (Leviticus 10:1–2). The site has "Fire came out from before the LORD and ate them up."
- note 18:2: "This time my husband will join himself to me" (Genesis 29:34). The site has "This time, now, my husband will join himself to me." Use "..." or the full wording.
- note 14:44: "Rise up, LORD, and let your enemies be scattered" (10:35). Part 01-10's Plain has "Rise up, LORD! / Let your enemies scatter."
- chapters.json 14, deep "Claude's theory": "if only we had died in this wilderness" (14:2). The Plain has "Or in this wilderness, if only we had died!"
- topics.json caleb: "The land is very, very good" (14:6–9) and "my servant Caleb, because a different spirit was with him and he followed me fully" (14:24). Neither is the Plain wording. The Plain has "a good land, very, very good" and "my servant Caleb had a different spirit with him, and he followed me fully."
- note 17:10: "Listen, you rebels (hammorim)" (20:10) drops "please". Add "...".
**Fix:** Quote each passage exactly from the site's Plain, or mark it as a paraphrase without quotation marks.

### 8. Major: terms rendered differently from Leviticus and the other Numbers parts
**Where:** plain.txt.
- אִשֶּׁה (*isheh*) is "a gift by fire" here (15:3, 10, 13, 14, 25; 18:17). Leviticus has "an offering by fire" (Leviticus 1:9), and part 22-36 has "offerings by fire" (28:2).
- תּוֹרָה (*torah*) as a ruling is "teaching" here (15:16, 29; 19:2, 14). Parts 01-10 and 22-36 use "law" (5:29 "the law for jealousy"; 6:13, 21; 31:21). Worse, the phrase חֻקַּת הַתּוֹרָה is "the statute of the teaching" at 19:2 but "the rule of the law" at 31:21. Leviticus uses "procedure" for the same formula.
- The verb זָרַק (to dash or splash) is "Splash" at 18:17, as in Leviticus 1:5, 11. But the same verb is "spattered" at 19:13 and 19:20 (זֹרַק). "Spatter" belongs to הִזָּה, the verb in 19:4, 18, 19, 21 and Leviticus 4:6.
**Fix:** Use "offering by fire". Agree one rendering of *torah* with the 01-10 owner, probably "law" to match 31:21, and at the least make 19:2 match 31:21. Use "splashed" at 19:13 and 19:20.

### 9. Major: fairness on Moses' Cushite wife (12:1), including race
**Where:** note 12:1 ("Moses' Cushite wife"); chapters.json 12, the reading "Read as a story about prejudice" and the deep section; topics miriam (`uncommon`).
**What:** The note gives Zipporah, a second African wife, and the rabbis' "beautiful" reading, and then says that "many modern readers see prejudice against a foreign, dark-skinned woman." Missing:
- The strongest form of the race reading. African American interpreters such as Cain Hope Felder (*Troubling Biblical Waters*) and Randall Bailey argue that God takes the side of a Black woman's marriage. Name them.
- The strongest objection. The text never mentions skin. Ancient Israel had no modern idea of race, and the stated complaint is Moses' authority (12:2). Cushites appear elsewhere without stigma (Ebed-melech, Jeremiah 38:7–13), and Amos 9:7 sets Cushites beside Israel. Amos 9:7 and Jeremiah 13:23 are in the note's refs but are never explained.
- The critical view that the Cushite wife comes from a separate tradition from the Midianite Zipporah.
Also, the "skin made white" irony appears three times: note 12:1, note 12:10 and the chapter readings. Note 12:10 even argues that "like snow" probably means flaking rather than whiteness, and then draws the white-skin irony anyway.
**Fix:** Add the named interpreters and the objection. Explain Amos 9:7 and Jeremiah 38. Make the irony point once, with the caveat about the meaning of "like snow".

### 10. Major: Heshbon and Sihon archaeology is missing the main scholarly debate
**Where:** note 21:26 ("Heshbon and archaeology"); chapters.json 21, deep "Sihon, Og and archaeology"; topics sihon-and-og.
**What:**
- The note covers Tell Hesban's lack of Late Bronze remains and three replies (another site such as Tell Jalul, a tent capital, a later story). It leaves out the best-known exchange in the literature. John Van Seters ("The Conquest of Sihon's Kingdom: A Literary Examination," *JBL* 91, 1972) argued that Numbers 21:21–35 was written from Deuteronomy 2 and Judges 11. John Bartlett replied in defense of an older tradition.
- It also leaves out a point that cuts the other way. Hesban has Iron I occupation (12th–11th centuries BC), which suits scholars who date Israel's arrival around 1200 BC. The deep section's "a later date for the exodus" is too vague to convey this.
- None of these notes is tagged with, or contributes to, the existing `date-of-exodus` topic. Kadesh (13:26), Arad (21:1) and Heshbon (21:26) all bear on it.
**Fix:** Add the Van Seters–Bartlett debate with a source key, and the Iron I point. Contribute a `date-of-exodus` section on Kadesh, Arad and Heshbon.

### 11. Minor: Moses' sin at the rock: attributions inconsistent, views missing
**Where:** note 20:12 ("What was Moses' sin?"); chapters.json 20, deep "Moses' sin: the main answers".
**What:**
- Note 20:12 lists Ibn Ezra with Ramban under the "we" view. The chapter page lists him under "Doubt (Ibn Ezra and others)". Pick the one Ibn Ezra actually holds and verify it. Ibn Ezra surveys and rejects several views, so be careful.
- The view that comes from the text's own words ("you did not believe me," 20:12) is unbelief. It is held by Christian readers such as Calvin and Keil–Delitzsch, and by Ramban together with Rabbenu Chananel. It should be its own named entry.
- Abravanel's view (Moses and Aaron were really punished for earlier failures, the spies and the calf) and Joseph Albo's view (they failed to work the miracle by their own word) are standard in Jewish lists. So is S. D. Luzzatto's well-known remark that every interpreter adds a new sin to Moses. Add at least Abravanel.
**Fix:** Make the two lists agree, and add these views.

### 12. Minor: rabbinic and classical citations that are wrong or too vague
- note 13:33 ("Like grasshoppers"): the line about how they looked "in their eyes" belongs in Sotah 35a to Rav Mesharsheya ("the scouts were liars..."), not to God. The version where God speaks is in Tanhuma Shelach 7 and Numbers Rabbah 16:11.
- note 15:39 ("Eyes that go scouting"): "The Sifre reads it: 'the heart and eyes are the go-betweens of the body; the eye sees, the heart desires, and the body acts'". That saying is Rashi on 15:39, drawn from Tanhuma Shelach 15 and Yerushalmi Berakhot 1:5. Sifre 115 reads the verse as heresy and harlotry.
- note 14:24: Rashi's "two spirits, one in his mouth and one in his heart" comes from Tanhuma and Numbers Rabbah 16:19, not Sotah 34b. Sotah 34b has Caleb praying at the patriarchs' graves in Hebron, which deserves a mention under 13:22.
- note 11:7 and topic manna: "tasted like honey to the young, like oil to the old (Yoma 75a)". As I recall, Yoma 75b gives bread to young men, oil to the old and honey to infants. The "whatever he wished" tradition is a separate passage. Check the passage and fix the order and the folio.
- note 13:33, chapters.json 13 deep, topic fallen-angels: "Ramban [and many modern readers] think the scouts are exaggerating". I can't confirm this in Ramban. Cite the passage, or attribute it to modern commentators such as Milgrom.
- note 12:3 "(so Ramban, in effect)" and note 16:38 "(so Rashi, in effect, and Ramban)": "in effect" hedges with no passage behind them. Cite the passage or remove the names.
- note 17:8: PRE 40 traces the staff from creation down to Moses. The claim that it will return in the days of the Messiah is Numbers Rabbah 18:23 (and Yalkut), not PRE 40.
- note 19:7 and chapters.json 19: "purifies the impure and makes impure the pure" is given with no source. Cite it, for example Numbers Rabbah 19 or Pesikta Rabbati 14.
- note 11:32: Herodotus 2.77 says the Egyptians eat quail and small birds raw after salting them, not "dried and salted".

### 13. Minor: 14:33 flattens the image of prostitution
**Where:** plain.txt 14:33, "They will bear your unfaithfulness".
**What:** The Hebrew is זְנוּתֵיכֶם, "your acts of prostitution". At 15:39 the Plain keeps the image ("like a prostitute"), and note 14:33 explains it. STYLE says to keep images English can carry.
**Fix:** "They will bear your prostitution" or "your whoring ways".

### 14. Minor: phrasings that are hard to read at an 8th-grade level
- 11:20, 11:21 "a whole month of days" → "a whole month".
- 11:23 "whether my word happens for you or not" → "whether what I say comes true for you or not".
- 11:24 "stood them around the tent" → "had them stand around the tent".
- 13:11 "from the tribe of Joseph, for the tribe of Manasseh" → "from the tribe of Joseph, that is, the tribe of Manasseh".
- 14:10 "said to stone them with stones" → "talked of stoning them".
- 14:41 "Why are you crossing the LORD's word?" → "Why are you going against the LORD's command?" The gloss already explains this.
- 15:15 "As for the assembly, there will be one rule".
- 15:28 "the person who went astray by sinning by mistake".
- 16:45 "Get up away from this community".
- 18:7 "I give you your priesthood as a service that is a gift".
- 18:23 "The Levites, they are the ones who..." (a doubled subject).
- 16:50 "for the plague had been held back": the Hebrew has "and", not "for".

### 15. Minor: other closeness to the ESV or NIV in the Plain
- 15:39 "It will be a tassel for you to look at" is the ESV's phrase. The Hebrew is "it will be a tassel for you, and you will see it."
- 14:21 "But as I live, and as all the earth will be filled with the LORD's glory" follows the ESV's sentence frame. The Hebrew allows it, but consider "As surely as I live, and the LORD's glory will fill all the earth..."
- 12:6 "I make myself known to him in a vision; / I speak with him in a dream" matches the ESV. It is literal, so it is acceptable, but note it.
**Fix:** Recast 15:39 at least.

### 16. Minor: 20:26 adds "to his people"
The Hebrew is וְאַהֲרֹן יֵאָסֵף וּמֵת שָׁם, "Aaron will be gathered and die there." The Plain adds "to his people" from 20:24, as the ESV and NIV do. Drop it, or put it in a note.

### 17. Minor: 12:7 loses the word that Hebrews quotes
"In all my house he is the one I trust" hides נֶאֱמָן, the "faithful" of Hebrews 3:2, 5. The note explains it, but "in all my house he is faithful" or "he is trusted" would keep the link visible.

### 18. Minor: 21:18 puts a travel note inside the poem
"... with a scepter, with their staffs." / From the wilderness they went to Mattanah,". The travel note is prose. Here it is printed as the last line of the well song. End the poem at "staffs" and start the prose without the ` / `.

### 19. Minor: the note on 21:14 ("A lost book") leaves out the Greek and a major modern reading
The LXX reads "Therefore it is said in a book, 'The war of the Lord set Zoob on fire'". It takes *vahev* as a name and reads a verb meaning "burn". Duane Christensen ("Num 21:14–15 and the Book of the Wars of Yahweh," *CBQ* 36, 1974) reconstructed "He came in a storm," which many follow. Add both. The difficult MT of 12:6, נְבִיאֲכֶם יְהוָה, could also have a short variant or note with the LXX rendering. At present the note only calls the line "awkward".

### 20. Minor: is the RSV in the 21:28 variant right?
The `why` says "the RSV and NRSV adopt" the Greek "swallowed". As I recall, the RSV keeps "the lords of the heights of the Arnon", and the NRSV and ESV take the LXX. Check, and name the right versions.

### 21. Minor: small factual slips
- chapters.json 16 reading: "Twice Moses and Aaron fall on their faces for the people (16:4, 22, 45)". That is three references, and at 16:4 Moses falls alone.
- note 17:12: "The cry 'we perish' repeats three times in Hebrew." The verbs are גָּוַעְנוּ once and אָבַדְנוּ twice: three verbs of dying, but only two of "perish".
- note 21:9: the transliteration is *nachash nechoshet* in the body but *nechash nechoshet* in `orig`. Use one.
- note 21:9 (Timna): "about 1200–1150 BC". The Egyptian Hathor shrine was used from about the late 14th century to the mid-12th century. The Midianite tent phase is the later 12th century. Say so.
- note 20:17: the Via Nova Traiana was built AD 111–114, after the annexation of 106.

### 22. Minor: topic cores and topic tags
- caleb core lead: "He alone of the tribe of Judah's generation lived to receive land" reads as though Joshua did not. Say "With Joshua, the only man of his generation to enter the land; he took Hebron in his old age."
- caleb core section: "His nephew Othniel" should say "His younger brother (or nephew) Othniel", because Judges 1:13 is ambiguous.
- sihon-and-og `aka` claims "Rephaim" and "Bashan". The Rephaim are a wider subject (Genesis 15:20; Isaiah 26:14, the dead; Ugarit). Searches for them should not land on this page. Drop that aka, or plan a `rephaim` topic.
- note 13:22 (Anakim) is tagged `fallen-angels`. The Anakim are not angels. Use no topic, or a giants/Rephaim topic.
- The six new cores are otherwise sound, with no duplicates among the existing topics. A cross-Bible `prophecy` or `prophets` topic is missing. 11:25–29 and 12:6–8 are core texts for it. Consider creating it, or asking the coordinator.

### 23. Minor: glosses
- 17:10 "the rebels" => "the rebellious" adds nothing. Delete it.
- 12:8 "Mouth to mouth" => "person to person" is weak. Try "directly, with nothing in between".
- 16:14 "Will you gouge out the eyes of these men?" => "Do you take us for fools?" picks one of the two readings the note keeps open. Use something neutral, such as "Do you think you can blind us?"

### 24. Minor: Ketiv/Qere at 21:32 not noted
texts/auto marks 21:32 (written וַיִּירַשׁ, "he took possession"; read וַיּוֹרֶשׁ, "he drove out"). The Plain follows the Qere ("drove out"). This needs at most a one-line note, or nothing. It is here only for completeness.

### 25. Minor: chapter 14's reading on Olson has no source
chapters.json 14, "Read as the turning point of Numbers", names Dennis Olson's "death of the old and birth of the new". Add a source key (Olson, *The Death of the Old and the Birth of the New*, 1985) if one exists, or add it to sources.json.

### 26. Minor: notes 11:15 and 12:12 have kind `var`
The *tiqqune soferim* are not readings in any manuscript, as the notes themselves say. Kind `deb` or `nu` fits better than `var`, which tells the reader that manuscripts differ.

### 27. Minor: Wikipedia link titles to check
Check that "Tall Hisban" (note 21:26) and "Book of the Wars of the Lord" (chapter 21) are the exact article titles. "Kadesh (biblical)" and "Nehushtan" are fine.

## What I checked and found sound

- Every verse 11:1–21:35 against the literal line. No omissions or additions beyond those listed. Numbers right (603,550 rounded at 11:21; 14,700 at 16:49; 250; forty days and years). The English/Hebrew numbering note at 17:2 is right.
- Terms: "the Israelites", "loyal love" at 14:18–19, "Sea of Reeds", "skin disease" (never leprosy), "community", "tent of meeting", "sin offering" with the purification view in note 19:9.
- Correct as far as I can check: the tiqqune soferim at 11:15 and 12:12; the large yod at 14:17; the dotted resh at 21:30 (with the SP and LXX "fire"); LXX "spoke" at 16:1, "desire" at 16:15, "Jazer" at 21:24, "from the well" at 21:18; Targum and Vulgate "did not cease" at 11:25; "the spies" at 21:1; Taanit 29a and Mishnah Taanit 4:6; Mishnah Sotah 1:9; Berakhot 34a; Genesis Rabbah 92:7; Avot 5:4, 5:6, 5:17; Sanhedrin 10:3, 17a, 109b, 110a; Shabbat 89a, 96b; Rosh Hashanah 3:8; Parah 2:5, 3:5; Pesikta de-Rav Kahana 4:7; CD VI 3–11; Hermas, Vision 2.3.4; KTU 1.108; the Mesha Stele; Cohen at Kadesh; Tel Arad; the Tel Rehov apiary; Rothenberg at Timna; the Andrews University dig at Hesban.
- The poetry at 12:6–8, 21:14–15, 21:17–18 and 21:27–30 is set with line breaks. No em-dashes anywhere. Note previews are under 120 characters. Note density is about one per two verses.
- The Claude's-theory boxes (chapters 11, 14, 16, 20; bronze-serpent) are labeled as the writer's own, say what they build on, and are plausible.

Sources consulted on the web: [Bodor, TAB-PUB abstract](https://tabpub.elte.hu/variant-literary-editions-of-numbers-extra-masoretic-additions-in-the-samaritan-pentateuch-and-the-syro-hexapla/); [dssenglishbible.com, 4Q27](https://www.dssenglishbible.com/scroll4Q27.htm) (the source behind finding 2).

## Fixes applied

Writer's fix round, 2026-10-23. After it, `node tools/build.js --check Num/11-21` gives 0 errors and 0 warnings (the quotation check now runs in check mode). The full build has 0 errors, and none of its warnings are in Numbers. Counts: 351 verses, 170 notes, 17 variants, 115 glosses, 11 chapter pages, 33 topic contributions.

1. **Agreed.** I removed every ESV-shaped addition and rebuilt each one from `node tools/literal.js Deu ...`, putting Moses' first-person retelling into narrative form. The `b` text says this and cites Tov for the Samaritan text following Deuteronomy almost word for word. Tal–Florentin was not available to me, so the readings are translated from Deuteronomy's Hebrew, not from a Samaritan manuscript. The notes say so in neutral words.
2. **Agreed.** I removed `abegg-dssb` from these entries. dssenglishbible.com is now cited as itself, under the key `davis-dsseb` (Craig Davis). The Deuteronomy 2:9, 2:17–19 and 2:24–25 additions now sit at the start of 21:12, 21:13 and 21:21, matching that site's numbering. Each `b` says the addition stands between the two verses and that Bodor numbers it with the verse before.
3. **Agreed.**
   - New entries: 13:33 (SP plus Deuteronomy 1:27–33), 14:40 (SP plus Deuteronomy 1:42), 14:45 (SP) and 14:23 (the LXX plus from Deuteronomy 1:39).
   - At 14:45 Bodor gives only the place of the addition, not its text, so the added reading is described in brackets, not translated.
   - 20:13 now includes both Deuteronomy 3:24–28 (with 3:26 in narrative form) and Deuteronomy 2:2–6.
   - The Syro-Hexapla is listed for all eight places Bodor names in chapters 11–21.
   - Bodor has the key `bodor-numbers-sp` in content/sources.json and is described as a conference abstract.
4. **Agreed.** Every "we could not check" and "could not be verified" is gone from the notes and variants.
5. **Agreed.** 14:34 now reads "Then you will learn what it means when I oppose you." The note is re-anchored.
6. Tool finding. The coordinator has fixed it.
7. **Agreed.** Every quotation now uses the site's Plain wording: Exodus 2:14, Exodus 29:29, Leviticus 10:2, Genesis 29:34, Numbers 10:35, 14:2, 14:7, 14:24 and 20:10 ("Listen, please, you rebels!"), plus 14:21 in the glory topic.
8. **Agreed.** *isheh* is now "offering by fire" throughout. *torah* is "law" (15:16, 29; 19:14). 19:2 is "the rule of the law," matching 31:21. 19:13 and 19:20 now read "splashed." Following content/terms.json, I also changed 19:2 to "flawless" (*tamim*), 14:29 to "enrolled" (*paqad*), and cultic *hiqriv* to "present" (15:4, 7, 9, 10, 13, 27; 16:17, 38, 39; 18:15).
9. **Agreed.**
   - The 12:1 note now names Felder and Bailey and gives the objection (skin is never mentioned, the complaint is about authority, Israel had no modern idea of race).
   - It explains Ebed-melech (Jeremiah 38:7–13), Amos 9:7 and Jeremiah 13:23, and adds the critical separate-tradition view.
   - The snow irony now appears once, in note 12:10, with the flaking caveat. I took it out of 12:1, the chapter 12 reading and the miriam topic.
10. **Agreed.**
    - Note 21:26 and the chapter 21 deep section now give the Van Seters–Bartlett exchange (keys `vanseters-sihon`, `bartlett-sihon`) and the Iron I village at Hesban.
    - Note 21:26 is now tagged `date-of-exodus`, and chapters 13 and 21 link to that topic.
    - There is a new date-of-exodus topic section on Kadesh, Arad and Heshbon.
11. **Agreed.** Note 20:12 and the chapter 20 deep section now agree, and Ibn Ezra is dropped from both. They now include unbelief (Calvin, Keil–Delitzsch), Albo, Abravanel and Luzzatto's remark, with source keys for each.
12. **Agreed, all fixed.**
    - Sotah 35a is now Rav Mesharsheya, with God's version from the Tanhuma.
    - 15:39 is now Rashi, drawing on the Tanhuma and Yerushalmi Berakhot 1:5. The Sifre and Berakhot 12b are cited for "heresy and lust."
    - 14:24 is now Rashi, drawing on the Tanhuma. Sotah 34b is moved to the Hebron note at 13:22, about Caleb's prayer at the patriarchs' graves.
    - Manna: Yoma 75b now gives bread, oil and honey in the right order.
    - Ramban's name is removed from the exaggeration claim and from the "in effect" hedges.
    - 17:8 now cites Avot 5:6, PRE 40 and Numbers Rabbah 18:23.
    - The paradox saying is cited to Numbers Rabbah 19.
    - Herodotus: the quail were salted and eaten raw.
13. **Agreed.** 14:33 now reads "They will suffer for your prostitution."
14. **Agreed, all items.** This includes 16:50 "and the plague...". 18:7 now reads "I give you your priesthood as a gift of service."
15. **Agreed.** 15:39 is recast ("It will be a tassel for you. You will see it and remember..."). 14:21 is recast as "as surely as I live, and as surely as the LORD's glory will fill all the earth." 12:6 is kept as a literal line.
16. **Agreed.** 20:26 now reads "Aaron will be gathered, and he will die there." The note points to the full phrase at 20:24.
17. **Agreed.** 12:7 now reads "In all my house he is faithful." The gloss is updated.
18. **Agreed.** The poem now ends at "staffs."
19. **Agreed.** Note 21:14 adds the LXX ("set Zoob on fire") and Christensen (`christensen-wars`). Note 12:6 now gives the repointing and the LXX "a prophet of yours for the Lord," as a note rather than a variant.
20. **Agreed.** The text now says the ESV and some other modern versions adopt "swallowed." The RSV is no longer named.
21. **Agreed, all items.**
22. **Agreed.**
    - The caleb lead is fixed, and Othniel is now "younger brother, or perhaps nephew."
    - "Rephaim" is dropped from the sihon-and-og aka.
    - Note 13:22 is untagged.
    - I created a new `prophecy` core after checking it did not exist. Numbers 11–12 contributes a section to it, and chapters 11 and 12 link to it.
23. **Agreed.** I deleted the glosses at 17:10 and 14:41 and reworded 12:8 and 16:14.
24. **Not done.** A note needs at least 40 words, and the Plain already follows the Qere, so a note would add little.
25. **Agreed.** Chapter 14 now cites `olson-numbers`.
26. **Agreed.** 11:15 and 12:12 are now kind `deb`.
27. **Partly.** "Book of the Wars of the Lord" is confirmed as a Wikipedia title. I could not confirm "Tall Hisban", so the 21:26 link now points to "Heshbon".
