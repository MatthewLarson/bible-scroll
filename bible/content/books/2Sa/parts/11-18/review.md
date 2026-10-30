# Hostile review: 2 Samuel 11–18 (part 11-18)

Reviewed: `content/books/2Sa/parts/11-18/` (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json); new topic cores `bathsheba`, `absalom`, `ahithophel`, `amnon-and-tamar`, `parables`; shared source keys `gunn-david`, `vonrad-history`. Not reviewed: book.json and the other parts. All 252 verses were compared with `node tools/literal.js 2Sa 11`–`18` and the Hebrew in `texts/orig/2Sa.json`. `node tools/build.js --check 2Sa/11-18` reports 0 errors and 0 warnings.

## Verdict

This is a strong part. The translation is faithful and readable, with very little modern-version drift. The notes are dense, mostly accurate and unusually fair on Bathsheba and on Amnon and Tamar. The Genesis 34 and Judges 19–20 wording is reused correctly. The weak spot is the text-critical work. At 12:14 the Plain English Translation follows a conjecture that no witness has, adds words that are in no text at all, and misreports the Dead Sea scroll, which actually reads "the word of the LORD." The part never says that 2 Samuel 11–1 Kings 2 is the *kaige* section, where Codex Vaticanus is a revised text and the Lucianic Greek is the better witness to the Old Greek. Two Qumran witnesses are missing (4QSam-c at 14:30 and 4QSam-a at 13:16). The 13:39 note gets the ancient versions backwards. One rabbinic citation is misattributed, and it is repeated in three places (Sanhedrin 69b and 101b, cited for Ahithophel's revenge). One clause at 15:24 copies the NIV almost word for word. None of this is critical. All of it should be fixed before publishing. **Findings: 0 critical, 7 major, 19 minor.**

### How I judged the readings the writer took from 4QSam-a and the Greek

| Verse | Choice | Judgment |
|---|---|---|
| 12:14 | "scorned the LORD" | **Wrong as presented** (finding 1). 4QSam-a reads "the word of the LORD." |
| 12:16 | "in sackcloth" (4QSam-a, LXX) | Sound. The scroll may also lack "spent the night" (finding 12). |
| 13:21 | longer text (4QSam-a, LXX) | Sound. The 1 Kings 1:6 argument is good. |
| 13:27 | royal banquet (4QSam-a, LXX) | Sound. |
| 13:34 | lookout's report (LXX) | Sound. The homoioteleuton argument is right. |
| 13:39 | "the king's spirit" (4QSam-a, LXX) | Sound for the subject. The note and the reading's gloss misreport the versions' sense of the verb (finding 4). |
| 15:7 | "four years" (Lucianic, Syriac, Josephus) | Sound. It should say why Vaticanus's "forty" counts for little here (kaige, finding 2). |
| 15:8 | "in Hebron" (Lucianic) | Defensible, and rightly marked low certainty. |
| 15:27 | "Look" (LXX) | Defensible. The MT is kept fairly as the other reading. |
| 17:3 | the bride image (LXX) | Sound. This is the majority choice. |
| 18:3 | "you" (2 Hebrew manuscripts, LXX, Vulgate) | Sound. |
| 18:12 | "for my sake" (LXX) | Sound. |

### Status of the claims the writer asked to have checked

- **4QSam-a at 12:14.** It reads "you have utterly scorned the word of the LORD" (את דבר יהוה). See Donald W. Parry, "The 'Word' or the 'Enemies' of the Lord? Revisiting the Euphemism in 2 Sam 12:14," in *Emanuel* (VTSup 94, 2003), 367–378, and the Abegg–Flint–Ulrich style rendering at dssenglishbible.com. It does **not** read a bare "the LORD." See finding 1.
- **4QSam-a at 13:39.** Confirmed. It reads "the spirit of the king" (רוח המלך) where MT has "David."
- **Josephus.** *Antiquities* 7.7.1 (§131) makes Uriah Joab's armor bearer, 7.9.1 (§196) has "four years," and 7.10.2 (§239) has Absalom's hair caught in the tree. All three match the Whiston text as I know it. I could not open an online copy to recheck the wording, because the Gutenberg page was refused by the permission system.
- **Sanhedrin 69b and 101b.** 69b makes Ahithophel Bathsheba's grandfather. 101b is about Ahithophel misreading a sign that kingship would come from him; it really pointed to his granddaughter Bathsheba. Neither passage gives revenge as his motive. See finding 5.
- **Shabbat 56a.** Correct. It has "Whoever says David sinned is mistaken," the soldiers' conditional bills of divorce, and Uriah as a rebel against the king for saying "my lord Joab."
- **Other Talmud citations spot-checked.** Yoma 22b (fourfold: the child, Amnon, Tamar, Absalom), Sukkah 52b, Sanhedrin 21a and 21a–b, Sanhedrin 107a, Avodah Zarah 4b–5a and 44a, Sotah 10b, Mishnah Sotah 1:8, Avot 5:16 and Sanhedrin 10:2 all fit what those passages say.
- **Shared keys.** `gunn-david` (Gunn, *The Story of King David*, JSOTSup 6, 1978) and `vonrad-history` (von Rad, 1944; English 1966) are correct. Von Rad does single out 11:27, 12:24 and 17:14, as the 17:14 note says.

## Findings

### 1. Major: 12:14 follows no witness, adds words, and misreports 4QSam-a
**Where:** plain.txt 12:14; variants.json 12:14; glosses (none).
**What is wrong:**
- (a) The Plain English Translation reads "you have scorned the LORD **so openly**." Nothing in any witness stands behind "so openly." The infinitive absolute נִאֵץ נִאַצְתָּ only intensifies the verb ("utterly"). The literal line has "indeed <declare contemptible> | you have declared contemptible." The added words also slip in an interpretation (public scandal), which the "Forgiven, yet the child dies" deep section then relies on.
- (b) The followed reading is labeled "Text without the scribes' addition: the reading most scholars restore." It is given a Hebrew form, נִאַצְתָּ אֶת־יְהוָה, that no manuscript has. The entry then says 4QSam-a "is reported to support a reading without 'enemies of' … needs checking." It has been checked and published. The scroll reads **"the word of the LORD"** (את דבר יהוה), a different reading with its own reverent buffer. That reading has strong internal support, because 12:9 says "Why have you despised **the word of the LORD**."

**Fix:** Make three readings honestly. (i) 4QSam-a: "you have utterly scorned the word of the LORD." (ii) MT and LXX: "the enemies of the LORD." (iii) The conjecture with no buffer word, labeled as a conjecture (McCarter, NRSV-type rendering). Either follow 4QSam-a, which is a real witness and echoes 12:9, or keep the conjecture and say plainly that no manuscript has it. Delete "so openly" in every reading's `plain` and in the verse. A faithful wording would be "you have utterly scorned the word of the LORD." Cite Parry 2003 (add a key) and `djd17-samuel`.

### 2. Major: the kaige section is never explained, and the Vaticanus witnesses are mislabeled
**Where:** every variants.json entry that cites "Septuagint … (Rahlfs edition, mainly Codex Vaticanus, 300s AD)": 11:21, 11:22, 12:6, 12:30, 13:16, 13:21, 13:27, 13:34, 13:39, 14:27, 14:30, 15:20, 15:27, 16:12, 17:3, 18:3, 18:12. Especially 15:7, which says "Septuagint (Vaticanus); KJV" as if it were independent support for "forty."
**What is wrong:** 2 Samuel 11:2–1 Kings 2:11 is the "βγ" section of Kingdoms. There Codex Vaticanus, and so Rahlfs, carries the *kaige* recension, a Jewish revision that brought the Greek toward the proto-Masoretic text. In this section the Old Greek is best preserved in the Lucianic (Antiochene) text. This is standard (Thackeray, Barthélemy, *Les Devanciers d'Aquila* 1963; Tov, TCHB; McCarter). It is the most important fact a reader needs to weigh the Greek in exactly these chapters, and the part never mentions it. Without it, Vaticanus's agreements with MT (15:7 "forty") look like extra evidence when they are not. Where Vaticanus *differs* from MT (11:22, 13:21, 13:27, 13:34), the disagreement survived the revision and so is stronger evidence than the entries say.
**Fix:** Add one note, at 11:2 or the first LXX variant, or a deep section in chapter 11, that explains the kaige section in plain words. Relabel the witnesses "Septuagint, kaige text of Codex Vaticanus" and "Lucianic (Antiochene) Greek" where they differ. Revise the 15:7 `why` to say that Vaticanus's "forty" is an assimilation to the Hebrew in this section. Check each LXX plus against the Lucianic text (the Madrid edition by Fernández Marcos and Busto Saiz, 1989).

### 3. Major: 14:30 leaves out a Hebrew Qumran witness to the longer text
**Where:** variants.json 14:30; note 14:30 ("The Greek adds a scene").
**What is wrong:** The plus in which Joab's servants come with torn clothes is not only Greek. It is found in **4QSam-c** (4Q53), and also in the Vulgate (Ulrich, "4QSam-c: A Fragmentary Manuscript of 2 Samuel 14–15 from the Scribe of the Serek Hay-yaḥad," BASOR 235, 1979; DJD 17). The entry calls it "an expansion" on Greek evidence alone. A Hebrew scroll more than a thousand years older than the Leningrad Codex changes the weighing. The sentence could easily have dropped out by homoioteleuton ("set the field on fire … set the field on fire").
**Fix:** Add "Dead Sea Scrolls 4QSam-c (4Q53), about 100–75 BC; Vulgate" to the longer reading. Rewrite the `why`, and either follow the longer text or justify keeping MT against a Hebrew witness, the Old Greek and the Vulgate. Fix the note to match.

### 4. Major: 13:39 and 14:1 misstate the ancient versions
**Where:** note 13:39 ("Most translations, ancient and modern, read it as longing"); variants.json 13:39 (it glosses the scroll and the LXX as "longed"); note 14:1.
**What is wrong:** The ancient versions mostly read *ceasing*, not longing. The LXX has ἐκόπασεν, "the king's spirit **ceased, abated**," and the Vulgate has *cessavitque David rex persequi Absalom*, "and King David **ceased to pursue** Absalom." "Longing" is mainly the reading of medieval Jewish commentators and of the KJV tradition and its successors. So the variant entry gives the Greek a sense it does not have. The note also turns McCarter's reading into a minority ("a few scholars") when it has the oldest versions behind it.
**Fix:** In the variant, gloss the scroll as "the king's spirit was spent / ceased (to go out)" and the LXX as "ceased." In the note, say the old versions (LXX, Vulgate) read "ceased to go out against Absalom," and the KJV and most modern versions read "longed to go out to." Then let 14:1 follow, keeping both senses. Consider whether "pined" should stay in the Plain English Translation. It is defensible, but the note must give the alternative fairly.

### 5. Major: Sanhedrin 69b and 101b cited for a motive they do not give
**Where:** note 15:12 ("Ahithophel had a family reason to hate David, as the Talmud suggests (Sanhedrin 69b; 101b)"); chapters.json ch. 16 view J ("the Talmud discusses his family connection to Bathsheba as a possible motive (Sanhedrin 69b, 101b)"); topics.json `ahithophel` ("he had a personal reason to turn against David"); topics.json `bathsheba` uncommon view.
**What is wrong:** Sanhedrin 69b uses the family tree (Ahithophel, Eliam, Bathsheba) for a legal question about how young a boy can father a child. Sanhedrin 101b says Ahithophel saw signs that kingship would come from him and misread them; it came through his granddaughter Bathsheba. The rabbinic motive is **ambition**, not revenge. The revenge-for-Bathsheba motive is a modern suggestion, discussed for example in Levenson and Halpern (JBL 1980) and in popular commentaries. It should be credited to them.
**Fix:** In all three places, credit Sanhedrin 69b with the family tree and 101b with the misread sign of kingship. Credit the revenge motive to modern scholars, by name. State the Ahithophel–Eliam–Bathsheba link as possible ("if this Eliam is the same man"), as the 11:3 note already does.

### 6. Major: 15:24 nearly copies the NIV, and its interpretive choice is never disclosed
**Where:** plain.txt 15:24, "and Abiathar offered sacrifices until all the people had finished passing out of the city."
**What is wrong:** The NIV reads "Abiathar offered sacrifices until all the people had finished leaving the city." Ten words of the Plain English Translation run in the same order, with one verb changed. The Hebrew וַיַּעַל אֶבְיָתָר means only "and Abiathar went up." "Offered sacrifices" is one interpretation (taking *he'elah* in its cultic sense). Others: Abiathar "came up" and joined, or he went up the hill. The ESV and KJV read "came up / went up." The Plain English Translation gives the NIV's interpretation in the NIV's words and has no note.
**Fix:** Build it from the Hebrew again, for example "Abiathar went up, until all the people had finished leaving the city," or "Abiathar went up to offer sacrifice while…". Add a short `word`/`deb` note on וַיַּעַל ("went up" or "offered up"). Also note the oddity that Abiathar appears without his ark-bearing Levites.

### 7. Major: 13:16 leaves out 4QSam-a support for the Greek and misjudges the Greek as a result
**Where:** variants.json 13:16.
**What is wrong:** The entry cites only MT and the LXX and calls the Greek "a repaired text." The published scroll edition, rendered at dssenglishbible.com (2 Samuel 13), shows 4QSam-a here with "Tamar said to him, 'No, my brother, for this great wrong in sending me away is worse than the other…'". That agrees with the Greek's "my brother" and its smoother syntax. If the scroll has this reading, the smooth text existed in Hebrew, and "repaired" is not a fair description. (The NRSV follows it: "No, my brother; for this wrong…".)
**Fix:** Check DJD 17 (4Q51 at 13:16). Add 4QSam-a to the Greek reading if confirmed. Revise the `why` and consider following the scroll and the Greek ("No, my brother!"). That would also fit 13:12, "No, my brother!"

### 8. Minor: small ESV echoes
**Where:** plain.txt 11:16, 11:8, 12:13, 17:3.
**What is wrong:**
- 11:16 "assigned Uriah to a spot where he knew there were valiant men" follows the ESV's "assigned Uriah to the position where he knew there were valiant men" almost word for word.
- Smaller matches: 11:8 "a present from the king" (ESV), 12:13 "has put away your sin" (ESV, KJV), 17:3 "and all the people will be at peace" (ESV).
- These are partly forced by the Hebrew. 11:16 is the only one long enough to need redoing.
- The other terms checked (16:7 "worthless man" from terms.json; 15:6 "stole the hearts," which is literal and KJV) are not drift.

**Fix:** Redo 11:16, for example "he posted Uriah at the place where he knew the enemy's strongest fighters were." The gloss can then be dropped. Optionally vary 11:8 ("a gift from the king's table").

### 9. Minor: 12:30 witnesses misreported
**Where:** variants.json 12:30.
**What is wrong:** Rahlfs reads τὸν στέφανον **Μελχολ** τοῦ βασιλέως αὐτῶν, "Melchol their king," not "Molchom." The Greek has *both* the name and "their king," so it is a doublet, not a clean "Milcom's crown." The Vulgate at 2 Samuel 12:30 reads *diadema regis eorum*, "their king's crown." Its *Melchom* is at 1 Chronicles 20:2.
**Fix:** Correct the Greek form. Describe it as a doublet. Move the Vulgate to the "their king" side, or cite Vulgate 1 Chronicles 20:2 for Melchom.

### 10. Minor: 12:31 merges Chronicles with the KJV
**Where:** variants.json 12:31, second reading.
**What is wrong:** The reading is labeled "1 Chronicles 20:3 …; KJV in both places." Its `plain` includes "made them pass through the brick kiln," but 1 Chronicles 20:3 has no brick-kiln clause at all. Its third tool is "saws" (*megerot*), not "axes." The reading as written is the KJV of Samuel, not Chronicles.
**Fix:** Either split it (Chronicles: "cut them with saws, iron picks and saws"; KJV of Samuel: the torture reading with the brick kiln), or label the reading "KJV (reading Samuel in the light of 1 Chronicles 20:3)."

### 11. Minor: 13:37 leaves out the scroll's support for the Ketiv and a plus
**Where:** variants.json 13:37.
**What is wrong:** 4QSam-a reportedly reads **Ammihur**, the Ketiv. It also adds "in the land of [M…]," and the LXX has a similar plus. Leaving these out makes the Qere look better attested than it is.
**Fix:** Add 4QSam-a to the Ammihur reading, and mention the plus about the land of Geshur or Maacah. The choice can stand.

### 12. Minor: smaller variants missing or thin
**Where and what:**
- **12:16.** The published scroll text, as rendered at dssenglishbible.com, appears to lack MT's וְלָן, "and spent the night." The entry's own scroll Hebrew lacks it too, but the Plain English Translation keeps "lay all night" and the entry says nothing. Mention it, or drop "all night" if you follow the scroll.
- **16:12.** The Ketiv "my guilt," the Qere "my eye," and the reading of the old versions are well handled. But Masoretic lists of *tiqqune soferim* include this verse (an original "his eye"?). Add a sentence to the `b`.
- **17:25.** LXX-A reads "the Jezreelite." Some Greek witnesses replace Nahash with Jesse, matching 1 Chronicles 2:16. Add both to the entry; the note covers the issue only in prose.
- **15:28.** 4QSam-a reportedly reads "fords," which supports the Ketiv the Plain English Translation follows. Add it if DJD 17 confirms it.
- **18:9.** MT has וַיֻּתַּן, "was set, put." The LXX has ἐκρεμάσθη, "was hung," as perhaps does 4QSam-a. The Plain English Translation's "lifted up" matches neither exactly. Consider an entry, or at least a note.
- **12:9.** The Ketiv "his eyes" (with the LXX) and the Qere "my eyes." This is optional, because the meaning hardly changes.

### 13. Minor: 11:2 note cites the wrong woman in Esther
**Where:** note 11:2 ("…Rebekah (Genesis 24:16) and Esther (Esther 1:11)").
**What is wrong:** Esther 1:11 describes **Vashti**. Esther herself is "lovely of form and good of appearance" at Esther 2:7.
**Fix:** "…and Queen Vashti (Esther 1:11; compare Esther 2:7)."

### 14. Minor: 17:23 "Unlike Saul he is buried in his family tomb"
**Where:** note 17:23.
**What is wrong:** Saul's bones were later buried in his father Kish's tomb (21:14).
**Fix:** Drop the comparison, or say "unlike Saul, whose body was first hung on the wall of Beth-shan (1 Samuel 31:10)."

### 15. Minor: who named Jedidiah (12:25)
**Where:** plain.txt 12:25; chapters.json ch. 12 summary.
**What is wrong:** The Hebrew "he sent by the hand of Nathan the prophet, and called his name Jedidiah" does not say who did the naming. The LORD through Nathan is the most common reading. The Plain English Translation makes Nathan the namer ("who named him"). The chapter summary says the LORD "names Jedidiah," so the two contradict each other.
**Fix:** Keep the ambiguity: "and he sent word through Nathan the prophet, and he named him Jedidiah because of the LORD." Or add a `deb` note, and make the summary match.

### 16. Minor: 11:4 "at the time" contradicts the note
**Where:** plain.txt 11:4; note 11:4.
**What is wrong:** The note says most scholars take the clause as background ("she had been purifying herself"). Yet the Plain English Translation's "at the time" points to the minority reading, in which it happens during the visit.
**Fix:** "She had been purifying herself from her uncleanness," or drop "at the time."

### 17. Minor: Tamar's "not done" idiom does not match Genesis 34:7
**Where:** plain.txt 13:12.
**What is wrong:** The Hebrew כִּי לֹא־יֵעָשֶׂה כֵן בְּיִשְׂרָאֵל is the same idiom as Genesis 34:7, וְכֵן לֹא יֵעָשֶׂה. The site renders Genesis as "such a thing is not done," but 13:12 has "Things like this are not done in Israel." Everything else matches: "dishonor" ('innah, from terms.json, as in Genesis 34:2 and Judges 19:24), "this disgraceful thing" (Judges 19:23), "overpowered" (Deuteronomy 22:25), and "lay with her" for the object construction, as in Genesis 34:2.
**Fix:** "Such a thing is not done in Israel." Then the echo note and the `sexual-violence` contribution can quote it exactly.

### 18. Minor: David's repentance lacks its sceptical reading, and the Psalm 51 liturgy claims are shaky
**Where:** notes 12:13 (both), 12:20; chapters.json ch. 12 readings and views J and X; topics.json `repentance`.
**What is wrong:**
- (a) Every place presents the confession only as the model of repentance. The strongest critical and literary counter-reading is missing. David confesses "against the LORD," not against Uriah or Bathsheba (compare Psalm 51:4, "against you, you alone"). He never makes amends. His quick recovery in 12:20–23 has been read as self-interest as much as faith (for example Exum, and Gunn's `gunn-david`). Some contrast how lightly David is treated with Saul's rejection after the same words. Psalm 51's dating is handled well.
- (b) The liturgy claims do not agree. The note says "Jews read it on fast days," and view J says "Psalm 51 is read on Yom Kippur eve and in penitential prayers." Both are vague and differ from each other.

**Fix:** Add a short "readers who doubt" paragraph, with names, to the 12:13 note or the ch. 12 deep section. Replace the liturgy claims with one sourced statement, for example its use in some Selichot rites and in Tikkun Chatzot, or drop them.

### 19. Minor: Bathsheba is mostly fair, with a few gaps
**Where:** note 11:4; ch. 11 deep "Bathsheba: three readings"; topics.json `bathsheba`.
**What is good:** All three readings (complicit, victim of royal power, silent character) are given with named defenders, in sober language, and agree that David is to blame.
**Gaps:**
- (a) "Some older interpreters" is vague. Name them, or drop them.
- (b) George Nicol is cited but has no source key. He wrote "Bathsheba, a Clever Woman?" (*ExpTim* 99, 1988) and "The Alleged Rape of Bathsheba" (*JSOT* 73, 1997).
- (c) The strongest traditional Jewish reading of her status is spread over other notes. Bring it here, to the place where readers look for "her side": the soldiers' conditional divorce (Shabbat 56a), so that she was legally unmarried, and the saying that she was destined for David from creation (Sanhedrin 107a).
- (d) In the victim paragraph, "The bath was a religious act of purification (11:4), not a display" is stated as fact. Make it that view's argument ("they note that…").

### 20. Minor: 12:6 note's "some lists put Adonijah in place of Tamar" has no source
**Where:** note 12:6.
**Fix:** Cite the midrash (for example Pesikta Rabbati or Ruth Rabbah, whichever it is) or delete.

### 21. Minor: several glosses mislead or add nothing
**Where:** glosses.json.
**What is wrong:**
- 14:7 "the one ember I have left" → "my last spark of hope." Wrong: the ember is her last son, her husband's line, as note 14:7 says. Use "my only remaining son."
- 11:25 "In war, you win some, you lose some." This misses the point that anyone may die. Use "In war, anyone can get killed."
- 12:13 "let your sin go by." This sounds like "overlooked." Use "taken your sin away."
- 15:6 "fooled the hearts." This is not idiomatic. Use "won them over by trickery."
- 16:21 "grow bolder" → "be strengthened." This is no more modern than the original. Use "take heart."

### 22. Minor: problems in the topic cores
**Where and what:**
- `bathsheba` aka "Bath-shua." That is also the name of Judah's Canaanite wife (Genesis 38:12; 1 Chronicles 2:3), so a search for it will land on the wrong woman. Use "Bath-shua daughter of Ammiel," or drop it.
- The `sexual-violence` core's aka includes "the rape of Tamar," which now belongs to `amnon-and-tamar`. Ask that topic's owner to move it, and add it to `amnon-and-tamar`'s aka.
- `absalom` lead "famous for his good looks and long hair." The site's own notes (14:26, 18:9) say the hair was heavy and cut every year, and that the hair-hanging comes from later tradition. Use "his good looks and his heavy hair."
- `parables` lead: "Hebrew mashal covers proverbs, riddles and parables alike." The riddle is usually *chidah*, paired with *mashal* (Psalm 78:2; Ezekiel 17:2), so say "proverbs, taunts, oracles and parables." Consider `"related"` links to the existing `nathan` (whose aka includes "Nathan's parable") and to a kingdom-of-God topic if one exists.
- `amnon-and-tamar` is fine as kind "People."

### 23. Minor: mechanics and loose ends
**Where and what:**
- Note 13:12 shows the reader an internal file path: "(see content/terms.json)." Use "This site renders it 'dishonor' throughout."
- Note 12:13 (Psalm 51) cites `midrash-tehillim`, but no claim in it comes from that work. Add the point it supports, or remove the key.
- Note 18:33 says "Josquin." *Absalon, fili mi* is now usually doubted as Josquin's and often given to Pierre de La Rue. Use "music attributed to Josquin."
- The 11:22 variant's Greek reading renders πληγήσεσθε ἀπὸ τοῦ τείχους as "they would shoot from the wall." The Greek means "you would be struck from the wall," and it names the town Thamasi, not Thebez. Adjust the Greek reading's English and `plain`.

### 24. Minor: two small translation points
**Where and what:**
- 17:22 "not one person was missing who had not crossed the Jordan." The double negative is hard at an 8th-grade level. Use "by morning light not one of them was left who had not crossed," or better, "by morning light everyone had crossed the Jordan; not one was left behind."
- 13:37 "And David kept mourning." The MT has no subject; the LXX supplies "King David." Supplying the name is fine for clarity, but either mark it with a short note or keep "And he kept mourning."

### 25. Minor (tools, not the writer): `texts/orig/2Sa.json` puts words that are not in the Masoretic Text into the `wlc` text
**Where:** `texts/orig/2Sa.json` 12:16 (בַּשָּׂק), 13:34 (the whole lookout plus), 15:8 (בְּחֶבְרוֹן), all flagged "X" in the word list.
**What is wrong:** The `wlc` string and `literal.js` show these as if they were in the Leningrad Codex. The writer handled them correctly. A future writer or reviewer could be misled into thinking MT contains them.
**Fix:** In `texts.py` or `literal.js`, bracket or drop words flagged "X," or print a warning.

### 26. Minor: "Things like this" also appears in a topic contribution, and the 13:12 echo quotes need re-syncing after finding 17
**Where:** topics.json `sexual-violence` ("Do not dishonor me. Things like this are not done in Israel…").
**Fix:** After changing 13:12 (finding 17), update this quotation so the build's quotation check keeps passing.

## Fixes applied

All edits were made in the part files; `texts/orig` and the tools were not touched. `node tools/build.js --check 2Sa/11-18` and `--check 2Sa` both report 0 errors and 0 warnings.

**Major findings**
1. **12:14.** The Plain English Translation now follows 4QSam-a: "you have utterly scorned the word of the LORD", without "so openly". The variant has three readings: 4QSam-a (followed); MT and LXX "the LORD's enemies"; and the bare conjecture, labeled as having no manuscript. It cites DJD 17 and Parry (new key `parry-word-enemies`), and keeps the KJV in `b`. The 12:13 note now refers to contempt for the LORD's word.
2. **Kaige.** The LXX label now reads "Rahlfs (mainly Codex Vaticanus) … in these chapters the kaige revision". Every variant entry with a Greek witness now has a `b` sentence. It says that 11:2 – 1 Kgs 2:11 is the kaige section, that Vaticanus there is revised toward the Hebrew, and that the Lucianic text is the better Old Greek witness. Those entries now cite `barthelemy-devanciers` and `fernandez-marcos-antioqueno`. The Greek pluses at 11:22, 13:21, 13:27, 13:34 and 14:30 add that a plus surviving the revision weighs more. 15:7 was reweighed: Vaticanus's "forty" is treated as assimilation, and the Lucianic "four" as the Old Greek. Chapter 11 has a new deep section, "Weighing the Greek in these chapters."
3. **14:30.** The Plain English Translation now includes the report by Joab's servants. The variant follows 4QSam-c (4Q53), the Greek and the Vulgate (new key `ulrich-4qsamc`) and explains the homoioteleuton. The note was updated.
4. **13:39 / 14:1.** The note was rewritten. The Greek *ekopasen* and the Vulgate read "ceased (to pursue)", and McCarter's "gave up marching out against Absalom" is presented as a serious reading. The 14:1 note follows from this, and the variant glosses now say "ceased (was spent)".
5. **Sanhedrin 69b/101b.** In the 15:12 note, ch. 16 view J and the `ahithophel` and `bathsheba` topic sections, 69b is given only for the family tree and 101b for the motive of ambition. The revenge motive is credited to modern commentators.
6. **15:24.** The verse was redone from the literal and the re-audit is logged. A new `deb` note covers *wayya'al* ("went up" or "offered sacrifices") and the odd absence of the Levites when Abiathar appears.
7. **13:16.** The variant is hedged: 4QSam-a may support the Greek "No, my brother", but this is not checked. "Repaired text" was dropped.

**Minor findings**
- **8.** 11:16 was redone, 11:8 now reads "a gift from the king's table", and both glosses were removed. I kept 12:13 "put away your sin" and 17:3, because the Hebrew forces that wording, as the review itself says.
- **9.** At 12:30 the Greek is now "Melchol their king", described as a doublet. The Vulgate *diadema regis eorum* moved to the "their king" side, with a pointer to Melchom at 1 Chr 20:2.
- **10.** The 12:31 second reading is relabeled "KJV (reading Samuel in the light of 1 Chronicles 20:3)".
- **11.** At 13:37 the scroll's reported Ammihur and its "in the land of M…" plus were added, hedged. The choice stands.
- **12.** 12:16 notes that the scroll appears to lack "spent the night". 16:12 adds a hedged `b` on the *tiqqune soferim* lists. 17:25 adds the reported Greek "Jezreelite" and "Jesse", hedged. 15:28 adds the reported 4QSam-a "fords", hedged. At 18:9 the Plain English Translation is now "was left", and the note gives MT *wayyuttan* against the Greek "was hung". I skipped 12:9 because the reviewer marked it optional and the meaning does not change.
- **13–16.** 11:2 now refers to Vashti (Esther 1:11). 17:23 now reads "unlike Saul, whose body was first hung on the wall of Beth-shan". 12:25 now reads "sent word by Nathan … named him Jedidiah", and 12:24 has a note on who named him. 11:4 now reads "had been purifying herself".
- **17 / 26.** 13:12 now reads "Such a thing is not done in Israel", matching Gen 34:7. The echo-note anchor and the `sexual-violence` topic quote were synced.
- **18.** Chapter 12 has a new deep section, "A sceptical reading of David's repentance" (Gunn), with the other side's answer. The view J and X liturgy claims were narrowed to statements I can stand behind, and the vague "fast days" line in the note was replaced.
- **19.** "Older interpreters" was replaced by Nicol (new key `nicol-bathsheba`). The Shabbat 56a and Sanhedrin 107a reading was added to the deep section, the bath is now presented as that view's argument, and the topic's uncommon view is credited to modern scholars.
- **20.** The unsourced Adonijah clause in 12:6 was removed.
- **21.** All five glosses were changed as suggested.
- **22.** In the `bathsheba` aka, "Bath-shua" became "Bath-shua daughter of Ammiel". The `absalom` lead now says "his heavy hair". The `parables` lead now says "proverbs, taunts, oracles and parables", and it already relates to `nathan`. I did not add "the rape of Tamar" to `amnon-and-tamar`, because it is still an alias of `sexual-violence` and would collide. That topic's owner needs to move it.
- **23.** The internal path was removed from the 13:12 note. The `midrash-tehillim` key was removed. "Josquin" became "a motet attributed to Josquin". The 11:22 Greek now reads "you would be struck from the wall … Thamasi".
- **24.** 17:22 was simplified. 13:37 now has a note that the Greek supplies "King David".
- **25.** This is a tools issue, so I left it to the coordinator as instructed.

Drift re-audit: only the rewritten verses (11:4, 11:8, 11:16, 12:14, 12:25, 13:12, 14:30, 15:24, 17:22, 18:9) were re-audited, logging verse, outcome and reason only.
