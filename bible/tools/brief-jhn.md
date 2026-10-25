# John: brief for the part writers

Book id `Jhn`. Read tools/brief-nt.md first. Six parts, written at the same time:

| Part | Chapters | Contents |
|---|---|---|
| 01-04 | 1–4 | Prologue, John the Baptist, first disciples, Cana, the Temple, Nicodemus, the Samaritan woman. **Owns book.json.** |
| 05-06 | 5–6 | Bethesda and the Sabbath; the feeding and the bread of life |
| 07-10 | 7–10 | Festival of Shelters, the woman caught in adultery (7:53–8:11), "before Abraham was", the man born blind, the good shepherd |
| 11-12 | 11–12 | Lazarus, the plot, the anointing, the entry, "the hour has come" |
| 13-17 | 13–17 | The last supper: foot washing, the farewell discourses, the prayer of chapter 17 |
| 18-21 | 18–21 | Arrest, trials, crucifixion, resurrection, the epilogue by the lake |

The 07-10 writer translates 7:53–8:11 in full under its own heading, per brief-nt.md.

## Lenses (fixed; the same keys as the other Gospels)

- H **History and setting**: Jerusalem and its festivals, the Temple, Samaria, John's topographical detail (Bethesda's five porches, Siloam), the historical value of John's chronology (three Passovers; the crucifixion on the day of preparation).
- C **Critical**: the Beloved Disciple and authorship, stages of composition (signs source, chapter 21 as epilogue), the "Johannine community", relationship to the Synoptics.
- L **Literary**: signs and discourses, misunderstanding and irony, "I am" sayings, light and darkness, the hour, the prologue as overture.
- J **Jewish reading**: the festivals as setting, "the Jews" in John (who is meant, 9:22 "put out of the synagogue" and the birkat ha-minim debate), Jewish scholars on John, its later use against Jews.
- T **Church tradition**: the "spiritual Gospel" (Clement of Alexandria), John in the creeds and the Christological controversies, sacramental readings (3:5; 6:53; 19:34).

## book.json (01-04 writer)

Authorship (Irenaeus and the apostle John, son of Zebedee; John the Elder of Papias; the Beloved Disciple as an anonymous eyewitness; critical views), date (most scholars 90–100; P52 about 125–175 as a limit, with its dating debate), place (Ephesus by tradition; views), audience and purpose (20:30–31, "so that you may believe" or "go on believing", a variant: πιστεύσητε / πιστεύητε), relation to the Synoptics, John's use of "the Jews", and book-wide traditions if any. Create a `gospel-of-john` core only if none fits; the topic `john` exists (check what it covers; it may be the apostle).

## Places that need full treatment

- 1:1–18 the Word (logos in Greek thought and Jewish wisdom, Proverbs 8:22–31, Genesis 1:1), 1:1c "the Word was God" (theos without the article: the Jehovah's Witness "a god" and the reply; traditions card top `son-of-god` or a Trinity topic if one exists), 1:18 "the only God" vs "the only Son" (variant), monogenēs.
- 1:29 "the Lamb of God"; 1:51 Jacob's ladder; 2:1–11 Cana and Mary ("Woman"); 2:13–22 the Temple incident early (versus the Synoptics' late; views).
- 3:3–8 "born again / from above" (anōthen, both senses), 3:5 water and Spirit (traditions card top `baptism`: baptismal regeneration vs other readings); 3:16 and where the speech ends.
- 4: Samaria, Jacob's well, Gerizim and Jerusalem, "salvation is from the Jews" (4:22).
- 5:3b–4 the angel stirring the water (omitted verse); 5:18 "making himself equal to God".
- 6:53–58 eat my flesh (traditions card top `lords-supper`: Catholic and Orthodox Eucharistic reading, Lutheran, Reformed spiritual feeding, Zwinglian and Baptist faith reading); 6:44, 65 (top `free-will` or `election`).
- 7:53–8:11 (later addition); 8:44 "your father the devil" (whom it addressed, misuse); 8:58 "before Abraham was, I am".
- 9:22; 10:30 "I and the Father are one" (hen, neuter); 10:34–36 "you are gods" (Psalm 82:6); 10:16 other sheep (Latter-day Saints reading as one view in a card only if churches teach it).
- 11:25–26; 11:35; 12:24; 12:32.
- 13:1–17 foot washing (Anabaptist and Adventist ordinance, Catholic Holy Thursday rite; card if churches really differ, top as fits); 13:23 the Beloved Disciple; 14:2 "many rooms"; 14:6; 14:16, 26; 15:26 the Advocate and the Filioque (15:26 "proceeds from the Father": Orthodox vs Catholic, card); 16:7–15; 17 the prayer (unity; "sanctify them").
- 18:31 the Jewish right to execute; 19:14 the hour and day (vs Mark 15:25); 19:25–27 Mary and the disciple (Catholic Mary as mother of the church, Protestant readings; top `mary`); 19:34 blood and water; 20:17 "do not hold on to me"; 20:22–23 "Receive the Holy Spirit ... if you forgive" (confession and absolution card); 20:28 Thomas; 20:30–31 purpose; 21 the epilogue (153 fish views; 21:15–17 agapaō/phileō; Peter's restoration; 21:22–23; 21:24 "we know").

## Lead decisions

- **μένω (2026-10-25, alignment):** "remain" wherever John means the lasting bond or continuing state (the Spirit on
  Jesus 1:32–33; wrath 3:36; the word in you 5:38; food 6:27; "remains in me, and I remain in him" 6:56; 8:31; 8:35
  with 12:34; 9:41; 12:24; 12:46; 14:10, 17, 25; 15:4–16; 21:22–23). "stay" only for staying in a place (1:38–39;
  2:12; 4:40; 7:9; 10:40; 11:6) and μονή "a place to stay" (14:2, 23). Parts 01-12 and 18-21 were brought into line
  with 13-17 so 6:56 and 15:4 read alike. 1 John follows this rule.
- **Synoptic parallels:** checked against Matthew at alignment (1:23–34, 1:42, 2:16–19, 4:44, 4:46–53, 6:9–21, 12:13,
  12:25, 13:16–38, 18:10–11, 18:27–37, 19:2–3, 19:19, 19:30, 20:23). Where the Greek is shared the wording already
  matches (6:20 = Matthew 14:27; 18:33 = Matthew 27:11; 19:3 = Matthew 27:29); the rest differ because the Greek does.
  John keeps "temple grounds" (ἱερόν) apart from "temple" (ναός, 2:19–21); Matthew's "sanctuary" for ναός is left as is.
  "the one who sent me" is lowercase everywhere (Matthew 10:40 corrected).
- **Feast names (2026-10-25, publish):** "the Feast of Booths" (7:2) and "the Feast of Dedication" (10:22), as in the
  published Old Testament (Leviticus 23:34; Nehemiah 8:14) and 2 Maccabees; a plain ἑορτή stays "festival". The lane's
  "Festival of Shelters" was replaced across John, Matthew, 2 Maccabees and Tobit ("Feast of Weeks", "Feast of
  Unleavened Bread" likewise). The terms entry in content/terms.json says why.
