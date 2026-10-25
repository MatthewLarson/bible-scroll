---
description: Pick up the Bible Scroll where the cloud project stopped (or where the last session stopped)
argument-hint: [book id]
---

Resume work on the Bible Scroll. Book (optional; otherwise the whole project): $ARGUMENTS

1. Read the "Resume points" section of `README.md`, the matching `bible/content/books/<id>/progress.md`, and the
   notes in `notes/` for that book's lane.
2. Check the files, not the notes: which parts have plain.txt, which have review.md, which have a filled
   `## Fixes applied`, and what `VERBOSE=1 node tools/build.js --check <id>` says now.
3. Tell Matt what is left in a few lines and propose the next step (usually `/review-book` or `/write-book` for the
   missing parts). Start it once he agrees; agents that were cut off are restarted fresh, told to continue from
   the files.
