# Hostile review: 2 Clement (2Cl), flat folder, 1:1-20:5

Reviewer: hostile-reviewer (not the writer), 2026-11-12. Checked against Lake's Greek (`texts/orig/2Cl.json`) verse by verse,
Lake's English (`texts/en/2Cl.json`), Lake's Greek-page footnotes and margin (`texts/src/2Cl.app.json`), Lake's English
footnotes (`.cache/dl/apfathers/2cl-lake.wiki` lines 291-311), Lake's introduction (vol. 1 OCR lines 6720-6815, and 548-566 for
the 1 Clement witnesses), Lightfoot 1890 (`.cache/dl/lightfoot-clem/p1v2.txt`, intro 23937-24995, notes 25700-31060), and on the
web: New Advent (Apostolic Canons 85, Council in Trullo canon 2, Eusebius 3.38.4, Jerome 15, Stromata 3, Fenlon's "Codex
Alexandrinus", Reid's "Canon of the New Testament") and tertullian.org (Abu al-Barakat). Every quoted verse of the site was
compared by script with the current Plain English Translation. `VERBOSE=1 node tools/build.js --check 2Cl`: 0 errors, 0 warnings.

## Verdict

This is a careful, well-sourced book. The translation follows Lake's text faithfully; I found no invented reading, source or
fragment, and every Lake and Lightfoot quotation I checked (about forty) is in the opened text. The variants report Lake's
fifteen footnotes correctly, and the existing traditions cards the notes point to all exist. The problems are of three kinds.
First, several facts in book.json are wrong or out of date: the *Apostolic Canons* put "Two Epistles of Clemens" **inside** the
New Testament list (after Jude, before Acts), not "after the New Testament books", and this misstatement runs through the
summary, facts, sections, the Orthodox row and the works.json draft; Codex Alexandrinus is in the British Library, not the
British Museum (the very Fenlon page the writer opened says so in an editor's note). Second, the Apostolic Fathers lessons are
broken in a handful of places: unsourced superlatives ("more often than any other early Christian writing", "no early Christian
writing quotes more sayings of the Lord", several "earliest"), views credited to unnamed "readers", "others" or "Catholic and
Orthodox readers", an Orthodox row resting on the Catholic Encyclopedia instead of an Orthodox document, and Clement of
Alexandria's saying given from the ANF's Latin, not his Greek. Third, one quotation rule is broken at 3:5, where the preacher's
Greek is that of 1 Clement 15:2 (ἄπεστιν), not Matthew's, and the site's 1 Clement wording is ignored. There are also the Lead
decision on `resident-aliens` (now possible), a dozen small translation omissions or shifts, and some minor mechanics.

Counts: critical 0, major 10, minor 22.

## Findings

### 1. major: the *Apostolic Canons* list Clement's two letters inside the New Testament, not "after" it
- Where: book.json `facts[0]`, `canon.summary`, `sections[6]` ("list 'Two Epistles of Clemens' after the New Testament books
  (canon 85)"), `canon.accepted_by` Eastern Orthodox row ("right after the New Testament books"); also the works.json note
  drafted in `content/proposals/works/build.md` line 18.
- Evidence: New Advent, Apostolic Canons 85 (opened today): the list of "our own books" runs Gospels, Paul's fourteen, Peter's
  two, John's three, James, Jude, then "Two Epistles of Clemens, and the Constitutions...", then "the Acts of us the Apostles".
  Lightfoot (p1v2.txt 24070-24071), whom the book cites: "(can. 85) 'Two Epistles of Clement' are included among the books of the
  New Testament". So the canon counts them in the New Testament; "after the New Testament books" understates the one ancient list
  that put 2 Clement in the canon.
- Fix: say "list 'Two Epistles of Clemens' among the New Testament books, after Jude and before Acts (canon 85)" everywhere, and
  in the works.json draft.

### 2. major: the Eastern Orthodox row rests on a Catholic encyclopedia and misses the Orthodox document that matters
- Where: book.json `canon.accepted_by[1]`.
- Evidence: the row's main statement is Reid (Catholic Encyclopedia, 1908): the Orthodox "have a New Testament identical with
  the Catholic". agent-writer-works.md (Apostolic Fathers lessons): "a church's row ... only from a document of that church ...
  not from a third party describing it". The church's own document is at hand: the Council in Trullo (692), canon 2 (New
  Advent 3814, opened today), confirms the 85 Apostolic Canons as "firm and unshaken" while rejecting the Constitutions of
  Clement that canon 85 also lists. That is exactly the point the row needs (an Orthodox council received a canon list that
  names the two letters of Clement), and it is absent.
- Fix: drop the Reid sentence from this row (or keep it only as Reid's description, not as the church's position), add Trullo
  canon 2 with a new key (e.g. `trullo-canons`, New Advent 3814), and say plainly what can be sourced: the canon list was
  received, its Constitutions rejected; no present-day Orthodox statement on 2 Clement was found.

### 3. major: Codex Alexandrinus is not "now in the British Museum"
- Where: book.json `sections[5]`.
- Evidence: Fenlon's article (New Advent cathen/04080c, the writer's own source) has an editor's note: "The British Museum and
  the British Library split in 1973, and the Codex is now kept in the latter." The brief (brief-apfathers2.md, "The canon
  block") also asked for the British Library's description.
- Fix: "now in the British Library in London (Royal MS 1 D VIII)" only if the shelfmark is checked in an opened source;
  otherwise "now in the British Library".

### 4. major: unsourced superlatives about the sayings of Jesus (and probably false)
- Where: book.json `lead[1]` ("quotes Isaiah in the Greek Bible and the sayings of Jesus more often than any other early
  Christian writing of its size"); `topics.json` agrapha section heading "2 Clement: the most sayings of Jesus outside the
  Gospels" and first sentence ("No early Christian writing outside the New Testament quotes more sayings of the Lord than the
  sermon called 2 Clement").
- Evidence: no source is cited for either, and the lessons forbid "oldest/first/earliest" (and by the same logic "most") not
  credited to an opened source. The agrapha claim cannot stand as written: Justin Martyr's *First Apology* (key
  `justin-apology-1`, already used) quotes sayings of Jesus at length in chapters 15-17 alone, and the Gospel of Thomas is a
  collection of them. The "of its size" hedge in the lead does not make the comparison sourced.
- Fix: replace with what can be counted from the text: "The preacher quotes the Lord about a dozen times (as sections[4] says),
  and several of the sayings are in no Gospel". Retitle the agrapha section ("2 Clement: sayings of Jesus in no Gospel").

### 5. major: "earliest" claims with no source
- Where: notes.json 9:5 ("One of the earliest statements, outside the New Testament, that Christ existed before he was born");
  chapters.json chapter 8 `views.H` ("one of the earliest uses of the word [gospel] for something quoted"); chapter 14
  `deep[0]` ("one of the earliest Christian statements that the church existed before the world").
- Evidence: none of the three is credited; Lightfoot's note at 9:5 (p1v2.txt 27652-27668) says only that pre-existence is "here
  presented in a somewhat unusual form" and cites Hermas, Theophilus, Tertullian and Hippolytus beside it; at 14:1 he calls the
  idea "a development of the Apostolic teaching" (29238) and places it "midway" toward the Valentinians, not "earliest". For
  pre-existence, Ignatius (being written now for the site) and the New Testament itself are earlier.
- Fix: cut "one of the earliest" in all three, or credit a source opened that says so. At 9:5 the `p` could read "A short
  statement that Christ existed as spirit before he became flesh".

### 6. major: views credited to unnamed "others", "readers", "teachers" and "most scholars"
- Where: notes.json 5:1 views ("Others read the verse more broadly"); 14:4 views ("Readers differ on whether such language
  shows a Christology not yet worked out ... or a blurring of the Son and the Holy Spirit"); 17:7 views ("Christian teachers have
  long differed on how far the saved will see or know the fate of the lost"); book.json `lead[1]` ("Lake, like most scholars,
  holds"); book.json `canon.reliability.sections[3]` ("which Catholic and Orthodox readers place beside Tobit 12:9 and Daniel
  4:27, and Protestant readers measure against Ephesians 2:8-9").
- Evidence: agent-writer-works.md lessons: "no views credited to unnamed 'many', 'most' or 'readers' (name who holds the view,
  from a source opened)", and church views only from that church's document. Lake's introduction says the book's aims are
  "generally agreed" and that it is "clear" it is not by 1 Clement's author; it does not say "most scholars".
- Fix: 5:1: name a holder (Lake's own translation, or none: say "the verse can also be read ..." as the note's own reading of
  5:6, without crediting others). 14:4: either name scholars from an opened source or reduce to the two readings as possibilities
  the text allows. 17:7: cut the sentence or source it. Lead: "Lake holds it 'clear' that...". Reliability: replace the
  church-by-church sentence with a pointer to the existing cards at Proverbs 16:6 and Tobit 4, which carry the sourced rows.

### 7. major: Clement of Alexandria's saying given from the ANF's Latin, not his Greek
- Where: notes.json 12:2 canon note; book.json `sections[4]` and `canon.rejected_why[2]`; chapters 12 settings ("the questioner
  is Salome").
- Evidence: the writer's `sources-checked.md` lists "Stromata 3.13 Latin (02103)". The ANF page (New Advent 02103, opened today)
  prints the saying and Clement's reply in Latin ("Quando pudoris indumentum conculcaveritis ..."; "in nobis traditis quatuor
  Evangeliis non habemus hoc dictum"), because the ANF translators left the passage in Latin. Clement wrote in Greek
  (*Stromata* 3.13.92). The note puts English quotation marks round a translation of a translation and compares it with the
  sermon's Greek ("nearly the same saying"). The lessons: "when a father quotes the text ..., open his Greek before claiming
  his readings". The note also says "Clement read it as speaking of the soul"; the Latin he gives says the male stands for anger
  and the female for desire, which is more specific.
- Fix: open the Greek of *Stromata* 3.13.92-93 (Perseus/First1KGreek or Stählin's edition on archive.org) and quote from it, with
  the Greek of the saying beside the sermon's 12:2; otherwise reduce the note to Lake's own words ("the same saying, or very
  nearly so ... the latter states that it is from the Gospel of the Egyptians") and drop the English quotations of Clement.
  State Clement's reading as he gives it (anger and desire).

### 8. major: 3:5 uses Matthew's wording where the preacher's Greek is that of 1 Clement 15:2
- Where: plain.txt 3:5; notes.json 3:5 echo note.
- Evidence: 2Cl 3:5 ... ἡ δὲ καρδία αὐτῶν πόρρω **ἄπεστιν** ἀπ᾽ ἐμοῦ. 1 Clement 15:2 (texts/orig/1Cl.json): Οὗτος ὁ λαὸς τοῖς
  χείλεσίν με τιμᾷ, ἡ δὲ καρδία αὐτῶν πόρρω **ἄπεστιν** ἀπ᾽ ἐμοῦ. Matthew 15:8 and Mark 7:6 have ἀπέχει. The note sees the
  one-word difference but still uses Matthew's "keeps far away", against brief-apfathers.md ("the author's Greek, with an echo
  note, where it differs"). The site already has the preacher's form: 1 Clement 15:2, "but their heart is far away from me".
  The note never mentions 1 Clement 15:2, a striking agreement between the two writings bound together in A and C (and worth a
  line beside the shared "prophetic word" of 11:2-4).
- Fix: 3:5 "This people gives me honor with their lips, but their heart is far away from me." (the site's 1 Clement 15:2, since
  the verb now agrees; word order differs only as Ὁ λαὸς οὗτος / Οὗτος ὁ λαὸς). Rewrite the note: the preacher's form agrees
  with 1 Clement 15:2 against Matthew 15:8 and Mark 7:6 in ἄπεστιν; add 1 Clement 15:2 to `r`. Suggest the back-link in build.md.

### 9. major: the `resident-aliens` contribution (Lead decision 2) is still missing
- Where: topics.json (no `resident-aliens` entry); notes.json 5:1 word note `top: foreigners`; chapter 5 topics.
- Evidence: brief-apfathers2.md, Lead decisions 2: "2 Clement 5 contributes" to the new core. The writer held it back because the
  core did not exist; `content/proposals/works/topics/resident-aliens.json` now exists (its sections: "Foreigners with God", "A
  country in heaven", "Churches that 'live as resident aliens'", "At home everywhere and nowhere"), and build.md line 56 says so.
- Fix: add the pending section from `.scratch/2Cl/topics_src.py` to topics.json, set the 5:1 note's `top` and chapter 5's
  topics to `resident-aliens` (keep `foreigners` in `r`/topics only if it adds something), and re-run `--check`.

### 10. major: the reliability analysis says editors "corrected the manuscripts" at 6:6 and 16:3, where Lake's text did not
- Where: book.json `canon.reliability.sections[1]` ("editors have corrected the manuscripts in a few places (6:6; 9:5; 16:3; see
  the variants)").
- Evidence: variants.json 6:6 and 16:3: Lake keeps the manuscripts (οἰόμεθα; τινες τῶν οὐρανῶν); Lightfoot's correction and
  conjecture are not in the text the translation follows. At 9:5 εἰ is not an editor's correction but the reading of the Syriac
  fragments (Lightfoot: "εἰ] Fragm Syr; εἷς ACS Timoth"). A reader would think the printed text is emended in three places.
- Fix: "Lake's text follows a Syriac witness against the Greek manuscripts in a few places (1:2; 7:3; 9:5), and editors have
  proposed corrections elsewhere (Lightfoot at 6:6, 10:3 and 16:3; see the variants)". Severity is major because the section is
  the book's statement of textual reliability.

### 11. minor: 3:2 drops "him" (αὐτόν)
- plain.txt 3:2 "I will confess in front of my Father": Greek ὁμολογήσω αὐτὸν ἐνώπιον τοῦ πατρός μου. Fix: "I will confess him
  in front of my Father."

### 12. minor: 4:5 drops "you" (οὐκ οἶδα ὑμᾶς, πόθεν ἐστέ)
- plain.txt 4:5 "I do not know where you are from": the Greek has "I do not know you, where you are from". Lake also drops it,
  and the note compares Luke 13:27 (whose text has the same word under dispute), which makes the omission look like assimilation.
  Fix: "I do not know you or where you are from".

### 13. minor: 5:4 turns the command into a statement
- plain.txt 5:4 "Once the lambs are dead, they need not fear the wolves": Μὴ φοβείσθωσαν τὰ ἀρνία τοὺς λύκους μετὰ τὸ ἀποθανεῖν
  αὐτά is a third-person imperative ("Let the lambs not fear the wolves after they are dead"). The note's anchor depends on the
  current wording. Fix: "The lambs should not fear the wolves once they are dead", and update the 5:4 note anchor.

### 14. minor: 1:7 "how near we were to ruin" softens ἀπώλεια
- Greek θεασάμενος ἐν ἡμῖν πολλὴν πλάνην καὶ ἀπώλειαν: "seeing much wandering and ruin in us"; the hearers were already ruined
  (compare 2:7 "already perishing"), not near it. Fix: "how far we had wandered and how ruined we were".

### 15. minor: 13:1 adds "wake up and"
- νήψωμεν ἐπὶ τὸ ἀγαθόν is "let us be sober for what is good". Fix: drop "wake up and" (or say "Let us come to our senses for what
  is good", one verb).

### 16. minor: 19:2 "like foolish people" softens οἱ ἄσοφοι
- The Greek labels "us" as the unwise ("let us not, fools that we are, be annoyed"); "like foolish people" makes it a
  comparison. Also "in our chests" (στήθεσιν) reads oddly at an 8th-grade level. Fix: "And let us not be annoyed and angry,
  foolish as we are, when ..."; "in our hearts" (with a gloss "Greek 'breasts'") or "inside us".

### 17. minor: 14:1 follows the Syriac's sense without a word
- plain.txt 14:1 "we will belong to those of whom the Scripture says": the Greek is ἐσόμεθα ἐκ τῆς γραφῆς τῆς λεγούσης, "we will
  be of the Scripture that says" (Lake: "we shall fall under the scripture"). Lightfoot's apparatus (p1v2.txt 29288) gives the
  Syriac as "ex iis de quibus scriptum est", which is exactly the Plain English Translation's shape. Fix: either "we will come
  under the Scripture that says" or keep the wording with a short `word` note saying that the Greek is compressed and the Syriac
  reads it this way.

### 18. minor: one Greek word, two renderings with no note (τὸ βασίλειον, 6:9 and 17:5)
- 6:9 "God's palace" (gloss "the King's house: God's kingdom"); 17:5 "the kingship of the world". Both are defensible, but the
  reader cannot see that it is one word, and the 6:9 gloss quietly makes "palace" mean "kingdom". Fix: a sentence in the 17:5
  note ("the same word as 'palace' in 6:9") or one rendering ("royal house" / "kingdom") in both.

### 19. minor: 7:1 "contests whose prizes perish" against 7:4 "a contest that perishes"
- τοὺς φθαρτοὺς ἀγῶνας (7:1) and τὸν φθαρτὸν ἀγῶνα (7:4) are the same phrase; the note at 7:5 builds on the one root. Fix: one
  rendering in both ("perishable contests" / "a perishable contest", or the present "contests that perish").

### 20. minor: 13:2 "By your not doing what I want" is stiff English
- Fix: "When you do not do what I want."

### 21. minor: Lake's margin reference missing at 6:9 (Matthew 22:11)
- `texts/src/2Cl.app.json` refs 6:9 "Cf. Mt. 22. 11 ff." (the guest without wedding clothes), listed in brief-2cl.md
  "Quotations". No note, `r` or chapter `echoes` names it. Fix: add Matthew 22:11-13 to the 6:9 baptism note's `r` with one line
  (Lake's margin compares the guest without wedding clothes), and to chapter 6 echoes.

### 22. minor: Barnabas wording misquoted
- notes.json 2:4 canon note and chapters.json chapter 2 `deep[0]`: "many are called, but few chosen" (Epistle of Barnabas 4:14).
  The site's Barnabas 4:14 reads "many called, but few chosen". Fix: quote the site's wording.

### 23. minor: Reid's misprint quoted without [sic]
- notes.json 2:4 and topics.json canon section quote "pseduo-Clementine epistle". The New Advent page does read "pseduo" (checked),
  but the site should not seem to misspell. Fix: "pseudo-Clementine [so spelled in the source: 'pseduo']" or quote from "in which
  we find" onward.

### 24. minor: Lightfoot's point about Severus misreported
- book.json `canon.provenance[1]`: "found the first quotation 'from the Second Epistle to the Corinthians' in Severus, about 520".
  Lightfoot (p1v2.txt 24080-24087): the work is called an epistle "from the first", but the designation *to the Corinthians* first
  appears in Severus; Timotheus had quoted it earlier. Fix: "and found the first quotation that names it the Second Epistle 'to
  the Corinthians' in Severus, about 520".

### 25. minor: "probably not early" is said of the Syriac version, not the manuscript
- book.json `sections[5]`: "one manuscript, written in 1169 ... which Lake thinks 'probably not early'". Lake (vol. 1 lines
  557-561): "the date of this version is unknown, but it is probably not early, and may perhaps best be placed in the eighth
  century". Fix: "the translation itself, Lake thinks, is 'probably not early', perhaps of the eighth century".

### 26. minor: Justin's reading of Psalm 72 relayed from Lightfoot without saying so
- notes.json 14:1 "before the sun and moon": "Justin Martyr read the Greek of Christ, 'that he was before the sun'". Justin
  (*Dialogue* 64) was not opened. Fix: "Lightfoot notes that Justin Martyr read ..." or open the *Dialogue* and cite it.

### 27. minor: Lake's margin "Rom. 12, 10" at 17:3 reported without comment
- notes.json 17:3 "Of one mind": "Lake's margin points to Romans 12:10 and Philippians 2:3", while `r` lists Romans 12:16 and 15:5.
  Romans 12:10 is about brotherly love; the phrase τὸ αὐτὸ φρονοῦντες is Romans 12:16. The margin is probably an OCR or print
  slip of the kind brief-apfathers2.md warns about. Fix: open the scan; say "Lake's margin (printed 'Rom. 12, 10'; the phrase is
  in Romans 12:16)" or give the reference as the scan shows it.

### 28. minor: two Lightfoot readings worth a variant at 8:6
- Lightfoot's apparatus (p1v2.txt 27363-27389): the Syriac omits "eternal" ("The omission in the Syriac is probably correct"),
  and C and S read ἀπολάβητε "that you may receive" for A's ἀπολάβωμεν. The 8:6 note discusses the change of person but not that
  two of the three witnesses remove it. Lake has no footnote, so this is optional, but the change of person is exactly what the
  note explains. Fix: a variant entry at 8:6 (Lake's text with A; C and S, as Lightfoot reports), or one sentence in the note.

### 29. minor: an internal source key mentioned in reader-facing text
- book.json `sections[3]`: "The site's older source key for 2 Clement gave 'about AD 100-150'; this page follows Lake." Readers do
  not see source keys; this is a message for the lead (already in build.md). Fix: delete the sentence.

### 30. minor: padding in the Anglican row
- book.json `canon.accepted_by[3]`: "The Anglican bishop J. B. Lightfoot made the standard edition." This is not a statement of the
  church's position, and "standard edition" is unsourced. Fix: delete, or say "Lightfoot's edition (1890) is cited on this page".

### 31. minor: chapter settings overlap and one "why" misdates the sermon's start
- chapters.json chapter 1 has a setting for "1:1–2:7", and chapter 2 has settings for 2:1–3 and 2:4–7, so 2:1-7 is set twice.
  Fix: chapter 1's range 1:1–8. Chapter 20 setting `why`: "'the Father of truth', with whom the sermon began (3:1)": the sermon
  began with Christ (1:1); the Father of truth first appears at 3:1. Fix: "whom the sermon named at 3:1".

### 32. minor: glosses
- 5:1 "resident aliens": "living on earth for a time, its home in heaven" (dangling "its"). Fix: "people living somewhere not their
  home; here, Christians on earth whose home is with God". 4:5 "in my embrace": "like the beloved disciple at the supper" adds an
  interpretation to a saying whose setting is unknown. Fix: "held close against my chest".

## Notes for the lead (across books)
- **Apostolic Canons 85**: the same "after the New Testament books" wording is in the works.json draft (build.md line 18); check
  1 Clement's book.json, which also cites canon 85, for the same slip.
- **Trullo canon 2** is the Orthodox document for any row that leans on the Apostolic Canons (1 Clement too); a global key would
  serve both books.
- **1 Clement 15:2 and 2 Clement 3:5** share ἄπεστιν against the Gospels: a back-link from 1 Clement 15:2 to 2 Clement 3:5.
- **Reference forms**: all "2 Clement c:v" forms in the book parse; dotted "2 Clement 16.4" in Tobit (already in build.md) still
  needs fixing at alignment.
- **Terms**: ἐλεημοσύνη "almsgiving" (proposed by this writer, proposals/works/terms.json line 103) beside "alms" in Tobit and Acts
  needs the lead's yes.

## Fixes applied
Fixer (review-fixer, 2026-11-13). Sources opened this session: New Advent 3820 (Apostolic Canons 85), 3814 (Council in Trullo, canon 2, AD 692), 04080c (Fenlon), 02103 (Stromata 3.13, ANF Latin); Lightfoot p1v2.txt (12:2 note with Clement's Greek, 8:6 apparatus, 24060-24087, 29305); Lake vol. 1 OCR (548-561, 6745-6800, 8310-8350). `VERBOSE=1 --check 2Cl`: 0 errors, 0 warnings.
1. Accepted. "among the New Testament books, after Jude and before Acts (canon 85)" in facts[0], canon.summary, sections[6], the Orthodox row, topics.json canon section, and the works.json draft in build.md.
2. Accepted. Orthodox row: Reid sentence dropped; Trullo canon 2 quoted from the council's text (85 canons "firm and unshaken", Constitutions rejected for "adulterous matter"; the letters not named); cites `trullo-canons`. That key already exists (2Co/parts/06-09, worded for canon 72; 1Cl also uses it), so it is reused, not redefined; build.md asks the lead to reword it for the whole set of canons.
3. Accepted. "now in the British Library" (Fenlon's editor's note) in sections[5] and chapter 12 deep; no shelfmark (not checked).
4. Accepted. lead[1] now says the sermon quotes the Lord about a dozen times; agrapha section retitled "2 Clement: sayings of Jesus in no Gospel" and its opening superlative cut.
5. Accepted. "earliest" cut at 9:5 (preview rewritten), chapter 8 views.H and chapter 14 deep.
6. Accepted. 5:1 views ("The verse can also be read"); 14:4 reduced to the two readings the words allow; 17:7 sentence cut; lead "Lake holds it 'clear that...'"; reliability section 4 church-by-church sentence replaced by "stands close to Tobit 12:9 and Daniel 4:27" plus the existing pointer to the cards. Same rule applied beyond the finding: chapter 9 deep "Some readers see", chapter 16 deep "Some take them ... others", sections[7] "which its admirers admit", reliability section 3 "modern scholars" (now Eusebius, Jerome, Lake).
7. Accepted. 12:2 note, chapter 12 deep, agrapha section, sections[4] and rejected_why[2] now quote Clement's Greek as Lightfoot prints it (translated afresh: "In the four Gospels handed down to us we do not have the saying, but in the one according to the Egyptians"); Clement's reading given as anger and desire, credited to the ANF's Latin; Lightfoot's doubt that Clement read the gospel himself added; chapter 12 setting cites Lightfoot for Salome.
8. Accepted. 3:5 now the site's 1 Clement 15:2 wording ("is far away from me"); note rewritten around ἄπεστιν with 1 Clement 15:2 in `r`; chapter 3 views.N and echoes updated; back-link suggested in build.md.
9. Accepted. resident-aliens contribution added to 2Cl/topics.json (core untouched); 5:1 word note `top` and chapter 5 topics now `resident-aliens` (replacing `foreigners`, which the core links); book.json topics adds it; topics.md marked done.
10. Accepted as proposed (1:2, 7:3, 9:5 follow the Syriac; Lightfoot's proposals at 6:6, 10:3, 16:3).
11. Accepted. 3:2 "I will confess him in front of my Father"; note anchor and chapter 3 summary updated.
12. Accepted. 4:5 "I do not know you or where you are from"; the note now points out that "I do not know you" is in neither Gospel verse.
13. Accepted. 5:4 "The lambs should not fear the wolves once they are dead"; note anchor, preview and body (third-person command) updated.
14. Accepted. 1:7 "how far we had wandered, how ruined we were".
15. Accepted. 13:1 "Let us keep a clear head for what is good" (the site's rendering of νήφω in 1 Peter 4:7; 5:8 and 1 Thessalonians 5:8).
16. Accepted. 19:2 "foolish as we are"; "in our chests" became "inside us".
17. Accepted. 14:1 "we will come under the Scripture that says".
18. Partly accepted. Both renderings kept (each fits its context); the 17:5 note and the 6:9 gloss now say it is one word, and the gloss no longer turns "palace" into "kingdom"; terms entry notes it.
19. Accepted. 7:1 "contests that perish" (matches 7:4); the games topic paraphrase updated.
20. Accepted. 13:2 "When you do not do what I want"; note anchor updated.
21. Accepted. 6:9 baptism note gets Lake's margin (Matthew 22:11-13) in text and `r`; chapter 6 echoes.
22. Accepted. "many called, but few chosen" in the 2:4 note and chapter 2 deep.
23. Accepted. Reid quoted from "in which we find" / "we find" onward in the 2:4 note and chapter 2 deep.
24. Accepted. Provenance: first quotation that names it the Second Epistle "to the Corinthians" in Severus; called an epistle "from the first".
25. Accepted. sections[5]: the translation itself, Lake thinks, is "probably not early", perhaps of the eighth century (Lake checked).
26. Accepted. 14:1 note: Justin (Dialogue 64, as Lightfoot cites him); chapter 14 deep "which, he noted, Justin read of Christ".
27. Accepted, with a correction: Lake's printed margin (scan line 8317) reads "Rom. 12, 16; cf. Phil. 2, 2", so the digital margin is a slip; the note now gives the printed references; slip listed in build.md for lake-fixes.json.
28. Accepted. New variant at 8:6 (A, Lake's text; C and S "that you may receive"; S omits "eternal", Lightfoot "probably correct"), and a sentence in the 8:6 note.
29. Accepted. Sentence deleted.
30. Accepted. Lightfoot sentence and key removed from the Anglican row.
31. Accepted. Chapter 1 setting now 1:1–8; chapter 20 "whom the sermon named at 3:1".
32. Accepted. Both glosses as proposed.
Notes for the lead: handled in build.md (trullo-canons wording; 1Cl canon 85 check; 1 Clement 15:2 back-link; 17:3 margin slip). Tobit's "2 Clement 16.4" left to the lead. ἐλεημοσύνη "almsgiving" kept (approved).
