# Hostile review: Proverbs 23–24 (parts/23-24)

## Verdict

This is a strong part. The translation is rebuilt from the Hebrew and is mostly free of NIV/ESV drift. The rod, the drinker's poem, 24:11–12 and the Greek order of 24:23–34 get honest, well-sourced treatment. Every speech unit and the 24:23 collection has a settings card with `readers`. The repeated sayings that touch these chapters line up with the other parts: 22:28/23:10a, 11:14b/24:6b, 20:18b/24:6a, 6:10–11/24:33–34, 24:23b/28:21a and Psalm 37:1/24:19a. `node tools/build.js --check Pro/23-24` reports 0 errors and 0 warnings.

Five problems need fixing before this can be called reviewed:
- 24:20b, which this part copies from 13:9b, reproduces the NIV of 24:20b word for word.
- Amenemope chapter 11 is misdescribed in three places.
- 23:3 and 23:6b are the same Hebrew line but are rendered differently, and a note claims they match.
- 23:23 adds "for money" to the text.
- The Armenian Ahiqar quotation behind the rod note could not be verified, while the closest and verifiable parallel, the Aramaic papyrus, is not quoted.

The rest are minor: term consistency, a few small additions, variant mechanics and unsourced claims.

Counts: 0 critical, 5 major, 21 minor.

## Findings

### Major

**1. Major: plain.txt 24:20b (and 10-15 plain.txt 13:9b): NIV wording.**
"the lamp of the wicked will be snuffed out" matches the NIV of 24:20b exactly ("...and the lamp of the wicked will be snuffed out"). 13:9b differs from the NIV of 13:9b by one auxiliary verb. The Hebrew נֵר רְשָׁעִים יִדְעָךְ (ner resha'im yid'akh) means "the lamp of the wicked goes out / is extinguished". It does not force "snuffed out". Under the Lead decision, 24:20b follows 13:9b, so both must change together.
- Fix: "the lamp of the wicked will go out" (this also matches 20:20 "your lamp will go out"), in 13:9b and 24:20b.
- Then update the 24:20 note, which says the two lines have the same wording, and the 24:20 gloss anchor.

**2. Major: notes.json 23:8 ("Amenemope: the great man's mouthful"), chapters.json ch. 23 deep "Where the Egyptian parallels end" (23:6–8 bullet), topics.json `ancient-near-east`: Amenemope chapter 11 misdescribed.**
- The note says chapter 11 "warns against craving the food of a rich man". The deep section says "craving a rich man's food". The topic section says "the stingy man's food".
- Chapter 11 actually opens: "Do not covet a poor man's goods... A poor man's goods are a block in the throat" (Lichtheim's translation, as in Hallo and Younger, <i>Context of Scripture</i> 1.47; also van den Dungen's version, which follows Lichtheim). Its subject is coveting a dependent's property. The vomiting image belongs to that warning. The "great man's" mouthful comes later in the chapter.
- So the parallel with 23:6–8 is in the images (craving, throat, vomiting), not in the situation. In Proverbs the guest eats with a stingy host. Amenemope warns against covetousness toward the poor.
- Fix:
  - Restate chapter 11 accurately in all three places.
  - Say that Proverbs reuses the images for a different situation.
  - Recheck the quoted Budge wording ("storm in the gullet", "the mouthful of bread of a great man", lines 259, 269–270) against Budge's 1924 text. I could not open Budge to confirm these words or line numbers. If they cannot be checked, quote Lichtheim instead (`lichtheim-ael` is already cited).

**3. Major: plain.txt 23:3a and 23:6b: the same Hebrew line rendered two ways, and a note that says otherwise.**
- 23:3a אַל־תִּתְאָו לְמַטְעַמּוֹתָיו and 23:6b וְאַל־תִּתְאָו לְמַטְעַמֹּתָיו are the same words: "do not crave his delicacies".
- The Plain has "Do not crave his fine foods" (23:3) and "do not long for his fine dishes" (23:6).
- The 23:3 note says, "The same phrase 'his fine foods' returns in 23:6", which is not true of the current Plain.
- The repetition is deliberate (ruler, then stingy host), and the brief requires a repeated line to keep the same words.
- Fix: 23:6b "and do not crave his fine foods."

**4. Major: plain.txt 23:23a: an addition to the text.**
- "Purchase truth, and do not part with it for money" adds "for money". The Hebrew is אֱמֶת קְנֵה וְאַל־תִּמְכֹּר: "buy truth and do not sell (it)".
- "Part with" also softens "sell", which is the point of the buy/sell pair.
- This looks like an over-correction to avoid the NIV's "Buy the truth and do not sell it". The Hebrew forces "buy ... do not sell".
- Fix: "Buy truth, and do not sell it: / wisdom, discipline and understanding." Then update the anchor of the 23:23 note and the "Purchase truth" gloss to match. "Buy truth" with "do not sell" is forced by the Hebrew, so it is not drift.

**5. Major: notes.json 23:13 ("Ahiqar and the rod"): unverified quotation, and the best parallel left out.**
- The long "Armenian version, as translated in Charles's edition" quotation could not be verified. In particular, "he is rendered clever quietly, he does not die" could not be checked. The caller flagged this item as possibly cited from memory.
- The Syriac line is confirmed in substance. The Göttingen Ahiqar edition (Cambridge Add. 2020, saying 22) has "My son, do not withhold your son from punishments..."; Charles's "withhold not thy son from stripes" is the older wording of the same line.
- The Elephantine Aramaic, which is the oldest and closest parallel, is only gestured at ("a similar saying, reported in Lindenberger's translation"). Lindenberger's translation reads: "Spare not your son from the rod; otherwise, can you save him [from wickedness]? If I beat you, my son, you will not die; but if I leave you alone, [you will not live]."
- That Aramaic "you will not die" is the strongest evidence for the note's point, and it also bears on the 23:13 "two readings" note.
- Fix:
  - Quote Lindenberger's Aramaic first, marking the restorations in brackets.
  - Keep the Syriac.
  - Keep the Armenian only after checking it against Conybeare's text in Charles, <i>APOT</i> vol. 2. Otherwise drop it.
  - Update the ch. 23 deep section "The rod: what the Hebrew says", which calls the Ahiqar saying "almost identical": that is true of the Aramaic, so cite it.

### Minor: translation and terms

**6. Minor: plain.txt 24:9b: term not followed.** "a mocker disgusts everyone" renders תוֹעֲבַת לְאָדָם לֵץ. terms.json gives to'evah as "abhorrent", and 17:15 uses "abhorrent".
- Fix: "and people find a mocker abhorrent."

**7. Minor: plain.txt 23:21a: softened and inconsistent.** The noun סֹבֵא (sove') is "drunkard", as in Deuteronomy 21:20, the pair the 23:20 note points to. The Plain has "wine-swillers" in 23:20 but "the drinker" in 23:21. "Drinker" weakens the word.
- Fix: "For the drunkard and the glutton..." This also strengthens the Deuteronomy 21:20 link.

**8. Minor: plain.txt 23:13a: the object is reversed.** "Do not hold a youth back from discipline" can be read as "do not keep the youth away from discipline". The Hebrew אַל־תִּמְנַע מִנַּעַר מוּסָר is "do not withhold discipline from a youth".
- Fix: "Do not hold back discipline from a youth." Then update the anchor of the two 23:13 notes.

**9. Minor: plain.txt 23:7a: "so is he" dropped.** The Hebrew כְּמוֹ־שָׁעַר בְּנַפְשׁוֹ כֶּן־הוּא has two parts, "as he reckons within, so he is". The Plain keeps only the reckoning. That is defensible as a paraphrase, but the dropped כֶּן־הוּא (ken hu) is exactly what the KJV note discusses.
- Fix: "For he is the kind who keeps score inside." Alternatively, keep the Plain and say in the 23:7 note that ken hu is folded in.

**10. Minor: plain.txt 23:34a, 23:16a, 24:2b: small additions.**
- 23:34a: "trying to sleep" adds "trying". The Hebrew is "like one lying down".
- 23:16a: "dance for joy" adds an image. The verb is עלז, "exult".
- 24:2b: "trouble is all their lips talk about" adds "all".
- Fix:
  - 23:34a "like a man lying down out on the open sea"
  - 23:16a "My insides will be glad" or "will exult"
  - 24:2b "and their lips talk of trouble"

**11. Minor: plain.txt 24:18a: "lest" lost.** The Hebrew is פֶּן־יִרְאֶה יְהוָה, "or else the LORD will see". "for the LORD may see it" turns a warning into a possibility.
- Fix: "or the LORD will see it and count it evil, / and turn his anger away from your enemy."

**12. Minor: plain.txt 23:17, 24:1, 24:19 (and 3:31): one verb, two renderings.** The verb is qinne' in all of them. The Plain has "jealous" in 3:31, 23:17 and 24:1, but "envy" in 24:19. The 24:19 choice is right, because it follows Psalm 37:1's Plain, but nothing tells the reader.
- Fix: add a sentence to the 24:19 note saying the verb is the one rendered "be jealous" in 23:17 and 24:1, and is "envy" here to match Psalm 37:1.

**13. Minor: plain.txt 24:30 ("a lazy man's field") and the heading "The lazy man's field" against terms.json.** The terms.json entry for 'atsel explicitly lists 24:30 under "lazy one / a lazy person; never 'sluggard'". "Man" is defensible, because the Hebrew has אִישׁ עָצֵל, and it parallels "a senseless man's" (אִישׁ חֲסַר־לֵב). But it departs from the term entry, which also governs the open "lazy man" / "lazy one" question between 10-15 and 01-09.
- Fix: either "a lazy person's field" to follow terms.json, or keep "man" and add a short note that 'ish is present. Then ask the lead to amend the terms entry.

**14. Minor: notes.json 24:33 ("A saying used twice"): the differences are understated.** The note says 6:11 and 24:34 "differ by one letter". In fact they differ in three places:
- כִמְהַלֵּךְ against מִתְהַלֵּךְ (a different form, not one letter);
- רֵאשֶׁךָ against רֵישֶׁךָ (spelling);
- singular וּמַחְסֹרְךָ against plural וּמַחְסֹרֶיךָ.

Because 24:34 has no "like" before the walker, the Plain's "like a drifter" follows 6:11, not the Hebrew of 24:34.
- Fix: list the three differences, and say that the Plain keeps 6:11's wording because the sense is the same.

### Minor: facts and sources

**15. Minor: notes.json 23:24: wrong collection.** The note says "The second Solomon collection opens, 'A wise son makes a father glad' (10:1)". 10:1 opens the first Solomon collection (10:1–22:16). The second is the Hezekiah collection at 25:1.
- Fix: "The first Solomon collection opens..."

**16. Minor: notes.json 24:11 and the ch. 24 deep section "Rescue those being led to death": unsourced modern uses.** The applications to Holocaust rescuers, the anti-abortion movement, opposition to executions and campaigns against trafficking carry no source. The anti-abortion use is well documented: the "rescue" movement of the 1980s, Operation Rescue, built its language on this verse. I found no specific source for the Holocaust use.
- Fix: name the rescue movement as the documented case. Either source the Holocaust and anti-trafficking uses or soften them to "it has also been cited...". "Opposition to unjust executions" needs a source or should be cut.

**17. Minor: notes.json 24:23 and variants.json 24:23 `b`: "Codex Sinaiticus leaves this line out" is unverified.** The claim rests on Swete's apparatus. I could not confirm it. Check that Swete's note is for 24:23b and not for a neighboring Greek line, keeping in mind that the Greek numbering differs here. If it cannot be confirmed, drop it from both places.

**18. Minor: Budge citations (notes 23:1, 23:5, 23:9, 23:10, 24:12): line numbers and wording unchecked.** The substance of chapters 6, 7, 16, 21 and 23 is confirmed against Lichtheim's translation:
- ch. 23: "Do not eat in the presence of an official";
- ch. 7: "They made themselves wings like geese";
- ch. 6: the widow's boundaries and "the might of the Moon";
- ch. 16: "The Ape sits by the balance, his heart is the plummet";
- ch. 21: "Do not empty your belly to everyone".

Budge's exact English and his line numbers (460, 464, 177–178, 436–437, 129, 336–337) could not be checked. The 24:12 quotation "his heart [acts] as the tongue (or, pointer) thereof" in particular needs checking.
- Fix: check them against Budge (1924). Otherwise quote Lichtheim and cite by chapter.

**19. Minor: notes.json 23:14 and the ch. 23 deep section "The rod: how it has been used and read": imprecise reference.** The Maimonides detail is correct in substance. A teacher may strike to instill awe, but not cruelly, and only with a small strap, not a stick (Mishneh Torah, Hilkhot Talmud Torah 2:2). The text gives no section, and the deep section leaves out the "small strap" limit, which is the point of the "with strict limits" view.
- Fix: cite "Mishneh Torah, Talmud Torah 2:2" and add the strap detail. Bava Batra 21a (the shoe strap) and Moed Katan 17a (the grown son, Leviticus 19:14) are cited correctly.
- Cross-part: 25-29 also cites Talmud Torah 2:2. Keep one full treatment and have the other part refer to it.

**20. Minor: chapters.json ch. 23 `settings` and `views`: small accuracy points.**
- The 23:1–11 card's `by` says "drawing on the Egyptian Instruction of Amenemope" as settled. The deep section rightly gives Ruffle's (1977) dissent, so the card should say "most scholars think" in `by` or add a `views` entry.
- Ruffle is named without a source key. Add `ruffle-amenemope` (J. Ruffle, "The Teaching of Amenemope and Its Connection with the Book of Proverbs", <i>Tyndale Bulletin</i> 28, 1977).
- The 23:29–35 card cites `budge-amenemope`, which has nothing on drinking. Replace it with `lichtheim-ael`, which has the Instruction of Ani on the beer-house.
- The W view lists "Amenemope's chapters 6, 7, 11 and 23" but leaves out chapter 21 (23:9), which the deep section includes.

**21. Minor: chapters.json ch. 23 `traditions` (top `wine`): gaps.**
- The brief names Anglicans among the moderation churches, but there is no Anglican view. Add one; the Thirty-nine Articles and Book of Common Prayer use of wine at communion would do as sources.
- The Orthodox and Lutheran answers have no source. A sourced statement, such as Luther's sermons on drunkenness, would help.
- The SBC 2006 resolution is real, but the claim that it cites "passages like 23:29–35" needs checking against its text. If it cannot be checked, say only that it urges total abstinence.

### Minor: variants and mechanics

**22. Minor: variants.json `w` fields: "checked on blueletterbible.org" is reader-facing.**
- The phrase appears in eight witness fields, and 24:22 has "not shown on blueletterbible.org". The brief says to name the checked witnesses once, on the first chapter page, which the ch. 23 deep section already does.
- "Not shown on blueletterbible.org" also implies that Rahlfs lacks 24:22a–e. Rahlfs prints them as 24:22a–e.
- Fix: cut the website from every `w`, and in 24:22 write "Old Greek (Rahlfs 24:22a–e; Codex Vaticanus in Swete...)".

**23. Minor: variants.json: missing entries.**
- (a) 23:23 is absent from the Old Greek. That is a whole-verse minus, and it sits only in a `var` note. STYLE prefers variants.json. Add an entry with an omission reading (`plain` "") and keep the note's discussion.
- (b) 23:27: the Greek ἀλλότριος (οἶκος) ("strange") for MT זוֹנָה ("prostitute") suggests a Hebrew זָרָה (zarah). This bears on the strange-woman terms. Add a short entry or a sentence in the 23:27 note.

**24. Minor: variants.json 23:2 and 23:31 (first entry): switching gives a broken verse.**
- The 23:2 Greek reading replaces only "Put a knife to your throat", leaving "if you are a man of large appetite", which the Greek moves into 23:3.
- The 23:31 Greek reading replaces only the first line, leaving "as it shows its gleam in the cup / and slides down so easily", which the Greek does not have.
- Fix: anchor the whole verse (or the whole first line plus what follows) so that the switched text reads as the Greek does.

**25. Minor: notes.json 24:26: wording close to the ESV and KJV.** The 24:26 note paraphrases 27:6 as "faithful are the wounds of a friend, but an enemy's kisses are many", which is close to the ESV and KJV wording. The site's Plain of 27:6 is "Wounds from someone who loves you are true, / but kisses from someone who hates you come thick and fast."
- Fix: quote that Plain with its reference.

**26. Minor: topics.json `widows`: overstated.** "Many scholars think the original Hebrew may also have named the widow" overstates the 23:10 note, which says "Some scholars have proposed reading 'almanah... no Hebrew manuscript has that reading."
- Fix: "some scholars", and add that no manuscript has it.

### Checked and found sound (for the record)

- **Greek readings, checked against Rahlfs:**
  - 23:2–3 (the hand, not the knife);
  - 23:7 (the hair) and its added line;
  - 23:14 ἐκ θανάτου;
  - 23:20 οἰνοπότης, and Matthew 11:19;
  - 23:26 τηρείτωσαν;
  - 23:27 the jar with holes;
  - 23:29 πελιδνοί;
  - 23:31 μὴ μεθύσκεσθε οἴνῳ, and Ephesians 5:18;
  - 23:32 the horned snake;
  - 23:33 ἀλλοτρίαν;
  - 23:34 the pilot in the storm;
  - 24:5 κρείσσων σοφὸς ἰσχυροῦ;
  - 24:7;
  - 24:11 μὴ φείσῃ;
  - 24:12 Οὐκ οἶδα τοῦτον and ὁ πλάσας πνοήν, and Romans 2:6;
  - 24:21 μηθετέρῳ αὐτῶν ἀπειθήσῃς;
  - 24:22a–e;
  - 24:23 heading;
  - 24:27 "follow after me";
  - 24:30 and 24:32 (the farm simile, "I changed my mind");
  - 24:33 in the first person;
  - the Greek order of 24–31;
  - the Greek of 30:1 and 31:1.
- **Latin:** Vulgate 23:29 "cuius patri vae" and 24:16 "septies enim cadet iustus".
- **Ketiv and Qere** at 23:5, 23:24, 23:26, 23:29, 23:31 and 24:17, against texts/auto.
- **Rabbinic sources:** Avot 4:19 (Samuel the Small); Sanhedrin 39b and Megillah 10b; Sanhedrin 73a; Sotah 44a (both readings of 24:27).
- **Church documents:** Catechism 2242–2243 and 2290; Calvin, <i>Institutes</i> 3.10.2 and 4.20.31–32; Luther, <i>Temporal Authority</i> (1523); Schleitheim (1527); Wesley's General Rules (1743); Augustine, <i>Confessions</i> 1.9.
- **Other works:** Erman (1924); Dobson (1970); Webb (2011); Allen (1903).
- **Repeated sayings and cross-quotations:** Psalm 37:1, Psalm 62:12 and 10:1 are quoted in their current Plain.
- **Brief requirements:** a settings card with `readers` for every unit and for the 24:23 collection; the rod not softened; the strange-woman note is fair; both `traditions` cards have a `top`, and churches really differ on both.
- **Drift check:** apart from 24:20b, no verse reproduces a familiar NIV or ESV rendering that the Hebrew does not force. 24:3a, 24:27 and 24:33 are close because the Hebrew forces them, and 24:33 also follows 6:10.

## Fixes applied

1. Fixed. 24:20b is now "the lamp of the wicked will go out", the same as 13:9b (already changed in 10-15) and 20:20. The 24:20 note now says the two lines match, and the gloss anchor is updated.
2. Fixed. Amenemope chapter 11 is restated from Lichtheim's translation (Context of Scripture 1.47: "Do not covet a poor man's goods... a block in the throat, / It makes the gullet vomit"; "The big mouthful of bread—you swallow, you vomit it") in the 23:8 note, the chapter 23 deep section and the ancient-near-east topic. Each now says that Proverbs reuses the images for a different situation. I rechecked Budge's 1924 text on Source Library: lines 257–259 ("as a storm in the gullet") and 269–270 match my earlier quotation. The note keeps Budge only as the first editor, whose reading of the opening differs.
3. Fixed. 23:6b is now "and do not crave his fine foods", identical to 23:3a. The 23:3 note says so.
4. Fixed. 23:23a is now "Buy truth, and do not sell it:". The note anchor and gloss are updated. The Hebrew forces this wording.
5. Fixed. The 23:13 note now quotes the Elephantine Aramaic first, in the translation printed in Charles, APOT vol. 2 (1913), p. 792, with its gaps marked: "Do not withhold thy son from beating, if thou . . . My son, if I beat thee, thou diest not. And if I leave on thy heart . . .". Lindenberger's restoration could not be checked, so it is not quoted. The Syriac is kept, quoted from Charles p. 732. The Armenian is kept because I checked it against Charles p. 732 (Venice text; Charles's footnote gives the Bodleian variant). The "two readings" note and the deep section "The rod: what the Hebrew says" now cite the Aramaic.
6. Fixed. 24:9b is now "and people find a mocker abhorrent" (to'evah, following terms.json).
7. Fixed. 23:21a is now "For the drunkard and the glutton". 23:20 keeps "wine-swillers" for the fuller phrase sove'e yayin.
8. Fixed. 23:13a is now "Do not hold back discipline from a youth." The note anchor is updated.
9. Fixed with the first option. 23:7a is now "For he is the kind who keeps score inside." The note explains how ken hu is rendered, and the variant and gloss anchors are updated.
10. Fixed. 23:34a is now "like a man lying down out on the open sea", and 23:16a "My insides will exult". For 24:2b I used "and their lips speak of trouble": the suggested "talk of trouble" is word for word the ESV.
11. Fixed. 24:18 is now "or the LORD will see it and count it evil, / and turn his anger away from your enemy." The note explains pen.
12. Fixed. The 24:19 note explains that qinne' is "be jealous" in 23:17 and 24:1 but "envy" here, to match Psalm 37:1.
13. Fixed, following the Lead decision. 24:30 is now "a lazy person's field, / by a senseless person's vineyard", and the heading is "The lazy one's field". The note says the Hebrew has 'ish in both places. The 24:30 and 24:33 notes now say "lazy one".
14. Fixed. The 24:33 note lists all three differences (mithallekh/kimhallekh, the spelling of rishekha, plural/singular), checked against the Leningrad Codex in texts/orig. It says that "like a drifter" follows 6:11.
15. Fixed. The 23:24 note now says "The first Solomon collection opens".
16. Fixed. The note and the deep section now name only the anti-abortion "rescue" movement (Operation Rescue). The Holocaust, execution and trafficking claims are removed.
17. Confirmed and kept. Swete's apparatus to Greek verse 24:38 (Hebrew 24:23) reads "om αιδεισθαι...ου καλον ℵ", which is the second line. The note and the variant now attribute this to Swete's notes.
18. Checked. Every Budge quotation and line number (129, 177–178, 336–337, 436–437, 460–465, 491, 539) was checked against the text of Budge (1924) on Source Library, so they stay. Chapter 11 is now quoted from Lichtheim (finding 2).
19. Fixed. Mishneh Torah, Laws of Torah Study 2:2 is cited in the 23:14 note and the deep section, with the small-strap limit.
20. Fixed. The 23:1–11 card now says "most scholars think" and has views for borrowing and shared tradition. It cites ruffle-amenemope, the key already defined in 16-22. The 23:29–35 card cites lichtheim-ael, and keeps Budge for Amenemope line 491, which really is about the beer-house. The W view now includes chapter 21.
21. Fixed. An Anglican view is added (Thirty-Nine Articles, Article 30; the Homily against Gluttony and Drunkenness). Orthodox now cites ware-orthodox, and Lutheran cites Luther's 1539 sermon on soberness. The SBC 2006 text was checked on sbc.net: it cites 23:29–35 and states "total opposition", and the card now says exactly that.
22. Fixed. The website is removed from every witness field and from the chapter 23 witness statement. 24:22 now reads "Old Greek (Rahlfs 24:22a–e; Codex Vaticanus in Swete's edition...)".
23. Fixed. Two variants are added: 23:23, an omission in the Old Greek with an empty plain (the note keeps the discussion), and 23:27, zonah against allotrios (oikos), which may point to zarah. The 23:27 note mentions it. 23:27a also now follows 22:14, "a deep pit", per the Lead decision.
24. Fixed in part. The build forbids an anchor that crosses a line break, so a variant cannot cover the whole verse. Instead each line has its own Greek reading. At 23:2 a second variant on "if you are a man of large appetite" has an empty Greek plain, because the Greek moves that line into 23:3. At 23:31 the first line's Greek reading now includes "and talk with them as you walk", and two new variants cover "as it shows its gleam in the cup" ("for if you fix your eyes on the bowls and the cups,") and "and slides down so easily" ("afterward you will walk about more naked than a pestle."). With all readings switched, the verse reads as the Greek does.
25. Fixed. The 24:26 note quotes the site's Plain of 27:6 with its reference.
26. Fixed. The widows topic now says "some scholars have proposed..." and that no manuscript has the reading.

Also fixed under the Lead decisions: 23:27a follows 22:14. Matthew 5:44 and 7:6 are now quoted in the site's Plain of Matthew, which has since been published. Ahiqar is named as "Story of Ahiqar", matching its works.json entry. `node tools/build.js --check Pro/23-24`: 0 errors, 0 warnings.
