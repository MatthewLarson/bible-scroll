# Hostile review: Psalm 151 (Ps2), flat folder, book.json with its canon block, sources.json, topic contributions, proposals/works/topics/psalm-151.json

Reviewer: a separate agent (not the writer). Method: every Plain English Translation line against `texts/orig/Ps2.json` (Swete, Vaticanus); Swete's notes (`texts/src/Ps2.app.json`) against the five variants; every Hebrew line of 11Q5 against the ETCBC/Abegg-Bowley-Cook data (text-fabric, words 930-1243 of the 11Q5 non-biblical words, reading the `full`, `cor`, `rec` and `punc` features, not only the glyphs); every quoted verse of 1 Samuel, Psalms, Genesis, Amos, 2 Chronicles, Luke, Matthew against the current Plain English Translation files; the canon block and traditions card against pages opened in this session; `node tools/build.js --check Ps2` (0 errors, 0 warnings). Sources opened this session are named in each finding. I did not open Sanders' DJD 4 edition or any print commentary (none is local); where I rely on a secondary page I say so.

## Verdict

A careful, mostly honest short book: the seven verses and the heading follow the Greek faithfully, the Hebrew lines quoted from 11Q5 match the transcription's glyphs, all the 1 Samuel quotations match the current Plain English Translation, the Swete readings reported in the variants match his apparatus, and there is no invented source, reading or fragment (no critical finding). The serious problems are all of the kind STYLE rule 2 and rule 3 exist to catch. The scroll 11Q5 is dated "before the Christian era" in four places when the sources I opened date its copying to about AD 30-50. One Hebrew line (11Q5, 151A, "the Lord of all saw, the God of all") is given as the scroll's reading although the transcription itself puts a sentence break after "the Lord" and drops a flagged word, and the standard English rendering reads it differently. The scholarly consensus on Hebrew-original-and-abridging-Greek is stated as fact with no named scholar. The way Qumran used 11Q5 is stated as settled when the brief and the site's own Psalms topic call it debated. The Catholic and Syriac cards are thinner than the brief asked. About a dozen smaller errors follow.

Counts: critical 0, major 6, minor 13.

## Findings

### 1. MAJOR. The date of 11Q5 is wrong ("before the Christian era", "Jews before Christ")

Where: `variants.json` entry 1 (1:1) `why`: "the scroll is from before the Christian era"; `book.json` facts "Date": "Before the Christian era for the Hebrew, since it is in the Qumran Psalms Scroll"; `book.json` `canon.reliability.verdict`: "how Jews before Christ sang David's story"; `chapters.json` view J: "some Jews before Christ used psalms of David beyond the 150".

Evidence: Wikipedia, "Great Psalms Scroll" (opened): the scroll was copied "anywhere from 30-50 AD"; a search result on its paleography gives the late Herodian period, about 30-50 CE, and general summaries say "first century CE". Wikipedia "Psalm 151" (opened): "dates from the 1st century". Nothing in `.scratch/Man/sources-checked.md` supports "before the Christian era", and the log lists no source for the scroll's date at all. A copy made about AD 30-50 shows the psalm existed by then; it does not show it existed "before Christ". (I could not open Sanders' DJD 4 for the paleographic date; the Wikipedia page is secondary.)

Fix: say "the scroll was copied in the first century AD (about AD 30-50, on its handwriting); the psalm itself is older than the copy, but the scroll alone does not say how much older." Reword the four places. Name where the date comes from or give no number.

### 2. MAJOR. 11Q5 Psalm 151A, "the Lord of all saw, the God of all": one reading given as the scroll's, while the transcription and the usual English go the other way, and a flagged word is dropped silently

Where: `variants.json` entry 3 (1:3), 11Q5 reading and its `plain`; `notes.json` entry 7 (1:3) body; `chapters.json` deep section "The Hebrew psalm from Qumran" ("who can tell ... the deeds of the Lord?").

Evidence: ETCBC data, words 1143-1158: `את מעשי אדון ׃ ה כול ראה {{ ו#? }} אלוה ה כול הוא שמע ו הוא האזין`. Word 1146 is a punctuation mark (`punc` = ׃) directly after `אדון`, i.e. the transcribers close the sentence "who can recount the deeds of the Lord?" there. Word 1150 is `ו` inside double braces with an uncertain sign (`{{ ו#? }}`), and the writer's Hebrew line omits it without saying so. The writer's English makes `הכול` depend on `אדון` ("Lord of all") and on `אלוה` ("God of all"). A search result quoting Sanders' translation reads: "Everything has God seen, everything has he heard and he has heeded" (secondary; DJD 4, p. 56 as cited there), i.e. `הכול` as the object of "saw"/"heard"; the same search found other translations with "Lord of All Things". So at least two readings exist. I could not find in the local README what `{{ }}` means; I do not assert that it is a deletion.

Fix: print the Hebrew exactly as the transcription has it, say that the transcription ends a sentence after "the Lord" and marks one `ו` uncertain, and give both renderings ("Everything God saw, everything he heard, and he listened" and "the Lord of all saw, the God of all, he heard"). Do not call one the scroll's reading. Check the English in the 1:3 note body and the chapter page the same way.

### 3. MAJOR. The consensus that the Hebrew is the source and the Greek an abridgment is stated as fact, with no scholar named and no dissent

Where: `book.json` facts "Original language" ("Hebrew. The Greek is a shortened translation of a Hebrew text like the one in 11Q5"); `authorship` "Most scholars"; `sections` "The Greek and the Hebrew" ("The Greek joins them into one psalm, shortens the first and finishes the second"); `canon.provenance` ("which is best read as a shortened translation of it"); `canon.reliability`; `chapters.json` view H ("best explained as a shortened translation"), readings ("probably the source of the Greek"); `notes.json` entry 7 ("Many think the Greek is a shortened form of that thought").

Evidence: none of this is in the writer's log; no scholar, edition or article was opened. STYLE rule 3 requires consensus labeled "and who dissents"; rule 2 forbids what-a-scholar-says claims not read. What I opened: Wikipedia "Psalm 151" says scholars long assumed the psalm was originally Greek ("there is no evidence that Psalm 151 ever existed in Hebrew") until 11Q5, that Sanders called the Greek "made from a truncated amalgamation of the two Hebrew psalms", and names Skehan, Brownlee, Carmignac, Strugnell, Rabinowitz, Dupont-Sommer and Flint as having studied the relation (secondary page; I did not open them). Note also: Hebrew 151B survives only for two lines, so "the Greek finishes the second" is an inference from the Greek, not something the Hebrew shows; the book says it as a fact.

Fix: attribute the view by name from a page the writer opens (Sanders' edition, or a page quoting him), say it replaced an older view that the psalm was composed in Greek, say 151B is lost after two lines so how the Greek continues cannot be compared, and replace "Many think" and "Most scholars" with names.

### 4. MAJOR. How Qumran used 11Q5 is stated as settled; the brief said verify first, and the site's own Psalms topic says it is debated

Where: `book.json` `audience.to` ("Jews who sang David's psalms beyond the 150, as the Qumran Psalms Scroll shows"); lens J ("a window on Jews who sang more psalms of David than the 150"); `authorship` "David's songs at Qumran" ("For the people who used the scroll, more songs of David than the 150 were known and valued"); `chapters.json` view J and `settings[0].readers` ("Jews who used the Hebrew psalm at Qumran ... a prose list of the thousands of songs David wrote"). The same `audience.views` then says "how the people of Qumran used that scroll is not settled here", which contradicts `audience.to`.

Evidence: `brief-man.md`: "the sect's use of 11Q5 is debated: verify before saying anything." Site topic `content/topics/psalms.json`: "Scholars debate whether it is a variant edition of the Psalter or a book of worship drawn from it." Wikipedia "Great Psalms Scroll" (opened): Sanders held it reflects an arrangement from before the Masoretic Psalter was fixed; Goshen-Gottstein and Skehan treated it as a secondary liturgical collection based on the Masoretic Psalter; Flint proposed a 52-psalm collection tied to the solar calendar. Whether the Qumran readers "sang" the extra psalms, or took David's 4,050 as fact, is therefore not shown by the scroll.

Fix: say the scroll contains the psalm and the prose note on David's songs; give Sanders' view and the Goshen-Gottstein/Skehan view as the two main readings (after opening a page that states them); remove "Jews who sang" and "some Jews before Christ used" as statements of fact; make `audience.to` match `audience.views`.

### 5. MAJOR. The "Is Psalm 151 Scripture?" card and accepted_by omit the Latin and Syriac evidence the brief required, so the Catholic "No" reads as the whole story

Where: `book.json` `traditions[0]`, `canon.accepted_by` (Catholic Church entry), `canon.summary`, lens W.

Evidence: the brief lists "Orthodox Psalters, Syriac churches, Catholic, Protestant (verify each)" and says to check the Vulgate. The writer found `VulgClementine.json` and `DRC.json` empty for this psalm (log) and then used only Trent. Pages opened now: CCEL Latin Vulgate (ccel.org/ccel/bible/vul.Ps151.1.html) and htmlbible.com Jerome's Latin Vulgate both carry a Psalm 151 headed "hic psalmus proprie scriptus David et extra numerum cum pugnavit cum Goliad", opening "pusillus eram inter fratres meos". Wikipedia "Psalm 151" says it appears in some Vulgate editions and as a Latin Matins responsory, and that it survives in some Peshitta manuscripts (Wright, 1887). Trent's list says "a hundred and fifty psalms" and does not name Psalm 151 itself; "No" is the writer's inference from that number, and the card does not say so. The Syriac churches have no entry at all, and Ethiopic, Armenian and Arabic versions are named in one line only from St-Takla.

Fix: in the Catholic entry say what Trent says, that it does not name this psalm, and that Latin Psalters long carried it "outside the number" (cite the Vulgate page opened, not Wikipedia, which is secondary); add a Syriac entry from a source opened or say none was found; the claim "Judaism: Hebrew text unknown until 11Q5" also has no source in the log (it is true of the Hebrew text found in 1956 at Cave 11 per Wikipedia, but give it a source).

### 6. MAJOR. Note 1:0 ("outside the number") misreports the Sinaiticus evidence and overgeneralizes to "every church"

Where: `notes.json` entry 1, `p` and `b`. The `p` says "Every church that prints it keeps that label." The `b` says "The Greek manuscripts count it so" and then gives Sinaiticus's subscription "151 psalms of David".

Evidence: Swete's note: `Subscr ψαλμοι Δαα (sic) ονα΄ ℵ ψαλμοί ρν΄ και ιδιογραφος σ΄ A`. `ονα΄` is 151 (ο=70, ν=50, α=1): Sinaiticus counts the psalm in its total, the opposite of "outside the number", so "count it so" is false for ℵ. Alexandrinus's `ρν΄` (150) "and idiographos" does match the note. "Every church that prints it" is supported only by one English Orthodox Psalter (Asser) and one parish Q&A; the book's own canon block cites a Coptic reading and Wikipedia (opened) says Eastern and Oriental Orthodox accept it as canonical. (I could not tell what the final `σ΄` after `ιδιογραφος` in Swete's note counts; do not rest on it.)

Fix: say Sinaiticus's subscription counts 151, Alexandrinus's counts 150 and names the psalm separately; drop "every church" for "the Psalter I opened".

### 7. MINOR. 1:7 "the sword at his side" is not what παρ' αὐτοῦ says

Where: `plain.txt` 1:7; note 14 `b` ("the one beside him"); gloss; topics `david-and-goliath`.

Evidence: Greek `τὴν παρ᾽ αὐτοῦ μάχαιραν`. παρά with the genitive is "from, belonging to", not a place "at the side"; Brenton has "his own sword", and 1 Samuel 17:51 says David took the Philistine's sword. "At his side" suggests the sword hanging at Goliath's hip and can also be read as David's side; the note's title "Goliath's own sword" then is not in the verse. Alexandrinus's `ἐκείνου` ("that man's") also points to possession.

Fix: "I drew his own sword" (or "the sword of his"); correct the note's "beside him" to "from him, his own". I did not compare the wording with NETS or the NRSV Psalm 151 (neither is local); no dependence found on the sources I could open.

### 8. MINOR. "The first hand of R" misspelled the heading, but R's first hand did not copy this psalm

Where: `variants.json` entry 0 `b` ("the first hand of R misspelling"); `notes.json` entry 0 `b` ("the first hand of the Verona Psalter (R) misspelled it, and a corrector fixed it").

Evidence: Swete, Introduction (search result quoting it; Swete's own words as given there): the psalm "seems to have had no place in this Psalter prima manu; it is added in Greek and Latin by the later hand." `book.json` itself says "where a later hand added it" and `chapters.json` says "the Verona Psalter's first hand lacked it". Swete's `R*` here is therefore the first writing of the later scribe, not R's first hand.

Fix: "the scribe who added the psalm to R wrote it `ιδιωταγραηφος`; a corrector changed it". Also "troubled copyists" (note 0) rests on this one manuscript.

### 9. MINOR. Restored and uncertain letters in 11Q5 are quoted without a flag, against the book's own rule

Where: `variants.json` entries 0 (b) and 7 (1:6); `book.json` provenance; `topics.json` psalm-titles and david-and-goliath; `notes.json` entry 6.

Evidence: ETCBC `full` field: `גבורה` is `גב[ ו ]ר#ה`; `לדויד` is `ל[ ... דוי ]ד` (the lamed and the opening of David's name inside a lacuna bracket); `ראיתי` is `ר#א##[ י ]תי` (restored yod and uncertain signs); `מערכות` begins `מ#[ ערכות`. The variant flags only the end of the second line. `book.json` "About this translation" promises that restored words "are not treated as the scroll's reading", yet the heading of 151B and "I saw" are quoted as read. Also the Hebrew `מן` of "smaller than my brothers" is supralinear (`מ(^ ן ^)`), which the note omits though the log lists it, and the transcription continues after "ranks of the Philistines" with `אנוכי` and `את`, so "a word or two more" is right but the words are not given.

Fix: flag the restored letters in the quoted lines, or say the heading and "I saw" are partly restored in the transcription.

### 10. MINOR. "His father made him shepherd" is not in the Hebrew

Where: `variants.json` entry 1 `p` ("the father made David shepherd"); `topics.json` shepherd ("his father made him").

Evidence: data words 1085-1094: `בני אב׳י ו ישימ׳ני רועה ל צונ׳ו ו מושל ב גדיותי׳ו`: "and he made me shepherd of his flock", subject unstated. The variant's own English says "he"; the `p` and the topic assign it to the father without saying it is a reading.

Fix: "he" with a note that the transcription does not name the subject, or give the reading and who holds it.

### 11. MINOR. Overclaims and a garbled sentence in the chapter page and topics

Where: `chapters.json` spec box: "The one line no one has explained, 'who will tell my Lord?'" (note 7 and the chapter's own deep section explain it from the Hebrew; the spec box should say what it adds beyond that); `chapters.json` `settings[0].why`: "passed over by no one but chosen by God" (the sense is the opposite: the brothers were passed over by God; this clause is unintelligible); `topics.json` canon: "Its Hebrew text, unknown to the churches that preserved it, was found in the Psalms Scroll" (no source; unclear what is claimed).

Fix: rewrite each; drop the unsourced clause.

### 12. MINOR. Process disclosures printed as content

Where: `book.json` spec ("No source opened for this page says so"), `chapters.json` spec ("no source opened for this page makes it"), `book.json` provenance ("This page has opened no edition of them"), `book.json` audience.views ("not settled here").

Evidence: these are statements about the writer's work, not about the subject, and sit close to the hedges STYLE rule 2 forbids ("not rechecked"). A spec box should say it is Claude's theory, give the verses it rests on, and say where it overlaps published scholarship (STYLE rule 4); the Syriac and Ethiopic versions should either be sourced or left unmentioned beyond the one line St-Takla supports.

Fix: reword in the subject's terms.

### 13. MINOR. "Bright Saturday" is given bare in the lead, canon summary and lens O

Where: `book.json` lead, lens O, canon summary; `chapters.json` readings.

Evidence: St-Takla (opened) gives it with its own gloss: "reads that Psalm on the Bright Saturday each year (the day before the Resurrection feast)". Only the traditions card and chapter O view keep the parenthetical. I did not verify in a source what the Byzantine churches call Bright Saturday, so I only recommend repeating the source's own gloss wherever the phrase appears, so a reader does not take it for another day. Wikipedia "Psalm 151" adds that it is recited at the start of the Bright Saturday Vigil (the Apocalypse Vigil) as a messianic prophecy about Christ's defeat of Satan; this is not used and is worth a sentence if a primary page is opened.

### 14. MINOR. Reformed entry paraphrases the Westminster Confession beyond what 1.3 says

Where: `book.json` `traditions[0]` Reformed; `canon.accepted_by` Anglican and other Protestant churches.

Evidence: WCF 1.3 (search results quoting CCEL and reformedconfessions.com, opened as snippets): "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon of the Scripture." It does not say "outside the Hebrew canon" and does not name Psalm 151. The card's conclusion follows from chapter 1.2's list of books, but the card should say that Psalm 151 is not named and the Confession's list gives the Psalms as 150 by omission.

### 15. MINOR. Two glosses add words the Greek does not have

Where: `glosses.json`: 1:4 "poured oil on my head to mark me as king"; 1:2 "strung and tuned a harp".

Evidence: Greek `ἔχρισέν με ἐν τῷ ἐλαίῳ`, `ἥρμοσαν ψαλτήριον`. "On my head" and "strung" are not in the Greek; "to mark me as king" is the Hebrew's `נגיד` ("leader"), not the Greek's. 1 Samuel 16:13 does not say "head" either.

Fix: "put oil on me, chosen by the Lord" or similar; "fitted together and tuned".

### 16. MINOR. Swete's apparatus has more readings than the variants record

Where: `variants.json`.

Evidence: Swete's note: `5 αδελφοι] pr δε A` ("but my brothers", which bears on the Plain English Translation's "but" in 1:5) and `Κυριος] pr ο ARTvid`; `2 οι δακτ] pr και Rᵃ` (a "and my fingers", matching the Hebrew `ואצבעותי`); `1 ... αναγγελλει ℵ` is covered; `ηυδοκησεν` spelling; the Latin of R is not in this file. None is significant, but the first and third touch the Hebrew comparison and the translation. The Alexandrinus `ἐκείνου` in 1:7 is in a note, not a variant.

Fix: add short variants for 1:5 and 1:7 or say in the 1:5 note that A has "but my brothers".

### 17. MINOR. Unsourced or loosely worded statements in the notes

- `notes.json` 3 (1:1): "The Hebrew psalm in 11Q5 begins with that word" — it begins with the heading "Hallelujah. Of David son of Jesse"; `מן` is also supralinear (finding 9). Also "a comparative that Greek of this period often uses for 'youngest'" is not backed by any opened source.
- `notes.json` 4 and `chapters.json` readings: "Christian readers have heard in it God's habit of choosing the least" is a reception claim with no source.
- `notes.json` 0: "perhaps to vouch for a psalm that stood apart" and `chapters.json` H view: "The heading's claim of David's own hand is a way of vouching for an extra psalm" are guesses stated as the critical view; label as one possibility or give a source.
- `notes.json` 13: "A duel was also a contest of gods" is interpretation, no source.

### 18. MINOR. The paraphrase of the "David's Compositions" prose garbles the numbers

Where: `chapters.json` deep section 1: "he wrote 3,600 psalms and songs to sing before the altar, 364 for the daily offering".

Evidence: data words 962-995: `ויכתוב תהלים שלשת אלפים ושש מאות ושיר לשורר לפני המזבח על עולת התמיד ... ארבעה ושישים ושלש מאות`: 3,600 psalms (תהלים), then songs to sing before the altar on the daily offering, 364. Another 52, 30 and 4 follow (words 996-1055; 4,050 total, word 1052-1055). The book's J view gets this right (3,600 psalms and 450 songs); the deep section blurs "psalms" and "songs".

### 19. MINOR. The proposal topic `psalm-151` is thin and differs in wording

Where: `content/proposals/works/topics/psalm-151.json`.

Evidence: its 151B heading is "the first of David's mighty deeds", the site everywhere else "the beginning of David's mighty deeds" (data `תחלת גבורה`). The aka "Psalmus CLI" has no source in the log. Only one section; no `refs` to Psalm 151:0-7 itself and no mention of the Greek-Hebrew difference at 1:3 or 1:4, which are the points readers look up. Check it against `content/topics/` for an existing "Odes" or "books outside the number" topic (none found by name).

## What I checked and found sound

- Greek translation: all eight lines (heading and 1:1-7) render the Greek with no addition or omission that changes sense, apart from finding 7; `εἰς Δαυείδ` as "in David's own hand" is justified in the note; "my Lord" in 1:3 follows the Greek and the note shows the alternative (a human master).
- Terms: ψαλτήριον/ὄργανον "harp"/"instrument" matches the proposal in `proposals/works/terms.json`, Amos 6:5 "harp" and Psalm 150:3 "harp and lyre"; ἀλλόφυλος "Philistine" matches `terms.json`; ὄνειδος "shame" matches 1 Samuel 17:26 ("lifts this shame off Israel").
- Quotes of 1 Samuel 16:1, 6, 7, 10, 11, 12, 13; 17:10, 14, 26, 34, 43, 45, 47, 50, 51; Psalm 78:70-71, 89:20, 144:1; Genesis 4:21; Amos 6:5; 2 Chronicles 29:26; Luke 3:22; Matthew 3:17; 2 Samuel 7:8; Haggai 1:13 are identical to the current Plain English Translation files.
- The Hebrew glyph strings in variants 1-7 match the ETCBC data (apart from findings 2 and 9). The 11Q5 label (fragment 28, lines 3-14) matches the data; the "blank space" after "children of his covenant" matches line 12 holding only that word. The Wikipedia caption for the Psalm 151 image cites column XXVIII, so the label and the standard column agree.
- Swete's readings reported for ℵ, A, R, T at 1:0, 1:3, 1:4, 1:5 match `Ps2.app.json`.
- Brenton's verse 1 = this book's 1:0 + 1:1: stated correctly.
- Psalm 144's Greek title ("against Goliad") as claimed in notes 0 and 6 and cited_in: matches `content/books/Psa/parts/138-150/variants.json` and notes at 144:0.
- No em-dashes found in content; no copyrighted modern translation text found.

## Could not verify

Sanders' DJD 4 edition (column, line numbers, his translation of 151A and 151B); NETS and NRSV wording for dependence; the meaning of `{{ }}` and `σ΄` in the data; the Syriac Psalms 151-155 manuscripts; the Orthodox liturgical use beyond the two pages the writer opened.

## Fixes applied
1. Fixed. All four "before Christ" statements reworded: the scroll was copied about AD 30-50 (Wikipedia, "Great Psalms Scroll", citing Schiffman and Flint, opened this session); the copy is dated, the psalm's composition is stated as not known. Date fact, variant 1:1 why, reliability verdict, Jewish view.
2. Fixed. 1:3 Hebrew now printed as the transcription has it (sentence break after "the Lord", the uncertain ו shown); English "Everything God saw, everything he heard, and he listened", with Tyler F. Williams's translation (three-things.ca, opened) as the cited parallel. "Lord of all" dropped. Sanders's own wording not given (no opened source states it).
3. Partly. "Consensus" and "Many think" replaced by Sanders's named view and the older Greek-original view (Wikipedia "Psalm 151", opened; it says scholars now accept the Hebrew basis, no dissenter named there). 151B surviving only about two lines is now stated and the "finishes the second" claim removed.
4. Fixed. Qumran use presented as debated: Sanders, Goshen-Gottstein, Skehan, Flint (Wikipedia, "Great Psalms Scroll"); "Jews who sang" and the audience.to contradiction removed.
5. Fixed. Catholic entries rewritten (Trent's number only; Wikipedia: noncanonical); Vulgate Psalm 151 "extra numerum" cited from the CCEL page opened; Syriac entry added from Wikipedia; Judaism entry sourced.
6. Fixed. Note 1:0 now says Sinaiticus counts 151, Alexandrinus 150; "every church" limited to the Psalter opened; rejected_why corrected.
7. Fixed. Plain English Translation 1:7 now "I drew his own sword"; note, anchors and topic quotes updated; Alexandrinus variant added. No other book quotes this verse.
8. Fixed. Claims about R's first hand removed; the apparatus reading (R*, corrected) stated; "troubled copyists" dropped.
9. Fixed. Variant 1:6 now lists the restored or uncertain letters and the two further words; supralinear min noted at 1:1.
10. Fixed. "Father" removed; subject unnamed.
11. Fixed. Spec box claim, the garbled "passed over by no one" clause and the unsourced canon clause rewritten.
12. Fixed. Process disclosures removed; Syriac line now sourced.
13. Fixed. "Bright Saturday" glossed wherever it stands (St-Takla's gloss); Wikipedia's vigil remark not used.
14. Fixed. Westminster 1.3 quoted as the CCEL page (opened) has it; says it does not name Psalm 151.
15. Fixed. Glosses 1:2 and 1:4 reworded to the Greek.
16. Fixed. Added variants for 1:5 (A "but"), 1:7 (A "that man's") and 1:2 (Ra "and", as a third reading of the existing variant).
17. Fixed. 1:1 note corrected; "youngest" comparative claim removed; reception claims and heading and duel interpretations labeled as readings or guesses.
18. Fixed. Deep section now says 3,600 psalms, plus songs (364 daily, 450 in all), 4,050 compositions.
19. Fixed. Proposal topic: "beginning of David's mighty deeds", unsourced aka removed, two sections added on the Greek-Hebrew differences and the count.
