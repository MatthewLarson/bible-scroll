---
description: Have the light Claude reviewer check a local model's draft translation of a non-scriptural work
argument-hint: <book id> <part>
---

Check the draft translation for `$ARGUMENTS`. Use the `book-pipeline` skill and `bible/tools/agent-translation-local.md`.

1. Confirm the draft exists (`.scratch/<id>-<part>/local-draft.txt`) and that Matt has filled in "Local setup" in the
   brief. If the draft or the setup is missing, stop and tell Matt what is missing.
2. Launch one `translation-reviewer` agent for the part. Its prompt names the book id, the part and the draft file.
3. Read `.scratch/<id>-<part>/translation-check.md`. Decide any question that reaches beyond the part (a new rendering
   of an existing term, a name used differently in another part) and note the answer for the writer.
4. Hand the draft, the check and your answers to a `book-writer` agent to finish the part, then
   `/review-book <id> <part>` as usual: the hostile review is still required.
5. Add a line to progress.md (model used, findings count, verses sent for a stronger check).
