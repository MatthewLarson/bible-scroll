# Hostile review: Job 38–42 (part 38-42)

Reviewer's checks: plain.txt read verse by verse against `node tools/literal.js Job 38`–`42` and texts/orig (wlc); texts/auto Ketiv/Qere entries for 38–42 compared with variants.json; every note, variant, gloss, chapter page, settings card, traditions card and topic contribution read; quotations of other site books (Genesis, Exodus, Numbers, Deuteronomy, Joshua, Judges, 1 Samuel, 1–2 Kings, 1–2 Chronicles, Revelation) and of other Job parts compared with their Plain English Translation text; `node tools/build.js --check Job/38-42` run (0 errors, 3 warnings in this part). Web checks: the Douay/Vulgate chapter division of Job 40 (drbo.org); J. B. Curtis's rendering of 42:6 (as reported in M. V. Fox, *Biblica* 94, 2013); Horapollo's crocodile-eyes hieroglyph for sunrise. The NIV and ESV were compared from memory only.

## Verdict

This is a strong part. The translation follows the Hebrew closely, keeps the poetry lean and parallel, and does not hide the hard words (38:36, 39:13, 40:19, 41:12–13, 41:25 all get honest notes). The Old Greek is used well, and the Greek ending at 42:17a–e is laid out accurately and fairly as a switchable reading, with the Jobab identification traced to Genesis 36:33, the *Testament of Job* and Aristeas. I checked its Plain English Translation rendering against the Rahlfs text section by section and found nothing added or left out. The Hebrew/English chapter shift in chapter 41 is explained correctly. The real problems are concentrated where the brief asked for the most care. (1) In 42:6 the Plain English Translation makes a definite choice ("take it back... here on dust and ashes"), but the chapter page says the wording "leave[s] the main options open". The notes contradict each other on this. One named scholar (Curtis) is filed under the wrong view in three places, and the traditional repentance reading gets no philological support. (2) The note on chapter numbering says wrongly that the Vulgate follows the Hebrew numbers. (3) The Qumran Targum, which covers much of 38–42, is barely used, and its notable plus at 42:9–10 is missing. The rest are minor. **Findings: 0 critical, 4 major, 16 minor** (item 21 is a list of checks that passed, not a finding).

## Findings

### 1. Major: 42:6, the Plain English Translation's choice is misdescribed, and the notes contradict each other
**Location:** plain.txt 42:6; notes.json #64 (42:6 "That is why I take it back") and #65; chapters.json 42 `sum[0]` and deep "Job's last words".
**Problem.** The Plain English Translation reads "That is why I take it back, / and I change my mind, here on dust and ashes."
- "Take it back" supplies an object (Job's words or case) for the verb *em'as*, which has none. That is the retraction reading (Pope; NJPS "recant"). It rules out "I despise myself" (KJV, Vulgate *ipse me reprehendo*, LXX ἐφαύλισα ἐμαυτόν) and "I melt" (LXX ἐτάκην; 11QtgJob אתנסך ואתמהא).
- "Change my mind" for *nichamti* rules out "I am comforted".
- "Here on" makes *'al* locative (Job sitting in the ashes, 2:8). But *nicham 'al* is a set phrase, "relent concerning / be sorry about" (Exodus 32:12, 14; Jeremiah 18:8, 10; Amos 7:3, 6). Patrick, Morrow and Habel read it that way ("repent of / change my mind about dust and ashes" = give up mourning), and so does the comfort reading ("comforted about dust and ashes"). So the Plain English Translation also rules out the very retraction-of-mourning view that note #65 and the settings card describe ("gives up the mourning he sat in").

The page then makes three claims that do not agree:
- deep: "The Plain English Translation chooses words... that leave the main options open". This is not true; it leaves almost none open.
- note #64: "The Plain English Translation keeps a middle sense: Job takes back his charges and changes his mind, sitting on the ash heap".
- sum: "he takes it back and changes his mind, there on the dust and ashes".

**Fairness.** The repentance view gets names only (Rashi, Calvin, Andersen, Hartley). It gets none of its evidence. Its strongest case is: *ma'as* used reflexively without an object elsewhere in Job (9:21 "I despise my life"; 7:16 *ma'asti*); *nicham 'al* = "repent of" (Jeremiah 8:6, "no one repents of his evil"); and the Vulgate. The other views are argued, so this one should be too. Note #64 also gives no Vulgate and no rabbinic Targum, though the brief asks for both. It quotes only the first two verbs of 11QtgJob and leaves out its last clause, "and I shall become dust and ashes", which bears directly on the comfort/mortality reading.
**Fix.**
- Either state the choice honestly ("The Plain English Translation follows the retraction reading, as Pope and the NJPS do; 'here on' takes *'al* as 'on, in'"), or make the second line neutral, for example "and I relent, about dust and ashes", with "on/in" as the note's alternative.
- Make deep, note #64 and `sum` say the same thing.
- Give the repentance reading its evidence (9:21; 7:16; Jeremiah 8:6; Vulgate), and add the Vulgate and the full 11QtgJob line to note #64.
- Say whether 11QtgJob was checked directly (the 42:11 variant says it was not; the 42:6 note is silent).

### 2. Major: Curtis is filed under "surrender", which is the opposite of his view (42:6)
**Location:** notes.json #65 ("Protest. Job gives in to power, not to argument... (Curtis; Greenstein)"); chapters.json 42 settings `views` "Protest or surrender: Job yields to power, not to argument (Curtis; Greenstein in part)"; topics.json `repentance` ("a reluctant yielding (Curtis)").
**Evidence.** J. B. Curtis, "On Job's Response to Yahweh," *JBL* 98 (1979), renders 42:6: "Therefore, I feel loathing, contempt and revulsion [toward you, O God], and I am sorry for frail man". That is defiant rejection of God, not yielding. Note #64 gets him right ("I reject you").
**Related.** The repentance topic says "I am consoled though I am dust and ashes" (Mitchell, Greenstein). Greenstein's line is "I am fed up; I take pity on dust and ashes" (as note #64 says), not "consoled".
**Fix.** Relabel Curtis as "rejection/defiance: Job rejects God and pities humankind". Keep "yielding to power" for Fullerton-type readings, or for Greenstein only if his commentary says so. Fix the Greenstein wording in the topic.
**Verify also:** note #64 lists Clines under "I retract". My recollection is that Clines (WBC 18B) renders the verse roughly "I submit, and accept consolation for my dust and ashes", which would put him partly under comfort. Check the commentary before keeping the attribution.

### 3. Major: Wrong claim that the Vulgate follows the Hebrew chapter numbers (40–41)
**Location:** notes.json #44 (41:1 "Hebrew numbers this chapter differently").
**Problem.** The note says "The Greek (Rahlfs) and the Vulgate follow the Hebrew numbers." Rahlfs does. The Clementine Vulgate (and Douay-Rheims) does not, and it differs in chapter 40 too:
- Hebrew/English 40:1–5 = Vulgate 39:31–35
- 40:6–24 = Vulgate 40:1–19 (Douay 40:10 is "Behold behemoth")
- English 41:1–9 = Vulgate 40:20–28 (Douay 40:20 "Canst thou draw out the leviathan with a hook")
- English 41:10–34 = Vulgate 41:1–25

The Nova Vulgata follows the Hebrew. The site's own Hobbes note gets this right without saying so: Hobbes's "Job 41:24" is Vulgate numbering for English 41:33.
**Also.** "The Hebrew break follows older manuscript tradition" is doubtful. Chapter numbers are medieval Latin divisions taken into printed Hebrew Bibles; manuscripts like the Leningrad Codex have no chapter numbers. Either cite evidence or drop the clause. The chapter 40 page also does not tell readers that Hebrew chapter 40 runs on to 40:32 (English 41:8). Add a sentence there, since that is where a JPS reader will first get lost.
**Fix.** Rewrite: "The Greek (Rahlfs) and modern Jewish Bibles follow the Hebrew numbers. The older Latin Vulgate and the Douay-Rheims number differently again (40:1–5 is their 39:31–35, Behemoth starts at their 40:10, Leviathan at their 40:20)." Add the cross-reference sentence to the chapter 40 page.

### 4. Major: The Qumran Targum (11QtgJob) is barely used in 38–42
**Location:** variants.json, notes.json (38:7, 42:9–10).
**Problem.** The brief lists 11QtgJob as a witness. It survives for much of 38–42 (its last columns), but the part cites it only at 42:6 and 42:11. At least two readings a careful reader should know about are missing:
- **42:9–10.** As I recall the DJD 23 text and García Martínez's translation, the Targum has a plus: God "heard the voice of Job and forgave them their sins for his sake", and "returned to Job in mercy". This bears on the intercession theme and on the 42:10 note's point that the restoration comes when Job prays.
- **38:7.** As I recall, the Targum has "when the morning stars shone together and all the angels of God shouted". It agrees with the LXX's "angels", which note #5 cites, and the Targum should stand beside it.

**Also missing.** The part never says that no 4QJob or 2QJob fragment survives for 38–42 (as far as I know, 4QJob-a ends in chapter 37). One line would tell readers the Hebrew scrolls are silent here.
**Fix.** Check both readings in DJD 23 (García Martínez, Tigchelaar and van der Woude, 1998). Then add a variant at 42:9 (or 42:10) and a sentence in note #5, each stating whether the reading was checked directly. Add one sentence on the absence of Hebrew Qumran evidence for 38–42.

### 5. Minor: 42:11 variant, the end of 11QtgJob
**Location:** variants.json 42:11 `b`.
**Problem.** "Though it may simply be the edge of the scroll." As I understand the edition, the text stops in the middle of 42:11 and the rest of the column is blank. That is why most scholars think the translation ended there. Breakage does not explain a blank space.
**Fix.** Check DJD 23 and reword, for example: "the rest of the column is uninscribed, which suggests the translation ended here".

### 6. Minor: Old Greek gaps beyond the ostrich
**Location:** notes.json #26 and #27; chapters.json 39 C.
**Problem.** The part says that 39:13–18 was missing from the Old Greek, and that is right. It does not say whether any other lines in 38–42 are asterisked in Rahlfs or Gentry. The brief asks for gaps "when it matters".
**Fix.** Go through the asterisks in Rahlfs or Ziegler for 38–42 and add a sentence in chapter 40 or 41 C, or in a note, if there are significant minuses in the Behemoth or Leviathan poems.

### 7. Minor: 42:10 "turned back Job's captivity"
**Location:** plain.txt 42:10; notes.json #70; gloss.
**Problem.** The Plain English Translation keeps the KJV rendering, while its own note says the phrase means "restore the fortunes" and that "Job was never a prisoner". STYLE asks for the most likely meaning in the text and the alternatives in a note. Readers at an 8th-grade level will take "captivity" literally. The exile echo is real and worth keeping, but in the note. (Deuteronomy 30:3 on this site keeps "captivity", which fits there because exile is in view.)
**Fix.** Consider "the LORD turned Job's fortunes around" in the text, and keep the Deuteronomy 30:3 echo in note #70. Otherwise, mark note #70 as kind `nu` with an explicit statement that the Plain English Translation keeps the literal phrase on purpose.

### 8. Minor: 42:4a is presented as a quotation of God, but God never says it
**Location:** plain.txt 42:4; notes.json #62.
**Problem.** "'Hear me, please, and I will do the talking. / I will ask you, and you tell me what you know.'" Only the second line repeats God (38:3; 40:7). Note #62 says "Verses 3a and 4 repeat God's words (38:2–3)", which is wrong for 4a. Some read 42:4a as Job recalling his own earlier challenge (13:22).
**Fix.** Say so in note #62, and say that the quotation marks round 4a are an interpretation.

### 9. Minor: 40:19 adds "alone"
**Location:** plain.txt 40:19.
**Problem.** "Its Maker alone can bring his sword against it." The Hebrew is "the one who made it, let him bring near his sword"; "alone" and "can" are interpretation. Note #40 admits that the line may instead mean God gave the beast a sword (its tusks).
**Fix.** Use "Its Maker brings his sword near it", or keep the wording and say in note #40 that "alone" is supplied.

### 10. Minor: 40:24 and 41:9, alternatives not noted
**Location:** plain.txt 40:24, 41:9; notes.json #50.
**Problem.**
- 40:24 *be'enav* "with its eyes wide open" is one reading. Others are "by its eyes" (hooks in the eyes) or a proposed emendation. There is no note.
- 41:9b *hagam 'el mar'av yutal*: many read *'el* as "god" ("even a god is laid low at the sight of it"). That fits 41:25, where the Plain English Translation chooses "the gods". Note #50 also says "Some ancient versions read 'your hope'" without naming them.

**Fix.** Add a short `deb` note at 40:24. Add the "god" reading to note #50, and name the versions or drop the claim.

### 11. Minor: The Bava Batra 16a–b story about animal births is garbled
**Location:** chapters.json 39 `views.J`.
**Problem.** The page says "the ibex is cruel to its young and God sends a serpent to strike her womb". In the Talmud these are two animals. The ibex (*ya'alah*) is cruel, and God sends an eagle to catch her falling kid. The hind (*ayyalah*) has a narrow womb, and God sends a serpent to bite it open. The text also ends with a stray "?." after "enemy".
**Fix.** Separate the two animals and fix the punctuation.

### 12. Minor: A quotation of Job 11:3 does not match the Plain English Translation
**Location:** notes.json #53 (41:12) preview.
**Problem.** The preview quotes 11:3 as "your babble", but the 08-14 Plain English Translation has "your bragging".
**Fix.** Use "your bragging".

### 13. Minor: Cross-book wording
**Location:** notes.json #22 (39:1), #74 (42:11), #30 and #21; plain.txt 41:11b.
- Note #22 quotes "the Rocks of the Wild Goats" (1 Samuel 24:2), but the site's 1 Samuel Plain English Translation has "Ibex Rocks". Use the site's wording.
- *Qesitah* is "qesitahs" in the site's Genesis 33:19 and Joshua 24:32 but "one coin" in 42:11. Either is defensible. Note #74 should say the Genesis and Joshua pages keep the Hebrew word, or the part should consider "one qesitah" with a gloss.
- Note #30 (Matthew 24:28, "there the vultures will gather") and note #21 (Luke 12:24, "Consider the ravens: they do not sow or reap... and God feeds them") are unlabeled renderings of books not yet on the site, and both sit very close to the NIV/ESV wording. Label them "a fresh rendering", as was done for Isaiah 27:1 and Psalm 104:26, and rephrase from the Greek.
- 41:11b, "Whatever lies under all the heavens is mine", is close to one major version's line. It is literal Hebrew, so this is low priority; rephrase if convenient.

### 14. Minor: Duplicate explanations
**Location:** notes.json #61 (42:2) and #51 (41:10).
**Problem.** Note #61 repeats the 42:2 Ketiv/Qere variant almost word for word. Note #51 repeats the 41:10 variant's "before him" point. STYLE says to explain once and refer.
**Fix.** Cut the duplicated text, or point to the variant.

### 15. Minor: Missed wordplay, *nevalah* in 42:8
**Location:** plain.txt 42:8.
**Problem.** "The disgrace your folly has earned" renders *nevalah*. Job told his wife she spoke like one of the *nevalot*, "senseless women" (2:10). Now God says the friends have earned *nevalah*. Many commentators point out this frame link, and there is no note.
**Fix.** Add a short `nu` note with the 2:10 echo, and say the clause can also mean "so that I do not do something disgraceful to you".

### 16. Minor: Leviathan's skin and the booths (Bava Batra 75a)
**Location:** notes.json #49 (41:7).
**Problem.** The rabbinic pun rests on the word for "barbs", *sukkot*, which also means "booths". The note says the rabbis were "reading the 'skin' of this verse" and leaves out the key word.
**Fix.** Add "*sukkot*, 'barbs', read as 'booths'".

### 17. Minor: Isaiah 27:1 and KTU 1.5 renderings
**Location:** chapters.json 41 deep and W; topics.json `dragon`.
**Problem.** The fresh rendering of Isaiah 27:1 is properly labeled (Isaiah is not on the site yet). It is accurate, but it drops one of the sword's three adjectives: the Hebrew has "hard, great and strong" (*qashah, gedolah, chazaqah*), and the deep has only "great". The KTU 1.5 i 1–3 line is marked "paraphrased" in chapter 41 W but quoted without that label in the topic.
**Fix.** Give all three adjectives, at least in the topic version, and label the KTU line the same way in both places.

### 18. Minor: Headings and outline, "hawk" or "falcon"
**Location:** plain.txt heading before 39:26; book.json outline 39.
**Problem.** The heading says "Hawk and eagle" and the outline says "the hawk", but the verse says "falcon" (*nets*).
**Fix.** Pick one word for both.

### 19. Minor: The settings cards' `readers` fields
**Location:** chapters.json settings for 38:1–40:2, 40:6–41:34, 42:1–6 and 42:9–17.
**Problem.** The same sentence ("The book's first readers were Israelites, probably after the exile of 587 BC...") is pasted into four cards, and the 40:3–5 card names no first readers at all ("For suffering readers"). The dating is said to be "probably", which is fine, but the cards never point to the other datings that book.json gives.
**Fix.** Write a card-specific first sentence for each. Name the post-exilic Israelite readers in the 40:3–5 card. Add a pointer to book.json's audience views.

### 20. Minor: Mechanics
**Location:** chapters.json 38, 41 and 42 `traditions[0]`.
**Problem.** The build warns that each of these traditions cards needs `top`.
**Fix.** Add the topic ids: `creation` (38), `dragon` (41), and `job` or `edom` (42).

### 21. Not a finding: Small factual checks that passed (for the writer's information, no action)
These were checked and found correct:
- the suspended *ayin* in 38:13, 15
- the Targum's "giant" for *Kesil*
- Vulgate *Lucifer* (38:32) and *gallus* (38:36)
- Rosh Hashanah 26a (*sekhvi*, *qesitah*) and Berakhot 60b
- Augustine, *City of God* 11.9
- the LXX readings at 38:14, 38:36, 39:19, 40:15, 40:19, 41:3 (Romans 11:35 follows the Hebrew), 41:5, 41:24, 41:26, 42:7, 42:8, 42:11 and 42:16
- the daughters' names in the Greek
- Bava Batra 16b and 74b–75a
- Leviticus Rabbah 13:3
- 1 Enoch 60:7–9, 4 Ezra 6:49–52, 2 Baruch 29:4
- *Testament of Job* 1:1 and 46–50
- Aristeas in Eusebius, *Preparation for the Gospel* 9.25
- Horapollo, crocodile eyes for sunrise (I did not confirm the chapter number 1.68)
- Hobbes's title-page verse
- KTU 1.3 iii (El's calf, Tunnan)
- Mishnah Sotah 5:5
- Westminster Confession 4.1 and 1.8
- the Trent wording

## Fixes applied

1. **42:6 (major): fixed.** The Plain English Translation now says plainly which reading it follows, and every place says the same thing: "That is why I take back what I said, / and I change my mind about dust and ashes." That is the retraction reading. *Em'as* means "I reject"; "what I said" is supplied from 42:3. *Nichamti 'al* is taken as the set phrase "change one's mind about" (Exodus 32:12, 14; Jeremiah 18:8, 10; Amos 7:3, 6). "Dust and ashes" is left as the Hebrew has it. I dropped the locative "here on". The two old notes are replaced by three, each with its evidence:
   - *em'as*. For "I despise myself", the note cites 7:16 and 9:21, the Vulgate *ipse me reprehendo* and the Greek ἐφαύλισα ἐμαυτόν. For "I melt", it cites the Greek ἐτάκην and 11QtgJob's "poured out and dissolved". It also gives Curtis and Greenstein.
   - *nicham 'al*, handled directly. It gives "relent about"; "repent of", with Jeremiah 8:6; and "be comforted about", with 2 Samuel 13:39. It notes that the traditional "in dust and ashes" (and the Vulgate *ago paenitentiam in favilla et cinere*) takes *'al* as locative.
   - "Dust and ashes" (30:19; Genesis 18:27; 2:8), with the four readings and who holds each. The versions are cited in full: the Greek; the last clause of 11QtgJob, "and I shall become dust and ashes"; and the rabbinic Targum as Mangan translates it.

   The note says that 11QtgJob was not checked directly; it is cited from DJD 23 by way of Greenstein and van der Lugt. Updated to match: chapter 42 `sum`, the deep section (the "leave the main options open" claim is gone), the 42:1–6 card's `why` and `views`, and the `repentance` topic, which now gives the repentance reading's evidence.
2. **Curtis and Greenstein (major): fixed.** Curtis is now filed under "Rejection: Job rejects God and pities humankind" in the notes, the card and the topic, with his rendering "I am sorry for frail man". The 42:5 note no longer has him "giving up his case". Greenstein is quoted as "I take pity on dust and ashes", and the 42:5 note describes him as reading Job as defiant. I checked Clines through van der Lugt's summary (*VT* 64, 2014): "I submit" and "accept consolation". He now sits under comfort, with his "I submit" noted as close to retraction.
3. **Numbering (major): fixed.** The 41:1 note now says that Rahlfs and modern Jewish Bibles follow the Hebrew numbers, while the older Vulgate and the Douay-Rheims number differently (39:31–35; Behemoth at 40:10; Leviathan at 40:20; 41:1–25). I dropped the "older manuscript tradition" claim and replaced it with: the chapter divisions are medieval and were added to the Hebrew text later. The Hobbes note now says "(Vulgate 41:24)". I added a chapter 40 deep section, "Where Hebrew chapter 40 ends".
4. **11QtgJob (major): partly done.** Its 42:6 line is now used in full. I could not check the 42:9–10 plus or "angels of God" at 38:7 in DJD 23, in Sokoloff or in a reliable online summary, so I left both out, as instructed. Chapter 38 C now says that no Hebrew manuscript from Qumran survives for 38–42 (the published 4QJob fragments stop in chapter 37), and that 11QtgJob covers parts of these chapters. The 42:11 variant says the same.
5. **End of 11QtgJob: reworded.** The text stops in the middle of 42:11, and the rest of the column is left blank "as the editions describe it", which is why most scholars think the translation ended there. The variant marks this as not checked directly.
6. **Old Greek gaps: added, marked provisional (chapter 41 C).** On die-bibel.de, Rahlfs' text has critical signs at 38:26–27, 38:32, 40:2, 40:23 and English 41:12 and 41:32. They appear to mark short supplements from Theodotion. I could not confirm how far they extend, and the text says so. The gap at 39:13–18 is certain.
7. **42:10: fixed.** The Plain English Translation now has "the LORD turned Job's fortunes around". The note gives the literal "turned back the captivity" and keeps the exile echo. I removed the gloss and updated the 42:9–17 card and the `job` topic.
8. **42:4a: fixed.** The note now says that God never says 4a, that the quotation marks are an interpretation, and that some take 4a as Job recalling 13:22.
9. **40:19: fixed.** The line now reads "The one who made it brings his sword near it." The note and the variant anchor are updated.
10. **40:24 and 41:9: fixed.** I added a `deb` note on *be'enav*. The 41:9 note now gives the "even a god is thrown down" reading (Pope, Habel). I dropped the unnamed "ancient versions" claim.
11. **Bava Batra 16a–b: fixed.** The ibex and the eagle are now separated from the hind and the serpent, and the stray punctuation is gone.
12. **11:3: fixed.** It is now "your bragging", in the preview and the body.
13. **Cross-book wording: fixed.**
    - The 39:1 note now uses "the Ibex Rocks".
    - The *qesitah* note says that the site's Genesis and Joshua keep "qesitahs".
    - The Luke 12:24 and Matthew 24:28 passages are now paraphrased, with no quotation.
    - 41:11b now reads "All that is beneath the whole sky belongs to me."
14. **Duplicates: fixed.** The 42:2 note is now about what Job confesses and refers to the variant. The 41:10 note now refers to the variant for "before him".
15. **42:8 *nevalah*: added.** A `nu` note gives the 2:10 echo, quoted in the site's wording ("a godless woman"), and the alternative sense "so that I do not do something disgraceful to you".
16. **41:7: fixed.** The note now says that *sukkot*, the word for "barbs", was read as "booths".
17. **Isaiah 27:1 and KTU: fixed.** Isaiah's sword is now "hard, great and strong" in both the chapter 41 deep section and the `dragon` topic. The KTU 1.5 line is labeled "paraphrased" in both places.
18. **Hawk or falcon: fixed.** I changed 39:26 to "hawk", which matches the heading and the outline in book.json. Book.json itself is unchanged.
19. **`readers` fields: fixed.** Each card now has its own text:
    - 38:1–40:2 points to the other datings in the book's opening pages.
    - 40:3–5 names Israelites after the exile, with Psalm 44 and Psalm 88.
    - 40:6–41:34 names readers under Persian or Greek rule, with Isaiah 27:1.
    - 42:1–6 names readers of the confessions in Ezra 9 and Nehemiah 9.
    - 42:9–17 cites Psalm 126:4, in a fresh rendering.
20. **`top`: already present** (days-of-creation, dragon, canon). Kept.

**Rejected:** none. Two parts of finding 4 are not carried out (the 42:9–10 plus and 38:7 "angels of God") because they could not be verified, as the coordinator decided.

Rebuilt verses re-audited for drift: 39:26, 40:19, 41:11, 42:6 and 42:10. None matches NIV or ESV wording.

Check: `node tools/build.js --check Job/38-42` gives 0 errors and 0 warnings. Counts: 146 verses, 84 notes, 8 variants, 51 glosses, 5 chapter pages and 14 topic contributions.
