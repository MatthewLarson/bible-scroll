# Didache: brief for the writer (one writer, flat folder, owns book.json)

Book id `Did` (works.json `didache`, tier `early`). 16 chapters, 100 verses plus `1:0`, the long title Lake prints above
chapter 1 ("Διδαχὴ κυρίου διὰ τῶν δώδεκα ἀποστόλων τοῖς ἔθνεσιν"; the short title ΔΙΔΑΧΗ ΤΩΝ ΔΩΔΕΚΑ ΑΠΟΣΤΟΛΩΝ is not in
the digital text: give it in a note at 1:0 from the scan). A short church manual: the Two Ways (1-6), baptism (7), fasting
and prayer (8), the thanksgiving prayers over cup and bread (9-10), traveling apostles, prophets and teachers (11-13), the
Lord's day (14), overseers and deacons (15), and a warning about the last days that breaks off in mid-thought (16).

**Read first:** `tools/brief-apfathers.md` (the shared decisions: terms, the Two Ways, quotations, Didache 8:2, dating,
topics, cross-references; it wins over this brief), `tools/agent-writer.md`, `tools/agent-writer-works.md` with every
"Lessons from" paragraph, `bible/STYLE.md`, and Lake's introduction to the Didache (vol. 1 OCR, lines 15495-15625).

One writer, one flat folder `content/books/Did/` (no parts/): book.json, plain.txt, notes, variants, glosses, chapters,
topics, sources.json, progress.md. You also own book.json and sources.json. A separate agent reviews afterwards.

**Order of work:** (1) enter the batch terms of brief-apfathers.md in `content/proposals/works/terms.json` (re-read it
first; other writers start at the same time); (2) translate 1:0-6:3 and save that plain.txt as soon as its drift audit is
done, because the Barnabas writer uses it as the model for Barnabas 18-20; (3) the rest of the Plain English Translation;
(4) notes, variants, glosses, chapter pages, topics; (5) book.json; (6) the citation list (below).

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/Did.json` `grc`, with `fixed`). Lake's introduction (opened for this plan) says his
  text is that of C, the Codex Constantinopolitanus (Jerusalem patriarchal library at Constantinople, found by Bryennios in
  1875; Lake's 1 Clement introduction dates it to 1056 and names its scribe, Leo the Notary), with "the very few necessary
  corrections" noted at the foot of the page. He lists four authorities for the original "Teaching": C, "the Latin version"
  (two copies, of part of the Didache or a cognate document), the "Church Ordinances" (KO) and the Apostolic Constitutions
  book 7, whose relations are "not clear". Use those names. Other witnesses (a Greek papyrus fragment from Oxyrhynchus, a
  Coptic fragment, an Ethiopic church order, a Georgian version) only from an edition or catalog you open this session.
- Lake's footnotes: `texts/src/Did.app.json` (8 notes, 42 margin references). Two matter most: 1:5 (Lake thinks this part
  later than Hermas, about AD 140: a note, not a fact) and 9:2 (the order "first the cup" elsewhere only in "the earliest
  text" of Luke 22:17-20: read the whole footnote, and the site's Luke 22:17-20 notes and variants, before you write).
- The Apostolic Constitutions book 7 rewrites the Didache: works.json `apostolic-constitutions`, keys
  `apostolic-constitutions-7` and the others; read it in the Ante-Nicene Fathers vol. 7 (newadvent or CCEL) where you
  compare it, chapter by chapter, and cite the chapter you opened.
- English check text: Lake (`texts/en/Did.json` `lake`, by verse). He says "Eucharist" in 9:1 and 14:1; the site does not
  (brief-apfathers.md, Terms).
- Variants: every departure from Lake's text; every place Lake corrects C (his footnotes say where: give C's reading and
  Lake's); and differences in the Latin, KO or Apostolic Constitutions only where you read them in an opened text and they
  change the meaning (for example the Apostolic Constitutions' form of the meal prayers, or of 16:7-8 where the Didache
  stops). The three Two Ways witnesses you can read (Didache, Barnabas 18-20, and the Latin if you open it) belong in notes,
  not variants: they are other works.

## Lenses (fixed)
- **H Historical-critical**: layers (the Two Ways, the church order, the ending), date and place, the witnesses, the
  relation to Matthew and to Barnabas, whether the meal of 9-10 is the Lord's Supper.
- **J Jewish roots**: the Two Ways as Jewish moral teaching, the meal prayers beside Jewish blessings over wine and bread
  (only from a Jewish text you open, such as the Birkat ha-Mazon in a prayer book), the fast days, prayer three times a day,
  firstfruits, and the sharp line drawn against "the hypocrites" (8:1-2).
- **N New Testament**: Matthew above all (the sayings of 1:3-5, the Lord's Prayer, "do not give what is holy to the dogs",
  the sin against the Spirit, the end-time sayings of Matthew 24 in chapter 16), Luke 6, 1 Corinthians 16:22 ("Marana tha"),
  the apostles and prophets of Acts and 1 Corinthians 12-14, the overseers and deacons of Philippians 1:1 and 1 Timothy 3.
- **L Worship and church order**: what each practice was (baptism in running water or by pouring, fasting before baptism,
  the meal, confession, choosing overseers), and how today's churches read the Didache for their own practice, each church
  only from a source that addresses the Didache or the practice. Never rank them.
Use a lens only where it has something distinct to say.

## Key terms
All of brief-apfathers.md's list applies (overseer, deacon, prophet, apostle, "the thanksgiving", "the Lord's day",
"servant" for παῖς, κύριος "Lord", the Two Ways renderings). Also, for this book: ἔθνη in 1:0 "the Gentiles" (the existing
entry: non-Jews as people); τέκνον μου "my child" (3:1-6; 4:1); ζυγὸς τοῦ κυρίου (6:2) "the Lord's yoke", with Matthew 11:29-30
in the site's wording; εἰδωλόθυτον (6:3) as the site renders it (topic `idol-meat`; check 1 Corinthians 8:1); Ὡσαννά
"Hosanna" (as Matthew 21:9); μαρὰν ἀθά "Marana tha" (as 1 Corinthians 16:22, with a note on the Aramaic); ὕδωρ ζῶν "living
water" (as John 4:10, with a note that it means running water); μαγεύω, φαρμακεύω and the other vice words in the site's New
Testament renderings (terms.json first; Galatians 5:20 "sorcery", Revelation 9:21 "magic potions"); παιδοφθορέω (2:2) by its
sense (the corrupting of boys), with a note; ἐξομολογέομαι "confess"; σημεῖον ἐκπετάσεως ἐν οὐρανῷ (16:6) literally, with a note
on the readings ("a sign of something spread out in the sky": the outstretched arms of the cross, or an opening of the sky).

## Parallels (check each in an open text; the site's Plain English Translation is the model for any quoted wording)
- Matthew 5:39-48, 6:1-18, 7:6, 7:12, 10:10, 12:31, 21:9, 22:37-39, 24:10-31, 28:19; Luke 6:27-35, 11:2-4, 22:17-20;
  1 Corinthians 16:22; Acts 2:42-46, 13:1-3, 20:7; Revelation 1:10, 22:20 ("Come, Lord Jesus!"); Malachi 1:11, 14 (Didache
  14:3); Zechariah 14:5 (16:7); Deuteronomy 30:15-19 and Jeremiah 21:8 (the two ways). Lake's margin references list more.
- Barnabas 18-20 (the Two Ways); Hermas (1:5, Lake's footnote; works.json `shepherd-of-hermas`); the Apostolic Constitutions 7.
- Existing site notes already cite the Didache in 129 files (31 in Matthew, 25 in Acts, 21 in 1 Corinthians). Read the
  Matthew 5-7, 6:9-13 (with its variants), 24, 28 notes and the Acts and 1 Corinthians 11, 12-14 and 16 notes first, keep
  the site consistent, and list in your report any published claim about the Didache your Greek does not support.

## Places that need full treatment
- 1:0 and the titles: the two titles, "the twelve apostles" and what that claims (Lake's footnote at 11:3 on "apostle").
- 1:1-6 (the two ways; the love commands; the sayings beside Matthew and Luke in 1:3-5, whether this block belongs to the
  oldest Two Ways or was added, from sources opened; 1:6 "Let your alms sweat in your hands", a saying in no Gospel, topic
  `agrapha`).
- 2:2 (the commandment list, abortion and the exposure of infants: the Greek and Roman practice, Jewish and Christian
  teaching, only from sources opened; topic `abortion`, core by you).
- 6:2-3 ("the whole yoke of the Lord", "if you can", the food rule): what was asked of Gentile converts, beside Acts 15:20, 29.
- 7:1-4 (baptism: the order of water, the triple pouring, fasting first): the oldest description of a baptism outside the New
  Testament; the site's baptism cards (Acts 8, Matthew 28) answer the church questions: point to them.
- 8:1-3 (fast days against "the hypocrites", the Lord's Prayer, three times a day): see brief-apfathers.md for 8:2; whether
  "hypocrites" means Jews, or some Jews, or Christians who kept Jewish days, from sources opened (topic `anti-judaism`).
- 9-10 (the prayers: cup before bread, the vine of David, the scattered grain, "no one ... unless baptized" with Matthew 7:6,
  "Hosanna to the God of David", "Marana tha", the prophets' freedom to give thanks as they wish): a `deep` chapter page;
  the debate (Lord's Supper, a full meal, or both) with who holds each view, from sources opened; the Apostolic
  Constitutions' form, and any other witness's extra prayer (over oil) only if opened.
- 11-13 (testing apostles and prophets: two days, asking for money, "ordering a table", the sin against the Spirit beside
  Matthew 12:31, 11:11's "cosmic mystery of the church", the prophets as "your high priests", firstfruits).
- 14 (the Lord's day, confession, being reconciled first, "your sacrifice", Malachi 1:11): the quotation rule of
  brief-apfathers.md; the site's Malachi 1 card on the "pure offering" and the sacrifice cards answer the church question.
- 15 (choose overseers and deacons; they too do the prophets' and teachers' service): no single overseer here; point to the
  1 Timothy 3, Philippians 1 and Acts 14 cards.
- 16 (watch; false prophets; the world-deceiver; the three signs; "but not of all", Zechariah 14:5; the Lord coming on the
  clouds): where the manuscript stops at 16:8, and what the Apostolic Constitutions has after it, only from the text opened.

## Who it was for, and why
`settings` for each block: the title (1:0), the Two Ways spoken to "my child" (1-6, a teacher to a learner), the rubrics to
the community (7-8, 11-15), the prayers spoken by the gathered church to God (9:2-4, 10:2-6), the warning (16). `readers`
by evidence: Gentile converts (the title), people being taught before baptism (7:1 "after you have said all these things
first"), communities visited by traveling apostles and prophets and choosing their own overseers; the places proposed
(Syria, Palestine, Egypt) and the dates, each with who proposes it, from sources opened. Never one stock line.

## Where Christians differ
No book card (brief-apfathers.md: every church agrees the Didache is not Scripture). No chapter card is planned: the site's
existing cards already ask the questions these chapters raise (listed in brief-apfathers.md); point to them in notes and
chapter pages. One card is possible, on 8:3: "Should Christians pray at fixed hours every day?", only if no card on the site
asks it (search the cards on Daniel 6, Psalm 55, Psalm 119:164 and Acts 3 and 10 first) and each row has a source that
addresses that question. Otherwise leave it out and say so in your report.

## Topics
Cores and contributions as brief-apfathers.md assigns: you write the `abortion` core, the main contributions to `two-ways`,
`lords-supper`, `baptism`, `lords-prayer`, `fasting`, `prophecy`, `sabbath` (the Lord's day), `agrapha` and
`synoptic-problem`, and the topics.md proposal for the `sabbath` aka and section. Also contribute to `apostles`, `elders`,
`deacons`, `false-teachers`, `antichrist`, `last-days`, `resurrection`, `maranatha`, `almsgiving`, `hospitality`, `work`,
`household-codes`, `slavery`, `idol-meat`, `prayer`, `firstfruits`, `anti-judaism`, `holy-spirit`, `trinity` (7:1, 3), `canon`,
`apostolic-fathers` (a short section; the core is the Barnabas and 1 Clement book-level writer's). The `two-ways` core
quotes Didache 1:1 in its own words: propose in topics.md that it use your 1:1 wording.

## book.json (you)
Lead, facts, authorship (no author; what the title claims and what Lake and others make of it), audience, outline, the four
lenses, sections (the discovery and the manuscript; the Two Ways and Barnabas; the meal prayers; prophets and overseers; the
ending; the Didache's place in early lists, only from texts opened: Eusebius 3.25.4, Athanasius's Festal Letter 39), spec,
prompts, topics, sources, links, and the `canon` block for tier `early` as brief-apfathers.md describes. No traditions card.
Source keys: reuse `lake-apostolic-fathers` (vol. 1), `didache`, `eusebius-history`, `athanasius-festal-39`,
`apostolic-constitutions-7`, `lsj-perseus`; new ones in `content/books/Did/sources.json`.

## Atlas
The Didache names no places ("the mountains" of 9:4 is no place). No atlas.

## When you finish
`VERBOSE=1 node tools/build.js --check Did` at 0 errors and no warnings. Add your line to `content/books/Did/progress.md`.
Then the citation list in `content/proposals/works/build.md` (brief-apfathers.md, Cross-references): by script, every
reference to the Didache outside `content/books/Did/`, with the quoted wordings checked against your Plain English
Translation, plus any suggested back-links. Report counts, the terms you entered, every departure from Lake, the slips
of the digital text you found, the readings you could not check, and anything uncertain.
