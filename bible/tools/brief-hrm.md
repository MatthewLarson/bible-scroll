# Shepherd of Hermas: shared brief for the five part writers and the book-level writer

Book id `Hrm` (works.json `shepherd-of-hermas`, tier `early`, `book` now set). 114 chapters, 727 verses, no greeting. In
Lake's words (introduction, opened for this plan: vol. 2 OCR lines 368-575) it "is in form an apocalypse", revelations made
to Hermas "by the Church, who appears in the form of a woman, first old, and afterwards younger; by the shepherd, or angel
of repentance; and by the great angel, who is in charge of Christians", whose "object is practical and ethical". Its main
problem "is that of sin after baptism": in Hermas's circle "Christians after baptism were capable of leading sinless lives,
and ... if they fell they could not again obtain forgiveness"; Hermas's message "was that for sin after baptism there was
still the possibility of forgiveness for those who repented, though this repentance would not avail more than once", and
Lake sees in it "the beginning of the Catholic doctrine of penance" (Lake's judgment: give it as his, beside the readings
of other churches). Lake: "in the Visions the necessity for repentance is enforced, in the Mandates the life required from
the penitent is explained, and in the Similitudes the working and theological doctrine of repentance is developed." It is
the longest of the early Christian writings on the site (727 verses; 1 Clement has 399). Do not call it the most copied or
most popular of them unless a source you open says so.

**Read first:** `tools/agent-writer.md`, `tools/agent-writer-works.md` (every "Lessons from" paragraph), `bible/STYLE.md`,
`tools/brief-apfathers.md` (its sections "The literal working line", "Scripture quoted inside these books", "Near-canonical
standing", "The canon block for tier `early`", "Terms" and "Where Christians differ" apply here as written), then
`tools/brief-apfathers2.md` (Texts, Terms), then this file. Where this file and those differ, this file wins for Hermas;
report the clash. Lane `works`: shared-file changes go in `content/proposals/works/`.

## Numbering: chapters 1-114, the old references beside them
Hermas is cited two ways: by division (Vision 1-5, Mandate 1-12, Similitude 1-10, each with its chapters and sections:
"Vision 3.8.2", "Mandate 4.3.6", "Similitude 9.12.1"), and by one chapter number running through the whole book (1-114).
Lake prints only the first (his running heads read "vis. 1. iv. 2", "mand. xii. iii. 3", "sim. 1, 1-5"). The site addresses
verses as chapter:verse, so **the site's chapters are the 114 chapters numbered straight through, and Lake's sections are
the verses**: Vision 3.8.2 is **16:2**, Mandate 4.3.6 is **31:6**, Similitude 9.12.1 is **89:1**. A division with one chapter
(Vision 5, Mandates 1-3 and 7-9 and 11, Similitudes 1-4 and 7) is cited by section: Mandate 1.1 is 26:1.
`texts/src/Hrm.extra.json` `divisions` gives every chapter's old reference (`"16": "Vision 3.8"`); use it, never count by hand.

| Division | Chapters | Division | Chapters | Division | Chapters |
|---|---|---|---|---|---|
| Vision 1 | 1-4 | Mandate 4 | 29-32 | Similitude 1 | 50 |
| Vision 2 | 5-8 | Mandate 5 | 33-34 | Similitude 2 | 51 |
| Vision 3 | 9-21 | Mandate 6 | 35-36 | Similitude 3 | 52 |
| Vision 4 | 22-24 | Mandates 7, 8, 9 | 37, 38, 39 | Similitude 4 | 53 |
| Vision 5 | 25 | Mandate 10 | 40-42 | Similitude 5 | 54-60 |
| Mandate 1 | 26 | Mandate 11 | 43 | Similitude 6 | 61-65 |
| Mandate 2 | 27 | Mandate 12 | 44-49 | Similitude 7 | 66 |
| Mandate 3 | 28 | | | Similitude 8 | 67-77 |
| | | | | Similitude 9 | 78-110 |
| | | | | Similitude 10 | 111-114 |

- **Names.** In the site's own voice the divisions are "Vision", "Mandate" and "Similitude" (Lake: the Commandments "or
  Mandates, as they are more usually called"; his note at 50:0 on the Latin <i>similitudines</i>, "hence the custom of
  quoting this section ... as the 'Similitudes'"). Lake's English calls them Parables (Greek παραβολαί): say so once in
  book.json and in the chapter page of 50.
- **Chapter pages** (chapters.json): every chapter's `title` begins with its old reference, e.g. "Vision 3.8: The seven
  women around the tower" and "Similitude 9.12: The rock and the gate"; the first chapter of each division names the
  division's subject too. The reader must be able to find "Mandate 4.3" at a glance.
- **References in notes, inside this book**: write the site form first and the old one after it in parentheses on first
  mention in a note: "16:2 (Vision 3.8.2)". After that the bare c:v is enough. **From other books**: "Shepherd of Hermas
  16:2 (Vision 3.8.2)". Tested with `tools/refs.js` today: "Shepherd of Hermas 16:2" and "Shepherd of Hermas 16:2; 113:3"
  link to Hrm; "Hermas 16:2", "Shepherd of Hermas, Vision 3.8.2", "Vision 3.8.2", "Mandate 4.1.8" and "Similitude 9:12" do
  not link (dotted forms are inert, and "Vision 4:" in the Amos and Zechariah books must stay unlinked, so no alias
  "Vision" is possible). Never write "Vision 3:8" or "Mandate 4:3" with a colon. The lead may teach refs.js the old forms
  later; until then use the forms above.
- Lake's footnotes and margin references in `texts/src/Hrm.app.json` (214 notes, 114 margin references) are keyed by the
  new numbers; the heading notes above a division sit at `c:0` (25:0 on the title "Apocalypse 5", 50:0 on the Similitudes).

## Parts (all five write at the same time and cannot see each other), plus the book-level writer
- **001-024** (148 vv): Visions 1-4. Rhoda and Hermas's sin of thought (1); the old woman with the book, Hermas's household
  (2-4); the little book copied letter by letter, the one chance of repentance with a fixed day (5-7, with Eldad and Modad
  7:4), the Church as the old woman "created first of all" and the two copies for Clement and Grapte (8); the tower built
  on the waters, its stones, the seven women, the woman growing younger (9-21); the beast and the four colors (22-24).
- **025-049** (173 vv): Vision 5 (the Shepherd appears, 25) and the twelve Mandates: one God (26, the verse Irenaeus quotes
  as Scripture), simplicity and giving (27), truth (28), purity, divorce, remarriage and the one repentance (29-32), patience
  and bad temper (33-34), the two ways and the two angels (35-36), fear (37), self-control (38), double-mindedness (39), grief
  and the Holy Spirit (40-42), true and false prophets (43), evil desire and whether the commandments can be kept (44-49).
- **050-077** (193 vv): Similitudes 1-8. The two cities (50), the elm and the vine, rich and poor (51), trees in winter and
  summer (52-53), the fast, the vineyard, the slave and the son, the flesh in which the Holy Spirit lived (54-60), the two
  shepherds of luxury and punishment (61-65), affliction for Hermas's household (66), the willow and the sticks, Michael and
  the law (67-77).
- **078-092** (111 vv): Similitude 9.1-15. The twelve mountains of Arcadia, the rock and the gate, the virgins, the building
  of the tower and its testing (78-88); the explanation begins: the rock and the gate are the Son of God (89), the glorious
  man and the six (89-90), the virgins and the women in black (90-92).
- **093-114** (102 vv): Similitude 9.16-33 and 10. The stones from the deep: the apostles who preached to the dead and gave
  them the seal (93); the twelve mountains as twelve kinds of believers (94-106, with the bishops of 104); the stones of the
  plain and the round stones (107); **the Latin ending** (107:3-114:5: see below), the end of the parable (107-110) and
  Similitude 10, the angel's last charge and the virgins left with Hermas (111-114).
- **book.json and `content/books/Hrm/sources.json`**: a separate book-level writer (as for 1 Clement), who also writes the
  `hermas` topic core, the canon block, and the citation list for Hermas in `content/proposals/works/build.md`.

## Text and witnesses (`texts/orig/Hrm.json`, read its `about`)
- **Base text: Lake's Greek** (vol. 2, 1913; the digital text is from the 1917 printing, First1KGreek tlg1419/tlg001,
  CC BY-SA 4.0). Lake's witnesses (introduction): Codex Sinaiticus, "containing Vis. I. i. 1. to Mandate IV. iii. 6",
  fourth century (so the site's 1:1-31:6); A, the Athos manuscript, fifteenth century, ten leaves, the last lost, copied
  by "the celebrated forger Simonides" and collated by Georgandas, both "very inaccurate"; H, a Hamburg fragment (Similitude
  4.6-7 and 5.1-5); papyri (Amherst, Oxyrhynchus 404 and 1172, Berlin 5513 and 6789: read Lake's list for what each holds);
  L1 the Vulgate Latin (printed by Faber, Paris 1513), L2 the Palatine Latin, E the Ethiopic, C Sahidic fragments; and
  quotations in Clement of Alexandria, pseudo-Athanasius and Antiochus of Palestine. Lake: "The text of Hermas is probably
  far from good", "neither ℵ nor A is completely trustworthy", and "for so large a part of the book A is the only
  continuous Greek text"; LE and the quotations are "too free to be used with confidence". Say in the chapter pages where
  Sinaiticus stops (31:6) and where A alone carries the Greek.
- **The Latin ending.** A "ends, as the last leaf is missing" at 107:2 (Similitude 9.30.2; Lake's footnote). From 107:3 to
  the end Lake prints L1, with the few Greek lines that survive set into it: 107:3-4 from the Amherst papyrus ("Some words
  have been restored as the Papyrus is in bad condition"), 108:5-6 from "a quotation preserved in Antiochus", 113:3-5 from
  Oxyrhynchus Papyrus 404 (the dots after καλέσας in 113:5 are a gap in the papyrus). The file holds them as `grc` and `lat`
  for the same verse where both stand; `mixed` says for each of the five such verses (107:3, 107:4, 108:6, 113:3, 113:5)
  which comes first and where the Greek is from; `gap` marks the 27 verses with Latin only. **Policy:** translate what Lake
  prints, Greek where he prints Greek and Latin where he prints Latin, in his order, as Polycarp to the Philippians 9-14 did
  (`brief-apfathers.md`); a variant entry at 107:2 (the end of A) and one at each mixed verse naming the witness for each
  half; a gloss or note on every Latin-only verse is not needed, but the chapter pages of 107-114 say in their first
  line that the text rests on the Latin, and part 093-114's notes give the Latin word wherever the sense turns on it.
  Where Lake's footnote names a Latin reading of L2 or E (e.g. 109:3 "Scandescis L1, irasceris L2"), weigh it as for Greek.
  Antiochus "seems ... to abbreviate and perhaps to paraphrase" in 109:3 (Lake), so Lake does not follow him there: say so.
- **Slips.** 21 slips of the digital text are corrected (`fixed`, from `tools/lake-fixes.json`): ten in the Greek, eleven in
  the Latin. Known and NOT fixed, because the OCR reads them the same as the digital text (so they may be Lake's own
  misprints; check the scan before writing about any): 2:2 κάρδίᾳ, 6:5 μενανοίας (= μετανοίας), 20:2 αλλὰ, 38:10 φυχῇ,
  39:10 αὐτῇς, 53:7 δυναται, 54:5 τοὶς, 62:1 ἐπιθομίαις, 64:3 ἐπηρώτῳν, 64:4 ἡμερα, 66:4 ἁμαρτιας, 69:3 ο, 74:5 ζὴν,
  78:1 ἑν, 81:1 κυκλῳ, 85:2 παρθενοι, 86:1 αὐτων, 86:4 ὄθεν, 88:9 ἅλως (= ὅλως), 93:5 σφαγῖδα (= σφραγῖδα), 105:4
  ἐλογίσαντω. Unsettled: 52:1 ἧν (the sense needs ἦν; the OCR reads every ἦν on these pages as ἣν), 54:1 κα (καὶ; the OCR
  line is garbled), 69:2 ὅλοι τὸν κόσμον (the sense needs ὅλον; the OCR has "ὅλο."). The numbers of Similitude 9 lack the
  numeral sign Lake prints (82:4, 92:4, 93:5: ι, κ or κε, λε, μ = 10, 25, 35, 40; the OCR reads κ΄ in 82:4 and is unclear in
  92:4: check the scan). The headings Lake prints above the Mandates (`heads`) lack the breathing on Ἐντολή from Mandate 3
  on. Read each by the sense; a slip you confirm on Lake's page goes in your report for the lead, never in variants.json or
  lake-fixes.json. The collation was against one OCR only (Lake vol. 2 exists in one scan locally), so it is not exhaustive.
- **Lake's printed volume, local OCR**: `c:\bible-scroll\.cache\dl\lake-ia\apostolicfathers02lakeuoft.txt`. Introduction
  lines 368-575; text from line 600 (Greek and English on facing pages, his English notes at the foot); Vision 2 starts
  near 1158, Vision 3 near 1557, Vision 4 near 3339, Mandate 2 near 3846, Similitude 1 near 6800, Similitude 9 near 10444,
  the Latin ending 13860-14510. **Lake's English** is in the same file (with OCR noise and his margin headings mixed in):
  read it there for sense and for his English footnotes, which are not in the digital file (e.g. line 1350 on 6:5: "This is
  the main point of the 'Shepherd'").
- **English check text**: `texts/en/Hrm.json` `anf`, Frederick Crombie's translation in the Ante-Nicene Fathers, vol. 2
  (public domain, Wikisource), by chapter, each chapter's English at its first verse. Its Mandate 10 has two chapters where
  Lake has three (its second covers 41-42), and from 107:3 it follows the Latin. For sense only.
- No other edition is local (Lightfoot's, and the later critical editions): cite any only from a scan or page you open, named
  with its date from that page. The drift audit (in your head only): Holmes (2007), Ehrman's Loeb (2003), Lake (1913),
  Crombie (ANF); any commentary only if opened.

## Lenses (fixed)
- **H Historical-critical**: the date (the Muratorian fragment's "very recently in our times ... while his brother bishop
  Pius sat in the chair"; Lake: Pius "about 148 A.D."; "many critics" think the book written "at intervals during the twenty
  or thirty years preceding", a question that "can probably never be decided satisfactorily"), the Clement of 8:3 and the
  older date that would imply, the Hermas of Romans 16:14 (Origen, Eusebius, Jerome), one author or several, Rome, the
  witnesses and versions.
- **N New Testament**: James (double-mindedness, 39; the rich and poor), Hebrews 6:4-6 and 10:26 (one repentance; Lake
  points to Hebrews 6 at 6:5), the Gospels' parables and the vineyard (55), Matthew 19:9 and 1 Corinthians 7:11 on divorce
  (29), Revelation and apocalyptic form, 1 Peter 3:19 and 4:6 (93, preaching to the dead), Romans 16:14. Lake's margin
  references (`refs`) give the echoes he saw; open every verse before citing.
- **J Jewish context**: the book of Eldad and Modad (7:4, the one written source Hermas names; works.json has
  `book-of-eldad-and-modad`), angels and the angel of repentance, Michael (77), the two angels and the "two inclinations"
  (36; the rabbinic yetzer and the Qumran two spirits only from texts opened), Jewish apocalyptic form (4 Ezra, 1 Enoch on
  the site: quote their wording), the Jewish-Christian character some scholars see, each named from a source opened.
- **D Doctrine and the churches**: repentance after baptism and how the churches have read it (Catholic and Orthodox
  penance, Novatianist rigor, Tertullian's attack, Protestant readings), baptism and "the seal", the Christology of
  Similitudes 5 and 9 and the Holy Spirit as "Son of God", fasting and the "station", the ranks of the church (elders,
  overseers, deacons, teachers). Each church's reading only from a source that addresses Hermas or the question.
- **R Roman world**: slavery and freedmen (Hermas sold to Rhoda, 1:1), Rome, the Tiber, Cumae and the Sibyl (1:3; 8:1), the
  Campanian Way (22:2), business and wealth in the city, the household, Arcadia (78),
  the willow and viticulture (51, 67).
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers.md's list applies throughout ("overseer", "elder", "deacon", "the chosen", "double-minded" for δίψυχος and
διψυχέω, "endurance", κύριος "Lord" of God and Christ but "sir" or "lord" where Hermas addresses the Shepherd or a woman as
κύριε / κυρία: by context, with a note at first use in each part, because the Greek uses one word for both). Also for this
book, entered by part 001-024 in `content/proposals/works/terms.json` (re-read it first; the others add only words not
listed, re-reading before writing):
- μετάνοια / μετανοέω "repentance / repent" (terms.json; gloss at first use in each part "turn your life around"); ὁ ἄγγελος
  τῆς μετανοίας "the angel of repentance"; μία μετάνοια (31:6) "one repentance".
- ὁ ποιμήν "the Shepherd" (capital for the angel who is the book's title character; "shepherd" for the others, 61-65).
- ἡ Ἐκκλησία "the Church" when it is the woman of the Visions (capital, as a person), "the church" otherwise; ἡ πρεσβυτέρα
  "the old woman" (8:1) with a note that the word also means "elder" (Greek presbytera).
- ὁ πύργος "the tower"; λίθοι τετράγωνοι "square stones"; ἡ σφραγίς "the seal" (93-94, of baptism; as 2 Clement's entry).
- ἐντολή "commandment" (Barnabas's entry; the Mandates are ἐντολαί), παραβολή "parable" in the text (the division name
  stays "Similitude"), ὅρασις "vision", ἀποκάλυψις "revelation" (25:0 title, with the variant).
- ἁπλότης "simplicity" (gloss "single-heartedness"), ἀκακία "innocence", ἐγκράτεια "self-control" (1 Clement's entry),
  μακροθυμία "patience", ὀξυχολία "bad temper", λύπη "grief", ἱλαρότης "cheerfulness", τρυφή "luxury", ἀπάτη "deceit".
- τὸ πνεῦμα τὸ ἅγιον "the Holy Spirit" (terms.json); in 58-59 and 78:1 the capital is kept only where Lake's Greek makes the
  Spirit the subject who "created all creation" (59:5), with a note on every place the capital decides a doctrine.
- ὁ υἱὸς τοῦ θεοῦ "the Son of God"; ὁ δοῦλος (55) "the slave" (as the site's δοῦλος), with a note on the parable's slave as
  the Son (58:2).
- στατίων (54:1) "a station" kept as the Latin loanword, gloss "a fast day kept like a soldier's watch", topic `fasting`.

## Quotations
Hermas quotes almost no Scripture in form. The one book he names as written is Eldad and Modad (7:4, ὡς γέγραπται): a note,
the works.json name, and the topic `agrapha` or the work's own entry (read what 1 Clement and Numbers 11-21 already say).
Allusions and echoes (Lake's `refs`): follow brief-apfathers.md ("Scripture quoted inside these books") where the wording
matches; otherwise translate Hermas and say in a note what it echoes. Mandate 1 (26:1) is quoted by Irenaeus as "the
Scripture" (below): the part 025-049 writer gives Irenaeus's words from the text opened.

## Places that need full treatment
- **Repentance after baptism** (6:4-8; 29:8-31:7; 72-77; 104-106): one repentance, the fixed day, "if he sins and repents
  again and again" (31:6); Lake's view in his words; how Tertullian (<i>On Modesty</i>), the Novatianists and later penance
  read it; the Hebrews 6 question. Part 025-049 writes a `deep` chapter page for 31; 001-024 for 6. Topic core `penance`.
- **The Church as the old woman** (2-8; 18-21; 23:4-24:2): why old ("created first of all", 8:1), why she grows younger,
  the Sibyl (8:1); part 001-024, a `deep` chapter page for 8.
- **The tower** (Vision 3, 10-15; Similitude 9, 78-110): the stones, the women/virgins, the rock and the gate, the church as
  a building (Ephesians 2:20-22; 1 Peter 2:5): each part says how its tower fits the other (Vision 3 and Similitude 9 tell it
  twice); the two writers each write a note giving the parallels, and the lead aligns.
- **The Shepherd / angel of repentance** (25; 78:1; 111-114): who he is, the "glorious angel" and "the glorious man" (89-90),
  Michael (77): whether Hermas means the Son of God, an angel, or both, with who holds each reading.
- **Christology of Similitude 5 and 9**: the slave in the vineyard (55-56), "the Holy Spirit which pre-existed, which created
  all creation, God made to dwell in flesh" (59:5-7), "that Spirit is the Son of God" (78:1), the Son "older than all his
  creation" (89:2), the gate as the Son "made manifest in the last days" (89:3): adoptionist, Spirit-Christology, angel
  Christology and orthodox readings side by side, each named from a source opened. Checked by script for this plan: neither
  "Jesus" nor "Christ" stands anywhere in Lake's Greek or Latin except 6:8 ("those who have denied their Christ"), where
  Lake's footnote gives Χριστόν for Sinaiticus's first hand, κύριον for its corrector, A and L2, and <i>filium</i> for L1:
  part 001-024 enters that variant and says what it means for the book's language about the Son. Parts 050-077 (`deep` chapter page for 59) and
  078-092 (`deep` for 89); `views` notes, never a traditions card (no church holds Hermas's view).
- **The two angels** (36): the angel of righteousness and of wickedness, how to tell them; guardian angels in the churches
  (Catholic, Orthodox feast and teaching only from a source opened); `angels`, `two-ways`.
- **Fasting** (54-56): the station, the fast whose saved cost is given "to a widow or an orphan or someone in need" (56:7), against the existing fasting
  cards (Judith 8, Matthew 4 and 6); `fasting`, `almsgiving`.
- **Divorce and remarriage** (29): the husband who must put away an adulterous wife and not remarry, so she can repent;
  beside Matthew 19:9 and the site's existing cards on divorce (search them): point to them.
- **The dead and the seal** (93): apostles who preached to those who had died and baptized them; 1 Peter 3:19; 4:6, the
  Descent into Hades, and `baptism-for-the-dead`.
- **Church offices** (8:3 the elders who lead; 13:1 "apostles and overseers and teachers and deacons"; 104:2 overseers; 43 the false
  prophet): `elders`, `deacons`, `prophecy`, `false-teachers`.
- **Wealth and the rich** (14; 51; 102-107): the elm and the vine, round stones that must be cut; `wealth`.

## Who it was for, and why
`settings` for each vision, mandate and parable (who speaks to whom: the old woman, the young man, the Shepherd, the
glorious angel; and Hermas to "brothers", 8:1). `readers` by evidence: the Roman church (Hermas told to read the book "in this
city with the elders who lead the church", 8:3; Clement to send it "to the cities abroad", Grapte to admonish "the widows
and the orphans"); Maximus (7:4); Hermas's own household (2-4; 66). The Muratorian line on its public reading: below.

## Canon block (book-level writer; brief-apfathers.md "The canon block for tier `early`")
Opened for this plan (cite exactly these; open each again yourself before writing):
- **Muratorian fragment** (ANF vol. 5, newadvent.org/fathers/0510.htm, section 4): "The Pastor, moreover, did Hermas write
  very recently in our times in the city of Rome, while his brother bishop Pius sat in the chair of the Church of Rome. And
  therefore it also ought to be read; but it cannot be made public in the Church to the people, nor placed among the
  prophets, as their number is complete, nor among the apostles to the end of time." Key `muratorian-fragment`. Lake reads
  it as rejecting the book "though some accepted it as a canonical apocalypse".
- **Irenaeus**, <i>Against Heresies</i> 4.20.2 (newadvent 0103420): "Truly, then, the Scripture declared, which says, First
  of all believe that there is one God ..." (Mandate 1, 26:1); Eusebius, <i>Church History</i> 5.8.7 (newadvent 250105):
  Irenaeus "not only knows, but also receives, The Shepherd". New key for book 4 (the existing `irenaeus` is book 5).
- **Eusebius**, <i>Church History</i> 3.3.6 (newadvent 250103): the book "disputed by some, and on their account cannot be
  placed among the acknowledged books; while by others it is considered quite indispensable, especially to those who need
  instruction in the elements of the faith. Hence ... it has been publicly read in churches"; 3.25.4: "Among the rejected
  writings must be reckoned also ... the so-called Shepherd". Key `eusebius-history`.
- **Athanasius**, <i>Festal Letter</i> 39 (newadvent 2806039): books "not indeed included in the Canon, but appointed by the
  Fathers to be read by those who newly join us ... and the Shepherd". Key `athanasius-festal-39`.
- **Tertullian**, <i>On Modesty</i> (newadvent 0407): "the scripture of the Shepherd, which is the only one which favours
  adulterers", "habitually judged by every council of Churches (even of your own) among apocryphal and false (writings)";
  "the Epistle of Barnabas is more generally received among the Churches than that apocryphal Shepherd of adulterers" (find
  and cite the chapter numbers; keys `tertullian-modesty`, `tertullian-modesty-20`: use one, report the other).
- **Jerome**, <i>Lives of Illustrious Men</i> 10 (newadvent 2708): Hermas of Romans 16:14 "is reputed to be the author ...
  also read publicly in some churches of Greece. It is in fact a useful book and many of the ancient writers quote from it
  as authority, but among the Latins it is almost unknown." Key `jerome-illustrious`.
- **To verify before use** (not opened for this plan): Codex Sinaiticus's order (Hermas after Barnabas at the end of the New
  Testament: open codexsinaiticus.org or the British Library's description; the site would not load today); Codex
  Claromontanus's list; Origen on Romans 16:14 (the Latin of Rufinus) and his other citations; Clement of Alexandria's
  citations (key `clement-stromata`; find the places); the Ethiopic version's place in the Ethiopian church (say nothing
  unless a source names it); pseudo-Athanasius and Antiochus. No church prints Hermas in its Bible today: say so per church
  family only with a source, as brief-apfathers.md says. So no "Is it Scripture?" card.
- `cited_in`: Romans 16:14 (the Hermas Paul greets; `disputed` identification). Existing global keys to reuse:
  `lake-apostolic-fathers-2`, `hermas-shepherd`, `hermas-mandates-newadvent`, `hermas` (read their entries and report
  duplicates), `muratorian-fragment`, `jerome-illustrious`, `eusebius-history`, `athanasius-festal-39`, `clement-stromata`.

## Where Christians differ
No book card. One chapter card is possible: **at 31 (Mandate 4.3), "Can serious sin after baptism be forgiven, and how
often?"** (penance and confession), top `repentance` or `penance`, only if the existing cards on Hebrews 6, 1 John 5:16,
Matthew 16/18 and John 20:23 (search the traditions of those chapters first) do not already ask it, and each row (Catholic,
Orthodox, Lutheran, Reformed, Baptist, Anglican, Methodist as available) has a source that addresses that very question.
Otherwise a `views` note at 31:6 points to the existing card. Fasting, divorce, baptism and the dead, guardian angels and
church offices have cards or belong in notes: point to the existing cards.

## Topics
New cores (`content/proposals/works/topics/<id>.json`, each by ONE writer; search titles and `aka` first):
`hermas` (People: Hermas, author of the Shepherd; works.json names the book) by the book-level writer; `penance`
(Ideas: "Penance: forgiveness after baptism"; check `repentance` and `perseverance` first, and make `penance` a separate core
only if neither covers sin after baptism; otherwise a section in `repentance` via topics.md) by part 025-049.
Main contributions: 001-024 to `church`, `repentance`, `rome`, `slavery`, `apocalyptic`, `sibylline-oracles` (as a work:
mention only), `clement-of-rome` (8:3), `widows`, `wealth`, `beasts` or the site's topic for the beast (search), `angels`;
025-049 to `penance`, `repentance`, `marriage` (divorce), `angels`, `two-ways`, `holy-spirit`, `prophecy`, `false-teachers`,
`fasting`, `faith`, `hypocrisy`; 050-077 to `fasting`, `almsgiving`, `wealth`, `son-of-god`, `holy-spirit`, `incarnation`,
`trinity`, `michael`, `slavery`, `vineyard` (search); 078-092 to `church`, `son-of-god`, `angels`, `virgins` (search), `sevens`
("Numbers in the Bible"); 093-114 to `baptism`, `baptism-for-the-dead`, `elders`, `deacons`, `hospitality`, `martyrs`,
`wealth`, `penance`. Each part re-checks every title and aka before writing.

## book.json (book-level writer)
Lead, facts, authorship (Hermas the former slave of 1:1, the Muratorian brother of Pius, the Romans 16:14 identification,
the Clement of 8:3, one or several authors), audience, outline (the three divisions and the five parts), the five lenses,
sections (the problem of sin after baptism; the Church, the tower and the Shepherd; Christology and the Spirit; how the book
was read: Irenaeus, Clement of Alexandria, Tertullian, the Muratorian list, Eusebius, Athanasius, Jerome; the witnesses and
the Latin ending; the two numberings), spec, prompts, topics, sources, links, and the `canon` block. Explain the numbering in
`facts` (one line: "Chapters 1-114, with the Vision/Mandate/Similitude reference in each chapter title").

## Cross-references in both directions
The site already mentions Hermas in about 35 files, all in forms that do not link. Known (with the new numbers): 1 Clement
book.json and `clement-of-rome` topic (Vision 2.4.3 = 8:3); 1 Clement 21-39 notes, Numbers 11-21 notes and topics, works.json
`book-of-eldad-and-modad` (Vision 2.3.4 = 7:4); 1 Clement 40-65 notes (Visions 3.6 = 14; Similitudes 8.8 = 74 and 9.20 =
97); Didache notes ("Commandment 2" = 27); Isaiah 56-66 chapters (Similitude 5.3 = 56); Martyrdom of Polycarp notes ("Vis.
II. ii. 7" = 6:7, "Sim. IX. xxv. 2" = 102:2); Romans 01-04 notes (Similitudes 8.6.3 = 72:3); 2 Clement and others on the Son
as "that Spirit" (78:1). The book-level writer lists by script in `content/proposals/works/build.md` every mention outside
the book (file, text, the site reference it should become, e.g. "Shepherd of Hermas 8:3 (Vision 2.4.3)", any quoted wording
and whether it matches the new Plain English Translation, any claim the Greek does not support), and suggested back-links
(Romans 16:14; Hebrews 6:4-6; James 1:6-8; 1 Peter 3:19; Matthew 19:9). Writers never edit another book.

## Atlas
Places the text names: Rome (1:1), the Tiber (1:2), Cumae (1:3; 5:1: Lake prints Κώμας; his footnote says the
editors emend to Cumae, "probable" as the meaning, the alternative being a trip to the country, and L has <i>civitatem
Ostiorum</i>: a variant and note in part 001-024),
Arcadia (78:4), the Campanian Way (22:2, τῇ ὁδῷ τῇ καμπανῇ). The lead decides on a places-only atlas after writing (brief-apfathers.md).

## When you finish
Each part writer: `VERBOSE=1 node tools/build.js --check Hrm/<part>` at 0 errors and no warnings in your part; your line in
`content/books/Hrm/progress.md`; report counts, every departure from Lake, slips found on the scan, readings you could not
check, and terms added. Book-level writer: `--check Hrm` clean for book.json, the citation list and back-links in
build.md, your line in progress.md, and a report. Scratch folders `.scratch/Hrm-<part>/` and `.scratch/Hrm-book/`.
