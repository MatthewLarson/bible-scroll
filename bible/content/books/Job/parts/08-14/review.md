# Hostile review: Job 8–14 (part 08-14)

Reviewer read STYLE.md, PLAN.md, tools/agent-reviewer.md and tools/brief-job.md. I checked every verse of plain.txt against `node tools/literal.js Job 8–14` and texts/orig, all 135 notes, the 10 variants, 55 glosses, 7 chapter pages, 15 topic contributions, the texts/auto Ketiv/Qere list (9:13, 9:30, 10:20, 13:15, 14:5), and cross-part quotations against the other five parts' plain.txt and content/terms.json. `node tools/build.js --check Job/08-14`: 0 errors, 4 warnings (traditions cards need `top`; one of the four is in book.json and belongs to the 01-07 writer). Checked on the web: Bava Batra 16a (halakhah.com Soncino text) and the Rahlfs Greek of chapter 14 (blueletterbible.org, sacred-texts.com).

## Verdict

This is a strong part. The translation is faithful and close to the Hebrew. It keeps the parallel lines, avoids padding, and I found no added or missing clauses. It does not lean on the NIV or ESV, apart from two places where it is close to the NRSV/RSV. The notes are dense and mostly accurate, and they are honest about the hard Hebrew (8:14, 8:17, 11:6, 12:5, 12:6, 9:35). The rabbinic, patristic and confessional citations I checked are almost all real and correctly placed.

**13:15.** Following the Ketiv is a sound choice and is well argued. The reasons given are the harder reading, the adversative *akh*, and the run of "hope is gone" texts. The Qere is presented fairly, and the reader can switch. What needs fixing is around the choice: some witnesses are missing, the Qere is mislabeled, the same explanation appears four times, the chapter title quotes the reading the Plain rejects, and the wording is close to the NRSV.

**9:33.** Keeping the MT is defensible, but the case for it is not argued honestly. The variant leaves out the strongest argument for *lu*: the construction *lo' yesh* is nearly unique, while *lu yesh* is idiomatic. It also never says that several of the commentaries it cites read "if only". It overstates the MT's support as well.

**Other serious problems.** One Talmud citation is put on the wrong verse. The Old Greek of 14:14 is presented as a question when it reads as a statement, which hides a difference that matters for the resurrection debate. The Old Greek minuses and the Qumran evidence are never mentioned, though the brief requires both. The book's key term *tam* is rendered against terms.json at the very verses where the notes say its echo matters most.

Counts: 0 critical, 5 major, 16 minor.

## Findings

### 1. Major: Rava's "turn the bowl upside down" is attached to the wrong verse (notes.json 9:22)
The 9:22 note says: "Rava in the Talmud said that here Job 'tried to turn the bowl upside down'... Abaye answered that Job spoke only of the Accuser (Bava Batra 16a)." In Bava Batra 16a, Rava's remark and Abaye's reply comment on **9:24** ("The earth is given into the hand of the wicked..."). Abaye's point is that "the wicked one" of 9:24 is the Satan, and that only makes sense of 9:24. I checked the Soncino text: "Raba said: Job sought to turn the dish upside down", citing Job 9:24. The part already gets this right in the 9:24 note, the chapter 9 J lens and the `satan` topic contribution. The 9:22 note therefore duplicates them and contradicts them.
**Fix:** Delete the Talmud sentences from the 9:22 note. Replace them with a cross-reference ("see 9:24") or with a different Jewish voice on 9:22, for example Rashi or Ibn Ezra.

### 2. Major: The 9:33 variant ("no umpire" or "if only there were") leaves out the strongest evidence and understates the other side (variants.json 9:33; notes 9:33; topics `intercession`)
The writer's reasons for following the MT *lo'* are that it is "well attested", that it "makes good sense", and that "both readings say the same thing". Three problems:
- **Grammar is not mentioned.** Biblical Hebrew denies existence with *'ein* (*'ein yesh*). The construction *lo' yesh* is all but unique to this verse. By contrast, *lu yesh*, "if only there were", is an attested idiom: *lu yesh-cherev beyadi* (Numbers 22:29). This is the main reason many commentators read לוּ, and the reader needs it to weigh the variant.
- **"Well attested" overstates the case.** On one side stand the Masoretic tradition, followed by the Vulgate. On the other stand the Septuagint (εἴθε ἦν ὁ μεσίτης ἡμῶν), the Peshitta and some Hebrew manuscripts (BHS: "pc Mss G S"). That is the oldest translation evidence against the received text. The `intercession` contribution's `uncommon` line, "only the Greek and a few other witnesses", plays this down further.
- **Scholarly opinion is not reported.** The entry cites Clines and Driver–Gray but does not say which reading they prefer. As I recall, Clines (WBC) and Habel, along with Dhorme and Pope, translate "if only there were an arbiter". The writer should verify each of these. The readers in `w` also mislabel the split as MT/NRSV/ESV/NJPS against "NIV". If most of the critical commentaries the part relies on emend, the entry must say so, by name.
The Plain's choice can stand. The MT is the harder reading in sense, and 9:34–35 follows well from a flat statement. But the `why` should read as a real weighing. **Fix:** Add the *'ein*/*lo' yesh*/*lu yesh* point with Numbers 22:29, and name which cited commentators follow which reading. Change "well attested" to "the received Hebrew; the Greek, the Syriac and some Hebrew manuscripts read *lu*". Correct the `intercession` "uncommon" sentence to match. Consider stating plainly that the wish reading is the majority view among modern commentators, if verification bears that out.

### 3. Major: The Old Greek of 14:14 is presented as a question; it reads as a statement (notes.json 14:14 "If a man dies, will he live?")
The note gives the Greek as "For if a man dies, will he live, having completed the days of his life? I will wait until I come to be again." The Greek is ἐὰν γὰρ ἀποθάνῃ ἄνθρωπος, ζήσεται συντελέσας ἡμέρας τοῦ βίου αὐτοῦ· ὑπομενῶ ἕως ἂν πάλιν γένωμαι. It has no interrogative particle. The natural reading is a conditional statement: "If a person dies, he will live, after completing the days of his life; I will wait until I exist again." As I recall, NETS renders it so; Brenton punctuates it as a question. The writer should check NETS. This is exactly the kind of Old Greek change the brief asks the writers to flag. The Greek turns Job's doubtful question into an affirmation of life after death, which sits naturally with the Greek ending at 42:17a ("it is written that he will rise again"). Presenting it as a question hides that. **Fix:** Give the Greek as a statement. Note that the translator seems to have read the Hebrew question as an assertion, and that the Greek Job elsewhere strengthens resurrection hope (42:17a; see the 38-42 part). Mention that Brenton punctuates it as a question. Consider making a variants.json entry for 14:14, since this changes the meaning.

### 4. Major: No treatment of the Old Greek minuses or the Qumran witnesses anywhere in 8–14
The brief requires the writers to "note where the Old Greek lacked a passage when it matters" (the asterisked Theodotion lines) and to treat 4QJob as a witness. No note, variant or chapter page in this part mentions Origen's asterisks, Theodotion, 4QJob^a/^b, 4QpaleoJob^c or 11QtgJob. PROGRESS.md says the writer looked at 4QJob-b and 4QpaleoJob-c "only via a translation site". The site does not tell the reader even that much, and it does not say that 11QtgJob does not cover these chapters. Many of the Greek readings quoted in the notes (for example 9:9, 11:2, 11:17, 12:18) appear without saying whether the line is Old Greek or an asterisked filler. **Fix:** Check Ziegler's Göttingen Job (key `ziegler-job` already exists) or Gentry's *Asterisked Materials in the Greek Job* for asterisked lines in 8–14, and note any that matter. Add one short paragraph, on the chapter 9 or chapter 12 page, saying which Qumran fragments cover these chapters, that they show no meaning differences, and that 11QtgJob begins later (17:14). State plainly which witnesses were checked directly and which were not.

### 5. Major: *tam* is rendered "blameless" in 9:20–22, against terms.json and against the echo the notes emphasize (plain.txt 9:20–22; notes 8:20, 9:21)
terms.json: "tam / tummah (of a person, Job 1:1, 8; 2:3, 9...) → wholehearted / integrity". The part uses "wholehearted" at 8:20 and 12:4 but "blameless" at 9:20, 9:21 and 9:22. The 8:20 note admits this ("In the courtroom language of chapter 9 the Plain renders *tam* 'blameless'"). The 9:21 note then builds on the echo of God's word for Job (1:8; 2:3), an echo an English reader can no longer see. Job's *tam ani* is the book's key repetition, and the shared term exists for exactly this. **Fix:** Render *tam* "wholehearted" in 9:20–22, for example "Say I am wholehearted: it would twist me...", "I am wholehearted; I no longer know myself", "wholehearted or wicked, he finishes them off". The legal sense can go in the note. If the writer keeps "blameless", the terms.json entry must be amended and the other parts told.

### 6. Minor: 13:15. The Ketiv choice is sound, but the entry around it needs repair (variants.json 13:15; notes 13:15 (two); chapters 13 title, readings, deep; topics `job`, `ketiv-qere`)
I agree with the choice, and the reasons are well put: the harder reading, *akh* "but/still" opening the second line, and 6:11, 14:19, 17:15, 19:10. The Mishnah citation is accurate (Sotah 5:5, R. Joshua ben Hyrcanus, settled by 27:5), as are the Vulgate (*etiam si occiderit me in ipso sperabo*) and the Septuagint (ἐάν με χειρώσηται ὁ δυνάστης ἐπεὶ καὶ ἦρκται). RSV, NRSV and NJPS do follow the Ketiv. Problems:
- **Witnesses are incomplete.** The brief names the Targum. The rabbinic Targum of Job, as I recall, renders the line as "before him I will pray", which supports the Qere. The Peshitta and the Hebrew manuscripts that have לו in the text (Kennicott/de Rossi) are not listed either. Check these and add them, or say they were not checked.
- **The Qere is mislabeled.** The chapter 13 deep section says the Qere "is the reading of the Masoretes". Both readings are Masoretic: the Masoretes preserved the Ketiv in the text and the Qere in the margin. Say "the reading tradition the Masoretes marked to be read aloud".
- **The same point is explained four times.** There is a `word var` note, a `views` note, the variant's `b`, the chapter deep section, and the topic contributions. STYLE.md says "Never explain the same point twice". Keep the variant and one views note. Cut the `word var` note, which STYLE.md says to put in variants.json anyway, and shorten the deep section to the arguments without repeating the lexical explanation.
- **The chapter title "Though He Slay Me" quotes the KJV/Qere reading the Plain rejects.** Either flag it as the KJV phrase ("'Though He Slay Me'?") or choose a title from the Plain.
- **Drift.** "Look, he will kill me. I have no hope." is nearly word for word the NRSV ("See, he will kill me; I have no hope"). Much of this is forced by the Hebrew, but log it in the drift audit and consider "He will kill me, I know; I have no hope left" or similar.
- **Mismatched quotation.** The variant quotes 27:5 as "Until I die I will not put away my integrity". The site's Plain of 27:5 is "Until the day I die I will not set my integrity aside." Use the site wording.
- **Unchecked attributions.** "Most critical commentators (Clines, Habel, Pope)" follow the Ketiv, and "Gordis and others defend" the Qere. These were not verified, and the writer flagged neither. Check Pope's and Gordis's renderings before naming them.

### 7. Minor: The false claim that "deep shadow" is used for *tsalmavet* throughout Job (notes 10:21)
"The Plain uses 'deep shadow' throughout Job, as in 3:5." Other parts render it differently: 16:16 "a death-dark shadow", 24:17 "deep darkness / the deep dark", 28:3 "the deep dark". 34:22 and 38:17 do use "deep shadow". **Fix:** Drop the claim, or coordinate a single rendering across the parts.

### 8. Minor: Cross-part quotations that do not match the site's Plain
- 13:27 note: Elihu "quotes the first two lines in 33:11, 'He clamps my feet in wooden stocks...'". 33:11 Plain: "He clamps my feet in the stocks; / he keeps an eye on every path I take."
- 8:3 note: Job "will say in 19:6 that God 'has twisted me'". 19:6 Plain: "it is God who has bent my case". Say "uses the same verb (*'ivvetani*)" and quote the Plain.
- 8:2 note quotes 6:26 as "as wind"; 6:26 Plain: "a hopeless man's talk is only wind".
- 13:15 variant, 27:5 (see 6).

### 9. Minor: *go'el* is glossed "a family rescuer" (chapters.json 9 deep, "The umpire Job does not have")
terms.json (set by the 15-21 writer): "family redeemer"; "redeemer" when the *go'el* is God or unnamed, "as in Job 19:25, 'my redeemer'". **Fix:** Use "a redeemer (*go'el*)".

### 10. Minor: The Akkadian cognate for *'eveh* (notes 9:26)
"Akkadian *abu*". The usual comparison is Akkadian *apu*, "reed, reed thicket" (see HALOT). Verify, and correct to *apu*.

### 11. Minor: The 10:20 Ketiv is oversimplified (variants.json 10:20)
The Ketiv *yechdal yashit* need not be "let *him* stop". *Yechdal* can take "my days" as its subject ("Are my days not few? Let them cease!"), and only *yashit* is clearly third person. The `why` rejects the Ketiv as a shift to speaking of God in the third person. That holds for at most half of the Ketiv. **Fix:** Mention the "my days" construal.

### 12. Minor: "Four words of wisdom" (notes 12:13)
*Gevurah* is "might, strength", not a wisdom word. Say "four qualities: wisdom, might, counsel and understanding (compare Isaiah 11:2)".

### 13. Minor: A variant is missing at 8:13
The MT has *ken orchot* "so are the paths of". The Greek reads οὕτως... τὰ ἔσχατα, "so is the end of", and many scholars (Dhorme, Clines) read *'acharit* "end", which fits 8:7's *'acharit*. That links to the writer's own 8:7 note on *reshit/'acharit*. **Fix:** Add a short note (`deb`) or a variant.

### 14. Minor: No contribution to the `jobs-friends` topic
The 15-21 writer created `jobs-friends` with Bildad and Zophar in its aliases. This part has both friends' first speeches but contributes nothing to that topic, and the 8:1 and 11:1 introduction notes carry no `top`. **Fix:** Tag 8:1, 11:1 and 8:8 with `top: jobs-friends`, and add a section on Bildad's appeal to tradition and Zophar's appeal to hidden wisdom. The chapter 11 deep section "Three friends, three kinds of certainty" is ready-made material.

### 15. Minor: Traditions cards lack `top`; the chapter 9 card is only loosely tied to the text
Build warnings: chapters 9 traditions[0] and 14 traditions[0], [1] need `top`. Suggested: `intercession` for 9, an original-sin topic for 14[0] (check content/topics; perhaps `adam-and-eve`), and `resurrection` or `sheol` for 14[1]. The chapter 9 card asks whether believers may ask Mary and the saints to intercede. That is a fair question for 1 Timothy 2:5 but is far from Job 9:33, which says nothing about the saints. Consider reframing it to "Does Job's longing for a mediator point to Christ?", which is the actual interpretive split (prophecy, typology, or none), or move it to `intercession` with a sentence explaining the link. (The book.json warning belongs to the 01-07 owner.)

### 16. Minor: Settings state a debated date as settled, and one setting draws on the Greek
- Chapter 11 `readers`: "Readers in Persian-era Judah". The brief says the first readers were "likely after the exile". Write "likely in Persian-era Judah", or give a view.
- Chapter 8 `to`: "sitting in the ash heap outside the town". "Outside the town" comes from the Septuagint plus at 2:8, not the Hebrew. Drop it, or mark it.

### 17. Minor: Closeness to the NRSV/RSV at 9:33
"No one stands between us as umpire, / to put his hand on each of us." The word "umpire" is the RSV/NRSV word in the same position ("There is no umpire between us"). It is defensible, since it is the plain sense of *mokhiach* and is close to the KJV's "daysman", but it should be logged in the drift audit. "Arbiter" is the ESV word, so "referee" or "judge between us" would avoid both.

### 18. Minor: Garbled or misleading wording
- 8:21 note: "a change of one small letter (*vav* for nothing)". The change is from *'ad* (עד) to *'od* (עוד): "by adding one small letter, *vav*".
- 11:19 Plain: "many people will come to win you over". *Chillu fanekha* is "they will seek your favor" (literally "stroke your face"). "Win you over" means persuade. Suggested: "many people will come to court your favor".

### 19. Minor: YHWH in the narrator's headings (notes 12:9)
"The narrator uses it in 38:1 and 40:1–6" leaves out 42:1 and the epilogue (42:7–17). Write "in 38:1, 40:1–6, 42:1 and the epilogue". The 01-07 note words this correctly.

### 20. Minor: 10:15 softens the cry
*'Alelai li* is the cry "woe to me!". "It is the worse for me" flattens it. Suggested: "If I am guilty, woe to me!"

### 21. Minor: 8:20 opens with "No,"
The Hebrew opens with *hen*, "look, indeed". "No, God does not reject..." makes it a rebuttal of Job, which the Hebrew does not say. Suggested: "Look: God does not reject the wholehearted".

## Checked and found sound
- Bava Batra 16a: the storm, *se'arah*/*sa'arah* and Iyov/oyev (9:17, 13:24); Rava on 10:7 ("exculpate the whole world"); Rava on 7:9 denying the resurrection (chapter 14 J lens).
- Maimonides, *Guide* 3.23 (Bildad and Zophar).
- Mishnah Sotah 5:5 and Sotah 31a.
- Augustine, *Confessions* 1.7 on 14:4–5 Greek; Vulgate 14:4, 9:33, 10:22, 14:3, 14:14.
- WCF 6.3 cites Job 14:4; Lumen Gentium 62; Augsburg Confession 2 and 21; Methodist Article 7; SDA Fundamental Belief 26.
- Philippians 1:19 = Job 13:16 in the Septuagint, word for word.
- Psalm 107:40 = 12:21a + 12:24b; Isaiah 41:20 = 12:9b.
- Qur'an 29:41; Ludlul II and the Babylonian Theodicy (line 256) quotations; Enuma Elish IV; Atrahasis; Book of Common Prayer burial service use of 14:1–2.
- Ketiv/Qere directions at 9:30, 10:20, 13:15 and 14:5 match texts/auto.
- No em-dashes in prose. Poetry line breaks are kept throughout. Every speech has a settings card with `readers`.

## Fixes applied

### Writer's response

Fixed: 21 of 21 findings. Three of them were fixed in a different way from the one the reviewer suggested; the reasons are given below. Nothing was rejected outright. `node tools/build.js --check Job/08-14`: 0 errors, 0 warnings (174 verses, 135 notes, 11 variants, 55 glosses, 7 chapter pages, 16 topic contributions).

1. **Rava on the wrong verse (9:22).** Fixed. The Talmud sentences are gone from the 9:22 note. It now points to the 9:24 note, and `bavli-bava-batra` is removed from its sources.
2. **9:33.** Fixed, and the Plain is changed. The evidence tips toward *lu*. *Lo' yesh* appears nowhere else in the Hebrew Bible (I searched texts/orig). *Lu yesh* is idiomatic (Numbers 22:29, and Job's own 16:4). *Lu* is written with the letters of *lo'* in the Ketiv at 2 Samuel 18:12 and 19:6. The Greek and the Syriac read a wish, and 9:34–35 keeps the wishing mood.
   - New Plain: "If only someone stood between us to judge the case, / to put his hand on each of us." The heading is now "Someone to stand between us".
   - The variant now follows reading 0 (*lu*). The received text is the alternative, supported by the rabbinic Targum (checked on Sefaria: *la' it beinana makhsen*) and the Vulgate.
   - The `why` gives the grammar and spelling arguments. It says plainly that most modern critical commentators read *lu*, and names Dhorme, Pope, Clines and Habel with the caveat that their pages were not checked. It lists the versions on each side: NIV and NLT for *lu*; KJV, NJPS, NRSV and ESV for *lo'*. "Well attested" is gone.
   - About fifteen Kennicott and de Rossi manuscripts are reported (Adam Clarke), not checked.
   - Updated to match: the 9:33 and 9:34 notes, the chapter 9 summary, readings and deep section, the chapter 10 setting, and the topic contributions to `intercession` (including its "uncommon" line), `justice` and `job`.
3. **14:14 Greek.** Fixed. The note now gives the Greek as a statement ("he will live"), says it has no question word, says Brenton prints a question, and links it to the Greek ending at 42:17. I added a new variant at 14:14. I did not check NETS.
4. **Old Greek gaps and Qumran.** Fixed. Chapter 9 has a new deep section, "The witnesses to Job 8–14".
   - The Old Greek is nearly complete in these chapters. Ziegler marks 9:3b with an asterisk; Pietersma and Gentry argue it is Old Greek. This is also noted at 9:3, with the keys `ziegler-job` and `gentry-asterisked-job`.
   - 4QJob-b covers 8:15–17, 9:27, 13:4 and 14:4–6. 4QpaleoJob-c covers 13:18–27 and 14:13–18. Neither shows a difference in meaning. I saw them only through a translation, and the section says so.
   - 11QtgJob begins at 17:14.
   - The section states what was checked directly (Rahlfs; the Targum at 9:33 and 13:15) and what was not (Ziegler, the Peshitta, the manuscripts, line-by-line Vulgate).
5. **tam.** Fixed. "Wholehearted" is now used in 9:20, 9:21 and 9:22. I updated the notes on 8:20, 9:21 and 9:22 (anchor), the chapter 9 summary and the `retribution` contribution.
6. **13:15.** Fixed. The Ketiv is kept.
   - **Witnesses added.** The rabbinic Targum follows the Qere (checked: *qodamohi atsalle*, "before him I will pray"). Rashi is listed with the Qere. The medieval manuscripts that write לו in the text are listed as reported, not checked. The Syriac is marked as not checked.
   - **Labels.** Both readings are now called Masoretic. The Qere is "the reading the Masoretes marked in the margin to be read aloud".
   - **One full explanation.** It now sits in the variant's `b`. The `word var` note is removed. The views note is cut down and points to the variant. The chapter 13 deep section is now a short summary that points to the variant. The readings and the `ketiv-qere` and `job` topic lines are shortened.
   - **Title.** Chapter 13 is now "Right to His Face".
   - **Drift.** The Plain is now "He is going to kill me; I have nothing left to hope for", which is no longer close to the NRSV/RSV. Logged in the drift audit.
   - **27:5.** The quote now uses the site's Plain: "Until the day I die I will not set my integrity aside."
   - **Attributions.** The unchecked names (Clines, Habel, Pope; Gordis) are dropped. The text now says "many modern commentators".
7. **"Deep shadow throughout Job."** Fixed. The claim is now limited to these chapters, and the note says the other parts vary.
8. **Quotes of other parts.** Fixed. The notes now use the current Plain of 33:11, 19:6 (with the verb *'ivvetani*) and 6:26.
9. **go'el.** Fixed. It now reads "a redeemer (*go'el*)", with the 19:25 wording "stand up on the dust".
10. **'eveh.** Fixed. It now reads "compare Akkadian *apu*, 'reed, reed thicket'".
11. **10:20 Ketiv.** Fixed. The `why` gives the "my days" reading of *yechdal* and says only *yashit* is clearly third person.
12. **12:13.** Fixed. It now reads "Four qualities, wisdom, might, counsel and understanding".
13. **8:13.** Fixed with a new `deb` note rather than a variant. It gives the Greek *ta eschata* (checked in Rahlfs) and *'acharit*, links to 8:7, and cites Proverbs 1:19 in support of the received text.
14. **jobs-friends.** Fixed. 8:1, 8:8 and 11:1 now have `top: jobs-friends`, and a new contribution covers Bildad's tradition and Zophar's hidden wisdom.
15. **Traditions cards.** Fixed in part. The `top` values are the ones the coordinator set (communion-of-saints; the-fall; sheol). I kept the chapter 9 question, because the real conflict between the traditions is over invoking the saints. Whether the verse points to Christ is not a denominational split, and the 9:33 notes already cover it. The question now opens from 9:33 and 1 Timothy 2:5, so it ties to the text.
16. **Settings.** Fixed. The dates are hedged ("likely") in the `readers` of chapters 8, 9, 11 and 12. Chapter 8's `to` now says "sitting in the ashes (2:8)", from the Hebrew.
17. **"Umpire" close to the NRSV.** Fixed by the new 9:33 wording. Logged.
18. **8:21 and 11:19.** 8:21 is fixed: "by adding one small letter, *vav*". 11:19 is changed, but not to the suggested "court your favor", which is the NIV/ESV phrase. It now reads "many people will come seeking your favor".
19. **12:9 narrator.** Fixed. It now reads "in the prologue, in 38:1, 40:1–6 and 42:1, and in the epilogue".
20. **10:15.** Fixed. It now reads "If I am guilty, oh, woe is me!"
21. **8:20.** Fixed. It now reads "Look: God does not reject the wholehearted".
