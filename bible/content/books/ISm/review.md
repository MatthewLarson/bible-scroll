# Hostile review: Ignatius to the Smyrnaeans (ISm)

Reviewer: separate hostile-review agent (not the writer), 2026-11-13. Scope: `content/books/ISm/` (plain.txt, notes, variants,
glosses, chapters, book.json, topics, sources), the new core `content/proposals/works/topics/docetism.json`, and ISm's
`incarnation` contribution. Checked against Lake's Greek (`texts/orig/ISm.json`, with the lead's new 4:1/4:2 split), Lake's
footnotes (`texts/src/ISm.app.json`, and both local OCRs of Lake vol. 1), Lightfoot 1889 (local OCR `.cache/dl/lightfoot-ign/smyr.txt`),
and the writer's saved web copies (`.scratch/IRo/web`, `.scratch/ISm/web`). Everything marked "verified" below was opened in this
session. `node tools/build.js --check ISm` now gives **1 error** (`missing verse 4:2`), as expected after the import fix.

## Verdict

The translation is careful and close to Lake's Greek. I found no added or dropped clause, every "truly" (ἀληθῶς) is kept, the
key terms of brief-apfathers2.md are used, and the variants match Lake's footnotes exactly where I checked them on the scans
(including 5:2, where the digital apparatus has "CLA" and Lake's page has GLA). The writer was also right against the brief at
1:1: Lake's footnote mark stands at the last θεοῦ, not at "Jesus Christ, the God". Most of the quotations I checked against the
sources were accurate: Lightfoot, Lake, the Catechism (830, 1256, 1369, 1411), Westminster 27.4, LBC 28.2, Article XXIII,
Augsburg XIV, the OCA pages, the LCMS page and the Catholic Encyclopedia.

The problems are elsewhere:
- **The 4:1/4:2 split.** The lead's fix to the import has to be carried through about a dozen places.
- **The 7:1 `views` note.** It is not what the brief asked for. The Anglican and Baptist readings are missing. The Orthodox
  source does not mention Ignatius. The "Reformed" reading is a remark of Calvin's about the spurious long recension, made in a
  Trinitarian argument, and one of its quoted phrases is the translator's chapter summary, not Calvin's words.
- **The chapter-8 card.** The Anglican row cites Article XXIII, which does not answer the card's question about bishops.
- **"First known use" claims.** "The first known use of 'the catholic church'" is stated in the site's own voice in the
  book.json lead and in the chapter 8 summary.
- **An unsourced Anglican claim.** The canon summary says Anglicans honor Ignatius as a saint, but the writer could not open the
  Church of England calendar.
- **Small factual slips.** For example, "four times" where the letter has "truly" five times.

None of these is an invented source or reading, so there are no critical findings.

Counts: **critical 0, major 6, minor 17**.

## Findings

### 1. MAJOR: plain.txt and everything tied to it must be split to match Lake's 4:1 / 4:2 (import corrected by the lead)
- **Where:** plain.txt 4:1; notes.json at 4:1; variants.json at 4:1; chapters.json chapter 4; the 2:1 note; book.json; progress.md;
  the docetism core; topics.json.
- **What is wrong:** `texts/orig/ISm.json` now has 4:2 as its own verse. It starts at εἰ γὰρ τὸ δοκεῖν ταῦτα ἐπράχθη (both scans
  of Lake begin section 2 there; see `fixed["4:2"]`). The writer kept the whole of Lake's 4:1-2 in 4:1, with a note explaining
  why. `--check ISm` now errors with `missing verse 4:2`.
- **Fix:** carry the split through every place below.
- **plain.txt:**
  - 4:1 ends "...has the power to do it."
  - New line `4:2 For if these things were done by our Lord only in appearance, ... makes me strong.`
  - Keep the "## Beasts in human form" heading above 4:1.
- **notes.json:**
  - Move three notes to `"v": "4:2"`: "then I too am in chains only in appearance", "near the sword is near God" and "the perfect
    human being, makes me strong".
  - In the first of these, delete the opening sentence ("Lake prints this as 4:2; the digital text runs it into 4:1, so it stands
    in this verse here.").
  - In the 4:1 note "beasts in human form", change "(4:1 below; ...)" to "(4:2; ...)".
  - In the 2:1 note, change "Lake's footnote at 4:1" to "at 4:2". Also make it say that Lake's footnote stands at the first
    τὸ δοκεῖν of 4:2 and applies "here and elsewhere". The Berlin papyrus does not cover 2:1 (it begins at 3:3), so at 2:1 only
    g's dative is relevant (see finding 9).
- **variants.json:** move "the perfect human being" (γενομένου GL) to 4:2. Lake's footnote 3 stands there on both scans
  (OCR lines 13270 and 12126).
- **chapters.json, chapter 4:**
  - Delete the second `sum` paragraph ("Lake prints the second half ... keeps the whole as 4:1.").
  - Change the setting `"v": "4:1"` to `"4:1–2"`.
  - The quotations in `sum` can stay; add (4:2) where the chains, the sword and "the perfect human being" are quoted.
- **book.json:**
  - outline `"4:1"` becomes `"4:1–2"`.
  - facts "Length": "a greeting (1:0) and 28 verses".
  - sections "Christ truly in the flesh": the chains quote is now (4:2).
  - reliability section 2: delete "In the digital text Lake's 4:2 is run into 4:1."
- **progress.md:** "28 lines (1:0 + 27; Lake's 4:2 is inside 4:1 ...)" becomes 1:0 + 28 verses.
- **docetism.json, section 3:** the chains quotation and its refs become "Ignatius to the Smyrnaeans 4:2".
- **topics.json:**
  - `incarnation`: "'the perfect human being' (4:1)" and the chains quotation "(4:1)" become (4:2).
  - `false-teachers` stays at 4:1.
- **build-md items:** the writer's lead item on the split in `proposals/works/build.md` is now settled. The fixer should mark it
  done there, or tell the lead.

### 2. MAJOR: the 7:1 `views` note does not give the churches' readings of this verse as the brief requires, and misuses Calvin
- **Where:** notes.json 7:1, "'The flesh of our Savior': how the churches read 7:1".
- **What the brief required:** brief-ism.md, Places that need full treatment, asks for "a `views` note giving how the Catholic,
  Orthodox, Lutheran, Reformed, Anglican and Baptist traditions read this verse, each from a source that discusses Ignatius here".
  The note falls short in four ways:
  - **No Anglican or Baptist reading.** Both are missing, and the note does not say that none was found.
  - **The Orthodox source does not discuss Ignatius.** The OCA "Holy Eucharist" page does not mention him. I verified this: 0 hits
    for "Ignatius" in `.scratch/IRo/web/oca-euch.txt`. The note admits it, but the brief's test is not met.
  - **The Reformed row is not a reading of 7:1.** Calvin, *Institutes* 1.13.29, is answering anti-Trinitarians who cited
    "Ignatius". His words (verified in `.scratch/ISm/web/calvin.txt`) are "let them prove that the apostles enacted laws concerning
    Lent ... Nothing can be more nauseating, than the absurdities which have been published under the name of Ignatius". He says
    nothing about the Supper or about this verse. Putting this under "Reformed", in a note on how churches read "the thanksgiving
    is the flesh of our Savior", makes the Reformed tradition look as if it answers 7:1 by dismissing the letter. That caricatures
    it.
  - **One phrase given to Calvin is not his.** "writings improperly attributed to Ignatius" is the English translator's chapter
    summary (the contents list at the head of 1.13: "Objections drawn from writings improperly attributed to Ignatius"), not
    Calvin's text.
- **Fix:**
  - Drop Calvin from this note. If he stays anywhere, put him in book.json `sections` as a fact about the letters' reception (the
    long recension; Lake: "until the time of Archbishop Ussher only the long recension was known"), with his real words.
  - Give a Reformed reading only from a Reformed source that discusses Ignatius on the Supper. If none is opened, say so.
  - Do the same for Anglican, Baptist and Orthodox: a source that discusses Ignatius here, or one sentence saying that no
    church document found discusses this verse, with a pointer to the card at Matthew 26:26 for each church's teaching on the
    presence.
- **Same fix elsewhere:** in book.json `sections` ("The thanksgiving, the overseer and the catholic church"), "Calvin rejected the
  letters as he knew them, in the long form" is acceptable as a reception fact. Keep it out of the 7:1 readings.

### 3. MAJOR: the chapter-8 card's Anglican row does not answer the card's question
- **Where:** chapters.json chapter 8 `traditions`, Anglican row.
- **The card's question:** "Must it be the bishop, or one he appoints?" (brief-apfathers2.md, Where Christians differ 1: "each row
  must cite a source that addresses that very question").
- **What is wrong:** the Article XXIII quotation is accurate (verified, `.scratch/IRo/web/ao39.txt`). But it says only that a
  minister must be "lawfully called, and sent" by "men who have public authority". That is close to the Lutheran row and leaves
  out the Anglican position that bears directly on Ignatius: episcopal ordination. That position is in the Preface to the Ordinal
  of the Book of Common Prayer (1662), which says no one is to be taken for a lawful bishop, priest or deacon without episcopal
  consecration or ordination, and in the rule that only a priest celebrates the Holy Communion.
- **Fix:** open the 1662 Ordinal preface (and Article XXXVI, which approves the Ordinal) and add its words, with a new source key.
  If they cannot be opened, cut the row back to what Article XXIII says and state plainly that it does not name the bishop.
- **Other rows (minor):**
  - The Orthodox row comes from the OCA's *The Orthodox Faith*, a catechetical work the OCA publishes. That is acceptable, and its
    words are verified (`oca-orders.txt`: "assist the bishop", "signed by the bishop", "cannot function legitimately").
  - The other rows are verified.
  - Only the Catholic row mentions emergency baptism. Either drop that clause from it, or give the other churches' rule on
    emergency baptism where their document has one, so the rows are parallel.

### 4. MAJOR: "first known use of 'the catholic church'" stated in the site's own voice
- **Where:** book.json `lead` paragraph 2 ("..., the first known use of the phrase"); chapters.json chapter 8 `sum` paragraph 2
  ("and the first known use of 'the catholic church'").
- **What is wrong:** brief-ism.md (Key terms) allows "the earliest known use of the phrase only if a source opened says so", and
  agent-reviewer-works.md item 6 makes every uncredited "first/earliest" a finding. Elsewhere (8:2 note; chapter 8 deep; the
  reliability verdict; the `church` and `ignatius` contributions) the claim is correctly credited to the Catholic Encyclopedia
  (verified, `cathen_07644a.txt`: "in Smyrnæans 8, we meet for the first time the phrase 'Catholic Church'") and the LCMS page
  (verified). The lead and the chapter 8 summary state it bare.
- **Fix:** credit it in both places, for example: "which the Catholic Encyclopedia and the Missouri Synod call the first use of
  the phrase".
- **Related superlatives**, uncredited and worth softening or crediting:
  - ch. 7 `sum`: "one of the most quoted lines on the Lord's Supper in early Christian writing";
  - note 7:1 views `p`: "One of the most quoted lines on the Supper in early Christianity";
  - ch. 8 `sum`: "the most argued over in Ignatius";
  - ch. 2 `sum`: "the classic early statement of the teaching later called docetism" (also wrong in sense: 2:1 is a statement
    *against* the teaching);
  - topics.json `docetism`: "the classic early answer";
  - `incarnation`: "the fullest early defense of Christ's real humanity";
  - `lords-supper`: "Two of the most quoted early sentences".

### 5. MAJOR: the canon summary claims Anglicans honor Ignatius as a saint, with no source opened
- **Where:** book.json `canon.summary`: "honored as a saint by Catholic, Orthodox, Anglican and Lutheran churches".
- **What is wrong:** the writer's `sources-checked.md` says the Church of England Common Worship calendar was "Not used (could not
  open ...)". No `accepted_by` row sources an Anglican commemoration, and the Anglican row cites only Article VI. The claim is
  probably true, but it rests on memory (STYLE.md rule 2).
- **Fix:** open an Anglican calendar (Common Worship, or the Episcopal Church's *Lesser Feasts and Fasts*) and add it to the
  Anglican row with a source key, or delete "Anglican" from the summary.

### 6. MAJOR: Lake's footnote "Here and elsewhere Bg read τῷ δοκεῖν against G" has no variant entry, though the brief names it
- **Where:** variants.json (now at 4:2).
- **What is wrong:** brief-ism.md (Text and witnesses) lists the 4:1 footnote among those to enter. Both scans put Lake's
  footnote 1 at the first τὸ δοκεῖν of section 2 (OCR 12087 "τὸ δοκεῖνϊ"; note at 13267 and 12122). It is a place where Lake
  prints G's reading **against** the papyrus and the long recension, which matters for the brief's request to report "the B
  readings you followed or not and why". book.json `sections` lists the places where Lake does not follow B (10:1; 11:3) and
  leaves this one out. The point now appears only as a sentence in the 2:1 note.
- **Fix:**
  - Add a variant at 4:2 "only in appearance": Lake's text τὸ δοκεῖν (G) against τῷ δοκεῖν (B g, "here and elsewhere").
  - Explain that the dative means "in seeming" and the accusative "as to seeming", the same sense.
  - Add 4:2 to the "not always" list in book.json `sections`.

### 7. MINOR: the 1:1 note miscounts "truly"
- **Where:** notes.json 1:1 "'Truly'", `p`: "Ignatius repeats 'truly' four times in three sentences".
- **What is wrong:** the Greek has ἀληθῶς five times in 1:1-2:1: ἀληθῶς ὄντα, γεγεννημένον ἀληθῶς, ἀληθῶς ... καθηλωμένον,
  ἀληθῶς ἔπαθεν, ἀληθῶς ἀνέστησεν. The `b` of the same note lists all five.
- **Fix:** "five times in a few lines".

### 8. MINOR: 1:1 "born" hides a real difference; Lightfoot is cited without its point
- **Where:** notes.json 1:1 "'Truly'"; variants.json 1:1.
- **What is wrong:** "'Born' renders gegennēmenon; Lightfoot says that reading, from Theodoret, must 'certainly' be read." The
  reader is not told what the other reading is. Lightfoot's apparatus (verified, smyr.txt) gives γεγενημένον for G ("come into
  being", one ν) against γεγεννημένον ("born", Theodoret; *genitum* LC). So Lake's printed text departs from his own base
  manuscript here without a footnote.
- **Also:** "Lightfoot compares a similar 'truly' in To the Trallians 9" misstates him. He cites Trallians 9 (ὃς ἀληθῶς
  ἐγεννήθη) to explain Zahn's mistake about the Armenian, not as a comparison of his own.
- **Fix:**
  - Add a short variant (G γεγενημένον against Theodoret, L and C γεγεννημένον), citing Lightfoot, with a sentence on why the
    difference later mattered (begotten against come into being).
  - Reword the Trallians clause.

### 9. MINOR: the 2:1 note implies the papyrus reads at 2:1
- **Where:** notes.json 2:1, "'Only in appearance'".
- **What is wrong:** "Lake's footnote at 4:1: the Berlin papyrus and the long recension read the dative ...". B covers only
  3:3-12:1 (Lake's introduction, verified), so it has nothing at 2:1.
- **Fix:** see finding 1 for the change to "4:2", and add "the papyrus begins at 3:3".

### 10. MINOR: 7:1, the article added to "thanksgiving"
- **Where:** plain.txt and notes.json 7:1.
- **What is wrong:** Εὐχαριστίας καὶ προσευχῆς ἀπέχονται has no article; only the second εὐχαριστία has one (τὴν εὐχαριστίαν).
  "They keep away from the thanksgiving and from prayer" reads the first word as the rite. That is the natural reading, and the
  one Lake gives ("abstain from Eucharist and prayer"), but it is an interpretive choice on the most debated verse.
- **Fix:** keep the rendering, and add one sentence to the 7:1 word note: the first εὐχαριστίας has no article, so it could also
  be read as "thanksgiving" in general, though the second clause shows the rite is meant.

### 11. MINOR: 3:2 "Take me, feel me" is odd English, and other site pages quote it differently
- **Where:** plain.txt 3:2; book.json lead and prompts; chapter 3 title; topics `resurrection-body` and `agrapha`;
  `cited_in`.
- **What is wrong:** Λάβετε has no object. "Take me" reads in English like "take me away". The drift audit changed "Take hold of
  me, handle me" to avoid a modern run. Lake (public domain) has "Take, handle me".
- **Fix:**
  - Use "Take hold, feel me and see". This keeps the site's Luke 24:39 verb "feel" and Lake's objectless imperative.
  - Update every quotation listed above.
  - The writer's build.md item on Luke/parts/22-24 (whose note has "Take hold, handle me") then needs the new wording.

### 12. MINOR: 1:2 "So through his resurrection he could raise a flag" turns purpose into result
- **Where:** plain.txt 1:2.
- **What is wrong:** ἵνα ἄρῃ σύσσημον is purpose: "so that through his resurrection he might raise a flag".
- **Fix:** "He did this so that, through his resurrection, he might raise a flag for all ages ...".
- **For the lead:** the writer's choice of "flag" over the brief's "banner" follows the site's Isaiah 5:26 ("He will raise a flag
  for faraway nations", verified). I checked that the Septuagint of Isaiah 5:26 has τοιγαροῦν ἀρεῖ σύσσημον ἐν τοῖς ἔθνεσιν
  (Blue Letter Bible LXX, opened 2026-11-13). The writer's sources-checked.md lists no Septuagint text, so the fixer should add
  that it was checked. The choice is sound.

### 13. MINOR: 3:2 note and variant slightly misreport Lightfoot on the Armenian
- **Where:** notes.json 3:2 "Mingled with him"; variants.json 3:2 `b`.
- **What is wrong:** Lightfoot (verified) says the first clause of the Armenian ("who shared in the eucharist") "is evidently a
  gloss (prob. later and certainly erroneous) of the second; and the rendering generally points to κραθέντες". It is the
  rendering, not the gloss, that "points to κραθέντες".
- **Also:** the variant's "'flesh and blood' may come from the same eucharistic reading" is the writer's own inference, not
  labeled as such.
- **Fix:** quote Lightfoot exactly, and label the inference or drop it.

### 14. MINOR: the chapter 8 reading says the OCA "quotes" Ignatius
- **Where:** chapters.json chapter 8 `readings[0]`.
- **What is wrong:** "Catholic and Orthodox teaching quote and keep these lines (Catechism 1369; the Orthodox Church in America on
  the bishop's antimension)". The Catechism quotes 8:1 (verified, 1369 with note 189 "Ad Smyrn. 8:1"). The OCA "Holy Orders" page
  does not mention Ignatius (verified: 0 hits).
- **Fix:** "The Catechism quotes these lines (1369); Orthodox practice keeps the same rule through the bishop's antimension (OCA,
  'Holy Orders')".

### 15. MINOR: Lake's introduction is overstated in chapter 1 `views.H`
- **Where:** chapters.json chapter 1 `views.H`.
- **What is wrong:** "Lake's introduction names docetism as one of Ignatius's three concerns in every letter". Lake (verified,
  OCR ~8710) says "three other motives, all or some of which can be traced in each letter".
- **Fix:** "one of three motives that Lake says run, all or some of them, through each letter".

### 16. MINOR: the inference about B at 4:2 is presented as Lake's statement
- **Where:** chapters.json chapter 4 `views.H` ("gives Lake his reading 'the perfect human being' without 'who became'");
  variants 4:1 (to become 4:2) `w` "Lake's text (B g and the versions as Lake reports them)" and `why` "Lake leaves out 'who became'
  with the Berlin papyrus".
- **What is wrong:** Lake's footnote (verified) says only "add. γενομένου GL". That B, g, A and C lack the word is an inference
  from his silence.
- **Fix:** "Lake's text (the witnesses other than G and L)", and "Lake's footnote names only G and L for the addition".

### 17. MINOR: Philippians 1:1 misused in the reliability analysis
- **Where:** book.json `canon.reliability.sections[3]`.
- **What is wrong:** "'overseers' and 'elders' are named together in one church (Philippians 1:1; Acts 20:17, 28)". Philippians
  1:1 names "overseers and deacons", not elders. The point is that one church had several overseers (Philippians 1:1), and that
  the elders of Ephesus are called overseers (Acts 20:17, 28).
- **Fix:** reword along those lines.

### 18. MINOR: an unnamed "others" in the docetism core
- **Where:** `docetism.json` section 1.
- **What is wrong:** "Others read the letters as aimed at a different denial". This is a view credited to unnamed readers
  (agent-reviewer-works.md item 6).
- **Fix:** name a scholar from a work opened, or cut the sentence and keep "the text itself names only the confession it
  requires".
- **Checked and accurate:** the rest of the core's Catholic Encyclopedia material (verified, `cathen_05070c.txt`: "Beyond doubt
  St. John ... refers to this heresy; so at least it seemed to Dionysius ... and Tertullian"; Serapion 190-203; Stromata III.13
  and VII.17; "as far as at present known"; Basilides, Cerdo).

### 19. MINOR: settings overlap, and the chapter 4 setting is too short
- **Where:** chapters.json, chapter 1 and chapter 4 settings.
- **What is wrong:**
  - The chapter 1 setting has `"v": "1:0–2:1"`, and chapter 2 has its own setting for 2:1, so the two overlap.
  - The chapter 4 setting covers only 4:1 (see finding 1).
- **Fix:** chapter 1 setting `"1:0–1:2"`; chapter 4 `"4:1–2"`.

### 20. MINOR: `cited_in` kinds
- **Where:** book.json `canon.cited_in`.
- **What is wrong:** Matthew 3:15 at 1:1 is marked "shared tradition", but the notes (with Lightfoot) treat it as Ignatius's
  knowledge of Matthew. 1 John 4:2 at 5:2 is a closer echo too.
- **Fix:** use the site's echo or use kind (whatever value the 1Cl and Pol canon blocks use for an echo) where the note argues
  dependence. Keep "shared tradition" for Luke 24:39 and Jude 1:12.

### 21. MINOR: inconsistent renderings
- **Where:** plain.txt 11:3, 11:2 and 13:1-2.
- **What is wrong:**
  - **τέλειος.** It is "perfect" at 4:2 and 10:2, "in full" at 11:1, "complete" at 11:2 and "mature" at 11:3. The 11:3 note
    explains this as wordplay, but the English hides the play. Consider "You are perfect, so think perfect thoughts", with the
    note citing Philippians 3:15's "mature".
  - **θεοπρεσβευτής.** It is "an envoy of God" in 11:2 and the chapter 11 title, but the note title says "God's envoy" (the
    brief's form). Pick one.
  - **οἶκος.** It is "families" in 13:1 and "household" in 13:2. Use "households" in 13:1.

### 22. MINOR: typo in topics.json
- **Where:** topics.json `ignatius`.
- **What is wrong:** "which the Catholic Encyclopedia calls its first use,," has a doubled comma.
- **Fix:** delete one comma.

### 23. MINOR: a meaningful footnote not entered
- **Where:** variants.json 9:1.
- **What is wrong:** Lake's footnote reads "ἡμᾶς Bg(SA) καί GL, 'it is reasonable to return to soberness, and ... to repent'" (OCR
  13476). With καί, G and L lose "us" and make two coordinated infinitives.
- **Fix:** enter it as a variant, since Lake troubles to give the English sense.
- **Lower priority:** 4:1 συναντᾶν / συναντᾶν αὐτοῖς and προσεύχεσθε / προσεύχεσθαι, and 11:3 παρέχειν B / παρασχεῖν Gg. These
  change little and may be left out.

## Checked and found sound (no action)

- **Translation.** I checked every verse against Lake's Greek and found no omissions or additions.
- **Verified quotations:**
  - Lake's footnotes at 1:2 (tree), 8:2 (agape), 11:1 ("by my own complicity"), 12:1 (Burrhus) and 13:1 (πρς/πνς);
  - Lake's English for Philadelphians 11 (Philo, "the deacon from Cilicia"; "an elect man who is following me from Syria");
  - the Lightfoot quotations at 1:1 (Matthew 3:15 "motive"; Romans 1:3 "doubtless had in his mind"; θεοῦ a "transcriber's
    expedient"), 1:2 (Isaiah; John 12:32), 3:1 (*vidi*), 3:2 (Origen's *Doctrina Petri*; "impossible to say"), 6:1, 6:2, 7:1,
    8:1, 8:2 (catholic; agape), 11:2, 13:1 and 13:2 (Gavia; Alce);
  - Catechism 830, 1256, 1369, 1411; WCF 27.4; LBC 28.2; Augsburg XIV; Article XXIII;
  - the OCA "Holy Eucharist", "Holy Orders" and life pages; the LCMS page;
  - the Catholic Encyclopedia articles on Ignatius, the Docetae and the Real Presence.
- **Sources and links.** All source keys resolve (`oca-holy-orders` is the global key from Heb/parts/01-07).
- **Quotations of other books.** Quotations of the site's Matthew 19:12, Luke 24:39, Isaiah 5:26, Philippians 4:13, Jude 1:12,
  1 John 4:2, Acts 4:27, Martyrdom of Polycarp 17:2 and Ignatius to the Romans 4:3 match the current Plain English Translation.

## For the lead (across the batch)

- Once finding 1 is fixed, ISm has 28 verses. brief-ism.md and brief-apfathers2.md both say "27 verses plus 1:0". Update the
  briefs, or note it in build.md.
- **Calvin in the 7:1 note (finding 2).** If the Ephesians or Romans writer used Calvin, *Institutes* 1.13.29, for a "Reformed"
  reading of Ignatius, the same problem applies there. The quoted phrase "writings improperly attributed to Ignatius" is the
  translator's chapter summary, not Calvin's words. Check IEp and IRo.
- **Anglican rows.** An Anglican commemoration source (Common Worship or *Lesser Feasts and Fasts*) is needed for every book of
  the batch that claims Anglicans honor Ignatius. The Ordinal preface is the right Anglican source for any card on who presides.

## Fixes applied

1. Fixed. plain.txt split at "For if these things" (new 4:2); three notes and the "perfect human being" variant moved to 4:2; the run-together sentence deleted; "(4:1 below" now "(4:2"; 2:1 note rewritten (finding 9); chapter 4 second `sum` paragraph deleted, (4:1)/(4:2) added, setting 4:1–2; book.json outline 4:1–2, Length 28 verses, chains quote (4:2), reliability sentence deleted; progress.md; docetism core section 3 text and refs 4:2; topics.json `incarnation` (4:2); build.md item marked done.
2. Fixed. 7:1 views note rebuilt: Lightfoot's reading, Catholic (Pohle, Catholic Encyclopedia) and Lutheran (LCMS) rows, each from a source that discusses Ignatius here; Calvin and the OCA page dropped; one sentence that no Orthodox, Reformed, Anglican or Baptist document opened discusses the verse, pointing to the card at Matthew 26:26. Calvin kept only in book.json `sections` as a reception fact, with his own words (`.scratch/ISm/web/calvin.txt`) and Lake's "only the long recension was known" (Lake vol. 1 OCR line 8008-8009).
3. Fixed. Anglican row rebuilt from the 1662 Ordinal, opened at churchofengland.org this session (Preface: "No man shall be accounted or taken to be a lawful Bishop, Priest, or Deacon ... or hath had formerly Episcopal Consecration or Ordination"; priest: "authority ... to minister the holy Sacraments"; deacon: "in the absence of the Priest to baptize infants"), plus Article XXIII; new key `bcp-1662-ordinal`. Catholic row's emergency-baptism clause dropped so the rows are parallel.
4. Fixed. book.json lead and chapter 8 `sum` now credit "the first use" to the Catholic Encyclopedia and the Missouri Synod. Superlatives softened: ch. 7 `sum`, 7:1 views `p`, ch. 8 `sum`, ch. 2 `sum` (now "names, and answers"), topics `docetism`, `incarnation`, `lords-supper`, and book.json section "most quoted part".
5. Fixed. Opened the Church of England's Common Worship "Lesser Festivals" and "The Calendar" pages (17 October, "Ignatius, Bishop of Antioch, Martyr, c.107", a Lesser Festival); added to the Anglican `accepted_by` row with new key `cofe-cw-lesser-festivals`; summary kept.
6. Fixed. New variant at 4:2 "only in appearance": τὸ δοκεῖν G (Lake's text) against τῷ δοκεῖν B g, with Lake's footnote (vol. 1 OCR 13267) and the sense; 4:2 added to the "not always" list in book.json `sections`.
7. Fixed. "five times in a few lines".
8. Partly. New variant at 1:1 (γεγεννημένον Theodoret, LC genitum, A natus est against G γεγενημένον), from Lightfoot's apparatus (smyr.txt 595-598), and the note now says what G reads. Declined the claim about Trallians 9: on Lightfoot's page Trallians 9 (with Ephesians 18 and Justin) supports the reading "born" in his note on γεγεννημένον, so "compares" is right; the chapter 1 deep now says it is compared "for the word 'born'". No sentence on later doctrinal use was added, since no source opened says it.
9. Fixed. 2:1 note: the footnote stands at 4:2, says "here and elsewhere", and the papyrus begins at 3:3, so at 2:1 only the long recension applies.
10. Fixed. Sentence on the article-less first εὐχαριστίας added to the 7:1 word note; rendering kept.
11. Fixed. 3:2 "Take hold, feel me and see"; updated in book.json lead, prompts and `cited_in`, chapter 3 title and `sum`, topics `resurrection-body` and `agrapha`; build.md item on Luke 22-24 updated.
12. Fixed. 1:2 "He did this so that, through his resurrection, he might raise a flag ...". The Septuagint check of Isaiah 5:26 is the reviewer's (not reopened here); the note already gives the Greek.
13. Fixed. Note and variant at 3:2 now quote Lightfoot exactly (smyr.txt 1334-1339); the unlabeled inference dropped.
14. Fixed. Chapter 8 reading: "The Catechism quotes these lines (Catechism 1369); Orthodox practice keeps the same rule through the bishop's antimension (OCA, 'Holy Orders')".
15. Fixed. Chapter 1 `views.H` follows Lake's wording ("all or some of which can be traced in each letter").
16. Fixed. Variant now "Lake's text (the witnesses other than G and L)" and "Lake's footnote names only G and L for the addition"; chapter 4 `views.H` reworded.
17. Fixed. Reliability section 4: several overseers in one church (Philippians 1:1); Ephesian elders called overseers (Acts 20:17, 28).
18. Fixed. Unnamed "Others" cut from the docetism core section 1.
19. Fixed. Chapter 1 setting 1:0–1:2; chapter 4 setting 4:1–2.
20. Declined. `cited_in` lists where the Bible uses the work; the build allows quotation, allusion, shared tradition, disputed, and the New Testament cannot quote or allude to a later letter, so "shared tradition" is the right kind for all four. The notes already say Ignatius draws on Matthew and 1 John.
21. Partly. 13:1 "households" (as 13:2); the 11:2 note title now "An envoy of God", as plain.txt. Kept "mature" at 11:3 so the site's Philippians 3:15 (Lake's margin) stays visible; the 11:3 note now says the word is used four times in 11:1-3 and is "perfect" at 4:2 and 10:2.
22. Fixed. Doubled comma deleted.
23. Fixed. New variant at 9:1 (ἡμᾶς B g (S A) against καί G L, with Lake's English, OCR 13476). The lower-priority footnotes (4:1 συναντᾶν, προσεύχεσθε; 11:3 παρέχειν) left out: they change little.
