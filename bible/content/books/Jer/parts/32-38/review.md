# Hostile review: Jeremiah 32-38

Reviewer: separate agent (not the writer). Checked against texts/orig, Swete's Greek (`tools/lxx.py`, Greek 39-45), the Qumran transcriptions (`tools/dss.py`), texts/auto, the site's Plain English Translation for parallel passages, Radak and the Targum on Sefaria, and web sources for the seal impressions. `VERBOSE=1 node tools/build.js --check Jer/32-38`: 0 errors, 1 warning (book.json quotes Jeremiah 1:1 in words that are not the site's Plain English Translation; that file belongs to the 01-06 writer, not this part).

## Verdict

The translation is mostly sound. I found no invented verse, no mistranslation of a name or number, and few drifted sentences. The Greek columns I checked against Swete are accurate, and the 4Q72 reports for 33:16-20 are correct, including the honest "restored, not cited" handling. The Lachish letters (Letters 3, 4, 6), the Sefire calf curse, the Babylonian Chronicle entries (Carchemish 605, Ashkelon in Kislev 604, the Arab raids of 599/598), the Gemariah bulla (Shiloh, 1982) and Targum 33:15 all check out. There is no "from memory" wording anywhere in the reader-facing text. The weakness is the secondary apparatus, where the writer says it read Radak and the seals but reports them wrongly or from the wrong source. Radak on 32:9 is reversed, the Radak "divine names" claim at ch. 36 is not in the Radak I could read, the Gedaliah bulla is cited to an article that predates it, the 32:21 Greek variant is explained with an invented Hebrew misspelling, and one real Greek reversal (36:25) is mentioned in passing with no variant entry. Three cross-part pairs (38:2 / 21:9, 33:15-16 / 23:5-6, 32:4 / 34:3) do not match where the Hebrew is the same. The part needs a fix pass before it is called reviewed.

Counts: critical 0, major 9, minor 17.

---

## Major

**1. Radak on 32:9 is reported backwards** (notes.json 32:9 "Seven shekels and ten"; chapters.json ch. 32 `views.J`; ch. 32 `deep` says the writer read Radak at 32:9).
The note says "Radak counts seventeen and notes that Targum Jonathan understood larger units." Radak on Sefaria says the opposite: the "shekels" are *minas* and the "silver" is *selas* ("השקלים הם מנים והכסף הוא סלעים"), and he adds that Jonathan translated it the same way. So Radak and the Targum agree on the larger units, and it is the modern majority that counts seventeen shekels. The ch. 32 Jewish lens repeats the error ("Radak counts the price as seventeen shekels and notes that Targum Jonathan understood larger units"). The gloss "about seven ounces... a low price" and the claim "Most readers count seventeen shekels" are stated without noting that the Jewish medieval reading is different.
Fix: correct both places (Radak and the Targum read seven minas and ten selas), keep seventeen shekels as the Plain English Translation's reading and say why (Genesis 23:15-16 comparison and the plain reading of the Hebrew), and drop the "low price" certainty from the gloss. Reconsider the gloss's "about seven ounces".

**2. Radak's "divine names" account at ch. 36 is unsupported** (chapters.json ch. 36 `views.J`).
It says "Radak also cites a rabbinic account in which Jehoiakim had the divine names in the scroll burned." Radak on 36:23 (Sefaria) gives *delatot* as pages that open and close like doors (correct, as the note at 36:23 says), notes Jonathan's *patzin* (correct), and then gives the rabbinic account that Jehoiakim had Jeremiah's lament read and answered each section by asserting his own kingship. I found no divine-names story there. The sentence reads as invented or conflated.
Fix: replace it with the account Radak actually gives, or delete it. Read the passage again on Sefaria and quote the source for any tradition kept.

**3. The Jehucal and Gedaliah seals are cited to a source that cannot support them** (notes.json 38:1; chapters.json ch. 36 `deep`, ch. 38 `views.H`; source `mazar-palace`).
`mazar-palace` is Mazar, "Did I Find King David's Palace?", BAR 32:1 (2006). It can report the 2005 find (Jehucal son of Shelemiah son of Shovi) but cannot report the Gedaliah son of Pashhur impression, which turned up in wet-sifting in late 2007 and was announced in 2008. Even secondary sources disagree on 2007 versus 2008. The note says "the second in 2008" and cites the 2006 article for both. The note also drops the grandfather's name in "Yehukal son of Shelemiah" (the impression reads "son of Shelemyahu son of Shovi"), which is the best evidence for the identification.
Fix: add a source for the Gedaliah impression (Mazar's preliminary report, The Palace of King David: Excavations at the Summit of the City of David, Preliminary Report of Seasons 2005-2007, 2009, and her announcement of 2008) as a new source key; say "found in the 2005-2007 seasons and announced in 2008" or give the exact date once checked; give the full reading of the Jehucal impression. Keep the caution that the names are common.

**4. The Baruch bulla "debate" is asserted but not shown** (notes.json 36:4; chapters.json ch. 36 `deep`; source `avigad-baruch-bulla`).
The note says "some scholars therefore hold back. Others accept them." No scholar is named and the only source is Avigad's own 1978 publication, which cannot be the source for a later debate. The brief asked for "the Baruch bulla and its authenticity debate". The note is accurate as far as it goes (market provenance, 1978, the companion impression "Yerahme'el the king's son"), but it leaves out the thing that matters for a reader: unprovenanced seals can be forged, and the reasons some scholars treat this one as probably genuine and others as unproven. I believe a second impression naming Berekhyahu son of Neriyahu has also been published from the antiquities market (BAR, 1990s); verify before saying so.
Fix: name the scholars on each side with sources, or cut "debate" to "unprovenanced, so unproven" and say no more. Add the second impression only if verified.

**5. The 32:21 Greek variant is explained with an invented Hebrew misreading** (variants.json 32:21 `why`).
It says the Greek "great visions" differs "by a small spelling change in Hebrew (moraim, 'terrors', and marot, 'visions')." The Greek Deuteronomy renders the same Hebrew phrase with the same Greek: LXX Deuteronomy 26:8 and 4:34 both read ἐν ὁράμασιν μεγάλοις for *mora' gadol / moraim gedolim*. So the Greek of Jeremiah is the stock Greek rendering of the Deuteronomy phrase, from the same Hebrew, and no variant Hebrew is needed. The note (notes.json 32:21) also gives *mora' gadol* for both Deuteronomy 26:8 and 4:34, but 4:34 has the plural *moraim gedolim*.
Fix: rewrite `why`: same Hebrew, Greek follows the Deuteronomy translation; keep it as a variant of translation, not of source text. Correct the 4:34 form.

**6. A real Greek reversal at 36:25 has no variant entry** (chapters.json ch. 36 `views.C` mentions "a different sense in 36:25"; variants.json has no 36:25).
Swete's Greek 43:25 reads Ἐλναθὰν καὶ Γοδολίας ὑπέθεντο τῷ βασιλεῖ πρὸς τὸ κατακαῦσαι τὸ χαρτίον. That is two officials (no Delaiah) who *suggested to the king to burn* the scroll, against the Hebrew, where Elnathan, Delaiah and Gemariah *pleaded with him not to* (*hifgi'u*). The Plain English Translation follows the Hebrew correctly, but a reader is only told "a different sense" in a lens line. The same Greek verse differs again at 43:24 (οὐκ ἐζήτησαν, "did not inquire", for "were not afraid"). Check Ziegler's text before final wording.
Fix: add a 36:25 variant entry (with 36:24 if confirmed) and a note, naming Swete's Codex Vaticanus and what Ziegler reads.

**7. Cross-part: 38:2 does not match 21:9, and the note quotes 21:9 in words the site does not use** (plain.txt 38:2; notes.json 38:2; glosses.json 38:2).
Site Plain English Translation 21:9: "Anyone who stays in this city will die by the sword, by famine and by plague. But anyone who goes out and deserts to the Chaldeans who have you under siege will live, and his own life will be his loot." Plain English Translation 38:2: "Whoever stays... His own life will be his prize of war, and he will live." The Hebrew for the last clause is the same (*vehayetah lo nafsho leshalal*). The note on 38:2 prints a "quote" of 21:9 that is a blend ("Whoever... falls into the hands of the Chaldeans... prize of war") and matches neither the site's 21:9 nor the Hebrew's verbs, and it says the advice is "almost the same words". The build did not warn because the quote does not exactly match any verse.
Plague wording is consistent (21:7, 21:9, 32:24, 34:17, 38:2 all "plague"): no change needed there. Align "loot" (or "prize of war"; the 21-25 part is the earlier model, so "loot") and "Anyone", and quote 21:9 exactly in the note. Check 39:18 and 45:5 when the 39-45 part exists, since the note says it is repeated there.

**8. Cross-part: 33:15-16 do not match 23:5-6 where the Hebrew is the same** (plain.txt 33:15-16 against 21-25 plain 23:5-6).
- Hebrew 23:5 ends *ve'asah mishpat utsedaqah ba'arets* and 33:15 ends the same way. Plain English Translation 23:5: "carry out justice and righteousness in the land." Plain English Translation 33:15: "do justice and what is right in the land."
- 23:6 *veyisra'el yishkon labetach* and 33:16 *virushalaim tishkon labetach*: "will settle in security" against "will live in safety".
- 33:16 is the Plain English Translation "This is the name by which it will be called". The Hebrew (*vezeh asher yiqra lah*) has no word for "name" and no stated subject; Radak (Sefaria) reads God as the one who calls. The Plain English Translation's passive with "name" copies the 23:6 Plain English Translation and is also the usual NIV/ESV shape (see 12 below). The note at 33:16 is honest about the feminine pronoun but the Plain English Translation gives no hint of the unstated subject.
Fix: make the shared Hebrew phrases identical to 23:5-6 (choose one wording and change whichever part is later), and consider "this is what one will call her" or "what he will call her" with the note carrying the alternative.

**9. 33:18 note says "Levite priests" is not Ezekiel 44's language, but Ezekiel 44:15 uses it** (notes.json 33:18).
"Hakkohanim halwiyyim, 'the Levite priests,' is the language of Deuteronomy (17:9, 18; 18:1; 24:8) and not of the Zadokite priesthood in Ezekiel 44." Ezekiel 44:15 reads *hakkohanim halwiyyim bene Tsadoq* ("the Levite priests, the sons of Zadok"), and the note lists Ezekiel 44:15 in its own references. The distinction the note wants (Deuteronomy's all-Levi priesthood against Ezekiel's Zadokite-only one) is real, but the phrase is shared.
Fix: say the phrase occurs in both; Deuteronomy and Jeremiah apply it to the whole tribe, Ezekiel limits it to Zadok's sons.

---

## Minor

**10. Sentence-shape drift (NIV/ESV)** (plain.txt). Words are free, shape is close in:
- 32:17 "You are the one who made the heavens and the earth with your great strength and your outstretched arm" (Hebrew: "Look, you made... by your great power and by your outstretched arm"; the "It is you who" shape).
- 32:19 "to give each person what his ways deserve" ("deserve" is not in the Hebrew; the NIV also adds it).
- 32:20 "you still do them today, in Israel and among all humankind" (Hebrew "until this day, and in Israel and in humankind"; "all" is added and "still do" interprets *'ad hayyom hazzeh*).
- 34:18 "like the calf they cut in two" (note admits "like" is added).
- 38:22 "Your trusted friends misled you and overpowered you. Your feet are sunk in the mud, and they have turned away" (nearly the NIV line; the Hebrew has "the men of your peace" and "they turned back").
- 33:16 as in 8.
Fix: restructure each so the order of the Hebrew clauses shows.

**11. 32:4 and 34:3 render the same Hebrew differently** (plain.txt). 32:4: "he will talk with him mouth to mouth and look him in the eye". 34:3: "Your eyes will see the eyes of the king of Babylon, he will talk with you mouth to mouth". Hebrew: *vedabber piv 'im piv ve'enav 'et 'enav tir'enah*. The 32:4 idiom hides the repeated "eyes" that the note's title ("Eyes to eyes, mouth to mouth") promises. Use one form in both.

**12. 33:3: no variant entry, and the note's root is one-sided** (notes.json 33:3; variants.json). The brief flagged 33:3. The note says the Greek has "great and strong" (Swete 40:3 μεγάλα καὶ ἰσχυρά) but there is no variant entry. It derives *betsurot* only from *batsar* ("cut off, fortified") and ignores the *natsar* ("guard") link that readers draw from Isaiah 48:6 *netsurot*, a verse the note lists in its own references. Add a variant entry (Greek "mighty") and give both derivations. Greek 40:3 also has "cry out" (Κέκραξον) against "Call".

**13. More Greek differences left out** (variants.json): 34:5 (Swete 41:5 has no "burnings" or "Alas, lord!", and adds "to Hades"); 37:13 (the Greek names the arresting captain Σαρουιά, not Irijah); 35:3-4 (Greek 42:3-4 has "Jechoniah" for Jaazaniah and different father names); 38:22 (Greek 45:22 differs in sense from the Hebrew taunt). 34:5 matters most because the note on the same verse discusses "burnings" at length.

**14. 33:14-26 entries: usable but sloppy** (variants.json). All thirteen `orig` fields for the Masoretic reading are empty, so the reader sees no Hebrew. The `why` is the same boilerplate thirteen times ("also the text of the Qumran copy (4QJer-c) wherever it survives"), which for 33:14-15 and 33:21-26 says nothing. The reports that are specific (33:16-20) are correct against `dss.py`: 33:16 has only YHWH preserved, 33:17-18 spelling differences only, 33:19 last word restored, 33:20 mostly restored. Fix: fill `orig`, state in each `why` whether 4Q72 has the verse, and say in 33:14-15 and 33:21-26 that no scroll survives.

**15. Ketiv/Qere list is incomplete and its count is off** (chapters.json ch. 32 `deep`). The deep note lists ten places. `texts/auto` also marks 32:35 (Q hiphil), 33:26 (K *ashuv* / Q *ashiv*, which touches the "turn their fortunes" idiom the notes discuss), 36:29 and 38:16.

**16. 37:12 variant says the Hebrew verb is "rare"** (variants.json 37:12 `why`). *Chalaq* "divide" is common; the notes.json 37:12 note says as much. The difficulty is the sense with *mishsham*. Reword. The Plain English Translation "to claim a share" is also close to the NIV "get his share".

**17. 35:11 Greek "Assyrians" explanation is weak** (variants.json 35:11 `why`). "Or a different Hebrew spelling" is unsupported. The Greek translator regularly renders Aram by a Syria word; here Assyrians may be a harmonizing guess. Say that, or say the cause is unknown.

**18. 34:19 and 38:7 variant entries have rough Greek lines** (variants.json). In 34:19 the Greek reading has the Greek words but an empty `plain`; supply the English list (leaders of Judah, court officials, priests, the people). In 38:7 the Hebrew `plain` starts with a stray comma (", a court official").

**19. Unsupported claims stated as fact** (notes.json). 37:15 "The cistern-cells were below it" and "Jonathan the scribe's house was probably a record office" (the text says only that it had been made into a prison). 37:21 "the street of the bakers was a known quarter" (only this verse names it). 36:14 "Cushi may simply have been a nickname for a dark-skinned man". Mark as guesses or remove.

**20. "About 250 years" for the Rechabites** (chapters.json ch. 35 `sum`; notes.json 35:1 "250 years"). Jonadab's alliance with Jehu is about 841 BC (the notes say so), and the Rechabite scene is about 599; that is about 240. The Hebrew gives no number. Say "more than two centuries".

**21. Ch. 33 Historical lens: "the first temple singers"** (chapters.json ch. 33 `views.H`). Ezra 3:11 is the laying of the foundation of the *second* temple. "First" reads as Solomon's temple. Reword.

**22. Chronology note contradicts the site's 586 date** (notes.json 32:1). It says Zedekiah's tenth year "ran from spring 588 to spring 587," so his eleventh year, in which the city falls (2 Kings 25:2-3), runs spring 587 to spring 586 and the fourth month (July) falls in 587. The same note then says the site dates the fall to 586. Chapters 34, 37, 38 give 588/587, "about 588" and 587/586 for the same siege. Choose one system, say it once, and align.

**23. Tov's dating** (chapters.json ch. 33 `readings`, `views.C`: "added to the Hebrew in the late Persian period"). The source is cited but I could not confirm that Tov dates this passage's addition so specifically. Replace with a statement the source supports.

**24. Traditions: one card, thinly sourced** (chapters.json ch. 33 `traditions`). The Orthodox entry has no source key (the Chrysostom liturgy line is real; cite it). No Lutheran or Baptist entry, though both have a stated view on Hebrews 7-10. The "Dispensationalist" entry rests on one source. The strongest real conflict in this part may be 33:24-26 ("has the LORD rejected the two clans?"), the proof text in the church and Israel debate (Catholic after Nostra Aetate, Reformed and covenantal, dispensational); there is no card for it and no pointer to the topic. Consider a card or a note-level pointer.

**25. Glosses that go beyond the text** (glosses.json). 34:20 "the vultures and other birds" (Hebrew: birds of the sky); 36:2 "a long roll of papyrus" (the material is not stated; leather is as likely); 37:21 "one flat loaf" (*kikkar* is round, not necessarily flat); 32:5 "check on him, deal with him" tilts to judgment while the note says the verb is open; 32:35 "hand over to Molech" settles what the note leaves to the scholars.

**26. Settings: unsupported timing** (chapters.json ch. 38, 38:7-13): "when: the same day". The text says only that Ebed-melech heard. Ch. 37 has no setting for 37:11-16 (the arrest), which holds Jeremiah's own speech ("A lie!").

**27. Reader-facing "the writer read" line** (chapters.json ch. 32 `deep`). The brief asks for one statement of which witnesses were read, and this is it; but it claims reading Radak at 32:9 and 36:23, and the first is misreported (finding 1). Once fixed, keep, and say "Targum Jonathan at 33:15" has the Aramaic *meshiha ditsdqa* (verified: confirmed on Sefaria).

---

## Checked and sound

- Plain English Translation 32:1-38:28 against the Hebrew, verse by verse: no omission, addition of substance, wrong name or number found beyond the items above. Names (Hanamel son of Shallum, Mahseiah, Gemariah son of Shaphan, Micaiah, Jehudi's three generations, Irijah son of Shelemiah son of Hananiah, the four officials of 38:1) match.
- "Too wonderful" at 32:17 and 32:27 agrees with Genesis 18:14 on the site ("Is anything too wonderful for the LORD?"), and the variant's remark that the Greek of Genesis 18:14 has ἀδυνατεῖ is correct. The Greek of Jeremiah has "hidden" in both places (Swete 39:17, 39:27), as the variant says.
- 33:20-26 against 31:35-37: "rules", "reject", "being a nation" are consistent with the 26-31 part.
- Greek readings in variants 32:5, 32:11, 32:24, 32:35, 32:39, 33:2, 34:14, 34:17, 34:18, 35:11, 36:9, 36:26, 37:1, 37:12, 38:1, 38:2, 38:7, 38:9, 38:28 match Swete. The Greek of ch. 33 stops at Hebrew 33:13 (Greek 40:13).
- Lachish Letters 3, 4, 6; Sefire calf curse; Babylonian Chronicle (Ashkelon, Kislev 604; Arab raids 599/598; Carchemish 605); Gemariah bulla found 1982, published by Shiloh in IEJ 36 (1986): accurate as reported.
- Radak on 33:16 (God calls Jerusalem; links to the Messiah of 23:6; reports the Targum's "merit"), 33:24 (David and Aaron), 34:5 (spices, Sages on Nebuchadnezzar) and 36:23 (doors, *patzin*): accurate as reported.
- No em-dashes, no "from memory" or "not rechecked" wording, source keys all resolve. Plague/disease wording is consistent with 21:9.

## Fixes applied

1. Fixed. Notes 32:9 and the chapter 32 Jewish lens now say what Radak says on Sefaria (re-read): the "shekels" are minas, the "silver" selas, and Targum Jonathan translates it that way. The Plain English Translation keeps seventeen shekels as the plain count, and the "low price" is stated as one reading only. The gloss no longer says "a low price" and now makes "about seven ounces" conditional on the unit being the shekel.
2. Declined, with a correction. Radak on 36:23 (Sefaria, re-read) does give the story: the Sages say Jehoiakim, shown Jeremiah's Lamentations, answered each verse by claiming kingship and, at "ki YHWH hogah" (Lamentations 1:5), cut out all the divine names (kol ha'azkarot) and burned them. The reviewer missed it. The sentence in the chapter 36 Jewish lens is now exact (the king's answers and the line from Lamentations 1:5, quoted as the site's Plain English Translation).
3. Fixed. Note 38:1 now gives the full Jehucal reading (son of Shelemyahu son of Shovi), says it was found in 2005 and reported in BAR in 2006 (mazar-palace), and dates the Gedaliah impression only as "announced in August 2008, from the same excavation", with a new source (israel-mfa-gedaliah-2008). The 2006 article is no longer cited for the second. The caution about common names stays.
4. Fixed. Note 36:4, the chapter 36 Historical lens and its "deep" section now name the debate: Goren and Arie (2014, the impressions are modern) and van der Veen, Deutsch and Barkay (2016, reply). Two new source keys (goren-arie-berekhyahu, van-der-veen-berekhyahu). The second Berekhyahu impression is mentioned only as "also known", as the 2014 and 2016 articles describe it; no catalogue details are claimed.
5. Fixed. Variant 32:21 `why` rewritten: same Hebrew, and the Greek follows the stock Greek of Deuteronomy 26:8 and 4:34 (checked in Swete: both read en horamasin megalois); a difference of translation, not of the Hebrew text. Note 32:21 now gives the plural form of 4:34.
6. Fixed. New variants at 36:24 and 36:25 (Swete's Greek 43:24-25: "did not inquire"; two officials, Elnathan and Godolias, urge the king to burn, with no "he did not listen"). The chapter 36 critical lens points to them. Ziegler was not read, and the entries say the Greek is Swete's Codex Vaticanus.
7. Fixed, with the lead's override. 38:2 now reads "Anyone who stays in this city will die by the sword, by famine and by disease. But anyone who goes out to the Chaldeans will live. His own life will be his loot, and he will live." (21:9 in the 21-25 part now has "disease" and "loot"). "Plague" became "disease" at 32:24, 32:36, 34:17 and 38:2 and in every note, variant and chapter line that quotes them (the review's "plague is consistent" is overridden). The note on 38:2 no longer prints a blended quote; it states the two real differences from 21:9 (21:9 "deserts to"; 38:2 adds "and he will live"). Gloss and anchors changed to "loot". 39:18 and 45:5 are for the 39-45 part to check.
8. Fixed. 33:15 "carry out justice and righteousness in the land" and 33:16 "Judah will be saved, and Jerusalem will settle in security" now match 23:5-6. 33:16 is "This is what one will call her", which keeps the Hebrew's missing subject and missing "name"; note 33:16 gives the alternative and Radak's reading, and note 33:15 lists the aligned phrases.
9. Fixed. Note 33:18 now says the phrase occurs in Deuteronomy and in Ezekiel 44:15, and that the difference is how wide it is drawn (the whole tribe, or Zadok's sons).
10. Fixed. Rebuilt from the Hebrew clause order: 32:17 ("Look, you made ... by your great power and by your outstretched arm"), 32:19, 32:20, 34:18 ("into the calf they cut in two and passed between its pieces"; note and variant updated), 38:22 ("The men at peace with you ..."; note, gloss and new variant updated), and 33:16 as in 8.
11. Fixed. 32:4 "he will speak with him mouth to mouth, and his eyes will see his eyes"; 34:3 "Your eyes will see the eyes of the king of Babylon, and he will speak with you mouth to mouth".
12. Fixed. New variant 33:3 (Greek "Cry out", "great and strong things", Swete 40:3); note 33:3 gives both derivations of betsurot (batsar and natsar, with Isaiah 48:6).
13. Fixed. New variants at 34:5 (Greek weeping, no "Alas, lord!", adds "as far as Hades"), 35:3 (Jechoniah and other names; the 35:4 forms are in the why), 37:13 (Sarouia, no "captain of the guard") and 38:22.
14. Fixed. All 33:14-26 entries now have the Masoretic Hebrew in `orig` and a specific `why` stating what 4Q72 preserves (33:16 the divine name only, 33:17-18 spelling only, 33:19 all but the last word, restored, 33:20 mostly restored) or that no scroll survives (33:14-15, 33:21-26).
15. Fixed. The Ketiv/Qere list in the chapter 32 "deep" section now has all thirteen places (added 32:35, 33:26, 38:16). 36:29 is a BHS apparatus mark, not a Ketiv/Qere pair, and is left out.
16. Partly fixed. The variant `why` no longer says the verb is rare, and the note 37:12 preview says the problem is the sense. The Plain English Translation "to claim a share there among the people" is kept: it follows the Hebrew order and has no "his" or "property".
17. Fixed. Variant 35:11 `why` now says the cause of the Greek "Assyrians" cannot be told.
18. Fixed. The variant 34:19 Greek line now has an English list; 38:7 has no stray comma, and its Greek plain is "Ebed-melech the Ethiopian".
19. Fixed. Notes 37:15, 37:21 and 36:14 no longer state the record-office, cells-below, bakers' quarter or nickname guesses; they say what the text does not say.
20. Fixed. "About 250 years" is now "more than two centuries" in note 35:1 and the chapter 35 summary.
21. Fixed. Chapter 33 Historical lens: the returned exiles sang it at the foundation of the second temple (Ezra 3:11).
22. Fixed. One system, stated once in note 32:1: years counted from the autumn, Zedekiah's tenth year 588/587, eleventh 587/586, fall in the summer of 586 (some scholars say 587); Nebuchadnezzar's eighteenth year overlaps in 587. The chapter 37 dates now read 588/587; chapters 34 and 38 already agreed.
23. Fixed. The chapter 33 Critical lens no longer gives Tov a "late Persian period" date; it says only "part of the later expansion of the Hebrew".
24. Partly fixed. The Orthodox entry now cites liturgy-chrysostom. A pointer was added at note 33:24 (top church-israel; Nostra Aetate section 4 sourced; Romans 11 cited). Not done: Lutheran and Baptist entries and more Dispensationalist sources, because I have no verified confession wording for them on this passage; a traditions pass can add them.
25. Fixed. Glosses 34:20, 36:2, 37:21, 32:5, 32:35 and 32:9 now stay within the text or point to the note.
26. Fixed. Chapter 38 "when" for 38:7-13 is now "after the officials threw Jeremiah into the cistern; the text does not say how soon". Chapter 37 gains a settings card for 37:11-16 (the arrest and Jeremiah's "A lie!").
27. Fixed. The witnesses paragraph now says Ziegler was not read and "the Greek" means Swete's Codex Vaticanus; Radak at 32:9 and 36:23 was re-read on Sefaria and is now reported correctly; Targum Jonathan at 33:15 (meshiha ditsdqa) stands.
