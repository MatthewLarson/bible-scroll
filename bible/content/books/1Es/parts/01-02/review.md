# Hostile review: 1 Esdras 1-2 (part 01-02, Swete numbering)

## Verdict

This is careful, honest work. The Plain English Translation tracks the Greek closely, the parallel rule is kept in most verses, the one departure from Swete (1:33) is flagged with a variant, and I found no invented source, fragment or reading. Every Josephus claim I opened (Antiquities 10.74-78, 11.21-25, 11.15) and the Taanit 22b claims check out. The Greek of Chronicles (tools/lxx.py) matches what the notes say it has (katischysen, "morning", euodothe, ekraiaiothe, archontes kai archousai, 35:19a-d). `VERBOSE=1 node tools/build.js --check 1Es/01-02` gives 80 verses, 0 errors, 0 warnings. The problems:

- a second, unflagged departure from the base text (2:7);
- several flat factual errors in notes (the shin/sin "one letter" claim, other "one letter" claims, the verse-offset note, a miscited Judea list);
- one false sentence in the chapter 1 summary;
- scholarship, church-lens and "historians say" claims that nobody opened (STYLE rule 2);
- a parallel table whose "same" column is not what the English shows, and a few small parallel-rule slips.

No findings are critical. Unless a finding says otherwise, I verified it in a source I opened this session (the Greek, the Hebrew in texts/orig, tools/lxx.py, Swete's apparatus in texts/src/1Es.app.json, the site's Plain English Translation, or lexundria.com and Sefaria for Josephus and the Talmud).

Counts: critical 0, major 5, minor 16.

## Findings

### Major

1. **2:7 "rose up": a second departure from Swete, with no variant.**
   - Vaticanus (Swete's printed text) has `Καὶ καταστήσαντες οἱ ἀρχίφυλοι...`, "having set up, appointed". Alexandrinus has `κατασταντες` (apparatus at 2:7: `καταστησαντες] κατασταντες A`), "having stood up". The Plain English Translation "rose up" is A's sense and Ezra 1:5's (`ἀνέστησαν`). B's participle is transitive and has no object and no main verb.
   - The writer's own report says the book departs from Swete only at 1:33. This is a second departure, and the site gives readers no variant to switch.
   - Fix: add a variant at 2:7 (B `καταστήσαντες`, A `κατασταντες`, KJV "stood up"). Either translate B ("the heads of the families ... set themselves up / took their place") or state in `why` that the Plain English Translation follows A and Ezra, and mark it as a departure. List it among the departures in progress.md.

2. **1:30, note "Singers, rulers or chief men?": a false Hebrew claim.**
   - The note says `sarim` "princes" "differs from 'singers' only by one letter". In the unpointed text the two words are identical. The MT of 2 Chronicles 35:25 (texts/orig/2Ch.json) has `הַשָּׁרִים וְהַשָּׁרוֹת`, and "princes" is the same consonants, `שרים`, with the dot on the shin/sin the only difference.
   - This is exactly the point of the note (the Greek read the same letters another way) and it is stated wrongly.
   - Fix: "the same consonants, read as sarim 'princes' instead of sharim 'singers'". Do the same for the topic `textual-history` if it repeats it.

3. **Chapter 1 summary, second paragraph: a false claim.**
   - "Three sons and a grandson follow in twenty-two years, each one shorter-lived and worse." Within the book's own text, Jehoiakim reigns 25 years old at the start (no length given, 2Ch gives eleven), and Zedekiah reigns "eleven years" (1:44). So the reigns are three months, ?, three months and ten days, eleven years: not "each shorter".
   - "Twenty-two years" is computed from Chronicles' numbers, which 1 Esdras omits for Jehoiakim (1:37).
   - Fix: "Three sons and a grandson follow, two of them for only a few months, and none of them turns back."

4. **Scholarship, church and "historians say" claims that were not opened (STYLE rule 2; brief point 5).** No named scholar appears, which is correct. But these are stated as scholarship or as a church's reading, and nothing in sources-checked.md supports them:
   - chapters.json ch.1 `views.O`: an Orthodox reader meets 1 Esdras "as a second telling" and reads Josiah as "a lesson in repentance that comes too late for a nation". No Orthodox source is named.
   - chapters.json ch.2 `views.O`: "fits the Orthodox reading of God working through earthly rulers". No source is named. These are invented readings put in a church's mouth.
   - chapters.json ch.1 `views.H`: "adds no new historical facts to Kings and Chronicles", "several of its changes are mistakes". This is the writer's judgment given as the historian's.
   - chapters.json ch.1 `views.W` and ch.2 `views.W`: "Scholars in both traditions use it ..."; "commentaries on Ezra compare ...". No source is named.
   - chapters.json ch.2 `views.H`: "Historians accept ... on most reckonings ... usually taken as the work of the book's writer". No source is named.
   - notes 1:23: "which most historians read as going to help the last Assyrian king". Not checked.
   - notes 1:29: "Historians generally prefer the shorter account in Kings but cannot be sure." Not checked.
   - notes 2:1 and 2:15: "used in the scholarly debate", "Scholars debate whether ...". No holders, no source.
   - topics `first-esdras` "uncommon": "Some hold that 1 Esdras keeps an older arrangement". Nobody is named.
   - Fix: replace each with what was actually opened. For the O lens, quote or cite an Orthodox source (a Bible's preface, a Fathers text, the brief's Russian-numbering fact), or drop the lens text and say only what the churches hold. For the others, name the holder from a page opened this session (Wikipedia is acceptable if cited, per the lead notes' own practice) or delete.

5. **The parallel table's "same" column does not describe the English, and there are parallel-rule slips.**
   - Table: parallel.tsv marks 13 verses "same". Comparing the Plain English Translation with the Plain English Translation of 2 Chronicles and Ezra, only 1:17, 1:18, 1:20, 1:42, 2:2 and about two more are word-for-word. The rest differ in English.
     - 1:12: the Greek adds "brothers" and "sons of Aaron" (`ἀδελφοῖς αὐτῶν υἱοῖς Ἀαρών`) and the Plain English Translation has them, so the table's "same" is wrong.
     - 1:15: the Greek is `ἐφημερίαν` where Chronicles has "service", and the sense is "it is not allowed".
     - 1:16: `συνετελέσθη` "finished", not "set in order".
     - 1:39: "holy vessels", not "articles of the house".
     - 1:43: "A year later", not "At the turn of the year".
     - 1:54: "served".
     - 2:1: "that Cyrus reigned over the Persians".
   - The Plain English Translation is justified by the Greek in most of these; it is the table, the reported total ("same 13") and the ch.1 S-lens ("about 12 say the same") that are unreliable.
   - Slips where the Greek says the same as the Hebrew but the English is changed:
     - 1:54: `ἦσαν παῖδες αὐτῷ` is "served him", but 2Ch 36:20 has "became slaves to him" (same meaning in Greek `παῖδες`).
     - 1:51: "large and small", but 2Ch 36:18 has "big and small" (`τὰ μεγάλα καὶ τὰ μικρά`).
     - 1:50: "no girl" for `παρθένου`, but 2Ch 36:17 has "young woman" for the same pair.
     - 1:54 / 2:1: `ἐν στόματι Ἰερεμίου` is rendered "by ... mouth" in 1:54 and "from ... mouth" in 2:1, because each copies a different parallel. The Greek is identical both times.
     - 1:53: "at the point of the sword" adds a threat sense that `μετὰ ῥομφαίας` ("with the sword") does not state, and the gloss then says "as prisoners of war". Keep the literal, put the sense in the gloss.
   - Fix: redo the table honestly (same sense but English differs / identical / differs), correct the S-lens counts, and align the five slips with the parallel Plain English Translation.

### Minor

6. **notes 1:1 (numbering) gives the wrong offsets.**
   - The note says "From 1:13 on, the KJV number is one higher; from 1:16, two higher; from 1:49, three higher." From texts/en/1Es.json, Swete 1:10 holds KJV 1:10-11, so Swete 1:11 is KJV 1:12. The offsets are +1 from 1:11, +2 from 1:17 (Swete 1:16 holds KJV 1:17-18), and +3 from 1:50 (Swete 1:49 holds KJV 1:51-52).
   - Chapter 2 is right (+1 from 2:7; the letter 2:15-25 is KJV 2:16-30).
   - No KJV number is cited as this book's anywhere else; variants 1:14, 2:14 and 2:16 correctly say "in its numbering". Fix the three numbers.

7. **notes 1:19: the Judea list is wrong.** It cites "Judea (1:24, 30, 32)". 1:32 has no Judea (`τὸν Ἰεχονίαν υἱὸν Ἰωσείου`). The right references are 1:24, 1:30, 1:35, 1:37 and 1:44.

8. **notes 1:21: "eusebeia ... a Greek virtue word the Hebrew books never use" is misleading.**
   - The Greek Isaiah (tools/lxx.py Isa 11:2, 33:6) uses `εὐσέβεια` for the Hebrew fear of the LORD, and the Greek Proverbs do too.
   - Say instead that the Hebrew Chronicles has no such word and 1 Esdras's Greek vocabulary here is that of the Greek Bible. Or delete the sentence.

9. **notes 1:41: "the two kings' names differ by one letter".** The Hebrew (2 Kings 24:6, 24:8 in texts/orig/2Ki.json) is `יְהוֹיָקִים` against `יְהוֹיָכִין`: two letters differ (`ק`/`כ` and final `ם`/`ן`). Fix to "differ by two letters".

10. **variants 1:38: "The two Greek words differ by one letter".** `μετ᾽` against `ἐπ᾽` is not a one-letter difference. Drop the sentence or say "differ by a few letters".

11. **Variant attributions in 2:11, 1:9, 1:33 do not match Swete's sigla.**
    - 2:11: the apparatus has `Σαναβασσαρω (αναβ sup ras) Aᵃ`, a corrector of A, but the variant gives it as A. A's first hand may read as B does.
    - 1:9: it says the letters "for five thousand" are over an erasure, but Swete marks only `εισχ sup ras Aᵃ`.
    - 1:33, reading 1: the `orig` line merges two witnesses. Bᶜ has `ἀπεκατέστησεν ... του μη βασιλευειν`, while A has `ἀπέστησεν` with the `του μη`. The `w` text says so, but the Greek shown is neither witness. Show the two witnesses on separate lines.
    - Fix: carry the sigla exactly (Aᵃ).

12. **Missing variant at 1:11.** The apparatus (note at 1:22 page, "11 ... ηψησαν] ωπτησαν A") shows Alexandrinus reads "roasted" (`ὤπτησαν`) where Vaticanus has "boiled" (`ἥψησαν`) for the sacrifices. That bears directly on the note's Exodus 12:9 argument for this verse and the passover topic. Add a variant, or mention it in the note. (Minor others in the apparatus: 1:5 `ἁγίῳ`/`ἱερῷ` in A, 1:9 `Ὀχίηλος`/`Ζιηλος` in A, 1:23 `Χαρκαμυς`/`Καλχαμυς` in A: optional.)

13. **Names policy is applied unevenly.** The 1:8 note states the rule: usual English for a spelling of the Hebrew name, Greek form where 1 Esdras has another name.
    - Hilkiah and Zechariah are English, yet `Σαβίας` (Hashabiah), `Ἐδδεινοῦς` (Jeduthun, an A-spelling of the same name) and `Ἰεχονίας` (1:9, for Konaniah) are kept as Greek forms.
    - The Plain English Translation uses "Jeconiah" for two different men (1:9 and 1:32), and the Bible's Jeconiah is Jehoiachin (1 Chronicles 3:16).
    - Likewise "Jehoiakim" is both the king of 1:35-37 and his son of 1:41, with no in-text signal.
    - Mithridates renders two spellings (`Μιθριδάτης` 2:10, `Μιθραδάτης` 2:15; Swete's apparatus shows B's and A's own variation between them).
    - A reader of the Plain English Translation alone cannot tell the persons apart; the notes fix this only for those who open them.
    - Fix: state the rule once more completely, and add a one-line note at 1:9 (Jeconiah) and 1:35 (Jehoiakim) saying which Hebrew person is meant.

14. **"Temple servants" at 1:3 collides with the term.** content/terms.json fixes "temple servants" for the Nethinim ("note at first use in each book"). Using it for the Levites (`ἱερόδουλοι`, 1:3) makes the Plain English Translation say the same of two groups (5:29, 5:35 use the same Greek for the Nethinim). The note at 1:3 explains this, but the reader of the Plain English Translation alone will equate them. Consider "temple attendants of Israel" for 1:3 or a gloss, and keep the note.

15. **notes 2:20 and chapters ch.2 `views.H`: weak inference.**
    - "The change is one of the signs that 1 Esdras was made in the Greek period, not in Persian times." The Greek translator would modernize the Aramaic name in any case, so it does not show when the Hebrew or Aramaic source was made. The claim that the name "is a Greek-period name" is also unsourced here (I could not open anything that dates the term).
    - Fix: say only that the Greek has the name the Greek-speaking world used, and drop the dating inference or source it.

16. **Settings and readers (brief and STYLE).**
    - Missing: a setting for Jeremiah's lament (1:30, a song, with a "forever" custom for all Israel) and, optionally, Josiah's order to his servants (1:28).
    - The `readers` text is the same boilerplate five times. The brief asked for the main proposals with their holders (Egypt or Judea, 200s-100s BC). It says the first readers were "Greek-speaking Jews of the last centuries BC", which is stated as fact while the next clause says the date is debated.
    - "who follows 1 Esdras's wording and order": Josephus follows the order and many names, not the wording (he paraphrases).
    - 2:2-6 `when`: "first year of his reign over Babylon (538 BC)". The Greek says "over the Persians", and "over Babylon" is the writer's gloss. Say "first year of Cyrus".

17. **notes 1:20: 2 Kings 22:3 dates the sending of Shaphan, not the finding of the scroll.** The Plain English Translation of 2 Kings 22:3 is "In King Josiah's eighteenth year, the king sent Shaphan ...". The finding is 22:8, in the same year. Cite 22:3-8, or say "the repairs that led to the finding".

18. **notes 1:3 (ark): "a cave on Moses' mountain" is not in 2 Maccabees 2:5.** The Plain English Translation of 2 Maccabees 2:5 has "a room like a cave" and no mountain; the mountain is 2:4. The quoted words are right, but the attached claim needs "2:4-5". The statement "the ark's last appearance in the histories" is also qualified by the book's own 1:51 (`κιβωτούς`); the sentence already notes it, but the first line of the note should not say "last".

19. **notes 1:18: "keeps the comparison word for word with Chronicles".** The Greek wording is close but not identical (`ἀπὸ τῶν χρόνων Σαμουήλ` against Chronicles; I did not open 2Ch 35:18 in Greek to compare). Say "the same comparison" and not "word for word".

20. **Two spec notes carry hedge language.**
    - 1:11 ("not one I found in a source checked here") and 2:12 ("which I have not found in a source checked here"). STYLE rule 2 bars hedges of this kind in content, and the spec rule asks that overlap with published scholarship be stated.
    - Say "Claude's theory; I know of no published support" at most.
    - The 2:12 theory is also thin: `mishnim` means "second", and reading it as "two thousand" needs more than one step. Josephus's 2,400 and Alexandrinus's `δισχιλιαι τετρακοσιαι` suggest the 2,400 figure existed on its own, so say so.

21. **Small unsourced assertions in notes.**
    - 1:49: the Chaldeans "were the Aramaic-speaking tribes of southern Babylonia" is not checked (the language is debated).
    - 1:22: "like a witness standing to speak" is a guess presented as the Greek's picture.
    - 1:25: "Chronicles means it plainly" states the author's intent; mark it as one of the views.

## Checks that passed (so the writer does not redo them)

- **Parallel rule:** kept in nearly all verses; the only slips are in finding 5.
- **Quotes of other books** (2 Kings 22:3, 23:22, 23:29-30, 23:34, 24:6, 21:9; Jeremiah 3:16, 22:19, 25:11, 46:2; Leviticus 26:6, 26:34; Ezekiel 17:13, 17:19; Daniel 1:2; Zechariah 12:11; Ezra 2:66; 1 Corinthians 8:10; 1 Chronicles 3:16, 23:26; Lamentations 1:18, 4:20; Luke 2:1) match the site's Plain English Translation.
- **Josephus** (10.74 Neco "to reign over Asia", 10.75 Mendes, 10.76 "fate" and no warning from Jeremiah, 10.77 Egyptian archer and "died of that wound", 10.78 elegy "extant till this time", 11.21 Cambyses, 11.22 "historiographer" and "thy judges", 11.25 "excluded from thy passage", 11.15 the vessel counts) is accurate.
- **Taanit 22b:** Yohanan on not consulting Jeremiah, Rav on Neco's idol, Leviticus 26:6, Lamentations 1:18 and 4:20, and the sieve remark are all there.
- **Greek of Chronicles:** katischysen, "the able men in all Israel", "so for the morning", ὤπτησαν, euodothe, ekraiothe, Magedon, hoi archontes kai hai archousai, 35:19a-d, 36:5 additions, and "his father's brother" are all there.
- **Greek vocabulary notes:** `ἱερόδουλοι` also at 5:29, 5:35 and 8:5/8:22/8:48; `ἱεροψάλται` at 5:27; ephemeria in Luke 1:5, 1:8.
- **The 1:33 departure** is flagged, with a variant and a sound reason; Swete's `fixed` typos are mentioned where they matter (1:22).
- **No em-dashes** in any file. LORD/Lord follows the stated rule in every verse I checked. Judea/Judah follows the Greek. No named scholars appear.
- **Drift:** I found no sign of a modern translation shaping the wording. I did not open any copyrighted translation, so I cannot rule out close matches I did not compare; the Plain English Translation's shape follows the Greek and the Plain English Translation of Chronicles. No copyrighted text appears in content.

## Fixes applied

Fixer, 2026-10-31. Sources opened this session: .scratch/1es-01-02-fix/sources-checked.md; new parallel table .scratch/1es-01-02-fix/parallel.tsv (script partable.py).

1. Fixed (lead decision 1). Swete's B reading makes sense, so the Plain English Translation now follows it: 2:7 "set things in order" (καταστήσαντες, 1st aorist active "set in order, appoint", Wiktionary/LSJ senses), and a new variant gives A κατασταντες "rose up" (KJV "stood up"; Ezra 1:5 ἀνέστησαν). No new departure from Swete; the only departure stays 1:33.
2. Fixed: the 1:30 note now says the Greek read the same consonants שרים as sarim "princes" instead of sharim "singers", with only the shin/sin dot different (checked in texts/orig/2Ch.json). The textual-history topic does not repeat the claim.
3. Fixed: "Three sons and a grandson follow, two of them for only a few months, and the book says of three of them that they did what was evil in the LORD's eyes." "Twenty-two years" is gone.
4. Fixed. O views of both chapters now hold one sentence on what the book is in Orthodox Bibles (Orthodox Study Bible "1 Ezra"; Synodal "2 Ezra" among non-canonical books, per the Orthodox Theological Encyclopedia vol. 11; "never officially fixed one list", OSB introduction), with no claim about Orthodox use; the sources are cited on the 1:1 note. H views rewritten to dated facts with their sources (609, 597, 587 or 586 with Albright/Young and Thiele; 539, 520, 516; Bullard and Hatton on Artaxerxes I 465–424 and the book's order) and to what the text shows; "adds no new facts / mistakes" and "Historians accept..." removed. W views rewritten to Trent's list (vatican.va) and Article VI (churchofengland.org), quoted; "Scholars in both traditions" and "commentaries on Ezra" removed. Notes: 1:23 now states Neco went to help Assyria (Wikipedia, Josiah, linked); 1:29 "Historians generally prefer" deleted; 2:1 and 2:15 "scholarly debate"/"Scholars debate" replaced by what the text does not say; ch.2 deep box likewise; first-esdras "uncommon" (unnamed "some hold") removed and "common" now cites Bullard and Hatton ("only original material ... 3.1 to 5.6"). 1:25 "Readers have long been uneasy" removed.
5. Fixed. Table re-run by script against the current Plain English Translation of 2 Chronicles and Ezra: same 4 (1:17, 1:18, 1:20, 1:42), differs 74, no parallel 2; the old "same" rows now say what differs. S views corrected ("4 keep the wording word for word"; ch.2 "none word for word, 2:2 differs only in 'king of the Persians'"). Plain English Translation aligned: 1:50 "no young man or young woman, no old man or boy"; 1:51 "big and small"; 1:53 "with the sword" (gloss now carries "as prisoners under armed guard"; variant anchor updated); 1:54 "they became slaves to him and to his sons until the Persians came to rule ... by Jeremiah's mouth"; 2:1 "by Jeremiah's mouth" (same Greek ἐν στόματι as 1:54, as in 2 Chronicles 36:22).
6. Fixed: offsets +1 from 1:11, +2 from 1:17, +3 from 1:50, and chapter 2 "+1 from 2:7 to 2:17, more after that" (checked in texts/en kjva).
7. Fixed: Judea at 1:24, 1:30, 1:31, 1:35, 1:37, 1:44; 2:4.
8. Fixed: eusebeia now "belongs to the vocabulary of the Greek Bible, which uses it also in Isaiah 11:2" (lxx.py), with the Hebrew of Chronicles having nothing to match.
9. Fixed: "differ by two letters" (ק/כ and ם/ן, texts/orig/2Ki.json).
10. Fixed: the sentence is gone from the 1:38 variant.
11. Fixed: 2:11 reading now Aᵃ with αναβ over an erasure (note and sheshbazzar topic too); 1:9 now says only εισχ is over an erasure by Aᵃ; 1:33 split into three readings (Bᶜ ἀπεκατέστησεν ... τοῦ μὴ; A απεστησεν ... του μη; B*). Also per lead decisions 8 and 15: variant Greek at 1:22 (ἔστιν), 2:14 (Σαμανασσάρου) and 2:17 (τὴν) now copied from the corrected texts/orig, and the 1:22 note on the old digital typo removed.
12. Fixed: new variant at 1:11 (B ἥψησαν "boiled", A ωπτησαν "roasted"), with its bearing on the Exodus 12:9 note. The optional 1:5, 1:9 Ochiel and 1:23 Charkamys spellings declined: no change of sense.
13. Partly fixed. The 1:8 note now states the one rule for all parts (familiar English only for a spelling of the same Hebrew name; different names stay Greek; a known name given to a different man gets a note). New note at 1:9 "Which Jeconiah?"; the 1:35 note now says which Jehoiakim is meant, and 1:41's note already did. Declined: changing Sabias/Eddinus/Jeconiah(1:9) to the Hebrew names, since the Greek gives different names (lead decision 7); Mithridates kept as one English form for one man across both Greek spellings, now explained in the 2:15 note.
14. Partly fixed: kept "temple servants" (the works term for ἱερόδουλοι, so the same Greek reads the same), added a gloss at 1:3 ("the Levites ... not the lower 'temple servants' of 5:29") and a sentence in the note.
15. Fixed: the dating inference is gone; the 2:20 note now sources the name (Seleucid title of 217 BC, Wikipedia Coele-Syria, linked; 1 Maccabees 10:69; 2 Maccabees 3:5) and says only that the Greek uses the name its readers knew. The gloss now says "under the Greek kings, the name of southern Syria". The ch.2 H view refers to the note.
16. Fixed. New setting for Jeremiah's lament (1:30); Josiah's order to his servants (1:28) not added (one line inside a battle report). The stock readers paragraph is gone: the general statement is once on the chapter 1 page (new deep section, Bullard and Hatton on the date, Josephus as first named reader, "follows its order and many names, in his own words"); each card's readers now gives what is evidenced for that passage (Josephus 10.74–76, 10.78, 11.3, 11.21, 11.26–29; Taanit 22b) or is left out (1:3–6). 2:2–6 when: "In the first year of Cyrus king of the Persians (2:1), who had taken Babylon in 539 BC".
17. Fixed: "2 Kings 22:3–8" with the sending of Shaphan and the finding.
18. Fixed: "a room like a cave" on the mountain Moses climbed (2 Maccabees 2:4–5); the preview no longer says "last" without the 1:51 qualification.
19. Fixed: "the same comparison ... in slightly different Greek" (ἀπὸ τῶν χρόνων against ἀπό ἡμερῶν, lxx.py).
20. Fixed: both spec notes say "Claude's theory, for which I know of no published support"; the 2:12 theory now names its weak step and Josephus's 2,400 and Alexandrinus's written-out 2,400.
21. Fixed: 1:49 Chaldeans rewritten from Wikipedia (Chaldea, linked); 1:22 witness simile removed; 1:25 "Chronicles means it plainly" now "Taken at its word ... on this view".
Also: 1:27 "usually explained" Armageddon replaced by the Hebrew har Megiddo with a pointer to the Revelation note; 2:25 Josephus quote corrected to "brought a great company with them" (11.29); ch.2 J "letter-writers" corrected (Beeltethmus is in the reply, 11.26); 622 and 538 BC dates removed (no source opened gives them).
