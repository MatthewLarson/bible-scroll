# The Apostolic Fathers, third batch: the last four letters of Ignatius

Books: `IMg` Ignatius to the Magnesians, `ITr` Ignatius to the Trallians, `IPh` Ignatius to the Philadelphians, `IPo` Ignatius
to Polycarp. All are tier `early` (catalog group "Early Christian writings"), proposed in `content/proposals/works/works.json` as
`ignatius-magnesians`, `ignatius-trallians`, `ignatius-philadelphians` and `ignatius-polycarp`, each with `book` set. With
Ignatius to the Ephesians, to the Romans and to the Smyrnaeans (published 2026-11-13) they complete the seven letters Eusebius
names. The old entry `letters-of-ignatius` stays for the collection as a whole; its aka "To the Magnesians", "To the
Trallians", "To the Philadelphians" and "Epistle of Ignatius to the Philadelphians" are proposed to move to the new entries
(the lead does the move in `content/works.json` at the merge: `content/proposals/works/build.md`). Like the two earlier
batches these are early Christian writings that no church counts as Scripture today: the full "not widely accepted"
treatment of `.claude/skills/canon-tiers/SKILL.md`, and the site never calls them Scripture in its own voice. Lane `works`:
shared-file changes go in `content/proposals/works/`.

**Book ids.** The pattern of the published letters (`IEp`, `IRo`, `ISm`: "I" for Ignatius and two letters of the
addressee). `IPo` is Ignatius's letter to Polycarp; `Pol` stays Polycarp's own letter to the Philippians and `MPo` the
Martyrdom of Polycarp. None of the four collides with a book id or STEPBible code on the site (checked against
`texts/catalog.json` and `content/books/`), and none differs from another only by letter case.

Every writer reads, in this order: `tools/agent-writer.md` (in full), `tools/agent-writer-works.md` (in full, every "Lessons
from" paragraph), `bible/STYLE.md`, `tools/brief-apfathers.md` (its sections "The literal working line", "Scripture quoted
inside these books", "Near-canonical standing" and "The canon block for tier `early`" apply as written, and its Terms list
stands), `tools/brief-apfathers2.md` (its Terms, its Lead decisions 1-11, and its rules on reference forms, quotations and
cards all apply here), this file, then the book's own brief (`brief-img.md`, `brief-itr.md`, `brief-iph.md`, `brief-ipo.md`).
Then read the three published letters as your model: `content/books/IEp/`, `IRo/`, `ISm/` (plain.txt, notes.json,
chapters.json, book.json, and each `review.md`: the hostile reviewers' findings there are the mistakes not to repeat). Where
this file and brief-apfathers2.md differ, this file wins for these four books; where a book brief and this file disagree,
this file wins. Report any clash.

## Who writes what (two writers, at the same time)
| Writer | Writes | book.json and sources.json |
|---|---|---|
| Smyrna writer | `content/books/IMg/` flat (1:0 + 25 verses), then `content/books/ITr/` flat (1:0 + 29 verses) | the same writer, both books |
| Troas writer | `content/books/IPh/` flat (1:0 + 23 verses), then `content/books/IPo/` flat (1:0 + 21 verses) | the same writer, both books |

98 verses and four greetings in all, every book under 200 verses, so none has parts. The pairs follow Ignatius's journey as
Lake gives it from Eusebius (introduction, vol. 1 OCR lines 8690-8698): Magnesians and Trallians were written from Smyrna (with
Ephesians and Romans), Philadelphians and Polycarp from Troas (with Smyrnaeans). Each pair is about the size of the Romans and
Smyrnaeans pair one writer did in the last batch (58 lines; here 56 and 46). Between them the pairs share the questions that run
through all the letters: both have the bishop; Magnesians (8-11) and Philadelphians (6-9) both warn against "Judaism", so the
two writers keep to one set of terms for it (below); Trallians (9-11) is the docetism letter of this batch. The **Smyrna writer
enters the batch's new terms** (below) in `content/proposals/works/terms.json` at the start (re-read the file first) and writes
the main contributions to `sabbath` and `judaizers`; the **Troas writer** writes the main contributions to `polycarp` and
`philadelphia`. Each book gets its own hostile reviewer afterwards, never the writer (`tools/agent-reviewer-works.md`).

## Texts (generated today, read-only; all local)
- `texts/orig/<id>.json` `grc`: Kirsopp Lake's Greek (Loeb, vol. 1, 1912), short (middle) recension, digital text from
  First1KGreek (CC BY-SA 4.0), the same file as the three published letters, `tlg1443/tlg001`: Magnesians is its epistle 2,
  Trallians 3, Philadelphians 5, Polycarp 7 (each opened for this plan; the titles Lake prints are in `texts/src/<id>.extra.json`:
  ΜΑΓΝΗΣΙΕΥΣΙΝ ΙΓΝΑΤΙΟΣ, ΤΡΑΛΛΙΑΝΟΙΣ ΙΓΝΑΤΙΟΣ, ΦΙΛΑΔΕΛΦΕΥΣΙΝ ΙΓΝΑΤΙΟΣ, ΠΡΟΣ ΠΟΛΥΚΑΡΠΟΝ ΙΓΝΑΤΙΟΣ). The witnesses are as for
  Ephesians (G, the Medicean manuscript at Florence; g, the long recension; L, Grosseteste's Latin; A, the Armenian; S, the
  Syriac); Lake's introduction (lines 8756-8949) adds that Cureton's Syriac abridgment of 1845 has Ephesians, Romans and
  Polycarp, so S includes the abridgment for To Polycarp. The Sahidic (C) and the Berlin papyrus (B) are Smyrnaeans only.
- `fixed`: slips of the digital text corrected against the Internet Archive scans of Lake's printed page (45 in all, 43 of them read in both scans; from
  `tools/lake-fixes.json`, entered for this plan after a word-by-word collation of the four letters plus a scan for impossible
  accents), and two structural fixes in `tools/works-texts.py`: the digital file runs **Trallians 11:2** into 11:1 and **Polycarp
  2:3** into 2:2, each leaving Lake's section number inside the text; both scans begin the sections where the `split` now puts
  them (Trallians 11:2 at εἰ γὰρ ἦσαν, Polycarp 2:3 at ὁ καιρὸς ἀπαιτεῖ). Polycarp 5:1 began with Lake's stray section number
  "1,", now removed; Polycarp 8:1 has Lake's brackets back ("(οἱ μὲν ... ἔργῳ)", from both scans and his English). Read each
  file's `fixed` block before you write.
- **Known and NOT fixed** (the OCR cannot settle them; read by the sense and say nothing unless it matters): Magnesians 1:2
  ᾅδω (the rough breathing is wrong, ᾄδω "I sing"; whether Lake prints a subscript is not visible), as Ephesians 4:1-2 in the
  last batch; Trallians 3:3 ὤν and the second ὤν of 7:2 (the participle "being", which before another word should carry a grave,
  ὢν; the scans read ὧν, their usual misreading); Trallians 9:2 νεκρῶν. ἐγείραντος (one scan has a comma there, the other a full
  stop). Magnesians 8:2 ἐνπνεόμενοι is as Lake prints it (both scans). The word collation was followed by a punctuation check against
  both scans, which found more (a full stop for a comma and the like); it only catches marks the OCR reads alike in both
  scans, so others may remain. A slip you confirm on Lake's page goes in your report for the
  lead, never in variants.json and never in lake-fixes.json yourself.
- `texts/src/<id>.app.json`: Lake's footnotes (Greek in Beta Code; the English has OCR slips, "shich" = which, "sord" = word,
  "#3" = q) and his margin Scripture references. Six margin references were misread in the digital file and are corrected
  from both scans (Magnesians 10:2 1 Corinthians 5:7 and 10:3 Isaiah 66:18; Trallians 11:1 Matthew 15:13, from one scan;
  Philadelphians 7:1 John 3:8; Polycarp 1:3 Matthew 8:17 and 6:1 2 Timothy 2:4), with Lake's "Bunsen" at Trallians 12:3. **Still doubtful:**
  Trallians 5:1 "Cor, 8, 1. 2" (both the digital file and one scan read 8; the verse is about feeding babes, so 1 Corinthians 3:1-2
  may be meant: open the page, and cite only what Lake prints or what you check yourself); Polycarp 5:1 "Eph.3 15. 20" is garbled
  (one scan reads "Eph.5 25. 30": Ephesians 5:25, the second number unclear); Magnesians 7:1 "Joh. 5, 19. so; 8, 28" ("so" is
  probably 30); Magnesians 13:1 "Ps. 1, 3". Open every verse before you cite it.
- `texts/en/<id>.json`, English for sense only: Roberts and Donaldson (Ante-Nicene Christian Library vol. 1), their "shorter"
  column, by chapter, from Wikisource (pinned revisions in `tools/works-fetch.sh`). **Lake's own English is on his facing pages
  in the scans** (below): read it there, and his English footnotes, which are not in app.json.
- **Lake's printed volume, local OCR** (`c:\bible-scroll\.cache\dl\lake-ia\`): `apostolicfathers01lake.txt` (second OCR of the same
  printing: `TheApostolicFathersV1.txt`). Opened for this plan, line numbers in the first file: Ignatius introduction 8683-8950;
  Magnesians 10252-11080; Trallians 11085-11688; Philadelphians 12414-12975; Polycarp 13806-14398. In `TheApostolicFathersV1.txt`:
  Magnesians 9303-10055, Trallians 10056-10633, Philadelphians 11287-11855, Polycarp 12611-13102. Read the introduction before you
  write anything about witnesses, date or author; cite it as Lake's introduction (key `lake-apostolic-fathers`). Lake's English
  footnotes for each letter are listed in its book brief.
- Lightfoot's Ignatius (key `lightfoot-ignatius-1889`) is not local: cite it only from a scan you open (archive.org), naming the
  volume and page, as the last batch did. Other sources you open on the web: New Advent and CCEL (the Ante-Nicene and Nicene
  Fathers), Perseus or First1KGreek for Greek. Every claim about what a father, council, list or church says is checked in the
  text itself this session (brief-apfathers2.md, Lead decisions 6-8).

## Reference forms (tested with tools/refs.js today)
`tools/refs.js` now knows the four catalog names and these aliases: "Magnesians", "Trallians", "Philadelphians" (no other book
has those names), and "To Polycarp", "Ignatius, Polycarp", "Ignatius, To Polycarp", "Ignatius To Polycarp". Tested:
- **These parse to the new books:** "Ignatius to the Magnesians 9:1", "Ignatius, Magnesians 9:1", "To the Magnesians 9:1",
  "Magnesians 10:3"; the same three forms for Trallians and Philadelphians; "Ignatius to Polycarp 2:3", "Ignatius, To Polycarp
  4:3", "Ignatius, Polycarp 4:3", "To Polycarp 8:1", "Ignatius To Polycarp 7" (a chapter); the greetings ("Ignatius to the
  Philadelphians 1:0"); a list continues in the same book ("Ignatius to the Magnesians 9:1; 10:3").
- **Untouched:** "Philippians 4:3" is Paul's; "Polycarp, Philippians 7:1" and "Polycarp to the Philippians 7:1" are Pol;
  "Martyrdom of Polycarp 9:3" is MPo; "Polycarp 4:3" is no reference. `--check` of every book that names these letters, and the
  full draft build, are 0 errors and 0 warnings after the change.
- **These do NOT link, so never write them:** "Ign. Magn. 9:1", any dotted form ("Magnesians 9.1", "To Polycarp 4.3").
- Write "Ignatius to the Magnesians 9:1" in running text; inside a book a bare "c:v" is that book. Name the works as the catalog
  does: Ignatius to the Magnesians / to the Trallians / to the Philadelphians, Ignatius to Polycarp.

## The literal working line
As brief-apfathers.md, in `.scratch/IMg/`, `.scratch/ITr/`, `.scratch/IPh/`, `.scratch/IPo/`: a script of your own dumps each
verse (Greek NFC-normalized, the English check text, Lake's footnotes with Beta Code converted, his margin references); by hand
a literal line in Greek word order with every word accounted for; then the Plain English Translation; then the drift audit in
your head only (Holmes 2007, Ehrman's Loeb 2003, Richardson 1953, Brannan; Lake 1912, Lightfoot 1889 and Roberts-Donaldson are
public domain and may be quoted by name, but the Plain English Translation is fresh English); then a script diff of every verse
against `grc`: every departure from Lake's text, even to follow a reading in his footnote, gets a variant entry. Keep
Ignatius's voice as the three published letters keep it: break his long greetings into sentences, but keep every title and
every clause; keep his piled-up lists (Polycarp 6:1, six verbs in a row, each with συν- "together", and the armor of 6:2).

## Terms (one rendering in all seven letters)
Everything in brief-apfathers2.md's Terms stands, and the entries the last batch merged into `content/terms.json` ("Apostolic
Fathers" and "Apostolic Fathers 2", about lines 713-817 of the file's list) are the law: "Ignatius, also called Theophorus"
with its gloss; "overseer" (gloss at first use in each letter: "the word behind 'bishop'"), "council of elders", "deacon";
"the thanksgiving" with its gloss; "only in appearance" for τὸ δοκεῖν; "truly" for ἀληθῶς every time; "suffering" for πάθος;
"reach God"; "disciple", "imitator"; "the ruler of this age" (Magnesians 1:2; Trallians 4:2; Philadelphians 6:2); "union /
unity / division" (ἕνωσις, ἑνότης, μερισμός) and "split" for σχίσμα; "fellow slave" (Magnesians 2:1; Philadelphians 4:1); "May I
have the benefit of" for ὀναίμην (Magnesians 2:1; 12:1; Polycarp 1:1; 6:2); "a life in exchange" for ἀντίψυχον (Polycarp 2:3;
6:1); "altar" for θυσιαστήριον (Magnesians 7:2; Trallians 7:2, where Lake has "sanctuary"; Philadelphians 4:1), as Ephesians 5:2
"within the altar"; "heresy" for αἵρεσις (Trallians 6:1, as Ephesians 6:2); "high priest / priest" (Philadelphians 9:1, the
Apostolic Fathers entry); "forbearance" for ἐπιείκεια (Philadelphians 1:1-2; lead decision 10); "silence, be silent" for σιγή,
σιγάω (Magnesians 8:2; Philadelphians 1:1); "Farewell" for ἔρρωσθε. Read the published letters' plain.txt for the wording
around them ("Jesus Christ our God"; "Christianity", Romans 3:3; "elect an envoy of God", Smyrnaeans 11:2).

**The Smyrna writer enters these new entries** in `content/proposals/works/terms.json` as "Apostolic Fathers 3" entries at the
start of work (re-read the file first); the Troas writer adds only words not listed, re-reading the file just before writing,
and reports each one.
- **Ἰουδαϊσμός / ἰουδαΐζω / Χριστιανισμός** (Magnesians 8:1; 10:1, 3; Philadelphians 6:1) "Judaism" (as the site's Galatians
  1:13-14) / "live in the Jewish way" (as Galatians 2:14) / "Christianity" (as Ignatius to the Romans 3:3). Magnesians 10:3 sets
  the two words side by side (Lake: "Christianity did not base its faith on Judaism, but Judaism on Christianity"); say what Ignatius means
  by each from his own words, and what the sources opened say of whom he opposes (Lake's introduction: "it is disputed whether he means that this was an
  evil found in docetic circles, or that it was a danger threatening the church from other directions", lines 8745-8749). Never
  an anti-Jewish gloss in the site's own voice; the topic `anti-judaism` and its rules apply.
- **σαββατίζω / κατὰ κυριακὴν ζῶντες** (Magnesians 9:1) "keeping the Sabbath" / "living by the Lord's day" (κυριακή as the
  Didache entry and the site's Revelation 1:10, "the Lord's day"). Note at the verse: the Greek has the adjective κυριακή alone,
  "the Lord's (day)", with no word for "day" (as the Greek shows); Lake translates "the Lord's Day". Anything about other
  manuscripts or readings here only from a source opened.
- **θεοδρόμος** (Philadelphians 2:2 τοὺς θεοδρόμους; Polycarp 7:2 θεοδρόμος) "God's runner(s)", one rendering in both letters,
  with a note (Lake: "the runners in God's race" and "God's courier").
- **ἀθλητής / θέμα** (Polycarp 1:3; 2:3; 3:1) "athlete" / "prize", with Lake's footnotes (vol. 1 OCR line 13922: "No other
  translation is possible: 'athlete' was, both then and later, a favourite name for Christians who strove to excel in virtue,
  especially in ascetic practices"; line 14036: θέμα "a 'money-prize'"). Topic `roman-games`.
- **The Latin army words** (Polycarp 6:2: δεσέρτωρ, δεπόσιτα, ἄκκεπτα) "deserter", "deposits", "back pay", with Lake's footnotes
  (line 14207: "The use of the Latin words is remarkable"; lines 14254-14258 on the soldiers' deposits) and a gloss that the Greek
  borrows Latin words here.
- **ἀρχεῖα** (Philadelphians 8:2, four times) "the archives" (gloss: "the original records; Lake 'the charters'"); γέγραπται "It
  is written"; πρόκειται "That is the question" (Lake "that is exactly the question"). The verse has a famous punctuation
  question (Lake's footnote, lines 12809-12814): see brief-iph.md.
- **χειροτονέω** (Philadelphians 10:1; Polycarp 7:2) "elect", as the published Smyrnaeans 11:2, with a note at first use giving
  the site's Acts 14:23 ("chose") and 2 Corinthians 8:19 ("voted") and saying what the word means in Ignatius only from a source
  opened. πρεσβεύω θεοῦ πρεσβείαν (Philadelphians 10:1) as Smyrnaeans 11:2 "an envoy of God".
- **ἀποδιϋλισμός** (Philadelphians 3:1) "filtering", as the site's Matthew 23:24 "filtering out" (the same verb family), with
  Lake's footnote (line 12535).
- **ἐπίσκοπος of God** (Magnesians 3:1 "the overseer of all"; Polycarp 1:0 ἐπισκόπῳ ... μᾶλλον ἐπισκοπημένῳ "overseer ... or
  rather, one overseen by God"): keep "overseer" so the wordplay shows.
- **νομίσματα δύο / χαρακτήρ** (Magnesians 5:2) "two coinages" (Lake) or "two coins", one choice, and "stamp", with Lake's footnote
  pointing to Matthew 22:19 (line 10492; the site's Matthew 22:19 has "coin").
Rare compounds in these letters (χριστομαθία Philadelphians 8:2; θεοπρεπέστατος, θεομακαριστότατος Polycarp 7:2): a gloss each;
anything about a word's history (first use, coinage) only from a lexicon opened.

## Scripture and other writings quoted inside these books
brief-apfathers.md's rules apply word for word: the site's wording where the Greek agrees; Ignatius's own Greek, with an `echo`
note, where it differs. Ignatius quotes with a formula only rarely here: Magnesians 12:1 "as it is written, 'The righteous man is
his own accuser'" (Lake's margin: Proverbs 18:17; the site's Proverbs is from the Hebrew, so check whether its wording matches
the Greek, and say which you follow and why); Trallians 8:2, "Woe to the one through whom my name is blasphemed" (Lake's margin:
Isaiah 52:5, quoted by Romans 2:24); Polycarp 2:2 (Matthew 10:16, "sharp like snakes ... pure like doves" on the site, here in
the singular). The rest are echoes in Lake's margin: give the site's wording in the note, never bend Ignatius to it.
Philadelphians 8:2 ("It is written") is about Scripture, not a quotation: brief-iph.md.

## Dating
Lake's introduction (lines 8686-8706), as brief-apfathers2.md gives it: the journey and the places of writing from Eusebius,
Church History 3.36; Eusebius's Chronicle on the tenth year of Trajan (AD 108); the "general tendency" to date the martyrdom
under Trajan (98-117). None of these four letters is dated in its text (Romans 10:3 is the only date in the seven). The
middle-recension debate and arguments that the letters are later: as the published letters' book.json (IEp's authenticity
paragraph, from Zañartu 2009 and Zuiddam 2010) and only from works opened.

## The canon block, and what to verify
As the three published letters (read their book.json `canon` blocks and reuse what applies, re-checking each claim you
carry over): no "Is it Scripture?" card, since every church agrees; `accepted_by` rows only where a source says it (the feast
days of Ignatius and the published letters' keys `usccb-calendar-2026-ignatius`, `oca-ignatius`, `lcms-southern-ignatius`,
`catholic-encyclopedia-ignatius`); `reliability` (labeled as an AI analysis): the recensions; for To Polycarp also Cureton's
abridgment and Polycarp to the Philippians 13:2 (the site's own book: quote its Plain English Translation, "we have sent you the
letters of Ignatius, the ones he sent us, and the others we had here with us"). Eusebius 3.36 on these letters from the Greek
(key `eusebius-greek-lake-3`, defined in IRo/sources.json: reuse it).

## Topics
Search `content/topics/` and `content/proposals/*/topics/` (titles and `aka`) again before creating anything; on 2026-11-13 the
folder held 750 topics. One topic per subject; existing topics get contributions in the book's topics.json; changes to an
existing core go in `content/proposals/works/topics.md` (re-read first). No new core is planned. Existing cores to know:
`ignatius`, `polycarp`, `docetism`, `incarnation`, `elders`, `deacons`, `apostolic-succession`, `lords-supper`, `sabbath` (aka
"Lord's day", "Sunday", "eighth day"), `judaizers` (titled "The Agitators in Galatia", aka "Judaizers": see Lead question 1),
`anti-judaism`, `circumcision`, `law-of-moses`, `descent-into-hades` (Magnesians 9:2), `scripture-and-tradition`
(Philadelphians 8:2), `celibacy` and `marriage` (Polycarp 5), `slavery` (Polycarp 4:3), `widows` (Polycarp 4:1), `priesthood`
(Philadelphians 9:1), `false-teachers`, `church`, `smyrna`, `philadelphia` (the city of Revelation 3:7-13), `antioch`, `ephesus`,
`pontius-pilate` (Magnesians 11:1; Trallians 9:1), `virgin-birth` and `mary` (Trallians 9:1), `resurrection`, `roman-games`,
`armor-of-god` (Polycarp 6:2), `prophecy` (Philadelphians 5:2; 7:1-2), `word-of-god` (Magnesians 8:2), `apostolic-fathers` and
`canon` (short sections, in topics.md). Each book brief names its main ones.

## Cross-references in both directions
- On 2026-11-13 the site already cites these letters 52 times in 21 files (`grep -rE
  "(Magnesians|Trallians|Philadelphians|To Polycarp|Ignatius to Polycarp) [0-9]" content`): chapter references ("Trallians 9", "To Polycarp 8",
  "Philadelphians 11") and verses ("Magnesians 6:1", "Philadelphians 6:1", "Trallians 3:1", "Ignatius to Polycarp 5:2"), many
  with Roberts-Donaldson wording. They now link. Each book.json owner, at the end, lists by script in
  `content/proposals/works/build.md` every reference to its books outside its own folder: file, reference, whether it parses,
  any quoted wording and whether it matches the new Plain English Translation, and any claim the Greek does not support.
- Back-links worth adding (the lead writes them at alignment; writers list them as "suggested back-links", only where the
  existing note does not already make the link): Revelation 1:10 to Magnesians 9:1; Galatians 1:13-14 and 2:14 to Magnesians
  10:3; 1 Corinthians 5:7 to Magnesians 10:2; Matthew 22:19 to Magnesians 5:2; Revelation 3:7-13 to Philadelphians 1:0 and 6:1;
  Matthew 15:13 to Trallians 11:1 and Philadelphians 3:1; Matthew 23:24 to Philadelphians 3:1; John 3:8 to Philadelphians 7:1;
  Matthew 10:16 to Polycarp 2:2; 2 Timothy 2:3-4 and Ephesians 6:13-17 to Polycarp 6:2; Polycarp to the Philippians 13:1-2 to
  Polycarp 7-8; Martyrdom of Polycarp 17:2 (Alce) to Polycarp 8:3.

## Where Christians differ
Cards only where churches really disagree, and never a second card on a question the site already asks. Already on the site
(read them; point to them): Sunday and the Sabbath (Revelation 1:10, the card on "the Lord's day"; Exodus 16-24; Colossians 2;
Romans 14); Scripture and tradition (Matthew 15; 2 Thessalonians 2:15; 1 Timothy 3:15; John 16:13); bishops and elders
(1 Timothy 3, Acts 20, Philippians 1, Titus 1), who chooses and ordains (Acts 14), succession (Acts 1, 2 Timothy 2), who may lead
the Supper (Ignatius to the Smyrnaeans 8); Christ's presence in the Supper (Exodus 1-15, John 6); priests in the church (Exodus
25-40, Hebrews 7, 1 Peter 2); the church (Ephesians book card "What is the church"); deacons (Acts 6; 1 Timothy 3:11); the single
life (1 Corinthians 7; Matthew 19:12 on vows); may ministers marry (Matthew 8; 1 Corinthians 9); marriage a sacrament (Ephesians
5:32); slavery (Ephesians 6; Philemon). **One new card is possible, in one place only:** To Polycarp 5:2 (Troas writer): "Must
Christians marry with the consent of the church's overseer?" ("it is right for men and women who marry to be united with the
consent of the bishop", Lake), top `marriage`; it asks who must approve or witness a marriage, which none of the existing cards
asks. Write it only if every row cites that church's own document (a catechism, canon law, a confession or service book, opened)
that answers that very question; otherwise a `views` note. Everything else (Magnesians 6:1 and 9:1; Trallians 3:1; Philadelphians
4:1 and 8:2; Polycarp 4:3 and 5:2 on continence) gets `views` notes, each church's reading from that church's own document or a
named theologian of it who discusses Ignatius, pointing to the existing card.

## Atlas
Bible Atlas has no data for these books. As last time (brief-apfathers2.md, Lead decision 3) the atlas-harvester makes a
places-only `content/atlas/<id>.json` for each after writing; writers do not harvest. Places the texts name: Magnesians: Magnesia
on the Maeander (1:0), Syria (14:1), Smyrna and the Ephesians (15:1); Trallians: Tralles in Asia (1:0), Smyrna (1:1; 12:1), Syria
(13:1), the Smyrnaeans and Ephesians (13:1); Philadelphians: Philadelphia in Asia (1:0), Antioch in Syria (10:1), Cilicia and Syria
(11:1), Troas, the Ephesians and Smyrnaeans (11:2); Polycarp: Smyrna (1:0), Antioch in Syria (7:1), Syria (7:2; 8:2), Troas and
Neapolis (8:1; Lake's footnote, line 14366: "The modern Cavalla, on the coast of Macedonia").

## Lead questions (open)
1. **`judaizers`** is titled "The Agitators in Galatia" (aka "Judaizers"). Magnesians 8-10 and Philadelphians 6 warn against
   "Judaism" by name. A section in that core on Ignatius (proposed in topics.md),
   or a retitled, wider core? Until decided, the Smyrna writer contributes to `judaizers`, `sabbath` and `anti-judaism` and
   proposes the section in topics.md; the Troas writer contributes.
2. **The `ignatius` core** names the three published letters; it now needs the other four. The Smyrna writer proposes one
   section for all four letters in topics.md (re-read first); the Troas writer adds to it there.
3. **`letters-of-ignatius`**: with all seven letters on the site, should the collective entry stay (for "the Letters of
   Ignatius") with its note updated, or point to the seven books? The lead decides at the merge.
4. **Source keys**: `ignatius-magnesians` is defined twice (Act/parts/01-04 and 11-14), `ignatius-romans-magnesians` in
   1Co/parts/15-16, `ignatius-polycarp` is global; the global `ignatius` names only Ephesians and Philadelphians. Writers reuse the
   global keys and do not edit other books' sources.json; the lead may promote or merge at alignment.
