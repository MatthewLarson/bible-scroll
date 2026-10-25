# Hostile review: 2 Chronicles 1–12 (part 01-12) and 2Ch book.json

Reviewer: Claude (hostile review per tools/agent-reviewer.md), 2026-10-23.
Scope: `content/books/2Ch/parts/01-12/` (plain, notes, variants, glosses, chapters, topics, sources), `content/books/2Ch/book.json`, `content/topics/rehoboam.json`, `content/topics/retribution.json`, shared keys `klein-2chron`, `dillard-2chron`, `selman-2chron`, `myers-2chron`.

## Verdict

This is a strong part. All 259 verses were compared with `node tools/literal.js 2Ch <ch>` and the WLC text, and every parallel verse in 1 Kings 3, 5–12 and 14 was compared line by line with the site's 1 Kings Plain and Hebrew. The Plain is faithful and plain. The parallel rule is mostly kept with real care: small Hebrew differences show up in the English (Day and night / Night and day, 6:20; "from the heavens" for *min hashamayim* against Kings' bare *hashamayim*; Hadoram, Zeredah, Abijah, Ornan). I found no NIV/ESV drift that needs redoing. `build.js --check 2Ch/01-12` passes with 0 errors and 0 warnings. I checked the Leningrad readings at 6:42 (plural מְשִׁיחֶיךָ) and 10:14 (אַכְבִּיד ... עָלָיו) against the openscriptures WLC (`wlc/2Chr.xml`), and both claims are correct. The problems are these. (1) The name policy is broken for Huram/Hiram, and the justifying note is contradicted by the Ketiv at 4:11 and 9:10. (2) The 3,600/3,300 foremen difference has no entry at 2:2/2:18. (3) A few parallel differences go unexplained (1:15 gold, 5:9 "from the ark"). (4) One self-contradicting variant (3:15). (5) A misstatement of Shabbat 56b on the chapter 9 page. (6) A run of smaller factual slips in notes (Ezekiel's *'azarah*, Daniel's "Persian" court, letter counts, the "medieval" pi reading). Of the Talmud citations the brief listed, Yoma 21b, Yoma 54a, Nedarim 40a and Pesachim 119a are accurate. Eruvin 14a–b is accurate, apart from one overstatement about pi. Shabbat 56b is accurate for the Rome legend but misused on the chapter 9 page. No critical findings. 5 major, 24 minor.

## Findings

### Major

**1. Major: name policy broken for Huram/Hiram, and the defending note is contradicted by the Hebrew.**
Location: plain.txt 2:3, 2:11, 2:12, 8:2, 8:18, 9:10, 9:21 ("Hiram"); note 2:3; also 4:11, 4:16, 9:29.
Problem: Chronicles' Hebrew calls the king חוּרָם *Churam* (2:3, 2:11, 2:12, 8:2, 8:18, 9:21), and the policy is "each name in the Hebrew form of that verse, no silent normalizing." Writing "Hiram" is a normalization. A note at 2:3 does not make it policy-compliant. The note's rule is "Hiram for the king, Huram for the craftsman, so readers see he is the same man as in Kings." The Masoretic text itself undercuts that rule:
- At 4:11 the craftsman's name is written (Ketiv) חירם, *Hiram*, with Qere חוּרָם. The Plain silently prints the Qere "Huram", and no variant mentions it (texts/auto flags it as "significant").
- At 9:10 the king's name is written חירם *Hiram* (Ketiv), Qere חוּרָם. Here the Plain's "Hiram" matches the Ketiv by accident, while everywhere else it overrides the Hebrew.
- At 4:16 the Hebrew is חוּרָם אָבִיו *Churam aviv*, "Huram his father", but the Plain prints "Huram-abi", the 2:13 form. That is another silent harmonization. The 2:13 note does mention 4:16, but the Plain hides the difference.
- At 9:29 the Qere is יֶעְדּוֹ *Ye'do* (Ketiv *Ye'di*), and the Plain prints "Iddo", the 12:15 form (עִדּוֹ). The variant does admit this.
- For comparison, the writer keeps Ornan (not Araunah), Zeredah (not Zarethan), Hadoram (not Adoram) and Abijah (not Abijam), so the Hiram exception is inconsistent with the part's own practice. The site's 1 Chronicles 14:1 has "Hiram", but there the Hebrew (Ketiv חירום, Qere חירם) supports it.
Fix: print "Huram" for the king wherever the Hebrew has חוּרָם. Rewrite the 2:3 note: "Chronicles spells the name Huram; he is the Hiram of Kings and 1 Chronicles 14:1." Add a Ketiv/Qere variant at 4:11 (written Hiram, read Huram) and at 9:10 (written Hiram, read Huram), and say which one the Plain follows. At 4:16, translate "Huram his father" (or "Huram-abiv") with a pointer to the 2:13 note. At 9:29, either print the Qere's own form ("Iddo" can stay only if the variant's `why` says plainly that it normalizes to 12:15's spelling) or print "Jedo". Update the topics.json `hiram` section, which already says "Chronicles spells the king's name Huram".

**2. Major: no entry at 2:2/2:18 for 3,600 foremen against Kings' 3,300.**
Location: plain 2:2 and 2:18; note 2:17; variant 8:10.
Problem: 2:2 and 2:18 give 3,600 overseers, and 1 Kings 5:16 (site Plain: "three thousand three hundred of them") gives 3,300. The only mention is buried in the `why` of the 8:10 variant. The 2:17 note says "The numbers match: 70,000 + 80,000 + 3,600" but never mentions Kings' figure. The parallel rule requires an explanation where the English differs, and the brief names this difference. There is also a witness the writer missed: some Greek manuscripts of 1 Kings 5:16 (3 Kingdoms 5:30) read 3,600, agreeing with Chronicles (UBS translators' notes on 1 Kings 5:16: "some Greek manuscripts say '3,600,' as does the parallel passage in 2 Chr 2.2, 18").
Fix: add a variant (or a `word/var` note) at 2:2, with a cross-reference at 2:18. Readings: MT Chronicles 3,600; 1 Kings 5:16 MT 3,300; Greek manuscripts of Kings 3,600 (as reported). Explain the 3,300 + 550 = 3,600 + 250 = 3,850 reckoning there, and point 8:10 back to it.

**3. Major: Shabbat 56b misrepresented on the chapter 9 page; the page contradicts the 9:29 note.**
Location: chapters.json ch. 9, `views.J`: "Jewish tradition did not hide Solomon's sins; the Talmud discusses them openly (Shabbat 56b)."
Problem: Shabbat 56b is the locus classicus for the opposite claim. R. Shmuel bar Nachmani in R. Yonatan's name says "Whoever says Solomon sinned is simply mistaken." The passage then reads 1 Kings 11 as Solomon failing to restrain his wives. The 9:29 note gets this right ("one Talmudic saying holds that whoever says Solomon sinned is mistaken"). The chapter page turns the text upside down. The other Talmud citations I checked hold up. Yoma 21b lists the five things the First Temple had and the Second lacked, including the fire. Yoma 54a has the poles pressing against the curtain "like a woman's breasts". Nedarim 40a: "the building of the young is destruction..." with Rehoboam as the sign. Pesachim 119a: Joseph's treasure taken by Shishak from Rehoboam. Shabbat 56b's reed planted by Gabriel on the day Solomon married Pharaoh's daughter (ch. 8 J) is also correct. Eruvin 14a–b does derive "three to one" from the Sea and reconcile 2,000 with 3,000 baths. But it does not "debate the value for pi" (ch. 4 J). It takes 3 as the working rule, and the precision objection comes from later commentators (Tosafot).
Fix (ch. 9 J): "Jewish tradition debated Solomon's guilt. The Talmud records the view that 'whoever says Solomon sinned is mistaken,' reading 1 Kings 11 as his failure to restrain his wives, alongside sharper judgments (Shabbat 56b)." Ch. 4 J: replace "debated the value they implied for pi" with "took its proportions as the rule that a circle is three times its width (Eruvin 14a); later commentators noted that this is not exact."

**4. Major: the 3:15 variant contradicts itself.**
Location: variants.json 3:15.
Problem: reading 2's `w` lists "the Syriac of Chronicles, as reported" as reading *eighteen*. Then the `why` says "Every witness to Chronicles has thirty-five, so it is the text of Chronicles." Both cannot be true. The note at 3:15 also duplicates the variant's title ("Eighteen or thirty-five cubits?") and its content.
Fix: decide whether the Peshitta of Chronicles reads 18, and check it, since the commentaries say it does. If it does, rewrite the `why`: "All Hebrew and Greek witnesses to Chronicles have 35; the Syriac has 18, probably harmonized with Kings." Keep the explanations in one place: either the note or the variant `b`, not both. (The same note-and-variant duplication occurs at 1:13, 3:4, 4:3 and 4:14. Each says "see the variant" while repeating it. That is minor, but STYLE says "never explain the same point twice".)

**5. Major: parallel differences left unexplained.**
The parallel rule requires an explanation wherever the Hebrew of Chronicles differs from Kings and the English shows it. These do not get one:
- **1:15 "silver and gold"**: 1 Kings 10:27 (site: "made silver like the stones") has no gold, and 2 Chronicles 9:27, the doublet of this very verse, has no gold either. The Plain correctly adds "and gold", but no note says that Chronicles adds it here and drops it in 9:27. This is a telling change in a passage the 1:14 note discusses.
- **5:9 "from the ark"**: 1 Kings 8:8 (site: "showed from the holy place") has *min-haqqodesh*; Chronicles has *min-ha'aron*. The 5:9 variant covers only "it/they". Readers comparing the two pages will see a difference that nothing explains. (BHS-type apparatus notes that the Greek and some manuscripts agree with Kings. Check the Greek.)
- **7:21 "which was so high"**: Chronicles has *asher hayah elyon* ("which was high") where Kings has *yihyeh elyon* ("will be high"). Kings' line is a famous crux (many emend to "a heap of ruins" with the Syriac and Old Latin; NIV-type renderings). Chronicles' change of tense deserves a note.
- **9:28**: Chronicles drops Que and the export trade of 1 Kings 10:28–29 (already used at 1:16–17) and adds "and out of all the lands." There is no note.
Fix: add short notes (`word/nu` or `views`) at each.

### Minor

**6. Minor: differences hidden, or created needlessly, by the English of the parallels.**
- 1:14 and 9:25 "He based them": Chronicles has וַיַּנִּיחֵם *vayyannichem*, "he placed them". 1 Kings 10:26 has וַיַּנְחֵם *vayyanchem*, "he led them". The site's Kings Plain already renders that "based", so the identical English hides the difference. The writer can keep "based" here, since it is right for Chronicles, but should add a one-line note (most scholars correct Kings by Chronicles).
- 7:20 "I will throw away out of my sight": Chronicles has *ashlikh* ("throw"). Kings 9:7 has *ashallach* ("send away"), which the Kings Plain also renders "throw away". The identical English hides a real difference. Either note it here or raise it for the Kings page.
- 6:12–13 / 1 Kings 8:22: Chronicles 6:13 ends וַיִּפְרֹשׂ כַּפָּיו הַשָּׁמָיְמָה, which the Plain gives as "spread out his palms toward the heavens". Kings 8:22's identical וַיִּפְרֹשׂ כַּפָּיו הַשָּׁמָיִם is "He lifted his open palms to the heavens". That difference is needless. It also weakens the 6:13 variant, whose homoioteleuton argument depends on the readers seeing identical words. Align with Kings ("lifted his open palms") or ask the Kings writer to align.
- 5:11a "Now the priests came out from the holy place." The Hebrew וַיְהִי בְּצֵאת הַכֹּהֲנִים מִן־הַקֹּדֶשׁ is identical to 1 Kings 8:10a, which the site gives as "As the priests came out from the holy place,". The difference is needless. Restructure so the parallel words match.
- *al-pnei rochav habbayit* gets three renderings: "as long as the house was wide" (3:4), "the same as the width of the house" (3:8) and Kings 6:3 "matching the width of the house". Use one.

**7. Minor: 4:9 note, Ezekiel's *'azarah* is not a court.**
"*'Azarah* appears otherwise only in Ezekiel (Ezekiel 43:14; Ezekiel 45:19) and became the standard rabbinic word for the Temple courts." In Ezekiel 43:14, 17, 20 and 45:19 the word means the *ledge* of the altar, not a courtyard. It also recurs in 2 Chronicles 6:13. Fix: "Elsewhere in the Bible it occurs only in Ezekiel, where it means a ledge of the altar (Ezekiel 43:14), and in 6:13; later Hebrew used it for the Temple courts."

**8. Minor: 1:10 note, Daniel's court was Babylonian.**
"It is the gift Daniel and his friends receive at the Persian-period court." Daniel 1 is set at Nebuchadnezzar's Babylonian court. Fix: "in a book of the Persian or Hellenistic period, at the Babylonian court."

**9. Minor: 1:16 note garbles the Hebrew.**
"The Hebrew *miqqe* (here spelled *miqqo'*)". Chronicles has מִקְוֵא *miqqewe'* both times; Kings 10:28 has מִקְוֵה *miqweh* / מִקְוֵה. Fix the spelling and say that Kings writes the word with *he*, Chronicles with *aleph*.

**10. Minor: wrong letter counts and descriptions in variant reasoning.**
- 4:3 note and variant: "differ by one letter". בְקָרִים and פְקָעִים differ in two letters (ב/פ and ר/ע).
- 3:16 variant: "Changing the order of three letters (bdbyr to krbyd)". בדביר → כרביד is not a reordering. It is a confusion of similar letters (ב/כ, ד/ר). Rewrite.
- 10:14 variant: "avi hikhbid ... lost two letters". אבי הכביד → אכביד loses three (ב, י, ה). Say "lost a few letters" or count them correctly.
- 10:2 note: "differs from Kings' 'was living in Egypt' only in its vowels". The verb does, but the phrase also differs in the preposition (מִמִּצְרַיִם against בְּמִצְרָיִם), as the variant itself says. Fix the note.

**11. Minor: 6:42 variant, add the Greek.**
I confirmed the Leningrad plural מְשִׁיחֶיךָ in WLC (openscriptures `wlc/2Chr.xml`). The Septuagint has the singular, μὴ ἀποστρέψῃς τὸ πρόσωπον τοῦ χριστοῦ σου (LXX text as shown at bible.audio's comparison page for 2 Chronicles 6:42; confirm in Rahlfs). Add it to the singular reading's `w`. It strengthens the choice.

**12. Minor: 11:16 note names the wrong verb; topic tags.**
The `orig` and body treat the verse as *darash* ("*Darash* appears over forty times..."). But 11:16 has לְבַקֵּשׁ *lebaqqesh* (*biqqesh*). So does 7:14 (וִיבַקְשׁוּ פָנַי). 1:5 and 12:14 have *darash*. Say so: Chronicles uses both verbs, *darash* most often. The body also quotes 1 Chronicles 28:9, which is missing from `r`. The notes at 1:5 and 11:16 are tagged `top: retribution`, but there is a `seeking-god` topic, and they belong there. The topics.json `seeking-god` section says "The verb appears..." though it is two verbs.

**13. Minor: 1:7 note says Chronicles drops Solomon's return to Jerusalem.**
"Chronicles also drops Solomon's return to Jerusalem to sacrifice before the ark (1 Kings 3:15)". Chronicles keeps the return (1:13, "Solomon came back to Jerusalem"). It drops the sacrifice before the ark and the feast. Reword. The attribution "Japhet think[s] the change is part of a wider caution in Chronicles about dreams" should be checked against Japhet, *I & II Chronicles*, on 1:7. I could not confirm it.

**14. Minor: chapter 4 deep box, the pi reading is not medieval.**
"A medieval reading notes that 1 Kings 7:23 spells 'line' with an extra letter..." The Ketiv/Qere gematria (קוה 111 / קו 106) is usually credited to the Vilna Gaon (18th century) or to later writers, not to a medieval source. Say "A later rabbinic reading" or name the source.

**15. Minor: 11:20 note, check what Josephus actually says.**
"Josephus solved it this way: Maacah was the daughter of Uriel and of Tamar (*Antiquities* 8.249)." As I recall it, Josephus makes Maacah the daughter of Tamar, Absalom's daughter, so his granddaughter. I do not recall him naming Uriel; the Uriel combination is the modern and rabbinic harmonization with 13:2. Verify. If Uriel is not in Josephus, say "Josephus makes her the daughter of Absalom's daughter Tamar; combined with 13:2, her father would be Uriel."

**16. Minor: missing variants a careful reader would want.**
- 3:2 "on its second day": MT בַּשֵּׁנִי. The Greek (as reported) and several translations (the ESV has only "in the second month") lack it, and it is often taken as a doublet of "the second". One entry.
- 8:16 "up to the day the LORD's house was founded": MT עַד־הַיּוֹם מוּסַד. The Greek reads "from the day" (as reported), and most translations follow it. The Plain's literal "up to the day ... and until it was finished" makes poor sense without a note.
- 9:25: the Greek is not given. The Septuagint has "four thousand mares" (as reported). Check and add it.

**17. Minor: chapter pages misquote or contradict the site's Kings wording.**
- Ch. 1 `views.S`: Solomon's speech about being "a little boy". The site's 1 Kings 3:7 has "I am only a youngster." Quote the site, or drop the quotation marks.
- Ch. 12 `views.S`: "shrine prostitutes". The site's 1 Kings 14:24 has "shrine men". Use the site's wording, since the rendering is deliberate.
- Ch. 2 `views.S`: "In Kings Hiram writes first". The same page's `readings` says, correctly, that Hiram sends envoys first and Solomon sends the first message (1 Kings 5:1–2). Fix S.
- Isaiah 56:7 appears as "a house of prayer for all the peoples" (note 7:12) and as "a house of prayer for all peoples" (ch. 6 X). Make them the same.
- Ch. 12 deep: "about 150 places"; note 12:4: "over 150 places". Make them the same.
- topics.json `shishak`: "the Sukkiim"; Plain 12:3: "Sukkites". Make them the same.

**18. Minor: book.json "What Chronicles leaves out" overstates.**
It says Chronicles does not tell "of the northern kingdom's history, Elijah and Elisha (1 Kings 12–2 Kings 17)". But Chronicles has Elijah's letter (21:12–15), which the book's own outline lists ("Elijah's letter"). Fix: "and, apart from a letter of Elijah (21:12–15), the stories of Elijah and Elisha." Also "his foreign wives" should allow for 8:11, where Pharaoh's daughter appears.

**19. Minor: book.json, the place of Chronicles in Hebrew Bibles.**
The facts entry ("In most Hebrew Bibles it stands last") and the section ("In most Hebrew Bibles, Chronicles stands last (Bavli Bava Batra 14b)") are true of the Talmud's order and of printed Bibles. But the Leningrad and Aleppo codices, the very text this translation follows, put Chronicles *first* among the Writings. Add one clause: "In the Leningrad and Aleppo codices it opens the Writings instead."

**20. Minor: book.json authorship vs 1Ch.**
Authorship and date agree with 1Ch/book.json (Bava Batra 15a, Ezra c. 458 BC, "the Chronicler", about 400–300 BC by most and 520–250 BC at the outside, Japhet 1968 and Williamson 1977). The lenses also agree (C: 400–250 BC in both). But 2Ch's critical paragraph drops 1Ch's last sentence, "Others still defend a common author or school," so the dissent from the consensus disappears. STYLE asks for "say who dissents". Restore it. The `sections` cite de Wette and Wellhausen, but `wellhausen-prolegomena` (now shared) is not in book.json `sources`. Add it, and consider `mckenzie-chronicler` for the "different text of Kings" claim in "About the translations".

**21. Minor: book.json spec box, the overlap with published work is too vague.**
The box is labeled as Claude's theory and gives refs, which is good. But "Scholars have stressed the Temple's importance in Chronicles" does not say *where* the published work overlaps. The frame from the command to build (2:1) to Cyrus's command to rebuild (36:23) is commonly noted, as is the Temple as the measure of each reign (for example Japhet, *Ideology*; Selman's and Dillard's introductions on the Temple as the book's centre). Name one or two of these, and say that the new element is the "main character / the house's own story" framing.

**22. Minor: chapter 7 spec box, part of the support is weak.**
"A prayer and its answer as the book's table of contents" cites Hiram and the queen of Sheba as fulfilling case 5 (the foreigner). Both come before or around the prayer, so they cannot be the rest of the book filling in the outline. "Jehoram's disease" as "drought or plague" is also a stretch. Use later instances (Cyrus at 36:22–23 fits case 5 better) or soften the claim to "many of the later crises".

**23. Minor: 3:3 gloss contradicts its note.**
The gloss "Its length was sixty cubits → about 90 feet (27 meters) long" uses the short cubit. But the verse says "by the old measure", and the 3:3 note computes the long cubit (about 103 feet, 31 meters). Make the gloss "about 100 feet (30 meters)".

**24. Minor: small factual and wording slips in notes.**
- 1:12 note: *nekhasim* "is another late word". It also occurs in Joshua 22:8. Say "a rare word, common in late Hebrew and Aramaic."
- 2:7 note: "Exodus and Kings use *tola'at shani*". Kings has no scarlet in the Temple account. Say "Exodus uses..."
- 1:14 note: "These four verses appear again almost word for word at 9:25–28." 9:25–28 differs a good deal (4,000 stalls; 9:26 from 1 Kings 4:21; no gold; no prices). Say "in shorter, altered form".
- 4:7 note cites 1 Maccabees 1:21–22 in the body, but `r` has only 4:49–51. Add it.
- 5:12 note cites 1 Chronicles 16:37–42, and 10:15 cites Genesis 50:20 and 1 Chronicles 10:14's wording; add these to `r`.
- 11:12 *tsinnot* "large shields" against 9:15 *tsinnah* "body-length shields". Use one rendering.
- 3:1 Plain "where the LORD had shown himself" supplies a subject the Hebrew lacks (the 3:1 note says so). That is acceptable, but the Plain then matches the ESV/NIV "where the LORD had appeared". Consider "where he had shown himself", and keep the note.

**25. Minor: topics.**
- `retribution.json` (new core) overlaps `blessings-and-curses` on Deuteronomy 28. It is a reasonable separate page (Chronicles' doctrine and theodicy), but add `blessings-and-curses` and `justice` to `related`, and add `wellhausen-prolegomena` to its sources, since the 2Ch contribution names Wellhausen.
- `rehoboam.json`: the core's facts check out (17 years, about 930–913 BC, Shemaiah, Naamah the Ammonite, 1 Kings 14:21–28). Its `aka` includes "Rehoboam's fortresses", but no section on them exists in the core. Fine, since the 2Ch contribution covers them; drop the alias or keep it deliberately.
- New shared keys checked: Klein, *2 Chronicles*, Hermeneia (2012); Dillard, *2 Chronicles*, WBC 15 (1987); Selman, *2 Chronicles*, TOTC (1994); Myers, *II Chronicles*, AB 13 (1965). All are real and correctly cited. Part keys: Na'aman, BASOR 261 (1986) 5–21, and Williamson, "Eschatology in Chronicles," TynBul 28 (1977) 115–154 are correct.

## Notes on what was checked and found sound

- **Parallels**: 1:3–17 // 1 Kings 3, 10:26–29; 2 // 1 Kings 5; 3:15–17 // 1 Kings 7:15–21; 4:2–5:1 // 1 Kings 7:23–51; 5:2–14 // 1 Kings 8:1–11; 6:1–39 // 1 Kings 8:12–50; 7:4–22 // 1 Kings 8:62–9:9; 8 // 1 Kings 9:10–28; 9:1–31 // 1 Kings 10, 11:41–43; 10 // 1 Kings 12:1–19; 11:1–4 // 1 Kings 12:21–24; 12 // 1 Kings 14:21–31. Apart from items 5–6, identical Hebrew gets identical English, and differing Hebrew gets differing English. That includes subtle cases (6:17, 6:30, 7:17–22, 9:2, 9:12, 10:13–14, 12:11).
- **Variants**: the follow choices at 1:13, 6:42 and 10:14 are sound. Both Leningrad claims were checked in WLC. The Qere at 8:10, 9:29 and 11:18 is followed and explained (but 4:11 and 9:10 are not; see item 1). The "kept with variants" list matches the file.
- **Fairness**: Solomon's omitted sins (9:29 note, ch. 9 deep), the named prophetic sources (9:29, 12:15), the fire from heaven (7:1 note; ch. 7 H/C), Moriah and Genesis 22 (3:1 notes; `akedah` and `threshing-floor`; Samaritan Gerizim view included), the large numbers (3:8, 3:4, 12:3) and the Shishak evidence (12:4 note, ch. 12 deep) are handled with traditional and critical views named.
- **Style**: no em-dashes in any file; sentences are mostly short; poetry breaks at 6:1–2, 6:41–42 and 10:16.

## Fixes applied

Writer's fixes, 2026-10-23. `node tools/build.js --check 2Ch/01-12`: 0 errors, 0 warnings (259 verses, 129 notes, 31 variants, 95 glosses, 12 chapter pages, 24 topic contributions). Rewritten verses re-audited for drift (2:3, 2:11, 2:12, 3:1, 3:4, 3:8, 4:16, 5:11, 6:12, 6:13, 8:2, 8:18, 9:10, 9:21, 11:12): all clean; 3:4, 3:8, 5:11, 6:12 and 6:13 now use the site's 1 Kings wording where the Hebrew matches.

1. Huram/Hiram: the king is "Huram" in every verse where Chronicles has חוּרָם (2:3, 2:11, 2:12, 8:2, 8:18, 9:21; heading "Huram's answer"). Qere followed at both 4:11 and 9:10 (Huram), with new Ketiv/Qere variants at each. 4:16 now "Huram his father", with a new note pointing to 2:13; the 2:13 note says the Plain keeps 4:16 as it stands. The 2:3 note is rewritten (Huram is the Hiram of Kings and 1 Chronicles 14:1). The 9:29 variant now says plainly that "Iddo" normalizes the Qere Ye'do to the 12:15 spelling. Note anchors and chapter summaries updated; the hiram topic already has "Huram" as an alias.
2. New variant at 2:2: 3,600 (MT and Rahlfs' Greek, checked), 3,300 (1 Kings 5:16) and 3,600 in some Greek copies of Kings (as reported), with the 3,850 reckoning. The 2:17 note and the 8:10 variant point to it.
3. Ch. 9 J rewritten per the reviewer (Shabbat 56b "whoever says Solomon sinned is mistaken"). Ch. 4 J now says Eruvin 14a takes "three times" as a rule and later commentators noted it is not exact; the ch. 4 deep box is adjusted the same way.
4. 3:15 variant: the Syriac is labeled "as reported (not checked)", and `why` says all Hebrew and Greek witnesses have 35. The note keeps the explanations under a new title. Duplication removed: the notes at 1:13, 4:3 and 4:14 are deleted, with their remaining points folded into the variants; the 3:4 and 9:25 variants now cover the witnesses only, and the notes cover the explanations.
5. New notes at 1:15 ("silver and gold"), 5:9 ("from the ark"; Rahlfs' Greek, checked, reads ἐκ τῶν ἁγίων as in Kings), 7:21 ("which was so high") and 9:28 ("and out of all the lands").
6. New notes at 1:14 ("He based them": placed/led, with 9:25) and 7:20 (ashlikh/ashallach). 6:12 and 6:13 now read "lifted his open palms" as in 1 Kings 8:22, and the 6:13 variant's argument from identical endings is updated. 5:11 now opens "As the priests came out from the holy place," as in 1 Kings 8:10. 3:4 and 3:8 use "matching the width of the house", as in 1 Kings 6:3.
7. The 4:9 'azarah note is corrected (an altar ledge in Ezekiel; also 6:13; later Hebrew used it for the Temple courts).
8. The 1:10 note is corrected (Daniel, a book of the Persian or Greek period, at the Babylonian court).
9. The 1:16 note now gives miqqewe' and the he/aleph spellings.
10. Letter counts fixed: 4:3 now says two letters; 3:16 is described as similar-letter confusion; 10:14 now says "a few letters (bet, yod and he)"; the 10:2 note mentions the preposition.
11. 6:42: Rahlfs' Greek τοῦ χριστοῦ σου (singular), checked at blueletterbible.org, added to the followed reading.
12. 11:16 note: the verb is biqqesh (as in 7:14), and darash is named as more common. 1 Chronicles 28:9 is added to `r` and quoted in the site's wording. The 1:5 and 11:16 notes are retagged seeking-god, and the seeking-god topic section now names both verbs.
13. 1:7 note reworded: Chronicles keeps the return (1:13) and drops the sacrifice and feast. The unconfirmed Japhet attribution is removed.
14. The pi reading is now credited as "a later rabbinic reading, usually credited to the Vilna Gaon (18th century)".
15. 11:20 note: Josephus makes Maacah the daughter of Absalom's daughter Tamar; with 13:2 her father would be Uriel.
16. New variants at 3:2 ("on its second day"; Rahlfs' Greek, checked, has only "in the second month") and 8:16 ("up to the day"; Rahlfs' Greek, checked, has "from the day"). The 9:25 variant now gives the Greek "four thousand mares for chariots" (checked).
17. Chapter pages: ch. 1 S quotes "only a youngster" (1 Kings 3:7); ch. 12 S has "shrine men"; ch. 2 S is fixed (Hiram's envoys come first, and Solomon writes unprompted and at length in Chronicles); Isaiah 56:7 is unified as "a house of prayer for all peoples"; Shishak's list is "about 150 places" in both places; the shishak topic contribution has "Sukkites".
18. book.json "What Chronicles leaves out" now mentions Pharaoh's daughter (8:11) and Elijah's letter (21:12–15).
19. book.json facts (Length) and "How Jews and Christians read 2 Chronicles" now say that the Talmud (Bava Batra 14b) and printed Bibles put Chronicles last, while the Aleppo and Leningrad codices put it first among the Writings.
20. The authorship sentence "Others still defend a common author or school" is restored. wellhausen-prolegomena and mckenzie-chronicler are added to book.json `sources`. The joash-of-judah id set by the 13–24 writer is kept.
21. The book.json spec box now names the overlap: the 2:1–36:23 frame, which many commentators note, and Japhet's *Ideology*, Dillard and Selman on each king measured by the Temple. The new element is stated as the framing of the house as the main character.
22. The ch. 7 spec box is softened to "many of the later crises", and its examples are replaced with later instances (Ahaz 28:5, Abijah 13:14, Jehoshaphat 20:5–12, Manasseh 33:12–13, Cyrus 36:22–23).
23. The 3:3 gloss now reads about 100 feet (30 meters), using the old long cubit.
24. Note fixes: 1:12 nekhasim ("a rare word", with Joshua 22:8); 2:7 now "Exodus uses"; 1:14 "in shorter, altered form"; 4:7 `r` adds 1 Maccabees 1:21–22; 5:12 `r` adds 1 Chronicles 16:37–42; 10:15 `r` adds Genesis 50:20 (1 Chronicles 10:14 was already there); 11:12 now "body-length shields", as in 9:15 and 1 Kings 10:16. 3:1 now reads "where he had shown himself", and the note explains this.
25. The retribution core adds blessings-and-curses and justice to `related` and wellhausen-prolegomena to `sources`. The rehoboam core drops the alias "Rehoboam's fortresses", because no section covers it.
