# Hostile review: Habakkuk (whole book, flat folder)

Reviewer: separate agent, 2026-10-28. Checked: plain.txt against `node tools/literal.js Hab 1-3` and `texts/orig/Hab.json`; the `tools/dss.py Hab 1-3` printout for Mur88 and 4Q82; every note, variant, setting, card and topic contribution; quote-matching against the site's Isaiah, Jeremiah, Lamentations, Deuteronomy, Psalms, Kings, Luke, Romans and Acts Plain; `VERBOSE=1 node tools/build.js --check Hab` (0 errors, 0 warnings). Web search was used for the 1QpHab lemma at 2:16 and the Mekhilta list.

## Verdict

The translation is sound. I found no mistranslation, no omitted line, and no sentence copied from NIV or ESV. Where the Plain shares a shape with them (2:3, 2:4, 2:14, 3:17-19) it is because the Hebrew is the same, and nothing there needs changing. The book is careful about labeling the Qumran readings as the community's and about saying "this site's data does not include 1QpHab". The rabbinic and patristic citations the writer flagged as unverified largely hold up (see "Verification of the writer's list" at the end). The weak spots are these. (1) One manuscript reading is reported wrongly: the 1QpHab lemma at 2:16. (2) The 2:4 variant omits witnesses that the brief requires and that a careful reader needs. (3) The Jewish lens is thin: the brief asked for Rashi, Ibn Ezra, Kimhi and the Targum, and they are absent from every note. (4) Several statements are internally inconsistent, such as "the one place the Plain follows the Greek", a note that says the Plain renders 2:1 as "correction" when it says "complaint", and an anchor on the wrong words. (5) Scholars' positions are attributed from memory, and the traditions cards for 2:14 attribute to churches a reading of Habakkuk they never state. All of this is fixable without rewriting the book.

Count: critical 1, major 9, minor 23.

---

## Critical

**1. variants.json, entry 2:16 ("Uncircumcised, or stagger?"), field `b`: the 1QpHab lemma is reported wrongly, and the scroll is left out of the readings.**
The entry says the Qumran commentary's "did not circumcise the foreskin of his heart" "suggests it read the Masoretic form; I have not checked the lemma itself." It did not read the Masoretic form. 1QpHab XI 9 quotes the verse with *vehera'el* (והרעל, "and stagger"), the same consonants as MT *vehe'arel* in a different order. This is the reading of the Greek (*saleuthēti kai seisthēti*) and, per the NRSV footnote and translation handbooks, a Qumran manuscript, the Greek and the Syriac against MT. The pesherist then plays on both senses ("the foreskin of his heart"). The result for the entry:
- It states the opposite of the fact, as a guess, about the one scroll that preserves the verse.
- The Greek reading is presented as the Greek's own misreading (`why`: "The Greek seems to read hera'el"). A Qumran Hebrew witness supports that reading, and the entry hides it.
- The "harder reading" argument for following MT stays arguable, but it must be made with the real evidence in view.
Fix: add a third reading, "Pesher Habakkuk (1QpHab XI 9), as published (not in this site's transcription data): *vehera'el*, 'and stagger'", and state that the lemma agrees with the Greek against MT. Delete the sentence in `b` about the "Masoretic form". Re-argue `follow` and `why` with the pesher on the Greek side (keeping MT is defensible: the shaming fits 2:15 and "uncircumcised" is the harder reading). Say in the note on 2:16 that the pesher's comment depends on the pun. Replace "I have not checked" with a source (Horgan; Brownlee; the Dead Sea Scrolls Bible).

---

## Major

**2. variants.json, 2:4 (both entries): the witnesses are incomplete, and the brief asked for "every witness named".**
- The entry "His faithfulness, my faithfulness, or faith?" lists MT, LXX, Hebrews and Paul, but not 1QpHab. The lemma reads *be'emunato* "by his faithfulness", and the pesher's comment reads *'emunatam* "their faithfulness", with *'emunah* then directed to the Teacher. Note 31 does explain this, but the variant should list the lemma as a reading and flag the lemma/comment difference. The writer's own "unverified" item was exactly this, and the book handles it only in prose.
- No Greek witness besides Swete and Hebrews appears: 8HevXIIgr (a kaige revision; book.json never lists it), Aquila, Symmachus and Theodotion, and the textual families of the LXX itself. Brief-twelve2 asks that the kaige revision be noted. "8Hev", "kaige" and "Nahal Hever" occur nowhere in the book.
- The versions are missing: the Vulgate (*iustus autem in fide sua vivet*, "his faith"), the Peshitta and the Targum. A reader following Luther or Jerome needs the Vulgate reading at this verse above all.
- "Hebrews 10:38 and some Septuagint manuscripts (reported as having 'my' after 'righteous')" names no manuscript. Name them (Alexandrinus and others, per Ziegler's apparatus) or say "reported in Rahlfs/Ziegler, not checked here".
- Swete's text is the only LXX text consulted. Rahlfs's *ek pisteōs mou* should be stated as the Göttingen/Rahlfs form too, since the brief names it.
Fix: add the readings above, each with the source it is quoted from, and mark any not checked as "reported by".

**3. Jewish lens (J) is missing its medieval and targumic material (notes.json, chapters.json, book.json lens text).**
brief-hab.md asks for Rashi, Ibn Ezra and Kimhi on 1:12 and 2:4, and for Targum Jonathan. The lens text in book.json promises "the medieval commentators and Targum". The notes cite none of them. They appear only in two chapter `views.J` lines ("read the Chaldeans as Babylon" and "read the woes against Babylon"), which are unsourced generalities. Rashi, Ibn Ezra and Kimhi each comment on how "we will not die" and "by his faithfulness" are to be read, and the Targum on Hab 3 is famously paraphrastic. Either write the notes (a `view` at 1:12 and at 2:4, a `history` or `echo` note on the Targum of ch. 3) or delete the promise from the lens text and from `views.J`. Do not cite them from memory. Check Mikraot Gedolot or Sefaria for each.

**4. book.json `sections` "Greek and Hebrew": "In one place, 2:17 ... the Plain follows the Greek against the Masoretic Text." variants.json 2:17 repeats it ("the one place in the Plain").**
This is false by the book's own data. In the 3:6 entry `follow` is 1: the Plain reads "he shook" against the MT pointing "he measured", and the Greek has *esaleuthē*. The 3:6 variant alone refutes "one place". Also, 3:6 `why` says "(a root mud)", while the note says "many scholars read the same consonants as 'he shook' (mud)". It is a re-pointing, not a reading found in a witness. Fix: either say "in two places (2:17, 3:6)" and distinguish a reading taken from the Greek from a re-pointing, or state it correctly. Check the lead's alignment note on this too.

**5. notes.json, 1:12 "Rock" (note on `tsur ... lehokiach`): "The Plain uses 'correction' for the noun tokhachat of 2:1 as well, so the reader can hear the link."**
The Plain of 2:1 reads "what answer I will give to my **complaint**", and note 24 explains why the Plain chose "complaint". The claim is false and contradicts the next-but-six note. Fix: delete the sentence, or say that the Plain deliberately separates the verb ("correction") from the noun ("complaint") and explain the link in words.

**6. notes.json, 1:13 "Too pure to see evil": the note contradicts its own heading, and the Plain commits to a reading.**
The heading says "Too pure", and the body says "The Hebrew has no 'too'; it says the eyes are pure, 'from seeing evil.'" The Hebrew is *tehor 'enayim mere'ot ra'* with the *min* of inability ("too pure to see": GKC 119x; the literal-line printout itself shows "[you are too] pure of eyes for seeing"). Also:
- "In Habakkuk it is the opposite" of the claim that God cannot look at sin overstates it. The text says God's eyes cannot approve evil and the prophet's complaint is that he nevertheless seems to look on. That is a tension, not the opposite.
- The Plain "so you cannot see evil" is fine as a sense line, but "see" for *ra'ah* in the same verse as "gaze" (*nabat*) for the next two clauses repeats the literal. Keep.
Fix: rewrite the note so the Hebrew *min* is correctly described and the theological point is made as the prophet's argument, not as a reversal of the usual reading.

**7. variants.json: two entries the brief requires are missing, and several "Mur88 preserves" statements overreach the printout.**
- brief-hab.md lists full entries at 1:6 and 3:8. There are none. 1:6: the Chaldeans (the pesher's lemma reads *Kasdim*, which the note already depends on, and the pesher's gloss makes them the Kittim). 3:8: *'im bannehārim* ("Was it against the rivers?"), where the LXX reads "in rivers"? Mur88 `[הבנהרים]` is restored. At a minimum 1:6 deserves its own entry because the Duhm "Kittim" proposal and the pesher both turn on it.
- 2:3 first entry: "Mur88 reads all of it". The printout shows `[למועד]` and `[לקץ]` restored. Mur88 preserves *vayafeach* and *velo yekhazzev*, not *laqets*.
- 1:9: "the word is restored in its printout." Only *qadimah* and *panehem* are restored. *megammat* is preserved.
- 3:10: the claim that "resh and tav can look alike in late scripts" explaining `עבות` for `עבר` is unsupported. In the Herodian and later hands resh/dalet and waw/yod are the confusable pairs, not resh/tav. Present the Mur88 reading as a variant, with "possible explanations" labeled as such.

**8. Named-scholar attributions made from memory (several places).**
The following attribute a position to a named scholar without a verified page. Soften each to "some commentators (for example ...)" and drop names the writer cannot verify, or check them in the commentary:
- notes.json, "Who are the wicked" and "When was Habakkuk written?", book.json audience `views`, chapters.json settings 1:2-4: "the most common view (Roberts, Andersen)". Roberts' date and identification are clear (Jehoiakim); Andersen's treatment of the wicked of 1:4 and of the date is more cautious, and he leaves several options open.
- chapters.json ch. 1 spec box: "It overlaps with commentators who treat 1:12 as the book's first confession (Andersen and Roberts)." book.json spec: "This overlaps with readings ... by Sweeney and Andersen." notes.json 3:16 spec: "published readings by Sweeney and Andersen". The spec boxes may state their overlaps, but a claim that named scholars hold the view is a factual claim and the project rule is "never invent a source". Remove the names or verify.
- chapters.json ch. 2 settings 2:2-5: "The vision is the downfall of the oppressor in 2:6-20 (Roberts, Andersen)."
- notes.json 2:4 "the faithfulness": Cranfield and Hays are accurately named. Keep.

**9. chapters.json, ch. 2 traditions card on 2:14: the churches' statements are not about Habakkuk 2:14, and the inferences are unlabeled.**
The question asks what each tradition says about 2:14, but each row is the church's statement on the millennium or the kingdom in general: Catechism 677, Augsburg 17, Westminster Larger Catechism 191, Chafer, Adventist belief 27. The closing sentences are the writer's inference, written as the church's view: Catholic "The earth is filled with the glory of God at the new creation"; Lutheran "the earth is filled with God's glory at the last day, in the new creation"; Adventist "The earth is not filled with the knowledge of God's glory before Christ returns". None of the sources says this. The Orthodox row has no source key at all. Fix: rephrase the question to "what does the church teach about the course of history before the end", stop attributing a reading of 2:14 to Rome, Augsburg and the Adventists, label each inference "applied to 2:14, this implies ...", and give the Orthodox row a source (the Creed's "his kingdom will have no end"; Chrysostom or a catechism the writer can name). Note also the Augsburg Confession 17 anathema is against a particular chiliasm ("Jewish opinions"); say so fairly.

**10. notes.json 2:4 "The Talmud: 613 commandments become one": "Paul's use of the same verse ... reads this common Jewish habit of finding the center of the Law in one line."**
This asserts Paul's motive and a connection to a text (Makkot 23b-24a) written centuries later. It is unsourced and unfair to Paul's argument in Gal 3 (where the verse is set against the law). Fix: say only that the Talmud and Paul both found the verse central, independently, and do not say that Paul "reads" a habit. The rest of the note (the sequence Simlai, David 11, Isaiah 6, Micah 3, Isaiah 2, Amos 1, Habakkuk 1) is correct.

---

## Minor

**11. notes.json 2:4 "The Qumran commentary on 2:4": anchor and claim.** The note is anchored on "the soul inside him is not upright" but treats "the righteous will live by his faithfulness". Re-anchor it to the second line. State in the first sentence that the lemma reads *be'emunato* and the pesher's comment reads *'emunatam*, with *'emunah* read as loyalty to the Teacher. "oldest known Jewish commentary on the verse" is fine; "already heard as both trust and loyalty before Paul" claims more than a single pesher shows. Say "heard as loyalty".

**12. notes.json 2:16 "The cup of the LORD's anger": "Revelation 14:10 has it in the hand of the nations again."** Rev 14:10 says the worshippers of the beast drink the wine of God's anger poured into the cup of his wrath. Nothing is "in the hand of the nations". Fix the sentence.

**13. notes.json 3:2 "What is told of you": "the word for the Egyptian news of Moses' acts and the nations' fear of the exodus (Exodus 15:14)."** Exodus 15:14 says that the peoples heard and trembled (Philistia, Edom, Moab, Canaan); Egypt's report plays no part. Rewrite ("what the nations heard of the exodus").

**14. notes.json 2:6 "Woe to (hoy)": quotes "Alas, my brother!" for 1 Kings 13:30.** The site's Plain at 1 Kings 13:30 reads "Oh, my brother!". The rule is that a note quoting another book's verse uses its Plain exactly. The build did not flag it. Fix.

**15. notes.json 2:20 vs. 3:1 on the Shavuot haftarah; book.json and ch. 3 `views.J`.** Three different wordings: "In some Jewish communities the verse opens the Habakkuk reading for the second day of Shavuot" (2:20); "the poem is read on the second day of Shavuot ... the custom is old, but I give no date" (3:1 note); book.json and ch. 3 state flatly that it "is the haftarah on the second day of Shavuot in the Diaspora". The claim is true (Megillah 31a is the Talmudic source for reading Habakkuk 3, "Eloah mi-Teman yavo", on the second day in the Diaspora; Sephardic custom starts at 2:20 and Ashkenazi at 3:1). Unify the wording, cite Megillah 31a, and drop the "I give no date" first-person phrasing.

**16. chapters.json ch. 3 `views.J`: "read 3:2 as a prayer about the world's years."** No source or rabbi is named, and I could not confirm it. Name the source (Rashi, Targum or a midrash) or delete the clause.

**17. notes.json 3:2 and variants 3:2: Augustine, *City of God* 18.** The reference should be 18.32 (with 18.33), where Augustine offers the two Testaments, Christ between the two thieves, and Moses and Elijah at the Transfiguration. Add the chapter; the third reading is missing from the variant text. The note also should say that the Old Latin has *in medio duorum animalium* and that Jerome's Vulgate has *in medio annorum*.

**18. Dates inconsistent.** book.json facts: "609-597 BC"; audience: "609-598 BC"; habakkuk topic: "609-597". Jehoiakim died in December 598 and Jehoiachin was taken in 597. Use one convention ("609-598") in all places.

**19. notes.json 2:3 "Who runs?": typo.** `pursue it."The second` needs a space. Also "The second is the one most English versions take" is hard to check; say "many".

**20. notes.json 1:11 "Wind, spirit, or a change of mind?": "A few older commentators took it as a change of heart in the nation."** Unsourced. The Greek reading is the evidence; name a commentator or drop the sentence.

**21. chapters.json ch. 1 `views.F`: "Some readers take the Chaldeans as a type of the final persecuting empire (Revelation 13)."** Unsourced. Name a reader or soften to "later interpreters could apply". Likewise ch. 2 settings 2:6-20 `readers`: "it was later read in the same way by writers against Rome and other empires" has no source.

**22. chapters.json ch. 2 `views.H`: "Babylon fell to Cyrus in 539 BC, so the nations did turn on it."** Overstated as a fulfillment. Babylon surrendered to Cyrus with little fighting, and the Persians are one nation, not "the peoples". Say "Babylon fell to Cyrus in 539 BC; whether that fulfills the woes is debated."

**23. chapters.json ch. 2 `views.X` and card: Luther.** "Luther said in his later years that the line in Romans 1:17 opened the whole letter to him" and the Lutheran row "Luther said that this verse opened Romans to him". The famous statement is the 1545 preface to the Latin writings (the phrase "righteousness of God" in Rom 1:17, with the quotation "the righteous will live by faith" as its clinching text). It is not in the 1522 Preface to Romans or the 1535 Galatians lectures that the card cites. Add the 1545 preface as the source, or reword to "Luther said that the 'righteousness of God' in Rom 1:17 opened scripture to him."

**24. self-rendered NT quotes (Galatians 3:11, Hebrews 10:35-39).** They are labeled "my wording from the Greek". The renderings are acceptable ("in a very short time, the One who is coming will come, and will not be late"; "my righteous one will live by faith; but if he draws back, my soul takes no pleasure in him"). They are not copies of NIV or ESV. Two requests: write "this Plain's rendering" in place of the first-person "my", and add both to the alignment list so that Galatians and Hebrews, when written, are conformed to them (as the brief says for the pair lists). Romans 1:17 and Acts 13:41 match the site's Plain exactly.

**25. notes.json 2:9 "The nest on high": "It is the story of the tower of Babel in small (Genesis 11:4)."** This is an analogy stated as a reading. Mark it as a comparison ("compare Babel").

**26. notes.json 2:2 (Qumran, "Write the vision down"): the closing sentence ("It shows how a verse about writing clearly was used to defend a claim to a secret reading") is editorial.** Reword neutrally: "The community read the verse as saying the interpretation was given to the Teacher alone."

**27. topics.json `prayer`: "ends with a note for the choir director".** The Plain and terms.json say "music director". Align.

**28. topics.json `nebuchadnezzar`: "his army is the 'bitter and headlong nation' of 1:6".** Stated as fact, with the identification of the Chaldeans with Nebuchadnezzar's army. This is the common view, not the only one (the book itself lists the early date). Say "most readers identify".

**29. chapters.json ch. 1 card, Orthodox row.** Basil's *Quod Deus non est auctor malorum* is correctly cited, but "The Orthodox answer to the problem is the cross and the resurrection more than an argument" is unsourced characterization. Add a source or label it a summary. Fairness otherwise good: privation (Catholic, Orthodox), Luther's hidden God, Westminster 3.1 and 5.4, Wesley, Baptists divided. Not ranked.

**30. Settings coverage.** Every speech block has a card, but there is no separate card for the woes' individual units (2:9-20) or for 3:2, and the 1:12-17 setting has no `views` (the identity of the net-fisher is debated). Minor; add `views` to 1:12-17.

**31. Plain, style check (no action needed except as noted).** No em-dashes. Reading level fine. 3:1 "in the manner of shigionoth" is spelled differently from terms.json's `shiggaion` (the terms row says "kept as 'a shiggaion'"); either align the spelling or note the plural. 3:19 "For the music director" matches terms. Poetry breaks are right.

**32. Duplicate topics.** The new cores `chaldeans` (kind Places) and the existing `babylon` overlap, and `chaldeans` has no `sources` beyond two chronicle keys. Acceptable, but cross-link them in `related` (done) and keep each to its own job. No `dead-sea-scrolls` topic exists, so `pesharim` is the right home; confirm the lead does not plan a separate scrolls topic.

**33. The ":0" references (e.g. "Psalm 7:0", "Psalm 4:0").** The same form appears in Psalms, Samuel, Kings and Isaiah notes already on the site, so the build accepts it as a title reference. Not an error here; confirm it renders as the psalm title.

---

## Verification of the writer's list of unverified claims

- 1QpHab 'emunatam vs 'emunato at 2:4: the lemma reads *be'emunato*; the pesher's comment reads *'emunatam* "their faith" and *'amalam* "their toil". Correctly reported in note 31 (apart from point 11) but missing from the variant (point 2).
- Bel and the Dragon: correct (angel carries Habakkuk by the hair from Judea to Babylon with food for Daniel, vv. 33-39 in Theodotion).
- Lives of the Prophets: correct that it gives Habakkuk the tribe of Simeon and a hometown (Bethzoucher). "Jewish work of uncertain date" is a fair summary, with the usual caution that the text was reworked by Christians.
- Makkot 23b-24a: correct (Simlai: 613; David 11, Isaiah 6, Micah 3, Isaiah 2, Amos 1, Habakkuk 1).
- Sanhedrin 97b: correct (Rabbi Jonathan: "blasted be the bones of those who calculate the end", with "wait for him" from 2:3).
- Taanit 23a: correct (Honi's circle, with Habakkuk 2:1 as precedent).
- Megillah 28b and Niddah 73a: correct (*halikhot* read *halakhot*, in the school of Elijah).
- Augustine, *City of God* 18: right book, wrong precision (point 17).
- Vulgate readings (1:9 *ventus urens*; 3:6 *stetit et mensus est terram*; 3:9 *iuramenta tribubus*; 3:13 *in salutem cum christo tuo*): correct.
- Mekhilta and *tiqqune soferim* at 1:12: confirmed as an item in the Mekhilta's list on Exodus 15:7 (Horowitz-Rabin text), but the lists differ between recensions and McCarthy argues the tradition is exegetical. The variant already says so and says no manuscript has the reading; that is the right level of caution. Keep "reported by".
- Shavuot haftarah: true (Megillah 31a), see point 15.
- Quote-matching: Acts 13:40-41, Romans 1:17, Isaiah 11:9, Isaiah 10:5/13, Jeremiah 51:58, Lamentations 4:21, Luke 1:47, Deuteronomy 28:49, Psalm 44:23, 2 Kings 24:1-2 match the site's Plain. The one mismatch is 1 Kings 13:30 (point 14).
- 2:4 treatment and justification card: fair. The card quotes its sources accurately (Trent 6.7-8, Augsburg 4, Westminster 11, Article 11, Dositheus 13, BFM 2000 art. 4), keeps Hays and Cranfield's debates in the note and does not rank the churches. The only addition I would make is a line on the pistis Christou ("faith of Christ") debate in note 34, since Hays is cited for a related idea, and a sentence that the Orthodox Old Testament is the Septuagint, so the Orthodox Church reads "my faithfulness" in its own Bible.

## Fixes applied

1. Fixed. 2:16 variant now has a third reading, 1QpHab "and stagger" (*vehera'el*), labeled "as reported" (confirmed only from secondary sources: a commentary citing 1QpHab XI 9 and a translation handbook; the scroll and Horgan are not in this site's data). The false "Masoretic form" guess is gone; `why` and `b` re-argued with the pesher on the Greek side; MT kept as the harder reading.
2. Partly fixed. 2:4 variant now lists the 1QpHab lemma (*be'emunato*) and the comment (*'emunatam*), the Vulgate ("in fide sua"), Swete = Rahlfs, and the Hebrews/Alexandrinus witness as "reported, not checked". 8HevXIIgr (kaige), Aquila, Symmachus, Theodotion, Peshitta and Targum are named as not in the site's data and not quoted, since I cannot confirm their wording.
3. Partly fixed. Rashi, Ibn Ezra, Kimhi and Targum content could not be verified, so the promises were removed (lens text in book.json now says they are not treated; the two `views.J` lines were cut). No notes were written from memory.
4. Fixed. book.json now says "two places, 2:17 and 3:6" and distinguishes a Greek reading from a re-pointing; 2:17 and 3:6 `why` fields corrected (3:6 is a re-pointing proposed by commentators, not a witness reading).
5. Fixed. The false "correction at 2:1" sentence replaced with a statement that the Plain deliberately renders the verb "correction" and the noun "complaint".
6. Fixed. Note on 1:13 rewritten: the *min* of inability is described correctly, "the opposite" overstatement removed.
7. Fixed. New variant entries at 1:6 (Chaldeans/Kittim) and 3:8 (chariots/cavalry, Mur88 spelling); Mur88 statements corrected at 2:3, 1:9; the resh/tav explanation at 3:10 removed.
8. Fixed. Named-scholar attributions softened or removed (Roberts kept as "for example"; Andersen and Sweeney dropped from the claims; spec boxes no longer say named scholars hold the view).
9. Fixed. The 2:14 card is re-asked as the church's teaching on the course of history; each row says the source does not discuss the verse and labels the application as an inference; the Orthodox row gets the Creed; Augsburg 17 is described as aimed at one kind of expected kingdom.
10. Fixed. Talmud note no longer says Paul "reads" a Jewish habit; the two are called independent.
11. Fixed. Qumran 2:4 note re-anchored to the second line; lemma/comment difference stated; "heard as loyalty to the Teacher".
12. Fixed. Revelation 14:10 sentence corrected.
13. Fixed. Exodus 15:14 sentence corrected (nations heard and trembled).
14. Fixed. "Oh, my brother!" matches 1 Kings 13:30.
15. Fixed. Shavuot wording unified in notes, book.json and chapter 3, with Megillah 31a and the 2:20/3:1 starting points; "I give no date" removed.
16. Fixed by deletion. The unsourced clause about 3:2 as a prayer about the world's years was cut.
17. Fixed. Augustine cited as City of God 18.32 with 18.33 and the three readings; Old Latin and Vulgate wordings added in the note and variant.
18. Fixed. Dates unified to 609-598 BC.
19. Fixed. Typo and "most English versions" corrected.
20. Fixed by deletion of the unsourced sentence.
21. Fixed. Revelation 13 and "writers against Rome" claims softened or removed.
22. Fixed. Cyrus sentence now says the fulfillment is debated.
23. Fixed. Luther attributed to the 1545 preface; the two source keys that did not support it were dropped from the Lutheran row.
24. Partly fixed. "my wording" changed to "this Plain's rendering" in both notes. For the lead's alignment: Galatians 3:11 and Hebrews 10:35-39 (as quoted in the Hab notes at 2:3 and 2:4) should be conformed to when those books are written. Romans 1:17 and Acts 13:41 already match.
25. Fixed. Babel is now "compare".
26. Fixed. Closing sentence of the Qumran 2:2 note made neutral.
27. Fixed. "music director" in the notes and the prayer topic.
28. Fixed. Nebuchadnezzar topic now says "most readers identify".
29. Fixed. Orthodox row in the chapter 1 card labeled a summary of emphasis, not a quotation.
30. Fixed. `views` added to the 1:12-17 setting.
31. Declined as already fine. Note 3:1 already explains the plural *shigionoth* of *shiggayon*.
32. No change needed. Noted for the lead: no separate scrolls topic planned here.
33. No change needed.

Count: 30 variants (was 28). Check: 0 errors, 0 warnings.
