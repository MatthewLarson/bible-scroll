# Hostile review: 1 Esdras 3-5 (Swete numbering), part 03-05

Reviewer: separate hostile agent, 2026-10-31. `VERBOSE=1 node tools/build.js --check 1Es/03-05`: 1Es: 156 verses, 72 notes, 15 variants, 54 glosses, 3 chapter pages, 11 topic contributions; 0 errors, 0 warnings.

## Verdict

This is careful, honest work. The Plain follows the Greek closely. I found no invented witness and no dishonest source: the Vulgate cry (4:41), the Mass offertory (5:40), Böhler's thesis and every Josephus passage checked out in an open text. Of the five departures from Vaticanus, 4:7 and 5:66 are well justified, and 4:45 is justified but over-argued. The two list departures (5:9, 5:28) rest on an apparatus I could not fully verify, and they break the policy the part states for itself. The weakest spots are these. First, two digital typos in the Greek base text still feed the Plain (5:14 "Asilius", which the lead already flagged, and 5:25 "Charue", which is new). Second, a set of Orthodox and other church attributions with no source. Third, two leftover "not checked" hedges, which STYLE.md rule 2 forbids. Fourth, a gold-weight comparison in the 5:44 note that is unsupported and probably wrong. The parallel rule against the site's Ezra 2:1-4:5 Plain is kept well, but the "8 same / 56 differ" count is looser than it sounds. The proposed topic `truth` duplicates nothing that exists. Nothing here blocks publication once the major findings are fixed.

Counts: critical 0, major 6, minor 16.

## What I checked and found sound (so the fixer does not redo it)

- Verse-by-verse against `texts/orig/1Es.json` for all 156 verses. Beyond the findings below the Plain tracks the Greek: no omissions or additions of substance in 3-4. The text of 3:1-5:6 contains nothing in the Plain that the Greek lacks, apart from the glossing choices listed in the minor findings.
- Vaticanus text vs First1KGreek XML for chapters 3-5 (collated by script): one real difference (5:25, finding 2). The rest is XML noise.
- Swete's apparatus (`texts/src/1Es.app.json`): every A reading quoted in variants.json that I could trace is in the apparatus (4:7, 4:45, 4:50, 5:12, 5:15, 5:16, 5:18, 5:28, 5:40, 5:52, 5:53, 5:66, 5:67), except as noted in finding 3.
- Quotations of the 66 against the current site Plain, all exact: Esther 1:1, Daniel 2:23, Daniel 5:7, Daniel 6:1, 1 Chronicles 29:11, Deuteronomy 10:17, Psalm 117:2, Psalm 31:5, Psalm 136:1, Psalm 137:7, Proverbs 20:1, Ecclesiastes 1:5, 2 Samuel 13:28, 2 Kings 25:9, Ezra 8:22, Nehemiah 8:1, Nehemiah 12:10, 1 Maccabees 10:89 and 11:31, 2 Maccabees 3:5, Tobit 13:7 ("King of heaven" is there), Daniel 4:37.
- The parallel rule: 5:7-5:70 against the site's Ezra 2:1-4:5 Plain. Wording is kept wherever the Greek agrees, and every real difference has a note or variant.
- Josephus, *Antiquities* 11.31-88 (Whiston, lexundria.com/j_aj/11.31-11.67, 11.68-11.80, 11.81-11.88). Confirmed: Darius son of Hystaspes with a vow to send back the vessels (11.31); Zerubbabel known beforehand (11.32); first year (11.33); "cousin" (11.35); Apame daughter of Rabsases Themasius (11.54); "truth alone that had immutable strength" (11.57); fifty talents (11.60-61); 7,337 servants, 245 singers, 435 camels, 5,525 beasts, no horses (11.72); leaders (11.73); neighbors' ill will at the altar (11.76); weeping drowns the trumpets (11.83); Cuthites and Shalmaneser (11.84-85); refusal but worship allowed (11.86-87); hindrance under Cyrus and Cambyses (11.88).
- Vulgate 3 Esdras 4:41, at biblestudytools.com/vula/1-esdras/4-41.html: "magna veritas et praevalet", with no *est*. The note's statement that *est* was added later is therefore right. The writer's claim is verified.
- The votive Mass: the Missa pro eligendo Summo Pontifice (maternalheart.org PDF, text extracted by me) prints "3 Esdræ 5:40 OFFERTORY: Non participéntur sancta, donec exsúrgat póntifex in ostensiónem et veritátem", English "for evidence and truth". The claim is true as stated (see finding 12 for a precision).
- Böhler (*Theologie und Philosophie* 89, 2014, 29-42): the abstract (Herder; confirmed by search this session) says the women and truth speeches form one argument, and that 1 Esdras, a work of the 2nd century BC, uses truth against the "liars" of the Hasmonean establishment, as the Qumran dissidents do. chapters.json and topics.json state this correctly.
- Church of England Article VI wording is quoted correctly in the W lens.
- No em-dashes or en-dashes anywhere in the part's files.
- No existing topic covers truth (see finding 17).

## Major findings

### 1. Major. 5:14 "Asilius" is stale (Plain, note 5:12, parallel.tsv, missing variant)

- Location: plain.txt 5:14; notes.json 5:12 ("Asilius = Adin"); `.scratch/1es-03-05/parallel.tsv` row 5:14; variants.json.
- Problem: `texts/orig/1Es.json` now reads υἱοὶ **Ἀδειλίου**, 454 (the `fixed` key says so, and the First1KGreek XML agrees). The Plain still says "Asilius".
- Evidence: Swete's apparatus at 5:14 reads "Αδειλιου] Αδινου A". Codex Alexandrinus therefore has Adin (Ezra 2:15 Adin, 454), and no variant records it.
- Fix: change to the Plain form of Ἀδείλιος (for example "Adilius", like Ares and Iolamus from genitives). Update the 5:12 note and the table. Add a variant at 5:14 (B Adeilios, A Adinos, Ezra Adin), or add A's reading to the existing 5:14 variant on Adonikam, which is also the only variant filed out of order (it sits last in the file, after 5:67).

### 2. Major. 5:25 "Charue" comes from a digital typo not yet in `fixed`

- Location: plain.txt 5:25; notes.json 5:24 ("Charue Harim").
- Problem: `texts/orig/1Es.json` 5:25 reads υἱοὶ **Χαρυή**. The First1KGreek XML of Swete reads υἱοὶ **Χαρμή** (collated by script this session). The KJV has "Carme". The Plain's "Charue" (υ read as u, η as e) follows the typo.
- Fix: the lead should add 5:25 to `fixed` (Χαρυή to Χαρμή, XML reading). The Plain becomes "Charme". Correct the 5:24 note.
- Sweep: I collated only chapters 3-5 against the XML. Parts 01-02 and 06-09 should get the same collation.

### 3. Major. The departures at 5:9 and 5:28 are defensible, but the variants misreport the apparatus and the policy is applied unevenly

- Location: variants.json 5:9, 5:12, 5:28; the note on 5:9 ("How to read this list").
- (a) Swete's note at 5:9 is a damaged digital line: "9 χιλιαδες] + 5 ροβ΄| υιοι Ασαφ τοβ΄ Bᵃᵇᵐᵍ+ και εκατον εβδομηκοντα δυο· υιοι Σαφατʼ· τετρακοσιοι εβδομηκοντα δυο· A". It states only that A *adds* "and 172; sons of Saphat, 472" after "thousand". It does not give A's number words before "thousand". The variant prints A's Greek as "υιοι Φορος **δυο** χιλιαδες και εκατον ...". The word "δυο χιλιαδες" is reconstructed from the KJV and Hebrew, not read in the apparatus. The Plain's "2,172" rests on that inference.
- (b) The margin of Vaticanus (Bᵃᵇ mg) is printed as "υιοι **Ασαφ** τοβ΄". The variant writes "372 for the sons of [Saph]at", silently emending Asaph to Saphat. That is the unrecorded emendation the works brief warns against.
- (c) Policy: the note on 5:9 says the Plain follows Vaticanus "even where they look wrong", and Vaticanus's 72,000 is replaced because it exceeds the total of 42,360. Yet "Iolamus: 2" (5:12), "Adonikam: 37" (5:14) and the three numberless clans (5:15, 5:16, 5:18) are kept, though no list sums to the total. The line the writer draws ("cannot be right") is therefore subjective. At 5:9 the Plain also adds a whole clan (Saphat) that Vaticanus lacks.
- Fix: check the A line against the Swete scan (archive.org, *The Old Testament in Greek* vol. 2, 1 Esdras 5:9) before printing A's Greek. Say in the variant exactly what the apparatus supports. Print the margin as Swete does (Asaph) and add "(for Saphat?)" as a labeled guess. Either state the principle ("replaced only where Vaticanus gives a number that contradicts the book's own total, or a line whose parts exceed their total") or keep Vaticanus at 5:9 and put A in a variant, as the brief's "do not correct the Greek" suggests. At 5:28 the departure is stronger and can stay: B's 400 and 1,000 cannot sit inside 139, and A is complete.

### 4. Major. Church and reader positions stated without a source

- Location:
  - chapters.json `views.O` for chapters 3, 4 and 5 ("fits the church's long teaching on sobriety"; "fits Orthodox teaching that God is Truth itself ... as in Isaiah 45 with Cyrus"; "the differences ... are treated as copying differences");
  - notes.json 5:6 canon ("Readers who hold the book as Scripture (Orthodox) usually read 5:7-70 as a look back at the first return");
  - notes.json 4:13 canon ("Orthodox readers ... read it as an added episode");
  - chapters.json 3 `views.W` ("its praise of truth was widely quoted"); 4 `views.J` ("The rabbis did not keep the book").
- Problem: none names a church father, a commentary or an Orthodox source. The 5:6 "usually" is a statement about a group's practice that the writer cannot have checked. The O lenses read like inferences from "it is in the Orthodox OT".
- Fix: source each to a named text, or reduce it to what can be sourced (Orthodox Bibles print the book; the book's place in the Greek Bible). STYLE.md rule 2 and the works brief (no unsourced church positions) apply. The Isaiah 45 comparison is Claude's own parallel and should be labeled so.

### 5. Major. Two "not checked" hedges in content

- Location: notes.json 4:40 spec ("the link to Wisdom literature is a common one, but I have not checked it in a named commentary"); chapters.json chapter 4 deep box ("This is my reading, not a published one I have checked").
- Problem: STYLE.md rule 2 forbids "not checked" hedges in content. Either verify or remove. A spec is already labeled as Claude's theory and needs no disclaimer about literature.
- Fix: delete both clauses. If the claim "a common link" is kept, cite a commentary actually opened. Otherwise write "Claude's reading".

### 6. Major. The 5:44 note's gold comparison and the mina gloss are unsupported

- Location: notes.json 5:44 ("A mina was a weight of about a pound and a quarter, so this is a great deal more gold than Ezra's drachmas"); glosses.json 5:44 (same pound-and-a-quarter).
- Problem:
  - A search this session gives the Attic or Greek mina as about 431-437 g (under a pound), and the 50-shekel Hebrew mina as 570 g in one estimate (Jewish Encyclopedia gives a quite different figure). "A pound and a quarter" is one estimate for the Hebrew mina, applied to a Greek text.
  - Ezra's "drachmas" (Hebrew *darkemonim*, daric-like gold) are not shown in the note to weigh less than 1,000 minas. A daric is about 8.4 g; I did not verify that in an opened source.
  - "A great deal more gold" is therefore not established and could well be wrong.
- Fix: say only what the text gives: Ezra 2:69 counts gold in darics or drachmas, 1 Esdras in minas, and the totals are different measures. Drop the "great deal more", or compute it from a source actually opened. Replace the gloss with "a mina was a weight of gold or silver, roughly a pound" only if a source is cited.

## Minor findings

### 7. Minor. 4:45 variant over-argues

- Location: variants.json 4:45 `why`.
- Problem: "Alexandrinus's reading is almost surely the original, and Vaticanus's a scribe's slip toward the more common word" is stated as near fact. Swete's apparatus shows A against B only. The reading "the Jews" is not impossible (see the lectio difficilior argument: a Jewish writer blaming "the Jews" is hard, but not unheard of in this book's polemic).
- Fix: label it as the scholarly preference ("most editors and the KJV follow Alexandrinus", if a source is opened) and name the cost, that the Plain now differs from the base text and from 2 Kings 25:9 (the canon note already says this). Make the A orig accented or note that A's readings are quoted unaccented as in Swete's apparatus. The variants mix accented and unaccented Greek.

### 8. Minor. 4:7 variant misdescribes the problem

- Location: variants.json 4:7 `why`.
- Problem: "the clause then has no main verb" is wrong. B* reads καὶ αὐτὸς εἰ μόνος **ἐστίν**, ἐὰν εἴπῃ, which has a verb but a double "if". The real objection is the stranded εἰ plus ἐὰν. Swete's note is "7 ει B* (εις BᵃᵇA)". The reading is "εἷς", not a new word.
- Fix: reword the reason. A concessive "though he is alone" is a possible reading of B*, which is why this departure is a judgment call.

### 9. Minor. Parallel counts overstated

- Location: chapters.json 5 `views.S` ("8 say the same ... and 56 differ"); parallel.tsv totals.
- Problem: the writer's own table counts 5:54, 5:57, 5:60, 5:65, 5:48 and 5:27 as "same" while listing differences in the same row ("he came", "adds music", "this one being built", "adds Jeshua", "book for law", "temple singers"). The Plain at 5:65 reads "We will build with you" against Ezra's "Let us build". 5:28 counts as "same" only because A is followed.
- Fix: say "about a dozen verses keep Ezra's sense nearly word for word" or define "same" in the lens (same sense, no change of name or number). Also correct "64 verses" if 5:55 (no parallel) is excluded.

### 10. Minor. Facts offered from outside any opened source

- Location, with what to do:
  - 3:2 note: "Darius I's own inscriptions count far fewer than 127" (and chapters 3 H: "not 127"). Verify in the Behistun or Naqsh-i Rustam lists, or say "Herodotus 3.89 lists twenty" only if opened.
  - 3:6 note: "maniakes is a neck ring of the kind Persians wore". LSJ and the Greek of Daniel 5:7 should be opened, since the word is also used of Gaulish torques.
  - 3:7 note: *syngenes* "used at the Persian court" (give a text, for example Xenophon, or drop).
  - 4:29 note: "the Persian wife of Seleucus I". A search this session shows the sources disagree: Arrian 7.4.6 calls her daughter of Spitamenes the Bactrian; Strabo 12.8.15 makes her daughter of Artabazus. Say that.
  - 4:29 note: Bartacus "appears nowhere else" (a negative that cannot be checked; say "I know no other source").
  - 5:20 note: "Some connect Chadias with Kedesh or Hadid". Name who or cut.
  - 5:40 note: "Nehemiah came a century later" (about 75-95 years from 520 or 538 BC to 445).
  - 5:46 note: "The east gate faced the Mount of Olives".
  - 5:8 note: "Twelve leaders for a people of twelve tribes may be the point" is unlabeled speculation.
  - 5:42 note: the horses 7,036 are "likely a copying slip" (labeled likely, fine, but no witness).
  - 4:21 note: "others read 'breathes his last'" (name the others).
- Fix: verify each in a source opened in the session or cut it.

### 11. Minor. 4:41 note goes past what was checked

- Location: notes.json 4:41; chapters.json 4 (Christian reading, W lens).
- Problem: the note adds that the saying also exists with *praevalebit* ("in the future"), that it is "the best-known line of 1 Esdras in the West" and that it is "quoted by many who never read the book". The works brief says to check where the motto is used before saying so. None of this is sourced.
- Fix: keep the verified part (Vulgate "magna veritas et praevalet"; Josephus 11.57). Either name where *magna est veritas et praevalet* is used (with a source) or cut the "best-known" and "praevalebit" claims. The *est* form is the saying, but the Vulgate itself lacks *est*.

### 12. Minor. 5:40 variant and note lean on the Mass for the Vulgate text

- Location: variants.json 5:40; notes.json 5:40.
- Problem: `texts/src/1Es.lat.json` is empty, so the Vulgate reading "pontifex" is known only through the votive Mass, which prints "3 Esdræ 5:40" with its own Latin ("Non participéntur ... in ostensiónem et veritátem"). The KJV has "an high priest ... clothed with doctrine and truth", a different Latin tradition. The source is a parish propers PDF (Noel Soares, 2025), not the Missal itself. "Sung" and "traditional Roman Missal" go beyond the PDF; the "T.P." Paschaltide marks suggest the 1962 form, but the PDF does not say.
- Fix: write "the Mass prints this verse, citing 3 Esdras 5:40, with *pontifex*" instead of "the Vulgate reads". Say "the votive Mass for the election of a pope as printed in a set of parish propers". Check the Vulgate verse itself if a text is reachable.

### 13. Minor. Plain readings that smooth or confuse

- 4:44 "He vowed to send them back there": after "cut Babylon down", "there" reads as Babylon. The Greek ἐκεῖ is Jerusalem. Say "to Jerusalem".
- 5:38 "was called by his name": the Greek ἐπὶ τῷ ὀνόματι αὐτοῦ means Phaezeldaeus's name. The Plain's "his" is ambiguous (Jaddus?). Say "took his name" or "went by Phaezeldaeus's name" (the note is fine).
- 5:49: "for they were hostile to them" follows the nations that "gathered to them", which makes the joiners hostile. The note admits the Greek is hard; the Plain should not silently pick. Consider "the nations of the land were hostile to them" with a Gloss on the join.
- 5:5 ends on a comma and 5:6 begins "He was the one": either leave as the Greek and say so, or join the verses in the note.
- 4:24 "stares down the lion": θεωρεῖ is "looks at". The Plain adds defiance. Gloss "faces any danger" is a fair paraphrase but belongs only in the gloss.
- 4:52 "seventeen, ten more talents" is honestly left, with a note. Fine, but "ἄλλα τάλαντα" is "other talents".
- 3:16 "They said to them" with no subject: fine as Greek.
- 4:36 "nothing unjust is with him": defensible with the 4:36 note, but a reader meets "him" before any antecedent. A gloss would help.

### 14. Minor. Name forms inconsistent

- Rough breathing is kept as H in Hakkaba, Hanan, Hatepha, Hagia, Hassaphioth, but dropped in Annis (Ἁννείς), Ammidioi (Ἁμμίδιοι), Attharias (Ἁτθαρίας). Choose one rule.
- Greek forms vs Hebrew forms of the same name at 5:8 (Nehemiah, Mordecai) are standard English; Zaraias, Resaias are Greek. Fine, but the rule is not stated.
- Keep the Plain form of Ἠσαύ ("Esau") out of confusion with the patriarch: note it.

### 15. Minor. Settings and readers

- Location: chapters.json.
- Problem:
  - The `readers` paragraph is pasted unchanged into eight settings, including the list of returnees (5:7-45) and the hymn (5:58), where it says nothing about those texts.
  - 3:16-23 says "the morning after the feast"; the Greek says only that the king awoke (3:13).
  - No setting for 5:40 (Namias and Attharias's ruling) or 5:43-44 (the vows). The brief asks for a setting for every decree, letter, speech and prayer.
  - 5:7-45 `by` is "the book's narrator", which is fair, but the setting could say the list restates Ezra 2.
- Fix: give each setting a `readers` line about its own passage, or leave one full statement in the first setting of the chapter and shorten the rest. Add settings for 5:40 and 5:43-44.

### 16. Minor. Notes of questionable fit

- notes.json 5:36 and the `genealogies` topic: "Some lines show how Hebrew place names became persons in Greek (1 Esdras 5:36, 40)". 5:40 is a Persian *title* (*tirshatha*) that became names, as the 5:40 note itself says. Fix the topic wording.
- 5:46 note links the altar square to Ezra's reading of the law at 9:38 (verified: 9:38 reads ἐπὶ τὸ εὐρύχωρον τοῦ πρὸς ἀνατολὰς ἱεροῦ πυλῶνος). That is good. But the heading "the place where Ezra will read the law" differs from Nehemiah 8:1 (Water Gate); say "in this book".
- 5:2 note: Josephus 11.67 does mention an escort ("under the conduct of those whom Darius sent"), only no horsemen. Say so.
- 5:52 variant `why` is thin: Vaticanus has offerings begin in month 1 before the altar is set up in month 7 (5:46-49), which the Plain's reasoning does not face. Say plainly that A and Ezra agree and that Vaticanus's reading creates a conflict inside the book.

### 17. Minor. Proposed topic `truth` (content/proposals/works/topics/truth.json)

- One page per subject: no topic in `content/topics/` or in any `proposals/*/topics/` covers truth. I checked titles and `aka` for truth, emet, aletheia and faithfulness. `hesed`, `faith`, `word-of-god`, `justice` and `wisdom` mention truth or faithfulness only in passing and do not claim it. Creating `truth` is right.
- Weaknesses: one section only, `sources: []`, the self-link `links: [["Truth","Truth"]]` is meaningless, no Jewish or rabbinic reception, and it is mostly NT. Fairness would add Zechariah 8:16, Psalm 119:142 and the reception in Judaism. Add `hesed` to `related` since Ezra 3:11 and Psalm 117:2 pair loyal love with faithfulness.
- Other contributions: putting "Women are strongest" under the `marriage` topic is a poor fit (no `women` topic exists; consider `kingship`/`wisdom` or a new page). The `zerubbabel` contribution says "most scholars read as a damaged text" where the chapter note says "many"; match the wording to the evidence.
- The site must never show exactly 666 topics. The lead should check the total after merging `truth`.

### 18. Minor. Variants missing

- 5:14: Alexandrinus Adinou (see finding 1).
- 5:56: Swete's note "κυριου 2⁰] θυ A" (A reads "God" for "the Lord" in "the house of the Lord"). It bears on the LORD/Lord choices described in the 5:49 note.
- 5:58: A has ομολογουντες for ευλογουντες.
- None of these is critical, but the first matters.

### 19. Minor. Gloss 4:49 invents detail

- glosses.json 4:49: "barge into their homes (to seize goods or quarter soldiers)". The Greek says only "come against their doors". Drop the parenthesis.

### 20. Minor. Drift toward modern translations (description only)

- The rendering "Gentlemen" for ἄνδρες in every speech (3:17, 3:23, 4:2, 4:14, 4:28, 4:32, 4:34) may match one modern English version's word choice; the Greek would equally allow "Men" or "Sirs". I could not open the NRSV, RSV, NETS or Lexham text in this session and will not claim a match from memory. The fixer should reread those verses against the brief's drift audit with the term "Gentlemen" in mind.
- Several other word choices ("play favorites" in 4:39, "wins over" in 3:12, "strongest of all" in 4:3) are common renderings. 4:41 has been reworked away from the usual phrasing and now stands apart. The writer's drift-audit file says 88 of 156 verses were rebuilt; I saw no verse that reproduces a modern sentence.

## Cross-checks without findings

- Terms: "is strongest" (ὑπερισχύω) and "truth" are consistent everywhere in 3-4 and at 5:40; ἰσχύει (4:14) and ἰσχυραί (4:32, 4:34) are rendered "is strong". "Kinsman" is capitalized as in 1 Maccabees. All three match proposals/works/terms.json.
- works.json naming: 1 Esdras, 1 Maccabees, 2 Maccabees, Tobit, Judith, Wisdom of Solomon are used as in works.json. Josephus is cited as *Antiquities*.
- Status: the book is never called Scripture in the site's voice. The O lens says "Orthodox Bibles print this chapter"; the W lens names Article VI correctly.
- Traditions cards: none in this part; the Scripture question sits on Ezra's card (brief). The part's `views` carry the O/H/J/S/W lenses. Finding 4 covers their sourcing.
- Cross-part numbering: notes cite 2:10-14, 2:15-25, 2:20-23, 6:1, 6:22-33, 8:51, 9:38 in Swete's numbering. All verified against `texts/orig/1Es.json`.

## Fixes applied

Fixer, 2026-10-31. Sources opened in this session are listed in `.scratch/1es-03-05-fix/sources-checked.md`; the re-run parallel table is `.scratch/1es-03-05-fix/parallel.tsv`. `VERBOSE=1 node tools/build.js --check 1Es/03-05`: 0 errors, 0 warnings.

1. Fixed. 5:14 is now "Adilius" (texts/orig Ἀδειλίου). The 5:12 note and the table are updated. A new variant at 5:14 gives B Ἀδειλίου, A Αδινου (checked on Swete's page image) and Ezra's Adin. The Adonikam variant is moved into verse order.
2. Fixed. 5:25 is now "Charme" (texts/orig Χαρμή, now in `fixed`) and the 5:24 note is corrected. Under lead decision 15 two more names now match texts/orig: 5:21 "Betolio" (Βετολιώ) and 5:40 "Naimias" (Ναιμίας).
3. Fixed. I checked Swete's page image (vol. 2 p. 142). The margin reads "υιοι Ασαφ τοβ΄". A only adds words after "thousand", so the apparatus never gives A's 2,172. The Plain now keeps Vaticanus, "descendants of Phoros, 72,000." The variant gives four readings: B; the Bab margin as printed, with Asaph and "perhaps meant for Saphat, a guess"; A as the apparatus reports it (72,172; Saphat 472); and Ezra's Hebrew. The 5:9 note now states the rule: Vaticanus everywhere, except 5:28, where its line cannot be read as a list (parts larger than its own total). The 5:28 departure stays (A checked on p. 143), and its `why` states that rule.
4. Fixed. All O lenses (chapters 3, 4, 5) now use one sourced sentence: Orthodox Bibles print the book (Russian Synodal, as 2 Ezra) and Mihăilă counts it among the books the Orthodox reckon beyond the Hebrew canon. The keys russian-synodal-azbyka and mihaila-anaginoskomena are on the 4:13 canon note, and both were opened this session. The claims about sobriety, God as Truth, Isaiah 45 and "copying differences" are cut. The 5:6 and 4:13 canon notes lose their unsourced "Orthodox readers usually..." lines and now name Torrey and Swete. The W line "widely quoted" is cut, and "the rabbis did not keep the book" is now "not in the Jewish Bible".
5. Fixed. Both hedges are deleted. The 4:40 spec now ends with Torrey (opened), who places the tale among the wisdom writing of its day. The chapter 4 spec box now says "This is Claude's reading."
6. Fixed (lead decision 10). The 5:44 note gives only the two measures (Ezra in drachmas, 1 Esdras in minas) and says they cannot simply be compared. The gloss now reads "a unit of weight for silver and gold", with no equivalent.
7. Fixed. The 4:45 `why` now says the KJV follows A and that B may be a slip, though "the Jews" cannot be ruled out, and names the cost. The `b` says A's readings are quoted unaccented, as in Swete's notes. I could not open an edition survey, so there is no "most editors".
8. Fixed. The 4:7 `why` now says that B* has a verb but a doubled "if" (εἰ, ἐάν), that "though he is alone" is possible, and that the departure is a judgment call. The B* orig is copied from texts/orig.
9. Fixed (lead decision 2). I re-ran the table by script against the current Ezra Plain. Word for word, 0 of the 63 verses with a parallel are the same; 5:55 has none. Each row now names the actual difference, and the S lens says so, giving the closest cases (5:27, 5:35).
10. Fixed, item by item. 3:2: the Behistun inscription, opened at livius, gives "twenty-three lands in all" (new key behistun-livius). 3:6: maniakēs is now tied to Old Greek Daniel 5:7 (lxx.py). 3:7: "Persian court" cut; the court rank is shown from 1 Maccabees. 4:29: Seleucus and "appears nowhere else" cut. 5:20: Kedesh/Hadid cut. 5:40: "a century later" now cites Nehemiah 2:1. 5:46: Mount of Olives cut. 5:8: twelve-tribes guess cut. 5:42: now "perhaps". 4:21: "others read" cut; Genesis 35:18 checked in lxx.py. Dates I could not source are cut (522-486, 520, 538, 586, 681-669, 722 BC, gloss "586 BC").
11. Fixed. The 4:41 note keeps the Vulgate and Josephus. "Best-known line" and "quoted by many" are cut. Swete's Introduction p. 266 (opened) now sources "the immortal proverb" and his remark that praevalebit has no support. The chapter 4 reading uses the same source.
12. Fixed. The 5:40 note, the variant and the chapter 5 W lens now say that the votive Mass "as printed in a set of parish propers" gives the verse as its offertory, citing "3 Esdræ 5:40", with pontifex. "Sung", "traditional Roman Missal" and "the Vulgate reads" are cut. PDF re-opened.
13. Partly accepted. Changed: 4:44 is now "send them back to Jerusalem"; 5:38 is now "went by his name", which is Ezra's wording, with a gloss naming the father-in-law; 5:5 now ends in a period, and the 5:5 note explains how the Greek runs on into 5:6. 4:24 is now "He eyes the lion" (θεωρεῖ), and its gloss anchor moved. For 5:49 the Plain keeps the Greek's unnamed "they", and the note now says so. Declined: 4:52 ("ten more talents" and ἄλλα τάλαντα δέκα mean the same), 3:16 (fine, as the reviewer says), and a gloss at 4:36 (the note on that same anchor already explains "him").
14. Fixed. Rule (in the 5:9 note): a rough breathing is written as H. Annis is now Hannis, Ammidioi Hammidioi, Attharias Hattharias, Obbia Hobbia, Akbos Hakbos. Ezekias is now Hezekiah: lead decision 7 keeps the familiar spelling for the same Hebrew name. The 5:29 note says Esau is a spelling of Ziha, not the patriarch.
15. Fixed (lead decision 5). One general `readers` paragraph, with no date range, now stands only in the first setting (3:4-9). Elsewhere `readers` is either specific evidence from Josephus (4:33-41, Ant. 11.55-57; 5:7-45, Ant. 11.72) or dropped. 3:16-23 `when` now quotes the text ("when the king had woken"). New settings: 5:40 (the ruling) and 5:43-44 (the vows). 5:7-45 `by` now says it restates Ezra 2.
16. Fixed. The genealogies topic separates places (5:36) from a title (5:40); the 5:36 note does the same. The 5:46 note now reads "in this book", and Ezekiel is dropped from its refs. The 5:2 note now quotes Josephus 11.67's escort. The 5:52 `why` faces the conflict inside the book and says that A and Ezra agree.
17. Fixed. truth.json gains a section on truth in Israel's life and in Jewish tradition: Zechariah 8:16, Psalm 119:142, Psalm 117:2, and Rabbi Hanina in Shabbat 55a (Sefaria, key bavli-shabbat). The self-link is removed; `related` adds hesed, faith and word-of-god. The marriage contribution is refocused on the husband-and-wife lines (4:20-27). The zerubbabel contribution now says "reads like a damaged text". first-esdras common/uncommon now name Torrey and Böhler. The lead should check the 666 topic count after merging.
18. Fixed. New variants at 5:14 (Adinou), 5:56 (θυ A, "house of God") and 5:58 (ομολογουντες A), each checked on Swete's page image.
19. Fixed. Gloss 4:49 is now "barge into their homes", with the parenthesis dropped.
20. Fixed. "Gentlemen" for ἄνδρες is now "Sirs" in all seven verses (3:17, 3:23, 4:2, 4:12, 4:14, 4:32, 4:34), and the gloss is rewritten. The rebuilt verses (4:24, 4:44, 5:9, 5:38) were drift-audited in my head; none kept a modern run.

Also, following the lead's decisions: "many/most scholars", "some/others read" and "historians" without a named holder are rewritten with a named source (Torrey, Böhler, Swete) or as plain readings (notes 3:4, 3:12, 3:14, 4:13, 4:14, 4:39, 4:44, 4:45, 4:48, 5:5, 5:6, 5:70; chapter 3 reading; chapters 4 and 5 H). Plain verses changed: 3:17, 3:23, 4:2, 4:12, 4:14, 4:24, 4:32, 4:34, 4:44, 5:5, 5:9, 5:14, 5:15, 5:16, 5:20, 5:21, 5:25, 5:38, 5:40. No other book quotes the changed wording (checked by grep).
