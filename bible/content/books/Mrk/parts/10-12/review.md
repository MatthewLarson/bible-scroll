# Hostile review: Mark 10–12 (part 10-12)

Reviewer: hostile-reviewer agent (not the writer). Checked: plain.txt verse by verse against the SBLGNT, Byzantine
text and TAGNT edition marks in `texts/orig/Mrk.json`; every variant entry against `w` and `texts/auto/Mrk.json`;
parallel wording against Matthew's published Plain English Translation (Matthew 19:1–23:14); notes, glosses, chapters.json (settings
and the two traditions cards), topics.json and sources.json; quotations against the Plain English Translation of Genesis, Deuteronomy,
Psalms, Isaiah and Matthew. `VERBOSE=1 node tools/build.js --check Mrk/10-12` gives 0 errors and 0 warnings.

## Verdict

This is a strong part. The translation is faithful to the SBLGNT, it reads at the right level, and I found no
NIV/ESV drift: the verses most at risk (10:9, 10:15, 10:25, 10:45, 11:9, 12:10, 12:17, 12:27, 12:31, 12:44) all
have their own sentence shapes. Mark follows Matthew's Plain English Translation word for word where the Greek matches (10:7–9 // Matthew
19:5–6; 10:19; 10:22; 10:42; 12:10–11; 12:14–17; 12:36 // Matthew 22:44) and differs exactly where the Greek
differs (10:28 "have followed" for the perfect against Matthew's aorist; 10:40 "or" against "and"; 10:43 "is" against
"will be"; 10:44 "everyone's slave"; 12:37 πόθεν "in what sense" against Matthew's πῶς). That is careful work.
The two departures from the SBLGNT are both defensible. At 10:2 the Plain English Translation prints the Pharisees with NA28 and THGNT
(the TAGNT marks confirm the SBL alone leaves them out). At 11:31 the SBL alone prints "What should we say?". But the
11:31 entry names no witnesses at all, against the rule. The 10:2 entry gives the SBL editor a line of reasoning
he never published. I checked the cited facts and sources and they hold up:
- Tal Ilan, HTR 89 (1996), on XHev/Se 13, presented fairly as disputed.
- Elephantine; Josephus, Antiquities 15.259–260 and 18.136.
- CD 4:20–5:2; Mishnah Sanhedrin 2:5; Mishnah Shekalim 1:3 and 6:1, 5; Mishnah Berakhot 9:5.
- Babylonian Talmud Bava Metzia 38b, Berakhot 64a, Niddah 69b–71a (Daube's four questions), Nedarim 32b,
  Sanhedrin 90b; Avot de-Rabbi Natan 4.
- Philo, On the Special Laws 2.63; Testament of Issachar 5:2.
- Barrett (1959), Hooker, Baumgarten (JJS 1989), Wright (CBQ 1982), Telford, Kloppenborg and the Zenon papyri.
- Bauer's "colt = horse" argument; Heidelberg 37, Augsburg 3, Methodist Article 20, Westminster 2.3,
  Doctrine and Covenants 130:22.

I found no invented source, reading or find, so there are no critical findings. The real problems:
- A missing variant where NA28 and the Tyndale House edition differ in the English (12:23).
- A false claim in topics.json about Mark's parables.
- The atonement card leaves out the Baptists, the tradition most openly split on its own question ("for whom?").
- A number of smaller accuracy, consistency and setting points.

## Findings

### 1. Major: variants.json 11:31 names no witnesses, and its alternative reading breaks the quotation marks
- **Where:** variants.json, 11:31, "What should we say?"
- **What is wrong:** Reading 1 is attributed only to "SBLGNT, with a minority of manuscripts". Reading 0 is
  attributed to "most manuscripts". The `why` admits: "This site has not been able to confirm the exact manuscripts".
  brief-nt.md requires every place where SBL, NA28 and THGNT disagree to name "the editions and the manuscripts
  behind each reading". The TAGNT marks confirm the edition split: τί εἴπωμεν is marked `S` only, so NA28, NA27,
  THGNT, WH, Tregelles, TR and the Byzantine text all lack it. That part of the entry is correct.
- **The quote problem:** Reading 1's `plain` is `They talked it over among themselves. "What should we say?`. It
  opens a quotation and never closes it. When a reader switches readings, the verse becomes `... "What should we say?
  "Suppose we say, ...`, with two opening quotes and one closing.
- **Fix:**
  - Take the witnesses from the NA28 apparatus or from Swanson's *New Testament Greek Manuscripts: Mark* and
    attribute them ("as reported in the NA28 apparatus"). My recollection is that the question is a Western and
    Caesarean reading (Codex Bezae, Θ, 565, 700, Old Latin). I cannot confirm that here, so do not copy it
    without checking.
  - Name the major uncials for reading 0 as well (Sinaiticus, Vaticanus and the others).
  - If no apparatus can be reached, say "reported by NA28 as a minority reading" rather than nothing.
  - Rewrite reading 1's `plain` so that it continues straight into the next words, for example
    `They talked it over among themselves. "What should we say? Suppose we say,`. That means anchoring the variant
    across the opening of the quotation, or anchoring on `They talked it over among themselves. "Suppose we say,`.

### 2. Major: 12:23 has no variant entry for "when they rise", which NA28 brackets and THGNT leaves out
- **Where:** plain.txt and variants.json, 12:23
- **What is wrong:** The Plain English Translation reads "At the resurrection, when they rise, which of them will she be wife to?". The
  TAGNT marks for ὅταν ἀναστῶσιν are `NnSTB`. The phrase is in the SBL, the TR and the Byzantine text. It is
  bracketed in NA27/28 (texts/auto: "NA27/28 [ὅταν ἀναστῶσιν]"). It is absent from the Tyndale House edition,
  Westcott-Hort and Tregelles. This is exactly the case brief-nt.md requires an entry for: SBL, NA28 and THGNT
  disagree in a way that changes the English. The Plain English Translation silently follows the SBL. The phrase is commonly reported as
  missing from Sinaiticus, Vaticanus, C, D, L, W and Δ. Verify that list in the NA28 apparatus or Metzger before you
  cite it.
- **Fix:** Add an entry anchored on `when they rise`.
  - Reading 0 (followed): SBLGNT, NA28 in brackets, Byzantine, TR (KJV "when they shall rise"), with the
    manuscripts.
  - Reading 1: THGNT, WH, Tregelles and the oldest uncials, with `plain` "".
  - In `why`, give the usual arguments. The phrase is redundant after "at the resurrection", so it could be a
    Semitic pleonasm typical of Mark, kept by the SBL, or an expansion, dropped by THGNT.
  - Either follow the SBL with reasons or follow THGNT.

### 3. Major: topics.json (parables) says the tenants is "the one parable in Mark told to Jesus' opponents"
- **Where:** topics.json, `parables`, section "The tenants of the vineyard in Mark"
- **What is wrong:** This is false. In Mark 3:23 Jesus "called them over and spoke to them in parables". "Them" is
  the scribes from Jerusalem who said he had Beelzebul (3:22). The sayings on the divided kingdom, the divided house
  and the strong man (3:23–27) are parables told to opponents.
- **Fix:** Say "the one story parable in Mark told to Jesus' opponents, and the only parable in which he nearly names
  himself". Or drop the claim and keep the second half.

### 4. Major: the 10:45 traditions card leaves out the Baptists (and Anglicans), though its own question is "for whom?"
- **Where:** chapters.json, chapter 10, `traditions[0]`, "How does his death save, and for whom?"
- **What is wrong:**
  - The card gives Orthodox, Catholic, Lutheran, Reformed, Methodist and Anabaptist answers.
  - The Baptist tradition is the one most visibly divided on "for whom". Particular Baptists hold particular
    redemption (Second London Confession 1689, 8.5 and 8.8). General and Free Will Baptists hold a general
    atonement. The Baptist Faith and Message (2000) is deliberately broad. Leaving it out drops the clearest
    in-house conflict on the card's own question.
  - Anglicans have a distinct confessional text: Article 31 of the Thirty-Nine Articles, "the perfect redemption,
    propitiation, and satisfaction, for all the sins of the whole world". The Methodist article is taken from it.
  - The Pentecostal view (penal substitution with healing in the atonement, from Isaiah 53:5) is also distinct,
    but that is optional.
- **Fix:**
  - Add a Baptist view that states the division with sources (1689 LBC 8.8; a General or Free Will Baptist
    confession; BF&M 2000 Article II.B or IV).
  - Add an Anglican view citing Article 31, or note under Methodist that Article 20 comes from it.
  - Check that any new source keys exist (e.g. `london-1689`, `thirty-nine-articles`) before using them.

### 5. Minor: the 10:2 variant gives the SBL editor reasoning he did not publish
- **Where:** variants.json, 10:2, `why`
- **What is wrong:** "The SBL editor judged that they were added from Matthew 19:3, and that Mark had the vague
  'they asked' he often uses." The SBLGNT apparatus records only which editions agree. Michael Holmes did not publish
  a commentary giving his reasons, so this is a guess presented as a report. The rest of the entry is sound: the
  choice to follow NA28 and THGNT, and the reading 1 witnesses (D, Old Latin, Sinaitic Syriac).
- **Fix:** "Scholars who prefer the shorter text argue that the words were added from Matthew 19:3 ..." and
  attribute that argument to Metzger, who discusses it. Drop "The SBL editor judged".

### 6. Minor: the 10:29 variant merges two separate variation units
- **Where:** variants.json, 10:29
- **What is wrong:** Reading 0 is "mother, father, children" and reading 1 is "father, mother, wife, children". Two
  variations are mixed together: the order of mother and father, and the addition of "or wife". The witness lists
  then claim Sinaiticus, Bezae, Θ and the others for the SBL order as well as for the omission of "wife", and that is
  not established. (The editions do agree on μητέρα ἢ πατέρα: TAGNT `NnSYWG`.) The writer also flagged this list as
  uncertain.
- **Fix:** Keep the entry about "or wife" only, anchored on `children` or on `mother, father, children`. Make
  reading 1's `plain` change only the wife. Mention the order difference of the Byzantine text in `b` without
  assigning manuscripts. Check the Θ and D placement in the NA28 apparatus.

### 7. Minor: witness lists flagged by the writer that I could not confirm (10:12, 10:13, 12:30, 12:33)
- **Where:** variants.json at 10:12, 10:13, 12:30 and 12:33
- **What is wrong:** The Tischendorf copy in the Source Library is digitized only to about Mark 3, so I could not
  check these apparatus lists against it.
  - What I recall from Metzger and NA matches the 10:12 lists (Western ἐξέλθῃ in D, Θ, f13, 565, 700), the 10:13
    lists (ἐπετίμησαν αὐτοῖς in א B C L Δ Ψ) and the 12:36 lists (ὑποκάτω in B D W).
  - The inclusion of W among the witnesses that omit "and with all the soul" at 12:33 is uncertain.
  - So is the inclusion of D for "This is the first commandment" at 12:30.
  - The THGNT claims at 12:30–31 are correct: TAGNT marks αὕτη πρώτη ἐντολή `YGTB` and ὁμοία `YGTB`.
- **Fix:** Check W and D at 12:33, D at 12:30, and Θ at 10:34 (where it is listed for "after three days") against
  the NA28 apparatus or Swanson. Remove any siglum you cannot confirm.

### 8. Minor: the 11:3 variant `p` misstates who makes the promise
- **Where:** variants.json, 11:3, `p`
- **What is wrong:** "In the oldest manuscripts the disciples promise to send the colt back." In the Greek the
  subject of ἀποστέλλει is "the Lord", and the disciples pass on his promise. The `why` and the Plain English Translation ("He will send
  it straight back here") have it right.
- **Fix:** "In the oldest manuscripts the disciples promise, for the Lord, that the colt will be sent back."

### 9. Minor: the note on 10:22 misdescribes Ezekiel 27:35 in the Septuagint
- **Where:** notes.json, 10:22, "A clouded face"
- **What is wrong:** The note says *stugnazō* is used in the Greek Old Testament "of faces darkened by horror
  (Ezekiel 27:35)". In the LXX of Ezekiel 27:35, ἐστύγνασαν ἐπὶ σέ describes the islanders being appalled over
  Tyre. The faces have a different verb, ἐδάκρυσεν τὸ πρόσωπον αὐτῶν ("their face wept").
- **Fix:** "and in the Greek Old Testament of people appalled at a disaster (Ezekiel 27:35; Ezekiel 32:10)". Or cite
  Ezekiel 28:19 (στυγνὸς ἐγένου).

### 10. Minor: the Catholic view on the 10:45 card misquotes Catechism 615
- **Where:** chapters.json, chapter 10, traditions, Catholic view
- **What is wrong:** The quotation marks enclose "atones for our faults and makes satisfaction for our sins to the
  Father". Catechism 615 reads in the past tense: Jesus "atoned for our faults and made satisfaction for our sins to
  the Father".
- **Fix:** Quote it exactly, or drop the quotation marks and paraphrase.

### 11. Minor: one Greek verb, two English words, and a note that depends on the link
- **Where:** plain.txt 10:14 and 10:41; notes.json, 10:14, "Jesus is indignant"
- **What is wrong:** The note's point is that Mark uses ἀγανακτέω of the disciples (10:41; 14:4) but only here of
  Jesus. The Plain English Translation renders it "grew angry" at 10:14 and "annoyed" at 10:41, so the English reader cannot see the
  link the note draws. The note's own title says "indignant".
- **Fix:** Use one word in both verses, for example "was indignant" or "became indignant". Matthew 20:24
  ("annoyed") is the model for 10:41, so either use "annoyed" in 10:14 too, or keep the two and change the note to
  say the English differs.

### 12. Minor: the note on 10:27 promises the same word "possible" at 14:36, but the Plain English Translation there does not use it
- **Where:** notes.json, 10:27, "Nothing is impossible for God"
- **What is wrong:** The note says "Mark uses the same word, 'possible,' again in Jesus' prayer in Gethsemane
  (14:36)". The Plain English Translation of 14:36 in part 13-16 reads "for you all things can be done". 9:23 does read "anything is
  possible".
- **Fix:** Cross-part alignment: ask the lead to render πάντα δυνατά σοι at 14:36 with "possible", or reword this
  note ("the same Greek word").

### 13. Minor: the 10:21 variant's "take up the cross" does not match the Plain English Translation of 8:34
- **Where:** variants.json, 10:21
- **What is wrong:** The Byzantine addition ἄρας τὸν σταυρόν is rendered "take up the cross", and the `p` says it
  comes "from 8:34". The Plain English Translation of 8:34 reads "pick up his cross".
- **Fix:** Reading 1 `plain`: "And come, pick up the cross and follow me." Change `p` and `t` to match.

### 14. Minor: settings and notes state a debated location as settled
- **Where:** chapters.json, chapter 10, setting 10:2–9 (`when`); notes.json, 10:2, "Why the question was dangerous"
- **What is wrong:** Both put the divorce debate "in Herod Antipas' territory beyond the Jordan" ("Jesus is now in
  the land of Herod Antipas"). But 10:1 says he came into "Judea and the far side of the Jordan", and Mark does not
  say where 10:2 happens. The next card (10:13–16) places the children scene "on the road in Judea", so the cards do
  not agree with each other. The point about Antipas and John's death is fair as a possibility.
- **Fix:** "probably in Perea (Antipas' territory) or Judea; Mark does not say". In the note, write "Jesus may be in
  the land of Herod Antipas".

### 15. Minor: other settings details
- **10:13–16:** `to` names "the parents bringing them". Mark says only that "people" brought them
  (προσέφερον, no subject). Write "the people bringing the children".
- **12:28–34:** `by` is "a scribe, and Jesus" and `to` is "Jesus, and the scribe in reply", which is muddled.
  Write: by "Jesus, answering a scribe"; to "a scribe who had heard the debate, in the temple courts, with the crowd
  present".
- **10:35–45:** `readers` says "the prediction about the cup was known to have come true". That is true of James
  (Acts 12:2) and disputed for John, as note 10:39 itself shows. Write "was known to have come true for James".
- **Chapter 12, `views.H`:** "The temple treasury had thirteen offering chests in the Court of the Women" is stated
  as fact. Note 12:41 rightly says "probably" about the location. Make them agree.

### 16. Minor: Byzantine/TR differences a KJV reader will notice, with no entry
- **12:32:** The TR (KJV "for there is one God") adds θεός; TAGNT marks it `T`. The Plain English Translation reads "he is one". A
  KJV reader will notice. Add a short entry: SBL, NA28 and Byzantine "he is one"; TR "there is one God".
- **12:22:** The Byzantine/TR text reads "And the seven had her, and left no seed". The Plain English Translation reads "None of the
  seven left descendants". This is optional and small.
- **10:50:** The Byzantine/TR text has "rose" (ἀναστάς); NA and SBL have "leaped up" (ἀναπηδήσας). This is optional.
- **10:7:** Westcott-Hort, like Sinaiticus and Vaticanus, leave the clause out (TAGNT marks it `NnSYGTB`, with no W).
  Add "Westcott-Hort" to reading 1's `w`.

### 17. Minor: the chapter 11 deep dive "Why did Jesus act in the temple?" largely repeats Matthew 21's
- **Where:** chapters.json, chapter 11, `deep[0]`
- **What is wrong:** Matthew's chapter 21 deep dive "Why did Jesus overturn the tables?" already gives reform,
  inclusion of the Gentiles and Sanders' sign of destruction. Mark's version restates all three. The brief and STYLE
  say to point to an existing treatment and add only what is new.
- **Fix:** Keep what Mark adds:
  - the fig-tree sandwich;
  - 11:16, the "vessels";
  - "for all the nations", which Matthew lacks;
  - Horsley and Myers on the priestly economy;
  - Fredriksen's doubt.
  For the three standard views, refer to the Matthew 21 deep dive.

### 18. Minor: source keys
- **Duplicate definitions:** collins-mark, france-mark and hooker-mark are each defined, identically, in the
  sources.json of three Mark parts. hengel-studies-mark is defined in two. The build tolerates this, but the lead
  should keep one definition when the book is joined.
- **Two keys for one work:** this part cites the Catechism under two keys: `catechism-catholic` (note 10:38) and
  `ccc` (both cards). Use one; `ccc` is the one in content/sources.json.
- **Undated reference:** note 11:2 names Walter Bauer's argument with no source. Add a key for W. Bauer, "The
  'Colt' of Palm Sunday", *JBL* 72 (1953), or drop the name.

### 19. Minor: smaller accuracy points in notes and glosses
- **Note 12:18 ("The Sadducees"):** "Resurrection is clearly taught in the Hebrew Bible only in Daniel 12:2." Many
  scholars count Isaiah 26:19 as well. Write "most clearly in Daniel 12:2 (compare Isaiah 26:19)".
- **Gloss 10:11:** "commits adultery" glossed as "breaks the marriage bond". This softens the saying and changes
  its sense: Jesus says remarriage is adultery, not that it breaks a bond. Use "is unfaithful in marriage", or
  remove the gloss.
- **Plain English Translation 12:41:** "watched the crowd dropping copper coins into the treasury. Many rich people were dropping in a
  lot." χαλκός here is the ordinary word for money (BDAG), and "copper coins" makes the rich drop in large amounts
  of copper. Write "dropping money into the treasury". Note 12:41 can keep the literal sense.
- **Note 10:45 and the Plain English Translation "in place of many":** The Plain English Translation follows Matthew 20:28's established rendering, so
  this is not a parallel problem. But the Plain English Translation takes the substitutionary sense of ἀντί into the text, while the
  card beside it records traditions that reject substitution. Note 10:45 already explains ἀντί. Flag this for the
  lead as a book-wide decision, and add a sentence that "for many" (as in most English Bibles) keeps both senses
  open.

## Fixes applied
1. Fixed. 11:31 re-anchored on `They talked it over among themselves. "Suppose we say,` so reading 1 runs on ("What should we say? Suppose we say,") with balanced quotes. No apparatus was reachable, so per the lead's ruling each reading names the editions that print it (from the TAGNT edition marks: SBLGNT alone for the question; NA28, NA27, THGNT, WH, Tregelles, Byzantine, TR without it); no manuscripts invented, the gap is stated in `w`, and the old "has not been able to confirm" line is gone from `why`.
2. Fixed. New 12:23 entry anchored on "At the resurrection, when they rise,": SBLGNT, NA27/28 (brackets), Byzantine, TR vs THGNT, WH, Tregelles (edition marks). The Plain English Translation keeps following the SBLGNT, with reasons in `why` (Markan doubling, compare 1:32). The uncial list the reviewer recalled is not cited because it could not be verified.
3. Fixed. The parables topic now says "the one story parable in Mark told to Jesus' opponents (the short sayings of 3:23-27 also answer opponents)".
4. Fixed. Added Anglican (Article 31, `thirty-nine-articles`) and Baptist (divided: 1689 Confession 8.5, 8.8; General and Free Will Baptists; BF&M II.B; keys `london-1689`, `fwb-treatise`, `bfm-2000`, all existing). The Methodist view now says Article 20 keeps the Anglican wording. Pentecostal not added (optional).
5. Fixed. 10:2 `why` now reports the argument of "those who prefer" the shorter text, and says Metzger sets out the problem; the claim about the SBL editor's reasoning is gone. `p` now says "with Codex Bezae", not "following".
6. Fixed. 10:29 is now only about "or wife". Reading 1 changes only the wife ("mother, father, wife, children"), and the Byzantine/TR order father-mother goes in `b` with no manuscripts. D and Θ are removed from reading 0 (they could not be confirmed); WH and Tregelles were added from the edition marks.
7. Partly. No apparatus was reachable, so the questioned sigla were removed: W from 12:33 reading 0, D from 12:30 reading 1, Θ from 10:34 reading 0. The 10:12, 10:13 and 12:36 lists, which the reviewer's recollection supports, are kept.
8. Fixed. 11:3 `p`: "the disciples promise, for the Lord, that the colt will be sent back."
9. Fixed. Note 10:22 now reads "of people appalled at a disaster (Ezekiel 27:35; Ezekiel 32:10)", and `r` is updated.
10. Fixed. The Catholic view quotes Catechism 615 exactly in the past tense ("atoned ... made satisfaction").
11. Partly. Plain English Translation not changed. 10:41 "annoyed" follows Matthew 20:24, and 10:14 "grew angry" matches 14:4 in part 13-16. Following the lead's ἐπιτιμάω ruling, the note now names the Greek verb and says which English each verse uses.
12. Fixed by the lead's decision that 14:36 becomes "for you anything is possible" (part 13-16). The note now says "the same Greek word, dunata, 'possible'", so it holds either way.
13. Fixed. 10:21 reading 1 is "And come, pick up the cross and follow me." (as 8:34 and Matthew 16:24); `t` and `p` are updated.
14. Fixed. Setting 10:2-9 `when` says "probably in Perea (Antipas' territory) or in Judea; Mark does not say where", and `why` is made conditional. Note 10:2 says "Jesus may be in the land of Herod Antipas" ("has already told" replaces "has just told"). Chapter 10 views.H is softened to match.
15. Fixed. 10:13-16 `to` is "the people bringing the children". 12:28-34 by/to are as suggested. 10:35-45 `readers` says "for James". Chapter 12 views.H now says "The Mishnah remembers thirteen offering chests ..., probably in the Court of the Women." In line with the lead's settings ruling, cards also now say where Matthew, Luke or John set a saying differently: 10:2-9, 10:10-12, 10:35-45 (Luke 22:24-27), 10:46-52, 11:15-17, 11:22-25, 12:28-34 (Luke 10:25-37) and 12:38-40.
16. Partly. Added 12:32 (TR "there is one God") and 10:50 (Byzantine/TR "rose" vs "leaped up"), with edition support from the TAGNT marks. Added Westcott-Hort to 10:7 reading 1. 12:22 is declined: the Byzantine wording does not change the sense, and the reviewer marked it optional.
17. Fixed. The chapter 11 deep dive now points to Matthew 21's "Why did Jesus overturn the tables?" for the three standard views. It keeps what Mark adds: the fig-tree sandwich with 11:23 and 14:58, the vessels of 11:16 (Mishnah Berakhot 9:5), "for all the nations", Horsley and Myers, and Fredriksen. Per the lead's road ruling, the chapter 10 road deep dive is also cut to what chapter 10 adds and points to the Mark 8 deep dive and the 8:27 note. Note 10:52 is likewise trimmed to what is new (others are sent home, 5:19 and 8:26; Bartimaeus follows; sesōken).
18. Partly. Note 10:38 now uses `ccc` (the only Catechism key in the part). `bauer-colt` was added (W. Bauer, JBL 72, 1953; no page numbers given because they could not be verified) and cited on note 11:2. collins-mark, france-mark, hooker-mark and hengel-studies-mark are left byte-identical to 01-03's text, which the lead's ruling allows; the lead can drop the copies when the book is joined.
19. Partly. Note 12:18: "most clearly in Daniel 12:2 (compare Isaiah 26:19)". Gloss 10:11 "commits adultery" removed (no gloss is better than a softening one). Plain English Translation 12:41 now reads "dropping money into the treasury", and note 12:41 explains chalkos. On 10:45: the Plain English Translation stays "in place of many" by lead decision; note 10:45 now says that most English Bibles have "for many", which leaves substitution or benefit open, and points to the card.
