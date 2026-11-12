# Hostile review: Psalms of Solomon 9-18 (PsS, part 09-18)

**Verdict.** This is careful, well-sourced work. `node tools/build.js --check PsS/09-18` gives 0 errors and 0 warnings. The Plain English Translation follows Swete's Greek closely, and I found no invented source or reading. The Gray, Ryle and James quotations I could check (17:6, 17:9, 17:17, 17:36, 13:4, 15:9) match the opened texts. Baruch 5:5, 5:7 and 5:8 are quoted exactly. The problems are these. Three places leave Swete's text with no variant entry, and the 10:3 variant wrongly says it is the only one. One note makes a false claim about the site's Isaiah. Swete's sigla are tied to Gray's capitals as plain fact, with no label saying it is an inference. A reading with a reversed sense (17:11) is left out of the variants. A few notes overstate or rest on sources I could not open.

Method: I read all 158 verses against `grc` (Swete). I read the apparatus OCR (`texts/src/PsS.app.json`) for every variant entry. I read Gray's translation and notes (Source Library, scan pp. 656-666, and the introduction) and the Ryle and James pages in the writer's scratch folder. I did not open Ryle and James pp. 140-151 (17:36, 18), so those claims are marked "unverified" below.

## Findings

### Major

1. **17:11, no variant for a sense-reversing reading.** Notes.json 17:11 says in passing that h, m, p, v "lack the first 'not'" and that most manuscripts begin "according to their deeds". Swete's apparatus reads `ουκ 1⁰] pr κατα τα εργα ουτων hilmpv (om ουκ hmpv)`. So most manuscripts open "According to their deeds ...", and h, m, p, v then read "he will have mercy on them", the opposite of the Plain English Translation's "God will not have mercy on them". This is a significant witness split on whether God has mercy, and it belongs in variants.json with the witnesses named. Fix: add a 17:11 entry (Swete's text with r, "will not have mercy"; hmpv "according to their deeds he will have mercy on them"; i and l with "according to their deeds" plus the negative; reasons per Gray).

2. **Departures from Swete's text with no variant entry, and a false claim that there is only one.** The variant at 10:3 says "This is the one place in this part where the Plain English Translation leaves Swete's text for a manuscript reading". It is not.
   - **9:12.** Swete prints `καθαρίσει ἐν ἁμαρτίαις ψυχήν`, "in sins". The Plain English Translation has "wash a soul clean of its sins", which is Gray's and the Syriac's "from sins". The note only says "in sins (Swete's text) may come from a Hebrew 'from sins' misread". It never says the translation departs. Fix: add a variant (Swete "in sins", the Syriac and Gray "from sins") and say which one the translation follows, or return to "in sins" with a note.
   - **18:4.** Swete prints `ἡ παιδία σου` (`grc`; see `.scratch/PsS-09-18/grc.txt` line 160). The apparatus shows `παιδεια hilmpv`. The Plain English Translation has "You discipline us", i.e. `παιδεία`. There is no variant and no note. Either the digital Swete has a typo (report it for `tools/swete-fixes.json`) or the translation departs. Fix: variant entry, or a swete-fixes item.
   - Also correct the "one place" sentence in the 10:3 `why`.

3. **17:42, false statement about the site, and a contestable rendering.** The Greek is anarthrous `ἐν πνεύματι ἁγίῳ`. The Plain English Translation has "by the Holy Spirit" (capitals, with an added article). The note says "The site writes 'Holy Spirit' with capitals for God's own Spirit, as it does in Isaiah". The site's own Isaiah 63:10-11 reads "his holy spirit" and "put his holy spirit" in lowercase (verified in `content/books/Isa/parts/*/plain.txt`). Gray also renders "his holy spirit". Capitalizing and adding the article decides the question in the Christian direction in a Jewish text whose chapter page argues the king is human. Fix: "by holy spirit" or "by holy spirit" (or "by his holy spirit"), a note on the capital, and delete the false Isaiah claim. The summary and the chapter page quote "holy spirit" in lowercase, while the Plain English Translation has "Holy Spirit", so they also disagree with each other.

4. **Swete's sigla matched to Gray's capitals as fact.** Neither book states the match, and nothing in the part marks it as an inference. Examples are notes 10:0 ("Gray (who calls Swete's manuscript r 'R')"), 16:1, 17:16 ("the manuscript R (Swete's r)") and the many "(Gray: R, J, L, C, H)" brackets in variants.json. The match (c=C, h=H, i=J, l=L, m=M, p=P, r=R, v=V) is plausible and fits several readings: 15:9 "from famine" in i and r matches Gray's R and J, and 17:16 `τοῖς θεοῖς` in hilmpv matches Gray's J L H. But it rests on initials and on matching readings, and it has a conflict (item 5). Fix: state once, in the first note or variant of the part, that the match is an inference from the initials and from matching readings, that neither Swete (as read here) nor Gray gives a key, and that i = J is the least certain.

5. **16:1, unverifiable witness count, and a conflict with the match.** The note's `p` says Swete's `kataphora` "is the reading of two manuscripts". The apparatus OCR reads `καταφθορα climv`, so Swete's note gives `kataphthora` to c, l, i, m, v, which conflicts with Gray's R and L for `kataphora`. Gray says kataphthora is in J, C and H; l is in neither list. The variant entry does say the Swete note is hard to read, but the `p` line states "two manuscripts" as fact. Fix: drop the count from `p`, or check a page image of Swete. Record under item 4 that this conflict is unresolved.

6. **11:3 and the chapter 11 page, overstatement.** The note's `p` says Baruch 4:36-5:9 "runs line for line with this psalm". That is stronger than the evidence, and the chapter page itself says "nearly the same things in the same order". The "Others think both poems drew on Isaiah 40 and 60 or a lost common psalm" line names no one. The chapter page's "others" is also unnamed, and the "Viteau rejected" claim is given only "as Gray reports". The brief asked for both directions and a shared source "each with who holds it". Fix: soften `p`. Name who holds the shared-source view (the Baruch notes on the site may name them; Toy is the author of that argument) or say it is not attributed.

7. **17:14, Josephus references not traceable.** The note says Gray cites Josephus for the captives at "Jewish Antiquities 14.4.5; 14.5.4; 14.6.1; Jewish War 1.7.7; 1.8.6". In the pages I opened, Gray cites only Ant. 14.4.5 (note on 8:24), plus Ant. 14.3, 14.4.4 and War 1.7.5-6. The Source Library OCR of Gray's notes on 17:9-17:16 (scan p. 662) is a paraphrase and does not contain these references. I could not verify the other four references, and they are not in `sources-checked.md`. Fix: verify them in Josephus, or cut them to what Gray's opened text gives.

### Minor

8. **9:7, "soul" dropped.** The Greek is "in the choice and power of our soul". The Plain English Translation has "What we do is up to us ... in our own power". The note explains `psychē`, but the key free-will verse loses the word. Consider "in the choice and power of our own souls", or keep it with a note on why it is dropped.

9. **9:8, "all" added.** The Greek is `υἱοὺς ἀνθρώπων`, "sons of men"; the translation has "all people".

10. **9:16, "our enemies" supplied.** The Greek `ἵνα μὴ ἐπιθῶνται ἡμῖν` has no named subject; Gray also has "they". Fine as sense, but it is an addition, and a note would say so (Gray's note says the Syriac has "the peoples").

11. **10:6, `ὅσιος` of God rendered "faithful".** This collides with `πιστός` "faithful" in 14:1 and 17:12, and with the part's own term "the devout". The note explains it (Psalm 145:17), but `terms.json` proposes no entry. Add one ("loyal", as at Psalm 145:17 in the site, is the better match, and it avoids the clash).

12. **10:9, "wholeness".** This is neither `σωφροσύνη` ("soundness of mind", the variant's own gloss) nor `εὐφροσύνη`. The variant's `plain` for reading one ("lasting wholeness") is a loose rendering of a word the note says is "odd". Say so in the note, or use "soundness".

13. **11:8, `ἁγίασμα`.** The brief's term is "the sanctuary". Here the translation has "your holiness", while the note admits it "can also mean the robe of your sanctuary", and 17:33 has `ἁγιασμῷ` as "holy". Add a line to the note on why the term is not followed here. (The proposal file has no ἁγίασμα entry from this part, so check the 01-08 one.)

14. **12:4, "law-breaking" dropped.** `συνχέαι οἴκους παρανόμους` is "to confuse law-breaking houses". The translation has "throws houses into confusion", and Gray says the adjective is probably a dittograph. The note at 12:4 does not mention the omission. Fix: say so in a note.

15. **13:2 note, garbled sentence.** "compares Gray's rendering 'the death of the righteous' in Balaam's wish" should read that Gray compares Balaam's wish "the death of the righteous" (Numbers 23:10). The sentence "He also suggests that the Hebrew may have listed the four judgments of Ezekiel 14:21" is not in Gray's notes on 13:2 (they cite Ezekiel 14:17 and Leviticus 26:6). I could not find it. Verify it, or cut it.

16. **15:9 variant, readings for r and i are merged.** The apparatus gives `διωκομενου chmprv` and `απο λιμου ir`. So r has `-ου` together with `ἀπὸ λιμοῦ`, while i differs. The entry lists "i and r" together with `διωκόμενοι`. Gray's own record (`pursued (J)` against `pursuing (R L C H)`) also does not match. Mark the Greek of reading 2 as reconstructed, or split i and r.

17. **17:16, `τοὺς θεούς` vs the translation.** Swete prints the accusative (r's reading, which Gray calls probably older). hilmpv have the dative (`τοῖς θεοῖς`). The translation "do for their gods" follows the dative sense. The note covers it, but no variant entry exists. Add one or say plainly that the translation follows the dative.

18. **17:17, "outdid them".** Gray, in the note quoted at 17:17, says the Greek "would most naturally mean 'ruled them' ... or 'gained the mastery over them'". The note admits the choice. Consider "prevailed over them" in the text, which keeps all three options open, as the note describes.

19. **17:20 variant, the lacuna in c.** Six manuscripts (h i l m p v) omit the line, and r keeps it, as the entry says. But c is damaged from 16:8 on (Gray's table), so the right count is "six of the seven manuscripts that survive here". Say so. The cited reason "probably a copyist's repetition" is fine; Gray's translation does omit it (checked).

20. **17:36 variant and note, names unverified.** The variant lists "Ewald, Hilgenfeld, Geiger, Wellhausen and others, as Ryle and James list them". The note lists only "Ewald, Wellhausen and others", and the note's claim that Ryle and James "list three views" and "reject" a Christian change are all cited to Ryle and James pp. 140-143, which I did not open. Make the two lists agree, and check the names against the page. Gray's note confirms the variant's Greek (Syriac and Greek both "the anointed, the Lord"; normal rendering `Χριστὸς κυρίου`; Lamentations 4:20), and the Alexandrinus mention in chapter 17 `C` says "(Gray)" (not checked).

21. **17:19 note, `paroikia` gloss.** The Plain English Translation says "those living abroad", the note and Gray "the Dispersion". Fine, but Gray makes this a statement about Dispersion Jews and the Plain English Translation is vaguer. Minor; consider "of the Jews living abroad".

22. **12:2 variant, p is left out.** The apparatus gives `αλω lmv (h?) αλλω p` and `καλαμην hmpv`. The entry lists h, m, v for the threshing-floor reading, and the note says "stubble also in p". Say that p has a third form of the first word.

23. **17:48 variant-free departure, "more than the most precious gold".** The translation text is fine. But `τὸ πρῶτον τίμιον` is not handled in a note (Gray's note says P probably read just "fine gold"). Skip, or add.

24. **Chapter pages, repeated `readers` text.** Chapters 11 and 18 `settings.readers` repeat the same sentence about Gray dating most psalms after 63 BC and Psalm 2 after 48 BC. The brief wanted dates, who proposes them, and the alternative authorship views argued from evidence. Chapter 11 offers nothing specific to it. Chapter 18 says "the hand that wrote the headings" with no source.

25. **10:0 note, memory-sourced claim.** "the Greek Psalms render [binginot] en hymnois" (Psalm 4:0) is true, but it is not in `sources-checked.md`. Verify it in `tools/lxx.py` and record it, or cut it.

26. **Poetry and style.** Line breaks are consistent with the Psalter rules; no em-dashes in prose. A few lines run on (9:3, 12:4, 17:20-21, which pack three lines into one verse). No change needed. "Selah" is at the line end at 17:31 and 18:10 as required. The `diapsalma` note appears once in each part. No problem.

## Checked and fine
- 10:3 entry (διαπρέψει vs διαστρέψει): witnesses c h i l m p v against Swete's text with r, matching the apparatus.
- 13:4 variant: all manuscripts and the Syriac read "the ungodly" (Gray, opened). The conjecture is Wellhausen, von Gebhardt and Kittel, adopted in Gray's translation.
- 15:9: the conjecture is von Gebhardt's, in Swete's note, and the Plain English Translation follows Swete.
- 17:39: kataxei is in i and r, and pataxei in h l m p v, as the apparatus shows.
- 17:46, 17:13, 17:4, 17:41, 18:0, 18:9, 15:5, 15:14-15 entries agree with the apparatus (i = J and r = R as a match).
- Baruch 5:5, 5:7 and 5:8 are quoted exactly. Other quotations pass the build check.
- Thirteen proposed terms (`proposals/works/terms.json`, entries marked "Added by PsS 09-18") are consistent with the text except as noted at items 3, 11 and 13. The topic contributions read fairly; no 666 or duplicate-topic issue found.
- No "Where Christians differ" card was added; none is needed.

## Counts
Critical 0. Major 7. Minor 19 (items 8-26).

## Fixes applied
(Review fixer, 2026-11-12. Sources opened this session: Swete's apparatus `texts/src/PsS.app.json`; Gray in the Source Library, scan pp. 642-643 and 656-666 (printed 628-629, 642-652); Ryle and James in the Source Library, scan pp. 231-232 and 241-244 (printed 130-131, 140-143); `tools/lxx.py` Psalms 4:1 and the *en hymnois* headings.)

1. Fixed. New variant at 17:11 with three readings from Swete's note: r (Swete's text, "will not have mercy"), i and l ("according to their deeds" plus "not"), h m p v ("according to their deeds God will have mercy", also Ryle and James's text). The `why` gives Gray's reasons (dittography from 17:10; "in H the negative has been lost") and Ryle and James's two senses and their preference (pp. 130-131). The note now points to the variant.
2. Fixed. New variants at 9:12 (Swete "in sins", Gray's correction "from sins", which the Plain English Translation follows) and 18:4 (Swete prints r's *paidia*; h i l m p v *paideia*). This is not a digital-Swete typo: the apparatus lists *paideia* against Swete's text. Partly declined on detail: Gray gives the Syriac as "the sins of", not "from sins". The 10:3 `why` now lists every departure (9:12, 17:16, 18:4).
3. Fixed (lead decision). 17:42 now reads "powerful by holy spirit", lowercase with no article. The note's false Isaiah claim is gone. The note now cites the site's Isaiah 63:10-11 and Wisdom 1:5 and Gray's "(His) holy spirit", and says that Christian readers hear the Holy Spirit. The chapter 17 page now matches.
4. Fixed. The sigla match is stated once, in the 10:0 variant's `b`, as this site's inference from agreeing readings, with the places it fails (15:9, 16:1). Plain-fact wording is removed from the 10:0 and 17:16 notes. I made no "i = J least certain" claim: the readings I checked show l and h as the failures.
5. Fixed. The count is dropped from the 16:1 note's `p`. The 16:1 variant now names Swete's witnesses (c i l m v for *kataphthora*; h p r with his text) beside Gray's, and says the conflict is unresolved.
6. Fixed. The 11:3 `p` is softened to "nearly the same pictures in the same order". The unnamed "others" line is gone. Gray (p. 628) is cited for Ryle and James accepting and Viteau rejecting the dependence, and Gray points to Ryle and James on Isaiah 40-66. Chapter 11's reading, its comparison section and its "as Gray reports" phrasings were rewritten the same way.
7. Declined (verified). Gray's note on 17:14 (printed p. 648) gives exactly "Jos. Ant. xiv. 4. 5, 5. 4, 6. 1; B.I. i. 7. 7, 8. 6". The reviewer read a paraphrased OCR. The quotation "came from the West, and thither..." was checked on p. 629.
8. Fixed. 9:7 now reads "What we do lies in the choice and power of our own souls, / to do right or to do wrong with the work of our hands." I updated the note anchor and the quotes of the verse on the chapter 9 page and in topics.json (free-will heading, pharisees).
9. Fixed. 9:8 now reads "you watch over human beings" ("all" dropped).
10. Fixed. New note at 9:16: the Greek has no subject, Gray has "they", and the Syriac has "the peoples".
11. Fixed. 10:6 now reads "righteous and loyal" (Psalm 145:17 on the site, Gray's *ḥasid*). I updated the note. The ὅσιοι entry in proposals/works/terms.json now gives "loyal" for God and keeps "faithful" for πιστός.
12. Fixed. 10:9 now reads "to bring lasting soundness of mind". The variant's anchor and `why` and the note now say the word is odd.
13. Fixed. The 11:8 note now says why "the sanctuary" is not used here (a genitive describing a robe; Gray "thy holy robe").
14. Fixed. 12:4 is back to Swete's text: "throws the houses of law-breakers into confusion". A new note gives Gray's dittograph view, and the gloss anchor is updated.
15. Partly. The garbled sentence is rewritten. The Ezekiel 14:21 claim is in Gray (p. 645: an alternative explanation, a wrong division of the Hebrew, "the four plagues of Ezek. xiv. 21"), so I kept it, worded accurately. Balaam's wish is now quoted from the site's Numbers 23:10.
16. Fixed. The 15:9 variant is split into i (*-οι ἀπὸ λιμοῦ*), r (*-ου ἀπὸ λιμοῦ*) and c h m p v (*-ου λιμοῦ*). It says the Greek is put together from separate items of Swete's note and records the l conflict with Gray. The note's "pursuing" is corrected to Gray's "-ου".
17. Fixed. New variant at 17:16: the translation follows the dative of h i l m p v and leaves Swete's/r's accusative, with Gray's reasons.
18. Fixed. 17:17 now reads "prevailed over them". The note explains that this keeps Gray's three senses open.
19. Fixed. The 17:20 variant now says six of the seven witnesses Swete cites here. Swete's notes on Psalm 17 do not cite c (checked in the apparatus; Gray's table not opened, so not cited).
20. Fixed (verified). Ryle and James pp. 140-143 opened: three views, α/β tenable, γ (Christian change) rejected. Their list for β is Ewald, Hilgenfeld, Geiger, Carrière, Vernes, Wellhausen, Robertson Smith "and other critics". The variant and the note now give the same list, and the part's sources.json pages now include 130-131.
21. Declined. "Those living abroad" is the literal sense of *paroikia*. The note gives Gray's Dispersion reading, and "Jews" is not in the Greek.
22. Fixed. The 12:2 variant and note say that p has a third form of the first word (*allō*).
23. Declined. Gray's "P probably read 'fine gold'" may refer to the Hebrew original (the OCR letter is unclear), so I added nothing I could not read clearly.
24. Partly. Chapters 11 and 18 now have their own `readers` text, from Gray p. 628 and Ryle and James p. 147, and chapter 18's "hand that wrote the headings" now cites Ryle and James p. 140 (the titles writer and the two Selahs). Chapters 9, 10 and 12-17 still share the stock sentence; the finding named only 11 and 18. I also corrected two Frankenberg claims in chapter 17 to what Gray says (pp. 648-649).
25. Fixed, and corrected. `tools/lxx.py` shows that Swete's Psalm 4:1 reads *en psalmois*, not *en hymnois*. The 10:0 note now cites the headings that do have *en hymnois* (Psalms 6, 54, 55, 67; site "With stringed instruments"), with the key `swete-lxx`.
26. No change needed.

Lead note (2026-11-12): 17:42 now reads "by a holy spirit" (lowercase kept; the article added for natural English), in plain.txt, notes and chapter page.
