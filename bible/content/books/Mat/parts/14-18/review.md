# Hostile review: Matthew 14–18 (part 14-18)

Reviewer: Claude (nt lane), 2026-10-24. Files reviewed: plain.txt, notes.json, variants.json, glosses.json,
chapters.json, topics.json, sources.json in this folder; proposals/nt/topics/peter.json, transfiguration.json,
church-discipline.json, forgiveness.json; Mat/book.json (lenses, audience). Checked against texts/orig/Mat.json
(`sbl`, `byz`, TAGNT edition letters in `w`), content/terms.json and content/proposals/nt/terms.json, Tischendorf's
apparatus in the Source Library (book 6953a88c77f38f6761bd19d6, pages 354–374) and web sources.
`VERBOSE=1 node tools/build.js --check Mat/14-18`: 0 errors and 0 warnings in this part (the one error,
tosefta-sukkah in Num/Isa, and the two book.json quote warnings for 27:25 and 28:19 are not in this part).

## Verdict

This is a strong part. The Plain English Translation was clearly built from the Greek: I compared all 163 translated verses with the
SBLGNT in my head, and with the NIV and ESV. I found no dependence on either: the few close matches are forced by
the Greek ("Courage! It is I," "This will never happen to you"). Names, numbers, tenses and who does what are
right. The policy for 17:21 and 18:11 is followed exactly. 16:2b–3 is kept in the Plain English Translation and can be removed by
switching the variant. 16:8 follows NA28 and THGNT against the SBL and has the variant entry the brief requires.
"Will stand bound" (16:19; 18:18) is a fair, neutral way to render the periphrastic future perfect. "Seventy-seven"
(18:22) is right and well argued. "Moonstruck" (17:15) keeps the Greek image, and a gloss and a note explain it.
That choice is defensible. The 22 setting cards cover every speech and both parables. The six traditions cards
cite real documents at the right places.

What needs fixing:
- 14:33 breaks a binding term: "worship" for προσκυνέω, at a verse the term list names.
- The 16:2–3 variant entries describe NA28's brackets wrongly.
- The Peter cards and setting misstate three traditions: the Catholic card softens the claim of jurisdiction, the
  Baptist card puts words in a confession that it does not contain, and the setting card says the Orthodox give
  Peter no successor.
- The 16:18 note states the petros/petra question as settled.
- The rest are minor: citations, witness lists, parallel wording and mechanics.

Verdict: **pass after fixes**. Findings: 6 major, 17 minor, no critical.

## Findings

### 1. Major: 14:33 uses "worship" for προσκυνέω, against a binding term
- **Location:** plain.txt 14:33, "fell down before him in worship".
- **Problem:** content/proposals/nt/terms.json, προσκυνέω (Gospels), says: "bow down to / bow down before (in every
  Gospel scene, including 2:2, 4:9–10, 14:33, 28:9, 17) ... 'worship' only where no bodily act is in view." This
  verse is named in the rule. The Greek is οἱ δὲ ἐν τῷ πλοίῳ προσεκύνησαν αὐτῷ: a bodily act in the boat. The same
  part follows the term at 15:25 ("bowed down before him") and 18:26 ("bowed low before him"), so 14:33 is out of
  line even inside this part.
- **Fix:** Use, for example, "The ones in the boat bowed down before him and said, ..." Keep the note at 14:33,
  which already says the verb can also mean worship.
  (Report to the lane lead: 26-28 has the same problem at 28:9 and 28:17.)

### 2. Major: 16:2 and 16:3 variants say NA28 uses double brackets
- **Location:** variants.json 16:2 (`p`, reading 0 `w`) and 16:3 (reading 0 `w`).
- **Problem:** NA27/NA28 print 16:2b–3 in single square brackets, and UBS gives it a {C} rating. That means the text
  is doubtful. NA28 keeps double brackets for passages it judges to be later additions (Mark 16:9–20; John
  7:53–8:11; Luke 22:43–44; 23:34a). Metzger's Textual Commentary also says the committee kept the words "enclosed
  within square brackets". As written, the entry tells the reader that NA28 judges the words not original, which
  overstates the case for omission. (Westcott-Hort is the edition that used double brackets here.)
- **Fix:** Change all three mentions to "NA28 (in square brackets, as doubtful)". You may add "Westcott-Hort (in
  double brackets)" to reading 0. The `why` text ("prints them but marks them as doubtful") can stay.

### 3. Major: the Peter card's Catholic view softens the claim at issue
- **Location:** chapters.json ch. 16, traditions card "Did Jesus make Peter and his successors the head of the
  church", Catholic view.
- **Problem:** The view ends: "The pope's authority is a service of unity, exercised together with the bishops."
  The texts it cites say more. Pastor Aeternus ch. 3 defines the pope's "full and supreme power of jurisdiction over
  the whole church", which is "ordinary and immediate". Lumen Gentium 22 says the Roman Pontiff "has full, supreme
  and universal power over the Church. And he is always free to exercise this power". The college of bishops has
  that power only together with its head, not the other way round. The card also cites only chapters 1–2 of Pastor
  Aeternus and leaves out ch. 4, on infallibility. This universal, immediate jurisdiction is exactly what the
  Orthodox and Protestant answers reject, so softening it makes the disagreement look smaller than it is.
- **Fix:** For example: "...continues in the bishop of Rome, who holds full, supreme and universal power over the
  whole church, which he can always exercise freely (Pastor Aeternus 3; Lumen Gentium 22), and who teaches
  infallibly when he defines a doctrine ex cathedra (Pastor Aeternus 4). The bishops share in governing the church
  in communion with him, and recent popes describe the office as a service of unity (Ut Unum Sint 94–96)." Cite
  Ut Unum Sint only if you add a source key for it.

### 4. Major: the Peter card's Baptist view puts words in the Baptist Faith and Message
- **Location:** chapters.json ch. 16, Peter card, Baptist view: "...Peter's confession of Jesus is the rock every
  believer stands on (Baptist Faith and Message, art. 6)."
- **Problem:** Article VI ("The Church") of the Baptist Faith and Message 2000 says nothing about Peter, his
  confession or "the rock". It speaks of the autonomous local congregation and its officers. The 1689 London
  Confession 26.4 does deal with the papacy, and in sharper words than the card ("neither can the Pope of Rome in
  any sense be head thereof"). The binding-and-loosing card has a similar problem: its Baptist view ("no minister
  has power to forgive sins, but every believer can declare God's forgiveness") is sourced to london-1689, which does
  not say this.
- **Fix:** Attribute only what each confession says. For the rock, name a Baptist interpreter who holds the
  confession reading (for example John A. Broadus, *Commentary on Matthew*, 1886, whose reading of 16:18 should
  be checked before citing), or present it as "many Baptist interpreters" without a confession. Keep "Christ is
  the only head of the church (London Confession 1689, 26.4)". In the keys card, cite only 1689 26.7–12 for the
  congregation's power to receive and exclude members, and drop the clause on declaring forgiveness or give it a
  real source.

### 5. Major: the 16:13–20 setting card says the Orthodox give Peter "no successor"
- **Location:** chapters.json ch. 16, settings 16:13–20, `views` "Peter as first among equals": "Many Orthodox and
  Protestant scholars see Peter as the first leader of the apostles, without a successor."
- **Problem:** This misstates the Orthodox view and contradicts the part's own traditions card, which rightly says
  that for the Orthodox "Peter's chair belongs to every bishop who confesses his faith". Orthodox theology gives
  Peter successors: every bishop (Cyprian, Afanasiev, Meyendorff), and in honor the sees of Rome and Antioch.
- **Fix:** Split the view. For the Orthodox: "Peter was first among the apostles; his succession lives in every
  bishop who keeps his faith, and Rome once held a primacy of honor, not of jurisdiction." For Protestants: "Peter
  was the first leader of the apostles; his role as foundation was unique and passed to no office."

### 6. Major: the 16:18 note states the petros/petra question as settled
- **Location:** notes.json 16:18, "you are Peter, and on this rock": "The old claim that petros means a small stone
  and petra bedrock does not hold for the Greek of this period; the masculine form was needed for a man's name."
- **Problem:** This is the majority view of modern commentators (Carson, France, Davies and Allison, Luz), and the
  argument about the masculine name is the standard one. But the note states it as fact and calls the other view
  "old". The distinction is real in earlier Greek: πέτρος is a stone or boulder, πέτρα a rock mass. Whether it still
  held in Koine Greek is disputed, partly because πέτρος is rare in that period. Chrys C. Caragounis, *Peter and the
  Rock* (BZNW 58, 1990), argues on linguistic grounds that ταύτῃ τῇ πέτρᾳ refers to Peter's confession, not to
  Peter. On the verse that divides the churches most, STYLE requires that consensus be called consensus and that the
  dissent be named. The rest of the note, with its four readings, is fair and well sourced: Augustine's
  Retractations 1.21 and Origen's every-believer reading are both correctly reported.
- **Fix:** For example: "Most scholars today think the difference between petros ('stone') and petra ('rock')
  matters little here. The two words had largely merged in the Greek of this period, and a man's name needed the
  masculine form. Some, such as Chrys Caragounis, still argue that the change of word points away from Peter to his
  confession." Add a source key for Caragounis.

### 7. Minor: 16:8 and 15:6 treat agreement with Mark as evidence for a reading
- **Location:** variants.json 16:8 `why` ("'You have' agrees with Mark 8:17 and has the older manuscripts"); 15:6
  "God's word" `why` ("the parallel in Mark 7:13 also has 'word'").
- **Problem:** Elsewhere in this part (14:24, 17:4, 17:9) the writer argues, correctly, that a reading matching the
  Synoptic parallel is suspect, because copyists harmonized. Here agreement with Mark is counted in favor. For 16:8
  that argument actually cuts against ἔχετε. The case for following NA28 and THGNT rests on the external evidence
  (א B D Θ f13 against C L W f1 and the Byzantine text) and on ἐλάβετε echoing 16:7.
- **Fix:** In 16:8, say plainly that matching Mark 8:17 could be a harmonization, and rest the decision on the
  manuscripts and on the echo of 16:7. In 15:6, drop the appeal to Mark or flag it in the same way.

### 8. Minor: witness lists for 14:29, 17:15 and 18:26 cite Metzger, who does not discuss them
- **Location:** variants.json 14:29, 17:15, 18:26 (all `s: ["metzger"]`).
- **Problem:** Metzger's Textual Commentary has no entry for 17:15 or 18:26, and as far as I can see none for
  14:29. The manuscripts named are therefore unsourced. I checked the two later verses in Tischendorf's apparatus
  (Source Library, pp. 366 and 373):
  - 17:15: κακῶς πάσχει is read by C D and the later uncials; κακῶς ἔχει by B L Z and Origen. The entry is right
    as far as it goes, but Bezae belongs in reading 0, and L, Z and Origen in reading 1.
  - 18:26: B and D omit κύριε; L and most later uncials have it. This is consistent with the entry, but the copy
    of the apparatus I could read does not show Sinaiticus, so "Sinaiticus" in reading 1 is unconfirmed.
  - 14:29: "Codex Vaticanus (03) and others" is vague. The `why` says "the critical editions agree on 'he came'",
    yet the TAGNT letters show that Tregelles reads ἐλθεῖν (καὶ ἦλθεν is marked NnSYW only).
- **Fix:** Replace `metzger` with the Tischendorf source key, or with the NA28 apparatus "as reported". Add the
  witnesses above. Mark any manuscript you cannot confirm as "reported" or drop it. In 14:29, write "NA28, SBL,
  THGNT and Westcott-Hort agree" rather than "the critical editions agree".

### 9. Minor: the 16:19 note says "most grammarians" read the form as "will stand"
- **Location:** notes.json 16:19, "Anything you bind on earth will stand bound in heaven".
- **Problem:** "Most grammarians think the form simply means the decision 'will stand' in heaven" is not sourced and
  overstates a live debate. J. R. Mantey and the NASB ("shall have been bound") read the form as heaven's prior
  decision. H. J. Cadbury and others read it as an ordinary future. Stanley Porter and D. A. Carson discuss its
  stative force. The Plain English Translation's "will stand bound" is a good middle rendering; the note just needs to describe the
  debate fairly.
- **Fix:** Name the two readings with a holder for each, say the Plain English Translation chooses a stative "will stand" that leaves
  both open, and cite a source (Carson in EBC, or Porter's *Idioms*).

### 10. Minor: the Peter card's Orthodox view needs two qualifications (Cyprian, Ravenna)
- **Location:** chapters.json ch. 16, Peter card, Orthodox view; sources.json `cyprian-unity`.
- **Problem:**
  - *On the Unity of the Church* 4 survives in two versions. The "Primacy Text" says "a primacy is given to
    Peter" and is a favorite Catholic proof text. The "Received Text" says the other apostles were what Peter was.
    "The episcopate is one, each part held by each" is chapter 5. Citing chapter 4 alone, for the Orthodox side,
    hides this.
  - Ravenna (2007) was signed without the Moscow Patriarchate, which had withdrawn from the session. Its Holy Synod
    later rejected the idea of a universal primacy of jurisdiction ("Position of the Moscow Patriarchate on the
    problem of primacy in the Universal Church", 2013). The card's "Catholic and Orthodox theologians agreed" should
    say the Orthodox are divided on it.
- **Fix:** Cite "On the Unity of the Church 4–5 (the received text)" and change the source key's text to match. Add:
  "The Moscow Patriarchate did not sign and later rejected this reading (2013)."

### 11. Minor: the Peter card has no "rock = Peter, but no succession" Protestant view
- **Location:** chapters.json ch. 16, Peter card (card-level `s: ["cullmann-peter"]`).
- **Problem:** Cullmann is the card's only card-level source, yet his position does not appear in any view. Cullmann
  was a Lutheran, and many Protestant scholars follow him (France, Carson): the rock is Peter himself, as foundation
  apostle, but the role is unique and has no successor. The Lutheran view on the card gives only the older
  confessional answer ("the faith Peter confessed"). The 16:18 note and the chapter's deep section mention this
  scholarly view; the card should too, since it is where the question is answered.
- **Fix:** Add to the Lutheran or Reformed view: "Many Protestant scholars today, following Oscar Cullmann, agree
  that the rock is Peter himself, but as the unrepeatable foundation apostle, with no successor."

### 12. Minor: parallel sayings are worded differently where the Greek is the same
- **Location:** plain.txt 16:4 against 11-13's 12:39; 18:8–9 against 05-07's 5:29–30.
- **Problem:** The brief says the same Greek gets the same English. 16:4 has the same Greek as 12:39 apart from τοῦ
  προφήτου, and the 16:4 note itself says "Jesus says the same words here as in 12:39". But 12:39 reads "keeps
  hunting for a sign. It will be given no sign except the sign of Jonah", while 16:4 reads "hunts for a sign, but
  the only sign it will be given is the sign of Jonah". Likewise ἔκκοψον ... καὶ βάλε ἀπὸ σοῦ is "cut it off and
  fling it away from you" at 5:30 but "chop it off and fling it away" at 18:8, and ἔξελε αὐτὸν καὶ βάλε ἀπὸ σοῦ
  loses "from you" at 18:9.
- **Fix:** Align 16:4 with 12:39, the earlier part, which is the model: "keeps hunting for a sign. It will be given
  no sign except the sign of Jonah." Align 18:8–9 with 5:29–30 ("cut it off and fling it away from you"; "pull it
  out and fling it away from you").

### 13. Minor: Temple-tax and Qumran citations (17:24, 17:27, 16:18)
- **Location:** notes.json 17:24 ("a text from Qumran"), 17:27 (Tosefta Ketubot 13:3), 16:18 ekklēsia note (War
  Scroll 4:10).
- **Problem:**
  - 17:24: The claim is right. 4Q159 (Ordinances) frag. 1 ii 6–7 limits the half-shekel to once in a lifetime. But
    the note does not name the text, so a reader cannot check it.
  - 17:27: The passage ("Silver, wherever the Torah mentions it, is Tyrian silver") is numbered differently in
    different editions. Some cite t. Ketubot 13:3, others 13:20 (Zuckermandel). It also says that the Torah's
    "silver" means Tyrian coin, not, in so many words, that "the Temple required payment in the shekel of Tyre".
    Mishnah Bekhorot 8:7 ("by the Tyrian maneh") is the closer support.
  - 16:18: 1QM 4:10 does have qehal 'el, "assembly of God". It is one of the names written on the banners of the
    end-time army, not the sect's ordinary name for itself.
  - Josephus, *Antiquities* 14.450 (18:6 note) checks out: the Galileans drowned Herod's partisans in the lake.
- **Fix:**
  - 17:24: write "a text from Qumran (4Q159, the Ordinances)".
  - 17:27: write "Rabbinic texts say that the 'silver' of the Torah means Tyrian silver (Tosefta Ketubot 13:20 in
    Zuckermandel's numbering; Mishnah Bekhorot 8:7)", and soften "required" to "expected" or "valued".
  - 16:18: write "The War Scroll writes 'the assembly of God' on the banners of its end-time army (1QM 4:10)".

### 14. Minor: the 15:32 note's Augustine attribution and "seven ... seventy"
- **Location:** notes.json 15:32, "Symbolic readings go back to Augustine: the twelve baskets for Israel, the seven
  for the Gentile nations (seven for completeness, or the seventy nations of Genesis 10)"; s: augustine-harmony.
- **Problem:** *The Harmony of the Gospels* (2.50) argues that the two feedings were separate events. It does not
  give this symbolism. The reading of the two feedings as Jews and Gentiles is usually traced to Hilary of Poitiers
  (*Commentary on Matthew* 15) and later writers. "Seventy" does not explain "seven", so the parenthesis is muddled.
- **Fix:** Re-source the symbolic reading (Hilary, with a key) or make it unattributed ("some church fathers"), and
  drop or fix the Genesis 10 clause.

### 15. Minor: the 14:4 note's levirate argument
- **Location:** notes.json 14:4: "The one exception, levirate marriage (Deuteronomy 25:5–10), applied only when the
  brother had died without a son. Herodias' husband was alive, and she had a daughter."
- **Problem:** Having a daughter is irrelevant: the levirate law is about a son (or, in later reading, any child),
  and the decisive fact is that the husband was alive. As written, the clause suggests a daughter would bar the
  levirate.
- **Fix:** End at "Herodias' husband was still alive." (If you keep the child, say that she had borne him a child,
  which by later Jewish reading also ruled out the levirate.)

### 16. Minor: the 15:22 note calls Tamar a Canaanite as fact
- **Location:** notes.json 15:22, "Yet Matthew's genealogy already includes Canaanite women, Tamar and Rahab."
- **Problem:** Genesis 38 does not give Tamar's people. Jewish tradition varies: Jubilees 41:1 makes her an
  Aramean, and Philo a proselyte. Rahab is clearly Canaanite.
- **Fix:** Write "Rahab, a Canaanite, and Tamar, probably one".

### 17. Minor: settings and chapter views state debated points as settled, or contradict the notes
- **Location:** chapters.json:
  - ch. 16 settings 16:2–4 `when`: "on the western shore near Magadan";
  - ch. 15 settings 15:10–20 `readers`: "For a mixed church of Jews and Gentiles";
  - ch. 14 view H: "like the one found near Magdala in 1986";
  - ch. 17 settings 17:5 `by`: "God the Father".
- **Problem:**
  - The part's own 15:39 note says Magadan's location is unknown and may be on the east side.
  - The make-up of Matthew's church is debated (book.json gives views), and the other cards in this part speak of
    Jewish-Christian readers.
  - The boat note at 14:34 says Ginosar.
  - The text presents the speaker as "a voice from the cloud". `by` should follow the text.
  - Also, 14:1–2 (Herod's words to his court) has no setting card. The card would be short, but the brief asks for
    every speech.
- **Fix:**
  - 16:2–4: "near Magadan (location unknown)".
  - 15:10–20: "For Matthew's readers, Jewish believers who were learning to share a table with Gentiles..."
  - Ch. 14 view H: "between Ginosar and Magdala".
  - 17:5: `by` "a voice from the bright cloud (God, who calls Jesus 'my Son')".
  - Add a small 14:1–2 card: Herod to his court servants, fear and guilt.

### 18. Minor: Claude's theory is told twice and misses its best evidence
- **Location:** notes.json 14:30 (spec note), chapters.json ch. 14 deep spec box (the same theory), and
  topics.json peter `claude`.
- **Problem:** STYLE says to explain a point once and then refer to it. The note and the chapter box give the same
  argument almost word for word. Both also miss the strongest support: the Greek of Exodus 15:4 uses the very verb,
  κατεπόντισεν ("he sank" Pharaoh's officers in the Red Sea), right before 15:5's "like a stone". The box's
  concession that the verb "was common enough in Greek to appear by chance" would then need rewording.
- **Fix:** Keep the full argument in the chapter box, cut the note to a pointer ("Claude's theory: see the box on
  the chapter page"), and add the Exodus 15:4 Septuagint use.

### 19. Minor: small additions and softenings in the Plain English Translation
- **Location and fix:**
  - 14:15, "the time for eating has already gone by": ἡ ὥρα ἤδη παρῆλθεν is "the hour is already late". "For
    eating" is added. Write "it is already late".
  - 16:1, "demanded": ἐπηρώτησαν is "asked". The Plain English Translation sharpens it; "asked him to show them" is enough, since
    πειράζοντες already gives the hostility.
  - 18:32, "when you pleaded with me": ἐπεί is causal. Write "because you pleaded with me".
  - 17:27, "a silver stater": "silver" is not in the Greek. Drop it, or move it to a gloss (the note already says
    the coin was silver).
  - 14:22, "pressed": ἠνάγκασεν is "made, compelled", and the note says so. "Made the disciples get into" is
    accurate and still not dependent on another version.

### 20. Minor: the 14:27 note's quotation format and two small inaccuracies
- **Location:** notes.json 14:27.
- **Problem:**
  - STYLE asks for the version after a comma: "(Exodus 19:4, KJV)". The note writes "(Exodus 3:14 LXX)",
    "(Isaiah 43:10 LXX)" and "(Isaiah 51:12 LXX)". The build tolerates this (its OTHER pattern skips any reference
    containing LXX), but the house form has the comma, and "LXX" is unexplained jargon for the reader. The Greek
    wording quoted for Exodus 3:14 (ἐγώ εἰμι ὁ ὤν, "I am the one who is") is correct.
  - "so that you may know and believe that I am" skips "and understand" (καὶ συνῆτε) without "...".
  - "'Courage' and 'Do not be afraid' are also God's words to Israel in Isaiah 41:10, 13": only "Do not be afraid"
    (μὴ φοβοῦ) is there. θαρσεῖτε is not.
- **Fix:** Write "(Exodus 3:14, Septuagint)" and so on. Insert "..." in the Isaiah 43:10 quotation. Write "'Do not
  be afraid' is also God's word to Israel...".

### 21. Minor: two variants a careful reader would want are missing
- **Location:** variants.json, 14:3 and 18:29.
- **Problem:**
  - 14:3: Bezae and some Old Latin omit "Philip" (Φιλίππου), and Metzger discusses it. This bears directly on the
    historical problem the 14:3 note raises (Josephus calls Herodias' first husband Herod).
  - 18:29: The KJV's "fell down at his feet" (εἰς τοὺς πόδας αὐτοῦ, C³ and the Byzantine text) and "I will pay thee
    all" (πάντα, TR) are absent from the Plain English Translation. A KJV reader will notice both. They also bear on the 18:26 entry's
    claim that "Matthew seems to make the two pleas match word for word": in the critical text the second plea lacks
    πάντα.
- **Fix:** Add a 14:3 entry (D it, reported by Metzger) and an 18:29 entry. Soften "word for word" in 18:26 to
  "nearly word for word".

### 22. Minor: topic aliases and links (proposals/nt/topics)
- **Location:** peter.json `aka`; transfiguration.json `aka`; forgiveness.json.
- **Problem:** None of the four proposals duplicates an existing topic, and no `aka` collides with another file's
  id, title or alias (checked against all 471 topic files). But:
  - peter.json's alias "the rock" will catch searches for God as "the Rock" (Deuteronomy 32:4; Psalm 18:2) and for
    Christ the rock (1 Corinthians 10:4). It also builds one side's reading of 16:18 into the site's search.
  - transfiguration.json's alias "the holy mountain" will catch Zion texts (Psalm 2:6; Isaiah 11:9), although
    2 Peter 1:18 is the only verse that uses it of the transfiguration.
  - forgiveness.json has no `related` links to its nearest neighbors, mercy and repentance (and day-of-atonement).
- **Fix:** Drop "the rock" (keep "Cephas" and "Kepha"). Drop or qualify "the holy mountain". Add
  `"related": ["mercy", "repentance"]` to forgiveness.json.

### 23. Minor: mechanics and small wording points
- **Location and fix:**
  - notes.json 16:13 "the Son of Man": a `word` note with no `orig` and no `kind`. Add ὁ υἱὸς τοῦ ἀνθρώπου (ho
    huios tou anthrōpou) and kind `deb`.
  - The `p` previews at 14:5 (123 characters), 14:20 (128) and 17:17 (121) are over the 120 limit. Shorten them.
  - Ch. 16 view L, "Peter the rock (<i>petra</i>)": Peter is πέτρος. Write "Peter, named for the rock".
  - Ch. 18 view J says the wrongdoer's duty to seek reconciliation is "a point Matthew's discourse assumes
    (18:15)". 18:15 has the wronged person go first, the reverse. Rephrase: "Matthew puts the first step on the one
    who was wronged."
  - glosses.json 18:9 "the fire of Gehenna => the fire of hell" undoes the 18:9 note ("English 'hell' hides the place
    name"). Write "the fire of the place of final punishment".
  - The food-laws card (ch. 15) has no Lutheran view, although Augsburg Confession art. 26, on the distinction of
    foods, cites Matthew 15:9 and 15:11 directly. Add one (key `augsburg` exists).
  - The Scripture-and-tradition card's Lutheran view cites art. 28. Check that citation, and consider citing art. 26
    as well, since it is the article built on this passage.

## Checked and found sound (no action)

- **Translation:**
  - Every verse was checked against `sbl`. No omissions or additions beyond those in finding 19.
  - 16:18 "will not be stronger than it" is a literal rendering of κατισχύσουσιν that leaves both the defensive and
    the attacking reading open.
  - 16:19 and 18:18 "will stand bound" fits the periphrastic perfect.
  - 18:22 "seventy-seven" is supported by Genesis 4:24 in the Septuagint (ἑβδομηκοντάκις ἑπτά).
  - 17:15 "moonstruck" comes with a gloss and a note.
- **Binding terms:**
  - Followed: "Amen, I tell you", "slave", "Gehenna", "Hades", "church", "the Messiah", "tassel" (14:36), "you with
    so little faith", "scribes" (with gloss), "hypocrite" (with gloss).
  - Not followed: προσκυνέω at 14:33 (finding 1).
- **Omitted verses:** 17:21 and 18:11 follow the brief to the letter. The Greek of the added verses matches the
  TAGNT words marked GTB and TB.
- **Variant witnesses:** Generally accurate where Metzger discusses the place: 14:24, 14:30, 15:4, 15:6, 15:8,
  15:14, 15:39, 16:2–3 (apart from the brackets), 16:4, 16:13, 16:20, 16:21, 17:4, 17:9, 17:11, 17:20, 17:21,
  17:22, 18:11, 18:14, 18:15, 18:35. The 17:20 reading was confirmed in Tischendorf, including Chrysostom's comment
  on ὀλιγοπιστία.
- **Facts checked:**
  - Antipas's exile in AD 39 (*Antiquities* 18.240–255); Aretas's victory in AD 36.
  - The 1986 Galilee boat; Juvenal, *Satires* 3.14 on the kophinos.
  - Josephus, *Antiquities* 13.297 and *Jewish War* 1.111, 2.75, 7.218; *Antiquities* 14.450 and 17.318.
  - Mishnah Shekalim 1:3–4, Nedarim 9:1, Avot 3:2, Eduyot 8:7; Talmud Yoma 86b and Berakhot 64a.
  - Community Rule 1QS 2:19–23, 5:24–6:1 and 8:5; Damascus Document 9:2–8.
  - Didache 2:2; Gospel of Thomas 107; Eusebius on Origen; Justin, *Dialogue* 8; Sirach 48:10.
  - The heights of Tabor and Hermon; the dates of the feasts on 6 August, 29 August and 2 October; Wrede (1901).
- **Traditions sourcing:**
  - Catechism 80–83, 336, 552–553, 582, 881–882, 1444–1445.
  - Code of Canon Law 1331 and 1358.
  - Westminster Confession 1.6, 19.3 and 30; Belgic Confession 29 and 32; Heidelberg Catechism 83–85.
  - Smalcald Articles II.4 and III.9; Melanchthon's *Treatise* (1537).
  - Calvin, *Institutes* 1.14.7 and 4.6.
  - Article 37 of the Thirty-Nine Articles; ARCIC, *The Gift of Authority* (1999).
  - Schleitheim art. 2; Dordrecht arts. 16–17; Adventist Fundamental Belief 22.
  - Baptist Faith and Message art. 1.
  - All accurate. Pastor Aeternus and Ravenna are real and correctly dated (see findings 3 and 10 for how they are
    used).
- **Settings:** All 22 cards present (3, 4, 4, 5, 6 by chapter). The hearers are named exactly, and the `why` and
  `readers` layers are kept apart. The parable of the lost sheep notes its Lucan setting, as the brief asks.
- **Topics:** No duplicates among the four proposals. All `top` ids exist. The writings outside the 66 books are
  all in works.json or the nt works proposals.
- **Style:** No em-dashes in any file. Reading level is about 8th grade.

## Fixes applied


1. Applied. 14:33 now "bowed down before him and said" (binding term for προσκυνέω). The 14:33 note says the verb can also mean worship, and the 14:25 note now speaks of "bowing down". The 28:9/28:17 issue in 26-28 was passed on to the lead in my report.
2. Applied. 16:2 and 16:3 now say "NA28 (in square brackets, as doubtful)". Reading 0 of 16:2 adds "Westcott-Hort (in double brackets)".
3. Applied. Catholic view now quotes Pastor Aeternus 3 (full, supreme, ordinary and immediate jurisdiction), Lumen Gentium 22 / Catechism 882 and Pastor Aeternus 4 (ex cathedra), and gives Ut Unum Sint 94–96 for "service of unity". New key: ut-unum-sint.
4. Applied. Baptist view now quotes only 1689 26.4 and says that BF&M art. 6 does not discuss Peter. The rock reading is given as "many Baptist interpreters", with no confession attached. On the keys card, the Baptist view cites only 1689 26.7–12, and the clause on declaring forgiveness is dropped.
5. Applied. The 16:13–20 setting now gives separate views: Catholic office, Orthodox (succession in every bishop; Rome's primacy of honor), Protestant (unique foundation, no successor), and Peter as model.
6. Applied. The 16:18 note now gives the older petros/petra distinction, the majority view as the majority view, and Caragounis's dissent. New key: caragounis-peter.
7. Applied. 16:8 now rests on the manuscripts and the echo of 16:7, and says agreement with Mark 8:17 could be harmonization. 15:6 now flags the Mark 7:13 match in the same way.
8. Applied. 17:15 and 18:26 now carry the reviewer's Tischendorf readings (key tischendorf-nt8, same text as 08-10). Bezae is in reading 0 at 17:15; L, Z and Origen are in reading 1. Sinaiticus is dropped at 17:15 and 18:26. 14:29 now names editions only (nestle-aland-28) and says "NA28, SBL, THGNT and Westcott-Hort agree; Tregelles has 'to come'".
9. Applied. The 16:19 note now names Mantey (prior heavenly decision, NASB), Cadbury (simple future) and Porter (stative), and says the Plain English Translation's "will stand bound" leaves both open. New keys: mantey-jbl-1939, cadbury-jbl-1939, porter-idioms.
10. Applied. Cyprian is cited as chapters 4–5 (received text), and the key text notes the primacy-text version. Ravenna is qualified: Moscow did not sign and rejected a universal primacy of jurisdiction in 2013 (new key moscow-primacy-2013).
11. Applied. The Lutheran view adds Cullmann and the many Protestant scholars who follow him (rock = Peter, unrepeatable foundation apostle, no successor), with key cullmann-peter.
12. Applied (also lane decision 2). 16:4 now matches 12:39 ("keeps hunting for a sign. It will be given no sign except the sign of Jonah"). 18:8–9 now match 5:29–30 ("cut it off and fling it away from you"; "pull it out and fling it away from you"). 16:21 now opens like 4:17 ("From then on Jesus began to make clear..."), with the note, variant anchor and chapter quotation updated. 15:24 now matches 10:6 ("the sheep of the house of Israel that are lost"), with the note anchor and topics.json quotations updated. 17:5 already matched 3:17. There is no fulfillment formula in 14–18.
13. Applied. 17:24 now names 4Q159 (the Ordinances). 17:27 now cites Mishnah Bekhorot 8:7 and Tosefta Ketubot 13:20 (Zuckermandel) and says "valued", not "required". 16:18 now describes the War Scroll banner use (1QM 4:10).
14. Applied. The symbolic reading of the two feedings is now unattributed ("some church fathers and later writers"), and the Genesis 10 clause is dropped. Augustine, Harmony 2.50, is now cited for the two-events view.
15. Applied. The 14:4 note now ends "Herodias' husband was still alive."
16. Applied. The 15:22 note now reads "Rahab, a Canaanite, and Tamar, probably one".
17. Applied. 16:2–4: "near Magadan (location unknown)". 15:10–20 readers: Jewish believers learning to share a table with Gentiles. Ch. 14 view H: "between Ginosar and Magdala". 17:5 `by`: a voice from the bright cloud (God). A new 14:1–2 setting card covers Herod's words to his court servants.
18. Applied. The 14:30 note is now a short pointer to the chapter box. The box adds the Exodus 15:4 Septuagint use of κατεποντίζω and reworks the concession. The topics.json peter `claude` entry is updated to match.
19. Applied. 14:15 "it is already late"; 16:1 "asked him to show them"; 18:32 "because you pleaded with me"; 17:27 "a stater" (new gloss "a silver coin worth four drachmas"; note anchor moved); 14:22 "made the disciples get into the boat" (note anchor moved).
20. Applied. The house form "(Exodus 3:14, LXX)" is now used, with "LXX" explained once as the Septuagint. "..." is added in the Isaiah 43:10 quotation. The note now says only "Do not be afraid" is God's word in Isaiah 41 and 43.
21. Applied. New variants: 14:3 "Philip" (Bezae and some Old Latin omit it, as reported by Metzger, linked to the Josephus problem); 18:29 "at his feet" (Byzantine/TR); 18:29 "all" (TR). 18:26 now says "nearly word for word".
22. Applied. "the rock" is dropped from peter.json and "the holy mountain" from transfiguration.json (lane decision 5). forgiveness.json now has related: mercy, repentance, day-of-atonement.
23. Applied. The 16:13 note now has orig ὁ υἱὸς τοῦ ἀνθρώπου and kind deb. Previews at 14:5, 14:20 and 17:17 are under 120 characters. Ch. 16 view L now reads "Peter, named for the rock". Ch. 18 view J says Matthew puts the first step on the one who was wronged. The 18:9 gloss is now "the fire of the place of final punishment". The food-laws card has a Lutheran view (Augsburg 26). The Scripture-and-tradition Lutheran view now cites arts. 26 and 28.
Also fixed: quotations of 11:14 (to the revised 11-13 Plain English Translation) and of 16:21 in chapters.json. `VERBOSE=1 node tools/build.js --check Mat/14-18` gives 0 errors, 0 warnings.
