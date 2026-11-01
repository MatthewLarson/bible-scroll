# Hostile review: "Who it was for, and why" in Genesis and Exodus

Scope: `audience` in `content/books/Gen/book.json` and `content/books/Exo/book.json`, and the `settings` lists in every part's `chapters.json` (Genesis 103 cards, Exodus 91 cards). The one exception is the Genesis lead's quotation of 12:3. Nothing else was reviewed.

## Verdict

The material is solid work. Both book-level audiences are concrete, they give the traditional and critical first readers fairly, and they agree with each book's authorship section. The Covenant Code blocks do what the brief asks: they say whom each law binds, where it applies and the problem it answers. Most scholarly attributions check out. `node tools/build.js --check Gen` and `--check Exo` both report 0 errors and 0 warnings.

The weaknesses are of four kinds:

1. **Hearers.** A few `to` lines misstate who heard the words. The worst is Genesis 18:22–23, which reverses the Hebrew and the site's own Plain English Translation. Exodus 15:21 names "the women" where the Hebrew says "them" (masculine).
2. **Two layers in Genesis.** In Genesis the cards blur the two layers, the hearers inside the story and the Israel that heard the story, and about a third of them never reach the second layer.
3. **Padding and thin cards.** Exodus has 8 cards for plague warnings and bargaining, and Genesis has 2 for the birth-naming sayings. About fourteen more cards give a plot summary where the `why` should give a purpose. Six Tabernacle cards leave out whom the instruction binds and what problem it answers.
4. **Coverage and fairness.** There are real gaps, chief among them Lot and the men of Sodom (Genesis 19:4–9) and Abraham and Isaac on the road (22:7–8). On fairness, neither book gives the pre-exilic dating of P (Kaufmann, Haran, Milgrom), although Haran is a cited source. One source is filed under the wrong view: Russell argues for an early date for the Song of the Sea, but the card lists him under "Later".

There are no critical findings.

**Counts:** 0 critical, 11 major, 20 minor (31 findings).

## What was checked and found sound

- **Hammurabi §117.** A man who sells his wife, son or daughter for debt has them serve three years; they go free in the fourth. Exodus 21:1–11 states this correctly.
- **Moshe Weinfeld.**
  - "The Covenant of Grant" (JAOS 90, 1970): royal land grants in which the king binds himself. Correctly used in the views for Genesis 15:7–21.
  - "Sabbath, Temple and the Enthronement of the Lord" (1981). Correctly used at Exodus 31:12–17.
- **Peter Kearney** (ZAW 89, 1977): seven speeches at 25:1; 30:11, 17, 22, 34; 31:1, 12, matched to the seven days of creation. Correct.
- **Manfred Lehmann** (BASOR 129, 1953): Hittite Laws §§46–47, the duties tied to owning a whole field. Correct.
- **Gene Tucker** (JBL 85, 1966): late (Neo-Babylonian and earlier first-millennium) dialogue documents. Correct. K. A. Kitchen's rebuttal is the "general custom" side the card mentions.
- **Cross and Freedman:** an early date for Exodus 15, in the 1100s BC. Correct.
- **Other claims checked and correct:**
  - Mishnah Kiddushin 4:14 on Abraham keeping the Torah.
  - Mishnah Bava Kamma 8:1 on payment in money.
  - Rashi's first comment.
  - Goethe 1773 on the "ritual decalogue".
  - Ratner and Zuckerman on KTU 1.23.
  - Speiser on the census at Mari.
  - Finkelstein's *The Ox That Gored*.
- **Plain English Translation wording.** Every quotation in the cards was checked against the Plain English Translation wording with a script. Only the items in findings 4 and 16 fail.
- **Reading level.** Flesch-Kincaid grade is about 8.5 for Genesis and 8.7 for Exodus, which is at target. No em-dashes.

## Findings

### 1. Major: Genesis 18:23–32 reverses who stands before whom
- **Where:** `Gen/parts/12-25/chapters.json`, ch 18, setting `18:23–32`.
- **Problem:** `to` reads "The LORD, who stays standing before him." The Hebrew of 18:22 reads וְאַבְרָהָם עוֹדֶנּוּ עֹמֵד לִפְנֵי יְהוָה, "and Abraham was still standing before the LORD." `literal.js` gives: "and Abraham | still [was] he | standing | before | Yahweh". The site's Plain English Translation agrees: "but Abraham was still standing before the LORD." The card follows the rabbinic "correction of the scribes" (tiqqun soferim) tradition without saying so, and it contradicts the site's own text.
- **Fix:** `to`: "The LORD, before whom Abraham is still standing (18:22)." If the writer wants the rabbinic tradition that the original text had the LORD standing before Abraham, put it in `views` and label it as such.

### 2. Major: Exodus 15:20–21 names the wrong hearers for Miriam's song
- **Where:** `Exo/parts/01-15/chapters.json`, setting `15:20–21`.
- **Problem:** `to` reads "The women of Israel, who follow her with drums and dancing." The Hebrew says וַתַּעַן לָהֶם מִרְיָם, "Miriam answered them." "Them" is masculine plural, and the Plain English Translation says "Miriam sang back to them." The women follow her in 15:20, but the text addresses her refrain to "them," most naturally Moses and the Israelites who sang 15:1. Many commentators make this point: the song is an answer to 15:1. As written, the card picks a hearer the Hebrew does not give.
- **Fix:** `to`: "The Israelites who sang with Moses ('them,' masculine in Hebrew), while the women follow her with drums and dancing." The `why` could add that Miriam's refrain answers, and repeats, the opening line of 15:1.

### 3. Major: Exodus 15:1–18 files Russell under the wrong view
- **Where:** setting `15:1–18`, `views`.
- **Problem:** The "Later" view reads: "Other scholars date it to the time of the kings or later… Brian Russell reviews the debate." Russell's *The Song of the Sea* (2007) argues that 15:1–21 is a unified early poem from about 1150 BC (see the review in *Journal of Hebrew Scriptures* 8, 2008). Placed where it is, he reads as a supporter of the late date, or at least a neutral reviewer of it. The late view is then left with no named scholar.
- **Fix:** Move Russell to the early view ("Cross and Freedman, and more recently Brian Russell, date it to the 1100s BC"). Give the late view a named source that holds it. Martin Noth placed the song late, and Mark Leuchter (*Biblica* 92, 2011) reads it against a later setting. If no such source key exists, phrase the view without a name.

### 4. Major: The Genesis lead misquotes 12:3
- **Where:** `Gen/book.json`, `lead[0]`.
- **Problem:** The lead says: through this one family, "all the families of the earth will be blessed." The Plain English Translation of 12:3 reads "All the clans of the earth will find blessing in you." The card for 12:1–3 and the `audience.why` both use the Plain English Translation. The build does not catch the lead because no reference in brackets follows the quotation. The passive "will be blessed" also takes one side in the debate that the 12:1–3 card itself sets out ("Blessed through Abram" against "Blessing by Abram's name").
- **Fix:** "The hinge is God's call to Abraham (12:1–3): through this one family, 'all the clans of the earth will find blessing.'"

### 5. Major: Genesis cards blur the two hearers and often leave out the second
- **Where:** Genesis settings generally.
- **What works:** The scheme itself is right. `to` names the hearers inside the story and is shown as "First for"; the `why` gives the meaning for later Israel. Cards such as 3:14–19, 12:1–3, 17:9–14 and 25:23 handle both layers clearly.
- **Problems:**
  - **Second layer missing.** About 30 of the 103 cards never reach the second layer: 8:21–22, 17:15–21, 18:9–15, 21:6–7, 21:12–13, 24:12–14, 28:1–4, 31:4–16, 37:5–11, 41:9–13, 42:7–20, 42:36–38, 43:3–10, 43:11–14, 45:17–20, 46:31–34, 47:7–10, 47:29–31, 48:21–22, 49:29–32, 50:4–5, 50:24–25 and others. On those cards the reader gets only a plot summary.
  - **"Hearers" is ambiguous.** It sometimes means the people in the scene and sometimes later Israel. At 34:20–23 the `to` is "the men of their city," and the `why` then says "The irony is plain to the hearers." Here the hearers in the `to` line are exactly the people who miss the irony. The same confusion appears at 31:26–30, 32:3–5, 37:33–35, 42:21–22, 14:22–24, 20:3–7, 26:26–31 and 27:5–17.
  - **The layers shift without notice.** The `why` often moves from the speaker's purpose ("To warn Cain…") to the narrator's purpose with no signal. The phrases used for the shift vary: "every hearer", "Israelite hearers", "later hearers", "Hearers learned".
- **Fix:**
  - (a) Use one fixed phrase whenever the `why` turns to the book's audience, for example "For Israel, hearing the story, …", and never use the bare word "hearers" for that audience.
  - (b) Give every card that does real work a sentence on what it meant to Israel. Cut the cards that cannot carry one (see finding 8).
  - (c) Add a sentence to `Gen/book.json` `audience.why`: "On the chapter pages, 'First for' names the people inside the story; the card then says what the words meant to Israel."

### 6. Major: The Exodus plague warnings and bargaining cards are padding
- **Where:** `Exo/parts/01-15/chapters.json`.
- **Problem:** Eight cards repeat the same "warn Pharaoh / Pharaoh haggles" structure. They are 7:14–18, 8:1–4, 8:20–23 and 9:1–5 (warnings), and 8:25–29, 9:27–30, 10:7–11 and 10:24–29 (bargaining). Their `why` fields are mostly plot ("The talks are over."; "The set time shows God's control."). The brief says short exchanges in dialogue need no card. The plagues are a narrative cycle, not separate speeches with their own audience.
- **Fix:**
  - Cut all eight.
  - Keep the material that carries purpose by merging 9:13–19 (whose 9:14–16 gives the reason for the plagues, cited in Romans 9:17) and 10:1–6 (10:1–2, "so that you can tell… your son") into one card, "The purpose of the blows" (9:13–10:2 is not one passage, so anchor it at 9:13–19 and mention 10:1–2 in the `why`). Alternatively, fold both into the 6:28–7:5 card.
  - Keep 11:4–8, which is the climactic oracle that answers 1:22 and 4:23.
  - If the egyptological notes (the Nile, Heqet, Apis) are wanted, they belong in notes, not in setting cards.

### 7. Major: The Genesis naming sayings are padding
- **Where:** `Gen/parts/26-36/chapters.json`, settings `29:32–35` and `30:1–24`.
- **Problem:** Birth-naming sayings are not speeches with an audience. The `to` lines show this: "Her household, and the LORD" and "Jacob, each other, and God". The writer correctly left out other naming sayings (4:1, 4:25, 5:29, 41:51–52), so these two are inconsistent as well as padded. The tribal point is worth making, but it belongs in the chapter `sum` or `readings`.
- **Fix:**
  - Cut both cards.
  - Optionally keep one short card for the exchange at 30:1–2 ("Give me children!" / "Am I in the place of God?"), but only if it is given a real purpose for Israel. Otherwise cut it too.

### 8. Major: Other cards give plot instead of purpose
- **Where and problem:** These `why` fields retell the scene without saying what the words were meant to do for anyone, or the card is a stage direction:
  - **Genesis:** 30:25–34 (the wage bargain), 41:9–13 ("His short speech opens the prison door"), 42:36–38, 44:16 (a one-line confession inside Judah's plea), 50:4–5.
  - **Exodus:**
    - 12:31–32
    - 13:1–2: a law card with no statement of whom it binds, where or why
    - 14:15–18
    - 19:21–24
    - 24:12–14
    - 34:1–3
    - 34:8–9
    - 35:30–36:1
    - 36:5–7: borderline
- **Fix:**
  - Cut 30:25–34, 41:9–13, 42:36–38 and 50:4–5.
  - Merge 44:16 into 44:18–34 (making it 44:16–34).
  - Merge 31:26–30 with 31:36–42 into one exchange (31:26–42).
  - Merge 13:1–2 into 13:3–16 (as 13:1–16, the firstborn law and its explanation), with binding, place and problem stated once.
  - Merge 19:21–24 into 19:10–15 (making it 19:10–25).
  - Merge 34:8–9 into 34:6–7 (making it 34:6–9).
  - Cut 14:15–18, 24:12–14, 34:1–3 and 35:30–36:1, or give each a purpose sentence.

### 9. Major: Several Tabernacle cards leave out whom the instruction binds, where it applies and the problem it answers
- **Where:** `Exo/parts/25-40/chapters.json`.
- **Problem:** The brief asks every block of law or instruction to say whom it binds, where it applies and the problem it answers. The Covenant Code cards and 25:1–9, 27:20–21, 28:1–43, 29:1–37, 30:11–16, 30:17–21, 30:22–38 and 31:12–17 do this. These do not:
  - **26:1–37.** Says only that the details "let builders follow the plan." It gives no binding or problem.
  - **27:1–19.** Gives no problem. It does not say who builds the altar or courtyard, or who may use it.
  - **30:1–10.** Gives no binding, place or purpose at all. It is a description of furniture.
  - **31:1–11.** States no purpose for the hearers. The notes on "first time filled with the Spirit" and the two tribes are not a purpose.
  - **25:10–40.** States the problem (holiness by nearness), but does not say whom it binds.
  - **29:38–46.** Does not say that it binds the priests (as the doers) and the people (as the supply).
- **Fix:** Add one or two sentences to each, in the pattern the other cards use. For example, for 30:1–10: "It binds Aaron and the high priests after him, every morning and evening and once a year on the Day of Atonement, in the holy place before the veil. It answers how the people's prayer and the priest's atonement are brought near the throne without anyone entering the most holy place."

### 10. Major: Genesis is missing two speeches that do real work
- **Where:** Gen ch 19 and ch 22.
- **Problem:** The brief says "a speech that does work in the story does" need a card.
  - **19:4–9.** The men of Sodom's demand ("Bring them out to us so we can know them") and Lot's offer of his daughters are the hinge of the chapter, and the basis of every later use of Sodom (Ezekiel 16:49; Judges 19:22–24, which copies it). Both have exact hearers.
  - **22:7–8.** Isaac's question and Abraham's answer ("God will see to the lamb for a burnt offering himself, my son") is the most quoted exchange in the chapter and the source of the place name in 22:14. The card set covers 22:1–2 and 22:15–18 but skips the heart of the scene.
- **Fix:** Add cards for 19:4–9 (by the men of Sodom, then Lot; to Lot at his door, then the men) and 22:7–8 (by Isaac, then Abraham; to each other on the third day's climb). Give the debate over the sin of Sodom (inhospitality and violence, or sexual sin) in `views`.

### 11. Major: Fairness: the pre-exilic dating of P is missing from both books
- **Where:**
  - `Exo/book.json` `audience.views`, "A Priestly book for exiles and returnees"
  - Exo settings 25:1–9 ("A picture of the Temple") and 28:1–43 ("Later priestly claims")
  - Exo setting 31:12–17 ("A word for the exile")
  - Gen setting 17:9–14 ("Stressed in the exile")
- **Problem:** The cards present the critical view as a single "exile or Persian period" P. The Israeli school (Yehezkel Kaufmann, Menahem Haran, Jacob Milgrom, Avi Hurvitz) dates P before the exile, and Haran ties the tabernacle to the First Temple. This is a major critical position, not a conservative one. Haran's *Temples and Temple-Service* is cited on six Exodus cards, yet his view is never stated. Milgrom's *Leviticus 1–16* is also cited.
- **Fix:**
  - Add a view to Exo 25:1–9 and to the Exo audience: "Pre-exilic P: Kaufmann, Haran and Milgrom date the Priestly writing before the exile, and Haran sees in the tabernacle a picture of the First Temple of Jerusalem."
  - In Gen 17:9–14 and Exo 31:12–17, change "Critical scholars" to "Many critical scholars."
  - The Genesis authorship section has the same blind spot ("P… 500s–400s BC"). That section is out of scope, but the writer should know that the audience views inherit it.

### 12. Minor: Hearers not named as the Hebrew gives them
- **Gen 23:3–16.** `to` says "The Hittite elders at the gate of Hebron." The Hebrew has בְּנֵי־חֵת, "the sons of Heth" (23:3, 5, 7), "the people of the land" (23:7, 12), and "all who went in at the gate of his city" (23:10, 18). The text has no elders.
  - **Fix:** "The sons of Heth, the people of the land, gathered at the gate of Hebron, and Ephron."
- **Gen 50:4–5.** Joseph speaks "to the household of Pharaoh": "speak, please, in the ears of Pharaoh."
  - **Fix:** `to`: "Pharaoh's household, to pass on to Pharaoh."
- **Exo 24:1–8.** `to` lists "Moses, Aaron, Nadab, Abihu and seventy elders" as hearers. The Hebrew 24:1 is וְאֶל־מֹשֶׁה אָמַר, "To Moses he said: Come up, you and Aaron…"
  - **Fix:** "Moses, about himself, Aaron, Nadab, Abihu and seventy elders; then all the people at the foot of the mountain."
- **Exo 16:32–34.** The first command (16:32) is spoken by Moses with no named hearer, apparently the people ("the bread I fed you with"). Only 16:33 is said to Aaron.
  - **Fix:** "The people, then Aaron."
- **Exo 18:10–11.** "Moses, and through him the LORD" is unclear: Jethro blesses the LORD in Moses' hearing.
  - **Fix:** "Moses (and, by 18:12, Aaron and the elders)."

### 13. Minor: Exodus 12:1–20 leaves the foreigner out of the binding
- **Where:** setting `12:1–20`.
- **Problem:** The card says it binds "every household of Israel." The Plain English Translation of 12:19 says anyone who eats leavened food "will be cut off from the community of Israel, foreigner or native-born alike." The brief names "the foreigner living among them" as a category to state.
- **Fix:** "It binds every household of Israel, and in the seven days without yeast the foreigner living among them as well (12:19)."

### 14. Minor: Exodus 30:11–16 leaves out the age limit
- **Problem:** "Half a shekel from each person counted." The Plain English Translation of 30:14 says "from twenty years old and up."
- **Fix:** `to` or `why`: "every man twenty years old and up who is counted."

### 15. Minor: Wright's date for the Covenant Code is imprecise
- **Where:** setting `21:1–11`, view "Date".
- **Problem:** The card says "David Wright argues that it reworks Hammurabi's laws in the 700s BC." Wright dates the Covenant Code to the Neo-Assyrian period, "sometime between 740–640 BCE," so half of his range falls in the 600s.
- **Fix:** "…in the Neo-Assyrian period, between about 740 and 640 BC."

### 16. Minor: Quotations that do not match the Plain English Translation
- **Exo 28:1–43.** The `why` quotes the clothes "for honor and beauty." The Plain English Translation of 28:2 and 28:40 has "for glory and for beauty."
- **Exo 33:1–6.** The `what` is "I will not go up among you." The Plain English Translation of 33:3 has "I will not go up in your midst."
- **Exo 33:12–23.** The `what` is "Show me your glory." The Plain English Translation of 33:18 has "Please let me see your glory."
- **Fix:** Use the Plain English Translation wording, or drop the quotation marks in the `what` titles.

### 17. Minor: Source keys that do not support any claim on the card
- **Gen 2:23, `brueggemann-bone`.** Brueggemann's article (CBQ 32, 1970) reads "bone of my bones… flesh of my flesh" as a covenant formula of loyalty, as in 2 Samuel 5:1 and Judges 9:2. The card says only "a cry of recognition," so the source is cited for nothing.
  - **Fix:** Add a view: "A pledge of loyalty: Walter Brueggemann reads the words as a covenant formula, like the tribes' words to David in 2 Samuel 5:1."
- **Exo 30:22–38, `arie-arad`.** The card says nothing about Arad or incense residue.
  - **Fix:** Add a sentence ("Residue on the incense altars of the Judahite shrine at Arad shows frankincense in use") or drop the key.
- **Exo 20:22–26, `zertal-ebal`.** The card makes no claim about the Mount Ebal structure.
  - **Fix:** Add a sentence, or drop the key.
- **Exo 32:1–6, `mazar-bull`.** The Bull Site figurine is never mentioned.
  - **Fix:** Tie it to the "pedestal" view, or drop the key.
- **Exo 23:10–19, `mishnah-sheviit`.** This supports the Sabbath year, but the claim that "the milk law became the root of the Jewish rules that keep meat and dairy apart" rests on tractate Chullin (chapter 8).
  - **Fix:** Use or add the right key.
- **Gen 9:1–7, `maimonides-kings`.** The key cites Laws of Kings 9:14, which is the Shechem ruling. The Noahide laws as binding on all nations are at 8:10–11 and 9:1.
  - **Fix:** Correct the citation, or note that the key covers chapters 8–10.
- **Gen 13:14–17, `weinfeld-grant`.** The "walking the land was a way to take legal possession" point is not Weinfeld's grant argument (Sarna and Daube make it).
  - **Fix:** Cite Sarna only, or add a grant sentence.
- **Gen 12:11–13, `greengus-sister`.** Greengus refuted Speiser's Nuzi "wife-sister" theory, but the card mentions neither.
  - **Fix:** Add a short view, or drop the key.

### 18. Minor: "The only oath God swears in Genesis" contradicts other cards
- **Where:** setting `22:15–18`, against setting `15:7–21` ("To guarantee the land by an oath… he alone takes the oath").
- **Problem:** The Plain English Translation itself speaks of God having sworn to Abraham at 24:7, 26:3 and 50:24.
- **Fix:** "It is the only time in Genesis that God is heard swearing by himself."

### 19. Minor: Genesis 26:24 cites 39:2 as the same words
- **Problem:** The card says "'I am with you' comes back for Jacob (28:15) and for Joseph (39:2)." 39:2 is the narrator ("The LORD was with Joseph"), not God speaking. Also, 26:3 has already said "I will be with you."
- **Fix:** "…for Jacob (28:15), and the narrator says the same of Joseph (39:2)."

### 20. Minor: Superlatives that clash with other cards
- **Gen 32:9–12, "The first long prayer in the Bible."** Abraham's pleading in 18:23–32 is longer, and the servant's prayer at 24:12–14 comes first.
  - **Fix:** "The first prayer in the Bible that asks God to keep his promise."
- **Gen 44:18–34, "The longest speech in Genesis."** Jacob's last words (49:1–27) are longer.
  - **Fix:** "The longest speech in prose in Genesis."
- **Exo 31:1–11, "the first time the Bible says someone is filled with God's Spirit."** Exo 28:3 already speaks of workers "filled with a spirit of wisdom," and Gen 41:38 calls Joseph a man "in whom is the spirit of God."
  - **Fix:** "the first person the Bible calls filled with the Spirit of God."

### 21. Minor: Genesis 49:1–27 says Simeon had no tribal land
- **Problem:** The card says "why Simeon and Levi had no tribal land of their own." Simeon was given towns inside Judah (Joshua 19:1–9).
- **Fix:** "why Levi had no tribal land and Simeon's towns lay inside Judah (49:7, 'I will scatter them in Israel')."

### 22. Minor: Genesis 23:3–16 misuses Jeremiah 32
- **Problem:** The card says "Exiles who were told to buy land in faith (Jeremiah 32) would have understood." In Jeremiah 32 the prophet himself buys a field during the siege as a sign; nobody tells the exiles to buy land (compare Jeremiah 29:5).
- **Fix:** "Judeans who saw Jeremiah buy a field as a sign during the siege (Jeremiah 32) would have understood."

### 23. Minor: Exodus 35:1–3 attributes the derivation to the Mishnah
- **Problem:** The card says "The rabbis drew the list of kinds of work forbidden on the Sabbath from the work of building the tabernacle (Mishnah Shabbat 7:2)." Mishnah Shabbat 7:2 lists the 39 kinds of work. The link to the tabernacle is made in the Talmud (Shabbat 49b) and the Mekhilta.
- **Fix:** "The Mishnah lists thirty-nine kinds of forbidden work (Shabbat 7:2), and the Talmud derives them from the work on the tabernacle (Shabbat 49b)." If there is no key for the Talmud, use `mekhilta-ishmael`, which is already a key.

### 24. Minor: "Courts at the town gate" appears in the Covenant Code cards
- **Where:** Exo `audience.why`; settings 21:12–27 and 23:1–9.
- **Problem:** The Covenant Code never mentions the gate. It speaks of "God" (21:6; 22:8–9) and of judges (21:22). The court at the gate is Deuteronomy's picture (21:19; 22:15; 25:7), as it is Ruth's.
- **Fix:** Say "local courts" or "village courts," or add "as in Deuteronomy" once.

### 25. Minor: Exodus 22:28–31 presents a debated verse as settled
- **Problem:** "Do not treat God with contempt" follows the Plain English Translation, but אֱלֹהִים here has long been read as "judges" (the Targums and Rashi) or "gods" (the Septuagint). The parallel with "a leader of your people" makes the question live.
- **Fix:** Add a view: "God or judges: Jewish tradition and some translations read 'elohim' here as the judges, in parallel with 'a leader.'"

### 26. Minor: Exodus 32:1–6 states the anti-Jeroboam reading as fact in the `why`
- **Problem:** The `why` says: "so hearers in Judah read the story as a judgment on the northern calf shrines." That is the critical view, and the `views` list rightly gives it as one view among three.
- **Fix:** "so many scholars think hearers in Judah heard the story as a judgment on the northern calf shrines."

### 27. Minor: The Genesis audience gives a different date for the exile than the facts box
- **Problem:** `audience.to` says "final form for Judeans in the 500s and 400s BC, after the exile to Babylon." The facts box says "finished during or after the exile," and most of the 500s are the exile itself.
- **Fix:** "during and after the exile to Babylon (500s and 400s BC)."

### 28. Minor: Some `why` fields draw on verses outside the card's range
- **Gen 19:12–22.** Cites Lot's wife looking back, which is 19:26.
- **Gen 16:7–12.** Cites Hagar naming God El-roi, which is 16:13.
- **Exo 33:1–6.** The words "the people mourn and strip off their ornaments" fall inside the range and are fine.
- **Why it matters:** The site shows each card on every verse it covers, so a card citing verses it does not cover sends readers to verses where the card does not appear.
- **Fix:** Extend the ranges to 19:12–26 and 16:7–14, or reword.

### 29. Minor: Some sentences are too long for an 8th-grade reader
- **Problem:** The averages are on target (Flesch-Kincaid about 8.5 to 8.7, about 20 words per sentence). But several sentences run past 50 words:
  - Exo 19:3–6 (about 65 words)
  - Exo 34:10–26 (about 65)
  - Exo 28:1–43 (about 60)
  - Exo 15:25–26 (about 58)
  - the Exo `audience.to` critical-view sentence (about 58)
  - Gen 22:15–18 (about 55)
  - Exo 24:1–8 (about 54)
  - Gen 29:32–35 (about 52)
- **Also:** Technical terms go unexplained: "Documentary Hypothesis," "Priestly writers," "P," "J," "E," "monarchy," "theology." The book pages explain them, but the cards stand alone in the verse panel.
- **Fix:** Split each long sentence at its colon or semicolon list. On first use in a card, gloss the letters: "the Priestly source (P)."

### 30. Minor: Smaller coverage gaps
These would each do work in a card. Add the ones that do; the rest can be noted in the chapter `sum`.
- **Genesis:**
  - **Divine decisions.** Add 6:5–7, God's decision to wipe out humankind. It mirrors the 8:21–22 card and is quoted there ("6:5"). Also add 3:22, God's decision to send the man out of the garden, a divine decision like 11:6–7 and 18:17–21, which have cards.
  - **Decrees.** 26:11, Abimelech's decree protecting Isaac and Rebekah, is a decree, which the brief names as a category. 47:5–6, Pharaoh's grant of Goshen and the post of chief herdsmen, is also a decree.
  - **Jacob at Bethel and in Haran.** 28:16–17 is Jacob's cry, "house of God… heaven's gate," the founding words of Bethel. 29:25–26, Jacob's protest and Laban's "the younger before the firstborn," is the turn of the Jacob cycle.
  - **Smaller items:**
    - 24:26–27, the servant's prayer of thanks
    - 41:15–24, Joseph's "Not I; God will answer," with Pharaoh telling his dreams
    - 44:1–5, Joseph's orders to his steward
    - 1:22, the blessing on the creatures of sea and sky
- **Exodus:**
  - **19:7–8.** The people's first answer, "Whatever the LORD has said, we will do!" It belongs with 19:3–6; extend that card to 19:3–8.
  - **1:18–19.** The midwives' answer to Pharaoh. Extend 1:15–16 to 1:15–21.
  - **2:13–14.** "Who made you a prince and judge over us?" This is quoted in Acts 7:27, 35.
  - **8:19.** The magicians' "It is the finger of God," Egypt's first admission, echoed in Luke 11:20.
  - **14:11–12.** The people's complaint at the sea, which the 14:13–14 card answers. Extend that card to 14:10–14.
  - **32:17–18.** Joshua's report and Moses' short poem about the sound in the camp.
  - **34:27.** "Write these words," the command that makes the covenant renewal a written text, which the Exo audience cites.

### 31. Minor: Genesis 4:23–24 and other poetry cards do not mark that the words are poetry
- **Problem:** The brief asks for songs to be covered, and they are. But the `what` titles for the poems are inconsistent:
  - Lamech's "song" (4:23–24)
  - Noah's "curse and blessing" (9:25–27)
  - Isaac's "word over Esau" (27:39–40)
  - Jacob's "last words" (49:1–27)
- **Why it matters:** A reader of the verse panel cannot tell which cards are old poems, which the critical views treat as the oldest material.
- **Fix:** Name them consistently, for example "The song of Lamech," "Noah's poem of curse and blessing," "Isaac's poem over Esau," "Jacob's poem over his sons."

## Fixes applied

All changes were made by script (`gen_v2.py`, `exo_v2.py`, `apply.py` in the writer's scratch folder). The script rewrites only `audience` in each book.json, the 12:3 quotation in the Genesis `lead[0]`, and `settings` in each chapters.json. Cards now number 107 in Genesis (was 103) and 80 in Exodus (was 91). `--check Gen` and `--check Exo` both report 0 errors and 0 warnings.

1. **Gen 18:23–32.** `to` is now "The LORD, before whom Abraham is still standing (18:22)." The scribal-correction tradition moved to `views` and is labeled as such.
2. **Exo 15:20–21.** `to` is now the Israelites who sang with Moses ("them," masculine in Hebrew), while the women follow her. The `why` says that the refrain answers and repeats 15:1.
3. **Exo 15:1–18.** Russell moved into the early view, with his date of about the mid-1100s BC (checked on the web). The late view is now given without a name. The site has no source key for Noth's or Leuchter's late reading, and the rules allow only existing keys.
4. **Gen lead.** It now quotes the Plain English Translation: "all the clans of the earth will find blessing."
5. **The two layers.** Every card in both books now has a `readers` field ("For the book's readers"), and every one begins "For Israel". `to` and `why` stay inside the story. The bare word "hearers" no longer appears in any card for the book's audience. Both `audience.why` fields end with a sentence explaining the layout.
6. **Exo plague padding.** Cut 7:14–18, 8:1–4, 8:20–23, 9:1–5, 8:25–29, 9:27–30, 10:7–11 and 10:24–29. 9:13–19 is kept, retitled "The purpose of the blows." 10:1–2 is kept as its own short card ("The reason to tell the story"), not merged. 9:13–10:2 is not one passage, and naming 10:1–2 inside the 9:13–19 card would break finding 28. 11:4–8 is kept.
7. **Gen naming sayings.** Cut 29:32–35 and 30:1–24. Kept a short 30:1–2 card ("Give me children!" / "Am I in the place of God?") with a purpose for Israel: children are God's gift, and Joseph echoes the question in 50:19.
8. **Plot cards.**
   - **Genesis.** Cut 30:25–34, 41:9–13, 42:36–38 and 50:4–5. Merged 44:16 into 44:16–34. Merged 31:26–30 and 31:36–42 into 31:26–42.
   - **Exodus.** Merged 13:1–16 into one law card, stating once whom it binds, where it applies and the problem it answers. Merged 19:10–25 and 34:6–9. Cut 14:15–18, 24:12–14, 34:1–3 and 35:30–36:1. 12:31–32 and 36:5–7 now have purpose sentences.
9. **Tabernacle cards.** Binding, place and problem were added to 25:10–40, 26:1–37, 27:1–19, 29:38–46, 30:1–10 (the reviewer's wording) and 31:1–11.
10. **New Genesis cards.** Added 19:4–9, with views on the sin of Sodom (Bailey; Gagnon), Ezekiel 16:49 and Judges 19:22–24. Added 22:7–8, with the Plain English Translation wording "God will see to the lamb for a burnt offering himself, my son."
11. **Pre-exilic P.**
    - Added the view (Kaufmann, Haran, Milgrom, Hurvitz) to both `audience.views`, to Exo 25:1–9, to Exo 28:1–43 and to Gen 17:9–14.
    - "Critical scholars" is now "Many critical scholars" in Gen 17:9–14 and Exo 31:12–17. The same wording is used in other places (Exo 3:4–22, 6:2–8 and 4:24–26).
    - Checked on the web: Kaufmann dated P before the exile, Haran ties P to the First Temple and Hezekiah, and Milgrom dates P to before about 700 BC.
12. **Hearers named.**
    - Gen 23:3–16 and Exo 24:1–8 use the reviewer's wording.
    - Exo 16:32–34 now reads "The people, then Aaron," and Exo 18:10–11 reads "Moses (and, by 18:12, Aaron and the elders)."
    - Gen 50:4–5 was cut (finding 8), so its fix does not apply.
13. **Exo 12:1–20.** It now says the law binds the foreigner in the seven days without yeast (12:19).
14. **Exo 30:11–16.** `to` now reads "every man twenty years old and up who is counted in a census."
15. **Wright's date.** Now "in the Neo-Assyrian period, between about 740 and 640 BC" (checked on the web).
16. **Quotations.** 28:2 now reads "for glory and for beauty." The 33:1–6 and 33:12–23 titles are reworded without quotation marks. A script checked every quotation of 3 or more words against the Plain English Translation.
17. **Sources.**
    - **Gen 2:23.** Added a Brueggemann view on the loyalty formula (2 Samuel 5:1), citing `brueggemann-bone` and `hamilton-gen`.
    - **Exo 30:22–38.** Added the frankincense residue found at Arad.
    - **Exo 20:22–26.** Dropped `zertal-ebal`.
    - **Exo 32:1–6.** The Bull Site figurine is now tied to the pedestal view.
    - **Exo 23:10–19.** Added `mishnah-chullin` and named Chullin 8.
    - **Gen 9:1–7.** Now names Laws of Kings 9:1 in the text.
    - **Gen 13:14–17.** Now cites Sarna only. Daube's part could not be checked, so he is not named.
    - **Gen 12:11–13.** Added a view setting Speiser's Nuzi theory against Greengus (checked on the web).
18. **Gen 22:15–18.** Now reads "the only time in Genesis that God is heard swearing by himself."
19. **Gen 26:24.** Now reads "and the narrator says the same of Joseph (39:2)."
20. **Superlatives.** Gen 32:9–12, Gen 44:16–34 and Exo 31:1–11 use the reviewer's wording.
21. **Gen 49.** Now explains "why Levi had no tribal land while Simeon's towns lay inside Judah (49:7; Joshua 19:1–9)." The suggested quotation "I will scatter them in Israel" is not the Plain English Translation wording, so the card cites the verse instead of quoting it.
22. **Gen 23.** Now reads "Judeans who saw Jeremiah buy a field as a sign during the siege (Jeremiah 32)."
23. **Exo 35:1–3.** Now says the Mishnah lists thirty-nine kinds of work (Shabbat 7:2) and the Talmud derives them from the tabernacle (Shabbat 49b). The card cites `mishnah-shabbat` and `bavli-shabbat`.
24. **Local courts.** "Courts at the town gate" is now "local courts" in the Exo audience, 21:12–27 and 23:1–9.
25. **Exo 22:28–31.** Added a "God or judges" view (the Targums and Rashi read "judges"; the Septuagint reads "gods").
26. **Exo 32:1–6.** The Jeroboam reading is now given as what "many scholars think," in `readers`.
27. **Gen audience date.** Now reads "during and after the exile to Babylon (500s and 400s BC)."
28. **Ranges.** Extended to 19:12–26 and 16:7–14.
29. **Long sentences and terms.**
    - Split every card sentence over about 30 words. The few still longer are lists of names or references.
    - Glossed J, E, P and the Documentary Hypothesis on first use in the audience views and in the cards that use them.
30. **Coverage.**
    - **Genesis, added:** 1:22, 3:22, 6:5–7, 26:11, 47:5–6, 28:16–17, 29:25–27, 24:26–27, 44:1–5, and 41:15–36, which replaces the former 41:25–36.
    - **Exodus, extended:** 19:3–8, 1:15–21 and 14:10–14.
    - **Exodus, added:** 2:13–14, 8:19 (Luke 11:20), 32:17–18 and 34:27–28.
31. **Poem titles.** Now "The song of Lamech," "Noah's poem of curse and blessing," "Isaac's poem over Esau" and "Jacob's poem over his sons."

**Not changed:** the Genesis authorship section (the note on finding 11). It is outside the fields this task may edit.
