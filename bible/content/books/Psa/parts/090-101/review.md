# Hostile review: Psalms 90–101 (part 090-101)

Reviewer's scratch: /tmp/claude-0/-home-user/73d75830-9c6c-5165-83cd-5d43110d5bc5/scratchpad/psa-rev-090-101/

## Verdict

This is a strong part. The Plain English Translation is faithful to the Leningrad text verse by verse. The title forms follow terms.json ("A psalm.", "Of David. A psalm.", "A psalm for the thank offering."). Every psalm has a settings card with `readers`. Every summary gives the Greek number. The numbering note appears once, at 90:0. Psalm 96 reuses the site's Plain English Translation of 1 Chronicles 16. The from-memory items I could check mostly hold up:

- the Targum readings at 90:3, 90:12, 90:17, 92:1, 92:15, 101:1 and 101:2 (checked against Cook's translation);
- the 11QPs-a "Hallelujah" at 93:1;
- the 11Q11 "Of David" at Psalm 91;
- the 1789 American Venite;
- 99:5 and 99:9 in the Torah service;
- Tamid 7:4, Rosh Hashanah 31a and Shevuot 15b;
- Kol Nidre and 97:11;
- Vexilla regis.

`node tools/build.js --check Psa/090-101` gives 0 errors and 0 warnings.

The weak points are these:

- NIV/ESV drift survives in about a dozen verses. Several of them the drift log marks "changed" or "independent" when the final text is still close.
- One Qumran claim (4QPs-k heading for Psalm 99) rests on a reconstruction, not a reading.
- The "from the tree" deep section misstates the witnesses.
- One Greek claim in a note (the Verona Psalter "therefore" at 95:10) is unverified.
- There is a scatter of small factual, liturgical and cross-reference errors.

Counts: critical 0, major 4, minor 21.

## Findings

### 1. Major: NIV/ESV drift still present (plain.txt)
I compared every verse of 90–101 against the NIV and ESV in my head. These verses keep a run of five or more words in another version's order, or its interpretive choice, where the Hebrew does not force it:
- **94:23**: the second and third lines follow the ESV almost word for word: "wipe them out for their ..." and the whole last line "The LORD our God will wipe them out". The Hebrew is *yatsmitem yatsmitem YHWH Eloheinu* ("he will destroy them, he will destroy them, the LORD our God"). "Wipe them out" is the ESV's choice for *tsamat*. The drift log calls this verse "ok, independent wording", which is wrong.
- **101:8**: "Every morning I will silence all the wicked of the land" has the NIV's shape and its interpretive "put to silence" for *atsmit*. The same verb at 101:5 is "put an end to", so the part is also inconsistent with itself. The log says "changed".
- **101:4**: "I will have nothing to do with evil" is the NIV's idiom, a seven-word run. The Hebrew is literally "evil I will not know". The log says "changed".
- **99:7**: "He spoke to them from a pillar of cloud" reorders the Hebrew ("in a pillar of cloud he spoke to them") exactly as the NIV does. The second line keeps the NIV's frame "... and the [x] he gave them". The log says "changed".
- **95:4b**: "and the heights of the mountains are his too" matches the ESV in six words ("the heights of the mountains are his"). Only "too" differs.

Fix: rebuild these five from `node tools/literal.js` with a different sentence shape. For example, 94:23 could be "He brings their evil back on their own heads; / for their wrongdoing he will destroy them; / the LORD our God will destroy them." Use one rendering of *tsamat* in 94:23, 101:5 and 101:8 (for example "destroy" or "make an end of"). Then correct the drift log so it says what was actually done. See finding 25 for the smaller cases.

### 2. Major: variants.json 99:1, and chapter 99 `views.H`: 4QPs-k "A psalm of David" is not a reading
The variant gives "4QPs-k (4Q92) ... Hebrew heading 'A psalm of David,' as reported" as a witness with the Greek. 4Q92 preserves 135:6–16 and then 99:1–2, 5. In the English DSS Bible pages based on the Abegg, Flint and Ulrich text, the heading is printed in italics, which means "cannot be seen in the scroll". The study of Qumran psalm headings in the NWU repository (repository.nwu.ac.za, "The headings of the psalms in the Dead Sea scrolls") puts 4QPs-k for Psalm 99 under Qumran = MT against the LXX. At most, the space before 99:1 may have held a heading. The variant's "why" builds on the claim: "The Qumran fragment shows that the Greek title was not invented by the translators: some Hebrew copies had it." That conclusion has no footing.

Fix: drop 4QPs-k from the reading, or say "a heading is sometimes restored in the gap before 99:1 in 4QPs-k; no letters survive". Delete the sentence about Hebrew copies. Change 99 `views.H` ("the Greek and a Qumran fragment (4QPs-k) read ...") to the Greek alone.

### 3. Major: chapter 96 deep "The Lord has reigned from the tree": the witness list is wrong
The deep section says: "Of the Greek copies, only the first hand of the Verona Psalter ... has *apo xylou*, and a later corrector marked it." The variant's `w` repeats the corrector claim. Eberhard Nestle's study of the reading (Expositor, 7th series, vol. 1) names three witnesses: the Greek-Latin Verona Psalter, the Greek minuscule 156 (with an interlinear Latin), and the Sahidic Coptic version (citing Brightman). Rahlfs' apparatus also gives more than one witness. I found no support for the "later corrector".

Fix: name the witnesses as "the Verona Psalter, the Greek minuscule 156 and the Sahidic version, with the Old Latin and Justin and Tertullian". Remove the "only" and the corrector unless you can cite them. In the variant `w`, also add the Sahidic and 156. The conclusion (a Christian addition; follow the MT) stands.

### 4. Major: notes.json 95:10 "Forty years in Hebrews": the Verona Psalter "dio" is unverified
The note says: "The added 'therefore' (*dio*) also stands in the first hand of the Greek Verona Psalter, so it may come from a Greek text Hebrews knew." I could not confirm this in any source. The commentaries I know (Attridge, Lane) treat *dio* as Hebrews' own addition. Where the Verona Psalter differs from the LXX in New Testament quotations, it is usually because it has been made to match the New Testament. Then it would be evidence of copying from Hebrews, not of a source for Hebrews. The brief requires that Greek cited from memory be verified or the claim softened.

Fix: cite Rahlfs' apparatus with the siglum if it is there. Otherwise cut the sentence, or write "Hebrews adds 'therefore' (*dio*)". The last sentence ("Some scholars connect the forty years to the forty years since Jesus' death") needs a name, for example Lane or Attridge, who discuss it.

### 5. Minor: variants.json 92:10: Gallican Latin misquoted
The second reading's `w` gives "Jerome's Gallican Psalter and his Psalter from the Hebrew (senecta mea in oleo uberi)". The Gallican, following the Greek *elaion/eleos* confusion, reads *et senectus mea in misericordia uberi*. Only the iuxta Hebraeos has *senecta mea in oleo uberi*. The writer's own scratch file (psa-090-101/vulg.txt, line 44) shows both. Fix: split the two Latin forms. Optionally, note that the Gallican's "in rich mercy" comes from reading *eleos* for *elaion*.

### 6. Minor: notes.json 101:2 "A puzzling question": broken cross-reference
"On *tamim*, 'blameless,' see the note on 18:23." Part 018-030 has no note at 18:23. The *tamim* notes are at 15:2 ("Wholehearted") and 7:8. Fix: "see the note on 15:2". Note also that 15:2 renders *holekh tamim* "walks with a whole heart" while 101:6 has "walks the blameless way". terms.json allows either by context, but the 101:6 note says these are "the same words", so a reader will see two renderings. Add a few words to the note about why 101 uses "blameless".

### 7. Minor: quotations that do not match the site's Plain English Translation
- 91:3 note: Psalm 124:7 "the trap is broken, and we escaped." The Plain English Translation reads "The trap snapped, / and we got loose."
- 94:11 note: Job 5:13 "he catches the wise in their cleverness." The Plain English Translation reads "He snares the wise in their own cunning".
- 95:10 note "Disgust": Job 10:1 "My soul is sick of my life." The Plain English Translation reads "My whole being is sick of living."
- topics.json `cherubim`: "the LORD of armies, who sits on the cherubim" (1 Samuel 4:4). The Plain English Translation and terms.json have "the LORD of Armies".

The build misses these because the reference comes before the quotation. Fix: use the site's wording.

### 8. Minor: notes.json 95:11 "An oath and a rest": the KJV claim is wrong for the psalm
"The KJV and Hebrews' Greek keep the 'if'." KJV Psalm 95:11 reads "that they should not enter into my rest", with no "if". The KJV keeps the "if" only in Hebrews 4:3 and 4:5. Fix: "The KJV of Hebrews 4:3, 5 and the Greek keep the 'if'."

### 9. Minor: notes.json 90:12: the 1662 burial service does not read Psalm 90 "at the grave"
In the 1662 Book of Common Prayer, Psalms 39 and 90 are read "after they are come into the Church", before the procession to the grave and the committal. Fix: "reads the whole psalm in church before the burial". Chapter 90 `views.L` ("sets it in the burial service") is fine.

### 10. Minor: chapter 93 `views.L`: Sunday Lauds is Roman, not Benedictine
"at Sunday Lauds in the Benedictine tradition". Rule of Benedict 12 sets Sunday Lauds as Psalms 66, 50, 117 and 62 (Greek numbers), the Benedicite and the Laudate psalms, so this psalm is not among them. Psalm 92 in the Greek count (*Dominus regnavit*) opened Sunday Lauds in the Roman Breviary before 1911. Fix: "the Roman Breviary". On the same line, "the feast of Christ the King" is true of the current Roman lectionary (Year B) and should say so.

### 11. Minor: notes.json 100:0 and chapter 100 `views.L`: whose custom?
"*Mizmor letodah* is said in the daily morning service, but not on Sabbaths and festivals, on the eve of Yom Kippur or during Passover". This is the Ashkenazi rule. Rites differ, and some Sephardi communities say it on the Sabbath. The parenthesis "(its loaves included leavened bread)" explains Passover only. The Sabbath and festival omission is usually explained by the fact that a private thank offering was not brought on those days. Fix: "In the Ashkenazi rite ..." and give the two reasons separately. The brief listed this as a from-memory item.

### 12. Minor: notes.json 96:1 and chapter 96 deep "Psalm 96 and 1 Chronicles 16": one difference is missing
Both lists of differences leave out that Chronicles has no "He will govern the peoples with fairness" (96:10c). 1 Chronicles 16:30–31 goes from the firm world straight to the heavens' gladness and "The LORD is King!". Fix: add it. The deep section already lists the reorder.

### 13. Minor: plain.txt 96:7–8 against 29:1–2: the same Hebrew is rendered two ways
*Havu laYHWH ... kavod va'oz; havu laYHWH kevod shemo* is word for word the same in 29:1–2 and 96:7–8. Part 018-030 has "Give to the LORD ..."; this part (with 1 Chronicles 16:28–29) has "Give the LORD ...", and 96:7a adds "what is his", which the Hebrew lacks. This is one of the brief's known cross-part items. Fix: agree on one form with 018-030 and the 1 Chronicles writer. If "what is his" stays (it is in 1 Chronicles 16:28), add a short note that it fills out *havu*, "give, ascribe", and that 29:1 reads without it.

### 14. Minor: plain.txt 92:7: "it" has no antecedent
"... but it is to be wiped out forever." The Hebrew *lehishamdam* means "for them to be destroyed", referring to the wicked and the wrongdoers. As written, "it" seems to mean the grass or nothing at all. Fix: "but only to be wiped out forever" or "but they will be wiped out forever".

### 15. Minor: notes.json 95:3: unsupported Greek claim
"Some Greek manuscripts here read 'over all the earth.'" I know of no such reading at Greek 94:3, and Brenton's text of Vaticanus reads "over all gods". It may be confused with 97:9. Fix: cite the manuscript or cut the sentence.

### 16. Minor: notes.json 94:14 against variants.json 95:4: inconsistent description of the Greek
The note says "The Greek of Psalm 95:4 adds the same words". The variant says only "Codex Vaticanus and a corrector of Sinaiticus" have them, against Sinaiticus' first hand and Alexandrinus. Fix: say "Some Greek manuscripts (Codex Vaticanus)" in the note.

### 17. Minor: notes.json 92:15: the claim of "the same words" overstates the match
"Psalm 92:15 uses the same words: *yashar*, 'straight,' *tsur*, 'rock,' and *ein avel*, 'no wrong.'" Deuteronomy 32:4 has *ve'ein avel*. Psalm 92:16 (Hebrew) has *velo-avlatah bo*, a different form (and has a Ketiv/Qere, see texts/auto). Fix: "the same three ideas, and nearly the same words (*avel* / *avlatah*)".

### 18. Minor: chapter 93 `sum`, and book.json: "The LORD is King!" psalms listed as 93; 95–99
Only 93, 97 and 99 open with *YHWH malakh*, and 96:10 has the cry inside the psalm. Psalm 95 says "a great King" and 98 "the King, the LORD". The chapter 93 deep section gets this right. Fix the summary: "the first of the psalms of the LORD's kingship (93–99)". For the 001-017 owner of book.json: it writes "the LORD is king" in lower case, where the Plain English Translation has "King". Its outline labels for 90, 91 and 93 ("teach us to number our days", "Under the shadow of the Almighty", "robed in majesty") are the familiar KJV/ESV/NIV wording, not this site's Plain English Translation ("count our days", "in the shadow", "dressed in majesty").

### 19. Minor: variants: Greek 90:3 is missing
Greek 89:3 reads "Do not turn a human being back to lowliness" (μὴ ἀποστρέψῃς ἄνθρωπον εἰς ταπείνωσιν), as if from *al tashev* for *tashev*. This turns the statement into a plea, and Jerome's Gallican follows it (*ne avertas*). The KJV follows the Hebrew, but the reading changes the sense and belongs in variants.json, or at least in the 90:3 note.

### 20. Minor: Jewish and Christian readings that are missing
- 95:7 "Today, if you would only listen": Bavli Sanhedrin 98a (Rabbi Joshua ben Levi asks the Messiah "When?" and is told "Today", explained by this verse) is the best-known Jewish reading of the line. It belongs in the 95:7 note or in chapter 95 `views.J`. The current "Rashi takes 'today' as 'in this world'" is unsourced. Check it or replace it.
- 99:5 "bow low at the footstool": Augustine on this verse (Enarrationes in Psalmos 98.9, from the Latin *adorate scabellum pedum eius*) says that the footstool is Christ's flesh, which no one eats without first adoring it. It is a standard text in Catholic and Protestant debate over adoring the Eucharist. It deserves a note, and perhaps a traditions card with `top` "lords-supper" if such a page exists.

### 21. Minor: chapter 91 traditions: the Lutheran source key does not match the claim
The Lutheran view cites "the Morning and Evening Prayers of the Small Catechism" but is keyed to `luther-large-catechism`. Fix: add or use a Small Catechism key.

### 22. Minor: variants.json 97:7 `b`: "Those exact words are in the Greek of Deuteronomy 32:43"
In the main Greek text of Deuteronomy 32:43, the line with "bow down to him" has "all sons of God". "All angels of God" stands in the next line. The exact wording of Hebrews 1:6 is found in the Odes (Ode 2:43) and in some manuscripts of Deuteronomy. Fix: "nearly the same words; the exact form is in the Greek Ode of Moses (Odes 2:43)".

### 23. Minor: details that need a source or softer wording
- Chapter 99 `views.J`: does Rashi on 99:8 mention "Samuel's failure with his sons"? I could not confirm it. Cite Rashi's words or drop the example.
- Chapter 99 `views.L`: "In Christian morning prayer it is often linked with the Sanctus" is vague and unsourced. Cut it or name the rite.
- Chapter 94 `views.L`: "Its harsh opening has made it rare in Christian liturgies". The Liturgy of the Hours keeps Psalm 94 (only 58, 83 and 109 and some verses are left out), and the Rule of Benedict sings the whole Psalter weekly. Fix: say it is rarely read on Sundays, or cut the sentence.
- Note 96:13: "(Radak on 99:2 cites this)" is odd in a note on 96:13. Cite Radak on 96:13, or move the remark.

### 24. Minor: notes.json 90:0 numbering note: "the Greek gives most of them one"
In Rahlfs, all seven of Psalms 91, 93, 94, 95, 96, 97 and 99 have Greek titles. Fix: "the Greek gives each of them one".

### 25. Minor: smaller drift cases (plain.txt)
These are close but partly forced by the Hebrew. Reword where it is easy:
- 98:5: "Make music to the LORD on the lyre, / on the lyre with the sound of singing" is the NIV frame with only the instrument swapped. *Zimrah* could be "melody" or "song".
- 97:2: "and thick darkness surround him" is the NIV's five-word run, including its verb.
- 90:9: "All our days slip away under your fury" is the NIV's sentence with two synonyms, and like the NIV it drops *ki*, "for".
- 92:14: "they will stay plump and green" follows the NIV's "they will stay ... and green".
- 93:1 and 96:10 (and 1 Chronicles 16:30): "Yes, the world is set firm" begins with the ESV's "Yes, the world is". *Af* could be "Surely" or "Indeed". This needs coordinating with the 1 Chronicles writer.
- 91:14: "clings to me in love" follows the ESV's interpretive "in love".
- 94:22: "the rock where I take shelter" is close to the NIV's last line.

The verses I spot-checked and found clean include 90:1–2, 90:4, 90:10, 90:12, 90:17, 91:1, 91:4–5, 91:11, 91:15–16, 92:1, 92:4–5, 93:5, 94:2, 94:9, 94:12, 95:6, 95:10–11, 96:9, 96:11, 97:7, 97:10, 98:1, 99:3–4, 100:2–4, 101:5–7. Matches there are forced by the Hebrew ("For he is our God, and we are the people", "The LORD, he is God", "Holy is he").

## Checked and found sound (no action)
- Targum: 90:1 heading (the wilderness sin), 90:3 "Repent, O sons of men", 90:12 "except the prophet", 90:17 "pleasantness of the Garden of Eden", 92:1 Adam, 92:15 sons in old age, 101:1 kindness or judgment, 101:2 "house of my instruction" (Cook, via Sefaria).
- 11QPs-a reads "Hallelujah" at the head of Psalm 93 (NWU headings study). 11Q11 has "Of David" (reconstructed) before Psalm 91.
- The 1789 American Venite (95:1–7 with 96:9, 13), Kabbalat Shabbat (95–99, 29), 99:5 and 99:9 in the Torah service, 97:11 before Kol Nidre, Vihi No'am with Psalm 91 on Saturday night.
- Tamid 7:4, Rosh Hashanah 31a, Shevuot 15b, Shabbat 119b, Chagigah 12a, Avot 5:4 and 5:21, Mishnah Rosh Hashanah 3:3.
- Jubilees 4:30, Barnabas 15:4, the Ravenna Archbishop's Chapel mosaic, CCC 336, Calvin Institutes 1.14.7, Westminster Confession 21.7–8, Watts 1719, Kethe 1561 and Bourgeois.
- The Greek readings at 90:1, 90:5, 90:8, 90:9, 90:10, 91:2, 91:3, 91:6, 93:3 (Vaticanus lacks the third line, as in Brenton), 90:17 (Vaticanus lacks the last line, as in Brenton), 96:5, 96:9, 97:7, 97:11, 99:1, 100:3 and 101:5.
- Fairness: Psalm 94 is handled as a vengeance psalm with Zenger's and Mendenhall's readings and the `curse-psalms` topic. Psalm 101's harsh vows are read three ways. Mowinckel, Kraus and Wilson/Howard are given fairly. The `spec` box at 95 is labeled and modest.

## Fixes applied

- 1 (drift): rebuilt 94:23, 101:8, 101:4, 99:7 and 95:4 from `literal.js` with new sentence shapes. *Tsamat* is now "destroy" in 94:23, 101:5 and 101:8. The drift log is corrected and has a re-audit section.
- 2: removed 4QPs-k as a witness at 99:1. The variant now says a heading is sometimes restored in the gap but no letters survive. Deleted the "some Hebrew copies had it" sentence. Chapter 99 `views.H` now cites the Greek alone.
- 3: the corrector claim is verified. Swete's apparatus reads "+ απο ξυλου R* (improb Rᵃ)", so I kept it and cited it. Removed "only". Added minuscule 156 and the Sahidic, reported by Nestle, to the deep section and the variant `w`. New source key `nestle-from-tree`.
- 4: verified. Swete's apparatus at Greek 94:10 reads "προσωχθισα] pr διο R*". The note now cites it and adds the other explanation, that the Psalter may have been made to match Hebrews. The forty-years remark is now credited to Lane and Attridge.
- 5: split the two Latin readings at 92:10. The Gallican "in misericordia uberi" is its own reading, with the *eleos*/*elaion* explanation.
- 6: changed the cross-reference to 15:2. The 101:6 note explains that *derekh*, "way," is why this verse has "the blameless way".
- 7: all four quotations now use the site's Plain English Translation (124:7, Job 5:13, Job 10:1, 1 Samuel 4:4).
- 8: the 95:11 note now says the "if" is kept by the Greek and by the KJV of Hebrews 4:3 and 4:5.
- 9: the 90:12 note now says the 1662 service reads the psalm in church before the burial.
- 10: chapter 93 `views.L` now gives the Roman Breviary before 1911 and the current Roman lectionary, Year B.
- 11: the 100:0 note and chapter 100 `views.L` now say "Ashkenazi", give the two reasons separately, and add "other rites differ".
- 12: added the missing 96:10c difference to the 96:1 note and to the chapter 96 deep section.
- 13: per the lead decision, 96:7–8 read "Give the LORD". "What is his" is not in the Hebrew, so I dropped it from 96:7. The coordinator has been told that 1 Chronicles 16:28 must match.
- 14: 92:7 now reads "but only to be wiped out forever."
- 15: verified in Swete's apparatus: ℵc.a, A and T read "over all the earth". The 95:3 note now names Alexandrinus and the Sinaiticus corrector.
- 16: the 94:14 note now names Codex Vaticanus.
- 17: the 92:15 note now says "the same three ideas in nearly the same words", naming *avlatah* and *avel*.
- 18: fixed the chapter 93 summary. The book.json items are left to the 001-017 owner, as the review asks.
- 19: added a variant at 90:3: the Greek and Gallican "Do not turn ... to lowliness".
- 20: added Sanhedrin 98a to the 95:7 note and to chapter 95 `views.J`. Rashi's "in this world" is checked in Rashi, so it stays. Added an Augustine footstool note at 99:5 (top `lords-supper`) and a line in chapter 99 `views.X`. I made no traditions card: a note seemed enough.
- 21: added the source key `luther-small-catechism` and used it for the Lutheran view on the chapter 91 card.
- 22: the 97:7 variant now says "nearly the same words" and gives the exact form in Odes 2:43.
- 23: Rashi on 99:8 does name Samuel's sons (checked), so it stays and is cited as Rashi on 99:8. Cut the Sanctus sentence from chapter 99. Rewrote the line in chapter 94 `views.L`. Removed the Radak aside from the 96:13 note.
- 24: the numbering note now says the Greek gives "each of them" a title.
- 25: reworded 98:5, 97:2 (first line only; the second line stays as the 89:14 Plain English Translation), 90:9, 92:14, 91:14 and 94:22. 93:1 and 96:10 now read "Surely the world is set firm", and 1 Chronicles 16:30 must follow.
- Lead decisions:
  - Yah: 94:7 and 94:12 now read "Yah", with a note at its first use (94:7).
  - Selah: none occurs in this part.
  - The Greek: variant witness strings now say the main codices agree, as checked in Swete. Readings found in one codex only name that codex (90:17, 93:3, 95:4).
  - From memory: no reader-facing "from memory" text remains.
  - Witnesses: the checked witnesses are stated once, in a chapter 90 deep section.
