# Hostile review: Jeremiah 26-31

Reviewer read plain.txt, notes, variants, glosses, chapters, topics and sources against `texts/orig/Jer.json` (via `literal.js`), `texts/auto/Jer.json`, Swete's Greek (`lxx.py`, Greek 33-38), the Qumran transcriptions (`dss.py`, run for 26-31), the sister parts' plain.txt and `content/proposals/prophets/terms.json`. Sefaria was fetched for Sanhedrin 93a, Rashi on 31:22 and the Targum on 30:9. `VERBOSE=1 node tools/build.js --check Jer/26-31` gives 0 errors, 1 warning. The warning is in `Jer/book.json` (1:1 quote), which belongs to part 01-06 and not to this part.

## Verdict

This is a competent, mostly honest part. No invented source, manuscript or find turned up (Sanhedrin 93a checks out; the Targum at 30:9 reads as the note says). Most of the Greek and Qumran claims are right. It still has real problems.
- One genuine mistranslation: 27:3, "send word" where the Hebrew and the Greek both say "send them".
- Two parallel pairs left misaligned (30:10-11 against 46:27-28, and 30:23 against 23:19).
- A book-wide conflict in how deber is rendered.
- Several variants the writer's own notes imply but never entered: Qumran and the Greek agree against the MT at 31:9 and 31:12, and there are Greek differences at 28:8, 29:25 and 31:34.
- One factual error about the scroll (27:2).
- A number of verses that keep the NIV/ESV sentence shape.
- Two traditions answers with no source, and a baptism card missing the Orthodox, Anglican and Methodist answers.
- Settings that state a Judean-led conspiracy as fact.

27:1 ("Zedekiah") is a defensible choice, but it is badly documented.

Counts: critical 0, major 9, minor 15.

## Findings

### Major

1. **27:3 mistranslation ("send word").** plain.txt 27:3 reads "Then send word to the king of Edom...". The Hebrew is וְשִׁלַּחְתָּם, "and you will send *them*", meaning the straps and yoke-bars of 27:2. Greek 34:2 has ἀποστελεῖς αὐτούς ("you will send them"). 4QJer-c (4Q72) preserves וְשִׁלַּחְתָּם in 27:3. "Send word" is the NIV/ESV reading and loses the sign-act, in which the yokes themselves go to the five kings. No note explains the choice.
   Fix: "Then send them to the king of Edom, ..." and add a note. Some commentators read the suffix as the message, so give that as the alternative view.

2. **30:10-11 against 46:27-28 are not aligned, though the Hebrew is the same.**
   - 30:10 and 46:27 are the same Hebrew apart from "the LORD declares" in 30:10. The Plain differs in nearly every phrase: "So you" / "As for you"; "terrified" / "shattered" (the same verb, תֵּחַת); "I am about to save you" / "See, I am the one who will save you"; "descendants" / "children" (both zar'akha, and 31:36-37 uses "offspring"); "the land where they are captives" / "land of their captivity"; "be at peace and at ease" / "rest undisturbed, at ease"; "frighten" / "scare".
   - 30:11 and 46:28 differ in Hebrew only at "scattered" (hafitsotikha) against "driven" (hiddachtikha), and in 30:11's added "to save you". The Plain also varies "finish off" / "make a full end" (the same *asah kalah*), "fairly" / "with justice", and "simply let you off" / "let you off as innocent". 30:11 uses "finish off" for kalah, and 27:8 uses "finished it off" for a different verb (tamam).
   - Fix: 30:10-11 is the earlier text and the model. Make 46:27-28 follow it, or settle one wording for both, and keep only the real Hebrew differences (ne'um YHWH placement, scattered/driven, "to save you"). Also align "terrified/shattered" with 1:17 (Plain "break down" for the same root hatat). Choose one form.

3. **deber ("plague" or "disease") conflicts across the book.** The terms proposal says "deber is 'disease' here, as in Jeremiah 26-31". Parts 21-25 and 32-38 use "plague" for the same formula: 21:6-9, 24:10, 32:24, 32:36, 34:17, 38:2. Parts 39-45 and 14:12 use "disease". 21:9 and 38:2 ("will die by the sword, by famine and by plague") are the same Hebrew sentence as 27:13 ("by disease"), and 27:8 and 29:17-18 are the same formula. Ezekiel's term entry in the same file says "plague". The lead must choose one rendering for the whole book (the Jeremiah 21, 24, 32, 34 and 38 renderings plus Ezekiel and Leviticus suggest "plague"). Until then the cross-part check fails. Note also that the Greek of 27:8 has only "sword and famine", with no deber (Greek 34:6).

4. **Missing variant entries where Qumran and the Greek agree against the MT.**
   - 31:9: the MT has אל נחלי מים ("to streams"). 4Q72 reads «על» (visible, not restored), and the Greek has ἐπί (38:9). The note on 31:9 mentions the scroll only and calls it "a small difference".
   - 31:12: the MT has אל טוב יהוה. 4Q72 reads «על», and the Greek has ἐπ᾽ ἀγαθά (38:12). The note mentions both but there is no variant entry.
   - Both are two independent witnesses against the MT, and at 31:12 the reading bears on nahar "stream" against "shine" (the note's own debate). They need variant entries with `follow` reasoned.
   - Also in 31:8, 4Q72 has «ואקבצם» ("and I will gather them") against the MT's וקבצתים. It is not listed.

5. **Missing Greek variants with content.**
   - 28:8: Greek 35:8 has only εἰς πόλεμον ("of war"); it lacks "calamity" and "pestilence". This bears directly on the test of a prophet in 28:8-9.
   - 29:25: the MT says "*You* sent letters in your own name" (שלחת). Greek 36:25 reads "I did not send you in my name" (Οὐκ ἀπέστειλά σε). This is a substantive difference in the charge against Shemaiah.
   - 31:34: the MT has רֵעֵהוּ ("neighbor"). Greek 38:34 has τὸν πολίτην ("fellow citizen"), and Hebrews 8:11 follows the Greek (the NA28 reading). The variants entry on Hebrews at 31:32-33 shows the writer meant to cover Hebrews' Greek form, so this is a gap.
   - Optional: Greek 38:3 "drew you to compassion" (οἰκτείρημα) where the MT has "loyal love"; Greek 38:12 "fruitful tree" for "watered garden".

6. **Factual error about 4QJer-c at 27:2, and overstated Qumran summaries.**
   - Note 27:2 says 4Q72 "preserves 27:2 with both words". `dss.py` shows `[מוסרות] ומטות`: moserot is restored in brackets, and only umotot is visible. Say "umotot is preserved; moserot is restored".
   - Variant 30:22 says "4QJer-c agrees with the MT throughout chapters 30-31 apart from spelling". It does not: 30:17 has נדחת, plus only the clause from "כי" onward ("because they called you an outcast..."). The first half of 30:17 ("I will make new skin grow... declares the LORD") is not preserved or not present, and the text should say which. 30:18 has «ונבנה», 31:8 has «ואקבצם», and 31:9 and 31:12 have «על». The chapters witness paragraph ("agreeing with the Hebrew") needs the same correction (also chapters 30 C and 31 C).

7. **27:1 ("Zedekiah son of Josiah"): judged.** The choice is defensible. The MT's "Jehoiakim" contradicts 27:3, 12, 20 (Jeconiah already deported) and 28:1, so this is a clear scribal slip, and the brief allows departure for that. But the entry is badly documented:
   - The first "reading" in variants.json is not a witness ("Context of 27:3, 12... the Plain follows this"). Name the real witnesses (BHS reports a few Hebrew manuscripts and the Syriac reading Zedekiah; check this) and say plainly when the evidence is only context and the Syriac.
   - The Greek has no v. 1, so it supports neither reading. "Suggests the heading was a late addition" is speculation presented as inference.
   - "Copied from the heading of 26:1" is a guess; label it so.
   - The Plain's "had just become king" (בראשית) puts Zedekiah's accession at the head of a chapter that the cards date to his fourth year (594/593 BC). Add a note at 27:1 in the notes, not only in the variant, saying the date tension is inherited from the Hebrew (28:1 repeats it). The chapter 27 summary says "seems to have Jehoiakim's name by mistake", which is fine.

8. **NIV/ESV sentence shape retained.** These verses follow the shape of the modern versions and should be reworked from the Hebrew.
   - 31:35: "who gives the sun to light the day and the fixed rules of the moon and stars to light the night, who churns up the sea, and its waves roar" is the ESV compound-object shape ("gives the sun for light by day and the fixed order of the moon and the stars..."). Break it, e.g. two separate clauses with "He" and a short line on the sea.
   - 31:7: "Sing for joy for Jacob; shout aloud for the chief of the nations... give praise and say, 'LORD, save your people, the remnant of Israel'" matches both versions' pattern. The Hebrew has בראש ("at the head of") and the note says "head", but the Plain says "chief".
   - 31:6: "For a day is coming when watchmen will call out on the hills of Ephraim, 'Get up, let us go up to Zion...'". The Hebrew is כי יש יום, "yes, there is a day", with *har* singular ("Ephraim's hill country").
   - 29:11: "plans for peace, not for harm, to give you a future full of hope" keeps the ESV shape (plans for X and not for Y, to give you a future and a hope), and "full of hope" fuses two nouns. Brief rule: familiar lines may stay only where the Hebrew forces them. The shape is not forced. Recast, e.g. "plans of well-being and not of harm, to give you a future and a hope" is too close; try two short sentences.
   - 31:39: "run on... straight to" follows ESV ("go out farther, straight to the hill Gareb"). The Hebrew has נגדו, "opposite it".
   - 28:3: "bring back to this place all the objects of the LORD's house that Nebuchadnezzar... took from this place and carried to Babylon" keeps the shape of the ESV/NIV relative clause. The Hebrew order ("in yet two years of days I am bringing back...") is not followed.
   - 29:5-6: "Build houses to live in. Plant gardens and eat their fruit" and "Marry wives... give your daughters to husbands, so that they can bear sons and daughters" keep the ESV/NIV frame. "Marry wives" is also not natural English for "take wives".
   - 30:18: "rebuilt on its mound... where it rightly belongs" (ESV "mound", NIV "proper place"); "fortress" for armon is a weak choice ("palace" or "citadel").
   - 31:33-34 and 27:5 (flagged by the writer) are mostly Hebrew-forced and acceptable ("put my law inside them, and on their hearts I will write it" keeps the Hebrew order). Only trim "Here is" (זאת הברית, "this is") if you want less of the ESV opening. 28:2, 29:4 and 31:11 are likewise forced.

9. **Traditions cards.**
   - The Orthodox answer on "Who is the new covenant made with" has no source (the array is empty); the brief demands each answer be sourced. Give a catechism, council or named teacher (for example the Liturgy of Chrysostom's institution words, or a named Orthodox writer on Hebrews 8).
   - The Anabaptist answer on baptism has no source (Schleitheim Art. 1 or Dordrecht Art. 7 would do).
   - The infant-baptism card omits Orthodox (infant baptism with chrismation), Anglican and Methodist, though they have distinct, official answers. The Catholic and Lutheran answers also do not address 31:34 at all (the question is about that verse), so say how each reads "they will all know me".
   - Baptist card on the covenant: citing "Second London Confession ch. 29" for the covenant itself is the baptism chapter. The covenant chapters are 7 and 20 (check), with ch. 29 for baptism.

### Minor

10. **Setting cards assert the conference and revolt as fact.** Settings 27:2-11 ("when the envoys had come to plan a revolt"), chapter 28 H ("the mood of the conference in 27:3") and the nebuchadnezzar topic ("In 594/593 BC...") treat the envoys' purpose as known. Jeremiah 27:3 says only that envoys had come to Jerusalem. The link to the revolt in the Babylonian Chronicle year 10 (595/594 BC, Wiseman) is a hypothesis of Bright, Holladay and others; others point to Egypt's Psamtik II tour (about 592 BC) instead. Write "probably", and note the alternative. The note title "A conference of small kingdoms against Babylon" should be hedged too. The 51:59 link ("went to Babylon to prove loyalty") is also a guess.

11. **Elnathan (26:22).** The identification with the Elnathan of 36:12, 25 is reasonable (same name and patronym) but the note says "The writer shows a man who...", which reads oddly (the Bible does not say they are the same). Say "if the same man". The link with Nehushta's father (2 Kings 24:8, 29:2 note) is correctly hedged. Lachish Letter 3 names another "Elnathan" in the same period (a Konyahu son of Elnathan), so name the possibility of two men.

12. **Shiloh destruction layer (26:6, chapter 26 deep, topic).** The claim of a destruction layer around 1050 BC is correct in outline (Danish and Finkelstein excavations), but it is cited to Lundbom and Bright, who do not cover archaeology. Add the source (Finkelstein, ed., *Shiloh: The Archaeology of a Biblical Site*, 1993) or write "reported by". Say too that the site was inhabited, thinly, in later periods, as the reading of Jeremiah 7 is disputed.

13. **Sanhedrin 93a (29:22 note).** Verified: Ahab and Zedekiah, Nebuchadnezzar's daughter, the furnace, Joshua singed, Zechariah 3:2 and Jeremiah 29:22 all appear. But Joshua is "singed", not "saved" (the Gemara has him burned in part and explains it by his sons' marriages). Correct the sentence. The p line "later Jewish writers tied the story to the fiery furnace" is vague; say Bavli Sanhedrin 93a.

14. **Rabbinic readings of 31:22 and 31:31-34.** Rashi (verified on Sefaria) reads the line as Israel "hiding from" and ashamed to return, and then as the woman pursuing the man; the note's one-line summary is acceptable. The Radak claims (31:22; "never a new Torah... Malachi 3:22") could not be confirmed (the Sefaria record returned no text). Per the brief, write "reported by" unless the writer read the text. Malachi 3:22 is Hebrew numbering; the site's English is Malachi 4:4. The Targum at 30:9 checks out ("they will obey the Messiah son of David their king").

15. **29:13 translation.** "If you search for me with all your heart, you will look for me and find me" is circular. The Hebrew order is "You will seek me and find me, when you seek me with all your heart" (two different verbs, baqash and darash). Restore the order; do not make it a conditional with a redundant main clause.

16. **30:23 against 23:19, and 31:28 against 1:10 (term drift).**
    - 23:19 "Fury has gone out, a whirling storm; it will burst on the heads of the wicked"; 30:23 "His heat has gone out, a spinning gale; it will whirl down on the heads of the wicked". The Hebrew differs only in "mitgorer" against "mitholel" and a waw; chemah is "fury" at 23:19, so do not render it "heat" and do not add "His". Align "yachul". 30:24 against 23:20 is fine.
    - 31:28 "uproot and tear down, overthrow and destroy" does not match 1:10 ("pull up and pull down, to destroy and demolish"). The notes and the chapter 30 deep section call these the same commission verbs. 18:7 and 45:4 use "uproot/tear down". Pick one set for 1:10, 18:7, 24:6, 31:28, 42:10 and 45:4.

17. **27:10 and 27:15 "and the result will be that".** The Hebrew למען is normally purpose ("in order that"). The Plain softens God's purpose without a note. Give the purpose reading (Greek πρὸς τὸ μακρῦναι "so as to remove" at 27:10) or add a note.

18. **30:7 "Oh, how great that day is!"** הוֹי is "alas/woe" (the day is terrible, with 30:5-6). "Oh, how great" reads as wonder. Use "Alas".

19. **29:10 "the seventy years".** The Hebrew has no article ("seventy years"); the article makes it a known period. ESV and NIV have "seventy years", so this is a deliberate, interpretive departure that needs a note or a revert.

20. **Factual or reference slips in notes and chapters.**
    - 29:11 note and chapter 29 deep: "a whole generation died in Babylon... (29:32)". 29:32 is about Shemaiah's line, not the generation; cite 29:10 or 28:3-4.
    - 29:2 note: "skilled workers who made weapons, as 2 Kings 24:14 says". 24:14 says craftsmen and smiths only.
    - Chapter 29 C: "Most think the letter goes back to Jeremiah, since it has no echo of the later hope of a quick return". "Most" is not checked, and the reason is weak.
    - 31:11 note: the "stronger hand" is identified as Babylon, but for the northern poem it is Assyria; give both.
    - Chapter 26 J: "grew from stories like this one" (Lamentations tradition, Bava Batra 15a) is unsupported.
    - Chapter 26 F: "Futurist readers who hold to a rebuilt Temple" has no source, and chapter 27 F ("final return of the Temple's vessels") is unsourced speculation that the card admits ("no event... is tied"). Cut or label.
    - Chapter 27, 26:1 note: Jehoiakim as "a second son of Josiah" is confusing next to Jehoahaz (younger); say "an older brother".

21. **Glosses.** Several are invented or odd: 28:3 "within two years, give or take nothing" (patronizing and unclear); 29:14 "round you up like scattered sheep" (adds an image; the Plain's verb is "gather"); 31:6 "lookouts who called out when a festival day began" (stated as fact; the Hebrew does not say so); 31:29 gloss "set on edge" contradicts the Plain's "go numb" (Hebrew qahah is "be dull"); say which. 30:6 "bracing himself, the way a woman in labor does" is a guess.

22. **Missing or incomplete settings.** 28:10-11 (Hananiah breaks the yoke) has no setting card; 26:7-11 (the accusation) and 26:20-23 (Uriah) have none. 26:2-6 "during a pilgrimage season" is not in the text. 29:1-23 is fine, but 29:15 ("You say, 'the LORD has raised up prophets for us in Babylon'") is not explained.

23. **Ketiv/Qere.** 31:21 (Ketiv "I went", Qere "you went") is not mentioned; the Plain follows the Qere without a note. 29:14 Ketiv shevitkhem/Qere shevutkhem is not mentioned either (low priority).

24. **30:12-13 translation.** "no healing, no new skin for you" renders *te'alah* ("healing, remedy") as "new skin"; "new skin" belongs to arukhah in 30:17, and the linking note on 30:17 depends on it. Use "no remedy" at 30:13 so the echo is visible.

25. **Duplicate topic contributions.** `davidic-covenant` and `messiah` both carry 30:9 and 30:21 with nearly the same text. Merge into one (davidic-covenant) with a one-line pointer in messiah.

## Checked and found sound

- Cross-part pair 23:19-20 / 30:23-24 is fine except as in item 16.
- Greek claims for 26:7-8, 11, 16 ("false prophets"), 26:22, 27:1 (absent), 27:6 ("my servant" absent), 27:7, 27:19-22, 28:1, 28:13, 29:7, 29:10, 29:11, 29:14, 29:16-20, 30:10-11, 30:15, 30:22, 31:2, 31:3, 31:7, 31:8, 31:14, 31:19, 31:22, 31:32 (ἠμέλησα) and 31:33 are accurate against Swete.
- The list of verses 4QJer-c preserves (26:10-13; 27:1-3; 27:13-15; 30:6-9; 30:17-24; 31:1-14, 19-26) matches `dss.py`; 4QJer-a has only 26:10 (a few words); no scroll covers 28 or 29.
- Sanhedrin 93a, Targum 30:9, Augustine *City of God* 19.26, CD VI 19, the Rosh Hashanah haftarah (Jeremiah 31:2-20) and the Catechism references (121, 839, 1250, 1966) check out.
- Westminster 7.5-6, 28.4, and Calvin's *Institutes* citations are accurate.
- The build's `--check` result: 0 errors; the one warning (book.json 1:1) is outside this part.

## Fixes applied

1. Accepted. 27:3 now reads "Then send them to the king of Edom..."; new note at 27:3 gives the Hebrew, Greek 34:2 and 4Q72, and the "send word" reading as the alternative.
2. Accepted as a model, no change to 30:10-11 (lead decision: 30:10-11 is the model for 46:27-28). The 46-49 part must follow it. Also 27:8 changed from "finished it off" to "put an end to it" so tamam and kalah no longer share one English phrase. The reviewer's 1:17 "break down" link is left for the 01-06 part (hatat is "shattered" in 30:10 and 46:27).
3. Accepted with the lead's choice: "disease" for deber everywhere in Jeremiah. This part already used it (27:8, 13; 28:8; 29:17-18); the terms proposal now says "disease" everywhere in Jeremiah and no longer names Jeremiah 21:6 as "plague". Parts 21-25, 32-38 and 38 change in their own folders. The Greek's lack of deber in 27:8 is already noted by the chapter 27 summary.
4. Accepted. Checked against dss.py and Swete: new variant entries for 31:8 (4Q72 "and I will gather them"), 31:9 and 31:12 (4Q72 al, Greek epi, against MT el). The Plain keeps "to" (al and el interchange, the three following al phrases at 31:12 read the same way); the entries say so. The 31:9 and 31:12 notes updated. The variant at 31:9 on "prayers for mercy" now says the scroll's word is restored, not damaged. The optional Greek "compassion" (38:3) and "fruitful tree" (38:12) not entered: declined as optional.
5. Accepted. New variants: 28:8 (Greek only "war"), 29:25 (Greek "I did not send you in my name"), 31:34 (Greek and Hebrews 8:11 "fellow citizen"). Verified in Swete 35:8, 36:25, 38:34.
6. Accepted. Note 27:2 now says motot is preserved and moserot restored. Variant 30:22 and the 30 and 31 chapter C paragraphs now list the real differences: 30:17 (nidachat, only the second half preserved), 30:18 (and it will be rebuilt), 31:8, 31:9, 31:12, a stray letter in 31:22. The chapter 26 "witnesses read" paragraph is corrected the same way and no longer says the medieval readings were "not read afresh".
7. Accepted. The variant at 27:1 no longer lists a non-witness as a witness: it says the evidence is the chapter's own context, that the Greek has no verse 1 and so supports neither name, that "copied from 26:1" is a guess, and the "late addition" inference is deleted. Syriac and Hebrew manuscript claims are not made because none was checked. New note at 27:1 on the date tension with 28:1.
8. Accepted in part. Rebuilt: 28:3 (Hebrew order, relative clause broken), 29:5-6 (and 29:28 to match), 29:11 ("a future, and hope with it" in place of "a future full of hope"), 30:18 (ruin heap; citadel; old place), 31:6 ("Yes, there is a day...", Ephraim's hill country), 31:7 ("at the head of the nations"), 31:35 (broken into short clauses), 31:39 ("opposite it"), 31:33 ("This is"). 28:11 changed to "within two full years" to match 28:3. 27:5, 28:2, 29:4, 31:11, 31:33-34 left: Hebrew-forced. Glosses and notes that quoted these verses updated.
9. Accepted. Orthodox new-covenant answer now sourced (Liturgy of St John Chrysostom, Ware). Baptist answer cites London Confession ch. 7 and ch. 29. Baptism card: Anabaptist sourced (Schleitheim art. 1, Mennonite Confession 1995); Catholic and Lutheran answers now address 31:34; Orthodox, Anglican (Thirty-Nine Articles 27) and Methodist (Articles of Religion 17) added. I did not check ch. 7 of the Second London Confession line by line beyond the chapter titles, so the Baptist covenant line is worded as the confession's covenant-of-grace chapter, not as a quotation.
10. Accepted. Settings 27:2-11, chapter 27 H, chapter 28 H, note 27:3 (retitled "Envoys from five small kingdoms") and the nebuchadnezzar topic now say the purpose of the visit is a historians' guess and name the Egypt (Psamtik II) alternative. 51:59 "to prove loyalty" is now "some propose".
11. Accepted. Note 26:22 says "if the same man", and names the Konyahu son of Elnathan of Lachish Letter 3 (source torczyner-lachish). Chapter 26 H hedged.
12. Accepted. Shiloh note, chapter 26 deep and shiloh topic now say "reported", name the Danish excavations (buhl-shiloh) and Finkelstein (finkelstein-shiloh, 1993) and add that the site was lived in thinly later.
13. Accepted. Sanhedrin 93a note: Joshua came out singed, tied to Zechariah 3:2; the p line names Bavli Sanhedrin 93a.
14. Accepted. Radak on Sefaria was fetched this session: on 31:22 he reads the people turning to seek the LORD; on 31:31 he says the newness is that the covenant will be kept, not a new Torah, and cites Malachi 3:22-23. Both claims now stand as read. Chapter 31 J gives "Malachi 3:22 (Hebrew numbering; 4:4 in English)". Note 31:22 states Radak's reading and Rashi's in part.
15. Accepted. 29:13 now "You will look for me and find me, when you search for me with all your heart."
16. Accepted. 30:23 now matches 23:19 exactly ("Look! The storm of the LORD! / Fury has gone out, / a whirling storm; / it will burst on the heads of the wicked"); new note at 30:23 names the Hebrew differences (mitgorer/mitholel, no waw). 31:28 now uses the 1:10 vocabulary ("pull up and pull down, to demolish and destroy and to bring harm") and 31:40 "pulled up or demolished"; notes at 31:28, 31:40 and the chapter 30 deep section updated. 18:7, 42:10 and 45:4 (other parts) still use "uproot/tear down".
17. Accepted. 27:10 "so as to take you far from your land"; 27:15 "so that I will drive you out and you will perish"; the 27:10 note gives the purpose reading and the Greek.
18. Accepted. 30:7 "Alas, that day is so great!"
19. Accepted by reverting: 29:10 "When seventy years for Babylon are over". Quote sync listed for the lead.
20. Accepted. Fixed: 29:11 note and chapter 29 deep (no more "29:32"), 29:2 note (craftsmen and smiths), chapter 29 C ("most" removed, Holladay/Lundbom/Carroll named), 31:11 note (Assyria for the northern poem, Babylon for the finished book), chapter 26 J ("grew from stories" deleted), chapter 26 F and 27 F (unsourced speculation replaced by "No future event is tied..."), 26:1 note (older half-brother, ages from 2 Kings 23:31, 36).
21. Accepted. Glosses changed: 28:3, 29:14, 30:6, 30:18, 31:6, 31:29 (now explains "go numb" as dulled teeth, qahah).
22. Accepted. New settings for 26:7-11, 26:20-23 and 28:10-11; 26:2-6 "pilgrimage season" removed; new note at 29:15 explains the exiles' claim.
23. Accepted for 31:21: new Ketiv/Qere note (the scroll's word is restored, so it cannot decide). 29:14 Ketiv/Qere (spelling only) not added: low priority, declined.
24. Accepted. 30:13 now "no remedy, no cure for you"; the 30:17 note links the two.
25. Accepted. The messiah topic now carries a one-line pointer; davidic-covenant keeps the full text.
