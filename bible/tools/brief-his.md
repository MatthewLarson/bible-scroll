# Brief: Histories of Tacitus (His)

A writing of another people (works.json `tacitus-histories`, tier `world`, group "Other peoples and religions"): a Roman
history, not a sacred book. Read `tools/agent-writer.md`, `tools/agent-writer-works.md` and `tools/agent-writer-world.md`
first; this brief adds what is particular to this book. Its translation is the **Conversational English Translation**
(book.json `canon.style: "conversational"`), made by the English-base route.

## The book
The Histories of Cornelius Tacitus (Latin *Historiae*), the five books that survive. It begins with the year Servius
Galba was consul for the second time and tells of the civil wars after Nero's death. Book 5 includes Titus in Judea
and an account of the origin of the Jews (5:2-13). The text breaks off in the middle of a sentence at 5:26.

Texts (generated, read-only): `texts/en/His.json` key `cb` (Church and Brodribb, 1864, Perseus, CC BY-SA 4.0),
`texts/orig/His.json` key `lat` (Fisher, Oxford Classical Text, 1911, Perseus, CC BY-SA 4.0). A verse is one of
Tacitus's numbered sections; a chapter is one of his books. Made by `python tools/tacitus-texts.py` (which also
registers His in `texts/catalog.json`).

## Chapters and parts
One part per Tacitus book. Parts are `content/books/His/parts/01-01/` ... `05-05/`.

| Ch | Verses | Tacitus's book | Part |
|---|---|---|---|
| 1 | 90 | Book 1 | 01-01 |
| 2 | 101 | Book 2 | 02-02 |
| 3 | 86 | Book 3 | 03-03 |
| 4 | 86 | Book 4 | 04-04 |
| 5 | 26 | Book 5 (breaks off at 5:26) | 05-05 |

Chapter titles are "Book 1" ... "Book 5" for now. book.json is written by the lead (the "book" part), who also writes
the `canon` block.

## Lenses (fixed)
- **C, Christian reading**: how a Christian who takes the Bible as true reads the passage; where the Bible's own account
  of the same years, people and places stands beside it. The site's own voice.
- **H, Historical-critical**: historians and classicists: what Tacitus knew and where he got it, how his account
  compares with other writers, how scholars judge him, each with named holders.
- **R, Roman world**: what the first readers knew: emperors and courts, legions and provinces, Roman religion, law,
  offices and customs.
- **J, Jewish and early Christian writings**: where Josephus, the Gospels and Acts and other writers tell the same
  events or name the same people.

## Local draft (tools/agent-translator-local.md)
- Base text key: `cb` (Church and Brodribb). `node tools/base-lines.js His <chapter>` prints it.
- Parts and chapters: 01-01 = chapter 1 (1:1-1:90); 02-02 = chapter 2 (2:1-2:101); 03-03 = chapter 3 (3:1-3:86);
  04-04 = chapter 4 (4:1-4:86); 05-05 = chapter 5 (5:1-5:26).
- Gods: the Romans' gods stay "the gods" (lowercase); "Jupiter" and the like are names. "God" only where the base has it
  and the author means one supreme god (add to local-questions.md). Where the base writes "the Gods", use "the gods".
- Names (one form per name across all five books; where Church and Brodribb and the Latin differ the Latin form is used, see Lead decisions below). Emperors and their circle: Galba,
  Otho, Vitellius, Vespasian, Titus, Domitian, Nero, Claudius, Caligula, Tiberius, Augustus, Piso, Titus Vinius, Laco,
  Icelus, Tigellinus, Mucianus, Primus Antonius, Fabius Valens, Caecina, Cerialis (Petilius Cerialis), Flavius Sabinus,
  Marius Celsus, Suetonius Paullinus, Verginius, Vindex, Hordeonius Flaccus, Vocula, Civilis, Classicus, Tutor, Veleda,
  Cluvius Rufus, Eprius Marcellus, Helvidius Priscus, Annius Gallus. Peoples: Batavians, Canninefates, Treveri, Lingones, Ubii, Nervii, Helvetii, Germans,
  Gauls, Parthians, Jews, Suevi, Sarmatae, Dacians. Places: Rome, Italy, Gaul, Germany (Upper and Lower), Britain,
  Spain, Africa, Egypt, Syria, Judea, Jerusalem, Moesia, Pannonia, Illyricum, Dalmatia, Raetia, Noricum, Mauretania,
  Achaia, Pontus, Cremona, Bedriacum, Placentia, Ravenna, Misenum, Lugdunum, Vienna, Mogontiacum, Colonia
  Agrippinensis, Novesium, Gelduba, Bonna, the Old Camp, the Rhine, the Padus, the Alps, the Apennines, the Capitol,
  the Forum, Tarracina, Narnia, Verona, Alexandria. Offices and groups, in plain English: the Senate,
  the Praetorian Guard (no gloss in the text unless the fact is checked in a source this session), consul, legion, Roman Knights, the emperor (lowercase), the empire (lowercase). Use the base's name for a faction
  (Vitellianists, Othonianists, Flavianists) the first time and keep it.
- Sections that break off: 5:26 is cut off in the middle; translate what is there and end where the base ends (no
  invented ending).

## Places needing full treatment
TODO for the context phase (after the Conversational English Translation is finished and checked). Likely candidates
are the Judea material in Book 5 and the Felix passage (5:9), but nothing is fixed.

## Sources already in the site
This book's `perseus-tacitus-eng` and `perseus-tacitus-lat` (content/books/His/sources.json). Source keys are global:
search the other books' sources.json before adding one. Every claim about Tacitus, his dates and his sources still needs
checking in an opened source this session (STYLE.md rule 2).

## Lead decisions
Cross-part alignment, 2026-11-03 (decisions and reasons: `.scratch/His-align.md`):
- Plain American spelling, no ligatures: Caesar, Caecina, Praetorian Guard, praetor, quaestor, Moesia, Judea, Sarmatae, Raetia, Bovillae, Caeracates, Vercellae, Aedui, Aemilius, Aelianus, Gemoniae, Monoecus.
- Names, one form each (the Latin where it differs from Church and Brodribb): Publilius Sabinus, Vergilius Capito, Julius Flavianus, Valerius Marinus, Tampius Flavianus, Pompeius Silvanus, Hilarus, Helvidius Priscus, Arrecinus Clemens, Plautius Aelianus, Julius Civilis, Julius Valentinus, Sentius, Moschus, Aegiali, Calvia, Domitius Sabinus, Marius Celsus, Nonius (also Nonius Attianus), Quintius Certus and Quintius Atticus, Alfenus Varus, Annius Gallus, Primus Antonius, Gnaeus Pompeius (Pompey), Vologesus, Mauretania (Mauretania Caesariensis). Spelling-only differences keep the Church and Brodribb spelling (Gugerni, Betasii, Sohemus, Griphus, Vestinius).
- Peoples and places: Tungri (never Tungrians), Sarmatae, Colonia Agrippinensis and the Agrippinenses, Gallia Narbonensis, the Padus, the river Mosa (Meuse) and the river Mosella (Moselle) as two rivers, the Old Camp, the Palace (the emperor's), the Capitol.
- Parties: Vitellianists, Othonianists, Flavianists, Galbianists (also as adjectives: Vitellianist soldiers, the Othonianist war).
- Army units: digits with an ordinal ("the 22nd legion", "the 5th and 15th legions"), lowercase "legion"; legion nicknames capitalized ("the Rapax", "the Adjutrix"); "cavalry wing", never "Horse"; "the Upper army", "the Lower army".
- Titles lowercase except in a fixed title: the emperor, the empire, the state; Roman Knights (a Roman Knight; the Knights); the Senate; the Praetorian Guard, "the Praetorian prefect", "the prefect of the city"; Caesar is capitalized as a name or a title (Julius Caesar, "hailed as Caesar", Titus Caesar).
- Possessives of singular names ending in s take 's (Vitellius's, Mucianus's, Claudius's).
- No in-text gloss (a parenthesis naming an office or identifying someone) unless the Latin or the base says it or a source is checked this session; plain translation helps (the word for the bonus, 3:50) stay.

## Keys
Source keys of the context layer, unified 2026-11-03 (mapping in `.scratch/His-keys.md`): Josephus's War is `josephus`, Antiquities `josephus-ant`, Against Apion `josephus-apion`; Suetonius `suetonius-caesars`; Plutarch `plutarch-lives` and `plutarch-moralia`; Cassius Dio `dio-roman-history`; Strabo `strabo-geography`; the Annals `tacitus-annals`; Wikipedia pages used by more than one part: `wiki-four-emperors`, `wiki-musonius`, `wiki-capitoline-temple`. Reuse these, do not make new keys for the same work.
