# Hostile review: 1 Kings 17–22 (parts/17-22)

Reviewer: Claude (independent agent), following `tools/agent-reviewer.md`. Scope: `parts/17-22/` (plain.txt, notes.json,
variants.json, glosses.json, chapters.json, topics.json, sources.json), the new topic cores `elijah`, `ahab`,
`mount-carmel`, `naboth`, `aram`, and the new shared source keys (`hallo-cos`, `thackeray-kings`,
`fernandez-marcos-antioqueno-kings`, `shenkel-chronology`, `smith-baal-cycle`, `coogan-smith-stories`, `ben-sira`,
`mishnah-eduyot`). I did not review book.json or the other parts.

## Verdict

This is strong work. I compared all 216 verses of the Plain English Translation with `node tools/literal.js 1Ki 17`–`22` and found no
omissions, no wrong numbers or names, and no case where who does what is changed. The translation is faithful and
readable. Leftover NIV/ESV phrasing is light and mostly where the Hebrew forces it. The one real exception is 18:37,
where the Plain English Translation takes the NIV's reading of a debated clause and drops a Hebrew word. The notes are accurate to a
high standard. Almost every Talmud, Midrash, Josephus, Ugaritic, Assyrian and modern citation I could check is real
and says what the note claims, and every new source key is a real work with correct details. The Rahlfs readings the
writer recalled from memory (17:21, 18:36–37, 19:2, 21:1, 21:16, 21:19, 22:28, 22:30, 22:38) are all confirmed by
Brenton's Septuagint. The fairness sections are good: 18:40, 22:19–23, Jezebel, the miracles and the theory boxes
are handled well, and the theory boxes are clearly labeled as Claude's.

The weaknesses are in the variants. Three significant Septuagint differences are missing (18:22, 21:27, and the
location in 21:1), and one note on Romans 11:4 states the Greek evidence backwards. A note on 18:4 also misstates
the Hebrew and the versions. Lucianic readings remain unchecked, and I could not check them either (see the last
section). I found no critical problems.

**Counts: 0 critical, 6 major, 19 minor.**

## Findings

### 1. Major: plain.txt 18:37, "you are the one turning their hearts around"
The Hebrew is וְאַתָּה הֲסִבֹּתָ אֶת־לִבָּם אֲחֹרַנִּית: a perfect verb ("you have turned / you turned") plus the adverb
*achoranit*, "backward". The Plain English Translation turns the perfect into a present progressive and drops "backward". That is
exactly the NIV's interpretation ("you are turning their hearts back again"). It is also the very point note #41
says is debated: "Literally Elijah says, 'you turned their heart backward'". So the text settles the question and
the note then opens it again. The rabbinic reading (God let them turn away, Berakhot 31b) and the "turning back to
you" reading both need the perfect and the "backward".
**Fix:** "and that you have turned their hearts back" (or "...turned their hearts backward"), and keep note #41 for
the two readings.

### 2. Major: notes.json #21 (18:4, "One cave or two?"): misstates the Hebrew and the versions
- The preview says "The Hebrew says 'fifty, fifty' in 'the cave.'" In 18:4 the MT has only one "fifty"
  (חֲמִשִּׁים אִישׁ בַּמְּעָרָה), as the note's own `orig` shows. "Fifty, fifty" is in 18:13. The body then says that
  doubling means "by fifties", which applies to 18:13, not 18:4.
- "Many modern translations, following some Greek and Latin copies, say 'in two caves'": the Septuagint (Brenton,
  from Vaticanus) has "by fifty in a cave" (singular), and the Vulgate has *in speluncis*, "in caves" (plural, no
  number). I know of no Greek or Latin witness that says "two". The NIV's "two caves" is an inference from "fifty
  each" plus a hundred men.
**Fix:** Say that the MT of 18:4 has a single "fifty". Many scholars restore a second "fifty" lost by haplography
(the LXX reads "by fifties", and 18:13 has "fifty, fifty"). "Two caves" in some modern versions is an inference.
Drop the claim about Greek and Latin copies unless a witness can be named.

### 3. Major: notes.json #72 (19:18) on Romans 11:4 gets the Greek backwards; no variant for the tense
The note says Paul quotes "in a form close to the Greek but changed". But the LXX of 3 Kingdoms 19:18 reads
"*you* will leave (καταλείψεις) in Israel seven thousand men" and "every mouth which had not *worshipped* him"
(Brenton). Paul has "*I have kept for myself* (κατέλιπον ἐμαυτῷ) seven thousand men". His first person is closer to
the Hebrew (וְהִשְׁאַרְתִּי, "I will leave / I have left") than to the LXX. Paul also changes the tense. The Plain English Translation
"I will keep... left" follows the MT's waw-perfect as future, which is defensible. But a reader comparing Romans 11:4
needs to know that the Hebrew form allows "I have left", that the LXX has "you will leave", and that the LXX has
"worshipped" where the Hebrew has "kissed". The feminine article τῇ Βάαλ point is correct.
**Fix:** Rewrite the sentence: Paul's wording is independent, closer to the Hebrew in person, and past in tense.
Add a variant entry (or a `var` note) at 19:18 giving MT, LXX and Romans 11:4.

### 4. Major: variants.json is missing the LXX plus at 18:22 (the prophets of Asherah)
Note #28 says the 400 prophets of Asherah "vanish" after 18:19 and are "thought to be a later addition". But the
Greek of 18:22 adds them: "and the prophets of the groves four hundred" (Brenton 3 Kgdms 18:22). The Greek
therefore has them present at the contest. That is evidence a reader needs, whether one takes the Greek as original
or as a harmonizing addition, which is the usual view. It also changes how the 450 of 18:40 relates to the earlier
count.
**Fix:** Add a variant at 18:22 (MT vs LXX), and mention it in note #28.

### 5. Major: variants.json is missing the LXX expansion at 21:27
Brenton 3 Kgdms 20:27 reads: "Achaab was pierced with sorrow before the Lord, and he both went weeping, and rent
his garment... he put on sackcloth also in the day that he smote Nabuthai the Jezraelite." The Greek adds weeping.
More importantly, it says *Ahab* struck Naboth. That bears directly on the chapter's question of blame (note #119,
chapter 21 "Read as a study in two characters", Elijah's "Have you murdered?"). The variant at 21:16 is included,
but this larger one is not.
**Fix:** Add a variant at 21:27 and cross-refer to it from note #119.

### 6. Major: variant at 21:1 leaves out the Greek location ("threshing floor of Ahab king of Samaria", no "in Jezreel")
The Greek (Rahlfs 3 Kgdms 20:1; Brenton: "Nabuthai the Jezraelite had a vineyard, near the threshingfloor of Achaab
king of Samaria") has no "which was in Jezreel" and has "threshing floor" (ἅλων) instead of "palace" (היכל). This is
not a detail. Note #114 lists "Naboth was in fact killed at Samaria" as one solution to the Jezreel/Samaria problem
of 21:19 and 22:38, and the Greek's missing "in Jezreel" is a main piece of evidence scholars cite for it. Note #102
builds on "in Jezreel... right beside the palace".
**Fix:** Add a second variant on "In Jezreel there was a vineyard ... next to the palace" (or extend the 21:1 entry),
and mention it in notes #102 and #114.

### 7. Minor: variant at 22:41: Vaticanus does not have 22:41–51 "as in the Hebrew"
The `why` says Codex Vaticanus "also has this passage at 22:41–51 as in the Hebrew". Brenton's text (from Vaticanus)
has 22:41–45 but nothing for English 22:46–49 (Hebrew 22:47–50: the shrine men, Edom's deputy, the ships, Ahaziah's
offer). These appear in the Greek only in the 16:28a–h block. Please check against Rahlfs, but the duplicate in the
Greek is partial, not complete.
**Fix:** Correct the sentence. Consider a short variant at 22:47 noting that the Greek here lacks 22:46–49 (English).

### 8. Minor: variant at 22:38: witnesses for "armor" are vague or incomplete
Reading R1's `orig` is "(an Aramaic word for weapons in place of zonot, as reported by medieval commentators)". That
is not a reading. The Targum's "armor/weapons" sense is real: the Pulpit Commentary says the "Chaldaic and Syriac"
support "washed his armour". So the **Syriac** should be listed too. The **Vulgate** has a third reading, *habenas
laverunt*, "they washed the reins" (Douay "they washed the reins"), which is missing. The `b` note on Sanhedrin 39b
(*zonot* read as *chazonot*, "two visions") is correct.
**Fix:** Give the Targum's Aramaic (from Sperber's edition, or as Rashi or Radak quote it) or describe it plainly
without the `orig` placeholder. Add the Peshitta and the Vulgate, and say that the KJV's "armour" follows the
Targum and Syriac tradition.

### 9. Minor: chapter 22 kaige section: Lucianic readings still unchecked; CTAT not used
The entries at 22:28, 22:30 and 22:38 honestly say "the Lucianic reading is not checked here", and I could not
consult Fernández Marcos and Busto Saiz either. For 22:28 there is a published judgment the writer can cite: the
*Critique textuelle de l'Ancien Testament* (Barthélemy) rates the MT's "Listen, peoples, all of you" {B}, judging
that the Greek translator dropped it. The UBS translators' commentary reports this. That balances the entry, which
now leans toward "scribal addition".
**Fix:** Add the CTAT judgment to the 22:28 `why`. When the Antiochene edition (Fernández Marcos and Busto Saiz,
vol. 2, 1992) is available, check 22:28, 22:30 and 22:38 and remove the "not checked" caveats.

### 10. Minor: variants.json is missing the LXX at 17:22
The Greek reads "And it was so, and the child cried out" (Brenton). It lacks "The LORD listened to Elijah's voice"
and "the boy's life came back inside him", and adds the child's cry. Together with the 17:21 entry, the Greek tells
the raising quite differently. Also, the 17:21 entry's `en` says "breathed on" but its `plain` says "breathed into":
make them match (ἐνεφύσησεν τῷ παιδαρίῳ is "breathed on/into the child", so pick one).
**Fix:** Add a variant at 17:22 and align the 17:21 wording.

### 11. Minor: plain.txt 18:26 "the altar that had been made" quietly smooths the Hebrew
The MT has אֲשֶׁר עָשָׂה, "which *he* had made" (singular), and the LXX has "which they had made". The Plain English Translation's passive
avoids the problem without saying so. **Fix:** Add a short `word/var` note (the singular may be impersonal, or an
error for the plural, as the Greek reads).

### 12. Minor: leftover NIV/ESV phrasing and a supplied speaker
Most of the drift the writer reported has been removed. These close matches remain (only a few words of the other
version are quoted):
- 22:8: the sentence shape "one more man we could ask the LORD through... He is Micaiah son of Imlah" follows the
  NIV, including its supplied "He is", and "He never prophesies good about me, only evil" follows the ESV's order.
  The same pattern repeats in 22:18. Consider "There is still one man through whom to seek the LORD: Micaiah son of
  Imlah. But I hate him..."
- 22:34: "The king told his chariot driver" matches the NIV word for word.
- 22:35: "The blood from his wound ran ... the floor of the chariot" is nearly the NIV. The Hebrew is "the blood of
  the wound poured into the hollow (*cheq*) of the chariot". Consider "pooled in the bottom of the chariot".
- 22:36: "Every man to his town! Every man to his land!" is the NIV's wording exactly ("town" rather than "city").
  Probably acceptable because it is literal, but "Each man to his city" would avoid the match.
- 22:6 and 22:15: "go to war against Ramoth-gilead ... hold back" follows the NIV's "go to war against ... refrain".
- 22:23: "all these prophets of yours" matches the NIV.
- 20:34: "'And I,' said Ahab" supplies a speaker the Hebrew does not name. The NIV does the same. Either keep it
  and add a note, or write "'And I,' he said".
- Glosses: 19:15 "go back the way you came" and 18:46 "tucked his robe into his belt" are the NIV's own phrasings.
  A gloss is a paraphrase, but it should not be the NIV.

### 13. Minor: plain.txt 20:23 makes the Arameans' "gods" singular, against note #49's own logic
The Hebrew is אֱלֹהֵי הָרִים אֱלֹהֵיהֶם, "gods (or a god) of mountains are their gods". The KJV has "their gods are
gods of the hills", and so does the NIV. For pagan speakers the plural is likely, and note #49 builds a point on
Jezebel's plural. The singular fits 20:28, where the LORD quotes them, so a choice is needed either way.
**Fix:** Add a `deb` note on 20:23, or switch to the plural.

### 14. Minor: plain.txt 18:32: a debated reading chosen without a note
"The size of a plot sown with two seahs of seed" takes כְּבֵית סָאתַיִם זֶרַע as an area. The KJV, NIV and ESV take
it as volume (a trench that would hold two seahs). Both readings are defended, and the area reading has support
(compare Leviticus 27:16). The gloss "about 4 to 7 gallons of seed" works with either.
**Fix:** Add a short `deb` note.

### 15. Minor: glosses.json: one contradiction, two flippant or misaimed glosses
- 18:45 "Little by little" is glossed "in no time", which says the opposite. The idiom עַד־כֹּה וְעַד־כֹּה usually
  means "meanwhile / in a little while". Pick one meaning and make the Plain English Translation and the gloss agree.
- 18:29 "Nobody was listening" glossed "no one was home" trivializes a solemn refrain. 17:6 "bread and meat"
  glossed "breakfast and supper" glosses the food as if it were the time words. The anchor also occurs twice in the
  verse.

### 16. Minor (fairness): unsupported generalization about Jezebel's homeland
Note #104 ("Jezebel, from a land where kings owned what they wanted") and chapter 21's deep section ("Jezebel,
raised in a land where kings were above such laws") state as fact a contrast with Phoenician law for which we have
little evidence. Ugaritic and other texts also protect family land, and Israel's own kings were criticized for
seizing land (1 Samuel 8:14). This is the narrator's characterization, or a scholarly suggestion.
**Fix:** Phrase it as such ("The story presents Jezebel as holding a view of kingship common in her world...",
with a named scholar if one is used).

### 17. Minor: topics.json (jezebel): "fed 850 prophets of Baal and Asherah at her table"
In 18:19 the clause "who eat at Jezebel's table" follows the 400 prophets of Asherah, and it may cover only them.
The Plain English Translation itself attaches it to them. **Fix:** "fed the prophets of Asherah, and perhaps of Baal, at her table".

### 18. Minor: notes.json #94 (20:34): 15:20 is not "the cities taken by Ben-hadad's father" from Ahab's father
In 15:20 Ben-hadad took cities from Baasha, not from Omri. The Bible records no Aramean conquest from Omri, and
commentators treat "my father... your father" in 20:34 as loose (dynastic predecessor) or as another puzzle of
chapter 20. **Fix:** Say this rather than cite 15:20 as the event.

### 19. Minor: notes.json #69 (19:16): Jehu's family line
"Jehu son of Nimshi" here, but "Jehu son of Jehoshaphat son of Nimshi" in 2 Kings 9:2 and 9:14. Readers notice
this, and the note should explain that "son" can mean grandson or that Nimshi was the better-known clan name.

### 20. Minor: notes.json #116 (21:20): wrong parallel for *hitmakker*
Leviticus 25:39 uses the niphal נִמְכַּר ("is sold / sells himself"), not the hithpael *hitmakker*. The true
hithpael parallels are Deuteronomy 28:68 and 2 Kings 17:17. **Fix:** Cite those, or say "a related form".

### 21. Minor: cross-references: a missing New Testament echo
Hebrews 11:37 ("they went about in sheepskins") uses μηλωτή, the Septuagint's word for Elijah's mantle (3 Kgdms
19:13, 19:19; 4 Kgdms 2:8). Commentators read the verse as an allusion to Elijah. Add it to note #66 or #74, and
add Hebrews 11:37 to chapter 19's echoes.

### 22. Minor: topics: missing links and small inconsistencies
- Note #60 (zeal like Phinehas) and the elijah core cite the Phinehas–Elijah tradition, but neither tags or
  `related`-links the existing `phinehas` topic (aka "zeal of Phinehas", "zealots").
- Elisha's call (19:16–21) has no `elisha` topic. If 2 Kings will create it, tag these notes when it exists, or
  create the core now.
- `naboth.json` has kind "People" but the title "Naboth's Vineyard" (an event). Choose one.
- The elijah contribution's `claude` box repeats note #64 almost word for word. STYLE says never explain the same
  point twice. Shorten it to a pointer, or give the topic page a different theory.

### 23. Minor (fairness): small gaps in the views
- 18:40: neither note #45 nor the chapter 18 deep section points out that no divine command for the slaughter is
  recorded. Elijah gives the order (contrast 18:36, "because you told me to"). Many readers, Jewish and Christian,
  build on that silence, so add it as one sentence.
- Elijah in later tradition: the elijah core covers the New Testament, the rabbis and the Qur'an, but not later
  Christian tradition: the church fathers' expectation of Elijah's return as one of the two witnesses (for example
  Hippolytus and Tertullian), the Orthodox feast of the Prophet Elias, and the Carmelite tradition (which appears
  only in mount-carmel).
- Jezebel: the Jewish tradition that her skull, feet and hands were spared because she used to rejoice with brides
  and mourn with mourners (Pirkei de-Rabbi Eliezer 17) would give a fairer picture of how Jewish readers treated
  her. Some readers also know the modern American racialized "Jezebel" stereotype, which could go in the "From queen
  to symbol" section.

### 24. Minor: small accuracy and style points
- Note #20's preview says "The narrator mentions ... only here and in 18:13 and 19:10". 18:13 and 19:10 are speeches
  by characters (and 19:14 and 2 Kings 9:7 also mention the killings). Reword it.
- plain.txt 22:38 "just as the LORD had spoken his word" is awkward. Use "just as the LORD had said", or "according
  to the word the LORD had spoken".
- *Nachal* is "the Kerith Brook" (17:3–7) but "the Kishon River" (18:40). This follows Judges' Plain English Translation for the
  Kishon, so it is defensible, but say so or make it consistent.

### 25. Minor: mechanics
- The build check (`node tools/build.js --check 1Ki/17-22`) reports 0 errors and 0 warnings, including the
  quotation check.
- Previews at or over 120 characters: #5 (17:4), #36 (18:29), #61 (19:10), #65 (19:12), #137 (22:19), #139 (22:21).
- Note #140 (22:22) is 177 words, above the 160-word limit.

## What I verified (no change needed)

- **Septuagint (Brenton, from Vaticanus; Blue Letter Bible and eBible):** 17:1 "Thesbite of Thesbæ of Galaad";
  17:21 "breathed on the child thrice"; 18:36 "answer me this day by fire" (the entry correctly anchors it at
  18:37 and notes where Rahlfs prints it); 19:2 "If thou art Eliu and I am Jezabel"; 19:3 "Eliu feared"; 19:12
  "the voice of a gentle breeze"; 21:1 (3 Kgdms 20:1) opening "And Nabuthai the Jezraelite had a vineyard..."
  without "after these things"; 21:16 "rent his garments, and put on sackcloth"; 21:19 "the swine and the dogs ...
  the harlots shall wash themselves in thy blood"; 22:28 lacks "Hear, all you peoples"; 22:30 "do thou put on my
  raiment"; 22:38 "the swine and the dogs licked up the blood, and the harlots washed themselves in the blood";
  22:41 "in the fourth year of Achaab".
- **Targum at 22:38:** the "armour/weapons" reading is attested secondhand (Pulpit Commentary: "Chaldaic and
  Syriac"). I could not read the Aramaic itself.
- **Talmud:** Sanhedrin 39b (Obadiah an Edomite convert; *zonot* read as "two visions"). Sanhedrin 48b (the
  property of those executed by the king, with Naboth as the example), 89a (no two prophets in the same wording; the
  spirit of Naboth), 113a (the keys of rain and of the dead), Shabbat 149b (Naboth's spirit sent out of God's
  presence, Psalm 101:7) and Pesahim 54a (the cave of Moses and Elijah among the things made at twilight) all match
  the standard text as I know it. Berakhot 6b and 34b, Yevamot 90b, Hullin 5a and Taanit 2a are also correct.
- **Calvin:** *Institutes* 1.18.1 does use the lying spirit of 1 Kings 22 for God's rule over evil spirits.
- **Other sources:** Mekhilta Pisha 1, Pirkei de-Rabbi Eliezer 29, 33 and 47, Jerusalem Talmud Sukkah 5:1 and
  Targum Pseudo-Jonathan on Exodus 6:18 are cited correctly. So are Josephus *Antiquities* 8.13.2 (Menander on
  Ithobaal's drought), Tacitus *Histories* 2.78, the Aqhat curse, El gashing himself, Wenamun, the Kurkh Monolith
  figures, Hazael "son of a nobody", the Black Obelisk, Pritchard's Sarepta dig and the Tanit-Ashtart plaque, the
  Jezreel excavations, the Samaria ivories, Avigad's and Korpel's work on the Jezebel seal, Trible, Moberly,
  Roberts, Lust, Rendsburg, Miller, Budin, Thiele and Shenkel.
- **New shared source keys:** all are real works with correct authors, titles and dates (Hallo and Younger,
  *Context of Scripture*; Thackeray, JTS 8 (1907); Fernández Marcos and Busto Saiz, vol. 2, 1992; Shenkel, HSM 1,
  1968; Smith, *Ugaritic Baal Cycle* vol. 1, 1994; Coogan and Smith, 2nd ed., 2012; Ben Sira; Mishnah Eduyot
  8:7). The part's own sources.json entries are also correct.
- **The decisions the writer was asked to justify:** "a sound of thin silence" (19:12), following the versions'
  "was afraid" against the MT vowels (19:3), keeping the Hebrew order of chapters 20–21, and the kaige explanation
  for chapter 22 are all well argued, with the alternatives given fairly.
- **Terms:** checked against content/terms.json (LORD of Armies, the Israelites, loyal love, grain offering, burnt
  offering, slaughter, under the ban, take possession of, inheritance, abhorrent, worthless men, commands); all are
  used consistently.
- **Style:** no em-dashes, straight quotes only, poetry not applicable, and the reading level is appropriate.

## Fixes applied

Writer's response, 2026-10-23. All 6 major findings are fixed. Of the 19 minor findings, 17 are fixed in full and 2 in part (see 15 and 22).

1. **18:37.** Redone from the literal: "and that you yourself have turned their hearts backward." Note #41 now anchors on that wording and gives both readings, with the Talmud's (Bavli Berakhot 31b).
2. **18:4 note.** Rewritten. The Hebrew of 18:4 has one "fifty", and the note explains the haplography case, citing 18:13 and the Greek "by fifties". "Two caves" is called an inference, not an ancient reading. The Vulgate's "in caves" is noted. The kind is now var.
3. **19:18.** The note is rewritten: Paul's wording is his own, keeping the Hebrew's first person but in the past tense. The Greek has "you will leave" and "worshiped". A new variant at 19:18 gives the Masoretic Text, the Septuagint and Romans 11:4.
4. **18:22.** A new variant gives the Greek plus "the prophets of the grove, four hundred". Note #28 mentions it.
5. **21:27.** A new variant covers the Greek expansion: weeping, and "on the day he struck down Naboth". Note #119 refers to it.
6. **21:1.** A second variant covers the location: no "in Jezreel", and "threshing floor of Ahab king of Samaria". Notes #102 and #114 refer to it. Note #114 is rewritten to reconcile Jezreel and Samaria in three numbered solutions.
7. **22:41.** The `why` is corrected: Vaticanus has only 22:41–45 here, and the remaining items stand in the summary after 16:28. No separate 22:47 variant was added, because the corrected `why` covers it.
8. **22:38.** The placeholder `orig` is removed. The Targum is now described plainly, with the Syriac reported to agree and the KJV following them. A Vulgate reading ("habenas laverunt", "the reins") is added.
9. **Lucianic readings.** I still cannot check them. As instructed, the hedges at 22:28, 22:30 and 22:38 are removed. Each witness line now reads "Codex Vaticanus (kaige text), as printed by Rahlfs". The 22:1 note says once, plainly, that the chapter's Greek readings are Vaticanus's as printed by Rahlfs and that Lucianic readings are not reported. The CTAT judgment is added to 22:28, with a new shared key, `barthelemy-ctat`.
10. **17:21–22.** A new variant at 17:22 ("the boy cried out") is added. The 17:21 Greek `plain` now reads "breathed on", matching its `en`.
11. **18:26.** A new var note explains the singular "he had made" and the Greek "they had made".
12. **Drift.** 22:6 and 22:15 now read "march on Ramoth-gilead to fight, or ... let it be". 22:8 and 22:18 are rebuilt, without the supplied "He is". 22:23 now reads "all your prophets here", and 22:34 "the man at the reins". 22:35 now reads "pooled in the bottom of the chariot", and 22:36 "Each man to his city!" At 20:34 the speaker is no longer supplied ("came the reply"). The 19:15 and 18:46 glosses are reworded. The re-audit is logged by verse only.
13. **20:23.** A deb note is added. The singular is kept because the LORD quotes the Arameans in the singular in 20:28.
14. **18:32.** A deb note gives the area and capacity readings.
15. **Glosses.** Fixed in part. The 18:45 gloss is now "bit by bit, slowly", which agrees with the Plain English Translation's "Little by little". The Plain English Translation itself is kept, as a literal reading of "until thus and until thus". The 18:29 gloss is reworded, and the 17:6 gloss is deleted.
16. **Jezebel's homeland.** Note #104 and the chapter 21 deep section now present this as the story's portrayal and a scholarly suggestion, with the evidence called thin.
17. **Jezebel topic.** Now reads "fed the prophets of Asherah, and perhaps those of Baal too".
18. **20:34 note.** The 15:20 claim is replaced: no conquest from Omri is recorded, and "my father ... your father" may be loose.
19. **19:16 note.** Now explains "son of Jehoshaphat son of Nimshi" (2 Kings 9:2, 9:14).
20. **21:20 note.** Now cites Deuteronomy 28:68 for the hithpael, and Leviticus 25:39 as "a related form".
21. **Hebrews 11:37.** Added to note #74 (the sheepskin mantle) and to chapter 19's echoes.
22. **Topics.** Fixed in part:
    - Note #60 is retagged to `phinehas`, and `phinehas` is added to elijah's related topics.
    - `naboth` now has the kind "Events".
    - The elijah `claude` box no longer repeats note #64. It now points to that note and makes a new point (after Horeb, words instead of fire).
    - **Rejected: the `elisha` topic.** I have not created it, so that it does not clash with the 2 Kings writer, who will introduce Elisha fully. The notes on 19:16–21 can be tagged once that topic exists.
23. **Views.**
    - **18:40:** a sentence that no divine command is recorded is added to note #45 and to the chapter 18 deep section.
    - **Elijah core:** a new section, "Elijah in Christian tradition", covers Hippolytus, *On Christ and Antichrist* 43, and Tertullian, *On the Soul* 50. It also covers the Orthodox feast on July 20 and the Carmelites. It uses a new shared key, `hippolytus-antichrist`.
    - **Jezebel topic:** Pirkei de-Rabbi Eliezer 17 and the American racist stereotype are added.
24. **Accuracy and style.** The note #20 preview is reworded. 22:38 now reads "according to the word the LORD had spoken", and the 22:38 note and the deuteronomistic-history quotation are updated to match. Note #44 now explains the brook/River usage for *nachal*.
25. **Mechanics.** Previews #5, #36, #61, #65, #137 and #139 are shortened below 120 characters, and note #140 is trimmed to 157 words.

**Checks.** `node tools/build.js --check 1Ki/17-22` reports 0 errors and 0 warnings: 216 verses, 162 notes, 22 variants, 77 glosses. `node tools/build.js --check 1Ki` also reports 0 errors and 0 warnings.
