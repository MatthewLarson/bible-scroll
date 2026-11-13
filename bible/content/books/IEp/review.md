# Hostile review: Ignatius to the Ephesians (IEp)

Reviewer: separate hostile-reviewer agent, 2026-11-12. Scope: `content/books/IEp/` (plain.txt 1:0 + 47 verses, notes, variants,
glosses, chapters, topics, book.json, sources.json), the new core `content/proposals/works/topics/incarnation.json`, the batch
terms in `content/proposals/works/terms.json`, and the IEp items in `proposals/works/topics.md`, `build.md` and `works.json`.
Measured against agent-reviewer.md, agent-reviewer-works.md, agent-writer-works.md (with the Apostolic Fathers lessons),
STYLE.md, brief-apfathers2.md (with its Lead decisions) and brief-iep.md.

## Verdict

This is careful work. The Plain English Translation follows Lake's Greek closely in every verse. Every one of Lake's 16
footnotes has a variant entry. The 10:2 doubling (αὐτῶν αὐτῶν) is a slip in the digital text, and I confirmed that both
scans print the word once. The batch terms are entered and used consistently. `VERBOSE=1 node tools/build.js --check IEp`
gives 0 errors and 0 warnings. I checked the large majority of the source claims against the files the writer saved or
against the local OCR: Lake's introduction and footnotes, Lightfoot's *Christian Ministry* pages 24-25, 48-49 and 83-88,
Eusebius 3.25, 3.36 and 3.37-38, Jerome 16, the Catholic Encyclopedia, CCC 1405, the OCA, TEC and LCMS pages, the EOTC list,
WCF 1.2, LBC 1689 1.2 and Trent. All of them hold. A script checked every quotation of another book against that book's current
Plain English Translation, and all of them match. Nothing is invented. So there are no critical findings.

The weaknesses are of the kinds the Apostolic Fathers lessons warn about:
- One father's reading is claimed from an English translation only: Athanasius at 7:2.
- A 1910 judgment ("the best modern criticism") is presented as today's consensus, with its own caveat cut.
- Several readings go beyond the Greek or the sources: virginity "in" the birth (19:1), "goes on sinning" (14:2), "they"
  in 19:2, and Ignatius as a reader of John.
- Lightfoot's view of the episcopate is shown only in part.
- The churches' readings of the bishop are thinly sourced.
- One cross-reference the brief's Onesimus question needs (ὀναίμην, Philemon 20) is missing.
- The new `incarnation` core gives only one view.

Counts: 0 critical, 11 major, 22 minor.

## Findings

### Major

**1. Major: Athanasius's reading at 7:2 is claimed from the English translation only. His Greek may differ at "born and
unborn".**
- Where: variants.json 7:2 (`why`); notes.json 7:2 "born and unborn"; chapters.json ch. 7 view C; incarnation.json, section
  "Ignatius: God in man".
- What is wrong: The variant cites Athanasius, *On the Councils* 47, in the Nicene and Post-Nicene Fathers English as
  evidence that the fathers' quotation reads "God in man". The writer's own sources-checked.md says "Greek not opened, so no
  claim about his Greek reading". That is exactly the lesson in agent-reviewer-works.md item 6: open the father's Greek
  before claiming his readings. A web search this session (results only, page not opened) also turned up the report that
  Athanasius quotes the line as γενητὸς καὶ ἀγένητος, with one ν ("originate and unoriginate", the NPNF English the 7:2
  note quotes), where Lake prints γεννητὸς καὶ ἀγέννητος with two (born and unborn). Lightfoot's excursus on the two
  spellings (NPNF 2nd series vol. 14, the First Council of Nicaea) is said to discuss which form Ignatius and Athanasius
  wrote. If so, the 7:2 note's link between "born and unborn" and Athanasius's "originate and unoriginate" hides a real
  difference of reading that mattered in the Arian dispute. I could not verify this. I did not open the Greek or the
  excursus.
- Fix: Open Athanasius's Greek (PG 26 or Opitz) and the NPNF 2.14 excursus.
  - If the Greek confirms "God in man", keep the claim.
  - If Athanasius has γενητός, add it to the 7:2 variant (or a note) as his reading, and reword the 7:2 note.
  - If neither can be opened, cut the Athanasius sentence from the variant's `why` and keep only Lake's footnote.

**2. Major: The authenticity of the seven letters is presented as current consensus on the strength of a 1910 sentence, and
that sentence's caveat is cut.**
- Where: book.json authorship[2], sections[1], canon.reliability.verdict and sections[2]; topics.json `ignatius`.
- What is wrong: The writer quotes the Catholic Encyclopedia: "the best modern criticism favors the authenticity of the seven
  letters". The full sentence (07644a.htm, read this session) opens: "While it can hardly be said that there is at present
  any unanimous agreement on the subject, the best modern criticism favors ...". Cutting that opening makes the source
  sound more certain than it is. "Modern" also means 1910, and the reliability section uses the quotation as today's state
  of the question. The brief asks for the dissenters "only from works opened". None after Cureton is given, and the reader
  is not told that the source is more than a century old.
- Fix:
  - Quote the caveat.
  - Date the judgment ("in 1910").
  - Either open a recent scholarly survey and report the twentieth-century challenges to authenticity, with names and
    works, or say plainly that the site has opened no source later than 1912 on the question.

**3. Major: The 19:1 note reads a later doctrine (virginity "in" the birth) into the text.**
- Where: notes.json 19:1 "Mary's virginity" (views).
- What is wrong: The note says "The verse speaks of her virginity before and in the birth of Jesus." The Greek is ἡ
  παρθενία Μαρίας καὶ ὁ τοκετὸς αὐτῆς, "Mary's virginity and her giving birth": two mysteries, set side by side. That the
  birth itself left her a virgin (virginitas in partu) is a later doctrine that Catholic and Orthodox teaching holds and
  other churches do not. The verse does not state it. The rest of the note is careful to point to the card at Matthew 1:25
  for "after".
- Fix: Write "The verse names her virginity and her giving birth as two hidden mysteries." Where a source can be opened that
  discusses this verse, say which churches read more into it.

**4. Major: The 14:2 translation imports a reading the Greek does not give. "Goes on sinning" is not the site's rendering of
the same idiom.**
- Where: plain.txt 14:2; chapters.json ch. 14 sum and view N.
- What is wrong: The Greek is οὐδεὶς πίστιν ἐπαγγελλόμενος ἁμαρτάνει, "no one who professes faith sins". "Goes on
  sinning" adds an aspect reading, the familiar modern softening of 1 John 3:6. The site's own 1 John 3:6 reads "does not
  sin", and chapter 14's view N then says Ignatius's line "is close to 1 John 3:6", which is only true of the softened
  wording.
- Fix: Translate "No one who claims faith sins". Add a `deb` note if needed: Ignatius's point (profession must show in
  life), with the site's 1 John 3:6.

**5. Major: The 19:2 subject is changed from Lake's and Roberts-Donaldson's "he" to "they" without a note, and a spec box
rests on that choice.**
- Where: plain.txt 19:2 "How, then, were they shown to the ages?"; chapters.json ch. 19 spec box.
- What is wrong: πῶς οὖν ἐφανερώθη τοῖς αἰῶσιν has a singular verb. A neuter plural subject (the "three mysteries") can
  take a singular verb, so "they" is defensible. But Lake (vol. 1 OCR line 10074: "How then was he manifested to the
  world?") and Roberts-Donaldson both take Christ as the subject. STYLE.md: "Where a word or phrase is debated, translate
  the most likely meaning and put the alternatives in a note." There is no note. The spec box ("19:2 asks how they were
  then 'shown to the ages'") builds a theory on the choice without saying that it is one.
- Fix: Add a `deb` note at 19:2 giving both subjects, with Lake's "he". Have the spec box say that it depends on the
  plural reading.

**6. Major: The 12:2 notes argue against themselves on "in every letter", and the conclusion is overstated.**
- Where: notes.json 12:2 "In every letter he remembers you"; chapters.json ch. 12 sum and view N; topics.json `paul`.
- What is wrong:
  - The note offers an unsourced alternative: "could also be read 'in a whole letter', meaning the letter written to
    them". No scholar is named and no source is opened, which breaks STYLE rule 2 and the "unnamed readers" lesson.
  - It then concludes "Either way the verse shows that Ignatius knew a number of Paul's letters". On the alternative
    reading the verse shows no such thing.
  - The chapter page says the verse is "precious evidence that Ignatius knew Paul as a writer of many letters", and the
    topic says he "plainly knew a collection".
- Fix:
  - Either source the "whole letter" reading or drop it.
  - Base "knew several of Paul's letters" on what the letter itself shows: Lake's margin has 1 Corinthians in 15-18 and
    18:1, Romans 8 at 8:2, and Ephesians in the greeting. Say it that way, not "plainly".

**7. Major: Lightfoot's view of the episcopate is shown only in part.**
- Where: notes.json 6:1 "The overseer 'as the Lord himself'"; chapters.json ch. 5 deep ("As a development the letters bear
  witness to"); book.json canon.reliability sections[3] ("Lightfoot read it as a development"); topics.json `elders`.
- What is wrong:
  - The site sets Lightfoot up as the voice of "development" against "apostolic order". It is true that he held the
    episcopate was formed "out of the presbyteral by elevation" (page 25, verified).
  - But on page 84 (lm1901.txt line 4245ff.) he says the bishop as a visible centre of unity keeps "the same purpose which
    we may suppose to have influenced the last surviving Apostles in its institution".
  - On pages 32-33 he discusses the view that the new constitution "must be ascribed to the surviving Apostles", St John
    especially, in Asia Minor.
  - So he did not oppose apostolic origin. He held an apostolic institution (by the last apostles) through elevation from
    the presbyterate.
  - The 6:1 note's gloss, "not as a separate order from the apostles", lets readers take him to mean the office has no
    apostolic sanction.
- Fix: Give his whole position: an office raised from the presbyterate, which he credited to the surviving apostles,
  especially John in Asia (pages 33 and 84, after checking whose words p. 33 quotes). Reword "Lightfoot read it as a
  development" in the reliability section to match.

**8. Major: The churches' readings of Ignatius on the overseer are thinly sourced, and one "reading" is not a reading at
all.**
- Where: chapters.json ch. 5 deep "How the churches read Ignatius on the overseer"; notes.json 6:1 views note.
- What is wrong: brief-iep.md asks for "how the churches read Ignatius on the one bishop, each from a source that discusses
  him".
  - The Catholic reading comes from a 1910 encyclopedia article. It is not a document of the Catholic Church, and the
    Catechism cites Ignatius on the bishop and on the church.
  - The Orthodox reading is only the OCA's statement that Ignatius was "the second bishop of Antioch, and successor to
    Bishop Euodius". That is a fact about his see, not an Orthodox reading of his teaching on the overseer.
  - The Protestant reading is only the Catholic Encyclopedia's description of Presbyterians ("as a rule ... repudiate")
    and Calvin's dismissal of a text he never knew in its short form. That is a third party describing a tradition (see
    the lesson), under a heading, "As not to be trusted", that half-caricatures it.
  - No Lutheran, Reformed, Baptist or Orthodox source that discusses Ignatius on the bishop is given. The heading fixes the
    Reformed answer as distrust, when the questions themselves (whether bishops are a separate order, and succession) are
    on the existing cards.
- Fix:
  - Open the Catechism's own citations of Ignatius on the bishop and use them for the Catholic reading.
  - Use an Orthodox source that discusses Ignatius's teaching (not only his see), or drop the Orthodox sentence.
  - Retitle the third heading (for example "Questioned") and keep only what is sourced.
  - Say plainly that the Protestant answers are on the cards at Acts 20:28, 1 Timothy 3, Philippians 1:1, Titus 1 and
    2 Timothy 2:2, rather than standing them in with the Catholic Encyclopedia's description.

**9. Major: The 2:2 note misses the link to Philemon 20 (ὀναίμην) and Philemon 7 and 20 (refreshed), which bears directly on
the brief's Onesimus question.**
- Where: plain.txt 2:1-2 (no note at 2:2); notes.json 1:3 Onesimus; topics.json `onesimus`.
- What is wrong: Right after naming Onesimus (2:1), Ignatius writes ὀναίμην ὑμῶν διὰ παντός (2:2). Philemon 1:20 (SBLGNT,
  texts/orig/Phm.json) reads ἐγώ σου ὀναίμην ἐν κυρίῳ· ἀνάπαυσόν μου τὰ σπλάγχνα, which is Paul's own play on the name
  Onesimus ("useful"). In the same sentence Ignatius says Crocus κατὰ πάντα με ἀνέπαυσεν (2:1). The site's Philemon 1:20
  reads "let me gain something from you". The Plain English Translation's "May I always have joy from you" (after Lake)
  hides the verb, and no note says that the rare optative of the Onesimus pun stands here. The textual facts can be checked
  in the Greek. Whether they support the identification is a question to put only from a source opened.
- Fix:
  - Add a `word`/`echo` note at 2:2 with ὀναίμην, the site's Philemon 1:20, and ἀνέπαυσεν/ἀναψύξαι beside Philemon's
    ἀνάπαυσον.
  - Make no claim about who argued from it unless a source is opened.
  - Consider "May I always have the benefit of you" (Lake's "joy" is a paraphrase), and add it to the suggested back-links
    (Philemon 1:20 to 2:2).

**10. Major: The site states in its own voice that Ignatius read John, which is debated.**
- Where: book.json lead[1] ("read Paul and John"), lenses N desc, reliability sections[0] ("how Paul's letters and John's
  language were used"); chapters.json ch. 5 view N ("'God's bread' is John's phrase").
- What is wrong:
  - Whether Ignatius knew the Gospel of John is a debated question, unlike his knowledge of 1 Corinthians.
  - Lake prints John 6 in the margin at 5:2 (as "Joh 6, 33"), but a margin parallel is not evidence of use.
  - No source opened says that Ignatius used John.
  - The canon block is more careful ("'God's bread' is John's phrase; Lake prints John 6 in the margin"); the lead is
    not.
- Fix: Say "echoes Paul, and language close to John's (Lake's margin at 5:2)". Name whoever holds that he used John only
  from a source opened.

**11. Major: The new `incarnation` core gives one view only, and presents scholarly hypotheses as fact.**
- Where: content/proposals/works/topics/incarnation.json.
- What is wrong: It is a whole-Bible Ideas page (Lead decision 1), but:
  - It states that Philippians 2:6-11 and 1 Timothy 3:16 are "older hymns he [Paul] quotes". That is a widely held
    scholarly proposal, not a fact. It also assigns 1 Timothy to Paul without the site's usual note on the debated
    authorship of the Pastorals.
  - It gives no Jewish reading (the Incarnation is the point where Christian and Jewish belief part) and no critical
    reading (the development of New Testament Christology, the debate over whether Philippians 2 implies preexistence).
  - It gives no Old Testament frame (Isaiah 7:14 with Matthew 1:23, Immanuel; John 1:14's "pitched his tent" and the
    tabernacle).
  - It is silent on the later creeds that defined the doctrine.
  - STYLE.md and Matt's rules require every view, labeled consensus, and the Jewish and critical readings.
- Fix:
  - Label the hymn proposal ("many scholars think ...", only with a named source opened; otherwise "Paul writes").
  - Mark 1 Timothy's authorship as debated, as elsewhere on the site.
  - Add an Old Testament section (Isaiah 7:14 and Matthew 1:23, in the site's wording).
  - Add a short "Who does not hold it" section (Jewish, Unitarian, critical), each from a source opened, or say that the
    site has not yet sourced it.
  - Put the creeds in only with Nicaea and Chalcedon opened.

### Minor

**12. Minor: variants.json 9:1 `why`.** "'Father' could be written as three letters, which also begin the word
'beforehand'." Lake's footnote (OCR line 9501) gives πατρός "written πρς". The three-letter short form ΠΡΣ shares only ΠΡ
with ΠΡΟ-. Fix: "whose first two letters also begin the word 'beforehand'".

**13. Minor: variants.json 19:3 witnesses.** The entry credits the omission to the Armenian alone ("Armenian (A), followed by
Lightfoot"). Lake's footnote in texts/src/IEp.app.json reads "on the authority of *a*s", that is A and S, and the OCR
(line 10049) is garbled. Fix: check the scan and give "Armenian (A) and Syriac (S)" if the footnote has both.

**14. Minor: variants.json 18:2 `why`.** "That is, the word could easily have been added because 'God's plan' is a common
phrase" is the writer's explanation of "transcriptional probability". It runs on from Lake's quotation as if it were his.
Fix: mark it as the site's explanation, or cut it.

**15. Minor: plain.txt 10:2.** "Do not be eager to pay them back in kind" for μὴ σπουδάζοντες ἀντιμιμήσασθαι αὐτούς loses
the wordplay with 10:3 μιμηταὶ τοῦ κυρίου (don't imitate them back; imitate the Lord). English can carry it. Fix: "Do not
be eager to imitate them in return."

**16. Minor: plain.txt 10:3.** In τίς πλέον ἀδικηθῇ, τίς ἀποστερηθῇ, τίς ἀθετηθῇ, the word πλέον governs all three.
"Who can suffer the most wrong, who can be robbed, who can be set aside" drops it from the last two. Fix: "who can be
wronged, robbed or set aside the most".

**17. Minor: plain.txt 1:1.** "You rekindled the fire by the blood of God" supplies an object ("the fire") that the Greek
lacks. The object of ἀναζωπυρήσαντες is most naturally τὸ συγγενικὸν ἔργον (Lake: "having kindled your brotherly task"),
and the 1:1 note then interprets the supplied fire as their love. Fix: "Rekindled by the blood of God, you have brought to
completion the work that comes naturally to you", or keep the image in the note only.

**18. Minor: plain.txt 2:1.** In "I pray that he may stay on here", the word "here" is not in the Greek (παραμεῖναι). The
note's reason (he stayed with Ignatius: Smyrnaeans 12:1) is sound. Fix: "stay on with me", or drop "here" and leave the
explanation to the note.

**19. Minor: plain.txt 9:2.** "I share your gladness in this" for οἷς καὶ ἀγαλλιώμενος. The participle is Ignatius's own
exulting in their virtues, not a sharing of their gladness. Fix: "I too rejoice in these things".

**20. Minor: plain.txt 6:2.** "You listen to no one except someone who speaks truthfully about Jesus Christ" is stronger
than οὐδὲ ἀκούετέ τινος πλέον, ἢ ... ("no one more than"). Fix: "you listen to no one more than to someone who ...". The
variant's `plain` can stay as it is.

**21. Minor: plain.txt 3:1 and 3:2.**
- 3:1: In "bound for the Name", ἐν τῷ ὀνόματι is "in the Name", and "for" interprets it.
- 3:2: "Appointed to the ends of the earth" (the brief's phrase) suggests being sent outward. κατὰ τὰ πέρατα ὁρισθέντες
  is "appointed throughout the farthest parts" (Lightfoot p. 86: "established in the farthest parts of the world").
- Fix: Consider "appointed in the farthest parts of the earth". This needs a word from the lead, since the brief fixed the
  phrase.

**22. Minor: notes.json 12:2.** "Given a good witness" (μεμαρτυρημένου) follows the 1 Clement passive entry, which is
right. But the batch's μάρτυς entry asks for a note on whether death is meant where the subject is an apostle who died for
the faith (1 Clement 5:4, 7), and here the subject is Paul. Fix: add a sentence giving both senses, sourced or put as a
question.

**23. Minor: notes.json 9:2 and chapters.json ch. 9 view H.** "Claude's reading: the words suggest a religious procession"
sits inside a `word` note and a lens view. Rule 4 of agent-writer.md: Claude's own ideas go only in `spec` notes or boxes.
Lake's English ("fellow travellers, and carry with you God, and the Temple ...", OCR 9538) already points to a procession.
Fix: move it to a spec note, or source it to a published reading that is opened.

**24. Minor: content/proposals/works/topics.md.**
- The proposed `apostolic-fathers` section writes bare "(1:3)", "(2:2)", "(7:2)", "(20:2)". In a topic file a bare c:v
  has no book, so these will not link to IEp.
- The proposed `ignatius` section says Smyrnaeans "has the earliest known use of 'the catholic church'" without crediting
  anyone. That breaks the "earliest" lesson. The Catholic Encyclopedia, which was opened, says "we meet for the first time
  the phrase 'Catholic Church'".
- Fix: write "Ignatius to the Ephesians 1:3" and so on in full, and credit the claim to the Catholic Encyclopedia.

**25. Minor: book.json lead and canon.accepted_by[4].**
- The lead says Ignatius "is honored as a martyr in the calendars of the Catholic, Orthodox, Anglican and Lutheran
  churches". The Lutheran evidence is one district page of the LCMS (southernlcms.org), and the Anglican evidence is TEC's
  trial calendar.
- The LCMS row rests on a district site, not on a synod document. It is near the edge of the lesson that a church's row
  comes only from that church's own document.
- Fix: say "the Episcopal Church" and "the Lutheran Church—Missouri Synod", or open the LCMS's own calendar (*Lutheran
  Service Book*) and cite it.

**26. Minor: book.json canon.reliability sections[1] and verdict.** "In this letter the witnesses split on sixteen points."
Several of the 16 footnotes are editors' emendations (9:1 and 9:2, Lightfoot; 20:2, Zahn and Lightfoot; 6:2, Lightfoot's
correction of G), not splits among witnesses. Fix: "Lake's footnotes mark sixteen places where witnesses or editors
differ."

**27. Minor: book.json spec[0].** It quotes "keeps silent" (6:1), but the Plain English Translation reads "keeping silent".
The build's quote check shows the mismatch. Fix: quote the verse's own words.

**28. Minor: chapters.json settings.**
- `by` and `to` are the same sentence, word for word, in all 12 settings. `to` really is the same church each time, so this
  is acceptable. But the ch. 20 `readers` speaks of later readers (the modern commemorations), not the first readers the
  field is for.
- Fix: put the later readers in `why` or in the deep section, and say who the first readers of 20:2 were (Ephesians who met
  for the thanksgiving, 13:1).

**29. Minor: notes.json 19:3 "The end of magic".** "Ignatius links the two" (mageia and the magi) puts the writer's
connection into Ignatius's mouth. The text never mentions magi. Fix: "The word ... belongs to the same family as 'magi',
and the passage follows the star of Matthew 2."

**30. Minor: plain.txt 5:3 and 13:1.** The same phrase, ἐπὶ τὸ αὐτό, is "to the gathering" in 5:3 and "in one place" in
13:1. The 5:3 note itself links the two. Fix: render it the same way in both verses ("come together in one place").

**31. Minor: plain.txt 15:2.** The ἵνα clauses ("so that he may act through what he says and be known through what he
keeps silent") are turned into future statements ("He will act ... he will be known"). Fix: keep the purpose clause.

**32. Minor: chapters.json ch. 1 sum[1].** "The Ephesians sent men to Smyrna to stand by a condemned man, a risk as well as
a kindness": the risk is not in the text or in any source opened. Fix: cut "a risk as well as" or source it.

## For the lead (across books)

- Finding 1 (Athanasius's Greek, γεννητός or γενητός): if confirmed, the same line may be quoted in IRo, ISm, `docetism`
  and `incarnation`.
- Finding 2: the authenticity wording ("the best modern criticism favors", 1910) is likely shared by IRo and ISm.
- Finding 9: add Philemon 1:20 to 2:2 to the back-links. The `onesimus` core is the place for the identification question.
- Finding 21: the brief's fixed phrase "appointed to the ends of the earth" (3:2) needs a lead decision.
- The `incarnation` core (finding 11) is shared with the Romans and Smyrnaeans writer's contribution: fix the core first.

## Fixes applied
Review fixer, 2026-11-13. Every finding checked against the sources first; scratch and downloads in `.scratch/IEp-fix/`.

1. Accepted. Athanasius's Greek opened (Migne, PG 26, col. 776, De synodis 47, scan leaf 404): he has ἐν ἀνθρώπῳ θεός ("God in man", so the variant's claim stands) but spells γενητὸς καὶ ἀγένητος; the editors' notes record the double ν in one manuscript, call the single ν his true reading and say he confuses the two words. Variant 7:2 `why`, the 7:2 note "born and unborn" and the `incarnation` core now say so; new key `athanasius-de-synodis-greek`.
2. Accepted. The Catholic Encyclopedia's caveat quoted and dated 1910; the later challenges (Weijenborg, Joly, Rius-Camps, Hübner, Lechner) and replies (Schoedel 1987, Munier 1993, Zañartu) from Zañartu's survey (Teología y Vida, 2009), and Zuiddam (2010) for the other side, all opened. One paragraph in book.json authorship and sections and topics `ignatius`; reliability verdict and section 3 reworded; final text in build.md for IRo/ISm.
3. Accepted. The 19:1 note now names virginity and giving birth as two mysteries side by side and leaves "in" and "after" to the churches (card at Matthew 1:25); the 19:1 "Hidden from the devil" note aligned.
4. Accepted. 14:2 "No one who claims faith sins"; new word note with the site's 1 John 3:6; chapter 14 sum and view N rewritten.
5. Partly accepted. "They" kept (a neuter plural subject with a singular verb is regular Greek), with a new `deb` note at 19:2 giving Lake's and Roberts-Donaldson's "he"; the chapter 19 spec box now says it depends on the plural reading.
6. Accepted. The unsourced "whole letter" reading dropped; the 12:2 note, chapter 12 and topic `paul` now say the verse shows he knew Paul as a letter writer, and base "several letters" on the greeting's Ephesians 1 language and Lake's margin (1 Corinthians at 16:1, 18:1; Romans at 8:2, 18:2, 20:2). Lake's margin has no Ephesians entry, so the greeting echo is credited to the site's own note.
7. Accepted. Lightfoot's pages 73 and 84 added (the episcopate's mature forms where the last apostles lived, not apart from "their influence or their sanction"; "the same purpose which ... influenced the last surviving Apostles in its institution") in the 6:1 note, chapter 5 deep section, book section, reliability section 4 and topic `elders`. Page 33 is not used: it states Rothe's theory, which Lightfoot says "cannot be accepted as final".
8. Accepted. Catholic reading now from the Catechism 1549, 1554, 1555 (opened); the OCA see sentence replaced by an Orthodox reference work that discusses Ignatius's teaching (The A to Z of the Orthodox Church, 2010, labeled as such); third heading "Questioned", with the Catholic Encyclopedia's line marked as one church describing another; the Protestant answers pointed to the cards.
9. Accepted. 2:2 now "May I always have the benefit of you"; new echo note quoting the site's Philemon 1:20 exactly, with ἀνέπαυσεν beside Philemon 1:7, 20; no claim about who argued from it; topic `onesimus` sentence; back-links Philemon 1:20 → 2:2 and 1:7 → 2:1 in build.md.
10. Accepted. Lead, lens N, reliability section 1, book section 6, chapter 5 view N, the 5:2 note's summary and canon cited_in now say "language close to John's" / "the words of John 6:33" (Lake's margin), with no claim that he read John.
11. Accepted (critical and Unitarian readings partly). Core rebuilt: Old Testament frame (Isaiah 7:14, Matthew 1:23, Exodus 25:8, Revelation 21:3, site wording); hymn claim removed ("Paul writes", pointing to Kenosis); 1 Timothy's authorship marked debated; creeds of Nicaea and Chalcedon quoted from the opened NPNF texts; "Who does not hold it" with the Jewish view from Henrix and Kessler (2008, opened), and a plain statement that Unitarian and critical readings are not yet sourced.
12. Accepted: "whose first two also begin the word 'beforehand'".
13. Accepted after checking the scan (page 192): the footnote reads "AΣ", the Armenian and Cureton's Syriac abridgment (Σ in Lake's symbols), not S. Witnesses, summary and `why` corrected.
14. Accepted. The explanation of "transcriptional probability" is now marked as the site's gloss, not Lake's.
15. Accepted: "Do not be eager to imitate them in return."
16. Accepted: "to see who can be wronged, robbed or set aside the most."
17. Accepted: "By the blood of God you rekindled the work that comes naturally to you, and you carried it through to perfection" (after Lake); the 1:1 note rewritten.
18. Accepted: "stay on with me"; the 2:1 note gives παραμένειν.
19. Accepted: "I too exult in these things."
20. Accepted: "you listen to no one more than to someone who ..."; the 6:2 variant anchor and followed reading updated.
21. Accepted. 3:1 "bound in the Name". 3:2 (lead decision): "appointed throughout the ends of the earth" (κατά distributive; Lightfoot p. 86), in plain.txt, notes, chapter 3, topic `elders`; recorded in build.md as a cross-book item.
22. Accepted. The 12:2 note says the passive means approval, not "martyred", and puts the question of Paul's death as a question, pointing to the note at 1 Clement 5:4.
23. Accepted. Claude's procession reading removed from the 9:2 word note and chapter 9 view H, and put in a spec box on chapter 9's page.
24. Accepted. topics.md: full "Ignatius to the Ephesians c:v" references, and the "first use of 'Catholic Church'" credited to the Catholic Encyclopedia (1910).
25. Partly accepted. The LCMS's own calendar (Lutheran Service Book) could not be found online, so the lead, canon summary, topic `ignatius` and the LCMS row now say "a district calendar" and the row says the synod's calendar was not opened; the lead names the Episcopal Church. The row name "Anglican Communion" kept, since the row also cites Article VI.
26. Accepted: "sixteen places where witnesses or editors differ" (reliability section 2, provenance).
27. Accepted: spec quotes "keeping silent" (6:1).
28. Accepted. Chapter 20's `readers` now names the first readers (the Ephesians at the thanksgiving, 13:1; 20:2); the later commemorations moved to `why`, pointing to the deep section. `by`/`to` left as they are (same church each time).
29. Accepted. The 19:3 note no longer puts the magi link in Ignatius's mouth.
30. Accepted. 5:3 now "does not gather in one place", the same words as 13:1; the 5:3 note says so.
31. Accepted: "so that he may be complete: so that he may act through what he says and be known through what he keeps silent."
32. Accepted: "a risk as well as" cut.
