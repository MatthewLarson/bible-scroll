# Hostile review: Ruth (Rut)

## Verdict

The Ruth pilot is strong. The translation is faithful to the Masoretic Text, keeps the key-word echoes (shuv, hesed, go'el, kanaf, chayil, dabaq, reqam), and has no theological slant added. Almost every fact the writer flagged as doubtful checks out: the Septuagint wordings at 1:14, 1:21, 2:7 and 4:8; the Syriac and Vulgate "she went" at 3:15; the 4:4 witnesses; the Qumran sigla; the Targum's glove; Rashi on 3:3; Ruth Rabbah 2:14; the Talmud passages; Speiser; Danel; Beattie; Fisch; Bauckham; and the Trible paraphrase. The problems are of four kinds. (1) The Plain English follows the BSB too closely: 31 of 85 verses are 80% or more the same string, and a few also echo the NIV. (2) The source keys break the STYLE naming rule and will collide with other books. (3) There are a few real factual slips: the claim that go'el is used "more than in any other book", the Yevamot 47b mapping, the Psalm 23:3 phrase, the weight of "six seahs", and the missing Septuagint double reading at 4:5. (4) The notes are padded: 93 notes for 85 verses, with about ten clear repeats. The 22 new topic cores are accurate but thin. They have no whole-Bible sections, several aliases collide with other topics, and three leads present one view as settled. `node tools/build.js --check Rut` passes (0 errors, 0 warnings).

Counts: 0 critical, 8 major, 27 minor.

## Facts checked and confirmed (no change needed)

- **LXX 1:14** adds καὶ ἐπέστρεψεν εἰς τὸν λαὸν αὐτῆς and has Ρουθ δὲ ἠκολούθησεν αὐτῇ. Correct.
- **LXX 1:21** reads κύριος ἐταπείνωσέν με (vocalizing ʿinnah). Correct.
- **LXX 2:7** reads οὐ κατέπαυσεν ἐν τῷ ἀγρῷ μικρόν. Correct (but see finding 15).
- **LXX 4:8** reads καὶ ὑπελύσατο τὸ ὑπόδημα αὐτοῦ καὶ ἔδωκεν αὐτῷ. Correct (but see finding 14).
- **3:15** "she went" in some Hebrew manuscripts, the Peshitta and the Vulgate (*ingressa est civitatem*). Correct. The KJV has "she went". The Targum supports "he" (Boaz).
- **4:4** תִגְאַל in some manuscripts, LXX, Syriac and Vulgate (the Targum agrees). Correct.
- **Qumran copies.** 2QRuth-a (2Q16, Herodian; 2:13–23, 3:1–8, 4:3–4), 2QRuth-b (2Q17, Hasmonean; 3:13–18), 4QRuth-a (4Q104, about 50 BC; 1:1–12), 4QRuth-b (4Q105; 1:1–6, 12–15). The sigla and the "first century BC to first century AD" range are right.
- **Targum 4:7–8 glove.** Correct. In the Targum it is Boaz who draws off his right-hand glove (see finding 14).
- **Rashi on 3:3.** Washing from idolatry, Sabbath garments. Correct (it rests on Shabbat 113b and the midrash).
- **Ruth Rabbah 2:14.** R. Zeira: the book was written "to teach how great is the reward of those who do hesed". Correct.
- **Talmud.**
  - Shabbat 113b: Ruth's modest gleaning, and Sabbath clothes from 3:3.
  - Bava Batra 91a: Ibzan is Boaz; Elimelech, Salmon, Peloni Almoni and Naomi's father were sons of Nahshon.
  - Bava Batra 91b: Ruth saw Solomon's reign.
  - Bava Batra 14b: Samuel wrote Ruth; Ruth comes first in the Writings.
  - Ketubot 7b: ten men for the wedding blessings.
  - Sanhedrin 93a–b: six blessed descendants.
  - Yevamot 47b: conversion procedure (but see finding 5).
  - All correct.
- **Speiser, "Of Shoes and Shekels," BASOR 77 (1940).** Real, on the Nuzi shoe transfers.
- **Tel Dan.** The Iron Age gate complex has a stone bench (see finding 22 for wording).
- **An ephah of barley as about 30 pounds.** This sits at the low end of the usual estimates (about 29 to 48 lb, depending on whether an ephah is 22 or 36 liters). It is acceptable with the stated uncertainty.
- **Danel in the Aqhat epic** "judges the cause of the widow" (KTU 1.17 V). The date of about 1300 BC is fine.
- **Beattie,** "Kethibh and Qere in Ruth IV 5," VT 21 (1971). Real. **Fisch,** "Ruth and the Structure of Covenant History," VT 32 (1982). Real, and it does draw the Lot/Tamar/Ruth line.
- **Bauckham,** *Gospel Women* (2002), ch. 1, "The Book of Ruth and the Possibility of a Feminist Canonical Hermeneutic". Real.
- **Trible.** The paraphrase in ch. 1 view W, "not even Abraham's leap of faith surpasses" Ruth's decision, with no call and no promise from God, is accurate.
- **Counts verified against `texts/orig`.**
  - YHWH: 18 times.
  - shuv in chapter 1: 12 times.
  - Root g'l in Ruth: 23 times.
  - "Fields of Moab": 7 times.
  - chayil: 3 times.
  - yeled: only at 1:5 and 4:16.
  - dabaq: 4 times.
- Mesha Stele (Dhiban, 1868, Louvre, about 840 BC); Gezer Calendar (1908, 10th century BC); Josephus, *Ant.* 5.318–337; the festival order of the Megillot. All correct.

## Findings

### 1. Major: the Plain English follows the BSB too closely, and in places the NIV
**Location:** plain.txt, many verses.
**Problem:** STYLE rule 1 says English versions are "for checking, never for copying". Measured against `texts/en/Rut.json` (BSB), the average string similarity is 0.70, and 31 of 85 verses score 0.80 or higher. Some clauses are taken word for word:
- 3:3: "do not let the man know you are there until he has finished eating and drinking" (BSB, identical).
- 3:15: "Bring the shawl you are wearing and hold it out" (BSB, identical).
- 1:21: "I went away full, but the LORD has brought me back empty. Why call me Naomi? ... the LORD has testified against me" (BSB, and NIV for the first two sentences).
- 2:7: "Please let me glean and gather among the sheaves ... except for resting a little in the shelter" (BSB: "except that she rested a short time in the shelter").
- 3:6, 1:18, 3:14, 4:3, 4:14, 4:13 (0.86 to 0.92).

The BSB is CC0, so this is not a copyright breach in itself. But the BSB often runs close to the NIV, and some Plain verses land on NIV wording:
- 2:12: NIV "May the LORD repay you for what you have done. May you be richly rewarded by the LORD, the God of Israel, under whose wings you have come to take refuge." The Plain text is the same except for "receive a full reward".
- 4:15: NIV "He will renew your life and sustain you in your old age. For your daughter-in-law, who loves you and who is better to you than seven sons..." The Plain text keeps this sentence shape.

**Fix:** Re-render the 15 to 20 highest-scoring verses fresh from the Hebrew, keeping the Hebrew order where English allows. For example:
- 2:12: "The LORD repay your deed! May your wages be paid in full by the LORD, the God of Israel, under whose wings you came to shelter."
- 3:15: "Bring the shawl that is on you and hold it."

Then re-run the similarity check against the BSB (target: none above about 0.8 except the genealogy and very short formula verses).

### 2. Major: the source keys break the STYLE naming rule and will collide across the Bible
**Location:** sources.json and every `s` list.
**Problem:** STYLE says keys must be "author plus a short word for the work ... never a bare surname or a generic word ('green', 'targum')". Ruth uses `targum` (the rule's own forbidden example), `talmud`, `mishnah`, `rashi`, `block`, `hubbard`, `campbell`, `bush`, `sasson`, `jps`, `trible`, `alter`, `tov`, `bhq`, `beattie`, `speiser`, `fisch`, `nielsen`, `linafelt`, `lacocque`, `holmstedt`, `leggett`, `josephusant`, `dssb`. Several will certainly clash:
- Block also wrote NICOT Ezekiel.
- "JPS" also covers the JPS Genesis–Deuteronomy, Jonah and Esther commentaries.
- Alter has *The Art of Biblical Narrative* and *The Hebrew Bible* translation.
- Campbell and Bush each have other commentaries.
- `bhq` will be needed for every BHQ fascicle.
- `targum` and `rashi` will be needed for every book.

The build check does not enforce this rule, so it passed. Jude already uses compliant keys (`bauckham-jude`).
**Fix:** Rename these keys, and every `s` reference that uses them:

| Old key | New key |
|---|---|
| `block` | `block-ruth` |
| `hubbard` | `hubbard-ruth` |
| `campbell` | `campbell-ruth` |
| `bush` | `bush-ruth` |
| `sasson` | `sasson-ruth` |
| `jps` | `jps-ruth` |
| `trible` | `trible-rhetoric` |
| `linafelt` | `linafelt-ruth` |
| `nielsen` | `nielsen-ruth` |
| `lacocque` | `lacocque-ruth` |
| `holmstedt` | `holmstedt-ruth` |
| `bauckhamw` | `bauckham-gospelwomen` |
| `alter` | `alter-narrative` |
| `leggett` | `leggett-goel` |
| `talmud` | `talmud-bavli` |
| `mishnah` | `mishnah-yevamot`, or a global `mishnah` entry in content/sources.json |
| `ruthrabbah` | `ruth-rabbah` |
| `targum` | `targum-ruth` |
| `rashi` | `rashi-ruth` |
| `josephusant` | `josephus-ant` |
| `bhq` | `bhq-megilloth` |
| `tov` | `tov-tchb` |
| `dssb` | `abegg-dssb` |
| `beattie` | `beattie-ruth45` |
| `speiser` | `speiser-shoes` |
| `fisch` | `fisch-ruth` |

Truly shared works (Tov, DSSB, Josephus, Talmud) belong in `content/sources.json`. Consider asking the coordinator to make build.js warn on bare-surname keys.

### 3. Major: the 4:5 variant leaves out the Septuagint, which keeps both readings
**Location:** variants.json, 4:5.
**Problem:** The entry cites the Vulgate for "and also Ruth" and the MT for "from Ruth", but says nothing of the LXX. The LXX reads ἐκ χειρὸς Νωεμιν καὶ παρὰ Ρουθ τῆς Μωαβίτιδος γυναικὸς τοῦ τεθνηκότος, καὶ αὐτὴν κτήσασθαί σε δεῖ: "from Naomi and from Ruth ... and her you must acquire". So the LXX supports the MT's "from Ruth" and also the second-person verb (the Qere), with an added object "her". It is the oldest witness on the point. The entry also does not say whether 2QRuth-a, which preserves 4:3–4, reaches into 4:5. Check this in DJD III or the DSSB.
**Fix:** Add the LXX as a witness, either a fourth reading or a note on reading 2: "Septuagint: 'from Ruth ... and you must acquire her too'". Then explain that the Greek translator seems to have read the MT consonants and smoothed the sense. Cite the Qumran evidence or say there is none for 4:5.

### 4. Major: the go'el count claim is false
**Location:** topics.json, kinsman-redeemer, "Boaz, the family redeemer".
**Problem:** "The word go'el and its verb appear more than 20 times in Ruth, more than in any other book." Ruth has 23 uses of the root (verified). Leviticus has about 30 (Lev 25 alone has about 20, plus Lev 27), and Isaiah has more than 20 (verb plus noun).
**Fix:** "more often for its length than any other book" or "more than 20 times in just 85 verses". Also in the same file: "Isaiah 40–55 calls God Israel's Go'el more than a dozen times". The noun as a title of God occurs about 10 times in chapters 40–55 and 13 times in all of Isaiah. Say "about ten times".

### 5. Major: the Yevamot 47b mapping is wrong
**Location:** chapters.json, ch. 1, box "israel".
**Problem:** The box says the Talmud reads "where you stay the night" as Sabbath limits. In Yevamot 47b, "where you go I will go" is the Sabbath boundary (techum), and "where you lodge I will lodge" is the ban on a man and woman being secluded alone (yichud). "Your people" is the 613 commandments, "your God" is idolatry, "where you die" is the four court death penalties, and "there I will be buried" is the two cemeteries.
**Fix:** Correct the mapping. "Where you go" is Sabbath limits, and "where you lodge" is the rules against seclusion.

### 6. Major: "meshiv nefesh" is not the phrase of Psalm 23:3
**Location:** notes.json #84 (4:15), and the "Psalm 23:3" in the ch. 4 echoes.
**Problem:** Psalm 23:3 reads נַפְשִׁי יְשׁוֹבֵב (polel of shuv), not מֵשִׁיב נֶפֶשׁ. The hiphil participle phrase occurs in Lamentations 1:11, 16, 19, and close to it in Psalm 19:7 (Heb 19:8), מְשִׁיבַת נָפֶשׁ, "reviving the soul". The note says "the same phrase as 'he restores my soul' in Psalm 23:3".
**Fix:** "the same verb, shuv, as Psalm 23:3 ('he restores my soul'); the exact phrase is in Psalm 19:7 ('reviving the soul') and Lamentations 1:11, 16, 19." Re-title the note (for example "One who brings back life") and replace Psalm 23:3 with Psalm 19:7 in the echoes.

### 7. Major: the notes are padded (93 notes for 85 verses)
**Location:** notes.json.
**Problem:** STYLE asks for about one note per 2 to 3 verses, more in famous passages. Revelation, the model book, has 244 notes for 404 verses (0.6 per verse). Ruth has 1.09 per verse, and chapter 1 has 31 notes for 22 verses. The book is famous and dense, so 60 to 75 would be generous. These notes repeat each other or the commentary:
- **#30 (1:22) and #51 (2:23).** Both explain barley to wheat to Shavuot, and both end "Jews read Ruth at Shavuot". The feast-of-weeks topic says it a third time. Merge into #51.
- **#1 and #11 (1:1, 1:6).** Both make the "house of bread with no bread" point. Keep it in #11 only.
- **#10, #34 and #82.** All three say the narrator credits God only twice. So do the book lead, the ch. 4 reading and the providence topic. Keep it in #82 only.
- **#19 (1:14) and #38 (2:8).** #19 already lists 2:8, 21, 23 for dabaq. Cut #38 or reduce it to the "my daughter" point.
- **#55 (3:4) and #73 (4:4).** Both make the galah echo. Keep it in #73 and drop the last sentence of #55.
- **#46 (2:15).** It mostly restates the verse and the point already made in #33 and #37. Cut it, or merge it into #37.
- **#7 (1:4).** It repeats the childlessness point that #82 makes. Shorten one of them.
- **#89, #91, the ch. 4 fact box and the genealogy-of-jesus topic.** "The list skips names" is said four times. Keep it in #91 and the topic.
- **#65 (spec, 3:15).** It is weak (see finding 31) and comes right after #64. Cut it, or fold it into #64 as one labeled sentence.
- **#25 (1:19).** This is a thin grammar note. It could be a gloss.

Doing this brings the count to about 82 with nothing of substance lost. Going further, toward about 70, would mean trimming the second "views" note on verses that carry two notes (1:16, 1:21).

### 8. Major: the topic cores have no whole-Bible sections, so the pages will read as Ruth pages
**Location:** content/topics/*.json (the 22 new files).
**Problem:** All 22 cores have `"sections": []`. For Ruth-only subjects this is fine: ruth, naomi, boaz, threshing-floor and gleaning have little elsewhere. But for whole-Bible subjects (foreigners, widows, rest, providence, names-of-god, wings, hesed, kinsman-redeemer, feast-of-weeks, levirate-marriage, david, bethlehem, moab, genealogy-of-jesus), the only body text on the page will be Ruth's contribution until other books are written. For example, "Rest" will show only "Rest in a husband's house". STYLE allows core files to carry "short whole-Bible overview sections", and the Revelation-era cores (mercy, grace) have them.
**Fix:** Give each broad topic 1 or 2 short overview sections with refs across books. Some suggestions:
- **rest:** Sabbath (Genesis 2:2–3; Exodus 20:8–11); the land (Deuteronomy 12:9; Joshua 21:44); the temple as God's resting place (Psalm 132:8, 14); "my rest" (Psalm 95:11; Hebrews 3–4; Matthew 11:28–29).
- **hesed:** Exodus 34:6–7, Psalm 136, Hosea 6:6, Micah 6:8, with the Glueck/Sakenfeld/Clark debate (loyalty against kindness).
- **foreigners:** Genesis 12:3, Exodus 12:38, 48–49, Deuteronomy 23:3–8, Isaiah 56:3–7, Ezra 9–10, Acts 10, Ephesians 2.
- **widows:** Exodus 22:22–24, 1 Kings 17, Luke 7:11–17, Luke 21:1–4, Acts 6:1, 1 Timothy 5.

### 9. Minor: 1:21 variant wording is inconsistent, and the witnesses are thin
**Location:** variants.json, 1:21.
**Problem:** The `p` field says the Greek has "afflicted me", but reading 2's `en`/`plain` say "humbled me". The Peshitta and the Vulgate (*humiliavit me*) also support the ʿinnah vocalization, but they are not listed. The NIV ("afflicted") also follows it.
**Fix:** Use one English word throughout ("afflicted" or "humbled"). Add "Syriac, Vulgate; NIV, RSV, NRSV" to reading 2.

### 10. Minor: 3:15 variant overstates the modern versions and does not check Qumran
**Location:** variants.json, 3:15.
**Problem:**
- It says "BSB and most modern versions" read "he". The ESV and NASB read "she" (with a footnote), while the NIV, NRSV and BSB read "he". "Most" overstates it.
- 2QRuth-b (2Q17) preserves 3:13–18, so it may witness this word. Check DJD III and the DSSB before saying nothing.
- The Targum supports "he" (naming Boaz) and should be listed with the MT.
**Fix:** Reading 1: "Masoretic Text; Targum; NIV, NRSV, BSB". Reading 2: add "ESV, NASB". Add the 2QRuth-b reading if it is legible.

### 11. Minor: 4:4 variant could note the Qumran witness
**Location:** variants.json, 4:4.
**Problem:** 2QRuth-a contains 4:3–4. If the word is preserved, it is the oldest witness. Also, "differ by only one letter" is true (yod against tav), but the two letters do not look alike, so give the cause of the slip in the `why`. One suggestion is that it came from the third person in the preceding phrase.
**Fix:** Check the DSSB. Add the Targum to reading 1.

### 12. Minor: the "six measures" note gets the weight and the Talmud wrong
**Location:** notes.json #64 (3:15).
**Problem:**
- "Six ephahs would be far too heavy, so many think of ... six seahs (a smaller measure)". But a seah is a third of an ephah, so six seahs equal two ephahs: twice Ruth's whole day's gleaning (2:17), perhaps 60 lb or more. The Targum knows this. It adds that "strength was given her from the LORD to carry it".
- The note implies only the Targum names the Messiah. Sanhedrin 93a–b also lists the Messiah among the six (David, Messiah, Daniel, Hananiah, Mishael, Azariah).
**Fix:** "six seahs, which would be two ephahs, so heavy that the Targum says God gave her strength to carry it. Many modern readers think of six scoops or handfuls." Say that both the Targum and the Talmud include the Messiah.

### 13. Minor: the slogan "Moabite, not Moabitess" is not in the Mishnah
**Location:** notes.json #6 (1:4); topics.json, moab and foreigners.
**Problem:** Mishnah Yevamot 8:3 gives the ruling (Moabite men are barred forever, the women are permitted at once). The wordplay "a Moabite, not a Moabitess" (מואבי ולא מואבית) is in the Talmud (Yevamot 76b–77a) and the Sifre on Deuteronomy. Note #6 puts the slogan in quotation marks and cites it to the Mishnah.
**Fix:** "(Mishnah Yevamot 8:3; the Talmud sums it up as 'a Moabite, not a Moabitess', Yevamot 76b)". The topic sections that give only the ruling are fine.

### 14. Minor: 4:8 variant misses part of the Greek, and the "who gave to whom" debate
**Location:** variants.json, 4:8.
**Problem:**
- The LXX also expands the speech: Κτῆσαι σεαυτῷ τὴν ἀγχιστείαν μου, "Acquire for yourself my right of redemption".
- The entry's own title, "Who gave the sandal to whom?", is an ancient debate it does not report. In the Targum, Boaz (the buyer) draws off his right-hand glove, following rabbinic acquisition by symbolic exchange (kinyan). The Talmud, Bava Metzia 47a, records Rav and Levi disputing whether Boaz or the redeemer gave the item.
**Fix:** Add "my right of redemption" to the LXX `orig`/`en`. Replace the glove sentence with: "The Targum has Boaz take off his right-hand glove, a later custom of acquisition; the Talmud (Bava Metzia 47a) records a debate over which man gave the object."

### 15. Minor: 2:7 LXX also changes "until now" to "until evening"
**Location:** variants.json, 2:7.
**Problem:** The LXX reads ἀπὸ πρωίθεν καὶ ἕως ἑσπέρας, "from morning until evening". The entry gives only the second clause. The Vulgate is also worth citing: *ne ad momentum quidem domum reversa est*, "not even for a moment has she gone home".
**Fix:** Add both to the readings or to `b`.

### 16. Minor: missing variant at 4:11
**Location:** variants.json, 4:11.
**Problem:** The LXX splits the speakers and changes the blessing. It reads: "All the people in the gate said, 'Witnesses.' And the elders said, 'May the Lord make your wife ... like Rachel and like Leah, who both built the house of Israel, and they did valiantly in Ephratha, and there shall be a name in Bethlehem'" (καὶ ἐποίησαν δύναμιν ... καὶ ἔσται ὄνομα). The worthy deeds are credited to Rachel and Leah rather than to Boaz. This is a real difference in meaning.
**Fix:** Add a short entry, following the MT.

### 17. Minor: note #24 attributes the "cold Naomi" reading to Trible
**Location:** notes.json #24 (1:18).
**Problem:** The best-known proponents of Naomi's coldness and resentment toward Ruth are Danna Nolan Fewell and David Gunn ("'A Son Is Born to Naomi!'", JSOT 40, 1988; *Compromising Redemption*, 1990). Linafelt does develop the point. Trible, though, reads Naomi largely sympathetically and stresses the two women's bond. Check Trible ch. 6 before citing her for this.
**Fix:** Cite Fewell and Gunn and Linafelt (add a key such as `fewell-gunn-ruth`). Drop Trible unless you can quote her.

### 18. Minor: the minority sexual reading of chapter 3 is left unnamed
**Location:** notes.json #63 (3:14).
**Problem:** "A minority of modern scholars (for example, some feminist and literary readers)" is vague. STYLE rule 3 says to name who holds a view.
**Fix:** Name representatives: Fewell and Gunn, who leave the question open and read it suggestively; others who argue that intercourse is implied. Or say plainly that no major commentary argues it outright.

### 19. Minor: the chronology in note #91 is off
**Location:** notes.json #91 (4:21).
**Problem:** "David was born roughly 300 years later on most reckonings (or more if the Exodus is dated early)". With a 13th-century Exodus (about 1260) and David born about 1040, the gap is about 220 years. With the 1 Kings 6:1 date (about 1446), it is about 400 years. "300 on most reckonings" matches neither.
**Fix:** "about 220 years if the Exodus is dated about 1260 BC, about 400 if it is dated by 1 Kings 6:1."

### 20. Minor: the omenet note misses its only other use
**Location:** notes.json #86 (4:16).
**Problem:** The feminine אֹמֶנֶת occurs elsewhere only in 2 Samuel 4:4 (Mephibosheth's nurse). That is the closest parallel, and it is not cited. The adoption view also has a named holder (Gerleman; Köhler), and should name one.
**Fix:** Add 2 Samuel 4:4 to the text and the `r` list, and name a proponent of the adoption reading.

### 21. Minor: Shaddai in the Greek of Ruth
**Location:** notes.json #27 (1:20).
**Problem:** "The Almighty" is credited to the Greek *pantokratōr*. In the LXX of Ruth, Shaddai is ὁ ἱκανός, "the Sufficient One", at 1:20 and 1:21. *Pantokratōr* is the usual LXX rendering in Job.
**Fix:** Add one clause: "the Greek of Ruth itself says ho hikanos, 'the Sufficient One'".

### 22. Minor: the Tel Dan bench wording
**Location:** notes.json #69 (4:1).
**Problem:** The preview says excavated gates "have stone benches inside". At Dan the well-known stone bench stands in the plaza against the outer wall of the gate complex. Benches inside gate chambers are attested elsewhere, for example at Gezer.
**Fix:** "Excavated Iron Age gates have stone benches in or beside them, for example at Dan."

### 23. Minor: book of Ruth's place in printed Hebrew Bibles
**Location:** book.json, sections, "Ruth in the Bible".
**Problem:** "In the Leningrad Codex and most printed Hebrew Bibles it follows Proverbs". BHS and BHQ follow Leningrad. But many Jewish printed Bibles (Mikraot Gedolot, Koren and other Ashkenazi-order editions) arrange the five scrolls in festival order, with Ruth after the Song of Songs. Also, Bava Batra 14b gives the order, and its etymology (Ruth from *rivvah*, David "saturated" God with praise) suggests the David link. But "a preface to David's songs" is an interpretation, not a stated reason.
**Fix:** "In the Leningrad Codex and the scholarly editions based on it (BHS, BHQ)... Many Jewish printed Bibles place the five scrolls in festival order, with Ruth after the Song of Songs." Soften "as a preface to David's songs" to "perhaps because it leads up to David, the psalmist".

### 24. Minor: genre is stated as settled
**Location:** book.json, facts, "Kind of writing".
**Problem:** "A short historical story" takes one side. Many scholars call Ruth a novella, an idyll, or (Sasson, following Gunkel) a folktale, and leave its historicity open. The lenses cover dating but not genre.
**Fix:** "A short story, traditionally read as history; many scholars call it a historical novella or folktale".

### 25. Minor: ketiv/qere count of the ones that "affect meaning" is inconsistent
**Location:** book.json "The text of Ruth" against topics.json ketiv-qere.
**Problem:** The book page says the two meaningful ones are 3:3 and 4:5. The topic says 2:1 and 4:5.
**Fix:** Pick one. 2:1 and 4:5 is the better pair, since the 3:3 "I/you" Ketiv is an archaic spelling. Alternatively, say three: 2:1, 3:3 (cloak or clothes) and 4:5.

### 26. Minor: wrong Wikipedia link for go'el
**Location:** notes.json #49 and topics/kinsman-redeemer.json, `l`/`links` `["Go'el","Goel"]`.
**Problem:** "Goel" is not the article (it is also a common surname). The article is "Goel (Judaism)".
**Fix:** Change the link to `["Go'el","Goel (Judaism)"]`.

### 27. Minor: the Fisch/Lot link sits under the wrong lens
**Location:** chapters.json, ch. 3, views "E".
**Problem:** The parallel between Lot's daughters and the threshing-floor scene (Fisch) is a literary and canonical observation. It is not an argument that belongs to the after-exile dating lens, and Fisch does not make it one.
**Fix:** Move it to the "Read as story" paragraph, or to view J or W. Give E a point that belongs to E, for example the "Moabite" label and Nehemiah 13:1–3 read at the gate.

### 28. Minor: the "exactly seven weeks" claim
**Location:** topics.json, feast-of-weeks.
**Problem:** "exactly the seven weeks the festival marks". 1:22 and 2:23 give only the start of barley and the end of wheat, so "exactly" overstates it.
**Fix:** "roughly the seven weeks".

### 29. Minor: the redeemer-marriage link is stated as fact in a topic lead
**Location:** topics/kinsman-redeemer.json, `lead`.
**Problem:** "and (in Ruth) marrying a widow to keep a family's name alive" states as a go'el duty what the book's own note #58 and the ch. 3 fact box call debated.
**Fix:** "and, in Ruth, taking on a widow's marriage as well, a link scholars still debate".

### 30. Minor: other topic leads present one view as settled
**Location:** topics/david.json, period-of-judges.json, providence.json, genealogy-of-jesus.json.
**Problem:**
- **david:** "poet of many psalms". Many psalms are attributed to David in their titles, and their authorship is debated.
- **period-of-judges:** gives only the late-Exodus chronology (1200–1050 BC). The early chronology from 1 Kings 6:1 puts the start about 1380 BC.
- **providence:** the title is "God's Hidden Care" and the aliases include "sovereignty", but the lead gives one doctrine with no hint of the Reformed/Arminian/open-theism differences a whole-Bible providence page will need.
- **genealogy-of-jesus:** the id and title ("The Family Line of the Messiah") are narrower and more Christian than its own lead, which covers all biblical genealogies (Adam to Abraham, Chronicles).
**Fix:**
- david: "traditionally credited with many psalms".
- period-of-judges: add "or from about 1380 BC on the chronology of 1 Kings 6:1".
- providence: add a sentence noting the theological debate.
- genealogy-of-jesus: either rename it to `genealogies` ("Genealogies", with an aka for genealogy-of-jesus) or narrow the lead to Matthew and Luke and their Old Testament sources. The rename is better, since Genesis 5, 10 and 11, 1 Chronicles 1–9, and Ezra 2 all need a home.

### 31. Minor: the spec boxes understate how much of their idea is already published
**Location:** notes.json #65; book.json `spec`; ch. 3 spec.
**Problem:**
- **#65:** "Some commentators have suggested something similar" names no one. Either name them or drop the claim.
- **Book spec ("filling what Judges emptied"):** the reading of Ruth as a deliberate answer to Judges 17–21 is widely published (for example Block; Linafelt's reading of Ruth as a sequel to Judges). "My own way of putting together patterns that others have noticed separately" undersells this.
- **Ch. 3 spec on Gibeah:** this pairing is more original and is labeled well.
**Fix:** For the book spec, name the published overlap explicitly and limit the claim to what is new. For #65, cut it or cite a source.

### 32. Minor: topic alias collisions
**Location:** topic `aka` lists.
**Problem:**
- **hesed** lists "mercy" (the id of another topic) and "kindness".
- **david** and **genealogy-of-jesus** both list "son of David".
- **bethlehem** lists "city of David". In the Old Testament that is Jerusalem's Zion (2 Samuel 5:7), and it is used of Bethlehem only in Luke 2:4, 11.
- **feast-of-weeks** lists "firstfruits" (a wider idea: Leviticus 23:10; 1 Corinthians 15:20) and "harvest festival" (Sukkot is also one).
- **rest** lists "peace" (shalom is a different subject).
- **kinsman-redeemer** lists "redemption" (the New Testament apolytrōsis/lytron theme needs its own page or a broader one).
- **providence** lists "sovereignty".
**Fix:** Remove "mercy", "son of David" (keep it on one topic only, ideally a future `messiah`), "city of David" (or note the Luke usage), "firstfruits", "harvest festival", "peace", "redemption" and "sovereignty". Alternatively, give "redemption" its own topic later.

### 33. Minor: the feast-of-weeks lead omits the Sinai tradition and its date
**Location:** topics/feast-of-weeks.json.
**Problem:** The lead gives the harvest and Pentecost meanings but not the Jewish association with the giving of the Torah. It should also say that this association is post-biblical (Jubilees; the rabbis), since Exodus 19:1 only puts Sinai "in the third month".
**Fix:** Add one sentence.

### 34. Minor: existing Revelation topic "harvest" overlaps
**Location:** content/topics/harvest.json (not Ruth's file).
**Problem:** "The Two Harvests" is a Revelation-only core under the generic id `harvest`. Ruth is the Bible's main harvest story but cannot sensibly contribute to it, so Ruth spread harvest material across gleaning, threshing-floor and feast-of-weeks.
**Fix:** This is for the coordinator. Rename the Revelation topic (for example `two-harvests`), or broaden `harvest` into a whole-Bible page that Ruth can tag. Not the Ruth writer's fault.

### 35. Minor: one gloss strikes the wrong tone
**Location:** glosses.json, 3:13, "as surely as the LORD lives" → "I swear to God".
**Problem:** In modern American use "I swear to God" is casual and often thought profane. It does not carry the weight of a solemn oath.
**Fix:** "I give you my solemn oath before God".

## The specific questions

**Should `ketiv-qere` be part of a general textual-history topic?** Yes. Fold it in, with one precondition.
- **Why fold it in:** Ketiv/Qere is one Masoretic device among many: tiqqune sopherim, puncta extraordinaria, sebirin, the Masorah notes. A reader who meets a footnote like "Hebrew uncertain" or "Septuagint reads" wants one page that explains the MT, the Masoretes, Ketiv/Qere, the Dead Sea Scrolls, the Septuagint, the Samaritan Pentateuch and the New Testament manuscripts together. Ketiv/Qere also occurs in nearly every Old Testament book (between about 850 and 1,550 instances, depending on how they are counted). If it has its own page, dozens of books will add near-identical "the Ketiv/Qere in our book" sections to a thin topic.
- **The precondition:** `textual-history` must first be made whole-Bible. Its current lead is entirely about Revelation ("Revelation has fewer Greek manuscripts than any other New Testament book..."), it has an empty aka list, and its Wikipedia links are all Revelation and Textus Receptus items. That is the Revelation writer's file and a fairness and scope problem in its own right.
- **Steps:**
  1. The coordinator rewrites the textual-history lead to cover both Testaments, adds aka (Masoretic Text, Masoretes, Ketiv, Qere, Kethib, Septuagint, Dead Sea Scrolls, manuscripts, textual criticism), and moves the Revelation specifics into a Revelation section.
  2. Ruth's "Ketiv and Qere in Ruth" section moves to `id: "textual-history"`.
  3. `ketiv-qere.json` is deleted, or kept only as an alias. The build has no redirect mechanism, so delete it and add the aka.
  4. Note and topic `top` values pointing to ketiv-qere are repointed.

**Should `hesed` and `mercy` be merged?** No. Keep two pages, but fix how they relate.
- **Why keep them apart:** hesed is a Hebrew word-study (kind "Words") whose central debate is precisely whether it means mercy at all. Glueck argued for covenant loyalty; Sakenfeld and Clark argue for freely given loyal kindness. Mercy is an English concept page (kind "Ideas") built on רַחֲמִים / ἔλεος / חָנַן, including New Testament teaching (Matthew 5:7; James 2:13) with no hesed behind it. Merging would either bury the Hebrew word-study or force rachamim and eleos under a Hebrew title.
- **Fixes:**
  1. Remove "mercy" from hesed's aka. It is another topic's id, and the alias will send searches to the wrong page.
  2. Keep the `related` links both ways (already present).
  3. Add a short section on the mercy page explaining that the KJV renders hesed "mercy" about 150 times (Psalm 136's "his mercy endureth for ever"), so readers know to follow the link to hesed. Mercy's existing sentence about eleos translating chesed already starts this.
  4. Add a sentence to the hesed lead noting the KJV's "mercy" and "lovingkindness".

## Fixes applied

1. **Close to the BSB and NIV (finding 1): fixed.** I retranslated 37 verses from the Hebrew word glosses: 1:2, 3, 5, 8, 9, 11, 14, 16, 17, 18, 21; 2:7, 10, 12, 17, 21; 3:3, 4, 6, 12, 13, 14, 15, 17; 4:3, 6, 9, 13–22. Where English allows, they keep the Hebrew order, for example "Full I went out, and empty the LORD has brought me back" (1:21) and "These six measures of barley he gave me" (3:17). The genealogy now uses "fathered" for *holid*. Measured against the BSB, the mean similarity has dropped from 0.73 to 0.67. Only one verse is still above 0.80: the formula line in 4:18 (0.90). 2:12 and 4:15 no longer follow the NIV's sentence shape. I moved every note, gloss and variant anchor, and updated the quotations in other notes, the chapter pages, the topics and the book page.
2. **Source keys (finding 2): fixed.** I renamed every key as in the table, and every `s` and `sources` reference with it. I added `fewell-gunn-ruth`. I did not move the keys for shared works into `content/sources.json`, because that is a shared file. The new keys are unique across the Bible, so the coordinator can move them later without breaking anything.
3. **4:5 Septuagint (finding 3): fixed.** I added the Septuagint as a reading ("and from Ruth... you must also acquire her") and explained how it relates to the Hebrew. I also say that the surviving 2QRuth-a fragment (4:3–4) does not include 4:5.
4. **Go'el count (finding 4): fixed.** It now reads "more than 20 times in Ruth's 85 verses, more often for its length than in any other book." For Isaiah 40–55 it now says "about ten times."
5. **Yevamot 47b (finding 5): fixed.** "Where you go" is the Sabbath travel limits, and "where you spend the night" is the rules against a man and woman being alone together. I added the parts about death and burial.
6. **Psalm 23:3 (finding 6): fixed.** I retitled the 4:15 note "One who brings back life." It now gives Lamentations 1:11, 16, 19 and Psalm 19:7 for the exact phrase, and Psalm 23:3 only for the shared verb. The chapter 4 echoes now list Psalm 19:7 instead.
7. **Padding (finding 7): fixed.** Notes went from 93 to 82.
   - Cut these notes: 1:4 "about ten years" (merged into 4:13), 1:18 (merged into 1:21), 1:19 (now a gloss), 1:22 barley (merged into 2:23), 2:5, 2:8 (its "my daughter" point moved to 1:14), 2:15, 3:1, the 3:15 theory note, 3:18, and 4:11 "worthy things" (moved into the new 4:11 variant).
   - Removed repeats: the "house of bread" point is no longer in 1:1, and the "God acts only twice" point is no longer in 1:6 or 2:3, so it appears only at 4:13. The *galah* echo is no longer in 3:4. "The list skips names" is no longer in 4:18 or in the chapter 4 fact box.
8. **Whole-Bible sections (finding 8): fixed.** I wrote one overview section for each of these cores, with references across books: kinsman-redeemer, hesed (including the Glueck and Sakenfeld/Clark debate), levirate-marriage, moab, bethlehem, david, providence, wings, foreigners, widows, threshing-floor, rest, names-of-god, genealogies. I also rewrote the leads for gleaning, boaz, naomi, ruth and tamar to cover the whole Bible.
9. **Variants at 1:21, 3:15, 4:4, 2:7 and 4:8, and the new 4:11 entry (findings 9, 10, 11, 14, 15, 16): fixed.**
   - 1:21 uses one word, "humbled," throughout. Its witnesses now include the Peshitta, the Vulgate, the NIV, RSV and NRSV, and the Targum for the Masoretic reading.
   - 3:15 now lists the Targum with "he" and the ESV and NASB with "she."
   - 4:4 now lists the Targum. The `why` no longer says the slip was visual.
   - 2:7 adds the Septuagint's "until evening" and the Vulgate's reading.
   - 4:8 adds the Septuagint's "my right of redemption," the Targum's glove and the Bava Metzia 47a debate.
   - 4:11 has a new entry on the Septuagint's form of the blessing.
   - I did not check the Qumran readings at 3:15 and 4:4 (2QRuth-b, 2QRuth-a) against DJD III. Both entries now say so openly rather than guessing.
10. **Six seahs and the Talmud's slogan (findings 12, 13): fixed.**
    - Six seahs would be two ephahs; the note now says this and adds the Targum's line that God gave her strength to carry it. It also says that both the Targum and the Talmud include the Messiah.
    - The 1:4 note now gives the Mishnah's ruling, and credits the slogan "a Moabite, not a Moabitess" to the Talmud (Yevamot 76b).
11. **Fewell and Gunn (findings 17, 18): fixed.** The reading of a cold Naomi is now credited to Fewell and Gunn and to Linafelt, in the 1:21 note; Trible is no longer cited for it. The 3:14 note now says that no major commentary argues for sex outright, and that Fewell and Gunn leave the question open.
12. **Smaller note fixes (findings 19–22): fixed.**
    - 4:21 chronology: about 220 or about 400 years, depending on the date of the Exodus.
    - *omenet*: added 2 Samuel 4:4, and named Gerleman and Köhler for the adoption view.
    - Shaddai: added the Greek of Ruth, *ho hikanos*.
    - Gate benches: now "Excavated Iron Age gates have stone benches in or beside them," with Dan and Gezer.
13. **Book page (findings 23, 24, 25, 31): fixed.**
    - The order of books in printed Bibles is now stated correctly, and "a preface to David's songs" is softened to "perhaps because it leads up to David, the psalmist."
    - The genre is no longer stated as settled.
    - The Ketiv/Qere readings that change meaning are now 2:1 and 4:5, the same pair as on the topic page.
    - The book's theory box now names the published overlap (Block, Linafelt) and claims only what is new.
14. **Links and lens placement (findings 26, 27): fixed.**
    - The go'el link now points to "Goel (Judaism)."
    - The Fisch/Lot parallel moved to the "Read as story" reading. View E now makes the Nehemiah 13 point instead.
15. **Topic leads and aliases (findings 28, 29, 30, 32, 33): fixed.**
    - Feast-of-weeks says "roughly seven weeks," and its lead now explains that linking the feast with Sinai came after the Bible (Jubilees, the rabbis).
    - The kinsman-redeemer lead says the link to marriage is debated.
    - The david lead says "traditionally credited with many psalms."
    - Period-of-judges gives both chronologies.
    - Providence notes the debate between Reformed, Arminian and open theists.
    - `genealogy-of-jesus` is renamed `genealogies`, with "genealogy of Jesus" kept as an alias. All `top` and topic references now point to it.
    - Removed these aliases: mercy, kindness, son of David (from both topics), city of David, firstfruits, harvest festival, peace, redemption and sovereignty. Hesed links to mercy through `related`.
16. **Harvest and mercy (findings 34, 35): fixed.**
    - I added a Ruth contribution to the shared `harvest` topic and pointed the 2:23 note to it.
    - I added a Ruth contribution to `mercy` explaining that the KJV renders hesed "mercy."
    - The 3:13 gloss now reads "I give you my solemn oath before God."
17. **Ketiv/Qere (the specific question): partly rejected.** I kept `ketiv-qere` as its own Words page and did not fold it into `textual-history`. The shared core `textual-history.json` already lists `ketiv-qere` under `related`, so deleting it would break that core, which is not my file. Instead I gave ketiv-qere a full alias list and added a short "The text of Ruth" section to textual-history. If the coordinator still wants them merged, the merge is simple: move the one section, add the aliases, and remove the `related` link.
