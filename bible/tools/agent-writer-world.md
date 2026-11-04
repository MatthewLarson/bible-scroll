# Brief: write a writing of another people or religion (or one part of it)

You are writing study content for a writing that is neither Jewish nor Christian (works.json tier `world`, catalog
group "Other peoples and religions": the sacred writings of other religions and the historical and philosophical
works of other peoples, such as Atrahasis or Marcus Aurelius's Meditations), for the same study website as the 66 books. Follow `tools/agent-writer.md`
(read it in full) and everything it points to (PLAN.md, STYLE.md, terms.json, works.json, traditions). Read
`tools/agent-writer-works.md` too: its rules on the `canon` block, `canon` notes, quotations of the 66 and checking
apply here unless this brief says otherwise. This brief lists what differs. The book's own brief
(`tools/brief-<id>.md`) gives the parts, lenses, terms and the places that need full treatment.

## Why these books are here, and from where they are read (Matt's decision, 2026-10-30)
Matt asked for the sacred and traditional writings of other cultures and religions, translated, for three reasons:
(A) they give the Bible's world more context; (B) they are interesting; (C) they show how other peoples told, and
may have changed, the stories the Bible tells. He also asked for:
- Connections to other works, including theoretical ones: to the 66 books, to the Jewish and Christian writings
  outside them (1 Enoch, Jubilees, the Genesis Apocryphon, the Book of Giants, Josephus, the church fathers), and to
  the other writings of the same culture.
- The book read from the standpoint of a Christian who believes the biblical account and knows the Jewish and
  Christian books outside the 66, and who uses that standpoint to compare. The site views these writings "slightly
  critically, as a Christian would": with respect and accuracy, not mockery, but measured against the Bible.
- Characters who very likely could be the same person or being as someone in the Bible, weighed honestly.
- Historical, spiritual and religious views, all shown. The site is for Christians: never argue against the LORD
  being God or Jesus being his Son.

What that means in practice:
1. **Describing is neutral; judging is Christian.** Say what the text says, what its first hearers believed and what
   scholars conclude exactly and fairly (STYLE.md rule 3 still binds every description: strongest form, named
   holders, consensus labeled as consensus with its dissenters). When the site speaks in its own voice about where
   the truth lies (book.json `canon.christian_view`, the `C` lens, `canon` notes), it takes the Bible as true and
   as the measure: where the stories differ, it asks what the Bible's account shows that this one lacks or bends.
2. **The borrowing question gets every answer, and the Christian answers in their strongest form.** Many scholars
   hold that Genesis reworked Mesopotamian stories. Give that view fairly, with who holds it. Then give the answers
   of scholars who believe Genesis: that both remember real events and Genesis keeps the true account while others
   distorted it; that Genesis was written in deliberate contrast, correcting the nations' stories; that the
   resemblances are shared memory of a real past and the differences are the point. Name who holds each, from
   something you opened. Do not decide which Christian answer is right, and do not hide the critical one.
3. **Spiritual readings are part of the job, labeled.** The Bible says the gods of the nations are nothing (Isaiah
   44; Psalm 115) and also that sacrifices to them go to demons (Deuteronomy 32:17; 1 Corinthians 10:20); some
   Christian readers (the "divine council" reading of Deuteronomy 32:8 and Psalm 82, and readers of 1 Enoch's
   Watchers) see in pagan gods real fallen powers. Present these as Christian readings with named holders, under
   the `S` lens, never as the site's settled fact. The site's topics `divine-council`, `fallen-angels`, `idolatry`
   and `giants` already cover the biblical side: read them and point to them.
4. **Your own theories are welcome and labeled.** New links, possible identifications and hidden echoes go in `spec`
   notes and `spec` boxes, with the lines they rest on, saying where published scholarship has made the same point.
5. **No polemic tone.** Never sneer at the text or its first hearers. A Christian reading is charitable and clear:
   the scribes who wrote these lines were asking real questions (why we work, why we die, why the gods sent the
   Flood), and the Bible answers them differently.

## How these books are translated (Matt's decision, 2026-11-03)
These are not Scripture, so the site's own translation of a `world` book is the **Conversational English Translation** (Matt named it,
2026-11-03), never called the Plain English Translation, which is the stricter translation of Scripture. It is a
free, idiomatic rendering: sense for
sense, in the way Americans talk today, with their expressions and idioms, not word for word. The model is
`../translation-examples/Meditations/Book-1/` (`old.md` is George Long's English, `modern.md` the voice Matt wants). In that voice:
- Contractions, everyday words, short sentences; common expressions where they carry the meaning ("mind my own
  business", "not pick favorites at the races"). Lists may become sentences, sentences may be split, merged and
  reordered. Old customs may be put the way a reader today would get them, with the original detail in a gloss or
  note ("the green and blue parties", the chariot-racing factions).
- A short identification in parentheses may stand in the text where the reader needs it to follow ("my adoptive
  father (Emperor Antoninus Pius)"), but only a fact checked in this session, with its source in sources.json.
- Every thought of the original stays. The example leaves some lines out (Marcus's thanks about his grandfather's
  concubine, Benedicta and Theodotus, the cures shown in dreams, his brother, the closing "Among the Quadi at the
  Granua"); the site does not. Shortening wording is fine; dropping content is hiding it.
- Never modern in ways the author could not mean: no anachronisms, no jokes the author did not make. The voice is
  modern; the content is his.
- The reading level may run a little above the Bible's 8th grade where the author's subject needs its words
  (sophist, syllogism, Providence); gloss each at first use.
- Never copy or lean on a copyrighted modern translation, including the example's `modern.md`, which shows the voice
  only.

Two routes, set in the book's brief:
1. **English-base route (preferred).** Where a public-domain or openly licensed English translation exists (for the
   Meditations, George Long's), it is the base. The brief names it after its licence is checked.
   - **Import.** The fetch script for the book (`tools/world-fetch.sh` and `tools/world-texts.py`) writes every free
     English translation into `texts/en/<id>.json`, one key each, with an `about` entry (translator, year, licence,
     where it came from), and the original-language text, where a free edition exists, into `texts/orig/<id>.json`.
     The site already offers each `texts/en` text as an alternate translation, the way it offers the KJV and BSB for
     the Bible; notes, glosses and topic links show only in the Conversational English Translation. Import a text only after
     its licence is checked in something opened; never import a copyrighted translation.
   - **Local draft.** Matt's local model writes plain.txt for each part from the base, following
     `tools/agent-translator-local.md`, and nothing else. `node tools/base-lines.js <id> <chapter>` prints the base.
   - **Claude's pass (you).** The local model is trusted with the wording only. You do everything else, and do not
     take any fact from its draft: read `.scratch/<id>-<a>-<b>/local-questions.md` first; check every verse against
     the base and, where `texts/orig` has it, the original (Greek, Latin...); fix any verse that drops, adds or bends
     a thought, or slides into old or stiff English; then write the notes, glosses, variants, chapter pages, topics,
     sources and cross-references (to the 66, to other works, to other writings of the same culture), as for any book.
     Note where the free rendering departs far from the words, with the original or the base's wording, so the
     reader can see it (`word` notes). Record what you changed in the draft in your report.
2. **Original-language route.** Where no free English exists (Atrahasis), you translate from the original as below,
   in the same idiomatic voice.

## Sources (generated, read-only)
`texts/orig/<id>.json` `akk` (for Akkadian books): the Akkadian of each verse in transliteration, from the
best-preserved copy, each starting with its tablet line ("I 36:", "II E 78b:", "III ii 30'':"). `line` gives each
verse's tablet line(s). One verse is one tablet line; a run of lines no copy preserves is one verse ending
"(lost)". `texts/src/<id>.score.json`: every copy of every line, with SEAL's word-by-word lemma and gloss.
`texts/src/<id>.notes.json`: SEAL's own remarks in the score (gaps, where a segment is placed, parallel lines,
colophons). `texts/src/<id>.flood.json`: the other flood versions (Middle Babylonian copies, the Ark Tablet).
`texts/auto/<id>.json`: verses where two or more copies preserve the line, with each copy's text, for your variants.
The SEAL pages themselves (`.cache/dl/seal/node<n>.html`, from `tools/world-fetch.sh`) have SEAL's commentary,
the list of copies (sigla) with their museum numbers, places and dates, and the bibliography: read them with a
script when you need a witness named exactly.

There is no English text in `texts/en/` for these books: the only English help is SEAL's word glosses. The Conversational English Translation is a
fresh translation from the Akkadian. Copyrighted translations you must not copy or lean on (drift audit in your head,
as agent-writer.md describes for the NIV and ESV): for Atrahasis, W. G. Lambert and A. R. Millard (1969), B. R. Foster
(<i>Before the Muses</i>; <i>Context of Scripture</i>), S. Dalley (<i>Myths from Mesopotamia</i>), E. A. Speiser in
<i>ANET</i>, N. Wasserman (<i>The Flood: The Akkadian Sources</i>, 2020, open access under CC BY-NC-ND, so not to be
adapted), T. Jacobsen, and any English that SEAL itself prints. You may read them to check a hard line's sense, as
the 66-book writers check the BSB, but the Conversational English Translation must come from the literal line.

## Translating
- Every verse starts from `python tools/akk-literal.py <id> <chapter>`, saved in your scratch folder, then edited into
  English in the voice above. Akkadian poetry is built in pairs of lines that echo each other; keep each verse to its own
  line, so the pairs show.
- Broken lines: translate what survives and mark each gap with "...". Words SEAL restores in [brackets] from a repeated
  passage or another copy may be translated as text; a restoration SEAL marks with "?" or that rests on no parallel
  is translated with "..." or explained in a note. Never fill a gap from another translation.
- A "(lost)" verse becomes a short line in parentheses saying how much is missing, from its `line` label: "(Lines 309
  to 327 are lost.)" or "(About twelve lines are lost.)". Where the story clearly moves on across the gap, a note may
  say what the lost lines probably told, with who says so.
- Variants: the copies differ often (an Old Babylonian copy against a Neo-Assyrian or Late Babylonian one). Record in
  variants.json every difference that changes the meaning, naming the copies by SEAL's sigla with what they are
  ("A, the Old Babylonian copy of Ipiq-Aya from Sippar"; read SEAL's sigla list for each), the Akkadian, an English
  rendering, and the Conversational English Translation wording with that reading. Where the base copy is broken and the Conversational English Translation follows another
  copy that agrees wherever both survive, the reader still needs to know which copy the words rest on, but that is
  not a difference: give one entry per run of such lines, on the run's first verse, naming the verses and the copy,
  not an entry per verse. Spelling differences need no entry.
- A scribe's line count (a bare number such as "37" at the end of a column, or the tablet's total) is a verse:
  "(The scribe's count of lines for this column: 37.)" or "(The scribe's count of lines for the whole tablet: 416.)",
  with what survives of a broken number ("50 and more"), and a note saying where it stands and, if SEAL completes
  it, SEAL's reading. Colophons follow Tablet I's wording (Atrahasis 5:85-91) in every tablet.
- Names: the forms English readers know (Anu, Enlil, Enki, Ea, Nusku, the Igigi, the Anunnaki, Mami, Nintu,
  Belet-ili, Namtar, Adad, Atrahasis), with the Akkadian in a note at first use, and the book brief's choices for
  names that change between copies. Lowercase "god" and "gods" for these gods; "God" and "the LORD" only for the God
  of the Bible.
- Quotations of the 66 books: the site's current Plain English Translation, exactly (the build checks the long ones).

## What every page needs (beyond agent-writer.md and agent-writer-works.md)
- Notes: heavy `echo` and `canon` notes ("Compared with the Bible": agrees, differs, or answers back), `myth` notes
  for the same story elsewhere in the ancient world (Gilgamesh, the Sumerian Flood Story, Berossus, Enuma Elish), with
  how strong the link is, `history` notes for the first hearers' world, and `spec` notes for your theories. Name every
  writing outside the 66 as content/works.json names it (the site marks Mesopotamian works with the `world` tier).
- Who's who: wherever a figure may be the same person or being as someone in the Bible (Atrahasis and Noah; the gods
  who labor and rebel, and the Watchers; the slain god whose blood makes humankind, and the Bible's picture of
  humans and of blood), give a note that weighs it: what fits, what does not, who has argued it, and a plain verdict
  (very likely, likely, possible, unlikely). The book.json owner gathers these in `canon.matches`.
- Chapter pages: `views` for every lens with something distinct to say; `settings` for every speech, prayer, decree,
  lament and command inside the story (who speaks, to whom, why), with `readers` naming the real first hearers by
  evidence (for Atrahasis: scribes and their pupils in Old Babylonian cities, with the copy's colophon where it
  names the scribe and the king); `traditions` cards only where Christian traditions really differ over a question
  the passage raises (for example, how Genesis 1-11 relates to Mesopotamian stories, or whether the gods of the
  nations are demons or nothing), sourced like any other card.

## Book-level files
The book.json owner writes `canon` with `"tier": "world"`. and `"style": "conversational"` (the build then names the site's
translation the Conversational English Translation on every page; a book translated before 2026-11-03, such as Atrahasis, keeps the
Plain English Translation name until it is redone in this voice). Beyond the fields agent-writer-works.md lists:
- `accepted_by`: who held it sacred and who does not (its first hearers' temples and scribes; Judaism; the churches;
  any living group that uses it), at least two rows.
- `rejected_why`: why Jews and Christians do not read it as Scripture, in plain terms (it is the scripture of other
  gods; it contradicts what the prophets and apostles teach about God; its story of the Flood differs from Genesis
  at the root), stated with respect.
- `christian_view` [{h, b}]: how a Christian reads it, the heart of the page: what it gets right that the Bible also
  says, what it bends or lacks, the borrowing question with every answer (point 2 above), the spiritual reading
  (point 3), and why the differences matter for the gospel (for example, a God who made humans to rest with him, not
  to carry the gods' baskets; a covenant after the Flood, not a curb on births).
- `matches` [{name, bible, likely, b, refs}]: each figure who may be someone in the Bible. `likely` is one of very
  likely, likely, possible, unlikely; `b` weighs the evidence both ways and names who argued it; `refs` the Bible
  passages. This is Matt's question, so make it careful and complete.
- `cited_in`: kind `parallel` is allowed for these books: a Bible passage that tells the same event or uses the same
  picture without quoting.
- `reliability` (labeled as Claude's analysis): (1) as a witness to what its first hearers believed (very high, and
  why); (2) textual reliability (how many copies, how broken, how late); (3) as history (what it may remember of real
  events, measured by Genesis); (4) as theology, measured by the Bible, point by point.

## Shared files
This work is done by the lead session, so it is not a lane: new terms, topic cores and works.json entries go in the
shared files directly only when the brief says the lead has made them; otherwise propose them in
`content/proposals/world/` (terms.json, topics/<id>.json, works.json, topics.md), which the build reads and the lead
merges. Never edit an existing topic core or another book's folder.

## Check
`node tools/build.js --check <id>/<part>` until 0 errors and 0 warnings in your part. Keep `sources-checked.md` in your
scratch folder (STYLE.md rule 2): every scholar's view, date, museum number and witness you state, and where you saw it.

## Sensitive passages (Matt, 2026-11-03; this group only, never the 66 or the other tiers)
The standard is roughly PG-13. Content a PG-13 film would show or imply (battle deaths, executions stated plainly, adultery
or rape mentioned without detail, rough language) stays in the open text. Content past that (graphic or lingering gore and
torture, explicit sexual description, crude detail dwelt on) is hidden behind a short summary; the reader presses Show to
read it. The translation is never cut or softened: the full text stays in plain.txt, so notes keep working. It is a judgement
call per passage, and the Bible's own sexual, crude and violent material is the yardstick: if the Bible is as frank, leave it.

You write the entries only when the review (`## Sensitive passages` in review.md) or your own reading finds a candidate. One
file per part, `sensitive.json` next to plain.txt (the book's folder if it has no parts):
`[{"v": "2:45", "text": "<exact words from that verse's plain.txt>", "kind": "sexual" | "crude" | "violence", "summary": "<one short line>"}]`
- `text` is the span to hide: the whole verse text, or only the offending sentence or phrase. It must occur exactly once in
  the verse, must not contain " / ", and must not overlap another entry. A note or gloss must sit wholly inside the span or
  wholly outside it (or enclose it); the build errors on a partial overlap. Several entries per verse are fine.
- `summary` (140 characters at most) is neutral and high level: it names the kind of thing, with no explicit detail, no
  moralizing and no judgement of the people involved. Good: "A graphic account of how the senators were killed." Bad: the
  same line with the method named, or "A disgusting orgy." Also keep explicit detail out of the title, preview and
  anchor of notes inside a hidden span: the chip hides the verse text, not your notes.
- The build allows the file only for books whose book.json has `canon.tier: "world"`.

Run `node tools/build.js --check <id>/<part>` after writing it.
