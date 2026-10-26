# Hostile review: Ecclesiastes 5–8 (part 05-08)

Reviewer: hostile-reviewer agent, 2026-10-25. This replaces the partial review cut off by the usage limit.

## Verdict

This is a strong part. The translation keeps close to the Leningrad text. The hard places the brief names (5:1–7, 7:16, 7:20, 7:26–29) are covered fairly, and the reading that Qohelet quotes a view in order to reject it is given in full. I checked these claims and found them right: the Rashi, Ecclesiastes Rabbah and Talmud attributions (Rashi on 5:5, 7:26–28 and 8:2; Ecclesiastes Rabbah 7:28; Nedarim 9a, Yoma 22b, Gittin 56b, Bava Batra 10a); the Herodotus passages; the Intef song; and the bibliography. I also re-ran tools/dss.py, and the Qumran readings hold: at 5:17, 4QQoh-a has no "he eats" and reads ka'as without "and", and at 7:19 it reads "helps". I found no invented source, reading or fragment. The problems are smaller but real:
- Two places in the Plain match the ESV word for word in an interpretive choice (5:1 and 8:1).
- One verse turns "perishes" into the churchy "lost" (7:15).
- The KJV is credited with the wrong reading in the 5:1 note.
- The count of the "joy" passages is wrong, and wrong in different ways, in three places.
- About ten references sit bare inside another book's brackets, so they link to Ecclesiastes verses that are wrong or do not exist. The build does not catch these.
- The known 9:9 quote warning is still open.
- There are a few softer fairness and sourcing points.

`VERBOSE=1 node tools/build.js --check Ecc/05-08`: 0 errors, 2 warnings, both the 9:9 quote (notes[65] at 7:26 and the chapter 7 page).

Counts: critical 0, major 8, minor 20 (plus 9 cross-part items for the lead).

## Findings

### 1. Major: plain.txt 5:1, the last clause copies the ESV
"for they do not know that they are doing evil" is the ESV's clause word for word, ten words long. The Hebrew does not force it: כִּי־אֵינָם יוֹדְעִים לַעֲשׂוֹת רָע is literally "for they do not know to do evil". The note at 5:1 itself sets out three readings. "That they are doing" is the interpretive supply both NIV and ESV make, and the ESV's exact wording is a drift hit under the brief.
**Fix:** rebuild from the literal line with a different shape, for example "for they do not even know they do evil" or "they do not know it, but they are doing evil". Keep the note's three readings. Move the note anchor (notes[3]) to the new wording.

### 2. Major: plain.txt 8:1, "and the hardness of his face is changed" is the ESV verbatim
These seven words are the ESV's, and "hardness" is the ESV's choice for עֹז, which is literally "strength" (the literal line has "[the] strength of | face his"). The KJV has "boldness".
**Fix:** for example "and the sternness of his face gives way", or "and his hard look is changed into something else". Update the variant at 8:1 to match (its readings[0].plain is the anchor), and the gloss on the same anchor.

### 3. Major: plain.txt 7:15, "a righteous man who is lost in his righteousness"
אֹבֵד is "perishes, dies". In American church English "lost" means "unsaved", and elsewhere it can mean "absorbed in". Neither is the sense: the contrast is with the wicked man who "lasts a long time". The note at 7:15 (notes[54]) shows the writer means perishing. Avoiding the ESV's "perishes" is not a reason to weaken the meaning.
**Fix:** "There is a righteous man who dies in his righteousness" or "who comes to ruin in his righteousness". Update the notes[54] anchor and the retribution topic wording ("a righteous man lost in his righteousness").

### 4. Major: notes[3] at 5:1 credits the KJV with the wrong reading
The note gives reading (2), the ironic "they know nothing except doing evil", "as the KJV does with 'they consider not that they do evil'". But the KJV's "they consider not that they do evil" is reading (1), the same as the Plain: they sin without noticing. Reading (2) is a different supply; it is the line of the Targum and of some medieval readers, and Fox discusses it.
**Fix:** move the KJV to reading (1). For reading (2), name a holder you can verify, or drop the attribution.

### 5. Major: the count of the "calls to enjoy" is wrong and inconsistent
- notes[26] (5:18) says it is "The second of seven passages", then lists seven: 2:24–26; 3:12–13; 3:22; 5:18–20; 8:15; 9:7–10; 11:7–10. On that list 5:18 is the fourth.
- chapters.json ch. 5, readings[2] ("Read as the call to joy") also says "the second".
- notes[86] (8:15) says "the fourth of the book's calls"; on the same list it is the fifth.

Whybray's seven are 2:24a; 3:12; 3:22a; 5:17 (Hebrew, English 5:18); 8:15a; 9:7–9a; 11:7–12:1a.
**Fix:** 5:18 "the fourth", 8:15 "the fifth", in all three places.

### 6. Major: bare references inside another book's brackets link to the wrong Ecclesiastes verse
A bare c:v always means the current book (STYLE.md; agent-writer "References"). These all link to wrong or nonexistent verses of Ecclesiastes, and `--check` does not warn about any of them:
- notes[14] (5:8): "(Ezra 2:1; Nehemiah 1:3; 7:6)". 7:6 becomes Ecclesiastes 7:6. Write "Nehemiah 7:6".
- notes[39] (6:10): "(Genesis 1:5; 2:19–20; Isaiah 40:26)". Write "Genesis 2:19–20".
- notes[51] (7:12): "(Proverbs 3:18; 8:35)". Write "Proverbs 8:35".
- notes[65] (7:26): "(Proverbs 7:23; 22:14)". Write "Proverbs 22:14".
- notes[70] (8:1): "(Daniel 2:4–7; 4:18; 5:15–16)". Write "Daniel 4:18; Daniel 5:15–16".
- notes[77] (8:8): "(Proverbs 27:16; 30:4)". Write "Proverbs 30:4".
- notes[82] (8:11): "(Ezra 4:17; 5:7; Daniel 3:16; 4:17)". Write "Ezra 5:7" and "Daniel 4:17".
- chapters.json ch. 8, deep "Obeying the king": "(Proverbs 16:14; 20:2; 24:21)". Write "Proverbs 20:2; Proverbs 24:21".
- notes[14] r: "Esther 1:1; 2:8; 4:1". The last two parse as Ecclesiastes 2:8 and 4:1. If Esther was meant, the relevant verses are Esther 1:22, 2:3, 3:12–13 and 4:3 (provinces). If Ecclesiastes 2:8 ("provinces") was meant, it is fine, but put it after the other books' references so it does not read as Esther.

The checker gap is in the cross-part items below.

### 7. Major: the 9:9 quote does not match part 09-12's Plain (the known build warning)
notes[65] (7:26) and the chapter 7 deep section "The woman more bitter than death" quote "with the woman you love" (9:9). Part 09-12's Plain reads "See life with a woman you love". This is the only cause of the part's two warnings, and the book cannot be 0/0 until it is fixed.
**Fix:** quote "life with a woman you love" (9:9) in both places. Note that the article also matters to the argument: 9:9 has no article (אִשָּׁה), while 7:26 has "the woman" (הָאִשָּׁה). The deep section's point about the article is stronger if it says so.

### 8. Major: Orthodox view in the chapter 7 traditions card (7:20)
"no one but Christ is called sinless" does not give the Orthodox position fairly. Orthodox liturgy calls the Theotokos "all-holy" and "spotless" (Panagia, achrantos), and most Orthodox teachers hold that she committed no personal sin, though they reject the Catholic dogma of the Immaculate Conception. The funeral service line "there is no one who lives and does not sin; you alone are without sin" is the right source for the Christ-only phrasing, but say that it is a liturgical text and name the Theotokos exception.
**Fix:** for example: "...the Church prays daily for forgiveness, and its funeral service says that God alone is without sin. Orthodox teachers commonly hold that the Theotokos was kept free of personal sin, without accepting the Catholic doctrine of the Immaculate Conception." Keep ware-orthodox, or add a better source.

### 9. Minor: plain.txt 5:4 should match the Deuteronomy 23:21 Plain it reproduces
notes[6] says Qohelet "takes over the wording" of Deuteronomy 23:21. The Hebrew is almost identical (כַּאֲשֶׁר תִּדֹּר נֶדֶר לֵאלֹהִים אַל־תְּאַחֵר לְשַׁלְּמוֹ against Deuteronomy's כִּי־תִדֹּר נֶדֶר ... לֹא תְאַחֵר לְשַׁלְּמוֹ). Yet the Plain has "When you vow something to God" where Deuteronomy's Plain has "When you make a vow to the LORD your God". The brief says the earlier verse is the model when the Hebrew repeats, and the reader should see the borrowing.
**Fix:** "When you make a vow to God, do not be slow to pay it." The overlap with the NIV here is forced by the Hebrew and by alignment; say so in the drift log.

### 10. Minor: plain.txt 6:2, "His appetite goes without nothing it craves"
This is a double negative and reads as nonstandard English.
**Fix:** "His appetite lacks nothing of all it craves". Keep the "His appetite" anchor for notes[31].

### 11. Minor: plain.txt 6:10, "Whatever has been already had its name called long ago"
Hebrew כְּבָר is rendered twice, as "already" and as "long ago".
**Fix:** "Whatever has been was named long ago" or "Whatever has been has already had its name called".

### 12. Minor: plain.txt 5:18 is one sentence of about 50 words
STYLE.md asks for sentences mostly under 20 words. Split it, for example: "...is good and beautiful. A person should eat and drink and see good in all his toil that he toils at under the sun, through the numbered days of his life that God has given him. For that is his share." Keep the 3:13 wording "eat and drink and see good in all his toil".

### 13. Minor: plain.txt 6:4 drops the opening כִּי
"It came in vapor" leaves out "For", which ties the stillborn's fate to the verdict of 6:3. Restore "For it came in vapor...".

### 14. Minor: plain.txt 8:3, "Do not stand firm in a bad cause"
"a bad cause" is the NIV's interpretive noun for דָּבָר רָע (the NIV has "stand up for a bad cause"). notes[74] itself gives "matter" and "plot" as readings.
**Fix:** "Do not dig in over a bad matter" or "Do not hold your ground in an evil matter", and update the notes[74] anchor.

### 15. Minor: plain.txt 8:15 matches the ESV for 12 words
"through the days of his life that God has given him under the sun" is the ESV's run. The Hebrew forces nearly all of it (יְמֵי חַיָּיו אֲשֶׁר־נָתַן־לוֹ הָאֱלֹהִים תַּחַת הַשָּׁמֶשׁ), but "through" is supplied.
**Fix:** "all the days of his life..." or "in the days of his life...", or log the overlap as Hebrew-forced. See also cross-part item C.

### 16. Minor: notes[11] (5:6) misquotes Leviticus 5:4
It says the law covers a person who "speaks rashly with his lips". The Leviticus Plain reads "speaking rashly with his lips".
**Fix:** quote it exactly ("speaking rashly with his lips", Leviticus 5:4), or remove the quotation marks.

### 17. Minor: notes[66] (7:26) preview misdescribes Bava Batra 10a
The preview says "Death is the bitterest thing the rabbis could name". Bava Batra 10a lists ten hard or strong things, each overcome by the next, with death the strongest ("severest", as Rashi cites it). It is not a list of bitter things.
**Fix:** "The Talmud names death the hardest of ten hard things (Bava Batra 10a); Rashi cites it here."

### 18. Minor: notes[45] (7:3) on Shabbat 30b needs one more clause
The Talmud's contradiction with 2:2 works only because it reads מְהֻלָּל as "praiseworthy" ("of laughter I said, it is praiseworthy"). Part 01-04's Plain of 2:2 says "It is madness", so a reader sees no contradiction. Also, the Talmud's resolution speaks of God's anger (ka'as) toward the righteous in this world, not "grief".
**Fix:** add "reading 2:2 as 'laughter is praiseworthy'" and change "grief" to "anger".

### 19. Minor: notes[87] (8:15) gets the chronology wrong
The preview says "These words were later used by the rich fool of Jesus' parable and by Isaiah's revelers". Isaiah 22:13 is earlier than Qohelet on every dating. The note should also say why the parable matters: the Greek of 8:15 (φαγεῖν καὶ πιεῖν καὶ εὐφρανθῆναι) uses the same three verbs as Luke 12:19 (φάγε, πίε, εὐφραίνου).
**Fix:** "Isaiah's revelers said something like it before, and the rich fool of Jesus' parable says it in the same Greek words." Add the Greek.

### 20. Minor: notes[60] (7:20) overstates the scholarship
"many scholars think Paul has Ecclesiastes 7:20 in mind". The usual view traces Romans 3:10 to Psalm 14:1–3 (Psalm 13 in the Greek), and the Ecclesiastes link is a minority suggestion, though a reasonable one; the δίκαιος argument is correct.
**Fix:** "some scholars".

### 21. Minor: the 5:1–7 summaries state a debated reading as fact
chapters.json ch. 5 sum[0] ("do not tell the Temple's messenger it was a mistake") and the vows topic section ("do not tell the Temple's messenger") present the identity of הַמַּלְאָךְ as settled. notes[10] gives three views (Temple official, angel, God) and the variant shows the Greek and Syriac read "God".
**Fix:** "the messenger" in both places.

### 22. Minor: settings state debated audiences as settled
- Ch. 5, setting 5:1–7, `to`: "the students and men of means for whom the book was written".
- Ch. 8, setting 8:1–9, `to`: "young men who served or hoped to serve at court".

Both are scholarly proposals (Seow argues for a well-off audience; the courtier setting is common, not settled). The brief asks that debated audiences be given as views.
**Fix:** add "probably" or "most scholars think", or add a short `views` pair to the 5:1–7 card (the 8:1–9 card already has views, but they are about God as king, not about the audience).

### 23. Minor: the Lutheran view in the chapter 7 traditions card is sourced to the Apology
"simul iustus et peccator" is Luther's formula (Lectures on Romans, 1515–16; Galatians, 1535). The Apology of the Augsburg Confession teaches that sin remains in the baptized (Article II) but does not use the phrase.
**Fix:** "as Luther put it", and cite the Apology (II) or Formula of Concord SD VI for the teaching, or add a Luther source key.

### 24. Minor: chapters.json ch. 8, views.W, "the Aramaic Ahiqar"
content/works.json names this work "Story of Ahiqar" (aka "Words of Ahiqar"). The bare "Ahiqar" may not be marked with its tier ("Ahikar#" matches only before a chapter number).
**Fix:** "the Aramaic Words of Ahiqar".

### 25. Minor: chapters.json ch. 6, views.W, garbled sentence
"Qohelet uses it to measure, not to praise, death" has no clear antecedent for "it", and the sentence says the opposite of the point.
**Fix:** "Qohelet uses the thought as a measure, not as praise of death: what makes a life worth living is the ability to enjoy good."

### 26. Minor: notes[47] (7:7) cites a partly restored scroll word
In the Abegg, Bowley and Cook transcription the 4QQoh-a word ויעוה is in brackets, so it is wholly or partly restored (tools/dss.py: never cite a restored word as the scroll's reading). The note's "damaged; the editors read" is nearly right.
**Fix:** "only partly preserved; the editors restore it as wy'wh, 'and twists'". Keep djd16 as the source for the editors' reading, but see cross-part item F on that key.

### 27. Minor: notes[5] (5:3) may misplace the Targum's false prophets
The note says "The Targum takes the dreams as the dreams of false prophets". As far as I can tell, the Targum's dreams of false prophets and sorcery come in Hebrew 5:6 (English 5:7), which notes[13] also describes.
**Fix:** check in Ginsburg's English or the Aramaic. If the Targum does not say it at 5:3, move the sentence to the 5:7 note.

### 28. Minor: missing variant at 8:12
MT מְאַת, an odd spelling for מֵאָה "a hundred", has long been discussed. The Greek has ἀπὸ τότε, reading מֵאָז "from then", and the KJV and modern versions have "a hundred times". It is worth a short variant or a sentence in a note, since the "hundred" is the point of the verse.

## Cross-part items

For the lead to decide:

A. **9:9 quote**: finding 7. Part 05-08 should change its two quotes to part 09-12's "life with a woman you love". Part 09-12's wording stands.

B. **11:7 and 12:13 quotes** in this part match part 09-12 ("light is sweet", "fear God and keep his commands"); no change needed. Quotes of 1:15, 1:16, 2:2, 2:23, 3:1, 3:11, 3:17 and 3:20 also match part 01-04.

C. **The joy refrain at 8:15**: terms.json lists 8:15 in the refrain set of 2:24 ("later forms keep the same words where the Hebrew is the same"). 8:15 has אֵין־טוֹב לָאָדָם ... כִּי אִם־לֶאֱכוֹל וְלִשְׁתּוֹת וְלִשְׂמוֹחַ; 2:24 has "There is nothing good for a person but to eat and drink...". The Plain of 8:15, "a human being has nothing good under the sun except to eat and drink and be glad", changes the frame. Suggested: "There is nothing good for a person under the sun but to eat and drink and be glad."

D. **"Who can tell him what will be after him"**: 3:22 (01-04), 6:12 and 8:7 (05-08) and 10:14 (09-12) render near-identical Hebrew (מִי יַגִּיד לוֹ / לָאָדָם מַה־יִּהְיֶה אַחֲרָיו) in four different ways: "what will come after him", "what is going to be after him", "how it will come", "what will come after him, who can tell him". notes[41] cites them as the same question. Decide one form for 6:12 and 10:14 at least.

E. **mah-shehayah, "what has been"**: 1:9 and 6:10 have "Whatever has been"; 7:24 has "What has been"; 3:15 (01-04) has "What is". notes[63] tells the reader that 7:24 is "the same phrase as in 1:9 and 3:15". Align, and if 3:15 stays "What is", add a note there.

F. **The djd16 source key** reads "...Discoveries in the Judaean Desert 16 (2000): 4QProv-a (4Q102) and 4QProv-b (4Q103)", which is Proverbs-specific. Part 05-08 cites it for 4QQoh-a (4Q109), which is in the same volume. Make the shared citation general (the volume title only) or add a `djd16-qoh` key.

G. **cheshbon**: 7:25 and 7:27 have "sum"; 9:10 (09-12) has "reckoning". notes[64] points the reader to 9:10 as the same word. Either align or have the 9:10 note mention it.

H. **Checker gap**: `--check` did not warn about any of the bare references in finding 6 ("(Proverbs 7:23; 22:14)", "(Daniel 2:4–7; 4:18; 5:15–16)" and so on), although the writer brief says the build warns about them. Look at the regex in tools/build.js; other books likely have the same problem.

I. **No fear-of-the-lord topic**: the brief lists `fear-of-the-lord` as an existing topic, but no such core exists in content/topics/ or the proposals. This part's "fear God" notes (5:7 notes[13], 7:18, 8:12–13) carry no `top`. Decide whether to create the core (Proverbs, Job, Ecclesiastes 12:13 would all feed it) or to tag these notes `wisdom`.

## Fixes applied

Applied 2026-10-25 by the review-fixer for 05-08, with the lead's cross-part decisions (.scratch/Ecc-review-notes.md). `VERBOSE=1 node tools/build.js --check Ecc/05-08`: 0 errors, 0 warnings.

1. Accepted. 5:1 rebuilt from the literal line: "for they do not know it when they do evil." notes[3] anchor moved; its three readings kept.
2. Accepted. 8:1 now "and the stern look on his face is changed". The variant at 8:1 (readings[0].plain and anchor), the gloss and the notes[71] preview were updated to match; the note says "strength of face" is the literal Hebrew.
3. Accepted. 7:15 now "a righteous man who dies in his righteousness" ('oved, "perishes, dies"). I avoided "perishes" because "There is a righteous man who perishes in his righteousness" would match the ESV. The notes[54] anchor and title and the retribution topic section were updated, and the note now explains the verb.
4. Accepted. In notes[3] the KJV now goes with reading (1). Reading (2) has no named holder. I checked the Targum (Aramaic text and Ginsburg's English), which actually expands to "they know not whether they do good or evil", and the note now quotes it as its own expansion.
5. Accepted. 5:18 is "the fourth" of the joy passages in notes[26] and in chapter 5 readings[2], and 8:15 is "the fifth" in notes[86].
6. Accepted. The book name is now on every reference the reviewer listed (notes[14], [39], [51], [65], [70], [77], [82] and the chapter 8 "Obeying the king" section). notes[14] r now reads "2:8; 4:1; Ezra 2:1; ... Esther 1:1; Esther 1:22", with Ecclesiastes 2:8 and 4:1 placed first. A script check then found 12 more `r`/`echoes` lists where this book's own references came after another book's. Under the lead's item 14 those link to the other book, so I moved this book's references to the front in all of them.
7. Accepted (lead item 1). notes[65] and the chapter 7 deep section now quote "life with a woman you love" (9:9). Both also say that 9:9 has no article and 7:26 has "the woman".
8. Accepted. The Orthodox view in the chapter 7 card now names the funeral service as a liturgical text, says God alone is without sin, and states the Theotokos exception without the Immaculate Conception. Source kept as ware-orthodox.
9. Accepted. 5:4 now "When you make a vow to God, do not be slow to pay it", matching the Deuteronomy 23:21 Plain. The NIV overlap is forced by the Hebrew and by that alignment, and is logged in the drift log. The notes[6] anchor and the vows topic were updated.
10. Accepted. 6:2 now "His appetite lacks nothing of all it craves."
11. Accepted. 6:10 now "Whatever has been was given its name long ago." This keeps "Whatever has been" (lead item 8) and renders kevar once.
12. Accepted. 5:18 is split into three sentences, "through the numbered days" is kept (lead item 6), and the 3:13 wording "eat and drink and see good in all his toil" is kept. The opening was also re-shaped ("what I myself have seen as good and beautiful") to break a 7-word ESV run. The notes[26] anchor moved.
13. Accepted. 6:4 now begins "For it came in vapor".
14. Accepted. 8:3 now "Do not dig in over a bad matter". The notes[74] anchor and the chapter 8 summary were updated. I did not use "take your stand in", which is the ESV.
15. Accepted with lead item 4. 8:15 now reads "So I spoke in praise of joy. There is nothing good for a person under the sun except to eat and drink and be glad. That will keep him company in his toil for the days of his life that God has given him under the sun." The supplied "through" is gone. The rest is Hebrew-forced (logged).
16. Accepted. notes[11] now quotes "speaking rashly with his lips" (Leviticus 5:4) exactly.
17. Accepted. In notes[66], Bava Batra 10a is now "ten hard things, each overcome by the next, with death the hardest" (preview and body).
18. Accepted. notes[45] now says the Talmud reads 2:2 as "of laughter I said, it is praiseworthy" (mehulal), and the resolution speaks of God's anger (ka'as), not grief.
19. Accepted. The notes[87] preview now has the right chronology. The body gives the Greek of 8:15 (phagein kai piein kai euphranthenai) beside Luke 12:19 (phage, pie, euphrainou), which I checked in Rahlfs; orig was added.
20. Accepted. notes[60] now says "some scholars".
21. Accepted. The chapter 5 summary and the vows topic now say "the messenger".
22. Accepted. The 5:1–7 setting now says "probably ... many scholars think", with a new views pair (readers of some means, after Seow; students of the wise). The 8:1–9 setting now says "probably ... a common view, not a settled one", with an added view on who the hearers were.
23. Accepted. The Lutheran view now says "As Luther put it" (Lectures on Galatians, 1535) and gives the teaching from Apology II, with the keys luther-galatians-1535 and apology-augsburg.
24. Accepted. Chapter 8 views.W now says "the Aramaic Words of Ahiqar".
25. Accepted. The sentence in chapter 6 views.W is rewritten as the reviewer suggested.
26. Accepted. tools/dss.py shows both [יהולל] and [ויעוה] in brackets. notes[47] now says the verb is "only partly preserved; the editors restore it as wy'wh". djd16 is kept as the source.
27. Accepted after checking. The Targum's false prophets and sorcerers are at Hebrew 5:6 (English 5:7), not at 5:3. notes[5] now gives what the Targum says at 5:3, and notes[13] (5:7) now gives the false prophets and sorcerers.
28. Accepted. Added a variant at 8:12 on "a hundred times": MT me'at against the Greek ἀπὸ τότε (Rahlfs, and Swete/Vaticanus, both checked), which implies me'az. The Plain follows the MT.

Cross-part items. A: done (finding 7). B: no change needed. C: done (finding 15, lead 4). D: done under lead 7. 6:12 now reads "Who can tell a person what will come after him under the sun?" and its first clause also uses "a person". 8:7 already had "who can tell him". The notes[41] anchor moved. E: done under lead 8. 7:24 is "Whatever has been", and notes[63] now says exactly what is the same: the Hebrew mah-shehayah in 1:9, 3:15 and 6:10. F: done under lead 11. The global djd16 key in content/sources.json now names the volume with 4QProv-a, 4QProv-b, 4QQoh-a and 4QQoh-b, so every citing book keeps working. G: done under lead 9. 7:25 is now "wisdom and a reckoning" and 7:27 "adding one to one to find the reckoning". notes[64], the gloss and the chapter 7 spec box were updated, and 09-12 should quote these forms. H: for the lead (checker). I: done under lead 12. I created content/topics/fear-of-the-lord.json ("The fear of the LORD"; aka fear of God, fear God, fear of the Lord). I removed the alias "the fear of the LORD" from topics/wisdom.json, because the build errors on a duplicate name, and added fear-of-the-lord to its related list. notes[13] (5:7), [58] (7:18) and [83] (8:12) are tagged with it (notes[83] moved from retribution, which already covers 8:12–13 in its topic section), and a topic contribution was added. Lead 13: notes[0] and [2] at 5:1 are re-anchored inside their variants ("Keep watch", "Coming close to listen"), and notes[67] at 7:27 beside its variant ("See, this is what I have found"). Lead 5: 7:28 keeps "One man" for 'adam on purpose, because it stands against "a woman", and notes[68] explains this.
