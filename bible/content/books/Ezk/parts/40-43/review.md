# Hostile review: Ezekiel 40-43 (part 40-43)

Verdict. The Plain English Translation is a sound, mostly faithful rendering of very hard Hebrew, and `--check` is at 0 errors and 0 warnings. The measurements and metric glosses are right against the Hebrew (I recomputed each at 52 cm), the Talmud, Mishnah, Mesha and Gregory citations hold up, and 4Q73 at 41:3-6 is confirmed by dss.py. The serious problems are in the apparatus. The variants misreport the Greek at 42:16-19, and they miss real Greek differences at 40:44, 40:48, 41:3-4 and 43:17, including one where the Qumran scroll agrees with the MT against the Greek. The traditions card misstates Whitcomb. The table in the deep block is not in the site's table markup. Several notes carry wrong or invented claims about 1 Kings. Reader-facing text admits unchecked work. A group of verses sits close to NIV/ESV sentence shape. "The Greek" means Swete's Vaticanus throughout, so the apparatus is partial for a part where Papyrus 967 and Ziegler matter.

Method: I checked all 122 verses against `texts/orig/Ezk.json` (via `dss.py`), the Ketiv/Qere in `texts/auto`, and Swete via `lxx.py Eze 40-43`. I checked the Whitcomb article and the Talmud citations on the web. I did not open Papyrus 967 or Ziegler.

## Findings

### Critical
None.

### Major

1. **Major. variants.json entries 11-14 (42:16-19): the Greek is misreported.** Entry 11 gives the Greek as πεντακοσίους = "five hundred cubits", and entries 12-14 give "five hundred cubits" for 42:17, 18 and 19. Swete prints "cubits" only at 42:17 (πήχεις πεντακοσίους). 42:16, 18 and 19 read bare πεντακοσίους ἐν τῷ καλάμῳ τοῦ μέτρου, "five hundred by the measuring reed", which is a count of reeds. The variant's own `b` says "no unit in 42:16 ... again no unit in 42:19" and skips 42:18, which also has none. The Greek also orders the sides differently (east, north, west "θάλασσαν", south, where the MT has east, north, south, west). Only 42:20 gives cubits. So the claim "Other witnesses say cubits" (entry `p`, note 39) rests on one Greek verse plus 42:20 and 45:2. Fix: correct each Greek reading (42:16, 18, 19 "five hundred, by the measuring reed"; 42:17 "five hundred cubits"). Note the changed order. Reword `p` and `why` so the case for "cubits" is context (42:20; 45:2; Middot 2:1) and a single Greek verse, not four witnesses.

2. **Major. variants.json entry 11 `why`: the Ketiv/Qere is misused.** The text says "scribes saw a problem: a written 'cubits' is marked to be read as 'hundreds'". `texts/auto` shows K = אמות (written) with Q = מאות. That is a metathesis, the written form being the Qere's letters transposed. The Qere confirms "hundreds", not a doubt about reeds versus cubits. Fix: say that the Ketiv spells "hundreds" in a garbled way and the Qere corrects the spelling; remove the implication that the Masoretes queried the unit.

3. **Major. variants.json is missing real Greek differences, including a Qumran case.**
   - **41:4.** The Greek has the length of the innermost room as forty cubits (πηχῶν τεσσεράκοντα) against the MT's twenty. 4Q73 preserves 41:4 and reads "עשרים" with the MT. A scroll siding with the MT against the Greek on the Holy of Holies is exactly the entry the brief asks for ("name every scroll that preserves a place"). There is also none at 41:3, where the Greek has "inner court" and jambs of seven cubits each side. The scroll is mentioned only in notes 23 and 25 and in prose. Add entries at 41:3, 41:4 and 41:6 naming 4Q73 as a witness, with caution where words are restored in brackets (41:3 and 41:5-6 are partly restored).
   - **40:44.** The Greek has "two exedras" and NO "singers". The "rooms for singers" of note 18, the topic `temple-singers` and the table row rest on an MT word the Greek lacks. Add a variant. Soften note 18's "Ezekiel's only mention of singers" and the `temple-singers` topic.
   - **40:48.** The Greek gives the width of the entrance as fourteen cubits (δέκα τεσσάρων), where the Plain English Translation has "three ... and three". Not listed.
   - **40:34.** The Greek has the porches facing the inner court, not the outer. Not listed.
   - **43:14, 17, 20.** The Greek calls the altar ledge ἱλαστήριον (hilasterion). Add a note: this is the word of Hebrews 9:5 and Romans 3:25 and matters to Christian readers.

4. **Major. Admissions of unchecked work in reader-facing text.**
   - chapters.json ch. 40 deep, "Which witnesses were read": "Ziegler's critical text, Papyrus 967, the Targum, the Vulgate, the Peshitta, the ... later Greek versions, and Rashi, Radak and the other medieval commentators were not consulted directly".
   - variants.json entry 0 `b`: "Ziegler's critical text of Ezekiel (1952) and Papyrus 967 were not consulted for these chapters."
   - notes.json note 14: "known the carved palms of the old Temple from memory". The wording is innocent, but it matches the banned phrase.

   The lead decision allows naming the Greek as Swete's Vaticanus. It does not allow telling the reader what was not looked at. Fix: say once what was read ("Greek as printed in Swete's text of Codex Vaticanus"). Drop the sentences listing what was not consulted, or replace them with "reported by" for anything cited. Reword the note 14 phrase ("would have remembered"). Papyrus 967 is a first-rank witness for 40-48, so ideally consult Ziegler's apparatus for 40:1, 43:3, 43:7 and 42:16-19 before the part counts as done.

5. **Major. The traditions card (chapters.json ch. 43, 43:18-27) misstates Whitcomb.** It says "Whitcomb argues for the memorial role". Whitcomb's GTJ 6.2 (1985), 201-217, does the opposite. He rejects the memorial view: the millennial sacrifices "will not be primarily memorial", and he reads Ezekiel's own word ("atonement", 45:15, 17, 20) as ceremonial cleansing that restores Israel's theocratic harmony. (Verified at pre-trib.org's text of the article.) Fix: describe him as the leading dispensational dissent from the memorial view (Scofield and Walvoord/Pentecost hold the memorial reading). Rewrite the sentence accordingly.

6. **Major. The traditions card is thin and partly sourced to texts that answer other questions.**
   - Lutheran: Augsburg Confession 24 is about the Mass. The relevant Lutheran text for "no earthly kingdom or temple before the resurrection" is AC 17 (which book.json already uses). Cite it, or label the 24 reasoning as an inference.
   - Catholic: CCC 1366-67 is about the Eucharist and says nothing of Ezekiel or a rebuilt temple. book.json's Catholic text says "the Catholic Church has never taught that a temple like Ezekiel's will be built" and cites CCC 756. Add CCC 676 (rejecting millenarianism) or keep the 756 line.
   - Orthodox: the Chrysostom Liturgy "bloodless service" is a liturgical phrase, not a ruling on this question. book.json says "No Orthodox council has ruled on the meaning of Ezekiel 40-48". The two cards contradict each other in strength. Make the part card say the same, or label the Chrysostom line as the church's worship language, not an answer.
   - Missing views: historic or covenant premillennial (the card mentions only "Reformed premillennialists differ"), postmillennial, Anglican, Baptist (the 1689 confession repeats the Westminster line), Anabaptist and Adventist. The brief asks for every major view, including postmillennial, Lutheran beside Reformed and Anabaptist. Say honestly which are omitted, or add them with their confessions.
   - The Catholic entry ends in a stray semicolon ("1366-1367);").
   - Duplicate source keys: `hoekema-bible-future` (defined in Tob 07-14) duplicates `hoekema-future` (shared sources.json, used by book.json). `catechism-catholic` (defined in Gen 01-11) duplicates `ccc` (shared sources.json, used by book.json). Source keys are global: reuse `hoekema-future` and `ccc`.
   - Relation to book.json: the book-level card "What is the Temple of Ezekiel 40-48?" (top `temple`) covers Dispensationalist, Reformed, Catholic and Orthodox. This card repeats the same four traditions on a narrower question. That is defensible, but cross-reference them (one line "see the book-level card") and keep the wording consistent.

7. **Major. The table in chapters.json ch. 40 (deep, "The whole Temple at a glance") is bare `<table>` markup.** `deepItem()` passes it through unsanitised via `para()`, so it renders. But the site's table convention (e.g. 1En 072-082) is `<div class="tblwrap"><table class="tbl" style="--cols:4">`. `base.css` styles only `.tbl`/`.tblwrap`, with column minimums and horizontal scroll. A bare table gets browser defaults: no padding, no rules, no scroll on a phone, and the 4 columns with long cell text will squeeze or overflow. Fix: wrap it as in 1En. Also fix the content errors in the table:
   - "two rooms (singers) and two rooms (priests)": the Hebrew has two rooms, and 40:45-46 assign those same two rooms to the priests (see finding 3).
   - "500 by 500 on each side (Hebrew: reeds; probably cubits)": the Plain English Translation follows reeds, but the table silently adopts cubits. Say what the Plain English Translation says, as the 260 m figure is conditional.

8. **Major. 41:6, "three, thirty times", does not match what the note says.** The Hebrew is שלוש ושלשים פעמים, "three and thirty times" (4Q73 reads this too, as note 25 says). The Plain English Translation's comma form is the 3 x 30 reading. Note 25 says "The Plain English Translation keeps the Hebrew's strange count". It does not. Fix: Plain English Translation "thirty-three times" (or "three and thirty times"), with the 3 x 30 reading in the note. Also the Greek (τριάκοντα τρὶς δίς) is not explained.

9. **Major. Facts about 1 Kings are wrong in chapters.json.**
   - ch. 41 deep and ch. 40: "Solomon's hall had ten lampstands and ten tables (1 Kings 7:49-50)". 1 Kings 7:48-49 has ONE table of the bread (the ten tables are 2 Chronicles 4:8).
   - "Ezekiel's cherubim have two faces, not the one in Kings": 1 Kings 6:29 gives no faces. The claim is invented.
   - "the porch is the same width", "the main hall and innermost room ... are the same", "the same as Solomon's": the cubit counts are equal, but Ezekiel's unit is the long cubit (note 8). Say "the same number of cubits" and do not leave the comparison as sameness.
   - Note 20 says Ezekiel's porch "is 20 cubits wide, the same as Solomon's porch". The Plain English Translation says twenty LONG and eleven wide (a difference from Solomon's 10-cubit depth, which is the interesting point).

### Minor

10. **Minor. Drift from NIV/ESV sentence shape (describe, do not copy).** My count is about 12 verses.
    - 40:5 (three-sentence frame: wall all around, reed in the man's hand, "He measured the wall: one reed thick and one reed high", which follows NIV's order). The Hebrew has "width of the structure" and "height", not "wall".
    - 40:6 ("climbed its steps and measured the threshold of the gate; it was one reed ...").
    - 40:17 (a hybrid of both: "rooms and a pavement ... thirty rooms along the pavement").
    - 40:4 ("set your mind on everything I am about to show you" mirrors ESV's "set your heart upon all that I will show you"; the Greek "τάξον εἰς τὴν καρδίαν" gives a different handle).
    - 43:6 ("I heard someone speaking to me from the house, while the man stood beside me" is NIV's shape; ESV puts the man first).
    - 43:8 (the "put their threshold beside my threshold ... wall between" frame).
    - 43:13-17 (the "channel/rim/steps face east" run follows NIV's "gutter/rim ... steps"; the Greek κόλπωμα βάθους supports "deep", but the frame is shared).
    - 43:19-27 (the altar-dedication sequence, e.g. 43:20 "place it on the four horns ... cleanse it from sin and make atonement for it", 43:24, 43:25, 43:26 "and so they will consecrate it" against ESV's "and so consecrate it").

    Most of this is forced by the Hebrew, but rework the shape in 40:5, 40:6, 40:17, 43:6 and 43:13. The measurement lines are otherwise independent.

11. **Minor. Note 12 and variant 3 (40:14) state the Greek "looks like a guess at a damaged text" and that "twenty ... would fit the width ... if the porch is meant".** Both are unsupported guesses stated as fact. Reword to "possibly".

12. **Minor. variants.json entry 4 (40:30).** "Some scholars think it was added" is unsourced. The Greek omitting the verse is also explainable as skipping from 40:29 to 40:30, which both end in the same measure of "twenty-five ... cubits". Name the explanation or cut "some scholars".

13. **Minor. Note 13 (40:16).** The Hebrew phrase "challonim 'atumot" is not "the same phrase" as 1 Kings 6:4 (challonei shequfim 'atumim). Say "a similar phrase". The sentence "so that those in the chambers could see who came in" contradicts "closed" windows and is a guess.

14. **Minor. Note 34 (41:25).** "threshold of wood" for 'av is not "one common guess". The usual renderings are canopy, overhang, beam or thick planks (1 Kings 7:6). The Plain English Translation also uses "threshold" for sippim (41:16) and 'avim (41:26), so two Hebrew words collapse. Change the Plain English Translation (e.g. "a wooden canopy") and fix the note.

15. **Minor. Note 50 (43:11).** "The same verse is the only one that treats the Temple's plan as 'torah'". 43:12 ("the law of the house") and 44:5 do too. Cut "only".

16. **Minor. Note 39 / variant 11.** "45:2 fixes the sacred square at 500 by 500 cubits" is an overstatement. The MT gives no unit for the 500 (only "fifty cubits" for the surrounding strip). Say so.

17. **Minor. Chapter 40 `sum`.** "the tenth day of the first month" states the Greek reading as fact, while the Plain English Translation and note 1 leave spring versus autumn open. Change to "the start of the year". Also "in ruins for thirteen years" (ch. 40 views.H) sits beside "fourteen years after the city was struck" (40:1). Explain inclusive counting or align them.

18. **Minor. Ch. 42 views.X** "Most do not take the chapter as law for today" is an unsupported generalisation. Delete "Most" or source it.

19. **Minor. Note 10.** Yadin's gate parallel is cited "reported in his book on Hazor" with no page or chapter. It is a real parallel (Yadin, Hazor, 1975), but write "reported by" with the source, and note that the dating of the six-chambered gates to the 10th century is contested (the note says "debated"; keep that). "Ezekiel's gates are bigger" is fine. Ch. 40 deep's "reported in Yadin's edition" (Temple Scroll) should cite the existing `yadin-temple-scroll` key.

20. **Minor. Note 52 (43:15).** The Akkadian arallû link is Albright's suggestion, unsourced here. Name Albright or write "some have proposed". Mesha stele line 12 (the `'r'l dwdh` the king dragged off) is correct. "A similar word" understates it, since it is the same word. Say so.

21. **Minor. Note 49 (43:10-11).** The Greek readings quoted ("they will stop sinning", "receive their punishment", no "if") are correct for Swete. Add that Ziegler/967 have not been checked, or say "in the Greek as printed in Swete".

22. **Minor. Variant 15 (43:3).** "a few readers take it as 'he came'" is unsourced. The Vulgate and Targum are usually cited for this; verify or say "reported by". The Greek reads "I was entering to anoint the city", which also shows the first person.

23. **Minor. Topic `temple-singers` and table row.** See finding 3. Either mark the singers as MT-only or cut the topic.

24. **Minor. Alignment with 01-07.** Checked: 43:2 "sound ... like the sound of many waters" matches 1:24, and "A spirit lifted me up" matches 3:12. 43:3 "fell on my face" matches 1:28 and 3:23, "Kebar canal" matches 1:1, and "the glory of the God of Israel" matches 8:4. No clash. 1:28's "bright glow" has no parallel here, which is correct.

25. **Minor. Plain English Translation readability and style.** No em-dashes anywhere. Reading level fine. 40:36 "Its chambers, its pillars, its porches and its windows ran all around" lets "ran all around" govern the chambers and pillars, which the Hebrew does not say (only the windows). 40:7-9 render מהבית as "on the inside" each time, hiding "toward the house". Add a gloss or tighten.

## What checked out
- Numbers and units across 40:5-49, 41:1-26, 42:1-20, 43:13-17 match the Hebrew. 40:14 "sixty" and 41:1 "tent" are faithful to the MT and flagged in notes.
- The metric glosses (52 cm cubit, 3.1 m reed) are arithmetically correct. The altar, porch and hall sizes are right.
- Rosh Hashanah 8b / Arakhin 12a (the date as a Jubilee tenth of Tishri), Yoma 21b, Shabbat 13b, Rosh Hashanah 31a and Mishnah Middot 2:1 and 3:3 are real and correctly characterised. Mesha line 12 and Gregory's homilies (Book 2 on chapter 40) are real.
- 4Q73 does preserve 41:3-6 and agrees with the MT where preserved.
- Ketiv/Qere in 43:15-16 and 43:26 are reported correctly.
- The Hebrew of 43:7's "corpses of their kings" readings is fairly laid out (royal tombs; a cult of the dead; idols/Molech; "at their death").
- The Greek for 40:1, 40:2, 40:8, 40:14, 40:39, 40:49, 41:1, 41:22, 41:25, 43:3, 43:7, 43:15, 43:22 and 43:26 is reported correctly in the variants.

## Fixes applied

1. Accepted. Greek of 42:16-19 corrected against Swete: 42:16, 18, 19 "five hundred, by the measuring reed" (no unit), 42:17 "five hundred cubits"; the changed side order (east, north, west, south) is stated; the "cubits" case is reworded as context (42:20, Middot 2:1, one Greek verse) in the variant and in the 42:16 note. Ziegler and Papyrus 967 were not opened (see 4).
2. Accepted. The Ketiv (letters of 'amot) and Qere (me'ot) are the same four letters transposed; the variant now says the note fixes the word for "hundreds" and does not query reeds against cubits. Checked in texts/auto.
3. Accepted. New variants at 40:34 (Greek inner court), 40:44 (Greek has two rooms and no "singers"), 40:48 (Greek adds a doorway of fourteen), 41:3 (Greek inner court, seven each side; 4Q73 agrees with the MT in the preserved measures, restored words marked), 41:4 (Greek forty against MT and 4Q73 twenty), 41:6 (Greek "thirty, three times, twice"; 4Q73), and 43:14 (hilasterion at 43:14, 17, 20, checked in Swete; Exodus 25:17 uses it for the ark's cover). New note at 43:14 on Hebrews 9:5 and Romans 3:25, saying what the shared word does and does not show. Note 18, the temple-singers topic and the table now mark the singers as in the Hebrew only; the Plain English Translation keeps the MT.
4. Accepted. The "not consulted" sentences are gone from the variant and the chapter page; chapter 40 now says once which witnesses were read (Leningrad Codex, Ketiv/Qere, Abegg-Bowley-Cook scrolls, Swete's Vaticanus). "From memory" in the 40:16 palms note is reworded. Ziegler removed from variant 0's sources. Not done: consulting Ziegler's apparatus or Papyrus 967 (no access here); the Greek is Swete's Vaticanus throughout and the page says so.
5. Accepted and verified (pre-trib.org text of Whitcomb, GTJ 6.2, 1985, 201-217): he rejects the memorial reading and reads Ezekiel's "atonement" (45:15, 17, 20) as ceremonial cleansing. The card now says so; the memorial reading is attributed to the Scofield notes and Walvoord as at book level.
6. Accepted. Lutheran now cites Augsburg Confession 17 and Apology 24; Catholic adds CCC 676 and 756 (stray semicolon gone); Orthodox matches the book-level card, with the Chrysostom line labeled as worship language; Baptist (1689, ch. 19) and Anglican (Articles 7 and 31) added with their own texts; cross-reference to the book-level card added. Postmillennial, historic premillennial and Anabaptist views are named as not set out, because no confession text was verified for them. Duplicate keys: hoekema-bible-future and catechism-catholic replaced by hoekema-future and ccc (they were not in this part's sources.json). Partly: Adventist not added.
7. Accepted. The table is now in the div.tblwrap / table.tbl style="--cols:4" markup used in Rev, 1 Enoch and Jeremiah; the singers row says the two rooms are the priests' in 40:45-46; the 500 row states reeds in the Hebrew of 42:16-19 and no unit in 42:20; the house and the separate area are separate rows so nothing is counted twice, with an added line summing the east-west parts to 500.
8. Accepted. 41:6 now reads "thirty-three times"; note 25 gives the Hebrew "three and thirty times", the two readings and the Greek.
9. Accepted. Ten tables are 2 Chronicles 4:8 (1 Kings 7:48 has one table); the invented "one face" claim is deleted (1 Kings 6:29 gives no faces); "the same" is changed to "the same number of cubits" with the long cubit stated; the porch is 20 across and 11 deep against Solomon's 20 and 10 (notes 20, 21, 24, chapter 40 and 41 deep sections, echoes).
10. Accepted. Rebuilt from literal.js: 40:4, 40:5 (now "width of the structure"), 40:6, 40:17, 43:6, 43:8, 43:13, 43:17 and 43:19-27 (also flawless for tamim and "present" for hiqriv, per the terms). Notes and glosses re-anchored.
11. Accepted. Notes 12 and variant 3 now say "possibly"/"may be".
12. Accepted. Variant at 40:30 now names the eye-skip between the two "twenty-five cubits" and drops "some scholars".
13. Accepted. Note 13 says "a similar phrase" (1 Kings 6:4 has challonei shequfim 'atumim); the guess about seeing who came in is removed.
14. Accepted. 41:25 "A wooden canopy" and 41:26 "the canopies" for 'av/'avim; "threshold" stays for sippim (41:16); note 34 lists the usual renderings.
15. Accepted. "Only" removed from note 50; 43:12 and 44:5 named.
16. Accepted. Note 39 now says 45:2 gives 500 by 500 with no unit in the Hebrew (and in the Greek).
17. Accepted. The chapter 40 summary says "at the start of the year"; views.H now says fourteen years after the city fell (40:1), without a second count.
18. Accepted. "Most" sentence deleted from chapter 42 views.X.
19. Accepted. Note 10 says Yadin drew the likeness (Hazor, 1975, key yadin-hazor) and keeps "debated" for the dating; the Temple Scroll is cited to Yadin's edition (key yadin-temple-scroll added to the chapter 40 settings).
20. Accepted. Note 52: Mesha line 12 is the same word; the Akkadian link is "has been proposed" with no name, since no author was verified.
21. Accepted. Note 49 now says "in the Greek as printed in Swete".
22. Accepted. "A few readers take it as he came" removed from the 43:3 variant; it now says Hebrew pointing and Greek both have the first person.
23. Accepted with finding 3: topic and table updated, topic kept.
24. No change needed (alignment with 01-07 confirmed by the reviewer).
25. Accepted. 40:36 now gives the windows alone "all around"; 40:7-9 render mehabbayit as "on the side toward the house" with a line in note 11.
Also: 40:8 variant re-anchored, 40:49 and 40:39 variants stripped of unsourced claims ("many commentators", "regularly").
