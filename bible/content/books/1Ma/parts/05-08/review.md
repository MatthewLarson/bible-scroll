# Hostile review: 1 Maccabees 5–8, part 05-08

**Scope.** I reviewed every file in this folder: plain.txt (213 verses), notes.json (121), variants.json (26), glosses.json (63), chapters.json (4 pages), topics.json (14 contributions) and sources.json. I checked them against:
- texts/orig/1Ma.json `grc` (Swete's Alexandrinus, compared in NFC), read verse by verse beside the KJV Apocrypha;
- Swete's apparatus in texts/src/1Ma.app.json, for every verse of chapters 5–8;
- the Vulgate and Douay in texts/src/1Ma.lat.json;
- parts 01-04, 09-11 and 12-16, book.json, content/terms.json, the site's Plain for the 66 books, and every `traditions` card on the site.

**Build.** `VERBOSE=1 node tools/build.js --check 1Ma/05-08` gives **0 errors, 0 warnings** (213 verses, 121 notes, 26 variants, 63 glosses, 4 chapter pages, 14 topic contributions).

**Quotations checked by script.**
- **Greek.** Every Greek string in notes.json, variants.json, chapters.json, topics.json and glosses.json is in Swete's text (as a whole-word match) or, for the apparatus quotations, letter for letter in the apparatus file. **I found no invented or garbled Greek quotation.** Three *reports* of what a manuscript reads are wrong, though the quoted Greek is right (finding 4).
- **Latin and Douay.** Every Latin and Douay quotation matches the file, under the Vulgate's own numbering (5:21 for "usque ad portam" is correctly flagged).
- **The 66 books.** Every quotation of a book the site has translated matches the site's Plain except one (finding 15). Checked: Genesis 11:4, 49:11; Exodus 11:3; Leviticus 25:4; Numbers 10:9, 20:17, 21:22, 31:49; Deuteronomy 2:28, 4:2, 7:5, 20:10, 20:13, 32:14; Joshua 23:13; Judges 3:11; 1 Samuel 5:12, 14:10, 17:51, 17:54, 31:10; 1 Kings 8:43, 12:10; 2 Kings 19:35; 2 Chronicles 16:7, 29:30; Ezra 6:10, 7:6; Esther 6:1; Psalms 74:18, 74:22, 79:2–3, 83:4, 146:3. Daniel, Isaiah and the New Testament are not yet on the site, so fresh wording there is allowed.

## Verdict

This is a careful, well-researched part. The Plain follows the Greek of Alexandrinus closely, verse by verse. Names, numbers and who does what are right almost everywhere. The eight departures the writer declared (5:3, 5:22, 5:43, 5:56, 6:43, 6:49, 7:25, 7:31) are all real, and Swete's apparatus supports each one. The Latin is quoted exactly. The traditions card is broad and unranked, and the `readers` lines are specific and rest on evidence.

The weaknesses:
- **One fact is turned upside down.** Josephus says Nicanor *beat* Judas at Capharsalama. The part says Josephus has Judas win, twice (finding 1).
- **Five more silent departures** from Alexandrinus, the clearest at 5:50 (finding 2).
- **A run of verses in 6:35–41** follows the RSV/NRSV's interpretive choices and sentence shapes (finding 3).
- **Three manuscript readings are misreported** (finding 4).
- **The Josephus remark on Eleazar is cited to the wrong work** (finding 5).
- **The little-horn card** has a Catholic row and an Orthodox row that give the same answer. The Orthodox row's key claim is not in its sources (finding 6).

The book is never called Scripture in the site's own voice.

**Counts:** 1 critical, 6 major, 14 minor.

## Findings

### 1. CRITICAL: N87 (7:32) and variants 7:32 `why`: Josephus's account inverted

- **N87:** "Others suppose that Judas's men lost and fled; Josephus says Judas won (*Antiquities* 12.405)."
- **Variant 7:32 why:** "Five hundred would suit a skirmish better, and Josephus also says Judas won."

Josephus says the opposite. *Antiquities* 12.405 (Whiston): Nicanor, "upon joining battle with him at a certain village called Capharsalama, he beat Judas, and forced him to fly to that citadel which was at Jerusalem" (checked at lexundria.com, J. AJ 12.405). So Josephus is the main *support* for the minority reading that N87 mentions: that Judas lost, and that the "they" who fled to the City of David were his men. That is the reverse of what the note reports. It is an invented fact attributed to a named source.

**Fix:**
- N87: "Josephus says that Nicanor won and that Judas fled to the citadel at Jerusalem (*Antiquities* 12.405), which is strange, since the Citadel was the king's. Most commentators keep the book's account, in which Nicanor's men fall and flee."
- Variant 7:32: drop "and Josephus also says Judas won". Either say nothing of Josephus, or say that Josephus has Judas defeated, which would suit the smaller number.

### 2. MAJOR: silent departures from Alexandrinus

Every departure from the base text needs a variant entry (the Tobit lesson). These have none:

- **5:50, "The fighting men took their positions".** Alexandrinus reads καὶ παρενέβαλον οἱ ἄνδρες **τῆς πόλεως**, "the men *of the town* camped", then "attacked the town". The apparatus has `50 πολεως] δυναμεως ℵV`. The Plain follows ℵV ("the men of the army"), as the KJV does ("the soldiers"). The choice is right, because A makes the townsmen attack their own town, but it is a departure in sense and needs an entry.
- **5:38, "All the nations around you have gathered to him".** A has πρὸς **αὐτοὺς**, "to them". "To him" is ℵ's reading (`αυτους] αυτον ℵ`) and the Latin's (*ad eum*). Add an entry, or write "to them".
- **7:31, "he went out to meet Judas in battle".** "In battle" is ℵV's addition (`Ιουδα] + εν πολεμω ℵV`); A has only εἰς συνάντησιν, "to meet". Drop "in battle" or add an entry.
- **Names that follow ℵ, V or the Latin rather than A, with no note or entry:**
  - 5:8 "Jazer" (A Ἰάζην; ℵV Ιαζηρ);
  - 5:26 "Chaspho … Maked" (A Κασφώρ, Μακέβ; ℵ* Κασφω, ℵV Μακεδ). At 5:36 A has Χασφώθ.
  - 7:19 "Beth-zaith" (A Βηζέθ; ℵ Βηθζαιθ; V Βαιθζηθ; Latin *Bethzecha*).

  These forms are what English Bibles print, which the rules allow. But the rules also ask for "the Greek in a note the first time where it differs". Add one `word` note per place (N16 can take Chaspho and Maked), giving A's spelling.
- **Trivial, but technically ℵ's or V's text:** 5:33 "They blew" (A ἐσάλπισεν, "he blew"; ℵV ἐσάλπισαν) and 5:68 "burned … with fire" (A κατέκαυσεν; ℵ adds πυρί). Either keep A's wording or mention both in one entry.

### 3. MAJOR: plain.txt 6:35–41 leans on the RSV/NRSV

Elsewhere I compared the Plain in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT and NETS, and found no dependence. This one passage is the exception. Several of its choices are the RSV/NRSV's own, where the Greek does not force them:
- **6:38.** "to harass the enemy while they were shielded by the phalanxes". This is the RSV/NRSV interpretation of the obscure κατασείοντες καὶ καταφρασσόμενοι, with the RSV/NRSV clause shape ("to harass the enemy while being themselves protected by the phalanxes"). N57 admits the Greek is uncertain and the KJV reads it quite differently ("giving them signs … being harnessed"). The Plain should not take over another version's resolution of that uncertainty along with its sentence.
- **6:40.** "advanced steadily and in good order" is the RSV/NRSV's exact phrase. ἀσφαλῶς is "securely, safely" (KJV "safely"); "steadily" is their choice.
- **6:36.** "Wherever it went, they went with it, and they never left it" matches the NRSV word for word. The Greek has οὐκ ἀφίσταντο ἐπ᾽ αὐτοῦ, "they did not stand away from it"; "never" is added.
- **6:35 and 6:37.** "five hundred picked horsemen were assigned to each beast", and "strapped on with harness … its Indian driver" (μηχαναῖς, "with devices"; "driver" is supplied). Each could arise independently, but together they continue the run.

**Fix:** rebuild 6:35–41 from a fresh literal working line. For example: 6:38 "…on the two wings of the army, to stir up the enemy, and they were fenced in among the phalanxes"; 6:40 "and they marched safely and in order"; 6:36 "they did not leave it". Keep N57 for the debate.

### 4. MAJOR: manuscript readings misreported (the quoted Greek is right, but what is said about it is not)

- **N56 (6:37), "All Swete's manuscripts and the KJV have it [thirty-two]".** False. The apparatus has `δυο] δυναμεως ℵ pr δυν. V`. Sinaiticus reads ἄνδρες δυνάμεως καὶ τριάκοντα, with no "two". Venetus reads "men of strength, two and thirty", which is the source of the KJV's "two and thirty *strong* men". ℵ's loss of δύο bears directly on the note's own argument that the number is corrupt. Correct the note and add a variant entry (A δύο; ℵ δυνάμεως; V δυνάμεως δύο, KJV).
- **N59 and variant 6:43 `p`, "*Auaran* in Sinaiticus and Venetus".** The apparatus has `Ελεαζαρος ο Αυραν (Αυαραν V) ℵV`. Sinaiticus reads **Auran**; only Venetus has Auaran. Josephus also has Αὐράν (*Antiquities* 12.373, "Eleazar, called Auran"). Say "Auran in Sinaiticus (and Josephus), Auaran in Venetus".
- **Variant 6:43 `why` is garbled.** "The sigma … probably comes from the article before it (*ho*, written twice: *hos Auaran*)". Writing ὁ twice gives no sigma. The likely explanation lies in ℵV's own Greek, Ἐλεάζαρος ὁ Αὐαράν: A has the short form Ἐλεαζάρ, and the final -ς of the long form has stuck to the surname (Ἐλεάζαρο**ς** ὁ Αυαραν → Ἐλεαζὰρ ὁ **Σ**αυαράν). Say that, labeled "probably", or drop the explanation.
- **N20 (5:35), "*Maphe* in Sinaiticus".** The apparatus has `35 Μαφα ℵ`, and the variant entry rightly says "Mapha". Correct the note.
- **Variant 5:56 `p`, "the other witnesses have Azariah".** Only Venetus does (`Ζαχαριας] Αζαριας V`). Sinaiticus agrees with A, as the entry's own second reading says. Write "Venetus, the Latin and the KJV have Azariah".
- **Variant 5:3 (Amalek).** "a corrector marked it for removal" tells only half the story. The note reads `Ισραηλ] Αμαληκ ℵ* Ισλ ℵ¹ (Αμ. uncis incl ℵ¹ improb ℵc.a c.b)`. ℵ¹ bracketed Amalek and wrote Israel, and the later correctors ℵc.a and ℵc.b rejected that change. The first reading's witness, "Sinaiticus as corrected", should say "as corrected by ℵ¹ (a correction later undone)".

### 5. MAJOR: N60 and ch. 6 deep "Eleazar": Josephus's remark cited to the wrong work

Both places say that Josephus remarked Eleazar "gained only a name" (N60), or "nothing but a reputation for bravery" (deep), and both cite *Antiquities* 12.373–374. That passage says nothing of the kind. 12.374 ends: "And thus did this man come to his end, when he had first courageously destroyed many of his enemies" (Whiston; checked at lexundria). The cool verdict is in the *Jewish War*. At 1.42–44 Josephus says that even had the rider been Antiochus, Eleazar "had performed nothing more by this bold stroke than that it might appear he chose to die" (checked: lexundria, J. BJ 1.44).

**Fix:** cite *Jewish War* 1.42–44 (source key `josephus`) for the remark, and say that the *Antiquities* praises him (12.373–374). The two accounts differ, which is itself worth a sentence.

### 6. MAJOR: chapters.json ch. 6 `traditions`, "Is Antiochus the little horn…?"

- **The Catholic and Orthodox rows give the same answer.** Catholic: "Both … he is a figure of a greater enemy"; Jerome reads Daniel 7 and 11:36–45 of the Antichrist. Orthodox: "Beyond him, to a final Antichrist … Antiochus foreshadows him." These are one position, drawn from the shared patristic tradition. Hippolytus was a Roman presbyter, so he is not a distinctly Orthodox witness. The Tobit and Judith lessons apply: "a row with nothing distinct to say is better dropped". **Fix:** merge them into one row ("Catholic and Orthodox"), or find an Orthodox source that says something distinct.
- **The Orthodox row's key sentence is unsourced.** Cyril, *Catechetical Lecture* 15, and Hippolytus, *On Christ and Antichrist*, both read Daniel 7's little horn of the Antichrist. As far as I know, neither discusses Antiochus there. "Antiochus foreshadows him" needs a source that says so, for example Hippolytus's *Commentary on Daniel* on chapter 8, or Theodoret on Daniel 8. Otherwise cut it.
- **The card overlaps with the chapter 1 card in part 01-04** ("abomination of desolation… Antiochus's altar, AD 70, or something still to come?"). The questions differ, but four of the six rows reuse that card's sources and positions: Jerome's type of the Antichrist, Smith rejecting Antiochus, and Scofield and Pentecost's "Antiochus is a preview". Add a pointer to the ch. 1 card in this card's question. Then keep only what is distinct here: the identity of the *little horn* of Daniel 7 and 8, and the passage at 11:36.
- **The Lutheran row is only half checked.** The 1530 preface's reading of the Daniel 7 horn as the Turk and the Daniel 8 horn as Antiochus is confirmed (Froom, *Prophetic Faith* 2, citing Luther's introduction to Daniel and his 1529 sermon). Froom also confirms that Luther applied the willful king of 11:36 to the pope. I could not confirm that this came only "in later editions". LW 35 prints the 1530 preface with the 1541 additions. Check it, or write "In the preface he applied the willful king of 11:36 to the papacy".
- **Sound rows.** Reformed (Calvin: Daniel 8 is Antiochus; from 11:36 the Roman Empire, not a single Antichrist); Adventist (Uriah Smith, Rome pagan and papal); Dispensationalist (Scofield, Pentecost). Their pointers to the Revelation 13 card are correct. A small precision: for Smith, the Daniel 7 horn is the papacy alone, and the Daniel 8 horn is Rome, pagan and papal.

### 7. MAJOR: ch. 5 `views.P`, Article VI made the Protestant position

"Protestant churches that list 1 Maccabees among the Apocrypha read it 'for example of life and instruction of manners' but not to set doctrine (Thirty-nine Articles, Article VI)." This is the Anglican position. The Westminster Confession (1.3) gives the Apocrypha no more authority than "other human writings". Luther's 1534 Bible calls them "useful and good to read". Presenting Article VI as the view of all Protestant churches is inaccurate. **Fix:** "Anglicans read it 'for example of life…' (Article VI); Lutherans call such books useful and good to read; the Reformed give them no more weight than other human writings (Westminster Confession 1.3). All of them are therefore free to judge Judas: …"

### 8. MINOR: N38 and N103 previews contradict their own notes

- **N38 `p`:** "the Greek and the KJV make it a city's name". The body (rightly) says the Greek of Alexandrinus is correct, and that the KJV and the *Latin* make Elymais a city. Fix: "the Latin and the KJV make it a city's name."
- **N103 `p`:** "the grandfather of the Seleucid kings in this book". The body says he is the *father* of Antiochus IV, who is in the book. Fix: "father of Antiochus IV and grandfather of the later kings".

### 9. MINOR: chapters.json ch. 7 `views.J`: Genesis Rabbah overstated, and a spelling mismatch

"Genesis Rabbah 65:22 tells how Yakim of Zeroroth *had his uncle … put to death*." The midrash tells that Yakim *mocked* Yose ben Yoezer as he was led out to be executed, and that Yakim then killed himself in remorse. It does not make him the one who had Yose killed. N71 states it correctly ("mocked his uncle on the way to execution"). The spelling also differs: N71 has "Tseroroth", views.J "Zeroroth". Use one form, and say "mocked" here.

### 10. MINOR: claims that need a source or a correction

- **N1 (5:1):** "Chapter 5 begins on the day after that feast." The text says only "when the nations … heard". Cut it, or write "soon after that feast".
- **N23 (5:43):** "as he later burns the temple of Dagon at Azotus (10:84, under Jonathan)". "He" is Judas, but it was Jonathan. Write "as Jonathan later burns…".
- **N51 (6:18):** "held out for twenty-five years". It was built in 167 and taken in 141, which is twenty-six years, or "about twenty-five".
- **Ch. 6 deep "Eleazar":** "Medieval art paired Eleazar with Christ." Name the work: the *Speculum humanae salvationis*, ch. 24, sets Eleazar killing the elephant as a type of the Crucifixion (checked: Warburg Institute Iconographic Database, the Lyon 1478 woodcut, scene 24d).
- **Ch. 8 deep "Alliances":** the Francis I sentence ("many … condemned … others defended it") has no source. The topic page it points to ("set out on the topic page") does not mention Francis I, and this part contributes nothing to `foreign-alliances` in topics.json. Either add a topic section with a source, or cut the sentence.
- **Ch. 5 setting 5:10–13 `readers` and the ch. 5 deep section "Rescue or conquest?":** *Antiquities* 13.254–258 covers Shechem, Gerizim and Idumea. The city of Samaria falls at 13.275–281, and Galilee (the Itureans, under Aristobulus I) at 13.318–319. Add those references, or drop Samaria and Galilee from the list.

### 11. MINOR: ch. 6 `views.O` and `views.C`

- **views.O:** "keeps the feast of the Maccabean martyrs on 1 August". True, but those martyrs are the seven brothers, their mother and the scribe Eleazar of *2 Maccabees* 6–7, not anyone in this book. As written, it suggests the feast honors 1 Maccabees' heroes. Add "(the martyrs of 2 Maccabees 6–7)", or drop it here.
- **views.C** ends "…(*On the Duties of the Clergy* 1.40.207),." Remove the stray comma.

### 12. MINOR: plain.txt 6:44, "He gave himself up"

In English, "gave himself up" usually means "surrendered", the opposite of what the verse says. The Greek ἔδωκεν ἑαυτόν is "he gave himself". Write "He gave himself to save his people…". N60, the topics and the ch. 6 deep section quote the verse, so change them too. The key verse of the chapter page is 6:44.

### 13. MINOR: plain.txt 6:49 "a sabbath year"

The site's Plain capitalizes Sabbath (Leviticus 25:4, "a Sabbath of complete rest"), and so does the rest of 1 Maccabees (1:43, 2:32–41, 9:34). N63 and the sabbath topic quote 6:49 with a lower-case s. Use "a Sabbath year".

### 14. MINOR: smaller translation points

- **8:7, "and hand over land".** διαστολήν is obscure; the KJV has "that which was agreed upon". "Hand over land" is one interpretation, and it also matches the RSV/NRSV's linking of this clause to the provinces in 8:8. Add a `deb` note, or render it neutrally ("and a set portion").
- **6:6, "had gone at the head of a strong force".** ἐν πρώτοις is "at first, in the first place" (KJV "went forth first"; Latin *in primis*), not "at the head". Write "Lysias had gone first with a strong force".
- **7:24, "on the men who had deserted".** The Greek has two groups, "on the men and on those who had deserted". The Plain merges them.
- **6:48, "camped against Judea".** εἰς τὴν Ἰουδαίαν is "in Judea". "Against" comes from the KJV.

### 15. MINOR: variant 7:16 `why`, and other variant details

- **7:16 why:** "(Asaph, 2 Chronicles 29:30, 'Asaph the seer')". The site's Plain has "Asaph the visionary". Use the site's wording.
- **7:16 witnesses:** ℵ and V read the singular τὸν λόγον ὅν ("the word which"), and ℵ* adds αὐτόν. The first reading lists "Sinaiticus, first hand" as agreeing with A's κατὰ τοὺς λόγους οὓς, which it does not. Note the singular, which is also the Latin's *verbum*.
- **5:41:** the entry credits the addition to ℵ and V but quotes only V's abbreviation (`+ κ. δ. αυτον V`). Quote ℵ's fuller form too: `+ και δυνησομεθα προς αυτο ℵ`.
- **6:20 and 6:24:** the `orig` keeps Swete's line-break bars inside words (συνηχθησα | αμα; περιεκα- θη | το), with no comment. Add "(line breaks as in Swete's note)".

### 16. MINOR: notes N45 and N113: "the Bible's"

"Sleepless kings mark turning points in the Bible's stories" and "'Yoke' is the Bible's picture of foreign rule". Both refer only to the 66 books, so neither calls 1 Maccabees Scripture. But N45 then sets Antiochus in that series ("Here the night of worry…"). Write "in the stories of the Hebrew Bible", to be safe.

### 17. MINOR: glosses.json: synonyms, not glosses

These replace a plain phrase with another plain phrase:
- 6:40 "in good order → in their ranks"
- 6:54 "each to his own place → each to his own home"
- 6:56 "take over the government → seize control of the kingdom"
- 7:4 "took his seat on the throne → began to reign"
- 7:6 "brought charges against → accused"
- 8:26 "as Rome has decided → as the Roman state has resolved"
- 8:30 "shall be binding → shall be valid and in force"
- 5:45 and 5:53

Cut them, or replace them with glosses on customs, places or measures.

### 18. MINOR: Swete typos in the digital text (for tools/works-texts.py, not for variants)

These are accent slips of the same kind as the ones already in `fixed` (15:13 σύν → σὺν):
- 5:29 νυκτὸς, → νυκτός,
- 5:33 τρισίν ἀρχαῖς → τρισὶν
- 5:55 κατά πρόσωπον → κατὰ
- 5:58 ἐπί Ἰαμνίαν → ἐπὶ
- 5:65 Ἠσαύ ἐν → Ἠσαὺ
- 6:16 βασιλεὺς, → βασιλεύς,
- 6:33 τήν ὁδὸν → τὴν
- 6:63 αὐτὸν, → αὐτόν,
- 8:13 οὓς δ᾽ ἃν → ἂν (rough breathing on the particle)

Possibly also 5:13 αἰχμαλωτίκασι (augment ᾐ-?); check it against Swete's page. No content file quotes any of these words, so nothing in this part changes.

### 19. MINOR: topics.json and chapter topic lists

Ch. 8 lists `kingship`, `covenant`, `church-and-state` and `foreign-alliances`, but topics.json gives no section for any of them. The notes point readers to the `foreign-alliances` page for the questions raised by 8:17–32. Add a short "1 Maccabees 8" section to foreign-alliances at least. The `hasmoneans` and `seleucids` topics exist only as proposals (content/proposals/works/topics), which the build accepts.

### 20. MINOR: settings coverage

The settings are good and the `readers` lines are specific: Hasmonean conquests, 2 Maccabees 11, the Septuagint psalm, Solomon's prayer. Two small gaps:
- the messenger's report to Antiochus (6:5–7) has no setting;
- the letter to Demetrius (8:31–32) is folded into the treaty card. Mention it in `what` (it is), and add in `why` that it is a separate letter quoted inside the treaty text.

## Checked and found sound

- **Translation.** Faithful verse by verse apart from the points above. Good choices:
  - 5:15 keeps the Greek's awkward "against them … to destroy us";
  - 5:46 "guarded the way in", with N25;
  - 5:62 "by whose hand Israel was given salvation";
  - 6:12 "for nothing" (διὰ κενῆς);
  - 6:46 keeps the vagueness of ὑπέθηκεν, with N61;
  - 7:17 is set as poetry and is close to the site's Psalm 79:2–3 without forcing it;
  - 7:41 keeps the Greek's unnamed God and king.
- **The eight declared departures** (5:3, 5:22, 5:43, 5:56, 6:43, 6:49, 7:25, 7:31) all match Swete's apparatus. All the other variant entries do too: 5:3 (Amalek), 5:35, 5:38, 5:41, 5:46, 5:67, 6:1, 6:6, 6:20, 6:24, 6:39, 6:53, 7:5, 7:9, 7:16, 7:32, 7:41 and 8:28 (`[sic]` correctly added at 6:49 ειοηνην and 8:28 πλοα).
- **The KJV readings** were checked against texts/en: "Gael" (5:3), "Savaran" (6:43), "their vessels being without victuals" (6:53), "high priest" (7:5, 7:9), "O Lord … the king of the Assyrians" (7:41) and "ships" (8:28).
- **The Latin readings** were checked against the file: *in Idumæa* (5:3), *usque ad portam* (Vulgate 5:21), *in Maspha*, *in circuitu nostro*, *post eum*, *in ingressu posita*, *dum volunt fortiter facere*, *civitatem Elymaidem*, *filius Saura*, *supposuit se ei*, *in civitate* (6:53), *qui volebat fieri sacerdos*, *constitutum* (7:18), *Sennacherib, Domine*, *ventilabant eos cornibus* and *naves*.
- **Status.** The book is never called Scripture in the site's voice. Church positions are attributed (N6, N31, ch. 8 views.P).
- **Cross-references, both ways.**
  - *Out:* Deuteronomy 7 and 20, Joshua 23:13, Numbers 10:9, 20–21 and 31:49, 1 Samuel 5:12, 14:10, 17 and 31:10, Genesis 11:4, Psalms 74, 79 and 83, 1 Kings 8 and 12, 2 Kings 19:35, Esther 9, Judges 3:11 and Daniel 7, 8 and 11.
  - *In:* the Psalm 79 notes and card (which cite 7:16–17), and the Leviticus 25, Exodus 23 and Nehemiah notes (6:49, 53).
  - *Pointers to cards:* Deuteronomy 20, the Joshua book card, Psalm 79 and Revelation 13 all exist. No card on the site repeats the little-horn question (but see finding 6 on the chapter 1 card).
- **Terms and names** match terms.json and the other parts: the Citadel, Friends of the King, "lawless" and "ungodly", Hasideans, "officials" for γραμματεῖς (*shoterim*), "the sanctuary" and "the holy place", Avaran (2:5), Gazara, Jamnia, Beth-zur, Azotus, and the Seleucid-year format.

## Claims verified (web search, 2026-10-24)

**Josephus** (Whiston, at lexundria.com)
- *Ant.* 12.327–353: the campaigns of 1 Maccabees 5 (Idumeans at Acrabattene 12.328, Ephron 12.346–347, Joseph and Azarias at Jamnia 12.350–351, the temple at Carnaim 12.344). Confirmed. 12.353 has Marissa and Ashdod, so N34 stands.
- *Ant.* 12.358–359: Josephus disputes Polybius ("the purposing to do a thing, but not actually doing it, is not worthy of punishment"). Confirmed; ch. 6 views.J and the 6:10–13 setting are accurate.
- *Ant.* 12.373–374: Eleazar ("called Auran") kills the elephant and dies "when he had first courageously destroyed many of his enemies". It does **not** contain the "gained only a name" remark, which is *War* 1.44 (finding 5).
- *Ant.* 12.375: Judas retires to Jerusalem. Confirmed (N62).
- *Ant.* 12.385–387: "the king", induced by Lysias, gave Alcimus the high priesthood. Confirmed (ch. 7 deep).
- *Ant.* 12.405: Nicanor "beat Judas". This **contradicts** N87 and variant 7:32 (finding 1).
- *Ant.* 12.378 and 13.234 (sabbatical years), 12.414–419 (the treaty), 13.254–258 and 13.395–397: consistent with what I know. I did not open them. On 13.254–258, see finding 10.

**Rabbinic and liturgical sources**
- Genesis Rabbah 65:22 (Yakim of Tseroroth and Yose ben Yoezer) and Bavli Taanit 18b (Nicanor's thumbs and big toes on Jerusalem's gates): consistent with what I know. See finding 9 on "had him put to death".
- Al ha-Nissim ("the strong into the hands of the weak, the many into the hands of the few"): consistent.

**Greek and Roman historians**
- Polybius 31.9 (Elymais, Artemis, madness, death at Tabae), 31.11–15 (Demetrius's escape with Polybius's help), 29.27 (Popilius Laenas and the circle) and 3.26 (treaties on bronze at the Capitol): consistent with what I know (Paton's numbering). Not opened.

**Christian sources**
- Luther, preface to Daniel: the Daniel 7 horn is the Turk and the Daniel 8 horn is Antiochus. Confirmed by Froom, *Prophetic Faith of Our Fathers* 2, who also confirms 11:36 applied to the pope. The dating ("later editions") is not confirmed (finding 6).
- Luther's 1533 preface to 1 Maccabees (useful for understanding Daniel 11): consistent with memory. A search found nothing decisive.
- Cyril, *Catechetical Lecture* 15 (Daniel 7 of the Antichrist), Hippolytus, *On Christ and Antichrist* (the ten kings), Scofield and Pentecost on Daniel 11:36, Uriah Smith on Daniel 8 (Rome, not Antiochus) and Calvin on 11:36 (the Roman Empire): consistent with what I know. See finding 6 on what Cyril and Hippolytus do not say.
- Basil, Letter 188, canon 13 (three years from communion): consistent.
- Roman lectionary, Saturday of week 33, Year I: 1 Maccabees 6:1–13, with Luke 20:27–40 on the resurrection. Consistent.
- Orthodox feast of the Holy Maccabees on 1 August: consistent (see finding 11).
- Medieval art pairing Eleazar with Christ: **confirmed**. *Speculum humanae salvationis* ch. 24 (Crucifixion), scene 24d, "Eleazar stabs the elephant into its belly and is crushed by it" (Warburg Institute Iconographic Database, Lyon 1478 woodcut).

**Other history**
- Francis I's Ottoman alliance (1536 onward): consistent; unsourced in the part (finding 10).
- Other claims consistent with what I know: BM 35603 (news of Antiochus IV's death in Kislev, year 148 SE); Gnaeus Octavius murdered at Laodicea in 162 (Appian, *Syrian Wars* 46); Antiochus III killed in 187 robbing a temple of Bel in Elymais; the elephant clause of Apamea (Polybius 21; Livy 38.38); Mummius and Corinth (146); Strabo citing Polybius on 40,000 miners; the 2015 Akra announcement; Josephus, *War* 2.409; Bavli Avodah Zarah 8b (twenty-six years); Old Greek Daniel 11:30, "Romans".

**Texts**
- KJV "Gael" (5:3) and the Latin *in civitate* (6:53): both confirmed in the texts files.
- The eight departures from Alexandrinus: all confirmed in Swete's apparatus.

## Fixes applied

All checked with `VERBOSE=1 node tools/build.js --check 1Ma/05-08`: 0 errors. The one warning is in book.json, at its 4:59 quotation, which this part does not own. Josephus was checked against Whiston at lexundria.com: *Antiquities* 12.373, 12.378, 12.386, 12.405, 12.414, 12.416, 13.234, 13.257, 13.318, 13.395 and 20.235, and *Jewish War* 1.43.

1. **Agreed.** N87 now says that Josephus has Nicanor beat Judas, who flees to the citadel (*Antiquities* 12.405), and that most commentators keep the book's account. The 7:32 variant `why` now says that Josephus's account would fit the smaller number; josephus-ant is added to its sources.
2. **Agreed.** New variant entries:
   - 5:8 Jazer (A Ἰάζην);
   - 5:26 Chaspho, Maked (A Κασφώρ, Μακέβ; A itself has Μακέδ at 5:36);
   - 5:38 "to him" (ℵ, Latin);
   - 5:50 "the fighting men" (ℵV);
   - 7:19 Beth-zaith (A Βηζέθ);
   - 7:31: "in battle" dropped from the Plain to follow A, with an entry for the ℵV addition.

   On the two trivial points, the Plain now follows A: 5:33 "He sounded the trumpets, and they cried out" and 5:68 without "with fire". Both are mentioned in N19 and N36.
3. **Agreed.** 6:35–41 rebuilt from a fresh literal line:
   - 6:36 "they did not stray from it";
   - 6:37 "girded on with gear… and each beast had its Indian";
   - 6:38 "stirring up the enemy and closing in among the phalanxes";
   - 6:39 "glittered… blazed";
   - 6:40 "came on securely, in ranks".

   N55–N58 and the glosses were re-anchored. N57 no longer claims that the Plain chose one resolution.
4. **Agreed, all six.**
   - N56 now reports ℵ δυνάμεως (without δύο) and V's reading, with a new 6:37 variant entry.
   - N59 and the 6:43 entry: Auran in ℵ (and Josephus), Auaran in V. The sigma explanation is replaced by the -ς of Ἐλεάζαρος, marked "probably".
   - N20: Mapha.
   - The 5:56 preview: "Venetus, the Latin and the KJV".
   - 5:3: Swete's full note is quoted, and the witness is now "as corrected by ℵ¹ (a correction later undone)".
5. **Agreed.** N60 and the ch. 6 deep section now say that the *Antiquities* praises Eleazar (12.373–374), while the *Jewish War* says he preferred glory to life (1.42–44). The josephus source key is added to N60.
6. **Agreed.**
   - The Orthodox row is dropped, since it had nothing distinct to say. Cyril's reading of Daniel 7 stays in ch. 6 views.O without the "foreshadows" claim.
   - The question now points to the 1 Maccabees 1 card and is narrowed to the horns of Daniel 7 and 8 and to Daniel 11:36.
   - Lutheran: "In the preface he applied the willful king of Daniel 11:36 to the papacy", with no date claim. luther-preface-1macc is removed from the row.
   - Adventist: Smith reads the Daniel 7 horn as the papacy, and the Daniel 8 horn as Rome, pagan and papal.
7. **Agreed.** Ch. 5 views.P now gives the Anglican (Article VI), Lutheran ("profitable and good to read") and Reformed (Westminster 1.3) positions separately.
8. **Agreed.** Both previews are fixed.
9. **Agreed.** Ch. 7 views.J: "mocked", and Tseroroth.
10. **Agreed.**
    - N1: "soon after that feast".
    - N23: "as Jonathan later burns…".
    - N51: "about twenty-five years".
    - Eleazar: the *Speculum humanae salvationis*, ch. 24, is named.
    - The Francis I sentence is cut, and a 1 Maccabees 8 section is added to foreign-alliances through topics.json.
    - The Josephus references for Samaria (13.275–281) and Iturea (13.318–319) are added in both places, with each conquest assigned to its ruler.
11. **Agreed.** views.O now says the 1 August feast honors the martyrs of 2 Maccabees 6–7. The stray comma in views.C is removed.
12. **Agreed.** 6:44 now reads "He gave himself…". Every quotation of it is updated.
13. **Agreed.** "Sabbath year" is capitalized, including in N63, its title and the sabbath topic.
14. **Agreed.**
    - 8:7 now reads "a set portion", with a new `deb` note on διαστολή.
    - 6:6: "had gone first".
    - 7:24: "on the men, and on those who had deserted" (anchor updated).
    - 6:48: "camped in Judea and at Mount Zion".
15. **Agreed.**
    - 7:16: "Asaph the visionary". ℵV's singular τὸν λόγον ὅν is now its own reading, and "Sinaiticus, first hand" is removed from A's reading.
    - 5:41: ℵ's fuller form is quoted.
    - 6:20 and 6:24: "(line breaks as in Swete's note)".
16. **Agreed.** N45 and N113 now say "the Hebrew Bible".
17. **Agreed.** The ten synonym glosses are cut: 5:45, 5:53, 6:38 wings, 6:40, 6:54, 6:56, 7:4, 7:6, 8:26 and 8:30. 6:37 now glosses "its Indian".
18. The coordinator has already done this. No content changed.
19. **Agreed.**
    - New topics.json sections for foreign-alliances (1 Maccabees 8) and kingship (8:14–16).
    - covenant and church-and-state are removed from ch. 8's topic list.
20. **Agreed.**
    - A new setting for the messenger's report (6:5–7).
    - The 8:23–32 `why` now says that 8:31–32 is a separate letter to Demetrius, quoted inside the treaty.

**Process note.** content/terms.json received two entries from this part before the lanes rule was announced: Ἁσιδαῖοι "Hasideans" and τὸ ἁγίασμα / τὰ ἅγια "the sanctuary / the holy place". They are left in place for the lead to keep or move.
