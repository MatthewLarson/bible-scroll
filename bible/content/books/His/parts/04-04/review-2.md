# Hostile review, round 2: Tacitus, Histories 4 (His, part 04-04), context layer

Scope: notes.json, glosses.json, variants.json, chapters.json, topics.json, sources.json of part 04-04, and the topic cores in
`content/proposals/world/topics/` (batavian-revolt, helvidius-priscus, roman-taxes, veleda, serapis, stoicism, cyrene, parthia).
Not in scope: plain.txt (see "Translation flags"). `node tools/build.js --check His/04-04` gives 0 errors, 0 warnings.

## Verdict

The layer is careful and mostly sound. The Josephus citations, the Suetonius, Dio and Josephus quotations, the Bible quotations, the oaths card
and the Latin words are accurate; I found no invented source or fragment. The problems are of four kinds. First, a few claims
are unsupported or wrong (Plutarch quotations I could not confirm; "Tacitus alone gives the wife's name"; the Quirinus/Capitol sentence;
the "Jerusalem council"; Paul's haircut at Acts 18:18 stated as certain; the Lucilius Bassus "no scholar" claim). Second, the writer's
"I found no scholar in the sources I opened" hedge appears about ten times, against STYLE rule 2. Third, the chapter page claims a card
for every speech but leaves out about ten speeches, prophecies and oracles, and 31 of the 33 `readers` lines say "as above", which is
meaningless on a card shown alone. Fourth, four variants rewrite Tacitus's sentence with another author's event, and one leaks "the draft and the review"
into reader text. Two verses are candidates for hiding (4:42, 4:61). Wikipedia is the only support for several facts that Tacitus's Annals,
Suetonius or Dio state directly.

Findings: 0 critical, 14 major, 19 minor.

---

## Findings (most serious first)

### Major

**1. major. notes.json #68 (4:83, "Serapis in Plutarch"): two quotations from Plutarch that I could not confirm, and no translator named.**
The note quotes "convinced Ptolemy that it was the statue of none other of the gods but Serapis" and "certainly did not bear this name when it came
from Sinope" (Plutarch, On Isis and Osiris 28). I opened the Perseus passage `perseus-eng3:28` (atlas.perseus.tufts.edu); it returned only a
summary and one short excerpt ("Ptolemy Soter saw in a dream the colossal statue of Pluto in Sinope...") and did not name the translator. A search summary
of the same passage shows G.R.S. Mead's 1906 wording ("no other of the Gods than Sarapis") and says Babbitt's Loeb text, the one Perseus lists for the
Moralia, does not contain the writer's phrase. So the quoted wording is unconfirmed and may be a blend. The sources-checked list says "summary and short quotes".
Fix: remove the quotation marks and paraphrase ("they judged from Cerberus and the serpent that it was Pluto, and persuaded Ptolemy it was Serapis; the name,
Plutarch says, was given after the statue reached Alexandria"), or open the full section, quote the exact words and name the translation in the note and
in sources.json. The paraphrase of Sosibius, Soteles and Dionysius matches the Perseus summary, so keep it.

**2. major. notes.json #54 (4:67, "Sabinus in hiding for nine years"): "Tacitus alone gives the wife's name" is unchecked.**
The note compares Tacitus and Dio only, but "alone" says no other ancient writer names her. The writer's own `sources-checked.md` lists "Epponina's story
(Plutarch)" as left out because unchecked, so the writer knew Plutarch tells it. I did not open Plutarch either, so I cannot say who names her; I can say the claim is not
supported by anything opened. Dio 65.3 (LacusCurtius): Sabinus "remained hidden there with his wife for nine years and had two sons by her", and he took "the name of Caesar,
claiming to be a descendant of Julius Caesar" (both confirmed). Fix: "Of the two, only Tacitus names the wife (4:67)" and drop "alone", or add Plutarch after opening him.

**3. major. notes.json #49 (4:58, "Jupiter is Zeus"): the sentence about Quirinus's temple is wrong or at best ambiguous.**
Body: "...and to Quirinus, whom Vocula calls father of the city. His temple was the Capitol (4:53)." In context "His" reads as Quirinus. The Capitol is Jupiter's
temple (the note on 4:53 says so); Quirinus has no part in the Capitol rite at 4:53 (Jupiter, Juno, Minerva). The Latin at 4:58 is `te, Iuppiter optime maxime ... te, Quirine Romanae parens urbis`, vocatives;
the note prints the nominative `Iuppiter Optimus Maximus` as if it were Tacitus's wording. Fix: "Vocula prays to Jupiter Best and Greatest (Latin *Iuppiter optime maxime*), whose temple was the Capitol (4:53), and to Quirinus, whom he calls father of the city." (Do not give Quirinus a temple unless a source is opened.)

**4. major. notes.json #63 (4:81, "Witnesses who are still alive"): "The Jerusalem council could say nothing against a man healed before them (Acts 4:14; Acts 4:16)."**
"The Jerusalem council" is the name of the meeting in Acts 15. Acts 4:14-16 is the Sanhedrin: Acts 4:15 in the site's translation says "step outside the Sanhedrin". Fix: "The Sanhedrin could say nothing against a man healed in plain view (Acts 4:14; Acts 4:16)". The same note is otherwise accurate (Luke 1:2, 1 Corinthians 15:6 and Acts 5:40-41 checked).

**5. major. notes.json #51 and topics.json `vows` (4:61): "Paul cut his hair for a vow" is stated as settled.**
The Plain English Translation of Acts 18:18 says "He had had his hair cut short at Cenchreae, for he was keeping a vow." The Greek in `texts/orig/Act.json` (SBLGNT 18:18) is
`...ἐξέπλει εἰς τὴν Συρίαν, καὶ σὺν αὐτῷ Πρίσκιλλα καὶ Ἀκύλας, κειράμενος ἐν Κεγχρεαῖς τὴν κεφαλήν, εἶχεν γὰρ εὐχήν`. The participle `κειράμενος` (V-AMP-NSM) follows the names
Priscilla and Aquila, and its subject can be Paul or Aquila. The note says "Paul 'had his hair cut short'" (and the topic and chapter echoes repeat it) with no mention of the question.
I did not open a commentary to name who holds which view; the Greek I did open shows the ambiguity is real. Fix: "Acts 18:18 says that someone, Paul or Aquila (the Greek participle can go with either), had his hair cut at Cenchreae because of a vow". Same in topics.json `vows` ("Paul cut his hair for a vow").

**6. major. notes.json #4 (4:3, Lucilius Bassus): the "no scholar" statement and the verdict "Possible".**
Body: "Neither Tacitus nor Josephus joins the two, and I found no scholar who does in the sources I opened." I opened Wikipedia's "Lucilius Bassus": it treats
the Ravenna-fleet prefect and the legate of Judea as one man ("Before his appointment to Iudaea, Bassus was prefect of the Classis Ravennas and the Classis Misenensis and betrayed Vitellius...") with Tacitus's Histories
as its only cited source and no argument. So the sources the writer says he opened (Wikipedia is used throughout) do take them as one, and a verdict of only "Possible" understates what the name, rank, date and Flavian loyalty give. The note's own list of fits ("the name, the date and a Flavian officer") argues for "Likely".
I found no named scholar who argues it, so do not invent one. Fix: change the verdict to "Likely" with the reasons, say that Wikipedia's article treats them as one man without argument, and delete the "I found no scholar" sentence. Also "Herodium was Herod the Great's fortress (Matthew 2:1)": Matthew 2:1 names King Herod, not the fortress. Cite Matthew 2:1 for "Herod the king" only. The `jewish-war` topic section "Lucilius Bassus" repeats "Same man: possible".

**7. major. Hedge phrases against STYLE rule 2 / Matt's rule: "I found no scholar ... in the sources I opened" and "I know of no scholar...".**
Locations: notes #4, #47 (spec), #62, #65 (spec); chapters.json deep "The healings at Alexandria" and the spec box "Why the healings sit at the end of the Gaul story"; topics.json `miracles` claude box, `prophecy` claude box. That is nine or ten
uses of a first-person negative hedge. The rule bars hedges because they present a gap as if it were a finding. STYLE.md rule 4 asks a spec note to say "where [it] overlaps with published scholarship"; the honest form is either a checked statement ("Eve (NTS 54, 2008) argues the same pairing") or silence. A concrete miss: a search summary I opened reports David Hume calling this "one of the best attested miracles in all profane history" (Of Miracles); I saw that only in a secondary page, so it must be checked in Hume's Enquiry section X before it is added, but it shows the note's view-list (staged / ordinary recovery / real power) leaves out the best-known named holder of a fourth position (the story is unusually well attested yet still not believed). Fix: delete every "I found no scholar" sentence; for notes #62 and #65 and the two claude boxes, say what the note itself argues and label it Claude's reading, with no claim about the literature unless a source is opened; consider adding Hume after opening him.

**8. major. chapters.json `settings`: the page claims a card for every speech, but ten or so speeches, prophecies and oracles have none, and 26 of 33 `readers` lines say "as above".**
Present: 33 cards (4:3, 4:4, 4:7, 4:8, 4:14, 4:17, 4:20, 4:21, 4:24, 4:32, 4:40, 4:41, 4:42 twice, 4:43, 4:46, 4:50, 4:52, 4:53, 4:57, 4:58, 4:64, 4:65, 4:66, 4:68, 4:73, 4:75, 4:76, 4:77, 4:81, 4:83, 4:85, 4:86).
Missing, each a reported speech, prayer, prophecy or order in plain.txt:
- 4:44 Mucianus "spoke at length in favor of the informers" and warned those reviving old cases, and Domitian's opening speech urging that grief and anger be put aside.
- 4:49 Claudius Sagitta's warning to Piso ("an order to kill him had been given") and the centurion's loud greeting of Piso as emperor.
- 4:54 the Druids' prophecy that rule would pass to the peoples beyond the Alps (a note exists, a card does not), and 4:61 Veleda's prediction (the note #52 exists, no card).
- 4:83 the youth's dream-command to Ptolemy, Apollo's answer at Delphi ("bring back the statue of his father") and the second vision's threat: all oracles with named hearers.
- 4:72 the soldiers' demand to destroy the Treveri colony (a quoted speech) and Cerialis's answer; 4:62 the legions' lament on the march (a quoted speech); 4:25 Flaccus's reading of the letters to the army (an order).
- 4:10/4:40 Musonius's prosecution and Junius Mauricus's request for the imperial records (reported speeches); 4:45 Patruitus's complaint.
- 4:31 the Gallic auxiliaries' and Montanus's reactions are narrative, not speeches; skip.
Second, 31 `readers` values are the same two or three boilerplate sentences beginning "Roman readers, as above"; the site shows each card alone on every verse it covers
(STYLE.md, settings), so "as above" points at nothing. The two long versions (4:81, 4:83) carry the evidence; the others should say it once in their own words
or the field should be left out (it is optional). One more problem inside the long text: the card on 4:81 says "The surviving text names no patron or dedicatee for Book 4", a statement about the text, which is fine, but "he writes for readers who expect Latin history to cover such things" is inferred from "hasn't yet been made well known by Roman writers" only; label it as inference.
Fix: add the missing cards (short ones are enough), replace "as above" with a one-line self-contained `readers`.

**9. major. variants.json #24, #31, #32, #34 (4:53, 4:81, 4:82, 4:85): another author's event is offered as a reading of Tacitus.**
Each is correctly labelled in `w` and `why` as a different account (Suetonius, Dio, Josephus). But a variant's non-followed `plain` replaces the anchor in the text when the reader switches. Switching #34 turns "Domitian himself could stay near Lugdunum" into "Domitian marched on the rebels and they gave in"; switching #24 turns "gave the job of rebuilding the Capitol to Lucius Vestinius" into "began the rebuilding of the Capitol himself, carrying rubble on his head"; #31 gives "lame in the leg" and "with a withered hand" in place of "sick in the hand"; #32 "his own freedman" in place of "one of the leading Egyptians". None of these is in Tacitus; the translation view would show invented Tacitus. The same points are already made, with the same evidence, in notes #43, #60, #66 and #75, so the entries also repeat them (STYLE: "Never explain the same point twice").
Fix: delete these four variants and keep the notes (Suetonius 8.5, 7.2, 7.1, Dio 65.8 and Josephus 7.4.2 were all re-checked and are accurately reported there). If the lead wants them, give the other readings `plain` equal to the followed text.

**10. major. variants.json #13 (4:27): process language in reader text.**
R1's `w` reads "The other reading of the same Latin (the accused man, Hordeonius, is bound), which the draft and the review took; not a different manuscript". "The draft and the review" is the build process, not a witness. Fix: "The other way to read the same Latin (Hordeonius chained); not a different manuscript." See also Translation flags, 4:27.

**11. major. sources.json (shared key `dio-roman-history`, and `plutarch-moralia`): the citations do not cover what the notes cite them for.**
`dio-roman-history` => "Cassius Dio, Roman History (early 200s AD), book 60"; every note and card here cites Dio 65.1, 65.2, 65.3, 65.7, 65.8. `plutarch-moralia` => "Moralia (about AD 100), including Advice on Marriage (Coniugalia praecepta)"; here it is cited for On Isis and Osiris 28. `josephus` => "The Jewish War (about AD 75)" with no translator, while the notes quote "Whiston's translation" (checked: the quotes match the Gutenberg Whiston text I searched) and the Suetonius/Dio/Plutarch passages are cited as "Loeb English on LacusCurtius" with no translator named (I could not see who). Fix: edit the shared entries (lead) so Dio reads "books 60-65 ... (cited here: 65)", Plutarch lists On Isis and Osiris, and add the English translations used (Whiston for Josephus; the Loeb translators as shown on the LacusCurtius pages, checked on the page).

**12. major. Wikipedia as the only source where a primary source was available.**
The brief for the context layer asks me to list these. Each is a fact in Tacitus's own surviving work or in Suetonius/Dio, and the key reads "English Wikipedia, read 3 November 2026":
- `wikipedia-helvidius-priscus`: exile AD 66, praetor 70, "later banished and killed" (notes #7, #8; topic helvidius-priscus). Suetonius, Vespasian, and Dio 65 have the end; Tacitus, Annals 16.28-35, has the exile.
- `wiki-musonius` and `wikipedia-barea-soranus`: Gyaros, AD 65, Soranus's governorship of Asia and death (note #11, #33). Tacitus, Annals 15.71 and 16.21-35.
- `wikipedia-cologne`: "colony in AD 50" (note #25). Tacitus, Annals 12.27 (I tried the Perseus passage; the page timed out, so I did not read it).
- `wiki-capitoline-temple`: burning on 19 December 69 and dedication in 75 (notes #30, #43). I opened the Wikipedia article: it says "burnt down ... on 19 of December of 69 AD" and "dedicated in 75 AD". The sentence about the 80 AD fire is marked as needing a citation on that page. Tacitus 3:71-72 (the burning) and Suetonius, Vespasian 8.5 are in hand.
- `wikipedia-revolt-of-the-batavi`: the dates, and "peace terms unknown": Tacitus is the main source; the page should not be the citation for what Tacitus says.
- `wikipedia-quinctilius-varus`: the Syrian governor of 7-4 BC and Teutoburg are one man. Josephus (War, Preface 7; 1.31.5) and Tacitus 4:17 were opened by the writer; the identity itself rests on Wikipedia.
- `wikipedia-veleda`: the name "probably means seeress". No primary exists; keep, with "probably", but see finding 7 on hedges.
Also the text of the chapter H lens says "Wikipedia notes that the peace terms are unknown": a Wikipedia mention in running prose. Fix: replace with the primary where one is open (cite Annals 12.27, 15.71, 16.28-35; Suetonius), and keep Wikipedia only where nothing else is available, saying "Wikipedia" in the source key only.

**13. major. notes.json #7 (4:5) and topics `stoicism`: the Mark 10:18 contrast does not answer the Stoic claim.**
Body: "<b>Differs.</b> The Stoic says only the honorable is good. Jesus says 'No one is good except one: God' (Mark 10:18)." Mark 10:18 (checked in the site text: "Why do you call me good? No one is good except one: God.") is about who may be called good, a rich man's greeting; it says nothing about whether things outside the mind (wealth, rank) are good or bad, which is what Tacitus's Stoics deny (4:5 Latin `qui sola bona quae honesta ... potentiam nobilitatem ceteraque extra animum neque bonis neque malis adnumerant`). The link is presented as a "Differs" match and repeated in the stoicism topic. It is an overstated link.
Fix: drop the Mark 10:18 sentence or replace it with a link that fits the claim (for example, a verse that does call things outside the mind good, or the note simply says the Bible's wisdom books treat wealth and rank as gifts that can be good or dangerous, with a checked verse). Also the stoicism topic lead says Stoicism "holds that only what is honorable is good": one tenet is made the whole definition; and "Musonius Rufus in Tacitus's Histories (4:5, 4:10)" implies 4:10 calls him a Stoic; 4:10 does not (it says only that Publius Celer "claimed to be a teacher of philosophy").

**14. major. notes.json #31 (4:41): an unsupported contrast.**
"The Roman oath rests on fear of the gods' anger, the Bible's on truth." Tacitus 4:41 (Latin `deos testes advocantes` in the plain.txt "calling the gods as witnesses") says nothing of fear of anger; and the Bible's oaths are also sworn by God, with a curse for falsehood (Leviticus 19:12, the verse the note quotes, speaks of profaning the name). Both halves of the contrast are the writer's characterisation, not a quoted or checked source. Fix: "The senators call the gods as witnesses; the Law allows an oath only in the LORD's name and forbids swearing falsely by it (Leviticus 19:12); Jesus goes further..." The oaths card itself I re-checked against the texts and it is accurate (see "Verified").

### Minor

**15. minor. notes.json #6 (4:6): "The Latin is *urnam* and *sortem*".** The Latin of 4:6 has only `urnam postulabat`; `sorte et urna` is at 4:7 and `sortem legationibus posuissent` at 4:8. Fix: "*urnam* (4:6), 'the urn', and *sorte et urna* (4:7), 'by lot and urn'."

**16. minor. notes.json #28 (4:39) and #8 (4:5): quotation marks around words that are not in the site's translation.** #28 quotes "Agrippa, who had been summoned from the capital," as Tacitus at 2:81; the site's 2:81 reads "Agrippa, called away from Rome by secret messages from his people". #8 quotes "speak of him often"; plain.txt 4:5 reads "a man I'll have to speak of often". These are Church and Brodribb's words (or close) presented as the Conversational English Translation. Fix: use the plain.txt wording exactly.

**17. minor. notes.json #54, #19: locator "War, preface" and "very likely".** "(War, preface)" should be "War, Preface 7" (verified: the sentence is in the preface, section 7 of the Gutenberg text). The Varus identity is held as "Very likely" while Wikipedia (the cited source) states it as one man; either is fine but say the Syrian governor and the Teutoburg commander were the same man if that is what the source says, and cite Josephus's own name for him only for the Syria part.

**18. minor. notes.json #39 (4:51): "tenth of Lous (Ab)".** Josephus (War 6.4.5, Whiston: "the tenth day of the month Lous") gives Lous; "(Ab)" is the writer's equation, with no source. Also the verdict "Same person as Paul's Titus? Unlikely" is weaker than the evidence (a Gentile convert versus Vespasian's son, one called "a Greek" by Paul in Galatians 2:3); say "No." The same applies to #37 (Festus: the posts, the dates and the names differ).

**19. minor. notes.json #73 (4:84): "Acts reports a similar claim at Ephesus".** The city clerk (Acts 19:35) speaks of an image that "fell from the sky"; Tacitus's statue boards a ship by itself. Both are claims of divine arrival, but not "similar claim" in the sense of the same story. Fix: "Acts also has a city that claims a divinely delivered image (Acts 19:35)". The quoted "most popular account" is the plain.txt wording and checks out.

**20. minor. notes.json #71 (4:83, Pontus): wrong anchor.** The anchor is "fetch his statue from there"; the note is about Pontus. Anchor "Pontus" (the word before in the same verse: "send his most trusted friends to Pontus") so the tap lands on the name.

**21. minor. notes.json #72 (4:83, Pythian Apollo): the etymology "named after the Python" has no source.** `s` is only `perseus-tacitus-lat`. State it with a source opened, or cut it to the Acts 16:16 link.

**22. minor. notes.json #70 (4:83): "Alexandria's later Greek rulers, the Ptolemies, built its temples" is unsourced and the verse says the opposite order** (Ptolemy was "adding walls, temples and rites" to a "newly founded" city). Fix: "Ptolemy is shown adding temples and rites to the new city".

**23. minor. notes.json #62 and chapters.json deep: "Three readings are open" versus "four ways to read them".** The note lists staged, ordinary recovery, real power; the chapter heading lists Roman story, staged, ordinary recovery, sign with a source. Make the counts agree, and in #62 say what "a real power at work" means (the note and the chapter both leave it at Deuteronomy 13:1-3 / Matthew 24:24 / 2 Thessalonians 2:9, which are about false signs, so the third reading is presented only as a warning; that is a Christian reading and should be labelled "Christian reading" with a named holder if one is opened).

**24. minor. notes.json #14 (4:12) and topic roman-army: weak Bible link.** "Roman soldiers meet Jesus as centurions" is offered as the link for the Batavians; the topic roman-army says the centurion of Matthew 8 "is the kind of officer Tacitus describes". Tacitus describes draft officials, mutinous soldiers and a first-rank centurion Aquilius (4:15); nothing in the passage ties to the believing centurion. Fix: "Nothing in the Bible touches them; their army is the one the Gospels' soldiers belonged to" and drop the "kind of officer" sentence.

**25. minor. notes.json #46 (4:54): "Moesia lay beside Illyricum and Dalmatia, which are in the Bible"** and Dalmatia and Illyricum are not two regions (Dalmatia was part of Illyricum). Say "Illyricum, whose southern part was Dalmatia" only if a source is opened; otherwise cut "beside Illyricum and Dalmatia" and keep Romans 15:19 and 2 Timothy 4:10 as place links.

**26. minor. topics `batavian-revolt` (core, lead and section): scope.** "Tacitus tells it in Histories 4:12-4:79" and the section "4:12-4:37 and 4:54-4:79" leave out 4:85-4:86 and the continuation in Book 5; the lead says the revolt "was ended by Petilius Cerialis" while the section says the Histories "breaks off in Book 5 before the end of the war". Both cannot stand as the topic's claim; the end by Cerialis rests on Dio 65.3 and Josephus 7.4.2 (both checked, both say Cerialis settled it).

**27. minor. notes.json #12 (4:11): "the fortieth milestone from Rome on the Appian Road... the same stones carried Paul toward Rome".** Wikipedia's Appian Way page is cited for the stations; the Latin gives `ad quadragensimum ab urbe lapidem Appia via` (confirmed in texts/orig). Acts 28:15 names Appius' Market and Three Taverns, which the note says the page "lists as stations" (not opened by me). The "same stones" claim is a flourish: the note does not say where the fortieth mile falls relative to those stops. Say "on the same road".

**28. minor. glosses.json: three glosses are patronizing or add nothing.** 4:3 "Roman Knight's rings => the gold ring that marked a man of the Knights, Rome's business class" (the gold ring is not in the verse and "business class" misdescribes an order defined by rank and property); 4:53 "On the 21st of June => June 21, in clear weather" (repeats the words); 4:13 "put on a show of friendship => made a fake display of loyalty" (restates the sentence). Fix: remove the second and third; for the first, "the gold ring" only if a source is opened.

**29. minor. notes.json #44 (4:53) and gloss "soothsayers": "priests who read signs in animal entrails".** The Latin is `haruspices` and the note and gloss call them priests; the verse and the note do not establish that they were priests. Say "specialists who read signs in animal entrails".

**30. minor. notes.json #53 (4:61): the note is accurate but the anchor is the whole sentence that, in my judgement, should be hidden** (see "Sensitive passages"). If the sentence is hidden, the note title "A story marked as hearsay" and preview are fine (no explicit detail), and the anchor sits wholly inside the span.

**31. minor. variants.json: ten entries are name or number corrections of the base English, not variants** (#1 Vergilius, #4 Sentius, #8 Julius Civilis, #11 and #17 the 22nd legion, #21 Flavius, #23 Plautius, #29 Julius Valentinus and similar). They are correctly labelled and the Latin readings I spot-checked are right (4:29 and 4:37 openings, 4:5, 4:27). They crowd the Variants panel; the real textual points of the book are #9 (4:15 crux `†occupata†`) and #20 (4:42 `e xs̅c̅`). Optional: keep only the entries where the translation chooses between readings and move the rest to the build log. No factual error.

**32. minor. variants.json #9 (4:15) and #20 (4:42): the cruxes are reported but not explained.** #9 `b`: "Different editors have emended" names no editor or conjecture; #20 `b`: "no editor reads with confidence". Both statements are about editions the writer did not open (the sources-checked list shows only Perseus). Fix: say only what Fisher's text shows (dagger marks; the letters `e xs̅c̅`), with no claim about other editors.

**33. minor. notes.json #59: "consults no doctor" is an argument from silence.** Mark 8:22-26 does not say Jesus had no doctor; it says he took the man out of the village and told him not to go back in. Say "Mark shows no doctor's opinion asked".

---

## Missing or weak Bible links (verse by verse pass)

I went through plain.txt 4:1-4:86 asking what the Bible names or describes. Nothing in the notes is a false Bible link. These are additions I would make:
- **4:81 (healing)**: add Acts 3:1-10 (a lame man healed in public, "well known", and the rulers' reaction in Acts 4:14-16, already cited) and Acts 14:8-10 (a lame man healed at Lystra, followed at once by the crowd calling Barnabas "Zeus", Acts 14:12, which the 4:58 note already cites). Together they are the Bible's own cure-and-worship pair set beside Tacitus's. Optional: Mark 10:46-52 (blind man healed by a word).
- **4:81, hand "stepped on"**: the only Bible foot-on-body image is Joshua 10:24 (feet on kings' necks), which would be a stretch; do not add.
- **4:82 (Basilides seen far away)**: no good Bible match; Acts 8:39-40 (Philip carried off) is a weak parallel; leave out.
- **4:17 "Syria, Asia and the East, used to being ruled by kings"**: Syria and Asia are already place links (4:3, 4:10); no more needed.
- **4:60 (famine in a siege)** is linked; add Deuteronomy 28:53-57 if a note wants the covenant-curse reading of sieges (the passage is in the site's text; frank, so check the sensitive rule before linking).
- **4:52 (Titus pleads for brothers)**: Psalm 133:1 is cited; Genesis 37 and Genesis 4 are named in prose without references. Add the references.
- **Same-person verdicts** I weighed: Varus (very likely: fine), Agrippa II and Bernice (very likely: fine; Acts 25:13 and 26:1 say what the note says), Festus (unlikely: should read "no", finding 18), Titus (unlikely: should read "no"), Bassus (possible: should read "likely", finding 6). Nothing is claimed that the evidence cannot support, except that the Bassus one is too weak.
- **Book names on every reference**: all `r` entries and body references to other books name the book. Bare `War 7.4.2` / `War 4.11.5` in `r` fields (notes #13, #23, #46, #54, #55, #58) read as the Bible-style reference without the author; write "Josephus, War 7.4.2" so a reader does not take "War" for a Bible book (the build accepts it).

---

## Sensitive passages (Matt's PG-13 rule)

Checked every verse of plain.txt, every note title, preview, anchor and body, every gloss, summary, chapter text and topic section. Nothing in the notes, glosses, titles, summaries or topics repeats explicit sexual, crude or graphic violent detail: note #12 keeps the Appian Road killing to "kept short", note #53 gives no detail beyond the verse. The open verses I judge past the line:

1. **4:61**, kind `violence`, span (the whole sentence, exactly as in plain.txt):
   `It was also reported that he handed over some of the prisoners to his small son to shoot with a child's arrows and javelins.`
   Summary: `A reported story of how Civilis treated some prisoners.` (56 characters).
   Why: prisoners used as targets by a child is torture as sport and lingering; the Latin marks it as hearsay (`ferebatur`), which the note already says. Judgement call: it is one sentence with no gore, so a PG-13 film could imply it; I recommend hiding it because it is the only passage in the part where torture is the point, and the Bible's own comparable frankness (for example Judges 1:6-7, 2 Samuel 12:31) is said briefly, not as sport.
   Note #53's anchor equals the span, so the build allows it (the note lies wholly inside).
2. **4:42**, kind `violence`, span: `and had even bitten the dead man's head`.
   Summary: `A charge that the accused mutilated a dead man's body.` (53 characters).
   Why: a decapitated head bitten is graphic gore in a single clause. It sits inside a speech and is an accusation, not narrated by Tacitus. Optional; if Matt reads the Bible's frankness (2 Kings 9:34-37) as the yardstick, leave it open. The span occurs once in 4:42; no note or variant touches it (variant #20 is on "of his own free will", a different place in the verse).

Left open on purpose, and why: 4:1 (bodies in the streets, killings; battle and street deaths stated plainly), 4:11 (a forced death by opening veins; an execution stated plainly, no detail), 4:14 (boys taken "for shameful purposes"; sexual wrong mentioned without detail), 4:2 and 4:55 (adultery named), 4:44 (a killing after an affair), 4:60 (a column attacked, a camp burned), 4:79 (men burned in houses); all are within what a PG-13 film shows or implies. No `sensitive.json` exists for the part, so there is nothing to check for hiding too much or too little.

---

## Translation flags (not findings against the writer)

- **4:27** "He was then put in chains": in English "He" reads as Hordeonius (the last man named: "accused Hordeonius of treason"). The Latin `vinctusque ... exolvitur` follows the subject of `obiecit` (Gallus, "exterritus") and Church and Brodribb says "the legate himself charged Hordeonius... He was then put in irons", also Gallus. The writer's own `translation-flags.md` says the same. Recommend "Gallus was then put in chains".
- **4:5** the rendering is right (`Cluviis`, `Carecina`); the base's mistake is recorded in variant #2.
- **4:6/4:8** "the urn (drawing lots)": the Latin `urnam` is a vote-urn used for casting lots; fine.
- **4:25** "set up a very bad precedent": the Latin is `pessimum facinus` (a very bad deed); "precedent" adds a sense. The next clause explains it, so it is only a minor shading.
- No other error found in the verses I read for this review. Also: 4:50 "troubles we soon suffered" is right (`mox tulimus`, first person plural).

---

## Verified (at least 45 claims, all re-checked this session)

Primary text opened: Suetonius Vespasian 4.5 ("an old and established belief... men coming from Judaea to rule the world"), 5.6 (Josephus), 7.1 (Basilides the freedman, "sacred boughs, garlands, and loaves"), 7.2 (a blind man, a lame man), 7.3 ("hardly any faith that this could possibly succeed"), 8.5 ("carried some of it off on his own head"); Suetonius Domitian 1.2 (Isis), 1.3 (city praetor "only in name"), 2.1 ("uncalled for" Gaul campaign), 2.2 (pretence of modesty and an interest in poetry), 2.3 (will tampered with; plot against his brother; Titus left for dead); Dio 65.1 (Josephus's prediction), 65.2 (Mucianus "plumed himself greatly upon his honours"; "administered all the details of government with the help of Domitian"), 65.3 (Sabinus, vault, nine years, two sons, "took the name of Caesar", descent from Julius Caesar; Cerialis, the river "dammed up by the bodies"), 65.7 (two denarii to Jupiter Capitolinus), 65.8 (one healed with a "withered hand" by stepping on it, the other, blind, by spit); Gutenberg Whiston Josephus War (searched in `.cache/his404/war.txt`): 1.31.5 Varus president of Syria; Preface 7 Varus; 2.8.1 Coponius and Judas; 2.9.2 Pilate; 2.10.1 Gaius; 2.18.7-8 fifty thousand; 3.8.9 "art Caesar and emperor"; 4.10.5-6 Mucianus at Berytus and Tiberius Alexander; 4.11.1 Cappadocia and Phrygia; 4.11.4 the Capitol, Sabinus and Domitian; 4.11.5 Alexandria "the greatest of all cities next to Rome", Titus sent "to destroy Jerusalem", the route; 5.12.1 the wall; 6.4.5 the tenth of Lous and "long ago doomed it to the fire"; 6.5.2 false prophets; 6.5.4 the oracle; 6.6.1 the ensigns at the eastern gate; 7.4.2 the German revolt, Cerialis, Domitian, "returned to Rome with honor and glory", and Whiston's footnote 6 naming Classicus, Civilis and Cerialis and Domitian "one of Josephus's patrons"; 7.4.3 Sarmatians and Fonteius Agrippa; 7.6.1 Lucilius Bassus "sent as legate into Judea"; 7.6.6 "two drachmae every year into the Capitol". **Josephus's War does not name Serapis or Sarapis anywhere in the Whiston text (searched whole file), and in the 9,000 characters before 4.11.5 there is no healing, lame, blind, cure, oracle, portent or spit.** The note's statement (#58) is confirmed. (Isis appears once, at Rome, in 7.5.)
Secondary opened: Eve, NTS 54.1 (2008), Cambridge abstract (spittle added to the Bethsaida story to allude to the Vespasian story; Flavian propaganda; contrast with Roman messianic claims); Dickson at publicchristianity.org (Meier's "there is nothing like a miracle story to give one indisputable legitimacy", "photo opportunity", "twinkle in their eyes"; Dickson: "an obvious and expedient fraud"); Wikipedia "Temple of Jupiter Optimus Maximus" (19 Dec 69; dedicated 75); Wikipedia "Lucilius Bassus".
Oaths card: Catechism 2153-2155 at vatican.va (2153 "Do not swear at all"; 2154 "grave and right reasons", "in truth, in judgment, and in justice"; 2155 "When an oath is required by illegitimate civil authorities, it may be refused"); Westminster Confession 22.2 ("warranted by the Word of God, under the new testament as well as under the old") and 22.3 ("fully persuaded is the truth") at opc.org; Schleitheim Article VII at anabaptists.org ("we shall not swear at all"; Christ "prohibits all swearing to His (followers), whether true or false"). Tradition names Catholic, Reformed and Anabaptist are in TRADITIONS. Accurate and fairly put. (A Lutheran, Baptist or Quaker answer could be added, but the card needs only two and none is caricatured.)
Latin checked against texts/orig/His.json: `praefectura praetorii` (4:2), `nemus` (4:14), `Gaianarum expeditionum ludibrium` (4:15), `aquiliferis` (4:25), `haruspices` and `suovetaurilibus` (4:53), `superstitione vana` (4:54), `ferebatur` (4:61), `incertum` (4:49), `Pythicum Apollinem` (4:83), `Basiliden` (4:82), `superstitionibus` (4:81), `Quirine ... parens` (4:58), `ad quadragensimum ... lapidem` (4:11), `octoginta milibus passuum` (4:82); the crux `†occupata†` (4:15) and `e xs̅c̅` (4:42); the verse-division shifts: Latin 4:29 opens `Nec finem labori nox attulit` (Church and Brodribb ends 4:28 with it); Latin 4:37 opens `Vbi sedato impetu metus rediit` (Church and Brodribb ends 4:36 with it).
Bible quotations: I compared every quoted phrase in the notes against the site's translations by script; all matched except those named in findings 16 and the two Tacitus phrases there. Spot reads of Mark 3, 7, 8, John 9:6, Luke 3:12-14, Acts 4:14-16, Acts 14:12-15, Acts 17:22 (the site's Greek word list gives `δεισιδαιμονεστέρους` "very religious"), Acts 18:2, Acts 19:35, Philippians 1:13, 1 Timothy 2:1-2, James 5:12, Romans 13:5-7, Isaiah 10:1, Isaiah 66:3, Matthew 24:2 all match the notes.
The chapter page: four lenses C, H, R, J present in `views`, consensus not at issue; the Alexandria healings are given staged, ordinary recovery, real-power warning and Roman story fairly except for finding 7 (no named holder for a real-power reading) and finding 23.

Could not confirm in anything I opened: the exact English of Plutarch, On Isis and Osiris 28 as quoted (finding 1); who names Epponina other than Tacitus (finding 2); which edition and translators the Loeb pages on LacusCurtius use; the Wikipedia pages for Helvidius, Musonius, Barea Soranus, Veleda, Cologne, Varus, Appian Way and the Batavian revolt (I did not reopen them; findings rest on the writer's keys and the primary sources named in finding 12); Hume's remark on the Alexandria cures (seen only in a secondary summary).

## Fixes applied (round 2)

Counts: 33 findings, 29 applied, 3 partly (12, 17, 18), 1 declined (31). Every changed fact was checked in a source opened in this round: LacusCurtius Suetonius (Vespasian 8.5 and 15), Dio 65 (chapters 2, 3, 7, 8), Tacitus Annals 12.27, 15.71, 16 (chapters 23, 31, 33, 35), the Perseus English of Plutarch On Isis and Osiris 28 (summary and short quotes), Velleius Paterculus 2.117.2 at Livius.org, Wikipedia "Lucilius Bassus", Whiston's War (Gutenberg 2850, local copy), the site's Bible texts and the Latin in texts/orig/His.json.

1. Plutarch quotations: removed the quotation marks and the two quoted phrases; the note now paraphrases what the Perseus passage confirms (dream, Pluto's statue at Sinope, Sosibius, Soteles and Dionysius, Timotheus and Manetho, Cerberus and serpent, persuaded Ptolemy it was Serapis) and says the page names no translator. The "name given after the statue reached Alexandria" and "god of all peoples" claims were dropped (not confirmed in the text opened). "Delphi" removed in favor of the text's "Pythian Apollo". New source key plutarch-isis-osiris.
2. "Tacitus alone" removed: "Of the two, only Tacitus names the wife"; Dio 65.3 "with his wife for nine years" confirmed.
3. Jupiter/Quirinus note rewritten with the vocative Latin <i>Iuppiter optime maxime</i> (checked in 4:58); the Capitol is Jupiter's (4:53); Quirinus is given no temple.
4. "Jerusalem council" changed to "The Sanhedrin" and "in plain view" (Acts 4:14, 4:15 checked).
5. Acts 18:18 now says "someone, Paul or Aquila" with the participle <i>keiramenos</i> (SBLGNT checked in the review; the site's English quoted exactly). The vows topic and the note preview changed too.
6. Lucilius Bassus: verdict changed to "Likely" with reasons, "no scholar" sentence deleted, Wikipedia's treatment of them as one man (opened) stated plainly with its single citation. Herodium: Josephus War 1.21.10 (opened) says Herod built and named it; Matthew 2:1 is now cited for "the king" only. The jewish-war topic changed to "likely".
7. All "I found no scholar" and "I know of no scholar" sentences deleted (notes on Bassus, the two sanctuaries, the cures pair and healing politics; the chapter deep text and spec box; the miracles and prophecy boxes). Third reading in the healings note now labelled a Christian reading with no named holder. Spec text now says "Claude's reading". Hume not added: I did not open the Enquiry.
8. Chapter settings: 33 to 51 cards. Added 4:10 (Musonius), 4:25 (Flaccus's order), 4:40 (Mauricus), 4:44 (Domitian; Mucianus), 4:45 (Patruitus), 4:49 (Sagitta; the centurion's greeting), 4:54 (Druids' prophecy), 4:61 (Veleda's prediction), 4:62 (the legions' lament), 4:72 (the soldiers' demand; Cerialis's answer), 4:82 (Serapis's answer through Basilides), 4:83 (the youth's command; the Pythian Apollo's answer; the second warning), 4:84 (the threatening figure). Each of the 51 cards has its own `readers` line; none says "as above". The two long ones (4:81, 4:83) label the "writes for readers who expect Latin history to cover such things" step as an inference. 4:31 left alone as the review said.
9. Variants "Who started the Capitol's rebuilding?", "Which limb?", "Who was Basilides?" and "Did Domitian reach the front?" deleted; the notes already carry the points (Suetonius 8.5, 7.1, 7.2, Dio 65.8, Josephus 7.4.2 re-read). Variants 35 to 31.
10. Variant 4:27 reading label now "The other way to read the same Latin (Hordeonius chained); not a different manuscript."
11. New keys instead of changing shared ones (Act uses dio-roman-history for book 60; Est uses plutarch-moralia for Advice on Marriage): dio-roman-history-65 (Loeb vol. 8, 1925, translator not named on the page), plutarch-isis-osiris (translator not named on the page), josephus-war-whiston (Whiston, Gutenberg 2850), suetonius-loeb-lacuscurtius (Vespasian page: Loeb 1914; translator not named), tacitus-annals-thayer, velleius-livius (Shipley), wiki-lucilius-bassus. The part's notes, variants, cards and topics use them.
12. Partly. Primary sources now carry: Helvidius's exile and expulsion from Italy (4:6; Annals 16.33), his end (Suetonius, Vespasian 15: banished, later ordered killed, then a recall sent, false report he was dead), Musonius's expulsion (Annals 15.71), Soranus, Servilia and the free choice of death (Annals 16.23, 16.31, 16.33), the Cologne colony (Annals 12.27: veterans in the Ubian town where Agrippina was born), the Capitol's burning (Tacitus 3:71-3:72), the rebuilding (Suetonius 8.5), the revolt's date and the missing end (Josephus War 7.4.2; Histories stops at 5:26), Varus in Syria (Velleius 2.117.2 and Josephus). Wikipedia is kept, and named as Wikipedia, only where nothing opened gives the fact: Gyaros and AD 65, the AD 50 colony name and 38 BC settlement, 19 December and AD 75 for the Capitol, Varus's years 7-4 BC, Veleda's name, the Appian Way stations, the Stoic label for Helvidius and Musonius. Keys wikipedia-revolt-of-the-batavi and wikipedia-barea-soranus dropped from the part. The chapter H lens no longer says "Wikipedia notes that the peace terms are unknown".
13. Mark 10:18 sentence removed from the Stoic note and topic; replaced by Ecclesiastes 5:19 (checked in the site text) with a "Partly differs" label. The topic and core lead now say the quoted line is one tenet, name only Helvidius as following the teachers (4:5), and say Musonius "appears at 4:10" (4:10 does not call him a Stoic; Wikipedia does).
14. Oaths note: "fear of the gods' anger" contrast removed; now "The senators call the gods as witnesses; the Law allows an oath only in the LORD's name and forbids swearing falsely by it (Leviticus 19:12)". The oaths card was left as is.
15. Lots note now cites <i>urnam</i> (4:6) and <i>sorte et urna</i> (4:7) (all checked in the Latin).
16. Both quotations replaced with the site's words (2:81 "called away from Rome by secret messages from his people", "with no less spirit"; 4:5 "a man I'll have to speak of often").
17. Partly. "War, preface" is now "War, Preface 7". "Very likely" for Varus kept; Velleius 2.117.2 added for the Syria governorship. Bare "War x" in `r` fields changed to "Josephus, War x" (build accepts).
18. Partly. Titus and Festus verdicts changed to "No" in the notes. Declined the "(Ab) is unsourced" point: Whiston's own bracket reads "[Ab,]" (checked at the passage), so the note now says "Whiston adds 'Ab' in brackets".
19. Reworded: "Acts also has a city that claims a divinely delivered image" (Acts 19:35).
20. Pontus anchor is now "send his most trusted friends to Pontus" (the word alone occurs twice in 4:83).
21. Etymology cut; note says Tacitus calls the oracle god the Pythian Apollo and keeps the Acts 16:16 word link.
22. Alexandria note now says Ptolemy "is shown adding walls, temples and rites" to the new city (4:83).
23. Counts agree: the healings note says "Beside the Roman telling itself, three readings are open"; the chapter heading's four ways are the Roman story plus those three. Third reading labelled a Christian reading.
24. Gospel-centurion link removed from the Batavians note and from the roman-army topic; the note now says "Nothing in the Bible touches the Batavians."
25. "Moesia lay beside Illyricum and Dalmatia" cut; Romans 15:19 and 2 Timothy 4:10 kept as place links.
26. Batavian topic and core lead rewritten: the Tacitus passages are 4:12-4:37, 4:54-4:79, 4:85-4:86 and 5:14-5:26; the end by Cerialis is attributed to Josephus and Dio, not Tacitus.
27. "The same stones carried Paul" changed to "Paul came to Rome on the same road".
28. Glosses "Roman Knight's rings", "On the 21st of June" and "put on a show of friendship" deleted; "soothsayers" now "specialists who read signs in animal entrails". Glosses 50 to 47.
29. Note preview and gloss now say "specialists", not priests.
30. Note "A story marked as hearsay" left as is (no detail); its anchor lies wholly inside the new hidden span.
31. Declined. The name and number entries record real choices between the Latin and the base English (the Variants panel is the place the site shows them); none is wrong. Left for the lead if the panel is judged too crowded.
32. Both crux variants now say only what Fisher's text on Perseus shows (daggers around <i>occupata</i>; the letters <i>e xs̅c̅</i> printed as they stand); the claims about other editors were removed.
33. "consults no doctor" changed to "Mark shows no doctor's opinion asked" in the note, chapter C lens and deep text.

Missing Bible links: added Acts 3:1-10 and Acts 14:8-12 (note "A hand made whole", the chapter list and echoes); Genesis 4:8, 27:41 and 37:4 on the brothers; "Josephus, War" in the `r` fields. Not added, as the review advised: Joshua 10:24, Acts 8:39-40, Deuteronomy 28:53-57.

Sensitive passages: 4:61 hidden through the new sensitive.json (kind violence; the exact sentence from plain.txt about the prisoners; summary "A reported story of how Civilis treated some prisoners."). 4:42 left open (the lead's decision). No note repeats the detail.

Translation flags: plain.txt untouched. 4:27: the Latin <i>vinctusque ... exolvitur</i> follows the subject of <i>obiecit</i>, Gallus, so the English "He" (after "Gallus ... himself accused Hordeonius") already points to Gallus by the usual rule that a pronoun follows the clause's subject; not an error, so no edit. The variant records the question. 4:25 "precedent" left as a minor shading.
