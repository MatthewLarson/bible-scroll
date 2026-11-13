# Ignatius to the Romans: brief for the Romans and Smyrnaeans writer

Book id `IRo` (works.json `ignatius-romans`, proposed in `content/proposals/works/works.json`, tier `early`). 10 chapters, 28
verses plus `1:0`, the long greeting to the church "which presides in the region of the Romans". Written from Smyrna (10:1,
"I am writing this to you from Smyrna by the Ephesians") and dated in its last verse (10:3, "the ninth day before the Kalends
of September": what modern date that is only from a source opened). Lake (introduction, vol. 1 OCR lines 8708-8730): "The
'Romans' has the object of preventing the Christians at Rome from making any efforts to save Ignatius from the beasts in the
arena, and so robbing him of the crown of martyrdom"; it is the one letter not written to thank its readers.

**One writer, two letters.** You write `content/books/IRo/` (flat, no parts/) first and then `content/books/ISm/` (flat;
`brief-ism.md`), and own both book.json and sources.json files, as one writer did Polycarp and the Martyrdom. Each letter gets
its own hostile reviewer afterwards.

**Read first:** `tools/brief-apfathers2.md` (shared decisions; it wins over this brief), `tools/brief-apfathers.md` (the
sections it names), `tools/brief-ism.md`, `tools/brief-iep.md` (the Ephesians writer enters the batch's terms: re-read
`content/proposals/works/terms.json` before you write, and keep to it), `tools/agent-writer.md`, `tools/agent-writer-works.md`
with every "Lessons from" paragraph, `bible/STYLE.md`, and Lake's introduction to Ignatius (lines 8683-8950).

## Parts
None: `content/books/IRo/` flat, 1:0-10:3. Sections: the greeting (1:0); his hope to see them, and his fear that their love
will harm him (1-2: "if you are silent about me, I will be a word of God; but if you love my flesh, I will again be only a
voice", 2:1; poured out "while an altar is still ready", 2:2, and "the overseer of Syria"); not only to be called a Christian
but to be one (3); "I am God's wheat, ground by the teeth of wild beasts" (4:1), "not as Peter and Paul do I command you"
(4:3); the ten "leopards" from Syria to Rome, "now I am beginning to be a disciple" (5); "let me be an imitator of the
suffering of my God" (6); the ruler of this age, "my love has been crucified", the living water, "I want God's bread, which is
the flesh of Jesus Christ ... and for drink I want his blood" (7); believe me (8); the church in Syria, and "one born at the
wrong time" (9); the Ephesians, Crocus and the others, the date (10).

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/IRo.json` `grc`, with `fixed`: 9 slips corrected in 7 verses), the short (middle) recension.
  **Romans came down by its own road.** Lake (lines 8878-8884): Vossius's Greek manuscript of 1646 (G, the Medicean) "is however
  not complete, and omits the epistle to the Romans. This deficiency was supplied in 1689 by Ruinart in his Acta Martyrum
  Sincera from a Paris MS. (Paris Graec. 1451) of the 10th century." Lake's footnotes to Romans still cite "G": find on his page
  (or in his introduction) which manuscript the siglum stands for in this letter before you name it, and if you cannot, write
  "G (as Lake designates the Greek here)". The versions (L, A, S, and Cureton's Syriac abridgment of Ephesians, Romans and
  Polycarp) and the long recension (g) as in brief-iep.md. Early quotations: Lake's footnotes cite Irenaeus and Jerome at 4:1
  and Eusebius at 5:2. Open each (Irenaeus, Against Heresies: find the book and chapter; Eusebius, Church History 3.36;
  Jerome, Lives of Illustrious Men 16) and say what each quotes.
- Lake's footnotes (`texts/src/IRo.app.json`, 9): enter as variants those that change the meaning: 1:0 (ALS χριστόνομοι,
  "having the law of Christ", for χριστώνυμος "named after Christ"), 1:2 (A), 4:1 (τοῦ Χριστοῦ GL, θεοῦ Sg and Irenaeus:
  "pure bread of Christ" or "of God"), 4:2 (two), 5:2 (ἄκοντα G and Eusebius, ἑκόντα L g; Lightfoot's reading), 6:2 (a clause
  G g omit), 7:2 ("much expanded in the later authorities"; Lightfoot's emendation of καὶ λαλοῦν), 7:3.
- English check texts: Roberts and Donaldson's shorter column (`texts/en/IRo.json`) and Lake's English on his facing pages
  (vol. 1 OCR from line 11708: the greeting, "which also has the presidency in the country of the land of the Romans",
  line 11717).
- Digital forms left as they are (brief-apfathers2.md): 1:1 ᾐτούμην, 2:2 ᾅσητε, 9:2 ὣν (read as the participle ὢν, "being the
  last of them": say so if you translate it so).

## Lenses (fixed)
- **H Historical-critical**: the journey under guard ("ten leopards"), Ignatius's death in Rome (Eusebius's date and the
  general tendency Lake reports, the arena: topic `roman-games`), the text's separate history (Ruinart, the Martyrium in which it
  was found, only as Lake and sources opened say), the date line of 10:3, and the ancient readers who quoted this letter.
- **N New Testament**: Paul (1 Corinthians in Lake's margin at 4:3, 5:1, 6:1, 9:2; Peter and Paul as apostles, 4:3; "one born
  at the wrong time", 1 Corinthians 15:8), John (7:2-3: the living water, John 4:10 and 7:38; the bread of God, John 6:33; the
  seed of David, John 7:42 and Romans 1:3; all from Lake's margin); 6:1 "nothing will profit me", to compare with Matthew 16:26
  by the Greek (not in Lake's margin); and what 4:3 says of Peter at Rome, only what the text says and what sources opened say.
- **C Church and churches**: the Roman church's greeting (1:0) and how the churches read it (the card below); martyrdom sought
  and refused rescue, and how the churches have judged it (only sourced; topic `martyrs`); "God's bread ... the flesh of Jesus
  Christ" (7:3) and the readings of it (pointing to the site's Supper cards).
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers2.md's list, above all: "Ignatius, also called Theophorus"; "Jesus Christ our God" (1:0 twice; 3:3); προκάθημαι
"presides" (1:0 twice); ἐπιτυγχάνω "reach God" (1:1-2; 2:1; 4:1; 5:3; 8:3; 9:2); μαθητής "disciple" (4:2; 5:3); "imitator of
the suffering of my God" (6:3); "the ruler of this age" (7:1); σῖτος θεοῦ "God's wheat", καθαρὸς ἄρτος "pure bread" (4:1);
"wild beasts" (4-5); "leopards" (5:1); ἔκτρωμα "one born at the wrong time" (9:2); "God's bread" (7:3). Also: Χριστιανός
"Christian" (3:2) and Χριστιανισμός (3:3) "Christianity" (with a note; any "first use" claim only from a source opened);
σπονδίζομαι (2:2) "be poured out as an offering" (as the site's Philippians 2:17 and 2 Timothy 4:6 if their Greek is the same
verb family: check); θυσιαστήριον "altar" (2:2); ὁ ἐμὸς ἔρως ἐσταύρωται (7:2) "my love has been crucified", with a note on
ἔρως (not ἀγάπη: Ignatius's longing; how Origen read the phrase only from a text opened); ὕδωρ ζῶν (7:2) "living water"
(as the site's John 4:10); ὁ ἐπίσκοπος Συρίας (2:2) "the overseer of Syria" (his own title: note it); τοκετός (6:1) "birth"
("my birth is upon me").

## Quotations
Follow brief-apfathers.md exactly. Romans quotes nothing by formula. Its echoes (Lake's margin, and 6:1 beside Matthew 16:26):
use the site's wording only where the Greek agrees, and note it.

## Places that need full treatment
1:0 (the greeting: each title, "presides in the region of the Romans", "presiding over the love", "named after Christ, named
after the Father", the variant χριστόνομοι; the card below; topic `rome`); 2:1-2 ("a word of God ... only a voice"; "the
overseer of Syria"; the libation); 3:2-3 (to be found a Christian; "Christianity is not a work of persuasion but of greatness"
by Lake's sense, check); 4:1-3 (God's wheat; "entice the beasts"; Peter and Paul: a `views` note on what 4:3 does and does not
show about Peter in Rome, sourced, pointing to the `peter` topic); 5:1-3 (the ten leopards; "I will entice them"; "now I am
beginning to be a disciple"); 6:1-3 (the birth; "let me receive the pure light"; imitator of God's suffering); 7:1-3 (the
ruler of this age; "my love has been crucified"; the water that says "Come to the Father"; God's bread and his blood: a
`views` note on the readings, from sources that discuss Ignatius, pointing to the John 6 and Matthew 26 cards); 9:1-2 (the
church in Syria with God as its shepherd, "Jesus Christ alone will oversee it"; "one born at the wrong time", 1 Corinthians
15:8); 10:1-3 (from Smyrna by the Ephesians; Crocus; the date line).

## Who it was for, and why
`settings` for the greeting and each section (a condemned prisoner to the church in Rome, before he arrives; Lake's purpose).
`readers` by evidence: the Roman Christians, who might have the means to have him freed (1:2; 2:1; 4:1); those who had gone
ahead from Syria to Rome (10:2).

## Where Christians differ
No book card. **One chapter card is planned, at 1:0** (brief-apfathers2.md, Where Christians differ, 2): "Does Ignatius's
greeting give the Roman church a primacy over other churches?", top `peter`. Read first the site's Matthew 16, Luke 22 and John
21 cards (Peter and his successors): this card asks about the Roman church in this greeting, not about Peter in the Gospels.
Write it only if the Catholic, Orthodox and Protestant rows (and any other) each cite a source that discusses this greeting;
otherwise a `views` note at 1:0 gives the readings, sourced, and points to Matthew 16. Martyrdom and the Supper: `views`
notes only (above).

## Topics
Contributions: `ignatius` (short), `martyrs` (main for the batch), `roman-games`, `rome`, `antioch` (Syria), `smyrna`,
`ephesus`, `peter` and `paul` (4:3), `lords-supper` (7:3), `satan` and `spiritual-powers` (7:1), `discipleship` (5:3), `church`
(1:0), `docetism` (only where the letter bears on it), `apostolic-fathers` and `canon` (short sections, in topics.md). The
`docetism` core is yours (brief-ism.md). Re-check every title and aka before writing.

## book.json and sources.json (you)
Lead, facts, authorship (Ignatius, as brief-iep.md; this letter's own witnesses), audience, outline, the three lenses, sections
(the purpose: no rescue; the Roman church in the greeting; the wheat of God and the arena; the text's road through Ruinart; the
ancient quotations), spec, prompts, topics, sources, links, and the `canon` block (brief-apfathers2.md). No traditions card in
book.json. Source keys: reuse `lake-apostolic-fathers`, `ignatius-romans` (defined in Act/parts/11-14), `ignatius`,
`eusebius-history`, `irenaeus-heresies-*`, `jerome-illustrious`, `origen-song-prologue` if you open it; Roberts and Donaldson's
English: one new key for both your letters, in `content/books/IRo/sources.json`; new ones in your books' sources.json.

## Atlas (lead decides; brief-apfathers2.md)
Places the text names: the region of the Romans (1:0), Syria (2:2; 5:1; 9:1; 10:2), Rome (5:1; 10:2), Smyrna and the Ephesians
(10:1).

## When you finish
`VERBOSE=1 node tools/build.js --check IRo` at 0 errors and no warnings; your line in `content/books/IRo/progress.md`; then the
Smyrnaeans (`brief-ism.md`); then the citation lists for both letters in `content/proposals/works/build.md` ("Ignatius, To the
Romans 3.2" in Act/parts/11-14 is dotted and does not link). Report counts, every departure from Lake, the slips found, what you
read in Eusebius, Irenaeus and Jerome, how you rendered the greeting, and anything uncertain.
