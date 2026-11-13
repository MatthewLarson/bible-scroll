# The Apostolic Fathers, second batch: decisions shared by all five books

Books: `2Cl` 2 Clement, `Dgn` Epistle to Diognetus, `IEp` Ignatius to the Ephesians, `IRo` Ignatius to the Romans, `ISm`
Ignatius to the Smyrnaeans. All are tier `early` (catalog group "Early Christian writings"), works.json `2-clement` (now with
`book`), and, proposed in `content/proposals/works/works.json`, `epistle-to-diognetus`, `ignatius-ephesians`,
`ignatius-romans`, `ignatius-smyrnaeans`, each with `book` set. The old entry `letters-of-ignatius` stays for mentions of the
collection as a whole ("the Letters of Ignatius", "To the Magnesians"); its aka "To the Smyrnaeans", "To the Ephesians#" and
"To the Romans#" moved to the three new entries. Like the first batch (`tools/brief-apfathers.md`), these are early Christian
writings that no church counts as Scripture today: the full "not widely accepted" treatment of
`.claude/skills/canon-tiers/SKILL.md`, and the site never calls them Scripture in its own voice. Lane `works`: shared-file
changes go in `content/proposals/works/`.

Every writer reads, in this order: `tools/agent-writer.md` (in full), `tools/agent-writer-works.md` (in full, every "Lessons
from" paragraph), `bible/STYLE.md`, `tools/brief-apfathers.md` (the first batch: its sections "The literal working line",
"Scripture quoted inside these books", "The canon block for tier `early`" and "Near-canonical standing" apply here as
written, and its Terms list stands), this file, then the book's own brief (`brief-2cl.md`, `brief-dgn.md`, `brief-iep.md`,
`brief-iro.md`, `brief-ism.md`). Where this file and brief-apfathers.md differ, this file wins for these five books; where a
book brief and this file disagree, this file wins. Report any clash.

## Who writes what (four writers, all at the same time)
| Writer | Writes | book.json and sources.json |
|---|---|---|
| 2 Clement writer | `content/books/2Cl/` flat (no parts/), 1:1-20:5 (118 verses; no greeting) | the same writer |
| Diognetus writer | `content/books/Dgn/` flat, 1:1-12:9 (100 verses; no greeting) | the same writer |
| Ephesians writer | `content/books/IEp/` flat, 1:0-21:2 (1:0 + 47 verses) | the same writer |
| Romans and Smyrnaeans writer | `content/books/IRo/` flat (1:0 + 28), then `content/books/ISm/` flat (1:0 + 28) | the same writer, both books |

Every book is under 200 verses, so none has parts. Romans and Smyrnaeans share a writer, as Polycarp and the Martyrdom did:
the same man, the same journey (Romans from Smyrna, Smyrnaeans from Troas), the same witnesses, and between them the two
questions the churches argue most over Ignatius (the Roman church in Romans 1:0; the bishop, the thanksgiving and "the
catholic church" in Smyrnaeans 7-8). Ephesians, the longest letter, has its own writer, who also enters the batch's terms
(below) and owns the `ignatius` topic contributions for the batch. 2 Clement and Diognetus are unlike each other and unlike
Ignatius (a sermon; an apology with a separate ending), so each has its own writer. Each book gets its own hostile reviewer
afterwards, never the writer (`tools/agent-reviewer-works.md`).

## Texts (generated today, read-only; all local)
- `texts/orig/<id>.json` `grc`: Kirsopp Lake's Greek, digital text from First1KGreek (CC BY-SA 4.0): 2 Clement
  `tlg1271/tlg002`, the seven letters of Ignatius `tlg1443/tlg001` (one file; Ephesians is letter 1, Romans 4, Smyrnaeans 6),
  both Lake vol. 1 (1912); the Epistle to Diognetus `tlg0646/tlg004` (filed under Pseudo-Justin), Lake vol. 2 (the 1917
  printing). Each was opened for this plan and its header names Lake's Loeb as the source. `tlg1443/tlg002` is the long
  recension (Funk-Diekamp) and is not used. `fixed`: slips of the digital text corrected against Lake's page (68 in all, from
  `tools/lake-fixes.json`), and one structural fix in `tools/works-texts.py` (2 Clement 4:1: Lake's margin reference "Mt. 7, 21"
  stood in the text; it is now in `refs`). Read the `about` block of each file.
- The digital text loses rough breathings systematically (ὦν for ὧν, οὖ for οὗ, ἦς for ἧς, ἦ for ἢ or ἡ); the planning
  collation fixed those where both scans and the grammar agree, but it is not exhaustive. Known and NOT fixed, because the
  OCR cannot settle them (it reads ὢν as ὧν and drops iota subscripts under η): Ephesians 4:1 ᾅδεται and 4:2 ᾅδητε, Romans 2:2
  ᾅσητε, Diognetus 11:6 ᾅδεται (the rough breathing is wrong; whether Lake prints an iota subscript is not visible); Romans 9:2
  ὣν (the sense needs the participle ὢν); 2 Clement 17:5 ᾔδειμεν, Ephesians 11:2 συνῄνεσαν, Romans 1:1 ᾐτούμην (the scans show
  no subscript); 2 Clement 7:3 αὐτὸν (the scans read αὑτὸν); Diognetus 9:2 and 9:5 ὢ (the scan reads ὦ). Ephesians 8:2 οὐδε has no accent in both scans: Lake's own misprint, left as
  printed (say so in a note only if it matters). Read the verb or
  particle by the sense; a slip you confirm on Lake's page goes in your report for the lead (`tools/lake-fixes.json`), never in
  variants.json and never in lake-fixes.json yourself.
- **Diognetus's gaps.** The one manuscript has two gaps Lake marks with a row of dots; the digital text now has one " …"
  where each falls, and `texts/orig/Dgn.json` `lacuna` gives Lake's footnote for each (on his English page): after 7:6 ("There
  is here a lacuna in the MS. Probably the next sentence may be completed by prefixing 'Do you not see that' before 'they are
  thrown'", vol. 2 OCR line 17206) and after 10:1 ("Here again there is apparently a lacuna in the text", line 17501). Lake marks
  no gap at 10:8; if you write that the manuscript has a gap there (a scribe's note is often cited), open a source that says
  so first. Chapters 11-12 Lake numbers straight on, though his introduction says they "have clearly no connection with the
  preceding ones" (below): keep his numbers, and mark the break in the chapter pages and in book.json.
- `texts/src/<id>.app.json`: Lake's footnotes (Greek in Beta Code: `h(mw=n` = ἡμῶν; the English has OCR slips, "sill" =
  will, "shich" = which, "#3" = q) and his margin Scripture references, with OCR slips in the numbers too (2 Clement 2:3 "Mt.
  9, 18" for Matthew 9:13, 7:6 "Is. 86, 24" for 66:24, 9:11 "Mt. 12, 60" for 12:50, Ephesians 5:3 "Prov. 3, 84" for 3:34), and
  in places Lake cites the Greek Psalms by the Septuagint numbers. Open every verse before you cite it. Diognetus has no footnotes
  on its Greek pages (`notes` is empty): Lake's few notes are on his English pages (OCR lines 16600, 17100, 17104, 17206, 17501,
  17685). `texts/src/<id>.extra.json` holds the title Lake prints above each letter (ΠΡΟΣ ΕΦΕΣΙΟΥΣ ΙΓΝΑΤΙΟΣ, ΡΩΜΑΙΟΙΣ ΙΓΝΑΤΙΟΣ,
  ΣΜΥΡΝΑΙΟΙΣ ΙΓΝΑΤΙΟΣ, ΕΠΙΣΤΟΛΗ ΠΡΟΣ ΔΙΟΓΝΗΤΟΝ); 2 Clement 20:5 ends with the subscription Lake prints, Κλήμεντος πρὸς
  Κορινθίους ἐπιστολὴ β.
- `texts/en/<id>.json`, English for sense only: Lake's own for 2 Clement (by verse; the transcription lacked the number of
  1:8, put back from both scans); Roberts and Donaldson (Ante-Nicene Christian Library vol. 1) for Diognetus and the three
  letters (by chapter; for Ignatius only their "shorter" column, which is the short recension). Lake's own English of
  Diognetus and Ignatius is on his facing pages in the scans: read it there. Lake's English footnotes to 2 Clement (11 of them,
  among them the source of 4:5 and 12:2 and the "Readers" of 19:1) are at the end of `c:\bible-scroll\.cache\dl\apfathers\2cl-lake.wiki`.
- **Lake's printed volumes, local OCR** (`c:\bible-scroll\.cache\dl\lake-ia\`): vol. 1 `apostolicfathers01lake.txt` (second
  OCR of the same printing: `TheApostolicFathersV1.txt`), vol. 2 `apostolicfathers02lakeuoft.txt`. Opened for this plan, line
  numbers in the first file: 2 Clement introduction 6720-6815, text 6820-8680; Ignatius introduction (all seven letters)
  8683-8950, Ephesians 8952-10250, Romans 11688-12400, Smyrnaeans 12952-13800; in vol. 2, the Diognetus introduction
  16335-16418, text 16420-17900. In `TheApostolicFathersV1.txt`: 2 Clement 5988-7830, Ignatius introduction 7832-8130,
  Ephesians 8060-9300, Romans 10560-11280, Smyrnaeans 11780-12610. Read your book's introduction there before you write anything
  about witnesses, date or author, and cite it as Lake's introduction (keys `lake-apostolic-fathers`, `lake-apostolic-fathers-2`).
- Lightfoot's Greek text and notes on 2 Clement ("An Ancient Homily") are in the local OCR of his <i>S. Clement of Rome</i>,
  vol. 2 (1890), `c:\bible-scroll\.cache\dl\lightfoot-clem\p1v2.txt` from line 23937 (key `lightfoot-clement-1890`). Lightfoot's
  Ignatius volumes are not local: cite them only from a scan you open (archive.org) and name the volume and page.
- Sources you open on the web: New Advent and CCEL (the Ante-Nicene and Nicene Fathers), Perseus or First1KGreek for Greek.
  Every claim about what a father, council, list or church says is checked in the text itself this session.

## Reference forms (tested with tools/refs.js today)
tools/refs.js now knows the five names and these aliases: "Ignatius, Ephesians", "Ignatius, To the Ephesians", "Ignatius,
Romans", "Ignatius, To the Romans", "Smyrnaeans", "Diognetus". Tested:
- **These parse to the new books:** "2 Clement 12:2"; "Epistle to Diognetus 5:5", "Letter to Diognetus 5:5", "To Diognetus
  5:5", "Diognetus 5:5"; "Ignatius to the Ephesians 20:2", "Ignatius, Ephesians 20:2", "Ignatius, To the Ephesians 20:2";
  "Ignatius to the Romans 4:1", "Ignatius, Romans 4:1", "Ignatius, To the Romans 4:1"; "Ignatius to the Smyrnaeans 8:2",
  "Ignatius, Smyrnaeans 8:2", "To the Smyrnaeans 8:2", "Smyrnaeans 8:2"; and the greetings "Ignatius to the Romans 1:0" (and
  the same for Ephesians and Smyrnaeans). A list continues in the same book: "Ignatius to the Ephesians 20:2; 7:2".
- **Paul's letters are untouched:** "Ephesians 1:1", "Ephesians 4:26", "Romans 1:1", "Romans 4:1" parse to Paul. `--check Rom`
  and `--check Eph` are 0/0 after the change, and the full build is unchanged (88 books, 0 errors, 0 warnings).
- **These do NOT reach the new books, so never write them:** "To the Romans 4:1" and "Ignatius's letter to the Ephesians 1:1"
  (both parse as PAUL's letter: the worst case); "To the Ephesians 20:2" (no reference: Paul's Ephesians has 6 chapters);
  "2 Clem. 1:1", "Second Clement 1:1", "II Clement 1:1", "Diogn. 5:5", "Ignatius, Eph. 20:2", "Ign. Eph. 20:2", "Smyrn. 8:2",
  "Ignatius 8:2", "Letters of Ignatius 8:2", and any dotted form ("Epistle to Diognetus 5.5", "Ignatius, To the Romans 3.2").
- Write "Ignatius to the Romans 4:1" in running text; inside a book a bare "c:v" is that book ("compare 20:2 and Ephesians
  4:3" in Ignatius to the Ephesians is IEp 20:2 and Paul's Ephesians 4:3). Name the works as the catalog does: 2 Clement,
  Epistle to Diognetus, Ignatius to the Ephesians / to the Romans / to the Smyrnaeans; the other four letters by their
  works.json names (Letters of Ignatius: "To the Magnesians", "To the Trallians", "To the Philadelphians"; Ignatius to Polycarp
  is "To Polycarp" there, with no book).

## The literal working line
As brief-apfathers.md, in `.scratch/2Cl/`, `.scratch/Dgn/`, `.scratch/IEp/`, `.scratch/IRo/`, `.scratch/ISm/`: a script of
your own dumps each verse (Greek NFC-normalized, the English check text, Lake's footnotes with Beta Code converted, his margin
references); by hand a literal line in Greek word order with every word accounted for; then the Plain English Translation;
then the drift audit in your head only (Holmes 2007, Ehrman's Loeb 2003, Richardson 1953, Brannan; for Diognetus also Meecham
1949 if you know it; Lake 1912-13, Lightfoot 1889-91 and Roberts-Donaldson are public domain and may be quoted by name, but the
Plain English Translation is fresh English); then a script diff of every verse against `grc`: every departure from Lake's
text, even to follow a reading in his footnote, gets a variant entry. Keep the author's voice: Ignatius's compressed,
breathless Greek (break his long greetings into sentences, but keep every title and every clause); 2 Clement's "brothers" and
"brothers and sisters" (19:1; 20:2: ἀδελφοὶ καὶ ἀδελφαί, so the reader sees the change); Diognetus's polished rhetoric
(the antitheses of 5-6 keep their balance).

## Terms (one rendering in all five books)
Existing site renderings stand (content/terms.json; proposals/works/terms.json was empty on 2026-11-12), above all the first
batch's "Apostolic Fathers" entries: ἐπίσκοπος "overseer" (gloss at first use in each book: "the word behind 'bishop'"),
πρεσβύτερος "elder" and πρεσβυτέριον "council of elders", διάκονος "deacon", εὐχαριστία "the thanksgiving", καθολικὴ ἐκκλησία
"catholic church" (lowercase), μάρτυς family as there, παροικέω / πάροικος "lives as a resident alien" / "resident alien"
and ξένος "stranger" (the Ephesians 2:19 entry), πολιτεύομαι "live as citizens" (the 1 Clement entry), θυσιαστήριον "altar",
μυστήριον "mystery", οἰκονομία "plan", ὁ λόγος (John 1) "the Word", σάρξ "flesh", ἀφθαρσία "incorruption", ἀθανασία
"immortality", ἀντίψυχον "a life in exchange" (the 4 Maccabees entry), περίψημα (the Barnabas entry: the sense, with a note
on the picture "scrapings" and the site's 1 Corinthians 4:13), ἰατρός "doctor" (the Gospels and Sirach), μετάνοια "repentance",
σφραγίς "seal", ἐλεημοσύνη "almsgiving", ἐγκράτεια "self-control", Χριστιανός "Christian", ἀγάπη "love", κύριος "Lord", δοῦλος
"slave" (σύνδουλος "fellow slave"). **The Ephesians writer enters the new entries below** in
`content/proposals/works/terms.json` as "Apostolic Fathers 2" entries at the start of work (re-read the file first); the
others add only words not listed here, re-reading the file just before writing, and report each one.
- **Ἰγνάτιος ὁ καὶ Θεοφόρος** (the opening of every letter) "Ignatius, also called Theophorus", gloss at first use in each
  letter: "Greek theophoros, 'God-bearer'". Lake's footnote (vol. 1 OCR lines 9025-9027) gives "The God-bearer" and the story
  from the third-century Acts of Ignatius ("He who has Christ in his heart"); use it, named as Lake's, and anything more only
  from a source opened. The letters' farewell ἔρρωσθε "Farewell".
- **ὁ θεός of Jesus.** Ignatius calls Jesus God often: "Jesus Christ our God" (Ephesians 1:0; 18:2; Romans 1:0 twice; 3:3;
  Smyrnaeans 1:1 "Jesus Christ, the God who made you so wise"; "the blood of God", Ephesians 1:1; "the suffering of my God",
  Romans 6:3). Translate exactly, never softened, with a note at first use in each letter (and topics `trinity`, `son-of-god`).
- **εὐχαριστία "the thanksgiving"** in Ignatius too (Ephesians 13:1; Smyrnaeans 7:1 twice; 8:1), with the first batch's gloss at
  first use in each letter. Why, since in Ignatius the word plainly names the church's meal of bread and cup: "Eucharist" is
  the name some churches use and others do not (Lord's Supper, Communion), and one rendering across the site lets the reader
  see the one Greek word in the Didache and in Ignatius. The note at Smyrnaeans 7:1 says that here the thanksgiving is the
  rite, and that Lake translates "Eucharist". The verb εὐχαριστέω "give thanks".
- **ἀγάπη in Smyrnaeans 8:2** (οὔτε βαπτίζειν οὔτε ἀγάπην ποιεῖν) "hold a love feast", as the site's Jude 1:12 ("your love
  feasts"), with Lake's footnote (OCR line 13526: "the name was given to some kind of religious meal. The context here suggests
  that it is a synonym for the Eucharist, but the point is doubted by some scholars"). Elsewhere ἀγάπη "love".
- **προκάθημαι in Romans 1:0**: "presides" both times: ἥτις καὶ προκάθηται ἐν τόπῳ χωρίου Ῥωμαίων "which presides in the
  region of the Romans", and προκαθημένη τῆς ἀγάπης "presiding over the love", keeping the Greek's genitive (Lake: "pre-eminent
  in love"). The note gives the readings (first in love; presiding over the "love", the whole church or its charity) with who
  holds each, from sources opened, and points to the card planned there (Where Christians differ).
- **δοκέω, τὸ δοκεῖν** (Smyrnaeans 2:1; 4:1; Lake's intro: "docetism (δοκεῖν)") "only in appearance" ("he suffered only in
  appearance"), gloss at first use: "Greek to dokein, 'to seem', behind the name docetism"; topic `docetism` (new). ἀληθῶς
  "truly", kept every time Ignatius repeats it (Smyrnaeans 1:1-2; 2:1; Lake's English OCR lines 13075-13091).
- **πάθος of Christ** "suffering" ("his suffering": Ephesians 20:1; Smyrnaeans 1:2; 5:3; 7:2; Romans 6:3), gloss at first use:
  "the word behind 'the Passion'"; kept apart from the 4 Maccabees entry, which is "the passions" of the soul. πάσχω "suffer".
- σαρκοφόρος (Smyrnaeans 5:2) "flesh-bearing", νεκροφόρος "a carrier of a corpse"; ἐν σαρκί "in the flesh"; σάρξ and πνεῦμα
  "flesh and spirit" (Ephesians 7:2; 8:2; 10:3; Smyrnaeans 1:1; 3:3; 12:2; 13:2).
- ἐπιτυγχάνω θεοῦ / Ἰησοῦ Χριστοῦ (Romans 1:1-2; 2:1; 4:1; 5:3; 8:3; 9:2; Smyrnaeans 11:1; Ephesians 12:2) "reach God" / "reach
  Jesus Christ", one verb everywhere, with a note at first use in each letter (Lake: "attain to God").
- μαθητής / μαθητεύω "disciple / be a disciple" (Romans 4:2; 5:3 "now I am beginning to be a disciple"; Ephesians 3:1; 10:1).
  μιμητής "imitator" (as the site's 1 Corinthians 11:1 and Ephesians 5:1: Ephesians 1:1; 10:3; Romans 6:3 "imitator of the
  suffering of my God").
- ὁ ἄρχων τοῦ αἰῶνος τούτου (Ephesians 17:1; 19:1; Romans 7:1) "the ruler of this age", as the site's 1 Corinthians 2:6, 8
  ("the rulers of this age"); topic `satan`, `spiritual-powers`.
- ἕνωσις / ἑνότης "union / unity"; ὁμόνοια "harmony" (first batch); μερισμός "division" (Smyrnaeans 7:2), kept apart from σχίσμα "split" (first batch).
- φάρμακον ἀθανασίας, ἀντίδοτος τοῦ μὴ ἀποθανεῖν (Ephesians 20:2) "the medicine of immortality, the antidote against dying";
  ἄρτον κλῶντες "breaking one bread" (the first batch's "break bread"). ἄρτος τοῦ θεοῦ (Ephesians 5:2; Romans 7:3) "God's
  bread", as the site's John 6:33 ("God's bread").
- σῖτος θεοῦ (Romans 4:1) "God's wheat"; θηρία / θηριομαχέω "wild beasts / fight wild beasts" (as 1 Corinthians 15:32,
  "fought with wild beasts"); λεοπάρδοι (Romans 5:1) "leopards", kept, with Ignatius's own gloss "that is, a squad of soldiers".
- ἔκτρωμα (Romans 9:2) "one born at the wrong time", as the site's 1 Corinthians 15:8, with a note on the word.
- 2 Clement: ἀγών / ἀγωνίζομαι (7:1-5) "contest / compete" (the games: topic `roman-games`); ἡ ἐκκλησία ἡ πρώτη ἡ πνευματική
  (14:1) "the first church, the spiritual one"; ἀναγινώσκω ἔντευξιν (19:1) "I am reading you an appeal" (Lake: "exhortation";
  his note on "Readers"); ἡ σφραγίς (7:6; 8:6) "the seal", with a note on baptism (topic `baptism`).
- Diognetus: θεοσέβεια (1:1; 3:1; 4:5-6; 6:4) "reverence for God", kept apart from εὐσέβεια "godliness"; δεισιδαιμονία (1:1;
  4:1) "superstition", with a note on the site's Acts 17:22 ("very devoted to the gods") and Acts 25:19 ("their own religion");
  ἐν οὐρανῷ πολιτεύονται (5:9) "they live as citizens of heaven", with a note on the site's Philippians 3:20 ("a commonwealth in
  heaven"); παῖς of the Son (8:9, 11; 9:1) as the first batch's παῖς entry ("servant", with a note on "child"), unless the
  writer finds the pairing with υἱός in 9:1-2 makes "Child" the plain sense: then say why in a note and report it; ἀνταλλαγή
  (9:5) "exchange"; ὁ Λόγος (7:2; 11-12) "the Word".

## Scripture and other writings quoted inside these books
brief-apfathers.md's rules apply word for word: the site's wording where the Greek agrees; the author's Greek, with an `echo`
note, where it differs; sayings of Jesus in no Gospel to the topic `agrapha`; quotations whose source is unknown said to be so.
For this batch:
- **2 Clement quotes many sayings of Jesus**, several in no Gospel, and introduces one Gospel saying as "another Scripture"
  (2:4, ἑτέρα δὲ γραφὴ λέγει, beside Matthew 9:13). Lake's English notes: the source of 4:5 and 5:2-4 "is unknown: it is
  often supposed to have been the Gospel of the Egyptians, but there is no clear evidence of this"; 12:2 is "very nearly"
  the saying Clement of Alexandria quotes from Cassianus (Stromata 3.13) and says is from the Gospel of the Egyptians (works.json
  `gospel-of-the-egyptians`), with a pointer to Grenfell and Hunt's papyrus: open Stromata 3.13 (and the papyrus, only from a
  source that publishes it) before you add anything. 11:2-4 quotes the same unknown "prophetic word" as 1 Clement 23:3-4 (Lake's
  margin; his note says 2 Clement does not take it from 1 Clement): quote the site's 1 Clement 23:3-4 where the Greek agrees.
- **Ignatius rarely quotes by formula; Lake's margin prints echoes** (Proverbs 3:34 in Ephesians 5:3, 1 Corinthians in Ephesians 15-18
  and Romans 4-9, John 6-7 in Romans 7, Romans 1:3 in Ephesians 18:2 and 20:2, Romans 7:3 and Smyrnaeans 1:1). Use the site's
  wording only where his Greek gives the same words; otherwise translate him and say what he echoes. Smyrnaeans 3:2 has a
  saying of the risen Jesus close to Luke 24:39 but in other words ("I am not a bodiless demon"): an `echo` note gives the site's
  Luke 24:39 and what Lake's margin says; who later named its source (Jerome and others) only from a text opened.
- **Diognetus** echoes Paul and John (Lake's margin: 2 Corinthians 6:9-10 and Romans 8:12-13 behind 5:7-16; John 17:11-16 behind
  6:3; John 3:16-17 and 1 John 4:9, 19 behind 7:4 and 10:1-3; Romans 3:21-26 and Titus 3:3-5 behind 9:1-2; Genesis 2-3 behind
  12). It quotes 1 Corinthians 8:1 in 12:5 ("knowledge puffs up").

## Dating (only what an opened source says)
What Lake's introductions say (opened for this plan):
- **2 Clement** (vol. 1 lines 6724-6815): found in A and C and the Syriac, not in the Latin or Coptic versions of 1 Clement,
  "never quoted by Clement of Alexandria"; Western writers' "second epistle" of Clement is the letter of Clement to James;
  "a letter only in form", "really more a sermon than a letter", read aloud in worship (19:1); "it cannot have been written by
  the author of I. Clement"; three views of where it came from (Harnack: the letter of Soter of Rome, about 166-174, to Corinth,
  Eusebius 4.23.11; Lightfoot: a Corinthian homily, the imagery of the Isthmian games; others: Alexandrian, the Gospel of the
  Egyptians); date: "between 120 and 170 A.D. is the period chosen by the general opinion of the best critics, and within these
  limits ±150 A.D. is most usually accepted", except for those who follow Harnack.
- **Ignatius** (vol. 1 lines 8686-8706): Eusebius, Church History 3.36, tells the story (the third bishop of Antioch; Lake's note:
  by tradition Peter was the first and Euodius the second, Eusebius 3.22); the letters to Ephesus, Magnesia, Tralles and Rome
  were written from Smyrna, to Philadelphia, Smyrna and Polycarp from Troas; Eusebius's Chronicle puts the martyrdom in Rome
  "in the tenth year of Trajan, i.e. 108 A.D."; "there is a general tendency to think that Ignatius was really a martyr in
  Rome in the time of Trajan (98-117 A.D.)". The site's `ignatius` topic quotes Jerome for "the eleventh year of Trajan".
- **Diognetus** (vol. 2 lines 16341-16380): "an anonymous writing of uncertain date"; its place among the Apostolic Fathers
  "rests on custom rather than right, for it is probably later than any of the other writings in this group"; nearer the
  Apologists (Aristides, Justin, Tatian; "the suggestion has been made that it may have been written by Aristides"); possibly
  "an academic treatise or ... the exercise of some young theologian"; the tradition of the lost manuscript attributing it to
  Justin Martyr is ruled out; "Harnack thinks that it more probably belongs to the third than to the second century, but early
  tradition does not mention the epistle and there is nothing in the internal evidence to justify any certainty"; chapters 11-12
  are "probably an Epiphany homily, though possibly, as Otto thought, an Easter homily", and "Bonwetsch has shown very strong
  reasons for thinking that Hippolytus was the author" (1902).
Other datings (the middle-recension debate of the 1800s, recent arguments that the letters are later forgeries, a second-century
date for Diognetus): each only with a scholar's work opened this session, named, with the argument. Existing site text already
states dates: the global source keys `ignatius` and `ignatius-*` ("about AD 110"), `clement-2` (in Tob/sources.json, "about
AD 100-150", earlier than Lake's 120-170), the `ignatius` topic (Jerome's eleventh year of Trajan). Book.json owners list any
that their book contradicts in `content/proposals/works/build.md`; do not edit them.

## The canon block, and what to verify
As brief-apfathers.md ("The canon block for tier `early`"; no "Is it Scripture?" card, since every church agrees). Each
book.json owner opens the source for every claim before using it:
- Lake's introductions (above) for the manuscripts and versions. 2 Clement: its place in Codex Alexandrinus and where A breaks off (Lake's footnote at 12:5, "From this point A is wanting", vol. 1 line 7812):
  open the British Library's description or a facsimile for anything beyond Lake. Apostolic Canon 85 ("two epistles of
  Clement"?: key `apostolic-canon-85`, check its exact words); Eusebius, Church History 3.38.4 (a second letter of Clement) and
  Jerome, Lives of Illustrious Men 15 (key `jerome-illustrious`): open both.
- Ignatius: Eusebius, Church History 3.36 (which letters, from where; he quotes Romans 5 and Smyrnaeans 3: Lake's footnotes at
  Romans 5:2 cite "Euseb"); Irenaeus, Against Heresies (Lake's footnote at Romans 4:1 cites "Iren." for "God's wheat": find the
  book and chapter and open it; a new key `irenaeus-heresies-5` if it is book 5); Polycarp to the Philippians 13:2 (the site's
  own book: quote its Plain English Translation on the copies of Ignatius's letters); Origen and Theodoret only from passages
  opened (Lake's footnotes cite Theodoret at Ephesians 20:2 and Smyrnaeans 1:1); the three recensions and their discovery
  (Ussher 1644, Vossius 1646, Ruinart 1689 for Romans, Cureton 1845, Lightfoot) from Lake's introduction, lines 8756-8949.
- Diognetus: no early writer mentions it (Lake); the one manuscript, its fate and its copies (Lake, lines 16391-16418; von
  Gebhardt 1878 for the proof that the copies derive from it); the attribution to Justin in the manuscript.
- `accepted_by` rows per church family, each from a source that says it (feast days of Ignatius in the calendars; the Orthodox,
  Catholic and Anglican use of the letters; how Protestant churches regard them). A row with nothing sourced is dropped.
  `reliability` (labeled as an AI analysis): the long and short recensions and why the short one is taken as genuine, with the
  views that dissent; 2 Clement's lost ending in A; Diognetus's one burned manuscript and its gaps.

## Topics
Search `content/topics/` and `content/proposals/*/topics/` (titles and `aka`) again before creating anything. On 2026-11-12 the
first batch's cores were merged (`apostolic-fathers`, `clement-of-rome`, `polycarp`, `ignatius`, `irenaeus`, `marcion`,
`apostolic-succession`, `abortion`, `envy`, `phoenix`, `peace`); the topics folder held 746 files. One topic per subject;
existing topics get contributions in the book's topics.json; changes to an existing core go in
`content/proposals/works/topics.md` (re-read first).
**New cores** (in `content/proposals/works/topics/<id>.json`, each by ONE writer; the others contribute under the same id):
| id | kind | core by |
|---|---|---|
| `docetism` (Docetism: Christ Only Seemed Human; aka "docetists", "Docetae") | Ideas | Romans and Smyrnaeans writer (1 John 4:2-3 and 2 John 7 on the site; Smyrnaeans 1-7; Ephesians 7, 18-19; Polycarp to the Philippians 7:1) |
| `apologetics` (Defending the Faith; aka "apologetics", "apology", "the Apologists", "apologia") | Ideas | Diognetus writer (the site's 1 Peter 3:15 "speak in your defense", Acts 17:22-31 and Paul's defense speeches; Diognetus; Aristides and Justin only from texts opened) |
**Existing cores, and who writes the main contribution:** `ignatius` (Ephesians writer; the others add a short one each; the
core's lead has no word yet on the three letters' pages: propose a section in topics.md), `apostolic-fathers` (each book.json
owner a short section for its book, in topics.md), `canon` (each book.json owner), `onesimus` (Ephesians 1:3, 2:1, 6:2: the
core has "Bishop of Ephesus?"; contribute, and anything on the identification only from a source opened), `elders` and
`deacons` (Ephesians 2-6; Smyrnaeans 8, 12: Ephesians writer main, Smyrnaeans short), `apostolic-succession`, `lords-supper`
(Ephesians 5, 13, 20; Romans 7:3; Smyrnaeans 7-8: Romans and Smyrnaeans writer main), `baptism` (Ephesians 18:2; Smyrnaeans
8:2; 2 Clement 6:9, 7:6, 8:6 "the seal"), `church` (Smyrnaeans 8:2 "catholic church"; 2 Clement 14), `martyrs` (Romans main;
Ephesians 12:2; Diognetus 7:7-9, 10:7-8), `roman-games` (Romans 4-5; 2 Clement 7), `virgin-birth` and `mary` (Ephesians 18-19;
Smyrnaeans 1:1), `magi` and `stars` (Ephesians 19:2-3, the star), `satan` and `spiritual-powers` (the ruler of this age),
`resurrection`, `resurrection-body` and `flesh` (2 Clement 9; Smyrnaeans 3), `trinity`, `son-of-god`, `word-of-god` (Ephesians
15:2; Romans 2:1; Diognetus 7, 11-12), `medicine` (Ephesians 7:2; 20:2), `peter` and `paul` (Romans 4:3; Ephesians 12:2),
`ephesus`, `rome`, `smyrna`, `antioch`, `false-teachers`, `repentance`, `almsgiving` (2 Clement 16:4), `final-judgment`,
`gehenna` (2 Clement 7:6; 17:5), `agrapha` (2 Clement main), `idolatry`, `food-laws`, `sabbath`, `circumcision`, `sacrifice`
and `anti-judaism` (Diognetus 2-4), `abortion` (Diognetus 5:6, "exposure of infants" is in its aka), `marriage`, `soul`
(Diognetus 6), `church-and-state` and `foreigners` (Diognetus 5-6), `atonement` and `justification` (Diognetus 9), `stoicism`
and `hellenism` (Diognetus 8), `tree-of-life` and `eden` (Diognetus 12), `widows` (Smyrnaeans 6:2; 13:1).

## Cross-references in both directions
- On 2026-11-12 the site already names these works often: "Ignatius" in 74 files, "Smyrnaeans" in 17, "2 Clement" in 21,
  "Diognetus" in 2. References that now resolve to the new books: "2 Clement 11:2" (7 times), "2 Clement 7:6" (3), 11:3, 11:4;
  "Ignatius, Smyrnaeans 2" and "To the Smyrnaeans 8" (twice, as chapter references); quoted wording tied to them will be checked
  against the new Plain English Translation once it exists, so the build will warn where it differs. Dotted forms ("2 Clement
  16.4" 4 times, "Ignatius, To the Romans 3.2", "Ignatius *Eph.* 19.2") do not link. Each book.json owner, at the end, lists
  by script in `content/proposals/works/build.md` every reference to its book outside its own folder: file, reference, whether
  it parses, any quoted wording and whether it matches, and any claim the Greek does not support.
- Back-links worth adding to other books (the lead writes them at alignment; writers list them in build.md as "suggested
  back-links", only where the existing note does not already make the link): Matthew 2:2 to Ephesians 19; 1 John 4:2-3 to
  Smyrnaeans 5-7; Luke 24:39 to Smyrnaeans 3:2; John 6:51 to Romans 7:3 and Smyrnaeans 7:1; Philemon 1:10 to Ephesians 1:3;
  1 Corinthians 15:8 to Romans 9:2; 1 Peter 2:11 and Philippians 3:20 to Diognetus 5; Isaiah 54:1 and Galatians 4:27 to
  2 Clement 2:1; Isaiah 66:24 to 2 Clement 7:6 and 17:5; 1 Peter 4:8 to 2 Clement 16:4; Jude 1:12 to Smyrnaeans 8:2.

## Where Christians differ
Cards only where churches really disagree, and never a second card on a question the site already asks. Already on the site
(read them; point to them): Christ's body and blood present in the Supper (Exodus 1-15, Matthew 26, John 6, 1 Corinthians
10); whether it is a sacrifice (Malachi 1, Luke 22, Hebrews 10, Psalm 40); who may come to the Table (1 Corinthians 11,
Matthew 7); bishops and elders (1 Timothy 3, Acts 20, Philippians 1, Titus 1), who chooses elders (Acts 14), succession from
the apostles (2 Timothy 2, Acts 1), removing ministers (1 Clement 44); ordination as a sacrament (1 Timothy 4); Peter and his
successors (Matthew 16, Luke 22, John 21); the church (Ephesians); honoring the saints, relics, the martyrs' sufferings
(Acts 10, 2 Kings 13, 2 Maccabees 7); forgiveness after death (2 Maccabees 12, Matthew 12); almsgiving (Proverbs 16); the
atonement (2 Corinthians 5, 1 John); church and state (Romans 13, Matthew 22). New cards are possible in two places only,
each only if every row has a source that addresses that very question:
1. **Smyrnaeans 8:1-2 (Romans and Smyrnaeans writer): who may lead the Lord's Supper and baptize?** ("a valid thanksgiving ...
   under the overseer or one he entrusts"; "not lawful ... without the overseer"), top `lords-supper`. Not the same as the
   bishops-and-elders cards (which ask about the office) or the 1 Corinthians 11 card (who may receive).
2. **Romans 1:0 (the same writer): does Ignatius's greeting give the Roman church a primacy over other churches?** ("presides
   in the region of the Romans", "presiding over the love"), top `peter`. The 1 Clement brief planned the same question and
   no card was written: this is now its place (if 1 Clement's notes at 59:1 or 63:2 take up the question, the lead points
   them here at alignment).
   Each row must cite a source that discusses this greeting.
Real presence in Smyrnaeans 7:1 and Ephesians 20:2, and the single bishop of Ephesians 3-6 and Smyrnaeans 8, get `views` notes
that give each church's reading of Ignatius from sources opened and point to the existing cards: no new card. 2 Clement and
Diognetus: no card planned.

## Atlas
Bible Atlas has no data for these books; the build accepts a places-only `content/atlas/<id>.json` for any catalog book (as the
first batch). Writers do not harvest. Places the texts name: Ephesians: Ephesus in Asia (1:0), Syria and Rome (1:2; 21:2), Smyrna
(21:1); Romans: the region of the Romans (1:0), Syria (2:2; 5:1; 9:1; 10:2), Rome (5:1; 10:2), Smyrna and the Ephesians (10:1);
Smyrnaeans: Smyrna in Asia (1:0), Antioch in Syria (11:1), Syria (11:2), Troas and the Ephesians (12:1); 2 Clement and Diognetus
name no place (Diognetus names Jews and Greeks). The lead decides after writing whether to run a places-only harvest for the
three letters.

## Lead questions (open)
1. A whole-Bible `incarnation` core ("The Incarnation: the Word Became Flesh")? None exists (only `virgin-birth`, whose aka has
   "incarnation and virgin birth", `kenosis` and `word-of-god`); the new `docetism` core covers the denial. Until decided,
   writers put incarnation material under `docetism`, `virgin-birth` or `word-of-god` and list the verses for the lead.
2. Christians as resident aliens and citizens of heaven (Diognetus 5-6; 1 Peter 1:1, 1:17, 2:11; Hebrews 11:13; Philippians
   3:20; the greetings of 1 Clement, Polycarp and the Martyrdom): a new core, or a section in `foreigners` (aka "sojourner") with
   `philippi` keeping "citizenship in heaven"? Until decided, the Diognetus writer contributes to `foreigners` and
   `church-and-state` and proposes the section in topics.md.
3. A places-only atlas for the three letters of Ignatius?
4. works.json: `2-clement` has no note yet (the build needs `book`, set now). The 2 Clement writer drafts one in build.md.
5. The source key `clement-2` lives in `Tob/sources.json` with a date earlier than Lake's: promote it to the global file at
   alignment, with the date fixed, and have the 2 Clement writer use it.

## Lead decisions (2026-11-12, before writing)
1. **Yes, a new whole-Bible `incarnation` core** ("The Incarnation: the Word Became Flesh"), owned by the Ignatius to the
   Ephesians writer (John 1:14, Philippians 2:6-8, 1 Timothy 3:16, 1 John 4:2, Ephesians 7:2, 18:2-19:3, and the Bible-wide
   frame). The Romans/Smyrnaeans writer adds Smyrnaeans 1-7 to it as a contribution and keeps `docetism` as the core for the
   denial; the two cross-link. `virgin-birth` and `word-of-god` link to it; remove nothing from them.
2. **Yes, a new core `resident-aliens`** ("Strangers and Exiles: Christians as Resident Aliens", aka "sojourners", "citizens of
   heaven", "pilgrims"), owned by the Diognetus writer: Diognetus 5-6, 1 Peter 1:1, 1:17, 2:11, Hebrews 11:13, Philippians 3:20,
   and the greetings of 1 Clement, Polycarp to the Philippians and the Martyrdom of Polycarp. `foreigners` (Israel's law on
   resident foreigners) and `exile` stay as they are and cross-link to it. 2 Clement 5 contributes.
3. **Yes, an atlas for all five books**, harvested by the atlas-harvester after writing (as 1Cl, Pol and MPo had).
4. As proposed: the 2 Clement writer drafts the `2-clement` works.json note in `content/proposals/works/build.md`.
5. As proposed: the 2 Clement writer cites `clement-2`; the lead promotes it to the global sources.json with the date fixed at
   alignment.

## Lead decisions after the reviews (2026-11-13)
6. **Views and cards** (Romans 1:0, Smyrnaeans 7:1 and 8, Ephesians 6:1 and 20:2): each tradition's reading comes from that
   church's own document or a named theologian of it, opened this session, that speaks to the point. A scholar (Lightfoot,
   Lake) is named as himself, never as a church's voice. Nothing from the long recension is presented as Ignatius. A
   tradition with no such source is left out.
7. **Church fathers' wording:** a reading or quotation credited to a father (Eusebius, Jerome, Irenaeus, Athanasius) rests on
   his original language opened this session; an English translation serves only for what he argues.
8. **Apparatus:** where Lake's printed Greek adopts an editor's reading and an opened source shows the manuscript reads
   otherwise, a variant entry gives both. Never print a reading no opened source prints.
9. **No notes about the site's own process** in reader content ("Why no card here").
10. Diognetus: παῖς of the Son is "Child" (gloss: also "servant"); ὑπηρέτης is not "servant". ἐπιείκεια is "forbearance" in
    every book of the batch (content/terms.json, 1 Clement).
11. Smyrnaeans has 28 verses plus the greeting: 4:2 is restored by a `split` in tools/works-texts.py, checked against both scans.
