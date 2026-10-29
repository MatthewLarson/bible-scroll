# Brief: verification pass on one written book or part

The content of one book or part was written, reviewed and fixed under an older rule that let agents publish details
they could not check, behind hedges such as "as reported", "not rechecked" or "from memory". The rule is now
`bible/STYLE.md` rule 2: every checkable detail must be checked in this session in something actually opened, or
left out. Your job is to bring one part up to that rule. You are not a writer: you change only what you must.

## Read first
`bible/STYLE.md` (rule 2 above all), `bible/CLAUDE.md`'s "Rules that have bitten before", `tools/brief-nt.md` (for New
Testament books: what can and cannot be opened), and the part's `review.md` (findings and `## Fixes applied`).

## What to check
1. Every hedge in the part's JSON (and in `book.json` if the prompt says the part owns it):
   `grep -niE "not rechecked|as reported|from memory|not checked|could not verify|unverified|reported by"`.
2. Every claim the reviewer marked "(verify)" or "could not verify", and every claim the fixer's `## Fixes applied`
   or the book's `progress.md` says was added or kept from memory or without opening the work.
3. Every view on a `traditions` card (chapters and book.json) that names a teacher, document, article, canon or
   paragraph number: all of them, not only the items the prompt lists.
4. Every source key the part defines in its `sources.json`: the work must exist as described (title, author, year).
5. Every `s` list that cites a work nobody here can open (`metzger`, NA28/UBS5 apparatus keys): the key stays only
   if you saw the claim stated in a source you opened; otherwise drop the key from that entry.

A review or search snippet counts as a source only if it states the claim itself; otherwise soften the claim to what
the snippet does state.

## How to check
Use only what you can open now: `texts/` (word lists with edition marks; `python tools/lxx.py`, `python tools/dss.py`),
the Source Library MCP (search_library, get_quote, get_book_text...), the Bible Atlas MCP, web search and web fetch of
reliable pages (Sefaria for Talmud, Midrash, Targum and Rashi; CCEL, newadvent.org or Perseus for the fathers and
classical authors; vatican.va for the Catechism and councils; a church's own site for its confession; a publisher's
or journal's page for modern scholarship; reputable apparatus pages for manuscripts). Metzger's Textual
Commentary and the NA28 apparatus cannot be opened here; a witness list is kept only if a page you open states it.
Your own memory is not a source, and neither is another agent's note.

## What to do with each item
- **Verified:** keep it, remove the hedge words, correct any detail the source shows was wrong (number, wording,
  position), and add a source key if the claim needs one (reuse existing keys; new keys go in the part's sources.json).
- **Not verifiable:** remove the unverified detail. Rewrite the sentence to keep only what is checked or what the
  site's own data shows (for variants: the editions the word list shows, with no manuscript names). If a note, card
  view or deep-dive paragraph has nothing left, delete it. Drop a source key nothing cites any more.
- Never add a new claim, a new scholar or a new citation that the item did not already have, except a source key
  for something you verified. Never change `plain.txt`. Do not touch other parts, other books, `texts/` or shared
  files other than what the prompt allows.
- Edit JSON with a script that keeps the file's formatting (or targeted string edits), and re-read it.

## Second round: fixing a verification check
When the part's review.md has a `## Verification check` section, apply every finding in it, then also work through
every named modern-scholar attribution in notes, chapter views, deep dives and book.json ("Fee argues", "Lincoln and
Best hold", "Thiselton reads"), whether or not the check listed it:
- Verify it on a page you open that states that scholar's position (the scholar's own text, a review, an
  encyclopedia or a summary that states it). Keep the name only then.
- Otherwise, if the view itself is a widely held reading, keep the view and drop the name ("some scholars argue
  ..."), and drop the scholar's source key from that entry.
- Otherwise remove the view.
Dates (of letters, events, writers) follow the same rule: keep a date only if an opened page gives it; keep the book
consistent with its other parts. Commentary source keys stay on an entry only if you opened something showing that
commentary supports that entry; otherwise remove them from the entry (they may stay in book.json reading lists).
A traditions card that loses its conflict (all remaining views agree) is turned into a sentence in a note.
Log the second round in the same `sources-checked.md` and add `## Verification fixes (2026-10-29)` to review.md with
counts and the findings handled.

## Log and finish
- Write `.scratch/<id>-<part>-verify/sources-checked.md`: one line per item: location, claim, verdict (verified /
  corrected / removed), and the source opened (URL or tool and id).
- Add a `## Verification pass (2026-10-29)` section to the part's review.md, after `## Fixes applied` (leave that
  section as it is), with counts: verified, corrected, removed, and a pointer to the log.
- `VERBOSE=1 node tools/build.js --check <id>/<part>`: 0 errors, 0 warnings. Then confirm the grep in step 1 finds
  no hedges left in the part.
- Add a line to `content/books/<id>/progress.md` (keep line 1).

Report: counts, the most important corrections (claims that were wrong, not just unverified), anything removed that
matters for the reader, and anything for the lead.
