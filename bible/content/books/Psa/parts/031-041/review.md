# Hostile review: Psalms 31–41 (part 031-041)

Reviewer: Claude (hostile reviewer), 2026-10-24. Files read: plain.txt, notes.json (137), variants.json (17),
glosses.json (86), chapters.json (11), topics.json (28), sources.json, the curse-psalms core, and the parts of
book.json, terms.json and the other Psalms parts' plain.txt that touch these psalms. Every verse was checked
against `node tools/literal.js Psa 31`–`41`. `node tools/build.js --check Psa/031-041`: 0 errors, 1 warning.

## Verdict

This is a strong part. The notes are dense, mostly accurate and fair. The 40:6 / Hebrews 10:5 treatment is
the best in the book: three readings, honest about Rahlfs, Jobes and the copying-slip theory, with a properly
labeled spec box. Every psalm has a settings card with `readers`. Every summary gives the Greek number. The
acrostics of 34 and 37 are shown and lettered. The curse psalm (35) and the traditions cards are handled
evenly. Four problems keep it from passing as it is. (1) The translation drifts into ESV/NIV wording in a
cluster in Psalm 38, and in about fifteen other verses. Two verses (38:2, 37:31) match the ESV word for
word. Yet the writer's drift audit marks almost all of them "clean", so the audit cannot be trusted for this
part. (2) Two variant entries misreport the Qumran evidence. 4Q171 supports the restored ayin line at 37:28,
and 4QPs-a is reported to read חנם at 38:19. Both entries say no manuscript supports the alternative. The
37:28 entry also gets the NRSV and the LXX wrong. (3) Hebrew that is identical across parts is translated
differently: 40:13–17 against Psalm 70, 31:1–3 against 71:1–3, the 36:0 title against 18:0, 38:1 against 6:1,
and the word chinnam against 69:4. (4) There are a few liturgical and historical slips: Adon Olam, Jeremiah's
count, Luther, Augustine's wall, and the Liturgy of the Hours. There are no critical errors.

Counts: **0 critical, 6 major, 19 minor.**

## Findings

### 1. Major: ESV/NIV drift in Psalm 38, which the drift audit marks "clean"
plain.txt 38:2, 38:4, 38:5, 38:7, 38:10, 38:13, 38:15, 38:17, 38:20 (also 38:6, 38:11, 38:12, 38:16). In
the scratch drift-audit.tsv, every one of these except 38:15 is logged "clean: no 5-word run".
- 38:2 is the ESV verse word for word ("your arrows have sunk into me ... has come down on me"). The Hebrew
  *nichatu* / *wattinchat* is a wordplay ("came down into me" / "came down on me") that the Plain could keep in
  its own shape.
- 38:4 has the ESV shape, with only two nouns changed. The 7-word run "have gone over my head; like a heavy"
  is followed by "they are too heavy for me".
- 38:5 has 7 of the ESV's 8 words in the same order, with one verb changed. The Hebrew order is "they stink,
  they fester, my wounds".
- 38:7 copies the ESV's interpretive choice "sides" for *kesalim* (loins) and its sentence shape.
- 38:10 copies the ESV's "throbs" and its clause order. 38:13 has the ESV shape ("like ... deaf ... I do not
  hear ... like ... mute"). 38:15 copies the ESV's cleft "it is you ... who will answer". 38:17 has a 9-word ESV
  run ("For I am ready to fall, and my pain is"), and "ready to fall" is the ESV's choice for *nakhon letsela'*.
  38:20 has the ESV shape ("accuse me because I ... after ... good").

Fix: rebuild Psalm 38 from the literal lines with new sentence shapes. For example, 38:2 could read "Your
arrows have come down into me, / and your hand has come down on me", which keeps the Hebrew repetition. For
38:7 use "loins" or "lower back". For 38:17, "I am about to stumble". Then redo the audit for the whole part
by hand, because the log is not reliable here.

### 2. Major: drift elsewhere in the part
- 37:31 is identical to the ESV. The writer kept it as "forced", but line b is not forced: "his steps never
  slide" or "his feet do not slip".
- 32:4 combines the NIV's "sap" with the ESV's "dried up" for *nehpakh*. The Hebrew says "was turned". Use
  "My sap was turned, as in summer's droughts".
- 32:6 "at a time when you may be found" is a 7-word ESV run and the ESV's reading of *le'et metso*.
- 32:7 has the ESV shape in all three lines.
- 33:1 reorders the Hebrew into the ESV's order (the Hebrew order is "Shout for joy, you righteous, in the
  LORD").
- 33:17 "horse is a false hope for" is a 6-word ESV run.
- 33:18 "is on those who fear him, on those who hope in his" repeats the second "on" that the ESV supplies.
- 36:6b "your judgments are like the great deep" supplies the ESV's "are like". The Hebrew has no "like" in
  that line.
- 37:23 "when he delights in his way": "when" is the ESV's interpretive choice. The Hebrew is "and".
- 37:40 has the ESV shape, with "sets them free" put for "delivers".
- 41:12 "because of my integrity, and ... set me in your presence forever" is a 10-word ESV run, and
  "because of" is the ESV's rendering of *be-*.
- 39:5 "you have made my days a few handbreadths, and my lifetime is" is a 10-word ESV run. "a few" and
  "lifetime" are the ESV's choices.
- 31:20 "you hide them from the plots of men" is a 7-word ESV run.

Fix: rebuild each of these from the literal line.

### 3. Major: variants.json 37:28 misreports the evidence for the missing ayin line
- The entry calls *'avvalim le'olam nishmadu* "a modern proposal". In fact the Qumran pesher 4Q171 (4QpPs-a)
  preserves the lemma ending ...לעו]לם נשמדו, "destroyed forever". The editions of Allegro (DJD 5, already a
  source here), Strugnell and Pardee read נשמדו, though Barthélemy read נשמרו. So the reading has a Hebrew
  witness about 1,000 years older than the Leningrad Codex.
- "Many scholars accept this (NRSV)" is wrong. The NRSV reads "The righteous shall be kept safe forever",
  which is the MT verb with a supplied subject, not the reconstruction.
- The LXX has both readings, one after the other: εἰς τὸν αἰῶνα φυλαχθήσονται· ἄνομοι δὲ
  ἐκδιωχθήσονται ("they will be kept forever; but the lawless will be driven out"). The entry presents the LXX
  as if it had only the second.
- The Targum, Peshitta and Jerome (*in aeternum custoditi sunt*) support the MT.

Fix: add 4Q171 as a witness for the second reading and drop the claim about the NRSV. Describe the LXX as a
doublet that has both lines. Because the acrostic, the LXX and Qumran now agree, reconsider whether to
follow reading 1. At least say plainly that the case for it is strong. Also correct note 79 and the ch. 37
deep box ("the ayin word is missing in the Hebrew"). Source checked: psalms.scriptura.org, "The Text of Psalm
37:28", which cites the DJD 5 readings.

### 4. Major: variants.json 38:19 and note 99 hide the Qumran reading
Both say the alternative *chinnam* "has no manuscript support". They say 4QPs-a is "broken and shorter here",
with its wording "uncertain". But 4QPs-a (4Q83) is reported to read חנם here. Only נם is clearly legible, so
the reading is probable, not certain. Fix: list "4QPs-a (4Q83), as reported (only -נם clear)" as a witness
for reading 2, and stop calling it a "conjecture". Keep following the MT if the writer wishes (the LXX, Jerome
*vivent* and the Targum support "alive"), but give the reason. Also fix the PROGRESS.md line, which lists 38:19
among the places where the MT is kept against the Greek. Source: psalms.scriptura.org, "The Text and Meaning of
Ps. 38:20".

### 5. Major: 40:13–17 and Psalm 70 translated separately (cross-part item)
The Hebrew is identical apart from the differences marked (forced) below. Every other difference comes from
the two writers, not the Hebrew:

| Psalm 40 (this part) | Psalm 70 (056-072) | Forced? |
|---|---|---|
| 40:13 "LORD, may it please you to rescue me!" | 70:1 "God, to rescue me," | partly: 70 lacks *retseh* and has Elohim. "to rescue me," as a fragment is not forced |
| "LORD, hurry to my help!" | "LORD, to help me, hurry!" | no (same Hebrew; 70 keeps Hebrew word order, which is awkward English) |
| 40:14 subject first: "Let all who are after my life ... be shamed and red-faced" | 70:2 "Let them be ashamed and red-faced, / those who are after my life" | no (line order) |
| "be shamed" | "be ashamed" | no (*yevoshu*) |
| "together", "to sweep it away" | not present | yes (not in 70) |
| "those who want to hurt me" | "those who want harm for me" | no (*chafetsei ra'ati*) |
| "be driven back" (as in 35:4) | "be turned back" | no (*yissogu achor*) |
| 40:15 "be stunned" | 70:3 "go back" | yes (*yashommu* / *yashuvu*) |
| "because of their shame" | "paid with their own shame" | no (*'al-'eqev boshtam*) |
| "say to me" | "say" | yes (70 lacks *li*) |
| 40:16 "But let all who seek you" | 70:4 "Let all who seek you" | no (neither Hebrew has "but") |
| "be glad in you" | "rejoice in you" | no (*yismechu*) |
| "your rescue" | "your salvation" | no (*teshu'atekha*) |
| "at all times" | "always" | no (*tamid*) |
| "Great is the LORD!" | "God is great!" | name yes; word order no (*yigdal*) |
| 40:17 "As for me, I am poor and needy" | 70:5 "But I am poor and needy" | no (*wa'ani*) |
| "may the Lord keep me in mind" | "God, hurry to me!" | yes |
| "my helper and my rescuer" | "my help and my rescuer" | no (*'ezri*) |
| "my God, do not be late" | "LORD, do not delay" | name yes; verb no (*'al-te'achar*) |

Recommended shared wording, with the forced differences in brackets:
- 40:13 / 70:1: "LORD, may it please you to rescue me! [70: God, rescue me!] / LORD, hurry to help me!"
- 40:14 / 70:2: "Let those who are after my life[, to sweep it away,] / be shamed and red-faced [together]. /
  Let those who want to hurt me / be driven back and disgraced."
- 40:15 / 70:3: "Let those who say [to me], "Aha! Aha!" / be stunned [70: turn back] because of their shame."
- 40:16 / 70:4: "Let all who seek you / celebrate and be glad in you. / Let those who love your rescue / say at
  all times, "Great is the LORD!" [70: "Great is God!"]"
- 40:17 / 70:5: "As for me, I am poor and needy; / may the Lord keep me in mind [70: God, hurry to me!]. / You
  are my helper and my rescuer; / my God [70: LORD], do not be late."

This keeps 35:4 and 35:27 consistent too ("driven back", "Great is the LORD"). Whoever applies it must edit
both parts, and note 124 must then match.

### 6. Major: identical Hebrew in other parts rendered differently
- 31:1–3 against 71:1–3. Several lines are letter-for-letter the same Hebrew: *bekha YHWH chasiti al-evoshah
  le'olam*, *hatteh elai oznekha*, *ki-sal'i umtsudati atta*. This part has "I take shelter in you, LORD; /
  never let me end up in shame", "Turn your ear toward me" and "my cliff and my stronghold". 71 has "LORD, I
  have run to you for shelter. / Let me never be ashamed", "Bend down your ear to me" and "my crag and my
  stronghold are you". Note 3 tells readers the lines are "almost word for word" the same, but the Plain
  hides it. Align them. Also, inside Psalm 31, *metsudah* is "fortress" in 31:2 but "stronghold" in 31:3,
  and 18:2 has "fortress". Pick one.
- The title of 36:0, "Of the servant of the LORD, of David.", against 18:0, "Of David, the LORD's servant".
  The Hebrew is the same (*le'eved YHWH ledavid*). Note 69 points out that the two titles match, so use one
  form.
- 38:1 against 6:1. Note 93 says the lines are the same Hebrew except *qetsef*/*'af*. Yet 6:1 has "rebuke ...
  rage ... discipline" and 38:1 has "correct ... anger ... fury", so the same *yakach* and *chemah* get
  different words. Align 38:1 with 6:1: "LORD, not in your fury, do not rebuke me; / not in your rage, do not
  discipline me". Then 38:3's *za'am* needs another word, such as "indignation".
- chinnam and sheqer. 69:4 renders *sone'ai chinnam* as "Those who hate me for no reason". This part uses
  "without a cause" for *chinnam* (35:19), "with no reason" (35:7), "for no true reason" for *sheqer* (35:19)
  and "for no reason" for *sheqer* (38:19). So the John 15:25 line reads differently in 35:19 and 69:4, and
  note 99's argument about chinnam and sheqer is blurred. Use "for no reason" for *chinnam* everywhere, and a
  "lie" or "falsely" word for *sheqer*. Then update the typology topic quote.

### 7. Minor: build warning, 39:4 note 105
The note quotes 90:12 as "teach us to count our days". The site's Plain is "Teach us, then, to count our
days". Quote it exactly or use "...".

### 8. Minor: 35:7 follows a conjectural word order with no variant entry
The Plain moves *shachat* ("pit") to the second line, which no witness does (the LXX keeps the MT order). Note
58 says so, but the reader cannot switch to the MT order. The PROGRESS line says the MT is followed "except
36:1", which is inaccurate. Add a variants.json entry with the MT order as a reading, or print the MT order.

### 9. Minor: Adon Olam does not "end with" 31:5
Note 4, the ch. 31 `J` view and the prayer topic all say the hymn ends or closes with "into his hand I place
my spirit". The line is in the last stanza, but the hymn ends "Adonai li velo ira" ("the LORD is with me, I
will not fear"). Say "its last stanza takes up".

### 10. Minor: note 11 says magor missaviv occurs "six times in Jeremiah"
It lists five places in Jeremiah (6:25; 20:3; 20:10; 46:5; 49:29), and 20:3 is a name. Lamentations 2:22 has
a variant form. Say "five times in Jeremiah, and in a varied form in Lamentations 2:22".

### 11. Minor: note 2 on Luther
"Luther later recalled that his struggle with 'in your righteousness' in the psalms (31:1; 71:2) ... led to
his new reading." The recollection is the 1545 Preface to the Latin Works, which speaks of Romans 1:17 (and of
lecturing on the Psalter again). It does not cite these verses. The verses come from his first Psalms lectures
(1513–15). The cited source `luther-psalms` does not contain the 1545 preface. Soften to: "Luther's first
lectures on the Psalms (1513–15) wrestled with 'in your righteousness' (31:1; 71:2), the question that led him
to his reading of Romans 1:17."

### 12. Minor: ch. 32 summary overstates Augustine's wall
"Augustine is said to have had it on the wall by his deathbed." Possidius (*Life* 31) says Augustine had the
penitential psalms of David copied and posted. He does not name Psalm 32. The `X` view words this correctly,
so the summary should match it.

### 13. Minor: ch. 35 `L` view on the Liturgy of the Hours
"curse lines like these may be left out (General Instruction 131)". GILH 131 says they have been left out:
Psalms 58, 83 and 109 are omitted, and so are certain verses of others, including parts of Psalm 35. The
traditions card on the same page says this correctly, so align the `L` view with it.

### 14. Minor: grace after meals
The ch. 37 `L` view says 37:25 "closes the Jewish grace after meals". It comes near the end, after 34:10–11
(Hebrew) and before 29:11, which is the last line. Note 88 words this correctly ("among others").

### 15. Minor: ch. 41 `X` view cites Acts 1:16 for Psalm 41
Acts 1:16–20 quotes Psalms 69 and 109 about Judas, not Psalm 41. Either drop it or say "compare".

### 16. Minor: 32:2, the Greek has "in his mouth"
The LXX (Psalm 31:2) reads οὐδὲ ἔστιν ἐν τῷ στόματι αὐτοῦ δόλος, "no deceit in his mouth", for MT "in his
spirit". Note 21 links John 1:47 to the Greek *dolos* without saying this. Add it to note 21, or as a short
variant.

### 17. Minor: acrostic notes (note 41, ch. 34 deep box)
"Psalm 25 has the same shape, missing waw" is incomplete: Psalm 25 also lacks qof. "Some scholars think the
extra pe line spells out alef" is garbled. The theory is that the first, middle and last lines (alef 34:1,
lamed 34:11, pe 34:22) together spell *alef*. The deep box says it right, so fix the note to match.

### 18. Minor: note 13 (31:16)
"The Aaronic blessing asks that the LORD 'May the LORD make his face shine ...'" is ungrammatical. The preview
quotes Numbers 6:25 as "on you", but the site's Plain is "toward you".

### 19. Minor: facts stated as settled
- Note 101 says Jeduthun "is also called Ethan". That is a common identification, not a statement of the text
  (compare 1 Chronicles 15:17, 19 with 16:41). Say "perhaps the same man as Ethan".
- Note 133: "he drops 'the one I trusted': Jesus knew what Judas would do". That is a commentator's
  explanation, so say "perhaps because".
- Note 51: "Many hospital chaplains and Jewish house-of-mourning customs use this verse". This is unsourced.
  Cite it or cut it.

### 20. Minor: claims with no source
- Note 77: the midrash on 36:9 and the hidden light.
- Ch. 36 `J`: "Midrash links 36:9".
- Ch. 33 `H`: "Some rabbis linked it to David".
- Ch. 33 `L`: "on feasts of creation and of the word" is vague. Psalm 33 is at Lauds, Tuesday of Week I. Name
  the real placement or cut the phrase.
- Note 100 names Rashi but cites only `radak-psalms`. Add `rashi-psalms`.

### 21. Minor: note 9, emendations at 31:11
The proposals "*ma'od*, 'a burden'" (the usual proposal is *'ed*, "calamity", or *manod*) are not clear and are
uncited beyond general keys. Check them in Craigie/Tate and give the forms exactly, or keep only *manod*.

### 22. Minor: ch. 37 traditions card, "Evangelical" label
The second view is progressive dispensationalism (Blaising and Bock), but it is labeled "Evangelical", as if
it were a separate church tradition. Label it "Dispensationalist (progressive)" in the text of the view, or
merge it with the first view as "Dispensationalists differ: ...".

### 23. Minor: Hebrew numbering repeated
The brief asks for the note once per part (note 0 does this). Note 117 ("In Hebrew Bibles this is 40:7") and
the ch. 40 deep box repeat it. That is acceptable at the crux, but cut it from one of them.

### 24. Minor: small wording points
- 40:16 "But": there is no conjunction in the Hebrew.
- 41:13 "Amen and Amen" against 72:19 and 89:52 "Amen and amen": pick one capitalization.
- *Nega'* is "sickness" in 38:11 but "blow" in 39:10. The note at 38:11 makes the word matter (skin disease),
  so use one word or mention the other verse.
- Gloss 41:8 "he has caught something deadly" chooses one side of a phrase that note 132 leaves open (disease
  or spell). Use "he is done for".

### 25. Minor: duplicated material
Hebrews' "you took no pleasure" and the stop at "to do your will" are explained in note 118 and again in the ch.
40 deep box. STYLE.md says to make a point once and then refer to it. Keep it in the deep box and shorten the
note.

## Checked and found sound
- LXX readings cited, checked against Rahlfs as I know it, with 32:2 confirmed online: 30:1 title ἐκστάσεως;
  30:7 ἐμίσησας; 30:11 ἐν πτωχείᾳ; 31:4 the thorn; 32:7 ἀσκόν; 33:6 προσέλθατε ... φωτίσθητε; 33:11 πλούσιοι;
  34:3 σύγκλεισον; 34:7 διαφθορὰν παγίδος; 34:15 μάστιγες; 34:16; 34:23; 35:2 ἐν ἑαυτῷ; 35:3; 36:11, 20, 35,
  36; 37:1 περὶ σαββάτου; 37:12; 37:20 ζῶσιν; 37:21 plus; 38:14 ἄνες μοι; 39:7 ὠτία/σῶμα; 39:9; 39:10
  εὐηγγελισάμην; 40:2 καὶ πένητα; 40:14 γένοιτο γένοιτο.
- Rabbinic and liturgical references: Berakhot 7b, Berakhot 8a, Nedarim 40a, Hullin 5b, Leviticus Rabbah 9:9,
  Mishnah Avot 1:12 and 5:1, Mishnah Berakhot 9:5, Midrash Tehillim 1:2 and 34, the bedtime Shema, Nishmat,
  Shabbat Pesukei Dezimra (33, 34), Birkat Hamazon (34:10–11 Hebrew, 37:25), Maimonides on teshuvah.
- Christian references: Compline *In manus tuas* and Wednesday's 31:1–6; Cyril, Mystagogical Catechesis
  5.20; the koinonikon of the Presanctified Liturgy; Ps 33 (LXX) at the end of the Slavic Liturgy; the
  Annunciation lectionary (Ps 40 with Hebrews 10:4–10); Cassiodorus and the seven penitential psalms;
  Gregory of Nazianzus, *Oration* 31.3; Basil; Irenaeus, *Demonstration* 5; the Columbia motto; Brahms
  movement 3; Mendelssohn's *Lobgesang*; U2's "40"; BCP burial 39 and 90; GILH 131.
- Church documents: Catechism 1021–22, 1030, 1366–67, 1456–57, 1716; Westminster 15, 29.2, 32.1; Augsburg 11,
  25; Apology 24; Article 31.
- 4Q171 and "the congregation of the poor". The fairness of the 40:6 and Hebrews, 41:9 and John, and 34:20 and
  John 19:36 notes.
- Numbering: note 0 is correct for the joined two-word titles. The title forms follow terms.json ("For the
  music director", "A maskil", "Selah", "Happy", "Sheol" glossed at 31:17, hesed "loyal love").

## Fixes applied

- **Lead decisions applied first.** Letter names, lyre/harp (33:2), Selah placement, doxology (41:13 now matches 106:48 and "Amen and amen" of 72:19 and 89:52), "the Greek" = Rahlfs' Old Greek (the variants' LXX label no longer says "checked online"; the 40:6 "body" reading is named by codex), no "I have not seen" wording left, and one witness statement in note 0 (Rahlfs on blueletterbible.org and dssenglishbible.com checked by the writer; everything else "as reported"). No standalone Yah in 31–41; no `spec` notes.
- **1 (Psalm 38 drift).** Rebuilt from literal.js: 38:1–7, 38:9–17, 38:19–21, with new sentence shapes. 38:2 keeps the *nichatu / wattinchat* repetition, 38:7 has "loins" and 38:17 "I am about to stumble". Anchors, glosses and the 38:20 variant were updated to match.
- **2 (drift elsewhere).** Rebuilt every listed verse (31:20, 32:4, 32:6, 32:7, 33:1, 33:17, 36:6, 37:23, 37:31, 37:40, 39:5, 41:12 and the rest of the list). Then I redid the audit by hand for all 234 lines, which changed 92 lines in all. The new log in scratch records only verse, outcome and reason.
- **3 (37:28).** 4Q171 (DJD 5; Strugnell and Pardee נשמדו, Barthélemy נשמרו) is now a witness for the restored line, and the LXX is described as a doublet. The NRSV claim is gone, and the Targum, Peshitta and Jerome are listed for the MT. The entry says the case for the restored line is strong. I kept the MT and gave the reason: the versions support it, the LXX keeps it too, the Qumran letter is disputed, and the line reads well. Note 79 and the ch. 37 deep box are corrected.
- **4 (38:19).** 4QPs-a (4Q83) is listed as reported (only -נם clear), and the word "conjecture" is gone. The MT is kept, with the reason given (LXX, Jerome *vivent*, Targum). Note 99 is rewritten, and the PROGRESS line is corrected.
- **5 (40:13–17 / Psalm 70).** The wording is final and follows the table. Only 40:14 ("all" dropped) and 40:16 ("But" dropped) changed, because the rest already matched. Note 124 now says the two psalms share their English. To match, Psalm 70 needs only to drop "But" in 70:4.
- **6 (identical Hebrew).** 36:0 now matches 18:0, 38:1 matches 6:1, and 38:3 *za'am* is "indignation". 31:2 *metsudah* is "strongholds", as in 31:3 and 71:3. *Chinnam* is "for no reason" in 35:7 and 35:19 (as 69:4); *sheqer* is "lie" or "falsely" (35:19, 38:19). The typology topic quote is updated.
- **7.** Note 105 quotes 90:12 exactly.
- **8.** Added a 35:7 variant that gives the MT word order, and the PROGRESS line now names 35:7.
- **9.** Adon Olam is now "its last stanza takes it up" (note 4, ch. 31 J, prayer topic).
- **10.** Note 11 now says "five times in Jeremiah", with 20:3 marked as a name, "and in a varied form in Lamentations 2:22".
- **11.** The Luther sentence in note 2 is softened as suggested.
- **12.** The ch. 32 summary now follows Possidius (the penitential psalms posted on the wall).
- **13.** Ch. 35 L now says the lines "have been left out", with Psalms 58, 83 and 109.
- **14.** Ch. 37 L now says "near the end of" the grace after meals.
- **15.** Ch. 41 X now has "compare Acts 1:16", and Acts 1:16 is removed from the echoes.
- **16.** The 32:2 LXX "in his mouth" is added as a short variant and in note 21.
- **17.** Note 41 is fixed: Psalm 25 also lacks qof, and the alef/lamed/pe spelling is explained correctly.
- **18.** Note 13 is fixed: the grammar is corrected and "toward you" is used in both the preview and the body.
- **19.** Note 101 now says "perhaps the same man as Ethan", with the 1 Chronicles refs. Note 133 now says "perhaps because". The chaplains sentence in note 51 is cut.
- **20.** The hidden-light midrash is cut from note 77 and ch. 36 J. "Some rabbis" is cut from ch. 33 H. Ch. 33 L now names Lauds, Tuesday of Week I. `rashi-psalms` is added to note 100.
- **21.** Note 9 keeps only *manod*. The Plain keeps the Hebrew "very much so".
- **22.** The ch. 37 card now labels both views "Dispensationalist", with "Classic" and "Progressive (Blaising and Bock)" in the text. The build allows only listed tradition labels.
- **23.** Hebrew numbering is cut from note 117 and kept in the ch. 40 deep box.
- **24.** 40:16 "But" is dropped. 41:13 now reads "Amen and amen". *Nega'* is "blow" in both 38:11 and 39:10, and note 97 points to 39:10. Gloss 41:8 is now "he is done for".
- **25.** Note 118 is shortened and refers to the ch. 40 deep box for Hebrews' other changes.
- `node tools/build.js --check Psa/031-041`: 0 errors, 0 warnings.

## Second drift check

Reviewer, 2026-10-24. I re-read the current plain.txt line by line (all 234 lines). I compared each line in
my head with the NIV and the ESV, and checked the rebuilt lines against `node tools/literal.js Psa 31`–`41`.
The rebuild worked. Psalm 38 is now in its own words throughout, as are all the verses flagged in findings 1
and 2. The lines listed below are the ones still close to one version, followed by four errors in the new
wording. Some lines still share wording that the Hebrew forces, and I accept those: 31:5, 31:15, 33:12, 36:7c,
36:9, 37:30, 37:31a, 37:34c, 38:22, 39:12, 40:6c and 40:17a.

### Still close to the NIV or ESV
1. **32:7a "You are my hiding place"**: the opening words of the NIV verse, in the same order. The rebuild
   moved the line away from the ESV ("a hiding place for me") and onto the NIV. The Hebrew allows either
   phrase, so this is nearly forced. To be safe, write "You are a hiding place for me" with a different
   second line, or "In you I hide".
2. **34:15 (unchanged)**: "are on the righteous, and his ears are" is a 7-word NIV run, and "turned to their
   cry" mirrors the NIV's "attentive to their cry". Use another shape, such as "The LORD's eyes look toward
   the righteous; / his ears are open to their cry for help."
3. **37:24 (unchanged)**: "Though he falls, he will not be ... for the LORD ... his hand" follows the ESV
   sentence shape clause by clause. The Hebrew *ki-yippol* allows "If he falls" or "He may fall, but".
4. **37:25 (unchanged)**: "or his children begging for" is a 5-word ESV run. "begging" is a shared choice for
   *mevaqqesh* ("seeking"). Use "or his children hunting for food".
5. **37:31b "his feet do not slide"**: the Hebrew is *ashurav*, "his steps". "Feet" is the NIV's choice, and
   line a is already identical to both versions, as the Hebrew forces. Use "his steps never slide". (This
   was my own suggestion in finding 2, and it was a poor one.)
6. **41:11 (unchanged)**: "By this I know that you" is a 6-word ESV run, and "shout in triumph over me"
   matches the ESV. It is close to forced, but the verse as a whole has the ESV shape. Use, for example,
   "This is how I know you are pleased with me: / my enemy raises no victory shout over me."
7. **31:23 (unchanged)**: "Love the LORD, all you his" is a 5-word ESV run, and "the one who acts in pride" is
   the ESV's ending. Use "Love the LORD, all his faithful ones" and "the one who behaves proudly".

### Errors in the new wording against the Hebrew
8. **31:11 "To all my foes I am a disgrace"**. The Hebrew *mikkol-tsorrai hayiti cherpah* is "because of
   (from) all my foes I have become a disgrace". The new line makes the foes the ones who scorn him, which
   loses the cause. Use "Because of all my foes I have become a disgrace". If that comes too close to the ESV,
   use "All my foes have made me a disgrace".
9. **37:15 "But their own hearts will take their swords"**. The Hebrew is *charbam tavo' velibbam*, "their
   sword will go into their own heart". The new line turns the hearts into the agents that "take" the swords.
   Use "But their swords will pierce their own hearts".
10. **39:11b "what he loves melts away as if moth-eaten"**. The Hebrew *wattemes kaash chamudo*: "you melt
    away, like a moth, what he treasures". God is the agent, as in the first line ("You punish"). The passive
    drops that. Use "like a moth you wear away what he treasures".
11. **38:6 "down to the ground"**. The Hebrew *'ad-me'od* is "very much, utterly". "To the ground" adds an
    image the Hebrew does not have. Use "I am twisted and bent double, utterly".

Count: 11 (7 lines still close to a modern version, 4 errors in the new wording).

### Fixes applied (second round)
- I rebuilt each of the 11 lines from `node tools/literal.js` in new shapes, not in the reviewer's wording:
  - 32:7a "You are a place for me to hide"
  - 34:15 "The LORD's eyes turn toward the righteous, / and his ears toward their cry for help"
  - 37:24 "He may fall, but ... / because the LORD is holding his hand"
  - 37:25 "I was a young man, and now I am old too, ... or his offspring hunting for food"
  - 37:31b "his steps never slide"
  - 41:11 "This is how I know you take delight in me: / my enemy raises no shout of triumph over me"
  - 31:23 "Love the LORD, every one of his faithful! ... whoever behaves with pride"
- I fixed the four lines that were wrong against the Hebrew:
  - 31:11 "Every foe I have has made me a disgrace": the foes are now the cause of the disgrace.
  - 37:15 "the sword they hold will end up in their own heart": the sword is now the agent.
  - 38:6 "utterly bent double": "to the ground" is dropped.
  - 39:11b "like a moth you melt away what he holds dear": God is now the agent.
- I updated the anchors and quotes that these changes affected: notes on 31:23, 37:25 and 39:11, the gloss on 37:31, and the ch. 37 H view. Note 37:25 now quotes the Plain "left on his own".
- `node tools/build.js --check Psa/031-041`: 0 errors, 0 warnings.
