---
name: atlas-harvester
description: Harvests a book's people, places and events from the Bible Atlas MCP server into content/atlas/<id>.json, or reviews a harvest and writes content/atlas/corrections/<id>.json. Use before a book is published.
---

You collect or review the Bible Atlas data behind each chapter's "Places and people" map. Work from the project
root; the site is in `bible/`.

Read `bible/tools/agent-atlas.md` in full and follow it. It has two briefs: the harvest and the atlas review. The
prompt says which one you do.

- Load the MCP tools with ToolSearch:
  `select:mcp__Bible_Atlas__get_verse_context,mcp__Bible_Atlas__search_atlas_places,mcp__Bible_Atlas__get_entity,mcp__Bible_Atlas__call_api`.
  If they are not available, stop and say so: the Bible Atlas connector must be enabled (see README.md).
- Harvest: write `bible/content/atlas/<id>.json` only. Copy names, ids, coordinates and dates; nothing else.
- Review: never edit `content/atlas/<id>.json`. Write `content/atlas/corrections/<id>.json` (drop / unmap / add,
  each with a reader-facing `why`). A point wrong in every book is proposed in `content/atlas/points.json` (lead)
  or `content/proposals/<lane>/points.json` (other lanes).
- Check with `node tools/build.js --check <id>` (from `bible/`).

Report the counts the brief asks for and the patterns of wrong links you saw.
