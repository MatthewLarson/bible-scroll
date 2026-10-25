---
description: Merge lane proposals, sync quotes, build the public site and preview it (deploy only when Matt says)
---

Publish the Bible Scroll. Use the `bible-site-build` skill.

1. **Ready books**: list books whose progress.md says `Status: reviewed, ready` (and any `reviewed` lead book).
   Confirm each passes `cd bible && VERBOSE=1 node tools/build.js --check <id>` at 0/0.
2. **Merge proposals** from `bible/content/proposals/<lane>/` (see `bible/tools/lanes.md`):
   - `terms.json` entries into `content/terms.json` (a changed entry replaces the old one; check that no two
     lanes render the same word differently).
   - `topics/<id>.json` into `content/topics/` (only ids not already there).
   - `works.json` into `content/works.json`; `points.json` into `content/atlas/points.json`.
   - `topics.md` and `build.md`: act on each item (edit the topic core, or fix build.js/app), then remove it.
   Then empty each merged file (`[]` or `{}`), so nothing is merged twice.
3. **Quote sync**: run `VERBOSE=1 node tools/build.js` and fix every "is not the site's Plain wording" warning by
   updating the quoting note to the current Plain.
4. **Build**: `node tools/build.js --publish`. Books still in draft are left out; check the list it prints.
5. **Preview**: `python3 -m http.server 8766 -d public` and open http://localhost:8766 (check the library, a
   chapter spread of each new book, a topic page with its passage filter, and the browser console).
6. Set each published book's progress.md first line to `Status: reviewed, published` and rebuild once so
   PROGRESS.md matches.
7. **Deploy** only when Matt asks (see README.md, "Putting the site online"): `public/` is a static folder.
