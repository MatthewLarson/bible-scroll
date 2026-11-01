# Hostile review: Psalms 102–106 (part 102-106)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json of this part, and book.json where it touches Psalms 102–106. Checked against `node tools/literal.js Psa 102–106`, texts/auto/Psa.json, the Greek of Rahlfs as printed on sacred-texts.com (Greek Psalms 101–105) with the Clementine Vulgate beside it, the site's Plain English Translation of 1 Chronicles 16, Exodus 34, Genesis and the other Psalms parts, and the brief (tools/brief-psa.md). `node tools/build.js --check Psa/102-106` gives 0 errors and 0 warnings.

## Verdict

This is a strong part. The Plain English Translation is rebuilt from the Hebrew and follows the literal lines closely. I found no runs of NIV or ESV wording that the Hebrew does not force, except one section heading. The Plain English Translation reuses the site's Plain English Translation of 1 Chronicles 16 word for word where the Hebrew matches (105:1–15; 106:1, 47–48). All four Ketiv/Qere places in texts/auto get entries. Every psalm has a settings card with `readers`, and the Greek number appears in four of the five summaries. The rabbinic citations the writer flagged as "from memory" check out: Ketubot 112a–b, Berakhot 9b–10a and 10a, Megillah 18a, Sanhedrin 102a, Avodah Zarah 3b, and the Mekhilta's list of tiqqune soferim including 106:20. So do the liturgical claims: the fourteenth kathisma, the Hexapsalmos, the Typika antiphon, the Proemiac Psalm at Vespers, the Ashkenazi use of 104 on Rosh Chodesh and on winter Sabbath afternoons, and the Pentecost responsorial psalm. Day (2013) is a real chapter. The serious problems are elsewhere:
- At 102:26 the Greek of the Psalter is misreported, and the Hebrews 1 discussion rests on that report.
- A factual error about the order of episodes in Psalm 106.
- Several bare references in chapter pages and topics that the build silently links to the wrong Psalms verse.

The rest are small accuracy, consistency and sourcing fixes.

Counts: **0 critical, 3 major, 22 minor.**

## Findings

### 1. Major: the Greek of 102:26 ("roll them up") is reported as the Greek Psalter's reading
- **Location:** variants.json 102:26; notes.json 102:25 ("Psalm 102 in Hebrews 1"); chapters.json 102, deep "Psalm 102 in Hebrews 1" ("Three features come from the Greek Psalter ... 'roll them up'").
- **Problem:** The variant gives "the Greek" as καὶ ὡσεὶ περιβόλαιον ἑλίξεις αὐτούς, "you will roll them up," and the chapter page says Hebrews took "roll them up" from the Greek Psalter. Rahlfs' text of Psalm 101:27 reads ὡσεὶ περιβόλαιον **ἀλλάξεις** αὐτούς καὶ ἀλλαγήσονται, "you will *change* them," which matches the Hebrew תַּחֲלִיפֵם. ἑλίξεις is the reading of Codex Vaticanus, and therefore of Tischendorf's printed text, and of a few other witnesses. Commentators on Hebrews discuss whether those copies were assimilated to Hebrews 1:12, or whether Hebrews used such a copy. The writer checked only Tischendorf, that is, only B, and generalized it to "the Greek." The "why" then explains the Greek "roll up" as coming from a different Hebrew verb or from Isaiah 34:4, which explains a reading that the main Greek text does not have.
- **Fix:** Split the Greek into two readings: "Septuagint, most manuscripts (Rahlfs): ἀλλάξεις, 'you will change'" and "Codex Vaticanus and some others: ἑλίξεις, 'you will roll up', the form in Hebrews 1:12." Say that the Greek is divided and that the agreement of B with Hebrews may be influence from Hebrews. Correct the deep section's "three features come from the Greek Psalter" to two certain features ("Lord", "the same") and one disputed one ("roll up"). Make the same change in note 102:25.

### 2. Major: the order of the episodes in Psalm 106 is misstated
- **Location:** chapters.json 106, deep "The history checked against Exodus and Numbers", last paragraph.
- **Problem:** The page says the order follows the Torah "except that the craving (Numbers 11) comes before the calf (Exodus 32)." The table above it shows otherwise. The revolt of Dathan and Abiram (Numbers 16, at 106:16–18) also comes before the calf (Exodus 32) and before the spies (Numbers 13–14, at 106:24–27). In the Torah Numbers 16 follows Numbers 13–14. So at least two episodes are out of Torah order, not one. The claim that the psalm moved the craving "to place it right after the sea" does not explain the Dathan and Abiram move.
- **Fix:** Say that the psalm's order is its own. The craving and Dathan/Abiram (Numbers 11 and 16) come before the calf (Exodus 32), and Dathan/Abiram comes before the spies. Many commentators see the arrangement as thematic: sins against God's provision, then against his appointed leaders, then idolatry. Or simply drop the claim that the order follows the Torah.

### 3. Major: bare references that link to the wrong Psalms verses (the build does not catch them)
- **Location:**
  - chapters.json 104, deep "Psalm 104 and Genesis 1": the table's Genesis column, "(1:3)", "(1:6)", "(1:9, 11)", "(1:14)", "(1:20–21)", "(1:24–29)", "(1:31; 2:2)".
  - chapters.json 105, deep "The history checked...": "Genesis 15:18, 26:3 and 28:13" and "(Genesis 12:17; 20:3–7)".
  - chapters.json 106, deep table: "Exodus 14:10–31; 15:1".
  - topics.json new-creation: "Isaiah 65:17 and 66:22".
- **Problem:** I ran tools/refs.js. It parses "Day 1: light (1:3)" as **Psalm 1:3**, "(Genesis 12:17; 20:3–7)" as Genesis 12:17 plus **Psalm 20:3–7**, "Genesis 15:18, 26:3" as Genesis 15:18 plus **Psalm 26:3**, "Exodus 14:10–31; 15:1" as Exodus 14 plus **Psalm 15:1**, and "(1:31; 2:2)" as **Psalm 2:2**. The build's ambiguity check only fires on the "compare" pattern, so these give no warning, but on the site they are wrong links.
- **Fix:** Name the book on every reference: "(Genesis 1:3)", "Genesis 15:18; Genesis 26:3; Genesis 28:13", "Genesis 12:17; Genesis 20:3–7", "Exodus 14:10–31; Exodus 15:1", "Isaiah 65:17; Isaiah 66:22".

### 4. Minor: topics overstate how closely Psalm 104 follows Genesis 1
- **Location:** topics.json creation ("touches each of the six days of Genesis 1 in order"; `common`: "Psalm 104 follows the order of the days of Genesis 1") and days-of-creation.
- **Problem:** The psalm's animals and birds (104:11–12, 14, 17–18) come before the moon and sun (104:19). In Genesis they come on days 5–6, after day 4. Note 104:2 itself says the psalm "mixes birds and animals throughout," and the chapter page says "roughly." The topic text contradicts the part's own notes.
- **Fix:** Use "loosely" or "roughly," and mention the animals placed before the lights.

### 5. Minor: 104:8, wrong claim about the Greek and the older versions
- **Location:** notes.json 104:8 ("Waters moving, or mountains rising?").
- **Problem:** The note says "the Greek and many older versions" take the waters as the subject. The Greek, ἀναβαίνουσιν ὄρη καὶ καταβαίνουσιν πεδία, is ambiguous: neuter plural nouns can be subject or accusative of place, and Brenton translates it with the waters. The Latin, *ascendunt montes et descendunt campi*, makes the mountains and plains the subject (Douay: "The mountains ascend, and the plains descend"). The KJV takes the waters as subject. "2QPs ... has the line with a minor difference" gives no difference and is unverifiable.
- **Fix:** Say that the Greek is ambiguous, the Latin makes the mountains rise, and the KJV makes the waters go up. Name the 2QPs difference, or drop that sentence.

### 6. Minor: 104:18, the animal names in the Greek are misreported
- **Location:** notes.json 104:18.
- **Problem:** "The Greek 'hedgehogs'": the Greek has χοιρογρυλλίοις, the word the Septuagint uses for the *shaphan* in Leviticus 11:5, a hyrax or coney. "Hedgehogs" is the Latin (*herinaciis*). The Greek also has "deer" (ταῖς ἐλάφοις) for the ibex, which the note does not mention.
- **Fix:** "The Latin has 'hedgehogs', the Greek 'deer' for the ibex."

### 7. Minor: 104:30, the Latin is quoted in its liturgical form, not the Vulgate's
- **Location:** notes.json 104:30.
- **Problem:** The Vulgate (Gallican) reads *Emittes spiritum tuum*, a future, "you will send." *Emitte*, the imperative, is the liturgical versicle said with the antiphon "Veni, Sancte Spiritus, reple tuorum corda fidelium," and the note presents it as "the Latin."
- **Fix:** "The Latin Psalter has *emittes* ('you will send'); the liturgy turned it into the petition *Emitte Spiritum tuum...*, the versicle of the prayer 'Come, Holy Spirit'."

### 8. Minor: 102:10, wrong verb
- **Location:** notes.json 102:10.
- **Problem:** The note says "The verb *shalach* (Hiphil)." The verb is וַתַּשְׁלִיכֵנִי, from *shalakh* (ש־ל־ך), "throw." *Shalach* (ש־ל־ח) is "send." Jeremiah 22:28 also uses *shalakh*.
- **Fix:** Write *shalakh*.

### 9. Minor: the list of Psalm 105 and 1 Chronicles 16 differences is inaccurate
- **Location:** chapters.json 105, deep "Psalm 105 and 1 Chronicles 16"; notes.json 105:1.
- **Problem:** The deep section ends: "the wording differs from 1 Chronicles 16 in 105:6, 105:8, 105:12 and 105:15." The site's Plain English Translation of 105:15 and 1 Chronicles 16:22 is identical; only a Hebrew preposition differs. The note on 105:1 lists the differences but omits 105:14 (*adam* / *le'ish*), which the deep table includes.
- **Fix:** Drop 105:15 from the list of English differences, and add 105:14 to the 105:1 note's list of Hebrew differences, or point the note to the table.

### 10. Minor: missing variant at 105:27
- **Location:** variants.json, 105:27, "They set out his signs among them."
- **Problem:** The Hebrew שָׂמוּ, "they set" (Moses and Aaron), is against the Greek ἔθετο, "he set," with God as subject, and the Syriac agrees with the Greek. Most modern versions note this, and it decides who performs the signs.
- **Fix:** Add an entry: Masoretic Text "they set," followed; Septuagint (and Syriac) "he set."

### 11. Minor: Psalm 103's Greek number is not in the first or last sentence of the summary
- **Location:** chapters.json 103, `sum`.
- **Problem:** "In Greek and Latin Bibles it is Psalm 102" is the second-to-last sentence. The brief requires the first or last sentence.
- **Fix:** Move it to the end, or fold "Psalm 104 begins and ends with the same call" into the sentence before.

### 12. Minor: two different fresh renderings of Hebrews 1:10–12 and of Hebrews 13:8 in one part
- **Location:**
  - Hebrews 1:10–12: notes.json 102:25 ("You, Lord, in the beginning founded the earth ... like a mantle ...") against chapters.json 102, deep ("You, Lord, at the beginning laid the earth's foundation ... Like a wrap ...").
  - Hebrews 13:8: notes.json 102:27 ("... the same, and forever") against the deep ("... and to the ages").
- **Problem:** Hebrews is not yet on the site, so fresh renderings are allowed, but the same verse should read the same within one part.
- **Fix:** Choose one rendering of each, built from `node tools/literal.js Heb 1:10-12` and `Heb 13:8`, and use it in both places.

### 13. Minor: quotations from other Psalms parts are not in their Plain English Translation wording
- **Location:**
  - notes.json 104:27 quotes Psalm 145:15–16 as "The eyes of all look hopefully to you ... what it wants" ("a fresh rendering").
  - notes.json 104:32 quotes Psalm 144:5 as "touch the mountains so they smoke."
  - variants.json 106:7 says Psalm 78:17 and 78:56 have Israel "rebelled against the Most High."
- **Problem:** Part 138-150 has 145:15–16 as "All eyes wait in hope for you, / and you hand them their food when it is time. ... You open your hand / and fill every living thing with what it longs for." Psalm 144:5 reads "touch the mountains and make them smoke." Psalm 78:17 and 78:56 read "defying the Most High" and "tried God Most High and defied him." STYLE says to quote a book the site has already translated in its Plain English Translation. The build missed these because each is marked "a fresh rendering" or is too short.
- **Fix:** Quote the site's Plain English Translation exactly.

### 14. Minor: key verbs are rendered inconsistently within the part, hiding links the notes rely on
- **Location:** plain.txt 104:7 and 105:14 against 106:9; plain.txt 106:7 against 105:28 and 106:33, 106:43.
- **Problem:**
  - *Ga'ar* is "scolded" in 104:7 and 105:14 but "shouted at" in 106:9. Note 106:9 explicitly links 106:9 to 104:7, and the English hides the link.
  - *Marah* is "defy" in 105:28, 106:33 and 106:43, and in the site's 78:17 and 78:56. In 106:7 it is "turned rebel," yet note 105:28 says "The verb *marah* returns at 106:7, 33 and 43."
- **Fix:** At 106:9 use "He scolded the Sea of Reeds." At 106:7 use "and they defied him at the sea, at the Sea of Reeds," or a similar form with "defy." Then adjust the anchors of the variant and note at 106:7.

### 15. Minor: the Psalm 104 summary reads Leviathan against the Plain English Translation
- **Location:** chapters.json 104, `sum` ("ships and Leviathan, God's plaything").
- **Problem:** The Plain English Translation says "which you shaped to sport in it" (in the sea). "God's plaything" is the Talmud's reading of *bo* as "with him" (Avodah Zarah 3b), which note 104:26 presents as one option. The summary states it as the meaning.
- **Fix:** "and Leviathan, made to play in it."

### 16. Minor: dates disagree within the part
- **Location:** notes.json 104:20 gives Akhenaten as about 1353–1336 BC; chapters.json 104 deep and topics.json ancient-near-east give about 1350–1334 BC. notes.json 102:14 gives Jerusalem's fall as 586 BC; chapters.json 102 `readings` gives 587 BC.
- **Problem:** Both pairs of dates are defensible, but a reader sees both on one page.
- **Fix:** Use one form of each, for example "about 1350–1334 BC" and "587 or 586 BC," as part 120-137 does.

### 17. Minor: 104:1, the date of 11QPs-a
- **Location:** notes.json 104:1 ("so its place in the collection was not fixed everywhere in the first century BC").
- **Problem:** 4QPs-d is first century BC, but 11QPs-a is usually dated to about AD 30–50.
- **Fix:** "in the first centuries BC and AD."

### 18. Minor: 103:12, an unsourced popular argument
- **Location:** notes.json 103:12 ("North and south have ends (the poles), people later noted, but east and west never meet").
- **Problem:** This is a modern sermon illustration, not an ancient or scholarly reading. "People later noted" hides that.
- **Fix:** Drop it, or label it: "a modern preacher's illustration, not the psalm's point."

### 19. Minor: liturgical and traditional claims that are unverified or overstated
- **Location and problem:**
  - chapters.json 103, view J: "103:13 is said in the High Holy Day prayers." I could not confirm this as stated. The line appears in penitential (Selichot) usage.
  - chapters.json 106, view L: "106:4 is said in Jewish penitential prayers." Unverified. 106:45 ("He kept his covenant in mind...") is among the Zikhronot verses of the Rosh Hashanah Musaf; check whether 106:45 is meant.
  - chapters.json 102, view H: tradition heard "sometimes Daniel or Nehemiah." No source given.
  - notes.json 103:14: "some rabbinic readers heard this verse that way" (the *yetser*). No source given.
  - notes.json 105:37: "4QPs-e ... has a slightly different wording here." chapters.json 103, view C, places Psalm 103 in 4QPs-e. Neither is specified. As far as I know, Psalm 103 is in 2QPs and 4QPs-b; check the Dead Sea Scrolls Bible.
  - chapters.json 102, view L: Hebrews 1 "is read at Christmas in many Western lectionaries." The Roman Missal reads Hebrews 1:1–6, without 1:10–12. The Revised Common Lectionary's 1:5–12 is optional.
  - chapters.json 103, view X: "103:13 lies behind Jesus' teaching." chapters.json 106, view L: "106:48 lies behind the opening of the Benedictus." The formula is common (1 Kings 1:48; Psalm 41:13; Psalm 72:18).
- **Fix:** Source each claim, soften it ("is often compared with"), or drop it.

### 20. Minor: 102:25 variant, a speculative "why" stated as probable
- **Location:** variants.json 102:25 ("The Greek translator probably supplied it from 102:22").
- **Problem:** The source of the Greek κύριε is unknown. Some point to the vocative "my God" of 102:24, others to free translation.
- **Fix:** "The Greek may have supplied it to make the address clear."

### 21. Minor: a section heading matches the ESV's wording
- **Location:** plain.txt heading "## Your years have no end" (before 102:23).
- **Problem:** This is the ESV's wording at 102:27, while the part's own Plain English Translation of 102:27 is "your years will never run out."
- **Fix:** "Your years never run out" or "Short days, endless years."

### 22. Minor: "wasting disease" at 106:15 is the shared NIV/ESV choice
- **Location:** plain.txt 106:15.
- **Problem:** *Razon* is "leanness, thinness." Both the NIV and the ESV say "a wasting disease," and the Plain English Translation takes the same two words and adds a phrase ("down their throats"). This is borderline, since the meaning is close, but the drift rule asks for a different form.
- **Fix:** For example, "but he sent a thinning sickness down their throats," and keep note 106:15.

### 23. Minor: a traditions card where churches barely differ; none where they do
- **Location:** chapters.json 102, `traditions` (is the LORD of 102:25–27 the Son?); notes.json 104:15 (wine).
- **Problem:**
  - Every Nicene church answers the 102 question yes. The card exists only to show the Jehovah's Witnesses and Latter-day Saints answers. That is fair and well sourced, but it is a thin use of `top`.
  - Wine against total abstinence (104:15) is a real, standing difference: Catholic, Orthodox, Lutheran and Anglican practice on one side, and the Methodist, Baptist and Pentecostal abstinence tradition on the other. It is handled only in a `views` note.
- **Fix:** Optional. Keep the 102 card. Consider moving the 104:15 material into a traditions card with `top: "wine"`, sourced (for example, the United Methodist Book of Resolutions or the Southern Baptist resolutions on alcohol, and the Catechism 2290 on temperance).

### 24. Minor: punctuation slips
- **Location and problem:**
  - notes.json 106:38: `Blood pollutes the land.", and of a land` (a period inside the quote, then a comma).
  - notes.json 104:3: `"Riding a cherub, he flew", and in Deuteronomy` (the comma belongs before the closing quote only if the quotation needs it).
  - notes.json 105:37: `"will come out with great wealth", and Exodus` (the same pattern).
  - chapters.json 105, view H: a quote ending `kinsmen".` with the period outside the quote.
- **Fix:** Tidy each one.

### 25. Minor: 105:22 variant over-renders the Greek
- **Location:** variants.json 105:22, the Greek reading's `plain`.
- **Problem:** "to instruct his officials as he himself was taught." The Greek ὡς ἑαυτόν is "as himself," that is, "like himself." "Was taught" is added.
- **Fix:** `plain`: "to instruct his officials to be like himself."

## Checked and found sound (for the writer's information)

- **Rabbinic citations:**
  - Ketubot 112a–b: Rabbi Hiyya bar Gamda rolls in the dust, citing 102:14.
  - Berakhot 10a: the five "Bless the LORD, my soul," and Beruriah at 104:35.
  - Berakhot 9b–10a: 103 chapters before Hallelujah, with Psalms 1 and 2 counted as one, consistent with part 001-017.
  - Megillah 18a: 106:2 and "silence is praise," which matches the site's Plain English Translation of 65:1.
  - Sanhedrin 102a: the calf.
  - Avodah Zarah 3b: God plays with Leviathan.
  - Mekhilta: the tiqqune soferim list includes 106:20.
- **Liturgy:**
  - Orthodox: the fourteenth kathisma is Greek Psalms 101–104; the Hexapsalmos includes Greek Psalm 102; Greek Psalm 102 is the first Typika antiphon; Greek Psalm 103 is the Proemiac Psalm at Vespers.
  - Catholic: Psalm 104 is the Pentecost responsorial psalm.
  - Jewish: Barkhi Nafshi is said on Rosh Chodesh and, in Ashkenazi use, at Sabbath Minchah in winter; the tefillin are touched at 145:16; Hodu (1 Chronicles 16:8–36) is said in Pesukei deZimra; the gathering blessing is in the Amidah.
  - Christian: Luther's table grace; Coverdale's "the iron entered into his soul."
- **Greek readings confirmed** (Rahlfs, via sacred-texts.com): 103:5 "desire"; 103:14 μνήσθητι; 104:17 heron; 105:6 δοῦλοι; 105:22 παιδεῦσαι ... ὡς ἑαυτόν; 105:28 without "not"; 105:40 ᾔτησαν; 106:7 ἀναβαίνοντες; 106:15 πλησμονήν; 106:30 ἐξιλάσατο; 106:33 παρεπίκραναν τὸ πνεῦμα; 106:48 γένοιτο γένοιτο.
- **Sources and church documents:** Day (2013) is a real chapter in Gillingham's volume. The Augustine eagle story (*Enarrationes* on Psalm 102), Galileo's letter and the Baronius saying, the Augsburg Confession 4, Trent session 6 chapters 8 and 10, and Westminster Confession 8.2 are correctly cited.
- **1 Chronicles 16:** the Plain English Translation of 105:1–15 and of 106:1, 47–48 matches the site's Plain English Translation of 1 Chronicles 16 word for word except where the Hebrew differs.
- **Exodus 34:6 and Hebrew numbering:** note 103:7 and the chapter page quote Exodus 34:6 exactly. The Hebrew numbering note (102:0) appears once and is correct for 102 (+1), 103 (same) and 104–106 (no titles).
- **Translation:** no NIV/ESV drift beyond findings 21 and 22. Wording that the Hebrew forces, such as "Seek the LORD and his strength" and "And let all the people say, 'Amen!'", is acceptable.

## Fixes applied

1. Fixed. 102:26 variant now has three readings: the Masoretic Text (followed), the Greek (Rahlfs, most manuscripts) with ἀλλάξεις "change", and Codex Vaticanus (as printed by Tischendorf) with a few others, ἑλίξεις "roll up", the form in Hebrews 1:12. The "why" says the Greek is divided and that Vaticanus may have been brought into line with Hebrews. The chapter 102 deep section now names two certain Greek features and one disputed one. Note 102:25 is changed to match. Per the lead decision, the variants' "Greek" label now means Rahlfs, with Vaticanus agreeing or named separately.
2. Fixed. The chapter 106 deep section now says the psalm's order is its own. The craving and Dathan/Abiram come before the calf, and Dathan/Abiram also comes before the spies. It notes that commentators see a thematic arrangement.
3. Fixed. The book is named on every reference in the Genesis 1 table, the chapter 105 and 106 deep sections, the 1 Chronicles table and the topics. A script run over all of the part's JSON (with tools/refs.js) found 16 more continuation references to other books ("Isaiah 43:1, 7", "Exodus 8:17, 24", "Hebrews 1:8, 10", and Psalm 41:13 / 72:18–19 / 89:52 written bare). They now carry the book name. The rerun reports 0.
4. Fixed. The creation and days-of-creation topics say "roughly" or "loosely" and note that the animals and birds come before the sun and moon. The `common` line says "loosely".
5. Fixed. 104:8 now says the KJV takes the waters as subject, the Greek is ambiguous, and the Latin makes the mountains and plains the subject. The 2QPs sentence is dropped.
6. Fixed. 104:18 now says "hedgehogs" is the Latin. The Greek has "deer" for the ibex and its Leviticus 11:5 word for the hyraxes.
7. Fixed. 104:30 now gives the Psalter's *emittes* and the liturgy's *Emitte* as a versicle.
8. Fixed: 102:10 now reads *shalakh*.
9. Fixed. The chapter 105 deep section lists the English differences as 105:6, 8, 12 and 14, and says only a Hebrew preposition differs in 105:15. Note 105:1 adds 105:14 and points to the table.
10. Fixed. New variant at 105:27: the Masoretic Text "they set" (followed), against the Greek "he set". The Syriac agreement is given as reported by Allen.
11. Fixed. The Greek number is now the last sentence of the Psalm 103 summary.
12. Fixed. One rendering of Hebrews 1:10–12 (the chapter's, built from literal.js Heb), quoted in part in note 102:25. One rendering of Hebrews 13:8 ("Jesus Christ, yesterday and today the same, and to the ages") in both places.
13. Fixed. Psalm 145:15–16 and 144:5 are now quoted in the site's Plain English Translation. The 106:7 variant quotes Psalm 78:17 in the Plain English Translation. A script compared every quotation attributed to another psalm with the current plain.txt files. That caught Psalm 39:4 (now "LORD, show me my end") in the 102:23 variant. The other mismatches the script reported are false positives.
14. Fixed. 106:9 is now "He scolded the Sea of Reeds" (as at 104:7). 106:7 is now "and they were defiant at the sea, at the Sea of Reeds". The anchors, the variant plains and the topic quotation are updated, and note 106:7 points to *marah* at 106:33 and 106:43.
15. Fixed. The Psalm 104 summary now says "and Leviathan, made to play in it".
16. Fixed. Akhenaten's dates are "about 1350–1334 BC" throughout, and Jerusalem's fall is "587 or 586 BC".
17. Fixed: "in the first centuries BC and AD".
18. Fixed: the poles illustration is dropped.
19. Fixed:
    - 103 J: Selichot instead of the High Holy Day prayers.
    - 106 L: now 106:45 among the Zikhronot verses of the Rosh Hashanah Musaf, replacing 106:4.
    - 102 H: "Daniel or Nehemiah" dropped.
    - 103:14: the unsourced rabbinic claim is reworded as a reading of the later sense of *yetser*.
    - 105:37: the 4QPs-e sentence is dropped.
    - 103 C: now "Dead Sea copies, including 2QPs, as reported by The Dead Sea Scrolls Bible".
    - 102 L: the Christmas lectionary claim is dropped.
    - 103 X: "is often compared with".
    - 106 L: the Benedictus "opens with the same formula", with 1 Kings 1:48 and Psalm 41:13 named.
20. Fixed. The 102:25 "why" now says "may have supplied it", and gives both explanations.
21. Fixed. The heading is now "Short days, endless years".
22. Fixed. 106:15 is now "but he sent a thinning sickness down their throats". The note, the variant and the 106 table are updated.
23. Not changed. The 102 card is kept, as the review allows. No wine card was added, because a traditions card on the same question already exists at Deuteronomy 14:26 (Deu/parts/12-26). A second card would repeat it. Note 104:15 already summarizes the difference.
24. Fixed: all four punctuation slips.
25. Fixed. The Greek plain is now "to instruct his officials to be like himself".

Lead decisions applied:
- 102:18 is now "will praise Yah", with a new note at its first use. The hallelu-yah cries stay "Praise the LORD!".
- 106:48 matches the English of 41:13 for the same Hebrew.
- The 106:1 refrain is unchanged.
- There is no Selah in Psalms 102–106.
- The witnesses checked for this part are stated once, in the C view of the Psalm 102 page.
- Reader-facing "checked for this page", "not seen" and "not checked" are replaced with "as reported by <source>".
- No `spec`-typed notes; the two spec boxes are Claude's own observations.
- The drift-audit scratch log was cleaned so that it records no other version's text. Rows are added for the post-review changes (102:18, 106:7, 106:9, 106:15 and the heading).
