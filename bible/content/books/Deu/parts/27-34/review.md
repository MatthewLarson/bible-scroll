# Hostile review: Deuteronomy 27–34 (part 27-34)

Scope: plain.txt (all 266 verses, checked against `node tools/literal.js Deu 27`–`34`), notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json, the new topic cores `divine-council`, `song-of-moses` and `samaritans`, and the three new shared source keys (`djd14-deut`, `targum-psj-deut`, `targum-neofiti-deut`). book.json and the other parts were not reviewed. `node tools/build.js --check Deu/27-34` gives only the two book.json errors that belong to another writer ("needs lead", "needs facts"): 266 verses, 149 notes, 16 variants, 91 glosses, 8 chapter pages, 26 topic contributions, 0 warnings.

Note on method: BibleGateway is blocked from this container, so the NIV/ESV comparison was made from close knowledge of both texts, with the BSB in `texts/en` as a check. Witness claims were checked on the web where pages could be reached (see the evidence lines). notes.json changed on disk (03:44 to 03:47) while this review was under way. Every note quoted below was re-checked after that change and is still present.

## Verdict

This is a strong part. The translation is careful and mostly built from the Hebrew. It keeps hard images ("lifted the wing of his father's cloak", "the God who went into labor with you", "not-god ... not-people", "Every curse ... will crouch on him") and follows the reading it claims at every variant. The variant set is the best I have seen on the site: the 32:43 cluster matches 4QDeut-q word for word, and the 32:8 and 33:8 entries are sound. Most Jewish-source citations check out (Sotah 7:5, Middot 3:4, Berakhot 63b, Megillah 25b and 29a, Sanhedrin 10:3 and 43b, Shevuot 39a, Sotah 13b and 14a, Bava Batra 14–15 and 17a, Menachot 85b, Chullin 139b, Sifre 343 and 357, Ramban on 27:26 with Yerushalmi Sotah 7:4). The Old Latin "Garzin" and Codex Alexandrinus at 29:18 are confirmed. The Charlesworth fragment is cited correctly and treated with proper caution.

But it is not ready.
- Translation: about a dozen verses still carry recognizable NIV wording, some of it word for word. 28:35, 29:2 with 34:11, and 29:18 are the worst. "Officials" for *avadav* also breaks the eved rule in terms.json.
- Facts: two notes are wrong in substance. Megillah 31b says the reverse of what the writer claims about the Deuteronomy curses, and "Elyon" is not a title of El in the Ugaritic texts.
- Variants: the Samaritan reading at 32:43 is misreported by omission. The KJV-versus-modern difference at 28:22 (sword or drought) has no variants.json entry.
- Topics: the existing `prophet-like-moses` topic is bypassed.

None of this is hard to fix.

Counts: **critical 0, major 8, minor 23** (item 32 is a list of checks that passed and is not counted).

## Findings

### Major

1. **major. plain.txt 28:35, 29:2, 34:11: NIV wording copied nearly word for word.**
   - 28:35 Plain: "...with bad boils that nothing can cure, spreading from the soles of your feet to the top of your head." NIV: "...painful boils that cannot be cured, spreading from the soles of your feet to the top of your head." The Hebrew has no verb "spreading": מִכַּף רַגְלְךָ וְעַד קָדְקֳדֶךָ, "from the sole of your foot to your scalp." "Spreading" is the NIV's addition, and the Plain copies it.
   - 34:11 Plain: "...the signs and wonders the LORD sent him to do in the land of Egypt, to Pharaoh, to all his officials and to his whole land." NIV: "...all those signs and wonders the LORD sent him to do in Egypt—to Pharaoh and to all his officials and to his whole land."
   - 29:2 repeats the same "to Pharaoh, to all his officials and to his whole land."
   - "Officials" for עֲבָדָיו is the NIV/BSB choice. terms.json says *eved* is "servant or slave by context (note at first use in each book)." Courtiers can be "servants," as in the KJV and ASV.
   - Fix: rebuild all three verses from the Hebrew, for example 28:35 "from the soles of your feet to the crown of your head" and "his servants" (or "his courtiers") in 29:2 and 34:11.

2. **major. plain.txt: further NIV drift (one finding, many verses).** Each line below matches the NIV in a way the Hebrew does not force. Rebuild each from the Hebrew.
   - 29:18 "to go and worship the gods of those nations". This is NIV word for word. The Hebrew is לָלֶכֶת לַעֲבֹד, "to go to serve." The same NIV-style "worship" for *avad* appears in 28:36 ("There you will worship other gods made of wood and stone"; NIV "There you will worship other gods, gods of wood and stone"). Elsewhere (28:14, 28:64, 29:26, 30:17) the Plain uses "serve." Make it consistent.
   - 28:29 "Day after day you will be crushed and robbed, with no one to rescue you." NIV: "day after day you will be oppressed and robbed, with no one to rescue you."
   - 29:4 "a mind that knows, eyes that see or ears that hear." NIV: "a mind that understands or eyes that see or ears that hear." Hebrew לֵב לָדַעַת, "a heart to know"; consider keeping "heart."
   - 29:9 "the terms of this covenant." This is the NIV's distinctive phrase; the Hebrew is דִּבְרֵי הַבְּרִית, "the words of this covenant." The gloss on 29:9 ("the terms of this agreement") then only restates the NIV.
   - 29:12 "sealed with a curse-oath" (NIV "sealing with an oath"). The Hebrew is just וּבְאָלָתוֹ, "and into its curse-oath."
   - 28:41 "...but you will not keep them, because they will be taken away as captives." NIV: "...but you will not keep them, because they will go into captivity."
   - 32:47 "This is no idle word for you; it is your life." NIV: "They are not just idle words for you—they are your life." Hebrew רֵק, "empty."
   - 32:49 "this Abarim range." NIV: "the Abarim Range."
   - 31:10 "at the set time of the Year of Release, during the Feast of Booths." ESV: "at the set time in the year of release, at the Feast of Booths." Weaker, since the Hebrew is close, but the phrasing is ESV's.
   - 30:14 "No, the word is very close to you, in your mouth and in your heart." NIV: "No, the word is very near you; it is in your mouth and in your heart." The opening "No," renders כִּי as the NIV does. Weak; review it.
   - 34:4 "I have let your eyes see it, but you will not cross over into it." NIV: "I have let you see it with your eyes, but you will not cross over into it." Weak; review it.

3. **major. notes.json 28:15 ("Reading the curses in the synagogue") and chapters.json ch. 28 view J: Megillah 31b is cited backwards.**
   - The note says: "The Talmud rules that the curses must not be broken up between readers (Megillah 31b)." It then adds, as a separate observation, that the Leviticus curses are plural and these singular, "spoken by Moses himself."
   - In Megillah 31b, Abaye says the rule against interrupting applies only to the curses of Leviticus. In Deuteronomy's curses one *may* interrupt, and his reason is exactly that these are in the singular and Moses said them "on his own." Not interrupting the Deuteronomy curses is a later custom (compare Shulchan Arukh OC 428:6), not the Talmud's ruling.
   - Chapter 28 view J repeats the error ("read quietly and quickly, without a break (Megillah 31b)").
   - Fix: say that the Talmud forbids breaking up the Leviticus curses and allows it for Deuteronomy's, because Moses spoke these "on his own." Later custom treats both alike, and the reader often takes the portion himself.

4. **major. notes.json 32:8 ("The Most High divides the nations"): "Elyon ... used for El in texts from Ugarit (about 1300 BC)" is not correct.**
   - The Ugaritic texts do speak of El's seventy sons (the "seventy sons of Athirat," KTU 1.4 VI 46), and that part is fine. But *'lyn* (Elyon) is not attested there as a title of El.
   - "Elyon" outside the Bible comes from the Aramaic Sefire treaty ("El and Elyon," as a pair) and from Philo of Byblos (Elioun). Mark Smith (smith-early-god, smith-origins) discusses exactly this.
   - Fix: "an old divine title, known outside the Bible from the Sefire treaty and Philo of Byblos; at Ugarit the high god El has seventy sons."

5. **major. variants.json 32:43, entry 5 of 5 ("His land, his people"): the Samaritan Pentateuch supports the followed reading but is left out.**
   - The Samaritan Pentateuch reads וכפר אדמת עמו, "the land of his people," with 4QDeut-q and the Greek, against the Masoretic אַדְמָתוֹ עַמּוֹ. Evidence: thetorah.com, "Haazinu: The Song's Enigmatic Climax," quoting the SP as "וכפר אדמת עמו."
   - The entry lists only "Dead Sea Scroll 4QDeut-q; Septuagint" for the followed reading. Since entries 1–4 rightly put the SP with the MT, readers will assume it does so here too.
   - Fix: add "Samaritan Pentateuch (וכפר אדמת עמו, without the 'and' prefix of the scroll)" to reading 0, and say in `why` that three witnesses against one make the reading secure.
   - Entries 1, 3 and 4 (SP with MT for "nations," "servants" and the missing line) agree with the published SP as far as I can check.

6. **major. variants.json is missing an entry for 28:22 ("the sword" or "drought").**
   - STYLE requires an entry wherever the KJV reads differently from modern versions. Here the KJV has "the sword," while the ESV, NIV and BSB have "drought" (ESV footnote "Or sword"; see BSB in texts/en).
   - The writer covers it only as a `word`/`deb` note.
   - Fix: move the content into variants.json, with the vocalizations חֶרֶב / חֹרֶב, LXX φόνῳ, and the Vulgate. Follow "sword," as the note argues, and trim the note.

7. **major. Topics: 34:10 bypasses the existing `prophet-like-moses` topic.**
   - `content/topics/prophet-like-moses.json` exists (aka "a prophet like me," "prophet like Moses"). Its lead is about Deuteronomy 34:10 itself.
   - Yet the 34:10 note is tagged `top: "messiah"`, and chapter 34 `topics` lists `messiah` but not `prophet-like-moses`.
   - The writer also contributes a section headed "The prophet like Moses" to `messiah`, and another to `samaritans`, both duplicating that page.
   - Fix: tag the 34:10 note `prophet-like-moses` and add it to chapter 34 topics. Move the `messiah` section into a `prophet-like-moses` contribution, keeping only a cross-reference under messiah. Point the Taheb sentence in `samaritans` there too.

8. **major. plain.txt 28:46: "as a sign and a warning" translates away the very phrase the note is about.**
   - The Hebrew is לְאוֹת וּלְמוֹפֵת, "a sign and a wonder."
   - The writer's own note (28:46, "Israel becomes the sign") and chapter 28 deep section ("Exodus in reverse") rest on this being the plague phrase of 4:34, 6:22 and 34:11. But the reader of the Plain sees "warning," and the echo disappears.
   - "Warning" is interpretation added to the text, against STYLE ("Do not add interpretation to the text").
   - Fix: "as a sign and a wonder," and let the note and gloss explain it.

### Minor

9. **minor. variants.json 27:4.**
   - The Samaritan form is given as בהרגריזים. The SP spells it בהרגרזים, with no yod after the resh; Tov and the SP editions give this spelling.
   - The entry also misses the Greek Papyrus Giessen 19 (5th–6th century, the Samaritan Greek "Samareitikon"), which reads Gerizim ("Argarizin") at 27:4 and is the standard extra witness.
   - Consider citing Charlesworth's longer 2015 study ("An Unknown Dead Sea Scroll and Speculations Focused on the Vorlage of Deuteronomy 27:4," in Frey and Popkes, eds., *Jesus, Paulus und die Texte von Qumran*, WUNT II/390, 393–415) alongside Maarav 16 (2009), 201–212. The 2009 citation in `charlesworth-gerizim` is correct.
   - Evidence: bible.ca's page on SP Deut 27:4 quotes Fernández Marcos on P. Giessen and gives the SP spelling בהרגרזים. The Old Latin "Garzin" (codex 100, Lugdunensis) is confirmed there.

10. **minor. variants.json 27:26 `why`: "it also fits the other 'every' words in the Greek of this chapter."**
    - The Greek curses of 27:15–25 are Ἐπικατάρατος ὁ / ἄνθρωπος ..., not "every." πᾶς appears in 27:26.
    - Also, Galatians 3:10 does not quote the LXX exactly: πᾶσιν τοῖς γεγραμμένοις ἐν τῷ βιβλίῳ τοῦ νόμου blends in 28:58 and 29:20 (Greek 29:19). So the `p` line "Paul quotes that longer form" should say "a form close to it."
    - Fix: drop the clause and soften `p`.

11. **minor. variants: smaller witness gaps.**
    - 33:8: 4QTestimonia (4Q175) also quotes "Give Levi your Thummim" (הבו ללוי); add it. The LXX has "his" (δήλους αὐτοῦ), not "your"; say so.
    - 34:6: the Samaritan Pentateuch is generally cited with the LXX for "they buried" (ויקברו). Check it and add it, or say the SP agrees with the MT if it does.
    - 32:35: the note mentions the Greek "on the day of vengeance" but not that the SP reads the same (ליום נקם). Name the SP.

12. **minor. variants missing on smaller differences that a careful reader would want, at least as notes.**
    - 31:23: the LXX makes Moses the subject ("Moses commanded Joshua ... which the Lord swore ... he will be with you"). The note "Who speaks?" should mention it.
    - 32:13: the Plain's "and fed him" follows the SP/LXX causative. The MT is וַיֹּאכַל, "and he ate." Either translate the MT or add an entry.
    - 33:6: the LXX reads "and let him be many in number," the opposite of "few." The note mentions only the Simeon plus.
    - 33:13: מִטַּל, "from the dew," is often emended to מֵעָל, "above," after Genesis 49:25.
    - 33:26: this is a vocalization choice ("none like God, O Jeshurun" or "none like the God of Jeshurun"). See finding 13.

13. **minor. 33:26 inconsistent.**
    - The Plain reads "No one is like God, Jeshurun!", which is the MT pointing. The section heading ("None like the God of Jeshurun") and chapter 33 sum ("no one is like the God of Jeshurun") use the other vocalization.
    - Pick one, and if you keep both, add a word note.

14. **minor. notes.json 33:17 ("Not a unicorn"): "the Latin and the KJV followed with 'unicorn'."**
    - At this verse the Vulgate has *cornua rinocerotis*, "rhinoceros horns." So does Numbers 23:22. *Unicornis* is the Vulgate's word in the Psalms.
    - Fix: "the KJV followed with 'unicorns'; Jerome here has 'rhinoceros'."

15. **minor. notes.json 31:19 and topics.json law-of-moses / ch. 31 view J: "Maimonides counts it as the last of the 613 commandments (Sefer HaMitzvot, positive 18)."**
    - It is positive commandment 18 in Maimonides. It is "the last" only in the Torah's order, as in Sefer HaChinukh (no. 613).
    - Fix: "the last commandment in the Torah's order (Sefer HaChinukh 613); Maimonides lists it as positive commandment 18."

16. **minor. notes.json 28:66: Menachot 103b is garbled.**
    - The Talmud applies "your life will hang in doubt" to one who must buy grain for the year. "You will fear night and day" is the one who buys from week to week, and "no confidence in your life" is the one who depends on the shopkeeper.
    - The note gives the weekly buyer for the first clause.

17. **minor. notes.json 28:20: "Some ancient versions smooth it to 'him'."**
    - The LXX (ἐγκατέλιπές με) and Vulgate (*reliquisti me*) both keep "me."
    - Name a version that has "him" or drop the claim. "Several modern ones do" (e.g. the NIV) is fine.

18. **minor. notes.json 32:42: "The KJV, following other ancient readings, has 'from the beginning of revenges upon the enemy'."**
    - The LXX actually supports "princes" (ἀρχόντων). The KJV's "revenges" follows medieval Jewish interpretation of פַּרְעוֹת (Rashi, Ibn Ezra), not an ancient version.

19. **minor. notes.json 34:6 and topics.json law-of-moses: "Abraham ibn Ezra hinted that Joshua wrote the whole chapter from 34:1."**
    - At 34:1 Ibn Ezra says it plainly ("in my opinion Joshua wrote from this verse on"). His famous *hint* (the "secret of the twelve") is at 1:2.
    - Fix: "Ibn Ezra held that Joshua wrote from 34:1 on, and hinted at other later additions (on 1:2)."

20. **minor. notes.json 31:6: "The promise is said three times in this chapter (31:6, 8)".** It lists two verses. Either add 31:23 ("I myself will be with you") or say "twice." Chapter 31 readings ("repeats three times") has the same problem.

21. **minor. notes.json 27:15: "There are twelve curses, one for each tribe."** This is an interpretation, stated as fact. Write "often taken as one for each tribe."

22. **minor. notes.json 29:18 ("A root of bitterness").** Correct that Codex Alexandrinus reads ἐνοχλῇ where Vaticanus has ἐν χολῇ. But add that many think A was conformed to Hebrews, or that the two are a letter transposition (Bengel, Meyer). Readers should not assume that Hebrews simply copied A's Deuteronomy.

23. **minor. notes.json 28:27 ("Written one way, read another").**
    - The glosses are muddled. Traditionally the ketiv עפלים is the crude word, usually understood as hemorrhoids or swellings. The qere טְּחֹרִים is the decent word for the same affliction ("emerods," KJV).
    - The note calls the qere "tumors" as though it were the milder sense, while the Plain says "tumors."
    - State plainly that both words likely mean the same ailment and only the register differs.

24. **minor. plain.txt: smaller translation points.**
    - 28:7 "beaten before your eyes": Hebrew לְפָנֶיךָ, "before you"; "eyes" is added.
    - 28:20 "ruin, panic and angry rebuke": מְאֵרָה is "curse," not "ruin."
    - 29:22 "The generation to come will see it": Hebrew וְאָמַר, "will say." The speech comes in 29:24, and the "see" belongs later in the verse.
    - 31:2 "come back in at your head": "at your head" is added. It matches the note's meaning, but it is interpretation.
    - 32:11 "he spread his wings and took him up / and carried him on his feathers": the Hebrew verbs continue the eagle simile (the eagle spreads *its* wings). Turning them into God's wings is an interpretive choice (cf. NJPS) and needs a note.
    - "fruit of your womb / ground / livestock" is flattened to "children / crops / young" in 28:4, 11, 18, 51 and 30:9. The repeated image (also Genesis and Psalm 127:3) is lost. STYLE says to keep repetitions where English can carry them.

25. **minor. notes.json 28:4: spelling inconsistency.** "<i>Shegar</i>" in one sentence and "Shagar" in the verdict. Pick one.

26. **minor. Reference lists miss passages that the note bodies cite.**
    - 27:18 body cites Matthew 23:16 (not in `r`).
    - 32:13 body cites Judges 14:8 and 1 Samuel 14:25–27.
    - 32:18 body cites Isaiah 26:17 and Psalm 29:9.
    - 32:39 body cites Isaiah 46:4.
    - 33:12 body cites Joshua 15:8.
    - 32:50 body mentions Ishmael (Genesis 25:17).
    - Add them, so the reverse index finds them.

27. **minor. Topic tagging gaps.**
    - 34:6 (Jude 9, Michael and Moses' body) could carry `michael`.
    - 29:7 and 31:4 (Sihon and Og) are not tied to `sihon-and-og`.
    - 31:11 ("the place he will choose") is not tied to `chosen-place`.
    - The authorship notes (31:9, 34:6) could link `pentateuch-sources`.

28. **minor. Topic core song-of-moses.json.**
    - (a) Its lead quotes Revelation 15:3 as "the song of Moses, the servant of God, and the song of the Lamb." The site's own Revelation Plain reads "the song of God's servant Moses and the song of the Lamb" (used correctly in topics.json and the 34:5 note). Quote the site's wording.
    - (b) `kind: "Events"` fits poorly for a text; "Studies" or "Ideas" is better.
    - (c) `sections` is empty. A short whole-Bible overview section (Exodus 15 and Deuteronomy 32 compared, with refs) would let the page stand on its own, as the lead claims both songs.

29. **minor. Topic core divine-council.json.**
    - The `aka` "host of heaven" will pull in the star-worship passages (Deuteronomy 4:19; 17:3; 2 Kings 21:3), which are a different subject. Drop it, or address it in a section.
    - "Sons of God" is not in aka. It is already an aka of `fallen-angels`, which is acceptable, but the lead should say how this page differs from Genesis 6.
    - The core is otherwise accurate (1 Kings 22:19–22, Job 1:6, Psalm 82, Isaiah 6:8, Daniel 4:17).

30. **minor. Topic core samaritans.json.**
    - Accurate (Gerizim, Holon, John 4:20). But `sections` is empty, and the only content is this book's contribution.
    - A whole-Bible overview with refs would make the page usable from other books: 2 Kings 17:24–41 and the Samaritans' own origin account; Ezra 4; Nehemiah 4 and 13:28; John 4; Luke 10:33; Luke 17:16; Acts 8.

31. **minor. glosses.json.**
    - 28:26 "no one will be there to chase them off": the gloss "no one will be left to bury you" changes the picture. The text is about scaring the birds off the corpses.
    - 29:9: the gloss only restates the NIV phrase (see finding 2).
    - 32:7 "your old ones" glossed "your grandparents": זְקֵנֶיךָ are the elders, not only grandparents. Suggest "the old folks."

32. **note (not counted). Checked and found correct (no action; for the writer's confidence).**
    - Calvin, *Institutes* 3.21.3, does cite Deuteronomy 29:29 against prying into predestination. I could not open the text online, but this agrees with the Battles edition as I know it.
    - The 31:1 entry correctly puts 1QDeut-b with the LXX, and the BSB does follow it.
    - The 32:8 witnesses and the 4QDeut-j date are right, as is DJD 14 (1995, Duncan). Verify one point: whether Skehan's 1954 BASOR article (on 4QDeut-q) is really where "sons of God" at 32:8 was "first reported." Some accounts date the first public notice of the 4QDeut-j reading later (Skehan 1959).
    - The 32:43 4QDeut-q text is exact, line by line.
    - The new shared source keys are correct: DJD 14 (Ulrich, Cross et al., 1995), Clarke's Aramaic Bible 5B (1998), McNamara 5A (1997).

## Fixes applied

Writer's response. All 31 counted findings were accepted, three of them in part (7, 12 and 27; see below). `node tools/build.js --check Deu/27-34` now shows 266 verses, 149 notes, 17 variants, 91 glosses, 8 chapter pages, 27 topic contributions, 0 errors, 0 warnings. The full build shows 8 books, 262 topics, 0 errors, and none of its warnings are from this part or its topic cores.

1. **Accepted.** Each verse was rebuilt from `literal.js`.
   - 28:35 now reads "bad boils you cannot be healed of, from the soles of your feet to your scalp" (the added "spreading" is gone).
   - 29:2 and 34:11 now say "his servants," in line with the eved rule in terms.json. 34:11 reads "against Pharaoh, all his servants and all his land."
2. **Accepted.** All the listed verses were rebuilt from `literal.js`:
   - 29:18 and 28:36 now say "serve," matching the rest of the part.
   - 28:29: "All your days you will only be wronged and robbed, and no one will come to save you."
   - 29:4: "a heart to know with, eyes to see with or ears to hear with."
   - 29:9: "keep the words of this covenant and do them." The gloss now reads "what this agreement says."
   - 29:12: "to enter the covenant of the LORD your God and his curse-oath."
   - 28:41: "they will not stay yours, for they will go away as captives."
   - 32:47: "this is not an empty word for you. It is your life."
   - 32:49: "Go up into these Abarim mountains."
   - 31:10: "in the Year of Release, when the Feast of Booths comes round."
   - 30:14: "The word is close by you, very close."
   - 34:4: "I have let you see it for yourself, but you will not go over there."
   - Topic sections that quoted these verses were updated to match.
3. **Accepted.** The 28:15 note now says the Talmud forbids breaking up the Leviticus curses but allows a break in Deuteronomy's, because Moses spoke these on his own (Megillah 31b). It adds that later custom treats both alike (Shulchan Arukh OC 428:6, named in the text only, with no source key). Chapter 28 view J was corrected the same way.
4. **Accepted.** The 32:8 note now says Elyon is known outside the Bible from the Sefire treaty ("El and Elyon") and from Philo of Byblos. Ugarit is cited only for El's seventy sons.
5. **Accepted.** The Samaritan Pentateuch (וכפר אדמת עמו) is added to the followed reading in 32:43 entry 5. The `p` field names it, and the `why` field says that here, unlike the other four places, the SP sides with the scroll and the Greek, three witnesses against one.
6. **Accepted.** A new 28:22 variant was added, following "sword." Its witnesses:
   - for "sword": the MT vowels, the Septuagint *phonō*, Targum Onqelos and the KJV
   - for "drought": the same consonants read as *chorev*, probably Jerome's *aestu*, and the NIV, ESV and BSB

   The old `deb` note was removed, since everything in it now sits in the variant.
7. **Accepted in part.**
   - The 34:10 note is now tagged `prophet-like-moses`, and chapter 34 lists that topic in place of `messiah`.
   - The old messiah section became a new `prophet-like-moses` contribution.
   - `messiah` keeps only a short cross-reference section ("A prophet, not only a king").
   - The `samaritans` section is renamed "The Taheb" and points to the prophet-like-moses page.
   - The `moses` section "No prophet like Moses" was cut back to the epitaph itself ("Moses' epitaph") and refers readers there.
   - The section was rewritten rather than moved whole, because the existing core lead already covers some of the same ground.
8. **Accepted.** 28:46 now reads "They will be a sign and a wonder on you and on your descendants for all time." Its note, and the chapter 28 deep section "Exodus in reverse," were updated to match.
9. **Accepted.** The SP spelling is now בהרגרזים. Papyrus Giessen 19 ("Argarizin") is added as a witness. Charlesworth's 2015 WUNT II/390 study is cited with a new source key in this part's sources.json, `charlesworth-vorlage`.
10. **Accepted.** The "every" clause is removed. `p`, the witness line and the body now say that Paul quotes "a form close to" the Greek, blending in 28:58 and 29:20.
11. **Accepted.**
    - 33:8 now lists 4QTestimonia (4Q175) and notes that the LXX has "his" where the Hebrew has "your."
    - 34:6 now lists the Samaritan Pentateuch (ויקברו) with the LXX for "they buried."
    - The 32:35 note now names the SP *leyom naqam* alongside the Greek.
12. **Accepted, handled as notes.**
    - 31:23: the note "Who speaks?" now explains that the LXX makes Moses the speaker.
    - 32:13: now translated from the MT ("and he fed on what the fields grew"), so no entry is needed.
    - 33:6: the note now gives the LXX "let him be many in number."
    - 33:13: the note now mentions the emendation of *mittal* ("from the dew") to *me'al* ("from above").
    - 33:26: a new `deb` word note explains the vocalization choice.

    These are smaller points than the existing variants, so no new variants.json entries were added for them.
13. **Accepted.** The Plain keeps the MT pointing, "No one is like God, Jeshurun!" The section heading is now "None like God, Jeshurun," and the chapter 33 sum was reworded to match. The new note (see 12) gives the other vocalization.
14. **Accepted.** The note now says the KJV has "unicorns" and Jerome here has "rhinoceros."
15. **Accepted.** The note, the law-of-moses topic and chapter 31 view J now give Sefer HaChinukh 613 for the "last commandment" and Maimonides positive 18.
16. **Accepted.** The note now matches all three clauses to the Talmud's three cases: the year's grain, the week's grain and the baker.
17. **Accepted.** The note now says the Greek and Latin keep "me," as the Plain does, and that several modern versions have "him."
18. **Accepted.** The note now says the Greek "rulers" supports "princes," and that the KJV "revenges" follows Rashi and Ibn Ezra. Both are added as sources.
19. **Accepted.** The 34:6 note and the law-of-moses topic now say Ibn Ezra held that Joshua wrote from 34:1 on. The note adds that he hinted at other later additions in his comment on 1:2.
20. **Accepted.** The note now says "twice in this chapter (31:6, 8)," adds God's pledge in 31:23 and puts 31:23 in its references. Chapter 31's readings say "twice promises."
21. **Accepted.** The note now says "often taken as one for each tribe."
22. **Accepted.** The note now says that Alexandrinus *enochlē* and Vaticanus *en cholē* differ by one transposed letter, and that many think Alexandrinus was conformed to Hebrews.
23. **Accepted.** The note now says *ofalim* is the crude word and *techorim* the decent word for the same ailment (KJV "emerods"), and that only the register differs.
24. **Accepted.**
    - 28:7: "in front of you."
    - 28:20: "the curse."
    - 29:22: "will speak of it ... They will see."
    - 31:2: "go out and come in."
    - 32:11: the eagle is now the subject throughout: "spreads its wings and catches one / and carries it on its feathers." 32:12 then names the LORD.
    - "The fruit of your womb / soil / animals" is restored in 28:4, 11, 18 and 51 and in 30:9.
25. **Accepted.** The spelling is now "Shegar" throughout.
26. **Accepted.** All the listed references were added to the `r` lists, including Genesis 25:17.
27. **Accepted in part.**
    - The 34:6 Jude 9 note is now tagged `michael`, and the 34:6 authorship note `pentateuch-sources`.
    - 29:7, 31:4 and 31:11 have no notes to tag, so `sihon-and-og`, `chosen-place` and `pentateuch-sources` were added to the chapter 29, 31 and 34 topic lists instead.
    - The 31:9 note stays under law-of-moses, since its subject is the writing of the law.
28. **Accepted.** In the song-of-moses core:
    - Revelation 15:3 is now quoted in the site's wording.
    - `kind` is now "Studies."
    - Two whole-Bible sections were added: "Two songs of Moses" and "How the two songs are related."
29. **Accepted.** "host of heaven" is removed from the divine-council `aka` list. The lead now separates this page from the Genesis 6 "sons of God" and points readers to fallen-angels for that passage.
30. **Accepted.** The samaritans core now has three sections, "Origins," "Samaritans in the Bible after the exile" and "Samaritans in the New Testament," covering 2 Kings 17, Ezra 4, Nehemiah 4 and 13, John 4, Luke 9, 10 and 17, and Acts 1 and 8.
31. **Accepted.**
    - 28:26 is now glossed "no one to scare the birds and animals away."
    - The 29:9 gloss is replaced (see 2).
    - 32:7 now reads "the old folks, the elders."
32. **Noted.** The 32:8 entry no longer says Skehan "first reported" the reading in 1954. It now says he "drew attention to the Qumran reading 'sons of God' in the 1950s."

Also fixed: the source key in notes.json and in the drafts is `kitchen-lawrence`, not `kitchen-lawson`.
