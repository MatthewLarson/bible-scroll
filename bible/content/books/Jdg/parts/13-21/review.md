# Hostile review: Judges 13–21 (part `Jdg/parts/13-21`)

Reviewed: plain.txt (all 243 verses against `node tools/literal.js Jdg 13`–`21`), notes.json (173), variants.json (11), glosses.json (101), chapters.json (13–21), topics.json (24 contributions), the new topic cores `samson`, `tribe-of-dan`, `barrenness` and `gibeah`, and the eight new keys in `content/sources.json`. book.json and chapters 1–12 were not reviewed. `node tools/build.js --check Jdg/13-21` reports only the two book.json errors (`needs lead`, `needs facts`). The quotation check passes, but finding 23 is a quotation mismatch it did not catch.

## Verdict

This is a strong part. The translation is faithful, the variant work is above average (16:13–14, 18:30, 19:2, 19:28 and 19:30 are handled well), and chapters 19–21 give feminist and traditional readings real space. Three problems keep it from being ready to publish. (1) Modern-version drift. In chapters 19–21 especially, whole clauses track the NIV or the ESV word for word, sometimes copying an NIV choice the Hebrew does not support ("the whole army" in 20:26, "fields" in 19:16). STYLE says these must be redone. (2) Several attributions are wrong. Buber is credited with the opposite of his view of the refrain. A Milton "quotation" is not in Milton. The Talmud is credited with Rashi's explanation of the suspended nun. (3) The variant apparatus misses the 20:15 number difference that answers the arithmetic problem a note claims does not exist. It also misses the "Aram" reading in 18:7, and it names the wrong Greek witnesses at 20:33 and 20:43. I also recommend one wording for the refrain in 17:6 and 21:25 (finding 7). The 14:7 rendering is ambiguous in English and needs fixing either way.

Findings: 0 critical, 9 major, 31 minor.

## Findings

### Major

**1. Major: NIV/ESV drift in chapters 19–21.** (plain.txt)
Many clauses repeat the NIV or ESV phrase by phrase, beyond what the Hebrew forces. I checked the ESV of 19:16–27 and 20:2–3 and the NIV of 16:13, 20:36 and 21:15 online (esv.org, biblegateway.com). The rest are from my knowledge of those versions.
- 19:16 "an old man came in from his work in the fields" = NIV "came in from his work in the fields". The Hebrew has the singular *min-hassadeh*, "from the field". The plural "fields" is the NIV's.
- 19:17 "When he looked up and saw the traveler in the town square, the old man asked" = NIV "When he looked and saw the traveler in the city square, the old man asked" (ESV also "saw the traveler").
- 19:22 "They told the old man who owned the house" = NIV. "Bring out the man who came into your house" = ESV exactly.
- 19:23 "The owner of the house went out" = NIV. "No, my brothers… this man has come into my house" = ESV.
- 19:24 "Let me bring them out" = ESV. "But to this man, do not do such a disgraceful thing" follows the NIV ("don't do such an outrageous thing").
- 19:26 "the woman came and collapsed at the doorway of the man's house where her master was… until it was light" = ESV "the woman came and fell down at the door of the man's house where her master was, until it was light", with two words changed.
- 19:27 "stepped out to be on his way. There she lay… his concubine, fallen at the entrance of the house" = NIV "stepped out to continue on his way, there lay his concubine, fallen in the doorway of the house".
- 20:2 "took their places in the assembly of God's people" = NIV exactly.
- 20:26 "Then all the Israelites, the whole army, went up" = NIV exactly. The Hebrew is *kol-benei Yisra'el vekhol-ha'am*, "all the Israelites and all the people". "The whole army" is the NIV's interpretation. "They fasted that day until evening" = NIV.
- 20:34 "the fighting was heavy. The Benjaminites did not realize" = NIV ("The fighting was so heavy that the Benjamites did not realize").
- 20:36 "The Benjaminites saw that they were beaten. The men of Israel had given ground before Benjamin because they were counting on the ambush they had placed near Gibeah" = NIV "Then the Benjamites saw that they were beaten. Now the men of Israel had given way before Benjamin, because they relied on the ambush they had set near Gibeah", with ESV's "gave ground" added.
- 20:37 "spread out and put the whole town to the sword" = NIV "spread out and put the whole city to the sword".
- 21:1 "The men of Israel had taken an oath at Mizpah: 'Not one of us will give his daughter…'" = NIV.
- 21:2 "The people went to Bethel and sat there before God until evening. They raised their voices…" follows the NIV ("The people went to Bethel, where they sat before God until evening, raising their voices").
- 21:4 "Early the next day the people built an altar" = NIV exactly.
- 21:5 "Then the Israelites asked… solemn oath… anyone who failed to come up to the LORD at Mizpah" = NIV "Then the Israelites asked… solemn oath that anyone who failed to assemble before the LORD at Mizpah".
- 21:6 "'Today one tribe has been chopped off from Israel,' they said" follows the NIV structure ("'Today one tribe is cut off from Israel,' they said"). "grieved" is also the NIV's.
- 21:15 "The people grieved over Benjamin, because the LORD had torn a gap in the tribes of Israel" = NIV "The people grieved for Benjamin, because the Lord had made a gap in the tribes of Israel", with two words changed.
- 21:17 mixes the ESV ("inheritance for the survivors of Benjamin… a tribe not be blotted out from Israel") with the NIV frame ("…," they said, "so that…").

Smaller echoes: 19:12 "where the people are not Israelites" (NIV "whose people are not Israelites"); 19:18 "and now I am on my way to the house of the LORD" (NIV/BSB "and now", which the Hebrew does not have); 20:3; 20:7; 20:22 (ESV frame); 20:23 "The Israelites went up and wept… until evening" (NIV); 20:31; 20:42 "cut them down" (NIV); 20:47 (ESV); 21:12 "which is in the land of Canaan" (ESV); 21:22 "or you would now be guilty" (ESV "else you would now be guilty"); 21:23 "rebuilt the towns and settled in them" (NIV).
**Fix:** Rebuild each listed verse from the literal line without looking at English versions. Keep the Hebrew features the versions flatten, such as "the people" in 20:26 and "the field" in 19:16. Then check the result against the ESV and NIV again.

**2. Major: NIV/ESV drift in chapters 13–18.** (plain.txt)
- 14:3 "Can't you find a woman among your own relatives' daughters, or anywhere among our people? Must you go and take a wife from the uncircumcised Philistines?" The Hebrew says *ammi*, "**my** people". Both the NIV and the ESV say "all **our** people". The second sentence follows the ESV ("that you must go to take a wife from the uncircumcised Philistines") and the NIV ("Must you go to…").
- 14:16 "You gave my people a riddle and never told me the answer" = NIV "You've given my people a riddle, but you haven't told me the answer".
- 14:19 "killed thirty of their men and stripped them… the men who had explained the riddle" = NIV "struck down thirty of their men, stripped them… those who had explained the riddle".
- 16:3 "Samson lay there until the middle of the night" = NIV "Samson lay there only until the middle of the night". "The hill that looks toward Hebron" ≈ NIV "the hill that faces Hebron". "pulled them up" = ESV.
- 16:9 "She had men waiting in ambush in an inner room" ≈ ESV "she had men lying in ambush in an inner chamber".
- 16:13–14 "All this time you have played me for a fool… weave the seven braids of my head into the cloth on the loom… drive it tight with the pin" = NIV 16:13 "All this time you have been making a fool of me… weave the seven braids of my head into the fabric on the loom and tighten it with the pin", with ESV "fasten it tight with the pin". This was confirmed online.
- 16:20 "He woke from his sleep and thought, 'I'll go out…'" follows the NIV ("He awoke from his sleep and thought, 'I'll go out as before'"). The Hebrew is *vayyomer*, "and he said". See also finding 13.
- 16:22 "the hair on his head began to sprout again once it had been shaved" ≈ NIV "the hair on his head began to grow again after it had been shaved".
- 17:5 "Now this man Micah had" = NIV. "He made an ephod and household gods" = ESV. "…who became his priest" = ESV.
- 18:10 "God has put it in your hands… lacks nothing" ≈ NIV. 18:26 "turned around and went home" = NIV. 18:27 "went on to Laish, against a people…" = NIV "went on to Laish, against a people at peace and secure". 18:28 "The town lay in the valley near Beth-rehob… settled there" ≈ NIV.
- 13:17 "We want to honor you when your word comes true" = NIV "so that we may honor you when your word comes true". 13:12 "when your word comes true" also follows the ESV/NIV idiom.

**Fix:** As for finding 1. For 14:3, restore "my people".

**3. Major: Buber's view of the refrain is reversed.** (notes.json 17:6 "'No king in Israel': what does the refrain mean?"; chapters.json ch. 17 deep "The refrain 'no king in Israel'"; topics.json `kingship` section and `uncommon`)
These entries say "Martin Buber read the refrain the other way: Israel's true king was God, and human kings would not do better", and "Buber argued (3)". In *Kingship of God* (ch. 3), Buber argued that Judges joins an **anti-monarchical** book (built around Gideon's refusal in 8:23 and Jotham's fable) to a **monarchical** book, chapters 17–21. For Buber, the refrain belongs to the pro-monarchic layer. He did not read it as irony against kings. The "God is the absent king" reading of the refrain belongs to others, for example W. J. Dumbrell, "'In those days there was no king in Israel…': The Purpose of the Book of Judges Reconsidered," *JSOT* 25 (1983).
**Fix:** Say that Buber saw two books, one anti-monarchic and one (17–21) pro-monarchic. Credit view (3) to Dumbrell and others, and add a source key. Correct all four places.

**4. Major: An invented Milton quotation.** (notes.json 16:17 "Why does he tell her?")
"Milton's Samson blames his own weakness: he gave up his secret 'to a deceitful woman.'" That phrase is not in *Samson Agonistes*. I checked the full text (Representative Poetry Online, Toronto). The nearest lines are "But weakly to a woman must reveal it, / O'ercome with importunity and tears" (lines 50–51) and "Of a deceitful concubine who shore me" (line 537).
**Fix:** Quote line 50 exactly, or paraphrase without quotation marks. In the same area: the 16:21 note says Samson "opens his lament" with "Eyeless in Gaza…", but that is line 41, so write "laments". The 16:23 Dagon note credits Milton with "sea-monster". That phrase is from *Paradise Lost* 1.462 ("Sea Monster, upward Man / And downward Fish"); *Samson Agonistes* line 13 says "sea-idol". Name *Paradise Lost*.

**5. Major: The Talmud is credited with Rashi's explanation of the suspended nun.** (variants.json 18:30 `why`; notes.json 18:30 "Moses' grandson at an idol shrine"; chapters.json ch. 18 view J)
These entries say "The Talmud explains why: to spare Moses' honor", "The Talmud says the scribes added a small raised letter *nun*… so that Moses would not be shamed", and "The Talmud explains the raised letter… as protecting Moses' honor (Bava Batra 109b)". Bava Batra 109b says only that Jonathan was really Moses' grandson, and "because he acted like Manasseh, the verse linked him to Manasseh". It does not mention the raised letter or Moses' honor (Sefaria, Bava Batra 109b). The honor explanation is **Rashi** on Judges 18:30: "In deference to Moshe, the letter *nun* was included… It is written suspended to indicate that he was actually not Menasheh, but Moshe." Rashi cites Bava Batra 109b as his source for the identification.
**Fix:** Write "The Talmud says he was Moses' grandson, linked to Manasseh because he acted like Manasseh (Bava Batra 109b); Rashi adds that the *nun* was written raised out of respect for Moses." Add `rashi-judges` to `s`. The other details in the 18:30 entry are correct: four raised letters (Psalm 80:14; Job 38:13, 15), Alexandrinus Μωυσῆ and Vaticanus Μανασση. I confirmed the Greek readings online. You could also add the rabbinic identification of Jonathan with Shebuel (Bava Batra 110a; 1 Chronicles 23:16; 26:24) to the note. Chapter 18 view J already has it.

**6. Major: The 20:15 number variant is missing, and the note claims the numbers fit when they do not.** (variants.json; notes.json 20:35 "Told twice")
The note says "The numbers fit together… Of 26,700 Benjaminites (20:15), only 600 survive (20:47)." But 25,100 dead plus 600 survivors is 25,700, which leaves a thousand men unaccounted for. The Greek witnesses differ exactly here. The A text of 20:15 reads εἴκοσι καὶ πέντε χιλιάδες, 25,000, and 25,000 + 700 = 25,700 = 25,100 + 600. The B text reads εἴκοσι τρεῖς χιλιάδες, 23,000. I confirmed both on sacred-texts.com (Judges A and B, chapter 20). The KJV and all modern versions follow the Masoretic 26,000.
**Fix:** Add a variants entry on 20:15 "twenty-six thousand", with MT 26,000, LXX A 25,000 and LXX B 23,000. Follow the MT with an honest `why`: LXX A may be a harmonizing correction. Rewrite the note to admit the 1,000-man gap and point to the variant.

**7. Major: The refrain wording, and an ambiguous 14:7.** (plain.txt 14:3, 14:7, 17:6, 21:25; glosses 17:6; notes 14:3, 17:6, 21:25)
The Hebrew of 17:6 and 21:25 is *ish hayyashar be'einav ya'aseh*. The site's Deuteronomy 12:8 renders the same phrase "each of us doing **whatever is right in his own eyes**". The 14:3 note and the 17:6 note both quote that Deuteronomy wording to make the link, but the Judges verses themselves say "what **looked** right". The word "looked" is a weakness. It adds an appearance-versus-reality idea that the Hebrew carries through "in his own eyes", not through the verb. It also breaks the deliberate contrast with Deuteronomy's "what is right in the eyes of the LORD" (Deuteronomy 12:25, 28; 13:18; 21:9, all rendered that way on this site). In 14:7, "she looked right in Samson's eyes" reads in English as "she gazed straight into his eyes", which is wrong.
**Recommendation (one wording):** "Everyone did whatever was right in his own eyes." This matches Deuteronomy 12:8 word for word and stays distinct from the ESV ("what was right"). Carry the chain through Samson: 14:3 "She is the one who is right in my eyes"; 14:7 "and she was right in Samson's eyes". Keep the existing gloss ("whatever he thought best"). Update the summaries of chapters 17 and 21, the 14:3 and 21:25 note anchors, and the `period-of-judges` topic section, all of which quote the refrain.

**8. Major: A false lexical claim in the 19:2 variant.** (variants.json 19:2 `why`)
The `why` says "The verb *zanah*… is never elsewhere followed by *'al*, 'against.'" But Ezekiel 16:15 has וַתִּזְנִי עַל־שְׁמֵךְ, *vattizni 'al-shemekh*, "you played the harlot on account of your fame". The combination occurs elsewhere, though in a different sense. This sentence carries the argument for softening the verse, so it has to be accurate.
**Fix:** Write "is followed by *'al* only rarely, and nowhere else in the sense 'against' (compare Ezekiel 16:15, 'because of')." The rest of the entry is correct. I confirmed Alexandrinus καὶ ὠργίσθη αὐτῷ and Vaticanus καὶ ἐπορεύθη ἀπ᾽ αὐτοῦ online, and HALOT's *zanah* II "be angry" is real.

**9. Major: Fairness in chapters 19–21. The strongest older readings that blamed the woman, and the dissent on Genesis 19, are missing.** (chapters.json ch. 19 deep "Feminist and traditional readings" and "Genesis 19 and Judges 19 side by side"; notes 19:2)
The feminist side is well represented (Trible, Exum, Bal, Jones-Warsaw, Yee). The "traditional" side is reduced to Block condemning the men. A reader never meets the long tradition that took the Hebrew *zanah* at face value and blamed the woman, or the reasons it gave. That tradition includes the KJV's "played the whore", Keil and Delitzsch and other classic Christian commentators, and Pseudo-Philo, who says she was punished for sin (*Biblical Antiquities* 45). Josephus retells the story with the Levite's love and her quarrel in *Antiquities* 5.136–137. A fair page states that view in its strongest form: the Masoretic verb, the Targum's "she despised him", and the narrator's later silence. It then gives the answers already on the page (the Greek readings, "speak to her heart", her return to her father). The "side by side" box also says "most scholars think Judges 19 was told with Genesis 19 in mind" without naming dissent. Susan Niditch, "The 'Sodomite' Theme in Judges 19–20," *CBQ* 44 (1982), argued that the Judges version is the more original and better integrated of the two.
**Fix:** Add one paragraph to the ch. 19 deep section giving the traditional "unfaithful wife" reading with its sources, and say who rejects it and why. Name Niditch (1982) as dissenting on the direction of borrowing. The `pseudo-philo` and `josephus-ant` keys already exist.

### Minor

**10. Minor: The 18:7 "Aram" variant is missing.** (variants.json)
In 18:7 the MT has *im-adam*, "with anyone", while the LXX A text reads μετὰ Συρίας, "with Aram/Syria". I confirmed this on sacred-texts.com. The B text reads πρὸς ἄνθρωπον. Some modern versions (NRSV) read "Aram" in 18:7, and some also in 18:28. It is a one-letter difference (ד/ר) that changes the geopolitics. **Fix:** Add an entry. Following the MT is defensible.

**11. Minor: The 14:11 variant is missing.** The LXX A text reads ἐν τῷ φοβεῖσθαι αὐτοὺς αὐτόν, "because they feared him" (reading *kyir'atam* for *kir'otam*), against "when they saw him". This was confirmed online. Commentators discuss it as an explanation for the thirty "companions" acting as guards. While here: 14:11 "they found thirty companions" should be "they took" or "brought" (*vayyiqchu*).

**12. Minor: Wrong witnesses in the 20:43 variant.** It credits "Septuagint" with "from Nohah", but only the B text has ἀπὸ Νουα. The A text has ἀπὸ ἀνατολῶν ἡλίου. The list of versions following Nohah also leaves out the **ESV** ("trod them down from Nohah", confirmed on biblegateway). **Fix:** Name LXX B, and add ESV (and NRSVue) to that reading's `w`.

**13. Minor: Wrong witnesses in the 20:33 variant.** Only the A text reads ἀπὸ δυσμῶν τῆς Γαβαα, "from the west of Gibeah". The B text transliterates ἀπὸ Μααραγαβε. **Fix:** Correct `w`. Note that A reads "Gibeah", not "Geba".

**14. Minor: The 20:9 note gets the Greek backwards.** The note says "The Septuagint reads 'we will go up against it by lot' just as the Hebrew does." The Hebrew has no verb (*aleha begoral*, "against it by lot"). Both Greek forms add ἀναβησόμεθα, "we will go up". **Fix:** "The Hebrew is clipped, 'against it, by lot'; the Greek supplies 'we will go up', as the Plain English Translation does."

**15. Minor: Geba and Gibeah are handled inconsistently.** The Plain English Translation at 20:10 silently changes the Hebrew *Geva* to "Gibeah" (there is a note), but at 20:33 it keeps "Geba", and the 20:33 variant then says "'Geba' is probably Gibeah, as in 20:10". **Fix:** Choose one policy for both verses and say so in both places.

**16. Minor: "Rabbinic sources" without a name.** (notes.json 20:23; chapters.json ch. 20 view J)
The tradition exists. In Sanhedrin 103b, God says "You did not protest for My honor [Micah's idol], yet you protested for the honor of one of flesh and blood" (Sefaria). It also appears in Seder Eliyahu Rabbah (ch. 11/12), and in a form linking it to Micah in Pseudo-Philo, *Biblical Antiquities* 45–47. **Fix:** Cite Sanhedrin 103b (`bavli-sanhedrin`, already used on 17:13) and Pseudo-Philo.

**17. Minor: 16:20 "the LORD had turned away from him".** *sar me'alav* means "had departed / left him", as in 1 Samuel 16:14 and 18:12, which the note itself cites. "Turned away" adds a sense of aversion. **Fix:** "the LORD had left him", and update the anchors in the note, chapter summary, deep section and topics.

**18. Minor: 19:25 and 19:29 render the same verb differently.** The Plain English Translation has "grabbed" in 19:25 and "seized" in 19:29. The note on 19:25 argues that the identical verb (*vayyachazeq*) links the two acts. **Fix:** Use the same English in both verses, for example "seized".

**19. Minor: Who shaved Samson?** The chapter 16 summary says "She has his braids shaved", but the Plain English Translation and the 16:19 note insist on "she shaved". **Fix:** Make them agree.

**20. Minor: Brettler's argument is misreported.** (notes 17:6) "the Levites come from David's Bethlehem". Only the first Levite (17:7) does. The second Levite is from Ephraim (19:1), and Bethlehem is the concubine's home and the place of excessive hospitality. **Fix:** Reword.

**21. Minor: Timnah's border.** (notes 14:1) "Joshua listed Timnah on Dan's border (Joshua 15:10; 19:43)". Joshua 15:10 is Judah's northern border. Joshua 19:43 lists Timnah among Dan's towns. The Timnah of Genesis 38:12 is often thought to be a different place, the Judean hill-country Timnah of Joshua 15:57. **Fix:** Correct the first point and hedge the second.

**22. Minor: Quotations placed on the wrong verse.**
- notes 14:15 "Lure": "Both women nag Samson with tears and words 'day after day' (14:17; 16:16)". "Day after day" appears only in 16:16. 14:17 has "the seven days".
- notes 18:27: "That phrase, 'no rescuer,' is the language of the judges stories (3:9; 6:36)". 18:28 uses *matsil* (from *natsal*), but 3:9 and 6:36 use *moshia'* (from *yasha'*). **Fix:** Cite *matsil* parallels such as Deuteronomy 32:39 or Psalm 50:22, or drop the claim.

**23. Minor: The Joshua 22:9 quotation does not match the site.** (notes 21:12) The note says Joshua 22:9 "uses the same phrase, 'Shiloh, which is in the land of Canaan'". The site's Joshua Plain English Translation reads "at Shiloh in the land of Canaan". The build did not catch this because the reference does not directly follow the quotation. **Fix:** Quote the site's wording, or tell the Joshua owner that the Hebrew *asher be'erets kena'an* is identical in both verses and the two Plains could align.

**24. Minor: The wrong Bal book is cited.** (notes 16:15; chapters.json ch. 16 deep "Delilah through the centuries") Bal's reading of Delilah is in *Lethal Love: Feminist Literary Readings of Biblical Love Stories* (1987), not *Death and Dissymmetry* (`bal-death`). **Fix:** Add a key `bal-lethal`.

**25. Minor: An unverified Trible attribution.** (notes 19:27) "Trible calls it the most moving image in the story". I could not verify that wording. Trible comments on the hands on the threshold, but this superlative reads like a paraphrase presented as her claim. **Fix:** "Trible dwells on this image" or similar.

**26. Minor: The fish-god note overstates.** (notes 16:23 "Dagon was not a fish god") "It has no ancient support." Jerome already explained Dagon as *piscis tristitiae*, "fish of sorrow", in his book of Hebrew names (4th century). **Fix:** "It rests on a later folk etymology (*dag*, 'fish'), found already in Jerome and spread by medieval commentators…". On Milton, see finding 4.

**27. Minor: An unsourced legal claim.** (notes 14:20) "In ancient law, a groom who abandoned his bride could lose her". This needs a citation or a hedge. The closest Babylonian law, Hammurabi §§159–161, deals with forfeited betrothal gifts, and in §161 the slandering friend is explicitly barred from marrying the bride, which is nearly the opposite. **Fix:** Cite a specific law, or write "The father may have thought Samson had abandoned the marriage."

**28. Minor: Chapter 15 spec box contradicts a note.** The box ("the jawbone and the bone-cutting") calls a donkey's jawbone "an unclean thing that a Nazirite should avoid". The note on 14:9 correctly says the Nazirite corpse rule (Numbers 6:6) concerns human dead. **Fix:** Use "unclean flesh (Leviticus 11:39)" and drop "that a Nazirite should avoid".

**29. Minor: Chapter 17 spec box overstates.** "Israel's first private idol" ignores Gideon's ephod (8:27), which "all Israel" worshiped. **Fix:** "a private idol".

**30. Minor: The 17:7 spec on *ger sham* and Gershom, which the writer asked me to check.**
(a) The transliteration is wrong. The Hebrew is וְהוּא גָר־שָׁם, *vehu **gar**-sham*, with the participle "sojourning", not *ger*.
(b) Plausibility. The idea is better than the note says. *gar-sham* (גר שם) and *Gershom* (גרשם) have **identical consonants**, g-r-sh-m. Exodus 2:22 explains the name by *ger*, and the son of this Gershom is revealed in 18:30. I find it plausible, and I would rate it the strongest of the five spec boxes.
(c) Originality. I could not confirm a published source in a web search (Wikipedia's articles on Jonathan and on Micah's idol, general searches), but a match this exact is very likely already in the literature, especially in studies of name wordplay such as Moshe Garsiel, *Biblical Names: A Literary Study of Midrashic Derivations and Puns* (1991), or in the larger commentaries. Bava Batra 109b discusses this very clause, though only for the "Levite / of Judah" problem.
**Fix:** Correct to *gar-sham* and add the consonant point. Change "I have not traced whether a commentator has made this point" to "I have not found it in the commentaries I checked; it may well be noted elsewhere". Check Garsiel, Boling (AB) and Webb (NICOT) before claiming it.

**31. Minor: Missing word note on 20:16 "never missing".** *velo yachati* is the hiphil of *chata'*, the ordinary verb "to sin" ("miss the mark"). Ironically, it is the sinners' tribe that "never misses". This is a standard and useful note.

**32. Minor: Smaller translation points.** (plain.txt)
- 14:16 "cried on his shoulder": in English this means seeking comfort. The Hebrew is "wept over / upon him" (*alav*). Use "wept over him", as in 14:17.
- 15:19 "he came back to life": *vayyechi* here means "revived", and "came back to life" suggests he had died. Use "revived".
- 20:12 "through all the clans of Benjamin": the Hebrew is *shivtei*, "tribes". This oddity is worth keeping or noting, since "clans" silently smooths it.
- 16:25 "Their hearts were in a good mood" is awkward. Try "When their hearts were merry" or "In high spirits", avoiding the NIV.
- 15:11 "They did it to me first": "first" is added. The Hebrew is "As they did to me, so I did to them".

**33. Minor: Glosses.** 21:21 "festival line dances" contradicts the Plain English Translation and the note ("circle dances"). 16:25 "They were having a great time, and drinking" adds drinking, which the text does not mention.

**34. Minor: Transliteration and name consistency.** 13:18 note `orig` "vehu-feli" should be *vehu-fel'i* (פֶלִאי). The 13:18 note renders Isaiah 9:6 "Wonder of a Counselor", but the chapter 13 deep section has "Wonderful Counselor". Pick one.

**35. Minor: The note on 13:25 refers to itself.** "The note links Samson's story to the Danite migration" should be "The name links…".

**36. Minor: Unattributed claims in chapter views.** Chapter 14 view J says "Some say he hoped to convert her". Chapter 13 note on 13:7 says "The rabbis also read closely here". Name a source, for example the midrash, or drop the claim.

**37. Minor: Placement and naming of the new source keys.** (content/sources.json)
All eight works are real and correctly described. Alter 2013; Exum 1993; Dothan 1982; Milton 1671; Livy; Ovid *Fasti*; Pseudo-Philo *LAB*; and NETS Judges, translated by Satterthwaite (2007), are all accurate. Problems:
(a) `nets-judges` and `milton-samson` are specific to Judges and belong in `parts/13-21/sources.json`, not the global file.
(b) `pseudo-philo` is a bare author name. STYLE wants author plus work, so use `pseudo-philo-lab`.
(c) `livy-history` is a generic key, but its citation is limited to "book 1". Other books will cite other books of Livy. Drop "book 1" from the citation and give book and chapter in the notes, as 21:21 already does with "1.9".
(d) `dothan-philistines` is cited only on 13:1. Tell Qasile (16:26) uses `mazar-qasile`, which is correct.

**38. Minor: Missing topic tags.** `bethlehem` exists but is not tagged on 17:7, 19:1–10 or chapters 17 and 19, though the note on 21:25 makes Bethlehem central. `bethel` is not tagged on 20:18, 20:26–27 or 21:2. `golden-calf` is not tagged on 17:3 or 18:30, both of which mention Aaron's and Jeroboam's calves. `clean-and-unclean` is not tagged on 13:4 or 14:9.

**39. Minor: Topic cores.** `samson`, `tribe-of-dan`, `barrenness` and `gibeah` are justified new pages, and I found no duplicates. `barrenness` is distinct from `promised-seed`, though the `related` list could add it. One point: the `samson` core says his birth was announced "like Isaac's, Samuel's and John the Baptist's", but Samuel's birth is not announced by a messenger. **Fix:** "like Isaac's and John the Baptist's; compare Samuel's". The `tribe-of-dan` core is accurate: Bilhah's first son (Genesis 30:5–6), Irenaeus on Dan and the Antichrist, the Tel Dan Stele (1993). So is the `gibeah` core (Tell el-Ful; 2 Samuel 21:6).

**40. Minor: Cross-reference gaps in `r` lists.** The bodies cite verses that the `r` lists leave out: 13:6 (1 Kings 17:18), 13:25 (Daniel 2:1), 14:12 (2 Kings 5:5), 16:5 (2 Samuel 13:14), 16:16 (Job 21:4), 17:5 (Leviticus 8:33; Zechariah 10:2), 18:29 (1 Kings 4:25), 19:1 (2 Samuel 5:13), 20:6 (Psalm 26:10). The 16:16 `r` also writes "Judges 10:16" where STYLE wants the bare "10:16".

## Requested checks (summary)

- **A and B Greek at 16:13–14 and 19:2:** correct. A has ἐκοίμισεν αὐτὸν Δαλιλα; B has ἐγένετο ἐν τῷ κοιμᾶσθαι αὐτόν… Δαλιδα. In 19:2, A has ὠργίσθη αὐτῷ and B has ἐπορεύθη ἀπ᾽ αὐτοῦ. One wording slip in the 16:13 `why`: "Both verses… end with" "with the web". In the longer text the phrase occurs twice, but 16:13 does not end with it. Write "the phrase 'with the web' occurs twice".
- **"Fourth" at 14:15:** confirmed in both A and B. The BSB, NIV, ESV and NRSV follow "fourth". Following the MT is defensible as the harder reading.
- **"My house" at 19:18:** confirmed in both forms (A ἀποτρέχω, B πορεύομαι).
- **"Nohah" at 20:43:** B only. See finding 12.
- **Mari letter (19:29):** genuine. ARM II 48, from Bahdi-Lim to Zimri-Lim, proposes cutting off a prisoner's head and parading it through the towns so the troops will assemble. The note's description is accurate. Add the ARM number.
- **"Rabbinic sources" at 20:23:** they exist (Sanhedrin 103b and others). Cite them. See finding 16.
- **Shabbat 13a:** confirmed. "Go around, go around, and do not approach the vineyard, they say to the nazirite" (Ulla, Sefaria).
- **18:30 and Bava Batra 109b:** the Manasseh/Moses identification is correct, but the honor-of-Moses motive is Rashi's. See finding 5.
- **Echoes of Genesis 19 and Numbers 6:** they match the site's Plain English Translation. 13:5 "No razor is to touch his head" = Numbers 6:5. 13:7 "keep away from wine and other strong drink" = Numbers 6:3. 13:14 matches Numbers 6:4. 19:22 "so we can know him" = Genesis 19:5. 19:24 "Let me bring them out to you… whatever looks good to you" = Genesis 19:8. The quotations in the notes on 13:4, 13:5 and 19:22 are exact.
- **Terms (content/terms.json):** followed. *'edah* is "community", *cherem* is "under the ban", *'innah* (of a woman) is "dishonor", *u-vi'arta ha-ra'* is "sweep the evil out", *nokhri* is "foreigner" (19:12), *shelamim* is "peace offering", *nachalah* is "inheritance", and *Adonai YHWH* is "Lord GOD".
- **Style:** no em-dashes and no curly quotes. The reading level is appropriate. Poetry line breaks are present at 14:14, 14:18, 15:16 and 16:24.

## Fixes applied

Fix round by the part's writer. All 40 findings were accepted. A few were handled in part or differently, and the reasons are given below. Afterwards, `--check Jdg/13-21` and `--check Jdg` both report 0 errors, and the full build reports 0 errors. The one warning left in this part is in book.json, which belongs to the 1–12 writer, and so do the two other Jdg warnings, which are in parts/01-12 (all three quote the old refrain wording).

**Major**

1–2. **Translation drift.** I rebuilt each listed verse from `literal.js`, keeping the Hebrew order. The verses are:
- 13:12, 13:17
- 14:3, 14:16, 14:19
- 16:3, 16:9, 16:13–14, 16:20, 16:22
- 17:5
- 18:10, 18:26–28
- 19:12–13, 19:16–18, 19:22–27
- 20:2–3, 20:7, 20:22–23, 20:26, 20:31, 20:33–34, 20:36–37, 20:42–43, 20:47
- 21:1–2, 21:4–6, 21:12, 21:15, 21:17, 21:22–23

The NIV's "the whole army" (20:26) is now "all the people", and "fields" (19:16) is now "from the field". At 14:3 the text now reads "my people". Two phrases were kept on purpose because they echo Genesis 19 in its site wording: "so we can know him" (19:22, from Genesis 19:5) and "Let me bring them out to you … whatever looks good to you" (19:24, from Genesis 19:8). The clauses around them were rebuilt.

3. **Buber.** The text now gives Buber's two-book view (an anti-king book and a pro-king book, chapters 17–21, with the refrain in the pro-king book). View (3) is credited to Dumbrell; the new key is `dumbrell-purpose`. This is corrected in all four places: the 17:6 note, the chapter 17 deep section, and the `kingship` section and `uncommon` line. In the 17:6 note, Brettler's argument was reworded as finding 20 asked. The 21:25 note no longer says "the two Levites" came from Bethlehem.

4. **Milton.** The invented quotation is gone. The 16:17 note now quotes line 50 ("weakly to a woman must reveal it"). The 16:21 note now says "laments" and cites line 41. The 16:23 note credits *Paradise Lost*, book 1, for the fish-shaped Dagon.

5. **18:30.** The note, the variant `why` and chapter 18's view J now say what the Talmud says (Bava Batra 109b: Jonathan was Moses' grandson, linked to Manasseh because he acted like him) and credit the honor motive to Rashi. `rashi-judges` was added to `s`. I did not add Shebuel to the note, because chapter 18's view J already has it.

6. **20:15 variant added.** It gives the Masoretic 26,000, the A text's 25,000 and the B text's 23,000, and follows the Masoretic text. The `why` notes that the A text may be a harmonizing correction. The 20:35 note now admits the gap of 1,000 men and points to the variant.

7. **Refrain.** 17:6 and 21:25 now read "Everyone did whatever was right in his own eyes." 14:3 reads "She is right in my eyes" and 14:7 "she was right in Samson's eyes". I updated the gloss, the note anchors, the chapter 14, 17 and 21 summaries, the chapter 17 deep section and the topic quotations. The refrain is also quoted in parts/01-12 (the 2:11 note and `period-of-judges`) and in book.json. Those files belong to the 1–12 writer and still need the change.

8. **19:2 `why`.** It now reads "followed by *'al* only rarely, and nowhere else in the sense 'against' (compare Ezekiel 16:15)".

9. **Fairness.** Chapter 19's deep section has a new paragraph that states the older reading, which blamed the woman, in its strongest form: the KJV's "played the whore", Keil and Delitzsch, Pseudo-Philo *LAB* 45:3, and the Targum. The paragraph then sets out the answers to it. The 19:2 variant `b` now names the same tradition. The new keys are `keil-delitzsch-judges`, plus `pseudo-philo-lab`, which already exists in Num 11–21. Niditch (1982) is now named as dissenting in the deep section "side by side" and in the `sodom` topic, with the new key `niditch-sodomite`.

**Minor**

10. **18:7 "Aram".** Variant added. It follows the Masoretic text (with the B text).

11. **14:11.** Variant added for "feared him" (A text). The verb is now "brought".

12–13. **Witnesses at 20:43 and 20:33.** For 20:43, "Nohah" is now credited to the B text only, the ESV has been added, and the variant notes that the A text has no place name here. For 20:33, the A text is credited with "west of Gibeah" and the B text with "Maaragabe", each in its own reading.

14. **20:9.** The Greek is now described correctly.

15. **Geba and Gibeah.** The policy is now stated in both places. At 20:10 the text reads "Gibeah", because the whole story is about Gibeah. At 20:33 it keeps "Geba", because there the word is part of a name for a stretch of ground and the Greek witnesses disagree. The 20:10 note and the 20:33 variant cross-refer to each other.

16. **20:23 sources.** The 20:23 note and chapter 20's view J now cite Sanhedrin 103b and Pseudo-Philo.

17. **16:20.** Now "the LORD had left him" everywhere, including the `samson` core.

18. **19:25 and 19:29.** Both now use "seized", and the note gives *vayyachazeq*.

19. **Chapter 16 summary.** It now says "she … shaves off his braids". The `samson` topic says the same.

20. Fixed; see finding 3.

21. **Timnah.** Corrected and hedged, and Joshua 15:57 added.

22. **Misplaced quotations.** The 14:15 quotations have been fixed. In the 18:27 note, the claim about *moshia'* has been replaced: *matsil* is now linked to Deuteronomy 32:39 and Psalm 50:22.

23. **Joshua 22:9.** The 21:12 Plain English Translation now reads "at Shiloh in the land of Canaan", and the note cites the site's Joshua wording. I then scanned every note, chapter, topic and variant in this part for a reference followed by a quotation, checking each against the site's Plain English Translation. The only other hit was the Genesis 22:10 quotation in the 19:29 note, and it matches. That scan also turned up and fixed these Judges self-quotations: 13:22, 14:18, 15:11, 18:10 and 19:28.

24. **Bal.** The 16:15 note now cites `bal-lethal`. The `bal-death` citations elsewhere are about the Timnite and chapters 19–21, which is correct.

25. Now "Trible dwells on this image".

26. **Dagon.** The note now says "a later folk etymology, found already in Jerome".

27. **14:20.** The unsourced legal claim has been removed. The note now says only what the father may have believed.

28–29. **Spec boxes.** Both have been corrected: "unclean flesh (Leviticus 11:39)" and "a private idol".

30. **17:7 spec.** It now reads *gar-sham* and makes the point that the four consonants are the same (גר שם / גרשם). It now says "I have not found this point in the commentaries I checked; a match this close may well be noted elsewhere." I could not consult Garsiel, Boling or Webb directly, and a web search found nothing, so the claim is kept modest.

31. **20:16 "never missing".** Word note added.

32. **Smaller translation points:**
- 14:16 "wept over him"
- 15:19 "revived"
- 20:12 keeps "tribes", with a gloss
- 16:25 "When their hearts were glad"
- 15:11 "As they did to me, so I have done to them"

33. **Glosses.** 21:21 now reads "dances in a ring at the festival", and the drinking has been removed from 16:25.

34. **13:18.** The transliteration is now *vehu-fel'i*. The note now uses "Wonderful Counselor (literally 'Wonder of a Counselor')", which matches the deep section.

35. Now "The name links".

36. The unattributed claims at 13:7 and in chapter 14's view J were removed.

37. **Sources.** `nets-judges` and `milton-samson` were moved into this part's sources.json. The global `pseudo-philo` key was removed, and all its uses now point to the existing `pseudo-philo-lab` key. `livy-history` now covers the whole work. No change was needed for (d).

38. **Topic tags.** `bethlehem`, `bethel`, `golden-calf` and `clean-and-unclean` were added to the topic lists of the chapters named. The notes on those verses already carry a topic, and each note can carry only one, so the tags went on the chapters.

39. **Topic cores.** The `samson` core now says "like Isaac's and John the Baptist's …; compare Samuel's". `barrenness` already lists `promised-seed` as related. I did not edit the `promised-seed` core, which belongs to another writer.

40. **Reference lists.** The missing `r` entries were added, and "Judges 10:16" is now the bare "10:16". The ARM 2.48 reference was added at 19:29, and the 16:13 `why` slip was fixed.
