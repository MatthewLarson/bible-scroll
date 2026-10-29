# Hostile review: 2 Corinthians 10-13 (part 10-13)

Reviewer: hostile-reviewer agent (not the writer). Checked against `texts/orig/2Co.json` (SBL word list with edition marks N n S Y W G T B, and the Robinson-Pierpont `byz` text), `plain.txt` verse by verse, all six content JSON files, the three proposal topic cores, `content/works.json`, and `node tools/build.js --check 2Co/10-13` (0 errors, 0 warnings).

## Verdict

The Plain is faithful and mostly well judged. I found no verse where the sense is wrong, no invented source and no fabricated reading. Mishnah Makkot 3:10, Josephus Ant. 4.238, 1 Clement 5:6, Aretas IV (about 9 BC to AD 40) and the Josephus Ant. 18.109-115 war with Antipas all check out, as do the Jeremiah 1:10 and 9:24, Deuteronomy 19:15 and 25:3, Genesis 3:13 and 1 Corinthians 1:31 quotations against the site's own Plain. The weak points are these.

- Several scholar attributions are wrong or unverified, above all Thrall as a defender of unity.
- The variants file names no manuscripts at all, and it misses three or four KJV-visible differences.
- The one translation choice that matters most, "apostles of the highest rank", pre-empts the identification debate and does not match the "super-apostles" used everywhere else on the site.
- Two traditions cards attribute positions that the cited source does not state.
- Some claims are firmer than the evidence: the "second visit" in 13:2 and the dating from Aretas.

Findings by severity: 0 critical, 7 major, 15 minor.

## Major findings

### 1. Thrall is listed as a defender of one letter, but her ICC concludes the opposite (major)
- **Where:** notes.json entry 10:1 (`views`, "A new tone"); chapters.json ch. 10 `views.C` and the deep dive "Are chapters 10 to 13 a separate letter?" ("for unity, Harris, Garland, Barnett, Thrall and Lambrecht"); the 10:1-11 and 13:1-10 settings cite her next to Harris.
- **Evidence:** A published review of Thrall's ICC vol. 1 (1994) reports her conclusion that chapters 10-13 "belong to a separate letter". She rejects only the identification with the severe letter. Harris, Garland and Barnett do argue for unity. Furnish is cited in sources and, as I recall, argues partition, but the note never says where he stands.
- **Fix:** Move Thrall out of the "one letter" camp. She is a separate-letter (written after 1-9) scholar who rejects the severe-letter identification, which is a fourth position that this note's list of three lacks. State Furnish's position or drop him from `s`. Add a source key for Bornkamm (named in the deep dive, no key) and for Lambrecht, or remove the names. Re-check Harris and Lambrecht against the books before keeping them.

### 2. "Super-apostles" attributions look unreliable, and view (1) is dismissed too fast (major)
- **Where:** notes.json 11:5 ("Harris, Thrall, Furnish and most recent commentators"); chapters.json ch. 11 `views.C` ("the same intruders named ironically (Harris, Thrall)") and the deep dive; `proposals/nt/topics/super-apostles` and the `topics.json` contribution.
- **Evidence:** I could not confirm any of these placements by search. My recollection is that Thrall (ICC II) and Harris (NIGTC) both treat the *hyperlian* apostles as the Jerusalem leaders whom the intruders invoked, and the *pseudapostoloi* as the intruders. That is Barrett's two-group view, which is not "Käsemann alone". Garland, Barnett, Furnish and Sumney take the same-group view. The note also says "Barrett in his earlier work" and "early Barrett", but Barrett's 1971 article and 1973 commentary hold one position and I know of no change.
- **Fix:** Check Harris pp. on 11:5, Thrall ICC II on 11:5 and 12:11, and Barrett (1971, 1973) before keeping any name. Drop "early". The rebuttal of view (1) rests on Paul's warm words (1 Cor 15:11; Gal 2:9). Add the strongest case for view (1): the two labels are kept apart in 11:5 and 11:13, and Galatians 2:6 is itself guarded about "those who seemed to be something".

### 3. "Apostles of the highest rank" (11:5; 12:11) hides the sarcasm and prejudges the identification (major)
- **Where:** plain.txt 11:5, 12:11; set against notes, cards, settings, topic titles and book.json, which all say "super-apostles".
- **Evidence:** Greek ὑπερλίαν is the adverb "super-extra", used for ridicule. "Rank" and "highest" are not in the Greek. "Of the highest rank" makes them sound like an official body, which tilts toward the Jerusalem-apostles reading (view 1) in the very Plain text, before any note speaks. A reader who then meets "super-apostles" in the note title, the chapter views and the topic page has no link back to the verse. No gloss in glosses.json explains it. The brief's `aka` lists both forms, but the text itself never uses "super-apostles". "Super-apostles" is a coined label, so it is not drift to use it.
- **Fix:** Render it in a neutral, sarcastic way ("the super-apostles", or "those 'extra-special apostles'") and add a gloss at 11:5. Or keep the current wording and add a gloss saying it is "super-apostles" in many Bibles. Make the Plain, notes, cards and topic use one term.

### 4. None of the 13 variants names a manuscript (major)
- **Where:** variants.json, every entry (`w` lists editions only; `s` is just `metzger`).
- **Evidence:** tools/brief-nt.md requires "the editions and the manuscripts behind each reading" with dates (P46, א, B, D, the versions, fathers). The 12:9 entry is the clearest case. The data supports "my" being absent from the critical editions (the `w` mark on μου is T and B only), but an online witness listing I found shows the omission in original Sinaiticus, Vaticanus, original Claromontanus and the Sahidic, and the addition in the second corrector of Sinaiticus, Alexandrinus, the Byzantine tradition and Chrysostom. Verify that in the NA28 apparatus or Tischendorf (Source Library book 6953a88c77f38f6761bd19d6). The same entry also hides a second difference. The Byzantine line reads τελειοῦται against the critical τελεῖται (all critical editions have the second), and neither the `p` nor the `why` mentions it. The phrase "(as reported in the NA28 apparatus)" in `w` is vague and unverifiable. For 11:3 the edition marks agree with the entry: καὶ τῆς ἁγνότητος is in N n S Y W G and absent from T and B. The square brackets cannot be checked from the marks. NA27 and NA28 do bracket the words, as I recall. Name the omitting witnesses, which the entry does not.
- **Fix:** Add the manuscript lines for every entry from Tischendorf or the NA28 apparatus, with dates. Add the verb difference to 12:9. Name the Metzger page or drop the vague "discusses the longer reading" at 11:3.

### 5. KJV-visible differences missing from variants.json (major)
- **Where:** 11:28, 13:7, 13:2 (plus 11:31 below).
- **Evidence:**
  - 11:28: SBL ἡ ἐπίστασίς μοι ("pressure/care on me") against Byzantine ἐπισύστασίς μου ("a mob/riot or gathering against me", compare the KJV "that which cometh upon me daily"). The Plain follows the first, and the meaning differs.
  - 13:7: critical εὐχόμεθα ("we pray") against Byzantine/TR εὔχομαι ("I pray"; KJV "Now I pray"). The mark on εὐχόμεθα is N n S Y W G.
  - 13:2: the Byzantine text adds γράφω ("I write", KJV "I write to them which heretofore have sinned").
  - 10:12: the Western text is, as I recall, shorter at "οὐ συνιᾶσιν ἡμεῖς δέ". I could not confirm it; check the apparatus.
- **Fix:** Add entries for 11:28, 13:7 and 13:2 at least, and check 10:12.

### 6. "Second visit" in 13:2 is settled in the Plain and the note, but the Greek allows another reading (major)
- **Where:** plain.txt 13:2 ("as I did on my second visit"); notes.json 12:14 ("13:2 speaks of a 'second visit' as past, which favors the first reading").
- **Evidence:** The Greek is ὡς παρὼν τὸ δεύτερον καὶ ἀπὼν νῦν. This can mean "as when I was present the second time" or "as if present a second time, though absent now" (the KJV reading). The count of visits (two or three) depends on it, and the note uses 13:2 as its decisive proof.
- **Fix:** Add a note or a variant-style views entry at 13:2 stating both renderings, and soften the note at 12:14. The Plain may keep its choice, but the choice must be flagged.

### 7. Healing card: two attributions the cited source does not support (major)
- **Where:** chapters.json ch. 12, card "Does God sometimes refuse to heal"; topics.json `healing` contribution.
- **Evidence:**
  - Lutheran: the entry says Paul's thorn is "a case of God's strength hidden in a trial (Heidelberg Disputation, 1518)". The Disputation does not discuss the thorn. Luther's own reading, a spiritual assault (Anfechtung), is not given.
  - Pentecostal: "Pentecostal teachers differ on the thorn: many read it as opposition or persecution, others as illness" has no source (`s` is only `ag-fundamental-truths`, which is about healing in the atonement, FT 12, and says nothing of the thorn). The topic page repeats it as "often reads the thorn as persecution or temptation".
  - Orthodox: the Holy Unction claim has no source beyond Chrysostom.
- **Fix:** Cite Luther on the thorn (his Galatians lectures or sermons) or say only what the Disputation says and drop "thorn". Source the Pentecostal split (an AG position paper, or a named teacher) or reduce it to "teachers differ", with a note that no source was found. Source the Orthodox unction line (a Prayer of Unction text or an Orthodox catechism).

## Minor findings

### 8. Corona muralis attribution is second-hand and incomplete (minor)
- **Where:** notes.json 11:33 ("E. A. Judge first, as cited by Barnett and Garland"), sources `judge-boasting-1013`.
- **Evidence:** I could not confirm Barnett or Garland as the route. The proposal is documented as first made by Judge and developed by Furnish (Anchor Bible, p. 542). Judge's suggestion may predate the ABR 1968 article (one source says 1966). M. Pawlak (NTS 2022, "Paul's Escape from Damascus (2 Cor 11.32-3) and the corona muralis") challenges the premise that the corona muralis was the finest award. No ancient source for the crown is given (Polybius 6.39; Aulus Gellius 5.6 would do).
- **Fix:** Cite the exact locus (Judge, Furnish) and the Pawlak objection, and add the ancient source. Say "suggested by Judge, developed by Furnish, disputed".

### 9. Aretas and the date from Damascus are overstated (minor)
- **Where:** chapters.json ch. 11 `views.H` ("fixes a date in the late 30s"); plain.txt 11:32; notes.json 11:32.
- **Evidence:** The note itself says the form of Aretas's control is unclear, and that is an honest hedge. The chapter line then says it "fixes a date". The Plain says "governor under King Aretas", while ἐθνάρχης may mean the head of the Nabatean community in the city. The note mentions both but never says that the Plain picks the first. The usual supporting evidence (no Damascus city coins of Tiberius's later years, AD 34 to 62, which suggests Nabatean rule about 37-40) is not given.
- **Fix:** Change "fixes" to "points to". Add a line that the Plain's "governor" is one of two readings.

### 10. 10:16 "the lands beyond you likely means Rome and Spain" (minor)
- **Where:** notes.json 10:16.
- **Evidence:** Romans 15:20-24 says Paul would not build on another's foundation, and Rome already had a church. Spain is the aim. Rome is a stopover.
- **Fix:** Say "probably Spain, by way of Rome".

### 11. Gal 4:15 quoted in a way that differs from the site's Plain (minor)
- **Where:** chapters.json ch. 12 deep dive "What was the thorn?" ('you would have torn out your eyes').
- **Evidence:** Gal 4:15 in the site's Plain reads "you would have dug out your own eyes and given them to me".
- **Fix:** Use the Plain's wording exactly, as the site requires.

### 12. 11:1 imperative against indicative is not noted (minor)
- **Where:** plain.txt 11:1 ("Actually, you are bearing with me already").
- **Evidence:** ἀλλὰ καὶ ἀνέχεσθέ μου can be indicative ("indeed you do") or imperative ("do bear with me!"); the ESV takes the imperative. The Plain takes the indicative, with "already" added, close to the NIV's idea. No note or variant covers it.
- **Fix:** Add a short note on the two readings, and drop "already" (not in the Greek).

### 13. Small interpretive additions in the Plain (minor)
- **Where:** plain.txt 10:14 ("we got there first"; ἐφθάσαμεν means "reached", and "first" is one reading); 10:8 ("a bit too much"; the Greek is only "somewhat more"); 11:19 ("and so" makes the wisdom the cause); 12:7 ("or because of" for καί; the whole clause is hard Greek); 12:16 ("some say" is supplied); 11:4 ("Look at it this way" has no Greek); 13:11 χαίρετε ("be glad"; KJV "farewell" is possible).
- **Fix:** Remove the connectors or add a short note at the first two and the last; 12:7 should say that "and" and the break are the writer's reading.

### 14. 12:12 note and gloss: Orthodox, Catholic card ranges (minor)
- **Where:** chapters.json ch. 12 card "Do the signs of an apostle still happen?".
- **Evidence:** Catholic: "their authority is handed on by bishops" is cited to CCC 156 and 799-801. CCC 156 is on miracles as signs of credibility and 799-801 on charisms. The succession teaching is at 77, 861-862. The Orthodox entry has an empty source list. No Lutheran or Anglican voice is present, although they hold distinct views on whether the office ceased. The Reformed entry rests on Warfield (1918), a Reformed view stated fairly.
- **Fix:** Give the right paragraphs and a source for the Orthodox line (a named father or a catechism).

### 15. Assurance card (13:5) gaps (minor)
- **Where:** chapters.json ch. 13 card "Can a believer be sure that he is 'in the faith'?".
- **Evidence:** Lutheran (Augsburg Confession, Formula of Concord: assurance in the promise, with real danger of falling away) is missing, though Lutherans hold a view that fits neither the Catholic nor the Reformed one. Wesley's "witness of our own spirit" is Sermon 12; the entry cites only 10 and 11. The Orthodox entry cites "Ware, The Orthodox Church" without a page or chapter. The Catholic entry's Trent citation (Session 6, ch. 9, canons 13-16) is right.
- **Fix:** Add a Lutheran line. Cite Sermon 12. Give a chapter for Ware.

### 16. Trinity card and chapter 13 claims (minor)
- **Where:** chapters.json ch. 13.
- **Evidence:**
  - CCC 232-267 does not discuss 13:14 or the Mass greeting; it is cited as if it did.
  - `views.T` says the verse "has been a main text for the doctrine of the Trinity from the fourth century on". Matthew 28:19 was the main text in the fourth-century debates, and this is unsourced.
  - `views.L` calls 13:4 "a chiasm"; the parts run A B A' B', which is parallelism, not chiasm.
  - `sum` calls the blessing "the best-known benediction in the church", an unsourced boast.
  - The Lutheran, Anglican and Baptist voices are missing, and these use it in worship too.
- **Fix:** Cite CCC for the Trinity only and cite the Mass greeting separately (General Instruction of the Roman Missal, or the Order of Mass). Remove or source the fourth-century claim, correct "chiasm", and drop "best-known".

### 17. Variants 11:31 and 13:14: TR and Byzantine are not the same text (minor)
- **Where:** variants.json 11:31, 13:14.
- **Evidence:**
  - 11:31: the data marks ἡμῶν as TR only (the KJV reads "of our Lord Jesus Christ"), but the entry gives one line for "Byzantine text; Textus Receptus" without "our".
  - 13:14: the closing note about Philippi, Titus and Luke is marked T only, not Byzantine.
- **Fix:** Split the TR from the Byzantine reading in both.

### 18. Note 24 states a contested position as fact (minor)
- **Where:** notes.json 11:22 ("Paul remained a Jew all his life").
- **Evidence:** This is the "Paul within Judaism" position, and it is also said at 11:24. It is presented flat in the first and then attributed to Fredriksen.
- **Fix:** Attribute it in the same sentence ("on the Paul-within-Judaism reading, Paul remained...").

### 19. Writings outside the 66 are cited without tier or date in several notes (minor)
- **Where:** notes.json 11:3 (4 Maccabees 18:7-8, listed in works.json as `orth`), 11:14, 12:2 (2 Enoch, Testaments of the Twelve, Apocalypse of Moses, 3 Enoch; tier `other`).
- **Evidence:** The 11:14 note says only "A writing outside the 66, it was never counted as Scripture", and no note says who accepts 4 Maccabees (an appendix text in some Orthodox Bibles). The rule is to say for whom a work is Scripture.
- **Fix:** State the tier and a rough date at first mention.

### 20. Glosses (minor)
- **Where:** glosses.json 12:2 ("a man in Christ" = "a Christian"; this pre-empts the "is it Paul?" question that the note handles carefully), 11:29 ("burn inside" = "feel furious and grieved"; the Greek covers anger or distress).
- **Fix:** Say "a believer in Christ" and soften the second.

### 21. Tapeinos note overgeneralizes (minor)
- **Where:** notes.json 10:1 ("Humble" was an insult): "To a Greek ear, being humble meant being low class and weak, not modest."
- **Evidence:** This is the general finding, but pagan usage was not uniformly negative.
- **Fix:** "Usually" or "often".

### 22. Early readings of the thorn unsourced (minor)
- **Where:** chapters.json ch. 12 deep dive ("Some early writers took it as headache or earache (as reported in the commentaries)").
- **Fix:** Name Tertullian (on Modesty 13) and Jerome (on Galatians) and add the references, or drop the sentence.

## Checked and found sound
- **Dating:** AD 55-56 for the letter, so "fourteen years" gives AD 41-42, consistent with the notes' own arithmetic.
- **Quotation rule:** all site quotations match the current Plain (Jer 1:10, 9:24; Deut 19:15, 25:3; Gen 3:13; 1 Cor 1:31; Acts 2:42).
- **Numbering:** the 13:14 numbering note is correct: the English 13:12b-13 correspond to the Greek 13:12b, and the benediction is Greek 13:13. The Plain follows the KJV numbering and finds all the words.
- **Drift:** I found no sentence copied from the NIV or ESV beyond stock wording ("when I am weak, then I am strong"; the benediction). 13:5 and 12:14 follow the syntax of the Greek, not of those versions.
- **Style:** no em-dashes in any content file; reading level is suitable in the Plain.
- **Settings:** every speech, quotation, prayer and answer has a settings card, and the five traditions cards each have 4 or 5 named traditions, with no ranking.
- **Build check:** 0 errors, 0 warnings.

## Fixes applied

1. Accepted. Thrall moved out of the one-letter list everywhere (note 10:1, chapter 10 `views.C`, deep dive); her ICC view (a separate letter after 1-9, not the severe letter) is now stated as a fourth position. Furnish removed from the 10:1 note and setting `s` (his position was not verified); Lambrecht and Bornkamm removed (no verified source key). Harris, Garland, Barnett stay as unity.
2. Partly accepted. Unverified placements removed: no attribution to Harris, Thrall or Furnish in the note, chapter 11 `views.C`, deep dive or topic; "early Barrett" dropped (Barrett 1971, 1973); view (2) is now "many recent commentators". Added the strongest case for the two-group view (separate labels in 11:5 and 11:13; the guarded tone of Gal 2:6) and made the rebuttal fair; fixed the deep dive's slip that 11:13 describes the "super-apostles". Barnett, Georgi, Schmithals stay for who the intruders were.
3. Accepted (lead decision). Plain 11:5 and 12:11 now read "super-apostles" in quotation marks; gloss added at 11:5 on Greek huperlian ("beyond the limit", a sarcastic coinage); note, deep dive and the nt topic lead/aka use the same term.
4. Partly accepted. Edition marks corrected and named (N n S Y W G for the critical readings, T and B for the TR/Byzantine). 12:9 now also records the verb difference teleioutai/teleitai, and the manuscript list the reviewer found is given as "reported, not rechecked"; 11:3 names only the editions and drops the vague Metzger claim. Other entries have no manuscript lines added: I could not verify them and was told not to add unverifiable citations.
5. Accepted in part. New variants at 11:28 (epistasis/episystasis), 13:7 (euchometha/euchomai) and 13:2 (added grapho). 10:12: the texts/auto data show only a verb-form difference (synias/synious), no Western shortening, so no entry was added.
6. Accepted. New note at 13:2 gives both readings of "second visit"; the Plain keeps its choice, flagged; the 12:14 note no longer calls 13:2 decisive.
7. Accepted. Lutheran card no longer says the Disputation treats the thorn; Pentecostal thorn split removed here and in the healing topic contribution. Orthodox lines on healing and apostolic succession now cite `ware-orthodox` (general, no page given); no unction text was found to cite.
8. Accepted. Corona muralis note now credits Judge as proposer and Furnish (Anchor Bible) as developer, calls it a suggestion, adds Aulus Gellius 5.6 for the award, and drops Barnett and Garland as the route. Pawlak not cited (could not state the argument accurately).
9. Accepted. "fixes a date" became "points to a date ... if Aretas then ruled the city"; the note says the Plain's "governor" is one of two readings and the date holds only on that reading. The coin evidence was not added (unverified).
10. Accepted. 10:16 note: probably Spain, with Rome a stop on the way.
11. Accepted. Gal 4:15 now quoted as in the Galatians Plain.
12. Accepted. "already" dropped from 11:1; new note on indicative versus imperative.
13. Accepted. Removed "a bit too much" (now "somewhat more"), "we got there first", "Look at it this way" (now a plain "If ..."), and the causal "and so" at 11:19; 12:7 now "and because of" with a note on the hard clause; "some say" at 12:16 flagged in the note as supplied; gloss added for 13:11 "be glad" (also "farewell").
14. Accepted. Catholic card now cites CCC 77 and 861-862 for succession and keeps 156 and 799-801 only for signs of credibility and charisms; Orthodox line given `ware-orthodox`. Lutheran and Anglican voices not added: no verified sources.
15. Partly accepted. Lutheran assurance line added (Augsburg Confession, Formula of Concord); Wesley now Sermons 10, 11 and 12. Ware chapter not given: could not verify a chapter.
16. Accepted. CCC 232-267 now for the Trinity only; the Mass greeting cited as the Order of Mass (Introductory Rites); fourth-century claim removed; "chiasm" changed to "parallel"; "best-known benediction" removed. Lutheran, Anglican and Baptist voices not added (no sources).
17. Accepted. 11:31 now has three readings (critical; Byzantine adds "Christ"; TR also adds "our"); 13:14 says the Philippi note is TR only.
18. Accepted. 11:22 note attributes the claim to the "Paul within Judaism" reading and names the other view.
19. Accepted. 4 Maccabees (some Orthodox Bibles) and the Life of Adam and Eve, with the 12:2 group (in no church's Bible, dates uncertain, 3 Enoch much later), are tiered and dated at first mention.
20. Accepted. Gloss 12:2 now "a believer in Christ"; 11:29 "feel strong anger or distress".
21. Accepted. Tapeinos note says "often/usually".
22. Accepted by dropping the sentence: the Tertullian and Jerome references could not be verified.

Plain verses changed: 10:8, 10:14, 11:1, 11:4, 11:5, 11:19, 12:7, 12:11. Quotes of these verses in other books: none found. Counts now: 86 verses, 64 notes, 16 variants, 33 glosses, 4 chapter pages, 21 topic contributions; check 0 errors, 0 warnings.

## Verification pass (2026-10-29)

Counts: verified 38 (kept; hedges removed where present), corrected 17 (Georgi, Sumney, 1 Clement wording, Life of Adam and Eve date, Thrall and Barnett wording, Calvin on 10:4 and the thorn and 12:2, Aquinas/Augustine, Luther, Palamas, Testament of Levi, Apocalypse of Moses, Trent, Westminster, Pentecostal, Lutheran, Baptist, Trinity cards), removed 22 (12:9 witness list, 11:3 NA28 bracket claim and hedges, Kasemann, Barrett and Schmithals as holders of views, Baur, three ware-orthodox Orthodox cites and the Holy Unction line, 4 Maccabees 18:7-8 and the seduction claim, 16 `metzger` source keys, Formula of Concord, Baptist Faith and Message, Divine Liturgy and Lossky claims, source keys kasemann, barrett-opponents, schmithals, barrett-2cor). Not opened and left in the part: Segal, Himmelfarb, Morray-Jones, 3 Enoch, Ramsay, Fredriksen, and the boasting scholars (Betz, Forbes, Judge, Plutarch). Log: .scratch/2Co-10-13-verify/sources-checked.md. Check 0 errors, 0 warnings; no hedges remain.

## Verification check (2026-10-29)

Hostile check of the verification pass, from sources opened in this session (Crossref API pages, publisher and library records and Wikipedia pages in search results, newadvent.org, Perseus catalogue). Counts: item 1 = 3 findings; item 2 = 12 claims tried (8 verified, 4 unverifiable or partly); item 3 = 11 names or groups not shown as checked; item 4 = 0 cards below two views, 3 cards with a lost distinct view. Severity count for this section: 0 critical, 2 major, 5 minor.

### (1) Hedges, unopened works, commentary keys
1. MAJOR. variants.json, 12:1 entry ("It is certainly not good for me to boast", about line 183): "Metzger's committee judged the critical text the likelier original". Metzger cannot be opened here and the pass removed the `metzger` key from all 16 entries, but this sentence survived. Remove it, or say only what the word list shows.
2. MAJOR. sources.json keys `harris-2cor-1013`, `garland-2cor-1013`, `barnett-2cor-1013` and `thrall-2cor-1013` sit on several notes (entries 0, 4, 7, 9, 11, 17 and 18 of notes.json: the opening note on 10:1, and the notes on 10:10 and the opponents). The log says Harris, Garland and Barnett were "listed under unified letter (course-notes list)", never opened, and Thrall rests on search excerpts of a review. A key tells the reader the claim is in that book; no opened page states the claims at those verses. Drop the keys, or support them.
3. MINOR. `calvin-2cor-1013` reads "(1548)" and `chrysostom-2cor-1013` "(late fourth century)". Calvin's date was found nowhere; for Chrysostom the NPNF editor says the date is not exactly known (see 2.11, 2.12).

### (2) Spot checks
1. Forbes, "Comparison, Self-Praise and Irony", NTS 32 (1986) 1-30. VERIFIED, Crossref.
2. Morray-Jones, "Paradise Revisited (2 Cor 12:1-12)", HTR 86 (1993) 177-217 and 265-292. VERIFIED, Crossref (two parts, as the key states).
3. Judge, "Paul's Boasting in Relation to Contemporary Professional Practice", ABR 16 (1968) 37-50. VERIFIED, ABR index and a Cambridge citation in search results.
4. Malherbe, "Antisthenes and Odysseus, and Paul at War", HTR 76 (1983) 143-173. VERIFIED, Cambridge Core listing and citations in search results.
5. Betz, Der Apostel Paulus und die sokratische Tradition (Mohr, 1972), on 2 Cor 10-13. VERIFIED, Mohr Siebeck catalogue in search results.
6. Fitzgerald, Cracks in an Earthen Vessel, SBLDS 99 (1988); Marshall, Enmity in Corinth, WUNT 2.23 (1987); Hock, Social Context of Paul's Ministry (Fortress, 1980). VERIFIED for title, series and date (library and publisher records in search results). UNVERIFIED: the note's claim that Marshall and Hock "explain this background" (notes 11:7); no opened page states their argument.
7. Aretas IV ruled about 9 BC to AD 40; defeated Herod Antipas after Antipas's divorce of his daughter (notes 11:32). VERIFIED, Wikipedia pages in search results. MINOR: the cited "Josephus, Antiquities 18.109-115" could not be confirmed; the pages cite 18.109-118.
8. Acts of Paul describes Paul as small, bald-headed and bandy-legged, late second century (notes 10:10). VERIFIED, University of Oregon text and a scholarly essay in search results.
9. Plutarch's essay on self-praise (notes 11:16, 12:2). VERIFIED for existence and title (Perseus catalogue: peri tou heauton epainein anepiphthonos). UNVERIFIED: the note's claim that Plutarch called self-praise rude "unless forced on you, for example by an attack"; the passage I found does not say that, and the Cambridge abstract says only that Chrysostom defends Paul on grounds Plutarch allowed.
10. Mishnah Makkot 3:10 and Josephus Antiquities 4.238, thirty-nine stripes. Logged as verified; not retried.
11. UNVERIFIABLE. Calvin, Commentary on Second Corinthians "(1548)" (sources.json). Search returned nothing on the date. The log verified Calvin's wording on biblehub, not the date.
12. PARTLY. Chrysostom "late fourth century" (sources.json). The NPNF editor, in search results, says the date is not exactly known and the place (Antioch or Constantinople) was disputed; nothing opened gives "late fourth century".

### (3) Named modern-scholar attributions not shown as checked
Harris, Garland and Barnett as defenders of unity (chapters l.22, l.30, notes entry 0; log: kept from a course-notes list); Harris and Barnett as holders of "Judaizing Jewish Christians" (chapters l.105, notes l.214, topics l.23); Winter (notes 10:10, "measuring Paul against the sophists"); Marshall and Hock (notes 11:7); Betz on Socratic irony and Forbes and Judge on rhetoric (notes 11:16; the titles and Judge's article are verified, the use is not); Segal, Himmelfarb and Morray-Jones on ascent traditions (chapters l.218, notes l.443; Morray-Jones's title supports the Jewish mystical background only); Ramsay on malaria (chapters l.205, l.213); Hengel, Schwemer and Murphy-O'Connor on the Damascus escape (notes l.367); Fredriksen on "Paul within Judaism" (notes l.306). Count: 11 names or groups. Also: notes 11:24 offers "the Paul within Judaism reading" as a scholarly view with no name and no source.

### (4) Traditions cards
- No card has fewer than two views. Signs of an apostle has three (Reformed, Pentecostal, Catholic); healing, assurance and the Trinity card have five each; third heaven has three.
- Lost a clearly distinct view: signs of an apostle (Orthodox deleted; the Orthodox answer on whether apostolic signs continue is now absent); assurance (Orthodox deleted, so no Eastern view of "examine yourselves"); third heaven (only Catholic, Orthodox, Reformed remain, no Lutheran or Pentecostal voice on visions, though the log does not show what was written there before). Count: 3 cards. The deletions follow rule 2 because "ware-orthodox" pages could not be opened; the gap should be filled with a source opened later (a church's own site, a catechism).

## Verification fixes (2026-10-29)

Findings handled: the surviving Metzger sentence at 12:1 (removed); the four commentary keys (harris, garland, barnett removed everywhere and from sources.json; thrall kept only on the 10:1 note and setting where a review states her view); Calvin and Chrysostom dates (removed); Marshall (name and key removed; Hock kept as verified); Plutarch (rewritten to what the essay's translations state: self-praise allowed against slander or in misfortune; the "distance" claim removed); Josephus 18.109-115 (checked on lexundria, kept); signs-of-an-apostle and assurance cards (Orthodox view restored from oca.org pages; third-heaven card left at three views).

Second-round attributions: verified and kept: Thrall (separate letter), Hausrath, Georgi, Sumney, Forbes, Judge (title), Segal, Morray-Jones, Ramsay, Hengel and Schwemer, Fitzgerald (rewritten, no "Stoic"), Hock. Names removed: Harris, Garland, Barnett, Winter, Marshall, Betz, Himmelfarb, Fredriksen, Murphy-O'Connor (views kept unnamed). Dates: letter "AD 55-56", "AD 41-42", "AD 33-34" and "winter 56-57" were not supported by any opened page (sources give 57 and a conversion between 34 and 36) and became "the 50s AD", "the early AD 40s" and "the mid-30s"; Aretas now "after AD 37, before his death about AD 40"; Didache "first or second century"; Justin about AD 155-157.

Counts: verified 17, corrected 13, removed 17 (9 names, 6 source keys, Metzger sentence, two source dates). Log: .scratch/2Co-10-13-verify/sources-checked.md. Check 0 errors, 0 warnings.

## Card restoration (2026-10-29)
Views restored (2): the Orthodox third-heaven view now carries the essence-energies teaching; the Pentecostal signs-and-apostles row now states the Assemblies of God position on apostolic function. Cards re-created: none.
Views still missing: the Palamas claim that no one sees God's essence, stated as Paul's case (no page opened ties it to Paul or states it); any further third-heaven views (nothing opened).
