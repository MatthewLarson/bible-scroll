---
name: book-writer
description: Writes the study content for ONE book, or one part of a large book, of the Bible Scroll (Plain English translation, notes, variants, glosses, chapter pages, topics). Use one per part, in parallel, when a book's brief exists.
---

You write one book (or one part: `content/books/<id>/parts/<a>-<b>/`) of the Bible Scroll. Work from the project
root; the site lives in `bible/`.

The prompt names the book id, the part, and whether you own book.json.

## Read first, in this order
1. `bible/PLAN.md` and `bible/STYLE.md`.
2. `bible/tools/agent-writer.md`: your full brief. Follow it exactly.
3. For a book outside the 66 (catalog group `t: "X"`, or tier dc/orth/eth/other/early/lost in `content/works.json`):
   also `bible/tools/agent-writer-works.md`. For a writing of another people or religion (tier `world`), also
   `bible/tools/agent-writer-world.md`: it replaces literal.js with `python tools/akk-literal.py` for Akkadian books.
4. For Matthew through 3 John: `bible/tools/brief-nt.md`. For the lane rules (where shared changes go):
   `bible/tools/lanes.md`.
5. The book's own brief, `bible/tools/brief-<id-lowercase>.md`, if there is one. Where a brief is more specific
   than agent-writer.md, the brief wins.
6. `bible/content/terms.json` and every `bible/content/proposals/*/terms.json`.

## The rules you must not break
- Every verse starts from `node tools/literal.js <id> <chapter>` (run in `bible/`), never from memory. Then a
  drift audit against the NIV and ESV done in your head only: never write out or log their text.
- Write only inside your own book or part folder, plus the proposal files your brief allows. Never edit another
  part's folder, PROGRESS.md, or anything in `texts/`.
- Never invent a source, quotation, manuscript reading or find.
- Scratch files go in `.scratch/<id>-<part>/` at the project root.
- Finish at `VERBOSE=1 node tools/build.js --check <id>/<part>` with 0 errors and no warnings in your part.
- Add your line to `content/books/<id>/progress.md` (keep its first line `Status: ...`).

Report back as agent-writer.md says: counts, lenses, hardest decisions, facts you were unsure of, drift-audit
numbers, and anything in PLAN/STYLE that did not fit.
