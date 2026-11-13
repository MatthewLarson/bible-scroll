# 1 Clement: shared brief for the three part writers and the book-level writer

Book id `1Cl` (works.json `1-clement`, tier `early`). 65 chapters, 399 verses plus `1:0`, the greeting ("The church of God
that lives as a resident alien in Rome, to the church of God that lives as a resident alien in Corinth"). In Lake's words
(introduction, opened for this plan) it is "a letter sent by the church of Rome to the church of Corinth in consequence of
trouble in the latter community which had led to the deposition of certain Presbyters", protesting "against this deposition,
and the partizanship which has caused it". The letter names no writer and speaks as a church; "tradition, however, has
always ascribed it to Clement", whom the early lists of bishops make the third or fourth bishop of Rome, and Lake sees "no
reason for rejecting this tradition". It is long (the longest of the five), built of examples from Scripture, prayers and
appeals to harmony, and it holds the earliest account outside the New Testament of the deaths of Peter and Paul (5), the
phoenix (25), the order of worship and ministry from the apostles (40-44), and a great closing prayer (59-61).

**Read first:** `tools/brief-apfathers.md` (shared decisions; it wins over this brief), `tools/agent-writer.md`,
`tools/agent-writer-works.md` with every "Lessons from" paragraph, `bible/STYLE.md`, and Lake's introduction to 1 Clement
(vol. 1 OCR, lines 422-650).

## Parts (all three write at the same time and cannot see each other), plus the book-level writer
- **01-20** (144 vv with 1:0): the greeting and the church's former good name (1-2); jealousy and envy, and what they did
  from Cain and Abel to Saul and David (3-4), to Peter and Paul (5) and the women martyrs, "Danaids and Dircae" (6); call to
  repentance, Noah and Jonah (7-8); obedience, faith and hospitality: Enoch, Noah, Abraham, Lot, Rahab and the scarlet cord
  (9-12); humility: the words of the Lord Jesus (13:2), Isaiah 53 and Psalm 22 in full (16), Elijah, Elisha, Ezekiel, Abraham,
  Job and Moses (17), David and Psalm 51 (18); peace, and the harmony of the creation (19-20).
- **21-39** (117 vv): conduct in the household and the church (21-23, with Psalm 34 and the unknown "Scripture" of 23:3-4 on
  the double-minded); the resurrection: day and night, the seed, the phoenix, Job 19 (24-26); God sees everything, the chosen
  portion (27-30); the blessing of Abraham, Isaac and Jacob, "not through ourselves ... but through faith" (31-32), good works
  and the making of humankind (33-34, with Isaiah 6:3 and 1 Corinthians 2:9), the gifts of God (35), Jesus Christ the high
  priest beside Hebrews 1 (36), the army and the body (37-38), Job 4-5 against the proud (39).
- **40-65** (139 vv): the ordered worship of the Temple, high priest, priests, Levites and the layperson (40-41); the apostles
  sent by Christ, who appointed "their firstfruits" as overseers and deacons (42, with the Greek Isaiah 60:17), Moses and
  Aaron's rod (43), the apostles' provision for successors and the wrong done in removing blameless men (44); the righteous
  persecuted, Daniel and the three young men (45); "why is there strife?" and a saying of Jesus (46); "Take up the letter of
  the blessed Paul the apostle" (47); love (48-50); confession, Moses' intercession, the call to those who caused the revolt
  to leave (51-54); kings, rulers and Christians who gave themselves for others, Judith and Esther (55); correction and
  submission to the elders, Proverbs 1 (56-58); the great prayer, for the chosen, the afflicted and the rulers (59-61); the
  summary, the messengers Claudius Ephebus, Valerius Bito and Fortunatus, and the blessing (62-65).
- **book.json and `content/books/1Cl/sources.json`**: a separate book-level writer, who also writes Barnabas's book-level
  files (`brief-bnb.md`), the `apostolic-fathers` and `clement-of-rome` topic cores, and the citation list for 1 Clement in
  `content/proposals/works/build.md`.

## Text and witnesses
- Base text: Lake's Greek (`texts/orig/1Cl.json` `grc`, with `fixed`: 48 slips corrected). Lake's witnesses (introduction):
  Codex Alexandrinus (A, fifth century, the whole letter but one page; his footnote at 57:6: "A is missing from here to the
  beginning of Chapter LXIV"), the Codex Constantinopolitanus (C, 1056), the Syriac version (S, one manuscript of 1169,
  Cambridge Add. 1700, the version "probably not early"), the Latin version (L, one manuscript of the eleventh century from
  Florennes, now at Namur, a version "extremely ancient", perhaps late second or early third century, made in Rome), the
  Coptic version (K: Kb a fourth-century Berlin papyrus, Ks a later Strassburg manuscript), and Clement of Alexandria's
  quotations (Clem). Lake: "none of them can be regarded as undoubtedly superior", so "any critical text is necessarily
  eclectic", with "very little range of variation". So for 57:7-63:4 the Greek rests on C alone with the versions: say so
  in the chapter pages of 57-63 and in the variants there.
- Lake's footnotes (`texts/src/1Cl.app.json`, 57 notes; 146 margin references): enter as variants those that change the
  meaning, with the witnesses exactly as Lake gives them. Some that matter: 1:1, 2:1, 38:2 (A has a hole in the vellum),
  43:6, and 44:2, where the word for what the apostles gave (ἐπινομή in A, ἐπιδομή in C, the Latin legem, and what S and K
  have) decides how the succession sentence reads: part 40-65 gives it a full variant entry and note, with Lake's judgment
  in his own words and the renderings each reading yields.
- English check text: Lake (`texts/en/1Cl.json` `lake`, by verse; the transcription lacked the number of 45:8, put back).

## Lenses (fixed)
- **H Historical-critical**: date (Lake's 75-110 and the case for the 90s, the "sudden and repeated misfortunes" of 1:1),
  the author and the Roman church, what happened at Corinth, the witnesses, the sources (Hebrews, 1 Corinthians, Jewish
  example lists, Stoic commonplaces).
- **N New Testament**: 1 Corinthians (47), Hebrews (17:1; 36), Romans and James on faith and works (30-33), Peter and Paul
  (5), the sayings of Jesus (13:2; 46:8), the Pastorals and Acts on overseers and elders (42-44), 1 Peter.
- **J Jewish Scripture and the Septuagint**: how the letter quotes and joins the Greek Old Testament (Isaiah 53 and Psalm 51
  whole; the Greek Isaiah 60:17 behind "overseers and deacons"), its use of Jewish examples and of Judith and Esther, the
  Temple service as a pattern (40-41), the Jewish prayer forms behind 59-61 (only from texts opened).
- **O Church order and the churches**: what 40-44 says about ministry, and how the churches read it: succession from the
  apostles, bishops and elders, who may remove a minister, the place of the Roman church (the Catholic, Orthodox, Anglican,
  Lutheran, Reformed, Baptist and free-church readings, each only from a source that addresses 1 Clement or the question).
- **G Greek and Roman world**: the political words (στάσις, ὁμόνοια, the speeches on concord), the army (37), the body
  fable (37-38), the cosmos in order (20), the phoenix (25), "Danaids and Dircae" (6:2), only from Greek and Latin texts or
  studies opened.
Use a lens only where it has something distinct to say.

## Key terms
brief-apfathers.md's list applies throughout: "overseer", "elder", "deacon", "office of overseer", "service / serve" for
λειτουργία, "high priest", "layperson", "bore his witness" in 5:4 and 5:7, "servant" for παῖς in 59:2-4, "Creator",
"Master", "the Almighty", ζῆλος "jealousy" and φθόνος "envy" (3:2; one each), στάσις "rebellion", ἔρις "fighting",
σχίσμα "split", ὁμόνοια "harmony", "the chosen", "double-minded" (11:2; 23:2-3). Also for this book: ἀγαπητοί "beloved"
(as the site's letters); τὰ λόγια "the oracles" / "the sayings" by context (19:1; 53:1; 62:3), αἱ ἱεραὶ γραφαί "the sacred
Scriptures" (45:2; 53:1); ἐπιείκεια "gentleness" and ταπεινοφροσύνη "humility" (as the site's Philippians 2:3 and 4:5:
check terms.json); ἀρχηγοί "leaders" (of the revolt, 14:1; 51:1); ἡ ποίμνη τοῦ Χριστοῦ "the flock of Christ" (44:3; 54:2;
57:2); μακάριος "blessed" ("the blessed Paul", 47:1). A part that meets a word the others will meet (for example ἀρετή,
εὐσέβεια "godliness" as the existing entry, σωτήριον "salvation") re-reads proposals/works/terms.json first and adds it if
absent; the lead aligns at the end.

## Quotations (the core of this letter)
About a quarter of 1 Clement quotes the Greek Old Testament, sometimes for whole chapters (16 is Isaiah 53:1-12 and Psalm
22:6-8; 18 is Psalm 51:1-17; 57:3-7 is Proverbs 1:23-33). Follow brief-apfathers.md (Scripture quoted inside these books)
exactly: the site's wording where the Greek agrees with it; the author's Greek, with a note, where the Septuagint or the
author differs from the Hebrew on which the site's Old Testament rests. For the long quotations, set the site's verse
beside Clement's Greek line by line in your scratch folder and decide line by line; every line you take from the site must
match it exactly. Lake's margin references use Septuagint Psalm numbers in places: convert them. Unknown "Scripture"
(23:3-4; 46:2; 17:6, and any other you cannot place) and the saying of 13:2 and 46:8: notes per brief-apfathers.md. The letter quotes Judith and
Esther by name only in 55: those are works the site has (Judith as a book outside the 66; Esther with its Greek additions):
quote their site wording where Clement's facts match.

## Parallels (check each in an open text; the site's wording is the model)
1 Corinthians 1:10-13, 3:3, 12:12-27, 13:4-7 (48-50 on love beside 1 Corinthians 13), 15:20-23, 35-38 (24); Hebrews 1:3-13
(36: the closest parallel to Hebrews in early Christian writing: give both directions of dependence and who holds them,
from sources opened), 11:31 and 37 (12; 17:1); Romans 1:29-32 (35:5-6), 3:28, 4 (32:4); James 2:21-25 (10; 12; 31); Titus
3:1 and 1 Peter 2:13-17 (the prayer for rulers); Acts 20:28-35 and 1 Timothy 3; Philippians 4:3 (Clement); Genesis 4, 12-22,
27, 37; Exodus 2, 32; Numbers 12, 16-17; Joshua 2 (Rahab; the site's Joshua 2 card on faith and works); 1 Samuel 18-19;
Job 1:1, 4-5, 14:4-5, 19:26; Psalms 22, 34, 51, 89:20, 139; Proverbs 1, 2, 3, 20:27; Isaiah 6:3, 13:22, 26:20, 29:13,
53, 60:17, 66:2; Ezekiel 33:11; Daniel 3, 6, 7:10; Wisdom of Solomon 12:12 (27:5) and Judith 8-13, Esther 4 (55), each as a
work outside the 66 where it is one. The site's notes cite 1 Clement in 75 files (1 Corinthians, Hebrews, Philippians,
Joshua, the Pastorals): read those before writing, keep the site consistent, and report claims the Greek does not support.

## Places that need full treatment
- Part 01-20: 1:1 (the delay, the "misfortunes", the Domitian question: Lake's caution in his words); 3-6 (jealousy and
  envy: the example list; 5:1-7, Peter and Paul: "the limit of the West" 5:7 and the Spain question, "seven times in chains",
  "under the rulers", what the chapter does and does not say about Rome as the place of their deaths, from sources opened;
  6:1-2 the "great multitude" and the women "Danaids and Dircae", the mythological punishments, with the proposed
  emendation and who proposed it only from a source opened); 7:5-7 (Noah and Jonah); 10-12 (Abraham, Lot, Rahab: faith and
  hospitality; Rahab's scarlet cord as a sign of the Lord's blood, 12:7); 16 (Isaiah 53 whole, the longest Old Testament
  quotation in the letter: line-by-line note on the Septuagint and the site's Hebrew-based wording); 18 (Psalm 51); 20 (the
  ordered cosmos: sea, seasons, "the worlds beyond the ocean" 20:8).
- Part 21-39: 21:6-8 (the household code); 23:3-4 (the unknown "Scripture"); 24-26 (resurrection: the phoenix, Arabia and
  Heliopolis, 25:1-5, its sources in Herodotus and others only from texts opened; whether Clement thought the bird real;
  later Christian use; topic `phoenix`, core by you); 32:4 and 33:1 ("not ... through ourselves ... but through faith";
  "shall we then be idle from doing good?"): a `deep` chapter page on how these verses are read in the faith-and-works
  debate, pointing to the Romans 3, James 2 and Joshua 2 cards; 34:6-7 (Isaiah 6:3 and the church's "Holy, holy, holy");
  36 (Hebrews 1, high priest of our offerings); 37-38 (army ranks and the body).
- Part 40-65: 40-41 (the Temple order, "the layperson"; "only in Jerusalem" 41:2 and what it implies about the Temple's
  date, only from sources opened); 42-44 (apostles, overseers and deacons, the Greek Isaiah 60:17 against the Hebrew,
  Aaron's rod, the succession sentence of 44:2 with its variant, 44:3-6 the deposed elders who "presented the gifts"): a
  `deep` chapter page for 42 and for 44, every church view sourced, and the scholars who see one office (overseers = elders)
  and those who see two; 45 (Daniel and the three); 47 (Paul's letter to Corinth: the earliest naming of 1 Corinthians
  outside the New Testament, if a source opened says so; Cephas and Apollos); 49-50 (love); 54 (the call to leave); 55 (kings
  who gave their lives, Christians who sold themselves into slavery to feed others, Judith and Esther); 57-63 (A is missing:
  say what rests on C and the versions); 59-61 (the prayer: its forms, its petitions for the rulers who persecuted
  Christians, "we bow our necks"; Jewish prayer patterns only from texts opened); 63:3 and 65:1 (the messengers: what the
  names Claudius and Valerius may say about the imperial household, only from a source opened).

## Who it was for, and why
`settings` for the greeting, each section of argument (the Roman church to "beloved" Corinthians), the quoted speeches
(God, Moses, David, Rahab, the spies, the Lord Jesus), and the prayer (59-61, the church to God). `readers` by evidence:
the Corinthian church after some of its members had removed elders (1:1 "a few persons"; 44:6; 47:6 "one or two persons"), the letter meant to be
read aloud there (the messengers, 63:3; 65:1); later public reading at Corinth (Dionysius of Corinth in Eusebius,
<i>Church History</i> 4.23.11) only from that text opened. The date as brief-apfathers.md says.

## Where Christians differ
No book card (brief-apfathers.md). Two chapter cards are possible, each only if the existing cards (brief-apfathers.md, Where
Christians differ) do not already ask it and each row has a source that addresses this very question:
- Part 40-65, chapter 44: **may a congregation remove its ordained ministers, and on what grounds?** (44:3-6; the elders
  deposed though "blameless"), top `elders`. Read the Acts 14 ("who should choose and set apart") and 2 Timothy 2 cards first;
  the succession question itself is on the Acts 1 and 2 Timothy 2 cards: point to them, never repeat them.
- Part 01-20 or 40-65 (part 40-65 writes it, if anyone does): **does Rome's letter show an authority of the Roman church over
  other churches?** (1:0; 59:1; 63:2), top `peter` or `church`. Read the Matthew 16 and Luke 22 cards (Peter and his
  successors) first. Write it only if the Catholic, Orthodox and Protestant rows each cite a source that discusses 1 Clement
  on this point; otherwise a `views` note at 59:1 or 63:2 gives the readings, pointing to Matthew 16.
Faith and works (32-33), the priesthood (40-41) and the bishops-and-elders question (42-44) have site cards: point to them.

## Topics
New cores (brief-apfathers.md, Topics): `envy` by part 01-20; `phoenix` by part 21-39; `apostolic-succession` by part
40-65; `apostolic-fathers` and `clement-of-rome` by the book-level writer. Main contributions: 01-20 to `envy`, `peter`,
`paul`, `martyrs`, `domitian`, `nero`, `repentance`, `noah`, `jonah`, `enoch`, `abraham`, `lot`, `rahab-of-jericho`,
`hospitality`, `pride` (humility), `servant-of-the-lord` (16), `creation` (20), `church` (harmony); 21-39 to `phoenix`,
`resurrection`, `household-codes`, `justification`, `faith`, `grace`, `job`, `jacob`, `creation`, `jesus` (high priest),
`priesthood`, `body-of-christ` or the site's topic on the church as a body (search), `agrapha` (13:2 is 01-20's; 46:8 is
40-65's); 40-65 to `apostolic-succession`, `elders`, `deacons`, `apostles`, `priesthood`, `temple`, `aaron`, `korah`,
`moses`, `daniel`, `shadrach-meshach-abednego`, `1-corinthians`, `corinth`, `love`, `judith`, `esther`, `slavery`, `prayer`,
`church-and-state` (61), `scripture-and-tradition`, `inspiration-of-scripture` (45:2; 53:1), `church`. Each part re-checks
every title and aka before writing.

## book.json (book-level writer)
Lead, facts, authorship (the letter's silence, the tradition of Clement, Lake's view of it, the Shepherd of Hermas passage Lake
cites (Vision 2.4), Titus Flavius Clemens and Domitilla as Lake weighs them; Irenaeus 3.3.3, Eusebius and Jerome on Clement only from
texts opened), audience, outline (the three movements of the parts), the five lenses, sections (the Roman church and the
Corinthian revolt; the date; Peter and Paul in chapter 5; the ministry of 40-44 and how the churches read it, side by side;
the prayer; Codex Alexandrinus, the versions and Clement of Alexandria; the letter's place in early lists), spec, prompts,
topics, sources, links, and the `canon` block for tier `early` (brief-apfathers.md: what Lake says, what must be verified,
including Apostolic Canon 85's exact words and the Strassburg Coptic manuscript). No traditions card. Source keys: reuse
`lake-apostolic-fathers`, `clement-1` (or `clement-1-letter`: use one, tell the lead the other is a duplicate),
`eusebius-history`, `irenaeus-heresies-3`, `jerome-illustrious`, `hermas-shepherd`, `clement-stromata`, `apostolic-canon-85`;
new ones in `content/books/1Cl/sources.json`.

## Atlas (lead decides; brief-apfathers.md)
Places the text names: Rome (1:0), Corinth (1:0; 47:6; 65:2), Egypt (4:10; 17:5; 25:3; 51:5; 53:2), Arabia and Heliopolis
(25:1, 3), Nineveh (7:7), Sodom (11:1), Jericho (12:2), and "the limit of the West" (5:7, no fixed place).

## When you finish
Each part writer: `VERBOSE=1 node tools/build.js --check 1Cl/<part>` at 0 errors and no warnings in your part; your line in
`content/books/1Cl/progress.md`; report counts, every departure from Lake, the slips found, every quotation where you chose
the site's wording or Clement's and why (a table), the readings you could not check, and terms added. Book-level writer:
`--check 1Cl` clean for book.json, the citation list and suggested back-links in `content/proposals/works/build.md`, your
line in progress.md, and a report.
