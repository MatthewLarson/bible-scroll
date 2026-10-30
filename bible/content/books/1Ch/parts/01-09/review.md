# Hostile review: 1 Chronicles 1–9 (part 01-09)

Reviewed: plain.txt (all 407 verses against `node tools/literal.js 1Ch <ch>` and the Leningrad text), notes.json (188), variants.json (25), glosses.json (80), chapters.json (9), topics.json (29 contributions), the part's sources.json, the new topic cores `content/topics/jabez.json` and `zerubbabel.json`, and the new shared keys `bavli-temurah`, `bavli-zevachim` and `ginzberg-legends`. Parallels were checked against this site's Plain English Translation of Genesis 5, 10, 11, 25, 36 and 46, Exodus 6, Numbers 26, Joshua 19 and 21, Ruth 4, 1–2 Samuel and Kings. Greek readings were checked against Brenton's translation (ebible.org/eng-Brenton) and, for 3:19, Rahlfs' Greek text as given on blueletterbible.org. English-version readings were checked on biblehub.com. `node tools/build.js --check 1Ch/01-09` gives 0 errors and 0 warnings. `--check 1Ch` gives 0 errors and 2 warnings, both in other parts (10:14, 14:12).

## Verdict

The translation is careful and faithful. I compared every name and number in the 407 verses with the Hebrew and found no wrong or dropped name and no wrong number. The Plain English Translation keeps the Hebrew spelling of each verse (Diphath, Rodanim, Sabta, Alian, Homam, Hamran, Jaakan, Dishon, Hadad, Pai, Salma, Dara, Tilgath-pilneser, Non, Gershom/Gershon, Eliphalet/Eliphelet), and where the Hebrew is the same as Genesis 10, 25 and 36, Genesis 46:17 or Joshua 21, it uses this site's wording almost exactly. I found no NIV/ESV drift in 4:9–10, 4:39–43, 5:18–26 or 7:21–24, and only a small interpretive "again" in 9:2. Terms follow terms.json (ma'al, cherem, nagid, ro'eh, eved, nasi, tabernacle, tent of meeting). The weak spots are the apparatus and some facts:

- One variant entry misreports what the Greek says (2:24), and another gets the Greek wrong in its reason (8:38).
- Seven entries say the wrong thing about which English versions follow which reading.
- One departure from the Leningrad Codex (6:58 "Hilen") is made silently in the Plain English Translation and contradicts the part's own statement that 6:28 is "the one place" it leaves the Masoretic Text.
- Two readings that major English versions print (Darda at 2:6, Bathsheba at 3:5) have no variant entry.
- The headline claim of the 1:29 note ("the only toledot in Chronicles") is false. The word occurs nine times in 1 Chronicles.
- A Talmud citation (Berakhot 4a at 3:1) is attributed to the wrong source.
- Neither "Claude's theory" box says where published work overlaps.

None of this is critical, but the major items must be fixed before publishing.

**Counts:** critical 0, major 9, minor 22.

## Findings

### Major

**1. Major: variants.json 2:24. The Greek and Latin reading is misreported, and the "why" is false.**
The second reading is labeled "Greek and Latin Vulgate," with Greek `... ἦλθεν Χαλεβ εἰς Εφραθα, καὶ ἡ γυνὴ Εσερων Αβια` and the plain "After Hezron died, Caleb went in to Ephrathah, his father Hezron's wife." But the Greek quoted in the entry itself keeps *Abia* as a name ("and the wife of Hezron was Abia"). Brenton 2:24 reads: "And after the death of Esron, Chaleb came to Ephratha; and the wife of Esron was Abia; and she bore him Ascho[r]." The Vulgate likewise reads "ingressus est Chaleb ad Ephrata. Habuit quoque Esrom uxorem Abia." So the Greek and Latin support only "Caleb went in to Ephrathah." "His father" (reading *aviv* for *aviyyah*) is a modern conjecture adopted by the NRSV and ESV. It is not in the Greek. The "why" says "The Greek reading requires changing ... *aviyyah*, 'Abijah,' to *aviv*, 'his father'," which is untrue.
**Fix:** Split the evidence into two parts. (a) Greek and Vulgate: "After Hezron died, Caleb went in to Ephrathah. Hezron's wife was Abijah, and she bore him Ashhur." (b) A modern conjecture (NRSV, ESV) that also reads *aviv*. Rewrite the "why" to match. The point about Leviticus 18:8 applies only to the conjecture.

**2. Major: variants.json. Several entries name the wrong English versions for a reading.**
STYLE requires the writer to "be honest about ... which translations follow which reading." Checked on biblehub.com and in texts/en:
- 1:17: The NIV and BSB are listed for the MT, but both add "The sons of Aram." Only the KJV keeps the MT here.
- 4:13: The NIV and BSB are listed for the MT, but both add Meonothai.
- 6:27: The ESV is listed for "Samuel his son," but the ESV ends "Elkanah his son." The NIV does add Samuel.
- 6:59: The NIV and BSB are listed for the MT, but both add Juttah ("Ashan, Juttah and Beth Shemesh"). The ESV is listed for Juttah, but the ESV lacks it.
- 6:60: The BSB is listed for the MT, but the BSB has Gibeon ("Gibeon, Geba, Alemeth, and Anathoth").
- 9:41: The KJV is listed for the MT, but the KJV supplies "[and Ahaz]" in italic brackets.
- 6:26: The Qere reading names no version, though the KJV follows it ("the sons of Elkanah").

**Fix:** Correct each list. While doing so, recheck every version credit in the file.

**3. Major: plain.txt 6:58 and notes 6:58. "Hilen" departs from the Leningrad Codex without a variant entry, against the part's own rule.**
The Leningrad Codex reads חִילֵז, *Hilez* (literal.js: "Hilez"). The Plain English Translation prints "Hilen," and only a note explains the choice. The variant on 6:28 says "This is the one place in these chapters where the Plain English Translation leaves the Masoretic Text," so the two entries contradict each other. The note's claim that "most Hebrew manuscripts of Chronicles have Hilen" has no source. Hilen is the reading of the printed Rabbinic Bible, which the KJV and BSB follow, and Joshua 21:15 has Holon. Calling the base text's *zayin* "a slip" may be right, but the policy is to follow the Leningrad Codex and record departures.
**Fix (preferred):** Print "Hilez" and add a variants.json entry: Leningrad Hilez (followed) / other Masoretic manuscripts and printed editions Hilen (KJV, BSB) / Joshua 21:15 Holon. If the writer keeps "Hilen," add the variant entry anyway, cite a source for "most manuscripts" (BHS/BHQ or Barthélemy), and remove "the one place" from the 6:28 entry.

**4. Major: notes 1:29 ("The only toledot in Chronicles"). The claim is false.**
The note says "Chronicles uses the word only here." The word תֹּלְדוֹת occurs in 1 Chronicles at 1:29, 5:7, 7:2, 7:4, 7:9, 8:28, 9:9, 9:34 and 26:31 (lemma H8435 in texts/orig). Six of those are in this part, where the Plain English Translation renders the word "family lines."
**Fix:** Rewrite the note. This is the only place Chronicles uses *toledot* as a Genesis-style heading ("This is their family history"). Elsewhere it uses *le-toledotam*, "by their family lines," in its muster lists (5:7; 7:2, 4, 9; 8:28; 9:9, 34). Change the title.

**5. Major: variants.json. No entry for 2:6 Dara or Darda.**
The Hebrew דָרַע (Dara) is followed. But many Hebrew manuscripts, the Syriac and the Targum read Darda, as in 1 Kings 4:31. The Greek has Darad (Brenton: "and Calchal, and Darad"), and the NIV and NLT print "Darda." STYLE requires an entry where a major English version follows another reading. The 2:6 note mentions "Dara for Darda" but gives no witnesses.
**Fix:** Add an entry: MT Dara (KJV, ESV, NASB, CSB; followed) / many Hebrew manuscripts, Syriac, Greek (Darad), 1 Kings 4:31: Darda (NIV, NLT).

**6. Major: variants.json. No entry for 3:5 Bath-shua or Bathsheba.**
The BSB and NIV print "Bathsheba" with a footnote. The Greek reads Bersabee (Brenton: "four of Bersabee the daughter of Amiel"), and the Vulgate reads Bethsabee. The 3:5 "views" note discusses the name but never says that witnesses differ. The brief listed this verse as a likely gap.
**Fix:** Add an entry: MT Bath-shua (KJV; followed) / one Hebrew manuscript (as reported), Greek, Vulgate, 2 Samuel 11:3: Bathsheba (NIV, BSB). In the "why," point to the 2:3 echo, which is the reason the MT reading matters.

**7. Major: variants.json 8:38. The Greek is misdescribed, and the reason given for following the MT is false.**
The "why" says that with the Greek "his firstborn," "the six does not add up." But the Greek has six names: it adds Asa at the end. Brenton: "Ezricam his first-born, and Ismael, and Saraia, and Abdia, and Anan, and Asa: all these were the sons of Esel." The entry's Greek reading drops Asa.
**Fix:** Give the full Greek reading (with Asa) and rewrite the "why." The MT can still be followed as the harder reading, and Asa may have come in by dittography from *Azel*/*Asa*, but the count argument has to go.

**8. Major: notes 3:1. A midrash is attributed to the wrong source.**
The note says a midrash explains "Chileab" as "like his father," proof that Nabal was not the father, and cites Bavli Berakhot 4a. Berakhot 4a says something else: the boy's name was Daniel, and he was called Kileab because he put Mephibosheth to shame (*makhlim*) in rulings of halakhah. The "resembled his father" explanation is found in Rashi on 2 Samuel 3:3 and in other midrash, not in Berakhot 4a.
**Fix:** Cite Berakhot 4a for what it actually says (Daniel/Kileab and the Mephibosheth explanation). Cite Rashi on 2 Samuel 3:3 for the "like his father" reading, or drop that reading.

**9. Major: chapters 3 (spec box) and topics.json genealogies (`claude`). Claude's theories do not say where published work overlaps (STYLE rule 4).**
- The chapter 3 box ("the list is shaped like the temple's rebuilding") rests on two points: that Haggai 2:23's "signet ring" reverses Jeremiah 22:24, and that the names of Zerubbabel's children express hope. Both are standard in the commentaries (for example Meyers and Meyers on Haggai; Japhet, Klein and Knoppers on 3:19–20). The box presents them as Claude's own.
- The genealogies topic's `claude` box ("The stories inside the lists are one lesson repeated") is essentially the published view that Chronicles teaches retribution within a generation, the Japhet/Williamson reading. The writer's own 2:3 note credits it to "many scholars."

**Fix:** In each box, add a sentence saying what is already in print and what, if anything, is new. Narrow the claim to the new part, or move the box into an ordinary "views" note.

### Minor

**10. Minor: variants.json 3:19. The Greek witness is uncertain.**
The entry credits "Codex Vaticanus and others" with "Shealtiel's sons." Rahlfs' text does read Σαλαθιηλ, but Brenton's Greek, which is largely based on Vaticanus, reads "the sons of Phadaias; Zorobabel." **Fix:** Write "Greek (Rahlfs' text; the manuscripts are divided)" and drop the claim about Vaticanus unless it can be confirmed.

**11. Minor: 4:17. A Greek reading is missing.**
The Greek supplies a subject for "she conceived": "and Jether begot Maron (Miriam), and Semei, and Jesba" (Brenton). The note discusses only moving 4:18b. **Fix:** Add the Greek reading to the 4:17 note, or make a variant entry: MT "she conceived" (followed) / Greek "Jether fathered."

**12. Minor: 1:6 (Diphath/Riphath) is handled only as a note.**
The NIV and BSB print Riphath. STYLE says to prefer variants.json when a major translation follows another reading. **Fix:** Move 1:6 into variants.json: Leningrad Diphath (followed) / many Hebrew manuscripts, Greek, Vulgate, Genesis 10:3: Riphath (NIV, BSB). Keep the note short. (1:7 Rodanim can stay a note, since the versions agree with the MT.)

**13. Minor: notes 3:6. The witnesses for Elishama/Elishua are missing.**
The note calls the first Elishama "very likely a copying slip" but does not say that the Greek reads Elisa (Elishua) here (Brenton: "Ebaar, and Elisa, and Eliphaleth"), as 14:5 and 2 Samuel 5:15 do. **Fix:** Name the Greek, and any Hebrew manuscripts BHS lists.

**14. Minor: Qere readings are followed without any note.**
The brief says the Qere is followed throughout, but only 1:46, 1:51, 3:24, 4:7, 4:41, 6:26, 7:1, 7:31, 7:34 and 9:35 mention it. The most significant silent one is 9:4: the Ketiv בִּנְיָמִן ("Benjamin"), the Qere בָּנִי מִן ("Bani, of"). The Ketiv would make Uthai's ancestor "Benjamin," a son of Perez. Also unmentioned: 6:35 (Ketiv Ziph, Qere Zuph), 1:11, 2:55, 4:20, 8:25, 9:33. **Fix:** Add a short note at 9:4. Add 6:35 to the Ketiv/Qere list in the 1:46 note or the ketiv-qere topic section.

**15. Minor: names harmonized or rendered inconsistently.**
- 2:16: The Hebrew is אַבְשַׁי, *Abshai*, and the Plain English Translation has "Abishai" with no note. The same form recurs in 11:20, 18:12 and 19:11, 15. Either print Abshai or add a note, as was done for Ishai/Jesse at 2:13.
- 7:2: "Shemuel" stands for שְׁמוּאֵל, which the Plain English Translation renders "Samuel" in 6:28 and 6:33 and which is the site's spelling of that Hebrew form. Use Samuel, or explain why not.
- 6:78: The Plain English Translation has "Jahzah," but Joshua 21:36 has the same Hebrew form (יַהְצָה) and the site's Joshua prints "Jahaz." The brief's rule is to use the established site spelling for the same Hebrew form. Choose one spelling and align the two books.
- 2:3 and 3:5: The same Hebrew, בַּת־שׁוּעַ, is "Shua's daughter" in 2:3 but "Bath-shua" in 3:5. The 2:3 note's point about the echo depends on readers seeing one name. Render it alike in both verses, or have the notes say plainly that it is the same Hebrew.
- 2:13: Jesse for *Ishai* is acceptable with the note. Weigh it against the strict "Hebrew form of that verse" rule applied elsewhere (Non, Homam, Sabta).

**16. Minor: plain.txt 3:2. The parallel wording differs where the Hebrew is the same.**
The Plain English Translation has "The fourth was Adonijah son of Haggith." 2 Samuel 3:4 on this site has "The fourth was Adonijah, Haggith's son," and the Hebrew is identical (אֲדֹנִיָּה בֶן־חַגִּית). **Fix:** Use the 2 Samuel wording.

**17. Minor: plain.txt 9:2 ("The first to live again in their own holdings"). An interpretive "again," close to the NIV's "resettle."**
The Hebrew הַיּוֹשְׁבִים הָרִאשֹׁנִים means "the first (or former) inhabitants." "Live again" decides a debated point, whether *ha-rishonim* means the first to return or the former, pre-exilic, inhabitants, and it echoes the NIV's interpretive "the first to resettle." Chapter 9's summary repeats "settle again." **Fix:** "The first inhabitants who lived in their own holdings, in their towns, were..." Add a deb note giving both senses (compare Nehemiah 11:3).

**18. Minor: notes 9:1 (ma'al). A bare reference points to the wrong book.**
"Ahaz (28:19)" reads as 1 Chronicles 28:19. **Fix:** "2 Chronicles 28:19."

**19. Minor: notes 2:11, 2:9 and chapter 2 "deep." The New Testament textual facts are wrong or inconsistent.**
- 2:11 says Luke 3:32 has Salmon, "though some manuscripts of Luke read Sala." In fact Sala is the reading of NA28/SBLGNT (P4, Sinaiticus, Vaticanus), and Salmon is the Byzantine reading.
- The 2:9 note says "the oldest manuscripts" of Luke 3:33 read Admin and Arni, while the chapter 2 deep section says "some manuscripts ... insert Admin and Arni."
- The same section says the names from Judah to David "follow 1 Chronicles 2:1–15 exactly," then notes Salmon versus Salma.

**Fix:** State the critical text correctly, make the two Luke statements agree, and drop "exactly."

**20. Minor: notes 4:10 (israel) and topic jabez ("Jabez in Jewish tradition"). Temurah 16a is paraphrased loosely.**
In Temurah 16a and the Targum, "and keep (me) from evil" (*ve-asita me-ra'ah*) is read as "provide me with companions (*re'im*) like myself." It is "so that it does not grieve me" that refers to the evil inclination. The note and the topic attach the evil inclination to "keep harm away." The Targum also reads "bless me" as "with children," not "with Torah," so "a similar reading" overstates the agreement. **Fix:** Correct the clause-by-clause paraphrase.

**21. Minor: notes 8:34, chapter 8 summary and topics saul. The generation counts disagree.**
The 8:34 note says "ten more generations" after Micah; the chapter 8 summary and the saul topic say "twelve." Counting from Micah: Ahaz, Jehoaddah, Zimri, Moza, Binea, Raphah, Eleasah, Azel and Azel's sons make nine, and Ulam's grandsons add about two more. **Fix:** Use one figure, about ten or eleven generations to Ulam's grandsons, everywhere.

**22. Minor: chapter 6 "deep," topics tribe-of-dan and priesthood. These contradict the writer's own 6:68 note.**
- They say "Dan's four towns are gone from 6:61 and 6:69." But 6:69 lists Aijalon and Gath-rimmon, which are Dan's towns in Joshua 21:24, as the 6:68 note says.
- The priesthood topic says "Forty-eight towns ... are listed." That is the total Numbers and Joshua give; the damaged list here has fewer.

**Fix:** "Eltekeh and Gibbethon are missing, and Dan's other two towns appear under Ephraim." Say "forty-eight in Joshua; fewer survive here."

**23. Minor: topics.json lost-tribes. The section claims 5:26 is "the earliest statement that some tribes had not returned."**
2 Kings 17:23 already says Israel was exiled to Assyria "to this day," and Kings is earlier than Chronicles. **Fix:** Remove "earliest," or compare the two passages.

**24. Minor: notes 6:10. The commentary's author is misnamed.**
The note says "Rashi's commentary on Chronicles takes this second view," but the source key is `pseudo-rashi-chronicles`. **Fix:** "The commentary on Chronicles printed under Rashi's name."

**25. Minor: notes 1:1. An overstatement.**
The note says "Only one other biblical genealogy goes all the way back to Adam: Luke's." Genesis 5 itself begins with Adam. **Fix:** "Only one other genealogy *of Israel's line* starts from Adam outside Genesis: Luke's."

**26. Minor: glosses.**
- 4:10 "God brought about what he asked" is glossed "God granted his request," which is the NIV's wording, word for word. Choose other words, for example "God gave him what he asked for."
- 1:19 "the earth was split up" is glossed "the world's peoples were divided." That builds in the Babel reading, which the 1:19 note itself calls one option among several. Use a neutral gloss, for example "the land was divided up."

**27. Minor: notes 5:10. The Hagrite identification is overstated.**
Tiglath-pileser III's Hagaranu are listed among Aramean tribes along the Tigris and in Babylonia, not "the desert fringe." Calling them "very likely the same group" goes beyond what the sources show. **Fix:** "Possibly related to the Hagaranu, an Aramean tribe in Tiglath-pileser III's lists."

**28. Minor: notes 4:23.** The note says "Hundreds of jar handles stamped *lmlk*." Well over a thousand are known (commonly cited as about 2,000). **Fix:** Write "Well over a thousand."

**29. Minor: notes 4:9.** The note says "the Reubenites' prayer in battle (5:20)." The fighters in 5:18–20 are Reuben, Gad and the half-tribe of Manasseh. **Fix:** Write "the eastern tribes' prayer in battle."

**30. Minor: mechanics and style.**
- Notes 8:28 and 8:34 repeat a reference just given: "Judges 1:21 says '...' (Judges 1:21)" and "2 Samuel 9:12 mentions ... (2 Samuel 9:12)." Drop the second reference.
- The 4:22 note transliterates the same word as *Lachem* in `orig` and *Lechem* in the body. Use one form.

**31. Minor: chapters.json 3 summary.** It says the list "keeps going for several generations more, past the Chronicler's own day." That cannot be true unless later hands extended the list, which is a view the chapter gives elsewhere. **Fix:** "down to, or near, the Chronicler's own day."

### Checked and found sound (no action)

- **Names and numbers:** every name and every number in chapters 1–9 matches the Hebrew. This includes 5:18 (44,760), 5:21, 7:2–11, 7:40, 9:6, 9:9, 9:13 and 9:22.
- **Ketiv/Qere notes:** where Ketiv and Qere are noted, the two readings are correctly identified. This includes 6:26, where the Qere is בְּנֵי and the Ketiv בְּנוֹ.
- **Greek readings:**
  - Vaticanus' gaps at 1:11–16 and 1:17b–23 are confirmed by Brenton.
  - 1:4 "sons of Noah," 1:7 "Rhodians," 4:3 "sons of Etam," 4:39 Gerar and 8:30 Ner (Vaticanus) agree with Brenton.
  - The Greek of 6:28 follows the MT ("Sani, and Abia"), as the entry implies by crediting only the Lucianic Greek and the Syriac.
- **Rabbinic citations confirmed:**
  - Temurah 16a: Jabez is Othniel.
  - Megillah 13a: Bithiah, "the Judean," the names of Moses, Mered as Caleb.
  - Leviticus Rabbah 1:3 and 19:6.
  - Bava Batra 91b and 15a.
  - Sanhedrin 92b (the Ephraimites who left early), 99b (Timna) and 7a (Hur).
  - Zevachim 54b (Samuel and David at Ramah).
  - Yevamot 78b–79a (Netinim as Gibeonites).
  - Genesis Rabbah 84:19 (Reuben's repentance) and 94:9 (Serah).
  - Avot 5:16 (David and Jonathan).
  - Sotah 37a (Nahshon).
  - Tamid 1:1, Middot 1:1 and Yoma 3:11.
  - Tanchuma, Toledot, and the Targum on Anani.
- **Archaeology:**
  - The Weidner tablets: published 1939, Ya'u-kinu, five sons, about 592 BC.
  - The Shelomith seal: Avigad 1976; Meyers' suggestion; the provenance caveat.
  - The Mesha Stele, including lines 13 and 18–20, 27.
  - Pulu as Tiglath-pileser's Babylonian name.
  - Ono and Lod in Thutmose III's list.
- **Jabez and the Prayer of Jabez movement:** both are treated fairly. Supporters' and critics' views are given in their strongest form, and the land reading is offered as context, not as a put-down.
- **Matthew 1 and Luke 3:** the comparison is accurate (four kings omitted; Nathan; Rhesa and Abiud; Africanus in Eusebius, *Church History* 1.7). The exceptions are noted in item 19.
- **Sources:** all seven keys in the part's sources.json are real works with correct details. The new shared keys `bavli-temurah`, `bavli-zevachim` and `ginzberg-legends` (7 vols., 1909–1938) are correct. Every source key resolves.
- **New topic cores:** `jabez` and `zerubbabel` are accurate and are not duplicates of existing topics.

## Fixes applied

**Major**
1. 2:24 variant rewritten with three readings. (a) The MT is followed. (b) The Greek (Brenton) and the Vulgate read "Caleb went in to Ephrathah" and keep Abia/Abijah as Hezron's wife. (c) The *aviv* "his father" reading is labeled a modern conjecture with no ancient witness (ESV, NRSV). The "why" was rewritten, and Leviticus 18:8 now applies only to the conjecture.
2. English-version credits corrected:
   - 1:17: MT is KJV only; Aram reading is NIV, BSB.
   - 4:13: MT is KJV only; Meonothai is NIV, BSB.
   - 6:26: the Qere now lists KJV.
   - 6:27: MT is KJV, ESV, BSB; Samuel is NIV.
   - 6:59: MT is KJV, ESV; Juttah is NIV, BSB.
   - 6:60: MT is KJV; Gibeon is NIV, BSB.
   - 9:41: the KJV is no longer listed for the MT; the entry says it supplies "and Ahaz" in italics.
   - Every unverified NRSV credit was removed, except the 2:24 conjecture.
3. 6:58 now prints Hilez, as the Leningrad Codex has it. A new variant gives Hilez (followed), Hilen (other Masoretic manuscripts and the printed editions; KJV, BSB) and Holon (Joshua 21:15). The old 6:58 note and its "most manuscripts" claim were removed. The 6:28 entry now says it is the one place the Plain English Translation does not follow the Leningrad Codex read with its Qere.
4. 1:29 note retitled ("A heading borrowed from Genesis"). It now says this is the only Genesis-style *toledot* heading, and lists the *le-toledotam* uses in the muster lists (5:7; 7:2, 4, 9; 8:28; 9:9, 34).
5. New variant at 2:6: Dara (MT; KJV, ESV; followed) / Darda (many Hebrew manuscripts, Syriac, Targum, 1 Kings 4:31; Greek Darad; NIV). The 2:6 note points to it.
6. New variant at 3:5: Bath-shua (MT; KJV, ESV; followed) / Bathsheba (one Hebrew manuscript as reported, Greek, Vulgate, 2 Samuel 11:3; NIV, BSB). The "why" explains the echo of 2:3.
7. 8:38 variant rewritten. It now gives the full Greek reading with Asa (six names) and drops the count argument. The anchor now covers the six names.
8. 3:1 note: Berakhot 4a is now cited for what it says (Daniel, called Kileab for shaming Mephibosheth in halakhah), and the "like his father" reading is credited to Rashi on 2 Samuel 3:3 (key `rashi-samuel`).
9. Both theory boxes (chapter 3 spec and the genealogies topic's `claude` box) now say what is already in print and narrow the claim to what is new. Chapter 3: the signet ring reversal (Meyers and Meyers) and the children's names (Japhet, Klein, Knoppers). Genealogies: retribution within a generation as the Japhet/Williamson reading.

**Minor**
- 10 (3:19): the witness is now "Greek (Rahlfs' printed text; the Greek manuscripts are divided, and some read Pedaiah)". The Vaticanus claim was dropped.
- 11 (4:17): new variant MT "She conceived" / Greek "Jether fathered". The 4:17 note points to it.
- 12 (1:6): new variant Diphath (Leningrad; KJV) / Riphath (many Hebrew manuscripts, Greek, Vulgate, Genesis 10:3; NIV, BSB). The note was shortened to refer to it.
- 13 (3:6): the note now says the Greek reads Elisa (Elishua).
- 14 (Qere): new word note at 9:4 (Ketiv Benjamin / Qere "Bani, of"). The 1:46 note's list now includes 6:26, 6:35, 7:1, 9:4 and 9:35. The ketiv-qere topic section adds 6:35 (Zuph/Ziph) and 9:4.
- 15 (names):
  - 2:16 now prints Abshai, with a new note.
  - 7:2: Shemuel changed to Samuel, the site's spelling of that Hebrew form.
  - 6:78: Jahzah changed to Jahaz, matching the site's Joshua 21:36.
  - 2:3/3:5: the 2:3 note now says plainly that 3:5 has exactly the same Hebrew, *bat-shua*.
  - 2:13 Jesse: kept, with the existing note. Jesse is the established site name of a major figure, and Ishai is a spelling of the same name. Rejected for that reason.
- 16 (3:2): now "The fourth was Adonijah, Haggith's son," matching the site's 2 Samuel 3:4.
- 17 (9:2): Plain English Translation is now "The first inhabitants who lived in their own holdings, in their towns, were..." A new deb note gives both senses of *ha-rishonim* (Nehemiah 11:3). Chapter 9 summary and the exile topic no longer say "settle again".
- 18 (9:1 note): reference changed to "2 Chronicles 28:19". Also fixed: "(2 Samuel 4:4; 9:6)" is now "2 Samuel 4:4; 2 Samuel 9:6" in 8:34.
- 19 (Luke):
  - The 2:11 note now says NA28/oldest manuscripts read Sala and later ones Salmon.
  - The chapter 2 deep section now says the critical text has Admin and Arni (later manuscripts Aram) and Sala.
  - "exactly" dropped.
- 20 (Temurah 16a): the paraphrase was corrected in the 4:10 note and the jabez topic. "Keep from evil" now reads as companions (*re'im*), and "not grieve me" as the evil inclination. The Targum is described as related (children and disciples), not "similar".
- 21 (generations): now "about ten more generations after Micah, down to Ulam's grandsons" in the 8:34 note, the chapter 8 summary and the saul topic.
- 22 (Dan, 48 towns): the chapter 6 deep section and the tribe-of-dan topic now say Dan is missing from 6:61, Eltekeh and Gibbethon are gone, and Aijalon and Gath-rimmon appear under Ephraim (6:69). The priesthood topic now says Joshua gives forty-eight towns and fewer survive in Chronicles.
- 23 (lost-tribes): "earliest" removed; the section now compares 2 Kings 17:23.
- 24 (6:10): now "The commentary on Chronicles printed under Rashi's name".
- 25 (1:1): now "Outside Genesis, only one other genealogy of Israel's line starts from Adam".
- 26 (glosses): 4:10 is now "God gave him what he asked for"; 1:19 is now "the land was divided up".
- 27 (5:10): the note now says Tiglath-pileser III lists the Hagaranu among Aramean tribes along the Tigris and in Babylonia, and that the Hagrites "may possibly be related".
- 28 (4:23): now "Well over a thousand" *lmlk* handles.
- 29 (4:9): now "the eastern tribes' prayer in battle".
- 30 (mechanics): the repeated references in 8:28 and 8:34 were removed; 4:22 now uses *Lachem* in both places.
- 31 (chapter 3 summary): now "down to, or near, the Chronicler's own day".

**Drift audit:** only the rewritten verses were rechecked: 2:16, 3:2, 6:58, 6:78, 7:2 and 9:2, all "changed" (log appended in scratch, verse/outcome/reason only).

**Checks:** `node tools/build.js --check 1Ch/01-09`: 0 errors, 0 warnings. `--check 1Ch`: 0 errors, 0 warnings.
