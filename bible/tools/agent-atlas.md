# Atlas harvest brief

Bible Atlas (bible-atlas.com) links people, places and events to verses, and gives coordinates for places. The site uses it for each chapter's "Places and people" map and links. You collect that data for whole books with the Bible Atlas MCP tools and save one JSON file per book. Nothing is copied except names, ids, coordinates and dates; the site links back to Bible Atlas for everything else.

## Tools

Load them with ToolSearch: `select:mcp__Bible_Atlas__get_verse_context,mcp__Bible_Atlas__search_atlas_places,mcp__Bible_Atlas__get_entity,mcp__Bible_Atlas__call_api`.

- `get_verse_context(usfm, chapter, verses)` returns the people, places and events linked to those verses. `verses` must be a comma-separated list. Get each chapter's list from `node tools/atlas-verses.js <id>` (English numbering, which Bible Atlas uses). If a result has `"entitiesTruncated": true`, split the chapter into smaller verse groups and merge the results. It also silently answers only the first 20 verses of a longer list (check `osisRef` in the result), so send at most 20 verses per call.
- `search_atlas_places(query)` returns places with `lat` and `lon`. Search by the place's name and take the item whose `id` equals the place id. Ignore items whose `type` is not `place`.
- If the search does not return that id, use `call_api` with path `/entity/<id>` (no `/api/v1` prefix) and read `data.latitude` and `data.longitude`. Use the same path to get an event's date when you need it (`call_api` path `/atlas/entity/<id>`).
- Keep each call small. Do not call `get_entity` for places that appear in many verses (Jerusalem, Israel, Egypt): its result lists every verse.

USFM codes: GEN EXO LEV NUM DEU JOS JDG RUT 1SA 2SA 1KI 2KI 1CH 2CH EZR NEH EST JOB PSA PRO ECC SNG ISA JER LAM EZK DAN HOS JOL AMO OBA JON MIC NAM HAB ZEP HAG ZEC MAL MAT MRK LUK JHN ACT ROM 1CO 2CO GAL EPH PHP COL 1TH 2TH 1TI 2TI TIT PHM HEB JAS 1PE 2PE 1JN 2JN 3JN JUD REV.

## Output

Write `content/atlas/<id>.json` (site book id, for example `Gen`, `1Sa`, `Rev`):

```json
{
  "chapters": {
    "1": { "places": ["susa", "media"], "people": ["ahasuerus"], "events": [] }
  },
  "places": { "susa": { "name": "Susa", "lat": 32.19202, "lon": 48.24854 } },
  "people": { "ahasuerus": { "name": "Ahasuerus" } },
  "events": { "abraham-enters-canaan": { "name": "Abraham enters Canaan", "date": -1920 } }
}
```

- Every chapter of the book gets an entry, even when its lists are empty.
- Keep the order Bible Atlas gives. Ids are Bible Atlas ids, exactly as returned.
- `places` holds every place id used in the chapters. A place with no coordinates (`geocoded: false`, or none found) gets `"lat": null, "lon": null`.
- `people` and `events` hold every id used, with names (and an event's `date` as a number, negative for BC, when Bible Atlas gives one; otherwise leave `date` out).
- Do not add anything Bible Atlas did not return. Do not fix its identifications; if one looks wrong, list it in your report.

## Rules

- Then run `node tools/build.js --check <id>` and fix any atlas errors it reports.
- Report, per book: chapters, places (with and without coordinates), people, events, and any chapter that was truncated or failed.

# Atlas review brief

Bible Atlas links entities to verses largely by name, so some links are wrong: a person who shares a name with a word in the verse ("Job" for Jashub's brother Iob, "On" for the city of On), an interpretation stated as fact ("Jesus" at Genesis 49:10 or Deuteronomy 18:15), an event linked far from where it happens, or a place given the wrong point (the wrong Gilgal; the Red Sea far south of the crossing). You review one book's harvested file against the site's text and write corrections. You never edit `content/atlas/<id>.json` itself.

For each chapter, read the Plain (`content/books/<id>/plain.txt` or the parts' plain.txt) and the chapter's lists in `content/atlas/<id>.json`. Write `content/atlas/corrections/<id>.json`, an array:

```json
[
  {"c": 49, "drop": ["jesus-2"], "why": "Many Christians read 49:10 as a promise of the Messiah, but the verse does not name him; that reading is in the chapter's notes."},
  {"c": 11, "unmap": ["gilgal"], "why": "Bible Atlas puts this Gilgal in the coastal plain; Deuteronomy 11:30 places it near the Jordan, opposite Ebal and Gerizim."}
]
```

- `drop` removes a person, place or event that the chapter does not mention or that is the wrong entity of that name. Keep a link when the chapter does mention that entity, even in passing.
- `unmap` keeps a place's link but draws no dot, when its point is clearly wrong for this chapter. Do not unmap a point only because it is approximate or shared with other places; the site already shows shared points as one dot.
- `why` is one or two plain sentences for readers. Where a link reflects one interpretation, say so fairly rather than calling it an error.
- A patriarch or founder linked where the chapter means the tribe, nation or land (Israel, Judah, Ephraim, Manasseh, Dan, Esau for Edom, Moab, Midian, Canaan, Amalek) is a wrong-entity link: drop it, unless the chapter also means the individual (Esau at Joshua 24:4, Joseph's bones). Apply this the same way in every book.
- `add` links a Bible Atlas entity the text names that Bible Atlas does not link in this chapter (it does not link psalm titles, for example): `{"c": 3, "add": {"people": {"absalom": {"name": "Absalom"}}}, "why": "..."}`. Use the real Bible Atlas id (search_atlas_places, get_entity, or another book's atlas file) and its coordinates for a place. Add only what the text names; never add an interpretation.
- A Bible Atlas point that is wrong in every book (not just this chapter) goes in the shared `content/atlas/points.json`, `{id: {lat, lon, why}}`, which the build applies to every book; `lat`/`lon` null means the location is unknown and no dot is drawn. Check it first: Philistia, Edom, Sheba, Canaan, Midian, Meshech, Ophir and Seba are already fixed there. Never give a coordinate from memory: take it from the Bible Atlas tools or a page you fetched, and name that source in `why`.
- Check with `node tools/build.js --check <id>` (corrections that name ids not in the chapter are errors). Report counts of drops and unmaps and the patterns you saw.
