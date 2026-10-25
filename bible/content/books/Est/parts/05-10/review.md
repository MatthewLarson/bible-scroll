# Hostile review: Esther 5–10 (part 05-10)

Scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json (including the settings cards), topics.json for this part, the Esther terms in content/terms.json, and the shared source keys this part uses in content/sources.json. book.json and part 01-04 are out of scope, except where this part has to match part 01-04's Plain.

Checks run: `node tools/build.js --check Est/05-10` and `--check Est` (both 0 errors, 0 warnings). I compared all 90 verses with `node tools/literal.js Est 5`–`10` and checked them against the NIV and ESV. I checked quotations against the site's Plain for Genesis, Exodus, Deuteronomy, Joshua, 1–2 Samuel, 1 Kings, Nehemiah and Esther 1–4. I verified the Septuagint (Rahlfs) for all of chapter 9 on blueletterbible.org (9:1–9:28a) and on bibelkommentare.de (9:28–32). I checked the Alpha Text and the Additions against the NETS Esther translation (Göttingen IOSCS PDF), checked Harbona in the Jewish Encyclopedia, and read Esther Rabbah 10:1 on Sefaria.

## Verdict

This is careful, well-sourced work. The translation is faithful to the Masoretic Text, verse by verse. It keeps the book's key repetitions ("the man the king takes pleasure in honoring", "annihilate, kill and destroy", "kept their hands off the plunder") and follows terms.json closely. Most historical and rabbinic claims check out: Herodotus, Thucydides, Plutarch, Livy, Xenophon, the Talmud passages, the colophon dates, and 2 Maccabees 15:36. Every source key is a real work with correct details. The weaknesses are of five kinds:
- **A Claude's-theory box with an undisclosed overlap.** The 6:1 box presents a link as new that Esther Rabbah 10:1 already makes.
- **Missing Greek variants.** Several Septuagint differences in 9:1, 9:13, 9:25 and 9:29–32 are now checkable and missing, and some of them bear directly on notes the part already makes.
- **A wrong claim about Addition D.** The part says it was written in Greek.
- **Process notes on the page.** Research notes ("checked on blueletterbible.org", "not checked ... in this session") have leaked into reader-facing text.
- **A handful of NIV/ESV echoes and small slips** in facts and quotations.

Nothing is critical. The settings cards are good on the whole, but the counter-decree card leaves out "all the peoples" of 8:13, and there are 17 cards, not 21.

**Counts: 0 critical, 5 major, 22 minor.**

## Findings

### 1. Major: the "Claude's reading" box in chapter 6 claims a link that Esther Rabbah already makes
- **Where:** chapters.json, ch. 6, spec box "The king who could not sleep, and the Keeper who does not sleep".
- **Problem:** The box says it builds on the Talmud and on "Esther Rabbah's link of this night to God's care", and that "what is added here is only the specific link to Psalm 121:4." That is not new. Esther Rabbah 10:1, commenting on "that night the king's sleep fled", itself quotes Psalm 121:4 ("Behold, the guardian of Israel neither slumbers nor sleeps") together with Psalm 44:24 ("Rouse yourself; why do you sleep, O Lord?"). The box even lists Psalm 44:23, the English numbering of that midrash's other verse, in its refs. Christian sermons on Esther 6:1 have also long paired it with Psalm 121:4.
- **Why it matters:** STYLE rule 4 requires a spec box to say where it overlaps published work. This box claims originality for a published reading.
- **Fix:** Either drop the box, or turn it into an ordinary `views`/`israel` note: "Esther Rabbah 10:1 sets this night beside Psalm 121:4 and Psalm 44:24." If a spec box stays, it needs a new idea, and it must cite Esther Rabbah 10:1 as the source of the Psalm 121:4 link.

### 2. Major: Greek variants now verified but missing (9:1, 9:13, 9:25, 9:29–32), plus Alpha Text readings
The Septuagint text of all of chapter 9 is available: blueletterbible.org/lxx/est/9 for 9:1–28a, and bibelkommentare.de/bibel/lxx/export/esther/9 for 9:28–32. NETS Esther prints the Alpha Text. These differences are missing from variants.json:

- **9:1.** The Septuagint has no "it was turned upside down" and no enemies who "had hoped". It reads only "the letters written by the king arrived" (παρῆν τὰ γράμματα τὰ γραφέντα ὑπὸ τοῦ βασιλέως). The 9:1 note calls *venahafokh hu* the two words that "sum up the whole book", so the reader should know the Greek lacks them. 9:2 is also shorter in the Greek: "on that day the opponents of the Jews perished."
- **9:13.** The Septuagint reads "let the Jews do likewise tomorrow, so as to hang the ten sons of Haman" (ὥστε τοὺς δέκα υἱοὺς κρεμάσαι Αμαν). In the Greek, the stated purpose of the second day is the hanging. That bears directly on the "vindictive or prudent" debate in the 9:13 note and the 9:12–13 card. The Alpha Text instead has Esther ask that the Jews be allowed "to destroy and plunder whomever they want", and it counts 700 dead in Susa and 70,100 in the kingdom (NETS). That reading is sharper than the Hebrew, and it reverses the plunder motif.
- **9:25.** The Septuagint reads "and how he [Haman] went in to the king, saying to hang Mordecai; but the evils he tried to bring on the Jews came on him, and he was hanged, he and his children." The 9:25 note discusses "when she came, or when it came?" but leaves out that the oldest translation makes the subject Haman.
- **9:29.** The Septuagint has no word "second". It reads "what they did, and the confirmation of the letter of Phrourai" (τό τε στερέωμα τῆς ἐπιστολῆς τῶν Φρουραι). The 9:29 note and the 9:29–32 card say "the Greek is different here" and that some delete "second" (Moore), without saying how.
- **9:30.** The verse is absent from the Septuagint, so "words of peace and truth" is missing there. That affects the 9:30 echo note (Zechariah 8:19).
- **9:31.** The Septuagint has no "fasts and their cries for help". It reads "Mordecai and Queen Esther established it for themselves ... against their health (ὑγιείας) and their counsel." This matters to the 9:31 note and the fasting topic, which rest the Fast of Esther on these words.
- **9:32.** The Septuagint reads "Esther established it by a word forever, and it was written for a memorial" (εἰς μνημόσυνον), not "in the book". That bears on the 9:32 "Which book?" note.
- **Optional:** Alpha Text 7:9 names the eunuch "Agathas", not Bougathan. Alpha Text 8:17 reads "many of the Jews were circumcised". Septuagint 9:20 says Mordecai wrote these words "in a book" (εἰς βιβλίον), which supports the reading in the 9:20 note.

**Fix:** Add entries for 9:1, 9:13 (with the Alpha Text as a third reading), 9:25, 9:29 ("second"), 9:30 (omission) and 9:31–32. Then update the notes and settings that depend on them (9:1, 9:13, 9:25, 9:29, 9:30, 9:31, 9:32, the 9:12–13 card) and the chapter 9 deep section "The Greek and the Alpha Text". Remove "The rest of 9:29–32 could not be checked online" from that section.

### 3. Major: the part wrongly says Addition D was composed in Greek
- **Where:** variants.json 5:1 `why` says "They were written in Greek (Addition D probably by the translator or an early editor)". The chapter 5 deep section and the topic text are neutral.
- **Problem:** The standard view, in Moore's Anchor Bible volume (which the entry cites) and in R. A. Martin's syntax study (JBL 94, 1975), is the opposite. Additions B and E were composed in Greek. Additions A, C, D and F were probably translated from a Hebrew or Aramaic original. NETS Esther notes that D is one of the additions that may have had a Hebrew or Aramaic source.
- **Fix:** Say that B and E were composed in Greek, and that A, C, D and F may go back to a Semitic original (Moore). For all six, keep that they are not in the Hebrew Bible.

### 4. Major: research-process notes in reader-facing text, and witness claims that contradict themselves
- **Where:**
  - variants.json `w` and `b` fields at 5:1, 5:2, 6:1, 6:13, 7:4, 7:8, 7:9, 8:9, 8:11, 8:12, 8:17, 9:5–9:29 and 10:3: "checked on blueletterbible.org", "it was not checked word for word online in this session", "the rest of 9:29–32 could not be read on the site".
  - chapters.json: ch. 8 deep ("it was not checked word for word online"), ch. 9 deep ("could not be checked online", "it was not checked directly here"), ch. 10 deep ("blueletterbible.org did not print them").
- **Problems:**
  - A reader sees a website name and a session log in place of a witness.
  - Two entries contradict themselves. At 8:12 and 10:3 the `w` field says "checked on blueletterbible.org" and, in the same field, that the site does not print the Additions.
  - The 6:1 Alpha Text reading is still labeled "not checked directly". NETS Esther confirms it: "But the Mighty One kept sleep from the king that night."
- **Fix:**
  - Name witnesses as STYLE requires, for example "Septuagint (Rahlfs; Göttingen ed. Hanhart)" or "Alpha Text (Hanhart; NETS)".
  - Where something is uncertain, state the uncertainty about the text, not about the writer's session.
  - Mark 6:1 (Alpha Text, "the Mighty One") as verified.
  - Delete every "in this session" or "online" remark.

### 5. Major: close NIV/ESV matches in the Plain
STYLE says close matches have to be redone. I quote only a few words of each version.
- **8:11.** Plain "of any people or province that might attack them" is word for word the ESV ("any people or province that might attack them"). Plain "the right to come together" also follows the NIV's "granted ... the right to assemble". Hebrew: *hatsarim otam*. Try "of any people or province that comes against them".
- **10:3.** Plain "He worked for the good of his people" is the NIV exactly ("he worked for the good of his people"). Hebrew: *doresh tov le'ammo*, "seeking good for his people". Try "He looked out for his people's good".
- **8:10.** Plain "the swift horses of the king's service, born of the royal mares" combines the ESV ("swift horses that were used in the king's service, bred from the royal stud") with the BSB ("bred from the royal mares"). "Royal" is not in the Hebrew for *ramakhim*, and the line now says "royal" twice. Try "They rode swift horses of the royal post, sired by fine mares", or similar.
- **Lesser echoes:** 5:1 "facing its entrance" (NIV and BSB "facing the entrance"). 7:4 "sold as slaves, men and women ... a loss to the king" (ESV "sold merely as slaves, men and women ... the loss to the king"). The 7:4 slave phrase is defensible, because it deliberately matches the site's Plain of Deuteronomy 28:68, and the note says so. But "a loss to the king" should go anyway, because the clause is also opaque at an 8th-grade level. A clearer line would be "since that trouble would not have been worth bothering the king".

### 6. Minor: the settings for the counter-decree (8:8–14)
- **Missing hearers:** The `to` field leaves out "all the peoples". 8:13 says a copy was to be "shown openly to all the peoples", so the would-be attackers were the decree's public audience, not only the Jews and the officials.
- **Missing purpose:** The `why` field leaves out the decree's plain purpose of public notice and deterrence, and the readiness of the Jews in 8:13.
- **Overstated purpose:** "It binds the officials to permit, and in effect to support" goes beyond the text. The officials' support in 9:3 comes "because dread of Mordecai had come down on them".
- **Range overlap:** 8:8 is the king's speech, not the decree. The 8:7 card should be 8:7–8, and the decree card 8:9–14.
- **Unfair label:** In `views`, "Mirror-image vengeance (Fox, Moore)" misrepresents Fox. He reads 8:11 as mirroring Haman's wording, and he stresses that the Jews then use less than they were allowed. He does not call it vengeance. Relabel it "Mirror-image wording".

### 7. Minor: other settings issues
- **Card count:** There are 17 cards, not 21: 3 in ch. 5, 5 in ch. 6, 3 in ch. 7, 3 in ch. 8, 3 in ch. 9, none in ch. 10.
- **Missing card for 9:14.** This is a royal law ("The law was given out in Susa"), and STYLE requires a card for every block of law. It should say whom it bound (the Jews of Susa, and the city), for how long (one more day), and what problem it answered.
- **Optional missing cards:** the king's question in 7:5 and his sentence in 7:9b ("Hang him on it"), and the king's tax decree in 10:1.
- **9:12–13 card:** "asks, for the fifth time in the book, what more Esther wants" is wrong. The king asks four times: 5:3, 5:6, 7:2 and 9:12. "The evening of the 13th" is an inference; the text says "on that day".
- **6:3 card:** "the personal servants reading the records to him" is an inference. The text says only that the records "were read", and that the young men answered.
- **9:29–32 card:** "sending 'words of peace and truth'". In 9:30 it is "he" who sends, that is Mordecai.
- **Repeated text:** The same `readers` sentence ("For Jews living among the nations of the Persian and later the Hellenistic world, scattered far from Judah, and every community that hears the scroll read aloud at Purim ...") opens four cards (5:3–8, 7:2–6, 8:8–14, 9:20–28). Vary it, and say something specific in each.

### 8. Minor: the 9:13 debate and the chapter 9 violence, fairness
- **Overall:** The three-way framing (self-defense, revenge, reversal) is fair and well sourced.
- **Revenge voices:** The revenge reading is represented only by Christian voices, Paton (1908) and Luther (*Table Talk*). Both are given without the context that commentators such as Levenson and Berlin stress: Luther's stated objection was that Esther and 2 Maccabees "Judaize too much". Give that context in one clause.
- **Jewish voices:** "Some Jewish readers too have wrestled with the chapter, especially after violence committed in the name of Purim's memory" is too vague to be useful. Either name the case (Hebron, Purim 1994) and a Jewish writer who has addressed the chapter's ethics, or cut the sentence.
- **9:13 note:** "Jewish readers have generally taken this view, and the rabbis do not fault her" needs a source, for example Esther Rabbah or a named medieval commentator, or it should be softened. The Septuagint and Alpha Text readings of 9:13 (finding 2) belong in this note.

### 9. Minor: Harbona's traditions are attributed to the wrong sources (7:9 note)
- **Problem:** The note says the story that Harbona "had once been part of Haman's plot and switched sides" comes from Esther Rabbah, and that "later tradition" made him Elijah in disguise. The attributions are the other way round. Harbona's part in the plot is R. Eleazar's saying in Bavli Megillah 16a. Elijah appearing in Harbona's form is in Esther Rabbah 10 (10:9).
- **Fix:** Swap the attributions and give the section numbers. Optionally, note that the saying "Harbona, remembered for good" is already found in the Jerusalem Talmud (Yerushalmi Megillah 3:7).

### 10. Minor: the 8:3 note says Esther uses "the Jews" here for the first time
- **Problem:** The note says "Her plea is for 'the Jews,' not herself, the first time she uses the word." Esther herself says "every Jew who can be found in Susa" (*kol-hayehudim*) in 4:16. The word in 8:3 is also the narrator's; her first use of it in this scene is 8:5.
- **Fix:** "The first time she speaks of 'the Jews' to the king (8:5)."

### 11. Minor: the 8:13 note gives a wrong example
- **Problem:** "or a king's (Judges 11:36)". In Judges 11:36 it is the LORD who takes vengeance for Jephthah.
- **Fix:** Use a royal example, for instance Saul's "vengeance on the king's enemies" in 1 Samuel 18:25, or drop the clause.

### 12. Minor: the count in the 6:6 note is wrong
- **Problem:** The note says "The phrase comes six times ... said by the king, then repeated by Haman three times in his answer (6:7, 6:9 twice), then shouted twice in the square (6:9, 6:11)." This counts the second 6:9 occurrence twice. The full Hebrew phrase occurs five times: 6:6, 6:7, 6:9a, 6:9b and 6:11. The sixth English occurrence is Haman's thought in 6:6, which uses a different Hebrew form.
- **Fix:** Correct the count and the breakdown.

### 13. Minor: the chapter 5 deep section says "he has now promised three times"
By 5:8 the king has promised twice (5:3 and 5:6, the second in front of Haman). The third promise comes in 7:2. The 5:8 note correctly says "twice". Make the two agree.

### 14. Minor: the 6:8 note mischaracterizes the KJV
- **Problem:** The note says "The KJV read it as a crown for the man." But the KJV's "the crown royal which is set upon his head" means the king's own crown. That matches the note's own alternative ("could refer to the horse or to the king"), not "the man" being honored.
- **Fix:** "The KJV took it as the king's own crown."

### 15. Minor: the 8:6 note places Judah's plea "at Pharaoh's court"
Judah pleads in Joseph's house (Genesis 44:14–34). The note could also point out the strongest verbal link, "the evil that will find" (*hara'ah asher yimtsa*), which Genesis 44:34 shares with Esther 8:6.

### 16. Minor: four quotations do not match the site's Plain
- **7:10 note:** quotes 2:1 as "the king's rage cooled". Part 01-04's Plain of 2:1 reads "King Ahasuerus calmed down from his anger". Either quote 2:1 as it stands, or ask the 01-04 writer to align 2:1 with 7:10. The Hebrew verb is the same (*shakhakh*), so aligning them is the better fix.
- **9:31 note:** quotes 4:3 as "weeping and crying aloud". The Plain of 4:3 is "They fasted, wept and cried aloud".
- **8:9 note:** quotes Nehemiah 13:24 as "the language of Judah". The site's Nehemiah Plain is "They could not speak Judean".
- **5:10 note:** says Saul "forced himself" (1 Samuel 13:12). The site's Plain is "So I pushed myself to do it".

### 17. Minor: the same Hebrew is rendered differently from part 01-04
- **8:2 against 3:10.** Plain 8:2 "pulled off his signet ring"; Plain 3:10 (and Genesis 41:42) "slipped the signet ring off". The Hebrew is the same (*vayyasar ... et-tabba'to*), and the 8:2 note says "The same words opened 3:10". Use "slipped ... off" in 8:2.
- **8:11 against 3:13.** 3:13 "Their property was to be taken as plunder"; 8:11 "take their spoil as plunder". The Hebrew is identical (*ushlalam lavoz*), and the 8:11 note and the chapter 8 deep section say the wording is "copied". Use one English for both. Also reconsider "with" in "with little children and women". It is not in the Hebrew, and it leans the line toward the majority reading, while the note says the Plain keeps the ambiguity.
- **6:2 against 2:21.** 6:2 "who kept watch at the door"; 2:21 "who kept watch at the entrance". Same Hebrew (*mishomre hassaf*).
- **7:8.** "the hall where the wine was served" for *beit mishteh hayyayin*. terms.json sets *mishteh hayyayin* as "the wine feast". "The hall of the wine feast" keeps the term.

### 18. Minor: other translation points
- **9:5.** "struck at all their enemies" softens *vayyakku* ("struck down"), and "at" suggests an attempt. Use "struck down".
- **9:25.** "he and his sons must be hanged". The 9:13 note sets up "hung" for dead bodies and "hanged" for executions, and the sons were already dead (9:10). Use "hung", or drop the distinction.
- **6:2.** "They came to the entry that told how" loses *vayyimmatse katuv*, "it was found written", which is the language of 2:23. Use "It was found written there that ...".
- **9:24.** "thrown Pur ... to throw them into panic". The English pun on "throw" is not in the Hebrew (*hippil* ... *lehummam*). Meanwhile the real sound-play, Haman and *hummam*, which most commentators note, goes unmentioned. Use "cast Pur" or "to crush them in panic", and mention the Haman/*hummam* play in the 9:24 note.
- **10:3 note.** It argues that *zera'* means "the whole race" because "the seed of the Jews" means that in 6:13 and 9:27–28. But in 9:27–28 *zar'am* means descendants, and the Plain itself renders it "their children". Keep only 6:13 as support.

### 19. Minor: the persia topic contradicts part 01-04 on irrevocable law
- **Problem:** persia, section "Persian law and the royal post", says "the irrevocable law is not attested outside the Bible". Part 01-04's note on 1:19 cites Diodorus, *Library* 17.30: Darius III regretted an execution but could not undo it.
- **Fix:** "No Persian text states such a rule, though Diodorus (17.30) tells of a Persian king unable to undo his own order." The chapter 8 views text ("no Persian source mentions irrevocable laws") is accurate as written.

### 20. Minor: Josephus and Ibn Ezra on 8:17
- **Josephus:** Cite *Antiquities* 11.285. Josephus says many of the nations "had themselves circumcised out of fear of the Jews, securing safety for themselves". That supports the "for safety" reading as much as full conversion. The 8:17 variant's `why` says "Josephus says the same" as the Greek's full conversion, which oversimplifies.
- **Ibn Ezra:** The note gives the "pretended" reading to "Ibn Ezra and some modern scholars". I could not verify Ibn Ezra. The view is classically linked with the Vilna Gaon, and Maimonides speaks of gentiles who took on the appearance of Jewishness. Check Ibn Ezra's wording, or name a source you have checked.

### 21. Minor: Purim origins (the 9:26 note, the chapter 9 deep section, the purim topic)
- **Farvardigan:** The Farvardigan proposal is Paul de Lagarde's (1887), not Gaster's, but the text leaves it unattributed beside Gaster's name.
- **Gaster:** In *Purim and Hanukkah in Custom and Tradition* (1950), Gaster argued for an adaptation of the Persian New Year festival. "A spring carnival (Gaster)" is loose. State his view exactly.
- **Jensen:** He is named without a source. His Elamite-gods theory appeared in "Elamitische Eigennamen", *Wiener Zeitschrift für die Kunde des Morgenlandes* 6 (1892). Add a key or cite Paton's survey.
- **Correct as they stand:** The Zimmern citation (ZAW 11, 1891), the Hallo die (BA 46, 1983) and the verdict paragraph are correct and fair.

### 22. Minor: an unsourced claim in the chapter 7 Christian view
"Some older readers saw Haman's pole as a type of the cross" has no source, and I cannot confirm it. The well-documented link runs the other way: the Theodosian Code 16.8.18 (AD 408) forbade Jews to burn Haman in effigy on a cross-like form, because Christians took it as mockery of the cross. Source the claim or replace it with that history.

### 23. Minor: glosses
- **7:4.** "we have been sold out" changes the sense from being sold to being betrayed. Use "we've been sold off".
- **9:1.** "the tables were turned" is the NIV's wording for this verse. Use "everything flipped".
- **10:3.** "stood up for the welfare of" is close to the NIV's "spoke up for the welfare of". Use "looked after the well-being of".

### 24. Minor: the 5:1 note repeats part 01-04
The 5:1 history note again explains the French excavations, the apadana and Artaxerxes II's restoration, all covered in the 1:2 note. STYLE says never to explain a point twice. Shorten it to the throne-room point and refer to 1:2.

### 25. Minor: the 7:7 preview is garbled
"in the story of Haman's ancestor's enemy". Try: "The same Hebrew describes Saul's settled plan to kill David (1 Samuel 20:33)."

### 26. Minor: the 9:31 note on the Fast of Esther, once finding 2 is added
- **Correct as it stands:** "Not mentioned in the Talmud and appears in early medieval Jewish sources". The first explicit witnesses are the geonic She'iltot (8th century) and tractate Soferim.
- **Additions:** Name those sources. Add that the Septuagint of 9:31 lacks "fasts" entirely (finding 2), which matters for a custom built on this verse.

### 27. Minor: small points in the 8:12 and 10:3 variant summaries
- **8:12:** In Addition E, Haman "has been crucified" (ἐσταυρῶσθαι) at the gates of Susa. "Hanged" is acceptable, but the 7:9 entry already makes the point about *stauroō*, so keep the two consistent.
- **10:3:** The colophon paragraph says "Either way" after three options. Use "On any of these dates".
- **Correct as they stand:** The colophon dates (Bickerman: Ptolemy XII and Cleopatra V, 78/77 BC; alternatives 114/113 and 49/48 BC) and the summaries of Additions E and F are accurate.

## Checked and found sound

- **Ketiv/Qere:** All four pairs are handled correctly in notes: 8:13 *atudim/atidim*, 9:19 *perozim/perazim*, 9:27 *qibbel/qibbelu*, 10:1 *Achashresh*.
- **Septuagint readings verified against Rahlfs:** 6:1, 6:13 (Zosara; "living God"), 7:4 (*diabolos*), 7:8, 7:9 (Bougathan; *staurōthētō*), 8:9 (Nisan), 8:11, 8:17, 9:5 (absent), 9:10 ("and they plundered"), 9:15–16 ("plundered nothing"; 15,000), 9:19, 9:24 (Macedonian; "decree and lot"), 9:26 (Phrourai), 9:29 (Aminadab).
- **Alpha Text:** "the Mighty One" at 6:1 is confirmed by NETS.
- **Rabbinic citations:** Genesis Rabbah 56:1 (third days); Megillah 7a, 14b, 15b, 16a and 16b, as cited; Shabbat 88a; Chullin 139b; Mishnah Megillah 1:1 and 3:4; Maimonides, Laws of Megillah 2:17; Shoshanat Ya'akov.
- **Classical citations:** Herodotus 1.133, 1.136, 3.89–97, 3.128–129, 3.139–141, 3.159, 8.85, 8.90, 8.98 and 9.109–111; Thucydides 1.129; Plutarch, *Artaxerxes* 27; Livy 1.26; Xenophon, *Cyropaedia* 8.3.13.
- **Other facts:** Athanasius, Festal Letter 39; 2 Maccabees 15:36; Paton's "not one noble character"; Luther's *Table Talk*; Gordis, JBL 95 (1976), which the NIV 2011 follows at 8:11; Mendenhall; the Nuremberg/5707 note, stated carefully; Esther 8:9 is 43 Hebrew words.
- **Source keys:** All the keys this part uses resolve, and every citation is a real work with correct series, volume and year details. That covers athanasius-festal-39, baldwin-esther, berg-esther, berlin-esther, bickerman-colophon, briant-cyrus-alexander, bush-ruth-esther, clines-esther-scroll, clines-historical-mordecai, day-three-faces, de-troyer-alpha-end, esther-rabbah, fox-esther, fox-redaction-esther, gaster-purim, genesis-rabbah, goldstein-2macc, gordis-esther-studies, hallo-first-purim, hanhart-esther, jobes-esther, kuhrt-persian-corpus, levenson-esther, livy-history, luther-table-talk, mendenhall-tenth, moore-additions, moore-esther, nets-lxx, paton-esther, plutarch-artaxerxes, rahlfs-lxx, thucydides-history, yamauchi-mordecai, yamauchi-persia, zimmern-purim, and the Bavli keys. kent-old-persian, maimonides-mishneh-torah, mishnah-megillah and xenophon-cyropaedia resolve through other books' sources.json files.
- **Terms:** The terms.json entries for Esther (lines 75–92) are followed throughout chapters 5–10: pole, the fortress at Susa, If the king thinks it good, the enemy of the Jews, annihilate/kill/destroy, raise a hand against, holiday, and sending portions of food. The exceptions are in findings 17–18.
- **Quotations matching the site's Plain:** 1 Samuel 15:9, 15:19 and 15:21; 1 Samuel 20:7 and 20:33; Genesis 41:43, 43:31, 44:34 and 45:1; Exodus 15:16 and 17:14; Deuteronomy 2:25, 21:23, 25:17, 25:19, 28:68 and 31:18; Joshua 2:9; 2 Samuel 5:10 and 15:30; 1 Kings 15:31; Nehemiah 8:10 and 8:12; Esther 1:13, 2:5, 2:10, 3:15, 4:3 (in the 8:16 note) and 4:16.
- **The chapter 9 spec box** ("It was the people who took from the spoil", 1 Samuel 15:21) is clearly labeled as Claude's reading. It names its overlap with Levenson, Berlin and Jewish tradition, and limits its own claim to the link with 15:21 and the threefold report. Its quotation of 1 Samuel 15:21 matches the site's Plain. It is plausible and acceptable as it stands.

## Fixes applied

All 27 findings are fixed. Both checks (`--check Est/05-10` and `--check Est`) show 0 errors and 0 warnings.

1. **6:1 spec box:** dropped. The ch. 6 J view now says that Esther Rabbah 10:1 sets this night beside Psalm 121:4 and Psalm 44:23 (Hebrew 44:24). The 6:1 views note does the same and cites esther-rabbah.
2. **Greek variants:** new variants at 9:1, 9:13 (Septuagint "so as to hang the ten sons", plus the Alpha Text's "destroy and plunder" with 700 and 70,100 dead), 9:25 (Haman as subject), 9:29 (no "second"), 9:30 (verse absent), 9:31 (no fasts; "health and counsel") and 9:32 ("for a memorial"). Optional readings added too: Alpha Text 7:9 Agathas, Alpha Text 8:17 "many of the Jews were circumcised", and the Septuagint 9:20 "in a book" (in the note). Updated to match: the notes at 9:1, 9:13, 9:20, 9:25, 9:29, 9:30, 9:31 and 9:32; the 9:12–13 and 9:29–32 cards; the ch. 9 Greek deep section, rewritten, with the "could not be checked" line removed; and the fasting and textual-history topics.
3. **Addition D:** the 5:1 `why` now says B and E were composed in Greek, and A, C, D and F probably go back to a Semitic original (Moore; Martin, martin-syntax-additions). The same sentence is now in the ch. 8 deep section and in the books-outside-the-bible topic.
4. **Process notes and witness fields:**
   - Every "checked on blueletterbible.org", "online" and "in this session" remark is gone from the variants, the notes and the ch. 8, 9 and 10 deep sections.
   - Witness fields now name only the witness, for example "Septuagint ... (Rahlfs; Göttingen edition, Hanhart)" or "Greek Alpha Text (Hanhart; NETS)".
   - The 8:12 and 10:3 contradictions are gone.
   - The 6:1 Alpha Text reading "the Mighty One" now cites nets-esther, and the Old Greek reading is "the Lord".
5. **Plain:**
   - 8:11 redrafted: "to gather and to stand up for their lives ... every army of any people or province that comes against them, little children and women, and their property could be taken as plunder". There is no "with", and the plunder clause now matches 3:13.
   - 10:3: "He looked out for his people's good".
   - 8:10: "They rode fast steeds that served the crown, foals of the mares".
   - 7:4: "That trouble would not have been worth bothering the king."
   - 5:1: "across from the doorway of the building".
   - Re-audit results are in the scratch drift log. "Spoke peace to all his" (10:3) is still kept, because the Hebrew forces it.
6. **Counter-decree cards:**
   - The king's reply card is now 8:7–8. The decree card is now 8:9–14, and its `to` field adds "all the peoples" (8:13).
   - `why` now covers public notice, deterrence and the Jews' readiness. The "binds the officials" sentence is removed, and the ch. 8 deep section now gives 9:3's own reason (dread of Mordecai).
   - The view is relabeled "Mirror-image wording".
7. **Other cards:**
   - New cards: a 9:14 law card, plus the optional 7:5, 7:9–10 and 10:1 cards. There are now 21 cards.
   - 9:12–13: "fourth time (5:3; 5:6; 7:2; 9:12)" and "On that day".
   - 6:3: `to` is "the servants attending him that night".
   - 9:29–32: Mordecai sends the letters (9:30).
   - The four repeated `readers` openings are each rewritten to say something specific.
8. **Fairness:**
   - The revenge paragraph (ch. 9 deep, 9:5 note) now gives Luther's "Judaize too much" context (Levenson, Berlin). It replaces the vague sentence with Hebron, Purim 1994, and Elliott Horowitz (horowitz-reckless-rites).
   - The holy-war topic gives the same Luther context.
   - In the 9:13 note, "the rabbis do not fault her" is removed and the Greek readings are added.
9. **Harbona (7:9):** his part in the plot is now attributed to R. Eleazar in Bavli Megillah 16a, and Elijah to Esther Rabbah 10:9. "Remembered for good" is cited to Yerushalmi Megillah 3:7.
10. **8:3:** "the first time she speaks of 'the Jews' to the king (8:5)".
11. **8:13:** the example is now 1 Samuel 18:25, quoted from the site's Plain.
12. **6:6:** five occurrences of the full phrase, with the corrected breakdown.
13. **Ch. 5 deep:** "promised twice", which agrees with the 5:8 note.
14. **6:8:** "The KJV took it as the king's own crown."
15. **8:6:** the plea is set in Joseph's house (Genesis 44:14–34), and the note adds the shared *hara'ah asher yimtsa*.
16. **Quotations:**
    - 2:1 is handled by aligning my 7:10 Plain to 2:1's form ("calmed down from his rage"), so the 7:10 note quotes 2:1 exactly as part 01-04 has it. I did not ask 01-04 to change.
    - 4:3, Nehemiah 13:24 ("could not speak Judean") and 1 Samuel 13:12 ("So I pushed myself to do it") are now quoted as the site's Plain has them.
17. **Consistency with part 01-04:**
    - 8:2 now reads "slipped off the signet ring", like 3:10.
    - 8:11's plunder clause matches 3:13.
    - 6:2 now reads "at the entrance", like 2:21.
    - 7:8 now reads "the hall of the wine feast".
    - 8:9 uses the shared phrase from 1:22 and 3:12.
    - The "Haman the Agagite" aliases are left untouched.
18. **Other translation points:**
    - 9:5: "So the Jews cut down all their enemies". I used "cut down" rather than the suggested "struck down", to avoid matching the NIV.
    - 9:25: "hung".
    - 6:2: "It was found written there that...".
    - 9:24: "cast Pur ... to rout them in panic". I chose "rout" rather than the suggested "crush", because "crush" matches the ESV's "to crush". The 9:24 note now mentions the Haman/*hummam* sound-play.
    - 10:3 *zera'*: the note now rests on 6:13 only.
19. **persia topic:** "No Persian text states the rule ..., though Diodorus (17.30) tells of a Persian king unable to undo his own order."
20. **8:17:** the note cites Josephus, *Antiquities* 11.285, and the variant's `why` explains his "for safety" nuance. The Ibn Ezra attribution is removed because I could not verify it.
21. **Purim origins (9:26 note, ch. 9 deep, purim topic):**
    - Farvardigan is attributed to Lagarde (1887), lagarde-purim.
    - Gaster (1950) is described as arguing for an adaptation of the Persian New Year.
    - Jensen (1892) now has the source key jensen-elamite.
22. **Ch. 7 X view:** the "type of the cross" claim is replaced with the Theodosian Code 16.8.18 (AD 408) history (codex-theodosianus).
23. **Glosses:**
    - 7:4 "we've been sold off".
    - 9:1 "everything flipped".
    - 10:3 "looked after the well-being of".
    - Glosses that lost their anchors after the Plain changes were re-anchored: 8:10 is now "foals of the mares", and the 7:10 gloss was dropped.
24. **5:1 note:** shortened to the throne-room point, with a pointer to the 1:2 note.
25. **7:7 preview:** rewritten as "The same Hebrew describes Saul's settled plan to kill David (1 Samuel 20:33)."
26. **9:31:** the note names the She'iltot and Soferim, and says that the Septuagint has no fasts. The fasting topic has the same change.
27. **Small points:**
    - 8:12: "crucified at the gates of Susa", consistent with 7:9 and with the ch. 8 deep section.
    - 10:3: "On any of these dates".

**Also fixed:** the shared source key `bush-ruth` has been renamed in content/sources.json, so this part now cites `bush-ruth-esther`.
