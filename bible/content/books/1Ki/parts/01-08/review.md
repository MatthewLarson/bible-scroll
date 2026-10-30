# Hostile review: 1 Kings 1–8 (part 01-08), book.json, new topic cores and sources

## Verdict

This part is good. The translation is careful and tied to the Hebrew. I compared all 334 verses with `node tools/literal.js 1Ki 1–8` and found nothing added, dropped or mistranslated that changes the meaning. I found no NIV/ESV drift that needs a redraft. Terms follow terms.json: hesed is "loyal love", the four law words are "rules / commands / rulings / decrees", nagid is "ruler", zar is "outsider", nokhri is "foreigner", 'edah is "community", Adonai YHWH is "Lord GOD", and "Sheol" is used. Chapters 1–2 agree with the end of 2 Samuel on Joab, Abiathar, Shimei, Benaiah, the Kerethites and Pelethites, and the "set my life free from every kind of trouble" oath. The notes are dense, accurate and fair. The succession, the three killings, the size of the kingdom and the "Solomonic gates" are each given with traditional, critical and middle views in strong form. All four of Claude's theories (ch2 spec, ch7 spec, temple topic, book spec) are clearly labeled and say where they overlap with published scholarship. The build check passes for `1Ki/01-08` and for `1Ki` (0 errors, 0 warnings).

The weak spot is textual criticism. 1 Kings is the book where the Greek differs most, and some well-known differences are missing. The worst gaps: the Lucianic reading at 2:5, which falls in the very stretch the writer says the Lucianic Greek is the better witness; the much shorter Greek of 8:1–5; and the Greek order of 7:1–12. A note promises a variant entry for 7:1–12, but no entry exists. There is also a mismatch between what the writer reported and the files. The report says the Plain English Translation follows 2 Chronicles at 4:26 and 8:16 and the Lucianic Greek at 1:8. In fact all three entries follow the Masoretic Text ("follow":0 is MT). The files agree with book.json ("the Plain English Translation keeps the Hebrew"), so the report, not the text, is what needs correcting. Beyond that, the findings are minor fixes to individual facts and attributions.

Checked on the web or against sources, and confirmed: Josephus, *Antiquities* 7.343 (the physicians' advice about a virgin to warm David); the Greek "three rows" at 7:2; 4QKings (4Q54) preserving 8:16–18 (but see finding 15 on the strength of its support); the Ashurnasirpal 69,574 guests; the haftarah ranges in book.json (Chayei Sarah 1:1–31, Vayechi 2:1–12, Ki Tisa 18). Gressmann 1907 (*Deutsche Rundschau* 130) and *Against Apion* 1.106–127 (Dius about 1.112–115, Menander about 1.116–126) agree with standard references. All 18 new shared source keys and the part's 12 keys are real works, with correct authors, series and dates.

## Findings

### Major

**1. Major: variants.json, 2:5. The Greek "innocent blood ... on my belt ... my sandals" is missing.**
The Greek of 2:5 reads "innocent blood" (αἷμα ἀθῷον) for the second "blood of war". The Lucianic manuscripts and the Old Latin also read "my belt ... my sandals" (μου) where the Hebrew has "his" (חֲגֹרָתוֹ ... בְּנַעֲלוֹ), as Montgomery and Cogan report. The writer's own policy (variant at 1:8, book.json) is that the Lucianic text is the better Old Greek witness in 1:1–2:11, so this verse in particular needs an entry. The symbol note on 2:5 says Gray thinks "the phrase also points at David". That reading rests largely on the Greek "my", which the note does not mention.
Fix: add a variant (MT "his belt ... his sandals" vs Lucianic/OL "my belt ... my sandals", with "innocent blood"). Keep the MT if the writer prefers, and cross-reference it from the 2:5 symbol note.

**2. Major: variants.json, 8:1–5. The much shorter Greek text is not mentioned.**
The Old Greek of 8:1–5 lacks much of the Hebrew. The missing parts include "all the tribal heads and the leaders of the Israelite families", "in the month of Ethanim ... the seventh month", and parts of 8:3–4 on who carried what. Tov (*Textual Criticism of the Hebrew Bible*) uses this as a standard example of a Masoretic expansion, partly in priestly style. The Plain English Translation does not need to change, but a careful reader should know about this, and it bears on the "priests and Levites" wording of 8:4.
Fix: add one entry anchored at 8:1 (and at 8:2 and 8:4 if needed, each `p` saying they go together), citing Tov and Cogan.

**3. Major: 7:1–12. A cross-reference points to a variant that does not exist.**
The history note on 7:1 says "In the Greek translation this whole section comes after 7:51 ... see the variant." No variant at 7:1 exists. Chapter 7's critical view, the textual-history topic and book.json all describe the transposition as a major difference.
Fix: add a variant at 7:1, like the 6:11–14 entry: Greek (Vaticanus) places 7:1–12 after 7:51 (Rahlfs 3 Kgdms 7:38–50), the MT keeps the order, and the Plain English Translation follows the MT. Or remove "see the variant".

**4. Major: the writer's decision record does not match the files (1:8, 4:26, 8:16).**
The writer reported that the Plain English Translation follows the Lucianic Greek at 1:8 and 2 Chronicles at 4:26 and 8:16. In the files, all three entries have `"follow":0` on the Masoretic reading. The verse text also follows the MT: "Shimei, Rei"; "forty thousand stalls"; 8:16 has no "I chose Jerusalem". Keeping the MT is defensible in all three places, and book.json says the Plain English Translation keeps the Hebrew.
Fix: correct the report (or PROGRESS.md) to say the MT is followed in all three places. If the writer did mean to follow Chronicles at 4:26 or 8:16, rewrite the verse, the variant `follow` and the 4:26 history note together.

### Minor

**5. Minor: variants.json, 1:47.** The entry lists the ESV as following the Qere "God". The ESV reads "your God" (the Ketiv), as the NIV does. Fix: move the ESV to the Ketiv line.

**6. Minor: variants.json, 1:48 and the 2:11 note.** In 1:1–2:11 the writer says Rahlfs/Vaticanus is the *kaige* text, yet 1:48 cites "Septuagint (Rahlfs' edition)" with no Lucianic witness. The 2:11 note says "see the variant at 2:35" for *kaige*. The *kaige* explanation is actually in the `b` of the 1:8 and 1:48 variants, not 2:35. Fix: say whether the Lucianic text agrees at 1:48, and point the 2:11 note to 1:8.

**7. Minor: 5:16, 3,300 foremen.** The Greek (3 Kgdms 5:30) has 3,600, the same as 2 Chronicles 2:2, 2:18. The history note handles Chronicles well (3,300+550 = 3,600+250 = 3,850) but does not mention the Greek. Fix: add "the Greek also has 3,600" to the note, or add a short variant.

**8. Minor: 7:15, the bronze pillars.** The Hebrew "a cord twelve cubits long would reach around the second" is odd. The Greek of Kings (like Jeremiah 52:21) adds that the pillar was four fingers thick and hollow. The note cites only Jeremiah. Fix: add a variant, or name the Greek of Kings in the note.

**9. Minor: parallels with Chronicles are treated unevenly (4:26, 7:24, 7:26).** 4:26 gets a variant entry for Chronicles, but 7:26 (2,000 vs 2 Chronicles 4:5 three thousand baths) is handled only in a note. 7:24 "gourds" vs 2 Chronicles 4:3 "oxen" (פקעים / בקרים, a one-letter difference) is not mentioned anywhere. The 4:26 entry also leaves out that the Greek has the "forty thousand" figure in its miscellany (2:46i) and a different figure at 10:26. Fix: add 7:24 to the 7:23–26 notes, and either add a 7:26 variant or say in the 4:26 entry why Chronicles is treated as a variant only there.

**10. Minor: 7:40, "basins".** The MT has כִּיֹּרוֹת "basins" here. A few Hebrew manuscripts, the Greek and 2 Chronicles 4:11 have "pots" (סִירוֹת), which matches 7:45. Fix: add a short note or variant.

**11. Minor: 1:18, Plain English Translation and a variant.** The Hebrew is second person, לֹא יָדָעְתָּ "you do not know", but the Plain English Translation has "my lord the king does not know". The verse's second "and now" (ועתה) is also read "and you" (ואתה) in many Hebrew manuscripts and the versions, which is what most modern translations follow. Fix: "And you, my lord the king, do not know", with a short note on ועתה/ואתה.

**12. Minor: silent emendations at 6:15–17.** At 6:15 and 6:16, "beams" translates MT קִירוֹת "walls", read as קוֹרוֹת "beams" (Greek). The 7:7 note admits this in passing ("as in 6:15–16"), but there is no note at 6:15. At 6:17, "in front of the inner room" covers the obscure MT לִפְנָי "before me". Fix: add one word note (`kind:"var"`) at 6:15 covering 6:15–17.

**13. Minor: 1:40 note, "the earth split".** The note says some scholars emend to "the earth rang" "but no Hebrew manuscript has it". The Greek actually has it (ἤχησεν ἡ γῆ, "the earth resounded"), and that is why the emendation is proposed. Fix: name the Greek.

**14. Minor: Greek readings in variants (2:29, 8:53).** In the 2:29 Greek reading, κύριον becomes "the Lord", while 8:53 uses "the LORD". The site's convention for κύριος = YHWH is "the LORD". At 8:53 the `en` gives "made the sun known" (ἐγνώρισεν) but the `plain` says "set the sun". Fix: use "the LORD" in both, and either explain "set" (an emendation to ἔστησεν, or the presumed Hebrew הֵכִין) or render "made known".

**15. Minor: 8:16 and the chosen-place topic overstate Qumran.** The variant rightly says 4QKings' support "depends on how much space its editor reconstructs". The chosen-place topic says outright that "a Qumran fragment make[s] the choice of Jerusalem explicit". The variant's "compare the Septuagint" is also vague: say exactly what the Greek of 8:16 contains. Fix: in the topic write "Chronicles, and probably a Qumran fragment," and state the Greek reading in the variant.

**16. Minor: notes.json, 1:2 ("Servant or slave").** The note says Bathsheba calls herself "your servant" (1:13, 1:17) as an example of *eved*. Her word is אֲמָתְךָ *amatkha*, "your maidservant". Fix: name *amah* for Bathsheba, or drop her from this note.

**17. Minor: notes.json, 1:52.** "The same phrase, *ben chayil*, was Adonijah's word for Jonathan (1:42)". In 1:42 the phrase is אִישׁ חַיִל *ish chayil*. Fix: "a similar phrase (*ish chayil*)".

**18. Minor: when Zadok first appears (1:7 note, ch1 deep, zadok.json).** The 1:7 note and the chapter 1 deep section say Zadok "appears only after David took Jerusalem". But 1 Chronicles 12:28 places a young warrior named Zadok with David at Hebron. zadok.json says Zadok "first appears with [Abiathar] as David's priests in Jerusalem (2 Samuel 8:17)". That verse, in the site's own Plain English Translation, names "Ahimelech son of Abiathar". Fix: say "first appears in Samuel after the capture of Jerusalem (Chronicles places a Zadok at Hebron, 1 Chronicles 12:28)", and note the Ahimelech/Abiathar problem of 2 Samuel 8:17.

**19. Minor: notes.json, 1:33 (Gihon).** The note dates the spring tower to the Middle Bronze Age without a caveat. Radiocarbon dating published in 2017 (Regev, Uziel, Szanton, Boaretto, *Radiocarbon*) placed parts of it in the late 9th century BC, and the date is now debated. Fix: add "though recent radiocarbon dates suggest parts are much later".

**20. Minor: archaeology wording.** At 3:4, the Gibeon jar handles were *inscribed* "gb'n", not stamped. At 6:3, 'Ain Dara's "side rooms around the building" is really a corridor (ambulatory) around the shrine. At 7:2, the inference "forty-five in rows of fifteen ... suggests three" is one view: many commentators take the 45 of 7:3 as side chambers or beams, not pillars, which would make "four rows" consistent. Fix: adjust the wording at each place.

**21. Minor: unsourced rabbinic claims.** Chapter 2's Jewish view says "some held Solomon responsible for failing to keep Shimei in check sooner". The 3:14 note says "the rabbis noted that he did not reach the seventy years of David". Neither gives a source, and I could not confirm them. Fix: cite them (Bavli Berakhot 8a links Shimei and Solomon, but differently) or cut them.

**22. Minor: notes.json, 8:12.** The note quotes Exodus 20:21 as "drew near to the thick darkness where God was". The site's Plain English Translation reads "went up close to the deep darkness where God was". Fix: use the site's wording. (The build did not catch this because the reference follows a second clause.)

**23. Minor: glosses.json.**
- 6:1 glosses "Four hundred and eighty years had passed" as "about 966 BC". That reads as if the 480 years equal the date. Better: "in the 480th year after the exodus (about 966 BC on the usual dating)".
- 7:1 glosses "thirteen years" as "almost twice as long as the temple". That leans toward the "rebuke" reading, which the 6:38 note presents as only one view.
- 1:25 "God save King Adonijah!" is a British formula, not modern American.
- 3:16 "sex workers" is anachronistic and reads as patronizing.
- 4:3 "secretary of state" is anachronistic. The note itself prefers herald or keeper of records.
Fix: revise these five glosses.

**24. Minor: topic tagging.** `high-places` exists (aka "hilltop shrines", the gloss's own words), but the 3:2 and 3:3 notes are tagged `chosen-place`/`solomon`. topics.json has no `high-places` contribution, and chapter 3's topics list leaves it out. 1:8/1:10 ("David's mighty men") are not linked to `mighty-men`. Fix: retag 3:2, add a short `high-places` section, and optionally add `mighty-men` to chapter 1.

**25. Minor: consistency with 2 Samuel.** The 2 Samuel Plain English Translation says "Amasa ... son of a man named Ithra the Israelite" (17:25), while 1 Kings 2:5 and 2:32 have "Jether" (the Hebrew differs: יֶתֶר vs יִתְרָא), with no note. "Barzillai the Gileadite" (2:7) vs "Barzillai of Gilead" (2 Samuel 19:31) renders the same Hebrew two ways. "Mighty men" (1:8, 1:10) vs "David's warriors" (2 Samuel 23:8) does the same for *gibborim*. Fix: add a one-line note on Jether/Ithra (compare 1 Chronicles 2:17), and align the other two renderings with 2 Samuel or note the choice.

**26. Minor: fairness wording on the united monarchy.** The chapter 4 deep section calls Khirbet Qeiyafa "a fortified Judahite town". That identification belongs to its excavators (Garfinkel), and Finkelstein, Na'aman and others contest it. Fix: "identified by its excavators as Judahite". book.json's "1 Kings and history" section groups Finkelstein under "Minimalist and low-chronology scholars". He rejects the minimalist label, and the 4:21 note's "more cautiously" is fairer. Fix: say "low-chronology scholars such as Israel Finkelstein, and the minimalists".

**27. Minor: small factual and reference points.**
- The prayer topic calls 8:22–53 "the longest prayer in the historical books". Nehemiah 9:5–37 is about as long. Fix: "one of the longest".
- In book.json and the chapter 8 Jewish view, 1 Kings 8:54–66 is also the haftarah for Shemini Atzeret, and 3:15–4:1 for Miketz. These are worth adding beside the Sukkot reading.
- The Wikipedia link `["Solomonic gates","Solomon's Gate"]` in united-monarchy.json could not be verified (fetch blocked). Check that the article exists.
- The 7:23 note cites `meyers-exodus` (her Exodus commentary) for the symbolism of the Sea. A work where she discusses the temple furnishings would be a better source.

**28. Minor: small additions in the Plain English Translation.** 3:1 "She lived there until..." (the Hebrew only says he brought her to the City of David until he finished). 2:37 "no one else's". 2:5 "Think what he did". Each adds a few words with no Hebrew behind them. They are harmless but could be trimmed. Fix: optional tightening.

## Fixes applied

Applied by the part 01-08 writer, 2026-10-23.

1. Added a 2:5 variant: MT "his belt ... his sandals" against Lucianic/Old Latin "innocent blood ... my belt ... my sandals". The Plain English Translation follows the MT. The 2:5 symbol note now says Gray's reading draws on the Greek "my" and points to the variant. While re-auditing, I also trimmed the added "Think what he did" from 2:5.
2. Added an 8:1 variant on the shorter Old Greek of 8:1–5, with the 8:2, 8:4 and 8:5 minuses described in `why`, citing Tov and Cogan. The Plain English Translation follows the MT.
3. Added the missing 7:1 variant for the Greek placement of 7:1–12 after 7:51. The Plain English Translation follows the MT, so the note's "see the variant" is now true.
4. I kept the MT at 1:8, 4:26 and 8:16; the evidence does not force a change. The files already said so; my earlier report was wrong. The files now say so consistently: the 8:16 variant and the chosen-place topic say "probably" for Qumran, and nothing claims the Plain English Translation follows Lucianic or Chronicles there.
5. 1:47: the ESV is moved to the Ketiv line.
6. 1:48: the variant now says the Rahlfs/Vaticanus text is kaige here and that the Lucianic text was not checked, and explains why a plus that survives in kaige is likely Old Greek. The 2:11 note now points to 1:8.
7. 5:16: the note now says the Greek has 3,600 (as reported).
8. 7:15: the note now names the Greek of Kings for the "hollow, four fingers" detail.
9. 7:24: a new note on gourds against Chronicles' oxen. 7:26: a new variant against 2 Chronicles 4:5's three thousand baths. The 4:26 `why` now says Chronicles differences are shown the same way and mentions the 2:46 miscellany figure.
10. 7:40: a new variant, basins against pots.
11. 1:18: the Plain English Translation now reads "And now, my lord the king, you do not know it." I kept MT ועתה and added a variant (ואתה, "and you") and a word note.
12. 6:15: a new var word note on walls/beams (Greek) covering 6:15–17.
13. 1:40: the note now names the Greek "the earth resounded".
14. 2:29 and 8:53: "the LORD" in the Greek readings. At 8:53 the plain now says "made the sun known", with a `b` line on the presumed Hebrew *hekhin*.
15. The 8:16 variant now states what the Greek contains. The chosen-place topic says "probably a Qumran fragment".
16. 1:2: the note now says Bathsheba uses *amah*.
17. 1:52: changed to "a similar phrase, *ish chayil*".
18. The 1:7 note, the chapter 1 deep section and zadok.json now say "first appears in Samuel after the capture of Jerusalem", with 1 Chronicles 12:28 and the Ahimelech/Abiathar point at 2 Samuel 8:17.
19. 1:33: added the 2017 radiocarbon caveat.
20. 3:4: changed to "inscribed". 6:3: the 'Ain Dara rooms are now described as a corridor. 7:2: both readings of 7:3 are now given.
21. Cut the unsourced rabbinic claims: the chapter 2 Shimei sentence, and the 3:14 "rabbis noted" (now a plain arithmetic remark).
22. 8:12: the Exodus 20:21 quote now matches the site's Plain English Translation exactly.
23. Glosses: 6:1 revised as suggested. 7:1 is now "six years longer than the temple took". 1:25 is now "three cheers for King Adonijah!". 4:3 is now "the keeper of the royal records". The 3:16 gloss is deleted.
24. The 3:2 note is retagged high-places, and a high-places topic contribution is added. Chapter 3 now lists high-places and chapter 1 lists mighty-men.
25. Added a Jether/Ithra note at 2:5. 2:7 now reads "Barzillai of Gilead", and 1:8 and 1:10 now read "warriors", matching 2 Samuel.
26. Chapter 4: Qeiyafa is now "identified by its excavators as Judahite", with the dissent noted. book.json now says "Low-chronology scholars such as Israel Finkelstein, and the minimalists".
27. Prayer topic: changed to "one of the longest". book.json now adds Miketz (3:15–4:1) and Sukkot/Shemini Atzeret (8:2–21; 8:54–66), and chapter 8's J view adds Shemini Atzeret. The unverifiable "Solomon's Gate" link is replaced by Tel Hazor and Tel Megiddo. 7:23 now cites a new part key, meyers-abd-temple (Meyers, "Temple, Jerusalem," ABD 6).
28. Trimmed 3:1 ("until he had finished"), 2:37 ("no one else's" dropped, gloss anchor adjusted) and 2:5.

Drift re-audit for the rewritten verses 1:8, 1:10, 1:18, 2:5, 2:7, 2:37 and 3:1 is logged in scratch (outcome and reason only).
