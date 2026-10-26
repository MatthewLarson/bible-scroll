# Hostile review: Acts 21–23 (part 21-23)

Reviewer: hostile-reviewer agent (not the writer). Date: 2026-10-25.
Scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json, topics.json, sources.json of this part;
proposals content/proposals/nt/topics/sanhedrin.json and sadducees.json; the proposed terms χιλίαρχος, παρεμβολή,
συνέδριον, ἡ ὁδός. `node tools/build.js --check Act/21-23` (VERBOSE=1): 0 errors, 0 warnings.

## Verdict

This part is solid work. I checked the translation verse by verse against the SBLGNT, the Byzantine text and the
TAGNT edition marks. It is faithful, readable and clearly built from the Greek: I found no NIV/ESV copying and
nothing invented. The rendering of the four proposed terms is consistent (commander, cohort, barracks, Sanhedrin, the
Way). The notes are dense and mostly accurate, and most of the sources check out: Daube in JBL 1990 and
Viviano–Taylor in JBL 1992 both exist and say what is claimed, and so do Augustine on 23:3, Josephus on the Egyptian,
the Sicarii, Ananias and James, the temple warning inscriptions, Cicero, Tacitus and Strabo. The settings cards cover
every speech, the letter and the night orders, and the two traditions cards are fair.

The serious problems are these:
- The part breaks two lead decisions: it capitalizes "Temple" throughout, and 21:25 does not use 15:29's decree
  wording.
- 22:6–16 does not match the wording of chapters 9 and 26 where the Greek is the same.
- Three factual errors misuse a source: the Nazirite offering counted as "five animals", Josephus said to link the
  Zealots of the 50s to Phinehas, and Josephus cited for Pharisee belief in angels.
- The 23:24 variant gives the Latin and leaves out the Greek minuscules behind the addition.
- There is no traditions card on whether Jewish believers should keep the law. That is the one real church
  conflict in chapter 21.

Nothing is critical. Every fix is local.

## Findings

### 1. Major: "Temple" is capitalized against the lead decision (all files)
- **Where:** plain.txt 21:26, 21:27, 21:28, 21:29, 21:30 (twice), 22:17, which is 7 times. Also 25 times in notes.json,
  28 in chapters.json, 10 in topics.json and once in glosses.json (21:34, "beside the Temple").
- **Problem:** The lead decided on lowercase "temple". Every other Acts part follows it: 01-04 (7 times), 05-07 (5),
  18-20 (4) and 24-28 (5) all print "temple". The shared terms already have "the commander of the temple" and "the
  temple" in 2 Maccabees.
- **Fix:** Lowercase "temple" in every file of this part, including "the Temple's outer court" in settings, "Temple
  courts", "Temple warning inscription" in prose, the gloss at 21:34 and the topics.json sections. Leave the Wikipedia
  article titles in `l` and `links` as they are.

### 2. Major: 21:25 does not use the decree wording of 15:29 (plain.txt 21:25; glosses; topics.json)
- **Where:** The Plain says "meat offered to idols, against blood, against anything strangled, and against sexual
  immorality". 15:29's Plain says "food sacrificed to idols, from blood, from what is strangled and from sexual sin".
- **Evidence:** The Greek items are the same as 15:29: εἰδωλόθυτον, αἷμα, πνικτόν, πορνεία. The lead has ruled that
  21:25 must follow 15:29.
- **Fix:** Rewrite the line, for example: "...they must keep away from food sacrificed to idols, from blood, from what
  is strangled and from sexual sin." φυλάσσεσθαι can stay "guard themselves against" if you prefer, but the four
  nouns must match 15:29. Then update everything that quotes the old wording:
  - the variant anchor and both `plain` readings at 21:25;
  - the glosses "meat offered to idols" and "anything strangled";
  - the food-laws contribution in topics.json, which says "meat offered to idols, blood, what is strangled and sexual
    immorality".

### 3. Major: 22:6–16 does not match chapters 9 and 26 where the Greek is the same (plain.txt; note 22:14)
The fixed sayings are right: "Saul, Saul, why are you persecuting me?", "Who are you, Lord?", and the voice's reply
with "the Nazarene" added. Other shared Greek is rendered differently:
- **22:6, περιαστράψαι φῶς:** The Plain says "a powerful light blazed out of heaven all around me". 9:3 has the same
  verb (περιήστραψεν) and says "flashed all around him", and 26:13 also says "flashed all around". Use "flashed all
  around me".
- **22:13, Σαοὺλ ἀδελφέ:** The Plain says "Saul, my brother". 9:17 has identical Greek and says "Brother Saul". Use
  "Brother Saul".
- **22:13, ἀνάβλεψον … ἀνέβλεψα:** The Plain says "look up and see! … I looked up and saw him". In context (22:11 "unable
  to see") the main sense is recovery of sight. 9:12, 17 and 18 render the verb "your sight will come back". The
  Plain line as it stands never says Paul was healed; only note 50 does. Suggested fix: "Brother Saul, see again!" At
  that same instant I could see, and I looked at him." Keep the double meaning in the note.
- **22:14, προεχειρίσατο:** The Plain says "picked you out ahead of time". 24-28 renders the same verb at 26:16 as "to
  choose you". BDAG gives "choose for oneself, select, appoint". The προ- does not here carry "in advance" (compare
  3:20, προκεχειρισμένον, "appointed"). "Ahead of time" over-translates toward a predestinarian reading and breaks the
  parallel. Use "chose you" or "appointed you". Correct note 51, which glosses the verb as "appoint in advance".
- **22:4, ἐδίωξα:** The Plain says "I hounded this Way". This is the same verb as "why are you persecuting me" three
  verses later, and the speech plays on the repeat ("I persecuted… why are you persecuting me?"). Use "I persecuted
  this Way to the death", or add a nu note if "hounded" stays.

List the pairs in the report for the lead's alignment pass.

### 4. Major: Note 21:23 counts the Nazirite offerings wrongly (notes.json 21:23, "The Nazirite vow")
- **Problem:** The note correctly lists "a lamb, a ewe lamb and a ram", then says "Five animals and their gifts cost a
  good deal."
- **Evidence:** Numbers 6:14 has three animals: a male lamb for the burnt offering, a ewe lamb for the sin offering and
  a ram for the peace offering.
- **Fix:** "Three animals with their grain and drink offerings, for each of four men, cost a good deal."

### 5. Major: Josephus is misused on "zealous" (notes.json 21:20, "Jewish believers who kept the law")
- **Problem:** The note says the word had sharper overtones "in the 50s, when Josephus says groups claiming the zeal of
  Phinehas were turning to violence (Numbers 25:11)". Josephus does not tie any group of the 50s to Phinehas.
- **Evidence:** Josephus names the Zealots as a party only during the revolt (Jewish War 4, from AD 67–68). The
  Phinehas model of zeal comes from 1 Maccabees 2:26, 54 and from modern scholars such as Hengel's *The Zealots*, not
  from Josephus.
- **Fix:** "In the decades before the revolt, 'zeal for the law' in the tradition of Phinehas (Numbers 25:11; 1
  Maccabees 2:26) could justify violence; during the war a party called themselves the Zealots (Josephus, *Jewish
  War* 4)." Cite Hengel if you want a modern source.

### 6. Major: Josephus is cited for something he does not say (chapters.json, chapter 23, deep "Pharisees and Sadducees")
- **Problem:** The deep dive says the Pharisees "believed in the resurrection of the dead and in angels and spirits
  (*Antiquities* 18.12–14)".
- **Evidence:** Antiquities 18.12–14 speaks of fate, the immortality of souls, and rewards and punishments under the
  earth. It says nothing about angels or spirits. Pharisaic belief in angels and spirits is attested by Acts 23:8
  itself, not by Josephus.
- **Fix:** Cite Josephus only for the soul and the afterlife, and source angels and spirits to Acts 23:8.

### 7. Major: There is no traditions card on whether Jewish believers should keep the law (chapters.json, chapter 21)
- **Problem:** 21:20–26 is the main place in the New Testament where the churches really disagree over whether Jewish
  believers in Jesus may, or should, keep the law of Moses. The deep dive tells the Augustine–Jerome history well, but
  there is no "Where Christians differ" card.
- **Evidence:** brief-act lists 21:20–26 as a place needing full treatment, and brief-nt says most New Testament books
  need several cards. The real positions are:
  - **Catholic:** the Council of Florence, *Cantate Domino* (1442), taught that observing the legal ceremonies after
    the gospel's promulgation cannot be done without loss of salvation, by those who put hope in them. Modern Catholic
    teaching also speaks with respect of Jewish observance (Nostra Aetate 4).
  - **Reformed:** the ceremonial laws are abrogated (Westminster Confession 19.3).
  - **Lutheran:** Augsburg Confession 28 on ceremonies as not necessary.
  - **Orthodox:** the fathers, Chrysostom's Homily 46 on Acts treats the vow as accommodation.
  - **Messianic Jewish:** Torah observance as a calling for Jewish believers.
  - **Seventh-day Adventist:** a distinct line on moral and ceremonial law, if relevant.
- **Fix:** Add a card with top `law-of-moses` that uses these views and names the tradition labels from TRADITIONS.
  Keep it focused on Jewish believers and the law. The Gentile question already has cards at Acts 15.

### 8. Major: The 23:24 Western addition is misdescribed (variants.json 23:24)
- **Problem 1:** Reading 0 is credited to "The Greek manuscripts generally", and the `why` says the addition "is not
  found in the main Greek manuscripts". Reading 1 lists only Latin and Syriac witnesses and gives only a Latin text.
  As I recall it, Metzger's *Textual Commentary* reports the addition in Greek, in minuscules 614 and 2147, with it^gig,p,
  vg^cl and syr^h (with asterisk). It begins ἐφοβήθη γὰρ μήποτε ἁρπάσαντες αὐτὸν οἱ Ἰουδαῖοι ἀποκτείνωσι…. Check this
  against Metzger before writing it in.
- **Problem 2:** The Harclean Syriac has the words in its text under an asterisk, not "in the margin".
- **Problem 3:** The Latin is misquoted. The Clementine Vulgate reads "tamquam **accepturus** pecuniam", not
  "accepisset". The Clementine and Douay-Rheims also number the clause 23:25.
- **Fix:**
  - Add 614 and 2147 to reading 1 and give the Greek as `orig`, with the Latin in `b`.
  - Fix "accepturus" and the Harclean description.
  - Say that Douay-Rheims prints the clause as its 23:25.
  - Change "the Greek manuscripts generally" to "nearly all Greek manuscripts".
  - The English "as if he had taken" should become "as if he would take money" to match the Latin.

### 9. Minor: The 21:25 variant has the wrong edition attribution and misses the Western reading (variants.json 21:25)
- **Edition attribution:** Reading 0 gives ἀπεστείλαμεν ("we sent") for "SBLGNT, NA28 and THGNT". The TAGNT marks
  show NA28 and Tyndale House read ἐπεστείλαμεν ("we wrote"); only SBL (with WH and Tregelles) has ἀπ-. The Plain's
  "we wrote" actually follows NA28 and THGNT. Correct the `w` line and mention the SBL form.
- **Witnesses for the longer reading:** These are C, D, E, Ψ, 33 and the Byzantine text, against P74, ℵ, A and B.
  Name the early ones.
- **Missing Western reading:** Codex Bezae leaves "what is strangled" out here as it does at 15:20 and 15:29, giving
  the three-item "moral" decree. Check this in NA28 and add it as a third reading, or point to it in `b`.

### 10. Minor: The 21:22 variant underreports the witnesses (variants.json 21:22)
- **Problem:** The longer reading is credited to "Byzantine… with a number of early manuscripts".
- **Evidence:** Its support is strong and early: P74, Sinaiticus (01), Alexandrinus (02), Bezae (05), along with E,
  Ψ, 33 and 1739. The shorter reading rests mainly on Vaticanus (03) and C*.
- **Fix:** Name them, so readers can see why "the evidence is divided".

### 11. Minor: Some KJV-visible differences have no variant entry (variants.json)
- **22:30:** KJV "loosed him from his bands" (ἀπὸ τῶν δεσμῶν, TR/Byz) and "their council".
- **23:9:** KJV "the scribes that were of the Pharisees' part" (οἱ γραμματεῖς) against critical "some of the scribes"
  (τινὲς τῶν γραμματέων). This could go in the 23:9 entry's `b`.
- **21:16:** Bezae's village stop and its "Nason" are only in a note. The Acts brief asks for a variant entry wherever
  Bezae changes what a reader would notice. Make it an entry, giving D's Greek as Metzger reports it (οὗτοι δὲ ἤγαγον
  ἡμᾶς πρὸς οὓς ξενισθῶμεν, καὶ παραγενόμενοι εἴς τινα κώμην ἐγενόμεθα παρὰ Νάσωνί τινι Κυπρίῳ), and say that D spells
  the name Nason.
- **21:1 (Myra):** Check whether P41 joins D here, as I believe NA28 reports. Add it if confirmed.

### 12. Minor: Note 22:16 calls Churches of Christ "sacramental readers" (notes.json 22:16)
- **Problem:** Churches of Christ teach that baptism is for the remission of sins, but they reject "sacrament"
  language. The card on the same verse correctly labels them "Restorationist".
- **Fix:** Say "Catholic, Orthodox and Lutheran readers take the washing as what God does in baptism; Churches of
  Christ also teach that sins are forgiven at baptism."

### 13. Minor: The gloss on "common" erases the distinction the terms keep (glosses.json 21:28)
- **Problem:** "common => unclean, unfit for God". The shared terms keep κοινός "common" and ἀκάθαρτος "unclean" apart,
  and the spec box and note 21:28 depend on that distinction.
- **Fix:** "made ordinary, profane, no longer set apart for God".

### 14. Minor: Small factual slips
- **Note 22:28 (Cassius Dio):** Dio 60.17.6 says citizenship could be had for broken glassware, not "a couple of
  broken cups". Use "broken glass".
- **Chapter 22, deep "Was Paul a Roman citizen?":** "His name Paul (*Paulus*) is a Roman family name." Paul(l)us is a
  cognomen, not a family name (nomen). Write "a Roman name (a cognomen)".
- **Chapter 23, views L:** "The nephew is the only member of Paul's family ever named in a story". He is not named.
  Write "ever mentioned".
- **Note 21:27:** "had warned the elders of plots by 'the Jews' (20:19)". In 20:19 Paul recalls trials he suffered
  through Jewish plots; it is not a warning. Reword.
- **Note 21:25, title and preview ("James recalls…"), and the food-laws topic ("James reminds Paul"):** The Greek
  subject is plural (εἶπόν τε, "they said"), meaning James and the elders together. Say "the elders" or "James and the
  elders".
- **Note 21:36:** It says the crowd "shouts the same Greek words" as at Jesus' trial. John 19:15 has ἆρον ἆρον
  (aorist); the exact match is Luke 23:18, αἶρε τοῦτον. Lead with Luke 23:18 and say John has a near form.
- **Topics anti-judaism ("Copyists already softened 23:12") and note 23:12 ("Copyists already felt the problem"):**
  These state the copyists' motive as fact. The variant's own `why` correctly says the change "looks like a
  correction". Hedge the note and topic the same way.

### 15. Minor: Paul's letters are quoted though they have no Plain yet (notes and chapters)
- **Problem:** brief-act says to cite Paul's letters by reference and not to quote a Plain that does not exist. These
  will raise quote-mismatch warnings once Romans to Philemon are written.
- **Where:**
  - note 21:21 ("to the Jews I became as a Jew", 1 Corinthians 9:20);
  - note 22:3 (Philippians 3:6 and Galatians 1:14);
  - note 22:11 (2 Corinthians 4:6 and 1 Corinthians 9:1);
  - note 22:16 ("you were washed", 1 Corinthians 6:11);
  - note 23:1 (Philippians 1:27);
  - chapter 21's deep dive (Romans 15:26) and chapter 22's (1 Corinthians 9:1, Galatians 1:15–16);
  - the glory topic (2 Corinthians 4:6).
- **Fix:** Paraphrase without quotation marks, or keep the quotations and list them in the report for the lead's
  quote sync.

### 16. Minor: Style and wording
- **22:16 "So what are you holding back for now?":** Clumsy. Use "And now, why wait?" (τί μέλλεις).
- **23:3 "and then you break the law and order me hit?":** Use "order me to be struck".
- **21:30 "the doors were slammed shut" and 22:23 "tearing off their coats":** Both sharpen the Greek (ἐκλείσθησαν
  "were shut"; ῥιπτούντων "throwing (off)"). Note 22:23 itself speaks of "shaking out garments". Use "shut" and
  "throwing off their coats".
- **ἱμάτια:** 7:58 (05-07) says "cloaks" and 22:20 says "coats" for the same garments in the same story, which 22:20
  recalls. Align them; list the pair for the lead.
- **22:15 "before everyone in the world":** The Greek is πρὸς πάντας ἀνθρώπους, "to all people". "In the world" is
  added; use "to all people".
- **23:6 "part of the council":** Just before, the verse uses "Sanhedrin". "Part of the council" is fine English, but
  "one part of the Sanhedrin were Sadducees" avoids a second name for the same body in the same sentence.
- **23:1:** "I have done my duty… toward God, with a fully good conscience" shares "duty" and "good conscience" with a
  well-known modern rendering of this verse. It is not a copy, since "as a citizen" is the writer's own, but a closer
  rendering of πεπολίτευμαι would avoid the echo: "I have lived my life as a citizen before God with a completely
  clear conscience."

### 17. Minor: The women-in-ministry card has unsourced views (chapters.json, chapter 21, traditions 21:9)
- **Problem:** The Orthodox, Methodist and Reformed views have no source keys.
- **Suggested sources:**
  - Orthodox: Ware, or the 1988 Rhodes Inter-Orthodox consultation on women and ordination.
  - Methodist: the 1956 General Conference of the Methodist Church.
  - Reformed: PCA Book of Church Order 7-2 and the PC(USA) Book of Order.
- **Wording:** The Orthodox line "women have served as deaconesses in parts of the church's history" is fair. Some
  churches have revived the order (the Patriarchate of Alexandria, 2017); add it if you like.

### 18. Minor: The chapter 21 T lens view has an unsourced, vague claim (chapters.json, chapter 21, views T)
- **Problem:** "the chapter's Nazirite vow has been read alongside Christian vows of religious life" has no source.
- **Fix:** Name a writer who makes this reading, or cut it.

### 19. Minor: Proposed topic cores (content/proposals/nt/topics/)
- **sadducees.json kind:** It has `"kind":"Ideas"`, but the existing `pharisees` core is `"People"`. Use the same kind
  for the two parties.
- **sadducees.json aka:** The alias "Zadokites (Sadducees)" is awkward. "Zadokites" more usually names the Qumran
  priestly line. Drop it or keep only "Tsedukim".
- **sanhedrin.json aka:** The alias "the council" is generic. It will catch searches meant for `council-of-jerusalem`
  ("Apostolic Council") and `divine-council`. Prefer "Jewish high council" and "Great Sanhedrin".
- **sanhedrin.json content:** The core has no Old Testament background. Add a sentence on the seventy elders of
  Numbers 11:16, which the Mishnah treats as the model (Mishnah Sanhedrin 1:6), with refs.
- **Both cores:** Otherwise accurate. The Josephus references for the Sadducees (Antiquities 13.297–298; 18.16–17;
  Jewish War 2.164–166) are correct.

### 20. Minor: Source key naming (sources.json)
- **Problem:** `cassius-dio` is author-only. STYLE.md asks for author plus work ("never a bare surname").
- **Fix:** Rename it `cassius-dio-history` and update note 22:28. Other keys are fine and match their duplicates in
  other parts word for word.

### 21. Minor: The writer's uncertain points, checked
I checked these and they need no change beyond the findings above:
- **Augustine on 23:3:** *De sermone Domini in monte* 1.19.58 reads Paul's words as prophecy. Correct.
- **Daube:** JBL 109 (1990) 493–497. Correct.
- **Viviano and Taylor:** JBL 111 (1992) 496–498. Correct.
- **Alexandrinus at 23:23 (δεξιοβόλους):** This is reported in the NA apparatus (A, 33). Attribute it to "the NA28
  apparatus" rather than to Metzger unless you find it in Metzger.
- **Bezae at 21:16:** Correct as described (see 11).
- **21:22:** See 10.
- **23:24:** See 8.
- **23:30:** Correct. ℵ and the Byzantine text have ἔρρωσο against A and B, and THGNT prints it, as the TAGNT marks
  confirm.
- **Myra at 21:1:** See 11.
- **22:9 note on the genitive and accusative of ἀκούω:** Balanced and fair.
- **23:8 notes on what the Sadducees denied and "both":** Fair, with the views stated well.

## Counts

Critical 0. Major 8 (1–8). Minor 13 (9–21).

## Fixes applied

1. Fixed. "temple" lowercased in every file of the part (7 in plain.txt; all notes, chapters, topics, glosses, variants), plus "the temple's destruction" in the sadducees core. Only the Wikipedia titles in `l`/`links` ("Temple Warning inscription") keep the capital.
2. Fixed. 21:25 now uses 15:29's nouns ("from food sacrificed to idols, from blood, from what is strangled and from sexual sin"); "guard themselves" kept because the verb (φυλάσσεσθαι) differs from 15:29's ἀπέχεσθαι. Glosses re-anchored ("food sacrificed to idols", "what is strangled"); the food-laws topic updated. The variant anchor did not change.
3. Fixed. 22:4 "I persecuted this Way"; 22:6 "a powerful light from heaven flashed all around me" (as 9:3, 26:13); 22:13 "'Brother Saul, see again!' At that same instant I could see again, and I looked up at him" (sight restored, as 9:17–18); 22:14 "chose you for this" (as 26:16 "choose"). Note 22:13 re-anchored and rewritten; note 22:14 no longer glosses the verb as "appoint in advance" and points to 3:20 and 26:16.
4. Fixed. Note 21:23 now says three animals with their grain and drink offerings, for each of four men.
5. Fixed. Note 21:20 rewritten: Phinehas zeal is tied to Numbers 25:11 and 1 Maccabees 2:26, and the Zealots as a named party to the war years (Josephus, Jewish War 4). Added hengel-zealots and josephus.
6. Fixed. The chapter 23 deep dive cites Josephus (Antiquities 18.12–14; Jewish War 2.163) only for the soul's survival and reward or punishment, and Acts 23:8 for resurrection, angels and spirits.
7. Partly fixed. Added the card at 21:20–26 (top `law-of-moses`) with Catholic (Florence, Cantate Domino; Aquinas; Nostra Aetate 4; Catechism 839), Orthodox (Chrysostom), Lutheran (Augsburg 28; Formula of Concord 10), Reformed (Westminster 19.3; Calvin on Acts) and Dispensationalist (Scofield; Ryrie) views. The Messianic Jewish view (Kinzer) is written but not on the card yet, because "Messianic Jewish" is not in TRADITIONS and the build errors on it. Requested in proposals/nt/build.md; the text is ready in .scratch/Act-21-23-fix/messianic_view.json. Adventist left out because its line is about the moral law and the Sabbath, not Jewish believers.
8. Mostly fixed. Reading 0 now says "Nearly all Greek manuscripts". Reading 1 adds minuscules 614 and 2147 with gig, p, the Clementine Vulgate and the Harclean Syriac "in its text marked with an asterisk", as reported by Metzger. The Latin is corrected to "tamquam accepturus pecuniam", checked against the Clementine text at drbo.org, which prints the clause as 23:25, as the Douay-Rheims does (both said in `b` and `w`). The English is now "as if he would take money", and the Plain reading "as if he meant to take a bribe". Not done: the Greek wording of the minuscules is not given as `orig`, because I could not check it against Metzger here, so the verified Latin stays as `orig`. The lead may add the Greek after checking it.
9. Fixed. Reading 0 is now credited to NA28 and THGNT (ἐπεστείλαμεν "we wrote", which the Plain follows), and the SBL/WH/Tregelles ἀπεστείλαμεν is noted. TAGNT marks confirmed this. Witnesses are named: P74 ℵ A B against C D E Ψ 33 Byz. Bezae's three-item decree without "strangled" is pointed out in `b`, with a reference to Metzger at 15:20, instead of a third reading.
10. Fixed. 21:22 now names P74, 01, 02, 05, E, Ψ, 33 and 1739 with Byz for the longer reading, and 03 and 04* for the shorter. The `why` explains why the evidence is divided.
11. Fixed. New variant at 22:30 ("he released him" against Byz/TR "from his chains", with "all their council" in `b`). The 23:9 entry's `b` now covers οἱ γραμματεῖς against τινὲς τῶν γραμματέων. New variant at 21:16 for Bezae's village stop and the name "Nason", with D's Greek as Metzger reports it; the note on that verse is re-anchored inside the variant and points to it. 21:1: P41 is added to Bezae for "and Myra", confirmed by the Papyrus 41 article, which cites the NA apparatus.
12. Fixed. Note 22:16 now reads "Catholic, Orthodox and Lutheran readers ...; Churches of Christ, who do not use the word 'sacrament', also teach that sins are forgiven at baptism."
13. Fixed. The gloss at 21:28 now reads "made ordinary, profane, no longer set apart for God".
14. Fixed. Each slip is corrected: "broken glass" (Dio); "a Roman name (a cognomen ...)"; "ever mentioned"; note 21:27 now says Paul reminded the elders of trials from Jewish plots (20:19); "James and the elders" in note 21:25's preview, in its body (plural verb) and in the food-laws topic; note 21:36 leads with Luke 23:18 (aire touton) and gives John 19:15 as another form of the verb; note 23:12 and the anti-judaism topic now say the Byzantine reading "looks like" a correction.
15. Fixed. Every quotation of Paul's letters is paraphrased with its reference: notes 21:21, 21:25 (Galatians 2:6), 22:3, 22:11, 22:16, 22:17 (2 Corinthians 12:1), 23:1 and 23:16 (Romans 16); chapter 21's deep dives (Romans 15; 1 Corinthians 9); chapter 22's deep dive (1 Corinthians 9:1; Galatians 1:15–16); the glory topic (2 Corinthians 4:6). None is left for the quote sync.
16. Fixed. 22:16 "And now, why wait?"; 23:3 "give orders for me to be struck"; 21:30 "the doors were shut"; 22:23 "throwing their cloaks off, and they tossed dust up into the air", with the note re-anchored, retitled "Cloaks and dust" and a word added on ῥίπτω; 22:20 "cloaks" to match 7:58, with notes and topic text in this part updated; 22:15 "to all people"; 23:6 "one part was made up of Sadducees and the other of Pharisees" (no second name for the council); 23:1 "I have lived as a citizen before God with a conscience that is good in every way", reshaped to avoid the modern rendering's wording, with its note and gloss re-anchored.
17. Fixed. Sources added to the 21:9 card: Orthodox (rhodes-1988; the line now also names the Rhodes call to revive deaconesses and the Alexandria ordinations of 2017), Methodist (methodist-1956) and Reformed (pca-bco, pcusa-book-of-order).
18. Fixed. The unsourced claim about the Nazirite vow and religious vows is cut. The T view now points to the two traditions cards.
19. Fixed. sadducees: kind "People", like pharisees, and the "Zadokites (Sadducees)" alias dropped. sanhedrin: aliases are now Sanhedrin, Jewish high council, Great Sanhedrin and synedrion (the generic "the council" and "the high council" are dropped). Added the seventy elders of Numbers 11:16 as the Mishnah's model (Mishnah Sanhedrin 1:6), with refs.
20. Fixed, a different way. The existing global key dio-roman-history (Cassius Dio, Roman History, book 60, defined in 18-20's sources.json) is reused, and the author-only cassius-dio key is removed instead of renamed.
21. Fixed. These were the reviewer's checks of the writer's uncertain points, and they confirm the content. The one change: note 23:23 now credits Alexandrinus' δεξιοβόλους (with 33) to the NA28 apparatus instead of Metzger.
