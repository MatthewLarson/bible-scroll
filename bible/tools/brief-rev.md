# Brief: Revelation (Rev)

Revelation is the one book not written in `content/books/<id>/`. It is the original Revelation study
(`revelation/`), imported by `tools/import-rev.js`. **Everything in `content/books/Rev/` is generated. Never edit
it.** Edit the source, then run `node tools/import-rev.js` and `node tools/build.js --check Rev`.

## Where each thing lives

| Generated (content/books/Rev/) | Source |
|---|---|
| plain.txt | `revelation/v2/src/plain.js` (PLAIN_SRC; "## heading" lines, "c:v text" lines) |
| notes.json | `revelation/v2/src/notes1.js` (ch 1–4), `notes2.js` (5–11), `notes3.js` (12–22), plus extra notes in `deep21.js`, `deep18.js`, `deep2.js`, `sayare.js`, `chdeep.js`. Notes with `w:` take title/Greek/body from WORDS in `revelation/src/3-data.js` |
| glosses.json | `revelation/v2/src/glosses.js` |
| chapters.json | `revelation/v2/src/chapters.js` (title, key, sum, lit, sym, views, echoes, topics), `chdeep.js` (deep sections), station facts/myths/spec in `revelation/src/3-data.js` and `3b-extra.js`; `settings` and `traditions` from the overlay |
| book.json | `tools/import-rev.js` (facts), intro/views/keys/beasts/israel/mythos/art pages in `revelation/src/3-data.js`, `3b-extra.js`, `revelation/v2/src/app.js`; `audience` and `traditions` from the overlay |
| topics.json, content/topics/*.json with `"origin":"Rev"` | `revelation/v2/src/topics1.js`, `topics2.js`, `topics3.js`, `deep2.js`, `sayare.js` |
| sources.json | SRC in `revelation/v2/src/topics1.js` |
| variants.json | `content/overlays/Rev.json` → `variants: {"<chapter>": [ ... ]}` (same entry format as any book's variants.json, see `content/books/Jud/variants.json`) |

`content/overlays/Rev.json` holds what the whole-Bible site added: `audience`, `traditions`, `settings`,
`traditions_by_chapter`, `variants`, each keyed by chapter number (string) where per-chapter.

Use `grep -rn` over `revelation/` to find any string. Source rules: write straight `"` quotes (the app curls them);
a note or gloss anchor must be an exact substring of the verse's Plain; glosses may nest inside note anchors but not
partly overlap them; variants may not overlap notes or glosses at all (the build checks).

## Reviews and fixes

Revelation is long (404 verses), so it is reviewed in five slices, each with its own file in `content/overlays/`:
`Rev-review-01-05.md`, `Rev-review-06-11.md`, `Rev-review-12-16.md`, `Rev-review-17-22.md` (Plain, notes,
glosses, variants, chapter pages, settings and traditions for those chapters) and `Rev-review-book.md`
(book.json and its pages, topic contributions and Rev-origin topic cores, sources). Each ends with
`## Fixes applied`.

Fixers share source files (plain.js, notes*.js, the overlay). So:
- Change source files with exact-string edits only (the Edit tool). Never rewrite a whole source file from a
  script. If an edit fails because the file changed, re-read it and try again.
- Change the overlay with a short load / change your own chapters' keys / dump script
  (`json.dump(..., ensure_ascii=False, indent=1)`), then re-read it. Never write keys for chapters outside your slice.
- Touch only your own chapters (slice fixers) or book-level material (book fixer). A quote of a verse in another
  slice: leave it for the lead's alignment pass, and say so in Fixes applied.
- `node tools/import-rev.js` is safe to run at any time.

## Lead decisions

- δοῦλος is "slave" (content/terms.json, the nt lane's term, merged). Revelation's "servant(s)" for δοῦλος
  (1:1; 2:20; 6:11 σύνδουλοι "fellow slaves"; 7:3; 10:7; 11:18; 15:3 Moses; 19:2, 5, 10; 22:3, 6, 9) becomes
  "slave(s)", with a word note at first use (1:1) on Greek and Roman slavery and why many English Bibles say
  "servant". Notes, glosses, topics and settings that quote those verses change with them.
- The three old translation-watch notes of kind `var` (11:15, 13:18, 22:14) become proper variants in the overlay;
  remove the notes (or move what is not about the variant to a note on a different anchor) so nothing overlaps.
- Quote warnings: a quote of another book's verse uses that verse's current Plain exactly (Isaiah and Jeremiah are
  now written; take their wording from `content/books/<id>/`'s plain or parts). Revelation's own quotes of
  itself must match Revelation's Plain too.
- οἱ ἅγιοι "the saints" (gloss "God's holy people" at 5:8); μετανοέω "repent" (gloss at 2:5); εὐαγγελ- "the good
  news" / "tell the good news" (note at 10:7); πνεῦμα ἀκάθαρτον "unclean spirit"; Χριστός "Christ" in "Jesus
  Christ" and 20:4, 6, "his Messiah" at 11:15 and 12:10 (Psalm 2:2); σφάζω "slaughter" everywhere.
- Hymns and songs are poetry (` / ` line breaks). Verse division follows the SBL (2:28 begins "just as I
  received"), with a note.
- "Where Christians differ": final punishment once, at chapter 20; the state of the dead at 6:9–11.
- The 2026-10 review found the Plain leaning on the NIV throughout, so every verse was rebuilt from literal.js.
  Any future change starts from literal.js too.
