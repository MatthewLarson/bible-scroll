# The Apostolic Fathers batch: decisions shared by all five books

Books: `Did` Didache, `Bnb` Epistle of Barnabas, `1Cl` 1 Clement, `Pol` Polycarp to the Philippians, `MPo` Martyrdom of
Polycarp. All are tier `early` (catalog group "Early Christian writings"; works.json `didache`, `epistle-of-barnabas`,
`1-clement`, `polycarp-philippians`, `martyrdom-of-polycarp`, each with `book` set): early Christian writings that no church
counts as Scripture today. They get the full "not widely accepted" treatment of `.claude/skills/canon-tiers/SKILL.md`, and the
site never calls them Scripture in its own voice. Lane `works`: shared-file changes go in `content/proposals/works/`.

Every writer reads, in this order: `tools/agent-writer.md` (in full), `tools/agent-writer-works.md` (in full, every
"Lessons from" paragraph, which binds you too), `bible/STYLE.md`, this file, then the book's own brief
(`brief-did.md`, `brief-bnb.md`, `brief-1cl.md`, `brief-pol.md`, `brief-mpo.md`). This file settles once what the five
books share. If a book brief and this file disagree, this file wins; report the clash.

## Who writes what (seven writers, all at the same time)
| Writer | Writes | book.json and sources.json |
|---|---|---|
| Didache writer | `content/books/Did/` flat (no parts/), 1:0-16:8 | the same writer |
| Barnabas part writer | `content/books/Bnb/parts/01-21/` | no |
| 1 Clement part writers (3) | `content/books/1Cl/parts/01-20/`, `21-39/`, `40-65/` | no |
| Book-level writer for Barnabas and 1 Clement | `content/books/Bnb/book.json` + `sources.json`, `content/books/1Cl/book.json` + `sources.json` | yes, both books |
| Polycarp writer | `content/books/Pol/` flat, then `content/books/MPo/` flat | yes, both books |

Pol and MPo share one writer, as the Prayer of Manasseh and Psalm 151 did (`brief-man.md`): the same man, city, church
and sources (Irenaeus, Eusebius, Ignatius), one owner of the `polycarp` and `ignatius` topic cores, and 90 verses in all.
Barnabas and 1 Clement share one book-level writer because their canon questions run through the same witnesses
(Codex Sinaiticus, Codex Alexandrinus, Clement of Alexandria, Origen, Eusebius, the canon lists). Each book still gets its
own hostile reviewer per part (and one for each book.json) afterwards, never the writer (`tools/agent-reviewer-works.md`).

## Texts (generated today, read-only; all local)
- `texts/orig/<id>.json` `grc`: Kirsopp Lake's Greek (Loeb, vol. 1 1912 for Did, Bnb, 1Cl, Pol; vol. 2 1913 for MPo),
  digital text from First1KGreek (CC BY-SA 4.0). `fixed`: slips of the digital text corrected against both Internet
  Archive scans of Lake's page (121 in all, from `tools/lake-fixes.json`). Read the `about` block of each file.
- Slips known and NOT fixed: Barnabas 11:8 `οἲ`; Polycarp 13:1 a missing space; Martyrdom 2:2 a stray `·` after
  `μάστιξιν`. The Martyrdom's digital text got only a few fixes because the scan of vol. 2 is noisy: read its Greek warily
  and check any odd form against the scan. A slip you confirm goes in your report (for `tools/lake-fixes.json`, which the
  lead edits), never in variants.json and never in lake-fixes.json yourself.
- `texts/src/<id>.app.json`: Lake's footnotes (`notes`, Greek in Beta Code: `h(mw=n` = ἡμῶν) and his margin Scripture
  references (`refs`). The footnotes' English has OCR slips ("shich" = which). Convert Beta Code by a small script in
  your scratch folder, or read the same footnote in the scan (below). Never paste Beta Code into content. Lake's margin
  references cite the Greek Psalms by the Septuagint numbers in places (Ps. 50 for Psalm 51): convert to the site's
  numbering and open the verse before you cite it.
- `texts/en/<id>.json`: public-domain English for sense only: Lake (Did, Bnb, 1Cl, keyed by verse; the Barnabas copy is a
  Wikisource transcription not yet proofread there), Lightfoot (Pol) and Roberts-Donaldson (MPo), both by chapter. Lake's
  own English of Pol and MPo is on his facing pages in the scans.
- **Lake's printed volumes, local OCR** (`c:\bible-scroll\.cache\dl\lake-ia\`): vol. 1 `apostolicfathers01lake.txt`
  (second OCR of the same printing: `TheApostolicFathersV1.txt`), vol. 2 `apostolicfathers02lakeuoft.txt`. Lake's
  introductions, opened for this plan: 1 Clement vol. 1 lines 422-650; Polycarp vol. 1 lines 14403-14455; Didache vol. 1
  lines 15495-15625; Barnabas vol. 1 lines 17009-17140; Martyrdom vol. 2 lines 14585-14700. Read your book's introduction
  there before you write anything about witnesses, date or author, and cite it as Lake's introduction (source key below).
  The Source Library also holds Lake vol. 1 (the `lake-apostolic-fathers` key says so).
- Sources you open on the web (Eusebius, Irenaeus, Jerome, Athanasius, the Apostolic Canons, the Ignatian letters): New
  Advent (newadvent.org/fathers), CCEL (ccel.org, the Ante-Nicene and Nicene Fathers), Perseus or First1KGreek for Greek.
  Every claim about what a father, council or list says is checked in the text itself this session (agent-writer-works,
  "Lessons from the 1 Maccabees reviews").

## Reference forms (tested with tools/refs.js today)
These parse: "Didache 9:2", "Barnabas 4:3" (or "Epistle of Barnabas 4:3"), "1 Clement 5:4", "Polycarp to the Philippians
7:1" (or "Polycarp, Philippians 7:1"), "Martyrdom of Polycarp 9:3", and "Didache 1:0" / "1 Clement 1:0" for greetings and
titles. These do NOT parse, so never write them: "Polycarp 1:1", "Polycarp's Letter to the Philippians 7:1", "Martyrdom of
Polycarp 10.1" (a dot), "Did 9:2", "1 Clem. 5:4", "Mart. Pol.". Inside a book a bare "c:v" is that book. Name the works in
running text as the catalog does (Didache, Epistle of Barnabas, 1 Clement, Polycarp to the Philippians, Martyrdom of
Polycarp); other works by their works.json names ("Letters of Ignatius", "Shepherd of Hermas", "2 Clement").

## The literal working line (literal.js does not work outside the 66)
For each verse, in `.scratch/<id>-<part>/` (e.g. `.scratch/1Cl-21-39/`, `.scratch/Did/`, `.scratch/MPo/`):
1. A script of your own dumps, verse by verse: the Greek from `texts/orig/<id>.json` `grc` (NFC-normalized), the Latin for
   Pol where `lat` stands, the English check text, and Lake's footnotes and margin references for that verse (Beta Code
   converted). Model: `.scratch/4Ma-01-06/ch1.txt` and `.scratch/PsS-01-08/literal.txt`.
2. By hand, a literal line in the Greek word order (or the Latin's, for Pol 10-14), every word accounted for, hyphenated
   glosses for inflected forms ("I-cried to Lord in the being-afflicted me"). Use LSJ (Perseus, key `lsj-perseus`) and,
   for Christian senses, a lexicon you open this session. Keep these files; reviewers read them.
3. Smooth it into the Plain English Translation: 8th-grade American English, every clause's content kept, long periods
   broken into sentences (1 Clement and Barnabas run long), the author's voice kept (Barnabas's "children", Clement's
   "beloved", the Didache's "my child").
4. Drift audit in your head only, never writing their text: Holmes, <i>The Apostolic Fathers</i> (3rd ed. 2007); Ehrman,
   Loeb <i>Apostolic Fathers</i> (2003); Richardson, <i>Early Christian Fathers</i> (1953); Brannan, Lexham <i>Apostolic
   Fathers</i>; Milavec and Niederwimmer for the Didache; Staniforth (Penguin). Lake (1912-13), Lightfoot (1891),
   Roberts-Donaldson (1867) and Hoole (1885) are public domain and may be quoted by name, but the Plain English
   Translation is fresh English, never a modernized Lake.
5. Diff every verse against `grc` (or `lat`) by script: every place the Plain English Translation departs from Lake's text,
   even to follow a reading in his footnote, gets a variant entry. Where Lake corrects his manuscript, call it "Lake's text".

## Terms (one rendering in all five books)
Existing site renderings these books follow (content/terms.json; proposals/*/terms.json were empty on 2026-11-12):
ἐκκλησία "church"; κύριος "Lord" (of Jesus and of God; "master" for a human owner), never "the LORD", even in quotations of
the Hebrew Bible, because the Greek has no divine name; δεσπότης / Δέσποτα of God "Master"; ὁ παντοκράτωρ "the Almighty",
θεὸς παντοκράτωρ "God Almighty"; ὁ ὕψιστος "the Most High"; Χριστός "Christ" in the name ("Jesus Christ", "Christ Jesus"),
as in the New Testament letters; οἱ ἅγιοι "the saints" (gloss at first use: "God's holy people"); βαπτίζω / βάπτισμα
"baptize / baptism"; ἀπόστολος "apostle"; ἀγάπη / ἀγαπάω "love"; δοῦλος "slave"; τύπος "figure" (as Romans 5:14, "Adam is a
figure of the one who was coming"; gloss "Greek typos, 'type'").

New entries for these books. **The Didache writer enters all of them** in `content/proposals/works/terms.json` as
"Apostolic Fathers" entries at the start of work (re-read the file first). The others add only words not listed here,
re-reading the file just before writing, and report each one.
- **ἐπίσκοπος "overseer"** in all five books, as the site's New Testament (Philippians 1:1 "overseers and deacons";
  1 Timothy 3:1 "the office of overseer"); ἐπισκοπή "the office of overseer". Gloss at first use in each book: "the word
  behind 'bishop'". The Martyrdom (16:2) keeps "overseer" too, though by then one man led Smyrna's church: one rendering
  lets the reader see the word's history without the site deciding when "overseer" became "bishop", which is the very
  question the churches argue. The note at Martyrdom 16:2 says so and points to Polycarp's title in the manuscripts.
- **πρεσβύτερος "elder"** for the office (Polycarp to the Philippians 1:0, 5:3, 6:1; 1 Clement 44:5, 47:6, 54:2, 57:1);
  "older people" or "older men" where age is meant; where it is unclear (1 Clement 1:3, 3:3, 21:6), choose by context and
  say why in a note. πρεσβυτέριον "council of elders". Latin presbyter (Polycarp 11:1, Valens) "elder".
- **διάκονος "deacon"** for the office (Didache 15:1; 1 Clement 42:4-5; Polycarp to the Philippians 5:2-3), as Philippians
  1:1 and 1 Timothy 3:8 on the site; "servant" otherwise, as the existing entry says.
- λειτουργία / λειτουργέω "service / serve" (worship service: Didache 15:1; 1 Clement 40-44), gloss at first use: "public
  worship service, the word behind 'liturgy'"; kept apart from διακονία "ministry".
- ἀρχιερεύς "high priest" (Didache 13:3 "they are your high priests"; 1 Clement 36:1, 40:5, 61:3, 64:1); ἱερεύς "priest";
  λαϊκός (1 Clement 40:5) "layperson" ("the layperson is bound by the rules for laypeople"), with a note on the word's
  first known Christian use (only from a source opened).
- **προφήτης "prophet"**, ψευδοπροφήτης "false prophet" (as Matthew 7:15), διδάσκαλος "teacher". In Didache 11-13 the
  traveling ἀπόστολος stays "apostle", with a note quoting Lake's footnote that it means an inspired traveling teacher,
  not one of the Twelve. χριστέμπορος (Didache 12:5) "a Christ-peddler", gloss "someone who makes a trade of Christ".
- **μάρτυς / μαρτυρέω / μαρτύριον, μαρτυρία.** In the Martyrdom of Polycarp, where the words mean dying for the faith,
  "martyr / be martyred / martyrdom", with a gloss at first use (1:1) that the Greek means "witness" and a note on how
  the Martyrdom is the first writing to use it as a fixed term for one who dies (say this only if a source you open says
  it; otherwise say what the text itself shows). Where the sense is testimony, "witness / testify / testimony". Elsewhere:
  1 Clement 5:4 and 5:7 μαρτυρήσας "bore his witness" with a note on whether death is meant (the site's Revelation 2:13
  "Antipas, my witness" and Acts 22:20 "Stephen, your witness" use "witness"); Polycarp to the Philippians 7:1 τὸ μαρτύριον
  τοῦ σταυροῦ "the testimony of the cross". Topic `martyrs`.
- **εὐχαριστία / εὐχαριστέω "the thanksgiving / give thanks"** (Didache 9:1, 9:5, 10:1, 10:7, 14:1). Never "Eucharist"
  in the Plain English Translation: whether chapters 9-10 are the Lord's Supper, a full meal, or both is the main question
  scholars and churches argue, and the capitalized name would decide it. Gloss at first use: "Greek eucharistia, the word
  that became 'Eucharist'"; a full note at 9:1 gives the readings; topic `lords-supper`. Elsewhere the verb is "give
  thanks".
- κλάσμα (Didache 9:3-4) one rendering in both verses (the writer chooses between "broken bread" and the site's John 6:12
  "broken pieces", and says why); κλάω ἄρτον "break bread" (as Acts 20:7).
- θυσία "sacrifice" (Didache 14:1-3; 1 Clement 18:16-17, 35:12, 41:2, 52:3-4), προσφορά "offering", προσφέρω "present"
  (as Matthew 5:23-24 "presenting your offering"; 1 Clement 44:4 "presented the gifts", with a note on the sacrificial
  reading of the phrase).
- κυριακή (Didache 14:1 κατὰ κυριακὴν δὲ κυρίου) "the Lord's day" (as Revelation 1:10), keeping the Greek's doubled
  "of the Lord" and noting it; ἡ ἡμέρα ἡ ὀγδόη (Barnabas 15:8-9) "the eighth day". Topic `sabbath` (see Topics).
- **παῖς of Jesus "servant"** (Didache 9:2-3, 10:2-3; 1 Clement 59:2-4; Martyrdom of Polycarp 14:1, 14:3, 20:2; and
  wherever Barnabas has it), as the site's Acts 3:13 ("his servant Jesus") and Acts 4:27; of David, "your servant David"
  (Didache 9:2, as Acts 4:25). Note at first use in each book: "servant" or "child", Isaiah 42:1 and 52:13 (Greek ὁ παῖς
  μου), and why the site says "servant" (the pairing with David, as in Acts 4). Other uses: "child" or "boy" by context.
- δημιουργός "Creator" (1 Clement 20:11, 26:1, 33:2, 35:3, 59:2); κτίστης "Maker" where both stand near each other.
- καθολικὴ ἐκκλησία (Martyrdom of Polycarp 1:0, 8:1, 16:2, 19:2) "catholic church", lowercase, gloss "Greek katholikos,
  'whole, universal'", with a note that the word is not yet the name of one communion, and what the Martyrdom means by it
  (the worldwide church in 8:1 and 19:2; the true church in Smyrna in 16:2). One rendering, so the reader sees the word.
- παροικέω / παροικία in the greetings (1 Clement 1:0, Polycarp to the Philippians 1:0, Martyrdom of Polycarp 1:0) "lives
  as a resident alien in" ("The church of God that lives as a resident alien in Rome"), as the site's 1 Peter 1:17 and
  2:11 ("resident aliens"); gloss at first use: "living on earth for a time, its home in heaven".
- ἐκλεκτοί "the chosen" (as Matthew 24:31 "his chosen"); διψυχέω / δίψυχος "be double-minded / double-minded" (as James
  1:8); ὑπομονή "endurance"; ζῆλος "jealousy" (as 1 Corinthians 13:4 "Love is not jealous" and Galatians 5:20), kept
  apart from φθόνος "envy" (1 Clement 3-6: one each, a note at 3:2); στάσις "rebellion" (1 Clement 1:1 and through the
  letter, the revolt against the elders; note at 1:1: Greek stasis, faction and civil strife; never confuse with ἀνάστασις
  "resurrection" when searching), ἔρις "fighting" (as Galatians 5:20), σχίσμα "split" (as Galatians 5:20 "splits"),
  ὁμόνοια "harmony", εἰρήνη "peace".
- γνῶσις "knowledge" (Barnabas 1:5, 6:9, 9:8, 18:1; Didache 9:3, 10:2), never "gnosis" in the text, with a note at first
  use in each book that it is not yet the "knowledge" of the later Gnostic groups.
- ὁ κοσμοπλανής (Didache 16:4) "the world-deceiver", topic `antichrist`.

## The Two Ways (Didache 1-6 and Barnabas 18-20)
Lake's introduction (opened for this plan, vol. 1 lines 15560-15590): the Didache's first part "is always known as 'The
Two Ways'", it "is closely connected with the last chapters of the Epistle of Barnabas", and it is not clear whether
Barnabas used the Didache, the Didache used Barnabas, or both used a common source: "probably the majority of scholars
incline to the last view, and many think that the common source ... was a Jewish pre-Christian document, used for
catechetical purposes". Any later scholar's view, only from a source opened.
- **The Didache's wording is the model.** Its Two Ways is the longer and the more orderly. The Didache writer drafts
  1:0-6:3 FIRST (before chapters 7-16) and saves that plain.txt as soon as it passes the drift audit. The Barnabas writer
  writes chapters 18-20 LAST and, if Did's plain.txt has 1-6 by then, uses its English word for word wherever Barnabas's
  Greek is the same word in the same form, translating fresh only where the Greek differs (and saying so in a note at each
  real difference). If it is not there yet, translate by the rules below; the lead aligns at the alignment step.
- Shared renderings, fixed now so the two can match even unseen: Ὁδοὶ δύο εἰσί "There are two ways" (Didache 1:1;
  Barnabas 18:1); ἡ ὁδὸς τῆς ζωῆς / τοῦ θανάτου "the way of life / the way of death"; ἡ ὁδὸς τοῦ φωτός / τοῦ σκότους (Barnabas
  18:1; 19:1; 20:1) "the way of light / the way of darkness"; διαφορὰ δὲ πολλή "and there is a great difference". The
  prohibitions οὐ + future and οὐ μή + subjunctive: "You must not ...", as the site's Exodus 20:13-17 ("You must not
  murder. You must not commit adultery. You must not steal.") and Matthew 19:18; the positive futures: "You are to ...", as
  Matthew 22:39 and Leviticus 19:18 ("You are to love your neighbor as yourself"). οὐ φονεύσεις τέκνον ἐν φθορᾷ, οὐδὲ
  γεννηθὲν ἀποκτενεῖς (Didache 2:2; Barnabas 19:5 has the same with πάλιν) "You must not murder a child by abortion, and you
  must not kill one that has been born", with a note on φθορά ("destruction") and the topic `abortion`. Where the Two Ways
  uses a vice or virtue word the New Testament has, use the site's New Testament rendering (terms.json, then the verse).
- Each writer writes its own note on the shared source; the two cannot see each other, so state the same core facts (Lake's
  three possibilities, the Latin <i>Doctrina apostolorum</i> that Lake lists among the Didache's witnesses, the Community
  Rule's two spirits only if opened) and let the lead align them.

## Scripture quoted inside these books
These writers quote the Septuagint and the sayings of Jesus, often loosely, from memory, or in forms no Bible has.
1. **Match where the wording matches.** Where the author's Greek gives the quoted verse as the Greek Bible has it and the
   site's Plain English Translation of that verse fits the Greek, use the site's wording exactly (copy it from the
   verse's plain.txt by script), so the reader sees the same words and the quotation links.
2. **Translate the author where the Greek differs.** The site's Old Testament is made from the Hebrew; where the author
   follows a Septuagint wording that differs from the Hebrew, or adapts, shortens, joins or expands a verse, translate
   what the author wrote and give a note (type `echo`) that says what differs: the Septuagint against the Hebrew, or the
   author's own change. Never bend the author's words toward the Bible, and never call a Septuagint reading a misquote.
   Example: Didache 14:3 gives Malachi 1:11 with θυσίαν καθαράν; the site's Malachi 1:11 (from the Hebrew minchah) has "a
   pure offering". Because 14:1-3 argue from the one Greek word, Didache 14 says "sacrifice" in all three verses, and the
   note at 14:3 gives Malachi 1:11's site wording and explains the difference. Polycarp to the Philippians 12:1 (Latin)
   quotes "Be angry, but do not sin" in the form of Ephesians 4:26 and the Greek Psalm 4:5, not the site's Psalm 4:4 from
   the Hebrew ("Be shaken, but do not sin"): use Ephesians 4:26's wording and note Psalm 4:4.
3. **Sayings of Jesus.** Where a saying matches a Gospel verse in the Greek, use that verse's site wording; where it is
   close but different (Didache 1:3-5 beside Matthew 5:39-48 and Luke 6:27-35; 1 Clement 13:2 and 46:8), translate the
   author's form and say in a note which Gospel wording differs and how. Whether the author knew a written Gospel or an
   oral form is argued: give the views with who holds them, from sources opened. Sayings in no Gospel (Didache 1:6;
   Barnabas 7:11) go to the topic `agrapha`.
4. **Quotations whose source is unknown or outside the 66** (1 Clement 23:3-4 and 46:2; Barnabas 4:3, which names Enoch,
   6:13, 7:4, 12:1; Didache 1:6): translate them, say in a note that no known book matches, and give proposals only from a
   source opened. Where a candidate is on the site (1 Enoch, 4 Ezra, Wisdom of Solomon, Sirach), quote its site wording and
   name it as a work outside the 66.
5. Mark how the author introduces each quotation ("as it is written", "the Scripture says", "the Lord says"): it matters
   for what these writers counted as Scripture (Barnabas 4:14 introduces "many called, few chosen" with γέγραπται; Polycarp
   to the Philippians 12:1 calls Ephesians "these Scriptures"). Keep the formula in the Plain English Translation.
6. Check every quotation of the 66 by hand against the current Plain English Translation of the quoted verse: the build
   checks only notes, and only some shapes. Notes that quote another book use its current wording exactly.

## Didache 8:2 and Matthew 6:9-13
Didache 8:2 follows Matthew's form of the Lord's Prayer closely. Use the site's Matthew 6:9-13 wording word for word
except where the Didache's Greek differs, and translate the Didache at each difference: ἐν τῷ οὐρανῷ (singular; Matthew
ἐν τοῖς οὐρανοῖς, though the site's English is "in heaven" in both), τὴν ὀφειλὴν ἡμῶν "the debt we owe" (Matthew "the
debts"), ἀφίεμεν "forgive" present (Matthew "have forgiven"), and the closing ὅτι σοῦ ἐστιν ἡ δύναμις καὶ ἡ δόξα εἰς τοὺς
αἰῶνας. For that closing, use the wording the site's Matthew 6:13 variant entry (`content/books/Mat/parts/05-07/
variants.json`) already gives the Didache's shorter doxology, if it gives an English one; otherwise translate and tell the
lead, who aligns the variant entry. A note at 8:2 lists every difference in a table (Greek beside Greek) and points to the
Matthew 6:13 variant and Luke 11:2-4. Topic `lords-prayer`.

## Dating (only what an opened source says)
What Lake's introductions say (opened for this plan; quote or paraphrase them as Lake's view, key `lake-apostolic-fathers`
for vol. 1 and a new `lake-apostolic-fathers-2` for vol. 2):
- **Didache:** a composite; the original "Two Ways" "may be early first century or even earlier", the original "Teaching"
  "probably early second century, or possibly earlier", and the recension in C "can scarcely be later than the second
  century", with possible later phrases. Lake's footnote at 1:5 thinks that part later than Hermas (about AD 140).
- **Barnabas:** "doubtful"; two internal arguments, the ten kings (in Lake's text at 4:4-5, though his introduction says
  "chap. vi" in both scans: cite the verses, not the slip) taken as Roman emperors (first century), and the rebuilding of
  the Temple in 16:3-4 taken as AD 132; "Neither theory is quite satisfactory"; "end of the first or beginning of the second
  century".
- **1 Clement:** after Nero's persecution (5) and the apostles' age (42, 44), so "scarcely ... older than 75-80"; elders
  appointed by apostles still living (44) and no second-century controversies, so "probably not much later than 100";
  about 96 if chapter 1 means Domitian's time, though "we know very little about the alleged persecution in the time of
  Domitian"; "safest to say ... between 75 and 110", with "general agreement" for the last decade of the first century.
- **Polycarp:** martyred "in all probability, on February 23rd, 155", at 86; the letter is a covering letter for the copies
  of Ignatius's letters (13:2). Lake gives no separate date for the letter in what was opened: the date and the
  one-letter or two-letter question come from a source you open.
- **Martyrdom:** Eusebius's Chronicle puts it in 166-167, a date "now ... almost universally abandoned"; Waddington's
  argument from Aelius Aristides puts Quadratus's proconsulship in 153-154 and Saturday, February 23 fell in 155; C. H.
  Turner and E. Schwartz argued for February 22, 156, from the "great Sabbath". Lake calls the letter "obviously genuine
  and contemporary".
Other datings you will meet (earlier dates for the Didache, a date for Barnabas before AD 70 or near 132, a date for 1
Clement near 70 or well after 100, a later date for parts of the Martyrdom): each only with a scholar's work opened this
session, named, with the argument. Where a scholar's view is commonly stated as the majority, say "majority" only if an
opened source says so (STYLE.md rule 2; no "as reported" hedges).
Existing site text already states dates: works.json (Martyrdom "about AD 155 to 160"), source keys (`didache` "late first
century", `barnabas` "about AD 100–130", `clement-1-letter` "about AD 96", `polycarp-philippians` "about AD 110–135",
`martyrdom-polycarp` "about AD 155–160"). Book.json owners list any that their book contradicts in
`content/proposals/works/build.md`; do not edit them.

## Near-canonical standing: what to verify before saying it
Each book.json owner writes the `canon` block and must open the source for every one of these before using it:
- Lake's introductions say (opened): 1 Clement is in Codex Alexandrinus (fifth century, all but one page; his footnote at
  57:6 says A is missing from there to the beginning of chapter 64) and in the Strassburg Coptic manuscript joined "directly"
  to the canonical books; Clement of Alexandria "appears" to treat 1 Clement as Scripture; Barnabas "became canonical in some
  circles", Clement of Alexandria quotes it as Scripture, Origen calls it a "Catholic Epistle", and Codex Sinaiticus has it
  "following immediately after the Apocalypse", not as an appendix; the Codex Constantinopolitanus (C, written by Leo the
  Notary in 1056, found by Bryennios in 1875) holds 1 and 2 Clement, Barnabas, the Didache and the long form of Ignatius.
  Cite Lake for these, and open the codex site (codexsinaiticus.org) or the British Library description for anything more.
- To verify in the text before use: 2 Clement's place in Alexandrinus; Eusebius, <i>Church History</i> 3.16 and 4.23.11
  (1 Clement read in church; Dionysius of Corinth), 3.25.4 (Barnabas and "the so-called Teachings of the Apostles" among the
  disputed or spurious books), 3.36.13-15 and 4.14-15 (Polycarp and the Martyrdom); Athanasius, <i>Festal Letter</i> 39
  (key `athanasius-festal-39`: which books it sets apart for catechumens); Apostolic Canon 85 (keys `apostolic-canon-85` and
  `apostolic-canons-npnf`: check its exact words on Clement's letters and which edition you read); the Stichometry of
  Nicephorus (key `nicephorus-stichometry`) and any other list you cite; Clement of Alexandria's and Origen's exact
  passages (find the place, open it); Jerome, <i>Lives of Illustrious Men</i> 6, 15, 17 (key `jerome-illustrious`); Irenaeus,
  <i>Against Heresies</i> 3.3.3-4 (Clement as the third bishop of Rome after the apostles; Polycarp; key `irenaeus-heresies-3`);
  the one Syriac manuscript of 1 Clement that Lake names (written 1169, Cambridge University Library Add. 1700): what else it
  contains and where the letter stands in it, only from a source opened. The Ethiopian
  church's broader canon includes books under Clement's name that are not 1 Clement: say nothing about it unless you open a
  source that names the book.
- No church prints any of the five in its Bible today: say so for each church family only with a source, as the Psalms of
  Solomon did (`brief-pss.md`, book.json section). So there is **no "Is it Scripture?" card** in any of the five book.json
  files: the canon block answers it, and every church agrees.

## The canon block for tier `early`
As agent-writer-works.md, with these adjustments. `accepted_by`: one row for each church family (Catholic, Eastern
Orthodox, Oriental Orthodox, Ethiopian, Anglican, Lutheran and Reformed, Baptist and Free churches) saying it is not in that
Bible, and what the church does with the writing or its author (feast days of Clement and Polycarp, Clement's name in the
Roman Canon of the Mass, the Didache's use in catechesis or church-order debates), each from a source that says so; a row
with nothing sourced is dropped. `rejected_why`: why the early church set these books aside or kept them at the edge (late
or uncertain apostolic origin, limited use, the lists), in the strongest form the sources give. `cited_in`: these books are
later than the New Testament, so most entries are `shared tradition` (the Didache and Matthew; the Two Ways and Matthew
7:13-14; the Clement of Philippians 4:3, whom tradition identified with the writer, per Lake, as `disputed`), never
"quotation" unless the New Testament quotes the work. `reliability`, labeled as an AI analysis: (1) as a witness to what
Christians believed and did in the generations after the apostles (very high, and why); (2) the text (dates and number of
manuscripts, the lost Greek of Polycarp 10-14, the Martyrdom's copyists Gaius, Socrates and Pionius, the Latin and Coptic
versions); (3) historical claims (the authorship each title claims, events and miracles reported, such as the voice from
heaven and the dove of the Martyrdom); (4) agreement with the 66 books, point by point: where it matches, goes beyond, or
conflicts (say "conflicts" where it does), giving each church's reading. Never rank churches.

## Topics
Search `content/topics/` and `content/proposals/*/topics/` (titles and `aka`) again before creating anything; on
2026-11-12 every lane's proposals/topics folder was empty. One topic per subject; existing topics get contributions in the
book's (or part's) topics.json; changes to an existing core go in `content/proposals/works/topics.md` (re-read first).
**New cores** (in `content/proposals/works/topics/<id>.json`, each by ONE writer; the others contribute under the same id):
| id | kind | core by |
|---|---|---|
| `apostolic-fathers` (The Apostolic Fathers) | Studies | book-level writer (Bnb + 1Cl) |
| `clement-of-rome` | People | book-level writer (Bnb + 1Cl) |
| `polycarp` | People | Polycarp writer |
| `ignatius` (Ignatius of Antioch; works.json has `letters-of-ignatius` for his letters) | People | Polycarp writer |
| `abortion` (check `aka` for "unborn", "infanticide" first) | Ideas | Didache writer |
| `envy` (Jealousy and Envy; check "jealousy" in every aka first; `sotah` is a different subject) | Ideas | 1 Clement 01-20 |
| `phoenix` | Creatures | 1 Clement 21-39 |
| `apostolic-succession` | Ideas | 1 Clement 40-65 |
`marcion` and `irenaeus` (People) only if the Polycarp writer needs them (Polycarp to the Philippians 7:1 with Irenaeus,
<i>Against Heresies</i> 3.3.4; the Moscow ending of the Martyrdom): that writer creates them, and nobody else.
**Existing cores, and who writes the main contribution** (others may add their own short ones): `two-ways` (Didache;
Barnabas for 18-20), `lords-supper` (Didache 9-10, 14), `baptism` (Didache 7), `lords-prayer` (Didache 8), `fasting`
(Didache 7-8), `prophecy` and `false-teachers` (Didache 11-13; Polycarp 7), `apostles` (Didache 11; 1 Clement 40-65),
`elders` (it carries "overseer" and "bishop" in its aka: 1 Clement 40-65 main; Didache 15; Polycarp 5-6), `deacons`,
`sabbath` (Didache 14 and Barnabas 15 on the Lord's day and the eighth day: the site's cards on Sunday all have top
`sabbath`, so the Lord's day stays there; the Didache writer proposes in topics.md that the core add the aka "Lord's day",
"Sunday", "eighth day" and a short section), `agrapha` (Didache 1:6; 1 Clement 13:2, 46:8; Barnabas 7:11), `synoptic-problem`
(Didache and Matthew), `antichrist` (Didache 16; Polycarp 7:1), `typology` and `allegorical-reading` (Barnabas), `sevens`
(its title is "Numbers in the Bible": Barnabas 9:8 and 15), `millennium` (Barnabas 15), `red-heifer` and
`day-of-atonement` (Barnabas 7-8), `food-laws`, `circumcision`, `temple`, `anti-judaism` and `church-israel` (Barnabas;
Martyrdom 12-13 and 17), `peter` and `paul` (1 Clement 5), `domitian` (1 Clement 1), `corinth` and `1-corinthians`
(1 Clement 47), `rome`, `philippi` and `philippians` (Polycarp to the Philippians 3, 11), `smyrna` and `martyrs` (Martyrdom),
`communion-of-saints` (Martyrdom 17-18), `imperial-cult`, `roman-governors`, `church-and-state` (1 Clement 60-61;
Martyrdom 9-10), `canon` (each book.json owner: one short section per book), `scripture-and-tradition` (1 Clement 42-44),
`justification` and `faith` (1 Clement 30-33; Polycarp 1:3), `resurrection` (1 Clement 24-26), `almsgiving`, `hospitality`,
`household-codes`, `widows`, `wealth`, `servant-of-the-lord` (1 Clement 16, Isaiah 53).
A `peace` core does not exist (1 Clement's theme is "peace and harmony"); none of these writers creates one: the
1 Clement writers file their material under `church` and the lead decides (see below).

## Cross-references in both directions
- Notes in these books that cite a New Testament verse by full name ("Matthew 6:9") show up on that verse's page through
  the build's reverse index; no edit of the New Testament book is needed for that.
- The site already cites these works often (on 2026-11-12: "Didache" in 129 files, "1 Clement" in 75, "Barnabas" in about
  60, "Polycarp" in 46, "Martyrdom of Polycarp" in 9). Once the five books are built, those references become links, and
  any quotation in quote marks tied to "Didache 8:2" and the like is checked against the new Plain English Translation, so
  the build will warn wherever the wording differs. Each book.json owner, at the end, lists by script in
  `content/proposals/works/build.md` every reference to its book outside its own folder: file, reference, whether it parses
  (the forms above), any quoted wording and whether it matches the new Plain English Translation, and any claim about the
  text the Greek does not support. Known cases: `Eph/book.json` ("Polycarp 1:3; 12:1"), `Rom/parts/09-11/notes.json` and
  `2Ma/parts/04-07/notes.json` ("Martyrdom of Polycarp 8.2", "10.1" with dots), the `two-ways` core (quotes Didache 1:1).
- Back-links worth adding to other books' notes (for example Matthew 6:9-13 to Didache 8:2, 1 Corinthians 1:12 to
  1 Clement 47, Philippians 1:1 and 4:3 to Polycarp to the Philippians 3:2 and 1 Clement's author, Revelation 2:8-11 to the
  Martyrdom, Ephesians 4:26 to Polycarp to the Philippians 12:1, 1 John 4:2-3 to Polycarp 7:1, John 19:31's "great day" to
  Martyrdom 8:1 and 21:1, Hebrews 1 to 1 Clement 36) go in the same build.md list as "suggested back-links" (file, verse,
  one sentence), only where the existing note does not already make the link. Writers never edit another book; the lead
  writes the back-links at alignment.

## Where Christians differ
Cards only where churches really disagree, and never a second card on a question the site already asks. The site already
has cards (read them, point to them in notes and chapter pages) on: baptism by immersion (Acts 8), the baptismal words and
who may be baptized (Matthew 28), whether baptism is needed (Mark 16, Acts 2), fixed fast days (Judith 8, Matthew 4 and 6),
closed communion (Matthew 7:6), whether the Eucharist is a sacrifice (Malachi 1, Luke 22, Hebrews 10, Psalm 40), how often to
celebrate it (Acts 20), Sunday and the Sabbath (Revelation 1, Exodus 20, Colossians 2 and others), apostles and prophets today
(Ephesians 2), who chooses elders (Acts 14), bishops and elders (1 Timothy 3, Acts 20, Philippians 1, Titus 1), succession
from the apostles (Acts 1, 2 Timothy 2), ordained priesthood (Hebrews 7, 1 Peter 2), Peter and the papacy (Matthew 16, Luke
22), faith and works (Romans 3, James 2, Joshua 2), the church and Israel (Galatians 6, Acts 28), food laws (Leviticus 11,
Romans 14), relics (2 Kings 13), honoring the saints (Acts 10, Revelation 5), the martyrs' sufferings (2 Maccabees 7), oaths
(Histories of Tacitus 4), the millennium (Revelation 20), almsgiving (Proverbs 16). The book briefs name the few places where
a new card may be justified; write one only if each row has a source that addresses that very question.

## Atlas
Bible Atlas has no data for these books, but the build accepts `content/atlas/<id>.json` for any catalog book (it checks one
entry per chapter and Bible Atlas place ids with coordinates), and the Histories of Tacitus got a places-only harvest this
way. Writers do not harvest. Each book brief lists the places the text names; the lead decides after writing whether to run
the `atlas-harvester` for a places-only file (people and events empty). Places Bible Atlas lacks (Philomelium) cannot be
added that way.

## Lead questions (open)
1. works.json names Polycarp's letter "Polycarp's Letter to the Philippians", which does not parse; the catalog calls it
   "Polycarp to the Philippians". Rename the works.json entry (old name kept as aka) so mentions and references agree?
2. A places-only atlas for 1 Clement, Polycarp and the Martyrdom (and Barnabas's Egypt, Sinai and Jerusalem)?
3. A whole-Bible `peace` core (shalom, peace with God, peace in the church), written by the lead, with 1 Clement contributing?
4. Duplicate global source keys to merge at publish: `clement-1` and `clement-1-letter`; `apostolic-canon-85` and
   `apostolic-canons-npnf`; and the dates in the global keys listed under Dating.
5. Martyrdom 8:2 Κύριος καῖσαρ: "Caesar is Lord" (the wording the site's Romans 9-11 note uses) or "Lord Caesar" (Lake)? The
   Polycarp writer decides by the Greek, with a note, and lists the Romans note for the quote sync.

## Lead decisions (2026-11-12)
1. works.json `polycarp-philippians` is now named "Polycarp to the Philippians" (old name kept in `aka`). Write that name in content.
2. A places-only atlas will be run for 1 Clement, Polycarp to the Philippians and the Martyrdom of Polycarp after writing. Writers just name places clearly; no atlas files from writers.
3. `peace` topic: the core is written by 1 Clement part 01-20 (concord and peace are Clement's theme), as a proposal in content/proposals/works/topics/peace.json; search first that no peace topic exists under another title or aka. Other writers contribute to it only after it exists; otherwise mention the verses in their report for the lead.
4. Duplicate source keys (`clement-1` / `clement-1-letter`, `apostolic-canon-85` / `apostolic-canons-npnf`): writers use the first key of each pair; the lead merges them at alignment.
5. Martyrdom 8:2 (Κύριος Καῖσαρ): the writer renders it from the Greek and says why in a note; the lead syncs any other book's note that quotes the verse.
