# Romans: brief for the part writers

Book id `Rom`. Read tools/brief-nt.md first; it holds the rules for every New Testament book. Romans is a letter, so
also read content/books/Jud/ (a finished letter) and content/books/Act/ (the newest NT form of `settings`, `traditions`
and variants). Four parts, all written at the same time (no part can see another's notes; refer to a verse instead of
repeating a point). 433 verses in all:

| Part | Chapters | Verses | Contents |
|---|---|---|---|
| 01-04 | 1–4 | 117 | Greeting, thanksgiving and travel plans, the thesis (1:16–17), God's anger and the nations (1:18–32), the judge who judges (2), Jew and Gentile, the Jew's advantage, "all have sinned" (3:1–20), God's righteousness and 3:21–31, Abraham (4). **Owns book.json.** |
| 05-08 | 5–8 | 108 | Peace and Adam (5), baptism and slavery to sin (6), the law and the "I" (7), life in the Spirit, adoption, groaning creation, "nothing can separate us" (8) |
| 09-11 | 9–11 | 90 | Israel: the promises, election, Pharaoh, the potter, the stumbling stone, "Christ is the end of the law", the remnant, the olive tree, "all Israel will be saved", the doxology (11:33–36) |
| 12-16 | 12–16 | 118 | The living sacrifice, the body, love, governing authorities (13:1–7), the weak and the strong (14:1–15:13), Paul's plans (Jerusalem, Spain), Phoebe, the greetings of chapter 16, the closing doxology |

## Lenses (fixed; every part uses the same five keys as the Gospels and Acts)

- H **History and setting**: Rome in the 50s (the house churches, Jews and Gentiles, Claudius' expulsion of Jews about
  AD 49 per Suetonius, *Claudius* 25.4 and Acts 18:2, their return after 54), Paul writing from Corinth (Cenchreae
  16:1; Gaius 16:23; Acts 20:2–3) in the winter of about 56–57 (dates differ by a year or two), the collection for
  Jerusalem (15:25–31), the planned mission to Spain, Roman law and government (13:1–7, taxes under Nero: Tacitus,
  *Annals* 13.50–51), slavery, patronage, Roman adoption and inheritance (8:15–17), the names of chapter 16 in
  inscriptions and the columbaria of Rome.
- C **Critical**: authorship (undisputed; Tertius the scribe, 16:22), the purpose of the letter (the "Romans debate":
  Donfried, Wedderburn, Jewett, Dunn, Moo: a summary of the gospel, support for Spain, unity of weak and strong, a
  defense before the Jerusalem visit; views, fair), chapter 16 (sent to Rome, or an Ephesus copy: views), the doxology
  16:25–27 (position and authenticity; Marcion), interpolation theories (2:16; 13:1–7, O'Neill; 16:17–20; 5:12–14),
  the diatribe style (Stowers), the textual history (P46, Sinaiticus, Vaticanus, Claromontanus, Boernerianus).
- L **Literary**: the letter's design (salutation 1:1–7; thesis 1:16–17; the four movements; the chain of argument; the
  "Adam–Christ" contrast; the diatribe and its questions "What then shall we say?", "By no means!"), Habakkuk 2:4 as the
  motto, Paul's use of Scripture (the catena in 3:10–18; Abraham in 4; Israel in 9–11), inclusio of "obedience of faith"
  at 1:5 and 16:26.
- J **Jewish reading**: Paul as a Jew (Stendahl's "Paul among Jews and Gentiles", the New Perspective: Sanders, Dunn,
  Wright; the "Paul within Judaism" readings: Nanos, Gager, Fredriksen, Campbell, Boyarin, Levine's Jewish Annotated New
  Testament notes), "works of the law", the Jewish advantage (3:1–2; 9:4–5), who the interlocutor of 2:17–29 is,
  Israel in 9–11 (and its misuse for supersession, and the post-Holocaust rereadings, including *Nostra Aetate* 4).
- T **Church tradition**: Origen's commentary (in Rufinus' Latin), Chrysostom's homilies, Augustine against Pelagius
  (the letter that shaped Western doctrine of sin and grace), Pelagius' own commentary, Aquinas, Luther's preface
  (1522), Melanchthon, Calvin's commentary (1540), Wesley, Barth's *Römerbrief*, Orthodox readings (Cyril of Alexandria,
  Theophylact, theosis), Catholic teaching (Council of Trent, session 6; *Joint Declaration on the Doctrine of
  Justification*, 1999).

## book.json (01-04 writer)

Lead, facts, authorship and the scribe Tertius, date and place (views with reasons), the church in Rome and `audience`
(who they were: Jewish and Gentile Christians, five or more house churches, Aquila and Priscilla back in Rome 16:3–5, the
edict of Claudius, what Paul knew of them and had not seen: 1:10–13; 15:22–24; the tension between the strong and the weak),
why he wrote (views), outline, the argument in one table (sin: 1:18–3:20; righteousness: 3:21–4:25; life: 5–8; Israel:
9–11; living: 12:1–15:13; plans and greetings: 15:14–16:27), Paul's use of the Old Testament (a table of the quotations
with the Hebrew and the Septuagint where they differ), the textual history and the position of the doxology (16:25–27
after 14:23 in many manuscripts; after 15:33 in P46; the omission of chapters 15–16 or of "in Rome" at 1:7, 15: views), the
Romans debate, reception history (Augustine's conversion in the garden, Tolle lege, Confessions 8.12; Luther's tower
experience; Wesley at Aldersgate, 1738 reading Luther's preface; Barth), image prompts, and book-wide `traditions`
(how the churches have read Romans as a whole: Catholic, Orthodox, Lutheran, Reformed, Wesleyan, the New Perspective
as a scholarly reading and not a church; coordinate with the justification card at 3:21–5:1 by pointing, not repeating).

## Topics and ids (check before creating)

Already exist (contribute; do not recreate): paul, justification, grace, faith, election, free-will, perseverance,
church-israel, remnant, church-and-state, wrath, hardening-of-heart, law-of-moses, food-laws, sabbath, circumcision,
abraham, adam-and-eve, the-fall, image-of-god, baptism, holy-spirit, resurrection, suffering, new-creation, theosis,
same-sex-relations, women-in-ministry, deacons, elders, idolatry, foreigners, rome, corinth, priscilla-and-aquila,
spiritual-gifts, sacrifice, blood, mercy, covenant, slavery, wealth, love-your-neighbor, trinity, son-of-god, jerusalem.
Search content/topics/ and every content/proposals/*/topics/ (titles and `aka`) before using or creating any other.

New cores, one owner each (create in content/proposals/nt/topics/ in one write after checking every proposals folder;
the other parts contribute through their topics.json):
- 01-04: `romans` (the book: "The Letter to the Romans", aka "Romans"), `atonement` (3:25; aka "propitiation",
  "expiation", "the cross: how it saves", "ransom"; check `day-of-atonement` and `sacrifice` so the aliases do not
  collide), `natural-revelation` (1:19–20; 2:14–15; aka "natural theology", "general revelation"), `sin` (the word and
  idea across the Bible; only if no topic covers it; check `the-fall`), `salvation` (aka "saved") only if none fits.
- 05-08: `original-sin` (5:12–21; aka "inherited sin", "ancestral sin"; the Eastern "ancestral" view and the Western
  "original guilt" view; check `the-fall` first and contribute there if it already covers it), `adoption` (8:15, 23; 9:4;
  aka "adoption as children", "huiothesia").
- 09-11: none new; contribute to `election`, `church-israel`, `remnant`, `hardening-of-heart`.
- 12-16: `conscience` (aka "the conscience"; also 2:15 and 9:1, which 01-04 and 09-11 contribute to), `junia` only if a
  person-topic is warranted (otherwise a note and the women-in-ministry card), `phoebe` likewise.

## Parallels and quotations

- **Galatians, 1 and 2 Corinthians, Philippians** are not written yet in this project. Cite them by reference
  (Galatians 3:6–14 with Romans 4; 1 Corinthians 12 with Romans 12:3–8; 1 Corinthians 8–10 with Romans 14) and do not quote
  a Plain that does not exist. List the pairs in your report so the lead aligns them when those letters are written.
- **Acts** is written. Where a note quotes Acts (18:2 the edict; 20:2–3 the winter in Greece; 21:17–26 the visit to
  Jerusalem; 28:14–31 Paul reaches Rome), use its Plain exactly.
- **Old Testament quotations**: translate Paul's Greek as it stands (often the Septuagint). In a note, say where it differs
  from the Hebrew and from this site's Plain of the Old Testament verse, and quote the site's Plain exactly. The main
  ones: Genesis 15:6 (4:3, 9, 22); Psalm 32:1–2 (4:7–8); Habakkuk 2:4 (1:17); Psalm 51:4 (3:4); the catena of 3:10–18
  (Psalms 14:1–3; 5:9; 140:3; 10:7; Isaiah 59:7–8; Psalm 36:1); Leviticus 18:5 (10:5); Deuteronomy 30:12–14 (10:6–8);
  Isaiah 52:5 (2:24); Genesis 21:12 (9:7); Genesis 25:23 and Malachi 1:2–3 (9:12–13); Exodus 33:19 and 9:16 (9:15, 17);
  Hosea 2:23 and 1:10 (9:25–26); Isaiah 10:22–23; 1:9 (9:27–29); Isaiah 28:16 (9:33; 10:11); Joel 2:32 (10:13); Isaiah
  52:7; 53:1 (10:15–16); 1 Kings 19:10, 18 (11:3–4); Isaiah 59:20–21 and 27:9 (11:26–27); Isaiah 40:13 and Job 41:11
  (11:34–35); Deuteronomy 32:35 and Proverbs 25:21–22 (12:19–20); Leviticus 19:18 and the Ten Words (13:9); Isaiah
  45:23 (14:11); Psalm 69:9 (15:3); Psalms 18:49; 117:1; Deuteronomy 32:43; Isaiah 11:10 (15:9–12); Isaiah 52:15
  (15:21). Paul's "the Lord" in 10:13 (Joel's YHWH, said of Jesus) gets a note.

## The Greek text

SBL base per brief-nt.md. Compare NA28 and Tyndale House; the Editio Critica Maior does not cover Romans. Give a
variants.json entry wherever the English changes. Names to weigh, as reported by Metzger, NA28 and the commentaries
(never invent a reading; attribute): P46 (about 200), Sinaiticus (01), Vaticanus (03), Alexandrinus (02), Ephraemi (04),
Claromontanus (06), Boernerianus (012), the Byzantine text and the Textus Receptus. Places that matter:

- 1:7 and 1:15: "in Rome" omitted by Boernerianus (G 012) and a few others, with Origen's comment; the Plain follows the
  great majority.
- 3:22 "and upon all" (Byzantine; P40, Sinaiticus corrector); 3:28 "for / therefore we reckon"; 4:1 "found"
  (εὑρηκέναι) or not; 4:19 "not weak in faith" or "without being weak" (οὐ); 5:1 ἔχομεν "we have peace" (indicative, the
  better-attested) against ἔχωμεν "let us have peace" (subjunctive: Sinaiticus original, Vaticanus original, Alexandrinus,
  Byzantine: the evidence is closely divided and was weighed by Metzger; fair); 5:2 "by faith" (omit/include); 5:14.
- 7:6 ἀποθανόντος "that which held us" or ἀποθανόντες; 7:25 "Thanks be to God" (εὐχαριστῶ) or "the grace of God" (ἡ χάρις);
  8:1 the Byzantine addition "who do not walk according to the flesh but according to the Spirit"; 8:2 "me" or "you"; 8:11
  "through his Spirit that lives in you" or "because of his Spirit" (διά with genitive or accusative); 8:23 "adoption"
  (omitted in P46 and others: a note); 8:28 "God works together for good" (the subject ὁ θεὸς in P46, Alexandrinus, Vaticanus
  against "all things work together"); 8:34 "Christ Jesus" or "Christ".
- 9:5: the punctuation and the Greek of "who is God over all, blessed forever" (no manuscript punctuation; the editions
  differ). 9:11; 9:28 (the long Septuagint text); 9:32 "by works" with "of the law" (Byzantine).
- 10:9 ὅτι "that Jesus is Lord" or τὸ ῥῆμα "the word that Jesus is Lord"; 10:15 "the feet of those who bring good news of
  peace" (the Byzantine's longer line); 11:6 the Byzantine addition "But if it is by works ... is no longer work".
- 12:11 κυρίῳ "serve the Lord" or καιρῷ "serve the time" (Western: Claromontanus, Boernerianus; Origen; Latin); 12:13
  μνείαις/χρείαις (Western "memorials of the saints"); 13:9 "You shall not bear false witness" (Byzantine); 14:6 the
  Byzantine clause "and he who does not observe the day, to the Lord he does not observe it"; 14:19; 14:23 and the
  doxology; 15:4 "hope" and "through patience and through the encouragement"; 15:19 "the Spirit of God / of the Holy
  Spirit"; 15:24 and 15:29 the Byzantine additions "I will come to you" and "of the gospel of"; 15:31 "my service" or "my
  gift" (δωροφορία: P46, Vaticanus); 15:33 and P46; 16:5 "firstfruits of Asia" (not "of Achaia"; the Byzantine has Achaia);
  16:7 Ἰουνίαν (accusative: Junia, feminine, or Junias, a masculine otherwise unattested; the manuscript tradition and the
  fathers: Origen, Chrysostom take a woman; the later Latin and medieval masculine; Epp's *Junia: The First Woman
  Apostle*; Burer and Wallace's reply on "among the apostles"); 16:17–20 (a fragment? 16:20 the Byzantine repeated
  benediction); 16:24 (the benediction omitted by the SBL: see below); 16:25–27 (the doxology's position and presence).
- Marcion's text and the shorter form of Romans (Origen, Commentary on Romans 10.43, in Rufinus: reported, fair).

## The omitted and moved verses

- 16:24 (the Byzantine "The grace of our Lord Jesus Christ be with you all. Amen"): the SBL does not print it as a verse.
  Follow the policy in brief-nt.md: the Plain line is exactly `16:24 [The oldest manuscripts do not have this verse.]`, with a
  variants.json entry (reading 1 gives its Greek from `byz` and your translation).
- 16:25–27: the doxology is in the SBL after 16:23. Translate it where it stands. Give its variant entry and the section
  "The place of the doxology" a deep dive (positions: after 14:23 in the Byzantine majority; after 16:23 in Sinaiticus,
  Vaticanus and Ephraemi (as reported by NA28; verify); after 15:33 in P46; both after 14:23 and 16:23 in Alexandrinus and others; at the end only
  in the Latin of some copies; omitted in Boernerianus' source and by Marcion: report only what Metzger and NA28 report).
- Check the KJV numbering in the Greek word list `w` at 3:25–26 and 16:25–27; a verse is never missing, so find its words.

## Terms (binding; add only to content/proposals/nt/terms.json, never change an entry)

Read content/terms.json and content/proposals/nt/terms.json. Already fixed: δικαιοσύνη "righteousness", δικαιόω "justify" (gloss
"declare to be in the right"), πίστις "faith", χάρις "grace", σάρξ "flesh" (never "sinful nature"), ἅγιοι "the saints",
κύριος "the Lord", δοῦλος "slave" (a note at 1:1), εὐαγγέλιον "the good news", ἔθνη "the Gentiles" (the nations where the sense is
nations), ἐκκλησία "church", βῆμα "judgment seat" (14:10), κοινός "common" with ἀκάθαρτος "unclean" (14:14), ἀγάπη "love",
διάκονος "servant" (Phoebe: gloss and note, the view "deacon"), ἐπίσκοπος "overseer". Decided here, so every part agrees:

- **πίστις Χριστοῦ / Ἰησοῦ Χριστοῦ (3:22, 26; the term entry says it is decided here):** the Plain reads "faith in Jesus
  Christ" (3:22) and "the one who has faith in Jesus" (3:26), the objective-genitive reading found in most translations. Each
  place gets a gloss and a note giving the other reading, "the faithfulness of Jesus Christ" (Hays, Wright in part,
  Campbell; against it Dunn, Fitzmyer, Moo), with the arguments (the grammar, Paul's other uses, Romans 4's emphasis on
  human faith, the parallel in Galatians 2:16; 3:22; Philippians 3:9, cited by reference). Labeled debated, not consensus.
  This is a lead decision for Matt to override; if he does, the term and these places change together.
- **δικαιοσύνη θεοῦ (1:17; 3:5, 21, 22, 25, 26; 10:3):** "God's righteousness", a gloss on first use, and a note listing the
  readings (a gift God gives, God's own justice, God's covenant faithfulness, God's saving power). Never "justice" in the
  Plain except where the sense is clear (3:5, 8 with "unjust").
- **ἱλαστήριον (3:25):** "God put him forward as the place of atonement, through faith, by his blood", with a gloss
  "where sin is covered over" and a note on the readings: propitiation (turning away God's anger: Morris, Stott, Packer),
  expiation (removing sin: Dodd), the atonement lid of the ark (Hebrews 9:5; Leviticus 16; the Septuagint's use; Luther's
  "Gnadenstuhl"), the martyr-death reading (4 Maccabees 17:22). The site's term kapporet is "atonement lid". No tradition
  ranked. Top `atonement`.
- **ἐφ᾽ ᾧ πάντες ἥμαρτον (5:12):** "because all sinned", with a note that the Latin "in whom" (Vulgate *in quo*) lies behind
  Augustine's view that all sinned in Adam, and the views: all sinned in Adam, all inherited death and so sin, all sin as Adam
  did (Pelagius, the Eastern fathers, the Orthodox "ancestral sin"). Top `original-sin`.
- **ἀπολύτρωσις (3:24; 8:23):** "redemption" (gloss "being set free by a price paid"); **ἱλασμός/καταλλαγή (5:10–11):**
  "reconciliation"; **προορίζω (8:29–30):** "decide beforehand" (gloss "predestine", top `election`); **υἱοθεσία (8:15, 23; 9:4):**
  "adoption as children" with a gloss about Roman adoption; **ἀββά ὁ πατήρ (8:15):** "Abba, Father".
- **νόμος:** "law" throughout (the Torah of Moses), including 7:21, 23; 8:2 ("the law of the Spirit ... the law of sin and death"),
  with a note at each of those that Paul may mean a rule or principle (views); **ἔργα νόμου (3:20, 28):** "works of the
  law" (literal), with a note: boundary markers of Jewish identity (Dunn), the deeds the Law requires (Moo, Cranfield), and
  Luther's reading; **ὑπὸ νόμον:** "under the law".
- **ἁμαρτία:** "sin", lowercase throughout, with a note at 5:12, 6:6, 7:8–11 that Paul speaks of it like a ruler or a power.
  **ἁμαρτάνω:** "sin" (verb). **θάνατος:** "death".
- **ἀδελφοί (1:13; 7:1, 4; 8:12, 29; 10:1; 11:25; 12:1; 15:14, 30; 16:14, 17):** "brothers and sisters", with a note at 1:13
  that the Greek is the plural "brothers", used of the whole group; Phoebe, Junia, Prisca, Julia, Tryphaena and Tryphosa
  make the point. Follow the form already used in Acts; if Acts differs, follow Acts and say so in your report.
- **Ἰουδαῖος:** "Jew" (a person), never "Jewish people" in some places and "Jews" in others; "Jew" and "Gentile" kept
  (Ἕλλην "Greek" in 1:14, 16; 2:9–10; 3:9; 10:12, where it means non-Jew: "Greek" with a gloss "that is, Gentile"). **Ἰσραήλ:**
  "Israel" (9:6: "not all who are from Israel are Israel": with a note, top `church-israel`).
- **ἐπαγγελία:** "promise"; **ἐκλογή / ἐκλεκτός:** "election / chosen" (top `election`); **ὀργή:** "anger" (God's; topic `wrath`; 5:9
  "the coming anger" with a note on the day of the Lord) rather than "wrath" for the 8th-grade reader, with `wrath` in the gloss.
- **ἐξουσία / ἄρχοντες (13:1–3):** "authorities" (singular ἐξουσία "authority" in 13:1c; ὑπερεχούσαις "those above you"); the
  verb ὑποτάσσω "submit" (13:1, 5) is kept apart from ὑπακούω "obey" (6:16–17; 10:16; 16:19). A note on 13:1 on the readings
  (human rulers; angelic powers behind them: Cullmann; Käsemann), the history (Hitler era; the American Revolution; Romans 13
  in slavery debates), and the quick sequel 13:6 (taxes), top `church-and-state`.
- **φύσις "nature" (1:26; 2:14, 27; 11:21, 24):** "nature" with a note at 1:26 (a Stoic and Jewish idea of what is natural).
- **ἀρσενοκοῖται** is not in Romans; do not import it from 1 Corinthians 6:9.
- **συνείδησις (2:15; 9:1; 13:5):** "conscience", one rendering at each.
- **σῶμα τῆς ἁμαρτίας (6:6); ὁ παλαιὸς ἄνθρωπος:** "the body ruled by sin"; "our old self".
- **Ἰουνίαν (16:7):** "Junia", and ἐπίσημοι ἐν τοῖς ἀποστόλοις "outstanding among the apostles", with a note giving the other
  reading ("well known to the apostles"). The note must give both Junia/Junias and both prepositional readings, fairly. Top
  `women-in-ministry` (point; do not repeat at 16:1).
- **προστάτις (16:2):** "patron" (gloss "someone who helps with money and influence"). **οἰκονόμος (16:23, Erastus):**
  "city treasurer" (note: the Erastus inscription at Corinth, reported; the identification is uncertain).

## Places that need full treatment (settings, variants, traditions cards, topics)

- **1:1–7** the salutation: Paul's titles ("slave", "called as an apostle", "set apart for the good news"), 1:3–4 the creed-like
  formula (ὁρισθέντος "appointed" or "declared"; Davidic descent; "Son of God in power"; adoptionist worry and the replies;
  "spirit of holiness"), 1:5 "the obedience of faith" (three readings), "the Gentiles"; an `audience` card for the Romans.
- **1:8–15** thanksgiving, why Paul has not come, the "debt" to Greeks and barbarians; **1:16–17** the thesis: "I am not
  ashamed", "the Jew first", Habakkuk 2:4 (the Hebrew "the righteous will live by his faithfulness", the Septuagint "by my
  faithfulness", Paul "by faith"; Hebrews 10:38 and Galatians 3:11 by reference; DSS 1QpHab 8, if known, labeled as such).
- **1:18–32** God's anger at humanity: general revelation (card top `natural-revelation`; Catholic Vatican I and the
  Catechism §36, Reformed and Barthian rejections, Orthodox), the exchange of the glory of God for images (idolatry; the
  parallel with Wisdom 13–14, Plain exists in Wis; verify), 1:26–27 (same-sex relations: card top `same-sex-relations` with
  the churches' teachings and the scholars' readings: Brooten, Hays, Gagnon, Boswell, Fredriksen on Paul and Jewish
  views of Gentiles; the Torah's Leviticus 18:22 and 20:13 by reference; "natural" and "unnatural", with the fair statement
  that the churches differ and that some read it as about excess, idolatry or Roman practices); 1:28–32 the vice list.
- **2** the judge who judges: who is the interlocutor (a Gentile moralizer in 2:1–5, a Jewish teacher in 2:17–29; views);
  2:6–11 judgment by works (the tension with 3:28; Catholic, Reformed and New Perspective readings; **a traditions card**, top
  `justification` or a point to it); 2:12–16 Gentiles who do what the law requires: "the law written on their hearts"
  (Jeremiah 31:33 by reference; Christians or non-Christians: Augustine against Pelagius; Barth, Cranfield; Calvin), 2:16 (the
  interpolation theory); 2:17–24 and Isaiah 52:5; 2:25–29 circumcision of the heart (Deuteronomy 30:6; Jeremiah 4:4; Jewish
  readings; topic `circumcision`).
- **3:1–8** the Jew's advantage ("the oracles of God", entrusted to them: the Hebrew Bible or promises), "faithfulness of God",
  Psalm 51:4, the slander of 3:8. **3:9–20** the catena (the Hebrew and the Septuagint of each source; "all are under sin";
  3:20 "no flesh will be justified by works of the law").
- **3:21–31 (the center of the letter, treat at length):** "But now", the law and the prophets as witnesses, πίστις Χριστοῦ
  (decision above), "all have sinned and fall short of the glory of God" (3:23: Adam and the lost glory), "justified as a
  gift by his grace", ἀπολύτρωσις, ἱλαστήριον (3:25), πάρεσις "passing over" former sins versus "forgiveness", 3:26 "he is
  righteous and he makes righteous", 3:27–28 "boasting" and "works of the law", 3:31 "we establish the law". **Cards:**
  justification (Catholic: Trent session 6, justification as a process of inner renewal by grace and cooperation, the
  *Catechism* §1987–1995; Orthodox: theosis and participation, not a legal declaration, with the fathers; Lutheran:
  forensic declaration by faith alone, *sola fide*, Augsburg Confession IV and Luther's "Romans is the chief part of the New
  Testament"; Reformed: forensic imputation, Westminster Confession 11, Calvin's *Institutes* 3.11; Wesleyan: justification
  and sanctification, free grace, Wesley's sermons; Baptist: the 1689 Confession ch. 11 and the Baptist Faith and Message,
  article 4; Anglican: Article 11 and the Homily on Salvation; the New Perspective as a scholarly view: Sanders, Dunn, Wright;
  the 1999 Lutheran–Catholic *Joint Declaration*, with each tradition's reservations; Pentecostal statements). Do not rank. Top
  `justification`. **Card** top `atonement` at 3:25 (penal substitution, Christus Victor, satisfaction (Anselm), moral
  influence, the Eastern ransom and recapitulation views: as taught, with who holds what).
- **4** Abraham: justified before circumcision (4:9–12, top `circumcision`), "reckoned" (λογίζομαι, the accounting word),
  4:5 "justifies the ungodly", "the father of all who believe", the promise "to inherit the world" (4:13: not in Genesis
  15; Genesis 17; Sirach 44:21; Jubilees 22; labeled), 4:17 "gives life to the dead and calls things that are not", 4:19–21;
  Genesis 15:6 in its context; James 2:21–24 by reference (a note that the two letters use "justify" and "works" differently;
  top `faith` and the card point). Jewish readings of Abraham (Sirach 44, Jubilees 23, Philo, *m. Qiddushin* 4:14 as reported)
  from the Jewish Annotated New Testament and Levenson.
- **5:1–11** peace, hope, boasting in troubles, "while we were still sinners"; **5:12–21** Adam and Christ: the reading of
  Adam as an individual and as a figure (note: no verdict on historicity; the views; topic `adam-and-eve`), death through
  sin, "because all sinned", the law "came in", the free gift; **a traditions card** top `original-sin` (Catholic: *Catechism*
  §402–406 original sin as a state, not a personal fault; Orthodox: ancestral sin, death inherited, not guilt; Augustinian,
  Lutheran (Augsburg Confession II) and Reformed (Westminster 6) original guilt and corruption; Wesleyan prevenient grace; Baptist
  views vary; the Pelagian and Arminian rejections of inherited guilt; the 5:18 universalist reading: Barth, Origen, Gregory
  of Nyssa as readings, with the replies). 5:20 "the law came in to increase the offense".
- **6** baptized into his death (card, top `baptism`: baptismal regeneration, believer's immersion as a picture, infant
  baptism, "buried with him": immersion; point if the baptism cards at Acts 2:38 and 16:15 already exist), slavery to sin or
  to righteousness ("slave" language; the slave market), "you are not under law but under grace" (6:14), 6:23 "the wages of
  sin is death".
- **7** the law and the "I": the marriage illustration (7:1–6, Jewish law of widows), "the law is holy" and 7:7 "You shall not
  covet", 7:7–13 the "I" (Adam, Israel at Sinai, Paul as a child, a rhetorical "I": Kümmel, Stowers, Wright), 7:14–25
  "I do not do what I want": regenerate or unregenerate? **A traditions card** (top `law-of-moses`; Augustine's later view that it is the believer; Origen, Chrysostom and most Greek fathers, and Luther's early
  and Wesley's view that it is the person under law before grace; Calvin and Reformed *simul justus et peccator*; Pentecostal
  and holiness readings; Cranfield, Dunn, Moo and Fitzmyer; Paul as a Jew who did not feel "guilty": Stendahl's "introspective
  conscience of the West"). 7:25a/b.
- **8** life in the Spirit: 8:1 "no condemnation", 8:3 "in the likeness of sinful flesh" and the sin offering (περὶ ἁμαρτίας:
  Leviticus; top `sacrifice`), 8:9–11, 8:14–17 adoption and "Abba" (card top `holy-spirit`: the Spirit's witness; assurance:
  Catholic caution, Reformed assurance, Wesleyan "witness of the Spirit"), 8:19–23 the groaning creation (the redemption
  of creation, "subjected to futility", the Genesis curse; ecological readings; top `new-creation`), 8:26–27 the Spirit's
  groans (tongues? Käsemann; most others no), 8:28 (the P46/B reading "God works together"), **8:29–30** foreknew,
  decided beforehand, called, justified, glorified (card top `election`: Reformed unconditional election, Arminian and
  Wesleyan foreknowledge, Catholic and Lutheran, Orthodox *synergeia*, Molinist middle knowledge; "the golden chain"), 8:31–39
  (**a card** top `perseverance`: eternal security, conditional security, Catholic hope, Orthodox, Lutheran), "Who will bring a
  charge", the intercession of Christ.
- **9** Israel's privileges (9:4–5), 9:1–3 Paul's wish to be cut off, 9:5 (the punctuation; **a variant and note**; "God over all"
  of Christ: the Christological and doxological readings, with the fathers (Irenaeus, Tertullian, Athanasius, Chrysostom), Erasmus
  and modern commentators), 9:6–13 "not all who are from Israel are Israel" (corporate versus individual), Jacob and Esau
  (Malachi 1:2–3 "hated": a Hebrew idiom of preference; Genesis 25:23), 9:14–18 Pharaoh and mercy (Exodus 9:16; the hardening
  of Pharaoh in Exodus: he hardens his own heart first, then God does; top `hardening-of-heart`), 9:19–23 the potter (Isaiah
  29:16; 45:9; Jeremiah 18; Wisdom 12; "vessels of anger prepared for destruction": passive or middle), 9:24–29 Hosea and
  Isaiah on the remnant, 9:30–10:4 "the stone of stumbling", the law of righteousness, "the end of the law" (10:4: τέλος:
  end, goal or fulfillment: all three, fairly; Jewish readings and the Gentile-mission readings). **Cards:** election (corporate
  and individual; Calvin, Arminius, Augustine, Aquinas, Barth's christological election, Orthodox, Lutheran *Formula of Concord*
  XI), **free-will** (9:16, 19–21) as a point, not a repeat, and **church-israel** (9:4, 6–8, 24–26; topic page).
- **10** "zeal without knowledge" (10:2), 10:4, 10:5–13 Leviticus 18:5 and Deuteronomy 30:12–14 (how Paul reads the Moses text
  and the Septuagint; Jewish readings of Deuteronomy 30; Baruch 3:29–30 by reference), **10:9–10 "Jesus is Lord"** (the
  earliest confession; baptism liturgy; a card point), 10:13 Joel 2:32 with "the Lord" (YHWH said of Jesus: a note and top
  `son-of-god`/`trinity` as fits), 10:14–15 "how will they hear?" (missions), 10:16–21 Isaiah, Moses and Isaiah on Israel's
  disobedience ("a disobedient and contrary people").
- **11** "Has God rejected his people? By no means!" (11:1; Paul's own case; Elijah and the seven thousand; "a remnant chosen by
  grace"; **11:5–6**), the hardening of "the rest" (Psalm 69:22–23; Isaiah 29:10; Deuteronomy 29:4), the olive tree (11:16–24:
  wild branches grafted into a cultivated tree, which is contrary to horticulture, hence Paul's "contrary to nature"; the
  Gentiles' warning), **11:25–27 the mystery and "all Israel will be saved"** (readings: all ethnic Israel in the end; the elect of
  Israel through history; the church as the new Israel; Israel's full number gathered with Gentiles; Jewish converts at the
  end; "in this way" (οὕτως) versus "then": Calvin, Hodge, Barth, Cranfield, Wright, Nanos, Fitzmyer; dispensational,
  covenant, Catholic (*Nostra Aetate* §4, *Catechism* §674), Orthodox views; Jewish readings including the Sonderweg ("special
  path") reading; **a card** top `church-israel`; deep dive on supersessionism and its history, treated honestly as above),
  11:28–29 "the gifts and the calling of God are irrevocable" (cited in *Nostra Aetate* and the Catholic–Jewish dialogue),
  11:30–32 mercy to all, **11:33–36 the doxology** (Isaiah 40:13; Job 41:11; "from him and through him and to him": a
  Stoic formula? Eduard Norden's view; Wisdom 9:13), with a `settings` card for the whole 9–11 section (to whom, why).
- **12** "present your bodies as a living sacrifice", "reasonable/spiritual worship" (λογικὴν λατρείαν: logikos: "sensible",
  "rational", "spiritual", "of the word": keep it fair), "do not be conformed to this age", the body and the gifts (12:3–8: list
  of gifts, `spiritual-gifts` topic; prophecy "according to the proportion of faith"; "the one who leads", "the one who
  gives": each gift's gloss; Phoebe's role by reference), love in action (12:9–21), 12:14, 17–21 do not take revenge, "heap burning
  coals" (Proverbs 25:21–22: views: shame, repentance, Egyptian ritual of penance, judgment; top `nonviolence`; a point or a
  card that matches those on Matthew 5), 12:19 Deuteronomy 32:35.
- **13** 13:1–7 (**a traditions card**, top `church-and-state`: Catholic and Orthodox views of authority, Luther's two kingdoms,
  Calvin's right of resistance by lesser magistrates, Anabaptist non-participation, Anglican, Baptist (Roger Williams, soul
  liberty), the Confessing Church (Barmen, 1934) and the Romans 13 abuse in 1930s Germany and the American South; "the
  authorities are God's servants" and Revelation 13 by reference; Roman taxes and the unrest in Rome in 57–58 reported by
  Tacitus), 13:8–10 love fulfills the law (Leviticus 19:18; the Ten Words; Jesus' command by reference), 13:11–14 "the night is far
  gone": Augustine's *Tolle lege* (Confessions 8.12), "put on the Lord Jesus Christ", baptismal garments.
- **14:1–15:13** the strong and the weak (who were they? Jewish Christians observing food laws and days; Gentile
  Christians; ascetics (the Roman Pythagorean tradition?); the Claudian expulsion; views: Karl Donfried, Nanos's "the weak
  are not Christians but Jews", Wedderburn); 14:5 "one day more sacred than another" (card top `sabbath`: Sunday as the Lord's Day,
  Seventh-day Adventist and Seventh Day Baptist readings of the Sabbath, Reformed Sabbatarianism, Catholic and Orthodox on
  Sunday; Jewish and Messianic Jewish readings; not a repeat of the Acts 20:7 card; point), 14:2 vegetables only (a card
  top `food-laws`: Paul's "nothing is unclean in itself" (14:14) versus Leviticus 11; Messianic Jewish and Adventist readings; also
  Mark 7:19 by reference; a note on wine and meat sacrificed to idols (1 Corinthians 8–10 by reference)), 14:10 the judgment
  seat (βῆμα; term fixed), 14:11 Isaiah 45:23, "the kingdom of God is not food and drink" (14:17), 14:23 "whatever does not come
  from faith is sin" (πίστις here as conviction), the doxology position.
- **15:1–13** Christ the servant of the circumcised (15:8, "to confirm the promises to the patriarchs") and the Gentiles' praise
  (Psalm 18:49; Deuteronomy 32:43; Psalm 117:1; Isaiah 11:10); a chain of four quotations; the blessing at 15:13.
- **15:14–33** Paul's ministry: "priestly service" (λειτουργός, ἱερουργοῦντα, 15:16), Illyricum, "from Jerusalem and round about"
  (15:19), not building on another's foundation, Spain (15:24, 28; Clement of Rome 5.7 reports Paul reached "the limit of the
  West", cited by reference; labeled), the collection for the poor among the saints in Jerusalem (15:25–29: with Acts 20:2–4;
  21:17–19; 24:17 by reference, and Galatians 2:10), "my service ... may be acceptable" (15:31, variant), his prayer request.
  A `settings` card for the plan.
- **16** the greetings, the longest list in the Pauline letters: a `settings` card for the whole chapter, and notes on
  Phoebe (16:1–2: servant/deacon; patron; letter carrier; Cenchreae; the letter's first reader; Paul's note that she
  "brought" it: readings of who read it aloud), Prisca and Aquila (16:3–5; "risked their necks"; the church in their house;
  Acts 18:2, 18, 26 by reference), Epaenetus ("first fruit of Asia"), Mary, **Andronicus and Junia (16:7)** (**a card**, top
  `women-in-ministry`: Catholic and Orthodox teaching on women's ordination and the fathers' naming of Junia as an apostle;
  Reformed and Baptist complementarian and egalitarian readings; Anglican and Lutheran practice; note the grammar and the
  NA28 accent history; labeled as one of the central places where the churches differ), Ampliatus, Urbanus, Stachys, Apelles,
  the household of Aristobulus and of Narcissus (Roman names; the Herodian and imperial households; their identification is
  uncertain), Rufus (Mark 15:21 by reference, with its tradition that Rufus' mother was a mother to Paul), Hermes and others
  (a "name list" gloss for the reader, kept short), Tryphaena and Tryphosa, Persis, Julia and Nereus, Olympas, "a holy kiss" (16:16),
  16:17–20 the warning about divisions (the Plain translates it; note on the interpolation view, honestly labeled), Timothy,
  Lucius, Jason and Sosipater (Acts 17:5 by reference), Tertius the scribe (16:22), Gaius, Erastus, Quartus (the Erastus
  inscription in Corinth: the Latin "ERASTVS PRO AED S P STRAVIT", reported in the commentaries; the identification uncertain: labeled),
  and 16:25–27 the doxology ("the mystery kept secret", "the obedience of faith" returns).

## Settings

A letter: `audience` in book.json names the Romans. Each chapter's `settings` follow the letter's sections (the diatribe in 2;
3:21–26; the Abraham argument; each of Adam's contrasts; the wretched-man passage; the olive-tree warning; the household
code of 13:1–7 and 12:9–21; the weak and the strong; the plans; the chapter-16 names). Where an interlocutor is addressed (2:1,
17; 9:19–20; 11:17–24), say who: Gentile, Jew, or a rhetorical figure. Each card: `to` names whom the text names, `readers` the
Romans' own situation, `why` the use of the section to them. For Jewish law (circumcision, the Sabbath, food laws, vows
and marriage law at 7:1–3), say whose rule is at stake and whom it bound.

## Fairness and care

Present Paul's text honestly and the readings fairly: the Reformation and the Catholic readings; the New Perspective and the
traditional reading of "works of the law"; the supersessionist and "irrevocable gifts" readings of Israel; the churches'
divided teaching on same-sex relations (1:26–27) and women in ministry (16:1, 7); Romans 13 and its political abuses; the
single "I" of chapter 7. Say where consensus holds (Paul wrote it; chapter 16 belongs to the letter's earliest form for most
scholars, though some say it went to Ephesus) and who dissents. Claude's own theories only in `spec` boxes, labeled.

## Model books

Content/books/Jud (letter), content/books/Act (newest NT: variants, settings, traditions), content/books/Mat/parts/24-25 (notes and
chapter structure for a doctrine-heavy part), content/books/Pro and Psa (newest form of `settings` and `traditions`).
