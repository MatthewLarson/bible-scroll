# Polycarp to the Philippians: brief for the Polycarp writer (who also writes the Martyrdom of Polycarp)

Book id `Pol` (works.json `polycarp-philippians`, tier `early`; the catalog name "Polycarp to the Philippians" is the one
references use: brief-apfathers.md, Reference forms, and Lead question 1). 14 chapters, 37 verses plus `1:0`, the greeting
("Polycarp and the elders with him, to the church of God that lives as a resident alien in Philippi"). A pastoral letter
from the overseer of Smyrna, which Lake (introduction, opened for this plan) calls "a 'covering letter'" for the copies of
Ignatius's letters that Polycarp sent the Philippians at their request (13:2), written also to warn against "certain
disorders in the Church at Philippi, and especially against apostasy": the love of money, the case of the elder Valens
(11), and those who deny that Jesus Christ came in the flesh (7). Lake's margin prints 51 Scripture references for these 37 verses, most of them to New Testament letters: 1 Peter,
Paul's letters (including 1-2 Timothy), 1 John, Matthew and Luke.

**One writer, two books.** You write `content/books/Pol/` (flat, no parts/) first and then `content/books/MPo/` (flat;
`brief-mpo.md`), and own both book.json and sources.json files, as one writer did the Prayer of Manasseh and Psalm 151
(`brief-man.md`). Each book gets its own hostile reviewer afterwards.

**Read first:** `tools/brief-apfathers.md` (shared decisions; it wins over this brief), `tools/brief-mpo.md`,
`tools/agent-writer.md`, `tools/agent-writer-works.md` with every "Lessons from" paragraph, `bible/STYLE.md`, and Lake's
introduction (vol. 1 OCR, lines 14403-14455).

## Text and witnesses
- Base text: `texts/orig/Pol.json`. `grc` is Lake's Greek where it survives (1:0-9:2, 13:1-2 to "ἀνήκουσαν"); `lat` is the old
  Latin translation that Lake prints where the Greek is lost (10:1-12:3, the end of 13:2, 14:1); `gap` lists those verses. Lake's
  witnesses (introduction): eight defective Greek manuscripts "representing a single archetype" (G), "two long quotations in
  Eusebius" (Eus.), and the Latin version within the Latin collection of Ignatius's letters (L); Lightfoot gives the full
  collation. Lake's footnotes (`texts/src/Pol.app.json`, 8 notes): 9:2 "Here G breaks off, but the rest of the sentence is
  given by L Eus."; 13:1 "The Greek is here again available from the quotation in Eusebius". So 9:2 (end) and 13 rest on
  Eusebius, <i>Church History</i> (open 3.36 and find the quotations; give the section numbers you read, key `eusebius-history`),
  and 10-12 and 14 on the Latin alone.
- The Latin text file has misprints from the digital file's conversion ("lesus" 12:2, "lgnatio" 13:2, "dilferre" 10:2, "volris",
  "estotc"): read past them, check a doubtful word against Lake's page in the scan (vol. 1 OCR), and report them for the lead;
  they are not variants. The slip at 13:1 (a missing space in the Greek) is known.
- For 10-12, 13:2 (end) and 14 make the literal working line from the Latin (Latin word order) and say in a note at 10:1 that
  the Plain English Translation there translates a Latin translation, not Polycarp's Greek. Where a Greek original can be
  recovered from a quotation in another writer, use it only from a text you open and say so.
- English check texts: Lightfoot (`texts/en/Pol.json`, by chapter) and Lake's own English on his facing pages (scan).
- Variants: every departure from Lake's text; the readings in Lake's notes (4:2 "your"/"our", 9:1 Eusebius omitting a phrase,
  11:1, 11:3 deum/dominum, 12:2, 13:1 πέμπω/misero), each with the witnesses as Lake gives them.

## Lenses (fixed)
- **H Historical-critical**: Polycarp and his date (Lake: martyred most probably on 23 February 155, aged 86; a disciple of John,
  "opinions differ" whether the son of Zebedee or John the Elder); the letter's date; whether chapter 13 (Ignatius still alive
  or his fate unknown) and chapter 9 (Ignatius already dead) show two letters joined, with who argues it and who answers, only
  from works opened; the Greek and the Latin.
- **N New Testament**: the letters it uses and how it introduces them (12:1 "as it is said in these Scriptures"; 3:2 Paul's
  "letters" to the Philippians; 11:3), 1 Peter (Lake's margin at 1:2; 2:1-2; 5:3; 7:2; 8:1; 10:1-2), 1 John 4:2-3 (7:1), 1-2 Timothy (4:1, 3; 5:2;
  8:1; 9:2; 11:4; 12:3), Matthew and Luke (2:3; 7:2; 12:3), and what this tells about which books Christians in Asia read about AD 110-160 (only from sources opened).
- **C Church life and the churches**: elders, deacons, widows ("God's altar", 4:3), young men and virgins (5:3), the Valens case
  and how to treat him (11), the collection of Ignatius's letters (13), and how today's churches use the letter, from sources.
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers.md's list ("elder", "deacon", "overseer" if it occurs, "the testimony of the cross" 7:1, "resident alien" in
1:0, κύριος "Lord", "servant" for παῖς if it occurs) and: φιλαργυρία "love of money" (4:1; as the site's 1 Timothy 6:10:
check); ἐλεημοσύνη / eleemosyna "almsgiving" or "giving to the poor" (10:2: Tobit 4:10 and 12:9 in the site's Tobit wording
where the Latin fits; topic `almsgiving`); θυσιαστήριον θεοῦ (4:3) "God's altar"; ἀντίχριστος (7:1) "antichrist", as the
site's 1 John 4:3; πρωτότοκος τοῦ σατανᾶ "the firstborn of Satan" (7:1; the same phrase in Irenaeus, <i>Against Heresies</i>
3.3.4, as Polycarp's word to Marcion: only from the text opened); "presbyter" in 11:1 is "elder" (brief-apfathers.md).

## Quotations
Follow brief-apfathers.md. Here they are thick: where Polycarp's Greek gives a New Testament phrase in the same words, use the
site's wording of that verse exactly (copy by script) and say in the note which verse it is; where he adapts it, translate his
form and note the difference. 12:1 (Latin "irascimini et nolite peccare, et sol non occidat super iracundiam vestram") takes
Ephesians 4:26's wording (brief-apfathers.md, the worked example). Lake's margin references are a starting list, not a proof:
open each verse.

## Places that need full treatment
- 1:0-1:3 (the greeting; the prisoners in "chains that become the saints", who they were, Ignatius among them, 9:1; "by grace
  you are saved, not by works", 1:3 beside Ephesians 2:5, 8-9: a `canon` note).
- 2:1-3 (the Lord's words: "do not judge", "forgive", "blessed are the poor", in a form between Matthew and Luke; 1 Clement
  13:2 has a similar group: compare by the Greek, and say only what the texts show).
- 3:1-3 (Paul's "letters" to the Philippians: one letter or several, and what Polycarp means, from sources opened).
- 4-6 (the household and church code: wives, widows, deacons, young men, virgins, elders; "God's altar").
- 7:1-2 (antichrist and the denial of the flesh, beside 1 John 4:2-3; who the deniers were, the "firstborn of Satan" and
  Irenaeus's story: a `deep` note, sourced).
- 9:1-2 and 13:1-2 (Ignatius, Zosimus and Rufus; the letters sent; the one-letter or two-letter question, fairly, with both sides).
- 10:2 (almsgiving "frees from death": Tobit, from the site's Tobit; a `canon` note on Tobit's standing and on how the churches
  read the saying, pointing to the Proverbs 16 almsgiving card).
- 11:1-4 (Valens and his wife: love of money, idolatry, "do not treat them as enemies"; 11:3 Paul and the Philippians "in the
  beginning of his letter").
- 12:1-3 ("these Scriptures": Ephesians 4:26 and Psalm 4:4; the prayer for kings, rulers and enemies of the cross).

## Who it was for, and why
`settings` for the greeting, each section (Polycarp and the elders to the Philippian church), the quoted words of the Lord,
and the commendation (14). `readers` by evidence: the church at Philippi, which had welcomed the prisoners and written to
Polycarp (3:1; 13:1), with an elder who had fallen (11); date proposals with who makes them, from sources opened.

## Where Christians differ
No book card (brief-apfathers.md). No chapter card is planned; point to the site's cards on almsgiving (Proverbs 16), faith
and works (Romans 3, Ephesians 2) and church discipline where they bear on 10:2, 1:3 and 11.

## Topics
Cores: `polycarp` and `ignatius` (brief-apfathers.md, Topics; you write both, the Martyrdom contributes to `polycarp` too),
and `marcion` or `irenaeus` only if needed. Contributions: `philippi`, `philippians`, `paul`, `smyrna`, `elders`, `deacons`,
`widows`, `wealth`, `almsgiving`, `antichrist`, `false-teachers`, `resurrection` (2:2; 7:1), `final-judgment`, `martyrs`
(9), `household-codes`, `grace` and `justification` (1:3), `church-and-state` (12:3), `canon` and `apostolic-fathers` (short
sections), `tobit` or the site's Tobit topic only if one exists (search).

## book.json (you)
Lead, facts, authorship (Polycarp: Irenaeus and Eusebius on him, only from texts opened; Lake's summary), audience, outline,
the three lenses, sections (Polycarp; the occasion and Ignatius; the New Testament in the letter; the Greek, the Eusebius
quotations and the Latin; one letter or two), spec, prompts, topics, sources, links, and the `canon` block for tier `early`
(brief-apfathers.md). No traditions card. Source keys: reuse `lake-apostolic-fathers`, `polycarp-philippians`,
`eusebius-history`, `irenaeus-heresies-3`, `ignatius`, `ignatius-smyrnaeans` and the other Ignatius keys as they fit,
`jerome-illustrious`; Lightfoot's English: a new key in `content/books/Pol/sources.json` unless one exists (search
`content/sources.json` and the books' sources for "Lightfoot" first).

## Atlas (lead decides; brief-apfathers.md)
Places the text names: Philippi (1:0; 3:2; 11:3), Syria (13:1); Smyrna is implied, not named.

## When you finish
`VERBOSE=1 node tools/build.js --check Pol` at 0 errors and no warnings; your line in `content/books/Pol/progress.md`; then the
Martyrdom (`brief-mpo.md`); then the citation lists for both books in `content/proposals/works/build.md` (the bare "Polycarp
1:3; 12:1" in `Eph/book.json` and other forms that do not parse are on it). Report counts, every departure from Lake, the
Latin slips, what you read in Eusebius, and anything uncertain.
