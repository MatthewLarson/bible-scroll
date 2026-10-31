# Hostile review: Wisdom of Solomon 16-19 (part 16-19)

Reviewed against texts/orig/Wis.json (Swete), texts/src/Wis.app.json, texts/src/Wis.lat.json, the site's current Plain for every quoted verse, and Sefaria (Yoma 75a-b), Wikipedia (Tantum ergo) and a web search (18:22). `VERBOSE=1 node tools/build.js --check Wis/16-19` returned 0 errors, 0 warnings (97 verses, 68 notes, 17 variants, 32 glosses, 4 chapters, 15 topic contributions).

## Verdict

Careful, readable, mostly faithful work. No invented source, fragment or reading turned up, and almost every quotation of Exodus, Numbers, Psalms, John, Hebrews and Wisdom 10-11 matches the current Plain exactly. The Talmud claims on Yoma 75b hold up. The weaknesses are these. The apparatus was not read closely enough: one real variant is missing (19:2), another is mis-reported (17:4), one is mis-described (16:3), and a possible 16:6 variant is unflagged. One headline word-count claim is false (σύμβολον). The 18:22 note rests on an unnamed conjecture. The Yoma 75a note misreports the Abbahu comparison. Several unsourced generalizations about what churches and rabbis "see" break STYLE.md rule 2. Findings: 0 critical, 7 major, 12 minor.

## Findings

### Major

1. **Missing variant and blended Plain, 19:2.** Swete prints ἐπιστρέψαντες τοῦ ἀπεῖναι (B). The apparatus records "επιτρ. ℵc.a A" (the correctors of Sinaiticus and Alexandrinus read ἐπιτρέψαντες, "having allowed"). The Vulgate has *cum ipsi permisissent ut se educerent*, Douay "had given them leave to depart", and the KJV "consented". The Plain, "after they had changed course and let your people go", blends the two readings. There is no variant entry although the brief requires one for differences in meaning from ℵ, A and the KJV. Fix: add a variant entry (B ἐπιστρέψαντες, "turned back / turned about", against ℵc.a A ἐπιτρέψαντες with the Latin and KJV), say which the Plain follows and why, and make the Plain follow one reading.

2. **False claim, note 16:6 (index 3).** The note says σύμβολον "appears nowhere else in Swete's Greek Old Testament" and "A search of Swete's whole Septuagint finds σύμβολον only here". Wisdom 2:9 in texts/orig/Wis.json reads καταλίπωμεν σύμβολα τῆς εὐφροσύνης, the same noun in the plural. The writer's own sources-checked.md lists the search as "σύμβολον only 16:6", so the plural was missed. Fix: reword ("here the singular occurs once; the plural is in 2:9") or drop the superlative. Re-run the search for all forms. The note's "p" line needs the same fix.

3. **Unflagged possible variant at 16:6.** Swete's apparatus for this verse records "συμβουλαν ℵΑ | νομον Α". The OCR is garbled, but it seems ℵ and A do not read σύμβολον. The note builds a whole word study on σύμβολον and has no variant entry. Fix: read the Swete page image, enter the variant if confirmed, and mention it in the note.

4. **Witnesses mis-reported, variant 17:4.** The first reading is attributed to "The Greek codices as Swete reports them (B, ℵ, A, C)" as ἐκταράσσοντες. The apparatus reads "δ εκταρασσοντες] δε καταρασσοντες Bab AC, δε ταρασσοντες ℵ". So B's corrector, A and C have καταράσσοντες ("dashing down"), and ℵ has ταράσσοντες. The writer's claim that the KJV's "falling down" has no Greek behind it is not safe, because καταράσσοντες fits it. Swete also records ἀφόβους and διεφύλαττεν in A and C. Fix: list the real readings by witness and drop the "has no match in the Greek" statement.

5. **Wrong description of the witnesses, variant 16:3 ("b" line).** The line says "a corrector of Vaticanus and the first hand of Sinaiticus garble the word". The apparatus (δειχθεισαν (διχθ.→δειχθ. Bab)] χθεισαν ℵ* διχθ. ℵ¹) shows the opposite for Vaticanus: B's first hand has διχθ- and Bab corrects it to δειχθ-, which is Swete's text. ℵ* has χθεισαν and ℵ¹ has διχθ-. Fix: rewrite the line. Add that B's own first hand was garbled.

6. **Conjecture at 18:22 unnamed and the Plain departs from the Greek; no variant entry.**
   - The note says "Some modern translations print 'wrath'... they mark this as a correction". No translation or edition is named. The sources-checked file records only a web-search summary about the NRSVUE, and Rahlfs and Ziegler were never opened. I confirmed only that the NRSVUE text has "wrath" with the footnote "Cn: Gk multitude" (bible.com, NRSVUE, Wis 18). I could not find who first proposed χόλον.
   - The Plain "the turmoil" turns ὄχλον ("crowd") into a sense that the note itself hedges. Douay's "disturbance" and the KJV's "destroyer" differ in meaning from the Greek, yet there is no variant entry.
   - Fix: name the NRSVUE as the source of the conjecture, state plainly that nobody checked which editor proposed it, and enter a variant (ὄχλον, all codices; χόλον, conjecture; Latin *turbas*; KJV "destroyer"). Consider the Plain "the crowd", with a note on the later "punisher" that follows.

7. **Yoma 75a misreported, note 16:20 (index 15).**
   - The note says Rabbi Abbahu compares the manna "to a mother's milk, which changes taste with what she eats". Sefaria's Yoma 75a has Abbahu reading *shad* as "breast": as a baby finds different flavors in the breast, Israel found in the manna many flavors "based on their preferences". Nothing is said about the mother's diet.
   - "Rabbi Ami and Rabbi Asi agree" is wrong. They disagree on the details, and their exchange is about the five foods of Numbers 11:5. The honey-wafer versus oil-cake resolution is not in what Ami and Asi say.
   - The point of the note ("tasted of everything") survives. Fix: correct the Abbahu description, restate Ami and Asi, and either cite the actual harmonizing passage or drop "Jewish teachers resolved the difference".

### Minor

8. **Quotation not the current Plain, note 17:11 (index 25).** The note quotes Ecclesiastes 10:20 as "do not curse the king even in your thoughts". The Plain reads "Not even in your thoughts should you curse a king". Fix: quote the Plain exactly.

9. **Plain 19:15 prejudges what its note calls unclear.** ἀλλ᾽ ἦ τις ἐπισκοπὴ ἔσται αὐτῶν is rendered "there will surely be a visitation for those others". Note 60 says the Greek is unclear (judgment or leniency) and that "the Plain keeps the neutral word 'visitation'". "Surely" and "will be" are not neutral. Fix: "whatever visitation is in store for those others".

10. **Plain 16:16, ἀπαραιτήτοις.** The adjective belongs to ὄμβροις ("relentless downpours"). The Plain turns it into a separate clause, "and they could not escape", which also repeats the flow of 16:15. Restore it ("relentless storms").

11. **Plain 19:13, κεραυνῶν.** "Violent crashes of thunder" gives thunder only. κεραυνός is a thunderbolt, and "lightning" is part of the sense. The note's guess at "the storm at the sea (Psalm 77:16-18)" is offered as likely without a source.

12. **Plain/gloss terms.** 16:14 renders πνεῦμα as "breath" although the brief fixes "spirit"; add a note that the sense is breath of life, or change it. 19:18 renders ῥυθμός as "melody" (it means rhythm or pattern). Note 64's account of Greek modes is unsourced and is not a gloss on ῥυθμός.

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
- **Quotations.** About eighty quotations of Exodus, Numbers, Deuteronomy, Psalms, Isaiah, John, Hebrews, Revelation, 1 Corinthians, Genesis and Wisdom 7, 10 and 11 were matched against the Plain. Only Ecclesiastes 10:20 failed (finding 8). The Philo (Yonge) and Josephus (Apion 2.121) quotations were not matched here because those texts are outside the Plain corpus; confirm against the cited translations.
- **Yoma 75b** (Akiva: bread the angels eat; Ishmael: "you have erred", Deuteronomy 9:9, *eivarim*) matches Sefaria.
- **Drift against NRSV, NABRE, RSV, NJB, NETS.** No five-word run was visible in the Plain beyond what the Greek forces. The drift-audit log says 73 of 97 verses were rebuilt, which is plausible. I did not reproduce any version's text.
- **Cross-references.** Topic ids in chapters.json exist. The `soul`, `bronze-serpent` and `manna` links work (the build is clean).

## Fixes applied
