# Hostile review: Job 22–31 (part 22-31)

Reviewer's scope: plain.txt, notes.json (129), variants.json (16), glosses.json (83), chapters.json (10), topics.json (25 contributions), sources.json (empty), and book.json where it touches these chapters. Checked against `node tools/literal.js Job 22–31`, texts/orig and texts/auto, the other five Job parts, content/terms.json and content/works.json. `node tools/build.js --check Job/22-31` gives 0 errors and 3 warnings (two of them are this part's `traditions` entries without `top`).

## Verdict

This is a learned, mostly fair part. The scholarship on the broken third cycle (24–27) and on who speaks chapter 28 is laid out honestly, and each main view is named with its supporters. The traditions cards are well sourced, the ancient Near Eastern parallels are handled with care, and the four Ketiv/Qere and versional choices are flagged in variants.json. It has three serious weaknesses. (1) The translation still carries a lot of NIV wording: at least 25 verses keep NIV runs of 5 to 8 words or NIV's own word choices. Several of those verses are logged as "changed" in an audit file that gives the same boilerplate reason for all 239 verses. (2) The brief's textual program is missing. There is no note anywhere on an Old Greek gap, no 11QtgJob reading, and no mention of 4QJob-a and 4QJob-b, although both preserve parts of chapter 31. (3) There are several accuracy slips that matter for the requested focus. The settings card for 23–24 presents 24:18–24 as plainly Job's. The account of which reading is followed at 30:11 is wrong, and there is a fifth, unmarked departure from the Masoretic Text at 30:13. A Talmud citation is wrong (22:16). In 28:3–11 the English subject switches from "humans/they" to "He", which invites readers to take the miner for God. Cross-part wording also breaks two of the part's own echo notes (22:17/21:14 and 28:26/38:25). None of this is beyond repair, but the drift and the missing witnesses must be fixed before the part can be called finished.

Counts: **1 critical, 10 major, 24 minor.**

## Findings

### 1. Critical: NIV wording remains in at least 25 verses (plain.txt, chapters 22–31)
The drift audit (scratchpad job-22-31/drift-audit.txt) uses exactly two boilerplate reasons for all 239 verses ("161 changed, 78 kept"). It cannot be relied on: several verses logged "changed" still match. I compared each verse in my head against the NIV and ESV. Below I give only the verse and a few words of description, never the other text.
- **28:22** (logged "kept"): the second line matches the NIV word for word, 8 words, including NIV's "Only", which the Hebrew does not have (literally "with our ears we have heard its report").
- **27:18** (kept): the first line matches the NIV's first 7 words in the same order ("The house he builds is like a moth's..."). The Hebrew word order is "he built like the moth his house".
- **31:32** (logged "changed"): "had to spend the night in the street" is a 7-word NIV run. "had to" is not in the Hebrew.
- **31:5** (changed): the second line is a 6-word NIV run ("my foot has hurried after deceit").
- **26:3** (kept): the first line matches the NIV except for one verb, and uses NIV's choices "advice"/"insight".
- **26:13** (changed): "his hand pierced the gliding serpent" is a 5-word NIV run. "gliding" is NIV's choice (ESV "fleeing"; Hebrew <i>bariach</i>). The same phrase is repeated in the 26:12 note, the 26:13 gloss and the dragon topic.
- **27:2** (changed): "who has denied me justice" is NIV's wording for <i>hesir mishpati</i> ("has taken away my right").
- **28:16** (kept): "with precious onyx or lapis lazuli" is a 5-word NIV run. Both gem choices are NIV's (ESV has "sapphire").
- **28:26** (kept): the verse is NIV's verse with one noun changed ("a path for the thunderstorm"). "thunderstorm" is NIV's.
- **28:7, 28:8** (changed): both keep the NIV's sentence shape and most of its words ("No bird of prey knows that ... path"; "Proud ... set foot on it").
- **28:18** (changed): "Coral and ... are not worth[y of] mention" keeps the NIV's shape.
- **28:19, 28:23**: same sentence shape as the NIV ("cannot ... with pure gold"; "the way to it ... knows where it ...").
- **28:3–4**: NIV's move to a plural subject ("they"), with the NIV order "they cut a shaft ... far from ... they [dangle/hang] and [sway/swing]". See also finding 6.
- **24:18**: "foam" is NIV's interpretive addition. The Hebrew <i>qal hu</i> is "he is swift/light". The gloss "light as foam" repeats it.
- **31:40**: "stinkweed in place of barley" uses NIV's distinctive "stinkweed" (ESV "foul weeds"). A separate note (31:40 "Stinkweed") then explains the NIV word.
- **31:3**: "Is it not ruin for the ... and disaster for those who do ..." follows the NIV in shape and in both nouns.
- **30:15**: "my dignity ... as by the wind, my safety ... like a ... cloud" follows the NIV's nouns and simile wording.
- **22:17**: "They said to God, 'Leave us alone!'" is a 6-word NIV run (see also finding 10).
- **24:1**: "Why must those who know him" is a 5-word NIV run, and "must" is not in the Hebrew.
- **27:4**: "and my tongue will not [m]utter lies" is NIV except for one letter. "lies" is NIV's word for <i>remiyyah</i>.
- **27:20**: "Terrors [verb] him like a flood" is the NIV's shape. The Hebrew has "like waters".
- **29:6** "cream", **29:8** "the young men ... stepped aside" / "the old men rose", **30:30** "peeling ... fever", **31:6** "weigh me on honest scales", **31:13** "when they had a grievance", **23:14** "many such plans" ("plans" is NIV's addition), **25:5** "If even the moon ... and the stars are not": each is an NIV word choice or a near-run.

Fix: rebuild every verse listed from the literal line with a different sentence shape. Then redo the audit honestly, giving a reason per verse rather than a template. Update the 26:12 note, the 26:13 gloss, the dragon topic, the 31:40 note and the 24:18 gloss to match.

### 2. Major: the brief's textual witnesses are missing (variants.json, notes.json)
The brief asks writers to note Old Greek gaps "when it matters", to use 11QtgJob and 4QJob, and to say whether each witness was checked. This part has:
- **No note on any Old Greek minus.** The Old Greek of Job is about a sixth shorter, and these chapters contain asterisked (Theodotionic) material. For example, Ziegler treats 25:6b as asterisked (Gentry, <i>The Asterisked Materials in the Greek Job</i>, as reviewed in TC 2, 1997). Check Ziegler's Göttingen Job or Rahlfs for 22–31 and add notes or variant entries wherever a whole line or verse is absent, above all inside the debated passages (24:13–24; 26:5–14; 27:13–23; 28). That evidence matters for the third-cycle question.
- **No 11QtgJob reading at all.** The Targum from Qumran (11Q10) survives in parts of chapters 24–31. Its readings bear on hard verses such as 24:18–24, 26:9, 27:18–19, 28:4–13 and 30:13–20. The one mention (ch. 22 deep dive) is second-hand ("as commentators report") and gives no reading. Add 11QtgJob as a witness where it is extant (DJD 23, García Martínez, Tigchelaar and van der Woude, 1998), and say whether you checked it.
- **No 4QJob.** 4Q99 (4QJob-a, about 175–60 BC) preserves 31:14–19, and 4Q100 (4QJob-b, about 50–1 BC) preserves 31:20–21. The oath chapter should say so, and say whether these fragments differ from the Masoretic Text (cite <i>The Dead Sea Scrolls Bible</i> or DJD 16).
- The ch. 22 deep dive says the disorder "is likely older than the second century BC". That overstates the evidence. If 11QtgJob keeps the Masoretic order through 24–27, that shows only that the order predates the Targum's translation, which is usually dated to the 2nd or 1st century BC. Reword it, and name which verses of 24–27 the Targum actually preserves.

### 3. Major: wrong Talmud citation (notes.json 22:16)
The note says the Targum "and the Talmud (Sanhedrin 108a)" link 22:15–18 to the Flood generation. Sanhedrin 108a builds its Flood-generation passage on **Job 21:9–14** (and cites 24:18), not on chapter 22. The rabbinic text that applies 22:16 ("snatched away before their time") is Chagigah 13b–14a (and Shabbat 88b), on the 974 generations; check this before citing it. Fix the citation. You could also add a line to the 24:18 note saying the Talmud reads 24:18 of the Flood generation (Sanhedrin 108a). Check the Targum claim for 22:16 too.

### 4. Major: a fifth, unmarked departure from the Masoretic Text (plain.txt 30:13)
"and no one stops them" renders the conjecture <i>'otser</i> ("restrainer") in place of the Masoretic <i>lo 'ozer lamo</i> ("there is no helper for them", often taken as "they need no one's help"). This is the ESV's choice and differs from the NIV's. There is no note and no variant. Either follow the Masoretic Text, or add a variant entry naming the emendation and giving the reason.

### 5. Major: 30:11 is not a departure from the Masoretic Text, and its Ketiv reading is misrendered (variants.json 30:11, notes.json 30:11, topics ketiv-qere)
The Plain follows the Qere <i>yitri</i> ("my cord"), which is part of the Masoretic Text. Any report or PROGRESS line that counts 30:11 among the "departures from the MT" is wrong: the true departures are 23:2, 27:19, 30:22 (Ketiv repointed against the Qere) and the unmarked 30:13. In the variant, the Ketiv reading's `plain` is "Because they have loosened their own cord". The verb <i>pittach</i> is singular, so the Ketiv gives "he has loosened his cord". "he" may be God or may be collective, but "they" is not the Ketiv. Fix the `plain` and the 30:11 note's description, and state the departures accurately in the report.

### 6. Major: who is "he" in 28:3–11? (plain.txt 28:3–11, notes.json 28:3)
The Plain gives "Humans ... they probe" (28:3) and "They cut ... they hang and swing" (28:4), then "He sets his hand ... He cuts ... He dams up ... his eye" (28:9–11). A reader will naturally take the capitalized "He" in 28:9 as God, which is the minority view the note mentions, not the reading the Plain intends. The note also misdescribes the Plain: it says the Plain "names 'humans' in 28:3 and then keeps 'he' (the miner)", but 28:3b–4 use "they". Pick one subject for 28:3–11 (for example "the miner ... he" throughout, or "humans ... they" throughout), rebuild 28:3–4 away from the NIV's plural shape (finding 1), and correct the note.

### 7. Major: the settings card for 23:1–24:25 treats 24:18–24 as plainly Job's (chapters.json 23 settings)
The cards for chapters 26 and 27 rightly say in `by` that parts are "assigned to Bildad/Zophar by many scholars", and they give views. The card covering 24:18–24, which shows on every verse of chapter 24, gives "by: Job" with no caveat and no `views`. Chapter 24 has no card of its own. Since the site shows the card on each verse, readers of 24:18–24 see an unqualified speaker on the most disputed lines of the third cycle. Fix it: in `by`, put "Job (24:18–24 is assigned to Zophar or Bildad by many scholars, or read as Job quoting the friends)". Add `views` matching the 24:18 note (misplaced speech: Dhorme, Pope; quotation: Gordis, and RSV/ESV "You say", which is confirmed for the ESV; Job's own view or curse). Optionally give 24:18–25 its own card.

### 8. Major: 30:1 mistranslated, "would not have trusted"
The Hebrew <i>ma'asti</i> means "I rejected / disdained / refused". Job is saying the fathers were beneath his contempt, not that he distrusted them. The 30:1 note and the ch. 30 "social reversal" reading both discuss Job's contempt, which the Plain softens away. Fix: something like "whose fathers I would have scorned to put with my sheepdogs", rebuilt so as not to echo NIV's "disdained".

### 9. Major: 22:17 and 21:14 render the same quoted words differently, which breaks the 22:18 note
The 22:18 note argues that Eliphaz "repeats Job's phrases, 'leave us' (22:17; 21:14)". But the site's 21:14 (part 15-21) reads "Go away from us", while 22:17 reads "Leave us alone!" (also an NIV run, finding 1). The Hebrew is the same (<i>sur mimmennu</i>). Render 22:17 to match 21:14 (for example "Go away from us!"), and quote it that way in the note. 22:18b already matches 21:16b exactly. Do the same for 22:17.

### 10. Major: 28:26 and 38:25 are said to be "almost word for word" the same but differ on the site (notes.json 28:26; cross-part 38-42)
<i>derekh lachaziz qolot</i> is "a path for the thunderstorm" in 28:26 but "a road for the thundercloud" in 38:25 (part 38-42). Readers cannot see the echo the note points to. Agree one rendering with the 38-42 writer (after rebuilding 28:26 away from the NIV, finding 1) and use it in both verses.

### 11. Major (fairness and accuracy): chapter 28 handling, small gaps
The treatment of the speaker of chapter 28 is fair and well organized: four views, with names, in the 28:1 note, the deep dive and the card. Remaining problems:
- 28:1 begins in Hebrew with <i>ki</i> ("For / Surely there is a mine for silver"). The Plain drops it with no note. That word is part of the speaker debate: some read it as linking the poem to 27, others see it as an odd start for a new poem. Add it or note it.
- "Alter in part" (28:1 note) is vague. Say what Alter holds or drop it.
- The ch. 28 `readers` field says "For Jewish readers after the exile" as if settled. The book's date is debated (the ch. 22 card says "perhaps"). Hedge it the same way.
- The ch. 28 J view and the 28:28 views note cite Maimonides on 28:28 ("Guide 3.23"; "the summary of what humans can know of providence"). I could not confirm that the Guide comments on 28:28 there. Give the exact place or drop the claim.

(Counted as major because the prompt singled out the speaker of 28, but only the <i>ki</i> point is substantive.)

### 12. Minor: other additions and shifts in the Plain
- 23:10 "Let him test me" turns a perfect (<i>bechanani</i>, "when he has tested me") into a wish. Use "When he has tested me" or note the choice.
- 30:21 "a cruel enemy": "enemy" is not in the Hebrew (<i>achzar</i>, "cruel one").
- 31:21 "waved my hand to strike": "to strike" is added.
- 24:18 "light as foam": see finding 1. If the image stays, add it in a note, not in the text.

### 13. Minor: 28:28 note, YHWH in Job
The note says "the speakers in Job avoid Israel's divine name YHWH in the debate". Job 12:9 is the known exception (the site's 12:9 has "the LORD's hand"). Add "except 12:9".

### 14. Minor: 29:18 note and variant, "the Masoretic notes record that one tradition read <i>chol</i>..."
This is unverified as phrased. If you mean the Nehardean/Western reading difference reported in Genesis Rabbah, say that and cite it; otherwise drop "the Masoretic notes".

### 15. Minor: quotations of other Job verses that do not match the site's Plain
- 29:25 note quotes 16:2 as "miserable comforters", but the site's 16:2 reads "comforters who bring trouble".
- 30:22 note quotes 36:29 as "the crashing of his canopy", but the site's 36:29 reads "the thunder from his pavilion".
- 22:22 note quotes "set his words in your heart", but this part's own Plain says "store up what he says in your heart".
- 26:14 note: <i>shemets</i> is "whisper" here but "murmur" in the site's 4:12, and the note claims they are the same word. Harmonize, or say "the same Hebrew word, there rendered 'murmur'".

### 16. Minor: 31:20 note, "Ketiv and Qere differ in spelling only"
They differ in number: Ketiv "his loin", Qere "his loins" (texts/auto). There is no change in sense, but "spelling only" is inaccurate. The same applies to 27:15 (survivor/survivors), which has no comment; none is needed.

### 17. Minor: 24:12 note, transliterations are identical
"<i>metim</i>, 'men' ... with other vowels ... 'the dying' (<i>metim</i>)" shows the same word twice. Write <i>metim</i> (מְתִים, "men") against <i>metim</i>/<i>mētim</i> (מֵתִים, "dead/dying"), or give the Hebrew.

### 18. Minor: 22:30 note
It omits the common emendation <i>ish naqi</i> ("the innocent man") for <i>i-naqi</i>, which several translations adopt. "Many commentators, from the rabbis to modern scholars" is vague; name one or two. The note's `type` is "views" but it carries `kind: "mis"`, which belongs only on word notes.

### 19. Minor: 31:31 note
"The KJV took it as the servants' wish to eat Job's flesh, out of hatred": the KJV's wording is ambiguous, and "out of hatred" is an interpretation. The sexual reading is chiefly Pope's (Anchor Bible). Attribute it to him rather than to "a few rabbinic readers" unless you can cite one.

### 20. Minor: missing versional variants worth an entry
- 24:24: the Old Greek "like mallow (<i>molochē</i>) in the heat" reflects <i>kammalluach</i> for the Masoretic <i>kakkol</i> ("like all"), and many moderns adopt it.
- 22:20: the Old Greek has "their substance" for "our adversaries".
- 23:2: the Vulgate's "manus plagae meae" should be listed in the "hand" variant. The Old Greek's quite different 23:2a should also be mentioned.

### 21. Minor: 27:19 variant, Masoretic reading's `plain`
"but he will not be gathered to his fathers" adds "to his fathers" as if it were text. Use "but he will not be gathered" and explain the sense in `why`.

### 22. Minor: notes whose anchors contain a variant anchor (30:11, 27:18, 30:20)
STYLE lets notes sit *inside* a variant's anchor, not the reverse. When a reader switches to the alternative reading, these note anchors ("Because he has loosened my bowstring and humbled me"; "The house he builds is like a moth's"; "I stand there, and you just look me over") no longer occur. Shrink the note anchors to text outside the variant, or make them equal to it.

### 23. Minor: duplicated explanations
About ten `word` notes of kind `var` repeat what variants.json already says (22:11, 23:12, 24:12, 27:18, 28:13, 29:18, 30:11, 30:18, 30:20, 30:22, 31:33). STYLE says "prefer variants.json" and "never explain the same point twice". Cut each note down to what the variant panel lacks.

### 24. Minor: `kind` on non-word notes
22:30 (views/mis), 24:16 (history/nu), 25:2 (echo/nu), 26:7 (history/nu), 26:14 (views/nu), 27:23 (history/deb), 29:23, 30:4, 30:19, 30:23, 31:1, 31:7, 31:21 and others carry `kind`, which is defined only for `word` notes. Remove it, or retype the notes as `word`.

### 25. Minor: traditions entries lack `top` (build warnings)
Chapters 25 and 31 `traditions[0]` need `top`. Suggested: `the-fall` (or an original-sin topic) for 25, and the justification/grace topic for 31.

### 26. Minor: "five lines" (chapters.json 25 sum; 22 deep dive)
Bildad's speech is five verses, which is ten poetic lines. Say "five verses".

### 27. Minor: settings card for ch. 22, "the eldest and most respected of the friends"
The text does not say Eliphaz is the eldest. It is an inference from his speaking first (and perhaps 15:10). Write "who speaks first, perhaps as the eldest".

### 28. Minor: unsourced or thin tradition claims
- Ch. 27 J: "The rabbis contrasted Job's oath ... with Abraham's acceptance of God's will" has no source.
- Ch. 29 X: "Gregory the Great used the chapter to describe the duties of a bishop" needs a Moralia book reference, or soften it.
- Ch. 30 J is a single thin sentence with a trailing space. Add a cited point or drop the lens.

### 29. Minor: works naming (notes.json 30:19 `r`)
"Ecclesiasticus 10:9": works.json names the book "Sirach", and the rest of the part uses "Sirach". Use "Sirach 10:9".

### 30. Minor: `torah` against terms.json (plain.txt 22:22)
terms.json gives <i>torah</i> as "law", with a note on the sense "instruction" at first use. The Plain turns it into the verb "teach". The 22:22 note's reasoning (Eliphaz is not an Israelite) is good, but say explicitly that this departs from the site's term rule, or render it "Accept instruction from his mouth".

### 31. Minor: glosses
- 31:10 "turn another man's millstone => be another man's servant" hides the sexual sense that the 31:10 note says is likely. Use "be another man's slave, and his bedmate".
- 26:14 "just the tip of the iceberg" and 27:23 "booed off the stage" are clichés that add images the text lacks. Acceptable, but "only the fringe" or "hissed out of town" would be closer.

### 32. Minor: 23:7 note, "A few Hebrew manuscripts ... read <i>mishpati</i>"
The main support is the Old Greek (<i>to krima mou</i>). Name it and say whether the Hebrew manuscript evidence was checked (BHS apparatus).

### 33. Minor: 22:16 and ch. 22 J view, Targum and Rashi on the Flood
Once finding 3 is fixed, give the exact place (Targum Job 22:16, Rashi on 22:16 or 22:15) and keep only what you have checked.

### 34. Minor: 25:1 note against 22:1 note
The 22:1 note says Bildad's speech is "only six verses (25:1–6)". The 25:1 note says "This one has five". Make them agree (five verses of speech).

### 35. Minor: 26:5 views note, "the NAB"
Specify "the New American Bible (1970)", as the deep dive does. The revised NABRE (2011) prints the Masoretic order.

## Checked and found sound (no action)
- 23:2 "his hand" (Old Greek, Syriac): correctly labeled as a departure, with a good reason. 27:19 "not again" (Old Greek <i>ou prosthēsei</i>): correctly labeled. 30:22 Ketiv read as <i>teshu'ah</i> against the Qere <i>tushiyyah</i>: correctly labeled, with the KJV reading noted.
- The ESV does insert "You say" at 24:18 (verified), as the 24:18 note and the deep dive state.
- Bava Batra 16a (Rava, "turn the dish upside down"); Mishnah Sotah 5:5 (Job served from love); Chullin 89a (<i>belimah</i> as restraint); Avot de-Rabbi Natan 7 (Job's four doors; short of Abraham); Genesis Rabbah 19:5 and Sanhedrin 108b on the phoenix (29:18); Maimonides Guide 3.22–23 on the friends' positions; Trent Session 6, chapter 16 and canon 32; CCC 405 and 2006–2011; St Job on May 6; Babylonian Theodicy on the remote mind of the god; Book of the Dead 125; Shurpu; Amenemope chapter 6; Ugaritic <i>mbk nhrm</i> and <i>btn brh</i>; the Old Greek readings quoted at 22:11, 23:12, 26:12 (<i>kētos</i>), 27:2, 27:18, 28:11, 28:13, 29:18, 30:4, 30:24, 30:29 and 31:33. All are consistent with the sources as I know them.
- Shared terms: Shaddai = "the Almighty", tam/tummah = "wholehearted/integrity", ger = "foreigner", Adonai = "the Lord" (28:28), and the Accuser (30:21 note) all follow terms.json. 27:5's quotations of 2:3 and 2:9, 31:24's of 1:21, 29:9's of 40:4, 30:19's of 42:6 and 22:18b's of 21:16b all match the other parts.

## Fixes applied

All fixes were made in the scratch build scripts and copied here. `node tools/build.js --check Job/22-31`: 0 errors, 0 warnings. Counts now: 239 verses, 131 notes, 19 variants, 83 glosses, 10 chapter pages, 25 topic contributions, 2 part source keys.

1. **Agreed.** Every listed verse was rebuilt from `tools/literal.js` with a new sentence shape: 28:22 (no "Only"; literal "With our own ears we have heard a report of it"), 27:18 (Hebrew order "Like a moth he built his house"), 31:32, 31:5, 26:3, 26:13 ("fleeing snake"), 27:2 ("stripped me of my right"), 28:16 and 28:6 ("rare carnelian", "the sky-blue gem"), 28:26, 28:7, 28:8, 28:18, 28:19, 28:23, 28:3–4, 24:18 (no "foam"), 31:40 ("reeking weeds"), 31:3, 30:15, 22:17, 24:1, 27:4, 27:20 ("Like water"), 29:6 ("curds"), 29:8, 30:30, 31:6, 31:13, 23:14, 25:5. I then re-audited all 239 verses in my head against the NIV and ESV and rebuilt 103 more where I found runs, distinctive word choices or the same shape (for example 22:3–10, 23:3–17, 24:2–25, 25:2, 26:6–11, 27:7–23, 28:1–11, 29:2–25, 30:1–31, 31:1–38). Second-pass totals: 135 rebuilt, 104 kept. The scratch log (job-22-31/drift-audit.txt) now gives a reason for each verse and records no NIV or ESV text. The 26:12 note, the 26:13 gloss, the dragon topic, the 31:40 note and the 24:18 gloss were updated to match.
2. **Agreed.** Old Greek minuses checked in the NETS translation (bracketed Theodotion lines) and noted where they bear on the debate: 24:14b–18a and the Greek curse in 24:18b–24 (24:18 note); 25:6b (25:1 note); 26:5–11 and 26:14a (26:5 note); 27:19b and 27:21–23 (27:13 note); about a third of ch. 28 (new 28:21 note; ch. 28 C lens); 31:1–4 (31:1 note); all of these in the ch. 22 deep dive. 11QtgJob: the 23:7 reading "for truth and law" (23:7 note), and the columns covering parts of 24:12–17, 24:24–26:2, 26:10–27:4, 27:11–20, 28:4–13 and 28:20–28, from Zuckerman and Reed's CAL report (new part key zuckerman-reed-11qtgjob); each place says DJD 23 was not consulted. 4QJob-a (31:14–19) and 4QJob-b (31:20–21): new 31:14 note, with the one reported difference (word order in 31:15), sourced to the existing key dss-english-bible and stating that DJD 16 was not checked. The ch. 22 deep dive no longer says the disorder is "likely older than the second century BC"; it says the Targum shows only that the order was in place when it was translated, and names the columns.
3. **Agreed.** Checked on Sefaria: Sanhedrin 108a cites 21:9–15 and 24:18 for the Flood generation, not ch. 22; Chagigah 13b–14a applies 22:16 to the 974 generations; Rashi on 22:16 says the river is the Flood or the fire of Sodom; the Aramaic Targum of 22:16 has no Flood reference. The 22:16 note now says exactly this (new part key bavli-chagigah), and the 24:18 note adds Sanhedrin 108a. Shabbat 88b was not checked and is not cited.
4. **Agreed.** 30:13 returned to the MT ("they need nobody's help"); the conjecture *'otser* is a new variant entry with no manuscript support named.
5. **Agreed.** The 30:11 variant is relabeled (both readings belong to the MT), the Ketiv reading is singular ("He has slackened his cord"), and `why` says the Plain does not depart from the MT. The 30:11 note, the ketiv-qere topic and the PROGRESS line now list the departures correctly: 23:2, 27:19, 30:22 (and 30:13 is no longer one).
6. **Agreed.** 28:3–11 now has one subject: "The miner ... he" (28:3), "the miners" for the Hebrew plural (28:4), "the miner" again in 28:9, with no line-initial capital "He". The 28:3 note describes the Plain correctly.
7. **Agreed.** The 23:1–24:25 card's `by` now reads as suggested, with three views (misplaced speech; quotation; Job's own words) and sources. I did not add a separate 24:18–25 card, since the hedged card and the 24:18 note cover it.
8. **Agreed.** 30:1 now reads "whose fathers I thought too low / to rank with the dogs that guard my sheep". This avoids "would not have trusted" and also NIV's verb, and keeps "And now" (*ve'attah*). The note and the ch. 30 summary and title were updated.
9. **Agreed.** 22:17 now says "Go away from us", as the site's 21:14 does, and the 22:18 note quotes it.
10. **Agreed.** 28:26b now matches the site's 38:25b, "a road for the thundercloud". I did not edit part 38-42. The 28:26 note says that the two verses use the same Hebrew and the same English.
11. **Agreed.** 28:1 now keeps *ki* as "For", and the 28:1 note explains what it means for the speaker debate. "Alter in part" is dropped. The ch. 28 `readers` is hedged ("perhaps after the exile; the book's date is debated"). The Maimonides claim is removed from the ch. 28 J lens and the 28:28 note, because Guide 3.23 does not quote Job 28 (checked on Sefaria).
12. **Agreed.** 23:10 now reads "Once he has assayed me" (perfect), and the note explains the tense. 30:21 drops "enemy" ("someone cruel"), 31:21 drops "to strike", and 24:18 drops "foam".
13. **Agreed.** The 28:28 note now adds "except once (12:9, 'the LORD's hand')".
14. **Agreed.** "The Masoretic notes" is gone from the 29:18 note and variant. The phoenix reading is now attributed only to Genesis Rabbah 19:5 and Sanhedrin 108b.
15. **Agreed.** 29:25 quotes 16:2 as "comforters who bring trouble", and 30:22 quotes 36:29 as "the thunder from his pavilion". 22:22 has new wording, and its note now matches it. The 26:14 note says *shemets* is the same word as 4:12, "where the site renders it 'murmur'".
16. **Agreed.** The 31:20 note now says the Ketiv and Qere differ in number.
17. **Agreed.** The 24:12 note now gives the Hebrew for the two readings (מְתִים / מֵתִים).
18. **Agreed.** The 22:30 note now names the emendation *ish naqi* and names Andersen and Habel, and its `kind` is removed.
19. **Agreed.** The 31:31 note attributes the sexual reading to Pope (Anchor Bible). The KJV is quoted ("Oh that we had of his flesh!") without the gloss "out of hatred".
20. **Agreed.** New variants for 24:24 (Old Greek "like mallow", *kammalluach*) and 22:20 (Old Greek "their substance"). The 23:2 "hand" variant adds the Vulgate's *manus plagæ meæ* (Clementine text, checked) and mentions that the Old Greek 23:2a is different.
21. **Agreed.** The MT reading of 27:19 now has `plain` "but he will not be gathered", and the sense ("to his fathers", or his wealth) is moved to `why`.
22. **Agreed.** The 30:11, 27:18, 30:18 and 30:20 note anchors now lie outside their variant anchors. In 30:22, 30:24, 23:12 and 28:13 the note anchor is the same as the variant anchor.
23. **Agreed.** The 22:11, 23:12, 24:12, 27:18, 28:13, 29:18, 30:11, 30:18, 30:20 and 30:22 notes are cut down to what the variant panel lacks, and they point to the panel. In 31:33 the Greek sentence is removed, because the variant shows it.
24. **Agreed.** `kind` is removed from every note that is not a `word` note.
25. **Agreed.** The traditions cards now have `top`: chapter 25 has "the-fall" and chapter 31 has "justification".
26. **Agreed.** "Five lines" is now "five verses" in the ch. 25 summary, the ch. 22 deep dive, the retribution topic, the job topic and the 25:1 note.
27. **Agreed.** The ch. 22 card now says "who speaks first among the friends, perhaps as the eldest".
28. **Agreed.** The ch. 27 J lens is replaced: the Mishnah Sotah 5:5 debate (Yochanan ben Zakkai against Joshua ben Hyrcanus, citing 27:5), checked on Sefaria. The Gregory/bishop sentence is removed from ch. 29 X. Ch. 30 J now cites Rashi on 30:2, checked on Sefaria.
29. **Agreed.** The 30:19 note's `r` now reads "Sirach 10:9".
30. **Agreed, with a change.** 22:22 now follows the terms.json rule: "Take the law from his mouth". The note gives the sense "instruction" at first use. I did not take the suggested wording "Accept instruction from his mouth", because it is NIV's own clause word for word.
31. **Agreed.** The glosses now read 31:10 "be another man's slave, and his bedmate", 26:14 "only the fringe of what he does" and 27:23 "hiss him out of town".
32. **Agreed.** The 23:7 note now names the Old Greek (*to krima mou*) and the Vulgate (*judicium meum*) as the support for *mishpati*. It says the Hebrew manuscript evidence was not checked, and the claim "a few Hebrew manuscripts" is removed.
33. **Agreed.** The 22:16 note and the ch. 22 J lens give only what was checked: Rashi on 22:16, Targum Job 22:16 and Chagigah 13b–14a.
34. **Agreed.** Both notes now say five verses (25:2–6).
35. **Agreed.** The 26:5 note now says "the New American Bible (1970)".

Rejected: none. Not done inside this part, as the review asked: the 38:25 wording is left to part 38-42, because 28:26 now matches it. Cross-part follow-up: `--check Job` warns that three other parts still quote this part's old wording: the 01-07 ch. 7 card quotes 30:21, and the 32-37 notes at 34:5 and 37:23 quote 27:2 and 23:3. I did not edit those parts.
