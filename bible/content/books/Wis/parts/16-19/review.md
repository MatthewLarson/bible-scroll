# Hostile review: Wisdom of Solomon 16-19 (part 16-19)

Reviewed against texts/orig/Wis.json (Swete), texts/src/Wis.app.json, texts/src/Wis.lat.json, the site's current Plain English Translation for every quoted verse, and Sefaria (Yoma 75a-b), Wikipedia (Tantum ergo) and a web search (18:22). `VERBOSE=1 node tools/build.js --check Wis/16-19` returned 0 errors, 0 warnings (97 verses, 68 notes, 17 variants, 32 glosses, 4 chapters, 15 topic contributions).

## Verdict

Careful, readable, mostly faithful work. No invented source, fragment or reading turned up, and almost every quotation of Exodus, Numbers, Psalms, John, Hebrews and Wisdom 10-11 matches the current Plain English Translation exactly. The Talmud claims on Yoma 75b hold up. The weaknesses are these. The apparatus was not read closely enough: one real variant is missing (19:2), another is mis-reported (17:4), one is mis-described (16:3), and a possible 16:6 variant is unflagged. One headline word-count claim is false (σύμβολον). The 18:22 note rests on an unnamed conjecture. The Yoma 75a note misreports the Abbahu comparison. Several unsourced generalizations about what churches and rabbis "see" break STYLE.md rule 2. Findings: 0 critical, 7 major, 12 minor.

## Findings

### Major

1. **Missing variant and blended Plain English Translation, 19:2.** Swete prints ἐπιστρέψαντες τοῦ ἀπεῖναι (B). The apparatus records "επιτρ. ℵc.a A" (the correctors of Sinaiticus and Alexandrinus read ἐπιτρέψαντες, "having allowed"). The Vulgate has *cum ipsi permisissent ut se educerent*, Douay "had given them leave to depart", and the KJV "consented". The Plain English Translation, "after they had changed course and let your people go", blends the two readings. There is no variant entry although the brief requires one for differences in meaning from ℵ, A and the KJV. Fix: add a variant entry (B ἐπιστρέψαντες, "turned back / turned about", against ℵc.a A ἐπιτρέψαντες with the Latin and KJV), say which the Plain English Translation follows and why, and make the Plain English Translation follow one reading.

2. **False claim, note 16:6 (index 3).** The note says σύμβολον "appears nowhere else in Swete's Greek Old Testament" and "A search of Swete's whole Septuagint finds σύμβολον only here". Wisdom 2:9 in texts/orig/Wis.json reads καταλίπωμεν σύμβολα τῆς εὐφροσύνης, the same noun in the plural. The writer's own sources-checked.md lists the search as "σύμβολον only 16:6", so the plural was missed. Fix: reword ("here the singular occurs once; the plural is in 2:9") or drop the superlative. Re-run the search for all forms. The note's "p" line needs the same fix.

3. **Unflagged possible variant at 16:6.** Swete's apparatus for this verse records "συμβουλαν ℵΑ | νομον Α". The OCR is garbled, but it seems ℵ and A do not read σύμβολον. The note builds a whole word study on σύμβολον and has no variant entry. Fix: read the Swete page image, enter the variant if confirmed, and mention it in the note.

4. **Witnesses mis-reported, variant 17:4.** The first reading is attributed to "The Greek codices as Swete reports them (B, ℵ, A, C)" as ἐκταράσσοντες. The apparatus reads "δ εκταρασσοντες] δε καταρασσοντες Bab AC, δε ταρασσοντες ℵ". So B's corrector, A and C have καταράσσοντες ("dashing down"), and ℵ has ταράσσοντες. The writer's claim that the KJV's "falling down" has no Greek behind it is not safe, because καταράσσοντες fits it. Swete also records ἀφόβους and διεφύλαττεν in A and C. Fix: list the real readings by witness and drop the "has no match in the Greek" statement.

5. **Wrong description of the witnesses, variant 16:3 ("b" line).** The line says "a corrector of Vaticanus and the first hand of Sinaiticus garble the word". The apparatus (δειχθεισαν (διχθ.→δειχθ. Bab)] χθεισαν ℵ* διχθ. ℵ¹) shows the opposite for Vaticanus: B's first hand has διχθ- and Bab corrects it to δειχθ-, which is Swete's text. ℵ* has χθεισαν and ℵ¹ has διχθ-. Fix: rewrite the line. Add that B's own first hand was garbled.

6. **Conjecture at 18:22 unnamed and the Plain English Translation departs from the Greek; no variant entry.**
   - The note says "Some modern translations print 'wrath'... they mark this as a correction". No translation or edition is named. The sources-checked file records only a web-search summary about the NRSVUE, and Rahlfs and Ziegler were never opened. I confirmed only that the NRSVUE text has "wrath" with the footnote "Cn: Gk multitude" (bible.com, NRSVUE, Wis 18). I could not find who first proposed χόλον.
   - The Plain English Translation "the turmoil" turns ὄχλον ("crowd") into a sense that the note itself hedges. Douay's "disturbance" and the KJV's "destroyer" differ in meaning from the Greek, yet there is no variant entry.
   - Fix: name the NRSVUE as the source of the conjecture, state plainly that nobody checked which editor proposed it, and enter a variant (ὄχλον, all codices; χόλον, conjecture; Latin *turbas*; KJV "destroyer"). Consider the Plain English Translation "the crowd", with a note on the later "punisher" that follows.

7. **Yoma 75a misreported, note 16:20 (index 15).**
   - The note says Rabbi Abbahu compares the manna "to a mother's milk, which changes taste with what she eats". Sefaria's Yoma 75a has Abbahu reading *shad* as "breast": as a baby finds different flavors in the breast, Israel found in the manna many flavors "based on their preferences". Nothing is said about the mother's diet.
   - "Rabbi Ami and Rabbi Asi agree" is wrong. They disagree on the details, and their exchange is about the five foods of Numbers 11:5. The honey-wafer versus oil-cake resolution is not in what Ami and Asi say.
   - The point of the note ("tasted of everything") survives. Fix: correct the Abbahu description, restate Ami and Asi, and either cite the actual harmonizing passage or drop "Jewish teachers resolved the difference".

### Minor

8. **Quotation not the current Plain English Translation, note 17:11 (index 25).** The note quotes Ecclesiastes 10:20 as "do not curse the king even in your thoughts". The Plain English Translation reads "Not even in your thoughts should you curse a king". Fix: quote the Plain English Translation exactly.

9. **Plain English Translation 19:15 prejudges what its note calls unclear.** ἀλλ᾽ ἦ τις ἐπισκοπὴ ἔσται αὐτῶν is rendered "there will surely be a visitation for those others". Note 60 says the Greek is unclear (judgment or leniency) and that "the Plain English Translation keeps the neutral word 'visitation'". "Surely" and "will be" are not neutral. Fix: "whatever visitation is in store for those others".

10. **Plain English Translation 16:16, ἀπαραιτήτοις.** The adjective belongs to ὄμβροις ("relentless downpours"). The Plain English Translation turns it into a separate clause, "and they could not escape", which also repeats the flow of 16:15. Restore it ("relentless storms").

11. **Plain English Translation 19:13, κεραυνῶν.** "Violent crashes of thunder" gives thunder only. κεραυνός is a thunderbolt, and "lightning" is part of the sense. The note's guess at "the storm at the sea (Psalm 77:16-18)" is offered as likely without a source.

12. **Plain English Translation/gloss terms.** 16:14 renders πνεῦμα as "breath" although the brief fixes "spirit"; add a note that the sense is breath of life, or change it. 19:18 renders ῥυθμός as "melody" (it means rhythm or pattern). Note 64's account of Greek modes is unsourced and is not a gloss on ῥυθμός.

13. **Weak "why" on 19:13.** Three codices and the Latin read προγεγονότων ("beforehand") and the writer follows B with the reason "follows Swete". The text then argues that "beforehand" fits the book's point better. Give a real reason or follow the majority.

14. **Tantum ergo source.** The Wikipedia article gives the versicle as *Panem de cælis praestitisti eis* and treats *cælo* as a variant. The source key and note give *caelo*. The claim that the Latin follows ℵ and A's παρέσχες is the writer's own deduction (a Vulgate fact) and is plausible, but the note and the key should say which printing is meant. Wikipedia is also a thin source for a liturgical rubric. Prefer a rite book or a Vatican text.

15. **Dum medium silentium.** The Introit text is checked in the Latin at canticanova.com only. The English given in note 39 ("from the royal throne") is the writer's translation of *a regalibus sedibus* (plural "royal seats") and is not labeled as such. Chapter 18 "Read as Christmas" says "The Western church", which means the Roman Rite. Fix: say "Roman Rite", label the translation, and cite the Missal text directly.

16. **Unsourced claims about churches, rabbis and "commentators" (STYLE.md rule 2).**
    - Chapters 16-19 `views` C, O, P, J and the `readings` blocks say what Catholic, Orthodox, Protestant and Jewish readers "see" with no source. Examples: Orthodox on Aaron's robe and the Word in 18; Catholic on conscience "agrees with the Church's view" in 17; baptism in 19; "Jewish tradition also enlarged the darkness plague" in 17; "the way later Jewish midrash reads the wilderness stories" in 16.
    - Claude's theory boxes say "Commentators note", "Scholars note each scene" and "Commentators note the harp image" with no commentator named.
    - Notes 21 (Catholic and Orthodox versus Protestant and Jewish view of Wisdom 17), 24 ("Egypt's priests were famous in the Greek world for magic"), 13 ("one of the clearest Jewish examples of what the crowd in John 6 had in mind"), 20 ("one of the earliest Jewish witnesses to the custom") and 66 (ambrosia and the immortal gods) make claims no source supports.
    - Fix: source each from a catechism, a council text or a named scholar, or cut it back to what the sources-checked file actually opened.

17. **Mishnah Berakhot 1:2 stated as one practice.** The note says the morning Shema is "to be finished by sunrise". The Mishnah also records a dispute (Rabbi Joshua, the third hour). Say that the sunrise view is one view.

18. **Missing traditions card.** The brief for this part names none, but agent-reviewer.md item 8 asks whether real church conflicts are shown. The bread of angels with John 6 (the nature of the Eucharist: Catholic, Orthodox, Lutheran, Reformed, Baptist) and the bronze serpent as a sanctioned image (the icon debate; Nehushtan in 2 Kings 18:4) are real conflicts that the C/O/P blocks smooth over. Consider a card at 16:20 or 16:7.

19. **Consistency and small points.**
    - Note 49 says Josephus reads the dress as "earth, sky, sun, moon and zodiac"; chapter 18 says "earth, sky, sea, sun and moon". Make them agree and check Antiquities 3.179-187 again.
    - Note 54 cites "Psalm 105:9" (Greek numbering) and "Psalm 106:9" (Hebrew numbering) side by side without saying so.
    - Note 62: the word "δίκαια" in note 61 should read δικαίων.
    - Chapter 18 settings: "kept the Passover every year as Egypt's neighbors" is unclear and unsourced.

## Other checks done

- **18:1 departure from Swete.** Swete's text is B ὅτι μὲν οὖν; the apparatus shows ου A and + μεν Bab ℵA. The departure (A's οὐ, with the Latin *quia non et ipsi eadem passi erant*) is declared and entered as a variant, and the Vulgate/KJV statements check out. The "why" is an assertion of sense ("a strange sense") with no scholarly source. Consider adding one, and note that the Latin also changes the end of the verse.
- **Quotations.** About eighty quotations of Exodus, Numbers, Deuteronomy, Psalms, Isaiah, John, Hebrews, Revelation, 1 Corinthians, Genesis and Wisdom 7, 10 and 11 were matched against the Plain English Translation. Only Ecclesiastes 10:20 failed (finding 8). The Philo (Yonge) and Josephus (Apion 2.121) quotations were not matched here because those texts are outside the Plain English Translation corpus; confirm against the cited translations.
- **Yoma 75b** (Akiva: bread the angels eat; Ishmael: "you have erred", Deuteronomy 9:9, *eivarim*) matches Sefaria.
- **Drift against NRSV, NABRE, RSV, NJB, NETS.** No five-word run was visible in the Plain English Translation beyond what the Greek forces. The drift-audit log says 73 of 97 verses were rebuilt, which is plausible. I did not reproduce any version's text.
- **Cross-references.** Topic ids in chapters.json exist. The `soul`, `bronze-serpent` and `manna` links work (the build is clean).

## Fixes applied

1. Fixed. Swete's page 641 checked: B ἐπιστρέψαντες, ℵ* επεστρ., ℵ¹ apparently επιστρ., ℵc.a A επιτρ. New 19:2 variant (B against ℵc.a A, the Latin and the KJV); the Plain English Translation now follows B only ("after they had turned around so your people could leave").
2. Fixed. Swete corpus re-searched for every form: the noun is in 16:6, 2:9 (σύμβολα) and Hosea 4:12 (συμβόλοις). Note 3 body and "p" line rewritten; Hosea's divination "tokens" added as the contrast.
3. Fixed. Swete's page 634 read: συμβουλον ℵA (the digital apparatus's "συμβουλαν" is an OCR slip, reported to the lead), νομον A, om σου ℵ. New 16:6 variant; note 3 points to it. Also corrected variant 16:12: παντας is A and C, not A alone.
4. Fixed. Swete's page 636 read: δε καταρασσοντες Bab A C, δε ταρασσοντες ℵ, αφοβους and διεφυλαττεν A C, μυθος A. Variant 17:4 now gives the readings by witness; the "no match in the Greek" claim is gone (καταράσσοντες may lie behind the Latin and the KJV).
5. Fixed. Page 633 confirms B* διχθ- corrected by Bab to δειχθ-, ℵ* χθεισαν, ℵ¹ διχθ-. The "b" line is rewritten; the unsourced "many readers think" in "why" is removed.
6. Fixed. NRSVUE opened (bible.com): "wrath" with "Cn: Gk multitude". New 18:22 variant (Greek ὄχλον; Latin turbas/Douay "disturbance"; KJV "destroyer"; NRSVUE correction). Plain English Translation now "He overcame the crowd". Note 47 rewritten: names the NRSVUE, drops the unverified "trouble, annoyance" sense and any claim about who proposed χόλον (offered only as the site's observation about the letters).
7. Fixed. Yoma 75a reopened (Aramaic and English): Abbahu's comparison is the baby tasting many flavors at the breast (the mother's diet is the translator's gloss, not the Talmud); Ami and Asi both start from "all types of food" and differ over the five foods of Numbers 11:5. "Jewish teachers resolved the difference" dropped.
8. Fixed. Ecclesiastes 10:20 now quoted in its current Plain English Translation.
9. Declined in the Plain English Translation, note fixed. "Surely" renders the particle ἦ that Swete prints, and "will be" the future ἔσται; the dispute is over what kind of visitation, not whether one comes. Note 60 now says so.
10. Fixed. 16:16 rebuilt: "Strange rains and hailstorms and downpours that would not let up chased them" (the adjective is back with the downpours).
11. Fixed. 19:13 now "the force of the thunderbolts"; the unsourced Psalm 77 guess removed from the variant.
12. Fixed. 16:14 πνεῦμα now "spirit" (brief term). 19:18 ῥυθμός now "rhythm" ("change the name of the rhythm"); note 64 rewritten from Swete's own uses of ῥυθμός (Exodus 28:15; 2 Kings 16:10; Wisdom 17:18), the unsourced account of Greek modes removed (also from the chapter 19 deep section).
13. Fixed. The 19:13 "why" now gives a reason (B's "had taken place" already looks back; the προ- prefix only makes it explicit; the evidence cannot settle whether it was added or lost), and the Plain English Translation no longer glosses "came with them".
14. Fixed. Wikipedia dropped. The versicle and response are now cited from a rite book opened in this session (processional of 1537, Harvard MS Typ 47, p. 215: procession in the octave of Corpus Christi, spelled "Panem de celo prestitisti eis"), with Albert the Great's commentary on Matthew 11:28 (Opera omnia 20, p. 502) for the Eucharistic reading. The Benediction/Tantum ergo claim is removed because no rite book for it was opened. The Latin = παρέσχες point is now worded as an observation on the verb. The variant's Latin is copied from the Vulgate file.
15. Fixed. canticanova.com dropped. The Latin is quoted from the Roman Breviary (1710, p. 276, Benedictus antiphon on the Vigil of the Epiphany) and the Introit use from a Missal of about 1476 (Harvard MS Lat 181, p. 36: Sunday within the octave of Christmas, "haberet" for "perageret"). The English is labeled as the site's own; "Western church" is now "the Roman Rite"; the 1962 Missal claim is removed (not opened).
16. Fixed (lead decision 5). Chapter views C/O/P/J and readings rewritten: every group claim is now either tied to a source opened (Article VI of the Thirty-Nine Articles, opened at churchofengland.org; Rashi on Exodus 10:22 with Exodus Rabbah 14:3; the liturgical books above; Philo, Against Flaccus 54) or reworded as the note's own observation; the unsourced Orthodox views (16-19), Catholic views (17, 19) and Protestant views (17-19) were dropped. Spec boxes no longer say "commentators/scholars note". Notes 21, 24, 13, 20 and 66 cut back to what the sources say; the same sweep removed unsourced group claims in notes 0, 5, 11, 12, 16, 18, 29, 32, 40, 43, 46, 51, 53, 67, and the topics manna, word-of-god, new-creation and hospitality ("coins" -> "uses"). Note 41's handbook claim (Bullard and Hatton) could not be reopened and was replaced by what the text itself says.
17. Fixed. Mishnah Berakhot 1:2 reopened: sunrise is the first view; Rabbi Joshua allows until the third hour. Note 20 says so; the "earliest Jewish witness" and "morning office" sentences were dropped.
18. Declined. The two questions already have sourced cards: the Lord's Supper at John 6 (Jhn 05-06) and sacred images at 2 Kings 18 (2Ki 18-25). A third card here would repeat them (agent-writer-works.md: do not repeat a card). Notes 5 and 14 now point to those cards.
19. Fixed. Josephus Ant. 3.179-187 reopened: earth, sky, ocean, sun and moon, months or zodiac; note 49, the chapter 18 deep section and the priesthood topic now agree. Note 54 now labels Psalm 106:9 as 105:9 in the Greek numbering. Note 61 now says δικαίων (from δίκαια). The chapter 18 settings line on "Egypt's neighbors" is replaced. Philo's Against Flaccus reopened: the AD 38 date is not on the page, so it is removed; the "foreigners and aliens" notice (54) is cited instead.
Other: variant 17:11 corrected (Swete lists μαρτυρι of ℵA as a spelling of the verb; ℵc.a adds ιδιω; the old spliced Greek removed); variant 19:20 witnesses corrected (ℵ has ισχυεν but not the added word); note 66's "reader" is now "a corrector of Vaticanus". Not changed: the 18:1 "why" (review "other checks"), left as the writer's sense argument.
