# Hostile review: Ecclesiastes 1–4 (part 01-04)

Reviewer: separate hostile-review agent (not the writer). Scope: plain.txt, notes.json, variants.json, glosses.json,
chapters.json, topics.json, sources.json of `parts/01-04/` (book.json is reviewed separately). Checked against
`texts/orig/Ecc.json` (literal.js, chapters 1–4), Rahlfs' Greek (the CCAT morphological text, read verse by verse
for every Greek claim in this part), a second printed Greek text, Ibn Ezra's commentary and Leviticus Rabbah (Sefaria
Hebrew texts), and the shared terms, topics and other two parts' Plain English Translation. `VERBOSE=1 node tools/build.js --check Ecc/01-04`:
0 errors, 0 warnings. `--check Ecc`: 0 errors, 2 warnings, both in part 05-08 (its quote of 9:9).

## Verdict

This is a strong part. The translation is close to the Hebrew, the key terms are held steady (hevel is "vapor" in
all 20 places in chapters 1–4, and "chasing the wind", "under the sun/heavens", "gain", "toil", "share" and "task"
are consistent), the hard places (1:1–2, 1:9, 3:1–8, 3:11, 3:16–22) are handled at the depth the brief asks for,
and the 3:21 decision to follow the Greek and Latin vowels is clearly labeled. Most of the Greek claims check out in
Rahlfs, including some I expected to be wrong (Rahlfs does put "there" at the start of 3:18, and does read "who will
spare" in 2:25). It is not ready to publish, though. Five verses still carry NIV or ESV wording that the Hebrew does
not force, and in two of them (2:20 and 4:16) a ten-word run or an ESV interpretive choice survived the drift audit.
One variant (2:15) misdescribes the Greek and would make the verse say the same thing twice if a reader switched to
it. Two scholarly attributions are wrong (Ibn Ezra on 1:4; Miller and Seow on hevel, which matters because it is
the site's reason for "vapor"). The 3:21 note and the chapter 3 page say the Masoretic vowels make the verse "a
statement, not a question", which is not true. Several setting cards name a type of reader rather than a first
audience. None of this is critical, and all of it can be fixed quickly.

Counts: **critical 0, major 10, minor 22.**

## Findings

### Major

**1. Major. plain.txt 2:20: ten-word ESV run.** "So I turned around and gave my heart up to despair over all the toil
I had toiled at under the sun." The middle, "and gave my heart up to despair over all the toil", matches the ESV
word for word. The ESV's "gave my heart up to despair" is its own idiom for *leya'esh 'et-libbi*, "to make my heart
despair" (literal.js: "to make despair | heart my"). The Hebrew does not force "gave ... up". The note at 2:20 is
also anchored on that phrase. *Fix:* rebuild, e.g. "So I turned around and let my heart sink into despair over all
the toil..." or "...and made my heart give up hope over all the toil...". Move the note's anchor to match.

**2. Major. plain.txt 2:3: NIV sentence frame.** The second sentence, "I wanted to see what is good for human beings to do
under the heavens during the numbered days of their life", follows the NIV's sentence shape: "I wanted to see what
[was] good for [people] to do under the heavens during the [few] days of their lives". The Hebrew is
*'ad 'asher-'er'eh 'ey-zeh tov* ... "until I should see which is good ... the number of the days of their lives".
"I wanted to see" and "during" are the NIV's choices. *Fix:* keep the Hebrew's "until": "...until I could see what
is good for human beings to do under the heavens through the numbered days of their life." (5:18 in part 05-08 uses
"through the numbered days of his life", which also aligns the phrase across parts.)

**3. Major. plain.txt 4:3: NIV ten-word run, and the term *ma'aseh* dropped.** "...who has not seen the evil that is done
under the sun" is the NIV's wording exactly. The Hebrew is *'et-hamma'aseh hara' 'asher na'asah tachat hashamesh*,
"the evil *work* that is done" (Rahlfs also has *to poiema to poneron*). The NIV leaves out *ma'aseh*, and so does
the Plain English Translation, against the part's own term ("ma'aseh ... what is done / the things that are done", terms.json). *Fix:*
"...who has not seen the evil things that are done under the sun" (matching 1:14 "the things that are done").

**4. Major. plain.txt 4:16: an ESV interpretive choice, and probably the wrong sense.** "There was no end to all the
people, to all whom he led." "All of whom he led" is the ESV's rendering. The Hebrew is
*lekhol 'asher-hayah lifneihem*, "to all who were before them". The usual alternative, and the one the verse's own
pairing suggests, is "all who were before them", that is, earlier generations, set against *ha'acharonim*, "those who
come later" in the next clause. Rahlfs reads *tois pasin hosoi egenonto emprosthen auton*, "all who came before them"
(plural). The note at 4:16 does not mention the question at all. *Fix:* translate "to all who were before them" and
add the "he led them / the generations before" choice to the 4:16 note.

**5. Major. plain.txt 4:10: NIV's "pity" and verse shape.** "If one of them falls, the other can help his friend up. But
pity the one who falls with no second person to help him up." The NIV has "...one can help the other up. But pity
anyone who falls and has no one to help them up." "Pity" is the NIV's word for *ve'illo* (written as one word,
usually read as *'oy lo*, "woe to him"; Rahlfs has *ouai auto*, "woe to him"). The "help ... up. But pity ... who
falls ... to help ... up" frame is the NIV's. There is also no note on the odd form *'illo* (also explained as
Aramaic "if"). *Fix:* "Woe to the one who falls alone, with no second person to lift him up," with literal.js's
"raise" for *heqim*, and add a short word note on *'illo*.

**6. Major. variants.json 2:15: the Greek is misdescribed, and the switchable text doubles a clause.** The entry says the Greek
"has an extra line: 'I spoke too much in my heart, for the fool speaks out of excess'", and gives as the Greek's
`plain`: "Why then have I been so very wise? I spoke too much in my heart, for a fool speaks out of excess." In
Rahlfs the words *tote perisson* render the Hebrew *'az yoter* ("then ... more"), and *elalesa en kardia mou*, "I
spoke in my heart", renders the Hebrew *vedibbarti velibbi*, which the Plain English Translation already has as "And I told myself". The
only Greek plus is *dioti aphron ek perisseumatos lalei*, "because a fool speaks out of excess". So if a reader
switches, the verse says "I spoke ... in my heart" and then "And I told myself". The `why` (yoter "read twice")
rests on the same misreading. *Fix:* anchor the variant on "And I told myself that this too is vapor" (or on the
whole second half), give the Greek reading's `plain` as "And I told myself, because a fool speaks out of excess,
that this too is vapor", and rewrite `p` and `why`: the plus is a short explanatory clause, probably prompted by
*yoter*/*perisson*, with no Hebrew witness.

**7. Major. notes.json 3:21, chapters.json ch. 3 `views.C`: the Masoretic vowels do not make 3:21 "a statement, not a
question".** The note says "The Masoretic vowels make it a statement, not a question", and the chapter page says the
vowels "turn a question into a statement". With the article (*ha'olah*), the verse is still a question ("Who knows
the spirit of human beings, which goes up...?"), as the variant's own second reading shows. What changes is the
inner clause. "Whether it goes up" becomes "which goes up", so the verse seems to take the rising for granted (Ibn
Ezra reads it that way; I checked his comment on 3:21). The variant's `t` "A question, or a statement?" makes the
same mistake. *Fix:* say "the Masoretic vowels turn 'whether it goes up' into 'which goes up', so the verse seems to
assume that the human spirit rises", in the note, the variant title and ch. 3 views.C.

**8. Major. notes.json 1:4: Ibn Ezra misattributed.** The note says "Some take 'the earth' as humanity itself, which
endures while generations change (Ibn Ezra; compare Genesis 11:1)". Ibn Ezra on 1:4 says no such thing. He reads the
poem through the four elements: earth (1:4), the sun as fire (1:5), wind (1:6) and water (1:7). The earth is the
"mother" from which all that is made comes and to which it returns (citing Genesis 3:19). He also suggests that
*dor* may mean "dwelling", as in Psalm 84:10. *Fix:* either cite someone who does hold the "earth = humanity" reading,
or drop it. Ibn Ezra's four-elements reading is a real, sourced and interesting option to give in its place.

**9. Major. notes.json 1:2 (and the hevel core `content/topics/hevel.json`, section "How translations render it"):
Miller and Seow misattributed.** The note lists "'breath' (Seow; Miller)". Douglas Miller's *Symbol and Rhetoric in
Ecclesiastes* (2002) argues for **"vapor"** as one symbol with three referents: insubstantiality, transience and
foulness. That is the very rendering the site adopts, and it is the strongest published support for the brief's
decision, but the note never says so. Seow's commentary keeps "vanity" in its translation and explains *hevel* as
what is "beyond mortal grasp". I could not confirm "breath" as Seow's proposal. *Fix:* "'vapor' as a symbol of what
is insubstantial, fleeting and foul (Miller, whose reading this site follows)"; for Seow, "beyond human grasp", or
drop him. Make the same change in the hevel core, which this writer created.

**10. Major. chapters.json `settings`: several `to` fields name a kind of reader, not a first audience (brief §7).**
2:1–11 "Readers who think wealth, pleasure and great projects can make life secure"; 3:16–22 "Readers who expect the
righteous to be vindicated in this life"; 4:7–12 "The reader who works alone and for no one"; 4:13–16 "Readers who
live under kings and watch their rise and fall"; 1:12–18 "those who think wisdom can master life". These are moral
types. The brief asks for the first hearers as history supports them: students of the wise in a scribal setting, and
the propertied, literate Judeans of Persian or Ptolemaic Yehud (the 1:1–11 and 2:12–26 cards already do this). The
`why` fields then lean on claims the `to` does not support ("Knowing the hearers were people with some means", 4:1–6;
"his hearers took long life and good name as wisdom's reward", 3:16–22). *Fix:* name the historical audience in each
`to`, keep the moral type in `why`, and keep the date views as they are.

### Minor

**11. Minor. plain.txt 2:24: an emendation without a variant entry.** "nothing good for a person *but* to eat"
supplies the comparative that the Hebrew lacks (*'en-tov ba'adam sheyyokhal*). Rahlfs agrees with the Hebrew
(*ouk estin agathon en anthropo ho phagetai*). The note says that "the sense is the same", but it is not the only
sense. Some readers take the Masoretic Text as it stands: enjoyment "is not good (that is, not in the power of) a
person", it comes "from God's hand". progress.md says the Masoretic Text is followed everywhere except 3:21. *Fix:* a
variant (MT as is / with *mi-* as in 3:12 and 3:22, and versions that supply it), or at least correct the note.

**12. Minor. variants: 2:12 is missing the singular verb.** The Hebrew has *'asuhu*, "they have done it"; Rahlfs has
*epoiesen auten*, "he did it" (singular), and the Syriac and Targum are usually reported with a singular too. The
Plain English Translation's "what people have already done" follows the Masoretic Text, which is fine, but readers should see the
difference in a verse the note calls "hard". *Fix:* add a short variant, or a sentence in the 2:12 note.

**13. Minor. notes.json 3:18: the Greek's "to show" is left out.** The note says *lir'ot* could, "with other vowels",
mean "to show", but does not say that this is what Rahlfs reads (*tou deixai*). *Fix:* add "as the Greek reads".

**14. Minor. notes.json 1:10 and ch. 1 `views.C`: *le'olamim* is not late or Aramaic.** The note says "The plural
'ages' is late Hebrew, found also in Aramaic", and views.C counts *le'olamim* among "Aramaic forms". The plural
*'olamim* is classical Hebrew (1 Kings 8:13; Psalm 61:4; Psalm 77:7; Isaiah 26:4; Isaiah 45:17). *Fix:* drop the
claim and use a real late feature as the example (*'inyan*, *shabbach* 4:2, *pardes*, *-she-* for *'asher*).

**15. Minor. notes.json 1:14: "always after 'vapor'" is false.** *Ra'yon ruach* in 1:17 has no "vapor" before it (and
the note itself cites 1:17). *Fix:* "usually after 'vapor'".

**16. Minor. notes.json 2:13: Siegfried garbled.** "Older critics thought pious editors added the cheerful lines
(Siegfried, 1898)." Siegfried divided the additions among several hands. In his scheme the enjoyment passages come
from an Epicurean glossator, the wisdom sayings (as in 2:13–14a, the subject of this note) from a "wise man" (*hakam*)
glossator, and the pious lines from a *hasid*. *Fix:* "Older critics such as Siegfried (1898) assigned the
wisdom sayings, the calls to joy and the pious lines to different later hands."

**17. Minor. notes.json 2:14: "always with the verb 'meet' (qarah)" is false.** 3:19 in this part ("they share one
fate") and 9:2–3 in part 09-12 ("One fate comes to...") have no such verb, and neither does the Hebrew there. *Fix:*
"with the verb 'meet' where the Hebrew has *qarah* (2:14–15)". See the cross-part items.

**18. Minor. notes.json 3:17: "change one vowel to *sam*".** *Sham* to *sam* changes the dot that tells shin from sin,
not a vowel. *Fix:* "read the same letters as *sam*, 'he has set' (a change of the dot over the letter shin)".

**19. Minor. notes.json 4:6: "The first of many 'better... than' sayings".** 4:3 is already one (*vetov mishsheneihem*,
"Better off than both of them"), as the chapter 4 page itself says (views.C lists 4:3, 6, 9, 13). *Fix:* "One of
many".

**20. Minor. notes.json 4:1 and ch. 4 `deep` "No one to comfort them": Lamentations wording.** Both say Lamentations
has "there is no one to comfort her" five times (1:2, 9, 16, 17, 21). Lamentations 1:16 has "a comforter is far from
me" and 1:21 "no one to comfort me". *Fix:* "five times Lamentations says that Jerusalem has no comforter", or quote
only 1:2, 1:9 and 1:17 for "her".

**21. Minor. notes.json 2:8 (medinah): "another sign of the book's late language".** *Medinot* occurs in 1 Kings
20:14–19 ("the young men of the district governors"), a pre-exilic narrative. The word is common in Persian-period
books, but it is not a clear late marker. *Fix:* say it is "common in the Persian-period books" and drop "sign".

**22. Minor. notes.json 3:7: the custom of mending is stated as biblical practice.** "...and sewed it when mourning ended."
No biblical text shows the mending. The custom of basting the torn garment is rabbinic (later law). *Fix:* "and,
in later Jewish custom, mended it after the mourning period".

**23. Minor. chapters.json ch. 2 `deep` "The king's list and the garden of Eden": an overclaim.** "The same verbs and nouns
appear in the same order." They do not. Genesis 2:8–10 runs planted garden, trees, river. Ecclesiastes 2:4–6 runs
houses, vineyards, gardens and parks, fruit trees, pools. *Fix:* "Several of the same verbs and nouns appear
(plant, garden, every tree, water)".

**24. Minor. chapters.json ch. 1 `deep` "Which witnesses this site checked": the extent of 4QQoh-b.** The page says the
scroll "preserves parts of 1:7–15". The usual listing (DJD 16 and the catalogues) is 1:10–14 (perhaps reaching 1:15).
The writer's scratch log is gone, so I could not see what the transcription showed. *Fix:* rerun `tools/dss.py Ecc 1`,
give only the verses where letters are visible (not restored), and recheck the 1:14 *'asher na'asu* claim against a
non-restored reading.

**25. Minor. plain.txt 2:7 against 2:9: the same Hebrew rendered two ways, one of them in NIV form.** *Mikkol shehayu
lefanai birushalaim* is "a larger number than anyone in Jerusalem before me had" in 2:7 (the NIV's "than anyone in
Jerusalem before me") and "beyond all who were before me in Jerusalem" in 2:9. The brief asks that repeated phrases
match. *Fix:* use the 2:9 form in both: "...more than all who were before me in Jerusalem."

**26. Minor. plain.txt 2:26: "good in his eyes" is ambiguous.** In English, "the person who is good in his eyes" reads
as the person's own eyes. The Hebrew *lefanav* means "before him", God, as the end of the verse makes clear ("good
in God's eyes"). *Fix:* "To the person who pleases him, God gives..." or "who is good in God's sight", with the same
words at both ends of the verse.

**27. Minor. plain.txt: smaller NIV/ESV echoes the Hebrew does not force (rebuild where cheap).**
- 1:17 "I learned that this too is chasing the wind": the NIV's "I learned that this, too, is a chasing after the
  wind". *Yada'ti* can be "I came to know" or "I found".
- 2:9 "Through it all my wisdom stood by me": "Through it all" stands in for the NIV's "In all this". The Hebrew has
  only *'af*, "also". Try "And my wisdom stayed with me too."
- 3:1 "Everything has its season, / and every matter under the heavens has its time": the ESV's word pair ("season",
  "matter"). The structure differs, so this is borderline.
- 3:11 "yet no human can find out the work God has done, from the beginning to the end": the ESV's "yet ... find out
  ... from the beginning to the end". *Mibbeli 'asher lo'* is "without which ... not" / "so that ... not".
- 4:9 "get a good return for their toil": the NIV's "a good return for their" (*sakhar tov* is "good wages").
- 4:13 "no longer knows how to take a warning": the NIV's "no longer knows how to heed a warning". Also 24 words in
  one sentence; split it.
- 4:14 "though in his kingdom he had been born poor": the ESV's clause and its pluperfect. Mostly forced by the Hebrew
  word order, but "even though he was born poor in his own kingdom" or similar would break the run.

**28. Minor. glosses.json.** 4:12's gloss "a rope of three strands is hard to break" uses the NIV's "of three strands".
Change it to, for example, "three cords braided together hold". 3:1's gloss "there's a right time for everything"
takes only reading (1) of the 3:1 views note ("act at the right time") as the gloss. Try "everything comes in its
set season".

**29. Minor. Cross-references.**
- James 4:14 (life as a mist, *atmis*) belongs in the 1:2 hevel note's `r`. The ecclesiastes core already cites it.
- 1 Timothy 6:17 ("God ... richly gives us everything to enjoy") belongs at 2:24 or 3:13.
- Matthew 6:34 belongs at 2:23 (the heart that never rests at night).
- Genesis 6:17 and Psalm 146:4 belong at 3:19–21 (ruach of all flesh; "his breath goes out, he returns to his
  earth").
- The 1:9 note could cite Ecclesiastes 3:15 in the text as well as in `r`.

**30. Minor. Topic contributions missing.**
- `resurrection` (aka "life after death"): 3:21 and the traditions card belong there as well as on `sheol`.
- `feasts`: the reading at Sukkot, mentioned in three settings cards.
- `burial`: "dust to dust" in burial services, 3:20.
- `poverty`: the poor wise youth, 4:13–14.

**31. Minor. Style.**
- 1:2 note: "the vaporest vapor" is not English. Use "the thinnest of vapors" or "utter vapor" (the gloss already
  says "the thinnest of mists").
- 1:16 runs to two long sentences inside one quotation; consider splitting the second.

**32. Minor. Quotes of other parts' verses that do not match their Plain English Translation (the build does not catch these, because the
words are in quotation marks without a parenthesized reference).** See the cross-part items for the full list. Fix
them here once the lead confirms the other parts' wording.

## Cross-part items (for the lead)

- **Quotes of 09-12 and 05-08 in this part:**
  - "the spirit returns to God who gave it" (3:21 note, ch. 3 deep, traditions card Catholic answer, 3:19 note in
    paraphrase). 12:7 Plain English Translation: "the spirit goes back to God, who gave it".
  - "the dead 'know nothing'" (ch. 3 deep; traditions card, Jehovah's Witnesses answer, "9:5 shows that 'the dead
    know nothing'"). 9:5 Plain English Translation: "the dead do not know a thing". The JW answer may quote their own Bible on purpose;
    if so, name it ("NWT").
  - "a living dog is better off than a dead lion" (4:2 note; ch. 4 deep). 9:4 Plain English Translation: "It is better to be a living
    dog than a dead lion". This is a paraphrase without quotes, but better aligned.
  - "compare 7:14, 'in a day of good, be in good'" (3:12 note). 7:14 Plain English Translation: "On a good day, enjoy the good". Either
    quote the Plain English Translation or mark this as "literally".
- **"Fate" and its verb.** 2:14–15 "one fate meets"; 3:19 "share one fate"; 9:2–3 "One fate comes to". All are
  faithful to their Hebrew, but the 2:14 note promises "always with the verb 'meet'". Decide whether 9:2–3 should be
  "One fate meets" (the Hebrew has no verb), or fix the note (finding 17).
- **The joy refrain.** 2:24 "There is nothing good for a person but to eat and drink and let himself see good in his
  toil"; 3:12 "nothing good for them except"; 3:13 "eats and drinks and sees good in all his toil, it is God's gift";
  5:18 "to eat and drink and see good in all his toil that he toils at"; 5:19 "this is God's gift"; 8:15 "has nothing
  good under the sun except to eat and drink and be glad". These are consistent where the Hebrew is the same.
  Questions for the lead:
  - "but" (2:24) or "except" (3:12; 8:15)? The Hebrew differs (2:24 has neither; 3:12 *ki 'im*; 8:15 *ki 'im*), so
    "except" in 3:12 and 8:15 is right. Settle whether 2:24 keeps "but" (finding 11).
  - The person-word: "a person" (2:24) or "a human being" (8:15). Both are *ha'adam*. Choose one for the refrain.
- **"The numbered days of their life."** 2:3 "the numbered days of their life"; 5:18 "through the numbered days of his
  life"; 6:12 "through the numbered days of his vapor of a life". If 2:3 is rebuilt (finding 2), use "through" to
  match.
- **hevel / "vapor".** Every hevel in 1–4 (20 places) is "vapor", and 12:8 matches 1:2 except for the doubled phrase,
  as the Hebrew requires. No cross-part change is needed. The hevel core's attribution needs correcting (finding 9).
- ***'inyan ra'* "evil task".** 1:13 and 4:8 "an evil task"; 5:14 (05-08) "lost in an evil task". Consistent.
- **Same-phrase checks that passed:** 1:15 against 7:13 ("set straight ... bent"); 3:11 against 8:17 ("find out the
  work"); 3:20 against 6:6 ("go to one place"); 1:18 and 2:23 against 11:10 ("frustration").
- **The traditions card on 3:19–21 and 12:7 (top `sheol`)** and part 09-12's card on 9:5–6 (top `sheol`) split
  conscious survival and prayer for the dead. That is reasonable, but the 3:19–21 card's question names 12:7, which
  sits in another part. Make sure 09-12's 12:7 note points back to this card rather than repeating it.

## Fixes applied

Fixer: separate review-fixer agent, 2026-10-25. Lead decisions in `.scratch/Ecc-review-notes.md` applied (1, 3, 4, 5, 6, 8, 12, 13, 14, 15). Every rebuilt verse started again from `literal.js` with a fresh drift audit (in the head only). Greek checked in Rahlfs (CCAT text) and Swete; 4QQoh-b rechecked with `tools/dss.py Ecc 1`.

1. Accepted. 2:20 rebuilt: "So I turned around and made my heart give up hope over all the toil I had toiled at under the sun." Note re-anchored on "made my heart give up hope".
2. Accepted. 2:3 rebuilt and split, keeping the Hebrew's "until" and the lead's "through the numbered days of their life" (decision 6): "...I did this until I could see which thing is good for human beings to do under the heavens through the numbered days of their life."
3. Accepted. 4:3 "the evil things that are done under the sun" (ma'aseh restored; Rahlfs to poiema to poneron confirmed).
4. Accepted. 4:16 "to all who were before them" (Rahlfs plural autōn confirmed; KJV reads the same way). The 4:16 note now sets out "all whom he led" against "all who were before them".
5. Accepted. 4:10 rebuilt with "raise" and "woe": "For if they fall, one of them raises his companion. But woe to the one who falls on his own, with no second person to raise him up." (The reviewer's "woe to the one who falls alone" was not used, because it lands on the ESV/KJV shape.) New word note on ve'illo ('i lo "woe to him", compare 10:16; Rahlfs ouai autō; 'illu "if" as the minority view).
6. Accepted. Verified in Rahlfs and Swete: the only Greek plus is "because a fool speaks out of excess". Variant re-anchored on "And I told myself that this too is vapor", Greek plain "And I told myself, because a fool speaks out of excess, that this too is vapor"; `why` rewritten; `b` explains the Greek's different division of 'az yoter. Vaticanus's placement of the clause after "this too is vanity" confirmed in Swete.
7. Accepted. 3:21 note, variant title/p/why and ch. 3 views.C and the "Death, breath and the spirit" deep section now say the Masoretic vowels keep the question but turn "whether it goes up" into "which goes up", so the verse seems to assume the rising (Ibn Ezra).
8. Accepted. "Earth = humanity (Ibn Ezra)" dropped; Ibn Ezra's four-elements reading given instead (earth, the sun's fire, wind as air, water; the earth as the mother to which all returns, compare Genesis 3:19).
9. Accepted. 1:2 note and the hevel core: Seow "beyond human grasp" (keeps "vanity"); Miller for "vapor" as one symbol of the insubstantial, fleeting and foul, named as the reading this site follows.
10. Accepted. `to` fields of 1:12–18, 2:1–11, 3:16–22, 4:1–6, 4:7–12 and 4:13–16 now name the historical first readers (students of the wise; educated, propertied Judeans of Persian or early Greek Judea); the moral types moved into `why`, and 4:1–6's "people with some means" softened to "If, as most scholars think".
11. Partly accepted (lead decision 4: 2:24 keeps "but"). No variant, since no witness differs (Rahlfs agrees with the Hebrew); the 2:24 note now says the Greek reads the same, that the Plain English Translation's "but" reads an unstated comparison without emending, and gives the other reading (enjoyment is not in a person's power; it comes from God's hand).
12. Accepted as a sentence in the 2:12 note (Rahlfs epoiesen, singular, confirmed). Syriac and Targum not added: not checked.
13. Accepted. 3:18 note: "as the Greek reads ('to show', tou deixai)", confirmed in Rahlfs.
14. Accepted. 1:10 note: the plural is found in older Hebrew too (1 Kings 8:13; Isaiah 26:4). Ch. 1 views.C now uses 'inyan as the example. Same fix made in book.json (book review 16).
15. Accepted ("usually after 'vapor'").
16. Accepted (Siegfried's several later hands).
17. Accepted with lead decision 3: 2:14 Plain English Translation "one fate meets them all"; the note says "meet" is used where the Hebrew has qarah (2:14–15). The topics.json sheol quote of 2:14 updated.
18. Accepted (sam: a change of the dot over the shin).
19. Accepted ("One of many"; 4:3 added to the list).
20. Accepted in the 4:1 note and the ch. 4 deep section: "Five times Lamentations says that ruined Jerusalem has no one to comfort her".
21. Accepted (old word, 1 Kings 20:14–19, common in the Persian-period books).
22. Accepted (mending marked as later Jewish custom, in body and preview).
23. Accepted ("Several of the same verbs and nouns appear ... though not in the same order").
24. Rechecked with `tools/dss.py Ecc 1` (Abegg, Bowley and Cook transcription). Neither listing was quite right: 1:7 has only restored letters, and visible letters run from 1:8 to 1:16, best preserved in 1:10–14. The ch. 1 witnesses section now says so. The 1:14 'asher na'asu reading is visible (not restored) and stands. New: 4QQoh-b visibly reads בירושלם "in Jerusalem" at 1:16 with the Greek; added to the 1:16 variant (witness, p, why) and to the witnesses section. The Plain English Translation still follows the Leningrad Codex there (harder reading).
25. Accepted. 2:7 now "beyond all who were before me in Jerusalem", the 2:9 form.
26. Accepted. 2:26 rebuilt: "good in God's sight" at both ends. The fresh audit also caught an NIV run ("God gives wisdom, knowledge and ... but to the sinner he gives the task of gathering"); the second sentence now reads "To the sinner he gives a task: to gather and pile up, so as to hand it to the one who is good in God's sight." 2:26 note quote updated.
27. Partly accepted. 1:17 "I came to know that this too is chasing the wind"; 2:9 "Even so, my wisdom stood by me" (avoids the NIV's "my wisdom stayed with me"); 4:9 "since their toil earns them a good wage"; 4:13 split: "...than a king who is old and a fool. That king no longer knows how to be warned."; 4:14 "even though he was born poor in his kingdom". Declined: 3:1 (terms.json fixes zeman "season", the line's structure differs from the ESV, and the reviewer called it borderline); 3:11 (the shared words "find out the work God has done" and "from the beginning to the end" are forced by the Hebrew, the line is aligned with 8:17, and part 05-08's 8:17 note quotes 3:11 exactly).
28. Accepted (4:12 gloss "three cords braided together hold"; 3:1 gloss "everything comes in its set season"; 4:13 gloss re-anchored).
29. Accepted. James 4:14 (1:2 note r), 1 Timothy 6:17 (2:24 note r), Matthew 6:34 (ch. 2 echoes; 2:23 has no note), Genesis 6:17 and Psalm 146:4 (3:19 note r); 1:9 note now cites 3:15 in the text.
30. Accepted. New contributions to resurrection (3:18–22), feast-of-booths (the reading at Sukkot; chosen over the general `feasts`), burial (3:20) and poverty (4:13–14). 21 contributions now.
31. Partly accepted. "the vaporest vapor" became "the thinnest of vapors" or "utter vapor". 1:16 left as is: its sentences are 6, 18 and 11 words long.
32. Accepted with lead decision 1. 12:7 is quoted as "the spirit goes back to God, who gave it" (3:19 and 3:21 notes, ch. 3 deep, Catholic answer). 9:5 is quoted as "the dead do not know a thing" in ch. 3 deep, and the Jehovah's Witnesses answer quotes their own Bible by name, "'the dead know nothing at all' (New World Translation)". 9:4 is quoted as "It is better to be a living dog than a dead lion" (4:2 note, ch. 4 deep), and 7:14 is marked "literally" in the 3:12 note.
Lead decisions also applied: (8) 3:15 "Whatever has been already is, and what is to be has already been" (the syntax allows it; the 1:9 note quotes it). (12) The 3:14 note is tagged fear-of-the-lord. (13) The 2:25 note moved off the variant's anchor onto "who can enjoy" (chush), and its "apart from me / more than I" point went into the variant's `b`. (14) Scanned: no bare reference inside another book's brackets in this part. (15) In the ch. 3 card, the Adventist and Jehovah's Witness answers now cite sda-beliefs and jw-insight, the keys 09-12's 9:5–6 card uses; Westminster 32.1 was already named.
Plain English Translation verses changed (14): 1:17, 2:3, 2:7, 2:9, 2:14, 2:20, 2:26, 3:15, 4:3, 4:9, 4:10, 4:13, 4:14, 4:16. No other book quotes any of the changed wording (searched all content/).
