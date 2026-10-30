# Hostile review: Job 1–7 (parts/01-07) and book.json

## Verdict

This part is strong. The translation is built from the Hebrew. It is honest about the hard places (3:5, 3:8, 4:17, 4:21, 5:3, 5:5, 5:7, 6:6, 6:10, 6:14, 6:18, 7:20), and it uses the shared terms correctly ("the Accuser", "the Almighty", "wholehearted"/"integrity", "loyal love", "Sheol"). The poetry is set out well and the speaker headings are clean. I found no close copying of the NIV or ESV beyond phrases that cannot be avoided ("Curse God, and die"; "Skin for skin"). Most citations I checked hold up: Bava Batra 14b–16b, Moed Katan 28b, Shabbat 115a, Berakhot 5a, Mishnah Berakhot 9, the Greek readings at 1:5, 1:11, 1:15, 1:17, 1:21, 2:8, 2:9, 2:10, 2:11, 3:5, 3:8, 5:3, 5:5, 5:7, 5:13, 6:6, 6:21 and 7:20, Enuma Elish IV, Westminster Confession 5.4, and Catechism 309–314 and 391–395.

The faults that remain are these:
- one misattributed Mishnah source, repeated in two places;
- one false linguistic link (1:19 and 38:1);
- an Old Greek and Qumran claim at 2:9 that misleads;
- a witness the brief requires that is never mentioned (4QtgJob, which covers 3:5–9 and 4:16–5:4);
- a book.json traditions card that does not show a real conflict;
- doubtful scholar labels in the audience views;
- the `suffering` and `jobs-friends` topics missing from book.json, and no contributions to them;
- a scatter of small reference errors, rendering mismatches with other parts, and wording mismatches in quoted text.

The build passes: 0 errors, and 4 warnings (no `top` on any traditions card).

## Findings

### Major

1. **major. chapters.json ch1 views.J, and notes.json 1:9 (the "For no reason" note): the wrong verse for Mishnah Sotah 5:5.** In Mishnah Sotah 5:5, R. Joshua b. Hyrcanus proves that Job served God "only out of love" from **13:15** ("though he slay me, I will hope in him", reading *lo* as "in him"). He also cites 27:5. He does not use 1:9 or *chinnam*. Ch1 J says "The Mishnah takes 'for no reason' as proof…". That is false. The 1:9 note implies the same thing. **Fix:** "The Mishnah (Sotah 5:5) concludes from 13:15 and 27:5 that Job served God out of love; the Accuser's 'for no reason' poses the same question." Coordinate with the 08-14 writer, since 13:15 there follows the Ketiv ("I have no hope"). Say in a note that the Mishnah depends on the Qere.

2. **major. notes.json 1:19 "The desert wind": a false word link.** The note says "the same word for wind or storm returns at the end in another form… (38:1, *se'arah*)". In 1:19 the word is *ruach*. In 38:1 it is *se'arah*, a different word from a different root. **Fix:** "A different word, *se'arah*, 'windstorm,' is used when the LORD answers Job (38:1); readers have still connected the two storms." Keep the theological point, but present it as a reading, not as a link between words.

3. **major. variants.json 2:9 `why`: a misleading witness claim.** It says "no Hebrew manuscript or the Qumran fragments show it." No Qumran manuscript of Job preserves 2:9. The Hebrew fragments 2Q15 and 4Q99–101 cover later chapters. 4QtgJob covers only 3:5–9 and 4:16–5:4. 11QtgJob begins in chapter 17. Saying the scrolls "do not show" the speech suggests they were checked and lack it. **Fix:** "No Hebrew manuscript has it, and no Qumran manuscript preserves this verse."

4. **major. variants and notes on 3:5–9 and 4:16–5:4: 4QtgJob is never mentioned.** The brief requires the Qumran witnesses. book.json itself names 4QtgJob (4Q157, edited by Milik in DJD 6), and it is the only Qumran witness for any verse in this part. It covers parts of 3:5–9 and 4:16–5:4, which includes the cruxes at 3:5, 3:8 and 5:3. No note or variant says whether it was checked or what it reads. **Fix:** Add one line, in the 3:8 variant `b` and the 5:3 variant `w`/`b`: what the fragment preserves (it is very broken), whether it supports the MT, and "not checked by the writer" if that is the case. Add the DJD 6 source key.

5. **major. book.json `traditions` ("How do the churches use Job in worship?"): not a conflict.** STYLE says to use a traditions card "only where the answers really conflict". This card describes four liturgical habits that sit side by side; nothing in it is disputed. It also has no `top`, and three of its four views have no source. The facts are mostly right: the old Office of the Dead had nine lessons from Job; the Catholic Lectionary reads Job 7:1–4, 6–7 in Year B; the Orthodox read Job at Holy Week Vespers and keep his feast on May 6; the Revised Common Lectionary reads Proper 22–25 in Year B. One fact is off: the 1662 burial service *begins* with John 11:25, then Job 19:25–27, then 1 Timothy 6:7 with Job 1:21. **Fix:** Move this material into a `sections` entry ("Job in worship"). Replace the card with a real book-level conflict, such as "Is Job history or parable?" or "Does 19:25 foresee Christ and the resurrection?". The second may belong to 15-21, so coordinate. Give each view a source and add `top`.

6. **major. book.json `audience.views` and `facts`: doubtful scholar labels.** (a) "Exiles and their children… (so, with differences, Pope, Habel and Newsom)". Pope's Anchor Bible commentary favors a **seventh-century**, pre-exilic date for the dialogue, so he is the wrong name for a "response to 586" view. (b) "Hartley leans to an early date", placed in the Moses-or-Solomon view. As I recall, Hartley (NICOT, 1988) favors the seventh century as well, not the patriarchal or Solomonic age. Please verify this in his introduction. (c) "Aristeas… identified Job with Jobab in the 100s BC": Aristeas the Exegete is known only through Alexander Polyhistor, and is dated broadly to the 2nd–1st century BC. **Fix:** Re-source each label from the commentaries' introductions. Drop Pope from the exile view, or give his actual date. Move Hartley to a "pre-exilic (seventh-century)" view, or say what he holds. Write "by the first century BC" for Aristeas.

7. **major. book.json `topics` and the part topics.json: the `suffering` and `jobs-friends` topics are missing.** Both core files now exist in content/topics/ (`suffering`, "Why God Allows Suffering", with aka theodicy; `jobs-friends`). Neither is in book.json `topics` or in any chapter's `topics`. Chapters 1–2 (the prologue's hidden cause), 2:11–13 (the friends arrive) and 4–5 (Eliphaz) are where both subjects begin. `behemoth`, `dreams`, `sevens`, `casting-lots` and `elihu` are also missing from book.json `topics`. **Fix:** Add `suffering` and `jobs-friends` (plus the others) to book.json `topics`. Add `suffering` to ch1–2 and `jobs-friends` to ch2 and ch4–5. Write a `jobs-friends` section on 2:11–13 and Eliphaz's first speech, and a `suffering` section on the prologue's answer.

8. **major. plain.txt 2:10 against notes.json 2:10 ("Not 'foolish' but godless"): the Plain English Translation contradicts its own note.** The note (kind `mis`) argues that *naval* means morally reckless, "not stupid": "Job does not call his wife a fool; he says she is talking like the godless." Yet the Plain English Translation says "a senseless woman", which in English means stupid. The gloss ("someone who has stopped caring what God thinks") follows the note, not the Plain English Translation. **Fix:** Render it "the way a godless woman talks", or "a woman with no regard for God", or change the note.

### Minor

9. **minor. notes.json 5:19 `r`: the reference points to the wrong verse.** "Amos 1:3; 1:11". The bare "1:11" reads as Job 1:11. **Fix:** "Amos 1:3–2:6".

10. **minor. notes.json 4:13: a mismatch with another part.** The note says "The same phrase 'when deep sleep falls on mortals' returns in Elihu's speech (33:15)". The Hebrew is identical (בִּנְפֹל תַּרְדֵּמָה עַל־אֲנָשִׁים), but 32-37 renders 33:15 "when heavy sleep falls on human beings". **Fix:** Agree with the 32-37 writer on one rendering, so the echo shows in English. Until then, do not quote it as "the same phrase".

11. **minor. Quoted wording from other parts does not match.**
    - The 6:4 note quotes 16:13 as "his archers surround me", but 15-21 has "His bowmen ring me in."
    - The 1:9 note says God "crushes" Job "for no reason" (9:17), but 08-14 has "bruises me… for no reason".
    - The 1:10 note says God "fenced in" the sea at 38:8, but 38-42 has "Who closed doors to hold back the sea".
    - The ch7 spec says Job will say God "hates" him (16:9; 30:21), but those parts have "holds a grudge" and "nurse a grudge".

    **Fix:** Quote the other parts' Plain English Translation exactly, or paraphrase without quotation marks.

12. **minor. Cross-part term: *tsava*.** 7:1 has "a soldier's tour of duty". 14:14 (08-14) has "my hard duty". The 7:1 note says "He uses the word again in 14:14". **Fix:** Agree on one English word (for example "hard duty" in both, or "tour of duty" in both).

13. **minor. notes.json 1:15 "Sabeans and Chaldeans".** (a) It calls the *Kaldu* "the Aramean tribes of south Mesopotamia", but Assyrian sources distinguish Chaldean tribes from Aramean ones. Write "the Chaldean tribes of south Mesopotamia". (b) "all four directions" is not accurate: Sheba is to the south, the Chaldeans to the east, the fire from the sky, and the wind from the eastern desert. **Fix:** "from south, east and above".

14. **minor. notes.json 3:4 and the `creation` topic section: overstated.** "Michael Fishbane showed that Job 3:3–13 follows the order of the seven days of Genesis 1 in reverse." Fishbane (VT 21, 1971) *argued* that Job 3 is a counter-cosmic incantation that undoes the creation pattern day by day. "Showed" overstates it, and "in reverse" can be misread as "in reverse order". **Fix:** "Michael Fishbane argued that Job 3:3–13 takes up the creation days of Genesis 1 one by one to undo them."

15. **minor. notes.json 7:20 "Watcher or keeper?"** "Job 10:12 uses the related *shamar*". *Shamar* is a synonym of *natsar*, not a related word. **Fix:** "the synonym *shamar*".

16. **minor. notes.json 7:3: the transliteration does not match.** The `orig` field has "hochalti" and the body has "Hanchalti". The Hebrew is הָנְחַלְתִּי, *honchalti*. **Fix:** Use one correct form.

17. **minor. notes.json 6:29: the note sits on the wrong word.** The Ketiv/Qere *shuvi*/*shuvu* is on the **second** verb (וְשֻׁבִי, "Think again:"). The note is anchored on the first ("Think again, please, and do no injustice"), and its wording implies the first. **Fix:** Say "the second 'think again'".

18. **minor. variants.json: a Greek plus is missing at 1:5.** The Old Greek adds that Job offered "one calf for sin for their souls" (μόσχον ἕνα περὶ ἁμαρτίας περὶ τῶν ψυχῶν αὐτῶν). It matters for the note on Job as family priest. **Fix:** Add a short variant, or a sentence in the 1:5 history note.

19. **minor. Unresolved Hebrew difficulties with no note.** The brief says not to hide them.
    - **7:15** "these bones": the Hebrew is "my bones". Many emend to *atsvotai*, "my pains". "These" is the Plain English Translation's own addition.
    - **3:22** "glad to the point of shouting": *gil* or *gal* ("rejoice over the burial mound").
    - **6:7** "like disease in my bread": the meaning of *kidvei* is obscure.
    - **7:4** *middad 'erev*.
    - **5:24** "count your flock": the Hebrew is "visit your homestead/pasture" (*naveh*), so "flock" is interpretive.

    **Fix:** Add short `deb` notes, or fold them into existing ones. Drop "these" in 7:15.

20. **minor. plain.txt 6:27: a word choice.** "throw dice" turns casting lots (*tappilu*, as the note says) into dice, which is the wrong picture. **Fix:** "You would cast lots over a fatherless child".

21. **minor. plain.txt 1:10: a word choice.** In English "fenced him in" means confinement, but here it means protection. The note admits this, and the gloss has to undo it. The echo with 3:23 survives with "put a fence around him". **Fix:** Consider "put a fence around him… on every side" in 1:10, and keep "fenced in" for 3:23.

22. **minor. chapters.json ch1 setting 1:21: the wrong hearer.** `to`: "God, in the hearing of his household". Job speaks *about* the LORD in the third person. His household is dead or scattered, and only messengers are present. **Fix:** `to`: "spoken before God, with the surviving messengers present".

23. **minor. chapters.json ch3 views.W: no source for a claim.** "Mesopotamian texts also curse the day of birth". **Fix:** Cite a text, or drop the clause.

24. **minor. chapters.json ch3 views.J: a Rashi citation to check.** "Rashi reads the 'day-cursers' as those who curse their own fate". As I recall, Rashi glosses *livyatan* as "their mourning". Please check Rashi on 3:8 directly. Also check Rashi on 2:4 ("skin for skin"), which the 2:4 note cites.

25. **minor. chapters.json ch1 traditions ("Who is the Accuser?"): little real conflict, and unsourced views.** Every tradition listed answers "the devil". The only real difference is the evangelical scholars' "heavenly prosecutor" view, and the Reformed point about permission against direction belongs to ch2's card. The Orthodox and Jehovah's Witnesses views have no sources, and Walton is named without a key. **Fix:** Reframe the question as "Is the satan of Job the devil?" and set traditional church teaching against the "prosecutor" reading. Or merge the card with ch2's. Add sources (the Watchtower publication; Walton's NIVAC Job, if it is in sources). Add `top` to all four cards (`satan`, `suffering`/`providence`, `retribution`).

26. **minor. notes.json kinds.** "echo nu" (1:11, 3:4, 3:18, 4:13, 4:16) and "symbol nu" (3:9): STYLE gives `kind` only to `word` notes. This is harmless, but should be cleaned up.

27. **minor. variants.json: the divine name is inconsistent in the Greek readings.** The 1:21 Greek reading renders κύριος as "the LORD", but the 2:9 Greek reading has "the Lord". **Fix:** Use one convention, preferably "the Lord" for Greek κύριος.

28. **minor. notes.json 2:11 nud: an interpretive claim stated as fact.** "The friends' first act is the one the book praises most". The book never praises it explicitly. **Fix:** "the act readers praise most".

29. **minor. Small `r` gaps.** Each of these is cited in a body but missing from its `r` list:
    - Genesis 26:24 (1:8)
    - Zechariah 6:5 (1:6)
    - Genesis 34:7 (2:10)
    - 19:20 and 30:17 (2:7)
    - Sirach 22:12 (2:13)
    - 13:15 (1:9, after fix 1)

## Checked and sound

The things listed under Verdict as holding up, plus these:
- 1:6 and 2:1 "angels of God"
- the tiqqun at 7:20
- the Ketiv/Qere at 5:18, 6:2, 6:21 and 7:5
- the counts of *Eloah*, *Shaddai* and *tsalmavet*
- the EA 256 *Ayyab* reference
- Bava Batra 16a on *Iyyov*/*oyev*, "Satan and Peninnah", Rava on "with his lips", and the denial of resurrection at 7:9
- Sotah 11a, on Pharaoh's advisers
- the Dinah identification at Bava Batra 15b
- the friends counted among the prophets of the nations, Bava Batra 15b
- Maimonides, Guide 3.22–23
- Ludlul and the Theodicy
- Anat muzzling Tunnan
- Nabonidus at Tayma
- the order of Job among the Writings (Leningrad/Aleppo, Vaticanus)
- *sifre emet*
- Job studied on the Ninth of Av
- Shabbat 115a
- the Sahidic Coptic version and the asterisked lines

Settings: every speech in 1–7 has a card, including both heavenly scenes and the night voice. Each card has a hedged `readers` field.

## Fixes applied

### Fixes applied (writer, 2026-10-23)

All 29 findings accepted. None rejected. Two were accepted with limits, noted at 6 and 10.

1. Mishnah Sotah 5:5: chapter 1 `views.J` and the 1:9 note now say the Mishnah reasons from 13:15 and 27:5 (checked on Sefaria). The 1:9 note says the Mishnah reads 13:15 with the Qere "in him", while this site's 13:15 follows the Ketiv. 13:15 and 27:5 are added to `r`. The 1:9 note's `top` is now `suffering`.
2. 1:19: the note now says *se'arah* (38:1) is a different word, and that the link between the two storms is a reading.
3. Variant 2:9 `why`: now says "no Hebrew manuscript has it, and no Qumran manuscript preserves this verse."
4. 4QtgJob (4Q157): added to the `b` of the 3:8 and 5:3 variants, saying it was not checked by the writer and is too broken to be used. Added the key `djd6-4qtgjob` (Milik, DJD 6).
5. Book card on worship: the material moved to a new section, "Job in worship". The 1662 burial order is corrected (John 11:25, then Job 19:25–27, then 1 Timothy 6:7 with Job 1:21). The card is replaced by "Is the book of Job history?", with Catholic, Orthodox, Lutheran, Evangelical and Jehovah's Witnesses views. It has sources and `top`: `job`. I set `job` because the new question is not about worship.
6. Audience views: Pope is dropped from the exile view, which now cites Newsom's Persian-period setting. A new view, "Judah before the exile", names Pope and Hartley for a seventh-century date. This follows the reviewer's recollection; I have not checked their introductions myself. Hartley is removed from the traditional view. Aristeas now reads "by the first century BC", known through Alexander Polyhistor in Eusebius.
7. Topics:
   - book.json `topics` adds suffering, jobs-friends, resurrection, behemoth, elihu, dreams, sevens, casting-lots, worship and communion-of-saints.
   - Chapters 1–2 and 4–5 list `suffering`, and chapters 2 and 4–5 list `jobs-friends`.
   - New contributions: a `suffering` section on the prologue's answer, and a `jobs-friends` section on 2:11–5:27.
8. 2:10: the Plain English Translation now has "the way a godless woman talks". The note, gloss and chapter summary match it.
9. 5:19 `r`: now "Amos 1:3–2:6".
10. 4:13: no longer quotes English; it says "the same Hebrew phrase" returns in 33:15. Agreeing one rendering with the 32-37 writer is still open.
11. Quotations now use the other parts' Plain English Translation exactly: 16:13 "His bowmen ring me in"; 9:17 "piles up my wounds for no reason"; 16:9 "he holds a grudge against me" and 30:21 "you nurse a grudge against me" in the chapter 7 spec. 38:8 is paraphrased without quotation marks.
12. *tsava*: 7:1 now reads "a term of hard duty", which matches 14:14's "hard duty". The note, gloss and summary are updated.
13. 1:15 note: "Chaldean tribes" replaces "Aramean tribes", and "from south, east and above" replaces "all four directions".
14. Fishbane: the 3:4 note and the `creation` section now say he "argued" that the poem "takes up the creation days of Genesis 1 one by one to undo them".
15. 7:20 note: *shamar* is now called a synonym.
16. 7:3 note: the transliteration is *honchalti* in both the `orig` field and the body.
17. 6:29 note: now names the second "think again" as the Ketiv/Qere place.
18. 1:5: the Greek plus "one calf for sin for their souls" is added to the family-priest note (checked on blueletterbible.org).
19. Hard places now have notes or fixes:
    - New `deb` notes at 3:22 (*gil*/*gal*), 6:7 (*kidvei*), 7:4 (*middad*) and 7:15 ("my bones" or "my pains").
    - 7:15 now says "my bones" instead of "these bones".
    - 5:24 now reads "look over your homestead", following the Hebrew *naveh*, so no extra note is needed.
20. 6:27: now reads "You would cast lots over a fatherless child".
21. 1:10: now reads "put a fence around him". 3:23 keeps "fenced in", and the notes, gloss and chapter 1 deep section are updated.
22. Settings card at 1:21: `to` is now "Spoken before God, with the surviving messengers present".
23. Chapter 3 W lens: the clause without a source is removed.
24. Rashi, checked on Sefaria: on 3:8 Rashi explains the day-cursers as people who curse their own days in their anguish, and the chapter 3 J lens now says so. The 2:4 note now gives Rashi's actual explanation (one limb given to shield another) and drops the unchecked Targum claim.
25. Chapter 1 card is reframed as "Is the satan of Job the devil?":
    - Catholic and Reformed answer yes.
    - The Evangelical view is divided: Walton's prosecutor reading against identifying him with Satan.
    - Jehovah's Witnesses answer yes.
    - Every view has a source; new keys are walton-job and jw-insight.
    - The Orthodox view is dropped for lack of a source.
    - `top`: `satan` is kept.
26. `kind` is removed from notes that are not `word` notes.
27. The Greek reading in the 1:21 variant now renders κύριος as "the Lord".
28. 2:11 note: now reads "the one readers have praised most".
29. The `r` gaps are filled: Genesis 26:24 (1:8), Zechariah 6:5 (1:6), Genesis 34:7 (2:10), 19:20 and 30:17 (2:7), Sirach 22:12 (2:13) and 13:15 (1:9).

New shared source keys: djd6-4qtgjob, walton-job, jw-insight, jw-all-scripture and divino-afflante.

The six Plain English Translation verses that changed (1:10, 2:10, 5:24, 6:27, 7:1, 7:15) were re-audited for drift:
- five are clean;
- 6:27 "cast lots over" shares three words with one version, and the Hebrew *tappilu* forces them, so it was kept.

Result: `--check Job/01-07` shows 0 errors and 0 warnings.
