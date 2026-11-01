# Hostile review: Jeremiah 50-52

## Verdict

The part is careful and mostly accurate. It has no invented sources or manuscripts, and no reader-facing "from memory" wording. Most of chapter 52 matches the site's 2 Kings where the Hebrew is the same. I confirmed these claims: the only Qumran copy of 50-52 is 4QJer-e (4Q72b, 50:4-6 only; checked against the dss cache); the Greek minuses at 51:44b-49a, 52:2-3, 15, 27b-30; Rashi on 51:1 and 51:41 (including the Tanchuma citation); Josephus Ant. 10.181 (Nebuchadnezzar's 23rd year); the Babylonian Chronicle's year 10 unrest; the American revision of Westminster 25.6 in 1787-89; and Xenophon, Cyropaedia 7.5. But several errors would mislead a reader. These are: a wrong siege length (18 months instead of about 30); a wrong Josephus section for Zedekiah's burial; notes and a chapter table that claim "the same English" for parallels where the English differs; a missing variant at the well-known crux 51:3; a variant argument that runs backwards at 51:1; an unsupported claim about Jewish liturgy; and unexplained year-number conflicts in 52:28-29. A fixer can handle all of it in one pass. The build check for Jer/50-52 shows no error or warning in this part. The 6 errors it prints are Ezk source-key clashes, and the 1 warning is in Jer/book.json (1:1), both outside this part.

Counts: critical 0, major 8, minor 18.

## Major findings

**1. Major. notes.json 52:5 ("Eighteen months") and topics.json `jerusalem`: the siege length is wrong.**
The note says "From January 588 to July 586 BC the siege lasted about eighteen months". The note's title also says "Eighteen months". The topic says "about eighteen months".
Evidence: 52:4 (tenth month, ninth year) to 52:6 (fourth month, eleventh year) is two and a half years, about 30 months.
Fix: change to "about thirty months" in the title, the note and the topic.

**2. Major. plain.txt 50:40, 50:44, 50:45 against 49:18-20; notes.json 50:40, 50:44; chapters.json ch. 50 deep table.**
The brief says to match the earlier verse exactly where the Hebrew is the same. The notes and the chapter table claim it was done ("keeps the English of Jeremiah 49:18 where the Hebrew is the same"; "50:40, 44 and 45 use the English of Jeremiah 49:18-20"). That is false. The Plain English Translation differs where the Hebrew is the same:
- 50:40 "the towns around them" against 49:18 "their neighbor towns". The Hebrew is the same word, *sh'kheneyha*.
- 50:40 "no human will stay there" against 49:18 "no human being will stay there" (*ben adam* in both).
- 50:44 "Who can call me to account?" against 49:19 "Who can call me to court?" (*yo'idenni*).
- 50:44 "Whoever is chosen, him I will set over it" against 49:19 "whomever I choose" (*mi bachur*).
- 50:44 "Is there a shepherd who can face me?" against 49:19 "What shepherd is there who can stand before me?"
- 50:45 "dragged away" against 49:20 "dragged off".
- 50:45 "surely be left in horror over them" against 49:20 "surely ... made a ruin over them" (the same *yashim 'aleyhem naveh*).
- The introductory "listen to the plan the LORD has drawn up" against "hear the LORD's plan, which he has planned".

Fix: the lead may decide which version is better, but the pair must agree. Then correct the two notes and the table sentence. The one real difference is that 50:40 uses *ne'um YHWH* "declares" and 49:18 uses *amar YHWH* "says". That was handled correctly and should be kept.

**3. Major. plain.txt 52:9 against 39:5.**
Both verses have the same Hebrew, *wayedabber 'ito mishpatim* "he spoke judgments with him". 52:9 reads "he pronounced sentence on him". 39:5 reads "the king gave his judgments against him". The brief ties 39:1-10 to 52:4-16. Give the pair one wording (39:5 is the earlier verse). Also, 2 Kings 25:6 has the same idea ("his case was judged"), though there the Hebrew is plural: *wayedabberu*. The 52:9 note is right about that.

**4. Major. notes.json 52:11 ("Did Zedekiah die in peace?"): wrong Josephus citation.**
It says "Josephus says Nebuchadnezzar buried him with royal honors (Antiquities 10.141)". Whiston's 10.141 only says he was blinded and taken to Babylon "according to the prediction of Ezekiel". The burial "magnificently" is in 10.154.
Fix: cite 10.154. The remark that Josephus says the two prophecies seemed to conflict belongs to Ant. 10.104-107, so cite that.

**5. Major. variants.json: no entry for 51:3, and the Plain English Translation gives no signal.**
The Hebrew is a known crux. The Ketiv is missing the second verb. The Qere (see texts/auto, 51:3) supplies *yidrokh*. The MT is negative: "Let the archer not bend his bow". The Greek (28:3) is positive: *teinetō ho teinōn ... perithesthō*, "let him bend ... let him put on armor".
- The Plain English Translation "must not draw his bow; ... must not rise in his coat of mail" is ambiguous about who is addressed. The usual choice is the Babylonian defenders (so the NIV; the ESV reads it differently).
- The next clause, "put her whole army under the ban", is addressed to the attackers.
- Fix: add a variant entry (MT with Qere/Ketiv, the Greek positive reading, and what the Vulgate and Targum do) and a short note on the speaker.

**6. Major. variants.json 51:1 ("Leb-qamai or Chaldea?"): faulty reasoning.**
The entry says "Either the translator solved the cipher, or his Hebrew read *Kasdim*; the first is more likely because the Greek also omits the other cipher, Sheshach". That runs backwards. A translator who solved one cipher would not drop the other. The Greek's omission of Sheshach (also at 25:26) is the standard evidence that the Greek's source lacked the ciphers, and that the ciphers entered the Hebrew later. This is Tov's argument, which the entry cites elsewhere.
Fix: reverse the weighting and state both options fairly. The chapter-51 "deep" paragraph is more careful and can be the model.

**7. Major. chapters.json ch. 52 views.J and ch. 51 settings (51:34-40): invented liturgical claims.**
- 52 J: "Jewish tradition reads the chapter on the Ninth of Av". Jeremiah 52 is not a Tisha b'Av reading. The haftarah is Jeremiah 8:13-9:23. Taanit 29a discusses the dates, and the day commemorates the burning.
- 51:34-40 `readers`: "Later exiles, who prayed it with Lamentations on the Ninth of Av". There is no source for this, and it is anachronistic for the exile.
Fix: remove both, or state them accurately with a source (Taanit 29a for the dates; Jeremiah 8:13-9:23 as the haftarah).

**8. Major. notes.json 52:30 / 52:28-29 / 52:12: the year numbers are not reconciled.**
- 52:28 has the first deportation in Nebuchadnezzar's *seventh* year. 2 Kings 24:12 has the surrender and exile of Jehoiachin in the *eighth* year. The note says nothing about this, though it is the standard puzzle (Babylonian reckoning against Judean).
- 52:29 puts the Jerusalem exile in the *eighteenth* year. 52:12 and 2 Kings 25:8 put the burning in the *nineteenth*. The note gives "eighteenth = 587/586" and a separate note keeps the 19th, with no explanation.
- The 52:28-30 setting card says the counts are "best read as a separate count, probably of men". That is a conclusion. The note presents several readings.
Fix: add one explanatory note (or extend 52:30) on the 7th/8th and 18th/19th conflicts, with the usual explanations (accession-year against non-accession reckoning, or a different source). Make the card's "why" say "perhaps".

## Minor findings

**9. Minor. variants.json 52:31 (the second entry, "Lifted up the head, or took his head and cut his hair?").**
The entry says the Greek spelling "Joakim" is "the usual Greek form of Jehoiakim, so the two kings' names are confused". The Greek *Ioakeim* is the normal rendering of Jehoiachin here. Swete's spelling is *Ἰωακείμ*. Nothing is "confused". Delete that sentence.

**10. Minor. variants.json, missing entry at 52:6.**
Greek 52:6 lacks "the fourth month" ("on the ninth of the month"). 2 Kings 25:3 MT also lacks it, and the site's Kings Plain English Translation supplies it. Add an entry. The deep table notes the Hebrew only.

**11. Minor. notes.json, ketiv/qere not shown (texts/auto).**
- 50:6: the Qere *shovevum* (Ketiv *shovevim*) and *hayu* against *hayah*. The scroll also reads *hayah*.
- 51:34: the Ketiv has "us" and the Qere "me" (five verbs). The Plain English Translation uses "me" with no note.
- 50:15: *ashyoteyha* is a hapax of uncertain sense (towers, props, buttresses; Greek "battlements").
Add short notes.

**12. Minor. variants.json, 28 entries carry the same boilerplate sentence**: "No Qumran copy preserves this verse; the only Qumran copy ... is 4QJer-e ...". State it once, on the first entry or on the chapter page. Also, 50:4-6 itself has a scroll reading that differs from the MT in word order (*ובעת ההיא ההמה*), but there is no entry. The writer mentions it only on the chapter page.

**13. Minor. Greek witness.**
The brief says "the Greek" on this site means Ziegler or Rahlfs. Every entry is sourced to Swete's Vaticanus (labeled so in the variants, but "the Greek" in notes and chapter pages). The Greek minuses are consistent with the brief's list. The prose should say "Codex Vaticanus (Swete)" or note that Ziegler was not checked.

**14. Minor. plain.txt 51:5 "even though their land is filled with guilt against the Holy One of Israel".**
The sentence shape and the "though ... full of guilt against the Holy One" wording are very close to the ESV. The Hebrew is *ki arsam male'ah asham miqqedosh Yisra'el*. Rebuild from the literal line (for example "for their land is full of guilt before..."), and keep the note on whose land it is.

**15. Minor. plain.txt 51:11 "Fill the quivers!"**
The Hebrew is *hashelatim* (usually "shields"). The Plain English Translation's "quivers" matches one major modern version. The note is honest about it, but keep the choice only if the Greek (*pharetras*) is the reason. Alternatively, use "shields" and put "quivers" in the note.

**16. Minor. Word choices in the Plain English Translation that drift from or add to the Hebrew.**
- 52:11 "house of punishment" for *beit happequddot*. This is the weakest of the options named in the variant ("appointments, punishments, guards"). It is surer to follow the note's "custody"/"prison" sense, or keep "house of guard duty".
- 50:21 "Strike them down ... to the last of them" for *harog ... 'acharehem* (kill; "after them").
- 51:10 "brought our right into the light" adds "into the light". The Hebrew is *hotsi ... tsidqotenu*.
- 50:9 "empty hands" (Hebrew "returns empty"); "Their arrows" (Hebrew "its arrows").
- 50:36 "babblers" for *baddim* is defensible and noted.

**17. Minor. notes.json "most" and ranking claims not checked, against the brief.**
- 50:5: "most Christian readers say it is [the new covenant] and many Jewish readers ...".
- 51:20: "The first reading is the most common".
- 50:1: "Radak and Calvin read them so" (verify against the keyed sources).
- The chapter 52 deep paragraph: "most modern scholars think an editor copied Kings".
Reword or source each.

**18. Minor. notes.json 51:45 says "the book of Ezra says the first return under Cyrus was small".**
Ezra 2:64 gives 42,360. Say instead that the historical size is debated, with the numbers disputed. Source the "many stayed" point.

**19. Minor. notes.json 51:42 (spec).**
The first-person line "I have not found it argued in the commentaries I read" is reader-facing personal testimony, and it is not verifiable. A spec note must be unpublished. Remove the sentence or search first. If a published source exists, retype the note as `com`. The Tiamat/Marduk and sea-chaos background for *tannin* and the sea in 51:34, 36 and 42 is often drawn.

**20. Minor. chapters.json ch. 52 deep table, row 52:9-11.**
It says "Jeremiah adds ... the sentence". Kings 25:6 also has it (*wayedabberu ... mishpat*). Say instead that the subject changes from plural to singular. Also add rows for 52:31 "in the year of his reign" against "in the year he became king", and 52:3 "in Judah" against "and Judah".

**21. Minor. chapters.json ch. 51 traditions card ("Is the 'Babylon' ... a church?").**
- The Westminster claim is correct but vague. Say the American revision of 1787-89 (adopted 1788) dropped the Antichrist clause of 25.6. Other Reformed bodies kept it.
- The card has no Orthodox row and no Baptist row (the 1689 Baptist Confession 26.4 names the pope as the Antichrist). It has no source for the Catholic statement that "Catholics reject" it. Give the Catechism (CCC 675-677 for Antichrist) or a named author.
- The card-level `s` is empty. It is also a Revelation question, so say that it is.

**22. Minor. chapters.json ch. 51 views.X "Early Christians, from Augustine on".**
Augustine is not early. Reading Babylon as Rome goes back to Tertullian and Hippolytus. Reword.

**23. Minor. chapters.json date inconsistencies.**
Chapter 50 H says "a revolt in 521" for Darius, while the deep paragraph says "522 and 521". The ch. 50 C view says the Greek is shorter at 50:7, but 50:7 is a different reading, not a shorter one. The `babylon` topic says "The Hebrew is about one-seventh longer than the Greek here". The one-seventh figure is for the whole book. Elsewhere the project says one-eighth (lxx.py) and "about one-seventh shorter" (brief). Pick one wording.

**24. Minor. notes.json 50:3 says "Babylon was Jeremiah's 'foe from the north' (1:14-15; 4:6; 6:22)" as settled.**
The brief asked to name the Scythian alternative, which is not noted. Add a clause.

**25. Minor. notes.json 51:25 closing sentence is garbled** ("The brick of a ruined city can be reused: verse 26 says no stone will be taken ... so she will not even be quarried"). Rewrite.

**26. Minor. Weidner list (notes.json 52:32; chapters.json ch. 52 deep).**
"Tyre, Ashkelon, Lydia, Media, Persia and Egypt" is plausible, and I confirmed the name, the five sons and the 13th year (592). I did not confirm the list of lands from a source I could check. Cite ANET 308 (already a source key) or Weidner by page, or trim to the confirmed items.

**27. Minor. glosses.json 52:7 "a gate in the south of the city, where two walls meet".**
The location is debated and "where two walls meet" is invented. Use "a gate between two walls in the city's defenses".

**28. Minor. Settings coverage.**
Every speech block has a card, but the "why" for 50:8-10 says "warn those who had settled ... to leave before the attack". That is a reading. Add "on the exilic reading". Also, 52:1-34 `by` says "An editor", which is the critical view. Add "or the prophet or Baruch, as Jewish tradition holds the book's final form".

## Checks that passed

- Qumran: only 4Q72b (4QJer-e), 50:4-6. The writer's statement is exact.
- 52:12 (tenth against seventh day), 52:25 (seven against five), 52:22 (five against three cubits) and 52:31 (25th against 27th) all match the Hebrew.
- 52:1-3, 52:5, 52:13, 52:24, 52:26-27 and 52:32-34 match the site's 2 Kings where the Hebrew is the same.
- 50:41-43 against 6:22-24 and 51:15-19 against 10:12-16 are consistent.
- 50:40 "the LORD declares" (*ne'um*) against 49:18 "says" (*amar*) is correct.
- Rashi on 51:1 and 51:41 (with Tanchuma, Korach 12) is exact. Josephus Ant. 10.181 is exact. The Nabonidus Chronicle dates (16 Tashritu; 3 Arahsamnu) are right. The Babylonian Chronicle year 10 (595/594) unrest and year 11 march are right. Cyropaedia 7.5 and Herodotus 1.191 are right. Westminster 25.6 was revised in America in 1787-89.
- No reader-facing text says "from memory" or "not rechecked".

## Fixes applied

1. Fixed. Siege length is about thirty months (588 to 586 BC): note 52:5 retitled "About thirty months" and rewritten; the jerusalem section in topics.json now says about thirty months (and topics.md asks the lead to check the shared jerusalem lead).
2. Fixed. Plain English Translation 50:40, 50:44 and 50:45 now use the English of 49:18-20 wherever the Hebrew is the same ("their neighbor towns", "no human being", "Look, like a lion", "thick brush", "pasture that never runs dry", "whomever I choose", "Who can call me to court?", "What shepherd is there who can stand before me?", "That is why you should hear the LORD's plan", "dragged off", "made a ruin over them"). The remaining differences are the Hebrew's and are named in the notes at 50:40 and 50:44 and in the chapter 50 table: "God overturned" (50:40) against the passive (49:18); ne'um YHWH "the LORD declares" (50:40) against amar YHWH "the LORD says" (49:18), as the lead decided; "make them run" against "make him run"; Babylon and the Chaldeans against Edom and Teman. PAIR TO KEEP IN SYNC: 49:18-20 (46-49 fixer) with 50:40-45 here; I matched the current 46-49 file.
3. Fixed. Plain English Translation 52:9 now matches 39:5: "brought him up to the king of Babylon at Riblah in the land of Hamath, and there the king of Babylon gave his judgments against him" (39:5 says "the king" because Nebuchadnezzar is named just before). Note 52:9 rewritten, with the Kings plural verb stated; the chapter 52 table row corrected.
4. Fixed. Note 52:11 now cites Josephus, Antiquities 10.154 for the burial and 10.104-107 for Zedekiah's disbelief of the two prophets (both checked against the Whiston text).
5. Fixed. New variant at 51:3 (Masoretic Text with its Ketiv/Qere, the Greek 28:3 positive reading, the Vulgate and Targum Jonathan negative; the JPS Tanakh footnote as printed on Sefaria) and a new note on who is addressed.
6. Fixed. Variant 51:1 rewritten with both explanations of the Greek stated fairly; the 51:41 variant's wrong claim that the Greek also omits Leb-qamai's cipher is corrected.
7. Fixed. Removed "Jewish tradition reads the chapter on the Ninth of Av" and the claim that exiles prayed 51:34-40 with Lamentations on the Ninth of Av. Chapter 52 J now says what Taanit 29a discusses and that the day's haftarah is Jeremiah 8:13-9:23.
8. Fixed. New note at 52:28 on the seventh/eighth and eighteenth/nineteenth year numbers (Babylonian Chronicle, 2 Adar of year 7 = 16 March 597 BC; Jeremiah 32:1; three kinds of explanation, none certain); the 52:30 note points to it; the 52:28-30 card now says "may be" and "perhaps".
9. Fixed. Deleted the sentence about "Joakim" and confused kings in the 52:31 variant.
10. Fixed. New variant at 52:6 (the Hebrew names the fourth month; the Greek and the Hebrew of 2 Kings 25:3 do not).
11. Fixed. New notes at 50:6 (Ketiv/Qere hayah/hayu and shovevim/shovevum; 4QJer-e has the Ketiv forms), 50:15 (ashyoteyha, a word found only here; Greek "battlements") and 51:34 (Ketiv "us", Qere "me" on five verbs).
12. Fixed. The Qumran sentence and the editions paragraph are now stated once (first variant, 50:2). New variant at 50:4 for 4QJer-e's missing "in the days" and added "those" (checked in the Abegg-Bowley-Cook transcription).
13. Fixed. The chapter 50 witness paragraph now says that "the Greek" in this part means Swete's Codex Vaticanus and that Ziegler was not used; "ziegler-jeremiah" was removed from the variants' source lists for that reason.
14. Fixed. Plain English Translation 51:5 rebuilt from the literal line: "but their land is full of guilt / before the Holy One of Israel"; note anchor updated.
15. Partly. Plain English Translation keeps "quivers": the verb is "fill", the Greek has pharetras, and Rashi (read on Sefaria) glosses hashelatim as quivers. Note 51:11 now says so and cites Rashi; "Many translators" became "Some translators".
16. Fixed. 52:11 "house of punishment" is now "prison" (variant and chapter pages updated); 50:21 "to the last of them" is now "going after them"; 51:10 is now "brought out our righteous acts"; 50:9 is now "Its arrows ... who does not return empty". 50:36 "babblers" kept (already noted).
17. Fixed. 50:5 "most Christian readers" reworded; 51:20 "most common" removed; 50:1 "Radak and Calvin read them so" removed (the Radak text on Sefaria for 50:1 is only the verse, so it could not be verified) and the two source keys dropped from that note; remaining "Most" claims about scholars (chapter 50 readings, 50:1 note, chapter 52, babylon topic) became "Many".
18. Fixed. Note 51:45 now says the size and timing of the return are debated (Ezra 2:64-65 gives 42,360), that communities stayed in Babylonia, and names the Babylonian Talmud.
19. Fixed. The first-person sentence is gone from the 51:42 spec note; it stays typed spec and makes no claim about the commentaries.
20. Fixed. Chapter 52 table: the 52:9-11 row now says the subject changes from plural (Kings) to singular; rows added for 52:3 ("Jerusalem and Judah" against "in Jerusalem and in Judah") and 52:31 ("in the year of his reign" against "in the year he became king"); the 39:1-10 pair sentence added.
21. Partly. Reformed row now says the American revision of 1787-89 (adopted 1788) dropped the clause and other Reformed bodies kept it; Baptist row added (London Baptist Confession 1689, 26.4); Catholic row now cites the Catechism (CCC 675-677) and no longer says Catholics "reject" a claim; the card's s is filled and the question says it is mainly about Revelation. Declined: an Orthodox row, because no checkable Orthodox statement is in the source list; the lead may add one.
22. Fixed. The X view now names Tertullian (Against Marcion 3.13) and Augustine (City of God 18.2) instead of "early Christians, from Augustine on".
23. Fixed. "Revolts in 522 and 521" in the H view; the C view now says 50:2 is shorter and 50:7 reads differently; the babylon topic now says the Greek is about one-seventh shorter overall (the brief's wording).
24. Fixed. Note 50:3 names the Scythian alternative (Herodotus 1.105) and says the book itself reads the north as Babylon (25:9).
25. Fixed. The last sentence of note 51:25 rewritten.
26. Fixed. The Weidner list of lands is removed from note 52:32 (now "many foreigners at the royal court", as the site's 2 Kings says; the 592 BC date and five sons kept); the chapter 52 deep paragraph had no list.
27. Fixed. Gloss 52:7 is now "a gate between two walls in the city's defenses".
28. Partly. The 50:8-10 card now says "On the exilic reading"; the 52:1-34 card's "by" now gives the critical view and Jewish tradition (Bava Batra 15a: Jeremiah wrote Kings). Baruch was not added because Bava Batra 15a does not name him.

Pairs to keep in sync: 49:18-20 with 50:40-45 (46-49 fixer); 39:5 with 52:9 (39-45 fixer: if 39:5 changes, change 52:9 to match).
