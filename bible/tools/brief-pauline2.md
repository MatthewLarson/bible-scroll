# Paul's letters, Philippians to Philemon: shared brief for Php Col 1Th 2Th 1Ti 2Ti Tit Phm

Read tools/brief-nt.md first (rules for every New Testament book), then tools/brief-pauline.md (its terms and lead
decisions bind these letters too), tools/brief-rom.md (Romans is the model for a Pauline letter: lenses, book.json,
deep dives and cards), then your book's own brief. Form models: content/books/Eph/ and content/books/Gal/ (the newest
Pauline letters), content/books/Hag/ (a one-part book in a flat folder). nt lane: write only in
`content/books/<id>/...`; shared additions in `content/proposals/nt/` (empty at the start of this round; other writers
of this round are adding to it at the same time, so read-modify-write and re-read).

**Layout.** Every one of these letters is ONE part in a flat folder, `content/books/<id>/` (book.json, plain.txt,
notes, variants, glosses, chapters, topics, sources.json, progress.md; review.md comes later from the reviewer). One
writer per book, who owns book.json.

**Lenses (fixed, same as Romans and the other Pauline letters): H History and setting, C Critical, L Literary, J Jewish
reading, T Church tradition.** Each book.json gives its own `desc`.

**Terms.** Read content/terms.json (the nt proposals were merged into it) and brief-pauline.md's decisions: "brothers"
for *adelphoi* (with the gloss and a note at first use in each book, as Ephesians and Romans do), "slave" for *doulos*,
"the saints", "Christ" and "the Messiah" as terms.json says, "the Lord" for *kyrios*, "grace", "faith", "flesh",
"church", "the good news", "overseer" for *episkopos* (terms.json entry), "elders" for *presbyteroi*. Lead decisions
for this round, so that the eight writers agree:
- *diakonos* as a church office (Phil 1:1; 1 Tim 3:8-13; Rom 16:1 is the model for the person "servant"): "deacons"
  where it names an office beside the overseers, with a gloss "servants, helpers" and a note; "servant" elsewhere.
- *parousia* "coming" (of Christ; a gloss at first use: "arrival, a royal visit"); *epiphaneia* "appearing" (the
  terms.json Maccabees entry is "appearance" for God's interventions; in the Pastorals and 2 Thess 2:8 use "appearing"
  with a gloss, and add the entry to proposals/nt/terms.json once: the 1Ti writer adds it, the others follow it).
- *eusebeia* "godliness" (1Ti adds the entry); *soter* "Savior"; *pistos ho logos* "This saying is trustworthy"
  (1Ti adds the entry; 2Ti and Tit follow it word for word); *hygiainousa didaskalia* "sound teaching" (gloss
  "healthy"); *mias gynaikos aner* "the husband of one wife" (literal, so every reading stays open; a note with the
  readings: no polygamy, no remarriage after divorce, no remarriage at all, faithful to his wife, married at all);
  1Ti and Tit both use it.
- *harpazo* (1 Thess 4:17) "caught up" with a gloss (the Latin *rapiemur* is where "rapture" comes from: verify);
  *apantesis* "to meet" with the note on the civic welcome of a visiting ruler (views).
- *ho anthropos tes anomias* (2 Thess 2:3) "the man of lawlessness" (variant "of sin"); *to katechon / ho katechon*
  "what is holding him back / the one holding him back".
- *theopneustos* (2 Tim 3:16) "God-breathed" with a gloss "inspired by God" (2Ti adds the entry).
- *morphe*, *harpagmos*, *ekenosen* (Phil 2:6-7): the Php writer decides and adds the entries.

**Parallels with books on the site (their Plain English Translation is the model; quote it exactly in notes).**
- Colossians and Ephesians: Ephesians comes first in the canon and its Plain English Translation exists. Where Colossians' Greek matches
  Ephesians' (Col 1:14 / Eph 1:7; Col 3:18-4:1 / Eph 5:22-6:9; Col 4:7-8 / Eph 6:21-22, nearly word for word;
  Col 3:16 / Eph 5:19; Col 1:20-22 / Eph 2:13-16; Col 2:19 / Eph 4:16), use Ephesians' wording, and differ exactly
  where the Greek differs.
- 1 Thess 4:15-17 and 1 Corinthians 15:51-52; 1 Thess 5:2 and Matthew 24:43, Luke 12:39, Revelation 3:3 and 16:15
  (the thief); 2 Thess 2 and Matthew 24, Mark 13, Daniel 7:25, 9:27, 11:36 (Plain English Translation exists); Phil 2:10-11 and Isaiah
  45:23 and Romans 14:11; Phil 3:5-6 and Romans 11:1, 2 Corinthians 11:22, Galatians 1:13-14, Acts 22:3 and 23:6; 1 Tim
  5:18 quotes Deuteronomy 25:4 (as 1 Corinthians 9:9) and Luke 10:7 (call it "Scripture": a note); 1 Tim 2:13-14 and
  Genesis 2-3; 2 Tim 3:8 Jannes and Jambres (Exodus 7; works.json: check); Acts 16 (Philippi), 17 (Thessalonica), 19-20
  (Ephesus, Timothy), 28 (Rome): Acts' Plain English Translation is the model for names and events.
- Pairs written in this round at the same time (no Plain English Translation to copy yet: translate from your Greek and list the pair in
  your report; the lead aligns them): 1 Thess 1:1 / 2 Thess 1:1-2; 1 Thess 5:28 / 2 Thess 3:18; 1 Tim 3:1-13 / Titus
  1:5-9; Col 4:9-17 / Philemon 1-2, 10, 23-24 (Onesimus, Archippus, Epaphras, Mark, Aristarchus, Demas, Luke); Col
  4:10-14 / 2 Tim 4:10-11 (Demas, Luke, Mark); the "trustworthy saying" lines.

**Names.** Use the spellings Acts and the published letters use (Timothy, Silas in Acts but Silvanus in the letters:
"Silvanus" with a note that he is Acts' Silas; Epaphroditus, Euodia, Syntyche, Clement, Epaphras, Onesimus, Archippus,
Apphia, Tychicus, Demas, Aristarchus, Hymenaeus, Alexander, Phygelus, Hermogenes, Onesiphorus, Crescens, Carpus, Erastus,
Trophimus, Eubulus, Pudens, Linus, Claudia, Artemas, Zenas, Apollos). Grep Acts and Romans' Plain English Translation before spelling one.

**Authorship (C lens, full weight, never flattened).** Undisputed for most scholars: Philippians, 1 Thessalonians,
Philemon. Disputed: Colossians, 2 Thessalonians. Widely held by critical scholars to be later (pseudonymous): 1 and 2
Timothy, Titus (the Pastorals), with a real minority defending Paul or a secretary (*amanuensis*) or fragments (the
"fragment hypothesis" for 2 Timothy). State each view with its best arguments and its named scholars, say which is the
majority in critical scholarship and which is the traditional view, and do not rank the churches. If authorship is
disputed, book.json says "traditionally Paul" and labels the question; the Plain English Translation follows the text as written ("Paul").
Ancient pseudonymity and the ethics of it: views, fairly. Never cite a scholar's view from memory: check it this session
or name only what you opened (STYLE.md rule 2).

**Where Christians differ.** These letters hold many dividing places (listed in each brief). Reuse existing `top` ids
(grep `"top"` in content/books/*/chapters.json and parts): women-in-ministry, elders, deacons, baptism, rapture,
antichrist, millennium, second-coming, tribulation, intermediate-state, purgatory, communion-of-saints,
scripture-and-tradition, slavery, household-codes, headship, sabbath, food-laws, celibacy, marriage, justification,
perseverance, election, free-will, trinity, son-of-god, wealth, work. Sourced to the churches' own documents and
teachers, checked this session. Never rank.

**Audience.** Each letter has a named audience and occasion, and these matter more here than anywhere: a Roman colony
of veterans (Philippi), a church Paul never visited (Colossae), new Gentile converts under pressure (Thessalonica), two
coworkers left to lead churches (Timothy in Ephesus, Titus on Crete), and one slave owner and his household (Philemon).
Settings for every section: who, what problem, what the first readers would have heard. Where a rule is local (the
Cretan elders, Ephesian widows, women in 1 Tim 2), say so and give the views of how far it reaches.

**Hostile-review priorities** (for later): invented sources or quotations, drift toward the NIV/ESV, papyrus and codex
claims without a source, flattening the authorship questions, unfair summaries of any tradition, the women's
passages and slavery handled one-sidedly, quotes of other books' Plain English Translation not matching.

## Lead decisions (2026-10-29)
- **Versification:** KJV numbering wins even where the critical text orders verses differently. Philippians 1:16-17: 1:16 is the "selfish ambition" sentence, 1:17 the "love" sentence (as texts/en, texts/orig and texts/xref key them); the critical order is given in the variant and a note. The build requires verses in order.
- **1 Thess 3:13** "with all his holy ones" (not "the saints"), matching Zechariah 14:5 and Jude 1:14 and leaving angels possible.
- **Greetings in parallel:** 1 Thess 1:1 "From Paul, Silvanus and Timothy, to the church of the Thessalonians in God the Father and the Lord Jesus Christ. Grace to you and peace." (2 Thess 1:1-2 has "our Father", as its Greek does).
- **olethros** "ruin" across Paul (1 Cor 5:5; 1 Thess 5:3; 2 Thess 1:9; 1 Tim 6:9 "ruin and destruction"); **apoleia** "the son of ruin" at 2 Thess 2:3 (= John 17:12).
- **ataktos** "out of line" (1 Thess 5:14; 2 Thess 3:6, 7, 11).
- **Overseer lists** (1 Tim 3 / Titus 1): me paroinon "not a heavy drinker"; philoxenos "welcoming to strangers" / "welcome strangers"; me plekten "not a man who hits people"; sophron "sensible"; "the husband of one wife". Different Greek stays different (anepilemptos / anenkletos).
- **2 Tim 1:6** "through the laying on of my hands" (dia) against 1 Tim 4:14 "with" (meta); **2 Tim 3:17** and **1 Tim 6:11** "the man of God".
- **Cards not duplicated:** Colossians 3:18-4:1 and Titus 2 point to the Ephesians 5-6 headship and slavery cards and Philemon's slavery card rather than repeat them.
- **Topic ids:** `mark` is the Mark of the Beast; John Mark is `gospel-of-mark`. New this round: `silas`, `timothy`, `onesimus`, `pastoral-letters`, `kenosis`, `joy`, `house-churches`, `inspiration-of-scripture`.
- **Traditions cards** state what a church teaches from its own documents or recognized teachers, not one father's opinion, and never end with the writer's verdict; where no sourced divergence exists, a deep dive instead.
