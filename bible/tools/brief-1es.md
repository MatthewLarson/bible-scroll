# 1 Esdras: shared brief for the part writers

Book id `1Es` (works.json `1-esdras`, tier orth). 431 verses in 9 chapters. The name: "1 Esdras" in English Bibles
(KJV, NRSV), "Esdras A" in the Septuagint (Swete prints it before 2 Esdras = Ezra–Nehemiah), "3 Esdras" in the Latin
Vulgate's appendix. On this site "2 Esdras" means the Greek Ezra–Nehemiah and the apocalypse is "4 Ezra"
(canon-tiers rule). The existing topic `first-esdras` is this book's topic core.

Parts (all write at the same time and cannot see each other):
- 01-02 (80 vv): Josiah's Passover to the fall of Jerusalem (1, parallel 2 Chronicles 35:1-36:21), Cyrus's decree and
  the return of the vessels (2:1-15, parallel Ezra 1), the letter to Artaxerxes and the halt (2:16-30, parallel Ezra
  4:7-24).
- 03-05 (156 vv): the contest of Darius's three guards (3:1-4:63, no parallel in the 66 books: wine, the king, women,
  and truth), the return under Zerubbabel and the list (5:1-46, parallel Ezra 2), the altar and the foundation
  (5:47-73, parallel Ezra 3:1-4:5).
- 06-09 (195 vv): the rebuilding under Haggai and Zechariah and Darius's decree (6-7, parallel Ezra 5-6), Ezra's
  return (8:1-67, parallel Ezra 7-8), the mixed marriages (8:68-9:36, parallel Ezra 9-10), the reading of the law
  (9:37-55, parallel Nehemiah 7:73-8:12).
- book.json and `content/books/1Es/sources.json`: a separate book-level writer.

## Numbering (lead decision, 2026-10-31)
The site numbers this book as Swete's Greek does (texts/orig, the catalog). The KJV divides some chapters differently; texts/en shows each KJV line beside the Greek verse that holds it, marked "[KJV c:v]". **Verse ranges in this brief were written in KJV numbers: find each place by its content and cite Swete's numbers.** Never cite a KJV number as this book's verse.

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section). Build every verse from the
  Greek in `texts/orig/1Es.json` (Swete, Codex Vaticanus), literal working line in `.scratch/1es-<part>/`, then Plain,
  then the drift audit in your head against NRSV, RSV, NETS, NABRE-related editions and the Lexham Septuagint (never
  write their text). KJV (`texts/en/1Es.json`), Vulgate/Douay (`texts/src/1Es.lat.json`, Vulgate numbering) for sense
  only; Swete's footnotes in `texts/src/1Es.app.json` (A is the main other witness; read the sigla exactly).
- Lenses (fixed): O Orthodox, H Historical-critical, J Jewish reception, S Beside Chronicles–Ezra–Nehemiah (how the
  Greek differs from the Hebrew books it retells, like the S lens of 1–2 Chronicles), W Western churches (Catholic and
  Protestant: read, not Scripture; the Vulgate appendix, Trent, Article VI). No C/P lenses: the Western churches share
  one lens here because neither counts it as Scripture.
- **The parallel rule (the most important rule in this book).** Where 1 Esdras retells 2 Chronicles, Ezra or
  Nehemiah, the site's Plain of that verse is the model. Keep its wording wherever the Greek of 1 Esdras says the same
  thing; change it only where the Greek differs (an added word, a different name or number, a different order), and
  give each real difference an `S` view or a note naming the Hebrew verse. Make a table in your scratch folder: each
  1 Esdras verse, its parallel verse, and "same / differs: how". Names and numbers in the lists (5:9-45 beside Ezra
  2:2-67): follow the Greek, with the Hebrew form in a note where it differs; do not "correct" the Greek to the Hebrew.
  Read the Plain from `content/books/2Ch/`, `Ezr/`, `Neh/` (current files).
- Josephus (Antiquities 10-11) follows 1 Esdras, not the Hebrew Ezra, in places (the three guards, Zerubbabel's
  order): check every Josephus claim in an open text (lexundria.com/j_aj or Perseus).

## Terms
Use the Ezra–Nehemiah terms in content/terms.json (Israelites, the province, the temple of the LORD, etc.); κύριος
"the Lord" except where the parallel's Plain has "the LORD" for the Hebrew name: then keep "the LORD" only if the Greek
has κύριος there (say once at 1:1 why). "Truth" (ἀλήθεια) in 3-4 is one word everywhere, and 4:41 "Great is truth,
and strongest of all" (Latin "Magna est veritas et praevalet", a motto: check where it is used before saying so).

## Places that need full treatment (candidate links: check each in an open text before you assert it)
- 1:23-24 (the lines on Josiah not in Chronicles), 1:25-33 (Josiah's death: Pharaoh's words, Jeremiah's lament).
- 2:16-30: the letter placed before the return in 1 Esdras order: the chronology problem.
- 3:1-4:63: the three guards; Zerubbabel named only at 4:13 (a later join?); "women" and "truth"; Apame (4:29); the
  speech's sources (Greek or Persian court tales): views notes with who holds them.
- 5:1-6: who led the return and when; Zerubbabel and Joakim; the date under Darius (compare Haggai and Zechariah).
- 9:37-55: Ezra's reading of the law, and the book's abrupt ending (9:55 "and they gathered..."): is it cut off?
- Where it matches, goes beyond or conflicts with the 66 books, a `canon` note (honest: it is mostly a retelling).

## Who it was for, and why
Settings for each decree, letter, speech and prayer (Cyrus 2:3-7, the letter 2:16-24 and reply 2:25-29, the three
speeches, Darius's letters, Ezra's prayer 8:74-90, the speeches of 9). `readers`: the main scholarly proposals with
their holders (Egypt or Judea, 200s-100s BC), and Josephus as an early reader.

## Topics
Contribute to: first-esdras (core: add the book's section), zerubbabel, ezra, josiah, cyrus or persia, second-temple,
exile, darius (check ids), truth (check for a topic; propose `truth` only if none), wine, women (check), marriage and
intermarriage (check), passover (check), torah reading (check).

## book.json (book-level writer only)
Lead, facts, authorship, audience, outline, the five lenses, sections (its relation to Chronicles–Ezra–Nehemiah: a
fragment of an older edition or a reworking; the three guards; Josephus; its names across churches; its place in the
Vulgate appendix), spec, prompts, topics, sources, links. No "is it Scripture?" card: Ezra's book card (top
`first-esdras`) already asks it; read it, point to it, and put what churches hold (Orthodox: Greek and other Orthodox
Bibles, the Russian numbering as 2 Esdras; Ethiopian; Catholic: Trent's list and the Clementine Vulgate's appendix;
Anglican Article VI; other Protestants: each checked) in the `canon` block's accepted_by and rejected_why, per
agent-writer-works.md. If a fact you check contradicts that card, report it.

## When you finish
`VERBOSE=1 node tools/build.js --check 1Es/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/1Es/progress.md. Report counts, the parallel table's totals (same / differs), every departure from Swete.
