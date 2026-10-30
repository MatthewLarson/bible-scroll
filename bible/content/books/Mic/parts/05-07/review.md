# Hostile review: Micah 5-7 (parts/05-07)

Checked: plain.txt against `node tools/literal.js Mic 5|6|7`, `texts/orig`, `tools/lxx.py`, `tools/dss.py` (4Q81, 4Q82, Mur88), the Matthew, Exodus, Jonah, Joel and Nahum Plain English Translation, sources, notes, variants, chapter pages, cards and topics. `VERBOSE=1 node tools/build.js --check Mic/05-07` gives 51 verses, 0 errors, 0 warnings.

## Verdict

This is a careful, mostly accurate part. The Plain English Translation follows the Hebrew closely, and the 5:1 numbering is stated correctly (Hebrew 4:14, then 5:2-15 = Hebrew 5:1-14; the Greek follows the English numbering, which `lxx.py` confirms). Matthew 2:6, 10:35-36 and 23:23 are quoted exactly, and the seven listed differences at 5:2 are accurate (one small omission, below). The scroll readings match the `dss.py` printout, and the Exodus-creed vocabulary (guilt, rebellion, loyal love, faithfulness) agrees with the Exodus, Jonah, Joel and Nahum Plain English Translation. The problems are mostly in the unverified list. One Talmud list is misreported (Sukkah 52b), one Vulgate reading is probably wrong, a manuscript detail (the Aleppo Codex at 7:3) looks invented, and the lectionary and doctrinal claims on the cards lack sourcing. The 5:2 card is thin and has no Baptist entry. Several flat statements should become "reported by" or be softened. There is no wholesale drift from NIV/ESV, but the 5:2 and 6:1 sentence shapes follow them and are worth recasting.

Count: 1 critical, 7 major, 15 minor.

---

## Findings

### 1. CRITICAL. 7:3 variant: the Aleppo Codex claim looks invented and contradicts itself
`variants.json` (7:3) says the Aleppo Codex "spells the vowel marks differently (*bashillum* with a dagesh)". The Leningrad pointing already has *bashillum* with the dagesh in the shin, so the claim describes no difference at all. Nothing in the tools, `texts/` or the sources supports an Aleppo reading, and `notes.json` (7:3) repeats it ("the Aleppo Codex spells the word differently, but with the same meaning"). An invented reading is critical.
**Fix:** remove the Aleppo clause from both places. Keep what the printout shows: 4Q82 and Mur88 carry the consonants בשלום (the Mur88 *shin-lamed-waw-mem* letters are visible), with no vowels.

### 2. MAJOR. 5:5 note: Sukkah 52b list of the seven shepherds is wrong
The note says the seven are "David in the middle, and the three patriarchs and Adam, Seth and Methuselah". Sukkah 52b has David in the middle, Adam, Seth and Methuselah on his right, and Abraham, Jacob and Moses on his left. "The three patriarchs" would be Abraham, Isaac and Jacob, and Isaac is not in the list. The eight princes (Jesse, Saul, Samuel, Amos, Zephaniah, Hezekiah, Elijah, the Messiah) are right, but the printed editions differ on Hezekiah (some read Zedekiah in that slot).
**Fix:** write "Adam, Seth, Methuselah, Abraham, Jacob and Moses, with David in the middle". Add that some witnesses read Zedekiah for Hezekiah. Source key `bavli-sukkah` is defined only in Genesis 37-50's sources; reuse is fine, but add it to this part's `sources.json`. Optionally add Rashi's remark that he does not know the source of the names, if verified.

### 3. MAJOR. 7:19 variant: the Vulgate reading "subiciet" is not the usual text
The variant gives the Latin as *subiciet iniquitates nostras* ("he will put our guilt under"). The Clementine Vulgate reads *deponet iniquitates nostras*, and the Nova Vulgata and Calvin's lemma read *calcabit* ("tread"). I could not confirm *subiciet* in any edition, and the "put our guilt down" translation matches neither. This is on the writer's unverified list. The 5:5, 5:6, 6:9, 6:10, 6:11, 6:14 and 7:11 Vulgate readings I could check (*octo primates hominum*, *in lanceis eius*, *salus erit timentibus nomen tuum*, *adhuc ignis in domo impii*, *numquid iustificabo stateram impiam*, *humiliatio tua*, *longe fiet lex*) are right.
**Fix:** change the Vulgate reading to *deponet* ("he will put away") or to "reported by the editions as *deponet* (Clementine) and *calcabit* (Nova Vulgata)". Only name the edition used.

### 4. MAJOR. 7:19: "our" versus "their" sins is never flagged
MT has "all **their** sins" (*chatotam*). The Plain English Translation keeps "their" right after "our guilt" and "us", with no note. The Greek (`lxx.py`) reads "our sins" (*pasas tas hamartias hemon*), and the Vulgate also has "our" (*peccata nostra*); NIV and ESV follow "our". The variant entry covers only *kavash*/*katadysei* and omits this, although 7:19 is an assigned variant slot and the card text rests on it. The LXX also makes the sins the subject of a passive ("will be thrown"), so the "he, then you" shift the note describes is MT only.
**Fix:** add a second reading to the 7:19 variant, or a note: MT "their", LXX and Vulgate "our", and why the Plain English Translation follows MT.

### 5. MAJOR. 5:2 tradition card: weak sourcing, no Baptist, one tradition overreaches
- **Missing tradition:** Baptist is absent, though `brief-mic.md` names it. The card also leaves out the typological/double-reference reading and the Jewish readings (Hezekiah or another king) the brief asked for; these appear only in notes.
- **Catholic:** Catechism 437 is about the angel's announcement to the shepherds and does not mention Micah. Saying it is "the Church's reading of this promise" is the writer's inference, not the Catechism's. Cite something that names Micah, such as the Lectionary for Mass (Micah 5:1-4a in its numbering, Advent 4C), or Jerome. Also state the Catholic answer to Matthew's changed quotation, which the question asks.
- **Orthodox:** the Vespers claim is correct (Micah 4:6-7 and 5:2-4 are in the Nativity Vespers readings, and 5:2-4 is in the First Hour). But the cited key `ware-orthodox` does not support a lectionary fact; it should cite the Festal Menaion or a service book. "Hears eternal generation in 'from days of old'" rests on Cyril, which is fine as named. No Orthodox answer about Matthew's changed words.
- **Lutheran:** the Fourth Sunday of Advent reading (Micah 5:2-5a, Series C in the LCMS/LSB lectionary) checks out. But the entry cites no sources (`[]`), and the claim that Matthew's words are "treated as the evangelist's inspired summary" is unsourced. Cite Luther on Micah 5 or a Lutheran dogmatician, or drop the sentence.
- **Reformed:** "Calvin treats Matthew's differences as giving the sense" is plausible and I did not verify the passage. Give the page or section of the commentary, not just the key.
- **Dispensationalist:** `pentecost-things` (Things to Come) is cited with no section. I could not confirm that Pentecost discusses Micah 5:3 this way. The closing sentence "This divides one passage between two comings" is editorial and reads as a jab.
**Fix:** add a Baptist entry (and a typological/double-reference entry) with named sources, source each lectionary claim as "reported by", and replace the Pentecost source with a verified one such as Feinberg's commentary or Walvoord, or label the position as described by the school.

### 6. MAJOR. 6:8 tradition card applies general soteriology, not the verse
All five entries cite confessions on good works (Trent 6.10-11, Augsburg 4, 6, 20, WCF 16 and 19, Heidelberg 86-87, London 1689 ch.16). None says anything about Micah 6:8. The citations are accurate as far as I can check, but a reader will assume these churches read Micah 6:8 this way. The Orthodox entry cites only Ware. The Baptist note "obedience follows personal faith and new birth" is the writer's gloss; 1689 ch.16 does not say it in those words.
**Fix:** label the card honestly ("how each church's doctrine of good works frames the verse") or add a named comment on 6:8 for at least the Reformed (Calvin on Micah 6:8, `calvin-micah`) and the Lutheran side. Source the Orthodox entry to a named teacher (for example Maximus or a Philokalia text). Soften the Baptist gloss.

### 7. MAJOR. 5:2 variants: 4Q81 appears in two contradictory entries, and the "slip" explanation is overconfident
Entry 2 lists 4Q81 as a witness to the plain MT reading of *be'alpe*. Entry 3 says 4Q81 has an extra "not" before "come out". In the printout, the word `«לא»` is **not** in brackets, while the words on both sides, `[לי]` and `[יצא]`, are. So the "not" is the visible, unrestored word, which the entry suggests is "damaged" and "cannot be checked". The explanation "a one-word slip by the scribe" and "likeliest cause" is a guess stated as a conclusion; dittography, a misread or the transcription itself are also possible. The entry cites `abegg-dssb`, which is *The Dead Sea Scrolls Bible* (a translation). The ETCBC/`dss.py` data is the Abegg-Bowley-Cook transcription, so the source key does not match what the entry says it used. `book.json` lists the Qumran witnesses as 4Q82 and Mur88 only and says both are close to MT; it never mentions 4Q81.
**Fix:** say what the printout shows (the unbracketed word `לא` between bracketed words), call the cause "unexplained; slip is only one suggestion", and say no translation follows it. Fix the source key or cite the ETCBC transcription. Tell the book.json owner to add 4Q81 (4QXIIf).

### 8. MAJOR. 5:2 note: "only Targum Jonathan and Rashi"; Jewish side thin, Ibn Ezra and Kimhi missing
The brief asks for Targum Jonathan, Rashi, Ibn Ezra and Kimhi. The Targum rendering (the Messiah will come out "before me"; "whose name was spoken from of old") is accurate, and Rashi's messianic reading is correct. But the note gives no Jewish view other than "Messiah", no reading of a historical king (Hezekiah, Zerubbabel), and no Jewish response to Matthew's use. The unverified list asked for "reported by" language. The Targum and Rashi are given as flat facts with no page; `rashi-micah` is defined but no passage is given.
**Fix:** add Ibn Ezra and Kimhi with what each says (verify first), or state that they were not checked. Use "reported by" for Targum and Rashi unless the text is read.

### 9. MINOR. 5:2 Plain English Translation follows NIV/ESV sentence shape
"But you, Bethlehem Ephrathah, ... clans of Judah. From you one will come out for me to be ruler over Israel. His origins are from ancient times" tracks the NIV order and diction (*clans of Judah*, *for me*, *ruler over Israel*, *origins*, *ancient times*). Most of this is the literal line, but "His origins are from ancient times" repeats NIV's final words. The same applies to 6:1 ("bring a case in front of the mountains, and let the hills hear you speak") against the ESV/NIV "plead your case before the mountains". The Hebrew *et* is "with", so "in front of" is also a decision the notes never mention.
**Fix:** for 5:2 use something like "His roots go back to the far past, to days long ago". For 6:1 consider "argue your case with the mountains" and note the "with/before" ambiguity.

### 10. MINOR. 5:3 has no note on the first clause
"So he will hand them over" has no antecedent in the Plain English Translation. The note covers the woman in labor and the brothers, but not who "he" and "them" are (the LORD gives up Israel, which is the usual reading, or the ruler). The dispensationalist card builds on the clause.
**Fix:** add a short note on "he" and "them", with the readings and the Greek ("he will give them").

### 11. MINOR. 5:3 note: "Matthew finds Mary in both"
The note says Matthew finds Mary in Micah 5:3 and Isaiah 7:14 (Matthew 1:22-23; 2:5-6). Matthew 2:5-6 quotes only 5:2 and never cites 5:3; Matthew 1:23 quotes Isaiah. The chapter-5 `views.X` repeats "The 'woman in labor' is read of Mary". The patristic link (Jerome, Cyril) is real, but the claim about Matthew is not.
**Fix:** "Matthew quotes Isaiah 7:14 (1:23) and Micah 5:2 (2:6); later Christian readers (for example Jerome) connect the woman of 5:3 with Mary."

### 12. MINOR. 5:2 note: the seven differences omit "for" (*gar*)
Matthew 2:6 adds "for" (*gar*). Strictly the quotation also drops "to be ruler over Israel" and rebuilds the last line as a clause from 2 Samuel 5:2. The list covers this under (4) and (6) but could say so.
**Fix:** add the "for", and say once that "ruler over Israel" is gone.

### 13. MINOR. Chapter 5 deep note states Matthew's changes as settled
"The differences are a matter of how the early church quoted Scripture, not of different Hebrew text" is stated flatly. Some scholars argue Matthew used a different textual or targumic tradition, and the note elsewhere says critical readers call it free quotation.
**Fix:** "Most scholars treat them as free quotation, not a different Hebrew text."

### 14. MINOR. 6:7 note and chapter 6 deep note: Micah does not say "I never commanded it"
The deep note "The firstborn question" says "The LORD's reply says he never asked for it. Jeremiah repeats the answer." Micah 6:8 does not say that; the phrase is Jeremiah 7:31, which the `notes.json` entry correctly attributes. Also, in the 6:7 note a sentence starts "the LORD says" in lower case.
**Fix:** "Micah's answer (6:8) does not mention the child; Jeremiah 7:31 has the LORD say he never commanded it." Capitalize "The LORD".

### 15. MINOR. 6:1 note: speaker description is off
"from 6:2 the LORD speaks of himself in the third person" is odd: 6:2 is the prophet speaking ("the LORD has a case"), and the LORD speaks in the first person from 6:3. The settings entry (prophet, then LORD at 6:3-5) is right.
**Fix:** "6:1-2 the prophet; the LORD speaks from 6:3".

### 16. MINOR. Chapter 6 `readings`: lawsuit given as fact
"A real courtroom form" is stated flat, while the 6:2 note says its status is disputed (de Roche).
**Fix:** "Read as a lawsuit (a form many scholars call the covenant lawsuit, though some doubt it was fixed)".

### 17. MINOR. 7:18 note: the long form of the name and Jeremiah 26:18
The note says Micah's "full name is *Mikhayahu*" and that Jeremiah 26:18's *ketiv* "has the long form". The *ketiv* is *Mikhayah* (Qere *Mikah*); *Mikhayahu* is the form in Judges 17. The pun is still right (*mi-kha-yah*), but the spelling claim is off. The chapter 7 deep note and the `names-of-god` topic repeat it.
**Fix:** "the name appears as *Mikhayah* (Jeremiah 26:18, *ketiv*) and in the longer form *Mikhayahu* elsewhere".

### 18. MINOR. 7:18 creed note omits that Nahum swaps "loyal love" for "power"
Nahum 1:3 in this site's Plain English Translation reads "slow to anger, his power is great", not "great in loyal love". The note says only that Nahum "adds" the unpunished clause. Jonah 4:2 and Joel 2:13 also add "changes his mind about the harm", which Micah does not. Micah also uses the "compassion" root (7:19) that the creed has in 34:6, which the note could mention.
**Fix:** one sentence on Nahum's substitution and on 7:19's *rachem*.

### 19. MINOR. 7:19 note: the tashlich sentence and gloss
"Where Jews say Micah 7:18-20 and symbolically cast away sins" and the gloss "cast crumbs into water" are fine as folk practice, but the Maharil (Jacob Moellin, c. 1365-1427) is reported as the earliest written source and objected to feeding the fish; the crumbs belong to later practice. Sources differ on his dates.
**Fix:** "described by the Maharil (in the Sefer Maharil, as quoted by Moses Isserles), later with crumbs". Mark the lectionary line "Roman lectionary: Saturday of Lent week 2 (Micah 7:14-15, 18-20 with Luke 15:1-3, 11-32)", which I confirmed.

### 20. MINOR. 5:12 note: "The Plain English Translation uses 'sorcery' and 'reads signs' in both places"
The Micah Plain English Translation says "sorceries" and "sign-readers". The note claims Deuteronomy 18:10 and 14 use "sorcery" and "reads signs" in this site's Plain English Translation. I did not find a matching Plain English Translation wording (`Deu` 18:10, 14), so this is a consistency claim that needs checking.
**Fix:** check `Deu/parts/*/plain.txt` 18:10-14 and align either place.

### 21. MINOR. 7:3 gloss and 7:14 note disagree with the Plain English Translation
The 7:14 note says the flock lives "in a forest, in the middle of rich land" while the Plain English Translation says "orchards". Also the 7:4 chapter note leaves out the Greek's first-person "I will take away their good things" (noted in the variant but not the note).
**Fix:** use "orchards" in the note.

### 22. MINOR. Same phrase, two verbs
Hebrew *ki yavo* (5:5 and 5:6) is "enters" in 5:5 and "invades" in 5:6. Same Hebrew, different English. (5:5 "treads on", 5:6 "treads across" are acceptable.)
**Fix:** use the same verb in both.

### 23. MINOR. Missing topic links
The 5:5 note says "see the topic on numerical sayings", but `numerical-sayings` is not in the chapter 5 `topics` list, and no `dew`, `bribery` or `child-sacrifice` contributions appear although the brief names them (7:3 bribes use `justice`; 6:7 uses `molech`). The 7:8 note files an unnamed enemy under `babylon`, although the text names no power; the 7:8 `top` should be a neutral topic.
**Fix:** add `numerical-sayings`; add or justify the brief's other topics; point 7:8 elsewhere.

### 24. MINOR. Cards and settings: small issues
- Trailing spaces in the 7:19 Catholic and Orthodox entries.
- Chapter 6 `views.F` ("some premillennial interpreters treat the justice of 6:8 as the standard of the coming kingdom") and `views.C` ("some assign it to a Deuteronomistic hand") name no scholar; give a name or cut.
- The chapter 5 `views.C` line on Wellhausen should be checked or softened ("thought most of 4-5 later").
- The chapter 7 `views.J` sentence "cites 6:8 in the same book's most famous saying" is unclear.

### 25. MINOR. Settings: debated audiences
The settings are generally good. Two small issues: 7:18-20 `by: The people, led by the prophet` is a guess stated as fact (add "or: the prophet alone; an editor"); 6:9-16 says "most prefer Jerusalem" without a source.
**Fix:** soften.

### 26. MINOR. book.json (other part) conflict to pass on
`book.json` "Verse numbers" says "Chapters 1 to 4 and 6 to 7 are numbered alike" in Hebrew and English, but English 4 has 13 verses and Hebrew 4 has 14; only the verse content of 4:1-13 matches. It also omits 4Q81. Not this part's file, but the 5:1 note and book.json should read alike.

---

## Checked and found sound (do not change)
- Plain English Translation: 5:1-6:16 and 7:1-20 match the literal line in sense and word order, with the open questions noted (the hard verses 6:9-14 are marked as difficult).
- Matthew 2:5-6, 10:35-36 and 23:23 are quoted exactly from the Plain English Translation.
- 6:8 "in humility" is defensible and fully noted (Sukkah 49b, the Greek "ready", *tsana'* hapax, Proverbs 11:2); Makkot 23b-24a (613 reduced to eleven, six, three, two, one, one) is reported accurately.
- Orthodox Nativity Vespers and Roman Lent lectionary pairings, the Lutheran Advent 4C reading, Pesachim 54a (name of the Messiah), Gunkel 1924, de Roche 1983, the Greek of 6:3, 6:9, 6:10, 6:13, 6:14, 6:16 ("Zambri"), 7:11-12, the Murabba'at and Qumran visibility claims (all except 7:3 Aleppo and 5:2 4Q81 wording).
- No em-dashes; no NIV/ESV verse is reproduced.

## Fixes applied

Plain English Translation verses changed: 5:2, 5:6, 6:1. No other book quotes these Plain English Translation verses (checked by search), so no quote sync is needed; Matthew 2:6, Exodus 34, Nahum 1:3 and Jonah 4:2 are unchanged. The `messiah` topic contribution that quoted 5:2 was updated.

1. Fixed (critical). Aleppo clause removed from the 7:3 variant and the 7:3 note; the variant now says only that 4Q82 and Mur88 carry the same consonants with no vowels.
2. Fixed. Sukkah 52b list corrected (Adam, Seth, Methuselah, Abraham, Jacob, Moses, David in the middle) in the 5:5 note and the chapter 5 Jewish lens; "some editions read Zedekiah for Hezekiah" added; `bavli-sukkah` added to this part's sources.json. Rashi's remark not added (not verified).
3. Fixed. Vulgate reading is now Clementine "deponet" ("he will put away"); Nova Vulgata "calcabit" given as "reported"; the entry names the edition used.
4. Fixed. New 7:19 variant on "all their sins" (MT) against "all our sins" (Greek, Vulgate), with the reason the Plain English Translation keeps "their" and the point that the Greek passive removes the he/you shift. The 7:19 subdue note points to it.
5. Partly fixed. The 5:2 card is rebuilt. Catechism 437 removed; Catholic now cites the Lectionary for Mass (reported), Jerome and CCC 115-119 (stated not to name Micah). Orthodox cites the Festal Menaion (reported) and Cyril instead of Ware. Lutheran cites the Lutheran Service Book lectionary (reported) and the unsourced "inspired summary" sentence is cut. Reformed says "reported", no page given. Baptist: no source checked, said plainly. Dispensationalist: framed as the usual pattern, section of Pentecost not checked, jab sentence cut. Each of Catholic, Orthodox and Lutheran states that no statement on Matthew's wording is cited. Not done: a separate typological/double-reference entry (no tradition name fits and no source was verified); it is stated in the 5:2 "Who is the ruler?" note instead.
6. Partly fixed. No Micah 6:8 commentary could be verified for the five churches, so the card is relabeled: the question now says none of the texts comments on the verse and that they show each church's doctrine of good works. Orthodox says "as Ware describes" and that no Orthodox teacher is cited; the Baptist gloss is cut back to what 1689 chapter 16 says.
7. Fixed. The two 4Q81 entries are reconciled: the first now says the transcription prints the word; the second says the "not" is unbracketed between bracketed words, its cause is unexplained (the "slip" guess is no longer the stated cause), and no translation follows it. Source key changed from `abegg-dssb` to `etcbc-dss`. 4Q81 could not be re-run in this environment (the dss.py setup is absent), so the printout description is taken from the review; the book.json owner should add 4Q81 (4QXII-f).
8. Partly fixed. Targum Jonathan and Rashi are now "reported"; Ibn Ezra and Kimhi are stated as not checked, as is any Jewish reading of a historical king and any Jewish reply to Matthew. Their texts were not available to verify, so nothing is invented.
9. Fixed. 5:2 now reads "ruler in Israel" and "His origins reach back to the distant past, to days of long ago"; 6:1 now reads "argue your case with the mountains, ... hear your voice". The 6:1 note explains Hebrew `et` ("with") against "before". Anchors and the messiah topic updated.
10. Fixed. New note at 5:3 on "he" and "them" (the LORD gives Israel up, the usual reading; the ruler as subject, a few; the Greek).
11. Fixed. 5:3 note and chapter 5 Christian lens: Matthew quotes Isaiah 7:14 and Micah 5:2 only; later readers such as Jerome link the woman with Mary.
12. Fixed. The Matthew differences list now has eight items, including the added "for" (gar) and the loss of "to be ruler over Israel".
13. Fixed. Chapter 5 deep note: "Most scholars treat the differences as free quotation", with the dissenting view stated.
14. Fixed. Chapter 6 deep note now says Micah 6:8 does not mention the child and Jeremiah 7:31 has the LORD say he never commanded it; "The LORD" capitalized in the 6:7 note.
15. Fixed. 6:1 note: the prophet speaks 6:1-2, the LORD in the first person from 6:3.
16. Fixed. Chapter 6 reading now "Read as a lawsuit ... though some doubt it was a fixed form".
17. Fixed. Name forms stated as Mikhah (1:1), Mikhayah (Jeremiah 26:18 ketiv), Mikhayahu for other men of the name (Judges 17); the 7:18 note, the chapter 7 deep note and the `names-of-god` topic are corrected.
18. Fixed. The 7:18 creed note adds Nahum's swap of "loyal love" for "power", the "changes his mind about the harm" clause in Jonah and Joel, and the "compassion" root at 7:19.
19. Fixed. Tashlich now "reported in the customs of the Maharil ... and in the notes of Moses Isserles", crumbs as later practice, dates "differ"; the lectionary line is "Saturday of the second week of Lent (Micah 7:14-15, 18-20 with Luke 15:1-3, 11-32)" in the note and chapter 7.
20. Fixed. Checked the Deuteronomy Plain English Translation (18:10 "works sorcery", "read signs"); the note now states the real wording and calls Micah's forms the matching nouns.
21. Fixed. The 7:14 note now says "orchards"; the 7:4 note now mentions the Greek first-person line and points to the 7:3 variant.
22. Fixed. 5:6 now uses "enters" as in 5:5 ("when it enters our land").
23. Partly fixed. `numerical-sayings` added to the chapter 5 topics and the 5:5 note names it; the 7:8 note moved from `babylon` to `lament`. No `dew` or `bribery` topic pages exist, so none were added (7:3 bribes stay under `justice`); `child-sacrifice` is covered by `molech` at 6:7.
24. Fixed. Trailing spaces trimmed from the 7:19 card; chapter 6 views F and C unnamed clauses cut; Wellhausen softened to "reported to have judged"; chapter 7 view J reworded to say Makkot 23b-24a counts 6:8 as Micah's three.
25. Fixed. 7:18-20 "by" now offers the prophet alone or an editor; 6:9-16 now says "others prefer Jerusalem" with no claimed majority.
26. Not this part's file. For the book.json owner (parts/01-04): add 4Q81 (4QXII-f) to the Qumran witnesses, and correct "Chapters 1 to 4 and 6 to 7 are numbered alike", since English 4 has 13 verses and Hebrew 4 has 14 (only the content of 4:1-13 matches). The 5:1 note here already states the numbering correctly.
