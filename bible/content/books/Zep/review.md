# Hostile review: Zephaniah (whole book, flat folder)

Reviewer: separate hostile-reviewer agent. No content file was edited. `VERBOSE=1 node tools/build.js --check Zep`: 53 verses, 109 notes, 26 variants, 28 glosses, 3 chapter pages, 28 topic contributions, 0 errors, 0 warnings.

## Verdict

The Plain is mostly sound. It follows the Hebrew with care, keeps the key terms (Hush, army of the heavens, Second District, turn fortunes around, Daughter Zion) consistent with Habakkuk, Nahum, Joel, Micah and 2 Kings, and handles the hard texts (2:1-2, 2:14, 3:1, 3:8, 3:17-18) honestly. The 3:8 ("as a witness") and 3:17 ("quiet in his love") decisions are defensible, and the Qumran and Murabba'at reports match the dss.py printout almost line for line. The weak parts are the reception material and the cards. The Marian card attributes to Calvin and the Apology a view neither is shown to hold about Zephaniah. The salvation card says Nostra aetate 4 "ends" its Jewish section with Zeph 3:9, and it does not. The Marian topic and note 103 make a false claim about the Greek of 3:16. One Hebrew note (2:15, 'od) contradicts Isaiah 47:8. The J and X lenses are mostly name-dropping ("Rashi, Ibn Ezra and Kimhi wrote on it") with no content. A handful of renderings sit too close to the NIV, and the book's headline claim that "God sings" is not visible in the Plain.

Verified as stated, no change needed: Pesachim 7b-8a does cite Zeph 1:12 (the lamp for the search for leaven, with Prov 20:27 as a later link). Nostra aetate 4 does cite Zeph 3:9 ("serve him shoulder to shoulder"). Lumen gentium 55 does say "exalted Daughter of Sion". The Roman rite of 1969-70 dropped the Dies irae as the funeral sequence; the hymn survives in the 1962 Missal and, divided, in the Liturgy of the Hours. The Vulgate readings are right: `Melchom` (1:5), `columba` (3:1), `in futurum` (3:8), `silebit` (3:17), `dies irae, dies illa` (1:15). The Qumran sigla (4Q77, 4Q78, 4Q82, Mur88) are right. The Leningrad Codex and the 4Q/Mur88 readings quoted in the variants agree with the printout.

Findings by severity: critical 1, major 14, minor 24.

---

## Critical

**1. Calvin on Luke 1:28 is cited for something he is not shown to say. (critical unless the passage is produced)**
Location: chapters.json ch3 `traditions[1]` (Reformed), source `calvin-harmony-luke`.
The Reformed entry says "The promise of Zephaniah 3:14-17 is to the whole covenant people, fulfilled in Christ's coming; the angel's greeting is a once-for-all announcement, not a prayer to be repeated (Calvin on Luke 1:28)." In Calvin's Harmony comment on Luke 1:28, as far as I could check, the subject is the angelic salutation, its grace-language (kecharitomene), and the later use of "Hail Mary" as a prayer. I found nothing about Zephaniah 3. The first half of the sentence (promise to the whole covenant people) is therefore put into Calvin's mouth, and the second half ("once-for-all", "not a prayer to be repeated") is stronger than anything I could confirm. The writer's own unverified list names this item.
Fix: remove the Calvin attribution for the Zephaniah half. If the writer wants a Reformed voice on Zeph 3:14, quote what Calvin actually says in his Zephaniah lectures (`calvin-zeph`, 3:14ff) and give the page. For Luke 1:28, say only what Calvin says: that the salutation is a message to Mary and not an address to her (reported by, with a page). Otherwise cut the Reformed entry or state "no standard Reformed answer on this echo".

## Major

**2. Nostra aetate 4 does not "end its section on the Jews" with Zeph 3:9.**
Location: ch3 `traditions[0]` (Catholic), salvation card.
The citation (`Soph. 3:9`) is the last sentence of the paragraph that begins "As Holy Scripture testifies". Four more paragraphs of section 4 follow. The sentence is about the Church awaiting the day when all peoples address the Lord with one voice. It is not a statement about the salvation of those outside the Church. Placing it beside Lumen gentium 16 in the same entry without saying so blends two different questions.
Fix: "Nostra aetate 4 cites Zephaniah 3:9 ('serve him shoulder to shoulder') in a sentence about the Church awaiting the day when all peoples call on the Lord with one voice." Keep it separate from the LG 16 sentence, or label it as an eschatological hope that the document does not tie to the salvation question.

**3. Lumen gentium 55 does not link Mary to Zephaniah, and note 103 says it does.**
Location: notes.json #103 (3:17 "The Annunciation"): "a reading shown in Vatican II's Lumen Gentium"; topics.json `mary`; ch3 `traditions[1]` (Catholic).
LG 55 does say "the exalted Daughter of Sion". Its footnotes (284-285) cite Genesis 3:15, Isaiah 7:14, Micah 5:2-3 and Matthew 1:22-23. Neither the text nor the notes cite Zephaniah. The Catholic entry runs "Gabriel's 'Rejoice' echoes the Greek of Zeph 3:14" together with the LG citation as if the Council had said so.
Fix: say that LG 55 calls Mary "Daughter of Sion" and does not cite Zeph 3:14-17. Source the Zephaniah link to something that makes it. The Roman lectionary does: Zeph 3:14-18 is a first-reading option for the Visitation (31 May) and is the reading for the Third Sunday of Advent in Year C (the writer should check the lectionary numbers). Add the Catechism or a named theologian only after checking.

**4. The Greek of Zeph 3:16 does not say "Do not be afraid"; the Marian topic and note 103 say it does.**
Location: topics.json `mary` ("In the Greek ... says 'Do not be afraid' (3:16)"); notes.json #103 ("Luke 1:30 says 'Do not be afraid,' like Zephaniah 3:16", placed under "The Greek of ...").
The Swete printout has `Θάρσει, Σειών` ("take courage") at 3:16, not `μὴ φοβοῦ`. Only the Hebrew (`'al tira'i`) matches Luke 1:30. Also, Luke 1:28 `ὁ κύριος μετὰ σοῦ` is not the LXX's `ἐν μέσῳ σου` / `ἐν σοί`. The only exact Greek link is `χαῖρε` (and `χαῖρε` is also in LXX Zech 9:9 and elsewhere).
Fix: restate the evidence: shared `chaire` in the Greek; "do not be afraid" in the Hebrew only; "in your midst" versus "with you" are different phrases. Keep "debated whether Luke meant it" (the note already does).

**5. The Marian card answers a different question, leaves out the tradition that most reads Mary as Zion, and cites the Lutheran source loosely.**
Location: ch3 `traditions[1]`.
- The question is "Does Zeph 3:14-17 point to Mary?" The Lutheran entry ("the church does not invoke her; any echo of Zephaniah in Luke serves Christ, not Mary (Apology of the Augsburg Confession, Article 21)") is about invocation. Apology XXI grants that Mary prays for the Church and rejects invocation as a commanded practice. It does not mention Zephaniah, and "any echo ... serves Christ, not Mary" is the writer's gloss presented as the source's.
- Orthodox is missing, yet note 103 says "Catholic and Orthodox readers have heard Mary as the Daughter Zion". If the claim is made it needs an Orthodox entry with a source, or it should be cut from the note.
- Baptist is missing (fine only if there is no distinct view; say so).
Fix: reframe as "Is the Luke 1 echo of Zephaniah an announcement about Mary or about Christ coming to Zion?" Give Catholic (with the lectionary and LG 55, see 3), Orthodox (if a source such as a Theotokos hymn or Festal Menaion text can be named) and Protestant answers each with a source that addresses the echo. If none does, label what the tradition says about Mary and say "no standard answer on this echo".

**6. The 3:9 salvation card attaches a Zephaniah reading to confessions that do not discuss Zephaniah.**
Location: ch3 `traditions[0]`, Reformed and Baptist entries.
WCF 10.4 and London 1689 10.4 are about whether non-Christians can be saved. The sentence "Zephaniah 3:9 is read as the calling of the nations through the gospel" is not in either text. The Baptist entry says it "takes the same view as the Westminster Confession", so it adds nothing. The Orthodox entry rests on Ware. No Lutheran entry (though the Lutheran confessions have a clear answer).
Fix: sourced sentence first (WCF 10.4; London 1689 10.4; LG 16), then, if the writer wants a Zephaniah reading, one named commentary for each side (Calvin or Robertson for Reformed, a named Catholic commentator). Otherwise drop the unsourced clause. Merge Reformed and Baptist ("Reformed and Baptist confessions agree: WCF 10.4; 1689 10.4") unless they actually differ.

**7. Note 64 (2:15) says 'od is Zephaniah's addition to Isaiah 47:8. It is not.**
Location: notes.json #64.
Isaiah 47:8 and 47:10 read `אֲנִי וְאַפְסִי עוֹד` (`'ani ve'afsi 'od`), exactly as Zeph 2:15 does. The note says "Zephaniah's addition is the final particle 'od". The Plain of Isaiah 47:8 ("I am, and besides me there is nothing") already renders the same Hebrew, and the Plain of Zeph 2:15 is identical to it. The 4Q77/4Q78 printout confirms `ואפסי עוד` in Zephaniah.
Fix: delete the "addition" sentence. If the writer wants a point about the verse, note that Zephaniah and Isaiah use the identical boast and that Zephaniah applies it to Nineveh.

**8. Note 60 (2:13) says Jonah's story is about the 612 event.**
Location: notes.json #60: "The same event is the subject of Nahum ... and of the story of Nineveh's repentance in Jonah."
Jonah's story is not about 612. Nahum's own Plain (note on Nam 3:7) says Jonah's word was not carried out because the city turned back, and Nahum's is the later end. The two books of this batch now disagree. Also the ch2 deep section "Nineveh before and after" puts the order as mercy then withdrawal, which is the correct reading, so the note contradicts the deep section.
Fix: "The same fall is the subject of Nahum. Jonah's Nineveh, which repents, belongs to an earlier time (see the note on Nahum 3:7)."

**9. The variant at 3:15 ("fear" or "see") misdescribes the evidence.**
Location: variants.json 3:15 "You will not fear harm again."
The entry says "Unvoweled, 'fear' and 'see' are written with the same letters ... The consonants can be read either way, so no manuscript has to differ". The Leningrad text is `תִּירְאִי` (with yod, "fear"). The Hebrew word for "see" would be `תִּרְאִי` without the yod. texts/auto/Zep.json flags a `V` reading "you will see" at 3:15 (tir'i, H7200G), so the Hebrew tradition does have the "see" spelling in some witnesses. The Greek `οὐκ ὄψῃ` (and the Syriac) would then be a Hebrew variant, not a pointing choice.
Fix: state that the auto notes record a Hebrew witness spelling `תראי` ("see"), that the Greek agrees with it, and that Mur88's word is restored (bracketed in the printout), so the scroll gives no evidence. Follow the MT with the reason (the following "Do not be afraid" in 3:16).

**10. The J lens is padding.**
Location: book.json lens J, `sections` "Jewish tradition"; ch1 views.J; ch2 views.J; ch3 views.J; topics (tower-of-babel).
Verified content: Bava Batra 14b-15a (the Twelve as one scroll), Pesachim 7b-8a (lamps). Everything else is "Rashi, Ibn Ezra and Kimhi wrote on it" and "the Targum translates it into Aramaic", repeated three times with no content. Ch2 J says only that oracles against the nations occur in every prophet. The claim that "Jewish readers have sometimes read [pure lips] as a restored Hebrew" (ch3 J, note 83, `tower-of-babel` topic) has no named source at all.
Fix: either supply verified content or shorten honestly. Suitable, checkable items: Ibn Ezra on 1:1 is reported to read Hezekiah as King Hezekiah; the Targum of 1:12 is the textual source of the "candle-searchers" in the Pesachim discussion; the talmudic note on Huldah and Jeremiah and Zephaniah in Megillah 14b-15a (check the folio before citing). Do not cite a medieval commentator for "restored Hebrew" until the exact passage is in hand; otherwise remove it. Say "J: thin; Pesachim and Bava Batra only" rather than repeating the list.

**11. The X lens is mostly name-dropping.**
Location: ch1 views.X, book.json lens X, sources `jerome-zeph`, `cyril-zeph`, `theodoret-zeph`, `calvin-zeph`.
These four are listed as sources and mentioned as "wrote commentaries", with no claim attributed to any of them except Jerome's reading of 3:8 as the resurrection. Cyril, Theodoret and Calvin are not used anywhere. A source key that supports nothing is decoration.
Fix: add one verified, specific, page-cited item from each (for example Jerome on 1:15 or on 3:8; Calvin on 1:12 or 3:17) or drop the keys from `sources` and shorten X to what is actually said.

**12. Drift: 3:13 is shaped like the NIV.**
Location: plain.txt 3:13.
Plain: "The remnant of Israel will do no wrong. / They will not speak lies, / and no deceitful tongue / will be found in their mouths. / They will graze and lie down, / and no one will make them afraid." The Hebrew order is the same, but three stock chains ("do no wrong", "deceitful tongue ... found in their mouths", "no one will make them afraid") are NIV phrases (the last is also ESV-like). The Hebrew `ve'en macharid` is "with none to terrify".
Fix: for example "They will do no injustice and tell no lie. A tongue of deceit will not turn up in their mouths. They will graze and lie down, with no one to frighten them."

**13. Drift: 2:15 "the carefree city".**
Location: plain.txt 2:15.
"This is the carefree city" is the NIV's phrase. The Hebrew `ha'alizah` is the "exultant" city (ESV uses a form of that word), and note 89 itself says the root `'alaz` is "exult".
Fix: render it as the city that "celebrated" or "partied" or "gloated". If "carefree" is kept for a reason, say so in note 89 (its present text implies the opposite).

**14. The headline "God sings" is not in the Plain.**
Location: book.json subtitle ("then God sings"), prompts ("The singing God"), ch3 title ("Pure Lips and a Singing God"), 3:14-20 setting ("a singing God"), notes #102 ("God does not only save but sings"), `daughter-zion` topic.
Plain 3:17 reads "He will cheer over you with a ringing shout." The word is `rinnah`, which is a ringing cry that can be a song, and the writer renders 3:14 `roni` as "give a ringing cry". The reader of the Plain sees no singing. The Greek has "feast day" instead of "singing", and 2:14 uses "singing voice" for a bird or the wind.
Fix: add a note on 3:17 or 3:14 that the root `ranan` covers shout and song, and that the Plain uses "ringing shout" for it and so does not use "sing", or render "He will sing over you with joy" and keep "ringing cry" in 3:14. State the choice. Keep the headline only if the note proves it.

**15. Settings/views: "oracles ... spoken to Judah, not to the nations" is stated as settled.**
Location: book.json `audience.to`; ch2 settings.
That the oracles against the nations were spoken to Judah and not to the nations is the usual view, but it is an inference (they are in the book, addressed in the third person or to the nations in the second). Say "most commentators". Also the 2:1 "shameless nation = Judah" is presented as Berlin's view; it is the commonest reading, but the Greek ("untaught nation") and "not longed for" are alternatives (the variant gives them; the setting should hedge).

## Minor

**16. Attributions to scholars that I could not confirm from the sources named.**
Location: book.json `authorship`, ch3 views.C and settings, `audience.views`.
Unverified: "Roberts, Szeles and Robertson argue that the hope after judgment is a regular part of the prophets' pattern"; "Kapelrud and Ball read the whole book as a rhetorical unit"; "Roberts, Sweeney: the promise was part of the original oracle (3:8-13)"; "Szeles and many Christian readers: world judgment (1:2-3)"; "Berlin, Roberts: language for Judah's land". The scholars named are real and the commentaries are real. Roberts in particular is, to my memory, cautious about some verses (2:7, 3:18-20), so naming him as defending all of 3:9-20 may overstate. Soften to "reported by" with the page, or remove. Ben Zvi (post-monarchic composition), Sweeney (Josianic unit), Berlin, Gelin and Rahlfs are accurate.

**17. Rahlfs has no source key.**
Location: note 45 and `anawim` topic: "Scholars since the 1890s (Rahlfs; later Gelin)". Rahlfs's `'Ani und 'anaw in den Psalmen` (1892) is real; add a source key in sources.json (and the writer should cite it).

**18. Note 47: `'ulay` is not the word in Joel 2:14 or Jonah 3:9.**
Those verses use `mi yode'a` ("who knows"). Only Amos 5:15 and Zeph 2:3 have `'ulay`. Reword as "God's freedom is voiced with 'perhaps' (Amos 5:15) and 'who knows?' (Joel 2:14; Jonah 3:9)". Joel and Amos notes use the same list, so align.

**19. Note 103 and the ch3 echoes treat "Pentecost hymn" without a source.**
Location: note 84: "The Orthodox church makes this link in its Pentecost hymn". The Kontakion of Pentecost does say this; the note's source key is `berlin-zeph`, which is not a source for it. Name the hymn and source it.

**20. Dies irae notes: wrong source key and a missing precision.**
Location: note 35 (source `ccc`), `dies-irae` topic and book.json section.
The Catechism does not discuss the hymn. State: "The 1969 reform of the funeral rite removed it as the Requiem sequence; the 1962 Missal keeps it, and the Liturgy of the Hours uses it divided into three hymns". Give a real source (the Roman Missal of 1962 and the 1969 Ordo exsequiarum) or put "reported by" and a secondary source. The `dies-irae` topic core has `sections: []` and empty `sources`; the contributions carry the text, which is fine only if the lead merges them.

**21. Day-of-the-LORD card: second sentences are not sourced, and the real divergence is under-served.**
Location: ch1 `traditions[0]`.
The confessional sentences (CCC 1038-1041; Augsburg 17; WCF 33; London 1689 ch.32) are right. The following sentences ("The prophets' days of judgment in history are warnings that point to that day"; "includes historical judgments such as the fall of Jerusalem"; "read as both near judgments and the last one") are the writer's gloss, not in those texts. The five church traditions largely agree; the divergence is preterist/historicist/amillennial/premillennial, which appears only in the F view prose and the Dispensationalist entry. Add the amillennial and preterist views to the card or say so.

**22. Greek "versification" claim.**
Location: ch3 settings `3:1-7` view "Nineveh continued" and note 67.
In Swete's text 2:15 is numbered 3:1 and 3:1 is numbered 3:2, so the Greek does shift by one verse. That is an editorial numbering, and it does not "show the possibility" that anyone read 2:15 and 3:1 as one unit. Name the commentators who read 3:1 as Nineveh, or drop the view. (The Greek reads "the city, the dove" as Jerusalem.)

**23. Ch2 deep: "The same four corners appear in Amos 1-2".**
Amos 1:3-2:5 is a ring of Damascus, Gaza, Tyre, Edom, Ammon, Moab and Judah; no Cush or Assyria. Say "the same device of a ring of nations around Judah". The `oracles-against-the-nations` topic repeats "The ring echoes Amos 1-2" (fine) but the deep section says "same four corners".

**24. Process-speak in public notes.**
Note 60: "Nahum, whose Plain is written beside this one (see Nahum 2-3)". The reader does not know about writers working in parallel. Say "see the Plain of Nahum 2-3".

**25. Missing variant entries the brief required.**
Brief list: 1:7, 1:11, 2:5 (also worth: 2:11, 3:6, 3:10, 3:12, 3:15 "judgments"). LXX 1:7 `Εὐλαβεῖσθε` ("fear"), 1:11 (`λαὸς Χανάαν ... ἐπηρμένοι ἀργυρίῳ`), 2:5 (`πάροικοι Κρητῶν`), 2:11 (`ἐξολεθρεύσει`), 3:6 (`ὑπερηφάνους`), 3:10 (`προσδέξομαι ἐν διεσπαρμένοις μου`), 3:12 (`εὐλαβηθήσονται`), 3:15 (`ἀδικήματα`). Some appear in notes (51, 77, 87, 90, 98) but not as variant entries. Add short entries, or state in the book intro that these are covered in notes.

**26. Omission: 8HevXIIgr and the Zephaniah pesharim.**
Location: book.json, `sections` "The Hebrew text, the Greek and the scrolls".
The brief asked for 8HevXIIgr (the kaige revision toward the Hebrew) and for the fragmentary pesharim on Zephaniah (1Q15 and 4Q170, which I understand to comment on parts of 1:12-13 and 1:18-2:2; the writer must check Milik/Allegro before saying more). The book says nothing, which is safe but incomplete. Say "dss.py shows only 4Q77, 4Q78, 4Q82 and Mur88 for Zephaniah" and add a Qumran reception note only if the transcription is in hand.

**27. "Verses 1:4-10 and 3:7 are not preserved in any scroll."**
The printout shows 1:3 also has no preserved scroll words (4Q77 empty). Say 1:3-10 and 3:7.

**28. Variant 3:1 "oppressing"/"dove" and "rebellious": scroll claims are loose.**
"4QXII-c (4Q78) and Mur88 agree (the letters are preserved)": in 4Q78 only `מראה` and `היונה` are preserved (`ונגאלה`, `העיר` restored); in Mur88 `ונגאלה העיר היונה` are preserved and `הוי מראה` restored. Together they cover the words but neither scroll has both. Say so.

**29. Variant 2:14 "Mur88 agrees (goy preserved in 4Q77)".**
In Mur88 `גוי` is restored. Keep the claim for 4Q77 only.

**30. Variant 2:7 note on Mur88 spelling.**
The printout shows `[שבותם]` in brackets (restored), so no scroll spelling is evidence for `shevut`. The entry is careful; add "Mur88 restored".

**31. Plain 3:7 "At last".**
Hebrew `'akh` is "surely"; "At last" adds a time sense (after waiting). Use "Surely you will fear me".

**32. Plain 2:4 drops "For" (`ki`).**
The oracle begins "For Gaza will be abandoned", which explains why to seek the LORD in 2:3. The Plain starts a new sentence with no link, and the note does not mention it.

**33. Plain 2:11 "will be awesome to them".**
`'alehem` is "against them" (the Greek has "will appear against them"). "To them" softens. Use "terrifying to them" or "will be a terror to them".

**34. Plain 3:11 "their pride" versus the Hebrew "your pride".**
The verse is addressed to "you" and the Hebrew is `ga'avatekh`; note 89 quotes it as "your pride" while the Plain says "their". Change the Plain or explain.

**35. Plain 1:7 "near" versus 1:14 "close".**
Both are `qarov`. Joel 1:15 and Isaiah 13:6 in the site Plain use "close". Make 1:7 "close" (Joel 2:1 uses "near", so no single site rule exists; state the book's choice).

**36. Glosses.**
3:17 "he will go silent with love, too moved to speak" picks one of four readings and states it as the meaning of the word; give it as one reading ("possibly"). 2:5 "sea-people from the Aegean, close kin of the Philistines" is stronger than the evidence (the Kerethites in Samuel are mercenaries, and the Crete link is a guess; note 51 hedges). Soften.

**37. 3:17 and 1:17 minor drift.**
"A warrior who saves" is the NIV's `Mighty Warrior who saves` without "Mighty"; a different noun phrase ("a champion who rescues") would help. 3:14 "be glad and celebrate with all your heart, Daughter Jerusalem" shares "be glad ... with all your heart" with the NIV; the order follows the Hebrew, but vary the verbs.

**38. Spelling.**
`authorship` uses "Szeles", sources.json "Széles". Pick one (accent in titles and sources, plain in prose is acceptable but state it).

**39. Ch1 deep: Scythian claim.**
"The Babylonian records do not mention a Scythian invasion of Judah" is true but negative-evidence phrasing; also Herodotus 1.105 says the Scythians plundered the temple at Ashkelon, and Zeph 2:4 is about Ashkelon, which is why the theory arose. The deep section says this; the summary view in book.json does not.

## Checks passed (no finding)

- Numbering (18, 15, 20); Hebrew and English agree.
- Literal-line fidelity for all 53 verses apart from the points above; no verse omitted or added.
- Key terms: "Hush" (1:7) matches Habakkuk 2:20; "army of the heavens" matches 2 Kings 23:4-5 (the open inconsistency with Deut 4:19 "army of the sky" is logged in the terms proposal); "Second District" matches 2 Kings 22:14; "desert owl and hedgehog" matches Isaiah 34:11 (and 14:23 for hedgehog); "I am, and besides me there is nothing" matches Isaiah 47:8, 10; "turn their fortunes around" matches Jeremiah.
- Cross-book quotations: Micah's note quotes Zeph 3:19 exactly; Nahum's notes on `hoy` (Zeph 2:5; 3:1) and on Zeph 2:13-15 agree with this Plain; Habakkuk 2:20 note agrees.
- Facts verified: Josiah's reform dates (2 Chr 34:3, 2 Kings 22-23); 612 fall of Nineveh and the Harran stand to 609; Ashkelon 604 and the burned layer (Stager); Psammetichus at Ashdod, Herodotus 2.157; Herodotus 1.103-106 on the Scythians; Josephus Ant. 10.9.7 on Moab and Ammon; the Kislev 604 Chronicle entry; Kerethites and Pelethites; Jehoahaz (23) and Jehoiakim (25) ages; hapax counts for `kemarim` (three uses); Zephaniah's place as ninth in both orders; the scroll sigla and dating.
- The 3:8 ("witness") and 3:17 ("quiet") decisions: both are the Hebrew, backed by Mur88 at 3:17 and by the Greek `eis martyrion` at 3:8; the 3:8 entry correctly drops the brief's claim that the Syriac reads "for plunder".
- No em-dashes in any file; reading level is about eighth grade; poetry lines are broken; settings exist for every oracle; the speculative boxes (`spec`) are labeled as Claude's.

## Fixes applied


Note numbers are the review's (counted from 0). Plain verses changed: 1:7, 2:4, 2:11, 2:15, 3:7, 3:11, 3:13, 3:14, 3:17, plus the section heading before 3:14 ("Rejoice, Daughter Zion").

1. Fixed. Calvin on Luke 1:28 removed (the key `calvin-harmony-luke` is gone from the card and from sources.json). The Reformed entry now says no Reformed source on this echo is cited.
2. Fixed. The Catholic entry keeps Lumen Gentium 16 and says separately that Nostra Aetate 4 cites Zephaniah 3:9 in a sentence about the Church awaiting the day all peoples call on the Lord together, and that it does not tie that to who is saved. "Ends its section" removed.
3. Fixed. Note 103, the `mary` topic and the Catholic entry now say Lumen Gentium 55 says "Daughter of Sion" and does not cite Zephaniah (its footnotes cite Genesis 3:15, Isaiah 7:14, Micah 5:2-3, Matthew 1:22-23). The Zephaniah link is sourced to the Roman lectionary (Third Sunday of Advent, Year C; Visitation, 31 May), new key `roman-lectionary`. Not added: Catechism or a named theologian (not checked).
4. Fixed. Note 103 and the `mary` topic: the only exact Greek link is `chaire`; Greek 3:16 is `Tharsei, Seion` (checked with tools/lxx.py); "do not be afraid" matches the Hebrew only; `en meso sou` and `meta sou` named as different phrases.
5. Fixed. Question reframed ("about Mary, or about Christ coming to Zion?"). Lutheran entry now says Apology XXI answers a different question and does not discuss Zephaniah (the "serves Christ, not Mary" gloss is gone). Orthodox, Reformed and Baptist entries say no source on this echo is cited; no Orthodox source could be named exactly, and the "Catholic and Orthodox readers" claim is removed from note 103.
6. Fixed in part. The unsourced Zephaniah clauses are removed from the Reformed and Baptist entries, which now say the confessions do not discuss Zephaniah 3:9. They stay as two entries (the Baptist one points to the Westminster paragraph). Not done: a Lutheran entry and named commentaries (no verified citation in hand).
7. Fixed. Note 64: "Zephaniah's addition is 'od" deleted; the note says the Hebrew is identical to Isaiah 47:8, 10 and Zephaniah applies the boast to Nineveh. The Plain of 2:15 still reads "I am, and besides me there is nothing."
8. Fixed. Note 60: "The same fall is the subject of Nahum... Jonah's Nineveh, which repents and is spared, belongs to an earlier time (see the note on Nahum 3:7)." Agrees with the ch2 deep section and with Nahum.
9. Fixed. Variant 3:15 rewritten from texts/auto/Zep.json (a `V` reading tir'i, "you will see", H7200G, witness not named): three readings, the Greek agrees with "see", Mur88's word is restored so the scroll is no evidence; the Plain follows the MT for the reason given.
10. Fixed. J lens trimmed to verified items only (Bava Batra 14b-15a; Pesachim 7b-8a) and marked "thin" in the book.json lens, the Jewish tradition section and the three chapter J views; the Rashi/Ibn Ezra/Kimhi name list removed; "restored Hebrew" removed from ch3 J, note 83 (now two readings) and the `tower-of-babel` topic. Not added: Ibn Ezra on Hezekiah and the Megillah passage (not in hand).
11. Fixed by trimming. Cyril, Theodoret and Calvin removed from the X text and from the book.json sources and sources.json; the X lens now names only what is used (Dies irae, Jerome on 3:8, Pentecost, Beatitudes, Annunciation). Jerome's commentary stays (used for 3:8).
12. Fixed. 3:13 recast: "will do no injustice and tell no lie. A tongue of deceit will not be found in their mouths. They will graze and lie down, with no one to frighten them." Anchor of note 94 updated. For the lead: the Isaiah note (Isa/parts/45-55, near 53:9) quotes the old wording of 3:13 loosely and gave no build warning; check it in the quote sync.
13. Fixed. 2:15 now "This is the city that exulted, that sat secure"; note 89 and the `nineveh` topic follow; the three English words are "exulted / revel / celebrate". Isaiah 47:8, 10 alignment untouched.
14. Fixed. Plain kept; the headline claim changed to match it: subtitle, lead, outline, prompt, ch3 title ("Pure Lips and a Rejoicing God"), ch3 summary and 3:14-20 setting, section heading, and the `daughter-zion`, `zephaniah`, `jerusalem` topics. Note 102 now explains that `ranan` covers shout and song and that the Plain uses "ringing cry/shout" and so does not say "sing".
15. Fixed. audience.to now "Most commentators take..."; the 2:1-3 setting is hedged ("Usually taken to be Judah", with the Greek "untaught nation").
16. Fixed by softening/removal. Named-scholar claims for the pattern of hope, rhetorical unity, the 1:2-3 views and the 2:8-11 views reworded without names (Roberts and Szeles dropped there); Berlin, Sweeney and Ben Zvi kept.
17. Fixed. New key `rahlfs-ani-anaw` added and cited in note 45.
18. Fixed in this book. Note 47 now gives 'ulay only for Amos 5:15 and Zeph 2:3, and "who knows?" for Joel 2:14 and Jonah 3:9. For the lead: the Joel and Amos notes use the same list and should be aligned.
19. Fixed. Note 84 now names the Kontakion of Pentecost and its content; new key `pentecostarion-kontakion`.
20. Fixed. Note 35, the `dies-irae` contribution and the book.json section state the 1969, 1962 and Liturgy of the Hours facts; sources are `liturgy-hours`, `missale-romanum-1962`, `ordo-exsequiarum-1969` (the wrong `ccc` key is gone). For the lead: the proposals core `dies-irae` still has empty sections.
21. Fixed. Unsourced second sentences removed from the Lutheran, Reformed and Baptist entries; the Catholic Dies irae sentence made accurate; the question now says the confessions agree on a final judgment and the divergence is in the Futurist view. No amillennial or preterist entry added (not in TRADITIONS).
22. Fixed. The "Nineveh continued" view removed; note 67 says the Greek numbering is an editors' numbering and shows nothing about how anyone read 3:1.
23. Fixed. "Same device, a ring of oracles on the nations around Israel and Judah." Also "side by side in the Twelve" corrected.
24. Fixed. "see the Plain of Nahum 2-3".
25. Fixed by statement: the book's Hebrew-text section now says smaller Greek differences (1:7, 1:11, 2:5, 2:11, 3:6, 3:10, 3:12) are in the notes, not variant entries.
26. Fixed. The section now says only four scrolls appear in the transcription and that 8HevXIIgr and the pesharim are not examined here.
27. Fixed ("1:3-10 and 3:7").
28. Fixed (variants 3:1, both entries name which scroll preserves which word).
29. Fixed (2:14 goy: 4Q77 only; Mur88 restores it).
30. Fixed (2:7: Mur88 restored).
31. Fixed: "Surely you will fear me" (3:7).
32. Fixed: 2:4 now begins "For Gaza will be abandoned".
33. Fixed: 2:11 "will be a terror to them".
34. Fixed: 3:11 "your pride" (matches the Hebrew and note 89).
35. Fixed: 1:7 "close", as in 1:14.
36. Fixed. Gloss 3:17 now "one reading" with the alternative; the 2:5 gloss and note 51 softened.
37. Fixed. 3:17 "a warrior who rescues" (gloss, note anchor and topic updated); 3:14 "rejoice and celebrate with your whole heart".
38. Fixed. "Széles" in all prose; keys unchanged.
39. Fixed. The Scythian section now says why the theory arose (Herodotus at Ashkelon, Zeph 2:4).

Checked and left: Isaiah 47:8, 10 wording; all other Plain verses.
