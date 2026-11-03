# Brief: translating a non-scriptural work with a local model, checked by a light Claude model

Matt's decision (2026-11-03): the translation of non-scriptural historical works (works.json tiers `other`, `early`,
`lost`, and `world`) is drafted by a **local LLM** that Matt runs on his own machine, and a **light Claude model**
(the `translation-reviewer` agent, `model: haiku`) reviews each draft. The 66 books and the books some churches hold
as Scripture (tiers `dc`, `orth`, `eth`) are NOT done this way: they keep the pipeline in `agent-writer.md`.

Matt sets the local model up on 2026-11-04. Until the section "Local setup" below is filled in, do not guess the
model, runtime or script names; ask Matt.

## Who does what
| Step | Who | Output |
|---|---|---|
| Literal line | `node tools/literal.js` (Akkadian: `python tools/akk-literal.py`) | the word-by-word line every verse starts from |
| First draft | the local model, run by Matt or a script he names | `.scratch/<id>-<part>/local-draft.txt`, one verse per line in plain.txt format |
| Translation check | `translation-reviewer` (light Claude) | `.scratch/<id>-<part>/translation-check.md`, numbered findings, never edits |
| Finish | `book-writer` | plain.txt, notes, variants and the rest, fixing every finding or answering it in the check file |
| Hostile review | `hostile-reviewer`, a different agent | review.md, as always (Matt's rule: every book gets one) |
| Fix | `review-fixer` | `## Fixes applied` |

The light check does not replace the hostile review. It catches the errors a local model is likely to make before
the writer spends time on them; the hostile review still decides whether the part is publishable.

## Rules for the local draft
- The draft is raw material, like a literal line. It is never copied into plain.txt unchecked. The writer compares
  every verse with the original (and the literal line) and rewrites what is wrong.
- Give the local model the original text and the literal line, not a published English translation, and tell it to
  translate from those. A local model may reproduce a copyrighted translation from memory; the reviewer's
  copyright check (below) exists for that.
- Same style as every other book: plain modern American English at about an 8th-grade level (STYLE.md), the terms
  in `content/terms.json` and `content/proposals/*/terms.json`, names in their original form, poetry keeping line
  breaks. Put the term list and the style rules in the model's prompt.
- Verse numbers and line labels come from the source texts file, not from the model. The model never adds,
  merges or drops verses; the check counts them.
- Keep the prompt, model name and version, and settings used for each part in `.scratch/<id>-<part>/local-run.md`,
  and record the model name in the part's progress.md line. Never invent a source, quotation or reading to cover a
  gap in the draft: a gap stays a gap, marked as the original marks it.

## What the translation-reviewer checks (verse by verse, against the original)
1. **Count and order**: every verse of the part present once, in order, numbered as in `texts/`.
2. **Additions**: words, names, numbers, explanations or whole clauses the original does not have.
3. **Omissions**: words or clauses the original has that the draft drops.
4. **Names, numbers, places, titles**: each matches the original and the book brief.
5. **Key terms**: each follows `terms.json`; flag any new rendering of an existing term.
6. **Certainty**: restored or damaged text translated as if certain; "(lost)" lines claiming more than the label
   shows; guesses presented as readings.
7. **Register**: 8th-grade modern American English, sentences mostly under 20 words, no archaic or churchy
   padding, no modern slang that the original does not carry.
8. **Copyright**: a run of five or more words in the same order as a published translation that the original does
   not force. Describe the match; quote at most a few words; never write out the other translation.
9. **Viewpoint** (tier `world` only): the draft describes without sneering and does not argue against the LORD
   being God or Jesus being his Son. This is a flag only; the viewpoint judgments belong to the hostile review.

Findings are numbered with a severity (critical / major / minor), the verse, what the original has, what the draft
has, and a suggested fix. A verse the reviewer cannot judge gets "needs a stronger check", never a guess. The
reviewer ends with counts and the list of verses that need a stronger check, and edits nothing.

## Local setup (fill in on 2026-11-04)
- Model and version: (not set)
- Runtime and how it is run: (not set)
- Script or command that writes `local-draft.txt`: (not set)
- Which works come first: (not set)
- How the translation's origin is shown on the site (book.json `canon`, an `about` text, or nothing): (decide with
  Matt; do not publish a machine-drafted translation without his answer)
