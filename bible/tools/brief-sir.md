# Sirach (Ben Sira): shared brief for the part writers

Book id `Sir` (works.json `sirach`, tier dc). The grandson's prologue plus 1,402 verse numbers in 51 chapters. The
largest book outside the 66 so far, in eight parts.

Parts (all write at the same time and cannot see each other):
- 01-06 (prologue + 162 vv): the prologue (verse `1:0`, see below), all wisdom is from the Lord (1), testing and the
  fear of the Lord (2), honoring parents, humility, almsgiving (3), wisdom's discipline, shame (4), wealth and speech
  (5), friendship and seeking wisdom (6).
- 07-12 (156 vv): conduct in society, priests, the poor (7), caution with the powerful (8), women and men (9), rulers
  and pride (10), humility, reversals, riches (11), kindness and enemies (12).
- 13-18 (168 vv): the rich and poor (13), wealth and the happy man (14), wisdom as mother and bride, free choice
  (15:11-20), God's punishment, creation (16), humanity made from the earth, the covenant (17), God's greatness, mercy,
  self-control (18).
- 19-23 (143 vv): gossip and true wisdom (19), speech and silence (20), sin and folly (21), the sluggard and friendship
  (22), discipline of the tongue and lust; the adulteress (23).
- 24-29 (173 vv): Wisdom's praise of herself and the law of Moses (24), what delights and what grieves; wives (25-26),
  speech, deceit (27), anger, forgiveness, the tongue (28), lending, almsgiving, surety, hospitality (29).
- 30-36 (196 vv): children, health, the joy of the heart (30:1-24); then the Greek order of the transposed blocks
  (see "Numbering"; the contents follow tools/sir-numbers.tsv, read from the texts): the gleaner and the household
  (30:25-40), dreams, travel and sacrifice (31), the law and sacrifice, God the judge who hears the widow (32), the
  prayer for Israel (33:1-13; 36:16-22), wealth and the banquet (34-35), the rest of 36.
- 37-43 (210 vv): counselors (37), the physician (38:1-15), mourning, trades and the scribe (38:16-39:11), praise of
  creation (39:12-35), human misery, death (40-41), shame, daughters, the works of God in nature (42-43).
- 44-51 (194 vv): the Praise of the Fathers, Enoch to Nehemiah (44-49), Simon son of Onias the high priest (50), the
  closing prayer, the Hebrew psalm of thanksgiving and the acrostic poem on seeking wisdom (51).
- book.json and `content/books/Sir/sources.json`: a separate book-level writer.

## Texts and numbering (lead decisions, 2026-10-30)
- **Base text: the Greek** in `texts/orig/Sir.json` (Swete, Codex Vaticanus), the grandson's translation, which is the
  form Catholic and Orthodox churches received. The Hebrew original survives for about two-thirds of the book; it is a
  witness, not the base. Wherever the Hebrew differs in meaning, give a variant entry (and a note where it matters).
- **Numbering: Swete's Greek order and verse numbers everywhere** (the order of the Greek manuscripts as Swete prints
  them; Ziegler's Göttingen edition restores the Hebrew/Latin order, as the NETS introduction says; do not claim what any
  other edition or Bible does without opening it). In chapters 30-36 the Hebrew and Latin order, which the KJV and
  most English Bibles follow, has two long blocks the other way round, and English Bibles do not agree with each other
  on verse numbers there. Every Plain English Translation verse is one Greek verse; never merge, split or reorder. `texts/en/Sir.json`
  shows the KJV under the Greek verse that holds each line, marked "[KJV c:v]", from `tools/sir-numbers.tsv` (read
  it). Part 30-36 writes a note at the start of each displaced block (30:25, 31:1, 32:1, 33:1, 34:1, 35:1, 36:1, 36:16)
  giving the KJV numbers, and the book.json writer puts the full table in a section. References to Sirach elsewhere on
  the site already use the Greek numbers (converted 2026-10-30).
- **The prologue** is verse `1:0` of the Plain English Translation (shown unnumbered before chapter 1, the way psalm titles are), one block
  of prose; `texts/orig/Sir.json` grc `1:0` is Swete's prologue joined. Notes and variants may anchor to `1:0`. Write it
  with a `## Prologue` heading line before it and a heading before 1:1.
- **Missing lines (`gap`)**: 34 verse numbers have no line in Vaticanus (1:5, 1:7, 1:21, 3:19, 3:25 and others). They
  belong to the longer Greek text (and the Latin), which the KJV follows. The build needs a Plain English Translation line for every
  number: give each in square brackets (the site shows a bracketed verse as missing from the base text), translated
  from a witness you actually read in this session (the Vulgate in `texts/src/Sir.lat.json` under its own numbers, or a
  printed edition of the longer Greek you open), with a variant entry naming the witnesses as you saw them. Never
  translate from the KJV.
- **The Hebrew**: `texts/src/Sir.heb.json` is David Kahana's 1912 edition (public domain), from the Cairo Genizah
  manuscripts known then, under Kahana's own Hebrew/Latin-order numbers, so find each verse by its content. **Words in
  square brackets are Kahana's own restorations, not manuscript text: never cite them as the Hebrew.** For readings of
  the Masada scroll (found 1964, chapters 39-44), the later-published Genizah leaves (MS C, D, E, F), 2Q18 and 11QPsa
  (51:13-30), cite only what you read in this session on a page or edition that shows it (bensira.org is reachable and
  shows the manuscripts with transcriptions; name the manuscript and folio, never the website, in reader-facing text).
- Swete's footnotes are `texts/src/Sir.app.json` (ℵ, A, C and correctors). The Latin has many additions; mention them
  where Catholic use depends on them (e.g. 24:24-31 Vulgate).

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section). Build every verse from the
  Greek with a literal working line in `.scratch/sir-<part>/`, then Plain English Translation, then the drift audit in your head against
  the NRSV, NABRE, RSV, NJB, NETS and Skehan–Di Lella (never write their text; log verse, outcome, a few words).
- Lenses (fixed): C Catholic, O Orthodox, P Protestant, H Historical-critical, J Jewish reception.
- The book is poetry in couplets: ` / ` between lines, one verse per line. The prologue and 50:1-21's narrative parts
  stay poetry where Swete sets them as lines.
- Proverbs' Plain English Translation is the model where Ben Sira takes up a Proverbs saying; the earlier book's Plain English Translation is the model in the
  Praise of the Fathers wherever he retells a verse (Genesis to Nehemiah, Isaiah, Ezekiel, Malachi 3:23-24 / 4:5-6 at
  48:10). Quote the site's current Plain English Translation exactly.

## Terms (put new ones in content/proposals/works/terms.json after reading content/terms.json and the other briefs)
φόβος κυρίου "the fear of the Lord" (as in Proverbs); σοφία "wisdom", "Wisdom" where she speaks or acts as a person
(1:1-20, 4:11-19, 14:20-15:8, 24, 51:13-30; match the Wisdom of Solomon brief); νόμος "the law"; ἐντολαί
"commandments"; ὕψιστος "the Most High"; κύριος "the Lord"; παιδεία "discipline" or "instruction" by context, decided
once in each part with a note; ἐλεημοσύνη "almsgiving" (as in Tobit: check terms.json); τέκνον "my child" with a note
the first time in each part that the Hebrew has "my son" (בני); σοφός "the wise"; ἄφρων / μωρός "the fool" (match
Proverbs' renderings of the Hebrew behind them, from terms.json); δόξα "glory"; "the sons of Israel" or "Israelites"
as terms.json has it. Refrains repeat in the same English.

## Places that need full treatment (candidate links: check each in an open text before you assert it)
- Prologue: the grandson, "the law, the prophets and the other books" (a witness to a three-part Scripture: views on
  what it shows), "the thirty-eighth year of King Euergetes" (the date: 132 BC by the usual reckoning; check), and his
  apology that Hebrew does not translate exactly.
- 1:1-10 wisdom created before all things (Proverbs 8:22); 2:1-11 testing (James 1:2-4, 1 Peter 1:6-7).
- 3:1-16 honoring parents; **3:30 "almsgiving atones for sins"**: Tobit's chapter 4 card (top `almsgiving`) already asks
  whether giving to the poor takes away sin; point to it, do not repeat it (part 01-06).
- 7:29-31 honor the priests, the firstfruits; 7:36 and 28:6 "remember the end".
- **15:11-20 "Do not say, 'It was the Lord who made me sin'"; he left humanity "in the hand of its own choice"
  (διαβούλιον, Hebrew yetser).** Card (part 13-18): free will, grace and the yetser, top `free-will` (Catholic, Orthodox,
  Lutheran, Reformed, Arminian/Wesleyan; Pelagius's and Augustine's use of the verse only from sources opened).
- 17:1-14 creation and covenant; 18:1 "he who lives for ever created all things together" (κοινῇ: the Latin "simul" and
  Augustine's simultaneous creation, if checked).
- 24: Wisdom's self-praise, her tent in Jacob, the cedar and the vine, "all this is the book of the covenant of the
  Most High God, the law Moses commanded us" (24:23); John 1:14 and Matthew 11:28-30 (compare 51:23-27); Catholic
  liturgical use of 24 for Mary (check the feast or rite) and the Christological reading. **Card (part 24-29): who is
  Wisdom in Sirach 24: the Torah, Christ, or Mary?** only if churches really differ; top `wisdom`.
- **25:24 "From a woman sin had its beginning, and because of her we all die."** Present the Greek, the Hebrew (MS C
  if you read it), the readings that refer it to Eve and to the wife of 25:16-26, its use in debates on the fall and on
  women, and Romans 5:12 (Adam). Fair, plain, no softening of the text itself.
- 28:2-7 forgive your neighbor and your sins will be forgiven (Matthew 6:12-15); 29:12 store up alms; 31(34):21-27
  bread of the poor; 32(35):1-26 the sacrifice of keeping the law, God the judge, the widow, the prayer of the humble
  pierces the clouds (Luke 18:1-8: the site's Luke 18 notes cite Sirach 32:14-22).
- 33:1-13 + 36:16-22 the prayer for the gathering of Israel (in Greek order split by the transposition: say so).
- 38:1-15 honor the physician (`medicine` topic; Jewish and Christian views of medicine and prayer, Christian Science and
  faith healing only from sources opened), 38:24-39:11 the scribe.
- 44-50: the Praise of the Fathers: who is included and left out (Ezra missing; Nehemiah in; Enoch twice: 44:16 and
  49:14), 45:6-26 Aaron and Phinehas (priesthood), 46:20 Samuel prophesying after death (1 Samuel 28), 48:1-11
  Elijah, 48:10 Malachi 3:23-24 (4:5-6), Luke 1:17; 48:11 the blessed who saw him (the Greek is uncertain; give the
  Hebrew if you read MS B); **49:10 "the bones of the Twelve Prophets"** (the earliest witness to the Twelve as one
  book: give the Greek and MS B; the Zechariah part's earlier mention of this was removed for lack of a check: report
  your verified wording so the lead can restore it); 50:1-21 Simon son of Onias (`onias` topic), the temple service,
  Yom Kippur or the daily offering (views); 50:25-26 the "foolish people at Shechem".
- 51: the prayer of thanksgiving (51:1-12), the Hebrew psalm after 51:12 in MS B (Kahana prints it inside 51:1-12's
  entries: give it in a note, translated from the Hebrew, as not in the Greek), 51:13-30 the acrostic (11QPsa col.
  21-22 if you read it), "come to me, you who are untaught" (51:23), "put your neck under her yoke" (51:26; Matthew
  11:28-30).
- Where Ben Sira matches, goes beyond or conflicts with the 66 books, a `canon` note (e.g. no resurrection hope: 17:27-
  28, 38:21-23, 41:3-4; daughters and women: 22:3, 42:9-14: present honestly with the readings).

## Who it was for, and why
Ben Sira addresses "my child" and the young men of a school (51:23 "house of instruction"); settings for each
instruction, prayer, hymn and the Praise of the Fathers. `readers`: Jerusalem's scribal class about 190-180 BC; the
grandson's readers in Egypt after 132 BC; the Masada copy (before AD 73) and the Genizah copies as later Jewish
readers; the rabbis quote him (Talmud: check each quotation on Sefaria). Name evidence, not stock lines.

## Topics
Contribute to: wisdom, fear-of-the-lord (check id), almsgiving, free-will, forgiveness, sacrifice, priesthood, onias,
medicine, women and marriage (check ids), friendship (check), money and wealth (check), speech/the tongue (check),
elijah, prophets / the-twelve (check), creation, death, sheol, temple, scribe or ezra (check), patriarchs, david,
solomon, jeremiah, and the people of 44-50 by their existing topics. New core: `ben-sira` only if no topic for the
book or the man exists (check titles and aka for "Sirach", "Ben Sira", "Ecclesiasticus"); part 01-06 writes it.

## book.json (book-level writer only)
Lead, facts, authorship (Jesus son of Eleazar son of Sirach, 50:27; the grandson), date, audience, outline, the five
lenses, sections (the Hebrew and its rediscovery: the Genizah 1896, Masada 1964; the Greek and the longer text; the
Syriac and the Latin; the order of chapters 30-36, with the full Greek-to-KJV table from tools/sir-numbers.tsv; Sirach
in the rabbis and its exclusion from the Hebrew canon (Tosefta Yadayim 2:13 and Talmud references, checked); the name
"Ecclesiasticus"; its use in the church), spec, prompts, topics, sources, links. **No "is it Scripture?" card**: the
Proverbs book card (top `canon`) already asks whether Wisdom and Sirach are Scripture; point to it. `canon` block per
agent-writer-works.md (accepted_by, provenance, rejected_why: the Hebrew canon, Jerome's prologue to the books of
Solomon, Luther, Article VI "for example of life", Westminster 1.3; cited_in: James 1:19 / 5:11, Matthew 6:12-15 /
28:2, Matthew 11:28-30 / 51:23-27, Luke 1:17 / 48:10, Luke 12:16-21 / 11:18-19, Hebrews 11:5 / 44:16, John 1:14 / 24:8,
each with honest strength), reliability, how_to_read.

## When you finish
`VERBOSE=1 node tools/build.js --check Sir/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/Sir/progress.md. Report counts, decisions, every departure from Swete, every gap line and its witness,
and anything uncertain.
