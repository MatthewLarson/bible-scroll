# Hostile review: Nehemiah 1–7 (part 01-07), book.json, topic cores, terms and sources

Reviewer's scope: `parts/01-07/` (plain, notes, variants, glosses, chapters, topics, sources), `book.json`, topic cores `nehemiah` and `sanballat`, the new `terms.json` entries, the 15 new shared keys in `content/sources.json` and the 8 keys in the part's `sources.json`. Part 08-13 was not reviewed. `node tools/build.js --check Neh/01-07`: 197 verses, 123 notes, 24 variants, 59 glosses, 7 chapter pages, 22 topic contributions, **0 errors, 0 warnings**.

Method: every verse of the Plain English Translation was compared with `node tools/literal.js Neh <ch>` and the WLC text. All of 7:6–73 was set beside the site's Ezra 2 Plain English Translation, notes, variants and table, name by name and number by number. The family numbers were re-added (31,089, which is correct). Quotations of other site books (Deuteronomy, Leviticus, Exodus, 1 Kings, Ezra, Genesis, Joshua, Numbers) were checked against their Plain English Translation and all match. The key Greek readings were checked myself in the Rahlfs text on blueletterbible.org (per-verse pages), and against Brenton's Vaticanus-based translation on biblehub.com where Rahlfs and B seemed to part. sacred-texts.com could not be reached in a usable form.

## Verdict

This is a strong, careful part. The translation is faithful and readable. The parallel with Ezra 2 is handled very well: every name in 7:6–73 is in Nehemiah's own Hebrew form (Azariah, Raamiah, Nahamani, Mispereth, Nehum, Binnui, Hariph, Gibeon, Beth-azmaveth, Hodevah, Sia, Bazlith, Nephishesim, Sophereth, Perida, Amon, Addon), and every number matches the Leningrad Codex. "The priest" (7:65), "Camels" without "their" (7:69) and "to Jerusalem and to Judah" (7:6) are all kept distinct from Ezra. Nearly every checkable fact is right. That includes the Elephantine dates (419 and 407 BC), the Maskhuta bowl, Sanhedrin 93b, Pesachim 64b, Josephus *Ant.* 11.179, the 52 days and Elul 25 (about October 2), Herodotus's 350 talents, and the Broad Wall. The Greek readings I could check were all reported correctly: 1:11, 2:6, 2:8, 2:13, 3:20, 4:2, 4:10, 4:12, 4:23, 5:2, 5:11, 5:16, 6:9, 6:14, 6:16, 7:3, 7:67 and 7:70 (robes). The spec boxes are labeled. Still, a hostile reading finds seven major problems:

- **7:67–68.** This is the one place the part leaves the Leningrad Codex, and the case for it is argued one way only. It contradicts the site's own Ezra 2:65 variant, and it overstates the Greek, which is split: Codex Vaticanus lacks the verse.
- **The date.** The Kislev date is wrong in the 1:1 note: on the explanations given, Kislev falls in 446 BC, not 445. The "445 or 444" question is pointed to but never explained.
- **Missing variants.** Four required variants are missing: 3:18 Bavvai or Binnui, where the NIV prints Binnui; and three Greek readings in 7:69–72, including the Greek's "to Nehemiah" in 7:70.
- **"Remember me" prayers.** The new terms entry gives different English to identical Hebrew (5:19 and 13:31). The notes and the prayer topic claim four "remember me for good" prayers, but only two say "for good."
- **NIV/ESV drift.** About ten verses show small drift, mostly toward the NIV (7:3, 4:12, 4:23, 5:7 and others).
- **1 Esdras.** book.json misstates where 1 Esdras puts the law-reading (it follows Ezra 10, not Ezra 8).
- **Seventy weeks.** The Jewish view is given in a form that a reader using ordinary dates will find arithmetically false.

The minor items are mostly small factual slips, consistency with Ezra, dead source keys and unsourced generalizations about rabbinic readers.

**Counts: 0 critical, 7 major, 19 minor.**

## Findings

### Major

**1. Major: variants.json 7:67 and 7:68, with Ezra 2:65. The haplography is argued one way only, contradicts the Ezra page, and overstates the Greek.**
- *What is wrong.* There are two ways to explain the gap at 7:68, and the part gives only one.
  - (a) The eye skipped from the singers' "245" to the mules' "245". Then Nehemiah's singers were really 245.
  - (b) The eye skipped from the singers' "200" (מָאתַיִם) to the mules' "200" (מָאתַיִם וְאַרְבָּעִים וַחֲמִשָּׁה). Then the singers were 200, as in Ezra 2:65, and Leningrad's "and forty-five" is the tail of the mules' line.

  The 7:68 "why" gives only (a). But the site's own Ezra 2:65 variant takes (b): "Many think Nehemiah's 245 singers came from that line by a copyist's eye slip." The 7:68 `b` field even describes STEP's split of the singers' number into "200" plus the restored verse, which *is* reconstruction (b), without naming it as a rival theory. The Plain English Translation now prints 245 singers *and* restores 7:68 with 245 mules. That combination is coherent only under (a). Under (b) it counts "and forty-five" twice. The 7:67 entry hedges ("in one list or the other"), so the three entries do not say the same thing, and Ezra and Nehemiah do not agree.
- *The Greek.* The 7:68 witness list says "2 Esdras ... as printed in Rahlfs (17:68)". Rahlfs, as shown on blueletterbible.org, does print "ἵπποι ἑπτακόσιοι τριάκοντα ἕξ ἡμίονοι διακόσιοι τεσσαράκοντα πέντε". But Brenton's translation of the Vaticanus-type text has 7:68 "(omitted)", and its 7:69 reads only "Two thousand seven hundred asses": no camels, and 2,700 rather than 6,720. So the Greek is divided, and the strongest Greek manuscript sides with Leningrad. "The margin of BHS" should be "the apparatus of BHS".
- *Does printing fit the site's policy?* Yes, defensibly. The site keys verses to KJV numbering, so a 7:68 line must exist. The site has already left Leningrad with a variant at Ezra 2:25 and 2 Chronicles 1:13. The verse is in Ezra 2:66, some Hebrew manuscripts and part of the Greek tradition. But the "why" must state both mechanisms and say which one the Plain English Translation's 245 assumes.
- *Fix.*
  - Rewrite the 7:68 "why" to give (a) and (b), and say that the Plain English Translation keeps Leningrad's 245 singers on view (a) or as the transmitted text.
  - Add Codex Vaticanus (Brenton) to the omission reading, and make the follow reading "Rahlfs' text".
  - Add a 7:69 variant: Vaticanus-type Greek with no camels and 2,700 donkeys.
  - Bring the Ezra 2:65 variant into line ("the slip could have gone either way" is already there; add the 245-to-245 option). Tell the Ezra owner.

**2. Major: notes.json 1:1 ("Which twentieth year?"), chapter 1 deep, settings 1:2–3, chapter 2 deep and book.json "Dates". The Kislev date is wrong and the 444 option is never explained.**
- *What is wrong.* The 1:1 note's preview and body say the twentieth year is "445 BC" and treat Kislev as 445. Every explanation the note offers (counting from the accession anniversary in late 465, or a year beginning in Tishri) puts Kislev of the twentieth year in **late 446 BC** and Nisan in spring 445. Kislev 445 works only if Nisan is 444. That is Hoehner's scheme, which the chapter 2 page cites ("Nisan 444 BC"). The chapter 2 page and book.json say "whether that is 445 or 444 BC depends on the calendar question discussed on the chapter 1 page." But the chapter 1 page never mentions 444. It says only "Kislev ... 446 or 445". Settings 1:2–3 copy "446 or 445" without explanation, while settings 2:2–8 state "Nisan 445 BC" as settled.
- *Fix.* In the 1:1 note: "Kislev 446 BC, Nisan 445 BC on the usual reckoning." Add one sentence to the chapter 1 deep section: some (Hoehner) put the audience in Nisan 444 by counting regnal years from Tishri, with Kislev 445. Then use "446 or 445" and "445 (or 444)" consistently in the settings.

**3. Major: variants.json. Required variants are missing at 3:18, 7:69, 7:70 and 7:72.**
- **3:18 Bavvai.** The Hebrew is בַּוַּי. The Greek (Rahlfs) reads "Βενι υἱὸς Ηναδαδ". 3:24 has "Binnui son of Henadad", and the NIV prints "Binnui" in its text with a footnote. STYLE requires a variant wherever a major English translation footnotes or reads differently. Keep Bavvai, by the name policy and MT, and give the Greek, the Syriac and two Hebrew manuscripts (as the NIV footnote reports) and 3:24 as the other reading.
- **7:69.** See finding 1 (Vaticanus-type: 2,700 donkeys, no camels).
- **7:70.** The Greek has no governor giving gifts: "καὶ ἀπὸ μέρους ἀρχηγῶν τῶν πατριῶν ἔδωκαν εἰς τὸ ἔργον τῷ Νεεμια εἰς θησαυρὸν". So it is the heads of families who give "to Nehemiah". Brenton has the same. This is directly relevant to the 7:65 note, which says only that "a reader may hear" the Tirshatha as Nehemiah. The Greek translator did. Add a variant at "The governor gave to the treasury" and mention it in the 7:65 note. The existing 7:70 variant covers only the robes.
- **7:72.** The Greek has "ἀργυρίου μνᾶς δισχιλίας διακοσίας" (2,200 minas), against the MT's 2,000. This is a number variant in a list the site tables. Add it (it also affects the 4,200 total in the table, the 7:70 note and the Ezra 2:69 note).

**4. Major: terms.json "zochrah li elohay letovah", notes 5:19, topics.json `prayer`, book.json lens J and the 1:8 Plain English Translation. Identical Hebrew gets different English, and the "for good" prayers are miscounted.**
- *Different English for the same Hebrew.* The new terms entry prescribes "5:19 'Remember me for good, my God'; 13:31 'My God, remember me for good'". But 13:31 is word for word the same Hebrew as 5:19 (זָכְרָה־לִּי אֱלֹהַי לְטוֹבָה). This breaks the site's own rule that identical Hebrew gets identical English, and it binds part 08-13 to the break. book.json already quotes three forms: the lead has "My God, remember me for good"; lens J has "'Remember me, my God, for good'", which matches no Plain English Translation; and the sections have "Remember me for good".
- *The miscount.* The 5:19 note says the memoir has "four prayers that God remember Nehemiah 'for good' (5:19; 13:14; 13:22; 13:31)". The prayer topic says the same. Only 5:19 and 13:31 have *letovah*. 13:14 is "concerning this" and 13:22 "this also ... and spare me".
- *The 1:8 rendering.* The entry says "'remember' (zakhar) is always 'remember' in these prayers". Yet 1:8 renders זְכָר־נָא as "Please call to mind". That loses the link the memoir builds: God is asked to remember his word (1:8), then Nehemiah (5:19), then his enemies (6:14).
- *Fix.*
  - Make the terms entry a single rendering, "Remember me for good, my God", for both 5:19 and 13:31.
  - Correct the lead and lens J to the Plain English Translation wording.
  - In note 5:19 and the prayer topic, say "four 'remember me' prayers, two of them 'for good'".
  - Change 1:8 to "Please remember the word...".

**5. Major: plain.txt. Small NIV/ESV drift in about ten verses.** Each case is small, but STYLE says close matches must be redone. At most a few words are quoted.
- 7:3 "some at their posts and some ..." matches the NIV's six-word sequence. The Hebrew is "each at his post and each in front of his house".
- 4:12 "ten times over" matches the NIV. The Hebrew is just "ten times", and "From every place you turn" is close to the NIV's "Wherever you turn".
- 4:23 "Each man had his weapon, even ..." follows the NIV's "each had his weapon, even when ...". The "even" is the NIV's supply. It is flagged in the variant, but the wording is still the NIV's.
- 5:7 "to deal with them" matches the NIV idiom. The Hebrew is "I set a great assembly against them".
- 5:15 "I did not act like that" matches the NIV exactly. The Hebrew is "I did not do so".
- 5:2 "We must get grain" matches the NIV. The Hebrew is "let us get grain".
- 4:3 "One fox climbing up on it" (NIV "a fox climbing up on it") together with "their stone wall" (ESV) mixes the two versions.
- 4:11 "Before they know ..." follows the NIV's "Before they know it". The Hebrew is "They will not know or see until".
- 6:6 "These reports say" follows the NIV's "according to these reports". The Hebrew is "according to these words".
- 6:11 "I am not going in": the "in" is ESV-like. The Hebrew is just "I will not go".

Fix: redraft each from `literal.js`, for example 7:3 "each man at his post, each man in front of his own house"; 4:12 "ten times"; 5:15 "But I did not do so".

**6. Major: book.json `authorship` ("Critical scholarship"). The claim about 1 Esdras is wrong.**
- *What is wrong.* "the Ezra story of chapters 8–10, which may once have followed Ezra 8 (1 Esdras puts it there)." 1 Esdras puts the law-reading (1 Esdras 9:37–55 = Nehemiah 7:73–8:12) **after** the marriage crisis of Ezra 10 (1 Esdras 8:68–9:36), not after Ezra 8. Placing Nehemiah 8 between Ezra 8 and 9 is a modern proposal that 1 Esdras does *not* support. This matters on the very page that sets out the Ezra/Nehemiah order debate.
- *Fix.* "which some scholars think once followed Ezra 8; 1 Esdras places the reading of the law directly after Ezra 10." Then check the part 08-13 notes for the same claim.

**7. Major: chapter 2 deep ("Nehemiah 2 and Daniel's seventy weeks") and topics.json `seventy-years`. The Jewish view is given in a form that fails on ordinary dates.**
- *What is wrong.* "The rabbinic chronology *Seder Olam Rabbah* and Rashi count the 490 years from the destruction of the First Temple to the destruction of the Second (AD 70): seventy years of exile and 420 years of the Second Temple." A reader using the book's own dates (586 BC to AD 70 is 656 years) will think this is simply wrong. It works only because Seder Olam's chronology puts the destruction about 423/422 BC and gives the whole Persian period only 34 years (Seder Olam 30). Without that sentence the Jewish view is not presented "in its strongest form", and it looks like bad arithmetic.
- *What could be added.* Rashi's reading of the "anointed one cut off" in 9:26 (King Agrippa), alongside the Christian and critical identifications.
- *Smaller points in the same section.*
  - "From Cyrus ... the only decree that explicitly concerns rebuilding" should say Cyrus's decree concerns the *Temple* (Ezra 1:2–4), and that it is Isaiah 44:28 and 45:13 that speak of the city.
  - Consider naming the 457 BC count's best-known modern users (Seventh-day Adventists) and the Reformed symbolic reading (E. J. Young; Meredith Kline), so that the Christian views are not only dispensational ones.
- *Fix.* Add one sentence on the traditional Jewish chronology, and correct the Cyrus line.

### Minor

**8. Minor: notes 1:6 ("Servants").** "Nehemiah calls himself God's servant eight times." There are eight occurrences of *eved* in 1:5–11 in all, but only three are Nehemiah of himself (1:6 once, 1:11 twice). The rest are Moses and Israel. Fix: "the word occurs eight times in the prayer, for Nehemiah, Moses and Israel."

**9. Minor: notes 3:3.** "fishermen from Tyre and Galilee brought their catch (13:16)". 13:16 names only men of Tyre. Remove "and Galilee".

**10. Minor: notes 3:26 ("Temple servants").** "The Hebrew of 3:26 has no verb." It has one, הָיוּ יֹשְׁבִים, "were living". What it lacks is a verb of repairing. The Plain English Translation supplies "worked", and the note should say so in those words.

**11. Minor: notes 6:6 ("Gashmu").** The preview says "an Aramaic form of the name with its old ending". The body says it keeps "the old Arabic case ending". The *-u* is the Arabian (North Arabian or Nabataean-type) nominative. Make the preview say "Arabian".

**12. Minor: plain.txt 7:25.** "Descendants of Gibeon: 95." The site's Ezra 2 renders בְּנֵי plus a town as "People of" (2:21, 2:24–26, 2:29–30, 2:33–34), keeping "Descendants of" for clans. Nehemiah follows this everywhere else (7:36–37 "People of"). Gibeon is a town, and the part's own note says "Here the list turns from family names to town names." Use "People of Gibeon: 95." Ezra's "Descendants of Gibbar" can stay.

**13. Minor: chapters.json settings (item 7).**
- There is no setting for the governor's ruling on the unproven priests (7:65). The site's Ezra 2 page has one at 2:63, so the parallel pages now differ.
- There is no setting for Nehemiah's commission of Hanani and Hananiah (7:2).
- The 2:17–18 setting's `readers` text is copied from 1:2–3 ("God's hand on a faithful servant at a foreign court") and does not fit a scene in Jerusalem.
- The settings state "445 BC" as settled while book.json allows 444; see finding 2.

Otherwise the settings are full and exact. They cover every prayer, speech, taunt, letter, order, oracle and list, and they name the hearers precisely (for example "Sanballat's 'brothers' ... and the army of Samaria", and "Hanani and Hananiah, and the gatekeepers").

**14. Minor: Claude's theory boxes (chapter 3; book.json spec).** Both are labeled and cite overlap, but the overlap claimed is too narrow.
- The chapter 3 box claims as new that the builders' list sets up later judgments, because some builders reappear in chapters 6 and 13. That question is the subject of Ursula Haasbroek, "The significance of the names of the builders in Nehemiah 3" (MTh dissertation, University of Pretoria, 2023). Cite it as overlap. "Honor roll" readings of Nehemiah 3 are also common in commentary and preaching.
- The book.json box ("a book about the city's boundaries") should name Wright, *Rebuilding Identity* (2004), already a source key, and Eskenazi's argument that holiness spreads from the Temple to the city, as near overlaps. The present citation is only "the theme of separation".

**15. Minor: variants.json 3:20, 3:15 and notes 2:8. The Greek is under-reported.**
- 3:20: the Greek reads "Βαρουχ υἱὸς Ζαβου", which supports the Ketiv Zabbai. Add it to reading 0. This is the strongest outside support for the Plain English Translation's choice.
- 3:15: the Greek does not just "lack the builder's name". It lacks the whole first half of the verse (Shallun, the Spring Gate and its doors) and begins "καὶ τὸ τεῖχος κολυμβήθρας τῶν κωδίων". Say so.
- 2:8 note: "The Greek here seems to lack ...". It does lack it ("στεγάσαι τὰς πύλας καὶ εἰς τὸ τεῖχος τῆς πόλεως"). Drop "seems". Consider making this a variant, since it changes what the timber is for.

**16. Minor: sources. Dead keys, and missing material on later Sanballats.**
- Seven of the part's eight keys are cited nowhere: `hoehner-chronological`, `anderson-coming-prince`, `newton-daniel`, `jerome-daniel`, `eusebius-demonstratio`, `goldingay-daniel` and `rashi-daniel`. Neither is the shared key `cross-judean-restoration`. Deep sections cannot carry `s`, so cite them on a 2:1 note about the seventy weeks, or list them in book.json `sources`.
- The Cross key points to material that is missing. Neither the `sanballat` core nor the notes mention the Wadi Daliyeh papyri and bulla (a later governor's son of "Sanballat", 4th century BC). Nor do they mention Josephus's Sanballat of Alexander's time (*Ant.* 11.302–312), whose daughter's marriage to the high priest's brother looks like a doublet of 13:28. Both matter for "who were the opponents". Add a short paragraph to the `sanballat` core, and alert the part 08-13 writer for 13:28.
- The 15 new shared keys are real works with correct details: series, volume numbers and years for Throntveit, Breneman, Wright, Kellermann, Clines, Hoglund, Yamauchi (both), Finkelstein, Mazar (BAR 35:2), Lipschits (JHS 9), Rabinowitz (JNES 15), Mazar (IEJ 7), Cross (JBL 94) and Goldstein (AB 41A).

**17. Minor: book.json lens A.** "the name Tobiah is carved at 'Araq el-Emir in Jordan, the later seat of the Tobiad family". This sits among "his opponents appear outside the Bible" and implies the inscription attests Nehemiah's Tobiah. Most scholars date the script to the 3rd or 2nd century BC (Naveh, Cross). B. Mazar argued for earlier. The `sanballat` core gives the range correctly ("from the 500s to about 200 BC"). Add "(the inscription is usually dated centuries later)" to the lens.

**18. Minor: chapters.json views J and notes 3:12 and 4:9. Generalizations about rabbinic readers that I could not source.**
- Chapter 3 J: "Rabbinic readers noted the nobles of Tekoa as an example of those who hold back".
- Chapter 6 J: "The rabbis valued Nehemiah's refusal to enter the sanctuary".
- Chapter 2 J: "Jewish commentators note that he spoke of 'the city of my ancestors' graves'".
- Note 3:12: "Rabbinic commentators did not discuss the verse much". Note that the "Rashi" on Ezra–Nehemiah is pseudo-Rashi.
- Chapter 5 J: "Jewish law built on these chapters: the prohibition of interest ... and the later prozbul". Both rest on the Torah (Leviticus 25; Deuteronomy 15), not on Nehemiah 5.
- Note 4:9: "Jewish readers see in Nehemiah's guards the same balance found in ... (Bavli Pesachim 64b)". The dictum "one does not rely on a miracle" is correctly located at Pesachim 64b, but the Talmud does not apply it to Nehemiah.

Fix: give a source for each, or rephrase as comparisons ("compare the later rabbinic rule ..."). Remove what cannot be supported.

**19. Minor: glosses.json.**
- 4:16 "scale armor, like chain mail". Scale armor is not chain mail; use "armor of overlapping metal scales".
- 7:70 "drachmas: coins, probably the Persian gold daric". This contradicts the Ezra 2:69 note ("usually taken as the Greek silver drachma ... others take it as the daric"); say "drachmas or darics".
- 4:3 "Tobiah, his right-hand man" adds a relationship the text does not state.
- 6:15 "Elul: August to September" is fine in general, but the 6:15 note dates Elul 25 to about October 2, 445 BC. Add "(in 445 BC, September to October)".

**20. Minor: plain.txt. Smaller wording points.**
- 1:3 "torn down" for מְפֹרָצֶת ("breached"). 2:13 renders the same root "lay broken". Use "broken through" or "breached" in both.
- 2:18 "Their hands grew strong" loses the active piel ("they strengthened their hands"). The 6:9 note then quotes it as the contrast.
- 2:12 "putting into my heart" and 7:5 "gave me the idea in my heart" render the same idiom (נתן אל לבי). Make them alike; the `providence` topic links the two verses.
- 3:1 "They made the wall holy": "the wall" is supplied (Hebrew "they consecrated it").
- 6:2 "face to face" is added (Hebrew "let us meet together").
- 4:20 "run to us" (Hebrew "gather to us").
- 1:6 "I pray it in front of you today, day and night" is awkward ("today" for הַיּוֹם, "now").

**21. Minor: notes.json. Several notes repeat their variants.** STYLE says "never explain the same point twice". The notes at 2:6, 2:13 ("Serpent, dragon or jackal?"), 3:20, 4:12, 4:23, 5:2, 5:11, 6:9, 6:14 and 7:3 restate the Greek or emended reading already given in the variant at the same anchor. Cut the duplicated sentences down to "see the variant". Also, note 4:23 has "The Greek has neither words"; it should read "neither word" (and the variant says the Greek lacks the whole clause).

**22. Minor: terms.json, new entries.**
- "the high priest" (*hakkohen haggadol*): add the exception at Leviticus 21:10, where *hakkohen haggadol me'echav* is "The priest who is greater than his brothers" in the site Plain English Translation. Otherwise the entry reads as overriding it.
- The gates-and-places entry (titled for places too) omits places the part uses: the Pool of Shelah, the king's garden, David's tombs, the Warriors' House, the armory, the courtyard of the guard, the Ophel, and the upper room at the corner. Add them, or retitle the entry "gate names".
- The Sanballat/Tobiah epithet entry is fine. 4:3 correctly drops "the servant" where the Hebrew does.

**23. Minor: Ezra–Nehemiah consistency for סְגָנִים.** Nehemiah renders *seganim* "officials" (2:16; 4:14, 19; 5:7, 17; 7:5), but the site's Ezra 9:2 renders the same word "deputies" ("the officials and deputies", where "officials" is *sarim*). terms.json also gives "officials" to *shoterim*. Ezra–Nehemiah is one book. Choose one rendering for *seganim* across it ("officials" is fine if Ezra 9:2 changes) and add a terms entry. Tell the Ezra owner.

**24. Minor: parallel check, Ezra side (for the Ezra owner).** Ezra 2:56 has יַעְלָה (Jaalah), but the site's Ezra Plain English Translation prints "Jaala", the same as Nehemiah 7:58 יַעְלָא. Under the name policy, Ezra 2:56 should read "Jaalah". Nothing in Nehemiah needs to change.

**25. Minor: book.json "a memoir set in a larger book", chapters.json chapter 5 views ("A votive record"), and the nehemiah spec box in topics.json. The votive view is credited to Kellermann.** All three credit the idea that the memoir resembles votive inscriptions set before a god to Kellermann ("Kellermann; Williamson discusses the theory"; "argued by scholars such as Kellermann"). Kellermann's own thesis is mainly that the memoir is a "prayer of the accused" (*Gebet des Angeklagten*). The votive and memorial-inscription parallels are usually credited to Mowinckel and von Rad ("Die Nehemia-Denkschrift und ihre Gattung", 1964), as Williamson's survey reports. Fix: credit Mowinckel and von Rad for the votive view (cite Williamson's survey), and keep Kellermann for the self-defense view. Since the spec box claims what is new against this overlap, its citation should be right.

**26. Minor: book.json "Dates, and Ezra or Nehemiah first?".** "the high priest of Ezra's day (Jehohanan, Ezra 10:6)". Ezra 10:6 does not call Jehohanan high priest; that is the argument's inference. Write "the Jehohanan son of Eliashib whose room Ezra used (Ezra 10:6), if he is the later high priest Johanan (12:22) ...". The rest of the section agrees with the Ezra and Chronicles front pages on authorship (Bava Batra 15a, Japhet/Williamson, Blenkinsopp dissenting), date (about 400–300 BC) and canon order (Talmud: Ezra–Nehemiah before Chronicles; Aleppo and Leningrad: Chronicles first, Ezra–Nehemiah last).

## Fixes applied

All fixes were made in the part files, `book.json`, the `sanballat` topic core, `terms.json` (Nehemiah entries only) and Ezra part 01-06. After the fixes, `--check Neh/01-07`: 0 errors, 0 warnings (124 notes, 29 variants). `--check Neh`: 0 errors, 2 warnings, both in part 08-13 (see the sync list below). `--check Ezr`: 0 errors, 4 warnings, all Ezra notes quoting Nehemiah wording (7:73, 1:3, 8:8, 9:32); the coordinator will sync those.

**1. 7:67–68 haplography.** Fixed. The 7:68 "why" now gives both slips: (1) 245 to 245, where the singers really were 245, and (2) "two hundred" to "two hundred and forty-five", where the singers were 200 and "and forty-five" is the tail of the mules' line. It says the Plain English Translation keeps the transmitted 245 and restores the verse, which fits view (1), and that on view (2) the figure would be 200. The `b` field now says STEP's reconstruction follows view (2). Other changes: "margin of BHS" is now "apparatus of BHS". The omission reading now lists Codex Vaticanus, as shown in Brenton (checked: Brenton has 7:68 "omitted"). The preview names Rahlfs' Greek as the source of the printed verse. The 7:67 entry now gives the same two options. A new 7:69 variant covers Vaticanus's 2,700 donkeys with no camels (checked in Brenton). Ezra 2:65's variant now gives both slips in the same terms and points to Nehemiah 7:67–68.

**2. Dates.** Fixed. Note 1:1 now says Kislev 446 and Nisan 445 BC on the usual reckoning, with Hoehner's Tishri count (Kislev 445, Nisan 444) as the alternative. The chapter 1 deep section adds Hoehner's count. The chapter 2 deep section, the `seventy-years` topic, book.json "Dates" and facts all now use the same wording. The settings say "446 BC (445 on Hoehner's count)" for 1:2–3, "445 BC (444 on Hoehner's count)" for 2:2–8, and "445 (or 444) BC" for every later one.

**3. Missing variants.** All added:
- **3:18.** Bavvai is kept. The other reading is Greek Beni (checked on die-bibel.de), the Syriac and two Hebrew manuscripts (the last two as reported in the NIV footnote, not checked first-hand), with 3:24.
- **7:69.** Vaticanus (see 1).
- **7:70.** The Greek has the gifts given "to Nehemiah", with no governor giving (checked in Rahlfs: τῷ Νεεμια εἰς θησαυρὸν). The 7:65 note now says the Greek translator heard the Tirshatha as Nehemiah.
- **7:72.** The Greek has 2,200 minas (checked in Rahlfs). The 7:70 note and the chapter 7 table now give the Greek total of 4,400.

The Ezra 2:69 note was not changed: its 4,200 is correct for the Hebrew, and the coordinator limited Ezra edits to three items.

**4. "Remember me" prayers.** Fixed, but with the opposite word order to the one the review suggested. terms.json now gives one rendering, "My God, remember me for good", for the identical Hebrew of 5:19 and 13:31, and 5:19 now reads "My God, remember me for good, for all I have done for this people." Reason: 13:31 already reads this way and is the last line of the book. It also matches the other prayers in the memoir ("My God, remember Tobiah..." 6:14; "My God, remember me for this" 13:14), so the pattern holds across both parts. Lens J now quotes the Plain English Translation wording, and so do the "reformer" section and the lead, which already did. Note 5:19 and the `prayer` topic now say four "remember me" prayers, two of them "for good". At 1:8, "Please call to mind" is now "Please remember", and the terms entry lists every zakhar prayer.

**5. NIV/ESV drift.** All ten verses were redrafted from the literal lines:
- 7:3 "each man at his post, each man in front of his own house"
- 4:12 "ten times, 'From all the places where you turn back, they are upon us.'"
- 4:23 "Each man's weapon was with him at the water." The supplied "even" is gone.
- 5:7 "Then I called a great assembly against them."
- 5:15 "I did not do this, because I feared God."
- 5:2 "Let us take grain, so we can eat and live."
- 4:3 "If a fox went up on it, he would breach their wall of stones." This uses the same root as 1:3.
- 4:11 "They will not know a thing or see a thing until..."
- 6:6 "By this account, you are going to be their king."
- 6:11 "I am not going."

The anchors and variant readings were updated to match.

**6. 1 Esdras.** Fixed in book.json authorship: some scholars think the story once followed Ezra 8, and 1 Esdras puts the reading of the law directly after Ezra 10 (1 Esdras 9:37–55). The translations section also wrongly implied a full parallel, and it is fixed too: 1 Esdras has the list in its Ezra 2 form (5:7–46) and the law-reading after Ezra 10. Part 08-13 was checked and already states the 1 Esdras order correctly (notes and chapter 8 page).

**7. Seventy weeks.** Fixed in the chapter 2 deep section, the `seventy-years` topic and book.json ("How Jews and Christians read Nehemiah"). Each now says that on ordinary dates 586 BC–AD 70 is 656 years, and that the count works on Seder Olam's chronology, which gives the Persian period 34 years (Seder Olam 30). The Cyrus line now says his decree concerns the Temple (Ezra 1:2–4) and that Isaiah 44:28 and 45:13 speak of the city. Also added:
- Rashi's Agrippa reading of Daniel 9:26.
- Seventh-day Adventists as the best-known modern users of the 457 count.
- E. J. Young and Meredith Kline for the symbolic reading.

**8.** Fixed. The note now says the word occurs eight times in the prayer, for Nehemiah (1:6; 1:11), Moses and Israel.
**9.** Fixed. "and Galilee" is removed: men of Tyre sold fish (13:16).
**10.** Fixed. The note now says the Hebrew has "were living" but no verb of repairing, and that the Plain English Translation supplies "worked".
**11.** Fixed. The preview now says "Arabian", and the body says "Arabian (North Arabian) nominative ending -u".
**12.** Fixed. 7:25 now reads "People of Gibeon: 95."
**13.** Fixed. New settings at 7:2 (Hanani and Hananiah's commission) and 7:65 (the governor's ruling, parallel to Ezra 2:63). The 2:17–18 `readers` text is rewritten for Jerusalem. The dates are fixed as in 2.
**14.** Fixed:
- **Chapter 3 box.** It now cites "honor roll" readings in commentary and Ursula Haasbroek's 2023 Pretoria MTh (title and degree verified in the UP repository; new part source key `haasbroek-nehemiah-3`, cited on the 3:1–32 setting). The new claim is narrowed to the link with the "remember" prayers.
- **book.json box.** It now names Eskenazi's holiness-spreading argument and Wright, *Rebuilding Identity*, as overlap.

**15.** Fixed:
- **3:20.** Greek Zabou has been added to the Ketiv reading and the "why".
- **3:15.** The "why" now says the Greek lacks the whole first half of the verse (checked: it begins καὶ τὸ τεῖχος κολυμβήθρας τῶν κωδίων).
- **2:8.** "Seems" is dropped, and a new variant covers the Greek "to roof the gates" (checked).

**16.** Fixed. A new 2:1 note ("Nisan and Daniel's seventy weeks") cites the seven dead chronology keys plus `seder-olam`. `cross-judean-restoration` is now cited in the `sanballat` core. That core has a new section, "Later Sanballats", on the Wadi Daliyeh papyri and seal impression and on Josephus, *Ant.* 11.302–312, as a possible doublet of 13:28. Part 08-13's 13:28 notes already cover this, so no alert was needed.
**17.** Fixed. Lens A now adds "(the inscription is usually dated centuries after Nehemiah)".
**18.** Fixed:
- **Chapter 3 J.** The Tekoa sentence is removed.
- **Chapter 6 J.** This is now a comparison with Numbers 18:7.
- **Chapter 2 J.** This now rests on Ben Sira 49:13, which is a source key, plus "many commentators".
- **Note 3:12.** The rabbinic sentence is removed. No note on this part cites Rashi on Ezra–Nehemiah.
- **Chapter 5 J.** This now grounds the law in Leviticus 25 and Deuteronomy 15, gives the prozbul as a comparison (Mishnah Shevi'it 10:3), and cites only Sanhedrin 93b's criticism.
- **4:9 note and chapter 4 J.** These are now "compare the later rabbinic rule ... which the Talmud states without reference to Nehemiah."
- **Notes 2:4 and 5:10.** These had the same kind of unsourced claims about "Jewish readers" and "rabbinic readers", and they are softened too.

**19.** Fixed:
- **4:16.** The gloss is now "armor of overlapping metal scales".
- **7:70.** The gloss is now "drachmas or darics", with a pointer to the Ezra 2:69 note.
- **4:3.** The gloss is now "Tobiah was standing beside him".
- **Elul.** The gloss adds "(in 445 BC, September to October)".

**20.** Fixed:
- **1:3 and 2:13.** Both now say "breached" ("is breached" / "lay breached").
- **2:18.** This now reads "They made their hands strong". The 6:9 note now points to the same verb.
- **2:12 and 7:5.** Both now use "laid (it) on my heart". The `providence` topic is updated to match.
- **3:1.** This now reads "As far as the Tower of the Hundred they made it holy".
- **6:2.** This now reads "let us meet with each other".
- **4:20.** This now reads "gather to us".
- **1:6.** This now reads "I bring it before you now, day and night".

**21.** Fixed. The notes at 2:6, 2:13 (Serpent), 3:20, 4:12, 4:23, 5:2, 5:11, 6:9, 6:14 and 7:3 no longer restate the Greek or the emended reading, and point to the variant instead. The 4:23 note no longer says "neither words"; it now says the Greek lacks the whole clause.
**22.** Fixed. The high-priest entry now gives the Leviticus 21:10 exception. The place entry is retitled "gate and place names" and adds all the places listed.

**23.** Fixed, but with a different choice from the review's: *seganim* is **"deputies"** across Ezra–Nehemiah, not "officials". Reason: "officials" already renders *sarim* in the site's Ezra (9:1, 9:2, 10:8, 10:14), *sar* in Nehemiah 3 ("the official over half the district"), and *shoterim* in terms.json. "Officials" for *seganim* would give three Hebrew words one English word, two of them in a single verse at Ezra 9:2. Ezra 9:2 already reads "the officials and deputies", so it needed no change. Nehemiah 2:16 (twice), 4:14, 4:19, 5:7, 5:17 and 7:5 now read "deputies", and so do the matching notes, gloss, settings and topics. A new terms.json entry records the choice.

**24.** Fixed. Ezra 2:56 now reads "Jaalah" (no notes or glosses anchor on it).
**25.** Fixed. book.json authorship, the chapter 5 setting views, note 5:19 and the `nehemiah` spec box now credit the votive and memorial-inscription view to Mowinckel and von Rad (via Williamson's survey). The self-defense view, "prayer of the accused", is credited to Kellermann.
**26.** Fixed. book.json now reads "the Jehohanan son of Eliashib whose room Ezra used (Ezra 10:6), if he is the later high priest Johanan (12:22), would be the grandson of Nehemiah's Eliashib".

**Also, at the coordinator's request.** The book.json name-policy wording now includes the 12:16 exception. The translations section also summarizes 8–13: Ketiv at 10:19 (Nobai) and 12:14 (Malluchi), Qere elsewhere, including Iddo at 12:16.

**Part 08-13 verses to sync** (not edited here):
- 13:31 note and chapter 13 page: both quote 5:19 as "Remember me for good, my God". It should be "My God, remember me for good" (these are the 2 build warnings).
- 12:40 "half of the officials" and 13:11 "the officials": both are *seganim*, so both should be "deputies".
- Any 08-13 note or page that calls *seganim* "officials". Keep "officials" for *sarim* (9:32, 9:34, 9:38).
