# Hostile review: Luke 11–13 (part 11-13)

## Verdict

This is a strong, careful part. I checked every verse against the SBLGNT and the Byzantine text, every parallel
against Matthew's published Plain and Mark's reviewed Plain, every quotation of another book against that book's
current Plain, and the main historical and rabbinic claims: Mishnah Sheviit 9:1 on rue, Avot 2:8 and 4:15, Taanit
2:1, Shekalim 1:1, Yoma 8:6, CD 11:5–6 and 13–14, Josephus Ant. 8.46–49, 16.182, 18.55–62, 85–89 and 118–119, Philo
Embassy 302, Gittin 57b and Sanhedrin 96b, Lumen Gentium 58, Augustine's On Holy Virginity 3, Gregory the Great's
Homily 31, Tertullian's On the Soul 58, Pliny NH 19.170, LXX Isaiah 45:16 and Exodus 34:10, 4 Maccabees 15:28, and the
Syriac Ahiqar palm-tree fable. I found no invented source, reading or fragment.

The translation follows the SBL faithfully. Where Luke's Greek matches Matthew's, the Plain matches Matthew's English
almost everywhere, and it differs exactly where the Greek differs: 11:3 "Keep giving us each day", 11:4 "sins", 12:25
"a cubit" without "even one", 12:42 "manager", 12:44 "truly", 12:46 "the unfaithful", 13:34 "brood". "The word of God"
at 11:28 follows the lead decision. The woes are handled fairly: the notes on tithing rue, hand-washing and hidden
graves, and the deep dive on the woes, give the Pharisees their due without softening Jesus' words. 13:1–5 says
plainly that there is no outside record and accurately sets out Pilate's record in Josephus and Philo. The variant
entries on the Lord's Prayer are accurate, including the "Holy Spirit" petition (162, 700, Gregory of Nyssa,
Maximus, Marcion via Tertullian) and the Byzantine harmonizations. Every card and note this part points to (Matthew
6, 10, 12, 19, 24; Acts 2 and 4; Isaiah 59) exists. `VERBOSE=1 node tools/build.js --check Luk/11-13` reports 0
errors and 0 warnings.

What needs fixing: one missing edition-split variant (13:35), a settings card whose Matthew references resolve to Luke
(including a nonexistent "Luke 25"), one misquotation of Luke 1:17, a mislabeled hymn, a wrong Wikipedia link, a few
small parallel-wording slips against Matthew, and some unsourced or thin points on the Mary card.

**Counts: critical 0, major 2, minor 23.**

## Findings

### 1. Major: missing variant at 13:35, where the editions disagree
- **Location:** variants.json, 13:35 ("until the time comes when you say").
- **Problem:** The word list shows ἥξει ὅτε in NA28/NA27 (bracketed there), SBL, Tregelles and the Byzantine text, but
  **not** in Tyndale House or Westcott-Hort (`ἥξει[NnSGB] ὅτε[NnSGTB]`). THGNT reads "you will never see me until you
  say", with no "the time comes when". texts/auto confirms that NA27/28 bracket the words. brief-nt.md requires a
  variants entry wherever SBL, NA28 and THGNT disagree in a way that changes the English. The same verse also has the
  TR's ἀμὴν ("verily I say unto you" in the KJV) and the Byzantine ὅτι, which a KJV reader will notice.
- **Fix:** Add a 13:35 entry anchored on "until the time comes when you say". Reading 0: SBL and NA28 (bracketed),
  ἕως ἥξει ὅτε εἴπητε. Reading 1: THGNT and WH, ἕως εἴπητε, plain "until you say" (which also matches Matthew 23:39).
  Give the witnesses as Metzger or the NA28 apparatus report them; do not guess. In `b`, mention the TR's "verily". The
  existing note on this anchor must then move to a word or two inside it, since a note may not share a variant's exact
  anchor.

### 2. Major: settings card 13:22–30 cites Matthew with bare references, so the links go to Luke
- **Location:** chapters.json, ch. 13, settings "The narrow door", `why`.
- **Problem:** "Matthew scatters these sayings through the Sermon on the Mount (7:13–14, 22–23), the centurion story
  (8:11–12) and the ten young women (25:10–12)." A bare c:v means Luke, so these link to Luke 7:13–14, Luke 7:22–23
  (actually written as "22–23"), Luke 8:11–12 and a nonexistent Luke 25:10–12. STYLE.md requires the book name on
  every reference. The build did not catch it because no book name opens the parentheses.
- **Fix:** "(Matthew 7:13–14; Matthew 7:22–23)", "(Matthew 8:11–12)", "(Matthew 25:10–12)".

### 3. Minor: misquotation of Luke 1:17
- **Location:** notes.json 12:53 ("Micah's broken family").
- **Problem:** The note quotes John as promised to "turn the hearts of fathers to their children" (1:17). Luke 1:17's
  Plain reads "He will turn fathers' hearts back to their children." A quotation of a verse this site has translated
  must use its Plain exactly.
- **Fix:** "would 'turn fathers' hearts back to their children' (1:17, from Malachi 4:6)".

### 4. Minor: wrong hymn title in the Tradition view
- **Location:** chapters.json ch. 11, views.T.
- **Problem:** "'Come, Holy Spirit' (Veni Creator Spiritus)". *Veni Creator Spiritus* is "Come, Creator Spirit". "Come,
  Holy Spirit" is *Veni Sancte Spiritus*, the Pentecost sequence, or the antiphon. The link from 11:13 to either hymn
  is also loose: neither hymn is based on this verse.
- **Fix:** "'Come, Creator Spirit' (Veni Creator Spiritus) has been sung at ordinations and councils since the Middle
  Ages", and frame it as the church's prayer for the Spirit, not as a use of 11:13. Or drop the sentence.

### 5. Minor: Wikipedia link belongs to another chapter
- **Location:** chapters.json ch. 12, links.
- **Problem:** "Parable of the Budding Fig Tree" is Luke 21:29–33 (Matthew 24:32), not chapter 12.
- **Fix:** Remove it. If a link is wanted, use one on the thief in the night or on the parable of the faithful servant
  (already present).

### 6. Minor: 11:18 parallel wording
- **Location:** plain.txt 11:18.
- **Problem:** "how will his kingdom last?" Luke's πῶς σταθήσεται ἡ βασιλεία αὐτοῦ is word for word Matthew 12:26
  (without οὖν), and Matthew's Plain reads "how can his kingdom last?"
- **Fix:** "how can his kingdom last?"

### 7. Minor: 12:6 parallel wording
- **Location:** plain.txt 12:6.
- **Problem:** "not a single one of them". Luke's ἓν ἐξ αὐτῶν is the same as Matthew 10:29, which the Plain renders
  "not one of them".
- **Fix:** "Yet not one of them is forgotten in God's sight." Check the note on 12:6 ("Even that fifth bird") still
  reads well.

### 8. Minor: 12:45 parallel wording
- **Location:** plain.txt 12:45, plus every place that quotes it.
- **Problem:** "My master is taking his time coming." Matthew 24:48 has the same verb χρονίζει, rendered "My master is
  delayed". Luke adds only ἔρχεσθαι.
- **Fix:** "My master is delayed in coming." Then update the quotations in chapters.json ch. 12 (readings "Read as
  teaching on the end", the deep dive "Waiting for the master"), topics.json `second-coming`, and the 12:45 gloss
  anchor "taking his time coming".

### 9. Minor: 12:59 parallel wording
- **Location:** plain.txt 12:59.
- **Problem:** "you will never come out of there until". Matthew 5:26 has the same οὐ μὴ ἐξέλθῃς ἐκεῖθεν ἕως,
  rendered "you will not come out of there until". The coin rightly differs (λεπτόν, Matthew κοδράντης).
- **Fix:** "you will not come out of there until you have paid off even the last tiny coin."

### 10. Minor: 12:3, κηρύσσω against the lead decision and against its own note
- **Location:** plain.txt 12:3; notes.json 12:3.
- **Problem:** The Plain says "will be announced from the rooftops", but the note's title is "Shouted from the
  rooftops". Matthew 10:27 renders κηρύξατε ἐπὶ τῶν δωμάτων "shout it from the rooftops", and the Mark lead decision
  (which binds Luke) says to follow the parallel's English for κηρύσσω.
- **Fix:** "will be shouted from the rooftops". The note title then fits, and the note can say Luke's verb is passive.

### 11. Minor: "has got up" is not American English
- **Location:** plain.txt 13:25.
- **Fix:** "has gotten up", or simply "When the master of the house gets up and locks the door".

### 12. Minor: 13:7 "this is the third year" narrows the Greek
- **Location:** plain.txt 13:7 (and the 13:7 note anchor).
- **Problem:** τρία ἔτη ἀφ' οὗ ἔρχομαι is "for three years now I have been coming", three years of looking. "This is the
  third year" can mean only two years have passed. The note's own argument ("looked for fruit for three years now")
  assumes the fuller sense.
- **Fix:** "For three years now I have been coming to look for fruit on this fig tree", and re-anchor the note.

### 13. Minor: the 13:9 Plain hides the broken-off sentence its note describes
- **Location:** plain.txt 13:9; notes.json 13:9.
- **Problem:** The note says "The Greek breaks off ... without finishing the thought". The Plain supplies a full
  sentence ("Then maybe it will bear fruit in the future.") and so hides the aposiopesis the note is about.
- **Fix:** Either mark the break ("If it bears fruit in the future, well and good. If not, you can chop it down.",
  with the added words explained) or change the note so it describes what the Plain does.

### 14. Minor: settings 13:31–33 quotes words the Plain does not have
- **Location:** chapters.json ch. 13, settings "The answer to Herod", `when`.
- **Problem:** "'At that very hour,'" in quotation marks, but the Plain at 13:31 says "Just then".
- **Fix:** Quote "Just then", or drop the quotation marks.

### 15. Minor: "the same verb" at 11:16 is not quite right
- **Location:** notes.json 11:16.
- **Problem:** "what Satan did in the wilderness (4:2, 12, the same verb)". 4:2 has πειράζω, but 4:12 has the compound
  ἐκπειράζω (Deuteronomy 6:16 LXX).
- **Fix:** "(4:2; at 4:12 the compound ekpeirazō)", or cite 4:2 only.

### 16. Minor: 24:34 is not narration
- **Location:** notes.json 11:39 ("'The Lord' in the story").
- **Problem:** The note lists places where Luke "in his own narration" calls Jesus "the Lord" and includes 24:34. There
  the disciples speak ("The Lord has risen indeed").
- **Fix:** Drop 24:34 from the body and the `r` list, or replace it with 22:61 (already listed) or 7:19.

### 17. Minor: "Chronicles stands last in the Hebrew Bible" is stated flatly
- **Location:** notes.json 11:51 ("From Abel to Zechariah").
- **Problem:** That is the order of Bava Batra 14b and of most printed Hebrew Bibles. But the Aleppo Codex and the
  Leningrad Codex, the site's own base text, put Chronicles first among the Writings. The note goes on to admit "others
  think the order was not yet fixed", but its first claim should not be stated more strongly than the evidence.
- **Fix:** "In the order given by the Talmud (Bava Batra 14b) and in most printed Hebrew Bibles, Chronicles comes last;
  the great medieval codices put it first among the Writings."

### 18. Minor: the Mary card (11:27–28) is thin on sources and is missing the Lutheran view
- **Location:** chapters.json ch. 11, traditions.
- **Problem:** (a) The Orthodox view has no source. The liturgical claim is right: 10:38–42 plus 11:27–28 is the Gospel
  for feasts of the Theotokos. But it should cite something, such as the Typikon or lectionary, or an Orthodox writer.
  (b) The Calvin citation was flagged by the writer as uncertain and gives no location. I could not confirm the wording
  online. The paraphrase is plausible, but it needs the exact place in the *Harmony of the Evangelists*, at Luke
  11:27–28 (treated with Matthew 12:46–50), and a check that Calvin says Christ corrects the praise "while not denying
  that Mary was blessed". (c) Lutherans have a view distinct from the Reformed and Baptist ones: Mary is honored as the
  "most blessed virgin" (Formula of Concord SD VIII.24; Apology XXI), and Luther preached on this text. That view
  should be on the card.
- **Fix:** Add sources for (a) and (b), and add a Lutheran view, sourced, or say why it is left out.

### 19. Minor: the boilerplate `readers` line is repeated and states a debated audience as settled
- **Location:** chapters.json, settings 11:1–4, 11:37–44, 12:1–12 and 13:10–17.
- **Problem:** "Luke's first readers, Theophilus and churches of mostly Gentile believers (most date the Gospel to
  about AD 80–90)" appears four times. The Mark lead decision says the Gospel's setting is stated once with its
  alternatives, not on every card. "Mostly Gentile" is also debated: Jervell and others argue that Luke's audience
  included many Jewish believers and God-fearers.
- **Fix:** State it once, at 11:1–4, with "views" or a pointer to book.json `audience`. Shorten the other three to the
  point specific to that card.

### 20. Minor: the "two barns" theory box understates how much it overlaps with published scholarship
- **Location:** chapters.json ch. 12 spec box "the two barns"; topics.json `wealth` `claude`.
- **Problem:** That the ravens' "no storeroom and no barn" (12:24) answers the rich fool's barns (12:18) is a standard
  observation in the commentaries (Green, NICNT, among others). It is not new, yet the box presents "the repeated word
  is Luke's own signpost" as the author's own suggestion. STYLE.md requires spec boxes to say where they overlap with
  published work.
- **Fix:** Say plainly that commentators already draw this link. Keep as Claude's own only what goes beyond it, for
  example the "pouches that never get old" (12:33) as the third barn. The `wealth` claude box repeats the same idea,
  so trim one of them.

### 21. Minor: a few glosses pick one side of a question the note leaves open
- **Location:** glosses.json 11:49 "God's Wisdom" ("God in his wisdom"); 13:35 "your house" ("your temple and your
  city"); 12:46 "cut him in two" ("punish him without mercy").
- **Problem:** The notes give three views of 11:49, three readings of "house" at 13:35, and two of "cut in two"
  (dismemberment or being cut off). Each gloss quietly chooses one.
- **Fix:** Use neutral glosses ("God's Wisdom" => "Wisdom, God's own voice"; "your house" => "your temple, your city,
  your people"), or drop them.

### 22. Minor: witness detail in the 11:2 "will be done" variant
- **Location:** variants.json 11:2, "Kingdom, will, or Holy Spirit?"
- **Problem:** Codex Sinaiticus is not listed for either reading. The NA28 apparatus gives it (א*.2) for the longer
  reading with "may your will be done". Reading 0 also lists "the Old Syriac" as a whole. Check whether the Curetonian
  Syriac omits the clause or only the Sinaitic Syriac does: Metzger and NA28 should be compared here. In the 11:11
  variant, check the same "Curetonian Syriac" claim against Metzger.
- **Fix:** Add Sinaiticus to reading 1 and correct the Syriac witnesses after checking Metzger and the NA28 apparatus.

### 23. Minor: the 11:42 variant's reading 0 lumps the Byzantine text with the SBL wording
- **Location:** variants.json 11:42.
- **Problem:** Reading 0 lists "the Byzantine majority, Textus Receptus (KJV)" under the Greek ...κἀκεῖνα μὴ
  παρεῖναι. The Byzantine text and the TR read κἀκεῖνα μὴ ἀφιέναι (KJV "not to leave the other undone"), with no δέ.
  The meaning is the same, but the Greek shown is not what those witnesses read.
- **Fix:** Note the ἀφιέναι wording in `b`, or give the Byzantine wording in parentheses in reading 0's `w`.

### 24. Minor: small edition and KJV differences with no mention
- **Location:** variants.json.
- **Problem:** brief-nt.md asks for KJV-visible differences. These have no entry:
  - 13:31: the Byzantine text and TR read ἡμέρᾳ (KJV "The same day") where the critical text has ὥρᾳ.
  - 11:48: the Byzantine text adds "their tombs" (KJV "ye build their sepulchres").
  - 12:21: Codex Bezae and some Old Latin manuscripts omit the verse, as reported by Metzger. Some later manuscripts add
    "He who has ears to hear, let him hear."
  - 11:33: φέγγος (SBL, Byzantine) against φῶς (NA28, THGNT, WH). This makes only a slight English difference ("glow"
    or "light").

  None of these is large.
- **Fix:** A short entry each for 13:31 and 11:48. Add 12:21 if Metzger's report is confirmed. Mention φῶς/φέγγος in
  the `b` of the existing 11:33 entry.

### 25. Minor: a few hard places have no note
- **Location:** 11:36, 12:25, 12:49.
- **Problem:**
  - 11:36 is a well-known crux ("if your whole body is bright ... it will be bright all through" seems to repeat
    itself) and has no note.
  - 12:25 ἡλικία, "lifespan" or "height", has no note or pointer to the Matthew 6:27 discussion. The gloss "a foot and a
    half" assumes the reader knows a cubit is being added to a lifespan.
  - 12:49 τί θέλω εἰ ἤδη ἀνήφθη is rendered "how I wish it were already burning", the usual modern reading (the NIV
    also has it). The note does not mention the other construals: the KJV's "what will I, if it be already kindled?",
    or "what more do I want, if it is already kindled?"
- **Fix:** Add a short `word/deb` note at 11:36 and at 12:49, and a pointer note or a fuller gloss at 12:25.

No significant NIV/ESV drift was found. The 12:49 wording above is the only stretch of five or more words that matches
the NIV, and it is the standard reading of an idiom; the fix is the note, not a new wording.

## Fixes applied
1. Fixed. New 13:35 variant anchored on "until the time comes when you say": SBL/NA28 (bracketed)/NA27/Tregelles with the Byzantine/TR form, against THGNT/WH "until you say" (as Matthew 23:39). I could not check the manuscripts, so the witnesses are given by edition and the entry says so. The `b` explains the TR's "Verily" and the Byzantine ὅτι. The 13:35 note is re-anchored to "you will never see me" and points to the variant.
2. Fixed. The 13:22–30 settings card now writes "Matthew" on every reference (Matthew 7:13–14; Matthew 7:22–23; Matthew 8:11–12; Matthew 25:10–12).
3. Fixed. The 12:53 note quotes Luke 1:17's Plain exactly: "turn fathers' hearts back to their children".
4. Fixed. Views T now names "Come, Creator Spirit" (Veni Creator Spiritus) and presents it as the church's prayer for the Spirit, saying the hymn is not drawn from 11:13.
5. Fixed. Removed the "Parable of the Budding Fig Tree" link from chapter 12.
6. Fixed. 11:18 "how can his kingdom last?" (= Matthew 12:26).
7. Partly. 12:6 now uses Matthew's "not one of them": "Yet in God's sight not one of them is forgotten." I moved "in God's sight" forward because "Yet not one of them is forgotten" and "And not one of them is forgotten" are NIV/ESV runs.
8. Partly. 12:45 now uses Matthew's "delayed", as "My master's coming is delayed". I did not use the proposed "My master is delayed in coming" because it is the ESV's exact wording. Updated the quotes in the ch. 12 reading and deep dive, the `second-coming` topic and the gloss anchor ("coming is delayed").
9. Fixed. 12:59 "you will not come out of there until" (= Matthew 5:26).
10. Fixed. 12:3 "will be shouted from the rooftops". Re-anchored the note, which now says Luke has the same verb, kēryssō, in the passive.
11. Fixed. 13:25 "When the master of the house gets up and locks the door". Re-anchored the note.
12. Fixed, reworded. Rebuilt 13:7 from the literal line as "three years running I have come looking for fruit on this fig tree". The suggested "For three years now I have been coming to look for fruit" is NIV wording, so I did not use it. Re-anchored the note to "three years running".
13. Fixed. 13:9 now reads "If it bears fruit in the future, good. If not, you can chop it down." The note says "good" is the one word supplied where the Greek breaks off. Updated the 13:9 variant's anchor and both readings.
14. Fixed. The 13:31–33 settings `when` now quotes the Plain "Just then" (13:31).
15. Fixed. The 11:16 note now reads "(4:2; at 4:12 the compound ekpeirazō)".
16. Fixed. Dropped 24:34 from the 11:39 note's body and `r` list.
17. Fixed. The 11:51 note now uses the reviewer's wording: Chronicles is last in Bava Batra 14b and most printed Bibles, while the Aleppo and Leningrad codices put it first among the Writings. The preview says "the usual Hebrew order".
18. Fixed or partly. (a) The Orthodox view now cites `festal-menaion` for the reading of 10:38–42 + 11:27–28 at feasts of the Theotokos. (b) I could not check Calvin's wording (the Source Library copy of the Harmonia has no searchable text). Following the lead's rule, the view cites the commentary at this passage without a page and keeps a cautious paraphrase. (c) Added a Lutheran view citing Formula of Concord SD 8.24 ("most blessed virgin") and Apology 21 (Mary prays for the church; prayer to her as mediator rejected), keys `formula-concord` and `apology-augsburg`.
19. Fixed. The full readership statement is now made once, at 11:1–4, with views: mainly Gentile, or Jervell's case for many Jewish believers and God-fearers (`jervell-luke-people`). It gives no date and points to the introduction. Shortened 11:37–44, 12:1–12 and 13:10–17 to what each card needs. Also made 11:45–52 and 13:34–35 conditional ("If Luke wrote after AD 70"), following the lead decision on dates.
20. Fixed. The spec box is now "three barns". It says the link between 12:18 and 12:24 is standard in the commentaries, and claims as Claude's own only the sequence ending in 12:33 as the third barn. The `wealth` claude box is trimmed to a short pointer.
21. Fixed. Made the glosses neutral: 11:49 "Wisdom, God's own voice"; 13:35 "your temple, your city, your people"; 12:46 "cut him to pieces, or cut him off for good".
22. Partly. In 11:2 ("will be done"), added Codex Sinaiticus to the longer reading (as reported in the NA28 apparatus) and narrowed "the Old Syriac" to "the Sinaitic Syriac". In 11:11, narrowed "Sinaitic and Curetonian Syriac" to "the Sinaitic Syriac". Metzger was not at hand to confirm the Curetonian, so I removed the claim instead of guessing.
23. Fixed. The 11:42 variant's `b` gives the Byzantine/TR wording κἀκεῖνα μὴ ἀφιέναι (KJV "not to leave the other undone") and says the sense is the same.
24. Partly. Added entries for 13:31 (ὥρᾳ/ἡμέρᾳ, KJV "The same day") and 11:48 (Byzantine "their tombs", plus μαρτυρεῖτε in `b`), with witnesses by edition. Added φέγγος/φῶς to the 11:33 `b`. Declined 12:21 (Bezae's omission): I could not confirm Metzger's report, and the brief forbids unverified witnesses.
25. Fixed. Added `word/deb` notes at 11:36 (the apparent repetition) and 12:49 (wish or question, with the KJV and "what more do I want" readings), and a note at 12:25 on ἡλικία (lifespan or height) pointing to Matthew 6:27. The 12:25 gloss now reads "a foot and a half (here, a little more time)".
Lead item. The 11:1 note now quotes Luke 5:33's rebuilt Plain exactly: "John's disciples often fast and say their prayers".
