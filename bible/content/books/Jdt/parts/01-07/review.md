# Hostile review: Judith 1–7, part 01-07

Reviewer's scope: plain.txt (146 verses), notes.json (127), variants.json (36), glosses.json (50), chapters.json (7 pages), topics.json (18 contributions) and sources.json in this folder. I checked them against texts/orig/Jdt.json (`grc`, Swete's Vaticanus), Swete's apparatus (texts/src/Jdt.app.json), the Clementine Vulgate and Douay (texts/src/Jdt.lat.json), the KJV Apocrypha (texts/en/Jdt.json), the site's Plain English Translation of the 66 books where written, part 08-16 and book.json. `node tools/build.js --check Jdt/01-07` gives **0 errors, 0 warnings**.

By script I compared every Greek string in notes.json and variants.json (`orig`, `b`, `why`, `p`) with `grc` of the same verse and with the apparatus. **Every Greek reading is real; I found no invented reading.** The mismatches are all apparatus line breaks, abbreviations or Swete's unaccented forms (for example Χε. βρων printed as Χεβρων at 2:24, συ|μικτος at 1:16). Every Vulgate and Douay quotation matches texts/src/Jdt.lat.json (1:5, 2:1, 4:5, 4:11, 5:9–15, 6:20–21, 7:2, 7:11, 7:24). I also checked every quotation of a written book of the 66 against the site's Plain English Translation (finding 13 lists the few exceptions).

I used web search for: the Catholic Encyclopedia article "Judith" (Vigouroux, Calmet, Conder); Diodorus 16.47 (Thayer's text) and the Orophernes/Holophernes evidence (Livius); the PBC reply of 23 June 1905; Torrey's 1899 JAOS article; Aqraba/Akrabeta; the LXX of Exodus 1:10 and 1:14; Josephus Ant. 13.254–262; Genesis Rabbah 38:13; m. Yadayim 4:4; the medieval Hebrew Hanukkah midrash; Enslin on the original language. I could not open Moore, Gera, Grintz, Otzen, Enslin–Zeitlin or Hanhart's Göttingen edition. Points that rest on them are marked.

## Verdict

This is careful work. The Plain English Translation is built from the Greek, verse by verse, and reads as fresh English. It is not a smoothed RSV or NRSV. Notes and variants quote the Greek and Latin correctly, and the large historical claims are fair and mostly right. These include Nebuchadnezzar and Nineveh, Phraortes in Herodotus, Holophernes and Bagoas, earth and water, the gerousia, and Hyrcanus in Samaria and Idumea. The catechism, Talmud and Mishnah references all check out. The book is never called Scripture in the site's own voice.

Four of the five announced departures from Vaticanus are justified and correctly reported: 2:5, 2:7, 2:28 and 7:3. The fifth, 1:16, rightly takes the longer text of Alexandrinus and Sinaiticus. But it also adds "to Nineveh" from Alexandrinus alone, with no argument, and its note implies that Rahlfs prints it.

The serious problems are these:
- **6:1–2.** The Plain English Translation invents a line of speech ("And this goes for all you Moabites") to save a phrase the writer believes is misplaced. Swete's apparatus also shows that phrase was written by a corrector over an erasure.
- **7:2.** There is one silent departure from Vaticanus, and per the writer's own Lessons it needs an entry.
- **Seven variant entries.** They credit "the Greek text behind the KJV" with readings no one has shown in any Greek manuscript.
- **Readers lines.** All 14 `readers` lines open with the same stock line and state a debated date and audience as settled, which is the very fault the Tobit and 1 Enoch reviews flagged.

There are also smaller errors in variant reasoning and in a source description.

Counts: **critical 0, major 5, minor 12.**

## Findings

### 1. MAJOR: plain.txt 6:2 and variants 6:1, 6:2: an invented line of speech, built on a corrector's text

**What the Plain English Translation says.** "Who are you, Achior? And this goes for all you Moabites, and you hirelings of Ephraim."

**What Vaticanus has.** Καὶ τίς εἶ σὺ Ἀχιὼρ καὶ πρὸς πάντας υἱοὺς Μωὰβ καὶ οἱ μισθωτοὶ Ἐφράιμ.

**What the variant admits.** The second 6:2 variant's own `why` says the phrase "is a phrase for the narrator, not for Holofernes; the Plain English Translation turns it into speech." So the Plain English Translation translates words it believes are displaced, and it adds "this goes for", which is in no witness.

**The apparatus is worse than the entry says.** Swete has "Μωαβ και sup ras Bᵃᵇ". The words "Moab and" in 6:2 stand *on an erasure, written by the corrector Bᵃᵇ*. So the reading the Plain English Translation follows "as printed by Swete" is not Vaticanus as first written. It is a corrector's text, and we cannot see what the first hand had there. The 6:1 entry's `b` softens this to "stand on an erasure made by a corrector", and the 6:2 entry labels the reading simply "Codex Vaticanus (B, 300s AD)".

Elsewhere (2:5, 2:7, 2:28, 6:6) the writer is careful to separate B* from its correctors. Here the same care would show that the only witness with the phrase inside the speech is a corrector of B. Alexandrinus puts it in verse 1, and it is the order Rahlfs and Hanhart print, as far as I recall (I could not check Hanhart).

**A second slip.** In the 6:1 entry the Alexandrinus reading is placed wrongly. A has the words after ἀλλοφύλων ("…in front of the whole crowd of the foreigners and to all the sons of Moab"), not after "Achior". Its `plain` ("spoke to Achior and to all the Moabites") is the KJV's rearrangement, not A's order.

**Fix.**
- Follow Alexandrinus in both verses and say so in both entries, as a sixth departure. Label the Vaticanus reading "a corrector of Vaticanus (Bᵃᵇ), written over an erasure".
- Or keep B, but translate only what is there ("…and to all the sons of Moab…", marked as an awkward reading). Do not add "this goes for".
- Either way, fix the A reading's `plain` to A's own order.

### 2. MAJOR: chapters.json, every `readers` line: one stock opening, a debated date and audience stated as settled

**The stock line.** All 14 `readers` lines (1:12, 2:5–13, 3:2–4, 4:6–7, 4:9–15, 5:3–4, 5:5–21, 5:22–24, 6:2–9, 6:19, 7:4, 7:9–15, 7:23–28, 7:30–31) open: "For Jews in Judea under the Hasmonean high priests and kings, about 150–100 BC…".

**Problems.**
- **The Lessons ban this.** agent-writer-works.md says `readers` must name the first readers "by evidence…, not one stock line".
- **No evidence names any first reader.** No copy was found at Qumran, as book.json itself says. No Jewish writer quotes the book before the Middle Ages. The first sure Christian use is 1 Clement 55 (about AD 96). The audience is an inference from the book's contents, and book.json `audience` rightly says "Most scholars think…". The cards drop the "most scholars think".
- **The date is debated.** Grintz argued for the Persian period, and some scholars propose a Maccabean-era date in the 160s. Only one card (4:6–7) gives `views`, and even it says "Most see…" while the line above it states the Hasmonean date flatly.
- **"Kings" is anachronistic for most of the range.** No Hasmonean took the title of king before Aristobulus I (104 BC) or Alexander Jannaeus. For 150–104 BC the rulers were high priests and ethnarchs.
- **The Greek readers are left out.** If the Hebrew original was read in Judea, the Greek translation (the text translated here) was read by Greek-speaking Jews, probably in the diaspora, and then by Christians.

**Fix.** Write one honest opening, for example: "If, as most scholars think, the book was written in Judea in the late 100s BC under the Hasmonean high priests (kings from 104 BC), its first hearers were…; no early copy or quotation tells us who read it before 1 Clement (about AD 96)." Then vary the rest of each card as now. Give the date debate in `views` on at least the 1:12 and 5:5–21 cards.

### 3. MAJOR: plain.txt 7:2: a silent departure from Vaticanus

**What the Plain English Translation says.** "not counting the baggage and the men who went with it on foot".

**What Vaticanus has.** χωρὶς τῆς ἀποσκευῆς τῶν ἀνδρῶν οἳ ἦσαν πεζοὶ ἐν αὐτοῖς, "apart from the baggage *of* the men who were on foot among them".

**Where the "and" comes from.** It is Sinaiticus and Alexandrinus: Swete, "των ανδρων] pr και ℵΑ". The KJV follows it ("beside the baggage, and other men that were afoot"). So the brief's list of five departures is incomplete.

**Fix.** Add a variant entry, B "the baggage of the men on foot" against ℵA "the baggage and the men on foot", saying which is followed and why. Or follow B.

A smaller smoothing in the same class: at 4:6, "who was in Jerusalem *in those days*" follows the corrector ℵc.a (ἐν ταῖς ἡμέραις ἐκείναις). B has only ἐν ταῖς ἡμέραις. Either note it or render "who was then in Jerusalem".

### 4. MAJOR: variants 2:23, 2:24, 3:9, 4:4, 6:4, 7:14, 7:27: "The Greek text behind the KJV" is an unsupported witness

**What the entries do.** Each of these entries labels a KJV reading "The Greek text behind the KJV (1611); Swete's apparatus does not report it". Some go further:
- **6:4.** "a Greek verb like *katapatēsomen*, which some later manuscripts have".
- **4:4.** "reflects a Greek word like *kōmas*".
- **2:23.** "likely a slip in the Greek it followed".

**Why the label is unsupported.** The 1611 translators worked from the printed Greek (Aldine, Complutensian, Sixtine) and also used the Latin, the Geneva Bible and Junius. No one has shown that any of these seven readings stands in a Greek manuscript. "Fire" at 7:14 and "Israel" at 2:23 may well come from a printed edition or a Latin source. The site's rule is never to name a witness you cannot check. "Which some later manuscripts have" (6:4) is a manuscript claim from memory, unmarked.

**Should the entries be dropped?** No. STYLE.md requires an entry wherever the KJV reads differently, and the Lessons repeat it. Keep them but:
- Relabel the witness "King James Version (1611); its source is not identified, and Swete's apparatus has no such Greek".
- Leave `orig` empty, or write "(English only)", instead of "(Greek not given in Swete's apparatus)", which looks like a Greek field.
- Drop or mark as a guess every claim about the Greek behind it. In particular, drop "some later manuscripts have" (6:4) unless it can be cited from Hanhart's apparatus.

I checked all seven KJV readings against texts/en/Jdt.json: Israel (2:23), Arbonai (2:24), "near unto Judea" (3:9), "the villages" (4:4), "with them we will tread them under foot" (6:4), "consumed with fire" (7:14) and "than to die for thirst" (7:27). The English is reported correctly.

### 5. MAJOR: plain.txt 1:16 and its variant: "to Nineveh" from Alexandrinus alone, with no argument

The departure itself is right. The long text of ℵA ("…και πας ο συμμικτος αυτου πληθος ανδρων πολεμιστων πολυ σφοδρα· και ην εκει ραθυμων και ευωχουμενος") explains the 120 days, and the eye-skip from αὐτός to αὐτός is a sound explanation.

**The problem: "to Nineveh".** The Plain English Translation also adds "to Nineveh", which stands in Alexandrinus alone ("εις Νινευη αυτος A"). The entry admits this ("The words 'to Nineveh' stand only in Alexandrinus; Sinaiticus lacks them"), but the `why` gives no reason to follow the single witness against B and ℵ together. The `b` then says "The longer reading is printed by Rahlfs and by most modern editions", which a reader will take to include "to Nineveh". As far as I recall, Rahlfs prints the long text *without* εἰς Νινευή. The KJV has "to Nineve".

**Smaller faults.**
- **The `orig` is shortened silently.** It drops Swete's parenthetical corrector readings "(πολυν A¹⁽ᵛⁱᵈ⁾)" and "(ραμυθων A*)" without an ellipsis.

**Fix.** Either drop "to Nineveh" and follow ℵ's form of the long text, or argue for A in the `why` (sense: "went back with them" needs a place) and say that Rahlfs lacks it. Mark the shortening of the `orig` with "…".

### 6. MINOR: variants: reasoning that contradicts the Plain English Translation or the evidence

- **4:1 (temples or territories).** The `why` says "'Temples' fits 3:8, where Holofernes destroys the shrines of the nations." But the Plain English Translation of 3:8 says "laid waste all their *territory*" (ὅρια), and N41 explains why the Plain English Translation keeps "territory". Rephrase: "fits 3:8, where he destroys the gods of the land (and where many scholars read 'shrines' for 'territory', see the note)".
- **5:11 (labor or clay).** "The two Greek words differ by one letter" is false. πόνῳ and πηλῷ differ in two letters (ο/η and ν/λ). The entry also leaves out that the Vulgate 5:10 has *in luto et latere*, "in clay and brick". That is the reading of Sinaiticus, in a version made from a different Semitic copy, and it weakens "'Labor' is attested by more witnesses". Correct both.
- **7:14 (hunger or fire).** The `why` explains the KJV's "fire" by *limos* being "close to words for 'plague'" (*loimos*). Plague is not fire, so the explanation does not touch the reading it is meant to explain. Drop it, or say the KJV's source is unknown (finding 4).
- **2:5 (twelve thousand).** The label "Codex Sinaiticus as corrected (ℵc.a)" understates the case. Swete has "χειλιαδες ℵ* (-δας ℵc.ᵃ)": the first hand of Sinaiticus already had "thousands", and the corrector only fixed the ending. The reason "perhaps from the 120,000 earlier in the verse" is weak, since that figure uses χιλιάδας. The likelier source is 2:15, μυριάδας δέκα δύο (120,000 picked men).
- **7:2 (army size).** The garbled ℵ note is handled honestly. Fine.

### 7. MINOR: sources.json `diodorus-library-16-31` and N22: Holophernes is not in Diodorus book 16

The key describes "book 16 (the Persian campaigns of Artaxerxes III, with Holophernes and Bagoas)".

**What Diodorus has.**
- **16.47.** It names Bagoas (47.3–4, "whom the King trusted most") but not Holophernes. I checked Thayer's text.
- **31.19.** Holophernes, brother of Ariarathes of Cappadocia, appears only here.

**The date.** N22 dates the campaign "about 350 BC". The successful reconquest of Egypt with Bagoas and Mentor is usually dated 343 BC. Diodorus's own chronology puts it at 351/0, which may be where "about 350" comes from. The persia topic says "the 350s BC".

**Fix.**
- Correct the key: "book 16 (Artaxerxes III's Egyptian campaign, with Bagoas) and book 31 (Holophernes of Cappadocia, who served in it)".
- Give 343 BC, or "the 340s", in N22 and the persia topic.

### 8. MINOR: N3 and ch. 1 `deep`: "Arphaxad = Phraortes (Calmet)" is doubtful and clashes with N1

**The claims.**
- **N3.** It says "Calmet identified Arphaxad with Phraortes".
- **Ch. 1 deep.** It credits the Phraortes identification to Calmet.
- **N1.** It says Calmet "kept the real Nebuchadnezzar and blamed copyists".

**What the Catholic Encyclopedia says.** I confirmed the N1 claim there: "Calmet insists that the Biblical Nabuchodonosor is meant". But the same article credits the Phraortes identification to *Vigouroux*, who pairs it with Ashurbanipal, "the contemporary of Phraortes". The two Calmet claims also cannot both stand. Phraortes died in the 650s, decades before Nebuchadnezzar II.

**Fix.** Credit Phraortes to Vigouroux as the CE reports him, or cite where Calmet says it.

### 9. MINOR: plain.txt: small additions, softenings and ambiguities

- **5:18 "they were badly beaten in many wars".** The Greek is ἐξωλεθρεύθησαν ἐν πολλοῖς πολέμοις ἐπὶ πολὺ σφόδρα, "they were utterly destroyed in many wars, very greatly". "Badly beaten" softens the book's own verb for annihilation (the same verb as 1:15; 2:3; 6:2; 6:8). Use "they were destroyed, again and again, in many wars".
- **4:8.** The Plain English Translation reads "The Israelites did as Joakim the high priest had ordered them, and the council of elders…". It reads as if the council also obeyed. The Greek makes the council the second subject of συνέταξεν. Use "…as Joakim the high priest and the council of elders… had ordered them".
- **4:14 "wore sackcloth around their waists. So they offered…".** The Greek has a participle, σάκκους περιεζωσμένοι … προσέφερον, "with sackcloth around their waists they offered". "So" adds a cause. Use "and in sackcloth they offered…".
- **1:3 "he laid their foundations".** The Greek τὸ πλάτος αὐτῆς ἐθεμελίωσεν has a feminine singular pronoun: "its" (the city's or the gate's), not the towers'. Use "its foundations", or note the choice.
- **2:24 and 3:6 "high walled towns".** The Greek τὰς πόλεις τὰς ὑψηλάς is "the high towns". "Walled" is added in both places. Use "hilltop towns" or "high towns".
- **6:5 "this breed that came out of Egypt".** γένος is "race, people". "Breed" sharpens the sneer beyond the Greek. Use "this people".
- **θεράπων is rendered three ways in this part:** "officials" (2:2), "servants" (6:6) and "officers" (7:16). Part 08-16 has "servants" throughout. Unify on "servants" or "attendants".
- **2:2.** N20 calls the clause κακίαν τῆς γῆς "obscure" and gives only the Plain English Translation's reading. The common alternative, that the king recounted the land's *wickedness*, its disobedience (compare 2:3; 2:6), should be named in the note.

### 10. MINOR: N7 (1:6 "Rallied to whom?"): the decisive witness is left out

Swete has "προς αυτον] εις πολεμον ℵ* προς αυτον εις πολ. ℵc.a". Sinaiticus as first written says these eastern peoples came "to war". The corrector's text, "came to meet him in battle", supports the reading the note mentions as the minority one.

**Fix.** Add this to N7, or add a variant entry, since it changes who fought on whose side.

### 11. MINOR: settings: gaps and one unsupported phrase

- **Gaps.** There is no card for Nebuchadnezzar's summons to the western nations (1:7–10), a royal message. There is none for the council's decision (2:1–3). There is none for Achior's report to Bethulia's assembly and Uzziah's question (6:16–17). The 6:2–9 card is the only one covering Holofernes' orders (6:10; 7:1).
- **6:2–9 `to`.** It names "the Moabites and the hirelings of the west". The Greek says "hirelings of Ephraim", and N91 discusses the phrase. "Of the west" is not in the text. Use "…and the 'hirelings of Ephraim'".

### 12. MINOR: chapters.json views: sourcing and fairness

- **Ch. 1 `P`.** It reads "Reformed writers took the errors as proof that it is not inspired (Westminster Confession 1.3)". WCF 1.3 only declares the Apocrypha "not being of divine inspiration". It gives no argument from errors. Cite a Reformed writer who argues from the errors, or split the sentence: "Reformed churches deny it inspiration (WCF 1.3), and writers such as … point to these errors."
- **Ch. 1 `O`.** "No Orthodox council has ruled on the history of chapter 1" and the other Orthodox rows (ch. 2, 3, 5, 7) are unsourced generalities. They are fair, but the Orthodox answer to the historical problem is never stated with a source. Either cite an Orthodox source (the Synod of Jerusalem of 1672 on the canon, or an Orthodox study Bible or commentary on Judith's genre), or say plainly that no Orthodox treatment was found.
- **Ch. 3 `H`.** "No Assyrian or Babylonian king demanded that conquered peoples give up their own gods" is stated absolutely. It is the majority view (Cogan), but Assyrian imposition of Ashur's cult in provinces is debated. Use "No Assyrian or Babylonian king is known to have demanded…".
- **N4.** The minority view that Judith was written in Greek is given without names. Name its holders (H. Engel; J. Corley; J. Joosten argued for a Greek composition by a Jew trained in Hebrew style), as the majority is named. Enslin does support a Hebrew original, as N4 says. I could not check Zeitlin's or Gera's exact position, so mark them "as reported" if they are not checked.
- **Ch. 1 `J`.** The claim about medieval Hebrew retellings setting the siege at Jerusalem is partly verified. The 11th-century *Midrash le-Ḥanukkah* (Posen Library, vol. 3) has "the king of the Greeks" besiege Jerusalem. "Jellinek's collection prints several" is plausible (Jellinek, *Bet ha-Midrasch* 1–2). Give the volume and title so a reader can find it.

### 13. MINOR: quotations: of Judith 8–16 and of the 66

- **N88.** It says "Judith's song will say the Lord 'crushes wars' (16:2)". Part 08-16's Plain English Translation of 16:2 reads "a God who *shatters* wars". Quote it as written.
- **N40.** It says "Israel's women will crown Judith with garlands and dance before her (15:12–13)". In the Greek and in part 08-16's Plain English Translation, the women dance; Judith and her companions crown *themselves* with olive leaves, and she leads the dance. Restate.
- **N107.** "God 'looks on the lowliness' of his servants (1 Samuel 1:11; Luke 1:48)" is quoted as a phrase, but the site's Plain English Translation of 1 Samuel 1:11 says "really look at the misery of your servant". Quote the Plain English Translation, or drop the quotation marks and say the Septuagint's word is *tapeinōsis*.
- **N85.** The LXX of Deuteronomy 28:25 is καὶ ἔσῃ ἐν διασπορᾷ ἐν πάσαις ταῖς βασιλείαις, "you will be *in dispersion*", not "a diaspora". This is a small point.
- **Numbers 23:19.** N29, N92 and N97 quote different lines of it. All are in the site's Plain English Translation, so this is only a reminder.
- All other quotations of written books match the site's Plain English Translation, including multi-reference ones the build does not check: Joshua 3:11, Deuteronomy 7:16, 2 Kings 18:19, 2 Kings 18:35, Deuteronomy 32:39, Exodus 6:9 and Nehemiah 12:26.

### 14. MINOR: notes: small factual slips

- **N10.** It says "Esdraēlōn (3:9; 7:3)". 7:3 has Ἐσδρηλών, a fourth spelling. Correct the list: Ἐσρήμ (1:8), Ἐσδραηλών (3:9), Ἐσρηλών (4:6), Ἐσδρηλών (7:3).
- **N19.** The examples given for the LXX "the word of the LORD came" (Jeremiah 1:2; Hosea 1:1) use ἐγενήθη, not ἐγένετο. Cite Jeremiah 1:4 or Jonah 1:1 (Καὶ ἐγένετο λόγος κυρίου πρὸς Ιωναν).
- **N57.** "For the people of the land, sackcloth was…" is an odd phrase that reads like a slip. Say "In Israel, sackcloth was…".
- **N113, ch. 7 settings and the edom topic.** They give "about 125 BC" for Hyrcanus's conquest of Idumea, and N50 dates the destruction of the Gerizim temple implicitly. Both dates are debated: Josephus suggests the 120s, and excavations at Gerizim and Marisa point to about 112–111 BC. Use "late 100s BC" or note the debate.

### 15. MINOR: glosses.json

- **4:7.** "Room for two men at most" is glossed "single file, almost". Two abreast is not single file, and "almost" is confusing. Use "barely two abreast".
- **5:3.** "You sons of Canaan" is glossed "you people of this land". That erases the insult N66 explains. Use "you Canaanites".

### 16. MINOR: dependence on copyrighted translations (checked in my head)

I compared the Plain English Translation against the RSV, NRSV and NABRE as I recall them at 1:1–16, 2:1–13, 3:2–8, 4:3–15, 5:5–24, 6:2–9, 6:19, 7:4, 7:9–15, 7:23–32. Most shared shapes are forced by the Greek, for example "lick (clean) the face of the whole land" (7:4) and "five more days" (7:30). Two phrases may be the NRSV's, though I am not certain of its wording:
- **1:6 "rallied to him".** The Greek only says "came to meet him". "Joined him" or "came to him" would be closer, and would also fit finding 10.
- **5:10 "as long as they had food".** The Greek μέχρις οὗ διετράφησαν means "while they were kept fed". "As long as they could live there" or "while they found food" would avoid the risk.

I found no sentence copied from the NJB, CEB, GNT, NETS or Moore.

### 17. MINOR: cross-references in both directions

The links from Judith to the 66 are rich. Achior's speech (5:5–21) is traced line by line in the ch. 5 `deep`, and every step is linked.

The return links are missing. I searched the notes and chapters of the written books. Only Genesis (Judith 9:2–4), Numbers (11:13), Judges (13:18) and 2 Kings (4:6; 8:2–3) mention Judith, and none of them points to this part's main echoes:
- Joshua 24:2 and Genesis 11:31 (5:7–8, Abraham leaves the gods)
- Exodus 1:10 (5:11 κατεσοφίσαντο; also Acts 7:19)
- Exodus 17:7 and Deuteronomy 6:16 (7:30; 8:12)
- Numbers 22:4–5 (7:4; 6:5)
- Deuteronomy 23:3 (6:16; 14:10)
- 2 Kings 18:19, 35 (2:5; 6:2)
- Nehemiah 12:10, 26 (Joakim, 4:6)
- Judges 7:12 (2:20)

Pass these to the coordinator for the writers of those books.

### Checked and found sound

- **Translation.** Every verse of 1:1–7:32 matches Vaticanus apart from the items in findings 1, 3, 5 and 9. Names follow English usage consistently (Holofernes, Achior, Uzziah, Joakim, Bethulia, Esdraelon). The key terms agree with part 08-16: "commander in chief" for ἀρχιστράτηγος, "the Lord Almighty" for Παντοκράτωρ, "the council of elders" for γερουσία.
- **The four other departures.**
  - 2:5 (12,000: Bᵃᵇ A ℵ against B*);
  - 2:7 ("tell them": Bᵃᵇ ℵ A);
  - 2:28 (Sur: Bᵃᵇ ℵ A against B*'s Assur);
  - 7:3 ("from Bethulia": ℵA ἀπό).

  Each is justified, and each entry reports Swete correctly.
- **The other variants.** These match the apparatus: 1:6, 1:7, 1:11, 1:12, 2:1 (Vulgate *tertiodecimo*; *duodecimo* at Vulgate 1:5), 2:21, 2:23 (Chaldeans/Chelleans, and Μαηκ ℵ*), 2:28 Gaza, 3:3 (οπος for τόπος is a sound guess), 4:6, 4:9, 4:14, 5:2, 6:4 (twice), 6:6, 6:15, 7:2 (Vulgate), 7:20 (Vulgate *per dies viginti*, its 7:11), 7:23 and 7:28 (ℵ om μή). The 16:4 and 2:25 ὄρη/ὅρια parallels cited at 6:4 are real.
- **Web-verified.**
  - Catholic Encyclopedia "Judith": Vigouroux, Ashurbanipal and Manasseh; Calmet's real Nebuchadnezzar; Conder's Mithilia; Joakim dated to the Persian period.
  - Diodorus 16.47 (Bagoas) and the Holophernes of Cappadocia story (see finding 7).
  - PBC reply of 23 June 1905: "proved by solid arguments that the sacred Writer intended not to recount true history". It is summarized correctly in the ch. 1 deep.
  - Torrey, "The Site of 'Bethulia'", JAOS 20 (1899) 160–172, for Shechem.
  - Aqraba/Akrabeta, about 8 miles southeast of Nablus, for Egrebel.
  - LXX Exodus 1:10 κατασοφισώμεθα and 1:14 τῷ πηλῷ καὶ τῇ πλινθείᾳ.
  - Josephus Ant. 13.254–258 (Shechem, Gerizim, the Idumeans circumcised) and 13.275–281 (siege of Samaria).
  - Genesis Rabbah 38:13 (Terah's idol shop, Nimrod's furnace).
  - m. Yadayim 4:4 (Judah the Ammonite).
- **Verified from my own knowledge, and sound.**
  - LXX Exodus 6:9 ἀπὸ τῆς ὀλιγοψυχίας.
  - Herodotus 1.96–130, 1.98 (Deioces and the seven circles), 1.102 (Phraortes), 6.48, 7.32, 7.131–133 (earth and water), 7.176.
  - Jubilees 12 (Abram burns the house of idols).
  - b. Sanhedrin 97b ("calculating the end").
  - m. Taanit 1–2.
  - CCC 1434, 2112–2113 (including martyrs refusing "even to simulate such worship"), 2119.
  - Dei Verbum 12; Divino Afflante Spiritu on literary forms.
  - Article VI; the Westminster Directory on public fasts.
  - Josephus Ant. 12.138–144 (gerousia).
  - Origen, Letter to Africanus 13.
  - Jerome's preface; 1 Maccabees 4:15, 5:58, 6:1–4, 10:84, 12:6, 14:41–47.
  - 2 Maccabees 10:25–26, 12:8–9, 12:29–31.
  - Jeremiah 52:29; 2 Kings 25:8.
  - Orophernes of Cappadocia (about 158 BC, with Seleucid support).
- **Not present.** The brief asked me to check a Babylonian Chronicle date for 597 BC. No note, chapter, variant or topic in this part, or anywhere in Jdt, mentions 597 BC or the Babylonian Chronicle, so there is nothing to check.
- **Moore (31 notes).** Apart from findings 8 and 12, the claims credited to Moore are standard and plausible:
  - the Choaspes guess (N8);
  - Ocina as Akko (N37);
  - Abrona as Hebrew *'eber* (V 2:24);
  - Ibleam and Jokneam (N110);
  - the Hebrew pronoun at 7:10 (N114);
  - the readings of 6:4 and 7:28.

  I could not check them in Moore himself.
- **Historical-problem notes.** N1, N3, N48, N84, ch. 1 and ch. 4 `deep`: fair to the critical view, to older Catholic defenders and to Catholic teaching on genre. Nothing ranks churches; the Orthodox side is thin (finding 12).
- **Status.** Judith is never called Scripture in the site's voice; each such statement is attributed ("Catholic and Orthodox readers, who count Judith as Scripture").
- **Consistency.** The part is consistent with book.json (lenses C O P H J; date and audience; "no copy at Qumran"), and with part 08-16 except for finding 13. There is no `traditions` card in this part, so there is no duplicate of book.json's historicity card. All 18 topic ids exist.
- **Mechanics.** The build gives 0 errors and 0 warnings.

Counts: critical 0, major 5 (findings 1–5), minor 12 (findings 6–17).

## Fixes applied

1. Agreed. The Plain English Translation now follows Alexandrinus in 6:1–2 (a sixth departure): 6:1 "…in front of the whole crowd of foreigners, and to all the Moabites:", 6:2 "Who are you, Achior, and you hirelings of Ephraim, to play the prophet…". "This goes for" is gone. Both variants were rewritten: A's reading is given in A's own order (after ἀλλοφύλων), and the Vaticanus reading is labeled as having "Moab and" written by Bᵃᵇ over an erasure. The 6:1 and 6:2 notes were adjusted.
2. Agreed. All 14 `readers` lines were rewritten and no longer share an opening. The 1:12 card says no early copy or quotation names the readers (first sure use 1 Clement 55), gives the Hasmonean date as the majority view, says kings only from 104 BC, and names the Greek-reading audience. The 1:12 and 5:5–21 cards carry the date debate in `views` (Hasmonean, Maccabean war, Persian period/Grintz). "Kings" before 104 BC was dropped throughout.
3. Agreed. 7:2 now follows Vaticanus ("the baggage of the men on foot among them"), and a new variant gives ℵA's "and the men" (KJV). 4:6 now reads "who was then in Jerusalem", matching B's ἐν ταῖς ἡμέραις, and the note's anchor was updated.
4. Agreed. All seven KJV-only witnesses are relabeled "King James Version (1611); its source is not identified, and Swete's apparatus has no such Greek", with `orig` "(English only)". The guesses were removed: *katapatēsomen*/"later manuscripts" (6:4), *kōmas* (4:4), "a slip in the Greek it followed" (2:23), "a slip" (3:9), *limos*/plague (7:14) and "a Greek text that added them" (7:27). The 6:4 note no longer says "a different Greek text".
5. Agreed. "To Nineveh" was dropped from the Plain English Translation, which now follows Sinaiticus's form of the long text. The variant gives A ("to Nineveh", KJV) as a separate reading and argues against it as a single-witness gloss. The Rahlfs claim and the rahlfs-lxx key were removed. `orig` now gives Swete's whole note verbatim, corrector readings included.
6. Agreed. 4:1 `why` restated, with a pointer to the 3:8 note. 5:11 now says "differ in two letters", cites the Vulgate's *in luto et latere* (Vulgate 5:10) for Sinaiticus, and no longer claims "more witnesses". 7:14's plague explanation was dropped. 2:5 now says ℵ's first hand already had "thousands", and the likely source of the slip is 2:15.
7. Agreed. The diodorus-library-16-31 description was corrected (book 16 for Bagoas, book 31 for Holophernes). N22 now gives 343 BC with each citation placed correctly, and the persia topic says the 340s BC.
8. Checked and not agreed. The Catholic Encyclopedia (newadvent 08554a) says: "Calmet insists that the Biblical Nabuchodonosor is meant, while in Arphaxad he sees Phraortes." Vigouroux identifies Nebuchadnezzar with Ashurbanipal, "the contemporary of Phraortes". N1, N3 and the ch. 1 deep are therefore right on Calmet. N3 and the deep now quote the Encyclopedia's attribution exactly and add Vigouroux's pairing. book.json's identical statements also stand.
9. Agreed. 5:18 "utterly destroyed in many wars"; 4:8 reordered so the council gives the order; 4:14 "with sackcloth around their waists, offered"; 1:3 "its foundations"; 2:24 and 3:6 "high towns"; 6:5 "this people" (anchors in the note and the balaam topic updated); θεράπων is "servants" at 2:2 and 7:16. N20 now names the reading "the land's wickedness".
10. Agreed. N7 now cites Swete's "προς αυτον] εις πολεμον ℵ* προς αυτον εις πολ. ℵc.a" and what it implies, and its anchor follows the new Plain English Translation "came to meet him".
11. Agreed. New settings cards for 1:7–10 (the summons), 2:1–3 (the council) and 6:16–17 (Achior's report), for 17 cards in all. The 6:2–9 `to` now reads "hirelings of Ephraim".
12. Agreed. Ch. 1 P: WCF 1.3 is cited only for the denial of inspiration, and the argument from errors is credited to Archibald Alexander (1826), as in book.json. Orthodox views are cut to what can be sourced: ch. 1 cites the Confession of Dositheus (1672) and Ware and says no Orthodox treatment of the history was found; ch. 4 cites Ware on fasting; the O rows of ch. 2, 3, 5, 6 and 7 were removed. Ch. 3 H now says "is known to have demanded". N4 names Joosten for the minority view and no longer cites Zeitlin or Gera for the majority. Ch. 1 J names the Midrash for Hanukkah ("the king of the Greeks") in Jellinek's <i>Bet ha-Midrasch</i>; I could not confirm the volume, so none is given.
13. Agreed. N88 quotes 16:2 as "a God who shatters wars". N40 now says the women dance and Judith and her companions, crowned with olive leaves, lead the dance (15:12–13). N107 drops the quotation and names *tapeinōsis* in 1 Samuel 1:11 and Luke 1:48. N85 reads "in dispersion (<i>en diaspora</i>)".
14. Agreed. N10 lists the four spellings; N19 cites Jeremiah 1:4 and Jonah 1:1; N57 says "In Israel". Hyrcanus dates are now "late 100s BC, debated" in N113, the edom topic and the 7:9–15 card ("between about 128 and 110 BC").
15. Agreed. 4:7 is glossed "barely two abreast" and 5:3 "you Canaanites".
16. Agreed. 1:6 now reads "came to meet him" and 5:10 "for as long as they were fed there".
17. Agreed. The back-links are passed to the coordinator for the writers of Genesis, Exodus, Numbers, Deuteronomy, Joshua, Judges, 2 Kings and Nehemiah.
