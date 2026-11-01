# Hostile review: Proverbs 1–9 (content/books/Pro/parts/01-09/) and Pro/book.json

Reviewer brief: tools/agent-reviewer.md and tools/brief-pro.md (including Lead decisions). `node tools/build.js --check Pro/01-09` and `--check Pro` both report 0 errors, 0 warnings.

## Verdict

This is strong work. The Plain English Translation was rebuilt from the Hebrew, not from the familiar English. I drift-checked all 256 verses against the NIV and ESV (in my head) and found only four lines where the wording or word order follows a modern version more than the Hebrew requires. The key terms follow terms.json almost everywhere. The repeated lines inside the part are aligned (1:8b/6:20b, 2:1b/7:1b, 2:16/7:5, 3:3c/7:3b, 3:15b/8:11b, 4:4c/7:2a, 5:7/7:24/8:32, 9:4/9:16), and 6:10–11 and 6:15b already agree with 24:33–34 and 29:1b. The full-treatment places (1:7, 3:11–12, 3:34, 8:22–31, 9:10) are handled fairly and in depth. The strange-woman passages present the feminist critique and the reply side by side, and 8:22 gives the Jewish, Nicene and Jehovah's Witness readings their own voices. Nearly every fact the writer cited from memory checks out: Sanhedrin 38a, Sotah 21a, Bava Batra 15a, Shabbat 30b, Berakhot 5a, Avodah Zarah 17a, Yevamot 62b, Avot 3:14, 6:9 and 6:10, Uktsin 3:12, Song Rabbah 1:1, Avot de-Rabbi Natan 1 ("the men of Hezekiah" is right), Hammurabi 129, Cyprian Letter 63, Arius's letter, Nicaea's "begotten, not made", Melito/Eusebius, Trinity Sunday Year C, and Orthodox Vespers Proverbs 9:1–11 (confirmed for the Dormition, the Nativity of the Theotokos and the Protection). 4QProv-b does preserve 7:9 and 7:11, so the brief's "parts of 7" stands. The Greek pluses and minuses I can check (1:7, 1:16, 2:16–17, 3:4, 3:12, 3:15–16, 3:28, 3:34, 4:7, 4:27a–b, 5:2–3, 5:16, 6:8a–c, 6:11a, 6:24, 7:1a, 7:6, 7:19, 7:22, 8:5–6, 8:21a, 8:22–23, 8:29, 8:30, 8:32–33, 9:10a, 9:12a–c, 9:13, 9:18a–d) are reported correctly. The real faults are few but concrete. The 8:35 Ketiv/Qere is described on the wrong word. One note falsely claims that "acquire" is used in 16:16, 17:16 and 23:23, and it misquotes 23:23. The 8:35b/18:22b pair is still unaligned across parts. A few smaller facts are wrong (4:3 "same pair of words", 2:5 "Elohim" only three times, "seven sacraments" put under Augustine, Sirach at Orthodox Vespers). There are also some term and style slips. None needs a rewrite.

Counts: 0 critical, 4 major, 27 minor.

## Findings

### Major

**1. Major. variants.json 8:35 and notes.json 8:35 ("Finding Wisdom, finding life"): the Ketiv/Qere is put on the wrong word.**
What is wrong: the variant sets "Qere מֹצְאִי, the one who finds me" against "Ketiv מצאי, those who find me", and the note says "The written Hebrew has 'those who find me', plural; the text read aloud has the singular". But the first word is the same in both. The difference is in the second word. texts/auto/Pro.json at 8:35 gives Q מָצָא "he finds/has found" against K מֹצְאֵי "finders of". So the Ketiv reads כִּי מֹצְאַי מֹצְאֵי חַיִּים, "those who find me are finders of life", and the Qere reads "whoever finds me has found life". The WHY ("The verb 'has found' is singular, which fits the Qere") argues in a circle, because that verb *is* the Qere.
Fix: anchor the variant on "has found life". Give Q מָצָא ("has found life") against K מֹצְאֵי ("those who find me are finders of life"; plain "Those who find me are finders of life"). Also note that the Greek αἱ γὰρ ἔξοδοί μου ἔξοδοι ζωῆς repeats one word, as the Ketiv does. Correct the last sentence of the 8:35 note to match.

**2. Major. notes.json 4:5 ("Buy wisdom"): a false claim and a misquotation.**
What is wrong: "The Plain English Translation keeps 'acquire' in all these places so that the link can be seen", where r lists 16:16, 17:16 and 23:23. In the current Plain English Translation, 16:16 has "Gaining wisdom … gaining understanding", 17:16 has "the price of wisdom" (liqnot chokhmah is not rendered "acquire"), and 23:23 has "Purchase truth". The note also quotes 23:23 as "'buy truth and do not sell it'". That is neither the Plain English Translation ("Purchase truth, and do not part with it for money") nor the Hebrew order. The build missed it because no reference follows the quotation in parentheses. The book.json spec box ("the son is asked to do what God did first") rests on the same chain of "acquire" and is fine as it stands, because it cites only 1:5, 4:5, 4:7 and 8:22.
Fix: say "The Plain English Translation keeps 'acquire' in 1:5, 4:5, 4:7 and 8:22". Quote 23:23 in its Plain English Translation. Or ask the 16-22 and 23-24 writers to move qanah to "acquire" there (16:16 qenoh chokhmah; 23:23 emet qeneh), which would strengthen the chain. If they do, add those verses to the spec box refs.

**3. Major. Cross-part: 8:35b against 18:22b (16-22 part). The same Hebrew is still rendered two ways, and the 8:35 note quotes a wording 18:22 does not have.**
Evidence: 8:35b וַיָּפֶק רָצוֹן מֵיְהוָה "and he draws favor from the LORD"; 18:22b וַיָּפֶק רָצוֹן מֵיְהוָה "you have received a gift of favor from the LORD". The 8:35 note's preview says: "The second line repeats 18:22, where the man who finds a good wife 'draws favor from the LORD'." The 3:13 note also ties yafiq to 8:35.
Fix: the brief's rule makes 8:35b the model. 16-22 should change 18:22b to "and he draws favor from the LORD" (or "you draw favor from the LORD", keeping its second person). Until then, the 8:35 preview must not quote 18:22 in words it does not have. Also, 18:22 has no "good wife" in the Hebrew (MT has only "a wife"; "good" is a Greek and Latin plus), so the preview should say "a wife".

**4. Major. plain.txt 3:7 against 26:5, 26:12, 26:16, 28:11 and 30:12: a recurring idiom is dropped in the one place the Hebrew forces it.**
Evidence: 3:7 אַל־תְּהִי חָכָם בְּעֵינֶיךָ; 26:12 חָכָם בְּעֵינָיו. The other parts render it "wise in his own eyes". 3:7 has "Do not think yourself wise". The writer's own 3:7 note says "Literally 'Do not be wise in your own eyes'", and the 3:5 note sends readers to 26:12 and 28:26, where they will find different wording. STYLE says to keep the original's images. The drift rule allows a familiar line where the Hebrew forces it, and here it does.
Fix: "Do not be wise in your own eyes." Keep the rest of the verse. Update the 3:5 note's quotation to match.

### Minor

**5. Minor. plain.txt drift: four lines follow a modern version's choices that the Hebrew does not force.**
- 4:8b "embrace her, and she will bring you honor". The Hebrew order is תְּכַבֵּדְךָ כִּי תְחַבְּקֶנָּה, "she will honor you when you embrace her". The Plain English Translation reorders it into the NIV's order and shape. Fix: "she will honor you when you hold her close".
- 5:12 "How I hated discipline, / and my heart sneered at rebuke!" The second line follows the ESV's subject-first shape ("and my heart …"). The Hebrew reads וְתוֹכַחַת נָאַץ לִבִּי, "and rebuke my heart sneered at". That is a six-word run matching the ESV that the Hebrew order does not force. Fix: "and rebuke? My heart sneered at it!", or "and sneered at rebuke with all my heart".
- 5:19 "a loving doe, a graceful … / Let her breasts satisfy you at all times". This takes the NIV's "loving doe, a graceful" and "satisfy you" together. יְרַוֻּךָ is "drench you, give you your fill to drink", the water image of 5:15–18, and the 7:18 note itself links it to nirveh. Fix: "Let her breasts give you your fill at all times", which also strengthens the 7:18 link.
- 9:17b "is delicious" follows the NIV's word. יִנְעָם means "is pleasant" (the same root as 2:10 and 9:17's echo of 2:10 "delightful"). Fix: "bread from hiding places tastes good", or "is a delight".

**6. Minor. plain.txt 7:22 "like a fool in shackles": 'evil is not "stubborn fool".**
terms.json says 'evil is "stubborn fool". The line is uncertain (see the variant), but the Plain English Translation claims to follow MT, so it should use the term or say in the note why it does not. The same verse renders musar as "punished"; terms.json allows that only with a note, and the 7:22 note does not say so. Fix: "like a stubborn fool in shackles going off to be punished", and add a sentence noting musar "correction, punishment" here.

**7. Minor. plain.txt small additions.**
- 3:9 "everything your land produces": "land" is not in the Hebrew (תְּבוּאָתֶךָ "your yield"). Fix: "everything you harvest".
- 5:10 "the fruit of your hard work": "the fruit of" is added (עֲצָבֶיךָ "your toil"). Fix: "and what you toiled for will go to a foreigner's house".

**8. Minor. plain.txt 6:19: the comma makes the list read as eight items.**
"one who breathes out lies, a lying witness" reads as two people. The note (6:16, 6:19) counts one, "the sixth of the seven". The Hebrew יָפִיחַ כְּזָבִים עֵד שָׁקֶר is one figure. Fix: "a lying witness who breathes out lies". Consider "a false witness" to match 14:5b.

**9. Minor. notes.json 4:3: "the same pair of words as here" is wrong.**
1 Chronicles 22:5 and 29:1 have נַעַר וָרָךְ (na'ar varakh). Proverbs 4:3 has רַךְ וְיָחִיד (rakh veyachid). Only rakh is shared. Fix: "the same word rakh, 'tender'". Fix the same claim in chapters.json ch. 4 J view and in the solomon topic contribution, which say Chronicles uses "young and tender".

**10. Minor. notes.json 2:5: "'God' (Elohim) … appears here, in 2:17 and in 3:4".**
That leaves out 25:2 (כְּבֹד אֱלֹהִים) and 30:9 (שֵׁם אֱלֹהָי), and 30:5 has Eloah. Fix: "In chapters 1–9 it appears only here, in 2:17 and in 3:4 (elsewhere 25:2; 30:9)".

**11. Minor. notes.json 9:1: "seven sacraments (Augustine, City of God 17.20)" is anachronistic.**
The list of seven sacraments was fixed in the 12th century (Peter Lombard). In City of God 17.20, Augustine reads Wisdom's house as the human flesh of Christ, with the Church joined to it, and the servants as the messengers sent out. He does not read the seven pillars as seven sacraments. The sentence as written attributes both "seven gifts" and "seven sacraments" to Augustine. Fix: keep Augustine for the house (Christ's flesh, the Church). Attribute "seven gifts of the Spirit" (Isaiah 11:2) and "seven sacraments" to "later medieval readers", or drop them.

**12. Minor. notes.json 8:30 ("God looked into the Torah"): "Philo of Alexandria, a little earlier".**
Philo (first century AD) is about four centuries earlier than Genesis Rabbah (about the 400s), not "a little earlier". Fix: "Philo of Alexandria, centuries earlier, …".

**13. Minor. chapters.json ch. 3 settings 3:1–12 `readers`: "from the Maccabean martyrs to the readers of Hebrews, took 3:11–12 as comfort".**
No Maccabean text quotes or clearly uses Proverbs 3:11–12. 2 Maccabees 6:12–16 speaks of discipline as mercy in its own words. Fix: "Later Jewish writers (compare 2 Maccabees 6:12–16; Psalms of Solomon) and the readers of Hebrews took suffering as fatherly discipline", or drop the Maccabees.

**14. Minor. book.json traditions (canon), Orthodox view: "the Wisdom of Solomon and Sirach are read with Proverbs at Vespers on many feasts".**
The Wisdom of Solomon is a regular Vespers reading. Sirach is not among the fixed-feast Vespers readings (I checked a full list of Menaion Vespers readings: none from Sirach). Fix: "the Wisdom of Solomon is read with Proverbs at Vespers on many feasts".

**15. Minor. notes.json 8:23: the edition of the Latin is not named.**
"The Latin has 'I was set up' (ordinata sum)" is the Clementine Vulgate. The critical (Stuttgart) Vulgate reads *ab aeterno ordita sum*, from ordior, "begin (a web), set up". That supports the "woven" reading the note discusses. Fix: "Jerome's Latin has ordita sum (the Clementine text has ordinata sum)". Mention the weaving sense of ordior.

**16. Minor. notes.json 1:17: verify the Rashi attribution.**
The note puts Rashi under reading (1), "a bird that sees the net … will not fly into it". Rashi's comment is usually given as: the birds see the net spread and are caught anyway, because they do not grasp it, which is reading (2). I could not settle this in the time available. Fix: check Rashi on 1:17 (Sefaria) and move the name if needed. Likewise, check that Fox and Waltke hold reading (2) as stated.

**17. Minor. notes.json 3:5: "Jewish commentators (Ralbag, for example) read it as trust in God's providence when human reasoning reaches its limit".**
This is unsourced, and `ralbag-proverbs` exists in book.json sources but is not in the note's `s`. Fix: add the key after checking Gersonides on 3:5, or soften to "Jewish commentators" without a name.

**18. Minor. chapters.json ch. 8 deep "The Arian controversy": "Irenaeus, unusually, identified Wisdom with the Holy Spirit (Against Heresies 4.20)".**
The fact is right (Against Heresies 4.20.1–3 cites Proverbs 3:19 and 8:22–31 of the Spirit). But no source is attached, and the key `irenaeus-heresies-4` is defined in this part's sources.json and used nowhere. Fix: attach it there.

**19. Minor. sources.json: unused keys.**
`origen-song`, `irenaeus-heresies-4`, `lindenberger-ahiqar-aramaic`, `hengel-judaism-hellenism`, `brenner-proverbs` and `wolters-valiant-woman` are defined but never cited in 1–9, book.json or the other parts. `lindenberger-ahiqar-aramaic` also sits beside the existing `lindenberger-ahiqar` (Tob/sources.json, the OTP translation), which book.json and four parts cite. Fix: use each key where it belongs (Irenaeus at item 18; Wolters is the 30-31 writer's, so let them decide) or delete it.

**20. Minor. variants.json 5:16 WHY: "The Greek's second line then says the opposite of the Hebrew".**
The Greek εἰς δὲ σὰς πλατείας διαπορευέσθω τὰ σὰ ὕδατα ("let your waters pass into your streets") says the same as the Hebrew second line. It reverses only the Plain English Translation's question reading. Fix: "The Greek's second line then tells him to let his waters run into his own streets, so the Greek reads the verse as a contrast: not out, but in."

**21. Minor. chapters.json ch. 1 deep "Which witnesses this site checked": "the Greek" is defined differently from the brief.**
It says "readings described as 'the Greek' were read there" (Swete's Vaticanus). The brief says "The Greek" means the critical text (Rahlfs/Göttingen), and a reading in one codex is named by that codex. book.json "About the translations" says "and the critical text of Rahlfs where it differs". The variants mostly name Vaticanus where they mean it, so the fault is in the stated rule more than in the entries. Fix: change the deep section to "'The Greek' means the Old Greek as printed by Rahlfs; readings found only in one codex are named by that codex". Check that 8:29ab and 8:33 are missing from Rahlfs too, and if so say "the Greek" there. The same section should also say, in one clause, that 4QProv-a (1:27–2:1) and 4QProv-b (7:9, 11) show no difference of sense in these chapters, or name any difference they do show.

**22. Minor. book.json lenses, X `desc`: a bare reference.**
"(Hebrews 12:5–6; James 4:6; 1 Peter 4:18; 5:5; Romans 12:20)". The bare "5:5" reads as Proverbs 5:5. Fix: "1 Peter 4:18; 1 Peter 5:5".

**23. Minor. notes.json 6:16: "The seven items follow the body from top to bottom: eyes, tongue, hands, heart, feet".**
Hands before heart is not top to bottom. Fix: "The list moves through the body: eyes, tongue, hands, heart, feet".

**24. Minor. notes.json 1:22: "The same word ends the first verse of the Psalms".**
Psalm 1:1 ends with yashav, so letsim is near the end, not the last word. Fix: "appears in the first verse of the Psalms".

**25. Minor. notes.json 6:10 ("A saying used twice"): "the story of the lazy man's field".**
terms.json makes 'atsel "lazy one". Fix: "the lazy one's field".
Cross-part (for the lead): 01-09 follows terms.json, and the others do not. 10:26, 19:24, 22:13, 24:30, 26:13 and 26:16 all say "the lazy man". Those parts should move to "the lazy one", not the other way round.

**26. Minor. Cross-part consistency of the surety words, 'arav and taqa' kaf.**
6:1 has "guaranteed your neighbor's debt … struck hands". 11:15, 17:18, 20:16, 22:26 and 27:13 have "stand(s) good for", and 17:18 "strikes palms", 22:26 "clap hands". The 6:1 note sends readers to 17:18 and 22:26 for "striking hands", where they will not find it. Fix: agree one pair across the book. Either 6:1 moves to "if you have stood good for your neighbor, / if you have struck palms for an outsider", or the others move to 6:1's wording. 6:1 is the earliest, but the other four parts already agree, so the cheaper fix is to change 6:1.

**27. Minor. glosses.json 3:10 "new wine -> fresh grape juice from the press".**
Tirosh is debated: newly pressed and possibly fermenting wine (compare Hosea 4:11, where tirosh "takes away the heart"). The gloss takes the side of the total-abstinence reading on a question the brief marks as a `wine` traditions point. Fix: "the year's new wine, fresh from the press".
Also, glosses.json 5:20 "hold another man's wife" makes the foreign woman a married woman, which the 2:16 note leaves open. Fix: "hold a woman who is not yours".

**28. Minor. notes.json word notes missing `kind` or `orig`: 1:28, 2:1, 9:7 and 9:11 are typed `word` with neither.**
STYLE requires both for `word` notes. Fix: retype them as `views` or `echo`, or add `kind` and `orig`.

**29. Minor. notes.json lengths.**
The 8:22 note "Wisdom and the Son: the Arian controversy" is 166 words (over 160). The other 8:22 note is 141, so only one is over. Six previews pass 120 characters: 2:16 (131), 4:3 (123), 8:22 (122 and 134) and 8:30 (122 and 137). Fix: trim the Arian note (the chapter page covers the detail) and the previews.

**30. Minor. chapters.json settings: the scholars' proposed settings are thin outside chapters 2, 4 and 5.**
The brief asks each card for the setting scholars propose (home, court school, scribal training, post-exilic editing) and why the saying was kept. Only 1:1–7, 2:1–22, 4:1–9, 5:1–23 and 8:22–31 have `views`, and few `why` fields say why the passage was kept. A few `when` fields are invented detail, such as 6:6–11 "in harvest season, when work cannot wait". Fix: add one sentence to the father's-talk cards (1:8–19, 3:1–12, 6:20–35, 7:6–23) on the home/school/post-exilic options, and drop the made-up occasions.

**31. Minor. Cross-part, for the lead: 6:19 'ed shaqer "a lying witness" against 14:5b "a false witness".**
14:5b's 'ed sheqarim and 6:19's 'ed shaqer differ only in number. 19:5 and 19:9 use "A witness who lies". A single rendering would help readers follow the yafiach kezavim family (6:19; 14:5, 25; 19:5, 9) that the 6:19 note points to. This is low priority.

## Fixes applied

1. 8:35 Ketiv/Qere moved to the second word: Qere מָצָא "has found life" against Ketiv מֹצְאֵי "those who find me are finders of life", with a note that the Greek also repeats one word. The variant anchors the whole first line (not only "has found life") so that the Ketiv reading stays grammatical. The 8:35 note is corrected to match.
2. 4:5 note: the claim now covers only 1:5, 4:5, 4:7 and 8:22, and says 16:16, 17:16 and 23:23 render qanah "gaining", "the price of" and "buy". 23:23 is quoted in its current Plain English Translation ("Buy truth, and do not sell it"). The spec box is unchanged.
3. 8:35b is kept as the model ("and he draws favor from the LORD"), per the lead. The 8:35 preview no longer quotes 18:22 or says "good wife": "The second line has the same Hebrew as 18:22b, said of the man who finds a wife."
4. 3:7 now reads "Do not be wise in your own eyes." The 3:7 note's anchor and preview and the 3:5 note's quotation are updated.
5. Rebuilt from literal.js: 4:8b "she will honor you when you hold her close"; 5:12b "and rebuke, how my heart spurned it!"; 5:19 "A doe to love, an ibex full of charm: / let her breasts give you your fill at all times"; 9:17b "is a delight". The 4:8, 5:19 and 7:18 notes are updated.
6. 7:22 now reads "like a stubborn fool in shackles going off to be punished". The note adds a line on musar as punishment here, and the variant is updated.
7. 3:9 "everything you harvest"; 5:10 "and what you toiled for will go to a foreigner's house".
8. 6:19 "a lying witness who breathes out lies". The note says the two phrases name one person. "A false witness" (14:5b) is not adopted: 6:19 keeps "lying witness" to match Exodus 20:16's Plain English Translation, which the note cites. That pairing is left for the lead (finding 31).
9. 4:3 note, preview and solomon topic: only the word rakh "tender" is said to be shared with 1 Chronicles 22:5 and 29:1.
10. 2:5: "in chapters 1–9 it appears only here, in 2:17 and in 3:4 (elsewhere 25:2 and 30:9; 30:5 has Eloah)".
11. 9:1: Augustine is kept for the house (Christ's flesh, with the Church joined to it). The seven gifts and seven sacraments are given to later medieval readers.
12. 8:30: "Philo of Alexandria, centuries earlier".
13. Ch. 3 settings readers: the Maccabean martyrs are replaced by "Later Jewish writers (compare 2 Maccabees 6:12–16) and the readers of Hebrews".
14. book.json Orthodox canon view: only the Wisdom of Solomon is said to be read at Vespers.
15. 8:23: Stuttgart Vulgate ordita sum (from ordior, which supports "woven") against Clementine ordinata sum.
16. 1:17: checked Rashi (Sefaria export). He holds reading (2): the birds see the grain on the net, think it is there for nothing, and go down to eat. The name is moved there. Waltke is dropped from reading (2); Fox is kept as "compare".
17. 3:5: checked Rashi ("spend your money to find a teacher") and Gersonides (whoever credits success to his own cleverness loses providence's help). Both are now named accurately with keys rashi-proverbs and ralbag-proverbs.
18. irenaeus-heresies-4 is attached to the 8:22–31 settings card. Chapter deep sections take no source list, and that card covers the passage.
19. Deleted unused keys origen-song, lindenberger-ahiqar-aramaic, brenner-proverbs and wolters-valiant-woman. hengel-judaism-hellenism is kept because other parts cite it.
20. 5:16 variant why: the Greek's second line is read as the contrast "not out, but in".
21. Ch. 1 witness section: "'The Greek' means the Old Greek as printed by Rahlfs; a reading found only in one codex is named by that codex." I checked Rahlfs' text (the CCAT file in the 30-31 scratch). Rahlfs lacks 4:7, 8:29a–b and 8:32b–33, so those variants now say "the Greek". Rahlfs has 1:16, so that variant is retitled "missing from Codex Vaticanus", and the note at 1:16 and book.json say Vaticanus. The 3:12 variant notes that Rahlfs prints paideuei. The Qumran clause is added: as reported in DJD 16, 4QProv-a and 4QProv-b (7:9, 11) differ only in spelling and small details.
22. book.json X lens: "1 Peter 4:18; 1 Peter 5:5".
23. 6:16: "The seven items move through the body".
24. 1:22: "appears in the first verse of the Psalms".
25. 6:10 note "the lazy one's field". Also fixed in the 6:8 variant ("the lazy one") and the book.json outline (24:23–34).
26. 6:1 now reads "if you have stood good for your neighbor, / if you have struck palms for an outsider", matching 11:15, 17:18, 20:16, 22:26 and 27:13. The note, gloss, chapter 6 summary, settings card and interest-and-debt topic are updated. terms.json gets one entry: 'arav / taqa' kaf, "stand good for" / "strike palms".
27. Glosses: 3:10 "the year's new wine, fresh from the press" (tirosh kept neutral); 5:20 "hold a woman who is not yours".
28. Notes 2:1 and 9:7, 9:11 are retyped symbol and views. 1:28 gets orig and kind "nu".
29. The Arian note on 8:22 is trimmed below 160 words. The previews at 2:16, 4:3, 8:22 (both) and 8:30 (both) are cut to 120 characters or fewer.
30. Settings: household, school/scribal and post-exilic views are added to 1:8–19, 3:1–12, 6:20–35 and 7:6–23, with sources. The invented occasion at 6:6–11 is replaced, and 5:1–23's "for the first time" is dropped.
31. Cross-part lazy-one and false-witness pairings: 1–9 already follows terms.json for 'atsel. 6:19 is explained at item 8. The rest is left to the lead and the other parts.
