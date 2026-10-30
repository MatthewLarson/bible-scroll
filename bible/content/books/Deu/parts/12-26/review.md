# Hostile review: Deuteronomy 12–26 (the law code)

Reviewer brief: `tools/agent-reviewer.md`. Scope: `content/books/Deu/parts/12-26/` (plain.txt, notes.json, variants.json,
glosses.json, chapters.json, topics.json, sources.json), the eight new topic cores (chosen-place, kingship, justice,
poverty, interest-and-debt, prophet-like-moses, hanged-on-a-tree, firstfruits), and the six terms this writer added to
`content/terms.json`. book.json and the other Deuteronomy parts were not reviewed.

## Verdict

This is a strong part. The Plain English Translation was built from the Hebrew. I read all 345 verses against
`node tools/literal.js Deu <ch>` and found nothing added, dropped or mistranslated in a way that changes a law, and the key
terms (to'evah "abhorrent", cherem "the ban", segullah "own private treasure", "sweep the evil out", ov/yidde'oni,
tsara'at, ger "foreigner") are rendered the same way every time. They also match Exodus 21–23 and Leviticus 11, 17, 19, 20
and 25 on the site. The notes are dense, accurate and well sourced. I checked every rabbinic, ancient Near Eastern and
manuscript claim I could. Two are wrong (Ibn Ezra on 20:19, Mishnah Chullin 10:1 on 18:3), and a handful have the wrong
citation or say too much. I found no invented work. `node tools/build.js --check Deu/12-26` passes with 0 errors and
0 warnings, quotation check included.

The serious problems are these. (1) The verb 'innah is rendered "violated" in 21:14, 22:24 and 22:29. That sharpens the
Hebrew, contradicts the consent premise of 22:23–24, and is then used as evidence in a fairness note. (2) nokhri is
rendered "outsider", which clashes with zar "outsider" in Exodus, Leviticus and Numbers, and the part itself uses three
different renderings. (3) A few verses copy ESV or NIV wording (15:12, 14:28, 15:10). (4) Two fairness gaps fall on the
hard laws: the reception history of chapter 13, and the "seduction" reading of 22:28–29. (5) The topic contribution files
the mainstream Jewish reading of 18:15 as "uncommon". None of these is critical. All can be fixed in place.

**Counts: 0 critical, 7 major, 24 minor (31 findings).**

---

## Major

### 1. Major: 'innah sharpened to "violated" (21:14; 22:24; 22:29), and the note on 21:11 builds on it
- **Where:** plain.txt 21:14 "since you have violated her"; 22:24 "the man because he violated his neighbor's wife";
  22:29 "because he violated her". notes.json 21:11 ("21:14 itself says he has 'violated' her").
- **What is wrong:** עִנָּה ('innah, Piel of anah) means "humbled, dishonored, shamed". It can describe rape (Genesis 34:2;
  2 Samuel 13:12, 14), but it does not mean rape by itself. In 22:23–24 the law presumes the woman in town *consented*:
  she is stoned "because she did not cry for help". "He violated his neighbor's wife" therefore contradicts the case that
  the verse itself sets out. The Hebrew says he dishonored the betrothed woman, and so wronged her future husband
  (אֲשֶׁר־עִנָּה אֶת־אֵשֶׁת רֵעֵהוּ). In 21:14 and 22:29 "violated" settles the debated questions (was the captive raped? is
  22:28 a rape?) inside the translation. The 21:11 note then quotes the Plain English Translation's own word as textual evidence for one side
  of the debate, which makes the argument circular.
- **Fix:** Render 'innah one way in all three verses, e.g. "dishonored" or "humbled". Add one `word`/`deb` note at 21:14
  that explains the range of the word, from "shame" to "force" (Genesis 34:2; 2 Samuel 13:14). Reword the 21:11 note so
  that it does not rest on the English: "the Hebrew says he has 'humbled' or 'dishonored' her, a verb also used of rape".

### 2. Major: nokhri = "outsider" clashes with zar = "outsider" across the Torah, and the part renders nokhri three ways
- **Where:** 14:21, 15:3, 23:20 (nokhri = "outsider"); 17:15 (אִישׁ נָכְרִי = "a man from another nation"); 25:5
  (לְאִישׁ זָר = "to a stranger").
- **Evidence:** On the site, "outsider" already renders zar, the unauthorized non-priest, in Exodus 29:33; Exodus 30:33;
  Leviticus 22:10, 12, 13; Numbers 1:51; Numbers 3:10, 38; Numbers 16:40; Numbers 18:4, 7. ("No outsider may eat a holy
  gift" means an Israelite layman, not a non-Israelite.) Elsewhere nokhri / ben nekhar is rendered "foreigner": Genesis
  17:12, 27; Genesis 31:15; Exodus 12:43; Exodus 21:8 ("a foreign people"); Leviticus 22:25; Ruth 2:10. So a reader now
  meets "outsider" for two different Hebrew words with two different meanings, and "foreigner" for both ger and nokhri
  depending on the book. Neither nokhri nor zar is in terms.json. (Deuteronomy 29:22 in part 27–34 also uses "outsider" for
  nokhri, so that writer must be told about any change.)
- **Why the writer needed something:** 14:21 sets ger and nokhri side by side, so "foreigner" cannot serve for both in
  that verse. The problem is the word chosen, not the wish to tell the two apart.
- **Fix (recommended):** Give nokhri a qualified form of the root the other books use. For example: "a foreigner from
  abroad" in 14:21, 15:3 and 23:20, and "a foreigner" in 17:15 (where no ger is in view). Keep "outsider" for zar. Change
  25:5 "to a stranger" to "to an outsider" so that zar matches Exodus, Leviticus and Numbers. Add both words to
  terms.json: `["nokhri","foreigner (from abroad), distinct from ger, the resident foreigner"]` and
  `["zar","outsider (one not entitled: a non-priest, a non-family member)"]`. Update the 14:21 note and the "Your brother"
  note at 15:2 ("the outsider is not a brother"). Tell the 27–34 writer about 29:22.

### 3. Major: NIV/ESV (and CSB) wording drift in several verses
I compared the suspicious verses with the parallel pages on biblehub.com. The ESV/NIV texts could not be downloaded in
full, so this list is a sample, not a full sweep.
- **15:12** "If your brother, a Hebrew man or a Hebrew woman, is sold to you," is word for word the ESV, including its
  reordering of the Hebrew (the Hebrew runs "if is sold to you your brother, the Hebrew or the Hebrewess"). Its last clause,
  "set him free from you", is the ESV's "let him go free from you". Redo it. Suggestion: "If one of your own people, a
  Hebrew man or Hebrew woman, sells himself to you, he will work for you six years, and in the seventh year you are to send
  him out free." (יִמָּכֵר may be reflexive, "sells himself", and that also deserves a note.)
- **14:28** "At the end of every three years, bring out the whole tithe of your crops for that year and store it in your
  towns" follows the NIV ("At the end of every three years, bring all the tithes of that year's produce and store it in
  your towns") in frame and wording. Redo it, e.g. "When three years are over, take out the full tenth of that year's
  harvest and lay it up in your towns."
- **15:10** "Give to him freely" is the ESV. "the LORD your God will bless you in all your work and in everything you put
  your hand to" is the NIV. The second phrase is the part's standing rendering of מִשְׁלַח יָדְךָ (12:7, 18; 23:20), so it
  can stay. Change the opening, e.g. "Be sure to give to him, and do not let your heart be sour when you give."
- **26:5** "My father was a wandering Aramean" is the NIV word for word. It is also the most literal English, so I would
  keep it, but the variant entry should say openly that it is the standard rendering. That is not an error.
- **24:16** "Fathers are not to be put to death for their children" is close to the CSB. The Hebrew is formulaic, so this
  is low priority.
- **15:11** "That is why I am commanding you" matches the CSB, but it is a literal rendering of
  עַל־כֵּן אָנֹכִי מְצַוְּךָ and is used the same way in 15:15; 19:7; 24:18, 22. It can stay.
- **14:12–18 birds:** this is a blend of ESV names ("the eagle, the bearded vulture, the black vulture"; "the ostrich, the
  nighthawk") and NIV phrasing ("the gull, any kind of hawk"; "the stork, any kind of heron, the hoopoe and the bat", which
  is the NIV word for word). It matches Leviticus 11:13–19 on the site exactly, which is the right priority for shared
  Hebrew. So do not change Deuteronomy alone. Flag it to the Leviticus reviewer, and if Leviticus is redone, follow it.

### 4. Major: Ibn Ezra misrepresented on 20:19
- **Where:** notes.json 20:19 ("Rashi and Ibn Ezra read it as a question").
- **Evidence:** Ibn Ezra rejects the question reading ("In my opinion, we have no need for all this"). He reads a statement:
  the tree of the field is a person's life and livelihood, so cutting it destroys your own food. That is the KJV's line
  (Ibn Ezra on Deuteronomy 20:19; summarized at myjewishlearning.com, "Every Person is a Tree"). Rashi does read a question.
- **Fix:** "Rashi reads a question ... and most modern translations agree. Ibn Ezra rejected that reading: 'the tree of the
  field is man's life,' the source the KJV follows." This also strengthens the note, because the two medieval readings line
  up with the two English traditions.

### 5. Major: Fairness, chapter 13. Christian use of the chapter is erased, and VIEW H overstates
- **Where:** chapters.json ch 13, VIEW X ("Christians do not apply the penalties of this chapter") and VIEW H ("does not
  permit private revenge").
- **What is wrong:** As history, VIEW X is false. Deuteronomy 13 was the main proof text for executing heretics in
  Christian Europe. Calvin's *Defensio orthodoxae fidei* (1554), defending the burning of Servetus, argues from Deuteronomy
  13. Augustine's case for coercing the Donatists drew on the Old Testament penalties. The Massachusetts Body of Liberties
  (1641) and other Puritan capital laws cite Deuteronomy 13:6 and 13:10 for idolatry and blasphemy. The opposite view in its
  strongest form is also missing: Roger Williams (*The Bloudy Tenent of Persecution*, 1644) and the Anabaptists argued that
  these penalties belonged to Israel's covenant state alone. The chapter page describes a test of loyalty and leaves out the
  history in which the text was used against dissenters. Separately, VIEW H says the law "does not permit private
  revenge". Yet the Hebrew of 13:9, "your hand is to be the first against him", is exactly what Levinson reads as summary
  killing. The deep section says so, so the chapter contradicts itself.
- **Fix:** Rewrite VIEW X: "Most Christians today do not apply these penalties, reading them as belonging to Israel's
  covenant state. But for centuries the chapter was used to justify executing heretics (Augustine on coercion; Calvin,
  defending the execution of Servetus in 1554; Puritan law codes). Roger Williams and the Anabaptists answered that ...".
  Change VIEW H to "traditional interpreters, following the rabbis, read the chapter as requiring a court and witnesses
  (13:14; 17:6), though the Hebrew of 13:9 can be read as permitting immediate killing (see the variant)."

### 6. Major: Fairness, 22:28–29. The "seduction" reading is not given in its strongest form
- **Where:** notes.json 22:28 ("Must she marry him?"); topics.json sexual-violence (UNCOMMON: "Some scholars argue 22:28–29
  describes seduction").
- **What is wrong:** The note gives "may mean force" and then two reactions, "protection" and "cruel". It never gives the
  textual case that many commentators make for reading this as consensual sex or seduction parallel to Exodus 22:16–17.
  (1) The verb changes from הֶחֱזִיק "overpowered" in 22:25 to תְּפָשָׂהּ "took hold of / caught" in 22:28. (2) "And they are
  found" (וְנִמְצָאוּ) is plural, so both are caught, which suits a couple and not an attacker and victim. (3) The law has no
  "cried for help" clause, unlike 22:24 and 22:27. (4) It closely parallels Exodus 22:16, which is plainly seduction. This
  reading is held by, among others, Carolyn Pressler (*The View of Women Found in the Deuteronomic Family Laws*, 1993),
  Gordon Wenham, and many evangelical writers such as Daniel Block. Calling it "uncommon" understates it, because it is
  perhaps the majority reading among commentators. On the other side, the NIV and NRSV "rapes her" deserve a mention, as the
  modern versions that settled the question the other way.
- **Fix:** Rewrite the note around the two readings, naming the lexical evidence and named holders for each. Change the
  sexual-violence UNCOMMON line to a balanced sentence (or move it to `common`). The 'innah fix in finding 1 goes with this.

### 7. Major: The prophet-like-moses contribution files the standard Jewish reading as "uncommon"
- **Where:** topics.json prophet-like-moses, UNCOMMON: "Jewish interpreters such as Rashi and Ibn Ezra read it as a
  promise of prophets after Moses, such as Joshua, rather than one final figure."
- **What is wrong:** This is the mainstream Jewish reading (Rashi, Ibn Ezra, Ramban, Sforno; Maimonides treats it as the
  basis of the institution of prophecy). The 18:15 note and the core lead both present it as a main view. Filing it under
  "uncommon" makes Judaism's standard reading look marginal on the topic page, against STYLE rule 3.
- **Fix:** Move it to `common` as "Jewish tradition reads ...", or rephrase both lines as two parallel majority views
  (Christian: Jesus; Jewish: the line of prophets). If an `uncommon` line is wanted, use one that really is a minority
  view: the Samaritan Taheb, Holladay's Jeremiah, or the identification with Joshua in particular.

---

## Minor

### 8. Kition "dogs": the meaning is debated and the note gives no date or source (23:18)
The Kition tariff inscriptions (CIS I 86 A–B, Phoenician, from the temple of Astarte at Kition, Cyprus, usually dated to
the 5th or 4th century BC) list payments "to the KLBM and to the GRM". Older and still common readings take these as
"dogs" and "whelps", cult personnel. Others render them as kinds of workers (Wikipedia's "Kition Tariffs" article gives
"for the axmen and for the sawyers"). The note states "lists 'dogs' among paid temple staff" as fact, gives no date, and
cites no source. **Fix:** "A Phoenician temple tariff from Kition in Cyprus (5th–4th century BC) pays the *klbm*, which
many scholars read as 'dogs', temple servants, though the meaning is disputed". Add a source (e.g. Peckham's article, or
the key for Tigay's JPS excursus).

### 9. The justice core links to the wrong "elders"
`content/topics/justice.json` has `"related"` with `"elders"`, but `elders.json` is "The Twenty-Four Elders" of Revelation 4.
**Fix:** Remove it. Add `"poverty"`, and have poverty.json relate back to `"justice"`.

### 10. Topic overlap (the brief's question)
- **prophet-like-moses vs prophecy and messiah:** this is not a duplicate. prophecy is the general gift, messiah is the
  anointed king, and this is one specific promise with its own Jewish, Samaritan, Qumran and Christian reception. Keep it.
  The prophecy and messiah cores do not relate back to it, so ask their owners (or the coordinator) to add
  `prophet-like-moses` to their `related`.
- **poverty vs justice:** distinct enough. justice is "Justice and the Courts" (procedure, witnesses, bribes), and poverty
  is economic protection. The two leads do not overlap. Add mutual `related` links (see 9). poverty does overlap heavily with
  gleaning, widows, interest-and-debt and jubilee, but as an umbrella page that is acceptable.
- **interest-and-debt vs jubilee:** jubilee already has aka "shemittah", "release" and "Sabbath year", and the 15:1 note is
  tagged `top: jubilee`. interest-and-debt's aka "release of debts" competes with it for the same search. **Fix:** Drop
  "release of debts" from interest-and-debt's aka, and keep the release itself on jubilee.
- **firstfruits vs feast-of-weeks/harvest/firstborn/tithe:** distinct. Note that Numbers 28:26 calls Weeks "the day of the
  first fruits". A related link from feast-of-weeks would help.
- **hanged-on-a-tree vs capital-punishment / blessings-and-curses:** narrow, but justified by Galatians 3:13 and Acts
  5:30. Not a duplicate.
- **chosen-place vs temple/jerusalem/samaritans:** distinct (centralization). Fine. **kingship vs david/messiah:** fine.

### 11. 18:3 note: Mishnah Chullin 10:1 is misreported
The note says Jewish law applies the foreleg-cheeks-stomach gift "in the land of Israel (Mishnah Chullin 10:1)". The
Mishnah says the opposite: the gifts apply "in the land and outside the land, with or without the temple". (Later custom
outside the land varied.) **Fix:** "the Mishnah applies it in the land and abroad (Mishnah Chullin 10:1)".

### 12. 24:5 note: the KJV is misdescribed
The note says *vesimmach* means he makes her glad, "not that he is to enjoy her (as the KJV's 'cheer up his wife'
understood)". "Cheer up his wife" *is* "make her glad", so the KJV agrees with the Plain English Translation. The contrast belongs to readings
like "rejoice with his wife" (the Qal vocalization that some translations follow). **Fix:** Say that, or drop the
parenthesis.

### 13. 13:5 note: the count
It says the formula "closes nine laws" and then lists eleven verses. Nine is right for *ha-ra'* ("the evil"). 19:13 and
21:9 have "the innocent blood". **Fix:** "closes nine laws, and two more in the form 'sweep the innocent blood out' (19:13;
21:9)".

### 14. 13:15 note and ch 13 VIEW J: citations for the rabbinic conditions
"it must not be a border town" is not in Mishnah Sanhedrin 4:1 (which is about capital procedure) or 10:4–6. It is in the
Tosefta and the Bavli (Sanhedrin 16b, and see Tosefta Sanhedrin 14). Please check. VIEW J's "not Jerusalem or a city of
refuge" has no citation (Jerusalem: Bava Kamma 82b; city of refuge: Tosefta Sanhedrin 14). **Fix:** Correct the
citations, and drop "Mishnah Sanhedrin 4:1".

### 15. 21:2 note: measuring from the navel
The measuring debate is Mishnah Sotah 9:4, not 9:2 (please verify), and "from the navel" is Rabbi Eliezer's view. Rabbi
Akiva measured from the nose. **Fix:** "the Mishnah debates whether to measure from the navel or the nose (Mishnah Sotah
9:4)".

### 16. 25:12 note: the rabbinic reading is garbled, and Walsh has no source
"applied it to anyone who was attacking a man to save another" is unclear. The Sifre reads the verse two ways: as payment
for shame (with Bava Kamma 28a), and as the law of the pursuer (*rodef*), so that one may stop an attacker even at the cost
of a limb. Walsh is verified: Jerome T. Walsh, "'You Shall Cut Off Her ... Palm'? A Reexamination of Deuteronomy
25:11–12," *JSS* 49 (2004) 47–58, translates "you shall shave (the hair of) her groin". The note's summary is right, but
the key is missing from `s` and sources.json. **Fix:** Rephrase the rabbinic sentence and add `walsh-palm` to sources.json.
For balance, add one sentence on the modern moral objection (disproportion, the only mutilation penalty in the Torah) next
to the fertility explanation.

### 17. 25:9 note: wrong support for Ashkenazi practice
"Ashkenazi rabbis since the Middle Ages have required [chalitsah] in place of levirate marriage (Mishnah Yevamot 12)".
Mishnah Yevamot 12 describes the rite. It says nothing about the later Ashkenazi preference (Rabbenu Tam and later
codifiers, against the Mishnah's own priority for levirate marriage, Yevamot 39b). **Fix:** Move the citation to the
description of the rite, and attribute the medieval ruling correctly or without a citation.

### 18. ch 17 VIEW J: "two Torah scrolls" is not in the Mishnah
Mishnah Sanhedrin 2:4 has the king write one scroll that goes out and comes in with him. The two-scroll tradition is
Tosefta Sanhedrin 4:7 / Bavli Sanhedrin 21b. As written, VIEW J also disagrees with the 17:18 note. **Fix:** "The Mishnah
says the king writes his own scroll and carries it with him (Mishnah Sanhedrin 2:4); the Talmud adds a second kept in his
treasury (Sanhedrin 21b)."

### 19. ch 22 VIEW T: Kaufman is misplaced and misquoted
Stephen Kaufman ("The Structure of the Deuteronomic Law," *Maarav* 1, 1979) maps roughly 19:1–22:8 to "Do not murder"
and 22:9–23:19 to "Do not commit adultery", not "22:1–23:14". His thesis is about Decalogue structure, not treaties, so it
does not belong under the "Covenant treaty" lens. **Fix:** Correct the ranges and move it to VIEW C, or rephrase VIEW T
around treaty stipulations.

### 20. 23:15 note: Gittin 45a has several readings
The Talmud offers several readings (verified at hadran.org.il, Gittin 45): a gentile who has renounced idolatry and come to
the land; Rabbi Yoshiya's slave sold to a master abroad; Rabbi Achai's slave who fled from abroad into the land; and Rabbi
Judah the Prince's slave bought in order to be freed. "The rabbis limited the law to a slave who fled from outside the
land" picks one. **Fix:** "The Talmud offers several readings, the best known being a slave who fled from abroad into the
land (Gittin 45a)".

### 21. 12:5 variant: the witnesses are stated too cleanly
The MT reading's `w` lists "Dead Sea Scrolls copies of Deuteronomy; Septuagint". (a) Please verify that a scroll preserves
12:5 (or another "will choose" verse), and cite it by siglum. (b) The Greek is not unanimous. Adrian Schenker (2008)
argued that the oldest recoverable Greek (Old Latin of Codex Lugdunensis, Coptic, some Greek manuscripts) reads "has
chosen" (ἐξελέξατο, *elegit*), and so supports the Samaritan reading as older. The `why` mentions "a few" without naming
him or the Greek evidence. **Fix:** Name Schenker and the split Greek evidence in the `why`, and soften "Septuagint" to
"most Septuagint manuscripts".

### 22. Missing variant: 13:6 "your brother, your own mother's son"
The Samaritan Pentateuch and the Septuagint read "your brother, the son of your father or the son of your mother" (LXX
ὁ ἀδελφός σου ἐκ πατρός σου ἢ ἐκ μητρός σου), and Tigay discusses it. It changes the scope of the law, because a
half-brother on the father's side is now covered. Please verify and add an entry. MT is the shorter reading and can be
followed. Check also whether the SP joins the LXX in adding the Girgashites at 20:17, and if so, name it in that entry.

### 23. Smaller translation points and cross-book consistency
- 23:4 "they hired Balaam": the Hebrew וַאֲשֶׁר שָׂכַר is singular (Moab, or Balak). "he hired" or "Moab hired" is more exact.
- 19:3 "Prepare the roads": the Hebrew has the singular הַדֶּרֶךְ, "the road".
- 25:19 "So the LORD your God will give you rest": וְהָיָה בְּהָנִיחַ is temporal, "When the LORD ... gives you rest ... then
  wipe out". The Plain English Translation turns the clause into a statement. 26:12 does the same ("In the third year ... you will finish"
  for כִּי תְכַלֶּה, "When you have finished").
- 16:18–20: צֶדֶק is "right" in 16:18 and "justice" in 16:20, while מִשְׁפָּט is also "justice" in 16:19. The 16:20 note says
  tsedeq also means "right", but a reader cannot tell the two Hebrew words apart. Consider "Do not bend judgment" in 16:19,
  or a one-line note.
- Exodus consistency: הִטָּה מִשְׁפָּט is "push aside the right / push justice out of the way" in Exodus 23:2, 6, but "bend
  justice" in 16:19; 24:17. חָבַל is "take ... to hold as security" in Exodus 22:26, but "take as a pledge" in 24:6, 17.
  עֵד חָמָס is "a witness who serves violence" in Exodus 23:1, but "a witness bent on harm" in 19:16. The 19:16 note quotes
  the Exodus form. None of these is wrong, but the brief asks for shared Hebrew to match. Align with Exodus, or note the
  difference once.
- 16:16 renders אֶת־פְּנֵי יְהוָה as "before the LORD", where Exodus 23:15 keeps "before my face". The 16:16 note points to
  Exodus for this, which is acceptable.

### 24. Glosses that take sides or mislead
- 21:12 "do her nails" → "trim her nails" settles the Eliezer/Akiva dispute that the note leaves open. Use "care for her
  nails (cut them, or let them grow)".
- 15:1 "make a release" → "cancel debts" settles the debate in the 15:1 note (cancellation or pause). Use "let debts drop".
- 20:1 "horses and chariots" → "armored cavalry" is wrong: chariots are not cavalry. Use "chariot corps" or "tanks of
  their day" (the 17:16 note's image).
- 14:26 "beer" → "strong drink" goes backwards (the gloss is older than the text). 14:21 "roadkill or a carcass" is
  flippant: an animal that died of illness is the usual case.
- 22:24 "the gate of that town" → "the town square", but 17:5 "your town gates" → "the town court". The gate was where
  court was held, so use "court" in both.

### 25. Spec boxes do not follow STYLE rule 4
ch 12 "A law that admits change" is not Claude's idea ("Many readers notice ..."), so make it a normal `deep` section. ch 20
"Trees and people" and ch 23 "The assembly and the stranger", and the topic `claude` entries for chosen-place and poverty,
do not "say where they overlap with published scholarship". **Fix:** Add one line each. For example, ch 20 overlaps with
modern environmental readings of *bal tashchit*. chosen-place overlaps with McConville's reading of the unnamed place.

### 26. 18:11 note quotes 1 Samuel 28:3 in terms that clash with terms.json
"Saul had removed the necromancers and the soothsayers" renders the same הָאֹבוֹת וְאֶת־הַיִּדְּעֹנִים that the Plain English Translation and
terms.json fix as "ghosts of the dead / spirits that know things" (also Leviticus 19:31; 20:6, 27 on the site). 1 Samuel is
not yet on the site, so the quotation is the writer's own. **Fix:** "Saul had removed the ghosts of the dead and the
spirits that know things from the land", or mark it as a paraphrase. The 18:10 note itself is consistent.

### 27. terms.json: check of the added terms
- she'arim "your towns": followed throughout. Where the gate as court is meant (17:5; 21:19; 22:15, 24; 25:7), the Plain English Translation
  rightly keeps "gate". Fine.
- "the place the LORD will choose": followed in every occurrence. Fine.
- "sweep the evil out from among you": followed in 13:5; 17:7, 12; 19:19; 21:21; 22:21, 22, 24; 24:7, and adapted rightly
  in 19:13 and 21:9. Fine.
- ov / yidde'oni: matches Leviticus 19:31; 20:6, 27 on the site. Fine (but see 26).
- nefesh "being": matches 4:29; 6:5; 10:12; 11:13; 30:6, 10 in the other parts. Fine. The qualifier "(in 'with all your
  heart and all your nefesh')" is right, since 12:15, 20 and 14:26 rightly use "appetite" or "as much as you like".
- "the Levite priests": used in 17:9, 18; 18:1; 24:8. 21:5 "the priests, the sons of Levi" renders different Hebrew,
  correctly. Fine.
- Related: the existing entry tamim = "flawless" fits sacrifices, but 18:13 renders תָּמִים תִּהְיֶה "Be whole", which is the
  right choice for a person and matches the note's quotation of Genesis 17:1. Add a qualifier to the entry ("flawless (of
  offerings); whole (of people)"). Add nokhri and zar (finding 2).

### 28. Style mechanics
- 10 previews are 120 characters or longer (13:15, 14:21, 15:1, 18:15, 20:5, 20:11, 21:18, 22:6, 23:19, 26:5).
- 32 verses have a sentence over 32 words, which is heavy for an 8th-grade reader. Worst: 12:17 (44), 22:17 (44), 22:24
  (41), 25:7 (41), 17:2 (40), 14:24 (40), 12:11 (39), 26:3 (39). Split them where the Hebrew allows. Most are lists or
  "Suppose ..." protases.
- No em-dashes, and note lengths are all within 40–160 words. Good.

### 29. 15:14 note: "a verb found only here"
The root עָנַק also appears as a verb in Psalm 73:6 ("pride is their necklace", Qal). The Hiphil is found only here.
**Fix:** "a form found only here".

### 30. 17:15 note: which Agrippa
The Mishnah's "Agrippa" (Mishnah Sotah 7:8) is identified by many with Agrippa I (grandson of Herod) and by others with
Agrippa II (great-grandson). **Fix:** "King Agrippa, probably Agrippa I, ...".

### 31. Fairness on the other hard laws (smaller gaps)
- **20:16–18:** the four-view note is good. Two strong points are missing. On the traditional side: the ban had built-in
  exceptions for Canaanites who turned (Rahab, Joshua 2 and 6:25; Gibeon, Joshua 9), which many defenders cite. On the
  Jewish side: Maimonides (Laws of Kings 6:1–4) holds that even the seven nations were offered peace and could stay if
  they accepted the Noahide laws. The second appears only under 20:10. One sentence in the 20:16 note would do.
- **21:18–21:** every view given is either apologetic (limits on fathers, Roman comparison) or rabbinic (never carried out).
  No sentence states the plain modern moral objection: execution for a son's chronic disobedience and drunkenness. Add
  one, and name who holds it.
- **22:13–21:** the critique is present (virginity tests can wrong innocent women; the law troubles readers). Naming
  holders (Tikva Frymer-Kensky; Carolyn Pressler) and the double standard (no matching penalty for a groom) would make it
  as strong as the defense.
- **13 and 25:11–12:** see findings 5 and 16.

---

## Facts the writer was unsure of (results)

| Claim | Result |
|---|---|
| Kition temple "dogs" (23:18) | The inscriptions are real: Kition tariffs, temple of Astarte, 5th–4th century BC, *lklbm wlgrm*. The meaning "dogs" is disputed (Wikipedia's article renders it "axmen ... sawyers"). The note must hedge, date it and cite a source (finding 8). |
| Walsh on kaf (25:12) | Verified: J. T. Walsh, *JSS* 49 (2004) 47–58, reads "shave her groin". The note's summary is accurate. The source key is missing (finding 16). |
| Ma'aser Sheni 5:15 and Yohanan (26:13) | Verified: "Yohanan the high priest stopped the confession of the tithes." The reason in Bartenura and Sotah 48a is that, since Ezra, the first tithe went to priests, so the farmer could no longer truthfully say "I gave it to the Levite". The note's "no longer given properly" is acceptable, but this is more precise. The fourth and seventh years (5:6) and the last festival day of Passover (5:10) are correct. Identifying him with John Hyrcanus is the usual view. |
| Kiddushin 39b and Elisha ben Abuya (22:6) | Verified (Kiddushin 39a–b; the same story at Chullin 142a): the son sent to fetch the young birds falls and dies, and Acher "saw this" and lost his faith. Correct. Consider adding "Chullin 142a". |
| Nazir 59a (22:5) | Verified: Rabbi Eliezer ben Yaakov derives from 22:5 that a woman should not go out to war with weapons. Correct. |
| Gittin 45a (23:15) | Verified, but it has several readings (finding 20). |
| Bava Kamma 15b (22:8) | Verified: Rabbi Natan forbids raising a vicious dog or setting up a rickety ladder, from "do not bring blood on your house". Correct. |
| Elephantine and Murabba'at documents (24:1) | The Murabba'at get (Mur 19) is dated "year six", which is 72 CE on the Posen Library's dating, or 71/72. The note's "AD 71/72" is fine. Elephantine marriage contracts (5th century BC) with clauses that let either spouse divorce are correct from standard editions (TAD B2.6, B3.3, B3.8). I could not open a web page for them. Wording nit: the note's lead-in "Divorce documents survive ... including marriage contracts" is loose. Say "documents on divorce". |

Other sources I checked and found correct: Pesachim 109a; Chullin 16b–17a; Letter of Aristeas 311; Sifre on adding five
tassels; Mari prophecy letters (hair and hem); Maimonides, Foundations of the Torah 8; Sotah 14a; Esarhaddon's Succession
Treaty (672 BC) clauses on reporting relatives and prophets; Sanhedrin 71a (Rabbi Jonathan on both the town and the son);
Mishnah Shevi'it 10:3–4 (prozbul); Ammi-saduqa's edict; Kiddushin 17a (ha'anakah); Mishnah Sotah 7:8 and Sotah 41b
(Agrippa); Mishnah Sanhedrin 2:4 (eighteen wives); 11QTemple 57:17–18; CD 4:20–5:2; Sifre 154 and Jerusalem Talmud
Horayot 1:1; Shabbat 23a; Sanhedrin 20b; Levinson, "The First Constitution" (2006); Makkot 7b, 10b; Mishnah Makkot 1:6,
1:10, 2:5, 3:10–11; Maimonides, Laws of Kings 11:2 and 6:1, 6:10; Jerusalem Talmud Shevi'it 6:1; Shabbat 129a; Mishnah
Sotah 8:1, 8:5, 8:7, 9:5, 9:9; Laws of Hammurabi 1–3, 15–16, 24, 229–230; Hittite Laws 6 and 193; Middle Assyrian Laws A 8,
A 33, B 1; Shalmaneser III felling orchards at Damascus; Kiddushin 21b; Yevamot 48a; Mishnah Berakhot 5:3 and Berakhot 33b;
Menachot 39b–40a and Yevamot 4a; Ketubot 39b, 46a; Wenham (1972); Mishnah Yevamot 4:13, 8:3 and Yevamot 77a; Hillers
(1964); Westenholz and Budin on qedeshah; Mishnah Temurah 6:3; Josephus, *War* 2.147–149, 4.317 and *Antiquities* 4.234–237,
4.240; Mishnah Gittin 9:10; Westbrook (1986); Qur'an 2:230; Mishnah Bava Metzia 7:2, 9:13; Sanhedrin 86a; Arakhin 15b;
Mesad Hashavyahu ostracon (about 630 BC; Naveh 1960); Berakhot 7a; Bava Metzia 88b; Mishnah Bikkurim 3:1–8; Targum
Onqelos on 26:5; von Rad (1938); Hoffmeier on "strong arm"; Rashi on 26:14; Shabbat Zakhor and Mishnah Yadayim 4:4;
Ketubot 105b; Yerushalmi Peah 1:1; Sotah 48a. The six variants' witnesses are correctly described, apart from finding 21.

## Mechanics

- `node tools/build.js --check Deu/12-26`: "Deu: 345 verses, 172 notes, 6 variants, 95 glosses, 15 chapter pages, 23 topic
  contributions. 0 errors, 0 warnings." All quotations of site books match.
- Every chapter has 8–15 notes (density about 1 per 2 verses). Every chapter page has sum, readings, views for all five
  lenses, deep, echoes and topics.
- Reference lists: the only bare c:v items after another book (23:7 "2:4–8"; 25:12 "19:21") are meant as Deuteronomy and
  parse correctly.
- Anchors: I found none that was awkward or covered the wrong words.

## Fixes applied

All checks after the fixes: `--check Deu/12-26` 0 errors, 0 warnings (345 verses, 175 notes, 7 variants, 93 glosses, 15 chapter pages, 23 topic contributions); `--check Deu/27-34` 0 errors, 0 warnings; `--check Deu` 0 errors, 0 warnings; full build 0 errors.

1. **'innah.** Now "dishonored" in 21:14, 22:24 and 22:29, per terms.json. New `word`/`deb` note at 21:14 gives the range from "humble, mistreat" to force (Genesis 15:13; 16:6; 34:2; 2 Samuel 13:14). The 21:11 note now cites the Hebrew, not the English.
2. **nokhri / zar.** nokhri = "foreigner" in 14:21, 15:3, 17:15 ("a foreigner, someone who is not your brother") and 23:20; zar = "outsider" in 25:5. The 14:21 note, the 14:29 note, the 23:19 note, the 17:15 (Agrippa) quotation and two topic sections were updated. Deuteronomy 29:22 in part 27-34 changed from "outsider" to "foreigner" (no anchor or gloss sat on the word). The 27-34 note on 31:10 quoted 17:15, so its quotation was updated to the new wording.
3. **NIV/ESV drift.** Retranslated from literal.js: 15:12 (now "sells himself", with a new note on the Niphal), 15:13 and 15:18 (same ESV "set him free from you" frame), 14:28, 15:10 and 24:16. 26:5 kept; the variant's `why` now says it is the standard English rendering. 15:11 kept (literal). The bird list was left as it is, matching Leviticus 11.
4. **Ibn Ezra on 20:19.** Fixed: Rashi reads a question; Ibn Ezra rejects it, and the KJV follows him.
5. **Chapter 13 fairness.** VIEW H now says the rabbis read in a court and witnesses but the Hebrew of 13:9 can be read as summary killing. VIEW X now gives Augustine, Calvin (Servetus, 1553–54) and the Massachusetts Body of Liberties (1641), and the answer of Roger Williams and the Anabaptists. A new views note at 13:10 gives the same history with sources.
6. **22:28–29.** Note rewritten around the two readings: the seduction case (change of verb, plural "they are found", no "cried for help" clause, parallel with Exodus 22:16; Pressler, Wenham, Block) and the rape reading (tafas as force; NIV, NRSV). The sexual-violence `uncommon` line moved to `common` as a balanced sentence.
7. **prophet-like-moses.** The Jewish line-of-prophets reading is now in `common`. `uncommon` now holds the Samaritan Taheb and Holladay's Jeremiah.
8. Kition: hedged, dated (5th or 4th century BC), cited (`peckham-kition`).
9. justice core: "elders" removed; justice and poverty now relate to each other.
10. prophet-like-moses added to `related` in prophecy.json and messiah.json. "release of debts" dropped from interest-and-debt. I did not add a link from feast-of-weeks to firstfruits, because that core belongs to another book; this is left for the coordinator.
11. 18:3: Mishnah Chullin 10:1 now "in the land and abroad, with or without a temple".
12. 24:5: rewritten; the KJV agrees with the Plain English Translation, and the other pointing is "rejoice with his wife".
13. 13:5: nine laws, plus two "innocent blood" forms (19:13; 21:9).
14. 13:15 and ch 13 VIEW J: Mishnah Sanhedrin 4:1 dropped; border town (Sanhedrin 16b), Jerusalem (Bava Kamma 82b).
15. 21:2: navel or nose (Mishnah Sotah 9:4); end of the rite (9:9).
16. 25:12: the Sifre's two readings (shame payment; the pursuer) are given. `walsh-palm` added. A sentence on the modern objection to proportion was added.
17. 25:9: Mishnah Yevamot 12 is cited for the rite. The Ashkenazi preference is credited to medieval authorities, against the Talmud's preference for levirate marriage (Yevamot 39b).
18. ch 17 VIEW J: one scroll in the Mishnah (Sanhedrin 2:4), the second in Sanhedrin 21b.
19. ch 22: Kaufman moved to VIEW C with the corrected ranges (19:1–22:8; 22:9–23:19). VIEW T rewritten around treaty stipulations.
20. 23:15: Gittin 45a's several readings given.
21. 12:5 variant: the DSS claim was removed, since I could not verify a scroll for 12:5. The `w` now says "most Septuagint manuscripts". The SP reading now lists the split Greek evidence, and Schenker (2008) is named in `why` with a source key.
22. New variant 13:6 (SP and LXX "your father's son or your mother's son"); MT followed. On 20:17, I could not confirm that the Samaritan Pentateuch adds the Girgashites, so the entry still names only the Septuagint.
23. 23:4 "Moab hired Balaam"; 19:3 "Prepare the road"; 26:12 now "When you have finished, give it..."; 25:19 now "The LORD your God will give you rest ... When he does, wipe out...". The 16:20 note now says the "justice" of 16:19 is mishpat and "right judgment" in 16:18 is tsedeq. The 19:16 note now explains why the wording differs from Exodus 23:1. **Partly rejected:** I did not change "bend justice" or "take as a pledge" to the Exodus wording. Deuteronomy uses these as fixed phrases across chapters 16 and 24, and the notes point to Exodus. 16:16 is unchanged, as the reviewer allowed.
24. Glosses: 21:12 "care for her nails (cut them, or let them grow)"; 15:1 "let debts drop"; 20:1 "a chariot corps, the tanks of their day"; 14:26 "beer" removed; 14:21 "an animal found dead of sickness or age"; 22:24 "the town court". The 15:18 gloss was removed (a note now sits on the same words).
25. Spec boxes: the ch 12 box became a plain `deep` section. Ch 20 and ch 23 boxes, and the chosen-place and poverty `claude` entries, now say where they overlap with published scholarship.
26. 18:11: 1 Samuel 28:3 and Isaiah 8:19 are now in the ov/yidde'oni terms, with no quotation marks on the paraphrase.
27. terms.json: nokhri and zar were already settled by the coordinator. **Not done:** the tamim qualifier. I left that shared entry to the coordinator rather than edit it myself.
28. Style: all ten previews are now under 120 characters. Split long sentences in 12:11, 12:17, 14:24, 17:2, 22:17, 22:24, 25:7 and 26:3. The other long sentences, mostly lists, were left.
29. 15:14: "a verb form found only here", with Psalm 73:6 mentioned.
30. 17:15: "probably Agrippa I".
31. 20:16: Rahab and Gibeon exceptions and Maimonides (Laws of Kings 6:1–4) added. 21:18: Rabbi Shimon's objection (Sanhedrin 71a) and the modern moral objection added. 22:14: Frymer-Kensky and Pressler and the double standard added.
Also: 22:6 now cites Chullin 142a. 26:13 gives the Sotah 48a reason. The 24:1 wording "documents on divorce" was applied.
