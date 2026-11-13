# Ignatius to the Philadelphians: brief for the Troas writer (first letter)

Book id `IPh` (works.json `ignatius-philadelphians`, proposed in `content/proposals/works/works.json`, tier `early`). 11 chapters,
23 verses plus `1:0`, the greeting ("to the church of God the Father and of the Lord Jesus Christ, which is in Philadelphia of
Asia", ἐν Φιλαδελφίᾳ τῆς Ἀσίας). Written from Troas (11:2, "The love of the brothers in Troas greets you; I am writing to you from
there by Burrhus"; Lake's introduction, vol. 1 OCR lines 8694-8698, following Eusebius). The letter speaks of a visit:
Ignatius had been in Philadelphia, "cried out while I was among you" (7:1), and some suspected he had been told beforehand of "the
division of some" (7:2), though he says he found among them not division but "filtering" (3:1). It warns
against anyone who "interprets Judaism" to them (6:1), and holds the much-discussed exchange about "the archives" (8:2). Its city
is the Philadelphia of Revelation 3:7-13 (the site's `philadelphia` topic).

**One writer, two letters.** You write `content/books/IPh/` (flat, no parts/) first and then `content/books/IPo/` (flat;
`brief-ipo.md`), and own both book.json and sources.json files. You write the batch's main contributions to `philadelphia` and
`polycarp`; the Smyrna writer enters the batch's new terms (re-read `content/proposals/works/terms.json` before you write, and keep
to it). Each letter gets its own hostile reviewer afterwards.

**Read first:** `tools/brief-apfathers3.md` (shared decisions; it wins over this brief), `tools/brief-apfathers2.md` and
`tools/brief-apfathers.md` (the sections it names), `tools/brief-ipo.md`, `tools/brief-img.md` (the other Judaism letter, written at
the same time by the Smyrna writer), the three published letters (`content/books/IEp/`, `IRo/`, `ISm/`, with their review.md files;
Smyrnaeans was written from Troas at the same time as this letter), `tools/agent-writer.md`, `tools/agent-writer-works.md` with every
"Lessons from" paragraph, `bible/STYLE.md`, and Lake's introduction to Ignatius (lines 8683-8950).

## Parts
None: `content/books/IPh/` flat, 1:0-11:2. Sections (from the Greek and Lake's English, vol. 1 OCR 12414-12975): the greeting, with
"especially if they are one with the overseer, and the elders and deacons with him" (1:0); the overseer who has his ministry "not
from himself nor through men", whose silence does more than others' talk, tuned to the commandments "as a lyre to its strings" (1);
children of the light of truth: flee division; follow where the shepherd is; wolves and "God's runners" (2); keep away from the
plants Jesus Christ does not tend, "not the Father's planting"; not division but filtering; whoever repents and comes to the unity
of the church; "if anyone follows a maker of splits, he will not inherit the kingdom of God" (3); one thanksgiving, one flesh, one
cup, one altar, one overseer (4); taking refuge in the gospel as the flesh of Jesus and in the apostles as the council of elders;
the prophets (5); if anyone interprets Judaism to you; "tombstones and graves of the dead"; the ruler of this age; he was a burden to
no one (6); the Spirit is not deceived; "I cried out while I was among you ... with God's voice: Pay attention to the overseer"; the
Spirit preaching (7); where there is division God does not live; the archives: "It is written"; "That is the question"; "my archives
are Jesus Christ" (8); the priests good, the high priest better, the door of the Father; the gospel's special mark: the coming,
suffering and resurrection (9); the church in Antioch at peace: elect a deacon as God's envoy; the nearest churches sent overseers,
others elders and deacons (10); Philo the deacon from Cilicia and Rheus Agathopus; those who dishonored them; greetings from Troas
by Burrhus; farewell (11).

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/IPh.json` `grc`, with `fixed`: 11 slips corrected in 9 verses, among them 3:1
  ἀποδιϋλισμόν, which the digital file had garbled), the short (middle) recension, witnesses G, g, L, A, S.
- Lake's footnotes (`texts/src/IPh.app.json`, 5): enter as variants those that change the meaning, witnesses exactly as Lake gives
  them: 1:1 (μάταια GL, om. A, πλέον g; "Lightfoot favours the reading of A"), 2:1 (A "light and truth"; "Lightfoot thinks that
  φωτός is an early gloss"), 5:1, 8:2 (πράσσειν GL, πράσσετε GA), 11:1 (Ῥέῳ: "Lightfoot emends to Ῥαίῳ on the grounds that this form
  is justified by inscriptions, while Ῥέῳ is unknown, and g which has Γαΐῳ implies this reading"; compare the published Smyrnaeans
  10:1 and its variant on the same man).
- English check texts: Roberts and Donaldson's shorter column (`texts/en/IPh.json`) and Lake's English on his facing pages, with his
  English footnotes (vol. 1 OCR): 3:1 "filtering", "The meaning is that the Christians at Philadelphia had 'filtered out' the impurity
  of heresy from their church" (line 12535); 5:2 "He probably means the Christian prophets: cf. the Didache and Hermas" and "An
  alternative translation is 'let us love'" (12631-12633); **8:2** (12809-12814, below).

## Lenses (fixed)
- **H Historical-critical**: Philadelphia and Ignatius's visit (7:1-8:1); who "interprets Judaism" and who argued from "the
  archives" (Lake: "the charters" probably means the Old Testament; other views only from works opened; whether these are the same
  people as the docetists Lake says "is disputed", lines 8745-8749); Philo and Rheus Agathopus, who also appear in Smyrnaeans 10:1;
  the church at Antioch at peace (10:1), as in Smyrnaeans 11:2 and Polycarp 7:1.
- **N New Testament**: Galatians 1:1 (Paul an apostle not from men nor through a man) beside 1:1; Matthew 15:13 at 3:1 (Lake's margin) and 23:24 for
  "filtering"; 1 Corinthians 6:9-10 at 3:3 and 10:16-17 at 4:1 (Lake's margin); John 3:8 and 1 Corinthians 2:10 at 7:1 (Lake's margin);
  John 10:7, 9 ("I am the door") and Hebrews 4:14-5:10 beside 9:1; Revelation 3:7-13 (the church in Philadelphia; 3:9 "those who say
  they are Jews and are not") beside 6:1, any link between the two only from a source opened; the site's wording each time.
- **C Church order and the churches**: the one thanksgiving, one cup, one altar, one overseer (4:1) and the existing cards on the
  Supper; the overseer "not from himself nor through men" (1:1); prophetic speech in the assembly (7:1-2: Ignatius speaking "with
  God's voice"); Scripture, "the archives" and the gospel (8:2; 9:2) and the existing cards on Scripture and tradition; churches
  sending overseers, elders and deacons (10:1-2).
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers3.md's list, above all: "Ignatius, also called Theophorus" (1:0); "overseer", "council of elders", "deacons" (1:0;
4:1; 7:1; 10:1-2); "forbearance" for ἐπιείκεια (1:1-2); "silence" (σιγῶν, 1:1); ὡς χορδαῖς κιθάρα (1:2) as the published Ephesians
4:1 ("as strings are to a lyre"); "division" for μερισμός (2:1; 3:1; 7:2; 8:1) and "unity" (2:2; 3:2; 5:2; 8:1; 9:1); "God's
runners" (2:2); "the Father's planting" (3:1, as the Smyrna writer's Trallians 11:1: agree the wording with him through terms.json);
"filtering" (3:1); σχίζων (3:3) "a maker of splits" (the σχίσμα "split" entry); "the thanksgiving", "altar", "fellow slaves" (4:1);
"the gospel" lowercase, as the published Smyrnaeans 7:2 (5:1-2; 8:2; 9:2); "Judaism", "Christianity" (6:1); "the ruler of this age"
(6:2); "the archives", "It is written", "That is the question" (8:2); χριστομαθία (8:2) "the teaching of Christ" or "learning Christ",
one choice with a gloss; "high priest", "priests" (9:1); παρουσία (9:2) "coming" (check the site's rendering of παρουσία in the
Gospels and Paul and say which you follow); ἀπάρτισμα ἀφθαρσίας (9:2) "the completion of incorruption" (ἀφθαρσία "incorruption");
"elect" for χειροτονῆσαι and "God's envoy" (10:1); "Farewell" (11:2).

## Quotations
Follow brief-apfathers.md and brief-apfathers3.md. 3:3 takes up 1 Corinthians 6:9-10 ("Do not be deceived ... will not inherit the
kingdom of God"): the site's wording where the Greek agrees, and say where Ignatius changes it. 7:1 echoes John 3:8 ("it knows where
it comes from and where it is going"). 8:2 has "It is written" without quoting anything: no quotation note there; the note is on what
is meant (below).

## Places that need full treatment
1:0-1:2 (the greeting's condition "especially if they are one with the overseer"; the overseer's ministry "not from himself nor
through men nor out of vanity": the note sets it beside Galatians 1:1; his silence; the lyre); 2:1-3:3 (shepherd and wolves;
"filtering" and Lake's footnote; "whoever repents and comes to the unity of the church"; the splitter will not inherit the kingdom:
topic `false-teachers`); **4:1** (a `deep` note: "Be eager to use one thanksgiving: for there is one flesh of our Lord Jesus Christ
and one cup for union with his blood, one altar, as there is one overseer with the council of elders and the deacons"; a `views`
note giving how the churches read it, each from a source that discusses Ignatius here, pointing to the site's cards on Christ's
presence in the Supper (Exodus 1-15, John 6), on who may lead it (the published Smyrnaeans 8) and on how often (Acts 20:7): no new
card); 5:1-2 (the gospel "as the flesh of Jesus" and the apostles "as the council of elders"; the prophets, with Lake's two footnotes);
**6:1** (a `deep` note: "If anyone interprets Judaism to you, do not listen to him. It is better to hear Christianity from a man who
is circumcised than Judaism from one uncircumcised": what the sentence tells us about the people at Philadelphia, each reading from
a work opened; the `anti-judaism` rules; Revelation 3:9 as a cross-reference only); 6:2-6:3 (the ruler of this age; a burden to no
one); **7:1-8:1** (a `deep` chapter page: Ignatius's prophetic cry "with God's voice", "Pay attention to the overseer and the council
of elders and the deacons", "Do nothing without the overseer, keep your flesh as God's temple, love unity, flee divisions"; some
suspected he had been told beforehand; topics `prophecy`, `holy-spirit` (search); 8:1 "the council of the overseer"); **8:2** (a
`deep` chapter page and the fullest note in the book: the Greek; Lake's footnote, "The Greek, without punctuation, is as ambiguous
as the English: 'If I find it not in the charters,—in the Gospel I do not believe,' or 'If I find it not in the charters, in the
Gospel, I do not believe.' Probably the former should be preferred on the ground that 'the charters' probably means the Old
Testament" (OCR 12809-12814); the Plain English Translation follows one punctuation and the note gives the other; who the
opponents were and what "the archives" meant, each view only from a work opened; "It is written" / "That is the question"; "for me the
archives are Jesus Christ; the untouchable archives are his cross, his death, his resurrection, and the faith that comes through him";
a `views` note on how the churches read the verse today, each from a source that discusses it, pointing to the site's cards on
Scripture and tradition (Matthew 15, 2 Thessalonians 2:15, 1 Timothy 3:15): no new card; topic `scripture-and-tradition`, `canon`);
9:1-2 (the priests and the high priest, "the door of the Father" for Abraham, Isaac, Jacob, the prophets, the apostles and the
church; the gospel's special mark; topics `priesthood`, `abraham` (search), `gospel` (search)); 10:1-2 (Antioch at peace; a deacon
elected as God's envoy; the nearest churches sent overseers: the note says only what the verse says, and points to the published
Smyrnaeans 11:2 and to Polycarp 7:2 and 8:1); 11:1-2 (Philo from Cilicia, Rheus Agathopus and the variant; "those who dishonored
them"; Burrhus, as in Smyrnaeans 12:1).

## Who it was for, and why
`settings` for the greeting and each section (Ignatius at Troas, after a visit to Philadelphia on the road, writing back to its
church: 7:1-8:2; 11:2). `readers` by evidence: the Philadelphian church and its overseer, who is not named (check); those who
caused division (3:1-3; 7:2; 8:1) and those who argued from "the archives" (8:2), as the letter describes them; Philo and Rheus
Agathopus, who followed Ignatius and were dishonored by some (11:1); Lake on the letter's purpose.

## Where Christians differ
No book card, and no new chapter card (brief-apfathers3.md, Where Christians differ). 4:1 and 8:2 get `views` notes pointing to the
existing cards; 1:1 and 10:2 point to the bishops-and-elders cards.

## Topics
Main contributions: `philadelphia` (the city in Revelation 3 and in Ignatius: the batch's main one; the core has no aka: propose any
change in topics.md), `scripture-and-tradition` and `canon` (8:2), `lords-supper` (4:1), `judaizers`, `anti-judaism` and
`circumcision` (6:1; the Smyrna writer has the main contribution and proposes the Ignatius section), `prophecy` (5:2; 7:1-2),
`priesthood` (9:1), `elders` and `deacons`, `false-teachers` (2-3), `unity` or `church` (search), `satan` (6:2), `antioch` (10:1),
`ignatius` (add to the Smyrna writer's section proposal in topics.md), `apostolic-fathers` (short, in topics.md). Re-check every
title and aka before writing.

## book.json and sources.json (you)
Lead, facts, authorship (as the published letters: Eusebius 3.36 in Greek, Polycarp to the Philippians 13:2, Lake's summary of the
recensions; re-check every claim you carry over), audience, outline, the three lenses, sections (the visit to Philadelphia and the
letter from Troas; the overseer, the one thanksgiving and the one altar; "Judaism" and the archives; the prophets and the gospel; the
envoy to Antioch), spec, prompts, topics, sources, links, and the `canon` block (brief-apfathers3.md). No traditions card. Source
keys: reuse `lake-apostolic-fathers`, `roberts-donaldson-ignatius`, `lightfoot-ignatius-1889`, `eusebius-greek-lake-3` (IRo),
`eusebius-history`, `polycarp-philippians`, `catholic-encyclopedia-ignatius`, `oca-ignatius`, `lcms-southern-ignatius`,
`usccb-calendar-2026-ignatius`, `zanartu-ignatius-2009`, the global `ignatius` (its text names Ephesians and Philadelphians), and the
confession keys the site has (search before adding). New ones in `content/books/IPh/sources.json`.

## Atlas (after writing; brief-apfathers3.md)
Places the text names: Philadelphia in Asia (1:0), Antioch in Syria (10:1), Cilicia and Syria (11:1), Troas, the Ephesians and
Smyrnaeans (11:2).

## When you finish
`VERBOSE=1 node tools/build.js --check IPh` at 0 errors and no warnings; your line in `content/books/IPh/progress.md`; the citation
list and suggested back-links in `content/proposals/works/build.md` (the site cites "Philadelphians 11" four times, "Philadelphians 4",
"Philadelphians 6:1" and others: list each with whether it parses and whether quoted wording matches). Report counts, every departure
from Lake, the slips found, the punctuation you chose at 8:2 and why, and anything uncertain. Then go on to Ignatius to Polycarp
(`brief-ipo.md`).
