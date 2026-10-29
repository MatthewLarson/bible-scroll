# Brief: restore "Where Christians differ" views after the verification pass

Matt wants Christian traditions shown side by side wherever they really conflict (CLAUDE.md, "What Matt wants").
The 2026-10-29 verification pass (tools/agent-verify.md) removed every card view whose source nobody could open, so
many `traditions` cards lost views and a few were turned into note sentences. Your job is to put back the views that
can be sourced now. `bible/STYLE.md` rule 2 still governs everything: no view, wording, number or quotation from
memory, only what a page you open in this session states.

## Read first
`bible/STYLE.md` (rule 2, and the `traditions` format under "Where Christians differ"), `bible/tools/agent-writer.md`
("Where Christians differ"), the TRADITIONS list in `bible/tools/build.js` (fixed tradition names), and for each part
the review.md sections "Verification pass", "Verification check" and "Verification fixes" plus the log in
`.scratch/<id>-<part>-verify/sources-checked.md`.

## Find what was lost
For each part, compare the current `chapters.json` (and `book.json` for the part that owns it) with the version
before the pass: `git show 159afeb:bible/content/books/<id>/<path>`. List every card view (tradition + question) that
is gone, every card that became a note sentence, and every card that now has only views that agree. The old wording
is NOT a source: it was the part that failed verification. Use it only as a list of which traditions to look for.

## Restore
For each lost view, look for the tradition's own answer to that card's question in a page you open:
- the church's own documents first (Catechism of the Catholic Church on vatican.va; Book of Concord; Westminster
  Standards; Thirty-Nine Articles and the Book of Common Prayer; Baptist Faith and Message 2000 and the 1689
  London Confession; Methodist Articles of Religion and Book of Discipline; Orthodox Church in America and other
  Orthodox jurisdictions' teaching pages; Assemblies of God position papers; Seventh-day Adventist Fundamental
  Beliefs; Dallas Theological Seminary or other dispensational doctrinal statements; UMJC or other Messianic Jewish
  statements; Mennonite and other Anabaptist confessions);
- then a named theologian of that tradition, in a text you open (CCEL, newadvent.org, the tradition's publisher);
- an encyclopedia page (Wikipedia, OrthodoxWiki, Britannica) only when it states that tradition's view on this
  question, and then say no more than it says.
If a source states the tradition's position in general but does not mention this passage, the view may say so
("does not comment on this verse, but teaches ..."), and only if that position answers the card's question.
If nothing you open states the view, leave it out; do not hedge it. If several sites block you (403, timeouts), try
another official or mirror copy of the same document before giving up.
When a converted card regains a real conflict, turn it back into a card (with `top`) and trim the note sentence.
Never rank traditions, never add a tradition to a card where it has nothing distinct to say, and keep each answer to
two or three sentences in 8th-grade English. New source keys go in the part's own sources.json (reuse existing
keys: grep content/ first; never redefine a key another part or book defines).

## Search budget
Web search can run out. Prefer fetching known official pages directly (for example the Catechism index on
vatican.va, bookofconcord.org, the OPC's Westminster pages, the BFM 2000 page on bfm.sbc.net or sbc.net,
oca.org's Q&A and teaching pages, umjc.org) and searching inside them, and save searches for what you cannot find.
These addresses are starting points only: use a page only after you have opened it and it states the claim.

## Finish
- Log every restored view with its URL in `.scratch/<id>-<part>-verify/sources-checked.md` ("Card restoration").
- Add `## Card restoration (2026-10-29)` to the part's review.md: views restored, cards re-created, views still
  missing (tradition + card + why).
- `VERBOSE=1 node tools/build.js --check <id>/<part>`: 0 errors, 0 warnings in your part. Add a line to progress.md.
Report: counts per part and the views still missing.
