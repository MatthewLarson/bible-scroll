# Hostile review: Proverbs 30–31 (part 30-31)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in content/books/Pro/parts/30-31/, plus the parts of book.json that touch Proverbs 30–31. Checked against texts/orig, texts/auto, `node tools/literal.js Pro 30` and `31`, terms.json, the Plain of the other five Proverbs parts and of Ruth, Psalms, Job, Genesis–Deuteronomy, Joshua and Judges, and (in my head only) the NIV and ESV. `node tools/build.js --check Pro/30-31` and `--check Pro` both report 0 errors and 0 warnings. The build's quotation check misses several mismatches listed below, because the quotation is tied to its reference by "compare" or comes before it.

## Verdict

This is a strong part. The translation is close to the Hebrew and keeps the couplet and tricolon shapes. The full-treatment places (30:1, 31:1, 31:10–31 with Ruth 3:11) are handled carefully. The lead decision on 'eshet chayil is followed, and the chapter page quotes Ruth 3:11 in Ruth's own Plain and says it is the same Hebrew. The Greek, the Latin and the Ketiv/Qere readings are accurate wherever I could check them. Most of the citations the writer gave from their own knowledge hold up: Bauer, Augustine Letter 102 (by way of ACCS), Matthew Henry, Franklyn, Yael Levine's EJ article, Midrash Mishlei on 31:29, the Assemblies of God paper, Sanhedrin 43a and 70b, Hammurabi, KTU 1.4 iii, Ahiqar, SBC 2006, BFM 2000, Ordinatio Sacerdotalis, CCC 2290 and the Year A lectionary. Five problems need fixing before this part is final:
- 31:26 renders torah as "law", against terms.json.
- Five quotations of other Proverbs verses do not use those verses' current Plain, and two of them are word-for-word NIV/ESV.
- Several New Testament quotations reproduce NIV or ESV wording.
- 30:4b drifts to the NIV.
- The wine card is the third near-duplicate in the book, and it leaves out two of the traditions the brief names.

The rest are minor.

Counts: **0 critical, 5 major, 19 minor.**

## Findings

### 1. Major: 31:26 renders torah as "law", against terms.json
- **Where:** plain.txt 31:26; notes.json 31:26 ("Torat chesed"); topics.json `woman-of-strength`, `women-in-ministry` and `hesed` (all quote "the law of loyal love").
- **Problem:** terms.json, "torah (Proverbs)", says: "teaching, for a parent's or a sage's torah (1:8; 3:1; 4:2; 6:20, 23; 7:2; 13:14; **31:26**)". book.json's "Key terms" also says "a parent's torah is 'teaching'". 01-09 follows this (1:8 "your mother's teaching"). The note at 31:26 even says that in Proverbs torah "is usually the instruction a parent gives", and then the Plain uses "law" anyway. Its sentence "Torah is 'law' on this site" is wrong for Proverbs.
- **Fix:** Plain 31:26b "and the teaching of loyal love is on her tongue", or "teaching marked by loyal love" (watch for drift: ESV has "the teaching of kindness"). Then:
  - rewrite the note's first sentence to point to the 1:8 note and the Proverbs entry in terms.json;
  - update the three topic quotations;
  - update the note's anchor to match the new wording.

### 2. Major: quotations of other Proverbs verses do not match their current Plain, and two copy NIV/ESV
The build does not catch any of these.
- **notes.json 31:10 ("Worth more than red coral"):** "compare 18:22, 'he who finds a wife finds good'". The Plain of 18:22 is "Find a wife and you have found something good". The quoted wording is close to NIV/ESV ("He who finds a wife finds…").
- **notes.json 31:30 ("Beauty is hevel"):** "'a beautiful woman without sense' is like a gold ring in a pig's snout (11:22)". The Plain is "a lovely woman who has turned her back on good sense". The quoted phrase echoes ESV ("a beautiful woman without discretion").
- **variants.json 30:17, "why":** "(compare 23:22, 'do not despise your mother when she is old')". These are NIV's exact words, and nearly ESV's. The Plain is "Do not look down on your mother because she has grown old".
- **notes.json 30:20 ("Eating as a picture of sex"):** the strange woman "who 'forgets the covenant of her God' (see 2:17…)". These are ESV's exact words. The Plain is "the covenant of her God has slipped from her mind".
- **notes.json 31:18 ("Taste and see"):** "for the wicked, 'the lamp… will go out' (compare 13:9; 20:20; 24:20)". 13:9 and 24:20 say "will be snuffed out", and only 20:20 says "your lamp will go out".
- **Fix:** quote each verse's current Plain exactly, or paraphrase without quotation marks.

### 3. Major: New Testament quotations reproduce NIV or ESV wording
The NT books have no site Plain yet, so these must be the writer's own renderings. Some are copies:
- **notes.json 30:8 ("My allotted bread"):** 1 Timothy 6:8, "if we have food and clothing, with these we will be content". This is ESV word for word.
- **notes.json 31:28 ("Call her happy"):** Luke 1:48, "from now on all generations will call me blessed". This is NIV word for word, and ESV except its opening.
- **notes.json 30:4 ("Who has gone up to heaven?"):** Romans 10:6, "'Who will go up into heaven?' (that is, to bring Christ down)". This is ESV except for "go up" in place of "ascend".
- **notes.json 31:30 ("Beauty is hevel"):** 1 Peter 3:3–4, "the hidden person of the heart" with "a gentle and quiet spirit". These are ESV phrases strung together.
- **Fix:** render each from the Greek in plain words, for example 1 Timothy 6:8 "if we have food and something to wear, that will be enough for us", and Luke 1:48 "every generation from now on will call me happy". The second also matches "call her happy" in 31:28 and makes the note's link visible in English.

### 4. Major: drift in 30:4b
- **Where:** plain.txt 30:4.
- **Problem:** "Who has gathered the wind in the hollow of his hands?" is NIV's line with only "up" removed. The next line, "Who has tied up the waters in a cloak?", keeps NIV's "in a cloak" ("wrapped up the waters in a cloak"). The Hebrew bechofnav is "in his two fists" or "in his cupped hands". The Hebrew does not force "the hollow of his hands", which is a familiar English phrase taken over from Isaiah 40:12 in older versions.
- **Fix:** for example "Who has scooped up the wind in his cupped hands? / Who has bundled the waters in a robe?". This also fits the note's "Wind in a fist".
- **Also:** the note's anchor ("Who has gathered the wind in the hollow of his hands?") and the gloss and topic wording that depend on it must change with the line.

### 5. Major: the wine card is the third near-duplicate in the book and is incomplete
- **Where:** chapters.json ch. 31, `traditions[0]` (top `wine`).
- **Overlap:** Proverbs already has two wine cards, 16-22 at 20:1 and 23-24 at 23:31. This third one asks nearly the same question and repeats the same Catholic, Methodist, Baptist and Pentecostal entries.
- **Missing views:** the brief's list of moderation churches is "Catholic, Orthodox, Lutheran, Anglican, Reformed". The card has no Reformed and no Anglican entry, and it adds an Adventist one.
- **An inconsistency across parts on the Assemblies of God:** this card says the 2016 paper calls abstinence "a choice". That is correct: the paper says "It is a choice, not a commandment", and it does quote 31:4–7. The 16-22 card says the paper "urges total abstinence".
- **Fix:** either narrow the card to what 31:4–7 really adds, or drop it and point to the 23:31 card. What 31:4–7 adds is two questions: should leaders abstain even where members need not, and what is the "medicinal or mercy" use of 31:6? If the card is kept:
  - add Reformed (Calvin, Institutes 3.10.2, as in the other cards; Westminster Larger Catechism Q.139 on drunkenness);
  - add Anglican;
  - align the Pentecostal wording with the 16-22 card (both should say "the wise choice").

### 6. Minor: Greek order table and Swete numbering
- **Where:** chapters.json ch. 30, deep "Where the Greek puts chapters 30 and 31"; variants (Swete 24:24 etc.); book.json "The Greek Proverbs".
- **Problem:** the table's first row gives Swete's numbering for MT 22:17–24:22 as "24:1–22 and additions", which leaves out 22:17–29 and 23. Also check whether Swete numbers 30:1 as 24:23 or 24:24. The Greek 30:1 holds two sentences ("Fear my words, son…" and "This is what the man says…"), and several printings split them into two verses. If the run starts at 24:23, then the book.json phrase "24:24–77" and the table cell "24:24–37" are off by one at the start. I could not confirm this from an online edition, because the ones available reorder the text to the MT.
- **Fix:** correct row 1. Verify the starting number in Swete itself, or drop Swete's numbers and give MT references only.

### 7. Minor: 30:4 adds "Tell me", and is inconsistent with Job 38:5
- **Problem:** the Hebrew is only ki teda'. "Tell me" is padding, an echo of KJV "tell, if thou canst tell". The note at 30:4 ("If you know") sets the line beside Job 38:5, whose Plain renders the same two words "You must know!". A reader cannot see the parallel the note describes.
- **Fix:** "Surely you know!" or "You must know!", matching Job, or "if you know!" without "Tell me".

### 8. Minor: small translation points
- **30:2:** drops the opening ki ("Surely" or "For").
- **30:9:** "pushed into poverty" sharpens a plain niphal, "become poor".
- **31:4:** the name is spelled Lemo'el, a variant of 31:1's Lemu'el. No note mentions this.
- **30:18:** the Ketiv/Qere (arba' / arba'ah) is listed in the witnesses paragraph but has no note. A one-line mention would be enough.

### 9. Minor: "sluggard" breaks terms.json
- **Where:** notes.json 31:15 ("the sluggard (6:9–11)") and 31:27 ("the sluggard who 'eats the bread of laziness'").
- **Problem:** terms.json, 'atsel, says "never 'sluggard'". The 31:27 note also attaches "eats the bread of laziness" to a sluggard, but 31:27 says it of the woman, and the lazy one is not mentioned there.
- **Fix:** "the lazy one".

### 10. Minor: quotations of other books' Plain
- **notes.json 30:11:** "Psalm 14:5 'the generation of the righteous'". The Psalm Plain is "the circle of the righteous". Give the Hebrew bedor tsaddiq and say the Psalms Plain has "circle".
- **notes.json 31:17:** "the verb of 'be strong and courageous', Joshua 1:6". The Joshua Plain is "Be strong and bold".
- **Fix:** match the Plain or drop the quotation marks.

### 11. Minor: wrong verse for "God's works"
- **Where:** notes.json 30:18.
- **Problem:** "The verb nifle'u… is used of God's works (Psalm 139:6)". Psalm 139:6 is about knowledge that is "a wonder beyond me", a phrase the Plain of 30:18 shares, which is a nice link. God's works are Psalm 139:14 ("Your works are wonders").
- **Fix:** cite both verses correctly.

### 12. Minor: 'oz and chayil are blurred
- **Where:** notes.json 31:10 ('eshet chayil).
- **Problem:** "The Plain says 'strength' because the poem keeps returning to her strength (31:17, 25)". Those verses use 'oz, a different word, and the Plain also renders it "strength". The English reader therefore cannot tell chayil (31:3, 10, 29) from 'oz (31:17, 25).
- **Fix:** say so, or consider "might" for 'oz.

### 13. Minor: inaccurate claim about the tsade line
- **Where:** notes.json 31:27.
- **Problem:** "Every other verse of the poem begins with a verb or noun in plain order" is not true. 31:21 begins with lo', and 31:29 begins with the adjective rabbot. Wolters's argument rests on the participle form and the -iyyah ending, not on word class.
- **Fix:** restate the argument in Wolters's own terms (JBL 104, 1985).

### 14. Minor: a Greek difference in the acrostic is missed
- **Problem:** in the Greek, 31:25 and 31:26 are in reverse order. The verse "Her mouth she opened…" comes before "Strength and dignity she put on…", giving a pe-before-ayin order like Lamentations 2–4. I confirmed this in the LXX text. The topic acrostics.json says "with ayin before pe" without explaining why that matters. Note 31:10 says only that "The Greek… loses the acrostic".
- **Fix:** add the point to the acrostic note and to the topic section, with sources (e.g. Tov; Fox HBCE).

### 15. Minor: fairness on Wolters
- **Where:** notes.json 31:11.
- **Problem:** "Al Wolters showed that the poem borrows the style of a heroic hymn" presents one scholar's argument as settled. Elsewhere the part itself rightly lists it as an "uncommon" view.
- **Fix:** "argued".

### 16. Minor: a mislabeled note type
- **Where:** notes.json 31:31.
- **Problem:** the note is typed `views`, but it sets out no views. Its title, "who speaks?", is answered in one clause, and the rest is about Jewish custom.
- **Fix:** retype it `history` and retitle it, or give real views, for example the community, the sons and husband of 31:28, or the poet.

### 17. Minor: the women-in-ministry card's coverage and warrant
- **Where:** chapters.json ch. 31, traditions[1].
- **Problems:**
  - "Evangelical" is a movement, not a church.
  - The Orthodox view is missing.
  - So are churches that ordain women and read the passage that way, such as the United Methodist, ELCA and Anglican/Episcopal churches.
  - The Catholic entry says "the poem is not read as bearing on that question". That raises the brief's test of whether the card adds something.
- **Fix:** keep the card only if it shows real church teaching tied to this passage (the Baptist and AG entries do). Add one ordaining mainline church, name the egalitarian and complementarian bodies as their own statements state them, and either cut the Catholic ordination sentence or replace it with how the Church uses the poem.

### 18. Minor: settings state debated matters as settled
- **30:7–9 "readers":** "Readers in Judah under Persian rule…" states a debated date for the book's completion as fact. Add "probably" or "if the book was finished then".
- **31:1–9 "to":** "probably young and new to power" has no support in the text. The admonitions fit any king.
- **Fix:** soften both.

### 19. Minor: internal inconsistencies
- **Date of the Greek:** the ch. 30 deep section says the Greek Proverbs was made "probably in the 100s BC", but book.json says "200s or 100s BC". Align them.
- **Number of questions in 30:4:** the deep section counts "five questions" and note 30:4 ("Wind in a fist") counts "four questions". There are six interrogatives (four "who", two "what"). Make them agree.

### 20. Minor: 'eved in the same topos rendered two ways
- **Problem:** 30:22 "a servant when he becomes king" and 19:10 "a slave ruling princes" express the same idea of an 'eved ruling, but they use different English words. terms.json allows "servant or slave by context". The context is the same in both verses, so align them ("slave" fits 30:23's "slave woman"), or note why they differ.

### 21. Minor: drift near the line
None of these is a copy, but each repeats a familiar rendering where the Hebrew allows another. Reword where it costs nothing.
- **30:1:** "The man declares" is ESV's wording for ne'um haggever. "The man's declaration" or "So says the man" is just as close to the Hebrew.
- **30:17:** "the ravens of the valley" is both NIV and ESV. The Hebrew is nachal, "wadi".
- **31:12:** "Good is what she brings him" reverses NIV's "She brings him good". gamal means "deal out, repay", so "She pays him back with good, never evil" would do.

### 22. Minor: glosses
- "Fine linen and purple" is glossed "designer clothes", and "Where is the beer?" is glossed "Where's the bar?". Both are anachronistic and flippant, and the second is wrong: the line is about drinking, not a place.
- **Fix:** "the most expensive cloth there was" and "Bring me a drink!".

### 23. Minor: reading level
- Several sentences are far too long for an 8th-grade level: the topic numerical-sayings section (82 words), the ch. 31 deep section on wine (69 words), the ch. 30 deep section on the Son of God (58 words), and the deep "Song for Sabbath eve" (57 words).
- **Fix:** split them.

### 24. Minor: unverified detail in the "If you know" note
- **Where:** notes.json 30:4 ("If you know").
- **Problem:** "Rahlfs, following Codex Alexandrinus; Codex Vaticanus leaves it out" (of ἵνα γνῷς). ἵνα γνῷς is in the critical text. I could not confirm the claim about Vaticanus omitting it.
- **Fix:** verify in Swete's apparatus, or cut the parenthesis to "(the Greek adds ἵνα γνῷς)".

## Checked and found sound (no action)
- **30:4 sources:** Bauer, *JATS* 29 (2018) 32–49, exists. It cites Augustine, Letter 102.5, through ACCS vol. 9, applying 30:4 to Christ. It also quotes Matthew Henry (Concise), "his name as yet secret", and reports that Franklyn reads the "sons of God" as the divine council.
- **31:31 Greek:** Rahlfs prints χειρῶν, "hands", so the variant's claim about Vaticanus's "lips" is consistent with it.
- **Greek wording:** the Greek quoted at 30:1–4, 9, 10, 11, 16, 17, 19, 24, 27, 31, 33 and 31:1, 3, 5, 8, 10, 11, 21, 22, 24, 30 matches the LXX text.
- **Yael Levine, "Eshet Hayil", EJ 2nd ed.:** confirms the kabbalistic origin of the Friday-night custom, the Shekhinah reading, the first verse recited before the Sephardi Ashkavah at women's funerals, tombstone use, and the Sabbath and Torah readings.
- **Midrash Mishlei on 31:29:** it reads "Many daughters… you have climbed above them all" as Ruth the Moabite.
- **Assemblies of God, *Abstinence from Alcohol* (2016):** it quotes Proverbs 31:4–7, extends it from rulers to everyone, and calls abstinence "a choice, not a commandment".
- **Rabbinic sources:** Sanhedrin 43a (frankincense in wine, the women of Jerusalem), Sanhedrin 70b (Bathsheba, the pillar, the reading of "more than a man" as Noah), Numbers Rabbah 10:4, and Kohelet Rabbah 1:1's list of Solomon's names.
- **Ancient Near Eastern texts:** the Hammurabi epilogue ("that the strong might not oppress the weak"), KTU 1.4 iii 17–21, and Ahiqar's "two things… a third pleasing to Shamash".
- **Church documents and practice:** SBC 2006, BFM 2000 articles 6 and 18, Ordinatio Sacerdotalis, CCC 2290, the Catholic Year A 33rd Sunday reading with Matthew 25, and Augustine's Sermon 37.
- **Lead decision on Ruth 3:11:** the chapter 31 deep section and the `ruth` topic quote Ruth's Plain exactly and say it is the same Hebrew. "A woman of strength" is kept at 12:4 and 31:10, with chayil carried into 31:3 and 31:29.
- **Leningrad Codex order:** Ruth follows Proverbs.
- **Ketiv/Qere:** at 30:10, 31:4, 31:16 and 31:18 they are reported correctly from texts/auto.
- **Cross-part items:** none of the repeated-saying pairs falls in 30–31. 31:10 matches 12:4 and 3:15 ("red coral").

## Fixes applied

1. Done. Plain 31:26b now reads "and on her tongue is the teaching of loyal love". The note anchor is updated, and its first sentence now says torah is a parent's or sage's teaching in Proverbs, as at 1:8. All three topic sections (woman-of-strength, women-in-ministry, hesed, including the hesed heading) now say "the teaching of loyal love".
2. Done. These quotations now use the current Plain:
   - 18:22: "Find a wife and you have found something good".
   - 11:22: "a lovely woman who has turned her back on good sense".
   - 23:22 (variant 30:17): "Do not look down on your mother because she has grown old".
   - 2:17: "the covenant of her God has slipped from her mind".
   - 13:9 and 24:20: "the lamp of the wicked will go out", cited with "compare 20:20".
   - Also fixed: 9:17 is now "is a delight", following the current 01-09 Plain, and Matthew 6:11 now follows the Matthew Plain ("Give us today our bread for the coming day").
3. Done. Each passage is rendered fresh from the SBLGNT in the site texts:
   - 1 Timothy 6:8: "if we have food and something to wear, that will be enough for us".
   - Luke 1:48: "every generation from now on will call me happy".
   - Romans 10:6: "Do not say in your heart, 'Who will climb up into heaven?' (that is, to bring Christ down)".
   - 1 Peter 3:3–4: paraphrased, without quotation marks.
   - Mark 15:23: "they kept offering him myrrh-spiced wine to drink, but he would not take it".
   - Luke 16:19: paraphrased.
   - John 3:13: now "came down out of heaven".
   - Baruch 3:29 (Swete): re-rendered.
4. Done. 30:4 was rebuilt from literal.js: "Who has collected the wind in his two fists? / Who has bundled up the waters in a robe?". The note anchor and title ("water in a robe") and the agur-and-lemuel topic wording follow it.
5. Done, and the card is kept, because 31:4–7 asks something the 20:1 and 23:31 cards do not.
   - It is narrowed to two questions: should leaders abstain even where others need not, and may drink be given to ease suffering (31:6)?
   - Reformed (Calvin, Institutes 3.10.2) and Anglican entries are added. The Adventist entry is dropped.
   - The Pentecostal entry now says the Assemblies of God paper "urges total abstinence", as 16-22 does, and adds that the paper extends 31:4–7 from rulers to every believer.
   - The ch. 31 deep section points to the 20:1 and 23:31 cards for the general question.
6. Done. Table row 1 now gives Swete "22:17–24:22, with additions (24:22a–e)". I checked Swete's text and apparatus: after 24:22e the next verse is 24:24, which holds both Greek sentences of 30:1 ("Fear my words, son..." and "This is what the man says..."), and the apparatus also runs 22e then 24. So 24:24–37, 24:24–77 and the variants' Swete numbers stand. A sentence saying so is added under the table.
7. Done. 30:4 ends "You must know!", matching Job 38:5. The note anchor and its p line now point out the shared rendering.
8. Done:
   - 30:2 opens "Surely" (ki).
   - 30:9 reads "Or I may be left poor and steal". This is the plain niphal, and it also avoids NIV's near-identical line (see audit).
   - The 31:4 note now says the spelling Lemo'el is a variant of Lemu'el in 31:1.
   - The 30:18 note now gives the Ketiv/Qere (arba' / arba'ah), checked in texts/auto.
9. Done. Both notes say "the lazy one" (6:9–11; 6:6–11). The 31:27 note now says, correctly, that the line itself says she never eats the bread of laziness. "Sluggard" no longer appears anywhere in the part.
10. Done. Psalm 14:5 gives bedor tsaddiq and the Psalms Plain "the circle of the righteous". Joshua 1:6 is quoted as "Be strong and bold".
11. Done. The 30:18 note now cites Psalm 139:6 ("Knowing like this is a wonder beyond me") for the root and Psalm 139:14 ("Your works are wonders") for God's works.
12. Done. 'oz is now "might" in the Plain at 31:17 and 31:25, so "strength" belongs to chayil alone (31:3, 10, 29).
   - The 31:10 note says this.
   - The 31:11 and 31:17 notes and the woman-of-strength topic say "might".
   - The alphabet table now has 'oz = "might" and gimel = "she pays him back".
13. Done. The false claim about "every other verse" is removed. The note restates Wolters (JBL 1985) on his own terms: a hymnic participle with an unexpected -iyyah ending (where tsofah would be expected), which sounds like sophia.
14. Done. The 31:10 acrostic note, the ch. 31 alphabet section and the acrostics topic now say that the Greek puts 31:26 before 31:25, the pe-before-ayin order of Lamentations 2–4, against Lamentations 1 and the Hebrew of this poem.
   - This was checked in the Rahlfs text, and the note cites rahlfs-lxx.
   - I did not cite Tov or Fox HBCE for this point, because I have not read either on it. The text says only that the cause is not known.
15. Done. "showed" is now "argued".
16. Done. The 31:31 note is now typed history and titled "Praise at the gates", and its p line is revised.
17. Done. "Evangelical" is replaced, and the card now has these entries:
   - Catholic: how the Church uses the poem (Masses for holy women, Year A 33rd Sunday). The ordination sentence is cut.
   - Orthodox: new.
   - Lutheran: new. Divided, ELCA (women ordained since 1970 in its parent bodies) against LCMS.
   - Reformed: new. Divided, PCA against PCUSA, with the Danvers Statement and CBE named by their own statements.
   - Methodist: new. UMC full clergy rights since 1956.
   - Baptist and Pentecostal: kept.
18. Done. The 30:7–9 "readers" now say "If the book was finished in Judah under Persian rule, as many scholars think...". The 31:1–9 "to" is now simply "Her son Lemuel, a king".
19. Done. The Greek date is "200s or 100s BC", matching book.json. The note and the deep section both count six questions: four "Who" and two "What".
20. Done. 30:22 is now "slave", matching 19:10 and 30:23. "a slave made king" is used in the note, the numerical-sayings topic and the slavery topic.
   - The first wording, "a slave when he becomes king", turned out to match ESV, so the line is now "beneath a slave when he takes the throne".
21. Done. These lines are reworded:
   - 30:1: "So says the man" (the note anchor and the ch. 30 deep quote follow it).
   - 30:17: "the ravens of the stream bed".
   - 31:12: "She pays him back with good, never evil, / for as long as she lives".
22. Done. "Fine linen and purple" is glossed "the most expensive cloth there was". "Where is the beer?" is glossed "Bring me a drink!".
23. Done. These long sentences are split:
   - numerical-sayings: both the part's section and the topic core's Amos/Job/Micah sentence.
   - ch. 31 wine deep.
   - ch. 30 Son of God.
   - "Song for Sabbath eve" (the unverified "sung at weddings" was also dropped).
   - The wine and slavery topic sections.
24. Done. I checked Swete's apparatus: B lacks ἵνα γνῷς ("+ ινα γνως AC"). The note now says Rahlfs prints it with Codices Alexandrinus and Ephraemi, and that Swete's notes show Vaticanus lacks it.
- Lead decisions: the witnesses paragraph and the 30:1 variant no longer name blueletterbible.org or the CCAT text. They name the editions instead: Rahlfs, Swete, the Vulgate and the Leningrad Codex.
