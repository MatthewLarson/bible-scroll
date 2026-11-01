# Hostile review: Daniel 11-12 (part 11-12)

Reviewer read plain.txt, notes.json (60), variants.json (13), glosses.json, chapters.json, topics.json and sources.json against `texts/orig/Dan.json`, the Dead Sea Scroll transcription (`tools/dss.py Dan 11` and `Dan 12`), Swete's Old Greek and Theodotion (`tools/lxx.py Dan/Dat 11, 12`), the site's Isaiah, Matthew, Revelation and Daniel 8-10 Plain English Translation, and `content/proposals/prophets/terms.json`. Rashi on 11:30, 11:36 and 12:11 was checked on Sefaria. `VERBOSE=1 node tools/build.js --check Dan/11-12` gives 0 errors, 0 warnings.

## Verdict

The part is careful and mostly sound. The Hebrew is rendered closely, the history (Raphia 217, Panium about 200-198, Sidon 198, Magnesia 190, Apamea 188, Elymais 187, Eleusis 168, Tabae 164) checks out, and the neutrality of the 11:36-45 note and of the 12:2 note is good. Rashi's readings (Kittim as Romans, 11:36 as Rome, 12:11 tied to the 2,300) were verified. The 4Q114 "daughter of men" reading at 11:17 is real in the transcription, and the Old Greek reading "a daughter of a man" is confirmed. The citation of DJD XVI is real. The Smalcald Articles (Part II, Art. IV), Westminster 25.6, 32.2-3 and 33.2, Augsburg XVII, Catechism 675, 1035 and 1038, and Adventist Fundamental Beliefs 26 and 27 are all cited correctly. The problems are these.
- The lead decision on "the abomination that desolates" was not applied.
- Reader-facing text still contains first-person hedges ("I read the transcription, not the manuscript... check").
- The Michael and Antichrist cards have weak or missing sourcing, and the claim that "churches agree he is an angel" is overstated.
- The 1,290 "Claude's theory" box is arithmetically muddled and is not original.
- Several notes make statements that are false or unverified (note 38 on the Plain English Translation wording, the Seleucus II invasion of Egypt, "church fathers mostly read them as symbolic (Jerome)").
- Some Dead Sea Scroll differences at 11:1 and 11:16 and several Greek differences are not in the variants.
- A number of verses keep the ESV's sentence shape with synonym swaps.

Counts: **0 critical, 9 major, 22 minor** (31 findings).

## Major

**1. (major) Lead decision on the desolating abomination not applied.** plain.txt 11:31 ("set up the desolating abomination") and 12:11 ("the desolating abomination put in place"). The terms.json entry says "the abomination that desolates (11:31; 12:11)". The same wrong phrase is in topics.json (`abomination-of-desolation`: "set up the desolating abomination", "the desolating abomination"), in chapters.json chapter 11 summary ("sets up the desolating abomination") and in note 27's anchor. Hebrew 11:31 is `hashiqquts meshomem`, with the article and a participle.
Fix:
- Plain English Translation 11:31 and 12:11 become "the abomination that desolates".
- Change the same phrase in the summary and topic text.
- Note 27 must say (per the lead decision) that Matthew 24:15 (site Plain English Translation "the abomination of desolation") and Mark 13:14 quote the Greek rendering `bdelygma tes eremoseos`. It does not say this now.
- Keep 8:13 and 9:27 as they are.

**2. (major) Reader-facing first-person hedges, against the brief.**
- variants.json 11:17 `b`: "Check the printed edition (Ulrich, DJD XVI) before relying on either reading; I read the transcription, not the manuscript." This tells the reader to do the verification the page should have done.
- chapters.json chapter 11 "Witnesses read for this part": "I read ... I did not see the manuscripts".
- The 12:11 theory box: "I could not trace who first proposed it", "It is possible that I have the order of things wrong".
The brief allows one statement of which witnesses were read, but not "check this yourself" or admissions of doubt.
Fix:
- 11:17: write "reported in the Abegg-Bowley-Cook transcription (ETCBC dss); the editor of DJD XVI (Ulrich) should be checked", or, if it cannot be checked, drop the "to destroy him" remark. The difference is only `lehashchitah`/`lehashchito` (final he/waw), so it is a pronoun spelling and not worth the hedge.
- Reword the witness paragraph in the third person ("The witnesses used are...") with no personal doubt.
- Rework the theory box (see 6).

**3. (major) Michael card: unsourced answer, weak source, overstated claim.**
- chapters.json ch. 12 Michael card, Orthodox entry: the source list is empty (`[]`). The feast date (8 November) has no citation. Use a liturgical text or a catechism, for example the Synaxis troparion or Philaret's Catechism.
- Reformed entry: the Belgic Confession art. 12 says angels were created good. It does not mention Michael or Christ. The card therefore does not source the Reformed answer to Michael. Cite a Reformed source that speaks of Michael, or drop the claim that "the Reformed churches distinguish them from Christ".
- The statement "Churches agree he is an angel" (note 41) and "Most churches teach..." (topic `michael`) leave out the old Protestant exegesis that reads "Michael" in Daniel 12:1 as Christ. Matthew Henry reads the great prince as the divine Saviour, and the same is said of other Reformed commentators, perhaps Calvin; I could not retrieve Calvin's text, so a writer should check `calvin-daniel` before claiming agreement. At minimum soften "agree" to "the creeds and catechisms of most churches", and name the Henry reading.
- The Catholic entry cites CCC 328-330, which says nothing about Michael as a created archangel by name (329 does name Michael, Gabriel and Raphael; 330 describes angels as creatures). That is acceptable. The card still has no Lutheran entry, though a Lutheran source (Michaelmas, Luther) exists.
- Adventist: say that Fundamental Beliefs do not state it, and that the view comes from Ellen White and the denomination's commentary. Give the exact Great Controversy chapter. Note the card text "Adventist teachers" differs from the topic's "many Adventist writers". Align them.

**4. (major) Antichrist card (11:36-45): sourcing and coverage.**
- The Lutheran entry quotes the Smalcald Articles but cites only `luther-preface-daniel`. The key `smalcald` already exists in content/sources.json (line 391). Add it. The claim that Luther's preface "finds the Antichrist in the book's last visions" is vague and unverified. Cite LW 35 page and say what Luther says of ch. 11 (Antiochus, then the Antichrist and the Turk).
- Orthodox is missing, although the brief names "the Orthodox reading". Orthodox teaching has a distinct, patristic Antichrist (Hippolytus, Cyril of Jerusalem) and does not call the pope Antichrist.
- The brief also names historic premillennial, amillennial and postmillennial views (Augustine, City of God 20.19, is amillennial) and the Adventist reading of the king of the north. None is present.
- The Westminster, London Confession and Smalcald entries speak of the pope as Antichrist. They do not speak of Daniel 11:36-45. Say so, so the card does not read as if these confessions interpret Daniel 11. Baptist is narrowed to one 1689 document; add that later Baptists (Southern Baptist Faith and Message) dropped it.
- The Catholic entry: "many Catholic scholars today read it of Antiochus IV" is uncited. Cite a named Catholic commentary or drop it.

**5. (major) Resurrection card: Orthodox answer sourced to one theologian's essay.** The Orthodox entry is sourced only to Ware ("Dare We Hope...") and the Creed. That is the dissenting minority view. The Church's own texts are the Confession of Dositheus (1672) and the Fifth Council's condemnation of Origenist universalism. These affirm the final judgment and eternal punishment. Present the Church's teaching first, then Ware as a stated hope that is not Church doctrine. "The Church does not teach it as doctrine" should be sourced. Also add the Nicene Creed as a source key, since it is quoted.

**6. (major) The "Claude's theory" 1,290 box (chapters.json ch. 12 spec box) is muddled, not new, and mis-stated.**
- The arithmetic does not support the theory. A schematic 360-day year is used for 1,260 and 1,290. Real lunar-solar years of 354 days over 3.5 years give about 1,239, or about 1,269 with one leap month. That is already near 1,260, so the extra 30 days is not "a leap month added to a 1,260 base". The box then says the 45 days "has no equal in the calendar" and concludes the theory "covers one of the two additions at most".
- The intercalary-month explanation for 1,290 is already published (popular and Christadelphian expositions found by search; commentaries mention it; the box admits this). It should not be a `spec` box. Convert it to a note citing who proposes it, or remove it.
- Remove "I" hedges (finding 2).
- The "numbers" deep section says "the church fathers mostly read them as symbolic (Jerome)". I could not verify this. Calvin reads the numbers symbolically. Jerome's commentary, as I recall it, takes the 1,290 and 1,335 as the Antichrist's literal 3.5 years plus 30 and 45 days. Verify with Archer's translation (`jerome-daniel`) or cite exactly.
- The same section ends "may be a quiet answer to its own failure to end on time: a correction written into the book". That is the critical view (Collins, Montgomery) stated as the page's own conclusion, unlabeled.

**7. (major) Note 38 (11:45) states the wrong Plain English Translation wording.** It says "The Plain English Translation says 'royal tents'". The Plain English Translation 11:45 says "the tents of his palace". The note also spells the word `'apadno`, `appadno` and `Apadno` in three places. Fix the wording and use one transliteration.

**8. (major) Note 27 (11:31) misstates the phrases.** "The same words appear in Daniel 9:27 and 12:11." They do not. The three Hebrew forms differ: 11:31 `hashiqquts meshomem` (article, polel participle), 12:11 `shiqquts shomem` (qal participle, no article), 9:27 `kenaf shiqqutsim meshomem` (plural, with "wing") and 8:13 `hapesha' shomem`. The lead decision requires each note to say what the Hebrew shows. Also 1 Maccabees 1:54 has `bdelygma eremoseos` with no `tes`. Theodotion's 11:31 reads `bdelygma ephanismenon` ("a made-invisible abomination"), unlike Theodotion 12:11. That belongs in a variant (see 14).

**9. (major) Note 7 (11:9): "Seleucus II Callinicus counter-attack in Egypt about 242 BC".** Ancient accounts of the Third Syrian War do not show Seleucus II entering Egypt. He retook some Syrian ground, then was defeated, and his fleet was wrecked (Justin 27.2). The Hebrew says "the king of the north will enter the kingdom of the king of the south". Say that the verse is read of Seleucus II's failed attack on Egyptian-held Syria (Collins), and that the sources do not show an entry into Egypt. The 'Who is who' list in the chapter summary also says "Seleucus II fails to answer in Egypt". Align.

## Minor

**10. (minor) Drift from ESV/NIV sentence shape.** I found 11 verses where the shape of the ESV or NIV is kept and only words are swapped.
- 11:4. "broken ... toward the four winds of the sky. It will not go to his offspring ... go to others besides them" follows the ESV order. The Hebrew order does force "four winds" and "uprooted". Break it: "His kingdom will be uprooted. Others, not his heirs, will take it. It will be split four ways, and none will have his power."
- 11:6. "come to the king of the north to make an agreement... she will be handed over... the one who fathered her... the one who backed her in those times" is ESV's list and order.
- 11:7. "enter the stronghold of the king of the north. He will deal with them and win" is close to ESV.
- 11:18. "turn his face to the coastlands and capture many of them" is almost the ESV clause.
- 11:30. "turn back... take action against the holy covenant... pay attention to those who forsake" follows ESV's order.
- 11:36. "act as he likes... raise himself up and make himself greater than every god... do well until the fury is finished, for what has been decided will be done" is ESV's four clauses, each with a synonym.
- 11:38-39. List order and the pairing "those who acknowledge him he shall load with honor" become "Whoever recognizes him, he will pile honor on". Also "put in charge of the many ... for a fee".
- 11:40. "chariots, horsemen and many ships ... enter countries, flood through them and pass on" mirrors ESV.
- 12:1. "a time of distress like none since there was a nation, right up to that time. And at that time your people will escape, everyone found written" tracks both ESV and NIV.
Rework the sentence order of these (move clauses, change subjects, split sentences) where the Hebrew does not force the shape.

**11. (minor) 11:16 "The newcomer".** Hebrew is `habba' elav`, "the one coming against him". "Newcomer" loses the hostile preposition and invents a meaning. Use "the invader" or "the one who comes against him".

**12. (minor) 11:37 "the one women long for".** `chemdat nashim` is read four ways in note 33, including "a king's passion for women". "The one" commits the Plain English Translation to a personal object. Keep the Hebrew's noun: "the desire of women", glossed, or "what women long for".

**13. (minor) 12:6 vs 12:7.** 12:6 "who hovered over the water" and 12:7 "who was above the water" translate the identical Hebrew `asher mima'al lemei hay'or`. "Hovered" is added. Use "above" both times.

**14. (minor) Term consistency.**
- `satam`: "keep the words secret" (12:4) vs "hidden" (12:9), while note 49 says the root means "stop up".
- `barar`: "purge" (11:35) vs "cleanse" (12:10) in notes 56 and 11:35.
- 12:12 Plain English Translation "holds on" vs note 58 title "Blessed is the one who waits" (Hebrew `hamechakkeh`).
- 12:7 `yad` "strength" has no gloss or note.
Make the two passages match; note the Hebrew `yad` "hand".

**15. (minor) Missing or incomplete variants.**
- 11:1: 4Q114 reads `'amadti` "I stood" for MT `'omdi` "my standing". Theodotion reads `estên` "I stood". Both support "I" and both are missing. The existing 11:1 variant only records the Darius/Cyrus difference.
- 11:16: the transcription flags 4Q114 `bi'uzzo` for MT `beyado` ("in his hand"). I did not check this against DJD XVI. It could be a mis-transcription. The variant, or a line in the DJD-sourced note, should say the scroll readings were examined and why they were not adopted.
- 11:31: Theodotion `bdelygma ephanismenon`, `to hagiasma tes dynasteias` ("the sanctuary of power", for `hamma'oz`), and the Old Greek `to hagion tou phobou`. The last is mentioned only in a note.
- 12:2: Old Greek "sleeping in the breadth of the earth" (`en to platei tes ges`) for "dust". Not noted.
- 11:14: the Old Greek is wholly different ("he will rebuild the fallen of your nation... the prophecy"). Not in a variant.
- The deep note says the scrolls "agree with the Masoretic Text except for spelling and the differences listed in the variants (11:1, 11:17)". That is wrong on 11:1, where 'amadti' is not listed, and on 11:16. Also 4Q112 preserves 11:13-16, not "11:13-17"; 4Q114 alone has 11:17.

**16. (minor) Note 10 and 11:10 variant.** Fine on Qere/Ketiv, but add that Theodotion reads "his sons" and the Old Greek "his son" (this is correct in variant 3). No fix needed beyond the wording at note 10, which says "the reading 'his sons' is the marginal reading (Qere)". Confirm against texts/auto before publish.

**17. (minor) Chapter 11 "X" lens is garbled.** "The early church followed Jerome's report that Porphyry read the chapter as Antiochus, and answered him by making Antiochus a type of the Antichrist". The early church (Hippolytus about AD 200) read the Antichrist before Porphyry (died about 305) and before Jerome (AD 407). Jerome reports both views. Rewrite: "Hippolytus and later fathers read 11:36-45 of the Antichrist; Porphyry replied that it was all Antiochus; Jerome reports both and takes Antiochus as the type."

**18. (minor) Chapter 11 "F" lens editorializes.** "11:41 names Edom, Moab and Ammon, nations that no longer exist" is stated as fact and as an objection, in the lens where the other lenses carry no objection. Futurists identify the region with modern Jordan. Present it as the objection of critics and the reply of futurists, or delete.

**19. (minor) Chapter 11 reading 1.** "with a precision that has no equal in the Bible" and "Defenders such as E. J. Young, Joyce Baldwin and Gleason Archer value it as the clearest proof that God knows the future" have no source. Baldwin in particular is more cautious. Cite or soften.

**20. (minor) Setting 12:5-13 splits the speaker.** "by: the man in linen clothes (12:6-7) and the heavenly messenger (12:9-13)". In the Hebrew, Daniel addresses the man in linen ("my lord", 12:8) and the same speaker answers (12:9). Note 51 itself identifies the man in linen with 10:5-6. Name one speaker, or say that the identity of the speaker of 12:9-13 is debated.

**21. (minor) Note 36 (11:41).** "A king marching from Syria to Egypt along the coast would pass them by on the east" is garbled. Edom, Moab and Ammon lie east of the Jordan, so he would pass them on his east side. Rewrite.

**22. (minor) Note 40 (11:45).** "The 'end' (qets) here is his own end, not the end of the age" is stated flatly, in a part whose job is neutrality at 11:36-45. The Hebrew `ad qitso` is "his end" and futurists read it as the end-time king's end. Say "on the Antiochus reading his own end; on the futurist reading the end of the age".

**23. (minor) Note 44 (12:2).** "'Asleep' is the Bible's word for the dead (Daniel 12:13...)". 12:13 says "rest" (`tanuach`), not "sleep". Cite Daniel 12:2 itself, Job 14:12, 1 Kings 2:10 and 1 Thessalonians 4:13.

**24. (minor) Note 16 (11:20).** "The king was 'broken' within a few days of the event" runs together Heliodorus' mission (about 176 BC) and Seleucus IV's death (175 BC). Say "soon after".

**25. (minor) Note 19 (11:24).** "'Plan his plans against the fortresses'" is a garbled quotation of the Plain English Translation ("He will plot against the fortresses"). Quote it exactly.

**26. (minor) Note 51.** "Above the river, a sign of authority" is speculation presented as fact. Label it or drop it.

**27. (minor) Note 9 (11:11).** Polybius 5.79 gives Ptolemy about 70,000 foot and 5,000 horse and Antiochus about 62,000 foot and 6,000 horse. "Similar size" is acceptable but give the figures if the first is given. The 3 Maccabees story is also told with a mixed label ("a book some churches count as Scripture and others do not"). Name who accepts it (Orthodox, per works.json).

**28. (minor) The `readings`/sources keys in note anchors.** Anchor 11:1 (note 0) spans "a strength and a stronghold to him"; the interpretive question is "him", which is two words earlier in the Hebrew. Anchor on "him".

**29. (minor) Glosses.** 12:7 gloss "the holy people → God's people, Israel" decides the identity the Plain English Translation leaves open (note 54 and the Maccabean/Adventist/dispensational views differ). Use "God's people". The 11:28 gloss "the holy covenant → the Jewish faith and its law" is a Maccabean reading (the sixth-century reader's covenant is the same, but state "the covenant between God and Israel").

**30. (minor) Topics.** topics.json `maccabean-revolt` ("the Bible's closest prophetic account", "which the author sees with mixed feelings") assumes the critical authorial reading. Make it neutral ("whether read as prophecy or as history written after the event"). The `michael` topic and the card use different wording for the Adventist view. Align.

**31. (minor) Cross-reference gaps.** Chapter 12 echoes do not include Daniel 7:10, 7:25-27 and 9:26-27 (the trouble and the abomination), Ezekiel 9 (the man in linen is in note 51 but not the echoes line), Isaiah 53:10-12 beside 12:3, or Revelation 20:11-15 beside 12:1 (it lists 20:12-15). Chapter 11 echoes omit Isaiah 14 and Ezekiel 28 (the self-exalting king, 11:36-37), 2 Maccabees 9 and 1 Maccabees 6 (the king's death), and Matthew 24:15 beside 11:31 in the `r` field of the plain notes. Add them.

## Checked and found sound (no action)
- Raphia 217, Panium about 200 (198 alternative), Sidon 198, Magnesia 190, Apamea 188, Elymais 187, Heliodorus, the first Egyptian campaign 170, Eleusis 168 with Polybius 29.27 and Livy 45.12, Kislev 167 and 164 dates, Tabae (Polybius 31.9), Josephus Ant. 12.3.3 and 12.5.4, Appian on Heliodorus, 1 Maccabees and 2 Maccabees references.
- Rashi on 11:30 ("Romans"), 11:36 ("the kingdom of Rome") and 12:11 (the 1,290 tied to the 2,300) verified on Sefaria.
- Isaiah 53:11 "put the many in the right" and 66:24 "horror to all flesh" match the Daniel Plain English Translation exactly. Isaiah 52:13 is "will succeed" and note 47 is consistent. Matthew 24:15, Matthew 13:43, Psalm 69:28 and Revelation 10:5 quotes match the site Plain English Translation.
- Old Greek and Theodotion readings in variants 0-12 match Swete's print (11:1, 11:6, 11:10, 11:17, 11:30, 12:1, 12:2, 12:3, 12:4, 12:7, 12:11, 12:13), with the omissions listed in finding 15.
- Fundamental Beliefs 26 and 27 numbering is right. Catechism 675, 1035 and 1038, Augsburg Confession XVII, Smalcald Part II Art. IV, WCF 25.6, 32.2-3, 33.2 and 2LBCF 26.4 match the quoted wording.
- No instance of "from memory" appears in reader-facing text.

## Fixes applied

1. Accepted. Plain English Translation 11:31 and 12:11 now read "the abomination that desolates" (12:11 "was set up"). Chapter 11 summary, the `abomination-of-desolation` and `maccabean-revolt` topic text and the 11:31 notes changed to match. Note 27 now gives the four Hebrew forms (11:31 article plus polel participle; 12:11 `shiqquts shomem`; 9:27 plural "abominations" and a person; 8:13 `hapesha' shomem`) and says Matthew 24:15 (site Plain English Translation) and Mark 13:14 quote the Greek `to bdelygma tes eremoseos`; 1 Maccabees 1:54 has no article. The sound-play on `ba'al shamem` moved to a new second note (anchor "set up") to keep note length down. 8:13 and 9:27 left as they are.
2. Accepted. 11:17 variant now says only what the transcription preserves ("men"; "daughter" is restored) and drops the "check it yourself" and "to destroy him" remarks. The witnesses paragraph is third person with no doubt. The theory box is gone (6).
3. Accepted, with limits. Orthodox entry sourced to the OCA feast texts (`oca-synaxis-michael`). Reformed entry now says Belgic Confession art. 12 speaks only of angels as creatures and names no Michael, and cites Matthew Henry (checked at CCEL) for the Christ reading. "Churches agree" removed from note 41 and the topic; both name the Catholic and Orthodox view, the JW and Adventist view, and Henry. Adventist entry says the Fundamental Beliefs do not mention Michael and cites Ellen White, The Great Controversy ch. 39; the topic uses the same wording. Calvin not cited: his text could not be retrieved. Lutheran entry not added: no Lutheran text on Michael could be verified.
4. Partly accepted. Lutheran entry now sources the Smalcald Articles (`smalcald`) and says the article is about the pope and does not comment on Daniel 11; the unverified claim about Luther's Preface is removed. Orthodox entry added (Hippolytus, Cyril of Jerusalem). Augustine (City of God 20.19, amillennial) added to the Catholic entry. The Westminster, London and Smalcald entries now say they do not interpret Daniel 11; the Baptist entry notes the Baptist Faith and Message (2000) drops the sentence. The uncited "many Catholic scholars" claim is removed. Not added: historic premillennial, postmillennial and Adventist readings of the king of the north, because no church text on Daniel 11:36-45 could be verified and the build's tradition list has no such labels.
5. Accepted. Orthodox entry now leads with the Nicene-Constantinopolitan Creed (new key `nicene-creed-381`), the Confession of Dositheus Decree 18 and the Fifth Council's anathemas against Origen, then presents Ware as a stated hope that is not Church doctrine.
6. Accepted. The spec box is deleted. The leap-month idea is a labeled "proposal" in a note at 12:11 with the corrected arithmetic (about 1,239 days, about 1,269 with one leap month; nothing explains the 45). The false "fathers mostly symbolic" line is replaced by Jerome's actual reading (read at tertullian.org: the 1,290 as the Antichrist's persecution, the 45 days a delay to test the saints). The "quiet answer to its failure" sentence is attributed to the critical view (Collins).
7. Accepted. Note 38 now says "the tents of his palace" and uses `'apadno` throughout.
8. Accepted (see 1).
9. Accepted. Note at 11:7 now says Seleucus II's attack on Ptolemaic-held Syria failed (fleet lost, Justin 27.2) and that the sources do not show him in Egypt; the "Who is who" line matches.
10. Accepted. Rebuilt from `literal.js` with new sentence shapes: 11:4, 11:6, 11:7, 11:18, 11:30, 11:36, 11:38, 11:39, 11:40, 12:1. Note and gloss anchors updated.
11. Accepted. 11:16 "The one who comes against him".
12. Accepted. 11:37 "the desire of women", with a gloss; note preview no longer says "Nobody knows".
13. Accepted. 12:6 and 12:7 both "above the water of the river".
14. Accepted. 12:4 and 12:9 "shut up"; 11:35 and 12:10 "purge"; 12:12 "the one who waits"; 12:7 "strength" glossed as Hebrew "hand".
15. Accepted. New variants: 11:1 `'amadti` (4Q114 and Theodotion `estên`; Old Greek differs), 11:14 (Theodotion and Old Greek), 11:16 (4Q114 form against 4Q112 and both Greek versions; 4Q114 "in his strength" against "in his hand"), 11:31 (Theodotion "sanctuary of power", Old Greek "holy place of fear"; Old Greek `bdelygma erêmôseôs`, Theodotion `bdelygma êphanismenon`), 12:2 (Old Greek "breadth of the earth", Theodotion "mound of earth"). Restored words are not counted. Witness note corrected (4Q112 11:13-16; 4Q114 alone 11:17; differences at 11:1, 11:16, 11:17).
16. Checked, no change: texts/auto confirms Ketiv "his son", Qere "his sons" at 11:10.
17. Accepted. Chapter 11 lens X rewritten (Hippolytus, Porphyry, Jerome in order).
18. Accepted. Lens F presents Edom, Moab and Ammon as the critics' objection with the futurist reply.
19. Accepted. "precision with no equal" removed; Baldwin dropped; the claim is stated as the defenders' own view (Young, Archer).
20. Accepted. The 12:5-13 setting names the man in linen as speaker and says the Hebrew does not mark a change at 12:9.
21. Accepted. Note at 11:41 rewritten (the three nations lie east of the Jordan, so a coastal march leaves them to the east).
22. Accepted. Note at 11:45 gives both readings of `ad qitso`.
23. Accepted. Note at 12:2 cites Daniel 12:2 itself, Job 14:12 and 1 Thessalonians 4:13 and says 12:13 has "rest". The unverified Calvin remark in that note is also removed.
24. Accepted ("soon after").
25. Accepted (exact quotation).
26. Accepted: the speculation about the man's place above the river is replaced by a statement that the Hebrew does not say.
27. Accepted. Polybius 5.79 figures given (new key `polybius-raphia`); 3 Maccabees is named as Scripture for the Orthodox churches.
28. Accepted. Note 0 is anchored on "him".
29. Accepted. Glosses: 12:7 "God's people"; 11:28 "the covenant between God and Israel" (note text too).
30. Accepted. `maccabean-revolt` is neutral between the two datings; `michael` and the card use the same Adventist wording.
31. Accepted. Echoes added: Daniel 7:10, 7:25-27, 9:26-27, Ezekiel 9, Isaiah 53:10-12, Revelation 20:11-15 (ch. 12); Isaiah 14:13-14, Ezekiel 28:2, 1 Maccabees 6:1-16 (ch. 11); Matthew 24:15 and Mark 13:14 in the 11:31 note `r`; 2 Maccabees 9 in the 11:45 note.
