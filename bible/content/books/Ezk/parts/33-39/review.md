# Hostile review: Ezekiel 33-39 (part 33-39)

## Verdict

The translation is mostly faithful to the Hebrew and the notes are rich, but the part is not ready. One manuscript claim is wrong in a way that matters: variant 37:23 says the Masada scroll "agrees" at the very word in question, and that word is a restored word in the transcription, not a visible one. The Papyrus 967 material contradicts itself on what Lust argued (three places say three things). The Masada coverage is stated four different ways. The Plain drifts close to the NIV/ESV sentence shape in about a dozen verses (mostly the Gog chapters), the lead decision on chemah/'evrah is broken at 38:18-19, and `am ha'arets is missing at 33:2. Several numbers and glosses are wrong (shuv "fifteen times" is ten; a "year and a half" gap is really about eight months; the 37:16 gloss swaps the tribes; the 39:25 gloss says "good luck"). The three traditions cards each omit a church the brief required (Orthodox, and others with real conflict), and the Lutheran Gog answer is not sourced to any Lutheran text. Source keys duplicate Tov's article three times across the book and the Masada article twice. Unchecked-work admissions remain in reader-facing text. `VERBOSE=1 node tools/build.js --check Ezk/33-39` gives 0 errors, 1 warning (34:2 note quote of Jeremiah 23:1; the site's Plain says "destroy and scatter", the note says "lose and scatter"). The part is not at 0/0.

Checks I made myself: the Hebrew word by word (texts/orig/Ezk.json, texts/auto/Ezk.json for Ketiv/Qere), Swete's Greek via tools/lxx.py for every chapter, tools/dss.py for every chapter (only Mas 1d has text in 33-39), a count of shuv in chapter 33 and gillulim in Ezekiel, the source keys across the whole book, Sefaria's Berakhot 7b and Sanhedrin 92b, and a web search on P967.

Verified as correct (no action): Sanhedrin 92b (Eliezer: stood, sang, died; Eliezer son of Yose the Galilean: went up to Israel and had children, with Yehuda ben Beteira's tefillin story; Yehuda/Nehemiah: parable); Berakhot 7b does name the war of Gog and Magog (and ties it to Psalm 2); the Swete readings in variants 33:21 (twelfth year, twelfth month), 33:25-26 (shorter), 34:3, 34:16, 34:29, 35:9, 36:14, 37:22, 37:25, 38:2, 38:14, 39:6; the Ketiv/Qere at 35:9, 36:14, 39:25; the gillulim count of 39; Masada at 38:2 (fully visible "nesi' rosh meshekh vetuval") and at 36:14 (Ketiv tekhasheli); Easter Vigil, Fifth Sunday of Lent, Holy Saturday, Shabbat Parah, Sukkot haftarah details; Josephus Ant. 1.123 and 13.257-258; Judges 9:37 for tabbur; the Greek 38:13 "Carthaginian".

## Findings

### Critical

**1. Critical. variants.json, entry 37:23 ("Places or lawless acts?"), plus the claim in `why`.**
The entry says the Masada scroll "(visible letters): moshevoteihem" and concludes "The Masada scroll agrees with the Masoretic Text, so the hard reading is old." In the ETCBC transcription read with tools/dss.py, the word is bracketed: `מכל [מושבתיהם] אשר [חטאו] [בהם]`. The word is restored by the editors, so it is not the scroll's reading. Only `אתם מכל` and `אשר` are visible around it. The rule in dss.py is that a restored word is never cited as a scroll's reading.
Fix: delete Masada from the witness line and from the `why` sentence (and from the `s` list and the chapter-37 "C" view if it relies on it). Say "Masada has the verse but the word itself is restored." The remaining argument (a hard word, the Greek reads "lawless acts") stands on the Hebrew and the Greek.

### Major

**2. Major. Lust's position on Papyrus 967 is stated three incompatible ways.**
- variants.json 36:23: Lust takes 967 as the older text and the long section as a later expansion.
- variants.json 38:1: "the order of 967 is an intentional rearrangement (Lust), or ... keeps an older arrangement (Bogaert)".
- chapters.json ch. 37 "The order of chapters 36-39": "Lust and others think 967's order is a deliberate theological arrangement that puts the resurrection next to the Temple; Bogaert ... thinks it may preserve an older form."
- chapters.json ch. 36 "C" says "later expansion (Lust)".
The brief's own text says the opposite of the first (it calls the MT order earlier, with 967 moving the resurrection "Lust"). Secondary reports of Lust's CBQ 43 (1981) article say he held the shorter, differently ordered 967 to be the earlier form, with 36:23c-38 a later redactional bridge written when chapter 37 was moved to follow 36. Filson (JBL 62, 1943, already a key in 08-15 as `filson-967`) argued the omission was deliberate. The writer has not read these articles ("as reported").
Fix: read Lust (or a reliable review of him) and state one position, the same in all four places. Cite Bogaert by title (P.-M. Bogaert, Biblica 59, 1978, on Ezekiel and Daniel in P967) if he is kept; the claim that Block "summarizes Bogaert" is unverified and should be dropped or sourced. Use `filson-967` from 08-15. Do not reproduce the brief's version.

**3. Major. chapters.json ch. 36 "The Greek order and the long section" sets a false choice.**
"if it lost the verses, the loss was a copying accident." Nobody in the literature offers only accident versus age. The live options are: a different Hebrew Vorlage (Lust, Tov, Bogaert), a deliberate omission by translator or reviser (Filson), and a later Hebrew addition. The text also says Lust "think[s] 967's order is deliberate" in ch. 37. Rewrite the paragraph so each position is stated in its strongest form (STYLE: fairness).

**4. Major. Masada coverage is stated four ways.**
- sources.json and variant 36:14 `b`: Mas 1d "35:11-38:14".
- chapters.json "Witnesses read": "35:11-38:8".
- variant 38:14: "the Masada scroll does not preserve this verse".
- brief: 35:11-38:14.
In the ETCBC transcription the scroll runs 35:11 through 38:8; 38:9-23 show "no scroll preserves this verse". Talmon's edition is commonly given as 35:11-38:14 (verify in Masada VI). Both facts must be given, once, consistently: "Talmon's edition covers 35:11-38:14; the transcription read here has text through 38:8." Then 38:14 variant is consistent ("not in the transcription"). Also check the claim in variant 38:1 that Mas has 36, 37, 38 "in the same order": the transcription shows verses in sequence but is not itself evidence of column order; cite Talmon or soften.

**5. Major. Wrong counts and arithmetic.**
- note 33:11 ("Turn back") and topics.json `repentance`: "this chapter has the root fifteen times (33:9-19)". The lemma shuv occurs ten times in Ezekiel 33 (33:9 twice, 11 three times, 12, 14, 15, 18, 19). Fix both places.
- variants.json 33:21 (tenth month): the Greek "twelfth year, twelfth month" would put the news "nearly a year and a half after the city fell". The fall is the summer (July) of 586; the twelfth month of the twelfth year is about February-March 585, roughly eight months. The brief's "18 months" is also wrong; the writer's own "five or six months" for the tenth month is right. Fix to "about eight months".
- same entry: "ten and twelve are close in Hebrew letters" is weak (asiri vs sheneim asar); keep the Greek letter argument or drop.
- note 33:2 "from their far edge" says "Three readings are possible" and gives two.

**6. Major. Drift from NIV/ESV sentence shape (about 11 verses clearly, more mildly). Described, not quoted.**
Where the Hebrew does not force the order, these keep the familiar English clause chain:
- 38:4 (hooks, "horses and riders ... a great assembly with large shields and small ... gripping a sword": the whole run tracks the ESV/NIV sequence and nearly its words).
- 38:11 ("fall on a quiet people", "no wall, no bar and no gates"), 38:12 ("raise your hand against ruins ... rich in cattle and property"), 38:13 (the four-question speech of Sheba, Dedan and Tarshish is nearly the familiar one).
- 38:20 (creatures list, then "mountains ... steep slopes ... every wall ... to the ground") and 38:22 ("rain down on him and his troops and the many peoples with him").
- 33:4-5 ("takes no warning ... comes and takes him away ... blood will be on his own head"), 33:11 (the double "Turn back" and the closing question in the familiar shape), 33:16 ("No sin ... will be held in memory against him").
- 34:13 (the familiar reorder of "bring out of the peoples / gather from the countries / own land / mountains / stream beds / inhabited places"), 34:25 (nearly word for word: covenant of peace, rid the land of wild animals, live in safety in the wilderness, sleep in the forests).
- 39:3, 39:9-10 (the weapon list and "plunder those who plundered them and loot those who looted them"), 39:18.
Several of these are forced by the Hebrew (36:28, 37:27, 39:18's list) and may stay; the first group should be rebuilt from `node tools/literal.js Ezk 38`. 118 of 197 were rebuilt per the lead; these are among the rest. For 38:4 restructure around the Hebrew order (verb chain, then army list) and choose different words for the armor.

**7. Major. Lead decision broken: chemah / 'evrah (38:18-19).**
Lead decisions: "rage" for chemah, "fury" for 'evrah. 38:18 Hebrew `תעלה חמתי באפי` (chemati) is rendered "my fury will flare up" (should be "rage"); 38:19 `באש עברתי` ('evrati) is rendered "the fire of my wrath" (should be "fury"). 36:6 and 36:18 use "rage" correctly, so the part is inconsistent with itself.

**8. Major. `am ha'arets missing at 33:2.**
Brief: "the people of the land" every time, with a note at first use. 33:2 `עם הארץ` is rendered "the people there" and has no note; 39:13 has "the whole people of the land" and no note. Fix 33:2 and add the note (first use in this part; identity differs by passage: the landowning citizens in 33:2 against the burying population in 39:13).

**9. Major. Traditions card 38 (Gog): the Lutheran answer is not sourced to Lutheran teaching, and churches with real conflict are missing.**
- Lutheran: the claim "Gog and Magog belong to the final enemies of the church; Luther read Gog in his own time as the Turks" is sourced only to `augsburg`, article 17, which says nothing about Gog. The Luther claim is true (his 1530 preface to Ezekiel 38-39 and his writings on the Turk), but it must be sourced to Luther's own text (add a key, for example Luther's preface to Ezekiel 38 and 39, 1530), not to the Confession.
- Reformed: `westminster` does not discuss Gog or the millennium; the answer is "teachers are divided", which is not an answer sourced to the church's text. Say so, or cite named teachers (for example Calvin's Ezekiel commentary on 38-39).
- Catholic: fine (Catechism 675-677, Augustine), but Augustine is not the Catholic Church's own text; say "Augustine, whom the Church has long followed".
- Missing: Orthodox (the Church fathers, Andrew of Caesarea on Revelation 20, Gog and the barbarian peoples; Revelation is not in the liturgical lectionary, which itself is a fact worth one sentence), Baptist (large premillennial and amillennial range, Baptist Faith and Message art. 10 on last things), Adventist (Gog and Magog tied to the wicked after the millennium) and Jehovah's Witnesses (Gog of Magog as Satan after being cast down). The brief asked for the postmillennial and others to be easy to forget, not omitted. Anglican is a lesser point.
- "Dispensationalist" as a tradition label is allowed by TRADITIONS; its answer names Scofield and Lindsey. Add that many dispensationalists (and non-dispensational premillennialists) do not accept the Russia reading.

**10. Major. Traditions card 36 (baptism / new birth) omits Orthodox and Anglican; Baptist answer is sourced to the wrong article.**
The brief lists "Catholic and Orthodox: baptismal regeneration; Lutheran; Reformed; Baptist; Anglican". Orthodox is absent, Anglican (Article 27: baptism as a "sign of regeneration or new birth") is absent, Methodist/Wesleyan (the 1784 Articles; Wesley's "The New Birth") and Pentecostal views are absent. The Baptist claim "the new birth comes by the Spirit through faith, before baptism" is not in Baptist Faith and Message art. 7 (it is a statement on baptism as symbol); the doctrine of regeneration is art. 4. Cite both. Reformed: Heidelberg Q&A 69-74 and WCF 28.6 are accurate.

**11. Major. Traditions card 33 omits Orthodox, Anglican, Baptist and the Calvin text the brief named.**
The card is a real conflict (Calvinist revealed/secret will against Arminian/Lutheran/Catholic). But Orthodox (for example the Confession of Dositheus or Philaret's catechism on God's will that all be saved), Baptist (the range: Calvinist and non-Calvinist Southern Baptists, with the Baptist Faith and Message art. 5), Anglican (Article 17) and Calvin's own Ezekiel commentary on 33:11 are missing. The Reformed answer as written does not address 33:11 at all; cite Calvin on 18:23 and 33:11 (he says God's delight is that the wicked turn, and explains the secret will elsewhere) or Dort, and keep the plain statement. The Catholic quote of CCC 1037 is accurate. Methodist: label the source (Wesley's sermon "Free Grace") correctly; it is a Standard Sermon.

**12. Major. Reader-facing admissions of unchecked work remain.**
Brief and lead decision: none allowed.
- variants.json 33:21 tenth month, `why`: "The critical Greek text (Ziegler) has not been checked here."
- variants.json 33:25, `why`: "the critical Greek text of Ziegler should be consulted before calling this 'the Greek'."
- variants.json 33:21 year, `w`: "(reported by the BHS apparatus; not read here)"; 37:4 `b`: "The transcription I read".
- chapters.json ch. 33 "Witnesses read": "I did not consult Ziegler's critical text or Papyrus 967 itself" and first-person "I read".
Rewrite as "Greek readings are from Codex Vaticanus as printed by Swete; Papyrus 967 is cited as reported by Lust, Tov and Filson." State the witnesses once, in the neutral voice, without "I".

**13. Major. Gloss errors (glosses.json).**
- 37:16 "Israelites who are his companions" glossed "the northern tribes that joined with him". These are Judah's companions (the southern-affiliated tribes: Benjamin, Simeon, Levi); the northern tribes are Joseph's companions in the second half. The gloss is backward.
- 39:25 "Jacob's fortunes" glossed "the good luck of the people of Jacob". Shuv shevut is not luck; the note even explains it. Use "the condition of the people of Jacob".
- 39:2 "haul you up from the far north" glossed "drag you down from the distant north": up and down disagree with the Plain.
- 38:7 "be their guard" glossed "act as their commander": mishmar is a guard.

**14. Major. Missing Greek variant at 38:21 and a missing hard-text note.**
Plain: "I will call a sword against him on all my mountains." MT `וקראתי עליו לכל הרי חרב` is hard (the "to all my mountains a sword"). Swete's Greek reads `καλέσω ἐπ᾽ αὐτὸ καὶ πᾶν φόβον`, "I will call ... every terror", with no mountains. Add a variant and a note on the difficulty. Also missing: the Greek 37:25 gives "ruler" for David again (and 37:24 `ἄρχων`) which supports the entry at 37:22, and 39:6 where the Greek has "the islands will be inhabited in peace" (not "those who live safely on the islands"); say so in the 39:6 entry.

**15. Major. Note 34:2 (Woe) quotes Jeremiah 23:1 wrongly.**
The note quotes "Woe to the shepherds who lose and scatter the flock of my pasture, the LORD declares." The site's Plain (Jer parts/21-25) reads "destroy and scatter ... the LORD declares." The build warns. Quote the Plain exactly. Check also the quote of Isaiah 26:19, Psalm 23:1 and Revelation 20:8 in notes 66, 27 and 92 after the Jeremiah fix (build did not warn, but confirm).

### Minor

**16. Minor. Source keys: duplicates and clashes (lead decision on keys).**
- Tov 1986 is defined under three keys in the book: `tov-recensional-ezekiel` (01-07), `tov-ezekiel-recensional` (08-15), `tov-ezek-recension` (33-39). The 33-39 title is also abbreviated ("MT and LXX") and lacks the pages (89-101). Use the 01-07 key, delete the 33-39 definition, fix the citations.
- `talmon-masada-ezek` (33-39) and `talmon-masada` (Psa 081-089) are the same article (Talmon, "Hebrew Fragments from Masada", Masada VI, 1999). Reuse `talmon-masada`, which has pages; if a pinpoint is needed (the Ezekiel scroll) say so in the note, not in a new key.
- `lust-ez36-40` is a separate article from `lust-ezekiel-betl` (the BETL 74 volume); fine, but give pages (CBQ 43, 1981, 517-533).
- `greenberg-ezekiel2`, `block-ezekiel2`, `zimmerli-ezekiel2` are defined only in 01-07's sources.json and used here without a local definition. That works for the build but breaks the part when 01-07 changes; the lead should confirm they stay (they match the real works: Greenberg Ezekiel 21-37, AB 22A, 1997; Block NICOT 25-48, 1998; Zimmerli Hermeneia 1983). The key suffix "2" implies a volume; the two Greenberg keys are right.
- `abegg-bowley-cook-dss` is defined identically in 08-15 and 33-39; keep one.
- `jerome-ezekiel`, `levenson-resurrection`, `book-of-mormon`, `catechism-catholic`: defined in other books; fine.

**17. Minor. Gesenius attribution to Russia (note 78).**
The note says the Rosh = Russia identification "was proposed in the nineteenth century, as reported by Block". Block (NICOT 2) reports Gesenius's lexicon; name him ("Gesenius, reported by Block") and give the Scofield note and Lindsey page, not only the date. The variants entry's "some later Greek translators are reported to read Rosh as a name" has no source; the brief names Aquila, Symmachus and Theodotion; add "reported by" with a named source or delete. Everything else in notes 77-79 and the variant 38:2 checked out: the Greek (Swete) has `ἄρχοντα Ῥώς`, the Vulgate "principem capitis", Masada has `נשיא ראש משך ותבל` fully visible, Gen 46:21 has a Benjaminite Rosh, Josephus Ant. 1.123 identifies Magog with the Scythians.

**18. Minor. Unsourced liturgical and historical claims.**
- chapters.json ch. 33 "J": "33:11 is quoted in the penitential prayers of the High Holy Days": plausible (Selichot; Yoma 86b), but give the source or remove.
- chapters.json ch. 33 "Chapter 18 and chapter 33" says Jewish interpreters "since the Talmud" read Exodus 20:5 and Deuteronomy 24:16 together; the brief names Makkot 24a; cite it.
- note 61 (37:3): the Targum "is reported to read the chapter as a prophecy of the resurrection (Levey, 1987)": correct as "reported", add the Targum verse reading and Levey's page.
- Luther on Gog and the Turks: true; source it (see 9).
- Latter-day Saints at 37:19: accurately described (the "stick of Judah" as the Bible and "stick of Joseph/Ephraim" as the Book of Mormon; 2 Nephi 3:12 is correct). Add Doctrine and Covenants 27:5 as the church's own text, and say that this is the church's reading of the passage, not a scholarly proposal. Fairness is fine.

**19. Minor. 39:26 note: the Hebrew cited is not the MT's form.**
The note gives `וְנָשְׂאוּ`. The Leningrad Codex has `וְנָשׂוּ` (venasu, no aleph), which is exactly why "bear" and "forget" (nashu) are both possible. Cite the actual form. Likewise the variant at 35:9 should say the Qere form is `תָשֹׁבְנָה` (the transcription's Qere is read "they will return"), which the writer has right.

**20. Minor. Settings with invented timing.**
33:30-33 says "In the months after the news, as the exiles gather at his house". The text gives no date; say "undated, placed after 33:21". 33:1-9 "perhaps in the months after the siege began" is guessed in two directions; shorten. 38:1-23 and 39:1-16 are marked "future from Ezekiel's time" (fine) but "readers" speculates about "small, unwalled Judea" in the Persian period as a fact; label it as one reading (the critical view).

**21. Minor. Chapter 36 "H" and 35 "C" statements.**
"36:23c-38 is absent from Papyrus 967 ... but present in the Hebrew (Masada scroll)": say that Masada has only parts of 36:23-35 visible (36:25 and the "my own Spirit" of 36:27 are restored words in the transcription), so it does not attest the verses that matter most word for word. Ch. 35 "C": "The text is in good state" ignores the Ketiv/Qere at 35:9 and 35:12; say "the Masada scroll preserves 35:11-15 and agrees with the Masoretic Text except for a spelling".

**22. Minor. Reading level and layout.**
Mostly 8th grade. Problem spots: 38:2 "chief leader" is fine; 39:11 adds "road" ("dam up the road") that the Hebrew does not have (it says "it will stop those who pass"); 34:31 "You are human" loses nothing but add a line in the note that the Hebrew is adam. 38:6 "Gomer is there" adds "there" (not in the Hebrew); 37:2 "floor" is fine.

**23. Minor. Cross-references.**
- Note 31 (34:23): the Greek has "with David" in 34:25 (checked in Swete); the note correctly says so, but the variant list should carry the entry (34:25) since a reader looking at the covenant of peace will need it.
- 36:20-23 has a New Testament echo in Romans 2:24 (the name blasphemed among the nations) that is missing from notes 50 and 51; add to `r`.
- Ezekiel 37 should list John 5:25-29 and 1 Corinthians 15:51-52 beside Revelation 11:11 as the resurrection texts the churches pair with it.
- Topic `sign-acts` contribution duplicates the content of the note at 37:16; fine, but link the topic from the note's `top`.
- chapters.json `links` list "Ezekiel 33" to "Ezekiel 33" (the same label both ways); check against the app's link format.

**24. Minor. Wording and small errors in notes.**
- Note 66 (37:12): "Ezekiel's own people were not in graves, which is why 37:12 speaks of opening them" is garbled; rewrite ("the graves are a figure for the exile").
- Note 21 (33:21) says "A tenth-month date puts the arrival five or six months later" fine, but the next sentence "Some scholars date the fall to 587 BC; then the gap is longer" conflicts with variant 33:21's statement that the eleventh-year reading "suits those who date the fall in 587". Pick one explanation (with a 587 fall and twelfth year the gap is about 17 months; with the eleventh-year reading it is five or six).
- Note 84 (38:12): "Delphi is the Greek example" of a world navel: fine; add that omphalos is the Greek word and that the Greek of 38:12 itself uses `ὀμφαλὸς τῆς γῆς`.
- Note 89 (39:2): "the Greek has 'I will gather you and lead you down'": the Greek is `συνάξω σε καὶ καθοδηγήσω σε καὶ ἀναβιβῶ σε ἐπ᾽ ἐσχάτου τοῦ βορρᾶ`, which adds "bring up"; correct.

## Fixes applied

1. Fixed. Variant 37:23 no longer cites Masada as a witness: the word moshevoteihem is bracketed in the transcription, so the entry now says Masada has the verse but the word is restored; "the hard reading is old" is gone. The visible words (otam mikkol, asher) are named in the entry's b line. Chapter 37 "C" does not rely on it.
2. Fixed. Checked a secondary summary of Lust (CBQ 43, 1981, 517-533) and a Biblica 89 (2008) article that reports him: Lust held that 967 keeps the earlier form and 36:23c-38 is a later bridge written when chapter 37 was moved to follow 36. That one position is now stated in the same words at variants 36:23 and 38:1, on the chapter 36 "C" line and deep paragraph, and in the chapter 37 order paragraph; new key hogeterp-pseudo-ezekiel. The Block "summarizes Bogaert" claim is deleted. Filson (filson-967) is added.
3. Fixed. The chapter 36 paragraph "The Greek order and the long section" now gives the live options in their strongest form: Lust (later Hebrew addition, not an accident), Filson (deliberate omission by translator or reviser), and a Hebrew source without the section. The "copying accident" alternative is removed.
4. Fixed. Masada is stated once and the same way everywhere: Talmon's edition is reported to cover 35:11-38:14; the transcription read here has text for 35:11-36:35, 37:1-16, 37:23, 37:28 and 38:1-8 (checked with dss.py). Variants 36:14, 38:1, 38:14 and the "Witnesses read" paragraph match. The "same order" claim at 38:1 is softened to the reported extent running through 37 into 38.
5. Fixed. shuv occurs ten times in Ezekiel 33 (recounted from texts/orig/Ezk.json: 33:9 x2, 11 x3, 12, 14, 15, 18, 19): note 33:11 and topic repentance corrected. The Greek date arithmetic is corrected to about eight months (about seventeen months for a 587 fall with the twelfth year); the "ten and twelve close in Hebrew" argument is replaced by the Greek dekatos/dodekatos point; the 33:2 note now says "Two readings".
6. Fixed. Rebuilt from node tools/literal.js Ezk 33, 34, 38, 39: 33:2, 33:4, 33:5, 33:11, 33:16, 34:13, 34:25, 38:4, 38:6, 38:11, 38:12, 38:13, 38:18, 38:19, 38:20, 38:21, 38:22, 39:3, 39:9, 39:10, 39:11 (21 verses). 39:18 and the lists the Hebrew fixes are left. Notes, glosses, variants and topic quotes re-anchored to the new wording.
7. Fixed. 38:18 chemati is "rage"; 38:19 'evrati is "fury".
8. Fixed. 33:2 now says "the people of the land", with a new note on 'am ha'arets (Kings, Ezekiel 7:27 and 22:29, Ezra 4:4, Avot 2:5) that also covers 39:13.
9. Fixed. Card 38 reworked. Lutheran is sourced to Luther's 1530 preface (luther-ezekiel-gog-preface) beside the Augsburg Confession; Reformed says the Westminster Confession is silent and gives Augustine, Hoekema and the postmillennial range; Catholic says Augustine "whom the Church has long followed"; added Orthodox (Andrew of Caesarea; Revelation not read in the services), Baptist (BFM 2000 article 10, which does not name Gog), Adventist (Fundamental Belief 27, which does not name Gog), Jehovah's Witnesses (Watchtower, May 2015: Gog of Magog is a coalition of nations, not Satan; the review's "Satan" is the older teaching), Evangelical (Ladd) and Dispensationalist. Not applied: the claim that many dispensationalists reject the Russia reading (no source); Anglican (lesser point).
10. Fixed. Card 36 adds Orthodox (Philaret), Anglican (Article 27) and Methodist (Wesley, The New Birth); the Baptist answer now cites article 4 (regeneration) and article 7 (baptism). Pentecostal not added (no verifiable text).
11. Mostly fixed. Card 33 adds Orthodox (Dositheus Decree 3), Anglican (Article 17) and Baptist (BFM article 5); Methodist stays as Wesley's Free Grace. Not applied: a Calvin Ezekiel-commentary citation (text not verifiable here); the Reformed answer rests on the Canons of Dort.
12. Fixed. All "not checked", "should be consulted", "not read here", "the transcription I read" and first-person lines are removed; the first chapter page states in the neutral voice which witnesses were read (Swete's Vaticanus, the ETCBC transcription, and 967 as reported by Lust, Filson and Tov).
13. Fixed. Glosses: 37:16 (tribes allied with Judah, such as Benjamin), 39:25 ("the condition of the people of Jacob"), 39:2 ("pull you up"), 38:7 ("stand guard over them").
14. Fixed. New variant and note at 38:21 (Greek "every terror", no mountains, hard Hebrew); the 39:6 variant carries the Greek "islands will be inhabited in peace"; the 37:22 variant records the Greek "ruler" at 37:22, 24 and 25; note 39:2 corrects the Greek (gather, guide, bring up).
15. Fixed. Note 34:2 quotes Jeremiah 23:1 as "destroy and scatter" (warning gone). The Isaiah 26:19 and Revelation 20:8 quotes in the notes at 37:12 and 39:6 were rechecked; the build raises no warning.
16. Fixed. Tov: the 33-39 definition is deleted and citations use tov-recensional-ezekiel (01-07). Talmon: talmon-masada-ezek is deleted and citations use talmon-masada. lust-ez36-40 now has pages 517-533. abegg-bowley-cook-dss: the 33-39 duplicate is deleted and the 08-15 definition is used. The greenberg/block/zimmerli "2" keys stay in 01-07 as the review allows.
17. Fixed. Note 38:2 attributes the Russia reading to Gesenius "as reported by Block" and names the Scofield note and Lindsey (1970; no page given); the unsourced "later Greek translators" is deleted.
18. Partly fixed. The unsourced High Holy Days claim is removed; the Makkot 24a claim is cited; the Luther Gog claim is sourced; Latter-day Saints at 37:19 cite Doctrine and Covenants 27:5 and say it is the church's own reading. Declined: a Levey page and verse for the Targum (cannot be verified; the note keeps "reported").
19. Fixed. 39:26 cites the actual Leningrad form venasu; the 35:9 variant gives the Qere form tashovnah.
20. Fixed. The "when" lines at 33:1-9, 33:23-29 and 33:30-33 say the text gives no date; the Persian-period readers at 38:1-23 and 39:1-16 are labelled as the critical view.
21. Fixed. Chapter 36 "C" says only parts of 36:23-35 are visible at Masada and that 36:25-27 is largely restored; chapter 35 "C" mentions the Ketiv/Qere at 35:9.
22. Fixed except one. 39:11 no longer adds "road"; 38:6 no longer adds "there". Declined: 34:31 already has the adam line in its note.
23. Fixed except one. 34:25 variant added; Romans 2:24 added to the notes at 36:20 and 36:22; John 5:25-29 and 1 Corinthians 15:51-52 added to the 37:12 note and the chapter 37 echoes; the note at 37:16 already has top sign-acts. Declined: the chapter links, which use the same label twice in Isaiah too (the app's format).
24. Partly fixed. The 587/586 conflict between note 33:21 and the variant is resolved (five or six months for a 586 fall; about seventeen for 587 with the twelfth year); the omphalos line is added to the 38:12 note; note 39:2's Greek is corrected. Declined: the "garbled" note on 37:12 does not exist in this text (there is no sentence about people "not in graves").
