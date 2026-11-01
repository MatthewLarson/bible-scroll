# Hostile review: Proverbs 25–29 (part 25-29)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in `content/books/Pro/parts/25-29/`, plus the parts of `book.json` that touch 25–29. Checked against `texts/orig` and `node tools/literal.js Pro 25–29`, `texts/auto/Pro.json`, `texts/en/Pro.json`, terms.json, the other five parts' plain.txt, and the Plain English Translation of other books this part quotes. `node tools/build.js --check Pro/25-29` and `--check Pro` both report 0 errors and 0 warnings.

## Verdict

This is a strong part. The translation is mostly rebuilt from the Hebrew. It keeps the couplet shape and the hard images ("scooping up" coals, "the faces of your sheep", "his friend's face"). It follows the Masoretic Text and says so wherever the text is uncertain (25:7, 25:27, 26:10, 27:16, 28:3, 28:18, 28:23, 29:21). All nine pairs that depend on earlier parts now match the earlier Plain English Translation word for word. Most of the flagged unverified citations check out: Leviticus Rabbah 1:5, Bava Metzia 70b, the heter iska, Maimonides on Torah Study 2:2, the Ahiqar sow saying, Bacon, Sukkah 52a, Taanit 7a, Yoma 86b, Moed Katan 17a, Bava Batra 21a, Lateran III, Catechism 2269 and Nicaea canon 17. The 26:2 Ketiv reading is noted, and the choice is defensible.

Still, there are real errors:
- One rabbinic source is reported backwards (Shabbat 30b on 26:4–5).
- One Latin witness is garbled (26:8).
- The claim that Romans 12:20 matches the Greek "exactly" is false.
- One codex claim at 25:13 looks wrong.
- The key word 'atsel goes against terms.json.
- A handful of lines still carry NIV or ESV wording that the Hebrew does not force. The worst is 25:15b, which is the NIV word for word.

None of these is critical. All need fixing before the part is final.

## Findings

### 1. Major: Shabbat 30b reported backwards (notes 26:5; chapter 26 deep "Answer a fool, do not answer a fool")
**What is wrong.** The 26:5 note says: "'Do not answer' applies to matters of Torah, 'Answer' to worldly matters." The chapter 26 deep section says the same. The Talmud teaches the reverse. You answer a fool in matters of Torah, and you do not answer him in worldly matters. The Gemara then illustrates the Torah case with Rabban Gamaliel answering the student who mocked his teaching. Rashi on the passage agrees.

**Evidence.** Bavli Shabbat 30b: "הא בדברי תורה הא במילי דעלמא". Rashi applies ענה כסיל to divrei Torah. A secondary summary (OU Torah on Mishlei 26) agrees: "One should answer a fool in matters of Torah, but not in other matters." Three places state the resolution without assigning it, and they are fine as written: the 26:4 note, the chapter 26 J lens and book.json's canon section.

**Fix.** In both places, write: "'Answer' applies to matters of Torah, where an error must be corrected; 'Do not answer' applies to worldly matters." You could add the Rabban Gamaliel example.

### 2. Major: Jerome's "heap of Mercury" garbled (note 26:8, "A stone tied into a sling")
**What is wrong.** The note says Jerome's Latin speaks of a "heap of Mercury" only "as reported by Julius Wellhausen, and as a thirteenth-century Latin manuscript of Proverbs shows". That is muddled. The reading is the Vulgate's own text. It is not a report, and it is not a late manuscript: "sicut qui mittit lapidem in acervum Mercurii, ita qui tribuit insipienti honorem". The note also leaves out the Jewish source behind it. Bavli Chullin 133a cites 26:8: whoever teaches an unworthy student is like one who throws a stone to Markulis (Mercury). That is the rabbinic "cairn of Mercury" reading, and Jerome probably got it from his Jewish teachers. Wellhausen's *Reste arabischen Heidentumes* is about Arab stone-heap customs. It is not a witness to the Vulgate.

**Fix.** Rewrite the second half along these lines. "Jerome's Latin reads 'like one who throws a stone onto the heap of Mercury', a roadside cairn. The same reading appears in the Talmud, which applies the verse to teaching an unworthy student (Chullin 133a)." Drop the "thirteenth-century manuscript" clause. Replace `wellhausen-reste` with a Talmud key, or keep it only for the cairn custom. The sling remains the majority reading.

### 3. Major: "Paul quotes the Greek of 25:21–22 exactly" (note 25:22 "Romans 12:20 and the Greek"; chapter 25 deep "Coals of fire")
**What is wrong.** The Greek of Proverbs 25:21 reads "ἐὰν πεινᾷ ὁ ἐχθρός σου, τρέφε αὐτόν". Romans 12:20 reads "ψώμιζε αὐτόν". So the verb for "feed" differs, and the quotation is not word for word. The note claims an exact match "apart from Paul's opening 'rather'". The deep section says "exactly ... checked here against Swete's text", which also contradicts the note's own exceptions. If some codex reads ψώμιζε, name it. Otherwise the claim is false.

**Evidence.** The Rahlfs text of Proverbs 25:21 (as shown on Blue Letter Bible) has τρέφε. Romans 12:20 in NA28/SBLGNT has ψώμιζε. Lexicons list no ψωμίζω at Proverbs 25:21.

**Fix.** Write: "Paul's wording follows the Greek of Proverbs closely, with one change of verb for 'feed' (ψώμιζε for τρέφε), his opening 'rather', and without the closing promise." Make the deep section say the same.

### 4. Major: 'atsel is "the lazy man", against terms.json (26:13, 26:14, 26:15, 26:16; heading "The lazy man"; topic `work`; glosses)
**What is wrong.** terms.json says 'atsel is "lazy one (in address, 'you lazy one'); otherwise 'the lazy one' or 'a lazy person'; never 'sluggard'". The 01-09 part follows it ("lazy one"). This part, like 10-15, 16-22 and 23-24, uses "lazy man" (5 times here, 14 times across those four parts). This is the known cross-part item "10-15 'lazy man' vs 01-09 'lazy one'".

**Fix.** The lead decides. Either align all of 10–29 to terms.json ("the lazy one" / "a lazy person"), or change the terms.json entry and 01-09. If terms.json stands, update in this part:
- 26:13–16 Plain English Translation and the section heading;
- the 26:13 and 26:15 notes;
- the `work` topic section;
- the 26:13 gloss anchor.

### 5. Major: drift, 25:15b is the NIV word for word
**What is wrong.** Plain English Translation: "a gentle tongue can break a bone". The NIV's second line is identical. The Hebrew is *lashon rakkah tishbar garem*, "a soft tongue breaks bone". "Gentle" and the modal "can" are not forced. This part's own `speech` topic section and the 25:15 note preview already say "a soft tongue breaks bone".

**Fix.** Use "and a soft tongue breaks bone". Move the 25:15 note anchor to match.

### 6. Major: drift, 26:19b "I was only joking"
**What is wrong.** "I was only joking, wasn't I?" builds on the NIV's exclamation. The Hebrew *halo' mesacheq 'ani* is a question: "Am I not playing / joking?" The "only" comes from the NIV.

**Fix.** Use something like "and says, 'Wasn't I just having fun?'" or "'Am I not joking?'". Update the 26:19 note anchor and the gloss anchor.

### 7. Major: drift and cross-part inconsistency, 29:3a
**What is wrong.** "A man who loves wisdom brings joy to his father" is the NIV's first line word for word. The verb is *yesammach*, which the earlier parts render "makes a father glad" (10:1 and 15:20). This part's own 27:11 has "gladden".

**Fix.** Use "A man who loves wisdom makes his father glad". That follows 10:1 and 15:20 and removes the match.

### 8. Major: the 25:13 Greek codex claim is doubtful, and "the Greek" is Swete's Vaticanus rather than the critical text (note 25:13; all variants)
**What is wrong.** The note says Sinaiticus and Alexandrinus read "snow", while "Codex Vaticanus has *exodos*, 'a going out', where they have 'snow'". Rahlfs prints "ὥσπερ ἔξοδος χιόνος ἐν ἀμήτῳ κατὰ καῦμα ὠφελεῖ", with both words. That is hard to square with an either/or split between the codices. The brief says "the Greek" means the critical text (Rahlfs or Göttingen), and a reading found only in one codex is named by that codex. This part labels every Greek reading as Swete's Codex Vaticanus "checked directly". The 25:4 claim that "Codex Alexandrinus has *krypte*" for *typte* is a codex-only reading that I could not confirm.

**Fix.**
- 25:13: either confirm the codex split from Swete's apparatus and quote it, or write "the Greek reads 'as a going-out of snow in harvest helps against the heat'".
- Base "the Greek" on Rahlfs. Name B, ℵ or A only for their own readings.
- Verify the 25:4 *krypte* claim or drop it.

### 9. Minor: drift, 25:23 combines NIV and ESV
"The north wind brings rain, / and a sly tongue brings angry looks." "Sly tongue" is the NIV, and "angry looks" (with the first line) is close to the ESV. The Hebrew *leshon sater* is "a tongue of secrecy", and the note itself makes the "hidden"/"secret" wordplay. Suggested fix: "and a tongue that talks in secret brings angry faces". That keeps *panim* and the wordplay.

### 10. Minor: drift, 29:26a "get an audience with"
"Audience" is the NIV's idiom. The Hebrew is "seek the face of a ruler", and the note is already titled "Seeking the face of the ruler". Suggested fix: "Many seek the ruler's face". Also update the gloss anchor.

### 11. Minor: drift, 29:7b "knowledge like that"
"Like that" matches the ESV's added "such". The Hebrew is only *lo' yavin da'at*. Suggested fix: "a wicked man does not understand that knowledge" or "has no understanding of it". Better still, say plainly what the line implies without adding a demonstrative.

### 12. Minor: drift, 26:2a "a swallow that darts"
This echoes the NIV's "darting swallow". The Hebrew is *kadderor la'uf*, "like a swallow for flying". Suggested fix: "and a swallow in flight".

### 13. Minor: drift, 25:4b "silversmith"
*Tsoref* is a refiner or metalsmith. "Silversmith" is the NIV's choice. Suggested fix: "a vessel for the refiner" or "for the smith".

### 14. Minor: drift, 25:25b "good news from a distant land"
This is the NIV word for word. The Hebrew nearly forces it, so it is acceptable. If you touch the verse, "a good report from a far-off land" is closer to *shemu'ah tovah*.

### 15. Minor: softening, 26:6 "gulps down harm"
*Chamas* is "violence", and the note is titled "Drinking violence". "Harm" softens it. Suggested fix: "and drinks down violence". Move the gloss anchor too.

### 16. Minor: softening, 28:14 "always in awe"
*Mefachched* is "fearing, dreading", and the note says so. The brief keeps "fear" for the fear words. "Awe" interprets the word in advance. Suggested fix: "Happy is the person who is always afraid", or "who always fears". Let the note explain what is feared.

### 17. Minor: couplet order changed, 27:8 and 28:7
- **27:8.** The Hebrew order is "Like a bird wandering from its nest, / so a man wandering from his place". The Plain English Translation swaps the halves. Restore the Hebrew order.
- **28:7.** The Hebrew is "One who keeps the law is a son who understands". The Plain English Translation says "A son who understands keeps the law", which turns predicate into subject (the NIV's order). Suggested fix: "Whoever keeps the law is a son who understands".

### 18. Minor: Amenemope misquoted (chapter 25 W lens and deep "Coals of fire")
Both places say Amenemope counsels feeding the hot-tempered man "so that he is satisfied and ashamed". Lichtheim's translation of chapter 2 reads "Fill his belly with bread of your own, / That he be sated and weep." The text is about rescuing the "heated man" who has fallen into the water. Fix: quote it as "that he be sated and weep", attributed to Lichtheim, and say what the scene is.

### 19. Minor: "a boy's ear is on his back" needs its source (note 29:15 "What the rod is"; chapter 29 W lens)
The saying is real. It is a Late Egyptian school text, Papyrus Anastasi III 3.13, edited by Caminos in *Late-Egyptian Miscellanies* (1954). The note cites `lichtheim-ael`. I could not confirm that Lichtheim's anthology contains this line. Fix: name the papyrus, and cite Caminos or another source you have checked.

### 20. Minor: count of the "woman of contentions" (note 27:15)
"Appears five times (19:13; 21:9, 19; 25:24; 27:15)" is not quite right. 19:13 has *midyene 'ishah*, "a wife's quarrels", not *'eshet midyanim*. Fix: "four times, with a related phrase in 19:13".

### 21. Minor: Job 15:16 misdescribed (note 26:6)
The note says one "drinks scorn in Job 15:16 and Job 34:7". In Job 15:16 one drinks injustice (*'avlah*). Only Job 34:7 is scorn. Fix: "drinks injustice (Job 15:16) and scorn (Job 34:7)".

### 22. Minor: "137 sayings" (note 25:1)
Chapters 25–29 have 137 verses after the heading. Several sayings run over two verses (25:9–10, 25:21–22, 26:18–19, 27:15–16, 27:23–27). Fix: say "137 verses".

### 23. Minor: Hezekiah's dates
This part gives 715–686 BC (the 25:1 note and the chapter 25 settings). book.json gives 715–687 BC. Align the two. Either date is defensible.

### 24. Minor: two variant entries missing (28:3, 28:18)
STYLE asks for an entry where a major translation footnotes the text.
- **28:3.** The NIV reads "a ruler" (*rosh* for *rash*). The note covers this, but no variant card names the NIV.
- **28:18.** The NIV reads "into the pit" (*beshachat*) and footnotes the Syriac in support. The note says only "some scholars propose".

Fix: add a variant for each. Name the Syriac (as reported) and the versions that follow each reading.

### 25. Minor: a variant reading that is not a witness (variants 25:27)
Reading 2, "Reading the 'not' of the first line with the second (KJV and most modern versions; no different Hebrew)", is an interpretation, not a manuscript reading. The note already covers it. Also, "most modern versions" overstates: the NIV follows an emendation. Fix: drop it from the readings, or recast it honestly as the KJV's supplied "not".

### 26. Minor: "checked directly" in reader-facing witness labels (variants 25:1, 25:4, 25:10, 25:20, 25:22, 25:27, 26:11, 26:23, 28:16)
The brief asks for one statement, on the first chapter page, of which witnesses the writer checked. That statement is already in the chapter 25 C lens. Repeating "checked directly" in every `w` field is the kind of first-person claim the brief forbids. Fix: label them "Greek (Rahlfs)", or "Codex Vaticanus" where only B is meant. See finding 8.

### 27. Minor: identical `readers` text on all seven settings cards
Every card carries the same `readers` paragraph word for word. It says nothing specific about, for example, how later readers took the herdsman's poem or the rod sayings. Fix: write a sentence or two for each card. Examples: synagogue and church readings of 27:23–27 as pastoral; 29:18 in the Second Temple period, when prophecy was felt to have ceased; 28:8 in medieval debates about usury.

### 28. Minor: `kind` on non-word notes
26:15 (an `echo` note with kind `mis`) and 29:18 (an `echo` note with kind `nu`) use `kind`, which STYLE gives only to `word` notes. Fix: change the type to `word`, or drop the kind.

### 29. Minor: length limits
Two notes go over 160 words: 25:1 "Scribes at Hezekiah's court" (161 words) and 29:15 "The rod in Jewish and Christian teaching" (169 words). Fourteen previews go over 120 characters: 25:1, 25:20, 25:22, 25:24, 26:2, 26:4, 26:23, 27:19, 27:21, 28:8, 28:24, 29:10 and 29:18. Trim them.

### 30. Minor: the Anabaptist view does not answer the question (chapter 28 traditions card on interest)
The answer is about holding goods in common and simple living. It does not say whether charging interest is wrong. Fix: state the position on interest, or drop the row. An example of a position on interest: Hutterite and Amish practice of interest-free mutual aid within the community, with ordinary banking accepted outside it, sourced.

### 31. Minor: an unsupported aside (chapter 27 settings, 27:1–22 "why")
"In a world where divorce and remarriage were hard for women" has nothing to do with the quarrelsome-wife sayings, which warn the husband. It is also unsourced. Fix: cut it, or source it and tie it to the text.

### 32. Minor: glosses
- 25:20 "soda => baking soda": natron is not baking soda. Use something like "washing soda".
- 26:8 "loading a slingshot so it can't fire": a slingshot is the forked rubber toy. Use "a sling".
- 29:26 "the boss" and 26:13 "the couch potato" are on the edge of patronizing. Acceptable, but reconsider them.

## Cross-part checks (no finding unless noted)
- Repeated sayings match the earlier Plain English Translation exactly:
  - 25:24 = 21:9
  - 26:22 = 18:8
  - 27:12 = 22:3
  - 27:13 = 20:16
  - 27:21a = 17:3a
  - 28:6a = 19:1a
  - 28:19a = 12:11a
  - 29:1b = 6:15b
  - 28:21a follows 24:23b, minus "in judgment" as the Hebrew requires.
- 29:22a / 15:18a use different Hebrew words for anger. "Rage" is kept for *chemah* in both, which is acceptable.
- 26:13 / 22:13 and 26:15 / 19:24 are acceptable. Their first lines agree where the Hebrew agrees.
- 27:15 matches 19:13b ("a drip that never stops").
- *nirgan* is "gossip" at 16:28, 18:8, 26:20 and 26:22. That is consistent.
- Optional: *yesuggav* is "set high and safe" in 29:25 but "lifted out of reach" in 18:10, though the note links the two. Consider aligning them.
- These quotations of other parts' Plain English Translation match: 11:22, 11:25, 12:15, 13:4, 14:15, 15:11, 15:23, 15:33, 19:24, 22:2 and 23:6.
- These quotations of other books' Plain English Translation match: Exodus 20:16, 22:26, 23:5, 32:9, 32:25; Leviticus 5:1, 25:36, 26:17; Numbers 35:31; Deuteronomy 1:17, 15:11, 21:20; 1 Samuel 3:1; 2 Kings 18:3, 18:18; Psalm 7:15, 32:3, 32:5, 57:6, 66:18, 72:4, 141:5; Jude 12.
- Romans, 2 Peter, James and Luke have no Plain English Translation yet. Their "rendered from the Greek" wording must be replaced with their Plain English Translation when those books are written.
- Terms followed: *kesil* "fool", *'evil* "stubborn fool", *lets* "mocker", *peti* "naive", *'arum* "shrewd", *to'evah* "abhorrent", *ashrei* "Happy", *musar*/*yasar* "discipline", *torah* "law" in 28:4, 28:7, 28:9 and 29:18 (with a note), Sheol. The exception is *'atsel* (finding 4).

## Citations verified
- Leviticus Rabbah 1:5: Akiva in the name of Ben Azzai, "two or three seats", "come up / go down".
- Bava Metzia 70b, which cites 28:8.
- The heter iska: Kraków, early 1600s; still used by Israeli banks.
- Maimonides on interest: six prohibitions, Laws of Lending and Borrowing 4:2.
- Maimonides, Laws of Torah Study 2:2: no whips or sticks, a small strap.
- The Ahiqar sow-in-the-bath saying, in the Syriac.
- The Ahiqar "soft tongue breaks a dragon's ribs" line (Lindenberger).
- Francis Bacon, *Advancement of Learning*, Book I.
- Sukkah 52a: *yashlimennu lakh*.
- Taanit 7a, Yoma 86b, Bava Batra 15a and 21a, Moed Katan 17a.
- Augustine, *De doctrina christiana* 3.16.24; Morenz 1953; Klassen 1963; Ginsberg's *spsg*; Bryce 1972; Van Leeuwen 1988; Malchow 1985.
- Lateran III canon 25, Catechism 2269, Nicaea canon 17, Luther's *Trade and Usury* (1524).
- The Greek pluses and readings at 25:1, 25:4–5, 25:10a, 25:20, 25:22, 25:27, 26:2, 26:9, 26:10, 26:11a, 26:22, 26:23, 26:28, 27:8, 27:9, 27:16, 27:19, 27:20a, 27:21a, 27:27, 28:2, 28:14, 28:17a, 29:9, 29:18 and 29:21 agree with the Rahlfs text as I know it. The exceptions are in findings 3 and 8.
- The Greek order (25–29 after 31:9, then 31:10–31 after 29:27) is correct.

## Fixes applied

1. Shabbat 30b corrected in the 26:5 note and the chapter 26 deep section: "Answer" applies to matters of Torah, "Do not answer" to worldly matters, with the Rabban Gamaliel example.
2. 26:8 rewritten: the "heap of Mercury" reading is attributed to Jerome's Vulgate itself, with Chullin 133a (teaching an unworthy student, a stone to Markulis) added. The manuscript clause and the Wellhausen citation are dropped; the sources are now vulgate-weber and bavli-chullin, and wellhausen-reste is removed from sources.json.
3. Accepted in part. Swete's apparatus shows that Codex Vaticanus reads ψώμιζε at 25:21, the same verb as Romans 12:20, while Sinaiticus and Alexandrinus read τρέφε, as Rahlfs prints. The 25:22 note, its preview and the chapter 25 deep section now say Paul follows the Greek closely, with three differences: his opening "rather", the omitted promise, and the verb for "feed" (Rahlfs τρέφε; Paul ψώμιζε, as in Vaticanus).
4. 'atsel is now "the lazy one" in 26:13–16, the section heading, the notes, the gloss (now "the idler"), the work topic and the chapter 26 page. The chapter title is now "Fools, Idlers and Smooth Talkers".
5. 25:15b is now "and a soft tongue breaks bone"; the note anchor moved.
6. 26:19b is now "and says, \"Wasn't I joking?\""; the note and gloss anchors moved.
7. 29:3a is now "A man who loves wisdom makes his father glad", following 10:1 and 15:20.
8. The codex split is confirmed from Swete's apparatus (25:13 εξοδος] χιονος ℵA; 25:4 τυπτε] κρυπτε A). The 25:13 note now gives the critical text ("a going-out of snow") and names the codices only for their single readings. The 25:4 κρυπτε note is kept, with Swete's apparatus as its source. Every Greek reading in variants.json was checked against Rahlfs (the CCAT text), and all of them agree; the labels are now "Greek (Rahlfs)".
9. 25:23 is now "The north wind brings forth rain, / and a tongue that talks in secret, angry faces." The note anchor and its wordplay sentence are updated.
10. 29:26a is now "Many seek the ruler's face"; the note and gloss anchors moved.
11. 29:7b is now "a wicked man does not understand knowledge", with no added demonstrative; the note already explains it.
12. 26:2a is now "and a swallow in flight".
13. 25:4b is now "a vessel for the smith", in the Plain English Translation and in the variant.
14. 25:25b is now "a good report from a far-off land".
15. 26:6a is now "and drinks down violence"; the note and gloss anchors moved.
16. 28:14a is now "Happy is the person who is always afraid"; the note anchor moved and the preview no longer pre-interprets the fear.
17. 27:8 is restored to the Hebrew order ("Like a bird that roams from its nest, / so is a man who roams from his place"). 28:7a is now "Whoever keeps the law is a son who understands".
18. Amenemope is now quoted from Lichtheim, "Fill his belly with bread of your own, / That he be sated and weep", in the chapter 25 W lens and the deep section, with the scene (the heated man fallen into the water).
19. The school saying is now attributed to Papyrus Anastasi III "as reported by Caminos", in the 29:15 note and the chapter 29 W lens. New key caminos-lem.
20. 27:15 note: "four times, with a related phrase, 'a wife's quarrels', in 19:13".
21. 26:6 note: "drinks injustice in Job 15:16 and scorn in Job 34:7".
22. 25:1 note: "137 verses after the heading".
23. Hezekiah's dates are now 715–687 BC throughout, matching book.json.
24. Variants added for 28:3 (MT and KJV "poor"; the proposed rosh, followed by the NIV; the Greek) and 28:18 (MT "at once"; the Syriac "into a pit", as reported in the NIV's footnote, followed by the NIV; the Greek). The 28:18 note now names the Syriac.
25. The 25:27 interpretive "reading" is dropped from the variant. Its "why" now describes the KJV's supplied "not" as an interpretation with no different Hebrew.
26. "Checked directly" is removed from every variant label. The labels are "Greek (Rahlfs)", and the chapter 25 C lens states once which witnesses were checked and in which editions (no website named).
27. Each of the seven settings cards now has its own readers text: the Talmud and Greek on the heading, Luke 14 and Romans 12 for the court sayings, Shabbat 30b and 2 Peter for chapter 26, Taanit 7a and Judas' kiss for 27:1–22, pastoral readings of the herdsman's poem, usury and confession for 28, and prophecy's cessation and the rod debate for 29.
28. The 26:15 note's type is now word (it keeps kind mis). The 29:18 echo note's kind is dropped.
29. The 25:1 and 29:15 bodies are trimmed to 160 words or fewer, and the 25:22 Romans note to 160 words or fewer as well. All 14 long previews are cut to 120 characters or fewer.
30. The Anabaptist row is dropped from the interest card. I could not source a stated position on interest, and the card keeps four views.
31. The divorce aside in the 27:1–22 settings card is cut.
32. Glosses: 25:20 is now "washing soda", and 26:8 is now "loading a sling so it can't fire". 26:13 "couch potato" is now "the idler", and 29:26 "the boss" is now "try to get in to see the one in charge".

Also applied (Lead decisions and later changes):
- 27:13b now follows the revised 20:16b ("take a pledge from him for a foreign woman"), with its gloss updated.
- The NT quotations are re-rendered from the SBLGNT where they had NIV or ESV wording: Romans 12:19 and 12:21, 2 Corinthians 12:11, 2 Peter 2:22 and James 4:14–16. Ecclesiastes 3:7 is also re-rendered.
- The Matthew 18:15 quotation now uses Matthew's new site Plain English Translation.
- The Isaiah 11:4 quotation (29:14 note) now uses Isaiah's new site Plain English Translation.
- --check Pro/25-29: 0 errors, 0 warnings.
