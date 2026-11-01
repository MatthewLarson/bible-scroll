# Hebrews to 3 John: shared brief for Heb Jas 1Pe 2Pe 1Jn 2Jn 3Jn

Read tools/brief-nt.md first (rules for every New Testament book), then tools/brief-pauline.md and
tools/brief-pauline2.md (their terms and lead decisions bind these books too wherever the same Greek appears), then
your book's own brief. Form models: content/books/Jud/ (a Catholic letter, and 2 Peter's parallel), content/books/Eph/
and content/books/Col/ (the newest letters), content/books/Hag/ (a one-part book in a flat folder). nt lane: write only
in `content/books/<id>/...`; shared additions in `content/proposals/nt/` (empty at the start of this round; the other
writers of this round add to it at the same time, so read-modify-write and re-read).

**Layout.** Hebrews is two parts, `content/books/Heb/parts/01-07/` (owns book.json) and `parts/08-13/`. James,
1 Peter, 2 Peter and 1 John are each ONE part in a flat folder `content/books/<id>/`. 2 John and 3 John are two flat
folders written by one writer. Each writer of a flat book owns its book.json.

**Lenses (fixed, same as the Pauline letters): H History and setting, C Critical, L Literary, J Jewish reading,
T Church tradition.** Each book.json gives its own `desc`. In Hebrews and James the J lens carries a great deal.

**Base text.** The Editio Critica Maior (ECM) of the Catholic Letters is published for James to Jude, and NA28 adopted
its text there (verify both statements in an opened source before writing them). Where SBL differs from NA28 in these
letters, NA28/ECM is the likelier text: check the `w` edition marks, and weigh. Hebrews has no ECM; SBL, NA28 and
Tyndale House as brief-nt.md says. P46 (about AD 200) contains Hebrews among Paul's letters (verify), which matters for
Hebrews' variants and its place in the canon.

**Terms (read content/terms.json and content/proposals/nt/terms.json; these decisions are fixed for this round so the
seven writers agree; add an entry to proposals/nt/terms.json only where a book brief says "adds the entry"):**
- ἀγαπητοί "beloved" (as Jude 1:3, 17, 20). ἀδελφοί "brothers" with the gloss "brothers and sisters" and a note at
  first use in each book (as Romans and Ephesians). δοῦλος "slave" (Jude 1:1 "a slave of Jesus Christ"; James 1:1,
  2 Peter 1:1 follow it).
- μένω "remain" (John 15:4-5 Plain English Translation), gloss "abide, stay, live" at first use in 1 John; never "abide" in the Plain English Translation.
- παράκλητος "Advocate" (John 14:16); 1 John 2:1 "an Advocate with the Father".
- ἀρχηγός "Founder" (Acts 3:15; 5:31): Hebrews 2:10 and 12:2 follow, with a note on "pioneer, champion, author".
- διασπορά "the Dispersion" (John 7:35): James 1:1 and 1 Peter 1:1, with a gloss "Jews (or believers) scattered
  outside the land of Israel".
- πάροικος "resident alien" (terms.json, Ephesians 2:19); παρεπίδημος "temporary resident" (1 Peter 1:1; 2:11;
  Hebrews 11:13), with a note on the social reading (John H. Elliott: verify) against the figurative one.
- ἱλάσκομαι "make atonement" (Hebrews 2:17); ἱλαστήριον in Hebrews 9:5 is the ark's lid: "the atonement lid"
  (Exodus 25-26 Plain English Translation), not Romans 3:25's "place of atonement", with a note tying the two; ἱλασμός (1 John 2:2;
  4:10) "the atoning sacrifice", gloss "the means by which sins are covered and God's anger turned away", and a note
  on the readings (propitiation, expiation, both). The 1Jn writer adds the ἱλασμός entry.
- ἀρχιερεύς "high priest" (terms.json); τὰ ἅγια "the sanctuary" / ἅγια ἁγίων "the most holy place" (Exodus 26:33-34
  Plain English Translation); καταπέτασμα "the veil" (Exodus 26:33); ἡ κιβωτὸς τῆς διαθήκης "the ark of the covenant".
- σκηνή "tent" (Hebrews 8:2, 5; 9:2-11, 21; 11:9; 13:10), gloss "tabernacle" at first use and a note: the Greek word is
  the one for the tabernacle and for any tent (John 1:14 "pitched his tent" is the verb). The Heb writers add the entry.
- διαθήκη "covenant" everywhere, except Hebrews 9:16-17, where it is "a will" with the gloss "the same Greek word as
  'covenant'" and a note giving the readings (a will; a covenant ratified by a death). Heb 08-13 adds the entry.
- τελειόω / τέλειος "make perfect / perfect" in Hebrews, gloss "bring to completion, make fit for the goal" and a note
  at first use (2:10); in James τέλειος "complete" (1:4, 17, 25; 3:2) with the note on the "perfect" reading.
- ἔργα "works" (James 2; matches terms.json "works of the law", which James does not use); δικαιόω "justify"
  (terms.json gloss). Both James and Paul's Plain English Translation must be quoted exactly where one is set against the other
  (Romans 3:28; 4:3; Galatians 2:16).
- γέεννα "Gehenna" (James 3:6, with the note); ταρταρόω (2 Peter 2:4) "threw them into Tartarus", gloss "the deepest
  pit of the underworld in Greek myth"; ᾅδης "Hades" if it appears.
- ἐπίσκοπος "overseer" (terms.json lists 1 Peter 2:25); πρεσβύτεροι "elders"; ὁ πρεσβύτερος in 2 and 3 John "the
  Elder" (capital E, a title), with a note.
- ἀντίχριστος "antichrist" lower case ("antichrist is coming", "many antichrists", 1 John 2:18; "the antichrist",
  2:22; 4:3; 2 John 7), with a note on the first use and a link to the `antichrist` topic. Never "the Antichrist" in
  the Plain English Translation.
- κόσμος "the world"; σάρξ "flesh" (terms.json); ζωὴ αἰώνιος "eternal life" (terms.json); λόγος "word" / "the Word"
  only where a person is meant (1 John 1:1 "the word of life": the writer decides and notes the readings).
- παρουσία "coming" (brief-pauline2.md; James 5:7-8; 2 Peter 1:16; 3:4, 12; 1 John 2:28), with the gloss "arrival,
  a royal visit" at first use in each book.

**Parallels with books on the site (their Plain English Translation is the model; quote it exactly in notes).**
- 2 Peter 2:1-3:3 and Jude 1:4-18 (Jude is published): follow Jude's Plain English Translation where the Greek matches, differ exactly
  where it differs. The `jude-and-2-peter` topic exists: contribute to it, do not create another.
- Old Testament quotations, very many in Hebrews and 1 Peter: translate the Greek as it stands (usually the
  Septuagint), quote the site's Plain English Translation of the Old Testament verse exactly in the note and say where they differ. Model
  verses already on the site include Psalm 2:7, 8:4-6, 40:6-8, 95:7-11, 110:1, 4; Genesis 14:18-20; 15:6; Jeremiah
  31:31-34; Habakkuk 2:3-4; Isaiah 28:16; 53; Proverbs 3:11-12, 34; 10:12; 11:31; Leviticus 19:18; Exodus 19:6; 25:40;
  Deuteronomy 32:35-36, 43; 2 Samuel 7:14; Haggai 2:6. Grep each before quoting it; if a book has no Plain English Translation yet, say
  "the Hebrew reads" and quote nothing as the site's.
- Gospels and Acts: James and the Sermon on the Mount (James 5:12 and Matthew 5:34-37; James 1:5 / Matthew 7:7;
  James 2:5 / Luke 6:20; James 4:9 / Luke 6:25), 2 Peter 1:16-18 and the transfiguration (Matthew 17:1-8), 1 Peter 5:13
  and Mark (`gospel-of-mark`), 1 John and the Gospel of John (1 John 1:1-4 and John 1:1-14; 1 John 2:7-8 and John 13:34;
  1 John 3:23 and John 15:12), Acts 15 (James' speech, Silas) and Acts 12:12 (Mark). Acts' Plain English Translation is the model for names.
- Pairs written in this round at the same time (no Plain English Translation to copy yet: translate from your Greek and list the pair in
  your report; the lead aligns them): 1 Peter 1:1 / 2 Peter 3:1; 1 Peter 2:6-8 / Romans 9:33 (published: quote it);
  James 4:6 / 1 Peter 5:5 (both quote Proverbs 3:34: same wording where the Greek is the same); James 5:20 / 1 Peter
  4:8 (Proverbs 10:12); 1 John 2:7-8 / 2 John 5; 1 John 4:1-3 / 2 John 7; 2 John 12 / 3 John 13-14 (nearly word for
  word: one writer does both, so make them match where the Greek does); Hebrews 13:23 (Timothy) and the Pauline names.

**Names.** Use the spellings Acts and the published letters use (Timothy, Silvanus with the note that he is Acts'
Silas, Mark, Abraham, Isaac, Jacob, Esau, Moses, Aaron, Melchizedek, Rahab, Gideon, Barak, Samson, Jephthah, Samuel,
Abel, Cain, Enoch, Noah, Lot, Balaam son of Bosor (2 Peter 2:15: Bosor, not Beor, a variant), Gaius, Diotrephes,
Demetrius, Job, Elijah). Grep the Old Testament and Acts' Plain English Translation before spelling one.

**Authorship and date (C lens, full weight, never flattened).** Hebrews is anonymous (Paul, Apollos, Barnabas,
Priscilla, Luke, Clement: the ancient and modern proposals; Origen's "who wrote it God knows": verify the wording in an
opened source). James: the brother of the Lord (traditional, and many scholars), or a later writer in his name.
1 Peter: Peter, Peter through Silvanus, or a later Petrine circle. 2 Peter: the most widely doubted book of the New
Testament (its relation to Jude; 3:15-16 on Paul's letters as a collection; the late and limited early attestation),
with its defenders. 1-3 John: the apostle, the Elder (Papias' "John the Elder" via Eusebius: verify), or a Johannine
school. State each view with its best arguments and its named scholars, say which is the majority in critical
scholarship and which is the traditional view, and do not rank the churches. The Plain English Translation follows the text as written.
Never cite a scholar's view from memory: check it this session or leave it out (STYLE.md rule 2).

**The canon.** Hebrews, James, 2 Peter, 2 and 3 John (with Jude and Revelation) were the disputed books
(*antilegomena*) for some churches for a long time; Eusebius' lists, Luther's prefaces of 1522 on Hebrews, James, Jude
and Revelation and his order of the books (verify each in an opened text), the Syriac Peshitta's shorter canon (verify).
Each book.json and the `canon` topic say so for that book, as Jude does. This is a T and C matter, never a reason to
treat the text as less than Scripture for the churches that hold it (all of them today).

**Where Christians differ.** Reuse existing `top` ids (grep `"top"` in content/books/*/chapters.json and parts):
perseverance (Hebrews 6:4-6; 10:26-31; 2 Peter 2:20-22; 1 John 3:9), justification (James 2:14-26), priesthood
(Hebrews 7; 1 Peter 2:5, 9), lords-supper (Hebrews 13:10 "we have an altar"), sacrifice (Hebrews 9-10 and the Mass),
descent-into-hades (1 Peter 3:18-20; 4:6), baptism (1 Peter 3:21), healing and anointing (James 5:14-15; anointing of
the sick), church-discipline (James 5:16 confession to one another; 1 John 5:16 sin "that leads to death"), theosis
(2 Peter 1:4), peter (1 Peter 5:1, 13 and Rome), brothers-of-jesus (James 1:1), trinity (1 John 5:7-8), canon,
scripture-and-tradition (2 Peter 1:20-21; 3:16), intermediate-state, purgatory (1 Corinthians 3 is the usual text;
check before using it here), second-coming, new-creation (2 Peter 3:10-13), women-in-ministry and headship (1 Peter
3:1-7), household-codes and slavery (1 Peter 2:18-3:7). A new `top` must be an existing topic id or a proposal you
create. Sourced to the churches' own documents and recognized teachers, checked this session. Never rank, and never end
a card with the writer's verdict.

**Audience.** Each of these letters is written to a group the text describes only partly: "the Hebrews" (the title is
later; who they were, Jewish Christians tempted back, or a mixed church, in Rome or Jerusalem: views), "the twelve
tribes in the Dispersion" (James), "the chosen resident aliens of the Dispersion in Pontus, Galatia, Cappadocia, Asia and
Bithynia" (1 Peter), those "who have received a faith as precious as ours" (2 Peter), a church split by people who
"went out from us" (1 John), "the chosen lady and her children" (2 John), and Gaius (3 John). Settings for every
section: who, what problem, what the first readers would have heard. Hebrews calls itself "a word of exhortation"
(13:22): it is a sermon with a letter's ending, and its settings say so.

**Hostile-review priorities** (for later): invented sources or quotations, drift toward the NIV/ESV, manuscript claims
without a source, flattening the authorship and canon questions, James set against Paul (or Paul against James)
one-sidedly, the warning passages in Hebrews read through only one tradition, 1 Peter 3:19 and 3:21 and 1 John 5:7-8
handled with only one view, Old Testament quotations whose note does not quote the site's Plain English Translation exactly, 2 Peter not
matching Jude where the Greek matches.

## Lead decisions (2026-10-29)
- **ἀπ' ἀρχῆς** "from the beginning" in 1-3 John (1 John 1:1 echoes John 1:1 "In the beginning"); John 8:44 and 15:27 keep "from the start". **ἐντολή** "command" across 1-3 John and 2 Peter (as John's Plain English Translation and the site); **ἀληθινός** "real" (John 1:9; 17:3).
- **περιπατέω** "walk around" only with light and darkness (John 8:12; 1 John 1:6-7; 2:11); "walk" otherwise.
- **Hebrews:** παρρησία "boldness" (ὑπόστασις 3:14 "confidence"); παράβασις "transgression" (Romans 4:15); εὐλάβεια "reverence"; Psalm 110:1 "a footstool for your/his feet" (Acts 2:35, not the Psalm's "stool"); εἰς τὸ διηνεκές "for all time"; ἐκκλησία "assembly" at 2:12 and 12:23; μονογενής 11:17 "his only son" (John 3:16); 11:11 keeps the SBL dative (Abraham as subject: καταβολὴ σπέρματος is a father's part; 11:12), the nominative readings in the variant.
- **2 Peter 3:10** keeps εὑρεθήσεται against NA28/ECM's conjecture, rendered "will lie exposed" with the literal gloss.
- **1 Peter 3:21** baptism is the subject; **5:12** "I have written" leaves secretary and courier open.
- **Cards not duplicated:** Hebrews 6:4-6 is the perseverance card for Hebrews 10:26-31 and 2 Peter 2:20-22; Hebrews 7:23-28 (ordained priesthood) and 1 Peter 2:5-9 (priesthood of all believers) point to each other; 1 John 1:9 points to John 20:23 and James 5:16.
- **Remonstrants** have no TRADITIONS name; the 1 John 2:2 deep dive carries them. Add a name to build.js if a card needs them as a row.
