# Hostile review: Isaiah 40–44 (part 40-44)

Reviewer's sources: `node tools/literal.js Isa 40`–`44` and texts/orig/Isa.json; the Dead Sea Scrolls through `tools/dss.py Isa 40`–`44` (1QIsa-a, 1Q8, 4Q56, 4Q57, 4Q61, 4Q62, 5Q3); Swete through `tools/lxx.py Isa 40`–`44`; texts/auto/Isa.json for Ketiv/Qere; Ibn Ezra on 42:1 (Sefaria, Hebrew), Gill's report of Kimchi and Abravanel on 42:1, and the Orion bibliography record of De Troyer and Herbison. `VERBOSE=1 node tools/build.js --check Isa/40-44` gives 0 errors and 0 warnings.

## Verdict

This part is strong. The Plain is built from the Hebrew and is not a copy of the NIV or ESV. The memorized passages (40:1–11, 40:28–31, 43:1–3) differ from both in wording and line shape, and the few matches are mostly ones the Hebrew forces. The authorship crux is handled well: chapter 40's deep section and chapter 44's "strongest case for each view" both give five real arguments per side, label the critical view as the consensus and do not settle the question. The 40:22 "circle" note is careful. The 40:6 and 44:24 choices against the vowels and the Qere are flagged and argued. The 40:7–8 short text is described correctly from the scroll and the Greek. Almost every source exists and says what is claimed. Four things need fixing before this is clean. (1) The Jewish readings of the servant in 42:1 are misattributed: Kimchi reads 42:1 of the King Messiah and Ibn Ezra of the prophet, not Israel. This error is repeated in four places. (2) Every settings card repeats one boilerplate "Traditional view" that never says what these words meant to their first hearers in Hezekiah's Judah, and several "why" fields treat the exilic audience as settled. (3) 41:25 needs a variant: the Great Isaiah Scroll's "by his name" is passed off in the note as a scholar's emendation. (4) The 44:24 variant wrongly says the Greek lacks the words, when Swete's "who else?" is a witness to the written text. The rest are minor findings.

## Findings

### 1. Major: Jewish readings of the servant in 42:1 misattributed (Kimchi, Ibn Ezra)
**Where:** notes.json 42:1 "Look at my servant!" (views, "Who is the servant of 42:1?"); chapters.json 42 `readings[0]` ("Many Jewish commentators (Rashi, Kimchi) ... read it this way") and `views.J` ("Rashi and Kimchi identify the servant with Israel"); topics.json servant-of-the-lord `uncommon[1]` ("well before the medieval commentators preferred Israel").
**What is wrong:**
- The note says "Rashi and Ibn Ezra take it so [Israel]". Ibn Ezra on 42:1 does not. He reports that most commentators take the servant as the righteous of Israel and that the Gaon (Saadia) takes him as Cyrus. He then gives his own view: the prophet is speaking of himself (compare 49:6). Ibn Ezra's own commentary (Sefaria, "Ibn Ezra on Isaiah 42:1") says so.
- Radak (Kimchi) on 42:1 says "this is the King Messiah" (as Gill reports Kimchi, with Abravanel and "other Jewish writers"). The chapter page puts Kimchi on the Israel side, which is the opposite of his reading.
- So the topic's claim that the Targum's messianic reading came "well before the medieval commentators preferred Israel" is wrong for 42:1. The medieval commentators split: Rashi says Israel, Ibn Ezra the prophet, Saadia Cyrus, and Kimchi and Abravanel the Messiah.

The brief asks for the Jewish readings of the messianic passages to be given fairly, so this matters.
**Fix:** In the 42:1 note: "Israel (Rashi); the prophet himself (Ibn Ezra); Cyrus (Saadia Gaon, reported by Ibn Ezra); the King Messiah (the Targum; Kimchi; Abravanel)". Change chapter 42 `readings[0]` and `views.J` to match: Rashi for Israel; Kimchi for the Messiah. Rewrite the topic's `uncommon[1]` to say that the messianic reading of 42:1 runs from the Targum through Kimchi and Abravanel beside Rashi's Israel reading. Add `kimchi-isaiah` (or the existing key for Radak, if one exists) and `ibnezra-isaiah` to the sources.

### 2. Major: settings cards give the traditional audience view as a boilerplate that never reaches Hezekiah's Judah
**Where:** chapters.json `settings`. The 40:1–11, 40:12–31, 41:1–7, 41:8–20, 41:21–29, 42:1–9, 42:10–17, 42:18–25, 43:1–7, 43:8–13, 43:14–21, 43:22–28, 44:1–5, 44:6–8, 44:9–20 and 44:21–23 cards all carry the same sentence ("Isaiah of Jerusalem, about 700 BC in Hezekiah's reign, wrote these words for a generation not yet born ... Their message was kept until it was needed").
**What is wrong:**
- The brief requires each audience view, including Hezekiah's Judah looking ahead to the exile foretold in 39:6–7. In its strongest form (Oswalt, Motyer, Young) the traditional view does not say the words sat unread for 150 years. It says they were given to Isaiah's own circle and the faithful in Hezekiah's Judah, just after the sentence of 39:6–7, to show that God's covenant and his claim to rule history would outlast the coming exile. They were also written down for the exiles who would live it (compare 8:16–17 and 30:8, where Isaiah's words are sealed and written "for a later day").
- No card says what any passage did for that first audience. One example: what the trial of the gods (41:21–29) or the idol satire (44:9–20) meant to Judah in Manasseh's time, when idolatry was official.
- No card has a `readers` field, which the brief asks for (the collected book's later readers).
- The critical view is tailored in some cards but copied in most.
- Several `why` fields treat the exilic audience as settled. Examples: 41:8–20 "Knowing the hearers were captives with no power"; 44:1–5 "Exiles who feared that their children would be lost"; 44:9–20 "people surrounded by the splendor of Babylon's temples"; 43:14–21 `to` "Israel in captivity to Babylon".

**Fix:** Write a traditional view for each card that names what the passage meant for Hezekiah's Judah or Isaiah's disciples, as well as for the future exiles. Make the critical view specific to each passage. Add `readers` (for example, the returned community in Persian Yehud, and later the synagogue). Reword the `why` fields that assume the exile as the setting ("For hearers in exile, or for those told of it in advance, ...").

### 3. Major: 41:25 "he will call on my name": missing variant, and the scroll's reading credited to an emendation
**Where:** variants.json (no entry); notes.json 41:25 "he will call on my name" (deb, "Did Cyrus call on the LORD?").
**Evidence:** The Masoretic Text has יקרא בשמי ("he will call on my name"). 1QIsa-a has ‹ויקרא› ‹בשמו›, "and he will call (or: he will be called) by his name" (dss.py marks it ‹›, but the suffix is -o "his", not -i "my": a real difference, as the dss.py header warns). Swete's Greek has κληθήσονται τῷ ὀνόματί μου, "they will be called by my name". The note lists "With a small change: 'I called him by his name' ... some scholars adopt this" without saying that the Great Isaiah Scroll actually reads "his name". This is the line that bears on whether Cyrus knew the LORD (45:4–5), and the meaning changes.
**Fix:** Add a variant at 41:25 with three readings: the Masoretic Text "he will call on my name" (followed); 1QIsa-a "he will call by his name" (or "he will be called by his name"), cited as "Abegg, Bowley and Cook transcription (ETCBC dss)"; and the Greek "they will be called by my name". Change the note's second option to name the scroll as its witness.

### 4. Major: 44:24 variant says the Greek "lacks" the words; it reads "who else?"
**Where:** variants.json 44:24 "(who was with me?)", `readings[2]`.
**Evidence:** Swete 44:24 ends ἐστερέωσα τὴν γῆν, and 44:25 begins τίς ἕτερος διασκεδάσει σημεῖα ἐγγαστριμύθων, "Who else will scatter the signs of the ventriloquists?" The Greek translator read the written (Ketiv) text מי as "who?" and joined it to the next verse. So the Greek is a third witness for the Ketiv "who", not an omission. This is one of the two departures from the Masoretic vowels or the Qere that the brief singles out.
**Fix:** Change the Greek reading to `orig` "τίς ἕτερος", `en` "who else? (beginning 44:25)", with a `plain` that keeps the question. List it with the Ketiv in the `why` ("the written text has the support of 1QIsa-a, 4Q56 and, in its own way, the Greek").

### 5. Minor: NIV/ESV closeness in a few memorized lines
**Where:** plain.txt 40:6, 40:22, 40:29, 40:31, 42:6, 43:2.
**What:** No verse is copied, but a few lines take on a modern version's frame where the Hebrew allows another:
- 40:31 "They will go up on wings, like eagles" keeps the NIV's frame ("They will [verb] on wings like eagles") with the verb changed. The Hebrew ya'alu 'ever kannesharim has no "on". The note itself gives the Greek "grow feathers" sense. Something like "They will rise with eagles' pinions" or "They will put out wings like eagles" would follow the Hebrew more closely.
- 40:29 "He gives strength to the tired" has the NIV's word order, with one word different. It is mostly forced, but it could be varied (for example, "To the tired he gives strength").
- 40:22 "and spreads them wide, a tent to live in" is close to the NIV's ending ("like a tent to live in").
- 40:6 "A voice says ... And I said, 'What shall I ...'" matches the ESV's frame. It is largely forced, so it can stay.
- 42:6 "a covenant for the people" matches both versions exactly. The Hebrew is berit 'am, "a covenant of people", and the writer's own note is titled that way. The Plain should say "a covenant of the people" or "a people's covenant", so that the text does not decide what the note leaves open.
- 43:2 "If you cross the rivers" adds a second verb that the Hebrew lacks (uvanneharot lo' yishtefukha, "and the rivers, they will not wash over you"). The NIV also adds one.

**Fix:** Revise 40:31, 42:6 and 43:2 as above. Optionally vary 40:22 and 40:29.

### 6. Minor: "tire" and "wear out" are not rendered the same way, though the note says they are
**Where:** plain.txt 43:22; notes.json 40:28 "He never tires, and he never wears out." and 43:24 "Instead you made me slave over your sins".
**What:** The 40:28 note says ya'af = "tire" and yaga' = "wear out", rendered the same each time. But 43:22 renders yaga'ta bi as "you were tired of me". The 43:24 note then calls the pair "tire" and "slave", while the Plain of 43:23–24 has "wear you out" and "wore me out".
**Fix:** 43:22 "for you were worn out with me, Israel"; in the 43:24 note write "'wear out' and 'slave'".

### 7. Minor: the yatsar ("shape") thread breaks at 44:9
**Where:** plain.txt 44:9 "Idol makers"; notes.json 43:10 "No god was shaped before me".
**What:** The 43:10 note says idols "are always 'shaped' by someone (44:9–10)". But 44:9's yotsrei pesel is rendered "Idol makers", while 44:10 has "Who would shape a god". **Fix:** 44:9 "Those who shape idols, every one of them, are emptiness".

### 8. Minor: 42:21 "Because he is righteous" changes the sense
**Where:** plain.txt 42:21.
**What:** lema'an tsidqo is purpose or cause ("for the sake of his righteousness"), and "his" may be God's or Israel's. The Mishnah quoted in the 42:21 note reads it of making Israel righteous. "Because he is righteous" turns it into a statement about God's character and closes off that reading. **Fix:** "For the sake of his righteousness the LORD was pleased / to make his teaching great and splendid", with a note on the referent.

### 9. Minor: 40:12 "measuring bowl" drops "a third", and its gloss gives a wrong size
**Where:** plain.txt 40:12; glosses.json 40:12 "a measuring bowl".
**What:** The Hebrew is bashalish, "in a third (of a measure)", and the Plain loses the "third". The gloss "about a third of a bushel" (about 12 liters) has no basis. A third of an ephah, the usual guess, is about 7 liters or a fifth of a bushel. **Fix:** "in a third-measure", with the gloss "a small dry measure, perhaps a third of an ephah (about 7 liters)", or drop the size.

### 10. Minor: three glosses that mislead
**Where:** glosses.json 40:3, 41:21, 44:6.
- 40:3 "the desert plain" is glossed "the Arabah: the dry rift valley from the Jordan to the Red Sea". Here 'aravah is the desert between Babylon and Judah, as the 40:3 history note itself says. Suggest "the open desert (the steppe between Babylon and Judah)".
- 41:21 "Put your case forward" is glossed "state your case, your honor". God, the judge, is speaking to the gods, so "your honor" reverses the roles. Suggest "make your case in court".
- 44:6 "the LORD of Armies" is glossed "the LORD who commands the armies of heaven". This decides what the term rule leaves open (Israel's armies, angels or stars). Suggest "the LORD who commands every army".

### 11. Minor: 43:13 note misplaces the KJV
**Where:** notes.json 43:13 "Since the first day".
**What:** The note puts the KJV's "before the day was" under the reading "from today on". The KJV in fact takes the first reading (from before time). The reading "henceforth" belongs to other versions. **Fix:** Move the KJV to the first option.

### 12. Minor: wrong verse number for the hammered censers
**Where:** notes.json 40:19 "hammers gold over it", `r` and body: "Numbers 17:4".
**What:** In English numbering the hammered censers are Numbers 16:39 (Hebrew 17:4). Numbers 17:4 in English is about the staffs. **Fix:** Numbers 16:39.

### 13. Minor: 41:14 "maggot" is a consonant change, not a vowel change
**Where:** notes.json 41:14 "Don't be afraid, Jacob, you worm".
**What:** The emendation behind "maggot of Israel" (רִמַּת for מְתֵי, compare Job 25:6) changes letters, not only vowels. **Fix:** Write "Some scholars change the word to rimmat, 'maggot'".

### 14. Minor: Enuma Elish detail reversed
**Where:** notes.json 40:14 "With whom did he talk it over, to gain insight?" (myth).
**What:** "humans are created on Ea's design" reverses the epic. In tablet VI Marduk conceives the plan and tells it to Ea, who gives counsel on the method and then fashions humankind. Whybray's point about Ea as a heavenly counsellor still stands. **Fix:** "Marduk plans the making of humans, and Ea, the wise counsellor, advises on it and carries it out".

### 15. Minor: 41:23 variant writes the Ketiv with a letter it does not have
**Where:** variants.json 41:23, `readings[1]`.
**What:** The Ketiv is ונרא (texts/auto: "K= ve./ne.re'"). The entry prints וְנִירָא, with a yod that is not in the written text. **Fix:** Give the Ketiv as ונרא, read venira' "and we will be afraid".

### 16. Minor: an unsourced date for the 40:7 corrector
**Where:** variants.json 40:7 `readings[0].w` "by a later corrector, perhaps 100–75 BC".
**What:** The reviewer could not verify this date for the corrector's hand, and readers should not see it as fact. **Fix:** Drop the date, or write "dated by De Troyer and Herbison to ..." if their article gives it.

### 17. Minor: the Greek of 43:20 has ostriches, not sparrows
**Where:** notes.json 43:20 "jackals and ostriches".
**What:** In the LXX θυγατέρες στρουθῶν renders benot ya'anah, and στρουθός there is the ostrich (as in 13:21 and 34:13). "Daughters of sparrows" makes the Greek look stranger than it is. **Fix:** "sirens and 'daughters of ostriches'".

### 18. Minor: 44:5 notes (an uncited Mekhilta, a garbled sentence)
**Where:** notes.json 44:5 "This one will say, \"I am the LORD's.\"" and "Another will write on his hand".
**What:** The views note cites "the Mekhilta" (Mekhilta de-Rabbi Ishmael, Nezikin 18, which reads the four clauses as the wholly righteous, proselytes, penitents and God-fearers) but gives only `rashi-isaiah` as its source. It also flattens the four groups into two. In the history note, "it is not clear whether this is ink, a tattoo, or writing with the hand" seems to be about 44:5 but sits after the quotation of Leviticus 19:28. **Fix:** Add a Mekhilta source key, list the four groups, and move the "ink or tattoo" clause so that it plainly describes 44:5.

### 19. Minor: count error in 41:6
**Where:** notes.json 41:6 "Be strong!".
**What:** "The root chazaq appears four times". It appears five times in 41:6–13 (41:6; twice in 41:7; 41:9; 41:13). **Fix:** "five times".

### 20. Minor: smaller variants and notes worth adding
- 40:12: 1QIsa-a has מי ים, "the waters of the sea", for "waters".
- 41:29: 1QIsa-a has אין, "nothing", for און "a fraud", a reading some versions follow.
- 44:26: the Greek has "the cities of Idumea" for "the towns of Judah".
- 44:28: the Greek has "I will lay the foundations of my holy house".
- 42:6: ve'etsorkha can be "I keep you" (natsar) or "I form you" (yatsar). No note says so.
- 41:2: the KJV's "the righteous man from the east", which was long read of Abraham or Christ, is not mentioned in the "Righteousness as victory" note.
- 44:6: the Greek has "I am first and I am after these things" (μετὰ ταῦτα). Worth one clause, because Revelation's "the Last" is not the Greek of Isaiah.
- 43:19: the variant says the "other witnesses" have "rivers", but 4QIsa-g (4Q61) is broken at that word. Say so.

### 21. Minor: the 41 traditions card (church-israel) needs sources and balance
**Where:** chapters.json 41 `traditions[0]`.
**What:** The conflict is real. But the "Evangelical" view has no source, and it overlaps the Dispensationalist view: it describes historic premillennial or progressive-dispensational views. The Reformed answer rests on Calvin alone, while many Reformed theologians (Charles Hodge, John Murray on Romans 11) also hold a future for ethnic Israel. **Fix:** Source the Evangelical view (for example, Blaising and Bock, <i>Progressive Dispensationalism</i>, or George Eldon Ladd). Add a clause or source for the Reformed future-conversion view. Consider an Orthodox or Lutheran answer. The 44 card (alpha-omega) is accurate and well sourced: the Jehovah's Witnesses answer matches <i>Insight on the Scriptures</i>, and the Latter-day Saints answer matches "The Living Christ".

### 22. Minor: mechanics
- notes.json 40:13: "believers hold 'Christ's mind' See the variant" needs a period.
- notes.json 40:25: "from the first chapter (1:4) to the last (60:14)" reads as if chapter 60 were the last chapter. Write "to its last use (60:14)".
- notes.json 44:8: the quotation '"He is the Rock;"' has a stray semicolon inside the quote.
- notes.json 44:20 ("He grazes on ashes", type `word`) and the Claude box in the topics.json `shepherd` contribution make the same ashes-and-shepherd point. Keep it once, in the `spec` box, and cut it from the word note.
- chapters.json 40 deep, "Which witnesses this site checked": it omits 5Q3 (5QIsa), which dss.py shows at 40:16–19. Add it.

## Fixes applied

All findings applied. I re-checked each claim against the witnesses or the sources (dss.py, lxx.py, literal.js, Sefaria texts of Ibn Ezra, Radak, Rashi, Abarbanel and the Mekhilta).

1. **42:1 Jewish readings.** Checked on Sefaria. Rashi on 42:1: "my servant Jacob". Ibn Ezra: most commentators say the righteous of Israel, the Gaon says Cyrus, and Ibn Ezra himself says the prophet (compare 49:6). Radak: "this is the King Messiah". Abarbanel: the king of Israel from David's house, the Messiah, and he rejects the readings of Cyrus, the prophet and the righteous. Corrected in the 42:1 note, the chapter 42 `readings` (both the Israel and the individual readings), `views.J` and the "Who is the servant" deep section, and the servant-of-the-lord topic contribution (the 42:1–9 section and `uncommon[1]`). Sources added: `radak-isaiah` (existing) and the new key `abarbanel-latter-prophets`. I did not use `abravanel-isaiah`, because its entry describes only his commentary on 52:13–53:12.
2. **Settings cards.** All 17 cards rewritten. Each traditional view now says what the passage meant to Hezekiah's Judah or Isaiah's circle, and to the exiles it was written down for (8:16–17; 30:8). Each critical view is specific to its passage. Every card has a `readers` line. The `why` and `to` fields no longer assume the exile; "Israel in captivity to Babylon" became "Israel, about Babylon and its fall". `oswalt-isaiah2` and `motyer-isaiah` were added to each card's sources.
3. **41:25.** Added a variant: the Masoretic Text (followed), 1QIsa-a ויקרא בשמו, and the Greek "they will be called by my name". The note now names the scroll as the witness for "his name".
4. **44:24.** The Greek reading is now τίς ἕτερος, "who else?" (joined to 44:25), listed as a witness for the Ketiv in `p` and `why`.
5. **Rebuilt from the literal line with a new shape.** 40:31 "Like eagles, they will climb on their pinions" (gloss added). 40:29 "To the tired he gives strength, / and for the powerless he multiplies power". 40:22 "and spreads them out like a tent for living in". 40:6 "A voice is saying, 'Call out!' / I answered, 'What am I to call out?'" (the variant now reads "I answered" / "Someone answered"). 42:6 "a covenant of the people" (note and gloss anchors moved). 43:2 "and the rivers will not wash over you".
6. 43:22 "for you were worn out with me"; the 43:24 and 40:28 notes now say "wear out".
7. 44:9 "Those who shape idols, every one of them, are emptiness".
8. 42:21 "For his righteousness' sake the LORD was pleased / to make his teaching great and splendid". The note now says whose righteousness is meant.
9. 40:12 "in a third-measure", glossed "perhaps a third of an ephah (about 7 liters)".
10. Glosses on 40:3, 41:21 and 44:6 replaced as suggested.
11. 43:13: the KJV moved to the first reading.
12. Numbers 16:39 (the body and `r`).
13. 41:14: "change the word to rimmat" (Job 25:6).
14. 40:14: Enuma Elish tablet VI corrected (Marduk plans; Ea advises and carries it out). `enuma-elish` and `dalley-myths` replace `pritchard-anet`.
15. 41:23: the Ketiv is now ונרא, read venira'.
16. 40:7: the corrector's date is dropped. I could not confirm it from the article's record.
17. 43:20: "daughters of ostriches", with strouthos explained.
18. 44:5: `mekhilta-ishmael` added; the "ink or tattoo" clause now plainly describes 44:5. **Partly disagree:** the Mekhilta on Exodus 22:20 (Sefaria) and Rashi on 44:5 give the four groups as the wholly righteous, the children of the wicked who died young, those who repent, and righteous converts, not the reviewer's "proselytes, penitents and God-fearers". The note follows the texts.
19. 41:6: "five times".
20. New variants at 40:12 (1QIsa-a "waters of the sea"), 41:29 (1QIsa-a "nothing"), 44:26 (Codex Vaticanus "Idumea", named by its codex) and 44:28 (the Greek "my holy house"). 43:19 now says that 4Q61 is broken at the word. New note at 42:6 "keep watch over you": natsar or yatsar, with 1QIsa-a's spelling ואצורכה favoring natsar. The 41:2 note now has the KJV's "righteous man from the east". The 44:6 note now has the Greek "after these things".
21. 41 traditions card: the Reformed answer adds Hodge and Murray on a future turning of Israel (`hodge-systematic`, new `murray-romans`). The Evangelical answer is now the historic premillennial view, sourced to Ladd (new `ladd-theology-nt`), to set it apart from the Dispensationalist answer. I added no Orthodox or Lutheran answer, because I had no source that states one on this question.
22. Mechanics fixed: the period at 40:13, "to its last use (60:14)", the semicolon in the 44:8 quotation, and 5Q3 added to the witnesses section. The 44:20 word note no longer makes the ashes and shepherd point; it stays only in the Claude box on the shepherd topic, and the note points there.

Also fixed while checking: the 40:5 variant quoted 52:10 in words not on the site, and now uses the 45-55 Plain ("will see how our God saves").
Alignment for the lead: 42:6 now reads "a covenant of the people", while the 45-55 Plain of 49:8 has "a covenant for the people". One of the two should change so the phrase reads the same in both.
