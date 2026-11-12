# Psalms of Solomon: shared brief for the part writers

Book id `PsS` (works.json `psalms-of-solomon`, tier `other`: in no church's Bible). 332 verses in 18 psalms, plus 17
headings (2:0-18:0). Eighteen Greek psalms credited to Solomon. Psalms 2, 8 and 17 grieve the Roman capture of
Jerusalem and a foreign conqueror's entry into the sanctuary, which most scholars identify with Pompey (63 BC). Psalm 2
ends with a conqueror's death on the shore of Egypt. Psalms 17-18 pray for a king, the "son of David", whom 17:36 calls
χριστὸς κύριος. This is the site's first tier-3 Septuagint-era work, so it gets the full "not widely accepted" treatment
(`.claude/skills/canon-tiers/SKILL.md`): no church counts it as Scripture, and the site never presents it as Scripture.

Parts (both write at the same time and cannot see each other):
- **01-08** (174 vv): the alarm and the rich who sinned in secret (1), Jerusalem besieged and the sanctuary trampled, the
  "dragon" and his death in Egypt (2), the righteous and the sinner (3), against the people-pleasers (4), God feeds the
  poor (5), the one who calls on the Lord (6), "do not move your dwelling from us" (7), the war at Jerusalem, the rulers
  who open the gates, the slaughter and God's judgment justified (8).
- **09-18** (158 vv): exile and choice, "the works of our soul" (9), discipline (10), the trumpet in Zion and the
  ingathering (11, which Baruch 4:36-5:9 parallels closely), the slanderous tongue (12), the righteous spared (13), the
  devout live by the Law (14), the sign on the righteous (15), the soul that nearly slipped (16), the kingdom of God,
  the usurpers and the "son of David" (17), the day of mercy and his Messiah (18).
- **book.json and `content/books/PsS/sources.json`**: a separate book-level writer (as for 3 Maccabees), who also makes
  `tools/PsS-numbers.tsv` (see Numbering).

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section and every "Lessons from"
  paragraph), plus this brief. Reviewers follow tools/agent-reviewer-works.md.
- `literal.js` does not work outside the 66. Build every verse from the Greek in `texts/orig/PsS.json` (`grc`): a literal
  working line in the Greek word order in `.scratch/pss-<part>/`, then the Plain English Translation, then the drift
  audit in your head (never write their text) against NETS (Wright's translation), R. B. Wright in Charlesworth's
  <i>Old Testament Pseudepigrapha</i> vol. 2, the Lexham English Septuagint and Wright's 2007 critical edition. The
  English check text is `texts/en/PsS.json` `charles` (Charles's <i>Apocrypha and Pseudepigrapha</i>, vol. 2, 1913,
  public domain). Check whose translation it is in that volume before naming the translator. The Plain English
  Translation is fresh 8th-grade English, not a modernized Charles.
- **The base text** is Swete's, vol. III (1912). The texts file says "as printed by Swete". Which manuscripts his
  printed text rests on, and what each siglum means, may be said only from a page of Swete (his introduction or the
  page itself) or another edition opened in this session. Until then, name a witness by its siglum ("the manuscript
  Swete calls i").
- **Swete's apparatus** (`texts/src/PsS.app.json`). Its `_about` line speaks of A, B and ℵ. For this book the sigla are
  lowercase minuscules (h i l m p r v, with corrector marks), so read them as Swete prints them, not as the `_about`
  says. The verse numbers inside each note are Swete's own text numbers (checked: the note at "17:38" puts διαψαλμα at
  31, τὸν ζυγόν at 32 and χριστὸς κύριος at 36, as `grc` does). The OCR is noisy. Never enter a reading you cannot
  read clearly; say what is unclear in your report. Readings to weigh include 17:13 ἄνομος / ἄνεμος ("the lawless one"
  / "the wind"), the order of 17:22-23 in i, 17:36 (i omits the clause; see Terms), 17:46 ἰσότητι / ὁσιότητι, and the
  headings each manuscript gives or lacks (Psalm 1 has no printed heading; the manuscripts' title for it goes in a
  note or variant at 1:1, never as a 1:0 verse).
- **Swete vs First1KGreek**: `.scratch/works-texts/swete-vs-f1k-new-books.txt` (PsS block, 129 lines) lists unjudged
  differences. Almost all are OCR damage in the First1KGreek copy (ἐυ for ἐν and the like). The ones that could be real
  are 2:2, 2:37, 2:40, 4:7, 5:22, 8:35, 9:17, 9:18 and 13:7. Check each against Swete's page or apparatus. A real typo in
  the digital Swete goes in your report for tools/swete-fixes.json, never into variants.
- Every place the Plain English Translation departs from Swete's text needs a variant entry. After drafting, diff every
  verse against `grc` by script. NFC-normalize all Greek you write and copy it from the texts file by script.
- **Poetry.** As the site's Psalms: one verse per line, ` / ` between poetic lines, parallel lines kept parallel.
  διάψαλμα (17:31, 18:10) is "Selah" (terms.json) at the end of its line, with a note at first use in each part that
  the Greek is <i>diapsalma</i>, the word the Greek Psalms use for selah.
- **Headings (c:0).** As the site's Psalms (brief-psa.md): the heading is verse 0, short sentences with periods, no
  colons. τῷ Σαλωμών is "Of Solomon." (as Psalm 72:0 and 127:0 on the site); Ψαλμός "A psalm"; ᾠδή "a song"; ὕμνος
  "A hymn". So 2:0 is "A psalm of Solomon. About Jerusalem." Phrases such as εἰς νῖκος (8:0), εἰς ἔλεγχον (9:0) and
  ἐπιστροφῆς (7:0) get a note on their sense, and on whether the heading was part of the psalm or added by copyists
  (only from a source opened). The headings belong to the book's history; 18:0 matters for the Messiah (see Terms).
- **References.** Inside this book a bare "17:36" is enough. Everywhere else write "Psalms of Solomon 17:36" (plural, in
  full). Never write "Psalm 17 of the Psalms of Solomon" or "Ps. Sol. 17": the reference parser reads "Psalm 17" as the
  biblical Psalm.
- **Lenses (fixed)**: H Historical-critical (date, Pompey, the parties, the Greek and a likely Hebrew original), J Jewish
  setting (the devout and the sinners, the Temple, the Law, the hopes of Jews under the Hasmoneans and Rome, and why
  later Judaism did not keep the book), N New Testament background (the son of David, the Messiah, "sinners",
  Pharisees, Luke 1-2), P The Psalter's patterns (how these poems use the forms, phrases and royal theology of the
  biblical Psalms, especially Psalms 2, 72 and 89), C Christian reception: read, not Scripture (Greek Bible manuscripts,
  Codex Alexandrinus's table of contents, the canon lists, and how Christians of every church read it today). Use each
  lens only where it has something distinct to say.

## Numbering (read before citing anything)
The site uses Swete's numbering. Three systems are in play:
1. **Swete** (the site; `grc`, the apparatus, and this brief). Chapter lengths: 8 41 16 29 22 9 9 40 20 9 9 8 11 6 15 15 51 14.
2. **The en file's Charles numbering** differs from Swete in ten psalms (counts 8 37 15 29 21 9 9 36 18 8 9 7 11 7 9 15
   48 14; 327 verses, so the copy may also have gaps). Use it for sense only, matched by content, never by number.
3. **The numbering most modern scholarship uses** (Rahlfs, Wright, NETS and the OTP; to be confirmed by the book-level
   writer in an opened edition). Here "Lord Messiah" is 17:32 (Swete 17:36) and "son of David" 17:21 (Swete 17:23);
   the free-will verse is 9:4 (Swete 9:7).

When a scholar cites the book, convert the reference to Swete's number and check that the verse says what is claimed.
The book-level writer makes `tools/PsS-numbers.tsv` (Swete, modern, en-file Charles; one row per Swete verse), with
the modern numbers taken from an edition opened in this session, and names that edition in the file's header.
**Existing citations elsewhere on the site use the modern numbers** (about 76 references in 49 files, e.g. "Psalms of
Solomon 17:32" in Luke 2:11's note, 17:21 and 17:26 in many NT notes, 11:2-7 in Baruch). Part writers do not edit
other books. The book-level writer lists every such reference with its Swete equivalent in
`content/proposals/works/build.md` so the lead can renumber them at alignment.

## Terms (check content/terms.json and content/proposals/*/terms.json first; add new ones to proposals/works/terms.json)
Existing entries to follow: Κύριος "the Lord" (never "the LORD"), ὁ ὕψιστος "the Most High"; δίκαιος / δικαιοσύνη
"righteous / righteousness"; ἔθνη "the nations" ("the Gentiles" where it means non-Jews as people); πάροικος "resident
alien" (17:31; the Ephesians entry); παιδεία "discipline" (Sirach's rule, "instruction" where the sense is teaching);
παῖς "servant" (17:23 "your servant", the Acts entry); διάψαλμα "Selah".
New, one rendering everywhere (proposed by the 09-18 writer, who has most of them; the 01-08 writer re-reads the
proposals file before adding any):
- χριστός "Messiah" (title of the coming king; note at first use on "anointed", Hebrew mashiach, and the terms
  "meshiach YHWH" and Lamentations 4:20's site rendering "the LORD's anointed").
- χριστὸς κύριος (17:36, as printed) "the Lord Messiah": "and their king will be the Lord Messiah", with a full note
  and a variant entry for the proposed correction χριστὸς κυρίου ("the Lord's Messiah"; who proposed it, from a source
  opened). The site's Luke 2:11 renders the same two Greek words "Messiah and Lord", and the note says so.
- χριστοῦ κυρίου (18:0, 18:8) "the Lord's Messiah", matching the site's Luke 2:26; χριστοῦ αὐτοῦ (18:6) "his
  Messiah". The note at 18:0 says the genitive could also be read as 17:36's phrase.
- υἱὸς Δαυίδ (17:23) "son of David", lowercase as in the site's Matthew 1:1 (where it is a title of address, Matthew
  9:27 has "Son of David").
- οἱ ὅσιοι "the devout": the group's own name for itself, the Greek of Hebrew ḥasidim. A note at first use in each part
  says how the site renders ὅσιος elsewhere (Wisdom's "holy ones", Sirach's "holy", 1 Maccabees' Hasideans, Psalm
  16:10's "your loyal one") and why "the devout" is kept here. συναγωγαὶ ὁσίων "the assemblies of the devout" (note:
  not yet "synagogues" in the later sense).
- ἁμαρτωλός / οἱ ἁμαρτωλοί "sinner / the sinners": a party label as much as a moral one. The note says whom each
  passage seems to mean (Jewish rulers, the Gentile conqueror) and who says so.
- ἄνομος / ἀνομία "lawless (one) / lawlessness" (as the site's 2 Thessalonians entry); παράνομος "law-breaking".
- ἔλεος / ἐλεήμων / ἐλεέω "mercy / merciful / have mercy" (as the site's Luke 1:72). Note at first use: it usually
  stands for ḥesed, the site's "loyal love" in the Hebrew Bible, and the topic is `mercy`.
- ἀνθρωπάρεσκοι (4:0, 4:7, 4:19) "people-pleasers", with a note pointing to the site's Ephesians 6:6 and Colossians
  3:22 ("people who want to please others").
- δράκων (2:29) "the dragon" (topic `dragon`); ἁγίασμα "the sanctuary"; ὑπερηφανία "arrogance".

## Parallels and echoes (candidate links only: check each in an open text before you assert it)
- **Pompey**: Josephus, <i>Jewish Antiquities</i> 14.54-79 and <i>Jewish War</i> 1.141-158 (source keys `josephus-ant`,
  `josephus`; read at lexundria.com or Perseus); the site's Histories of Tacitus 5:9 ("by right of victory he went
  into the temple"; quote its Conversational English Translation exactly and name it). Pompey's death in Egypt (48 BC)
  beside 2:30-31, only from an ancient account opened (Plutarch's <i>Pompey</i> 77-80, Cassius Dio 42.3-5). Hyrcanus II
  and Aristobulus II behind 8:16-21 and 17:5-20: only with a source.
- **17-18 and the 66 books**: Psalm 2:9 (rod of iron, potter's vessels, 17:26), Isaiah 11:1-5 (the word of his mouth,
  the spirit of wisdom, 17:27, 17:39, 17:42 and 18:8), 2 Samuel 7:12-16 and Psalm 89:3-4 (the oath to David, 17:5), Psalm
  72 (the nations serve him), Ezekiel 34 (the shepherd, 17:45), Isaiah 52:7 (the herald of good news, 11:2).
- **New Testament (candidate links, check each)**: Luke 1:32-33, 1:51-55, 1:68-79, 2:11, 2:25-26, 2:38; Matthew 1:1,
  9:27, 21:9, 22:41-46; Mark 12:35-37; John 7:42; Acts 2:30-36; Romans 1:3; 2 Thessalonians 2:8; Revelation 2:27,
  12:5, 19:15; Galatians 2:15 ("Gentile sinners"); the people-pleasers (Ephesians 6:6, Colossians 3:22). The site's
  existing NT notes already cite this book: read them, keep the site consistent, and note where a published note's
  claim does not match the Greek you read (in your report, not by editing that book).
- **Baruch 4:36-5:9 and Psalm 11**: the site's Baruch (published) argues dependence in its notes (Toy). Read those notes
  and the site's Baruch Plain English Translation before writing Psalm 11. Give both directions of dependence and
  a shared source, each with who holds it.
- **Wisdom of Solomon**, Sirach, 1 Enoch, 1-2 Maccabees and the Qumran texts (Community Rule, Damascus Document, the
  pesharim) where the language of the devout, the sinners and the end matches: only from texts opened.
- Where a passage matches, goes beyond or conflicts with the 66 books, a `canon` note, saying plainly which.

## Places that need full treatment
- **Pompey's conquest**: 2:1-3 (the battering ram, the altar trampled), 2:29-35 (the dragon and the body on the waves),
  8:14-26 (the cup of wine, the one from the end of the earth, the rulers who open the gates, the slaughter), 17:5-20
  (the usurpers of David's throne, "a man foreign to our race", the lawless one, the exile to the west, the devout who
  fled). Say who is meant, by whose argument, and how sure.
- **17:21-51 and 18 (Swete numbers)**: the son of David. What he does (purge Jerusalem, gather a holy people, judge the
  nations, no trust in horse and bow), what he does not do, whether he is a man or more (17:37-42; "pure from sin" 17:41),
  and 17:36 and 18:0, 18:6, 18:8. Present the Jewish reading (a human king of David's line) and the Christian reading
  (a witness to the hope Jesus fulfilled and changed) fairly. Never claim the NT quotes the book unless a source shows
  a quotation: the links are shared hope and shared phrases.
- **Who wrote it**: the Pharisee view (the classic one; e.g. Ryle and James 1891), the Essene/Qumran-related view, and
  the view that it comes from an unaligned devout group. Give each with its strongest evidence and who holds it, from
  sources opened, and keep "consensus" only where a source says so. The writers state the evidence in their passages
  (3, 4, 9, 14, 17). The book-level writer weighs the whole question in book.json.
- **Free choice and works, 9:7-9**: "our works are in the choice and power of our soul"; "whoever does righteousness
  stores up life for himself with the Lord". Present it fairly beside the 66 books (Deuteronomy 30:19, Sirach 15:14-17
  only as a work outside the 66, Romans 2:6-7, Ephesians 2:8-10) and the scholarly use of the book in the "covenantal
  nomism" debate (E. P. Sanders and his critics), only from sources opened.
- **The righteous and the sinner after death**: 3:13-16 (the sinner "will not rise"; those who fear the Lord
  "will rise to eternal life"), 13:10-11, 14:2-6 (Swete's Psalm 14 has six long verses), 15:8-15 (the sign of God
  on the righteous, the mark of destruction on the sinners' foreheads; compare Ezekiel 9:4, Revelation 7:3 and 9:4). A `canon` note on how this agrees with or goes beyond Daniel 12:2.
- **Codex Alexandrinus**: the book stood in its table of contents (where, and with what heading) though the pages are
  lost. The book-level writer says this only from a source opened (Swete's <i>Introduction</i>, key
  `swete-intro-greek-ot`, or the British Library's description). Also the canon lists that name it (the Stichometry of
  Nicephorus, key `nicephorus-stichometry`, and the Synopsis of Pseudo-Athanasius), checked.

## Who it was for, and why
A settings card for every psalm (a long one may need two): who speaks (a single voice, Jerusalem personified in 1-2,
the devout as "we"), to whom (God, the devout, Jerusalem, the reader), what the heading claims, and what setting
scholars propose (worship, mourning after 63 BC). `readers` must be argued from evidence: a devout Jewish group in or
near Jerusalem after 63 BC, writing in Hebrew (by most accounts; say whose) and soon read in Greek, with each proposed
date range and who proposes it. Say why the poems credit Solomon (the 72:0 and 127:0 headings, the son of David,
Wisdom of Solomon), only from sources opened.

## Where Christians differ
Every church agrees the book is not Scripture. So **book.json has no "Is it Scripture?" card**: the canon block
already answers that, and a card with no conflicting rows would be forced (Matt's rule: cards only where churches
really disagree). Consider at most one chapter card: on 9 (free choice, grace and works, top `free-will` or `grace`),
only if each row has a source that addresses the question itself, and only if no existing card already asks it (read
the cards on the topic first and point to them instead). No card on the Messiah: churches do not disagree that Jesus
is the Messiah.

## Topics
Contribute to messiah, davidic-covenant, son-of-god (only if a passage bears on it), kingdom-of-god, kingship, rome,
hasmoneans, hasideans, pharisees, sadducees, temple, jerusalem, mercy, discipline-of-children (only for the father's
rod image), suffering, retribution, resurrection, final-judgment, exile, twelve-tribes, psalms, psalm-titles, solomon,
dragon, pride, wealth, poverty, foreigners, canon, books-outside-the-bible, pesharim (Qumran comparisons). New cores, as
proposals in `content/proposals/works/topics/` and only after checking every title and `aka`: `pompey` (People:
Pompey the Great; the book-level writer creates it, and the parts contribute to it) and, only if the authorship
material needs a page, `essenes` (People; check that no topic's aka has "Essenes" or "Qumran community" first). A
`psalms-of-solomon` core only if the lead asks (works.json already gives the book its page).

## book.json (book-level writer only)
Lead, facts, authorship (the four views above), audience, outline, the five lenses, sections (the name and the Solomon
headings; Pompey and the date; the parties and who wrote it; the Greek and the lost Hebrew; the Messiah of 17-18 and the
NT; the manuscripts: the minuscules Swete used, the Syriac (only from a source opened), Codex Alexandrinus's table of
contents; the numbering systems; Baruch 5 and Psalm 11), spec, prompts, topics, sources, links. No traditions card (see
above). `canon` block per agent-writer-works.md for tier `other`. `accepted_by` rows for every church family (Eastern
Orthodox, Oriental Orthodox, Ethiopian, Catholic, Anglican, Protestant) and Judaism, each saying it is not in that
Bible and what, if anything, it says about the book, from a source. `rejected_why` explains why no church kept it (it
was never in the Hebrew Bible, it stood only at the edges of the Greek Bible, and the canon lists put it among the
disputed books), in the strongest form the sources give. `cited_in`: honest strength, most links `shared tradition`
or `disputed`. `reliability` in its four parts: a witness to Jewish hope (very high, and why), the text (late
minuscules, the Greek of a lost original), history (how well it fits Pompey), agreement with the 66 books point by point.
Also `tools/PsS-numbers.tsv` and the list of other books' citations in proposals/works/build.md (Numbering).

## When you finish
`VERBOSE=1 node tools/build.js --check PsS/<part>` at 0 errors and no warnings in your part (the book-level writer:
`--check PsS`). Add your line to content/books/PsS/progress.md. Report counts, decisions, every departure from Swete,
every reading you could not read clearly, the First1KGreek differences you judged, and anything uncertain.
