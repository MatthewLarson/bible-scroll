# Hostile review: Ecclesiastes 9–12 (part 09-12)

Reviewer: separate hostile-review agent (not the writer). Date: 2026-10-25. This replaces the partial review cut off by a usage limit.

## Verdict

This is a strong, careful part. The translation follows the Leningrad Codex faithfully, the Ketiv/Qere choices (9:4, 12:6) are right, and the terms (vapor, share, toil, gain, under the sun, frustration, "There is an evil I have seen under the sun") are kept as the brief requires. I checked every Greek claim in the variants against Swete (Codex Vaticanus) and Rahlfs, and almost all of them hold: Vaticanus "ἐν ὁδοῖς ἄμωμος καὶ μὴ" at 11:9, "ἄκουε" at 12:13, "περισσεία τῷ ἀνδρὶ οὐ σοφία" at 10:10, Rahlfs "τοῦ ἀνδρείου" at 10:10, "ἀνατραπῇ" at 12:6, "οὖς ἐξιχνιάσεται" at 12:9. The rabbinic citations (Berakhot 18a–b, Shabbat 153a, 151b–152a, 152a–b, 30b, Nedarim 32b, Arakhin 15b, Hagigah 3b and 5a, Yevamot 62b, Eruvin 21b, Leviticus Rabbah 18:1 and 28:1, Mishnah Ketubot 4:4) are real and fit, and every source key resolves to a real work. I found no invented source or reading. The problems are of four kinds. (1) Three verses keep an NIV or ESV sentence shape that the Hebrew does not force (11:5, 10:10, 10:4). At 11:5 this is tied to a missing variant entry. (2) One Talmud passage is misdescribed (Shabbat 30a–b). (3) Four notes sit on exactly the same anchor as a variant, which STYLE forbids and the build fails to catch. (4) A handful of quotations of other books are not in those books' current Plain. The traditions card is fair but incomplete for the Lutheran side. `VERBOSE=1 node tools/build.js --check Ecc/09-12` gives 0 errors and 0 warnings. The whole-book check gives 2 warnings, both in 05-08 (it quotes 9:9).

Counts: critical 0, major 9, minor 20 (plus 10 cross-part items for the lead).

## Findings

### Major

**1. Major: plain.txt 11:5. NIV sentence skeleton.**
The Hebrew is *ka'asher 'enkha yodea' mah-derekh haruach ka'atsamim beveten hamle'ah ken lo' teda' et-ma'aseh ha'elohim asher ya'aseh et-hakkol*: "as you do not know what is the way of the wind/breath, *like* (or *in*) the bones in the womb of the pregnant woman, so you do not know the work of God who makes everything." The Plain reads "Just as you do not know which way the wind goes, or how bones take shape in a pregnant woman's body, so you cannot know what God does…". That follows the NIV's frame point by point: "As you do not know [the wind], *or how* [the body] *is formed* in [a mother's womb], *so you cannot* [understand] the work of God, the Maker…". Hebrew has no "or" and no verb "take shape / be formed". Both are NIV interpretive supplies, and they settle the "two pictures" reading in the text itself. Fix: rebuild the verse from the literal line in a new sentence shape that keeps *ka-* visible. For example: "You do not know the way of the wind, as with the bones in a pregnant woman's womb. Just so, you do not know the work of God, who makes everything." Put the "two pictures / one picture" choice in the note (it is already there, #53). Also keep "womb" for *beten*, not "body".

**2. Major: variants.json, missing entry at 11:5 (*ka'atsamim* / *ba'atsamim*).**
Note #53 says many Hebrew manuscripts (and the Targum) read *ba'atsamim*, "in the bones". That reading, taken as one picture ("how the spirit/breath comes to the bones in the womb"), is what the ESV and NRSV-type translations print. STYLE requires a variant entry where a major English translation follows a different reading. The Greek (Rahlfs and Swete: ὡς ὀστᾶ ἐν γαστρί) supports the Leningrad *ka-*. Fix: add a variant. Reading 0 is Leningrad *ka-* with the Greek. Reading 1 is *ba-* from many medieval Hebrew manuscripts and the Targum, with the one-picture plain. Anchor it on a word that note #53 does not use exactly.

**3. Major: plain.txt 10:10. ESV sequence.**
"If the iron has gone dull / and he has not sharpened its edge, / he must put in more strength; / but … brings success". This runs the ESV's sequence: "If the iron is blunt, and one does not sharpen the edge, he must use more strength, but wisdom helps one to succeed". "He must [use/put in] more strength" and "sharpen the edge" are the same choices in the same order. *Panim* rendered "edge" is the ESV/NIV interpretation, and "succeed/success" is shared too. The Hebrew is *vehu' lo'-fanim qilqal vachayalim yegabber*: "and he has not whetted the face, then he will add strengths". Fix: rebuild from the literal line, for example "If the iron is blunt and its face has not been whetted, it takes more muscle…". Keep the yitron "gain" line, which is the site's own.

**4. Major: plain.txt 10:4. NIV/ESV wording.**
"do not quit your post, / for calm puts great wrongs to rest" follows NIV "do not leave your post; calmness can lay great offenses to rest" (ESV "lay great offenses to rest"). The Hebrew *meqomekha 'al-tannach ki marpe' yanniach chata'im gedolim* has "your place" and the verb "leave/let rest". The idiom "lay/put … to rest" and "post" are the modern versions' choices. Note #34 rightly makes the wordplay *tannach / yanniach* its point, and the Plain hides it. Fix: rebuild so that the same English verb carries both halves, e.g. "do not let go of your place, / for calm lets go of great wrongs", or "do not leave your place … calm leaves great sins alone". Adjust the gloss on "do not quit your post" to match.

**5. Major: notes.json #7 (9:4, "A living dog and a dead lion"). Talmud misdescribed.**
The note says Bavli Shabbat 30a–b "lists the clash [of 4:2 with 9:4] among the reasons the sages once thought of withdrawing the book". It does not. The 4:2 / 9:4 contradiction comes in Shabbat 30a, in the question put to Rav Tanhum of Nevi ("Solomon, where is your wisdom?"), alongside Psalm 115:17. It is resolved there. The withdrawal passage in 30b cites other pairs: 7:3 against 2:2, and 8:15 against 2:2 (checked in the Sefaria text of 30b). Fix: "Bavli Shabbat 30a notices the clash with 4:2 and resolves it…; when 30b gives the contradictions that made the sages want to withdraw the book, it cites 7:3 and 8:15 against 2:2." The chapter 9 J lens ("noted the clash … Shabbat 30a–b") can stay, or be narrowed to 30a.

**6. Major: notes.json, four notes share a variant's exact anchor.**
STYLE: "A note may not use exactly the same anchor as a variant… one tap must open one thing." Four cases:
- note #30 and the variant at 10:1: "a little folly weighs more than wisdom, more than honor"
- note #58 and the variant at 11:9: "Walk on in your heart's ways and in what your eyes see"
- note #60 and the variant at 11:10: "boyhood and black hair are vapor"
- note #71 and the variant at 12:6: "before the cord of silver is torn"

Fix: move each note to a word inside or beside the variant: #30 to "weighs more", #58 to "Walk on", #60 to "black hair" (the gloss already sits there, which is allowed), #71 to "the bowl of gold". Or fold the point into the variant's `b`. (The build does not catch this; see cross-part item G.)

**7. Major: plain.txt 12:3. A word is left out.**
"and the women at the lattice windows grow dark". The Hebrew *vechashekhu haro'ot ba'arubbot* is "and *those who look out* through the windows grow dark". The participle *haro'ot* ("the women who look") is the whole basis of the eyes reading, which note #65 and the chapter page lean on ("the watchers at the windows are the eyes"). As rendered, the windows go dark, not the lookers. Fix: "and the women who look out through the lattices grow dim". Keep "lattice" if wanted, but restore "who look out".

**8. Major: chapters.json ch. 9 traditions card (sheol), Lutheran view incomplete.**
The card asks three things: whether the dead know of the living, whether they pray for us, and whether the living may pray for the dead or ask the saints to pray. The Lutheran answer covers only the invocation of saints (Apology 21). The same confession also says of prayer for the dead, "we do not forbid" it (Apology of the Augsburg Confession 24, on the Mass, answering the appeal to the Fathers). That is the distinctive Lutheran position between Rome and Geneva. Without it the card makes Lutherans look like the Reformed. Fix: add the Apology 24 point, and say that Lutheran practice varies. Lesser points on the same card: the Catholic answer ends with an interpretive sentence ("Verses like 9:5–6 speak of the dead's part in earthly life…") presented as Catholic teaching with no catechism citation, so either source it or move it to the note. The question itself is three questions in one; consider trimming it to "Do the departed pray for the living, and may the living pray for them?"

**9. Major: quotations of other books not in their current Plain.**
The rule is that a quotation of a verse uses that verse's current Plain exactly. The build did not flag these because the reference is not directly after the quote:
- note #6 (9:4): "What is this confidence you trust in?" (2 Kings 18:19). The 2 Kings Plain is "What is this trust of yours that you trust in?" Quote the Plain. The note can still say *bittachon* is "confidence".
- note #53 (11:5) and the ch. 11 X lens: "The wind blows wherever it chooses" … "born of the Spirit" (John 3:8). John's Plain (published) is "The wind blows where it wants to… born from the Spirit."
- note #22 (9:12): "before your time" (7:17). The 7:17 Plain is "when it is not your time". "carried off 'before his time'" (Job 22:16): the Job Plain is "seized when it was not yet their time".
- note #56 (11:7): "has not seen the sun" (6:5). The 6:5 Plain is "It has never even seen the sun".

Fix: quote each one exactly, or drop the quotation marks and paraphrase.

### Minor

**10. Minor: notes.json, no ha'elohim note in the part.** terms.json: *ha'elohim* "God (Ecclesiastes never uses YHWH; note at first use in each part)". The first use here is 9:1 ("in God's hand"), and no note says it. Add a sentence to note #1.

**11. Minor: notes.json #16 (9:9 hevel).** The terms entry and the brief require the first-use note to cover breath, *smoke*, "meaningless", "vanity" and "absurd". "Smoke" is missing. Add it (it is also a possible sense in Isaiah 57:13 and Psalm 144:4).

**12. Minor: note #62 (12:1) misdescribes the Plain.** It says "The Plain … keeps 'youth' for *yaldut* (11:9–10)". In fact 11:9 has "while you are young" and 11:10 has "boyhood". Either render *yaldut* "youth" in both places or correct the note. On the same verse, 11:10 renders *ra'ah* as "trouble" while 11:2 and 12:1 have "evil". Note #60 admits this. That is acceptable, but then say why in one clause ("here bodily harm").

**13. Minor: plain.txt 11:8, "If a man lives".** *Ha'adam* is "a person / people / human beings" by the terms entry. Elsewhere this part uses "a human being" (9:1), "people", "human beings" (9:12) and "the human" (12:5). "A person" fits better.

**14. Minor: plain.txt 9:5, "all memory of them".** The Hebrew *ki nishkach zikhram* has no "all". Write "since the memory of them is forgotten" (or "their memory is forgotten").

**15. Minor: plain.txt 9:11, "favor to the skilled".** *Layyod'im* is "to those who know, the knowledgeable". "Skilled" shifts the sense toward craft. Write "favor to the learned / to those who know". Note #20's list ("skill") would then change to "knowledge".

**16. Minor: plain.txt 10:3 and note #33.** The note says putting "He is a fool" in quotation marks "keeps both readings open". It does not. A quoted third-person sentence makes the fool call *someone else* a fool, which is reading 2 (the Vulgate's). Reading 1 (he shows everyone that *he* is a fool: Rashi, Ibn Ezra, most versions) is lost. Either choose reading 1 in the text ("and he tells everyone he is a fool") and give reading 2 in the note, or correct the note's claim.

**17. Minor: note #9 (9:5), "nearly the same sounds in a different order".** *Sakhar* (ś-k-r) and *zikhram* (z-k-r) have the same consonants in the same order. Only the first letter differs. Fix the wording.

**18. Minor: note #23 (9:14, *metsodim*).** The note says the word "elsewhere means nets or snares" but leaves out the nearest and most striking case: the same plural *metsodim* in 7:26 ("whose heart is a net"). Add 7:26 to the body and `r`. The echo of the trapping woman, the trapped fish and the trapped town is worth a sentence.

**19. Minor: note #41 (10:14), "The Greek adds a phrase".** The Greek does not add. It reads τί τὸ γενόμενον καὶ τί τὸ ἐσόμενον ("what has been and what will be") for the MT's *mah-sheyyihyeh va'asher yihyeh me'acharav* ("what will be, and what will be after him"). That is, it takes the first verb as past (*shehayah*). Jerome agrees ("quid ante se fuerit"). Correct the note. Consider a short variant entry, since the reading changes the sense.

**20. Minor: variants.json 10:1, witness list.** The Greek reading is credited to "Greek (Rahlfs' edition; Codex Vaticanus agrees)". Rahlfs reads τίμιον ὀλίγον σοφίας ("a little wisdom is precious"). Vaticanus (Swete) reads τίμιον ὁ λόγος σοφίας ("a word of wisdom is precious"). Vaticanus does not agree in detail. Either drop "Codex Vaticanus agrees" or name its wording.

**21. Minor: variants.json 12:10, reading 1 mixes two things.** One reading lumps the Syriac/Vulgate "and he wrote" (*vekhatav*, which the `orig` shows) with "a common modern correction (likhtov)", a different form (וְלִכְתֹּב, "and to write"). Split the emendation into its own reading, or say in the `w` that the `orig` is the Syriac and Latin retroversion only.

**22. Minor: note #48 (10:20), Herodotus citation.** Herodotus 1.114 is the story of the boy Cyrus playing king and naming a playmate the "King's Eye". It shows that the office existed. It is not about Cyrus rewarding informers, which is Xenophon, *Cyropaedia* 8.2.10–12. Split the sentence so that each citation supports its own claim.

**23. Minor: chapters.json ch. 12, wording that contradicts the Plain or the notes.**
- `sum`: "desire fails" is the KJV/rabbinic reading. The Plain has "the caper berry fails". "The silver cord snaps": the Plain has "is torn". Use the Plain's images.
- setting 12:9–14 `why`: "sums up the duty of every human being". Note #85 (kind `mis`) says "duty" is a KJV addition. Use "the whole of being human".

**24. Minor: topics.json `ecclesiastes`, "Qohelet's last words repeat his first: 'Everything is vapor' (Ecclesiastes 12:8)".** Note #74 and the 12:1–8 setting say 12:8 is spoken by the frame narrator ("says Qohelet"). Write "The motto of 1:2 returns: …".

**25. Minor: chapters.json ch. 9 setting 9:7–10 `readers`, Jerome.** "Jerome wrote his commentary for a circle of Roman women devoted to the ascetic life" is loose. Per his preface, he read Ecclesiastes with Blaesilla in Rome to urge contempt of the world, and wrote the commentary in Bethlehem (388/389) at the request of Paula and Eustochium. The brief asks for Jerome's Blaesilla by name under `readers`.

**26. Minor: plain.txt 9:14 and 9:16, near-NIV/ESV phrasing.** At 9:14, "A great king came to it, encircled it and raised great siege works against it" keeps NIV's three-verb line ("came against it, surrounded it and built huge siege works against it"). The Hebrew series is real, but the shape could be varied. At 9:16, "And I said to myself" adds "to myself" (the Hebrew is the emphatic *va'amarti ani*, "So I said"), and "Wisdom is better than might" is ESV's exact wording. "Strength" for *gevurah* would break the match. Low priority.

**27. Minor: plain.txt 10:14, "who can tell him?"** *Mi yaggid lo* is "who will tell him". "Can" is ESV's choice. See also cross-part item F.

**28. Minor: glosses.json.** The 12:13 gloss "Fear God" → "stand in awe of God" softens the word, which in Qohelet includes being afraid (8:12 "who are afraid in his presence"). Prefer "take God seriously, with awe and fear". The 11:1 gloss ("take the risk, give freely") chooses two of the three readings the note sets out. Make it neutral, e.g. "let your bread go out on the water, and let it go".

**29. Minor: chapters.json ch. 9 `topics`.** The traditions card is about prayer for the dead and the intercession of saints, and the topic `communion-of-saints` exists. Add it to ch. 9 `topics`. Optionally add a short topics.json section there, so that the card is found from that page too.

## Cross-part items (for the lead)

**A. 12:8 and 1:2 punctuation.** 1:2: `"Vapor of vapors," says Qohelet, "vapor of vapors! Everything is vapor."` 12:8: `"Vapor of vapors," says Qohelet. "Everything is vapor."` The Hebrew structure is the same (*havel havalim 'amar [ha]qohelet … hakkol havel*), so the frame should look the same. Suggest 12:8: `"Vapor of vapors," says Qohelet, "everything is vapor."` (or capitalize as in 1:2 after "!").

**B. book.json quotes 12:9 as "taught the people knowledge".** The 09-12 Plain is "he kept on teaching knowledge to the people". Align one or the other (progress.md already lists this).

**C. 05-08 quotes 9:9 as "with the woman you love"** (notes[141] at 7:26, and ch. 7). The Plain is "with a woman you love" (both build warnings). 05-08 also quotes 11:7 as "Those who see the sun". The Plain is "seeing the sun is good for the eyes". Note #15 here defends "a woman" (no article), so 05-08 should change.

**D. *cheshbon*.** 7:25 and 7:27 (05-08) have "a sum / the sum". 9:10 has "reckoning". Note #18 here says "the same word is rendered 'reckoning'". Decide one term or add a terms.json entry permitting both by context. If 05-08 changes, note #18 must be updated, since it quotes 7:25 and 7:27.

**E. *yiqreh 'et-kullam*.** 2:14 has "one fate meets every one of them". 9:11 has "time and chance meet them all". The verb phrase is the same. Align the object ("them all" / "every one of them").

**F. 6:12 and 10:14.** 6:12: "Who will tell a human being what is going to be after him". 10:14: "what will come after him, who can tell him?" (*mah yihyeh acharav / mi yaggid lo* in both). 3:22 has "what will come after him". Pick one wording for *yihyeh acharav* and one for *mi yaggid* ("who will tell").

**G. Build gap: note on the same anchor as a variant.** STYLE says the build errors on this. `overlapCheck` in tools/build.js only errors for two items of the *same* kind (`a._k === b._k && a._k !== 'note'`). Cases now in the book: 01-04 2:25 ("apart from me"); 05-08 5:1 (two) and 7:27 ("says Qohelet"); 09-12 10:1, 11:9, 11:10, 12:6. Fix the check, then the content.

**H. ka'as.** terms.json allows 7:3 "grief" and 7:9 "anger". Note #60 here quotes those renderings, so it must change if 05-08 changes them.

**I. *ha'adam*.** Across the parts: "a person", "a human being", "human beings", "a man" (11:8 here). terms.json says "a person, people or humans by context". Decide whether "a man" is ever allowed.

**J. The 9:5 / 3:19–21 / 12:7 traditions material.** The ch. 3 card (01-04) carries the main state-of-the-dead question, with 12:7. This part's 9:5–6 card asks the narrower prayer question, and note #73 at 12:7 repeats the Adventist/JW versus Catholic/Westminster split. Check that the ch. 3 card names Westminster 32.1 and the same SDA/JW sources, so that the three places do not drift apart.

## Fixes applied

Applied by a separate review-fixer agent, 2026-10-25, following the lead's cross-part decisions (.scratch/Ecc-review-notes.md). Every rebuilt verse started again from `literal.js`, with a fresh drift audit done in the head only.

1. Accepted. 11:5 rebuilt from the literal line in a new shape that keeps *ka-* visible and "womb" for *beten*: "You do not know which way the wind goes, and it is the same with the bones in the womb of a pregnant woman. So too you do not know what God does, the God who makes everything." Note #53 rewritten to match (it no longer quotes the old wording, and it now explains "it is the same with" for "like"); the providence topic section no longer quotes "how bones take shape". I kept "what God does, the God who makes everything" rather than the reviewer's sample "Just so, you do not know the work of God, who makes everything", which runs with a modern version for nine words.
2. Accepted. New variant at 11:5 (anchored on the whole first sentence; note #53 nests inside it): reading 0 Leningrad *ka'atsamim* with the Greek (ὡς ὀστᾶ ἐν γαστρί, Rahlfs and Swete checked), followed; reading 1 *ba'atsamim* from a number of medieval Hebrew manuscripts, with the one-picture Plain, the Targum's paraphrase described as reading it the same way. `b` notes that Jerome's Latin keeps two pictures but supplies a verb ("how the bones are joined").
3. Accepted. 10:10 rebuilt: "If the iron is blunt / and he has not whetted its face, / he will have to put more muscle into it; / but wisdom's gain is that it brings success." The yitron line is kept (it is a variant anchor). Note #38 re-anchored on "If the iron is blunt" and says the Plain keeps "face".
4. Accepted. 10:4 rebuilt so that one English verb carries *tannach* / *yanniach*: "do not let go of your place, / for calm lets great wrongs go." Note #34 rewritten to explain the wordplay as the Plain now shows it; the gloss moved to "do not let go of your place".
5. Accepted (checked against the Talmud's text: the 4:2 / 9:4 question to Rav Tanhum is in Shabbat 30a; the withdrawal passage in 30b cites 7:3 and 8:15 against 2:2). Note #7 corrected, and its `r` adds Psalm 115:17, 2:2, 7:3, 8:15. The chapter 9 J lens narrowed to "Bavli Shabbat 30a".
6. Accepted (lead decision 13). Note #30 moved to "weighs more", #58 to "Walk on", #60 to "black hair" (sharing the gloss's anchor, which the rules allow), #71 to "the bowl of gold". A script check confirms no note in the part now shares a variant's exact anchor. The new 10:14 variant also took note #41's old anchor, so #41 moved to "Yet the fool piles up words."
7. Accepted. 12:3 now has "and the women who look out through the lattice windows grow dark". I kept "grow dark" for *chashekhu* rather than "grow dim". The chapter 12 summary now says "the watchers at the windows grow dark".
8. Accepted. Lutheran answer extended: the Apology (art. 24, answering the appeal to the Fathers) does not forbid prayer for the dead while rejecting the Mass for the dead, and Lutheran practice varies. The unsourced interpretive sentence was removed from the Catholic answer (note #8 already gives that reading). The question was trimmed to "Do the departed pray for the living, and may the living pray for them or ask the saints to pray?", with the pointer to the chapter 3 card kept.
9. Accepted. Note #6 now quotes 2 Kings 18:19 exactly ("What is this trust of yours that you trust in?") and says the noun is rendered "trust" there. Note #53 quotes John 3:8's Plain ("The wind blows where it wants to") and paraphrases "born from the Spirit" without quotation marks; the chapter 11 X lens only cites John 3:8 and does not quote it. Note #22 quotes 7:17 ("when it is not your time") and Job 22:16 ("were seized when it was not yet their time") exactly, and its preview no longer quotes. Note #56 quotes 6:5 exactly ("It has never even seen the sun").
10. Accepted. Note #1 now opens with *ha'elohim*, "the God", and says that Ecclesiastes never uses YHWH.
11. Accepted. Note #16 adds "smoke", with Isaiah 57:13 and Psalm 144:4, and its preview names smoke.
12. Partly accepted. Note #62 corrected: *yaldut* is "while you are young" (11:9) and "boyhood" (11:10). I did not force one rendering, because "be glad in your youth" would bring back the familiar English line. Note #60 now says why *ra'ah* is "trouble" at 11:10 (harm to the body) and "evil" at 11:2 and 12:1.
13. Accepted (lead decision 5). 11:8: "If a person lives a great many years".
14. Accepted. 9:5: "since their memory is forgotten". I did not use the reviewer's "since the memory of them is forgotten", which matches a modern version word for word. No other book quotes the clause.
15. Accepted. 9:11: "or favor to those who know". ("The learned" is a modern version's choice, so I avoided it.) Note #20 changed "skill" to "knowledge".
16. Accepted, option 1. 10:3 now follows reading 1 in the text: "and he tells everyone he is a fool." Note #33 re-anchored and rewritten: it says the Plain follows Rashi, Ibn Ezra and most versions, and it gives the Vulgate reading and the Greek; it no longer claims that the text keeps both open.
17. Accepted. Note #9: the two words have the same last two consonants in the same order (ś-k-r, z-k-r); only the first differs.
18. Accepted. Note #23 adds the same plural *metsodim* at 7:26, quoting its current Plain ("whose heart is a net"), and adds a sentence on the trapping woman, the trapped fish and birds, and the trapped town. 7:26 added to `r`.
19. Accepted, with the variant. Note #41 corrected: the Greek reads "what has been and what will be" (τί τὸ γενόμενον καὶ τί τὸ ἐσόμενον, Rahlfs and Swete checked), as if the first verb were past, and Jerome has the past too. New variant at 10:14 ("No one knows what is going to happen"): MT followed; Greek; Vulgate.
20. Accepted. The 10:1 Greek witness now says that Vaticanus has the same sense but reads τίμιον ὁ λόγος σοφίας, "a word of wisdom" (checked in Swete). `swete-lxx` added to `s`.
21. Accepted. The 12:10 variant is split into three readings: MT with the Greek; Syriac and Vulgate "and he wrote", whose `w` says the Hebrew shown is what those versions imply; and the modern correction *velikhtov*, "and to write", given its own Hebrew and Plain. `why` updated.
22. Accepted. Note #48 now cites Herodotus 1.114 for the office (the boy Cyrus naming a "King's Eye") and Xenophon, *Cyropaedia* 8.2.10–12, for Cyrus rewarding informers.
23. Accepted. The chapter 12 summary now uses the Plain's images: "the caper berry fails", "the silver cord is torn and the golden bowl is crushed". It no longer quotes "desire fails" or "snaps", and it has the 12:8 motto as the narrator's. The 12:9–14 setting `why` now reads "names the whole of being human".
24. Accepted. topics.json (ecclesiastes) now says "Then the motto of Ecclesiastes 1:2 returns: "everything is vapor" (Ecclesiastes 12:8)".
25. Accepted. The 9:7–10 `readers` now names Blaesilla: Jerome read the book with her in Rome to urge contempt of the world, and after her death he wrote the commentary in Bethlehem (388/389) for Paula and Eustochium.
26. Accepted. 9:14: "A great king came to it. He ringed it in and piled up great siege works against it." 9:16: "For my part I said, 'Wisdom is better than power.'" (no "to myself"; *gevurah* is "power"). The chapter 9 summary changed to match. A note on my choice: the reviewer's "strength" would have matched the other modern version word for word, so I used "power".
27. Declined, by lead decision 7: "who can tell him" is the site's chosen wording for *mi yaggid lo* (6:12, 8:7, 10:14), so 10:14 stands.
28. Accepted. The 12:13 gloss now reads "take God seriously, with awe and fear", and the 11:1 gloss is the neutral "send your bread off on the water and let it go".
29. Accepted. `communion-of-saints` added to the chapter 9 topics, with a short topics.json section on 9:5–6 that points to the card.

Cross-part items, as the lead decided them: A applied (12:8 now reads `"Vapor of vapors," says Qohelet, "everything is vapor."`). B is for the 01-04 fixer (book.json). C is for the 05-08 fixer. D: note #18 now says *cheshbon* is "reckoning" in all three places and paraphrases 7:25 and 7:27 without quotation marks. E and F: lead decisions 3 and 7 (10:14 unchanged). G is for the lead (build.js). H: note #60 keeps the terms.json renderings ("grief" at 7:3). I: 11:8 changed. J: note #73 at 12:7 no longer repeats the Adventist/JW versus Catholic/Westminster split. It points to the chapter 3 card, and its sources were trimmed. Lead decision 12: 12:13's note is tagged `fear-of-the-lord`, chapter 12 lists the topic, and the "Fear God" topic section moved from `wisdom` to a `fear-of-the-lord` contribution. Lead decision 14: 14 bare references inside another book's brackets now carry the book name.
