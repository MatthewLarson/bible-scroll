# Mark: brief for the part writers

Book id `Mrk`. Read tools/brief-nt.md first; it holds the rules for every New Testament book. Five parts, all written
at the same time (no part can see another's notes; refer to a verse instead of repeating a point):

| Part | Chapters | Verses | Contents |
|---|---|---|---|
| 01-03 | 1–3 | 108 | Title, John the Baptist, baptism and testing, the first call, the day in Capernaum, the five conflict stories (2:1–3:6), the Twelve, Beelzebul, Jesus' family. **Owns book.json.** |
| 04-06 | 4–6 | 140 | The parables by the lake, the storm, the Gerasene man, Jairus' daughter and the bleeding woman, Nazareth, the mission of the Twelve, John's death, the 5,000, walking on water |
| 07-09 | 7–9 | 125 | Purity and "all foods clean", the Syrophoenician woman, the 4,000, Peter's confession, the first passion prediction, the transfiguration, the boy with the spirit, "whoever is not against us" |
| 10-12 | 10–12 | 129 | Divorce, the children, the rich man, the third prediction, James and John, "a ransom for many", Bartimaeus, the entry, the fig tree and the Temple, the tenants, Caesar, the resurrection, the great commandment, the widow |
| 13-16 | 13–16 | 176 | The discourse on the Mount of Olives, the anointing, the supper, Gethsemane, the young man who fled, the trials, the crucifixion, the empty tomb (16:1–8), the later endings (16:9–20) |

## Lenses (fixed; all four Gospels and Acts use the same keys)

- H **History and setting**: Roman Galilee and Judea, Herod Antipas, the Decapolis, Tyre and Sidon, Second Temple Judaism, what can be known of the historical Jesus, Mark's Aramaic words (talitha koum, ephphatha, korban, Abba, Eloi).
- C **Critical**: Markan priority (Mark as the source of Matthew and Luke on most views; the minority Griesbach/Two-Gospel view that Mark used both), Papias on Mark as Peter's interpreter, date (before or after AD 70: the debate over chapter 13), place (Rome, Syria, Galilee), the endings.
- L **Literary**: Mark as a story: "immediately" (εὐθύς), the "sandwiches" (intercalations: 3:20–35; 5:21–43; 6:7–30; 11:12–25; 14:1–11; 14:54–72), the messianic secret (Wrede and replies), the disciples who fail to understand, three passion predictions (8:31; 9:31; 10:33–34), the torn heavens (1:10) and torn curtain (15:38), the abrupt end at 16:8.
- J **Jewish reading**: Jesus inside first-century Judaism (purity, Sabbath, the Temple, Pharisees and scribes as fellow Jews in debate), Jewish scholars on Jesus and on Mark (Vermes, Levine, Fredriksen, Boyarin on 7:1–23), how passages were later read against Jews.
- T **Church tradition**: how the church fathers, the creeds, the liturgy and the churches have read the passage (Mark long neglected as a "shortened Matthew", Augustine; rediscovered in the 1800s; the lion of the four living creatures).

## book.json (01-03 writer)

Lead, facts, authorship (Papias via Eusebius, Church History 3.39.15: Mark as Peter's interpreter, "not in order"; the
John Mark of Acts 12:12, 25; 15:37–39, Colossians 4:10, Philemon 24, 1 Peter 5:13; the critical view of an anonymous
author), date (most scholars 65–75; views on before and after the Temple's fall), place and readers (Rome after the
Neronian persecution is the traditional view and still the most common; Syria or Galilee are the main alternatives:
fair, with names), audience (`audience`: Gentile readers who need Jewish customs explained, 7:3–4; Latinisms such as
κεντυρίων, ξέστης, κοδράντης; a suffering church), outline (Galilee 1:14–8:21, the way 8:22–10:52, Jerusalem 11–16),
sections: Markan priority and the Synoptic problem (point to the `synoptic-problem` topic; don't restate it), the
messianic secret, the endings of Mark, Mark's Christology (1:1; 1:11; 9:7; 15:39), image prompts, and book-wide
`traditions` if churches really differ (for example the necessity of baptism, 16:16, if 13-16 does not cover it better:
coordinate by pointing to 16:16, not repeating).

Topics: the existing topic `mark` is the Mark of the Beast. Create the core for the evangelist and the book as
`content/proposals/nt/topics/gospel-of-mark.json` (title "The Gospel of Mark", aka "John Mark", "Mark the Evangelist",
"Saint Mark", "Markan priority" only if `synoptic-problem` does not already carry it; check). Other parts contribute
through their topics.json.

## Topics and ids (check before creating)

- Demons and exorcisms: use `fallen-angels` (aka "demons") and `miracles` (aka "exorcism"); `satan`; `evil-spirit` is the
  Old Testament topic. Do not create a demons topic.
- Already exist: jesus, son-of-god, son-of-man, messiah, kingdom-of-god, parables, miracles, apostles, peter, pharisees,
  sabbath, food-laws, clean-and-unclean, marriage, transfiguration, triumphal-entry, olivet-discourse,
  abomination-of-desolation, lords-supper, passover, crucifixion, pontius-pilate, judas-iscariot, mary-magdalene, mary,
  brothers-of-jesus, john-the-baptist, herod-family, galilee, nazareth, testing-of-jesus, synoptic-problem,
  textual-history, unforgivable-sin, forgiveness, wealth, anointing, baptism, fasting, healing, faith, gehenna,
  resurrection, second-coming, anti-judaism, church-israel, temple, apostles.
- 04-06 may propose `messianic-secret` only if the gospel-of-mark core will not carry it; prefer a section in
  `gospel-of-mark` (tell 01-03 through the progress log; 01-03 writes the section).

## Parallels with Matthew (the model)

Matthew's Plain is published and is the model (brief-nt.md, "Parallel passages"). Where Mark's Greek matches
Matthew's, Mark's Plain matches Matthew's word for word; where the Greek differs, the English differs exactly there.
Read the Matthew parallel's plain.txt before writing each pericope (`content/books/Mat/parts/*/plain.txt`) and give the
parallels in notes or chapter `echoes`. Matthew's model wording already fixed (Mat/progress.md): "Repent, because the
kingdom of heaven has drawn near" (Mark has "kingdom of God" and "The time has been fulfilled", 1:15); "tripped up"
(σκανδαλίζω); "skin disease" (λέπρα); "Amen, I tell you"; "the weeping and the grinding of teeth"; "offspring of vipers";
"bowed down before him" (προσκυνέω); "the ruler of the demons"; "If you are God's Son"; Gehenna. Luke is written after
Mark and follows it.

Where Mark is fuller than Matthew (Mark's vivid details: the cushion 4:38, the green grass 6:39, "he looked at him and
loved him" 10:21) or where Matthew softens Mark (Mark 6:5 "could not"; 10:18 "Why do you call me good?"; 4:38 "don't
you care"), say so in a C note; these are standard data in the Synoptic debate.

## The Greek text

SBL base, per brief-nt.md. Mark's Editio Critica Maior has not been published as a whole; mention the ECM only where
you know a published reading for certain. Mark has many Western readings in Codex Bezae (05) and W (032): name them where
an English reader would notice.

## Places that need full treatment

- 1:1 "the Son of God" (variant: absent in the first hand of Sinaiticus, Θ, 28c, Origen; present in B D L W; SBL brackets?
  check the SBL text and say what it prints) and "the beginning of the good news" (title of the book or of 1:1–13).
- 1:2 "in Isaiah the prophet" (the quotation joins Malachi 3:1 and Exodus 23:20 to Isaiah 40:3; the Byzantine "in the
  prophets"); 1:10 the heavens "torn open" and 15:38 the curtain "torn" (same verb, σχίζω; keep the same English).
- 1:41 "moved with compassion" or "angry" (ὀργισθείς in D and Old Latin; NA28 and SBL σπλαγχνισθείς; THGNT and some
  scholars argue for "angry" as the harder reading; weigh fairly).
- 2:23–28 Sabbath grain; 2:26 "when Abiathar was high priest" (1 Samuel 21 names Ahimelech; views); 2:27 "The Sabbath
  was made for people, not people for the Sabbath" (rabbinic parallel Mekhilta on Exodus 31:13).
- 3:21 "his own people" said "He is out of his mind" (who; 3:31–35 the sandwich); 3:28–30 the unforgivable sin (link the
  existing topic and Matthew 12 card; card only if Mark adds something).
- 4:10–12 "so that they may look and look but not see" (ἵνα; Isaiah 6:9–10; readings); 4:11 "the secret (mystery)".
- 5:1 Gerasenes / Gadarenes / Gergesenes (variant, with Matthew 8:28); "Legion"; the pigs and Jewish purity.
- 6:3 "the carpenter, the son of Mary" (τέκτων; the variant "the son of the carpenter" in P45 and others; "son of Mary"
  readings, including the claim of a slur and replies) and the brothers and sisters (traditions card, top
  `brothers-of-jesus`: Helvidian, Epiphanian, Hieronymian views; Catholic, Orthodox, Protestant). 6:5 "could not".
- 6:13 anointing the sick with oil (traditions card, top `anointing`: the Catholic sacrament of the anointing of the
  sick, Orthodox Holy Unction, Protestant readings, with James 5:14).
- 6:14–29 John's death (Josephus, Antiquities 18.116–119; 6:22 "his daughter Herodias" vs "the daughter of Herodias
  herself", variant; Herodias, Philip and Salome).
- 7:1–23 purity: handwashing (who kept it in the first century, Pharisaic tradition and the later Mishnah Yadayim), 7:3
  πυγμῇ "with the fist", 7:4 "and beds" variant, korban (7:11; the Jerusalem ossuary inscription), 7:16 (omitted verse),
  7:19 "Thus he declared all foods clean" (καθαρίζων: Mark's comment or a Jesus saying; the Byzantine καθαρίζον; Jewish
  readings, Boyarin and Furstenberg that the dispute is about handwashing, not kosher law; traditions card top
  `food-laws` if Matthew 15:11's card does not already say it: point to it and add only what is new).
- 7:24–30 the Syrophoenician woman ("dogs", κυνάρια); 7:31–37 and 8:22–26 two healings in stages (literary frame of
  8:27–10:52, the way of discipleship).
- 8:27–9:1 Peter's confession (Mark has no "on this rock"; say so; point to the Matthew 16 card); 8:31 the first
  prediction; 8:38; 9:1 "some standing here" (views: transfiguration, resurrection, Pentecost, AD 70, a mistaken
  expectation).
- 9:29 "by prayer" / "and fasting" (variant); 9:38–41 the outside exorcist; 9:42–50 Gehenna, 9:44 and 9:46 (omitted
  verses), 9:49 "salted with fire" (and its variant).
- 10:2–12 divorce without Matthew's exception; 10:12 a woman divorcing her husband (Roman law, not Jewish; Herodias and
  Salome; what it says about Mark's readers); traditions card top `marriage` only if it adds to the Matthew 5:32 and
  19:9 cards: point to them.
- 10:13–16 the children (infant baptism readings; point to the Matthew 19:14 card); 10:17–31 the rich man ("Why do you
  call me good?"; 10:24 "for those who trust in riches", variant; the camel); 10:45 "a ransom for many" (λύτρον; Isaiah
  53; atonement views as a traditions card only if churches really differ on this verse: ransom, satisfaction, penal
  substitution, Christus Victor, moral influence; top `sacrifice` or a new `atonement` topic if none exists: check).
- 11:12–25 fig tree and Temple (the sandwich), "a house of prayer for all the nations" (Isaiah 56:7; Mark alone keeps "for
  all the nations"), 11:26 (omitted verse).
- 12:1–12 the tenants (Isaiah 5; supersession readings, fairly; point to Matthew 21:43 card); 12:13–17 Caesar; 12:18–27 the
  Sadducees; 12:28–34 the Shema (Mark alone quotes Deuteronomy 6:4 in full; topic `shema`) and the friendly scribe;
  12:35–37 David's son; 12:41–44 the widow's coins (praise or lament? both readings).
- 13: point to the Matthew 24 deep dives instead of repeating them; what Mark adds: 13:9–13 for readers on trial, 13:14
  "let the reader understand" and the masculine participle ἑστηκότα (the Caligula crisis of AD 40 and the war of 66–70 as
  settings for dating), 13:32 "nor the Son" (no variant in Mark worth noting? check; Christological readings: traditions
  only if they differ), 13:33–37 "keep awake".
- 14:3–9 the anointing (and John 12, Luke 7); 14:12 the day of the supper (Passover or not; point to Matthew 26 and John
  19:14); 14:22–25 (point to the Matthew 26:26–28 cards; add only what Mark adds); 14:36 "Abba"; 14:51–52 the young man who
  fled naked (views: Mark himself, a symbol, 16:5; Secret Mark is a tier-3 work: Morton Smith's 1958 find, the forgery
  debate, Carlson, Brown, Jeffery; handle under canon-tiers rules if it is mentioned; propose a works.json entry
  `secret-gospel-of-mark` in content/proposals/nt/works.json if no entry exists); 14:62 "I am" (ἐγώ εἰμι; Θ f13 "You say
  that I am"); 14:72 "the second time" (Mark's two cockcrows, variant).
- 15:7 Barabbas; 15:21 Simon of Cyrene, "father of Alexander and Rufus" (Romans 16:13; the Kidron ossuary); 15:25 "the
  third hour" (vs John 19:14 "the sixth hour"; views); 15:28 (omitted verse); 15:34 Eloi (Aramaic; Psalm 22:1; "why have
  you forsaken me": readings); 15:38; 15:39 the centurion's "God's Son" (anarthrous: "a son of God" or "God's Son":
  grammar and Colwell, fairly); 15:40–41, 47 the women.
- 16:1–8: the ending at 16:8 "for they were afraid" (ἐφοβοῦντο γάρ): did Mark mean to end here? (intended ending, lost
  ending, unfinished), literary readings. 16:9–20 in full under "## A later ending: ..." per brief-nt.md, with a chapter
  deep dive on the evidence: Sinaiticus and Vaticanus end at 16:8 (Vaticanus' blank column), Eusebius and Jerome on the
  manuscripts known to them, the Shorter Ending (Codex Bobiensis, k, alone; in Greek in L Ψ 099 0112 579 and others with
  the Longer), the Freer Logion in W after 16:14 (translate it in the variant), Irenaeus (Against Heresies 3.10.5) quoting
  16:19 as Mark's, the Longer Ending's dependence on the other Gospels and Acts. 16:16 "whoever believes and is baptized"
  (traditions card top `baptism`: necessity of baptism; Catholic, Orthodox, Lutheran, Reformed, Baptist, Church of
  Christ), 16:17–18 the signs and serpent handling (traditions card top `miracles` or `holy-spirit`: continuationist and
  cessationist views; the Appalachian serpent-handling churches as a small movement; how most churches read it; the
  ending's status in the Catholic Council of Trent's canon and in Protestant churches).

## Settings

Every speech, controversy, parable (each its own card; 4:3–9, 4:26–29 the seed growing by itself, Mark alone, 4:30–32,
12:1–12), prophecy and prayer gets a card. `readers` is Mark's own church; the two layers never blur. Where a saying's
setting differs from Matthew's, say so.

## Lead decisions

- **Parallels (2026-10-25, review):** Mark follows Matthew's published Plain where the Greek matches; where Matthew varies its English for one Greek verb (ἐπιτιμάω "spoke sternly / strict orders / rebuke"; κηρύσσω "preach / announce / proclaim"), Mark follows the parallel and the notes that argue from the link name the Greek word.
- **Fixed wordings:** πάντα δυνατά "anything is possible" (9:23; 10:27; 14:36 = Matthew 19:26); κοινός "common" at 7:2, 5 (κοινόω stays "make unclean"); σχίζω "torn" (1:10 "tearing open"; 15:38) but διαρρήγνυμι "ripped" (14:63); ἐξίστημι "beside themselves"; "a ransom in place of many" (10:45 = Matthew 20:28); "pick up his cross"; "the message" for ὁ λόγος; "Be muzzled"; "John the Baptizer" / "the Baptist" kept distinct; "real nard"; "forecourt"; lowercase "temple".
- **1:41:** the Plain follows SBL's "angry" (ὀργισθείς) as the harder reading; the variant gives the far stronger manuscript support for "moved with compassion". (The first brief wrongly said SBL reads "compassion".)
- **The road (8:22–10:52):** the full treatment is the Mark 8 deep dive; chapter 10 points to it.
- **Settings:** each card says where Matthew or Luke set the saying differently; the Roman-church setting is stated once with its alternatives, not on every card.
- **Luke** follows these wordings where its Greek matches Mark's.
