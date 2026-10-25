# Hostile review: 1 Maccabees 1–4, part 01-04

**Scope.** I reviewed every file in this folder:
- plain.txt (255 verses);
- notes.json (141 notes) and variants.json (33 entries);
- glosses.json (72), chapters.json (4 pages) and topics.json (14 contributions);
- sources.json.

I checked them against:
- texts/orig/1Ma.json `grc` (Swete's Alexandrinus), word by word beside the KJV Apocrypha;
- Swete's apparatus in texts/src/1Ma.app.json, and the Vulgate and Douay in texts/src/1Ma.lat.json;
- book.json, the other three parts, content/terms.json and the site's Plain for every translated book;
- every `traditions` card on the site (all `chapters.json` and `book.json` files).

**Build.** `VERBOSE=1 node tools/build.js --check 1Ma/01-04` gives **0 errors, 0 warnings** (255 verses, 141 notes, 33 variants, 72 glosses, 4 chapter pages, 14 topic contributions). VERBOSE adds nothing when there are no warnings. The build's quotation check only catches quotations of five words or more that are tied to a reference in set ways, so I ran a looser check of my own (finding 9).

**Quotations checked by script** (both sides NFC):
- **Greek.** All 131 Greek strings in notes, variants, chapters, topics and glosses match, as whole words, either the `grc` of the verse in question or a neighbour, or Swete's apparatus. **No invented Greek word.** Several apparatus quotations are sloppy (finding 13). One variant entry misreads what its witness says (finding 2).
- **Latin and Douay.** Every Vulgate and Douay quotation matches the file, allowing for the Vulgate's own verse numbers. These include *qui primus regnavit in Graecia*, *sicut homo ignobilis*, *ipse Dominus conteret eos*, *nisi tu, Deus, adjuves nos*, *miserebitur nostri Dominus*, *benedicebant Deum in cælum*, *abominandum idolum desolationis* (Vulg. 1:57) and Douay 1:62, 3:48 and 4:59.
- **The 66 books.** Most quotations use the site's Plain. Twelve do not (finding 9).

**Typos in the digital Swete, chapters 1–4.** These are not in the `fixed` list. Report them to tools/works-texts.py; they are not variants, and no content file quotes them:
- 2:16 πολλοί ἀπὸ → πολλοὶ;
- 2:18 πρὸσταγμα → πρόσταγμα;
- 2:40 τὰχιον → τάχιον;
- 3:39 Ἰοὺδα → Ἰούδα;
- 4:41 τούς ἐν → τοὺς.

## Verdict

**Overall.** This is careful, well-informed work. The Plain is fresh and close to the Greek. I compared it in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS and Goldstein and found no sentence shape that depends on them. Where wording coincides, the Greek forces it: 1:36 "an ambush against the sanctuary, an evil adversary", 3:19 "strength comes from Heaven", and "renegades" and "a sinful root" at 1:10–11. The capital H on "Heaven" is a site rule in terms.json.

**What is sound.**
- The named departures from Alexandrinus at 1:62, 2:5, 2:8, 3:16 and 4:47 all have entries.
- The 3:41 "fetters" question is handled honestly in a note.
- Names follow the brief, with the Greek given at first use: Joarib/Iōareim, Salu/Salōm, Kittim, Kislev, Mizpah.
- The site never calls the book "Scripture" or "the Bible" in its own voice.
- Most of the patristic, rabbinic and historical claims I was asked to check hold up (see "Claims verified").

**The weaknesses.**
- **A Chrysostom claim I could not find.** The abomination card has Chrysostom "drawing on" Luke 21:20. That is not in Homilies 75–76 on Matthew.
- **A misread apparatus note.** The 3:43 entry turns a Sinaiticus replacement into an addition, so two of its readings exist in no witness.
- **Silent drift toward Sinaiticus and Venetus.** In a cluster of verses the Plain follows ℵV, or the KJV's number, without an entry (1:55, 3:28, 3:35, 4:33, and smaller ones).
- **A false claim at 4:47.** The entry's reasoning rests on "every other verb is plural", but 4:48 ἡγίασεν is singular in the printed text.
- **Both traditions cards need work.** The abomination card overlaps the chapter 6 card and gives a one-sided Orthodox row. The calendar card's Reformed row covers only Westminster and repeats the 1 Enoch 82 card.
- **Cross-references missing both ways.** The dedication texts Numbers 7:10–88 and 1 Kings 8:63, and Psalm 30's title, point to this part, but this part does not point back.

**Counts:** 2 critical, 6 major, 9 minor.

## Findings

### 1. CRITICAL: chapters.json ch. 1 `traditions`, Orthodox row: a claim about Chrysostom his homilies do not contain, and a weak, one-sided row

**What the row says.** "John Chrysostom, preaching on Matthew 24, applied Jesus' warning to the war in which Jerusalem and the Temple were laid waste in AD 70, and he drew on Luke's parallel, where Jesus speaks of Jerusalem surrounded by armies (Luke 21:20)." The source key is `chrysostom-matthew`, "homily 76".

**What the homilies say** (New Advent text):
- **Homily 75** (on Matthew 24:1–15) explains the abomination as "the statue of him who then took the city," set up in the Temple by the one who laid it waste. Its only references to Luke are Luke 21:6–7, 12:47 and 13:34.
- **Homily 76** (on 24:16–31) says only "he seems to me to be speaking of the armies". It does not cite Luke 21:20. It also reads the false Christs of the same chapter as "Antichrist".

So the AD 70 reading is correct, but it comes from Homily 75. The Luke 21:20 clause is not in either homily, and nothing on the card supports it. An unsupported fact about a named source is critical under the brief.

**The Orthodox row is also not the church's view in its strongest form.** "Chiefly the Roman destruction" rests on one preacher. It also contradicts this book's own chapter 6 card, whose Orthodox row says Daniel looks "beyond him, to a final Antichrist". That row cites Hippolytus and Cyril of Jerusalem, *Catechetical Lecture* 15, where Cyril says the Antichrist will sit in the temple at Jerusalem.

**Fix:**
- Cite Homilies 75–76 and delete the Luke 21:20 clause, or give a passage that has it.
- State the Orthodox answer as both: AD 70 (Chrysostom) and a final Antichrist in the temple (Cyril, *Catechetical Lecture* 15.15). Then link the two cards instead of contradicting each other.

### 2. CRITICAL: variants.json 3:43: readings 2 and 3 exist in no witness

**What Swete's note says.** `των αγιων] πολεμησομεν περι (...) του λαου ημων και των λαων (pro λαων corr αγιων ℵ¹) ℵ*`. The "]" means that Sinaiticus has these words *in place of* "and of the holy place". It does not add them after it. ℵ reads: "Let us raise up the ruin of our people, and let us fight for our people and the holy place (first hand: the peoples)."

**The KJV confirms it.** It reads "Let us restore the decayed fortune of our people, and let us fight for our people and the sanctuary." There is no sanctuary in the first clause.

**What the entry gives.** Its `plain` for readings 2 and 3 is "Let us raise up our people **and our holy place** from their ruin, and let us fight…". That sentence is in no manuscript, and the `why` builds its case on it ("the added clause repeats the first"). This is the "never splice witnesses into a sentence neither has" lesson.

**Fix:**
- Reading 2 (ℵ*): "Let us raise up our people from their ruin, and let us fight for our people and the peoples."
- Reading 3 (ℵ¹, KJV, Vulgate): "…and let us fight for our people and the holy place."
- Rewrite the `why`: ℵ has a different second half, not an addition. The Plain keeps Alexandrinus.

### 3. MAJOR: silent departures from Alexandrinus toward ℵV (and the KJV)

Each place below follows the reading of Sinaiticus and/or Venetus in Swete's apparatus with no variant entry. The lesson in agent-writer-works.md is that every departure needs one.

- **1:55, "at the doors of the houses".** A has θυρίδων, which is normally "windows" (θυρίς). The apparatus has `θυριδων] θυρων ℵV`, "doors", and the KJV agrees. Either render A ("at the windows of the houses") or add an entry that follows ℵV with a reason.
- **3:28, "paid his troops for a year, telling them to be ready for whatever was needed".** A has εἰς ἐνιαυτόν twice: pay for a year, and ordered "to be ready for a year for every need". The apparatus has `om εις ενιαυτον ℵV`. The Plain drops the second phrase, which is exactly ℵV's text. Restore it ("to be ready for a year, for whatever was needed"), or add an entry.
- **3:35, "to crush and wipe out".** A has τοῦ ἐκρίψαι, "to cast out, uproot" (KJV "root out"). "Crush" renders ℵ's ἐκτρῖψαι (`του εκριψαι] και του εκτριφαι ℵ`). Use "to drive out and wipe out", or add an entry.
- **4:33, "all who know your name".** A has ἰδόντες, "who have seen". "Know" is ℵV's εἰδότες (`ειδοτες ℵV`). Render A, or add an entry.
- **4:48, "and the courts were made holy".** The printed text has ἡγίασεν, singular ("he consecrated the courts"); ℵ has ἡγίασαν. The English passive hides the singular, which matters because of finding 4. Use "and he consecrated the courts", with a `deb` note that "he" is presumably Judas.
- **Smaller cases of number** (ℵV or KJV plural against A's singular):
  - 1:32 "They took… captive" (A ᾐχμαλώτευσεν);
  - 4:20 "They saw" (A ἴδεν);
  - 4:23 "They took much gold" (A ἔλαβεν; `ελαβον ℵV`).
  - Also 2:45 "the altars" (A τοὺς βωμοὺς αὐτῶν; ℵ omits αὐτῶν).

  These do not change the sense much. Either match A or list them together in one entry.

### 4. MAJOR: variants.json 4:47 `why` rests on a false statement

The entry says: "Every other verb in 4:43–51 is plural; the singular would make Judas the builder." But Swete's own printed 4:48 ends καὶ τὰς αὐλὰς ἡγίασεν, singular, against ℵ's ἡγίασαν. 4:57 ἐνεκαίνισεν is singular too.

So A's run of singulars at 4:47–48 (ἔλαβεν… ᾠκοδόμησεν… ἡγίασεν) is consistent with itself. It may present Judas as the builder and consecrator, as Josephus also does. The case for the plural is weaker than the entry claims.

The first witness line is also loose. Swete's ἔλαβον comes from ℵ, uncorrected, and his ᾠκοδόμησαν comes from ℵc.a.

**Fix:**
- Correct the claim, and say that A has the singular in 4:47–48 and 4:57.
- Give the real reason for following the plural: Swete prints it, and so do the KJV and the Vulgate.
- Fix the witness line, and tie it to finding 3 at 4:48.

### 5. MAJOR: ch. 1 `traditions` (abomination of desolation) overlaps the chapter 6 card and the Revelation 13 card

The chapter 6 card ("Is he the little horn… or does Daniel look beyond him to a final Antichrist?") already has the same sources and much the same answers:
- **Dispensationalist:** Scofield and Pentecost, Antiochus as a preview of a future Antichrist;
- **Adventist:** Uriah Smith, Rome not Antiochus, papal power;
- **Catholic:** Jerome on Antiochus as a type of Antichrist.

This card repeats all three. Its Adventist row's "setting up of the papal power" is the question of the Revelation 13 card.

The part of the question that is new here is Matthew 24:15. Was Jesus pointing back to 167 BC, forward to AD 70, or to the end? That question divides preterist from futurist readers.

**Fix:**
- Narrow the rows to Matthew 24:15. Keep:
  - Jerome's three readings (Commentary on Matthew, 24:15: the Antichrist, Pilate's image of Caesar, Hadrian's statue);
  - Chrysostom (finding 1);
  - Calvin (verified, see below);
  - Scofield and Pentecost on Matthew 24:15 alone.
- Drop the Daniel 11:31 papacy material from the Adventist row and point to Revelation 13 instead. Keep only Smith's reading of Matthew 24:15 (Rome's armies, with Luke 21:20).
- Label the Jerome row "Western patristic" or give a Catholic source of its own (Catechism 675 is already used on the chapter 6 card). Jerome and Chrysostom belong to both churches.

### 6. MAJOR: ch. 4 `traditions` (holy days): the Reformed row is not the strongest or the only Reformed view, and it repeats the 1 Enoch 82 card

**Only one Reformed voice.** "Reformed: No" rests on Westminster 21.1 and the Directory alone, which is the Scottish and English Presbyterian position. The continental Reformed confessions say otherwise. The Second Helvetic Confession (chapter 24) approves keeping the feasts of Christ's nativity, circumcision, passion, resurrection and ascension, and of Pentecost, as long as no superstition is attached. The Dutch church orders kept Christmas, Easter and Pentecost. The row should give the Reformed division, as the 1 Enoch 82 card does ("Many Reformed churches today keep Christmas and Easter as a matter of freedom").

**Duplication.** The 1 Enoch 82 card ("Must God's people keep a set calendar of holy days?") already quotes the same Directory line, "having no warrant in the word of God, are not to be continued". The two questions are different in principle: authority to institute here, obligation to keep there. But the Reformed answers are the same words.

**Other gaps:**
- The 1 Enoch 82 card has an Orthodox row; this one has none.
- "Some Reformed writers answer that John 10:22 says only where Jesus was" has no source.
- The Catholic row lists `ccc` with no paragraph.

**Fix:**
- Make the Reformed row "Divided". Give Westminster 21.1 and the Directory, and set Second Helvetic 24 against them.
- Name a writer for the John 10:22 argument, or cut the sentence.
- Give a Catechism paragraph (for example 2043, on holy days of obligation set by the Church), or drop the key.
- Add one line pointing to the 1 Enoch 82 card. Consider an Orthodox row on the Typikon's feasts of human institution, such as the Elevation of the Cross or the Encaenia of 13 September, which views.O already mentions.

### 7. MAJOR: missing cross-references with the 66 books, in both directions

Other books' pages point to these chapters, and this part does not point back:

- **Numbers 7:10–88** (Num 7:10 and 8:3 notes; "Chanukkah"). Numbers 7:10–88 tells of the "dedication of the altar" (חֲנֻכַּת הַמִּזְבֵּחַ; LXX ἐγκαινισμὸς τοῦ θυσιαστηρίου, 7:10, 84, 88). That is the exact phrase of 1 Maccabees 4:56 and 4:59. It is the strongest Old Testament source for the feast's name, and no note here cites it.
- **1 Kings 8:63** (1 Kings 8:63 note, "Dedication: hanukkah") and **Ezra 6:16**. Ezra is in the chapter 4 `echoes`. 1 Kings 8:63–66 is not cited anywhere.
- **Psalm 30's title**, "at the dedication of the house" (Psalm 30:0 note, "Which house?"). Jewish custom has long read it at Hanukkah.
- **2 Chronicles 8:5** (Solomon fortifies Beth-horon; the 2 Chronicles note points to 1 Maccabees 3:16). N86 omits it.

**Fix:** add Numbers 7:10–11 and 7:84–88 and 1 Kings 8:63–66 to N137 or N140, and to the chapter 4 echoes. Add Psalm 30:0 to N140. Add 2 Chronicles 8:5 to N86.

### 8. MAJOR: the Babylonian king list is overstated, and contradicts book.json

**What the part says.** N93: "A Babylonian king list dates his death to the month Kislev of 148 SE." Chapter 4 views.H: "Babylonian records date the king's death to about the same month."

**What the tablet says** (BM 35603, as translated at Livius): "Year 148, [Kislîmu]: It was heard that An(tiochus IV), the k[ing died]." So the tablet records when the *news was heard* in Babylon, not when he died. The month name is also a restoration in brackets. book.json words it correctly ("it was heard that King Antiochus had died").

This bears on the dating of 4:52 against 2 Maccabees.

**Fix:** "A Babylonian king list records that the news of his death was heard in Babylon in year 148, probably in Kislev (the month is restored)." Make the same change in chapter 4 views.H.

### 9. MINOR: quotations of the 66 books not in the site's Plain wording

The build missed these because they are short, or not tied to the reference in a pattern it recognizes:

| Where | The part has | The site's Plain |
|---|---|---|
| N42 | Genesis 25:22, "why am I living?" | "why am I alive?" |
| N61 | "gathered to his ancestors (2:69; Genesis 49:33)" | Genesis has "gathered to his people"; say "as Jacob was gathered to his people" |
| N75 | Psalm 79:10, "the blood of your servants" | "your servants' blood" |
| N95 | 2 Kings 17:24, "people from Babylon, Cuthah, Avva…" | "from Babylon, from Cuthah, from Avva, from Hamath and Sepharvaim" |
| N114 | 1 Samuel 14:6, "Perhaps the LORD will work for us" | "Maybe the LORD will act for us" |
| N120 | Psalm 136:1, "his loyal love lasts forever" | "is forever" (also variant 4:24, reading 2 `plain`) |
| N125 | Joshua 2:11, "As soon as we heard… no one had any courage left" | "When we heard it, our hearts melted. Because of you no one has any spirit left" |
| N134 | Leviticus 24:2–4, "continually" | "always" |
| N136 | 1 Chronicles 15:16, "harps, lyres and cymbals" | "lyres, harps and cymbals" |
| ch. 2 views.J | Exodus 31:14, "for it is holy to you" | "because it is holy for you" (or mark it as the Talmud's own wording) |
| ch. 2 deep "Abraham reckoned righteous" | Genesis 15:6, "He trusted the LORD, and the LORD reckoned it…" | "Abram put his trust in the LORD, and he reckoned it to him as righteousness" (N63 has it right) |
| variant 4:10 | Psalm 18:19, "he delighted in me" | "since he took pleasure in me" |

Daniel is not translated on the site, but the part gives Daniel 7:25 three ways:
- N30: "plan to change times and law";
- N26: "will plan to change…";
- ch. 1 setting 1:41–51: "will try to change the times and the law".

Use one wording.

### 10. MINOR: variants.json 2:8: the ἄδοξος entry should report the editions

The departure is disclosed, and the reasoning (the lament mourns lost glory, 2:9) is sound. But the entry says only that the Latin translator "seems to have read" adoxos, as if the Greek tradition knows nothing else.

Several things are not addressed:
- The KJV's "without glory" was made from printed Greek, not from the Vulgate, and the entry does not say what its source had.
- Modern critical editions and versions (the RSV and GNT among them) print or translate "without honor". A translators' handbook (UBS *Translator's Notes*) says "most scholars" agree with them.

Check Kappler's Göttingen edition and Rahlfs for ἄδοξος, conjectured or from minuscules, and report what they print. Mark it "as reported by…" if it cannot be checked. Also say "the Old Latin" rather than "the Latin translator", since the Vulgate keeps the Old Latin unrevised in Maccabees (texts file `_about`).

### 11. MINOR: factual slips in notes and glosses

- **N62.** "twelve heroes in ten lines" — the list has eleven names in nine verses (2:52–60).
- **N111.** "Gorgias took a sixth of the army" — 6,000 of 47,000 is about an eighth.
- **N76.** "'All Israel mourned' is said elsewhere only of great leaders." It is also said of Jeroboam's child (1 Kings 14:13, 18), and Genesis 50:10–11 is about the Egyptians and the household mourning Jacob, not "all Israel". Soften to "is said of great leaders".
- **N81.** It calls "Hoi ergatai tēs anomias" "the Septuagint's phrase… in the Psalms". The Greek Psalms (5:6; 6:9; 13:4 LXX) and Matthew 7:23 have the participle, οἱ ἐργαζόμενοι τὴν ἀνομίαν. Say "close to".
- **N37.** "The Catholic and Orthodox churches keep a feast of the Holy Maccabees on 1 August." The Orthodox feast is right. For Catholics it was a feast of the General Roman Calendar until 1969 and is now a commemoration in the Roman Martyrology (which chapter 1 views.C says correctly).
- **Dates of the hostage years.** Gloss 1:10 says "held there from 189 BC". N9 says the peace of Apamea (188 BC) sent him. Pick one: preliminary terms 189, treaty 188.
- **N122.** Beth-zur "about 18 miles south of Jerusalem". Khirbet et-Tubeiqa is about 4 miles north of Hebron, which puts it at roughly 15–16 miles. Check the figure.
- **Ch. 1 setting 1:11.** "Aristobulus I… called himself 'Philhellene'". Josephus says he "was called" (χρηματίσας) a lover of the Greeks (Antiquities 13.318).
- **N88.** The note gives Mishnah Avot 4:11 for "the name of Heaven". In the usual numbering that phrase (chillul shem shamayim) is at 4:4, and 4:11 is "for the sake of Heaven". Check the reference.
- **Ch. 1 views.J.** "The medieval Scroll of Antiochus." Its date is debated (estimates run from the 2nd to the 7th century AD). Say "the early Scroll of Antiochus (its date is debated)".
- **N99.** παῖδας and πέδας are called "a difference of one letter"; they differ in spelling (αι against ε) and sound alike. Josephus's retelling does support the reading: Antiquities 12.299 has the merchants bring "bonds to bind" the prisoners (checked).

### 12. MINOR: inconsistency between N3 and variants 1:1

- **N3:** "Both make sense; the history fits either." It also says Venetus "supports" the reading "first".
- **The variant:** "the history fits it [the adverb]", against Venetus.

The two should agree. The note is also an anchor for the "deb" view, so give the reason for the Plain's choice there too.

### 13. MINOR: apparatus quotations copied loosely in variants.json

- **1:43, reading 1.** The `orig` is "σαββατον ℵΑ A* ᵛⁱᵈ". The "Α" is a Greek capital alpha, almost certainly a digitization slip for V. The witness line drops Venetus. Say "ℵ, V (digitized as Α) and A*ᵛⁱᵈ", or add [sic].
- **1:61, reading 2.** The `orig` begins with the verse number ("61 οικους ℵV"), and the witness line credits Venetus alone, although the note gives ℵV.
- **2:18, reading 2.** The `orig` "χοντες] ανδρες ℵV" copies half of a word broken across a line ("ar- χοντες"). Give "αρχοντες] ανδρες ℵV (line break removed)".
- **2:51, reading 2.** The `orig` keeps a stray "|".
- **3:30, reading 2.** The `orig` has no witness sigla. Add "ℵV".
- **4:24, reading 2.** The `en` is "for it is good" but the `plain` is "For he is good".
- **3:60, reading 2.** It cites "the Douay (1609)", but the Douay text on the site is Challoner's revision (1750). Say "Douay (Challoner)".

### 14. MINOR: smaller translation points

- **1:61.** "They hung the babies… and also their families and those who had circumcised them" makes the families and circumcisers hanged too. The accusatives can just as well depend on ἐθανάτωσαν in 1:60 ("they put to death… their families and those who circumcised them"), with the hanging as an aside. N36 states the Plain's reading as the Greek's. Add a `deb` note, or write "and they also killed their families…".
- **1:51.** "He wrote words like these" — κατὰ πάντας τοὺς λόγους τούτους means "in accordance with all these words". "Like these" softens it into a paraphrase. Use "He wrote all this to his whole kingdom".
- **2:51.** "and you will win great glory" turns the imperative δέξασθε into a result. Use "and receive great glory".
- **3:58.** "to wipe out us and our holy place" is awkward English. Use "to wipe out both us and our holy place".
- **Long sentences.** 3:29 has 46 words and 4:59 has 44, well above the site's 8th-grade target. Split each in two.
- **Joarib.** 2:1 "of the line of Joarib" against A's Ἰωαρείμ (V Ιωαρειβ). N39 discloses the Greek, as the names rule requires. That is enough, but N39 could mention V's spelling.

### 15. MINOR: unsourced statements of a church's view

These go against the lesson that "a church view needs a source that addresses the question itself":
- **ch. 2 views.P:** "Protestant readers have often admired…";
- **ch. 3 views.C:** "the Mizpah scene… was held up as the right preparation for war";
- **N63:** "Catholic readers see faith and faithfulness joined; Protestant readers see Mattathias reading Genesis as Judaism of his day did, which Paul corrected";
- **N131:** "Catholic and Orthodox writers reply…";
- **ch. 3 setting 3:17–22:** "Later Christian writers on just war cited Judas's cause, 'our lives and our laws'". Ambrose (*On Duties* 1.40–41) praises the Maccabees' courage, but I could not confirm that he cites this phrase.

Name one writer for each, or soften to "some readers".

### 16. MINOR: `readers` lines

Most are specific and good:
- 1:11 (Aristobulus);
- 1:36–40 (the Citadel until 141 BC);
- 2:49–68;
- 3:34–36 (the conquered Idumea and Samaria);
- 4:59 (2 Maccabees 1:9, 18).

Four need work:
- **2:27** is about AD 66 (War 2.409), not about the book's first readers. Put it in a `views` entry, or tie it to the writer's own day.
- **3:43** and **4:5** are generic ("For readers who kept…", "The first readers knew the end of the story"). Each could use evidence: the feast kept in the writer's day (4:59), or the book's Hebrew original, which Jerome says he saw (*Prologus Galeatus*). That fact also supports the 1:25–28 line.
- **1:25–28** states as fact that the lament "was composed in Hebrew, probably by the writer himself". Mark it as the majority view, since no Hebrew text survives.

### 17. MINOR: a card pointer that does not match its title

N131 and the chapter 4 deep section send the reader to "the card on the book page, 'Does the book's statement that prophets were no longer seen rule it out?'". The card in book.json is titled "1 Maccabees says that prophets were no longer seen in Israel (4:46; 9:27; 14:41). Does that rule it out as Scripture?" Quote the real title, or just say "the card on the book page".

All the other pointers lead to cards that exist:
- Leviticus 11, Exodus 20, Nehemiah 13, Psalm 106 and Genesis 15;
- Deuteronomy 20 and 1 Samuel 24;
- the chapter 6 page and Revelation 13.

## Checked and found sound

- **Translation.** It is faithful verse by verse apart from findings 3 and 14. Names, numbers and dates are all correct: 137, 143, 145, 146, 147 and 148; Kislev 15 and 25; 40,000 + 7,000; 5,000 + 1,000; 3,000; 800; 60,000 + 5,000; 10,000; 5,000.
- **Who does what.** The A plurals at 1:13, 1:24 and 2:66 are kept and each has an entry.
- **Terms** (content/terms.json):
  - the Citadel; renegades and the lawless; the ungodly; Friends of the King;
  - Heaven, with a capital H;
  - Hasideans;
  - sanctuary for ἁγίασμα and holy place for τὰ ἅγια, used consistently throughout;
  - no "LORD".
- **God unnamed.** The claim that θεός never occurs in Swete's 1 Maccabees and κύριος only of Joseph (2:53) is true for chapters 1–4, and θεός does not occur anywhere in the book; checked by script.
- **Disclosed departures.**
  - 1:62 εκραταιωθησαν ℵV;
  - 2:5 Apphus (the Vulgate's *Apphus*);
  - 2:8 *ignobilis*;
  - 3:16 Βαιθωρων ℵV (and A has Βεθωρων at 3:24, as stated);
  - 4:47.
  - All match the apparatus.
- **Status.** The book is never called Scripture or the Bible in the site's own voice. Luther's 1533 preface is reported fairly.
- **Consistency with book.json and the other parts.** Names (Joarib, Modein, Avaran, Apphus, Hasideans, Kislev) and quoted verses agree. book.json's "the covenant of a holy priesthood (2:26, 54)" is acceptable.
- **No duplicate topics** beyond the cards discussed above.

## Claims verified (web search, 2026-10-24)

**Liturgy and church documents**
- **The Holy Maccabees on 1 August.** Confirmed for the Orthodox churches (the Romanian Patriarchate's site: the Seven Maccabean Martyrs, at the start of the Dormition Fast) and for the Roman Martyrology. On the Catholic feast, see finding 11.
- **Egeria 48.** Confirmed (Latin text, Oxford). The dedication of the Golgotha churches was kept on the day linked with Solomon's prayer at the dedication of his house, as recorded in Chronicles.
- **Aquinas II-II q.40 a.4.** Confirmed (CCEL). The *sed contra* cites 1 Maccabees 2:41: "Whosoever shall come up against us to fight on the Sabbath-day, we will fight against him."
- **Al ha-Nissim.** The opening "In the days of Mattathias son of Johanan, the high priest, the Hasmonean, and his sons" is the standard text (Wikipedia; Kol Torah).
- **The calendar card.** CIC 1244, Augsburg 15, Articles 20 and 34, Westminster 21.1 and the Directory's appendix are accurately quoted, from my own knowledge of the texts; I did not open them. See finding 6 for what is missing.

**Jewish sources**
- **m. Taanit 2:1** (the ark brought into the town square, ashes put on it) and **4:6** (17 Tammuz: "an idol was set up in the Temple"). These are standard texts, as stated; from memory, not opened.

**Josephus**
- **Antiquities 13.318.** Confirmed (Whiston). Aristobulus "was called a lover of the Grecians" and compelled the Itureans to be circumcised. See finding 11 on "called himself".
- **Antiquities 14.63.** Pompey's earthworks on Sabbaths, since the Jews only fought back on Sabbath days when attacked. Consistent with the parallel in *War* 1.146 (the "Jews only acted defensively on sabbath days" line) and with standard references.
- **Antiquities 12.299.** The merchants brought "bonds" for the captives. This supports N99's report that Josephus favours "fetters".

**The abomination card**
- **Jerome on Matthew 24:15.** The three readings (Antichrist, Pilate's image of Caesar, Hadrian's equestrian statue in the holy of holies) are correct, from my knowledge of the text; I did not open it.
- **Chrysostom, Homilies 75–76.** Checked on New Advent. See finding 1.
- **Calvin, Harmony, on Matthew 24:15.** Confirmed (CCEL). "Abomination means profanation". The prophecy speaks of a profanation after the Temple had been cleansed of "the pollutions and idols of Antiochus", ending in its ruin. The row is fair.
- **Scofield, Pentecost and Uriah Smith.** Their positions are as stated, from my knowledge of the texts. See finding 5 on the overlap.

**History**
- **The Babylonian king list.** Checked (Livius). See finding 8.
- **Ptolemy VI as Antiochus's nephew.** Correct: his mother Cleopatra I was Antiochus IV's sister.
- **The elephants at Apamea.** Correct (Strabo 16.2.10, the Seleucid elephant stables at Apamea).
- **The departures from Alexandrinus.** 1:62, 2:5, 2:8, 3:16 and 4:47 match Swete's apparatus. For the ἄδοξος inference at 2:8 see finding 10, and for 4:47 see finding 4.
- **The 3:41 πέδας reading.** It is in modern versions ("fetters"); the UBS translator's notes call it a correction of the Greek, and Josephus supports it (above). I did not check the Syriac. N99 rightly gives it as reported by Goldstein, not as his own conjecture.

## Fixes applied

All fixes were made 2026-10-24. Afterwards `VERBOSE=1 node tools/build.js --check 1Ma/01-04` gave 0 errors and 0 warnings, with 142 notes, 39 variants, 72 glosses, 4 chapter pages and 14 topic contributions.

1. **Chrysostom (critical): fixed.**
   - The row now cites Homily 75: the statue of the conqueror, set up in the Temple when it was laid waste in AD 70. The Luke 21:20 clause is deleted.
   - The `chrysostom-matthew` key now reads "homilies 75–76, on Matthew 24".
   - The Orthodox row now answers "Both": Chrysostom for AD 70, and Cyril of Jerusalem, *Catechetical Lecture* 15.15, for the Antichrist in the temple at the end. It says that this agrees with the chapter 6 card.
2. **The 3:43 variant (critical): fixed.**
   - Sinaiticus's words are now treated as a replacement, not an addition.
   - Reading 2 (ℵ*): "Let us raise up our people from their ruin, and let us fight for our people and the peoples."
   - Reading 3 (ℵ¹, KJV, Vulgate): the same, ending "and the holy place". The KJV is quoted as confirmation.
   - The `why` is rewritten.
3. **Silent departures: fixed.**
   - The Plain now follows Alexandrinus at:
     - 1:32 "He took … captive, and they seized";
     - 1:55 "at the windows";
     - 2:45 "their altars";
     - 3:28 "to be ready for a year for every need";
     - 3:35 "to root out and wipe out";
     - 4:20 "The detachment saw";
     - 4:23 "He took";
     - 4:48 "he consecrated the courts".
   - 4:57 now follows A too ("He renewed the gates", ἐνεκαίνισεν), a case this review did not list.
   - New variant entries for 1:55, 3:28, 3:35 and 4:48 give the ℵV and KJV readings.
   - 4:33 keeps "who know", the reading of ℵ and V. A new entry explains why: ἰδόντες is probably a spelling slip for εἰδότες, since *ei* and *i* sounded alike, and Psalm 9:10 has "those who know your name".
   - A new deb note at 4:48 asks who "he" is.
   - 1:32, 2:45, 4:20 and 4:23 now match A, so they get no entry. The changes are matters of number only, and the KJV's sense is the same.
4. **The 4:47 `why`: fixed.**
   - It now says that A has singulars in 4:47–48 and at 4:57.
   - It gives the real reason for the plural: Swete prints it, and the KJV and the Vulgate have it.
   - It points to the 4:48 entry.
   - The witness line now separates ℵ (ἔλαβον) from ℵc.a (ᾠκοδόμησαν).
5. **The abomination card is narrowed to Matthew 24:15.**
   - The question names the chapter 6 card and the Revelation 13 card.
   - The rows are now Catholic (Jerome on Matthew), Orthodox, Reformed (Calvin), Dispensationalist (Matthew 24:15 only) and Adventist (Smith: Rome's armies, with Luke 21:20, plus a pointer to Revelation 13).
   - The Daniel 11:31 and papacy material is gone.
   - The Jerome row stays labeled "Catholic". "Western patristic" is not one of the build's allowed traditions. Jerome is a doctor of the Catholic Church, and the row quotes his commentary on the verse itself.
6. **The holy-days card: fixed.**
   - The Reformed row now reads "Divided". It sets Westminster 21.1 and the Directory against Second Helvetic 24, under a new key `second-helvetic-24`, because the existing `second-helvetic` key is chapter 29. The Directory's words are paraphrased, not quoted.
   - The John 10:22 sentence is cut.
   - The Catholic row now cites Catechism 2042, the precept on holy days of obligation. I used 2042 rather than 2043, because 2042 is where the holy-days precept is.
   - A new Orthodox row cites Ware: the twelve great feasts, including the Exaltation of the Cross.
   - The question now points to the 1 Enoch 82 card.
7. **Cross-references: added.**
   - The 4:59 note and the chapter 4 deep section now cite Numbers 7:10–11 and 7:84–88 ("the dedication of the altar", ἐγκαινισμὸς τοῦ θυσιαστηρίου), 1 Kings 8:63 and the title of Psalm 30.
   - The chapter 4 echoes and the note's `r` now include Numbers 7, 1 Kings 8:63–66 and Psalm 30:1. Psalm 30:0 is left out because the reference checker may not accept a verse 0.
   - The 3:16 note now cites 2 Chronicles 8:5.
8. **The Babylonian king list: fixed** in the 3:31 note and in chapter 4 views.H. Both now say that the news was "heard" in Babylon in year 148, probably in Kislev, and that the month is restored.
9. **Quotations of the 66: all twelve fixed** to the current Plain.
   - Daniel 7:25 is now given one way, "plan to change times and law".
   - My own whole-text check found more quotations of books translated since I wrote, and I fixed those too:
     - Matthew 6:10 (twice), 7:23 and 16:22;
     - John 10:22–23;
     - Isaiah 14:11, 41:14 and 43:3;
     - Deuteronomy 27:6 and 29:18;
     - 1 Samuel 25:1.
   - Splitting 4:59 had broken book.json's quotation "…every year, for eight days". I re-split the verse so that the quotation still matches, and did not touch book.json.
10. **The 2:8 variant: partly fixed.**
    - It now says "the Old Latin", which the Vulgate keeps unrevised in Maccabees.
    - It notes that many modern versions translate "without honor".
    - It says that the source of the KJV's "without glory" is not identified.
    - I could not open Kappler's Göttingen edition or Rahlfs, so the entry makes no claim about what they print.
11. **Factual slips: all fixed.**
    - Heroes: "eleven heroes in nine verses".
    - Gorgias: "about an eighth" of the army.
    - "All Israel mourned": softened, and quoted from 1 Samuel 25:1.
    - The workers of lawlessness: now "close to the Septuagint's phrase", with *hoi ergazomenoi tēn anomian*.
    - The 1 August feast: Orthodox feast; for Catholics, the Roman Martyrology, and a feast of the General Roman Calendar until 1969.
    - Hostage years: "agreed in 189, ratified at Apamea in 188", and the gloss now says 188.
    - Beth-zur: "about 4 miles north of Hebron".
    - Aristobulus: "was called" Philhellene.
    - "The name of Heaven": Avot 4:4.
    - The Scroll of Antiochus: "whose date is debated".
    - πέδας: now described as spelled differently but pronounced alike, with Josephus, *Antiquities* 12.299, cited for "bonds".
12. **N3 and the 1:1 variant: fixed.** Both now say that the history fits either reading, and that the Plain keeps the adverb found in A and ℵ.
13. **Apparatus quotations: fixed.**
    - 1:43: Venetus is named, and the digitized Greek Α is marked [sic].
    - 1:61: the verse number is dropped from the `orig`, and the witness line is now "ℵ as first written and V".
    - 2:18: now "αρχοντες] ανδρες ℵV (line break removed)".
    - 2:51: the stray "|" is removed.
    - 3:30: the "ℵV" sigla are added.
    - 4:24: `en` and `plain` both now read "it is good … is forever".
    - 3:60: the witness is now "Douay (Challoner's revision, 1750)".
14. **Translation points: fixed.**
    - 1:51 "He wrote all this".
    - 2:51 "and receive great glory".
    - 3:58 "both us and our holy place".
    - 3:29 and 4:59 are each split into two sentences.
    - 1:61 is kept, and its note now gives the other way of construing the verse, with "they put to death" in 1:60.
    - The N39 note on Joarib now gives Venetus's spelling.
15. **Unsourced church views: fixed.**
    - Ch. 2 views.P: softened to "Some Protestant readers".
    - Ch. 3 views.C: the Mizpah clause is replaced by Aquinas II-II q.40 a.4, which cites 2:41.
    - N63: softened to "some readers … others".
    - N131: the reply rows were already cut, and the note now just points to the book card.
    - 3:17–22 readers: now says only that Ambrose praised the Maccabees' courage (*On Duties* 1.40–41). The note at 3:21 makes the same narrower claim.
16. **`readers` lines: fixed.**
    - 2:27: the AD 66 material moves to `views`. The line now ties the call to Exodus 32:26–29 and to the priestly standing of the writer's own rulers.
    - 3:43: now rests on the feast still being kept and urged on other Jews (4:59; 2 Maccabees 1:9, 18).
    - 4:5: now uses the contrast with 2 Maccabees 8:23–29.
    - 1:25–28: the Hebrew original is now given as the majority view, citing Jerome's *Prologus galeatus*.
17. **The card pointer: fixed.** It now says "the card on the book page" without quoting a title.

**Lanes rule.** I moved my two new topic cores, hellenism and abomination-of-desolation, from content/topics/ to content/proposals/works/topics/. I made no other edits to shared files.
