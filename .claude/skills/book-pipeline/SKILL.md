---
name: book-pipeline
description: The Bible Scroll's per-book workflow (plan, parallel writers, separate hostile reviewers, fixers, atlas, alignment, hand-over). Use when planning, writing, reviewing or finishing any book or part of the site.
---

# The per-book pipeline

Every book goes through the same stages. Status lives in the first line of `bible/content/books/<id>/progress.md`:
`writing` → `written` → `reviewed` → `reviewed, ready` → `reviewed, published`. `bible/PROGRESS.md` is
generated from those files by the build; never edit it.

| Stage | Who | Output | Done when |
|---|---|---|---|
| Plan | main session | `tools/brief-<id>.md`, progress.md, parts split, lenses fixed | brief exists |
| Atlas harvest | `atlas-harvester` | `content/atlas/<id>.json` | every chapter has an entry |
| Write | one `book-writer` per part, in parallel | the part's plain.txt, notes, variants, glosses, chapters, topics, sources | `--check <id>/<part>` clean |
| Hostile review | one `hostile-reviewer` per part, never the writer | the part's review.md | findings numbered, empty `## Fixes applied` |
| Fix | one `review-fixer` per part | content changes + filled `## Fixes applied` | `--check` clean |
| Atlas review | `atlas-harvester` (review brief) | `content/atlas/corrections/<id>.json` | build clean |
| Align | main session | parallel wording, terms, quote syncs across parts | `VERBOSE=1 --check <id>` 0 errors 0 warnings |
| Publish | main session (`/publish`) | merged proposals, `public/` | book shows on the site |

## Splitting and parts
- Parts of about 100–200 verses on natural breaks, `parts/<a>-<b>/` zero-padded (`parts/001-017/` for Psalms).
- Lenses (the color-coded note kinds) are fixed in the brief before any part starts. One part owns book.json.
- Parts cannot see each other while they run: the brief must settle shared terms, parallel passages (the earlier
  book's Plain is the model: Kings for Chronicles, Matthew for Mark and Luke, Jude for 2 Peter, 2 Kings 18–20 for
  Isaiah 36–39) and which part writes which topic core.

## Lead decisions
After the reviews come back, decide cross-part questions once and give every fixer the same answer. Record
lasting decisions at the end of the book's brief ("Lead decisions"), the way `tools/brief-psa.md` and
`tools/brief-pro.md` do, so later books reuse them.

## Agents and briefs
The agent definitions in `.claude/agents/` are thin; the real rules are the briefs in `bible/tools/`
(`agent-writer.md`, `agent-reviewer.md`, `agent-writer-works.md`, `agent-reviewer-works.md`, `agent-atlas.md`,
`agent-traditions.md`, `agent-audience.md`, `brief-nt.md`, `brief-<id>.md`). Change a rule in the brief, not in
an agent prompt, so every future agent gets it.

## When agents get cut off
A usage limit can stop agents mid-part. Restart a fresh agent on the same part, told to continue from the files
already written (check which chapters have Plain, notes and pages) and to finish the remaining steps.
