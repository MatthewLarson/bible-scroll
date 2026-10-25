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
4b. **Release notes**: `node tools/release.js` writes `content/releases/<date>.json` (what readers will find new or
   changed since the last release) and updates `content/releases/_snapshot.json`. Fill in its `title` and a two-or-three
   sentence `summary` for readers. Add a `site` item for any change readers will notice in the site itself (a new page,
   a new way to read notes), in plain words. Never list technical changes (build, tools, code fixes). Edit the generated
   lines if they read badly. Run it once per publish, then `node tools/build.js --publish` again so the Releases page
   shows it.
5. **Preview**: `node tools/serve.js public 8777` and open http://localhost:8777 (check the library, a
   chapter spread of each new book, a topic page with its passage filter, and the browser console).
6. Set each published book's progress.md first line to `Status: reviewed, published` and rebuild once so
   PROGRESS.md matches.
7. **Deploy** only when Matt asks (see README.md, "Putting the site online"): `public/` is a static folder.
