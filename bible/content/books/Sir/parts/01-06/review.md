# Hostile review: Sirach, prologue (1:0) and chapters 1-6 (part 01-06)

## Verdict

The Plain is faithful to Swete's Greek. I found no dropped or invented clause in 1:0 to 6:37. The two departures (6:20 "rough", 6:29 "collar") are flagged and well supported by Swete's own apparatus. The five bracketed gap lines are labeled, but their witnesses are weaker than the entries say. The Hebrew of MS A is quoted accurately against Abegg's transcription (checked line by line in `.scratch/sir-01-06/dl/A_*.txt`). The Didache, CCC 2218 and Talmud material check out. The serious fault is the use of 2Q18: the DSSEL transcription prints most of the Hebrew in grey (restored) and the writer cites it as if read. That is an invented attestation (critical). Several other claims need a real source or removal: the Wikipedia-only dates, Hebrew "behind" Greek verses where no Hebrew survives, the claim that the grandson "often changed" things, an unsourced alternative reading of *aphomoion*, and superlatives. `VERBOSE=1 node tools/build.js --check Sir/01-06` gives 0 errors, 0 warnings.

Counts: 1 critical, 8 major, 11 minor.

How I checked:
- Greek: every verse of `texts/orig/Sir.json` read against the Plain.
- Swete's notes in `texts/src/Sir.app.json`.
- Vulgate in `texts/src/Sir.lat.json`.
- Abegg's transcription of MS A (folio texts).
- The 2Q18 PDF, rendered to an image so that black (preserved) and grey (restored) letters can be told apart.
- Fritzsche's OCR (`dl/fritzsche.txt`), lines 25453 to 25896.
- Lake's Didache from archive.org.
- The vatican.va CCC page.
- Sefaria files and a live Sefaria call.

## Findings

### Critical

1. **2Q18 is cited for readings it does not preserve.** (variants.json 6:20, 6:22, 6:29, 6:30; notes.json 6:14, 6:20, 6:21, 6:26, 6:30; topics.json `tassels`; chapters.json ch. 6 H view and ch. 6 settings `s: djd3`)
   - The DSSEL transcription (`dl/2Q18.pdf`) prints preserved letters in black and restored text in grey inside brackets. Rendered, it shows:
     - 6:14: only "ת]קוף" is black. "ומוצאו מצא הון" is grey. The note's "the fragment, like manuscript A, reads 'a faithful friend is a mighty friend'" is not attested.
     - 6:20: only the final "ב" of "לב" is black. "עקובה היא לאויל" and "ולא יכלכלנה חסר ל" are grey. The note says "manuscript A and the Qumran fragment 2Q18 both have *chasar lev*". The variant says "the Hebrew of both manuscripts has 'rugged'". Neither is shown by 2Q18.
     - 6:21: all grey. The note says A and 2Q18 have "a stone of burden".
     - 6:22: only "כח" is black. The pun on *musar* (variant, note, textual-history topic) is not in 2Q18, only in A.
     - 6:26: only "דרכי]ה" is black. The note says 2Q18 "has its second line in Hebrew" using *me'od*. The word is grey (restored).
     - 6:29: only "בגדי כתם" is black. "וחבלתה" is grey. The variant lists 2Q18 for the whole of "וחבלתה בגדי כתם".
     - 6:30: only "לת" is black. "עלי זהב עולה ומוסרתיה פתיל תכ" is grey. The variant and note say both manuscripts read *petil tekhelet* and "עלי זהב". The `tassels` topic repeats this.
   - Fix:
     - Cite 2Q18 only for the letters that are black: 6:14 "קוף", 6:20 "ב", 6:22 "כח", 6:26 "דרכי", 6:29 "בגדי כתם", 6:30 "לת", and the black part of 6:31. Say that the rest of the fragment is restored from A.
     - Rewrite the 6:20 reason on A and the Greek witnesses alone. The departure to "rough" still stands: A has "עקובה", and Bc, ℵ, A and Ψ have τραχεῖα.
     - Rewrite the 6:30 tassel claim ("both manuscripts") as "MS A reads *petil tekhelet*; 2Q18 keeps only the last letters".
     - Fix the spec box in ch. 6, which rests on this.
     - The same correction applies to the "2Q18" phrases in the ch. 6 H view and in `settings.readers`.

### Major

2. **The 3:25 gap line is taken from a medieval Hebrew MS and presented as a Greek verse, and its justification overreaches.** (variants.json 3:25; plain.txt 3:25)
   - The Plain's bracketed 3:25 is a translation of A's Hebrew (lines 16-17, placed after 3:27 in A). The longer Greek (Fritzsche, line 25895) has a different second line, "γνώσεως δὲ ἀμοιρῶν μὴ ἐπαγγέλλου".
   - The variant says "the Hebrew is the oldest form of the line we have". A is a medieval copy, so this is unsupported. Part of the Hebrew-vs-Greek differences in this book are later Hebrew changes (the writer admits this at 4:15).
   - The brief says gap lines are translated from the longer Greek or the Vulgate. Here the Latin lacks the line (I confirmed `3:25` Vulgate is "Plurima enim super sensum", which is Greek 3:23). The first line of the longer Greek ("κόρας μὴ ἔχων ἀπορήσεις φωτός") and the Hebrew's first line agree in sense.
   - Fix: translate the Greek of Fritzsche (it was read), keep the Hebrew in the variant, or add to the Plain bracket a visible mark that it is from the Hebrew. Delete "the oldest form".

3. **Gap-line witnesses are not named, and some inferences are stated as readings.** (variants.json 1:5, 1:7, 1:21, 3:19, 3:25)
   - Fritzsche's apparatus does name witnesses. The OCR shows "post vs. 4 in H. 99. 55. 10. 106. 248. 253. Co. vet. Lat. haec addita sunt" at 1:5, and "H. 70. 106. 248. 269. Clem. Alex. Paed. I, 8" at 1:21. The entries say only "some later manuscripts". Name them as Fritzsche gives them (minuscule numbers, Complutensian, Old Latin, Clement), or say the sigla cannot be read.
   - 1:7: no Greek was read. The Plain is from the Vulgate alone, and the variant says the KJV "resembles" it. This is acceptable only if the Plain says so. The Vulgate's "disciplina" is rendered "instruction" while the proposed term for παιδεία says "discipline" for the hard sense; at least note it.
   - 1:1 to 6:37: "also Sinaiticus and Alexandrinus, whose readings Swete gives in his notes with none here" (1:5, repeated) infers absence from silence in an OCR'd apparatus. Say "Swete's notes record no addition here".
   - 3:5: Swete's note is garbled ("και ως...αυ ℵc.ᵃ) unc incl B... om ℵAC"). The entry states flatly that Sinaiticus lacks the line. A Sinaiticus corrector may restore it. Check the page image or soften.
   - 1:21: Fritzsche's text has "παραμένων δὲ (αὐτῷ H., ἐν αὐτῷ 269)", and these variants make the person who stays the subject. The Plain "where it stays" chooses the fear; note the alternative ("the one who stays with it"). "The oldest form of the verse that survives" is unsupported (Clement is the earliest cited witness, but that is a quotation, not a form of the text).

4. **The dates rest on Wikipedia alone.** (sources.json `wikipedia-sirach-prologue`; notes 1:0 history; chapters.json settings 1:0, ch.1 H view; topics `ben-sira`, `canon`; proposals ben-sira.json)
   - The 38th year of Euergetes = 132 BC is regnal arithmetic (Ptolemy VIII counted from 170 BC). A web search (Wikipedia mirrors, New World Encyclopedia) confirms that arithmetic. It found no scholarly source, and none was opened. "About 180 BC" and "usually dated" are also unsourced, and the part gives "about 180 BC" (ch. 1 H, topics), "190-180 BC" (every setting) and, in book.json, "190-175 BC". Make them agree.
   - Settings `when` state 132 BC flatly ("after he arrived in Egypt in the thirty-eighth year of Ptolemy VIII Euergetes II (132 BC)"). The Plain says only "King Euergetes". Say that the identification is the usual one and give the reasoning (Euergetes II counted his years from 170 BC, since he shared the throne; Euergetes I's reign was shorter than 38 years).
   - Fix: open a printed or scholarly source (Skehan-DiLella, Wright in the SBL Commentary, the Göttingen introduction, or a Septuagint handbook) and cite it, or mark the figures as the standard reckoning without a source.

5. **Hebrew "behind" Greek verses where no Hebrew survives.** (notes 1:28, 1:11, 1:25 in part; chapters.json)
   - 1:28 note: "*kardia dissē* renders a Hebrew idiom, *lev valev*". No manuscript of Sirach before 3:6 is quoted in this part, and Kahana's chapters 1-2 are entirely in brackets (retroversions; I checked `texts/src/Sir.heb.json`). The Greek echoes Psalm 12:2's idiom, but the note presents a retroversion as the Hebrew.
   - 1:11 note: "The Greek *phobos Kyriou* renders the Hebrew *yir'at YHWH*". Same problem; say "probably".
   - Fix: "the Greek recalls the idiom of Psalm 12:2".

6. **"The grandson often changed a word or a picture" is stated as proved.** (notes 1:0 word; topics `textual-history`, proposals `ben-sira` section 2; ch. 1 deep note)
   - The evidence is a medieval Hebrew MS (A) and a Greek translation. Differences can come from the translator, from the grandson's different Hebrew, or from later Hebrew changes. The variant at 4:15 admits this ("its own reading could also be a change"), yet `textual-history` lists "nations for truth (4:15)" as a change the Greek made, although the entry calls it Claude's suggestion. 3:9, 3:16 and 6:22 are listed the same way.
   - Fix: say "differs from" and that the direction cannot always be known. Keep the 4:15 and 6:22 explanations out of topic prose or mark them as guesses.

7. **An alternative reading of *aphomoion* is unsourced.** (notes 1:0 "What did he find in Egypt?"; chapters.json ch. 1 spec box)
   - "Another reading takes the phrase as 'no small difference (or likeness) of education'" and "Scholars have taken the word in other ways" name no scholar or lexicon. "Difference" is not a meaning of ἀφόμοιον. The web search found nothing on the word (only KJV texts). KJV's "a book of no small learning" was confirmed.
   - Fix: cite LSJ or a commentary opened in the session, or remove the alternative and the "scholars" sentence. The spec box ("the family's Hebrew book had reached Egypt before him") is fine as labeled speculation, but its last sentence should not invent other scholars' views.

8. **Unsupported superlatives.** (topics `ten-commandments`, `friendship`; chapters.json)
   - "the longest ancient sermon on 'Honor your father and your mother'" (ten-commandments topic) and "the Bible's longest passage on friendship" (friendship topic) cannot be checked. The second also calls a deuterocanonical book "the Bible" in the site's own voice.
   - Fix: "a long passage on", or delete.

9. **The `readers` field is one stock sentence copied into 11 settings, and its claims are asserted.** (chapters.json settings, chapters 1 to 6)
   - The same text ("from families who could expect to hold office (4:7-9) ...") appears in every setting. The brief and reviewer brief say "name evidence, not stock lines". "From families who could expect to hold office" is inferred from 4:7-9 and 4:9, which assume pupils may become judges, not that the whole school came from such families. The 4:7 note adds that Jerusalem was "run by the high priest, a council of elders and leading families" under the Seleucids from memory (no source opened).
   - Fix: give each setting its own readers line (for example 3:21-22 read by the rabbis, Hagigah 13a; 6:6 Sanhedrin 100b and Yevamot 63b; 6:14-31 the Qumran fragment) and keep the school inference as labeled.

### Minor

10. **Lectionary heading unverified.** (chapters.json ch. 5 C view; notes 5:7) The claim that the Catholic lectionary reads 5:1-8 "under the heading 'Delay not your conversion to the Lord'" was not found. A search confirmed only that 5:1-8 is the first reading on Thursday of week 7, and the phrase was not in any result. The heading may be a translation-specific title. Remove it or cite the lectionary text. The Vulgate line (5:8 "Non tardes converti ad Dominum") is correct.

11. **Mishnah Avot 1:15 does not say this.** (notes 5:11) Avot 1:15 (Shammai) reads "make your Torah a fixed practice; speak little, do much; receive all people with a pleasant face". It is not about being quick to hear. I read it on Sefaria. Replace with a real parallel or delete.

12. **Talmud quotations labeled "as the Sefaria text gives it" are paraphrases.** (notes 3:21, 6:6) Sefaria's William Davidson English of Hagigah 13a reads "Seek not things concealed from you, nor search those hidden from you. Reflect on that which is permitted to you; you have no business with secret matters". The note's wording differs. Sanhedrin 100b reads "Let many be those who greet you ..." and Yevamot 63b "Reveal a secret to only one in a thousand", but the note quotes "Let many be those who seek your peace". Quote Sefaria exactly or say "in the writer's translation of the Hebrew". The Sanhedrin 100b claim about Rav Yosef is correct.

13. **Term claim false against the Plain.** (notes 5:6) "The Plain keeps 'anger' for *orgē* and 'fury' for *thymos*" is false: θυμός at 1:22 is rendered "anger" twice. Either change 1:22 or fix the note.

14. **6:30 Hebrew normalized silently.** (variants 6:30) A and 2Q18 (restored) read "עלי זהב עולה". The English "a yoke of gold is her yoke" treats "עלי" as עֹל. The reason offers a different guess (the Greek read *'ullah* as *'aleha*). Give the word as written, say that "עלי" is unexplained, and drop or label the guess.

15. **Small Hebrew/English slips.** (variants)
    - 4:17: the English "she tests him" for "יבחרנו" mixes persons (the Hebrew has "I walk" and a third-person verb).
    - 3:19: "great" for "רבים רחמי אלהים" (it is "many are God's mercies").
    - 3:26: "will be led by them" for "ינהג בהם" is unexplained.
    - 4:10: omits that the Hebrew says "widows", where the Greek has "their mother".
    - 4:28: "היעצה" is rendered without comment.

16. **Facts from memory (STYLE rule 2) not opened.** The text of each is in the notes and chapters:
    - Tekhelet "made from sea snails" (6:30).
    - Aristotle on friendship (6:16).
    - Yose ben Yoezer "lived not long after Ben Sira" (6:34).
    - The "lithos dokimasias" as a lifting stone in a strength test (6:21 note and P line).
    - "Frost was a real sight in the hills of Judea" (3:15).
    - The Didache "about the late first century" (4:31).
    - Catholic teaching joins almsgiving with prayer and fasting (ch. 3 C).
    - Greek "moral writers praised aidōs" (4:20).
    - The 4:28 note says the Maccabean martyrs "would take such words literally" (2 Maccabees 7), but 2 Maccabees 7 does not quote Sirach; reword.
    Verify or remove.

17. **Cross-reference slips.**
    - 6:3: Luke 23:31 does not have "the same words" ("dry wood"); it has "the dry" (ξηρῷ).
    - 1:6: the Septuagint uses πανουργία in Proverbs 1:4 and 8:5, not πανούργευμα; say "the same word family".
    - The `ben-sira` proposal and the `almsgiving` topic say the Didache repeats 4:31 "almost word for word". I read Lake: the sense and several roots agree, but the wording differs. Say "closely echoes".
    - 1:13 note: "his book has no hope of resurrection" is flat; the brief says some readings differ (for example 48:11), so say "this part".

18. **Traditions and views.** The part has no `traditions` cards.
    - 3:3 ("honoring a father atones for sins") has no pointer except to alms; Catholic and Orthodox views of it are not stated.
    - The ch. 3 P line says Protestants "deny" that honoring parents atones; no confession or Article is cited.
    - The ch. 2 J view gives biblical echoes, not Jewish reception.
    - The 3:30 pointer to the Tobit 4 card is correct (the card exists, top `almsgiving`), and the 4:26 pointer to the Psalm 32 card exists too.
    - Consider a short card at 3:3 or state that the Tobit 4 card covers it.

19. **Proposed topic `ben-sira` and terms.**
    - The topic is one page for both the man and the book (`kind: People`); fine as a single topic (no other topic or `aka` collision found), but the title says "and His Book".
    - It repeats the Wikipedia-only dates and the "often changed" claim (see 4 and 6).
    - Link spelling "Cairo Geniza" differs from the "Genizah" used elsewhere.
    - Its source keys include `bavli-hagigah` and `bavli-sanhedrin` (the build passes with proposals). Its "1896" and "about two-thirds" come from Wikipedia only.
    - Eight terms proposed. The παιδεία entry ("instruction", "discipline" at 4:17, "the untaught") conflicts with the 19-23 entry ("discipline", "undisciplined"); the lead must choose one. The ἐλεημοσύνη entry departs from the shared "alms" at 3:14 ("Mercy shown to a father") with a note; the departure hides the Greek link to 3:30, so state it in the Plain's gloss.

20. **Drift and wording.**
    - Judged by description only. I found no run of five or more words that I would flag as matching the NRSV, NABRE, RSV, NJB, NETS or Skehan-DiLella; I cannot check without recalling their text, which the rules forbid.
    - The gloss "be paranoid about your staff" (4:30) uses a word that is a known rendering of φαντασιοκοπῶν in one modern version; the Plain's "dream up fears" adds "fears", which is not in the Greek.
    - Small additions in the Plain: 2:5 and 3:17 add "God" to δεκτοί (the Greek has "acceptable"); 3:14 adds "as a house"; 1:26 turns the participle into a question; 3:1 "for I am your father" smooths "ἐμοῦ τοῦ πατρός".
    - Gloss at 3:16, "on the Lord's bad side", is flippant for a curse.

## Verified

- Didache 4:5 and 4:6 as quoted match Lake (archive.org, *The Apostolic Fathers* vol. 1).
- CCC 2218 cites both Sir 3:2-6 and 3:12-13, 16 (vatican.va).
- All MS A quotations in variants and notes match Abegg's transcription, including the scribal correction at 3:28 and the "three yods" at 5:3.
- Both Greek departures at 6:20 and 6:29 follow Swete's apparatus. 6:29 also notes A reading παιδες for πεδαι, which the variant omits.
- The Vulgate lacks Greek 3:19 and 3:25 lines (confirmed in `Sir.lat.json`).
- Fritzsche's longer Greek at 1:5, 1:21, 3:19, 3:25 is as quoted. Clement is named in the apparatus at 1:21.
- No em-dashes in any part file. Sefaria's Avot 1:4 and 3:5 and Hagigah 13a, Sanhedrin 100b and Yevamot 63b support the notes except for the points in findings 11 and 12.

## Fixes applied
