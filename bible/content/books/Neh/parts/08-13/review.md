# Hostile review: Nehemiah 8–13 (part 08-13)

Reviewed: plain.txt (209 verses, each compared with `node tools/literal.js Neh <ch>` and the Leningrad text in texts/orig/Neh.json), notes.json (132), variants.json (13), glosses.json (61), chapters.json (6 chapters, 20 settings cards), topics.json (27 contributions), sources.json (4 keys). Greek 2 Esdras checked at sacred-texts.com/bib/sep/ (es2018, es2020, es2021, es2022, es2023; es2019 could not be loaded, so 9:22 in the Greek is unverified). Quotations checked against the site's Plain of Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, 2 Samuel, 1–2 Kings, 1–2 Chronicles and Ezra. `node tools/build.js --check Neh/08-13` and `--check Neh` both report 0 errors, 0 warnings.

## Verdict

This is a careful, well-sourced part. The translation is close to the Hebrew in all 209 verses. Names in the lists of 10–12 follow the Hebrew of each verse and agree with the site's Ezra 2, 8 and 10 and 1 Chronicles 9 wherever the Hebrew agrees. The English verse numbering (9:38 = Hebrew 10:1) is used consistently. Chapter 9 and 13:1–2 reuse the site's Plain of Exodus 15 and 34, Leviticus 18:5, Deuteronomy 6, 7, 8, 10 and 23 and Numbers 14 almost word for word. Every Talmud and Mishnah citation I was asked to check is real and says roughly what the notes claim. The reform chapters are treated fairly, with named defenders and critics. The problems are in the variants and the settings. The 8:10 entry misreports the Greek: 2 Esdras has no "joy of the LORD." The entries miss the Greek's lack of "and in the days of Nehemiah" at 12:47, which bears directly on the 12:47 note. The Ketiv reading offered at 12:46 produces a garbled verse. The "why" given for following the Qere in names contradicts the policy in book.json. The ten-clause pledge of 10:28–39 has one generic settings card, so it never says whom each clause binds. Neither "Claude's reading" box says where published work overlaps. There are also a few factual slips about the text itself: the claim that God "did not desert" his people at 9:28, "three weeks after the feast," and "forty verses." No critical findings. **8 major, 26 minor.**

## Findings

### Major

**1. Major: variants.json 8:10 and notes.json 8:10 ("Joy as a stronghold") misreport 2 Esdras.**
The variant lists "Septuagint, 2 Esdras ... (ὅτι ἐστὶν ἰσχὺς ὑμῶν)" in the same reading as the Masoretic "for the joy of the LORD is your strength," and the note says the Greek "keeps the sense." It does not. 2 Esdras 18:10 reads "καὶ μὴ διαπέσητε, ὅτι ἐστὶν ἰσχὺς ὑμῶν," "do not fall away, for he is your strength." Neither χαρά nor εὐφροσύνη appears in the verse. The Greek has no "joy of the LORD" (חֶדְוַת יְהוָה). **Fix:** make three readings. MT: "the joy of the LORD is your stronghold." 2 Esdras: "for he is your strength," plain "because he is your stronghold." 1 Esdras 9:52: "the Lord will glorify you." In the "why," note that the Greek may have lacked the rare Aramaic-like word *chedvah* (found elsewhere only in 1 Chronicles 16:27 and Ezra 6:16), or shortened the line. Correct the note to match.

**2. Major: variant missing at 12:47, and the note at 12:47 ("Two leaders, and no Ezra") argues without it.**
2 Esdras 22:47 opens "καὶ πᾶς Ισραηλ ἐν ἡμέραις Ζοροβαβελ" and gives no "and in the days of Nehemiah." The note builds its whole case on the pairing of Zerubbabel with Nehemiah, and on reading the verse as a look back from a later writer, without telling the reader that the main Greek witness lacks Nehemiah's name here. This is the same kind of evidence the part uses at 8:9 (Nehemiah's title) and 12:36 (Ezra's name). **Fix:** add a variant on "and in the days of Nehemiah" (MT; 2 Esdras omits). Follow the MT, and explain that the shorter Greek may be a scribe's eye skipping from one "in the days of" to the next, or an older form. Add a sentence to the note, and to the 12:26 note on the joint mentions.

**3. Major: variants.json 12:46 gives a Ketiv reading that garbles the verse and leaves out the Greek support.**
The Ketiv reading's plain, "Asaph was head of the singers," replaces the anchor "there were heads of the singers." The verse then reads "in the days of David and Asaph, Asaph was head of the singers," which says Asaph twice and reproduces neither form of the Hebrew. The Ketiv רֹאשׁ still has "and Asaph" (וְאָסָף) before it, and its natural sense is "in the days of David and Asaph of old there was a chief of the singers." Reading "Asaph was head" needs a further change, dropping the "and." The entry also misses that 2 Esdras 22:46 has the singular, "ἀπ᾽ ἀρχῆς πρῶτος τῶν ᾀδόντων," "from the beginning, first of the singers," which supports the Ketiv. **Fix:** make the Ketiv plain "there was a chief of the singers." Mention the "Asaph was head" reading (with the "and" dropped) in `b` as an emendation, and add the Greek as a witness for the Ketiv.

**4. Major: the variants contradict book.json's stated Qere policy (10:19, 12:14, 12:16).**
book.json says the Plain follows the Qere "except in names where the written form has other support." The 10:19 and 12:14 "why" fields say instead that the Plain follows the Qere "as the site does for names." At 10:19 the Ketiv Nobai has Greek support (Νωβαι, as the entry itself says). At 12:16 the Ketiv Adaia has Greek support (Αδαι). By the book's own rule both should follow the Ketiv, or the rule needs an exception. **Fix:** either follow the Ketiv at 10:19 and 12:16, or write a "why" that explains the exception (for example, that at 12:16 the list order shows Iddo's house is meant). Ask the book.json owner to reword the policy so the two files agree. The topic contribution ketiv-qere should then match.

**5. Major: chapters.json ch 10, settings: one card for the whole pledge of 10:28–39 (item 7: law blocks).**
The pledge is a block of law with at least seven clauses, but the "10:28–39" card only says the terms "bind every family." STYLE asks, for each law, whom it binds, where and when, and what problem it answers. Here those differ clause by clause:
- **Marriage (10:30)** binds the fathers who give and take daughters for their sons.
- **Sabbath trade (10:31a)** binds Judean buyers, not the foreign sellers. The card should say so, because 13:19–21 later extends the rule to the sellers by closing the gates.
- **Seventh year and debts (10:31b)** binds landholders and creditors. It answers the debt crisis of chapter 5.
- **The third of a shekel (10:32–33)** binds the pledgers "on ourselves" and pays for the Temple calendar, because the Persian grants were not enough.
- **Wood by lot (10:34)** binds the priests, Levites and people by ancestral houses at set times.
- **First fruits, firstborn and dough (10:35–37a)** bind farming households and go to the priests.
- **Tithes (10:37b–39)** bind farmers to give to the Levites in their towns, with a priest present, and the Levites to carry a tenth up to the Temple.

The card also gives the chapter 13 abuses ("Each term answers a real problem ... (13:23–24) ... (13:10)") as settled fact, while its own views say the order is debated. **Fix:** split the card into three or four cards (marriage and Sabbath; seventh year; Temple support; tithes), each with `to` naming exactly who is bound and a `why` tied to the law it applies (Deuteronomy 7:3; Exodus 20:10 and Amos 8:5; Exodus 23:11 and Deuteronomy 15:2; Exodus 30:13; Leviticus 6:13; Numbers 18:21–26). Mark the link to chapter 13 as one view.

**6. Major: chapters.json ch 8 and ch 13, the two spec boxes do not say where published work overlaps (STYLE rule 4).**
Both boxes are correctly labeled "Claude's reading." Neither says what is already published.
- **"Why did they weep?" (ch 8)** is not new on this site: note 8:9 ("Why did they weep?") already lists "Overwhelming emotion: a scattered people hearing its own story read aloud" as a published view. The only new element is the link to Deuteronomy 30:1–5.
- **"A book that ends unfinished" (ch 13)** is a widely published reading. Commentators on the book's ending, and Clines on the Nehemiah memoir (`clines-nehemiah-memoir` is already in content/sources.json), read 13:4–31 as showing that the reforms do not hold and that the book ends open.

**Fix:** add a sentence to each box saying which published readings it overlaps and what, if anything, is new (for the first, the Deuteronomy 30 link). Cite sources in `s` where possible.

**7. Major: notes.json 10:39 ("The last promise") misstates the prayer.**
"The prayer had said four times that God did not desert his people (9:17, 9:19, 9:28, 9:31)." At 9:28 the prayer says the opposite: "you deserted them, leaving them in their enemies' power" (וַתַּעַזְבֵם). The verb *azav* is used four times, but once of God deserting them. **Fix:** "The prayer uses this verb four times: three times God did not desert them (9:17, 9:19, 9:31), and once he left them to their enemies for a time (9:28)." The contrast with 10:39 and 13:11 still works, and is sharper.

**8. Major: chapters.json ch 9 `sum` has two errors in the lead paragraph.**
(a) "Three weeks after the feast, the mood changes." The feast ended on the 22nd (8:18; Leviticus 23:36) and the fast is on the 24th (9:1). The part's own note at 9:1 and the fasting topic both say "two days." The three weeks run from the reading on the 1st, not from the feast.
(b) The second paragraph says the prayer retells "the prophets, and the exile." Notes 9:6 and 9:36 and the ch 9 C view stress, with Williamson, that the prayer "says nothing of exile in Babylon." 9:30 speaks only of being handed over to "the peoples of the lands."

**Fix:** "Two days after the feast ..." and "... the prophets, and the handing over to foreign peoples."

### Minor

**9. Minor: the Greek's shorter lists in chapters 11–12 are under-reported, and the inferred claim is partly wrong.**
The content says only that "the Greek of 2 Esdras has no text for 12:4–6" (note 12:1), and that is correct. The claim that the Greek lacks 11:20–21 and 11:28–35 does not appear in the files. Checked against sacred-texts 2 Esdras 21–22, the evidence is:
- **Chapter 11:** the Greek has no 11:16, 11:20, 11:21, 11:28, 11:29 or 11:32–35. It does have shortened forms of 11:30 ("Λαχις καὶ ἀγροὶ αὐτῆς ... ἐν Βεηρσαβεε") and 11:31 ("ἀπὸ Γαβα Μαχαμας"). So "11:28–35" overstates by two verses and leaves out 11:16. In 11:17 the Greek also drops "the leader who began the thanks at prayer; Bakbukiah, the second among his brothers" and goes straight to "καὶ Ωβηδ υἱὸς Σαμουι."
- **Chapter 12:** the Greek also cuts 12:3 to "Σεχενια." It lacks the four names of 12:7 (Sallu, Amok, Hilkiah, Jedaiah). Its 12:9 has no names at all ("εἰς τὰς ἐφημερίας"). In 12:41 it has "Βενιαμιν" for Miniamin. In 12:42 it has "καὶ ἐπεσκέπησαν" in place of "with Jezrahiah in charge."

**Fix:** one note (or a short `b` on the 11:14 entry) that sets out the Greek's shortened lists in 11:16–35 and 12:1–9. Correct note 12:1 to "has no text for 12:4–6 and keeps only one name in 12:3 and none in 12:7 and 12:9." Note 11:17 ("keeps only the names") should say it also drops Bakbukiah.

**10. Minor: variants.json 11:14 is not a variant between witnesses.**
Both readings are "Masoretic Text," which is a question of interpretation, and the one real witness difference ("The Greek drops the phrase," confirmed: the verse ends "ἐπίσκοπος ἐπ᾽ αὐτῶν Βαδιηλ") appears only in the "why." It also repeats note 11:14 almost word for word. **Fix:** make the readings MT "son of Haggedolim" against 2 Esdras "Badiel" with no father (plain ""), and leave the name-or-description question to the note.

**11. Minor: a variant is missing at 13:29.**
2 Esdras 23:29 reads "ἐπὶ ἀγχιστείᾳ τῆς ἱερατείας," "for the kinship (right of redemption) of the priesthood." The translator read the consonants of גָּאֳלֵי, "defilements," as the root *ga'al* "redeem, act as kinsman" rather than *ga'al* "defile." The sense changes from "how they stained the priesthood" to "the kinship of the priesthood." That fits the marriage of 13:28. **Fix:** add a short entry following the MT. (13:22–31 is otherwise close in the Greek. 13:31 has "our God" for "my God," which needs no entry.)

**12. Minor: there is no note on 12:38, "set off the other way."**
The Hebrew לְמוֹאל, "opposite, in front," is widely emended to לִשְׂמֹאל, "to the left," to match "to the right" in 12:31. The BSB has "to the left," and the Greek has "συναντῶσα αὐτοῖς," "meeting them." **Fix:** a `deb` word note with the three readings. The Plain's "the other way" is a fair hedge.

**13. Minor: plain.txt 9:22 silently smooths the Hebrew.**
The Hebrew has "the land of Sihon *and* the land of the king of Heshbon" (וְאֶת־אֶרֶץ). The Plain makes it an apposition, "Sihon's land, the land of the king of Heshbon," which is the ASV/WEB "even" reading. That is defensible: Sihon was king of Heshbon, and the "and" is often taken as a copying slip. But nothing tells the reader. **Fix:** add one line to note 9:22. I could not load 2 Esdras 19 to check whether the Greek has the second "land of"; check it.

**14. Minor: small translation points.**
- **8:14:** "which the LORD gave by Moses' hand." The Hebrew is צִוָּה, "commanded," as in 8:1, where the Plain has "commanded." Use "commanded" in both.
- **10:31:** "The peoples of the land may bring their wares ..." reads as permission. The Hebrew is a conditional relative ("the peoples of the land who bring ... we will not take"). Use "If the peoples of the land bring ...".
- **13:21:** "I will use force on you" flattens יָד אֶשְׁלַח בָּכֶם, "I will lay a hand on you." Keep the hand, or keep "force" and drop the gloss's "I'll have you arrested," which is more than the text says.

**15. Minor: quotations in chapter 9 differ from the site's Plain where the Hebrew is the same.**
The main echoes match exactly: Exodus 15:5, 10; Exodus 34:6; Leviticus 18:5; Deuteronomy 6:11; 7:9; 8:4; 10:17; 23:3–5; Numbers 14:4. A few smaller ones do not:
- 9:12 has "you guided them" (from נחה) where Exodus 13:21 has "to lead them." Nehemiah itself has "leading them" at 9:19 for the same verb.
- 9:26 has "flung ... behind their backs" where 1 Kings 14:9 has "threw behind your back," for the same verb הִשְׁלִיךְ.
- 9:6 has "the heavens of the heavens" where Deuteronomy 10:14 has "the highest heavens" and 1 Kings 8:27 has "the heavens above the heavens," all for שְׁמֵי הַשָּׁמַיִם.

**Fix:** use "led" in 9:12 and "threw" in 9:26. For 9:6, keep the literal phrase (note 9:6 explains it) or raise the cross-book inconsistency in terms.json.

**16. Minor: a little ESV/KJV wording carries over.**
- 9:38 "a firm agreement in writing" follows the ESV's "a firm covenant in writing" in shape. The Hebrew is two participles, "making a firm agreement and writing." Use "we are making a firm agreement and writing it down."
- 8:4 "that had been made for the purpose" is the KJV/ESV phrase "for the purpose." The Hebrew לַדָּבָר is literally "for the matter"; "built for the occasion" would do.

No other verse is close enough to a modern version to need redoing.

**17. Minor: notes.json 9:32 ("The God of Deuteronomy") says "After forty verses about history."**
The history runs 9:6–31, 26 verses. **Fix:** "After more than twenty verses of history."

**18. Minor: notes.json 11:17 ("Leader of the thanksgiving") says the verse names "the three singer families" but names two.**
It names Asaph and Jeduthun. Heman is not in the verse. **Fix:** "two of the three singer families ... Heman's line is not named."

**19. Minor: chapters.json ch 10 `sum` says "twenty-two priestly houses."**
10:2–8 has 21 names, and note 10:2 says "The 21 priestly names." The total of 84 only works if Zedekiah (10:1) is counted as a priest, which note 10:1 doubts. **Fix:** "Nehemiah the governor and Zedekiah, twenty-one priests, seventeen Levites and forty-four leaders of the people."

**20. Minor: notes.json 8:6 ("Amen, amen") has prose and `r` that do not match.**
The prose cites Psalm 89:52, Lamentations 2:19 and 2 Chronicles 7:3, which are not in `r`. `r` has Psalm 106:48, which has a single Amen and is not in the prose. **Fix:** align them.

**21. Minor: notes.json 8:14 says "Deuteronomy names the feast but does not mention booths."**
Deuteronomy 16:13 calls it the Feast of Booths (*sukkot*). **Fix:** "names the Feast of Booths but does not command living in booths."

**22. Minor: notes.json 13:2 implies that Deuteronomy differs.**
"Nehemiah's 'he hired' is singular" suggests Nehemiah differs from Deuteronomy. Deuteronomy 23:5 (Hebrew) also has the singular אֲשֶׁר שָׂכַר. The site's Deuteronomy Plain supplies "Moab" as subject. **Fix:** "As in Deuteronomy, the verb is singular: Moab, or its king Balak."

**23. Minor: notes.json 9:37 contradicts the part's account of who prays.**
The note ends "Nehemiah, the governor, was himself the king's officer: the community's leader prays as a subject." Nehemiah is not mentioned in chapter 9, and the part's own setting card and variant give the prayer to the Levites. **Fix:** drop the sentence, or say "the community's governor was himself the king's officer."

**24. Minor: chapters.json ch 8 J view misattributes the Monday and Thursday readings.**
It says "Ezra is credited with instituting the reading of the Torah on Mondays and Thursdays (Bavli Bava Kamma 82a)." The Gemara there objects that the Monday and Thursday readings were instituted earlier, by the prophets of Moses' day. It credits Ezra with the Sabbath afternoon reading and with three readers reading ten verses on those days. **Fix:** "Ezra is credited with setting the Torah readings on Sabbath afternoons and fixing how many read on Mondays and Thursdays (Bavli Bava Kamma 82a)."

**25. Minor: chapters.json ch 10 X view makes an unsourced claim about the Puritans and Covenanters.**
"Puritan church covenants and the Scottish Covenanters often appealed to 9:38 and this chapter." That is plausible: covenant-renewal sermons in Scotland and New England did use Nehemiah 9–10, along with 2 Chronicles 15 and 2 Kings 23. But no source is given, and "often" is unsupported. **Fix:** cite a history of covenanting (for example, on the National Covenant of 1638 or New England covenant renewals), or soften to "appealed, among other texts, to ...".

**26. Minor: the Gerizim dating is not attributed (notes.json 13:28; topics.json samaritans).**
"Excavations on Mount Gerizim suggest a sanctuary there by/already in the 400s BC." The dating is correct as Yitzhak Magen's: a first phase in the mid-5th century BC, from coins and pottery. But it is his interpretation, and some scholars place the first phase later. `magen-gerizim` already exists in content/sources.json. **Fix:** "Yitzhak Magen, who excavated the site, dates a first sanctuary to the mid-400s BC," and add the source key.

**27. Minor: the population figure contradicts the sources the part cites.**
Note 13:25 and the ch 13 deep section say the community was "a few thousand people in a small province." The part's own sources are much higher: Carter estimates about 13,000 to 20,000 for Persian-period Yehud, and Lipschits about 30,000. Only Jerusalem was a few thousand or fewer (the ch 11 A view says "a few hundred to 1,500"). **Fix:** "a province of perhaps twenty or thirty thousand, with a capital of a few thousand at most."

**28. Minor: topics.json aramaic states a debated point as settled.**
It says Aramaic was the language "which most Judeans of the Persian period spoke." That is debated, and 13:24 shows "Judean" (Hebrew) still spoken and expected. **Fix:** "which many Judeans of the Persian period spoke."

**29. Minor: notes.json 13:31 ("The last words") states the Aleppo Codex's ending as fact.**
It says that in "the Leningrad and Aleppo codices ... this line is the last sentence of the Hebrew Bible." The Aleppo Codex's order is known (Chronicles first, Ezra–Nehemiah last), but its final leaves, including the end of Nehemiah, were lost after 1947. **Fix:** "In the Leningrad Codex, and by its known order in the Aleppo Codex, whose last pages are now lost, ...".

**30. Minor: a Jewish reading of 9:32 is missing.**
The part cites Bavli Yoma 69b for 9:4 (correctly: the cry to remove the urge to idolatry). On the same page, Yoma 69b explains why the "Men of the Great Assembly" have that name: in 9:32 they "restored the crown" by saying again "the great, mighty and fearsome God," after Jeremiah and Daniel had each left out one of the titles. **Fix:** add a sentence to note 9:32 (`bavli-yoma` exists).

**31. Minor: on where chapter 8 belongs, one view has no named holders and another is not linked.**
Note 8:1 and the ch 8 deep section are fair, and the Williamson attribution (after Ezra 8) is right. But view (3), after Ezra 10, as in 1 Esdras, names no modern holder. The 398 BC dating of Ezra, which would put the reading after Nehemiah's governorship, appears only in note 12:26, not where the placement is discussed. **Fix:** name a holder of view 3, or say "a minority". Add one line linking to the 12:26 note.

**32. Minor: some settings cards state debated points as settled or leave things out.**
- **13:28–31** gives `when` "At the end of his second term" as fact. The text gives no date.
- **10:1–27** gives `to` as "The assembly of chapter 9, and every later reader," which is vague. It should say the sealed document was a record for the Temple archive and the community, with the seals of the heads of houses.
- **13:15–22** does not mention the prayer of 13:22.
- **13:28–31** does not say whom the reforms of 13:30–31 bind (the priests' and Levites' duties; the wood and first fruits brought by the people), or name Leviticus 21:14 as the reason for 13:28.
- **11:23**: the king's order for the singers has no card. A short card would show the two views (David or the Persian king) from note 11:23.

**33. Minor: style, some long sentences.**
10:28–29 is one sentence of about 88 words across two verses. 13:5 (45 words) and 13:25 (43 words) are also long. 10:28–29 can be split ("... all who could know and understand. They now stand firmly with ...") without losing the Hebrew structure.

**34. Minor: glosses.**
- **13:4** "He was related to Tobiah" asserts what the note calls only possible. Use "He was close to (perhaps related to) Tobiah."
- **12:44** "the clergy's legal portion" uses a church word. Use "the Temple staff's portion set by the law."
- **13:21:** see finding 14.

### Checked and found sound

- **Name policy:** every proper noun in 10–12 matches the Hebrew form of its verse, including Micah in 11:17 against Mica in 11:22, Jehonathan in 12:18 against Jonathan in 12:11, 12:14 and 12:35, Maadiah in 12:5 against Moadiah in 12:17, and Ginnethoi in 12:4 against Ginnethon in 12:16. Spellings agree with the site's Ezra 2, 8 and 10 and 1 Chronicles 9 wherever the Hebrew agrees: Pahath-moab, Bezai, Michmash, Azmaveth, Hassenuah, Jachin, Malchijah, Zichri, Netophathites, Kelita, Mattenai, Adna. Where the Hebrew differs (Adonijah and Adonikam; Amashsai and Maasai; Micah and Mica), the English differs too, and note 10:14 flags Adonijah and Adonikam.
- **Numbering:** 9:38 is in chapter 9 and chapter 10 has 39 verses. No reference in the part uses Hebrew numbers.
- **Terms:** the part follows terms.json for YHWH, the Israelites, *hesed*, Sea of Reeds, grain, burnt and sin offering, make atonement, act unfaithfully, rules, rulings, commands, laws and decrees, temple servants, high priest, the gate names, *nagid* "officer in charge," *nokhri* "foreign," and "remember me for good, my God."
- **Exodus 34:6:** 9:17 and 9:31 keep the site's words and correctly reverse the order to "gracious and compassionate," as the Hebrew does. 9:17 follows the Qere חֶסֶד (Ketiv "and loyal love"), which is a spelling difference and needs no entry.
- **Rabbinic citations:** Megillah 3a and Nedarim 37b (*meforash* as Targum, verse division, accents), Sotah 39a, Yoma 69b (9:4), Yoma 85b, Sukkah, Mishnah Avot 1:1, Taanit 4:5 (nine wood-offering times), Shevuot 2:2 (the king, the prophet, the Urim and Thummim, the Sanhedrin, two thanksgiving offerings and song; the Gemara at Shevuot 15b–16a does draw on Nehemiah 12), Yevamot 8:3, Sanhedrin 93b (self-credit, 5:19; disparaging predecessors, 5:15; Daniel), and Bava Batra 15a. All are real and correctly described, apart from finding 24.
- **Scholars:** Williamson and Blenkinsopp on "Nehemiah, who was the governor" in 8:9 as a probable addition, and Williamson on the chapter 9 prayer coming from those who stayed in the land, are correctly attributed. Washington (*Biblical Interpretation* 11, 2003), Janzen (JSOTSup 350), Blenkinsopp on Udjahorresnet (JBL 106, 1987), Clines (JSOT 21, 1981), Boda (BZAW 277), Lipschits (2005) and Carter (JSOTSup 294) are real works, cited correctly. The four new source keys are unique and used.
- **Greek checks:** 2 Esdras readings at 8:7, 8:9, 8:15 ("κυπαρισσίνων") and 10:1 (no title) are confirmed. 1 Esdras 9:49 "Attharates" and 9:52 are correct.
- **Fairness on the reforms:** the case for protecting a small community and the case for harsh exclusion are each given in a strong form, with named scholars on both sides and the rabbinic view.
- **Mechanics:** both build checks pass. Anchors are exact and nest correctly.

## Fixes applied

All findings were fixed at the source (the scratch generators in neh-08-13/ now apply review patches: patch_review.py, variants_patch.py, chapters_patch.py). Both `--check Neh/08-13` and `--check Neh` report 0 errors, 0 warnings.

**Major**
1. 8:10: the variant now has three readings: MT "the joy of the LORD"; 2 Esdras "for he is your strength" (plain "because he is your stronghold"); 1 Esdras 9:52. The "why" notes that *chedvah* is rare (1 Chronicles 16:27; Ezra 6:16). The note now says that neither Greek version has "the joy of the LORD."
2. 12:47: new variant (MT vs 2 Esdras, which omits). The MT is followed, and the "why" gives the eye-skip and older-form explanations. The 12:47 and 12:26 notes now mention it.
3. 12:46: the Ketiv plain is now "there was a chief of the singers." 2 Esdras (singular) is cited as a witness for it. "Asaph was chief" is described as an emendation that drops the "and."
4. Name policy:
   - 10:19 now follows the Ketiv, Nobai (Greek Νωβαι).
   - 12:14 now follows the Ketiv, Malluchi, which is closer to Malluch of 12:2 and to the Greek Μαλουχ.
   - 12:16 keeps the Qere, Iddo. The "why" explains the exception: the parallel list of 12:4 outweighs the Greek Αδαι.
   - The ketiv-qere topic and PROGRESS were updated to match.
   - **Proposed book.json wording** (for the owner): replace "the Plain follows the Qere, except in names where the written form has other support;" with "the Plain follows the Qere, except in names where the written form has other support (the Greek or a parallel list), unless a parallel list in the book itself shows the Qere's name is meant (as at 12:16);"
5. The 10:28–39 card was replaced by seven cards:
   - 10:28–29, the oath;
   - 10:30, marriage (fathers; Deuteronomy 7:3);
   - 10:31, Sabbath trade and the seventh year (Judean buyers, not sellers; creditors and landholders; Exodus 20:10, Amos 8:5, Exodus 23:11, Deuteronomy 15:2; the gates of 13:19–21);
   - 10:32–33, the third of a shekel (Exodus 30:13);
   - 10:34, wood by lot (Leviticus 6:12–13);
   - 10:35–37, first fruits, firstborn and dough;
   - 10:37–39, tithes (Numbers 18:21–26).
   The link to chapter 13 is now given as one view.
6. Spec boxes:
   - Chapter 8: the box now acknowledges the view already in the 8:9 note and says that only the Deuteronomy 30 and seventh-month link is new.
   - Chapter 13: the box now names the published overlap (commentators; Clines, `clines-nehemiah-memoir`) and adds `s`.
7. 10:39: the note now says three times God did not desert them, and once (9:28) he left them to their enemies.
8. Chapter 9 summary: "Two days after the feast ended"; "the handing over to foreign peoples" replaces "the exile."

**Minor**
9. New note on 11:16, "The shorter Greek lists." It sets out exactly what the reviewer verified: no 11:16, 11:20, 11:21, 11:28, 11:29 or 11:32–35; only short forms of 11:30–31; 11:14 has no father's name; 11:17 drops Mattaniah's title and Bakbukiah; 12:3 has Shecaniah only; no 12:4–6; no names in 12:7 or 12:9; Benjamin in 12:41; no Jezrahiah in 12:42. The 12:1 and 11:17 notes were corrected. New variants at 12:41 and 12:42.
10. 11:14 variant: now MT vs 2 Esdras "Badiel" (empty plain). The name-or-description question stays in the note.
11. New 13:29 variant ("kinship of the priesthood"). It also mentions "our God" in 13:31.
12. New `deb` note at 12:38 on *lemo'l* / *lismo'l* / the Greek "meeting them."
13. 9:22: the note now explains the "and." I checked 2 Esdras 19:22 myself (blueletterbible): it has "the land of Sihon king of Heshbon," with no second "land of."
14. Plain:
   - 8:14 "had commanded."
   - 10:31 "If the peoples of the land bring ..."
   - 13:21 keeps "force"; the gloss is now "I'll lay hands on you."
15. Plain: 9:12 "led"; 9:26 "threw" (note and gloss updated). 9:6 keeps "the heavens of the heavens," which the note explains. I disagree that this needs a terms.json entry: the literal phrase is deliberate here, and I leave the cross-book harmonization to the coordinator.
16. Plain: 9:38 "we are making a firm agreement and writing it down"; 8:4 "built for the occasion." Both were logged in the drift audit.
17. 9:32: "more than twenty verses of history."
18. 11:17: "two of the three singer families ... Heman's line is not named."
19. Chapter 10 summary: "Nehemiah the governor and Zedekiah, twenty-one priests, ..."
20. 8:6: `r` now matches the prose.
21. 8:14: Deuteronomy "names the Feast of Booths but does not command living in booths."
22. 13:2: "As in the Hebrew of Deuteronomy, the verb is singular: Moab, or its king Balak."
23. 9:37: the sentence now reads "The community's own governor was himself the king's officer."
24. Chapter 8 J view: Bava Kamma 82a attribution corrected.
25. Puritans and Covenanters claim cut (no source to hand).
26. Gerizim dating credited to Yitzhak Magen (`magen-gerizim`), with the later dating noted, in the 13:28 note and the samaritans topic.
27. Population: "a province of perhaps twenty or thirty thousand, with a capital of a few thousand at most," in note 13:25 and the chapter 13 deep section.
28. aramaic topic: "many Judeans."
29. 13:31: Leningrad stated as fact; the Aleppo Codex is said to have the same order, with its last pages lost after 1947.
30. 9:32: Yoma 69b on the Men of the Great Assembly and "the great, mighty and fearsome God" added (`bavli-yoma`).
31. Placement: view 3 is now "a minority," with a caution about 1 Esdras. Both the note and the deep section now link the 398 BC dating to the 12:26 note.
32. Cards:
   - 13:28–31 `when` no longer asserts a date. Its `why` now names Leviticus 21:14 and says whom 13:30–31 binds.
   - 10:1–27 `to` now describes the sealed archive record.
   - 13:15–22 now mentions the prayer of 13:22.
   - New 11:23 card, with two views (the Persian king or David).
33. Plain:
   - 10:28–29 split ("As for the rest of the people, ... understand." / "They now stand firmly ...");
   - 13:5 split ("... by command. The priests' contributions were kept there too.");
   - 13:25 split.
34. Glosses: 13:4 "close to (perhaps related to)"; 12:44 "the Temple staff's portion set by the law"; 13:21 as in item 14.

**Coordinator's extra items (from the 1–7 review)**
- 13:28: the later Sanballats now have a separate note, "Later Sanballats." It covers the Wadi Daliyeh papyri and seal (`gropp-wadi-daliyeh`, new key in parts/08-13/sources.json) and Cross's Sanballat II/III proposal (`cross-judean-restoration`). It keeps apart Josephus's Sanballat under Darius III and Alexander (Antiquities 11.302–347), and it gives both views on identity and dating. The samaritans topic was revised the same way.
- 1 Esdras: I checked every mention. Part 08-13 always says that 1 Esdras places the reading after the Ezra 10 material (1 Esdras 9:37–55). The "after Ezra 8" view is credited only to scholars (Torrey, Rudolph, Myers, Williamson).
- Seganim and the wording of "remember me for good" were left unchanged, as asked.
