# Hostile review: Mark 4–6 (part 04-06)

Reviewer: hostile-reviewer agent (did not write this part). Date: 2026-10-25.
Checked: plain.txt verse by verse against the SBLGNT, the Byzantine text and the TAGNT edition marks in
`texts/orig/Mrk.json`; `texts/auto/Mrk.json`; notes, variants, glosses, chapters (settings, traditions, deep dives,
views), topics.json; the proposal `content/proposals/nt/topics/decapolis.json`; the four entries in
`content/proposals/nt/terms.json` (τέκτων, ὁ βαπτίζων, ἀρχισυνάγωγος, δυνάμεις); Matthew's published Plain for every
parallel (Matthew 8:18–34; 9:18–26, 36; 10:1–15; 13:1–35, 53–58; 14:1–36); the sibling Mark parts' Plain where this part
claims alignment. `VERBOSE=1 node tools/build.js --check Mrk/04-06`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The translation is faithful to the SBLGNT, keeps Mark's roughness (the "could not" of 6:5, the
disciples' "doesn't it matter to you" of 4:38, "I am" at 6:50), follows Matthew's Plain closely where the Greek
matches, and shows very little NIV/ESV drift. The notes are dense, mostly accurate and fair to Jewish readings (Levine
on the bleeding woman is well handled). I found no invented sources: Tzaferis 1989 (BAR 15:2, 44–51), b. Shabbat
110a–b, Origen's Against Celsus 6.36, Justin's Dialogue 88, PGM IV.3019–20, Juvenal 3.14 and 6.542, Josephus Ant.
18.116–119, 136–137, Against Apion 2.204 and War 3.516–521, Didache 11:4–5, Mishnah Ketubot 4:4 and Sotah 1:7, and
1QapGen 20:28–29 all say what the notes claim. The errors are a handful of factual slips that matter: the 4:40 variant
rests on a false claim about Matthew's Greek; the 6:3 "son of the carpenter" reading is reconstructed wrongly; an
English-changing disagreement between SBL and NA28/THGNT at 6:2 has no variant entry; the chapter 4 Critical view
says Luke softens Mark's "so that", which Luke does not; the Catholic answer on the 6:3 card misreports what
Catechism 500 cites; and the note on 4:39 claims an English link with 1:25, 3:12 and 9:25 that the site's Plain does
not show. The 6:22 choice of SBL/THGNT over NA28 is defensible, but its reasoning needs one fair sentence added.
No critical findings.

Counts: critical 0, major 6, minor 20.

## Findings

### 1. Major: variants.json 4:40, the "why" rests on a false claim about Matthew 8:26
The `why` says scribes softened Mark "perhaps under the influence of Matthew 8:26 (which has 'so')". Matthew's Greek
has no "so": SBL Matthew 8:26 reads Τί δειλοί ἐστε, ὀλιγόπιστοι; with no οὕτως. The "so" is only in this site's English
Plain of Matthew ("Why are you so timid"). So the assimilation argument as stated is invalid. The Byzantine οὕτως; πῶς
οὐκ is not from Matthew (nor from Luke 8:25, Ποῦ ἡ πίστις ὑμῶν;).
Also, the witness list is shaky (the writer flagged it): reading 0 names "Bezae" and nothing is said of P45 or W,
both extant here, which are commonly reported with a mixed reading (οὕτως with οὔπω). I could not confirm these from
an open source.
Fix: rewrite the `why`: the oldest witnesses have οὔπω, "not yet", which is harsher; the Byzantine "How is it that
you have no faith?" smooths the rebuke. Drop the Matthew claim. Name only witnesses you can attribute ("as reported by
Metzger" for ℵ B D L Δ Θ and the versions, or simply "the earliest Greek manuscripts"), or add P45 and W only if the
NA28 apparatus confirms their reading. Separately, tell the lead that Matthew 8:26's Plain "so timid" adds a word the
Greek does not have (see 18e).

### 2. Major: variants.json 6:3, the "builder's son" reading is reconstructed wrongly
Reading 1 gives οὐχ οὗτός ἐστιν ὁ τοῦ τέκτονος υἱός with plain "This is the builder's son, isn't it", anchored on
"This is the builder, isn't it". Switching produces "This is the builder's son, isn't it, the son of Mary, and the
brother of ...", a text no manuscript has. The witnesses cited (P45vid, family 13, 33, 565, 700, Old Latin) are
reported (Metzger; NA apparatus) as reading "the son of the carpenter and of Mary" (ὁ τοῦ τέκτονος υἱὸς καὶ τῆς
Μαρίας), which replaces both "the carpenter" and "the son of". This matters for the note on 6:3 "son of Mary" too,
since the variant shows scribes avoiding Mark's naming Jesus by his mother.
Fix: check the reading in Metzger (Mark 6:3) or NA28; extend the anchor to "This is the builder, isn't it, the son of
Mary," and give reading 1 the plain "This is the son of the builder and of Mary, isn't it," (or the exact equivalent).
Mention in `why` or in note [78] that this reading also removes "the son of Mary" in its bare form. Keep the "vid"
caution on P45.

### 3. Major: plain.txt 6:2 "Most of those listening", an SBL-only reading with no variant entry
SBL reads οἱ πολλοὶ ("the many", "most"), but the TAGNT marks the article οἱ as SBL and Westcott-Hort only [SW]: NA28,
THGNT, Tregelles, the TR and the Byzantine text read πολλοὶ, "many". The English differs ("Most" against "Many").
brief-nt.md requires a variants.json entry wherever SBL, NA28 and THGNT disagree in a way that changes the English.
Fix: add a 6:2 variant anchored on "Most of those listening" (SBL, WH; B, L, as reported) against "Many who heard him"
(NA28, THGNT, Byzantine; KJV "many hearing him"). Weigh it; following NA28/THGNT here would be easy and defensible.

### 4. Major: chapters.json ch. 4 view C, "both Matthew and Luke soften Mark's 'so that' (4:12)"
Wrong for Luke. Luke 8:10 keeps ἵνα: ἵνα βλέποντες μὴ βλέπωσιν καὶ ἀκούοντες μὴ συνιῶσιν. Only Matthew 13:13 changes
it to ὅτι, "because" (as note [8] correctly says). Luke drops Mark's last clause ("or else they may turn back and be
forgiven"), which is a different softening. This is a standard Synoptic data point and should be exact.
Fix: "Matthew turns Mark's 'so that' (4:12) into 'because'; Luke keeps 'so that' but drops 'or else they may turn
back and be forgiven'; both soften the disciples' rebuke of Jesus (4:38)."

### 5. Major: chapters.json ch. 6, traditions card (top brothers-of-jesus), Catholic answer misreports Catechism 500
The card says the Catechism "points to Mark's own names: James and Joseph ... (Catechism 500, citing Mark 15:40 and
Matthew 27:56)". Catechism 500 cites Matthew 13:55; 28:1 and Matthew 27:56, and says "James and Joseph" because it
follows Matthew; it does not cite Mark 15:40, and "Joseph" is not Mark's name (Mark has Joses, 6:3; 15:40). The card's
question is built on Mark 15:40, so the source claim carries the card.
Two further problems: (a) the card largely repeats the Matthew 12 card (same five traditions, same sources); the
Orthodox, Lutheran and Baptist answers do not answer the question actually asked (is the Mary of 15:40 Jesus'
mother?); (b) Jerome's argument (Against Helvidius 13–16) does use Mark 15:40 and its Matthean parallels; cite him for
the Mark link instead of the Catechism.
Fix: "Another Mary. Jerome argued from Mark 15:40 that the James and Joses named as Jesus' brothers were sons of
another Mary; the Catechism makes the same point from Matthew's parallels (Catechism 500, citing Matthew 13:55; 27:56;
28:1)." Make each other view answer the 15:40 question in one clause (Orthodox: a different Mary, the brothers being
Joseph's sons; Baptist and many Reformed: a different Mary, the brothers being Mary's later sons; Lutheran: divided).
Or reframe the question as what Mark adds to the Matthew 12 card and point to that card.

### 6. Major: notes.json 4:39 "Be muzzled!" (and topic `sea`), English link to the exorcisms that the site's Plain does not show
The note says "'spoke sternly' (<i>epetimēsen</i>) is his word for rebuking demons (1:25; 3:12; 9:25)". In this site
ἐπιτιμάω is "gave it a strict order" (1:25), "kept giving them strict orders" (3:12), "rebuked" (9:25, 8:30, 8:33) and
"spoke sternly" (4:39, following Matthew 8:26). A reader who checks the three references finds three other English
wordings, so the storm-as-exorcism argument cannot be seen in the text. ("Be muzzled" is aligned with 1:25, good.)
Fix: either align across parts (the lead's job: 1:25, 3:12, 4:39, 9:25 in one rendering, ideally Matthew's "spoke
sternly", or keep "rebuke"), or reword the note: "the Greek verb behind 'spoke sternly' (<i>epetimēsen</i>) is the
one Mark uses when Jesus silences demons (1:25, 'gave it a strict order'; 3:12; 9:25, 'rebuked')". Same fix for the
`sea` topic section. List the pair in the report for the lane lead.

### 7. Minor: variants.json 6:22, the reason for following SBL/THGNT needs the opposing argument stated fairly
The choice itself is defensible (THGNT agrees with SBL; NA28's reading makes the girl Antipas' own daughter named
Herodias, against Josephus Ant. 18.136). But the `why` gives "fits the story and Matthew 14:6" as support without
saying that agreement with Matthew and with history is exactly what a corrector would produce, which is why NA28 and
Westcott-Hort print the more difficult αὐτοῦ with ℵ B D L Δ 565. Also, Metzger's committee did not call αὐτοῦ "the
harder reading"; it judged it, with hesitation, the reading of the best witnesses ("very difficult to decide which
reading is the least unsatisfactory", rated {C}). Fix: one sentence: "Its agreement with Matthew and Josephus could
also mean that copyists corrected Mark; that is why NA28 prints the harder reading." Rephrase the Metzger clause to
what he says.

### 8. Minor: variants.json 5:41, family 1 listed for "koumi"
The NA apparatus as usually reported has κουμ in ℵ B C L M N Σ f1 33 and κουμι in A Θ f13 and the Byzantine text
(D garbled). Family 1 on the "koumi" side is probably wrong. Fix: check, or drop f1 from reading 1.

### 9. Minor: settings, a date and a place stated more firmly than the sources allow
- 6:18 card, `when`: "around AD 28–29". John's arrest and death are usually dated from Luke 3:1 to about 28–29, but
  Josephus ties the marriage to Herodias and the defeat by Aretas (AD 36) in a way that has led some (for example
  Nikos Kokkinos) to date it later. Fix: "around AD 28–29 on most reckonings (some date it later from Josephus)".
- 6:22–25 card, `when`: "(or, on Josephus' account, at Machaerus)". Josephus places the imprisonment and execution
  at Machaerus (Ant. 18.119); he does not mention a banquet. Fix: "in Galilee, though Josephus says John was held and
  killed at Machaerus".
- Missing small cards (the brief wants every speech and prayer): Jairus' plea (5:22–23) and the disciples' cry in
  the storm (4:38), which the 4:35–41 card names only as Jesus' words. One line each, or widen the existing cards'
  `by`/`to`.

### 10. Minor: plain.txt 6:51, ἐξίσταντο "utterly overwhelmed" breaks the agreed rendering
The report says ἐξίστημι is aligned as "beside himself/themselves" (2:12; 3:21), and this part uses it at 5:42
("beside themselves with amazement"). 6:51 renders the same verb "they were utterly overwhelmed". Fix: "Inwardly they
were completely beside themselves," (and update the 6:51 variant anchor and readings to match).

### 11. Minor: notes.json 5:18 "to be with him", claimed English link that does not hold
The note says the man is sent with "the same verb Mark uses for apostles' preaching, 'announce' (<i>kēryssein</i>,
5:20; compare 3:14)". 3:14's Plain says "to preach"; 1:39 and 1:45 also "preaching"; 1:4 "proclaimed"; this part
uses "announce" (5:20; 6:12). Fix: name the Greek and drop "announce" as the shared English, or ask the lead to
align κηρύσσω across the Mark parts.

### 12. Minor: quotations of Mark 8:17 that do not match the site's Plain
Note [127] (6:52 "their hearts had turned hard") and the `hardening-of-heart` contribution quote 8:17 as "Are your
hearts hardened?". Part 07-09's Plain reads "Have your hearts turned hard?". Fix: quote it exactly.

### 13. Minor: topics.json `aramaic`, 5:41 misquoted
"'Talitha koum,' 'Little girl, get up' (Mark 5:41)" drops "I tell you" without an ellipsis, and the note on 5:41
itself makes a point of that phrase. Fix: "Little girl, I tell you, get up".

### 14. Minor: notes.json 4:32 "the birds of the sky can settle under its shade", overclaim on the Greek word
"Mark's word for 'settle' (<i>kataskēnoun</i>) is the word used in those passages." It is in Theodotion's Daniel 4
(4:12, 21) and Psalm 103:12 LXX, but not in the Septuagint of Ezekiel 17:23 (ἀναπαύσεται) or 31:6 (ἐνόσσευσαν,
κατῴκησεν). Fix: "the word used in the Greek of Daniel 4 and Psalm 104 (103 in the Greek)".

### 15. Minor: "torment" for two Greek words, and two small additions in 5:29 and 5:34
μάστιξ is "torment" (5:29, 34) while βασανίζω is also "torment" (5:7 "do not torment me"; 6:48 "tormented as they
rowed"). The reader cannot tell them apart, and the note on 5:29 builds on μάστιξ as "whip, scourge". Also 5:29 "her
torment was healed" makes the affliction the thing healed (Greek: she was healed of it), and 5:34 "be free and well
from your torment" adds "free" (ἴσθι ὑγιὴς ἀπὸ τῆς μάστιγός σου, "be healthy, rid of your affliction"). Fix: render
μάστιξ "affliction" or "scourge" (with the gloss), e.g. 5:29 "that she was healed of her affliction"; 5:34 "be well,
rid of your affliction".

### 16. Minor: small infelicities in plain.txt
- 4:15 "the moment they hear, Satan comes right away" doubles one εὐθύς. Fix: "as soon as they hear, Satan comes and
  carries off ...".
- 4:6 "When the sun came up, it burned it" (two different "it"s). Fix: "the seed was scorched".
- 6:6 "went around the villages in a circle" is over-literal for κύκλῳ. Fix: "went around the villages of the area,
  teaching".
- 6:20 "Hearing John left Herod at a loss over many things" is hard at an 8th-grade level. Fix: "Whenever he heard
  John, Herod was left very perplexed, and still he enjoyed listening to him."

### 17. Minor: plain.txt 4:12 "or else" can be read as a second purpose
"so that 'they may look ... or else they may turn back and be forgiven'" can be heard as "so that ... or they may
turn back". μήποτε means "lest", "so that ... not". The wording follows the site's Isaiah 6:10 ("or else they may ...
turn back"), so change both together or not at all. Fix if the lead agrees: "otherwise they might turn back and be
forgiven", in both books.

### 18. Minor: parallels with Matthew where the Greek is the same but the English differs
brief-nt.md: Mark follows Matthew's Plain where the Greek matches.
- (a) 6:34 ἐξελθὼν εἶδεν πολὺν ὄχλον: Mark "He came ashore and saw a huge crowd"; Matthew 14:14 "As he stepped out of
  the boat he saw a huge crowd". Pick one.
- (b) 6:45 ἠνάγκασεν τοὺς μαθητὰς ... ἐμβῆναι εἰς (τὸ) πλοῖον καὶ προάγειν: Mark "made his disciples board the boat and
  go on ahead"; Matthew 14:22 "made the disciples get into the boat and cross ahead of him". Use "get into the boat";
  "go on ahead" is right for Mark (no αὐτόν).
- (c) 6:10 μένω: Mark "remain there until you move on"; Matthew 10:11 "stay there until you move on".
- (d) 6:11 δέχομαι: Mark "refuses to welcome you or hear you"; Matthew 10:14 "does not receive you or hear".
- (e) 4:40 Τί δειλοί ἐστε: Mark "Why are you timid?" is right to the Greek; Matthew 8:26 "Why are you so timid"
  adds "so". Report to the lead for Matthew; no change in Mark.

### 19. Minor: NIV-like wording left in three verses
Drift is very low overall; these three should be rebuilt from the literal line:
- 5:30: the opening "At once Jesus" plus "that power had gone out" follows the NIV's sentence shape word for word for
  six words. Fix, e.g.: "Right away Jesus knew in himself that power had gone out from him." (εὐθύς is "right away"
  elsewhere in this part, so this also fixes consistency.)
- 4:26: "The kingdom of God is like this. A man throws seed on the ground." follows the NIV's two-sentence shape
  (only the verbs differ). Fix, e.g.: "This is how it is with the kingdom of God: it is as if someone threw seed on the
  ground."
- 6:15 "He is a prophet, like one of the prophets" matches the NIV for eight words, but the Greek nearly forces it;
  keep, and log it as forced.

### 20. Minor: chapters.json ch. 6 view C calls a difference a "softening"
"Matthew softens Mark at several points: ... Herod wants John dead rather than protecting him (6:20; Matthew 14:5)".
Making Herod murderous is not a softening of Mark. Fix: "Matthew also differs: Herod wants John dead (Matthew 14:5),
where Mark's Herod protects him (6:20)".

### 21. Minor: notes.json 6:43 "twelve full baskets", a reading stated as fact
"Each of the Twelve gathers a basket" is not in Mark. Fix: "Twelve baskets, perhaps one for each of the Twelve, ...".

### 22. Minor: glosses.json 6:18 "your brother's wife", a historical claim in a gloss
"the wife of your half-brother, who is still alive" adds Josephus' information (and his naming of the husband
differs from Mark's "Philip"). A gloss gives the feel of a phrase, not history. Fix: drop the gloss, or "your
brother's wife => your brother's wife, while he is still alive", and leave the half-brother point to note [94].

### 23. Minor: notes.json 5:22 "One of the synagogue leaders", Theodotus inscription dated flatly
"the Theodotus inscription from Jerusalem before AD 70": most date it before 70 (Kloppenborg defends this), but a
later date has been argued. Fix: "usually dated before AD 70".

### 24. Minor: notes.json 6:6 "Their unbelief astonished him", missing period
"... in a father's cry for help with his unbelief Mark's picture of ..." Fix: add a period after "unbelief".

### 25. Minor: sources
- `bede-mark` and `kermode-genesis-secrecy` are defined in parts/04-06/sources.json but never cited.
- Ch. 4 deep dive "Why speak in riddles?" names Kermode's <i>The Genesis of Secrecy</i> but has no `s`; add the key
  (chapter `deep` entries take a source list if the format allows, or cite it on the 4:11–12 setting card).
- The decapolis proposal lists `josephus-ant` but cites nothing from Josephus. Either add a line (e.g. Josephus,
  Life 42, on Gadara's villages near the lake; or War 3.446 on Hippos and Gadara) or drop the key.

### 26. Minor: notes.json 5:7 "Son of God Most High" and 5:6 "bowed down", small checks passed, one wording
Both notes are accurate (προσκυνέω occurs in Mark only at 5:6 and 15:19). In 5:7, "Nebuchadnezzar calls the three
Jews 'servants of the Most High God' (Daniel 3:26)" quotes a book the site has not yet translated; when Daniel is
written, the quotation must be re-synced. List it in the report so the lead's quote sync catches it (same for
Daniel 12:2 in note [72]).

## Checked and found sound (no action)
- Tzaferis 1989 exists as cited (BAR 15:2, March/April 1989, 44–51); the Kursi excavations (1970s) are correctly
  described. b. Shabbat 110a–b does list remedies for a woman's flow. Gadara's ship coins are real.
- 6:22: SBL and THGNT both read αὐτῆς τῆς Ἡρῳδιάδος; NA28 and WH αὐτοῦ (TAGNT marks confirm). The Plain follows the
  reading it claims.
- 6:14 "People were saying": NA28/SBL/WH ἔλεγον against THGNT/Byzantine ἔλεγεν, correctly stated.
- 4:15: NA28 and THGNT do read ἐν αὐτοῖς (TAGNT confirms), as the variant says.
- Terms: the four proposed entries match their use in this part, in Matthew 13:55 ("the builder's son") and in Acts
  13:15; 18:8, 17 ("synagogue leader"); the δυνάμεις entry agrees with Matthew 14:2 "the powers work in him", which
  6:14 follows.
- Decapolis topic: Pliny NH 5.74's list (with Scythopolis the only city west of the Jordan) and Pompey's settlement
  are correct; no duplicate topic exists.
- The anointing card is accurate (Trent session 14, "insinuated" in Mark, "promulgated" by James; Apology 13;
  Institutes 4.19.18–21; Article 25).
- Works outside the 66 are named as in works.json (Tobit, Sirach, 1 and 2 Maccabees, Jubilees, Testament of Solomon,
  Genesis Apocryphon, Gospel of Thomas, Didache, Community Rule, Damascus Document, Protevangelium of James) and none
  is presented as Scripture.
- No em-dashes in prose; no copyrighted translation text found in notes.

## Fixes applied
1. Fixed. 4:40 `why` rewritten (oupō harsher; Byzantine smooths; Matthew claim dropped, neither Matthew 8:26 nor Luke 8:25 has the Byzantine wording); reading 0 witnesses now ℵ B D L Δ Θ and versions "as reported by Metzger"; P45 and W not named (unconfirmed). Matthew 8:26 "so timid" reported to the lead (18e).
2. Fixed. 6:3 anchor extended to "This is the builder, isn't it, the son of Mary,"; reading 1 now ὁ τοῦ τέκτονος υἱὸς καὶ τῆς Μαρίας, "This is the son of the builder and of Mary, isn't it," (P45 damaged/uncertain, f13, 33, 565, 700, Old Latin, as reported by Metzger and NA28); `why` and note on "the son of Mary" say the reading removes the bare "son of Mary".
3. Fixed by following NA28/THGNT: 6:2 Plain "Many of those listening were stunned."; new variant entry (NA28, THGNT, Tregelles, Byzantine, TR against SBLGNT, WH with B L as reported in NA28).
4. Fixed. Ch. 4 view C: Matthew 13:13 "because"; Luke 8:10 keeps "so that" but drops the last clause; both soften 4:38.
5. Fixed. Card reframed to the 15:40 question and pointed to the Matthew 12:46–50 card; Catholic answer now cites Jerome for Mark 15:40 and Catechism 500 for Matthew 13:55; 27:56; 28:1 (key `ccc`, the site's single Catechism key); every other view answers the 15:40 question (Orthodox: not the Theotokos, brothers Joseph's sons; Lutheran: divided; Reformed: mostly a different woman, Mary's own sons; Baptist: no).
6. Fixed per lead decision (no forced English): 4:39 note and the `sea` contribution now name ἐπιτιμάω and give 1:25 ("gave it a strict order"), 3:12, 8:30, 32, 33, 9:25 ("rebuked") with their English, saying the Plain follows Matthew's parallels; 4:39 "spoke sternly" kept (= Matthew 8:26).
7. Fixed. 6:22 `why` states the opposing argument (agreement with Matthew and Josephus could be correction; why NA28/WH print αὐτοῦ) and restates Metzger's committee accurately.
8. Fixed. Family 1 dropped from the 5:41 "koumi" reading.
9. Fixed. 6:18 card `when` "on most reckonings (some date it later from Josephus)"; 6:22–25 card `when` says Josephus places John's imprisonment and death at Machaerus (no banquet); 4:35–41 card widened to the disciples' cry (with Matthew 8:25 / Luke 8:24 and Matthew's different placement of the storm); new card 5:22–23 for Jairus' plea (with Matthew 9:18's difference).
10. Fixed. 6:51 "Inwardly they were completely beside themselves," (lead decision: ἐξίστημι "beside themselves"); 6:51 variant anchor and readings updated.
11. Fixed. 5:18 note names κηρύσσω and gives its English in each place (5:20 "announcing", 3:14 "to preach"); κηρύσσω not forced to one word (lead decision).
12. Fixed. 8:17 now quoted "Have your hearts turned hard?" in the 6:52 note and the `hardening-of-heart` contribution.
13. Fixed. `aramaic` contribution quotes "Little girl, I tell you, get up".
14. Fixed. 4:32 note: the word is in the Greek of Daniel 4 (Theodotion) and Psalm 104 (103 LXX), not claimed for Ezekiel.
15. Fixed. μάστιξ is "affliction" (as 3:10 in part 01-03): 5:29 "She knew from her body that she had been cured of her affliction." (rebuilt; the suggested wording matched the ESV), 5:34 "be well, rid of your affliction"; note and gloss updated; βασανίζω keeps "torment".
16. Fixed, partly in other words: 4:15 "when they hear, Satan comes right away" (the suggested "as soon as they hear, Satan comes" matches the NIV); 4:6 "it burned the seed, and the seed dried up" (keeps Matthew 13:6's active shape); 6:6 "went around the villages nearby"; 6:20 "Each time he heard John, Herod was left deeply confused, and still he enjoyed listening to him." (the NIV has "greatly puzzled"; the 6:20 variant anchor updated).
17. Fixed in Mark only: 4:12 "in case they turn back and are forgiven" ("otherwise they might turn" is the NIV's wording). Mark's Greek (ἀφεθῇ, "forgiven") already differs from Isaiah 6:10, so Isaiah's "or else" is left to the lead; Isaiah 01-06 topics.json quotes "Mark 4:12 ends 'and be forgiven'", now "and are forgiven" (for the lead's quote sync). Note, deep dive and variant updated.
18. Fixed (a) 6:34 "As he stepped out of the boat he saw a huge crowd" (= Matthew 14:14); (b) 6:45 "get into the boat and cross ahead to the far shore" (= Matthew 14:22; the overlap with the NIV is forced by the Greek and the model); (c) 6:10 "stay there"; (d) 6:11 "does not receive you or hear you". (e) No change in Mark; Matthew 8:26's "so timid" (no οὕτως) reported to the lead.
19. Fixed 5:30 (rebuilt: "Right away Jesus was aware in himself that power had left him"; note anchor updated) and 4:26 ("This is how it is with the kingdom of God: it is as if someone threw seed on the ground."; note anchor updated). 6:15 kept as forced; logged in .scratch/Mrk-04-06-fix/drift-audit.tsv.
20. Fixed. Ch. 6 view C: Herod's difference stated as a difference, not a softening.
21. Fixed. "Twelve baskets, perhaps one for each of the Twelve".
22. Fixed. 6:18 gloss now "your brother's wife, while he is still alive"; the half-brother point stays in the note.
23. Fixed. Theodotus inscription "usually dated before AD 70".
24. Fixed. Period added.
25. Fixed. `bede-mark` removed from sources.json; `kermode-genesis-secrecy` cited on the 4:10–12 setting card (deep dives carry no sources); `josephus-ant` dropped from the decapolis proposal.
26. No change needed in this part; Daniel 3:26 (5:7 note) and Daniel 12:2 (note on 5:39) reported to the lead for the quote sync once Daniel is written.
