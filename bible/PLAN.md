# The Bible Scroll: architecture

A study website for all 66 books, built the way the Revelation scroll was built: a Plain English translation
made from the original languages, color-coded notes woven into the text, chapter commentary, every Bible
reference clickable, all interpretive views presented fairly, and the hand-drawn scroll look.

There is no database. Everything is a folder of JSON documents: authored content, generated source texts,
and the built site's indexes. Every link in the site is a stable key, so any document can point at any other.

## Folders

```
bible/
  PLAN.md          this file
  STYLE.md         the writing guide every book writer and reviewer follows
  PROGRESS.md      checkpoint: which books are written, reviewed, published
  tools/
    fetch.sh       downloads the open source texts (see "Sources")
    texts.py       source texts -> texts/
    build.js       content/ + texts/ -> site/  (also validates; fails on broken keys)
  texts/           GENERATED from upstream sources. Never edit by hand.
    catalog.json   books, groups, verse counts per chapter
    en/<id>.json   BSB, KJV, WEB, ASV, YLT
    orig/<id>.json Hebrew (Leningrad Codex via STEPBible TAHOT) or Greek (SBLGNT + Byzantine), word by word
    xref/<id>.json OpenBible.info cross references per verse
    auto/<id>.json machine-found textual variants (Ketiv/Qere, Aleppo, LXX additions, NA vs Byzantine vs TR)
  content/         AUTHORED. The only place writers write.
    catalog.json   the 66 books and their groups
    sources.json   shared bibliography: key -> citation (HTML)
    topics/<topic-id>.json   one file per topic: its core (title, kind, lead, overview sections)
    books/<id>/
      book.json        the book's front pages: intro, authorship views, outline, lenses
      plain.txt        the Plain English translation
      chapters.json    one commentary page per chapter
      notes.json       notes anchored to phrases in the Plain English text
      variants.json    textual variants: the readings, where each comes from, which is followed and why
      glosses.json     "Today's words": modern paraphrases under hard phrases
      topics.json      this book's contributions to shared topic pages (never a copy of a topic)
      sources.json     bibliography keys this book adds (keys are global)
      review.md        the hostile review of this book and what was fixed
  site/            BUILT. Published as the website. Also a JSON directory.
    index.html
    data/catalog.json, data/books/<id>.json, data/en/<id>.json, data/orig/<id>.json,
    data/links/<id>.json (cross references + "cited by" reverse index), data/topics/index.json,
    data/topics/<shard>.json
```

Book ids are the STEPBible three-letter codes: Gen Exo Lev Num Deu Jos Jdg Rut 1Sa 2Sa 1Ki 2Ki 1Ch 2Ch Ezr Neh
Est Job Psa Pro Ecc Sng Isa Jer Lam Ezk Dan Hos Jol Amo Oba Jon Mic Nam Hab Zep Hag Zec Mal Mat Mrk Luk Jhn Act
Rom 1Co 2Co Gal Eph Php Col 1Th 2Th 1Ti 2Ti Tit Phm Heb Jas 1Pe 2Pe 1Jn 2Jn 3Jn Jud Rev.

## Keys

- Verse inside a book: `"c:v"` (English versification, as in the KJV and NRSV). Psalm titles are verse 0 (`"3:0"`).
  Where the Hebrew numbers verses differently, `orig/<id>.json` gives the Hebrew number in `heb`.
- Verse anywhere: `"<id> c:v"`, e.g. `"Rut 3:9"`. Human-readable references in prose ("Ruth 3:9", "Genesis 38")
  are parsed by the site and become links; a bare "3:9" means the current book.
- Topic: a kebab-case id, one file `content/topics/<id>.json`. Never two topics for one subject; search the
  existing ids (and their `aka` lists) before creating one.
- Source: a key in `content/sources.json`.

## One page per topic, filtered to the passage

A topic page is assembled from its core file plus every book's `topics.json` contribution. Every section carries
the references it is about. When a reader opens a topic from a passage, the page shows the sections and notes
that touch that passage (then that book), with a toggle for the full page. The page also lists every note,
chapter and verse across the Bible that is tagged with the topic, grouped by book.

## Variants

`variants.json` entries are anchored to a phrase in the Plain English text, like notes. Each gives two or more
readings: the witness (e.g. "Masoretic Text, Leningrad Codex", "Septuagint", "Dead Sea Scrolls 4QSam-a",
"SBLGNT / NA28", "Byzantine majority", "Textus Receptus (KJV)"), the original-language text, an English
rendering, and the Plain English wording the verse would have with that reading. The reader can switch the
verse to any reading in place. Each entry says which reading the Plain English follows and why.

## Site

`site/index.html` is one page with hash routes:
- `/` home, `/library` every book by group, `/topics` every topic, `/articles`, `/mission`, `/releases`
- `/Rut` a book's scroll (opening pages, then a two-page spread per chapter: commentary | text)
- `/Rut/3` or `/Rut/3/9` a chapter or verse
- `/topic/kinsman-redeemer?from=Rut/3` a topic page, filtered to the passage it was opened from
Each book's data loads only when the book is opened; translations load when chosen.

## Sources

| Text | Edition | License |
|---|---|---|
| Hebrew OT | Leningrad Codex (Westminster/OpenScriptures), as corrected in STEPBible TAHOT, with Ketiv/Qere, Aleppo, BHS and LXX-based readings marked | CC BY 4.0 |
| Greek NT | SBL Greek New Testament (critical text, close to NA28) | CC BY 4.0 |
| Greek NT | Robinson-Pierpont Byzantine Textform 2018 (majority text) | Public domain |
| Greek NT word by word | STEPBible TAGNT: every word in NA27/28, SBL, Tyndale House, WH, Tregelles, TR, Byzantine, with the editions that have it | CC BY 4.0 |
| English | Berean Standard Bible | CC0 |
| English | KJV (1769), ASV (1901), YLT (1898), World English Bible | Public domain |
| Cross references | OpenBible.info | CC BY |
| Akkadian (Atrahasis and other tier `world` books) | SEAL score editions (Streck, Wasserman; Leipzig and Hebrew University) | None stated; shown line by line, credited to SEAL, because Codex Collection is non-commercial |

The Septuagint (Rahlfs, Göttingen), the Dead Sea Scrolls and the Samaritan Pentateuch are not openly licensed as
full texts, so they are cited in variant notes where they differ, with the reading given.
