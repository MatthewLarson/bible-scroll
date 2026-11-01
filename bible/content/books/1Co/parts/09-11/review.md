# Hostile review: 1 Corinthians 9-11 (part 09-11)

## Verdict

The translation is competent and mostly built from the Greek. The cited primary sources the writer flagged as unchecked turn out to be real (Clement Stromata 3.6.53, Tosefta Sukkah 3:11, Pseudo-Philo 11:15, Philo Allegorical Interpretation 2.86, Philo Virtues 145, 1QSa 2:8-9 and 1QM 7:6, Pliny Letters 2.6, Tertullian Veiling 7, Schleitheim art. 3, Trent, AC, WCF and Catechism numbers), and nothing is invented. The weak spots are these. (a) The variants file mostly names editions, not manuscripts, and the one entry that names manuscripts (10:9) looks wrong about P46. (b) Several variants that change the KJV are missing. (c) A handful of notes have logic or attribution slips (9:5, Wire, Didache 9:4, the third Passover cup). (d) A run of verses in chapter 11 sits very close to ESV/NIV word order. (e) The traditions cards have unsourced entries and thin coverage on 11:3. (f) The part does not check at 0 errors, because `new-covenant` collides with `covenant`. No critical findings. `VERBOSE=1 node tools/build.js --check 1Co/09-11` gives 2 errors, 0 warnings. Both errors are in `proposals/nt/topics/new-covenant.json`, and this part feeds that collision (finding 5).

## Findings

### Major

1. **Variants name editions, not witnesses (variants.json, entries 0-15).**
   - Most readings are labeled "SBLGNT, NA28, THGNT" or "the early witnesses reported in the apparatus".
   - Entry 0 (9:1) says "not itemized here". Entry 4 (9:20) says "a few other witnesses". Entry 7 gives "Alexandrian witnesses".
   - brief-nt.md requires named manuscripts with dates (P46, Sinaiticus, Vaticanus, D, F, G, the Old Latin, fathers) "attributed to Metzger".
   - Only entry 13 (11:24) comes close.
   - Fix: name the manuscripts for 9:1 (both orders), 9:15, 9:20, 9:21, 9:23, 10:20, 10:23, 10:28, 11:2, 11:29. Take them from Metzger or Tischendorf (Source Library book 6953a88c77f38f6761bd19d6), and leave out any witness that cannot be confirmed.

2. **10:9 witnesses look wrong (variants.json entry 7).**
   - Entry 7 puts P46 under "God" (reading 2).
   - Published apparatus summaries (NET notes) list P46, 1739, 1881 and D F G with Christ. They list א B C P 33 104 1175 with Lord, and A 81 with God.
   - The entry also leaves "Alexandrian witnesses" for Lord unnamed.
   - Fix: check P46 against NA28 or Metzger (pp. 493-4) before publishing, and name א B C P 33 for "Lord".
   - Related: the `why` says Lord and God are "what a scribe would be tempted to write". That is fine. But the entry lists Tyndale House, Westcott-Hort and Tregelles as dissenting without saying that Lord has strong Alexandrian support.

3. **KJV-visible variants are missing.** The writer's own Byzantine/TR differences (texts/auto) are not entered.
   - 9:10: the Byzantine text adds "of his hope" (τῆς ἐλπίδος αὐτοῦ). KJV: "partaker of his hope".
   - 9:22: Byzantine/TR "as weak" (ὡς ἀσθενής) against the Plain English Translation's "became weak". This changes whether Paul became weak or only like the weak. KJV: "as weak".
   - 10:11: Byzantine "all these things happened... as types" (πάντα τύποι συνέβαινον) against τυπικῶς. KJV: "for ensamples".
   - 10:24: Byzantine adds "each" (ἕκαστος). KJV: "every man another's wealth".
   - 11:26: Byzantine "this cup" (τοῦτο). KJV: "drink this cup".
   - 10:1: Byzantine δέ against γάρ. KJV: "Moreover".
   - 11:31: Byzantine γάρ against δέ. KJV: "For if".
   - 10:2: NA28/NA27 read passive ἐβαπτίσθησαν against SBL and Byzantine middle ἐβαπτίσαντο. Note 22 mentions it, but brief-nt requires an entry when SBL and NA28 disagree.
   - 11:27: ἢ ("or") against "and". The `why` of entry 14 mentions it. It bears on the debate over communion in one kind or both, so it should be its own reading with witnesses.

4. **23,000 / 24,000 (note 27, 10:8).**
   - The note lists three explanations. Explanation (3) is "a variant tradition existed, though no witness for it is cited here". That is an admission of nothing, and it reads like a placeholder.
   - It omits the rabbinic and patristic harmonizations: Paul's figure deducts the 1,000 leaders hanged (Numbers 25:4), or counts only those who fell "in one day" by plague. A fuller note would say plainly that Hebrew Numbers 25:9, the LXX and the Targums give 24,000. It would say that no Greek witness of 1 Cor 10:8 is known to read otherwise, if that can be confirmed.
   - It would also note the Numbers 26:62 coincidence only if the writer can source it.
   - Fix: remove or source (3), cite the Mishnah, Talmud or Josephus parallel only if checked, and state that the difference is a real, unresolved discrepancy. The Plain English Translation follows the Greek, as it should.

5. **Build errors and duplicate topics (topics.json, proposals/nt/topics/new-covenant.json).**
   - This part contributes the same 11:25 material to both `covenant` and `new-covenant`. The `new-covenant` proposal's aka ("new covenant", "The New Covenant") collides with `covenant`, and the part cannot reach 0 errors.
   - Fix: put the 11:25 section under `covenant` only, or ask the lead to rename or merge the proposal.
   - A `headship` topic now exists in `proposals/nt/topics/`, but note 47 (kephale) uses `top: women-in-ministry`. Contribute to `headship` instead.

6. **Wire mischaracterized (note 49, view 4).** The note says the Corinthian women asserted freedom "and Paul only asks for an orderly way". Wire (The Corinthian Women Prophets) argues the opposite: Paul uses rhetoric to rein in the women prophets, and the passage reflects Paul against them. Restate fairly (Wire: women prophets pushing back, Paul's rhetoric subordinating them), or drop the attribution.

7. **Note 3 (9:5) is garbled.** The note ends: "Paul's other use of the same logic shows he does not think a wife limits ministry (compare 7:7-8, where he prefers to stay single)". 7:7-8 and 7:32-35 point the other way, so the sentence contradicts itself. The sentence "That reading let later writers fit the verse with a celibate clergy" also pins a motive on Clement, who defended marriage. Jerome (Against Jovinianus 1.26) and Augustine (On the Work of Monks 4.5) are the ones who used it that way. Fix both sentences.

8. **Traditions card on 11:3 is uneven.**
   - "Baptist" gives only the Southern Baptist position. American Baptist Churches USA, the Alliance of Baptists and the Cooperative Baptist Fellowship ordain women, and the card should say Baptists are divided.
   - Lutheran (LCMS no, ELCA yes) and Anglican (women priests, Church of England 1994; bishops, 2015; Communion divided) are missing, though both have distinct, sourced positions.
   - The PCA entry cites the Danvers Statement. The PCA is not bound by it, so cite its Book of Church Order alone.
   - The same gaps (Lutheran, Anglican, Methodist, Pentecostal, Plymouth Brethren) apply to the head-covering card (finding 15).

9. **NIV/ESV drift in chapter 11 (and two in 9).** These runs are only partly forced by the Greek. Recast the shape of each sentence from `literal.js`.
   - 11:33: "So then, my brothers, when you come together to eat, wait for one another" (about 14 words, ESV-identical).
   - 11:26: "For as often as you eat this bread and drink the cup, you [announce] the Lord's death until he comes" (about 16 words, ESV and NIV nearly identical).
   - 11:27: "whoever eats the bread or drinks the cup of the Lord in an unworthy way will be guilty of the body and blood of the Lord".
   - 11:20: "it is not the Lord's Supper that you eat".
   - 11:21: "each one goes ahead with his own..." (ESV rendering of προλαμβάνει).
   - 11:14: "Does not nature itself teach you that if a man wears long hair" (the ESV reorder).
   - 9:24: "in a race all the runners run, but only one takes the prize".
   - 9:27: "so that after I have announced the message to others, I myself will not be disqualified" (NIV shape).
   - 11:24: "This is my body, which is for you" is forced; leave it.

### Minor

10. **Sarapis invitations (note 35, 10:21).** The note quotes "dinner at the table of the Lord Sarapis". The best-known papyri (P.Oxy. 1.110, second century) say δειπνῆσαι εἰς κλείνην (κλίνην) τοῦ κυρίου Σαράπιδος, "to dine at the couch of the lord Sarapis". "Table" is a modern paraphrase. Give the Greek and the real reference (P.Oxy. 110, 523, 1484), and say "couch". The Asklepieion dining rooms (Roebuck, Corinth XIV) are real, but cite them. "As reported by Fee and others" is vague.

11. **Didache 9:4 (note 32).** The note says "as the grain was once scattered". The Didache says "this broken bread was scattered upon the mountains". Say "bread", not "grain".

12. **Third Passover cup (note 31).** "Likely the third cup of the Passover meal" is stated too firmly. The "cup of blessing" (kos shel berakhah) is the cup of Grace after Meals (m. Berakhot 7:5), and its identification with the third Passover cup rests on later sources (m. Pesachim 10). Hedge it.

13. **Hebrews 11:28 (note 28).** The note says it "uses the same word". Hebrews has the participle ὁ ὀλοθρεύων and 1 Cor 10:10 has the noun ὀλοθρευτής. Say "same root".

14. **Hair in note 56.** "Greek athletes... wore long hair" is unsupported; athletes were typically close-cropped. The documented case is Spartan men (Herodotus 7.208). Philosophers wore beards. Fix or cut.

15. **Head-covering card (11:2).**
    - The Anabaptist, Baptist and Oneness Pentecostal views have empty source arrays (`[[]]`), against the brief. "Most Baptists" has nothing behind it.
    - The Orthodox source (Ware, The Orthodox Church) does not discuss veils. Source a liturgical or canonical authority or relabel it as custom.
    - "Some Brethren groups" under Anabaptist blurs the Schwarzenau Brethren with Plymouth Brethren, who are the best-known Protestant veil-wearers.
    - Add Lutheran, Anglican and Pentecostal (Assemblies) or say they take the custom reading.

16. **Lutheran cards.** The 10:16 card attributes "in, with and under the bread" to Augsburg Confession art. 10. That wording is from the Formula of Concord (Solid Declaration 7). AC 10 says the body and blood "are truly present". Fix the citation.

17. **BFM 2000 over-attributed.**
    - The 9:27 card puts "those who fall away only show they were never saved" in the BFM's mouth. The BFM (art. 5) says believers "will never fall away" but says nothing of this kind about apostates.
    - The 11:27 card claims open and close communion practice from art. 7, which is silent on the matter.
    - Label these as Baptist teaching, sourced to a named Baptist theologian, not as BFM wording.

18. **Wrong stress in note 51.** "The Orthodox and Catholic traditions hold that men and women are both in God's image" implies Protestants do not. Say all the major traditions do.

19. **Note 57 (11:15, anti).**
    - It presents "in place of" as the hair-only reading. The obvious objection, that v.6 then makes no sense, is not given.
    - The covering word, περιβόλαιον, means a wrap or mantle, not the head-covering word of vv.4-7 (κατακαλύπτω). Add that.
    - The Plain English Translation's "in place of" has an interpretive effect (favoring the hair view) that the note should admit.

20. **Notes 47 and 58 (attributions).**
    - "Thiselton leans this way, as reported" (prominence): confirm from NIGTC pp. 812-23. If unsure, drop.
    - "Fee prefers" the "custom of arguing" reading of 11:16: I could not confirm it. Others (Ellicott, Clarke) take "such custom" as the uncovered practice. Verify or drop.
    - The common modern reading, "we have no other practice [than covering]" (RSV/NRSV/NIV), is not set out.

21. **Note 61 (11:20).** It does not give the alternative reading of οὐκ ἔστιν κυριακὸν δεῖπνον φαγεῖν ("it is not possible to eat the Lord's supper"; KJV "this is not to eat"). The Plain English Translation's version is the usual one, but the note should show the alternative.

22. **Note 62 (11:21).** Theissen's picture (the poor arrive late, the rich eat first) is stated as fact. Attribute it to Theissen and mention the alternatives (separate courses for different ranks, as in the Pliny parallel, which the note does cite).

23. **Note 65 (11:24).** "The Aramaic Jesus spoke had no word for 'is' at all" is an oversimplified and contested claim (Aramaic has copulative pronouns, and some think Hebrew was used). "Isaiah 53 is in the background" is Jeremias's view, stated as fact. Add "some argue".

24. **Note 16 (9:20), view 3.** "Others call it a policy of pretending" names no one. Jerome's view of Galatians 2 is the ancient example. Name a modern holder or mark it as the ancient charge only. The linked source `dunn-jesus-paul-law` is defined in Luke as the chapter "Pharisees, Sinners, and Jesus", which is not the place Dunn treats Paul's law-keeping. Give a better citation or a new key.

25. **Source key mismatch.** `philo-allegorical` is defined (in Psa 107-118) as "book 3", while note 24 cites 2.86. Either widen the shared definition or add a key for book 2.

26. **Translation points not covered by a note.**
    - 10:30 "if I eat with thanks": the Greek is χάριτι, "by grace" or "with thanks". Add a note.
    - 9:22 "whatever each person is" renders τοῖς πᾶσιν γέγονα πάντα ("to all I have become all things"). That is a paraphrase that drops the "all things" echo of 9:23 and 10:33. The chapter's deep dive then defends the paraphrase. Use "all things to everyone".
    - 9:26 πυκτεύω is "box", not "fight" (the gloss says shadow-boxing, but the Plain English Translation loses it).
    - 10:13 "that people face everywhere" adds "everywhere" to ἀνθρώπινος.
    - 11:17 "next" is added.
    - 11:30 "many have fallen asleep" for ἱκανοί ("a fair number") repeats "many" (πολλοί).
    - 11:2 "teachings" for παραδόσεις is softer than "traditions" in a verse at the center of a Catholic and Protestant dispute. The note discloses it, but check that `content/terms.json` does not fix "traditions".
    - 11:33 ἐκδέχεσθε ("wait for" or "welcome") has no note.

27. **Chapter-page issues.**
    - Chapter 10 `sum` says Israel "tested the Lord", while the Plain English Translation says "the Christ" (10:9). Align.
    - The spec box on "all" (10:1-4) says it has not been found "in this form". Fee, Hays and Garland all comment on the fivefold "all" as aimed at the confidence of the strong. Say the observation overlaps with them.
    - Dates: chapter 11 says the letter is "about AD 54-55" (note 63, deep dive). Chapter 9's setting says 53-55, and book.json says "AD 53-55". Use one.
    - The 11:2-16 setting `why` states one purpose ("erasing the difference between the sexes") as settled, though the same card lists three views. Neutralize.
    - Chapter 9 VIEW T says "Luther and Calvin both used it to defend a paid ministry". Cite Luther or restrict to Calvin.

28. **Mishnah Bava Metzia 7 (note 7).** The Mishnah does apply the muzzling ban to other animals (BM 7:4). The hired-worker rules in 7:2-5 rest on Deut 23:25-26, not the muzzling law. Cite 7:4 and drop the conflation.

## Checked and found sound (for the fixer's confidence)

- Clement Strom. 3.6.53 (the "sister-wife" reading), Tosefta Sukkah 3:11 (the traveling well), Biblical Antiquities 11:15, Philo Allegorical Interpretation 2.86 (rock = wisdom) and Virtues 145 (the ox).
- Fitzmyer's NTS 4 (1957-58) article, with 1QSa 2:8-9 and 1QM 7:6.
- Pliny Letters 2.6 (graded fare for guests).
- Tertullian Veiling 7 (angels = Genesis 6).
- Schleitheim art. 3.
- Catechism 162, 369-372, 1396, 1472, 1579; Trent session 7 canon 8; AC 12, 13, 23; WCF 17.1, 27.3, 29.8; Article 32.
- Walker, Oster, Winter, Hooker, Cervin, Fitzmyer, Hays, Marshall, Hock, Martin and Rudolph: titles and claims are real.
- The SBL-versus-Byzantine variants in entries 0-15 match texts/auto and texts/orig. In particular 9:20 (clause absent from TR/Byz), 10:20 ("the Gentiles" in Tyn/WH/Treg/TR/Byz), 10:23, 10:28, 11:2, 11:24 and 11:29 are correct.
- All cross-references to Matthew 26 and Luke 22 cards resolve.
- Audience and settings cards exist for every section.

## Fixes applied

Applied by the review-fixer, 2026-10-29. Plain English Translation verses changed: 9:22, 9:24, 9:26, 9:27, 10:13, 11:2, 11:14, 11:15, 11:17, 11:20, 11:21, 11:26, 11:27, 11:30, 11:33. Now 76 notes (two new), 24 variants (eight new), 29 glosses. Check 0 errors, 0 warnings.

1. Partly accepted. The vague phrases ("not itemized here", "a few other witnesses", "Alexandrian witnesses", "the early witnesses reported in the apparatus") are gone. Every reading now names the editions that print it (SBLGNT, NA28, THGNT, Westcott-Hort, Tregelles, TR, Byzantine), checked against the per-word edition marks in texts/orig, and says plainly that supporting manuscripts are not itemized (see NA28 apparatus and Metzger). I added no manuscript names for 9:1, 9:15, 9:20, 9:21, 9:23, 10:20, 10:23, 10:28, 11:2, 11:29 because I could not confirm them: the Tischendorf volume in the Source Library (book 6953a88c77f38f6761bd19d6) turned out to be the Gospels synopsis, with no Pauline apparatus, and the manuscript sites are blocked. Entries 10:9 and 11:24 keep or gain named witnesses, marked as reported. For the lead: enriching the other entries from NA28 or Metzger needs a source that is available.
2. Accepted. 10:9 rebuilt: P46 moved out of "God"; as reported (NET note, not rechecked) Christ has P46, D F G, 1739, 1881; Lord has Sinaiticus, Vaticanus, C, P, 33, 104, 1175; God has A and 81. The `why` now says the Lord reading has strong Alexandrian support and that the lists are not rechecked. The edition lines were checked against texts/orig (SBL, NA28, TR, Byz = Christ; THGNT, WH, Tregelles = Lord).
3. Accepted, with one correction. New entries for 9:10, 9:22, 10:1, 10:2 (NA28 passive against all other editions' middle), 10:11, 10:24, 11:26 and 11:31, all checked against texts/orig. For 11:27 "or": every Greek edition here, the TR included, reads ἢ ("or"); the KJV's "and" is its rendering, so the existing entry's `why` was corrected rather than a new reading added. That some manuscripts read "and" is marked as reported and not rechecked, and the communion-in-one-kind point is kept there.
4. Accepted. Note 27 rewritten: the placeholder explanation (3) is gone. The note now gives the actual explanations (the 24,000 includes about a thousand executed leaders of Numbers 25:4-5, or Paul counts only the single day; a memory or round-number figure; a real unresolved difference), says Hebrew and Greek Numbers 25:9 both give 24,000, and says I could not check whether any manuscript of 1 Corinthians 10:8 reads 24,000. The Numbers 26:62 coincidence and rabbinic or patristic parallels were left out because I could not source them.
5. Accepted. The 11:25 material now sits under `covenant` only (the `new-covenant` contribution is removed). Note 47 (kephale) now uses `headship`, and a short `headship` contribution was added. For the lead: the proposal topic `new-covenant` exists with a good title; this part no longer contributes to it.
6. Accepted. Note 49 view 4 restated: Wire reads the women as prophets who took Paul's gospel of freedom seriously and reads Paul's arguments as rhetoric meant to bring them under control.
7. Accepted. Note 3 rewritten: the self-contradicting 7:7-8 sentence is replaced; Clement is no longer blamed for the celibacy use, which is credited to Jerome (Against Jovinianus 1.26) and Augustine (On the Work of Monks 4.5), marked as reported and not rechecked. The celibacy topic section was fixed the same way.
8. Accepted, within the available sources. The 11:3 card now has Lutheran (LCMS no, ELCA since 1970), Anglican (Church of England priests 1994, bishops 2015, Communion divided), a divided Baptist entry (SBC with BFM arts. 6 and 18; ABCUSA and CBF ordain women) and a Reformed entry citing the PCA Book of Church Order alone (Danvers removed there). The ELCA, Anglican, ABCUSA, CBF and PC(USA) statements have no source key on the site and are uncited facts. The head-covering card (finding 15) gained Lutheran, Anglican, Evangelical (Plymouth Brethren), Pentecostal and a split Anabaptist entry.
9. Accepted. Rebuilt from literal.js: 9:24, 9:27, 11:20, 11:21, 11:26, 11:27, 11:33, and 11:14-15 (reshaped as a single question). 11:24 left as forced. Note anchors, the 11:17 quote of 11:21 and the variants were updated.
10. Accepted. Note 35 now says the papyri read "to dine at the couch (kleine) of the lord Sarapis" (P.Oxy. 1.110, second century, and others such as P.Oxy. 523, as reported), says "table" is a paraphrase, and cites Roebuck, Corinth XIV for the Asklepieion. New source keys added for both. P.Oxy. 1484 from the review is not cited because I could not confirm it.
11. Accepted. Note 32: "this broken bread was scattered over the hills", not grain.
12. Accepted. Note 31 hedged: the cup of blessing is the cup of Grace after Meals (Mishnah Berakhot 7:5, as reported); the third-Passover-cup link rests on later sources (Pesachim 10).
13. Accepted. Note 28: "same root", with the participle named.
14. Accepted. Note 56: the athlete claim is removed; Spartans (Herodotus 7.208) and Nazirites (Numbers 6:5) are the documented cases, and philosophers are named for beards.
15. Accepted. See finding 8. The Orthodox entry is relabeled as an inherited custom and the Ware citation dropped; Baptist cites the BFM only for its silence; the Anabaptist entry separates Schwarzenau Brethren groups from the Plymouth Brethren; entries without a source say so in their text.
16. Accepted. The Lutheran 10:16 card now gives AC 10 ("truly present and distributed") and credits "in, with and under" to the Formula of Concord, Solid Declaration 7.
17. Accepted. The 9:27 Baptist card now gives the BFM art. 5 sense (no falling from grace; believers may fall into sin) and labels the "never saved" idea as common Baptist teaching, not confession wording; no theologian is cited because none is on the site. The 11:27 card no longer attributes open or close communion to art. 7, which is silent. The 10:1 Baptist card was softened from "do not save" to "symbolic acts of obedience".
18. Accepted. Note 51: all the major traditions teach both are in God's image (Catechism 369-372 cited as an example).
19. Accepted. Note 57 now gives the v. 6 objection, the peribolaion against katakalypto point, and admits that "in place of" leans toward the hair reading.
20. Accepted. Thiselton's name removed from note 47; Fee's attribution removed from note 58 (unconfirmed); the "we have no other practice" reading added as view 4.
21. Accepted. Note 61 shows "it is not possible to eat the Lord's supper" (KJV "this is not to eat").
22. Accepted. Note 62 attributes the picture to Theissen and gives the separate-courses alternative.
23. Accepted. Note 65: the Aramaic claim is now "some argue" and marked contested; Isaiah 53 is Jeremias's view.
24. Accepted. Note 16: view 3 is now the ancient charge (Jerome on Galatians 2, rejected by Augustine); no modern holder is named. The `dunn-jesus-paul-law` key (Luke's chapter on Pharisees and sinners) is replaced by the existing `dunn-theology-paul` in notes 16 and 17, and the view-2 attribution is hedged as "as reported."
25. Accepted. New key `philo-allegorical-2` (book 2) used in note 24.
26. Accepted in full. 9:22 now "all things to everyone" (gloss and chapter deep dive updated); 9:26 "box"; 10:13 "everywhere" dropped; 11:17 "next" dropped; 11:30 "quite a few" with a sentence in the note on hikanoi; 11:2 "traditions", matching Galatians 1:14 and Mark 7 (terms.json does not fix a rendering; note 45 and the topic text updated); new notes at 10:30 (chariti, "with thanks" or "by grace") and 11:33 (ekdechesthe, "wait for" or "welcome").
27. Accepted, with the dependence noted. Chapter 10 summary says "tested the Christ". The spec box now says Fee, Hays and Garland are reported to read the repeated "all" the same way, not rechecked page by page. All dates use "about AD 53-55" (notes, deep dive, 11:23-26 setting). The 11:2-16 setting `why` now lists the purposes as debated. Chapter 9 view T now names Calvin only.
28. Accepted. Note 7 cites Mishnah Bava Metzia 7:4 (as reported) and drops the hired-worker conflation.

Quotes of changed verses in other books: none found in content/ outside this part (checked by text scan), so nothing for the lead's quote sync.


## Verification pass (2026-10-29)

Applied under STYLE.md rule 2 by a verification agent. Counts: about 70 items verified (kept, hedges removed), 15 corrected, about 55 removed. Corrections that mattered: the Mishnah Berakhot 7:5 citation for the cup of blessing was wrong (replaced by Pesachim 10:7); Mishnah Bava Metzia 7:4 does not apply the muzzling ban to other animals (removed); the LCMS Brief Statement has no passage on women (replaced by a 2020 LCMS article); AC 10 and the Formula of Concord quotes, Trent session wording, BFM art. 18 and Herodotus 7.208 were fixed to what the texts say. The 10:9, 9:15, 9:20, 10:2 and 11:2 manuscript lists now come from the NET Bible notes read this session; all metzger and comfort-commentary keys are dropped. Tosefta Sukkah 3:11, Biblical Antiquities 11:15, 1QSa/1QM locators, Pliny, Roebuck, Chrysostom, Calvin and many scholar attributions could not be opened and were removed or cut back to titles. Log: .scratch/1Co-09-11-verify/sources-checked.md.

## Verification check (2026-10-29)

Second, hostile look at the verification pass. Rule 2 followed here: only what I opened this session (search results quoting the pages named, Wikipedia, `texts/en`, the books' `plain.txt` files). `VERBOSE=1 node tools/build.js --check 1Co/09-11`: 0 errors, 0 warnings.

**Item (1), hedges and unopenable works.** Grep for the hedge phrases: 0 hits in the part's JSON. No `metzger`, `nestle-aland`, `comfort` or apparatus key (0). The manuscript lists at 9:15, 9:20, 10:2, 10:9 and 11:2 are each attributed in the `w` field to the NET Bible note, which the log says was read (net9, net10, net11 in the scratch folder). "NA28" and "THGNT" appear only as edition labels. One soft claim remains: 11:23 and the ch9 and ch11 pages carry "about AD 53-55" with no source (finding 1).

**Item (2), 9 claims tried, none in the log's verified list.**
- 10:2 note: Tertullian, On Baptism 9, reads the cloud and the sea as foreshadowing baptism. Partly verified: chapter 9 is headed "Types of the Red Sea, and the Water from the Rock" and reads the sea crossing as a figure of baptism (tertullian.org ANF page via search result); no page I opened shows the cloud (finding 2).
- 11:32 note: Westminster Confession 17.3 (believers can fall into grievous sins and bear temporal judgments, yet are kept). Verified (apuritansmind.com, reformedconfessions.com and other pages in search results: "temporal judgments", "for a time").
- 10:20 note: Baruch 4:7, "sacrificing to demons and not to God". Verified (RSV and NRSV wording; Douay-Rheims "devils" in the Vulgate "immolantes daemoniis, et non Deo").
- 10:20 note: Psalm 106:37. Verified (`texts/en/Psa.json`, WEB and BSB: sacrificed sons and daughters to demons).
- 11:34 note: Acts 20:2-3, three months in Greece. Verified (`texts/en/Act.json` 20:3).
- 9:6 note: Acts 18:3, tentmakers. Verified (`texts/en/Act.json`).
- 9:5 note: Mark 1:30, Peter's mother-in-law healed. Verified (`texts/en/Mrk.json` 1:30, "Simon's wife's mother").
- topics `1-corinthians`: Isthmian Games held every two years. Verified (Wikipedia Isthmian Games and other pages in search results: biennial, in Poseidon's honor).
- Quoted Plains: Deuteronomy 25:4, Numbers 25:9, Exodus 14:22, Deuteronomy 32:17, Genesis 1:27. Verified: identical to `plain.txt`.
- 11:23 and ch9, ch11: "this letter (about AD 53-55)". Unverifiable: nothing opened gives it, and the 01-04 pass removed this date. Finding 1.

**Item (3), named modern-scholar attributions not shown as checked** (the log's line 56 lists Hock, Marshall, Martin, Hays, Dunn, Nanos, Dodd, Weiss/Schmithals, Fredriksen/Boyarin, Murphy-O'Connor on hair, villas and games, Winter, Walker, Payne, Grudem as "not confirmed"). Locations:
- notes: 9:6 Hock (title and year only); 9:12 Marshall (title and year only); 9:19 Dale Martin (book only); 9:20 David Rudolph (book only); 10:21 Cheung, Gooch (on idol meat); 11:3 Murphy-O'Connor (view that 11:2-16 is not Pauline: JBL 95, 1976, title not confirmed in the log), Fitzmyer (kephale article: Crossref title only); 11:4 Oster (article title only); 11:5 Wire; 11:10 Fitzmyer (Qumran angels), Hooker (title only).
- chapters: ch9 deep dive (Marshall); ch9 and ch11 views not naming a scholar but attributing readings to "most scholars" (cannot be checked).
- About 14 location/name pairs where only a title or year was confirmed, never the position.

**Item (4), traditions cards.** 0 cards with fewer than two views. Cards with fewer than four: ch10 card 2 (market meat and the Jerusalem decree, Acts 15:29) has three views (Lutheran, Reformed, Messianic Jewish). It lost its Orthodox view when "Council in Trullo" was removed, but the Orthodox have a clearly distinct view: Quinisext canon 67 forbids eating blood and cites Acts 15:29 (Encyclopedia.com "Quinisext Synod", parish and canon-law pages in search results; the canon text itself not opened). The card also has no Catholic view. The Messianic Jewish view has no source key (finding 3). ch9 card 0 has four views (Catholic, Orthodox, Lutheran, Anglican), acceptable for clerical marriage.

### Findings
1. **Major.** "Letter ... about AD 53-55" (11:23 note; ch9 and ch11 pages) has no opened source. The 01-04 pass removed that same date from its part as unconfirmed, so the book now contradicts itself. Cut the date or open a source.
2. **Minor.** 10:2: Tertullian On Baptism 9 and "the cloud": a page I opened shows only the sea as a figure of baptism. Say "the sea" or open the chapter.
3. **Minor.** ch10 card 2 has no Catholic or Orthodox view and the Messianic Jewish view has no source. The Orthodox view (Quinisext canon 67) is available from an opened source once the canon text is read. Add it or note the card as incomplete.
4. **Minor.** 11:3 "Murphy-O'Connor, Journal of Biblical Literature 95, 1976" and the other scholar attributions in item 3 are title-only; the positions were never read. State only the title (as the log did for others) or remove the attribution.
5. **Minor.** The Verification pass section lists claims "could not be opened and were removed" yet the log (line 56) leaves the scholar positions in place; add a line saying so.

## Verification fixes (2026-10-29)

Second round, applied under STYLE.md rule 2. Findings 1 to 5 of the Verification check handled; about 12 scholar attributions tried: 7 verified on pages opened (Martin, Rudolph, Goppelt, Hock, Wire, Fitzmyer on kephale, Fitzmyer on Qumran angels), 3 kept in the wording a page supports (Marshall, Oster, Hooker), 1 name removed (Murphy-O'Connor and its key; the view stays as "some scholars"); 6 dates or generalizations removed or softened.
1. The letter's date: Wikipedia (First Epistle to the Corinthians) gives "usually in the range of 53-57 CE", written at Ephesus. "About AD 53-55" and "AD 50-51" replaced everywhere in this part; the founding is now "Acts 18", with no year. Dates dropped from Clement, Tertullian and Philo keys (not opened).
2. 10:2: Tertullian On Baptism 9 opened on newadvent.org: it mentions the sea and water but not the cloud; the note now says the sea.
3. Chapter 10 card 2 now has Catholic (Council of Florence 1442, "since the cause ... has ceased, so its effect has ceased", as quoted on the Wikipedia Council of Jerusalem page), Orthodox (Council in Trullo canon 67, text on newadvent.org, Orthodox recognition per Wikipedia), and a Messianic Jewish view cut to what David Wilber's page states, with a new key. The unsourced claim about 10:25-27 being addressed to Gentiles was removed.
4. Scholar attributions reworded to what pages state; see the log.
5. The log now lists scholar positions confirmed and not confirmed.

## Card restoration (2026-10-29)

Following `tools/agent-restore-cards.md`. 5 views added (Methodist x3, Anglican x2), 5 extended (Orthodox 9:5; Reformed on 10:16, 11:2-16, 11:3 and 11:27). Each restored view cites a page opened in this session; the URLs are in `.scratch/1Co-09-11-verify/sources-checked.md` ("Card restoration"). No card was re-created: none had been turned into a note sentence.

Views still missing: Lutheran and Anglican on the 11:2-16 head-covering card (no formulary or document found that addresses it); Methodist on 11:3 (Wesley's note does not address the question).

`VERBOSE=1 node tools/build.js --check 1Co/09-11`: 0 errors, 0 warnings in this part.


Second card pass (unkeyed views): 16 views newly sourced from opened pages (Orthodox x5 from the OCA adult manual and Q&A; Methodist 9:27; Catholic, Orthodox, Lutheran, Anabaptist, Baptist, Evangelical and Pentecostal on head covering from Wikipedia, Christian head covering; Methodist and Pentecostal on 11:3; Anabaptist on 11:27-29), 2 views removed (Anglican and Oneness Pentecostal on head covering: no opened page states them). Details in `.scratch/1Co-09-11-verify/sources-checked.md`, "Unkeyed views".
