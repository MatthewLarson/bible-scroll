# Hostile review: Jeremiah 1-6 (part 01-06) and book.json

Scope: plain.txt, notes, variants, glosses, chapters, topics, sources of part 01-06, plus book.json (authorship, two editions, outline, facts, Baruch canon card). Checked against texts/orig/Jer.json, texts/auto/Jer.json, `literal.js`, `lxx.py` (Swete), `dss.py` (4Q72), the 07-12 and 50-52 Plain, 2 Kings, and Rashi on Sefaria. `VERBOSE=1 node tools/build.js --check Jer/01-06` gives 0 errors, 0 warnings.

## Verdict

The Hebrew is read soundly almost everywhere, and the note and chapter material is rich and mostly accurate. The three departures from the MT pointing are defensible and honestly flagged (2:20 Ketiv, 3:1 "Yet return", 4:19 Ketiv). The facts I could test held up: Rashi on 1:5, 3:1 and 4:10; Yoma 52b; 2 Macc 2:4-8; CCC 2270 and 120; Dositheus; Fishbane; Arie-Rosen-Namdar; the chronology. There are real problems, though:
- Several verses keep the NIV's sentence shape, and 6:7 and 6:15 follow it closely.
- The variants file is thin: the Greek differs from the Hebrew in many more places in chapters 2-6 than are logged. One entry misreports the Greek.
- 6:13-15 is not aligned with 8:10-12, and 6:14 uses the wrong term for `'ammi`.
- The 4 Baruch entry (book.json and the works proposal) wrongly puts it in no Orthodox Bible.
- The 1:5 traditions card omits Lutheran, Reformed and Anglican.
- One reader-facing first-person statement breaks the "no 'I did not read it myself'" rule.
- No finding is critical: I found no invented source or fragment.

Counts: 0 critical, 10 major, 24 minor.

## Major

1. **6:15 (with 6:13-14), NIV drift and misalignment with Jeremiah 8:10-12 (07-12).**
   - 6:15 reads "They felt no shame at all; they did not even know how to blush. So they will fall among those who fall." This tracks the NIV closely ("no shame at all", "do not even know how to blush", "fall among the fallen"). The Hebrew `gam bosh lo yevoshu gam hakhlim lo yada'u` allows plainer English, e.g. "They were not ashamed in the least. They have forgotten how to be embarrassed."
   - The two Plains are not aligned, although the Hebrew is nearly identical. 6:13 "From the smallest of them to the biggest, every one is grabbing profit by cheating" differs from 8:10 "Everyone, small and great, grabs for gain they have no right to". 6:14 "put a bandage on" differs from 8:11 "healed the fracture". 6:15 "something abominable" and "call them to account" differ from 8:12 "abhorrent" and "punish". Note 88 lists none of the differences, as the brief requires.
   - 6:14 "the broken place of my **dear people**" renders `'ammi` ("my people"). The term "my dear people" is for `bat 'ammi`, which 8:11 has and 6:14 does not. Fix: "my people", and list the 6:14 / 8:11 difference.
   - Fix: reword 6:13-15 away from the NIV, then have the 07-12 fixer match 8:10-12 to it. 6:14 should stay "bandage" or "heal", whichever is chosen. Use one verb for `paqad` (the site's "call to account" in 5:9, 6:6 and 6:15) and one for `to'evah`.

2. **6:7, "As a well keeps pouring out its water, so she keeps pouring out her evil."**
   - This is the NIV's sentence ("pours out its water ... pours out her wickedness"). It departs from the literal line (`heqir`, "keeps cool/fresh"; `literal.js`: "as keeps cool a well water its"). The root is disputed: "keeps fresh" (ESV, NRSV) against "gushes" (NIV).
   - There is no note and no variant, and the Qere/Ketiv in this verse (`bayir`/`bevar`, texts/auto) is unlogged.
   - Fix: add a `word` note (`deb`) giving both senses and the Ketiv. Choose a wording that is not the NIV's, or say which reading is followed and why.

3. **3:19, NIV shape.** "I myself said, 'How I wanted to place you among my sons and give you a desirable land, an inheritance more beautiful than any of the nations!' I said you would call me 'My Father'". "I myself said", "desirable land" and the whole "thought you would call me Father" structure are the NIV's. The Hebrew: `ve'anokhi amarti ekh ashitekh bavanim`, "And I said: how I will set you among the sons". Rebuild, e.g. "I said to myself, 'How I will set you among my children ...'". Also check `'ekh` ("how I wanted" is an interpretation), and explain the Greek "So be it, Lord" in a variant, since it changes who speaks.

4. **Variants coverage is thin for chapters 2-6.** STYLE requires an entry wherever the Greek or a Ketiv/Qere changes the sense. Checked against Swete and texts/auto, these are missing:
   - **2:2.** The Greek has "to follow the Holy One of Israel" and lacks "in the wilderness, in a land where nothing was sown". The 2:1/2:2 entries log only the missing introduction.
   - **2:16.** The Greek reads "the sons of Memphis and Tahpanhes knew you and mocked you" (no "crush your skull"). Note 28 discusses only graze/break.
   - **2:25.** Qere `gronekh` "throat" against Ketiv `goronekh` "threshing floor" (texts/auto flags it "significant").
   - **2:27.** Ketiv "gave birth to me" against the Plain's Qere "us". Note 36 mentions it but there is no entry.
   - **2:34.** The Greek reads "not in tunnels did I find them, but under every oak". Note 38 cites the Greek, but there is no variant entry.
   - **3:1 and 3:3.** The Greek has "shepherds" (`ro'im` read as `re'im`) for "companions"; "many shepherds" again at 3:3.
   - **3:2.** The Qere `shukkavt` ("lain with") replaces the Ketiv `shugalt` ("ravished"), a euphemistic Qere. The Greek has "like a crow in the desert" for "like an Arab", which note 42 does not mention.
   - **3:7.** The Greek has an imperative ("Return to me").
   - **6:29.** Ketiv/Qere `me'ishtam` / `me'esh tam`; the Greek has a different line altogether ("the bellows failed ... in vain the bronze was melted").
   - **6:7.** The Ketiv/Qere noted in finding 2.
   - Fix: add entries (or one entry plus a chapter-page paragraph where the point is minor). Check each against Ziegler as well as Swete.

5. **Variant 1:18 misreports the Greek.**
   - The entry says "The Greek has only 'a bronze wall' and no iron pillar". Swete 1:18 is `hos polin ochyran kai hos teichos chalkoun`, "like a fortified city and like a bronze wall". The city is present; only the iron pillar is absent.
   - The `p` line and the reading's `plain` ("a wall of bronze") drop the city, and the `why` lines up "city, pillar, walls" as if the Greek had two items. The `w` label itself quotes the city.
   - Fix: reword `p` and `plain`.
   - The same type of error appears in note 37 (2:28): "the Greek adds ... 'were the altars to Baal'". The Greek verb is `ethuon` ("they sacrificed to Baal"), with no altars. The variant's `plain` ("altars where they burned offerings to Baal") is likewise not the Greek.

6. **Reader-facing first person in variants.json 3:1.** "I did not read the Vulgate myself; this is as reported by the commentaries." The brief bans "I have seen it myself" style statements: write "reported by <named source>", or verify. Also, `rashi-jeremiah` is cited for 3:16 (hearing the whole assembly as holy, so the ark is not needed) and 6:16 ("rest" glossed as "quiet"); I could not confirm those two on Sefaria, so verify them. Rashi 1:5 (Adam, Israel acting as nations, Moses and forty years), 3:1 and 4:10 are correct.

7. **4 Baruch is wrongly said to be in no Orthodox Bible (book.json "Books linked to Jeremiah's name" and proposals/prophets/works.json `paralipomena-of-jeremiah`).**
   - book.json says "Outside every Bible are 2 Baruch ... and ... 4 Baruch". The works note says it is "in no Bible of the Catholic, Orthodox or Protestant churches".
   - The Ethiopian Orthodox Tewahedo Church includes it (as "The Rest of the Words of Baruch"; see 4 Baruch, Wikipedia). The Ethiopic title is verified: "Rest of the Words of Baruch", Greek `Paralipomena of Jeremiah`.
   - The date "early 100s AD" is fine. The writing needs the "who accepts it" label that CLAUDE.md requires for tier-2 books: "in the broader Ethiopian Orthodox canon". Move the work out of "outside every Bible" or qualify it.
   - Fix both texts. The Ethiopian Orthodox view could also join the Baruch canon card as a view.

8. **Traditions card on 1:5 (chapters.json ch. 1).**
   - Matt's brief names Catholic, Orthodox, Lutheran, Reformed and Baptist. The card has Catholic, Orthodox, Baptist and Methodist, so Lutheran and Reformed are missing, and so is Anglican. Add them, sourced from the confessions or catechisms, e.g. the Westminster Larger Catechism on the sixth commandment, the Lutheran Large Catechism, or LCMS and ELCA statements, which really differ.
   - The question "Does Jeremiah 1:5 teach that human life begins before birth?" is misframed. The verse is about God's knowing before formation, and the card's answers are about abortion teaching, not the verse. Reword to "How do churches use Jeremiah 1:5 in teaching on the unborn?", and keep Orthodox "not on Jer 1:5 alone", which is good.
   - "its writers cite Jeremiah 1:5 and Psalm 139" (Baptist entry) is unsourced. Cite or drop.

9. **6:2, the Plain follows the minority reading without saying so.** "I have compared Daughter Zion to a pasture, lovely and delicate" takes `damiti` from `damah` I (compare). Most modern commentators and translations (Bright, Holladay, Lundbom, McKane, NIV, NRSV, NJPS) take `damah` II, "destroy/cut off": "the lovely and delicate one I will destroy, Daughter Zion". The Greek (`homoiosa`/"removed") is also not what the note says. Note 83 offers "another way" but never says the Plain's reading is the less common one, and it asserts without evidence that it "matches the Hebrew as written". Say plainly which view is held by whom. Consider the destroy reading for the Plain, since 6:3 "shepherds come to her" works either way. Also `navah` is rendered "pasture" and "lovely" in the same line.

10. **Missing "likely mistranslations and common misreadings" notes.** All 54 notes without a kind are history, echo, symbol or views, and the 38 `word` notes are only `nu` or `deb`: there is not one `mis` or `com`. STYLE requires `mis`/`com` where the usual English or popular belief goes beyond the text. Obvious candidates: 6:16 "ancient paths" as a call to old customs (the note says sermons use it so; mark it `com`); 1:5 as a definition of when life begins; 6:14 "peace, peace"; 29:11-type uses do not occur here, but 4:23-26 as an end-times text and 5:1 "one righteous person" as an ordinary proof-text do. The 6:16 note also claims the Plain keeps Matthew's link, yet the Plain says "rest for yourselves", losing `nefesh` "souls". Either keep "souls" or add a `nu` note on `nefesh`.

## Minor

11. **2:3 tense mix.** "All who devoured it were held guilty; disaster will come on them". Both Hebrew verbs are imperfect (`ye'shamu`, `tavo'`), and note 20 reads them as general ("will suffer"). Make them agree ("are held guilty ... disaster comes").
12. **2:31 quotation marks.** `"We wander where we please; / we will not come to you anymore'?` opens with a double quote and closes with a single one.
13. **2:34, "Yet in spite of all this"** is the NIV's phrase; `ki 'al kol elleh` is easily rendered otherwise. The reading "you caught" (2fs) follows the STEPBible tag, but the pointed form is ambiguous (the old KJV reads "I"); say so in note 38.
14. **Smaller NIV/ESV echoes** (keep or reword): 3:5 "that is how you talk" (NIV "This is how you talk"); 4:23 "and their light was gone" (NIV); 4:16 "Warn the nations ... Those who lay siege" (ESV "Warn the nations ... Besiegers"); 6:11 "I am full of ... fury; I am tired of holding it in" (both "full of the wrath ... holding it in"); 1:8 "and I will pull you free" takes the NIV's coordinate shape over the Hebrew infinitive of purpose ("to deliver you"); 1:1-2 follow the ESV's "of the priests who were in Anathoth" and "of his reign". None is wholesale.
15. **3:1 note/variant.** The note calls `hayashuv` an "unusual pointing"; it is the ordinary interrogative he plus imperfect. The variant's labelling of the Plain's "Yet return to me" as the Masoretic Text "vowel pointing" is loose: it is an infinitive absolute read as an imperative. Say "read as a command (Rashi, Vulgate), against the question of the Greek, ESV and NJPS" only after checking those versions.
16. **4:19 inconsistent Ketiv/Qere policy.** The Plain follows the Ketiv at "I am writhing" but the Qere at "you have heard, my soul", so the verse mixes persons: "I writhe ... you have heard". A Ketiv-consistent reading would be "I have heard, my soul". State the reason for the mix in `why` ("All three give the same sense" is not true of person).
17. **Note 42 (3:2).** "the earliest use of 'Arab' in the Bible" is unsupported; Isaiah 13:20 (cited in the same note) is probably earlier. Drop "earliest".
18. **Note 76 (5:15).** "a century later, the Judean court could not read Akkadian but could use Aramaic" is unsourced and doubtful. Cut or source.
19. **Note 82 (6:1).** The identification of Beth-hakkerem with Ramat Rahel is Aharoni's and is the usual one, but it is contested (Ein Kerem, Herodium area); say "usually identified". Lachish Letter 4 speaks of watching for Lachish's "signals" (`mas'et`); "fire signals" is an inference. `hallo-cos` is the right kind of source.
20. **Note 97 (6:29), cupellation.** The description is basically right (lead collects the base metals as litharge, leaving silver), and it matches the usual reading of the verse. "As modern studies of ancient metalworking describe it" has no source. Cite one, or say "commentators (e.g. Holladay) explain".
21. **Note 54 (3:25).** "The confession is part of the Jewish liturgy of repentance" is unsourced. 3:22-4:2 is a haftarah in some customs (Sephardi reading of Masei); say that, or drop.
22. **Note 71 (5:2).** "Here it is the last use of God's name" is unclear. The count "thirty-seven" and the list need a source, or "about thirty-seven (Lundbom)".
23. **Note 60 (4:7).** 50:17 does not call Nebuchadnezzar "a lion" (lions are Israel's enemies; the verse names Nebuchadnezzar as the last to gnaw the bones); 49:19 is Edom/Babylon. Reword.
24. **Note 94 (6:22-24 against 50:41-43).** It says "with the names changed" but does not list the Hebrew differences: 6:22 "from a land of the north" and "a great nation is roused" against 50:41 "from the north", "a great nation and many kings are roused"; `hu'` / `hemah`; "the king of Babylon has heard" against "we have heard". The Plains of 6:22-24 and 50:41-43 are in fact aligned correctly; only the note needs the list.
25. **Settings card for chapter 5.** The `why` says "the leaders know the way and the poor know it too". 5:4-5 say the opposite: Jeremiah guesses the poor do not know, and the great do. The two `views` lines ("Some commentators", "Others") name no scholar. The chapter 2-6 settings cards in general are one card per chapter-sized block; 4:1-4 and 3:15-18 have no card of their own, and "Not dated" cards would be stronger with the scholars' names (Holladay on 627-6xx dates, Bright, Childs).
26. **Prose speech without quotation marks.** 3:6-18 gives the LORD's prose speech with no quotation marks, but 1:4-19 does use them. Pick one.
27. **Glosses.** 4:14 "spend the night inside you" = "stay as a permanent guest" is self-contradictory (`lin` is an overnight stay). 5:5 and 5:1 glosses are fine.
28. **Variants file order.** Entries for 1:18 and 5:15-16 appear out of verse order (1:18 after 2:28, 5:15 after 6:16). Re-sort if the build does not.
29. **Variant 2:1.** The `b` says "No scroll of Jeremiah preserves 2:1-2"; correct, and the reading label "(nothing)" is fine, but 2:1 and 2:2 are two entries for one Greek change; the `p` link is OK.
30. **Chapter 1 "J" and note 5** attribute to Rashi "God's knowledge of Jeremiah to the days of Adam" and "Israel acting like the nations": both verified (Rashi: "from Adam"; three readings of "prophet to the nations"). Good. No change; listed to show it was checked.
31. **Anglican entry in book.json card** quotes Article 6 with no closing punctuation and without a verb. The Ethiopian Orthodox (Baruch in their canon) and Coptic views are absent from the Baruch card (see 7).
32. **book.json "Place in the Bible".** "In Jewish Bibles it is the second of the Latter Prophets, after Isaiah" is true of printed Bibles, but the Leningrad Codex (the base text) orders Jeremiah, Ezekiel, Isaiah, as Bava Batra 14b says. Say so; the sentence now suggests the Talmud is the exception.
33. **book.json chronology.** It matches 2 Kings (Josiah 640-609, Jehoiakim 609-598, Jehoiachin 3 months to March 597, Zedekiah 597-586, fall 586 with 587 mentioned). But the text says the dates follow "its page on the dating of the kings", and content/topics/regnal-chronology.json says nothing about those reigns (it covers the divided monarchy). Cite 2 Kings only, or add the dates there.
34. **book.json Jerome.** "Jerome wrote a commentary on chapters 1-32 (AD 414-416)": the dates of the commentary, left unfinished, are usually given as about 415-420 (Graves). Verify before keeping "414-416" (also in `jerome-jeremiah`).
35. **book.json Qumran lists.** "4QJer-b and 4QJer-d with the shorter text; 4QJer-a, -c and -e with the longer" matches the brief. I confirmed 4QJer-b and -d with the Greek, and 2QJer, 4QJer-a, -c with the Masoretic Text, from secondary sources only; I could not confirm 4QJer-e. Cite DJD XV (Tov) in `sources`.
36. **dss.py check of the claims.** Only 4Q72 has words in chapters 1-6: restored fragments in 4:5, 4:13-16 (and an empty 4:6 line). The claims in note 58 and chapter 4 ("agrees apart from a waw", "begins at 4:5", "ends at 4:16") are correct. Chapter 6 deep ("no scroll preserves any readable word") is correct. Note 58 should add that the `waw` ("and blow", `vetiku`) is the Ketiv reading that 4Q72 shares, i.e. a witness for the Ketiv.
37. **Familiar lines.** 1:5 and 4:23-26 stay close to the usual English only where the Hebrew leaves little choice; 1:10 is acceptably re-worded ("pull up / pull down", "in charge of").
38. **Nothing reader-facing says "from memory".** The grep over book.json and all 01-06 files found no such phrase; the only first-person is finding 6.

## Checked and found sound (so the fixer does not touch them)

- Plain 1:5, 1:11-14, 2:13, 3:16, 4:4, 4:23-26, 5:1, 6:14 (except `'ammi`), 6:16, 6:22-24 against 50:41-43.
- 2:20 "I will not serve" (Ketiv `e'evod`; the Greek, Vulgate and context agree; the Qere is `e'evor`).
- Haftarot claims (1:1-2:3; 2:4-28 with 3:4; 8:13-9:23 on the Ninth of Av), Yoma 52b, 2 Macc 2:4-8, Dositheus's list, Fishbane 1971, CCC 120 and 2270, Basil Letter 188 canon 2, Didache 2:2, BFM 2000 art. XV, Herodotus 1.103-106, Arie-Rosen-Namdar (Arad frankincense), Childs 1959.
- Book facts: 1,364 verses, about 21,800 words, longest by word count; the Greek about one-seventh shorter; Duhm 1901, Mowinckel 1914 (A, B, C, D), Nicholson 1970, Thiel 1973; Order of the Greek books.

## Fixes applied

1. Fixed. 6:13-15 rebuilt from the literal line away from the NIV shape and settled as the model for 8:10-12: 6:13 "grabs at gain he has no right to"; 6:14 "healed the broken place of my people" (my people for `'ammi`, not "my dear people"; "bandage" gone, with its gloss, note 89 and the topics.json mention); 6:15 "Are they ashamed of the abomination they have done? ... they do not even know what humiliation is ... At the time I call them to account" (one verb for `paqad`, one noun for `to'evah`). Note 88 now lists every Hebrew difference from 8:10-12. Cross-part: the 07-12 fixer must match 8:10-12 to this wording.
2. Fixed. 6:7 is now "Water stays fresh in a well, / and so her evil stays fresh in her" (no NIV shape; the Greek `psychei` agrees with "fresh"). New `word`/`deb` note on `heqir` gives both senses and which versions take which; new variant on the Ketiv (cistern) against the Qere (well).
3. Fixed. 3:19 rebuilt from the literal line ("I said to myself, 'How I will set you among the children ..."); its gloss moved to the new anchor. New variant explains the Greek "So be it, Lord" (a reply, with "nations" for "sons"). `'ekh` is now "How I will", not "How I wanted".
4. Fixed. Added variants for 2:2 (two entries: the Greek "follow the Holy One of Israel", and no unsown land), 2:16 (Greek "knew you and mocked you"), 2:25 (Qere throat / Ketiv threshing floor), 2:27 (Ketiv and Greek "me" against the Qere "us"; evidence stated as split), 2:34 (Greek "under every oak"), 3:1 ("shepherds"), 3:2 (Qere "lain with" / Ketiv "ravished"; Greek "crow"), 3:3 (two entries: showers and spring rain, the Greek's "many shepherds"), 3:7 (imperative), 6:7 (Ketiv) and 6:29 (Ketiv/Qere and the Greek line). Checked against Swete only: Ziegler was not available, and the first chapter page now says so.
5. Fixed. Variant 1:18 now says the Greek has the fortified city and a bronze wall and lacks only the iron pillar (p, reading, plain and why corrected). Variant and note for 2:28 now say the Greek verb is "they sacrificed to Baal" (no altars).
6. Fixed. The first-person line in variant 3:1 is gone: the Vulgate is cited as printed at Bible Gateway (an imperative, checked there). Rashi on 3:16 verified on Sefaria (the whole assembly will be holy, so no ark is needed). Rashi on 6:16 is only the gloss "rest, Heb. marge'a", not "quiet": the note, the chapter 6 Jewish view and the variant's source list were corrected.
7. Fixed. book.json "Books linked to Jeremiah's name" no longer puts 4 Baruch outside every Bible: it is Scripture only for the Ethiopian Orthodox Tewahedo Church (Rest of the Words of Baruch). The works proposal changes tier "other" to "eth" with the same wording. An Ethiopian Orthodox view was added to the Baruch canon card. A Coptic view was not added, for lack of a source I could verify.
8. Fixed. The 1:5 card is now "How do churches use Jeremiah 1:5 in teaching on the unborn?" with Catholic, Orthodox, Lutheran (LCMS study; ELCA 1991 statement), Reformed (Westminster Larger Catechism 135-136; PCA 1978 report), Anglican (Church of England MPA statements), Baptist and Methodist, each with a source key (five new keys in sources.json, each checked on the web). The unsourced Baptist "its writers cite" sentence and the evangelical and Latter-day Saints claims were dropped.
9. Fixed in text, kept in the Plain. The note on 6:2 now says plainly that the Plain follows the comparison reading, the less common one among the versions checked (NIV, ESV and NASB take "destroy"; the KJV and NRSVUE compare, checked on Bible Gateway), names the other root, gives the Greek, and drops the claim that the Hebrew "as written" decides. "Lovely and delicate pasture" is now "a dainty pasture" (no double rendering of `navah`). I did not switch to "destroy": the lead's decision was to state the minority reading, not replace it. Commentators' names were not added because I could not verify them.
10. Fixed. Added `com` notes on 1:5 (not a definition of when life begins) and 6:16 (the "ancient paths" are not old customs); a `mis` note on 4:23 (`'erets`, earth or land); a `nu` note on `nefesh` at 6:16 ("yourselves", Matthew's "souls"); a `deb` note at 6:7. The 5:1 note now says the verse is not a proof that no one anywhere is righteous. 6:14 "Peace, peace" stays a `views`/`nu` note: a popular-misuse claim there could not be sourced.
11. Fixed. 2:3 is now "All who devour it are held guilty; disaster comes on them".
12. Fixed. 2:31 closes with a double quote.
13. Fixed. 2:34 no longer has "Yet in spite of all this" ("But there is all of this," with "and you say" in 2:35). Note 38 says the pointed form is "you found" and that the consonants allow "I found" (KJV, and the Greek verb).
14. Partly fixed. Reworded: 3:5 ("that is what you say"), 4:23 ("they had no light"), 4:16 ("Tell the nations ... Siege troops"), 6:11 ("The LORD's fury fills me, and I am worn out trying to hold it back"), 1:8 ("to pull you free"), 1:2 ("of his rule"). Kept 1:1 "from among the priests who lived at Anathoth": the Hebrew leaves little choice and the shape differs from both versions.
15. Fixed. The false "unusual pointing" remark is gone (the variant now says `hayashuv` is the ordinary question). The "Yet return to me" entry says it is an infinitive absolute read as a command (Rashi, Vulgate), against the question of the Greek and the revised JPS (2023, checked on Sefaria). The 1985 NJPS was not named, since I could not check it.
16. Fixed. The `why` of the second 4:19 entry now states the reason for the mix of persons ("I writhe ... you have heard"): each Ketiv/Qere pair is judged separately; the Qere puts "my soul" in direct address; the Greek agrees with neither in person.
17. Fixed. "The earliest use of 'Arab'" removed from note 42.
18. Fixed. The Akkadian/Aramaic sentence in note 76 is cut; the 2 Kings 18:26 episode stays.
19. Fixed. Note 82 says Beth-hakkerem is "usually identified" with Ramat Rachel, names the other proposals, and says that Lachish Letter 4 speaks of "signals" and that fire signals are an inference.
20. Fixed. Note 97 now says "commentators explain" the cupellation picture, with no unsourced "modern studies".
21. Fixed. The unsourced "part of the Jewish liturgy of repentance" is dropped from note 54.
22. Fixed. Note 71: the unclear sentence and the unsourced count "thirty-seven" and "more than any other book" are gone; it now says the word describes an oath.
23. Fixed. Note 60 now has Israel as a flock that lions drove off (50:17, Nebuchadnezzar the last to gnaw the bones) and the LORD as a lion against Edom (49:19) and Babylon (50:44).
24. Fixed. Note 94 lists the Hebrew differences between 6:22-24 and 50:41-43 (northern land / the north, many kings, `hu'` / `hemah`, Zion / Babylon, "we" / "the king of Babylon").
25. Fixed. The chapter 5 card's `why` now says Jeremiah guesses the poor do not know and finds that the great do. Vague "some commentators" views were replaced by labelled arguments; Holladay is named on the chapter 1 call date (his birth-year view), Bright on chapter 2. New cards for 3:15-18 and 4:3-4 (the alarm card now starts at 4:5). Other scholars' names were not added where I could not verify their positions.
26. Declined. The convention is kept: quotation marks mark alternating speakers in narrative (chapter 1); the LORD's continuous address (2:2 on, including 3:6-18) is unquoted, as in the poems around it. Changing 3:6-18 alone would mix the two.
27. Fixed. The 4:14 gloss is now "lodge in your mind".
28. Fixed. variants.json is sorted by verse.
29. No change needed (the reviewer found the entries correct).
30. No change needed (verified by the reviewer).
31. Fixed. The Anglican entry in the Baruch card has its closing period; the Ethiopian Orthodox view was added (finding 7).
32. Partly fixed. book.json now says: in printed Hebrew Bibles Jeremiah follows Isaiah; Bava Batra 14b lists Jeremiah, Ezekiel, Isaiah, and some medieval manuscripts follow it. The claim that the Leningrad Codex orders Jeremiah, Ezekiel, Isaiah was not repeated: Wikipedia's Leningrad Codex article lists Isaiah, Jeremiah, Ezekiel, and I could not settle it, so the Codex is not named.
33. Fixed. book.json now cites only the site's 2 Kings for the dates. A request was added to content/proposals/prophets/topics.md for a "last kings of Judah" section on regnal-chronology with the Josiah, Jehoiakim, Jehoiachin and Zedekiah dates.
34. Fixed. Jerome's commentary is now "begun about AD 414 and left unfinished at his death in 420" (book.json and the `jerome-jeremiah` source). Sources disagree on the dates (about 414 in one catalogue citing Kelly; 418-419 in the Nicene and Post-Nicene Fathers table), so no end date for the writing is given.
35. Fixed. `djd15-prophets` (Qumran Cave 4.X, DJD XV) added to the book sources and to the "Two editions, two stages" entry. The claim about 4QJer-e is as the brief gives it and rests on DJD XV; the scroll itself was not read.
36. Fixed. Note 58 now says the waw of `vetiku` is the Ketiv reading, so 4Q72 is a witness for the written text.
37. No change needed (the reviewer found the lines acceptable).
38. No change needed. A new search of the part and book.json found no "from memory", "not rechecked" or first-person admission.
