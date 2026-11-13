# Epistle of Barnabas: brief for the part writer and the book-level writer

Book id `Bnb` (works.json `epistle-of-barnabas`, tier `early`). 21 chapters, 194 verses; the greeting is 1:1 (there is no
1:0). An anonymous letter-treatise, called after Paul's companion Barnabas by an early tradition that Lake, in line with most
scholars, does not accept (his introduction: "generally regarded as impossible to accept"). Its main object, in Lake's words,
"is to warn Christians against a Judaistic conception of the Old Testament": it reads the sacrifices, fasts, the scapegoat,
the red heifer, circumcision, the food laws, the Sabbath and the Temple as figures of Christ and the church, says the Jews
lost the covenant at Sinai (4:6-8; 14:1-4), and ends with its own form of the Two Ways (18-20). It is the site's most
anti-Jewish writing so far: translate it plainly and fully, and say plainly in notes where it conflicts with the 66 books
(Romans 3:1-2, 9:4-5 and 11:1-2, 28-29 above all) and how Jews and today's churches answer it.

**Read first:** `tools/brief-apfathers.md` (shared decisions; it wins over this brief), `tools/agent-writer.md`,
`tools/agent-writer-works.md` with every "Lessons from" paragraph, `bible/STYLE.md`, and Lake's introduction to Barnabas
(vol. 1 OCR, lines 17009-17140).

## Who writes what (both at the same time)
- **Part `01-21`** (`content/books/Bnb/parts/01-21/`, 194 vv): plain.txt, notes, variants, glosses, chapters, topics,
  sources.json, review stage later. Order: chapters 1-17 first, then 21, then 18-20 last (the Two Ways: brief-apfathers.md
  says how to use the Didache writer's 1-6 as the model). One part is enough for 194 verses because the book-level files go
  to a second writer; if you are cut off, a fresh agent continues from the files written.
- **Book-level writer** (the same agent writes 1 Clement's book.json and sources.json; read `brief-1cl.md` too):
  `content/books/Bnb/book.json` and `content/books/Bnb/sources.json`, the `apostolic-fathers` and `clement-of-rome` topic cores,
  and the citation list for Barnabas in `content/proposals/works/build.md`.

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/Bnb.json` `grc`, with `fixed`; the slip `οἲ` at 11:8 is not fixed: check the scan and
  report it). Lake's witnesses, as his introduction lists them (opened for this plan): Codex Sinaiticus (fourth century; in
  the digital footnotes written N, in Lake's print ℵ), the Codex Constantinopolitanus (C), eight Greek manuscripts from one
  ancestor (G) in which Polycarp to the Philippians 9 runs straight on into Barnabas 5, and a Latin version (L) in one
  manuscript that stops at the end of chapter 17, so it lacks the Two Ways ("the general opinion", says Lake, is that the
  Latin left it out rather than that the Greek added it). So chapters 1-4 rest on ℵ, C and L only, and 18-21 on Greek alone.
- Lake's footnotes (`texts/src/Bnb.app.json`, 36 notes, 140 margin references) record where the witnesses differ: for example
  1:6 (Lake: "The text of this whole passage is confused"), 3:4 (healings or garments), 3:6 (newcomers or proselytes), 5:1,
  6:3 (G's "will hope in him" against "believes in him"), 9:2, 10:5, 12:10, 14:1 (G emends the grammar), 19:7 (G adds a
  clause from the Apostolic Constitutions). Each that changes the meaning gets a variant entry with the witnesses exactly as
  Lake gives them; where Lake prints a reading against his manuscripts, call it "Lake's text".
- English check text: Lake (`texts/en/Bnb.json`), a Wikisource copy not yet proofread there: check a doubtful word against
  Lake's facing page in the scan.
- Codex Sinaiticus is online (codexsinaiticus.org): where you cite what ℵ reads, you may check it there; never cite a reading
  you did not see in Lake's apparatus or the codex.

## Lenses (fixed)
- **H Historical-critical**: date (4:4-5's ten kings, 16:3-4's rebuilding of the Temple; Lake's two theories), place (Lake:
  a community "in which Alexandrian ideas prevailed", neither destination nor origin definable), author, the sources it
  quotes (testimony collections, the Two Ways), the witnesses.
- **J Jewish practice and the parting of the ways**: what Barnabas says Jews did or believed, beside what Jewish sources say
  (the scapegoat and the red heifer rites beside Mishnah Yoma and Parah, only from a text you open, e.g. on Sefaria), the
  rebuilding hopes of the time, and how Jewish scholars read the book.
- **N New Testament**: Hebrews (sacrifices, covenant, rest), Paul on circumcision, the law and Abraham (Romans 2-4, 9-11;
  Galatians 3-4), the Gospel sayings it quotes (4:14 "many called, few chosen" with "as it is written"; 5:9), 1 Peter 2.
- **T Typology and allegory**: the method itself (the "knowledge" of 1:5 and 9:8, the figure, the counting of letters in 9:8,
  the animal lore of chapter 10, Philo's allegory where you open him), and how later Christian readers took it up or judged it.
- **C Christian reception**: Clement of Alexandria and Origen (as Lake reports, then in their texts opened), Codex Sinaiticus,
  the canon lists, and how today's churches read its teaching on Israel and the law, each from a source that addresses it.
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers.md's list (γνῶσις "knowledge"; τύπος "figure"; κύριος "Lord", never "the LORD"; παῖς "servant" for Jesus;
the Two Ways renderings) and, for this book: τέκνα "children" (the writer's address, 7:1; 9:7; 15:4); ἀδελφοί "brothers"
(as the site's letters); ὁ λαός "the people" (Israel; "the new people" 5:7, 7:5), οἱ ἐκεῖνοι "they / those people" kept as
the Greek has it (Barnabas seldom says "the Jews": never add the word); διαθήκη "covenant"; ὁ Μέλας (4:9; 20:1) "the Black One",
a name for the devil, with a note; ὁ πονηρὸς ἄρχων "the evil ruler"; σάρξ "flesh" (topic `flesh`), ἐν σαρκί "in the flesh";
ξύλον "tree" where the Greek echoes Deuteronomy 21:23 (8:5; 12:1, 7), as the site's Acts 5:30 and Galatians 3:13; σταυρός
"cross"; ἡ ὀγδόη ἡμέρα "the eighth day"; ἡ καταβολή / ὁ καινὸς λαός as the context needs. Names as English Bibles have them
(Joshua for Ἰησοῦς υἱὸς Ναυή, with a note on the shared name Jesus, 12:8-10; Amalek; Rebekah; Ephraim and Manasseh).

## Quotations
Barnabas quotes Isaiah, Jeremiah, the Psalms, Exodus, Leviticus, Deuteronomy and Daniel at length, often in forms no Bible
has, or as Lake's margin shows, joined from several places; some quotations come from no known book (6:13 "I make the last
things like the first"; 7:4 and 7:8 on the goat; 12:1 "when a tree is bent and rises"; 16:5 a "Scripture" about the
sheep and the tower). Follow brief-apfathers.md (Scripture quoted inside these books) exactly; candidates outside the 66
(1 Enoch 89 for 16:5, which the site's 1 Enoch notes already tie to Barnabas, key `barnabas`; 4 Ezra for 12:1; the "Enoch"
of 4:3) only after you open them, quoting their site wording where the site has the book. Read the site's 1 Enoch 83-90
notes and chapter pages that cite Barnabas first.

## Parallels (check each in an open text; the site's wording is the model)
Isaiah 1:11-14, 28:16, 33:16-18, 40:12, 45:1-3, 49:6, 50:6-9, 53:5-7, 58:4-10, 66:1; Jeremiah 4:3-4, 7:22-23, 9:25-26;
Psalm 1:3-6, 22:16-22, 51:17, 118:12, 22, 24; Genesis 1:26-28, 2:2-3, 14:14 and 17:23-27 (the 318 of 9:8), 25:21-23, 48:9-19;
Exodus 17:8-14, 24:18, 31:18, 32:7-19, 33:1-3; Leviticus 11, 16, 23:29; Numbers 19, 21:6-9; Deuteronomy 9:9-17, 10:16, 14,
27:15; Daniel 7:7-8, 24 (4:4-5); Zechariah 13:7; Matthew 9:13, 22:14, 26:31; John 3:14; Romans 4:11-17, 9:7-13;
Galatians 4; Hebrews 4:1-11, 8-10; 2 Peter 3:8 and Psalm 90:4 (15:4: a day as a thousand years); 1 Peter 2:6-8.

## Places that need full treatment
- 1:1-8 (greeting and purpose: "perfect knowledge" alongside faith; Lake's "confused" 1:6).
- 2-3 (God does not want sacrifices or fasts): the prophets' critique (Isaiah 1, 58; Jeremiah 7) beside Barnabas's reading
  that the rites were never meant; a `canon` note on how far the prophets meant this.
- 4 (the last stumbling block; Daniel's ten kingdoms and the small king, the dating argument; 4:6-8 "the covenant is ours";
  4:14 "as it is written, many called, few chosen", the first time a Gospel saying is introduced with "it is written"
  outside the New Testament, if a source you open says so).
- 5-6 (why the Lord suffered in the flesh; the land flowing with milk and honey as the new creation, 6:8-19; 6:13).
- 7-8 (the fast, the two goats, the scarlet wool, the red heifer and the boys who sprinkle): Barnabas's details that
  Leviticus 16 and Numbers 19 do not have, beside the Mishnah, only from texts opened; topics `day-of-atonement`, `red-heifer`.
- 9 (circumcision of the heart; 9:4 "an evil angel" misled them; 9:6 the other peoples who circumcise; 9:7-9 the 318 men as
  the letters for Jesus and the cross, topic `sevens`): a `deep` chapter page.
- 10 (the food laws as moral lessons; the animal lore of the hare, the hyena and the weasel: its sources, only from texts
  opened; topic `food-laws`, with Leviticus 11 and the site's food-law cards).
- 11-12 (water and the cross: baptism; Moses' raised arms, the bronze serpent, Joshua son of Nun named Jesus; "son of David"
  and Psalm 110:1 in 12:10-11).
- 13-14 (which people is the heir: Rebekah's two peoples, Ephraim and Manasseh, Abraham; "the covenant given to us").
- 15 (the Sabbath: six days as six thousand years, God's rest at the end, "the eighth day" kept with joy, the day Jesus rose
  "and was revealed and went up to heaven" 15:9): topics `sabbath`, `millennium`; the Revelation 1 and Revelation 20 cards.
- 16 (the Temple: built by those who will tear it down, 16:3-4 "the servants of their enemies will rebuild it"; the true
  temple in the heart, 16:6-10): the dating argument and the events of Hadrian's time, only from sources opened.
- 17-21 (the transition, the Two Ways of light and darkness with angels over each, 18:1; the commandments, 19; the way of the
  Black One, 20; the close, 21): Two Ways rules in brief-apfathers.md; the Community Rule's two spirits only if opened.

## Who it was for, and why
`settings` for the greeting, each argument block (the writer to "children", "brothers"), the quotations he builds (the voice
of "the Lord" or "the prophet" in his collage, and who speaks in the source), and the Two Ways. `readers` by evidence:
Christians the writer knew and had taught (1:4-5), apparently tempted to share the covenant with the Jews (4:6) and to
keep the Jewish reading of the law; Lake's "Alexandrian ideas"; the dates proposed and who proposes them, from sources opened.

## Where Christians differ
No book card (brief-apfathers.md). No chapter card is planned: the questions Barnabas raises (the church and Israel, the
food laws, circumcision, the Sabbath and Sunday, the millennium) already have site cards; point to them. No church today
holds Barnabas's own claim that Israel never had the covenant, so there is no card on it: a `canon` note says plainly that
it conflicts with Romans 9-11, with the churches' statements on Israel where you open them (for example the Second Vatican
Council's <i>Nostra Aetate</i> 4, which the site may already cite: search the sources).

## Topics
The part writer contributes (brief-apfathers.md lists the main ones): `two-ways` (18-20), `typology`, `allegorical-reading`,
`sevens`, `millennium`, `day-of-atonement`, `red-heifer`, `food-laws`, `circumcision`, `sabbath`, `temple`, `covenant`,
`new-covenant`, `anti-judaism`, `church-israel`, `law-of-moses`, `baptism` (11), `crucifixion` (12), `moses`, `abraham`,
`jacob`, `joseph` (only where it applies), `daniel`, `four-kingdoms` (4:4-5), `servant-of-the-lord` (5), `new-creation` (6),
`abortion` (19:5), `angels` (18:1), `devil` or the site's topic on Satan (search first), `enoch` and `books-outside-the-bible`
only if the quotation material needs them, `canon` and `apostolic-fathers` (short sections). No new cores by the part writer.
The book-level writer writes the `apostolic-fathers` and `clement-of-rome` cores (brief-apfathers.md, Topics) and a short
`barnabas` contribution on why the letter carries his name.

## book.json (book-level writer)
Lead, facts, authorship (the attribution and why it is set aside, with Lake; Clement of Alexandria's attribution to "the
apostle Barnabas" only from the passage opened), audience, outline (the two halves: the "knowledge" of chapters 1-17 and
the Two Ways of 18-21), the five lenses, sections (the name; the date arguments; Alexandria; the method; the Jews and the
covenant, fairly and plainly; the Two Ways and the Didache; Codex Sinaiticus and the early readers; the Latin and the eight
G manuscripts), spec, prompts, topics, sources, links, and the `canon` block for tier `early` (brief-apfathers.md: what Lake
says, what must be verified). The `reliability` section's point (4) must say plainly where Barnabas conflicts with the 66
books (Israel's covenant, the literal law as an evil angel's deception), and how each church answers, from sources. No
traditions card. Source keys: reuse `lake-apostolic-fathers`, `barnabas`, `eusebius-history`, `clement-stromata`,
`origen-celsus` (if the passage you open is there), `sinaiticus-lake` (only if you open that edition), `jerome-illustrious`;
new ones in `content/books/Bnb/sources.json`.

## Atlas (lead decides; brief-apfathers.md)
Places the text names: Egypt (2:7; 4:8; 9:6; 14:3), Mount Sinai (11:3; 14:2; 15:1), Zion (in quotations: check each verse
by search, 2:4-5 and 6:2 among them), and the peoples of 9:6 (Syrians, Arabs, Egyptians). A places-only file would be small; the lead decides.

## When you finish
Part writer: `VERBOSE=1 node tools/build.js --check Bnb/01-21` at 0 errors and no warnings; your line in
`content/books/Bnb/progress.md`; report counts, every departure from Lake, the slips found, the readings you could not
check, and how far 18-20 follow the Didache writer's wording. Book-level writer: `--check Bnb` clean for book.json, the
citation list and suggested back-links in `content/proposals/works/build.md` (about 60 references on 2026-11-12, in 1 Enoch,
Exodus, Hebrews, Galatians and others), your line in progress.md, and a report.
