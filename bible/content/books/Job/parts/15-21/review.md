# Hostile review: Job 15–21 (part 15-21)

Reviewer's verdict. This is a strong part. The Plain English Translation follows the Hebrew closely verse by verse. It keeps the poetry parallel and avoids padding, and I found no close copying of the NIV or ESV beyond phrases that cannot be avoided ("I know that my redeemer lives"). The hard words are flagged honestly (minlam, qintse, tahkeru, 'atinav, shaddun, mibbesari), and nearly every factual claim I checked holds up: the NETS asterisks, the 11QtgJob column ranges, 1 Clement 26:3, the Office of the Dead lessons, the BCP burial sentences, Calvin, Institutes 2.10.19, Luther 1545, Bava Batra 15b/16a, Shabbat 115a, Maimonides, Guide 3.23, and the Babylonian Theodicy and Amenemope parallels. `build.js --check Job/15-21` passes with 0 errors (the single warning is on book.json, not this part). The term choice for go'el ("my redeemer", lowercase, with the "family rescuer" gloss) is sound. It matches content/terms.json, which this writer added, and Ruth's "family redeemer". The brief's "kinsman-redeemer" was out of date, and the writer was right to follow Ruth. The weak spot is the most important passage. The four readings of 19:25–27 are sound in outline, but they name scholars inconsistently across the note, the chapter page, the settings card and the traditions card. Clines in particular sits in three incompatible places. Jerome is misquoted. The Jewish reading is thin and unsourced. The 19:28 variant chooses "in him" against the Leningrad Codex on reasonable grounds, but it overstates the case and names its witnesses only in part. None of this is critical. All of it should be fixed before publication.

Counts: critical 0, major 4, minor 17.

## Findings

### 1. Major: the scholars behind the four readings of 19:25–27 are named inconsistently
Location: notes.json 19:25 "Four ways to read 19:25–27"; chapters.json ch. 19 `views.C`, `deep` "Four readings, in their strongest form", `settings[0].views`, `traditions[0]` (Evangelical).

- **Clines** appears in three incompatible places:
  - The 19:25 note puts him under reading 2, "The redeemer is God, who will clear Job's name while he is still alive".
  - The C lens says he holds that the go'el is "Job's own cry and testimony". That is his actual position (WBC Job 1–20, on 16:19 and 19:25), and it matches 16:19 in this part.
  - The traditions card lists him as an Evangelical voice. He is a critical scholar at Sheffield and does not belong in an "Evangelical" row.
- **Andersen and Hartley** are listed under reading 4 ("God as redeemer, beyond death, without explaining how") in the note and the deep section. The 19:1–29 settings card instead lists them under "Hope of resurrection", and the Evangelical row has them holding that Job sees God after death, "which the New Testament reveals as bodily resurrection".
- **Dhorme** is put under reading 4 (beyond death). As I recall his commentary, he takes "from my flesh" as "in my flesh, alive" and places the vision before death, so he belongs with reading 2 for timing, though with God as go'el. Please check Dhorme's comment on 19:26 before you keep him in reading 4.
- **Seow** is under reading 4 in the deep section and under "God" in the C lens, but he is not in the note. Again, check his actual position (Seow, Job 1–21, 2013).

The four readings mix two separate questions: who the go'el is (God, a heavenly advocate, Job's cry, Christ) and when the vindication comes (in life, after death, or at the resurrection). Clines answers "Job's cry" and "in life", which is why he fits no row. Fix: add a short line saying the readings cross two questions. Then give each scholar one consistent placement everywhere, and either add Clines's "Job's cry personified" as a fifth position or note it inside reading 3. The settings card's `views` gives only two of the four readings; give all four, or point to the chapter page. Reading 1 says "many conservative scholars today" without naming one. Name at least one modern defender of the resurrection reading, since that is the reading's strongest form today.

### 2. Major: Jerome is misquoted
Location: chapters.json ch. 19 `views.X`. It says Jerome wrote "that no one before Christ spoke as openly about the resurrection as Job does here". Jerome, *Against John of Jerusalem* 30, says the reverse comparison: "No one since the days of Christ speaks so openly concerning the resurrection as he did before Christ" (NPNF2 6; Latin *nullus tam aperte post Christum de resurrectione loquitur, quam iste ante Christum*). His claim is far stronger: Job is clearer than anyone even *after* Christ. Fix: correct the paraphrase and cite `jerome-contra-ioannem` (the key is defined in sources.json but cited nowhere I can see).

### 3. Major: the 19:28 variant, "in him" against the Leningrad Codex, is overstated and its witnesses are incomplete
Location: variants.json 19:28.

The choice itself is defensible. L reads נִמְצָא־בִי ("in me"). Many Kennicott/de Rossi manuscripts read בּוֹ ("in him"), and the Vulgate (*contra eum*), the Greek and, I believe, the Peshitta agree. Most modern versions follow "in him". The problems are these:
- The `why` says "'In me' can make sense only if Job steps out of the quotation". That is too strong. Hebrew often slides from quoted speech into the reporter's own point of view, and several commentators keep the Masoretic text as Job reporting the friends' words from his own side ("the root of the matter is found in me", that is, the trouble is in me). The Masoretic Text is also the harder reading, and the versions may be smoothing it. Say so, and say which modern versions or commentators keep "in me".
- Witnesses: name the Syriac (Peshitta) if you checked it, and say what the rabbinic Targum reads. The brief requires saying whether each witness was checked. If you did not check one, say so.
- The Greek: NETS marks only *part* of 19:28 as Origen's asterisked supplement from Theodotion. The entry calls the "root of the matter... in him" line "Theodotion's line". Check which half carries the asterisk. If the "in him" half is Old Greek, the witness is the Old Greek and the label is wrong.
- The plain text of the "in me" reading ("The cause of it all is in me,") would read as nonsense to a reader who switches readings. Add a few words to the `p` or `b` explaining how the "in me" reading is understood.

### 4. Major: the Jewish reading of 19:25–27 is thin and unsourced
Location: chapters.json ch. 19 `views.J`; deep "Four readings"; the "Hope of vindication" readings.

Bava Batra 16a is cited correctly. The rest is general: "Jewish tradition has generally read the go'el as God", "this chapter was not used in Jewish liturgy as a proof of resurrection" (unsourced) and "Medieval Jewish commentators mostly explain the verse within Job's lawsuit". On the passage the brief singles out for fairness, name the commentators and what they say. That means at least Saadia, Rashi, Ibn Ezra and/or Ramban on 19:25–26, and the rabbinic Targum's rendering of 19:25–26 (it is a major Jewish witness and is absent from both the variants and the notes). Either source the liturgy claim or drop it. The deep section's "many Jewish commentators" under reading 2 also needs at least one name besides Gordis.

### 5. Minor: the traditions card on 19:25–27 is not a real conflict between traditions
Location: chapters.json ch. 19 `traditions[0]`. Five traditions answer "Yes", and the sixth, "Evangelical", says "Divided". The real disagreement is between confessional and liturgical use and modern exegesis, which runs across all the traditions (the Catholic and Anglican rows themselves concede it). STYLE.md says to use the card "only where the answers really conflict". Fix: turn the question into one where the traditions really do differ, or move the material into `views` and `deep`. If you keep it, drop Clines from the Evangelical row (see finding 1). Also correct the Westminster citation: Job 19:26–27 is a proof text for WCF 32.2, not for 32.3.

### 6. Minor: tsalmavet is rendered differently from the rest of Job
Location: plain.txt 16:16 "a death-dark shadow". Every other part renders tsalmavet "deep shadow" (3:5; 10:21–22; 12:22; 34:22; 38:17), and 22-31 has "deep darkness" or "deep dark". The note at 16:16 explains the choice, but a reader comparing verses will see two words for one. Fix: use "deep shadow" and keep the note on "shadow of death". It may be worth a terms.json entry so the 22-31 writer aligns too.

### 7. Minor: 16:3 note says the Old Greek "lacked this verse"
Location: notes.json 16:3 "Wind thrown back". NETS asterisks only part of 16:3, and the chapter page itself says "parts of 16:3". Fix: write "lacked part of this verse".

### 8. Minor: 21:30 note calls the Greek "closer to the Plain English Translation" without saying it is Theodotion
Location: notes.json 21:30. NETS asterisks all of 21:28–33, so 21:30 is Theodotion's, not the Old Greek's. Your own 21:32 note says the Old Greek lacked 21:28–33. Fix: write "Theodotion's Greek (supplied by Origen)".

### 9. Minor: the Ketiv/Qere at 19:29 is described backward
Location: notes.json 19:29. It says "The last word is written <i>shaddun</i> (Ketiv <i>shaddin</i>)". The written consonants (Ketiv) are שדין, shaddin, and the read form (Qere) is שַׁדּוּן, shaddun (texts/auto/Job.json). Fix: write "read (Qere) <i>shaddun</i>; written (Ketiv) <i>shaddin</i>".

### 10. Minor: the 17:3 note puts the Greek's stolen goods in 17:3
Location: notes.json 17:3. In Rahlfs the line about strangers stealing Job's goods is in 17:2, and 17:3 continues it. Fix: write "the Greek of 17:2–3".

### 11. Minor: a cross-reference misquotes this part's own Plain English Translation
Location: notes.json 16:13. It says Job's kidneys "will 'waste away' with longing in 19:27", but the Plain English Translation of 19:27 reads "My inmost being is spent with longing". Fix: quote the Plain English Translation, or drop the quotation marks.

### 12. Minor: the 16:4 preview misstates the roots
Location: notes.json 16:4 `p`: "The head-shake was a gesture of scorn. The same root in 16:5 and 2:11 means sympathy." The head-shake in 16:4 is *heni'a* (נוע). The word in 16:5 and 2:11 is *nid/nud* (נוד), a different root, as the body itself says ("a related word"). Fix: write "A similar word in 16:5 and 2:11 means sympathy."

### 13. Minor: two problems in the 19:25 notes
- "At last": Deuteronomy 13:9 has *ba'acharonah*, not *acharon*, so it is a weak proof of adverbial *acharon*. Use a closer example or add "compare".
- "On the dust": the body cites Psalm 35:11, but the `r` list has Psalm 12:5 instead. Make them match.

### 14. Minor: the kinsman-redeemer topic contradicts the reason given for the rendering
Location: topics.json `kinsman-redeemer`, first section: "Job names the one relative who has not failed him". The 19:25 note defends "redeemer" over "family redeemer" because the latter "would decide that the go'el is a relative". The topic page should not decide it either. Fix: "Job names a go'el, the role of the relative who rescues his kin, who has not failed him..." The `uncommon` label for the heavenly-advocate view also undersells it. It is a major scholarly position (Mowinckel, Pope, Habel, Newsom), even if few lay readers know it.

### 15. Minor: the rabbinic Targum and the Peshitta are absent from the 19:25–26 variants
Location: variants.json 19:25 and 19:26. The entries cover the Masoretic Text, the Greek, the Vulgate and the 11QtgJob gap, but not the rabbinic Targum or the Syriac, both of which interpret these lines. Add them, or state that they were not checked (see also findings 3 and 4).

### 16. Minor: 15:23 variant overstates modern support for the Greek
Location: variants.json 15:23. "Followed by many modern translations" is too broad. Some follow the vulture reading (NEB/REB, and the NIV in part), but many keep the Masoretic "Where is it?". Fix: name the ones that follow it.

### 17. Minor: 20:9 translation drifts
Location: plain.txt 20:9 "his home will look for him no more". The Hebrew is "his place will not *see* him again" (*teshurennu*, "behold"), as the chapter summary itself says ("his place will not see him again"). Fix: write "his place will not set eyes on him again" or similar.

### 18. Minor: settings state debated settings as fact
- ch. 15 `to`: "Job, sitting in the ash heap outside his town". The Hebrew says only "among the ashes" (2:8). "Outside the city" comes from the Greek of 2:8 and from tradition. Fix: write "on the ash heap (outside the town, in the Greek and in tradition)".
- ch. 20 `readers`: "For readers in Persian-period Judah". The book's date is debated (book.json gives the 600s to the 300s). Hedge it: "If the book was read in Persian-period Judah...".

### 19. Minor: 20:29 and 27:13 are said to be "almost word for word" but are worded differently in the Plain English Translation
Location: notes.json 20:29 and the C lens of ch. 20. The Plains read "This is the share God gives a wicked person" (20:29) and "This is the share a wicked man gets from God" (27:13). The Hebrew first lines are nearly identical (*zeh cheleq-adam rasha' me'im Elohim/El*). Fix: coordinate with 22-31 so the first lines match.

### 20. Minor: other parts quote this part's verses in wording this Plain English Translation does not use (consistency)
- 22-31 notes.json: "miserable comforters" (16:2). The Plain English Translation has "comforters who bring trouble". The build should warn on this.
- 32-37 notes.json: Job's "windy words" (16:3). The Plain English Translation has "words of wind".
- book.json outline, 16:1–22: "miserable comforters". That is KJV/NIV wording, not the site's.
- 08-14 chapters.json: the go'el "will stand on the earth at the last". The Plain English Translation has "at last he will stand up on the dust". Not in quotation marks, but worth aligning.

These are other writers' files. Pass them on to those writers.

### 21. Minor: small accuracy points
- 19:3 note: the transliteration is *tahkeru* in `orig` and *tehkeru* in the body. Pick one.
- 15:29 note: the Vulgate's *radicem* is said to support "holdings" "only loosely". Since "root" supports a plant reading, it really supports the alternative proposal. Reword.
- 16:16 note: it says tsalmavet appears "ten times in Job... and in Psalm 23:4", which implies Psalm 23:4 is its only other use. Write "and elsewhere, most famously Psalm 23:4".

## What I checked and how
- Every verse of 15–21 against `node tools/literal.js` and the Hebrew of texts/orig. Apart from finding 17, I found no omissions, additions or reversals of who does what. The Plain English Translation follows the Masoretic Text everywhere except 19:28 ("in him") and the Qere readings (15:15, 20:11, 21:13), and the variants say so.
- texts/auto/Job.json for 15–21: every meaningful Ketiv/Qere is handled (15:15 variant; 20:11, 21:13 and 19:29 in notes). The rest are spelling.
- Old Greek asterisks: checked against the NETS Iob PDF (septuaginta.uni-goettingen.de). The writer's claims for 16:3 (partial; see finding 7), 17:16, 19:28 (partial), 20:3, 9, 11–13, 21:15, 19, 21, 23 and 28–33 match NETS.
- Checked by web or by recall of the primary text: Jerome, *Against John* 30 (NPNF2 6, misquoted; see finding 2); Calvin, Institutes 2.10.19 (correct); 1 Clement 26:3; the Office of the Dead Matins lessons (17:1–3, 11–15 and 19:20–27); the responsory *Credo quod redemptor*; the BCP 1549/1662 burial sentences; Handel's monument; Luther 1545; Bava Batra 15b/16a; Berakhot 7a; Shabbat 115a; Avot 4:11; Maimonides, Guide 3.23; 11QtgJob columns (17:14–18:4; 19:11–19; 19:29–20:6; 21:2–10; 21:20–27).
- Not verified (writer should confirm): Dhorme's and Seow's exact positions on 19:25–27 (finding 1); which half of 19:28 is asterisked (finding 3); the Weber–Gryson wording of 19:25–26 (it looks right, but I did not see the edition).

## Fixes applied

All 21 findings were accepted. None was rejected outright, though 19 and 20 were handled within this part instead of by editing other parts.

1. **Scholar placements.** Each scholar now has one placement everywhere: the 19:25 note, the C lens, the deep section, settings[0] and the traditions card. A line in the note, the C lens and the deep section says the readings answer two questions: who the go'el is, and when Job is cleared. The placements follow the classification in the JHS survey of 19:25–27 (jhsonline.org) where it gives one.
   - Reading 1 (resurrection and Christ): the fathers, Aquinas, Calvin, and Andersen, named as the modern defender.
   - Reading 2 (God, within life): Gordis, Dhorme (who takes "from my flesh" as "through my flesh", before death), Rashi and Ibn Ezra.
   - Reading 3 (heavenly advocate): Mowinckel, with Pope and Habel placing the vindication after death.
   - Reading 4 (new): Clines, "Job's own cry". The old reading 4 ("God beyond death, without saying how") had no consistent holders and was dropped.
   - Hartley and Seow are no longer placed, because I could not verify their positions. Clines is out of every "Evangelical" row.
   - settings[0] now gives all four readings and points to the chapter page.
2. **Jerome.** The quote is corrected to "no one since Christ speaks as openly about the resurrection as Job did before Christ" (*Against John of Jerusalem* 30), and jerome-contra-ioannem is now cited, in the s list of the ch. 19 settings card for 19:23–27, whose `readers` field mentions Jerome. Chapter views have no source field.
3. **19:28.** The `why` is softened. "In me" is the harder reading, Hebrew can slide from a quotation into the speaker's own view, and the KJV keeps it. `p` now says how the "in me" reading is understood. The "in him" witnesses now name Kennicott and de Rossi, and the Greek is described as "the half of the verse that NETS marks as supplied by Origen from Theodotion". I checked the half-asterisk earlier: it is the "root of the matter" line. The entry also adds the rabbinic Targum ("the root of the matter we will find in him", checked in the Aramaic) and says the Peshitta was not checked.
4. **Jewish reading.** views.J now names the following, all checked on Sefaria. The liturgy claim is dropped.
   - The rabbinic Targum: "afterward his redemption will arise upon the dust", and "from my flesh I will see God again".
   - Rashi: the redeemer is God, who avenges Job and remains last, and Job sees God's judgments in his afflicted body.
   - Ibn Ezra: 19:26 is about the sores God renews.
   - Metzudat David: God, the eternal "last", and a seeing more certain than bodily sight.

   The deep section's reading 2 names Rashi and Ibn Ezra. The new key metzudat-david-job is in this part's sources.json. Saadia and Ramban were not checked, so they are not named.
5. **Traditions card.** It is replaced, keeping top "resurrection". The new question is whether anything of Job lives on between death and the resurrection (19:26).
   - Yes: Catholic (ccc), Orthodox (ware-orthodox), Reformed (Westminster 32.1–2, with Job 19:26–27 cited as a proof text for 32.2).
   - No: Adventist (sda-beliefs, death as unconscious sleep) and Jehovah's Witnesses (jw-insight).
6. **tsalmavet.** The Plain English Translation of 16:16 is now "deep shadow lies on my eyelids", and the note keeps "shadow of death". I added a terms.json entry (tsalmavet = "deep shadow") so that 22-31 can align. 22-31's "deep darkness"/"deep dark" is left to that writer.
7. **16:3.** The note now says "lacked part of this verse".
8. **21:30.** The note now says "Theodotion's Greek, which Origen supplied here".
9. **19:29.** The note now says "read (Qere) shaddun and written (Ketiv) shaddin".
10. **17:3.** The note now says "The Greek of 17:2–3".
11. **16:13.** The note now quotes the Plain English Translation: "inmost being (his kidneys) is spent with longing in 19:27".
12. **16:4 p.** Now reads "A similar word in 16:5 and 2:11".
13. **19:25 "At last".** Deuteronomy 13:9 is now offered as "compare the related ba'acharonah". **"On the dust":** the r list now has Psalm 35:11 in place of 12:5.
14. **Kinsman-redeemer topic.** The topic now reads "Job names a go'el, the role of the relative who rescues his kin". The heavenly-advocate view is moved into the section as "a major group of modern scholars (Mowinckel, Pope, Habel)". `uncommon` now holds Clines's "Job's own cry". Newsom is not named, because I have not verified her position on 19:25.
15. **19:25–26 variants.** The rabbinic Targum is added: a reading row at 19:25, and the word "again" at 19:26 in `b`. Both say the Peshitta was not checked.
16. **15:23.** The entry now says "followed by the NEB and REB, and in part by the NIV".
17. **20:9.** The Plain English Translation now reads "his place will see him no more".
18. **Settings.**
   - Ch. 15 `to`: "sitting among the ashes (2:8; outside the town in the Greek and in later tradition)".
   - Ch. 20 `readers`: "If the book was read in Persian-period Judah (its date is debated)...".
19. **20:29 / 27:13.** Instead of editing 22-31's Plain English Translation, the claim is softened. The note now says the first line "comes back in nearly the same Hebrew in 27:13". The ch. 20 C lens is corrected too: 27:13–23 *opens* with that line; the old text said it "ends" with it.
20. **Other writers' quotes.** I left these to those writers (22-31, 32-37, the book.json owner 01-07, and 08-14), as the coordinator decided. Nothing was edited outside this part.
21. **Small points.**
   - 19:3: now *tahkeru* in both places, matching the pointing תַּהְכְּרוּ.
   - 15:29: the note now says *radicem* "points rather toward a plant picture".
   - 16:16: the note now says "and elsewhere, most famously in Psalm 23:4".

After the fixes, `node tools/build.js --check Job/15-21` gives 0 errors and 0 warnings. The part has 186 verses, 132 notes, 8 variants, 38 glosses, 7 chapter pages and 14 topic contributions.
