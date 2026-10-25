# Hostile review: Numbers, part 01-10 (chapters 1-10) and Num/book.json

Reviewer: num-reviewer. `node tools/build.js --check Num/01-10`: 420 verses, 133 notes, 9 variants, 91 glosses, 10 chapter pages, 18 topic contributions, 0 errors, 0 warnings.

## Verdict

This is a careful, well-researched part. The translation follows the Masoretic Text closely, with no additions or omissions of substance. The repeated formulas of chapters 1, 2, 7 and 10 are handled consistently: the twelve offerings of chapter 7 are word-for-word identical except for the names, and the Plain keeps the Hebrew's differences between 1:20-22 and 1:24ff. The notes are dense and nearly all accurate. Most rabbinic references check out: Pesachim 6b, Sanhedrin 19b, Bekhorot 5a, Shabbat 115b-116a, Sukkah 25a, Berakhot 20b and 31b, Sotah 9:9 and 47b, Chullin 24a, Sifre 42, Mishnah Pesachim 9:2 and Nazir 3:6. The account of Ketef Hinnom is accurate in its sizes, dates and the wording of KH1 and KH2. The sotah material is fair and well sourced.

Three problems need a real fix:

1. The literal-line method has left a large number of phrases that match the ESV word for word, and a few that match the NIV. They cluster in the sotah law (5:17-31), the Nazirite law (6:3-20) and the cloud and Hobab passages (9:13-22; 10:9-10, 29-34). Recurring formulas such as "Any outsider who came near was to be put to death" add to the count.
2. The Plain carries many stiff, calqued constructions that are not natural 8th-grade English.
3. There are a handful of factual slips, a missing ESV-footnoted variant (9:16, "by day"), a weak "critical" reading in the large-numbers essay, a missing `trumpets` contribution, and a terms list in book.json that does not serve the three parts.

Counts: critical 0, major 9, minor 31.

---

## Findings

### Major

**1. Major. Plain, ch. 5 (sotah law): many exact ESV phrases.**
The literal method produced ESV wording almost verbatim in a run of verses:
- 5:18, 19, 24: "the water of bitterness that brings the curse." This is the ESV's distinctive rendering, used three times. 5:19 adds "be free from this water of bitterness that brings the curse," nine consecutive ESV words.
- 5:18: "which is the grain offering of jealousy" (ESV).
- 5:21: "make you a curse and an oath among your people" and "make your thigh fall away" (ESV).
- 5:22: "May this water that brings the curse" (ESV).
- 5:27: "When he has made her drink the water" and "the woman will become a curse among her people" (ESV: "the woman shall become a curse among her people").
- 5:28: "But if the woman has not made herself unclean and is clean, she will be free and will conceive children." This differs from the ESV ("has not defiled herself... shall be free and shall conceive children") only in the verb forms.
- 5:30: "the priest is to carry out for her all this law" (ESV).
- 5:12: "strays and breaks faith with him" (ESV: "goes astray and breaks faith with him").

Fix: recast the passage from the Hebrew in fresh English. For example: "the bitter water that carries the curse" or "the bitter, curse-bringing water"; "This water that carries the curse will enter your body"; "If she is innocent and clean, nothing will happen to her, and she will be able to have children."

**2. Major. Plain, ch. 6 (Nazirite): ESV and NIV phrasing.**
- 6:3: "He must not drink vinegar made from wine or from strong drink. He must not drink any grape juice or eat grapes, fresh or dried." This combines the NIV ("He must not drink vinegar made from wine... He must not drink grape juice or eat grapes") with the ESV ("eat grapes, fresh or dried").
- 6:5: "Until the days are complete for which he is set apart for the LORD, he will be holy. He is to let the locks of hair on his head grow long." This follows the ESV clause by clause ("Until the time is completed for which he separates himself to the LORD, he shall be holy. He shall let the locks of hair of his head grow long").
- 6:9: "If someone dies beside him very suddenly" (ESV: "if any man dies very suddenly beside him").
- 6:18: "put it on the fire that is under the sacrifice of the peace offering." Eleven words identical to the ESV.
- 6:20: "After that the Nazirite may drink wine" (ESV).

Fix: rebuild these verses. For example, 6:5: "As long as his vow lasts, no razor may touch his head. He stays holy to the LORD until his time is up, and he lets his hair grow long."

**3. Major. Plain, 9:13-22: ESV and NIV matches.**
- 9:13: "That person will be cut off from his people, since he did not bring the LORD's offering at its set time. That man will bear his sin." This is the ESV with "since" for "because" and "set" for "appointed."
- 9:15: "On the day the tabernacle was set up, the cloud covered the tabernacle, the tent of the testimony. In the evening it was over the tabernacle like the look of fire until morning." This is the ESV almost word for word ("And at evening it was over the tabernacle like the appearance of fire until morning").
- 9:16: "So it always was: the cloud covered it" (ESV: "So it was always: the cloud covered it").
- 9:17: "Whenever the cloud was lifted from over the tent, after that the Israelites would set out. In the place where the cloud settled, there the Israelites would camp" (ESV).
- 9:21: "Whether by day or by night, when the cloud lifted, they set out." This is the NIV ("Whether by day or by night, whenever the cloud lifted, they set out"). It also takes the NIV's interpretation. The Hebrew `או יומם ולילה` more likely means "or if it stayed a day and a night" (ESV, NJPS). At least add a note on the alternative.
- 9:22: "two days, or a month, or a longer time... and did not set out. But when it lifted, they set out" (ESV).

Fix: retranslate. For example, 9:15: "The day the tabernacle was put up, the cloud covered it, the tent that held the testimony. From evening until morning the cloud over the tabernacle looked like fire."

**4. Major. Plain, 10:9-10, 29-34: ESV matches.**
- 10:9: "When you go to war in your land against" (ESV).
- 10:10: "at the beginnings of your months... over your burnt offerings and over your sacrifices of peace offerings. They will be a reminder for you before your God" (ESV).
- 10:29: "We are setting out for the place about which the LORD said, 'I will give it to you.' Come with us, and we will do you good" (ESV structure and wording).
- 10:30: "I will not go. I will go back to my own land and to my own relatives" (ESV: "I will not go. I will depart to my own land and to my kindred").
- 10:31: "Please do not leave us. You know how we are to camp in the wilderness, and you will be eyes for us" (ESV: "Please do not leave us, for you know where we should camp in the wilderness, and you will serve as eyes for us").
- 10:32: "whatever good the LORD does for us, we will do the same good for you" (ESV: "whatever good the LORD will do to us, the same will we do to you").
- 10:33-34: these follow the ESV order and wording closely.
- 10:36: "to the countless thousands of Israel" is the NIV and BSB wording. You could keep it and point to the note, but the "thousands" note (#132) would read better with "to Israel's myriad thousands" or "to the tens of thousands of Israel's clans."

Fix: retranslate the Hobab dialogue in fresh conversational English. For example: "Please don't leave us. You know the places to camp out here. You can be our eyes."

**5. Major. Plain, recurring formulas and other ESV/NIV matches in chs. 1-4 and 8.**
- 1:51, 3:10, 3:38: "Any outsider who comes near / came near will be / was to be put to death." 3:38 matches the ESV exactly ("And any outsider who came near was to be put to death").
- 1:53: "keep guard over the tabernacle of the testimony" (ESV exact).
- 1:3: "From twenty years old and up, everyone in Israel who can go out to war, you and Aaron are to enroll them by their companies" follows the ESV order ("From twenty years old and upward, all in Israel who are able to go to war, you and Aaron shall list them, company by company").
- 1:49: "Only the tribe of Levi you are not to enroll" (ESV: "Only the tribe of Levi you shall not list").
- 3:9 and 8:16: "wholly given to him/me from among the" (ESV).
- 4:15: "But they must not touch the holy things, or they will die" (NIV exact).
- 4:20: "must not go in to look at the holy things even for a moment, or they will die" (NIV: "must not go in to look at the holy things, even for a moment, or they will die").
- 4:6: "a cloth all of violet" (ESV: "a cloth all of blue").
- 8:2: "When you set up the lamps, the seven lamps are to give light toward the front of the lampstand" (ESV: "When you set up the lamps, the seven lamps shall give light in front of the lampstand").
- 8:4: "from its base to its flowers it was hammered work" (ESV exact).
- 8:26: "in the tent of meeting by keeping guard" (ESV exact).
- Lesser cases to recast: 1:44, 3:12, 3:32, 9:7, 9:8, 9:10.

Fix: vary the formulas. For example: "If anyone else comes near, he must be put to death"; "No one else may come near, on pain of death"; "Any unauthorized person who approaches must die." Recast 4:15 and 4:20 as, for example, "They must not touch the holy objects. If they do, they will die" and "They must not go in and look at the holy things, not even for an instant, or they will die."

The priestly blessing (6:24-26) is close to the traditional English wording that all versions share. That is acceptable, since it is fixed liturgical language and the Plain's "toward you" is its own, but say so in a note.

**6. Major. Plain: unnatural, calqued English throughout.**
These are not 8th-grade American English:
- "His company, those enrolled from them, number 74,600." This appears twelve times in ch. 2, and alternates between "from them" and "from it" with no basis in the Hebrew. Try "His division numbers 74,600."
- "stand them / stand her / stand the woman before" (3:6; 5:16, 18, 30; 8:13). Use "have them stand" or "present."
- "the holy place's shekel" (3:47, 50; 7:13 and every repeat; 7:85-86). Use "the sanctuary shekel." Exodus uses the same awkward form, so fix it in both, or at least keep the gloss.
- A "may" construction used where English wants "if" or "suppose": 5:6 "A man or a woman may do one of the sins people do," 5:8 "But the man may have no close relative," 6:2, 9:10, 9:13 "But a man may be clean and not on a journey, and still fail," 9:14. Leviticus uses the same habit, but it reads like a permission, not a condition. Use "If" or "Suppose."
- 5:19-20: "Perhaps no man has lain with you... Then be free." "Perhaps" is wrong for `אִם` in an oath formula. Use "If no man has slept with you... you will be unharmed by..."
- 10:15-27: "the company of the tribe of Issachar's people." This stacks possessives. Use "the division of the tribe of Issachar."
- 4:40, 4:44: "those enrolled by their clans, were 2,630." Remove the comma between subject and verb.
- 8:4: "it was hammered gold, from its base to its flowers it was hammered work." This is a comma splice.
- 4:19: "set each man to his work and to his load."
- 1:3: the fronted phrase with a resumptive "them."

Fix: a style pass on the whole Plain after the redo of findings 1-5.

**7. Major. variants.json: missing variant at 9:16, "by day."**
The Masoretic Text reads `הֶעָנָן יְכַסֶּנּוּ וּמַרְאֵה־אֵשׁ לָיְלָה`. The Septuagint, Syriac, Vulgate and Targum add `יוֹמָם` "by day." The ESV adds "by day" and footnotes it ("Septuagint, Syriac, Vulgate; Hebrew lacks *by day*"). The KJV and NIV also have "by day." By STYLE's rule this needs an entry.

Fix: follow the Masoretic Text, as the Plain does, and give the long reading as "the cloud covered it by day, and by night it looked like fire."

**8. Major. chapters.json ch. 1 deep section "How many people left Egypt?": not every reading is in its strongest form.**
- **Critical.** This view gets one sentence with no arguments. Give its real case: the priestly writer's schematic numbers, which match Exodus 12:37 and 38:26 as an ideal; the lack of any archaeological trace of two million people in Sinai; and population estimates of a few tens of thousands for the Iron I hill country (Finkelstein, Stager). Name representatives: Noth, Budd and Levine. Albright's Davidic-census theory is cited, but say that it also counts as a historical proposal.
- **Unit view.** This omits its other main form: R. E. D. Clark (1955) and John Wenham ("Large Numbers in the Old Testament," *Tyndale Bulletin* 18, 1967) read `אַלּוּף` *'alluf*, "chief" or "officer," instead of *'elef*. It also omits the published critics of Humphreys and Mendenhall: Rüdiger Heinzerling (*VT* 50, 2000), Gary Rendsburg (*VT* 51, 2001) and Milgrom's excursus. The brief asked for "Petrie, Mendenhall, Humphreys and their critics." Only the general weakness (the text adds the numbers as thousands) is given, and so is the problem the unit view faces with 3:39-43, where 22,000 and 22,273 are not in "unit + hundreds" form.
- **Literal.** The strongest argument is missing: Exodus 38:25-28 turns 603,550 half-shekels into 100 talents and 1,775 shekels of silver, an arithmetic that cannot be read as "units." Name conservative defenders (for example, R. K. Harrison, Ronald Allen in EBC, Eugene Merrill).
- **Symbolic.** Name who proposed the gematria. *bny yśr'l* = 603 is well known, and the remainder is often linked to *kl r'š* (551), which leaves a one-digit problem. Add M. Barnouin's astronomical theory (*VT* 27, 1977) as a second symbolic proposal.

Fix: expand each paragraph to two or three sentences, with names and the best argument for each.

**9. Major. topics.json: no contribution to `trumpets`.**
The `trumpets` core is now retitled "Trumpets and the Shofar," and its lead already names Numbers 10:1-10. Notes #120-122 are tagged `trumpets`, and ch. 10 lists the topic. But this part contributes no section to it.

Fix: add a section such as "Two silver trumpets" (refs Numbers 10:1-10; Numbers 31:6; 2 Chronicles 13:12-14; 2 Chronicles 5:12-13). Cover: *chatsotsrah* versus *shofar*; Josephus, *Antiquities* 3.291; the Tutankhamun trumpets; the Arch of Titus; *taqa'* versus *teru'ah* (10:5-7); the war and feast uses; the Mishnah's shofar flanked by trumpets (Rosh Hashanah 3:3); and 1QM. Add `common` and `uncommon` lines as well.

### Minor

**10. Minor. Notes and chapters: Sifre cited for chapter 1.**
Ch. 1, view J: "The Sifre and Ramban stress that each person was counted by name." The Sifre on Numbers begins at 5:1 (Naso), as book.json itself says ("a legal midrash on chapters 5-35"). It has no comment on Numbers 1. Fix: cite Ramban on 1:45 and Numbers Rabbah 1-2 instead, and drop the Sifre.

**11. Minor. Note #92 (7:13): animal count is wrong.**
"Each leader also gave fifteen animals." In fact each gave 21: 1 bull, 1 ram and 1 lamb for the burnt offering, 1 goat for the sin offering, and 2 oxen, 5 rams, 5 goats and 5 lambs for the peace offering. 12 × 21 = 252, which matches note #94. Fix: change to "twenty-one animals."

**12. Minor. Note #48 (4:20): Septuagint misattributed.**
The note says the "covered" reading is "in the Septuagint, Rashi and the KJV." The Septuagint has *exapina*, "suddenly," which supports the first view ("for a moment"), not the second. Rashi and the KJV are correct. Fix: move the Septuagint to the first view.

**13. Minor. Note #40 (4:3): wrong reference.**
The body says "the women who served at the tent's entrance (Exodus 38:22; 1 Samuel 2:22)." It should be Exodus 38:8, which the `r` list already gives. Also, Taanit 2a derives "service of the heart" from Deuteronomy 11:13, not from the temple's fall. Fix: rephrase as "the rabbis called prayer 'the *avodah* of the heart' (Taanit 2a)," without "after the temple fell."

**14. Minor. Note #75 (6:9): wrong transliteration.**
`בְּפֶתַע` is *befeta'*, not "befetsa'." There is no tsade. Fix the `orig` and the body.

**15. Minor. Note #36 (3:39): main rabbinic explanation misstated.**
The standard explanation (Bekhorot 4a; Rashi on 3:39; Avot de-Rabbi Natan 34) is that Aaron was not counted among the 22,000 Levites. The note says instead that "Aaron did not take part in counting the Levites." Fix: give Rashi's reading first, and keep the "Moses alone counted" point as a second view.

**16. Minor. Note #130 (10:35): Proverbs 9:1 misattributed.**
In Shabbat 116a the Proverbs 9:1 proof ("seven pillars... these are the seven books of the Torah") is given by R. Shmuel bar Nachmani in R. Yonatan's name, not by Rabbi Judah the Prince himself. Also give R. Simeon ben Gamaliel's view, that the passage will one day be moved to its proper place, by name. Fix the attribution.

**17. Minor. Note #64 (5:22): Mishnah misstated.**
Mishnah Sotah 2:5 says the double amen answers "the curse" and "the oath" (*'alah* and *shevu'ah*), not "the curse and the blessing." Fix the wording. Also add Psalm 89:52 to `r`, since the body cites it.

**18. Minor. Note #80 (6:23): wrong Mishnah reference.**
The steps of the porch (*ulam*) are in Mishnah Tamid 7:2, not 5:1. Tamid 5:1 places the blessing in the Chamber of Hewn Stone. Fix the reference to "Tamid 5:1; 7:2."

**19. Minor. Note #5 (1:3): Talmud reference garbled.**
"A teacher in the Talmud held that men over sixty were not counted either." The source (Bava Batra 121b) is about whether men over sixty fell under the wilderness decree, not about whether they were counted. Fix: rephrase or drop the sentence.

**20. Minor. Book.json "How Jews read Numbers": Avot 5:4 reversed.**
The section says "the Mishnah lists ten tests of Israel in the wilderness (Mishnah Avot 5:4)." Avot 5:4 says the ancestors tested God ten times in the wilderness. Fix: "ten times Israel tested God in the wilderness."

**21. Minor. topics.json `names-of-god`: "among the oldest objects to carry the name YHWH."**
This is not true. The Mesha Stele (about 840 BC), Kuntillet Ajrud (about 800 BC) and Khirbet el-Qom are all older. Fix: "among the oldest objects to carry a biblical text with the name YHWH."

**22. Minor. variants.json 10:10 (Samaritan addition): doubtful `orig` and witness.**
The `orig` gives Deuteronomy's narrative wording, "יהוה אלהינו דבר אלינו בחרב". The Samaritan text recasts this as God's direct speech, introduced by a narrative formula, so this `orig` is probably not what the Samaritan Pentateuch reads. Quote the Samaritan form from Tal and Florentin, or give only "(adds Deuteronomy 1:6-8, recast as God's speech)." The claim that the addition is "also preserved, marked as extra, in the Syro-Hexapla" could not be verified. Remove it, or cite the source.

**23. Minor. variants.json 3:28 and 4:3: `orig` gives English numbers instead of Greek.**
"(8,300)" and "(25 years)" stand where the Greek should be. Give `ὀκτακισχίλιοι τριακόσιοι` and `ἀπὸ εἰκοσιπέντε ἐτῶν`. For 3:28, name which Septuagint manuscripts read 8,300 (Wevers' apparatus).

**24. Minor. variants.json 2:14: ambiguous reference.**
The `b` field reads "(Exodus 2:18; 10:29)," which a reader will take as Exodus 10:29. Fix: write "(Exodus 2:18; Numbers 10:29)."

**25. Minor. Possible missing variant at 6:23-27 (to verify).**
I believe the Göttingen Septuagint (Wevers) and the BHS apparatus place 6:27 directly after 6:23, so that "they will put my name..." comes before the blessing. Check Wevers' *Notes* on 6:22-27. If confirmed, add an entry. Either way, a note could mention that KH1 and KH2 are themselves textual witnesses to 6:24-26 (KH2 lacks "be gracious to you" and the third line's first half).

**26. Minor. Missing note at 5:6, "the sins people do."**
`חַטֹּאת הָאָדָם` can mean "sins against a human being" (NJPS "any wrong toward a fellow man"; Rashi) or "human sins" in general. The law is about wronging a neighbor (5:7-8), so the first sense matters. Fix: add a `deb` note, or render "wrongs a person" in the text.

**27. Minor. Key-term consistency with Leviticus and the other Numbers parts.**
These renderings differ from Leviticus or from the other Numbers parts:
- *samakh*: Leviticus "lean his hand," Numbers 8:10, 12 "press their hands."
- *azkarah*: Leviticus term "token portion," Numbers 5:26 "reminder portion." The gloss there even says "the token handful."
- *ma'al*: Leviticus 5:15 and Numbers 31:16 (part 22-36) "act unfaithfully," Numbers 5:6, 12, 27 "break faith."
- *hiqriv*: the Leviticus term is "present," while this part has "bring near" (5:16; 6:16; 7:3, 10).
- *hizzah*: Leviticus "spatter," Numbers 8:7 "sprinkle."
- *tekhelet*: here "violet," Exodus "violet," but 15:38 (part 11-21) "blue-violet."
- *pequdim*: here "enrolled," but 26:7 (part 22-36) "counted."

Fix: pick one rendering for each. The book.json owner should add them to `terms` (finding 31).

**28. Minor. 4:15-16: "the holy place" for hakkodesh.**
"Aaron and his sons will finish covering the holy place and all its holy things." The priests cover the holy objects, not a room, and Exodus 26:33 uses "the holy place" for the outer room. The same applies to 4:16 ("the holy place and its things") and 4:12. Fix: "the holy objects" or "the sanctuary and all its furnishings."

**29. Minor. Plain 6:15 and 9:11: inconsistent rendering of matsot.**
6:15, 17 and 19 have "bread without yeast," while 9:11 has "unleavened bread." Fix: choose one.

**30. Minor. Plain 10:10: number of "day."**
"On your days of joy" is plural, but the Hebrew `וּבְיוֹם שִׂמְחַתְכֶם` is singular ("on the day of your joy"). This is a small point. Fix it if a natural singular works.

**31. Minor. book.json `terms` does not fit Numbers.**
- It carries over "innah (of a woman) → violate" and "chazaq / kaved / qashah (heart)." The heart terms do not occur in Numbers. "innah → violate" would mislead the 22-36 writer at 29:7 and 30:13, where *innah nefesh* is "humble yourselves" (the Leviticus term).
- It leaves out the Leviticus sacrificial terms (minchah, asham, shelamim, tamim, hiqriv, azkarah, kipper, samakh).
- It leaves out the Numbers terms each part needs: *paqad / pequdim* (enroll / enrolled), *'elef* (thousand), *beit avot* (fathers' house), *mishpachah* (clan), *matteh* (tribe), *tsava'* (company or work force), *degel* (banner), *nasi'* (leader), *zar* (outsider), *mishmeret* (duty or guard), *teru'ah* (battle blast or loud blasts), *tekhelet* (violet), *tachash* (fine leather), *ger* (foreigner), *ma'al*, *nazir*, *'edut* (testimony), *qahal* (assembly), *miqdash / qodesh* (sanctuary).

Also, the "About the translations" section spells *hatta't*, while the notes spell *chatta't* and *chesed*/*hesed*. Make the spelling consistent.

**32. Minor. book.json "The text of Numbers": incomplete list of Samaritan additions.**
The section lists the additions "at 10:10 and in chapters 12-14, 20 and 21." The variant entry at 10:10 also lists 27:23 and 31:20. Fix: make the two lists agree.

**33. Minor. book.json spec "Numbers as the book of the march": unacknowledged overlap.**
Rolf Knierim and George Coats (*Numbers*, FOTL 4, 2005) read the book's genre as a migratory "campaign." Fix: acknowledge this alongside Olson and Milgrom.

**34. Minor. Ch. 2 spec box "A walking Sinai": overlap understated.**
The tabernacle as a portable Sinai is Ramban's classic reading (introduction to Exodus 25). Fix: cite Ramban, and narrow "what I add" to the claim about the camp's rings.

**35. Minor. Quotations in notes and chapters that echo ESV or NIV.**
- Ch. 1 view X: 1 Corinthians 10:5, "with most of them God was not pleased, for they were struck down in the wilderness" (ESV, with one word changed).
- Note #21: Psalm 80:2, "stir up your might" (ESV).
- Note #83: Psalm 31:16, "Let your face shine on your servant" (NIV exact); Psalm 80:3 close to the NIV.
- Notes #22 and #27 do not match the site's own Plain for Genesis 49:17 ("a snake on the road") and Leviticus 10:1 ("presented before the LORD strange fire").

Fix: quote the site's own Plain for Old Testament books already done, and render New Testament quotations freshly.

**36. Minor. Ch. 2 view X: Irenaeus.**
"Christian interpreters linked the four banners with the four living creatures and, through them, with the four Gospels, a tradition already found in Irenaeus." Irenaeus (*Against Heresies* 3.11.8) links the creatures with the Gospels, not the banners. Fix: split the sentence.

**37. Minor. topics.json `priesthood`: Wellhausen is labeled "uncommon."**
The section itself says "many critical scholars, following Julius Wellhausen." Fix: rephrase the `uncommon` line, for example as the specific claim that the Levites were the demoted rural priests of Josiah's reform (2 Kings 23:8-9).

**38. Minor. Topic tags.**
- Note #105 (8:19) is tagged `day-of-atonement`. The verse is not about Yom Kippur; use `priesthood` or `holiness`.
- Existing topics left unused: `skin-disease` (5:2, note #52), `red-heifer` (8:7, note #101), `mount-sinai` (10:11, note #124), `golden-calf` (3:12, note #31), `midian` (10:29), `holy-war` (10:9, 35; ch. 10 "Read as holy war"), `incense` (7:14). Tag where they fit.
- Topic cores `sotah` ("(5:28)") and `priestly-blessing` ("Psalm 4:6; 67:1; 80:3") use bare or short references in a core file, where there is no "own book." Name the book every time.

**39. Minor. Glosses.**
- 1:46 "603,550 → six hundred three thousand five hundred fifty" is patronizing. Drop it, or gloss what the number implies.
- 6:21 "whatever else he can afford → whatever more he chooses to give" changes the meaning. "Afford" is about his means, not his choice.
- 1:51 "Any outsider → anyone not on the team" is flippant for a death-penalty clause. Try "anyone not authorized."
- 5:15 "an ephah → a bushel basket": an ephah is about two-thirds of a bushel. Try "a large basket (about 2/3 bushel)."

**40. Minor. Small points in notes.**
- Note #24: a quotation mark is not closed ("gates on all four sides, three to a side).
- Note #24: the Eruvin 55b citation for the square-or-line debate is doubtful. The "like a box / like a beam" dispute appears in the Jerusalem Talmud, Eruvin 5:1, and Numbers Rabbah 2:9. Verify it.
- Note #51: "the figures are again exact rather than rounded to the hundred." 3,200 is round. Say "two of the three are not rounded to the hundred."
- Note #95: "the first time we see that promise kept" is arguable, given Leviticus 1:1. Say "the first time the Torah describes the voice coming from between the cherubim."

## Fixes applied

Fixed by the part 01-10 writer. Afterward `node tools/build.js --check Num/01-10` reported 420 verses, 135 notes, 11 variants, 82 glosses, 10 chapter pages and 19 topic contributions, with 0 errors and 0 warnings. That includes the built-in quotation check.

**Translation (findings 1-6).** I redrafted about 150 verses from the `literal.js` lines and compared them with the BSB, KJV and WEB only after drafting. A script lists word runs shared with BSB/WEB, and I used it to reword drafts that had drifted. The runs that remain are dates, names, lists and fixed formulas.
- **Chapter 5 (finding 1).** I rebuilt 5:6-8 and 5:12-31. New renderings include "the bitter water that carries the curse", "May the LORD make people curse and swear by your name", "she will not be harmed, and she will be able to have children" and "apply this whole law to her". "Perhaps... Then be free" is now "Suppose... Then this bitter water... will not harm you".
- **Chapter 6 (finding 2).** I rebuilt 6:2-21. 6:3 now reads "He is not to eat grapes or raisins".
- **Chapter 9 (finding 3).** I rebuilt 9:5-22. At 9:21 I now follow "Or it stayed a day and a night", and a new deb note gives the NIV/KJV reading.
- **Chapter 10 (finding 4).** I rebuilt 10:9-10, the march lines of 10:14-27 and the Hobab dialogue (10:29-36). 10:10 now has the singular "day of celebration", and 10:36 reads "to the tens of thousands of Israel's clans".
- **Formulas in chapters 1-4 and 8 (finding 5).** The outsider clause is now "If any outsider comes near, he must be put to death". 4:15 and 4:20 now read "They must not touch the holy things. If they do, they will die" and "not even for an instant". I also rebuilt 1:3, 1:44, 1:49, 1:53, 3:6, 3:9, 3:12, 3:32, 3:38, 4:6, 8:2, 8:4, 8:16 and 8:26.
- **Unnatural English (finding 6).**
  - "His company numbers..." replaces "His company, those enrolled from them...".
  - "have her/them stand" or "present" replaces "stand her/them".
  - "the sanctuary shekel" is used throughout.
  - "If" or "Suppose" replaces the conditional "may".
  - "led the company of the tribe of Issachar" replaces the stacked possessive.
  - The comma splice in 4:38-48 is gone.
  - 8:4 and 4:19 are recast.
- **The priestly blessing.** The 6:24 note now says that its wording stays close to the traditional English, as the review allowed.

**Variants (findings 7, 22-25).**
- **Added.** 9:16 "by day" (Septuagint, Syriac, Vulgate, Targum; the Plain follows the Masoretic Text). 6:27 placed after 6:23 in the Septuagint, which I confirmed in Rahlfs' text. Its note says that Ketef Hinnom KH1 and KH2 are witnesses to a shorter blessing.
- **3:28 and 4:3.** The orig fields now give Greek. I could not check which manuscripts read 8,300 in Wevers' apparatus. The witness line still says "some manuscripts".
- **10:10.** The orig is now "(adds Deuteronomy 1:6-8, recast as God's own speech)", the Syro-Hexapla claim is removed, and the entry says the exact Samaritan text was not checked.
- **2:14.** The reference now reads "Numbers 10:29".

**Large numbers (finding 8).** I rewrote the chapter 1 essay.
- **Literal.** It now gives the Exodus 38:25-28 silver arithmetic (301,775 shekels, which is 603,550 half-shekels) and names Keil.
- **Unit.** It adds Clark (1955) and J. W. Wenham (1967) on *'alluf*, Heinzerling (VT 50, 2000), Humphreys' reply (VT 50, 2000) and Rendsburg (VT 51, 2001), with the problem of 3:39-43.
- **Symbolic.** It gives *kol ro'sh* = 551, the remainder problem and Barnouin (VT 27, 1977).
- **Critical.** It names Noth, Budd and Levine, gives the arguments from schematic agreement, archaeology and hill-country population (Finkelstein), and describes Albright's census theory as a historical proposal.
- The 1:46 note gains the silver arithmetic and the *'alluf* view, and the new keys are in sources.json.

**Trumpets (finding 9).** I added a section, "Two silver trumpets", covering:
- *chatsotsrah* and *shofar*, and *taqa'* and *teru'ah*;
- Josephus, *Antiquities* 3.291, the Tutankhamun trumpets and the Arch of Titus;
- 31:6 and 2 Chronicles 5 and 13;
- Mishnah Rosh Hashanah 3:3 (I used 3:3, where the New Year shofar stands between two trumpets; on fast days, 3:4, the trumpets are in the middle) and 1QM;
- common and uncommon lines.

**Facts (findings 10-21).**
- **Notes and pages.**
  - Ch. 1 view J now cites Ramban on 1:45 and Numbers Rabbah, and the Sifre is dropped.
  - Twenty-one animals.
  - The Septuagint's *exapina* moves to the first view at 4:20.
  - Exodus 38:8; Taanit is now cited without "after the temple fell".
  - *befeta'*.
  - At 3:39 Rashi and Bekhorot 4a come first, with Moses alone counting as the second view.
  - Shabbat 116a is now attributed to R. Shmuel bar Nachmani in R. Yonatan's name, and R. Simeon ben Gamaliel's view is given.
  - Sotah 2:5 is now "the curse and the oath", and Psalm 89:52 is added to r.
  - Tamid 5:1 and 7:2.
  - At 1:3 the age-sixty sentence now reflects Bava Batra 121b.
- **book.json.** Avot 5:4 now reads "ten times that Israel tested God".
- **names-of-god topic.** It now reads "a biblical text with the name YHWH", and the older inscriptions are named.

**Minor findings 26-40.**
- **26.** New deb note at 5:6, and the text now reads "the wrongs people do to each other".
- **27.** Brought into line with content/terms.json: "lean" (8:10, 12), "token portion" (5:26), "act unfaithfully" (5:6, 12, 27), "present" for *hiqriv* (5:16, 25; 6:14, 16; 7:2-19; 8:9-10; 9:7, 13), "spatter" (8:7), "blue-violet" (chapter 4) and "enroll / those enrolled".
- **28.** At 4:12, 15 and 16 "holy place" is now "sanctuary", "holy furniture" or "holy utensils".
- **29.** "bread without yeast" throughout.
- **30.** Done (see 10:10 above).
- **31.** The coordinator moved the terms to content/terms.json. The spelling is now *hatta't* in the notes, as in terms.json.
- **32.** The Samaritan lists now agree: 10:10 and chapters 12-14, 20, 21, 27 and 31.
- **33.** Knierim and Coats (FOTL 4, 2005) are acknowledged in the book spec.
- **34.** Ramban's introduction to Exodus 25 is cited in "A walking Sinai", and the claim is narrowed to the camp's rings.
- **35.** Quotations are now in the site's Plain (Genesis 49:17; Leviticus 10:1; Leviticus 6:2) or fresh from `literal.js` (Psalm 80:2-3; Psalm 31:16; 1 Corinthians 10:5).
- **36.** The Irenaeus sentence is split: *Against Heresies* 3.11.8 links the creatures with the Gospels, and the banner link is later and rests on the rabbinic lion/man/ox/eagle tradition.
- **37.** The priesthood uncommon line now names 2 Kings 23:8-9.
- **38.** Tags changed: 8:19 is priesthood, 5:2 skin-disease, 8:7 red-heifer and 10:11 mount-sinai. Chapter 10 adds midian and holy-war, chapter 7 adds incense, and the sotah and priestly-blessing cores now name the book in every reference.
- **39.** I removed the 1:46 gloss; the 6:21 gloss went when its anchor was redrafted out. The 1:51 gloss now reads "anyone not authorized to come near". The 5:15 ephah gloss now reads "about two-thirds of a bushel".
- **40.** The quote is closed. The square-or-line debate is now cited to Jerusalem Talmud Eruvin 5:1 and Numbers Rabbah 2:9 as the review suggests (not checked further). The other two are fixed: "two of the three are not rounded", and "the first time the Torah describes the voice coming from between the cherubim".

**Rejected or partly rejected.**
- **38, golden-calf at 3:12.** I kept `firstborn`. That note is about the Levites replacing the firstborn; the golden-calf link is one sentence of it.
- **38, midian and holy-war on notes.** Notes carry one `top` each. The 10:29 note stays on `jethro` and the 10:9 note on `trumpets`, and the two topics are on the chapter 10 page instead.
- **6, "the sanctuary shekel".** Changed here, but Exodus is not mine to edit, so Exodus still has "the holy place's shekel".
