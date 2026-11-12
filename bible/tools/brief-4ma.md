# 4 Maccabees: shared brief for the part writers

Book id `4Ma` (works.json `4-maccabees`, tier orth). 484 verses in 18 chapters (Swete). Not a history but a speech
(λόγος, 1:1) in polished Greek: a "most philosophical" argument that godly reason is master of the passions, proved
first from the law of Moses and the lives of Joseph, Moses, Jacob and David (1-3), then at length from the martyrs of
2 Maccabees 6-7: the old priest Eleazar, the seven brothers and their mother, tortured under Antiochus IV. It is
the first full Jewish praise of martyrs, and the place where Jewish writing first says plainly that the martyrs'
blood was a cleansing and "a life in exchange" for the nation (6:28-29; 17:20-22), which makes it central for the
background of the New Testament's language about Jesus' death and for the Christian cult of martyrs.

Parts (all three write at the same time and cannot see each other):
- 01-06 (179 vv): the thesis and the definitions (1:1-30: reason, wisdom, the four virtues, the passions), reason
  and the law (1:31-3:18: food laws, Joseph, the tenth commandment, Jacob on Simeon and Levi, David's thirst),
  the history (3:19-4:26: Simon and Onias, Apollonius at the temple, Jason, Antiochus' decree), Eleazar (5:1-6:30:
  Antiochus' speech, Eleazar's answer, the torture, the prayer 6:27-29), the first conclusion (6:31-35).
- 07-12 (153 vv): praise of Eleazar (7:1-23), the seven brothers: the king's offer and the speech they did not make
  (8), the deaths of the first to sixth (9-11), the youngest and his leap into the fire (12).
- 13-18 (152 vv): the brothers' courage and love (13:1-14:10), the mother: love of children, her choice, the
  Abraham comparison (14:11-16:25), her death and the epitaph (17:1-10), the contest and its meaning (17:11-18:5:
  includes 17:20-22), the mother's speech to her sons (18:6-19), the close (18:20-24).
- book.json and `content/books/4Ma/sources.json`: a separate book-level writer, as for 3 Maccabees.

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section, with every "Lessons
  from" paragraph). `tools/literal.js` does not work outside the 66: build every verse from the Greek in
  `texts/orig/4Ma.json` by the hand-built literal line of agent-writer-works.md, kept in `.scratch/4ma-<part>/`,
  then Plain English Translation, then the drift audit in your head against NRSV, RSV, NETS, the Lexham Septuagint,
  Anderson in Charlesworth's Pseudepigrapha, Hadas (1953) and deSilva (never write their text out). R. B. Townshend's
  translation in Charles's <i>Apocrypha and Pseudepigrapha</i> II (1913) is public domain and may be cited if you open it.
- Base text: Swete III (1912), which prints Codex Alexandrinus (A). Vaticanus has no Maccabees, but Sinaiticus (ℵ)
  and Venetus (V) have 4 Maccabees (Swete's title note: "Μακκαβαιων δ΄ ℵAV"). Swete's footnotes are in
  `texts/src/4Ma.app.json` (34 pages; each note's `at` is the verse where its page ends; read the sigla exactly:
  "]" marks a replacement, "pr" a word put before, "om" an omission, ℵc.a/Aᵃ later hands). Where Swete corrects A,
  call it "Swete's text". After drafting, diff every verse against the Greek by script and give each departure a variant.
- English check text: Brenton (1851) in `texts/en/4Ma.json` (`brenton`; there is no KJV, Vulgate or Douay for this
  book). **Brenton's numbers differ from Swete's in chapters 7, 8, 10 and 11** (the site uses Swete's numbers):
  Brenton 7:25 = Swete 8:1; Brenton 8:1-26 = Swete 8:2-27; Brenton 8:27 = Swete 8:28-29; Brenton has no 10:4
  and no 11:7-8 (his Greek lacks them: his file skips those numbers, the rest of 10 and 11 numbers alike). Everywhere
  else the numbers match. Say in a variant entry what each witness has at 10:4 and 11:7-8 only if you read it in
  Swete's apparatus or another edition opened in this session.
- **Numbering table (lead decision):** a `tools/4ma-numbers.tsv` is needed so the site shows Brenton beside the right
  Greek verse, but it is not trivial: tools/works-texts.py applies these tables only to the KJV (`en_order`) and its
  `kjv_in_greek_order` cannot take a Swete verse with no English verse. It is a lead tooling job before publishing (the
  mapping above is the whole table). Writers do not build it; use the mapping above when you read Brenton.
- Swete vs First1KGreek: 182 unjudged word differences for 4Ma are in
  `c:\bible-scroll\.scratch\works-texts\swete-vs-f1k-new-books.txt` (lines 2-183; most are OCR errors on the First1K
  side). Judge the ones in your chapters. A real typo in the digital Swete (checked against the apparatus lemma or the
  page) goes in `.scratch/4ma-<part>/swete-fixes.json` in the form of tools/swete-fixes.json (`{"4Ma": {"c:v":
  [[typo, Swete's form, evidence]]}}`), never as a variant and never in tools/swete-fixes.json itself (three writers
  at once would clash): the lead merges them and reruns tools/works-texts.py. Also note the verse-division
  differences the file lists (1:16-17, 6:35, 7:17, 15:2) only if they change the meaning.
- The Greek is ornate Atticizing rhetoric with long periods and rare words (many found only here). The Plain English
  Translation stays at 8th-grade level: break periods into sentences, keep every clause's content, note a rare word
  where the meaning is unsure, and keep the speech's voice (it addresses its hearers as "you").
- The torture scenes are graphic. This is a tier-2 book, not the world group: there is no `sensitive.json`; translate
  them plainly and fully, without adding to them.
- Lenses (fixed): O Orthodox, H Historical-critical, J Jewish reception, N New Testament background (the martyrs'
  atoning death, endurance and the athletic contest, Hebrews 11-12, Paul's ἱλαστήριον), G Greek philosophy (Stoic,
  Platonic and Aristotelian ideas of reason, passions and virtue, and how far the book bends them to the law),
  W Western churches (Catholic and Protestant: not Scripture). Views only where a lens has something distinct to say.

## Terms (one rendering across all parts; check content/terms.json and content/proposals/*/terms.json first)
Part 01-06 enters these in content/proposals/works/terms.json as "4 Maccabees" entries (re-read the file just before
writing; the others add only words not listed here, also re-reading first, and report them):
- ὁ εὐσεβὴς λογισμός "godly reason" (the thesis phrase, 1:1, 1:7, 13:1, 18:2 and often; note at 1:1 that English
  versions say "devout" or "pious reason"); λογισμός alone "reason" (the ruling mind; content/terms.json's Wisdom
  entry has "reasoning", so the note gives why: in 4 Maccabees it is the faculty, defined at 1:15).
- εὐσέβεια / εὐσεβής / εὐσεβέω "godliness / godly / be godly", as 3 Maccabees and Sirach; ἀσέβεια "ungodliness".
- πάθος, τὰ πάθη "the passions" (note at 1:1 and 1:20-27: emotions and drives, the philosophers' word, pleasure and
  pain at their root), as Galatians 5:24's "passions"; ἐπιθυμία / ἐπιθυμέω "craving / crave", so that 2:6 matches
  Exodus 20:17 and Romans 7:7 ("You must not crave").
- The four virtues (1:2-4, 1:18): φρόνησις "good sense" (as Sirach), δικαιοσύνη "justice" (the virtue, with the note
  terms.json asks for), ἀνδρεία "courage", σωφροσύνη / σώφρων "self-restraint / self-restrained"; ἐγκράτεια
  "self-control" (5:34; as Galatians 5:23), kept apart from σωφροσύνη; σοφία "wisdom"; ἐπιστήμη "understanding" (as Baruch).
- αὐτοδέσποτος "master in its own right", αὐτοκράτωρ "sovereign (over)", δεσπότης "master", κρατέω / ἐπικρατέω
  "rule / overcome": one each, note at 1:1 and 1:7.
- ὑπομονή / ὑπομένω "endurance / endure" (as Romans); καρτερία / καρτερέω "steadfastness / hold out".
- ὁ τύραννος "the tyrant" (as the terms.json Wisdom entry says for cruel rulers); Ἀντίοχος "Antiochus".
- βάσανοι / βασανιστήρια / βασανίζω "tortures / instruments of torture / torture"; τροχός "the wheel"; καταπέλτης
  "the catapult" (a torture frame, 8:13 and after; note at first use); 2 Maccabees 6:19's τύμπανον "torture frame" does not occur here.
- μιαροφαγέω / μιαροφαγία (Swete often spells μιεροφαγ-) "eat defiling food / the eating of defiling food"; ὕεια
  κρέα "pork" (2 Maccabees 6:18 has "pig's meat", 7:1 "pork"; one rendering here, with the 2 Maccabees wording in
  quotations of it).
- οἱ πάτριοι νόμοι "the laws of our fathers" and ἡ πάτριος φωνή "their fathers' tongue", as 2 Maccabees.
- The atonement words (6:28-29; 17:20-22), the same in parts 01-06 and 13-18: ἵλεως γενοῦ "be merciful";
  καθάρσιον "cleansing" ("make my blood their cleansing"); ἀντίψυχον "a life in exchange" (6:29 "take my life in
  exchange for theirs"; 17:22 "a life in exchange for the nation's sin"); ἱλαστήριος (17:22) "atoning" ("their
  atoning death"), with a note on content/terms.json's Romans 3:25 entry ("the place of atonement") and the
  Sinaiticus reading below. Never "propitiation" or "expiation" in the Plain English Translation; the notes give both.
- ἡ θεία πρόνοια "divine providence" (πρόνοια "providence", as Wisdom); ἡ δίκη / ἡ θεία δίκη "Justice / divine
  Justice" where it is personified (4:21; 8:14, 22; 9:9; 18:22 and elsewhere), with a note.
- ψυχή "soul"; ἀθανασία / ἀθάνατος "immortality / immortal", ἀφθαρσία "incorruption" (17:12), kept apart as in Wisdom.
- ἀθλητής / ἀγών / ἀθλοφόρος "athlete / contest / prize-winner" (17:11-16; the mother is called ἀθλοφόρε 15:29 and ἡ ἀθλοφόρος μήτηρ 18:23).
- Ἑβραῖοι "the Hebrews" (the book's name for the people); Ἀβραμιαῖοι παῖδες "Abraham's children".
- φιλοσοφία "philosophy" (5:22 "our philosophy", the law as the true philosophy: note).

## The Sinaiticus and Venetus readings that matter most (from Swete's apparatus; verify each in the file)
6:28 ℵ ὑπὲρ αὐτῶν "for them" for περὶ αὐτῶν (substitution language); 17:21 V adds "be put to shame" before "be punished";
17:22 ℵ τοῦ ἱλαστηρίου τοῦ θανάτου ("the atonement of their death", noun) for Swete's τοῦ ἱλαστηρίου θανάτου
("their atoning death", adjective): the key variant for Romans 3:25; 17:5 A εἰς ἀστέρας vs ℵV ἰσαστέρους;
18:6 ℵ τὰ δικαιώματα for ἡ δικαία; 18:23 ἀθανάτους is a correction in A and ℵ (ℵ* and possibly A* ἀθλοφόρους), which
matters for the book's teaching on immortal souls. Each gets a variant entry with the witnesses exactly as Swete gives them.

## Parallels and echoes (candidate links: check each in an open text before you assert it)
- 2 Maccabees 3-7 (the site's Plain English Translation, `content/books/2Ma/parts/01-03` and `04-07`) is the model for
  shared wording: 4:1-14 (Apollonius) beside 2 Maccabees 3 (Heliodorus); 4:15-26 beside 2 Maccabees 4-6; 5-7 beside
  2 Maccabees 6:18-31 (Eleazar: a scribe there, a priest here 5:4); 8-18 beside 2 Maccabees 7 (the mother's death at
  17:1 vs 2 Maccabees 7:41). Where the Greek nearly repeats 2 Maccabees' Greek (e.g. 9:1 and 2 Maccabees 7:2, with
  "commandments" for "laws"), keep its English except where the Greek differs; where 4 Maccabees changes the story, a note saying what changed. Read the 2 Maccabees 04-07
  notes and chapter pages first: they already point to 4 Maccabees 1:1, 5:4, 5:1-7:23, 8:1-18:24, 17:21-22, 18:18-19.
- The Bible stories it uses: Joseph (2:2-3), the tenth commandment (2:5-6), Jacob on Simeon and Levi (2:19-20;
  Genesis 49:7), David's thirst (3:6-18; 2 Samuel 23:13-17), Isaac's binding (13:12; 16:20; 18:11), Daniel and the
  three in the furnace (13:9; 16:3, 21; 18:12-13), Abel, Cain, Joseph, Phinehas (18:11-12); the mother's quotations
  in 18:14-19 (Isaiah 43:2, Psalm 34:19, Proverbs 3:18, Ezekiel 37:3, Deuteronomy 32:39 and 30:20): the site's Plain
  English Translation where the Greek fits, otherwise a note that the Greek differs. Check every quotation by hand.
- New Testament: Romans 3:25 (ἱλαστήριον), Mark 10:45 (a ransom in place of many), Hebrews 11:35-38 and 12:1-2
  (torture, endurance, the race), Matthew 10:28 (13:14-15), Luke 20:38 (7:19; 16:25 "they live to God"), Galatians
  5:23-24, Romans 7:7. Say how strong each link is and who disputes it; no claim that a New Testament writer read 4
  Maccabees unless a named scholar argues it and you opened that argument.
- Church fathers who preached on the Maccabean martyrs (Gregory of Nazianzus, Oration 15; John Chrysostom's homilies;
  Augustine's sermons 300-301; Ambrose) and the ancient attribution to Josephus (Eusebius, Church History 3.10.6;
  Jerome): existing keys include `gregory-nazianzen-or15`, `chrysostom-maccabees`, `augustine-sermon300`,
  `eusebius-history`, `oca-maccabees-aug1`, `desilva-4macc`, `osb-2008`, `apostolic-canons-npnf`, `brenton-1851`,
  `swete-lxx`, `nets-lxx`, `lsj-perseus`, `plato-phaedo`, `sep-stoicism`. Reuse keys; new ones go in your part's sources.json.
- Philosophy: the four virtues (compare Wisdom of Solomon 8:7 on the site), Stoic "right reason" and the Stoic aim of
  uprooting passions vs the book's ruling them (3:2-5, against uprooting): only from a source opened.
- Where the book matches, goes beyond or conflicts with the 66 books, a `canon` note.

## Places that need full treatment
- 1:1-30 (the thesis, its terms and the philosophers behind them; the speech's own outline 1:7-12).
- 1:31-2:23 (reason and the law: food laws, the tenth commandment, the claim that God gave the mind and the law
  together, 2:21-23; this is where the book is furthest from Romans 7: a `canon` note, fairly).
- 4:1-26 (the history: compare 2 Maccabees 3-6 point by point; Simon, Onias and Jason; Apollonius as governor of
  "Syria, Phoenicia and Cilicia", 4:2, which some scholars use to date the book: only from a source opened).
- 5:1-38 (Antiochus' speech that the law is against nature and Eleazar's answer that the law is reason's own
  philosophy, 5:22-26).
- 6:27-29 and 17:20-22 (the martyrs' death as cleansing, a life in exchange, atoning): deep sections in both parts
  saying the same core facts (the two writers cannot see each other, so each writes its own and the lead aligns
  them); the Jewish background (Isaiah 53, 2 Maccabees 7:37-38), the Christian readings, the scholars who think
  these verses shaped the New Testament's language and those who doubt it; the Sinaiticus reading at 17:22.
- 12:20 and 17:1 (the youngest leaps into the fire; the mother throws herself into it so that no one would touch her):
  how Jewish and Christian readers judged a martyr's chosen death (topic suicide), from sources opened.
- 14:11-16:25 (the mother: love of children, the Abraham comparison, the "mother of the nation" 15:29): names given
  her later (Jewish, Syriac and Orthodox tradition) only from sources opened.
- 17:7-10 (the epitaph the speaker imagines on their tomb) and 17:11-18:5 (the contest, the crowd, Antiochus'
  defeat), the afterlife: immortal souls (14:5-6; 16:13; 18:23) and no bodily resurrection, against 2 Maccabees 7:9-14,
  with the variant at 18:23.
- 18:6-19 (the mother's second speech: its odd place after 18:5, its quotations, and the scholars who judge it a
  later addition and those who defend it; all three codices have it): chapter page `deep`, and a variant entry only
  for real witness differences.

## Traditions cards ("Where Christians differ") — only where churches really disagree
- Book card (book-level writer): **Is 4 Maccabees Scripture?** (top `canon`). Rows only with sources that address the
  question: Greek Orthodox (Greek Bibles print it in an appendix: check the edition and the NRSV preface the 3
  Maccabees book page cites), Russian and other Slavonic churches, Georgian, Syriac and other Oriental Orthodox,
  Ethiopian, Catholic (not in the Vulgate or Trent's list), Anglican and Protestant. Apostolic Canon 85 counts three
  books of Maccabees: check its exact text and which manuscripts count four before saying anything about it.
- Do NOT repeat these: whether the sufferings of the faithful can atone for others (the 2 Maccabees 7:37-38 card,
  top martyrs: 6:28-29 and 17:20-22 point to it in their notes and chapter pages); whether the soul is immortal by
  nature (Wisdom of Solomon 3 card, top soul); whether the human will is free (Romans 9-11 card, top free-will);
  whether a Christian can reach perfection (Matthew 5 card); whether to venerate holy people or pray to saints
  (Acts 10, Jeremiah and Revelation 5 cards).
- One chapter card is possible, for part 01-06 only: can reason trained by God's law master the passions, or does
  it take grace (1:1-3:18; Romans 7-8 beside it)? Write it only if you find each church's answer to THIS question
  in a source opened (e.g. Trent on keeping the commandments, the Lutheran confessions on the law, Orthodox teaching
  on dispassion, Wesley on Christian perfection), and point to the free-will and perfection cards. Otherwise leave it
  out and say so in your report. Parts 07-12 and 13-18 have no planned card.

## Who it was for, and why
- `settings` for every speech: the speaker's address to "you" (1:1-12 and the book as a whole), Antiochus to
  Eleazar (5:5-13), Eleazar (5:16-38; 6:17-23; 6:27-29), the king to the seven (8:5-11), the speech they did not
  make (8:16-26), each brother's words (9-12), the mother's inner debate (15-16) and speeches (16:16-23; 18:6-19),
  the epitaph (17:9-10), the appeal to Israel (18:1-2).
- `readers`: Greek-speaking Jews of the Diaspora, by evidence: the proposed places (Antioch, where Christians later
  honored a shrine of the martyrs, or Alexandria), the dates proposed (first century AD before or after 70, to the
  early second century) and the arguments for each, with who proposes them; whether it was delivered at a
  commemoration ("at this season", 1:10). Never one stock line.

## Topics
Contribute to: martyrs, maccabean-revolt, hellenism, stoicism, soul, intermediate-state, resurrection (its absence),
atonement, servant-of-the-lord (Isaiah 53 as background), food-laws, clean-and-unclean, law-of-moses, akedah,
abraham, isaac, shadrach-meshach-abednego, daniel, providence, suffering, suicide (12:20; 17:1), death, onias (4:1-14),
temple, free-will, love (the family love of 13-15), blood, communion-of-saints (the later cult only). Check titles and
aka in content/topics/ and content/proposals/*/topics/ first. New cores (only if no existing topic fits), each by ONE
writer so ids never clash: `maccabean-martyrs` (People: Eleazar, the seven brothers and their mother) by the book-level
writer; a self-control / passions core and, if it stands apart, a four-virtues core by part 01-06. Other parts that want
these topics write their topics.json sections under the same ids.

## book.json (book-level writer only)
Lead, facts, authorship (the attribution to Josephus and why scholars reject it; what can be known of the author),
audience, outline, the six lenses, sections (title and the name "Maccabees"; a speech, not a history; the philosophy;
its retelling of 2 Maccabees; the martyrs' death and the New Testament; the cult of the Maccabean martyrs, 1 August;
its place in Greek Bibles and others), spec, prompts, topics, sources, links. The book card above. `canon` block per
agent-writer-works.md (tier orth: `rejected_why` in the strongest form; `cited_in` with honest strength: Hebrews
11:35-38 most likely recalls the martyrs as 2 Maccabees tells them, so say whose argument links it to 4 Maccabees;
Romans 3:25 is a debated background, not a citation). The reliability analysis separates witness to first-century
Jewish thought, the text (A, ℵ, V; the late attribution), the history (its departures from 2 Maccabees) and agreement
with the 66, point by point. Quote the 2 Maccabees and 3 Maccabees book pages' wording where the same facts are given.

## When you finish
`VERBOSE=1 node tools/build.js --check 4Ma/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/4Ma/progress.md. Report counts, decisions, every departure from Swete, the Swete typos you found, any
term added, anything uncertain, and the notes in other books that quote 4 Maccabees (1 Maccabees 01-04 notes quote
16:20-21 and 18:11-19; 2 Maccabees 04-07 cites it) for the lead's quote sync.
