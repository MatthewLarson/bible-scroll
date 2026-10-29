# Hostile review: Ephesians 4-6 (part 04-06)

Reviewer: hostile-reviewer agent. Checked: plain.txt against `texts/orig/Eph.json` (SBLGNT and Byzantine), `texts/auto/Eph.json`, Swete's LXX (`tools/lxx.py`), `content/terms.json` plus the nt proposals, Romans Plain, part 01-03 Plain, all part files, and `node tools/build.js --check Eph/04-06`. The check shows 0 errors and 0 warnings for Eph. The three errors it prints (Zec/Mal source key, `new-covenant` topic) are other lanes' files and are not part of this review.

## Verdict

The part is competent and mostly honest. Hedges such as "not rechecked here" are used, and no invented source turned up. It is not ready to publish. There is one factual error about a confession (the Lutheran Table of Duties), and several claims about the Greek or the LXX are wrong or unsupported. The Plain's treatment of 5:22 undercuts the very argument the variants and notes make for 5:21. The variants file misses real readings that the Plain itself follows (4:28 "own", 4:9 "parts", 5:31). It also states the witnesses for its readings only in general terms, with no manuscript lists. The headship and slavery cards are broadly fair, but the Orthodox headship answer is missing and several modern denominational claims have no source. The settings treat the Rome/AD 60-62 setting as the default throughout, although the book is flagged as possibly deutero-Pauline. A number of smaller slips remain (a lowercase "so", a garbled sentence, term drift on "sweet-smelling" and "greed"). No Wikipedia source is used. The Wikipedia items are Special:Search "links" in topic cores, and the household-codes one is a pointless duplicate pair.

## Findings

### Major

1. **Major. `chapters.json` ch. 5, traditions card "Does the husband lead the wife...", Lutheran entry.** It says the Small Catechism Table of Duties "quotes 5:25 to husbands and 5:22 to wives." This is wrong for husbands. The Table of Duties gives Colossians 3:19 (and 1 Peter 3:7) to husbands. Only the wives' section cites Ephesians 5:22 (with 1 Peter 3:5-6). I confirmed this against the Concordia text. The "Lutherans today are divided" sentence (LCMS headship, ELCA partnership and women's ordination) has no source. Fix: correct to "Colossians 3:19 and 1 Peter 3:7 to husbands, Ephesians 5:22 to wives". Add sources for the LCMS and ELCA statements, or hedge them.

2. **Major. plain.txt 5:22 versus variants.json 5:22 and the 5:21 notes and deep dive.** The variant entry and deep dive argue that in the earliest text (P46, Vaticanus) 5:22 has no verb and takes its verb from the participle in 5:21. The Plain nevertheless renders an independent imperative with extra force: "Wives, you are to submit to your own husbands." It also starts a new section at 5:22 and adds "and" before 5:21's "submitting" (the Greek is asyndetic). SBLGNT has no verb at 5:22. So the Plain reads the Byzantine/TR way and hides the dependence it says matters. Fix: something like "Wives, to your own husbands, as to the Lord" with the verb carried over, e.g. "Wives, do the same for your own husbands, as to the Lord," or a rendering that keeps the grammar visibly dependent. At minimum, say in the variant `b` that the Plain's imperative is a choice that sharpens the debated reading. The `orig` field in the 5:22 word-note also gives ὑποτάσσεσθε (Byzantine) for a verse the note says has no verb.

3. **Major. plain.txt 5:23.** The Greek begins ὅτι ἀνήρ ἐστιν κεφαλή ("because/for a husband is head..."). The Plain drops the ground clause and simply states "A husband is head of his wife." That removes the stated reason for the wives' command. It matters in a verse every tradition argues over. Fix: "For a husband is head of his wife...". Related: 5:24 adds "their own" and "should" (Greek: τοῖς ἀνδράσιν; "own" is Byzantine only). 5:25 "show love" for ἀγαπᾶτε departs from the term "love" (terms.json: ἀγαπάω = love).

4. **Major. variants.json is missing readings the Plain actually follows or that affect it.**
   - 4:28: the Plain has "his own hands," following SBLGNT ταῖς ἰδίαις χερσὶν τὸ ἀγαθόν. `texts/auto` shows NA brackets ἰδίαις, and the Byzantine text has a different order (τὸ ἀγαθὸν ταῖς χερσίν) without it. There is no entry.
   - 4:9: the second variant (μέρη, "parts," bracketed in NA28; auto: "Byzantine μέρη | NA [μέρη]") is only mentioned in the `p` and `why` text. It has no `readings`, and no witnesses are named. See also finding 8 on how the note uses it.
   - 5:31: Byzantine adds αὐτοῦ after "father" (so "his father and ... mother"); SBLGNT/Tregelles read τῇ γυναικί against πρὸς τὴν γυναῖκα; the note itself says Paul differs from the LXX in the opening words. There is no entry.
   - 5:14: the Western reading (D*, I recall ἐπιψαύσεις τοῦ Χριστοῦ, "you will touch Christ") is real and should be verified and listed. The 5:14 note admits "I have not checked their texts here" for the longer quotations by early Christian writers. That is an unfinished job. Clement of Alexandria (*Protrepticus* 9), and Epiphanius (who attributes the lines to an apocryphal Elijah text), are the usual evidence. Check and fill in. The "lost book" option in the note should carry this.
   - 4:19: ἀπηλγηκότες ("lost all feeling," the Plain) against the Western/Latin ἀπηλπικότες ("despairing," Vulgate *desperantes*). The Western reading is not in `texts/auto`, so verify it before adding. The Plain follows ἀπηλγηκότες without a note.
   - 5:2: the `b` says "the same split appears in the second pronoun." Per auto, only WH reads ὑμῶν ("for you"); Tregelles reads ὑμᾶς...ἡμῶν. State this precisely.

5. **Major. Witness lists throughout variants.json are generic.** Nearly every entry says "the oldest manuscripts, as reported by Metzger; individual lists not rechecked here." Only 5:22, 5:30 and 6:1 name P46 and Vaticanus. The brief asks for witnesses. For 4:6, 4:17, 5:9, 5:27, 6:10, 6:12, 6:16 and 6:24, supply the actual manuscripts from NA28/Metzger (e.g. 5:30 omission also in א* and A; 6:1 omission in B D* G and some Latin and Clement). I could not verify every list from memory, so the writer should check each against NA28 and Metzger, not take mine on trust. Also:
   - 4:6: the entry assigns "you" to the TR and "us" to the Byzantine text. Auto data agrees (TR ὑμῖν; Byz ἡμῖν). My own memory of the Majority text is that it reads ὑμῖν, so verify this one against the NA28 apparatus before it stands.
   - 6:10: the second reading conflates two variants (Τὸ λοιπόν and the added ἀδελφοί μου). The first reading is glossed "Finally," but Τοῦ λοιποῦ is literally "from now on" (the 6:10 note says so). The Plain "Finally" actually matches the Byzantine Τὸ λοιπόν. Separate the variants and fix the gloss.
   - 4:17: the `why` is muddled ("a Gentile reader is now not one of 'the Gentiles' at all" attached to the copyist's softening). With "the rest of," the readers remain Gentiles distinct from the rest; the short text makes "the Gentiles" an outside group. Rewrite the reasoning.

6. **Major. `notes.json` 4:9 and deep dive "Psalm 68:18 and the descent": LXX claim is wrong.** The note says the Septuagint uses "lower parts of the earth" for the place of the dead at Psalm 63:9 and Ezekiel 32:18. Checked against Swete: LXX Ps 62:10 has εἰς τὰ κατώτατα τῆς γῆς (superlative, not Ephesians' comparative κατώτερα). LXX Ezek 32:18 has εἰς τὸ βάθος τῆς γῆς ("the depth of the earth"), not "lower parts." The same wrong claim and reference are in the `descent-into-hades` topic contribution. Fix: say that Ps 63:9 (LXX 62:10) uses the superlative κατώτατα; that the Hebrew behind Ezek 32:18 is "lower earth" (אֶרֶץ תַּחְתִּיּוֹת) with a different Greek rendering; adjust the topic section to match. Also reading (3) "the grave... The word for 'parts' is missing in some witnesses, which leaves 'the lower [things] of the earth'" does not support "grave." Dropping μέρη changes nothing about the place, and the comparative genitive ("lower than the earth," treated by Hoehner and Lincoln) is not among the three options. Restructure the readings (realm of the dead / the earth / the lower regions "than the earth").

7. **Major. `chapters.json` ch. 5 notes: kephale note (5:23) mis-sorts Cervin.** The sentence "(2) source... (Cervin argued that 'authority' is rare; Bilezikian and Mickelsen for 'source')" places Cervin in the "source" camp. His 1989 article rebuts the "source" meaning (and doubts "authority" is the usual one), and he argues for "preeminence/prominence." The source title in sources.json already says "A Rebuttal." Fitzmyer is listed in `s` for 5:23 but not discussed in the text (he argued "head" has no "source" sense in the parallels); Bilezikian and Mickelsen have no source keys. Fix: move Cervin under (3) with the correct label, discuss Fitzmyer, and give sources for Bilezikian and Mickelsen or drop the names.

8. **Major. Orthodox answer on headship is missing.** The headship card's Orthodox entry gives only the wedding epistle and a Chrysostom line about the husband's self-giving. It never states the Orthodox position on whether the husband leads. Chrysostom Hom. 20 (on Eph 5:22-33; this homily number is right) does both: it puts the husband in the "head" place and tells him to love as Christ did. The Orthodox wedding rite also has the wife "fear her husband" (verify wording). As written, the card shows only the softer half, which breaks the fairness rule. Add the other half and a source.

9. **Major. Settings state the Pauline/Roman setting as the default.** `chapters.json` ch. 4, 4:1-6 `when`: "Rome about AD 60-62 is the usual view"; ch. 5 5:1-14 `when`: "the same letter, written in custody"; ch. 6 6:21-24 `when`: "as the letter is sent from Paul's custody." The book is flagged as possibly deutero-Pauline (about AD 80-90 for many scholars) and the "to" is debated. These lines state a disputed date and circumstance as settled. The 6:5-9 `to` says the enslaved and the slaveholders "heard the letter in the same room," also stated as fact. Fix: "as the letter presents itself, from Paul's custody; if written after his death, from a follower of the Pauline circle, about AD 80-90," and soften the "same room" line.

10. **Major. Term drift against `terms.json`.**
    - 5:2 Plain "a sweet-smelling fragrance." The site's term for re'ach nichoach is "soothing smell." The note itself quotes Gen 8:21 and Exod 29:18 in that wording and says the Greek is how the LXX renders it. Plain should be "a soothing smell" (or a term must be added and the difference explained).
    - 4:19 πλεονεξία is rendered "always wanting more" but "greed" at 5:3 and 5:5. Use "greed" (the gloss can say "always wanting more").
    - 6:23 ἀδελφοί: the term says "brothers" with a gloss "brothers and sisters." There is a note but no gloss in glosses.json.
    - 6:5 δοῦλος: the term requires a note at first use in each book on Greek and Roman slavery and why many English Bibles say "servant." The 6:5 note covers slavery but not the "servant" translation point. Check whether 01-03 already carries it; if not, add.

11. **Major. Lutheran/Reformed/Baptist modern-day claims lack sources.** In the headship card: PCA/OPC versus PC(USA)/RCA ("generally read the passage as calling for mutual submission" is a sweeping claim), the Cooperative Baptist Fellowship line, and the ELCA line. In the slavery card: the Reformed Presbyterian (Covenanter) entry and the Quaker entry have no sources, as do the Orthodox baptism, offices and wine entries. The Covenanter claim is historically right in outline (the Synod moved against slaveholding members in the early 1800s; I recall 1800-02), but it needs the date, the proper name (Reformed Presbyterian Church of North America), and a source. Thornwell is paired with it as if both were "Reformed"; keep the contrast but cite both. The Westminster Confession cited for headship says nothing on headship (WCF 24.2 speaks of mutual help only). Cite the denominations' own statements.

### Minor

12. **Minor. plain.txt 5:8 typo:** "in the Lord. so walk as children of the light," lowercase "so" after a period. Fix punctuation.

13. **Minor. plain.txt 6:15 "shod."** Archaic; not 8th grade. Use "with your feet fitted with."

14. **Minor. plain.txt 6:10:** drops "and" in "in the Lord and in the might of his strength."

15. **Minor. chapters.json ch. 4, `views.L`:** garbled sentence, "and the the 'old self' and 'new self' uses clothing language." Rewrite. Ch. 6 `views.L` says Paul "adds a shield and belt" yet the 6:14 note and ch. 6 H lens source the belt from Isaiah 11:5; correct.

16. **Minor. Ch. 4 `views.J` says Paul's "took" to "gave" is "likely tied" to the Moses/Sinai tradition**, while the deep dive says the Targum's date relative to Paul is debated. Align: "possibly." The Targum and Peshitta claims in the 4:8 note are hedged ("as commentators report; not rechecked here"). From memory, Targum Ps 68:19 does address Moses ("You ascended to the firmament, prophet Moses") and the Peshitta does read "gave," but verify and cite.

17. **Minor. 4:3 note:** says *syndesmos* is "from the same family as the 'joint' (*haphe*) of 4:16." They are different word-families; the two appear together in Colossians 2:19 (ἁφῶν καὶ συνδέσμων). Correct.

18. **Minor. 4:21 note:** claims that the accusative in "heard him" shows it is literal hearing and "not 'heard about him.'" Greek usage is the other way (genitive of person = hear a speaker; accusative of person is the usual "hear about"). Lincoln and Hoehner discuss this: Christ is "heard" in the preaching, so the accusative does not mean "heard him in person." Soften or fix.

19. **Minor. 4:25 note:** "Paul's wording follows the Greek Old Testament": LXX Zech 8:16 has πρὸς τὸν πλησίον, Paul has μετὰ τοῦ πλησίον. Say "close to."

20. **Minor. 4:30 note:** says "grieve" comes from Isaiah 63:10. LXX Isa 63:10 has παρώξυναν ("provoked"), not λυπεῖτε. The link is to the Hebrew *'itstsebu*. Say so.

21. **Minor. 4:32 note:** "Paul does not use his usual word for forgive here." Paul's usual verb is in fact *charizomai* (2 Cor 2:7, 10; Col 2:13; 3:13). Remove "usual."

22. **Minor. 4:28 note:** "Some think the thief is a former slave or a day laborer" has no named source. Cite or drop.

23. **Minor. 6:2 note:** says Paul's promise wording is "closer to the Greek of Deuteronomy 5:16 than to Exodus 20:12." Checked against Swete: Eph 6:2 omits σου after "mother," exactly as LXX Exod 20:12 does (Deut 5:16 LXX has σου); the promise clause matches both. Say it blends the two or follows Exodus, and drop "as commentators note" unless named.

24. **Minor. Ch. 5 `views.H`:** "A Roman marriage normally placed the wife under her husband's household." By Paul's day most Roman marriages were *sine manu*, with the wife staying legally under her father or on her own. Fix.

25. **Minor. Ch. 5 deep dive "Reading 5:21":** says mutual submission is "the view in egalitarian teaching and in many Catholic and Orthodox writers" (no source). It also says "Both agree... the reasons given are 'in the Lord' and not appeals to custom," which the "Cultural form" view in the 5:22-33 setting denies. Soften or source. Ch. 5 deep dive "household code": "It tells husbands to love, which the pagan lists do not" overstates; Jewish lists (Pseudo-Phocylides) and Plutarch speak of affection. Say "which Aristotle's list does not."

26. **Minor. Ch. 5 deep dive "great mystery":** says that *sacramentum* made the verse the main text for "Catholic and Orthodox" teaching on sacraments. Orthodox use Greek *mysterion*, and the Latin word is irrelevant to them.

27. **Minor. Ch. 5 `views.C`:** "The Greek of 5:22 has no verb" as flat fact; say "in the earliest manuscripts (see the variant)."

28. **Minor. Ch. 6 `views.T` and card:** "Luther's 'A Mighty Fortress' draws from it" is asserted without support; the hymn is built on Psalm 46. Hedge, or drop the Ephesians link from the 6:17 note. Pentecostal entry cites Mark 16:17 without noting the longer-ending textual question the site otherwise stresses.

29. **Minor. Ch. 6 `views.J`:** says Torah gave slaves "some protections (Exodus 21; Leviticus 25:39-46)" which Paul does not cite. Lev 25:44-46 permits permanent slavery of foreigners, so the passage does both. State both.

30. **Minor. Lutheran descent card:** "after he was made alive" is not in FC SD 9, which says "after the burial." Adjust or source the idea.

31. **Minor. Wine card:** the Catholic entry "moderate drinking of wine is good (Catechism 2290)" overstates; CCC 2290 speaks about temperance and avoiding excess. Quote what it says. SBC "since the late 1800s (for example 2006)" is clumsy; give a first date.

32. **Minor. Missing traditions.** On the slavery card: Anglican, Lutheran, Anabaptist/Mennonite (Germantown 1688) and the Black church tradition (AME) are absent. On the baptism card: Anglican, Methodist, Churches of Christ and Pentecostal; the 4:5 card has no Orthodox source. Add at least a line each, or state in the card that coverage is partial.

33. **Minor. Sources.** `baptist-faith-message-2000` in the global sources is scoped to "article 4, Salvation," but the part cites articles 2, 6, 7 and 18. `bcp-1662` is described as "including the Order for the Burial of the Dead" but is used for marriage. Fix the global entries (lane merge) or add part-level keys.

34. **Minor. Topic links.** `content/proposals/nt/topics/household-codes.json` has `links: [["Haustafel","Haustafel"]]`, a search link that adds nothing next to the aka; `headship.json` labels "Biblical authority and gender" but searches "Complementarianism." These render as Wikipedia Special:Search links (`app.js` WIKI), so they are not cited as sources, but label them honestly or remove them. The core topics `household-codes`, `armor-of-god`, `headship`, `descent-into-hades` and `tychicus` have empty `sections` and rely on the contributions; confirm that is the intended pattern.

35. **Minor. Spec boxes.** "Truthing in love" says "I have not seen the two tied together as one argument." Commentators (Lincoln, Hoehner) commonly link 4:15 and 4:25. Remove the novelty claim or keep only the label. The "armor and the guard" box is properly labeled and hedged; keep.

36. **Minor. Glosses.** 4:19 "greedy for more and more" and 5:3 duplicate the same idea under different words (see finding 10). 6:21 gloss on "servant" is awkward ("the Greek is diakonos...") but accurate. Nothing else in glosses.json is wrong or patronizing.

37. **Minor. Rom consistency checks (clean).** The notes quote Romans 6:6, 12:2, 12:4 and 12:5 exactly as in the Rom Plain. "old self" matches Romans 6:6. "Parts of one another" (4:25) and Romans 12:5 are consistent. "Heavenly world" (6:12) agrees with part 01-03 and the term. "Fullness" (4:13), "sealed" (4:30), "saints" and "mystery" match part 01-03. The only inconsistencies are those in finding 10.

## Items checked and found sound (so the fixer does not touch them)

- Irenaeus *Against Heresies* 5.31.1 does cite Ephesians 4:9 for Christ's descent to the dead. Correct.
- Chrysostom Hom. 20 is the homily on Eph 5:22-33; the Paschal homily quote about Hades being embittered is correct. The paschal sermon is correctly labeled "attributed."
- Josephus, *Against Apion* 2.201 on the woman as "inferior" and "to be submissive" is right. Talmud Yevamot 62b, Berakhot 5a (Ps 4:4) and Sotah 14a are right. Aristotle *Politics* 1253b and *NE* 4.8 are right. Livy 2.32 is right. Community Rule 3:13-4:26 is right.
- Gregory of Nyssa, Homily 4 on Ecclesiastes; Augustine, Tractates on John 80.3; Calvin Institutes 4.3.4-5, 2.16.8-12, 4.19.34-37; Heidelberg Q44; Thirty-Nine Articles 3 and 25; Trent session 24 canon 1; CCC 632-635, 861-862, 2414; GS 27; Gregory XVI 1839; Mulieris Dignitatem 24; Casti Connubii; BFM 2000 article 18 quotes; Anglican Ordinal Preface: all fit what I know of them.
- The Samaritan Pentateuch does read "the two of them" at Gen 2:24, with the LXX. The note's hedge ("is reported") is fine.
- `methodeia` occurs only at 4:14 and 6:11 in the NT; *thyreos*, *kybeia*, *porosis*, *eutrapelia*, *exagorazo* glosses are sound. Daniel 2:8 (Theodotion) uses ἐξαγοράζετε καιρόν.
- Plain against the Greek: no other mistranslation, omission or addition found beyond findings 2, 3, 10, 12-14. No visible drift toward NIV/ESV beyond natural Greek order ("offering and sacrifice," "not against flesh and blood" is rightly reversed to the Greek's "blood and flesh").

## Fixes applied

Each finding was checked against `texts/orig/Eph.json`, `texts/auto/Eph.json` and Swete's LXX (`tools/lxx.py`). Status in brackets: fixed, partly, or declined.

1. [fixed] Lutheran Table of Duties corrected on the headship card: Colossians 3:19 and 1 Peter 3:7 go to husbands, Ephesians 5:22 to wives, and the card says it does not quote 5:25. The unsourced LCMS/ELCA divide is cut to the checkable fact (the LCMS does not ordain women, the ELCA does), with a line that their statements are not cited.
2. [fixed] Plain 5:22 now reads "Wives, to your own husbands, as to the Lord," with no verb, and the "and" is dropped from 5:21, so the Plain shows the dependence on "submitting." The 5:22 variant (anchor, readings, why, b) and the word-note (anchor, p, b, `orig`) say the same thing; the note's `orig` gives the verb-less text and names the Byzantine verb. The section heading stays at 5:22 (a heading is not a claim about grammar; the note and deep dive say the verse hangs on 5:21).
3. [fixed] 5:23 restores "because" (hoti). 5:24 loses "their own" and "should" ("so also wives to their husbands in everything"), and a new 5:24 variant records that "own" is Byzantine and Textus Receptus only. 5:25 "show love" is now "love," and the note anchor follows.
4. [partly] Added variants at 4:9 ("parts"), 4:28 ("own hands") and 5:31 (the added "his" after "father"; the dative against pros for "wife"). The 5:2 variant is corrected: only Westcott-Hort has "for you" in the second pronoun; Tregelles has "you ... for us." Not done: a Western reading at 5:14 and the 4:19 "despairing" reading as variants, because I could not verify them from the sources here. The 5:14 note says so and names Clement and Epiphanius as the writers usually cited; the 4:19 note records the Vulgate's "despairing."
5. [partly] Manuscript lists added only where I could confirm them (5:30: P46, first hand of Sinaiticus, Alexandrinus, Vaticanus; 6:1: Vaticanus, Bezae first hand, Boernerianus). For 4:6, 4:17, 5:9, 5:27, 6:12, 6:16 and 6:24 I did not invent lists; the entries say which editions carry which reading (checked against the STEPBible comparison, which confirms for 4:6 that the Textus Receptus has "you" and the Byzantine text "us"). 6:10 now states its two differences (Tou loipou, "from now on," against To loipon plus "my brothers"). 4:17's reasoning is rewritten.
6. [fixed] 4:9 note rewritten as three readings (realm of the dead, the earth itself, the regions lower than the earth); "grave" dropped. LXX claim corrected: Psalm 62:10 (63:9) has the superlative katotata; Ezekiel 32:18 in Greek has a phrase for the depth of the earth, and the Hebrew has "the lower earth." The same correction is in the chapter 4 deep dive and the `descent-into-hades` topic contribution.
7. [fixed] Kephale note: Cervin moved to the "prominence" view with the right label; Fitzmyer is discussed; Bilezikian and Mickelsen are dropped (no source keys).
8. [fixed] Headship card, Orthodox entry: now states that Chrysostom (Hom. 20) takes the husband as "head" and the wife's submission as the church's, beside the weight he puts on the husband's self-giving, and notes that the wedding epistle includes 5:33. I did not quote the rite's wording. `ware-orthodox` added to the Orthodox entries on baptism, offices, the Spirit and marriage.
9. [fixed] The `when` lines at 4:1-6, 5:1-14, 6:21-24 and the "same letter" lines state Rome about AD 60-62 as one view and give the AD 80-90 follower view; the 4:1 note says "one view, if Paul wrote it"; the 6:5-9 `to` drops "in the same room."
10. [fixed] Plain 5:2 "a soothing smell" (note anchor and text updated); 4:19 "with greed" (gloss re-anchored); 6:23 "brothers" now has a gloss; the 6:5 note adds the doulos and "servant" point.
11. [partly] Unsourced denominational claims were trimmed, not cited from memory: the Reformed and Lutheran headship entries, the Baptist "other bodies" line, and the Westminster claim (WCF 24.2 is now said to speak of mutual help, not headship). The Covenanter entry now has its proper name and "early 1800s" but no source; Thornwell and the Quaker entry stay unsourced. No citation was added that I could not check.
12. [fixed] 5:8 "So walk."
13. [fixed] 6:15 "fitted with."
14. [fixed] 6:10 "and in the power."
15. [fixed] Ch. 4 `views.L` sentence repaired; ch. 6 `views.L` now sources the belt (Isa 11:5), breastplate and helmet (Isa 59:17).
16. [partly] Ch. 4 `views.J` "likely" is now "may." The Targum and Peshitta claims stay hedged ("as commentators report, not rechecked"), with a note that the Targum's date is debated; I could not verify them here.
17. [fixed] 4:3 note: syndesmos and haphe are different words, linked in Colossians 2:19.
18. [fixed] 4:21 note rewritten: the accusative can mean "heard about"; most commentators take it as Christ heard in the preaching.
19. [fixed] 4:25: "close to" the LXX, which has "to his neighbor" against Paul's "with."
20. [fixed] 4:30: the link is to the Hebrew `'itstsebu`; LXX Isa 63:10 has "provoked."
21. [fixed] 4:32: "usual" removed; Paul's other uses of charizomai cited.
22. [fixed] 4:28: the unsourced thief claim removed.
23. [fixed] 6:2 note: a blend of the two; matches Exodus 20:12 in leaving out "your" after "mother," and both on the promise; "as commentators note" removed.
24. [fixed] Ch. 5 `views.H`: Roman marriage without manus.
25. [fixed] Ch. 5 deep dives: attributions for the 5:21 view softened; the "in the Lord" claim no longer set against the cultural-form view; "which Aristotle's list does not," with Plutarch and Jewish writers acknowledged; the 5:25 note softened the same way.
26. [fixed] Great-mystery deep dive: the Latin sacramentum belongs to the Catholic line; Orthodox use the Greek mysterion.
27. [fixed] Ch. 5 `views.C`: "in the earliest manuscripts."
28. [fixed] "A Mighty Fortress" hedged (built on Psalm 46) in `views.T` and the 6:17 note; the Pentecostal Mark 16:17 entry notes the longer ending.
29. [fixed] Ch. 6 `views.J`: both sides of Leviticus 25.
30. [fixed] Lutheran descent card: "after his burial," whole person of Christ.
31. [partly] Catholic wine entry restated from CCC 2290 (temperance, abuse); the SBC line now says "over many decades" with the 2006 resolution, because I have no verified first date.
32. [partly] Anglican added to the baptism card (Article 27) and the slavery card (Wilberforce, 1807); a "sample, not a full list" sentence added to the 4:5 note and the slavery deep dive. Not added: Anabaptist, Black church, Methodist, Churches of Christ and Pentecostal baptism lines, which I could not source.
33. [declined here, passed to the lead] `baptist-faith-message-2000` and `bcp-1662` are global entries in other books' sources.json files, outside this part; the lead should fix their descriptions.
34. [fixed] `household-codes` Wikipedia link removed; `headship` link relabelled to match its search. The empty `sections` on the five cores are left as the pattern of the contributions.
35. [fixed] "Truthing in love" spec box: the novelty claim replaced with a statement that the label is mine.
36. [fixed] Glosses: 4:19 and 5:3 no longer duplicate; 6:23 added.
37. [no action] The reviewer found this part clean.

## Verification pass (2026-10-29)

Brought to STYLE.md rule 2. Counts (approximate, by item): verified about 75 (kept, hedges removed); corrected about 25 (wrong or overstated detail fixed); removed about 35 (could not be opened here). Main corrections: the 5:9 witnesses (P46 reads "Spirit"), 4:9 "first" (Vaticanus has it), the Quaker 1776 entry, the Table of Duties citation, Calvin on apostles, the SBC 1995 and 2006 entries, the kephale note (Cervin and Fitzmyer). Witness lists now come from the NET Bible's text-critical notes (read on BibleGateway) for 4:9, 5:2, 5:9, 5:22, 5:30, 6:1 and 6:24; the other variants name only the editions the word list shows, and no entry cites Metzger. Removed because no source could be opened: the Anglican offices entry, Orthodox, Wesley, Barclay, Yoder, Arnold and Wagner details, Gregory of Nyssa, Plutarch, and several modern denominational claims. Full log: `.scratch/Eph-04-06-verify/sources-checked.md`.



## Verification check (2026-10-29)

Hostile re-check of the verification pass, by a separate reviewer. Note numbers below are 0-based positions in notes.json. Opened this session: texts/orig (Eph, Col, Act), texts/auto/Eph.json, tools/lxx.py (Swete), Sefaria (Sotah 14a, Mishnah Peah 1:1), Perseus (Livy 2.32), BibleGateway (Wisdom 5:17-20), biblia.com NET Bible notes (Eph 4:9 and 6:1), Wikipedia (Textual variants in the Epistle to the Ephesians, Pentecostalism, New Apostolic Reformation, Seventh-day Adventist theology, Eastern Orthodox theology, Community Rule). Working files: .scratch/Eph-check/.

### (1) Hedges and unopenable works: 0 hedges, 0 unopenable keys, 3 minor issues
1. (minor) No hedge phrase from the pass's grep remains in this part's JSON. (A grep for "UBS" also matches "subsists", a false hit.) No `metzger`, `comfort-commentary` or `thgnt` key remains.
2. (minor) "NA28" appears about 24 times in variants.json and notes. Where it names an edition reading or a bracket it is backed by texts/auto/Eph.json (which lists NA27/28 with brackets at 4:9, 4:28, 6:1 and elsewhere), so these are allowed. The text goes further in four places by explaining why NA28 brackets a word: variants 4:9 "parts" ("The brackets in NA28 record that doubt"), 6:1 ("The NA28 editors put them in brackets to show their doubt"), 4:28 ("the NA28 brackets show the editors' doubt"), 5:31 note. The editors' reasons were not opened; say only that the word list shows the brackets.
3. (minor) Variant witness lists for 4:6, 4:17, 4:28, 4:32, 5:5, 5:21, 5:24, 5:27, 5:29, 5:31, 6:10, 6:12 and 6:16 were reduced to editions. They also name "Westcott-Hort", "Tregelles", "Textus Receptus" and "Tyndale House"; texts/auto shows those edition marks (NA28+NA27+Tyn+SBL+WH+Treg, TR+Byz), so this is supported.

### (2) Spot checks (16 claims)
Verified:
4. Livy 2.32 tells the fable of the body and the belly (Menenius Agrippa): Perseus. Verified (note 16).
5. Wisdom 5:17-20: God takes zeal as armor, righteousness as breastplate, impartial justice as helmet: BibleGateway. Verified (note 70).
6. Sotah 14a: follow God's attributes, clothe the naked, visit the sick, console mourners, bury the dead: Sefaria. Verified (note 31).
7. Mishnah Peah 1:1: honoring father and mother among things whose fruits are enjoyed in this world while the principal remains for the world to come: Sefaria. Verified (note 62).
8. Ephesians 6:21-22 repeats Colossians 4:7-8 in about thirty Greek words: counted with a script on SBLGNT, 30 words in matching blocks. Verified (note 83).
9. methodeia occurs only at Eph 4:14 and 6:11 in the New Testament: texts/orig search. Verified (note 71).
10. Exodus 20:12 (LXX) omits "your" after "mother" while Deuteronomy 5:16 has it; Isaiah 63:10 (LXX) reads paroxynan; Zechariah 8:16 (LXX) has "to his neighbor" with pros; Genesis 8:21 has osmen euodias; Jeremiah 2:5 has mataion; Daniel 2:8 has kairon exagorazete; Psalm 4:5 (LXX) has orgizesthe: tools/lxx.py. All verified (notes 25, 26, 29, 33, 18, 43, 62).
11. NET Bible note on 6:1: omitted by B, D*, F, G; included by P46, Sinaiticus, A, D2, Psi, 0278, 33, 1739, 1881, Majority text; NET judges the words original: biblia.com. Matches the variant card. Verified.
12. NET Bible note on 4:9: "first" omitted by P46, Sinaiticus first hand, A, C*, D, F, G, 6, 33, 81, 1739, 1881; "parts" lacking in D*, F, G, it and P46: biblia.com. Matches the cards, except the cards add Old Latin, Psi, 1175, 1505 and 2464 and Sinaiticus corrector details that the summary I could read did not show. Verified for the core list; the extras not re-seen.
13. Variants 5:9: P46 and the Byzantine tradition read "Spirit", P49, Sinaiticus, Alexandrinus, Vaticanus read "light": Wikipedia "Textual variants in the Epistle to the Ephesians". Verified (the pass's "oldest manuscripts" correction was right).
14. Pentecostal 1:13-type claim "a distinct experience after conversion shown at first by speaking in tongues" (card ch1/0): Wikipedia "Pentecostalism" ("a definite experience occurring after salvation"; tongues "initial physical evidence" for most denominations). Verified.
Not verifiable here, or no source in the log (kept from memory):
15. (major) Note 64 (6:5): "Many scholars estimate that in the cities one person in five or more was enslaved". No source key supports a figure and the log does not list it. Rule 2 forbids a number from memory. Cut the figure or source it.
16. (major) Note 73 (6:12): "kosmokratores ... was used in Greek texts of gods and later of emperors". Not in the log. Note 54 (5:26): "Greek weddings began with a bridal bath". Not in the log. Note 63 (6:4): paterfamilias "right of life and death ... limits by Paul's day". Not in the log (broad, but it carries a legal claim). Note 76 (6:14): Josephus Jewish War 3.93-97 on the Roman soldier's gear; the log lists Josephus Against Apion only. Note 20 (4:19): the Vulgate reads "desperantes"; not in the log. Each needs a source or must go.
17. (minor) Dates: ch0 settings "Rome about AD 60-62" and "about AD 80-90, as many scholars hold" carry no source and are not in the log; note 0 repeats AD 60-62. Rule 2 lists a date as a checkable detail.
18. (minor) Note 5:8 (index 40): "Community Rule 3:13-4:26" (sons of light and darkness, a "walk" in each). The Wikipedia page I opened does not mention these columns and no other source was opened; the log lists only the existence of Vermes.
19. (minor) Note 48 (5:22): "the form came from Greek duty-lists (Dibelius) ... or answered Roman suspicion that foreign cults upset households (Balch)". The log verified only that the books exist, not the theories.

### (3) Named modern-scholar attributions not shown as checked
20. Left in notes and chapters without a log entry of the claim: Dibelius and Balch (note 48, item 19); "Commentators such as Lincoln and Hoehner weigh all three" (note 9; the only attribution of a position to named modern scholars in the part besides kephale); Fitzmyer's 1989 article counted on the "authority" side (note 50: the log itself says the page opened did not state his conclusion and it rests on one survey, theologyintheraw.com); Cervin placed with the "prominence" view on the same survey; the "Greever, Tyndale Bulletin 2020" report (the log says it was read). Source keys lincoln-ephesians, hoehner-ephesians, best-ephesians, richards-secretary, glancy-slavery, harrill-slaves, vermes-complete-dss are cited by notes for general support; the log checked that the books exist, not that they say what the notes attribute to "commentators". Note 83 ("Some hold that Paul, or a secretary, wrote both ... others that a later writer copied Colossians") cites best-ephesians and richards-secretary on that point.
21. (major) The Grudem, Cervin and Fitzmyer lines in note 50 now rest on a survey page's classification of the authors, not on their texts, and the pass dropped the "prominence" and "source" attributions to named scholars only partly. The note says "argued by a number of egalitarian scholars" for the source view, with no name or source. Wikipedia-level or survey-level support only; mark the survey in the note or cut the unnamed claim.
22. No card row in this part rests on Wikipedia; those are in part 01-03. The Pentecostal rows here (see 23) rest on nothing.

### (4) Traditions cards: 0 cards under two views; 9 cards hold rows with no source, and several lost a clearly distinct view
23. (major) Rows with no key, stated from memory under "broad facts": Orthodox (baptism: Creed only; "Easter icon ... raising Adam and Eve"; "bishops hold apostolic succession ... three-fold order"; chrismation "follows baptism"; wine and fasting; chant; marriage "crowning of the couple"; renouncing Satan, prayer and fasting); Quaker baptism ("Friends hold the one baptism is the inward baptism ... no water baptism"; Barclay was removed); Adventist alcohol; Restorationist ("Churches of Christ sing without instruments ... never mentions instruments"); Reformed ("Some Reformed churches sing only psalms and without instruments"; "Many Reformed teachers hold that all believers are baptized in the Spirit"); Pentecostal (apostles and prophets in a fivefold ministry; Spirit baptism after conversion; "instruments of all kinds are welcomed"; deliverance). Each is plausible but is a position of a named church stated with no page opened, which STYLE.md rule 2 ("what a named ... church says") does not allow. The Pentecostal apostle-and-prophet row is also overstated against Wikipedia: "Pentecostalism" says Pentecostal denominations criticized Latter Rain claims and "New Apostolic Reformation" says many Pentecostals and charismatics are concerned about NAR's promotion of those offices, so "many Pentecostal and charismatic churches teach that Christ still gives apostles and prophets" is not supported.
24. (major) Lost views with no replacement: the music card (5:19) now has four of five rows unsourced, and the Lutheran, Anglican and Methodist views were dropped with the Zwingli, Calvin and Luther lines (the log removed them), so the Reformed psalm-only claim has no sourced counterpart. The wine card lost the Methodist and Wesleyan temperance line (General Rules removed) and the Lutheran view; its Reformed row (Larger Catechism 136) does not say whether drinking is wrong, so it does not answer the card's question. The baptism card lost Methodist, Churches of Christ and Pentecostal rows and has an unsourced Orthodox row that is only the Creed. The 4:9 card lost Baptist and Methodist rows; its Orthodox row is unsourced.
25. (minor) Household-code card (5:22-24): the Lutheran row ("does not quote Ephesians 5:25 for husbands") and the Reformed row (WCF 24.2 "does not state headship") state no view, so only Catholic, Orthodox, Anglican, Baptist and Evangelical rows give a position. The card still has more than two.
26. (minor) "Filled with the Spirit" card: Lutheran, Anglican and Methodist rows absent; the Baptist row quotes BFM art. 2 on sealing, which does not answer filling. The Orthodox row is unsourced. "Rulers and authorities" card: Lutheran, Anglican, Baptist and Methodist absent; the Pentecostal row cites only Mark 16:17.
27. No card has fewer than two views (minimum five).

### Counts
(1) 0 hedges, 0 unopenable keys, 3 minor issues. (2) 16 claims tried: 11 verified (items 4-14), 5 not verifiable or unsourced (items 15-19; 2 major, 3 minor), 0 shown wrong. (3) 0 new named-scholar attributions beyond item 20; 1 major (item 21). (4) 0 cards under two views, 1 major item for unsourced rows (23), 1 major for lost views (24), 2 minor.

## Verification fixes (2026-10-29)

Second round, applying the `## Verification check` findings. Counts: about 40 items handled; corrected 18 (dates, Josephus, Dibelius and Balch, paterfamilias, Roman marriage, Orthodox, Quaker, Reformed, Adventist and Churches of Christ rows, kephale labels, NA28 bracket claims); removed 22 (the "one in five" figure, the bridal-bath and kosmokratores claims, Fitzmyer, the unnamed "egalitarian scholars" source claim, Lincoln and Hoehner by name, 8 unsourced card rows, the spiritual-powers card); verified 6 (Vulgate "desperantes", Community Rule 3:13-4:26, Josephus War 3.93, and the sourced card rows).
- NA28 bracket explanations (four places): all removed; editions are named only as the word list marks them.
- "One in five": replaced by Scheidel's 10 percent estimate. kosmokratores: now "nowhere else in the New Testament" (texts/orig). Bridal bath: cut. Josephus War: 3.93 verified. Vulgate: verified. Dates: now "about AD 62" and "AD 70-100", the figures on the page opened (the old 60-62 and 80-90 were on no page). Dibelius and Balch: restated as the Haustafel page states them.
- Named scholars: Fitzmyer dropped; Cervin and Grudem kept at what their article titles and the survey show; the unnamed "egalitarian scholars" source claim removed; "Lincoln and Hoehner" removed; commentary keys (Lincoln, Hoehner, Best, Richards, Glancy, Harrill) stripped from every entry because none was opened.
- Cards: sourced rows added for Orthodox (baptism, Spirit, descent, apostles, marriage), Quaker, Churches of Christ, Reformed psalmody, Adventist, Pentecostal apostles; unsourced rows removed; the spiritual-powers card lost its conflict and is now a sentence in the 6:12 note. Views lost earlier (Lutheran, Anglican and Methodist on music and wine; Methodist and Baptist on 4:9) were not restored because no page was opened for them.
- For the lead: part 01-03's book.json and settings may still give "AD 60-62" and "AD 80-90"; align them to about AD 62 and AD 70-100. Log: `.scratch/Eph-04-06-verify/sources-checked.md`.

## Card restoration (2026-10-29)
Restored 5 views: Anglican on 4:11; Orthodox, Lutheran and Methodist on alcohol; Orthodox on music. Re-created the spiritual-powers card (6:12) with 5 views (Catholic, Lutheran, Reformed, Pentecostal, Anabaptist) and trimmed the note sentence. Still missing (no page opened states them): Evangelical on 4:9; Lutheran, Reformed and Methodist on "filled with the Spirit"; Lutheran and Pentecostal on music; Orthodox, Anglican, Methodist and Baptist, Evangelical views on the powers card.
