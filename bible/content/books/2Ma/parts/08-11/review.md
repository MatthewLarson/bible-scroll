# Hostile review: 2 Maccabees 8–11, part 08-11

**Scope.** I reviewed every file in this folder: plain.txt (141 verses), notes.json (79), variants.json (35), glosses.json (52), chapters.json (4 pages), topics.json (8 contributions) and sources.json. I checked them against:
- texts/orig/2Ma.json `grc` (Swete's text, Alexandrinus with Venetus in the notes) and its `fixed` list, verse by verse beside the KJV Apocrypha;
- Swete's apparatus in texts/src/2Ma.app.json (A, V and their correctors);
- the Vulgate and Douay in texts/src/2Ma.lat.json;
- book.json, the other three parts of 2 Maccabees, content/terms.json and content/proposals/works/terms.json, the site's Plain English Translation for every book of the 66 it has translated, and every `traditions` card on the site.

**Build.** `VERBOSE=1 node tools/build.js --check 2Ma/08-11` gives **0 errors, 0 warnings** (141 verses, 79 notes, 35 variants, 52 glosses, 4 chapter pages, 8 topic contributions). The build caught none of the problems below.

**Quotations checked by script.**
- **The 66 books (and 1 Maccabees, Judith).** I paired every quoted phrase in notes, chapters, topics and variants with the reference after it and compared it with the site's Plain English Translation. **Every quotation of a book on the site matches**: Genesis 4:10, 37:28, 49:9; Exodus 23:20, 23:22; Leviticus 23:36, 23:40; Deuteronomy 14:29, 20:2–4, 20:8, 28:10; Joshua 5:14; 1 Samuel 30:24; 2 Kings 5:15, 6:17, 6:18, 19:35; 2 Chronicles 21:18–19, 32:8; Esther 8:17; Psalm 20:7, 34:7; Isaiah 14:13, 40:12; John 10:22–23, 12:13; Revelation 7:9, 19:11–14; and the 1 Maccabees and Judith quotations (1 Maccabees 3:4, 3:38–41, 3:47–48, 3:56, 4:15, 4:24, 4:28, 4:38, 4:47, 4:54, 4:59, 4:61, 5:3, 5:8, 5:44, 6:1, 6:15, 6:49, 6:59, 6:63, 11:70, 13:51; Judith 14:10, 16:17). The quotations from books not yet on the site (Joel, Daniel, Acts, Hebrews) could not be checked.
- **Greek.** Every Greek `orig` in notes.json is in `grc`. In variants.json, four strings do not match the texts files (finding 4). I found **no invented Greek reading**. All Greek is NFC.
- **Latin.** Every Latin `orig` in variants.json is in the Vulgate file. One Latin phrase in a note (N36) and three Douay phrases do not match (finding 4).
- **book.json** gives the death of Antiochus in words that agree with this part, except for the goddess's name (finding 7).

## Verdict

The Plain English Translation is fresh, careful work, built from Swete's Alexandrinus. I compared every verse in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS, Goldstein and Schwartz. I found two places where the Plain English Translation takes a construal those versions share and the Greek does not force (11:29 in finding 3; 10:28 in finding 9), and no copied sentence shapes. Numbers, names and who-does-what are right throughout. The 21 departures from Alexandrinus that have variant entries are all real, and each entry reads Swete's sigla correctly, including the hard ones: "om και 1° AV" at 8:33, where Swete's printed "and" is in neither codex; "ερρωσθαι AV* (-σθε Vᵃ)" at 9:20; and "ευγενισας coniecer Grimm Fritzsch" at 10:13. The repentance card is the best thing in the part: its Trent, Catechism 1453, Smalcald and Westminster 15.2 quotations are exact, and it ranks no church. The three deaths of Antiochus are presented fairly, and in substance as book.json and part 01-03 present them.

**The weaknesses:**
- **Two notes state false facts about the Greek** (N37 and N26). These are critical.
- **Two silent departures toward Venetus, the Latin and the KJV** (9:24; 11:29), and one missing KJV/Latin variant (8:35).
- **Eight quotations in variants and notes do not match the texts files**: Greek copied with the uncorrected typos, or with Swete's notes spliced or annotated inside the quotation marks, a Latin word misquoted, and three Douay phrases reworded.
- **The `readers` lines lean on one stock assumption**, "Greek-speaking Jews of the Diaspora/Egypt", in six settings.
- **The goddess is "Nanea" here** but "Nanaia" everywhere else in the book.
- **A false arithmetic claim** about Daniel's numbers (N43).
- **The Orthodox row of the card is weakly sourced.**

**Counts:** 2 critical, 6 major, 10 minor.

## Findings

### 1. CRITICAL: N37 (9:22), "The same Greek verb, 'to despair', is used in both places." It is not.

The note's whole point rests on one verb repeated. In fact:
- 9:18 has τὰ κατ᾽ αὐτὸν **ἀπελπίσας** (from ἀπελπίζω);
- 9:22 has οὐκ **ἀπογινώσκων** τὰ κατ᾽ ἐμαυτόν (from ἀπογινώσκω).

Both mean roughly "to give up hope", but they are different verbs. The contrast between narrator and letter still stands.

**Fix:** "The narrator uses one verb for despair (<i>apelpisas</i>, 9:18); the king uses another with a 'not' (<i>ouk apoginōskōn</i>, 9:22)." Or simply drop the sentence.

### 2. CRITICAL: N26 (9:5) gives 7:35 a title that is not there

N26: "'The Lord who sees everything' (<i>pantepoptēs</i>) is the title the youngest brother used when he warned the king of God's judgment (7:35)."
- 7:35 reads τὴν τοῦ παντοκράτορος **ἐπόπτου** θεοῦ κρίσιν. The word is <i>epoptēs</i>, "overseer", next to <i>pantokratōr</i>. The site's Plain English Translation there has "the Almighty, who sees all".
- By script, παντεπόπτης occurs in `grc` only at 9:5. (Swete's note shows V has πανεποπτης at 9:5. Rahlfs prints the word at 15:2, but Swete's text there should be checked before it is cited.)

**Fix:** "The youngest brother had warned the king of the judgment of 'the Almighty, who sees all' (<i>epoptēs</i>, 7:35); here the writer uses the fuller title <i>pantepoptēs</i>, 'who sees everything'."

### 3. MAJOR: silent departures toward Venetus, the Latin and the KJV, and one missing variant

**9:24 (silent).** The Plain English Translation has "if something surprising took place **or bad news arrived**". That is Venetus: Swete's note reads `και προσαπελθη τι δυσχερες] η και προσαγγελθη δυσχ. τι V`.
- Alexandrinus (Swete's text): ἐάν τι παράδοξον ἀποβαίη **καὶ προσαπέλθῃ τι δυσχερές**, "if anything unexpected should turn out **and** some further trouble come".
- The Vulgate (*aut difficile nuntiaretur*) and the KJV ("or if any tidings were brought that were grievous") follow V.
- There is no variant entry and no note. This is the Venetus/KJV drift the 1 Maccabees lessons warn about.

**Fix:** either render A ("and some further trouble came"), or keep V and add an entry. The entry should give A καὶ προσαπέλθῃ τι δυσχερές against V ἢ καὶ προσαγγελθῇ δυσχερές τι, with the Latin and the KJV.

**11:29 (silent drift in construal).** Greek: ἐνεφάνισεν ἡμῖν Μενέλαος **βουλόμενος** κατελθόντας ὑμᾶς γίνεσθαι πρὸς τοῖς ἰδίοις. The participle is nominative singular, so it goes with Menelaus: Menelaus "wishing that you return and attend to your own affairs". The Plain English Translation's "Menelaus has brought us word that **you wish** to return" follows the Latin (*dicens velle vos descendere*), the KJV ("your desire was") and the NRSV/RSV construal.
- **Fix:** "Menelaus has told us that he wants you to come home and take up your own affairs again." Or keep the Plain English Translation and add a `deb` note or variant explaining the nominative. Swete also notes ημας A for υμας, which a note could mention.

**8:35 (missing variant).** The Plain English Translation follows A's ὑπὲρ ἅπαν **εὐημερηκώς**, "having succeeded above all" (ironic): "His one great success was the ruin of his own army."
- The Vulgate reads *summam infelicitatem … consecutus*, "having met the greatest misfortune".
- The KJV reads "having very great dishonour".
- Both reflect the opposite word, δυσημερ- (Rahlfs prints δυσημερήσας; I give that from memory, so check it).

N21 builds its irony on A's reading. By the Tobit lesson ("enter every difference in meaning … from the KJV's text"), this needs an entry.
- **Fix:** add a variant: A εὐημερηκώς ("succeeded") against the Latin and KJV ("misfortune", "dishonour"). Keep A, and give the irony as the reason.

### 4. MAJOR: quotations in variants and notes that do not match the texts files

| Where | The part has | The file has |
|---|---|---|
| Variant 9:15, A reading | ἐκτρίψαι | ἐκτρῖψαι: the `fixed` list corrected exactly this typo at 9:15 |
| Variant 11:28, Swete reading | εἴη ἄν ὡς | εἴη ἂν ὡς: the `fixed` list corrected this at 11:28 |
| Variant 9:8, V reading | `δε αρτι δοκων ... κυμασιν] + επιτασσειν V` (two notes spliced, lemma dropped) | `δʼ αντιδοκων] δε αρτι δοκων V \| κυμασιν] + επιτασσειν V` |
| Variant 10:10, V reading | `ποιεων [sic, for πολεων] πολεμων V` (comment inside the quotation, "]" dropped) | `ποιεων] πολεμων V` |
| N36 (9:19) | Latin *rex et princeps* | Vulgate *rex et **principes** Antiochus* |
| Variant 8:23, `w` | Douay "Esdras having read to them the holy book" | "after the holy book had been read to them by Esdras" |
| Variant 10:15, `why` | Douay "the Jews that held the strongholds" | "the Jews that occupied the most commodious holds" |
| Variant 10:37, `w` | Douay "And having laid waste the fortress for two days together" | "And having for two days together pillaged and sacked the fortress" |

The two Greek strings were evidently copied from an older copy of the digital Swete, not from the current `grc`, which is the thing the brief's "copy by script" rule exists to prevent. The Douay "quotations" are paraphrases inside quotation marks.

**Fix:** copy each string from the texts file by script. Put explanations ("sic", "line break") outside the `orig` string, and use the exact Douay wording or drop the quotation marks. N36's point stands either way: the Latin turns "general" into "princes" or "rulers".

Two smaller points belong with these:
- **Variant 9:20, second reading.** It gives `plain` "I give great thanks **to God**", and the `why` says the KJV and the Latin "have … a clause of thanks to God". The Latin has *maximas agimus gratias* with no *Deo*, and its `en` ("we give very great thanks") says so. Only the KJV names God. Make the `plain` and the `why` say so.
- **Variant 9:20, `why`.** It omits Swete's note at 9:21, `+την εις ουνυν (sic) ελπιδα εχοντων υμων V`. That shows Venetus too had extra words in the greeting. A sentence would make the entry complete.

### 5. MAJOR: `readers` lines built on one stock assumption

agent-writer-works.md asks that `readers` "name who the first readers really were, by evidence … not one stock line". Six lines lean on the same unargued picture of Greek-speaking Diaspora readers:
- **8:27:** "its readers in the Greek-speaking Diaspora, where the Sabbath marked Jews out from their neighbors, would have valued".
- **8:36:** "Readers in Egypt and elsewhere, living among Greeks".
- **9:4:** "which Greek-speaking Jews read in the Septuagint".
- **10:38:** "as Greek-speaking Jewish readers would notice".
- **11:6:** "Tobit, popular among Jews of the Diaspora". The evidence for Tobit's early readers is the Qumran copies, which are Judean. Its setting is the Diaspora, not its known readership.
- **8:2–4:** "most likely lived among the Greek-speaking Jews of Egypt". This one at least gives its evidence (1:1–10).

Whether the epitome was written for Egypt or for Judea is debated. The letters were attached to it, and where it was composed is uncertain. Doran, cited on the same lines, leans toward a Judean writer.

**Sound lines:**
- 9:12: the coins and the Greek saying.
- 9:13–17: the vow, which the readers knew had not been kept.
- 10:8: the 124 BC letter, dated and evidenced.
- 10:25–26: the Septuagint wording of Exodus 23:22 as evidence that writer and readers knew the law in Greek.
- 11:16–21 and 11:27–33.

**Fix:** state the Egyptian readership once, with its evidence and its doubt. Then give each scene what it shows of its readers (for 8:27, for example, the book's own Sabbath scenes 6:11, 12:38 and 15:1–5). Drop "popular among Jews of the Diaspora" at 11:6, or say "known at Qumran".

### 6. MAJOR: N43 (10:3), Daniel's figures do not "fall between" two and three years

"Daniel's three and a half 'times' and his 2,300 evenings and mornings fall between the two figures (Daniel 7:25; 8:14)."
- Three and a half times (Daniel 7:25; 12:7) is three and a half years. That is more than either figure.
- 2,300 evenings and mornings is either 1,150 days (about 3 years 2 months) or 2,300 days (over 6 years). Neither is between two and three years.

**Fix:** "Daniel's figures, three and a half 'times' (7:25) and 2,300 evenings and mornings (8:14), are longer still", or cut the sentence.

### 7. MAJOR: "Nanea" against "Nanaia" in the rest of the book

N23, N40 and the ch. 9 deep say "Nanea". The Plain English Translation of 1:13–16, the 01-03 notes and chapters, and book.json (four times) all say "Nanaia", with "Nanaya" as the link name.

**Fix:** "Nanaia" throughout.

### 8. MAJOR: the Orthodox row of the repentance card is sourced to a text that does not address the question

**The question** is whether sorrow from fear of punishment is real repentance, and whether repentance can come too late.

**The Orthodox row.** Its only source is the Paschal homily. That homily speaks of latecomers to the feast (the eleventh-hour workers), not of fear-driven sorrow or a deathbed. The sentence "On this reading the writer's verdict … speaks of a man who did not truly turn" is the writer's inference, and the row gives no source for it. agent-writer-works.md asks for "a source that addresses the question itself".

**Orthodox texts that do address it.** Orthodox tradition has a classic answer to the fear question: the three dispositions of the slave (fear of punishment), the hireling (hope of reward) and the son (love). Basil gives it in the prologue to the *Longer Rules*, and it is taken up in the ascetic tradition. That would let the row say, in its strongest form, that fear is a real but lower beginning of repentance.

**The quotation.** The row's "will accept the last even as the first" does not match the usual English renderings ("receives the last even as the first"). Name the translation, or quote one exactly.

**Fix:** add a source that speaks to fear and repentance, and keep the Paschal homily for the "too late" half, labeled as liturgy.

**The rest of the card is sound.** I checked the following:
- **Trent, session 14, chapter 4:** "from the fear of hell and of punishment" is exact (Waterworth).
- **Catechism 1453:** "cannot obtain the forgiveness of grave sins" is exact.
- **Smalcald Articles III.3.7:** "man must despair, like Saul and Judas" is the Triglot (Bente) wording. The CPH reader's edition has "one must despair, as Saul and Judas did". Name the Triglot as the translation.
- **Westminster 15.2:** "not only of the danger, but also of the filthiness and odiousness" is exact.
- **Calvin, *Institutes* 3.3.4:** "nothing better than a kind of threshold to hell" is Beveridge's wording as I know it. I could not open the text (see "Claims verified").

**Duplicates.** No other card on the site asks this question. The nearest are Isaiah 6 (hardening), 2 Samuel 12 (penalty after forgiveness) and Psalm 32 (confession to a priest), and the card points correctly to the last two.

### 9. MINOR: translation points

- **8:33.** The colon makes "the ones who had set fire" equal Callisthenes alone. That is the AV reading (variant 8:33), so it is fine. But the gloss and N20 should not then speak of "the arsonist" as if the plural were gone. The Greek still has τοὺς ἐμπρήσαντας, plural.
- **8:30, "very lofty strongholds".** Here εὖ μάλα more naturally goes with ἐγκρατεῖς ἐγένοντο: "became masters of high strongholds very easily". That is the KJV's "very easily". Either reading is possible; say "high strongholds".
- **9:19, "my citizens".** The Greek has τοῖς πολίταις, "the citizens". The "my" is added. N36 builds on "my". Use "the citizens", or note that "my" is supplied.
- **10:28.** "a guarantee of success and victory: its courage, and its refuge in the Lord". The Greek makes the refuge the pledge, *with* courage: ἔγγυον ἔχοντες … μετὰ ἀρετῆς τὴν ἐπὶ τὸν κύριον καταφυγήν. Making courage a second guarantee is the NRSV's "not only their valor but…" construal. Better: "One army had its refuge in the Lord as the pledge of success and victory, together with its courage."
- **11:15, "with an eye to what was best for all".** "For all" is added; τοῦ συμφέροντος φροντίζων means "with an eye to the advantage".
- **9:13, "made a vow".** This is defensible, and N32 explains it. But the setting and the card call it a "vow" and a "repentance" in the same breath. Keep "vow" consistent in the card's question.

### 10. MINOR: factual slips

- **N47 (10:6).** "Hezekiah's cleansing of the Temple took eight days." 2 Chronicles 29:17 gives eight days to reach the porch and eight more for the house: sixteen in all. The site's Plain English Translation says so. Write "two spans of eight days".
- **N48 (10:6).** "Its verse just before draws on the martyrs (Hebrews 11:35)." 11:35 is three verses before 11:38. Write "a few verses earlier".
- **N66 (11:6).** "Raphael travels with Tobias unseen (Tobit 5:4)." He is seen, but not recognized ("he did not know that he was an angel of God"). Write "unrecognized".
- **N0 (8:1).** The title "a word this book coined" claims more than "first found in 2 Maccabees", which is all the evidence supports. Retitle: "'Judaism': a word first found here".
- **N70 (11:16).** "Three are dated to the year 148 … in spring 164 BC." The deep (rightly) says Lysias's month is unknown. Say that the two Xanthicus letters are spring 164 and that Lysias's month is uncertain. The title "Four letters, three dates" is also confusing: there are three dated letters with two distinct dates.
- **N4 and N21, and the gloss on 8:34.** These treat the Nicanor of chapters 14–15 as "the other" or "second" Nicanor. The 12-15 part says rightly that whether they are the same man "is uncertain". Write "the Nicanor of chapters 14–15".
- **Ch. 9 deep 2.** "The letter that follows … says nothing of God (9:19–27)." The letter has εἰς οὐρανὸν τὴν ἐλπίδα ἔχων, "keeping my hope fixed on heaven" (9:20). Write "says nothing of repentance".
- **N34 `p`.** "Other foreigners **in the Bible** praise Israel's God." The body then cites Judith. Write "in the 66 books". The claim "none of its persecutors vows to convert" also needs care: Nebuchadnezzar persecuted the three men (Daniel 3) and then praised God (3:28–29; 4:34–37). Say "none vows to become an Israelite".

### 11. MINOR: typos in the digital Swete to report for tools/works-texts.py

These are not variants. They are like the ones already in `fixed`:
- 8:6 ἐπικαὶρους → ἐπικαίρους (a grave accent inside the word);
- 8:28 παιδὶα → παιδία (the same);
- 9:10 διά τό τῆς → διὰ τὸ τῆς (acutes for graves before another word);
- 10:24 πανπληθείς → πανπληθεῖς (accusative plural of παμπληθής).

### 12. MINOR: the 8:20 variant claims Venetus for "six thousand"

The first reading's `w` says "as printed by Swete and Venetus". But Swete's note at 8:20 has `οκτακισχιλιους V`, with no lemma. Most likely it refers to the first number (ὀκτακισχίλιοι in the accusative). It could, however, mean that V reads "eight thousand" for the second number, which is the KJV's reading.

**Fix:** quote the note in the entry and say what it most likely covers, rather than claiming V for "six thousand" outright.

### 13. MINOR: "Alexandrinus as printed by Swete" where Swete's text is not A

The 1 Maccabees lesson asks for "Swete's text" where Swete corrects A. Places in this part:
- 8:30: Swete prints ὀχυρωμάτων against A's `το οχυρωμα των`, and συνερείσαντες against `συνερισ. AV`;
- 10:30: ἐξερίπτουν is V's reading, against A's `εξεπιπτουν`;
- 10:32: Χαιρέου is in neither codex (`Κερεου A Κεραιου V`);
- 11:30: ἀδείας against A's `ιδιας`.

None of these changes the sense much, and none has an entry, which is acceptable. But the variant entries' habit of labeling every first reading "Codex Alexandrinus (A), as printed by Swete" should be checked against these. N59 could also mention the KJV's "Gawra" at 10:32.

### 14. MINOR: 10:8 variant gives no Greek witness for "these days"

The `why` reconstructs ΤΑΣΔΕΤΑΣ (τάσδε τάς). That is the reading of the printed critical texts (Rahlfs, Hanhart: τάσδε τὰς ἡμέρας; I cite these from memory, so check them). It is not just a guess behind the Latin. Add "the reading printed by Hanhart (hanhart-2macc, in the book's sources)", marked as reported, so the departure from both codices rests on a Greek witness and not only on the Latin and the KJV.

### 15. MINOR: views and claims without a source

- **Ch. 11 views.C.** "More recent Catholic scholarship … has generally accepted that the writer arranged his material by theme." It names no one. Name a Catholic commentator, or cut the sentence.
- **N2 (8:5).** "Many readers take the verse to mean that the martyrs' suffering counted for the nation." Write "van Henten and others", since that is the source cited.
- **Ch. 9 setting 9:13–17, views.** The row "Some Christian readers took the vow as sincere sorrow that came too late" names no reader. Name one (Origen? Augustine?) or drop the row.

### 16. MINOR: sources

- **bickerman-god-maccabees** is cited for the dates of the four letters (N70, N76, the 11:16–21 and 11:27–33 settings). Bickerman's case for dating 11:27–33 to Antiochus IV is mainly in his article "Un document relatif à la persécution d'Antiochos IV Épiphane" (*Revue de l'histoire des religions* 115, 1937). The 1 Maccabees 09-11 review flagged the same over-use of this key. Check that *The God of the Maccabees* says what is cited, or add a key for the article.
- **habicht-2macc** (the 1976 JSHRZ commentary) is cited for 9:19–27 being a genuine letter adapted. Habicht's fuller case is "Royal Documents in Maccabees II", *Harvard Studies in Classical Philology* 80 (1976). Consider adding it.

### 17. MINOR: glosses

- 9:4 "his charioteer → the driver of his war chariot or carriage" and 11:12 "stripped of their arms → having thrown away their weapons as they fled" only restate the Plain English Translation.
- 11:30 "Xanthicus, about March to April" and 10:5 "Kislev" are good. 11:5 "schoinoi … about three and a half miles" is right at 30 stades.

### 18. MINOR: cross-references back from the 66 books (for the coordinator)

This part cannot edit them. The coordinator should pass these to their owners:
- **Exodus 23:22** has no note pointing to its quotation at 2 Maccabees 10:26, which is the clearest quotation of the 66 in the part.
- **Isaiah 14:13 and 40:12** lack back-links to 9:8–10.
- **Genesis 4:10** lacks a back-link to 8:3.
- **Genesis 19:11 and 2 Kings 6:18** lack back-links to ἀορασία at 10:30.
- **Deuteronomy 20:8** lacks a back-link to 8:13.
- **2 Kings 19:35** lacks a back-link to 8:19.

Already linked: John 10 (to 10:1–8), John 12 and Revelation 7 (to 10:7), and 2 Chronicles 21 (to 9:5–9).

## Checked and found sound

- **Translation.** It is faithful verse by verse, apart from findings 3 and 9. Numbers checked:
  - 6,000; 20,000; 2,000 talents; 90 slaves a talent;
  - 185,000; 8,000 + 4,000 / 6,000 / 120,000;
  - 1,500 per brother; over 9,000; over 20,000; 3,000 merchants;
  - 20,000 and 9,000 at the towers; 70,000 drachmas;
  - 20,500 and 600; 80,000 men and 80 elephants; 11,000 and 1,600;
  - the dates 148 / 24 Dioscorinthius and 148 / 15 Xanthicus (twice).
- **Good choices:**
  - 8:36 keeps the champion unnamed (A), with a variant;
  - 9:8, 10:4, 10:8, 10:10, 10:14, 10:33, 11:15 and 11:23 are each a justified departure, with an entry;
  - 8:25–26 are entered as departures (V ὥρας; V without δίκη);
  - 8:33 follows AV against Swete's added καί, with an entry;
  - 11:5 keeps "schoinoi".
- **The other variant entries** match the apparatus and the Latin: 8:7, 8:16, 8:20 (apart from finding 12), 8:23, 8:27, 8:34, 9:9, 9:12, 9:21, 10:7, 10:13, 10:15, 10:29, 10:35, 10:37, 11:8, 11:34, 11:36.
- **The three deaths of Antiochus.**
  - This part (N40, ch. 9 deep and views), part 01-03 (the 1:13 note and the "three deaths" deep) and book.json agree on the outline: the letter's stoning at Nanaia's temple; chapter 9's disease; 1 Maccabees 6's grief; Polybius's Tabae; Josephus siding with 1 Maccabees; and Antiochus III's death at a temple in Elymais in 187 BC.
  - Each answer to "how can one book hold both" is labeled, and the Catholic and Lutheran readings are both given.
  - Two small differences: 01-03 says flatly that in chapter 9 he "repents before he dies", where this part (rightly) leaves that open, and 01-03 writes "Tabae in Persia" where this part writes "Persis". Harmonize them.
- **Pointers to other cards all lead to cards that exist:**
  - 2 Maccabees 7:37–38 (sufferings for others);
  - Exodus 20 (Sabbath);
  - 2 Samuel 12; Psalm 32;
  - 1 Maccabees 4 (feasts the law does not command);
  - Tobit 5 (guardian angels);
  - the book.json cards "Is 2 Maccabees inspired Scripture?" and the 15:38 card;
  - the 1 Maccabees 6 "Three deaths" deep.
- **Status.** The book is never called Scripture in the site's own voice.
- **No em-dashes** in any file.
- **Terms.** These agree with terms.json and the works proposals: the Lord / the Master / the Almighty; impious (δυσσεβής) against ungodly (ἀσεβής); Friends, First Friends, Kinsman; thrice-cursed villain; Kislev; Feast of Booths; way of life (πολιτεία); Presence Bread (as in 1 Maccabees).
- **"Hebrews"** occurs exactly three times (7:31; 11:13; 15:37), as N69 says. **βάρβαρος** occurs at 2:21, 4:25, 5:22 and 15:2, as N45 says.
- **Latin quoted** in variants: *hostibus* and *ne hostibus reconciliarentur* (8:16), *sex millia* (8:20), *ab Esdra lecto illis sancto libro* (8:23), *misericordiæ initium stillans in eos* (8:27), *id est, Callisthenem* (8:33), *protectorem Deum* (8:36), *mortalem non paria Deo sentire* (9:12), *Orabat* (9:13), *mitius corriperentur* (10:4), *dies istos* (10:8), *mala quæ in bellis gesta sunt* (10:10), *Judæos debellabat* (10:14), *diebus quatuor* (10:33), *quinque stadiorum* (11:5), *eques* (11:8), *ea rex concessit* (11:15), *mensis Dioscori* (11:21), *rebus suis* (11:23), *Titus Manilius* (11:34), *sicut congruit vobis* (11:36). All are exact.

## Claims verified (web search, 2026-10-24)

The web-fetch budget for the session ran out partway through. Items marked "not opened" were checked against standard references and my own knowledge only.

**Greek and Latin historians**
- **Livy 42.6.** Wikisource (McDevitte). Apollonius "alleged many valid reasons why the king was paying his tribute after the appointed day", and brought "the whole amount". N5's "overdue payments … in 173 BC" is correct.
- **Livy 41.20.** Wikisource. The temple of Jupiter Olympius at Athens, "the only one in the world which has been begun on a scale proportionate" to the god. N33 is correct.
- **Polybius 21.42** (Thayer, Paton). The elephants clause (42.12: surrender them and keep none in future) and the indemnity of 12,000 talents (42.19) are correct. Wikipedia, "Treaty of Apamea", gives 1,000 talents a year for twelve years, which N5 follows.
- **Polybius 26.1.** Thayer, from Athenaeus: "Antiochus surnamed Epiphanes gained the name of Epimanes by his conduct." N31 is correct.
- **Polybius 31.9.** Thayer. The expedition against the sanctuary of Artemis in Elymais, and "he died at Tabae in Persia". N23, N24 and ch. 9 views.H are correct. (Polybius writes "Persia"; "Persis" is acceptable.)
- **Polybius 31.10.** Thayer, 31.10.9: "Titus Torquatus and Gnaeus Merula as legates". N78 is correct.
- **Polybius 31.2.11.** Octavius sent "to hamstring the elephants". N63 is correct.
- **Polybius 27.13.** "Ptolemy, the Egyptian commander in Cyprus, was not at all like an Egyptian, but gifted with good sense and capacity." N52's quotation is exact.
- **Appian, *Syrian Wars* 46.** "Epiphanes died, leaving a son, Antiochus, nine years of age" (Perseus). N51 is correct.
- **Herodotus 7.35** (Xerxes has the Hellespont lashed) and **Pausanias 10.23** (the Gauls driven from Delphi in 279 BC by earthquake, thunder and apparitions). Standard; not opened.
- **Antiochus III.** His son Antiochus was co-king from about 210/209 BC, and he was killed at a temple of Bel in Elymais in 187 BC. Standard; N38 and N40 are correct.
- **The coins** reading ΒΑΣΙΛΕΩΣ ΑΝΤΙΟΧΟΥ ΘΕΟΥ ΕΠΙΦΑΝΟΥΣ. Standard; N31 is correct.
- **The Macedonian month order** (…Peritios, Dystros, Xandikos, Artemisios…). N72's "Dystros, the month before Xanthicus" is correct.
- **The schoinos** is usually 30 stades, varying up to 60 or more. Beth-zur (Khirbet et-Tubeiqa / Burj as-Sur) lies about 4 miles north of Hebron (Wikipedia), so roughly 16–20 miles from Jerusalem. The 11:5 variant and the gloss are consistent.
- **BM 35603.** News of the king's death in Kislev 148: standard (Sachs and Wiseman 1954). N42 is correct.

**Septuagint**
- **LXX Exodus 23:22**, ἐχθρεύσω τοῖς ἐχθροῖς σου καὶ ἀντικείσομαι τοῖς ἀντικειμένοις σοι. Matches 10:26's wording; N56 is correct.
- **ἀορασία** in Genesis 19:11, 4 Kingdoms 6:18 and Wisdom 19:17. Correct; N58 is right.

**Josephus**
- *Antiquities* 12.149–150 (the 2,000 families); 12.305–312 (Emmaus, about 3,000 dead, no Sabbath halt); 12.325 ("Lights"); 12.354–359 (Antiochus's death, and the argument with Polybius); 12.379–385 (the peace, and Menelaus killed at Berea, "the origin of all the mischief" in Whiston); 17.169 (Herod's worms). All are consistent with the Whiston text as I know it. The fetch budget ran out before I could open lexundria again.

**Christian sources**
- **Catechism 583.** The Vatican text, footnote 352, cites "Jn … 10:22-23" for the pilgrimages to the feasts. Ch. 10 views.C is correct.
- **Catechism 1453 and Catechism 2313.** Correct.
- **Trent, session 14, chapter 4.** Exact (catholic.com, quoting Waterworth): "or from the fear of hell and of punishment … a gift of God … dispose him to receive the grace of God in the Sacrament of Penance".
- **Westminster Confession 15.2.** "out of the sight and sense not only of the danger, but also of the filthiness and odiousness of his sins". Exact.
- **Smalcald Articles III.3.7.** CPH: "one must despair, as Saul and Judas did". The card's "man must despair, like Saul and Judas" is the Triglot wording (finding 8).
- **Calvin, *Institutes* 3.3.4.** The "threshold to hell" phrase and the "legal / evangelical" distinction, which Calvin attributes to "some". Consistent with Beveridge; not opened.
- **Chrysostom's Paschal homily.** The eleventh hour, and "receives the last even as the first" in the common translations (finding 8). Not opened.
- **The Westminster Directory** on festival days, "having no warrant in the word of God, are not to be continued". Correct.
- **Aquinas, *ST* II–II q. 40 a. 4,** citing 1 Maccabees 2:41. Correct.
- **Mishnah *Yoma* 8:9** ("I will sin and repent") and ***Shabbat* 21b.** Correct.

**Not verified**
- **Luther's Preface to 2 Maccabees** (1534): the phrases quoted in ch. 9 and ch. 11 views.P. Check them against *Luther's Works* 35.
- **The 1910 Catholic Encyclopedia** (Bechtel), on the two campaigns (N62, ch. 11 views.C) and on 1:13–16 as a quoted rumor (ch. 9 views.C).
- **Habicht and Bickerman** on 9:19–27 (a genuine letter, perhaps first sent elsewhere) and on the order of the four letters in chapter 11 (finding 16).
- **The writer's two inferences:**
  - 8:27: that the Latin *stillans* and the KJV's "distilling" reflect στάξαντος. It is labeled as an inference, which is right; Swete reports no such reading.
  - 8:7: that the KJV's "holiness" has an unknown Greek source. It is labeled honestly.

## Fixes applied

**Fixed (writer, 2026-10-24):**
- **1 (critical), N37 (9:22).** The note now says the narrator uses *apelpisas* (9:18) and the king uses *ouk apoginōskōn* (9:22): two different verbs.
- **2 (critical), N26 (9:5).** It now says that 7:35 has *epoptēs* beside "the Almighty", and that *pantepoptēs* is the fuller title used here. The uniqueness claim is gone.
- **3, 9:24.** The Plain English Translation now follows A: "and some further trouble came". There is a new variant against V (ἢ καὶ προσαγγελθῇ), with the Latin, the KJV and the Douay.
- **3, 11:29.** The Plain English Translation now follows A's nominative: "Menelaus has told us that he wants you to come home". There is a new variant for V's βουλεσθαι, the Latin, the KJV and the Douay, which also reports A's ημας and its first-hand Ιουδαιοις. N76 was adjusted to match.
- **3, 8:35.** New variant: A εὐημερηκώς against the Latin *summam infelicitatem … consecutus*, the KJV "very great dishonour" and the Douay. A is kept. I did not cite δυσημερήσας, because I could not check it.
- **4, quotations.** I re-copied these from the current `grc` and the apparatus by script:
  - 9:15 ἐκτρῖψαι and 11:28 εἴη ἂν;
  - 9:8 now has the exact two notes, joined by "|";
  - 10:10 now has the exact `ποιεων] πολεμων V`, with the typo comment moved into `w`;
  - 10:7 had a line-break comment inside its `orig`, which I moved into `w`.
- **4, Latin and Douay.** N36 now reads *rex et principes*, with the Douay "king and ruler". The Douay at 8:23, 10:15 and 10:37 is now quoted exactly, and I checked every Douay and KJV quotation by script.
- **4, 9:20.** The second reading's `plain` drops "to God". The `why` now says only the KJV names God, and it adds V's extra words at 9:21, quoted exactly; the apparatus has no "(sic)" there.
- **5, readers lines.** I rewrote 8:2–4, 8:27, 8:36, 9:4, 10:38 and 11:6 from evidence:
  - 8:2–4 gives the 124 BC letter to Egypt as the evidence, and says the place of the abridgment is debated;
  - 8:27 uses the book's own Sabbath scenes;
  - 8:36 uses 6:1–5;
  - 9:4 uses the book's two recollections of Sennacherib;
  - 10:38 uses *euergetēs* at 4:2;
  - 11:6 uses the Qumran copies of Tobit and Tobit 5:22.
- **6, N43 (10:3).** It now says that Daniel's figures "are longer still".
- **8, the Orthodox row.** It now rests on Gregory of Nazianzus, *Oration* 40.13 (NPNF): the slave, the hired servant and the son. I quoted this from the New Advent text, and the row also cites his warning in 40.11–12 against putting off baptism. The Paschal homily is kept for the "too late" half, labeled as liturgy and as the OCA translation, which I checked on oca.org. I could not open Basil's *Longer Rules* (the archive.org text of Clarke has only the front matter), so I used Gregory instead. The Smalcald quotation is now labeled the *Triglot Concordia* translation. I added the new key gregory-nazianzen-or40, and chrysostom-paschal now names its translation.
- **9, translation.**
  - 8:30: "very easily made themselves masters of high strongholds".
  - 9:19: "the citizens"; I updated N36's anchor and title and the setting's `to`.
  - 10:28: refuge in the Lord as the pledge, with courage.
  - 11:15: "with an eye to what was best".
  - The card's question now says "turns to God and makes his vow".
  - N20 now keeps the plural arsonists.
- **10, factual slips.**
  - N47: "two spans of eight days". N48: "a few verses earlier". N66: "unrecognized". N0 is retitled.
  - N70 is retitled "Four letters, two dates", and it now says Lysias's month is unknown.
  - N4, N21 and the 8:34 gloss now say "the Nicanor of chapters 14–15".
  - The chapter 9 deep now says the letter "says nothing of repentance".
  - N34 now says "in the 66 books" and "none of them vows to become an Israelite", and it adds Daniel 3:28–29.
- **12, 8:20.** The first reading now quotes Swete's bare note `οκτακισχιλιους V` and says what it most likely covers.
- **13.** No entries were affected. N59 now mentions the KJV's "Gawra".
- **15.**
  - The unsourced chapter 11 views.C sentence is cut.
  - N2 now says "Van Henten and others".
  - The unsourced setting view "A true but late repentance" at 9:13–17 is dropped.
- **16.** I replaced bickerman-god-maccabees with a new key, habicht-royal-documents (*HSCP* 80, 1976), in the 11:16 and 11:30 notes and the 11:16–21 and 11:27–33 settings, and the deep now says "following Habicht and others".
- **17.** The glosses on 9:4 "his charioteer" and 11:12 "stripped of their arms" are removed.

**Not applied:**
- **7 ("Nanaia").** The coordinator ruled that the book uses "Nanea", and book.json was changed to match, so "Nanea" stays.
- **11.** These typos are already in the `fixed` table, and the part now quotes the corrected text.
- **14, 10:8.** I add no Greek witness for τάσδε τὰς ἡμέρας. The review gives the Rahlfs/Hanhart reading from memory, and I could not check it, so the entry still rests on the Latin and the KJV. I also corrected its wording: the Latin has "these days" and the KJV "those days".
- **16, Bickerman's 1937 RHR article.** I did not add it. As far as I know it concerns the Samaritan petition in Josephus, not 2 Maccabees 11, so citing it here would be a guess.
- **18.** These back-links belong to other parts, and I pass them to the coordinator.
- **The harmonizing of 01-03 (repents; "Persia" or "Persis")** belongs to the 01-03 writer.

`VERBOSE=1 node tools/build.js --check 2Ma/08-11`: 0 errors, 0 warnings (141 verses, 79 notes, 38 variants, 50 glosses).
