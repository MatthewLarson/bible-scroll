# Hostile review: Matthew 26–28 (part 26-28)

Reviewer: independent agent, 2026-10-24. Files read: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json; proposals/nt/topics/pontius-pilate.json and anti-judaism.json; proposals/nt/works.json (gospel-of-judas, acts-of-pilate); book.json; terms.json and proposals/nt/terms.json; texts/orig/Mat.json (sbl, byz, TAGNT edition letters in `w`); texts/auto/Mat.json; the writer's drift log. Witnesses checked where possible in Tischendorf's 8th edition (Source Library, pp. 444–446).

Build: `VERBOSE=1 node tools/build.js --check Mat/26-28` gives 0 errors and 0 warnings in this part. The one error (tosefta-sukkah, Num/Isa) and the two warnings (book.json quotes 27:25 as "His blood be on us..." and 28:19 as "in the name of...") are outside this part.

## Verdict

This is a strong part. The translation follows the SBLGNT closely and keeps the hard things hard: "handed over" all through the passion, the verbless "His blood on us, and on our children!" (27:25), "into the name" (28:19), "Jesus Barabbas" with an honest variant entry, and "Jeremiah" with a fair note. The 27:25 deep dive checks out source by source: Cargal (NTS 37, 1991), Benedict XVI (*Holy Week*, 2011, with Hebrews 12:24), Melito, Luther (1543), Jules Isaac, *Nostra Aetate* 4 (quoted correctly), Catechism 597–598 and the Roman Catechism, the ELCA (1994) and *Dabru Emet* (2000). The six traditions cards are mostly well sourced. Most uncertain facts also hold up: Papyrus Florentinus 61 (AD 85, the prefect who "gives" a man to the crowds), Kloner's count (four rolling stones among more than 900 tombs), the Orthodox and Ethiopian veneration of Procla, and the Ethiopian veneration of Pilate. Still, the part is not ready. The writer rebuilt only 76 of 161 verses, and about a dozen of the verses left alone still follow the NIV where the Greek does not require it (26:59 has a seven-word NIV run). Two places break the binding term for προσκυνέω (28:9, 28:17). One traditions card attributes to Christ a Nicene Creed line that is about the Holy Spirit. One patristic citation is wrong (Augustine). The part leaves out the "Eloi" reading of Vaticanus at 27:46, though the note on that verse depends on "Eli". Several settings cards state the post-70 date as settled. Two traditions cards repeat questions that Matthew already asks elsewhere. None of this is hard to fix.

Counts: critical 0, major 8, minor 21.

## Findings

### 1. Major: verses that still follow the NIV where the Greek does not require it (plain.txt)
The drift log marks most of these verses "checked: no run of 5+ shared words". That is not true for 26:59, and the others keep NIV wording or sentence shape that the Greek does not require. Compared from memory, quoting a few words at most:
- **26:59** "kept trying to find false evidence against Jesus, so that they could have him killed": "false evidence against Jesus so that they could" is a seven-word NIV run. The Greek is ψευδομαρτυρίαν ("false testimony") ... ὅπως αὐτὸν θανατώσωσιν. Rebuild it, for example "were looking for false testimony against Jesus that would let them put him to death". Keep "testimony" in step with 26:60.
- **26:64** "Yet I tell all of you": "all" is not in πλὴν λέγω ὑμῖν. It is the NIV's way of marking the plural. Use "But I tell you".
- **26:40** "So you men could not stay awake with me for even one hour?": "you men" is the NIV's plural device. Οὕτως οὐκ ἰσχύσατε ... can be "Were you not strong enough to keep awake with me for one hour?"
- **26:58** "right up to the high priest's courtyard": NIV wording (ἕως is "as far as").
- **26:61** "This fellow said": NIV (οὗτος is "This man").
- **26:63** "By the living God, I order you under oath to tell us": the same shape as the NIV ("under oath by the living God: Tell us"). Ἐξορκίζω σε κατὰ τοῦ θεοῦ τοῦ ζῶντος allows "I put you on oath before the living God: tell us...".
- **26:74** "calling down curses": the NIV phrase. Use "began to curse" (the note can keep "call down a curse").
- **27:34** "There they gave him wine to drink": "There" is not in the Greek and copies the NIV's opening. "Bitter" before "gall" is also added (see 11).
- **27:40** "So you are going to tear down the sanctuary and build it in three days!": "going to" and "build it in three days" follow the NIV. The Greek has present participles: "You who tear down the sanctuary and build it in three days".
- **27:65** "Take a guard. Go and secure it the best way you know.": the imperative is a fair reading (the note discusses it), but the two-clause shape follows the NIV. Rebuild the second clause from ὑπάγετε ἀσφαλίσασθε ὡς οἴδατε ("Go, make it as secure as you know how" is the NIV, so try "Go, secure it as you see fit").
- **28:1** "came to look at the tomb": "to look at the tomb" is the NIV's choice for θεωρῆσαι. Try "came to see the tomb" (as in the 28:1 note's own title) or "to view the tomb".
- Weaker but worth a pass: 27:29 "set it on his head" (NIV), 26:54 (the clause shape "the Scriptures ... that say", NIV).

Not flagged: "Festival of Unleavened Bread" (26:17) is required by the binding terms; "on his right and on his left" (27:38) is aligned with 20:21; "may your will be done" (26:42) is aligned with 6:10.
Fix: rebuild these verses from the Greek and update the drift log honestly.

### 2. Major: binding term for προσκυνέω broken (28:9, 28:17; note on 28:9)
proposals/nt/terms.json requires "bow down to / bow down before (in every Gospel scene, including ... 28:9, 17)". It allows "worship" only where no bodily act is in view. The Plain English Translation has "bowed down to worship him" (28:9) and "bowed down in worship" (28:17), so it adds the interpretation the term rule keeps out. The worship card in this very chapter asks whether this is worship of God, so the Plain English Translation should not settle it. The 28:17 gloss, "fell at his feet in worship", also adds "at his feet", which 28:17 does not have.
Fix: 28:9 "...held on to his feet and bowed down before him"; 28:17 "There they saw him and bowed down before him" (SBL has no object, so "bowed down" alone is also possible). Move "worship" into the note and the card. Re-anchor the note on 28:9 and the gloss on 28:17.

### 3. Major: Nicene Creed line misapplied (chapters.json 28, traditions card "Is Jesus to be worshiped as God?", Orthodox view)
The card says Christ is worshiped "as the Nicene Creed says: 'with the Father and the Son he is worshiped and glorified.'" In the Creed that clause is about the Holy Spirit, not the Son. As written it is a misattributed quotation.
Fix: quote the Creed on the Son ("true God from true God, ... of one essence with the Father") and say that Orthodox worship gives the Son the same worship as the Father (for example the doxology "Glory to the Father and to the Son and to the Holy Spirit"). Cite Ware.

### 4. Major: wrong patristic citation (notes.json 27:5, "Two accounts of Judas's death")
"Harmonizers since Augustine have suggested ... the body fell when the rope or branch broke (Augustine, *Harmony of the Gospels* 3.7)." *De consensu evangelistarum* 3.7 (§§28–31) is about why Matthew names Jeremiah in 27:9. It argues from the unity of the prophets and reads the field as a symbol. It says nothing about Acts 1:18 or the broken rope.
Fix: drop "since Augustine" and the key from this note, or replace it with a source that really gives the harmonization. Move `augustine-harmony` to the 27:9 note and add Augustine's explanation there as a fifth view (the Spirit let the name stand to show that the prophets speak with one voice).

### 5. Major: missing variant at 27:46 ("Eli" or "Eloi")
In the TAGNT, ηλι ηλι is in every edition except Westcott-Hort (W), which prints ἐλωί from Codex Vaticanus. Tischendorf (p. 444) reports Β ελωει ελωει, with 33, a few others and the Coptic reading "Eloi" in place of Matthew's "Eli". Bezae reads ζαφθανει and the Old Latin has *zapthani*. The spelling is split three ways: λιμα (most manuscripts, the Byzantine text, KJV "lama" after the TR's λαμα), λεμα (B L 33) and λαμα (D). The note on 27:46 builds an argument on "Eli": the Hebrew "Eli" explains the confusion with Elijah. Readers should know that Vaticanus has Mark's form here.
Fix: add a variants.json entry on "Eli, Eli, lema sabachthani?" with readings for Eli/lema (SBL, NA28, THGNT), Eloi (Vaticanus, 33, Coptic, WH; take the full list from NA28 or Metzger), and lima/lama (Byzantine, TR/KJV), plus Bezae's "zaphthani". Hedge the note's sentence to "most manuscripts".

### 6. Major: debated date stated as settled in settings `readers` (chapters.json)
book.json gives the date as "Uncertain" and lists pre-70 dating as a view. Three cards treat the post-70 setting as fact:
- 26:3–5 "For readers after AD 70, when the high priesthood had fallen";
- 26:50–56 "For a church living under Rome after a failed Jewish war";
- 27:15–26 "For Matthew's community after AD 70, a scene that explained ... the fall of Jerusalem".
The last of these is the card on 27:25, where the most care is needed.
Fix: hedge each one ("If, as most critical scholars think, Matthew wrote after AD 70...") or give the date views in `views`.

### 7. Major: traditions cards that repeat a question or use the wrong `top`
- 26:52 (the sword) asks the same question as the 5:39 card in part 05-07 ("May Christians use force, as soldiers or police?", top `holy-war`) and Deuteronomy 20 (top `holy-war`), but this card is filed under `church-and-state`. The two Matthew cards will not link to each other.
- 28:19 (infant or believer's baptism) repeats the 19:14 card in part 19-23 ("Does ... 19:14 support baptizing infants?", top `baptism`). The brief asked for this card only "if no earlier card covers it better".
Fix: change 26:52 to top `holy-war`. Either point it to the 5:39 card or narrow it to what is new in 26:52 (self-defense, or force for Christ's cause; compare Luke 22:38 and the John 18 card). For 28:19, keep the card only if it is narrowed to the "disciple, then baptize" order argument, and point to 19:14 for the rest.

### 8. Major: witness lists naming editions only (variants.json 27:56 and 26:20)
- **27:56 Joseph/Joses** names only SBL/NA28 against THGNT, the Byzantine text and the TR, with no manuscripts. Tischendorf (p. 446) prints Ἰωσῆ with the mass of manuscripts. He lists Ἰωσήφ in D*, L, 157 and a few others, the Old Latin, the Vulgate, the Coptic, the Ethiopic and the Harclean margin; Bezae's corrector has Ἰωσῆτος (as in Mark). NA28 also cites Sinaiticus' first hand for Ἰωσήφ (check this in NA28 before adding it). The `why` should also note Chrysostom's identification of this Mary with Jesus's mother, which Tischendorf reports. It bears on the 27:56 note.
- **26:20** gives editions only. Add the manuscripts for and against μαθητῶν from NA28 or Tischendorf.
Fix: add dated witnesses as the brief requires, attributed ("reported by Tischendorf").

### 9. Minor: 27:15 "At every festival" overstates κατὰ ἑορτήν
Most translations, and the 27:15 note itself ("The Passover amnesty"), take it as "at the festival", meaning Passover each year. "Every festival" claims a custom at all the feasts, which no source supports, and the gloss then has to correct it ("Every Passover").
Fix: "At the festival the governor used to set free one prisoner..."

### 10. Minor: the same Greek word rendered differently, which hides Matthew's echoes (plain.txt)
- θόρυβος: "riot" at 26:5 but "uproar" at 27:24. Matthew sets the leaders' fear (26:5) against what actually happens (27:24). Use one word in both places.
- καταλύω τὸν ναόν: "destroy God's sanctuary" (26:61) but "tear down the sanctuary" (27:40). The mockers repeat the charge, so the wording should repeat.
- ἠγέρθη: "He has been raised" (28:6) but "He is raised" (28:7).
- κηρύσσω: "announced" (26:13) but "proclaimed" in the parallel 24:14.

### 11. Minor: small translation slips (plain.txt)
- 27:11 "Jesus was made to stand": ἐστάθη is intransitive here ("Jesus stood"). The added force is not in the Greek.
- 26:67 "Then people spat in his face": the subject is the council members who have just answered (26:66). "People" blurs who did it. Use "they".
- 27:63 "this deceiver": the Greek is ἐκεῖνος ὁ πλάνος, "that deceiver". The note's own title says "That deceiver".
- 27:34 "bitter gall": "bitter" is added. Leave the meaning to the gloss, which already says "something bitter".
- 26:29 drops τούτου: "this produce of the vine". The note's `orig` includes the word.
- 27:55 "A number of women": the Greek is πολλαί, "many women".
- 27:64 "lie" for πλάνη loses the play on πλάνος (27:63). "That last deception would be worse than the first" would keep it.

### 12. Minor: a guess stated as fact (notes.json 27:25 "All the people")
"Either way, it was a few hundred people in a courtyard, not a nation." No source gives the size of the crowd, and this softens the text, which the brief forbids ("without softening the text"). The 27:20 note handles this correctly with "may have been small".
Fix: "The crowd at the governor's residence was at most a few thousand, and perhaps far fewer; it was not the nation."

### 13. Minor: Kloner reported against his own conclusion (notes.json 27:60)
The count is right: Kloner, BAR 25:5 (1999), found four round rolling stones among more than 900 Second Temple tombs. But the note then concludes "a round stone fits a wealthy man's tomb". Kloner argued the opposite: Jesus's tomb was probably closed with a square block, and the verb "roll" fits that too.
Fix: report Kloner's conclusion and give the round-stone view as the alternative.

### 14. Minor: attribution without a source (notes.json 28:1, "Women as the first witnesses")
"Many historians, including N. T. Wright and E. P. Sanders, argue that early Christians would not have invented witnesses their world found weak." Wright makes this argument (*Resurrection of the Son of God*). Sanders' *Historical Figure of Jesus* treats the resurrection experiences as fact, but I could not confirm that he makes the women-witness argument, and the note gives no key for him.
Fix: give a page reference with `sanders-historical-figure`, or name someone who does make the argument (Bauckham, *Gospel Women*; Dale Allison).

### 15. Minor: one governor's practice called a Roman custom (notes.json 27:14)
"Roman custom gave accused people three chances to answer." That comes from Pliny's own practice with Christians (*Letters* 10.96: he asked them three times), not from a known general rule.
Fix: "Pliny later describes asking accused Christians three times...", or drop the sentence.

### 16. Minor: Mark's timeline used in a note on Matthew (notes.json 27:35)
"Jesus died within about six hours (27:45–50)." Matthew gives no time for the crucifixion itself. The "third hour" is Mark 15:25.
Fix: "In Mark's timing (Mark 15:25, 34), about six hours."

### 17. Minor: Mishnah reference (notes.json 26:59)
The second-day rule for a guilty verdict is in Mishnah Sanhedrin 4:1 (see also 5:5), not 5:1, which is about how witnesses are examined.

### 18. Minor: 27:9 variant details (variants.json)
"A few Greek minuscules" for the omission of the name: the main witness Φ (Codex Beratinus, 500s) is a majuscule, with 33 and some Old Latin and Syriac copies. The entry also leaves out the "Isaiah" reading (minuscule 21 and Old Latin *l*), which Metzger reports beside the "Zechariah" one.
Fix: correct the description and add the third reading.

### 19. Minor: 27:49 spear variant overstates the support against it
The shorter reading is credited to "the Latin and Syriac versions". Tischendorf (p. 445) and the Tyndale House note on this verse show the addition in some Vulgate manuscripts, the Christian Palestinian Aramaic (Palestinian Syriac) version and the Ethiopic. Chrysostom also knew it, and Severus of Antioch reports a debate over it. The `b` line "some members [of Metzger's committee] wanted them shown in brackets" could not be verified.
Fix: say "most Latin and Syriac copies", add U and 1010 to the witnesses for the addition, and either quote Metzger exactly or drop the committee remark.

### 20. Minor: variants that KJV or THGNT readers would notice are missing
- 27:4 "innocent blood" against "righteous blood" (B², L, Θ, the Latin; discussed by Metzger).
- 27:5 Byzantine ἐν τῷ ναῷ, KJV "in the temple", against "into the sanctuary". This matters for the 27:5 note on whether Judas entered the *naos*.
- 27:57 ἐμαθητεύθη (SBL, NA28) against ἐμαθήτευσεν (THGNT, Byzantine; KJV "was Jesus' disciple"): an SBL/THGNT split that changes the English.
- 28:17 Byzantine adds "him" (KJV "they worshipped him").
- 26:28: add Bezae (D) to the witnesses for "new".

### 21. Minor: Pilate topic overstates Coptic veneration (proposals/nt/topics/pontius-pilate.json)
"The Ethiopian and Coptic churches honor him and his wife as saints." The Ethiopian Church does venerate Pilate and Procla (on 25 June, Sene 19), and the Eastern Orthodox honor Procla (27 October). For the Coptic Church, the usual reference works say only that the belief was "historically held". Present-day Coptic veneration of Pilate is doubtful. The 27:19 note ("the Orthodox and Ethiopian churches honor her") is correct.
Fix: "the Ethiopian Church honors Pilate and his wife as saints, and the Coptic tradition once did".
The other proposals pass: anti-judaism.json is accurate and fair, with no duplicate topic found, and the works entries for gospel-of-judas (Irenaeus; Codex Tchacos, published 2006) and acts-of-pilate are accurate.

### 22. Minor: smaller gaps in the traditions cards
- Real presence, Orthodox: add that the Synod of Jerusalem (1672, the Confession of Dositheus) used μετουσίωσις. "Prefer not to define how" is true of modern teachers but not of the whole tradition.
- The cup for everyone, Catholic: add the Catholic reading of 26:27 itself, that "all of you" was said to the apostles (Trent, Session 21, chapter 1). Otherwise the card gives the Protestant reading of the verse and only a practical answer from Rome.
- The formula card, Latter-day Saints: there is no source. Cite Doctrine and Covenants 20:73 for the words used, and the Catholic Congregation for the Doctrine of the Faith (2001) for the non-recognition.
- Real presence: a Methodist view is optional (Articles of Religion XVIII; Wesley's hymns on the Lord's Supper).
- Otherwise the six cards are fair and the citations check out: Trent 13 "truly, really, and substantially"; Augsburg X, XXII, XVI, IX; Formula of Concord VII; Westminster 29, 29.4, 23.2, 28.4, 8.2, 21.2; Articles 28, 30, 37; Schleitheim 1 and 6; the 1661 Quaker declaration; Baptist Faith and Message VII; Second London Confession 29–30; Catechism 1374–1377, 1390, 1250–1252, 1240, 1256, 2263–2265, 2307–2317; Heidelberg 74; UPCI; the New World Translation's "did obeisance".

### 23. Minor: quotations that do not match the site's own wording
- The 27:56 note quotes 13:55 as "James and Joseph and Simon and Judas". The site's Plain English Translation reads "James, Joseph, Simon and Judas".
- The 28:10 note gives Psalm 22:22 (via Hebrews 2:12) as "I will declare your name to my brothers". The site's Plain English Translation of Psalm 22:22 reads "I will spread the news of your name to my brothers". Either label the line as Hebrews' Greek or use the Psalm's Plain English Translation.
- The `jesus` topic contribution quotes "lets his spirit go" (27:50). The Plain English Translation reads "let his spirit go".

### 24. Minor: possessive spelling differs from the rest of Matthew
This part writes "Jesus's" 84 times, including the Plain English Translation at 27:32 ("Jesus's cross"). Every other Matthew part writes "Jesus'" (45 to 98 times each).
Fix: use "Jesus'" throughout, or have the lane lead set one style.

### 25. Minor: a "Claude's theory" box that is not original (topics.json, judas-iscariot `claude`)
The "Peter and Judas as a matched pair" box is offered as Claude's own suggestion. The 26:75 note in this same part says Christians "have always read them together" and cites Chrysostom.
Fix: present it as a traditional reading, or say where it overlaps with published work (Chrysostom; Davies and Allison), as STYLE rule 4 requires.

### 26. Minor: settings cards (chapters.json)
- 27:15–26 lumps Pilate's wife's message, which was sent to Pilate, into a card whose `to` is "the crowd". Give 27:19 its own card (by: Pilate's wife; to: Pilate; why: to warn him off), or fix `to`.
- 26:14–16: `why` describes what happened rather than what the words were meant to do. Give Judas's purpose ("to sell the moment of arrest").
- 26:36–46: `to` leaves out the other disciples, to whom Jesus speaks first (26:36).
- Coverage is otherwise good: 25 cards, every speech covered.

### 27. Minor: verify the Chrysostom claim (chapters.json 27 deep dive)
"John Chrysostom's sermons against Judaizing Christians (386–387) used it with savage force." That Chrysostom used the deicide charge in *Adversus Judaeos* is secure. That he used Matthew 27:25 in those sermons needs a homily number. His *Homilies on Matthew* 86 certainly comments on the verse.
Fix: cite the homily, or attribute the comment to *Homilies on Matthew* 86.

### 28. Minor: book.json quotations to fix (for the 01-04 owner)
The build warns that book.json quotes 27:25 as "His blood be on us and on our children" and 28:19 as "in the name of the Father and of the Son and of the Holy Spirit". This part's Plain English Translation reads "His blood on us, and on our children!" and "into the name of...". Pass this to the book.json owner.

### 29. Minor: confusing framing (chapters.json 26, view L)
"The chapter is framed by two 'handings over': the Son of Man handed over ... (26:2) and Peter's denial ... (26:75)." A denial is not a handing over.
Fix: rephrase, for example "framed by Jesus' prediction that he will be handed over (26:2) and Peter's tears after his denial (26:75)".

## Facts verified as correct (no change needed)
Caiaphas (Josephus, *Antiquities* 18.35, 95; the 1990 ossuary); Cumanus' Passover riot (*Jewish War* 2.224–227); the Pilate stone (1961); Philo, *Embassy* 299–305; *Jewish War* 2.169–177 and 2.175 (Corbonas); Tacitus, *Annals* 15.44; Mishnah Pesachim 8:6, 10:1, 10:6–7; Berakhot 6:1; Bava Kamma 7:7; Sanhedrin 1:6, 4:1, 7:5; Eruvin 53b; Yoma 39b; Sanhedrin 43a (twice); Bava Batra 14b; Jerome on the Nazarene Jeremiah apocryphon; Origen on "Jesus Barabbas"; Papyrus Florentinus 61 (AD 85); Philo, *Flaccus* 36–39 (Carabas); *Jewish War* 6.304 and 5.212–214; Suetonius, *Caligula* 32; Cicero, *Verrines* 2.5.165; Yehohanan (1968); the Garden Tomb dated to the Iron Age; Julius Africanus on Thallus; Licona (2010) and Geisler; Justin, *Dialogue* 69 and 108; *First Apology* 61; Tertullian, *De spectaculis* 30; Josephus, *Antiquities* 4.219; Celsus' "hysterical woman"; Hare and Harrington (CBQ 1975); Meier (CBQ 1977); Conybeare (ZNW 1901); the Didache 7:1; Pliny, *Letters* 10.96; Maximus the Confessor and Constantinople III; Jaubert; Fridays on 14 Nisan in AD 30 and 33; William Carey (1792); Lapide.

## Fixes applied

1. Fixed. Rebuilt 26:59, 26:64, 26:40, 26:58, 26:61, 26:63, 26:74, 27:34, 27:40, 27:65, 28:1, 27:29 and 26:54 from the literal lines with new sentence shapes. Re-checked every verse not rebuilt in the first pass and rebuilt 43 more (56 in this pass; 119 of 161 in all). The drift log is updated, and the remaining 42 verses are marked as re-checked with reasons.
2. Fixed. 28:9 now reads "held on to his feet, and bowed down before him", and 28:17 reads "they bowed down" (SBL has no object). The 28:9 note was re-anchored and now explains that proskyneō is the bodily act and also the ordinary word for worship. The 28:17 gloss is now on "bowed down". The 28:9–10 settings card and the worship card say "bow down" too.
3. Fixed. The Orthodox view now quotes the Creed on the Son ("true God from true God... of one essence with the Father") and the doxology, citing Ware.
4. Fixed. Augustine and his key are dropped from the 27:5 note. Augustine's view (the Spirit let the name stand to show that the prophets speak with one voice; *Harmony* 3.7) is now view (5) in the 27:9 note, with `augustine-harmony`.
5. Fixed. Added a 27:46 variant with four readings: Eli/lema (SBL, NA28); Eloi (Vaticanus, 33, Coptic, Westcott-Hort); lima (Byzantine) and lama (TR/KJV, D); and Bezae's "zaphthani". Witnesses are from Tischendorf. The note now says "In most manuscripts".
6. Fixed. The settings cards for 26:3–5, 26:50–56 and 27:15–26, and the 27:25 deep dive, now say "If, as most critical scholars think, Matthew wrote after AD 70...". The 27:15–26 card also gives the earlier-date reading.
7. Fixed. The 26:52 card moves to top `nonviolence` (the proposal exists) and is narrowed to what 26:52 adds: force to defend the innocent or Christ's cause, against private violence (Anabaptist/Quaker, Catholic with Aquinas II-II q.40 a.1, Lutheran, Reformed). It points to 5:39. The 28:19 card is narrowed to the "disciple, then baptize" order argument and points to 19:14. The formula/Oneness card is kept.
8. Fixed. 27:56 now lists Tischendorf's witnesses for Ἰωσήφ (D*, L, 157, Old Latin, Vulgate, Coptic, Ethiopic, Harclean margin), Ἰωσῆ (A, B and most) and Bezae's corrector Ἰωσῆτος. The `why` gives Chrysostom's identification of this Mary with Jesus' mother. 26:20 now lists Tischendorf's witnesses for μαθητῶν (ℵ L M Δ 33 157, Latin, Bohairic, Peshitta) and against (B D and most, Sahidic, Eusebius, Augustine). I did not add ℵ* at 27:56 because I could not check NA28.
9. Fixed. 27:15 now reads "At the festival the governor used to set one prisoner free..."; the gloss is now "At Passover each year".
10. Fixed. θόρυβος is "uproar" at both 26:5 and 27:24, and the 26:5 note links them. 26:61 and 27:40 now both read "tear down... sanctuary and build it in three days". 28:7 reads "He has been raised", and 26:13 reads "proclaimed in the whole world" as in 24:14.
11. Fixed. 27:11 "Jesus stood"; 26:67 "they"; 27:63 "that deceiver" (gloss "that fraud"); 27:34 drops "bitter"; 26:29 "this produce of the vine"; 27:55 "Many women"; 27:64 "the last deception", with the 27:64 note linking planē to planos.
12. Fixed. The 27:25 note now uses the reviewer's wording ("at most a few thousand, and perhaps far fewer; it was not the nation").
13. Fixed. The 27:60 note now gives Kloner's conclusion (most likely a square block, which "roll" also fits) and gives the round-stone view as the alternative.
14. Fixed. Sanders is replaced by Bauckham (*Gospel Women*, new key `bauckham-gospel-women`) and Allison (`allison-resurrecting`).
15. Fixed. The 27:14 note now says that Pliny later describes asking accused Christians three times (*Letters* 10.96), with `pliny-letters`.
16. Fixed. The 27:35 note now says "In Mark's timing (Mark 15:25, 34)".
17. Fixed. The 26:59 note now cites Mishnah Sanhedrin 4:1 (see also 5:5), with 7:5 on blasphemy.
18. Fixed. The omission reading is now Φ (Codex Beratinus, 500s, per Metzger), 33, 157, Old Latin a b, Syriac copies and the copies Augustine knew (per Tischendorf). Added the Isaiah reading (21, it-l).
19. Fixed. The text says "most Latin and Syriac copies". U, 5, 48, 67, 115 and 127, Vulgate MSS, the Palestinian Syriac, the Ethiopic and Chrysostom are added from Tischendorf, and Γ and 1010 per Metzger. The committee remark is dropped and replaced with Severus' report (via Tischendorf).
20. Fixed. Added variants at 27:4 (innocent/righteous), 27:5 (εἰς τὸν ναόν / ἐν τῷ ναῷ), 27:57 (ἐμαθητεύθη / ἐμαθήτευσεν; Tischendorf puts B with the active) and 28:17 ("him"). D is added for "new" at 26:28.
21. Fixed in proposals/nt/topics/pontius-pilate.json and the topic contribution: "the Ethiopian Church honors him and his wife as saints, and the Coptic tradition once did".
22. Fixed. Orthodox: Synod of Jerusalem 1672 (Dositheus, decree 17) and μετουσίωσις, new key `dositheus-decree-17`. Catholic cup view: Trent Session 21 ch. 1 ("all of you" said to the apostles). LDS: D&C 20:73 (`doctrine-covenants`) and the CDF 2001 response (new key `cdf-lds-baptism-2001`). Added a Methodist real-presence view (Articles of Religion XVIII; Wesley, *Hymns on the Lord's Supper*, new key `wesley-hymns-lords-supper`).
23. Fixed. 13:55 is now "James, Joseph, Simon and Judas", Psalm 22:22 is now "I will spread the news of your name to my brothers", and the jesus contribution reads "let his spirit go". The 13:52 quote also now matches the site's Plain English Translation.
24. Fixed. "Jesus'" is used throughout (0 "Jesus's" in the part and in my two proposal topics), including Plain English Translation 27:32.
25. Fixed. The box now opens by naming the pairing as traditional (Chrysostom; Davies and Allison) and limits the claim to one added observation (whom each man turns to), labeled as building on that tradition.
26. Fixed. 27:19 has its own card (by Pilate's wife; to Pilate; why: to warn him off), and the 27:15–26 card no longer lists her. 26:14–16 why: "to sell the priests the moment of arrest...". 26:36–46 to: now includes the disciples told to sit while he prays.
27. Fixed. The deep dive now attributes the reading of 27:25 to Chrysostom's *Homilies on Matthew* 86 and states the Adversus Judaeos point separately. Key `chrysostom-hom-matthew` (identical to the 01-04 definition); `chrysostom-homilies-matthew` is removed.
28. Not mine to fix: reported to the coordinator for the book.json owner (27:25 and 28:19 quotations).
29. Fixed. View L now reads "framed by Jesus' prediction that he will be handed over to be crucified (26:2) and Peter's tears after his denial (26:75)".
Also: lane rule 6 is applied to every variant entry. Witnesses are attributed to Tischendorf or Metzger by name, and editions are named as editions. For 26:56 and 27:9, the fulfillment formulas now follow 1:22 and 2:17, and 27:40 reads "If you are God's Son", as in 4:3, 6. Check: `VERBOSE=1 node tools/build.js --check Mat/26-28` gives 0 errors and 0 warnings. One error elsewhere was in Isa 56-66 (westermann key) at one run.
