# Hostile review: Jeremiah 46-49 (part 46-49)

Reviewer: hostile-reviewer agent (not the writer). Checked against texts/orig/Jer.json (via tools/literal.js), texts/auto/Jer.json (Ketiv/Qere), Swete's Greek (tools/lxx.py), 2QJer (tools/dss.py, ETCBC transcription), and the site Plain English Translation of Isaiah 15-16 and 24, Numbers 21 and 24, Jeremiah 25, 30, 40, 43 and 50. `VERBOSE=1 node tools/build.js --check Jer/46-49` gives 0 errors, 1 warning (the warning is about Jer/book.json 1:1, part 01-06's file, not this part).

## Verdict

The Plain English Translation is mostly faithful and readable. Chapter 48 follows the site's Isaiah 15-16, Isaiah 24:17-18 and Numbers 21:28-29 closely wherever the Hebrew is the same. I found no invented source or fabricated manuscript reading. The Greek claims I checked in Swete are right (the Apis reading in 26:15, no Tahpanhes in 26:14, no verse 26, no 30:10-11, "Ekron" in 31:41, the Elam block at 25:14-19). The facts the writer took from memory also hold up: Ashkelon in Kislev 604 BC with Stager's article, Herodotus 3.8 on the Arab haircut, the Chronicle's year-6 raid on the Arabs, the Tell el-'Umeiri seal, Baruch 3:22-23, and the NRSV's "Apis". The part still has real problems:

- **Parallel pairs.** The pairs 46:27-28 with 30:10-11, 49:18 with 50:40 and 49:19-20 with 50:44-45 are not aligned. One note says they are ("the Plain English Translation gives them the same English"), and that is false.
- **2QJer and wording.** One 2QJer claim is false ("only spelling" at 48:30). The chapter-48 text says 2QJer covers "25-45", but the scroll has no 40-42. The date "about 100 BC" for 2QJer has no source.
- **Reader-facing admissions.** Several admit work not done ("Ziegler's critical text not checked", "I have not checked them verse by verse", "in the transcription I read"). Two of these sit beside Jewish commentators' views that were asserted without being read.
- **Wrong source.** One source key (kitchen-tip for Neco II) does not cover the subject.
- **Drift and gaps.** Some drift toward NIV/ESV sentence shape (46:3-4), a few overstated or garbled variant explanations, and several real Greek differences left out of the variants.

Findings: 0 critical, 9 major, 17 minor.

## Major

1. **Major. 46:27-28 vs 30:10-11 (plain.txt; Jer 26-31 plain.txt).** The Hebrew is the same except for the points listed in the note (46:28 lacks "to save you" and has "driven" for "scattered"). The Plain English Translation differs in almost every line:
   - "So you" / "As for you".
   - "do not be terrified" / "do not be shattered", both from `ve'al tehat`.
   - "I am about to save you" / "See, I am the one who will save you", both from `hinneni moshi'aka`.
   - "your descendants" / "your children", both `zar'aka`.
   - "the land where they are captives" / "the land of their captivity", both `'erets shivyam`.
   - "be at peace and at ease" / "rest undisturbed, at ease", the same Hebrew in both verses.
   - "no one to frighten him" / "no one to scare him", both `ein macharid`.
   - 46:28 "make a full end ... not make a full end of you" / 30:11 "finish off ... not finish you off", both `'e'eseh khalah`. Only "driven/scattered" is a real Hebrew difference.
   - "discipline you with justice; I will not let you off as innocent" / "discipline you fairly, and I will not simply let you off". The Hebrew `vyassartikha lamishpat venaqqeh lo 'anakkekka` is identical in both.
   - Fix: pick one wording (the 30:10-11 part is the earlier verse and is the model) and make 46:27-28 identical except at the real differences: the missing `ne'um YHWH` in 46:27, the missing `lehoshi'ekha` in 46:28, and `hiddachtikha` against `hafitsotikha`. Say the Greek has 46:27-28 and lacks 30:10-11 only once.

2. **Major. 49:19-20 vs 50:44-45; note 49:19 claims the opposite.** The note says "the Plain English Translation gives them the same English". It does not. The Hebrew of 49:19-20 and 50:44-45 is identical except for `argia'ah aritsenu` against `arga'ah arutsem` (singular/plural "him/them") and `Edom/Teman` against `Babel/Kasdim`. Differences that are not in the Hebrew:
   - "Look" / "See" (`hinneh`).
   - "thick brush" / "thickets" (`ge'on`).
   - "never runs dry" / "never fails" (`'eitan`).
   - "in an instant" / "in a moment".
   - "make him run from it" / "chase them off it" (same verb `ruts`).
   - "whomever I choose" / "Whoever is chosen, him I will set over it". 49:19 slides into the ESV/NIV sentence shape for `umi vachur elehah 'efqod`; 50:44 stays with the Hebrew.
   - "call me to court" / "call me to account" (`yo'edeni`).
   - "What shepherd is there who can stand before me?" / "Is there a shepherd who can face me?".
   - 49:20 / 50:45: "That is why you should hear" / "So listen to" (`laken shim'u`); "planned/purposes ... purposed" / "drawn up ... worked out" (`ya'ats`, `chashav`); "dragged off" / "dragged away"; "made a ruin" / "left in horror". The last uses the same Hebrew in both.
   - Fix: align the pair, using the 50:44-45 wording where it is closer to the Hebrew, and correct the note.

3. **Major. 49:18 vs 50:40.** Differences not in the Hebrew: "their neighbor towns" / "the towns around them" (`shekheneyha` in both) and "no human being" / "no human" (`ben 'adam` in both). The real differences are only `elohim` (50:40 only) and `'amar` / `ne'um`, which the Plain English Translation already handles. Fix: align.

4. **Major. Reader-facing statements of work not done (rule: no "not checked", no "I have seen it").**
   - Every Greek reading label repeats "Ziegler's critical text not checked" (about 25 variants), and chapters.json says "I did not have Ziegler's critical text".
   - variants.json 46:15 b: "No Dead Sea scroll in the transcription I read preserves this verse"; 48:47/49:6 "why": "No scroll in the transcription I read preserves this verse"; 47:4 b: "so I rely on the scroll".
   - chapters.json ch 46 J and ch 47 J: "I have not checked their comments verse by verse here, so none are quoted".
   - Fix: say once, on the chapter 46 page, which witnesses were read (the brief allows this). Label the Greek "the Greek (Swete's text of Codex Vaticanus)" throughout, without "not checked". Give scroll absence as "2QJer does not preserve this verse" (this was verified with dss.py). Replace the J lines with checked content or drop them.

5. **Major. Unchecked attributions to the Targum, Rashi and Radak.** The ch 46 J view says "The Targum and the medieval commentators (Rashi, Radak) read the chapter of Nebuchadnezzar's victories" and admits it did not check. The ch 47 J view says "Jewish commentators take the waters from the north as Nebuchadnezzar's army", also unchecked. Radak's note on 48:10 is real and right: on Sefaria Radak glosses "cursed" as "he curses whoever is in the war and slackens his hand from killing". That is the only Jewish comment verified in this part. Fix: read Radak, Rashi and the Targum on 46:2, 46:13 and 47:2 on Sefaria and quote exactly, or remove the claims. Note also that the ch 48 J line cites Radak while the ch 46 and 47 J lines say Radak was not read; the part contradicts itself.

6. **Major. 2QJer claim in note 48:30 is false.** The note says 2QJer "differs from the Masoretic Text only in spelling". dss.py shows `ולא כן בדיו לא כן «עשתה»` against MT `עשו`: a different verb form ("she did" against "they did"). Note it, or say "differs in one verb". The chapter-46 witness paragraph says 2QJer has "48:7, 25-45". The scroll has 48:7, 25-39, 43-45 and 49:10 only (dss.py: no 48:40-42). Fix the range.

7. **Major. "a copy of the Hebrew-type text existed at Qumran by about 100 BC" (variant 48:45 "why").** No source is given and the date is doubtful. 2QJer is usually dated to the late Hasmonean or Herodian period (first century BC or later; DJD III, Baillet). Verify the date, or write "by the first century BC (2QJer, DJD III)". An unsourced manuscript date is exactly the kind of claim that must be verified or removed. Also in the same entry, "Brian Jones's ... 'Jeremiah's version ... weakens the idea of mockery'" (note 48:31) is the writer's own argument, not Jones's. Label it as such (`spec`) or drop it.

8. **Major. Wrong source for Neco II (note 46:2, `kitchen-tip`).** Kitchen's *Third Intermediate Period in Egypt* covers 1100-650 BC; Neco II (610-595) is Saite, outside its range. Use a source that covers the 26th Dynasty, such as `redford-egypt`, which is already in the book, or cite Herodotus and the Chronicle only.

9. **Major. Missing source and unsupported precision for the 568/567 BC fragment.** Ch 46 H and settings, topic `nebuchadnezzar` and topic `egypt` rely on "a Babylonian fragment of the thirty-seventh year (BM 33041, Amasis)". The claim is right in substance, but no note or source key backs it (only the Chronicle and Wiseman are cited). The brief names this fragment as required. Add a note at 46:13 or 46:25 with the fragment, a source (ANET 308 or *COS*; Wiseman, *Nebuchadrezzar and Babylon*) and the debate over the reading "Amasis" and over how much it says about an invasion.

## Minor

10. **Minor. 46:3-4 drift.** "Take your stand with your helmets on" and "Put on your scale armor" keep the NIV/ESV order and phrasing (`vehitytsvu bakkovaʻim`; `levshu hassiryon`), as does "Mount up, you horsemen!" for `ve'alu happarashim` (ESV shape). Recast so it does not track the usual sentence shape; consider "Station yourselves in helmets".

11. **Minor. 46:5 "do not look around".** `lo hifnu` is "did not turn" (back). "Look around" is an added sense. Also 46:6 "cannot" for the jussive `'al` (ESV/NIV shape); "Let not the fast run away" is closer.

12. **Minor. 46:15 plural/singular.** The Hebrew is `'abbirekha`, plural, with a singular verb. The Plain English Translation and the variant's `en` line say "mighty one". The variant's `p` says "your mighty ones". Fix `en`, or add a gloss. The variant's "why" says the Plain English Translation "notes the Apis wordplay", but no note at 46:15 exists (the note at 46:20 sends the reader back to "46:15"). Add the Apis note (Apis bull of Memphis; Hebrew `'abbir` = "strong one"/"bull"; the NRSV reads "Apis", verified).

13. **Minor. 48:9 "Hand Moab a pair of wings".** "A pair" is added. The site's literal gives "salt" for `tsits`; the Hebrew means "blossom/plate". "Wings" is a conjecture (Targum, KJV, ESV, NRSV have "wings"; NIV has "salt"). The variant's why says the reading "matches the Masoretic pointing". It does not; `tsits` is a noun with no pointing issue. Say plainly that "wings" is a guess from context.

14. **Minor. 49:12 "every drop".** Added to `shatoh tishteh`. Drop it.

15. **Minor. 48:27 / 48:26 / 48:39 `sechoq`.** Rendered "a joke", "laughed at" and "laughingstock" for the same word. The point of 48:27 is that Moab becomes what it made Israel. Use one word.

16. **Minor. 48:33 "stopped" against Isaiah 16:10 "silenced".** The verb is the same, `hishbati`. The object differs, so this is only a note. Mention it or use the site's verb.

17. **Minor. Variant 48:4 mislabels the Ketiv/Qere.** texts/auto shows Ketiv `tze'orehah` (צעוריה) and Qere `tse'ireha`. The card says "same consonants with vowels for a different spelling". The consonants differ (vav / yod). Also the Greek "Zoar" explanation is fine.

18. **Minor. Variant 49:25's "why" is garbled** ("a lament that the city was not left in time ('how is it she has not been saved by flight')"). The Hebrew `'ezavah` means "forsaken". The Plain English Translation "How is she not deserted" is a woodenly literal sentence that a reader cannot parse. Say what the line means (she should have been abandoned, and was not / a cry of regret) and keep the Ketiv `tehillah` against Qere `tehillat` as a one-line mention.

19. **Minor. Greek differences left without variant entries or notes** (all in Swete; check Ziegler for each):
    - 46:22 Greek "because they walk in sand" (`en ammo`) for "with an army".
    - 49:1 Greek "Gilead" for "Gad".
    - 49:13 and 49:22 the Greek has no "Bozrah" (49:22: "over her strongholds").
    - 49:19 Greek "set young men over it" for `bachur`.
    - 49:21 Greek "the cry of the sea was not heard" (negated) against "heard at the Sea of Reeds".
    - 46:11 Ketiv `hirbeti` (I have multiplied), not recorded.
    - 49:1, 3 `malkam` against `Milkom` is listed only as a `word` note, though it is a vocalization variant (Greek "Melchol"; Amos 1:15). It could carry a variant entry.

20. **Minor. 46:25 variant.** The Greek is "I am avenging Ammon, her son, on Pharaoh". The Plain English Translation line given for the Greek restructures it ("call Ammon, her son, to account, and Pharaoh"). Keep the Greek's own construction.

21. **Minor. Note 49:9 "nearly word for word Obadiah 5".** The order is reversed (Jeremiah: grape pickers, then thieves; Obadiah: thieves, then pickers), Obadiah adds "how you are destroyed!" and has `yignevu` ("steal") against Jeremiah's `hishchitu`. The note's own body says "different details". Change the `p`.

22. **Minor. Note 48:1 date.** "About 600 BC Moab joined a conspiracy against Babylon (27:3)". Jeremiah 27:3 is the Zedekiah-era meeting, which ch 48 H and settings date to 594/593. The MT of 27:1 has Jehoiakim, which some read as an error for Zedekiah. Use one date and say so.

23. **Minor. Note 48:43 calls Isaiah 24 a "later-looking apocalyptic poem".** This is one critical view stated as fact, and the direction of borrowing between Isaiah 24:17-18 and Jeremiah 48:43-44 is not given. Label it "many critical scholars date Isaiah 24-27 late" and say Jeremiah's use may be the earlier one.

24. **Minor. Mesha stele deep paragraph (ch 48).** "Jeremiah ... says Chemosh will be taken away as the vessels were" makes a link Jeremiah does not make. "A national god who gets angry and then rescues" is loose. Tone down or label as a comparison.

25. **Minor. Spec boxes.**
    - "Why Tabor and Carmel?" says Egyptian armies passed both "on the coastal road". Tabor stands at the east end of the Jezreel valley, not on the coastal road. The idea is weak as geography; fix or withdraw.
    - Both boxes say "I know of no commentator who argues this". That is unverifiable and should not be printed as a fact. Say "this is Claude's reading" without the claim.

26. **Minor. Unsourced generalities in the views blocks.** "Some futurist writers read the Philistines as a type of modern Gaza" (ch 47 F), "Christian readers have often taken Edom as a name for the enemies of God's people" (ch 49 X), "Jewish tradition often reads Edom as the name for Rome" (ch 49 J; true, but cite a source such as Genesis Rabbah 65 or Sanhedrin), and the ch 46 X line. Give a named source or cut.

## Checked and found sound (no action)

- **Isaiah 15-16 against Jeremiah 48:** 48:5, 29-31, 33-34, 36-38 match the site Plain English Translation in every line where the Hebrew is the same. Where they differ, the Hebrew differs.
- **Isaiah 24:17-18 against Jeremiah 48:43-44:** matches.
- **Numbers 21:28-29 against Jeremiah 48:45-46:** the Hebrew differs and the Plain English Translation follows it; the note quotes the Numbers Plain English Translation exactly.
- **Jeremiah 49:22 against 48:40-41:** the same words.
- **Verified claims:**
  - Ashkelon in Kislev 604 BC, with Stager 1996 (BAR 22:1, pp. 56-69, 76-77).
  - Herodotus 2.158-159 and 4.42 (Neco), 2.84 (doctors), 3.8 (Arab haircut).
  - The Chronicle's year-6 raid on the Arabs.
  - The Tell el-'Umeiri seal (found 1984, "Milkom'ur servant of Ba'alyish'a", c. 600 BC, Herr, *BA* 48). The identification with Baalis is probable, not certain; the note could say "probably".
  - Baruch 3:22-23 and the NRSV's "Apis" at 46:15.
  - Ketubot 4:4, Sanhedrin 39b, and Radak at 48:10.
  - Josephus *Ant.* 10.181 (Ammon and Moab in the 23rd year).
- **Greek claims:** all those in the variants (Apis, "Greek sword", no verse 26, `Akkaron`, `onos agrios`, `semeia`, "Anakim", `basilissa tes aules`, no 48:45-47, no 49:6) are correct against Swete. The ch 46 and 47 Greek order and the Elam location (25:14-19; heading at Swete 26:1) are right.
- **Missing-material check:** Greek has 46:27-28 and lacks 30:10-11.

## Other checks

- **Audience/settings:** present for every section; specific. The 46:13-26 and 47:1-7 cards are good. Only 48 has a single card for 47 verses (acceptable: one oracle).
- **Traditions cards:** none, and the part does not need one. If the lead wants one, the Edom and Rome identification (Jewish) with the church's use of "Edom" is the only real candidate, and it is an interpretive split, not a church conflict.
- **Terms:** "Terror all around", "Daughter Egypt", "Sea of Reeds", "the Lord GOD of Armies", "in the last days" and `hoy` as "Alas" (funeral lament) follow terms.json. Check that the first-use note for `hoy` in the book is made elsewhere in Jeremiah.
- **works.json naming:** "Baruch" is named "a book some churches count as Scripture" in note 49:7. That is acceptable; confirm the works.json name is "Baruch".
- **Hazor topic:** the contribution is a different place from the existing northern Hazor topic (lead and sources are about Tel Hazor). Keep it as a clearly headed disambiguation section.

## Fixes applied

1. Accepted. 46:27-28 now has the wording of 30:10-11 (As for you / do not be shattered / See, I am the one who will save you / your children / land of their captivity / rest undisturbed / scare / finish off / fairly / not simply let you off), differing only at the real Hebrew differences; note 46:27 lists them; gloss and note anchors updated.
2. Partly accepted. 49 is the model (lead decision), so 50:44-45 must follow it. In 49:19 only "whomever I choose" changed to "whoever is chosen, him I will set over it" (closer to the Hebrew); the note no longer claims the Plain English Translation is already identical and states the true differences (him/them, Edom/Teman against Babylon/Chaldeans). 50:44-45 still has to be conformed in part 50-52.
3. Accepted. 49:18 is the model; "the LORD says" became "the LORD declares" as the lead decided; the note names the two Hebrew differences (God named in 50:40; amar against ne'um). 50:40 must be conformed in part 50-52 ("their neighbor towns", "no human being").
4. Accepted. "Ziegler not checked" removed from every Greek label; the witnesses read (Leningrad, Swete's Vaticanus, Abegg-Bowley-Cook 2QJer, Radak on Sefaria) are stated once on the chapter 46 page; "the transcription I read" and "I rely on the scroll" replaced by "2QJer does not preserve this verse" and plain statements; the ch 46 and 47 J lines rewritten.
5. Accepted. Read Radak on Sefaria at 46:2, 46:13 and 47:2 and now state only what he says (Carchemish then Nebuchadnezzar's later attack on Egypt; the waters are the Chaldean army). Rashi's page for 46:2 has no comment and the Targum was not read, so those claims are deleted. Unverifiable Jewish generalities removed.
6. Accepted. Note 48:30 now says 2QJer reads "she did" for "they did". The coverage is corrected to 46:27-28, 47:1-7, 48:7, 48:25-39, 48:43-45 and 49:10 (checked with dss.py).
7. Accepted. The "about 100 BC" date is deleted; the Jones thought in note 48:31 is labeled as this site's own.
8. Accepted. Note 46:2 now cites redford-egypt, not kitchen-tip.
9. Accepted. New note at 46:13 on BM 33041 (thirty-seventh year, Amasis, broken, no conquest reported), sourced to ANET p. 308; the 46:13-26 "readers" line is softened to match.
10. Accepted. 46:4 recast (Harness / Up on them / Station yourselves in helmets / the scale armor).
11. Accepted. 46:5 "do not turn back" (lo hifnu, as in 47:3); 46:6 now jussive ("Let the fast not run away").
12. Accepted. New Apis note at 46:15; the variant now says the noun is plural with a singular verb.
13. Accepted. "a pair of" dropped; note and variant say plainly that "wings" is a guess from context and wrongly claimed to match the pointing before.
14. Accepted. "every drop" dropped at 49:12.
15. Accepted. "laughingstock" for sechoq in 48:26, 27 and 39; gloss and note updated.
16. Accepted. Note 48:33 explains why "stopped" differs from Isaiah 16:10 "silenced".
17. Accepted. Variant 48:4 now states the Ketiv/Qere difference correctly (vav against yod).
18. Partly accepted. 49:25 reworded ("How is the city of praise not deserted") and the variant rewritten. Declined the Ketiv tehillah/tehillat remark: the Ketiv/Qere data for 49:25 show no difference in the word.
19. Accepted, with additions. New variants at 46:11 (Ketiv hirbeti against Qere), 46:22 (Greek "in sand"), 49:1 (Gilead, and Milcom/malkam vocalization), 49:13 and 49:22 (Bozrah), 49:19 (young men), 49:21 (cry not heard); each checked in Swete.
20. Accepted. The Greek line of the 46:25 variant keeps its own construction.
21. Accepted. Note 49:9 says the order is reversed and lists Obadiah's differences.
22. Accepted. Note 48:1 uses 594/593 BC and explains the Jehoiakim/Zedekiah problem in 27:1.
23. Accepted. Note 48:43 states that the date of Isaiah 24-27 and the direction of borrowing are debated.
24. Accepted. The Mesha paragraph is labeled a comparison of this site and the Jeremiah-says-vessels claim removed.
25. Accepted. Tabor/Carmel box now says it is Claude's weak suggestion and notes Tabor is off the road; "I know of no commentator" removed from both boxes.
26. Accepted. Unsourced generalities removed or replaced (ch 46 X, 47 F, 49 X, 49 J); the Edom-is-Rome line deleted because Genesis Rabbah 65 on Sefaria does not say it in words I could verify.
