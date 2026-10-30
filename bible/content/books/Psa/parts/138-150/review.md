# Hostile review: Psalms 138–150 (part 138-150)

Reviewer's scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json in this folder, and book.json where it touches Psalms 138–150. Checked against `node tools/literal.js Psa 138`–`150`, texts/auto and texts/orig, the writer's own DSS and Swete extracts in the scratchpad (psa-138-150/dss.txt, lxx.txt), a Rahlfs-type LXX text (sacred-texts.com), the Source Library transcription of Cambridge UL MS Or. 929, the Fihrist catalogue entry for Or. 929, and the other twelve Psalms parts. `node tools/build.js --check Psa/138-150` gives 0 errors and 0 warnings.

## Verdict

This is a strong, careful part. The Plain English Translation is rebuilt from the Hebrew, reads as poetry, and keeps the hard places hard: 138:2, 139:11, 139:16, 139:20, 141:5–7, 143:9 and 144:12–14 all have honest notes. I found no close NIV/ESV drift. Most witness claims check out against the data: the 11QPs-a readings at 138:2, 139:11, 139:16, 140:3 (*'akkavish*), 141:5, 141:7, 144:2, 145:0, 145:5, 145:13, 145:20, 146:9, 149:9 and 150:6, and the Swete/Vaticanus readings at 137:8, 138:12, 138:16, 140:6, 142:10, 148:14 and in the Greek titles. Most of the liturgical claims I could test also hold up. Every psalm has a settings card with `readers`, a Greek number in its summary, and the Hebrew numbering note appears once (138:0). The Greek split of 147 at 147:12 is handled correctly. The problems are these:
- The 145:13 case rests partly on a first-person "I have seen it myself" claim about a damaged fourteenth-century Christian quadrilingual psalter, and it gives that witness more weight than it can bear.
- A "(cited from memory, not rechecked)" remark was left in the published 143:10 note, and the chapter page states the opposite of the main Greek text.
- A `spec` note presents a published observation (k-l-m = *mlk*) as Claude's own.
- Several meaning-changing witness differences live only in notes, or nowhere, not in variants.json.
- Readings found only in Codex Vaticanus are repeatedly labeled "the Greek".

None of this is critical. Severity count: **0 critical, 5 major, 17 minor.**

## Findings

### 1. Major: 145:13, the nun line. The case is mostly fair, but it leans on a first-person claim and overweights a weak witness.
**Where:** notes.json 145:13 "The missing nun line"; chapters.json 145 deep "The missing nun line (145:13)"; variants.json 145:13, reading 0 `w` and `why`; sources.json `cambridge-quadrilingual-psalter`.

**What is wrong:**
- (a) The note says "I have seen it myself in the Hebrew column of a medieval four-language psalter in Cambridge (MS Or. 929)", and the deep section says "I have seen it in the Hebrew column...". This is an eyewitness claim in a `history` note and a chapter section, not a labeled `spec`. Readers will take it as a scholar's autopsy of the manuscript. What actually exists is the Source Library's machine-assisted transcription of digitized images. I checked it, and it does show `נאמן יהוה בכל דבריו: וחסיד בכל מעשיו:` at the top of a Hebrew column (Source Library page 365, MS page 146). But the first letters of each line are torn away, and the transcription marks נאמ and וחסי as `<unclear>`. The variant prints the line as if it were cleanly legible.
- (b) Or. 929 is, per the Cambridge catalogue (Fihrist), a probably fourteenth-century psalter in Hebrew, Greek, Syriac and Arabic, copied by one scribe in parallel columns. Its own Syriac and Greek columns carry the nun line. A Hebrew column made beside them in a Christian setting cannot count as an independent Masoretic-tradition witness. The text should say so.
- (c) The variant says "the Syriac and some medieval Hebrew manuscripts (as reported)". The standard report (BHS, and the TBS article cited below) is of one medieval manuscript, Kennicott 142, with the line written at the foot of the page as a correction. Say "one", name it, or say "as reported in BHS".
- (d) The `why` calls 11QPs-a and the Greek "two independent ancient witnesses" but does not tell readers that 11QPs-a is expansionist in this very psalm. It adds a refrain after every verse, retitles the psalm "A prayer" (145:0), harmonizes "who love him" to "who fear him" (145:20), and adds a gloss at 149:9. The part's own variants show all of this. That is the strongest argument of those who think the nun line is a later fill. It belongs in the `why`, next to the 145:17b repetition point.
- (e) The witnesses' wording differs: 11QPs-a has "God ... in his words"; the Greek has "the Lord ... in his words"; Or. 929 and Kennicott 142 have "the LORD ... in all his words". This is worth one sentence, because it bears on whether the line was composed more than once.
- (f) "Perhaps lost when a copyist's eye skipped from one line to the next" names no trigger. Verse 13 ends *dor vador* and the nun line ends *ma'asav*, so there is no like ending. Either name the mechanism or drop it.

**Fix:**
- Remove the first person. Write something like "the Hebrew column of Cambridge University Library MS Or. 929, a fourteenth-century Hebrew–Greek–Syriac–Arabic psalter, has the line at a damaged line-start (Source Library transcription)", and describe it as dependent and late.
- Correct "some medieval Hebrew manuscripts" to one (Kennicott 142).
- Add 11QPs-a's expansionist character to the `why`.
- Keep the Plain English Translation's choice. Printing the line is defensible, and most modern versions do so.

The deep section's Talmud summary (Berakhot 4b) is accurate, and so is the 145:14 "In the West" reading.

### 2. Major: 143:10, "your good spirit". A "from memory" remark was left in published text, and the chapter page misstates the Greek.
**Where:** notes.json 143:10 "Your good spirit"; chapters.json 143 `views.X`.

**What is wrong:** The note says: "Swete's text of Codex Vaticanus has 'your holy spirit'...; Rahlfs's edition prints 'your good spirit' (cited from memory, not rechecked)." The parenthesis is a working note and must not ship. The fact can be checked:
- Swete (Vaticanus) does read τὸ πνεῦμά σου τὸ ἅγιον ὁδηγήσει με ἐν τῇ εὐθείᾳ (the writer's lxx.txt).
- The standard Old Greek text reads τὸ πνεῦμά σου τὸ ἀγαθὸν ὁδηγήσει με ἐν γῇ εὐθείᾳ. Note that it also has "in a land", against Vaticanus's bare "in the level [way]".
- The Gallican Latin has *spiritus tuus bonus*.

The chapter's X view then says flatly "The Greek and the Targum have 'your holy spirit' in 143:10". For the Old Greek tradition as a whole, that is wrong.

**Fix:** Delete the parenthesis. In the note, say Rahlfs and most Greek copies have "good" and Vaticanus has "holy". In the chapter, write "Codex Vaticanus and the Targum". Verify the Targum's *ruach qudshakh* (Stec), or soften it.

### 3. Major: the 145:11 `spec` note presents a published observation as Claude's theory.
**Where:** notes.json 145:11 "Claude's theory: the letters k-l-m spell 'king' backward".

**What is wrong:** STYLE.md rule 4 requires `spec` notes to say "where they overlap with published scholarship". The observation that the acrostic letters of 145:11–13 (kaf, lamed, mem), read backward, spell *mlk*, "king", is a standard one in the literature on Psalm 145. It appears even in popular lectionary commentary: Working Preacher, on Psalm 145:10–18, says "The corresponding acrostic letters of these verses, inverted, spell out the Hebrew word for king, *mlk*." The note offers it "as a suggestion only", as if new. Only the second half, that the nun line was lost by a scribe because the poet "would hardly have broken his alphabet", is Claude's. It also sits awkwardly with variant 145:13, which already argues loss.

**Fix:** Recast the note. Say the k-l-m = *mlk* pattern is widely noted by commentators, cite one (for example the source key for Adele Berlin or Reuven Kimelman on Psalm 145, after checking which one makes the point), and keep only the inference about the nun line as Claude's theory.

### 4. Major: meaning-changing witness differences are missing from variants.json.
**Where:** variants.json (13 entries); the relevant notes.

**What is wrong:** STYLE.md requires a variant entry "wherever the witnesses differ in a way that changes the meaning". These are covered only in notes, or not at all:
- **138:1.** The Greek adds "Lord" and a whole line, "for you heard the words of my mouth" (Swete 137:1). 11QPs-a adds YHWH after "I will thank you", and has a supralinear YHWH before *elohim* (dss.txt: `אוד׳כה יהוה ב כול לב׳י נגד {{ יהוה }} אלוהים`). The 138:4 note mentions the Greek line; nothing mentions the scroll.
- **141:7.** "Our bones" against 11QPs-a "my bones" (`עצמ׳י`, confirmed in dss.txt) and the "their bones" emendation. This is written as a `word` note of kind `var`; STYLE says to prefer variants.json for that.
- **143:9.** MT *kissiti* against the Greek *katephygon* (= *chasiti*?). Only a note.
- **147:8.** The Greek adds "and green plants for the service of human beings" (Swete 146:8). Only mentioned inside the 147:9 note.
- **145:12.** MT "his mighty deeds ... his kingdom" against the Greek "your" (Swete 144:12 τὴν δυναστείαν σου ... τῆς βασιλείας σου). Only a note.
- **The Greek title additions**: 143:0 "when his son pursues him", 144:0 "against Goliath", and "Of Haggai and Zechariah" over 146, 147 (both halves) and 148, all confirmed in Swete; Alexandrinus's addition at 139:0. These change the claimed setting, which the settings cards rely on. Each could be a switchable reading on the title.

**Fix:** Add variant entries at least for 138:1, 141:7, 143:9, 147:8 and 145:12. Consider title variants for 143:0, 144:0 and 146:1/147:1/147:12/148:1. Turn the 141:7 `var` note into a pointer to the entry.

### 5. Major: readings found only in Codex Vaticanus are presented as "the Greek".
**Where:** notes 139:16, 141:6, 138:8; chapter 143 X (see 2); and generally the variant witness label "Septuagint, Old Greek Psalms (Codex Vaticanus ... as printed by Swete)".

**What is wrong:** The writer worked from Swete, which prints Vaticanus. Where Vaticanus departs from the rest of the Greek tradition, the notes still say "the Greek":
- **139:16:** "The Greek misread the line as 'your unwrought (thing) my eyes saw'." That is Swete/B (τὸ ἀκατέργαστόν σου εἴδοσαν οἱ ὀφθαλμοί μου). The standard Old Greek has τὸ ἀκατέργαστόν μου εἴδοσαν οἱ ὀφθαλμοί σου, a faithful rendering of the Hebrew. "The Greek misread" is therefore unfair to the Septuagint; at most a copyist of B swapped the pronouns.
- **141:6:** "their powerful ones were swallowed up" is B's οἱ κραταιοί. The standard text has οἱ κριταὶ αὐτῶν, "their judges", which matches the Hebrew and the Gallican *iudices*.
- **138:8:** "LORD, you will repay" (B: ἀνταποδώσεις) against the third person in the standard text (κύριος ἀνταποδώσει).

The 139:12 and 148:14 notes do correctly say "Vaticanus". That is the model to follow.

**Fix:** In each place, say "Codex Vaticanus (Swete)" and give the main Old Greek reading where it differs. Remove "misread" at 139:16.

### 6. Minor: 144:2 variant. The quotation of Psalm 18 does not match the site, two witnesses are missing, and the other side is not given in its strongest form.
**Where:** variants.json 144:2 `why`, `w`.

**What is wrong:**
- The `why` quotes Psalm 18:47 as God "brings peoples down beneath me". The site's Plain English Translation of 18:47 reads "who brings nations down beneath me", and the part's own 144:1 note quotes it that way. 2 Samuel 22:48 on the site reads "who lays nations low beneath me".
- The witness list leaves out 11QPs-b (11Q6), which also reads עמים in dss.txt, and the Syriac.
- The rejected reading's best defense is not given. Some readers (and the MT as it stands) understand "my people" as subjects God makes obedient to the king, as in 18:43 (2 Samuel 22:44 "my own people's feuds").

**Fix:** Quote 18:47 as "brings nations down beneath me" (or point to 18:47 without quotation marks). Add 11Q6 and the Syriac to reading 0. Add one sentence of the "my people" view to the `why`. The choice of "peoples" itself is sound and fairly argued.

### 7. Minor: 138:1–2, the 11QPs-a details are misreported.
**Where:** variants.json 138:2 reading 0 `w`; notes 138:1, 138:2.

**What is wrong:** The variant says 11QPs-a has the Hebrew "with the same words in a different order". dss.txt shows the same order as MT: `כי הגדלתה על כול שמ׳כה אמרת׳כה`. The 138:1 note says "11QPs-a has the same word" (*elohim*) and omits the scroll's YHWH additions (see 4).

**Fix:** Delete "in a different order", and report the YHWH additions.

### 8. Minor: 150:6 variant. The Masada witness is not cited.
**Where:** variants.json 150:6.

**What is wrong:** MasPs-b (Mas1f in the data) reads the singular, `כ#ל# ה# [ נשמה ...`, which supports MT against 11QPs-a's "breaths". The brief names the Masada copy as a witness, and the 150 chapter page already cites Talmon on MasPs-b.

**Fix:** Add "Masada Psalms scroll (MasPs-b, first century BC or AD)" to reading 0.

### 9. Minor: the 139:11 note contradicts itself and leaves out a Greek difference.
**Where:** notes.json 139:11.

**What is wrong:** The note ends "The Plain English Translation keeps the Hebrew, which has the support of every early witness", yet it has just said Jerome's Hebrew Psalter reads *operient me*, "will cover me". The same note skips the Greek's very different second line, "and night is light in my delight" (ἐν τῇ τρυφῇ μου, Swete 138:11).

**Fix:** Write "the support of the Greek, the Gallican Latin and 11QPs-a". Optionally add the *tryphē* reading.

### 10. Minor: 140:7, the list of reversed YHWH Adonai is incomplete.
**Where:** notes.json 140:7.

**What is wrong:** The note says "Here, and in 109:21 and 141:8, the order is reversed, *YHWH Adonai*". The same order is in 68:20 (Hebrew 68:21), which the site's Plain English Translation renders "to the LORD, the Lord", and in Habakkuk 3:19.

**Fix:** Add both, and note how the site renders 68:20.

### 11. Minor: quotations that do not match the site's Plain English Translation.
**Where:** notes.json 142:5 and 139:11.

**What is wrong:**
- 142:5 puts "The LORD is my allotted share" in quotation marks for 16:5; 73:26; 119:57; Lamentations 3:24. None of the site's Plain English Translation matches: 16:5 "The LORD is the share I was given"; 73:26 "my share, is God forever"; 119:57 "My share is the LORD".
- 139:11 quotes Genesis 3:15 as "he will crush your head"; the site's Genesis reads "He will strike you on the head".

The build did not warn, probably because of the multi-reference lists, but STYLE.md requires the site's wording.

**Fix:** Quote the site's words, or drop the quotation marks. For 139:11, say *shuph* is the verb the site renders "strike" at Genesis 3:15.

### 12. Minor: 143:3 says "identical Hebrew line" with Lamentations 3:6.
**Where:** notes.json 143:3; chapters.json 143 `views.C` ("143:3 = Lamentations 3:6").

**What is wrong:** Lamentations 3:6 reads בְּמַחֲשַׁכִּים הוֹשִׁיבַנִי כְּמֵתֵי עוֹלָם, with the first two words in reverse order.

**Fix:** Say "the same words, in a slightly different order".

### 13. Minor: claims left at "as reported", or unsourced, that could be checked.
**Where:**
- chapters.json 139 J: "Bavli Berakhot 61a, as reported". The passage is real; the 139:5 note already cites it with `bavli-berakhot`.
- chapters.json 141 X: Chrysostom's comment on Psalm 140 (Greek), "as reported". It is in his Exposition of Psalm 140 (Greek); cite a source key.
- chapters.json 150 J: thirteen praise commands matched with the thirteen attributes, "as reported", with no source. The count of thirteen is right; name who makes the link, or drop it.
- notes.json 145:9: "The Talmud and midrash use the verse to teach that God's mercy extends to animals". Cite the source, for example Bavli Bava Metzia 85a, where the story of Rabbi and the calf quotes 145:9.

**Fix:** Cite the sources, or remove the claims.

### 14. Minor: 148, "in the same order" is overstated.
**Where:** chapters.json 148 `views.X`.

**What is wrong:** The X view says the Song of the Three "calls on the same creatures in the same order". The deep section says, more accurately, "very much in the order". The Benedicite is longer and arranged differently (rain and dew, winds, nights and days and so on).

**Fix:** Match the deep section's wording.

### 15. Minor: topics. The final-Hallel material does not reach the existing `hallel` topic.
**Where:** topics.json `hallelujah` section "The final Hallel: Psalms 146–150".

**What is wrong:** content/topics/hallel.json, "The Hallel" (aka Egyptian Hallel, Great Hallel), is the page about Hallel collections. The part's section on the daily Hallel and Shabbat 118b, "those who complete the Hallel every day", belongs there as well, or at least should link to it. As it stands, a reader on the Hallel page never learns of the third, daily Hallel.

**Fix:** Add a short section to `hallel` (refs Psalm 145:1–150:6). Optionally suggest the core writer add the "daily Hallel" alias.

### 16. Minor: a gloss and a summary go past their notes.
**Where:**
- glosses.json 144:14, "no breach and no going out" => "no break in the walls and no going into exile". The 144:14 note gives two readings (military, or farming: no miscarriage), and the gloss quietly picks one.
- chapters.json 138 `sum`: "he must not let go of the works of his hands". The Plain English Translation has "do not let them fall".

**Fix:** Hedge the gloss ("no break in the walls and no one carried off; or, of the herds, no miscarriage"). Make the summary and the Plain English Translation agree. *'Al-tereph* is "do not let go, do not abandon", so "do not let go of them" may be the better Plain English Translation.

### 17. Minor: small translation sharpenings and softenings.
**Where:** plain.txt.
- **150:5** "cymbals that crash like a battle shout". *Tseltsele teru'ah* means "cymbals of shouting/blast". "Crash" and "battle" both add to the text, and the 150:5 note itself says *teru'ah* is the war cry or the festal trumpet blast. Suggest "cymbals that ring with a loud shout".
- **140:2** "all day long they pick fights". *Yaguru milchamot* is "they stir up wars". "Pick fights" softens it. Suggest "they stir up wars".
- **142:7** "the prison cell". *Masger* is "prison, dungeon"; "cell" adds nothing and narrows the image the note leaves open (cave or prison). Suggest "the prison".
- **147:13** "your children who live in you". The Hebrew is "your children in your midst". This is acceptable, but "within you" is closer.

**Fix:** As suggested.

### 18. Minor: a garbled sentence in the 138:2 history note.
**Where:** notes.json 138:2 "Praying toward the temple".

**What is wrong:** "The Greek adds 'I will bow toward your holy temple' without change" makes no sense: the Greek adds nothing here.

**Fix:** Write "The Greek has the same line".

### 19. Minor: the 144:4 note is hard to follow and unclear about its source.
**Where:** notes.json 144:4.

**What is wrong:** "Rashi notes that Ecclesiastes 6:12 compares life to a shadow without saying which kind, and his father David explained: a passing one, the shadow of a flying bird." "His father" has no clear antecedent: it is Solomon's father. The bird image is a midrash (Midrash Tehillim on 144; compare Genesis Rabbah 96) that Rashi passes on.

**Fix:** Write "A midrash, quoted by Rashi, says that Solomon called life a shadow without saying which kind, and his father David explained: a passing shadow, like that of a bird in flight."

### 20. Minor: technical terms are left unexplained at an 8th-grade level.
**Where:** chapters.json 143 C ("Second Isaiah"), 149 C ("an eschatological hymn"), and "doxology" across 145–150.

**Fix:** Explain each term the first time, for example "Isaiah 40–55, which many scholars call Second Isaiah"; "a hymn about the end of the age"; "a closing blessing of praise".

### 21. Minor: the 139:19–22 curse lines get no "Where Christians differ" pointer.
**Where:** chapters.json 139.

**What is wrong:** Psalm 139:19–22 is the Psalter's clearest case of a church tradition cutting verses from its liturgy: the Roman Liturgy of the Hours omits them, while exclusive-psalmody churches sing them. The part says so in a note and on the topic page, but the chapter has no card. Cards with `top: "curse-psalms"` already exist on 109 (107-118) and 137 (120-137). A short card here, or a deep-section sentence pointing to the 137 card, would join this passage to that question.

**Fix:** Add a brief traditions card with `top: "curse-psalms"`, or a pointer sentence.

### 22. Minor: 145:14 / 146:7, the source of *zoqef kefufim*.
**Where:** notes.json 145:14.

**What is wrong:** The note says the morning blessing "who straightens those who are bent" (*zoqef kefufim*) "takes its words from here". The exact phrase is 146:8 (*YHWH zoqef kefufim*); 145:14 has *zoqef lekhol hakkefufim*. The 146:7 note gets it right. Also, "In the West" needs explaining: in the Talmud it means the land of Israel.

**Fix:** Write "from 146:8, compare here", and add "(that is, in the land of Israel)".

## Checked and found sound

**Liturgy:**
- Roman Liturgy of the Hours: 138 at Tuesday Evening Prayer, week IV; 139 at Wednesday Evening Prayer, week IV, without 19–22; 144 at Thursday Evening Prayer, week IV; 145 at Friday Evening Prayer, week IV; 147 at Morning Prayer, both halves; 141 and 142 at Evening Prayer I of Sunday, week I; 149 at Sunday Morning Prayer, week I.
- Byzantine: 143 in the Six Psalms (Hexapsalmos) of Matins; 148–150 as the *Ainoi*; 141 at "Lord, I have cried".
- Jewish: 146:10 in the Kedushah; Ashrei (84:4 and 144:15 before Psalm 145, 115:18 after).
- Lectionary: the Revised Common Lectionary ranges for 139.

**Rabbinic and Christian sources:** Berakhot 4b (both the alphabet/"You open your hand" teaching and the nun/Amos 5:2 explanation); Shabbat 118b; Niddah 31a; Sanhedrin 38b; Mishnah Sukkah 5:4; the *Resurrexi* introit; *Mihi autem nimis*; Celano on Francis and Psalm 141 (Greek); Cassiodorus and Luther's 1517 penitential psalms; Luther's "Pauline psalms"; Delitzsch on Schoppe and Müntzer; Catechism 2270; *Sacrosanctum Concilium* 120; the title of the Greek Psalm 151; MasPs-b ending with Psalm 150; 11QPs-a's closing order (140, 134, 151A, 151B) and its 145 refrain and *zot lezikkaron*.

**Greek and Latin:** the LXX title additions (in Swete); Jerome's readings; the Gallican readings.

**Cross-part consistency:** Psalm 18 wording in 144; 8:4; 39:5 "puff of air"; 48:1/145:3; 103:8/145:8; 109:21 "LORD, my Lord"; "Yah" as in 118:5; "Praise the LORD!" from 104:35. Book.json's numbering table matches this part.

Sources consulted for verification: [Working Preacher on Psalm 145:10–18](https://www.workingpreacher.org/commentaries/revised-common-lectionary/ordinary-17-2/commentary-on-psalm-14510-18-6); [TBS, "The Supposed Missing נ Verse in Psalm 145"](https://www.tbsbibles.org/page/psalm145); [Fihrist: Cambridge UL Or. 929](https://www.fihrist.org.uk/catalog/manuscript_15247); [Source Library, Quadrilingual Psalter, p. 365](https://sourcelibrary.org/book/69a5e65ce751f06e74b89aa5?page=365); [Septuagint Psalm 142 (Greek)](https://sacred-texts.com/bib/sep/psa142.htm), [Psalm 140](https://sacred-texts.com/bib/sep/psa140.htm), [Psalm 138](https://sacred-texts.com/bib/sep/psa138.htm).

## Fixes applied
- **1 (145:13).** The first-person claims are gone from the note, the chapter page and the variant. Or. 929 is now described as a fourteenth-century psalter in Hebrew, Greek, Syriac and Arabic, copied by one scribe. Its Hebrew column is said to be dependent on the Greek and Syriac columns, not an independent witness, and its damaged first letters are noted. The medieval Hebrew support is now one manuscript, Kennicott 142, as reported in BHS; the Syriac is also given as reported in BHS. The `why` now covers the scroll's expansionist habits in this psalm (the refrain, "A prayer" at 145:0, "fear" at 145:20, the additions at 146:9 and 149:9). It also covers the 145:17b repetition and the three different wordings of the line. The copyist's eye-skip claim is dropped. The Plain English Translation's choice is kept.
- **2 (143:10).** The "from memory" parenthesis is deleted. The note now gives Vaticanus "holy" and "in the level (way)", the other copies in Swete's apparatus "good" and "in a level land", and the Gallican *spiritus tuus bonus*. The Targum was checked: it reads *ruach qudshakh tava*, "your holy spirit, the good one", and the note says so. The chapter's X view and the settings card now name Vaticanus.
- **3 (145:11).** The note now says the kaf-lamed-mem = *melekh* pattern is a well-known observation in commentary on this psalm. Only the inference about the missing nun line is labeled as Claude's guess. No commentator is cited by name, because I could not check which one (Berlin or Kimelman) makes the point.
- **4.** New variant entries are 138:1, 141:7, 143:9, 147:8 and 145:12, plus title variants at 139:0 (Alexandrinus), 143:0, 144:0 and 146:1 (Haggai and Zechariah, also covering 147:1, 147:12 and 148:1). That brings variants.json to 22 entries. The 141:7 note is now a pointer of kind `com`, and the notes at 143:9, 145:12 and 147:9 point to the new entries. The 141:7 entry gives "their bones" from Swete's apparatus: a corrector of B, the correctors of Sinaiticus and Alexandrinus, and the Verona and Zurich Psalters.
- **5.** Vaticanus-only readings are now named by codex, using Swete's apparatus: 139:16 (the pronouns swapped, and "misread" removed), 141:6 (other copies have "judges"), 138:8 (Alexandrinus has the third person), 143:0, 144:0 (Alexandrinus lacks "against Goliath"), 145:12 and 147:8. The variant witness label now says the other codices in Swete's apparatus were checked. The chapter page for 138 adds a section listing the witnesses checked directly, as the lead decision asks.
- **6 (144:2).** The quotation is now the site's 18:47 wording, "who brings nations down beneath me", and 2 Samuel 22:48 is given too. The Syriac is added as reported in BHS, and the `why` now states the "my people" view. Not done: adding 11Q6 as a witness. In the transcription the letters ים of עמים are in editorial brackets, so the plural ending is a restoration and cannot be cited.
- **7.** "In a different order" is deleted from the 138:2 variant. The 138:1 note and a new 138:1 variant report the scroll's added YHWH and the YHWH written above the line. The Targum's "before you, LORD" is also given.
- **8 (150:6).** Not cited as support for MT. In MasPs-b the noun נשמה is in editorial brackets, so the singular is restored. The `why` now says that the Masada scroll is broken at this word.
- **9.** The 139:11 note now says "the Greek, the Gallican Latin and 11QPs-a", and it adds the Greek "and night is light in my delight".
- **10.** 68:20 and Habakkuk 3:19 are added to the 140:7 note, with the site's 68:20 rendering "the LORD, the Lord".
- **11.** The quotation marks are dropped at 142:5. At 139:11 the note now says *shuph* is the verb the site renders "strike" at Genesis 3:15.
- **12.** 143:3 and the 143 C view now say "the same words, two of them reversed".
- **13.** The "as reported" is dropped from Berakhot 61a on the 139 page. The Chrysostom sentence on 141 and the thirteen-praises claim on 150 are removed, not cited: I had no source in hand to check either. 145:9 now cites Bavli Bava Metzia 85a (Rabbi and the weasels).
- **14.** The 148 X view now says "very much in the order of this psalm".
- **15.** A section, "The daily Hallel: Psalms 145–150", is added to the `hallel` topic.
- **16.** The 144:14 gloss now gives both readings. The 138 summary now matches the Plain English Translation ("must not let the works of his hands fall"); the Plain English Translation of 138:8 is unchanged.
- **17.** The Plain English Translation now has 140:2 "they stir up wars", 142:7 "the prison", 147:13 "within you" and 150:5 "cymbals of the loud shout". The anchors and the music topic are updated to match.
- **18.** The 138:2 note now says "The Greek has the same line".
- **19.** The 144:4 note is rewritten as Rashi's comment (Solomon in Ecclesiastes 6:12; his father David's "passing shadow", the shadow of a bird in flight). I checked this against Rashi; the bird image is not in the Midrash Tehillim text I have.
- **20.** "Second Isaiah" is explained as Isaiah 40–55. "Eschatological" is replaced with "a hymn about the end of the age". "Doxology" is explained at its first use on the 146 and 150 pages and in the psalms topic.
- **21.** No new card was added. Instead, the 139 deep section on the curse now points to the curse-psalm cards on Psalms 109 and 137, and it says the Liturgy of the Hours leaves out 139:19–22 while exclusive-psalmody churches sing them.
- **22.** The 145:14 note now gives *zoqef kefufim* from 146:8, with 145:14's wording for comparison, and explains "the West" as the land of Israel.
- **Coordinator item (from the 120–137 review).** 146:6 now reads "maker of heaven and earth", as at 115:15, 121:2, 124:8 and 134:3. The note anchor is updated, and the note says the phrase is the same.
- **Lead decisions.** Letter names follow the list, Selah ends its line (140:3, 140:5, 140:8, 143:6), kinnor is "lyre" and nevel "harp", and the 41:13 doxology is quoted in the site's wording. No reader-facing text says "from memory", "not rechecked" or "I have seen". The witnesses checked are listed on the 138 page.
- `node tools/build.js --check Psa/138-150`: 0 errors, 0 warnings.
