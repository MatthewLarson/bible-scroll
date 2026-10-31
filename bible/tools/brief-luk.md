# Luke: brief for the part writers

Book id `Luk`. Read tools/brief-nt.md first; it holds the rules for every New Testament book. Eight parts, all written
at the same time (no part can see another's notes; refer to a verse instead of repeating a point). Luke is written
after Mark, so Matthew and Mark are both models.

| Part | Chapters | Verses | Contents |
|---|---|---|---|
| 01-02 | 1–2 | 132 | Prologue, the births of John and Jesus foretold, the Magnificat and the Benedictus, the birth, the shepherds, Simeon and Anna, the boy in the Temple. **Owns book.json.** |
| 03-05 | 3–5 | 121 | John the Baptist, the baptism, the genealogy, the testing, the Nazareth sermon, Capernaum, the catch of fish, the paralyzed man, Levi, fasting |
| 06-08 | 6–8 | 155 | Sabbath, the Twelve, the Sermon on the Plain, the centurion, the widow at Nain, John's question, the woman who anointed his feet, the women who followed, parables, the storm, the Gerasene man, Jairus |
| 09-10 | 9–10 | 104 | The Twelve sent, the 5,000, Peter's confession, the transfiguration, "he set his face to go to Jerusalem" (9:51), the Samaritan village, the seventy(-two), the good Samaritan, Martha and Mary |
| 11-13 | 11–13 | 148 | The Lord's Prayer, Beelzebul, signs, woes, the rich fool, "do not worry", readiness, Galileans and Siloam, the bent woman, the narrow door, the lament over Jerusalem |
| 14-17 | 14–17 | 135 | The banquet, the cost, the lost sheep, coin and son, the shrewd manager, the rich man and Lazarus, the ten with skin disease, the coming of the kingdom |
| 18-21 | 18–21 | 176 | The widow and the judge, the Pharisee and the tax collector, the children, the rich ruler, Zacchaeus, the minas, the entry and the weeping over Jerusalem, the Temple, controversies, the discourse on the end |
| 22-24 | 22–24 | 180 | The supper, the farewell at table, the Mount of Olives, the trials (Herod), the crucifixion, the empty tomb, Emmaus, the appearance, the ascension |

## Lenses (fixed; the same keys as Matthew, Mark, John and Acts)

- H **History and setting**: the census and Quirinius, Herod the Great and his sons, Pilate, Tiberius' fifteenth year,
  Galilee and Judea, Samaritans, the Temple and its courts, Roman law in the trials.
- C **Critical**: Luke's sources (Mark, the material shared with Matthew (Q, or Luke's use of Matthew: Farrer-Goulder),
  Luke's special material "L"), the prologue's claim (1:1–4), date (most 80–90; some before 70; some second century),
  Luke-Acts, the infancy narratives' history (views fairly), Proto-Luke.
- L **Literary**: Luke as narrator (the prologue in classical Greek, then Septuagint-style Greek in 1–2), the journey to
  Jerusalem (9:51–19:44), reversals (1:52–53; 6:20–26; 16:19–31), meals, prayer, the Holy Spirit, joy, "today" (2:11;
  4:21; 19:9; 23:43), parallels with Acts.
- J **Jewish reading**: the Temple frames the book (1:9; 24:53), Torah-keeping families (2:22–24, 39), Jewish scholars on
  Luke (Levine on the good Samaritan and the prodigal; Levine and Witherington), Luke and the Pharisees (dining with them
  7:36; 11:37; 14:1; warning 13:31), how passages were later read against Jews.
- T **Church tradition**: the Marian texts in the churches (Ave Maria, the Magnificat at Vespers, the Benedictus at
  Lauds, the Nunc Dimittis at Compline), Luke as the evangelist of the poor, the parables in preaching, the ox of the four
  living creatures, Luke as painter of Mary (legend).

## book.json (01-02 writer)

Lead, facts, authorship (Luke the physician of Colossians 4:14, the companion of the "we" passages; Irenaeus Against
Heresies 3.1.1, the anti-Marcionite prologue, the Muratorian fragment; Marcion's shortened Luke and the debate over which
came first (Klinghardt, BeDuhn, Roth) labeled as a minority view; the critical view of an anonymous author), date and
place, `audience` (Theophilus, Gentile Christians, God-fearers; the "most excellent" title; views on who Theophilus was),
purpose (1:4 "certainty", ἀσφάλεια), outline (1:1–4; 1:5–2:52; 3:1–4:13; 4:14–9:50; 9:51–19:44; 19:45–24:53), sections:
Luke's sources and the Synoptic problem (point to `synoptic-problem`; don't restate it), Luke-Acts, the infancy narratives
and history (Quirinius, the census), Luke and the poor, Luke and women, image prompts, book-wide `traditions` (Mary in
Luke: Catholic and Orthodox teaching from 1:28, 42, 48 vs Protestant readings, top `mary`, if 1:28's card is not the
better place; one card, not two).

Topics: create `content/proposals/nt/topics/luke.json` (title "Luke and Luke-Acts" or similar, aka "Luke the Evangelist",
"Saint Luke", "Luke-Acts", "Gospel of Luke", "Theophilus"). Acts owns the cores `acts`, `ascension`, `spiritual-gifts`,
`paul`, `stephen`, `council-of-jerusalem`; Luke contributes to them through topics.json. Mark owns `gospel-of-mark`.

## Topics and ids (check before creating)

- Already exist (and see brief-mrk.md and brief-act.md for the ones added in this round): jesus, mary, virgin-birth,
  john-the-baptist, census, bethlehem, magi, nazareth, genealogies, son-of-god, son-of-man, messiah, kingdom-of-god,
  parables, miracles, apostles, peter, pharisees, samaritans, sabbath, wealth, poverty, widows, women-in-ministry,
  mary-magdalene, lords-prayer, prayer, forgiveness, repentance, sheol (aka "Hades"), gehenna, communion-of-saints (aka
  "purgatory", "prayer for the dead"), eden (aka "paradise": 23:43 contributes there), lords-supper, passover, crucifixion,
  pontius-pilate, herod-family, judas-iscariot, resurrection, second-coming, olivet-discourse, abomination-of-desolation,
  testing-of-jesus, transfiguration, triumphal-entry, holy-spirit, angels, temple, jerusalem, hospitality, anti-judaism,
  church-israel, textual-history, satan.
- New cores (create in content/proposals/nt/topics/ in one write, after checking every proposals folder):
  - 01-02: `luke`; `magnificat` only if a song-of-Mary topic does not exist (aka "Song of Mary", and the Benedictus and
    Nunc Dimittis as aka on one `gospel-canticles` core is better: decide and create one, not three).
  - 14-17: `rich-man-and-lazarus` only if `sheol` and `wealth` cannot carry it well; prefer contributions. The lost son:
    contribute to `parables` and `repentance`.

## Parallels with Matthew and Mark (the models)

Matthew's Plain English Translation is published; Mark's Plain English Translation is written before Luke starts (content/books/Mrk/parts/*/plain.txt). Where
Luke's Greek matches Mark's or Matthew's, Luke's Plain English Translation matches theirs word for word; where it differs, it differs
exactly there. Read the parallel's plain.txt before writing each pericope. Matthew's fixed wordings (Mat/progress.md) and
any Mark lead decisions (tools/brief-mrk.md, "Lead decisions") are binding. Luke's own Greek often improves Mark's style
(Cadbury): say so in a C note where it matters.

Shared Greek with Acts (Luke 24:36–53 and Acts 1:1–11; Jesus' and Stephen's dying prayers, Luke 23:34, 46 and Acts
7:59–60): read the Acts Plain English Translation (content/books/Act/parts/*/plain.txt) and match where the Greek matches.

Luke's double tradition with Matthew (the Beatitudes 6:20–23 / Matthew 5:3–12; the Lord's Prayer 11:2–4 / Matthew 6:9–13;
the lost sheep 15:4–7 / Matthew 18:12–14 with different settings, per brief-nt.md): keep shared Greek the same.

## The Greek text

SBL base per brief-nt.md. Luke has the "Western non-interpolations" (Westcott and Hort's term for places where Codex Bezae
and Old Latin witnesses have the SHORTER text in Luke 22–24): 22:19b–20, 24:3 "of the Lord Jesus", 24:6, 24:12, 24:36,
24:40, 24:51, 24:52. P75 (about 175–225) has the longer text in all of them; most modern editions print the longer text.
Give each a variant entry with this history and a chapter-24 deep dive. 17:36 and 23:17 follow the omitted-verse policy.

## Places that need full treatment

- 1:1–4 the prologue (Greek historians' prologues, eyewitnesses, "orderly account", Theophilus).
- 1:5–25 Zechariah (the priestly division of Abijah; topic `priestly-divisions`); 1:26–38 the annunciation: 1:28
  κεχαριτωμένη "you who have been shown favor" / "full of grace" (Vulgate gratia plena; traditions card top `mary`:
  Catholic Immaculate Conception (Ineffabilis Deus 1854), Orthodox, Lutheran and Reformed readings; keep it to what the verse
  carries), 1:34 "since I do not know a man" (the vow reading of Augustine and Gregory of Nyssa vs the plain reading),
  1:35 (topic `virgin-birth`); 1:39–56 the visitation and Magnificat (1 Samuel 2:1–10, Hannah's song; 1:46 "Elizabeth said"
  in a few Old Latin witnesses and Irenaeus/Origen reports, the variant and the debate); 1:68–79 the Benedictus.
- 2:1–7 the census under Quirinius (Josephus dates his census to AD 6; Herod died 4 BC; views: an earlier census, πρώτη
  "before", Luke's error: fair; topic `census`); 2:7 "no room in the inn" (κατάλυμα: guest room, not inn, Kenneth Bailey;
  Luke 22:11), the manger; 2:14 "on earth peace among people with whom he is pleased" vs "good will toward men" (εὐδοκίας vs
  εὐδοκία, the KJV-reader point); 2:22–40 purification and presentation (Leviticus 12; whose purification: "their",
  variant), Simeon's Nunc Dimittis, the sword through Mary's soul, Anna; 2:41–52 the boy in the Temple, 2:49 "in my
  Father's house" / "about my Father's business".
- 3:1–2 the synchronism (Tiberius' 15th year, Annas and Caiaphas); 3:22 "You are my Son ... today I have begotten you" in
  Bezae and Old Latin (Psalm 2:7; Justin; adoptionist concerns; Ehrman's "orthodox corruption" view fairly); 3:23–38 the
  genealogy (back to Adam; differences from Matthew 1: views, Africanus' levirate solution, Mary's line theory, critical
  view; 3:33 the names variant; 3:36 the second Cainan from the Septuagint).
- 4:16–30 the Nazareth sermon (Isaiah 61:1–2 with 58:6, stopping before "the day of vengeance"; the synagogue service and
  the reading; Elijah and Elisha to foreigners); 4:44 "Judea" or "Galilee" (variant).
- 5:1–11 the catch (with John 21); 5:39 "the old is good" (variant "better").
- 6:1 "on the second-first Sabbath" (δευτεροπρώτῳ, Byzantine; meaning unknown); 6:5 in Bezae the man working on the
  Sabbath (the agraphon: "Man, if you know what you are doing, you are blessed"); 6:20–26 blessings and woes, "you poor" vs
  Matthew's "poor in spirit" (point to the Matthew 5 cards; Luke's own reading of poverty: liberation theology's
  "preferential option for the poor" and other readings: traditions card top `poverty` if the churches really differ);
  6:27–36 love your enemies (point to `nonviolence` and the Matthew card); 6:35 "expecting nothing in return" / "despairing
  of no one" (variant).
- 7:1–10 the centurion (elders sent; compare Matthew 8); 7:11–17 Nain; 7:36–50 the woman who was a sinner (not Mary
  Magdalene: Gregory the Great's homily 33 (591) and its legacy; the Orthodox distinction; 7:47 "her many sins are forgiven,
  because she loved much": cause or evidence? traditions card top `forgiveness` or `justification` only if churches really
  dispute it, Catholic and Protestant readings). 8:1–3 the women who supported them (Joanna, Susanna; "them" or "him",
  variant).
- 8:26 Gerasenes/Gadarenes/Gergesenes (point to Mark 5:1 and Matthew 8:28 variants; keep the same reading as Mark unless
  Luke's evidence differs); 8:43 "though she had spent all she had on doctors" (variant).
- 9:28–36 transfiguration ("his departure", ἔξοδος, 9:31); 9:51 "taken up" and the journey; 9:54–56 the TR's "as Elijah
  did" and "You do not know what spirit you are of; the Son of Man did not come to destroy people's lives but to save them"
  (variant, KJV-reader point); 9:57–62.
- 10:1 seventy or seventy-two (variant; Genesis 10's nations in Hebrew and Septuagint); 10:18 "I saw Satan fall like
  lightning"; 10:25–37 the good Samaritan (Levine; priests, Levites and corpse impurity; who the hearers were); 10:38–42
  Martha and Mary ("one thing is needed" vs "few things or one", variant; contemplative and active life in Catholic and
  Orthodox tradition; the reading of Mary as a disciple at his feet).
- 11:2–4 the Lord's Prayer (shorter; "Father" alone; 11:2 "may your Holy Spirit come upon us and cleanse us" in 700, 162,
  Gregory of Nyssa and Marcion's text as reported: variant; the Byzantine additions harmonized from Matthew; point to the
  Matthew 6 card); 11:5–13 (11:13 "Holy Spirit" vs "good things"); 11:27–28 "Blessed is the womb" (Marian readings);
  11:37–54 the woes (Pharisees and lawyers; fair).
- 12:10 the sin against the Spirit (point); 12:13–21 the rich fool; 12:49–53 fire and division; 13:1–5 the Galileans and
  Siloam (no outside record; Pilate's character in Josephus and Philo); 13:10–17 the bent woman ("a daughter of Abraham");
  13:31–33 "that fox"; 13:34–35 (with Matthew 23:37–39).
- 14:15–24 the great banquet (with Matthew 22:1–14; "compel them to come in" 14:23 and Augustine's use of it against the
  Donatists: honest note on its later use for coercion); 14:26 "hate" (Semitic idiom; Matthew 10:37); 15 the three lost
  things, one settings card each and one for the chapter (15:1–2: who the hearers are; brief-nt.md's point about Matthew
  18:12–14); 15:11–32 the two sons (the father, the older son, Jewish readings, the Prodigal in Christian art); 16:1–13 the
  shrewd manager (readings: the debt reduction cutting his own commission or the interest; "the master" Jesus or the rich
  man, 16:8); 16:16 "everyone forces his way in"; 16:18 divorce (point to the Matthew and Mark cards); 16:19–31 the rich man
  and Lazarus (parable or account; Hades and "Abraham's side"; the intermediate state: traditions card top `sheol`:
  Catholic purgatory and particular judgment, Orthodox, Protestant views, soul sleep (Seventh-day Adventist and Christian
  mortalists) and annihilationism; the Egyptian story of Setne and Si-Osire and Jewish parallels, carefully attributed);
  17:20–21 "the kingdom of God is among you / within you" (ἐντὸς ὑμῶν: both readings, with whom each is held); 17:36
  omitted; 17:37 the eagles/vultures.
- 18:1–8 the widow and the judge; 18:9–14 the Pharisee and the tax collector ("went home justified": traditions card top
  `justification` only if a card on that verse adds to the main justification cards elsewhere; the Pharisee portrayed
  fairly, with Jewish prayers of thanks); 18:15–17 "infants" (βρέφη: point to the Matthew 19:14 card); 19:1–10 Zacchaeus
  (present tense "I give" in 19:8: resolve or habit, readings); 19:11–27 the minas (Archelaus' journey to Rome in 4 BC,
  Josephus, as the background; 19:27 the slaughter of enemies: readings including that the king is not God); 19:41–44 the
  weeping over Jerusalem.
- 20 (follow Mark 11–12 and Matthew 21–22 where the Greek matches); 20:34–36 "children of the resurrection"; 21:20 "Jerusalem
  surrounded by armies" for Mark's "abomination of desolation" (dating Luke after 70: the argument and replies); 21:24 "until
  the times of the Gentiles are fulfilled" (dispensational, preterist, and church-and-Israel readings; card top
  `church-israel` if it adds to existing cards).
- 22:15–20 the supper (the longer and shorter texts; two cups; "Do this in remembrance of me" (ἀνάμνησις: Catholic and
  Orthodox sacrifice and memorial readings vs Reformed and Baptist memorial; point to the Matthew 26 lords-supper card, add
  only the anamnesis point); 22:24–38 the farewell at table; 22:31–32 "I have prayed for you that your faith may not fail ...
  strengthen your brothers" (papal readings, Vatican I Pastor Aeternus 4; Orthodox and Protestant; top `peter`: point to the
  Matthew 16 card if it covers Luke 22:32; else a short card); 22:36–38 "buy a sword" ("It is enough": readings; Christian
  pacifism and just war; top `nonviolence`); 22:43–44 the angel and the sweat like drops of blood (variant: absent in P75, 01
  corrector, A, B, W; present in 01*, D, L, Justin, Irenaeus; hematidrosis as a medical claim: careful); 22:66–71 the council.
- 23:2 the charges; 23:6–12 Herod Antipas (Luke alone); 23:17 omitted; 23:34a "Father, forgive them, for they don't know what
  they are doing" (variant: absent in P75, B, D*, W, Θ, sys; present in 01*, C, Byz, Irenaeus?: check reports; whether it was
  removed because of anti-Jewish feeling; Acts 7:60); 23:39–43 the criminal and "Today you will be with me in Paradise"
  (where the comma falls, σήμερον; soul sleep readings; topic `eden` aka "paradise"; the intermediate-state card belongs at
  16:19–31: point to it); 23:44–45 the darkness ("the sun's light failed", ἐκλιπόντος, an eclipse impossible at Passover's full
  moon; the Byzantine "the sun was darkened"); 23:46 Psalm 31:5; 23:47 "righteous" (vs Mark's "God's Son").
- 24:1–12 the women and the apostles' disbelief, 24:12 (variant); 24:13–35 Emmaus (Emmaus' location; sixty or a hundred and
  sixty stadia, variant; "the breaking of the bread", 24:30, 35 and Acts 2:42); 24:36–49 the appearance (24:36, 40 variants),
  "flesh and bones", 24:44 Law, Prophets and Psalms (the three-part canon); 24:50–53 the ascension and 24:51 "and was carried
  up into heaven" (variant; Acts 1:9–11 places it forty days later: views).

## Settings

Every speech, prayer, hymn (each canticle its own card), controversy and parable (Luke has the most parables: each its own
card) gets a `settings` card. Where a parable's setting differs from Matthew's (the lost sheep, the banquet, the minas and
the talents), say so on Luke's card.

## Lead decisions

- **Parallels (2026-10-26, review):** Luke follows Mark's and Matthew's reviewed Plain English Translation where the Greek matches (e.g. 3:17 "gather", 4:5 "showed", 5:37 "burst", 7:8 = Matthew 8:9, 8:5 = Mark 4:3, 9:49 "hinder", 23:51 "looking for"), and differs exactly where Luke's Greek differs.
- **Terms:** ὁ λόγος τοῦ θεοῦ "the word of God" (5:1; 8:11, 21; 11:28), and in 8:11–15 "the word" (Mark has "the message"; Luke says "the word of God" at 8:11); ἀληθῶς λέγω ὑμῖν "I tell you truly" (9:27; 12:44; 21:3), ἀμήν "Amen, I tell you"; ἐπιστάτης and δεσπότης both "Master", each glossed with its Greek word; ναός "sanctuary", ἱερόν "temple" (lowercase); κωλύω "hinder"; διώκω "persecute"; φρόνιμος "sensible" for good sense, "shrewd" for worldly cleverness (16:8); κληθήσεται "will be called"; "a son / a daughter of Abraham" (13:16; 19:9); "At that very hour" (10:21; 13:31); "glory in the heights above" (2:14; 19:38).
- **Luke 24:51 / Acts 1:11:** the same Greek is "into heaven" in Luke and "into the sky" in Acts on purpose (Acts is about watching the sky); notes link them.
- **Western non-interpolations:** the Plain English Translation follows the longer text everywhere (P75, NA28, THGNT), against SBL at 24:3 and 24:36; 22:43–44 and 23:34a are printed with full variant entries.
- **Cards:** one card per question across the site: the intermediate state lives at 16:19–31; justification at Genesis 15:6 (18:14 asks only what it adds); interest at Psalm 15:5; no card at 14:23 (all churches now reject compulsion). Settings cards say where Matthew or Mark set the scene differently; `readers` never states Luke's date as settled.
- **Witnesses:** Tischendorf's 8th edition for Luke is in the Source Library (book 6952e4cc77f38f6761bc8c0b); never attribute a reading to Metzger unless his commentary discusses that verse.
