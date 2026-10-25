---
name: bible-site-noncanon
description: Non-canonical works on the Bible Scroll site (thread "Non-canonical books") - sources, tools, file ownership split with the main thread
metadata:
  type: project
  modified: 2026-10-23T22:45:00.000Z
---
Part of [[bible-site]]. Started 2026-10-23 in thread "Non-canonical books", parallel to the main "Whole-Bible study website" thread.

Matt's ask (2026-10-23): after/alongside the accepted books, full study treatment of works outside the canon, with notes that they are not widely accepted, thorough provenance, why rejected, where accepted books reference them, a labeled AI reliability analysis, and how to read them. Boundary decided by Matt 2026-10-23 (tapped 'Three tiers'): (1) the 66 books; (2) books some churches hold as Scripture (works.json tiers dc/orth/eth: deuterocanon, Orthodox extras, 1 Enoch and Jubilees as Ethiopian Scripture), labeled as Scripture for those churches; (3) books in no church's Bible (tiers other/early/lost) get the full 'not widely accepted' treatment. 1 Enoch was started first.

Ownership split agreed with main thread: main thread owns tools/build.js, app/app.js, base.css, shell.html and publishing (it adds X-book support, the "canon" block validation, tier banner, "Is this Scripture?" page, Ge'ez/Greek pane, works.json "book" links). This thread owns tools/works-texts.py, tools/works-fetch.sh, texts/*/<X id>.json, texts/src/, the "outside" group (t "X") in texts/catalog.json, the texts.py skip for t X, tools/agent-writer-works.md, and all X-book content.

Sources: Ge'ez from Beta masaheft GitHub BetaMasaheft/Works (LIT1340EnochE.xml has Dillmann 1851 + EOTC printed Bible with verse numbers; LIT1697Jubilees.xml too), CC BY-SA 4.0. Charles English (PD) from github scrollmapper/bible_databases_deuterocanonical (has ~70 works incl. Jubilees, Tobit, Sirach; 1 Enoch copy has gaps). Greek Enoch: Source Library MCP book 69ae9b59636ab3c20b7cf1a0 (Charles 1893, misfiled as Dillmann), App. C pp. 340-392; OCR has zero-width watermark chars. No open Ge'ez lexicon, so literal.js does not apply. Wikisource, archive.org, sacred-texts are blocked by the network proxy; GitHub works.

1 Enoch: id 1En, Charles 1912 versification (108 ch, 1063 v), parts 001-036, 037-071, 072-082, 083-090, 091-108, lenses E H N J W, book.json by a separate writer.

Order (agreed with main thread 2026-10-23, per Matt's wish that deuterocanon comes before not-widely-accepted works): this thread does every book outside the 66. After 1 Enoch: deuterocanon (Tobit, Judith, 1-2 Maccabees, Wisdom, Sirach, Baruch + Letter of Jeremiah) with full Scripture-style apparatus (rejected_why = why Protestants and Jews do not count it), then Orthodox extras, then Jubilees and tier-3 works. Greek additions to Esther/Daniel stay as variants in the main thread's books; pages here point there.

Status 2026-10-23: 1 Enoch published (artifact v21). Tobit (id Tob, parts 01-06, 07-14) in progress. Septuagint source: Swete (PD) via github eliranwong/LXX-Swete-1930 (has Tbs = Sinaiticus Tobit, Tob = Vaticanus, Sip, 1En fragments); Swete apparatus from OpenGreekAndLatin/First1KGreek data/tlg0527 (tlg021 Tobit B text only, no ℵ text); KJVA, VulgClementine, DRC from scrollmapper/bible_databases formats/json. Rahlfs (eliranwong/LXX-Rahlfs-1935, CenterBLC) rests on CCAT data with a restrictive user declaration: avoid. Main thread's Judges is id Jdg and Jude is Jud, so Judith = Jdt. Texts files carry an "about" block per text key; the app reads labels from it. Catalog X groups = works.json tiers. Bible Atlas has no data for X books.

## Lanes (2026-10-24, tools/lanes.md)
This thread is the "works" lane. It writes its own book folders and PROGRESS row directly. New terms go in content/proposals/works/terms.json; new topic cores in proposals/works/topics/<id>.json; new works.json entries in proposals/works/works.json; edits to existing topics in proposals/works/topics.md; build needs in build.md. Never edit shared files or publish. When a book is 0/0 with every review's Fixes applied, set its row to "reviewed, ready" and message the lead thread. Typos in digital Swete go in the works-texts.py fix table, never in variants.
