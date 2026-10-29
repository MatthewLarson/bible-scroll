# Hostile review: Zechariah 1-8 (parts/01-08) and book.json

## Verdict

The part is careful and mostly sound. The Plain follows the Leningrad text closely, avoids NIV/ESV phrasing (4:6, 3:2, 4:10 and 2:8 are all independent), uses "the Accuser" as terms.json and the Job and 1 Chronicles Plain require, and keeps Joshua, Zerubbabel, "the LORD of Armies" and "the angel who spoke with me" consistent with Haggai. `--check Zec/01-08` is 0 errors and 0 warnings. The dates (15 Feb 519, 7 Dec 518, 12 Mar 515) are right, and the talmudic, Behistun, Herodotus 8.98 and Xenophon citations I could check hold up. The weak points are these. (1) The Hebrew-chapter numbering is stated wrongly twice, in book.json and in the chapter 2 page. (2) 4Q80 is said to differ from the MT "only in spelling", but 8:6 shows a real difference. (3) book.json says the Gospels quote chapters 9-14 "as Zechariah's", and they do not. (4) Two traditions cards are unsourced and one source key does not match the belief it is cited for. (5) The Satan topic labels the main Christian reading "uncommon". (6) Several variants and Septuagint differences are missing. (7) A few notes are internally inconsistent or overstated. I found no invented sources, manuscripts or fragments.

I could not check the patristic and Reformation passages against the texts: Jerome, Calvin and Cyril on 1:8, 3:2 and 8:23, and the Targum wording. They are cited without page or section. They are plausible, but the fixer should verify them or soften them (finding 12).

## Findings

### Major

1. **Major. book.json "Numbering, text and witnesses"; chapters.json ch. 2 `views.C`.** Both give the wrong Hebrew chapter boundary.
   - book.json says: "English 1:18-21 is Hebrew 2:1-4, so the Hebrew chapter 2 begins at English 2:1."
   - chapter 2 says: "The Hebrew chapter begins at English 2:5."
   - Evidence: `texts/orig/Zec.json` has keys 1:18-1:20 followed by chapter 2 in the Hebrew system. English 1:18 is Hebrew 2:1, so Hebrew chapter 2 begins at English 1:18. English 2:1 is Hebrew 2:5. The `facts` entry ("the Hebrew chapter 2 runs 2:5-17 (English 2:1-13)") is also garbled. Hebrew chapter 2 runs 2:1-17, and only 2:5-17 equals English 2:1-13. Note 24 and the chapter 2 summary are correct.
   - Fix: "Hebrew chapter 2 begins at English 1:18 and runs to English 2:13 (Hebrew 2:1-17); Hebrew chapter 1 therefore has 17 verses." Correct all three places.

2. **Major. book.json "Numbering, text and witnesses"; chapters.json ch. 8 `views.C`; no variants entry for 8:6.** The claim that 4Q80 "agrees with the Masoretic Text apart from spelling" is wrong.
   - `python tools/dss.py Zec 8` shows 4Q80 at 8:6 reading ‹הגם› against the MT גם, "will it ALSO be too wonderful in my eyes?", with the interrogative ה. The tool marks it only as a candidate.
   - The Septuagint also has an interrogative at 8:6 (μὴ καὶ ἐνώπιον ἐμοῦ).
   - The Plain already translates it as a question, so the reading is relevant and unrecorded.
   - Check 6:5 as well. 4Q80 appears to lack the words מהתיצב על ("after standing before") between יוצאות and אדון כל הארץ. That is unmarked and may be a lacuna.
   - Fix: add an 8:6 variant (MT; 4Q80 and LXX with the question marker; the Plain follows the sense of both). Say the 4Q80 8:6 reading exists but may be spelling-level, and ask the fixer to verify against DJD XV. Remove "only spelling". For 6:5, say "not cited, lacuna or omission" or check DJD.

3. **Major. book.json `authorship`, "Traditional view".** The text says "the Gospels quote chapters 9-14 as Zechariah's". No Gospel does.
   - Matthew 21:4-5 says "through the prophet"; Matthew 26:31 and Mark 14:27 say "it is written"; John 12:15 says "it is written"; John 19:37 says "another scripture".
   - Matthew 27:9 names Jeremiah.
   - Matthew 23:35 names Zechariah son of Berechiah, but for a murder, not for chapters 9-14.
   - Fix: "The Gospels quote chapters 9-14 as Scripture without naming Zechariah (Matthew names Jeremiah at 27:9)."

4. **Major. chapters.json traditions card 8:23 (Dispensationalist and Messianic Jewish) and card 6:13 (Dispensationalist).** All three views are unsourced.
   - The cards admit "not drawn from a single named teacher" and "No single confession is cited".
   - The brief and `agent-reviewer.md` require each tradition to be sourced by name.
   - These are easy to source. For Dispensationalist: the Scofield Reference Bible note on Zech 6:12-13 or 8:23, Chafer's *Systematic Theology*, or the Dallas Theological Seminary doctrinal statement. For Messianic Jewish: the UMJC or MJAA doctrinal statements.
   - Fix: add named sources, or drop the cards and describe the views as a labelled generalization in a note.

5. **Major. chapters.json ch. 3 traditions card 1 (Satan), source key `adventist-beliefs`.**
   - `sources.json` defines `adventist-beliefs` as "Fundamental Beliefs, belief 27, The Millennium and the End of Sin". The card cites "Fundamental Belief 8" (Great Controversy). The key does not support the citation.
   - Fix: add a new key for belief 8, or reword the source line.
   - The card also shows four traditions (Catholic, Orthodox, Reformed, Adventist) agreeing that the Accuser is the devil. That is not a place where "the churches answer differently". The real contrast is the Jewish and critical reading, which the notes and topic carry.
   - Fix: reframe the question as a real difference, or drop the card.
   - `philaret-catechism` is defined as questions 31-35. Verify that those questions are the ones on fallen angels.

6. **Major. topics.json `satan`, `common` and `uncommon`.**
   - `common` is "the Accuser is not yet the devil" and `uncommon` is "already the devil". Calling the traditional Christian reading, and Calvin's, "uncommon" is not neutral labelling. It conflates scholarly consensus with church consensus.
   - Fix: "Most critical commentators: an officer of the court, not yet the devil. Christian tradition from the Fathers on: the devil. Jewish tradition: a prosecuting angel." Do not call any of these uncommon.
   - The same applies to `branch`. Its `common` line ("first Zerubbabel, later Messiah") leaves out the Targum and the Christian reading as the primary traditions.

### Minor

7. **Minor. Variants missing.** All twelve variants you flagged are present, with correct Hebrew and Greek text. A careful reader should also see these:
   - 1:8: the Septuagint has four horse colors ("red, sorrel, dappled, white"). The MT has three.
   - 3:8: the Septuagint translates Branch as Ἀνατολήν. It is in note 49 but not in the variants, and also applies at 6:12.
   - 3:9: the Septuagint has "I dig a pit" (ὀρύσσω βόθρον) for "carve its inscription".
   - 6:13: "Majesty will rest on him" renders יִשָּׂא הוֹד ("he will bear/wear majesty"). The Plain uses the passive. The Septuagint has "he will take excellence" (ἀρετήν).
   - 6:14: the Septuagint has "for a psalm in the house of the LORD" (εἰς ψαλμὸν) for "a memorial" (zikkaron).
   - 7:2: the Hebrew has "his men" (ואנשיו). The Plain has "their men".
   - 1:21: the Septuagint has the horns "broken" (κατέαξαν).

8. **Minor. Note 5, note 19 and note 18 (1:3, 1:13, 1:12): inconsistent logic.**
   - Note 19 says "Because the comfort is promised before the people repent (1:3-4)".
   - Note 5 says the "first messages of comfort show that the LORD has already turned".
   - In the text the call to return (1:3-6) comes before the comfort (1:13-17). The note's claim is historical, but it is stated as a textual order.
   - Note 19 also says "8:14-15's turn" for the root, which is garbled.
   - Fix: say that the call and the comfort belong to the same turning, and state the order as the text gives it.

9. **Minor. Note 71 (5:6, the ephah).** "A tenth of a homer (Exodus 16:36; Ezekiel 45:11)". Exodus 16:36 says the omer is a tenth of an ephah. Only Ezekiel 45:11 supports ephah = tenth of a homer. Cite Ezekiel 45:11 and 45:13-14.

10. **Minor. Settings and summaries state debated points as fact.**
    - Chapter 3 summary: Joshua "will be given a place among the angels". Note 47 offers angels or priests as alternatives. Say "a place among those who stand here".
    - Chapter 5 setting 5:1-4: "The size of the scroll, the size of the Holy Place, marks the Temple's standard going out." Note 67 calls the match possibly accidental. Say "matches... may suggest".
    - Chapter 3 `views.H`: the scene is "before the priesthood has begun to serve there". Ezra 3:2-6 has the altar restored and offerings made from 538, so priests were serving. Say "before the Temple building was complete".
    - Chapter 6 summary: quotes 6:12 as "Here is a man whose name is Branch". The Plain says "Look, there is a man".
    - Chapter 1 setting 1:1-6: the phrase "hearing the descendants' version" makes no sense. Fix it.

11. **Minor. Chapter 7 traditions card on fasting omits Orthodox and Baptist.**
    - The Orthodox have the most developed fasting discipline (Wednesday and Friday, Great Lent, the Apostles' Fast, the Dormition Fast), and they are the clearest contrast to Lutheran and Reformed practice.
    - The question "Should Christians fast?" is where the churches differ most.
    - Fix: add an Orthodox view (with a named source) and, if possible, a Baptist view.
    - Chapter 7 `views.X` ("Fathers such as Chrysostom taught...") has no reference. Add one or drop the name.

12. **Minor. Patristic and Reformation attributions without a locator.** Examples: "Jerome took the rider as Christ, red like blood" (note 12), "Calvin finds Christ the head of the angels" (notes 12, 41, 44), "Some Christian writers read the one Jew as Christ or the apostles" (note 117), "Jerome's `fabros`" (note 26), Cyril in book.json. None cite a section.
    - They are plausible, and I could not confirm them from memory. A hostile fixer should verify each against `jerome-twelve` (CCSL 76A) and `calvin-twelve` (Owen), or add the locator.
    - Drop the unattributed "Some Christian writers" in note 117 unless a named source is added.

13. **Minor. Luther date.** Card 3:4 says "Luther lectured on Zechariah in 1527". The lectures were given in 1525-26 and published in 1527. Say "published 1527".

14. **Minor. Jewish-lens claims without a named source.** Chapter 5 `views.J` (the woman Wickedness as the people's wickedness sent to Babylon) and chapter 7 `views.J` do not name a Jewish commentator. Add Rashi or Radak (both are in `sources`), or label it as a general pattern.

15. **Minor. Note 49 (the Branch).** It says "Isaiah 4:2 uses 'the LORD's branch' for the fruit of the land" as fact. Tsemach YHWH there is read as the Messiah in the Targum and in much Christian reading, and as the land's produce by others. Present both. The rest of the note is balanced: it treats Zerubbabel, the Targum "my servant the Messiah", Christ and "both" fairly.

16. **Minor. Note 32 and note 88 (6:15).** The comparison "shamoa tishme'un opens Deuteronomy 28:1" is loose. Deut 28:1 has the singular tishma, and the plural form is Exodus 19:5. Say "like Exodus 19:5 and Deuteronomy 28:1".

17. **Minor. book.json `lead`.** "A crown is placed on Joshua's head". The Plain and the notes stress the plural "crowns". Also "two years later" is about 22 months. Say "nearly two years later".

18. **Minor. book.json `facts` "Place in the Bible".** Correct. Zechariah is eleventh in the MT and LXX lists, and Haggai is tenth. Nothing to fix. Add a note that the Septuagint order puts Hosea, Amos, Micah first.

## Items checked and found sound

- **Terms.** "Accuser" for the article form and "Satan" for 1 Chronicles 21:1 match terms.json and the Job 1-2 and 1 Chronicles Plain. The brief's "the Satan" was correctly overridden. "Joshua" matches the Haggai Plain.
- **Dates.** 15 February 519 (24 Shebat), not the brief's "24 Feb", is the standard conversion. 7 December 518 and 18 December 520 are correct. The 22-month gap is correct.
- **Dead Sea scrolls.** The 4Q80 uses at 2:8 ("his eye"), 3:5 ("and I said", consonants ambiguous, as the entry itself says), 3:9 ("seven eyes") and 4:2 are all legible in the printout. 1:8 and 1:10 are correctly not cited. Mur88 is correctly described as 1:1-4 only.
- **Ketiv and Qere.** The 4:2 variant matches `texts/auto`. The 1:16 spelling note matches the same file.
- **Talmud and other citations.** Sukkah 52b (four craftsmen), Sanhedrin 93a (Joshua's sons), Rosh Hashanah 18b, Taanit 4:6, Yoma 9b, Bava Batra 15a, Behistun's "nineteen battles", Herodotus 8.98, Xenophon *Cyropaedia* 8.2.10-12, Maimonides *Kings* 11:1 and Justin *Dialogue* 115-116 are all correct.
- **Scholars.** Mede, Hitzig, Stade, Mitchell, Rudolph, Redditt, Sweeney, Boda and Rose are attributed correctly as far as I can tell. The bibliographic details in sources.json are right.
- **Fairness of the crowns and Branch.** The treatment is even-handed: Zerubbabel, a future king, both, the editing hypothesis, the Targum, Christian and Dispensationalist readings. The only gap is the unsourced Dispensationalist card.
- **Style.** No em-dashes anywhere. The Plain is at about the right reading level.

## Fixes applied

1. Fixed. book.json `facts` "Verse numbers", the "Numbering, text and witnesses" section, note 1:18 (title line and body) and the chapter 2 critical view now say the Hebrew chapter 2 begins at English 1:18 and runs to English 2:13 (Hebrew 2:1-17; English 2:1-13 = Hebrew 2:5-17), and Hebrew chapter 1 has 17 verses. Checked against the `heb` map in texts/orig/Zec.json (1:18 -> 2:1, 2:1 -> 2:5, 2:13 -> 2:17).
2. Fixed, with a limit. `python tools/dss.py Zec 8:6` shows 4Q80 `הגם` (question he) against MT `גם`; added an 8:6 variant (MT, 4Q80, LXX `μὴ καὶ ... ἀδυνατήσει;`). The Plain already asks the question and is unchanged. Removed "only spelling" from book.json. At 6:5 the printout has 4Q80 `יוצאות [gap] אדון`, with the words `מהתיצב על` absent and the neighbours restored; added a 6:5 variant marked as a candidate (omission or damage not decided; DJD XV not available to me) and also recording the Greek "to stand before" for MT "after standing before". Both entries and book.json say the scroll was read from the transcription only.
3. Fixed. book.json `authorship` "Traditional view" now says the Gospels quote chapters 9-14 as Scripture without naming Zechariah (Matthew 21:4-5 "through the prophet"; Matthew 26:31, Mark 14:27, John 12:15 "it is written"; John 19:37 "another Scripture"; Matthew 27:9-10 names Jeremiah), and notes that Matthew 23:35 names a Zechariah for a murder, not for these chapters.
4. Fixed by removal. The Dispensationalist entry (6:13 card) and the Dispensationalist and Messianic Jewish entries (8:23 card) are removed, since no named source could be checked. The two cards keep Catholic and Reformed. The views survive only as labelled general patterns in notes 8:20-23 (Nations joining the LORD) and 8:23 (Come, let us hurry), saying that no teacher or confession is cited.
5. Fixed. The Satan card is dropped: Catholic, Orthodox, Reformed and Adventist teaching all take the Accuser of Revelation 12:10 to be the devil, so the churches do not answer differently. Its content is now a note sentence at 3:2 (Catechism 391-395 and Calvin as reported; real contrast = Jewish and critical readings). This also removes the `adventist-beliefs` (belief 27) mismatch and the unverified `philaret-catechism` questions 31-35 from the book.
6. Fixed. The `satan` contribution now has three labelled lines (most critical commentators: officer of the court, not yet the devil; Christian tradition from the Fathers: the devil; Jewish tradition: a prosecuting angel) and no "uncommon". The `branch` contribution's `common` line now names Zerubbabel, the Targum's "my servant the Messiah", the Christian reading (Anatole and Luke 1:78) and "both".
7. Fixed. Added variants for 1:8 (four LXX horse colors), 1:21 (LXX horns "broken", "Judah and Israel"), 3:8 and 6:12 (Anatole for Branch; one entry at 3:8), 3:9 (LXX "I dig a pit", "probe the injustice"), 6:13 (`יִשָּׂא הוֹד`, LXX "take excellence") and 6:14 (LXX "for a psalm"). The 7:2 pronoun is accepted: the Hebrew has "his men" (`ואנשיו`), so the Plain now reads "with his men" (anchors in the variant updated; note 7:2 says so). Plain 6:13 also changed (see below). Variants now 22 (were 14).
8. Fixed. The notes at 1:3 and 1:13 now state the order the text gives (call 1:3-6, comfort 1:13-17) as one turning and no longer claim the comfort comes before repentance; the garbled "8:14-15's turn" is replaced by 8:14 against 8:15.
9. Fixed. The ephah note cites Ezekiel 45:11 and 45:13-14 for ephah = a tenth of a homer, and says Exodus 16:36 gives the omer as a tenth of an ephah.
10. Fixed. Chapter 3 summary: "a place among 'these who stand here' (heavenly attendants, or priests)". Chapter 5 setting 5:1-4: "may suggest ... could be an accident". Chapter 3 `H`: "before the Temple building is finished (the altar had been in use since 538: Ezra 3:2-6)". Chapter 6 summary now quotes the Plain: "Look, there is a man". Chapter 1 setting: the nonsense phrase replaced by "whose ancestors had been warned by the earlier prophets and then judged".
11. Partly fixed. Added an Orthodox entry to the fasting card (Wednesdays and Fridays; Great Lent, the Apostles' Fast, the Dormition Fast, the Nativity Fast; with prayer and almsgiving), sourced to Ware, *The Orthodox Church* (`ware-orthodox`, already in sources.json), without a page. Not added: a Baptist view, since I had no named source to check. The Chrysostom claim in chapter 7 `X` is now "often reported ... no passage was checked here".
12. Partly fixed. Jerome on the rider (note 1:8), Calvin on the angel of the LORD (note 1:8, chapter 1 `X`) and the `fabros` note are marked "as reported, not rechecked" (the Vulgate does read `fabros`; the note now says "the Latin Vulgate"); book.json "Reception" has a sentence saying the Jerome, Cyril, Calvin and Luther readings were not rechecked. The unattributed "Some Christian writers" sentence in note 8:23 is deleted. I could not check Cyril, Jerome or Calvin passages here, so no locators were added.
13. Fixed. Card 3:4 now says Luther's lectures on Zechariah were "published in 1527" (the source key keeps its 1527 date as a publication date).
14. Partly fixed. Chapter 5 `J` is labelled "a general pattern in Jewish reading; no one commentator is cited here". Chapter 7 `J` is labelled a general description, with the Talmud passage (Rosh Hashanah 18b) as its source. No Rashi or Radak page was added, because I could not verify what they say at these verses.
15. Fixed. Note 3:8 now gives Isaiah 4:2 both ways (produce of the land; the Messiah in the Targum and much Christian reading).
16. Fixed. The 6:15 note now says the emphatic plural form is that of Exodus 19:5, and that Deuteronomy 28:1 opens with the same words in the singular.
17. Fixed. book.json `lead`: "Crowns are made and set on Joshua's head, and nearly two years later". Also, from finding 7's 6:13 variant: the Plain now reads "He will bear majesty" (Hebrew `יִשָּׂא`, "he will bear"; was the passive "Majesty will rest on him"), the gloss anchor was updated, and 6:13 drift check: the new wording is the literal verb and shares nothing with the NIV or ESV.
18. Declined, nothing to change. The Greek order is already stated in the "Place in the Bible" fact (Hosea, Amos, Micah first), and Zechariah's place (eleventh) is correct.

Plain verses changed: 6:13 and 7:2. Quotes of these in other books: none found (grep of content/books and proposals for the old wording; Mal and other books only cite the references). Lead decisions applied: the Hebrew-chapter fix, 4Q80 at 8:6 and 6:5, the Gospels claim, the Dispensationalist and Messianic Jewish cards, the Satan card, the `satan` and `branch` contributions, the LXX variants, the Orthodox fasting view and the "as reported" marks.
