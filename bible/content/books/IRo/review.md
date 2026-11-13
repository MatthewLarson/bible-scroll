# Hostile review: Ignatius to the Romans (IRo)

Reviewer: separate hostile-review agent, 2026-11-13. Checked against `texts/orig/IRo.json` (Lake's Greek, verse by verse), Lake's printed pages (local OCR `apostolicfathers01lake.txt` 8683-8760, 11700-12420), Lightfoot 1889 vol. 2 (local OCR `.cache/dl/lightfoot-ign/p2v2.txt`), the writer's web copies in `.scratch/IRo/web` (Eusebius 3, Irenaeus 5.28, Jerome 16, LG, CCC 834, Hopko, OCA, LCMS district, Catholic Encyclopedia), Jerome's Latin (la.wikisource, De viris illustribus 16), and Lake's Greek of all seven letters (First1KGreek tlg1443.tlg001 in `.cache`). `VERBOSE=1 node tools/build.js --check IRo`: 0 errors, 0 warnings.

## Verdict

The Plain English Translation is careful and close to Lake's Greek. I found no copied modern translation, and every title of the greeting is kept. The 1:1 departure (Lightfoot's πλέον ἢ ᾐτούμην) is real, correctly quoted and properly entered as a variant, but the entry gets one witness wrong, and the verse's opening clause now says something Lightfoot warns against. The weak points are elsewhere. (1) The 1:0 greeting, the passage the brief cared about most, is not handled evenly. One note's preview states Lightfoot's regional reading of "presides" as fact. The views note leaves out the other reading Lightfoot himself sets out, the one the Catholic reading relies on, and never names the readings of "the love". (2) Lightfoot's apparatus, which the writer opened, shows two significant witness differences that are not entered as variants (2:1 τρέχων; 5:3 ἀνατομαί, διαιρέσεις). It also contradicts the 1:0 entry's witness list. (3) The Jerome reading is relayed from a mistranslated English version ("bread of the world" for Latin *panis mundus*, "pure bread"). (4) The Apostolic Fathers lessons are broken repeatedly: unnamed "many/some readers", unsourced "most/first/oldest/only" claims, a church row sourced from a third party, and an unsourced "Anglican" saint claim. Nothing is invented. The problems are fairness, two missing variants, and claims stated beyond their sources.

Counts: critical 0, major 11, minor 18.

## Findings

### 1. Major: the 1:0 greeting is not read evenly (notes.json 1:0 "presides in the region of the Romans" and "presiding over the love")
- The preview of the "A church that presides" note says, in the site's voice: "Rome's church has first place in its region." That is one of two readings Lightfoot weighs. Lightfoot (p2v2 lines 19466-19540): ἐν τόπῳ κ.τ.λ. "probably describe the limits over which the supremacy or jurisdiction extends". Then: "On the other hand it might be urged that ἐν τόπῳ κ.τ.λ. describes not the range of the supremacy, but the locality of the supreme power itself. In this case προκάθηται would be used absolutely of a certain precedence assigned to the Church of Rome ... over the other churches of Christendom ... allied to the 'potentior principalitas,' which Irenaeus (iii. 3. 2) assigns to the Roman Church." He rejects it ("it is difficult to see why Ignatius should write ἐν τόπῳ χωρίου Ῥωμαίων in place of ἐν Ῥώμῃ"), and ends: "The idea of the 'cathedra Petri' therefore has no place here." The note gives the first reading as fact and leaves the second out, although the second is the strongest form of the Catholic reading.
- The views note "'Presiding over the love': how the churches read it" never names the readings the brief asked for (brief-apfathers2 Terms, προκάθημαι: "first in love; presiding over the 'love', the whole church or its charity, with who holds each"). Its Catholic row (LG 13: "presides over the whole assembly of charity") in fact takes ἀγάπη as the communion of churches, and its Anglican row (Lightfoot, line 19734: "as it is first in rank, is first also in love") takes it as charity. The note should say so in plain words, so the reader sees where the disagreement lies.
- The Anglican row leaves out Lightfoot's actual conclusion against the Petrine reading ("The idea of the 'cathedra Petri' therefore has no place here"), which book.json sections[1] does quote. Put it in the note, where readers of 1:0 will see it.
- The Catholic (LG 13 with its note 11, "Ad Rom., Praef."; CCC 834 with note 315, "Ad Rom. 1, 1") and Orthodox (Hopko) rows check out against the saved pages. The preview "Orthodox and Anglican scholars" is fine; "Protestant" readers are represented only by Lightfoot. That is acceptable if it is labeled honestly, as it is ("Anglican scholarship").
- Fix: change the preview of the "presides" note to state that the phrase is debated. Add a short paragraph giving both of Lightfoot's readings of ἐν τόπῳ (range vs. seat of the presidency; the second linked to Irenaeus 3.3.2). In the views note, name the two senses of "the love" and who holds each. Add Lightfoot's cathedra Petri sentence to the Anglican row. Optionally cross-reference To the Magnesians 6:1 (the bishop προκαθημένου εἰς τόπον θεοῦ), where Ignatius uses the same verb of a bishop.

### 2. Major: missing variant at 2:1, φωνή or τρέχων ("only a sound")
Lightfoot's apparatus (p2v2 lines 20569-20575): "φωνή] L*ΣSm Joann-Mon ...; τρέχων GAMg ... in G the words πάλιν ἔσομαι τρέχων are omitted in the text and added in the margin." So Lake prints φωνή from the versions, against his own Greek manuscript G, which reads τρέχων ("I will be running again"). Lightfoot calls this a deliberate change by the interpolator, along with γενήσομαι. It is a meaning-changing difference, and it bears on the word/voice antithesis that the 2:1 note builds on. Also: the Plain English Translation's "I will be a word of God" supplies a future that the Greek (ἐγὼ λόγος θεοῦ) does not have. Lake's English is "I am a word of God", and Lightfoot (lines 20696-20704) argues that "the terse and characteristic ἐγὼ λόγος Θεοῦ is correct" against the γενήσομαι of Cureton, Bunsen and Zahn. Fix: add a variant entry at 2:1 (anchor "only a sound": φωνή L S, Lake; τρέχων G A g, Lightfoot's report). Either render "I am a word of God", or keep the future and note it. In the 2:1 note, replace "Some readers hear an echo of John the Baptist" with the named witness: Lightfoot reports that John the Monk (4th century) explained the passage by the Word and the Voice of John 1:1, 14, 23 (lines 20540-20596), and Lightfoot accepts that sense.

### 3. Major: missing variant at 5:3, and Eusebius said to quote 5:1-3 "word for word"
Lightfoot prints [ἀνατομαί, διαιρέσεις] in brackets and reports (lines 22464-22472): "GAm[Sm]Mg; διαιρέσεις ... SA; om. altogether, LΣ Euseb Euseb-Syr." The writer's own saved Eusebius English (3.36.9: "fire and cross and attacks of wild beasts, let wrenching of bones, cutting of limbs ...") has no "cuttings and tearings apart". So the Latin and Eusebius, a witness this book cites again and again, leave out two items of the list. Yet note 5:1 "Fighting beasts on the road" says "Eusebius quotes 5:1-3 word for word", chapters.json ch5 says "in full" and "the whole chapter", and book.json sections[4] says "in full". Lightfoot also reports συγκοπαί (g Euseb) for Lake's συγκοπή (G). Fix: add a variant at 5:3 (anchor "cuttings and tearings apart"). Change "word for word" and "in full" to "quotes 5:1-3, with small differences". The lesson in agent-writer-works.md also applies: no claim about a father's readings without his Greek opened. The writer opened only the New Advent English of Eusebius.

### 4. Major: Jerome relayed through a mistranslation (variants.json 4:1, reading 3 `b`; notes 4:1 "God's wheat"; chapters ch4 deep)
The variant's `b` says: "Jerome's version in the New Advent English reads 'I am the grain of Christ ... that I may be found the bread of the world'". Jerome's Latin (De viris illustribus 16, la.wikisource, opened today) reads "Frumentum Christi sum, dentibus bestiarum molar, ut panis mundus inveniar". *Mundus* here is the adjective "clean, pure", not "world". The NPNF English has mistranslated it. Read rightly, Jerome supports Lake's footnote "om. ... Hieron." exactly: "pure bread", without "of Christ". As written, the entry gives readers a reading that does not exist. Fix: quote the Latin, translate "that I may be found pure bread", and say the NPNF English renders *mundus* as "of the world". The same lesson applies as in finding 3: open the father's own language before claiming his reading.

### 5. Major: variants.json 1:0, the long recension misreported for χριστώνυμος
Reading 1's `w` is "Lake's text (the Greek, G as Lake designates it, and the long recension g)". Lake's footnote names only ALS for the other reading. It says nothing of g. Lightfoot, whom the writer opened, reports (line 19720 area): "χριστόνομος] g* (though the common text has χριστώνυμος); christi habens legem L; ... lege christi A; χριστώνυμος G". So g's best text supports χριστόνομος, and only G (with the common printed text of g) supports χριστώνυμος. Fix: reading 1 "G; the common printed text of g"; reading 2 "L A S (Lake), g* (Lightfoot); printed by Lightfoot".

### 6. Major: 1:1 "he has let me see your faces" says he has already seen them; and the 1:1 variant misattributes the Armenian
- ἐπέτυχον ἰδεῖν: Lightfoot (lines 19971-20024): "'I have been successful', 'it has been granted me'; not meaning that he had already seen them, but that circumstances were such as to have already insured the fulfilment of his prayer." The Plain English Translation's "he has let me see your faces" reads as if Ignatius were already in Rome. The letter is written from Smyrna (10:1). Fix: for example, "I prayed to God, and he has granted that I will see your faces". This also keeps Ignatius as the one who obtains, as the term note at 1:2 claims for this verb.
- The variant's `why` says: "The Armenian, he notes, gives the same sense." Lightfoot's apparatus: "πλέον ἠτούμην GLAg ... Am has quantum petii, plus etiam accepi, which gives the same sense as my conjectural reading." A (the Armenian version) supports the manuscripts and is listed in this same entry as doing so. Am (the Armenian Acts) is the one that gives Lightfoot's sense. The entry contradicts itself. Fix: "the Armenian Acts of the martyrdom (Am, in Lightfoot's sigla) give the same sense."
- The handling of the departure itself is sound. Lake's printed Greek (OCR line 11750) has no ἢ, and his English (line 11796) gives "so that I have obtained more than I asked". It is reported to the lead in build.md.

### 7. Major: views credited to unnamed "many/some readers" (Apostolic Fathers lesson)
- notes 7:3 "God's bread and Christ's blood": "Many readers hear the Supper too". The note also states as the meaning, in the site's voice, that Ignatius "is speaking of the food he longs for ... union with Christ through death". Its only named church voice is a district web page of the LCMS. The brief asked for a views note "from sources that discuss Ignatius". The writer opened Pohle, "Real Presence" (Catholic Encyclopedia), and the OCA's "Holy Eucharist" for ISm, but gives no named Catholic or Orthodox reading of this verse here.
- chapters ch7 `readings`: "Read as mysticism of martyrdom" and "Read as words of the Supper" name no one.
- topics.json `lords-supper`: "many readers also hear the church's meal"; `martyrs` uncommon: "Some readers find ..."; notes 2:1: "Some readers hear an echo of John the Baptist" (see finding 2: it is John the Monk and Lightfoot); book.json canon.reliability.sections[3]: "a question readers raise"; canon.cited_in[3]: "is argued".
- Fix: name the holder from a source opened, or cut the point. At 7:3, give the readings with their holders (Lightfoot's note on 7:3 is local; Lake's footnote is already quoted), and point to the Matthew 26 and John 6 cards.

### 8. Major: unsourced superlatives and "only" claims (Apostolic Fathers lesson)
None of these is credited to a source that says it: book.json lead "the most personal of his seven letters, and the most quoted" (Eusebius also quotes Smyrnaeans 3); sections[4] "Romans is the best-attested of the letters outside its own manuscripts"; topics.json `martyrs` "the fullest early Christian statement of a martyr's own mind"; notes 4:1 "This is the line of the letter that was quoted first"; chapters ch4 deep "it is the oldest outside witness to this letter"; ch1 sum "The longest and grandest greeting in Ignatius's letters"; ch7 sum "the most quoted lines of the letter after 'God's wheat', and the most argued over"; notes 10:3 and ch10 views "the only one of the seven letters with a date"; sections[1] "No other letter of Ignatius uses such language of a church". Some are probably true. I confirmed by searching Lake's Greek of all seven letters that καλανδ occurs only in Romans 10:3, and that Ignatius calls himself ἐπίσκοπος only at Romans 2:2. They still need a source opened, or rewording as plain description ("the letter is dated"; "Irenaeus quotes it about AD 180"). Lake's "except that to the Romans" (line 8708) does support "the only one not written to thank".

### 9. Major: chapters ch4 deep, "known in Gaul, Palestine and Rome within two or three generations"
Irenaeus (Gaul, about 180) is about seventy years after Ignatius's death. Eusebius (Palestine) wrote in the early 300s, and Jerome wrote De viris illustribus at Bethlehem in 392-393, nearly three centuries later. Nothing opened puts a quotation in Rome. Fix: "known to Irenaeus in Gaul within about seventy years, and later to Eusebius and Jerome".

### 10. Major: canon block church claims (book.json canon)
- `summary`: Ignatius "is honored as a saint by Catholic, Orthodox, Anglican and Lutheran churches". The writer's sources-checked.md says the Church of England calendar page served no text, and no other Anglican calendar was opened. So the Anglican claim has no source. Fix: open an Anglican calendar (Common Worship, or the Episcopal Church's *Lesser Feasts and Fasts*), or drop "Anglican".
- `accepted_by[1]` (Eastern Orthodox): the Scripture status is sourced to Reid in the Catholic Encyclopedia, a third party. The lesson says a church's row may cite only that church's own document. The OCA life and commemoration date are fine. Fix: cite an Orthodox document for the canon point, or say only what the OCA sources show.
- `accepted_by[4]` (LCMS): sourced to the Southern District's page, not the synod's own calendar. Name it as the district page (it is), or open the LCMS calendar. The row also does not state the Scripture status, as the other rows do.

### 11. Major: notes 4:1, "Seeking death: how it has been judged"
The brief asked for how the churches have judged sought martyrdom, "only sourced". The note's sources are Eusebius (who does not judge it; "praises the letter" is not in 3.36, which describes and quotes) and the Martyrdom of Polycarp 4:1. Its conclusion, "they mark the line the churches have kept, honoring martyrs while warning against seeking arrest", has no source. Fix: cite a church document or named theologian who addresses voluntary martyrdom, or reduce the note to what Eusebius and the Martyrdom of Polycarp say. Replace "praises" with "quotes".

### 12. Minor: 8:3 "reach the goal" breaks the fixed term
brief-apfathers2 and brief-iro list 8:3 among the ἐπιτυγχάνω "reach God" places, and the 1:2 note says the verb stands "simply" at 8:3 ("simply 'reach'"). The Plain English Translation adds "the goal". Fix: "that I may reach God" (with a note that "God" is implied), or "that I may reach it". Make the 1:2 note match.

### 13. Minor: notes 2:2 "Poured out like wine" and canon.cited_in[2], "The verb is the one Paul uses"
Paul uses σπένδομαι (Philippians 2:17; 2 Timothy 4:6). Ignatius has σπονδισθῆναι, from σπονδίζω. The two are from the same family but are not the same verb. The brief said to check exactly this. Fix: "a verb from the same family as Paul's".

### 14. Minor: quoted wording that is not the site's current Plain English Translation
The build checks only quotations of five or more words. These are shorter, but each is quoted as the site's verse: Matthew 23:24 "filtering out a gnat" (site: "filtering out the gnat", note 1:0 "Filtered like wine"); Romans 12:1 "as a living sacrifice" (site: "as a sacrifice that is alive", note 4:2); 1 Corinthians 10:17 "one bread, one body" (site: "one loaf ... one body", note 4:1); John 14:30, where "the ruler of this world" is given as John's phrase before the site's "the world's ruler" (note 7:1). Fix: use the site's words.

### 15. Minor: Christianismos is also in To the Philadelphians (notes 3:3; chapters ch3 views H)
"Ignatius uses it here and in his letter To the Magnesians (chapter 10)". Lake's Greek of To the Philadelphians 6:1 has χριστιανισμὸν ἀκούειν (First1KGreek tlg1443.tlg001, opened today). Fix: add "and To the Philadelphians (chapter 6)".

### 16. Minor: small translation shifts
- 1:0 ἥτις καὶ προκάθηται and ἣν καὶ ἀσπάζομαι: the "also" is dropped both times (Lake keeps "which also has the presidency", "which also I greet").
- 2:1 "I will never again have such a chance": "again" is not in οὔτε ... ποτε ἕξω.
- 3:1 "to hold firm in my case too": "in my case" is interpretation, since κἀκεῖνα is only "those things also". Keep it if a note says so.
- 4:1 ἐντέλλομαι πᾶσιν "I am telling them all" softens "I charge / give orders" (Lake: "I give injunctions to all").
- 4:3 μέχρι νῦν δοῦλος "a slave even now" loses "until now", which sets up the freedom that follows (Lake: "even until now a slave"). Suggest "up to now I am a slave".
- 9:3 "the road of the flesh" is awkward. Lake: "on my road according to the flesh". Suggest "my road in this life" or "my earthly route".

### 17. Minor: notes 1:1 "A prisoner writing ahead"
"Eusebius says Ignatius was 'sent from Syria to Rome'". Eusebius 3.36.3 (the saved New Advent page) begins "Report says that he was sent ...". The note drops Eusebius's own hedge. book.json reliability keeps "('report says')". Make the note match.

### 18. Minor: notes 3:1 "Rome taught others"
The note cites "Eusebius, Church History 4.23.10", but the writer opened only book 3 of Eusebius. Lightfoot quotes the Greek and cites "Euseb. H. E. iv. 23" with no section (line 19780 area). Either open book 4 or cite it as Lightfoot does. The reference "(1 Clement 1:1)" for a letter "the Roman church had sent to Corinth" should be the greeting, 1 Clement 1:0. Verse 1:1 does not name Rome.

### 19. Minor: book.json sections[3], what "G" means in Romans
"for this letter that siglum stands for the Greek he follows, which is not the Florence manuscript" is stated without a source. The brief required that the meaning of G be found on a page before it is named. Lightfoot's list of sigla supports it (p2v2 line 1015: "G. Greek Original (Medicean and Colbertine mss)"; line 803: "the only extant Greek ms which contains this epistle (the Colbertine)"). Cite it, and the same wording can then replace "G as Lake designates it" in the variants.

### 20. Minor: production notes in reader content
chapters ch1 deep "Why no card here" ("The plan for this book allowed a ... card ...") and the last sentence of book.json sections[1] explain the site's internal sourcing rule to the reader. A reader needs the readings, not the editorial process. Fix: cut both. The views note and the pointer to Matthew 16:18 are enough. See the lead question below.

### 21. Minor: unlabeled speculation, notes 10:2 "Syrians in Rome"
"perhaps as other prisoners. 'For the glory of God' may hint at the second." This is Claude's idea with no source. Mark it as a theory (`spec`) or cut it.

### 22. Minor: notes 5:2 "Beasts that would not attack"
"A beast that would not attack left the prisoner alive for another show" has no source. Source it or cut it. Germanicus (Martyrdom of Polycarp 3:1) is a case of a man drawing the beast on, not of a beast refusing. Say "compare".

### 23. Minor: notes 10:3 "The date line"
The Roberts-Donaldson English reads "on the day before the ninth of the Kalends of September (that is, on the twenty-third day of August)" (texts/en/IRo.json). It is translating a different wording. Say so, so that the 23rd and the 24th are not presented as two readings of the same words.

### 24. Minor: chapters ch9 views H overstates Lake
"Lake names, among Ignatius's motives in every letter ...". Lake (line 8725): three motives, "all or some of which can be traced in each letter". Fix: "in his letters".

### 25. Minor: topic contributions the brief assigned are missing
brief-iro "Topics" lists `church` (1:0) and `spiritual-powers` (7:1). Neither is in topics.json, although ch1 and ch7 list them in `topics`. Add short sections, or report why they are left out.

### 26. Minor: glosses.json 5:3 "Bear with me" → "Give me some slack"
συγγνώμην μοι ἔχετε is "forgive me / indulge me" (Lake: "Grant me this favour"; Eusebius's English: "Forgive me"). "Give me some slack" is flippant beside a list of tortures. Suggest "Forgive me for this" or "Indulge me".

### 27. Minor: notes 1:2 "'Reach God'"
"The same verb is behind 'obtain the grace' earlier in this verse and 'he has let me see' in 1:1". The 1:1 wording should change (finding 6). Keep this note in step with it.

### 28. Minor: cross-book quotations from books still in review
Notes quote Ignatius to the Ephesians 2:1, 20:1 and 20:2 and Ignatius to the Smyrnaeans 7:1. Their wording matches IEp and ISm today, but both are under review now. Recheck at alignment.

### 29. Minor: notes 4:3 "What 4:3 shows about Peter in Rome"
"The sentence assumes that both apostles had given orders (*dietassonto*) to the Roman Christians" is Lightfoot's reading, given in the site's voice. *Dietassonto* is a supplied verb, not in the text. Credit the reading to Lightfoot ("Lightfoot takes the sentence to assume ...") and mark the verb as supplied. The rest of the note is careful and sourced. The 1 Clement 5:4 and 5:7 wording matches the site.

## Checked and found sound
Every verse against Lake's Greek; the title list in 1:0; the 1:1 departure and its build.md report; 3:3 (G M g αἰώνιον, Lightfoot lines 21097-21190, with Origen via Zahn); 4:1 (Lake's footnote; Irenaeus 5.28.4 and Eusebius 3.36.12 English as quoted); 4:2 (two); 5:2 ἄκοντα; 6:2; 7:2; 7:3; Lake quotations (Zenobius, leopards, 3:3 footnote, 7:3 "play on the words", purpose, "general tendency", 1 Corinthians 7:22 printed margin); Lightfoot quotations at 1:0, 1:2, 4:3, 7:2 (eros, Origen as Lightfoot quotes him); OCA (God-bearer, the arms of Christ, "only his heart and a few bones", "desire has been nailed to the cross"); Catholic Encyclopedia (Colbertinus, "compelling", Dallaeus/Pearson, Zahn, Lightfoot, Harnack); Eusebius 3.36.2-6 and 3.22; Jerome 16 ("third bishop", "eleventh year", Daphnitic gate, "Now do I begin to be a disciple"); every site verse quoted at five or more words; settings (by evidence, with readers at 1:0 and 10:2); and reference forms ("Ignatius to the Ephesians 20:2", "Martyrdom of Polycarp 4:1").

## Lead questions (across books)
1. **The card at 1:0 (and at Smyrnaeans 8):** brief-iro allows a card if each row cites "a source that discusses this greeting". The writer applied the stricter works-brief lesson (that church's own document) and wrote no card, because the Orthodox and Anglican readings come from Hopko and Lightfoot. Which standard governs the planned cards in this batch?
2. **Production notes in content** ("Why no card here"): allow them or not, site-wide.
3. **Lake's siglum G** differs by letter: Medicean in six letters, Colbertine in Romans (Lightfoot's sigla). IEp, ISm and IRo should describe it the same way.
4. **NPNF English used as evidence for a father's wording:** finding 4 shows it can mislead. Consider requiring the original language for any reading credited to a father, across the batch.

## Fixes applied

Fixer, 2026-11-13. Sources opened this session: Lightfoot p2v2 OCR (1:0, 1:1, 2:1, 4:1, 4:3, 5:3, 7:3 notes and apparatus; sigla pp. 5, 9); Lake vol. 1 OCR (sigla 8909-8930, motives 8725-8732, English of 8:3); Eusebius's Greek, Church History 3.36 and 4.23 (Lake-Oulton, First1KGreek tlg2018.tlg002); Jerome's Latin, De viris illustribus 16 (la.wikisource); Lake's Greek of the seven letters (First1KGreek tlg1443.tlg001); the saved pages of LG 13, CCC 834, Hopko, OCA, LCMS Southern District, Catholic Encyclopedia, NPNF Jerome.
1. Accepted. "Presides" note: preview now says the phrase is debated; both of Lightfoot's readings of ἐν τόπῳ (range vs. seat, the second tied to Irenaeus 3.3.2) with his "cathedra Petri" line quoted, plus To the Magnesians 6:1 (checked in Lake's Greek); full quotations in a new ch1 deep section. Views note names the two senses of "the love" (charity / the fellowship of churches, with 9:3) and who holds each: LG 13 (sense 2), CCC 834, Hopko named as an Orthodox theologian, Lightfoot named as an Anglican scholar-bishop (title page: Bishop of Durham) with the cathedra Petri sentence. No reading in the site's voice. Kept as views notes, not a card (no Protestant church source on this greeting).
2. Accepted. New variant at 2:1 ("only a sound": φωνή L* Σ Sm, John the Monk / τρέχων G in margin, A M g, from Lightfoot's apparatus, with his "deliberate alteration" judgment). PET 2:1 "I am a word of God" (no verb in the Greek; Lightfoot's "terse ... ἐγὼ λόγος Θεοῦ"). Note 2:1 now names John the Monk as Lightfoot reports him, in place of "some readers".
3. Accepted. Opened Eusebius's Greek: it omits ἀνατομαί, διαιρέσεις, reads συγκοπαί and κολάσεις without κακαί, and calls the quotation κατὰ λέξιν. New variant at 5:3; "word for word"/"in full"/"the whole chapter" changed in note 5:1, ch5 sum and views, book.json sections[4].
4. Accepted. Jerome's Latin quoted (ut panis mundus inveniar = "pure bread"); the variant says the NPNF English (checked in the saved page) renders mundus "of the world". Note 4:1 and ch4 deep now quote Jerome's Latin, not the English. Irenaeus's wording now rests on his Greek in Eusebius; his Latin readings credited to Lightfoot's apparatus; ANF English wording removed.
5. Accepted. 1:0 variant witnesses: reading 1 "G; the common printed text of g"; reading 2 "L A S (Lake), g* (Lightfoot); printed by Lightfoot".
6. Accepted. PET 1:1 "he has granted that I will see your faces" (Lightfoot's "not meaning that he had already seen them"). Variant why: "the Armenian Acts of the martyrdom (Am, in Lightfoot's sigla)".
7. Accepted. 7:3 views note rewritten with named holders (Lightfoot, Zahn as Lightfoot reports him, Lake); LCMS district line removed there (not about 7:3). ch7 readings credited to Lightfoot and Zahn/Lake. lords-supper topic credits Lightfoot; martyrs "uncommon" cut; 2:1 see 2; reliability sections[3] reworded without "readers raise"; cited_in John 6:33 "is argued" sentence cut.
8. Accepted. Cut or reworded every listed superlative: lead ("the one letter not written to thank", from Lake; "most personal/most quoted" cut), sections[4] "best-attested" cut, martyrs "fullest" cut, 4:1 "quoted first" cut, ch4 "oldest outside witness" cut, ch1 "longest and grandest" cut, ch7 "most quoted ... argued over" cut, 10:3 and ch10 "only dated letter" reworded to "the letter is dated", sections[1] "No other letter" cut; "only title" limited to "in this letter".
9. Accepted. ch4 deep: "known to Irenaeus in Gaul within about seventy years, and later to Eusebius and Jerome".
10. Accepted. Canon summary: "Anglican" dropped (no Anglican calendar opened); now "commemorated in the calendars of" the US Catholic bishops, the OCA and the LCMS. Orthodox row: Reid's third-party canon claim removed; only what the OCA pages show. LCMS row names the Southern District page; no Scripture claim (none sourced).
11. Accepted. 4:1 note reduced to what Eusebius (now "quotes", with his own description of the plea, from his Greek) and the Martyrdom of Polycarp 4:1 say; the unsourced conclusion cut.
12. Accepted. PET 8:3 "Pray for me, that I may reach God" (αἰτήσασθε has no "God"; Lake "Pray for me that I may attain"); the 1:2 note says "God" is supplied at 8:3.
13. Accepted. Note 2:2 and cited_in: σπονδίζω "from the same family as Paul's spendomai", with Lightfoot's "The idea is taken from S. Paul".
14. Accepted. Matthew 23:24 "filtering out the gnat"; Romans 12:1 "as a sacrifice that is alive"; 1 Corinthians 10:17 quoted in the site's words; John 14:30 "the world's ruler" (note 7:1 and ch7 views N).
15. Accepted (checked in Lake's Greek, Philadelphians 6:1). Note 3:3 and ch3 views H add To the Philadelphians 6.
16. Accepted all six: PET 1:0 "It also presides", "I also greet it"; 2:1 "never have" (no "again"); 3:1 "to hold firm as well"; 4:1 "I charge them all"; 4:3 "up to now I am a slave"; 9:3 "my earthly road".
17. Accepted. Note 1:1 now gives Eusebius's own hedge from his Greek (λόγος δ' ἔχει, "the story is"), translated by the site; reliability uses the same words.
18. Accepted. Opened Eusebius 4.23 in Greek; cited as "Church History 4.23" (note 3:1 and ch1 spec); 1 Clement reference corrected to the greeting, 1 Clement 1:0, quoted in the site's words.
19. Accepted. sections[3] and the variants describe G for this letter as the Paris manuscript, citing Lightfoot's sigla ("Medicean and Colbertine mss"; "the only extant Greek ms which contains this epistle"); Lake's own list gives G as the Medicean only. Exact wording with line numbers in proposals/works/build.md "Romans sigla (for works-texts.py)".
20. Accepted. ch1 deep "Why no card here", the last sentence of sections[1] and the "No card is given here" line of the 1:0 views note removed.
21. Accepted. 10:2 speculation cut.
22. Accepted. 5:2 unsourced sentence cut; Germanicus introduced with "Compare"; Daniel ref dropped.
23. Accepted. 10:3 note quotes the Roberts-Donaldson date and says it translates a differently worded date.
24. Accepted. ch9 views H: "among the motives he finds in Ignatius's letters ('all or some of which can be traced in each letter')".
25. Accepted. Added topic contributions `church` (1:0, 9:3) and `spiritual-powers` (5:3, 7:1); both added to book.json topics.
26. Accepted. Gloss "Forgive me for this".
27. Accepted. 1:2 note now refers to "he has granted" in 1:1, with Lightfoot's gloss of ἐπέτυχον.
28. Noted for the lead (build.md): IEp 2:1, 20:1, 20:2 and ISm 7:1 quotations to recheck at alignment; no changes now.
29. Accepted. Note 4:3: Ignatius's verb is διατάσσομαι; the apostles' verb is Lightfoot's supplied διετάξαντο (the old "dietassonto" was the wrong form), credited to him.
