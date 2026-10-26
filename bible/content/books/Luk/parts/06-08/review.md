# Hostile review: Luke 6–8 (part 06-08)

Reviewer: separate hostile-review agent (not the writer). Checked: plain.txt verse by verse against the SBLGNT, Byzantine
text and TAGNT word list (texts/orig/Luk.json, KJV numbering), Matthew's published Plain (5–7, 8–9, 11–13), Mark's
reviewed Plain (2–5), every note, variant, gloss, chapter page, settings card, traditions card, topic contribution and
source key, the proposed term νομικός, and `VERBOSE=1 node tools/build.js --check Luk/06-08` (0 errors, 0 warnings).

## Verdict

This is a strong part. The Greek is followed closely, the variant work is mostly accurate and well explained, and the
facts I could check hold up. That includes every item the writer flagged as uncertain except two (7:11 and 8:45, below).
I found no invented source, reading or quotation. The problems are in three areas. First, the translation still has
several five-plus-word runs that match the NIV or ESV, three of them long (7:9, 7:25, 8:31), and in places it departs
from the Matthew/Mark model wording where the Greek is the same (8:5 the sower; ὁ λόγος in 8:12–15, against Mark's lead
decision "the message"). Second, the settings cards almost never say where Matthew or Mark place the same material
differently, which the lead decision and brief-luk.md require. Third, the 6:35 interest card is a third copy of a question
already carded at Psalm 15:5 and Proverbs 28:8. There are also two variant problems: 7:7 has no entry, and the 8:45 entry
merges two readings. None of this is critical. With the majors fixed, the part is ready.

Verified and sound (no change needed): Urban III's decretal *Consuluit* (about 1186–87, in the Decretals of Gregory IX
5.19.10) does rest the usury ban on Luke 6:35. Chrysostom, *Homilies on Matthew* 37, does take "the least" as Christ
(7:28). The Julia Severa inscription is CIJ 766. Bauckham's Simon figure (about one man in ten, from Tal Ilan's name data)
is correctly reported. Gregory the Great's Homily 33 (591) and the 1969 calendar change are correct. Jerome, Letter 52.8
(the "second-first Sabbath" joke) is correct. The Bezae agraphon text and its placement (6:5 moved after 6:10) are
correct. 7:19 now sits correctly under KJV numbering, with κύριον in NA28, SBL and THGNT. The 8:43 handling (NA28
brackets; SBL and THGNT print the clause; P75, B and sys omit it) is correct. So are the witness lists at 6:1, 6:35,
6:48, 8:3, 8:26 and 8:37, as far as Metzger reports them. The Kassiani troparion, Catechism 1452 and 2443–2448, the
Apology article 4 on 7:47, the Mishnah references (Shabbat 7:2, Yoma 8:6, Sheviit 10:3–4, Sotah 1:7, Ketubot 4:4 and
7:6, Ohalot 18:7), Arakhin 16b, 4Q521, the Theodotus inscription, the Magdala synagogue (2009), the Ginosar boat (1986),
Hobart (1882) and Cadbury (1919–20) are all correct. The three spec boxes (sermon for patrons; the children's song and
the weeping woman; the choking crowd) are labeled, plausible, and say where they overlap with published work.

## Findings

### 1. Major: NIV/ESV runs in plain.txt that the Greek does not force
- **7:9.** The first nine words are identical to the NIV's opening of this verse (beginning "When Jesus heard this"), and
  "turned to the crowd following him" follows the NIV's next clause. Matthew 8:10's Plain avoided this shape. Rebuild it
  from the literal line, for example: "Jesus was amazed at him when he heard these words. He turned around and said to
  the crowd that was following him, 'I tell you, I have not met faith this great even in Israel.'" (Keep the closing
  clause, which matches Matthew's model.)
- **7:25.** "who dress in splendid clothing and live in luxury" is a seven-word ESV run. "Splendid" is the ESV's choice
  for ἐνδόξῳ, not a forced one. Try something like "the people in fine clothes who live soft lives are in the royal
  palaces."
- **8:31.** "not to command them to depart into the Abyss" is an eight-word ESV run ("depart" is the ESV's choice for
  ἀπελθεῖν). Try "not to order them off into the Abyss."
- **6:22.** The verse ends with a ten-word ESV run, from "your name as evil" through "Son of Man". It comes from keeping
  Matthew 5:11's "on account of", which is a fair reason, but the whole run still matches. Break it up: "...and toss out
  your name as something evil, because of the Son of Man", or recast it as a separate sentence.
- **7:8.** "I myself am a man placed under authority" takes the NIV's opening order. It also departs from Matthew 8:9's
  Plain ("I am a man under someone's authority myself"), although Luke's Greek is Matthew's plus τασσόμενος. Use
  "I am a man placed under someone's authority myself, and I have soldiers under me."
Shorter runs are listed in finding 12.

### 2. Major: 8:5 departs from Matthew 13:3 and Mark 4:3 where the Greek is the same
Luke 8:5 has ἐξῆλθεν ὁ σπείρων τοῦ σπεῖραι τὸν σπόρον αὐτοῦ. Mark 4:3 has ἐξῆλθεν ὁ σπείρων σπεῖραι, and Matthew 13:3
has ἐξῆλθεν ὁ σπείρων τοῦ σπείρειν. Both models read "There was a sower who went out to scatter seed." Luke reads "The
sower went out to scatter his seed." The only real difference in Luke's Greek is τὸν σπόρον αὐτοῦ, "his seed." **Fix:**
"There was a sower who went out to scatter his seed." Update note #90's anchor and title to match. "trampled underfoot"
in the same verse is also the ESV's phrase; "trampled" alone is enough.

### 3. Major: ὁ λόγος in the sower's explanation goes against the Mark lead decision
The brief-mrk.md lead decisions fix "the message" for ὁ λόγος and say that "Luke follows these wordings where its Greek
matches Mark's." Mark 4:14–20 and Matthew 13:19–23 both use "the message." Luke 8:12, 13 and 15 have the same bare τὸν
λόγον and render it "the word." Note #96 even states that Mark has "the message" here. **Fix:** in 8:12–15, render bare ὁ
λόγος as "the message." For ὁ λόγος τοῦ θεοῦ (8:11, 8:21, and 5:1 and 11:28 in other parts, which already read "the word
of God"), the lead should either confirm "the word of God" as a fixed Lukan phrase or switch all four to "God's message."
Note it in progress.md so 11-13 and 03-05 stay aligned. Update notes #96 and #97 and the 8:11–15 settings card.

### 4. Major: settings cards do not say where Matthew or Mark set the passage differently
The brief-mrk.md lead decision ("each card says where Matthew or Luke set the saying differently"), brief-luk.md
("Settings") and brief-nt.md all require this, and Matt asked for it. Only 6:39–42 and 7:31–35 do it. Add one sentence
to each of these cards:
- **6:20–49:** Matthew sets the sermon on a mountain, with Jesus seated and the disciples coming to him (Matthew 5:1–2;
  7:28–29). Luke sets it on level ground among crowds and the sick.
- **6:27–38:** Matthew places love of enemies inside the six antitheses on the Law ("You have heard what was said...",
  Matthew 5:38–48). Luke has no Law frame.
- **6:43–49:** Matthew uses the tree saying twice, once against false prophets (Matthew 7:15–20) and once against the
  Pharisees (Matthew 12:33–35). His builders are tested by rain, floods and wind.
- **7:3–8:** in Matthew 8:5–13 the centurion comes in person, with no elders.
- **8:4–8:** Mark 4:1 and Matthew 13:1–2 have Jesus teach from a boat by the sea. Luke has crowds "from one town after
  another."
- **8:16–18:** Matthew 5:15 uses the lamp in the Sermon on the Mount, of disciples as light.
- **8:19–21:** Mark 3:20–21, 31–35 places this before the parables, after the family has set out to seize him.
- **7:18–23:** the "readers" layer can stay; add that Matthew 11:2 says John heard of "the Messiah's works."
Also on 8:40–56: the card says Jesus tells Jairus to "keep believing." Luke has the aorist πίστευσον, which the Plain
renders "Just believe"; "keep believing" is Mark's present tense. Match the Plain.

### 5. Major: the 6:35 interest card duplicates two existing cards
The question "Does 'lend, without hoping for anything back' forbid charging interest?" (top `interest-and-debt`) is the
same question already carded at Psalm 15:5 ("forbid all interest on loans?") and Proverbs 28:8. The views are largely the
same: Catholic, the usury ban and later moderation, Catechism 2269; Orthodox, Nicaea canon 17 and Basil; Lutheran,
*Trade and Usury*; Reformed, Calvin's 1545 letter. The Acts lead decision says one card per question. **Fix:** drop the
card and keep the Luke-specific content in note #31 and the variant at 6:35, pointing readers to the Psalm 15 card. That
content is the Vulgate's *mutuum date, nihil inde sperantes* as the medieval proof text, and Urban III's *Consuluit*. If
the lead prefers Luke 6:35 as the main home, because it was historically the main proof text, then move the Psalm 15 and
Proverbs 28 cards to point here. One way or the other, there should be one card.

### 6. Major: missing variant entries for differences a KJV reader will notice
- **7:7 ἰαθήτω / ἰαθήσεται.** The Plain says "let my servant be healed," following the imperative printed by NA28, SBL
  and THGNT. The KJV says "my servant shall be healed," as do the Byzantine text, the TR and Matthew 8:8. According to
  Metzger, the imperative has narrow support (P75, B, L, a few others), while the future is read by ℵ, A, C, D, W and
  the Byzantine majority. That makes it worth an entry: it is one of the places where NA28 follows P75 and B against
  most early witnesses, and the future may be a harmonization to Matthew. Give both readings, the witnesses as Metzger
  reports them, and the reason for following the imperative.
- **7:11 ἱκανοί.** The KJV's "many of his disciples went with him" adds ἱκανοί (Byzantine, TR). A short entry, or a
  line in the existing 7:11 entry.
- (Lower priority) **7:10 τὸν ἀσθενοῦντα**, the KJV's "the servant whole that had been sick." Optional.

### 7. Major: the 8:45 variant merges two different readings and misreports THGNT
The entry gives one longer reading, "εἶπεν ὁ Πέτρος καὶ οἱ μετ' αὐτοῦ," attributed to "THGNT; Codex Sinaiticus,
Alexandrinus, Bezae, the Byzantine majority." The regenerated word list shows that μετ' αὐτοῦ is in the TR and
Byzantine text only (flags `TB`). THGNT and Tregelles have καὶ οἱ (`YGTB`) but not μετ' αὐτοῦ. The longer text exists in
two forms: καὶ οἱ σὺν αὐτῷ (as Metzger reports it, ℵ, C, D, L and others; this is the form THGNT prints) and καὶ οἱ μετ'
αὐτοῦ (A, W, Θ, Ψ, Byzantine). **Fix:** split the reading into two, or give the σὺν αὐτῷ form as THGNT's reading and
note the Byzantine wording, with the witnesses checked against Metzger or NA28. The English is the same, so the `plain`
can stay.

### 8. Minor: the witnesses for 7:11 ἐν τῇ ἑξῆς are understated or unverified
The entry says the feminine ("the next day") is in "the Textus Receptus (KJV), with some manuscripts." In the
commentaries' reports the feminine has early support (reported for ℵ*, C, D, W among others). Thayer's lexicon even
records ἐν τῇ ἑξῆς as the text of Westcott-Hort and Tregelles. That conflicts with the word list, which gives τῷ to W and
G, so the evidence needs checking either way. **Fix:** verify against NA28 or Metzger and name the witnesses. If they
cannot be confirmed, say "a number of early and later manuscripts, as reported in the NA28 apparatus" rather than "some
manuscripts."

### 9. Minor: 7:29 "proved God right" overstates ἐδικαίωσαν τὸν θεόν
The people did not prove anything. They acknowledged or declared that God was in the right, by accepting John's baptism.
The gloss on the same phrase ("admitted God was right") contradicts the Plain. **Fix:** "they declared God in the
right" or "they owned that God was right." Keep "proved right" at 7:35, where the passive (wisdom vindicated) supports
it, and adjust note #68's title.

### 10. Minor: 7:7 imports Matthew's μόνον and takes an NIV opening
"Just say a word": Luke's Greek is ἀλλὰ εἰπὲ λόγῳ, with no μόνον, which is Matthew 8:8's word. And "That is why I did
not" is the NIV's opening. Try: "So I did not count myself worthy even to come to you. But say a word, and let my
servant be healed."

### 11. Minor: other small parallel inconsistencies on the same Greek
- **6:37 μὴ κρίνετε**: "Stop judging" here, "Do not judge" in Matthew 7:1. Either keep "Stop judging" and say in a note
  that it is the present prohibition, or match Matthew.
- **6:44**: ἐκ τοῦ ἰδίου καρποῦ γινώσκεται is close to Matthew 12:33 ("You can tell a tree by its fruit"). Consider "You
  can tell every tree by its own fruit."
- **8:25 Τίς ἄρα οὗτός ἐστιν**: Luke's "Who can this be, then?" is more exact than Mark 4:41's "Who can this be?",
  which drops ἄρα. Flag it for the lead to align Mark rather than change Luke.

### 12. Minor: shorter drift runs (rebuild where it is easy)
- 7:1: "finished saying all ... to the listening people" uses the NIV's interpretive turn on εἰς τὰς ἀκοὰς τοῦ λαοῦ.
  Use "in the people's hearing."
- 7:12: "As he came near the town gate" and "crowd from the town was with her" are NIV/ESV-shaped.
- 8:3: "Susanna; and many others. These women were" is an NIV run.
- 8:8: "It came up and produced a crop, a hundred times" is the NIV's sentence with one word swapped. "As he said this,
  he called out" follows the NIV too.
- 8:13: "the word with joy when they hear it" is an NIV run.
- 8:16: "cover it with a jar or put it under a bed" is the ESV with inflections changed.
- 8:28: "shouted at the top of his voice" is the NIV's idiom. Try "cried out with a loud voice", or Mark 5:7's "loud
  shriek" shape.
- 8:29: "bound ... with chains and shackles ... but he would snap the bonds" is the ESV's order with one word swapped.
- 8:45: "Who was it that touched me?" is a six-word ESV match. Try "Who is the one who touched me?"
- 6:40: "fully trained ... will be like his teacher" uses the NIV/ESV choice; "fully equipped" is an alternative.
- 6:47: "I will show you what he is like" is an ESV run, nearly forced. Optional.
- 6:17: "the seacoast of Tyre and Sidon" could be "the coast around Tyre and Sidon."

### 13. Minor: note #55 (7:13) lists 24:34 as the narrator's use of "the Lord"
At 24:34 the disciples speak ("The Lord has risen"). The narrator's uses are 7:13, 7:19, 10:1, 39, 41, 11:39, 12:42,
13:15, 17:5–6, 18:6, 19:8, 22:61 and 24:3. Replace 24:34.

### 14. Minor: note #114 (8:31) gives the wrong Revelation reference
The beast rises from the Abyss at Revelation 11:7 and 17:8, not 9:1–11 (the locusts and Abaddon). Write "(Revelation
9:1–11; Revelation 11:7; Revelation 20:1–3)" and adjust the sentence.

### 15. Minor: note #116 (8:35) says "Mary of Bethany sits at Jesus' feet (10:39)"
Luke 10:38–39 names only "a village." Bethany comes from John 11:1. Write "Mary, Martha's sister, sits at Jesus' feet
(10:39)."

### 16. Minor: note #112 (8:28) overstates the use of "God Most High"
The note says it "is used in the Bible by or among non-Israelites." Abram uses it (Genesis 14:22), and so do the Psalms
(Psalm 57:2; Psalm 78:35, 56). Say "often on the lips of non-Israelites."

### 17. Minor: topics.json `apostles` says "Luke usually names John before James"
That is false. Luke has "James and John" at 5:10, 6:14 and 9:54, and "John and James" at 8:51, 9:28 and Acts 1:13. Write
"Luke sometimes names John before James."

### 18. Minor: note #113 (8:30), the Tenth Legion boar
The boar was one of the emblems of Legio X Fretensis. But the legion was based in Syria before 66 and in Jerusalem after
70, not in the Decapolis, so the link concerns Mark's and Luke's post-70 readers, not Jesus' Galilean hearers. Say so.
Also check that the political reading is actually in Theissen's *Gospels in Context* (the key cited). If his treatment
is in *The Miracle Stories of the Early Christian Tradition*, cite that, or attribute it generally to "several scholars"
with Horsley.

### 19. Minor: note #66 (7:27) calls the Malachi/Exodus blend "Jesus' wording, shared by Matthew 11:10 and Mark 1:2"
In Mark 1:2 it is the narrator's quotation. Write "the same wording appears in Matthew 11:10 and, as the narrator's
quotation, Mark 1:2."

### 20. Minor: Matthew as "a tax agent" (chapter 6 view H; note #12)
Luke never says Matthew was a tax collector. He calls the tax collector Levi (5:27), and the identification comes from
Matthew 9:9. Add "(Matthew 9:9 identifies him with the tax collector)."

### 21. Minor: note #34 (6:37) is labeled `kind: "mis"`
"Forgive" for ἀπολύετε is a defensible rendering (BDAG gives "pardon" for this verse), not a mistranslation. Use `nu`
or `deb`.

### 22. Minor: small factual imprecisions
- Note #52: Nain is about 22 miles (35 km) from Capernaum in a straight line. Say "about 20–25 miles."
- Note #71: the Septuagint of Deuteronomy 21:20 uses different words (συμβολοκοπῶν οἰνοφλυγεῖ). Say "words of similar
  meaning."
- Note #2: Jesus' David argument is an argument from scriptural precedent, not "from the greater to the lesser."
- Note #21: the body says "throw out your name" but the Plain reads "toss out."
- Note #86 has "apostle to the apostles" and the chapter 7 deep dive has "apostle of the apostles." Use one form (the
  usual English for *apostolorum apostola* is "apostle to the apostles").

### 23. Minor: mechanics
Notes #93 (8:8) and #97 (8:12) are `type: "word"` with no `kind` (and #93 has no `orig`). STYLE requires both on word
notes; give `kind` (`nu`) and `orig`, or change the type to `echo`.

### 24. Minor: settings card 6:1–5
It says the Sabbath "bound every Jew in the land." It bound Jews everywhere. Change to "every Jew."

### 25. Minor: glosses
- 8:24 "Master => Boss, Chief" is jarring for Jesus and misleads. Try "Master => Sir, Leader (a respectful title for
  someone in charge)."
- 7:22 "the good news => the gospel" turns a plain phrase into a church word, the opposite of what a gloss is for. Drop
  it or explain "a message of rescue."
- 7:29 "tax collectors => tax agents working for Rome's system": in Galilee, toll collectors worked for Herod Antipas.
  Try "local tax and toll collectors, often seen as collaborators."

### 26. Minor: overlong sentences for an 8th-grade level
6:17 (30 words), 8:14 (34), 8:28 (33), 8:29 (29), 8:1 (28), 8:43 (29) and 6:22 (30) each run well over 20 words without
a break. Split them with periods, for example 6:17: "...on a stretch of flat ground. A big crowd of his disciples was
with him. A great mass of people had come..."

### 27. Minor: one point made three times; progress.md miscount
That sympnigō in 8:14 echoes 8:42 is stated in note #99, in spec note #121, and listed in progress.md as a third spec
box, though it is a spec note, not a chapter box. Keep it in the spec note, cut the sentence from #99, and correct
progress.md ("2 spec boxes and 1 spec note").

### 28. Minor: the proposed term νομικός "lawyer"
The term fits Luke and Matthew 22:35, and matches 09-10, 11-13 and 14-17. But its verse list includes Titus 3:13
(Zenas), where it is debated whether he was a Jewish Torah expert or a Roman-law jurist. The gloss "experts in the Law of
Moses" decides that question in advance. Drop Titus 3:13 from the entry, or add "(Titus 3:13 may mean a Roman jurist)."

### 29. Minor: 6:32–34 "why should anyone thank you"
This narrows χάρις to human thanks, while the parallel μισθός (6:35; Matthew 5:46) points to God's credit or reward.
Note #30 explains it, but the Plain could keep both senses, for example "what thanks do you have coming?", while avoiding
the NIV's "what credit" wording.

## Counts
Critical 0, major 7, minor 22.

## Fixes applied
1. Fixed. Rebuilt from the literal line with a fresh drift audit: 7:9 ("Jesus was amazed at him when he heard these words..."), 7:25 ("the people who wear fine clothes and live pampered lives"), 8:31 ("not to order them off into the Abyss"), 6:22 (split in two; "as something evil because of the Son of Man"), 7:8 (= Matthew 8:9 plus "placed"). Note anchors at 6:22 and 7:8 updated.
2. Fixed. 8:5 "There was a sower who went out to scatter his seed... It was trampled" (= Mark 4:3 / Matthew 13:3 plus "his seed"); second sentence = Mark 4:4. Note on 8:5 anchor and body updated.
3. Partly, per lead decision: ὁ λόγος in 8:11–15 stays "the word of God" / "the word" (Luke names it "the word of God" at 8:11). The 8:11 note now says Mark 4:14–20 and Matthew 13:19–23 render the same Greek "the message" and why Luke differs. 8:21 stays "the word of God".
4. Fixed. Settings cards 6:20–49, 6:27–38, 6:43–49, 7:3–8, 7:18–23, 8:4–8, 8:16–18, 8:19–21 now say where Matthew or Mark set the material differently; 8:40–56 says "Just believe" as the Plain.
5. Fixed. The 6:35 interest card is dropped; the 6:34 note now carries what Luke adds (the Vulgate's mutuum date, nihil inde sperantes, Urban III's Consuluit, Vix pervenit, Luther, Calvin's 1545 letter) and points to the Psalm 15:5 card. The 6:35 variant now points to that note.
6. Fixed. New variants 7:7 (imperative vs future; editions and the witnesses usually reported, no new manuscripts invented), 7:10 (Byzantine "who had been ill") and 7:11 (Byzantine ἱκανοί "many"). 7:7 Plain now "let my servant get well" (Matthew 8:8's verb).
7. Fixed. 8:45 split into three readings: SBL/NA28 shorter; THGNT/Tregelles καὶ οἱ σὺν αὐτῷ; Byzantine/TR καὶ οἱ μετ' αὐτοῦ (the word list's flags confirm THGNT lacks μετ' αὐτοῦ). Manuscripts for the σὺν form marked as not checked against NA28.
8. Fixed by hedging: the word list gives τῷ to NA28, SBL, THGNT, WH, Tregelles and Byzantine; the τῇ entry now says TR and "a number of manuscripts, some of them early", marked as unchecked against NA28. No witnesses named that I could not confirm.
9. Fixed. 7:29 "they declared that God was in the right"; gloss, note (anchor, title, body) and the topics.json quote updated; 7:35 keeps "proved right".
10. Fixed. 7:7 "So I did not count myself worthy even to come to you. Instead, say a word, and let my servant get well." (no μόνον).
11. Partly. 6:37 now "Do not judge... Do not condemn..." as Matthew 7:1 (same Greek), with a line in the 6:37 note on the present tense. 6:44 "You can tell every tree by its own fruit" (Matthew 12:33). 8:25 kept; flagged for the lead (Mark 4:41 drops ἄρα).
12. Fixed: 7:1 ("in the people's hearing"; settings view updated), 7:12, 8:3, 8:8, 8:13, 8:16, 8:28, 8:29, 8:45, 6:40 ("fully equipped"), 6:47, 6:17 ("the coast around Tyre and Sidon"); note and gloss anchors updated.
13. Fixed. 24:34 replaced; the narrator's list now 7:19; 10:1, 39, 41; 11:39; 12:42; 13:15; 17:5–6; 18:6; 19:8; 22:61; 24:3.
14. Fixed. Revelation 9:1–11 (locusts), 11:7 and 17:8 (beast), 20:1–3 (Satan).
15. Fixed. "Mary, Martha's sister".
16. Fixed. "often on the lips of non-Israelites", with Genesis 14:22 and Psalm 57:2; 78:35, 56.
17. Fixed. "sometimes names John before James... though more often 'James and John'".
18. Partly. The boar sentence now says Legio X was in Syria before 66 and Jerusalem after 70, so any hint spoke to post-70 readers. The text now says "several scholars" without naming Theissen; the theissen-gospels-context and horsley-galilee keys are kept but the page could not be checked here (lead: verify or swap for Theissen's Miracle Stories).
19. Fixed. "the same wording appears in Matthew 11:10 and, as the narrator's quotation, Mark 1:2".
20. Fixed in the chapter 6 H view and the 6:15 note (Matthew 9:9 identifies him with the tax collector Luke calls Levi).
21. Fixed. kind "nu".
22. Fixed all five: Nain "about 20–25 miles (35–40 km)"; Deuteronomy 21:20 "different words of similar meaning"; David "from scriptural precedent"; 6:22 note "toss out"; "apostle to the apostles" in the deep dive.
23. Fixed. 8:8 note: kind nu, orig ἐφώνει; 8:12 note: kind nu, orig ἵνα μὴ πιστεύσαντες σωθῶσιν.
24. Fixed. "it bound every Jew".
25. Fixed. 8:24 Master gloss "Sir, Leader (Greek epistatēs...)"; 7:22 "the gospel" gloss dropped; 7:29 tax collectors "local tax and toll collectors, often seen as collaborators".
26. Fixed. 6:17, 6:22, 8:1, 8:14, 8:29, 8:43 split; 8:28 recast (8:43 keeps its variant anchor).
27. Fixed. Sentence cut from the 8:14 note (and 8:42 from its refs); progress.md now says 2 spec boxes and 1 spec note.
28. Fixed. Titus 3:13 dropped from the νομικός verse list in proposals/nt/terms.json, with a line saying why.
29. Fixed. 6:32–34 "what thanks do you have coming?"; the 6:32 note (anchor, title, body) says it covers both human thanks and God's favor.
Also from the lead notes: the 7:16 note quotes 19:44 as "the season when you were visited"; "temple" lowercased in three notes; κωλύω at 6:29 "do not hinder him" (the 6:29 note matches).
