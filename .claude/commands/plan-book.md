---
description: Plan a new book of the Bible Scroll - brief, parts, lenses, progress file, atlas harvest
argument-hint: <book id, e.g. Sng or Mrk or Wis>
---

Plan book `$ARGUMENTS` for the Bible Scroll. Use the `book-pipeline` skill.

1. Read `bible/PLAN.md`, `bible/STYLE.md`, `bible/tools/lanes.md`, the catalog entry for the book
   (`bible/texts/catalog.json`: verse counts per chapter), and the newest briefs as models
   (`bible/tools/brief-ecc.md` for poetry/wisdom, `brief-isa.md` for prophets, `brief-nt.md` + `brief-mat.md`
   for the New Testament, `brief-pro.md` and `brief-psa.md` for the lead decisions pattern). For a book outside
   the 66, read `bible/tools/agent-writer-works.md` and `notes/bible-site-noncanon*.md`.
2. Split the book into parts of about 100–200 verses on natural breaks (`parts/<a>-<b>/`, zero-padded). Name
   which part owns book.json. Fix the lenses (keys and labels) for every part now.
3. Write `bible/tools/brief-<id lowercase>.md`: parts, lenses, book.json owner, original-language base text and
   witnesses to weigh, key terms (check `content/terms.json` and `content/proposals/*/terms.json`), parallels
   with books already written (the earlier book's Plain English Translation is the model), places that need full treatment
   (variants, traditions cards, settings, topics), and the model books.
4. Create `bible/content/books/<id>/progress.md` with `Status: writing` and the plan in one line.
5. Run the atlas harvest with the `atlas-harvester` agent (canonical books only; Bible Atlas has no data for books
   outside the 66).
6. Show Matt the plan (parts, lenses, main decisions) in a short summary, then suggest `/write-book $ARGUMENTS`.
