# Matthew: brief for the part writers

Book id `Mat`. Read tools/brief-nt.md first; it holds the rules for every New Testament book. Eight parts, all written
at the same time (no part can see another's notes; refer to a verse instead of repeating a point):

| Part | Chapters | Contents |
|---|---|---|
| 01-04 | 1–4 | Genealogy, birth and infancy, John the Baptist, the testing, the first call. **Owns book.json.** |
| 05-07 | 5–7 | The Sermon on the Mount (discourse 1) |
| 08-10 | 8–10 | Ten miracles, the call of Matthew, the mission discourse (discourse 2) |
| 11-13 | 11–13 | John's question, Sabbath conflicts, Beelzebul, the parables discourse (discourse 3) |
| 14-18 | 14–18 | Feedings, walking on water, Peter's confession, the transfiguration, the church discourse (discourse 4) |
| 19-23 | 19–23 | Toward Jerusalem, divorce, the Temple, controversies, the woes on scribes and Pharisees |
| 24-25 | 24–25 | The discourse on the Mount of Olives (discourse 5) |
| 26-28 | 26–28 | The passion, the resurrection, the Great Commission |

## Lenses (fixed; all four Gospels use the same keys)

- H **History and setting**: Second Temple Judaism, Roman Galilee and Judea, Herod's family, what can be known of the historical Jesus.
- C **Critical**: sources and editing (Matthew's use of Mark and of the material shared with Luke, often called Q; the alternatives: Farrer, Griesbach, Matthean priority), date and community.
- L **Literary**: Matthew as a story: the five discourses ending "When Jesus had finished...", fulfillment formulas, Jesus as new Moses, inclusio of 1:23 and 28:20.
- J **Jewish reading**: Matthew as a Jewish book in a debate with other Jews after AD 70; Jewish scholars on Jesus and on Matthew; rabbinic parallels; how passages were later used against Jews.
- T **Church tradition**: how the church fathers, the creeds, the liturgy and the churches have read the passage (the most-used Gospel in the early church).

## book.json (01-04 writer)

Lead, facts, authorship (Papias on Matthew's "oracles in the Hebrew dialect"; the tax collector; the critical view of an anonymous Jewish-Christian scribe, 13:52), date (before or after AD 70; most critical scholars 80–90), audience (Jewish-Christian communities, perhaps Antioch in Syria or Galilee, defining themselves against the synagogue after the Temple fell; views), outline by the five discourses, the Synoptic problem in a section, Matthew's use of the Old Testament (the ten or so fulfillment quotations), Matthew and the Law (5:17–20), Matthew and the Jewish people (including 27:25 and its history), image prompts, and the book-wide `traditions` (for example, Peter and the church). Create a core topic `jesus` if none exists by then (check content/topics/ and proposals first) and a `synoptic-problem` core; add a `matthew` core for the evangelist and book.

## Places that need full treatment

- 1:1–17: the genealogy (three sets of fourteen, the four women plus Mary, differences from Luke 3:23–38, the missing kings in 1:8). 1:16 variant (the Sinaitic Syriac "Joseph ... fathered Jesus").
- 1:18–25: the virgin birth; parthenos and Isaiah 7:14 ('almah); 1:25 "until" and Mary's perpetual virginity (traditions card, top `mary`); Joseph as "righteous".
- 2: the magi, the star (views, including astronomical theories), Herod and the infants (no outside record; views), "He will be called a Nazarene" (2:23, no clear source).
- 3:15 "to fulfill all righteousness"; 4:1–11 the testing and Deuteronomy 6–8.
- 5:3–12 the Beatitudes (Luke 6:20–26); 5:17–20 the Law; the six "You have heard ... but I say" (5:21–48); 5:32 and 19:9 the exception clause (porneia), divorce and remarriage (traditions card); 5:33–37 oaths (Anabaptist and Quaker view); 5:38–42 non-resistance (Anabaptist pacifism vs just-war churches); 6:9–13 the Lord's Prayer (6:13 doxology variant, "the evil one" or "evil", "debts", epiousios "daily bread"); 7:1 judging.
- 8–9: the centurion's faith (8:11–12), "let the dead bury their dead", the Gadarene/Gergesene/Gerasene variant (8:28), the call of Matthew, fasting.
- 10:5–6 "only to the lost sheep of Israel" against 28:19; 10:23 "before the Son of Man comes".
- 11:11–14 John as Elijah; 11:12 the kingdom "suffers violence" (debated); 11:25–30.
- 12:1–14 the Sabbath (Pharisaic halakhah, the Mishnah's 39 works, Hillel and Shammai where relevant); 12:31–32 the sin against the Spirit (traditions as needed); 12:40 Jonah and "three days and three nights"; 12:46–50 Jesus' brothers (top `mary` and topic brothers-of-jesus).
- 13: each parable its own settings card; why Jesus speaks in parables (13:10–17 and Isaiah 6:9–10); the scribe trained for the kingdom (13:52).
- 14:22–33; 15:21–28 the Canaanite woman; 16:13–20 "You are Peter, and on this rock" (petros/petra, the keys, binding and loosing; traditions card on Peter and the papacy with Catholic, Orthodox, Lutheran, Reformed and Baptist answers); 16:28; 17:1–13; 17:21 (omitted verse); 17:24–27 the Temple tax; 18:11 (omitted); 18:15–20 church discipline (Anabaptist ban, Catholic, Reformed); 18:18 binding and loosing (with John 20:23).
- 19:3–12 divorce (Hillel and Shammai on Deuteronomy 24:1) and eunuchs (celibacy, traditions); 19:16–30 the rich young man ("Why do you ask me about what is good?" vs "Why do you call me good?", Byzantine); 20:1–16; 21:12–17 the Temple; 21:33–46 the tenants and "the kingdom will be taken from you" (supersession readings, fairly); 22:15–22 Caesar; 22:34–40; 23 the woes (who the Pharisees were; the polemic in its first-century setting; 23:14 omitted verse; "Moses' seat"); 23:9 "call no man father" (traditions only if churches really differ in teaching).
- 24–25: the abomination of desolation (Daniel 9:27; 11:31; 12:11; topic abomination-of-desolation exists), "this generation" (24:34), 24:36 "nor the Son" (variant), preterist, futurist, idealist and partial-preterist readings (top `end-times` only if you create it; otherwise millennium/rapture as fits), "one taken, one left" (24:40–41, rapture card, top `rapture`), the ten virgins, the talents, the sheep and goats (25:31–46: who are "the least of these"?, eternal punishment views).
- 26:26–29 the Lord's Supper ("This is my body"; traditions card top `lords-supper`, with Catholic, Orthodox, Lutheran, Reformed, Baptist, Anglican answers); 26:39 Gethsemane; 26:64; Judas' death (27:3–10 and Acts 1:18–19; "Jeremiah" in 27:9); 27:16–17 "Jesus Barabbas" (variant); 27:25 "His blood be on us and on our children" (deep dive: meaning in Matthew, use against Jews, Nostra Aetate and modern church statements); 27:46 Psalm 22; 27:51–53 the saints raised; 28:1–10; 28:11–15; 28:16–20 the Great Commission (baptism, triune formula, top `baptism` card on infant vs believer's baptism if no earlier card covers it better).

## Synoptic parallels

Matthew is the model for Mark and Luke. Give the parallel references in a note or the chapter `echoes`
wherever a passage has them, and say briefly in a note where Matthew differs from Mark in a way that matters.
