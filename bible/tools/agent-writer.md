# Brief: write one book of the Bible Scroll

You are writing the study content for ONE book (or one part of a large book) of a whole-Bible study website.
The person who commissioned it, Matt, wants the same treatment every book of the Bible as the existing
Revelation study, above all a faithful Plain English translation from the original languages.

## Read first
1. `bible/PLAN.md` (architecture) and `bible/STYLE.md` (the rules you follow).
2. The model: `bible/content/books/Rev/` (notes.json, chapters.json, glosses.json, book.json,
   topics.json, plain.txt). Match its tone, depth and density. Do not copy its Revelation-specific structure blindly:
   pick lenses and readings that fit your book.
3. Your sources (generated, read-only): `bible/texts/orig/<id>.json` (Hebrew or Greek, word by word),
   `texts/en/<id>.json` (BSB, KJV, WEB, ASV, YLT for checking), `texts/auto/<id>.json` (machine-found textual variants),
   `texts/xref/<id>.json` (cross references). These files can be large: load them with a short script
   (python3 or node) and print only the chapter you are working on.
   The Hebrew word list is the Leningrad Codex only; words that BHS/BHK reconstruct from the Greek are not in it but are
   listed in `texts/auto/<id>.json` with kind "X". When you cite the Greek, weigh which Greek: in the "kaige" section
   (2 Samuel 11:2 to 1 Kings 2:11, and 1 Kings 22 to the end of 2 Kings) Codex Vaticanus, and so Rahlfs, is a text revised toward the
   Hebrew, and the Lucianic (Antiochene) text is the better witness to the Old Greek.
4. The existing topics: `ls bible/content/topics/` and read the ones you might reuse.

## References
A bare chapter:verse means the book you are writing about. Whenever you cite another book, write its name on every
reference to it: "(Deuteronomy 4:35; compare Deuteronomy 4:39)", not "(Deuteronomy 4:35; compare 4:39)". The build
warns when a bare reference sits inside the brackets of another book's reference.

## Write
Into `bible/content/books/<id>/`: `plain.txt`, `book.json`, `chapters.json`, `notes.json`,
`variants.json`, `glosses.json`, `topics.json`, `sources.json`, plus any new `content/topics/<topic-id>.json` core files.
How to translate. Reviewers found drafts drifting into NIV/ESV wording (up to 400 verses in one part) when verses
were written from memory, even when told not to. So never write a verse from scratch. Start from the literal line:
`node tools/literal.js <id> <chapter>` prints each verse as the source glosses in the original word order. Save
that output, then edit each line into plain 8th-grade English: reorder, merge words, drop the object marker,
supply what Hebrew/Greek leaves implied, and choose plain words, but keep the meaning and word choices the glosses
give unless a gloss is wrong for the context. The result must still read as natural 8th-grade English: English word order, sentences mostly under 20 words
(split long Hebrew chains with periods), idioms turned into plain English ("if he cannot afford a sheep", not
"if his hand cannot reach a sheep"), and the meaning checked (a prohibition must not read as a command).
Only after a whole chapter is drafted, compare with the BSB/KJV for
sense (never to borrow wording). If a verse comes out as a phrasing you recognize from a modern translation,
change it unless the original allows nothing else.

Drift audit (required, every chapter). Every review so far has still found NIV/ESV wording, 15 to 60 verses per
part, even from writers who were told to avoid it. The copying is unconscious, so check for it on purpose. When a
chapter is drafted, go verse by verse: recall what the NIV and the ESV say for that verse and
compare in your head. Do not write out or log the NIV/ESV text itself (it is copyrighted, and reproducing it
long-form can stop your session). Any run of five or more words in the same order that the Hebrew/Greek does not force, any word the
original does not have (an NIV "the names of", "raiding", "crumbs"), and any NIV/ESV interpretive choice ("Babylonia"
for Shinar) means the verse must be rebuilt from the literal line with a different sentence shape. Keep the audit
list in your scratch folder (verse number, matched / changed / kept, and a few-word reason, never the other
version's text) and say in your report how many verses it changed. Quote Bible verses in notes, chapter pages and topics in this
site's own Plain wording (for books already written) or in fresh wording made the same way: `node tools/literal.js <book> <c:v-v>` works
for any book, so quote Hebrews or Psalms from their literal line too. Never ESV/NIV wording.

Work chapter by chapter: translate the chapter from the original (check each verse against the word-by-word
glosses and at least the BSB and KJV), then write its notes, glosses and variants, then its chapter page.
Write the book-level files (book.json, topics.json) last, when you know the book.

Keep your helper scripts and scratch files in a folder of your own (for example `.scratch/<book>-<part>/` at the project root):
other writers share `.scratch/`, and a generic name like `fix.py` will be overwritten.

Keep JSON valid: write it with a script (python3 json.dump with ensure_ascii=False, indent=1) rather than by hand
when it gets long, and re-read what you wrote.

## Who it was for, and why
Readers should always know who the words were first for and why. Fill book.json `audience` (if you own
book.json) and a chapter `settings` entry for every speech, sermon, parable, prophecy, prayer, song, letter and
block of law (STYLE.md, chapters.json). Name the first hearers exactly (the crowd, the Twelve, the Pharisees, the
priests, all Israel on the plains of Moab, the church at Corinth), the occasion, and the purpose: what the words
were meant to do for them and how knowing them changes the reading. For a law, say whom it binds, where and when
it applies, and what problem it answers. Give debated audiences and dates as views.

## Where Christians differ
Where Christian traditions read a passage differently, show them side by side in a chapter `traditions` entry
(book-wide questions go in book.json `traditions`): {"q": the question, "views": [[tradition, answer, [keys]?], ...],
"s"?}. Use the build's tradition names (Catholic, Orthodox, Lutheran, Reformed, Anglican, Methodist, Baptist,
Pentecostal, Anabaptist, Adventist, Dispensationalist, and others listed in tools/build.js). Choose questions
where the answers really conflict and matter: sacraments, baptism, the Lord's Supper, grace and works,
predestination and free will, church and Israel, the end times, Mary and the saints, the canon, law and Sabbath,
women in ministry, creation. State each tradition's answer as its own teachers state it (cite catechisms,
confessions and named theologians where you can), say where a tradition is itself divided, and never rank them.
Most chapters need none; a book of the Bible usually has a few.

## Books outside the 66
When a note cites a writing outside the 66 books (Sirach, 1 Maccabees, 1 Enoch, Jubilees, the Didache...), use the
name in content/works.json, so the site marks it as deuterocanonical, Orthodox-only, Ethiopian-only, non-canonical,
early Christian or lost. Add a new work there (name, tier, aka) before citing it. Never present such a writing as
Scripture without saying for whom it is Scripture.

## Check
Run `cd bible && node tools/build.js --check <id>` and fix every ERROR (and the warnings that
point at real problems) until it reports 0 errors. Then run `node tools/build.js` once to be sure the whole
site still builds: it prints a `skip` line for each book with errors (usually books other writers are still
writing); your book must not be among them once all its parts are done.

## Rules for shared files
Other writers work at the same time on
other books: never edit another book's folder or another book's topic contributions. Only create a topic core
file in `content/topics/` if it does not exist yet (check right before writing).

## Report back
When done, reply with: verse/note/variant/gloss/topic counts, the lenses you chose and why, the hardest
translation decisions, any place you were unsure of a fact, and anything in PLAN/STYLE that did not fit your book.
Set the first line of `content/books/<id>/progress.md` to `Status: written` and add a short line about your part below it. PROGRESS.md is generated by the build; never edit it.
