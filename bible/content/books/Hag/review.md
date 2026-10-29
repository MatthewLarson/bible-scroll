# Hostile review: Haggai (whole book, flat folder)

Reviewer: hostile-reviewer agent. `VERBOSE=1 node tools/build.js --check Hag` gives 0 errors, 0 warnings (38 verses, 63 notes, 14 variants, 18 glosses, 29 topic contributions). I checked the Plain against the literal line (`node tools/literal.js Hag 1` and `2`), against `texts/orig/Hag.json`, `tools/lxx.py` and `tools/dss.py` output, and I checked the Jewish citations on the web.

## Verdict

The translation is sound. I found no mistranslation, no omitted phrase and no wrong name or number in 38 verses. The key formulas are kept the same each time, the numbering statement is right, the LXX and DSS statements match the printouts (4Q77: 1:1-2 and 2:2-4; 4Q80: 2:18-21; Mur88 «אל» at 2:1; no scroll for 2:9 and 2:11), and the ketiv/qere at 1:8 is described correctly. The 520 BC date conversions are the standard ones. Two Jewish citations fail my check. Rashi on Haggai 2:7 does not say what the book says he says (stated in four places), and Yoma 9a does not say what note 2:9 says it does. A number of smaller errors remain: a "five trees" miscount, a "three uses" miscount, a factual slip about olives in December, internal contradictions about whether a foundation existed, and a Septuagint transliteration that does not match. The Jewish lens is also thinner than its own description promises: the J `desc` names Ibn Ezra and the Targum, but neither is used anywhere, and Rashi's real comments on 1:2, 2:22 and 2:23 are not used. The traditions cards are fair in tone but thinly sourced, with the Dispensationalist views unsourced and nothing for Orthodox or Lutheran beyond the Fathers and Luther's Bible. Nothing here is critical in the sense of an invented source, but the Rashi claim is the next worst thing and must be fixed before publishing.

Counts: critical 0, major 5, minor 16.

## Findings

### Major

1. **major. Rashi on 2:7 is asserted but not found.** Locations: notes.json 2:7 (note "The desire of all nations": "Rashi reads the 'desire' as the nations' valuables"); variants.json 2:7 `b` ("The medieval commentators Rashi and Radak read the nations' valuables"); chapters.json ch. 2 `views.J` ("Rashi takes the 'desire of all nations' as the nations' valuables"); the sources cited on those entries. Evidence: the Chabad/Judaica Press Rashi on Haggai ch. 2 (chabad.org/library/bible_cdo/aid/16204/showrashi/true/jewish/Chapter-2.htm) has no Rashi comment on 2:7. Rashi does comment on 2:9, 2:22 and 2:23. Radak on 2:7 could not be confirmed either. Fix: remove the Rashi and Radak attribution on 2:7, or replace it with a verified quotation from the Mikra'ot Gedolot with the exact comment. The brief itself said "verify before citing". Keep the claim that the nations' wealth reading is common among later Jewish commentators only if a named source is checked. Also correct the J-lens line and the `s` keys (`rashi-twelve`, `radak-haggai`) to match.

2. **major. Note 2:9 cites the wrong tractate for the Rav and Shmuel dispute.** Location: notes.json 2:9, "Which glory is greater?", answer (1): "the Talmud counts 420 years for the second house against 410 for the first; see Bavli Yoma 9a". Evidence: Yoma 9a states the 410 and 420 year lengths (and the number of high priests) but never mentions Haggai or the "greater glory". The Haggai dispute is reported by Rashi on 2:9 ("a controversy between Rav and Samuel": one said the building, one said the years, 410 against 420), from the Talmud's own discussion, which the brief located at Bava Batra 3a-b. Fix: say that Rashi on 2:9 reports a dispute between Rav and Shmuel (building or years) and give the Talmud locus only after checking it (Bava Batra 3a-b, as the brief suggests). Do not cite Yoma 9a as discussing Haggai 2:9. Also give the building reading (Herod, the second option) to the sages who said "building", not just "or". The sentence "which some read as a limit on the promise" (Yoma 21b) is unsourced; name who or drop it.

3. **major. "Jewish tradition" lens promises more than the book delivers, and the real Rashi material is missing.** Locations: book.json `lenses` J `desc` ("Rashi, Ibn Ezra and Radak on the Temple, the Targum of the Prophets"); no note or card uses Ibn Ezra or any reading of the Targum text; the Targum appears only as the Megillah 3a origin story. Evidence of material that exists and is verified: Rashi on 1:2 (the seventy years: the people thought the promise would not be kept; he distinguishes the Babylonian kingdom's seventy years from the seventy years from the destruction), Rashi on 1:4 ("ceiled" means covered with cedar boards), Rashi on 1:13 ("messenger" as a messenger of the Omnipresent, which contradicts the angel idea), Rashi on 2:22 (Persia will fall to another kingdom) and Rashi on 2:23 (the signet is Zerubbabel; Jeconiah's repentance reversed the "childless" decree, so Zerubbabel was born to him). These bear directly on the notes at 1:2 (seventy years), 1:4, 1:13 and 2:22-23. Fix: either add J-lens entries from these verified Rashi comments, or trim the J `desc` to what is actually used. Also, for 2:23 the settings card lists "Dispensationalist and some Jewish readings" for an end-of-age reading with no Jewish source named; replace it with Rashi's actual reading or delete "some Jewish".

4. **major. Traditions cards are thinly sourced.** Location: chapters.json ch. 2 `traditions`, both cards, `s: []` on each.
   - 2:7 card: the Dispensationalist view cites no teacher at all (no Scofield Reference Bible, Walvoord, Pentecost or Feinberg), and the 2:23 Dispensationalist view says the promise "is kept in Christ's earthly reign at the end of this age" with no source. The brief required each tradition's own teachers.
   - The Orthodox view cites only Fathers (Cyril, Theodoret) and says nothing of any modern Orthodox source or liturgical use. Lutheran cites only the wording of Luther's Bible ("aller Heiden Trost" at German 2:8, which is English 2:7), not a Lutheran confession or commentary, and does not say Luther's own lectures on Haggai read it of Christ, which is the actual support for the statement.
   - Baptist is a single man (Gill); the card should say Gill is one Particular Baptist commentator and not stand for the whole tradition, or add a second source.
   - The 2:23 card has Catholic, Reformed and Dispensationalist only. Add Orthodox, Lutheran or Baptist, or say plainly that these did not diverge, and add the Jewish reading (Rashi) as a "what the first readers' heirs said" note.
   - Fix: add named teachers and `s` keys to every view; label any claim that cannot be sourced.

5. **major. Internal contradiction on whether a foundation existed before 520.** Locations: notes.json 2:15 "Stone on stone" (`B`: "It says that building proper had not begun before 520") against notes 1:14 ("The foundation was already there"), note 2:18 (views 1 and 2 left open) and the book's own "Why the work had stopped" deep note. Also notes.json 1:8 ("The Temple's foundation was laid; what the builders lacked was timber"). The Plain at 2:15 and 2:18 is deliberately neutral about it (the note says "the Plain keeps the two phrases side by side and does not decide"), and the cards and deep notes disagree with each other. Fix: state the debate once (Ezra 3 foundation in 538 against a refounding in 520, Bedford's minority view) and make every note consistent, labeling each unsettled claim "debated".

### Minor

6. **minor. "Five trees" miscount.** notes.json 2:19: title "Five trees of the land" and the last sentence "The five trees are the opposite of the empty barn". The verse names four: vine, fig, pomegranate, olive. Fix: "Four trees".

7. **minor. Olives in December.** notes.json 2:19: "In December these trees stand bare". The olive is evergreen and its fruit is gathered in autumn and early winter, so "bare" is wrong for it. Fix: say the vine, fig and pomegranate are bare in December, and that in the olive's case the harvest was still due.

8. **minor. "Three uses" of overturn.** notes.json 2:22 "Overturn": "The Plain keeps 'overturn' for the three uses in the verse". The Hebrew has `hafakhti` twice (throne, chariot) and `hishmadti` ("wipe out") once. The Plain uses "overturn" twice. Fix: "both uses".

9. **minor. Date inconsistency in note 1:15.** Title "Twenty-four days after the message" while the body (and the lead, the chapter summary and note 1:8) say 23 days. Pick one count and say how it is counted. The sentence "time to ... let the grape and fig harvest of late summer come in" is a guess presented as fact.

10. **minor. "Last day of Booths" is loose.** notes.json 2:1 (spec note says "the last day of Booths proper"), chapters.json ch. 2 `sum` ("the last day of the feast of Booths"), `deep` "The six dates" ("the third is the last day of Booths") and the 2:1-9 setting card (`when`). The 21st of the seventh month is the seventh day. The eighth day (the 22nd) is the solemn assembly (Leviticus 23:36). Fix: "the seventh day of Booths" everywhere, as note 2:1 (history) already says.

11. **minor. Greek governor title at 1:12.** book.json "Numbering, text and witnesses" lists the Greek "of the tribe of Judah" for "governor" at "1:1, 12, 14; 2:2, 21", and variants.json 1:1 says "(also 1:12, 14; 2:2, 21)". The Hebrew of 1:12 has no `pechah`; the Greek adds the phrase there as a plus. Fix: "for governor at 1:1, 1:14, 2:2, 2:21, and added at 1:12".

12. **minor. LXX "hyperano" claim in note 2:15.** "The Greek has the same word for 'above' (hyperano)" in both places. LXX has ὑπεράνω at 2:15 but ἐπέκεινα at 2:18. Fix: say so, or limit to 2:15.

13. **minor. Hebrews 12:26 and the LXX.** notes.json 2:6 says the writer "follow[s] the Septuagint's wording". Hebrews has "not only the earth but also the heaven" (σείσω οὐ μόνον ... ἀλλὰ καί), which departs from the LXX of Haggai 2:6; only "once more" (ἔτι ἅπαξ) is shared. Fix: "takes over the Septuagint's 'once more' and rewords the rest".

14. **minor. "Three afflictions named differently" in the 2:17 variant.** variants.json 2:17 `b`. Of blight, mildew and hail, the Greek differs only in the first two (ἀφορία, ἀνεμοφθορία); hail is the same word. Fix: "two of the three".

15. **minor. Sirach image applied to both men.** notes.json 2:23 "A seal ring": "Sirach 49:11-12 uses the same image of Zerubbabel and Joshua"; book.json also says Sirach "praises Zerubbabel and Joshua together" (that is fine) but the signet image in Sirach 49:11 is for Zerubbabel only; 49:12 names Jeshua as a builder. Check the topic seal-ring in proposals too. Naming "Sirach" matches works.json; "1 Esdras" matches works.json.

16. **minor. Verse 2:5 variant wording.** variants.json 2:5 `p`: "a word-less phrase" is wrong (the phrase has "the word"); the point is that it has no verb. Also `b`: "the Vulgate, a later witness, supplies 'I covenanted'" should quote the Vulgate's actual verb (pepigi) or drop the quotation. The Greek witnesses beyond Swete (Göttingen apparatus, Hexaplaric additions) were not consulted, which the book admits; this entry should say that the shorter Greek is Vaticanus and that other Greek witnesses were not checked.

17. **minor. Weak supports for the "Haggai was an angel" reading.** variants.json 1:13 `b` ("Some Greek-reading writers of the church took the verse to mean that Haggai was an angel") and notes.json 1:13 ("some later readers") name nobody. Rashi's gloss on 1:13 says the opposite (messenger of the Omnipresent). Fix: name one source (check Jerome or Origen first) or delete.

18. **minor. 2:21 note says both shakings "are kept for the future, with no date" and then lists a historical reading.** notes.json 2:21. The sentence contradicts the readings that follow. Fix: "Both are given no date."

19. **minor. Missing variants the brief required.** The brief asked for full variant entries at 1:12 (names) and 2:18. 2:18 has a view-type note but no variant entry. The Greek of 2:18 has a different division (θέσθε ἐν ταῖς καρδίαις ὑμῶν joined to 2:19, which variant 2:19 `b` mentions), and the clause "from the twenty-fourth day of the ninth month" is deleted by some editors as a gloss (check BHS). The 2:16 `purah` problem (Greek μετρητάς, Hebrew "fifty purah", often emended) is only a note and should be a variant. The 4Q77 spelling of Darius (דריהש, marked ‹› in dss.py) is a visible spelling difference at 1:1 and is not mentioned. The brief's remark that some Hebrew manuscripts and the Targum read a plural at 2:7 was not tested at all; if it cannot be verified, say so in the 2:7 entry.

20. **minor. Note 2:12 does not mention the tension with Leviticus 6:27.** That verse says whatever touches the sin-offering flesh becomes holy; Haggai's priests say a second item does not. The note says "holiness passes by direct touch only", but does not tell the reader why the priests' answer does not contradict Leviticus 6:27 (the rabbinic and critical discussions of the garment and of second-degree contact). Add a sentence, or mark it open.

21. **minor. "Haggai is the only prophet called 'messenger of the LORD' outright."** notes.json 1:13. Plausible and widely stated, but unsourced; add the commentary or soften to "the only prophet so called in the Hebrew Bible, as far as I know".

22. **minor. Translation resemblances.** The Plain is literal-driven and I found no copying, but several verses have the same sentence shape as the common modern versions: 2:19 "From this day on I will bless you" (identical), 2:9 "In this place I will give peace", 2:23 "I will take you, Zerubbabel son of Shealtiel, my servant ... and I will make you like a seal ring, for I have chosen you", 1:6 "You have sown much, but you bring in little. You eat, but never ... full", and 2:22 "Horses and their riders will go down, each by the sword of his brother". In every one the Hebrew order dictates the shape, so I do not call it drift. If the fixer wants distance, possible alternatives are "I will bless you starting today" (2:19) and "Horses and riders will fall, each at his brother's sword" (2:22), but the literal line supports the current wording and I recommend leaving it.

23. **minor. Wording and counting in book.json.** The lead says Haggai "brings five messages" but the book has four oracles plus a narrative report (1:12-15); the brief says four. The deep note is titled "The six dates" but lists five distinct dates (six references). "Kind of writing" has the garbled sentence "It is not poetry, with a rhetorical lift at 2:6-9 and 2:21-23". Fix the wording so each count and sentence is clear.

## Checked and found sound

- The Plain follows the literal line verse by verse, including "houses covered with wood" (1:4), "held back dew" (1:10), "roused the spirit" (1:14), "the word that I cut with you" (2:5), "prized things" (2:7), "seal ring" (2:23), and the formulas "The LORD of Armies says this" and "Take your ways to heart"/"Take it to heart" (1:5, 7; 2:15, 18).
- Counts in the notes: "LORD of Armies" 14 times and "declares" 12 times.
- Dates: 29 August, 21 September, 17 October and 18 December 520 BC; the temple completed on 3 Adar in Darius's sixth year (Ezra 6:15), about March 515.
- Talmud: Yoma 9b (the Holy Spirit left after Haggai, Zechariah, Malachi), Yoma 21b (five things, from the missing he of 1:8, and Rashi on 1:8 says the same, checked), Megillah 3a (the Targum of the Prophets "from the mouths of" Haggai, Zechariah and Malachi; the book's phrase "is said to come from" is fine), Bava Batra 15a (Men of the Great Assembly wrote the Twelve).
- Josephus, Antiquities 15.11 for Herod's Temple; Sirach 49:11-12 and 1 Esdras 3:1-5:6 for Zerubbabel; Charles Wesley's hymn and the O Rex Gentium antiphon; Luther's "aller Heiden Trost"; Calvin taking the plural at 2:7 and Zerubbabel as a type; Gill reading 2:7 of Christ.
- Joshua/Jeshua: the lead's decision stands, with the 1:1 note spelling out the Ezra and Nehemiah form. The Ezra Plain's "Jeshua" is explained, not hidden.
- 2:23 seal ring: the Jeremiah 22:24-25 link, "servant" and "chosen" as David's words, and the claim that Haggai does not call Zerubbabel "king" or "anointed" are accurate and fairly balanced.
- No em-dashes anywhere in the book's files; no NIV or ESV text reproduced; the audience, `views` and settings cards name the hearers precisely (governor, high priest, remnant, then "this people").

## Fixes applied

1. Fixed. The Rashi attribution on 2:7 is removed everywhere (note, variant, J view, `s` keys). I confirmed that Rashi has no comment on 2:7 and that Radak on 2:7 (Sefaria) reads the "desire" as the silver, gold and goods the nations bring, so Radak stays and is now described exactly. Added the Targum Jonathan's rendering (same singular noun, plural verb, read on Sefaria). The notes now say the Hebrew-manuscript plural was not tested.
2. Fixed. Note 2:9 no longer cites Yoma 9a. It now reports Rashi on 2:9 (Rav and Samuel: building or years; 410 and 420) and says the Talmud locus and who held which view were not checked. The Herod link is labeled my inference. The unsourced "some read as a limit" sentence is dropped.
3. Fixed. Added verified Rashi comments to notes 1:2, 1:4, 1:13, 2:22 and 2:23, the chapter J views and the 2:20-23 setting card (new "A Jewish reading (Rashi)" view); the J lens `desc` no longer promises Ibn Ezra and now names Radak and the Targum at 2:7. "and some Jewish readings" removed from the end-of-age view. Rashi on 1:2 uses only the sentence I could confirm (the people thought God would not keep his word).
4. Partly fixed. Card `s` lists filled with works that exist (new key `luther-haggai`, Luther's lectures on Haggai, 1526, named without volume). Lutheran view now cites the lectures; Baptist view says Gill is one commentator; Orthodox view says no modern Orthodox source is cited; both Dispensationalist views say no named teacher is cited and the summary is unsourced (Scofield and Walvoord were not verified for Haggai, so not attached). The 2:23 card states that Orthodox, Lutheran and Baptist teachers are not cited and no different view is claimed; the Jewish reading is on the setting card because Jewish is not a TRADITIONS name.
5. Fixed. One statement in note 2:18 (a 538 foundation of Ezra 3:8-13 still standing in 520, or a first foundation in 520, debated; Bedford a minority view), and notes 1:8, 1:14, 2:15, 2:3 and both 2:1-9 and 2:10-19 setting cards now say "debated" and point to it. 2:15 no longer claims building had not begun before 520.
6. Fixed. "Four trees" in the title and text of note 2:19.
7. Fixed. Vine, fig and pomegranate are bare in December; the olive is evergreen and its harvest was still due.
8. Fixed. Note 2:22 says "overturn" is kept for both uses of hafakhti and names hishmadti ("wipe out").
9. Fixed. Title and body say 23 days (1st to 24th); the harvest guess is removed.
10. Fixed. "Seventh day of Booths" in note 2:1 (spec), chapter summary, "dates" deep note, the 2:1-9 setting card (`when` and view) and the topic contributions.
11. Fixed. Variant 1:1 and the book's witnesses section now say 1:14, 2:2, 2:21 and "added at 1:12".
12. Fixed. Note 2:15 says hyperano at 2:15 and epekeina at 2:18.
13. Fixed. Note 2:6 says Hebrews takes over "once more" and rewords the rest.
14. Fixed. Variant 2:17 says two of the three afflictions differ.
15. Fixed. Notes 2:23 say Sirach 49:11 is the signet image of Zerubbabel and 49:12 names Jeshua as a builder; the book's section wording adjusted. The proposal topic seal-ring was already correct (Zerubbabel only) and was not touched.
16. Fixed. Variant 2:5: "a phrase with no verb"; the Vulgate verb pepigi is quoted; the entry says other Greek witnesses (Hexapla, Goettingen) were not checked.
17. Fixed. The angel-reading claim is reworded as what the Greek wording permits; no writer named because none was verified; Rashi's opposite reading added.
18. Fixed. Note 2:21: "Both are given no date."
19. Partly fixed. New variant entries at 2:16 (purah/metretai) and 2:18 (verb and verse division, Mur88/4Q80 witness); the 4Q77 spelling of Darius is added to the 1:1 variant; the 2:7 entry says the plural-manuscript claim was not tested. Not done: the suggestion that some editors delete the 2:18 date as a gloss could not be checked in BHS, so the entry says only that Mur88 has the clause and that no apparatus was checked.
20. Fixed. Note 2:12 now says the tension with Leviticus 6:27 is open and offers one natural reading without citing a source.
21. Fixed. Note 1:13 softened to "as far as I know".
22. Declined, as the reviewer recommends. The Hebrew order dictates the shapes and the literal line supports the wording.
23. Fixed. Lead, facts and topic texts say "four dated messages"; the dates note is "The dates of Haggai" (six dates on four days); the "Kind of writing" sentence is rewritten.

Lead decision kept: "Joshua son of Jehozadak" with the 1:1 note on the Ezra form.
