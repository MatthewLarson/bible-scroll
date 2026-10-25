# Hostile review: Psalms 120–137 (part 120-137)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json and sources.json in this folder, plus the parts of content/books/Psa/book.json that touch Psalms 120–137. Checked against texts/orig and texts/auto (via `node tools/literal.js`), the other twelve Psalms parts, the site's Plain of 1–2 Chronicles, Exodus, Numbers, Deuteronomy and Ruth, and outside sources (Sefaria texts of Rashi, the Targum, the Bavli and Midrash Tehillim; Brenton's and Rahlfs-type LXX texts online; dssenglishbible.com for the Qumran readings; the 1979 BCP Daily Office Lectionary). `node tools/build.js --check Psa/120-137` reports 0 errors, 0 warnings.

## Verdict

This is a strong part. The Plain is rebuilt from the Hebrew, reads as poetry, keeps the stair-step repetitions, and I found no verse that leans on NIV or ESV wording. The jussive/indicative shift in 121:3–4, the `nefesh` = throat point in 124:4, the passive `hashedudah` in 137:8, the `'im lo'` oath in 131:2 and the uncertain `shalaf` in 129:6 are all handled honestly. Every psalm has a settings card with `readers`, the Greek number opens every summary, the Hebrew numbering note appears once (120:0), the 132:8–10 table matches the site's 2 Chronicles 6:41–42 Plain word for word, and the 136 "Claude's theory" is labeled and hedged. I spot-checked the citations the writer flagged as from memory. Makkot 10a, Taanit 5a and 23a, Berakhot 8a and 10b, Kiddushin 30b, Arakhin 15b, Menachot 110a, Shabbat 30a, Sukkah 53a, Pesachim 118a, Bava Batra 60b, Mishnah Middot 1:1 and 2:5, Sukkah 5:4, Tamid 3:2, Taanit 3:9, Rashi on 121:1 (Sifre Ekev 47), 128:1 ("every" includes women), 128:6 and 131:1 ("my son"), the Targum on 120:3–6, 121:1, 5, 6, 8, 131:2 and 133:1, and the Midrash Tehillim heifer parable on 129 all say what the part claims. The weaknesses are in the textual evidence. The Dead Sea Scrolls are almost absent, though these psalms are well attested at Qumran. "Swete's text" (which here is Codex Sinaiticus) is sometimes treated as "the Greek", which produces at least one wrong claim (136:26). The book.json outline headings for these psalms copy NIV/ESV wording. The other findings are smaller: a few errors, internal inconsistencies, cross-part mismatches and missed tradition cards.

Counts: 0 critical, 3 major, 21 minor.

## Findings

### 1. Major: the Dead Sea Scrolls are missing for all eighteen psalms (and the Syriac is never mentioned)
**Location:** variants.json (whole part); chapters.json 136 `C`.
**Problem:** The brief requires 11QPs-a, the 4QPs fragments and the other scrolls as witnesses, and says each witness should be marked checked or unchecked. The part's only Qumran mention is one sentence on 136, "not checked here". These psalms are among the best attested at Qumran: 11QPs-a (11Q5) holds 121–132 in sequence and 133–137 in its own order, and 11QPs-b (11Q6), 4QPs-k (4Q92) and 4QPs-n (4Q95) hold parts of 133, 135 and 136. Readings that change the English and need entries or notes:
- **133:3.** 11Q5 and 11Q6 both end the psalm with "Peace upon Israel" (as in 125:5 and 128:6). 11Q5 also reads "robe" (singular) in 133:2 and lacks "life" in 133:3.
- **135:6.** 11Q5, 4Q92 and 4Q95 agree against the Masoretic Text and the Greek on a different text in this verse ("king of the gods" / "does as king"). 11Q5 also reads "our God" for "our Lord" in 135:5, and has a different 135:21 ("May the LORD bless you from Zion"). 4Q95 adds the refrain "for his loyal love is forever" in 135:12, apparently mixing 135 with 136.
- **136:7–8.** 11Q5 has an extra refrain line ("the sun and the moon, for his loyal love is forever") and lacks "great" in 136:4. This bears directly on the 26-refrain count that the 136 spec box rests on.
- The order of 11Q5 (132 followed by 119, then 135, 136 and the Catena; 133 followed by 144; 134 near the end before 151; 137 after 139) matters for the "fifteen songs as one collection" claims in 120 `deep`, 134 `deep` and the songs-of-ascents topic. 11Q5 does not keep 120–134 together.

**Evidence:** dssenglishbible.com, pages for Psalms 133, 135, 136 and 137, which list 11Q5, 11Q6, 4Q92 and 4Q95. Abegg–Flint–Ulrich (`abegg-dssb`) and Flint (`flint-dss-psalms`) are already in sources.json.
**Fix:** Add variant entries at least for 133:3 ("Peace on Israel!" as an added reading) and 135:6, and a note or variant on the 11Q5 line in 136:7–8, with "checked in Abegg–Flint–Ulrich" or "not checked". Add one sentence to the songs-of-ascents topic and to 120 `deep` on 11Q5's different order. Add a line saying whether the Syriac (Peshitta) was consulted. It is relevant at 137:8, where Symmachus and, by most reports, the Syriac read the active "plunderer", which would give the "destroyer" conjecture some ancient support. Check that before you say "no Hebrew manuscript has it" without qualification.

### 2. Major: the 136:26 variant (and related claims) treat Sinaiticus as "the Greek" and misreport the Greek evidence
**Location:** variants.json 136:26; notes.json 136:1 (spec), 136:4 and 136:26; chapters.json 136.
**Problem:**
- The variant says only the Gallican Latin adds the 27th line, "Give thanks to the Lord of lords…", and its first reading lists "Septuagint (Swete's text)" with the Hebrew for the shorter form. Its `why` says "neither the Hebrew nor the Greek text Swete prints has it". But the standard Greek text has the extra line. The Rahlfs-type text and Brenton's Greek (sacred-texts.com/bib/sep/psa135.htm; bibelkommentare.de LXX Psalm 135) both end Greek 135:26 with ἐξομολογεῖσθε τῷ θεῷ τοῦ οὐρανοῦ … / ἐξομολογεῖσθε τῷ κυρίῳ τῶν κυρίων ὅτι εἰς τὸν αἰῶνα τὸ ἔλεος αὐτοῦ. The Gallican took the line from its Greek source.
- The same `why` says "The Greek in Swete's text reads 'the Lord of heaven'". The standard Greek has τῷ θεῷ τοῦ οὐρανοῦ, "the God of heaven". If Sinaiticus really reads κυρίῳ, say "Sinaiticus", not "the Greek".
- Note 136:4 says "Sinaiticus, as Swete prints it, adds 'alone' also in 136:7". μόνῳ in Greek 135:7 is in the standard Greek text (same sources), not a Sinaiticus peculiarity.
- Note 136:1 (spec) and the 136:26 variant say "the Gallican Latin adds a 27th verse". It should be "the Greek and the Gallican". This weakens the spec's 26 = YHWH count, since the Greek tradition does not have 26 refrains.

**Fix:** Rewrite the 136:26 variant. Reading 0 is the Masoretic Text, Jerome *iuxta Hebraeos* and (if verified) Sinaiticus. Reading 1 is the Old Greek (Rahlfs, Alexandrinus and most witnesses) and the Gallican. Fix "Lord of heaven", reword the 136:4 note, and in the spec box say that the Greek has 27 refrains. Generally, wherever the part writes "Swete's text", say plainly that this means Codex Sinaiticus (Vaticanus is lost here). Where Rahlfs differs, cite Rahlfs (`rahlfs-lxx`) for "the Greek". Recheck the readings attributed to the first hand of Sinaiticus (135:14 οἰκτειρεῖ; 122:0 "of David" in ℵ but not in A; 132:15 χήραν in ℵ* and A) against the codexsinaiticus.org transcription. I could not verify them.

### 3. Major: the book.json outline lines for these psalms reproduce NIV/ESV wording and do not match the site's Plain
**Location:** content/books/Psa/book.json `outline`, entries 121–136 (owner: 001-017 writer).
**Problem:** "If the LORD had not been on our side" (124) and "As the mountains surround Jerusalem" (125) are the NIV's own lines word for word. "I lift my eyes to the hills" (121) is ESV/NIV wording. "Unless the LORD builds the house" (127) is NIV/ESV. "Out of the depths" (130) is ESV/KJV. The site's Plain reads "I raise my eyes toward the mountains", "Were it not the LORD who stood with us", "Jerusalem: mountains are all around her", "If the LORD does not build a house" and "From the depths". "His loyal love lasts forever" (136) is not the Plain's "his loyal love is forever". The part's own section heading "Unless the LORD builds the house" (plain.txt, before 127:1) and the 127 chapter title have the same problem.
**Fix:** Rebuild the outline labels for 121–137 from the Plain or from neutral summaries ("Eyes on the mountains", "Were it not the LORD", "Mountains around Jerusalem", "If the LORD does not build", "From the depths", "His loyal love is forever"). Change the 127 heading and chapter title to something like "If the LORD Does Not Build".

### 4. Minor: the 136:1 refrain is rendered differently from the same Hebrew elsewhere on the site
**Location:** plain.txt 136:1 against 106:1, 107:1, 118:1, 118:29 and 1 Chronicles 16:34.
**Problem:** *Hodu laYHWH ki tov ki le'olam chasdo* is identical in all five. Psalms 106, 107, 118 and 1 Chronicles 16:34 have "Give thanks to the LORD, for he is good; / his loyal love is forever". Psalm 136:1 has "…for he is good, / for his loyal love is forever". (2 Chronicles 5:13 and 7:3 keep the second "for"; Ezra 3:11 has "For he is good, for…".) So the site renders one formula two ways.
**Fix:** Agree one rendering with the 107-118 writer and the Chronicles writers. Keeping "for" throughout 136 is defensible for the refrain, but then 106:1, 107:1, 118:1 and 1 Chronicles 16:34 should match, or a note at 136:1 should say why they differ.

### 5. Minor: "Some modern Anglican psalters mark the verses as optional" is unnamed
**Location:** chapters.json 137 `traditions`, Anglican view.
**Evidence:** The Episcopal Church's 1979 Book of Common Prayer Daily Office Lectionary appoints "Psalm 137:1–6 (7–9)" (for example, the reading set for 4 April 2020 on BibleGateway's BCP Daily Office plan). The parentheses mark the verses as optional.
**Fix:** Write: "The Episcopal Church's 1979 Prayer Book lectionary appoints 137:1–6 with 7–9 in parentheses, as optional." Add a `bcp-1979` source key if none exists. Otherwise drop the sentence.

### 6. Minor: Jewish handling of 137:7–9 is not stated
**Location:** chapters.json 137 `deep` ("Jewish and Christian traditions have answered differently") and the `J` lens.
**Problem:** The brief asks how each tradition prays or avoids the curse psalms. The page gives only Christian positions. It does not say plainly that Jews recite the whole psalm, verses 7–9 included, before the weekday grace after meals. Nor does it say how Jewish interpreters read 9: the Targum gives 137:8 to the angel Gabriel, making the prayer a heavenly plea, and medieval commentators read it as prophecy of Babylon's fall and later of Edom/Rome.
**Fix:** Add two or three sentences with sources (Targum, Rashi or Ibn Ezra on 137:8–9).

### 7. Minor: wrong cross-reference, Isaiah 42:4
**Location:** notes.json 122:4 ("Three times a year").
**Problem:** "Pilgrim crowds singing on the road are described in Isaiah 30:29 and 42:4". Isaiah 42:4 is the servant who will not grow faint until he sets justice on earth. It has nothing to do with pilgrims. The Josephus clause ("in Jesus' day by Josephus") cites no passage, and Josephus describes the size of pilgrim crowds, not their singing.
**Fix:** Drop 42:4 (Isaiah 35:10 or 51:11 would fit). Give a Josephus reference for pilgrim crowds (e.g. *War* 6.423–425) or remove "singing".

### 8. Minor: Meshech is placed in three different places
**Location:** notes.json 120:5 ("central Asia Minor"); variants.json 120:5 `why` ("near the Black Sea"; Meshech and Kedar "one north and one south"); chapters.json 120 `C` ("near the Black Sea"); glosses.json 120:5 ("near the Black Sea"). The note puts Kedar "east".
**Fix:** Use one description throughout, e.g. "central Anatolia (the Mushki), far to the north" and "the north Arabian desert, to the south-east".

### 9. Minor: two different Latin readings are given for Jerome at 130:4
**Location:** notes.json 130:4 ("Forgiven, so that we fear") has *ut terribilis sis*; variants.json 130:4 has *cum terribilis sis*.
**Fix:** Check Weber–Gryson and use the same reading in both places.

### 10. Minor: "closes" is wrong for 113:2 and 125:2
**Location:** notes.json 131:3: "'From this moment on and for all time' also closes 113:2, 115:18, 121:8 and 125:2."
**Problem:** 113:2 and 125:2 are not the last verses of their psalms.
**Fix:** Change to "also comes in".

### 11. Minor: "Remember, LORD" is quoted, but the Plain does not say it
**Location:** chapters.json 137 `sum` ("'Remember, LORD' the people of Edom") and `deep` ("'Remember, LORD' (137:7; compare Romans 12:19)"); plain.txt section heading "## Remember, LORD".
**Problem:** The Plain of 137:7 reads "LORD, hold the day of Jerusalem against the people of Edom". *Zekhor* is translated as "hold … against", so the quoted words never appear in the verse.
**Fix:** Either change the Plain to keep "Remember" (e.g. "Remember, LORD, against the people of Edom / the day of Jerusalem"), which is closer to the Hebrew and keeps the link with "remember" in 137:1 and 6, or stop quoting "Remember, LORD" and add a note on *zakhar* + *le-*.

### 12. Minor: quotations of other psalms do not match the site's Plain
**Location:** notes.json 135:3 quotes 147:1 as "it is good to make music to our God; it is lovely". The site's Plain of 147:1 is "Making music to our God is good; / it is sweet, and praise is what fits". Notes.json 121:2 lists 146:6 among the verses with "maker of heaven and earth". The site's Plain of 146:6 has "who made the heavens and the earth" for the same Hebrew (*'oseh shamayim va'arets*).
**Fix:** Quote 147:1 in the site's Plain. Flag 146:6 to the 138-150 writer: the same phrase should be rendered the same way in 115:15, 121:2, 124:8, 134:3 and 146:6.

### 13. Minor: a "fresh rendering" of a book the site has already translated
**Location:** notes.json 128:2: "A people you do not know will eat the fruit of your ground" (Deuteronomy 28:33, fresh rendering).
**Problem:** Deuteronomy is on the site. Its Plain reads "A people you have never known will eat what your soil grows…". STYLE requires quoting the site's Plain.
**Fix:** Quote the Deuteronomy Plain (it may be shortened with "…").

### 14. Minor: the other David titles in the Greek get no entry
**Location:** variants.json 122:0 `why` says "The Greek copies do not agree on these names" for 122, 124, 131 and 133, but only 122 and 127 have entries.
**Evidence:** Brenton's Greek (Vaticanus-type text) titles Greek 123 (Hebrew 124) and Greek 130 (Hebrew 131) simply "A Song of Degrees". For 130 it notes that Alexandrinus adds "for David".
**Fix:** Add short entries (or one note on the psalm-titles topic) for 124:0, 131:0 and 133:0, saying which Greek witnesses have or lack "of David".

### 15. Minor: the Catholic view in the 127 tradition card quotes a phrase from another document
**Location:** chapters.json 127 `traditions`, Catholic.
**Problem:** The phrase "the supreme gift of marriage" is from Vatican II, *Gaudium et Spes* 50, quoted in *Humanae Vitae* 9 and Catechism 2378. It is not from *Humanae Vitae* 10–16 as cited.
**Fix:** Cite *Gaudium et Spes* 50 and Catechism 2378 for the phrase, and keep HV 10–16 for the teaching on openness to life and natural spacing.

### 16. Minor: the 130 tradition card has a weak Methodist view and misses the main real disagreement
**Location:** chapters.json 130 `traditions`.
**Problem:** The Methodist view is an anecdote (Wesley heard the anthem on 24 May 1738). It does not answer the card's question. Meanwhile the clearest place where churches actually differ over Psalm 130, the *De profundis* prayed for the souls in purgatory (stated in notes 130:1 and in the 130 `L` lens and `deep`), has no card. The brief lists "prayer for the dead" among the required subjects, and a sheol card already exists at 88.
**Fix:** Either give the Methodist view as a doctrine with a source (Wesley's sermon "Justification by Faith" or "The Witness of the Spirit" on assurance) or drop it. Add a short card with `top: "sheol"` (or the topic the 88 card uses): Catholic (prayer for the dead, Catechism 1032), Orthodox (prayers for the departed without purgatory), Lutheran/Reformed (no prayer for the dead; the psalm is the living sinner's prayer).

### 17. Minor: Psalm 132:8 and Mary
**Location:** chapters.json 132 (no card); topic `mary` exists, with a card at 45.
**Problem:** In Catholic liturgy Psalm 132:6–7, 9–10, 13–14 is the responsorial psalm of the Vigil Mass of the Assumption ("Lord, go up to the place of your rest, you and the ark of your holiness"), and the Litany of Loreto calls Mary "Ark of the Covenant". Protestants reject this reading. It is a real place where churches differ, and the 132 page does not mention it.
**Fix:** Add one sentence to the 132 `X` or `L` lens, and preferably a short card with `top: "mary"` (Catholic and Orthodox: the ark as a type of Mary; Protestant: the ark is God's presence, fulfilled in Christ).

### 18. Minor: the Sukkah 53a legend is told six times
**Location:** notes.json 121:0 and 130:1; chapters.json 120 `deep`, 121 `J`, 130 `H`; topics.json songs-of-ascents "In worship".
**Problem:** STYLE says one note, then refer to it. Also, 121:0 says "see 120:0", but the 120:0 note does not tell the story.
**Fix:** Keep the full version in 120 `deep` (and the topic). Cut the 130:1 retelling and the 121 `J` sentence to a cross-reference, and point 121:0 to "the chapter page of Psalm 120".

### 19. Minor: two rabbinic sources are unnamed, and one claim is unsourced
**Location:** notes.json 120:4 ("A rabbinic tale, which Rashi repeats", the broom coals): name it, Genesis Rabbah 98:19. Notes.json 126:4 ("The Midrash compares the day of rain to the resurrection of the dead"): this is Bavli Taanit 7a, and it is not a comment on this verse, so say so. Chapters.json 124 `J` ("It is sung in some communities at Purim and Hanukkah"): no source is given. Give a siddur reference or soften the claim to "some communities".

### 20. Minor: "introit" at 123
**Location:** chapters.json 123 `L`: "Its first verse is sung as an introit".
**Problem:** In the Roman Gradual, *Ad te levavi oculos meos, qui habitas in caelis* is the Tract (chant) of the Third Sunday of Lent. That Sunday's introit, *Oculi mei*, is Psalm 25:15. The Anglican clause ("in many Anglican services as a prayer of waiting") has no source.
**Fix:** Change "introit" to "the Tract of the Third Sunday of Lent in the Roman Gradual", and source or drop the Anglican clause.

### 21. Minor: the 124 settings card misreads 124:6
**Location:** chapters.json 124 `settings` `to`: "the congregation, and the LORD in the closing blessing (124:6)".
**Problem:** 124:6, "The LORD be blessed!", speaks *about* the LORD in the third person. It is not spoken *to* him.
**Fix:** Change `to` to "the congregation throughout; 124:6 blesses the LORD in the third person".

### 22. Minor: a source key is duplicated
**Location:** sources.json `benedict-rule-prologue`.
**Problem:** The same work is already in content/sources.json as `rule-benedict`, whose citation names only chapters 8–18. The part uses both keys, `rule-benedict` at 134:3 and the new key at 137:9 and in the 137 card.
**Fix:** Use `rule-benedict` everywhere. If needed, ask for its citation to be broadened to the Prologue (an edit to a shared file, done read-modify-write).

### 23. Minor: the 2 Chronicles part's quotation of Psalm 132 is now out of date
**Location:** content/books/2Ch/parts/01-12/notes.json 6:41 ("Solomon sings Psalm 132").
**Problem:** That note gives Psalm 132:8–10 "in a fresh rendering" ("Up, LORD, to your resting place… sing out for joy… For your servant David's sake"). The site now has a Psalms Plain ("place of rest… shout for joy… For the sake of David your servant"). Readers will see two English versions of the same Hebrew.
**Fix:** For the 2 Chronicles writer: quote Psalm 132:8–10 from the Psalms Plain and drop "fresh rendering". The 132 `deep` table here is already correct.

### 24. Minor: small renderings to look at again
- **127:2** "and put off going to bed". *Me'acharei shevet* is "who delay sitting (resting)", and "going to bed" narrows it. "and sit down to rest late" is closer, or add a gloss.
- **125:3** "the share of land the righteous drew by lot". *Goral hatsaddiqim* is "the lot of the righteous", and "drew" adds an action. That is acceptable, but the glossary note on 125:3 should say the Hebrew is just "the lot".
- **136:26** spec box: "Hebrew letters were used as numbers only late in the biblical period". Be concrete: alphabetic numerals are first attested on Hasmonean-era coins (second–first century BC). Also say that the 26 = YHWH link is already common in Jewish homiletic writing, so the box should say where it overlaps with published material (STYLE rule 4), not only that the Talmud does not make it.

## Fixes applied

- **Lead decisions applied.**
  - Standalone Yah is now "Yah" in 122:4, 130:3 and 135:4, with the note at its first use (122:4). Hallelu-yah stays "Praise the LORD!".
  - "The Greek" now means the reading of all the Greek witnesses in Swete's edition. A reading found in only one manuscript is named by its codex.
  - No reader-facing text says "checked myself" or "not checked" any more. The 120 chapter page has one witness statement, in the section "Witnesses for Psalms 120–137".
  - The 136 "twenty-six" box is retyped from `spec` to `views` and sourced.
- **1 (Qumran).** I checked the Qumran texts myself in the ETCBC transcription (`etcbc-dss`), already in sources.json from the 138-150 part.
  - New variants:
    - 121:4: 11QPs-a adds "by night".
    - 133:3: 11QPs-a and 11QPs-b end with "Peace on Israel!" and lack "life"; "his robe" in 133:2 and "the mountain of Zion" are in the `why`.
    - 135:6: 11QPs-a, 4QPs-k and 4QPs-n add "none like Yah ... King of gods"; "our God" in 135:5 is in the `why`.
    - 135:21: "May the LORD bless you from Zion"; the 135:2 additions are in the `why`.
    - 136:8: the extra refrain, with 136:4 lacking "great" and 4QPs-n's "his people" at 136:22 in the `why`.
  - New third reading at 129:3: 11QPs-a has "the wicked plowed".
  - 4QPs-e and 4QPs-k are added to the witnesses of 130:4 and 135:14.
  - A new note at 124:0 covers the Qumran and Greek evidence for the David titles.
  - One sentence on 11QPs-a's different order is in 120 `deep` and in the songs-of-ascents topic.
  - The Syriac is stated as not consulted. At 137:8, Symmachus and the Syriac "plunderer" are reported from BHS.
  - Not taken over: the reviewer's "4Q95 adds the refrain in 135:12". That line is only restored in the ETCBC text, so I did not adopt it. Readings that survive only in restored text (for example 122:4 'adat, and 131:0 in 11QPs-a) are left out.
- **2 (136:26 and the Greek).** The 136:26 variant is rewritten. The Old Greek in Rahlfs and Brenton, as reported, and the Gallican have the 27th line. The Masoretic Text, Jerome's Psalter from the Hebrew and Sinaiticus lack it. "The Lord of heaven" is now attributed to Sinaiticus' first hand; Swete's apparatus has "26 κυριω] θω ℵc.aRT". The 136:4 note now says the Greek has "alone" in 136:7. The 136:1 box gives 27 refrains for the Greek. Other "Swete's text" places now say "the Greek" where Swete's apparatus shows Alexandrinus and the Verona and Zurich Psalters agreeing, and name the codex where it does not: 127:0, 130:4, 132:15, 135:14, 137:0.
- **3.** Stays with the coordinator for book.json. In my part, the 127 heading is now "If the LORD does not build" and the 127 title "If the LORD Does Not Build". The 135 heading and title are also changed, because "The LORD chose Jacob" no longer matches the Plain.
- **4.** Left as is, per the lead decision. Psalm 136 keeps its refrain form.
- **5.** The 1979 Episcopal Prayer Book lectionary is named in the 137 card and in the curse-psalms topic, with the new key `bcp-1979`.
- **6.** 137 `deep` and the curse-psalms topic now say that Jews recite the whole psalm on weekdays before the grace after meals. They also give the Targum's Michael (137:7) and Gabriel (137:8) and the later reading of Edom as Rome.
- **7.** Isaiah 42:4 is dropped. Josephus is cited as *Jewish War* 6.423–425 for the crowds, under the key `josephus`, and the claim about singing is removed.
- **8.** Meshech is "central Anatolia, far to the north" and Kedar "the north Arabian desert, to the south-east" in the note, variant, gloss and chapter.
- **9.** Both places now read *cum terribilis sis*, as in the Vulgate file checked.
- **10.** "Closes" is now "also comes in".
- **11.** The Plain of 137:7 is rebuilt in Hebrew order: "Remember, LORD, against the people of Edom / the day of Jerusalem, / those who kept saying ...". The 137 `sum` is reworded.
- **12.** 147:1 is now quoted in the 138-150 part's Plain. 146:6 is flagged to the coordinator: 138-150 has "maker of heaven and earth" there, so it already matches.
- **13.** The Deuteronomy 28:33 quote now uses the site's Plain.
- **14.** A new note at 124:0 gives the Greek and Qumran evidence for "of David" in 122, 123, 124, 131 and 133, and "of Solomon" for 127, from Swete's apparatus.
- **15.** The phrase is now cited to *Gaudium et Spes* 50 and Catechism 2378, with the new key `gaudium-et-spes`. *Humanae Vitae* 10–16 is kept for the teaching.
- **16.** The Methodist view is dropped. A new card with top `sheol` asks whether the living may pray for the departed: Catholic, Orthodox, Lutheran (Smalcald Articles II.2) and Reformed (Westminster Confession 21.4).
- **17.** A sentence on the Vigil of the Assumption and "Ark of the Covenant" (Catechism 2676) is added to 132 `X`. A new card with top `mary` gives Catholic, Orthodox, Lutheran and Reformed views.
- **18.** The Sukkah 53a story is told in full only in 120 `deep` and the topic. Notes 121:0 and 130:1, 121 `J` and 130 `H` now point to the chapter page of Psalm 120.
- **19.** Genesis Rabbah 98:19 is named at 120:4. At 126:4 the note now says "Bavli Taanit 7a, on another verse". The Purim and Hanukkah claim at 124 is removed.
- **20.** "Introit" is now the Tract of the Third Sunday of Lent, and the Anglican clause is dropped.
- **21.** The `to` field of the 124 settings card is fixed.
- **22.** `benedict-rule-prologue` is replaced by `rule-benedict` everywhere and removed from sources.json. The shared citation still names chapters 8–18; broadening it to the Prologue is left to whoever owns content/sources.json.
- **23.** Stays with the coordinator, as part of the quote sync.
- **24.**
  - 127:2 now reads "and sit down late to rest".
  - The 125:3 gloss now says the Hebrew is only "the lot of the righteous".
  - The 136 box is made concrete: Hasmonean coins, the link already common in Jewish homiletics, the Greek's 27 refrains, and the extra refrain in 11QPs-a.
- **lenten-triodion.** No other part defines this key now. The only definition is in this part, so the conflict is gone.
