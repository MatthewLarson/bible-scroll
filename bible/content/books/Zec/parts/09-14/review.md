# Hostile review: Zechariah 9-14 (parts/09-14)

## Verdict

This is a careful, mostly sound part. `--check Zec/09-14` gives 0 errors and 0 warnings. The Plain follows the Hebrew closely, and I found no invented source. The Dead Sea scroll claims (4Q76, 4Q80, 4Q82) all match the `tools/dss.py` printout, and restored words are correctly marked as restored. The main LXX readings are mostly right: 12:10 "mocked", 11:13 "furnace" twice, 14:5, 14:10 "Rama", 14:21. The house/temple usage matches Haggai and part 01-08: *bayit* is "house" and *hekal* is "temple". "Feast of Booths" matches the site. There are no em-dashes. The two spec boxes are clearly labeled. The problems are these:
- Jerome's actual verdict on Matthew 27:9 is misrepresented.
- The 14:18 Plain and its note contradict each other, and the LXX gap at 14:17 is missed.
- Two LXX descriptions at 11:7 and 11:11 are wrong.
- The Jewish side of 12:10 is thin and unattributed.
- The `arrian-anabasis` key cites the wrong book.
- Several cards name no teacher.
- There are a few Hebrew pointing slips, glosses and missing variants.

Count: 0 critical, 5 major, 14 minor.

## Major

**1. Jerome is misrepresented on Matthew 27:9.**
- Location: chapters.json ch. 11 `traditions` (Catholic view), ch. 11 `views.X`; notes.json 11:13 "threw them in the LORD's house", explanation (4); sources `jerome-matthew`.
- What is wrong: the Catholic view says Jerome read a Jeremiah text containing Matthew's words. The note lists "(4) a lost work of Jeremiah" as his explanation. Jerome does report the Nazarene Hebrew "apocryphon of Jeremiah." But he goes on to judge that the testimony is more likely taken from Zechariah, because the evangelists and apostles gave the sense, not the exact words. A web check of catena and secondary summaries confirms this. A reader would take Jerome as endorsing a lost-Jeremiah source, which he did not.
- Second problem: the global description of `jerome-matthew` reads "on Matthew 24:15", but the passage cited is his comment on Matthew 27:9.
- Fix: say that Jerome reports the apocryphon and still leans to Zechariah. Move him out of "lost work" as his own explanation. Correct or split the source key description. Check the Latin in CCSL 77.

**2. 14:18 has the Plain contradicting its note, and the LXX at 14:17 is missed.**
- Location: plain.txt 14:17-18; notes.json 14:18 "Why Egypt?"; variants.json 14:18.
- What is wrong: the Plain says Egypt gets "no rain ... either" and also the plague. The note says a threat of no rain "would not work" on Egypt, so "a plague strikes it instead." The Plain supplies "rain" and "either", neither of which is in the Hebrew. The variant lists "the other readings" in one line with no named witnesses.
- Evidence: the LXX of 14:17 has no rain at all. It reads "καὶ οὗτοι ἐκείνοις προστεθήσονται" ("and these will be added to those"). That is a real witness difference, and no entry covers it. The 4Q76 claim is correct: the printout shows the second "ולא" clearly and "עליהם" in brackets.
- Fix: render the Hebrew nearly literally ("and not on them ... there will be the plague"). Make the note and Plain agree. Add a 14:17 variant (MT "no rain" against LXX "these will be added"). Name who reads the second "not" as "no rain" and who deletes it.

**3. The LXX at 11:7 and 11:11 is mis-described.**
- Location: variants.json 11:7 and 11:11.
- What is wrong:
  - 11:11 `orig` is a truncated splice, "οἱ Χαναναῖοι τὰ πρόβατα".
  - The Greek is "γνώσονται οἱ Χαναναῖοι τὰ πρόβατα τὰ φυλασσόμενά μοι": the Canaanites will *know* the sheep that are kept for me.
  - The "why" says the Greek has "the Canaanites who tend the sheep." That is wrong.
  - At 11:7 the Greek is "εἰς τὴν Χαναανῖτιν" ("into the Canaanite land / for Canaan"). The `plain` field "the traders of the flock" is not what the LXX says in either verse. "Trader" is the Hebrew sense of *kena'ani* (as in 14:21), not the Greek's.
- Fix: quote the full Greek clause. Describe it as "Canaanites/the Canaanite land" and say the Greek translator probably read *kena'ani*. Drop "tend." Move "traders" to the explanation of the consonants.

**4. The Jewish side of 12:10 is thin, and the Plain's grammar choice is not set against named readers.**
- Location: chapters.json ch. 12 `views.J`, `deep`, `traditions` (no Jewish entry); notes.json 12:10 "They will look".
- What is wrong:
  - Only Sukkah 52a (Messiah son of Joseph, or the evil impulse) is named. Sukkah 52a is correct.
  - `views.J` says only that "Jewish interpreters ... have long answered the Christian use" and points to the note, which names none of them.
  - The `deep` box gives "(2) two persons ... 'to me concerning the one'" with no attribution.
  - The Plain, "to me, the one they pierced through", makes the pierced one the speaker. That is the Christian-friendly construal of *'et 'asher*.
  - The part promises to cover Jewish readings fully (messiah ben Joseph, and others), but the section is not fair to the strongest Jewish form of the argument.
- Fix, with each point verified before it is cited:
  - Add the Targumic Tosefta tradition in which the nations look to God and ask why they pierced the Messiah son of Ephraim. Mark it as a marginal addition, not the standard Targum Jonathan.
  - Add Rashi on the verse, and the standard Jewish translations ("because they thrust him through", or "about those slain").
  - Say that Sukkah 52a quotes the verse in support of the Messiah-ben-Joseph reading.
  - Add a Jewish card, or name Jewish teachers inside the existing one.
- Also mention the Aquila/Symmachus/Theodotion "pierced" evidence by name, or drop the claim (see minor 11).

**5. `arrian-anabasis` cites the wrong book.**
- Location: global key, defined in `books/Tob/sources.json` as "Arrian, *The Anabasis of Alexander* (AD 100s), book 3". Used in notes.json 9:1, 9:3, 9:5 and chapters.json ch. 9 settings.
- What is wrong: the notes cite Anabasis book 2 (Tyre) and "2.25-27" (Gaza and Batis). The siege of Tyre is book 2.15-24 and Gaza is 2.25-27. Book 3 opens in Egypt. A reader following the source card reaches the wrong book. The Zec part also relies on a key defined only inside another book's folder.
- Fix: change the shared description to "books 2-3" or "book 2", coordinating with the lead. Ideally add the key to the shared `sources.json` or this part's sources.

## Minor

**6. The tradition cards name no teacher in several entries.**
- Location: chapters.json ch. 11 (Evangelical), ch. 12 (Dispensationalist, Messianic Jewish), ch. 9 (Orthodox).
- What is wrong: these entries say "general pattern; no single teacher", or give a liturgical description with no source. The brief says to name teachers and confessions.
- Fix: cite a named source for each (for example Gundry or Carson for the evangelical view on Matthew 27:9, a Messianic Jewish commentator for 12:10, and an Orthodox liturgical or patristic source for the Entry).

**7. The Orthodox and Catholic 12:10 entries rest on unverified patristic claims.**
- Location: ch. 12 `traditions`.
- What is wrong: it says Cyril and Theodoret "comment on the Greek text ('because they mocked')". It also says Jerome applies the "spirit of grace and pleading" to the gift of the Holy Spirit. I could not verify these. They are plausible, but the sources are given as whole commentaries with no location.
- Fix: check Hill's translations and Jerome on Zechariah 12:10. Add the locations or soften the wording.

**8. Hebrew pointing and transliteration slips.**
- Location: notes.json 9:8 (`orig`).
  - The word is printed as מַצָּבָה (matstsavah). The text (WLC) has מִצָּבָה (*mitstsavah*). Then "some read *matstsevah*" is the actual vowel difference.
- Location: notes.json 11:13 "that splendid price".
  - The `p` line says "adder" and `b` says "*eder*". The word is *eder* (אֶדֶר).
- Fix: correct both.

**9. The Damascus Document is overread.**
- Location: chapters.json ch. 13 `views.J`.
- What is wrong: the text says those who "keep to the community's teacher" are the poor of the flock. CD-B 19:7-9 says those who heed *him*, the shepherd, are the poor of the flock. Naming "the community's teacher" is an interpretation.
- Fix: say "those who heed him (the shepherd)" and note that some link him to the Teacher.

**10. The glosses are weak in three places.**
- Location: glosses.json.
  - 11:7 "two shepherd's sticks, one to guide and one to count" is not in the text. The staffs are Favor and Union.
  - 11:9 "tear each other apart, the worst a siege can do" softens a cannibalism image, and the verse says nothing about a siege.
  - 14:10 the Arabah is described only as the valley "south from the Dead Sea". The Arabah also runs north to the Jordan valley, which is how the verse uses it.
- Fix: replace or remove.

**11. The "later Greek translators" at 12:10 are unnamed.**
- Location: variants.json 12:10 "pierced, or mocked"; notes.json 12:10 "They will look".
- What is wrong: the claim is attributed to "commentators (as reported)" and Brown. It is probably right: Aquila, Symmachus and Theodotion are usually said to have *exekentesan*. But the writer should name them or cut the claim.
- Fix: name the translators and cite Brown by page, or remove the claim.

**12. Part of the LXX 13:3 and 13:7 evidence is missing.**
- 13:3: the LXX has "συμποδιοῦσιν" ("bind the feet") and "ψευδοπροφήτας" at 13:2. The 12:10/13:3 *daqar* link does not exist in Greek. Add a note.
- 13:7: the LXX first colon reads "ἐπὶ τοὺς ποιμένας μου" (plural, "my shepherds"). The variant mentions only the second colon.
- The note says "a citizen of my people" for LXX *polites*. It is "a citizen of mine" (ἄνδρα πολίτην μου).

**13. Variants that a careful reader should have.**
- 9:1: *'ein 'adam* ("eye of humankind") against the common emendation to "the cities/eye of Aram". Only the LXX is mentioned in the note, not as a variant.
- 14:14: *be-Yerushalaim* "at" against "against". The note covers it but there is no variant entry (NRSV "against"). This matters because the Plain's "at" is the same choice as NIV and ESV.
- 14:6: the "why" gives "cold" twice ("from *qar*" or "with a changed vowel"). Clarify it.

**14. Plain choices that sit close to the NIV or ESV.**
- 9:1 "Every human eye ... looks to the LORD" takes the NIV-type reading with no hedge in the Plain, though the note presents both.
- Also close: 9:10 "His rule will run from sea to sea, and from the River to the ends of the earth" (compare the NIV on Psalm 72:8); 14:1 "divided up in your midst" (ESV "divided in your midst"); 14:9, and 14:21 "Every pot in Jerusalem and Judah".
- Most of these are the literal Hebrew and unavoidable. I flag 9:1, 9:10 and 14:1 for a paraphrase check only.

**15. The Hadrach rabbinic wordplay is uncited.**
- Location: notes.json 9:1 and chapters.json ch. 9 `views.J`.
- What is wrong: "sharp to the nations, tender to Israel" is a rabbinic reading, but no source key or text is given.
- Fix: cite the actual text (I recall Sifre Deuteronomy 1) or label it unverified.

**16. The 10:4 note renders *noges* too softly.**
- Location: plain.txt 10:4 ("every ruler").
- What is wrong: *noges* is "taskmaster / oppressor", and the Plain flattens the word.
- Fix: add a short note.

**17. The Mede item is not an explanation of the name.**
- Location: notes.json 11:13, explanation (5).
- What is wrong: Mede is listed as one of the explanations for Matthew's "Jeremiah", but his move was to give the chapters to Jeremiah. Also, no source key backs it.
- Fix: say that it solves the problem by reassigning authorship, and cite a source.

**18. The Calvin summary adds a claim.**
- Location: ch. 11 `traditions`, Reformed entry.
- What is wrong: the note says Calvin calls it a "copyist's slip". Calvin says he does not know how the name crept in and that it is a mistake. He does not clearly say "copyist."
- Fix: use his words.

**19. The 13:5 variant misnames the conjecture.**
- Location: variants.json 13:5.
- What is wrong: the "Conjecture of some modern commentators" (*'adamah*, "the ground") is not attributed.
- Fix: name a commentator or label it unattributed.

## What I checked and found sound

- **Dead Sea scrolls.**
  - 4Q82: 10:11 and 10:12 restored words are as the note says. 11:2 breaks off before the key word. 12:2 shows *saf ra'al*.
  - 4Q80: 12:8 shows *kelohim*, and 12:10 *'elay* is visible with *daqaru* restored. 12:11 shows Hadad visible and Rimmon and Megiddo restored. 12:7 preserves the end of the verse.
  - 4Q76: 14:18 shows the second "ולא".
- **LXX.** 12:10 "mocked", 11:13 "furnace" both times and "Put them in the furnace ... as it was tested for them", 14:5 "blocked", "Rama" at 14:10, 14:21 "Canaanite", 14:2 "defiled", 12:11 pomegranate, 9:1 "Sedrach".
- **Rabbinic citations.**
  - Taanit 9a (Moses, Aaron and Miriam, and Zech 11:8), Sukkah 52a (Messiah ben Joseph or the evil impulse), Yoma 39b (the Temple doors), Sanhedrin 98a (cloud against donkey), Bava Batra 14b (Jeremiah first), Megillah 31a haftarah for the first day of Booths, Sukkah 55b (seventy bulls), Yoma 9b.
  - The Targum on Hadad-rimmon (Ahab and Josiah) is correct.
- **Ketiv/Qere.** 14:2 *tishgalnah* (Ketiv) against *tishkavnah* (Qere); the other places where *shagal* is replaced are real. 11:2 and 14:6 are correctly assigned.
- **Cards and spec boxes.** The five cards are fair in structure, with no tradition ranked. The two spec boxes are labeled "(Claude's theory)" and describe a Hebrew-wording link that checks out (*habba'im 'al Yerushalaim* in 12:9 and 14:16; 'ani in 9:9, 11:7, 11:11 and not in 12-14).
- **Consistency.** House/temple usage matches Haggai and part 01-08. "Feast of Booths" matches the site. Quotations of Matthew, John, Mark, Revelation, Exodus, Amos and Hosea in the notes match the site's Plain.
- **9:9 "poor".** The rendering of *'ani* with "poor" is defended in the note, and the note is accurate about Matthew's "gentle".

## Fixes applied

1. Fixed. Jerome now reported accurately (apocryphon of Jeremiah from a Nazarene, but he judges the testimony more likely taken from Zechariah) in the Catholic card, the X view and the 11:13 note; Mede reworded as reassigning the text. The `jerome-matthew` use (which covers Matthew 24:15) is replaced by a new local key `jerome-matthew-27`; the Latin and CCSL page were not checked, so none is cited. Mede gets a new key `mede-works`.
2. Fixed. Plain 14:18 drops the unsupported "either"; the note no longer says the rain threat "would not work" but names the Hebrew ellipsis, the Nile puzzle and that the Greek omits it. New 14:17 variant (MT "no rain" against LXX "these will be added to those"). The 14:18 variant is reworded; the review's request to name modern scholars who read the extra "not" each way was declined (not verifiable here), so the readings are given unattributed. The 4Q76 claim is unchanged.
3. Fixed. 11:7 and 11:11 now quote the full Greek clauses (Canaanite land; Canaanites will know the sheep kept for me); "tend" and the "traders" Plain wording removed and "trader" moved to the Hebrew explanation.
4. Partly fixed. Added a new note on Jewish readings of 12:10 with Targum Jonathan ("they will pray before me because they were exiled"), Rashi (those the nations thrust through; Sukkah 52a, Messiah son of Joseph) and the grammar hinge, checked against the Sefaria texts; views.J and the deep box updated. Messianic Jewish and Dispensationalist cards gained named teachers (Michael L. Brown; Charles Feinberg). Not added: the Targum Tosefta and NJPS (could not be verified), and no Jewish tradition card (TRADITIONS has no key; the Jewish side is in the notes and views). The Plain "to me, the one they pierced through" is kept as the literal Hebrew order. Aquila/Symmachus/Theodotion claim removed (unverified).
5. Fixed. New key `arrian-anabasis-2` (book 2: Tyre 2.15-24, Gaza 2.25-27) replaces use of `arrian-anabasis` in this part; the Tobit definition is untouched.
6. Fixed where accurate. Evangelical card names Gundry; Orthodox 9 card names Cyril and Theodoret; Dispensationalist and Messianic Jewish 12:10 cards name Feinberg and Brown. The Dispensationalist-style general cards were otherwise left.
7. Partly fixed. Cyril/Theodoret and Jerome claims on 12:10 softened to what the Septuagint text and the commentaries safely support; locations in Hill and Jerome were not checked, so none given.
8. Fixed. 9:8 is mitstsavah (checked against the WLC text); 11:13 "adder" is now eder.
9. Fixed. CD 19 now says those who heed him (the shepherd), with a note that some link him to the Teacher.
10. Fixed. Glosses at 11:7, 11:9 and 14:10 replaced.
11. Fixed by removal. The unnamed "later Greek translators" claim is cut from the variant and the note.
12. Fixed. Added the Greek "bind his feet" and "false prophets" (13:3, 13:2) to the 13:3 note, the plural "my shepherds" first colon to the 13:7 variant, and "a citizen of mine" to the 13:7 note.
13. Fixed. New variants at 9:1 (with the Aram conjecture labeled unattributed) and 14:14 (at/against, one text); 14:6 "cold" explanation clarified.
14. Declined. These are the literal Hebrew and unavoidable; no change.
15. Fixed. Hadrach wordplay cited to Sifre Deuteronomy, Pisqa 1 (R. Judah; checked against the Sefaria text) in the note and the ch. 9 J view, new key `sifre-deuteronomy`.
16. Fixed. Added a sentence on noges (taskmaster) to the 10:4 note.
17. Fixed. See 1; Mede is described as reassigning authorship, with a source key.
18. Fixed. Calvin's card and the note now say "put down by mistake", not "copyist's slip".
19. Fixed. The 13:5 conjecture is labeled as proposed by some modern commentators, not attributed to one.

For the lead: no other book quotes a changed verse of this part (14:18 lost "either"); the new source keys are local to this part (jerome-matthew-27, arrian-anabasis-2, sifre-deuteronomy, rashi-zechariah, mede-works, brown-answering-jewish-3, feinberg-god-remembers). The Brown and Feinberg references and Mede's Works were cited from memory of the works' contents and were not opened here.
