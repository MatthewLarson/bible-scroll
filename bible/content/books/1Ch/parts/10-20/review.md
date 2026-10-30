# Hostile review: 1 Chronicles 10–20 (part 10-20), book.json, topics synoptic and temple-singers, new Chronicles sources

Reviewer's scope: the part folder `parts/10-20/` (plain, notes, variants, glosses, chapters, topics), the whole of `book.json`, the core files `content/topics/synoptic.json` and `content/topics/temple-singers.json`, and the 19 new Chronicles keys in `content/sources.json`. All 275 verses were compared with `node tools/literal.js 1Ch <ch>` and the Leningrad Hebrew. Every parallel verse was set beside the Hebrew of 1 Samuel 31, 2 Samuel 5–8, 10–12, 21, 23 and the site's own Plain English Translation, notes and variants for those chapters. `node tools/build.js --check 1Ch/10-20` reports 0 errors and 0 warnings.

## Verdict

This is a strong part. The translation is close to the Hebrew and mostly free of NIV/ESV wording. The synoptic notes are unusually good: they name the real Samuel differences, use 4QSam-a and the Greek correctly, and give the views on Bathsheba, Uzzah, Saul's death, Goliath and the Davidic covenant fairly. The facts I checked held up, including the brief's "unsure" items. The Targum of Chronicles on 12:32, Rashi on Genesis 49:15, Avodah Zarah 44a, Sotah 35a, Bava Kamma 60b, the Syriac at 11:20, Reich and Shukron, and the 4QSam-a readings at 2 Samuel 5:4–5, 6:2, 6:13 and 8:4 are all reported correctly. The weaknesses fall in four places. (1) The parallel rule is broken in a handful of verses, even though the commentary for chapter 10 claims it is kept everywhere. (2) The variant policy is inconsistent. The Plain English Translation silently follows an emendation at 12:33. The choices at 11:11 and 11:20 give David's Thirty two heads. Several witness differences the KJV reader will meet have no entry. (3) The name policy is broken for Abshai, Ithai and Jedithun. (4) About fifteen prose references name another book and are followed by a bare c:v, so the bare reference links to 1 Chronicles by mistake. book.json also claims the site's Psalms are matched, but the site has no Psalms yet. There are no critical errors. Fix the major items before publishing.

## Findings

### 1. Major: prose references that will link to the wrong book (notes, topics, chapters, variants)
**Problem.** STYLE says a bare "c:v" always means the current book. In the passages below, another book is named first and the next reference is bare. The bare one was meant for that other book, but the site will link it to 1 Chronicles. Several of those 1 Chronicles verses do not exist (1 Chronicles 18:28, 72:19, 96:10, 20:14 in chapter 20's 8 verses...). The build does not catch prose references.

**Where.**
- notes 10:14 ("But Saul did ask the LORD"): "(2 Chronicles 7:14; 15:12)"
- notes 11:4: "(Joshua 15:8; 18:28; ...)"
- notes 12:18 ("The Spirit puts on a man"): "(2 Chronicles 15:1; 20:14)"
- notes 14:17: "(2 Chronicles 17:10; 20:29)"
- notes 15:4: "(Numbers 3:5–10; 18:1–7)"
- notes 16:22: "(Genesis 12:17; 20:3–7)"
- notes 16:31: "(Psalm 93:1; 96:10; 97:1; 99:1)"
- notes 16:36: "(Psalm 41:13; 72:19; 89:52; 106:48)"
- notes 20:4 (Rephaim): "Deuteronomy 2:11, 20; 3:11"
- topics.json: giants, "(Deuteronomy 2:10–11, 20–21; 3:11)"; ark, "(15:13; Numbers 4:15; 7:9)"; worship, "(2 Chronicles 5:13; 7:3)"; philistines, "(Deuteronomy 7:5, 7:25)"
- chapters.json, chapter 10 view H: "(1 Samuel 13:13–14; 15:23; 28:6)"
- variants 18:16, reading 0 `w`: "2 Samuel 8:17; 24:6". Here 24:6 is meant as 1 Chronicles 24:6. As written, it reads as 2 Samuel 24:6, a verse about Gilead.

**Fix.** Repeat the book name each time ("Psalm 96:10; Psalm 97:1"). In the 18:16 witness line, write "1 Chronicles 24:6". Consider making the build validate references inside `b` text.

### 2. Major: the choices at 11:11 and 11:20 give the Thirty two heads (variants.json 11:11, 11:20, 11:21)
**Problem.** At 11:11 the Plain English Translation keeps the Ketiv: Jashobeam is "chief of the Thirty." At 11:20 it emends the MT's "the Three" to "the Thirty": Abishai is "head of the Thirty." Two verses apart, the reader now meets two different heads of the same company.

**Evidence.** The reason given at 11:11, that "Jashobeam was a famous member of that company," is unsupported. In Chronicles' own logic Jashobeam heads the list of the Three: 11:12 makes Eleazar "one of the Three warriors," and 11:19 closes "the deeds the three warriors did." The site's 2 Samuel 23:8 makes him "chief of the Three." 11:11 and 11:20 depend on each other, but neither entry mentions the other.

**Fix.** Choose one of these and explain it in both entries:
- (a) Follow the Qere "the officers" or the Samuel/NRSV reading "the Three" at 11:11.
- (b) Keep the Ketiv at 11:11, admit the clash with 11:20 in the `why`, and say how the two can be reconciled.

**Smaller problems in the same entries.**
- 11:11, third reading: the `orig` הַשְּׁלֹשָׁה is a reconstruction. No Hebrew witness of Samuel has it (MT Samuel has השלשי). Label it "conjectural Hebrew" or give the Greek.
- 11:20, followed reading: `orig` is empty. Give the Syriac, or the Hebrew it implies (הַשְּׁלוֹשִׁים).
- 11:21: name a witness for "Thirty", not just "correction." The listing of the ESV under "Of the Three" is wrong. The ESV reads "most renowned of the thirty" here (checked on biblehub's parallel page). The NIV and NASB do keep "three."

### 3. Major: 12:33 silently follows an emendation (plain.txt 12:33; variants.json)
**Problem.** The Plain English Translation reads "ready to help with no divided heart," which renders "to help" (לַעֲזֹר, the LXX's *boēthēsai*). The Leningrad text has וְלַעֲדֹר, "and to keep rank." The KJV has "which could keep rank." This is a departure from the MT. It is not among the departures the writer declares, and nothing tells the reader. 12:38 has the same root (עֹדְרֵי מַעֲרָכָה), and there the Plain English Translation correctly gives "take their places in the battle line." So the two verses are now treated differently.

**Fix.** Either translate the MT ("ready to keep rank, with no divided heart"), or add a variant entry: MT "keep rank" (KJV) against the LXX "to help" (most modern versions), with the reason for the choice.

### 4. Major: variant entries missing where the witnesses differ, or where the writer's own precedent calls for one
**Problem.** At 13:9 and 19:17 the writer gives a switchable variant whose second reading is the Samuel parallel. That makes it inconsistent to give only a note, or nothing, for the cases below.

- **11:11, three hundred or eight hundred.** Note 21 discusses this well, but there is no switchable entry. The number differs from 2 Samuel 23:8, and modern Bibles footnote it.
- **18:3 (and 18:5, 7, 9, 10; 19:16, 19): Hadadezer or Hadarezer.** The KJV reads "Hadarezer" throughout 1 Chronicles 18–19, following Hebrew manuscripts and printed editions with ר for ד. STYLE requires an entry wherever the KJV reads differently from modern versions. The site's 2 Samuel has no entry for this either. One entry at 18:3, referred to from 19:16, is enough.
- **18:12: Abishai, David (2 Samuel 8:13) or Joab (Psalm 60 title).** Note 137 handles the history. The Samuel MT also differs on Aram or Edom. Following the 19:17 precedent, give a variant, or at least say in the note why this one is not a variant.
- **19:18: seven thousand or seven hundred chariots; foot soldiers or horsemen.** This is a classic number variant, and the KJV and modern Bibles show it in their margins. Note 145 is good, but STYLE prefers variants.json for manuscript differences.

**Fix.** Add the four entries, or state once in a note the rule for when a Samuel difference becomes a variant, and apply it evenly.

### 5. Major: the parallel rule is broken, and chapter 10 claims it is kept everywhere
**Problem.** chapters.json, chapter 10, deep section "Two accounts of one death," says the Plain English Translation "uses the same English as 1 Samuel 31 wherever the Hebrew is the same." The verses below break that rule. Some use different English for identical Hebrew. Others copy the site's Samuel wording where the Chronicles Hebrew is different, which hides a real difference.

| Verse | Chronicles Hebrew and Plain English Translation | Samuel parallel | Problem |
|---|---|---|---|
| 10:9 | לְבַשֵּׂר אֶת־עֲצַבֵּיהֶם וְאֶת־הָעָם, Plain English Translation "to spread the good news among their idols and among the people" | 1 Samuel 31:9 Plain English Translation "to bring the good news to ... and to the people" (Samuel adds בֵּית) | The structure is the same, so the English should be "to bring the good news to their idols and to the people." The Chronicles difference (no "house of," so the idols themselves hear the news) then shows. |
| 10:12 | וַיִּשְׂאוּ, "they carried off," with the rare word גּוּפַת, "body" | 1 Samuel 31:12 וַיִּקְחוּ, "took" | The Plain English Translation copies Samuel's "took." Use "They carried off Saul's body..." |
| 11:13 | "A field there was full of barley," מְלֵאָה שְׂעוֹרִים | 2 Samuel 23:11 Plain English Translation "planted thick with lentils" for the same מְלֵאָה | The two verses should share one rendering of מְלֵאָה, in both places. |
| 11:19 | הֲדַם הָאֲנָשִׁים הָאֵלֶּה אֶשְׁתֶּה בְנַפְשׁוֹתָם כִּי בְנַפְשׁוֹתָם הֱבִיאוּם | Samuel has הַהֹלְכִים, "who went" | The Plain English Translation says "when they went with their lives at stake." That carries Samuel's "went" into a verse that lacks it. Chronicles says "Shall I drink these men's blood, at the cost of their lives? At the cost of their lives they brought it." |
| 17:9 | וְשָׁכַן תַּחְתָּיו, Plain English Translation "live in their own place" | 2 Samuel 7:10, same Hebrew, Plain English Translation "live in it" | Needless difference. |
| 11:3 | וַיִּמְשְׁחוּ אֶת־דָּוִיד, Plain English Translation "anointed David" | 2 Samuel 5:3, same Hebrew, Plain English Translation "anointed him" | Needless difference. Either book may change, but the two must agree. |
| 19:9 | פֶּתַח הָעִיר, "entrance of the city" | 2 Samuel 10:8 פֶּתַח הַשַּׁעַר, "entrance of the gate" | Both are rendered "at the city gate," which hides the difference. Use "at the city entrance." |
| 16:3 | כִּכַּר־לֶחֶם | 2 Samuel 6:19 חַלַּת לֶחֶם | Both are rendered "round loaf," which hides the difference. Trivial, but the rule is the rule. |
| 15:25 | בְּשִׂמְחָה | 2 Samuel 6:12, the same | Both Plains say "with great joy," but there is no "great" in either Hebrew. Fix in both books. |

**Psalms.** The Psalm portion of chapter 16 cannot be checked against the site, because Psalms is not yet translated (there is no `content/books/Psa/`). See finding 7.

**Fix.** Revise the listed verses. Until they are revised, soften the claim in the chapter 10 deep section.

### 6. Major: the name policy is broken (plain.txt)
**Problem.** The Plain English Translation silently normalizes names that Chronicles spells in its own way.
- **Abshai.** Chronicles spells the name אַבְשַׁי every time (11:20; 18:12; 19:11, 15). The Plain English Translation gives "Abishai," Samuel's אֲבִישַׁי. If the site keeps the familiar form, it needs a note at 11:20 saying Chronicles writes it Abshai. The brief's policy ("each name in the Hebrew form of that verse, no silent normalizing") points to "Abshai," with the note.
- **Ithai.** 11:31 has אִיתַי, Ithai (KJV "Ithai"). The Plain English Translation copies Samuel's "Ittai" (אִתַּי).
- **Jedithun.** 16:38 has בֶּן־יְדִיתוּן, Jedithun. The Plain English Translation gives "Jeduthun." A note should say whether this is a spelling variant or a different man (it is often linked to Obed-edom's family).

**Good practice to keep.** These are handled well: Shammoth, Harorite, Heled, Hurai, Baharumite, Berothite (11:39), Shophach, Shimea, Sippai, Tou, Hadoram, Shavsha, Beeliada and Kidon/Chidon.

### 7. Major: book.json claims Psalms parallels that do not exist yet (book.json, section "About the translations")
**Problem.** The section says "The psalm in 16:8–36 follows the site's Psalms 105, 96 and 106 in the same way." The site has no Psalms translation, so nothing was matched. When Psalms is written, either its writer or this one will have to reconcile the two.

**Smaller claim in the same section.** "About half of 1 Chronicles has a twin in Genesis, Samuel or Psalms" overstates. A count of the parallel verses (chapter 1; 3; 9:1–34; 10–11; 13–14; 15:25–16:3; 16:8–36; 17–21) comes to roughly a third of the 942 verses. The topic core's "about half of 1 and 2 Chronicles" is defensible for the two books together.

**Fix.** Say the psalm will be aligned with the site's Psalms when they exist, and add a to-do to PROGRESS.md. Change "About half" to "About a third."

### 8. Major: the theory box on *parats* in chapter 13 is not kept apart from the notes, and its originality claim is doubtful (chapters.json chapter 13; notes 13:2)
**Problem.** The `spec` box "one word holds chapters 13–15 together" presents the *p-r-ts* thread (13:2; 13:11; 14:11; 15:13) as "my own proposal." Two things are wrong with that.
- The same idea already stands as fact in an ordinary `word` note at 13:2 ("A breakout of words"). That breaks STYLE rule 4, which keeps Claude's ideas to `spec` notes and boxes, and it repeats the point.
- The play on פרץ across these verses is a standard observation in commentaries on Chronicles; Japhet, Klein, Selman and Allen are the places to check. I could not confirm a page on the web, but the box itself admits the site's 2 Samuel already reads the root this way. Calling it Claude's own overstates it.

**Fix.** Keep the 13:2 note as a word note on the verb alone. In the box, credit the commentators for the thread and claim only what is new, if anything is (for example, the reversal from Israel's eager "breaking out" to God's).

### 9. Minor: false claim about word order (notes 13:9, "The oxen stumbled")
**Problem.** The note says "Chronicles changes Samuel's word order so that Uzzah's reaching out comes first and the reason after." In Hebrew, both 2 Samuel 6:6 and 13:9 put Uzzah's reaching first and כִּי שָׁמְטוּ הַבָּקָר after. Only the site's English of 2 Samuel 6:6 moves "the oxen stumbled" to the front.

**Fix.** Delete the sentence. Better: realign the 2 Samuel Plain English Translation with the Hebrew order.

### 10. Minor: trumpets (notes 15:24)
- "Both appear on the Arch of Titus" includes the shofar. The relief shows the menorah, the table and the silver trumpets, not a ram's horn. Change "Both appear" to "The trumpets appear."
- "In Chronicles only priests blow them" is too strong. 13:8 has "all Israel" playing trumpets, and 2 Chronicles 23:13 has the people of the land "blowing trumpets." Use "usually priests."

### 11. Minor: Solomon's wives (notes 17:13, "No rod for the son")
"There are no foreign wives" in Chronicles' Solomon is wrong: 2 Chronicles 8:11 mentions Pharaoh's daughter. Say "no foreign wives leading him to idols."

### 12. Minor: Menahem's payment (notes 19:6, talents)
The note says the price was "more than the yearly tribute Assyrian kings later demanded," then cites Menahem paying exactly a thousand talents (2 Kings 15:19). Say "as much as."

### 13. Minor: "word for word" (notes 20:8)
"20:4 follows 2 Samuel 21:18 word for word" is not true. Gob becomes Gezer, וַתְּהִי־עוֹד becomes וַתַּעֲמֹד, Saph becomes Sippai, and Chronicles adds "and they were brought low." The part's own note on 20:4 says so. Use "closely."

### 14. Minor: the Talmud's lesson about Obed-edom (notes 13:14)
Berakhot 63b–64a draws the lesson for someone who hosts a Torah scholar in his home, not for "those who honor the Torah." Restate it precisely.

### 15. Minor: witnesses at 18:16 (variants.json 18:16)
- Add the Septuagint (Αχιμελεχ) to the "Ahimelech" witnesses.
- Fix the reference "2 Samuel 8:17; 24:6" (see finding 1).

### 16. Minor: "the Spirit" in 12:18 (plain.txt; notes 12:18; topics holy-spirit)
The Hebrew is bare וְרוּחַ, "and a spirit" or "the spirit," without "of God" or "of the LORD," unlike Judges 6:34. Capital-S "the Spirit" is an interpretation. That is fine, but the note should say so and mention the Targum's expansion. The topic's "the Spirit's first word in Chronicles" depends on that reading too.

### 17. Minor: terms.json compliance
- **torah, 16:40** ("the LORD's law"). This looks like the first *torah* in 1 Chronicles. The terms entry asks for a note at first use on the sense "instruction, teaching."
- **meshiach, 16:22.** The note does not mention the later sense "messiah," which the terms entry asks for at first use in each book. Check that part 01-09 has no earlier use.
- **nachalah, 16:18.** "your measured share to inherit" drops the noun "inheritance" (חֶבֶל נַחֲלַתְכֶם). Use "the share of your inheritance."
- **minchah, 16:29.** "an offering" is a fair choice for tribute, but terms.json gives *minchah* as "grain offering" and *korban* as "offering." Use "a gift," or add a one-line note.

### 18. Minor: softened wording close to the ESV (plain.txt 12:17)
"though my hands have done no wrong" flattens חָמָס, "violence," and is close to the ESV's "no wrong in my hands." Use "though there is no violence in my hands."

No other NIV/ESV drift of note was found. 12:32 "what Israel ought to do" is shared with the KJV (public domain) and is the natural rendering.

### 19. Minor: "fingers and toes" (plain.txt 20:6)
Chronicles has only וְאֶצְבְּעֹתָיו, "his digits." Samuel spells out hands and feet. "His fingers and toes" fills Chronicles in from Samuel. "He had six digits on each hand and foot" would mark the point less, so render "His digits came six and six, twenty-four," with the gloss as it is.

### 20. Minor: glosses
- **10:9** "celebrate the victory in their temples" puts back the "house of" that Chronicles drops. See finding 5.
- **12:14** "a match for a hundred men" takes one side of a reading the 12:14 note says is debated. Use "worth a hundred (or in command of a hundred)."
- **18:15** "the royal historian" for מַזְכִּיר is doubtful. The office was probably herald or secretary of state. Use "the royal herald."
- **11:6** "general in chief" is awkward. Use "commander in chief."

### 21. Minor: chapters.json
- **Chapter 16, view C.** "Critical scholars agree that the Chronicler composed the song from Psalms 105, 96 and 106" is too strong. Note 98 itself says a few think the borrowing went the other way. Use "Most."
- **Chapter 20, summary.** "puts the people to the saws and iron tools" follows Samuel's forced-labor reading. The Plain English Translation and the variant follow the Chronicles MT, "cut them with a saw." Make the summary match the Plain English Translation, or say it is debated.
- **Chapter 20, view J.** Shabbat 56a is the passage arguing that "whoever says David sinned is mistaken." Citing it as Jewish tradition facing the sin "openly" is misleading. Describe the debate: R. Shmuel bar Nachmani's defense against Rav's view.
- **Chapter 18, view J ("the rabbis cite these chapters...") and chapter 19, view J ("Jewish commentators drew... a lesson").** Both are vague and cite no source. The same goes for the medium-of-endor topic ("Jewish tradition took 10:13 as proof..."). Name a source (for example Leviticus Rabbah 26:7 on Saul and Endor, or Radak on 1 Chronicles 10:13) or cut them.

### 22. Minor: book.json, other points
- **Lens S** states as fact that "Satan, not the LORD, incites the census (21:1)." The Hebrew has שָׂטָן without the article, and Japhet and others read "an adversary." The lenses are fixed, but this is a factual point: add "or an adversary."
- **Lens X.** *Paraleipomena* was the title of the Jewish Greek translation before it was the church's. "shows the early church read it" should be "shows Greek-speaking readers, and later the church, read it."
- **"Reliable source or theological rewriting?"** The section lists `auld-kings-without-privilege` among the sources but never presents Auld's minority view, that both books draw on a shared older story. The synoptic topic does present it. Add one sentence.
- **Checked and correct:** Bava Batra 14b and 15a, Leviticus Rabbah 1:3, Zunz 1832, Japhet 1968, Williamson 1977, de Wette, Lemke, Jerome's *epitome*, the 942 verses, and the Leningrad and Aleppo order.

### 23. Minor: topics
- **The id `synoptic`.** It is generic and will collide with the Synoptic Gospels when Matthew–Luke are written. Rename it, for example to `chronicles-synoptic`, before other books start tagging it.
- **temple-singers.** The core's first section cites Nehemiah 7:44 in its text, but its refs list Nehemiah 12:46 and not 7:44. Add Nehemiah 7:44 to refs.
- **mighty-men.** "adds sixteen names, mostly from east of the Jordan" contradicts note 33 ("Several come from east of the Jordan"). Only a few are clearly Transjordanian. Use "several."
- **giants.** "Chronicles thus ends David's wars by finishing the conquest begun under Joshua" is an interpretation stated as fact. Say "One reading:".
- **ketiv-qere** (and the variants file). Chronicles follows the Qere silently for 11:44 (Jeiel, Ketiv Jeuel), 12:3 (Jeziel, Ketiv Jezuel) and 12:5 (Haruphite, Ketiv Hariphite). These need no variant entries, but the topic's account of the policy should mention them.

### 24. Minor: Absalom's revolt is not marked where it falls
**Problem.** Between 20:3 and 20:4, Chronicles skips 2 Samuel 13–20: Amnon and Tamar, Absalom's revolt and Sheba. book.json and the david topic mention this, but no note in the text does. A reader sees the Bathsheba gap at 20:1 and nothing at 20:4.

**Fix.** Add one line to the 20:4 note, pointing to the "What Chronicles leaves out" section.

### 25. Minor: sources
**Checked and correct.** The 19 new keys are all real works with correct authors, series and dates (Klein, Hermeneia 2006; Knoppers, AB 12 and 12A; Braun, WBC 14 1986; Myers, AB 1965; Selman, TOTC 1994; Curtis–Madsen, ICC 1910; Japhet, *Ideology* 1977/1989; Williamson 1977; Kalimi 2005; Auld 1994; Endres et al. 1998; Lemke, HTR 58, 1965; McIvor, Aramaic Bible 19, 1994; Noth 1943/1987; Allen, VTSup 25 and 27, 1974; Dirksen, HCOT 2005; pseudo-Rashi; Radak).

**One small point.** Knoppers' first volume has a 2004 publication date in many catalogs, though Wikipedia gives 2003. Either is defensible.

## Fairness check (as asked)

- **Bathsheba and Absalom.** The three views (idealizing, focused history, model king) appear in notes 11:41 and 20:1, in chapter 20, in book.json and in the topics. Each view is named with who holds it. This is fair and strong. The only gap is Absalom at 20:4 (finding 24).
- **Reliable source vs theological rewriting.** Balanced. Wellhausen and de Wette, the shift after the Dead Sea scrolls, and Japhet, Williamson and Knoppers are all present. Add Auld in book.json (finding 22).
- **Date and authorship.** The traditional view (Ezra, Bava Batra 15a) and the critical view (a Levite Chronicler, 400–300 BC, with Ezra–Nehemiah by a separate hand after Japhet and Williamson) are both given in their strongest form. Fair.
- **Uzzah.** Holiness, Chronicles' own reading, Jewish tradition (Sotah 35a) and the critical etiology are all given. Fair.
- **The Davidic covenant (chapter 17) beside 2 Samuel 7.** Excellent. The changes "my house and my kingdom," the missing rod, "one of your sons," and the wish that becomes a statement are all noted, with Jewish and Christian readings.
- **Theory boxes.** There are four: chapter 12, chapter 13, chapter 16 and book.json. All are labeled "Claude's theory" and give refs. The chapters 12 and 16 boxes and the book.json box name overlapping scholars properly. The chapter 13 box does not (finding 8).

## Fixes applied

1. **References.** Every reference after another book's name now carries a book name: about 95 reference lists and prose spots in notes, variants, chapter pages and topics. Examples: "Psalm 93:1; Psalm 96:10", "2 Samuel 7:16; 1 Chronicles 28:5", and "2 Samuel 8:17; 1 Chronicles 24:6" in the 18:16 witness line. I checked the whole part with my own scanner as well as the build.
2. **One head of the Thirty.** 11:11 now follows the read form "chief of the officers" (Masoretic Text read form; KJV, NIV). The written form "the Thirty" and the Samuel/NRSV/ESV "the Three" are shown beside it, and Samuel's Hebrew הַשָּׁלִשִׁי is labeled as Samuel's own word, usually corrected to "the Three." The 11:20 entry gives the Syriac's implied Hebrew and says that Abshai is now the only head of the Thirty. The 11:21 entry says no Hebrew manuscript has "Thirty," and the ESV is listed with "Thirty," not "Three." The 12:18 entry explains why the written form is kept there.
3. **12:33.** The Plain English Translation is back to the Hebrew "ready to keep rank." A new note gives the Greek "to help" and the one-letter difference.
4. **Missing variants.** I added four entries: 11:11 (three hundred against eight hundred), 18:3 (Hadadezer against Hadarezer, covering 18:3–10 and 19:16–19), 18:12 (Abshai, David or Joab, with the old note folded in), and 19:18 (seven thousand and foot soldiers against seven hundred and horsemen, with the old note folded in).
5. **Parallel rule.** I revised the listed verses: 10:9 "to bring the good news to their idols and to the people", 10:12 "carried off", 11:3 "anointed him", 11:13 "planted thick with barley", 11:19 now from Chronicles' own Hebrew, 17:9 "live in it", 19:9 "at the city entrance", 16:3 "a loaf of bread" (with a note on challah against kikkar), and 15:25 "with joy". I cannot edit 2 Samuel, so its owner should drop "great" from 2 Samuel 6:12 as well. The chapter 10 claim now says "aims to," with an example.
6. **Names.** The Plain English Translation now has Abshai at 11:20, 18:12, 19:11 and 19:15, with a note at 11:20. It also has Ithai at 11:31, with a note, and Jedithun at 16:38, with a note on who he may be. The silent read forms at 11:44, 12:3 and 12:5 are now described in the ketiv-qere topic.
7. **book.json.** It now says "About a third," and says the psalm will be aligned with the site's Psalms once they are written. A to-do is in PROGRESS.md.
8. **Chapter 13 box.** It now credits Japhet, Klein and Selman and the site's 2 Samuel page for the *parats* thread. It claims only the 13:2 link, and says that link is uncertain. The 13:2 note is now a plain word note on the verb.
9. 13:9: the false sentence about word order is deleted. Realigning the 2 Samuel 6:6 English is left to the 2 Samuel owner.
10. 15:24: "The trumpets appear," and "priests usually blow them" (with 13:8).
11. 17:13: "no foreign wives lead him to idols," and Pharaoh's daughter (2 Chronicles 8:11) is mentioned.
12. 19:6: "as much as Menahem ... paid."
13. 20:8: "closely."
14. 13:14: Berakhot is now stated precisely (welcoming a Torah scholar into one's home).
15. 18:16: the Septuagint is added, and the reference is fixed.
16. 12:18: the note and the holy-spirit topic now say the Hebrew is a bare *ruach* and mention the Targum's expansion.
17. Terms: a torah note at 16:40, a meshiach/Messiah sentence at 16:22, 16:18 "the share of your inheritance", and 16:29 "Carry a gift".
18. 12:17: "though no violence is in my hands."
19. 20:6: "His digits came six and six."
20. Glosses: 10:9 updated; 12:14 "worth a hundred (or in command of a hundred)"; 18:15 "royal herald"; 11:6 "commander in chief."
21. Chapter pages:
    - Chapter 16 C now says "Most."
    - The chapter 20 summary now follows the Plain English Translation and points to the variant.
    - Chapter 20 J now describes the Shabbat 56a debate.
    - The unsourced J views in chapters 18 and 19 are removed.
    - The medium-of-endor topic now cites Leviticus Rabbah 26:7 instead of the vague claim.
22. book.json:
    - Auld's minority view is added to the reliability section.
    - **Rejected:** the lens S and lens X wording. The user fixed the lenses before the parts began. "Satan or an adversary" belongs to the 21:1 note in part 21-29.
23. Topics:
    - `synoptic` is renamed `chronicles-and-kings`, and every reference is updated. Only part 10-20 and book.json used the id.
    - Nehemiah 7:44 is added to the temple-singers refs.
    - mighty-men now says "several."
    - giants now says "One reading:".
    - ketiv-qere now covers the silent read forms.
24. 20:4: a new note marks the skipped 2 Samuel 13–20 and points to "What Chronicles leaves out."
25. Sources: no change needed.

**Drift audit.** I re-audited the 21 rewritten verses; the log is in scratch and holds only the verse, the outcome and the reason. 12:17 was reworded once more.

**Checks.** `--check 1Ch/10-20` and `--check 1Ch` both show 0 errors and 0 warnings.
