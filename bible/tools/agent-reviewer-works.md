# Brief: hostile review of a book outside the 66 (or one part of it)

Follow `tools/agent-reviewer.md` in full (read it first): you are adversarial, you write a report, you never edit content.
This brief adds what is different for books outside the 66. Read `tools/agent-writer-works.md`, the rules the writer had.

## Sources
See the Sources section of agent-writer-works.md for each kind of book. For 1 Enoch, `texts/orig/<id>.json`: `gez` (Dillmann's Ge'ez, cut into verses by machine; the EOTC breaks in `eotc` are the reliable
ones), `tr` (transliteration), `eotc`, `grc` + `grc_w` (Greek where it survives), `join`. `texts/en/<id>.json` `charles`
(public domain, for sense). `texts/auto/<id>.json` (Dillmann vs EOTC). There is no word-gloss list: check the translation
against the Ge'ez itself, word by word, and against the Greek where it exists. For Septuagint books, check against
`grc` (and `grc_b`), Swete's apparatus in texts/src/<id>.app.json, and the Latin in texts/src/<id>.lat.json where the
writer cites it.

## Check, in addition
1. Translation: faithful to the Ge'ez (or to the Greek/Aramaic where the writer says it follows them, and whether that
   choice is justified); dependence on copyrighted translations (Nickelsburg-VanderKam, Knibb, Isaac, Black, Olson,
   Sparks): describe a match and quote at most a few words; a modernized-Charles sentence shape the Ge'ez does not force.
2. Witnesses: every claim about Qumran Aramaic and Hebrew fragments (numbers, contents, dates), Greek witnesses, Ethiopic families
   and manuscripts. Readings reported "from memory" must be marked as such; any invented reading or fragment is critical.
3. Status: the book is never presented as Scripture in the site's own voice; for tier-2 books (Scripture for some
   churches) it is presented as Scripture FOR those churches, naming them; the Ethiopian Orthodox view (and every other
   church's) is stated in its strongest form, without caricature, and sourced.
4. `canon` notes and the book.json `canon` block (if in scope): every agree/goes-beyond/conflicts claim about the 66 books
   is accurate and fair; `cited_in` links are real and their strength honestly stated; the reliability analysis is
   labeled, balanced and does not rank churches; patristic and conciliar claims (Tertullian, Origen, Augustine, Jerome,
   lists and decrees) are verifiable. Use web search where you can.
5. Cross-references in both directions with the 66 books and with other works (named as in content/works.json).

Write `review.md` in the folder you review (`content/books/<id>/parts/<a>-<b>/review.md`, or `content/books/<id>/review-book.md`
for book.json), with the same structure as agent-reviewer.md, ending with an empty `## Fixes applied` heading.
