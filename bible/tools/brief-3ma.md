# 3 Maccabees: shared brief for the part writers

Book id `3Ma` (works.json `3-maccabees`, tier orth). 228 verses in 7 chapters. Despite the name it has nothing to do
with the Maccabees: it tells how Ptolemy IV Philopator (reigned 221-204 BC), after his victory at Raphia, tried to enter
the temple in Jerusalem, was struck down, and then turned on the Jews of Egypt, who were rescued from drunken
elephants in the hippodrome of Alexandria.

Parts (both write at the same time and cannot see each other):
- 01-03 (92 vv): Raphia and Dositheus (1:1-7), the visit to Jerusalem and the attempt on the sanctuary (1:8-29),
  Simon the high priest's prayer and the king struck down (2:1-24), the decree of registration and the brand of
  Dionysus (2:25-33), the king's letter against the Jews (3:1-30).
- 04-07 (136 vv): the deportation to Alexandria (4), the elephants, the king's sleep and forgetting (5), Eleazar's
  prayer, the angels and the turning (6:1-21), the king's change, the feast and the festival (6:22-41), the letter of
  protection, the punishment of apostates and the return (7).
- book.json and `content/books/3Ma/sources.json`: a separate book-level writer.

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section). Build every verse from
  the Greek in `texts/orig/3Ma.json` (Swete, Codex Alexandrinus; Vaticanus lacks the Maccabees books), literal working
  line in `.scratch/3ma-<part>/`, then Plain, then the drift audit in your head against NRSV, RSV, NETS, the Lexham
  Septuagint and Anderson in Charlesworth's Pseudepigrapha (never write their text). The English check text is
  Brenton (1851, public domain) in `texts/en/3Ma.json`: it follows the Greek's verse numbers. Swete's footnotes in
  `texts/src/3Ma.app.json` (V = Codex Venetus, the other main witness; read the sigla exactly).
- **2:1 is not in Swete's printed text** (`gap` in the texts file; both digital copies of Swete and his footnotes skip
  it). Translate it from a witness you open in this session (Brenton has the verse; give the Greek only if you read it
  in a printed edition or a page that shows it), and add a variant entry saying exactly what each witness has.
- Lenses (fixed): O Orthodox, H Historical-critical, J Jewish reception, N New Testament background (Diaspora Judaism,
  persecution, prayer and deliverance as the first Christians read them), W Western churches (Catholic and Protestant:
  not Scripture).
- The book's Greek is ornate and rhetorical, with rare words; Plain stays at 8th-grade level: break long periods into
  sentences, keep every clause's content, and note a rare word where the meaning is unsure.

## Terms
θεὸς μέγιστος "the Most Great God" (1:9, 1:16, and often: one rendering everywhere, with a note at first use on the
Greek title and its use in Ptolemaic inscriptions only from a source opened); ὕψιστος "the Most High"; κύριος "the
Lord"; ἐλέφαντες "elephants"; λαογραφία "the census"/"registration" (2:28: one rendering, note); πολιτεία / ἰσοπολῖται
"citizenship" / "equal citizens" (2:30: note on Alexandrian Jewish civic status); "the hippodrome" (4:11). Check
content/terms.json and content/proposals/*/terms.json first.

## Parallels and echoes (candidate links: check each in an open text before you assert it)
- 2 Maccabees 3 (Heliodorus struck down in the temple: the site's Plain): compare 1:8-2:24 closely, with a note on
  shared motifs and differences.
- Esther (the decree and counter-decree, the feast, a festival kept yearly: 3:12-29, 6:30-41, 7:1-9 beside Esther
  3:12-15, 8:9-17, 9:17-32; also the Greek Additions to Esther B and E, which are variants in the site's Esther: point
  to them) and Daniel 3 and 6 (Eleazar's prayer 6:6-7 names the three in the furnace and Daniel in the lions' den).
- Simon's prayer (2:2-20) and Eleazar's prayer (6:2-15) rehearse the history of salvation: the giants and the Flood,
  Sodom, Pharaoh and the sea, Sennacherib, Jonah: match the site's Plain where quoted.
- Josephus, Against Apion 2.53-55, tells an elephant story under Ptolemy VIII Physcon: check it in an open text
  before saying anything about it. Polybius 5.79-86 on Raphia and the Dositheus story (1:3; the Dositheus papyrus
  only from a source opened).
- Where the book matches, goes beyond or conflicts with the 66 books, a `canon` note.

## Places that need full treatment
1:10-2:24 (the sanctuary: who may enter, compare Leviticus 16, Hebrews 9:7), 2:28-30 (registration, the ivy-leaf brand
of Dionysus, citizenship for apostates), 4:14-21 (the census fails: the papyrus and pens run out), 5 (the elephants
and the king's sleep and forgetting: providence), 6:16-21 (two angels, "visible to all but the Jews"), 6:36 and 7:19
(the festival: its date and whether anything shows it was kept), 7:10-15 (the killing of apostates: present it
honestly, with how Jewish and Christian readers have judged it).

## Who it was for, and why
Settings for every letter (3:12-29, 7:1-9), speech and prayer (Simon 2:2-20, Eleazar 6:2-15, the king's speeches).
`readers`: Greek-speaking Jews of Egypt (Alexandria), with the main dates proposed (late Ptolemaic or early Roman,
with the census of 24/23 BC as one argument) and who proposes each.

## Topics
Contribute to: ptolemies (check; else use egypt or hellenism), egypt, hellenism, temple, priesthood, prayer, angels
(check), providence, martyrs (check), purim (the festival comparison only), imperial-cult (ruler cult of Dionysus),
apostasy (check). New core only if none fits (check titles and aka in content/topics/ and proposals).

## book.json (book-level writer only)
Lead, facts, authorship, audience, outline, the five lenses, sections (title and why "Maccabees"; history vs story;
Raphia; the Alexandrian Jewish community; links with Esther, 2 Maccabees and the Letter of Aristeas; its place in
Orthodox Bibles), spec, prompts, topics, sources, links. One book traditions card: is 3 Maccabees Scripture? top
`canon` (Orthodox, with each church's practice checked; Apostolic Canon 85's list, checked; Catholic and Protestant
rows). `canon` block per agent-writer-works.md.

## When you finish
`VERBOSE=1 node tools/build.js --check 3Ma/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/3Ma/progress.md. Report counts, decisions, every departure from Swete, anything uncertain.
