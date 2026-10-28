# Hostile review: Hosea 8-14 (parts/08-14)

Checked: all 97 verses against `node tools/literal.js Hos 8..14`, the Leningrad/auto Ketiv-Qere data, Swete's Greek (`lxx.py`), the 4Q78/4Q82 printout (`dss.py`), every note, variant, gloss, chapter page, settings card and traditions card, and cross-part wording against parts/01-07. `node tools/build.js --check Hos` gives 0 errors, 0 warnings.

## Verdict

This is a careful, honest part. The translation is faithful to the Hebrew and sounds like 8th-grade English. I found no invented source and no invented scroll reading. The writer is mostly strict about saying when a scroll word is restored. Still, there are real faults. The 8:12 variant misdescribes the Ketiv/Qere. The 13:2 variant offers a lexical mechanism I cannot find in the lexica. The 10:10 variant overstates what 4Q82 preserves. Several significant witnesses are missing from variants.json, and in some of those places the scrolls support the Masoretic Text and say so nowhere. The note on 13:14 contradicts itself. A handful of facts and claims need softening or fixing. The part has no critical findings.

Count: critical 0, major 5, minor 24.

## Major

1. **Major. 8:12, plain.txt, variants.json (8:12), notes #16.**
   - The variant says the Qere is "I wrote" and the Ketiv is "I write". The data (texts/auto/Hos.json) shows the verb Ketiv אֶכְתּוֹב and Leningrad אֶכְתָּב are the same imperfect "I write / I would write", differing only in spelling. Only "ten thousand" (רִבּוֹ) versus "many things" (רֻבֵּי) is a real difference.
   - The Plain "I wrote out" turns a Hebrew imperfect into a simple past with no argument. Note #16 admits the verb is imperfect and can mean "though I write".
   - The sentence shape ("I wrote ... the many [things] of my law", then "something foreign") follows one very familiar modern version closely. Only "points" and "foreign" differ. This is a drift.
   - Fix: say in the variant that the verb is the same in Ketiv and Qere. Rebuild the verse so the tense is defended or hedged ("Though I write out for him the many points of my law, they are counted as something foreign"). Alter the shape, not just the nouns.

2. **Major. 13:2, variants.json, notes #87, plain.**
   - The variant says the Greek read nashaq "kiss" "as a rare verb meaning 'fail, be gone' (as if from nashaq II)". I know of no such root. BDB/HALOT give nashaq I "kiss" and nashaq II "be armed" (Ps 78:9). Unless the writer can source this, it is an invented mechanism.
   - Fix: say "the Greek's 'have run out' (ἐκλελοίπασιν) may translate a different verb or text; the reason is uncertain". Cite Wolff only if the claim is in him.
   - The note's readings are muddled. (1) "let them kiss calves" and (2) "sacrificers of men kiss calves" are the same reading. The real alternative, adam as subject ("men who sacrifice kiss calves"), is not set out clearly.
   - The Plain commits to "sacrifice human beings", the most violent reading, and invents a jussive ("Let ... kiss"). Either keep a descriptive sentence or put the choice plainly in the note and the `why`.

3. **Major. Missing variant entries (variants.json has 20 entries).** Each of these has a real difference in the Greek or a scroll, and several are mentioned elsewhere in the part as "variants" without an entry.
   - **13:8.** Note #93 has `kind: var`. 4Q78 has a plus «כלבי היער» ("lions of the forest"), and the Greek has σκύμνοι δρυμοῦ. This is the clearest case where a Hebrew scroll and the Greek agree against the MT. There is no entry. The Plain also follows the MT here.
   - **13:5.** The Greek reads ἐποίμαινόν σε "I shepherded you" for "I knew you". 4Q78 preserves ‹ידעתיכה› and so supports the MT. The note mentions the Greek, but there is no variant and the scroll is not cited. The brief named 13:5.
   - **14:4.** The Greek (14:5) reads "I will heal their dwellings" for "turning away" (a meshuvah/moshav reading). It is mentioned in the chapter page only.
   - **10:11.** The Greek has "I will keep silent about Judah". 4Q82 preserves יחרוש יהודה ישדד לו יעקב and agrees with the MT. The chapter page calls it "Judah will be silent", which is not quite the Greek.
   - Also missing: **10:1** (4Q82 preserves בוקק), **10:6** (4Q82 preserves מלך ירב; this is the Jareb reading and note #44 does not cite it), **11:7**, **12:11** (Greek Gilead/"rulers"/"turtles", only in the chapter page), and **13:10** (4Q78 איה "where" against the MT's אהי; the chapter page only).
   - Fix: add entries for at least 13:8, 13:5, 14:4, 10:11 and 12:11, and cite the preserved scroll words.

4. **Major. 10:10, variants.json, claim about 4Q82.**
   - The `why` says 4Q82 "preserves 'bound' and the words around the phrase but its word for 'their iniquities' is restored".
   - The printout is `ואספו עליהם [עמים] [באסרם] [לשתי] [עונתם]`. "Bound" (באסרם), "two" and "iniquities" are all restored. Only "and they will be gathered against them" is preserved.
   - Fix: say that only the first words of the verse are preserved and the contested phrase is entirely restored.

5. **Major. 13:14, notes #98 and #99, the `ehi` reading.**
   - Note #98's `p` says "The first echoes Hosea, the second the Greek." Its `b` says Paul takes the "second line" from the Greek and changes "penalty" to "victory". These contradict each other. Also, the Greek's second line is "sting", which Paul uses in his own second question, not first.
   - No note says that Hebrew אֱהִי can be "where" (the Plain) or "I will be" (Vulgate "ero mors tua", Luther "ein Gift sein"). The Catholic and Lutheran cards depend on it, and 4Q78's איה at 13:10 is evidence for "where". The reader of the notes never learns that the two readings differ at the word level. The chapter-page claim that "the Greek, the Latin and the Syriac also read 'where'" at 13:10 is true for 13:10 only. At 13:14 the Latin reads "I will be".
   - Fix: rewrite the `p` line. Add a word note on אֱהִי at 13:14.

## Minor

6. **Verse-order and rule inconsistencies in the Plain.** The note at 14:1 states the rule "turn back" for repentance and "return" for a physical return. At 11:5 the second shuv ("refused to return") is repentance, so the rule is broken. It also mismatches the gloss "would not turn back". Fix the Plain or the rule.

7. **11:8, notes #64 and #100, term "pity".** The note says "pity" separates nichumim from rachamim "compassion". But the part-1 and book.json name Lo-ruhamah is glossed "Not Pitied", which is the rachamim root. The `p` of note #110 says "Not Shown Compassion" and its `b` says "Not Pitied". Make the gloss of the name one way everywhere, or drop the claim that "pity" is kept apart.

8. **14:4, note #111.** The note quotes "my anger has turned away from them". The Plain says "from him". The build only checks other books' quotes, so this was not caught.

9. **11:1, note #55.** "It is the only passage in the Old Testament that tells the Exodus from the side of a parent's love." This is an overclaim (Deut 1:31; 32:10-12; Jer 31:9). Soften it.

10. **14:8, note #117.** "The only tree the LORD says he is like in the Bible". This is unverifiable. Say "the only tree simile for the LORD in Hosea" or drop it. The topic page `jacob` says "the Bible's only prophetic treatment of Jacob as a model". Soften this the same way.

11. **14:5, note #114 and the gloss.** "A plant that blooms fast but has shallow roots" and the gloss "flower quickly" are unsupported. The Hebrew says only "bloom". Cut both.

12. **13:12, note #96.** "Some Jewish and Christian readers" take the stored guilt as kept for later forgiveness. No one is named and there is no source. Name the reader or drop it.

13. **13:2, variants.json `why`.** The sentence about the Greek verb being an imperative is fine. The Plain given as "Sacrifice human beings, for the calves have run out" is fine too. Only the lexical claim in finding 2 is the problem.

14. **13:4, variants.json `b`.** "A word bṣr in the first words that is unclear and may be a copyist's slip" is speculation. The printout shows «בצר שמים» as part of the plus. Either print the 4Q78 Hebrew plus as a reading of its own (it is the most important scroll witness in the part) or cut the speculation.

15. **14:8, variants.json.** The first reading is labelled "4QXIIg (4Q82), the start of the verse". 4Q82 preserves the second half, `אני עניתי ואשורנו אני`, which are exactly the disputed words, and agrees with the MT. Say so, and use it in the `why`.

16. **11:2 and 11:12 variants.** 4Q82 preserves "להם כן הלכו מפניהם" (11:2) and "ועם קדושים נאמן" (11:12) unrestored, both against the Greek. The entries do not say so. The brief asks to mention every scroll that preserves a place.

17. **Chapter 13 page, deep "Witnesses".** It says 4QXIIg preserves "the end of the chapter". The end of the chapter (13:15-16) is 4QXIIc. 4Q82 has 13:1, 6, 7, 8, 11-13. Also, 13:6 in 4Q82 is only "[קים]".

18. **Chapter 10 page, `X`.** It says Jerome's "renew your fallow ground" is a "phrase later preachers made famous". The famous phrase is the KJV/Finney "break up your fallow ground". Correct or drop it.

19. **Chapter 10 page, deep "Witnesses".** It says 4Q82 preserves "much of chapter 10, most of it with restored words". Much of 10:1-15 is preserved unrestored. Say what is restored where, and repair the "Judah will be silent" gloss (see finding 3).

20. **Antiphon, chapter 13 traditions card (Catholic).** "The Roman Office for Holy Saturday uses the Latin words as an antiphon." The antiphon O mors, ero mors tua is attested for Holy Saturday in medieval chant books (Cantus Database), but I could not confirm it in the current Liturgy of the Hours, which uses a different Benedictus antiphon on Holy Saturday. Write "the traditional Roman Holy Saturday Office". The "Modern Catholic study notes often add" sentence has no source behind it.

21. **Traditions cards, fairness.**
    - Resurrection 13:14: Reformed (Calvin on Hosea 13:14), Baptist and Pentecostal are absent. The Orthodox entry cites the paschal homily, which depends on 1 Cor 15:55 and not on Hosea, so it does not answer the card's question about the Hebrew.
    - Typology 11:1: the Lutheran entry credits the "literal sense as the base" to Luther's Preface to the Old Testament, which does not say that (it speaks of the swaddling-clothes and manger). The Orthodox entry cites "Ware" with no page or topic. The dispensational entry (Walvoord, *Matthew: Thy Kingdom Come*) generalizes "many dispensational teachers" from one author, and the "keeping Israel's promises distinct" gloss is the writer's. Hedge or source it.
    - gods-regret: the Lutheran entry gives Christology (Formula of Concord 8) and Fretheim, not the Lutheran answer to impassibility. "Most evangelicals hold the classical view" is unsourced.
    - church-and-state 8:4: the card is fair. The link to Romans 13:1 is a stretch, since Hosea 8:4 is about illegitimate usurpation. The card should say "Hosea does not address this directly".

22. **Chapter 11 page, `J`.** The haftarah ranges for Vayetzei (Sephardi Hosea 11:7-12:12, Ashkenazi 12:13-14:10 in Hebrew numbering) and the conversion to English numbers are correct as I checked them. The chapter 14 claim that the passage "ends the haftarah" for the Ashkenazi Vayetzei is also correct. Chapter 12 `J` should name the two ranges as chapter 11 does.

23. **Lectionary claim.** Hosea 14:2-10 is the first reading for Friday of the Third Week of Lent (confirmed), so "reads Hosea 14 in Lent" is true. Name the day.

24. **8:12, glosses.** "Pleaded with him for mercy" (12:4) in the Plain is "begged him for a blessing" in the gloss. Hebrew `chen` is "favor". Make Plain and gloss agree.

25. **12:4, 12:5 settings.** "At Bethel he found him" leaves the subject open. Note #75 handles it but the Plain could say "found us" or "found him" and not leave an unclear "he ... him".

26. **Chapter 12 settings.** One card (12:9-14) overlaps chapter 11's 11:12-12:14 card. Merge them or limit the first to 12:1-8.

27. **12:2, note #72.** "A similar lawsuit with both kingdoms is in Micah 6:1-8." Micah 6 is a lawsuit with "my people", not both kingdoms. Soften.

28. **13:1, note #86.** The sentence about Jehu's dynasty "which ended it" is garbled (it is unclear what "it" is). Reword.

29. **Terms.** "Luxuriant" is used both for boqeq (10:1) and ra'anan (14:8). Note #117 says the echo is deliberate; that is acceptable but not a fixed term. "Pity" is also used for the 13:14 `nocham`, which is also Lead's decision `nacham` "change his mind". The part never says why the noun forms stay "pity".

30. **Quote matching.** The NT quotes (Matthew 2:15, Luke 23:29-30, Revelation 6:16, 3:17, Romans 2:5; 1 Corinthians 15:55 and Hebrews 13:15 marked "my rendering from the Greek") are consistent with the site Plain or are labelled as the writer's. I found no mismatch there. Luke 23:30's order is reversed from Hosea 10:8; note #46 says so correctly.

## Cross-part mismatches

- **book.json outline (other reviewer to fix).** For 8-14:
  - "11:1-11: When Israel was a child I loved him; how can I give you up?". The Plain says "youth" and "give you away".
  - "14:1-9: ... I will heal their unfaithfulness". The Plain says "turning away". "Take words with you" is "Bring words with you" in the Plain.
  - "10:1-15: sow justice and reap loyal love". The Plain says "righteousness" in 10:12.
  - "13:1-16: death and the grave". The Plain says "Sheol".
- **Checked and consistent with 01-07.** "Case" at 4:1 and 12:2; "King Jareb" at 5:13 and 10:6; the Shameful Thing at Jeremiah 3:24 and Hosea 9:10; 6:4 and 13:3; 12:9 and 13:4; 8:13 and 9:9; "turn back" at 3:5, 5:4, 6:1, 12:6, 14:1.
- book.json `facts` names "4QXII-c, -d and -g". Part 8-14 shows only 4QXIIc and 4QXIIg, so -d is not used here. Check against 01-07.

## Things I verified and found correct

- Shabbat Shuvah and Hosea 14; Yoma 86b on 14:1; Nazir 23a and Horayot 10b on 14:9; 1QS 9:4-5 on "offering of the lips".
- Salamanu of Moab in the tribute lists of Tiglath-pileser III; Jerome's Latin readings (calves of our lips, "city" at 11:9, foam at 10:7); Luther's 1545 rendering of 13:14.
- Greek readings quoted from Swete throughout, including the long plus at 13:4 and 14:3 "fruit of our lips".
- Verse-number maps (11:12, 13:16, 14:1-9), and the Qere readings at 8:12 and 10:10 (apart from finding 1).
- The 13:14 question-form decision is defensible and presented fairly: threat is the likeliest reading in context, and the promise reading and the Greek and Latin tradition are laid out.
- Most drift against the major English versions is forced by the Hebrew. A few verses (10:12, 11:3, 12:6, 14:5) keep a familiar shape and could be varied if there is time.

## Fixes applied

Counts: 30 findings plus cross-part items. Fixed 26, partly 3 (6 resolved by changing the Plain, 21, 29), declined 1 (25). Plain verses changed: 8:12, 11:5, 12:4, 13:2. Variants 20 to 28 entries (new: 10:1, 10:6, 10:11, 11:7, 12:11, 13:5, 13:8, 13:10, 14:4; 13:4 gains a 4QXIIc reading).

1. Fixed. 8:12 variant now says the Ketiv and Qere verb is the same (spelling only) and only "ten thousand / many things" differs; Plain rebuilt from the literal line as "Though I write for him the many points of my law, / they are counted as something foreign" (imperfect kept, shape changed); note 16 and the variant `why` rewritten.
2. Fixed. The "nashaq II" claim is removed from the 13:2 variant (it now says the Hebrew behind the Greek "run out" is unclear, and cites only Psalm 78:9 for the other root); note 87 now sets out three readings clearly; the Plain drops the invented "Let" and is a descriptive sentence ("Those who sacrifice human beings kiss calves"), with the choice stated in the note.
3. Fixed. New variant entries at 13:8 (4Q78 "like lions of the forest" against MT "like a lioness", Greek "young lions of the forest"; note 93 corrected, since it was a different word, not a plus), 13:5 (4Q78 preserves "I knew you"), 14:4 (4Q78 preserves meshuvatam; Greek "dwellings"), 10:11 (4Q82 preserves "Judah will plow"; Greek "I will keep silent about Judah"), 12:11, 10:1, 10:6, 13:10 (4Q78 'ayyeh), and 11:7. Chapter pages 10, 12, 13 and 14 corrected to match ("Judah will be silent" gone).
4. Fixed. 10:10 `why` now says 4Q82 keeps only "and they will be gathered against them"; "peoples", "bound", "two" and "iniquities" are restored and not cited. Re-checked against dss.py.
5. Fixed. Note 98 `p` and `b` no longer contradict (Paul's "sting" is from the Greek's second line; "victory" replaces "penalty"; KJV/later manuscripts note added). New word note on אֱהִי ("where" or "I will be") at 13:14; note 99 now anchors on the first question and points to it; the chapter 13 witnesses text says the Greek and Latin read "where" at 13:10 only and the Latin reads "I will be" at 13:14. The Syriac claim was dropped (not verified).
6. Fixed by changing the Plain: 11:5 now ends "because they refused to turn back", matching the stated rule and the gloss; notes 60 and 115, the gloss and the Assyria topic text follow.
7. Partly. The Plain uses "compassion" for the rachamim root, so the note 64 claim that "pity" is kept apart is true in this book; the mismatch was note 110's "Not Pitied", now "Not Shown Compassion" like its `p`. book.json (01-07 side) still has "Not Pitied" in the 1:1 outline line: reported to the lead.
8. Fixed. Note 111 now quotes "from him".
9. Fixed. Note 55 softened to "Few passages ... compare Deuteronomy 1:31 and 32:10-12".
10. Fixed. Note 117 now "the only tree the LORD is compared to in Hosea"; the jacob topic text no longer says "the Bible's only".
11. Fixed. The shallow-roots claim is cut from note 114 and the gloss "flower quickly" is now "flower, like a lily".
12. Fixed. The unnamed "some Jewish and Christian readers" is removed from note 96.
13. Nothing further (covered by 2).
14. Fixed. The speculation about a copyist's slip is removed from the 13:4 variant; 4Q78's preserved plus is now printed as its own reading, with the bṣr form described as unclear.
15. Fixed. 14:8 variant: 4Q82 preserves the disputed "I answered and I will watch him" and agrees with the MT; the `why` says so.
16. Fixed. 11:2 and 11:12 variants now cite what 4Q82 preserves unrestored.
17. Fixed. Chapter 13 witnesses now list 4Q78 (13:3-10, 13:15-16) and 4Q82 (13:1, 7-8, 11-13) as in the printout.
18. Fixed. Chapter 10 X now names the KJV "break up your fallow ground" as the famous form.
19. Fixed. Chapter 10 witnesses say what is preserved and what is restored, and "Judah will be silent" became "I will keep silent about Judah".
20. Fixed. The Holy Saturday antiphon is hedged as attested in medieval Roman chant books, not checked against the present Liturgy of the Hours; the unsourced "modern Catholic study notes" sentence is removed and the dependence on 'ehi is stated.
21. Partly. Resurrection card: Reformed added from Calvin's lecture (checked: Calvin reads the lines as conditional and part of the threat); Orthodox rewritten to say the homily depends on Paul. Baptist and Pentecostal are not added: no source was found for a distinct view, and the Evangelical entry (Hubbard, Stuart, Garrett) covers them. Typology card: Lutheran claim replaced by what the Preface says; Orthodox "Ware" removed; Dispensationalist reduced to "some", gloss removed. gods-regret: Lutheran entry now says the confessions do not address impassibility; "Most evangelicals" became "Many". church-and-state: the question now says Hosea does not address government in general.
22. Fixed. Chapter 12 J names both haftarah ranges.
23. Fixed. Chapter 14 X names the Friday of the Third Week of Lent and the Hebrew and English ranges.
24. Fixed. 12:4 Plain "pleaded with him for his favor" and the gloss agree (this keeps the Genesis 26-36 quote "wept and pleaded with him" valid).
25. Not fixed. "He found him" mirrors an open Hebrew subject; note 75 now says so (and that the consonants can be read "found us"). Naming "God" in the Plain would decide a debated point.
26. Fixed. Chapter 11's second setting now covers 11:12-12:8; chapter 12's covers 12:9-14.
27. Fixed. Note 72 says Micah 6 addresses "my people".
28. Fixed. Note 86 reworded (Jehu wiped out Ahab's Baal worship, 2 Kings 10:28).
29. Partly. Note 100 now says why the nouns stay "pity" while the verb is "change his mind". "Luxuriant" is left as a deliberate echo (note 117 says so); it is not a fixed term.
30. Nothing to fix.
Cross-part: book.json 8-14 outline lines changed ("righteousness", "youth", "give you away", "Sheol", "bring words", "turning away"). 4QXII-d is not used in 08-14. Amos 3:2 quote in note 89 updated to the current Amos Plain.
