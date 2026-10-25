# Hostile review: 1 Chronicles 21–29 (part 21-29)

Reviewed: `plain.txt` (all 260 verses against `node tools/literal.js 1Ch 21`–`29`), `notes.json` (156), `variants.json` (14), `glosses.json` (71), `chapters.json` (9), `topics.json` (22 contributions), `sources.json` (9 keys), and the new core topic `content/topics/priestly-divisions.json`. Chapter 21 was checked line by line against `node tools/literal.js 2Sa 24` and the site's 2 Samuel 24 Plain, notes and variants; 29:22–28 against the site's 1 Kings 1–2. Greek readings were checked where possible in Brenton's English Septuagint (Vaticanus-based) at blueletterbible.org and the Brenton Greek at freely-given.org. `node tools/build.js --check 1Ch/21-29`: 0 errors, 0 warnings (quotation check included).

## Verdict

This is a strong, careful part. The translation is faithful and readable, follows its stated text almost everywhere, and shows no NIV/ESV drift I could find; the few close matches (29:11, 29:15) are the Hebrew word order that the KJV already has. The parallel rule has been handled well: most shared lines with 2 Samuel 24 use the site's Samuel wording exactly, and most real Hebrew differences (21:8, 21:10, 21:12, 21:13, 21:15, 21:17, 21:19) are carried into the English and explained. 29:27 matches 1 Kings 2:11 exactly, and 22:13 and 28:20 match Deuteronomy 31 and Joshua 1. The fairness topics (Satan at 21:1, 28:19, the gold sums, the darics, the doxology) are handled with real balance, and both Claude theory boxes are labeled and state where published work overlaps. The problems are concentrated in four places. (1) One silent name normalization breaks the site's name policy (26:28). (2) One of the three departures from the MT names the wrong witness (25:3). (3) Two factual slips in the notes cite the wrong Hebrew (21:30, 24:6). (4) The Greek differences in the lists of chapters 26–27 and at 29:22 are under-recorded in `variants.json`; three of them I could confirm in Brenton. The singers' chapter also skips the existing `temple-singers` topic. No critical findings.

## Findings

### Major

**1. Major: plain.txt 26:28 (and variants.json 26:25 `why`). Shelomith silently changed to Shelomoth.**
The Hebrew of 26:28 reads עַל־יַד־שְׁלֹמִית וְאֶחָיו, "under the hand of Shelomith and his relatives." It has no Ketiv/Qere here (texts/auto lists K/Q only at 23:9 and 26:25). The Plain prints "Shelomoth." The only disclosure is a sentence in the `why` of the 26:25 variant ("The Plain English uses Shelomoth throughout 26:25–28"), and no entry is anchored at 26:28. The site's policy is to give each name in the Hebrew form of that verse, with no silent normalizing. 26:25 is a different case: there the Ketiv שלמות really is in the text and is disclosed. The writer's reason (to let readers see one person) is good, but it belongs in a note, not in a changed name. Evidence that makes a variant worthwhile: Brenton's Greek has "Salomoth" at both 26:25 and 26:28, so "Shelomoth" at 26:28 does have a witness.
*Fix:* Either print "Shelomith" at 26:28 and add a variant giving the Greek "Salomoth" (with a note that 26:25–28 is one man), or add a 26:28 variant that follows the Greek openly and list it among the departures from the MT. Then reword the 26:25 `why` so it no longer describes a normalization.

**2. Major: variants.json 25:3 "The missing sixth son." The witness for adding Shimei is overstated.**
The entry credits "One Hebrew manuscript and the Greek (Septuagint), as reported in BHS" and cites `rahlfs-lxx`. Brenton's Vaticanus-based Greek has only five names: "Godolias, and Suri, and Iseas, and Asabias, and Matthathias, six after their father." The BSB footnote says "some LXX manuscripts." This entry is one of only three places where the Plain departs from the MT, so its witness list has to be right.
*Fix:* Change the witness to "one Hebrew manuscript and some Greek manuscripts." Name them (Alexandrinus is usually cited) only after you have checked. Add "Codex Vaticanus (Brenton)" to the MT side, and drop or check the `rahlfs-lxx` citation. The decision to add Shimei can stand on 25:17 and the count "six."

**3. Major: notes.json 21:30 "Too afraid to go." Wrong Hebrew for 1 Samuel 28:21.**
The note says "<i>Niv'at</i> is the word for panic: Saul was terrified by an evil spirit (1 Samuel 16:14) and by the medium's vision (1 Samuel 28:21)." 1 Samuel 28:21 uses a different verb: וַתֵּרֶא כִּי־נִבְהַל מְאֹד (*nivhal*, from בהל). Also, Saul's terror there comes from Samuel's words, not "the medium's vision." 1 Samuel 16:14 (וּבִעֲתַתּוּ) is correct.
*Fix:* Replace 1 Samuel 28:21 with real uses of the niphal of בעת, such as Haman "was terrified" (Esther 7:6, וְהָמָן נִבְעַת) or Daniel's "I was terrified" (Daniel 8:17). Update `r` to match.

**4. Major: notes.json 24:6 "Ahimelech and Abiathar." The manuscript claim about 18:16 is reversed.**
The note says 1 Chronicles 18:16 is a place "where many Hebrew manuscripts read Abimelech." The Leningrad text of 18:16 itself reads וַאֲבִימֶלֶךְ בֶּן־אֶבְיָתָר (Abimelech). The manuscripts and versions that differ read **Ahimelech**.
*Fix:* "and 1 Chronicles 18:16 (where the Masoretic Text has Abimelech, and many Hebrew manuscripts and the versions read Ahimelech)."

**5. Major: topics. Chapter 25 skips the existing `temple-singers` topic and puts its material on `music`.**
`content/topics/temple-singers.json` ("Asaph, Heman and Jeduthun") exists, and part 10-20 already contributes to it. This part's `music` contribution ("The temple musicians": the three guilds, 288 singers, Heman the visionary, the Psalm titles) is the temple-singers subject, nearly section for section. Chapter 25's `topics` list and the 25:2 and 25:5 notes do not tag it. That splits one subject across two pages, which STYLE forbids.
*Fix:* Move the singers material to a `temple-singers` contribution, leave `music` a short pointer (instruments, David the instrument maker, 23:5), add `temple-singers` to chapter 25's `topics`, and tag notes 25:1, 25:2, 25:5 and 25:7 with `"top":"temple-singers"`.

### Minor

**6. Minor: notes.json 29:22 "A second time," and no variant entry. The Vaticanus claim conflicts with Brenton.**
The note says "Codex Vaticanus and the Syriac are reported to lack 'a second time.'" Brenton, who translates a Vaticanus-based text, has "they made Solomon the son of David king a second time." The UBS translator's handbook says only that the phrase "is missing in some manuscripts of the Septuagint." Since some translators drop it, it qualifies for `variants.json`.
*Fix:* Say "some Greek manuscripts (and reportedly the Syriac)," not Vaticanus, unless you can check an apparatus (Brooke–McLean). Add a variant at 29:22 with MT followed.

**7. Minor: 27:18. Greek "Eliab" is in the note but has no variant entry.**
This was the writer's "unsure" item, and Brenton confirms it: "for Juda, Eliab of the brethren of David." A change of person's name that commentators accept is a significant variant.
*Fix:* Add a variant at 27:18 (MT "Elihu" followed; Greek "Eliab"). In the note, change "is reported to read" to "reads."

**8. Minor: missing Greek variants in the lists of chapters 26–27.** I confirmed each of these in Brenton:
- **26:16** "Shuppim." Greek: "They gave the lot for the second to Osa westward." It has Hosah alone and no Shuppim. The note on 26:16 argues for dittography from *ha'asuppim* but never mentions this witness, which is the best evidence for the note's own case. Make it a variant (MT followed), or at least cite the Greek in the note.
- **26:17** "On the east were six Levites." Greek: "Eastward were six watchmen in the day," which gives "a day" for the east as for the other sides. NRSV follows it.
- **27:24** "the record of the events." MT בְּמִסְפַּר דִּבְרֵי הַיָּמִים, "in the number of the chronicles." Greek: "not recorded in the **book** of the chronicles" (ספר for מספר). The Plain's "record" blurs the point. Add a variant, MT followed, and render the MT more literally ("never entered in the count of the annals of King David" or similar), or say that you follow the Greek.

**9. Minor: variants.json 25:9 "Joseph's twelve." The Greek is misdescribed, and the switch text is inconsistent.**
The entry says the Greek adds "he, his sons and his brothers, twelve" for Joseph. Brenton's Greek is arranged differently: "the first lot of his sons and of his brethren came forth to Asaph the son of Joseph, namely, Godolias: the second Heneia, his sons and his brethren being twelve." The Greek does have "his sons and his brothers" with the first lot, but the clean "…twelve" for Joseph is the BHS reconstruction. Also, the reading's `orig` and `en` give the order "he and his brothers and his sons," while its `plain` reads "he, his sons and his relatives."
*Fix:* Label the reading "Greek (partly) and BHS reconstruction," describe the Greek arrangement briefly, and make `plain` follow the `orig` order ("he, his relatives and his sons, twelve").

**10. Minor: variants.json 21:20 and 26:20. Update with readings now verified, and fix the 21:20 Plain.**
At 21:20, Brenton reads "Orna turned and saw the king; and he hid himself and his four sons with him." So the "not checked in an edition" disclaimer can go, and the Greek's other difference (Ornan himself hides) should be mentioned. At 26:20, Brenton confirms "the Levites their brethren," so drop "as reported." Separately, the Plain at 21:20 reads "the four sons with him," but the Hebrew is אַרְבַּעַת בָּנָיו, "**his** four sons."
*Fix:* "and his four sons with him were hiding."

**11. Minor: variants.json 23:9. Weak reason for following the Ketiv.**
The `why` says Shelomoth "keeps this Gershonite distinct from Shelomith the son of Izhar in 23:18." But 24:22 calls that same Izharite "Shelomoth," so the two forms do not mark two men; they alternate for one man, as the 26:25 entry itself says.
*Fix:* Give the real reason (it is the written text, and most modern versions print it) and drop the "distinct" argument.

**12. Minor: parallel rule, 21:23. A needless difference from 2 Samuel 24:22.**
Both verses have וְהַמּוֹרִגִּים … לָעֵצִים. The site's 2 Samuel reads "The threshing sledges and the oxen's gear can be the firewood." 1 Chronicles reads "the threshing sledges for the wood." The Hebrew of the shared phrase is the same, and only "the oxen's gear" is missing in Chronicles.
*Fix:* Align the two, for example "the threshing sledges for firewood," and coordinate with the 2 Samuel writer if Samuel is the one to change. (By contrast, "I am giving" for נָתַתִּי and the plural "burnt offerings" are correct differences.)

**13. Minor: parallel rule, 21:2 and 21:24. Two cross-part mismatches, best fixed on the Samuel side.**
(a) 21:24 and 2 Samuel 24:24 share לֹא כִּי קָנוֹ אֶקְנֶה. Chronicles renders the infinitive absolute ("No. I will surely buy it"); the site's 2 Samuel drops it ("No. I will pay you a price and buy it from you"). The shared words should read alike, and Chronicles' rendering is the more exact one.
(b) 21:2 "I want to know their number" correctly renders מִסְפָּרָם. The site's 2 Samuel 24:2 uses the same English for a different Hebrew phrase, מִסְפַּר הָעָם, "the number of the people." Copying the wording hides a real difference.
*Fix:* Keep the Chronicles wording, and report both to the 2 Samuel 19-24 writer.

**14. Minor: parallel rule, 21:16. The second sentence differs from the 2 Samuel variant without explanation.**
The note correctly says the first sentence matches the 4QSam-a plus given in the 2 Samuel 24:16 variant word for word. The second sentence does not match: 1 Chronicles has "David and the elders fell on their faces, covered in sackcloth," while the 2 Samuel variant has "And the elders, covered in sackcloth, fell on their faces." The Hebrew differs (Chronicles has וַיִּפֹּל דָּוִיד; the scroll, as reconstructed, apparently has only the elders).
*Fix:* Add a sentence to the 21:16 note saying the scroll is reported to lack "David" and to differ in word order, so the English differs.

**15. Minor: plain.txt. Small additions to the text.**
- **21:28** "That was when David **began** to sacrifice there": Hebrew וַיִּזְבַּח שָׁם, "he sacrificed there." The habitual sense is interpretation and belongs in a note.
- **23:4** and **28:19** insert "David said." The Hebrew has no speech verb in either place (the 23:5 "I made" implies a speaker). If you keep it, add a note.
- **28:18** "the cherubim that spread **their wings**": the Hebrew is only "for spreading out and covering."
- **21:11** "Take **one** for yourself": the Hebrew is only קַבֶּל־לָךְ.
- **21:22** "Let me have it" renders a second תְּנָה/תְּנֵהוּ, "give it to me." The repetition of "give" is lost.

**16. Minor: plain.txt 27:23. "Those twenty years old and under" is inexact.**
לְמִבֶּן עֶשְׂרִים שָׁנָה וּלְמָטָּה in a census context means "below twenty" (the count was "twenty and up," Numbers 1:3; 23:24). "Twenty and under" leaves twenty-year-olds both counted and uncounted.
*Fix:* "Those under twenty David did not count."

**17. Minor: plain.txt 21:8. Awkward and slightly wrong syntax.**
"What I have done in this thing is a great sin" treats "this thing" as a setting. In the Hebrew (אֲשֶׁר עָשִׂיתִי אֶת־הַדָּבָר הַזֶּה) it is the object of the verb.
*Fix:* "In doing this thing I have sinned greatly." Or keep the 2 Samuel frame and add the object: "What I have done, this thing, is a great sin."

**18. Minor: consistency of key words within the part.**
- **nefesh.** 22:19 has "heart and your being," following terms.json. 28:9 has "a willing **soul**," though the pair is again heart + *nefesh*. Use "being."
- **lev shalem.** It appears as "an undivided heart" (28:9), "whole hearts" (29:9) and "a whole heart" (29:19). Pick one.
- **tif'eret.** It is "the beauty" in 29:11 and "splendor" in 29:13 (*shem tif'artekha*).
- **yetser machshavot.** It is "every scheme the mind shapes" in 28:9 and "the shape of the thoughts" in 29:18. The 28:9 note itself ties the two together.
- **shafakh dam.** It is "shed" twice and "poured out" once in 22:8, and "poured out blood" in 28:3. Same verb each time.
- **otsrot.** "Treasuries" and "storehouses" both render the same word inside 27:25.
- **achim.** It is "kinsmen" in 23:22, 23:32, 24:31 and 28:2, and "relatives" in 25:9–31 and 26:7–32.

**19. Minor: plain.txt 28:9. "Scheme" sharpens a neutral phrase.**
*Yetser machashavot* is neutral ("every plan of the thoughts"). "Scheme" in American English implies plotting. The note itself says the point is "the very forming of intentions."
*Fix:* "every plan the mind forms."

**20. Minor: 21:22–25. "Silver" against the gold payment is not explained.**
The Plain twice has David offer "full price in **silver**" (בְּכֶסֶף מָלֵא), then pay in gold (21:25). *Kesef* also means "money." Keeping "silver" is right for the Genesis 23:9 echo, but a reader will see a contradiction.
*Fix:* Add one sentence to the 21:22 note: "<i>Kesef</i> means both 'silver' and 'money'; David then pays in gold (21:25)."

**21. Minor: notes.json 29:29.** "The three titles … the very titles 1 Samuel 9:9 explains." 1 Samuel 9:9 explains only *ro'eh* and *navi*. *Chozeh* is not there.
*Fix:* "two of which 1 Samuel 9:9 explains."

**22. Minor: notes.json 29:14.** "present the offering with the KJV words, 'All things come of thee, O Lord, and of thine own have we given thee.'" The KJV of 29:14 has no "O Lord"; that form is the Book of Common Prayer's offertory sentence.
*Fix:* "with words from the KJV, 'All things come of thee, O Lord …'," or quote the KJV exactly.

**23. Minor: notes.json 29:11 "Five words of praise."** "the source for the names of six of the ten sefirot." In the usual kabbalistic reading the verse supplies the **seven** lower sefirot: the five nouns, "all" (*ki khol*, read as Yesod) and "the kingdom" (Malkhut). The 29 VIEW J line ("The five nouns … gave names to the sefirot") is fine.
*Fix:* "seven of the ten."

**24. Minor: notes.json 25:4.** The reconstructed prayer gives *dibbarti*, "I spoke," for **Mallothi**. The reconstruction reads the name itself (*malloti*, "I have uttered," from מלל). *Dibbarti* is a different word, so the transliteration no longer shows how the names make the line.
*Fix:* Replace *dibbarti* with *malloti*.

**25. Minor: notes.json 27:7.** "Abner killed Asahel … seven years before David became king over all Israel." Asahel died in the war during Ish-bosheth's two-year reign (2 Samuel 2:10–23), and David ruled Judah seven and a half years. The gap is not known to be seven years.
*Fix:* "years before."

**26. Minor: notes.json 25:2, 26:1 and chapters.json 26.**
(a) 25:2 lists the sons of Korah psalms as "Psalms 42–49," but Psalm 43 has no title. Write "42; 44–49."
(b) The 26:1 note renders Psalm 84:10 "stand at the threshold." The chapter 26 VIEW J and VIEW X quote "doorkeeper" (the KJV/NIV word) without a label. Use one rendering, or label the KJV.

**27. Minor: fairness. The Lord's Prayer doxology gives the consensus but not who dissents.**
Note 29:11, the chapter 29 deep section and the `prayer` topic say "most scholars think the church added it," which is correct and well sourced (Didache; Metzger). STYLE asks that consensus name who dissents. Defenders of the Byzantine or Textus Receptus text (for example Maurice Robinson's Byzantine-priority position) hold the doxology original or very early. One sentence is enough.
Related point: the temple-topic Claude box says the site–mercy link "is often noted for 2 Samuel 24" but names no one. Naming one commentary would make the overlap statement checkable. (The chapter 21 box does this well: Japhet and Klein.)

**28. Minor: glosses.json.**
- **21:8** "I acted like a complete idiot" is flippant next to David's confession. "I acted very foolishly" or "I've been a total fool" is better.
- **26:18** "the Parbar => the colonnade" presents a debated word as settled. Use "the outer court (meaning uncertain)."
- **29:15** "there is no hope => nothing lasts" glosses the KJV's alternative ("none abiding"), not the Plain's chosen sense, which the note gives as "no hope of staying on earth." Use "no hope of staying."

**29. Minor: sources and topic mechanics.**
(a) STYLE puts Josephus in the shared `content/sources.json`. `josephus-life` should go there, beside `josephus-ant`, not in this part's file. The other eight keys are real works with correct details (Sailhamer TrinJ 10, 1989; Stokes JBL 128, 2009; Williamson VT 26, 1976 and VTSup 30, 1979; McCarthy JBL 90, 1971; Kleinig JSOTSup 156; Avi-Yonah IEJ 12, 1962; Maisler JNES 10, 1951).
(b) `priestly-divisions.json` is a sound new topic with no duplicate (`priesthood` has no section on the courses). But its core section and this part's contribution tell the same story almost sentence for sentence (Nehemiah, Mattathias, Josephus, Mishnah Taanit 4:2, Luke, Caesarea). Keep the core whole-Bible and short, and let the contribution carry the Chronicles detail. The core could also cite its Josephus places (*Life* 1–2; *Antiquities* 7.365–366) and the Qumran texts (4Q320–330), as the notes do.

**30. Minor: notes.json 21:3.** In prose the reference list "Ezra 9:6–7, 9:13, 9:15; 10:10; 2 Chronicles 24:18; 28:13; 33:23" relies on carry-over. STYLE asks that every other book be named each time ("2 Chronicles 28:13; 2 Chronicles 33:23"). Otherwise the bare "28:13" and "33:23" risk being read as this book. The build does not flag it, but the `r` list is also thinner than the prose (it omits 2 Chronicles 33:23 and Ezra 10:10).

## Checked and found sound (no action)

- **Satan at 21:1.** The four views are given in their strong forms, with named holders (Japhet, Sailhamer, Day, Stokes). David's own responsibility is kept (21:17). The `satan` topic contribution matches.
- **28:19.** Three readings, with a fair "not wholly exclusive" close. The 28:12 note on *ruach* is accurate about the BSB/ESV, KJV and NIV renderings.
- **Gold sums** (22:14, 29:4). Weights are right (a talent is about 34 kg; 3,000 talents is about 100 t). The comparisons (1 Kings 10:14; 2 Kings 18:14) are right, and the three views are fairly labeled.
- **Darics** (29:7). The Lydian coinage and the Darius I date of about 515 BC are correct. The traditional "updating" view is given fairly, and the Bava Batra 15a ascription to Ezra is right.
- **Talmud and Mishnah references** checked: Berakhot 62b (what the LORD saw), Hullin 24a, Berakhot 26b, Middot 3:4, Taanit 4:2, Tamid 7:4, Bava Batra 14b–15a, Berakhot 3b–4a, Avot 3:7.
- **Facts checked:** Ezra 2:40–42 (341), Numbers 4:48 (8,580), the Tell Qasile Ophir ostracon, the suspended *nun* in Judges 18:30, *talmid* occurring only once, Josephus' eighty-year reign for Solomon (*Antiquities* 8.211), the Didache doxology, and the Torah-procession use of 29:11.
- **No NIV/ESV drift found** in a verse-by-verse comparison. The terms in terms.json are followed: chozeh/ro'eh in 21:9, 25:5 and 29:29; segullah in 29:3; kapporet in 28:11; mitzvot/edot/chuqqim in 29:19; nagid in 28:4 and 29:22; ger in 22:2.
- **Per-verse name forms are respected everywhere except 26:28:** Shebuel/Shubael, Uzziel/Azarel, Zeri/Izri, Asarelah/Jesharelah, Jeremoth/Jerimoth, Meshelemiah/Shelemiah.

## Fixes applied

Applied 2026-10-23 by the 21-29 writer. Greek readings marked "as translated by Brenton" rest on the reviewer's check of Brenton; a new part source key, `brenton-lxx`, cites it.

**Major**
1. 26:28 now prints Shelomith, the Hebrew form. A new 26:28 variant gives the Greek "Salomoth" (MT followed). The 26:25 `why` no longer describes a normalization.
2. 25:3: the witness is now "one Hebrew manuscript and some Greek manuscripts". Codex Vaticanus (Brenton) is added on the MT side, `rahlfs-lxx` is dropped, and the decision rests on "six" and 25:17.
3. 21:30: 1 Samuel 28:21 is replaced by Esther 7:6 and Daniel 8:17, with `r` updated.
4. 24:6: the note now reads "where the Masoretic Text has Abimelech, and many Hebrew manuscripts and the versions read Ahimelech".
5. New `temple-singers` contribution for chapter 25. `music` is cut to a short section on David's instruments (23:5) that points to it. `temple-singers` is added to chapter 25's topics. Notes 25:1 (commanders), 25:2 and 25:5 (visionary) are tagged `temple-singers`.

**Minor**
6. 29:22: the Vaticanus claim is gone ("some Greek manuscripts, and reportedly the Syriac"). New variant, MT followed.
7. 27:18: new variant (Elihu kept; Greek Eliab). The note now says "reads".
8. New variants, MT followed in each:
   - 26:16: Greek lacks Shuppim; the note now cites it.
   - 26:17: Greek "six a day".
   - 27:24: Greek "book". The Plain is now literal: "was never entered into the count in the annals of King David".
9. 25:9: the Greek is labeled "in part" plus the BHS reconstruction, and its arrangement is described. `plain` now follows the `orig` order.
10. 21:20: the "not checked" text is removed and the Greek's "he hid himself" is added. The Plain restores "his four sons", and the note now says it is Ornan's sons who hide. 26:20: "as reported" dropped.
11. 23:9: the `why` is rewritten. The forms alternate for one man; the Ketiv is followed because it is the text itself.
12. 21:23: now "the threshing sledges for firewood".
13. 2 Samuel 24 Plain, edited in part 2Sa/19-24 as the coordinator allowed:
   - 24:24: "No. I will surely buy it from you for a price."
   - 24:2: "I want to know the number of the people."
   No 2Sa note, gloss or variant anchor touched these words.
14. 21:16: the note now explains why the second sentence differs from the 2 Samuel variant (the scroll reportedly lacks "David" and orders the words differently).
15. Additions to the text:
   - 21:28: "At that time David sacrificed there, having seen ..." ("began" removed).
   - 28:18: "the cherubim, spreading out and covering the ark".
   - 21:11: "Accept for yourself".
   - 21:22: "Give it to me for its full price in silver".
   - "David said" is kept at 23:4 and 28:19, with a new 23:4 note and a sentence in the 28:19 note.
16. 27:23: "Those under twenty David did not count".
17. 21:8: "This thing I have done is a great sin". This keeps the 2 Samuel frame and adds the object.
18. Consistency:
   - nefesh is "being" (28:9).
   - lev shalem is "a whole heart" (28:9, 29:9, 29:19).
   - tif'eret is "beauty" (29:13 is now "your name in all its beauty").
   - yetser machshavot is "plan the thoughts form" (28:9, 29:18).
   - shafakh dam is "shed" (22:8, 28:3).
   - otsrot is "treasuries" (27:25).
   - achim is "relatives" (23:22, 23:32, 24:31, 25:7). Exception: 28:2 is "my brothers", because it is David's address to the assembly and "relatives" would mislead there.
   Anchors, glosses, the chapter 28 summary and the worship topic are updated to match.
19. 28:9: "discerns every plan the thoughts form". "Scheme" is gone.
20. 21:22: the note now has the kesef "silver/money" sentence.
21. 29:29: "two of which 1 Samuel 9:9 explains".
22. 29:14: "words adapted from the KJV of this verse".
23. 29:11: "seven lower sefirot", with Yesod (kol) and Malkhut explained.
24. 25:4: "malloti", "I have uttered".
25. 27:7: "years before".
26. (a) 25:2: "Psalms 42, 44–49". (b) Chapter 26 VIEW J no longer quotes "doorkeeper"; it paraphrases the threshold wish.
27. A dissent sentence (Maurice Robinson, Byzantine text) is added to note 29:11, the chapter 29 doxology section and the prayer topic. The temple Claude box now names McCarter for the site-and-mercy reading of 2 Samuel 24.
28. Glosses:
   - 21:8: "I've been a total fool".
   - 26:18: "the outer court (meaning uncertain)".
   - 29:15: "no hope of staying".
29. (a) `josephus-life` moved to content/sources.json, after `josephus-ant`, and removed from this part. (b) The priestly-divisions core is now the whole-Bible overview, citing Josephus *Life* 1–2, *Antiquities* 7.365–366 and Qumran 4Q320–330. This part's contribution now covers only what 1 Chronicles 24 adds: Eleazar and Ithamar, the lot, Shemaiah, Jehoiarib first and Abijah eighth, 24:19, and the same method in chapters 24–26.
30. 21:3: books are named at each switch, and `r` adds Ezra 10:10 and 2 Chronicles 33:23. The bare-reference warning at 21:20 is also fixed.

**Rejected:** none outright. One partial: the reviewer's item 5 also asked for note 25:7 to be tagged `temple-singers`. It keeps `priestly-divisions`, because its subject is the 24 × 12 pattern matching the priestly courses.

**Drift audit:** the rewritten verses were re-audited and logged in the scratch drift-audit.tsv. The first draft of 21:28 was close to one version's clause order and was reworded. 28:9's verb was changed to avoid a near match.
