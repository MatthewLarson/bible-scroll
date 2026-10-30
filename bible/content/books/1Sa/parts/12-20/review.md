# Hostile review: 1 Samuel 12–20 (part 12-20)

Reviewer brief: `tools/agent-reviewer.md`. Scope: `parts/12-20/` (plain, notes, variants, glosses, chapters, topics, sources), the new topic cores (jonathan, david-and-goliath, michal, gods-regret, evil-spirit, music, anointing), the new term `YHWH tseva'ot`, and the Samuel keys added to `content/sources.json`. Not reviewed: book.json and the other parts. I checked all 312 verses against `node tools/literal.js 1Sa 12`–`20`. I verified the Greek against Rahlfs (Blue Letter Bible LXX) and checked the Talmud passages and the Goliath height debate online.

## Verdict

The translation is careful, independent and faithful. I found no verse that misreads the Hebrew in a way that matters. Where the Plain English Translation follows the Greek (12:11, 13:5, 14:41, 14:47, 17:52) it has a variant entry and says so, with three silent exceptions (13:20, 17:12, 12:15). Remaining NIV/ESV wording is low and almost all forced by the Hebrew. The variant work is large and mostly accurate, but it has real problems:
- **Wrong or misquoted Greek.** The LXX at 13:3 is described wrongly, and the Greek at 15:12 is quoted wrongly.
- **Gaps.** Five Old Greek minuses in chapter 18 have no entries, and neither has the long LXX plus at 14:42.
- **17:4.** The case for keeping "six cubits" misstates Billington and gives no real text-critical reason.
- **Rabbinic sources.** Two citations are wrong: Hullin 95b is inverted, and Yoma 22b is cited for something it does not say.

On fairness, God's regret is handled well and the evil spirit adequately. Two areas need work:
- **Ban on Amalek.** The strongest Jewish moral voice, Saul's own protest in Yoma 22b, is missing.
- **David and Jonathan.** Every view is named, but each gets one line and none gets its actual arguments.

The writer says a drift audit changed 266 verses. The writer's own files do not support that claim.

Verdict: **solid translation; needs a revision pass on variants, rabbinic citations and two fairness sections before it is published.** Findings: **0 critical, 11 major, 21 minor.**

## Findings

### Major

**1. Major: the "drift audit changed 266 verses" claim is not supported by the writer's own files.**
- Location: writer's scratch `scratchpad/1sa-12-20/audit.md`, `p12.txt`–`p20.txt`; `parts/12-20/plain.txt`.
- Evidence:
  - `audit.md` has 271 entries, and 267 of them are marked "(changed)".
  - 41 verses are not in the audit at all: 12:4, 12:12, 12:14, 13:1, 13:9, 13:11, 13:18, 13:21, 13:23, 14:3, 14:5, 14:18, 14:21, 14:25, 14:26, 14:28, 14:31, 14:40, 14:49, 14:51, 15:10, 15:34, 16:9, 16:15, 16:17, 16:19, 17:14, 17:21, 17:27, 17:30, 17:58, 18:15, 18:24, 19:14, 19:19, 20:10, 20:11, 20:28, 20:32, 20:39, 20:40.
  - The per-chapter drafts `p12.txt`–`p20.txt` were last modified 07:51–08:05. That is no later than `audit.md` (08:05) and before `plain.txt` (08:13).
  - Those drafts differ from the published Plain English Translation in only 2 verses: 16:13 and 18:10, where "came rushing on" became "swept down on". That change is a terms change, not a drift fix.
  - So no saved draft shows a pass that rebuilt 266 verses. At most the audit records changes made while drafting, and those cannot be checked.
- The good news: the final text is largely clean (see finding 19 for what remains). Most of the 41 unaudited verses are also clean, but 14:28 and 12:4 are among them and do keep NIV wording.
- Fix: in the report, describe the audit accurately: drift was checked while drafting, and there was no later pass. Audit the 41 missing verses. Apply finding 19.

**2. Major: 13:3 variant says the Greek puts "The slaves have revolted" in the Philistines' mouth. It does not.**
- Location: variants.json, 13:3, `p` and `b`.
- Evidence: Rahlfs reads καὶ ἀκούουσιν οἱ ἀλλόφυλοι· καὶ Σαουλ σάλπιγγι σαλπίζει εἰς πᾶσαν τὴν γῆν λέγων Ἠθετήκασιν οἱ δοῦλοι. In the Greek, Saul still sounds the horn and says the words.
  - It is modern scholars (Wellhausen, McCarter) who move the cry to the Philistines, by reconstructing the Hebrew.
- Fix: rewrite `p` and `b`. The Greek has Saul proclaim "The slaves have revolted." Some scholars, such as McCarter, reconstruct the original so the Philistines say "The Hebrews have revolted." Keep follow=0.

**3. Major: 15:12 variant misquotes the Greek and drops part of the plus.**
- Location: variants.json, 15:12, reading 1 `orig` and `plain`.
- Evidence: Rahlfs 15:12 reads …ἥκει Σαουλ εἰς Κάρμηλον καὶ ἀνέστακεν αὐτῷ χεῖρα **καὶ ἐπέστρεψεν τὸ ἅρμα** καὶ κατέβη εἰς Γαλγαλα **πρὸς Σαουλ**, καὶ ἰδοὺ αὐτὸς ἀνέφερεν ὁλοκαύτωσιν τῷ κυρίῳ τὰ πρῶτα τῶν σκύλων ὧν ἤνεγκεν ἐξ Αμαληκ.
  - The entry leaves out "and he turned his chariot".
  - It leaves out "to Saul" after Gilgal. With those words, the one going down to Gilgal is most naturally Samuel.
  - It inserts καὶ παρεγένετο Σαμουηλ πρὸς Σαουλ, which is the start of 15:13 in the Greek.
- Fix: quote 15:12 as it stands in the Greek and translate it: "...set up a monument for himself, turned his chariot, and went down to Gilgal. [Samuel came down] to Saul, and look, he was offering a burnt offering to the LORD, the first of the plunder he had brought from Amalek." Mention the chariot. Note that the Greek's "the first of the plunder" is stronger than the Plain English Translation reading's "the best".

**4. Major: the Old Greek minuses in chapter 18 are incomplete. Five have no entry, including one that changes the story.**
- Location: variants.json; the 17:12 entry `b` names them only in passing.
- What is complete: entries exist for 17:12–31, 17:41, 17:48b, 17:50, 17:55–58, 18:1–5, 18:10–11, 18:17–19, 18:29b and 18:30. Tov's main list is covered.
- What is missing:
  - **18:6.** The Greek lacks "When they came, as David came back from striking the Philistine." It also has the women go out "to meet **David**" (εἰς συνάντησιν Δαυιδ), not "to meet Saul the king". This is a real difference in meaning, and the entry never mentions it.
  - **18:8.** The Greek lacks "This burned Saul up" and Saul's last line, "The only thing still missing for him is the kingship!" That line is a famous one.
  - **18:12b.** The Greek has only καὶ ἐφοβήθη Σαουλ ἀπὸ προσώπου Δαυιδ. It lacks "The LORD was with David, and from Saul he had turned away", and note [125] is anchored on those very words.
  - **18:21b.** "Through the second one, you will be my son-in-law today" is absent from the Greek.
  - **18:26b.** "The days had not yet run out" is absent. 18:27 also lacks "they were handed over to the king in full count".
- Fix: add one entry for each, in the same pattern as the others. Give 18:6 its own `p`, because of "to meet David". Adjust note [125] to say its words are absent from the Old Greek.

**5. Major: 17:4 (six cubits against four). The choice to keep "six" is not well argued.**
- Location: variants.json, 17:4 `why` and `b`; chapters.json ch17 "How tall?"
- Evidence:
  - (a) **Billington is misrepresented.** The entry says he argues "that the scroll is damaged at this point". His published argument is different (JETS 50 [2007] 489–508; summarized in Hays's reply, JETS 50 [2007] 509–16). He holds that Alexandrian translators converted Goliath's height into royal cubits, and that 4QSam-a was either corrected toward the Greek or copied by an Alexandrian. Hays treats the scroll's "four" as clearly attested.
  - (b) "**Most** Greek manuscripts" read four, but Billington cites Codex Alexandrinus and Codex Venetus for "six". State which Greek witnesses read what, or say "the Old Greek (Vaticanus, Lucianic)".
  - (c) **The `why` gives no text-critical reason**, only "as most translations do". Elsewhere the Plain English Translation follows the Greek on weaker evidence: Barak at 12:11, three thousand chariots at 13:5, Gath at 17:52. At 13:5 its stated reason is that the larger number "is not believable", and that reason applies here too. Three witnesses agree on "four" (4QSam-a, the Old Greek, Josephus), and the Hebrew number is the larger one. The usual rule is that numbers grow in copying. So the "harder reading" argument for "six" is weak, and the entry does not answer that.
  - (d) The NET Bible already follows "four", so "most translations keep six" needs that qualifier.
- Fix: either follow "four cubits and a span" (my recommendation), or give a real reason for keeping "six" and say why the 13:5 logic does not apply. Rewrite Billington's position accurately. Correct the Greek witness list. Update the ch17 deep box and the giants topic section to match.

**6. Major: no entry for the long LXX plus at 14:42.**
- Location: variants.json (missing).
- Evidence: the Greek adds a passage. Saul says, "Whomever the LORD takes by lot, let him die." The people answer, "This shall not be." Saul overrules them, and then the lot falls on Jonathan:
  - ὃν ἂν κατακληρώσηται κύριος, ἀποθανέτω. καὶ εἶπεν ὁ λαὸς πρὸς Σαουλ Οὐκ ἔστιν τὸ ῥῆμα τοῦτο. καὶ κατεκράτησεν Σαουλ τοῦ λαοῦ…
  - Like the 14:41 plus, it is widely discussed, and some translations follow it (NAB, NJB). It sharpens the people-against-king theme that the chapter page and the spec box build on.
- Fix: add an entry with follow=0 (Hebrew). Explain that the plus may be original, lost with the 14:41 skip, or a later expansion.

**7. Major: note 14:10 inverts what the Talmud says about Jonathan's sign.**
- Location: notes.json [32], 14:10 "Asking God for a sign".
- Evidence: the note says that "a sign of the kind used by Abraham's servant and by Jonathan son of Saul is not forbidden divination (Hullin 95b)". Rav's rule is the reverse. An omen that is not of the form used by Eliezer and Jonathan is not considered divination. Their form is the model of forbidden *nichush*.
  - That is why the medieval commentators (Ran, Tosafot) ask how Eliezer and Jonathan were allowed to do it (Steinsaltz on Hullin 95b). Maimonides forbids acting on such signs. Ran and Tosafot explain why these two cases were not real reliance on omens.
- Fix: "Rav in the Talmud takes Eliezer's and Jonathan's signs as the very model of the omen-taking the law forbids (Hullin 95b). Later commentators explain why these two were allowed: Jonathan was going to fight anyway, or the sign had a rational basis (Tosafot, Ran)."

**8. Major: chapter 13 Jewish view misattributes Yoma 22b.**
- Location: chapters.json ch13 `views.J`.
- Evidence: the text says the rabbis "counted his sin at Gilgal as the first of two (Yoma 22b), with the sparing of Agag the second". Yoma 22b says the opposite. Saul sinned **once** and lost the kingdom, while David sinned twice and kept it. Saul's one sin is identified as **the matter of Agag**, and the Gemara then raises Nob as a possible second sin. Gilgal is not counted.
- Fix: "The Talmud contrasts Saul, who sinned once (over Agag) and lost the kingdom, with David, who sinned twice and kept it (Yoma 22b)." That is a good fairness point in its own right.

**9. Major: fairness on the ban on Amalek. The strongest Jewish moral voice is missing, and the modern views are unnamed.**
- Location: notes.json [52] 15:3; chapters.json ch15 "Read as a hard text"; topics.json `holy-war`.
- Evidence:
  - Yoma 22b, the passage already cited, has Saul himself argue with God. If a whole heifer is broken for one unsolved killing (Deuteronomy 21), how much more for all these lives? If the adults sinned, what did the children and the animals do? A heavenly voice answers, "Do not be overly righteous" (Ecclesiastes 7:16). This is the classic Jewish text on the moral problem of 15:3, and it bears on whether Saul's sparing was mercy or greed (note [57]).
  - Maimonides rules that peace must be offered first even to Amalek (Hilkhot Melakhim 6:1–4).
  - Berakhot 28a is about an Ammonite convert. Applying "Sennacherib mixed up the nations" to Amalek is the work of later authorities, so the note should not say the Talmud says it of Amalek.
  - "Some evangelical scholars" should be named: Copan and Flannagan, *Did God Really Command Genocide?* (2014); Wolterstorff on hagiographic hyperbole in Joshua; Younger, *Ancient Conquest Accounts*.
  - "Later revelation corrects" should be named too: e.g. Eric Seibert, *Disturbing Divine Behavior* (2009).
- Fix: add Yoma 22b and Maimonides to note [52] and to the holy-war or amalek topic section, and put a holder's name on each view.

**10. Major: fairness on David and Jonathan. Every view is named, but none gets its strongest form.**
- Location: notes.json [119] 18:1, [157] 20:30; chapters.json ch18 deep "Jonathan and David"; topics.json `same-sex-relations`, `jonathan`.
- Evidence: each view gets one sentence plus names. The actual arguments are absent.
  - **Romantic or erotic reading:** that Jonathan "delighted" (*chafets*) in David (19:1), the same verb used of Shechem's desire for Dinah (Genesis 34:19); Saul's "shame of your mother's nakedness" (*'ervah*, a sexual term, 20:30); "your love to me was more wonderful than the love of women" (2 Samuel 1:26); Ackerman's argument that Jonathan is cast in a "liminal", bride-like role.
  - **Covenant reading:** Thompson's treaty "love", and the transfer of the heir's legitimacy (robe and weapons, 23:17).
  - **Traditional friendship reading:** Avot 5:16, kisses and tears as normal between male kin and friends (Genesis 33:4; Genesis 45:15), and the absence of any sexual vocabulary.
  - The `same-sex-relations` section groups Olyan with Gagnon as arguing "nothing in the text suggests a sexual relationship". Check Olyan (2006 essay "Surpassing the Love of Women"; 2017 book) before giving him Gagnon's conclusion. As I read him, his point is about the covenant idiom, not the moral debate.
  - Note [157] says only "some readers (L) hear… a sexual accusation". Name them and give the *'ervah* argument.
- Fix: expand the ch18 deep section, or the jonathan topic, to one paragraph per view with its best two or three textual arguments and named holders. Fix the Olyan attribution. Say plainly where the scholarly weight lies: most commentators read covenant friendship, and a substantial minority sees homoerotic overtones.

**11. Major: the Philistine "iron monopoly" is asserted in three places and denied in two.**
- Location: chapters.json ch13 `sum` ("the Philistines control iron-working") and `views.H` ("The Philistine monopoly on iron-working reflects the real advantage…"); topics.json `philistines` ("They control iron-working").
- Contradicts: note [25] 13:19 ("The verse does not mention iron… Most historians now read it as a policy of political control") and the ch13 deep box ("Whether the Philistines had an iron monopoly is debated").
- Fix: in the summary, view and topic, say "the Philistines kept Israel from having smiths" and drop "iron-working".

### Minor

**12. Minor: variants 14:41, the Greek renderings of the stones.**
- The `b` calls δήλους and ὁσιότητα "the usual Greek renderings of Urim and Thummim (Exodus 28:30; Deuteronomy 33:8)". Those verses render Thummim as ἀλήθεια ("truth"); Exodus 28:30 has τὴν δήλωσιν καὶ τὴν ἀλήθειαν.
- Fix: say δήλους matches the usual rendering of Urim; ὁσιότης for Thummim is unusual here.

**13. Minor: variants 12:11 (Bedan) contradicts itself.**
- The reading for "Bedan" lists "Targum" as a witness, but the `b` says "The Targum reads 'Samson' here."
- Take the Targum out of the Bedan witnesses, or check it and fix the `b`.
- "Differs from Bedan only by letters often confused (b-d-n and b-r-q)" overstates. The d/r confusion is classic; n/q is not.

**14. Minor: 13:20, "sickle" follows the Greek with no entry.**
- The Hebrew repeats מַחֲרֵשָׁתוֹ ("plowshare"). The Greek has τὸ δρέπανον αὐτοῦ ("his sickle"), and the KJV reads differently ("mattock").
- Add a short variant entry.

**15. Minor: 17:12, "well on in years" silently emends the Hebrew.**
- The Hebrew בָּא בַאֲנָשִׁים ("came among men") is emended to *bashanim* ("in years"), following the Syriac and Lucianic Greek.
- Add a word note or variant.

**16. Minor: 17:52 variant leaves out Ashkelon.**
- The Greek reads ἕως τῶν πυλῶν Ἀσκαλῶνος, where the Hebrew has "the gates of Ekron", and its "Gath" is εἰσόδου Γεθ.
- Mention it in `b`.

**17. Minor: 12:3 variant, sandals.**
- "Two centuries before the scrolls were copied" is too much. Ben Sira dates to about 190–180 BC and 4QSam-a to about 50–25 BC, which is about 140 years.
- I could not confirm online whether 4QSam-a actually preserves the letters of נעלים or whether DJD 17 reconstructs them. "As most editors read it" is a fair hedge, but check DJD 17 and say "preserved" or "reconstructed".

**18. Minor: 12:15, the Plain English Translation adds a comparison that is not in the Hebrew.**
- "As it did on your ancestors" turns "against you **and** against your ancestors" into "as ... on". It also matches the NIV ("as it was against your ancestors").
- Translate "on you and on your ancestors" and leave the comparison to the variant `b`. Or keep the smoothing and add a word note.

**19. Minor: residual NIV/ESV wording.**
- 14:28 "put the people under a strict oath": NIV "bound the army under a strict oath". This verse is not in the audit.
- 12:4 "You did not take anything from anyone's hand": NIV "You have not taken anything from anyone's hand".
- Gloss 14:14 "about half an acre": this is the NIV's rendering, which the audit says it removed from the verse.
- Section heading "Panic from God": NIV "a panic sent by God".
- 18:7 and 16:1 are forced by the Hebrew and acceptable.
- Rebuild 14:28 and 12:4 from the literal line, and change the gloss and the heading.

**20. Minor: small additions and a tangled sentence.**
- 16:6 adds "This must be the one" and "he said to himself". The Hebrew has only "Surely the LORD's anointed is before him."
- 20:13 is tangled: "If my father would like to do you harm, then the LORD do so to Jonathan…, if I don't open your ear". Try: "If my father means to harm you and I do not open your ear and send you off safely, may the LORD do so to Jonathan and more besides."
- 18:26 runs on into 18:27 with no closing punctuation. That is acceptable, but a period and "Before the time was up, David set out…" is cleaner.

**21. Minor: the dates are inconsistent across the chapter pages.**
- Note [14] says historians date Saul to about 1030–1010 BC.
- But ch12 H puts Samuel's speech after Saul's accession "around 1050 BC", and ch15 H puts the Amalek campaign "around 1040 BC".
- Ch13 H says "perhaps two years in (13:1)" while the variant says the 13:1 numbers are lost.
- Use one chronology, give it as approximate, and drop "two years in".

**22. Minor: note 16:13 [82] is wrong to say "This is the first time the name David appears in the Bible."**
- In Christian order David is named in Ruth 4:17 and 4:22, and note [74] quotes Ruth 4:22.
- Say "first time in 1 Samuel".

**23. Minor: three glosses contradict their notes.**
- 15:23 gloss "as bad as witchcraft": note [65] says "witchcraft" is too narrow.
- 16:16 gloss "the lyre => the harp": note [85] says "lyre is closer".
- 14:6 and 17:26 gloss "uncircumcised" as "pagans": note [30] says the word means outsiders to the covenant sign, and "pagan" is anachronistic.
- Suggested glosses: "as bad as consulting fortune-tellers"; "a small hand-held harp"; "these outsiders to God's covenant".

**24. Minor: note 18:25 [130], Medinet Habu.**
- The claim is correct: the reliefs of Ramesses III show heaps of hands and phalli counted after the **Libyan** wars.
- The sentence ends with a stray ",.".
- Name the Libyans, so the reader does not think the Philistines are shown.
- Add a citation, e.g. Epigraphic Survey, *Medinet Habu* I–II (1930–32), or ANET.

**25. Minor: note 14:4 [29] and ch14 H, the World War I story.**
- The account matches Vivian Gilbert's memoir: Major Vivian Gilbert, *The Romance of the Last Crusade* (1923). The action was at Michmash in February 1918.
- It has no source key. Add one.
- Say it rests on Gilbert's memoir and is not confirmed in the official histories. The current "whatever the details" hedge is fine.

**26. Minor: "LORD of Armies" is explained twice, and the term entry could say more.**
- Note 17:45 [110] repeats the explanation already given in part 01-11 at 1:3 ("The LORD" and "the LORD of Armies"). Shorten [110] to the point about Israel's battle lines and refer to 1:3.
- The new term entry `YHWH tseva'ot` = "the LORD of Armies" is consistent: no other translated book uses "hosts" or "Almighty" for it.
- But "LORD of Armies" is also the CSB's rendering, and WEB has "Yahweh of Armies". Note this, so a later reviewer does not flag it as CSB drift.
- Add how to render the NT transliteration κύριος σαβαωθ (Romans 9:29; James 5:4).

**27. Minor: the topic cores overlap with existing topics.**
- `david-and-goliath` aka "Goliath of Gath" and "the giant of Gath" collide in meaning with `giants` aka "Goliath". Drop them from one of the two. They are already linked by `related`.
- `anointing` aka "the LORD's anointed" duplicates `messiah` ("the Anointed One"). Drop it from anointing and keep `related`.
- `gods-regret` lists James 1:17 in `refs` but never discusses it. Discuss it or drop it.
- `evil-spirit` lead and section: "older readers usually saw a demon" leaves out the medieval Jewish view. Radak and Ralbag explain Saul's spirit as melancholy (black bile), so the medical reading is not only modern. Also add the critical history-of-religion view (compare 2 Samuel 24:1 with 1 Chronicles 21:1).
- jonathan, michal, music and anointing are otherwise sound. No other topic covers Jonathan, Michal or God's regret. `music` is not a duplicate of `worship`. `music` says "the sweet singer of Israel" (2 Samuel 23:1), but that verse is debated ("the favorite of the songs of Israel"). Hedge it.

**28. Minor: source keys.**
- `targum-jonathan-prophets` (global key 150) gives the title as "*The Targum of the Former Prophets*". The book is *Targum Jonathan of the Former Prophets* (Harrington and Saldarini, Aramaic Bible 10, 1987).
- Part 01-11 then added a duplicate, `harrington-targum-prophets` (key 157), for the same book. Merge them into one key and tell the 01-11 writer.
- `keil-samuel` "(1866; English translation 1866)": the German edition is 1864 and the English translation 1866.
- `edelman-saul` is defined but never cited. Cite it (e.g. in note [19] or [66]) or remove it.
- The other new global keys (mccarter, klein, tsumura, alter-david, bergen, brueggemann, polzin, driver, hertzberg, auld, firth, baldwin, fokkelman, gunn, halpern-david, mckenzie, djd17, ulrich, rashi, radak, bavli-yoma, nets, king-stager) are real works with correct details.
- Note 13:3 [16]: Genesis 19:26 uses the same word *netsiv*, not "a related word".

**29. Minor: the Targum is credited with a demon reading it does not give.**
- Ch16 deep and note 18:10 [123] say the Targum calls the evil spirit a demon. The Targum has "an evil spirit from before the LORD", as note [84] itself correctly quotes. Josephus does say "demons" (*Ant.* 6.166).
- Fix the Targum attribution in both places.

**30. Minor: the topic contributions label the "Saul treated unfairly" reading as "uncommon".**
- Location: topics.json `kingship` `uncommon`.
- Since Gunn (1980), Humphreys and Exum (1992), the tragic reading is one of the main scholarly positions, and the part's own notes treat it that way.
- Move it to `common`, or reword it: "Many modern literary readers…".

**31. Minor: the two-stories entry (variants 17:12, ch17 deep) is fair but has two gaps.**
- It says the Tov–Lust argument is that the translator "is unlikely to have cut a fifth of a chapter". The minus is about 44 percent of two chapters (39 of 88 verses, by Tov's count). Use the right figure.
- It gives the Barthélemy–Gooding case only as harmonization. Add Gooding's strongest point: the short text still has tensions (David is still a "youth" in 17:33, after 16:18), so the shortening did not create a smooth text. The long text's doublets can be read as deliberate design.
- It never says where the field stands. Say that more scholars now side with Tov than with Barthélemy and Gooding, though the question is open. Name a recent voice on each side, e.g. Johnson, *Reading David and Goliath in Greek and Hebrew* (2015), against Hutzli or Auld.

**32. Minor: the writer's unsure items, checked.**
- **14:24 Greek: correct.** καὶ Σαουλ ἠγνόησεν ἄγνοιαν μεγάλην ἐν τῇ ἡμέρᾳ ἐκείνῃ, and the "ten thousand" plus belongs to 14:23 in Rahlfs.
- **19:13 goat's liver: correct.** The Greek reads ἧπαρ τῶν αἰγῶν, and Josephus (*Ant.* 6.217) has the beating liver.
- **Deem 1978: correctly described.** Ariella Deem, VT 28 (1978) 349–51, the *metsach*/*mitschat* argument.
- **Medinet Habu:** see finding 24.
- **World War I story:** see finding 25.
- **12:3 sandals:** see finding 17.
- **13:15:** the Greek is quoted with an ellipsis that hides ἐκ Γαλγαλων εἰς ὁδὸν αὐτοῦ. The word order is "went away from Gilgal on his way". Quote it in full, since the argument depends on the two "from Gilgal" phrases.
- **13:1, 13:5 and 17:52 (Gath):** the witnesses are correct. 13:5: Vaticanus has τριάκοντα χιλιάδες (thirty thousand); the Lucianic text and the Syriac have three thousand.

## Fixes applied

All findings accepted; none rejected. Two were handled in a different form from the one suggested (15 and 17, see below).

**Major**
1. Drift audit: I audited the 41 skipped verses against the literal line and the NIV/ESV and changed 5 of them (12:4, 13:21, 14:25, 14:28, 19:19). The results are appended to the scratch `audit.md`. The report now says plainly that the first-pass "changed" marks were made while drafting, and that no saved draft shows a separate later rebuild pass.
2. 13:3: rewritten. In the Greek, Saul still proclaims "The slaves have revolted." Wellhausen and McCarter are named as the scholars who move the cry to the Philistines. Follow = Hebrew.
3. 15:12: the Greek is now quoted as it stands in Rahlfs, with "turned his chariot" and "to Saul," and without the start of 15:13. The `b` explains why Samuel is the natural subject, and that "the first of the plunder" is stronger than "the best."
4. Chapter 18 minuses: new entries for 18:6a, with its own `p` on "to meet David" and the Greek quoted; 18:8 (two entries, "This burned Saul up" and the kingship line); 18:12b; 18:21b; 18:26b; and 18:27 ("handed over in full count"). Note 18:12 now says its words are absent from the Old Greek. The 17:12 summary lists them.
5. 17:4: the Plain English Translation now follows "four cubits and a span." Its stated reason matches 13:5: numbers grow in copying, and three old witnesses agree. Billington's real argument is restated: the royal-cubit conversion by Alexandrian translators, and 4QSam-a corrected toward the Greek. Codex Alexandrinus and others are listed for "six," Vaticanus and the Lucianic text for "four," and the NET is noted as also reading four. Hays's 2007 reply is added (`hays-reply-goliath`). The gloss, the ch17 "How tall?" box, and the giants and david-and-goliath topic sections now match.
6. 14:42: new entry for the long Greek plus. Follow = Hebrew. The `b` gives both the lost-with-14:41 view and the later-expansion view, and names NAB and NJB.
7. 14:10 (Hullin 95b): corrected. Rav takes these signs as the model of forbidden omen-taking, and Tosafot and Ran explain why they were allowed. New key `bavli-hullin-95b-commentaries`.
8. Ch13 J view: now says what Yoma 22b says. Saul sinned once, over Agag, and lost the kingdom; David sinned twice and kept it.
9. Amalek: note 15:3 now has Saul's protest in Yoma 22b ("Do not be overly righteous," Ecclesiastes 7:16) and Maimonides, Laws of Kings 6:1–4 (`maimonides-kings-peace`). Each view has named holders: Copan and Flannagan, Younger, Wolterstorff, Seibert (`seibert-disturbing`). The Berakhot 28a claim is removed; the note now says later authorities held that the nations can no longer be identified. Note 15:9, the ch15 "hard text" reading and the holy-war topic section are updated to match.
10. David and Jonathan: the ch18 deep section now gives one paragraph per reading (covenant, friendship, romantic), each with its textual arguments and named holders: *chafets* and Genesis 34:19, *'ervah* at 20:30, 2 Samuel 1:26, Ackerman's "liminal" role, Thompson and 23:17, Avot 5:16, Genesis 33:4 and 45:15. It says where the weight of scholarship lies. Olyan is no longer grouped with Gagnon: he is described as studying the covenant idiom without drawing conclusions for the moral debate. Notes 18:1 and 20:30 and the same-sex-relations topic are revised to match.
11. Iron monopoly: the ch13 summary, the H view, the deep box and the philistines topic all now say the Philistines "kept Israel from having smiths." The box explains that the old iron-monopoly view is no longer held.

**Minor**
12. 14:41: δήλους is said to match Urim; ὁσιότης for Thummim is called unusual, against the usual ἀλήθεια (Exodus 28:30; Deuteronomy 33:8).
13. 12:11: the Targum is removed from the Bedan witnesses and the Bedan = Samson identification is credited to Rosh Hashanah 25a and Rashi. The d/r confusion is stated, and the note says n/q is not a likely confusion.
14. 13:20: added a variant for "sickle" (follows the Greek).
15. 17:12: handled with a word note of kind `var` on "well on in years" rather than a variant, because the whole verse is already the anchor of the Old Greek minus entry.
16. 17:52: Ashkelon added to the `b`.
17. 12:3: "about 140 years." 4QSam-a is now described as "partly preserved and partly reconstructed (DJD 17)". I could not check the exact letters in DJD 17 itself.
18. 12:15: the Plain English Translation now reads "on you and on your ancestors." The variant `b` explains the KJV-style smoothing.
19. Drift: 14:28 and 12:4 rebuilt from the literal line. The 14:14 gloss is now "half the length of a plowed row." The heading "Panic from God" is now "The ground shakes."
20. 16:6: the added words are removed ("Surely the LORD's anointed stands here before him"). 20:13 is untangled. 18:26 now ends with a period and 18:27 starts its own sentence. The 18:26 gloss and variant anchors are updated.
21. Dates: one approximate chronology throughout (Saul about 1030–1010 BC). The ch12, 15, 16, 17 and 18 H views were changed, and "two years in" was dropped from ch13.
22. 16:13: now "first time in 1 Samuel," with Ruth 4:17 and 4:22 noted.
23. Glosses: 15:23 "as bad as consulting fortune-tellers," 16:16 "a small hand-held harp," 14:6 and 17:26 "outsiders to God's covenant."
24. 18:25: the Libyans are named, the stray ",." is removed, and `epigraphic-medinet-habu` is cited.
25. 14:4 and the ch14 H view: Gilbert's memoir is cited (`gilbert-crusade`) and the story is marked as unconfirmed in the official histories.
26. Note 17:45 is shortened to the battle-lines point and refers to the note on 1:3. The terms.json entry now says the rendering matches CSB and WEB and is not drift, and that the NT κύριος σαβαωθ is rendered "the Lord of Armies."
27. Topic cores:
   - david-and-goliath: dropped "Goliath of Gath" and "the giant of Gath" from its aka list ("Goliath" stays with giants).
   - anointing: dropped "the LORD's anointed" (messiah keeps "the Anointed One").
   - gods-regret: now discusses James 1:17.
   - evil-spirit: lead and section now include the Radak/Ralbag melancholy view, Josephus, and the 2 Samuel 24:1 / 1 Chronicles 21:1 comparison.
   - music: "sweet singer" is hedged in the core and in my contribution.
28. Sources:
   - `targum-jonathan-prophets` now has the correct title (*Targum Jonathan of the Former Prophets*, Harrington and Saldarini).
   - The duplicate `harrington-targum-prophets` is removed from content/sources.json, and part 01-11's 4 note uses and 3 variant uses now point to `targum-jonathan-prophets`.
   - `keil-samuel`: German edition 1864, English translation 1866.
   - `edelman-saul` removed.
   - Note 13:3 now says Genesis 19:26 uses "the same word."
29. The Targum is no longer credited with a demon reading (ch16 deep, notes 16:14 and 18:10). Josephus (*Antiquities* 6.166) is credited instead.
30. Kingship topic: the tragic reading moved to `common` and is credited to Gunn and Exum.
31. Two-stories (variants 17:12, ch17 deep, david-and-goliath topic):
   - The gap is now given as about 44% of chapters 17–18, 39 of 88 verses by Tov's count.
   - Gooding's strongest point is added: the short text still has tensions (17:33 against 16:18).
   - Where the field stands: more scholars now side with Tov and Lust, e.g. Auld and Ho 1992 (`auld-ho-goliath`), but the question is open. Johnson 2015 (`johnson-david-goliath`) is noted as reading the Greek as a coherent story in its own right.
32. 13:15: the Greek is now quoted in full, with both "from Gilgal" phrases.

**Also in this round (coordinator)**
- 13:14: *nagid* is now "ruler" (Plain English Translation and note anchor), matching terms.json and part 01-11.
- My Sternberg key is renamed `sternberg-poetics-samuel`, and the duplicate `augustine-lying` is dropped in favour of Exo's.

**Checks**
- `--check 1Sa/12-20`: 0 errors, 0 warnings (312 verses, 163 notes, 71 variants, 89 glosses, 9 chapter pages, 34 topic contributions).
- `--check 1Sa`: 0 errors, 0 warnings.
- Full build: 11 books, 0 errors.
