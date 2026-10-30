# Acts: brief for the part writers

Book id `Act`. Read tools/brief-nt.md first; it holds the rules for every New Testament book. Eight parts, all
written at the same time (no part can see another's notes; refer to a verse instead of repeating a point):

| Part | Chapters | Verses | Contents |
|---|---|---|---|
| 01-04 | 1–4 | 136 | Prologue to Theophilus, the ascension, Matthias, Pentecost and Peter's speech, the healing at the Beautiful Gate, Peter and John before the council, the shared life. **Owns book.json.** |
| 05-07 | 5–7 | 117 | Ananias and Sapphira, Gamaliel, the Seven, Stephen's speech and death |
| 08-10 | 8–10 | 131 | Philip in Samaria, Simon Magus, the Ethiopian official, Saul's conversion, Peter at Lydda and Joppa, Cornelius |
| 11-14 | 11–14 | 135 | Peter's defense, Antioch and "Christians", the famine, Herod Agrippa I, the first journey (Cyprus, Pisidian Antioch, Iconium, Lystra) |
| 15-17 | 15–17 | 115 | The Jerusalem council and its letter, Paul and Barnabas part, Timothy, the Macedonian call and the first "we", Philippi, Thessalonica, Berea, Athens |
| 18-20 | 18–20 | 107 | Corinth and Gallio, Apollos, the disciples of John at Ephesus, the riot, Troas and Eutychus, the farewell at Miletus |
| 21-23 | 21–23 | 105 | To Jerusalem, Paul's vow, the riot in the Temple, the speech on the steps, the Sanhedrin, the plot, to Caesarea |
| 24-28 | 24–28 | 161 | Felix, Festus, the appeal to Caesar, Agrippa II and Bernice, the voyage and shipwreck, Malta, Rome, the open ending |

## Lenses (fixed; the same keys as the Gospels, since Luke and Acts are one work in two volumes)

- H **History and setting**: the Roman East in the 30s–60s (governors Felix and Festus, the Herods, Gallio, Claudius'
  expulsion of Jews from Rome), inscriptions and archaeology (the Gallio inscription at Delphi, the Theodotus
  inscription, the Temple warning inscription, politarchs at Thessalonica, the Ephesus theater and Artemis), travel and
  sea (James Smith, The Voyage and Shipwreck of St Paul), what can be known of Paul.
- C **Critical**: authorship (Luke the physician and companion; the "we" passages 16:10–17; 20:5–21:18; 27:1–28:16 and
  their readings: eyewitness diary, literary convention, a source), date (about 62, 70–90, or early second century;
  Pervo), the speeches (Thucydides 1.22; composed by the author or summaries of what was said), Acts and Paul's letters
  (Galatians 1–2 and Acts 9, 11, 15; the apostolic decree; the "Paulinism" of Acts, Vielhauer), historicity (Ramsay, Hemer,
  Keener against Haenchen, Pervo; fair), the Western text.
- L **Literary**: Luke-Acts as one story (Luke 24:49 and Acts 1:4–8; Jesus' and Paul's journeys to Jerusalem and trials
  paralleled), 1:8 as outline (Jerusalem, Judea and Samaria, the ends of the earth), summary statements ("the word of God
  grew": 6:7; 9:31; 12:24; 16:5; 19:20; 28:31), speeches, the three accounts of Paul's call (9, 22, 26).
- J **Jewish reading**: the early movement as a Jewish sect ("the Way", 24:5, 14 "the Nazarenes"), the Temple and the
  synagogue as settings, Gamaliel, Jewish scholars on Paul and on Acts (Segal, Fredriksen, Nanos, Boyarin), Acts' "the
  Jews" and its later use against Jews, the open ending of 28:25–28 (a final turn from Israel or not: views).
- T **Church tradition**: Acts as the charter of church order, sacraments and mission in the churches' teaching (the
  laying on of hands, the Seven and the diaconate, councils, tongues), the fathers (Chrysostom's homilies on Acts).

## book.json (01-04 writer)

Lead, facts, authorship (the anti-Marcionite prologue, Irenaeus Against Heresies 3.1.1 and 3.14.1, the Muratorian
fragment; Colossians 4:14, Philemon 24, 2 Timothy 4:11; Hobart's "medical language" and Cadbury's reply; the critical view
of an unknown companion or a later author), date (views with their reasons: the ending before Paul's death; after Luke and
after 70; Pervo and Tyson for about 110–120), purpose and readers (`audience`: Theophilus, "most excellent"; Gentile
Christians and God-fearers; apologetic to Rome, defense of Paul, legitimation of Gentile inclusion, the unity of the
church; views), genre (history, apologetic history, biography, novel: Pervo's "Profit with Delight" view fairly), outline by
1:8, sections: Acts and Paul's letters, the speeches, the two texts of Acts (the Western text in Codex Bezae, about 8.5
percent longer; Blass' two-edition theory; Boismard and Lamouille; Strange; current views), the "we" passages, the ending,
image prompts, book-wide `traditions` (church order: what Acts shows of elders, overseers and the Seven, read by
Catholic, Orthodox, Anglican, Presbyterian, Congregational and Baptist churches; or the gift of the Spirit: coordinate with
08-10 and 18-20 by verse, not repeating).

## Topics and ids (check before creating)

- "Pentecost" is an alias of `feast-of-weeks`: Acts 2 contributes there and to `holy-spirit`. Do not create `pentecost`.
- Already exist: holy-spirit, apostles, peter, judas-iscariot (Acts 1:18–19 with Matthew 27:3–10), baptism, repentance,
  forgiveness, resurrection, son-of-man, messiah, jesus, temple, sabbath, food-laws, clean-and-unclean, circumcision,
  law-of-moses, foreigners (gentiles), samaritans, herod-family, rome, ephesus, jerusalem,
  sorcery (Simon Magus, Bar-Jesus, Ephesus 19:19), casting-lots (1:26), prophecy, miracles, angels, elders, church-israel,
  anti-judaism, imperial-cult, martyrs, textual-history, wealth, poverty, widows, women-in-ministry, scripture-and-tradition.
- New cores, one owner each (create in content/proposals/nt/topics/ in one write, after checking every proposals folder):
  - 01-04: `acts` (the book: "The Acts of the Apostles", aka "Acts", "Luke-Acts" only if the Luke writer is not using it:
    Luke owns `luke` and "Luke-Acts" goes on `luke`; so leave it off), `ascension` (with Luke 24:50–53; aka "Ascension
    Day", "the ascension of Jesus"), `spiritual-gifts` (aka "tongues", "speaking in tongues", "glossolalia", "charismata",
    "gifts of the Spirit": check `speech` (aka "tongue") and `tower-of-babel` ("confusion of tongues") first: aliases must
    not collide).
  - 05-07: `stephen`; `deacons` only if `elders` does not cover church offices (check; else contribute to `elders`).
  - 08-10: `paul` (the apostle: life, call, chronology, letters; aka "Saul of Tarsus", "Paul the Apostle", "Saint Paul").
    Other parts contribute.
  - 15-17: `council-of-jerusalem` (aka "Apostolic Council", "apostolic decree").
- `antioch` and `gentile-mission`: contribute to `foreigners` unless a part truly needs a core; propose only after checking.

## Parallels and quotations

- Luke is written after this book in this project. Where Acts retells Luke (Acts 1:1–11 with Luke 24:36–53), write from the
  Greek and list the pair in your report; the lead aligns them.
- The three accounts of Paul's call (9:1–19; 22:3–16; 26:9–18): parts 08-10, 21-23 and 24-28 translate shared Greek
  identically. Fixed now so the parts agree: "Saul, Saul, why are you persecuting me?"; "Who are you, Lord?"; "I am Jesus,
  whom you are persecuting"; 26:14 adds "Kicking against the goads is hard on you" (ox goads; changed at review because the first wording matched the ESV; a Greek proverb,
  Euripides, Bacchae 795). 9:5 in the TR carries the goads saying (variant).
- Peter's two visions (10:9–16 and 11:5–10) likewise: "Get up, Peter; kill and eat"; "What God has made clean, you must
  not call common" (κοινός "common", ἀκάθαρτος "unclean"; keep both English words). 11-14 follows 08-10 for shared Greek;
  since they run in parallel, both use these fixed wordings and list differences in reports.
- Old Testament quotations: translate the Greek of Acts (often Septuagint: Amos 9:11–12 at 15:16–18, Joel 2:28–32 at
  2:17–21 with "in the last days", Psalm 16 at 2:25–28, Isaiah 53:7–8 at 8:32–33). Quote the site's Old Testament Plain English Translation
  exactly in notes and say where it differs.
- Paul's letters are not written yet: cite them by reference, do not quote a Plain English Translation that does not exist.

## The Greek text

SBL base per brief-nt.md. The Editio Critica Maior of Acts was published in 2017 (ECM III); NA28's text was not updated to
it, so where you know for certain an ECM reading that differs from NA28 (for example where the ECM marks a split guiding
line), mention it. The Western text matters more in Acts than anywhere: give a variant entry wherever Codex Bezae (05) and
its allies change what a reader would notice (for example 11:28 "when we were gathered", the first "we"; 12:10 "the seven
steps"; 15:20, 29 the decree with the Golden Rule and without "strangled"; 19:9 "from the fifth hour to the tenth"; 28:16
the stratopedarch). The omitted verses 8:37, 15:34, 24:6b–8a (KJV 24:7) and 28:29 follow the policy in brief-nt.md; 8:37 also
gets a note (the Ethiopian's confession, its Western and later witnesses, Irenaeus). 19:41 numbering: the verse exists in
the Greek; translate it under the KJV number.

## Places that need full treatment

- 1:1–2 "the first book" (Luke); 1:6–8 "restore the kingdom to Israel"; 1:9–11 the ascension (literal and figurative
  readings; the Western text of Luke 24:51); 1:15–26 Judas' death (with Matthew 27:3–10: the two accounts and harmonizing
  and critical views; Akeldama), the lot.
- 2:1–13 Pentecost: tongues as known languages (xenolalia) or ecstatic speech (with 1 Corinthians 14), the list of nations,
  Babel reversed (typology, labeled as interpretation); 2:17–21 Joel; 2:22–36 Peter's speech, Psalm 16 and Psalm 110,
  "Lord and Messiah" (2:36: adoptionist reading and replies); 2:38–39 "be baptized ... for the forgiveness of sins ... the
  promise is for you and your children" (traditions card top `baptism`: baptismal regeneration, believer's baptism,
  infant baptism, Oneness "in the name of Jesus Christ" formula vs Matthew 28:19); 2:42 "the breaking of bread"; 2:44–45 and
  4:32–37 holding everything in common (traditions card top `wealth`: monastic, Hutterite community of goods, voluntary
  sharing readings; whether it was a model or a moment).
- 3:21 "the restoration of all things" (ἀποκατάστασις; universalist readings from Origen and Gregory of Nyssa vs the common
  reading; card only if it fits); 4:12 "no other name" (exclusivist, inclusivist, pluralist; traditions card if the churches
  differ: Catholic Lumen Gentium 16, evangelical exclusivism); 4:13 "unschooled".
- 5:1–11 Ananias and Sapphira (the lie to the Spirit as a Trinitarian proof text 5:3–4; readings of the deaths); 5:34–39
  Gamaliel and the Theudas problem (Josephus dates Theudas to about 44–46, after Gamaliel's speech, and puts Judas the
  Galilean of AD 6 after him; views: an earlier Theudas, Luke's error, Luke's dependence on Josephus: fair).
- 6:1–6 the Seven: Hellenists and Hebrews; are they deacons? (traditions card top `elders` or `deacons`: the diaconate in
  Catholic, Orthodox and Anglican order, Reformed deacons, Baptist deacons; ordination by laying on of hands).
- 7: Stephen's speech: its differences from the Old Testament (7:4 Abraham leaves after Terah's death vs Genesis 11:26,
  32; 12:4; 7:14 seventy-five persons, Septuagint vs Hebrew seventy; 7:16 the tomb at Shechem bought by Abraham, merging
  Genesis 23 and 33:19; 7:43 "Babylon" for Amos' "Damascus"; 7:53 the Law through angels): note each, with views, not
  hiding them; 7:46 "the God of Jacob" / "the house of Jacob" (variant); 7:56 "the Son of Man standing"; 7:59–60 prayer to
  Jesus; martyrdom (topic `martyrs`).
- 8:9–24 Simon Magus (simony; later Simonian legends: tier-3 works under canon-tiers rules); 8:14–17 the Samaritans
  receive the Spirit later through the apostles' hands (traditions card top `holy-spirit`: confirmation/chrismation in
  Catholic and Orthodox teaching, Lutheran and Reformed views, Pentecostal subsequence; with 19:1–7 point, don't repeat);
  8:26–40 the Ethiopian official (eunuch: Deuteronomy 23:1 and Isaiah 56:3–5; the Kandake; Ethiopian Christian tradition;
  8:37); 9 Saul's conversion or call (Stendahl's "call, not conversion"); 9:31 the church "throughout Judea, Galilee and
  Samaria" (singular ἐκκλησία vs Byzantine plural).
- 10–11 Cornelius: God-fearers, the vision and the food laws (traditions card top `food-laws` only if it adds to Matthew
  15/Mark 7 cards; Seventh-day Adventist and Messianic Jewish readings vs the majority), 10:44–48 the Spirit before baptism;
  11:26 "Christians"; 11:27–30 the famine under Claudius (Josephus); 12 Herod Agrippa I's death (Josephus, Antiquities
  19.343–350); 12:25 "to" or "from" Jerusalem (variant crux).
- 13:1–3 the sending (laying on of hands); 13:9 "Saul, also called Paul"; 13:16–41 the synagogue sermon at Pisidian Antioch
  (setting card in full: God-fearers, the synagogue service); 13:46 "we turn to the Gentiles"; 13:48 "as many as had been
  appointed to eternal life believed" (τεταγμένοι; traditions card top `election`: Reformed, Arminian/Wesleyan, Catholic,
  Lutheran, Orthodox); 14:11–18 Lystra (Zeus and Hermes; Ovid's Baucis and Philemon set in Phrygia); 14:23 elders
  appointed (χειροτονήσαντες "appointed" / "by raising hands": church polity readings).
- 15 the Jerusalem council: Acts 15 and Galatians 2 (the same meeting or not; the "famine visit" theory, 11:30 = Galatians
  2:1–10; views), James' speech and Amos 9 (Septuagint vs Hebrew), the decree and its four (or three) items and the Western
  text's moral version, what the decree was for (Leviticus 17–18 laws for resident aliens; Noahide laws as a later
  rabbinic parallel), traditions card on councils and church authority (top `scripture-and-tradition`: ecumenical councils
  in Catholic and Orthodox teaching, Protestant views of councils); 15:34 omitted; 15:36–41 the split.
- 16:1–3 Timothy circumcised (with Galatians 2:3 and 5:2; views); 16:6–10 the Spirit forbidding and the first "we";
  16:13–15 and 16:31–34 household baptisms (traditions card top `baptism`: infant baptism vs believer's baptism readings of
  "she and her household", "he and all his"; point if 02-04's card already covers infants); 16:16–18 the Python spirit;
  16:37 Roman citizenship.
- 17:6 politarchs; 17:11 the Bereans; 17:16–34 the Areopagus speech (Aratus, Phaenomena 5, "we are his offspring"; Epimenides
  attribution via later Syriac and Clement, uncertain: say so; natural theology readings: Catholic and Reformed differences
  on general revelation if a card fits; the unknown god, with the altars attested by Pausanias and Diogenes Laertius).
- 18:2 Claudius' edict (Suetonius, Claudius 25.4, "Chrestus"); 18:12 Gallio (the Delphi inscription and dating Paul);
  18:18 the Nazirite-type vow (who made it: Paul or Aquila; Cenchreae); 18:24–28 Apollos and Priscilla's teaching (woman
  teaching a man: traditions card top `women-in-ministry` only if the churches' arguments really turn on it; point to later
  letters); 19:1–7 the disciples who knew only John's baptism, rebaptism, Spirit and tongues (traditions card top
  `holy-spirit` or `spiritual-gifts`: Pentecostal initial evidence, Catholic confirmation, Reformed and Baptist "single event"
  readings); 19:11–20 handkerchiefs, the sons of Sceva, the burned books (fifty thousand silver coins); 19:23–41 the riot
  (Demetrius, the theater, the town clerk; 19:41 numbering).
- 20:7 "the first day of the week" (traditions card top `sabbath`: Sunday worship, Seventh-day Adventist and Seventh Day
  Baptist readings; point if a card exists); 20:17–35 the Miletus speech (setting card: elders of Ephesus; 20:28 "overseers"
  and "shepherd the church of God which he obtained with his own blood" or "the church of the Lord" (variant; the
  Christological reading "the blood of his own"/"his own Son's blood"); 20:35 a saying of Jesus not in the Gospels (an
  agraphon; topic and note).
- 21:20–26 Paul's vow in the Temple at James' request (law observance; Jewish readings); 21:28–29 the Temple warning
  inscription; 21:38 the Egyptian (Josephus); 22:25–29 citizenship; 23:6 "I am a Pharisee"; 23:8 Sadducees deny resurrection,
  angel and spirit (what they denied: views); 23:26 Claudius Lysias' letter.
- 24:5, 14 "the Way", "the sect of the Nazarenes"; 24:7 omitted; 24:24–27 Felix and Drusilla; 25:11 the appeal to Caesar
  (provocatio and appellatio; Roman law, Sherwin-White); 26 the speech before Agrippa II, 26:28 "almost persuaded" (KJV) vs
  "In a short time you would persuade me" (the Greek ἐν ὀλίγῳ; note the KJV-reader point); 27 the voyage (nautical
  vocabulary, the northeaster Euraquilo/Euroclydon variant 27:14, 276 or 76 aboard 27:37 variant, Malta or Kefalonia views);
  28:3–6 the viper; 28:16; 28:25–28 Isaiah 6:9–10 and "this salvation of God has been sent to the Gentiles" (views on Israel
  in Luke-Acts: Jervell, Sanders, Tyson); 28:29 omitted; 28:30–31 the ending (why it stops: views).

## Settings

Every speech (about a third of Acts: Peter's in 2, 3, 4, 10, 11, 15; Stephen's; Paul's in 13, 14, 17, 20, 22, 24, 26;
Gamaliel's; James'; Demetrius'; the town clerk's; Tertullus'; Festus'), prayer (4:24–30), letter (15:23–29; 23:26–30) and
decree gets a `settings` card. `to` names the hearers in the scene; `readers` is Theophilus and Luke's churches; `why` says
what the speech was meant to do in the scene and what Luke meant it to do for readers.

## Lead decisions

- **Shared accounts (2026-10-25, review):** the first telling is the model where the Greek matches. Paul's call: chapter 9 ("flashed", "Brother Saul"; 22:13 says his sight came back; προχειρίζομαι "choose" at 22:14 and 26:16; διώκω always "persecute"); the goads proverb reads "Kicking against the goads is hard on you" (26:14; the 9:5 TR variant), replacing a first wording that matched the ESV. Peter's vision: 10:9–16 is the model for 11:5–10. The decree: 15:29's "food sacrificed to idols / blood / what is strangled / sexual sin" is the model for 15:20 and 21:25.
- **Terms:** lowercase "temple"; βῆμα "judgment seat" (12:21 "platform", where Herod speaks from it); αἵρεσις "party" for Pharisees and Sadducees, "sect" where outsiders name the Way; "in water" (1:5; 11:16, as Luke 3:16); κοινός "common" beside ἀκάθαρτος "unclean"; χάρις "favor" only in the Old Testament idiom "found favor".
- **Versification:** words sit under the KJV verse (4:6 "in Jerusalem"; 9:29 "spoke out boldly"); tools/texts.py was fixed so the word list now does this.
- **Editions:** NA27 and NA28 print the same text of Acts (NA28 changed only the Catholic Letters); never claim they differ.
- **One card per question:** Spirit after faith / initial evidence lives at 2:4; the blood rule at Leviticus 17; Acts points to them. "Messianic Jewish" was added to the tradition names for 21:20–26.
- **Quotes:** Paul's letters have no Plain English Translation yet, so Acts paraphrases them with references; re-quote them when the letters are written.
