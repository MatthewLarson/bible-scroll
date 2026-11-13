# Hostile review: Epistle to Diognetus (Dgn), whole book

Reviewer: separate hostile-review agent, 2026-11-13. Scope: `content/books/Dgn/` (plain.txt, notes, variants, glosses,
chapters, book.json, topics.json, sources.json), the new cores `content/proposals/works/topics/apologetics.json` and
`resident-aliens.json`, the Diognetus entries in `content/proposals/works/terms.json`, and the Diognetus sections in
`proposals/works/topics.md` and `build.md`. Measured against agent-reviewer.md, agent-reviewer-works.md, agent-writer-works.md,
STYLE.md, brief-apfathers2.md (with its Lead decisions) and brief-dgn.md.

## Verdict

The translation is careful and close to Lake's Greek. I checked all 100 verses against `texts/orig/Dgn.json` and found no
wrong subject, tense or number, and nothing left out of substance. The antitheses of 5-6 keep their balance, and the scorn of
3-4 is not softened. Every quotation of the site's own Plain English Translation I checked (about 110, by script) matches
exactly. Every Lake quotation I checked against the local OCR of his vol. 2 is right (introduction, the notes at 2:3, 6:7, 6:10,
the two gaps, 11:3, 11:5, and his English at 5:7, 7:4, 8:9, 10:4, 10:7). So are the Catholic Encyclopedia quotations (opened at
newadvent.org/cathen/05008b.htm) and Catechism 2240, note 46 (opened at vatican.va). `--check Dgn` is 0 errors, 0 warnings.

The weak point is the textual apparatus. The book treats Lake's printed Greek as if it were the manuscript. It is not: in
several places Lake prints an editor's emendation without a footnote. The writer's own English check text (Roberts and
Donaldson, in `texts/en/Dgn.json`) translates a different Greek in at least eight places, and the ANF footnotes (which the
writer did not see, because New Advent drops them) name some of these readings outright. None of them has a variant entry. A
note and a topic section even build a wordplay on one emended word (5:7). The 7:6 variant gives the manuscript a Greek
marginal word, "(λείπει)", that is in no source. The 10:1 variant offers a made-up "no gap" reading in place of Otto's real
supplement. Beyond the apparatus, there are a few clashes of key terms ("servant" for two different Greek words, which makes the
text seem to contradict itself between 7:2 and 8:9; "kindness" for ἐπιείκεια against the site's "forbearance"). Some views are
credited to unnamed "some". Some claims about Greek writers come from no opened text. And the apologetics core dates Diognetus
to the second century, against the book's own uncertain date.

Counts: 1 critical, 7 major, 11 minor.

## Findings

### 1. Critical: variants.json 7:6, reading 0 `orig` "… (λείπει)": an invented manuscript reading
The first reading is credited to "The Strasburg manuscript ... as collated for Otto's edition" with Greek `… (λείπει)`.
Nothing the writer opened prints λείπει: Lake's Greek (`texts/orig/Dgn.json` 7:6) ends `ὑποστήσεται; …`. Lake's note on his
English page (OCR line 17206) says only "There is here a lacuna in the MS." A grep of the whole vol. 2 OCR finds λείπει only in
Hermas. `sources-checked.md` lists no source for it either. A Greek word attributed to a lost manuscript with no source is an
invented reading.
**Fix:** make `orig` "…" (Lake's row of dots) and leave out "(λείπει)". If the fixer wants to report any marginal note in the
manuscript, it must come from an apparatus opened this session (Otto 1879; von Gebhardt-Harnack 1878), named with its page.

### 2. Major: missing variants where Lake prints an editor's reading; the note and topic on 5:7 build on an emendation
Lake has no apparatus for Diognetus, so his text silently takes some editors' readings. Roberts and Donaldson (the writer's
English check, `texts/en/Dgn.json` `anf`) translate different Greek at these places. The ANF footnotes, which I read at
bkv.unifr.ch/works/cpg-1112/compare/epistolh-pros-diognhton/<n>/the-epistle-of-mathetes-to-diognetus (chapters 6, 11, 12,
13), say so outright at some of them:
- **5:7** ("not a shared bed"). ANF footnote: "Otto omits 'bed,' which is an emendation, and gives the second 'common' the
  sense of unclean." So the manuscript (as Otto prints it) has κοινήν twice, and Lake's κοίτην is a conjecture. Note 37
  ("The two last words sound almost alike") and the `marriage` contribution ("a play on the Greek words <i>koinēn</i> and
  <i>koitēn</i>") present an editor's wordplay as the text's. A careful reader needs to know this, since Otto's reading changes
  the sense ("a common table, but not a common [unclean] one").
- **8:11 / 9:1** (οἰκονομηκώς, "he had already planned everything ... with his servant"). Roberts and Donaldson have "He was
  aware, then, of all things in His own mind, along with His Son, according to the relation subsisting between them." That is
  a different Greek (an adverb, not Lake's participle) and a different theology of Father and Son.
- **9:1** ("he was shaping the present time of righteousness", τὸν νῦν). Roberts and Donaldson: "he sought to form a mind
  conscious of righteousness" (νοῦν for νῦν).
- **9:2** ("Oh, God's overflowing kindness to humankind, and his love!"). Roberts and Donaldson: "how the one love of God,
  through exceeding regard for men". They read a different text where Lake prints ὢ τῆς.
- **10:1**: see finding 3.
- **11:2** ("has come to love the Word", λόγῳ προσφιλὴς γενηθείς). Roberts and Donaldson: "begotten by the loving Word". Their
  footnote: "Some propose to read, 'and becoming a friend to the Word'". That is Lake's text, so Lake again follows a proposal.
- **11:5** ("the pledges of faith", ὅρκια). Roberts and Donaldson: "the limits of faith" (another word).
- **12:6** ("because he has not loved life"). ANF footnote: "The ms. is here defective. Some read, 'on account of the love of
  life.'"
- **12:9** ("the seasons are brought together", καιροί). Roberts and Donaldson: "the choirs are gathered together". ANF
  footnote: "Here Bishop Wordsworth would read kleroi".
agent-writer-works.md (the Tobit and 1 Maccabees lessons) requires a variant entry for every difference in meaning from the
other witness or English check text. brief-dgn.md says to translate every hard place "with that in view" (the one lost
manuscript). I could not open Otto, so I have not verified which reading is the manuscript's at each place. I report only what
Roberts and Donaldson's English and footnotes show.
**Fix:** open an apparatus this session. Possible copies: Otto's *Corpus Apologetarum* vol. 3 (the Bayerische
Staatsbibliothek scan is listed at deutsche-digitale-bibliothek.de; Otto's 1852 separate edition is listed on the Online Books
Page/HathiTrust), or another public-domain edition with notes. Then give each place above a variant entry: Lake's reading
(followed), the manuscript or other editors' reading as the apparatus names it, and Roberts and Donaldson's English where it
follows that reading. Rewrite note 37 and the `marriage` section to say that κοίτην is a conjecture Lake prints and what the
manuscript reads. Where no apparatus can be opened, the entry may cite only what Roberts and Donaldson's text and footnotes
show, and must say so. Report to the lead that Lake's Diognetus contains silent emendations.

### 3. Major: variants.json 10:1, reading 1 "No gap (the text read straight on ...)": an alternative no witness or editor gives
The second reading names no witness. It is a possibility the writer constructed from Lake's word "apparently". The real
alternative is on the page the writer used: Roberts and Donaldson read straight through, "you likewise shall receive first of
all the knowledge of the Father". The ANF footnote there (bkv.unifr.ch, chapter X, footnote 1): "Thus Otto supplies the lacuna;
others conjecture somewhat different supplements."
**Fix:** replace reading 1 with Otto's supplement as Roberts and Donaldson translate it, credited to that footnote, with
`plain` giving the effect in the Plain English Translation. Say in `b` that other editors supplied it differently. Drop the
uncredited "no gap" reading.

### 4. Major: "servant" for two Greek words makes 7:2 and 8:9-9:1 seem to contradict each other; note 77 misstates the text
At 7:2 God sent the Word "not ... some servant" (ὑπηρέτην). At 8:9, 8:11 and 9:1 he shares his plan with "his servant" and
reveals it "through his beloved servant" (παῖς). An English reader sees the letter deny and then affirm that God sent a servant.
brief-apfathers2.md (Terms, Diognetus) let the writer choose "Child" if the pairing with υἱός makes it plain, provided a note
says so and the writer reports it. Lake translates "Child" (OCR lines 17293, 17371, 17382), and so do Roberts and Donaldson
("Son"). Note 77 does not mention the clash with 7:2. It also says "at 9:2 the writer switches to <i>huios</i>": υἱός already
stands at 7:4 (υἱὸν βασιλέα).
**Fix:** either render ὑπηρέτης at 7:2 with another word ("some attendant", "some aide") and say why in a note, or take the
brief's option and render παῖς "Child" in 8:9, 8:11 and 9:1, with the note and a report to the lead. Correct "switches at 9:2"
in note 77 (υἱός is at 7:4, 9:2, 9:4 and 10:2).

### 5. Major: key-term clashes (ἐπιείκεια, χρηστότης, ἔννοια)
- 7:4 "He sent him in kindness and gentleness": ἐπιείκεια is "forbearance" in content/terms.json (the 1 Clement entry, "kept
  apart from πραΰτης 'gentleness'"). brief-apfathers2.md: "Existing site renderings stand." The Plain English Translation also
  uses "kindness" for χρηστότης throughout (9:1, 9:2, 9:6, 10:4, "an imitator of his kindness"). So the reader cannot tell 7:4's
  word from 9-10's. 9:2 adds a third "kindness" for φιλανθρωπία ("kindness to humankind").
- 8:9 "He conceived a great plan": ἔννοια. The book's own "About this translation" and terms say "plan" is οἰκονομία (4:5;
  7:1; 9:1). Lake: "conception".
**Fix:** 7:4 "in forbearance and gentleness", or justify a change of the term in proposals/works/terms.json with a "why". 8:9
"a great and unspeakable thought" or "conception", not "plan". Consider "love for humankind" at 9:2, as the site's Titus 3:4
("his love for humankind").

### 6. Major: notes.json 9:5 "The sweet exchange" credits views to unnamed "some"
"Readers in different traditions have heard their own teaching here: some a substitution ...; some a sharing ...; some both."
No tradition, theologian or document is named, and no source is cited. brief-dgn.md asks for "a `views` note on how the
churches read this passage on the atonement". The Apostolic Fathers lessons (agent-writer-works.md, agent-reviewer-works.md
item 6) forbid views credited to unnamed "many/most/readers".
**Fix:** name who reads it each way, from documents opened this session (a catechism, a confession, a named theologian who
discusses Diognetus 9). Otherwise cut the sentence and keep only the text's own words and the pointer to the site's cards.

### 7. Major: claims about Greek writers that come from no opened text
brief-dgn.md (lens A): "Greek critics of images, only from texts opened". sources-checked.md lists no Greek author. Yet:
- chapters.json 2, view A: "Greek critics of images existed, but the writer names none";
- chapters.json 3, view A: "The argument was common ground for Christian apologists and for Greek critics of sacrifice";
- chapters.json 4, view H: "with the same mockery that Greek writers used"; view A: "the tools of Greek satire";
- notes.json 8:8 (note 75): "an idea also found in Greek thought about God".
**Fix:** open and cite a named text for each (for example a Greek writer on images or sacrifice, or a Greek author's mockery of
Jewish customs), or cut the clause.

### 8. Major: the apologetics core dates Diognetus to the second century
`proposals/works/topics/apologetics.json`: the lead says "in the second century Christian writers such as Aristides, Justin and
the author of the Epistle to Diognetus addressed emperors and educated pagans", and the section "The second-century
apologists" is the frame for Diognetus. That contradicts the book: Lake says "probably later than any of the other writings";
Harnack "more probably ... the third than ... the second century"; the Catholic Encyclopedia gives "anywhere between the
Apostles and the age of Constantine". Diognetus also addressed no emperor.
**Fix:** "Christian writers such as Aristides and Justin (second century) addressed emperors; the Epistle to Diognetus, of
uncertain date, answers an educated inquirer." Give the date question in the Diognetus section.

### 9. Minor: "first", "best-known" and "most admired" without a source
- resident-aliens core, section 3, and chapters.json 5, deep "Resident aliens": "The first Christian letters after the
  apostles open with the same word".
- notes.json 11:6 (note 109): "an early witness to Christians reading the Gospels beside the Law and the Prophets", for a
  homily of uncertain date (perhaps the 200s).
- `atonement` contribution: "one of the best-known passages on the cross outside the New Testament"; book.json reliability:
  "one of the most admired passages of early Christian writing".
These are the Apostolic Fathers lesson ("oldest/first/earliest" only from a source opened).
**Fix:** "Early Christian letters (1 Clement, Polycarp, the Martyrdom) open with ..."; for 11:6, "a witness, from the time of
the homily, to ..."; cut "best-known" and "most admired", or credit them.

### 10. Minor: claims not in sources-checked.md
- chapters.json 5 deep: "The Greek Old Testament uses the word for Abraham (Genesis 23:4) and for Israel before God (Leviticus
  25:23; Psalm 39:12)". sources-checked.md lists only Gen 2-3, Mal 3:2, 1Sa 17:1 and Isa 42:1 from lxx.py. I checked with
  `tools/lxx.py`: πάροικος is at Genesis 23:4 and Leviticus 25:23, and at Psalm 38:13 in Swete's numbering, which is Psalm 39:12
  in English. So the claim is true. Add it to the log, and say "Psalm 39:12 (38:13 in the Greek numbering)".
- resident-aliens core: "the noun <i>paroikia</i> ... later gave English the word 'parish'". No source.
  **Fix:** cite a dictionary opened, or cut.

### 11. Minor: translation details
- 1:1 "this new race, this new way of life": the Greek is καινὸν τοῦτο γένος ἢ ἐπιτήδευμα, "this new race or way of life".
  The Plain English Translation turns "or" into apposition and adds a second "new". Also μάλιστα ("most of all", in ὡς μάλιστα
  ἂν ... βελτίω γενέσθαι) is dropped.
- 7:2 "the holy Word, beyond human understanding, among people": ἀνθρώποις is used twice (for "human" and "among people").
  Pick one: "the holy Word that cannot be grasped, among people" (Lake: "founded among men the truth, and the holy and
  incomprehensible word").
- 7:5 "He sent him with a call, not a chase": διώκων is "pursuing", and also "persecuting". "Chase" is flippant and hides that
  second sense. "calling, not hunting down" keeps it.
- 12:8 "deceit does not come near": συγχρωτίζεται, LSJ "to be in (defiling) contact with" (LSJ from the PerseusDL lexica XML,
  opened this session). "Deceit does not touch" is taken by ἅπτεται. Try "deceit does not rub against" or "does not stain".
- 3:1 "revere God" (θεοσεβεῖν) and 3:2 "revere one God" (σέβειν) use the same English for different words. 4:2 "lawless"
  (ἀθέμιστον, LSJ "unlawful") and 9:2, 5 "lawless(ness)" (ἄνομοι, ἀνομία) also use the same English. Consider "worship" at 3:2
  and "unlawful" or "wrong" at 4:2.

### 12. Minor: notes.json 10:7 (note 98) and terms: πολιτεύεται "governs"
The verb of 5:9 is rendered "governs" here. Lake has "God lives in heaven" (OCR line 17597), and the 1 Clement term is "live as
citizens". The note offers "holds his commonwealth there" but not Lake's rendering.
**Fix:** give Lake's "lives in heaven" in the note, and say why the Plain English Translation chose "governs" (Roberts and
Donaldson: "rules").

### 13. Minor: chapters.json 1, setting `readers`: "the scholars who copied and printed it from 1586 on"
Lake: Hausius copied it "about 1580" (before Stephanus in 1586), and the manuscript was Reuchlin's before 1560.
**Fix:** "from about 1580 on".

### 14. Minor: assertions without a source
- chapters.json 1, view N: "Like Luke, the writer ... writes for a wider audience". Nothing supports the second half.
- chapters.json 11, setting `when`: "If Hippolytus wrote it, the early 200s". No source for Hippolytus's dates is cited.
**Fix:** cut the first, or soften it ("may write for a wider audience", with Lake's doubt). For the second, cite the site's
`hippolytus-*` source or a source opened.

### 15. Minor: book.json `spec` "the questions answered in turn"
It says the questions "seem to be answered in reverse of the expected order", but the order it then lays out (2; 3-4; 5-6;
7-8; 9) is a regrouping, not a reversal. It also does not say where it overlaps with published scholarship (STYLE.md rule 4).
**Fix:** "answered in a new order"; add a sentence on overlap ("Lake's summary of the contents already notes ...").

### 16. Minor: notes.json 11:6 (note 109) talks about the digital copy
"The digital copy of Lake's text prints it with a rough breathing (ᾅδεται)" is pipeline detail in reader-facing content.
brief-apfathers2.md says these forms are left as they are, not that readers be told about them.
**Fix:** drop the sentence, or say only that the verb is ᾄδω "sing".

### 17. Minor: glosses and wording
- glosses 5:5 "resident aliens": "...; at home in heaven". The second half is interpretation from 5:9, not the sense of the
  phrase. Cut it.
- 9:6 "the one who feeds us" (τροφεύς). LSJ: "one who brings up, foster-father ... tutor". "Feeds" is narrower than the
  word. The gloss already has "raises us": consider "the one who raises us" in the text itself.

### 18. Minor: notes.json 4:1 (note 23) "How this attack on Judaism is read today": one church only
The note gives only the Catholic Nostra Aetate. brief-dgn.md asks how the treatment "is read today". A Jewish reader's or a
Protestant body's response, from a document opened, would make the note fair to more than one tradition.
**Fix:** add one more named voice from a source opened, or retitle the note to "What the Catholic Church teaches today".

### 19. Minor: canon block, Anglican row
Article VI does not list the New Testament books ("as they are commonly received"). "which do not include it" is the writer's
inference. It is not a ruling on the letter.
**Fix:** "Not Scripture: Article VI receives only the New Testament books 'as they are commonly received'; the letter has never
been among them." Keep it clear that Article VI does not mention Diognetus.

## Checked and found sound (for the fixer: do not change)
- All 100 verses against Lake's Greek. The gaps: the "..." at 7:6 and 10:1, Lake's bracketed suggestion at 7:7 with its own
  variant entry, and chapters 11-12 kept under Lake's numbers but marked as a separate homily in book.json (lead, facts,
  authorship, outline, sections), chapter pages 10-11, the settings and how_to_read. 6:1 without ἐν, as Lake prints it.
- Lexicon spot-check (LSJ, PerseusDL `lexica` XML on GitHub, opened 2026-11-13): ψοφοδεής "frightened at every noise, shy,
  timid" (note 4:1 right); τερατεία "talking marvels ... 'fairy story'" (8:4 "wonder-tales" right); γόης "sorcerer ... juggler,
  cheat" (right); εἰρωνεία "dissimulation ... pretence" (4:1 right); ἀθέμιστος "unlawful"; ἀόργητος "not irascible" (8:8 "free
  from anger" right); ἀνταλλαγή "exchange"; ἀλλόφυλος "of another tribe, foreign ... freq. in LXX of Philistines" (note 5:17
  right); παράσημος "marked amiss, counterfeit" (5:2 "not marked out as odd" acceptable); τροφεύς and συγχρωτίζομαι
  (findings 11, 17).
- Quotations of the site's Plain English Translation in notes, chapter pages and topics: all checked by script, all exact.
- Lake's margin references cited as Lake's (texts/src/Dgn.app.json `refs`): all real.
- Catholic Encyclopedia quotations (at most plausible; florid and obscure; fragment of a homily of later date; through a
  misunderstanding ... since the eighteenth century; breaks off at the end of chapter x; quite incapable; Baratier and Gallandi,
  Kruger, Draseke, Dorner; Harnack 170-300, Zahn 250-310): verified at newadvent.org/cathen/05008b.htm.
- Catechism 2240 and note 46 ("Ad Diognetum 5, 5 and 10; 6, 10"): verified at vatican.va.
- The "Where Christians differ" cards the notes point to exist: 2 Corinthians 5 "How does the cross save?", Romans 3, 1 John
  2, Exodus 20, Matthew 12, Romans 13, Matthew 22, 1 Kings 18, Psalm 82, 2 Peter 1. No new card was written, as the briefs
  require.
- Lead decision 2: the `resident-aliens` core covers 1 Peter 1:1, 1:17, 2:11, Hebrews 11:13, Philippians 3:20 and the three
  greetings. The cross-links to `foreigners`, `exile` and `philippi` are proposed in topics.md.
- `VERBOSE=1 node tools/build.js --check Dgn`: 0 errors, 0 warnings.

## For the lead (across books)
- Lake's Diognetus prints editors' emendations with no apparatus (finding 2). Whether Lake does the same in the Ignatius and
  2 Clement texts is worth asking those reviewers. A batch policy is needed: which apparatus to open (Otto, Gebhardt-Harnack,
  Lightfoot-Harmer), and how to credit readings known only from Roberts and Donaldson.
- The παῖς "servant" decision (finding 4): Diognetus is the one book in the batch where the term clashes with another
  "servant" in the same argument. Decide whether Diognetus takes the brief's "Child" option.
- ἐπιείκεια (finding 5): confirm "forbearance" binds the second batch too.

## Fixes applied
Fixer, 2026-11-13. Apparatus opened: Otto, Corpus Apologetarum vol. 3 (3rd ed., Jena 1879), Internet Archive scan `corpusapologeta00moragoog`, page images of pp. 178, 187-188, 192-198, 202-205, 208-210 and the OCR of p. 185 (new key `otto-diognetus-1879`); Roberts and Donaldson's footnotes in the Wikisource copy of the Ante-Nicene Christian Library (`.cache/dl/apfathers/dgn-anf.json`).
1. Fixed. 7:6 reading 0 `orig` is now "…". Otto (p. 187) reports a real marginal note in the manuscript, Οὕτως καὶ ἐν τῷ ἀντιγράφῳ εὗρον [ἐγκο]πήν, πα[λαιο]τάτου [ὄν]τος; it is given in `b` with his brackets and an English rendering. No "λείπει".
2. Fixed, with Otto opened. New variants at 5:7, 7:2 (the manuscript lacks "the sun", which R-D's footnote also says), 8:11 (ποιῆσαι, found in Otto), 9:1 twice, 9:2, 10:8 (πρόσκαιρον is Otto's own withdrawn conjecture; the manuscript has τὸ πῦρ τοῦτο, also found in Otto), 11:1, 11:2, 11:5, 12:6 (here the manuscript agrees with Lake: μ with η in the margin, so the variant records Stephanus's μ alone and R-D's footnote), 12:8 and 12:9 (the manuscript has κηροί "candles"; "choirs" is Maranus's conjecture, which R-D follow). Each gives the manuscript's reading, the editor's, which one the Plain English Translation follows (Lake's, as everywhere) and why. Note 37 (5:7) and the `marriage` contribution now say that κοίτην is Maranus's conjecture and the wordplay is not in the manuscript. Notes 101 (10:8) and 120 (12:9) adjusted; book.json "About this translation" and facts name the emended places. Reported to the lead in build.md.
3. Partly accepted. Reading 1 was not made up, though it had no witness named: in the 1879 edition Otto reads the manuscript as a complete sentence (καὶ λήψῃ, his correction of λάβῃς) and rejects supplements (pp. 196-198). R-D's "Otto supplies the lacuna" refers to that reading, which they translate. Reading 1 is now Otto's text credited to him with R-D's English; `b` gives Stephanus's gap, Reuss's report of the damaged manuscript and the editors' supplements. Note 90 and chapter 10 view H updated.
4. Fixed by the lead's decision. παῖς is "Child" at 8:9, 8:11, 9:1 (and chapter 8-9 summaries, mystery contribution); ὑπηρέτης at 7:2 is "attendant" (note 56 explains the word). Note 77 rewritten: the clash with 7:2, υἱός at 7:4, 9:2, 9:4, 10:2 (the "switches at 9:2" error gone), Acts 3:13 quoted exactly. New gloss at 8:9. Terms entry added.
5. Partly accepted. 7:4 "in forbearance and gentleness" (also in the incarnation contribution and the apologetics core); 8:9 "a great thought, too great for words". Declined at 9:2: "love for humankind, and his love" would repeat the English "love" for φιλανθρωπία and ἀγάπη; "kindness to humankind" is fixed by the writer's terms entry and marked off from χρηστότης by "to humankind".
6. Fixed by cutting. No document naming the readings was opened, so the "some ... some ... some both" sentence is gone; the note keeps the text's words and the pointer to the site's cards. Its preview no longer says "best-known".
7. Fixed by cutting. Chapter 2 view A, chapter 3 view A, chapter 4 views H and A, note 75 no longer claim anything about Greek writers. Also cut the same kind of unsourced "Greek thought" in note 46 (6:1) and the `soul` contribution.
8. Fixed. The apologetics lead no longer dates Diognetus; Aristides and Justin are said to address emperors (opened at New Advent: "before Hadrian the King"; Justin's address to Antoninus Pius), no century given; the section is "The early apologists"; the Diognetus section gives Lake's and Harnack's dates and says it addresses one inquirer. book.json's "Apologists of the second century" (not Lake's words) also corrected.
9. Fixed. resident-aliens core and chapter 5 deep: "Early Christian letters (1 Clement, Polycarp, the Martyrdom) open with ..."; "fullest" also removed. Note 109: "a witness, from the homily's own time". "best-known" cut in the atonement contribution, note 86 and chapter 9; "most admired" replaced by the Catechism's quotation (2240).
10. Fixed. Checked with tools/lxx.py this session (Gen 23:4, Lev 25:23, Psa 38:13 Swete); chapter 5 now says "Psalm 39:12, which is Psalm 38:13 in the Greek numbering". The "parish" clause is cut (no dictionary opened).
11. Fixed. 1:1 "this new race or way of life" and μάλιστα "more than anything"; 7:2 "set among people the truth and the holy Word that cannot be grasped"; 7:5 "He sent him to call, not to hunt down"; 12:8 "deceit does not stain"; 3:2 "honor one God"; 4:2 "unlawful". Notes and topic quotes of these verses updated.
12. Fixed. Note 98 gives Lake's "God lives in heaven", R-D's "rules", and why the Plain English Translation has "governs"; the terms entry says the same.
13. Fixed: "from about 1580 on".
14. Fixed. Chapter 1 view N cut to "Like Luke, the writer addresses one inquirer by name." Chapter 11 `when`: the unsourced date replaced by Otto's (p. 210): the third century or a little later.
15. Fixed: "answered in a new order", plus a sentence saying that Lake's introduction already lists the contents in this order and that matching them to the questions of 1:1 is Claude's own.
16. Fixed: the sentence about the digital copy is gone; the note says only that the verb is ᾄδω "sing".
17. Fixed: the 5:5 gloss loses "at home in heaven"; 9:6 now "the one who raises us" (text, gloss, note 89).
18. Fixed by retitling: "Read beside the Bible, and what the Catholic Church teaches today" (no other church's or Jewish document was opened).
19. Fixed: "Article VI receives only the books of the New Testament 'as they are commonly received'; it does not mention Diognetus, and the letter has never been among those books."
