# Hostile review: Psalms 107–118 (parts/107-118)

## Verdict

This is a strong part. `node tools/build.js --check Psa/107-118` reports 0 errors and 0 warnings (202 verses, 134 notes, 18 variants, 72 glosses, 12 chapter pages, 16 topic contributions). I rebuilt every verse against `literal.js` and found no mistranslation, no omitted line and no close copying of the NIV or ESV. Where the Hebrew is hard, the Plain English Translation keeps it hard and says so: 107:3 "and from the sea", 107:17 "fools", 110:3, 110:7, 116:1 "I love", 116:10, 116:15, 118:24, 118:27.

Psalm 108 matches the site's Plain English Translation of 57:7–11 and 60:5–12 word for word. It differs only where the Hebrew differs: 108:3 "and", 108:4 "higher than", 108:5 "And", 108:8 without "and", 108:9, 108:10, 108:11. The deep-dive table lists every one of these. The cross-part items all hold:
- The refrain at 107:1, 118:1 and 118:29 matches 106:1 and 1 Chronicles 16:34. 136:1 uses the second *ki*, which is defensible, and I do not flag it.
- 110:1 keeps lowercase "my lord" throughout.
- `hallel` and `hallelujah` are separate topics with separate subjects.
- 107:40 and 107:42 use the site's Job wording.
- 113:7–8 uses the site's wording of 1 Samuel 2:8.
- 118:14 uses the site's wording of Exodus 15:2.

There are three real weaknesses:
1. The Dead Sea Scrolls are never used, although 11QPs-a and 4QPs-b both contain these psalms and differ from the Masoretic Text.
2. Four Latin and Greek readings are still printed with the drafting tag "from memory". One of them names the wrong person.
3. The note on the "middle of the Bible" states a false fact.

The rest are small matters of consistency and precision.

## Findings

### 1. Major: no Dead Sea Scrolls witness anywhere in the part
**Location:** variants.json (whole part); notes and chapters for 109 and 118.

**What is wrong:** The brief requires the scrolls as witnesses and a statement of which witnesses the writer checked. No entry names any scroll, and no note says the scrolls were consulted. Yet these psalms are well preserved at Qumran. I checked the following against the DSS English Bible transcriptions (dssenglishbible.com, 11Q5 and 4Q84 pages; compare Abegg, Flint and Ulrich, *The Dead Sea Scrolls Bible*):

- **4QPs-b (4Q84)** contains 112:4–5; 113:1; 115:2–3; 116:17–19; and 118:1–3, 5–12, 18–20, 23–26, 29.
  - It **leaves out 118:11** entirely. This is a whole verse of the triple refrain, and it needs a variant entry.
  - At **118:8** it reads "trust" (a form of *batach*) where the MT has "take refuge" (*lachasot*).
  - At **115:2** it lacks *na'* ("So where...").
- **11QPs-a (11Q5)**:
  - It has **109:21–31** and **118:25–29** in a non-Masoretic order, after Psalms 102–103 and before 104.
  - After Psalm 136 it has a **catena of Psalm 118 verses in the order 1, 15, 16, 8, 9, 29**. This is the scroll that the brief singles out for its "different order".
  - It also reads "trust" at **118:8**, and at **118:16** it has "you do valiantly" for "the right hand of the LORD does valiantly". The transcriptions also mark a different word order at **109:27**.

**Fix:**
- Add variants at 118:11 (4QPs-b omits it) and 118:8 (4QPs-b and 11QPs-a read "trust"), and consider one at 118:16.
- Add a note, or a paragraph in the 118 chapter page, on 11QPs-a's placement of 109 and 118 and on the 118 catena. This would also serve the 11QPs-a ordering question for the book as a whole.
- Say in each entry whether the scroll was checked in an edition (DJD 4 and DJD 16; Flint, *The Dead Sea Psalms Scrolls and the Book of Psalms*, 1997) or only reported.

### 2. Major: drafting tags "from memory" printed in reader-facing text, and one wrong attribution
**Locations:**
- notes.json 110:3 ("The Latin, from memory <i>ex utero ante luciferum genui te</i>")
- variants.json 110:3 (third entry: "Rahlfs' edition, from memory, prints <i>exegennēsa</i>")
- notes.json 111:2 ("(quoted from memory)")
- notes.json 118:17 ("(quoted from memory)")

**What is wrong:** The brief requires that Greek or Latin cited from memory be verified or the claim softened. The tag must not be left for the reader to see. I verified the readings:

- **Rahlfs, Ps 109:3 (Greek):** μετὰ σοῦ ἡ ἀρχὴ ἐν ἡμέρᾳ τῆς δυνάμεώς σου ἐν ταῖς λαμπρότησιν τῶν ἁγίων· ἐκ γαστρὸς πρὸ ἑωσφόρου ἐξεγέννησά σε. So *exegennēsa* is correct. Note also that Rahlfs has no σου after τῶν ἁγίων, while the Tischendorf text cited in the second 110:3 variant has "your holy ones". Say that the Greek witnesses differ there.
- **Gallican Psalter 109:3:** *in splendoribus sanctorum ex utero ante luciferum genui te*. This is correct, and it is the Communion antiphon of the Christmas Mass during the Night.
- **Vulgate 110:2:** *Magna opera Domini exquisita in omnes voluntates eius*. Correct.
- **Vulgate 117:17:** *Non moriar sed vivam et narrabo opera Domini*. Correct.

**The 111:2 note also misattributes the Cavendish inscription.** It says "its founder had the Latin of this verse carved over the door". The founder and donor was William Cavendish, 7th Duke of Devonshire. The inscription was put up at the instigation of James Clerk Maxwell, the first Cavendish Professor. The English text over the 1970s building was proposed by a research student, Andrew Briggs, approved under A. B. Pippard, and uses Coverdale's version (Faraday Institute, "The Cavendish Laboratory inscription"; Capturing Cambridge, "Old Cavendish Laboratory").

**Fix:**
- Delete all four "from memory" tags.
- In 111:2, write "James Clerk Maxwell, the laboratory's first professor, had the Latin ... carved".
- In 110:3, add that the antiphon is sung at the Christmas Mass during the Night.

### 3. Major: false claim about the middle verse of the Bible, in a note mislabeled as Claude's theory
**Location:** notes.json 117:1, second note ("The middle of the Bible?"), type `spec`. Also 118:8 ("see the note on Psalm 117") and chapters.json 117 `views.X`.

**What is wrong:** The note says "the halfway point falls between 118:8 and 118:9 only by some counts". By the KJV's own count of 31,102 verses there is no single middle verse. The two middle verses are Psalm 103:1–2, with 15,550 verses on either side. The 118:8 claim is a popular error, not one count among several.

The chapter claim is right: Psalm 117 is chapter 595 of 1,189. But the verse claim is wrong. The note is also typed `spec`, although none of it is Claude's theory (see finding 4).

**Fix:** Rewrite the note as type `history` or `views`:
- Psalm 117 is the middle chapter in the KJV count (594 chapters on each side) and the shortest chapter.
- The often-repeated claim that 118:8 is the middle verse is mistaken. With 31,102 verses, the middle falls at Psalm 103:1–2.
- Chapter and verse divisions are late, so none of this means anything in the text itself.

### 4. Minor: three ordinary notes typed `spec` (Claude's theory)
**Locations:** notes.json 111:1 ("An alphabet poem"), 112:1 ("The twin of Psalm 111"), 117:1 ("The middle of the Bible?").

**What is wrong:** STYLE.md reserves `spec` for Claude's own ideas, clearly labeled. The acrostic structure of 111 and 112 is a plain fact of the text. Typing it `spec` tells the reader it is a guess.

**Fix:** Retype 111:1 and 112:1 as `word` (with `orig`) or `history`. Retype 117:1 as `history` (see finding 3).

### 5. Minor: Yah rendered two ways inside the part
**Locations:** plain.txt 115:17 (*yehallelu-Yah*, Plain English Translation "sing the LORD's praise") and 115:18 (*nevarekh Yah*, Plain English Translation "we will bless the LORD"); compare 118:5, 14, 17, 18, 19, where the Plain English Translation has "Yah".

**What is wrong:** The 118:5 note explains why Psalm 118 keeps "Yah" (118:14 quotes Exodus 15:2). Nothing tells the reader that 115:17–18 also has Yah and renders it "the LORD". The other parts are mixed as well: "Yah" at 68:4 and 150:6, "the LORD" at 68:18, 77:11, 89:8, 94:7, 94:12, 102:18, 122:4, 130:3 and 135:4.

**Fix:** Either render 115:18 "we, we will bless Yah", or add one sentence to the 118:5 note: "Yah also stands in 115:17–18, where the Plain English Translation has 'the LORD'." Also raise the cross-part rule with the lead, as a possible terms.json entry.

### 6. Minor: quotations of this book that do not match its own Plain English Translation
These quotations are not followed directly by a reference, so the build does not check them:
- **111:9 note:** "holy and awesome is his name". The Plain English Translation has "His name is holy and to be feared."
- **112:5 note:** "Conducts his affairs with justice". The Plain English Translation has "he manages his affairs with justice".
- **114:7 note:** "the God of Jacob". The Plain English Translation has "Jacob's God".
- **116:6 note:** the Torah "makes the simple wise" in 19:7. The site's 19:7 has "it gives wisdom to the simple".
- **117:2 note:** 103:11, where God's loyal love is "mighty". The site's 103:11 has "stands strong over". The Hebrew (*gavar 'al*) is the same as 117:2's "mighty over us", so either align the two renderings across parts or quote 103:11 as it stands.

**Fix:** Quote the Plain English Translation exactly, or drop the quotation marks.

### 7. Minor: *ish* rendered "the man" in 112:1, and the note implies Psalm 1 has another word
**Locations:** plain.txt 112:1; notes.json 112:10 ("Both poems begin 'Happy is the man' (in Psalm 1, 'the person')").

**What is wrong:** 1:1 has *ashrei ha'ish* and 112:1 has *ashrei-ish*: the same noun. The 001-017 Plain English Translation chose "the person". This part chose "the man", which is defensible because of the masculine singulars that follow. But the note's parenthesis makes it sound as if the Hebrew differs.

**Fix:** Either align with 1:1, or change the note to "(the same Hebrew word, which the Plain English Translation of Psalm 1 renders 'the person')".

### 8. Minor: wrong transliteration
**Location:** notes.json 112:10: "the poem's last word is <i>tovd</i>".

**What is wrong:** תֹּאבֵד is *to'ved* (or *tovēd*). "tovd" is garbled.

**Fix:** Write *to'ved*.

### 9. Minor: confused explanation of the 109:10 Greek reading
**Location:** variants.json 109:10, `why`.

**What is wrong:** The entry says "the letters dalet and resh look alike, and a gimel could be read with them". *Dorshu* (דרשו) and *gorshu* (גרשו) differ only in dalet and gimel. The resh is the same in both words.

**Fix:** "The Greek seems to have read *gorshu*, 'let them be driven out', for *dorshu*, 'let them seek'. Only the first letter differs."

### 10. Minor: 108:3 "bal-ummim" called a scribal slip
**Location:** variants.json 108:3.

**What is wrong:** The Leningrad Codex writes בַּל־אֻמִּים in all four places where the phrase occurs: 44:14, 57:9, 108:3 and 149:7. A writing that is consistent in four places is a Masoretic writing tradition, not a slip. Offering readers a switchable "not peoples" reading with a nonsense line ("and I will make music to you, not peoples.") adds nothing.

**Fix:** Turn the entry into a short `word` note: the Masoretic writing divides the word, and the sense "among the nations" is not in doubt. Or keep the entry but describe it as a Masoretic peculiarity and drop the nonsense `plain`. Align with whatever the 042-055, 056-072 and 138-150 parts did for 44:14, 57:9 and 149:7 (none of them has a variant entry for it).

### 11. Minor: unverifiable manuscript claim
**Location:** notes.json 112:4: "One Greek manuscript in Tischendorf's apparatus adds 'the Lord God'".

**What is wrong:** The note names no manuscript. Tischendorf's Septuagint has only a small apparatus.

**Fix:** Name the witness, with a check against Rahlfs' apparatus, or drop the sentence. The rest of the note stands without it.

### 12. Minor: Catholic citations for Melchizedek's bread and wine
**Locations:** chapters.json 110 `traditions` (Catholic view: "Melchizedek's bread and wine are named in the Roman Canon ... (Catechism 1333, 1350)"); chapters.json 110 `deep`, "Melchizedek" ("the Roman Canon of the Mass name his bread and wine").

**What is wrong:** The Roman Canon names "the holy sacrifice, the spotless victim" offered by "your high priest Melchizedek". It does not say "bread and wine". CCC 1333 makes the bread-and-wine point. CCC 1350 is about the presentation of the offerings and, as far as I can find, does not mention Melchizedek.

**Fix:** "The Roman Canon names Melchizedek's offering, and the Catechism sees his bread and wine as a figure of the Eucharist (Catechism 1333; compare 1544)."

### 13. Minor: Orthodox view on Psalm 109 poorly sourced
**Location:** chapters.json 109 `traditions`, Orthodox: "It is prayed against the devil and the passions, and of Judas, not against people", source `ware-orthodox`.

**What is wrong:** I could not trace this claim to Ware's *The Orthodox Church*. It reads as a summary of patristic practice.

**Fix:** Cite a patristic source that says it (for example Athanasius, *Letter to Marcellinus*, on praying the psalms against the enemy; or the Fathers' reading of the psalm as about Judas), or soften the line to "Orthodox commentators, following the Fathers, read it of Judas and of spiritual enemies".

### 14. Minor: vague liturgical claims
- **111:4 note:** "it is still sung at the Eucharist in many churches", sourced to `roman-missal`. The documented use is the Office of Corpus Christi: the antiphon at Vespers that draws on 111:4–5, Vulgate 110. That is the Breviary, not the Missal. Name the use and change the source, or cut the clause.
- **115 chapter `views.L`:** "Its blessing of 'the small along with the great' is used at baptisms and dedications." No source is given. Cite one or drop it.
- **118:27 note:** "the verb gave the name Epiphany" overstates the link. The feast takes its name from *epiphaneia*, not from this verse. Write "the same verb as in the word Epiphany".
- **115:1 note (Non nobis):** it cites `jerome-psalters` for Shakespeare and the Templars, which that source cannot support. Drop the key or replace it.

### 15. Minor: the "where the Hallelujah goes" entry leaves things out
**Location:** variants.json 113:9, `why`; topics.json `hallelujah`.

**What is wrong:** The entry says the Greek moves the closing Hallelujahs of 113, 115 and 117 to the start of 114, 116 and 118. It leaves out 116:19, whose Hallelujah heads Greek 116 (= 117). The Greek also opens Greek 115 (= 116:10) with its own Alleluia. Nowhere does the part say that Psalm 107 itself carries "Alleluia" as its title in the Greek (it comes over from the end of 106), although the entry implies it with "So be it, so be it".

**Fix:**
- Check the list against Rahlfs and complete it.
- Add one sentence to the 107 chapter page: "In the Greek, Psalm 107 (Greek 106) is headed Alleluia."
- The topic's "always comes as a heading" should be checked against Greek 150.

### 16. Minor: one settings card for a many-voiced liturgy
**Location:** chapters.json 118 `settings`.

**What is wrong:** The 118 card names a leader, choirs, gatekeepers and priests, but treats the psalm as a single address. The brief allows, and this psalm invites, more than one card. Each part has its own speaker and hearer:
- The gate exchange (118:19–20) is the leader speaking to the gatekeepers.
- The crowd's song (118:22–25) is the people speaking to God and each other.
- The priests' blessing (118:26) is the priests speaking to the arriving procession.

**Fix:** Consider separate cards for 118:1–18, 118:19–21 and 118:22–29, or add these speaker shifts to the existing card's `by` and `to`.

### 17. Minor: 116:15 note kind
**Location:** notes.json 116:15, kind `mis`.

**What is wrong:** "Precious" (KJV) is a fair gloss of *yaqar*. The problem the note describes is the popular funeral reading of the word, which is kind `com`.

**Fix:** Change the kind to `com`, and soften the title "'Precious' is a misreading" to "'Precious' does not mean welcome".

### 18. Minor: small mechanical and wording points
- **variants.json 110:3 (second entry), first `w`:** "Masoretic Text (Leningrad Codex, AD 1008) (Leningrad Codex)" repeats the name.
- **notes.json 118:1:** "Jesus and his disciples, "sang the hymn"" has a stray comma before the quotation. The note also says the Hallel is "sung after the last cup". Mishnah Pesachim 10:7 has it completed over the fourth cup.
- **plain.txt 118:25:** "save us now!" adds "us", which is not in *hoshi'ah na*. This is defensible, but the Hosanna note should say so.
- **glosses.json 112:7:** "evil tidings" is older English than the Plain English Translation it explains. Use "bad news" or "terrible news".
- **topics `hallel` core:** "at the start of Book Five's second half" is not accurate for Psalm 113, since Book Five is 107–150. Write "in the first part of Book Five".

## Fixes applied

- **1 (Qumran):** Checked myself in the Abegg, Bowley and Cook transcriptions (ETCBC `dss` dataset, key `etcbc-dss`). I confirmed the reviewer's readings and the 11QPs-a order (101–103, 109, 118, 104 ... 136, 118 group, 145).
  - Added variants at 118:8 (4QPs-b and 11QPs-a read "trust"), 118:9 (11QPs-a's extra line, "than relying on a thousand people"), 118:11 (absent in 4QPs-b) and 118:16 (11QPs-a "has done a mighty deed").
  - Added a "Psalm 109 at Qumran" deep section: the scrolls that hold it, the samekh spelling at 109:4, the word order at 109:27, and 11QPs-a's placement.
  - Added a "Psalm 118 at Qumran" deep section: the 4QPs-b gaps, the 11QPs-a placement and catena, and the same catena in 11QPs-b.
  - Added Qumran notes at 107:3 (4QPs-f's probable final mem supports "sea"), 115:2 (4QPs-b lacks *na'*) and 118:8.
- **2 ("from memory"):** Removed all four tags.
  - 111:2 now credits James Clerk Maxwell, and says the 1970s English inscription uses Coverdale's wording.
  - 110:3 now names the Communion antiphon of the Christmas Mass during the Night.
  - The 110:3 variant gives Rahlfs' *exegennēsa*. The "holy ones" reading is now given from Rahlfs, with Vaticanus's added "your" noted.
- **3 (middle of the Bible):** Rewrote the 117:1 note as `history`. Psalm 117 is the 595th of 1,189 chapters; there is no single middle verse, and the two middle verses are 103:1–2; the 118:8 claim is called mistaken. Updated the 118:8 note to match.
- **4 (`spec`):** 111:1 and 112:1 are now `word` notes (with orig and kind `nu`), and 117:1 is `history`. The part has no `spec` notes left.
- **5 (Yah):** Followed the lead decision. 115:17 now reads "The dead do not praise Yah" and 115:18 "But we, we will bless Yah", with a first-use note at 115:17. Updated the 118:5 note, the sheol topic, the 115 summary and the traditions card.
- **6 (quotations):** Requoted the Plain English Translation exactly in the notes on 111:9, 112:5, 114:7 and 116:6 (19:7). The 117:2 note now quotes 103:11 as it stands, and says the Hebrew is the same.
- **7 (*ish*):** 112:1 and 112:5 now say "the person", as in 1:1. The 112:10 note now says "(the same Hebrew)". The chapter 112 text is updated.
- **8:** *tovd* is corrected to *to'ved*.
- **9:** The 109:10 explanation now says only the first letter differs (gimel for dalet).
- **10:** Removed the 108:3 variant and replaced it with a `word` note. It calls *bal-ummim* a fixed Masoretic writing found in all four places (44:14, 57:9, 108:3, 149:7).
- **11:** Dropped the unnamed-manuscript sentence from the 112:4 note.
- **12:** Rewrote the Catholic view and the Melchizedek deep section. The Roman Canon names Melchizedek's offering, and the Catechism (1333; compare 1544) sees his bread and wine as a figure of the Eucharist. The reference to 1350 is gone.
- **13:** The Orthodox view on Psalm 109 is softened to "Orthodox commentators, following the Fathers, read it of Judas and of spiritual enemies".
- **14 (liturgy):**
  - 111:4 now names the Corpus Christi Vespers antiphon, sourced to `liturgy-hours`.
  - The 115 baptisms claim is dropped.
  - 118:27 now says "the same verb as in the word Epiphany".
  - The `jerome-psalters` key is removed from the Non nobis note.
- **15 (Hallelujah):** Checked the placements in the Sixtine (Vaticanus) text, pages 876–881. The 113:9 variant now lists 106:48, 113:9, 115:18, 116:19 and 117:2 moving to head Psalms 107, 114, 116, 117 and 118. It also says Greek 115 (116:10) and Greek 118 (Psalm 119) open with Alleluia.
  - The 107 summary now says the Greek heads the psalm with Alleluia.
  - The hallelujah topic and the 111:1 note now name Codex Vaticanus instead of "the Greek". I could not check Greek 150, so the topic's claim is limited to these psalms.
- **16:** Psalm 118 now has three settings cards: 118:1–18, 118:19–21 and 118:22–29, each with its own speakers and hearers.
- **17:** The 116:15 note is now kind `com`, titled "'Precious' does not mean welcome".
- **18 (small points):**
  - Removed the duplicate "(Leningrad Codex)" in the 110:3 variant.
  - Removed the stray comma in the 118:1 note, which now says the Hallel was "completed over the fourth cup".
  - The Hosanna note now says the Plain English Translation adds "us", which the Hebrew does not have.
  - The 112:7 gloss now reads "terrible news".
  - The hallel core now says "in the first part of Book Five".
- **Lead decisions:**
  - Letter names now follow the site list (alef, waw).
  - The 108:10 note and deep table now say 60:9 and 108:10 both read "fortified city", though the Hebrew words differ.
  - Greek witnesses in the variants are labeled as Codex Vaticanus in the Sixtine edition, with Rahlfs cited where it differs.
  - The 107 page has a "Witnesses checked" section.
  - There is no Selah in this part.
- **Check:** `node tools/build.js --check Psa/107-118` reports 0 errors and 0 warnings. The part now has 135 notes and 21 variants.
