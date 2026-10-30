# Writing guide for a book of the Bible Scroll

Read PLAN.md first. You write only inside `content/books/<id>/`, plus new topic files in `content/topics/`
(see below). Run `node tools/build.js --check <id>` until it reports no errors.
The Revelation files in `content/books/Rev/` are the model for tone, depth and density.

The reader: an adult or teen in America who reads at about an 8th-grade level, wants to understand the Bible
deeply, and wants every view presented fairly. Matt, who commissioned this, wants:
- a faithful translation from the original languages, in modern American English at an 8th-grade level;
- every interpretive view, literal and figurative, Jewish and Christian, traditional and critical, given fairly;
- likely mistranslations and common misreadings pointed out, with the Hebrew or Greek;
- as much cross-referencing as possible;
- original ideas welcome, always clearly labeled as Claude's theory.

## Ground rules

1. Translate from the original. OT: the Hebrew/Aramaic Masoretic Text (`texts/orig/<id>.json`, field `wlc`,
   word by word in `w` with glosses). NT: the SBLGNT (`sbl`), checking the Byzantine text (`byz`) and the word
   list `w` (its last field lists the editions that contain each word: N=NA28 n=NA27 S=SBL Y=Tyndale W=Westcott-Hort
   G=Tregelles T=Textus Receptus B=Byzantine; empty means all). English versions in `texts/en/<id>.json`
   (BSB, KJV, WEB, ASV, YLT) are for checking, never for copying. Do not reproduce any copyrighted translation
   (NIV, ESV, NASB, NLT, CSB, NRSV, NET, NKJV...): do not recall or lean on their wording while you translate,
   because familiar phrasing creeps in. Build each verse from the original words, then compare. A reviewer checks
   every verse against the ESV and NIV, and close matches have to be redone.
2. Never invent a source, a quotation, a manuscript reading or an archaeological find. **Never rely on memory
   for a checkable detail.** A manuscript or edition reading, a witness list, a page, section, canon, article,
   paragraph or letter number, a quotation, a date, a coordinate, or what a named scholar, father, rabbi or church
   says goes into content only if you checked it in this session in something you actually opened: `texts/` (the
   word lists, `tools/lxx.py`, `tools/dss.py`), the Source Library MCP, the Bible Atlas MCP, or a reliable page you
   fetched (Sefaria, Perseus, CCEL, a church's own catechism or confession, a publisher's or journal's page).
   "Reported by X" is allowed only when you read X's report (or a page quoting it) in this session. Keep a list of
   what you checked and where in your scratch folder (`sources-checked.md`), so the reviewer can follow it.
   If you cannot check a detail, leave it out and say only what you could check (for example, the editions the
   word list shows, with no manuscript names). Never publish an unchecked detail behind a hedge: "as reported",
   "not rechecked", "from memory" and the like are not allowed in content. Broad, well-known facts (Augustine
   opposed Pelagius; Luther lectured on Galatians) need no locator, but never add a number, a quotation or a
   wording you have not seen. Writers, reviewers and fixers all follow this rule: a reviewer does not confirm a
   claim from memory, and a fixer does not correct one from memory.
3. Fairness: when views differ, give each in its strongest form, name who holds it, and do not caricature.
   When there is a scholarly consensus, say so plainly, and say who dissents.
4. Your own ideas go only in `spec` notes and `spec` boxes, labeled as yours, with the verses they rest on,
   and saying where they overlap with published scholarship.
5. Plain American English everywhere: short sentences, common words, active voice. Explain any technical term
   the first time (e.g. "the Septuagint, the Greek translation of the Old Testament made before Jesus").
   Avoid em-dashes in prose; use commas, colons or periods.

## plain.txt: the Plain English Translation

**The name.** The site's own translation is called the **Plain English Translation**. Write that full name in notes, reviews and briefs, never bare "the Plain" (Matt, 2026-10-30: bare "Plain" was confusing). Possessive: "the Plain English Translation's". The file is still `plain.txt` and the data key `plain`.

```
## Section heading
1:1 Verse text.
1:2 Verse text.
```
- Every verse of the book, in order, one line each, keyed by English (KJV) versification. Psalm titles are
  verse 0: `3:0 A psalm of David, when he ran away from his son Absalom.`
- Poetry (Psalms, Proverbs, Job's speeches, prophetic oracles, songs): mark line breaks with ` / `.
- Straight quotes `"` and apostrophes `'` only. Nested quotes use single quotes.
- The divine name YHWH is "the LORD" (capitals), as in most English Bibles; "Adonai" is "the Lord";
  "LORD God" for YHWH Elohim. Explain this in a note on the first occurrence.
- Names: the common English spelling (as in the BSB/NIV): Isaac, Boaz, Elimelek -> "Elimelech".
- Faithful first, readable second: keep the original's images, repetitions and word plays where English can
  carry them; flatten only what English cannot carry, and then add a note. Do not add interpretation to the text.
- Where a word or phrase is debated, translate the most likely meaning and put the alternatives in a note.
- Section headings: short, plain, 2–6 words.
- One-chapter books (Obadiah, Philemon, 2 John, 3 John, Jude): in prose cite "Jude 9" (the site reads it as 1:9);
  in `r` lists use bare "1:9".

## notes.json: notes in the text

An array of objects:
```json
{"v":"3:9", "a":"Spread the corner of your garment", "type":"word",
 "t":"Title of the note", "p":"One-sentence preview, under 120 characters.",
 "b":"Body, HTML allowed (<i>, <b>). 40–160 words.",
 "orig":"כְּנָפֶךָ (kenapheka), 'your wing'", "kind":"nu",
 "r":"Ruth 2:12; Ezekiel 16:8; Deuteronomy 22:30", "top":"kinsman-redeemer", "s":["block"],
 "l":[["Levirate marriage","Levirate marriage"]]}
```
- `a` is an exact substring of the Plain English Translation verse (case and punctuation exact, not crossing ` / `).
  Two notes on the same verse may nest but must not partly overlap.
- `type`: `word` (translation, Hebrew/Greek, mistranslations), `history` (archaeology, culture, the ancient
  world), `echo` (Scripture connection: quotations, allusions, later uses), `symbol` (what an image means),
  `views` (how the schools of interpretation read it), `israel` (Israel, the Jewish people and the church),
  `myth` (parallels in other ancient cultures, with an honest verdict on whether there is a real link),
  `spec` (Claude's theory: your own idea, clearly yours).
- `word` notes also give `orig` (original word with transliteration) and `kind`: `mis` the usual English says
  something the original does not; `var` manuscripts differ (prefer variants.json for that); `com` a popular
  belief the text does not say; `deb` the original allows more than one reading; `nu` correct English that
  hides something.
- `r`: a reference list. Always name the book ("Genesis 38:8"), except bare "c:v" for this same book.
- `top`: the topic id this note belongs on (optional). `s`: source keys. `l`: Wikipedia [label, article title].
- Density: about one note for every two to three verses in long books, up to about one per verse in short,
  much-studied ones (Ruth, Jude). Never explain the same point twice: one note, then refer to it. Every chapter
  needs some notes. Cover: every likely mistranslation, every Old Testament quotation or major allusion
  (both directions: where this passage is quoted later, too), every major interpretive crux, key Hebrew/Greek
  words, and the history a first reader knew and we do not.

## variants.json: differences between the manuscripts

Required wherever the witnesses differ in a way that changes the meaning, or that a major English translation
footnotes, or that makes the KJV read differently from modern versions. Start from `texts/auto/<id>.json`
(machine-found: Ketiv/Qere and other Hebrew witnesses, LXX additions, Byzantine vs NA, words only in some
Greek editions); most of those are spelling and need no entry. Add what you know from the Septuagint, the Dead
Sea Scrolls, the Samaritan Pentateuch, the Targums, early versions, and the NA28/UBS5 apparatus.
```json
{"v":"1:5", "a":"Jesus", "t":"Jesus or the Lord?",
 "p":"The oldest manuscripts say Jesus saved the people out of Egypt.",
 "readings":[
   {"w":"Oldest Greek manuscripts (Codex Alexandrinus, Vaticanus, P72 'God Christ'); NA28, SBLGNT", "orig":"Ἰησοῦς", "en":"Jesus", "plain":"Jesus"},
   {"w":"Codex Sinaiticus, Byzantine majority, Textus Receptus (KJV)", "orig":"ὁ κύριος", "en":"the Lord", "plain":"the Lord"}],
 "follow":0,
 "why":"Why the Plain English Translation follows this reading, in plain words (oldest evidence, harder reading, etc.).",
 "b":"Optional further explanation (HTML).", "s":["metzger"]}
```
- The example above is illustrative only; check every witness yourself.
- `a` is in the verse exactly as `readings[follow].plain`. Other readings' `plain` is what replaces `a` if the
  reader switches (use "" for an omission). For a whole added verse (e.g. Acts 8:37), anchor the verse's
  first words and give the added text as an extra reading's `plain` including the anchor.
- `w`: name the real witnesses, with dates where useful ("Great Isaiah Scroll, 1QIsa-a, about 125 BC").
- Be honest about uncertainty and about which translations follow which reading.

- A variant that spans two verses: make one entry per verse and say in each `p` that they go together.
- Notes and glosses may sit inside a variant's anchor; they show only while the followed reading is shown.
- A note may not use exactly the same anchor as a variant (the build errors). This is deliberate: one tap must open one
  thing. Anchor the note on a word or two inside or beside the variant, or put the point in the variant's `b`.

## glosses.json: Today's words

`[{"v":"1:1","a":"exact phrase from the Plain English Translation","m":"a loose modern American way to say it"}]`
A gloss is not a translation: it gives a modern reader the feel the phrase had for its first hearers
("redeemer" -> "family rescuer"). About one per 2–4 verses, on idioms, measures, money, customs and church words.
Same anchor rules as notes; a gloss may nest inside a note or contain one, but not partly overlap.

## chapters.json: one commentary page per chapter

```json
[{"n":1, "title":"Short evocative chapter title", "key":"1:16",
  "sum":["Lead paragraph: what happens and why it matters (60–120 words).", "Second paragraph (optional)."],
  "readings":[["Read as history","..."],["Read as literature","..."]],
  "views":{"A":"how lens A reads this chapter", "B":"..."},
  "deep":[{"h":"Heading","b":"HTML paragraphs"}, {"box":"spec","title":"...","b":"...","refs":"..."}],
  "echoes":"Genesis 38; Deuteronomy 25:5–10; Matthew 1:5", "topics":["kinsman-redeemer","moab"],
  "settings":[{"v":"1:16–17", "what":"Ruth's vow", "by":"Ruth", "to":"Naomi, on the road to Judah",
    "when":"as Naomi urges her to go back to Moab", "why":"what the words are meant to do for the hearer", "readers":"what it meant to the book's first readers",
    "views":[["Label","when the audience or purpose is debated, each view in turn"]], "s":["source-key"]}]}]
```
- `readings` (optional): two or three contrasting ways to read the chapter (literal and symbolic, historical
  and literary, Jewish and Christian), one paragraph each.
- `views`: keyed by the lenses defined in book.json (omit a lens when it has nothing distinct to say).
- `deep` (optional): deep-dive sections for chapters that need them; `spec` boxes for your theories.
- `echoes`: the main cross references for the chapter, both directions.
- Optional: `links` (Wikipedia [label, title] pairs), `svg` (an inline sketch) and `caption`.
- `settings` (who heard it, and why): one entry for every speech, sermon, parable, prophecy, prayer, song,
  letter or block of law in the chapter. Put it on the page of the chapter where the passage starts; `v` is its
  range ("5:1–7:29"). `what` names it; `by` is the speaker or writer as the text presents them; `to` is the
  first hearers or readers (who exactly: the crowd, the Twelve, the Pharisees, the priests, all Israel on the
  plains of Moab, a church in a city); `when` is the occasion; `why` is the purpose, what the words were meant
  to do for those hearers, and what changes in the meaning once you know who they were. For a law, say whom it
  binds (priests, judges, heads of households, every Israelite, the foreigner living among them), where and
  when it was meant to apply (the camp, the land, the Temple), and the problem it answers. Where scholars
  differ on the audience or purpose (Galatians' churches, the setting of a parable in Matthew and in Luke, a
  law's date), give each view in `views`. In a story, `to` and `why` are about the hearers inside the story;
  `readers` (optional, for narrative books) says what the passage meant to the book's own first readers
  (Israel hearing Genesis, exiles reading Kings), so the two layers never blur. The site shows the card on the chapter page and on every verse it
  covers, so readers always see who the words were first for.

## book.json: the book's opening pages

```json
{"title":"Ruth", "subtitle":"short handwritten-style tagline",
 "lead":["paragraph","paragraph"],
 "facts":[["Author","..."],["Date","..."],["Setting","..."],["Kind of writing","..."],["Language","Hebrew"],["Length","4 chapters, 85 verses"]],
 "authorship":[["Traditional view","..."],["Critical scholarship","..."]],
 "audience":{"to":"who the book was first written for: the people, place and situation",
   "why":"why it was written for them: the problem, question or need it answers",
   "views":[["Label","when the audience or purpose is debated, each view in turn"]], "s":["source-key"]},
 "outline":[["1:1–22","..."],["2:1–23","..."]],
 "lenses":[{"k":"A","name":"Short name","desc":"One or two sentences: who reads this way and how"}],
 "sections":[{"h":"Heading","b":"HTML"}],
 "spec":[{"title":"...","body":"...","refs":"..."}],
 "prompts":[["Image title","A ChatGPT image prompt that follows the text's details"]],
 "topics":["..."], "sources":["..."], "links":[["Book of Ruth","Book of Ruth"]],
 "reading":[["Title of a book for further study","one-line description"]]}
```
- Optional: `svg` (an inline sketch for the opening page) and `pages` (extra study pages: `[{"id","label","html"}]`).
- `lenses`: the two to five main schools of interpretation for this book (e.g. for Genesis 1–11: literal
  young-earth, day-age/old-earth, framework/literary, ancient-cosmology/critical; for Daniel: traditional
  sixth-century prophecy, critical second-century; for prophets: historical fulfillment, Christian
  messianic, Jewish, future). Revelation's are Preterist, Historicist, Futurist, Idealist.
- `audience` (required): who the book was first for and why it was written for them. Be concrete (exiles
  back from Babylon in a small Persian province; a church of Jews and Gentiles in Rome that Paul had not yet
  visited) and say how knowing the audience changes the reading. Give debated cases in `views`.
- `sections`: how to read the book, its structure, themes, its place in the canon, how Jews and Christians read
  it, and anything a reader needs before chapter 1.
- `prompts`: two to five image prompts, sketched-on-a-scroll style (ancient manuscript, cave drawing and modern
  art mixed; soft edges, never a hard rectangle).

## topics.json: contributions to shared topic pages

There is exactly one page per topic for the whole Bible. Before you add a topic, list `content/topics/` and
reuse an existing id if one fits (check `aka`). If none fits, create `content/topics/<new-id>.json`:
```json
{"id":"kinsman-redeemer","title":"The Kinsman-Redeemer","kind":"Ideas","aka":["goel","redeemer"],
 "lead":"One or two sentences that describe the topic across the whole Bible, not just your book.",
 "sections":[], "links":[["Go'el","Go'el"]], "sources":[]}
```
Kinds: Ideas, People, Places, Symbols, Words, Events, Studies (long articles), Science (the natural world: sky and
earth, time, the body and healing, faith and science), Creatures (animals and strange creatures, real and visionary). A core file may list `"related"`
topic ids for "See also" links between close subjects (e.g. hesed and mercy). Never rewrite another book's
topic file; add your book's material in your own `topics.json`:
```json
[{"id":"kinsman-redeemer",
  "sections":[{"h":"Boaz redeems Ruth","b":"HTML, 60–250 words","refs":"Ruth 2:20; 3:9–13; 4:1–10"}],
  "common":["a widely held belief, one sentence"], "uncommon":["a minority view, one sentence"],
  "claude":{"title":"...","body":"...","refs":"..."}}]
```
A new core file may hold short whole-Bible overview sections (refs across books). Every section needs `refs` (full book names) so the topic page can filter to the passage a reader came from.
Aim for 8–25 topics per book: its people, places, key ideas, symbols and words, plus the big cross-Bible
themes it feeds (covenant, messiah, temple, exile, kingdom of God, resurrection...).

## Sources

Source keys are global. `content/sources.json` and every `content/books/*/sources.json` map keys to citations:
`"block":"Daniel Block, <i>Judges, Ruth</i>, NAC (1999)"`. Reuse an existing key when it is the same work; put
new keys in your own `content/books/<id>/sources.json`. Make keys specific enough to be unique across the whole
Bible: author plus a short word for the work (`bauckham-jude`, `block-ruth`, `josephus-ant`, `mishnah-avot`), never a
bare surname or a generic word ("green", "targum"). Cite (real books only: standard commentaries, text-critical works such as Tov's
<i>Textual Criticism of the Hebrew Bible</i>, Metzger's <i>Textual Commentary</i>, BHS/BHQ, the Dead Sea
Scrolls Bible of Abegg, Flint and Ulrich, Jewish sources such as the JPS commentaries, Rashi, the Talmud;
for the New Testament, NA28/UBS5, the Editio Critica Maior where published, Metzger, Comfort's
<i>New Testament Text and Translation Commentary</i>, and standard series such as WBC, NICNT, NIGTC, BECNT,
Pillar, Anchor Yale, Hermeneia).

In reference lists a bare "c:v" always means your own book, so name every other book in full each time
("Psalm 78:24; Psalm 105:40", never "Psalm 78:24; 105:40", which reads as your book's 105:40).
Quoting a book this site has already translated: use its Plain English Translation wording exactly (a quotation may skip words with
"..."). The build warns when a quotation followed by its reference, "..." (Exodus 33:20), does not match. To quote
another version on purpose, name it in the parentheses: "on eagles' wings" (Exodus 19:4, KJV).
Reference lists (`r`, `refs`, `echoes`) may cite works outside the 66 books, such as "Tobit 4:15",
"1 Enoch 1:9" or "Mishnah Avot 5:17": they show as plain text, with no link.

## Large books written in parts

A long book is split among several writers. Each writer owns one folder
`content/books/<id>/parts/<first>-<last>/` (zero-padded chapter numbers, e.g. `parts/01-11/`) and writes there
the same files a whole book has: `plain.txt`, `notes.json`, `variants.json`, `glosses.json`, `chapters.json`
(only your chapters, numbered from your first chapter), `topics.json`, `sources.json`. `book.json` stays in the
book folder and is shared: its `lenses` are fixed before the parts start, so every part uses the same lens keys.
Only the writer named as the book.json owner edits it. Key terms are rendered the same way across the whole Bible: `content/terms.json` lists
`["Hebrew or Greek word","English rendering"]` pairs (korban "offering", hesed "loyal love", "the Israelites",
tsara'at "skin disease"...). Read it before you start, follow it, and when your book needs a new shared term,
add it there (re-read the file right before writing) and say so in your report. Check your part with
`node tools/build.js --check <id>/<first>-<last>`. The build joins the parts, so the site cannot tell the
difference. Parts that run at the same time cannot see each other's notes: do not repeat a point that belongs
to another part's chapters; refer to the verse instead ("see 22:2").

Works cited across many books (Tov, Metzger, the Talmud, the Mishnah, Josephus, the Dead Sea Scrolls Bible,
Philo, the church fathers) live in `content/sources.json`. Read it first and reuse its keys.

## Before you finish

`node tools/build.js --check <id>` must pass: every verse present and in order, every anchor found, no partial
overlaps, known topic ids and source keys, references parse. Then update the first line and the log of `content/books/<id>/progress.md` (PROGRESS.md is generated by the build).


## traditions (chapters.json and book.json)
`"traditions": [{"q": "Does baptism itself save?", "top": "baptism", "views": [["Catholic", "Yes: baptism washes away original sin and gives new life (Catechism 1213, 1263)."], ["Baptist", "No: it is an act of obedience by a believer who is already saved."]], "s": []}]`
`top` (required) names the topic page the question belongs to. Cards with the same `top` link to each other ("Asked again at …") and are listed on that topic page, so a question that recurs across books is one subject with many passages, not many copies.
Shown as a "Where Christians differ" card. Each view is [tradition, answer] or [tradition, answer, [source keys]].
Tradition names are fixed (see TRADITIONS in tools/build.js). At least two views; use it only where the answers
really conflict.

## Writings outside the 66 books (content/works.json)
Every writing outside the 66 books that the site names is listed with a tier: dc (deuterocanonical), orth
(Orthodox only), eth (Ethiopian only), other (in no Bible), early (early Christian), lost (named in the Bible,
now lost). The site marks each mention with its tier, unlike Scripture references. "2 Esdras" means the Greek
Ezra–Nehemiah on this site and is never listed; the apocalypse is "4 Ezra".
