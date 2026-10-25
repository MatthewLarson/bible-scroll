# Hostile review: 2 Samuel 19–24 (part 19-24)

Reviewer brief: `tools/agent-reviewer.md`. Scope: `content/books/2Sa/parts/19-24/`, the new topic cores `content/topics/satan.json` and `content/topics/mighty-men.json`, and the new shared source keys in `content/sources.json`. `book.json` and the other parts were not reviewed.

## Verdict

This is a strong, careful part. The Plain English follows the Masoretic Text closely across all 206 verses. Chapter 22 is set as poetry. The notes are dense and mostly accurate. Variant entries are generally honest about what is reported and what was checked. `node tools/build.js --check 2Sa/19-24` passes with 0 errors and 0 warnings, quotation check included. The problems fall into five groups. (1) The new shared term beliyya'al = "worthless" is not applied at 20:1 or 23:6, although the parts before this one already use "worthless man" (2 Samuel 6:20; 16:7). (2) Several verses match the NIV closely, and 20:17 is almost word for word. (3) The 4QSam-a Hebrew at 24:16 and 24:20 is bracketed in a way that presents restored text as preserved, even though the entries call it a "simplified sample". The 24:20 entry also leaves out the sackcloth detail and the post-1999 scholarship that questions the reconstruction. (4) A cluster of variants that the NRSV, ESV or NIV follow or footnote has no `variants.json` entry. The Plain also silently adopts one emendation ("son of" at 23:33), and it follows "the Thirty" at 23:18 but then contradicts itself at 23:19. (5) On the census, the fairness sections leave out the main rabbinic explanations (Berakhot 62b; Yoma 22b with Hosea 2:1), and the 24:13 harmonization is garbled. No finding is critical.

**Counts: 0 critical, 9 major, 18 minor.**

## Findings

### Major

**1. Major: shared term beliyya'al not followed (20:1, 23:6).**
- Location: `plain.txt` 20:1 "A good-for-nothing man"; 23:6 "the good-for-nothing". Dependents: `notes.json` 20:1 anchor "A good-for-nothing man"; 23:6 anchor "the good-for-nothing are thorns" and body "the good-for-nothing (Hebrew <i>beliya'al</i>...)"; 22:5 note body "the word used of good-for-nothing men"; `chapters.json` ch. 23 sum[0] "The good-for-nothing, by contrast".
- Evidence: 20:1 אִישׁ בְּלִיַּעַל; 23:6 וּבְלִיַּעַל. `content/terms.json`: "beliyya'al (men/sons of belial)" = "worthless (a worthless man, worthless men)". The other parts already follow it: 2 Samuel 16:7 "you worthless man!"; 6:20 "some worthless man"; 1 Samuel 2:12, 10:27, 25:17, 25:25, 30:22 "worthless". The 20:1 note itself says "Shimei called David the same thing (16:7)", but the English shows two different words.
- Fix: 20:1 "A worthless man happened to be there..."; 23:6 "But the worthless are thorns, all of them...". Update the note anchors, the 22:5 note body ("the word used of worthless men") and the ch. 23 summary. 22:5 "floods of ruin" can stay, since the term covers persons. The 22:5 note already explains the link.

**2. Major: NIV wording drift.**
STYLE requires close matches to be redone. Matches are described below, with only a few words of the other version quoted.
- 20:17. Plain: "Listen to what your servant has to say." "I'm listening," he said. The NIV has the same two sentences word for word (checked: NIV "Listen to what your servant has to say."). Together with "Are you Joab?" "I am," he said, the whole verse is the NIV's. The Hebrew is shim'i divrei amatekha ... shomea' anokhi, "hear the words of your maidservant ... I am hearing". Redo it, for example: "Hear your servant's words." "I hear you," he said.
- 20:6. "will do us more harm than Absalom did. Take your master's servants..." follows the NIV sentence ("will do us more harm than Absalom"; "Take your master's men") clause by clause. Hebrew: yera' lanu ... min-Avshalom, "will be worse for us than Absalom". Suggest: "Sheba son of Bichri will be worse for us than Absalom was. Take your lord's servants and go after him..."
- 22:51. "He gives his king great rescues; he shows loyal love to his anointed, to David and his line for all time" keeps the NIV's skeleton ("He gives his king great victories; he shows ... to his anointed, to David and his descendants forever") and swaps synonyms. The Hebrew is magdil yeshu'ot malko, "making great the rescues of his king". Suggest: "He makes great the rescues of his king..."
- 24:16. "The LORD's angel was then beside the threshing floor..." The "then" is the NIV's ("was then at the threshing floor"). The Hebrew has hayah 'im, "was by". Drop "then", or recast: "The LORD's angel was by the threshing floor..."
- Lesser matches, to vary while redoing the above. 20:3 "put them in a house under guard. He provided for them, but..." (NIV/ESV). 21:10 "took sackcloth and spread it out for herself on [the] rock ... rain poured down" (NIV). 19:26 "I will have the donkey saddled" (NIV's causative "I will have my donkey saddled"; Hebrew echbeshah, "let me saddle"). 23:11 "Next to him was Shammah son of Agee the Hararite" (NIV verbatim). 23:5 "arranged in every part and kept safe" (NIV "arranged and secured in every part"). 23:1 "the darling of Israel's songs" adopts the NIV's distinctive interpretive choice ("the hero of Israel's songs"). The choice is defensible, but the note should say the NIV takes the same option. "Ten shares in the king" (19:43) is in the NIV, ESV and RSV but is a long-standing rendering; leave it.

**3. Major: 4QSam-a at 24:16 and 24:20 presented with misleading brackets, incomplete content, and dated scholarship.**
- Location: `variants.json` 24:16, 24:20; `chapters.json` ch. 24 deep "4QSam-a and the text of chapter 24"; `topics.json` textual-history and angel-of-the-lord.
- 24:16 `orig`: `[וישא דויד את עיניו וירא את מלאך יהוה עמד בין] הארץ ובין השמים וחרבו שלופה בידו נטויה על ירושלים...`. Only the first half is bracketed, so a reader will take "הארץ ובין השמים וחרבו שלופה בידו נטויה על ירושלים" as preserved letters. That wording is Chronicles' (1 Chronicles 21:16 עֹמֵד, שְׁלוּפָה). The entry's `b` admits the line is "a simplified sample, not a transcription" and that DJD 17 was not consulted, so the bracketing claims more than the writer can support. The scroll's distinctive wording for the elders also matters (reported as "covered in sackcloth", mitkassim, against Chronicles' mekhussim). It cannot be checked from what is given.
- 24:20 `orig`: `[ו]ארנא דש חטים`. Only the vav is bracketed, which implies the scroll preserves "Arna threshing wheat". The Dead Sea Scrolls Bible translation site (dssenglishbible.com, 2 Samuel 24) marks this reconstruction as "speculative". The same source reports a second plus in 24:20 that the entry leaves out: the king's servants come toward Araunah "covered in sackcloth" (compare 24:16). The scroll's spelling ארנא (Arna) is not explained anywhere, although the 24:16 note discusses the name's spellings.
- Newer work is not used. Frank Moore Cross, "A New Reconstruction of 4QSamuela 24:16–22," in *Studies in the Hebrew Bible, Qumran, and the Septuagint Presented to Eugene Ulrich* (VTSup 101; 2006), 77–83. Innocent Himbaza, "4QSama (2 Sam 24:16–22): Its Reading, Where it Stands in the History of the Text and its Use in Bible Translations," in Hugo and Schenker, eds., *Archaeology of the Books of Samuel* (VTSup 132; 2010), 39–52. Both studies postdate Ulrich (1978) and McCarter (1984), which the entries rely on, and they deal with exactly how much of these lines is preserved and what follows from it.
- The deep section's conclusion is stated as fact: "These readings show that the Chronicler worked from a Hebrew text of Samuel like the scroll's." That is the majority view (Ulrich, McKenzie), but it is disputed for this passage. Label it.
- Fix: (a) Put all restored Hebrew in brackets, or drop the Hebrew and give the English with "reconstructed after 1 Chronicles 21:16/21:20". (b) Add the servants-in-sackcloth plus to 24:20 as reported. (c) Add source keys for Cross 2006 and Himbaza 2010 and say that the extent of the plus is debated. (d) Reword the deep section to "Most scholars conclude...". The variant entry dates the scroll "about 50–25 BC"; that is Cross's DJD date and is fine.

**4. Major: 23:18–19, the Plain contradicts its own variant.**
- `variants.json` 23:18 follows "head of the Thirty". Its reason is that Abishai "never came up to the Three, so he cannot have been their chief". But the Plain keeps 23:19 "He was honored above the Three, was he not? He became their captain. But he never came up to the Three". That makes him captain of the Three and not equal to the Three in the same verse, which is the contradiction the variant was meant to remove. 23:18b "made a name for himself among the Three" has the same problem.
- Evidence: 23:19 MT מִן־הַשְּׁלֹשָׁה הֲכִי נִכְבָּד; 1 Chronicles 11:20–21 is itself confused (Ketiv/Qere). The NRSV, which follows "Thirty" at 23:18, also reads "the Thirty" in 23:19 ("He was the most renowned of the Thirty...").
- Fix: add a 23:19 variant ("the Three" or "the Thirty", Syriac and the NRSV), and either follow "Thirty" there too or explain in the 23:18 `why` that 23:19 keeps a tension. State plainly that the NIV, BSB and KJV keep "the Three" at 23:18.

**5. Major: 23:33, an emendation adopted silently.**
- The Plain reads "Jonathan / son of Shammah the Hararite". The MT has no "son of" (יְהוֹנָתָן׃ שַׁמָּה הַהֲרָרִי). The STEPBible word list marks בֶּן־ as an added word (`texts/auto` 23:33 kind X). The 23:32 note discusses restoring "Jonathan son of Shammah (or Shagee)", but nothing tells the reader that the Plain already does so, and there is no `variants.json` entry. The KJV reads "Jonathan, Shammah the Hararite" as two men.
- Fix: add a variant (MT "Jonathan, Shammah the Hararite"; "Jonathan son of Shagee" in 1 Chronicles 11:34; "son of" in some Greek and in modern translations), with follow and why. Also check the count note at 23:39, because the count changes with this choice.

**6. Major: missing variants that major translations follow or footnote.**
STYLE requires an entry wherever "a major English translation footnotes" the reading. A note is not a substitute ("prefer variants.json").
- 21:6 "at Gibeah of Saul, the LORD's chosen one". The Greek reads "in Gibeon" (ἐν Γαβαων). With 21:9 "on the mountain", that gives the NRSV's "at Gibeon on the mountain of the LORD" (בהר יהוה for בחיר יהוה). The 21:6 note mentions the "mountain" conjecture but leaves out the Greek "Gibeon" and the NRSV.
- 20:14 "the Berites". The NIV ("Bikrites"), ESV and NRSV ("Bichrites") all emend. The 20:14 note says only "some modern translations". It needs an entry, with the Vulgate's electi correctly cited (the note already has it) and the Greek ἐν Χαρρι.
- 23:20 "the two lion-men of Moab". The NRSV follows the Greek, "two sons of Ariel of Moab". The Ketiv חַי / Qere חַיִל ("son of a living man" or "son of a valiant man") is also unmentioned.
- 24:2 "Joab, commander of the army, who was with him". The Greek and 1 Chronicles 21:2 read "Joab and the commanders of the army", and the NIV and NRSV follow it. That reading also fits 24:4 ("Joab and the commanders").
- 24:5 "set up camp in Aroer". The Greek (Lucianic) reads "they began from Aroer", and the NRSV follows it. The 24:5 note mentions it but there is no entry.
- 23:8. The Josheb-basshebeth, Jashobeam and Ishbaal question is covered only by a note. The Lucianic Greek form ("Iesbaal") is the witness for the "Ishbaal" theory and should be cited as a reading. The Plain's "chief of the Three" for MT רֹאשׁ הַשָּׁלִשִׁי ("chief of the officers"; KJV "chief among the captains") also has no entry. The 23:8 "Three and Thirty" note half-covers it but calls the word "the written Hebrew", which suggests a Ketiv/Qere where there is none.
- 23:1 "the man set up on high". The 4QSam-a and Greek reading "the man God raised up" is followed by the NRSV ("the man whom God exalted", checked). It is in a note only and should be a variant entry.
- 24:9 numbers. Move this into a variant or keep it as a note, but add Josephus's figures (*Antiquities* 7.320: 900,000 and 400,000), a third set of numbers that a careful reader should know.
- 23:13 "At harvest". The MT is אֶל־קָצִיר; 1 Chronicles 11:15 reads אֶל־הַצֻּר, "to the rock". No note or entry.
- 22:3 "My God is my rock". The MT of Samuel is אֱלֹהֵי צוּרִי, "the God of my rock". The Plain silently uses Psalm 18:2's אֵלִי צוּרִי. Add a note or variant, and add 22:3 to the Psalm 18 comparison (finding 8).
- Lucianic Greek in general. Apart from 24:6 and 24:5 (note only), the kaige caveat is repeated three times in `b`, but the Lucianic readings themselves are barely used (19:43, 20:18, 24:13, 24:15 and 24:25 cite "Septuagint" generically). For each Greek reading, say whether it is in Vaticanus (kaige) and/or the Antiochene text. For example, 24:15's "midday meal" plus is in both.

**7. Major: 24:13 variant, garbled and unattributed harmonization.**
- `why`: "Some readers add the three-year famine of 21:1, three years of census-taking, and this famine to reach seven, but that is a guess."
- The census took nine months and twenty days (24:8), not three years. The traditional harmonization is Radak on 24:13 (following rabbinic sources): three past famine years in the Gibeonite story (21:1), three more now threatened, and a seventh lean year before the next harvest. Chronicles counts only the new three.
- Fix: "Jewish commentators such as Radak count the three famine years of 21:1, three more, and a lean seventh year before harvest, so that Chronicles gives only the new three." Give the source, and drop "a guess" or attribute that judgment.

**8. Major: the Psalm 18 comparison is incomplete (and one note is wrong).**
- Location: `chapters.json` ch. 22 deep "2 Samuel 22 and Psalm 18 compared"; `notes.json` 22:29.
- The list calls itself "the main ones", but it leaves out differences as large as those it includes. Some of these are already covered in this part's own notes and should at least be cross-listed.
- 22:3: Samuel "God of my rock" against Psalm "my God, my rock". Samuel's extra "my refuge, my savior; you save me from violence" is absent from Psalm 18:2.
- 22:12: Psalm 18:11 adds "his hiding place" (סִתְרוֹ). Samuel חַשְׁרַת־מַיִם ("massing of waters") against Psalm חֶשְׁכַת־מַיִם ("darkness of waters").
- 22:14: "from heaven" against "in the heavens", and Psalm 18:13 adds "hail and coals of fire".
- 22:15: "lightning" (בָּרָק) against "lightnings he shot" (בְרָקִים רָב).
- 22:16: "channels of the sea" against "channels of water".
- 22:26: גִּבּוֹר ("hero") against גְּבַר ("man").
- 22:33 second line: וַיַּתֵּר ("set free") against וַיִּתֵּן ("made"). The Plain's "free and whole" depends on this.
- 22:34: Ketiv "his feet".
- 22:38: "destroyed them" against "overtook them".
- 22:39: Samuel's extra "I made an end of them".
- 22:42: "looked" against "cried for help". The note exists, but the item is missing from the list.
- 22:43: "dust of the earth ... I crushed and stamped them" against "dust before the wind ... I emptied them out".
- 22:45: the two lines are in reverse order.
- 22:47: "God of the rock of my rescue" against "God of my rescue".
- 22:48: "brings down" (מוֹרִיד) against "subdues" (וַיַּדְבֵּר).
- 22:49: "brings me out" (מוֹצִיאִי) against "rescues me" (מְפַלְּטִי).
- The 22:29 note says the difference "may be a single letter". It is not. Psalm 18:28 has a whole extra verb (כִּי־אַתָּה תָּאִיר נֵרִי against Samuel's כִּי־אַתָּה נֵירִי).
- Fix: complete the list (a two-column table would read better) and correct the 22:29 note.

**9. Major: fairness on 24:1 and on the census sin leaves out the main Jewish readings.**
- 24:1 ("the LORD incited" against Satan; note 24:1 "The LORD or Satan?", ch. 24 deep, satan topic contribution). The four views are fairly stated and none is caricatured. But: (a) The best-known rabbinic reading of 24:1 is missing. In Bavli Berakhot 62b, God tells David that because he called God an "inciter" (1 Samuel 26:19, the same verb, הֵסִית), God will make him stumble over something schoolchildren know, the half-shekel of Exodus 30:12. Rashi on 24:1 says only "I do not know what [Israel did]", which also supports the "hidden cause" view and should be cited. (b) Peggy Day is placed under view 3 ("development"). Her monograph argues that śāṭān is a common noun naming various adversaries, human or divine, and that there is no single figure "Satan" in the Hebrew Bible. That is closer to view 2. (c) View 1 is labeled "the usual traditional reading, Jewish and Christian" without a Jewish source. Cite one, or soften the label.
- The census sin (note 24:1 "What was wrong with a census?", census topic). Three views are given: Exodus 30 ransom (Josephus), trust in numbers, taxes and labor. Missing:
  - (a) The rabbinic rule against counting Israelites directly by head, from Hosea 2:1 (English 1:10: "cannot be measured or counted"). Bavli Yoma 22b makes this a prohibition and contrasts Saul counting by tokens (1 Samuel 15:4).
  - (b) Doubt of the promise to Abraham, using the verses the writer already cites but never explains. 1 Chronicles 27:23 says David did not count those under twenty "because the LORD had promised to make Israel as many as the stars" (Genesis 15:5). Joab's "a hundred times more" (24:3) echoes it.
  - (c) Medieval Jewish readings (Ramban on Numbers 1:3: counting without need or command).
  - (d) The Chronicler's own verdict, "why should it become guilt for Israel?" (1 Chronicles 21:3).
- Fix: add these views to the 24:1 census note and the census topic contribution, with sources (bavli-berakhot, bavli-yoma, Ramban), and move Day to view 2 or describe her thesis accurately.

### Minor

10. **Minor: Gibeonites and Rizpah, the three readings (note 21:9; ch. 21 deep "three readings"; justice and hanged-on-a-tree topics).** The readings are fair but not quite at full strength. (a) The "theological problem" reading says God answered "only after the bones are buried, not after the executions". But 21:10 says Rizpah watched "until rain poured down on them", so the rain, the sign of the drought's end, fell while the bodies still hung. Many commentators (McCarter) read it that way. Give this counterpoint, or the reading looks stronger than the text allows. (b) For the justice reading, add that the narrator has God himself name the cause (21:1), and that Yevamot 78b–79a addresses Deuteronomy 21:23 and the problem of the hanging bodies directly, not only the general maxim. (c) For the purge reading, name its proponents (McCarter, Halpern, McKenzie), and note that David chooses which descendants die (21:7–8).
11. **Minor: 24:17 variant, witnesses.** BSB is listed under both readings. BSB reads "I, the shepherd, have sinned" (`texts/en` bsb 24:17), so remove it from the MT row. The `why` says haro'eh ("the shepherd") and hare'oti ("I did wrong") sound alike, but the MT verb is he'eviti (הֶעֱוֵיתִי). Hare'oti is the scroll's verb, so the explanation should be: 4QSam-a/LXX הרעה הרעתי against the MT's וְאָנֹכִי הֶעֱוֵיתִי. Also, 1 Chronicles 21:17 וְהָרֵעַ הֲרֵעוֹתִי ("I have done great evil") looks like a reading of the same letters as "the shepherd did evil". It is not simply "similar" to the MT.
12. **Minor: 22:51 variant `why`.** "The consonants are the same; only the vowels and one letter differ" contradicts itself. מגדיל and מגדול differ in a consonant (yod against vav). Also, a Ketiv should be shown unpointed. Otherwise the entry is correct (Ketiv magdil = Psalm 18:50; Qere migdol = KJV "tower"; the grace-after-meals custom is correctly stated).
13. **Minor: 23:1 note on 4QSam-a.** "The difference is a single vowel letter" is wrong. עָל against אל differ in a consonant (ayin against aleph), and הֻקַם against הקים differ in vocalization and a vowel letter. Make this a variant entry (see 6).
14. **Minor: 23:21 note.** It says "'a man of appearance' (written text) or 'a man of size'". The Ketiv is אֲשֶׁר מַרְאֶה ("who was a sight") and the Qere is אִישׁ מַרְאֶה ("a man of appearance"). "A man of size" (אִישׁ מִדָּה) is 1 Chronicles 11:23, not a Samuel reading.
15. **Minor: 24:24 note.** "The Chronicler's figure is twelve times fifty, perhaps a shekel for each tribe." 600 ÷ 12 is fifty per tribe, not one. Fix the arithmetic, and attribute the idea or drop it. (The comparison also mixes silver and gold.)
16. **Minor: 20:21 note and ch. 20 VIEW J flatten a dispute.** The Yerushalmi (Terumot 8:4, 46b) records a dispute. Resh Lakish says the person may be handed over only if liable to death like Sheba. R. Yochanan says it is enough that he was named. Maimonides (Yesodei ha-Torah 5:5) adds that even where it is permitted, "we do not instruct them so" at the outset. The note gives one view as "the" answer.
17. **Minor: 21:8 variant, witnesses.** The Targum is listed for "Michal". As usually reported (Harrington and Saldarini), Targum Jonathan reads "the five sons of Merab, whom Michal ... brought up", that is, both names. Move it, or describe it as a conflation. The `why`'s description of the Talmud (Sanhedrin 19b) and the KJV "brought up" is correct. It could add that the NJPS and NASB read Merab.
18. **Minor: 21:19 variant.** "BSB follows it in part." The BSB follows Chronicles fully ("Elhanan son of Jair the Bethlehemite killed the brother of Goliath"). The NIV does the same.
19. **Minor: 19:43 variant `p`.** "The Greek adds ... The Hebrew instead says 'even in David'" contradicts itself. The Greek has both clauses (καὶ πρωτότοκος ἐγὼ ἢ σύ, καί γε ἐν τῷ Δαυιδ...), as the alternate `plain` correctly assumes. Change "instead" to "and".
20. **Minor: 23:8 variant, Greek.** "The Greek is reported to have the names and also a clause about drawing his weapon." Say it exactly: Vaticanus Αδινων ὁ Ασωναῖος· οὗτος ἐσπάσατο τὴν ῥομφαίαν αὐτοῦ ἐπὶ ὀκτακοσίους, "he drew his sword against eight hundred". Also mention the Ketiv הָעֶצְנוֹ (`texts/auto` 23:8), which is part of the case that "Adino the Eznite" hides a word about a weapon.
21. **Minor: 22:33 variant.** The Greek of Samuel (ὁ κραταιῶν με δυνάμει, "who strengthens me with power") should be quoted, not just called "similar". 4QSam-a is commonly reported to agree with Psalm 18:32 (המאזרני חיל) here. Check this in the DJD 17 / Dead Sea Scrolls Bible apparatus and add it if confirmed; I could not open the page. The second line's verb difference (see 8) also belongs in this entry.
22. **Minor: additions in the Plain.** 19:33 "You fed me;" is not in the Hebrew (אַתָּה עֲבֹר אִתִּי וְכִלְכַּלְתִּי אֹתְךָ עִמָּדִי). 19:36 "What have I done that" adds to "and why should the king repay me this repayment?". 23:17 "This is the blood ... with their lives in their hands!" adds "This is" and "in their hands". That contradicts the 23:17 note, which says "This translation keeps the shorter text". Trim them, or flag them in notes.
23. **Minor: name consistency.** 23:9 "son of Ahohi" (MT בֶּן־אֲחֹחִי) sits beside 23:28 "Zalmon the Ahohite" and 1 Chronicles 11:12 "the Ahohite". Either "son of Ahohi" or "the Ahohite" is defensible, but the 23:9 choice should be noted. The 21:16 note speaks of his "spear's head" weighing 300 shekels, while the Plain says "His spear weighed". Make them match.
24. **Minor: topic overlap, satan.** No `accuser` or `devil` topic exists. `satan` is the right single page, and its aka (the accuser, the devil, Belial, Beelzebul) is appropriate. But Revelation's contribution to `dragon` already holds a full table of Satan's names (devil, Satan, accuser, deceiver), and the `dragon` core links to Wikipedia "Satan". Add `"related":["satan"]` to `dragon.json` (through its owner) and add `synagogue-of-satan` and `evil-spirit` to `satan.json`'s related list. Ideally move Revelation's names table to `satan` in a later pass. In the satan core, "In early texts" and the 19:22 note's "Only in a few late books ... (Job 1–2; Zechariah 3:1–2)" assume a late date for Job. Say "in Job and Zechariah" or label the dating. Tagging the 20:1 beliyya'al note with `top: satan` is a stretch, since Sheba is not Satan. Drop the tag or move it to the Belial sentence only.
25. **Minor: topic overlap, mighty-men.** No duplicate exists, and the lead and section are accurate. But the aka "gibborim" will also catch Genesis 6:4 and 10:8 ("heroes of long ago", used in Genesis's `fallen-angels` contribution). Use "David's gibborim" instead.
26. **Minor: small prose errors.** The ch. 23 summary, "Abishai and Benaiah, who killed a lion in a pit", credits the lion to both men; Benaiah alone killed it (23:20). The 21:2 note carries `s:["bavli-yevamot"]` but cites nothing from it.
27. **Minor: Rashi at 24:14 (checked).** The note and ch. 24 VIEW J are substantially right. Rashi on 24:14 (on Sefaria) explains that famine favors those with grain stores, the sword would look like trust in his warriors, and plague strikes all alike, citing Midrash Tehillim. Since the source key is `rashi-samuel`, say "Rashi, following Midrash Tehillim", and phrase the sword clause as Rashi does (how the choice would look), not as "the king's guards protect him".

### Checked and found sound

- **Build.** `node tools/build.js --check 2Sa/19-24` reported "206 verses, 157 notes, 19 variants, 67 glosses, 6 chapter pages, 30 topic contributions; 0 errors, 0 warnings".
- **Style.** No em-dashes in any file; straight quotes; all 206 verses present and in order; chapter 22 set with ` / ` line breaks throughout; reading level is appropriate.
- **Other terms.** hesed, kipper, chozeh "visionary", shelamim "peace offerings", paqad "enroll", tamim, mishpatim and chuqqim, and meshiach all follow `terms.json`.
- **Variants checked against `texts/auto`.** 20:23 Kerethites (Ketiv הכרי), 20:25 Sheva, 21:21 Shimeah and 22:51 are all correct.
- **New shared source keys.** All seven are real works, correctly cited:
  - `cross-freedman-yahwistic`: SAYP 1975/1997, which includes the 2 Samuel 22 = Psalm 18 study.
  - `craigie-psalms`: WBC 19, 1983.
  - `barthelemy-devanciers`: VTSup 10, 1963.
  - `day-adversary`: HSM 43, 1988.
  - `bavli-bava-kamma`.
  - `yerushalmi-terumot`.
  - `fernandez-marcos-antioqueno`: Fernández Marcos and Busto Saiz, 1989.
- **Notes checked against sources.** Shabbat 56b (the land split, a heavenly voice), Sotah 10b, Bava Kamma 60b, Megillah 31a, Sanhedrin 19b and 69b, Genesis Rabbah 94:9 (Serah), Josephus on the falling sword and the half-shekel, the Mesha "ariel of Dawdoh", Mursili's plague prayers, and Willesen, Mazar, Elliger, Camp and Mettinger are all accurately reported.

## Count by severity

- Critical: 0
- Major: 9 (findings 1–9)
- Minor: 18 (findings 10–27)

## Fixes applied

Applied 2026-10-23 by the part writer. Build: `--check 2Sa/19-24` 0 errors, 0 warnings (206 verses, 158 notes, 31 variants, 67 glosses); `--check 2Sa` 0 errors, 0 warnings.

**Major**
1. "Worthless" at 20:1 and 23:6. Note anchors, the 20:1 note (now points to 16:7 "worthless man"), the 22:5 note body and the ch. 23 summary all updated. Dropped the `top: satan` tag from the 20:1 note.
2. Rebuilt from the literal: 20:17, 20:6, 22:51 ("He makes great the rescues of his king"), 24:16 ("was close to"). The lesser matches were redone too: 20:3, 21:10, 19:26, 23:11 and 23:5. The 23:1 note now says the NIV takes the same option. I left 19:43 as it was, as the review advised. Re-audited 17 rewritten verses; all 17 changed (log in the scratch folder, verse/outcome/reason only).
3. 24:16 and 24:20: removed the bracketed Hebrew. Each now gives the English "as reported, reconstructed after 1 Chronicles 21:16/21:20", with no scroll Hebrew. Added the servants-in-sackcloth plus and the spelling Arna, which is also cross-referenced from the 24:16 Araunah note. Added the *mitkassim*/*mekhussim* detail. New shared keys `cross-4qsama-2006` and `himbaza-4qsama-2010` are cited in both variants, the ch. 24 deep section and the textual-history topic. The deep section now says "Most scholars (Ulrich, McKenzie and others) conclude..." and gives the dissent.
4. 23:18–19: the Plain now reads "the Thirty" in 23:19 too. 23:18b is now "he was famous alongside the Three". There is a new 23:19 variant, labeled honestly as a correction (NRSV) against the MT (KJV, NIV, BSB). The 23:18 `why` states that the NIV, BSB and KJV keep "the Three".
5. 23:33: new variant. It sets the Greek/BHS restoration "son of" (kind X in texts/auto) against MT "Shammah the Hararite" (KJV) and 1 Chronicles 11:34 "son of Shagee". The 23:32 and 23:39 count notes now refer to it.
6. New variants: 20:14, 21:6 (Greek Gibeon; NRSV "mountain"), 22:3, 23:1, 23:8 (Josheb-basshebeth / Lucianic Iesbaal / Vaticanus Iebosthe / Jashobeam), 23:8 ("chief of the Three" / "officers"; the note no longer implies a Ketiv), 23:13, 23:19, 23:20 (with the Ketiv *chai* / Qere *chayil*), 23:33, 24:2 and 24:5. 24:9 stays a note, now with Josephus's figures (*Ant.* 7.320). 22:3 Plain changed to Samuel's "The God of my rock".
   - Kaige: the KAIGE note now gives 2 Sam 11:2–1 Kgs 2:11 and says all of 19–24 is inside it. Every Greek reading label and every Greek mention in the notes now names Vaticanus (kaige) and/or the Lucianic text. Where I have not verified one of the two, the label says "as reported" or says so outright.
7. 24:13: the harmonization is now attributed to Radak (following rabbinic sources): three past years, three more, and the lean year between. "A guess" is dropped, and `radak-samuel` is added.
8. Psalm 18: the comparison is now a three-column table of 28 rows, covering every item listed in the review. The 22:29 note is corrected: the Psalm has an extra verb *ta'ir*, so it is not a one-letter difference. The 22:33 variant now covers the second-line verb.
9. 24:1:
   - Added Berakhot 62b (1 Samuel 26:19 "inciter" and the half-shekel) and Rashi's "I do not know".
   - Day is moved to view 2 and her thesis is described accurately.
   - View 1 is relabeled "a common reading, especially among Christian interpreters". I could not confirm a specific Jewish source for it, so I softened the label rather than cite one.
   - Census: added Yoma 22b with Hosea 1:10 / 2:1 (Saul counting by tokens), doubt of the promise (Genesis 15:5; 1 Chronicles 27:23; 24:3), Ramban on Numbers 1:3, and 1 Chronicles 21:3. These are in the note, the census topic and ch. 24 VIEW J.

**Minor**
10. The rain-while-hanging counterpoint is added in note 21:9, the ch. 21 reading, X view and deep section, and the justice topic. The justice reading now cites 21:1 and Yevamot 78b–79a on Deuteronomy 21:23. The purge reading names McCarter, Halpern and McKenzie, and notes that David chose who died.
11. 24:17: BSB removed from the MT row. The `why` now sets 4QSam-a *haro'eh hare'oti* against the MT *ve'anokhi he'eviti*. Chronicles' *vehara' hare'oti* is a separate reading.
12. 22:51: the `why` now says the readings differ by a consonant (yod/vav), and the Ketiv is shown unpointed.
13. 23:1: corrected to ayin/aleph plus the verb form, and made a variant.
14. 23:21: Ketiv *'asher mar'eh* / Qere *'ish mar'eh*. "A man of size" is now attributed to 1 Chronicles 11:23.
15. 24:24: arithmetic fixed (fifty per tribe), labeled a guess, and the silver/gold mix noted.
16. 20:21 note and ch. 20 VIEW J now give the Resh Lakish / R. Yochanan dispute and Maimonides' "we do not instruct them so".
17. 21:8: the Targum is moved to its own row as a conflation (Merab, raised by Michal). I did not add the NJPS or NASB, because I could not verify their readings here.
18. 21:19: "the BSB and NIV follow it".
19. 19:43: `p` corrected (the Greek has both clauses).
20. 23:8: the Vaticanus clause is quoted, and the Ketiv *ha'etsno* is mentioned.
21. 22:33: the Greek is quoted. The 4QSam-a agreement with Psalm 18:32 is given as "commonly reported" with a `b` saying I could not confirm it in DJD 17. The second-line verb is added.
22. Additions trimmed: 19:33 ("You fed me" removed), 19:36, and 23:17 (now a question; the note says only "at stake" is supplied).
23. 23:9: kept "son of Ahohi", with a new note on "the Ahohite". The 21:16 note now says "his spear (the word may mean the spearhead)", which matches the Plain.
24. Satan:
   - Added `related: ["satan"]` to dragon.json, and `synagogue-of-satan` and `evil-spirit` to satan.json.
   - Changed "In early texts" to "In most of the Hebrew Bible".
   - The 19:22 note now says "in Job and Zechariah", with the dating labeled.
   - The 20:1 tag is dropped.
   - Not done here: moving Revelation's names table to satan. That is another part's contribution, and I left it for a later pass.
25. mighty-men alias narrowed to "David's gibborim".
26. The ch. 23 summary now credits the lion to Benaiah alone. The unused `bavli-yevamot` is dropped from the 21:2 note.
27. 24:14 note and VIEW J now say "Rashi, following Midrash Tehillim". The sword clause is phrased as how the choice would look. `midrash-tehillim` is added.

Shared files touched: content/sources.json (+2 keys), content/topics/satan.json, mighty-men.json and dragon.json (a related link only).
