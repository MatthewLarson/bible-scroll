# Brief: hostile review of one book of the Bible Scroll

Another writer has produced the study content for one book of a whole-Bible study website. Your job is to find
everything wrong with it. Be adversarial: assume there are errors and hunt for them. You did not write it and you
owe it nothing. Do NOT edit the content files: you write a report; the writer fixes.

## Read
- `bible/STYLE.md` (the rules the writer had to follow) and `PLAN.md`.
- The book: `bible/content/books/<id>/` (plain.txt, notes.json, variants.json, glosses.json,
  chapters.json, book.json, topics.json, sources.json) and any topic files in `content/topics/` it created.
- The sources: `texts/orig/<id>.json` (Hebrew/Greek word by word), `texts/en/<id>.json`, `texts/auto/<id>.json`.
  Load large files with a short script and print a chapter at a time.

## Check, at minimum
1. Translation, verse by verse against the Hebrew/Greek: anything added, left out, softened, sharpened or
   mistranslated; names, numbers, tenses, who-does-what; consistency of key terms across the book; whether it
   follows the reading it claims; dependence on (or copying of) a copyrighted modern translation. When you flag a
   match, describe it and quote at most a few words of the other version; never reproduce whole NIV/ESV verses.
2. Reading level and style: about 8th grade, modern American English, short sentences, no em-dashes in prose,
   poetry line breaks where the original is poetry.
3. Facts: every historical, archaeological, linguistic and manuscript claim. Flag anything invented, garbled or
   doubtful: citations to works that do not exist or do not say that, wrong dates, wrong manuscript names,
   misattributed quotations, Hebrew/Greek words wrongly spelled or glossed. Use web search to verify when unsure.
   STYLE.md rule 2 binds you too: never confirm a claim from your own memory. Check it in a source you open now,
   and say in the finding whether you verified it (and where) or could not. Every detail the writer hedged ("as
   reported", "not rechecked", "from memory") or could not have checked is a finding: verify it, or recommend
   removing it. Compare the writer's `sources-checked.md` in their scratch folder.
4. Variants: every significant difference between witnesses that a careful reader should know (compare
   texts/auto, and what you know of BHS/BHQ, the LXX, DSS, Samaritan Pentateuch, NA28/UBS5, the KJV/TR):
   missing entries, wrong witnesses, wrong "follow" choices or weak reasons.
5. Fairness: every major view (Jewish and Christian, traditional and critical, literal and figurative) given in
   its strongest form; no caricature; consensus labeled as consensus; Claude's theories labeled and plausible.
6. Cross-referencing: missing Old Testament sources and New Testament uses, missing topics, duplicate or
   near-duplicate topics (one page per subject across the whole Bible), refs that point to the wrong verse.
7. Audience and purpose: book.json `audience` and every chapter's `settings`. Is there a setting for every
   speech, sermon, parable, prophecy, prayer, song, letter and block of law? Are the first hearers named
   exactly, as the text and history support (not "people" where it is the Pharisees, the Twelve, the priests or a
   particular church)? Does each "why" say what the words were meant to do for those hearers, and does it state
   a debated audience or date as settled when it isn't?
8. Christian traditions and other writings: are the places where Christian traditions really conflict shown as
   `traditions` cards, with each tradition's answer stated fairly and sourced (catechisms, confessions, named
   theologians)? Is any tradition caricatured or missing where it has a distinct view? Is every writing outside the
   66 books named as in content/works.json, and never presented as Scripture without saying for whom?
9. Mechanics: run `node tools/build.js --check <id>`; anchors that are awkward or cover the wrong words; glosses
   that are wrong or patronizing; chapter pages missing key material.

## Write
`bible/content/books/<id>/review.md`:
- A one-paragraph verdict.
- Numbered findings, most serious first, each with: severity (critical / major / minor), location (file and
  verse or entry), what is wrong, the evidence (quote the Hebrew/Greek or the source), and the fix you recommend.
- Leave a heading `## Fixes applied` at the end, empty, for the writer.

Reply with the verdict and the count of findings by severity.
