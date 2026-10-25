# Hostile review: "who it was for, and why" in Jude and Revelation

Scope: Jude `book.json` `audience` and `chapters.json` `settings` (content/books/Jud/); Revelation
`content/overlays/Rev.json` (`audience` and 24 `settings`, merged into content/books/Rev/ by tools/import-rev.js).
Nothing else was reviewed.

## Verdict

Both books are in good shape mechanically, and most of the work is sound. Every quoted phrase in both overlays
matches the site's Plain wording. I checked all of them, including the unreferenced quotes the build does not
check. There are no em-dashes, the English is at the right level, and every cited key exists. Most of the city
history is right: Smyrna's temple to Roma, Pergamum's temple to Augustus and Rome, the two falls of Sardis,
Philadelphia's earthquakes and new name, the Laodicea earthquake of AD 60 (Tacitus, *Annals* 14.27),
Thyatira's guilds, Irenaeus, Tertullian and Jerome.

The weaknesses are in fairness and coverage, not in made-up facts:
- The Revelation audience states the "guild membership was required to make a living" thesis as fact. It cites
  Harland, who argues against the strong form of that thesis.
- The Laodicea card treats the local-water, wool and eye-salve reading as settled. It cites Koester, who
  rejects that reading.
- The historicist lens is missing from every chapter card.
- The 144,000 card gets wrong who sings, and it gives no views.
- The Philadelphia card handles "synagogue of Satan" with no views and no caution.
- Several direct addresses to the hearers have no card: the martyrs' prayer (6:10), the second call to
  prophesy (10:8–11), 13:9–10, 13:18 and 16:15.
- Jude's audience "why" states the minority reading of his use of 1 Enoch as fact, against its own views.

**Counts: 0 critical, 8 major, 12 minor.**

## Checks run

- `node tools/build.js --check Jud`: 0 errors, 0 warnings.
- `node tools/build.js --check Rev`: 0 errors, 87 warnings. All 87 are the old ones. None comes from the
  overlay's `audience` or `settings`. The merged chapters.json has 24 settings, as in the overlay.
- A script matched every quoted string in both overlays against plain.txt, treating "..." as a gap. Every quote
  matched. No em-dashes were found.

## Findings

### Major

**1. Major. Rev.json `audience.why` (also 2:18–29, 14:6–13 views, 18:1–8): the guild thesis is stated as fact,
and the cited source does not support it.**
The text says: "a merchant or craftsman joined a trade guild whose meals honored a patron god and the emperor,
and buying and selling went through those networks. To refuse was to lose work, friends and standing." The
14:6–13 views add "the trade that required it."
- This is the Ramsay and Hemer reconstruction. No first-century evidence shows that trade "went through" the
  associations, or that a Christian who stayed out lost his living.
- Harland (the cited key `harland`) argues the opposite on the main points. In his view, associations were
  voluntary groups, mainly social and religious. Imperial honors in them were common but not imposed, and many
  Jews and Christians took part in civic and association life. He reads John's stance as one strict position
  against Christians who accommodated. He does not describe the general pressure the card describes.
- Friesen supports the claim that imperial cults were everywhere in civic life. He does not support the claim
  that trade required them.

Fix:
- Hedge the sentence, for example: "Many trade and social clubs held meals in honor of a god and the emperor.
  A Christian who stayed away could lose friends, business and standing."
- Add a view to `audience.views`: "How much pressure? Some scholars (Ramsay, Hemer) think guild life made
  refusing costly. Others (Harland) think joining was voluntary, and that John was taking a strict line
  against Christians who saw no harm in it."
- In 14:6–13, change "the trade that required it" to "the trade and civic life bound up with it."

**2. Major. Rev.json `audience.to`: "Smyrna and Philadelphia were poor and slandered and faced prison."**
Only Smyrna is called poor (2:9) and warned of prison (2:10). Philadelphia has "little strength" (3:8). Neither
poverty nor prison appears in its letter.

Fix: "Smyrna was poor, slandered and about to face prison. Philadelphia had little strength and faced the same
slander."

**3. Major. Rev.json settings ch3, 3:14–22 (Laodicea): a local-context reading is stated as fact, and the
cited source argues against it.**
- "Jesus answers with the city's own trades: buy true gold, white clothes instead of famous black wool, and
  salve for blind eyes" is stated flatly.
- The water image is hedged ("may"), but the views only argue about what hot and cold mean. They never ask
  whether there is any local reference at all.
- Koester (cited `koester`) argues in "The Message to Laodicea and the Problem of Its Local Context" (*NTS*
  49, 2003), and in his Anchor Yale commentary, that the images come from common dining practice and goods
  known across the region, not from Laodicea's water, banks, wool or medical school.
- The eye-salve link rests on Ramsay's inference from Strabo's note of a medical school near the city.

Fix:
- Hedge: "Jesus may answer with the city's own trades."
- Add a view: "Local or common images. Ramsay and Hemer tie the gold, wool, salve and water to Laodicea's
  banks, black wool, medical school and aqueduct. Koester argues they are images any reader in the region
  would know, from dining and trade."
- Add `ramsay` to `s`.

**4. Major. Rev.json settings: direct words to the hearers, and a prayer, have no card.**
The brief asks for every speech, prayer, song and message. These are missing, and they are the words most
clearly meant for the first hearers:
- **6:9–11**, the martyrs' prayer "Holy and true Master, how long...?" and the answer to them. The 16:5–7 card
  even says it "answers the martyrs' cry in 6:10," but 6:10 has no card of its own.
- **10:1–11**, the angel's oath ("There will be no more delay!") and John's new call: "You must prophesy again
  about many peoples, nations, languages, and kings." This frames the second half of the book for the
  churches.
- **13:9–10 and 13:18**: "Whoever has ears should listen", "This calls for patient endurance", "This calls for
  wisdom... figure out the number." These are John's own asides to the hearers, and the key to the 666
  debate (Nero in gematria, and the 616 variant). Chapter 13 has no card at all.
- **16:15**, Jesus breaking into the bowl visions: "Look, I am coming like a thief! Blessed is the one who
  stays awake and keeps their clothes on." This echoes the letters to Sardis (3:3–4) and Laodicea (3:18).

Fix: add a card for each. The 13:18 card needs views: Nero (preterist, and many late-date scholars), a future
person (futurist), the papacy or Lateinos (historicist), and the number of imperfection (idealist).

**5. Major. Rev.json settings: the historicist lens is missing from every chapter card.**
The book has four lenses (P, H, F, I). The audience views give all four. But the chapter views name
preterists, futurists and idealists (7:9–17, 14:6–13, 17:7–18, 18:9–24, 22:6–21) and never historicists. That
leaves out the reading that ruled Protestant interpretation for three centuries: Babylon and the beast as papal
Rome, the mark as loyalty to it, and "soon" as the start of a sequence through church history.

Fix: add a historicist sentence to 17:7–18 ("Babylon as papal Rome, the reading of the Reformers"), 18:9–24,
14:6–13 (the mark), 7:9–17 and 22:6–21. Cite `gregg` (the four views side by side) or `kovacs`.

**6. Major. Rev.json settings ch14, 14:1–5: the singers are misnamed, and the 144,000 card has no views.**
- `by: "the 144,000 with the Lamb on Mount Zion"` and `what: "The new song of the 144,000"`. But in 14:2–3
  John hears a sound "like harpists". "They sang a new song in front of the throne," and "No one could learn
  the song except the 144,000." Most commentators (Beale, Mounce, Koester) take the singers to be a heavenly
  choir, with the 144,000 learning the song. Some identify the two groups.
- `to: "heard by John before the throne"` names no hearer and mixes up the scene.
- "An army that keeps itself pure from the idolatry Revelation calls sexual sin" combines two debated readings
  as fact: Bauckham's holy-war census, and virginity as a metaphor for refusing idolatry. Literal celibacy is a
  third reading.
- Who the 144,000 are is one of the most debated questions in the book, and the card gives no views: ethnic
  Israel or Jewish believers (many futurists), the whole church (Bauckham, Beale), or the martyrs.

Fix:
- Change `what` to "The new song before the throne, learned by the 144,000".
- Change `by` to "a choir in heaven, like harpists (some say the 144,000 themselves)".
- Change `to` to "sung before the throne, the creatures and the elders; heard by John".
- Hedge "army".
- Add views on who the 144,000 are and on what "pure" means.

**7. Major. Rev.json settings 2:8–11 and 3:7–13: "synagogue of Satan" is handled fairly in only one of its two
cards.**
- The Smyrna card has views and a good caution. Its first view, though ("members of the local synagogue who
  denied that Gentile believers belonged to Israel"), is a narrow guess at what the dispute was about.
- The common reading is simpler: members of the local Jewish community opposed and perhaps denounced the
  Christians, and John denies them the name "Jews".
- The card leaves out the point that matters most for fairness. John was himself a Jew, writing in a dispute
  inside the Jewish world over who keeps the name (Marshall). It also leaves out Hemer's theory that the
  Domitian-era Jewish tax made Christians who were not paying it visible to the authorities.
- The Philadelphia card says "opposed by 'the synagogue of Satan,' which may mean the believers were shut out
  of the synagogue." It has no views and no caution. It also misses that 3:9 ("come and bow down at your
  feet") reverses Isaiah 60:14, where the nations bow to Israel, which is a pointed claim to Israel's
  promises.
- The keys `frankfurter` and `marshall` exist in Rev/sources.json and are not cited.

Fix:
- Reword Smyrna's first view: "Many think they were members of the city's synagogue who opposed the
  believers, perhaps reporting them to the authorities. John, himself a Jew, denies them the name."
- Add the Jewish-tax point as a possibility.
- Give Philadelphia the same views and caution, with the Isaiah 60:14 reversal.
- Cite `marshall`, `frankfurter` and `hemer`.

**8. Major. Jud book.json `audience.why`: a debated reading of Jude's use of 1 Enoch is stated as fact, against
its own views.**
The "why" ends: "He quotes 1 Enoch... because his readers already treasured those books... The quotations are
arguments from shared ground, not a new authority he is introducing." The fourth view then says: "Most
scholars think Jude treated 1 Enoch's words as true prophecy... Others think he quotes a book his readers
prized." The "why" takes the side its own views call the minority. Jude says Enoch "prophesied" (1:14).

Fix: "He quotes 1 Enoch and a story about Moses that his readers already knew and honored. Most scholars think
Jude himself took Enoch's words as true prophecy. Either way, he argued from ground they shared." Make the same
change in the 1:14–16 card's framing ("this was strong proof" is fine).

### Minor

**9. Minor. Rev.json source keys: several claims cite the wrong Bauckham book or miss the best key.**
- The cargo-list analysis in 18:9–24 is Bauckham's "The Economic Critique of Rome in Revelation 18" in *The
  Climax of Prophecy* (key `climax`), not *Theology* (`bauckham`).
- The court-ceremony reading of 4:8–11 (casting crowns, "worthy") is Aune's 1983 article, which his commentary
  takes up (`aune` is fine). "Our Lord and God" as Domitian's title should cite `suetonius` (*Domitian* 13).
- "Babylon" as a Jewish name for Rome after AD 70 (4 Ezra, 2 Baruch, Sibylline Oracles 5) fits `collins`
  (Yarbro Collins) or `aune` better than `irenaeus`.
- The Ephesus "temple to the emperors" is Friesen's subject. Add `friesen` to 2:1–7.

**10. Minor. Rev.json 2:1–7 and 4:8–11: claims that depend on the date are written as if they hold for any
date.**
- The Ephesian provincial temple of the Sebastoi was dedicated about AD 89/90. Under the 60s date it did not
  yet exist; there was only the temple of Roma and Divus Julius for Roman citizens.
- Likewise, "Our Lord and God" as an imperial title points to Domitian.

Fix: add "(dedicated about AD 89, so this fits the later date)". Note in 4:8–11 that the Domitian echo
assumes the late date.

**11. Minor. Rev.json `audience.views` (dates): some counterarguments and facts are missing.**
- Early-daters (Gentry) argue that Irenaeus's "it was seen" may refer to John, not the vision. Give that one
  clause.
- Nero's name adding up to 666 is accepted by many late-date scholars (Bauckham, Aune) through the
  Nero-returning legend. It is an argument about the beast, not a clean argument for the date. Say so.
- Late-daters also cite Polycarp, *To the Philippians* 11.3 (Smyrna's church may not have existed in Paul's
  day).
- Early dates range from 64 to 69 (Galba), not only "about 68". Some scholars propose Vespasian (69–79).

**12. Minor. Rev.json 2:12–17 (Pergamum): only one theory of the white stone is given, and the governor's
court is overstated.**
- The white stone has many proposed meanings: a vote of acquittal, an amulet with a secret name, a
  guest-token (tessera), a token for the games, the Urim, the jewels of the high priest. Hemer lists them.
  Give two or three in a view, or say "one of many guesses."
- "The Roman governor's court": by this time the proconsul lived at Ephesus. Pergamum was a city where he
  held court on circuit. Ramsay's "seat of government" view is now doubted.

Fix: "where the governor held court on his circuit."

**13. Minor. Rev.json 2:18–29 (Thyatira): "whose guardian god was Apollo, a son of Zeus."**
The city's hero-god was Tyrimnos, merged with Apollo (Apollo Tyrimnaios). Hemer's link to Jesus as "the Son of
God" is a suggestion, and the card states it as fact ("answers the local son of Zeus").

Fix: "whose guardian god, Tyrimnos, was joined with Apollo, a son of Zeus". Also: "Jesus... may answer...".

**14. Minor. Rev.json settings: smaller gaps in coverage.**
- **1:1–3**: the opening blessing on "the one who reads... out loud, and... those who hear." The audience
  itself rests on it.
- **5:2–5**: the angel's question and the elder's "Stop crying!"
- **6:15–17**: the cry of the kings to the mountains.
- **7:1–3**: the command to hold back the winds and seal God's servants.
- **8:13**: the eagle's threefold woe.
- **11:1–3**: the command to measure the temple, which is the text of the early-date argument that the
  audience cites.
- **19:9** ("Blessed are those invited...") and **19:17–18** (the call to the birds).
- **20:6**: a beatitude.

Some of these can be grouped. Revelation's seven beatitudes (1:3, 14:13, 16:15, 19:9, 20:6, 22:7, 22:14) are
its direct words to the hearers. At least 1:3 and 20:6 need cards.

**15. Minor. Rev.json 17:7–18, 18:1–8 and 18:9–24: wording and debated points stated as fact.**
- 17:7–18 says "seven hills", but Plain 17:9 has "seven mountains". Keep "seven mountains (Rome was the city
  on seven hills)".
- "Their own glittering capital": Rome was the empire's capital, not that of cities in Asia. Write "the
  empire's glittering capital."
- 18:1–8, "not by moving away but by refusing to share her sins", is stated as fact. Some read a literal
  flight (Jeremiah 51:45; and preterists who see Jerusalem in Babylon link it to the flight before AD 70).
  Hedge it.
- 18:9–24, "goods that flowed to Rome through ports like Ephesus and Smyrna": much of the list (silk, spices,
  ivory) came through Alexandria and Puteoli. Write "goods that flowed to Rome from across the empire, some
  through ports like Ephesus and Smyrna."
- 18:9–24, the views' "read the laments of the Temple's wealth" is garbled. Write "read the laments as about
  the Temple's wealth."

**16. Minor. Rev.json 16:5–7 and 1:9–20: hearers are over-generalized.**
- 16:5–7 says "For churches who had seen Antipas killed". Only Pergamum saw this (2:13). Write "For churches
  that knew of Antipas's death."
- "From exile on Patmos" (audience) and "while John was held on Patmos" (1:9–20) follow the early tradition
  (Tertullian, Clement, Eusebius) and the majority view. 1:9 only says "because of the word of God". A few
  scholars think he went there to preach. One clause in a view, or "most think he was exiled", would do.

**17. Minor. Jud book.json `audience.to`: debated points are stated as fact, and an alternative readership is
missing.**
- "Certain traveling teachers had come into them and been welcomed (1:4)". Jude 1:4 says they "slipped in
  among you without being noticed". "Traveling" is Bauckham's inference, and the third view itself calls it
  debated.
- "Claimed visions ('dreamers,' 1:8)" in the "why" is also one reading; others take "dreamers" as
  "deluded".
- No view allows that the readers were mixed or mostly Gentile churches. Gentile Christians read 1 Enoch too
  (Barnabas, Tertullian), and the antinomian twist on Paul's grace suggests churches in Paul's sphere.

Fix:
- "Teachers, perhaps traveling ones, had slipped in."
- "Claimed visions, if 'dreamers' (1:8) means that".
- Add a sentence on Gentile or mixed churches to the first view, or a new view.

**18. Minor. Jud audience and 1:3–13: "retells a story from the Assumption of Moses".**
Clement of Alexandria, Origen and Didymus say the Michael story came from the *Assumption of Moses*. The
surviving Latin *Testament of Moses* breaks off before Moses' death, and Bauckham thinks the story stood in its
lost ending. The source is attested by early writers, not certain.

Fix: "a story that early writers say came from the Assumption of Moses, a book now partly lost."

**19. Minor. Jud 1:3–13 `why`: "hidden reefs" does not match Plain 1:12, "sunken rocks".**
It is not in quotes, so the build does not catch it, but the card should use the site's own image.
*Spilades* is also read as "stains" (compare 2 Peter 2:13), which could be one clause.

Fix: "sunken rocks".

**20. Minor. Jud 1:14–16 and 1:24–25: two claims are stated more firmly than the evidence allows.**
- "Jude reads 'the Lord' as Jesus." The Greek of 1 Enoch 1:9 has only "he comes", and Jude adds "Lord". Most
  scholars (Bauckham) take it as Jesus, but some take it as God. Write "Jude probably reads..."
- "The form, praise ending in 'Amen,' comes from synagogue worship." The doxology is a Jewish prayer form;
  "synagogue" is more than we know. Write "comes from Jewish prayer."

## Fixes applied

Every finding was fixed; none was declined. Revelation now has 37 settings (was 24); Jude still has 5.
`--check Jud`: 0 errors, 0 warnings. `--check Rev` after `node tools/import-rev.js`: 0 errors, 87 warnings (all old).

1. Guild thesis hedged in `audience.why` ("many trade and social clubs... could lose friends, business and
   standing"); new first audience view "How much pressure?" (Ramsay/Hemer vs Harland); Thyatira hedged and given
   the same view; 14:6–13 now "the trade and civic life bound up with it" and "club feasts... business and standing".
2. `audience.to`: Smyrna poor, slandered, facing prison; Philadelphia little strength, same slander.
3. Laodicea: "may answer with the city's own trades"; eye salve "by many accounts"; new view "Local or common
   images" (Ramsay/Hemer vs Koester); `ramsay` added.
4. New cards: 6:9–11 (martyrs' prayer, with a view), 10:1–11 (oath and new call, view on the little scroll),
   13:9–10 (with the 13:10 text variant), 13:16–18 (mark and 666, gematria, 616, four views incl. Lateinos),
   16:15.
5. Historicist readings added to 7:9–17, 14:6–13, 17:7–18, 18:9–24, 22:6–21 (and 11:1–3, 13:16–18, 20:6);
   `gregg` cited.
6. 14:1–5: `what`, `by`, `to` changed as suggested; "army" hedged as one reading; views on who the 144,000 are
   and on what "pure" means; `beale`, `mounce`, `koester` cited.
7. Smyrna's first view reworded (John himself a Jew denies them the name), Hemer's Jewish-tax point,
   Frankfurter/Marshall alternatives, caution kept. Philadelphia given the same views and caution, and the
   Isaiah 60:14 reversal. `marshall`, `frankfurter` cited.
8. Jude `audience.why`: "Most scholars think Jude himself took Enoch's words as true prophecy. Either way, he
   argued from ground they shared." 1:14–16 framing matched.
9. Keys: 18:9–24 now cites `climax`; 4:8–11 cites `suetonius`; `collins`, `suetonius`, `gregg` added to the
   audience; `friesen` added to 2:1–7.
10. Ephesus temple "(dedicated about AD 89, so this fits the later date)"; 4:8–11 notes the Domitian echo
    assumes the later date.
11. Date views: 64–69 range, Irenaeus "it was seen" clause, 666 as an argument about the beast accepted by
    late-daters too, Vespasian, Polycarp *Phil.* 11.3.
12. Pergamum: white stone "one of many guesses" plus a view with several proposals; "where the Roman governor
    held court on his circuit".
13. Thyatira: Tyrimnos joined with Apollo; "may answer".
14. New cards 1:1–3 (listing the seven blessings), 5:2–5, 6:15–17, 7:1–3, 8:13, 11:1–3 (with date views),
    19:17–18, 20:6 (millennial views); 19:9 folded into the 19:1–10 card.
15. "seven mountains"; "the empire's glittering capital"; 18:1–8 hedged with the literal-flight reading
    (Jeremiah 51:45, flight before AD 70); cargo "from across the empire, some through ports like..."; garbled
    view fixed.
16. 16:5–7 "churches that knew of Antipas's death"; Patmos exile now "most think", plus a "Why Patmos?" view;
    1:9–20 `when` hedged.
17. Jude `audience.to`: "teachers, perhaps traveling ones, had slipped in"; "dreamers" hedged; mixed or Gentile
    readership added to the first view.
18. Jude audience and 1:3–13: the Moses story is now one "early writers (Clement of Alexandria, Origen) say came
    from the Assumption of Moses, a book now partly lost"; `clement-adumbrationes` cited.
19. "sunken rocks, or 'stains' as some read the word".
20. "Jude adds the word 'Lord' and probably reads it as Jesus (some think he means God)"; doxology "comes from
    Jewish prayer".
