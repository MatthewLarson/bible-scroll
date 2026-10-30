# Writing lanes: who owns what, and how a book gets published

Several threads write books at the same time. Each is a "lane":

| Lane | Books | Proposal folder |
|---|---|---|
| lead (Whole-Bible thread) | Genesis–Song of Songs, Revelation | (edits shared files directly) |
| prophets | Isaiah–Malachi | content/proposals/prophets/ |
| nt | Matthew–Jude | content/proposals/nt/ |
| works (Non-canonical thread) | every book outside the 66 | content/proposals/works/ |

Only the lead publishes the site and edits tools/build.js, app/*, base.css, shell.html, content/terms.json, content/sources.json, content/atlas/points.json and everything in content/topics/.

## What a lane writes directly

- Everything under content/books/<id>/ for its own books, including each part's sources.json. Source keys are checked across all books by the build, so a new key goes in the book's own sources.json. Reuse an existing key when the work already has one.
- content/atlas/<id>.json (the harvest) and content/atlas/corrections/<id>.json for its own books, per tools/agent-atlas.md.
- content/books/<id>/progress.md for its own books: first line `Status: <status>`, then a short log. PROGRESS.md is generated from these by the build; never edit it. (A shared PROGRESS.md was truncated by a cut-off write on 2026-10-24.)
- Briefs in tools/brief-<id>.md for its own books.

## What a lane proposes

Put these in content/proposals/<lane>/. The lead merges them before each publish and empties the file.

- **topics/<id>.json**: a new topic core, in the same form as content/topics/. Check content/topics/ and every other lane's proposals/*/topics/ first. The build reads proposal topics with the same id, title and alias checks, so `--check` passes before the lead merges; it errors if two lanes propose the same id.
- **works.json**: entries to add to content/works.json. The build reads these too.
- **terms.json**: an array of new or changed entries, in the same form as content/terms.json (`["word", "rendering and note"]`). Read content/terms.json and the other lanes' terms proposals before adding one, so two lanes do not render the same Hebrew or Greek word differently. A change to an existing entry needs a short "why" at the end of its note.
- **points.json**: a global Bible Atlas point fix, `{id: {lat, lon, why}}`, in the same form as content/atlas/points.json. The build already reads proposal points, so your `--check` sees them at once, and it errors if two lanes fix the same point differently.
- **topics.md**: a change you want in an existing topic core (its lead, title, aka, related or a section that is not your book's). Say which file, what to change and why. Your book's own material on a topic goes in its topics.json, not here.
- **build.md**: a build or app problem, or a feature you need. Describe what fails and where. Do not work around it in content.

## Handing a book over for publishing

A book is ready when:
1. `node tools/build.js --check <id>` reports 0 errors and 0 warnings (run with VERBOSE=1);
2. every part has a hostile review (tools/agent-reviewer.md) and its review.md has a non-empty "## Fixes applied" section;
3. the atlas harvest and its review are done, using corrections only;
4. its progress.md says `Status: reviewed, ready`.

Then message the lead thread: "<id> ready", the notes in other books that quote it (for the quote sync), the proposals to merge, and anything the lead should check. The lead merges proposals, runs the full build, republishes and sets the row to "published".

Never run `node tools/build.js --publish`, and never publish the site Artifact yourself.

## Quotes between books

When a note quotes a verse from another book, use that verse's current Plain English Translation exactly; the build warns otherwise. If a lead or lane later changes a verse that you quote, the build's quote warning will show it, and the lead re-syncs quotes before each publish.
