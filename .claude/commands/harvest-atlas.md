---
description: Harvest a book's Bible Atlas data, or review a harvest and write corrections
argument-hint: <book id> [harvest|review]
---

Run the atlas step for `$ARGUMENTS` (default: harvest if `bible/content/atlas/<id>.json` is missing, otherwise
review). Launch the `atlas-harvester` agent with the book id and which brief to follow (harvest or review, from
`bible/tools/agent-atlas.md`). Large books can be split across two or three agents by chapter range for the
harvest, then merged into one file. Afterwards run `cd bible && node tools/build.js --check <id>` and report the
counts.
