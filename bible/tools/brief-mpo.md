# Martyrdom of Polycarp: brief for the Polycarp writer (second book, after Polycarp to the Philippians)

Book id `MPo` (works.json `martyrdom-of-polycarp`, tier `early`). 22 chapters, 53 verses plus `1:0`, the greeting ("The
church of God that lives as a resident alien in Smyrna, to the church of God that lives as a resident alien in Philomelium,
and to all the communities of the holy and catholic church in every place"). Lake (introduction, opened for this plan): an
"obviously genuine and contemporary account" in the form of a letter from Smyrna to Philomelium, "the earliest known history
of a Christian martyrdom, the genuineness of which is unquestionable". It tells of the martyrs before Polycarp (2-4,
Germanicus and the failed volunteer Quintus), Polycarp's withdrawal, vision and arrest (5-8), his trial before the proconsul
("Eighty-six years I have served him", 9:3; "I am a Christian", 10:1), the crowd's cry, the fire that would not burn him,
the dagger, his burial and the yearly feast of his martyrdom (11-18), then closing notes on the date and the copyists (19-22).
Lake's footnote at 20:2: "This is really the end of the book. What follows is a series of notes, which have been taken into
the text."

**Read first:** `tools/brief-apfathers.md` (shared decisions; it wins over this brief), `tools/brief-pol.md` (you write it
first), `tools/agent-writer.md`, `tools/agent-writer-works.md` with every "Lessons from" paragraph, `bible/STYLE.md`, and
Lake's introduction (vol. 2 OCR `apostolicfathers02lakeuoft.txt`, lines 14585-14700). Flat folder `content/books/MPo/`; you
own book.json and sources.json.

## Text and witnesses
- Base text: Lake's Greek, vol. 2 (`texts/orig/MPo.json` `grc`, with `fixed`). **The digital text of vol. 2 got only a few
  fixes because the scan is noisy** (brief-apfathers.md, Texts): read the Greek warily, check any odd accent, breathing or
  word against the scan, and list the slips you find (2:2 has a stray `·` after μάστιξιν).
- Lake's witnesses (introduction): five Greek manuscripts, m (Moscow 159, 13th century), b (Baroccianus 238, 11th), p
  (Parisinus gr. 1452, 10th), s (Hierosolymitanus, 10th), v (Vindobonensis, 11th); "b p s v form a group as opposed to m, which
  has often the better text"; Eusebius, <i>Church History</i> 4.15, quoting "the greater part of the letter" (E); a Latin version
  (L); Syriac and Coptic extracts from Eusebius "which have obviously no independent value". Lake: the text "is quite good".
- Lake's footnotes (`texts/src/MPo.app.json`, 21 notes) to enter as variants where they change the meaning, with the witnesses
  as Lake gives them: 2:3 (ζωήν m against κόλασιν bpsv, and Lake on what the second would mean); 7:1; 14:2; **16:1** (the dove:
  περιστερὰ καί omitted by E; Wordsworth's emendation περὶ στύρακα, "around the sword-hilt"); **16:2** (καθολικῆς E b s against
  ἁγίας m and L: the variant behind "catholic"); 19:2; **20:1** (the writer's name: Μαρκίωνος m, Μάρκου b p s, Marcianum L,
  Lightfoot preferring Μαρκιανοῦ; v ends with 19); 20:2 (three readings); 22:1 (omitted by L and m); 22:3.
- **The Moscow ending** (`texts/src/MPo.extra.json` `text`, "moscow:2"-"moscow:6"): m has it instead of 22:2-3 (Gaius copying from
  Irenaeus's papers, Irenaeus in Rome, Polycarp and Marcion, the voice like a trumpet in Rome, Pionius). The Plain English
  Translation follows Lake's text (22:2-3). The Moscow ending goes in one variant entry at 22:2 (the reading of m, with its
  Greek copied by script and your Plain English Translation of all five sections), plus a note. Lake's title (`head`, "which has
  no special support; each MS. gives its own title") goes in a note at 1:0.
- **Eusebius** (<i>Church History</i> 4.15): open the Greek and an English (NPNF on newadvent; Lake's own Loeb Eusebius if you
  find it) and compare section by section: where Eusebius quotes, where he summarizes or leaves out (whether he has the dove and
  chapters 21-22), and enter E's readings only as you read them there or in Lake's apparatus.
- English check texts: Roberts-Donaldson (`texts/en/MPo.json`, by chapter) and Lake's English (scan).
- The torture of 2:2 and the deaths are described plainly in the Greek. This is not a world-group book: there is no
  `sensitive.json`; translate fully, adding nothing.

## Lenses (fixed)
- **H Historical-critical**: the date (brief-apfathers.md, Dating: Eusebius's 166-167, Waddington's 155, Turner's and Schwartz's
  156, the "great Sabbath"); the letter's writer (20:1) and scribe Evarestus (20:2); the copyists of 22:2-3 and Pionius; which
  parts are notes added later (Lake on 20:2); the scholars who think the account was shaped or added to (the dove, the gospel
  parallels), each only from a work opened.
- **N New Testament**: the martyrdom "in line with the gospel" (1:1): the betrayer from his own household and Herod (6:2), the
  donkey and the city (8:1), "Your will be done" (7:1), the cup (14:2); Revelation 2:8-11 (the letter to Smyrna: "the
  synagogue of Satan", "ten days", "the crown of life"); Matthew 10:23 and 26:55 (4:1; 7:1, Lake's margin); the meaning of μάρτυς.
- **M Martyrs and the saints**: imitation of Christ (1:2; 17:3), voluntary martyrdom refused (4), the bones "more precious than
  precious stones" (18:2), the yearly "birthday" of the martyrdom (18:3), "we worship him ... we love the martyrs" (17:3), and how
  today's churches read these (relics, feasts, the honor and prayers of the saints), from sources opened; the existing cards
  on relics and the saints answer the church questions.
- **R Roman law and the city**: the proconsul (Statius Quadratus, 21:1), the oath "by the fortune of Caesar" (9:2; Lake's
  footnote on per genium and fortuna), "Away with the atheists!" (3:2; 9:2), "Lord Caesar" (8:2), the Asiarch Philip and the
  games (12:2), the police captain Herod and Nicetes (8:2; 17:2), the crowd of Gentiles and Jews (12:2; 13:1; 17:2; 18:1) and
  the question of anti-Judaism in the account (topic `anti-judaism`), Roman sources only from texts opened.
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers.md's list ("martyr / be martyred / martyrdom" here; "overseer" at 16:2, with the note it requires; "catholic
church" with the 16:2 variant; "resident alien" in 1:0; "servant" for παῖς of Jesus in 14:1, 14:3, 20:2, and "slave boy" for the
παιδάρια of 6:1 and 7:1 by context; κύριος "Lord"). And: ἀνθύπατος "proconsul" (as the site's Acts 13:7 and 18:12: check);
εἰρήναρχος "police captain" (8:2), with a gloss; Ἀσιάρχης "the Asiarch" (as the site's Acts 19:31 "officials of the province":
check, and keep the title visible, with a gloss); κομφέκτωρ (16:1) "executioner", gloss; ἄθεοι "atheists" (3:2; 9:2), with a
note that it meant people who denied the gods; ἡ τύχη Καίσαρος "the fortune of Caesar"; Κύριος καῖσαρ (8:2): brief-apfathers.md,
Lead question 5; ἡ ἡμέρα γενέθλιος (18:3) "birthday" of the martyrdom; σάββατον μέγα (8:1; 21:1) "a great Sabbath", with John
19:31 in the site's wording ("that Sabbath was a great day") in the note; Ξανθικός "Xanthicus", with Lake's footnote on the month.

## Parallels (check each in an open text; the site's wording is the model)
Lake's margin: Matthew 10:23 (4:1), 10:36 (6:1), 26:55 (7:1), Acts 21:14 and Matthew 6:10 (7:1), John 19:31 (8:1),
Joshua 1:6 (9:1, "Be strong"), Romans 13:1 and 1 Peter 2:13 (10:2), John 5:29 (14:2), Jude 2 (1:0); and Matthew 26:39-42 and 27; Acts 7 (Stephen's death); Revelation 2:8-11 and 6:9-11; 1 Corinthians 2:9 and
Isaiah 64:4 (2:3, Lake's margin); Philippians 2:4 (1:2); Daniel 3 (the furnace); Romans 13:1-7 and 1 Peter 2:13-17 (10:2,
honor to rulers "appointed by God"); 4 Maccabees and 2 Maccabees 6-7 (the endurance of martyrs; the site's notes on those books
already cite this work: read them); Ignatius, To Polycarp and To the Smyrnaeans (keys `ignatius-smyrnaeans`, `ignatius`), and
Irenaeus, <i>Against Heresies</i> 3.3.4, and Eusebius 5.20 (Irenaeus's letter to Florinus on what he heard Polycarp say), each only
from the text opened.

## Places that need full treatment
- 1:0-1:2 (the greeting; "a martyrdom in line with the gospel"; imitation).
- 2-4 (the earlier martyrs: the torture plainly told; 2:3 the variant; Germanicus and the beast; "Away with the atheists, let
  Polycarp be searched for"; Quintus the Phrygian and the rule against giving oneself up, 4: who the "Phrygian" may imply, from
  sources opened only).
- 5-8 (the withdrawal; the vision of the burning pillow; the slave boys tortured; Herod and Nicetes; the "great Sabbath").
- 9-12 (the voice from heaven; the oath and "Away with the atheists"; "Eighty-six years"; "I am a Christian"; honor to rulers;
  the crowd and the Asiarch; the vision fulfilled): a `deep` chapter page for 9-10.
- 13-16 (the Jews gathering wood; not nailed but bound, "like a choice ram"; the prayer of 14, with its Trinitarian doxology and
  "the cup of your Christ"; the fire like a sail, the scent like baking bread and incense; the dagger and the dove; "apostolic and
  prophetic teacher, overseer of the catholic church in Smyrna"): the 16:1 and 16:2 variants in full.
- 17-18 (the body kept from the Christians "lest they abandon the crucified one and begin to worship this one"; "we worship him
  as the Son of God, but we love the martyrs"; the bones and the yearly feast): a `deep` chapter page; the site's cards on
  relics (2 Kings 13) and honoring the saints (Acts 10, Revelation 5): point to them.
- 19-22 (the twelfth martyr with those from Philadelphia; the writer and the scribe; the date in 21:1, with every number and name
  in Lake's footnotes; the copyists and Pionius, and the Moscow ending).

## Who it was for, and why
`settings` for the letter (Smyrna to Philomelium and "every place"), the speeches (the proconsul and Polycarp, the crowd, the
herald, Nicetes), the prayers (7:2-8:1 as reported, 14:1-3), and the closing notes (20-22, which speak to later readers and
copyists). `readers` by evidence: the church at Philomelium, which had asked for a full account (20:1), the churches it was to
pass the letter on to (20:1), and the yearly gathering at the tomb (18:3); the copyists' chain (22:2-3).

## Where Christians differ
No book card (brief-apfathers.md). No chapter card is planned: relics, honoring and praying to saints, the martyrs' sufferings
and oaths already have site cards; point to them. Voluntary martyrdom (4) is no point of difference among churches today: a
`views` note, not a card.

## Topics
Contributions (brief-apfathers.md): `polycarp` (your core, the Martyrdom section), `martyrs` (the main contribution),
`smyrna`, `communion-of-saints`, `imperial-cult`, `roman-governors`, `anti-judaism`, `crucifixion` (the gospel pattern),
`prayer`, `trinity` (14:3; 22:1), `vows` (the oath), `lords-supper` (the cup, 14:2, only as the text shows), `sabbath` (the great
Sabbath), `stephen`, `maccabean-martyrs`, `canon` and `apostolic-fathers` (short sections); `ignatius`, `marcion` and `irenaeus`
as brief-pol.md says.

## book.json (you)
Lead, facts, authorship (the church of Smyrna; Marcion, Marcus or Marcianus as the writer, Evarestus the scribe), audience,
outline, the four lenses, sections (Polycarp's life as the sources tell it; the date; the account and the gospel; Eusebius and
the manuscripts; the copyists and the Moscow ending; the cult of the martyrs), spec, prompts, topics, sources, links, and the
`canon` block for tier `early` (brief-apfathers.md; in `cited_in`, Revelation 2:8-11 is the New Testament's word to Smyrna, kind
`shared tradition` at most, never a citation). No traditions card. Source keys: `lake-apostolic-fathers-2` (new: Lake, vol. 2,
1913), `martyrdom-polycarp`, `eusebius-history`, `irenaeus-heresies-3`, the Ignatius keys; new ones in
`content/books/MPo/sources.json`.

## Atlas (lead decides; brief-apfathers.md)
Places the text names: Smyrna (1:0; 12:2; 16:2; 19:1), Philomelium (1:0; probably not in Bible Atlas), Phrygia (4:1), Asia
(12:2), Philadelphia (19:1), Tralles (21:1, "Philip of Tralles"), Corinth (22:2); the Moscow ending adds Rome.

## When you finish
`VERBOSE=1 node tools/build.js --check MPo` at 0 errors and no warnings; your line in `content/books/MPo/progress.md`; the
citation list for both books in `content/proposals/works/build.md` (the "Martyrdom of Polycarp 8.2" and "10.1" forms in the
Romans 9-11 and 2 Maccabees 4-7 notes, the Revelation topics that cite 8-9 and 12-13, and the Romans note's "Caesar is Lord");
report counts, every departure from Lake, the slips you found in the vol. 2 text, what Eusebius has and lacks, and anything
uncertain.
