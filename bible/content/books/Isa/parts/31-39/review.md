# Hostile review: Isaiah 31–39

Reviewer's checks: every verse of 31–39 against `node tools/literal.js Isa 31–39` and the Leningrad consonants; Isaiah 36–39 compared word by word, by script, with the Hebrew and the Plain English Translation of 2 Kings 18:13–20:19; every Dead Sea Scroll reading through `tools/dss.py` (1QIsa-a, 1Q8, 4Q55, 4Q56, 4Q57); Swete's Greek through `tools/lxx.py`; `VERBOSE=1 node tools/build.js --check Isa/31-39` (0 errors, 1 warning); the cross-part quotations against the other seven parts' plain.txt; and web checks on Stromberg (DSD 16, 2009) and on the 33:22 founders claim.

## Verdict

This is a strong part, and the 36–39 parallel is the best-handled part of it. The word-by-word comparison with Kings found that almost every place where the Hebrew differs gets a different English, and that almost every place where the Hebrew agrees keeps the Kings Plain English Translation to the letter, including the line breaks of 37:22–35. 37:27 is the one place the Plain English Translation leaves the Masoretic Text, and it says so openly. The Assyrian, Herodotean, Babylonian and Lilith material is accurate and well sourced, and the two traditions cards are real conflicts, fairly answered with real confessional sources. The 33:22 note gets the founders legend right. The faults are of four kinds:

- the lead decision on nes ("flag") is missed at 31:9;
- there is NIV/ESV drift in several poetic lines of 32–34 and in Hezekiah's psalm (38:17, 38:19);
- the 37:18 note makes a false claim about the Great Isaiah Scroll;
- the Babylonian-embassy chronology is stated more firmly than the evidence allows, and the other dating is left out.

Beyond those there are a number of small omissions and slips. There are no critical findings.

Counts: **0 critical, 5 major, 18 minor.**

## Findings

### 1. Major: 31:9 "banner" breaks the lead decision on nes
- **Where:** plain.txt 31:9 ("his officers will flee the banner in panic"); glosses.json 31:9 anchors "flee the banner".
- **What is wrong:** the brief's lead decision says nes is "flag" everywhere in Isaiah, and 31:9 is named in the list. Hebrew וְחַתּוּ מִנֵּס שָׂרָיו (wechattu minnes sarav). Every other part has "flag" (5:26; 11:10, 12; 13:2; 18:3; 30:17 "signal flag"; 49:22; 62:10). The gloss itself says "desert the flag". Also, "flee" is an interpretation: chattu means "be shattered, dismayed", and the min may mean "at" or "away from" the flag.
- **Fix:** "and his officers will be terrified at the flag" (or "...will desert the flag in panic"), with the gloss anchor changed to match.

### 2. Major: NIV/ESV drift in chapters 32–34
Each item below gives the line, how it matches, and why the Hebrew does not force it.
- **32:7, "He plans wicked schemes / to ruin the poor with lies, / even when what the needy say is right."**
  - The skeleton is ESV ("plans wicked schemes to ruin the poor with...", "even when... is right"), and "with lies" is NIV.
  - Hebrew זִמּוֹת יָעָץ לְחַבֵּל עֲנִיִּים בְּאִמְרֵי־שֶׁקֶר וּבְדַבֵּר אֶבְיוֹן מִשְׁפָּט. There is no "wicked", and the site's term for bad-sense mezimmah is plain "schemes". Imre sheqer is "words of falsehood".
  - Redo it from the Hebrew, for example: "He thinks up schemes / to wreck the poor with false words, / even when the needy man speaks for what is just."
- **32:20, "sowing seed by every stream".**
  - This is NIV's line minus "your".
  - Hebrew זֹרְעֵי עַל־כָּל־מָיִם, "sowers beside all waters". "Seed" is added and "stream" is the NIV's choice.
  - Suggest "you who sow beside every water".
- **34:11, "The desert owl ... the raven will nest in it".**
  - This follows NIV's line ("The desert owl...", "...and the raven will nest there").
  - Hebrew יִשְׁכְּנוּ־בָהּ is "will dwell in it", not "nest".
  - The Plain English Translation also uses "screech owl" for yanshuf, which is the KJV's word for lilit in 34:14 three verses later. That invites confusion, and the note on 34:11 offers "owl or ibis" for yanshuf.
  - Re-derive: "...the owl and the raven will live in it".
- **34:13, "nettles and brambles in its strongholds".**
  - This is NIV's phrase ("nettles and brambles her strongholds").
  - Hebrew קִמּוֹשׁ וָחוֹחַ בְּמִבְצָרֶיהָ. Choach is "thorn, bramble"; NIV's exact pairing with "strongholds" is the problem. Re-derive, for example "nettles and thistles in its forts".
- **Smaller echoes.** Fix them if convenient:
  - 32:10 "the grape harvest will fail" is NIV verbatim. Hebrew kalah vatsir is "the vintage is over".
  - 32:19 "And it will hail when the forest goes down" is one word from ESV.
  - 34:5 "See, it will come down" is NIV's "see, it descends". The site elsewhere uses "Look" for hinneh.
  - 33:24 "no one living there will say" is close to NIV.
  - 32:11 "wrap sackcloth around your hips" adds "sackcloth" (ESV and KJV supply it too). Hebrew וַחֲגוֹרָה עַל־חֲלָצָיִם is only "and gird on your loins". Mark the addition in a note or drop it ("tie a cloth around your hips").

### 3. Major: drift in Hezekiah's psalm (38:9–20)
- **38:17a, "Look! It was for my peace / that I had bitterness on bitterness."**
  - The cleft "It was for my ___ that I had ___ bitterness" is the ESV/NRSV construal. Hebrew הִנֵּה לְשָׁלוֹם מַר־לִי מָר has no "it was ... that" and no "my".
  - The phrase can also mean "instead of peace I had bitter bitterness" (KJV "for peace I had great bitterness"), which the Plain English Translation does not even mention.
  - Translate the Hebrew ("Look, for peace I had bitterness, bitterness") and give the readings in a note.
- **38:17b, "But you, in your love, pulled me / from the pit".**
  - "In your love" is NIV's exact phrase, and like NIV/ESV it supplies a rescue verb that the Hebrew lacks.
  - חָשַׁקְתָּ נַפְשִׁי מִשַּׁחַת בְּלִי is "you loved my life out of the pit of nothingness" (MT). Many emend to חָשַׂכְתָּ, "you held back" (compare the Greek εἵλου "you chose"). The Plain English Translation has neither: "pulled" renders no word in the text.
  - Render "you loved my life up from the pit..." or follow the emendation openly with a note or variant.
- **38:19, "as I am doing today".**
  - This is NIV verbatim. Hebrew כָּמוֹנִי הַיּוֹם is "like me today". Use "as I do today" or "like me, today".
- **Lesser:**
  - 38:14 "I coo like a dove in mourning". "In mourning" is not in אֶהְגֶּה כַּיּוֹנָה, and it echoes NIV's "mourning dove".
  - 38:18 "death does not sing your praise". "Sing" is NIV's addition; hillel is "praise".

### 4. Major: 37:18 note misreports the Great Isaiah Scroll
- **Where:** notes.json 37:18, "An odd phrase".
- **What is wrong:** the note ends: "The Great Isaiah Scroll agrees with the Masoretic text of Isaiah here." It does not. dss.py: MT `החריבו מלכי אשור את כל הארצות ואת ארצם`; 1QIsa-a `החריבו מלכי אשור את ‹כול› הארצות`. The scroll has "all the lands" and **lacks** "and their land", the very words the note calls awkward. So the scroll is evidence for the note's own theory that Isaiah's text has slipped. This is a significant reading and needs a variants.json entry.
- **Fix:** correct the sentence. Add a variant with three readings, each followed by its witnesses:
  1. "all the lands and their territory": MT.
  2. "all the lands": 1QIsa-a.
  3. "the nations and their lands": 2 Kings 19:17.
  
  Also check what Swete's Greek reads.

### 5. Major: Hezekiah's illness and the Babylonian embassy are dated too firmly, and the other dating is left out
- **Where:**
  - notes.json 38:1: "Fifteen added years fit Hezekiah's 29-year reign (2 Kings 18:2) only if he fell ill around 701 or a little before."
  - chapters.json 38 views H: "probably shortly before or during 701".
  - chapters.json 39 views H and the 39:3–4 setting: "His embassy probably came about 703".
- **What is wrong:**
  - The "only if" holds only on the chronology that puts Hezekiah's accession in 715 (so that his fourteenth year, 36:1, is 701).
  - On that chronology the illness in year 14 falls in 701. But Merodach-baladan held Babylon only in 722/721–710 and for some months in 703, so an embassy after the recovery cannot easily fall in his reign. The part never states this tension.
  - The other main solution goes unmentioned. It is the accession of about 727/729 that follows the synchronisms of 2 Kings 18:1, 9–10. On it, the fourteenth year, the illness and the embassy fall about 714–712, in Merodach-baladan's first reign and in the years of the Ashdod revolt. A related proposal takes the "fourteenth year" of 36:1 as belonging originally to the illness story (2 Kings 20) rather than to the invasion.
- **Fix:** in the 38:1 note and the chapter 38/39 pages, state the problem plainly: the fourteenth year, the fifteen added years and Merodach-baladan's two reigns. Then give both datings, about 703 and about 713–711, as views rather than "probably". Point to the note on 2 Kings 18:13 for the reign chronology.

### 6. Minor: 36:5 changes the Kings wording more than the Hebrew requires
- **What is wrong:** the only Hebrew difference from 2 Kings 18:20 is אָמַרְתִּי "I say" for אָמַרְתָּ "you say". But the Plain English Translation also adds "your" twice ("your plan and your strength"), which neither book has (עֵצָה וּגְבוּרָה).
- **Fix:** "I say: a plan and strength for war are mere words from your lips." This keeps Kings' "mere words from your lips". The variant's anchor will need the same change.

### 7. Minor: some differences from 2 Kings are not noted anywhere
The rule is "note every difference". The 36:11 list covers only 36:3–22, and there is no matching list for 37 or 39. Not noted:
- 36:2: Isaiah lacks Kings' "They went up and came to Jerusalem" (twice) and has "from Lachish to Jerusalem" and singular "he took his stand".
- 37:4: "what the Rabshakeh said" for Kings' "everything" (Kings has כל).
- 37:15: "to the LORD ... saying" for "in the LORD's presence and said".
- 37:17: "the whole message" (Isaiah adds כל).
- 37:20: no "please" (נא).
- 39:2: "all" moves from "his whole treasure house" (Kings) to "his whole arsenal" (Isaiah). The Plain English Translation handles this exactly, but nothing says so.
- 39:3: "came to me" (Isaiah adds אלי).
- 39:5: "the word of the LORD of Armies" (Isaiah adds צבאות). This is notable because 37:16 gets a note for the same title.

**Fix:** one short "Small differences in 37" note and one for 39, like the 36:11 note.

### 8. Minor: 37:27 claims more support from the Great Isaiah Scroll than it gives
- **Where:** the 37:27 echo note says "The last line here follows Kings and the Great Isaiah Scroll".
- **What is wrong:** 1QIsa-a reads `הנשדפ לפני קדימ`, "scorched before the east wind". It supports "scorched" but not "before it can stand tall" (qamah), which the Plain English Translation takes from Kings.
- **Assessment:** the departure from MT is itself defensible and openly declared (variant `follow: 1`), so it is not a parallel-rule error.
- **Fix:** say "follows Kings; the Great Isaiah Scroll also has 'scorched', but 'before the east wind'".

### 9. Minor: 38:21 note runs two questions together and overstates Stromberg
- **Where:** notes.json 38:21.
- **What is wrong:**
  - The note says "Many take this as proof that 38:21–22 were added to Isaiah from Kings ... Jacob Stromberg argues the reverse: the copyist's eye jumped..."
  - Stromberg's article (DSD 16, 2009) is real. Its abstract says he accepts that the verses were long suspected to be secondary, and argues on redaction-critical grounds that the scroll "more likely reflects an omission".
  - So he denies that 1QIsa-a preserves an earlier text. He does not argue "the reverse" of the verses being a secondary insertion into Isaiah, and the eye-skip mechanism (shared "the LORD's house") is not confirmed as his argument.
- **Fix:** separate (a) "were the verses added to Isaiah's story, perhaps from Kings?" from (b) "does the scroll's first hand show a text before the addition?". Then state Stromberg's position on (b) and give the eye-skip as a common explanation. Consider also noting that some translations (NAB, NEB/REB) move 38:21–22 after 38:6.

### 10. Minor: 39:8 note says Isaiah "adds 'he went on'"
- **What is wrong:** both books have ויאמר there (2 Kings 20:19, "He went on, 'Is it not good...'"). The only differences are כִּי for הֲלוֹא אִם and the place of יהיה.
- **Fix:** delete "and adds 'he went on'".

### 11. Minor: 33:15 note leaves out a step of Makkot 24a
- **What is wrong:** in Bavli Makkot 24a the chain is: Moses 613, David 11 (Psalm 15), Isaiah 6 (33:15), Micah 3 (Micah 6:8), Isaiah 2 (56:1), then **Amos 1 (Amos 5:4, "Seek me and live")**, then Rav Nahman bar Yitzhak's alternative, Habakkuk 2:4. The note jumps from Isaiah's two straight to Habakkuk as "finally".
- **Fix:** add Amos 5:4 and present Habakkuk as the Talmud's alternative answer.

### 12. Minor: 34:4 variant leaves out Greek support for "fall"
- **What is wrong:** Swete's Greek reads καὶ πάντα τὰ ἄστρα πεσεῖται, "all the stars will fall". This supports the scroll's יפולו "will fall" (and Revelation 6:13's falling stars). The "why" calls the scroll's form a scribe's expansion and cites only the Greek "melt" for MT.
- **Fix:** add the Greek "fall" to the scroll's reading, or mention it in the "why".

### 13. Minor: 34:5 variant quotes 34:7 in words the Plain English Translation does not use, and the wordplay is lost
- **What is wrong:** the "why" says "34:7, where the land 'drinks deep' of blood", but Plain English Translation 34:7 has "Their ground will be soaked with blood". The Hebrew uses the same verb in both verses (רִוְּתָה ... וְרִוְּתָה).
- **Fix:** Plain English Translation 34:7 "Their land will drink deep of blood", which also restores the echo of 34:5.

### 14. Minor: some scroll readings that change the meaning are not mentioned
Found by dss.py and not mentioned anywhere:
- 36:11, 1QIsa-a: "do not speak **these words** in the ears of **the men sitting** on the wall" (`את הדברים האלה ... האנשים היושבים`). This is a sizable difference from MT "the people who are on the wall".
- 37:29, 1QIsa-a: lacks the opening "Since you storm against me" (a skip from the identical words ending 37:28).
- 38:11, 1QIsa-a: one "Yah" where MT has "Yah, Yah". The Plain English Translation keeps the doubled name with no remark.
- 39:1, 4Q56 (4QIsa-b): `כי שמע`, agreeing with 2 Kings 20:12 against Isaiah's MT `וישמע`. This is worth a witness line in the 39:1 variant.
- 33:3, 1QIsa-a: `מדממתך` for `מרוממתך` ("at your silence"? for "when you rise up").
- 34:13, 1QIsa-a: `חצר` "court" for MT `חציר`. The Plain English Translation's "a yard for ostriches" in fact reads it this way without saying so.

**Fix:** a short note or variant for 36:11 and 38:11, and a witness line for 39:1. The others are optional.

### 15. Minor: quotations that do not match the site's Plain English Translation
- 36:3 note quotes 22:20 as "I will summon my servant Eliakim son of Hilkiah". Plain English Translation 22:20 (part 13-23) reads "I will call my servant Eliakim son of Hilkiah."
- 31:6 note: those who "go deep" (29:15). Plain English Translation 29:15 has "burrow deep".
- 36:4 note: the KJV wording of 30:15 triggers the only build warning. Write the reference as "(30:15, KJV)", as STYLE.md says.

### 16. Minor: key terms rendered differently, with no note
- **34:14 "a wild goat":** 13:21 (part 13-23) renders se'irim "goat-demons". The 34:14 note debates exactly this choice, but it should say that 13:21's Plain English Translation has "goat-demons", and why 34:14 differs (the singular, and the parallel animals).
- **32:6:** nabal is "godless fool" (the site term), and in the same verse chonef is "acting godlessly". In 33:14 chanefim is "the godless". Readers cannot tell the two Hebrew words apart. Consider "acting like a hypocrite / the impious" for chonef, or a note.

### 17. Minor: small factual slips
- **37 deep (Herodotus):** "About 430 BC the Greek historian Herodotus heard a story". He travelled in Egypt about 450–440. The Histories were finished about 430.
- **36 deep (Lachish):** the siege ramp is called "the only one known from the ancient Near East". Ussishkin's claim is that it is the only Assyrian siege ramp yet found, and other ancient siege ramps exist (Masada, Old Paphos). Say "the only Assyrian siege ramp yet excavated".
- **33:19 note:** "much as English speakers find Dutch nearly understandable but not quite". Most English speakers do not find Dutch nearly understandable, and Akkadian is much further from Hebrew than that. Drop the analogy or use a fairer one.
- **39:1 note:** says 21:9's fall of Babylon was "probably" one of Assyria's sieges in Merodach-baladan's time. That is one view (Erlandsson and others). Many date 21:1–10 to 539. Say "perhaps" and give the other view, or point to the 21:9 note.

### 18. Minor: 33:22 founders note is right but should cite its claim
- **Where:** notes.json 33:22.
- **Assessment:** the substance is sound. The "three branches from Isaiah 33:22" claim is a popular legend, and Federalist No. 47 does credit Montesquieu ("The oracle who is always consulted and cited on this subject...").
- **What could be better:** "Since the 1900s" is vague. The claim spread mainly through late twentieth-century popular "Christian America" literature. Name an example and, ideally, a historian who discusses it. "There is no sign of it in the founders' debates" is fair, but write "no evidence for it in the Convention records, The Federalist or the ratification debates".
- **Fix:** also give the note kind `deb` for the "commander/lawgiver" rendering, or split that into its own word note. As it stands, kind `com` covers both the translation choice and the legend.

### 19. Minor: settings cards
- **Missing cards for narrative scenes.** The brief says every narrative scene gets a card. Missing: 36:1–3 (the invasion and the meeting at the conduit), 36:21–22 (the silence and the report), 37:1–2, 37:8–9, 37:14–15 and 39:1–2 (the embassy itself, the scene the whole chapter turns on).
- **33:17–24:** the `to` field says "the people of Jerusalem after the siege". If the oracle is Isaiah's (the first view given), its first hearers heard it during or before the siege, as a promise. Say "the people of Jerusalem under siege, or (on the later view) readers after it".
- **31:1–3:** "probably about 703–701" with no alternative. Some date 30–31 to the Ashdod revolt of 713–711. Add it as a view, or say "703–701 or earlier".
- **38 views H:** "Manasseh, born three years later" is unclear (three years after what?). It also assumes there was no co-regency, and many chronologies posit one from about 697/696. Say "born in the third of the added years, if there was no co-regency".

### 20. Minor: mechanics
- 38:20 note `r` has "Psalm 4:1" for the psalm title. On this site titles are verse 0, so it should be "Psalm 4:0".
- 38:17 note: `orig` is חָשַׁקְתָּ נַפְשִׁי, but the anchor is "you have flung behind your back". Either anchor the note on "in your love" (after the fix in finding 3) or give השלכת אחרי גוך as `orig`.
- `word` notes without `orig` and/or `kind`: 34:17, 36:11, 38:5, 38:7, 38:16.
- 38:15 note: "Swete's Greek has no text under this verse number" is tool-speak. Say "the Greek runs 38:14–15 together and reads differently".
- Glosses:
  - 36:8 "place a bet with my master => make a wager with my master" only restates the line. Use "bargain", or drop it.
  - 34:6 anchors "rams' kidneys" but glosses the fat ("the choice fat for the altar"). Anchor "the fat of rams' kidneys", or gloss the kidneys.

### 21. Minor: small translation points
- 31:4: "When the lion and the young lion rumble over their kill ... against it ... scare it". The Hebrew has the singular עַל־טַרְפּוֹ ("its prey"), and the lion is one ("the lion, or the young lion"). Make the number consistent.
- 33:17: drops the second verb (תִּרְאֶינָה, "they will see a land of distances"). Restore it: "...a king in his beauty; / they will see a land of wide distances".
- 35:8: "it will be for them alone". "Alone" is added to וְהוּא־לָמוֹ.
- 33:2: "Be their strong arm". "Strong" is added; the Hebrew is "be their arm". The variant's `plain` would need the same change.
- 33:4: "Your plunder is stripped up" is not idiomatic English for אֻסַּף, "is gathered". Write "Your plunder is gathered as caterpillars gather".

### 22. Minor: traditions cards (no conflict problems)
- Both cards ask real questions, and each confessional answer is accurate and sourced: Catechism 1033–1035 and 1021–1022, 1030; Westminster 33.2 and 32.1; SDA Fundamental Belief 26; Fudge; *The Mystery of Salvation* 1995; Stott.
- 34:10 card: the Catholic answer's last sentence ("Isaiah's picture of Edom is read as a type of that final judgment") is not catechism teaching. Mark it as how Catholic commentators read it, or drop it.
- 38:18 card: consider a Lutheran view. Luther often spoke of death as a sleep without teaching soul-sleep, a distinct nuance between the Reformed and Adventist answers. This is optional.

### 23. Minor (for the 2 Kings writer, not this part): 2 Kings 18:35 Plain English Translation adds "these"
2 Kings 18:35 has מי בכל אלהי הארצות with no הָאֵלֶּה, yet its Plain English Translation says "these lands". Isaiah 36:20 has האלה, so Isaiah's identical English is correct. Pass this to the 2 Kings 18–25 writer.

## Fixes applied

I re-checked each finding against the literal line (literal.js), dss.py, lxx.py and the current site Plain English Translation before changing anything. Build: `VERBOSE=1 node tools/build.js --check Isa/31-39` gives 0 errors, 0 warnings (170 verses, 135 notes, 33 variants, 53 glosses, 9 chapter pages, 17 topic contributions).

1. **31:9 nes.** Applied the lead decision: "and his officers will lose their nerve at the flag"; gloss re-anchored on "lose their nerve at the flag".
2. **Drift in 32–34.** Every flagged line, and every other verse in 32–34 whose shape was close to a modern version, was rebuilt from the literal line with a new sentence shape (52 verses in all with finding 3 and the small fixes; listed in the scratch audit). Examples: 32:7 "He thinks up schemes / to wreck the poor with false words, / even when the needy man speaks for what is just"; 32:20 "you who sow beside every water"; 34:11 "Desert owl and hedgehog will take it over; / ibis and raven will settle in it" (no "nest", no "screech owl"; the note explains the ibis); 34:13 "nettles and thistles in its forts". Smaller echoes: 32:10 "the vintage will be over"; 32:19 rebuilt; 34:5 "Look, it will come down"; 33:24 rebuilt; 32:11 "tie a cloth around your hips" (no "sackcloth"). Anchors of notes, variants and glosses were moved to match.
3. **Hezekiah's psalm.** 38:10–19 rebuilt from the literal line. 38:17a "Look, the bitter, bitter pain I had was for my good", with a new `deb` note "For peace, or instead of peace?" giving the "instead of peace" reading. 38:17b "You loved my life away from the pit of nothing" (chashaqta), with a new `var` note on the emendation chasakhta, "held back", and the Greek "you chose". 38:19 "like me, today"; 38:14 "moan as a dove does"; 38:18 "not death that praises you".
4. **37:18.** Confirmed with dss.py: the scroll lacks "and their land" and reads "all the lands". The note is corrected and a variant added with three readings: MT and Greek / 1QIsa-a "all the lands" / 2 Kings 19:17 "the nations and their lands".
5. **Dates.** Applied the lead decision. The 38:1 note, the chapter 38 and 39 pages, the 39:1–2 and 39:3–4 settings cards and the 31:1–3 card now give the dates as debated, with both chronologies: accession about 729/727, illness and embassy about 714–711 (Ashdod revolt); or accession 715, fourteenth year 701, embassy about 703.
6. **36:5.** "I say: a plan and strength for war are mere words from your lips"; variant anchor changed.
7. **Unnoted differences from Kings.** Added "Small differences in chapter 37" (37:15) and "Small differences in chapter 39" (39:5); the 37 note also covers the scroll's skip at 37:29.
8. **37:27.** Now "follows Kings; the Great Isaiah Scroll also has 'scorched', but 'before the east wind'".
9. **38:21.** The two questions are separated; Stromberg is reported as holding that the scroll more likely shows an omission; NAB and REB moving the verses after 38:6 is noted.
10. **39:8.** "Adds 'he went on'" deleted; the note says both books have it.
11. **33:15.** Makkot 24a now includes Amos 5:4, with Habakkuk 2:4 as Rav Nahman bar Yitzhak's alternative.
12. **34:4.** The Greek "all the stars will fall" (lxx.py) is added beside the scroll's reading.
13. **34:5/34:7.** Plain English Translation 34:7 "Their land will drink deep of blood"; the variant's "why" now quotes it.
14. **Scroll readings.** Added a 36:11 variant (1QIsa-a "these words ... the men sitting on the wall", with the Greek), a 38:11 note on the single "Yah" in 1QIsa-a, a 4Q56 witness line in the 39:1 variant ("for he had heard"), and a 34:13 variant for chatser "court" (Plain English Translation now "a haunt of ostriches", following MT). 37:29 is covered in the chapter 37 note. **Not applied:** 33:3 (mdmmtk). It is optional in the review; I judge it a probable graphic slip (d/r) with no clear sense, and left it out.
15. **Quotations.** 22:20 now quoted as the Plain English Translation has it ("I will call my servant Eliakim son of Hilkiah"); 29:15 "burrow deep"; the 36:4 note now quotes Plain English Translation 30:15 instead of the KJV. Also fixed: two new quote warnings (10:5, whose Plain English Translation was changed by part 07-12; and the Kings wording in the chapter 37 note, now referenced to 2 Kings 19:15 and 19:17).
16. **Key terms.** 34:14 now "a goat-demon", matching 13:21 (lead decision); the note gives the "wild goat" reading and the site's "goat idols" at Leviticus 17:7; the evil-spirit and edom topics are updated to match. Chonef in 32:6 is now "act impiously", and the 32:5 note separates it from nabal "godless fool".
17. **Factual slips.** Herodotus "travelled in Egypt about 450–440 BC"; Lachish "the only Assyrian siege ramp yet excavated"; the Dutch analogy dropped from 33:19; the 39:1 note says 21:9 "perhaps" refers to one of Assyria's sieges, and gives the 539 BC view.
18. **33:22.** Split into a `deb` word note ("Commander or lawgiver?") and a `com` note ("Three branches of government?"), which quotes Federalist No. 47 on Montesquieu and places the claim in popular "Christian heritage" books and sermons. **Partly not applied:** I could not verify a named originator or a historian's discussion in the sources available to me, so I name none rather than risk a wrong attribution.
19. **Settings cards.** Added 36:1–3, 36:21–22, 37:1–2, 37:8–9, 37:14–15 and 39:1–2. The 33:17–24 `to` field now reads as the review suggests; 31:1–3 gives 703–701 and 713–711; the chapter 38 H view now says "if there was no co-regency, he was born in the third of the added years".
20. **Mechanics.** Psalm 4:0; the 38:17 notes now have `orig` matching their anchors; `orig`/`kind` added for 34:17, 36:11, 38:5, 38:7, 38:16; the 38:15 note says the Greek runs 38:14–15 together and reads differently; the 36:8 gloss is now "bargain with my master, if you dare"; the 34:6 gloss is anchored on "fat from rams' kidneys".
21. **Translation points.** 31:4 singular ("a lion, a young lion, rumbles over its kill"); 33:17 restores the second verb ("they will see a land of far horizons"); 35:8 "it will be theirs"; 33:2 "Be their arm" (variant updated); 33:4 rebuilt ("the way caterpillars sweep a field clean").
22. **Traditions cards.** The 34:10 Catholic answer no longer presents the typological reading as catechism teaching; a Lutheran view (luther-genesis) is added to the 38:18 card.
23. **2 Kings 18:35.** Not this part's file. Confirmed: Kings has no "these" (הָאֵלֶּה), Isaiah 36:20 does. Passed to the lead for the 2 Kings 18–25 writer.
