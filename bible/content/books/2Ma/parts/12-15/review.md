# Hostile review: 2 Maccabees 12–15, part 12-15

**Scope.** I reviewed every file in this folder: plain.txt (156 verses), notes.json (95), variants.json (38), glosses.json (56), chapters.json (4 pages), topics.json (17 contributions) and sources.json. I checked them against:
- texts/orig/2Ma.json `grc` (Swete's text, which prints Codex Alexandrinus) and its `fixed` list, verse by verse, word by word, beside the KJV Apocrypha;
- Swete's apparatus in texts/src/2Ma.app.json, read note by note for chapters 12–15;
- the Vulgate and Douay in texts/src/2Ma.lat.json;
- for comparison only, Rahlfs's text (sacred-texts.com) at the places where the Plain English Translation seemed to leave Swete;
- parts 01-03, 04-07 and 08-11, book.json, content/terms.json, content/proposals/works/terms.json, the site's Plain English Translation for the 66 books, and every `traditions` card on the site (292 cards).

**Build.** `VERBOSE=1 node tools/build.js --check 2Ma/12-15` gives **0 errors, 0 warnings** (156 verses, 95 notes, 38 variants, 56 glosses, 4 chapter pages, 17 topic contributions).

**Quotations checked by script.**
- **Greek.** Every Greek string in notes.json, variants.json, chapters.json, topics.json and glosses.json is in Swete's text or apparatus. The exceptions are harmless: capital-letter illustrations (ΑΓΙΑΣ/ΑΠΑΣΗΣ, ΕΙΜΕΝ/ΕΙΠΕΝ), dictionary forms in N17 (ἡ τῶν ἑβδομάδων ἑορτή … πεντηκοστή, where Swete has the genitive and the accusative), and Ἰουδαϊσμοῦ in N67, where Swete prints Ἰουδαισμοῦ without the diaeresis. **The Greek of 12:42–45 is quoted exactly** wherever it is quoted (N26, N32, N33, the variant entries). **I found no invented Greek reading.**
- **Latin and Douay.** All of them match the files. These include *Sancta ergo et salubris est cogitatio pro defunctis exorare, ut a peccatis solvantur* (Vulgate 12:46), *pro peccatis mortuorum sacrificium*, *duodecim millia drachmas argenti*, *de resurrectione cogitans*, *superfluum videretur et vanum*, *optimam haberent repositam gratiam*, *pro peccatis eorum*, *facta collatione*, *ordinatis circum se sex millibus*, *equitumque duo millia quingentos*, *cum Esdrim*, *Deo mundi creatori*, *præsidium munitum*, *temporibus commistionis*, *castellum Dessau*, *voce syriaca*, *tertiadecima die mensis Adar*, *concedendum est mihi*, *alternis autem uti, delectabile* and the Douay sentences quoted. The numbering is right: the Vulgate's 12:43–46 is the Greek 12:43–45, and its 15:38–40 is the Greek 15:37–39.
- **The 66 books.** I checked every quotation by hand against the current Plain English Translation. All match except Psalm 7:11 (finding 9). I also caught one quotation of the Plain English Translation of another 2 Maccabees part used for the wrong speaker (8:23, finding 9). Galatians, 1 Corinthians, Daniel, Luke and Acts are not yet on the site, so fresh wording is correct there.

## Verdict

This is a careful, learned part. The Plain English Translation is mostly close to Swete's Greek and independent of the copyrighted translations. The Greek and Latin of the key passage, 12:42–45, are exact. The variant entries are thorough, and twelve of them honestly mark places where Swete leaves Alexandrinus.

**What it does well.**
- The 12:38–45 card states the Catholic, Orthodox, Reformed and Anglican positions accurately, with real sources. Its quotations check out against the documents: Catechism 1032, Trent session 25, Calvin *Institutes* 3.5.8, Westminster 21.4 and 32.1, and Articles VI and XXII. So does Mark of Ephesus's "less a proof of the existence of purgatorial fire than a refutation of it".
- The cross-card pointers lead to cards that exist: Psalm 130, Revelation 5, and the book.json card on 15:38.
- The book is never called Scripture in the site's own voice.

**Six major problems.**
1. **Four silent departures from Swete** toward Venetus, Rahlfs or the KJV (13:15, 15:9, 15:17, 15:32).
2. **KJV readings mislabeled as having "no source" or as "a guess".** At 12:27 (Lysias), 12:36 (Gorgias) and 15:11 (ὕπαρ τι) Greek manuscripts or the standard modern editions read what the KJV has.
3. **Missing variant entries** where Venetus or the KJV differs in meaning (14:17, 15:22, 15:24, 14:7, 14:26 and others).
4. **N27 misreports Calvin.**
5. **The Lutheran row of the 12:38–45 card** repeats the book.json canon history and does not give the Lutheran answer to the card's question in its strongest form.
6. **Over half the settings `readers` lines** say what a passage means, not who its first readers were.

**Counts:** 0 critical, 6 major, 9 minor.

## Findings

### 1. MAJOR: plain.txt: four silent departures from Swete's text

There is no variant entry and no note for any of these.

- **13:15.** Swete (A): καὶ τὸν πρωτεύοντα τῶν ἐλεφάντων σὺν τῷ κατ᾽ οἰκίαν ὄντι **συνέθηκεν**. The apparatus reports no other reading. The Plain English Translation's "he **laid low** the chief of the elephants" gives the sense of Rahlfs's **συνεκέντησεν**, "stabbed" (the NRSV's "stabbed"). συντίθημι does not mean "lay low". N44 also says that Judas "kills" the elephant.
  - **Fix:** add an entry: A συνέθηκεν (obscure; perhaps "dealt with"), and the modern editions' συνεκέντησεν ("stabbed"), which the Plain English Translation follows. Or translate Swete and explain in a note.
- **15:9.** Swete: **προσυμνήσας** δὲ αὐτοὺς καὶ τοὺς ἀγῶνας, "praising besides". The apparatus has `προσυμνησας] και προσυπομνησας V`, and Rahlfs also reads προσυπομνήσας. The Plain English Translation's "**recalled to them** the contests" is Venetus's "reminding".
  - **Fix:** add an entry (follow 1, V), or translate A: "sang to them besides of the contests…".
- **15:17.** Swete: διέγνωσαν **μὴ στρατεύεσθαι**, "not to campaign" (Rahlfs agrees; V has στρατεύσασθαι). The Plain English Translation's "not to **sit in camp**" is the KJV's "not to pitch camp", which renders a different verb (στρατοπεδεύεσθαι).
  - **Fix:** "They resolved not to wage a long campaign but to throw themselves bravely into the attack…", or add an entry that names the KJV's reading.
- **15:32.** Swete: καὶ **ἐπιδεξάμενος** τὴν … κεφαλήν, "receiving / welcoming". The apparatus has `επιδειξαμενος V`. The Plain English Translation's "He **displayed** the head" follows V (and the KJV's "shewed"). Swete's form may be an itacism for the same word, but the departure still needs an entry, by the Tobit lesson.
- **Borderline: 15:33.** A has ἔφη μετὰ μέρος τοῖς ὀρνέοις with no verb. V adds δώσειν, "would give", and Rahlfs reads κατὰ μέρος δώσειν. The Plain English Translation's "should be fed to the birds bit by bit" supplies V's verb. A short `deb` note would be honest.

### 2. MAJOR: variants.json: KJV readings said to have no Greek source

The entries treat several KJV readings as unexplained. Swete's apparatus does not report them, but other Greek manuscripts or the standard modern editions have them. By the lesson on "silent drift toward Venetus or the KJV", the reader needs to know where the KJV got its Greek.

- **12:27, "wherein Lysias abode".** The entry says "its Greek source is not identified… makes little sense". In fact many Greek manuscripts read ἐν ᾗ κατῴκει Λυσίας. Rahlfs prints it, and the RSV and GNT translate it. The UBS Handbook (Bullard and Hatton) notes that Kappler and Hanhart omit it and that some Latin manuscripts have "Lysanias".
  - **Fix:** "The KJV follows Greek manuscripts, printed by Rahlfs, that read 'where Lysias lived'; Hanhart's critical text omits it, with Alexandrinus and Venetus."
- **12:36, "Gorgias".** The entry says the KJV's "Gorgias" "seems to be a guess" and that "its source is not identified". The UBS Handbook reports that several Greek manuscripts read Gorgias, and others Esdrias or Ezri. Its argument that Gorgias is secondary (scribes had every reason to bring in a known name) is the right one, so the entry's conclusion stands.
  - **Fix:** replace the "guess" claim and the KJV row's `w`: "some Greek manuscripts read Gorgias".
- **15:11, ὑπέρ τι.** The entry says "*Hyper ti* is in every Greek witness Swete reports" and that the KJV "seems to translate *hypar ti*". True, but Rahlfs (and, as I recall, Hanhart) print ὄνειρον ἀξιόπιστον **ὕπαρ τι**, "a dream worthy of belief, a kind of waking vision", which the NRSV follows.
  - **Fix:** say that the modern editions read ὕπαρ τι. The Plain English Translation may still follow Swete.
- **Smaller places.**
  - **13:9.** Rahlfs reads **βεβαρβαρωμένος**, "made barbarous". The entry calls V's βεβαρωμένος "not a normal Greek form" and leaves the KJV's "barbarous" to a guess. Name the reading of the modern editions.
  - **13:24.** Rahlfs prints Γερρηνῶν, so "not in any Greek witness Swete reports" should add that the modern editions print Gerrhenians.

### 3. MAJOR: variants.json: missing entries for differences in meaning from Venetus or the KJV

The Tobit lesson is to "enter every difference in meaning from the other Greek or from the KJV's text". These have no entry:

- **14:17.** Swete has βραδέως, "slowly" (Plain English Translation: "he was slow about it"). The apparatus has `βραδεως] βραχεως V`, "briefly, slightly", which is the KJV's "somewhat discomfited". The two readings say different things about Simon.
- **15:22.** Swete has ἀνεῖλεν, so the angel killed (Plain English Translation: "he did away with"). The apparatus has `ανειλεν] ανηλες V* ανειλες Vᵃ`, "you killed", which the KJV follows: "didst slay". This changes who acts.
- **15:24.** Swete has ἐπὶ τὸν ἅγιόν σου λαόν. The apparatus has `λαον] ναον V`, "your holy temple".
- **14:7.** Swete has δεύτερον νῦν ἐλήλυθα, "now come a second time". The apparatus has `δευτερον] pr δευρο`, and the KJV's "am now come hither" has no "second time".
- **14:26.** Swete has τὸν γὰρ ἐπίβουλον τῆς βασιλείας αὐτοῦ Ἰούδαν διάδοχον ἀπέδειξεν. V omits the first αὐτοῦ and adds it after Ἰούδαν: "had appointed Judas *his* successor". The KJV reads "to be the king's successor". The Plain English Translation's "to succeed him" also drops A's αὐτοῦ ("*his* kingdom"). N60 should say whose successor the witnesses make Judas.
- **Lesser places** (a line in a note would do):
  - 12:22 `ιδιων] Ιουδαιων V`: "wounded by the Jews";
  - 13:17, where V adds ἐξ οὐρανοῦ: "help from heaven";
  - 14:13 `επιστολας] εντολας V`: KJV "Commanding him";
  - 12:11, where V adds Ἄραβες: KJV "Nomades of Arabia".

### 4. MAJOR: N27 (12:42): Calvin misreported

N27 says: "Many Protestant interpreters, from Calvin onward, take the moral lesson as the passage's sound core and the prayer for the dead as the writer's own addition."

That is not Calvin's argument. In *Institutes* 3.5.8 (CCEL, checked), Calvin:
- declines to answer from the book at all, lest he seem to count it canonical;
- says the writer's request for pardon shows the book is no oracle of the Holy Spirit;
- says Judas's piety is commended only for his "firm hope of the final resurrection";
- says the act "was not free from superstition and misguided zeal".

He does not split the passage into a sound moral core and an added prayer. The card and book.json report him correctly, so N27 contradicts the part's own card.

**Fix:** "Calvin held that Judas is praised only for his hope of the resurrection, and that the offering itself was not free of superstition (*Institutes* 3.5.8). Many Protestant readers value the warning against hidden sin." Drop "from Calvin onward" unless a writer who says what N27 says can be named.

### 5. MAJOR: chapters.json ch. 12 traditions card: the Lutheran row, and smaller points on the card

**The Lutheran row** is almost entirely the canon history already in book.json. The card "Is 2 Maccabees inspired Scripture?" (Lutheran row) and the book.json section "Prayer for the dead, Leipzig 1519 and the Reformers" both give Leipzig 1519 and 1521. The card's question is whether sins can be cleansed after death, and the row's only answer to it is one unsourced sentence: "Since forgiveness comes through faith in Christ, nothing remains to be paid after death."
- I could not open the Leipzig wording, but it is consistent with standard accounts and with book.json. "In 1530 he rejected purgatory itself" (*Widerruf vom Fegefeuer*) is correct.
- **The strongest Lutheran form, from the confessions themselves:**
  - Smalcald Articles II.2.12–15: purgatory rests on the Mass for the dead and on human opinion, and cannot be established from Scripture;
  - Apology XXIV.89–96: the Lutheran churches attack the applying of the Mass *ex opere operato* to the dead, and state, of prayer for the dead, "we do not forbid it". The row leaves this out, though readers need it (compare N33's "do not pray for the dead in the Catholic sense").
- **Fix:** replace the Leipzig and 1521 sentences with a pointer to the book.json card, and give Smalcald II.2 and Apology XXIV on the question itself, with the apology-augsburg key.

**Other points on the card** (minor, but in the passage the brief marks as most important):
- **Orthodox row, ch. 12 views.O, the communion-of-saints topic.** "At Florence" / "argued at Florence (1438)". The homily was delivered at Ferrara in 1438, and the part's own sources.json says "Council of Ferrara-Florence (1438)". Write "at the council of Ferrara-Florence (Ferrara, 1438)". The quotation itself is accurate (First Homily §4, Rose's translation).
- **Catholic row.** It is accurate: the Catechism's "made atonement for the dead, that they might be delivered from their sin" (1032) is exact, and Florence 1439 and Trent session 25 are right. It is not yet in its strongest form, because it omits the Scripture the Catechism itself joins to this text: 1 Corinthians 3:15, Matthew 12:31–32 and 1 Peter 1:7 (Catechism 1031), and the antiquity of the practice (1032, citing Chrysostom on Job's sons). Add one sentence.
- **Anglican row.**
  - "Some Anglican prayer books since the nineteenth century include prayers for the departed" is unsourced, and the date is doubtful. The official books with such prayers are twentieth-century (the 1928 proposed English book, the 1929 Scottish book, the 1979 American book).
  - The row also omits that the 1549 Book of Common Prayer had commendations of the dead, removed in 1552.
  - Source it (the prayer books themselves), or cut it.
- **ch. 12 views.C.** "the Roman Lectionary offers 12:43–46". That is the Lectionary's Vulgate numbering, and this site has no 12:46. Add "(12:43–45 here)", as book.json does.
- **Overlap.** The card's Reformed row cites Westminster 21.4 ("not for the dead"), which is the Psalm 130 card's question. Keep the row to 32.1 and Calvin, and let the pointer to Psalm 130 carry 21.4.

**Checked and sound.** The card is not duplicated anywhere on the site. The Psalm 130 card asks whether the living may pray for the departed, and Psalm 88 the same with the state of the dead. No other card asks about purgatory, and no card is ranked. The pointer "see the card at Psalm 130" leads to a card that exists.

### 6. MAJOR: chapters.json settings: `readers` lines that do not name readers

The Tobit lesson is that `readers` "must name who the first readers really were, by evidence". The good lines rest on the book's own evidence for Egyptian Jewish readers (the letters of 1:1–2:18):
- 12:3–4;
- 12:30–31;
- 13:10–12;
- 14:33;
- 14:34–36;
- 15:34.

But these give a comment on the passage or on scholarship, and say nothing about first readers:
- 12:11–12 ("The story shows Judas making terms…");
- 12:15 ("Readers who knew Joshua would hear Jericho");
- 12:24–25;
- 12:28;
- 13:4;
- 13:14–15;
- 13:22–23;
- 14:13;
- 14:15;
- 14:26–27;
- 15:21–24 ("The prayer gave readers a pattern for prayer in danger");
- 15:29;
- 15:2–5.

**Also:** the 15:37–39 `when` ("probably in the late second century BC") is firmer than book.json ("between about 124 BC and the 60s BC").

**Fix:** for each, say who first heard or read it and how we know. Where nothing can be said beyond the book-level audience, say so once ("Greek-speaking Jews, probably in Egypt, to whom the opening letters are addressed (1:1, 10)") and move the comment to `why` or a note.

### 7. MINOR: plain.txt: smaller translation points

- **12:45.** τῆς ἁμαρτίας ἀπολυθῆναι is "to be released from **the** sin", the particular sin of 12:40–42. "From their sin" generalizes it, and so does the NRSV. In the most disputed verse of the book, follow the Greek: "to free them from the sin". (The Catechism's English also has "their", but that translates the Vulgate's 12:46.)
- **12:26.** "Going out against Carnion… **he** cut down twenty-five thousand people." Coming straight after "they released him" (Timothy), an English reader takes "he" as Timothy. The Greek has no subject either, but the KJV supplies "Maccabeus". Write "Judas went out…".
- **13:23, "had lost his head".** At an 8th-grade level this can be read as beheaded. N46 explains it, but the Plain English Translation should not need the note: "had rebelled" or "had made a desperate bid for power".
- **14:2 and 14:13, "removed".** ἐπανελόμενον and ἐπανελέσθαι mean "killed" / "kill" (KJV "killed", "slay"; N50 itself says "killed them"). "Removed" softens it.
- **14:4.**
  - τοῖς νομιζομένοις θαλλῶν τοῦ ἱεροῦ means "the customary branches of the temple". "Of the kind thought to belong to the temple" mistranslates νομιζόμενος, which means "customary", not "supposed". N52 builds on that reading ("The writer's phrase is guarded: Alcimus brought what passed for sacred gifts").
  - "Olive" is not in the Greek. It is the NRSV's word.
  - **Fix:** "and some of the temple's customary branches as well", and correct N52.
- **14:46.** παντελῶς ἔξαιμος is "completely drained of blood". "All but run out" weakens it.
- **15:5.** οὐ κατέσχεν ἐπιτελέσαι is "he did not manage to carry out". "He was not allowed" adds a divine prevention the Greek leaves implicit.
- **12:3.** δυσσέβημα is "outrage". The works-lane term for δυσσεβής / δυσσέβεια is "impious / impiety". Write "an impious deed this great" for consistency with 15:33's "impious Nicanor".

### 8. MINOR: consistency with the other parts, book.json and the terms

- **τοῦ τὰ πάντα ἐφορῶντος** is rendered three ways:
  - 12:22 "the one who sees all things";
  - 15:2 "the one who oversees all things" (with a gloss);
  - 01-03's note quoting 12:22 as "the one who watches over all".
  
  Choose one rendering (7:35 has "who sees all") and fix the 01-03 quotation to the Plain English Translation.
- **The age of Antiochus V.** N34 says "a boy of about nine" in 163 BC; N50 says "about eleven" in 162 BC. Born about 173/172 BC, he was about ten and eleven. Make the two agree.
- **ἀμιξία, "the days of keeping apart"** (14:3, 38) is a new key rendering. Propose it in content/proposals/works/terms.json.
- **N19's `r` points to 1 Maccabees 5:66** for Marisa, but the site's Plain English Translation there reads "passed through Samaria" (Swete's A). Either drop the reference or say that many read "Marisa" there.
- **Outside this part:** Esther 05-10's note quotes 2 Maccabees 15:36 as "the day of Mordecai". The site's Plain English Translation is "Mordecai's Day". Report it to that lane.

### 9. MINOR: notes: accuracy points

- **N83 (15:23).** "Tobit's father says, 'For a good angel will go with him' (Tobit 5:22)." It is Tobit himself who says it, to Anna (Tobit 5:21–22 on this site). Write "Tobit tells his wife".
- **N74 (15:9).** "Earlier, Eleazar read 'from the holy book' before battle (8:23)." In 8:23 the participle παραναγνούς is nominative and agrees with Judas, and part 08-11's Plain English Translation has "and Eleazar as well. Then **he** read aloud from the holy book", where "he" is Judas. Write "Judas read from the holy book".
- **N4 (12:6).** "God is 'a just judge' in the Psalms (Psalm 7:11)." The site's Plain English Translation is "God is a judge who does right". Quote that.
- **N77 (15:12).** "more closely united with Christ" should be the Catechism's "more closely united **to** Christ" (956, vatican.va, checked).
- **N77 and ch. 15 views.C.** "The Catholic Church cites such texts" and "Catholic teaching cites 15:12–14 for the intercession of the saints". The Catechism does not cite 2 Maccabees 15 at 956 or elsewhere that I know of. Name a Catholic writer who does (for example Bellarmine, *De sanctorum beatitudine*), or write "Catholic theologians cite…".
- **N19 (12:35).** "John Hyrcanus took it about 112 BC (Josephus, *Antiquities* 13.257)." Josephus (13.254–257, checked) places the conquest soon after the death of Antiochus VII (129 BC) and gives no year. The later date comes from the excavations at Maresha. Say which is which.
- **N69 (14:42).** "Josephus later tells of the defenders of Masada and argues against suicide himself (*Jewish War* 3.362–382)." That reference is the Jotapata speech. Masada is *War* 7.320–401. Cite both.
- **N46 (13:23).** "The KJV renders 'was desperate'." The KJV reads "was desperately bent".
- **N78 (15:13).** "Jeremiah, who died in Egypt centuries before". Jeremiah 43:6–7 has him taken to Egypt; his death is tradition. Write "who, by tradition, died in Egypt".
- **N5 (12:9).** "The Judean hills stand between them, and a fire on the coast could hardly be seen from the city." From the heights around Jerusalem the coastal plain is visible on a clear day, so this is Claude's judgment stated as fact. Write "would hardly have been visible", or drop it.
- **N2 (12:2).** The `p` says "probably not the Nicanor of chapters 14–15", but the body says only "uncertain". Make the `p` match.
- **N74.** "The grandson of Ben Sira, writing in Egypt about 132 BC". He came to Egypt in 132 BC and wrote after it. Write "after 132 BC".
- **N1 (12:1).** "1 Maccabees puts them in 163 BC." 1 Maccabees 5 gives no year; it follows the rededication (Kislev 148, December 164). Write "in 164/163 BC".

### 10. MINOR: lens views: generic, unsourced, or restating book.json

- **ch. 13 views.**
  - C and O are generic and unsourced ("Catholic commentators have read…", "Orthodox writers read…"). Name a writer or drop them.
  - P (Luther's 1534 preface) restates book.json and says nothing about chapter 13.
  - H contradicts itself: it lists Philip's revolt among "details found nowhere else" and then says it "agrees with 1 Maccabees 6:55–63".
- **ch. 14 views.O.** "The church's canons forbid suicide." Cite one, for example canon 14 of Timothy of Alexandria, received by the Orthodox.
- **ch. 15 views.J.** "The day fell out of use after the Hasmonean period." Josephus (*Antiquities* 12.412, checked) says it was still kept in his day, after the Hasmoneans. It lapsed when the rabbis set aside the Scroll of Fasts (*Rosh Hashanah* 18b). Change it in views.J.
- **The Fast of Esther.** ch. 15 views.J, the deep section, N90 and the purim topic all say "13 Adar later became the Fast of Esther". The fast is first attested in the geonic period (the *She'iltot*), so the line of succession is a scholarly inference. Write "13 Adar is now the Fast of Esther, first attested in geonic times".

### 11. MINOR: Jewish sources: one claim to check

- **N31.** The words quoted, "for the dead too have atonement on Yom Kippur", are attributed to *Orach Chayim* 621:6. I could not open the text, so I cannot say whether the reason is in the Shulchan Aruch itself or in its commentators (the Mordechai, Levush, Mishnah Berurah). The custom of pledging charity for the dead is certainly at 621:6. Check the wording, and if the reason comes from a commentator, name him.
- **Sound.** The Rema at *Yoreh De'ah* 376:4 (eleven months of Kaddish), *Eduyot* 2:10, *Sifre Deuteronomy* 210, *Ta'anit* 18b (thumbs and big toes hung at the gates), *Gittin* 57b (the four hundred children) and *Genesis Rabbah* 65:22 (Yakim of Tseroroth) are as stated.

### 12. MINOR: a typo in the digital Swete

At **14:8**, the digital Swete has πρῶτον **μέν** ὑπὲρ τῶν ἀνηκόντων, an acute for the grave before another word. It is the same kind as the fixed 15:12 μέν τὴν. Report it for tools/works-texts.py (μὲν). Do not enter it as a variant. The Plain English Translation is not affected.

### 13. MINOR: glosses.json

- **Synonym glosses** that only give the Plain English Translation back in other words. Cut them, or gloss a custom instead:
  - 13:13 "decide the issue";
  - 13:21 "locked up";
  - 13:25 "set its terms aside";
  - 14:6 "feed the war and breed rebellion";
  - 14:9 "pressed on all sides";
  - 14:14 "in herds";
  - 14:20 "nodded assent";
  - 14:29 "by a ruse → by a trick";
  - 14:31 "outgeneraled";
  - 14:45 "a rock that dropped away sharply";
  - 15:17 "make young souls manly";
  - 15:39 "those who come across the work".
- **12:39, "the need had now arisen → the Sabbath was over, and the bodies could not wait longer".** The Greek says only that the need had arisen. Mark the gloss as the likely sense ("probably…").

### 14. MINOR: cross-references from the 66 books

Most links from this part to the 66 books are sound. In the other direction, the passages that matter most are not linked back to this part:
- The Psalm 130 and Psalm 88 cards (prayer for the dead) do not mention 2 Maccabees 12:43–45, though it is the text every church in them argues over.
- The Revelation 5 card (do the saints pray for us?) does not mention 2 Maccabees 15:12–14. Job and Matthew do.
- 2 Kings 19:35 / Isaiah 37:36 (cited at 8:19 and 15:22), Deuteronomy 21:8 and Joshua 7 have no link back.

These files belong to other lanes. Propose the links in content/proposals/works/topics.md, or ask the owners.

### 15. MINOR: topics.json and the deep sections: overstatement repeated

- The same claim appears three times, more firmly each time:
  - the communion-of-saints topic: "It is the oldest clear statement that the living can do something for the dead";
  - the resurrection topic: "the earliest text to link that hope with prayer for the dead";
  - the ch. 12 deep section: "the first clear statement in Jewish literature…".
  
  Baruch 3:4 and Tobit 4:17 are at least candidates, and their dates are disputed. Write "one of the oldest", or "the oldest clear statement in the Greek Old Testament books", once, and cite Doran.
- **The deep section "Prayer for the dead in the early church".** "Defined at Florence (1439) and Trent (1563)" leaves out the Second Council of Lyons (1274), whose profession of faith first set out the Latin teaching. Add it.

## Checked and found sound

- **Translation.** Apart from findings 1 and 7, it is faithful verse by verse in names, numbers and who does what. These choices are good:
  - 12:20 ("two thousand horsemen on top of seven thousand", with its entry);
  - 12:36 Esdris;
  - 13:2 ("Each brought an army");
  - 13:24 Hegemonides;
  - 14:3 and 14:38 "keeping apart";
  - 14:17 βραδέως;
  - 15:6 trophy and 15:36 Syrian (both disclosed);
  - 15:11 "beyond measure";
  - 15:27 "God's care".
- **Disclosed departures.** These are handled openly: 12:28, 12:42, 12:44, 14:16, 15:6, 15:23, 15:27, 15:36 and 15:38. The Swete-versus-A labels ("Swete's text, with Venetus") are used correctly where the apparatus shows that Swete corrects A, which answers the lesson from 1 Maccabees.
- **Swete's sigla** are read correctly throughout: `]` as replacement, `pr` and `+` as additions, `om`, `*`, `ᵃ` and `vid`.
- **The `fixed` list.** It is respected at 13:2, 14:3, 15:5, 15:12 and 15:36. The one new typo is in finding 12.
- **Copyright.** I compared every verse in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS and the Anchor Bible (Goldstein, Schwartz). Apart from 14:4 "olive" and 12:45 "their sin" (finding 7), I found no sentence shape that depends on them. Where 12:42–45 is close to the NRSV, the Greek forces it ("fall asleep in godliness", "holy and godly thought").
- **Status.** The book is never called Scripture in the site's own voice. "Scripture" is used only of Israel's scriptures, in Augustine's mouth, or as a church's view.
- **Terms.** These follow the works-lane terms: δυνάστης "Sovereign" (12:15, 28; 15:3–4, 23, 29), lowercase for Nicanor (15:5); ἀλιτήριος "villain" (12:23; 13:4; 14:42), τρισαλιτήριος "thrice-cursed villain" (15:3); ἐπιφάνεια "appearance"; ἡ πάτριος φωνή "fathers' tongue"; Ἰουδαϊσμός "Judaism"; φίλοι "Friends"; παντοκράτωρ "the Almighty"; δεσπότης "Master". So do the names: Modein, Beth-zur, Citadel, Hasideans, Dessau, with its entry.
- **The 12:43–45 numbering.** It is stated correctly in the entries and agrees with book.json.

## Claims verified (web search, 2026-10-24)

**Augustine, Aquinas, Calvin**
- ***Letter* 204** (romanletters.org). Confirmed: "He was not wise in choosing death; he was impatient in bearing humiliation"; "These are great things, but they are not good"; Gaudentius is named in §9. N68, the ch. 14 deep section and the suicide topic are right. *Against Gaudentius* 1.31 was not opened; it is consistent with standard accounts.
- **Aquinas, ST II-II 64.5 ad 5.** Razias's act is "not true fortitude, but a certain weakness of soul" (*mollities animi*). Confirmed from memory of the Latin, which is standard. N68 is right.
- ***On the Care to Be Had for the Dead* 1.3.** The Maccabees and the authority of the church's custom "even if it were nowhere read". Consistent; not opened.
- **Calvin, *Institutes* 3.5.8** (CCEL). Confirmed: the refusal to answer, the pardon, "piety… a firm hope of the final resurrection", and "not free from superstition and misguided zeal". The card is right; N27 is wrong (finding 4).

**Councils, Catechism, confessions**
- **Catechism.** 956 is confirmed ("more closely united to Christ… do not cease to intercede"); 1032 is confirmed (the quotation, the Eucharist, alms, indulgences, penance, Chrysostom). 1030–1031 are as stated.
- **Trent session 25 (decree on purgatory), Florence (*Laetentur caeli*, 1439), *Dei Verbum* 11 ("true authors").** Standard; as stated.
- **The Lectionary.** 2 Maccabees 12:43–46 is among the Old Testament readings for the Masses for the Dead. It is also in the English Order of Christian Funerals readings (liturgyoffice.org). Confirmed.
- **Mark of Ephesus, First Homily §4.** The quotation is confirmed (Rose's translation, silouanthompson.net). It was delivered at Ferrara, not Florence (finding 5).
- **Luther.**
  - Leipzig 1519: Luther still held purgatory and said Maccabees is not in the canon. Standard (and in book.json); the exact wording was not opened.
  - 1521 *Grund und Ursach*, art. 37; *Widerruf vom Fegefeuer* (1530); preface of 1534: consistent with standard accounts.
- **Smalcald II.2; Apology XXI (the saints pray for the church in general; no warrant for invoking them).** Correct. Apology XXIV.94 (prayer for the dead "we do not forbid") is missing from the card (finding 5).
- **Westminster 21.4 ("but not for the dead") and 32.1; Articles VI and XXII.** Quotations correct.

**Ancient historians**
- **Josephus**, *Antiquities* (Whiston's translation via lexundria.com):
  - 12.384–385: Lysias's advice, Berea, ten years, Alcimus "also called Jacimus". Confirmed.
  - 12.386 is about Philip, so the range "12.384–386" in N38 is loose, but harmless.
  - 12.402: Nicanor "fled away with him from the city of Rome". Confirmed.
  - 12.409–412: 13 Adar and the yearly festival. Confirmed.
  - 13.257: Marisa and circumcision. Confirmed, but no year is given (finding 9).
- ***War* 3.362–382.** The Jotapata speech against suicide (finding 9).
- **Polybius.** 31.11–15, Demetrius's escape with Polybius's help; 30.25, the Daphne procession; 2.56, against Phylarchus. As stated.
- **Death in ashes.** Ctesias: Sogdianus killed in ashes by Ochus, the later Darius II, who used it on others too (Wikipedia, "Suffocation in ash"). Valerius Maximus 9.2: confirmed; "external 6" not checked.

**Dates and places**
- **The elephants.** The Roman embassy of Gn. Octavius hamstrung the elephants (163/162 BC). Standard.
- **Cyprus under Antiochus IV.** Taken in 168 BC and given up at Rome's order. Correct.
- **Gerrha.** Between Pelusium and Mount Casius (Strabo 16.2.33). Correct.

**Jewish sources**
- **The Fast of Esther.** First attested in the geonic period (finding 10).
- ***Ta'anit* 18b, *Gittin* 57b, *Genesis Rabbah* 65:22, *Yoreh De'ah* 376:4, *Sifre Deuteronomy* 210.** As stated; not opened. *Orach Chayim* 621:6: the custom is confirmed, but the wording of the reason is unverified (finding 11).

**Early Christian writers**
- **Tertullian** (*De corona* 3, offerings for the dead on the anniversary), ***The Passion of Perpetua*** 7–8 (Dinocrates), and **Cyril of Jerusalem**, *Catechetical Lectures* 23.9–10 (= *Mystagogical Catechesis* 5.9–10). As stated.

**The KJV readings without an apparatus source, and the modern editions**
- **Rahlfs** (sacred-texts.com, checked):
  - 12:27 has Lysias;
  - 13:9 βεβαρβαρωμένος;
  - 13:15 συνεκέντησεν;
  - 13:24 Γερρηνῶν;
  - 14:16 Δεσσαου;
  - 14:36 has no "stop every unrighteous mouth";
  - 15:6 τρόπαιον;
  - 15:9 προσυπομνήσας;
  - 15:11 ὕπαρ τι;
  - 15:17 μὴ στρατεύεσθαι;
  - 15:32 ἐπιδειξάμενος;
  - 15:33 κατὰ μέρος δώσειν;
  - 15:36 τὴν τρισκαιδεκάτην and Συριακῇ.
- **The UBS Handbook** (tips.translation.bible): on 12:27, Lysias is in many manuscripts and is omitted by Kappler and Hanhart; on 12:36, Gorgias is in several Greek manuscripts.
- **14:36 and 15:36 "thirtieth".** I found no Greek source; the entries' hedged wording is acceptable.

## Fixes applied

**Writer's response (2026-10-24).** I accepted every finding except the points noted below. The build now reports 0 errors and 0 warnings (156 verses, 96 notes, 51 variants, 43 glosses, 4 chapter pages, 17 topic contributions).

**1. Silent departures from Swete.**
- **15:9.** The Plain English Translation now follows A: "praised to them besides the contests". A variant names V and Rahlfs's προσυπομνήσας ("reminded").
- **15:17.** The Plain English Translation now follows the Greek: "not to wage a long campaign". A variant names V's στρατεύσασθαι and the KJV's "not to pitch camp".
- **13:15.** I kept "laid low" and added a variant: the Plain English Translation follows Rahlfs's συνεκέντησεν against A's συνέθηκεν. N44 now says Judas "strikes down" the elephant.
- **15:32.** I kept "displayed", following V and Rahlfs, and added a variant for A's ἐπιδεξάμενος.
- **15:33.** I added a `deb` note: A has no verb, and V supplies δώσειν.

**2. KJV readings said to have no Greek source.**
- **12:27.** Lysias: the entry now names the later manuscripts, as reported by Bullard and Hatton, and Rahlfs's text. It adds that Hanhart omits the name.
- **12:36.** Gorgias: "a guess" is replaced by "several Greek manuscripts (Bullard and Hatton)".
- **15:11.** The entry now says Rahlfs prints ὕπαρ τι, which the KJV translates.
- **13:9.** The entry now names Rahlfs's βεβαρβαρωμένος.
- **13:24.** The entry now says Rahlfs prints Γερρηνῶν.
- The Rahlfs readings rest on this review's check of sacred-texts.com; I did not open Rahlfs myself.

**3. Missing entries.** I added variant entries at 12:11 (Ἄραβες), 12:22 (Ἰουδαίων), 13:17 (ἐξ οὐρανοῦ), 14:7 (δεῦρο, and the KJV), 14:13 (ἐντολάς), 14:17 (βραχέως), 14:26 (whose successor), 15:22 (ἀνεῖλες) and 15:24 (ναόν).
- At 14:26 the Plain English Translation now keeps A's "his kingdom": "appointed Judas, who schemed against his kingdom, as successor".
- N60 now explains the three readings at 14:26.

**4. N27 on Calvin.** I rewrote it as the review proposed and dropped "from Calvin onward".

**5. The chapter 12 card.**
- **q.** Its quotation now reads "to free them from the sin", matching the new Plain English Translation at 12:45.
- **Lutheran row.** It is now the confessional answer itself, with no Leipzig history: Christ's satisfaction leaves nothing to purge; Smalcald II.2.12–15; and Apology XXIV, which attacks Masses applied to the dead but does not forbid prayer for the dead. The keys are smalcald and apology-augsburg. The row points to the book page for Leipzig.
- **Catholic row.** It now adds Catechism 1031–1032 with Matthew 12:32, 1 Corinthians 3:15 and the antiquity of the practice.
- **Orthodox row.** "At the council of Ferrara-Florence (at Ferrara, 1438)". I made the same correction in the chapter 12 O view and in the communion-of-saints topic.
- **Reformed row.** It now cites only Calvin and Westminster 32.1, and leaves 21.4 to the Psalm 130 card.
- **Anglican row.** I cut the unsourced sentence about prayer books.
- **Chapter 12 C view.** It now says "12:43–46 (12:43–45 here)".

**6. `readers` lines.** I rewrote all 13 that the review listed. Each now names the book's audience by the evidence of 1:1 and 1:10, with what in the passage bears on those readers. The `when` at 15:37–39 now matches book.json: about 124 BC to the 60s BC.

**7. Translation points.**
- 12:45: "from the sin".
- 12:26: "Judas went out".
- 13:23: "had rebelled in desperation". N46 now quotes the KJV as "was desperately bent".
- 14:2 and 14:13: "killed" and "kill".
- 14:4: "some of the temple's customary branches as well". "Olive" is gone, and N52 is rewritten.
- 14:46: "completely drained of blood".
- 15:5: "did not manage to carry out".
- 12:3: "an impious deed". The anchor of N3 is updated.

**8. Consistency.**
- 15:2 now reads "the one who sees all things", as 12:22 does, and its gloss is cut. The 01-03 note that quotes 12:22 as "watches over all" belongs to that lane, and I have reported it.
- Antiochus V's age: N34 now says about ten in 163 BC, which agrees with N50's about eleven in 162 BC.
- ἀμιξία, "the days of keeping apart", is proposed in proposals/works/terms.json.
- I dropped the 1 Maccabees 5:66 reference from N19.
- The Esther 05-10 quotation of 15:36 belongs to that lane, and I have reported it.

**9. Notes.** I made every change listed: N83 (Tobit to his wife), N74 (Judas read; Ben Sira's grandson "after 132 BC"), N4 (Psalm 7:11 quoted in the Plain English Translation), N77 ("united to Christ"; "Catholic theologians cite"; also in the chapter 15 C view), N19 (no year in Josephus; the excavators' dating), N69 (*War* 3.362–382 and 7.320–401), N78 ("by tradition"), N5 ("would hardly have been visible"), N2 (the `p` now says "uncertain") and N1 ("164/163 BC").

**10. Lens views.**
- **Chapter 13.** I dropped the generic C view, because I could not name a Catholic writer on this chapter. The O view now rests on the church's feast of August 1. The P view now concerns chapter 13 itself, and the H view no longer contradicts itself.
- **Chapter 14 O view.** It now cites canon 14 of Timothy of Alexandria. This rests on my own knowledge and has no source key.
- **Chapter 15 J view.** Josephus says the day was kept in his time, and it lapsed with the Scroll of Fasts (Rosh Hashanah 18b).
- **The Fast of Esther.** It is now "first attested in geonic times" in the J view, the deep section, N90 and the purim topic.

**11. N31.** The reason is now credited to the Shulchan Aruch "with the Rema's gloss" at 621:6. I could not open the text to fix the exact attribution further.

**12. The typo at 14:8.** The coordinator has already fixed it in the texts.

**13. Glosses.** I cut the 12 synonym glosses and the 15:2 gloss. The 12:39 gloss is now marked "probably".

**14. Back-links.** I proposed them in content/proposals/works/topics.md (a new file) for the lanes that own those books.

**15. Overstatement.**
- The topic and the deep section now say "one of the oldest", cite Doran, and mention Tobit 4:17 and Baruch 3:4.
- The deep section now names Lyons II (1274) before Florence and Trent.
