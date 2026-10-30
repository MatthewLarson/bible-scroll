# Hostile review: Matthew 24–25 (part 24-25)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json in
`content/books/Mat/parts/24-25/`, and the proposed core `content/proposals/nt/topics/olivet-discourse.json`.
Checked every verse against the SBLGNT, the Byzantine text and the TAGNT edition letters; checked the variant
witnesses against Tischendorf's apparatus (Source Library) and published NA/UBS-based apparatus data; spot-checked
the citations the writer flagged. `VERBOSE=1 node tools/build.js --check Mat/24-25`: no errors and no warnings in
this part (the one error reported is in `Num/parts/11-21/sources.json`; the two warnings are in `Mat/book.json`).

## Verdict

This is a strong, dense part. The translation is made from the Greek, not lifted from a modern version. It keeps
the wordplay of 24:34–35 ("gone"/"gone") and matches 10:22 exactly at 24:13. The history is mostly accurate, and
the flagged citations check out: Cyril, *Catechetical Lectures* 15.22 (the luminous cross); Gregory of Nazianzus,
*Oration* 30.15; Athanasius, *Orations* 3.42ff; Josephus, *War* 4.7.5 (4.433ff, the Jordan swollen by rain). The
24:36 witness list is essentially right: Θ and f13 do support "nor the Son," ℵ* has it and ℵ1 removed it. Four
things need real work before this is publishable. (1) The schools of interpretation are labeled inconsistently
from file to file: preterist and partial preterist are blurred, full preterists are never named, Chrysostom and
Calvin are filed as "idealist," and historicism is missing from the main table. (2) Two glosses settle debated
cruxes under the text. (3) The variant witness lists lean on Tischendorf's OCR and leave out Codex Sinaiticus
almost everywhere, along with W at 24:36. (4) 24:22 turns "saved" into "come out alive" with no note. The rest
are minor corrections of fact, attribution and consistency.

## Findings

### 1. Major: the schools of interpretation are defined inconsistently, and full preterism is never named
- **Location:** notes.json 24:3 ("One question or two?"); chapters.json ch. 24 `readings[0]`, `deep` "Four ways to
  read the discourse", traditions card 2 (second-coming); topics.json `four-views`; proposals/nt/topics/olivet-discourse.json "How it is read".
- **Problem:**
  - The 24:3 note says "Preterists read 24:4–35 as the Temple's fall… Partial preterists see the turn at 24:36."
    That is one position stated twice. Partial preterists are the ones who read 24:4–35 as AD 70 and turn at 24:36.
    Full preterists read the whole discourse, 25:31–46 included, as fulfilled in AD 70. The note never shows
    the second group as different.
  - The table's "Preterist" row lists its holders as "Some Reformed writers; full preterism is rejected by nearly all
    churches." Reformed preterists (Sproul, Gentry) are partial preterists, and they already appear in the next row.
    The full preterists themselves (J. Stuart Russell, *The Parousia*, 1878; Max King; Don Preston) are never named.
    That breaks STYLE ground rule 3: "name who holds it."
  - The row "Idealist / double fulfillment" mixes two different views. The holders it names, "Many fathers
    (Chrysostom), Calvin," are not idealists. The chapter's own `views.T` says Chrysostom split the chapter into the
    Roman war and the second coming. That is a two-part reading, close to partial preterism. Calvin's view is
    double reference.
  - Historicism appears in the four-views contribution and in the Adventist answer on card 2, but not in the table
    or in the 24:3 note.
  - The olivet-discourse core's "How it is read" leaves out the idealist reading entirely.
- **Evidence:** compare notes 24:3, 24:36 and 24:44 with the table rows. The Chrysostom ranges also disagree:
  `views.T` says "24:4–22" and traditions card 2 says "24:15–22". His *Homilies* 75–76 turn to the parousia at 24:23.
- **Fix:** define each school once and use the same definitions everywhere:
  - full preterist: all of 24–25 in AD 70 (Russell, King);
  - partial preterist: 24:4–35 in AD 70, then the final return (France, Gentry, Sproul; Wright in his own form);
  - futurist (dispensational, and historic premillennial);
  - historicist (Adventist, older Protestant);
  - idealist;
  - double fulfillment / prophetic foreshortening, a separate row for Chrysostom (two-part) and Calvin;
  - critical ("expected soon").

  Fix the 24:3 note to match, add idealism to the olivet core, and make the Chrysostom range agree.

### 2. Major: two glosses take sides on debated cruxes
- **Location:** glosses.json 24:34 "this generation" → "the people alive now"; 24:15 "the abomination of
  desolation" → "the horrible idol that empties the Temple".
- **Problem:** A gloss sits under the text as if it were the plain sense. The 24:34 gloss adopts the
  contemporaries reading (preterist, France, Wright). Yet the note on the same words fairly sets out five readings:
  contemporaries, the last generation, the Jewish people, humanity, and Schweitzer. The 24:15 gloss commits to an
  *idol* in the *Temple*. That fits Antiochus and perhaps the Roman standards, but not the Zealots' bloodshed,
  Luke's armies, Mark's masculine "he," or a person (Antichrist). STYLE says a gloss gives "the feel the phrase had."
  It must not decide a crux that the notes treat as open.
- **Fix:** 24:34, either drop the gloss or use something neutral such as "this generation of people (see the note:
  which generation is debated)". 24:15, use "the horrible, defiling thing that brings ruin" or similar, with no
  "idol" and no "Temple".

### 3. Major: variant witness lists are incomplete and in places inaccurate
- **Location:** variants.json, all entries.
- **Problem:**
  - **Codex Sinaiticus (01) is cited only at 24:7 and 24:36.** Tischendorf's siglum א does not survive the Source
    Library OCR (it comes out as "κ", "c", "s", "barb" and so on), and the entries follow the OCR. NA28 cites 01 for
    the followed reading at least at 24:42 ("day") and 25:13 (omitting "when the Son of Man comes"), and very
    probably at 24:6 and 25:31. An entry whose `why` rests on "the oldest manuscripts" must name the oldest one.
    Check each against NA28/UBS5 or Comfort.
  - **24:36:**
    - The omission side leaves out **Codex Washingtonianus (W, 400s)**, plus f1, 33 and the Byzantine uncials. The
      `p` then calls the omitters "many later ones," which W undercuts.
    - "The Syriac" is listed for omission without exception. Tischendorf lists the Palestinian Syriac ("syr hr")
      *with* "nor the Son."
    - "Origen (in Latin)" supports inclusion, yet `b` says Jerome found the phrase missing from Origen's Greek
      copies. Explain that the Latin commentary has it while Jerome reports Origen's Greek copies without it, or
      readers will see a contradiction.
    - "Θ and family 13 (as reported by Metzger)" is accurate in substance. Θ and f13 are on the inclusion side in
      the NA/UBS apparatus (confirmed; Tischendorf predates Θ but lists 13 and 124). Attribute it to the
      NA28/UBS5 apparatus, which is where the list comes from, not to Metzger's prose.
  - **25:1:** the followed reading's `orig` is "εἰς ἀπάντησιν τοῦ νυμφίου", credited to SBLGNT and NA28. Both
    read **ὑπάντησιν** (SBL text; TAGNT marks ὑπάντησιν as NnSYWG). ἀπάντησιν is the Byzantine/TR form, and
    Tischendorf printed it. The witness list also omits Θ, which has "and the bride".
  - **24:31:** the `why` says the Tyndale House editors print "sound," "judging that its awkward phrasing is more
    likely original and that scribes dropped it." THGNT gives no such reasoning in the place cited. That is the
    writer's inference presented as the editors' argument. Say only that THGNT prints it.
  - **24:42:** "33 and other early manuscripts". Minuscule 33 is 800s. Say "and later manuscripts such as 33".
- **Fix:** re-check every entry against NA28/UBS5 (or Comfort) and add 01 wherever it supports a reading. Add W,
  f1 and 33 at 24:36, and fix the Syriac and Origen points. Correct the 25:1 Greek. Rewrite the 24:31 `why`.

### 4. Major: 24:22 renders "saved" as "come out alive", with no note
- **Location:** plain.txt 24:22 "no one at all would come out alive".
- **Problem:** The Greek is οὐκ ἂν ἐσώθη πᾶσα σάρξ, "no flesh would be saved." The same verb σῴζω appears nine
  verses earlier: "whoever holds out to the end, that person will be saved" (24:13). The Plain English Translation keeps "saved" there.
  Turning 24:22 into physical survival breaks the link and quietly favors the preterist reading of the siege. That
  is also the NIV's interpretive choice ("no one would survive"). Readers who take "saved" as final salvation, and
  futurists who read it of the last tribulation, lose their reading without being told. (Compare the binding term
  for σῴζω in healing stories, where "save" is kept and the gloss adds the nuance.)
- **Fix:** "no one at all would be saved", with a gloss "no one would survive", or a `word deb` note that says
  "saved" can mean physical rescue or salvation and points back to 24:13.

### 5. Minor: the 25:1 note on "meet" uses the wrong Greek word for the base text
- **Location:** notes.json 25:1 "meet the groom" ("The groom").
- **Problem:** The note says "the word for 'meet' (*apantēsis*) is the word Paul uses… (1 Thessalonians 4:17)."
  In 25:1 the SBLGNT and NA28 read *hypantēsis*. *Apantēsis* stands undisputed only in 25:6.
- **Fix:** move the point to 25:6 ("Go out and meet him"), or say that 25:1 has a near-synonym and 25:6 has Paul's
  word.

### 6. Minor: 24:40 attributions need checking, and the rapture reading has no named scholar
- **Location:** notes.json 24:40 ("Taken, or left behind?"); chapters.json ch. 24 rapture card; topics.json `rapture`.
- **Problem:**
  - The "taken in judgment" view is credited to "R. T. France and others." France's NICNT seems to lean the other
    way, toward the gathering of 24:31 (*paralambanō*). Check the page or drop his name. The view is clearly held
    by dispensational scholars: Louis Barbieri in *The Bible Knowledge Commentary* (ed. Walvoord and Zuck) and
    Thomas Ice. The card's statement about Walvoord fits his known position. The writer cited it from memory, so
    add the page in *Matthew: Thy Kingdom Come*, or cite Barbieri as well.
  - The "Pre-tribulation rapture" reading is named only through the *Left Behind* novels. Name a scholar or
    teacher who reads 24:40 as the rapture (for example Tim LaHaye) so the view is not presented only through
    fiction.
- **Fix:** correct or verify the France attribution; add page references; name a pre-tribulation proponent.

### 7. Minor: 24:5 Josephus citation
- **Location:** notes.json 24:5.
- **Problem:** The Egyptian's promise that the walls would fall is in *Antiquities* 20.8.6 (20.169–172). *War*
  2.13.5 has him marching from the wilderness to the Mount of Olives to force his way into the city, with no
  falling walls. The two accounts also give different numbers (*War* 30,000; Acts 21:38 4,000).
- **Fix:** cite *Antiquities* 20.8.6 for the walls. Optionally mention the numbers.

### 8. Minor: 24:2 history note, the "western wall" and the length of the siege
- **Location:** notes.json 24:2 ("AD 70: the prediction and the event").
- **Problem:** In *War* 7.1.1 Titus leaves three towers and "the wall that enclosed the city on the west side" as
  a camp for the garrison. That is part of the *city* wall, not the Temple platform. Placed next to the sentence
  about today's Western Wall, it invites readers to mix the two up. Also, "after a five-month siege… burned the
  Temple in August": the siege began around Passover (April) and the Temple burned at the end of August, so about
  four and a half months. The upper city fell in September.
- **Fix:** "part of the city wall on the west"; "after a siege of more than four months."

### 9. Minor: the Jewish War deep dive puts Titus's siege wall too early
- **Location:** chapters.json ch. 24 `deep` "The Jewish War, AD 66–70".
- **Problem:** "In spring 70 Titus surrounded the city with a wall." The circumvallation was built in early summer,
  after the first assaults failed (*War* 5.12.1–2). In spring he pitched camps and began the assault.
- **Fix:** "In spring 70 Titus laid siege to the city, and in early summer he surrounded it with a wall."

### 10. Minor: the season of the fig tree, and an overstated botanical claim
- **Location:** chapters.json ch. 24 settings 24:32–35 `when`; notes.json 24:32.
- **Problem:** The setting says "In late spring, at Passover time." Passover falls in March/April, early spring.
  The note says the fig "puts out new ones only in late spring," and Mark 11:13 has a fig tree in leaf at Passover.
  "Most trees in Israel stay green all year" is too strong (vine, almond, pomegranate and terebinth all lose their
  leaves). It is a commentators' claim and should be attributed and softened.
- **Fix:** "in spring, at Passover time, when fig trees put out their leaves." In the note: "Unlike the olive and
  other evergreens, the fig…"

### 11. Minor: Mark 13:4 is described as asking only about the Temple
- **Location:** notes.json 24:3 ("One question or two?"); chapters.json ch. 24 `deep` "Matthew, Mark and Luke".
- **Problem:** Mark 13:4 also asks for "the sign when all these things are about to be accomplished"
  (*synteleisthai*, the verb related to Matthew's *synteleia*). Matthew makes the parousia and "the end of the age"
  explicit, but Mark's question already looks beyond the building.
- **Fix:** "Mark 13:4 asks when 'these things' will be and what sign will show they are about to be accomplished;
  Matthew names 'your coming' and 'the end of the age.'"

### 12. Minor: Old Testament quotations lack the Hebrew/Septuagint comparison the brief requires
- **Location:** notes.json 24:15, 24:29, 24:30 (Daniel 7).
- **Problem:** brief-nt.md says: "Say in a note where it differs from the Hebrew." The notes do not say any of the
  following:
  - "On the clouds" (ἐπὶ τῶν νεφελῶν) matches the Old Greek of Daniel 7:13, where the Hebrew/Aramaic has "with
    the clouds" (ʿim ʿanane). That bears directly on the "coming to God" versus "coming to earth" debate the note
    discusses.
  - The phrase in 24:15 is the Septuagint's rendering of Daniel's *shiqquts meshomem*.
  - The Septuagint of Isaiah 34:4, which lies behind 24:29, differs from the Masoretic Text ("the host of heaven
    will rot away").
- **Fix:** add one sentence to each note giving the Hebrew/Aramaic and the Septuagint form.

### 13. Minor: one KJV-visible difference has no variant entry, and a binding term departs without a note
- **Location:** 25:2; 25:11.
- **Problem:**
  - At 25:2 the Byzantine text and TR (KJV) put the sensible ones first: "five of them were wise, and five were
    foolish." The SBL, NA28 and B C D L Z put the foolish first (Tischendorf). A KJV reader will notice. brief-nt
    asks for an entry wherever the KJV reads differently in a way a reader would notice.
  - At 25:11 the young women say "Lord, Lord" to the groom. The κύριος rule in proposals/nt/terms.json gives
    "'master' or 'sir' when a slave or stranger speaks." Keeping "Lord" for the echo of 7:21 is defensible, but the
    25:11 note should say it is deliberate.
- **Fix:** add a short 25:2 variant entry. Add one sentence to the 25:11 note.

### 14. Minor: small additions or softenings in the Plain English Translation
- **Location:** plain.txt 24:26, 24:33, 24:38, 24:39.
- **Problem:**
  - 24:26 "He's hidden in the back rooms": "hidden" is not in the Greek (Ἰδοὺ ἐν τοῖς ταμείοις, "Look, in the
    inner rooms").
  - 24:33 "you can know": γινώσκετε is "you know" or the command "know." The note admits this, but "can" softens
    both.
  - 24:38 "parents gave their daughters in marriage": defensible, but it supplies two words.
  - 24:39 "They had no idea what was happening": "what was happening" is supplied.

  None is serious. Together they push the text toward paraphrase in a passage where every word is argued over.
- **Fix:** 24:26 "He's in the back rooms!"; 24:33 "know that it is near"; the other two can stay.

### 15. Minor: closeness to the NIV/ESV in a few phrases
- **Location:** plain.txt 25:24, 25:26 "scattered seed"; 24:12 "most people's love"; 24:19.
- **Problem:**
  - διασκορπίζω means "scatter." Many commentators take it of winnowing (scattering chaff to gather grain), not of
    sowing. "Scattered seed" is the NIV's interpretive supplement, and the Plain English Translation repeats it.
  - "Most people's" for τῶν πολλῶν follows the NIV's "most." The Greek is "the many."
  - 24:19 follows the ESV's sentence frame ("women who are pregnant… those who are nursing… in those days")
    closely.

  None is a whole-verse match.
- **Fix:** 25:24 and 25:26, "collect where you never scattered" (note: sowing or winnowing); 24:12, "the love of
  many"; 24:19, recast ("Woe to pregnant women, and to mothers with babies at the breast, in those days!").

### 16. Minor: source-key problems
- **Location:** chapters.json ch. 24 traditions card 2.
- **Problem:**
  - The Orthodox answer cites both `chrysostom-matthew` (1Ma part: "Homilies on Matthew… homilies 75–76") and
    `chrysostom-hom-matthew` (Mat 01-04). These are two keys for one work. The first one's range ("75–76") also
    contradicts the card's "76–77".
  - The `gentry` key is *Before Jerusalem Fell* (1989), a book on the date of Revelation, not on Matthew 24.
- **Fix:** use only `chrysostom-hom-matthew` and give the homily numbers in the text. For Gentry's reading of
  Matthew 24, add a key for the relevant work, for example Gentry and Ice, *The Great Tribulation: Past or
  Future?* (1999), or *He Shall Have Dominion*.

### 17. Minor: the Caligula hypothesis is implicitly credited to Colani
- **Location:** chapters.json ch. 24 `views.C`.
- **Problem:** The text reads: "In 1864 Timothée Colani proposed that Mark 13 used a… 'little apocalypse,' perhaps
  written when Caligula tried to set up his statue in the Temple in AD 40." Colani proposed the little apocalypse.
  The Caligula setting is a later proposal (developed by Gerd Theissen, *The Gospels in Context*, among others).
- **Fix:** split the sentence and attribute the Caligula setting to Theissen and others.

### 18. Minor: overstatements in cross-references and topic text
- **Location:** notes.json 24:3 ("Sitting on the Mount of Olives"); topics.json `tribulation`; olivet-discourse.json lead.
- **Problem:**
  - "In Acts 1:11–12 the angels promise Jesus' return on this same hill." The angels promise he will come "in the
    same way." The hill comes from 1:12 and from Zechariah 14:4 by inference.
  - "Josephus described the siege of Jerusalem in nearly the same words": Josephus' preface has a similar idea
    ("the misfortunes of all men from the beginning of the world"), not nearly the same words.
  - The core lead calls the discourse "Jesus' last long teaching before his death." On a whole-Bible topic page
    that clashes with John 13–17, and the proposals already hold a `farewell-discourse` topic.
- **Fix:** "the angels promise he will come back in the same way, and the disciples return from this hill";
  "in words much like these"; "his last long teaching in the Synoptic Gospels."

### 19. Minor: the millennium traditions card is missing historic premillennialism
- **Location:** chapters.json ch. 25 traditions card "When does the judgment of the sheep and the goats take place?"
- **Problem:** Historic premillennialists (Ladd, already cited on the rapture card) hold a distinct view: Christ
  returns once after the tribulation, the millennium follows, and the final judgment comes after it. They usually
  see 25:31–46 as a picture of the general judgment rather than a separate judgment of living nations. The card goes
  straight from the creedal churches to dispensationalism, and dispensationalism ends up looking like the only
  premillennial answer.
- **Fix:** add a Baptist or Evangelical view citing `ladd-hope`, or add a sentence to an existing view.

## Fixes applied

1. Done. Schools defined once and used everywhere: the 24:3 note, ch. 24 readings[0], the table (now "Ways to read the discourse" with full preterist (Russell, King, Preston), partial preterist, futurist x2, historicist, idealist, a separate double-fulfillment row for Chrysostom (two-part) and Calvin, and critical rows), the four-views contribution and the olivet core (idealist and historicist added). Chrysostom is now "24:4–22, Homilies 75–76" in both views.T and card 2. New key russell-parousia.
2. Done. The 24:34 gloss is dropped. The 24:15 gloss now reads "the horrible, defiling thing that brings ruin".
3. Done, with limits. 01 added at 24:42 and 25:13, cited to the NA28 apparatus. At 24:36: W, f1, 33 and the Byzantine uncials added to the omission side (NA28/UBS5); the Palestinian Syriac moved to the inclusion side; the Origen Latin/Greek point explained; Θ/f13 attributed to the NA28/UBS5 apparatus; the p no longer says "later ones". 25:1 orig corrected to ὑπάντησιν, with ἀπάντησιν noted as the Byzantine/TR form, and Θ added to "and the bride". The 24:31 why now says only that THGNT prints "sound". 24:42 now reads "later manuscripts such as 33". All Tischendorf-based lists are attributed to "Tischendorf's apparatus", with Latin-letter sigla only. 01 at 24:6 and 25:31 was not added because I could not confirm it; the 24:6 why now names Vaticanus rather than claiming "the oldest support".
4. Done. 24:22 now reads "no one at all would be saved", with a gloss "no one would survive" and a word/deb note linking it to 24:13 (and 8:25) and setting out the physical-rescue and final-salvation readings.
5. Done. The 25:1 note now says that 25:1 has hypantēsis and 25:6 has Paul's apantēsis.
6. Done. France is removed from the 24:40 note. The judgment reading is credited to Walvoord and Barbieri (new key barbieri-bkc) in the note, the card and the rapture topic. Tim LaHaye is named for the pre-tribulation reading. I had no access to Walvoord's page, so no page number is given.
7. Done. 24:5 cites War 2.13.5 for the march and Antiquities 20.8.6 for the falling walls, with the 30,000 vs 4,000 figures.
8. Done. Now "a siege of more than four months", the Temple burned at the end of August, and "part of the city wall on the west side".
9. Done. Now "laid siege in spring 70 ... in early summer surrounded it with a wall (5.12.1–2)".
10. Done. The setting reads "In spring, at Passover time, when fig trees put out their leaves". The note is softened and mentions Mark 11:13.
11. Done. The 24:3 note and the Synoptic deep section now describe Mark 13:4 accurately.
12. Done. Septuagint/Hebrew sentences added at 24:15 (shiqquts meshomem), 24:29 (Isaiah 34:4) and 24:30 (Old Greek "on the clouds" vs Aramaic ʿim ʿanane; Theodotion; Mark 14:62).
13. Done. New 25:2 variant (foolish first: B C D L Z, SBL, NA28; Byzantine/TR sensible first). The 25:11 note says "Lord, Lord" is kept deliberately to echo 7:21.
14. Done. 24:26 now reads "He's in the back rooms!" and 24:33 "know that it is near". 24:38 and 24:39 are kept, as the reviewer allowed.
15. Done. 25:24 and 25:26 now read "collect where you never scattered", with a sowing-or-winnowing note. 24:12 now reads "the love of many" (gloss anchor updated). 24:19 is recast.
16. Done. Card 2 now uses only chrysostom-hom-matthew (75–76). Gentry is cited with the new key gentry-ice-tribulation (Ice and Gentry 1999).
17. Done. Colani is credited with the little apocalypse, and the Caligula setting with "later scholars, among them Gerd Theissen".
18. Done. Acts 1:11–12 is reworded. The tribulation topic now says "in words much like these". The olivet lead now says "his last long teaching in the Synoptic Gospels".
19. Done. A Baptist view is added to the millennium card: historic premillennialism (Ladd), 25:31–46 as the general judgment, and the BFM not deciding (ladd-hope, bfm-2000).
