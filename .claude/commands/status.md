---
description: Show where every book of the Bible Scroll stands and what to do next
---

1. Run `cd bible && node tools/build.js` (it regenerates PROGRESS.md) and read `bible/PROGRESS.md`.
2. For every book whose status is not `reviewed, published`, read the end of its
   `bible/content/books/<id>/progress.md` and list its parts as written / reviewed / fixed (a part is fixed when
   its review.md has a non-empty `## Fixes applied`).
3. List what is waiting in `bible/content/proposals/*/`.
4. Reply with a short table and the next three actions, most useful first.
