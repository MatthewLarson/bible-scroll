# Hostile review: Psalms 18–30 (Psa/parts/018-030)

## Verdict

This is a strong part. The Plain English Translation is built from the Hebrew, not from memory: Psalm 18 follows the site's Plain English Translation of 2 Samuel 22 line by line wherever the Hebrew agrees and departs from it exactly where the Hebrew departs (I checked all fifty verses against the site's 2 Samuel 22). The difficult places (18:14, 22:1, 22:15, 22:16, 22:21, 22:29, 23:6, 24:4, 24:6, 25:17, 27:8, 27:13, 28:8, 29:9, 30:3) all get honest notes or variants. Every psalm has a settings card with `readers`, every summary gives the Greek number, the Hebrew numbering note appears once (18:0), the acrostic of Psalm 25 is shown in a note and a letter table, and Psalm 22 is handled fairly to Jewish and Christian readers. `node tools/build.js --check Psa/018-030` reports 0 errors and 0 warnings. I found no critical problems. There are three major ones. At 22:8 and 30:12 the Plain English Translation silently follows a reading that is not the Masoretic Text. At 27:1 a midrash is credited with something it does not say. The rest are minor: small additions to the text, one cross-part consistency fix (Selah), three wording consistency points (29:1–2 among them), and some soft or misplaced citations.

Checked and found correct (no action needed): Mishnah Tamid 7:4 (the daily psalms); the Greek title additions at 24:0 ("of the first day of the week"), 27:0 ("before he was anointed") and 29:0 ("at the going out of the tent"); Rosh Hashanah 31a on Psalm 24; Berakhot 4a (the dots of 27:13), 9b (19:14 after the Amidah), 28b (eighteen names in Psalm 29) and 35a (24:1 and 115:16); Sukkah 52a (21:4); Shabbat 30a (the gates and Solomon); Zevachim 116a (Psalm 29 and Sinai); Mishnah Uktsin 3:12; Soferim 18 (Psalm 30 for Hanukkah); the Targum's "King Messiah" in Psalm 21; Rashi on 21:2 (checked: "our rabbis explained it of King Messiah", and he explains it of David); the BCP proper psalms for Ascension (21, 24) and Good Friday (22); the Easter Vigil response after Isaiah 54 (Psalm 30); Papyrus Amherst 63 and Nims–Steiner (1983); Vall (JBL 1997) and Strawn (JBL 2000); DJD 38 for 5/6HevPs; Gregory of Nazianzus, Oration 30.5; Calvin, Institutes 2.16.10–11; Lewis on Psalm 19; the Septuagint readings cited at 18:35, 19:4, 19:13, 20:5, 20:9, 22:1, 22:21, 22:29–30, 23:6, 24:6, 27:13, 28:7, 28:8, 29:1 and 30:7.

## Findings

1. **Major. plain.txt 22:8; notes.json 22:8 "He rolled his load onto the LORD"; no variant entry.**
   *What is wrong:* The Masoretic Text points the word as גֹּל (*gol*). That is an imperative ("Roll it onto the LORD!"), or at most an infinitive absolute. The Plain English Translation gives a past-tense description, "He rolled", which is the sense of the Greek ἤλπισεν ("he hoped"), the Syriac and Matthew 27:43. It also adds "his load", which is not in the Hebrew. The note says the word "can be a command or a description", but it never says which one the Plain English Translation follows or why. And there is no variant entry, though the Greek reads a different verb form.
   *Fix:* Add a variant. Reading 1 is the Masoretic Text, *gol*, "Roll it onto the LORD!" (the mockers' sarcastic command). Reading 2 is the Septuagint (Rahlfs 21:9), the Syriac and Matthew 27:43, "he hoped/trusted in the LORD" (repointed as *gal*, "he rolled"). Then follow the Masoretic Text, or say plainly why the Plain English Translation does not. Either way, drop "his load" or show it as supplied ("Roll it onto the LORD; let the LORD get him free!").

2. **Major. plain.txt 30:12 "so that my glory may make music to you"; notes.json 30:12.**
   *What is wrong:* The Hebrew is לְמַעַן יְזַמֶּרְךָ כָבוֹד, "so that glory may sing to you", with no "my". The note's own `orig` shows this. The "my" comes from the Greek (ἡ δόξα μου), so the Plain English Translation follows the Greek without saying so. The note then says "The Greek has 'my glory' too". That implies the Hebrew has it, which is wrong.
   *Fix:* Translate the Hebrew ("so that glory may make music to you", or "so that my whole self ..." with the note explaining why). Or keep "my glory" and add a variant: Masoretic Text *kavod* "glory"; Septuagint "my glory"; the common emendation *kevodi* or *kevedi*. Correct the note's last sentences.

3. **Major. notes.json 27:1 "The psalm of the High Holy Days"; chapters.json 27 `views.J`.**
   *What is wrong:* Both places say Leviticus Rabbah 21:4 reads "his shelter" (*besukkoh*, 27:5) as Sukkot. The midrash gives only "my light: Rosh Hashanah; and my rescue: Yom Kippur". The Sukkot link is added by later writers on Jewish practice, who cite the midrash for the first two and add the third. Their reason is the custom of saying the psalm through Sukkot. (Source checked: Yeshivat Har Etzion, "Le-David Hashem Ori Ve-Yish'i", which quotes the midrash and gives the Sukkot line from the later codes.)
   *Fix:* "A midrash (Leviticus Rabbah 21:4) reads 'my light' as Rosh Hashanah and 'my rescue' as Yom Kippur; later writers on Jewish practice added that 'his shelter' (*besukkoh*, 27:5) points to Sukkot." Make the same change on the chapter page.

4. **Minor. chapters.json 18 `sum` "Psalm 18 ... is the longest royal psalm".**
   *What is wrong:* Psalm 89, also a royal psalm, is longer (52 verses against 50). Psalm 18 is the longest psalm in Book I.
   *Fix:* "the longest psalm in Book I and one of the great royal psalms".

5. **Minor. chapters.json 18 `views.L` "the last verse ends the grace after meals"** (also notes.json 18:50 "sung at the close").
   *What is wrong:* The grace after meals ends with 29:11, as this part's own note at 29:11 says. Psalm 18:50 (*magdil*, or *migdol* from 2 Samuel 22:51 on Sabbaths) comes near the end, before "He who makes peace".
   *Fix:* "the last verse is said near the end of the grace after meals."

6. **Minor. plain.txt 29:1–2 "Give to the LORD" (three times); glosses.json 29:1 anchor "Give to the LORD".**
   *What is wrong:* The Hebrew הָבוּ לַיהוָה (*havu laYHWH*) is identical to 1 Chronicles 16:28–29 and Psalm 96:7–8, which the site renders "Give the LORD ..." (1 Chronicles 16 Plain English Translation; part 090-101). The second line of 29:2 already matches 1 Chronicles 16:29 exactly ("Bow low to the LORD in holy splendor").
   *Fix (recommended):* Use "Give the LORD" in all three places: "Give the LORD, you sons of the gods, / give the LORD glory and strength." / "Give the LORD the glory of his name; / bow low to the LORD in holy splendor." Move the gloss anchor to "Give the LORD". With that change, 29:2a matches 96:8a and 1 Chronicles 16:29a word for word.

7. **Minor. plain.txt 20:3, 21:2, 24:6, 24:10 "/ Selah".**
   *What is wrong:* This part alone puts Selah on its own poetic line ("... rich. / Selah"). All the other parts end the line with it ("... the land of the living. Selah", 52:5): 001-017 (8 times), 031-041, 042-055, 056-072, 073-080, 081-089 and 138-150. terms.json says Selah is kept "at the end of the line".
   *Fix:* Use "find your burnt offering rich. Selah", and the same at 21:2, 24:6 and 24:10.

8. **Minor. plain.txt 22:30–31 "to the generation to come. / 22:31 They will come".**
   *What is wrong:* The Hebrew has one יָבֹאוּ (*yavo'u*), at the start of 22:31. The Plain English Translation uses it twice: once as "to come" in 22:30 and again as "They will come" in 22:31. (The Greek joins it to 22:30; the Masoretic Text puts it in 22:31.)
   *Fix:* "the Lord will be told of to the next generation." Or keep "to come" and change 22:31 to "and they will announce ...", with a note on where the verb belongs.

9. **Minor. plain.txt 24:6 "who search for your face; this is Jacob"; variants.json 24:6.**
   *What is wrong:* "this is" is supplied. The Hebrew is "those who seek your face, Jacob", which can be a vocative ("O Jacob", as the KJV has it) or in apposition. The variant's `why` says the Plain English Translation keeps the Hebrew "as Jewish translations do". NJPS has "Jacob, who seek Your presence", not "this is Jacob".
   *Fix:* Either "who search for your face, O Jacob" or "who search for your face: they are Jacob", and give the readings in the note. Correct the claim about Jewish translations.

10. **Minor. plain.txt 19:1 "The heavens are telling the glory of God".**
    *What is wrong:* This is word for word the NRSV (also Haydn's libretto). The Hebrew participle מְסַפְּרִים allows other wording, so under the drift audit rule the verse should be rebuilt.
    *Fix:* For example, "The heavens tell over the glory of God" or "The sky is recounting God's glory"; keep the note's mention of Haydn.

11. **Minor. variants.json 22:16, field `b`; also the `why`.**
    *What is wrong:* (a) "though its scribe also confuses letters elsewhere" is not supported by the cited sources. Flint (DJD 38) argued that the waw of כארו is distinct from yod in this hand. The usual caution is that yod and waw are often alike in scripts of the period. (b) The Plain English Translation supplies a verb, "they go for", which is not in the Masoretic Text. The `why` says "the Hebrew line has no verb" but does not say that the Plain English Translation adds one.
    *Fix:* (a) "Some scholars caution that yod and waw are often hard to tell apart in hands of this period; Flint reads waw." (b) Add to `why`: "To make an English sentence, the Plain English Translation supplies 'they go for', which the Hebrew does not have."

12. **Minor. variants.json: Greek readings left out at 29:2 and 27:8.**
    *What is wrong:* At 29:2 the Septuagint has ἐν αὐλῇ ἁγίᾳ αὐτοῦ, "in his holy court" (reading *chatsrat* for *hadrat*). The 29:2 note lists three readings but not this one. At 27:8 the Septuagint has "my face has sought (you)", a different way of handling the hard verse. The note gives three English patches but not the Greek.
    *Fix:* Add the 29:2 Greek reading to the note or as a variant. Add one sentence on the Greek to the 27:8 note.

13. **Minor. Brief compliance: witness checking.**
    *What is wrong:* The brief says "Say whether you checked each witness yourself". Nothing in variants.json, notes or chapters says which Greek, Latin, Syriac and Targum readings were checked against an edition and which were cited from memory. (I found the cited Greek readings correct; see the verdict.)
    *Fix:* Add a line to each variant's `w` or `b` (for example "Septuagint reading checked in Rahlfs"), or one sentence in the 18:0 numbering note covering the whole part.

14. **Minor. notes.json 22:0 "The Doe of the Dawn".**
    *What is wrong:* The note says the Talmud (Megillah 15b) and the Midrash "call her the doe of the dawn". Megillah 15b has Esther praying 22:1 ("My God, my God ..."). The comparison of Esther to the dawn (*ayyelet hashachar*) is in Yoma 29a and Midrash Tehillim 22.
    *Fix:* "The Talmud (Megillah 15b) says Esther prayed 22:1 as she went in to the king; Yoma 29a and the Midrash on Psalms compare her to the dawn."

15. **Minor. notes.json 26:6 "Washing the hands", against chapters.json 26 `views.L`.**
    *What is wrong:* The note says "the Latin of this verse, which was said there in full until 1970". In the pre-1970 Mass the priest said 26:6–12 (Vulgate 25:6–12), as the chapter page itself says. The note reads as if only one verse was said. It also gives no Greek/Vulgate number, though the brief asks for it where Catholic sources are cited.
    *Fix:* "... from the Latin of this verse; the priest said 26:6–12 (Vulgate Psalm 25) there until 1970, when Psalm 51:2 replaced it."

16. **Minor. notes.json 19:7 "Restoring the soul".**
    *What is wrong:* Ruth 4:15 (*meshiv nefesh*) is about the child Obed renewing Naomi's life, not about food. And 23:3 does not have "the same phrase": it has *nafshi yeshovev*, the same verb root in a different stem.
    *Fix:* Drop Ruth 4:15 from the food examples (or say "and of a grandson, Ruth 4:15"). Change "The same phrase" to "A related phrase".

17. **Minor. plain.txt 27:12 "a witness who pants for violence"; notes.json 27:12.**
    *What is wrong:* The note argues that וִיפֵחַ means "witness" (Ugaritic *yph*) or "one who breathes out" violence. "Pants for" means "craves", which neither reading gives.
    *Fix:* "and a witness who breathes out violence", or "and witnesses of violence".

18. **Minor. notes.json 29:6 "The storm's path".**
    *What is wrong:* "All of these were regions outside Israel, in Baal's country" does not fit Kadesh-barnea, which the same note offers as one option.
    *Fix:* "Lebanon and Sirion were Phoenician mountains, the heart of Baal's country."

19. **Minor. Source keys.**
    (a) notes.json 25:1: *Ad te levavi* is the Advent introit of the Roman Missal, but the note cites `liturgy-hours`. Cite the Missal (add a key such as `roman-missal`) or drop the key.
    (b) chapters.json 18 `views.C` says "Cross and Freedman (1953)", but its key `cross-freedman-yahwistic` is the 1975 book. Add the article (F. M. Cross and D. N. Freedman, "A Royal Song of Thanksgiving: II Samuel 22 = Psalm 18," *JBL* 72 (1953): 15–34), or date the claim to the book.
    (c) notes.json 19:5 quotes Ambrose's hymn *Veni, Redemptor gentium* but cites only Jerome and Augustine. Add an Ambrose source or remove the attribution detail.

20. **Minor. chapters.json 23 `traditions` (metrical Psalm 23).**
    *What is wrong:* It nearly repeats book.json's exclusive-psalmody card (same `top` "worship"), with weaker contrasts: Anglican "Both", Catholic "Both are used, but". The brief asks for `top` cards only where churches really differ.
    *Fix:* Remove it and point the reader to the book-level card. Or reframe it as one sharp question ("Must a sung psalm follow the Hebrew closely?"), with Reformed exclusive psalmody against Watts and the Lutherans.

21. **Minor. plain.txt 28:1 "like those who go down into the pit".**
    *What is wrong:* The same Hebrew (*nimshalti 'im yordei vor*) is rendered in 143:7 "like those going down into the pit", and in 88:4 "those going down into the pit".
    *Fix:* Agree with the later parts on one form ("those who go down into the pit" reads better). Raise it with parts 081-089 and 138-150 so that all three match.

22. **Minor. glosses.json 24:5 "righteousness" -> "a right standing with God".**
    *What is wrong:* This carries a Protestant justification sense into a verse where צְדָקָה from God means vindication, God's verdict and gift in the worshiper's favor.
    *Fix:* "a fair verdict from God", or "God's vindication".

23. **Minor. glosses.json 23:2 "meadows of fresh grass" -> "green pastures".**
    *What is wrong:* The gloss gives the KJV's famous wording, not a modern paraphrase, and so undoes the Plain English Translation's fresh rendering.
    *Fix:* "a field of new green grass", or drop the gloss.

24. **Minor. notes.json 25:7 and chapters.json 25 `views.L`, "while the head is lowered" / "with head bowed".**
    *What is wrong:* Sephardic communities say Psalm 25 at *nefilat apayim*, but many of them, following kabbalistic custom, do not do the physical lowering of the head.
    *Fix:* "in the supplication prayers (*tachanun*) after the Amidah."

## Fixes applied

- 1 (22:8): The Plain English Translation now follows the Masoretic imperative: "Roll it onto the LORD! Let the LORD get him free!" "His load" is dropped, and the note says that "it" is supplied. A new variant gives the Masoretic *gol* against the Septuagint (Rahlfs 21:9, *ēlpisen*, checked), the Syriac and Matthew 27:43.
- 2 (30:12): The Plain English Translation now reads "so that glory may make music to you", following the Hebrew. A new variant gives the Masoretic "glory", the Septuagint "my glory" (Rahlfs 29:13, checked) and the conjecture *kevedi*/*kevodi*. The note is corrected.
- 3 (27:1): The note and the chapter J view now credit Leviticus Rabbah 21:4 only with Rosh Hashanah and Yom Kippur. They add that later writers on Jewish practice linked "his shelter" (27:5) to Sukkot.
- 4: Psalm 18 is now "the longest psalm in Book I, one of the great royal psalms".
- 5: The chapter L view and the 18:50 note now say "near the end of the grace after meals".
- 6: 29:1–2 now use "Give the LORD", as the lead decision requires. The gloss anchor has moved to match.
- 7: Selah now ends the line at 20:3, 21:2, 24:6 and 24:10.
- 8: 22:30 now reads "the Lord will be told of to the next generation", so the verb appears only in 22:31.
- 9 (24:6): The Plain English Translation now reads "who search for your face, O Jacob". The variant's `why` now gives the vocative and appositional readings and quotes the NJPS wording correctly.
- 10 (19:1): The verse is rebuilt as "The heavens keep recounting God's glory" and the note anchor is moved.
- 11 (22:16): The scribe claim is replaced with the yod/waw caution and Flint's reading of waw. The `why` now says that the Plain English Translation supplies "they go for".
- 12: The 29:2 note adds the Septuagint "in his holy court" (Rahlfs 28:2, checked). The 27:8 note adds the Septuagint wording (Rahlfs 26:8, checked).
- 13: A deep section on the Psalm 18 page, "Witnesses checked for Psalms 18–30", says which witnesses I checked myself. That was the Septuagint in Rahlfs, for the key verses of every psalm and every Greek reading in a variant; all others are cited from editions and studies. Each Greek reading in the new variants is marked "checked".
- 14 (22:0): The note now says that Megillah 15b has Esther praying 22:1, and that Yoma 29a and the Midrash on Psalms compare her to the dawn. Added `bavli-yoma`.
- 15 (26:6): The note now says "the priest said 26:6–12 (Vulgate Psalm 25) there until 1970, when Psalm 51:2 replaced it". Added `roman-missal`.
- 16 (19:7): Ruth 4:15 is now described as a grandson renewing a grandmother's life, and "the same phrase" is now "a related phrase".
- 17 (27:12): The Plain English Translation now reads "a witness who breathes out violence".
- 18 (29:6): The sentence is now "Lebanon and Sirion were Phoenician mountains, the heart of Baal's country."
- 19: (a) The 25:1 note now cites `roman-missal` (defined in part 042-055) instead of `liturgy-hours`. (b) The text now says "a 1953 article reprinted in their 1975 book". The `cross-freedman-yahwistic` key already names that article. (c) Added the part key `ambrose-hymns` (Fontaine's edition, 1992) to the 19:5 note.
- 20: The Psalm 23 card is reframed as one question that the book card does not ask: "Must a psalm sung in worship follow the words of the text closely, or may it be freely rewritten?" It sets Reformed psalm-only churches (Scottish Psalter) against Watts, the Lutheran position, the Catholic rule that the appointed psalm must be the approved text, and the Orthodox position. The weak Anglican "both" view is dropped.
- 21: 28:1 now reads "like those going down into the pit", the same form as 88:4 and 143:7 in the other parts. They needed no change.
- 22: The 24:5 gloss is now "a fair verdict from God, his vindication".
- 23: The 23:2 gloss is now "a field of new green grass".
- 24: The 25:7 note and the chapter L view now say only "in the supplication prayers (*tachanun*) after the Amidah".
- Also: I shortened 11 note summaries (`p`) that were 120 characters or longer. I re-audited the 12 rebuilt or retouched lines for drift; the log is in scratch.
- `node tools/build.js --check Psa/018-030`: 0 errors, 0 warnings (226 verses, 123 notes, 24 variants).
