# Hostile review: Romans 9-11 (part 09-11)

Reviewer: hostile-reviewer. `VERBOSE=1 node tools/build.js --check Rom/09-11` reports 0 errors, 0 warnings (90 verses, 98 notes, 15 variants, 34 glosses, 3 chapter pages, 6 topic contributions). I checked the Plain English Translation verse by verse against SBL (`texts/orig/Rom.json`), read every note, card and variant, compared the Byzantine text with SBL for all 90 verses, and compared every quoted Old Testament verse with the site's own Plain English Translation.

## Verdict

The translation is careful and mostly faithful. The notes are rich and the cards are mostly well sourced. The part has no invented sources that I could find. The problems are these.

- One serious factual error: the ELCA 1994 declaration is cited three times as affirming that God's covenant with the Jews stands. The declaration never mentions covenant.
- One wrong claim about the Septuagint at Isaiah 52:7.
- One wrong edition attribution in a variant entry (10:5).
- The variants file names no manuscript at all, which the NT brief requires.
- Several consensus claims that look inverted or too strong (11:28 "enemies"; 9:6 and Wright).
- A supersessionist position that is never stated in its own strongest form.
- A few term and wording slips: 11:11-12 "false step", 9:14 "unjust", and the 11:31 rendering.

The OT quotations in the notes match the site's Plain English Translation exactly, apart from line breaks and quote marks. The quote checker found no real mismatches. Citations I could confirm: Mishnah Sanhedrin 10:1; Targums on Deut 30:12-13 (Moses and Jonah); Resh Lakish in Exodus Rabbah 13:3, whose "three times" is what the sources give; Columella 5.9.16 (the Forster/Loeb reference) and Baxter-Ziesler; Marcus Aurelius 4.23; Barnabas 13; Justin; Soulen's three forms; Hvalvik; the CCC numbers; the 2015 Vatican document and its section on mission; Nostra Aetate 4 on Rom 11:17-24 and 11:28-29.

Counts: 0 critical, 7 major (findings 1-7), 20 minor (findings 8-27).

## Findings

### 1. MAJOR. ELCA 1994 declaration is said to affirm covenant, and it does not

- **Where:**
  - chapters.json, chapter 9, traditions "Who is Israel now?", Lutheran: "affirmed that Jews remain in covenant with God".
  - chapters.json, chapter 11, traditions "Will all Israel be saved?", Lutheran: "affirms that God's covenant with Israel is not ended".
  - notes.json, 11:29 note, and topics.json `church-israel`, section 3: the ELCA declaration is listed among "Christian statements since 1965 that God's covenant with the Jewish people has not ended".
- **Evidence:** I fetched the declaration (Jewish Virtual Library reprint of the 1994 text). It repudiates Luther's anti-Jewish writings and opposes anti-Semitism. It does not mention covenant and says nothing about whether Jews remain in covenant. The "covenant" language comes from the later "Guidelines for Lutheran-Jewish Relations" (1998) and from speeches about the declaration, not from the 1994 text.
- **Fix:** Say only what the declaration says: it rejects Luther's anti-Jewish writings and anti-Semitism, and it commits the ELCA to respect and dialogue. If a covenant statement is wanted, cite the 1998 Guidelines (source key to add) and say so. Remove ELCA from the "covenant has not ended" list in the 11:29 note and in the topic.

### 2. MAJOR. Note 10:15 says the Septuagint of Isaiah 52:7 has many heralds

- **Where:** notes.json, 10:15 ("The Hebrew has one herald; Paul, following the Greek, has many" and "as the Greek text does").
- **Evidence:** LXX Isa 52:7 reads "ὡς πόδες εὐαγγελιζομένου ἀκοὴν εἰρήνης, ὡς εὐαγγελιζόμενος ἀγαθά". It is singular, like the Hebrew. The plural "τῶν εὐαγγελιζομένων" is Paul's own adaptation. The Byzantine text then adds "εἰρήνην" and a second participle, which is the entry at 10:15. The variant entry's statement that the longer text comes "from the Septuagint" is also loose, because the LXX is singular.
- **Fix:** "Both the Hebrew and the Septuagint have one herald. Paul makes it plural for the apostles." Correct the variant `why` to say the Byzantine addition imitates the words "peace" and "good things" of Isaiah, not its number.

### 3. MAJOR. Variant 10:5 gives the wrong edition for each reading, and the Plain English Translation follows the minority text

- **Where:** variants.json, 10:5; notes.json, 10:5.
- **Evidence:** The word list `w` in `texts/orig/Rom.json` marks αὐτὰ (ὁ ποιήσας αὐτὰ) as present in N, n, Y, G, T, B. That means NA28, NA27, Tyndale House, Tregelles, the TR and the Byzantine text all have the "does them / live by them" form. SBL and Westcott-Hort are the editions without it. The entry lists "SBLGNT, Tyndale House GNT, Westcott-Hort, Tregelles" as reading 0, which is wrong for Tyndale House and Tregelles. The Plain English Translation thus follows only SBL and WH against NA28, THGNT, the TR and the Byzantine text. The stated reason ("fits Leviticus 18:5 as Paul reads it") is weak. The better argument is that reading 1 conforms to the LXX of Lev 18:5, so reading 0 is the harder text. The entry also admits "I could not check the manuscript apparatus".
- **Fix:** Correct the edition lists. Name the witnesses (Metzger, NA28 apparatus, or the Tischendorf volume in the Source Library MCP). Give the harmonization-to-LXX reason. Say plainly that NA28 and THGNT read otherwise and why the Plain English Translation departs from them, or follow them.

### 4. MAJOR. No variant entry names a single manuscript or version

- **Where:** variants.json, all 15 entries.
- **Evidence:** brief-nt.md: "Name real witnesses with dates: papyri (P45, P46...), Sinaiticus, Vaticanus, Alexandrinus, ... the Old Latin, the Syriac, the Coptic, church fathers... attribute 'reported by Metzger'". Every `w` field lists only editions (SBLGNT, NA28, Byzantine, TR). A reader cannot see, for example, that P46, Sinaiticus and Vaticanus stand behind a reading. Two entries (10:5, 10:9) say the writer did not check witnesses. The brief's own list for this part also asks for 9:11, 9:28, 9:32 and 10:15 to be treated.
- **Fix:** Add witnesses with dates from Metzger/NA28, or from Tischendorf 8 via the Source Library, for at least 9:5 (early punctuation marks in B and C, and the fathers on each side, as Metzger reports them), 9:11, 9:32, 9:33, 10:5, 10:9, 10:17, 11:6, 11:13, 11:21, 11:31. Do not guess. If a witness cannot be confirmed, leave it out and say "not checked".

### 5. MAJOR. Note 11:28 reverses the likely consensus on "enemies"

- **Where:** notes.json, 11:28 ("Most commentators read it as active here too").
- **Evidence:** ἐχθροί is set against ἀγαπητοί, which is passive. Cranfield, Moo, Dunn and Fitzmyer, as I recall them, take "enemies" mainly in the passive sense, as objects of God's hostility "for your sake". An active sense (hostile to the gospel) is the minority reading, though it has defenders. My searches turned up only lexicons and Robertson, so check the four commentaries before the fix goes in.
- **Fix:** Replace "most commentators" with a checked statement, or drop the headcount and give both readings with named advocates. Say that the "beloved" in the same verse pushes toward the passive sense.

### 6. MAJOR. Supersessionism is never stated in its own strongest form (fairness)

- **Where:** notes.json, 11:18 reading (2) ("the replacement view; its critics say..."); chapters.json, chapter 11 `deep` "Supersessionism: a short and honest history"; the topic `church-israel` `common` line ("Almost all scholars now agree..."); chapter 11 `readings`.
- **Evidence:**
  - The view appears as a label from its critics, plus a history of abuse, with one clause allowing "fulfillment rather than replacement".
  - The CLAUDE.md rule is that every view is given in its strongest form. The brief says "treated honestly".
  - The strongest case is the Reformed one-covenant reading (Gal 6:16, Phil 3:3, Eph 2:11-22, 1 Pet 2:9-10, Heb 8). It is also the patristic and Thomist one, the Orthodox "new Israel" view, and the Catholic "People of God" view of Lumen Gentium 9. None of these deny that Israel has a place. They say the promises are fulfilled in Christ and open to all.
  - The history paragraph also puts Augustine's protective stance, Calvin and covenant theology into one story with Melito and Chrysostom.
- **Fix:**
  - Give the fulfillment/one-people reading a fair paragraph in its proponents' words, with sources.
  - Separate "replacement" (punitive, in Soulen's sense) from "fulfillment and expansion".
  - Restate "Almost everyone now agrees" as "Most NT scholars hold that Romans 11 does not teach punitive replacement". Name who dissents.
  - The `common` line in `church-israel` needs the same softening.

### 7. MAJOR. Note 9:4 builds an argument on a verb that is not in the Greek

- **Where:** notes.json, 9:4 (`israel`): "Notice the verb: 'Theirs is the adoption,' not 'was.'"
- **Evidence:** The relative clause "ὧν ἡ υἱοθεσία καὶ ἡ δόξα..." has no verb. Only the preceding clause has one: "οἵτινές εἰσιν Ἰσραηλῖται" ("who are Israelites"). The Plain English Translation supplies "is", which is reasonable, but the note presents the verb as Paul's choice of tense and uses it as evidence on the most contested question of the three chapters (do the gifts still belong to Israel?).
- **Fix:** Say that Paul writes "who are Israelites" in the present and leaves the rest unverbed. Many commentators read the gifts as present (Moo, Dunn, Cranfield). Some read them as past. Do not say "notice the verb".

### 8. MINOR. Note 9:4 ("the covenants") says Paul quotes Jeremiah 31 in 11:27

- **Where:** notes.json, 9:4 `echo` "the covenants": "the new covenant promised in Jeremiah 31:31-34, which Paul quotes in 11:27".
- **Evidence:** Paul quotes Isaiah 59:20-21 and 27:9 in 11:26-27. The note at 11:27 itself says Jeremiah 31 is an echo. Chapter 11 `views.C` says "perhaps Jeremiah".
- **Fix:** "which Paul may echo in 11:27".

### 9. MINOR. Note 9:7 calls Esau a son of Abraham

- **Where:** notes.json, 9:7: "Ishmael was also Abraham's son by flesh, and so were Esau and Keturah's sons".
- **Evidence:** Esau is Isaac's son and Abraham's grandson.
- **Fix:** "so were Keturah's sons; and Esau, as Isaac's son, is also Abraham's offspring".

### 10. MINOR. Note 9:6 puts Wright in the wrong camp

- **Where:** notes.json, 9:6, reading (3) ("A call to Israel's own history ... Wright").
- **Evidence:** Wright (Climax of the Covenant; NIB Romans) reads 9:6 as Israel redefined around the Messiah. That sits between readings (1) and (2), not in a reading where nobody is cast out. Wright appears in the card on election as holding a corporate reading, so the attribution should be consistent.
- **Fix:** Re-sort Wright, or say "partly Wright".

### 11. MINOR. Arminius is called a "corporate" reader

- **Where:** notes.json, 9:11 (`views`): "Corporate or historical election ... (Arminius, Wesley, Abasciano, many Catholic and Orthodox readers...)".
- **Evidence:**
  - Arminius reads Romans 9 as God's election of believers in Christ (conditional individual election).
  - Abasciano's reading is corporate.
  - Catholic and Orthodox writers (Aquinas, Chrysostom) mostly read individual predestination by foreknowledge or synergy.
  - Lumping them all as "corporate" blurs three distinct positions.
- **Fix:** Split the readings into (a) corporate and (b) conditional individual, and name each advocate under the right one.

### 12. MINOR. Term inconsistency: παράπτωμα "false step" at 11:11-12

- **Where:** plain.txt 11:11-12; glosses.json 11:11.
- **Evidence:** The nt term for παράβασις/παράπτωμα is "transgression / trespass", and 4:25 and 5:15-20 read "trespass(es)". 11:11-12 read "false step", with no new term entry and no "why". CLAUDE.md: changing a term needs a "why". There is a good reason (the ἔπταισαν/παράπτωμα wordplay on stumbling), but it is not recorded.
- **Fix:** Either use "trespass" here or add a term entry in `proposals/nt/terms.json` for 11:11-12 with the stumbling reason, and mention the choice in the 11:11 note.

### 13. MINOR. Term inconsistency: "Is God unjust?" at 9:14

- **Where:** plain.txt 9:14; notes.json 9:14.
- **Evidence:**
  - 3:5 renders the same idea "Is God unrighteous when he brings his anger down?".
  - The nt term says "never 'justice' in the Plain English Translation", and "ἀδικία 'unrighteousness'".
  - Note 9:14 stresses the shared root with "righteousness", which an English reader cannot see.
- **Fix:** "Is there unrighteousness with God?" or "Is God unrighteous?".

### 14. MINOR. ἀδελφοί term: glosses missing at 10:1 and 11:25

- **Where:** glosses.json.
- **Evidence:** The nt term lists 10:1 and 11:25 and calls for a gloss "brothers and sisters". 1:13, 7:1 and 8:29 have it. 9:3, 10:1 and 11:25 do not.
- **Fix:** Add glosses at 10:1 and 11:25.

### 15. MINOR. 11:13 "As long as I am an apostle"

- **Where:** plain.txt 11:13.
- **Evidence:** ἐφ' ὅσον can mean "inasmuch as" or "as long as". The Plain English Translation picks the temporal sense. NIV and ESV take "inasmuch as". The notes do not mention the choice.
- **Fix:** "Inasmuch as I am an apostle of the Gentiles, I honor my service". Add a gloss if the other sense is kept.

### 16. MINOR. 11:31 renders the dative against the more common reading, and the note says it is neutral

- **Where:** plain.txt 11:31; notes.json 11:31.
- **Evidence:**
  - "τῷ ὑμετέρῳ ἐλέει" is usually taken with ἐλεηθῶσιν ("by your mercy they may be shown mercy"), as the note itself says.
  - The Plain English Translation's "with your mercy in view" attaches it to "disobedient" and leaves the main reading hard to see.
  - The note's text also confuses "second mercy" and the two readings.
- **Fix:** Render as "so that, by the mercy shown to you, they also may now be shown mercy". Rewrite the note's reading list clearly.

### 17. MINOR. Claude's theory in chapter 11 rests on a disputed word

- **Where:** chapters.json, chapter 11 `deep`, the `spec` box.
- **Evidence:** The argument leans on the second "now" ("Israel is disobedient now so that Israel may be shown mercy now"). That νῦν is bracketed in NA28 and is absent in Tyndale House, Tregelles and the Byzantine text (variant 11:31). The box does not say so.
- **Fix:** Add one sentence: "this depends on the second 'now', which some editions omit".

### 18. MINOR. 11:21 and 11:31 variant lists are incomplete

- **Where:** variants.json.
- **Evidence:**
  - 11:21: the `w` list shows μήπως absent from S, Y, W, G. Reading 0 lists only SBLGNT. Tyndale House, WH and Tregelles should be there.
  - 11:31: reading 1 omits Tregelles (G lacks the second νῦν).
  - Missing entirely: 11:17 (the Byzantine "καὶ τῆς πιότητος", English "root and fatness" in the KJV).
  - 10:9: the TR/KJV reads "τὸν κύριον Ἰησοῦν" ("the Lord Jesus"), but the entry puts the TR with reading 0 without saying so. This is unverified, so check against Scrivener.
- **Fix:** Correct the lists and add the 11:17 entry.

### 19. MINOR. The Orthodox card claims the Church prays for the Jews' conversion

- **Where:** chapters.json, chapter 11, traditions, Orthodox: "and the Church prays for it".
- **Evidence:** No source is given. I know of no standard Orthodox prayer of that kind. Chrysostom and Theophylact expected a conversion, but the "prays for it" claim is unsupported.
- **Fix:** Drop it, or cite the liturgical text.

### 20. MINOR. The 2015 Vatican document is described as if it were doctrine

- **Where:** chapters.json, chapter 11, Catholic card; notes.json 11:29.
- **Evidence:** The Commission for Religious Relations with the Jews states that the text "is not a magisterial document or doctrinal teaching". The card says it "states" the Church's position.
- **Fix:** "A reflection by the Holy See's Commission for Religious Relations with the Jews (2015), which says it is not a doctrinal text, says..."

### 21. MINOR. Westminster Larger Catechism 191 is quoted inexactly

- **Where:** chapters.json, chapter 11, Reformed card: teaches the church to pray for "the calling of the Jews".
- **Evidence:** WLC 191 says "the Jews called, the fullness of the Gentiles brought in". "The calling of the Jews" is from the Directory for Public Worship.
- **Fix:** Use the catechism's words.

### 22. MINOR. Things I could not confirm (the writer flagged these from memory)

- **Athanasius on Rom 9:5** (variant 9:5, note 9:5): Athanasius does take up Rom 9:5 in the first of the Orations against the Arians, but I could not confirm a section number or a reading. Cite section and edition, or drop him from the list.
- **Calvin on Romans 10:14** (note 10:14): I could not confirm the wording ("him whom they have not heard", with Christ speaking through ministers). Check the commentary text and cite it, or remove the attribution.
- **Hendriksen** (note 11:26, reading 2): plausible, since Hendriksen reads "all Israel" as the elect of Israel through the age, but I could not confirm. Check, and add a source key (none exists in the part's sources.json).
- **Fitzmyer "and others" on a mixed audience** (settings 11:25-32): attribution unverified. Verify or drop.
- Cleared: Irenaeus Haer. 3.16.3, Tertullian Praxeas 13, Chrysostom, the Targums, Exodus Rabbah 13:3 (change "again and again" to "once, twice, three times"), Columella (add the Baxter-Ziesler source key and cite it).

### 23. MINOR. Deep dive on chapter 9 states one reading of Exodus as the text's order

- **Where:** chapters.json, chapter 9 `deep` 1: "the Exodus story gives the order of events: Pharaoh hardened himself, and the LORD's hardening followed".
- **Evidence:** Exodus 4:21 and 7:3 announce God's hardening before any plague, and 7:13 and 7:22 use passives. The 9:18 note and the topic list this properly. The deep dive flattens the debate into one order.
- **Fix:** "In the first plagues Pharaoh's hardening is reported first (8:15, 32); God's is announced earlier (4:21; 7:3) and reported from 9:12. Readers differ on how to count this."

### 24. MINOR. Smaller factual and wording slips in notes

- 9:6: the transliteration "ekpepto-ken" should be *ekpeptōken*.
- 9:17: "dietereis" should be *dietērēthēs* (διετηρήθης).
- 9:22-24: "Matthew 23:37 shows Jesus weeping" is wrong. It is a lament, and Luke 19:41 is the weeping.
- 9:32: "Israel 'ran' but not 'by faith' (9:32)". 9:31 says "pursued", not "ran", and 9:16 uses "runs".
- 9:5: the Titus 2:13 and John 20:28 parallels are given with "Paul seldom calls Christ theos". John is not Paul, and Titus is disputed in authorship. State it.
- 10:15 transliteration "apotolma" should be *apotolmai*.
- 11:15: "this follows Paul's use of the phrase in 1 Corinthians 15". The phrase "life from the dead" is not in 1 Cor 15.
- 11:15, reading (2) "a view held by some commentators": name them, e.g. Calvin.
- 11:26 `houtos` note: "Some older English Bibles ... heard 'and then'". The older Bibles have "and so"; it was preachers who heard "then".
- 11:33 note: "Paul closes other sections with a hymn (... Ephesians 3:20-21)". Ephesians is disputed.
- 11:30 note: the verb ἐλεέω occurs at 9:15, 16, 18; at 9:23 it is the noun.
- 9:11 note: the Greek is *ho kalōn* (the participle), not "ho kalon".
- 11:21 note: the "warning" note's claim that Arminians' view of 11:2 "does not fit" is advocacy. Reword as a question.
- 11:11 note: "Later Christian teaching that Israel has fallen for good goes against the answer Paul gives". State as the view of the commentators named, not as fact.

### 25. MINOR. Missing or thin settings and traditions

- **Settings.** No card for these sections, though each is a distinct speech or quotation with its own first audience:
  - 9:6-13: Genesis 25:23 to Rebecca.
  - 9:13: Malachi 1:2-3, to post-exilic Judah.
  - 9:14-18: Exodus 9:16 and 33:19 (Moses to Pharaoh, and to Moses).
  - 11:8-10: Psalm 69 and Isaiah 29, Deuteronomy 29.
  - 11:34-35.
  - 10:1-4 and 10:14-15 (the mission chain).

  Hosea, Isaiah, Elijah and the objector are covered. Add short cards or fold these into existing ones.
- **Traditions.** Some cards have views with no sources:
  - Pentecostal (election, confession).
  - Orthodox (confession, law).
  - Evangelical (11:26).
  - Adventist (law, Israel).

  The brief asks for each tradition "as its own teachers do". Add a source or label them "as commonly taught".
- **Baptist, 10:9:** "A particular prayer is not required" is not in the cited BF&M articles. Remove or source.
- **Anglican** is missing from the Israel, perseverance, law and mercy cards. It is a named tradition.

### 26. MINOR. Drift check against NIV/ESV (done mentally)

- 9:5 matches the ESV closely: the run "who is God over all, blessed forever" is word for word the same. This is the one place where the Greek order is followed so closely that it is the same string as the ESV. The phrase also appears in other translations, so it is partly forced by the Greek, and the Plain English Translation is not otherwise dependent on a copyrighted text.
- Other places where the wording is the common English idiom (11:6 "grace would no longer be grace"; 11:26 "and so all Israel will be saved") are unavoidable.
- No dependence beyond that.

### 27. MINOR. Smaller Plain English Translation observations (no need to change if the writer disagrees)

- **9:11-12 split.** The KJV split is kept and explained in a note. No problem.
- **10:16-17.** "report" (ἀκοή) then "listening" (ἀκοή) loses the repeated word. Note 10:16 covers it. A repeated "hearing" in the Plain English Translation would show it. Check the 10:16 gloss ("what we announced"), which describes a message sent, whereas ἀκοή is what was heard.
- **11:35.** "so that he must be paid back" is ambiguous about who is repaid. The giver is repaid by God. Suggest "that he should be repaid".
- **11:33.** "his riches, his wisdom and his knowledge" fixes one of two possible readings ("riches of wisdom and knowledge"). A short note is enough.
- **9:26 and 8:14-21.** "sons of the living God" against the term "God's children". The 9:26 gloss covers it; confirm that this is intended.
- **9:19.** "has ever stood" for the perfect ἀνθέστηκεν is fine.

## Fixes applied

1. Fixed. ELCA 1994: every covenant claim removed (Lutheran cards in chapters 9 and 11, note 11:29, topics.json church-israel section 3). The declaration is now described only as rejecting Luther's anti-Jewish writings and opposing anti-Semitism, and the notes say it does not itself speak of covenant. The topic sentence now cites Nostra Aetate 4, John Paul II at Mainz and the 2015 Vatican reflection. The 1998 Guidelines were not added (no source checked). Lead edits the church-israel core.
2. Fixed. Note 10:15 and its preview now say the Hebrew and the Septuagint both have one herald and Paul makes it plural; variant 10:15 now says the longer text echoes the "peace" and "good things" of Isaiah, not its number.
3. Fixed. Variant 10:5 edition lists corrected from the word data (SBL and WH lack "them"; NA28, NA27, THGNT, Tregelles, TR and Byzantine have it). The entry says plainly that the Plain English Translation departs from NA28 and THGNT and follows the SBLGNT, and gives the LXX Leviticus 18:5 harmonization as the reason. The workshop sentence was removed.
4. Partly fixed. No manuscript is named: I could not confirm witnesses, so each entry now says "Editions only; manuscript lists not checked" (9:5 says no manuscript or early punctuation mark was checked). Edition lists were re-verified against texts/orig/Rom.json for every entry and corrected where incomplete (9:31, 9:32, 9:33, 10:17, 11:6, 11:13, 11:21, 11:31). Added variant 11:17 (the Plain English Translation's "root and the richness" followed Tregelles/TR/Byzantine against the SBL base; the Plain English Translation now reads "the rich root" and follows SBLGNT, NA28, THGNT). 9:11, 9:28, 9:32 and 10:15 were already treated.
5. Fixed. Note 11:28 no longer claims "most commentators"; it says commentators divide, names none, and notes that the passive "beloved" pushes toward the passive sense.
6. Fixed. Note 11:18 reading (2) now gives replacement in its strongest form (Galatians 6:16, Philippians 3:3, Ephesians 2:11-22, 1 Peter 2:9-10, Hebrews 8, Justin) before the reply. The supersessionism deep dive has a new paragraph on the fulfillment/one-people case in its proponents' terms (Westminster 7 and 25, Calvin, Lumen Gentium 9, Nostra Aetate 4, fathers), separates it from punitive replacement, and "almost everyone agrees" became "most NT scholars hold that Romans 11 does not teach punitive replacement". The church-israel `common` line is softened the same way.
7. Fixed. Note 9:4 no longer builds on a verb: it says the gifts have no verb in the Greek, the Plain English Translation supplies "is", and commentators divide.
8. Fixed. Note 9:4 now says Paul "may echo" Jeremiah 31 in 11:27.
9. Fixed. Esau is Isaac's son, Abraham's grandson and offspring; Keturah's sons cited at Genesis 25:1-4.
10. Fixed. Wright moved out of reading (3) of note 9:6 and placed between readings (1) and (2).
11. Fixed. Note 9:11 now has three readings: corporate (Abasciano, Wright, Dunn, Wesley), conditional individual (Arminius) and persons-and-peoples; Catholic and Orthodox are left to the card. Chapter 9 readings and note 9:13 no longer call Arminius a corporate reader.
12. Fixed. 11:11-12 now read "trespass" (lead decision 7); gloss and note 11:11 updated.
13. Fixed. Plain English Translation 9:14 keeps "unjust" (lead decision 7); note 9:14 explains the hidden link with "righteousness" and points to 3:5.
14. Fixed. Glosses added at 10:1 and 11:25 and also at 9:3 (brothers and sisters, mixed groups, Acts 1:15; 21:17; 28:14); note 9:3 explains the plural.
15. Partly fixed. 11:13 reads "Since I am an apostle of the Gentiles" with a gloss that "as long as" is also possible (the reviewer's "inasmuch as" was judged too stiff for the reading level).
16. Fixed. 11:31 now reads "so that, by the mercy shown to you, they also may now be shown mercy"; note 11:31 rewritten (anchor changed to "by the mercy shown to you").
17. Fixed. The spec box in chapter 11 now says it depends on the second "now" of 11:31, which some editions omit, and on the reading of "so that".
18. Fixed. 11:21 and 11:31 edition lists corrected from the word data; 11:17 added. 10:9: the word data shows the TR with the accusative; the entry now says the KJV renders it "the Lord Jesus" and does not claim more.
19. Fixed. "and the Church prays for it" removed from the Orthodox card; the unsourced statement about modern Orthodox statements also removed.
20. Fixed. The Catholic card and note 11:29 now say the 2015 text is a reflection that is not a doctrinal document.
21. Fixed. The Reformed card now quotes the catechism's own words ("the Jews [be] called, the fullness of the Gentiles brought in") and cites a new source key westminster-larger-catechism.
22. Fixed. Athanasius cut from the 9:5 note and variant. Calvin removed from the 10:14 note (and its source). Hendriksen removed from the 11:26 note. The "Fitzmyer and others" attribution on a mixed audience removed. Exodus Rabbah now reads "once, twice and three times". Baxter-Ziesler source key added and cited for Columella. Note 11:15 reading (2) now names Calvin (he reads "life from the dead" as a figure for renewal; cited from memory of the commentary, so flag for the lead if a check is wanted).
23. Fixed. The chapter 9 deep dive now gives the mixed order in Exodus (4:21; 7:3; 8:15, 32; 9:12) and says readers differ.
24. Fixed, all fourteen: ekpeptōken; dietērēthēs; Luke 19:41 added to the lament in 9:22-24; "pursued" at 9:31; Titus and John 20:28 qualified; apotolmai; the 1 Corinthians 15 claim replaced; Calvin named for 11:15 (2); "and so" wording about English Bibles; Ephesians 3:20-21 replaced by Romans 16:25-27 and Philippians 4:20; eleeo verb at 9:15, 16, 18 with the noun at 9:23; ho kalōn; the 11:2 Arminian clause turned into a question; the 11:11 sentence attributed to readers who take "By no means!" at face value.
25. Partly fixed. Setting cards added for 9:10-13 (Genesis 25:23 and Malachi 1:2-3), 9:14-18, 10:1-4, 10:14-15 and 11:8-10; the 11:33-36 card now covers 11:34-35. Pentecostal election row cut. Pentecostal confession now cites ag-truths. Orthodox law and confession rows and the Adventist rows now cite ware-orthodox or sda-beliefs and are labelled as commonly taught where the source does not carry them. The Evangelical 11:26 row was cut (no source). Baptist "a particular prayer is not required" removed. Anglican rows added to the law card (Article 7) and the perseverance card (Article 16). Not added: Anglican on Israel and mercy, Baptist on Israel, law and 11:26 (no source in hand); for the lead if wanted.
26. Fixed. Plain English Translation 9:5 rebuilt from the literal line as "comes the Christ, who is over everything, God blessed forever" (the old run was identical to a published translation); the variant readings, note anchor and note text follow. The other common-idiom cases (11:6, 11:26) are left, as the reviewer says.
27. Partly accepted. 11:35 now "so that it will be paid back to him" (Job 38-42 quotes the old wording; lead to sync). 11:33 note gives the two readings of the first line. 10:16 gloss now "what people heard from us". 10:16-17 Plain English Translation left as is (the note covers the repeated akoe). 9:26 "sons" kept: the gloss covers it and it follows the Hosea quotation. 9:11-12 and 9:19 no change needed.
