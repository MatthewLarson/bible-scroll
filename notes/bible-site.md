---
name: bible-site
description: Whole-Bible study website (The Bible Scroll) - Matt's requirements, architecture and how to build/publish
metadata:
  type: project
---
Started 2026-10-22, thread "Whole-Bible study website". Work folder /mnt/project-files/bible/ (revelation/ is another thread's; Revelation is imported via tools/import-rev.js and content/overlays/Rev.json, never edited directly). Artifact "The Bible Scroll" https://claude.ai/artifact/Vu82fQzU17PbSrL3gF6cFW. Status per book in bible/PROGRESS.md. Decisions log: [[bible-site-log]].

Matt's requirements:
- Same treatment as Revelation for every book, especially the 8th-grade Plain English Translation.
- After each book, a SEPARATE agent does a hostile review; fixes are applied before publishing.
- Most trustworthy original-language sources; compare trustworthy witnesses; variant notation showing alternatives, sources and why one was chosen.
- Good reading UI, many articles/views/topic pages; maximum cross-referencing; ONE page per topic, filterable to the passage just read with a full-view toggle.
- No database: a directory of JSON documents for indexing and cross-referencing.
- 2026-10-23: always show WHO a book/passage was first for and WHY (book.json `audience`, chapters.json `settings`, optional `readers`).
- 2026-10-23: use the Bible Atlas MCP server for reference material (maps embedded if possible, else links); see [[bible-site-log]].

Pipeline: writers per tools/agent-writer.md (start each verse from `node tools/literal.js <id> <ch>`, drift audit in the head only, never write NIV/ESV text out); reviewers per tools/agent-reviewer.md; atlas harvest per tools/agent-atlas.md. Large books split into content/books/<id>/parts/<a>-<b>/; one part writer owns book.json; lenses fixed first. Shared: content/sources.json, content/terms.json, content/topics/<id>.json, content/atlas/. `node tools/build.js --check <id>[/<part>]`, `VERBOSE=1` for warnings; sync quotations of the new book's Plain English Translation after each book.

Publish: `bash <scratchpad>/stage.sh` (build --publish, copies books/links/topics/atlas, writes files3.json), screenshot with scratchpad/shot.js (PORT env; site/ build served on 8766 for drafts), then Artifact publish of scratchpad/site/index.html with root scratchpad/site and the files3.json list. en/orig are already on the server (re-upload only changed orig files).
