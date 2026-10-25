# Hostile review: 1 Samuel 21–31 (part 21-31)

Scope: plain.txt (all 250 verses, each checked against `node tools/literal.js 1Sa 21`–`31` and the Hebrew in `texts/orig/1Sa.json`), notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in this folder; the new topic cores `abigail`, `medium-of-endor`, `psalm-titles`, `suicide` and `jabesh-gilead`; and the four new shared keys in `content/sources.json` (`tertullian-soul`, `lewis-cults-dead`, `childs-psalm-titles`, `midrash-tehillim`). book.json and chapters 1–20 were not reviewed.

`node tools/build.js --check 1Sa/21-31`: 250 verses, 157 notes, 20 variants, 99 glosses, 11 chapter pages, 34 topic contributions, 0 warnings (so the quotation check passes). The three errors it prints are all outside this part: book.json "needs lead" and "needs facts", and a `sternberg-poetics` key clash between `Gen/parts/26-36/sources.json` and `1Sa/parts/12-20/sources.json`.

Method notes.
- NIV/ESV drift. BibleGateway, biblehub and bible.com are blocked from this container. I compared every verse with my close knowledge of the NIV and ESV. I then ran a machine check of 43 sample verses against the ESV text on esv.org (chapters 22–31), asking for any run of six or more identical words.
- Witnesses. Witness claims were checked where pages could be reached: Brenton's Septuagint (via biblehub), Wikipedia's chapter pages (which list the Qumran fragments from DJD 17), and Parry's preliminary edition of 4QSam-a 25:3–31:4 (bibliographic record only). Rahlfs, DJD 17 and McCarter could not be opened directly. Where a claim rests on my memory of them, I say so.

## Verdict

The translation is strong, and the writer's drift claim stands up. I found no verse that leans on the NIV or ESV. None of the 43 sampled verses shares a run of six words with the ESV, except where the Hebrew forces it: "as his name is, so is he" (25:25), "the bundle of the living" (25:29), "the LORD's anointed" (24:6; 26:9) and "the king of Israel has come out" (26:20). The Plain is built from the Hebrew, keeps hard images ("A dead dog. One flea."; "he flew at them screaming"; "the cup of a sling"), and follows the reading each variant entry claims. Reading level is right, with an average sentence of 12 words and no em-dashes anywhere. Most Jewish-source citations check out: Megillah 14a/15a, Sanhedrin 10:2, Arakhin 15b, Berakhot 12b and 62b, Hagigah 4b, Shabbat 152b, Ketubot 110b, Menachot 95b, Mishnah Sanhedrin 7:7, Genesis Rabbah 34:13, Numbers Rabbah 14:1 and Leviticus Rabbah 26:7. The Endor chapter gives all three views (real Samuel, demon, fraud) seriously and with real sources.

But it is not ready.
- **Terms.** *Nagid* in 25:30 is "leader," which breaks terms.json and the rendering of part 01-11.
- **Variants.** The variant file never cites a Dead Sea Scroll. Yet 4QSam-a and 4QSam-b between them preserve about 90 verses of this part, including 28:1, which the writer did not check. Several differences that the ESV, NIV and BSB follow have no entry (30:2, 22:4). One witness is misreported (25:3).
- **Fairness.** Two of the fairness questions are not yet met: the Ahinoam theory is given in neither side's strongest form, and the suicide topic is not yet written responsibly for teen readers.
- **Claude's theories.** Three "Claude's theory" items either rest on a false claim or claim as original what scholars (and the writer's own notes) already say.

Counts: **critical 0, major 7, minor 24**. Item 32 lists checks that passed and is not counted.

## Findings

### Major

1. **major. plain.txt 25:30 and note 25:30: *nagid* rendered "leader," against terms.json.**
   - Hebrew: וְצִוְּךָ לְנָגִיד עַל־יִשְׂרָאֵל. The Plain has "He will make you leader over Israel."
   - terms.json: *nagid* = "ruler (Saul and David are 'ruler over the LORD's people'; *melekh* is 'king')."
   - Part 01-11 follows the rule: 9:16 "anoint him as ruler over my people Israel," 10:1 "anointed you as ruler." The note on 25:30 points readers to exactly those verses ("God told Samuel to anoint Saul as *nagid* (9:16; 10:1)"), so a reader will see "ruler" there and "leader" here for the same word. The note is also titled "'Leader' (nagid)" and glosses it "leader, prince."
   - Fix: "He will appoint you ruler over Israel." Retitle the note "'Ruler' (nagid)."
   - Pass on to the 12-20 writer: 13:14 in that part also has "leader" for *nagid*.

2. **major. variants.json: no Dead Sea Scroll evidence anywhere, though the scrolls preserve much of this part. 4QSam-a at 28:1 is not checked.**
   - DJD 17 (Cross, Parry, Saley and Ulrich, 2005), as summarized on the Wikipedia chapter pages, lists these fragments:
     - 4QSam-b (about 250 BC, one of the oldest biblical manuscripts): 21:1–10 (Hebrew numbering), 22:8–9, 23:8–23.
     - 4QSam-a: 22:10–11; 24:3–5, 8–10, 14–23; 25:3–12, 20–21, 25–27, 38–40; 26:9–12, 21–24; 27:1–2, 8–12; 28:1–3, 22–25; 29:1; 30:22–31; 31:1–4.
     - 4QSam-c: 25:30–31.
   - Not one of the 20 entries names any of them. Some of the entries (27:8, 27:10) fall inside preserved verses.
   - **28:1.** 4QSam-a is widely reported (Ulrich; the Dead Sea Scrolls Bible) to read יזרעאלה, "to fight at Jezreel," where the Masoretic Text and the Septuagint have "to fight against Israel." That would put the Philistines' goal at Jezreel and agree with 29:1, 11. I could not open DJD 17 from here to confirm the exact wording. The writer must check it there (or in Ulrich, *The Biblical Qumran Scrolls*, 2010) and add an entry with an honest "follow." The present 28:1 entry deals only with "in the camp" against "to battle."
   - Verses where the scrolls survive and the witnesses differ, which need checking: 23:11–12 (the Keilah question asked twice in the Masoretic Text), 27:8 (Girzites; "from of old"), 27:10 (see item 8), 30:27–30 (the town list, where the Greek differs widely), 31:3–4.
   - The `textual-history` contribution says "the Dead Sea Scrolls (especially 4QSam-a) frequently preserve a better text," but the part never uses them.
   - Fix: make a DJD 17 pass over every preserved verse. Add entries where the scrolls differ in sense, and add the scrolls to the `w` lists of existing entries where they agree with the Masoretic Text or the Greek.

3. **major. Missing variant entries for differences the major English versions follow.** STYLE requires an entry wherever a major translation follows or footnotes a different reading. In each case below the Plain follows the Masoretic Text silently (or supplies words without a note).
   - **30:2.** The Masoretic Text has וַיִּשְׁבּוּ אֶת־הַנָּשִׁים אֲשֶׁר־בָּהּ, "they took captive the women who were in it." The Greek adds "and all" ("the women and all who were in it"). The ESV ("the women and all who were in it"), NIV, NRSV and BSB ("the women and all who were there") follow the Greek. The KJV follows the Masoretic Text. The Plain ("the women who were in it, from the youngest to the oldest") follows the Masoretic Text with no entry. 4QSam-a is not extant here; the Greek alone carries it.
   - **22:4.** The Masoretic Text has וַיַּנְחֵם אֶת־פְּנֵי מֶלֶךְ מוֹאָב, "he led them before the king of Moab." The Syriac, Targum and Vulgate read וַיַּנִּחֵם, "he left them." The NIV and ESV ("he left them with the king of Moab") and the BSB follow that reading. The Plain ("He brought them into the presence of the king of Moab") follows the Masoretic vowels without a note.
   - **30:27 and 30:29.** For Bethel, the Greek has Βαιθσουρ (Beth-zur). For Racal, it has Καρμηλος (Carmel), and McCarter adopts Carmel, which suits Abigail's town. The Greek also adds towns in 30:28. The note on 30:31 discusses Bethuel but never mentions the Greek. 4QSam-a is extant here (30:22–31).
   - **27:8.** For אֲשֶׁר מֵעוֹלָם ("from of old"), the Greek reads a place name (Γελαμψουρ, usually taken as "from Telam," compare 15:4). Many commentators adopt it, since "from of old" is grammatically awkward. 4QSam-a is extant here.
   - **24:10.** The Masoretic Text has וַתָּחָס עָלֶיךָ, "and (it, feminine) spared you," with no subject. The Plain supplies "my eye." The Greek, Targum and Vulgate have "I spared you" (ESV "but I spared you"). A one-line note is enough, but the reader should know "my eye" is supplied.
   - Fix: add variant entries for 30:2 and 22:4. Add an entry for 30:27–29 (or fold the Greek into the 30:31 note). Add a note or entry for 27:8 and a short `word` note for 24:10.

4. **major. variants.json 25:3: the Septuagint is listed as a witness for the written form "like his heart," which it does not support.**
   - Reading 1 is labeled "Masoretic written text (Ketiv); Septuagint ('a doglike man')," and its `plain` is "He was a man who did as his heart pleased."
   - But the Greek κυνικός ("doglike") reflects the consonants כלבי read as *kalbi*, from *kelev*, "dog." Those are the **read** form's consonants (Qere כָלִבִּי), not the written כלבו. A reader who switches to reading 1 is told that the Greek says "a man who did as his heart pleased," which is false.
   - The Ketiv/Qere direction itself is right (`texts/auto`: K = כְלִבּוֹ).
   - Fix: make three readings. (a) Qere *kalibbi* "a Calebite" (Targum; modern translations). (b) Ketiv *kelibbo* "like his heart" (no ancient version follows it). (c) The Greek *kynikos* "doglike," reading the Qere consonants as *kalbi*. Rewrite the `why` to match.

5. **major. Fairness: the theory that Ahinoam was Saul's wife is given in neither side's strongest form (note 25:43; topics.json `polygamy`; chapter 25).**
   - What the part gives. The note names Levenson and Halpern and cites 2 Samuel 12:8, then says the theory "would explain ... Saul's fury" (it is not clear how) and that "most commentators find this possible but unproven." The `polygamy` contribution dismisses it: "but this is a guess." Chapter 25 does not mention it at all.
   - Missing from the case for it (Levenson, CBQ 40, 1978; Levenson and Halpern, "The Political Import of David's Marriages," JBL 99, 1980):
     - The name Ahinoam occurs for only these two women in the whole Bible.
     - 2 Samuel 12:8 has God say he gave David "your master's wives."
     - Taking a predecessor's women was a known claim to the throne: Abner and Rizpah (2 Samuel 3:7), Absalom (2 Samuel 16:21–22), Adonijah's request for Abishag (1 Kings 2:22).
     - 25:43–44 sets David's taking Ahinoam directly beside Saul's giving away Michal.
   - Missing from the case against it, the one most critics find decisive:
     - Age. Saul's Ahinoam was the mother of Jonathan, a grown commander in chapters 13–14, yet David's Ahinoam bears his firstborn Amnon years later at Hebron (2 Samuel 3:2).
     - She is "of Jezreel," a Judahite town, not "daughter of Ahimaaz."
     - 2 Samuel 12:8 may be stock language for inheriting a royal house.
   - "Most commentators find this possible" overstates support. Most mention it and reject it, or leave it open.
   - Also, the `polygamy` contribution says that "after Nabal dies, David marries Abigail and also Ahinoam," which contradicts the Plain's "David had already taken Ahinoam" (25:43).
   - Fix: give both cases in the note, with 60–100 words a side. Replace "this is a guess" with a neutral sentence. Make the topic match the Plain's pluperfect, or note that the Hebrew order allows either.

6. **major. The suicide topic (`content/topics/suicide.json`, its contribution in topics.json, and the views note on 31:4) is not yet handled responsibly or fully.**
   - Audience. The site's readers include teens, and this is a "Studies" page on suicide. It has no word for a reader who is struggling. One plain line would do, set apart at the end of the core: "If you are thinking about ending your life, please talk to someone now; in the US you can call or text 988." It should not preach.
   - The core gives only the historical condemnations (Genesis 9:5 in the rabbis; Augustine "shaped Christian teaching for centuries"). It leaves out today's pastoral teaching on both sides:
     - The Catholic Catechism (2282–2283) says grave psychological suffering lessens responsibility and tells the church to pray for those who have died this way.
     - Jewish practice widely presumes that a person who died by suicide was not acting freely (*anus*). That allows full burial and mourning.
     - Many Protestant writers now reject the old teaching that suicide is unforgivable.
     - Without these, a reader takes away an incomplete and harsher picture than the traditions themselves now give.
   - Missing biblical material that belongs on one page per subject across the whole Bible:
     - People who wished to die and were met with care instead of rebuke: Moses (Numbers 11:15), Elijah, who is fed and allowed to rest (1 Kings 19:4–8), Jonah (Jonah 4:3, 8–11) and Job (Job 3).
     - Paul stopping the Philippian jailer: "Do not harm yourself" (Acts 16:27–28).
   - Samson is listed as a case with no word that many readers class his death as an act of war, not suicide.
   - The topic contribution says Saul was "badly wounded by archers." The Plain deliberately says "anguish" and the 31:3 note explains why (see item 11).
   - Fix: add a short section on despair and God's response with the verses above, and a short section on modern Jewish and Christian pastoral teaching. Mark Samson as debated, align the wording with the Plain, and add the one-line help notice.

7. **major. The "Claude's theory" items: one rests on a false claim, and two claim originality that the writer's own notes contradict (STYLE rule 4).**
   - **Chapter 21 box and the `david` topic, "the bread and the sword."** The box claims the sword is "never mentioned again" and that "the sword drops out of the story." The topic says "The sword never appears again." Both are false. Doeg names it in 22:10 ("he handed him the sword of Goliath the Philistine"), and Saul repeats it in 22:13 ("You handed him bread and a sword"). In fact 22:13 pairs the bread and the sword, which could support the theory, but only if it is stated correctly. Fix: say that David never uses the sword, note 22:10 and 22:13, and rework the argument.
   - **Chapter 24 box and the `saul` topic, "the robe in three scenes."** "Commentators note the first two links; I am adding the third." But the writer's own note on 28:14 already makes the third link, without calling it Claude's ("The last time the two met, Saul held a torn piece of it"). Published scholarship has it too: Polzin (*Samuel and the Deuteronomist*, 1989) traces the *me'il* motif from 2:19 through 15:27, 24:5 and 28:14, and Alter's note on 28:14 makes the same connection. Fix: say plainly that the three-scene chain is in Polzin and Alter, and state what, if anything, is new.
   - **The `medium-of-endor` topic, "Claude's reading: Saul's last asking."** The *sha'al*/Saul wordplay is presented as "my own reading." But the note on 23:2 credits it to "Robert Polzin and others," and the part 12-20 note on 12:13 covers it too. Fix: drop the box, or relabel it as published scholarship and move it to a normal section.
   - **Chapter 25 box, "Abigail and Hannah."** This is plausible and properly labeled. But "both are wise wives of men who do not understand them (1:8; 25:19)" misrepresents Elkanah, who is a loving if clumsy husband, not a brute like Nabal. Fix: "married to men who fail to see what they need" or similar, and note the difference.

### Minor

8. **minor. variants.json 27:10: the account of the ancient versions is doubtful and incomplete.**
   - The `why` says "the Targum and medieval commentators read it as 'where'."
   - The Vulgate reads *In quem irruistis hodie?*, "against whom did you rush in today?", the same as the Greek ἐπὶ τίνα. The entry does not mention it, though it adds an independent witness for the reading the Plain follows.
   - Driver (on this verse) lists the Targum with the Greek as well, if I remember it rightly. That should be checked before the claim stands.
   - 4QSam-a preserves 27:8–12 (item 2).
   - Fix: check Driver, the Targum and DJD 17; add the Vulgate; and correct the Targum claim if it is wrong.
   - On the merits, following "whom" is sound, and the reason given (one short word dropped) is good.

9. **minor. variants.json 22:14, `why`: "The same consonants read *sar* mean 'captain'" is false.**
   - סָר ("turns aside," from *sur*) is spelled with *samekh*. שַׂר ("captain, chief") is spelled with *sin*. They are different letters that sounded alike.
   - Reading 0 also gives a Hebrew text (וְשַׂר עַל־מִשְׁמַעְתֶּךָ) as if it were a witness. It is a reconstruction behind the Greek, so label it "presumed Hebrew behind the Greek."
   - On the merits, following the Greek here is sound and mainstream (McCarter; ESV, NIV and NRSV "captain over your bodyguard"). Only the explanation needs fixing: "*sar* 'turns aside' and *sar* 'captain' sound the same but differ by one letter (samekh/sin)."

10. **minor. variants.json 21:13: the written form is transliterated "wyt'w."**
    - `texts/auto` gives Ketiv וַיְתַו, that is *wytw*, with no aleph or ayin.
    - The `why` itself rightly says *wytw*.
    - Fix: "written *wytw*, read *wytyw*."

11. **minor. Note 31:3 and the topics: misstated evidence for "wounded," and wording that contradicts the Plain.**
    - The note says "1 Chronicles 10:3 also has 'wounded'." But the Hebrew of 1 Chronicles 10:3 has the same ambiguous verb, וַיָּחַל מִן־הַיּוֹרִים. Only English versions such as the KJV render it "wounded." The Greek is the only real witness to "wounded in the abdomen."
    - The `saul` contribution says "wounded on Gilboa" and the `suicide` contribution says "Badly wounded by archers." Both state as fact the reading the Plain chose not to follow.
    - Fix: "the Greek says he was wounded; Chronicles repeats the same Hebrew verb." Make the topics say "in anguish" or "hard pressed by the archers."

12. **minor. plain.txt 26:19: "'Go, worship other gods'" for לֵךְ עֲבֹד אֱלֹהִים אֲחֵרִים.**
    - The verb is *avad*, "serve." The KJV, NIV, ESV and BSB all have "serve."
    - The Deuteronomy reviews flagged the same "worship" for *avad*. "Serve" keeps the book and the Bible consistent and carries the master-servant image.
    - Fix: "'Go, serve other gods.'" Update the note anchor on 26:19 to match.

13. **minor. plain.txt 24:5: "David's conscience stung him" flattens וַיַּךְ לֵב־דָּוִד אֹתוֹ, "David's heart struck him."**
    - English can carry the image, and the writer's own note is titled "David's heart struck him."
    - "Conscience" is close to the NIV's "conscience-stricken" and the BSB's "conscience was stricken."
    - Fix: "David's heart struck him," with the note kept as it is.

14. **minor. plain.txt 29:1: "the Israelites were camped at the spring that is in Jezreel."**
    - The Hebrew has וְיִשְׂרָאֵל חֹנִים, "and Israel was camping." "The Israelites" is the term for *bene Yisra'el*, which is not here.
    - With that choice the line matches the ESV ("the Israelites were encamped by the spring that is in Jezreel") nearly word for word.
    - Fix: "while Israel was camped at the spring in Jezreel."

15. **minor. plain.txt 25:31: "this must not be something that makes you stagger."**
    - The Hebrew וְלֹא תִהְיֶה זֹאת לְךָ לְפוּקָה is a statement of what will follow ("this will not be a stumbling block for you"). It is the result of 25:30's "when the LORD has done ... and appointed you."
    - "Must not" turns Abigail's promise into a command.
    - Fix: "this will not become something that makes you stagger." The sentence (34 words) should also be split (item 29).

16. **minor. plain.txt 31:10, chapter 31 summary and the `hanged-on-a-tree` contribution: "nailed up."**
    - תָּקְעוּ means "thrust, fastened," as with a tent peg (the note says so). "Nailed" is a guess, and the chapter page and topic repeat it as fact ("nail his body," "nail the bodies").
    - Fix: "fastened his corpse to the wall" in the Plain. Or keep "nailed" and say in the note that the method is not stated.

17. **minor. Endor fairness: small overstatements in an otherwise fair treatment.**
    - The `medium-of-endor` contribution's "common" line reads "Most Jewish and Christian readers through history have held that Samuel really appeared." For Christians this is doubtful: the demon view dominated Protestant interpretation from Luther and Calvin into the 1800s, and many church fathers held it. Fix: "Most Jewish readers, and many Christians, especially today, ..."
    - Chapter 28, J lens: "Radak rejected that view." Radak quotes Samuel ben Hofni at length (on 28:24) and judges his view against the sages' tradition, but he does not simply dismiss it. Check the wording.
    - Saadia Gaon, the leading Jewish voice for the real-Samuel view (God revived Samuel, as Ibn Ezra reports), is not named. He would strengthen View 1.
    - The deep section "View 1" opens: "The narrator, who usually reports only what characters see, says plainly ..." The narrator of Samuel is not limited to what characters see; he reports God's thoughts (15:35; 16:7). Drop the clause.

18. **minor. Note 25:43 against the `polygamy` topic: the sequence of David's marriages contradicts itself.** See item 5. One says "had already taken," the other "after Nabal dies ... also Ahinoam." Pick one and add the alternative to the note.

19. **minor. Notes 22:1 and 23:1: distances overstated.**
    - Tel Adullam (Khirbet esh-Sheikh Madhkur) is about 13 miles west-southwest of Bethlehem, not "about 16 miles southwest."
    - Keilah (Khirbet Qila) lies about 3 miles south of Adullam, not "about 8 miles."
    - Fix both.

20. **minor. chapters.json 21 and 31, H lens: both events are dated "about 1010 BC."**
    - The flight to Nob precedes Saul's death by at least the 16 months of 27:7 plus the wilderness years.
    - Fix: date chapter 21 "a few years before 1010 BC," or drop the date there.

21. **minor. chapters.json 21, summary: "lying, hungry, unarmed, and acting mad among his enemies."**
    - David has just taken Goliath's sword (21:9) and carries it into Gath, as the 21:9 note says.
    - Fix: "lying, hungry, and acting mad among his enemies, with Goliath's own sword at his side."

22. **minor. chapters.json 29, deep section "The order of chapters 28–31": "the scene at Endor ... must take place after chapters 29 and 30 in time."**
    - That is too strong, and the same paragraph then says the events happen "on the same days."
    - 2 Samuel 1:1–2 has David back in Ziklag two days when the news of Gilboa arrives. So the battle, and the night at Endor, fall while David was pursuing the Amalekites, during chapter 30, not after it.
    - Fix: "after chapter 29, and at about the time of chapter 30."

23. **minor. Note 24:6: "David uses the phrase for Saul five times in these chapters (24:6, 10; 26:9, 11, 16, 23)."**
    - That is six verses, and seven uses, since 24:6 has it twice.
    - Fix: "seven times."

24. **minor. psalm-titles: counts and references.**
    - The topics.json contribution says "Five psalm titles point to these chapters," then names six (34, 56, 52, 54, 57, 142).
    - Its `refs`, the `wilderness` contribution ("Psalm 63:1") and the core's `refs` cite titles as verse 1. STYLE says psalm titles are verse 0 (the notes rightly use "Psalm 34:0").
    - The core's `refs` leave out Psalms 7, 60 and 63, though its text names them.
    - Fix: "Six psalm titles"; use `:0` throughout; complete the core's refs.

25. **minor. Notes that repeat points made in the other parts (STYLE: "Never explain the same point twice").**
    - 24:6 "The LORD's anointed" repeats 2:10 and 12:3.
    - 29:3 "Hebrews" repeats 4:6, 13:7 and 14:21.
    - 23:2 the *sha'al*/Saul wordplay repeats 1:28 and 12:13.
    - 25:30 *nagid* repeats 9:16 and 13:14.
    - 25:17 Belial repeats 1:16.
    - 23:6 how the Urim worked repeats 14:41.
    - The parts ran at the same time, so this is expected. Fix: keep only what is new for these chapters and refer back ("see 12:3").

26. **minor. Missing topic tags.**
    - The topic `michal` exists, but the note on 25:44 is tagged `marriage`, and chapter 25's topics do not include `michal`.
    - The topic `dagon` fits the note on 31:9 (Chronicles' temple of Dagon; the headless Dagon of 5:4).
    - The topic `evil-spirit` fits the note on 26:19 ("If God has stirred Saul up," citing 16:14).
    - `ketiv-qere` belongs in chapter topics for 24 and 26, where the Ketiv/Qere entries sit.

27. **minor. content/sources.json `midrash-tehillim`: "final form about AD 1000."**
    - The work is in two layers. The midrash on Psalms 119–150 is a much later addition, usually dated to the 1200s.
    - Fix: "compiled from about the 800s to the 1200s."
    - The other three new shared keys are correct and are not duplicates:
      - `tertullian-soul` (De anima, about 210–213).
      - `lewis-cults-dead` (HSM 39, 1989).
      - `childs-psalm-titles` (JSS 16, 1971, 137–150).

28. **minor. Note 22:17: "It is the Bible's first story of soldiers refusing an order."**
    - In 14:45 the troops refuse to let Saul's sentence on Jonathan be carried out.
    - Fix: "one of the Bible's first."

29. **minor. plain.txt: a few sentences too long for the 8th-grade target.**
    - 25:34 (41 words), 30:26 (40), 25:18 (35), 25:26 (34), 25:31 (34) and 22:8 (32).
    - Fix: split each once.

30. **minor. glosses.json: two glosses that mislead.**
    - 22:19 "with the edge of the sword" glossed "in cold blood." The idiom means "by the sword, without quarter." Use "killing them all with the sword."
    - 25:21 "he returns me evil in place of good" glossed "he pays me back with an insult." That understates it. Use "he repays my kindness with harm."

31. **minor. topics.json `textual-history`: the refs and body do not match.**
    - The refs include 28:17, but the body never mentions it.
    - Fix: add "'to you' in 28:17, with the Greek and Latin," and correct the claim about the Dead Sea Scrolls once item 2 is done.

### Checks that passed (not counted)

32. These were checked and found sound:
- **Translation.** All 250 verses follow the Hebrew closely. Names, numbers and who-does-what are right. I found no additions or omissions beyond those listed above. The ESV sample matched only where the Hebrew forces the wording.
- **Terms.** These follow terms.json:
  - *ov / yidde'oni* "ghosts of the dead / spirits that know things" (28:3, 9).
  - *meshiach YHWH* "the LORD's anointed" (24:6, 10; 26:9, 11, 16, 23).
  - *chok u-mishpat* "a rule and a ruling" (30:25).
  - *eved* "servant" or "slave" by context.
- **Variants chosen on their merits:**
  - 25:22 "to David": correct. The Greek τάδε ποιήσαι ὁ θεὸς τῷ Δαυιδ is rightly preferred over the scribal "David's enemies." The NIV, NRSV and BSB agree; the KJV and ESV follow the Masoretic Text. This is the best entry in the file.
  - 28:17 "to you": sound (Greek σοι, Vulgate *tibi*, some Hebrew manuscripts).
  - 22:14: sound apart from item 9.
  - 27:10: sound apart from item 8.
  - 29:10, the Greek plus: defensible. The haplography argument is the standard one. The Wikipedia page on 1 Samuel 29 (from DJD 17) confirms that the plus is absent from the Masoretic Text, Targum and Vulgate, and that 4QSam-a preserves only 29:1, so "without a Hebrew witness" is accurate.
  - 29:1 "Aendor" is confirmed. Brenton: "Israel encamped in Aendor, which is in Jezrael." The explanation from בַּעַיִן and the geography is sound.
  - The Ketiv/Qere directions at 24:4, 26:22 and 27:8 match `texts/auto`.
  - 22:18 (Greek 305; Josephus, *Antiquities* 6.260, 385) is correct.
- **Facts checked and correct:**
  - The Ekron inscription's *'kysh* / Ikausu.
  - Gath at Tell es-Safi and its destruction about 830 BC.
  - Khirbet al-Ra'i as a claimed Ziklag.
  - The camel dating (Sapir-Hen and Ben-Yosef, 2013).
  - The Tabnit and Eshmunazar "do not disturb me" inscriptions.
  - Hoffner on *ov* and the Hittite pit.
  - Eissfeldt's *Beutel der Lebendigen*.
  - The abbreviation תנצב״ה.
  - Rutherford's *Lex, Rex* (1644).
  - Molina's *Concordia* (1588) and middle knowledge.
  - Josephus's praise of the medium (*Antiquities* 6.340–342) and of Saul (6.344–350).
  - Gordon (Tyndale Bulletin 31, 1980) and Levenson (CBQ 40, 1978).
  - Arnold (CBQ 66, 2004).
  - The 13 historical psalm titles.
- **Endor.** All three views are present with real proponents (Justin Martyr, Origen and the Talmud; Tertullian, Eustathius, Gregory of Nyssa, Luther and Calvin; Samuel ben Hofni and Reginald Scot). Each has a "strongest form" paragraph and a fair statement of what all three views agree on, apart from item 17.
- **Style.** No em-dashes in any file. Poetry is not an issue in these chapters.

## Fixes applied

Applied 2026-10-23 by the part writer. Afterwards `--check 1Sa/21-31` and `--check 1Sa` both report 0 errors and 0 warnings, and the full build reports 0 errors. Counts: 250 verses, 157 notes, 27 variants, 99 glosses, 11 chapter pages, 36 topic contributions.

**Major**
1. *Nagid.* 25:30 now reads "He will appoint you ruler over Israel." The note is retitled "'Ruler' (nagid)" and points back to 9:16 and 13:14. The leftover "leader" at 13:14 belongs to part 12-20 and is passed on to that writer.
2. *Dead Sea Scrolls.* Accepted in part.
   - DJD 17, Ulrich and the Dead Sea Scrolls Bible could not be opened from this container. Only one significant reading could be confirmed from secondary reports: 28:1. It now has its own entry, "to fight Israel" against 4QSam-a "to fight at Jezreel," labeled "as reported by Ulrich and in the Dead Sea Scrolls Bible (reconstruction in DJD 17 not checked here)." The Plain keeps the Hebrew and Greek, because the scroll's text is fragmentary and known here only from reports.
   - The entries for 27:8, 27:10 and 30:27 say that 4QSam-a preserves those verses (as listed in DJD 17), and that its reading there is not reported in the works used here.
   - The textual-history topic now gives the verses the scrolls cover and the 28:1 reading.
   - Not done: the reading of each fragment at 23:11–12 and 31:3–4. No unconfirmed scroll reading was added. A pass with DJD 17 in hand is still needed.
3. *Missing entries.* Added entries for 22:4 ("brought them before" against "left them with"), 24:10 ("my eye" supplied, against "I spared you"), 27:8 ("from long ago" against Greek "from Telam"), 30:2 ("and all"), 30:27 (Bethel against Beth-zur, with the Greek additions in 30:28 noted) and 30:29 (Racal against Carmel). The Plain follows the Masoretic Text in all six, and each `why` gives the reason.
4. *25:3.* Now three readings: Qere "Calebite"; Ketiv *kelibbo* "like his heart" (no ancient version follows it); Greek *kynikos*, reading the Qere consonants as *kalbi*. The `why` was rewritten to match.
5. *Ahinoam.* The 25:43 note now gives each side in its strongest form.
   - For: the name occurs for only these two women; 2 Samuel 12:8; taking a ruler's women as a claim to his throne (2 Samuel 3:7; 16:21–22; 1 Kings 2:22); and 25:43–44 set side by side.
   - Against: Jonathan's age, "of Jezreel" rather than "daughter of Ahimaaz," and 12:8 as stock language.
   - The note now says "most commentators mention it and set it aside, or leave it open," and adds the source `levenson-halpern-marriages` (JBL 99, 1980).
   - The polygamy contribution now follows the Plain ("had already taken"). It sums up both sides neutrally and drops "this is a guess." Chapter 25 has a new short deep section, "Ahinoam and Michal."
6. *Suicide.*
   - The core now has a section on people who wished to die and were met with care: Moses, Elijah, Jonah, Job, and the Philippian jailer.
   - A section on modern pastoral teaching: Jewish *anus* and burial, Catechism 2282–2283, and Protestant writers. It cites `catechism-catholic`.
   - A short closing section, "If you are struggling," with the 988 line.
   - Samson is marked as a debated case. The contribution now reads "in anguish from the archers (the Greek says he was wounded)." The 31:4 note points to the new sections.
7. *Claude's theory items.*
   - The chapter 21 box and the david topic now cite 22:10 and 22:13 and argue only that David never uses the sword.
   - The robe chain is now an ordinary deep section in chapter 24 and an ordinary section in the saul topic, credited to Polzin and Alter. The 28:14 note credits them too.
   - The "Saul's last asking" box in medium-of-endor is removed. The point stays in the 23:2 note, credited to Polzin and Alter.
   - The Hannah–Abigail box now describes Elkanah as loving but uncomprehending and names the difference from Nabal.

**Minor**
8. 27:10: the Vulgate is added as a witness. The Targum claim is removed (I could not check it) and replaced with "some medieval Jewish commentators."
9. 22:14: the *samekh*/*sin* explanation is fixed. Reading 0 is labeled "presumed Hebrew behind the Greek." The ESV, NIV and NRSV are named.
10. 21:13: the written form is corrected to *wytw*.
11. 31:3: the note now says Chronicles repeats the same Hebrew verb, and only the Greek says "wounded." The saul and suicide topics now say "hard pressed" and "in anguish."
12. 26:19: "'Go, serve other gods.'" The note anchor is updated.
13. 24:5: "David's heart struck him." The note anchor is updated.
14. 29:1: "while Israel was camped at the spring in Jezreel." The variant anchor and its reading are updated.
15. 25:31: "this will not become something that makes you stagger," split into two sentences.
16. 31:10: "fastened to the wall." The note now says the method is not stated. The chapter 31 summary and the hanged-on-a-tree topic now say "fasten."
17. Endor:
    - The common line now says "Most Jewish readers, and many Christians, especially today." The Protestant demon view is added as an uncommon line.
    - The J lens now says Radak quotes Samuel ben Hofni at length and weighs his view against the sages' tradition.
    - Saadia, as reported by Ibn Ezra, is added to the J lens and to View 1.
    - The "narrator reports only what characters see" clause is removed.
18. Ahinoam sequence: see 5.
19. Distances: Adullam is now about 13 miles west-southwest of Bethlehem, and Keilah about 3 miles south of Adullam.
20. Chapter 21, H lens: "a few years before Saul's death (about 1010 BC)."
21. Chapter 21 summary: "with Goliath's own sword at his side."
22. Chapter 29 deep section and the 29:1 note: Endor falls after chapter 29, at about the time of chapter 30, citing 2 Samuel 1:1–2.
23. 24:6: "seven times (twice in 24:6, then 24:10; 26:9, 11, 16, 23)."
24. Psalm titles: "Six psalm titles." Refs use `:0` in the contribution, the wilderness contribution and the core. The core's refs now include Psalms 7, 60 and 63.
25. Duplicate notes:
    - 24:6, 25:30, 23:2, 23:6, 29:3 and 25:17 now keep only what is new for these chapters. They refer back to 2:10/12:3, 9:16/13:14, 1:28/12:13, 14:41, 4:6/14:21 and 1:16/2:12.
    - Rejected in part: each still names its Hebrew word in `orig`, because a reader may land on these chapters first.
26. Tags:
    - 25:44 is now tagged `michal`, 26:19 (first note) `evil-spirit`, and 31:9 `dagon`.
    - Chapter 25 adds `michal`. Chapters 24 and 26 add `ketiv-qere`, and chapter 26 also adds `evil-spirit`.
    - New contributions to `michal` and `dagon`.
27. `midrash-tehillim`: "compiled from about the 800s to the 1200s; the part on Psalms 119–150 is a later addition."
28. 22:17: "one of the Bible's first stories," with a cross-reference to 14:45.
29. Long sentences: 22:8, 25:18, 25:26, 25:31, 25:34 and 30:26 are each split once.
30. Glosses: 22:19 is now "killing them all with the sword," and 25:21 is now "he repays my kindness with harm."
31. textual-history: the body now covers 28:17 and 28:1 and gives the verses the scrolls cover. The refs match the body.
