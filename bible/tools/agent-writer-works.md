# Brief: write one book outside the 66 (or one part of it)

You are writing study content for a writing that most Christians do NOT count as Scripture, for the same
whole-Bible study website as the 66 books. Follow `tools/agent-writer.md` (read it in full) and everything it points to
(PLAN.md, STYLE.md, the Revelation model, terms.json, works.json, traditions). This brief lists only what differs.

Matt, who commissioned the site, wants these works treated with the same care as the Bible, but never passed off as the
Bible. He chose three tiers (2026-10-23): (1) the 66 books every Christian Bible shares; (2) books some churches hold as
Scripture (works.json tiers dc, orth, eth: e.g. Tobit, 1 Maccabees, 1 Enoch, Jubilees), presented as Scripture FOR those
churches, always saying which ones and who does not accept them; (3) works in no church's Bible (tiers other, early,
lost), presented plainly as not accepted as Scripture by any church. Either way every book must say who accepts it, where
it came from, why others set it aside, where the 66 books use it, how reliable it is (an AI analysis, labeled as such),
and how to read it.

## Sources (generated, read-only)
Each texts file has an `about` block that names and credits every text in it.

### 1 Enoch
`texts/orig/1En.json` (from tools/works-texts.py):
- `gez`: the Ge'ez (classical Ethiopic) critical text of August Dillmann (1851), cut into verses by matching the
  verse breaks of `eotc`. The cut is by machine: where a verse boundary looks wrong, follow the sense and say so in your
  report. `tr`: a transliteration of `gez`, to help you read it (bracketed numbers are Ge'ez numerals).
- `eotc`: the text of the Ethiopian Orthodox Tewahedo Church's printed Bible, verse by verse.
- `grc` (+ `grc_w`, the witness): the surviving Greek where it exists (key "c:v@syn" = George Syncellus).
- `join`: verses that the Ethiopic runs into a neighbouring verse (`"28:3":"28:2"`: the Ge'ez of 28:3 is inside 28:2)
  or lacks (`""`). Translate the verse anyway, from the witness that has it, and add a variant entry.
`texts/en/<id>.json` `charles`: R. H. Charles's English (1917), public domain, for checking sense only. The copy has a
few gaps. `texts/auto/<id>.json`: machine-found differences between Dillmann and the EOTC text (spelling is already
folded away; numerals vs. number words remain and need no entry).
There is no word-by-word gloss list for Ge'ez, so `tools/literal.js` does not work for these books. Build each verse
from the Ge'ez itself: read `gez` (with `tr`), make a literal working line in your scratch folder in the Ge'ez word
order, and smooth that into Plain English Translation, then check against Charles and the Greek. Where the Greek survives, read it
too: for 1 Enoch the Greek and the Aramaic (Dead Sea Scrolls) are older than the Ethiopic, so where the Ethiopic is
plainly corrupt and scholars agree the older witness is right, follow it, with a variant entry that says so.

Copyrighted modern translations you must not copy or lean on (the drift audit compares against these, in your head,
the same way agent-writer.md describes for the NIV/ESV): for 1 Enoch, Nickelsburg and VanderKam (2004, 2012),
Knibb (1978), Isaac in Charlesworth's <i>Old Testament Pseudepigrapha</i> (1983), Black (1985), Olson (2004), Sparks'
<i>Apocryphal Old Testament</i> (1984). Charles (1912/1917) is public domain, but the Plain English Translation is fresh 8th-grade English,
not a modernized Charles: never keep a Charles sentence shape the Ge'ez does not force.

### Septuagint books (the deuterocanon and the Orthodox extras)
`texts/orig/<id>.json`: `grc`, the Greek of H. B. Swete's <i>Old Testament in Greek</i> (1907-1912, public domain), verse by
verse. Where Swete prints two Greek forms of a book, the second is `grc_b`, and `gap` lists verses missing from `grc`.
Translate a gap verse from the witness that has it, with a variant entry. `fixed` lists typos in the digital
Swete that were corrected against his page; if you find another (a word Swete's apparatus or page spells otherwise),
report it so it is fixed in tools/works-texts.py, and do not enter it as a variant. `texts/en/<id>.json` `kjva`: the King James
Apocrypha (1611/1769, public domain), for sense only. Its verse numbers follow the older Greek and can be off by one.
`texts/auto/<id>.json`: verses where the two Greek texts differ. `texts/src/<id>.app.json`: Swete's footnotes (the
readings of Codex Alexandrinus A, Sinaiticus ℵ, Vaticanus B and later correctors). Each note's `at` is the verse where
its page begins, and the verse numbers are inside the note. `texts/src/<id>.lat.json`: the Clementine Vulgate and the
Douay-Rheims made from it, under the Vulgate's own verse numbers.
There is no gloss list, so build each verse from the Greek as for 1 Enoch: a literal working line in your scratch
folder, then Plain English Translation. Quotations of the 66 books inside these books: where the Greek quotes the Septuagint of a
passage, use the site's Plain English Translation if it fits, otherwise say in a note that the Greek differs from the Hebrew.
Copyrighted translations you must not copy or lean on (drift audit in your head, as above): NRSV/NRSVue, RSV and RSV-CE,
NABRE, NJB/JB, CEB, GNT/TEV, NETS, ESV and NKJV with Apocrypha, the Lexham English Septuagint, and modern commentaries'
own translations (e.g. Fitzmyer and Moore for Tobit). KJV, Douay-Rheims and Brenton are public domain, but the Plain English Translation is
fresh English, not a modernized KJV.

Tobit (id Tob): `grc` is the longer text of Codex Sinaiticus (GII) and `grc_b` the shorter text of Vaticanus (GI, with
Alexandrinus). The Plain English Translation follows Sinaiticus, as most modern scholars do, because the Qumran fragments (4Q196-199 in
Aramaic, 4Q200 in Hebrew) agree with it. Sinaiticus is missing 4:7-19 and 13:6-10 (see `gap`; Swete shows 4:7-18 and
13:7-9 as empty, and 4:6, 4:19 and 13:6 as partial). There the Plain English Translation follows Vaticanus, with a variant entry. Report
the Old Latin, which scholars use to fill those gaps, only as quoted by a named scholar. The Qumran readings are
published by J. A. Fitzmyer (DJD 19, 1995; <i>Tobit</i>, 2003): cite a Qumran reading only if you read it (or
Fitzmyer's report of it) in this session; otherwise leave it out (STYLE.md rule 2). Jerome's Vulgate Tobit was made in one day from an Aramaic copy, as he says in his preface. It differs in many places,
such as the three nights of prayer in 6:16-22 and 8:4-5 Vulgate. It was the Catholic Church's text until modern times,
and the Douay-Rheims follows it, so give its readings where they matter for Catholic practice or art.

## Variants (1 Enoch)
Weigh, and record in variants.json where they change the meaning: Dillmann vs. the EOTC text; the two families of
Ethiopic manuscripts (the older "Ethiopic I", e.g. Lake Tana 9 and the older EMML manuscripts, vs.
the later revised "Ethiopic II", e.g. the Rylands manuscript 23 that Knibb printed, with older readings in his apparatus), as the scholarly editions report them; the Greek (Gizeh/Panopolitanus, Syncellus,
the Chester Beatty-Michigan papyrus for 97-107, the Vatican fragment of 89:42-49); and the Aramaic fragments from
Qumran (4Q201-202, 4Q204-207, 4Q212, and the Astronomical Book 4Q208-211), as reported by Milik (1976), Nickelsburg,
Knibb, Stuckenbruck or Drawnel. Name the witness exactly. Never invent a reading: if you know a reading only from a
secondary report, say whose report. If you are unsure a fragment covers a verse, leave it out.

## What every page needs
- Notes: the same types as the 66 books, plus heavy use of `echo` notes in both directions: where this passage draws
  on the Hebrew Bible, and where the New Testament or later Jewish and Christian writers use it. Add notes of type
  `canon` ("Compared with the Bible", if the build accepts it; otherwise `echo`) wherever the passage agrees with,
  goes beyond, or conflicts with the 66 books, and say plainly which. Be fair: give the reading of the churches that hold it
  as Scripture in its strongest form, and the reasons other churches give for not reading it as Scripture.
- Chapter pages: `views` for every lens in book.json that has something distinct to say; `settings` for every vision,
  speech, oracle, prayer, parable, letter and woe (who speaks, to whom inside the story, and in `readers` who the
  first real readers were: e.g. a Jewish scribal group in Judea in the 200s BC); `traditions` cards where churches
  really differ (for 1 Enoch: fallen angels and demons, the Son of Man, Jude's quotation; for Tobit: almsgiving and
  merit, angels' intercession, guardian angels, marriage and chastity, prayers for and with the dead). Each card has a
  `top`. A question that concerns the whole book (whether it is inspired) goes in book.json; a question raised by one
  passage goes on that chapter only, never on both. Check the other parts' and books' cards and do not repeat one.
- Names (1 Enoch): the form the reader knows (Azazel, Shemihazah/Semyaza, Methuselah, Mount Hermon), with the Ge'ez in a note
  the first time. Key terms across all parts (add new ones to content/terms.json and report them):
  təguhan / Greek egrēgoroi / Aramaic 'irin "the Watchers"; "the Holy Great One"; ʾƎgziʾa Mänafəst "the Lord of
  Spirits"; rəʾsä mäwaʿəl "the Head of Days"; ḫəruy "the Chosen One"; the three Ge'ez phrases for "son of man"
  (wäldä säbʾ, wäldä bəʾəsi, wäldä ʾəgʷalä ʾəmmäḥəyaw) are all "the Son of Man" in the Plain English Translation, with a note at the
  first of each saying which phrase stands there.
- Quotations of the 66 books: in the site's Plain English Translation wording where the book is written (STYLE.md), otherwise fresh.
- References to this book from its own pages are bare "c:v". Name other works by their works.json names.
- Names (Septuagint books): the form English Bibles use (Tobit, Tobias, Raphael, Asmodeus, Raguel, Ecbatana,
  Nineveh, Ahiqar), with the Greek in a note the first time where it differs (e.g. Enemessar for Shalmaneser, 1:2).
- Never call the book Scripture in your own voice. Say "the Ethiopian Orthodox churches count it as Scripture",
  "Catholic and Orthodox Bibles include it", etc.

## Book-level files
Only the book.json owner writes book.json, and its lenses are fixed (keys E H N J W). The owner also writes the
`canon` block (see below) and the book's `traditions`. For tier-2 books (dc, orth, eth) `rejected_why` explains why
the other churches and Judaism do not count it (for the deuterocanon: the Jewish canon, Jerome, the Reformers, Article
VI, the Westminster Confession), stated in their strongest form. Part writers write only their part folder.
```json
"canon": {"tier":"eth", "work":"1-enoch",
  "summary":"2-3 sentences for the banner on every page: who reads it as Scripture, who does not",
  "accepted_by":[["Ethiopian Orthodox Tewahedo Church","its status there, since when",["source-key"]], ...],
  "provenance":[{"h":"...","b":"HTML"}], "rejected_why":[{"h":"...","b":"HTML"}],
  "cited_in":[{"ref":"Jude 14-15","at":"1:9","kind":"quotation | allusion | shared tradition | disputed","b":"HTML"}],
  "reliability":{"verdict":"one paragraph","sections":[{"h":"...","b":"HTML"}]},
  "how_to_read":[{"h":"...","b":"HTML"}], "s":["source keys"]}
```
`reliability` is shown labeled as an AI analysis by Claude, not a church's judgment. It must separate: (1) reliability
as a witness to what Jews believed in the centuries before Jesus (very high, and why); (2) textual reliability (how
well the text survived: languages, gaps, the late date of the copies); (3) historical claims (1 Enoch claims to be
by Enoch before the Flood; Tobit sets itself in Assyria in the 700s BC: what the evidence says, fairly, including how
the churches that hold the book as Scripture answer, e.g. Catholic teaching on literary forms); (4)
agreement with the 66 books, point by point (where it matches, goes beyond, or conflicts), giving each church's view.
Never rank churches. `cited_in` lists every place in the 66 books that quotes, alludes to, or is argued to depend on
it, each with how strong the link is and who disputes it.

## Shared files (tools/lanes.md)
This thread is the "works" lane. Never edit content/terms.json, content/sources.json, content/atlas/points.json or an
existing content/topics/*.json file. Instead, propose: new or changed terms go in content/proposals/works/terms.json
(read content/terms.json and the other lanes' proposals first, so a Greek word gets one rendering), and changes to an
existing topic core go in content/proposals/works/topics.md. Your book's material on a topic goes in its topics.json. A
new topic core goes in content/proposals/works/topics/<id>.json (only if no content/topics/<id>.json or other lane's
proposal has that id), and a new works.json entry goes in content/proposals/works/works.json. The build reads both. Re-read any proposal file just before writing it.
Bible Atlas has no data for books outside the 66, so these books have no atlas harvest.

## Check
`node tools/build.js --check <id>/<part>` until 0 errors. Then `python3 tools/works-check.py <id>`: it lists every variant
reading credited to Dillmann or the EOTC whose Ge'ez is not in that verse. Copy Ge'ez quotations from the texts file by
script, never by hand: every review of 1 Enoch found invented or garbled Dillmann/EOTC readings.
Lessons from the Tobit reviews: every place where the Plain English Translation departs from the base text, even to fix a plain
slip or follow the other Greek, needs a variant entry (a note is not enough); also enter every difference in meaning
from the other Greek or from the KJV's text; when copying quotations by script, match whole words (a quote ending in
ἦν once matched the tail of ἐκοιμήθην); don't splice two witnesses into a sentence neither has; `readers` must name
who the first readers really were, by evidence (e.g. copies found at Qumran), not one stock line; a church view
needs a source that addresses the question itself, and a row with nothing distinct to say is better dropped.
Lessons from the 1 Maccabees reviews: check every Josephus (and Polybius, Talmud, church father) claim against an
open text (lexundria.com/j_aj, Perseus, Sefaria, New Advent), never from memory; three parts misreported Josephus. The
Plain English Translation drifts toward Sinaiticus/Venetus or the KJV without anyone noticing: after drafting, diff every verse against the
base Greek by script and give each departure a variant. Swete's printed text is not always the codex: where he corrects
A or B from another witness, call it "Swete's text". Read Swete's sigla exactly ("]" marks a replacement, not an
addition). The build checks only quotations of five words or more in a few shapes, so check every quotation of the 66
by hand against the current Plain English Translation. One card per question across the whole book: read your sibling parts' cards before
writing yours, and point to them. NFC-normalize all Greek you write.
Lessons from the 1 Enoch reviews: never adopt a Charles emendation silently (add a variant); say "conflicts" when a
passage really conflicts with the 66 books; source every statement of a church's view, or soften it to what you can
source; leave out Aramaic, Greek-papyrus and manuscript-family readings you could not check in this session
(STYLE.md rule 2: no "as reported by ..." for a reading you did not see).
Milik's <i>Books of Enoch</i> (1976) and Bonner's <i>Last Chapters of Enoch in Greek</i> (1937) were reachable with web
fetch (archive.org item MILIKEnochInAramaicQumranCave4; bib.seveleu.com/books/hanokh/last_gr.pdf): both are under
copyright, so use them to check readings and quote only a few words. Report as agent-writer.md says, and update the book's line in
Add a line for your part to content/books/<id>/progress.md (PROGRESS.md is generated by the build; never edit it).
