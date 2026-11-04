# Brief: the local model's draft translation of a historical or other-religion writing

This brief is for the LOCAL model (run on Matt's machine), not for Claude. You do one job: turn an existing English
translation into today's American English, verse by verse, and save it. The result is the site's Conversational English Translation. Nothing else. Claude does all the study
work afterward (notes, topics, links, variants, chapter pages, checking), because that work needs facts and sources
that must not be guessed.

## What you are given
- The book id and the part folder, from the book's brief `tools/brief-<id>.md` (read its "Local draft" section: the
  base text key, the chapters of your part, and the names list).
- The base English, one verse per line: `node tools/base-lines.js <id> <chapter>`. It is an old public-domain
  translation (for Marcus Aurelius, George Long's).
- The style model: `../translation-examples/Meditations/Book-1/old.md` (Long's English) and `modern.md` (what Matt
  wants it to sound like). Read both before you start, and read them again if your English starts to sound old.

## What you write
1. `content/books/<id>/parts/<a>-<b>/plain.txt`, and no other file in the content folder. Format, exactly:
   ```
   ## A short heading for the section
   1:1 First verse in today's English.
   1:2 Second verse.
   ```
   One line per verse, starting with `chapter:verse` and one space. Every verse in the base gets a line, in order,
   with the base's numbers. A `## heading` line before each new section (every few verses, where the subject
   changes). Plain text only: no Markdown inside verses, no notes, no brackets of your own.
2. `.scratch/<id>-<a>-<b>/local-questions.md`: one line per verse you were unsure about, saying why ("1:14 not sure
   who 'my brother Severus' is"; "2:3 the sentence about Providence is hard to follow"). Claude reads this first.

## How it should sound
- Like a thoughtful American talking today: contractions (I'm, didn't, it's), everyday words, short sentences,
  common expressions where they carry the meaning ("mind my own business", "pick favorites", "keep your cool",
  "hold a grudge", "show off").
- Sense for sense, not word for word. Turn the old sentence around, split long ones, change "From X I learned Y"
  lists into sentences that say who did what ("Rusticus showed me...", "Maximus never lost his cool").
- Old things that need explaining may be put the way a reader today would get them ("not to pick favorites at the
  chariot races" for "neither of the green nor of the blue party"). Do not add explanations, dates or facts the base
  does not give, and do not add who someone was. Claude adds those.
- Keep every thought. You may merge, reorder and shorten wording, but do not leave out a sentence, a name, a place
  or a subject because it is odd, awkward or unpleasant. If a line is hard, translate it plainly and put it in
  local-questions.md.
- Do not make it modern in ways the author could not mean: no modern things (phones, cars, money amounts in
  dollars), no jokes or slang the author did not intend, nothing added for effect.
- Gods: the author's gods stay "the gods" (lowercase). Write "God" only where the base has it and the author means
  one supreme god, and add that verse to local-questions.md.
- Names: the forms in the brief's names list. Otherwise keep the base's spelling.

## What you never do
- Never write notes, topics, cross-references, Bible links, variants, chapter pages, book.json or sources. Never
  say what the Bible says about the passage. Never name a scholar, a manuscript, a date or a book.
- Never copy a modern copyrighted translation, including `modern.md`: it shows the voice, not sentences to reuse.
- Never edit any file except the two above, and never run git.

## Done when
Every verse of your part's chapters has a line, the headings are in place, and `node tools/build.js --check
<id>/<a>-<b>` shows no error that points at a plain.txt line (errors about missing notes or pages are expected;
Claude's pass fills those). Then write `Local draft: done` as the last line of local-questions.md.
