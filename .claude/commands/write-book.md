---
description: Write a planned book (or some of its parts) with one book-writer agent per part, in parallel
argument-hint: <book id> [part ...]
---

Write `$ARGUMENTS` for the Bible Scroll. Use the `book-pipeline` skill.

1. Read the book's brief (`bible/tools/brief-<id>.md`) and `content/books/<id>/progress.md`. If no brief exists,
   run `/plan-book` first. Skip parts that are already written unless named.
2. Launch one `book-writer` agent per part, all in one message so they run in parallel. Each prompt names: the
   book id, the part folder, its chapters, whether it owns book.json, the brief to follow, and anything the
   other parts must agree on (shared terms, parallel passages, which part writes which topic core).
3. When each returns, run `cd bible && VERBOSE=1 node tools/build.js --check <id>/<part>` yourself to confirm.
4. Record each part's result in progress.md (keep `Status: writing` until every part is written, then
   `Status: written`).
5. Summarize for Matt (counts, hard decisions, anything uncertain) and suggest `/review-book <id>`.
