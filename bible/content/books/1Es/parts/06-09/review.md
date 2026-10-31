# Hostile review: 1 Esdras 6-9 (Swete numbering), part 06-09

Reviewer: separate hostile-reviewer agent. Checked: plain.txt verse by verse against `texts/orig/1Es.json` and Swete's footnotes (`texts/src/1Es.app.json`); the site's Plain of Ezra 5-10 and Nehemiah 7:73-8:12; all 114 notes, 21 variants, the 4 chapter pages; Josephus *Antiquities* 11.130-158 (Whiston, lexundria.com) and Sanhedrin 21b (Sefaria) opened this session. `VERBOSE=1 node tools/build.js --check 1Es/06-09`: 195 verses, 0 errors, 0 warnings.

## Verdict

The translation is careful and mostly faithful. I found no invented manuscript, fragment or source. The Plain keeps the parallel Plain where the Greek agrees and the seven departures the lead named are all recorded as variants. The weak spots are elsewhere. (1) The Plain and three other places build on a sense for *emphysioō* ("breathe into") that I could not verify and that the standard root verbs contradict. (2) One variant splices two witnesses. (3) One note describes a typo that the regenerated source no longer has. (4) The O lens has no Orthodox source anywhere. (5) Several "well-known" facts (Ecbatana, Cyrus Cylinder, Behistun, the 520 BC dates) and several "most scholars" claims are unsourced, against STYLE.md rule 2. (6) The `readers` field is one stock paragraph pasted five times. (7) A few departures from Swete's text are not argued as well as they could be, and some differences from the parallel are hidden under "differs in small ways". Josephus 11.135, 137, 145, 148, 149, 152, 154-158 and Sanhedrin 21b check out as cited.

Count: critical 0, major 8, minor 14.

## Major

1. **9:48, 9:55 (plain.txt), notes 107 and 113, chapter 9 views S and the `spec` box, "breathing life into".** The Plain gives *emphysioō* / *enephysiōthēsan* as "breathing life into" and "had breathed life into them", and note 107 states as lexical fact that the verb means "to breathe into, to instill". The spec box then builds a Genesis 2:7 / Ezekiel 37 reading on it. I could not verify that sense. The search I ran found no entry for the compound; the root verbs it did find (*emphysaō*, *physioō*) mean "blow up, inflate, puff up" (and *physioō* "make proud", 1 Corinthians 8:1). That points to "were puffed up / swollen / lifted up" or, as modern translators have taken it, "were inspired". The KJV (texts/en) has "making them withal to understand it" (9:48) and "Because they understood the words" (9:55), so the Plain also departs from the only public-domain translation the writer consulted, and from Nehemiah 8:12 ("grasped"). Also, 9:55 turns a passive with the people as subject into an active with the words as subject. Fix: render something the Greek forces ("were lifted up / filled by the words"); put the uncertainty and the rival senses in the note; mark the Genesis 2:7 link as only possible; reword the spec box so it does not depend on "breathe into". If the writer has a lexicon entry, cite it by name.

2. **variants.json 8:24, A reading spliced.** The entry gives Alexandrinus as `ἢ ἀργυρίῳ ζημίᾳ`. Swete's footnote for 8:24 reads "μη] η A | αργυριω] αργυρικη A": A has `ἢ ἀργυρικῇ ζημίᾳ`. The quoted form joins B's dative `ἀργυρίῳ` to A's `ἢ`, which neither codex has. Fix: quote A as the footnote gives it (`ἢ ἀργυρικῇ ζημίᾳ`), and fix the "en" gloss. The argument for the departure (one letter, a list of penalties, Ezra 7:26) holds.

3. **notes.json 6:28, "A slip in the printed Greek", is stale.** `texts/orig/1Es.json` now reads `ἐπάρχῳ` at 6:28, and `fixed` records `ἐράρχῳ → ἐπάρχῳ`. The note says the source reads "erarchō", "has been reported for correction", and sets `orig` to the bad form. It describes an error that no longer exists. Fix: delete the note (agent-writer-works.md says a digital typo is not a note or variant). Check at the same time that no other note or variant quotes a form from the five other `fixed` verses in this part (8:47, 8:83, 9:31, 9:48).

4. **Possible remaining digital typo at 8:29.** The text has `Ταροσότομος`; Swete's footnote lemma is "Ραροσοτομος] Ιηρσων A" (other lemmata copy Swete's text exactly). Note 50 and the variant, and the Plain ("Tarosotomus"), follow the digital T. I cannot see Swete's page, so I could not confirm; this must be checked against the page or First1KGreek and, if Swete prints Ρ, added to `fixed` in tools/works-texts.py and the Plain changed to "Rarosotomus".

5. **The O lens has no Orthodox source in any of the four chapters.** O views on 6, 7, 8 and 9 carry no source key and name no Orthodox text, edition, author or liturgical use. They say what "Orthodox readers" do (read Ezra and 1 Esdras side by side; "the church reads in the light of Christ's Pascha"; the reading of the law "has a familiar shape" with "Levites who teach"), and most of the content is a general reading any church could give. Chapter 8 O says 1 Esdras is part of "the text Orthodox readers have alongside the Ezra form"; book.json's O lens says Greek and Russian teachers place it "with the books not found in the Hebrew Bible, read for building up rather than for settling doctrine". The two descriptions pull in different directions. Fix: either cite a named Orthodox source for each claim (an Orthodox Bible's introduction, a synod or patristic use, a lectionary) or reduce each O view to what is checked (which Orthodox Bibles print it and where), and stop saying what Orthodox readers feel.

6. **Unsourced "broad, well-known facts" and unsourced consensus (STYLE.md rule 2).**
   - Note 17: "Cyrus spent time at Ecbatana early in his reign, so a copy of an order from his first year being kept there makes sense" and "a summer residence". No source; "spent time at Ecbatana" is an inference, not a documented fact. The note also says Ezra 6:2 and 1 Esdras "agree that the search in Babylon came up empty"; neither text says so.
   - Note 20: Cyrus Cylinder, no source. The site has a `cyrus` topic that discusses it (including Kuhrt's view that it is propaganda). Link to it rather than assert it.
   - Note 27: "Darius's own Behistun inscription describes rebels being impaled, so Ezra's harsher form fits Persian practice." No source, and the inference runs one way only (a Persian practice does not show the Ezra text is the more original). Cite the inscription section or drop.
   - Notes 0, 12 and chapter 6 `settings`: "520 BC", "538 BC", "586 BC", "515 BC" as bare facts. Haggai 1:1 and Zechariah 1:1 give regnal-year dates; the BC equivalents need a source or a "dated by modern scholars as".
   - "Most scholars think the ending is lost" (note 113, chapter 9 H); "most scholars date the translation to the 200s or 100s BC" (every `readers` field); "most readers take it as Darius" (note 21); "many scholars think 1 Esdras keeps the better text" (note 84); "some suggest a Jewish community with a sanctuary" (note 55). None names a scholar, and the ending claim is one a reader will take as consensus. Name holders (the sources.json keys already include Williamson and Blenkinsopp) or soften to what was checked.
   - Dating clash: book.json's H lens says "100s or first century BC"; the chapter `readers` say "200s or 100s BC". One date range, with a named holder.
   - Note 76: "Calling Moses and the law 'the prophets' is an early Jewish way of speaking (compare Deuteronomy 18:15)". Deuteronomy 18:15 does not show that; no source.

7. **`readers` fields are one stock paragraph, five times.** Identical text at 6:1-2, 8:9-24, 8:71-87, 9:7-9, 9:39-48. agent-writer-works.md (lessons from Tobit) says `readers` must name who the first readers really were, by evidence, not one stock line. The line also puts "Friends of the king" and "philanthropa" in as dating evidence for "the translation", which is a different question from who first read Ezra's prayer or the king's letter as a document. Fix: keep one full statement (on the first or on book.json), and on the others say what the passage did for those readers (for example the king's letter as a charter in the vocabulary of Hellenistic grants; the prayer and the reading as models for a community), with the date range sourced.

8. **Departures and hidden differences under the parallel rule.**
   - 8:6. The Plain follows A for "seventh" but still keeps B's mention of the fifth month, so the verse now says "seventh year ... fifth month. That year was the king's seventh", a doubled date. The footnote also shows A adding "on the new moon of the fifth month" ("μηνος] + εν τη νουμηνια του πεμπτου μηνος A"), which is Ezra 7:9's arrival date; the variant says nothing of it. Argue why not keep B's "second" (some editors treat it as a corruption) or give the A addition its own entry.
   - 8:63. The Plain takes the bulls and the rams from A (well argued) but also 72 lambs from A, where B has 76 and the Hebrew 77. 76 is nearer the Hebrew; the `why` does not defend choosing 72 beyond Josephus, who may himself follow an A-type text. Say why, or give 76 with 72 as the variant.
   - 8:51 "I was ashamed to ask": the infinitive is A's ("αιτησαι τον βασιλεα"); B has none. This is a departure from Swete's text with no variant entry (the Tobit lesson requires one).
   - 8:62: B's `Ἰωσαβεὲς Ἰησοῦς καὶ Μωὲθ` gives three Levites in the Plain; A's footnote (`Ιωσαβδος ... Ιησου`) gives "Jozabad son of Jeshua", as Ezra 8:33. A difference in meaning (number of men) with no entry.
   - 8:41 / 8:60: A's "Thera" at 8:41 and "river" at 8:60 are in notes 53 and 61 only; fine for notes, but note 53 says "Theras" where the footnote reads `Θεραν`.
   - 9:11: A lacks "and we found no way" (`om και ουχ ευρομεν A`); note 88 covers it but the variant file does not, while the Plain adds "no way" as an object the Greek lacks.
   - The parallel table's "differs: Greek wording differs in small ways" appears for about 55 verses and tells the reader nothing; testing a few shows real differences it hides: 8:64 (*oikonomoi*, "royal managers", for Ezra's satraps; "honored" for "backed"), 8:17 (a different object of the sentence), 6:6, 8:12 ("by the measure of the Lord's law" has no Greek behind "measure"; Greek is *akolouthōs*, "in accord with"), 8:22 (Plain "other charge" for *epiboulē*, normally "plot, scheme", and A has *boulē*). The table also marks 7:13 "same" though the Plain moves from "uncleanness" (Ezra 6:21) to "abhorrent practices" (the Greek *bdelygmata*, which Ezra 9:1 renders the same way), and 6:10, 7:12 and 8:80-82 "same" with small wording shifts. The S views and notes are better than the table, but several of the differences above appear in neither.

## Minor

9. **Note 65 (8:66).** "In Hebrew Edom and Aram, and so Edomites and Amorites, could be confused." Edom/Aram is a known d/r confusion; Amorites (*'emori*) is neither of these, so "and so" does not follow. Say what the confusion actually is (Edomites/Arameans, or *'adomi*/*'emori* as a transposition) and who holds it, or drop it. The site's Ezra variants file does discuss "Edomites"; point to it.

10. **8:85 tense.** The Greek `οὐχὶ ὠργίσθης` is aorist ("were you not angry ... to destroy us"). The Plain, "Would you not be angry with us", copies Ezra 9:14's question about the future. The note at 8:84 says the statement/question shift but not this tense shift.

11. **8:56 "20 gold bowls".** Greek *chrysōmata* (golden objects); "bowls" comes from Ezra 8:27 (*kefore zahav*). Parallel-rule over-importation; use "golden vessels" or say the Hebrew word in a note.

12. **LORD / Lord inside one verse for the same Greek.** 8:57 renders two identical `κυρίῳ` as "the LORD, the Lord of our ancestors"; 9:52 "holy to the Lord ... the LORD will give you glory"; 7:14 `Κυρίου` is "the LORD" and 7:15 `Κυρίου` is "the Lord". This follows the parallel's capitals, but the reader sees a distinction the Greek does not make. A short note at the first case (or in book.json) should say the capitals mark the Hebrew name of the parallel, not the Greek.

13. **Note 8:25 / 8:25 Plain.** "my heart, the king's heart" is an unnatural hybrid of B's `μου τοῦ βασιλέως`, and the speaker is given only in a heading ("Ezra Blesses the Lord") with no opening quotation mark, while 8:24 closes the king's letter. The note says this; the Plain should still read clearly (for example mark the speaker in brackets) because this is the one verse where a reader cannot tell who speaks.

14. **Note 86 (9:5).** Cites Josephus 11.148-149 on the month and the cold but omits that Josephus names the month *Tebeth* (11.148, "according to the Hebrews"), which is the tenth Hebrew month and not Kislev. That conflict with "the ninth month" is the interesting fact; state it.

15. **Josephus in chapter 6 J lens.** "Josephus retells these events with Zerubbabel prominent" is not in the writer's sources-checked (only 11.120-158 was opened). I did not re-check it. Give the section numbers or drop the claim. Same for "later Jewish tradition knows the rebuilding from Ezra, Haggai and Zechariah" (no source).

16. **Chapter 8 W lens.** "Ezra's prayer is the kind of example that phrase has in mind" speculates about the intent of Article VI. Remove, or cite a commentary on the Article.

17. **Note 102, "which in Hebrew probably includes older children"; note 42, hierodouloi "in Egypt and Asia Minor"; note 47 (metrētēs "about 10 gallons"); note 83 and 92 (Malachi 2:8-16 "charges the priests with breaking faith in marriage", but 2:10-16 is addressed to Judah and the people; Malachi 2:8 is the priests' covenant).** Small unsourced or imprecise statements.

18. **Note 113 (9:55).** The view (2), "the ending was meant", carries no holder. Josephus's feast of Tabernacles (11.154, 157) is correctly cited, but "may show that his copy was longer" is a guess stated next to a fact; Josephus 11.154 itself puts the feast before the reading, so the order does not match the claim that he "goes on" from 9:55. Check and reword.

19. **Note 9:14 / Plain.** The Plain turns the debated Ezra 10:15 and the Greek `ἐπεδέξαντο` into "took the matter on" without saying in the Plain that the Ezra Plain reads the opposite; note 89 handles this well. Consider a one-line S cross-reference in the chapter 9 S view (it is there: "help rather than oppose"). No change needed beyond naming that the verb *epedexanto* can also mean "accepted".

20. **Style.** 8:47 ends with a semicolon, then 8:48 begins "And of the temple servants": use a period or lower case. Plain 6:14 "angered him" precedes the name it refers to.

21. **Note 40-43, 8:7 variant.** "Apsaras ... is a copying error in Vaticanus" is stated as fact; say it is an inference. Some scholars read it as a title (compare Attarates, 9:49); if so the same treatment as Attarates should apply.

22. **Note 109 and Plain 9:49.** Note 109 says Attarates is a title; the Plain prints it as a name with no flag, and the heading calls the speaker "Attarates". The setting entry says "the governor's title read as a name", which is right; the Plain verse itself could carry "Attarates (the governor)" so the first-time reader is not misled.

Checked (not a finding): **cross-references to sibling parts (Swete numbering).** 1:52 (burning), 2:25 (work stopped until Darius's second year), 4:42-57 (Darius's promise), 5:40 (Attharias) all check out against the sibling plain.txt and the Greek. Not a finding; recorded as checked.

## Checked and found sound

- Sanhedrin 21b: Rabbi Yosei's baraita (Ezra fit for the Torah to be given through him had Moses not come first) and Mar Zutra (or Mar Ukva) on the Torah given again in Ashurit script and Aramaic in Ezra's days, both as cited (Sefaria).
- Josephus 11.135 (departure from the Euphrates, Xerxes' seventh year), 11.137 (72 lambs), 11.145 (Jechonias), 11.148 (property to the temple), 11.149 (cold), 11.152 (wives and children cast out), 11.154-157 (feast of Tabernacles, eight days), 11.158 (Joacim the high priest died; Eliasib succeeded).
- Numbers: the list totals in note 52 (1,496 and 1,590) are correct; counts in 9:34 and 9:48 match.
- Sibling references, Article VI wording, and the Clementine appendix statement match the writer's own check; I did not reopen Trent.
- Copyright drift: I found no run of five or more words that follows NRSV/RSV/NETS wording that the Greek does not force; the passages most at risk (8:76 "uncovered our lamp", 9:46) are literal to the Greek.

## Fixes applied
