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


## Verification pass (2026-10-29)

Counts: verified 38, corrected 11, removed 22. Log: `.scratch/Zec-09-14-verify/sources-checked.md`.

- Corrected (wrong, not just unverified): Augustine on Matthew 27:9 (a slip of memory God allowed, not "the Spirit spoke through both"); Calvin on 14:4 (figurative; he rejects the ascension allegory); Arrian gives no siege lengths (seven months and two months come from Diodorus, per Chinnock's notes); Taanit 9a (well with Miriam, cloud with Aaron, all with Moses); Gundry's view was removed because a snippet says he disagrees with the blend view the card gave him.
- Removed: Gundry, Feinberg, Michael L. Brown, Theodoret, Walvoord, Hoekema, R. Brown (card), Mede's date and Works, the Damascus Document passages, BHS/Peshitta/Targum witnesses at 11:13, the medieval-manuscript "to him" variant at 12:10, "house of Nathan = prophets" attributed to Sukkah 52a, the Gog and Magog link, the Evangelical and Messianic Jewish card entries, and the source keys tov-tchb, bhs-elliger, gundry-use-of-ot, mede-works, brown-answering-jewish-3, feinberg-god-remembers.
- Open for the lead: modern-scholar names and claims in the chapter `views` (Stade 1881, Hanson, Redditt, Baldwin, Merrill, Sweeney, Meyers) and the scholarly `s` keys in notes were not opened; Hoehner is cited from a secondary article only; Jerome on 9:9 and on chapter 14 were not opened.

## Verification check (2026-10-29)

Hostile re-check of the verification pass. Everything below was opened in this session (Sefaria API, texts/, tools/lxx.py, Gutenberg 2848, Wikipedia pages and web search results, as named). Nothing was edited.

### Item 1: hedges and unopenable works
Grep of this part's JSON for the hedge phrases, metzger, NA28, UBS, BHS found none. ("Reported" at note 14:5 is "excavators have reported damage": see Item 2, no. 4. "Memory" hits are ordinary words.) Keys to works nobody opened:

1. MAJOR. `meyers-zech-9-14` (76 notes, 14 chapter entries, 10 variants) and `petersen-zech-9-14` (13 notes, 11 chapter entries) back most notes. The works were never opened; the log's "open for the lead" says the scholarly `s` keys were not opened. Same agent-verify rule 5 problem as in part 01-08.
2. MAJOR. Keys that point to a removed or wrong source. `cd-damascus` is still in the `s` list of the 13:7-9 setting although the log says the Damascus Document claim was removed and nothing in that setting names it now. `cathcart-gordon-targum-minor` is cited at notes 12:10 and 12:11 and variant 14:21, and the variant text says the Targum is "as in the Cathcart and Gordon translation", but the Targum claims were verified in the Aramaic on Sefaria (the key `targum-jonathan-sefaria` exists in part 01-08 for that), not in Cathcart and Gordon, which no one opened.
3. MINOR. Other keys to works not opened: `sweeney-twelve` (9:1, 10:6, ch 2), `hanson-dawn` (9:13, 11:4, ch 1), `redditt-haggai-zech-mal` (11:4), `mitchell-zech` (one note), `davies-allison-matthew` (4 notes, 1 chapter, 2 variants), `brown-john`, `brown-john-2`, `brown-death-messiah` (about 10 entries), `menken-matthews-bible` (3 notes, 1 variant), `hoehner-chronological` (ch 1 card). `jerome-twelve` is on note 11:15 and the 11:15-17 setting; the log checks Jerome only for 12:3, 12:10 and 12:11.

### Item 2: claims checked (verified / wrong / unverifiable)
1. Variant 14:21: the Targum reads "merchant" (tagra). VERIFIED (Sefaria Targum_Jonathan_on_Zechariah.14.21: "...velo yehe avid tagra od bevet maqdasha").
2. Ch 4 (12:10) H: "Ptolemy I in 320 or 301 BC" attacked Jerusalem. UNVERIFIABLE, and 320 is doubtful. Josephus Antiquities 12.1 (Gutenberg 2848, chapter heading) confirms Ptolemy son of Lagus took Jerusalem by deceit but gives no date. Wikipedia "Ptolemy I Soter" lists his Syrian occupations as 318, 312 and 301 (320 is the year Perdiccas died). MINOR.
3. Same chapter: Onias III murdered in 171 BC (2 Maccabees 4:33-34). The murder at Daphne by Andronicus at Menelaus's urging is VERIFIED (texts/en/2Ma.json kjva 4:33-34). The year 171 is not stated on the opened pages (Wikipedia "Onias III" gives 175 BC for Jason's usurpation and no year for the murder). UNVERIFIABLE. MINOR.
4. Note 14:5: quake in the mid-8th century found at Hazor and other sites; Josephus Ant 9.10.4 on the Temple split. VERIFIED (Wikipedia Uzziah: Hazor, Deir 'Alla, Gezer, Lachish, "middle of the 8th century", Gezer 760 BC plus or minus 25, Yadin and Finkelstein date Hazor to 760; it quotes the Josephus passage and notes it is absent from 2 Chronicles 26). Not in the log; holds.
5. Note 9:1: Hadrach is Hatarikka, north Syria near Hamath; Tiglath-pileser III took it. PARTLY VERIFIED (Wikipedia "Hatarikka": "ancient Hazrek (under Neo-Assyrians Hatarikka)", "in the Bible as Hadrach (Zechariah 9)", occupied "c. 738 BC ... Tiglath-Pileser III", capital of the Kingdom of Hamath; the page does not state the Hadrach identification in one sentence).
6. Variants 11:7, 11:13, 12:10 (Greek): a Canaanite reading in 11:7, "furnace" in 11:13, "danced in scorn" (katorchesanto) in 12:10. VERIFIED (python tools/lxx.py, Swete). Swete 11:7 reads eis ten Chananitin ("to the Canaanite land"), which is not exactly "Canaanites for the poor"; the single-manuscript warning applies.
7. Sources: Meyers and Meyers, Zechariah 9-14, Anchor Bible 25C, Doubleday 1993; Petersen, Zechariah 9-14 and Malachi, OTL, Westminster John Knox 1995. VERIFIED (library catalog records, web search).
8. Source `menken-matthews-bible`: BETL 173, Leuven University Press, 2004. VERIFIED (catalogue results; the imprint is Peeters and Leuven University Press).
9. Ch 1 C and note 9:13: Hanson put the roots of apocalyptic in Zechariah 9-14. VERIFIED in substance (Fortress Press 1975 page and a reading: apocalyptic eschatology develops in Zech 9-14). Quote-level claims in note 11:4 were not opened.
10. Ch 1 Dispensationalist card: Hoehner dates the end of the sixty-nine weeks to the triumphal entry. VERIFIED only through secondary pages (ldolphin.org: 444 BC to 30 March AD 33, Nisan 10); the book itself was not opened, as the log says. The card wording matches.
11. Ch 4 H and note 12:11: Jeremiah lamented for Josiah (2 Chronicles 35:25). VERIFIED (texts/en/2Ch.json).
12. Ch 3 H: "the breaking of Union may reflect the split between Judah and Samaria in the 5th or 4th century." UNVERIFIABLE; no opened source dates such a split. MINOR.
13. Sources `mitchell-zech` (Mitchell, Smith, Bewer, ICC 1912) and `sweeney-twelve`: not found by the search I ran. UNVERIFIABLE. MINOR.
14. Note 12:8: Greek "like the house of God" and 4Q80 "like God". When I ran tools/dss.py here it failed with a Windows encoding error, so 4Q80 was NOT rechecked by me (the log says it was). UNVERIFIABLE by me; no sign of error.
Wrong claims found: none new in this part.

### Item 3: named modern-scholar attributions not shown as checked in the log
- chapters.json ch 1 (views C): "Stade (1881) argued from the mention of Greece for a Greek date"; "Hanson put the roots of apocalyptic here"; "Meyers and Meyers keep a Persian date"; "Conservative scholars (Baldwin, Merrill) keep Zechariah as author and read Greece as the western rival of Persia".
- chapters.json ch 3 (views C): "Hanson reads chapters 9-14 as the work of a group out of power"; "Redditt reads the shepherd passages as a critique of the community's leaders".
- chapters.json ch 6 (views): "Hanson and others see the roots of apocalyptic in the chapter's cosmic changes".
- chapters.json ch 1 card (Dispensationalist): Hoehner (secondary only).
- notes.json: 9:1 and 10:6 (`sweeney-twelve`); 9:9 and 14:21 (`brown-john`, `davies-allison-matthew`); 9:13 and 11:4 (`hanson-dawn`, `redditt-haggai-zech-mal`); 11:12, 11:13 and 13:7 (`brown-death-messiah`, `davies-allison-matthew`); 12:10 and 13:1 (`brown-john-2`, `brown-death-messiah`); plus the blanket Meyers and Petersen keys. (Mede at 11:13 was checked in the log via Owen's note in Calvin's commentary.)
- variants.json: `meyers-zech-9-14` (10 entries), `menken-matthews-bible`, `davies-allison-matthew`, `brown-john-2`, `brown-death-messiah`.
- topics.json: Hanson (one entry).
- Unnamed but checkable: ch 3 deep "scholars who read chapters 9-14 as a single story of a rejected shepherd-king"; ch 4 "Onias III is a candidate for those who favor a Greek date".

### Item 4: traditions cards
No card has fewer than two views. Cards at the minimum of two: ch 3 (Catholic, Reformed) and the 14:16-21 card (Dispensationalist, Reformed).
1. MINOR. Ch 3 (Matthew 27:9): the Evangelical entry (Gundry's blend view) was removed, leaving two Western views. The commonest explanation, a composite quotation named for the better-known prophet (note 11:13 calls it the commonest view), has no card voice now. It could be restated as a view of many commentators if the note's own text supports it, with no named teacher.
2. MINOR. Ch 4 (12:10): the Messianic Jewish entry (Israel recognizing Yeshua; the LORD himself the pierced one) was removed entirely. It is a clearly distinct view. The Jewish readings that remain sit in the chapter `J` view, not on the card. Restore only with a source opened.
3. MINOR. The 14:4 and 14:16-21 Dispensationalist views and the ch 4 Dispensationalist view now name no teacher or document, so they carry no source key. Not a rule 2 breach (no checkable detail), but the cards are thin.

### Counts
Item 1: 3 findings (2 major, 1 minor). Item 2: 14 claims: 8 verified (some in part), 0 wrong, 6 unverifiable or unrun (Ptolemy date, Onias year, Samaria split, Mitchell/Sweeney, 4Q80 recheck, Hoehner book). Item 3: 8 groups listed. Item 4: 3 findings (minor). Findings by severity: critical 0, major 2, minor 7.

## Verification fixes (2026-10-29)

Counts: 160 unopened scholarly or commentary source keys removed from entries (Meyers 100, Petersen 24, Davies and Allison 7, Brown 11 across three keys, Menken 4, Sweeney 3, Mitchell, Redditt, Baldwin, Hoehner, `cd-damascus`, Hanson, Jerome on 11:15); 1 key swapped (Cathcart and Gordon to a Sefaria-based Targum key); 6 dates corrected or removed; 5 modern-scholar attributions handled (Stade softened, Meyers and Meyers corrected to the Greco-Persian wars, Hanson kept, Redditt, Baldwin and Merrill names dropped, Hoehner kept without key). Log: `.scratch/Zec-09-14-verify/sources-checked.md`.

Findings handled: Item 1 (keys to works not opened: removed from entries; four definitions local to this part dropped from sources.json), Item 2 (Ptolemy and Onias dates, Samaria split, Gaza "two" months, 4Q80 recheck with `PYTHONUTF8=1`, LXX wording at 11:7), Item 3 (named scholars), Item 4 (cards left as they are: ch 3 and the 14:16-21 card keep two views that still conflict; nothing restored without an opened source).
