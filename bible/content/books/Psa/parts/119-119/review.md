# Hostile review: Psalms part 119-119 (Psalm 119)

Reviewer's scope: `content/books/Psa/parts/119-119/` (plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json) and the places in `content/books/Psa/book.json` that touch Psalm 119. Checked against `texts/orig/Psa.json` (word by word, with a script that maps every Strong's number for the eight law words to the Plain English Translation), `node tools/literal.js Psa 119`, `texts/auto/Psa.json`, the Lake facsimile transcription of Codex Sinaiticus on sourcelibrary.org (pp. 359–363), and a Rahlfs-based LXX text online (bibelkommentare.de, Psalm 118). `node tools/build.js --check Psa/119-119`: 0 errors, 0 warnings.

## Verdict

This is a strong part. The translation is rebuilt from the Hebrew, and the brief's central requirement holds without exception. I mapped every occurrence of the eight torah words by Strong's number. Each one has its terms.json rendering in all 176 verses: law, decrees, orders, rules, commands, rulings, word, saying. The only changes are the three non-law senses of *mishpat* (119:84, 121, 132), and the notes flag each of them. The acrostic table of first words is correct for all 176 verses (checked by script). The numbering note appears once, and the Greek number is in the summary. Both settings cards have `readers`. The traditions card is fair and properly sourced. The liturgical claims I checked are right: Benedict ch. 16 and 18, the pre-1911 Roman little hours, Kathisma 17 and the *Amomos*, the BCP days 24–26, Berakhot 4b, 3b, 5a and 40b, Sotah 35a, Mishnah Berakhot 9:5, Avot 4:1, Gittin 60a and Temurah 14b. The weak point is the textual evidence. The Greek rests on one machine transcription of Codex Sinaiticus, and the notes often call its readings "the Greek". Checked against Rahlfs, at least three of those readings are minority readings (119:28, 109, 139), and at 119:139 the main Greek text reads something the page never mentions. The Dead Sea Scrolls were not checked at all, though the brief singles them out and 11QPs-a preserves much of this psalm. Several small factual slips remain, one of them in the labeled theory. There are no critical findings.

**Counts: critical 0, major 2, minor 17.**

## Findings

### 1. Major: "the Greek" is Codex Sinaiticus, and at three places Rahlfs differs (variants.json 119:109, 119:139, 119:112; notes.json 119:28, 119:139, 119:109, 119:33)
The part checked only the Sinaiticus transcription and calls Rahlfs "as remembered". I compared the Rahlfs-based text (bibelkommentare.de LXX, Psalm 118):
- **119:139.** Sinaiticus (transcription p. 362): ἐξέτηξέν με ὁ ζῆλός σου, "your zeal". Rahlfs: ἐξέτηξέν με **ὁ ζῆλος τοῦ οἴκου σου**, "the zeal of your house". The main Greek text has itself borrowed Psalm 69:9 (John 2:17), which is exactly what the note at 119:139 only guesses ("perhaps influenced by 69:9"). The variant should carry it as its own reading. Fix: add a third reading (Rahlfs/most Greek manuscripts, "the zeal of your house") to the 119:139 variant. Change `p` to say the Greek tradition is split. Rewrite the note to say plainly that the main Greek text imports 69:9. That makes a fine `echo` point: the Greek translators themselves heard Psalm 69 here.
- **119:109.** Sinaiticus: ἐν ταῖς χερσίν **σου**, "in your hands". Rahlfs: ἐν ταῖς χερσίν **μου**, "in my hands", the same as the Hebrew and the Gallican *in manibus meis*. The variant's `p` ("the Greek says 'in your hands'") and the note at 119:109 overstate this. Fix: say "Codex Sinaiticus (and some other Greek copies)" read "your hands", while Rahlfs' text reads "my hands" with the Hebrew. The `why` already guesses this. It can now say so outright.
- **119:28.** The note says Sinaiticus reads *enustaxen*, "slumbered". The transcription confirms that, but Rahlfs prints **ἔσταξεν**, "dripped", which agrees with Hebrew *dalaf*. The Gallican *dormitavit* follows the other reading. Fix: say the Greek manuscripts split between "dripped" and "slumbered", and that the Latin followed "slumbered".
- **119:112.** Sinaiticus as transcribed: εἰς τὸν αἰῶνα διὰ παντὸς ἀντάμειψιν. Rahlfs: εἰς τὸν αἰῶνα **δι' ἀντάμειψιν**, "for the sake of reward". The note at 119:33 gives "as a continual reward", which merges the two. Fix: give Rahlfs' "for a reward" and label διὰ παντός as Sinaiticus only (and check the transcription against the facsimile image).
- Elsewhere the part's Greek checks out against both texts: 119:3, 24, 30, 37, 38, 70, 83, 85, 96, 113, 119, 120, 128, 130, 132, 147, 150, 160 and 161, as do *adoleschēsō* at 119:15 and *akēdia* at 119:28. Fix overall: wherever a note says "the Greek", either name the witness or confirm the reading in Rahlfs.

### 2. Major: no Dead Sea Scroll reading was checked, and the 119:37 crux stays open (variants.json; chapters.json "The text"; topics.json textual-history)
The brief puts the scrolls first among the witnesses after the MT, and Psalm 119 is their best-preserved long psalm: 11QPs-a, 4QPs-g, 4QPs-h, 5QPs and 1QPs-a. The page honestly says "the editions and photographs were not examined", but none of the 19 variant entries gives a scroll reading. The one place where the scrolls matter most, 119:37 ("in your way" or "by your word"), is left as "some report... not checked". The deep section says 11QPs-a often swaps one law word for another. That is exactly the kind of variant this psalm's readers need, and it bears on the "verses without a law word" argument made three times on the page (notes at 119:3 and 119:90, the deep section). Fix: consult Abegg–Flint–Ulrich, *The Dead Sea Scrolls Bible* (Psalm 119 notes), Sanders DJD 4, or Flint (keys `sanders-djd4` and `flint-dss-psalms` already exist). Resolve 119:37 one way or the other. Add entries for the scroll's law-word swaps, at least where a major English version footnotes them. I could not verify the 11QPs-a reading at 119:37 myself, so until it is checked the variant must keep its "not checked" wording.

### 3. Minor: the labeled theory misstates its own best evidence (notes.json 119:176, spec "from 'blameless' to 'lost'")
The note lists the "stray" verbs and says 119:176 uses "a different verb, *ta'ah*". But 119:110 also uses *ta'ah* in the very same form: וּמִפִּקּוּדֶיךָ לֹא תָעִיתִי, "from your orders I did not wander", against 119:176 תָּעִיתִי, "I have wandered". The others are *shagah* (119:10, 21, 118) and *shagag* (119:67). Fix: correct the note. The theory gets stronger: the speaker's "I did not wander" (*lo ta'iti*, 119:110) becomes "I have wandered" (*ta'iti*, 119:176).

### 4. Minor: the claim that the site renders *'edut* "decree" "in every book" is false (notes.json 119:2)
Exodus on this site renders it "testimony" (Exodus 25:16, "the testimony that I will give you"), and the Psalms part 090-101 quotes Exodus 25:22 as "the ark of the testimony" (note at 93:5). Fix: "The Psalms on this site render it 'decree' (19:7; 78:5)". A separate point for the editor: Exodus and terms.json disagree.

### 5. Minor: wrong verse in the "give me life" note (notes.json 119:25)
"'your saying has given me life' twice (119:50, 93)". In 119:93 the life-giver is "your orders" (*piqqudim*: "through them you gave me life"), not "your saying". Fix: "your saying has given me life (119:50) and your orders have (119:93)".

### 6. Minor: "two or three" law words per verse (chapters.json deep "Verses without a law word")
No verse has three distinct law words. 119:16, 43, 48, 160, 168 and 172 each have two, and 119:42 has *davar* twice. Fix: "some verses have two".

### 7. Minor: "one letter different" at 119:37 (variants.json 119:37 `why`)
בדרכך (*bdrkk*) and בדברך (*bdbrk*) differ in two letter positions (an added *bet* and a lost *kaf*), not one. They look alike, but "one letter" is wrong. Fix: "two words that look very alike in Hebrew script". Also fix `b`.

### 8. Minor: Benedict does not *end* the Prologue with 119:32 (notes.json 119:32)
The allusion (*dilatato corde... curritur via mandatorum Dei*) is Prologue 49. Prologue 50 follows it. Fix: "near the end of the Prologue of his Rule".

### 9. Minor: unsourced monastic claim about *acedia* (notes.json 119:28)
"The monks who sang this verse at the little hours often applied the Latin to spiritual sloth." The likely source is John Cassian, *Institutes* 10, which cites this verse in its treatment of *acedia*. Fix: name Cassian (and add a key), or soften the sentence to "later monastic writers applied...".

### 10. Minor: Job 10:8 does not use "the same words" (notes.json 119:73)
Job 10:8 has יָדֶיךָ עִצְּבוּנִי וַיַּעֲשׂוּנִי ("molded me and made me"). Psalm 119:73 has עָשׂוּנִי וַיְכוֹנְנוּנִי ("made me and shaped/established me"). Only "your hands ... made me" is shared. The exact pair *'asah* + *kun* is in Deuteronomy 32:6, which the note already cites. Fix: "Job uses nearly the same words..." and point to Deuteronomy 32:6 as the exact match.

### 11. Minor: section headings that disagree with the Plain English Translation (plain.txt headings at 119:121 and 119:81)
- Ayin, "Time for the LORD to Act": the Plain English Translation of 119:126 reads "It is time to act for the LORD", and the note says the Plain English Translation's wording deliberately allows both readings. The heading picks one of them. Fix: a heading that does not decide the crux, such as "Stand Surety for Your Servant" or "A Time to Act".
- Kaf, "A Wineskin in the Smoke": the verse says "skin bottle". Fix: make the two match.

### 12. Minor: Plain English Translation wording (plain.txt)
- 119:42 "I will answer the man who mocks me with a word" can be read as the mocker using the word. The Hebrew is "answer my taunter (with) a word". Fix: "I will have a word to answer the one who mocks me".
- 119:93 "Forever I will not forget" is not idiomatic English. The Plain English Translation keeps "Forever" in front only to echo the *lamed*, and the note at 119:1 already admits English cannot keep the pattern. Fix: "I will never forget your orders".
- 119:14 "I am glad on the way of your decrees": "on" is odd. Fix: "in the way".
- 119:13 "My lips tell over" is archaic, above the 8th-grade target even with the gloss. Fix: "My lips recount" or "I repeat aloud".
- 119:83 "hung" is not in the Hebrew ("like a skin in smoke"). It is a fair inference, but the history note already explains it. Fix: drop "hung" or mark it in the note.
- 119:143 "tracked me down" sharpens *matsa'uni*, "found me". Fix: "have found me" or "have caught up with me".

### 13. Minor: missing or thin variants (variants.json)
Each of these is in the Greek and changes the sense. The first two are in the very witness the part relied on:
- 119:105, Sinaiticus λύχνος τοῖς ποσίν μου **ὁ νόμος σου**, "your law" (Rahlfs ὁ λόγος σου). The best-known verse of the psalm deserves at least a note.
- 119:151, Greek πᾶσαι αἱ **ὁδοί** σου ἀλήθεια, "all your ways are truth" for "commands". This is one more law-word swap.
- 119:118, Greek ἄδικον τὸ **ἐνθύμημα** αὐτῶν, "their thought", as if reading *tar'itam* for *tarmitam*. Some modern versions footnote it.
- 119:91, Greek τῇ διατάξει σου διαμένει **ἡ ἡμέρα**, "by your ordinance the day continues", which reads *hayyom* as subject.
- 119:139, Sinaiticus also has τῶν **ἐντολῶν** σου for "your words" (see finding 1).

### 14. Minor: the Hebrew letter names are spelled differently across parts, and the page claims they match (chapters.json deep "The 22 letters")
The page says "This site spells them as other psalm pages do (*alef, bet, gimel*)". But the notes at 9:1, 25:1 and 111:1 use *aleph*, and 25:1 has *vav*. The 145 part matches 119 (*alef*, *waw*, *chet*). Fix: drop the claim, and let the editor pick one set for the Psalter and the acrostics topic. Relatedly, the Berakhot 3b story has a "harp" here and a "lyre" in the note at 57:8 (part 056-072). *Kinnor* should get one rendering.

### 15. Minor: Midrash Tehillim on Psalm 119 is not "verse by verse" (chapters.json views.J)
The midrash on this psalm comments on selected verses, not all 176. Fix: "comments on many of its verses".

### 16. Minor: sources named but not cited (chapters.json views.C, views.X, deep "Praying Psalm 119"; notes.json 119:176)
Levenson is named in the C view, Ambrose and Bonhoeffer in the X view, and the Jewish name-spelling funeral custom in "Praying Psalm 119". The keys exist in the part's sources.json (`levenson-sources-torah`, `ambrose-psalm118`, `bonhoeffer-ps119`, `lamm-mourning`), but `ambrose-psalm118` and `bonhoeffer-ps119` are never cited anywhere. The note at 119:176 ("Church fathers read it of Christ the good shepherd") has no source, though Ambrose's *Expositio* closes on this verse. Fix: add `s: ["ambrose-psalm118", "augustine-enarrationes"]` to the 119:176 views note, and cite Bonhoeffer and Levenson where they are named (for example on the settings card or the topic sections).

### 17. Minor: Augsburg Confession detail (notes.json 119:46)
The motto (*Et loquebar de testimoniis tuis in conspectu regum et non confundebar*) is right. But the "printed Latin edition" with that title page is Melanchthon's first printed edition (Wittenberg, 1530–31), not the copy read before Charles V. Fix: "the first printed edition, published soon after the Diet of Augsburg (1530), carried this verse on its title page".

### 18. Minor: Avot 6:2 is a later appendix (notes.json 119:45)
The "engraved / freedom" saying is in Avot chapter 6 (*Kinyan Torah*), a baraita added to the Mishnah tractate, not part of the Mishnah proper. Fix: "a teaching added to Mishnah Avot (6:2)".

### 19. Minor: the count of *mishpat* includes its non-law uses (notes.json 119:1 "Eight words"; chapters.json table)
The count of 23 includes 119:84 ("judgment"), 121 ("justice") and 132 ("what is right"), which the same page says are not law words. That leaves 20 law uses. Fix: add "(including three uses in other senses)" so the table and the "verses without a law word" section agree.

## Checked and found sound
- All 176 verses against the Hebrew: no omissions, additions of substance, or wrong persons or tenses. The Qere is followed at 119:79, 147 and 161, and each has a variant. MT accents are followed at 119:21. Singular and plural are handled honestly at 119:43, 98 and 103.
- Every first word in the acrostic table matches the Leningrad Codex.
- Counts: torah 25, *'edot/'edwot* 23 (14 + 9), *piqqudim* 21, *chuqqim* 22 (21 + *chuqqot* at 16), *mitsvot* 22, *davar* 24, *'imrah* 19, *derekh* 13, *'orach* 5, the 11 "love" verses, and the 9 *chayyeni* verses.
- The four verses without a law word (3, 37, 90, 122) are counted correctly.
- Quotations of other books match the site's Plain English Translation: 1 Chronicles 29:15, Job 4:15, Job 10:8, Job 32:9, Numbers 6:25, Numbers 18:20, Nehemiah 10:29, Deuteronomy 4:6, 1 Kings 18:21, and Psalm 12:6, 18:30 and 69:9.
- The torah words are consistent with 19:7–9 (part 018-030) and with *piqqudim* at 111:7 (part 107-118).
- Talmud and Mishnah citations: Berakhot 3b, 4b, 5a and 40b; Sotah 35a; Gittin 60a; Temurah 14b; Mishnah Berakhot 9:5; Avot 4:1; Bava Batra 14b–15a.
- Liturgy: Benedict's Rule ch. 16 and 18; the Roman breviary's little hours until 1911; Kathisma 17, *Amomos*, the Midnight Office, Saturday matins, funerals and the Holy Saturday Lamentations; BCP days 24–26; Liturgy of the Hours Daytime Prayer.
- The Gallican readings cited (*dormitavit*, *coagulatum est sicut lac*, *in pruina*, *confige timore tuo carnes meas*, *iudicia tua non sum oblitus*, *in manibus meis*).
- C. S. Lewis's "embroidery" (*Reflections on the Psalms*, ch. 6). Soll on Jehoiachin, Reynolds, Freedman, Levenson and Bonhoeffer's unfinished meditation (DBW 15) are all real works.
- The traditions card: Westminster Confession 19, Calvin's *Institutes* 2.7.12, Formula of Concord 6, Catechism 1961–1974 and 2068–2070, SDA Fundamental Belief 19.
- The settings cards for 119:1–3 and 119:4–176, with debated audiences given as views.
- book.json: the outline entry and the acrostic list include 119.

## Fixes applied

1. **Greek witnesses (major).** I checked Rahlfs' text on bibelkommentare.de against every Greek claim. "The Greek" now means Rahlfs, and Sinaiticus-only readings are labeled as Sinaiticus. In the variants, the Greek witness label now names both texts. Changes by verse:
   - 119:139 has a third reading, Rahlfs "zeal for your house", and `p` says the Greek is split. The note says the main Greek text imports 69:9.
   - 119:109 gives Rahlfs (with the Hebrew and the Gallican) "my hands" and Sinaiticus "your hands", in the variant and the note.
   - The 119:28 note gives Rahlfs *estaxen*, "dripped", and Sinaiticus *enustaxen*, "slumbered", followed by the Latin.
   - At 119:112 and the 119:33 note, Rahlfs has "for a reward", and Sinaiticus alone adds *dia pantos*. I could only read the transcription, not the facsimile image.
   - Also relabeled: 119:3, 43, 48, 105, 147 and 161.
2. **Dead Sea Scrolls (major).** I consulted dssenglishbible.com, an English presentation of the published scroll texts (new key `dssenglishbible-psalms`). DJD 4 and the photographs were not available. Every scroll reading is labeled "as reported", and the chapter page says plainly that the scroll editions were not checked.
   - 119:37: the crux is settled for the Hebrew. 11QPs-a and 4QPs-g are reported to read "in your way". "By your word" is now labeled a conjecture with no witness.
   - New scroll variants: 119:83 ("you made me" and "your loyal love"), 119:107 ("be gracious to me") and 119:159 ("by your word"). The 11QPs-a report at 119:128 is kept.
   - "Verses without a law word" now notes that the scroll's reading at 119:83 has no law word. The chapter page's "The text" section and the textual-history topic list the swaps.
   - I removed the uncited `sanders-djd4` from the topic, since it was not consulted.
3. **119:176 spec.** It now says *ta'ah* appears in both 119:110 (*lo ta'iti*) and 119:176 (*ta'iti*), and that the others are *shagah* and *shagag*.
4. **119:2.** Now reads "The Psalms on this site render it 'decree' (19:7; 78:5)". It also notes that Exodus keeps "the testimony" for the tablets. That follows the lead decision. The Exodus and terms.json disagreement is left to the editor.
5. **119:25.** Now: the saying gives life at 119:50, and the orders at 119:93. The same error in the word-of-god topic is fixed too.
6. **Law words per verse.** Now "some verses have two", and it notes that 119:42 has *davar* twice.
7. **119:37 `why` and `b`.** Now "look very alike in Hebrew script". The `b` now says the scroll readings come from an English presentation.
8. **119:32.** Now "Near the end of the Prologue".
9. **119:28.** Softened to "Later monastic writers"; the preview now says "Some Greek copies and the Latin".
10. **119:73.** Now: Job uses nearly the same words, and Deuteronomy 32:6 is the exact pair.
11. **Headings.** Now "Kaf: A Skin Bottle in the Smoke" and "Ayin: Stand Surety for Your Servant", in plain.txt and in the chapter table.
12. **Plain English Translation wording.** Changes:
    - 119:42 "And I will have a word to answer the one who mocks me" (the gloss and note anchors were updated);
    - 119:93 "I will never forget your orders";
    - 119:14 "in the way of your decrees";
    - 119:13 "My lips recount" (the gloss is now on "recount");
    - 119:83 "I am like a skin bottle in the smoke" ("hung" dropped; the variant anchor is now "in the smoke");
    - 119:143 "have caught up with me".
13. **Missing variants.** Five changes:
    - new entry 119:105: Sinaiticus "your law", Rahlfs "your word";
    - new entry 119:151: Sinaiticus "ways", Rahlfs "commands";
    - new entry 119:118: "their thought is unjust";
    - new entry 119:91: "the day continues";
    - in the 119:139 entry: Sinaiticus "commands" for "words".

    The variants went from 19 to 26.
14. **Letter names.** I dropped the claim that other psalm pages match. The page now says the site uses *alef, bet, gimel* throughout the Psalms (lead decision) and that Rahlfs prints the Greek letter names. The Berakhot 3b story now has "lyre" for *kinnor* in the J view and the 119:62 note.
15. **Midrash Tehillim.** Now "comments on many of its verses".
16. **Uncited sources.**
    - The 119:176 views note cites `ambrose-psalm118` and `augustine-enarrationes`.
    - The settings card for 119:4–176 cites `levenson-sources-torah` and `bonhoeffer-ps119`.
    - The word-of-god topic cites Ambrose and Bonhoeffer.
    - `lamm-mourning` was already cited on the burial topic.
17. **119:46.** Now "the first printed edition, published soon after the Diet (1530–1531)".
18. **119:45.** Now "a teaching added to Mishnah Avot (6:2)".
19. **Mishpat count.** It now says "including three uses in other senses" in the 119:1 note and in the chapter table.

`node tools/build.js --check Psa/119-119`: 0 errors, 0 warnings.
