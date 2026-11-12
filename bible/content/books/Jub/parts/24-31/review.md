# Hostile review: Jubilees, part 24-31 (chapters 24-31)

## Verdict

The translation is sound. I read all 225 Ge'ez verses of `texts/orig/Jub.json` (`gez` with `tr`) against `plain.txt` and Charles 1913 for sense. I found no mistranslation of substance in names, numbers, dates or who-does-what. Every Ge'ez string quoted in notes and variants is a whole-word match in `gez`, which I checked by script because `works-check.py` is unreliable for Jubilees. `python tools/works-check.py Jub` lists nothing for 24-31. `node tools/build.js --check Jub/24-31` gives 0 errors and 0 warnings. Every Charles 1902 report I tested (Charles's pages 248-290, Source Library 69e012414e6773d06085614a, opened from the writer's stripped copies) is accurate, and so are the Latin and Syncellus quotations. The Genesis, 1 Maccabees, Hebrews and other quotations match the site's wording. No source, reading or fragment is invented.

The problems are in the apparatus and the settings:
- The one EOTC variant (27:20) is a cut in the digital copy, not a reading.
- Three "readers" paragraphs are a pasted stock line that credits Charles with a view he does not state at those verses.
- One Ge'ez departure (29:9) has no entry.
- Several Latin and manuscript differences that change the meaning are not entered. In one case (28:20) a note builds an argument on a clause the Latin lacks.
- The 26:32/33 split does not match Charles's, and the note's claim about "VanderKam's edition" rests only on a web transcription.

There are no critical findings.

Verified in this session:
- The 24:3 and 24:6 "red" departure: Charles's note says `za-šernāj` = πυροῦ, "corrupt for πυρροῦ".
- The 29:14 "sea of the heap / fahahhat / salso / aggruum / 'oma" apparatus.
- The mss a-d attributions at 25:14 (c "Holy Spirit"), 26:15, 26:34 (b "become great", a c "refuse"), 29:14, 31:2 and 31:20.
- Syncellus's Greek at 26:34.
- The date "about AD 810" for Syncellus: a web search found him last attested alive in 810, with his *Chronography* left unfinished, so "about AD 810" is acceptable.
- The anno mundi sums in the notes and the table in chapter 28: 2073, 2080, 2101, 2108, 2122 to 2134, 2143. All match Charles's margins.

## Findings

### 1. MAJOR. variants.json 27:20 "And he slept.": a cut in the digital EOTC copy shown as a reading
- **What is wrong.** The entry says "the EOTC printed Bible (digital copy) does not have the words" and gives the reading "(no words)". 27:20 is not in `gap`, but the EOTC verse is VanderKam's verse cut at its first full stop. I compared all non-gap EOTC verses in chapters 24-31 with `gez` after stripping punctuation. 27:20 is the only mismatch, and the EOTC text is an exact prefix of `gez` (41 of 44 characters), ending at `የሐውር ።`. This is the fault the brief names: 450 EOTC verses stop at the first full stop, and "a cut ... is never a reading". `texts/auto` lists it only because it compares strings. The review of 39-45 removed the same kind of entry (44:24).
- **Also.** The entry's `why` explains the "omission" ("Without the words, the verse simply repeats that Jacob traveled alone; 27:19 has already said he slept there"). That explains something that is not in any witness. The `eotc-jubilees-bm` source key then has no use in this part.
- **Fix.** Delete the 27:20 EOTC entry. Keep the Latin "at his head" entry. If a mention is wanted, add to the lead's gap list that 27:20 is cut in the EOTC copy.

### 2. MAJOR. chapters.json settings `readers`: pasted stock paragraph, misattributed to Charles, and unsourced historical claims
- **Stock paragraph.** The sentence "Most scholars date Jubilees to the 100s BC; Charles 1902 read passages like this one as written for Jews of the Maccabean age, who saw Judah fight the nations around it." is pasted into three settings: 24:9-11 (God's promise to Isaac), 25:1-3 (Rebekah's charge) and 27:9-11 (Isaac's charge). Charles's notes on these verses say nothing of the kind. His Maccabean arguments are tied to 24:28-32, 29:9-11 and 31:15. "Passages like this one" is therefore an invented attribution. The first clause ("Most scholars") has no source in the part. The same problem appeared in 01-04.
- **Unsourced claims given as fact.**
  - 25:1-3: "Jewish families in the 100s BC who faced pressure to marry outside Israel."
  - 30:5-17: "It answered the pressure of intermarriage in the 100s BC."
  - 26:31-34: "For readers in the 100s BC Edom (Idumea) was a neighbor and enemy". This carries `s: charles-jubilees-1902`, but Charles's notes on 26:34 do not say it. His only Edom/Idumea remark is at 29:14 (Akrabattene, 1 Maccabees 5:3).
  - The ch25 and ch30 `views` H entries ("Critical scholars read the chapter as a response to intermarriage in the 100s BC"), the ch26 H view (Esau doomed "in keeping with the hostility to Edom in his own time"), and the `edom` and `foreigners` topics ("fits the hostility toward Edom (Idumea) in the 100s BC") name no scholar and no source.
- **Fix.** Delete the stock sentence from the three settings. Write a reader line from evidence opened (Charles's notes at 24:28-32, 29:10, 31:15), or leave `readers` out where nothing is opened. Rename "critical scholars" to the person who proposes the reading (Charles, with the page), or give a source for the date. Drop `s` from 26:31-34 unless Charles supports the line. Do the same for the H views and the two topics.

### 3. MAJOR. plain.txt 29:9: a departure from VanderKam's Ge'ez with no variant
- **What is wrong.** `gez` 29:9 reads `ምድረ ፡ ራፋኤል ፡ እስመ ፡ ምድረ ፡ ራፋኤም` ("the land of Raphael, for it is the land of Rephaim"). The Plain English Translation has "the land of the Rephaim" twice. Charles has `Rafâ'êm` in both places. The brief says "every departure ... needs a variant entry". The note's `orig` quotes only `ራፋኤም`.
- **Fix.** Add a variant: VanderKam's `rafaʾel` (as transcribed), against `rafaʾem` in Charles's text (his note gives `Rafâ'êm`). Say it is probably a slip of ʾel for ʾem. If the slip cannot be checked in the printed edition, say so. The lead may want it on the `fixed` list.

### 4. MAJOR. variants.json: Latin and manuscript differences that change the meaning are not entered
The brief says to enter these. Charles's notes report each one, and the Latin survives at each verse. I opened Charles's notes on all of them.
- **28:20.** Charles: "Envied (Rachel) and she also gave. So MSS but the text is doubtful. ... Latin reads *et dedit*." The Latin has no envy clause. The note "Two sisters, two rivalries" builds a literary point on "she too was jealous" and mentions only that the text is "doubtful". Add a variant. Either add to the note that the Latin lacks the clause, or soften it. Chapter 28 ("two rivalries") needs the same care.
- **30:3.** Charles's text reads "he besought his father and her brothers" (`ab` "his father"; `cd` "her father"). VanderKam's Ge'ez has `ʾäbuha`, "her father", which the Plain English Translation follows. Who is begged is a meaning change, and Charles's English shows the other reading. The Latin also adds *Et posuerunt in corde suo Symeon et Lenui exterminare eos*. Add a variant for both.
- **29:11.** Charles: "The Amorites dwelt. Latin: *habitare fecit*." The Latin makes God settle the Amorites, where the Ge'ez has them settle.
- **31:15.** Charles: "The Latin omits 'and chiefs'." The Plain English Translation has "rulers, princes and chiefs". The third Ge'ez word is `mälaʾkətä`, the ordinary word for "angels" or "messengers". The brief fixes `mälʾäkä` as "angel", and 05-10's term entry glosses `mälʾäk` as "leader" at 10:8. The anchor shows the Ge'ez but nothing explains "chiefs". Add a variant (Latin omission) and a gloss of the word. The note also renders `mäkʷännən` as "rulers" and then `yəkʷennu` as "judge" in the same verse. Charles has "judges... judge". Say why or harmonize.
- **30:16.** Charles brackets "and no consideration of persons" as a dittography and says "Latin omits". The Plain English Translation keeps both phrases (correct for the base text), but the Latin differs.
- **28:26.** Charles: Latin *dabo tibi mercedem* "is better" (against "Take your wages"). Minor.
- **28:22.** VanderKam has the masculine "he named" for Issachar (as at 28:11, 13, 14, 15, 18). Charles prints "she called" at 22 and says "In 19-24 this form is actually found". The note's "Charles suggested reading 'she called' throughout" omits this. It is a manuscript difference from Charles's own text.
- **26:25.** Charles's note: "†He hid himself and†. This looks like an addition to the text. Read 'that'." The part has a note (type `word`) but no variant.

### 5. MAJOR. 26:32/26:33: the split does not match Charles, and the claim about the printed edition is unverified
- **State of the numbering.** `gez` has no key 26:33, and `join` maps 26:33 to 26:32. Plain 26:32 is Esau's question plus "And Esau raised his voice and wept". Plain 26:33 is Isaac's answer only. In Charles 1913, 26:32 ends "Bless me, (even) me also, father:" and 26:33 begins "And Esau lifted up his voice and wept. And Isaac answered ...". The note and the chapter box say the Plain English Translation numbers it "as Charles and the older English do" and "keeps the usual number so that references match". The weeping sentence is in the wrong verse for that to be true. A reader citing "Jubilees 26:33" from Charles gets the weeping, and here does not.
- **The unverified claim.** The note says "In VanderKam's edition ... there is no verse 33". What is checked is that the Open Siddur transcription prints none. Whether the printed edition does is not checked, and the transcription may have dropped a number. The writer's own sources log lists no check of the printed edition.
- **Fix.** Move "And Esau raised his voice and wept" to the start of 26:33, as Charles has it. Say plainly that the site's Ge'ez (Open Siddur's transcription of VanderKam) prints Isaac's answer inside the verse numbered 26:32 and has no 26:33. Keep "Nothing is missing" (it is correct: the Ge'ez has the answer, with its full stop after "wept"). Make the same wording change in the chapter 26 `fact` box.
- **Related, minor.** The 26:33 "away from the dew" rendering is correct and matches the site's Genesis 27:39 "away from". The Ge'ez `እምጠለ` is the same double-sense preposition, so no change is needed.

### 6. MINOR. plain.txt 27:25 "Jacob slept a deep sleep, and he said"
`wänomä yaʿqob nəwamä` is "Jacob slept a sleep". "Deep" is not in the Ge'ez. The variant's own `why` concedes the text is probably corrupt (Charles: `ἐξύπνωσε ἐξ ὕπνου` miscopied). "Slept a deep sleep, and he said" reads as speaking in sleep, against 27:26. Remove "deep" (or bracket the clause) and say in the entry that this is the base text's likely slip.

### 7. MINOR. plain.txt 24:30 "Caphtorites"
The site's Genesis 10:14 and Deuteronomy 2:23 use "Caphtorim". Charles has "Caphtorim". Use the site's form, or note the change. The note's title and text also say "Caphtorites".

### 8. MINOR. glosses.json 24:3 "lentil stew => bean soup"
Lentils are not beans. A reader could take "bean soup" as a different dish. Use "lentil soup" or "a thick lentil soup". The gloss "26:2 savory meal => tasty stew" also adds "stew", which the text does not say (venison).

### 9. MINOR. notes.json: own conjectures not labeled as Claude's theory (STYLE rule 4)
- 24:8: "The author may have read the command as a reply to something Isaac was doing."
- 25:16: "even the family of Israel matches the shape of the calendar."
- 30:24: "perhaps because taking foreign women into the family would break the very law the chapter teaches."
- 31:22: the claim that "from between his feet" "recalls Genesis 49:10" and might mean Judah. Charles says only that "And he blessed them" "seems out of place". The Genesis 49:10 link is the writer's own.
- Fix: attribute each to a source, or make each a `spec` note with its verses and "I have not found this in the sources opened".

### 10. MINOR. notes.json 25:4 and chapter 25 VIEW J: Genesis Rabbah "agrees with Jubilees' chronology"
Charles quotes Genesis Rabbah 68 only for Jacob's age at the blessing (63). Charles's note also says the 63-year figure (Jacob born 2046) conflicts with 45:13 (born 2041). Genesis Rabbah has Jacob 84 at marriage, where Jubilees' dates give an earlier age. "Agrees with Jubilees' chronology" overstates this. Say it agrees on the age of 63, and give Charles's 45:13 conflict.

### 11. MINOR. Unsourced factual claims (STYLE rule 2)
- 24:30 note: "Most scholars place Caphtor in Crete or the Aegean". Charles refers only to Encyclopaedia Biblica for "various views".
- 25:15 note: "Blessings that begin 'Blessed are you, Lord' became the standard form of Jewish prayer."
- 27:19 note: "Bethel lay about 11 miles north of Jerusalem".
- Chapter VIEW E (24): "alongside the Orit (Genesis to Deuteronomy)". I could not find a source saying "Orit" is the Ge'ez name for Genesis to Deuteronomy. A web search found the EOTC canon page listing Genesis to Deuteronomy as the opening books, but nothing on "Orit".
- Chapter 24 VIEW J: "the curse on the Philistines has no parallel in the rabbinic retellings Charles cites". This is the writer's inference from silence.
- Fix: give a source (the EOTC canon page, Bible Atlas MCP for Bethel's distance), or cut.

### 12. MINOR. notes.json 31:3: "Levi is made priest on the fourteenth"
Charles 32:1-3: Levi dreams his ordination "that night", and Jacob rises "on the fourteenth" to give the tithe. The clothing in 32:3 has no date. This is a cross-part claim the brief says to check. Say "Jacob gives his tithe on the fourteenth and keeps the offering on the fifteenth (32:2, 32:4)".

### 13. MINOR. notes.json 24:28, 24:30, 29:10: names against the site's 1 Maccabees
The site's 1 Maccabees says "Azotus" (5:68, 10:84) and "Carnaim" (5:43-44). The notes say "Ashdod" and "Karnaim" and cite those verses. Add "(Azotus in 1 Maccabees)" so a reader can find them.

### 14. MINOR. chapters.json 29: Charles overstated
"Read as a map of Maccabean victories -- Charles thought ... Jacob's grazing lands (29:14) named places where Judas Maccabee had fought". For 29:10 this is Charles's view. For 29:14 he says Beth-shan "is associated with Judas, but in a peaceful way" and Akrabattene (a district in Idumea) is where Judas fought. Restate with those limits.

### 15. MINOR. settings: gaps and invented detail
- Settings are missing for 24:22 (God's word to Isaac), 26:2 and 26:5-6 (Isaac's commission to Esau; Rebekah's plan, with Jacob's reply 26:7-8), and 31:32 (Jacob's "eternal hope").
- 24:28-33 `to`: "in the hearing of his household" is not in the text.
- 25:1-3 `to`: "at the Well of the Oath" is inferred from 24:21 and 27:19 and not stated.

### 16. MINOR. Labels of "Compared with the Bible"
24:2 (Genesis's order reversed) is labeled "Goes beyond", while 25:1 (an order change) is labeled "Changes". 30:7's note says the penalty for the woman "has no basis in any law for an Israelite who marries" in the same note that traces burning to Leviticus 21:9 and Genesis 38:24. Make the labels and the sentence consistent.

## Checked, no finding
- Brief terms: "Rebekah" (no "Rebecca" in any file); "week(s) of years" at 24:12 and 25:4; "the Lord", never "the LORD", in the translation; "the angel of the presence" in settings; "the heavenly tablets"; `śärq` is "the first day of the month" at 24:22, 27:19, 28:14, 28:24, 31:1 and 31:3 (term entry from 05-10; the part never uses "new moon"). There is no Mastema in this part, so nothing is needed for `mastema`.
- Departures from VanderKam: 24:3 and 24:6 "red" (entered, grounded in Charles's note on `za-šernāj`; I recommend keeping, since "Edom" in 24:6 needs "red"); 29:14 "Salt Sea" (the Latin *salso*; entered; Charles reads it as "Salt Sea"); the dropped `ʾämä` in 29:14 (entered). 29:9 is the only unlisted departure (finding 3).
- Charles, Latin and manuscript attributions at 24:14 (*ministerium*), 24:20 (*inimicitias*), 24:28 (*peccatoris populi*), 24:31 (*ubi fugiens erit*), 26:15 (*direxit*), 27:20 (at his head, "added from the Latin"), 29:13, 29:14, 30:10 (*alienigenae*), 30:22 (*libro perditionum*), 31:10 (*Vidisti, pater*), 31:14 (*magno intellegere gloriam ejus*; *sanctificabit*), 31:16 (*ad decorem Dei*). Latin survives at each verse (24:13-25:1a; 26:8b-23a; 27:11b-24a; 28:16b-27a; 29:8b-31:1a; 31:9b-18).
- Dinah's age (30:2): the dates give 9 (born 2134 at 28:23; 2143 at 30:1), against the text's twelve. Both years match Charles's margins, and Test. Levi 12 is correctly reported. The theory is in a `spec` box titled "Claude's theory". The 29:7 and 31:12 theories are labeled too.
- 31:22: the Plain English Translation leaves "he" open, in the Ge'ez order, with Charles's "seems out of place" correctly reported. Apart from finding 9, no change is needed.
- Genesis wording: every Genesis, Exodus, Leviticus, Deuteronomy, Hebrews, Luke, Acts, Galatians and 1 Maccabees quotation in notes matches the site's current text (I re-checked 36 verses myself). The build's 0 warnings agree.
- No traditions cards: none are needed. The marriage question is already carded (Ezr, 2Co) and the notes point to it. No forced cards.
- Style: no em-dashes; no "from memory" hedges; the "as reported in Charles 1902" labels are allowed because the writer read his report.

## Fixes applied
1. Accepted (lead decision 1). Deleted the 27:20 EOTC "(no words)" entry: the digital copy is cut there, and 27:20 is now in the EOTC `gap` map. The Latin "at his head" entry stays. The `eotc-jubilees-bm` key is no longer used in this part.
2. Accepted. Removed the stock "Most scholars ... passages like this one" readers line from 24:9-11, 25:1-3 and 27:9-11, and the unsourced Edom/Idumea readers line and its `s` from 26:31-34. Readers are kept only where Charles's notes support them: 24:28-33 (his 24:28-32 note, "second cent. B.C."), 30:5-17 (his 30:10 note: "may not be older than the Maccabean age"; Megillah 4:9) and 30:18-23 (rewritten from his 30:2-6 note; the claim that he tied 30:18 to the priest-rulers was not in his note there). "Critical scholars" removed from the H views of chapters 24, 25, 26, 28 and 30 and replaced with Charles's own words (pages cited in the notes) or plain description. The `edom` topic's "100s BC" clause cut. The 31:15 note's "Most scholars date Jubilees to the 100s BC" cut. (The `foreigners` topic had no such claim.)
3. Accepted. New variant at 29:9: VanderKam `ምድረ ራፋኤል` against Charles's Rafâ'êm. Checked Dillmann 1859 (Source Library, p. 106 of his edition): it also has the -ʾel form here, so the entry calls it a slip older than the transcription, not a transcription slip. Nothing for the lead's `fixed` list.
4. Accepted. New variants at 28:20 (Latin *et dedit*, no jealousy; note 28:20 rewritten to say the clause rests on the Ge'ez alone, with no "two rivalries" argument), 30:3 (two entries: "her father" vs Charles's mss a, b "his father"; the Latin sentence *Et posuerunt in corde suo Symeon et Lenui exterminare eos*), 29:11 (*habitare fecit*), 31:15 (Latin omits "and chiefs"; explains `mälaʾkətä` as "chiefs" with Charles and the site's 10:8 term entry), 30:16 (Charles's dittography, Latin omits), 28:26 (*dabo tibi mercedem*), 28:22 (Charles's text "she called"; note 28:11 corrected to say Charles's text has the feminine in 19-24) and 26:25 ("he hid himself and" as an addition). The 31:15 note now says why "rulers" (`mäkʷännən`, same letters as `yəkʷennu`; Charles "judges"; Judah made `mäkʷännən` in 31:18).
5. Accepted (lead decision 2). Plain English Translation 26:32/26:33 re-divided as Charles: 26:33 now begins "Esau raised his voice and wept." The 26:33 note and the chapter 26 fact box now say only: "The transcription of VanderKam's Ge'ez used here runs 26:32-33 together; the division follows Charles." No claim about the printed edition.
6. Accepted. 27:25 "Jacob slept, and he said" ("deep" removed); the variant's `why` now calls the base text a likely slip (Jacob speaks at once, and 27:26 has him get up in the morning).
7. Accepted. "Caphtorim" (site Genesis 10:14, Deuteronomy 2:23) in 24:30 and the note's anchor; the note also gives Charles's "all Caphtorim" -> "these Caphtorim" emendation.
8. Accepted. Glosses "a thick lentil soup" (24:3) and "a tasty dish" (26:2).
9. Accepted. Removed the unlabeled conjectures at 24:8, 25:16 and 30:24 ("The book does not say why"). 31:22: the Genesis 49:10 link moved to a new `spec` note labeled Claude's theory; the `word` note keeps only what Charles says.
10. Accepted. 25:4 note and chapter 25 J view now say Genesis Rabbah 68 agrees on the age of 63 (and has 84 at marriage), and give Charles's conflict with 45:13 (2046 vs 2041).
11. Accepted. Cut "Most scholars place Caphtor in Crete" (now Charles's pointer to the Encyclopaedia Biblica), the 25:15 Jewish-prayer sentence, Bethel's distance from Jerusalem (27:19), and "Orit" (views E of chapters 24 and 28 now say "Genesis"). Chapter 24 J view replaced with Charles's note on Genesis 26:32 (lo/lo'; Septuagint), which was opened.
12. Accepted. 31:3 note: tithe on the fourteenth (32:2), burnt offerings on the fifteenth (32:4), checked in Charles 1913.
13. Accepted. "(Azotus in 1 Maccabees)" at the 24:28 note, the 24:28-33 setting and the `philistines` topic; "Carnaim" at the 29:10 note; the `giants` topic names Carnaim and Baean as the site's 1 Maccabees has them.
14. Accepted. Chapter 29 reading and the 29:14 note restated: Karnaim and Beon (29:10) as Charles's Maccabean links; at 29:14 only Akrabattene, with Beth-shan linked to Judas "in a peaceful way" (2 Maccabees 12:29-31).
15. Accepted. Settings added for 24:22, 26:1-2, 26:5-6, 26:7-8 and 31:32. 24:28-33 `to` now says only what 24:26-28 says; "at the Well of the Oath" removed from 25:1-3.
16. Accepted. 24:2 relabeled "Changes" (an order change, like 25:1). 30:7 now says no law of Moses puts to death an Israelite woman who marries a Gentile, and the burning is borrowed from Genesis 38:24 and Leviticus 21:9.
Lead decision 5 (terms): rechecked; no Mastema or satan in this part, "Rebekah", "week(s) of years" and śärq "first day" already correct. Lead decision 6 (drift): the review lists no 8+-word runs; the three verses changed (24:30, 26:32-33, 27:25) were rebuilt from the Ge'ez and audited. Check: 0 errors, 0 warnings.
