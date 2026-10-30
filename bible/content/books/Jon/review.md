# Hostile review: Jonah (Jon)

Reviewer: separate hostile-reviewer agent. Files read: plain.txt, book.json, notes.json (68), variants.json (11), glosses.json (20), chapters.json (4 chapters, 10 settings cards, 4 traditions cards), topics.json (21), sources.json, progress.md. Checked against `texts/orig/Jon.json`, `node tools/literal.js Jon 1-4`, the `tools/dss.py` printout for Jon 1-4 (4Q76, 4Q81, 4Q82, Mur88) and the `tools/lxx.py` printout (Swete, mostly Codex Vaticanus). `VERBOSE=1 node tools/build.js --check Jon` gives 0 errors, 0 warnings.

## Verdict

This is a strong, careful book, and the Plain English Translation is clean. Verse by verse the translation follows the Hebrew closely. I found no dropped or invented clause, no wrong number or name, and no copying of NIV or ESV beyond wording the Hebrew forces. The one NIV-shaped phrase is "huge fish", which is a lead-fixed site term. The book's quotes of Exodus 34:6, Nehemiah 9:17, Psalm 69:1, 31:6, 31:22, 3:8, Jeremiah 18:8, 36:3 and Joel 2:13 all match the site's Plain English Translation. `nacham` as "change his mind" matches Exodus 32:14, Jeremiah 18:8-10, 26:3, 13, 19 and Joel 2:13-14 exactly. That correctly overrides the brief's "relent", and the writer says why in the terms proposals. The weaknesses are in the apparatus.

- **Greek readings.** The variants and book.json say the Greek was read in "Swete and Rahlfs". The only Greek tool on this machine prints Swete (Vaticanus), and it warns that this is not the critical text. The 3:4 "forty or three" entry, which the brief required, does not say which Greek witnesses read which.
- **Missed variant.** One real variant was missed: 4Q82 at 4:6 matches the Greek "to shade him".
- **Missing entries.** Several variant entries the brief required are absent.
- **Bad detail in a note.** One note makes a Hebrew claim that is false (2:5, the preposition).
- **Overclaim.** One "read as history" claim states an Assyrian-record link as if it were evidence.
- **Small slips.** There are a few small factual and wording slips (four appointments in chapter 4, "Qumran" for Murabba'at, and others below).
- **Traditions.** The traditions cards are fair and well sourced, apart from the gaps listed below.

No critical findings. Findings by severity: 0 critical, 6 major, 17 minor.

---

## Major

**1. [major] variants.json (1:2, 1:5, 1:9, 2:4, 2:5, 2:6, 3:2, 3:4, 4:5), book.json section "Numbering, text and witnesses": Rahlfs is cited as read, but only Swete was available.**
- **Evidence.** `tools/lxx.py` prints Swete only. Its header says "NOT the critical text (Rahlfs, Göttingen)... Check the critical text before calling a reading 'the Greek'." The book says "I read the Greek (Swete and Rahlfs)", and the witness lines read "Septuagint (Rahlfs and Swete print this)". The `rahlfs-lxx` key sits on the entries. Nothing shows Rahlfs was read.
- **Why it matters.** The reader is told the Greek is the critical Old Greek when it is one codex.
- **Fix.** Either verify each Greek reading in Rahlfs and the Göttingen *Duodecim Prophetae* (Ziegler) and then say so, or change the witness lines to "Septuagint (Swete's text, mainly Codex Vaticanus)" and drop `rahlfs-lxx` and "Rahlfs" from the book.json wording.

**2. [major] variants.json 3:4 (forty or three days): the Greek witnesses are not identified, and the entry is thin for a brief-required full entry.**
- **Evidence.** The brief said "verify which Greek witnesses read which". The entry says "I checked the Greek in Swete and Rahlfs... I did not check other Greek manuscripts." Swete's Vaticanus text reads "ἔτι τρεῖς ἡμέραι". The tradition is also not given: Origen, Theodoret and Augustine all discussed the discrepancy, and Greek manuscripts and Hexapla witnesses are involved. I could not confirm the manuscript-by-manuscript picture in the time available, and neither did the writer.
- **Fix.** State what the Plain English Translation's source can show: Codex Vaticanus (Swete) has "three". Add the patristic witnesses that can be named exactly (Augustine, *City of God* 18.44, which is verified; Theodoret; Origen, which needs a precise reference). Say plainly that the other Greek manuscripts and the Hexapla evidence are not examined here. Drop the first-person "I checked / I did not check" wording in reader-facing text and name the edition instead.

**3. [major] variants.json / notes.json 4:6: a real variant is missing, 4Q82 "to shade" against MT "to rescue".**
- **Evidence.** The dss printout reads `4Q82 ... צל על [ראשו] ‹להצל› לו מרעתו`. The Masoretic Text has *lehatsil*, "to deliver". 4Q82 has *lehatsel*, which can read as "to shade". Swete's Greek reads "τοῦ εἶναι σκιὰν ὑπεράνω τῆς κεφαλῆς αὐτοῦ, τοῦ σκιάζειν αὐτῷ ἀπὸ τῶν κακῶν", "to shade him from his evils". The Greek and 4Q82 therefore agree against the Masoretic Text and Mur88 (*lehatsil*). The printout marks the difference as a candidate only (a yod), so the entry must be cautious.
- **Why it matters.** The Plain English Translation's "rescue him from his misery" and the note's mirror of the fish's "rescue" (and the second-fish theory) lean on *hatsil*.
- **Fix.** Add a 4:6 entry (the verb), stating that 4Q82's spelling and the Greek "shade" both allow "to shade him", that the Masoretic Text and Mur88 read "to rescue", and why the Plain English Translation follows the Masoretic Text (the "shade ... to shade" doubling is odd, and "rescue" fits 2:6). Soften the "rescue by a plant mirrors rescue by a fish" claims in the notes and the spec box until then.

**4. [major] variants.json: variant entries required by the brief are missing (1:10, 2:7, 2:8, 2:9, 3:3, 4:11), and two of them are substantive.**
- **Evidence.** The brief lists "where the sense changes at 1:5, 1:10, 2:4, 2:7, 2:8, 2:9, 3:3, 4:5, 4:6, 4:11". The file has 1:5, 2:4, 4:5 and 4:6 (twice), but not the rest. Swete's Greek differs in sense at:
  - **2:8 (Greek 2:9).** "φυλασσόμενοι μάταια καὶ ψευδῆ" adds "and false things", and the line has "ἔλεος αὐτῶν ἐγκατέλιπον", "they forsook their mercy". The note touches this but there is no entry.
  - **2:9 (Greek 2:10).** "μετὰ φωνῆς αἰνέσεως καὶ ἐξομολογήσεως" adds "praise and confession", and ends "σωτηρίου τῷ κυρίῳ", "[a sacrifice] of salvation to the LORD". That is not "Rescue is the LORD's".
  - **1:14.** The Greek reads "righteous blood" for "innocent blood".
  - **1:4.** The Greek reads "roused a wind" for "hurled a wind". That matters for the book's *tul* ("hurl") thread.
  - **1:17.** The Greek has "ordered" for *manah*, "appointed".
  - **4:2.** The Greek reads "repenting over the evils" for the Hebrew creed.
  - **4:1.** The Greek has "grief... was troubled", which is covered in a note.
- **Fix.** Add entries at least for 2:8, 2:9, 1:4 and 1:14. Add a one-line entry (or a stated "no sense change") for 1:10, 2:7, 3:3 and 4:11.

**5. [major] notes.json 2:5 ("Throat," "neck" or "life"?): false claim about the preposition.**
- **Evidence.** The note says "Jonah 2:5 uses the same word [as Psalm 69:1] with a different preposition." The Hebrew is the same: Jonah 2:5 `אֲפָפוּנִי מַיִם עַד־נֶפֶשׁ` and Psalm 69:1 `בָאוּ מַיִם עַד־נָפֶשׁ` (`texts/orig/Psa.json`). Both have `עַד`.
- **Fix.** Replace with "the same words 'the water... up to the throat'" and say the verbs differ (*'afafuni*, "surrounded me", against *ba'u*, "came"). The point is a stronger echo, not a weaker one.

**6. [major] chapters.json 3 `readings` "Read as history": states the Assyrian plague and eclipse as if they were evidence.**
- **Evidence.** "Assyrian records of plague and an eclipse in the 700s BC show the people were already afraid." No source links the eponym entries (plague 765 and 759 BC, eclipse 763 BC under Bur-Sagale, in the reign of Ashur-dan III) to Nineveh's repentance. The writer's own `deep` section and the H view say that "no ancient text does" link them, and that this is only something commentators suggest. The first statement contradicts the second. The eponym facts themselves are right: plague 765 and 759, eclipse 763, Millard SAAS 2 (1994), Ashur-dan III c. 772-755 BC.
- **Fix.** Rewrite as "Some commentators suggest the plagues and the eclipse recorded in the Assyrian eponym lists (765-759 BC) could have left the city anxious; no text connects them to Jonah." The H view says this correctly and can be reused.

---

## Minor

**7. [minor] plain.txt 2:4 and variants.json 2:4: "I will keep looking" departs from "again".**
- `אוֹסִיף לְהַבִּיט` is "I will again look" (*yasaf* + infinitive). The variant entry's own summary says "Yet I will look again" and the Greek is "shall I again look", but the Plain English Translation says "keep looking", which shifts the sense to continuing rather than looking at the temple again.
- Fix: "Even so, I will look again toward your holy temple", or explain in the note why "keep" is chosen.

**8. [minor] plain.txt 3:9: "turn" against "turn back".**
- The Hebrew `יָשׁוּב ... וְשָׁב` is the same verb twice, and Joel 2:14 (same words) is "turn back". The Plain English Translation has "God may turn and change his mind, and turn back". The same verb is "turned back" in 3:8 and 3:10. The note on 3:8 says "*shuv*, 'turn back', is used here and in 3:9 and 3:10".
- Fix: "God may turn back and change his mind, and turn back from his burning anger", or a variant of that. The pun between Nineveh's turning and God's turning is the book's art, and the Plain English Translation should keep it visible, as the brief and the Jeremiah pattern require.

**9. [minor] plain.txt 1:14: "do not make us perish".**
- `אַל־נָא נֹאבְדָה` is "let us not perish". The Plain English Translation adds a causing of the perishing that the Hebrew does not have. Fix: "do not let us perish for the life of this man".

**10. [minor] plain.txt 1:17: purpose becomes result.**
- `לִבְלֹעַ אֶת־יוֹנָה` is "to swallow Jonah" (purpose), against the Plain English Translation's "and it swallowed Jonah up". The "up" is not in the Hebrew. Fix: "appointed a huge fish to swallow Jonah." The fish is therefore the first of the "appointed" things.

**11. [minor] plain.txt 3:8: two small additions.**
- "sits in the palms of his hands" (`אֲשֶׁר בְּכַפֵּיהֶם`, "which is in their palms") adds "sits". "with all their strength" (`בְּחָזְקָה`) adds "all". Fix: "the violence in their hands", "with strength" or "urgently".
- Also 2:8 "their own loyal love": "own" is not in `חַסְדָּם`. If the Plain English Translation chooses reading (1), the note says it keeps the Hebrew "hard", so drop "own".

**12. [minor] chapters.json 4 `views.L`: the count of "appointments" is wrong.**
- It says "four 'appointments', three 'great' words (evil, anger, joy)". Chapter 4 has three (plant, worm, wind). The fish is in 1:17. The note at 4:8 says the wind is "the fourth thing", counting from the book.
- Also, "great anger" does not occur in the Hebrew: 4:1 has `רָעָה גְדוֹלָה` ("great evil") and `וַיִּחַר` ("burned"). The same slip appears in the 1:2 note, the 4:1 note ("great evil, great anger, great joy"), and book.json "How to read Jonah" (*gadol* of "the great city, wind, storm, fear, fish, anger and joy"). The "gadol" of 4:1 modifies the evil (or the displeasure), not the anger.
- Fix: "three appointments", and drop "anger" from every *gadol* list (keep "great displeasure/evil").

**13. [minor] variants.json: Mur88 is called a "Qumran scroll".**
- At 1:2, 2:5, 3:2, 3:4, 4:5, 4:6 and in the 4:11 note, Mur88 is a Wadi Murabba'at scroll, not a Qumran scroll (book.json says so correctly). Fix: "the Murabba'at scroll Mur88" and "Dead Sea region scrolls" where Qumran and Murabba'at are grouped.

**14. [minor] book.json "Jonah in Jewish life" and chapters.json 2, 4: Micah 7:18-20 is attached to a Bavli reference that does not contain it.**
- "The whole book is read on Yom Kippur... with Micah 7:18-20 added to it (Bavli Megillah 31a)". Megillah 31a gives Jonah as the Yom Kippur minchah haftarah; the addition of Micah 7:18-20 is a later custom of some communities. The OU and Sefaria pages on the Yom Kippur afternoon haftarah show Micah attached for some rites. Fix: put the Bavli citation after "Jonah is read at minchah" only, and add "in many communities Micah 7:18-20 follows".

**15. [minor] notes.json 3:7 (Animals in sackcloth): "The Greek puts 'the nobles' where the Hebrew has 'his great men'."**
- Swete's Greek has "τῶν μεγιστάνων αὐτοῦ", the normal Greek for *gedolav*. It is not a difference. Delete the sentence, or say the Greek agrees.

**16. [minor] notes.json 4:4: transliteration.**
- The Greek is `λελύπησαι` (*lelypēsai*), not "lelypese". Fix the spelling.

**17. [minor] notes.json 2:3 ("You hurled me"): *shalakh* is called "related" to *tul*.**
- *Shalakh* ("cast") and *tul* ("hurl") are different verbs, not related. Fix: "with a different verb of throwing (*shalakh*)". The Plain English Translation's "hurled" for both hides that the Hebrew changes verbs at 2:3. The note should say so.

**18. [minor] notes.json 1:2 history (Nineveh): garbled sentence.**
- "Genesis 10:11-12 says it was built from Babylonia and calls the area 'the great city'." The text says he (Nimrod) went out from Shinar to Assyria and built Nineveh, and "that is the great city" (probably the Nineveh-Calah complex). Fix: "Genesis 10:11-12 says it was built by Nimrod's people, who came out from Shinar (Babylonia), and calls the group of cities 'the great city'." The 1:2 note says elsewhere "Nineveh... became Assyria's capital under Sennacherib", which is fine.

**19. [minor] book.json "Date, unity and sources": the sea-monster parallels are said to be "weak: none shares the shape".**
- Overstated. The story of Heracles, swallowed by a sea monster (Hesione's), who spends three days inside and comes out hairless (Lycophron, *Alexandra*; later sources), shares the shape (swallowed, survives, comes out) and the three days. The brief asked to say the parallels are weak, which is fair, but "none shares the shape" is wrong. Fix: name the closest parallel and say they differ in point (and are late), or say "none shares both the shape and the point".

**20. [minor] book.json "Jonah in the church": "Jerome and Augustine wrote on the book at length".**
- True of Jerome (commentary), not of Augustine, who has no commentary on Jonah. He wrote letters (71, 82) and treated Jonah in *City of God* 18.30 and 18.44. Fix: "Jerome wrote a commentary; Augustine wrote on it in letters and the *City of God*". The same section's "From Justin Martyr on" is fine.

**21. [minor] book.json "Where Jonah sits among the Twelve": Bava Batra 15a.**
- The Twelve being counted as one book is Bava Batra 13b ("the Twelve Prophets... one"); 15a is the list of who wrote what. Cite 13b-15a, as the brief did.
- Also, in the Greek order Nahum follows Jonah directly, so "two books later" is Masoretic-order only. State that.

**22. [minor] chapters.json 2 `views.X`: duplicated clause and a stray capital.**
- "The fathers read the fish as the tomb and the psalm as the voice of the Savior from Sheol; Some fathers hear in it the voice of Christ in his descent." The two halves say the same thing, and "Some" is capitalized mid-sentence. Fix: one clause. Similar slips: ch3 `views.C` begins lowercase ("the past tense of..."); ch3 `views.L` has "a King".

**23. [minor] chapters.json 1 settings 1:8-12: the quoted question does not match the Plain English Translation.**
- The card quotes ("What people are you from?"), but the Plain English Translation 1:8 is "which people do you belong to?". Match the Plain English Translation. Also the 1:1-3 card asserts "Jonah hears it as a call to speak to an enemy and runs", but the text gives no reason until 4:2 (and the note at 1:3 says so). Soften: "Why he runs is not said until 4:2."

**24. [minor] chapters.json 2 settings: "from inside the fish, on the third day (1:17)".**
- The text does not date the prayer within the three days; "on the third day" is Pirkei de-R. Eliezer-type inference. Say "during the three days (1:17)".

**25. [minor] chapters.json traditions: gaps and a fairness point.**
- **Anabaptist.** The brief's plan named Anabaptist for the genre card. It is absent. Add it only with a source the writer can name, or leave it out and say so in the progress file.
- **Fasting card.** The Baptist, Coptic and Syriac lines carry no source, though the brief says to source each tradition. Name a confession or church document, or label the entry "common practice".
- **Salvation card.** The question "Were the Ninevites saved?" turns a temporal reprieve (3:10) into an eternal-salvation question, and the Reformed entry answers it with WCF 10.4 alone. Orthodox and Anglican are absent. Keep the question as the text allows ("what does Nineveh's repentance say about people outside Israel?") and add an Orthodox line.
- **`views` on the 4:2-3 setting.** The second view ("Jonah as a type of an unwilling Israel") is answered inside the card ("Jonah is a single prophet and the book is Jewish"). That makes the card argue with itself. State the view and its holders, and put the correction in the `deep` box where it already is.
- **Nostra Aetate 4.** It is cited for the repudiation of the "Jonah is Israel" reading, and "many Protestant churches" is unnamed. Nostra Aetate 4 rejects the idea that the Jews are rejected or accursed; it does not mention Jonah. Say "in the spirit of Nostra Aetate 4", name one or two churches' statements or drop "many Protestant churches".

**26. [minor] topics.json / book.json topics: the brief's contributions are incomplete.**
- No `book-of-the-twelve` contribution is present (the brief names it), though book.json has a section on it and the topic is a core owned by Hosea. The `day-of-atonement` topic is used (21 contributions); confirm it is not a near-duplicate of an existing Yom Kippur topic. The build passes, so the key exists.

**27. [minor] variants.json 2:6 and 4:5: small wording.**
- 2:6: Acts 2:27, 31 use *diaphthora*, not *phthora*; say "a related word". 4:5: "(Jonah travels away from it)" in the 'why' is unclear and reads as backwards. Say "he has left the city on the side away from Israel", or drop it.

**28. [minor] Unreported scroll spellings the note scheme treats as complete.**
- The 1:7 note ("agree with the Masoretic Text apart from spelling") and the 1:5/1:3 entries leave out differences that the printout marks as real forms. 4Q76 has `יפא` for Joppa (1:3) and `לים` for `אל הים` (1:5). 4Q82 has `כעלות` for `בעלות` (4:7), and Mur88 has `על` for `אל` in 3:8. None changes the sense. Either say "small differences not listed" or list them in a sentence.

---

## Verified (no action)

- **Numbering.** `heb` map is right (1:17 = Hebrew 2:1; English 2:1-10 = Hebrew 2:2-11).
- **Scroll claims.** All Dead Sea scroll claims in the notes and variants check against the printout (4:6 `אדוני` in 4Q82; 3:2 `כזות` in 4Q76; 2:6 `נפשי` in 4Q82; 1:8 `בשלמי` in 4Q76; 1:9 `עברי` in 4Q76, 4Q82 and Mur88; 3:4 "forty" in Mur88; 1:14 *naqi*; 2:8 and 2:10).
- **Greek readings read from Swete.** 1:2 *kraugē*, 1:5-6 *rhenchō*, 1:9 *doulos*, 2:5 *ara*, 2:6 *phthora*, 3:2 *emprosthen*, 3:4 *treis*, 4:5 *apenanti*, 4:6 *kolokynthē*.
- **Quotes of other books.** All quotes of other books match the site's Plain English Translation.
- **Assyrian record facts.** The eponym facts are real: plague in 765 and 759, the Bur-Sagale eclipse in 763 BC. The page states that no source links them to Jonah.
- **Mekhilta.** The Mekhilta point that Jonah would go outside the land, where the Shekhinah does not rest, because the Gentiles are near to repenting, is in the Mekhilta (Pisha 1, on Exodus 12:1) and is quoted by Rashi. The "honor of the son/honor of the Father" saying, which the 1:12 note's "gave themselves up for God's honor" draws on, is in the Mekhilta's opening section too. Both can stay; give the edition (Lauterbach) if a number is wanted.
- **Mishnah Ta'anit 2:1.** Matches ("not said of the men of Nineveh that God saw their sackcloth and fasting, but that he saw their works").
- **Other citations.** *Pirkei de-R. Eliezer* 10 (the sailors throw away idols and are circumcised; the fish's eyes) is correct. Jerome's preface reports the tradition of the widow of Zarephath's son. Augustine's Letter 71 and Jerome's Letter 112 are correct. *City of God* 18.44 treats forty against three days. Josephus has Tarshish as Tarsus (*Ant.* 1.127). Herodotus 9.24 is right for the animals' mourning; Herodotus 2.94 is right for *kiki*. Sixth Ode and Holy Saturday Vespers are correct for the Orthodox. WCF 2.1 and 10.4, Lumen Gentium 16, Catechism 1434 and Second Helvetic Confession ch. 24 are correct. Chicago Statement Art. XVIII is correct. ST I q.19 a.7 is correct. The Ugaritic Yam/Nahar pairing is right and fairly hedged.
- **Settings and fairness.** The genre debate is fair: five positions, named holders on both sides, no ranking. `readers` is present on all narrative settings. Specs are labeled "Claude's theory" with overlap with published readings stated.

## Fixes applied

1. Fixed. Rahlfs dropped everywhere: witness lines now read "Septuagint (Swete's text, mainly Codex Vaticanus)", `rahlfs-lxx` is removed from every entry and note, and book.json "Numbering, text and witnesses" says the Greek was read in Swete only and that Rahlfs-Hanhart and the Gottingen edition were not consulted. The Greek readings were re-read in the `tools/lxx.py` output for all four chapters.
2. Fixed. 3:4 now says what Swete's text shows (three, mainly Codex Vaticanus), names Augustine (City of God 18.44, the reference the reviewer confirmed) and the Vulgate, states that other Greek manuscripts, the Hexapla and the other Greek fathers were not examined, and drops "I checked / I did not check". Origen and Theodoret are not named because no exact reference could be verified here.
3. Fixed. New 4:6 entry on the verb (rescue or shade): 4Q82 `להצל` as transcribed (re-read with dss.py; the printout marks it as differing), Mur88 `להציל`, Greek "to shade him from his evils". The entry says one missing yod cannot decide, and why the Plain English Translation follows the Masoretic Text. The 4:6 "Misery" note and the spec box now say the mirror with the fish depends on the Masoretic reading and weakens if 4Q82 and the Greek are right. The book.json list of Greek differences mentions it too.
4. Fixed. Added entries for 1:4 (hurled/roused), 1:10 (no change of sense, stated), 1:14 (innocent/righteous blood), 1:17 (appointed a fish/ordered a sea creature), 2:7 (came/let it come), 2:8 (adds "false", "forsook their mercy"), 2:9 (adds "praise", "salvation" joined to the vow), 3:3 (Greek "about"), 4:2 (Greek "repenting over the evils") and 4:11 (no change of sense, stated). All were checked against the lxx.py and dss.py printouts. 4:1 (Greek "grief") stays in the 4:1 note only. Variants now 22 (was 11).
5. Fixed. The 2:5 note now says Jonah 2:5 and Psalm 69:1 have the same words "water ... up to the throat" (same preposition) and that only the verb differs (`afafuni` against `ba'u`).
6. Fixed. Chapter 3 "Read as history" now says some commentators suggest the eponym-list plague and eclipse (765-759 BC) could have left the city anxious, and that no text connects them to Jonah. The book.json H lens description is aligned.
7. Fixed. 2:4 Plain English Translation is "Even so, I will look again toward your holy temple" (yasaf + infinitive); the variant entry, anchor and "why" are updated.
8. Fixed. 3:9 Plain English Translation is "God may turn back and change his mind, and turn back from his burning anger", matching Joel 2:14 and keeping the repeated shuv visible.
9. Fixed. 1:14 Plain English Translation is "do not let us perish for the life of this man".
10. Fixed. 1:17 Plain English Translation is "The LORD appointed a huge fish to swallow Jonah." ("a huge fish" is the lead's fixed site term and stays); the note anchor is updated.
11. Fixed. 3:8 Plain English Translation is "the violence in his hands" and "call out to God with strength"; 2:8 drops "own" ("abandon their loyal love"). Notes, anchors, the chapter 2 summary and the topic quotes (prayer, hesed) are updated.
12. Fixed. The chapter 4 L view says three appointments (plant, worm, wind) and two "great" words (evil, joy). "Great anger" is removed from the 1:2 note, the 4:1 note (which now says the Hebrew has no "great" before "burned") and the book.json "How to read Jonah" list.
13. Fixed. Mur88 is now the "Murabba'at scroll" in every variant entry and in the 4:11 note; Qumran is used only for 4Q76, 4Q81 and 4Q82.
14. Fixed. The Bavli Megillah 31a reference now follows "Jonah is read at minchah" only, and Micah 7:18-20 is described as a later custom of many communities, in book.json, chapters 2 and 4, the 4:11 note, the lens description and the day-of-atonement contribution.
15. Fixed. The 3:7 sentence that claimed the Greek differs is replaced by a statement that the Greek agrees ("his nobles").
16. Fixed. `lelypesai`.
17. Fixed, at the cause. The 1:4 note now calls `shalakh` a different verb of throwing, not a related one, and the Plain English Translation at 2:3 is changed from "hurled" to "threw" so the English shows the change from `tul`. The 2:3 note title and anchor are updated; there is no fixed site term for `shalakh`.
18. Fixed. Genesis 10:11-12 is now described as Nimrod going out from Shinar to Assyria, with "the great city" naming the group of cities.
19. Fixed. The book.json sentence names the closest parallel (Heracles and the sea monster of Hesione: three days, comes out bald; Lycophron, Alexandra, and later writers), says it is late and differs in point, and says none shares both the shape and the point. The Lycophron detail comes from the reviewer and was not re-checked here.
20. Fixed. "Jerome wrote a commentary; Augustine wrote on it in letters (71 and 82) and in the City of God (18.30 and 18.44)". The letter and chapter numbers come from the reviewer.
21. Fixed. The "Twelve as one scroll" citation is Bava Batra 13b-15a, and the Nahum sentence gives the Masoretic order (two books later) and the Greek order (directly after Jonah). Bava Batra 15a stays in facts and authorship, where it concerns who wrote the Twelve.
22. Fixed. Chapter 2 X view is one clause; chapter 3 C starts with a capital; chapter 3 L has "king".
23. Fixed. The 1:8-12 card quotes "Which people do you belong to?", and the 1:1-3 card says why he runs is not said until 4:2.
24. Fixed. The prayer card now says "during the three days (1:17)".
25. Partly fixed. Anabaptist is not added (no source could be named; recorded in progress.md). Fasting card: the Coptic, Syriac, Ethiopian and Baptist lines are labeled as church or common practice, with no confession cited. Salvation card: the question is reframed as "What does Nineveh's repentance say about people outside Israel (3:5-10)?" and an Orthodox line is added (no source key, as in the other Orthodox lines). Anglican is not added: the site has no Anglican source key and none was verified. The 4:2-3 setting now states the Israel view as a Christian reading and leaves the answer to the box. Nostra Aetate 4 is described by what it says, "in the spirit of", and "many Protestant churches" is dropped.
26. Fixed. A `book-of-the-twelve` contribution is added to topics.json (and to the book.json topics list), matching the lead's topic in content/proposals/prophets/topics/book-of-the-twelve.json. `day-of-atonement` is a core topic in content/topics/, distinct from `atonement`, so not a duplicate.
27. Fixed. 2:6 says the Greek is close to `diaphthora` ("decay") in Acts 2:27, 31 and that Acts does not quote Jonah; 4:5 says Jonah has left the city on its eastern side, away from Israel.
28. Fixed. A sentence in book.json lists the unlisted forms (4Q76 `יפא` at 1:3 and `לים` at 1:5, 4Q82 `כעלות` at 4:7, Mur88 `על` for `אל` at 3:8) and says they change no sense; the 1:7 note points to it.

Declined: none. Lead decisions kept: "change his mind" for nacham and "a huge fish". Plain English Translation verses changed: 1:14, 1:17, 2:3, 2:4, 2:8, 3:8, 3:9. No other book's notes quote these verses (the build reports no quote warnings).
