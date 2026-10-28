# Hostile review: Jeremiah 21-25

## Verdict

Sound, carefully built part with no invented sources. Every item the writer was unsure of checks out (Esarhaddon's seventy years, Ramat Rahel/Aharoni, Lachish Letter 6, Rashi on 23:6 and 23:33, the Targum on 23:5, Trent/Catechism/Wesley/Article 11, the Calvin and Formula of Concord citations), and no reader-facing text says "from memory". The Plain is close to the Hebrew and mostly clear of NIV/ESV sentence shape. The problems are mainly witness evidence and a few translation choices:

- The 25:13 variant says the Greek lacks a clause that it actually has.
- Restored words are cited as 4QJer-c readings (Media at 25:25, the whole of 25:24).
- 22:23 "groan" departs from the Masoretic Text without saying so.
- The 22:30 Plain flattens a participle that the Jeconiah debate depends on.
- The 23:6 traditions card omits the Orthodox.
- The cross-part pairs are not aligned.

`VERBOSE=1 node tools/build.js --check Jer/21-25` gives "Jer: 132 verses, 91 notes, 30 variants, 32 glosses, 5 chapter pages, 42 topic contributions". Its only error is outside this part (Ezk/16-19 sources.json, key `bfm-2000`). Its only warning is Jer/book.json (the 1:1 quote), also not this part.

Counts: critical 0, major 5, minor 15.

## Findings

### Major

**1. [major] variants.json, 25:13 ("what Jeremiah prophesied against all the nations"): wrong Greek evidence.**
- The entry says "The Greek lacks this clause". The Greek has it as a title. Swete prints "Ἃ ἐπροφήτευσεν Ἰερεμίας ἐπὶ τὰ ἔθνη τὰ Αἰλάμ" at the head of his 25:14. Other Greek editions and Brenton set it as the close of 25:13 or as a title before the Elam oracle.
- Only "all" is missing. The clause also serves as the heading of the nation oracles in the Greek.
- The entry's own note ("the Greek goes on to a new heading") contradicts its claim.
- The same mistake is in the 25:13 notes entry ("In the Greek ... after a new heading"), the 25:14 variant, and chapters.json (chapter 25, "Two editions at 25:13").
- Fix: rewrite the entry as "the Greek has the clause as a heading with 'the nations' (no 'all'), joined to Elam". Say that Swete's and the critical editions' verse numbers differ here. Check Ziegler or Rahlfs and name the edition.

**2. [major] variants.json, 25:25 / 25:24 / 25:7; chapters.json ch. 25 "C"; topic `textual-history`: restored words cited as the scroll's reading.**
- The brief and tools/dss.py both say bracketed words are never a scroll's reading.
- 25:25: the entry says 4QJer-c "preserves 'Zimri' and 'Media'". The transcription is `ואת כל מלכי זמרי ואת כל [מלכי] [עילם] ואת כל מלכי [מדי]`. "Zimri" is visible, but "Media" is restored.
  - The "follow" reason (the scroll shows the longer list is old) is therefore overstated for Media.
  - The same overstatement is repeated in the `textual-history` topic ("supports the longer Hebrew text at ... 25:25").
- 25:24, "b": it says 4QJer-c "preserves only the last words". In fact both words (`[השכנים] [במדבר]`) are bracketed, so the scroll has nothing visible in this verse. The transcription shows the right extent, but it is not a reading.
- 25:7: only "במעשה" and "לרע" are visible. "ידיכם" and "לכם" are restored, and "למען הכעיסני" is not present. The entry should say the scroll preserves the end of the verse, partly restored.
- Fix: for each place, state which words are visible and which are restored. Drop Media and 25:24 as evidence. Keep Zimri and the third "kings of" as the only 25:25 support.

**3. [major] plain.txt 22:23, with a missing note or variant: "how you will groan" is undisclosed.**
- The Masoretic Text reads `מה נחנת` (niphal of *ḥnn*, "how you will be pitied / shown favor"). 4QJer-c has the same consonants (`נחנת`, visible).
- "Groan" follows the Greek (καταστενάξεις) or an emendation to *ne'enaḥt*. The Plain does not say this anywhere.
- The Plain's sentence shape ("how you will groan when the pains come on you, agony like a woman giving birth") matches the NIV's wording, which is the same emendation.
- Fix: add a variant or note. Either follow the Masoretic Text ("how you will be pitied" or "how pitiable you will be") or keep "groan" and say plainly that it follows the Greek and Syriac, with the scroll on the Masoretic side.

**4. [major] plain.txt 22:30, against the deep section and the note: the participle is flattened.**
- Hebrew: `כי לא יצלח מזרעו איש ישב על כסא דוד ומשל עוד ביהודה`, "no one of his seed will prosper, sitting on David's throne and ruling again".
- The Plain breaks this into "none will do well, none will sit ... and rule again". That gives a flat ban on sitting and drops the link with "prosper" (*yitslaḥ*).
- The writer's own deep section reads "none of his offspring will 'do well' by sitting on David's throne". The Plain does not support that wording.
- The Matthew 1 debate (Radak, the conditional-curse view, Haggai 2:23) turns on exactly this construction.
- Fix: a Plain that keeps the participle ("none of his offspring will do well as one who sits on David's throne and rules again in Judah"). Add a note on the construction, and note that 36:30 (a different oracle) is also a throne ban.

**5. [major] chapters.json ch. 23, `traditions` card on 23:6: a tradition with a distinct view is missing.**
- Card text: "How does 'The LORD is our righteousness' make sinners right with God?" It covers Catholic, Lutheran, Reformed, Methodist and Anglican.
- Missing: the Orthodox, who do not use the forensic or imputation frame (the divine energies, participation, theosis). Baptist is also missing, though it is close to Reformed.
- The Catholic entry (Trent 6.7, CCC 1992) is accurate but never touches Jeremiah 23:6. The card needs a sentence on how each church uses this verse.
- Verified: Formula of Concord Epitome III cites Jeremiah 23:6 with 1 Corinthians 1:30 against Osiander. The card says only "Solid Declaration III" and "Osiander used this text".
  - Cite Epitome III as well, and check the Solid Declaration paragraph before naming it.
- Verified: Calvin's *Institutes* 3.11 answers Osiander on this text, and his Jeremiah commentary on 23:6 argues the grammar (the Jewish reading making God the subject) and not only imputation.
- Verified: Wesley's Sermon 20 and Article 11.
- Fix: add Orthodox, with a named source such as a catechism, a confession or a named theologian. Give the Catholic entry one line on the verse. Cite Epitome III.

### Minor

**6. [minor] variants.json 22:20: "a change of one letter" is wrong.** נשברו to נשפכו changes two letters (ב to פ, ר to כ). The scroll's reading is still correct and visible.

**7. [minor] Cross-part pair 23:19-20 and 30:23-24: not aligned, and the note is incomplete.**
- 23:19 reads "Look! The storm of the LORD! Fury has gone out, a whirling storm; it will burst on the heads of the wicked."
- 30:23 reads "See the LORD's storm! His heat has gone out, a spinning gale; it will whirl down on the heads of the wicked."
- Hebrew is identical except `מתחולל` and `מתגורר` and the initial *waw*. *Hinneh*, *ḥemah*, *sa'ar* and *yaḥul* should match. 23:19 is the model.
- The 23:20 note lists only "burning anger" and "understand it fully". 23:20 and 30:24 do differ as described, but the note is silent on verse 19.
- Fix: align 30:23 to 23:19, or list the differences. The 30:23 fix belongs to part 26-31.

**8. [minor] Cross-part pair 23:5-6 and 33:15-16: not aligned.**
- 23:5 reads "carry out justice and righteousness in the land". 33:15 reads "do justice and what is right".
- 23:6 reads "will settle in security". 33:16 reads "will live in safety".
- The Hebrew is the same in each pair (*mishpat uts'daqah*; *yishkon / tishkon lavetaḥ*).
- The 23:6 note and the "Branch and Zedekiah's name" section name only the "she" difference.
- Fix: align 33:15-16 to 23:5-6 (part 32-38), and list the real differences.

**9. [minor] Cross-part pair 23:7-8 and 16:14-15.**
- The note says only "the same two verses stand at 16:14-15" and lists no differences. The brief requires them listed.
- Hebrew 16:15 and 23:8 share "ומכל הארצות", but the Plains read "out of every land" (16:15) and "from all the lands" (23:8).
- Real differences to list: *bene* against *zera' bet*; the third person (16:15) against the first person (23:8); and *wahashibotim 'al adamatam* against *wayashebu*.
- Fix: match 23:8 to 16:15 where the Hebrew agrees, and add a table or list of the differences.

**10. [minor] Cross-part consistency, 25:23 against 9:26 (part 07-12) and 49:32.**
- Hebrew *qetsutse pe'ah* is "all who cut the hair at their temples" in 25:23 and 49:32, but "hair cut at the corners" in 9:26.
- The note on 25:23 cites 9:26 without saying the Plains differ.
- Fix: one rendering. 9:26 is the earlier text.

**11. [minor] Pair 25:14 and 27:7: a small mismatch.** The Hebrew verbs are the same (*'avdu / we'avdu b-*). The Plains read "worked as slaves by" (25:14) and "make him their slave" (27:7). The note compares them correctly but does not list the wording difference.

**12. [minor] Note accuracy.**
- Note 22:3 says "The Plain follows 7:6: 'the foreigner, the fatherless and the widow'". Plain 22:3 reads "the foreigner, the fatherless or the widow". Either match 7:6 or drop the claim.
- Note 21:12 says 22:2-3 "repeats it almost word for word". Only "pull the robbed out of the oppressor's hand" is shared, so "partly repeats" is more accurate.

**13. [minor] Required statement of the witnesses read is missing.** The brief requires one statement, on the first chapter page, of which witnesses the writer read. Chapter 21's page has none. It should name Swete's Greek, the Abegg-Bowley-Cook transcriptions of 4QJer-a and -c (4Q70 and 4Q72), the Targum and Rashi, with the Greek as Swete's codex and not the critical text. Also, 4Q70 preserves 21:1 and 22:3-16, and 4QJer-a is never named for these verses.

**14. [minor] NIV/ESV sentence shape. Each is partly forced by the Hebrew, but check these lines.**
- 22:16 "Is that not what knowing me means?" is close to the NIV's "what it means to know me". Try "Is this not knowing me?"
- 23:3 "I myself will gather what is left of my flock ... bring them back to their pasture" echoes the NIV's "I myself will gather ... bring them back to their pasture".
- 22:23 (see finding 3).
- 22:28 "a vessel nobody wants" is close to the NIV's "object no one wants". It also drops "despised" (*nivzeh*).
- 23:23 "a God only close by" is close to the NIV.
- 23:13 "led my people Israel astray" matches the ESV and NIV. The Hebrew allows "made my people Israel stray".
- 21:5 ("in anger, in rage and in great wrath") and 23:5 ("raise up for David a righteous Branch") are forced by the Hebrew and may stand.

**15. [minor] Translation precision.**
- 23:14 "All of them are Sodom to me ... are Gomorrah": the Hebrew has a simile (*kisdom*, *ka'amorah*), and the Plain makes a metaphor. Restore "like".
- 23:1 "who lose and scatter": *ma'bidim* is "destroy / cause to perish" (the Greek has ἀπολλύοντες). "Lose" softens it.
- 22:15 "racing others in cedar" for *mitḥareh*: "racing" is not what the verb means. Use "competing" or "vying" (compare 12:5).
- 22:4 "take David's seat on his throne" drops *le-David*. Better: "sit on David's throne".
- 21:8 "you are also to say" adds "also".

**16. [minor] Variant gaps and small errors.**
- 24:1: the Greek has "the prisoners and the neighbors" where the Hebrew has "the craftsmen and the smiths". No entry. Note that 29:2 in the Hebrew is a parallel.
- 21:13: *yaḥat* ("come down") against the Greek πτοήσει ("terrify"). No note.
- 23:37-38: the Greek is much shorter and different (a single question; Swete's 23:37 is only "καὶ διὰ τί ἐλάλησεν Κύριος ὁ θεὸς ἡμῶν"). Only 23:36 is flagged.
- 24:9-10: the Greek has "dispersion ... hatred ... famine, death, sword". 24:10 is in a note but 24:9 is not.
- 23:39: the Greek is "λαμβάνω καὶ ῥάσσω" ("I take and dash down"). The entry's plain "lift you up" drops the second verb.
- 23:33: the Vulgate also reads "vos estis onus" (useful third witness). Optional.
- 23:19: the Greek has σεισμός, "earthquake", for "storm". Optional.

**17. [minor] Overclaims and loose statements in reader-facing text.**
- chapters.json ch. 21 "J": "the book's warnings are read in the weeks of mourning before the Ninth of Av". The haftarot of rebuke are Jeremiah 1-2 (and Isaiah 1). Jeremiah 21 is not among them. Say "Jeremiah 1-2" or drop it.
- Topic `false-teachers`: "the Bible's longest treatment of false prophets before the New Testament" is unprovable. Jeremiah 27-29 and Ezekiel 13 are longer or comparable. Say "one of the fullest".
- chapters.json ch. 22 "H": "fulfilled to the letter ... Coniah spent the rest of his life in Babylon". 2 Kings 25:27-30 shows him alive in 561 BC. His death in Babylon is not recorded. Say "was never allowed to return".
- Note 21:9 / ch. 21 deep, "officials in Jerusalem" for Lachish Letter 6: the letter faults "the officials" (their words "weaken the hands") and asks the recipient to write "even in Jerusalem". The officials are not located in Jerusalem. Reword: "officials' letters". The editor's name is fine.

**18. [minor] Note 25:26 (and the Sheshach section): muddled logic.** "The last place in the list gives the sense: Babylon drinks the cup last (51:7)" and "the one that holds the cup last is the one that gave it to the others". 51:7 says Babylon was a golden cup in the LORD's hand that made the earth drunk. It does not say Babylon drinks last. State the point separately: the cipher puts Babylon last in the list (25:26), and 51:7 independently pictures it as the LORD's cup.

**19. [minor] Ramat Rahel note (22:13): add source support.**
- The claim is accurate: Aharoni dated the palace to about 600 BC and tied it to Jehoiakim and Jeremiah 22:14.
- The later Tel Aviv excavations date Stratum VA to the end of the 7th or early 6th century, and others (Yadin) disputed Aharoni's date.
- The note cites Lipschits (*Fall and Rise*) and Hobbs, not an excavation report. Add Aharoni's own publication and the Lipschits excavation report.

**20. [minor] Settings and structure.**
- Chapter 22 `settings` 22:20-23: "It explains that her prosperity-time refusals to listen are the reason ..." is garbled.
- Chapter 22 `settings` 22:24-30: the date views ("the verbs in 22:28 are past") hold only for the Hebrew perfect, which is itself debated.
- The 23:1-8 setting says "probably gathered ... after 597 BC", while the chapter-23 summary says "the answer to Zedekiah". Name one view and give the other.

## Verified and found accurate

- The Esarhaddon inscription (Borger): seventy years of desolation for Babylon, relented to eleven. Accurate.
- Rashi on 23:6: "The LORD will vindicate us in this one's days". Accurate.
- Rashi on 23:33: both readings given. Accurate.
- The Targum on 23:5: *meshiḥa ditsdiqayya*, "Messiah of the righteous". Accurate.
- Ration tablets: Ya'ukin and five sons. Accurate.
- 1 Chronicles 3:17-18: seven sons. Accurate.
- The 22:15 "Ahaz" variant, with 4Q70 and 4Q72 reading `בארז`. Accurate.
- 22:18: 4Q72 has "alas, sister" and *hodah*. Accurate.
- 21:7 and 21:8 (4Q72). Accurate.
- 25:26 Sheshach (4Q72, visible). Accurate.
- 25:10 "perfume" in the Greek. Accurate.
- 25:34 and 25:38 Greek readings. Accurate.
- The Sanhedrin 34a hammer tradition and the Josephus citation (*Antiquities* 10.6.3). Accurate.
- The Babylonian Chronicle: Ashkelon in 604, Jerusalem in March 597. Accurate.
- Trent session 6 ch. 7, CCC 1992, WCF 11.1, Article 11, and Wesley's Sermon 20 (1765). Accurate.
- Terms, audience and settings are present for all five chapters; every speech has a setting card. No em-dashes appear in prose.

## Fixes applied

1. Accepted. The 25:13 variant, the 25:13 note, the 25:14 variant and the chapter 25 "Two editions at 25:13" section now say the Greek has the clause as a heading before the Elam oracle (Swete's 25:14), with "the nations" and no "all". Verified in Swete (tools/lxx.py). Ziegler was not read, so the Plain-side statement is limited to Swete's numbering.
2. Accepted. Checked every place with dss.py. 25:25: only "Zimri" and the third "kings of" are visible; Media is restored and no longer used as evidence (variant, chapter 25 C view, `textual-history` topic). 25:24: all restored, so the variant now says the scroll gives no evidence. 25:7: now says "with the work" and "to harm" are visible, the rest restored or absent. Also corrected chapter 24 C view (24:6-7 partly restored).
3. Accepted. 22:23 now follows the Masoretic Text and the scroll (visible nchnt): "how you will be pitied". New variant gives the Greek "groan" (Swete). I did not cite the Syriac, which I could not check.
4. Accepted. 22:30 now keeps the participle ("prosper as one who sits on David's throne and rules again in Judah"); the deep section matches; a new note explains the construction and cites 36:30 as a separate oracle.
5. Accepted. The 23:6 card now has Baptist (London Confession 11) and Orthodox (Ware, Lossky; stated as a general frame, with no official statement on this verse), a line on how Catholics apply the verse, Epitome III for the Lutherans (Jeremiah 23:6 with 1 Corinthians 1:30, reported by a Lutheran commentary; Solid Declaration not named because I could not check its paragraph), and Calvin's grammar argument.
6. Accepted. 22:20 variant now says two letters changed.
7. Accepted for my part. 23:19-20 note now lists the Hebrew differences (waw, mitholel/mitgorer, "burning", "fully"). Part 26-31 must change 30:23-24 to 23:19-20's wording: "Look! The storm of the LORD! Fury has gone out, a whirling storm; it will burst on the heads of the wicked" (30:23 differs only by mitgorer and no initial "and"), and name that difference in its note.
8. Accepted for my part. The 23:6 note and the Branch section list the differences. Part 32-38 must change 33:15-16 to 23:5-6: "carry out justice and righteousness in the land", "settle in security", and keep only the real differences (a Branch of righteousness; make sprout; Jerusalem; "she").
9. Accepted. 23:8 now reads "out of the land of the north, and out of every land where I drove them" (16:15 is the model); the 23:7 note lists the real differences (bene / zera' bet; third/first person; "brought back"; the ending). Part 13-20 needs nothing.
10. Accepted. 9:26 is earlier, so 25:23 now reads "all who have their hair cut at the corners" and its note says so. Part 46-49 must change 49:32 ("those who cut the hair at their temples") and its topic text to match.
11. Accepted. A new note at 25:14 lists the wording difference. Part 26-31 must change 27:7 ("make him their slave") to match 25:14 ("worked as slaves by") where the Hebrew is the same.
12. Accepted. 22:3 now reads "the foreigner, the fatherless and the widow" as in 7:6; the note says "matches". Note 21:12 now says "partly repeats".
13. Accepted. Added a "Witnesses used for chapters 21-25" section on the chapter 21 page: Swete's Vaticanus (not Ziegler), the Abegg-Bowley-Cook transcription with the exact verses of 4Q70 (21:1; 22:3-16) and 4Q72, no scroll in chapter 23, Targum, Rashi and Radak named only where a note gives their reading, Vulgate and Peshitta not consulted.
14. Partly accepted. Changed 22:16 ("Is this not knowing me?"), 23:3, 22:28 ("a despised, shattered jar ... a vessel no one delights in"; adds "despised"), 23:23 ("a God at close range ... at a distance"), 23:13 and 23:32 ("made my people Israel wander"; the same Hebrew verb in both), 22:23 (finding 3). Left 21:5 and 23:5 as forced by the Hebrew. Notes, glosses and topics that quoted the old wording were updated.
15. Accepted. 23:14 restores "like Sodom ... like Gomorrah"; 23:1 "destroy and scatter" (Greek apollyontes, checked); 22:15 "competing"; 22:4 "kings who sit on David's throne"; 21:8 "also" removed.
16. Accepted, with changes. New variants: 21:13 (yachat / ptoesei), 24:1 (Greek has craftsmen, prisoners and neighbors; the review said it lacked craftsmen, which Swete shows it does not), 24:9, 23:37-38 (Greek single question), 22:23. 23:39 plain now "take you up and dash you down". 23:19 (seismos) is in the 23:20 note. Declined the Vulgate "vos estis onus" on 23:33, which I could not check.
17. Accepted. Chapter 21 J now says Jeremiah 1-2 are among the readings of rebuke; `false-teachers` now says "one of the fullest"; Coniah is "never allowed to return" (2 Kings 25:27-30, death not recorded); Lachish Letter 6 is now "the words of the officials weaken the hands" with no place named (note 21:9 and chapter 21 deep).
18. Accepted. 25:26 note and the Sheshach section state the two points separately: the cipher puts Babylon last in the list; 51:7 independently pictures Babylon as the LORD's golden cup.
19. Accepted. 22:13 note now cites Aharoni's reports (Excavations at Ramat Rahel, 1962 and 1964) and Lipschits, Gadot, Arubas and Oeming (Near Eastern Archaeology 74, 2011), both verified in a library search; new source keys aharoni-ramat-rahel and lipschits-ramat-rahel-2011 (also dropped the unsupported date claims).
20. Accepted. Chapter 22 setting 22:20-23 rewritten; the 22:24-30 date view now says the perfect is debated; the 23:1-8 setting names one view and gives the other.
Lead decisions applied: dever is now "disease" at 21:6, 21:7, 21:9 and 24:10 (and in notes, variants and glosses); the 23:5-6/33:15-16 and 23:19-20/30:23-24 pairs have 23 as the model (see 7 and 8); 16:14-15 is the model for 23:7-8 (see 9). The wedding phrase at 25:10 now reads "the sound of the groom and the sound of the bride". The other Lead decisions fall outside this part (no "terror all around" or "declares/says" changes were needed here).
Cross-part for the lead: Ezekiel 33-39 notes quote Jeremiah 23:1 as "lose and scatter" and must read "destroy and scatter"; Jer 46-49 must change 48:38 to match 22:28 ("a jar no one delights in") and 49:32 (finding 10); Hosea 8:8 uses the same Hebrew phrase as 22:28 and should be checked; Jer 26-31 must change 27:7, 30:23-24; Jer 32-38 must change 33:15-16 and 33:16.
