# Hostile review: Psalms 81–89 (content/books/Psa/parts/081-089/)

Reviewer read STYLE.md, PLAN.md, tools/brief-psa.md, every file in this part, the parts of book.json that touch Psalms 81–89, `node tools/literal.js Psa 81`–`89`, texts/auto/Psa.json for these psalms, and the matching verses in the other Psalms parts. `node tools/build.js --check Psa/081-089` reports 170 verses, 148 notes, 28 variants, 58 glosses, 9 chapter pages, 18 topic contributions, 0 errors and 0 warnings.

## Verdict

This is a strong part. The Plain English Translation is built from the Hebrew. It keeps the hard places hard (81:5, 87:1–7, 88:15, 89:44, 89:47, 89:50) and flags them in notes. I found no drift toward the NIV or ESV wording. Every psalm has a settings card with `readers`, every summary gives the Greek number, and the Hebrew numbering note appears once (81:0). The royal and lament material in 82 and 89 is fair to Jewish and Christian readers alike. The three traditions cards deal with real disagreements.

I checked most of the facts cited from memory, and they hold:
- the Corpus Christi Introit *Cibavit eos* (81:16);
- the Byzantine Holy Saturday "Arise, O God" with the bay leaves (82:8);
- Exodus Rabbah 19 on "I will make him firstborn" (89:27; Gill cites Shemot Rabbah 19 for it);
- Bavli Ketubot 75a on Psalm 87, though it cites 87:5, not 87:6 (see finding 11);
- the Catholic lectionary use of Psalm 89 at the Christmas Vigil and on St Joseph's day, and the BCP Christmas psalms;
- the Mishnah Tamid 7:4 weekday cycle and Avot 3:6;
- the omission of 58, 83 and 109 from the Liturgy of the Hours;
- Kathisma 11 and the Hexapsalmos;
- Monday and Friday Night Prayer;
- Berakhot 4b and 64a, Sotah 36b, Rosh Hashanah 10b–11a, Avodah Zarah 5a, Bava Batra 15a, Mishnah Sotah 9:15 and Genesis Rabbah 8:5;
- Herodotus 1.159, Mozart K. 222 and Brahms.

The real weaknesses are four:
- The part's textual base leaves out the Dead Sea and Masada evidence. One Masada scroll covers 81–85.
- One Greek variant (83:1) is described wrongly.
- The Jerome claim at 89:2, a known cross-part item, is unverified, and the argument for the reading leans on it.
- A cluster of smaller problems: consistency with the other parts, cross-reference promises that lead nowhere, and source keys.

Count: 0 critical, 3 major, 22 minor.

## Findings

### 1. Major: the Dead Sea Scrolls and Masada witnesses are missing (variants.json, sources.json, whole part)
The brief says: "4QPs fragments and the Masada copy are also witnesses ... Say whether you checked each witness yourself." This part never mentions a scroll copy of Psalms 81–89. Its only scroll citations are 11QMelchizedek and the Deuteronomy 32:8 reading. Yet:
- the Masada Psalms scroll MasPs-a (Mas 1e) preserves roughly Psalms 81:2–85:6. That is most of this part's first five psalms, and it is generally close to the Masoretic Text;
- 4QPs-e (4Q87), and other 4QPs fragments, preserve parts of Psalms 76–89;
- 4Q236 (often called 4QPs89 or 4QPs-x) is a short, divergent copy of Psalm 89:20–31. Skehan argued it is an early, shorter form of the oracle. That bears directly on the deep section "Psalm 89 beside 2 Samuel 7" and on the date debate (Clifford and Veijola).

The writer defined `talmon-masada` (Talmon, "Hebrew Fragments from Masada", Masada VI) in sources.json and never used it. That suggests the Masada evidence was planned and then dropped.

**Fix:**
- Check Abegg, Flint and Ulrich (`abegg-dssb`) and DJD for 81–89.
- Add a note (on 81:0 or 89:0) that names MasPs-a, 4QPs-e and 4Q236 and says what they show. If MasPs-a agrees with the Masoretic Text through 81–85, say so; agreement is evidence too.
- Add a variant wherever a scroll differs in meaning. 4Q236 at 89:20–31 at least deserves a note on the chapter page.
- Mark each witness "checked myself" or "as reported in ...".
- Cite `talmon-masada`, or delete the key.

### 2. Major: the 83:1 Greek is described as "an extra line", but it is a different reading of the same word (variants.json 83:1; notes.json 83:1)
The variant's title says "An extra line in the Greek". Its `p` says the Greek begins with a question "not in the Hebrew", and its `why` says the translator "kept both meanings". The note says "The Greek adds a question at the start".

The Greek (Psalm 82:2) has three clauses, and so does the Hebrew: ὁ θεός, τίς ὁμοιωθήσεταί σοι; μὴ σιγήσῃς μηδὲ καταπραΰνῃς, ὁ θεός. Here τίς ὁμοιωθήσεταί σοι renders אַל־דֳּמִי־לָךְ (read from דמה, "be like"). μὴ σιγήσῃς renders אַל־תֶּחֱרַשׁ, and μηδὲ καταπραΰνῃς renders אַל־תִּשְׁקֹט. Nothing is added, and nothing is "kept both" ways.

**Fix:**
- Retitle the variant, for example "'No rest for you' or 'Who is like you?'".
- Rewrite `p`, `why` and the note to say the Greek read *domi* as "likeness" in place of "silence". The rest of the verse matches.

### 3. Major: 89:2, the claim that Jerome's Psalter from the Hebrew reads *dixisti*, is unverified, and the argument leans on it (variants.json 89:2)
This is one of the known cross-part items. The variant lists "Gallican Psalter and Jerome's Psalter from the Hebrew, both *dixisti*". Its `why` then argues that "Jerome found 'you said' in his Hebrew copy too". The Gallican *dixisti* is secure, since it follows the Greek εἶπας. The *iuxta Hebraeos* reading is a different matter. I could not confirm it from an accessible edition, and I recall it as possibly *dixi*. If Jerome's Hebrew text has the first person, the `why` sentence is wrong and an important witness moves to the other side. The line "Many modern scholars prefer the Greek" also needs a name; several major modern translations keep the first person.

**Fix:**
- Check Weber–Gryson or de Sainte-Marie's edition of the *Psalterium iuxta Hebraeos*. Then correct the witness list and delete or keep the Jerome argument to match.
- Name the scholars who prefer "you said" (Tate discusses the question).
- Make sure 090-101 and book.json, if they mention 89:2, agree.

### 4. Minor: 89:33 has no variant entry, and the Syriac is not flagged (notes.json 89:33)
The note says "some Hebrew manuscripts and the Syriac read *asir*, 'I will remove', closer to 2 Samuel". That is a meaning difference that ties straight to 2 Samuel 7:15, but there is no entry in variants.json. The witness is evidently taken from BHS, yet it lacks the "as reported in BHS (not checked myself)" flag used at 89:19 and 89:50.

**Fix:** add a variant (MT אָפִיר / some manuscripts and the Syriac אָסִיר) with the flag, and cite `bhs-elliger` in the note.

### 5. Minor: 86:11 and 81:5 cite the Syriac "as reported in BHS" without the "not checked myself" flag (variants.json)
Both entries give "Syriac, as reported in BHS" but leave out the "not checked myself" wording that the part uses elsewhere (89:19, 89:50). The brief asks for this on every witness.

**Fix:** add "(not checked myself)" to both.

### 6. Minor: the 89:12 variant says the difference is "one letter's vowel" (variants.json 89:12)
יָמִין (yamin) and יַמִּים (yammim) differ in a consonant, final nun against final mem, not only in a vowel.

**Fix:** "The two words differ by one letter, nun or mem."

### 7. Minor: the 89:52 doxology does not match the other three book endings (plain.txt 89:52)
41:13, 72:18 and 106:48 all open "Blessed be the LORD". 89:52 has "May the LORD be blessed for all time!" for the same Hebrew formula (בָּרוּךְ יְהוָה לְעוֹלָם). The note itself treats the four as a set.

**Fix:** "Blessed be the LORD forever! / Amen and amen."

### 8. Minor: 86:14 and its twin 54:3 are rendered differently (plain.txt 86:14; part 042-055 54:3)
The note on 86:0 points to 54:3 as the source. The two Hebrew verses are nearly identical: zedim/zarim, then the same ʿaritsim, the same "sought my life" and the same "did not set God before them". Yet 54:3 has "brutal men ... They give God no place before their eyes" and 86:14 has "a pack of violent men ... they give no thought to you".

**Fix:** use the 54:3 wording where the Hebrew agrees, and keep only the real difference (zedim, "arrogant", against zarim, "outsiders"). Note that 86:14 addresses God in the second person, so "you" is fine in the last line.

### 9. Minor: qever is "grave" in 88:5 but "tomb" in 88:11, and the note says "grave" for both (plain.txt; notes.json 88:3; glosses.json 88:11)
Note 88:3 lists "the grave (*qever*, verses 5 and 11)". The Plain English Translation has "tomb" at 88:11, and a gloss then explains "in the tomb" as "in the grave". That gloss adds nothing.

**Fix:** use "grave" in 88:11 and delete the gloss.

### 10. Minor: the sky words in Psalm 89 are inconsistent (plain.txt 89:2, 5, 6, 11, 29, 37)
Shamayim is "the heavens" (89:2, 29), "The skies" (89:5) and "Heaven" (89:11). Shechaqim is "the clouds" (89:6) and "the skies" (89:37). A reader cannot tell which Hebrew word is behind each one.

**Fix:** pick one rendering per word, for example shamayim "heavens" and shechaqim "skies".

### 11. Minor: the Ketubot 75a note sits on the wrong verse (notes.json 87:6)
Bavli Ketubot 75a expounds 87:5 ("This man and that man was born in her ... one who was born there and one who longs to see it"). The note sits on 87:6 and says "The Talmud reads the verse". The J lens of Psalm 87 gets it right.

**Fix:** move the sentence to a note on 87:5 (or into the existing 87:5 echo note), or say "reads 87:5".

### 12. Minor: Job 26:6 is quoted as a "fresh rendering" although the site has Job (notes.json 88:11)
STYLE: "Quoting a book this site has already translated: use its Plain English Translation wording exactly." Job is written (content/books/Job/parts/). Its Plain English Translation of 26:6 reads "Sheol lies naked before him; / there is no cover over Abaddon."

**Fix:** quote that wording and drop "fresh rendering". The other fresh renderings (Isaiah, Jeremiah, the Gospels, Acts, Paul, Hebrews) are fine while those books are unwritten.

### 13. Minor: the claim that the Latin West also uses 82:8 on Holy Saturday is unsupported (chapters.json 82, views.L)
"In the Latin West the verse marks the same day." I know of no Roman Holy Saturday use of 82:8 to match the Byzantine one. The traditional Matins psalms of Holy Saturday do not include it.

**Fix:** cite the Roman use or delete the sentence.

### 14. Minor: two cross-reference promises lead nowhere (variants.json 84:7; notes.json 85:1)
- The 84:7 variant's `why` ends "(see the note)", but no note on 84:7 discusses the "appear" or "see God" vocalization. The only 84:7 note is "Stronger along the way".
- Note 85:1 says the written and spoken text "differ by one letter (see the variant)", but the 85:1 variant is about "fortunes" against "captivity" and never mentions the ketiv/qere (texts/auto lists a Q(k) at 85:1).

**Fix:** add the note at 84:7 or remove the pointer. Add the ketiv/qere to the 85:1 variant's `b`, or drop the pointer.

### 15. Minor: Psalm 83 has no curse-psalms card, though it is one of the three psalms the Liturgy of the Hours leaves out (chapters.json 83)
Parts 031-041 (35), 056-072 (69), 073-080 (79), 107-118 (109) and 120-137 (137) each carry a `curse-psalms` card. Psalm 83 is listed with 58 and 109 as omitted because of its curses (General Instruction of the Liturgy of the Hours 131), and the L lens says so. The 83:16 note says only that "Christian lectionaries rarely use it", without the source.

**Fix:** either add a short `curse-psalms` card here (Catholic: omitted from the LOTH; Orthodox: read in full in Kathisma 11; Reformed psalm-singing traditions: sung in full; and so on), or cite GILH 131 in note 83:16 and point readers to the card at 35 or 109.

### 16. Minor: the theosis card is filed under the wrong topic (chapters.json 82, traditions[0].top)
The question is "can human beings share God's nature?", which is theosis, deification or exaltation. The card's `top` is `divine-council`, so it will appear on the divine-council page among cards about heavenly beings. No theosis topic exists in content/topics/.

**Fix:** create a `theosis` topic (aka deification, exaltation), or use the nearest existing one, and put the card there.

### 17. Minor: a source key does not match its quotation (notes.json 85:11; chapters.json 85)
Note 85:11 quotes Augustine, "Truth has sprung from the earth: Christ is born of a woman". That line is from Augustine's Christmas sermon (Sermon 185), not the *Enarrationes*, yet the note cites `augustine-enarrationes`.

**Fix:** add a key for Augustine's Sermons (Sermon 185) and cite it, or quote the *Enarrationes* on Psalm 84 (Latin numbering) instead.

### 18. Minor: `ware-orthodox` is a weak source for the bay-leaf rite (notes.json 82:8)
Ware's *The Orthodox Church* is a general survey. The Holy Saturday rubric belongs in *The Lenten Triodion* (trans. Mother Mary and Kallistos Ware, 1978).

**Fix:** cite the Triodion (add a key) for the liturgical detail.

### 19. Minor: some Rashi and Targum attributions are not checked (notes.json 81:15, 84:5, 84:10, 87:3; chapters.json 83 views.J)
These are cited without a check flag, and I could not confirm them:
- 81:15: Rashi takes "their time" as Israel's good;
- 84:10: Rashi says "one day there and then death", and the Targum says "a thousand in exile";
- 84:5: the Targum reads "trust in their hearts";
- 87:3: the Targum "adds 'forever'";
- Psalm 83, J lens: Rashi on Lot and Assyria "in the days of the judges".

Rashi on 84:11 may instead echo Shabbat 30a ("one day of Torah study"). The variants say "checked myself" for the Targum at 82:1 and 84:11, but the notes give no such assurance.

**Fix:** check each against Stec and a Rashi edition. Correct or delete what does not stand.

### 20. Minor: the KJV "JEHOVAH" count needs a qualifier (notes.json 83:18)
"One of only four places where it does so" is true only for the name standing alone. The KJV also prints it in the compound place names of Genesis 22:14, Exodus 17:15 and Judges 6:24.

**Fix:** add "standing alone".

### 21. Minor: the cognates for keseh are doubtful (notes.json 81:3)
"Akkadian *kusu* and Syriac *kesa* mean the full moon." The usual cognates cited are Phoenician *ksʾ* and Syriac *kesa*. The Akkadian word is *kuseʾu*, "headdress" or "tiara", including the moon's, and it is not a plain "full moon".

**Fix:** "Phoenician and Syriac cognates mean full moon" (Tate and HALOT), or check the Akkadian.

### 22. Minor: "the oldest Greek copy" at 89:45 (notes.json 89:45)
Vaticanus and Sinaiticus are both fourth century, so calling Vaticanus "the oldest Greek copy" overstates it. The variant itself says simply "Vaticanus".

**Fix:** "Codex Vaticanus".

### 23. Minor: contradictions and a garbled sentence in the chapter pages (chapters.json 84, 89)
- In Psalm 84, the readings say "Brahms set its first verse", but note 84:1 correctly says verses 1, 2 and 4.
- The Psalm 89 H lens reads: "Read as history, Ethan, like Ibn Ezra's interpretation, would be foreseeing the fall of David's line". That sentence does not parse.

**Fix:**
- Psalm 84: "verses 1, 2 and 4".
- Psalm 89: "Read as history, Ethan, a sage of Solomon's time, foresaw the fall of David's line, as Ibn Ezra held."

### 24. Minor: small translation points (plain.txt)
- **86:2** "Keep me alive" for שָׁמְרָה נַפְשִׁי softens "guard my life". Use "Guard my life".
- **86:13** The Hebrew is present, "For your loyal love toward me is great". The Plain English Translation makes it a past exclamation ("has been"). Use "For great is your loyal love toward me".
- **81:16** The Masoretic וַיַּאֲכִילֵהוּ is a past narrative form ("and he fed him"). The Plain English Translation's "He would feed him" is a reasonable conditional reading in context, but the variant's `why` should say that the tense, too, is interpreted.

### 25. Minor: mechanics and filler (notes.json)
- Six previews (`p`) are over the 120-character limit: 81:3 (135), 81:10, 81:13, 82:6 (136), 88:3 and 89:51.
- Note 86:3 says Adonai appears seven times "more than in any other psalm of its size, and the Masoretes counted such details carefully". The comparison is unsupported and the remark about the Masoretes is padding.

**Fix:** shorten the six previews. In 86:3 keep the count (which is correct: verses 3, 4, 5, 8, 9, 12, 15) and delete the rest.

## Cross-part items checked
- **89:2 "I said" against "you said":** see finding 3.
- **The facts cited from memory:** Corpus Christi Introit (81:16), Byzantine Holy Saturday (82:8), Exodus Rabbah 19 (89:27) and the Psalm 89 lectionary use all confirmed. Ketubot 75a is confirmed, but for 87:5 (finding 11).
- **Witnesses taken from BHS:** 86:11, 81:5 and 89:33 lack the flag (findings 4 and 5).
- **`talmon-masada`:** defined but unused (finding 1).
- **Consistency with the other parts:**
  - Title forms match 8:0 and 53:0, and the instrument words (kinnor "lyre", nevel "harp", tof "tambourine") match 57, 71, 149 and 150.
  - "the LORD of Armies", "loyal love", "Happy", "Selah" and the Sheol gloss follow terms.json.
  - 89:14 matches 97:2, 86:16 matches 116:16, and 86:15 matches the site's Exodus 34:6.
  - The mismatches are the doxology (finding 7) and 86:14 against 54:3 (finding 8).

## Fixes applied

1. **Scrolls (major).** Added a note on 81:1 and a deep section on the Psalm 81 page. They name MasPs-a (about 81:2–85:6, reported close to the MT, mostly spelling), 4QPs-e and 4Q236. I also added a note on 89:20 about 4Q236's shorter, rearranged oracle (Skehan's view and Flint's), with a mention in the 2 Samuel 7 deep section. All of these are marked as reported from Talmon, Flint and the DSS Bible; I did not see the scrolls or DJD. `talmon-masada` is now cited. No scroll reading differs in meaning in a way I could verify, so I added no scroll variants.
2. **83:1 (major).** Variant retitled ("No rest for you" or "Who is like you?"). The `p`, the `why` and the note now say the Greek read *domi* as "likeness" and that the rest of the verse matches.
3. **89:2 (major).** Jerome's Psalter from the Hebrew was checked in a real edition: Lefèvre d'Étaples, *Quincuplex Psalterium* (1513), Hebrew column, "Quia dixisti sempiterna misericordia...". Lefèvre's own note on the page agrees. That supports *dixisti*, so the reviewer's memory of *dixi* is not confirmed. I could not see the Weber–Gryson critical text, so I softened the claim:
   - the witness line names the 1513 edition;
   - the `why` no longer rests the argument on Jerome;
   - the unnamed "many modern scholars" claim is gone.
   I added the key `lefevre-quincuplex`. book.json and 090-101 do not mention 89:2.
4. **89:33.** Added a variant: MT *afir* against *asir* in some manuscripts and the Syriac, as reported in BHS, not checked myself. The note is flagged and cites `bhs-elliger`.
5. **81:5, 86:11.** Added "(not checked myself)" to the Syriac witness in both.
6. **89:12.** The variant now says the words differ by one letter (nun or mem).
7. **89:52 (lead decision).** The Plain English Translation is now "Blessed be the LORD forever. / Amen and amen.", matching 41:13 and 72:18–19. The note anchor and the note text are updated.
8. **86:14.** Now follows the 54:3 Plain English Translation where the Hebrew agrees: "God, arrogant men have stood up against me, / and a band of brutal men is hunting for my life. / They give you no place before their eyes." The Psalm 86 settings card is updated.
9. **88:11.** "Tomb" is now "grave", the gloss is deleted, and the quote on the topic page is updated.
10. **Sky words.** shamayim is "heavens" (89:5, 89:11) and shechaqim is "skies" (89:6, 89:37).
11. **87:6 note.** Now says the Talmud reads 87:5 (Ketubot 75a).
12. **Job 26:6.** Now quoted in the site's Plain English Translation.
13. **82 L lens.** Deleted the Latin West sentence.
14. **Dead pointers.** Removed "(see the note)" from the 84:7 variant. Added the ketiv *shevit* and qere *shevut* to the 85:1 variant, so the note's pointer now leads somewhere.
15. **Psalm 83.** Added a curse-psalms traditions card (Catholic citing GILH 131, Orthodox Kathisma 11, Anglican BCP 1662, Reformed). Note 83:16 and the L lens cite GILH 131.
16. **Theosis.** Created the topic core content/topics/theosis.json (aka deification, divinization, "partakers of the divine nature"). Moved the Psalm 82 card's `top` to theosis and added a topic section.
17. **85:11.** Now cites a new key, `augustine-sermon185`, and the note names Sermon 185.
18. **82:8.** The Holy Saturday note now cites `lenten-triodion`. The key already existed in 120-137, so I reuse it.
19. **Rashi and Targum.** Checked against the Sefaria texts:
   - **84:10, 84:5 and 87:3:** confirmed. Rashi and the Targum both have "forever" at 87:3.
   - **81:15:** corrected. Rashi takes it as the enemies' lasting retribution; the Targum has "their strength will last forever".
   - **Psalm 83 J lens:** rewritten. The Targum names Sennacherib, and Rashi has Assyria leaving Nimrod's counsel. The unsupported Midrash "Gog and Magog" claim is replaced by the Midrash's actual point: as long as Israel exists, God is called the God of Israel.
20. **83:18.** Added "standing alone".
21. **81:3.** The cognates are now Phoenician and Syriac (Tate); the Akkadian is dropped.
22. **89:45.** Now says "Codex Vaticanus".
23. **Psalms 84 and 89 pages.** Brahms is now "verses 1, 2 and 4", and the Psalm 89 H lens sentence is rewritten.
24. **Translation points.**
    - 86:2 is now "Guard my life".
    - 86:13 is now "For great is your loyal love toward me; / you have pulled my life out of the lowest Sheol."
    - The 81:16 variant's `why` now says the tense is interpreted too.
25. **Previews and padding.** All note and variant previews are now 120 characters or fewer; I also shortened 13 variant previews. Deleted the padding in note 86:3 and kept the count.
- **Lead decision: witnesses.** The 81 page's deep section and the 81:1 note say which witnesses I checked myself and which are reported.
- **Drift.** I re-audited the 8 changed verses and logged them in scratch, with no NIV or ESV text.
- **Check.** `node tools/build.js --check Psa/081-089` gives 0 errors and 0 warnings.
