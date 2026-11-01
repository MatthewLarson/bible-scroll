# Hostile review: Atrahasis (Atr), part 04-06 (chapters 4-6, Tablet I 261-416 and Tablet II segments A-D)

Reviewer: separate hostile-reviewer agent, 2026-10-30. Content files were not edited.

## Verdict

The Plain English Translation is a careful, mostly faithful translation. Every verse was read against `python tools/akk-literal.py Atr 4|5|6` and against SEAL's score and commentary (`.cache/dl/seal/node1515.html`, `node39732.html`, extracted in the writer's scratch folder). Gaps are marked, uncertain readings are mostly flagged, and no invented copy, siglum or museum number was found. The sigla, museum numbers, places and periods in `variants.json` and the notes match SEAL's table. Millard's "about 1630 BC", "the two accounts undoubtedly describe the same Flood", "the basic idea of disturbing deity is surely common to both narratives", "could have Babylonian undertones from the sexagesimal system" and "a short, and damaged, account" all check against the Tyndale Bulletin PDF (`.scratch/Atr-04-06/dl/millard.txt`). The Frymer-Kensky endnote on Kilmer and Moran was confirmed on the BAR library page. The 1 Enoch quotations (8:1, 80:2) match the site's own Plain English Translation. The lead's three added verses are sound; they need only a wording decision (finding 18). The weaknesses are mostly in what stands around the translation:

- The spiritual (S) readings have no named holders.
- One source detail ("Schøyen Collection") is not in anything the writer opened.
- The chapter 6 summary, setting and heading say "1,200 years pass" where the line says "Not yet 1,200 years had passed".
- The Exodus 1 `spec` says the comparison was not found in print, but a published article makes it.
- A "crying babies" view is credited to scholars whose articles were not read.
- Several glosses are wrong.
- A few Plain English Translation words have no support in the Akkadian or in SEAL.

`VERBOSE=1 node tools/build.js --check Atr` gives 0 errors, 0 warnings, so the problems below are content problems, not mechanics.

Findings: **0 critical, 9 major, 33 minor** (findings 10-42; several minor ones record a check that passed, such as 15, 41 and 42).

---

## Major

### 1. The spiritual (S) readings name no holders (major)
Location: chapters.json ch4 `views.S`, ch5 `views.S`, ch6 `views.S`; notes.json 5:71 ("What was Namtar? Christian readings"), 5:13 (last sentence), 4:... S text; `agent-writer-world.md` point 3.
The brief says to "present these as Christian readings with named holders". Here the holders are "Christians who see real powers behind the gods of the nations", "Christian readers have three ways", "readers of the divine council passages". No one is named, and `s` is empty on the 5:71 note.
Fix: name a holder for each reading from something opened this session. The "nothing" reading can cite the Bible's own voice (Psalm 115:4-7; Isaiah 44) and any named commentator. The demons reading is Paul's own claim (1 Corinthians 10:20) plus a named later writer. The divine-council reading needs a named modern holder; the site's `divine-council` topic may already name one, so reuse its key. Do not name anyone from memory. Open the source first, or write "the text itself says".

### 2. "Schøyen Collection" is not in any opened source (major)
Location: chapters.json ch6 `views.H` ("the Schøyen tablet MS 2950") and `settings` 6:58-61 ("MS 2950 in the Schøyen Collection"); notes.json 6:51 ("one Old Babylonian tablet in the Schøyen Collection").
Evidence: `grep -i sch.yen` on SEAL's Tablet II page (`seal39732.txt`) finds nothing. The writer's `sources-checked.md` records only "D0 = MS 2950, OB, George 2009". The collection name came from memory, which STYLE.md rule 2 forbids. "MS 2950" and "George 2009" are fine.
Fix: delete "Schøyen Collection" and "Schøyen tablet" (say "copy D0, MS 2950, edited by Andrew George in 2009"), or confirm it in an opened page (George's volume title, or CDLI) and add it to `sources-checked.md`.

### 3. Chapter 6 says 1,200 years pass; the line says "Not yet" (major)
Location: plain.txt heading "## Twelve hundred years again"; chapters.json ch6 `sum[0]` ("Twelve hundred years pass and the same thing happens"); ch6 `settings` 6:6-31 `when` ("after 1,200 years"). Compare 5:82 and 6:1 ("Not yet 1,200 years had passed").
The Akkadian is *ul illik* ("had not gone"). The poem puts the second round before the 1,200 are complete, which is how Millard reads it: "'not twelve hundred years had passed'". Heading, summary and setting each state the opposite.
Fix: heading "Before 1,200 years had passed" (or "The second round"); summary "Before twelve hundred years have passed, the same thing happens"; setting `when`: "before 1,200 years have passed, when the noise returns".

### 4. The Exodus 1 `spec` says the comparison was not found, but it has been published (major)
Location: notes.json 6:8 ("I have not seen this comparison argued in the sources I checked"); chapters.json ch6 `deep` "Pharaoh as a second Enlil".
Evidence: Johanna Markind, "Exodus Reworks the Atrahasis Flood Epic", TheTorah.com, https://www.thetorah.com/article/exodus-reworks-the-atrahasis-flood-epic. I opened it this session. She writes "Like Enlil, Pharaoh also hatches several failed plots to cut down the Israelites' numbers." She compares the midwives with Enki's later solution (Tablet III), not with plague, drought or famine. Her thesis is that Exodus is a deliberate polemical reworking.
`agent-writer-world.md` point 4 requires saying where published scholarship has made the same point. Two further problems: the writer's claim of non-publication is now false, and the spec's "plague, drought, famine ... fails" pairing goes beyond Markind.
Fix: credit Markind by name with her actual claim (quoted above). Say Claude's version differs in tying Pharaoh's labor and midwife plans to Enlil's three rounds. Note that Markind reads this as polemic, and give the believing answer (Exodus remembers the real oppression and answers the nations' story) without deciding between them. Add a source key.

### 5. Views credited to scholars the writer did not read (major)
Location: notes.json 5:5 ("What is the noise?"), 5:2; sources.json keys `kilmer-overpopulation`, `bosworth-crying-infants`, `heffron-rigmu`; topics.json `flood` ("as Tikva Frymer-Kensky reports").
(a) Heffron (JNES 73, 2014) was read by title only (`sources-checked.md`). I also found no abstract (KeiBi record says no description; SEAL's bibliography has only the citation). The note nevertheless lists her under "Crying babies" as a holder of a reading of *rigmu*. The title shows she compares baby incantations; it does not show her conclusion.
(b) Bosworth was read through a Bible History Daily summary only. The summary says the incantation concerns a baby keeping a household god awake. The note's "as David Bosworth has shown" is acceptable for the incantations, but it implies Bosworth applied it to Atrahasis. The writer's log says the summary tied infant mortality to overpopulation, which is a different claim.
(c) Kilmer and Moran are cited through Frymer-Kensky's endnote 5. I confirmed the endnote (Kilmer, *Orientalia* 41, 1972; Moran, *Biblica*, 1971; "independently"). The attribution "as Frymer-Kensky reports" is honest. But the source key `kilmer-overpopulation` presents Kilmer's article as a source, and Moran has no key at all.
Fix: either open Heffron and Bosworth and state exactly what each argues, or write "Heffron (2014) wrote on *rigmu* beside baby incantations; her conclusion was not read" (a plain statement, not a hedge) and drop her as a holder of the babies reading. Retitle the Kilmer key "cited in Frymer-Kensky" or add a Moran key marked the same way.

### 6. Note 4:36 invents a motive for "many scholars" (major)
Location: notes.json 4:36, "This line is one reason many scholars now doubt the old translation 'temple prostitute'".
SEAL cites Stol 2000 on the *qadištu* in this context (no mention of prostitution), and the writer opened nothing that says this line drives the doubt. "Many scholars" has no holder.
Fix: say what SEAL says (the qadištu appears at births; see Stol 2000, cited by SEAL) and leave the Genesis 38 / Deuteronomy 23 / Hosea 4 debate to the notes already on those verses, pointing to them.

### 7. The Atrahasis = Noah verdict goes beyond the one source and names no holder (major)
Location: notes.json 5:26 (second note), "Verdict: very likely ... the same remembered survivor of the Flood."
Millard says the two accounts "undoubtedly describe the same Flood". That is about the event. He says Atrahasis equals Utnapishtim, and that Genesis is the more probable account. The note's weighing is fair, but the verdict word "very likely" for the same person is the site's own, and no one is named as arguing for the person-identification (the critical scholars are described only as "see the same figure").
Fix: keep the weighing, name a holder for the same-person view from something opened (or label the verdict as Claude's), and state exactly what Millard does and does not say. Add the answer of readers who think the Babylonian story distorts the true memory (Millard's "could only conceive of the event in their own polytheistic language", which is verified).

### 8. 6:18 "keep gathering" translates a verb nothing supports (major)
Location: plain.txt 6:18; notes.json 6:44 ("Let the clouds keep gathering").
The word is *li-iḫ-ta-an-ni-ma*. SEAL gives no gloss (the score row is empty), and SEAL's commentary has no remark. The writer's `sources-checked.md` has nothing on it. "Keep gathering" has no stated basis; the same word returns in segment C (6:44).
Fix: look the verb up in an opened dictionary or edition. Without a source, translate "Let the clouds ... but let no drop fall" with a gap and add a note. The 6:44 note should not repeat a rendering built on it.

### 9. Several glosses are wrong or over-specific (major)
Location: glosses.json.
- 4:8 "be honored" is glossed "get the credit". Wrong: *tukkabit* is "be made heavy, honored" (see the writer's own note at 4:8).
- 6:7 "lay a doom on them" is glossed "curse them with death". Nothing says death; *namtaru* is fate or plague.
- 4:6 "the woman in labor" is glossed "the mother-to-be". She is in labor or confinement, not waiting.
- 4:47 "when the bed is laid" is glossed "on the wedding night". The line does not say wedding night (the bed-laying line is part of the damaged marriage rules).
- 5:90 "a young goat" is glossed "a kid for sacrifice". SEAL's year-name text says only that the statue held a kid to his breast; "for sacrifice" (and "as an offering" in the 5:89 note) is not in the line.
- 4:39 "stays home alone with her newborn": "alone" and "home" are not in the verb; SEAL says "sets herself apart (during the puerperium)".
Fix: reword each gloss to what the line or SEAL says.

---

## Minor

### 10. 4:16 "take on her charm" against SEAL (minor)
Judged: defensible on grammar. The line has *ardatum* in the nominative (the letters are damaged: `a[r-d]a-⌈tum⌉`), and the writer's note says so and gives SEAL's opposite reading (SEAL: "let him take the young woman's charms"). The note and gloss are honest. But "take on" is an invented English idiom for *leqû* ("take"), and the next lines sit better with SEAL's sequence (he lifts his eyes, he takes, then the signs of adulthood). A woman taking her own charm is the harder sense.
Fix: either follow SEAL's order ("Let him take the young woman's charm") with the grammatical alternative in the note, or keep the writer's reading but say "take her charm" (no "on") so the Plain English Translation does not decide. A `var` entry is not needed.

### 11. 5:47 "wipe his hand across them" against Lambert and Millard "lift" (minor)
Judged: the derivation is right to follow SEAL. SEAL's commentary (383f) takes *lišakkil* from *šukkulu*, "wipe", and explains the gesture as passing the hand over the gift ("a gesture of acceptance"). Lambert and Millard's "lift his hand" (from *šaqālu*) and the Nineveh copy's "puts his hand" are in the note and in the variant. But the English "wipe his hand across them" sounds like cleaning the hand or rubbing them out, the opposite of acceptance.
Fix: "pass his hand over them" at 5:47, 5:63 and 5:75 ("passed"); the same in part 07-09 (7:39 and 7:54, which copy this wording). The note title "Wiping his hand" can stay if the Plain English Translation no longer sounds dismissive.
Cross-check: the same spelling in 6:13 is a different verb (SEAL, Seg. A 11: "The verb šukkulu 'to wipe' (Atr. I 383) is in any case different"). The 6:13 note says so correctly.

### 12. 6:7 "doom" hides the namtaru pun (minor)
Judged: the pun is the writer's own and is labeled as such, which is correct (SEAL notes the rhetorical question, Seg. A 6a, not a play on the plague god). The line has no divine determinative (*nam-tar-ra-me-e*), and SEAL glosses it "fate". "Did you lay a doom on them?" is right. Since the reader just met Namtar (5:13, 5:19) the pun is easy to miss.
Fix: keep the Plain English Translation; in the note, say the pun is Claude's reading and that the spelling has no divine determinative, so the noun reading is the primary one. Correct the gloss (finding 9).

### 13. The scribe's line counts: one wording (minor)
Location: plain.txt 4:63, 5:53, 5:83, 5:84; part 07-09 9:171 reads "(37 lines in this column.)".
Facts: 4:63 is `50[+x]`; SEAL's translation reads 54 (checked, line 333a). 5:53 is "56" at the foot of column vii. 5:83 is "26" and 5:84 is "416" (SEAL 416a and 416b): the column count and the total for the tablet. 5:86 repeats 416 in the colophon ("Its lines").
The current wording ("Here the scribe marked a count of the lines: ...") does not say column or whole tablet, so 5:83, 5:84 and 5:86 read as three counts.
Recommend one wording for the whole book: column counts "(The scribe's count for this column: 26 lines.)" and the total "(The scribe's count for the whole tablet: 416 lines.)". Part 07-09's 9:171 would become "(The scribe's count for this column: 37 lines.)". At 4:63 write "54 lines" and say in the note that the copy reads `50[+x]` and SEAL reads 54. Do not use "fifty and more" in the text.
Also add a note at 5:83 (there is none): the first number counts the lines of column viii, the second is the total, and the colophon repeats it.

### 14. 5:53 count lands in the middle of a sentence (minor)
The "56" sits between "When the time is right, the elders:" (5:52) and "gather them into your house." (5:54). The note explains it. Consider the same parenthetical wording as finding 13 so the break does not read as part of the speech.

### 15. Copy Q: 7,200 against 3,600 at 5:82 and 6:1 (minor, checks out)
Verified against SEAL: I 416 prints "1200 (Q-NA: [720]0)" and Seg. A 1 prints "1200 (Q-NA: [36]00)". Both numbers are SEAL's restorations; what survives of Q is only "-r šanātim". The variants say so accurately ("the number before it is restored"). Two small fixes: (a) the 5:82 variant `en` reads "[two] šār ... SEAL's translation gives 7,200", which is correct, but the 6:1 variant should say the same ("[one] šār?") instead of leaving "... šār" unexplained; (b) the SEAL score gloss "[600]+600 = 3,600" in the literal line looks like a SEAL slip for the Q number; say nothing of it in content.

### 16. 5:1 "six hundred years" is unhedged (minor)
SEAL's translation reads "Six(?) hundred years" and its commentary on line 352 says "It remains open whether the text has 600 years or a multiple thereof." The `spec` note at 5:1 says so, but the Plain English Translation, the chapter summary ("Six hundred years pass") and the variant list do not.
Fix: Plain English Translation "... six hundred(?) years ..." is not the house style, so add a one-line `var` entry at 5:1: A `⌈600⌉`, the Nineveh copy `600?`, SEAL's open question.

### 17. 4:6-11 versus 4:36-41: a variant entry is missing (minor)
4:6-11 (I 265a-f) are only in the Nineveh copy S+T+. The note at 4:6 explains the three late changes, but there is no `var` entry for 4:9 ("house of the woman in labor", *ḫarišti*) against 4:36 ("house of the holy woman", *qadišti*). A reader comparing the parallel lines sees two different translations with no entry. Add one variant at 4:9 (copy S+T+ against copies A and E at 4:36) and one for the seven days at 4:7 against nine at 4:40 (the note covers it; an entry is cleaner).

### 18. The lead's added verses 4:43, 5:83, 5:84 (minor)
- 4:43 (I 295b): `[x x x] ⌈x⌉ [x (x) i taḫ-d]u dingir-maḫ`. "... let Dingirmah be glad." The verb is SEAL's restoration without a "?" (SEAL: "[... may] Dingir-maḫ [rejo]ice"), so it may be translated as text. Correct. The 4:42 note ("the second line ends with 'let Dingirmah be glad'") now fits. After the split, chapter references still line up: topics.json `marriage` cites 4:42-52 and 4:49-52, the chapter `settings` 4:35-55 and the M view's 4:50-52 all match the Plain English Translation's new numbers. Checked.
- 5:83 and 5:84: faithful to the score; see finding 13 for the wording. No note, no gloss. Note missing (add one).

### 19. 5:43 and 5:60 drop "bring" (minor)
*bi-la e-pí-ta ana qudmišu* is "bring a baked loaf to his front". The Plain English Translation says "set a baked loaf before him" (5:43), and 7:20 reads "Bring a baked loaf and set it before him." Part 07-09's wording is closer. At 5:72 ("they set a baked loaf before him") the verb is lost and the Plain English Translation fills the line from the parallel. Make 5:43 and 5:60 "Bring a baked loaf and set it before him" (as 7:20), or "Bring a baked loaf before him".

### 20. 5:46-47 and 5:62-63: mood changed from "let" to "will" (minor)
*libāš-ma ... lišakkil* are precatives: "let him be put to shame ... let him pass his hand". The Plain English Translation says "Then the gifts will put him to shame, and he will wipe..." (and adds "Then"). Part 07-09 has "and let the gifts put him to shame, / and let him wipe his hand across them" (7:38-39), which is closer. The model passage should be the literal one: "Let the gifts put him to shame, and let him pass his hand over them." This also keeps the repeated passages word-for-word the same, as the brief requires.

### 21. 5:71, 5:60, 5:67-68 fill the gaps from the parallel without marking it (minor)
SEAL restores 5:56-63 only in part; it does not restore "door" in 5:71 (`[nam-ta]-ra i-ši-ú [...]`), "set a baked loaf" in 5:72 beyond *epītam ana qudmišu*, the subject "heralds" in 5:67 (`is-su-ú [...]`), or "in the land" in 5:68. The Plain English Translation gives the parallel wording without brackets. This is permitted ("repeated passage") but the brief says restorations that rest on no SEAL bracket should be translated with "..." or explained. Add one note at 5:64 saying lines 5:65-75 are filled from 5:36-47 where the tablet is broken, as SEAL's own parallel list allows.

### 22. "the god" at 5:4 and "gods" in 07-09 (minor)
5:4 ("the god grew gloomy") and 6:4 follow the Old Babylonian *ilu* (singular) and the 6:4 variant explains copy Q's plural. Part 07-09's 7:67 reads "At their noise the gods grew gloomy." Check whether that line's copy has the plural; if it is copy Q's misreading, it needs a variant there. Not a fault of this part.

### 23. 5:8, 6:9: "too heavy for me" (minor)
*ikbit(a)* / *iktabta rigim awilūti* has no "too" and no "for me". SEAL's English adds "to me". The gloss ("more than I can stand") then explains the English rather than the Akkadian. Plain English Translation: "has grown heavy" or "has grown heavy on me". The same at 5:9 and 6:10 is fine ("I have grown gloomy").

### 24. 5:81 and 7:60 add "again" (minor)
*dam-qú-tum zi-mu-ši-na it-tam-ru* is "their good looks became bright". "Again" appears in the Plain English Translation (5:81) and in the variant entry's Plain English Translation column, but not in the Akkadian or in SEAL. Delete "again".

### 25. 6:14-15 "rise up kindly ... the springs of the deep" (minor)
*ṭābiš aia illika* is "let it not go (come) kindly"; "rise up" appears in neither the line nor the variant's `en` ("let it not come pleasantly"). *Mīlu ina naqbi* is "the high water from the underground water (naqbu)"; SEAL glosses *naqbu* "underground water". "The springs of the deep" imports Genesis 7:11's "springs of the great deep", and the 6:15 note then argues the echo. The echo may be real, but the Plain English Translation should not do the work.
Fix: "Let it not come up kindly, the high water from the underground springs" (or "from the springs below"); keep the Genesis 7:11 and 8:2 comparison in the note.

### 26. 6:29 and 6:41 "green plant ... grain" (minor)
*šammu aia uṣâ šū aia imru*: SEAL glosses *šammu* "plant(s)" and *šū* is a crop ("a kind of grain" AHw, "pulse, chick-pea(?)" CAD). "Green" is not in the line. "Grain" is the writer's choice and the note (6:29) says so. Delete "green" or note that it is added; keep "Let no plant come up; let no grain grow".

### 27. 6:54 and 6:56: "belly" added (minor)
*emret ūmāmtum* is "the animal swelled" and *emret awilūtum* is "humankind swelled" (SEAL: "to swell"). Only 6:52 has *karšu* ("belly"). The Plain English Translation gives "The animal's belly swelled" and "Humankind's belly swelled". SEAL's note on Seg. D 2 (belly, not Enlil's mind) concerns line 52 only. Delete "belly" from 6:54 and 6:56, or put it in the note.

### 28. 6:12 / 6:33: "for their hunger" against "in their bellies" (minor)
Copy D has *ana bubūtišina* ("for their hunger"); the Nineveh copies (and bd per SEAL) have *ana karšišina* / *ina karšišina* ("in their bellies"). The Plain English Translation uses both in the order and the carrying-out, which is in fact two copies' wording. The 6:32 note says the narrative (segment B) is Nineveh only but does not say it differs. Add a `var` entry at 6:12.

### 29. 4:24 "with them", 4:34 "a line", 4:46 "spread out" (minor)
- 4:24: *[aš]bat Nintu* has no "with them".
- 4:34: *iṣir qēma* "drew (in) flour"; "a line" is not in the text, and the note (4:31) says SEAL translates "a circle". Say "drew a mark in flour" or "drew in flour".
- 4:46: the variant gives the base reading as "lay down the reed mat"; the Plain English Translation says "spread out". Fine in sense, but use "lay down" for the repeated verb (*nadû*, 4:34 "set down the brick").

### 30. 4:47 "In the house ..." (minor)
The line has `i-na bi-[...]` and copy E reads `ina nadê erši` ("at the laying of the bed"); *bi-[* is read by the writer as "house", but SEAL restores "house" with "(?)". Use "In ... when the bed is laid".

### 31. 4:69 leaves out SEAL's restored "the gods" (minor)
*bubūtiš nišī tītiš [ili]*: SEAL restores "[of the gods]" in the gap; the note at 4:69 relies on it and builds a whole comparison on "feeding the gods". The Plain English Translation says "to feed ...". Since the note is built on the restoration, consider "to feed [the gods]" in the text (brackets as house style for restored words) or soften the note ("if the gap held 'the gods'", which the note already says).

### 32. Unsourced statements of fact in notes (minor, STYLE rule 2)
- 4:25: "Babylonians counted ten lunar months for a pregnancy" and "the nine months of a pregnancy reach into a tenth month": no source is named; the SEAL pages do not say it.
- 4:7 gloss and note: "the mother crouched over it": from Stol 2000 (cited by SEAL) but the writer did not open Stol. Say "SEAL cites Stol on the birth brick" and remove the posture, or open Stol.
- 5:89: "Kings of Babylon named each year after a deed of the year before": the "of the year before" is not in SEAL; "Esther 3:7" in `r` has no relation to year names in Babylon.
- 5:6 "as he did when the Igigi rebelled (2:67-70)": fine if the Plain English Translation of ch2 says so; cross-check in part 01-03.
Fix: source or delete.

### 33. Settings: `readers` boilerplate and "Ashurbanipal's library" (minor)
The same two-sentence `readers` text is repeated verbatim for 5:7-15, 5:26-33, 5:34-47 and 5:50-63. The Nineveh tablets are "from Nineveh" (SEAL; Millard says "Assyrian libraries at Nineveh"). "Ashurbanipal's library" for every copy (K.7816, K.3399, Sm.292, and so on) is more than SEAL's table says; the 4:6-22 setting also says "royal scribes and scholars". Say "Nineveh libraries" unless the Ashurbanipal provenance is read for each. Vary `readers` by speech where the surviving copies differ (5:7-15 is mainly Nineveh text; 5:34-47 mixes A and S+T+).

### 34. Chapter 5 `views.H`: "rebellion" has no holder (minor)
"Scholars disagree on the meaning of 'noise' (overpopulation, rebellion, or something like the crying of babies)". The note at 5:5 lists overpopulation, a disturbance like sin (Millard) and crying babies, not rebellion. The topic page `flood` repeats "sin or rebellion". Name a holder for rebellion or change the word to "disturbance".

### 35. Chapter 5 `deep` "Noise, plague and Genesis 6" overstates Millard and the shared order (minor)
(a) "Genesis 6:1-4 belongs to a scheme also found in Atrahasis" is presented as Millard's thought. His text is conditional: "If parallelism of scheme is allowed ... then this section should be accepted as an integral part of the scheme." (b) "a limit is set" is listed as shared by Atrahasis, but in this part no limit is set before the Flood (the limits come in Tablet III). Quote the conditional and drop "a limit is set".

### 36. No `traditions` card in this part, where the brief names the example (minor)
`agent-writer-world.md` says `traditions` cards belong where Christian traditions really differ, and names "whether the gods of the nations are demons or nothing". Chapter 5's Namtar bribery is the natural place; the S lens and the 5:71 note carry the content as a `views` note instead. If the book writer's book-level `traditions` cover it, point to it; if not, add one card here with named, sourced holders (finding 1). No other chapter needs one.

### 37. Closeness to SEAL's English (minor, drift)
No sentence is copied. A few phrases track SEAL's printed English closely enough to re-check against the literal line: "days of well-being" (413), "good/fine looks" (415, with "became bright" turned into "shone"), "a flour offering go/reach him" (382, 397), "holding a young goat to his chest" (416h), "Do not revere your gods; do not pray to your goddess" (378-379, though *palāḫu* "revere" is the gloss SEAL itself gives, so this one is natural). Lambert and Millard's and Foster's published English was not available to me this session, so I cannot confirm or clear the Plain English Translation against them; I recommend the writer's drift-audit file stay in the scratch folder as the record. In the places listed the Plain English Translation is built from the glosses ("completeness; well-being", "good", "face, appearance"), so I rate the risk low.

### 38. Source key `millard-tynbul` duplicates `millard-tynbul-1967` (minor)
`parts/01-03/sources.json` defines `millard-tynbul` (the same article, without the DOI); the book-level `sources.json` defines `millard-tynbul-1967` (with `doi:10.53751/001c.30683`), which this part uses. The two keys describe one article; the page lists it twice. Fix: part 01-03's fixer should change its notes (01-03 notes.json lines near 26 and 66) to `millard-tynbul-1967` and delete the local key. The citation in the book-level key is the complete one.

### 39. Repeated-passage alignment with part 07-09 (minor, for the lead)
Part 04-06 is the model for Tablet II's repeats. Checked against part 07-09's plain.txt:
- Agree: "Give the word: let the heralds cry out; / let them make the noise roar in the land", "Do not revere your gods; / do not pray to your goddess", "The flour offering went to him", "the gifts put him to shame" (7:53 = 5:74), "Their days of well-being came back", "Their noise became what it had been before", "the land grew wide ... roared like a bull" (7:65-66 = 5:2-3).
- Disagree: "set a baked loaf" against "Bring a baked loaf and set it" (finding 19); "will put him to shame / will wipe" against "let the gifts put him to shame / let him wipe" (finding 20); "Enki ... said to his servant" in both (fine); the scribe's count wording (finding 13); 7:67 "the gods grew gloomy" against 5:4 and 6:4 "the god grew gloomy" (finding 22); "springs of the deep" and "wipe" (findings 25, 11) need to travel to the matching lines of Tablet II E and 8:75-76 ("the dark fields turned white; the broad plain was full of salt" differs from 6:38-39 "gave birth to salt": check that the Akkadian differs).
- Recommended model: 5:36-47 with "Bring a baked loaf and set it before him", "let the gifts put him to shame", "let him pass his hand over them".

### 40. Missing cross-reference: the *apkallu* (minor)
The note at 6:57 ("A sage, or a righteous man?") gives *apkallu* as "sage" and cites SEAL's pointer to Fechner 2022. The antediluvian *apkallu* sages are the obvious thread to 1 Enoch's Watchers and Azazel (chapter 4 J view already cites Azazel's teaching of crafts). One sentence in the note, or a `spec` labeled as Claude's with the lines it rests on, would link the two. Do not add a claim without opening a source on the *apkallu*.

### 41. Fairness check on the Christian lens (minor, no change needed except as above)
The C and S lenses use the Bible as the measure and the tone is respectful; there is no sneer and nothing against the LORD or his Son. The critical view of Genesis and Atrahasis is given with Millard and Frymer-Kensky, and the believing answers are Millard's (and Kline and Heidel as he cites them). The borrowing question proper is left to the book-level canon block. Two small tone points: "A goddess who needs the help of a slain god and fourteen helpers is not the Maker of Genesis" (note 4:35) and "The chapter is a picture of what the world would be with many gods and no Father" (ch5 C) are judgments in the site's own voice. That is allowed by the brief ("judging is Christian"); keep them, but make sure each is followed by what the poem's scribes were asking (the brief's "no polemic tone"), which the 5:24 and 5:23 notes do.

### 42. Reading level and style (minor, passes)
No em-dashes in any file. Sentences are short and at about 8th grade. Poetry line breaks follow the Akkadian pairs. The only clumsy line is 5:14 ("Like a storm let them blow on them:"), which could be "Like a storm let them blow upon the people:" (the line has *-šinati*, "them", the people, so the added noun is clear).

---

## Checked and sound (for the fixer, so nothing is changed by mistake)
- 6:55 "it could not open its mouth to eat": SEAL's Seg. D 5 commentary says *ippeš pīša* means "to eat", against George's "make a sound". Right.
- 5:29 "The land is accusing you": SEAL's 369b ("to accuse somebody in front of a third party"); the Daniel 3:8 idiom parallel is the writer's own and fits.
- 5:40 "your gods" (plural) and "your goddess" (singular): *i-li-ku-un* and *iš-ta-ar-ku-un* both read as written.
- 5:13 "cut off" with the Namtar pun: SEAL's *eṣû* derivation; Lambert and Millard's "diminish" in the note.
- 6:58 "Enki" for the copy's *Ea*: a count of the score shows A, E, D, I, H and B write Enki and D0 writes Ea; the note's "most Old Babylonian copies say Enki" is right.
- Variants: sigla, museum numbers and places for A (BM 78941+78943), E (BM 92608), P(+)R(+)KB (K.7816 and joins), S+T+ (K.3399 and joins), Q (Sm.292), z (MMA 86.11.378A), bd (IM 132665), B (MLC 1889), D (Ni 2552+) all match SEAL's table as copied in `sources-checked.md`.
- Genesis quotations, 1 Enoch 8:1 and 80:2 match the site's Plain English Translation; works.json names ("Atrahasis", "1 Enoch") are used correctly.

## Fixes applied

Applied by the review-fixer, 2026-10-30, under the lead's cross-part decisions (.scratch/Atr-review-notes.md). Sources opened this session are logged in .scratch/Atr-04-06/sources-checked.md ("Review fixes").

1. Accepted. S readings now name holders from sources opened this session: the Bible's own voice for "nothing" (Psalm 115; Isaiah 44); Justin Martyr (Second Apology 5) and Augustine (City of God 8.22) for "demons"; Michael Heiser (Deuteronomy 32:8 paper, key heiser-deut32) for the divine-council reading. Changed: note 5:71 (now with s), note 5:13 last sentence, ch4/ch5/ch6 views.S.
2. Accepted. "Schøyen" removed everywhere in this part (note 6:51, ch6 views.H, ch6 setting 6:58-61): now "MS 2950 (copy D0), edited by Andrew George", as SEAL's table has it. Also removed the unverified "Yale" from B (variants, note 6:1) and "Ashurbanipal's library"/"600s BC"/"a thousand years" (SEAL lists the copies only as "Nineveh"; note 4:1, 4:6, ch4 deep, settings).
3. Accepted. Heading "Before 1,200 years had passed"; ch6 summary "Before twelve hundred years have passed"; setting 6:6-31 when "before 1,200 years have passed".
4. Partly accepted. Opened Markind's TheTorah.com article myself: she makes the Pharaoh/Enlil comparison ("Like Enlil, Pharaoh also hatches several failed plots ...": slavery, midwives, the Nile) and reads Exodus as a polemic counterpoint. She does not compare the midwives with anything in Atrahasis (the review's claim that she compares them with Enki's Tablet III solution is not what the page says: she ties Pharaoh's orders to Enki's miscarriage and infant mortality). Note 6:8 and the ch6 spec box now credit her, label Claude's addition (the parallel rounds), give the believing reading beside the polemic one without deciding, and drop "not seen in print". New key markind-exodus-atrahasis.
5. Accepted. (a) Heffron dropped as a holder and her key deleted. (b) Bible History Daily feature opened: the household-god line is an incantation it quotes; the note now says that and quotes it, and gives the feature's statement on infant mortality; key renamed bhd-ancient-lullabies naming the work opened. (c) Kilmer and Moran are cited through Frymer-Kensky in the text (notes 5:2, 5:5, topic flood); key kilmer-overpopulation deleted; only frymer-kensky-bar-flood is cited.
6. Accepted. Note 4:36: "many scholars" sentence replaced by a pointer to the Deuteronomy 23:17 and Hosea 4:14 notes.
7. Accepted (lead decision 8). Note 5:26 rewritten: Millard's own words ("the Babylonian Noah", Uta-napishtim = Atrahasis, "the same Flood", "polytheistic language") and what he does not argue; against side adds Heidel's genealogy point (Ubara-Tutu vs Lamech) and that the tenth-king detail is Berossus's (Heidel, opened this session); verdict "very likely" labeled as the site's own. Note 5:49 "priest-king" corrected to Millard's "a priest".
8. Partly accepted. No dictionary for li-iḫ-ta-an-ni-ma was found; SEAL's translation (opened) reads the clouds "grow thicker". Plain English Translation 6:18 now "Let the clouds grow thick," (no iterative "keep gathering"), with a new word note giving the basis; note 6:44 and the baal topic updated.
9. Accepted. Glosses 4:6, 4:7, 4:8, 4:39, 4:47, 5:90, 6:7 corrected; "as an offering" removed from note 5:89.
10. Accepted. Plain English Translation 4:16 "Let the young woman take her charm." (both readings open); note and gloss rewritten.
11. Accepted (lead decision 5). "pass his hand over them" at 5:47, 5:63, "passed" at 5:75; note 5:47 retitled and explains the choice; variant 5:47 and topic idolatry updated. 07-09's 7:39 and 7:54 are for that fixer.
12. Accepted. Note 6:7 says the pun is Claude's and the spelling has no divine determinative, so "fate" is primary; gloss fixed.
13. Accepted (lead decision 1, wording from agent-writer-world.md). 4:63 "(The scribe's count of lines for this column: 50 and more.)", 5:83 "...: 26.)", 5:84 "(The scribe's count of lines for the whole tablet: 416.)"; checked on SEAL's page that 4:63 (A vi 54), 5:53 (A vii 57) and 5:83 (A viii 28) stand at the foot of a column. Note 4:63 gives SEAL's 54; new note at 5:83.
14. Accepted. 5:53 now "(The scribe's count of lines for this column: 56.)" (it ends column vii); note says so.
15. Accepted (a): variant 6:1 en now explains the šār and SEAL's restored 3,600. (b) nothing said in content, as advised.
16. Partly accepted. Not a difference between copies, so a word note (kind var) at 5:1 instead of a variant: both copies' 600, SEAL's "Six(?)" and its open question. Ch5 summary "Some six hundred years pass (the number is damaged)".
17. Accepted. Variants added at 4:7 (seven vs nine days) and 4:9 (woman in labor vs qadištu).
18. Accepted. Note added at 5:83 (finding 13); 4:43 left as is.
19. Accepted (lead decision 5). 5:43 and 5:60 "Bring a baked loaf and set it before him."; 5:72 "they brought a baked loaf and set it before him." (SEAL's translation restores "[They brought]").
20. Accepted. 5:46-47 and 5:62-63 "Let the gifts put him to shame, / and let him pass his hand over them."
21. Partly accepted. SEAL's translation does restore these words in brackets from the parallel ([the heralds], [in the land], [at his gate], [They brought]), so the Plain English Translation keeps them; notes added at 5:54 (5:54-63) and 5:65 (5:65-75) saying the fill rests on the repeated speech.
22. No change here (07-09's 7:67); for the lead.
23. Accepted. 5:8 and 6:9 "The noise of humankind has grown heavy." (anchors of note 5:8, variant 6:9 and gloss updated). 07-09's 7:70 still has "too heavy for me": for the lead.
24. Accepted. 5:81 "Their fine looks shone." (Q has it-tam-ru, "became bright"; "again" deleted).
25. Accepted. 6:14-15 "Let it not come up kindly, / the high water from the springs under the ground."; 6:45 "... the springs ..."; Genesis 7:11 comparison kept in note 6:15 only; gloss and variant 6:14 updated.
26. Accepted. "green" deleted at 6:29 and 6:41; note 6:29 says so.
27. Accepted. 6:54 "The animal swelled;" 6:56 "Humankind swelled; its noise was weeping." (note anchor updated).
28. Accepted. Variant added at 6:12 (B, D "for their hunger" vs S+T+, bd "bellies"); note 6:32 points to it.
29. Accepted. 4:24 "and Nintu was seated,"; 4:34 "She drew in flour and laid down the brick."; 4:46 "Let her lay down the reed mat." (variant anchor and gloss updated).
30. Accepted. 4:47 "In ..., when the bed is laid," (SEAL marks "house" with "?").
31. Partly accepted. Plain English Translation stays "to feed ..." (a restoration with no parallel); note 4:69 summary now says SEAL restores "the gods" and the body keeps "If that is right".
32. Accepted. 4:25 "ten lunar months" and "nine months reach into a tenth" removed; 4:7 "the mother crouched over it" removed (now "SEAL's editors point to Stol's study"); 5:89 "of the year before" and Esther 3:7 removed (note now points to Tablet II's year name, 9:176); 5:6 cross-check: 2:65-70 is Enlil's assembly, so the reference stands.
33. Accepted. Each `readers` now names the copies that actually carry that speech (5:7-15 S+T+ with z and V; 5:26-33 A with S+T+ alone for 5:28-31; 5:34-47 A with S+T+'s different lines; 5:50-63 A only); "Ashurbanipal's library" replaced by "Nineveh".
34. Accepted. Ch5 views.H no longer says "rebellion" (now Kilmer/Moran via Frymer-Kensky, and Millard's "disturbing deity"); topic flood `uncommon` now names Millard; note 5:5 summary drops rebellion.
35. Accepted. Ch5 deep box quotes Millard's conditional ("If parallelism of scheme is allowed ...") and drops "a limit is set".
36. Declined here: a traditions card needs tradition-by-tradition sources and belongs to the book-level traditions (book.json, the book fixer's file; lead decision 14). The S lens and note 5:71 now carry named holders. For the lead/book fixer.
37. No change needed: no copied sentence; the listed phrases rest on the glosses; drift risk low as the reviewer says. The rebuilt verses (all listed here) were re-audited in head against the literal lines.
38. Not this part (01-03 fixer, lead decision 10); this part already uses millard-tynbul-1967 only.
39. Applied as findings 11, 19, 20, 23, 24, 25. For the lead: 07-09 should take "pass his hand over" (7:39, 7:54), "grown heavy" (7:70), "they brought a baked loaf and set it before him" (7:51 has "set"), and check 7:60 "shone again" against its own Akkadian (04-06's 5:81 has no "again"). 6:27/6:39 keep "wide plain" (8:76 should match). tertu is "instructions" (5:48 = 7:25).
40. Declined: no source on the antediluvian apkallu was opened this session, and the reviewer asks for none to be added from memory.
41. No change needed (both judgments are followed by what the scribes asked, notes 5:23-24).
42. Accepted. 5:14 "Like a storm let them blow upon the people:" and, to keep command and fulfillment the same, 5:20 "Like a storm they blew upon the people:".

Lead decision 3 (folded fills): added one entry per run: 4:35 (4:35-48, E fills A), 5:6 (5:6-21, S+T+ with z, V, bd), 5:24 (5:24-31, S+T+), 5:77 (5:77-81, Q; replaces the old 5:81 entry), 6:11 (6:11-24, D fills B; replaces the old 6:22 entry); the old fill-only entries 5:14 and 5:18 are folded into 5:6. Two real differences found while doing this got their own entries: 5:5 (A "their noise" vs S+T+ "sleep did not seize him") and 5:10 (A "deprived of sleep" vs S+T+ "sleep does not seize me").
Colophon 5:85-91 kept unchanged as the model for 9:172-176 and 12:105-113.
No term changes. For the lead: part 10-12 defines frymer-kensky-bar1978 for the same article as this part's frymer-kensky-bar-flood (and Genesis has frymer-kensky-atrahasis); 07-09 still says "Schøyen" (SEAL's table gives no collection name); the S readings here use the existing keys justin-2apology, augustine-city, heiser-deut32 and heidel-gilgamesh.
Counts after fixes: 234 verses, 102 notes, 31 variants, 60 glosses, 3 chapter pages, 9 topic contributions. `VERBOSE=1 node tools/build.js --check Atr`: 0 errors and 0 warnings in 04-06 (remaining errors are in other parts and book.json, being fixed in parallel).
