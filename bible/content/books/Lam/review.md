# Hostile review: Lamentations (single part, flat folder)

Reviewer: hostile-reviewer, 2026-10-28. Checked against `texts/orig/Lam.json` (Leningrad, word by word), `texts/auto/Lam.json`, `tools/dss.py Lam 1-5`, `tools/lxx.py Lam 1,3,5`, `tools/refs`-style spot checks of the Jeremiah Plain, and web checks (Vulgate preface, Rashi on 4:20, NET/ancient-versions note on 3:22). `VERBOSE=1 node tools/build.js --check Lam`: 154 verses, 137 notes, 14 variants, 36 glosses, 45 topic contributions, 0 errors, 0 warnings.

## Verdict

This is a strong, careful book with no invented sources and no critical error. The acrostic apparatus is right: I checked every first letter in chs. 1-4 against the Hebrew. Ayin (1:16) comes before pe (1:17) in ch. 1; pe (2:16, 3:46-48, 4:16) comes before ayin (2:17, 3:49-51, 4:17) in chs. 2-4. All four chapter tables match the Hebrew first words (differences are only maqqef stripping), and ch. 5 (which starts zayin, nun, yod, mem, ayin, mem, alef ...) is never called an acrostic. The four traditions cards cite real, correctly numbered sources (CCC 311, 404-405, 1521, 2844; WCF 5.5; BF&M 2000 art. 3; LDS Article of Faith 2; GILH on omitted psalms; Schleitheim art. 6), and the Qumran coverage statements (3Q3: 1:10-12, 3:52-62; 4Q111: 1:1-18, 2:5; 5Q6: 4:5-8, 11-22, 5:1-13, 16-18; 5Q7: 4:17-20) match the dss.py printout. The problems are these. (1) A softened 5:11 against the brief. (2) A false statement that the Latin text has no Greek-type preface. (3) A badly framed and incomplete 3:22 variant. (4) A missing 4Q111 variant at 1:17-18. (5) Reader-facing first-person admissions of unchecked work in at least eight places, which the lead forbids. There are also a dozen smaller errors and some drift in four or five verses. Fix the five majors before publishing.

Counts: critical 0, major 5, minor 13.

## Major

### 1. 5:11 "dishonored" softens a rape (plain.txt 5:11; notes 5:11; topics `sexual-violence`; gloss absent)
Plain: "Women have been dishonored in Zion, / young women in the towns of Judah." Hebrew: *nashim be-Tsiyyon 'innu, betulot be-'arei Yehudah*. The piel of *'anah* with a woman as object and a sexual context means "violate, rape" (Genesis 34:2; Judges 19:24; 2 Samuel 13:12, 14, 22, 32; Ezekiel 22:10-11). The brief says "translate honestly and plainly; do not soften". The note itself admits that "most commentators take 5:11 to say that the women ... were raped" and then says "readers should not soften it", while the Plain does. The same verb is not rendered "dishonored" anywhere else on the site; check the 2 Samuel 13 Plain. A reader of the Plain sees a loss of honor, not an act of violence. The Hebrew subject is unstated, so a passive is fine.
Fix: "Women have been raped in Zion, / young women in the towns of Judah." Fix the note ("this site's Plain says dishonored" must go), the `sexual-violence` topic sentence, and the 5:11 mention in the ch. 5 `L` view. Keep the existing explanation of why the verb is read this way.

### 2. Latin preface claim is false (notes 1:1 "Who wrote Lamentations?"; book.json section "The title, the author and the Greek preface")
Both say the Latin has no preface ("The Latin text I checked begins with the letter name and has no preface"; "the Latin text I read does not either"). The Vulgate does have it, as a prologue before the first letter: "Et factum est, postquam in captivitatem redactus est Israel, et Jerusalem deserta est, sedit Jeremias propheta flens, et planxit lamentatione hac in Jerusalem ..." (Clementine; also in the Stuttgart and Old Latin tradition). The brief said the Vulgate has the same preface (as a heading) and told the writer to check the Syriac before claiming it. Whatever edition was read printed the text without the prologue. It also ends differently from the Greek ("et amaro animo suspirans et ejulans dixit" in the Clementine), which is itself worth one line.
Fix: say the Greek and Latin Bibles both open with the preface; the Hebrew and the Targum do not (or leave the Targum unmentioned). Say nothing about the Syriac unless it is read. Remove "I checked / I read". Name the edition (Clementine Vulgate, or Weber-Gryson) if a witness is named.

### 3. 3:22 variant misrepresents the evidence (variants.json 3:22; notes 3:22; chapter 3 `C` view "uncertain places")
Problems:
- The second reading is labeled "A conjecture, by commentators". It is not a conjecture. *Tammu* ("they have not come to an end", third person, matching the *rachamav* subject of the next line) is the reading of the Greek (Alexandrinus and Sinaiticus supply 3:22-24; Rahlfs prints them), the Peshitta, the Targum and some medieval Hebrew manuscripts. The brief said so explicitly. The entry says only that the Vulgate agrees with the MT ("we are not consumed", true), which makes the evidence look one-sided.
- The entry says "the Greek of Codex Vaticanus as Swete prints it has no text for verses 22 to 24, so I could not read it". `tools/lxx.py Lam 3` does print blanks at 3:22, 3:23, 3:24 and 3:29. B's omission of these verses (and the supply from other Greek manuscripts) is the actual fact. It does not mean "no Greek". The writer stopped at the blank.
- Lists of Greek variants everywhere say "Greek (Swete, Codex Vaticanus)", which is fine, but the lxx.py header says to check the critical text before calling anything "the Greek". 3:22-24 and 3:29 need the Rahlfs/Göttingen text, or an explicit "not read".
Fix: two readings, each with its witnesses (MT and Vulgate, first person; LXX [A, S], Peshitta, Targum, some Hebrew MSS, third person), say which the Plain follows and why (the MT is the base and sense is acceptable if "we" is read as a result clause), delete "conjecture" and "I could not read it". If the Greek of A/S cannot be read, say only that Vaticanus omits these verses and that other Greek manuscripts and the versions read the third person (cite NET's text note or Albrektson, who is already a source). Add the same to the 3:29 situation (the Greek is also blank there; nothing said).

### 4. Reader-facing admissions of unchecked or unread work (violates the lead's rule)
Examples, all in published text:
- book.json "The witnesses": "The Targum is an Aramaic retelling and the Peshitta a Syriac translation; I did not read either."
- chapters.json ch. 1 "Which witnesses I read": "I did not read the Targum or the Peshitta" (the brief asks for a one-time list of witnesses read; the list is fine, the "I did not read" is the problem).
- notes 1:18: "the scroll is damaged and I did not read enough of it to know how the verses were arranged".
- variants 1:3: "the word is restored in the transcription I read"; 1:7: "I read it only in transcription"; 3:22: "so I could not read it"; notes 3:52 "in the transcription I read"; variants 1:7 "I read it".
- notes 4:7, 4:20, 5:7 repeat "in the transcription, restored" (fine, but see the first-person pattern).
Fix: state facts, not process. Examples: "In the Abegg-Bowley-Cook transcription of 4Q111 the word is restored, so the scroll gives no help." "The Targum and Peshitta are not used as witnesses here." Never "I did not read". Where the Targum or Peshitta matters (3:22; 1:12; 4:20; 3:33), either read them (Alexander's Aramaic Bible volume; a Peshitta edition) or leave them out of any claim.

### 5. 4Q111 at 1:17-18 is a real variant and has no entry (variants.json; notes 1:18)
dss.py 1:17 prints 4Q111: "... אין מנחם לה «מכול» «אוהביה» «צדיק» «אתה» יהוה «צפה» «אדוני» ...". This is a substantial plus: "from all her lovers ... You are righteous, LORD ... he commanded" mixed into 1:17. At 1:18 the scroll reads *tsaddiq hu* followed by a restored *'Adonay* where the MT has YHWH. The chapter page and book.json both say 4Q111 "differs at 1:17-18", but nothing records what the difference is, and the note at 1:18 only says "its transcription includes the words 'you are righteous, LORD'".
Fix: add a variants entry at 1:17-18 (MT; 4Q111 as printed, restored words marked), say the Plain follows the MT, and say why (one damaged witness; the plus looks like a harmonizing intrusion of the 1:18 confession, or may reflect a different arrangement of the verses; no view settled). Also note 4Q111 reads *'Adonay* for YHWH at 1:18 and YHWH for *'Adonay* at 1:14 (relevant to the book's Lord/LORD note), and at 1:12 shows *hoginani* ("he made me grieve") for the MT *hogah*. Expand the existing 1:7 entry to mention that 4Q111 also lacks *ra'uhah* and reads *sareha* ("her adversaries") for *tsarim*.

## Minor

### 6. 4:3 description of the Ketiv/Qere and the vowels is wrong (variants 4:3; notes 4:3)
Both say the Leningrad consonants spell *tanninim* "sea monsters" with vowels of *tannim* "jackals". texts/auto shows K = *tanin* (תנין, singular form), the form is probably a by-form of *tannim* (commonly treated so by the lexica; verify before citing). The Greek (*drakontes*) and Latin (*lamiae*) read "serpents/monsters". Reword: the form is *tannin*, probably a variant of *tannim*, "jackals"; the versions understood "sea monsters". Also record 4:3 *ki / ka-ye'enim* (K *ki*, Q *ka-*) properly; the notes mention only the animals.

### 7. 1:14 variant: "the same letters in a different order" is wrong
*nisqad* (נשקד) and *niqshera* (נקשרה) share four letters; *niqshera* adds *resh* and *he* and the order differs. Say "a different verb of similar sound and meaning".

### 8. Acrostic notes are uneven against the brief (notes.json 2:1; 4:1; book.json section "The alphabet and the limping measure")
- No acrostic note at 2:1 (brief: a note at verse 1 of each of chs. 1, 2 and 4, `top: acrostics`, `r` to Proverbs 31:10 / Nahum 1:2). The 2:1 notes are about cloud, footstool and beauty. The pe/ayin fact for ch. 2 is only on the chapter page and in the 3:1 note. book.json says notes sit "at 1:1, 3:1, 4:1 and 5:1" and omits ch. 2.
- The 4:1 note is titled "The second alphabet poem of loss" (ch. 4 is the third alphabet poem, ch. 2 the second) and says "As in chapter 1 the verse has two lines". Ch. 1 verses have three lines in this Plain (and the brief). Chapter 4 verses have two.
- Fix: add a short 2:1 note (pe 2:16, ayin 2:17), retitle 4:1, correct the line count.

### 9. Ketiv/Qere paragraph is copied onto every chapter page and ends with irrelevant references
Each chapter's "Ketiv and Qere" block ends: "The ones that touch the sense are in the notes (3:32, 3:39)." That only makes sense for ch. 3. Chapters 1, 2, 4 and 5 should point to their own notes (none touch the sense there), or say so. The claim "the Plain follows the Qere" is also loose for 3:20 (the Qere *tashoach* "bow down", Plain "sinks down", fine) and 3:25 (singular vs plural, no effect). The brief asked for tikkune soferim to be treated or omitted; they are omitted, which is allowed. Say nothing misleading about them.

### 10. Rashi on 4:20 (notes 4:20; chapters 4 `J` view and setting; topics `anointing`, `josiah`)
"Rashi's comment ... gives Josiah first and Zedekiah as the other possibility." Rashi's text (Sefaria) identifies the anointed as Josiah (citing 2 Chronicles 35:25) and explains "their pits" as the pits the enemy dug; the Zedekiah identification appears in an editorial footnote or later gloss, not as Rashi's own "second" view. Say "Rashi takes it as Josiah"; if Zedekiah is wanted, attribute it to the common view or to Ibn Ezra (only if checked). Also note a real problem with that reading that the notes already half-state: Josiah died at Megiddo and could not be "caught in their pits".

### 11. Attributions lifted from the brief without a source (minor, labelled "verify or paraphrase")
- Note 5:1 and ch. 5 deep section: "(Albrektson, Hillers, Provan, Berlin)" are lumped together for views (broken acrostic, 22 as echo) that are not each theirs. Cite one or two with exact claim, or say "commentators".
- Note 3:1: "a second alphabet order ... (Hillers, Freedman)". The acrostics topic cites a Freedman article; attribute only what a source says, or say "some scholars".
- Gottwald's "the A to Z of grief" is in quotation marks (notes 1:1; book.json). Gottwald's own wording is reported as "A to Z of sorrow"; if the exact words cannot be checked, remove the quotes.
- Chapter 2 `C` view: "Hillers and Berlin point out its likeness to the Mesopotamian laments, in which the gods hand the city to its destroyers" is not supported; Dobbs-Allsopp's argument is the source. Change the attribution.
- Begrich on 3:57 is sound (he cites this verse for the salvation oracle); the source key is `gunkel-begrich-psalms`, OK.

### 12. Drift toward NIV/ESV in five verses (drift audit)
Sentence shape and word order stay close to common versions in: 3:26 ("It is good to wait ... for the LORD's rescue", same frame as the familiar "it is good to wait quietly for the LORD's salvation"; try "Waiting in silence for the LORD to rescue is good"), 4:2 ("how they are now reckoned as pottery jars, made by a potter's hands", frame of "how they are regarded as earthen pots, the work of a potter's hands"), 4:1 ("The best gold is changed. The holy stones lie ..."), 5:15 ("The happiness in our hearts has stopped; our dancing is changed into mourning", matching the usual two-clause pattern), 5:18 ("foxes prowl on it", with "prowl" as in the common versions; "move about on it" or "roam" avoids it), 2:15 ("Is this the city people used to call perfect in beauty, the joy of all the earth?", acceptable because Psalm 48:2 and 50:2 force it, but check against the Psalm Plain). No whole verses were copied. Rewrite 3:26, 4:2 and 5:15 at least.

### 13. 5:5 has an orphan "them" (plain 5:5)
"With them on our necks we are chased" has no antecedent. Hebrew *'al tsavva'renu nirdafnu* is "on our necks we are pursued" (pursuers at our necks). Use "Pursuers are at our necks; we are exhausted ...".

### 14. `shever` and Jeremiah (notes 2:11; terms)
The term decision (proposals/prophets/terms.json: "ruin" for the state, "crash" for the event in Jeremiah) is documented and fine. But note 2:11 says "as in Jeremiah 6:14 where prophets treat the 'wound' ... lightly", while the Jeremiah Plain at 6:14 says "broken place" and 8:11 says "fracture". Quote the Jeremiah Plain word exactly ("broken place") and say Lamentations 2:13 and Jeremiah 8:21 are the same Hebrew word.

### 15. Heading and letter-name inconsistencies (plain.txt; chapters.json)
Chapter 3 headings say "Het", "He" for chet / he, while the chapter tables say "Chet"; pick one. Several headings exceed the 2-6 words in the brief: "The Lord Has Become Like an Enemy" (7), "Zayin: This I Bring Back to My Heart" (8 with the letter), "Mem: Good and Troubles from One Mouth" (7). Trim.

### 16. Plain 1:21 and 3:46-47 are loose
1:21 "People have heard me groan; I have no one to comfort me" loses "they heard that I groan" as the reason the enemies rejoice; 1:21 "the day of your announcement" is odd English for "the day you called" (use "the day you proclaimed"). 3:47 "devastation and ruin" repeats "ruin" for *shever* in 3:47 and 3:48, correct by the term, but 3:47 *shet* "devastation" should be glossed in a note because "ruin/devastation" is one of the most commonly merged pairs.

### 17. Topic `five-scrolls`: "It is the only one of the five that is entirely sad"
This is an opinion presented as a fact (Ecclesiastes and Esther are arguable). Say "the only one read at a fast".

### 18. Book.json "Setting" and reading list need small fixes
- book.json facts say "Jerusalem and Judah after the Babylonian conquest, and the exiles in Babylon" as the setting while the audience view says the exile view is a minority. Reword to "Jerusalem and Judah after the Babylonian conquest" and mention exiles as a debated audience.
- "The Greek ... is a literal translation of the revision type (the *kaige* group, Barthelemy)": this is correct as a school view (Barthélemy; Gentry's work on Lamentations is also sourced); add the accent and cite a source key or drop the attribution.

## Items checked and found sound (no action)
- Acrostic letters and orders in chs. 1-4; ch. 5 never called an acrostic; chapter tables match the Hebrew.
- Lord/LORD: *Adonay* occurs 14 times (1:14, 1:15 x2, 2:1, 2:2, 2:5, 2:7, 2:18, 2:19, 2:20, 3:31, 3:36, 3:37, 3:58), as the note says; ch. 2 is rendered "the Lord" / "the LORD" without smoothing.
- Ketiv/Qere places listed in the chapter pages match texts/auto exactly.
- Qumran coverage; 5Q6/5Q7/4Q111/3Q3 restoration statements for 4:20 (anointed restored, divine name visible) and 4:7 (restored).
- Josephus *Antiquities* 10.5.1 (lament for Josiah), Bava Batra 15a, Ta'anit 22b on Josiah and 1:18, Mishnah Ta'anit 4:6, 2 Chronicles 35:25, Jeremiah 41:5, Zechariah 7:3-5: all real and correctly used. The Tenebrae lessons (Thursday 1:1-14, Friday 2:8-3:9, Saturday 3:22-30, 4:1-6, 5:1-11, "Oratio Jeremiae") are described correctly.
- Hebrew terms for anger, sin and guilt are kept apart as the term list requires; "dear people" matches the Jeremiah Plain; Zedekiah's capture matches 2 Kings 25 and Jeremiah 39/52 as the site Plain tells them.
- The six-lens decision (F dropped, L added) is justified in book.json and the brief and carried through every chapter's `views`.
- No em-dashes in prose; reading level is acceptable; poetry line shape follows the brief.
- Source keys in sources.json are real works; no invented fragments. The Peshitta/Targum are not used as witnesses, so nothing is invented about them.

## Fixes applied


1. Accepted (lead decision 1). 5:11 now reads "Women were raped in Zion"; the note (retitled, with the verse list Genesis 34:2, Judges 19:24 and 20:5, 2 Samuel 13, Ezekiel 22:10-11, and why the shared term "dishonor" stays in those stories), the `sexual-violence` topic and the chapter 5 history view ("women raped") match. A term entry and a request for the lead are in content/proposals/prophets/terms.json.
2. Accepted (lead decision 2). The Clementine Vulgate does carry the preface; the 1:1 authorship note, book.json (authorship, section title and text, witnesses), the chapter 1 page (retitled "The Greek and Latin preface"), the canon and jeremiah topics now say so, and note that the Latin ends differently ("sighing and wailing in bitterness of spirit"). Nothing is said about the Syriac or the Targum preface.
3. Accepted (lead decision 3). The 3:22 variant now has two readings with witnesses: Masoretic Text and Vulgate (first person), against the Greek manuscripts that supply the verse (Alexandrinus, Sinaiticus), the Peshitta, the Targum and some Hebrew manuscripts (third person), reported via Albrektson and marked as not read; "conjecture" and "I could not read it" are gone; the Plain keeps the Masoretic Text with the reason. The one thing said about Codex Vaticanus is what lxx.py shows: Swete prints no text at 3:22-24 and 3:29. The 3:22 and 3:29 notes say the same; no difference of sense is claimed for 3:29.
4. Accepted (lead decision 4). Every first-person admission is gone (book.json witnesses section, chapter 1 page, notes 1:18, 3:52, variants 1:3, 1:7, 3:22, "my translation"). Chapter 1 now has one section, "Witnesses read for this book", listing Leningrad, the Abegg-Bowley-Cook transcription, Swete's Greek (not Rahlfs), the Vulgate, Rashi and the Bavli on Sefaria, and stating that the Targum and Peshitta are not used as witnesses.
5. Accepted (lead decision 5). New variant at 1:17-18 (4Q111 plus: "from all her lovers; you are righteous, LORD", a verb written tsafah, "Zion" for "Jerusalem"; the 1:18 Adonay is restored and is not counted). The 1:7 entries now mark "all" as restored and add that the scroll lacks ra'uhah and reads "her adversaries"; the 1:12 entry notes the scroll's different verb (hogirani, as transcribed; the review's "hoginani" does not match the printout); the 1:14 entry and the "Lord and LORD" note record YHWH for Adonay at 1:14 (visible in the scroll).
6. Accepted. 4:3: the written form is tanin (Ketiv), the Qere tannim "jackals"; the versions read a monster or serpent; the second Ketiv/Qere (ki / ka-) is recorded. I did not state that tanin is a by-form of tannim, because no source for it was checked.
7. Accepted. 1:14: "a different verb of similar sound and meaning" replaces "the same letters in a different order".
8. Accepted. New 2:1 acrostic note (pe 2:16, ayin 2:17; Proverbs 31:10, Nahum 1:2); 4:1 note retitled "The third alphabet poem" with the correct line count; book.json now lists notes at 1:1, 2:1, 3:1, 4:1 and 5:1.
9. Accepted. Each chapter's Ketiv/Qere block now points to its own notes or says none changes the sense (chapter 4 points to the note at 4:3).
10. Accepted. Rashi on 4:20 is reported only as taking the anointed to be Josiah (citing 2 Chronicles 35:25); the Zedekiah second view is removed from the 4:20 note, the chapter 4 Jewish view and the anointing and josiah topics. The note says the pits difficulty for Josiah is real.
11. Accepted. Gottwald's quoted phrase and his name are removed (notes 1:1, book.json, acrostics topic, chapter 3 page, authorship lists) and the gottwald-lam source key is dropped as unused; "Hillers, Freedman" at 3:1 is now "some scholars"; the 5:1 note and chapter 5 page say "commentators"; the chapter 2 Mesopotamian point is attributed to Dobbs-Allsopp alone. Not verifiable here, so removed rather than kept.
12. Accepted. Rewritten: 3:26, 4:1, 4:2, 5:5 (see 13), 5:15, 5:18 ("roam over it"). 2:15 left as is (Psalm 48:2 and 50:2 force it). Anchors in notes updated.
13. Accepted. 5:5 now "Pursuers are at our necks; we are exhausted and get no rest."
14. Accepted. Note 2:11 now quotes the Jeremiah Plain's "broken place" (6:14) and "breaking" (8:21) and says it is the same Hebrew word as Lamentations 2:13.
15. Accepted. The ch. 3 heading is "Chet", matching the tables; headings trimmed: "The Lord as Enemy", "Zayin: This I Bring Back", "Mem: Both from One Mouth".
16. Accepted. 1:21 now "They have heard that I groan" and "the day you proclaimed"; a new 3:47 word note keeps shet "devastation" apart from shever "ruin".
17. Accepted. The five-scrolls topic now says "the only one of the five read at a fast".
18. Accepted. book.json setting reworded to Jerusalem and Judah, with the exiles as a debated audience; "Barthelemy" dropped (the page says "the type scholars call kaige") since no source key was checked.
