# Second hostile review, context layer: Tacitus, Histories, Book 2 (His, part 02-02)

Scope: notes.json (88), glosses.json (31), variants.json (19), chapters.json, topics.json (33 contributions), the part's sources.json, and the topic cores in content/proposals/world/topics/ (jewish-war, berenice, mucianus, tiberius-alexander, alexandria, caesarea, cyprus, roman-games). plain.txt is not judged (see "Translation flags").
`node tools/build.js --check His/02-02` gives 0 errors, 0 warnings. That says nothing about the findings below.

Notes are cited by their position in notes.json (0-based, in file order) with verse and title, because the notes carry no ids.

## What I opened this session (so the fixer can follow)

Raw pages, not summaries:
- Suetonius, Titus, Vespasian, Otho, Vitellius (penelope.uchicago.edu/Thayer, Rolfe text with Thayer's footnotes): Titus 5, 7; Vespasian 2.1, 4.5, 5.4-5.6, 6.3-6.4, 7.1, 24.1; Otho 1, 2.1, 4, 8, 9, 11, 12; Vitellius 10, 11, 12, 14, 15.
- Plutarch, Otho (Thayer): 4.4-5, 5, 7.3, 8.2-4, 12.3, 13.2-3, 15.4-6, 17, 18.1-2.
- Josephus, Jewish War (Whiston, Project Gutenberg 2850): 4.10.1-7, 4.11.1-5, 5.11.3, 6.5.4; Antiquities (Gutenberg 2848): 10.11.7, 20.5.2.
- Wikipedia (raw wikitext, fetched today): Gaius Licinius Mucianus, Berenice (daughter of Herod Agrippa), Tiberius Julius Alexander, Antiochus IV of Commagene, Mount Carmel, Year of the Four Emperors, Histories (Tacitus), Titus Flavius Sabinus (consul AD 47) and (consul AD 69), Corbulo, Sestertius, Vexillarius, Vespasian.
- The site's own texts: texts/orig/His.json (lat), texts/en/His.json (cb), every Bible verse cited, texts/orig/Act.json (Greek of Acts 17:22, 25:19, 25:21).
- Sefaria, b. Gittin 56b; Cambridge Core first page of K. Scott, JRS 24 (1934).
- Bible Atlas MCP: Paphos 34.707147, 32.573711 (matches the cyprus topic).

I checked well over 40 claims. Most of the Suetonius, Plutarch and Josephus attributions in the notes hold up against the raw pages (Titus 5 and 7; Vespasian 2.1, 4.5, 5.4, 5.6, 6.3-6.4, 7.1; Otho 4, 11, 12; Vitellius 10-12, 14-15; Plutarch Otho 12.3, 15, 17, 18; Josephus 4.10.4-7, 4.11.2-5, 5.11.3, 6.5.4). Every Bible quotation in a note body of the form "quote (Book c:v)" matches the Plain English Translation word for word, apart from the items listed below. The Latin phrases quoted in word notes and variants all occur in texts/orig/His.json. The findings follow.

## Findings

### Critical (false or unsupported claim)

**1. notes.json, position 31 (2:36, "Flavius Sabinus, Vespasian's brother"). Two different men are fused.**
What it says: "Otho made Flavius Sabinus a commander; he is Vespasian's older brother"; the body adds that Book 3 says he is the elder, that he is prefect of the city at 2:55, and that he took the Capitol.
Evidence: 2:36 (Latin, texts/orig) reads "Flavium Sabinum consulem designatum", the consul-elect sent to command Macer's troops. Wikipedia, "Titus Flavius Sabinus (consul AD 69)" (opened), says this man was consul suffectus in April to June 69, and that Gavin Townend identified him as Vespasian's nephew, the son of the elder Sabinus, "a thesis that has come to be accepted" (it names Brian W. Jones, The Emperor Domitian, p. 45). Wikipedia on the elder Sabinus (consul AD 47) says the brother was prefect of the city and that "the consul Titus Flavius Sabinus, Sabinus' son, directed his troops in northern Italy to submit" to Vitellius's generals. Plutarch, Otho 5 (opened), says Otho appointed "Flavius Sabinus, a brother of Vespasian" prefect of the city, not a field commander. 3:65 (C&B, "who was the elder") is about the brother only.
Fix: retitle "Two men named Flavius Sabinus". Say 2:36 names a consul-elect, whom modern scholars (Townend; accepted by Jones) take to be Vespasian's nephew. Say the prefect of the city at 2:55 is Vespasian's elder brother (Plutarch, Otho 5; 3:65), and the one who died on the Capitol. Keep the Josephus 4.11.4 and Suetonius Vitellius 15 sentence under the brother only. Change the preview (p) to match. Also check the topic cross-reference "flavius-sabinus" in content/proposals/world/topics/ and the Book 3 notes for the same fusion.

**2. notes.json, position 79 (2:91, "An unlucky day and the day of Haman's lot"). A claim about Esther that the text does not make.**
What it says: "the Jewish book says God reversed the sign."
Evidence: Esther 9:1 (Plain English Translation): "But it was turned upside down. The Jews themselves ruled over those who hated them." The Plain English Translation of Esther contains no occurrence of "God" (I searched content/books/Est/parts/*/plain.txt); Esther 4:14 says only "relief and rescue will spring up ... from somewhere else."
Fix: replace the last clause with "the book says the day 'was turned upside down' (Esther 9:1) and never names God; Jewish and Christian readers have read that silence as God's hidden hand, which is a reading, not the text." Keep "Only a parallel."

**3. notes.json, position 55 (2:78, "The cypress that fell and rose again"). Unsupported absolute.**
What it says: "Only a parallel: the Romans did not read Daniel."
Evidence: Josephus, Antiquities 10.11.7 (opened) says "Daniel also wrote concerning the Roman government, and that our country should be made desolate by them." Josephus wrote in Rome as the Flavians' freedman (Suetonius, Vespasian 5.6; Jewish War 4.10.7), so a Flavian-era writer did read Daniel for Rome. No source in the trail supports "the Romans did not".
Fix: delete the sentence, or replace with "Tacitus does not connect the omen to Daniel, and Suetonius does not either." Do not add a claim about what Romans read.

**4. chapters.json, views.J. False statement.**
What it says: "The only people in both Tacitus and the New Testament are Agrippa and Berenice, plus the places named in the notes."
Evidence: Book 2 itself names Augustus (2:76, "the divine Augustus"), Tiberius (2:95, the Augustales), Claudius (2:75). The New Testament names all three (Luke 2:1, Luke 3:1, Acts 11:28). The part's own notes 44 and 52 (2:62, 2:76) and 83 (2:95) already say so.
Fix: "The people named in both Tacitus's Book 2 and the New Testament are Agrippa II, Berenice, and the emperors Augustus, Tiberius and Claudius, plus the places named in the notes."

**5. variants.json, 2:79 ("Which day did Judea swear?"), field `why`. Unsupported explanation, and the variant mislabels what the second reading is.**
What it says: "The difference is one of Roman day counting: the Nones and the Ides fall on different days of the month. Josephus gives no date for the Judean oath."
Evidence: Thayer's footnote 16 to Vespasian 6.3 (opened) says only: "July 11; according to Tac. Hist. 2.79, it was the fifth day before the Nones, July 3." Tacitus names the Nones (3 July), Suetonius the Ides (11 July): two different reference days, eight days apart. Nothing says the two writers count differently; a counting difference would not turn 3 into 11. Whether one text is corrupt, or one writer erred, or the army swore on two occasions, is not stated anywhere I opened. "Josephus gives no date" is true of 4.10.4-6 as I read it, but it is a negative claim the trail does not record.
Fix: replace `why` with "Tacitus (2:79) names the fifth day before the Nones, 3 July. Suetonius (Vespasian 6.3) names the fifth day before the Ides, which his editor reads as 11 July. The two writers give different dates; no source I opened explains why." (Delete the clause about Josephus unless the fixer re-checks 4.10.4-6.) Also change reading 2's `w` to "Suetonius, Vespasian 6.3 (text 'fifth day before the Ides of July'; the date 11 July is the editor's reading, note 16 at LacusCurtius)".

### Major

**6. notes.json, position 1 (2:1, "Corinth, where Paul had lived"). Claim attributed to Tacitus that the Latin does not make.**
It says: "Corinth was the main city of the Roman province of Achaia, which is how Tacitus describes it." Latin 2:1: "Corinthi, Achaiae urbe", "Corinth, a city of Achaia". There is no word for main, chief or capital. (C&B says "the capital of Achaia"; the Plain English Translation says "the main city".) Acts 18:12 does not say it either.
Fix: "Tacitus calls Corinth a city of Achaia (Latin urbs). Under Roman rule it was in fact the seat of the proconsul, as Acts 18:12 shows (Gallio 'was serving as proconsul of Achaia' when the Jews led Paul before the judgment seat)." Then see Translation flag T1.

**7. notes.json, position 61 (2:79, "Alexandria in the Bible world"), field `p`. False summary.**
It says: "Alexandria is where Apollos came from and where Paul boarded ships." Acts 27:6 says the centurion "came across a ship out of Alexandria" at Myra (27:5-6); Acts 28:11 says the ship was "from Alexandria" and had wintered at Malta. Paul never boarded at Alexandria. The `lead` of the alexandria topic ("the starting point of ships that carried Paul toward Rome") has the same problem.
Fix: "Alexandria is where Apollos came from, and the home port of two ships that carried Paul toward Rome (Acts 27:6; 28:11)." Apply the same wording to the alexandria topic lead.

**8. notes.json, position 29 (2:32, "Paullinus's case for waiting"). Suetonius reduced to one of his two reasons.**
It says: "Suetonius says Otho chose to fight quickly against the better course because his soldiers demanded battle (Otho 9)." Suetonius, Otho 9.1 (opened): "either because he could not endure the continued worry and hoped that the war could be ended before the arrival of Vitellius, or from inability to resist the impetuosity of his soldiers, who clamoured for the fight."
Fix: give both reasons, joined by "or".

**9. notes.json, position 79 (2:91). Quotation misattributed.**
It says: "Suetonius agrees that Vitellius took the chief priest's office on the day of Allia, 'a date of ill omen' (Vitellius 11)." The quoted words are not Suetonius. They are Thayer's footnote 16: "A day of special ill omen because of the defeat by the Gauls in 390 B.C."
Fix: "Suetonius says he took the office 'on the day of Allia' (Vitellius 11), and his editor notes it was a day of special ill omen because of the defeat by the Gauls in 390 BC." (Or drop the quotation marks and give the editor credit.)

**10. notes.json, position 59 (2:78, "Basilides: Carmel and Alexandria"). A named scholarly view is missing, and the verdict leaves it out.**
The note says "possible but unproven" and that "Tacitus does not link them." The Wikipedia article on Tiberius Julius Alexander, which the part cites, says "go-betweens suspected by modern historians include ... an Egyptian official named Basilides" and cites Kenneth Scott, "The Role of Basilides in the Events of A.D. 69", JRS 24 (1934). The Cambridge Core first page (opened) reads: "The die was cast by Vespasian at the conclusion of a conference held with Mucianus at Mt. Carmel", and "I suggest that there was such a representative [of Tiberius Alexander], a certain Basilides, concerning whom we have considerable information." STYLE rule 3 requires naming who holds a view.
Fix: add "Kenneth Scott (JRS 24, 1934) suggested that Tiberius Alexander was represented at the Carmel meeting by a man called Basilides. I opened only his first page, so I cannot say whether he identifies him with the priest." Better: drop the second sentence and say only what the first page says. Add 'the Basilides of 4:82 is "one of the chief men of Egypt"; Suetonius 7.1 calls him a freedman' (both opened).

**11. notes.json, position 47 (2:72, "A runaway slave, and Onesimus"). A contested reading stated as fact.**
It says "Paul sends another runaway, Onesimus, back" and the deep table says "Runaway slave". Philemon never says Onesimus ran away or what he did. The search I ran shows the runaway reading is still widely held but contested: Allen Dwight Callahan challenged it (Harvard Theological Review, and a commentary, as listed on Wikipedia's Epistle to Philemon page); the "friend of the master" view says he went to Paul to ask him to intercede; another view says Philemon sent him to help Paul; Nordling (JSNT 1991, "Onesimus Fugitivus") defends the runaway reading.
Fix: "The traditional reading is that Onesimus was a runaway; the letter does not say so (Philemon 1:15 says 'he was parted for a short time'), and scholars such as Callahan have argued against it. On either reading, Paul sends him back with a plea to treat him as 'a much-loved brother' (Philemon 1:16)." Change the P line and the deep-table row to "Background; the Bible's own case is disputed."

**12. variants.json, 2:18, 2:24, 2:83 (and 2:100), field `why`. Overconfident claim about vexillarii.**
It says: "A vexillarius is a soldier serving in a detachment ... It says nothing about age, so 'veterans' adds something the Latin does not say."
Evidence: Wikipedia, "Vexillarius" (opened): the word has three senses, a standard-bearer, "specially re-enlisted veterans ... in a company (vexillatio) under their own vexillum", and any soldier in a temporary detachment. So "veterans" is an attested sense of the word, and which sense Tacitus means is a judgment. (The search I ran also pointed to a veteran vexillum at Tacitus, Annals 3.21; I did not open that passage.)
Fix: in each `why`, say: "Vexillarii can mean men of a detachment or re-enlisted veterans serving under their own standard (Wikipedia, Vexillarius). The Conversational English Translation takes 'detachment'; Church and Brodribb took 'veterans'. The Latin word allows both." Keep follow: 0 if Matt wants the translation to stay, but do not say the Latin excludes 'veterans'.

**13. glosses.json, 2:95 ("nine hundred million sesterces"). False detail.**
It says: "a huge pile of Roman silver coins." Wikipedia, "Sestertius" (opened): in the Republic a small silver coin; "During the Roman Empire it was a large brass coin." In AD 69 it was brass, and a sum of sesterces was a unit of account.
Fix: "a huge sum of Roman money (the sesterce was the usual unit of account)".

**14. notes.json, positions 53 and 54 and the mucianus topic. Rests on a Wikipedia sentence that Wikipedia contradicts.**
Note 53 (2:76, "Corbulo, Mucianus's old commander") repeats "Claudius sent him to Armenia with Corbulo" from Wikipedia's Mucianus page and builds the preview ("Mucianus once served with him in Armenia") on it. Wikipedia's Corbulo page (opened) says that after Claudius died in AD 54 "the new emperor Nero sent him to the eastern provinces to deal with the Armenian question", with the offensive in 58 and the settlement in 63. So Claudius cannot have sent Mucianus to Armenia with Corbulo. Tacitus does not say Mucianus served with Corbulo. The writer also notes (in the same note) "I give none I did not check", which is the hedge rule 2 forbids.
Fix: delete the Armenia sentence from note 53, its `p` line and the mucianus topic section ("had served in Armenia with Corbulo"). Say only what Tacitus says: Mucianus names Corbulo's death as a warning (2:76).

**15. Hedges and first-person disclosures in content (STYLE rule 2: unchecked details behind a hedge are not allowed).**
These phrases tell the reader a thing was not checked, or that the writer's reading was limited. They must go, and in each case the claim either gets checked or is removed. Positions (notes.json): 2 ("My guess"), 6 ("no ancient writer I read ties the shrine to Paul's visit"), 8 ("I could not check in a source this session, so I do not claim it"), 11 ("no rival word that I could compare"), 28 ("I found no source that argues it either way"), 29 ("I cannot compare the wording"), 39 ("No other writer I read gives this bird"), 51 (twice: "the other accounts I read", "No other writer I read gives a speech"), 53 ("I give none I did not check"), 58 and 87 ("I know of no source that argues it", "I found no source that makes the link"), 72 ("I make no claim here about what Vespasian's coins said"). chapters.json: views.H ("Where I could compare", "it gives no views of theirs that I could quote"), the deep table header "Others I read", the "Two Carmel guesses" box ("I know of no published scholar who argues for the Elijah link"), and five settings `why` lines ("no other account I read gives the same wording": 2:1, 2:31-32, 2:46, 2:47, 2:76-77). variants.json: 2:40 ("I could not settle in a source I opened which river he meant"), 2:94 ("I found no source that settles it").
Several of these are also negative claims ("no other writer gives this bird") that cannot be checked from a few pages. Example of a wrong one: views.H says the Wikipedia article on the year "gives no views of theirs that I could quote", yet the article states Morgan's judgment that Verginius was "a mediocrity" who was "out of his depth" (Morgan 2006, pp. 22-24).
Fix: rewrite each to say only what a named source says ("Plutarch, Otho 15, gives the same thought in different words"), and cut the "I read / I found no" clauses. Rename the table column "Other ancient accounts".

**16. notes.json, positions 2, 58, 87 and the "Two Carmel guesses" box (spec notes). Rule 4 not met.**
STYLE rule 4: a spec note must say where it overlaps with published scholarship. These say "I know of no source", which is an unchecked negative.
- Position 2 (the oracle): Josephus himself says the oracle was "found in their sacred writings" (Jewish War 6.5.4, opened), so the Bible-source question is Josephus's own. The note offers Genesis 49:10 or Numbers 24:17 as "my guess" with no scholar named. Either name a holder you opened or label it plainly as Claude's guess with the single sentence "Josephus does not name the passage." Also note that the Wikipedia Vespasian page (opened) quotes Josephus applying the oracle to Vespasian, which is the overlap that exists.
- Position 58 and the box: delete "I know of no source / published scholar". Wikipedia's Mount Carmel page (opened) says the monastery's altar "is claimed to be that which Elijah built" but is unlikely; that is the only Elijah-altar statement I found, and it is not about Tacitus.

**17. notes.json, position 11 (2:4, "A damaged word in the Latin"). A real crux handled thinly.**
The Latin has "inexperti belli †labor"; the dagger is in Fisher's text (opened). The note says "The sense is plain from the sentence" and gives the sense as "freedom from war's hardships". That sense is C&B's ("exemption from the hardships of war"), i.e. a reading of the word the editor marked as corrupt. A crux does not have a plain sense. No variant card exists for it, although the book's rule is that every crux gets one.
Fix: add a variants.json entry at 2:4 with readings (Fisher's Latin: obelus before labor; Church and Brodribb: "exemption from the hardships of war"), state which one the Conversational English Translation follows, and say what it does if "labor" is wrong. Reword the note to "the word is marked corrupt, so the sense of this clause is uncertain; the sentence as a whole still sets Mucianus's rested army against Vespasian's tested one."

**18. Source keys cited without a checked passage (notes.json positions 17 and 84: koester-rev; positions 4, 69, 70: josephus-ant).**
sources-checked.md lists no Koester and no Antiquities passage, and the note text names no page or section from either. A source key on a note asserts that the source says it.
Fix: delete `koester-rev` from both notes unless the fixer opens Koester on Nero and the "Babylon" reading and quotes what he says. For `josephus-ant` on Berenice and Agrippa II, either cite the Antiquities passage the fixer opens (the Wikipedia article cites Ant. 19.9.1 for Berenice's age at her father's death) or remove the key.

**19. Claims that rest on Wikipedia where a primary source was open to the writer.**
- Position 48 (2:74, Tiberius Alexander): offices "according to the Wikipedia article, citing Josephus". The 1 July oath is in Tacitus 2:79, Suetonius, Vespasian 6.3 and Josephus 4.10.6; "did not keep his ancestral customs" is Josephus, Antiquities 20.5.2 (opened); the Judean procuratorship is in Josephus, Jewish War 2.220. Note also that Wikipedia says "apostate" is the traditional reading and that "some more recent scholars" disagree; the note and the topic lead ("A Jew of Alexandria") give no hint of that dispute.
- Position 28 and 68 (Epiphanes): "Jewish War 5.11.3, per Wikipedia". Josephus 5.11.3 (opened) names "Antiochus Epiphanes", the son of the king of Commagene, at Jerusalem.
- Position 54 (the 6th legion and 13,000): Tacitus 2:83 gives it; the "2,600 from each of five legions" is Wikipedia, citing Morgan. Say so.
- Position 71 (Berytus council "in July"): Tacitus 2:81 says only "before July 15th" for Syria's oath; Josephus 4.10.6 puts Berytus after the Antioch/Caesarea moves; the month is Wikipedia's.
- Positions 61, 64, topic vespasian: "Agrees with the Wikipedia article's date" when Tacitus, Suetonius and Josephus are all in hand.
- Positions 4, 69, 70 (Berenice and Agrippa II as brother and sister, daughter of Agrippa I): Acts does not say so. Josephus does (Ant. 19.9.1, per Wikipedia). Name the Josephus passage after opening it.
- The date of Otho's death: the Wikipedia year page gives "the next day" (15 April) in its lead and "16 April" in its timeline. The year-of-four-emperors topic uses 16 April and note 26 uses 14 April for the battle without saying the page disagrees with itself. Use "mid-April" or check Tacitus/Plutarch.
Fix: replace each with the primary passage opened this session, or keep the Wikipedia attribution and say plainly that the primary text was not opened.

**20. Missing named scholarly view on the Carmel meeting (notes positions 51, 57, 58).**
The Wikipedia Mucianus page the part cites (opened) says: "in May or June 69 the commanders held a meeting at Mount Carmel, and Mucianus persuaded Vespasian to take up arms" (Morgan, 69 AD: The Year of Four Emperors, 2006, pp. 182-184). Tacitus puts Mucianus's speech (2:76-77) before the Carmel scene (2:78); Scott (finding 10) puts a conference at Carmel with Mucianus. None of the three notes mentions that a modern historian places the Carmel meeting with Mucianus present, and note 51 ("Mucianus's speech") says Josephus puts the soldiers first and Mucianus second without telling the reader about Morgan.
Fix: add one sentence to note 57 or 58: "Gwyn Morgan (2006, as summarized on Wikipedia) dates a meeting of Vespasian and Mucianus at Carmel to May or June 69, which would put Carmel in the middle of the story Tacitus tells."

**21. notes.json, position 57 (2:78, "Mount Carmel: Elijah's mountain"). Strongest Bible link left out.**
The note says Wikipedia links the god to the storm god Hadad. The same Wikipedia page (opened) says Hadad is the same as "Ba'al" ("Hadad (Ba'al, Baalshamin)"), and that Carmel "appears to have been a major center for worship of" him. That is exactly the setting of 1 Kings 18, where Elijah challenges the prophets of Baal on Carmel (18:19-40). The note does not say it.
Fix: add "Hadad is the storm god the Bible calls Baal, the god Elijah challenged there (1 Kings 18:19-40)." Keep "Wikipedia reports this; I did not open Avi-Yonah's article" out of the text (see finding 15), and cite the page only.

**22. topics.json, imperial-cult ("'Divine' emperors in Book 2"). Overstates 2:62 and 2:90.**
It says "Vitellius refuses and then accepts the titles Augustus and Caesar (2:62, 2:90)". 2:62 says he put off "Augustus" and did not accept "Caesar". 2:90 says that when he "held back from the name Augustus, they pushed him to take it, a gesture as empty as his earlier refusal." Neither verse says he accepted Caesar, and 2:90 does not say he accepted Augustus. Note 44 (2:62) says it correctly ("2:90 shows the crowd pushing him").
Fix: "Vitellius put off the name Augustus and refused the name Caesar (2:62); when the crowd pushed him to take Augustus (2:90), Tacitus calls both the refusal and the pushing empty gestures."

### Minor

**23. notes.json, position 37 (2:49, "Suicide in the Bible, and Otho") and the suicide topic section.** The note lists Saul, Abimelech, Ahithophel, Zimri and Judas, then says "Scripture reports these deaths without praise." It leaves out Samson (Judges 16:30, "The dead he killed in his death outnumbered those he had killed in his life"; Hebrews 11:32 names him), which the site's own suicide topic includes, and Abimelech did not kill himself (he asked another to). Fix: add Samson in one sentence ("many readers count it as an act of war, not suicide", as the suicide topic says) and change "Scripture reports these deaths without praise" to "none of these accounts states a verdict on the act itself" (the topic's wording).

**24. notes.json, position 20 (2:9, "Galatia and Pamphylia").** The preview says "the lands of Paul's first journey", but the note's third reference, Acts 16:6, is the second journey. Fix: "lands Paul crossed on his journeys (Acts 13:13; 14:24; 16:6)".

**25. notes.json, position 76 (2:86, "Dalmatia and a different Titus").** "Paul says in his last letter" treats 2 Timothy as Paul's last letter, which is the traditional view; many historical-critical scholars date and attribute it differently. Fix: "in 2 Timothy 4:10".

**26. notes.json, position 0 vs 35 vs 26 (legion names).** "Adjutrix" (title and previews), "Adiutrix" (note 35 body and note 26), and the Latin is "Adiutrix". Brief-his fixes "the Adjutrix" in the translation. Use one form in the notes: write "Adjutrix (Latin Adiutrix)" at first mention, then "Adjutrix".

**27. notes.json, position 79 (2:91).** Esther 9:1 and 3:7 both quote correctly, but the sentence "Haman's lot chose a lucky or unlucky day" blurs that Haman's lot chose the day for the plan against the Jews (3:7 continues into 3:13). One clause suffices: "Haman had a lot cast to pick the day for his plan".

**28. chapters.json, views.C.** "Tacitus sees none of this; he reads omens in entrails and trees." The R view (and note 2:50) say he reports omens "with distance"; he does not read them himself. Fix: "he reports omens read in entrails and trees."

**29. chapters.json, no `traditions`.** Other books of the His set have a Where Christians differ card (Books 3, 4, 5). Book 2 has three real candidates the notes already point at: how to speak of Otho's suicide (note 37: "Christians differ"), the Olivet Discourse and the war of AD 66-70 (notes 9 and 16: "Christians differ on how much of the Olivet Discourse this war fulfilled"), and the Revelation reading of the false Nero (note 17). The Olivet question is a standing preterist/futurist split; the page for it exists (olivet-discourse). Fix: add at least the Olivet card, naming the readings from the existing olivet-discourse topic; add the suicide card only from catechisms or confessions opened this session.

**30. chapters.json, views.J has no Jewish source for Vespasian's rise.** The J lens names Josephus, Suetonius, Acts. b. Gittin 56b (Sefaria, William Davidson Edition, opened) has Rabban Yoḥanan ben Zakkai telling Vespasian "you are a king" and reading Isaiah 10:34 ("And the Lebanon shall fall by a mighty one") as meaning the Temple would fall to a king; Vespasian replies about the barrel of honey and the snake. That is a direct Jewish counterpart to the Josephus and Suetonius prophecy stories at 2:78 and 2:80. Fix: add one sentence to views.J, or a note at 2:80, naming the passage and noting it is a later rabbinic story.

**31. chapters.json, settings.** (a) The `readers` field is the same 170-word sentence in all 27 entries and rests on Wikipedia for the date and the Pliny quotation. It tells the reader who read the Histories, not who heard each speech (the `to` field does that). Fix: say it once in book.json `audience` and give each speech only its own listeners and why they mattered. (b) Indirect speeches and public acts not covered: 2:7 (the generals' reasons for waiting), 2:29 (the soldiers' charge against Valens), 2:33 (Titianus and Proculus talking Otho into Brixellum), 2:49 (Otho's last orders and address to the ringleaders). Add these four, or state in the sum line that only direct speech is covered.

**32. notes.json, reading level.** Eleven note sentences run 42 to 63 words (positions 9, 21, 23, 31, 41, 47, 52, 57, 63, 64, 81; the longest is position 47). Split them for the 8th-grade target.

**33. sources.json (part) and the book's global keys.** The part's sources.json lists only five Wikipedia pages. The primary texts actually read (Suetonius in Rolfe's translation at LacusCurtius, Plutarch's Otho at LacusCurtius, Josephus in Whiston's translation) are cited through the global keys `suetonius-caesars`, `plutarch-lives` and `josephus`, which give no edition, translator or address; `plutarch-lives` is described as "including the Life of Artaxerxes", which has nothing to do with this book. Fix: add keys for the editions read, with the URL pages and the access date.

**34. chapters.json, deep table, caption.** "Dates, ages and what each writer says are from the English texts of Suetonius, Plutarch and Josephus read for this page" is true now that the raw pages have been read (see above); the trail (.scratch/His-02-02/sources-checked.md) still says they were summaries. Update the trail so the caption is honest, and change "Others I read" (see finding 15).

## Bible links

- Checked every quoted verse against the Plain English Translation: all match except where noted (Esther 9:1 usage, finding 2; Daniel 4:26 is quoted as "your kingdom will stay yours", which is the first half of a verse that continues "once you know that Heaven rules", so note 55 should add the condition when it uses the verse as a picture of restoration).
- Book names are written on every reference I read; bare c:v forms refer to Book 2 or to another book of this one, as the style allows. No bare reference to a biblical book was found.
- Same-person verdicts: Berenice = Bernice and Agrippa II = Agrippa of Acts are "very likely" on name, rank, family and date; Acts does not state the sibling relation, so the verdict should say which part is Josephus (finding 19). Titus the emperor is rightly separated from Paul's Titus (notes 0 and 76). Bar-Jesus and Sergius Paulus: no identification is claimed, which is right. Tiberius Alexander: "none found" is right.
- Possibly missing links the fixer may want, in the order of the verses: 2:3 Tamiras of Cilicia (Cilicia is Paul's home country, Acts 21:39; I did not open the plain text of 21:39, so check it); 2:8 "a slave from Pontus" (Pontus in Acts 2:9 and 18:2, 1 Peter 1:1, which are already used at 2:6); 2:6, 2:74, 2:79, 2:81 the soldiers' oath of allegiance (the oath is the subject of the book's oath tradition elsewhere; one pointer to Matthew 5:33-37 would do, if the oaths card is in another chapter).

## Latin

Every Latin word and phrase in the `word` notes and variants occurs in Fisher's text and in the form given: haruspicum, "set ratio in obscuro", "ob ingenium montis et pervicaciam superstitionis", "integra quies et inexperti belli †labor" (the dagger is in the Latin, not a stray character), "dextras, concordiae insignia", "uterum ostendens latere respondit", "versicolori sagulo ... bracas barbarum tegmen", "pulsi Italia mathematici", "imperatorem salutavere ... Caesarem et Augustum", "maximum pontificatum", "quinto nonas Iulias", "xv kalendas Augustas". The variants' Church and Brodribb readings were all found word for word in texts/en/His.json. Problems are in the arguments built on them (findings 5, 6, 12, 17), not in the quoted words. Note 10: "superstitio" and its echo at 5:13 ("gens superstitioni obnoxia") check out; the claim that Acts 17:22 and 25:19 are "neutral" is addressed next.

**Note 10 (2:4, "Superstitio").** The Greek is right (δεισιδαιμονίας in Acts 25:19 and δεισιδαιμονεστέρους in Acts 17:22, texts/orig/Act.json). The note says "In both verses the tone is neutral." For Acts 17:22 that is one reading; the word can be read as "very religious" or as "superstitious" and translators and commentators differ. Fix: "In Acts 25:19 Festus is speaking neutrally, in Acts 17:22 the tone is debated (the Plain English Translation has 'very devoted to the gods')." (Minor.)

## Sensitive passages

Nothing in the part needs hiding in my judgment. Checked: 2:13 (soldiers torture a mother; no detail), 2:16 (heads carried to Otho, one clause), 2:22 (men "torn apart" in an assault), 2:49 (Otho's wound; one sentence), 2:56 and 2:73 ("lust", no detail), 2:72 (punished "the way slaves are"), 2:88 (slaughter, no detail). The notes repeat no explicit detail. Note 45 (2:70) and its title "The unburied dead" say nothing about the state of the bodies; the Suetonius reference there leaves out the remark about the smell, which is right.

One borderline, for the lead to decide: 2:70, the sentence "It was a foul and horrifying sight. Not forty days had passed since the battle, and there lay mangled bodies, severed limbs, the rotting shapes of men and horses, the ground soaked with decay, and trees and crops trampled down into a dreadful wasteland." It is one sentence, it is Tacitus's own horror, and the Bible is as frank (Jeremiah 16:4, Psalm 79:2-3 are used in the notes). I do not recommend hiding it. If the lead disagrees:
- v 2:70, text "there lay mangled bodies, severed limbs, the rotting shapes of men and horses, the ground soaked with decay", kind violence, summary "A description of the battlefield with the unburied dead left from the battle." (Notes 45 and the burial topic sit outside the span; no overlap.)
No sensitive.json exists for the part; none is required.

## Duplicate topics

Checked content/topics/ and content/proposals/*/topics/ for titles and aka of the eight cores. No duplicate: `fall-of-jerusalem` there is the 586 BC event; `herod-family` is a family page and `berenice` a person page (the two cross-refer); `jewish-war` has no rival. `titus` (Paul's co-worker) is correctly kept apart from `titus-emperor`. The cores' `sections` arrays are empty by design (the text sits in this part's topics.json). Their ref keys (`jerusalem`, `egypt`, `barnabas`, `paul`, `corinth`) exist in content/topics/.

## Chapter page

- Settings cover every direct speech in Book 2 (2:1, 16, 28, 32, 44, 46, 47, 48, 76, 77, 78) plus letters, edicts and remarks. See minor finding 31 for the repeated `readers` text and four uncovered indirect speeches.
- `views`: the four lenses are present. C, R and J are fair but see findings 4, 28 and 30; H hedges (finding 15). Consensus is not labeled anywhere on the page for the one place that has a real consensus-and-dissent shape, the Olivet Discourse (finding 29). The Where Christians differ cards are missing (finding 29).
- `deep`: the three boxes are the comparison table, the Bible-link table and "Two Carmel guesses". The Bible-link table says "Berenice = Bernice ... Very likely the same person", which agrees with the notes; fix the Onesimus row (finding 11).

## Translation flags (not findings against the writer)

- T1. plain.txt 2:1 "At Corinth, the main city of Achaia": Latin "Corinthi, Achaiae urbe" has no "main"; "a city of Achaia" is what the Latin says. (C&B "the capital" is the source of the addition.) If the lead keeps "main", finding 6 should be fixed as written; otherwise change the translation.
- T2. plain.txt 2:4 "the Jews' stubborn religion" for "pervicaciam superstitionis": the translation drops the contempt in superstitio; note 10 explains the choice well, but the verse alone reads neutrally. Consider "stubborn superstition" with the note, or keep and leave the note as the only place the reader sees the sneer.
- T3. plain.txt 2:18, 2:24, 2:83 "detachments": defensible, but see finding 12; the word can also mean veterans.

## Fixes applied (round 2)

Each finding was checked against sources opened in this pass (listed in .scratch/His-02-02/sources-checked.md, "Round 2 update"). Notes are cited by verse and title.

1. Accepted. The 2:36 note is now "Two men named Flavius Sabinus": the consul-elect of 2:36 (Townend: Vespasian's nephew; Wikipedia, consul AD 69, opened) and the prefect of the city of 2:55, Vespasian's elder brother (Plutarch, Otho 5; Tacitus 3:65). Josephus 4.11.4 and Suetonius, Vitellius 15 sit under the brother only. The flavius-sabinus core (other writer) already separates them; the Book 3 notes at 03-03 name the brother only.
2. Accepted. Esther 9:1 is quoted exactly; the note says the book never names God and that a hidden-hand reading is a reading, not the text. Also 27: "Haman had a lot cast to pick the day for his plan" (Esther 3:7).
3. Accepted, with more. Josephus, Antiquities 10.11.7 (opened) says Daniel "also wrote concerning the Roman government, and that our country should be made desolate by them"; the note states that and that the passage does not mention the cypress. The claim about what Romans read is gone. Daniel 4:26 now carries its condition ("once you know that Heaven rules").
4. Accepted. views.J now names Agrippa II, Berenice, Augustus, Tiberius and Claudius.
5. Accepted. The 2:79 variant `why` now says only that the two dates differ and that no source cited explains why; reading 2's `w` notes that 11 July is the editor's reading. The Josephus clause is deleted. (Whiston's footnote proposing "June" for the Judean oath, opened, is reported in the 2:79 note on the order of the oaths, not as an explanation of 3 vs 11 July.)
6. Accepted. Corinth note: Latin urbs, no "main"; Acts 18:12 and 18:1 quoted. Deep-table row reworded. Translation flag T1: plain.txt NOT edited (see below).
7. Accepted. Alexandria note and preview and the alexandria core lead: home port of two ships (Acts 27:6; 28:11), not a boarding point.
8. Accepted. Both Suetonius reasons joined by "or" (Otho 9, opened).
9. Accepted. Suetonius's "on the day of Allia" quoted as his; the "special ill omen" remark is credited to his editor (Vitellius 11 note 16, opened).
10. Accepted. Scott (JRS 24, 1934): first page opened; the note says only what it says (a representative of Tiberius Alexander, "a certain Basilides", and a conference with Mucianus at Mt. Carmel). The Basilides of 4:82 ("one of the chief men of Egypt") and Suetonius's freedman (Vespasian 7.1) are both named. The "name is common" claim is removed (not sourced).
11. Accepted. Onesimus: runaway reading stated as traditional, Philemon 1:12, 1:15, 1:16 quoted, Callahan (Harvard Theological Review, 1993) and the defenders as reported in Wikipedia's Epistle to Philemon (opened). Preview and deep-table row changed.
12. Accepted. All four vexillarii variants now say the word allows both senses (Wikipedia, "Vexillarius", opened). plain.txt "detachments" kept (see below).
13. Accepted. Gloss now "a huge sum of Roman money (the sesterce was the usual unit of account)".
14. Accepted. Corbulo's own Wikipedia page (opened) says Nero sent him east after Claudius died, so the Mucianus-in-Armenia sentence is removed from the Corbulo note (retitled "Corbulo's death as a warning"), its preview and the mucianus topic section. The hedge "I give none I did not check" is gone.
15. Accepted. Every first-person hedge listed was rewritten to a checked statement or cut (notes 2, 6, 8, 11, 28, 29, 39, 50, 51, 53, 58, 72, 87; chapters views.H, the table header, the table caption, the Carmel box, five settings `why` lines; variants 2:40, 2:94). views.H now reports Morgan's "mediocrity" judgment of Verginius (Wikipedia year page, opened). Table header is "Other ancient accounts". Note 8: the Astarte aside removed (not checked).
16. Accepted. The three spec notes and the Carmel box now carry an "Overlap with scholarship / others" statement built from sources opened: Josephus 6.5.4 (oracle "found in their sacred writings", applied to Vespasian) and Gittin 56b (Isaiah 10:34) for the oracle; Wikipedia's Mount Carmel (monastery altar claimed to be Elijah's, called unlikely) for the altar; Josephus 4.10 and Suetonius, Vespasian 5.6 for the Flavian-writers note. The Genesis 49:10 / Numbers 24:17 guess is labeled Claude's.
17. Accepted. New variant entry at 2:4 (Fisher's obelus; Church and Brodribb's "exemption from the hardships of war"; follow = Church and Brodribb; what changes if labor is wrong). Note 11 reworded: the sense of the clause is uncertain.
18. Accepted. koester-rev removed from the two notes (Koester not opened). josephus-ant kept on the Berenice, Agrippa and Tiberius Alexander notes, now with the passages named (Antiquities 19.9.1, 20.7.1-3, 20.5.2) and a new edition key.
19. Accepted. Tiberius Alexander note: Josephus JW 2.11.6 and Ant. 20.5.2, Tacitus 2:79, Suetonius 6.3 stand beside the Wikipedia attribution for Philo and dates; the apostasy dispute (Modrzejewski, as Wikipedia reports) is stated; the core lead no longer says "a Jew of Alexandria" flatly. Epiphanes: Josephus 5.11.3 and 7.7.1 cited directly. Legions: 2,600 is attributed to the Wikipedia article (Morgan). Berytus: Tacitus gives no month; Wikipedia's July is attributed. Alexandria/oath notes cite Tacitus and Suetonius first. Berenice/Agrippa: sibling tie attributed to Josephus, not Acts. Otho's death dates: the year topic and the Bedriacum note now say mid-April and report that the Wikipedia page disagrees with itself.
20. Accepted. Morgan (2006, pp. 182-184, as Wikipedia's Mucianus page reports) now stands in the Carmel note and in the Mucianus-speech note.
21. Accepted. Carmel note: Hadad is the Baal of 1 Kings 18:19-40 (Wikipedia, Mount Carmel, opened, also reports Avi-Yonah's view that Elijah's Baal was Hadad). The "I did not open Avi-Yonah" aside is out.
22. Accepted. The imperial-cult section now matches 2:62 and 2:90.
23. Accepted. Samson added; Abimelech described as asking to be finished off; closing wording "none of the Bible accounts states a verdict on the act itself". Deep-table row updated.
24. Accepted. Preview reads "lands Paul crossed on his journeys (Acts 13:13; 14:24; 16:6)".
25. Accepted. "2 Timothy 4:10 says".
26. Accepted. "Adjutrix, Latin Adiutrix" at first mention (2:23), then Adjutrix.
27. Accepted (see 2).
28. Accepted. views.C: "he reports omens read in entrails and trees".
29. Partly accepted. Olivet card added (Catholic: Catechism 673, 675, 677 opened; Orthodox: Chrysostom, Homilies on Matthew 75-76 opened). The Reformed and Dispensationalist entries are carried over, with their source keys, from the Matthew 24-25 card, not independently opened. Suicide card not added: no catechism or confession was opened for it in this pass.
30. Accepted. views.J now has Gittin 56b (Sefaria, William Davidson Edition, opened), marked a later story; Isaiah 10:34 is described, not quoted, so no mismatch with the Plain English Translation.
31. (a) Accepted: the repeated `readers` field is removed from all 27 settings (it is optional); the sentence is listed for book.json in the report. (b) Accepted: settings added for 2:7, 2:29, 2:33 and 2:49.
32. Accepted for the eleven sentences named (split in notes 9, 21, 23, 31, 41, 47, 52, 57, 63, 64, 81).
33. Accepted. New keys with edition, address and access date: suetonius-lives-thayer, plutarch-otho-thayer, josephus-war-whiston-web, josephus-ant-whiston-web, scott-basilides-1934, talmud-gittin-56b-sefaria, wiki-epistle-philemon, wiki-vexillarius; added to the notes that cite each work. The global keys suetonius-caesars, plutarch-lives and josephus (other books own them) are untouched; plutarch-lives's description ("including the Life of Artaxerxes") is not this book's and is for the lead.
34. Accepted. The trail (.scratch/His-02-02/sources-checked.md) now records the raw-page reading; the caption is honest and "Others I read" is renamed.

Bible links: Daniel 4:26 condition added; every Bible quotation touched was matched to the Plain English Translation (Philemon 1:12, 1:15, 1:16; Acts 18:1, 18:12, 27:6, 28:11; Esther 3:7, 9:1; Daniel 4:26; Judges 9:54, 16:30; Job 14:7; Numbers 24:17; Genesis 49:10; 1 Kings 18:19-21, 18:30-32, 18:39; 2 Timothy 4:10). Note 10 (Superstitio): Acts 17:22 tone is debated, Acts 25:19 neutral.

Translation flags T1-T3: plain.txt not edited. T1 "the main city of Achaia": the Latin has only urbs, but the Conversational English Translation may add a checked identification; the note now names the addition. T2 "stubborn religion" is a stated choice explained in note 10. T3 "detachments" is one attested sense (finding 12), explained in the variants.

Declined: none. Not done: the optional extra links (2:3 Tamiras of Cilicia, 2:8 Pontus, oaths pointer) are left for the lead.
