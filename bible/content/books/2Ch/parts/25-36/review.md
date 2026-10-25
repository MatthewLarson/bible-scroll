# Hostile review: 2 Chronicles 25–36 (part 25-36)

Reviewer's scope: plain.txt (312 verses), notes.json (155), variants.json (32), glosses.json (91), chapters.json (12), topics.json (22 contributions), sources.json (11 keys), and the new topic cores `uzziah`, `cyrus`, `seventy-years`, plus this part's section in `retribution`. book.json and the other parts were not reviewed.

## Verdict

This is a careful, well-read part. I compared every verse with `node tools/literal.js 2Ch 25`–`36`. The Plain is faithful in sense almost everywhere. Names, numbers and who-does-what are right. The parallel rule with 2 Kings is mostly kept well: where the Hebrew matches (25:18, 25:22–23, 26:1, 28:3–4, 33:2–5, 34:15, 34:18, 34:23, 34:26, 36:3–5, 36:11), the site's Kings wording is used. Where the Hebrew differs (25:3 "killed", 25:4 "die", 33:4, 33:8, 34:21, 34:25, 34:31), the English differs too. Fairness on Manasseh, Josiah's death, Hezekiah's Passover and the empty land is good, and the rabbinic and archaeological claims I spot-checked hold up. They include Mishnah Sanhedrin 10:2, Pesahim 4:9, Sukkah 5:4, Bavli Sanhedrin 94a, 94b, 103b–104a, Sukkah 45b, Megillah 14b, Taanit 22b, Yoma 52b, Bava Qamma 16b, the Uzziah seals and the 1931 plaque, the Siloam tunnel, the Broad Wall and the Esarhaddon and Ashurbanipal vassal lists. `node tools/build.js --check 2Ch/25-36` reports 0 errors and 0 warnings.

The weak point is the one the writer admitted: the Greek. I checked the cited readings in Rahlfs at blueletterbible.org. Three variants report the Septuagint wrongly (30:27, 34:22, 36:8), one has the wrong manuscript grouping (36:9), and a fourth cites the wrong book as a witness (36:22, 1 Esdras 2:1). Almost every Greek column is empty or holds a Hebrew retroversion. There are two other major problems. The writer breaks the site's name policy at 26:2 (Eloth printed "Elath"), and the 26:2 note says the opposite of what the site actually prints. And the drift audit missed about twenty verses with NIV/ESV sentence shapes or word choices. Theory boxes do not say where published work overlaps, and the Cyrus core leaves out the main debate about Isaiah's naming of Cyrus. None of this is critical. Once the Greek is redone from Rahlfs and the drift verses are rebuilt, the part can be published.

**Count: 0 critical, 11 major, 30 minor.**

---

## Major findings

### 1. Major. plain.txt 26:2, notes 26:2, glosses 26:2: "Elath" printed where the Hebrew has Eloth (name policy)

- **What is wrong:** The Hebrew of 26:2 is הוּא בָּנָה אֶת־אֵילוֹת, *Eloth*. 2 Kings 14:22 has אֵילַת, *Elath*. The Plain copies the Kings wording word for word ("It was he who built up Elath and brought it back to Judah..."). This is a Hebrew difference hidden by copying Kings, and it breaks the policy of giving each name in the form its own verse has. That policy is applied everywhere else in this part: Joash, Jehoahaz/Joahaz, Tilgath-pilneser, Jerushah, Abijah.
- **The note is wrong too.** The 26:2 note says "The Hebrew spells the town Eloth here, as in 2 Chronicles 8:17; the site prints Elath in both books." But part 01-12 prints **Eloth** at 8:17 ("Then Solomon went to Ezion-geber and to Eloth"). The site is now inconsistent inside one book, and the note misreports it.
- **Evidence:** the Leningrad text of 26:2 (above); `content/books/2Ch/parts/01-12/plain.txt` 8:17. The Greek (Rahlfs) has Αιλαθ, which is useful for a variant.
- **Fix:** Print "Eloth" at 26:2 and move the gloss anchor ("Eloth => Elath, Judah's port on the Gulf of Aqaba"). Rewrite the note: Kings has Elath, Chronicles Eloth (as at 8:17), the same town. Optionally add a variant: Masoretic Text "Eloth" against 2 Kings 14:22 and the Greek (Αιλαθ) "Elath". Correct the PROGRESS.md line ("Eloth printed Elath").

### 2. Major. variants.json, across the part: the Greek columns are empty or hold Hebrew, and the witnesses cite Brenton, not Rahlfs

- **What is wrong:** 13 variants label the Greek "Septuagint (checked in Brenton's English translation)". The `orig` field is empty at 25:8, 27:8, 28:27, 34:6, 34:22, 35:19, 35:20, 36:5, 36:8 and 36:10. At 32:32, 33:19, 33:20 and 35:22 it holds a Hebrew retroversion (וְעַל־סֵפֶר, הַחֹזִים, בְּגַן־בֵּיתוֹ, הִתְחַזֵּק) under a Greek witness. Brenton translates Codex Vaticanus, not Rahlfs, and that is how the errors in findings 3–6 got in. Part 01-12 checked Rahlfs at blueletterbible.org and cites `rahlfs-lxx`; this part should too.
- **Evidence (Rahlfs, from blueletterbible.org/lxx/2ch/…):**
  - 25:8 ὅτι ἐὰν ὑπολάβῃς κατισχῦσαι ἐν τούτοις
  - 25:28 ἔθαψαν αὐτὸν μετὰ τῶν πατέρων αὐτοῦ ἐν πόλει Δαυιδ
  - 26:5 τοῦ συνίοντος ἐν φόβῳ κυρίου
  - 26:8 καὶ ἔδωκαν οἱ Μιναῖοι δῶρα
  - 27:8 absent
  - 28:3 καὶ διῆγεν τὰ τέκνα αὐτοῦ διὰ πυρός
  - 28:16 πρὸς βασιλέα Ασσουρ
  - 28:19 δι᾽ Αχαζ βασιλέα Ιουδα
  - 28:27 ἐτάφη ἐν πόλει Δαυιδ
  - 32:22 καὶ κατέπαυσεν αὐτοὺς κυκλόθεν
  - 32:32 καὶ ἐπὶ βιβλίου βασιλέων Ιουδα καὶ Ισραηλ
  - 33:19 ἐπὶ τῶν λόγων τῶν ὁρώντων
  - 33:20 ἔθαψαν αὐτὸν ἐν παραδείσῳ οἴκου αὐτοῦ
  - 34:6 καὶ τοῖς τόποις αὐτῶν κύκλῳ
  - 34:9 καὶ οἰκούντων ἐν Ιερουσαλημ
  - 35:20 ἐπὶ τὸν βασιλέα Ἀσσυρίων ἐπὶ τὸν ποταμὸν Εὐφράτην
  - 35:22 ἐκραταιώθη; τῶν λόγων Νεχαω διὰ στόματος θεοῦ
  - 36:10 Σεδεκιαν ἀδελφὸν τοῦ πατρὸς αὐτοῦ
- **Fix:** Put the Greek in `orig` for every Septuagint reading and relabel the witness "Septuagint (Rahlfs)", naming Codex Vaticanus or Alexandrinus where they differ. Add `rahlfs-lxx` to `s`. Where a Hebrew form is a guess behind the Greek, say "Hebrew behind the Greek (reconstructed)" and give the Greek as well. The writer should add the other pluses (35:19a–d, 36:2a–c, 36:4a, 36:5a–d) from Rahlfs directly: blueletterbible's page does not show 35:19a–d, though Brenton has them (biblehub.com/sep/2_chronicles/35.htm).

### 3. Major. variants 30:27 and notes 30:27: the Greek does not read "the priests and the Levites"

- **What is wrong:** The variant lists "Many Hebrew manuscripts; Septuagint; Syriac; Vulgate" for הַכֹּהֲנִים וְהַלְוִיִּם, and the note says "the Greek and the Syriac read 'the priests and the Levites'." Rahlfs reads καὶ ἀνέστησαν οἱ ἱερεῖς οἱ Λευῖται, "the priests the Levites," with no "and." That agrees with the Masoretic Text.
- **Fix:** Move the Septuagint (Rahlfs) to the Masoretic Text side. Keep the Hebrew manuscripts, the Syriac and the Vulgate for "and," after checking them in BHS or Allen. Correct the note.

### 4. Major. variants 34:22: the "Septuagint" names are 2 Kings' Greek, not Chronicles'

- **What is wrong:** The reading is given as "Sellem son of Thecoe, son of Aras." Rahlfs for 2 Chronicles 34:22 has Σελλημ υἱοῦ Θακουαθ υἱοῦ Χελλης, "Sellem son of Thakouath son of Chelles." "Thecoe ... Aras" looks like the Greek of 2 Kings 22:14. The point of the entry is that Chronicles' own witnesses differ from Kings, so this error matters.
- **Fix:** Use Rahlfs' Chronicles reading, with plain "Shallum son of Thakouath, son of Chelles". If the writer wants to show the Greek of Kings, label it separately as Greek of 2 Kings 22:14.

### 5. Major. variants 36:8: the Greek reading keeps words the Greek does not have

- **What is wrong:** The alternative plain is "and what was found against him. He was buried in the garden of Uzza." Rahlfs 36:8 has no equivalent of "his abominations which he did and what was found against him". It reads καὶ πάντα ἃ ἐποίησεν, then καὶ ἐκοιμήθη Ιωακιμ μετὰ τῶν πατέρων αὐτοῦ καὶ ἐτάφη ἐν Γανοζα μετὰ τῶν πατέρων αὐτοῦ. Brenton likewise has no "found against him". The 36:8 note is right ("The Greek gives a burial notice instead"), so the variant contradicts the note. The plain also prints "the garden of Uzza" as if the Greek said it. Γανοζα is a transliteration, and "garden of Uzza" is an identification.
- **Fix:** Anchor on "the abhorrent things he did and what was found against him". For the Greek reading give "all that he did ... He lay down with his ancestors and was buried in Ganoza with his ancestors". Put the garden-of-Uzza identification in `b`.

### 6. Major. variants 36:9 and notes 36:9: wrong grouping of the Greek

- **What is wrong:** The variant lists "Septuagint (Vaticanus)" under "eight", and the note says "the main Greek manuscripts have eight, like the Hebrew." Rahlfs prints υἱὸς ὀκτωκαίδεκα ἐτῶν Ιεχονιας, "eighteen". Only Brenton's Vaticanus-based English has "eight". So the standard critical Greek text sides with Kings and 1 Esdras. I confirmed 1 Esdras 1:43 (KJV numbering; 1:41 in the Greek) reads eighteen.
- **Fix:** Witnesses for eighteen: 2 Kings 24:8; Septuagint (Rahlfs' text, with Alexandrinus and the Lucianic manuscripts, to be confirmed against Allen); Syriac; 1 Esdras 1:43 (KJV numbering; 1:41 Greek); some Hebrew manuscripts. Witnesses for eight: the Masoretic Text and Codex Vaticanus. Correct the note's "main Greek manuscripts" sentence. The chapter 36 deep section ("Some manuscripts and versions") can stay.

### 7. Major. variants 36:22 and notes 36:22: 1 Esdras 2:1 agrees with Chronicles, not with Ezra

- **What is wrong:** The variant puts "1 Esdras 2:1" beside Ezra 1:1's מִפִּי, "from the mouth". 1 Esdras 2:1 reads εἰς συντέλειαν ῥήματος κυρίου ἐν στόματι Ιερεμιου, "by (in) the mouth of Jeremiah". That matches Chronicles' בְּפִי (sacred-texts.com/bib/poly/es1002.htm; KJV Apocrypha "by the mouth of Jeremy"). The Greek of Ezra (2 Esdras 1:1) is the witness that has ἀπὸ στόματος.
- **Fix:** Move 1 Esdras 2:1 to the Chronicles reading. Give Ezra 1:1 Masoretic Text, with Greek 2 Esdras 1:1 if checked, for "from".

### 8. Major. variants.json: no entries for the Greek pluses at 36:2 and 36:4

- **What is wrong:** The 36:2 note says the Greek adds 36:2a–c (Jehoahaz's mother Amital of Lobena, his evil, Neco binding him at Deblatha) and 36:4a (Eliakim renamed, Joachaz dying in Egypt, the land taxed), and says "See the variants." The 36:5 variant's `why` begins "As at 35:19 and 36:2". But there is no variant at 36:2 or 36:4, and the 36:5 entry lumps 36:4a in with 36:5a–d. Rahlfs prints all of these as numbered sub-verses (2a, 2b, 2c, 4a, 5a–5d). These are whole added verses that a reader switching readings should see, and STYLE requires an entry for them. Note also that 36:4a supplies Jehoahaz's death in Egypt, which Chronicles' Hebrew does not mention, and that 36:3–4 in the Hebrew lacks Kings' Riblah (2 Kings 23:33).
- **Fix:** Add a variant at 36:2, anchored on the verse, with a 2a–c reading that summarizes or translates the Greek. Add one at 36:4 for 4a. Keep 36:5 for 5a–d only, and fix its `en` (it lists "his mother's name"; say whose, after checking Rahlfs 36:5).

### 9. Major. plain.txt: NIV/ESV drift in about twenty verses the audit kept

Each verse below shares a sentence shape or an interpretive word choice with the NIV or ESV that the Hebrew does not force. I quote only a few words of the other version.

- **30:1** "Hezekiah sent word to all Israel and Judah ... also wrote letters to Ephraim and Manasseh": two runs of 7–8 words in the NIV's order. "Sent word" is the NIV's supplement; the Hebrew has only וַיִּשְׁלַח.
- **28:9** "was angry with Judah, and so he gave them into your hand. But you have killed them with a fury that reaches the heavens": the NIV's recasting of בַּחֲמַת as "was angry" and its sentence shape ("in a rage that reaches to heaven").
- **35:21** "It is not you I am after today. It is the house I am at war with, and God said to make haste": the NIV's cleft sentence ("It is not you I am ...", "the house with which I am at war").
- **36:14** "acted more and more unfaithfully, following all the abhorrent ways of the nations": the NIV's "more and more unfaithful, following all the ...".
- **25:13** "Meanwhile the men of the troop Amaziah had sent back": the NIV opens "Meanwhile the troops that Amaziah had sent back". The Hebrew has no "meanwhile".
- **31:1** "the Israelites who were there went out to": a 7-word NIV run. Elsewhere the Plain renders הַנִּמְצְאִים "to be found" (30:21; 35:17).
- **33:15** "He got rid of the foreigners' gods ... along with every altar he had built on the hill": the NIV's "got rid of" (Hebrew וַיָּסַר "removed") and its order.
- **33:13** "God let himself be moved by him. He heard his plea": the NIV/ESV "moved by ... plea/entreaty". The note itself glosses *'atar* as "let himself be entreated".
- **26:19** "while he raged at the priests, skin disease broke out on his forehead": the NIV "while he was raging at the priests", and both versions' "broke out" for זָרְחָה. The writer's own note says the verb means "shone out, dawned".
- **30:9** "will be met with pity by their captors": the NIV's passive frame "shown compassion by their captors".
- **30:22** "whose understanding of the LORD's service was good": both the NIV and the ESV supply "service"; the Hebrew has only "good skill for the LORD".
- **32:28** "and pens for the flocks": the NIV's exact phrase and its interpretive reversal of the obscure וַעֲדָרִים לָאֻוֵרוֹת.
- **35:5, 35:7, 35:12, 35:13** "the lay people": the NIV and ESV word for בְּנֵי הָעָם. 35:7 also has "the king's own property", close to the NIV "king's own possessions".
- **35:11** "while the Levites skinned the animals": a 5-word NIV run; "the animals" is supplied.
- **35:20** "After all this, when Josiah had put the house in order": the NIV's "set the temple in order"; the Hebrew is הֵכִין "prepared".
- **28:20** "instead of making him strong": the NIV/ESV "instead of" frame for וְלֹא חֲזָקוֹ.
- **25:9** "The LORD can give you ... more than that": the NIV wording; the Hebrew is "there is to the LORD to give you".
- **26:15** "far and wide", and **32:30** "channeled": NIV word choices.

**Fix:** Rebuild these verses from the literal line with a different sentence shape. Some examples:

- 30:1 "Hezekiah sent to all Israel and Judah. He even wrote letters to Ephraim and Manasseh, calling them to come ..."
- 35:21 "Not against you, you yourself, today, but against the house I am fighting ..."
- 36:14 "kept adding unfaithfulness on unfaithfulness, just like all the abhorrent things of the nations"
- 35:7 "the common people" or "the people" (with the existing gloss)

Re-run the drift audit on the rebuilt verses.

### 10. Major. chapters.json (ch. 25, 32, 36) and topics.json (uzziah, manasseh): theory boxes are not labeled as Claude's in the text and say nothing about published overlap

- **What is wrong:** STYLE rule 4 requires every theory to be labeled as Claude's, with the verses it rests on, "saying where they overlap with published scholarship." The five boxes are "A story about the north" (ch. 25), "Why leave out the tribute?" (ch. 32), "An open ending" (ch. 36), "Strength as the danger" (uzziah) and "Two honest endings" (manasseh). None of them names any overlap. Several are not original:
  - The open ending of Chronicles and the invitation in *veya'al* are standard points in Japhet, Williamson and Klein.
  - The silence about the tribute as theology is in Japhet and in Dillard (WBC).
  - The north-as-capable-of-good reading of chapters 25 and 28 is Williamson's thesis in *Israel in the Books of Chronicles*.
- **Fix:** In each box, add a sentence such as "Claude's suggestion; close to Williamson, <i>Israel in the Books of Chronicles</i>, 1977, who argues ...", or "No published source I know makes this exact point; Japhet (1993) notes ...". Move any box that is simply the consensus into a normal deep section.

### 11. Major. topics/cyrus.json: the whole-Bible page omits the debate over Isaiah's naming of Cyrus

- **What is wrong:** The core says only that "Isaiah names Cyrus as the LORD's shepherd and anointed" (Isaiah 44:28; Isaiah 45:1–7). It does not mention the main interpretive question. Traditional Jewish and Christian readers hold that Isaiah of Jerusalem named Cyrus about 150 years ahead, and Josephus says Cyrus read it (*Antiquities* 11.5–7). Most critical scholars assign Isaiah 40–55 to an exilic prophet writing about 545–539 BC. A Cyrus page that is one page for the whole Bible must present both in their strongest form (STYLE rule 3). The page also does not address the debate over whether Ezra 1:2–4 is authentic. That debate appears only as an "uncommon" one-liner in this part's contribution; Bickerman's defense of the Hebrew and Aramaic decrees is the classic study.
- **Fix:** Add a short "Cyrus in Isaiah" section giving both views. Cite the Josephus key and a standard Isaiah commentary already in the bibliography (for example Blenkinsopp, Childs). Add one or two sentences on the authenticity of the decree. In `refs`, list Daniel 6:28, which the body cites but the refs leave out.

---

## Minor findings

### Parallel rule and terms

1. **Minor. plain.txt 34:27: "humbled yourself", judged against the Hebrew of both books.** 2 Kings 22:19 has the same verb, וַתִּכָּנַע מִפְּנֵי יְהוָה; Chronicles has it twice (מִלִּפְנֵי אֱלֹהִים ... וַתִּכָּנַע לְפָנַי). By the parallel rule the same Hebrew should get the same English. But "humbled yourself" is the more accurate rendering of Niphal *kana'*. "Bowed low" blurs it with *shachah* ("bow down"). And Chronicles uses *kana'* as a keyword (7:14; 12:6–7; 30:11; 32:26; 33:12, 33:19, 33:23; 36:12), always rendered "humble". **Verdict:** the writer's change is right, and the note explains it honestly. The fault is on the Kings side. **Fix:** add `["kana' (Niphal)", "humble oneself"]` to `content/terms.json`. Ask the 2 Kings 18-25 owner to change 2 Kings 22:19 "bowed low" to "humbled yourself", and the 1 Kings 17-22 owner to change 1 Kings 21:29 "bowed himself low" to match. Then 34:27 can reuse Kings' wording for the shared clause, and the note can be shortened.
2. **Minor. plain.txt 25:24: a needless difference from 2 Kings 14:14.** Both books have אוֹצְרוֹת בֵּית הַמֶּלֶךְ. Kings' Plain says "storerooms of the king's house"; Chronicles says "treasures of the king's house". Use one rendering in both (the site's Kings wording, or ask Kings to change).
3. **Minor. plain.txt 28:2.** Kings 16:3 Plain has "He walked in the road of the kings of Israel." Chronicles' plural בְּדַרְכֵי justifies "ways", but not the reordered "Israel's kings". Write "He walked in the ways of the kings of Israel."
4. **Minor. plain.txt 29:6: terms.json.** מִשְׁכַּן יְהוָה is rendered "the LORD's dwelling", but `terms.json` fixes *mishkan* as "tabernacle". "Dwelling" also matches the NIV ("dwelling place"). Use "the LORD's tabernacle", or propose a context rule in terms.json for *mishkan* meaning the temple.
5. **Minor. glosses 30:25.** "foreigners => resident outsiders" uses "outsider", the site's fixed word for *zar*; terms.json says *nokhri* and *ger* are never "outsider". Use "people from other nations who had settled among Israel".
6. **Minor. Missing parallel notes.**
   - 25:23 "He brought him to Jerusalem" agrees with the Ketiv of 2 Kings 14:13 (ויבאהו); Kings' Qere and Plain have "He came". This is worth a one-line note.
   - 33:3 Chronicles has plural "Baals" and "Asherah poles" and drops Kings' "just like Ahab king of Israel". No note says so.
   - 33:8 has "remove" and "appointed for your ancestors" against Kings' "send ... wandering" and "gave their ancestors". No note says so.

### Variants

7. **Minor. variants 26:5.** The two plains use different verbs for the same word הַמֵּבִין: "a man who understood the visions of God" against "a man who taught him to fear God". The alternative should differ only in the noun: "a man who understood the fear of God". If the writer prefers "taught", it should apply to both readings.
8. **Minor. variants 35:19.** 1 Esdras is listed under "no addition", yet it has its own plus (1:23–24 KJV; 1:21–22 Greek), as the `why` admits. List it as a third reading. State that the 1 Esdras verse numbers are the KJV Apocrypha's; Rahlfs numbers them two lower (1:20 = Passover in the eighteenth year; 1:23 Carchemish; 1:26 Jeremiah; 1:41 eighteen). The same applies to the 1 Esdras references in notes 35:1, 35:20–24, 36:2, 36:6, 36:9 and in the textual-history topic. Also, the Greek plus's `en` leaves out 19d (Judah removed as Israel was, Jerusalem rejected).
9. **Minor. variants 36:9, why.** The Plain prints a number the entry itself calls "almost certainly" a slip. That is allowed under "MT followed throughout", but other parts of this book (01-12 at 1:13, 6:42, 10:14) and of 2 Kings (25:3) correct clear slips. The writer should state the site rule this follows, or follow the eighteen reading with the Masoretic Text as the variant. This is a judgment call for the book owner.

### Facts in notes and pages

10. **Minor. notes 25:4.** "the same four letters, with one moved: *ymtw* for *ywmtw*" is wrong. יָמוּתוּ is ימותו (*ymwtw*) and יוּמְתוּ is יומתו (*ywmtw*): five letters each, with the waw moved. The note also says Kings uses "the same passive verb", but the Ketiv of 2 Kings 14:6's last verb is יָמוּת (Qal, "he will die"; Qere יוּמָת). So Chronicles' "die" has a foothold in Kings' own written text. This is worth saying.
11. **Minor. notes 26:15.** "Torsion catapults are first reported around 400 BC in Sicily": the machines built at Syracuse under Dionysius I (399 BC) were non-torsion arrow-shooters (the *gastraphetes* type). Torsion engines came about 350–340 BC. Write "Catapults are first reported at Syracuse about 399 BC". The Lachish-reliefs alternative (shield frames on battlements, Yadin's reading) is fairly given.
12. **Minor. notes 30:10.** "The same verbs return at the end of the book ... (36:16)" is wrong. 30:10 has מַשְׂחִיקִים וּמַלְעִגִים (*l'g*), while 36:16 has מַלְעִבִים (*l'b*), וּבוֹזִים and וּמִתַּעְתְּעִים. Write "similar words (*mal'igim* here, the rare *mal'ivim* there)".
13. **Minor. notes 35:3.** The Ketiv and Qere are reversed. The written text is הַמְּבוּנִים and the margin הַמְּבִינִים (see the 35:3 variant and texts/auto).
14. **Minor. notes 28:2.**
    - "Ahaz is the only king of Judah given no good word at all": Jehoram (21:4–20) and Amon (33:21–25) get none either. Say "one of the very few".
    - "The next chapter shows a northern prophet and northern leaders" is wrong: Oded and the Ephraimite leaders are in this chapter (28:9–15).
    - The quotation "walked the way of Israel's kings" does not match the site's 2 Kings 16:3 ("walked in the road of the kings of Israel"). The same kind of mismatch is in note 28:5: "could not overcome" against Kings' Plain "were not able to win the fight".
15. **Minor. Bare references that point to the wrong book.**
    - notes 28:24 "(16:15)" means 2 Kings 16:15. As written it links to 2 Chronicles 16:15.
    - chapters.json ch. 36 deep "Jehoiachin's age": "Kings mentions his wives (24:15)" links to 2 Chronicles 24:15.
    - notes 29:16 "(2 Kings 23:6, 23:12)": write "2 Kings 23:12".
16. **Minor. notes 36:10.** The note says "1 Chronicles 3:16 names a Zedekiah son of Jehoiachin", but the verse is ambiguous: "the sons of Jehoiakim: Jeconiah his son, Zedekiah his son". Many read Zedekiah as Jehoiakim's son, Jehoiachin's brother, which would support the Masoretic "brother" here. Others read him as Jeconiah's son, given the "his son" chain in 3:10–14. Give both readings.
17. **Minor. notes 33:19.** "Jewish tradition sometimes identified Hozai with Isaiah" has no source. Give the source (which commentator or midrash) or remove it.
18. **Minor. notes 33:11.** "Pharaoh Necho I was taken in chains to Nineveh": Necho I was the vassal king of Sais, not pharaoh, at the time. Write "Necho I of Sais, father of Psamtik I".
19. **Minor. notes 36:17.** "the Babylonian commanders executed the priests at Riblah": in 2 Kings 25:18–21 Nebuzaradan brings them to Riblah and the king of Babylon has them put to death.
20. **Minor. notes 32:33.** "After Hezekiah, Kings stops recording royal burials": 2 Kings 20:21 already gives Hezekiah no burial notice. Write "From Hezekiah on".
21. **Minor. notes 36:21, seventy-years contribution and core.** The Esarhaddon point is correct but incomplete and unsourced. The Babylon inscriptions say Marduk wrote seventy years for the city's desolation and then turned the tablet to make it eleven. Say so and cite a source (Borger's edition of the Esarhaddon inscriptions, or Lipiński's article on the seventy years). The core and notes also leave out the rabbinic counting of the seventy years in Bavli Megillah 11b–12a, with Belshazzar's and Ahasuerus' miscounts. Add it to "Which seventy years?" as the Jewish view, and add the traditional Christian count from 605 BC to the 536/538 BC return.
22. **Minor. notes 25:12.** "The prophets condemn such cruelty ... (Amos 1:11–13; Amos 2:1)": these verses condemn other atrocities (ripping open pregnant women, burning bones), not throwing captives from a height. Say "other war atrocities" or change the references.
23. **Minor. notes 26:6.** "Excavations at Gath (Tell es-Safi) show a destruction in the 700s BC that some excavators connect with Uzziah." The major destruction at Tell es-Safi is Hazael's, about 830 BC. The 8th-century evidence Maeir's team discusses is an earthquake layer linked with Amos 1:1. Rephrase and name the excavator.
24. **Minor. chapters.json ch. 28 views X.** "Many Christian readers, following F. Scott Spencer, have seen 28:15 as the source": the link was drawn before Spencer's 1984 article, and "many" overstates it. Write "Some scholars, notably F. Scott Spencer (1984)".
25. **Minor. sources.** `holladay-jeremiah` is *Jeremiah 1* (chapters 1–25), but it is cited for Jeremiah 29, 35, 37–38 (notes 36:12, 36:15, 36:21). Add Holladay's *Jeremiah 2* (Hermeneia 1989) as a key, or cite Lundbom's *Jeremiah 21–36* or *Jeremiah 37–52* (`lundbom-jer3` exists in 2Ki 18-25).

### Chapter pages, glosses, style

26. **Minor. chapters.json quotations that do not match the Plain.**
    - ch. 25 sum: "a fable of a thistle and a cedar"; the Plain says "thornbush".
    - ch. 25 readings: "Are we making you the king's counselor?"; the Plain says "Is it the king's counselor we have made you?"
    - ch. 26 sum: "for he was marvelously helped, until he was strong"; the Plain says "for help came to him in wonderful ways, until he was strong".
    - ch. 25 echoes list "2 Kings 25:4", which has nothing to do with Amaziah. Probably 2 Kings 14:19 was meant.
27. **Minor. glosses.** A few glosses are harder than the text or decide a debated point.
    - 33:6 "looked for omens => practiced augury" and "read signs => practiced divination" use technical words. Try "watched for lucky signs" and "tried to tell the future".
    - 35:23 "shooters => archers" is a translation, not a gloss.
    - 34:28 "in peace => before the disaster came" picks one of the views in note 34:28.
    - 35:25 "the Laments => now lost" picks one of the views in note 35:25.
28. **Minor. Smaller translation points.**
    - 32:26 "in the height of his heart's pride Hezekiah humbled himself" reads as if he humbled himself at the peak of his pride. Hebrew בְּגֹבַהּ לִבּוֹ is "for (or from) the pride of his heart".
    - 32:31 "God stepped back from him" softens עֲזָבוֹ "God left him". The note itself says "left".
    - 36:19 "fine houses" for אַרְמְנוֹתֶיהָ: write "fortified palaces".
    - 30:7 renders שַׁמָּה "gave them up to ruin", but 29:8 has "a horror". Keep one rendering.
    - 29:30 "They praised on and on, till joy came" over-reads עַד־לְשִׂמְחָה "with joy".
    - 31:2 "the LORD's camp" is plural in the Hebrew (מַחֲנוֹת), as the note says: "camps".
    - 26:6 "in Ashdod's land" adds "land"; write "near Ashdod" or "in the region of Ashdod".
29. **Minor. plain.txt: sentence length.** About 60 sentences run over 30 words, against the brief's "sentences mostly under 20 words". The longest are 34:9 (50 words), 33:7 (48), 34:31 (47), 25:18 (44), 33:19 (44), 31:2 and 31:19 (43), 34:8 (43), 31:10 (42) and 29:12 (41). Split them where the Hebrew chain allows, as was done in 33:12–13.
30. **Minor. topics/seventy-years.json and the 36:21 notes: Daniel 9.** Daniel 9's rereading is mentioned without its views: the traditional Christian messianic count to Christ, the critical reading pointing to Antiochus IV (Collins), and the rabbinic count to AD 70 (Seder Olam 28). One sentence with a pointer to the Daniel topic would cover it.

### Checked and found sound (no action)

- **1 Esdras claims.** 1 Esdras opens with the Passover, dated the 14th of the first month. Carchemish is at 1:25, Jeremiah at 1:28, Josiah's death at Jerusalem at 1:31, Jehoiakim taken to Babylon at 1:40, and eighteen years at 1:43 (all KJV numbering). The 35:19a–d plus exists (Brenton; biblehub). Its content (mediums, teraphim, no king like him, anger for Manasseh, Judah removed) matches 2 Kings 23:24–27.
- **35:20 and 35:22 Greek** are as reported (ἐπὶ τὸν βασιλέα Ἀσσυρίων; ἐκραταιώθη). So is **36:6** (ἀπήγαγεν αὐτὸν εἰς Βαβυλῶνα) and **26:7** (ἐπὶ τῆς πέτρας).
- **Fairness.** Manasseh against 2 Kings 21, 23:26 and 24:3 (notes 33:10, 33:12; topic manasseh) and the Prayer of Manasseh (Odes in Alexandrinus, Didascalia, 4Q381 33 8–11) are fair and accurate. So are Josiah and Neco (35:21–24, 34:28), Hezekiah's northern invitation (30:1), the empty land (36:20, Barstad), and the Cyrus Cylinder (found 1879, British Museum, no mention of Judah).
- **Spot-checked rabbinic references:**
  - Leviticus Rabbah 19:6 and Bavli Sanhedrin 103b on Jehoiakim's tattoo
  - Sanhedrin 103b–104a on Ahaz
  - Sukkah 45b on Jotham (Rashi's explanation)
  - Yerushalmi Sanhedrin 10:2 *vayyechater*
  - Targum Chronicles' bronze mule
  - Mishnah Middot 1:3 (the Huldah Gates)
- **Spot-checked history and archaeology:** Josephus *Antiquities* 9.222–227 and *War* 6.423–425; the Mu'unaya in Tiglath-pileser III's inscriptions; "Jehoahaz of Judah" in the tribute lists; the Zincirli stele; the Rassam Cylinder; the Siloam inscription (1880, Istanbul; Frumkin 2003).
- **Quotations** of the site's 1 Kings 8:50, 1 Kings 13:2, 1 Kings 22:30, 2 Kings 6:16, 2 Kings 19:18, 2 Kings 20:3 and 20:20, Exodus 12:9, Numbers 16:40, Deuteronomy 8:2, 16:7 and Leviticus 26:34 match the site's Plain.
- **Mechanics.** `node tools/build.js --check 2Ch/25-36`: 0 errors, 0 warnings.

## Fixes applied

All findings were addressed. `node tools/build.js --check 2Ch/25-36` returns 0 errors and 0 warnings, as do `--check 2Ch` and the full build (0 errors).

**Major**
1. 26:2 now prints Eloth. The note is rewritten (Kings has Elath, Chronicles Eloth, as at 8:17), the gloss moved to "Eloth", and a new variant added (MT Eloth against 2 Kings 14:22 and Rahlfs Αιλαθ). PROGRESS.md corrected.
2. The Greek was checked in Rahlfs at blueletterbible.org. Every Septuagint reading now has the Greek in `orig` and is labelled "Septuagint (Rahlfs)", with `rahlfs-lxx` in `s`. Hebrew forms behind the Greek are marked "reconstructed" (32:22, 35:22). Exception: 35:19a–d is not printed on the blueletterbible page, so it is cited from Brenton (Codex Vaticanus) and labelled that way.
3. 30:27: the Septuagint (οἱ ἱερεῖς οἱ Λευῖται) moved to the MT side, and the note corrected. The "and" reading is left with Hebrew MSS, the Syriac and the Vulgate, as reported by Allen and BHS; these were not checked independently.
4. 34:22: the reading is now Rahlfs' Chronicles text, Σελλημ υἱοῦ Θακουαθ υἱοῦ Χελλης.
5. 36:8: re-anchored on "the abhorrent things he did and what was found against him". The Greek reading is now "all that he did ... buried in Ganoza", with the garden-of-Uzza identification moved to `why`. Note corrected.
6. 36:9: eighteen is now credited to Rahlfs, Alexandrinus and Lucianic, Syriac, 1 Esdras 1:43 (KJV numbering; 1:41 Rahlfs) and some Hebrew MSS; eight to the MT and Vaticanus. Note corrected.
7. 36:22: 1 Esdras 2:1 (ἐν στόματι) and the Septuagint (διὰ στόματος) moved to the Chronicles reading; Ezra 1:1 MT alone has "from". Note updated.
8. New variants at 36:2 (2a–c) and 36:4 (end of 36:4 and 4a), with Rahlfs Greek. The 36:5 entry now covers 36:5 and 5a–d only, and names the mother Rahlfs gives (Zechora daughter of Nerias, from Rama).
9. Drift: all the flagged verses were rebuilt from the literal line with new sentence shapes: 25:9, 25:13, 26:15, 26:19, 28:9, 28:20, 30:1, 30:9, 30:22, 31:1, 32:28, 32:30, 33:13, 33:15, 35:5, 35:7, 35:11–13, 35:20, 35:21 and 36:14. They were re-audited (outcomes logged by verse only, no NIV/ESV text). Notes, glosses and quotations were re-anchored.
10. Every theory box (ch. 25, 32, 36) and the two topic "claude" boxes (uzziah, manasseh) now open with "Claude's theory" or "Claude's reading" and name the overlapping published work: Williamson 1977; Japhet and Dillard on the tribute; Japhet, Williamson and Klein on the open ending; Japhet and Klein on the help/strength wordplay; Japhet and Williamson on Manasseh.
11. topics/cyrus.json has two new sections. "Cyrus in Isaiah" gives the traditional view (Josephus, <i>Antiquities</i> 11.5–7; Oswalt) and the critical view (Blenkinsopp). "Is the decree authentic?" sets Bickerman 1946 against scholars who think it was shaped by Jewish writers (Kuhrt on the Cylinder). Daniel 6:28 added to the refs. New keys: bickerman-edict, blenkinsopp-isaiah2, oswalt-isaiah2.

**Minor**
1. 34:27: the coordinator aligned 2 Kings 22:19 and 1 Kings 21:29, and terms.json has kana'. 34:27 already matches the new 2 Kings 22:19 Plain where the Hebrew matches. The note is rewritten to describe only the real differences ("before God", the double verb, no "ruin and curse").
2. 25:24 now reads "storerooms of the king's house", as in Kings.
3. 28:2 now reads "He walked in the ways of the kings of Israel"; the note anchor was updated.
4. 29:6 now uses "the LORD's tabernacle", per terms.json.
5. The 30:25 gloss is now "people from other nations who had settled among Israel".
6. New notes at 25:23 (agrees with Kings' Ketiv "brought him"), 33:3 (plural Baals and Asherah poles, Ahab dropped) and 33:8 ("remove" and "appointed" against Kings' "send wandering" and "gave"). While writing these I also found that 33:3's "pulled down" renders the same verb as Kings' "torn down", so it now reads "torn down".
7. The 26:5 alternative is now "a man who understood the fear of God".
8. 35:19: 1 Esdras added as a third reading, and 19d added to the Greek summary. The 1 Esdras numbering convention (KJV, about two higher than Rahlfs) is stated in the 35:1 note, in the chapter 35 page and in the variants.
9. 36:9 `why`: the Plain keeps the MT number, as for every number in this part, and the entry flags that the book owner may prefer eighteen. Left for the owner to decide.
10. 25:4: five letters with the waw moved; the Ketiv of 2 Kings 14:6 (yamut) is now mentioned.
11. 26:15: catapults are now dated to Syracuse about 399 BC, torsion engines to about 350 BC.
12. 30:10: now reads "similar words (mal'igim / mal'ivim)".
13. 35:3: the Ketiv and Qere are no longer reversed.
14. 28:2: now "one of the very few", "later in this same chapter", and the quotation matches the Kings Plain. The 28:5 quotation now matches too.
15. Fixed (16:15) to 2 Kings 16:15, (24:15) to 2 Kings 24:15, and 23:12 to 2 Kings 23:12. All bare references in topic contributions now carry "2 Chronicles".
16. 36:10: both readings of 1 Chronicles 3:16 are now given.
17. 33:19: the unsourced Hozai and Isaiah claim was removed.
18. 33:11: now "Necho I of Sais, father of Psamtik I".
19. 36:17: Nebuzaradan brought the priests to Riblah, and the king of Babylon had them executed.
20. 32:33: now "From Hezekiah on".
21. Esarhaddon (seventy turned to eleven; borger-esarhaddon) is in the 36:21 note, the seventy-years core and the contribution. Bavli Megillah 11b–12a and the traditional Christian count (605 to 538/536 BC) were added.
22. 25:12: now "other war atrocities".
23. 26:6: rewritten as Hazael's destruction about 830 BC plus the 8th-century earthquake layer (Maeir).
24. Chapter 28 X lens: now "Some scholars, notably F. Scott Spencer (1984)".
25. Added holladay-jeremiah2 (Jeremiah 2, 1989) and cited it for Jeremiah 26–52. Note 36:12 now cites lundbom-jer3.
26. Chapter-page quotations were fixed: thornbush, counselor and "help came to him in wonderful ways". The ch. 25 echo is now 2 Kings 14:19.
27. Glosses: "tried to tell the future", "watched for lucky signs", shooters as "men with bows". The 34:28 gloss was removed, and the 35:25 gloss no longer says "lost".
28. 32:26 now reads "humbled himself for the pride of his heart". Also fixed: 32:31 "God left him", 36:19 "fortified palaces", 30:7 "made them a horror", 29:30 "praised with joy", 31:2 "camps", 26:6 "in the region of Ashdod".
29. Sentences split at 26:21, 31:1–3, 31:10, 31:16, 31:19, 32:31, 33:7, 33:19, 34:4, 34:8, 34:9 and 34:31. Left long: 25:18, 25:24 and 28:3, which reuse the site's 2 Kings Plain under the parallel rule, and the name lists 29:12 and 31:13, which have no natural break.
30. A "Daniel's seventy weeks" section was added to the seventy-years core: Christian messianic count, Collins and Antiochus IV, and Seder Olam 28. The 36:21 note points to the Daniel topic.
