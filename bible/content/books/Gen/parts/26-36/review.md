# Review: Genesis 26–36 (part `Gen/26-36`)

Reviewer: hostile review per `tools/agent-reviewer.md`. `node tools/build.js --check Gen/26-36` reports 0 errors and 0 warnings, but that check exits before the topic-merge step (see finding 1).

## Verdict

This is a strong part. The translation is built from the Hebrew, not borrowed. I read all 391 verses against the WLC word list. Nearly every high-similarity verse is high because the Hebrew is plain narrative or a name list, and in those verses the Plain is often closer to the WEB/KJV than to the BSB. I found no real BSB dependence. The rabbinic apparatus is unusually accurate for something written from memory. I checked about 45 Midrash, Talmud, Mishnah, Rashi, Ramban, Targum and Sifre citations, and almost all are right down to the section or folio. Chapter 34 is handled honestly and fairly. The serious problems are elsewhere:

- One build-breaking data-type error in `topics.json`.
- Chapter pages and topic sections that quote Genesis in ESV wording instead of the site's own Plain English.
- Source keys shared with the other Genesis parts that will display the wrong folios.
- Six real Samaritan and Septuagint variants that are missing, or are mentioned only with an "this edition could not check" hedge.
- A handful of factual slips.

Findings: **1 critical, 7 major, 24 minor.**

---

## Findings

### 1. CRITICAL: `topics.json`: `common`, `uncommon` and `claude` are strings, not arrays or objects
- **Where:** `topics.json` entries `jacob` (common, claude), `edom` (uncommon), `rachel` (common), `leah` (uncommon), `isaac` (uncommon), `jacobs-ladder` (common), `blessing` (claude), `dinah` (common).
- **Problem:** `build.js` lines 191–193 run `(t.common||[]).forEach(...)`, and a string has no `.forEach`. The full site build will therefore throw a TypeError as soon as it merges this part's contributions. `--check` exits at line 186, before that code runs, which is why it passes. `claude` as a string is also passed to `Object.assign({}, t.claude, ...)`. That spreads the string into indexed characters and produces a box with no `title`, `body` or `refs`.
- **Fix:**
  - Make every `common` and `uncommon` an array of strings: `"common":["..."]`.
  - Make each `claude` an object: `{"title":"Claude's theory: ...","body":"...","refs":"Genesis 32:27; Genesis 27:19"}`.
  - Then run the full build, not just `--check`.

### 2. MAJOR: Chapter pages and topic sections quote Genesis and the NT in ESV/NIV wording, not the Plain English
- **Where (`chapters.json`):**
  - ch. 28 sum: "Surely the LORD is in this place, and I did not know it." This is the ESV word for word. The Plain has "The LORD really is in this place."
  - ch. 29 sum: "behold, it was Leah" (ESV).
  - ch. 30 sum: "Give me sons, or I am dead." The Plain has "Give me children!"
  - ch. 32 sum:
    - "I am too small for all your steadfast love". The Plain has "faithful love".
    - "you have striven with God and with men, and you have prevailed" (ESV). The Plain has "struggled ... humans ... have won".
    - "my life has been spared" (NIV-like). The Plain has "still my life was rescued".
  - ch. 34 sum: "Should he treat our sister like a prostitute?" (ESV word for word). The Plain has "Like a prostitute, is that how he should treat our sister?"
- **Where (`topics.json`):**
  - jacob: "for you have striven with God and with men and have prevailed" (ESV).
  - jacob core: "leaning on the top of his staff" (NIV Hebrews 11:21).
  - bethel: "Surely the LORD is in this place ..." and "this is nothing other than the house of God, and this is the gate of heaven". The ESV has "none other than". The Plain has "nothing but the house of God, and this is heaven's gate".
  - isaac: "trembles 'very violently'" (ESV 27:33).
  - dinah: "Should he treat our sister like a prostitute?" (ESV).
  - foreigners: "We have plainly seen that the LORD has been with you" (ESV-like).
  - polygamy: "I have wrestled mighty wrestlings with my sister". This contradicts the Plain's deliberate "God's wrestlings" and note 30:8.
  - grace: "all the acts of steadfast love".
  - hesed: "abounding in steadfast love and faithfulness" (ESV Exodus 34:6).
  - blessing: "sold his birthright for a single meal" and "found no chance to repent, though he sought it with tears" (ESV Hebrews 12:16–17 word for word).
  - election: "not because of works but because of him who calls" (ESV Romans 9:11 word for word).
- **Problem:** STYLE rule 1 bars leaning on copyrighted wording. These passages also make the site contradict its own translation, sometimes on the very word a note discusses ("God's wrestlings", "children").
- **Fix:**
  - Quote Genesis only in the Plain English text of this part.
  - For other books, use your own fresh rendering, or the WEB/KJV where a set wording is needed.

### 3. MAJOR: Source keys shared with the other Genesis parts are defined differently, and the last loaded definition wins
- **Where:** `sources.json` keys also defined, with different text, in `parts/37-50/sources.json`:
  - `bavli-sanhedrin`, `bavli-shabbat`, `bavli-pesahim`, `bavli-megillah`, `bavli-sotah`
  - `genesis-rabbah`, `ramban-torah`, `rashi-torah`, `targum-onkelos`
  - `ibnezra-torah`, `justin-dialogue`, `kitchen-ot`, `hamilton-gen2`
- `ramban-torah` also differs from the one in `parts/12-25`.
- **Problem:** `build.js` line 46 merges the parts with `Object.assign`, so part 37-50's text wins. Its strings carry folio lists, and this part cites different folios under the same keys. For example, `bavli-sanhedrin` becomes "tractate Sanhedrin (98b)" while note 36:12 cites Sanhedrin 99b. `bavli-shabbat` shows "(10b, 22a)" against this part's 55b. `bavli-pesahim` shows "(56a)" against 54a. `bavli-megillah` shows "(16a–b, 29a)" against 13b. Readers will see the wrong page.
- **Fix:**
  - Agree with `main` on one definition per key, with no folios in the key text. Keep folios in the note prose, as this part already does.
  - Move the shared rabbinic keys to `content/sources.json`, as STYLE asks for works cited across many books. That file already has `talmud-bavli`.
- **Also:** nine keys in this part's `sources.json` are never cited: `hamilton-gen2`, `waltke-gen`, `vonrad-gen`, `hendel-epic`, `fishbane-jacob`, `levenson-beloved`, `zakovitch-jacob`, `cranfield-romans`, `luther-genesis`. Either cite them (chapter 27 and 34 views name "Hamilton, Waltke" with no key) or remove them.

### 4. MAJOR: Real variants are missing, and five places hedge with "this edition could not check"
The 10 entries present are accurate. I checked the witnesses and Greek for 26:12, 26:32 (οὐχ εὕρομεν, Ὅρκος), 27:38 (κατανυχθέντος δὲ Ισαακ), 30:11, 31:13, 33:18, 35:22, 36:2, 36:16 (SP omits Korah) and 36:39. But notes and chapter pages admit to variants they did not enter, and one is missing entirely:

- **a. 30:36 (no entry; the most significant omission).** After 30:36 the Samaritan Pentateuch inserts the angel's dream speech from 31:11–13. The Reworked Pentateuch scroll 4Q364 (4QRP-b) shares this kind of harmonizing expansion. It is Tov's standard example of Samaritan harmonization. Add an entry anchored at 30:36 with the SP plus as an extra reading.
- **b. 31:53.** Note 31:53 ends: "The Greek translation is printed with a singular verb and without the last phrase; this edition could not check the manuscripts behind that reading." Make it a variant:
  - MT: plural *yishpetu* plus "the god of their father".
  - LXX: κρινεῖ (singular), and the phrase is absent.
  - Check the Samaritan, which also reads singular as far as I recall.
  - Delete the hedge.
- **c. 35:7.** Note 35:7 says "The Samaritan Pentateuch is reported to have a singular verb here; this edition could not verify that reading." SP has singular נגלה. It does the same at 20:13. The LXX ἐπεφάνη and the Vulgate are singular too. Make it a variant and delete the hedge.
- **d. 36:6.** The note says "several ancient translations supply one; this edition could not check which ones."
  - SP reads "from the land of Canaan".
  - LXX ἐκ τῆς γῆς Χανααν.
  - Peshitta "to the land of Seir".
  - Onqelos "to another land".
  - Verify against BHS/BHQ, enter the variant, and delete the hedge.
- **e. 36:3, 4, 10, 13, 17.** The ch. 36 deep section says "The Samaritan Pentateuch is reported to read Mahalath for Basemath ... this could not be checked." SP does read מחלת, harmonizing with 28:9. Add an entry at 36:3, as one entry per verse saying they go together, and delete the hedge.
- **f. 35:16 and 35:21.** Note 35:16 says the LXX order differs and "this edition could not check the details against a critical edition."
  - LXX 35:16 begins with the camp "beyond the tower of Gader" (= 35:21).
  - It transliterates *kivrat* as Χαβραθα.
  - Add a variant or state this plainly, and delete the hedge.
- **g. 36:26.** The Plain prints "Dishon", but the MT (Leningrad) has דִּשָׁן, Dishan. Note 36:26 explains this. But the Plain departs from its base text without a variant, while at 36:39 it keeps the MT "Hadar" on the principle of following the Leningrad Codex. Pick one policy. Either keep "Dishan" and offer "Dishon" (1 Chronicles 1:41) as a reading, or keep "Dishon" and add the variant.
- **h. Lesser candidates worth a line in a note or variant:**
  - 27:27: SP and LXX "a full field" (שדה מלא / πλήρους).
  - 31:49: LXX ἡ ὅρασις ("the vision") for Mizpah; SP reportedly "the pillar".
  - 32:28: LXX future "and with men you will be strong".
  - 36:24: LXX transliterates *yemim* as a name, Ιαμιν. Add this to note 36:24.

### 5. MAJOR: Ibn Ezra is cited on both sides of 36:31
- **Where:** `chapters.json` ch. 36 VIEW L: "(Ibn Ezra hinted at a later hand ...)". `topics.json` edom `uncommon`: "one of the verses Ibn Ezra hinted and Spinoza argued could not have been written before Israel had kings."
- **Problem:** Note 36:31 correctly reports that on this verse Ibn Ezra rejects Yitzhaki's late dating ("his book deserves to be burned"). His famous hints at post-Mosaic lines are elsewhere: 12:6 and Deuteronomy 1:2 (the "secret of the twelve"). Spinoza draws on those, and adds 36:31 himself.
- **Fix:**
  - VIEW L: "Ibn Ezra rejected a late date for this verse, though he hinted at later additions elsewhere (12:6; Deuteronomy 1:2)."
  - Correct the edom `uncommon` line the same way.

### 6. MAJOR: 32:22 "his eleven sons" renders יְלָדָיו (*yeladav*, "his children")
- **Where:** `plain.txt` 32:22; note 32:22 ("Where is Dinah?").
- **Evidence:** אַחַד עָשָׂר יְלָדָיו. The same word is "children" in 33:1–2, 5–7.
- **Problem:** The note says "Only sons are counted," but the Hebrew says "children." That is exactly why Rashi and Genesis Rabbah ask where Dinah was. The translation hides the point the note discusses.
- **Fix:**
  - Plain: "his eleven children".
  - Note: "The Hebrew says 'children,' yet counts eleven: the sons. Rashi asks where Dinah was ...".

### 7. MAJOR: Claude's-theory boxes claim originality that the scholarship already has (STYLE rule 4)
- **a.** jacob `claude` (Jabbok echoes the stolen blessing: a blessing under another's name in ch. 27, his own name "Jacob" in ch. 32) ends: "This is Claude's reading, not a standard commentary claim." The contrast between "I am Esau" (27:19) and "Jacob" (32:27) is standard. Fokkelman, *Narrative Art in Genesis*, makes it; Sarna and Alter note it; Wenham too.
- **b.** ch. 28 spec box ("A pillow becomes a temple ... not drawn from a commentary"). The stone at his head becoming "God's house" (28:22) is explicit in the text and widely remarked (Fokkelman; Sarna).
- **Fix:** Say where the idea overlaps with published work: "Fokkelman and others note ...; Claude adds ...". Keep only what is really new as Claude's, or drop the box.

### 8. MAJOR: Esther 4:1 is garbled in the ch. 27 Jewish view
- **Where:** `chapters.json` ch. 27 VIEW J: "Jacob's descendants would pay with tears when Haman, a descendant of Esau, 'cried a great and bitter cry' (Esther 4:1; Genesis Rabbah 67:4)."
- **Problem:** Mordecai cries the great and bitter cry in Esther 4:1, because of Haman's decree. Note 27:34 gets this right.
- **Fix:** "... when Mordecai 'cried a great and bitter cry' at the decree of Haman, a descendant of Esau (Esther 4:1; Genesis Rabbah 67:4)."

### 9. MINOR: 27:44 "a little while" breaks the repetition that note 29:20 builds on
- **Problem:** Note 29:20 says *yamim achadim* in 29:20 "is exactly what Rebekah promised in 27:44: stay with Laban 'a few days'." But the Plain has "a little while" in 27:44 and "a few days" in 29:20. STYLE asks for repetitions to be kept.
- **Fix:** 27:44 "Stay with him a few days". The gloss on 27:44 can then go or be re-anchored.

### 10. MINOR: 32:25 and 32:32 "struck" for נָגַע (*naga'*, "touched")
- **Problem:** Note 32:25 itself says "one touch was enough to put Jacob's hip out of joint." "Struck" sharpens the verb and hides that point.
- **Fix:** "he touched the socket of his hip" in both verses, with the note keeping the "touch/strike" range.

### 11. MINOR: 31:53 capitalization puts an interpretation into the text
- **Where:** "The God of Abraham and the god of Nahor ... the god of their father."
- **Problem:** The Hebrew has the same word for both. The note explains the choice, but lowercase "god" in the text decides a debated question. Many read "the God of their father" (Terah) as the common ancestral God.
- **Fix:** Capitalize consistently, or at least capitalize "God of their father", and leave the polytheism question to the note.

### 12. MINOR: Key word מִרְמָה (*mirmah*, "deceit") is rendered three ways
- **Where:** 27:35 "with trickery", 29:25 "tricked me", 34:13 "with deceit".
- **Problem:** Notes 29:25 and 34:13 rely on the reader hearing one word.
- **Fix:** Use "trickery" in 34:13 too, or "deceit" throughout.

### 13. MINOR: Note 33:4 ("The father who ran") overstates the Septuagint parallel
- **Problem:** The note says the Greek Old Testament and Luke 15:20 have "the same verbs in the same order." LXX Genesis 33:4 reads προσέδραμεν ... περιλαβὼν ... ἐφίλησεν ... προσέπεσεν ἐπὶ τὸν τράχηλον. The kiss comes before falling on the neck, and the verbs are compounds. Luke has δραμὼν ἐπέπεσεν ἐπὶ τὸν τράχηλον ... κατεφίλησεν. I checked this against the Brenton/Rahlfs text at sacred-texts.com.
- **Fix:** "the same gestures (running, falling on the neck, kissing)". Also cite 45:14 and 46:29, which are closer.

### 14. MINOR: Note 27:45 says "Genesis never mentions her again except ... 35:8 and 49:31"
- **Problem:** Rebekah is also named in 28:5 and 29:12.
- **Fix:** "Rebekah never appears again; we hear only of her nurse's death (35:8) and her grave (49:31)."

### 15. MINOR: Note 32:15 says the ratios are "one male for about every ten females"
- **Problem:** That holds for the goats and sheep (20:200). The cattle are 10:40 and the donkeys 10:20.
- **Fix:** Drop the claim, or give the actual ratios.

### 16. MINOR: Note 35:22 calls Abishag "David's nurse"
- **Problem:** She was the young woman brought to attend and warm the aged king (1 Kings 1:1–4).
- **Fix:** Say "David's attendant Abishag".

### 17. MINOR: The age of Abimelech is given two inconsistent ways, and neither is grounded
- **Where:** Note 26:1 says ch. 20 was "eighty or more years earlier"; ch. 26 VIEW L says "some 70 years later."
- **Problem:** By the text, it is at least about 60 years (before the twins were born, 25:26) and as much as about 100 (Isaac was 100 at 26:34).
- **Fix:** "at least sixty years and perhaps nearly a hundred."

### 18. MINOR: Teraphim gender is invented
- **Where:** topics.json teraphim section: "a goddess-image can be sat on". Ch. 31 READ: "the great god-image is sat on".
- **Problem:** Nothing in the text says whether the teraphim were male or female, or large.
- **Fix:** "the household gods can be sat on ...".

### 19. MINOR: Misattribution in the standing-stones topic
- **Where:** "Ramban and others said a pillar was loved in the patriarchs' day but hated once Canaanites used it."
- **Problem:** This is Rashi on Deuteronomy 16:22, from the Sifre.
- **Fix:** Attribute it to Rashi (Sifre), and cite Ramban only if you have the place.

### 20. MINOR: Ch. 27 deep section credits "the Talmud" with a Genesis Rabbah saying
- **Where:** "The Talmud reads them as a law of history: when the voice of Jacob is heard ... (Genesis Rabbah 65:20)."
- **Fix:** "The Midrash (Genesis Rabbah 65:20) reads ...".

### 21. MINOR: Two unsourced or doubtful attributions
- **a.** isaac `uncommon`: "Rashi notes that the story tells his death early ...". I cannot place this in Rashi on 35:28–29. The usual source is the general rabbinic principle "there is no before or after in the Torah," or Seder Olam. Verify or drop the name.
- **b.** tithe section: "Jewish tradition read the double word as two tithes, or as a tenth of a tenth." No source is given. Cite a place (Genesis Rabbah 70:7?) or drop it.
- **c.** Ch. 36 VIEW J: the eight kings matched "from Saul to Jehoshaphat, when Edom rebelled". Per Rashi on 36:31, Edom rebelled under Jehoram son of Jehoshaphat (2 Kings 8:20). Correct this.

### 22. MINOR: Three glosses add or misstate meaning
- **34:3 "His soul clung to Dinah => he became obsessed with Dinah".** דָּבַק (*davaq*) is the verb of 2:24 and Ruth 1:14. "Obsessed" casts a negative judgment the text does not make, in the chapter where fairness matters most. Use "he became deeply attached to Dinah" and let the notes argue the ethics.
- **35:6 "that is, Bethel => the place later called Bethel".** Jacob named it Bethel in 28:19, so "later" is wrong. Use "the town also called Bethel".
- **29:1 "picked up his feet => set off with a spring in his step".** This supplies a mood (Rashi's reading) as if it were the idiom. Use "set out again" or label it as Rashi's.

### 23. MINOR: Chapter 34 fairness
The handling is honest:
- Dinah is not blamed.
- The debate over *'innah* is given with Bechtel and van Wolde fairly and named as a minority view.
- Maimonides is set against Ramban, and Jubilees, Judith and the Testament of Levi against the critics.
- Note 34:12 frankly admits that Shechem's offer matches the later legal remedy.

Small items to tidy:
- **a. Heading.** The section heading "The rape of Dinah" decides the debate that the notes keep open, and the Plain itself says "violated." Use "The violation of Dinah" to match the chapter title, or keep the heading and say in note 34:2 why.
- **b. Note 34:3.** It says "throughout the negotiations she was being held there." That is an inference from 34:26; say "the text implies".
- **c. Missing traditions.** Add the tradition that Simeon married Dinah (Genesis Rabbah 80:11) to the "Dinah after Genesis 34" section.
- **d. Missing echo.** Add Jacob's later "Shechem (*shekhem*), which I took ... with my sword and my bow" (48:22) to the echoes and to note 34:30.

### 24. MINOR: Topic hygiene and duplicates
- **Duplicates.** No topic duplicates another outright. I checked against all 186 files, including the cores the other Genesis parts created at the same time (patriarchs, promised-seed, marriage, promised-land, abraham, ishmael, judah, joseph, pentateuch-sources, dreams).
- **Whole-Bible leads.** All 20 new cores have them. Nine (rachel, leah, laban, isaac, jacobs-ladder, circumcision, dinah, teraphim, amalek) have no core sections. That is allowed, but circumcision and isaac would benefit from one: Joshua 5:2–9, Romans 2:28–29, Colossians 2:11; Hebrews 11:17–19, James 2:21.
- **Aliases that will misroute:**
  - teraphim `aka` "idols", "foreign gods", "images" will make this page the catch-all for idolatry across the Bible. Remove them, or create an idolatry topic.
  - tithe `aka` "first fruits" is a different offering (*bikkurim*).
  - shechem `aka` "Sychar" (probably Askar, a different site) and "Hamor" (a person).
  - jacob `aka` "Jacob's ladder dream" belongs to jacobs-ladder.
- **Missing `related` links:**
  - jacob → patriarchs, isaac, twelve-tribes, joseph
  - isaac → abraham, sarah, patriarchs
  - polygamy → marriage (marriage already links back to polygamy)
  - edom → rome
  - covenant → promised-land, promised-seed, abraham
- **Notes that should point to existing topics:**
  - Note 26:1 (Philistines) and note 31:34 (camels) → `patriarchs`, whose `aka` lists exactly "camels in Genesis" and "Philistines in Genesis".
  - The J/E/P notes (26:1, 27:46, 28:1, 35:10) → `pentateuch-sources`.
  - Dream notes (28:12, 31:10, 31:24) → `dreams`.
  - 29:35 → `judah`; 30:24 → `joseph`; 28:9 → `ishmael`.
  - 26:4 and 28:14 ("offspring") → `promised-seed`.
- **Chapter `topics` lists** never include patriarchs, dreams, promised-land, judah or joseph.

### 25. MINOR: Mechanics and density
- **a. Word notes without fields.** Two `word` notes lack `orig` and `kind`: 35:26 ("A summary, not a census") and 36:37 ("Which river?"). Add them, or retype the notes as `history`.
- **b. `kind` on non-word notes.** Two notes have a `kind` but are not `word` notes: 33:4 (`israel`, `var`) and 35:21 (`israel`, `com`). Retype them as `word` or drop the `kind`.
- **c. Repeated points:**
  - Targum Onqelos "by prophecy" appears twice (notes 27:5 and 27:13). Keep one.
  - Note 33:18 repeats the variant entry for 33:18. Shorten it to a pointer.
- **d. Unexplained terms.** Note 26:1 uses "J" and "E" without explaining them. Explain them once, or point to `pentateuch-sources`.
- **e. Long sentences.** Some exceed 40 words: 26:4 (55), 28:6 (54), 30:35 (43), 29:10 (40). Split the ones the Hebrew does not force, for an 8th-grade reader.

### 26. MINOR: Note 26:7 "An outright lie this time" overstates
- **Problem:** Hebrew *'achot* also means "kinswoman." Laban's family calls Rebekah "our sister" (24:60), and she is Isaac's cousin's daughter.
- **Fix:** "Not even Abraham's half-truth: Rebekah is only his kinswoman, not his sister."

### 27. MINOR: Note 30:21 "Jacob surely had other daughters (37:35; 46:7)"
- **Problem:** Rashi and others read "daughters" there as daughters-in-law.
- **Fix:** Say "may have had".

### 28. MINOR: BSB similarity, judged
- **My measure.** I measured word-level similarity to the BSB, WEB and KJV. 49 verses reach 0.8 or more against the BSB, 25 of them in ch. 36 name lists. The writer's own count was 92 by its metric.
- **Outside ch. 36.** For the rest, the gap between BSB similarity and the best of WEB/KJV is usually under +0.15. Many verses are as close or closer to the WEB: 26:6, 26:19, 30:5, 30:9, 32:1, 35:24, 35:26. That is the literal Hebrew talking, not dependence.
- **The few with real overlap** with modern wording:
  - 27:34 "he let out a ... cry" (BSB "let out a loud and bitter cry"; Hebrew "cried a cry")
  - 34:30 "You have brought trouble on me ... made me stink" (ESV)
  - 34:7 "a disgraceful thing in Israel by lying with Jacob's daughter, a thing that must not be done" (ESV and NIV clause order)
  - 27:41 "said to himself" for "said in his heart" (ESV/NIV)
- **Verdict.** None of this needs redoing as copying, but 34:30 and 34:7 deserve a fresh pass. For 27:41, "said in his heart" also keeps the Hebrew image.

### 29. MINOR: Cross-references to add
- Hebrews 11:9 (Isaac and Jacob living in tents as heirs of the promise), at 26:3 or 35:27.
- John 4:12 ("Are you greater than our father Jacob, who gave us the well?"), at 33:19.
- Luke 13:28 and Matthew 8:11, in chapter echoes.
- 48:22, at 33:19 and 34 (see 23d).

### 30. MINOR: Note 29:25 cites Fokkelman for a Genesis Rabbah line
- **Where:** Note 29:25 ("The deceiver deceived") has `s: ["genesis-rabbah","fokkelman-narrative"]`.
- **Problem:** The quoted line ("Didn't your father call you Esau ...") is Genesis Rabbah 70:19. Fokkelman's role is not stated.
- **Fix:** Name what Fokkelman contributes (the measure-for-measure pattern), or drop the key.

### 31. MINOR: No `myth` notes beyond one; no Old-earth lens
- **Missing `myth` notes.** The river-spirit parallel to the Jabbok wrestler (Gunkel) and the "maternal impression" belief (30:37–39) are both classic `myth`-type material. Both sit in `views` notes, so the type count misleads.
- **The O lens.** It is never used. That is acceptable, but 35:28 (Isaac's 180 years) is the one place where it has something distinct to say.

### 32. MINOR: Spot-check record of the rabbinic and other citations (for the writer's confidence)
- **Verified correct:**
  - Mishnah: Kiddushin 4:14; Chullin 7:1; Megillah 4:10; Shabbat 19:3; Shekalim 7:4.
  - Talmud:
    - Yoma 28b; Berakhot 7b, 13a, 26b, 60a.
    - Chullin 91b (stones merging, the earth shrinking, the angel singing at dawn).
    - Megillah 13b; Bava Batra 15b, 123a; Shabbat 55b; Sanhedrin 99b; Gittin 57b; Sotah 13a; Pesachim 54a.
  - Genesis Rabbah 63:10, 64:3, 65:1, 65:20, 67:2, 67:4, 68:12, 70:16, 70:19, 71:7, 77:3, 78:9, 80:1, 82:10.
  - Other midrash: Leviticus Rabbah 29:2; Lamentations Rabbah proem 24; Sifre Numbers 69; Pirqe de-Rabbi Eliezer 38.
  - Targums: Onqelos 27:13, 31:13, 36:24; Pseudo-Jonathan 35:21, 36:32, 41:45.
  - Maimonides, Laws of Kings 9:14; Ramban on 26:5, 32:4, 32:26, 34:13.
  - Rashi on 26:2, 27:1, 27:15, 27:19, 27:27, 27:33, 28:11, 28:16, 28:21–22, 29:10, 29:11, 32:23, 32:32, 33:4, 35:8, 48:7.
  - Ibn Ezra on 31:19 and 36:31.
  - Modern works: Speiser 1963 and Greengus 1975; Draffkorn 1957 and Greenberg 1962; Hillers 1972; Bechtel 1994; van Wolde 2002; Fewell and Gunn 1991; Sapir-Hen and Ben-Yosef 2013.
  - Archaeology: the Merneptah Stele (about 1208 BC); Deir Alla (1967); Bennett at Busayra.
- **Not verified:** Genesis Rabbah 74:4 (Rachel's death from Jacob's oath). It is plausible, but I could not confirm the section number; check it.

---

## Fixes applied

All fixes below were applied by the part writer on 2026-10-23. `node tools/build.js --check Gen/26-36` passes with 0 errors and 0 warnings. The full build still reports errors, but every one of them is in chapters 12–25, which part 12-25 is revising. This part did not touch those files.

0. **Toledot.** Following the coordinator's final instruction, toledot is rendered "family history" at 36:1 and 36:9, and in note and gloss 36:1.
1. **topics.json shape.** The coordinator fixed this. I kept the claude box titles ("The two blessing scenes mirror each other", "Returning the stolen blessing"); both fit.
2. **Quotes in ESV or NIV wording.**
   - Every flagged Genesis quote in chapters.json, topics.json and the new core files now uses this part's Plain wording. That includes "faithful love", "struggled with God and with humans and have won", "still my life was rescued", "Like a prostitute, is that how he should treat our sister?", "Give me children!", "God's wrestlings", "This is nothing but the house of God", "shook with a great trembling" and "listened to my voice".
   - New Testament and other quotes are now fresh renderings: Hebrews 12:16–17, Romans 9:11, Exodus 34:6, Hosea 12:4, 1 Samuel 10:2 and Hebrews 11:21.
   - I ran a script that compares every quoted string with the Plain of all four parts. What is left over is non-Genesis wording or paraphrase.
3. **Shared source keys.** The coordinator handled the shared keys. I also removed 4 keys that nothing cites (hendel-epic, fishbane-jacob, zakovitch-jacob, cranfield-romans). The other keys you listed now live in content/sources.json.
4. **Variants.** I added 8 entries, bringing the total to 18:
   - **(a) 30:36:** the Samaritan addition of the 31:11–13 dream, with 4Q364.
   - **(b) 31:53:** MT plural, Samaritan singular, and the LXX singular with no final phrase.
   - **(c) 35:7:** MT plural against the Samaritan, LXX and Vulgate singular. The English is the same either way, and the `why` says so.
   - **(d) 36:6:** Samaritan and LXX "from the land of Canaan", Peshitta "Seir", Onqelos "another land".
   - **(e) 36:3:** Samaritan Mahalath. The entry says the same choice applies in 36:4, 10, 13 and 17.
   - **(f) 35:16:** the LXX opening with the tower of Gader, and Chabratha.
   - **(g) 36:26:** Dishon is kept, and the `follow` points to the corrected reading. The stated policy is to follow the Leningrad consonants and to correct a vowel letter only where the context shows a slip. That is consistent with keeping Hadar at 36:39, where the difference is between two consonants.
   - **(h) lesser candidates:** 27:27 "full field" became a variant entry. The LXX "the vision" at 31:49, the LXX future at 32:28 and the LXX *Iamin* at 36:24 were added to the notes. I left out the Samaritan reading at 31:49 because I could not confirm it.
   - All the "could not check" hedges on these verses have been removed. The notes now point to the variants.
5. **Ibn Ezra.** Corrected in the ch. 36 L view and in the edom `uncommon` line.
6. **32:22.** The Plain now reads "his eleven children", and the note has been rewritten to match.
7. **Claude boxes.**
   - The ch. 28 spec box is gone. Its point now appears in the deep section, credited to Fokkelman and Sarna.
   - The jacob box credits Fokkelman, Sarna and Alter, and keeps only a small added point: the two questions about who Jacob is (27:18; 32:27).
   - The blessing box says what Fokkelman noticed and what Claude adds.
8. **Esther 4:1.** The cry is now Mordecai's, at Haman's decree.
9. **27:44.** Now "a few days", matching 29:20. I removed the gloss and updated note 27:5.
10. **32:25 and 32:32.** Both now say "touched".
11. **31:53.** "God" is capitalized all three times. The note discusses whether the plural verb means two gods.
12. **34:13.** Now "with trickery". Notes 29:25 and 34:13, the ch. 34 reading and the circumcision topic all say "trickery" too.
13. **33:4 echo note.** Rewritten to say "the same gestures", with 45:14–15 and 46:29 added.
14. **27:45.** Rewritten as you suggested.
15. **32:15.** The note now gives the actual ratios.
16. **Abishag.** Now "David's attendant".
17. **Abimelech.** Both places now say "at least sixty and perhaps nearly a hundred years".
18. **Teraphim gender and size.** Now "household gods" in both places.
19. **Standing stones.** Now attributed to Rashi on Deuteronomy 16:22, following the Sifre. Ramban has been removed.
20. **Genesis Rabbah 65:20.** Now credited to the Midrash.
21. **Doubtful attributions.**
    - (a) I removed Rashi's name from the isaac line. It now cites the rabbinic rule "no earlier or later in the Torah" (Pesachim 6b).
    - (b) I dropped the unsourced line about a double tithe.
    - (c) The rebellion is now placed under Jehoram, citing 2 Kings 8:20 and Rashi on 36:31.
22. **Glosses.** 34:3 is now "became deeply attached", and 35:6 "the town also called Bethel". 29:1 is "set out on his journey", with Rashi's reading labeled as his.
23. **Chapter 34.**
    - (a) The Plain heading is now "The violation of Dinah". The sexual-violence section is retitled "Dinah (Genesis 34)".
    - (b) Note 34:3 now says "the text implies".
    - (c) Simeon's promise to marry Dinah (Genesis Rabbah 80:11) is added to the ch. 34 deep section and to the dinah topic.
    - (d) 48:22 is added to the ch. 34 echoes, to note 34:30 and to note 33:19.
24. **Topic hygiene.**
    - I removed the aliases that misroute from teraphim, tithe, shechem and jacob.
    - I added all the `related` links you listed.
    - I added whole-Bible sections to the isaac and circumcision cores.
    - Notes now point to topics: patriarchs (26:1, 31:34), pentateuch-sources (26:1, 27:46, 35:10), dreams (31:10, 31:24), judah (29:35), joseph (30:24), ishmael (28:9) and promised-seed (26:4, 28:14).
    - Chapter `topics` lists now include patriarchs, pentateuch-sources, dreams, promised-land, promised-seed, judah, joseph and ishmael where they fit.
    - The 28:12 notes stay on jacobs-ladder, which is the better target for them.
25. **Mechanics.**
    - (a) 35:26 and 36:37 are retyped as `history`.
    - (b) I dropped `kind` from 33:4 and 35:21.
    - (c) Note 27:5 now points to 27:13 for the Targum, and note 33:18 points to its variant.
    - (d) Note 26:1 now explains J and E and points to the pentateuch-sources topic.
    - (e) I split 28:6, 29:10 and 30:35. **Rejected for 26:4:** the Hebrew sentence runs on into 26:5 ("because Abraham listened..."), so splitting it would cut the promise off from its reason.
26. **26:7.** Retitled "Not even a half-truth". The note now explains that *achot* can mean "kinswoman" (24:60).
27. **30:21.** Now "may have had other daughters", with Rashi's reading of those verses as daughters-in-law.
28. **Close wording.** 34:7, 34:30, 27:34 and 27:41 have been reworded. 27:41 now says "said in his heart".
29. **Cross-references.** Added Hebrews 11:9 (note 35:28 and the ch. 35 echoes) and John 4:12 (note 33:19 and the ch. 33 echoes). Matthew 8:11 and Luke 13:28 are in the ch. 28 echoes.
30. **29:25.** The note now says what Fokkelman adds (the measure-for-measure pattern) and cites Genesis Rabbah 70:19.
31. **`myth` notes and the O lens.**
    - I added a `myth` note on Gunkel's river spirit at 32:26 ("because the dawn has come up") and retyped 30:39 (maternal impression) as `myth`.
    - I added an O view to ch. 35 on Isaac's 180 years.
32. **Genesis Rabbah 74:4.** I could not confirm the section number either, so the ch. 31 J view now cites "Rashi on 31:32, from the Midrash" in its place.
