# Baruch and the Letter of Jeremiah: shared brief for the part writers

Book id `Bar` (works.json `baruch`, tier dc). 213 verses in 6 chapters. Chapter 6 is the Letter of Jeremiah
(works.json `letter-of-jeremiah`), numbered as in Catholic Bibles and the KJV; Greek and Orthodox Bibles print it as a
separate book after Lamentations. The texts file says so in its `about` note.

Parts (both write at the same time and cannot see each other):
- 01-05 (141 vv): the narrative frame in Babylon (1:1-14), the confession of sins (1:15-3:8), the wisdom poem
  (3:9-4:4), Jerusalem's lament and consolation (4:5-5:9).
- 06-06 (72 vv): the Letter of Jeremiah, against the idols of Babylon.
- book.json and `content/books/Bar/sources.json` (book-wide keys): a separate book-level writer, who covers BOTH works.

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section). Build every verse from the
  Greek in `texts/orig/Bar.json` (Swete, Codex Vaticanus) with a literal working line in `.scratch/bar-<part>/`, then
  Plain English, then the drift audit in your head against the NRSV, NABRE, RSV, NJB and NETS (never write their text).
  KJV (`texts/en/Bar.json`) and Vulgate/Douay (`texts/src/Bar.lat.json`) for sense only; Swete's footnotes in
  `texts/src/Bar.app.json` (A, Q, Marchalianus and others: read his sigla exactly).
- Lenses (fixed): C Catholic, O Orthodox, P Protestant, H Historical-critical, J Jewish reception.
- Prose for 1:1-3:8 and chapter 6; poetry with ` / ` for 3:9-5:9.
- Many scholars hold that 1:1-3:8 was translated from Hebrew (Hebraisms; Origen's marks noted in the Syro-Hexapla):
  report such claims only from a source opened in this session.

## Terms
κύριος "the Lord"; "the Lord our God"; ὁ αἰώνιος "the Everlasting" (4:10, 4:14, 4:20, 4:22, 4:24, 4:35, 5:2): a title,
one rendering everywhere, with a note at 4:10; ἐπιστήμη "understanding"; φρόνησις "insight"; σοφία "wisdom" (match
the Wisdom of Solomon brief); εἴδωλα / θεοί in ch. 6: "gods" when the letter quotes Babylonian speech, "idols" otherwise,
decided once at 6:4 with a note. Refrain in ch. 6 ("so you can see they are not gods; do not fear them", 6:16, 23, 29,
40, 44, 52, 56, 65, 69, 72 and variations): render each the same unless the Greek differs, and say how in a note.
Check content/terms.json and content/proposals/*/terms.json first.

## Parallels (the earlier book's Plain is the model; quote the site's current Plain exactly)
- 1:15-2:19 follows Daniel 9:4-19 closely (shared phrases: compare the site's Daniel Plain verse by verse, and keep
  the same English where the Greek of Baruch matches the Greek of Daniel; say in a note where it does not).
- 2:21-23 and 2:29-35 use Jeremiah 7:34, 27:11-12, 32:37-41 and Deuteronomy 28, 30 (the site's Plain of those).
- 3:29-30 beside Deuteronomy 30:12-13 (and Romans 10:6-8); 3:9-4:4 beside Job 28, Proverbs 8, Sirach 24.
- 4:36-5:9 beside Isaiah 40, 49, 60 and Psalms of Solomon 11 (works.json name; describe, do not quote unless you
  read the Greek).
- Chapter 6 beside Jeremiah 10:1-16 (the site's Plain), Isaiah 44:9-20, Psalm 115:4-8; Jeremiah 29 is the letter it
  claims to be like.

## Places that need full treatment (candidate links: check each in an open text before you assert it)
- 1:1-14: Baruch in Babylon, the "fifth year" (1:2), the money sent to Jerusalem, Jehoiakim the high priest (1:7),
  the prayer for Nebuchadnezzar and "Belshazzar his son" (1:11-12; compare Jeremiah 29:7, Daniel 5): give the
  historical problems fairly with the answers of those who hold the book as Scripture.
- 3:9-4:4: wisdom given to Israel as the Torah (4:1); **3:37-38 "afterward she appeared on earth and lived among
  people"**: read by many Fathers of the incarnation (check which: e.g. Cyprian's Testimonies, others), by critics as
  Wisdom/Torah, with the possibility that 3:38 is a Christian addition (only if a scholar says so in a page you open).
  **Card (part 01-05): Is Baruch 3:38 a prophecy of the incarnation? top `incarnation` if it exists, else
  `wisdom`.** Use a card only if churches really differ; otherwise views notes.
- 4:5-5:9: Jerusalem as a mother addressing her children (compare Lamentations 1, Isaiah 54), and the consolation.
- Chapter 6: the title (written to be read to the captives), "seven generations" (6:3) beside Jeremiah's seventy
  years, Babylonian processions, the Greek fragment of the Letter from Qumran Cave 7 (7Q2: cite only if you read its
  publication or a scholar's report of what verses it holds in this session), and 2 Maccabees 2:1-3 (the site's Plain),
  which knows a letter of Jeremiah against idols.
- Where the book matches, goes beyond or conflicts with the 66 books, a `canon` note.

## Who it was for, and why
Settings for the frame and the public reading (1:3-4, 1:14), the confession (prayer, with who prays), the poem, the
mother's speech, and the letter. `readers`: name the main scholarly proposals with their holders (Maccabean or later
Judea for the parts; Diaspora readers; the book read on the Ninth of Av or at the Feast of Tabernacles only if a
source says so).

## Topics
Contribute to: baruch (the person: use the existing topic), jeremiah, exile, idolatry, wisdom, confession or prayer
(check ids), jerusalem, belshazzar, nebuchadnezzar, seventy-years, babylon (check). Part 06-06 adds a section to
idolatry. New core only if no topic fits (check content/topics/ and content/proposals/*/topics/ by title and aka).

## book.json (book-level writer only)
Covers Baruch 1-5 and the Letter (ch. 6) as two works under one book id: lead, facts, authorship (each part
separately), audience, outline, the five lenses, sections (the Greek and a Hebrew original; date; the frame and Jeremiah
43:1-7 which puts Baruch in Egypt, not Babylon; the Letter's place after Lamentations in Greek Bibles; Origen's and
Jerome's remarks, checked), spec, prompts, topics, sources, links. No "is it Scripture?" card: Jeremiah's book card
(top `canon`) already asks "Are Baruch and the Letter of Jeremiah part of the Bible?"; point to it, and add a card only
for a different whole-book question where churches really differ. `canon` block as agent-writer-works.md
says: accepted_by (Catholic, Trent; Orthodox, with the Letter as a separate book; Ethiopian; Anglican Article VI;
check each), provenance, rejected_why (the Hebrew canon, Jerome's preface to Jeremiah, the Reformers), cited_in (honest
strength: Romans 10:6-8 / 3:29-30, John 1:14 / 3:38, 1 Corinthians 10:20 / 4:7, Revelation 9:20 / 6:4-ff.), reliability,
how_to_read. Also add `"book": "Bar"` to the letter-of-jeremiah entry by proposal (content/proposals/works/works.json)
so mentions of the Letter link to chapter 6, if the build accepts a chapter link (check build.js; if not, report it).

## When you finish
`VERBOSE=1 node tools/build.js --check Bar/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/Bar/progress.md. Report counts, decisions, every departure from Swete, anything uncertain.
