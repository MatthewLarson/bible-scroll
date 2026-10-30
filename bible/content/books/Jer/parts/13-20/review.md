# Hostile review: Jeremiah 13-20 (part 13-20)

## Verdict

The part is serious work. `VERBOSE=1 node tools/build.js --check Jer/13-20` gives 0 errors and 0 warnings (174 verses, 118 notes, 20 variants). Facts mostly hold up. I checked Rashi on 20:7, the haftarah for Bechukotai, Swete's Greek, the Ketiv/Qere list and the Qumran transcriptions. No reader-facing text says "from memory". It is not ready, though, for these reasons.

1. One variant entry (17:19) gives a Qumran reading the scroll does not have.
2. The 17:5-11 and 17:19-27 rebuilds, and parts of 13:16-19 and 20:14-18, still keep a modern version's sentence shape.
3. A Talmud citation (Bavli Shabbat 96b) does not say what the part claims.
4. One Jewish-practice claim (18:18-23 in "the reading cycle") is unsupported.
5. A settings card settles a question that the traditions card on the same chapter treats as open.
6. The saints card at 15:1 duplicates the 7:16 card in part 07-12.
7. The wedding phrase and a few key terms are inconsistent across parts.
8. A few Ketiv/Qere and Qumran variants are missing or misdescribed.

None of this is critical. Several items are major.

Witnesses I read myself: the Leningrad consonants, `texts/auto/Jer.json`, Swete's Greek (`lxx.py`), 4QJer-a and 4QJer-c via `dss.py`, and Sefaria's Rashi and Shabbat texts. I did not read the Targum, Vulgate, Peshitta, Radak, or Rashi on 13:7.

Drift note: I describe the NIV/ESV shapes below and quote only a few words.

## Findings

### Major

**1. variants.json, 17:19: the "king of Judah" reading is not in the scroll.** (major, invented or garbled manuscript reading)
- The entry puts "king of Judah" (מלך יהודה) in 4QJer-a, "about 200-150 BC", and hedges it as "irregular".
- `dss.py` prints the scroll's word as «מלךייהודה»: m-l-k, then yod, yod, then h-w-d-h.
- Leningrad's מלכי יהודה has the same letters: m-l-k-y, then y-h-w-d-h. The only difference is a final-form kaph in mid-word, which is a letter shape.
- The scroll therefore agrees with the Masoretic Text ("kings"), as does the Greek (`basileis`). The transcription only joined two words.
- The real differences at 17:19 are different. The scroll has no article on "people" (`'am`, the Ketiv; Qere `ha'am`) and has the verb spelled `ybw'`.
- Fix: delete the "king" reading. Either drop the entry or rewrite it as the no-article reading, with 4QJer-a agreeing with the Ketiv. Then fix the 17:19 note, which already speaks of the written text lacking the article.

**2. plain.txt, 17:19-27 (the sabbath sermon): residual NIV/ESV shape.** (major, drift)
- 17:19: "enter and leave" and "every gate" follow the usual English clause order. "People's Gate" is the common English name; the Hebrew is "gate of the sons of the people" (the note covers this).
- 17:21: "For your own lives' sake, do not pick up a load ... and bring it in through Jerusalem's gates" has the same two-verb shape as NIV ("carry a load ... or bring it through"). The Hebrew has two clauses joined by *we-*, so this is allowed, but "for your own lives' sake" is ESV's "for the sake of your lives".
- 17:22: "Do not take a load out of your houses ... and do not do any work. Set the sabbath day apart as holy, as I ordered your ancestors" tracks NIV and ESV almost clause by clause.
- 17:24-27: "if you truly listen ... and bring no load ... and set the sabbath day apart as holy by doing no work on it" matches NIV's "keep the Sabbath day holy by not doing any work on it". The 17:25-26 order matches the common versions, and "lived in forever" is ESV's "inhabited forever" pared down. In 17:27, "set fire to its gates. It will devour Jerusalem's fortresses" matches NIV's fire, gates and fortresses.
- Fix: rebuild from `literal.js Jer 17`. Keep the Hebrew order only where it is forced; vary the verbs (for example, "lift" or "haul" for `nasa'`; "your lives" as the object of "guard"). Re-audit 17:19-27 line by line.

**3. plain.txt, 17:5-11: residual drift.** (major, drift)
- 17:5: "Cursed is the one who puts his trust in humans, who makes flesh his strength" keeps ESV's "makes flesh his strength".
- 17:6: "shrub in the desert ... salty ground where nobody lives" follows ESV's "uninhabited salt land".
- 17:8: "In a dry year it has no worry, and it never stops producing fruit" is NIV's "no worries in a year of drought and never fails to bear fruit". "Its leaves stay green" is NIV's "always green".
- 17:9: "beyond cure" is NIV's wording. The Hebrew `'anush` is "incurable" or "grievously sick"; "past healing" or "sick beyond healing" would not copy NIV.
- 17:11: "gathers eggs it did not lay" is NIV's image and "the one who makes wealth, but not with justice" is ESV's shape.
- Fix: rebuild 17:5-6, 17:8 and 17:11 to a different shape. Keep 17:7 and 17:10 where the Hebrew forces them.

**4. plain.txt, 20:14-18: still close to the common versions.** (major, drift)
- 20:14-15 ("The day my mother gave birth to me, let it never be blessed"; "A curse on the man who carried the news to my father") keeps the Bible-wide shape.
- 20:17 "because he did not kill me in the womb, so my mother would have been my tomb, her womb forever swollen" copies both versions' clause-by-clause build ("grave" becomes "tomb", "enlarged" becomes "swollen").
- 20:18 "Why did I come out of the womb at all? To look at hardship and grief, and to have my days run out in disgrace?" is the same question, answered with synonyms.
- The Hebrew forces much of this, but not "because ... so ...". Consider the Hebrew order: "Who did not put me to death from the womb? Then my mother would have been my grave."
- Fix: re-render with at least a different sentence division in 20:16-17. Re-audit 20:15-16.

**5. plain.txt, 13:17-18: drift.** (major to minor)
- 13:17: "in hidden places I will weep because of your pride ... my eye will run with tears ... led away captive" follows NIV's "weep in secret because of your pride ... led away captive".
- 13:18: "Take a low seat" is ESV's "Take a lowly seat".
- Fix: "Sit down low" for `hashpilu shevu`; "taken into exile" for "led away captive".

**6. plain.txt, 14:14: "I did not appoint them" mistranslates `tsivvitim`.** (major, translation, and a NIV carry-over)
- The verb is `tsivvah`, "command" (Deuteronomy 18:20 uses the same verb).
- "I did not send them. I did not appoint them. I did not speak to them" is NIV's sentence ("not sent them or appointed them or spoken to them").
- Fix: "I did not send them. I did not command them. I did not speak to them." The 14:14 note already cites Deuteronomy 18:20 ("what I did not command").

**7. plain.txt, 15:8: "Their widows are more to me than the sand of the seas" reads wrongly.** (major, clarity, and a mistranslation risk)
- The Hebrew `'atsemu li 'almenotaw mi-chol yamim` means the widows are *more in number* than the sand. "More to me" reads as "worth more to me", the opposite sense.
- Fix: "I have made their widows more numerous than the sand of the seas" or "More widows ... than the sand of the seas." Then fix the chapter 15 summary, which already says "the widows outnumber the sand".

**8. notes.json, 17:21 and the 17 settings card: Bavli Shabbat 96b does not cite Jeremiah 17.** (major, factual error or invented citation)
- The note says "the Talmud (Bavli Shabbat 96b) cites this verse for the ban". Chapter 17 J repeats it as "cites 17:22".
- Sefaria's text of Shabbat 96b has Exodus 36, Leviticus 25, and Numbers 15 and 27 (the wood-gatherer, the weavers, carrying four cubits). It has no Jeremiah.
- The sources.json entry `bavli-shabbat` is also cited at 17:19-27 in the settings card.
- Fix: cite the passage that actually quotes Jeremiah 17:21-22. Look at the Bavli's discussions of carrying out and the Mishnah's thirty-nine acts, or at Yerushalmi Shabbat 1:1, and check on Sefaria. If none is verified, cite only Mishnah Shabbat 7:2 and say rabbinic carrying law is later (and independent of Jeremiah's wording).

**9. notes.json, 18:21: "Jewish tradition keeps the prayer in the reading cycle without comment" is unsupported.** (major)
- Jeremiah 18:18-23 is not a haftarah or a fast-day reading as far as I know. The part's own haftarah claim at 16:19-17:14 for Bechukotai is correct (I confirmed it).
- Fix: delete the sentence or name the reading. Radak on 18:23 would be a real Jewish source on the imprecatory prayer if you want one.

**10. chapters.json, 17 settings (v 17:5-11), `why`: a contested reading stated as fact.** (major, fairness)
- It says: "The question of 17:9 is not about original sin but about why people trust the wrong things."
- The same chapter's traditions card gives Reformed, Lutheran, Catholic, Orthodox and Methodist views on how 17:9 bears on original sin. The deep note says "Whether it also describes every human being is the subject of the card".
- Fix: say "in its first setting the verse is about Judah's heart; whether it also describes every human heart is the subject of the card below." Also check 17 X, which says 17:9 "is used for the doctrine of original sin (see the card)". That one is fine.

**11. chapters.json, 15 traditions: duplicate of the 7:16 card in 07-12.** (major, duplication)
- Both ask "Do the saints in heaven pray for the living?" and cite 2 Maccabees 15:12-16 (14). 07-12 files it under top `intercession`; 13-20 under `communion-of-saints`. The two will appear as parallel pages.
- They do not contradict. Catholic, Orthodox and Lutheran answers agree. But the 15:1 Reformed entry is only "No. Prayer is to God alone" with no source detail, where the 07-12 card cites Westminster 21.2 and 1.3. The 15:1 Lutheran entry gives "do not pray for church in general" with Apology of the Augsburg Confession as source.
- The 15:1 card also never says Moses and Samuel are the *dead* in the verse, which is why it is a saints question.
- Fix: drop the 15:1 card and cross-reference the 7:16 card. If it stays, use one top, copy the 07-12 Reformed wording and sources exactly, and add the line about Moses and Samuel standing before God.

**12. Cross-part: the wedding phrase differs.** (major, consistency)
- 7:34: "the sound of joy and the sound of gladness, the sound of a groom and the sound of a bride".
- 16:9: "the voice of joy and the voice of gladness, the voice of the bridegroom and the voice of the bride".
- 25:10: "the sound of joy and the sound of gladness, the voice of the bridegroom and the voice of the bride".
- The Hebrew is `qol sason weqol simchah, qol chatan weqol kallah` all three times.
- The 16:9 note calls these the same refrain (7:34; 16:9; 25:10), and 33:10-11 and Revelation 18:23 repeat it.
- Fix: choose one wording for the refrain and use it in all four. The lead should decide, since 07-12 and 21-25 are other parts' files. 16:9 is the most literal (`qol` = "voice" throughout).

### Minor and mixed

**13. variants: Ketiv/Qere and Qumran items missing or misdescribed.** (minor to major)
- 17:13: the note says the written text is `yesurai` and the margin `vesurai`. `texts/auto/Jer.json` says Ketiv *yisorai*, Leningrad *yesurai* (vowels and doubling, not a waw). The Greek (`aphestekotes epi tes ges`) differs from both, and the Plain English Translation's "turn away from me" is the only place in the verse with a first-person shift. There is no variant entry although the note discusses a variant.
- 17:10: Ketiv *kidarko* ("his way") against Qere *kidrakhav*; 4QJer-a reads the singular (‹כדרכו›). The Plain English Translation follows the Qere and the entry is missing.
- 17:19: 4QJer-a has no article on "people" and agrees with the Ketiv (see 1).
- 20:4: 4QJer-c reads `magor` without the lamed that the Masoretic Text has (`lemagor`). The 20:4 entry says only that the scroll "agrees". The entry should say "agrees on the word, lacks the prefix".
- 19:5: the Greek also lacks "I never spoke of it" (`welo dibbarti`), not mentioned. (Minor.)
- 15:3: the Greek says "I will punish ... four kinds" (`ekdikeso`) where the Hebrew has "I will appoint"; no variant needed, but the note could say so.

**14. notes.json, 14:1: "droughts" and 17:8.** (minor)
- The note says the heading uses the plural "here and in 17:8". 17:8 has `ba-shenat batsoret`, singular ("a year of drought").
- The note's claim that "the book places the drought after the early Josiah years and before 597" is unsourced guesswork stated as the book's placement.
- 14:11 note: "shows him praying for Babylon's exiles (29:7)" is wrong. 29:7 is Jeremiah's letter telling the exiles to pray. 14:11's note also treats 14:7-9 and 14:19-22 as Jeremiah's prayers, where the section titles say "the people pray" (the chapter 14 settings card hedges, "the people, or Jeremiah").

**15. notes.json, 13:11: quotes NIV's wording.** (minor)
- "for praise, fame and honor" in quotes for Deuteronomy 26:19 is a well-known NIV phrase. Paraphrase it or give only the three Hebrew words.

**16. notes.json, 18:6: Paul and the potter.** (minor)
- "He is more likely using Isaiah 29:16 and 45:9" is flat. Wisdom 15:7 is also a potter text read next to Romans 9. Hedge it as "commentators usually think".

**17. notes.json, 17:19 / 17:25-26: small slips.** (minor)
- 17:25-26 is cited for "king and servant". Those verses name kings, princes, the people and worshipers from all Judah. There is no servant.
- "the longest sabbath text outside the Torah" (chapter 17 deep note) is untested, and Nehemiah 13:15-22 and Isaiah 58 are comparable. Delete "longest" or say "one of the longest".
- 17:16 note says "Chief Shepherd" (a 1 Peter 5:4 title) of the LORD. Use "the LORD the shepherd".

**18. notes.json, 20:7: "the Greek is the source of the traditional English 'deceived'".** (minor)
- Unproven. The Vulgate (`seduxisti`) and Geneva sit between. Say "the Greek (`epatesas`) and the older English versions read 'deceived'".
- Rashi's gloss, "You enticed me to go on your mission", is confirmed on Sefaria; Rashi adds "You overcame me ... against my will" on `chazaktani`, which would strengthen the note. Radak I did not check.
- 20:10: the gloss "beat him" for `nukhal lo` (we will prevail over him). Fine but "overpower him" would echo 20:7 and 20:11 (`yukhalu`).

**19. chapters.json, 13 X: unsupported Christian reading.** (minor)
- It claims Paul "uses the idea of a nation that clings to God" at Romans 11:1-2, and then Galatians 3:27 ("clothed" with Christ). Neither verse is connected to the loincloth in any source named. Label it "a possible echo" with a source, or drop it. Chapter 15 J ("Rashi and Radak on 20:7 are given at that verse") is filler in a Jewish-view slot and should be replaced with a real 15:1 or 15:10-21 Jewish reading (for example, Moses and Samuel in Psalm 99:6 and the Midrash on Jeremiah's complaint).

**20. glosses.json, 18:22: "a gang of raiders" glossed as "a gang of raiders".** (minor)
- The gloss repeats the anchor. Change to "a raiding band" or drop it.

**21. plain.txt, 15:11-18 and 15:3: lighter echoes.** (minor)
- 15:11 "Truly I will set you free for good ... make the enemy plead with you in a time of evil and a time of trouble" keeps ESV's "set you free ... plead with you in the time of disaster and in the time of distress". Part of the verse is uncertain Hebrew, which the note says.
- 15:15-18 ("Why has my pain lasted forever, and my wound turned incurable, refusing to be healed?") keeps ESV's three-part sentence. 15:19 and 15:3 are good.
- 14:14, 14:22 and 16:19-20 still resemble the common versions in places, but the Hebrew forces them.

**22. Chapter 14 and 19 traditions.** (minor)
- No traditions cards in 13, 14, 16, 19 and 20. That is acceptable. For 16:2 (celibacy) and 14:11 (intercession ban) a real conflict among churches exists only for monastic celibacy (Catholic and Orthodox against the Reformation); that is a cross-reference, not a requirement.
- The 17:9 card gives the Reformed answer from Westminster 6.4 and Dort III-IV; "Yes" is fair as an answer to the question as phrased. The Catholic answer is "inclines us to sin" with CCC 405 and 1865; 1865 is about sin generally. CCC 405-406 would be more exact.

## Checks that passed

- 15:1 versus 7:16 and 11:14: the notes (15:1, 14:11) and the chapter 14 deep note do not contradict the 07-12 ban-on-prayer treatment. They agree that the ban is a verdict, not a rule against prayer.
- 20:3, 20:10 and 6:25: the capitalized name "Terror All Around" at 20:3 and the lower-case quotation at 20:10 and 6:25 are acceptable. The 20:10 note links the quotation to 20:3. 6:25 has no exclamation mark and 20:10 does; fine.
- "Enticed" is used consistently at 20:7 and 20:10, with a real note.
- 16:14-15 versus 23:7-8: the two Hebrew texts differ (16:15 `ha`aleh ... benei yisra'el`; 23:8 `ha`aleh weasher heVi'`), so the different renderings are defensible. They share "As the LORD lives ... brought the Israelites up from the land of Egypt" exactly. The Greek has both passages in place.
- 15:13-14 and 17:3-4 correspond closely and are cross-referenced.
- 11:20 and 20:12: the Hebrew differs in the first two lines; the Plain English Translation matches the Hebrew.
- Haftarah: Jeremiah 16:19-17:14 is read with Bechukotai. Confirmed. (When Behar and Bechukotai are joined, the Behar reading is used; the part need not say so.)
- 13:3-8 and the other Qumran claims (4QJer-a at 13:1-7, 13:22-23, 14:4-7, 15:1-2, 17:8-26, 18:15-23 and 19:1; 4QJer-c at 19:8-9 and 20:2-18): the statements "preserves" and "does not preserve" are accurate where I compared the transcriptions. Only the 17:19 and 20:4 points above are wrong or incomplete.
- Sources checked: Rashi on 20:7 confirmed from Sefaria.
- No reader-facing "from memory" or "not rechecked". The sentence "Ziegler's critical edition was not available" is honest but reads like a work log; consider "I read Swete's text of Codex Vaticanus".

## Fixes applied

1. Accepted. Checked with dss.py: 4Q70 at 17:19 has «מלךייהודה», the letters of "kings of Judah" run together; no "king" reading. Entry rewritten as the real difference (no article on "people": Ketiv and 4QJer-a against the Qere), and the 17:19 note now says the scroll agrees with the Ketiv.
2. Accepted. 17:19-27 rebuilt from literal.js (gate of the people's sons, "Be on guard with your lives", "haul a load", "No load is to go out", "kindle a fire in its gates", new 17:24-25 order). Anchors updated.
3. Accepted. 17:5, 6, 8, 9, 11 rebuilt ("trusts in humankind", "takes flesh for his strength", "land of salt", "feels no anxiety", "sick beyond healing", "gathers a brood", "by what is right"). 17:7 and 17:10 kept (forced). Variant and gloss anchors updated.
4. Accepted. 20:14-18 re-divided: "Cursed is the day", the messenger cursed with "glad, so very glad", 20:16 ends at "noon", 20:17 becomes a question ("Why did he not put me to death in the womb? Then my mother would have been my grave"), 20:18 reworded.
5. Accepted. 13:17 "my whole self will weep in secret places ... taken into exile"; 13:18 "Sit down low ... your crown of splendor". Note anchor changed.
6. Accepted. 14:14 now "I did not send them. I gave them no command. I did not speak to them", with the note naming tsivvah and Deuteronomy 18:20.
7. Accepted. 15:8 "I have made their widows more numerous than the sand of the seas" (the chapter 15 summary already said the widows outnumber the sand).
8. Accepted. Shabbat 96b could not be verified (Sefaria search of Shabbat 49b, 96b and Eruvin 17b found no Jeremiah). The claim is deleted from the 17:21 note, the chapter 17 J view, the sabbath topic and the 17:19-27 settings card; the bavli-shabbat key is dropped from this part. Only Mishnah Shabbat 7:2 remains, with a line that the rabbinic law is later than Jeremiah.
9. Accepted. The sentence about the reading cycle is deleted from the 18:21 note.
10. Accepted. The 17:5-11 settings "why" now says the verse is first about Judah's heart and whether it describes every heart is the subject of the card.
11. Accepted. The 15:1 traditions card is removed. The 15:1 note now says Moses and Samuel were dead and points to the card at 7:16 (same top, "intercession"). The orphan "communion-of-saints" top is gone from this part. Chapter 15 J view rewritten.
12. Accepted with the lead's decision. 16:9 now reads "the sound of joy and the sound of gladness, the sound of the groom and the sound of the bride", and the note says qol is "sound" in all four places. 07-12 (7:34), 21-25 (25:10) and 33:11 must match.
13. Mostly accepted. New variants for 17:10 (Ketiv "his way", 4QJer-a agrees by spelling) and 17:13 (vowel forms, Greek differs); the 17:13 note no longer says the margin reads "vesurai". 20:4 entry now says the scroll has magor without the prefix lamed. 19:5 note now says the Greek lacks "I never spoke of it" (checked with lxx.py). 15:3 note names the Greek ekdikeso.
14. Accepted. 14:1 note now says 17:8 has the singular and drops the unsourced dating; 14:11 note no longer says Jeremiah prays for the exiles (29:7 is his letter telling them to pray) and says the prayers of 14:7-9 and 14:19-22 are the people's, or perhaps his for them.
15. Accepted. 13:11 note now paraphrases Deuteronomy 26:19 as "praise, name and splendor" with the three Hebrew words.
16. Accepted. 18:6 now says commentators usually think Paul draws on Isaiah 29:16 and 45:9, and adds Wisdom 15:7.
17. Accepted. The 17:25-26 "king and servant" is now "from the king to the common person"; "longest" became "one of the longest" (chapter 17 deep note and topic, naming Nehemiah 13 and Isaiah 58); "Chief Shepherd" became "the LORD the shepherd".
18. Accepted. 20:7 note: "the Greek and the older English versions ... read 'deceived'", with the Vulgate seduxisti, and Rashi's "you overcame me against my will" added. I could not check Radak, so the Radak summary is removed from the 20:7 note and the chapter 20 J view, and radak-jeremiah is dropped from this part. 20:10 "beat him" left (it is the Plain English Translation's wording of an uncertain verb; the note carries the sense).
19. Accepted. Chapter 13 X no longer says Paul uses the loincloth idea; it says no New Testament writer quotes the sign and that Galatians 3:27 is a different image. Chapter 15 J replaced with Psalm 99:6 and Ezekiel 14:14. The deep note on witnesses no longer reads like a work log or mentions unchecked sources.
20. Accepted. Gloss for 18:22 is now "a raiding band" (17:6 gloss anchor moved to "a land of salt").
21. Partly accepted. 15:11 and 15:18 reworded ("Surely I will free you for good ... come to you with a plea in an evil time"; "Why is my pain unending, my wound beyond curing, unwilling to heal?"). 14:14 beyond the fix at 6, 14:22 and 16:19-20 left, as the Hebrew forces them.
22. Partly accepted. No new cards in 13, 14, 16, 19, 20, as the review allows. The Catholic answer at 17:9 now cites CCC 405-406. The 16:2 and 14:11 cross-references were already in the notes.

Also applied from the lead's decisions: 20:3 "Terror all around" (variant and notes follow); 18:21 "killed by plague" became "put to death" (the Hebrew is hargei mavet, not dever). No dever occurs elsewhere in this part's Plain English Translation except 14:12 ("disease"), already correct.
