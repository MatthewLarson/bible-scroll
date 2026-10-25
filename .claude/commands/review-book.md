---
description: Hostile-review a written book part by part with separate agents, then apply the fixes
argument-hint: <book id> [part ...]
---

Review `$ARGUMENTS` for the Bible Scroll. Use the `book-pipeline` skill.

1. For every written part without a review.md (or the parts named), launch one `hostile-reviewer` agent per part,
   in parallel. A reviewer must never be the agent that wrote the part. If book.json was written separately,
   review it too (`review-book.md` in the book folder).
2. Read each review. Collect cross-part items (term clashes, parallel wording, duplicate topics, quotes) into
   `.scratch/<id>-review-notes.md` and decide them as lead, so the fixers apply one answer everywhere.
3. Launch one `review-fixer` agent per review, in parallel, with your cross-part decisions in the prompt.
4. Confirm each part: review.md has a non-empty `## Fixes applied`, and
   `cd bible && VERBOSE=1 node tools/build.js --check <id>/<part>` is clean.
5. Alignment pass across parts yourself: parallel passages worded alike, terms consistent, quotes of changed
   verses synced, then `VERBOSE=1 node tools/build.js --check <id>` at 0 errors and 0 warnings.
6. Make sure the atlas review is done (`/harvest-atlas <id> review`), then set progress.md to
   `Status: reviewed, ready` and tell Matt it can go out with `/publish`.
