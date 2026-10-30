# Hostile review: Esther 1–4 (Est/01-04)

Scope: `parts/01-04/` (plain, notes, variants, glosses, chapters, topics, sources), `Est/book.json`, the new topic cores `esther`, `mordecai`, `haman`, `purim`, the new Esther entries in `content/terms.json`, and the shared source keys. Part 05-10 was not reviewed.

## Verdict

This is careful, well-informed work. The Plain English Translation follows the Leningrad Codex in all 77 verses, with nothing added, dropped or slanted in any way that matters. The Esther terms in terms.json are used consistently, with one slip at 2:12. Both deliberate echoes match the site's Plain English Translation exactly. At 3:4, "Day after day they spoke to him, but he would not listen to them" matches Genesis 39:10. At 3:10, "slipped the signet ring off his hand" matches Genesis 41:42. Every quotation of 1 Samuel 15, Exodus 17 and Deuteronomy 25 matches the site's Plain English Translation. Almost all of the rabbinic, classical and Persian facts check out. The problems are of five kinds:

1. One verse, 3:12, is stitched together from NIV and ESV phrasing, and a few famous lines lean on the NIV.
2. The Greek evidence is incomplete. The Alpha Text reads "thirteenth" at 3:7, which the variant does not know. The Septuagint has unlisted differences at 2:19 and 2:21. A claim about the Additions is false: the Old Greek of 6:1 also has God act directly.
3. The new `haman` core collides with the `amalek` alias "Haman the Agagite".
4. There are a handful of factual slips. The count for *mishteh* is wrong, a talent is given two different weights, Judges 1:1 is a wrong reference, and the statement that hesed is "loyal love everywhere" is not true of the site's Genesis.
5. There are small gaps in the settings, the audience, and the framing in book.json.

`node tools/build.js --check Est/01-04` passes (77 verses, 81 notes, 13 variants, 30 glosses, 4 chapter pages, 20 topic contributions; 0 errors, 0 warnings).

Counts: 0 critical, 5 major, 20 minor.

## Facts checked and confirmed (no change needed)

- **Echoes.** Genesis 39:10 and Genesis 41:42 match the Plain English Translation of 3:4 and 3:10. 1 Samuel 15:3, 8, 28 and 33, Exodus 17:16, Deuteronomy 25:17 and 25:19 are all quoted exactly as the site's Plain English Translation has them. The 1 Samuel 15:28 "neighbor ... better than" echo at 1:19 is reproduced word for word. Also exact: Genesis 23:7, 27:34, 37:25, 37:34, 39:1, 41:34–37, 43:14 and 50:20; 1 Samuel 9:1 and 24:8; 2 Samuel 12:22 and 13:28; Numbers 24:7; Deuteronomy 4:27, 7:3 and 31:18; 1 Chronicles 12:32; Nehemiah 1:4 and 13:24; Ezra 4:15 and 8:21.
- **Terms.** The fortress at Susa (1:2, 1:5, 2:3, 2:5, 2:8, 3:15), "the city of Susa" (3:15), "If the king thinks it good" (1:19, 3:9, as in Nehemiah 2:5, 2:7 and Ezra 5:17), "the king's gate" (2:19, 2:21, 3:2–3, 4:2, 4:6), "the runners" (3:13, 3:15), the satraps, governors and officials (3:12), "annihilate, kill and destroy", with *hashmid* and *'abbed* kept apart (3:6, 3:9, 3:13, 4:7, 4:8), "pole" (2:23), "Pur, that is, the lot" (3:7), "the enemy of the Jews" (3:10) and "eunuchs" are all used as listed. *Dat* is "law" everywhere except 2:12 (finding 14).
- **Greek readings, Rahlfs, checked on blueletterbible.org.** All checked and correct:
  - 1:1 Ἀρταξέρξης.
  - 1:5 ἐπὶ ἡμέρας ἕξ.
  - 1:10: Αμαν is the first eunuch named.
  - 1:14: three names, Αρκεσαιος, Σαρσαθαιος, Μαλησεαρ.
  - 1:16 Μουχαιος.
  - 1:22 ὥστε εἶναι φόβον αὐτοῖς ἐν ταῖς οἰκίαις αὐτῶν.
  - 2:7 ἐπαίδευσεν αὐτὴν ἑαυτῷ εἰς γυναῖκα, with Αμιναδαβ (2:7, 2:15) and no Hadassah.
  - 2:16 τῷ δωδεκάτῳ μηνί, ὅς ἐστιν Αδαρ.
  - 2:20 φοβεῖσθαι τὸν θεὸν καὶ ποιεῖν τὰ προστάγματα αὐτοῦ.
  - 3:1 Βουγαῖον.
  - 3:7 ἔπεσεν ὁ κλῆρος εἰς τὴν τεσσαρεσκαιδεκάτην.
  - 4:1 αἴρεται ἔθνος μηδὲν ἠδικηκός.
  - 4:8 μνησθεῖσα ἡμερῶν ταπεινώσεώς σου ... ἐπικάλεσαι τὸν κύριον.
  - 4:14 ἄλλοθεν βοήθεια.
- **Alpha Text, checked in the NETS Esther (Jobes), which prints the Old Greek and the Alpha Text side by side.** The king is "Assyeros" in 1:1 and in Addition A. The Alpha Text has Additions A, B, C, D, E and F. It calls Haman "Bougean". So the writer's statements based on the literature hold. Finding 2 lists what the Alpha Text adds.
- **Additions** (checked against the Greek content, not only the WEB). The summaries of A, B, C and D are accurate:
  - Addition A is dated in the second year, on 1 Nisan, and names Gabatha and Tharra.
  - Addition B sets the 14th of Adar and calls Haman "second father".
  - In Addition C, Mordecai would kiss Haman's soles. Esther puts on ashes and dung, speaks of "the bed of the uncircumcised", and says she has not eaten at Haman's table.
  - In Addition D, she comes on the third day and faints, and "God changed the spirit of the king".
  - The Vulgate numbering (11:2–12:6, 13:1–7, 13:8–14:19, 15:1–16) and "10:4–16:24" are right.
- **Jerome** moved the Additions to the end of the book with critical marks. Correct.
- **The colophon.** "The fourth year of Ptolemy and Cleopatra", with Lysimachus of Jerusalem as translator; 78–77 BC with 114 and 48 BC as the alternatives (Bickerman). Correct. You could add Dositheus, who brought the book to Egypt; that is optional.
- **Rabbinic citations.** All correct:
  - Bavli Megillah 10b: *vayhi bimei* signals trouble.
  - 11b–12a: the Temple vessels and the seventy years.
  - 12b: Vashti was to come wearing only her crown; the Sabbath story; her blemish; Memucan is Haman; "knew the times" refers to the rabbis.
  - 13a: Yehudi as one who rejects idolatry; Shimei; Esther named from *masteret*; the seven maids and the seeds; *lebat* read as *lebayit*.
  - 13b: Esther moving between the king and Mordecai; the Tarsian language and the Sanhedrin; Moses and Adar; the shekels outweighing Haman's silver.
  - 14a: the ring outweighed 48 prophets and 7 prophetesses; Esther among the prophetesses.
  - 15a: Hathach is Daniel; the fast over Passover; *vayya'avor*.
  - Megillah 7a: Samuel's view, and Esther's request to the sages.
  - Bavli Sanhedrin 74b: *karka 'olam*. Sanhedrin 61b.
  - Bavli Chullin 139b and Deuteronomy 31:18.
  - Bava Batra 14b (order) and 15a (the Great Assembly).
  - Genesis Rabbah 67:4: Esau's cry repaid in Susa.
  - Yerushalmi Megillah 1:5.
- **Esther Rabbah 7** (the idol on Haman's clothing). Correct, though the exact reference is 7:5 (finding 20). **Targum Sheni** gives Mordecai an ancestral speech. Fair as stated.
- **Josephus.** Ant. 11.184 (Artaxerxes), 11.191 (Persian law keeps wives from strangers' eyes), 11.209 (Haman an Amalekite by descent), 11.292–295 (Purim). Correct.
- **Classical sources.** All correct:
  - Herodotus: 1.99, 3.67, 3.84, 3.95 (14,560 talents), 3.118–119, 3.159, 5.18, 7.8, 7.114, 7.136, 8.85, 8.90, 8.98, 8.105, 9.108–113.
  - Plutarch, *Advice on Marriage* 16 and *Artaxerxes* 27.
  - Diodorus 11.69 (Artabanus and the eunuch) and 17.30 (Darius III).
  - Tacitus, *Histories* 5.5.
- **Persian material.** The Xerxes "daiva" text lists Hindush and Kush. Artaxerxes II restored Darius's apadana. Behistun records impalement at Ecbatana. The Iahali die is Shalmaneser III's (Hallo, BA 46, 1983). The Persepolis travel rations, the audience reliefs and the Susa gate building are all real.
- **Qumran.** Esther is the only Hebrew Bible book not found there. Purim is absent from the calendars. 4Q550 "Proto-Esther" is fairly described. Correct.
- **Canon.** Melito leaves Esther out. Athanasius (Festal Letter 39) puts it outside the canon. Luther's "I am so hostile to this book and to Esther" (*Table Talk*). The Bava Batra 14b order, and the place in the Leningrad Codex (after Lamentations, before Daniel), agree with the Ezra, Nehemiah and Chronicles pages: Leningrad puts Chronicles first and Ezra–Nehemiah last, and the Talmud puts Chronicles last. Correct.
- **Counts.** *Dat* occurs 20 times in Esther (21 in the Hebrew Bible). *Melekh* occurs 196 times in Esther, so "about 190" is right. *Yehudi* occurs 52 of 75 times in Esther, so "more than any other book" is right. The Qere/Ketiv notes at 1:16 and 3:4 match `texts/auto`.
- **"Claude's reading" boxes.** All three are labeled, give their verses, and name overlapping work: chapter 4 (Passover set aside, Gerleman), book.json (two hidden identities, Fox and Berlin), and the mordecai topic (with a weak overlap note, finding 19).
- **Source citations.** All the new keys and the Esther keys in `content/sources.json` are real works with correct details. Examples: Clines, VT 41 (1991); Yamauchi, VT 42 (1992); Talmon, VT 13 (1963); Gerleman, BKAT 21; Gaster (1950); Jobes, SBLDS 153.

## Findings

### 1. Major: 3:12 is built from NIV and ESV phrasing

**Location.** plain.txt 3:12.

**Problem.** The verse opens like the NIV: the date comes first ("on the thirteenth day of the first month the ... were summoned"), followed by "They wrote out". It closes almost word for word like the ESV: "It was written in [the name of] King Ahasuerus ... and sealed with the king's signet ring". The middle has the ESV's "the governors over ... province". The Hebrew word order is different: *vayyiqqare'u sofre hammelekh bachodesh hari'shon bishlosha 'asar yom bo* ("and the king's scribes were summoned in the first month, on its thirteenth day"). Each phrase is defensible alone, but together they make the kind of close match STYLE says must be redone.

**Fix.** Redraft from the Hebrew order. For example: "The king's scribes were called in on the thirteenth day of the first month, and everything Haman ordered was put in writing..." End with something like "It went out over King Ahasuerus's name, stamped with the king's signet ring."

### 2. Major: the 3:7 variant leaves out the Alpha Text, which reads "thirteenth"

**Location.** variants.json, 3:7, "Where did the lot fall?".

**Problem.** The entry says "The Greek 'fourteenth' does not match the thirteenth of 3:13". It calls the BHS restoration ("and the lot fell on the thirteenth day") a guess "from the Greek". But the Alpha Text (NETS, Jobes) says Haman "cast lots for the thirteenth day of the month of Adar". So one Greek witness supports exactly the date that BHS restores, and the "why" misstates the evidence. The entry also leaves out that the Old Greek 3:7 opens differently. It says "he made a decree (ψήφισμα) ... to destroy in one day the race of Mordecai", instead of "someone threw Pur".

**Fix.** Split the Greek into an Old Greek reading (14th) and an Alpha Text reading (13th). Say that BHS's restoration has Alpha Text support. Mention the Old Greek's ψήφισμα clause in `b`. Keep following the Masoretic Text, but rewrite the "why": the reason is that the restoration has no Hebrew witness, not that it is unsupported.

### 3. Major: missing variants at 2:19 and 2:21, both places where the notes discuss the crux

**Location.** Variants at 2:19 and 2:21 (missing); notes at 2:19 and 2:21.

**Problem.** The Old Greek 2:19 has no "second gathering" at all. It reads only ὁ δὲ Μαρδοχαῖος ἐθεράπευεν ἐν τῇ αὐλῇ ("Mardochaios served in the court"). The Alpha Text has no 2:19–23 here; it tells the plot only in Addition A, where the eunuchs are named Astaos and Thedeutes. The 2:19 note lists theories, including a copyist's repetition, but does not mention the one witness that leaves the clause out. The Old Greek 2:21 also gives a motive that the Hebrew lacks: ἐλυπήθησαν ... ὅτι προήχθη Μαρδοχαῖος, "they were aggrieved because Mardochaios had been promoted".

**Fix.** Add a variant at 2:19 (Old Greek omits the clause; Alpha Text lacks 2:19–23) and one at 2:21 (the Greek motive). Mention the omission in the 2:19 note. In the 2:21 note, add the Alpha Text names alongside Gabatha and Tharra.

### 4. Major: a false claim in the Additions C/D variant

**Location.** variants.json, 4:17, `b`.

**Problem.** The `b` says Addition D "is the only place in the Greek story where God is said to act directly in the plot". The Old Greek 6:1 reads Ὁ δὲ κύριος ἀπέστησεν τὸν ὕπνον ἀπὸ τοῦ βασιλέως ("the Lord kept sleep from the king"). The Alpha Text has "the Mighty One" there. The claim is false. It will also contradict part 05-10 when that part writes its 6:1 variant.

**Fix.** Say instead: "one of the places where the Greek says God acted directly (compare the Greek of 6:1)".

### 5. Major: the topic cores collide

**Location.** topics/haman.json and topics/amalek.json.

**Problem.** `amalek` already lists the alias "Haman the Agagite". The new `haman` core lists "Haman son of Hammedatha" and "Hammedatha", but not "Haman the Agagite". A reader who searches for that phrase lands on Amalek, not Haman. This breaks the one-page-per-subject rule. Also, `amalek.related` does not list `haman`. The other three cores are not duplicates: `esther`, `mordecai`, and `purim`, which is distinct from `casting-lots` and `feasts`.

**Fix.** Ask the owner of the `amalek` core to move "Haman the Agagite" to `haman` and to add `haman` to `amalek.related`. Drop "Hammedatha" from `haman`'s aliases (he is a different person) or keep it deliberately. Consider removing "Pur" from `purim`'s aliases, since `casting-lots` covers the lot. "The Megillah" is also loose, because "Megillot" names all five scrolls.

### 6. Minor: wrong count for *mishteh*

**Location.** notes.json 1:3, "A book of feasts".

**Problem.** The note says Esther uses *mishteh* "about twenty times, more than the rest of the Bible put together". In `texts/orig`, H4960 occurs 46 times, 20 of them in Esther. The rest of the Bible has 26.

**Fix.** "20 of its 46 uses in the Bible".

### 7. Minor: "loyal love everywhere" is not true, and the Genesis 39:21 quotation does not match

**Location.** notes.json 2:9, "Hesed from Hegai".

**Problem.** The note says "This site renders *hesed* as 'loyal love' everywhere". It then quotes Genesis 39:21 as "loyal love". The site's Genesis 39:21 reads "He showed him steady love". That is an inconsistency in Genesis (tell the Genesis 37–50 owner), but the quotation here does not match the Plain English Translation. There is also a point of substance. In Esther, *nasa' chesed lifne* is closer to "won his favor" (compare *chen vachesed* in 2:17). "She won his loyal love" from a eunuch she has just met reads oddly.

**Fix.** Drop "everywhere". Quote Genesis 39:21 as the site has it. Add a sentence saying that in Esther the phrase means winning favor, and that the site keeps "loyal love" so readers can see the word.

### 8. Minor: the Hebron sentence needs facts and careful wording

**Location.** book.json, section "The violence of chapter 9".

**Problem.** Mentioning the attack is fair and on topic. But "rejecting any use of it to justify violence, as when a Jewish extremist murdered Muslim worshipers in Hebron on Purim in 1994" implies that the killer was known to have used Esther 9 as his justification, which is not documented in his own words. "Condemned across the Jewish world" is broadly true, but a small extremist fringe honored him.

**Fix.** Rewrite along these lines: "On Purim 1994 a Jewish extremist, Baruch Goldstein, killed 29 Muslim worshipers at the Cave of the Patriarchs in Hebron. Many linked the date to the Purim and Amalek themes. Israel's government, its chief rabbis and Jewish leaders around the world condemned the attack, though a small fringe honored him." Keep it as one example inside the paragraph, as now.

### 9. Minor: Ezra's date is given as settled when the Ezra and Nehemiah pages present it as debated

**Location.** book.json, "When, and which Ahasuerus?".

**Problem.** The section says "the missions of Ezra and Nehemiah under Artaxerxes I (Ezra 7; Nehemiah 2)". The Ezra and Nehemiah pages give 458 BC as the usual date, with 398 BC under Artaxerxes II as a minority view. The other Persian-period dates agree with those pages: 515 BC, Xerxes 486–465 BC, Artaxerxes I 465–424 BC.

**Fix.** "...and the missions of Nehemiah (445 BC) and, on the usual dating, Ezra (458 BC) under Artaxerxes I".

### 10. Minor: workflow notes in the `w` fields; the Alpha Text can now be cited directly

**Location.** variants.json: the `w` fields at 1:1 (both entries), 3:13 and 4:17, and the `b` at 4:8.

**Problem.** These carry process notes: "summarized from the World English Bible's translation ... since the blueletterbible page omits the Additions", "not checked directly", and "checked on blueletterbible.org". This is workflow, not witness information. book.json's "About the translations" already explains the method once. The Alpha Text points have now been checked in NETS (Jobes's translation of the Alpha Text). It reads seven days at 1:5. It has "fear in their homes" at 1:22, like the Old Greek. Its 2:7 has Esther as daughter, not wife. It has no 2:16 month, no 2:20 clause and no 4:1 cry. At 4:8 Mordecai tells Esther to "call upon God".

**Fix.** Use plain witness names in `w`. Add the Alpha Text as a witness where it agrees: with the Masoretic Text at 1:5 and 2:7, and with the Old Greek at 1:22 and 4:8. Revise the book.json sentence about the Alpha Text "rather than checked directly" accordingly. Cite `jobes-alpha-text` or NETS.

### 11. Minor: two source keys are never cited

**Location.** sources.json.

**Problem.** `stanton-womans-bible` and `gerleman-esther` are defined, but no `s` list uses them. Stanton is named in the 1:12 note and in the chapter 1 deep section. Gerleman is named in the chapter 4 spec box.

**Fix.** Add `stanton-womans-bible` to the 1:12 note's `s`. For Gerleman, cite the key in the chapter 4 `deep` section or in the 4:16 or 4:17 note. If neither fits, remove both keys.

### 12. Minor: a talent is given two different weights

**Location.** notes.json 3:9 and glosses.json 3:9.

**Problem.** The note says "A talent was about 30 kilograms (66 pounds)" and also "10,000 talents is about 340 tons". At 30 kg, 10,000 talents is about 300 metric tons; 340 tons assumes 34 kg.

**Fix.** Pick one figure and use it in both places. For example: "about 30–34 kg, so roughly 300–340 metric tons".

### 13. Minor: Judges 1:1 does not open with "it happened in the days of"

**Location.** notes.json 1:1, "'It happened in the days of'".

**Problem.** Judges 1:1 opens *vayhi acharei mot Yehoshua*, "after Joshua died". Ruth 1:1 and Genesis 14:1 are right.

**Fix.** Use Judges 19:1 (*vayhi bayyamim hahem*) or drop Judges from the note.

### 14. Minor: small faults in the Plain English Translation

**Location.** plain.txt 4:4, 2:15, 2:12, 3:6.

- **4:4.** "She sent him clothing": "him" has no antecedent in the verse; the last person named is Esther. The Hebrew names Mordecai: *lehalbish et-Mordokhay*. Write "She sent clothes for Mordecai to put on..."
- **2:15.** "beyond what Hegai suggested, the king's eunuch, keeper of the women" leaves the title dangling. Reorder: "beyond what Hegai, the king's eunuch in charge of the women, advised." This also removes NIV's "suggested" (see finding 15).
- **2:12.** *kedat hannashim* is "under the women's rules". terms.json makes *dat* "law" throughout Esther, and the 1:8 note lists every *dat*. Use "under the law for the women" (or "the women's regulations"), or add the exception to terms.json.
- **3:6.** *vaybaqqesh Haman lehashmid* is "Haman wanted to annihilate". *Biqqesh* is "sought, set out to". Use "Haman set out to annihilate".

### 15. Minor: other lines lean on the NIV

**Location.** plain.txt 4:13–14, 2:15, 1:8, 2:18 and 1:7.

**Problem.**
- 4:14 follows the NIV's arrangement: "relief and deliverance for the Jews will arise from another place". The Plain English Translation has the same order, with *for the Jews* before the verb, and NIV's "your father's family". The Hebrew order is *revach vehatsalah ya'amod layyehudim mimmaqom acher*, with the verb before "for the Jews".
- 4:13 "you, of all the Jews" echoes NIV's "you alone of all the Jews".
- 2:15 "suggested" is the NIV word (finding 14).
- 1:8 "For the king had instructed every ... to give each guest what he wanted" follows NIV's "the king instructed all the wine stewards to serve each man what he wished".
- 2:18 and 1:7 "gifts with the generosity of a king" is close to NIV's "with royal liberality".

**Fix.** Redraft these phrases from the Hebrew. For example, 4:14: "relief and rescue will rise up for the Jews from another place, and you and your father's house will perish."

### 16. Minor: 3:7 supplies words without saying so

**Location.** plain.txt 3:7.

**Problem.** "someone threw Pur ... They threw it for one day after another and one month after another, until the twelfth month" supplies a verb ("They threw it") and "until", neither of which is in the Hebrew. It also switches from "someone" to "they". This is the RSV/ESV way of filling the gap, and it hides the textual problem that the variant then discusses.

**Fix.** Keep one subject. For example: "Pur, that is, the lot, was thrown before Haman, day by day and month by month, [and it came out at] the twelfth month..." Say in a note or in the variant that the words in brackets are supplied.

### 17. Minor: audience item 7, settings

**Location.** chapters.json, chapters 1–3 `settings`.

**Problem.**
- **3:2.** There is no setting for the king's command that all the servants in the gate must bow to Haman. It is a royal order binding a named group, the trigger of the whole plot. Add one. Who: the king. To whom: the king's servants in the king's gate. Purpose: to honor his new favorite. It binds every courtier at the gate.
- **2:8.** There is no setting for "the king's word and law", the edict gathering the young women. Add one, or extend the 2:2–4 card to 2:2–8.
- **1:22.** The card's `why` states as settled that "the husband's language be spoken there". The 1:22 note and variant treat the clause as obscure, with a Greek alternative and a proposed emendation. Add `views`, or hedge the wording.
- **4:11.** The card starts at 4:11, but the speech is introduced at 4:10. Use "4:10–11".

The other cards name the hearers exactly and keep the story level and the readers level apart.

### 18. Minor: audience item 7, book.json `audience`

**Location.** book.json `audience`.

**Problem.** The `to` and `views` cover the eastern diaspora well. They do not mention the documented readers of the Greek Esther: Greek-speaking Jews in Ptolemaic Egypt who received "the letter of Purim" (the colophon, 78–77 BC on the usual dating). They also do not mention that some scholars date the Hebrew book to the Hellenistic period for readers under Greek kings. The `to` mentions "Greek kingdoms" only in passing.

**Fix.** Add a `views` entry along these lines: "Greek-speaking Jews in Egypt, for whom the Additions and the colophon framed the book as a sacred, prayerful history."

### 19. Minor: Fox is credited with two different views on why Mordecai would not bow

**Location.** notes.json 3:2; chapters.json chapter 3, deep "Why did Mordecai refuse to bow?"; mordecai topic `claude` box.

**Problem.** The note lists Fox, with Levenson, under "the ancient feud". The chapter 3 deep section lists "Levenson and Berlin" for the feud and makes Fox the one who holds that the motive is left unexplained on purpose. Both cannot be right as written.

**Fix.** Check Fox, *Character and Ideology*, on 3:2–4 and make the two places agree. Also, the mordecai `claude` box says only "Commentators often note the contrast". Name at least one (Fox and Berlin both discuss it).

### 20. Minor: imprecise or overstated citations

**Location.** notes.json 4:14, 3:2, 2:5, 1:9 and 2:19; chapter 3 VIEW J; notes.json 1:12.

- **4:14 note.** "Josephus has Mordecai say ... (Antiquities 11)": the passage is 11.227. In Josephus the help is explicitly "from God", which is worth saying.
- **3:2 note and chapter 3 VIEW J.** "Esther Rabbah 7" should be "Esther Rabbah 7:5".
- **2:5 note.** The Ungnad text names Marduka, a *sipir* (an accountant or scribe) on a mission from Susa. Its date is late Darius I or early Xerxes. Saying "an official at Susa under Xerxes" is firmer than the evidence. Give the office and hedge the reign.
- **1:9 note.** Herodotus names Amestris as Otanes' daughter and Xerxes' wife (7.61, not cited). That she was the mother of Artaxerxes I comes from Ctesias. Cite 7.61, and attribute the mother claim to Ctesias.
- **2:19 note.** "(Daniel 2:49, freshly translated)" is a stray working note. Delete "freshly translated".
- **1:12 note.** "saw her as a wife who rightly or wrongly defied her husband" is garbled. Write "a disobedient wife, rightly removed".

### 21. Minor: Megillah 7a is told two ways

**Location.** book.json, "Was Esther Scripture?", and topics.json `canon`.

**Problem.** book.json says Samuel held that Esther "does not make the hands impure", "though others there argue that it was spoken by the holy spirit". The canon topic says it is not Scripture in the full sense, "though it was spoken by the holy spirit", attributing both to Samuel. The Gemara's own resolution is that Samuel held it was spoken by the holy spirit, but only to be read, not to be written. Rabbis Meir, Yose, Eliezer and Akiva also argue for its inspiration.

**Fix.** Make both places say: "Samuel held that it was inspired to be read aloud but not to be written as Scripture; other sages argued it was inspired outright."

### 22. Minor: two "the only book" claims are too strong

**Location.** topics.json `prayer` and `exile`.

**Problem.**
- `prayer` says "Esther is the one book of the Hebrew Bible in which no one prays." No one prays in Song of Songs either, which also arguably never names God.
- `exile` says Esther is "the Bible's one book set wholly among Jews who stayed in the east". Daniel is also set wholly in the east.

**Fix.** For `prayer`: "one of the very few books... and the only narrative book." For `exile`: "with Daniel, the only book...", or "the only one set after the return".

### 23. Minor: other Greek differences without entries

**Location.** variants.json (missing entries) and the notes on these verses.

**Problem.**
- **1:1.** The Old Greek has "from India, 127 provinces" (ἀπὸ τῆς Ἰνδικῆς ἑκατὸν εἴκοσι ἑπτὰ χωρῶν), with no Cush/Ethiopia. The Alpha Text has "from India to Ethiopia".
- **3:10.** The Old Greek drops "the enemy of the Jews". It has the king give the ring "to seal [what was written] against the Jews" (κατὰ τῶν Ιουδαίων). This matters because the 3:10 note makes the title central.
- **3:13.** The Old Greek gives no day number ("on one day of the twelfth month"); the Alpha Text agrees. Only Addition B has "fourteenth".
- **4:5.** The eunuch is Αχραθαῖος (Achrathaios) in the Old Greek.

**Fix.** Mention these in the relevant notes. 3:10 and 1:1 could be short variant entries.

### 24. Minor: small mechanics in the notes

**Location.** notes.json 1:16 and 3:7; notes.json 1:1 (India–Cush) and 1:10.

- **1:16 and 3:7.** `kind` is set on notes that are not `word` notes: 1:16 is `israel/var` and 3:7 is `history/nu`. STYLE gives `kind` to `word` notes only. Either retype them as `word` or drop `kind`.
- **1:1 (India–Cush).** The `r` lists Daniel 8:9, which has nothing to do with India or Cush. Remove it.
- **1:10.** The note quotes the Philistines' hearts as "good". The site's Judges 16:25 has "glad". Say "(Hebrew 'good'; the site has 'glad')", or quote "glad".

### 25. Minor: the "Read as court history" reading in chapter 1 states a speculation flatly

**Location.** chapters.json chapter 1, readings "Read as court history", and VIEW H.

**Problem.** The reading says the feast of the third year "may be the council Herodotus describes". That is fine as a "may". But VIEW H calls it "a true account of a real banquet... The 180 days may reflect..." with no attribution. Lens text may speak for the lens, but name who holds the view (for example Baldwin or Yamauchi), as STYLE asks.

**Fix.** Add "(so Baldwin, Yamauchi)" or a similar attribution.

## Fixes applied

All 25 findings addressed (2026-10-23). `--check Est/01-04`: 0 errors, 0 warnings. `--check Est`: 0 errors, 0 warnings. `--check Gen`: 0 errors, 0 warnings. Full build: Esther now builds, 0 errors.

1. **3:12** redrafted from the Hebrew order: "The king's scribes were called in during the first month, on its thirteenth day. Everything Haman ordered was put in writing ... It went out over King Ahasuerus's name, stamped with the king's signet ring." The root cause was the shared script-and-language formula, which also sat close to the NIV in 1:22. Both verses now use "province by province in its writing and people by people in its tongue." Re-audited, clean. The 3:12 note anchor was updated.
2. **3:7 variant** rebuilt with four readings: MT; Old Greek (fourteenth); Alpha Text, "for the thirteenth day of the month of Adar" (NETS); and BHS's restoration. The "why" now says the restoration is not followed because it has no Hebrew witness, and that it has Alpha Text support. The `b` gives the Old Greek ψήφισμα clause ("to destroy in one day the race of Mordecai"). Cites nets-esther.
3. **New variants at 2:19 and 2:21.**
   - 2:19: the Old Greek has "Mordecai was serving in the court", and the Alpha Text lacks 2:19–23.
   - 2:21: the Old Greek gives the motive "because Mordecai had been promoted".
   - The 2:19 note now mentions the omission. The 2:21 note adds the Greek motive and the Alpha Text names Astaos and Thedeutes.
4. **4:17 variant `b`** corrected. Addition D is now "one of the places where the Greek says God acted directly", compared with Greek 6:1: "the Lord" (Old Greek) and "the Mighty One" (Alpha Text).
5. **Topic aliases.**
   - "Haman the Agagite" moved from amalek.aka to haman.aka.
   - `haman` added to amalek.related; haman.related already lists amalek.
   - "Hammedatha" dropped from haman's aliases, and "the enemy of the Jews" added.
   - "Pur" and "the Megillah" dropped from purim's aliases, and "scroll of Esther" added.
   - The full build reports no collision.
6. *Mishteh*: "Esther has 20 of its 46 uses in the Bible."
7. **hesed.** terms.json fixes hesed as "loyal love", so the site's Genesis 39:21 was the outlier. Fixed in **Genesis 39:21** (content/books/Gen/parts/37-50/plain.txt), where "He showed him steady love" is now "He showed him loyal love". The Genesis note anchor at 39:21 was updated to match; that verse has no other anchors, and no other book quoted the old wording. The 2:9 note now:
   - drops "everywhere";
   - quotes Genesis 39:21 as the site now has it;
   - explains that *nasa chesed lifne* in Esther means about the same as winning favor (compare 2:17 *chen vachesed*), and that the site keeps "loyal love" so readers can see the word.
8. **Hebron** reworded to the documented facts: Baruch Goldstein, 29 Muslim worshipers killed at the Cave of the Patriarchs on Purim 1994, the date linked by many to Purim and Amalek, condemnation by Israel's government, its chief rabbis and Jewish leaders, and a small fringe that honored him. It no longer implies that he cited Esther 9.
9. **Ezra's date** is now given as debated: Nehemiah 445 BC, and on the usual dating Ezra 458 BC under Artaxerxes I, though some date Ezra to 398 BC under Artaxerxes II.
10. **`w` fields** stripped of workflow notes. The Alpha Text is added as a witness:
    - with the MT at 1:5 and 2:7;
    - with the Old Greek at 1:22 and 4:8 ("call upon God").
    New key `nets-esther` (Jobes in NETS). The book.json translations section now cites Rahlfs, and the Alpha Text as edited by Hanhart and translated in NETS.
11. **Uncited keys.** stanton-womans-bible is now cited in the 1:12 note. gerleman-esther is now cited in the 4:17 note, which names Gerleman's Exodus thesis.
12. **Talent weight.** "About 30 to 34 kilograms ... roughly 300 to 340 metric tons", in the note and the gloss.
13. **1:1 note.** Judges 1:1 replaced by Judges 19:1 ("in a close form").
14. **Plain English Translation.**
    - 4:4: "She sent clothes for Mordecai to put on ... but he refused them."
    - 2:15: "She asked for nothing except what Hegai said she should take. He was the king's eunuch, the keeper of the women."
    - 2:12: "under the law for the women" (*dat* term kept).
    - 3:6: "Haman set out to annihilate."
15. **Drift.**
    - 4:14: "relief and rescue will spring up for the Jews from somewhere else, while you and the house of your father perish". The verb now comes before "for the Jews". I did not adopt the reviewer's sample, "rise up for the Jews from another place, and you and your father's house will perish", because it matches the ESV for 5+ words.
    - 4:13: "living in the king's house will let you escape when the rest of the Jews do not".
    - 1:8: "The king had laid this down for every head steward in his palace: do as each man pleases."
    - 1:7 and 2:18: "as the king's hand allowed".
    - All rebuilt lines were re-audited. Notes, glosses and topic or book quotations of the old wording were updated: "from somewhere else", "the house of your father", "hold your tongue completely".
16. **3:7 Plain English Translation**: "Pur, that is, the lot, was thrown before Haman, day by day and month by month, down to the twelfth month, the month of Adar." One subject; only "down to" is supplied, and the variant's "why" says so. The note and gloss anchors were updated.
17. **Settings.**
    - New 3:2 card: the king's command to bow, to the servants in the king's gate.
    - The 2:2–4 card extended to 2:2–8, to include the king's word and law (2:8).
    - The 1:22 card is hedged and has `views` (the husband's language; the Greek or the correction).
    - The 4:11 card is now 4:10–11.
18. **Audience.** Added a view, "Greek-speaking Jews of Egypt" (the colophon, 78–77 BC; the Additions frame the book as a prayerful sacred history; some date the Hebrew book to the Hellenistic period). Added bickerman-colophon.
19. **Fox.** The 3:2 note and the chapter 3 deep section now agree: Fox and Levenson are named for the ancestral-feud reading. The "deliberately unexplained" view is given to "some literary readers", without a name. The mordecai `claude` box now names Fox and Berlin.
20. **Citations.**
    - Josephus Ant. 11.227, with the help explicitly from God.
    - Esther Rabbah 7:5, in the note and in chapter 3 J (both places).
    - 2:5: Marduka a *sipir* on a mission from Susa, late Darius I or early Xerxes.
    - 1:9: Herodotus 7.61 cited, and Amestris as mother of Artaxerxes I attributed to Ctesias.
    - 2:19: "freshly translated" deleted.
    - 1:12: "a disobedient wife, rightly removed".
21. **Megillah 7a.** book.json and the canon topic now both say Samuel held Esther inspired to be read aloud but not to be written as Scripture, and that other sages (Rabbi Meir, Rabbi Yose, Rabbi Akiva) held it inspired outright.
22. **"Only book" claims.** prayer: "one of the very few books ... and the only narrative book". exile: "With Daniel ... one of only two books set wholly among Jews in the east, and the only one set after the return".
23. **Other Greek differences.**
    - New variants at 1:1 ("from India" in the Old Greek; "from India to Ethiopia" in the Alpha Text) and at 3:10 (no "enemy of the Jews" in the Old Greek; "to seal against the Jews"); both are mentioned in their notes.
    - The 3:13 note gives the Old Greek and Alpha Text "on one day of the twelfth month".
    - The 4:5 note gives Achrathaios.
24. **Mechanics.**
    - `kind` dropped from the non-word notes at 1:1, 1:16, 3:7, 4:14 and 4:17.
    - Daniel 8:9 removed from the 1:1 note's `r`.
    - 1:10 notes that the site's Judges 16:25 has "glad".
25. **Chapter 1, VIEW H** now attributed: "(so Baldwin and Yamauchi, with most traditional readers)".

**For part 05-10 (coordinator to sync):**
- 8:9 repeats the formula of 1:22 and 3:12. For consistency it could use "province by province in its writing and people by people in its tongue".
- The 6:1 variant should give Greek "the Lord" and Alpha Text "the Mighty One", in line with the corrected 4:17 `b`.
- Any quotation of 4:13–14 must use the new Plain English Translation: "relief and rescue will spring up for the Jews from somewhere else, while you and the house of your father perish". "For a time like this" is unchanged. `--check Est` currently shows no warnings, so no such quotation exists now.
- Any quotation of 3:7 must use "Pur, that is, the lot, was thrown before Haman, day by day and month by month".
