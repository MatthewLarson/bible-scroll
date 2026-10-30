# Hostile review: 1 Maccabees 12–16, part 12-16

**Scope.** I reviewed every file in this folder: plain.txt (220 verses), notes.json (122), variants.json (20), glosses.json (68), chapters.json (5 pages), topics.json (15 contributions) and sources.json. I checked them against:
- texts/orig/1Ma.json `grc` (Swete's text, which prints Codex Alexandrinus) and its `fixed` list, verse by verse beside the KJV Apocrypha;
- Swete's apparatus in texts/src/1Ma.app.json, read note by note for chapters 12–16;
- the Vulgate and Douay in texts/src/1Ma.lat.json;
- parts 01-04, 05-08 and 09-11, book.json, content/terms.json, the site's Plain English Translation for the 66 books, and every `traditions` card on the site.

**Build.** `VERBOSE=1 node tools/build.js --check 1Ma/12-16` gives **0 errors, 0 warnings** (220 verses, 122 notes, 20 variants, 68 glosses, 5 chapter pages, 15 topic contributions). The foreign-alliances topic now exists.

**Quotations checked by script.**
- **Greek.** Every Greek string in notes.json, variants.json and chapters.json is in Swete's text or apparatus. The only exceptions are reconstructions that are labeled as such (ΠΑΡΑΔΑΡΕΙΟΥ, παρὰ Δαρείου, ΟΝΕΙΑΑΡΗΣ in the 12:7 and 12:19 entries), and accented forms of apparatus words (ἐγγενοῦς, ὡς αὐτοῦ, ἀθεσία). **I found no invented Greek reading.**
- **Latin and Douay.** All of them match the Vulgate and Douay files: *ab Ario* and *Arius*, *Caphetetha*, *intra regionem*, *bahem* / "the palm", *in Asaramel*, *actum Simonis*, *in loco celebri*, *mnarum mille*, *Ariarathi*, *Lampsaco*, *Gedorem* and *obstruere portas*, *sacris tubis*, *duo millia*, *succendit eas*, *duos filios* and *deceptionem magnam*.
- **The 66 books.** Every quotation of a book the site has translated matches the site's Plain English Translation except one, 1 Kings 22:4 (finding 7). I checked Ezra 6:10 and 7:10; 1 Kings 11:41, 16:9, 19:4 and 19:10, 14; Leviticus 26:4, 6 and 13; Judges 3:11 and 11:24; Genesis 25:8 and 44:4; Numbers 10:9 and 25:13; 2 Samuel 13:28; and Psalms 35:12, 83:4, 110:4 and 146:3. Micah and Zechariah are not yet on the site, so "in fresh translation" is correct there.

## Verdict

This is a learned, well-organized part with dense and mostly accurate history. Its Plain English Translation is generally close to the Greek, and the settings cover every speech and letter.

**What it does well.**
- Seventeen of the twenty variant entries are sound.
- The Greek quotations are all real, and the Latin is cited correctly throughout.
- The pointers to other cards all lead to cards that exist: the two book.json cards, 2 Chronicles 26, Numbers 34 and Psalm 72.
- Most claims I was asked to verify hold up.

**Four major problems.**
1. **Four silent departures from Swete's text toward Sinaiticus and Venetus** (12:45, 12:52, 13:33, 15:31).
2. **A cluster of phrases that track the NRSV** where the Greek does not force them, above all "the help that comes from Heaven" (12:15; 16:3) and "crushed and removed from Israel" (13:51).
3. **Two places that put Antiochus IV in 1:3**, which is about Alexander the Great. Both also misquote the book's own Plain English Translation.
4. **Witness labels that call Swete's printed text "Alexandrinus"** where Swete has corrected A from ℵ or V. Because of this, the missing siege engine of 13:43–44 in A has no entry.

**Minor points.** The rest are minor:
- slips of fact (Ptolemais in 10:39 was offered by Demetrius I; Jason is not in 1 Maccabees);
- dating stated more firmly than book.json states it;
- lens views that only restate the canon card;
- a misquoted 1 Kings 22:4;
- synonym glosses.

**Traditions cards.** The part has none. That is defensible: the questions it raises (prophecy ceasing, priest and ruler in one man, the land, the reign of peace) are already carded elsewhere, and the part points to those cards.

**Status and sources.** 1 Maccabees is never called Scripture in the site's own voice. Nothing is critical.

**Counts:** 0 critical, 4 major, 17 minor.

## Findings

### 1. MAJOR: plain.txt: four silent departures from Swete's text toward ℵ and V

The base text is Swete's printed Greek. In each of these verses the Plain English Translation follows the reading of Sinaiticus and Venetus, and there is no variant entry or note.

- **12:45.** Swete reads καὶ τὰς δυνάμεις τὰς πολλάς, "and the many troops". The apparatus has `πολλας] λοιπας ℵV`. The Plain English Translation's "the rest of the troops" is ℵV's λοιπάς.
- **12:52.** Swete reads καὶ ἐπένθησεν Ἰσραὴλ πένθος μέγα. The apparatus has `Ισραηλ] pr πας ℵV`. The Plain English Translation's "All Israel mourned" follows ℵV, and so does the KJV.
- **13:33.** Swete reads ᾠκοδόμησεν Σίμων τὸ ὀχύρωμα τῆς Ἰουδαίας (singular). The apparatus has `το οχυρωμα] τα οχυρωματα ℵV`. The Plain English Translation's "built up the strongholds of Judea. He walled them around" follows ℵV. The singular may be a collective, but then the Plain English Translation should say so.
- **15:31.** Swete reads εἰ δὲ μή, παραγενόμενοι ἐκπολεμήσουσιν ὑμᾶς, "they will come and make war on you" (the king's forces). The apparatus has `εκπολεμησωμε ℵ -σομιν V` (first person plural). The Plain English Translation's "we will come and make war on you" follows ℵV and the KJV. This changes who makes the threat.
- **Borderline: 15:6.** Swete has a bare infinitive, ποιῆσαι κόμμα ἴδιον. ℵV add καὶ ἐπέτρεψά σοι, "and I permit you" (`ποιησαι] pr και επετρεψα σοι ℵV`). The Plain English Translation's "I permit you" is a fair way to construe A, but it is also exactly ℵV's words. Add a short `deb` note or an entry.

**Fix.** Either translate Swete (12:45 "the many troops"; 12:52 "Israel mourned"; 13:33 "the stronghold of Judea… walled it around"; 15:31 "they will come and make war on you") or add a variant entry for each, following the 12:43 model. By the Tobit lesson, each one counts as a departure.

### 2. MAJOR: plain.txt: wording that tracks the NRSV/RSV where the Greek does not force it

I compared every verse in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS and Goldstein. Most verses are independent. A cluster of phrases, however, matches the NRSV (and the RSV before it), as far as I remember their wording, in places where the Greek and the KJV point elsewhere:

- **12:15 and 16:3, "the help that comes from Heaven".** The Greek is only τὴν ἐξ οὐρανῶν βοηθίαν / ἡ ἐκ τοῦ οὐρανοῦ βοήθεια, "the help from heaven". N8 itself says "The Greek says simply 'the help from heaven'". The "that comes from" phrasing is the NRSV's in both verses. Use "help from Heaven" (and change N8's anchor and preview to match).
- **13:51, "a great enemy had been crushed and removed from Israel".** Greek: συνετρίβη ἐχθρὸς μέγας ἐξ Ἰσραήλ. "And removed" is the NRSV's way of carrying ἐξ. Try "a great enemy had been broken off from Israel", or "crushed, and gone from Israel".
- **13:29, "For these he made an elaborate setting".** The Greek μηχανήματα means "contrivances" or "works" (KJV "cunning devices"). "Elaborate setting" is the NRSV's distinctive phrase. Use "For these he made fine works of craft".
- **13:27, "built a monument over the tomb… polished stone".** The Greek is ᾠκοδόμησεν ἐπὶ τὸν τάφον, "built upon the tomb", with no word for monument. Together with "polished stone" (KJV "hewn stone"), this follows the NRSV's sentence shape.
- **12:36, "a high barrier".** The Greek ὕψος μέγα is "a great height", a raised wall or mound (KJV "a great mount"). Use "a high wall" or "a great mound".
- **15:3 and 15:21, "scoundrels".** The Greek is λοιμοί, and the KJV has "pestilent men". 15:21 as a whole reads very like the NRSV ("if any scoundrels have fled… hand them over… punish them according to their law"). The Greek forces most of that verse, but not "scoundrels". Something like "troublemakers" or "pests" would also tie in with N90's own heading, "Plagues".
- **Weaker, but adding to the pattern:**
  - 14:5 "opened a way to the islands of the sea" (ἐποίησεν εἴσοδον, "made an entrance");
  - 14:36 "did great harm to its purity";
  - 15:32 "sideboard". This one is a lexicon gloss, so it is acceptable on its own.

**Fix.** Redo the first six from the Greek, and consider the last three.

### 3. MAJOR: N115 (16:13) and ch. 16 deep "Three brothers, three deaths": 1:3 is about Alexander the Great, not Antiochus IV

- **N115** says: "Antiochus IV's pride opened the book (1:3, 'his heart was lifted up'). The book ends as it began, with a proud man."
- **The deep section** says: "the same pride that opened the book in Antiochus IV (1:3)".

1 Maccabees 1:1–7 is about Alexander. Antiochus IV enters at 1:10. Part 01-04's own Plain English Translation for 1:3 is "…and he was raised high, and his heart swelled with pride", so the quoted wording, "his heart was lifted up", is not the site's Plain English Translation for this book either. The literary point still works, and arguably better: the book opens with Alexander's swollen heart (1:3) and Antiochus's arrogance (ἐν ὑπερηφανίᾳ, 1:21; Plain English Translation "In his arrogance").

**Fix.** "Alexander's pride opened the book ('his heart swelled with pride', 1:3), and Antiochus IV entered the sanctuary 'in his arrogance' (1:21)." Make the same correction in the deep section.

### 4. MAJOR: variants.json and notes: "Alexandrinus, as printed by Swete" where Swete's text is not A, and a missing entry at 13:43–44

Swete prints A, but in a number of places he corrects it silently from ℵ or V, and the apparatus says so. The part labels Swete's text "Codex Alexandrinus (A, 400s AD), as printed by Swete" throughout. In these places that label is wrong:

- **12:19, reading 0.** Swete's note reads `Ονεια Αρης] Ονια Αρης ℵ* vid … Ονειαρης Avid`. So A apparently has the run-together *Oneiares*. Only ℵ* supports Swete's division into "Onias. Areus". Reading 1's `w` itself says that "Alexandrinus seems to have Oneiares", so the two readings now contradict each other.
  - **Fix:** in reading 0 the witness should be "Swete's text, dividing the letters as Sinaiticus' first hand does"; move A to reading 1.
- **13:43–44: the siege engine.** The apparatus reads `παρενεβαλλεν ελεπολιν ℵ (-λεις V)] om A` at 13:43, and `ελεοπολει ℵV πολει A` at 13:44. Swete has supplied ἑλέπολιν ("siege tower") from ℵ. In A the verse has no siege tower, and in 13:44 it is "those in the city" who leap into the city. This is a real difference in meaning, it is in Swete's base manuscript, and the KJV has the engine. N50 builds a whole note on the *helepolis* without saying that A lacks it.
  - **Fix:** add a variant at 13:43, or at least a sentence in N50.
- **Smaller places.** In these the Plain English Translation rightly follows Swete, but the labels or notes should not imply A:
  - 12:18, A ἐποιήσατε;
  - 15:17, A ὑμᾶς;
  - 15:23, A Παρτιάταις and Βασιλείδαν for Σπαρτιάταις and Φασήλιδα;
  - 12:21, A ἐγγενοῦς (see finding 10).
  - **Fix:** a one-line note in one entry (or in book.json's text section) that "Swete's text occasionally corrects A from ℵ and V" would cover them all.
- **12:7, reading 0.** "Codex Alexandrinus, as printed by Swete" for παρὰ δ᾽ Ἀρείου is likewise Swete's division. His note says ℵ, A and V* all read ΔΑΡΙΟΥ, with iota, not ει. The `why`'s "ΠΑΡΑΔΑΡΕΙΟΥ" should therefore be "ΠΑΡΑΔΑΡΙΟΥ".

### 5. MINOR: N24 (12:45): who offered Ptolemais

"Alexander Balas had offered it to the Temple (10:39)." In 10:39 the speaker is Demetrius I, in his letter of 10:25–45, and part 09-11's Plain English Translation says so: "Ptolemais and the land belonging to it I have given as a gift to the sanctuary". Also, 10:56–60 is Alexander's wedding at Ptolemais, where Jonathan was honored, so it is not evidence that the city was "hostile to the Jews".

**Fix.** Say "Demetrius I had offered it to the sanctuary (10:39)", and cite 5:15, 22 and 12:48 for the hostility.

### 6. MINOR: N96 (15:16), "Which Lucius?": the main alternative is left out

The note offers only L. Caecilius Metellus Calvus (consul 142). It then says "no consul called Lucius fits the date of Simon's embassy exactly", which is true. But the identification most commonly preferred for an embassy of 139 BC is the consul Calpurnius Piso of 139. His praenomen in the Fasti is Gnaeus, so the "Lucius" would be a slip; ISBE gives "the weight of probability" to Piso. The note's own parallel, Josephus *Antiquities* 14.145–148, is accurate: the envoys there include "Numenius, the son of Antiochus".

**Fix.** "Either L. Caecilius Metellus (consul 142) or, with a slip in the first name, the consul Calpurnius Piso of 139."

### 7. MINOR: N12 (12:23): a 1 Kings 22:4 misquotation and a wrong attribution

The note quotes "I am as you are, my people as your people, my horses as your horses" and attributes it to "1 Kings 22:4, in the words of 2 Chronicles 18:3".
- The site's Plain English Translation of 1 Kings 22:4 is "I am one with you, my people one with your people, my horses one with your horses."
- 2 Chronicles 18:3 has no horses at all ("…and we will be with you in the battle").

The build did not catch this because of the extra words inside the parentheses. **Fix:** quote the site's 1 Kings 22:4, drop "in the words of 2 Chronicles 18:3", and change the `p` ("I am one with you").

### 8. MINOR: N9 (12:16): Jason is not in 1 Maccabees

"Jason and Antiochus were the names of the two men the book most blames for the crisis… (1:10; 2 Maccabees 4:7–10)." 1 Maccabees never names the high priest Jason. **Fix:** "Antiochus was the name of the king the book blames (1:10), and Jason that of the high priest whom 2 Maccabees blames (2 Maccabees 4:7–10)."

### 9. MINOR: N8 (12:15): "uses 'Lord' very rarely" overstates

A search of Swete's whole text for θεός and κύριος finds no θεός anywhere. κύριος occurs only in the secular sense ("lord of Egypt", 2:53). So in this text the book uses neither word for God, in the narrator's voice or in speeches; the difference lies in some manuscripts (V adds τὸν θεόν at 13:47). terms.json ("1 Maccabees avoids the word 'God'") is correct.

**Fix.** "1 Maccabees, in the text printed here, never names God as 'God' or 'Lord' at all, in narration or in speeches."

### 10. MINOR: N11 (12:21): ἐγγενοῦς is a spelling, not "of native kin"

A's ΕΓΓΕΝΟΥΣ is ἐκ γένους with κ assimilated to γ before γ, a common spelling in manuscripts and papyri. Glossing it "of native kin" makes a new word out of a spelling. **Fix:** "Alexandrinus spells it ἐγγενοῦς, a common way of writing ἐκ γένους", or drop the sentence.

### 11. MINOR: N83 (14:41) and the priesthood topic: the Wicked Priest wording, and "the Hasmoneans were called"

- **The Wicked Priest.** "Many scholars find a critic of Jonathan or Simon in the Qumran scrolls' 'Wicked Priest'" gets it backwards. The Wicked Priest is the figure the scrolls attack, and scholars identify *him* with Jonathan or Simon. The ch. 14 deep section has it right ("is often identified with Jonathan or Simon"). Copy that wording.
- **The title.** "Josephus says the Hasmoneans were called 'high priests of God Most High' (*Antiquities* 16.163)." In 16.163 the title is used once, of Hyrcanus II, in Augustus's decree. Say "Augustus's decree calls Hyrcanus 'high priest of God Most High' (*Antiquities* 16.163), and the rabbis remembered contracts dated by 'Yohanan, high priest of God Most High' (*Rosh Hashanah* 18b)." Make the same change in the priesthood topic section.

### 12. MINOR: "the Law kept priest and ruler apart": stated as fact, and half-sourced

The claim appears three times:
- N49 (13:42): "Israel's law had kept the high priest and the ruler apart… Zerubbabel and Joshua (Zechariah 4:14; 6:13)";
- the ch. 14 deep section: "The law of Moses and the prophets had kept priest and ruler apart (Numbers 27:21; Zechariah 6:13)";
- the church-and-state topic: "The Law had divided these tasks (Numbers 27:21)".

**The evidence.**
- No law forbids one man to hold both offices. Numbers 27:21 describes Joshua and Eleazar working together; it does not legislate that the roles stay separate.
- Zechariah 6:11–13 has a crown set on the high priest Joshua's head and "a priest on his throne". Many read that as joining the offices, not dividing them.
- Melchizedek (Genesis 14:18; Psalm 110:4) is a priest-king, and N83 itself cites him as the Hasmoneans' model.

**Fix.** "In Israel's history the offices had usually been held by different men (Numbers 27:21; Zechariah 4:14), though Zechariah 6:11–13 and the figure of Melchizedek point the other way." Do the same in all three places.

### 13. MINOR: inconsistent conversions of the Seleucid year 172

- **N57 (14:1):** "The year 172 is 141/140 BC". That is the autumn, Macedonian count.
- **N74 (14:27):** "The year 172…, counted from spring 311 BC, runs from spring 140 to spring 139 BC".

N47 explains both counts, but the part should say which count N57 uses. Write "172 is 141/140 BC by the Macedonian count used for Seleucid court events, 140/139 BC by the Jewish spring count", or simply "140 BC". The other conversions check out: 170 is 143/142, 171 with Iyyar is spring 141, 18 Elul 172 is September 140, 174 is 139/138, and Shebat 177 is February 134.

### 14. MINOR: the date of 1 Maccabees and its first readers, stated more firmly than book.json states it

book.json: "Many date it around 100 BC, late in John's reign (134–104 BC) or early in that of Alexander Jannaeus." This part is firmer:
- N40: "most likely after John Hyrcanus died in 104 BC";
- the 12:3 `readers`: "If, as most scholars think… soon after John Hyrcanus died… its first hearers were supporters of the Hasmonean house under Alexander Jannaeus";
- the 13:3–6 `readers`: "subjects of Simon's grandson";
- the ch. 16 summary: "most likely after his death".

The 12:3 card carries `views` for the minority dating, which is good. But the "subjects of Simon's grandson" line on 13:3–6 states the majority date as settled, and nothing in the evidence identifies the hearers as Jannaeus's *supporters*. Write "subjects of John Hyrcanus or of his son", or "readers under the later Hasmoneans".

The 12:3 card also says "Origen and Jerome still knew a Hebrew text". Origen (Eusebius, *Church History* 6.25.2) gives only the Semitic title, *Sarbēth Sabanaiel*. Jerome alone says he found the book in Hebrew. book.json words this correctly ("Origen gives its Semitic title").

### 15. MINOR: lens views that only restate the canon card, or are unsourced

**Views that restate book.json.** These say nothing distinct about the chapter, and in substance they repeat book.json's canon card ("Is 1 Maccabees inspired Scripture?"):
- ch. 12 views.C (Trent, 1546);
- ch. 16 views.C (Trent; *Dei Verbum* 11);
- ch. 16 views.P (Article VI).

The Luther preface is given twice, in ch. 13 views.P and ch. 14 views.P. Keep it once, at most.

**Views that need a source.** These need a source that addresses the question itself:
- **ch. 14 views.C.** "Catholic readers have read the expected 'faithful prophet' of 14:41 in the light of that hope". *City of God* 18.45 is accurately summarized (no prophets after the rebuilding, Herod the first foreign king, Genesis 49:10, Christ's birth), but Augustine does not discuss 14:41.
- **ch. 14 views.P.** "Protestant readers who hold that Scripture ends with the prophets have found support in 14:41". Name one; for example, Whitaker's *Disputation on Holy Scripture* argues from the lack of prophets in Maccabees. Otherwise soften the claim.
- **ch. 15 views.P.** "Protestant readers have often read Simon's answer… in debates about the promised land".
- **ch. 16 views.P**, second sentence ("Many Protestant readers have used the book's ending… as evidence").

**Fix.** Name a writer for each, or soften to "some readers", or drop the views.

### 16. MINOR: smaller translation points

- **12:47.** ὡς δισχιλίους is "about two thousand". "About" is dropped.
- **12:53.** ἐξαροῦμεν… τὸ μνημόσυνον αὐτῶν means "remove their memory". "All" is added.
- **13:6.** "to wipe us out out of hatred" reads badly. Use "because they hate us".
- **14:38.** κατὰ ταῦτα is "accordingly" or "in keeping with these things". "Because of these things" makes the decree claim more than the Greek does.
- **15:25.** "so that no one could go out or come in". The Greek shuts *Tryphon* in (συνέκλεισεν τὸν Τρύφωνα τοῦ εἰσπορεύεσθαι καὶ ἐκπορεύεσθαι). Use "so that he could not go out or come in".
- **15:19.** τὰς χώρας αὐτῶν is plural: "their countries".
- **14:23.** ℵ* and V read "we wrote" (`εγραψα ℵ*`, `εγραψαμεν V`), which the KJV follows ("we have written"). Because this changes who writes to Simon, add a short entry.
- **15:30.** "outside the borders" agrees with ℵ's added ἐκτός. Swete's τῶν ὁρίων τῶν ἐκ τῆς Ἰουδαίας allows it, but a `deb` note would be honest.

### 17. MINOR: notes: small accuracy points

- **N95 (15:11).** "lead sling bullets that some connect with this siege" undersells the evidence. One sling bullet from Tel Dor is inscribed "For the victory of Tryphon" and dated to 138/137 BC (Dov Gera, "Tryphon's Sling Bullet from Dor," *IEJ* 35, 1985, 153–163). Say so.
- **N91 (15:5).** "beside 'whatever other gifts they released'" quotes ℵV's δόματα, not Swete's text (ὅσα ἄλλα ἀφαιρέματα, Plain English Translation "any other exemptions"). Quote the Plain English Translation.
- **N101 (15:27).** "Demetrius I, 10:1–46" promised much, but the Jews refused his offer (10:46), and he never got strong enough to take it back. Use another example, or cite only Demetrius II (11:53).
- **N48 and N92.** Both explain the coins in full (once credited to Simon, now dated to AD 66–70; the first Hasmonean coins from Yehohanan or Jannaeus). Keep the full point in N92 and cut N48 back to a cross-reference.
- **N83 and the ch. 14 deep section.** The card at 2 Chronicles 26 asks "What power may rulers have over the church?". The part describes it twice, in different words ("Whether one man should hold religious and civil power together…" and "Whether the church should be ruled by, or rule over, the state…"), and neither matches the card. Use the card's own question.

### 18. MINOR: glosses.json

- **Synonyms, not glosses.** These give the Plain English Translation back in other words. Cut them, or replace them with glosses on customs or offices:
  - 12:31 "took their plunder → seized their goods as war booty";
  - 12:50 "marched in close order → kept together in tight ranks";
  - 13:7 "their spirit came alive again → they took heart again";
  - 13:27 "polished stone → smooth-cut, dressed stone";
  - 14:45 "liable to punishment → subject to penalty under the law";
  - 16:15 "a great drinking party → a feast with heavy drinking";
  - 16:17 "paid back evil for good → returned kindness with betrayal".
- **14:24, "a thousand minas → an enormous weight of gold".** This contradicts N71, which argues that the figure is the shield's value, not its weight. Use "a vast sum in gold".

### 19. MINOR: consistency with the other parts and terms.json

- **12:43 "his friends… his friends".** terms.json says the Seleucid court rank φίλοι is capitalized ("Friend of the King… capitalized"). This part capitalizes it at 14:39, 15:28 and 15:32, but not here, where Tryphon presents Jonathan to his courtiers. Write "all his Friends".
- **12:3 "the Senate house" against 8:15 "a council chamber".** The same word, βουλευτήριον, has two renderings. Either is fine, but N3 should mention the 8:15 rendering.

### 20. MINOR: settings `readers` lines

These rest on evidence and are mostly passage-specific, which is an improvement on the stock lines that earlier reviews found. Two are speculative:
- **15:16–21:** "After Pompey… Jewish readers of the Greek translation read the letter in a very different light." No source shows how they read it. Cut it, or mark it as a likelihood.
- **15:2–9:** "the right to mint was later used by Simon's successors". This is correct, but it depends on N92's coin dating; cite 15:6.

### 21. MINOR: the ch. 12 deep section and the abraham topic on Goldstein

"Others, such as Goldstein, defend all three" (letters) is correct: Goldstein accepted both Areus's and Jonathan's letters. But the abraham topic says only that "Jonathan Goldstein defends the letter". That is fine, but list the other defenders too, as book.json does ("Goldstein, Katzoff and others"), so the debate does not look like Goldstein against everyone.

## Checked and found sound

- **Translation.** Apart from the items above, it is faithful verse by verse in names, numbers and who does what. These choices are good:
  - 12:50 (the false report, with N25);
  - 14:26 ("freedom for Israel", with N72 giving the alternative);
  - the doubled clause at 14:42–43, kept, with N84;
  - 15:25 "on the second day" (with N100);
  - 16:4 "He chose" (with N109);
  - 16:10 "set it on fire" (with N113).
- **The two disclosed departures from A.** 15:22 (Ariarathes) and 15:23 (Sampsames) are handled openly and correctly.
- **The other variant entries** match Swete's apparatus and the Latin: 12:7 (apart from the iota), 12:20, 12:43, 13:17, 13:20, 13:37, 13:43 Gaza/Gazara, 13:52, 14:28, 14:35, 14:48, 15:18, 15:39, 16:8, 16:10, 16:16 and 16:17.
- **The KJV-only entries** are honest: 13:37 "scarlet robe" and 14:35 "sang" are both said to be in no witness Swete reports.
- **The `fixed` list.** It is respected: 12:33, 14:35, 14:43, 15:13, 15:17 and 16:10 all match the corrected text. I found no new typo to report.
- **Traditions.** This part has no cards of its own. Every pointer leads to a card that exists:
  - book.json "Is 1 Maccabees inspired Scripture?" and "…prophets were no longer seen… Does that rule it out as Scripture?";
  - 2 Chronicles 26 (church-and-state);
  - Numbers 34 (promised-land);
  - Psalm 72 (millennium).
  
  No card is duplicated.
- **Status.** The book is never called Scripture in the site's voice. "Scripture" is used only of the Jewish holy books or the 66, and church positions are attributed to the churches.
- **Cross-references, both ways.** Psalm 146:3, 1 Kings 19 (Elijah), 2 Samuel 21:12–14, Leviticus 26, Micah 4:4, Zechariah 8:4, Judges 11, Numbers 10:9, Genesis 44:4, Psalm 35:12, 1 Kings 11:41 (the closing formula, with the LXX ἰδοὺ ταῦτα γέγραπται), Deuteronomy 18:15 and John 1:21, Acts 2:10, 9:1–2 and 24:5 (λοιμός), and 2 Corinthians 11:32 (ethnarch). All are apt.
- **Names and terms.** These match the other parts and terms.json: Modein, Gazara, Beth-zur, Joarib, the Citadel, Heaven (capital H), "lawless", "general/governor" for στρατηγός, and "the Gentiles".
- **Copyright.** Apart from finding 2, I found no sentence shape that depends on the NRSV, RSV, NABRE, NJB, CEB, GNT, NETS or Goldstein.

## Claims verified (web search, 2026-10-24)

**Josephus** (Whiston's translation via lexundria.com, unless noted)
- ***Antiquities* 12.225–227.** Confirmed. Areus writes to an Onias who succeeded his father after the father's death, which places it later than Onias I. N5's "attaches it to a later Onias" is right.
- ***Antiquities* 13.163–212.** Consistent with standard summaries: Jonathan's embassies, Tryphon's trap and Simon's rise. Not opened in full.
- ***Antiquities* 13.211–212.** Confirmed: seven pyramids of white polished stone, "preserved to this day".
- ***Antiquities* 13.215.** Confirmed: Simon took "Gazara, Joppa, and Jamnia". So the Gazara argument at 13:43 is sound.
- ***Antiquities* 13.228.** Confirmed: Ptolemy took Simon's wife and two sons and "kept them in bonds". N118 and the ch. 16 views.H are right.
- ***Antiquities* 13.236–248.** Confirmed: the siege (236–240), the truce for the Feast of Booths and the sacrifices (241–243), "all men called him Antiochus the Pious" (244), and the tribute and hostages (246–247).
- ***Antiquities* 13.288–292.** Confirmed: a man tells Hyrcanus, "lay down the high priesthood" (13.291).
- ***Antiquities* 14.145–148.** Confirmed: the decree of the praetor Lucius Valerius, with envoys including "Numenius, the son of Antiochus" (14.146).
- ***Antiquities* 16.163.** Confirmed: "Hyrcanus the high priest of the Almighty God" (θεοῦ ὑψίστου), of Hyrcanus only (finding 11).
- ***Antiquities* 1.239–241.** Consistent (Cleodemus Malchus on Keturah's sons, Africa and Heracles; Wikipedia, Harland). Not opened.

**Fathers, rabbinic texts and the Josippon**
- **Augustine, *City of God* 18.45.** Confirmed (NPNF via CCEL): no prophets after the rebuilding, the Maccabean wars, Herod "the first king of a foreign race", Genesis 49:10, and Christ born under him. On how it is used, see finding 15.
- ***Kiddushin* 66a, *Berakhot* 29a, *Rosh Hashanah* 18b, *Ma'aser Sheni* 5:15.** As I know them, and as the part states: Yannai and "the crown of priesthood"; Yohanan high priest for eighty years who became a Sadducee; the dating formula abolished; Yohanan's tithe reforms. Not opened.
- **Eusebius, *Church History* 6.25.2.** Origen's title *Sarbēth Sabanaiel* is standard. Not opened. It supports "Origen gives its title", not "knew a Hebrew text" (finding 14).
- **Josippon.** Southern Italy, mid-900s (953 is the usual date; Oxford Josephus project). Confirmed.

**Dates**
- **Areus I and Areus II.** Areus I reigned 309–265 BC, and Areus II died as a child about 254 BC. Onias I is about 300 BC. All are standard.
- **Mithridates I** "about 165–132 BC". This follows the current revised dating (Wikipedia). Acceptable.
- **The Seleucid-era conversions.** All correct, apart from the inconsistency in finding 13.

**Text and archaeology**
- **Goldstein and Gazara (13:43).** Goldstein's correction to Gazara is the standard one, and Josephus 13.215 supports it. I did not see Goldstein's page, but the entry rightly attributes the correction to modern scholars, not to a manuscript.
- **Megillat Ta'anit, 23 Iyyar.** Confirmed: "the garrison departed from Jerusalem" (attalus.org translation).
- **The Givati excavations as the Citadel.** Confirmed: the IAA announced it on 3 November 2015, as a proposal. N18 rightly says "have been proposed".
- **The Dor sling bullets.** Confirmed, and stronger than stated: one bullet is inscribed for "the victory of Tryphon", dated 138–137 BC (Gera, *IEJ* 35, 1985; Inscriptions of Israel/Palestine, tdor0003). See finding 17.

**The authenticity debates**
- **The Spartan letters (12:5–23).** Confirmed (*Scripta Classica Israelica* survey):
  - Goldstein accepts both letters.
  - Gruen rejects Areus's letter as a Jewish construction.
  - Hengel, Habicht, Bickerman and Stern treat it as a Jewish fabrication.
  - Bremmer denies any real contact.
  
  The part presents the debate fairly.
- **The Roman letter (15:15–24).** Its form is accepted as Roman, and the consul's identity is debated. ISBE favors the consul Calpurnius Piso of 139 (finding 6).

## Fixes applied

Applied 2026-10-24 by the part writer. I accepted every finding, apart from the partial rejections marked below. `VERBOSE=1 node tools/build.js --check 1Ma/12-16`: 0 errors, 0 warnings (220 verses, 122 notes, 28 variants, 61 glosses, 5 chapter pages, 15 topic contributions).

1. **Silent departures (major).**
   - 12:52 ("Israel mourned"), 13:33 ("the stronghold of Judea… walled it around") and 15:31 ("they will come…") now follow Swete's text.
   - At 12:45 the Plain English Translation now reads "the many troops", which is Swete's text.
   - New variant entries: 12:45, 12:52, 13:33, 15:31, 15:6 (A's bare infinitive against ℵV's "and I permit you") and, from finding 16, 14:23 ("they wrote" against ℵ*V "we wrote") and 15:30 (ℵ's ἐκτός).
   - Each entry gives the Latin where I checked it.
2. **NRSV-tracking wording (major).** Rebuilt from the Greek:
   - 12:15 and 16:3 "the help from Heaven", with the note anchors, the spec box and the 16:3 note's quotation changed to match;
   - 13:51 "crushed and cast out of Israel";
   - 13:29 "Around these he made works of skill, setting great columns about them";
   - 13:27 "built on top of the tomb… raised it high for all to see, faced with smoothed stone";
   - 12:36 "a great rampart";
   - 15:3 and 15:21 "troublemakers";
   - 14:5 "made an entry to the islands";
   - 14:36 "struck a great blow at its holiness".
   - I kept 15:32 "sideboard": it is the lexicon meaning, and the reviewer accepts it.
3. **1:3 (major).** The 16:13 note and the ch. 16 section "Three brothers, three deaths" now say that the book opened with Alexander, whose "heart swelled with pride" (1:3, quoted exactly from the 01-04 Plain English Translation), and with Antiochus IV, who entered the sanctuary "in his arrogance" (1:21).
4. **Witness labels (major).**
   - 12:7: reading 0 is now "Swete's text", the letters are given as ΠΑΡΑΔΑΡΙΟΥ, and the reconstruction "παρὰ Δαρείου" is removed.
   - 12:7 also has a `b` line saying that Swete corrects A from ℵ or V in a few places (12:18, 12:21, 13:43–44, 15:17, 15:23), so that the other places are covered.
   - 12:19: reading 0 is "Swete's text, dividing the letters as Sinaiticus' first hand seems to". A (Oneiares) is moved to reading 1, which removes the contradiction.
   - 12:20: reading 0 is "Swete's text".
   - 13:43: new entry for the siege tower, which A lacks. The tower is in Swete's text, supplied from ℵ and V; at 13:44 A has πόλει. The 13:43 note now says so.
5. **12:45 note.** Now says Demetrius I offered Ptolemais (10:39), with 5:15, 22 and 12:48 for the hostility.
6. **15:16 note.** Gives both Metellus (consul 142) and Calpurnius Piso (consul 139, assuming a slip in the first name).
7. **12:23 note.** Quotes the site's 1 Kings 22:4. The 2 Chronicles 18:3 attribution is gone from the text and from `r`.
8. **12:16 note.** Jason is now attributed to 2 Maccabees.
9. **12:15 note.** Now says that, in the text printed here, the book never names God as "God" or "Lord".
10. **12:21 note.** ἐγγενοῦς is now explained as a spelling of ἐκ γένους.
11. **14:41 note and the priesthood topic.**
    - The Wicked Priest wording is corrected ("is often identified with Jonathan or Simon").
    - The title is now given as Augustus's decree about Hyrcanus II (*Antiquities* 16.163), plus *Rosh Hashanah* 18b. bavli-rosh-hashanah is added to the note's sources.
12. **Priest and ruler.** Reworded in all three places (the 13:42 note, the ch. 14 deep section, the church-and-state topic) to "usually held by different men… though Zechariah 6:11–13 and Melchizedek point the other way".
13. **14:1 note.** Now gives both counts for the year 172.
14. **Dating and readers.**
    - The 13:30 and 16:24 notes, the 12:3 card (its `readers` and its `views`), the ch. 16 summary, the ch. 16 views.H, the deep section and the hasmoneans topic now say "around 100 BC, late in John's reign or early in Jannaeus's".
    - 13:3–6 `readers` now says "under the later Hasmoneans".
    - The 12:3 `readers` line now says that Origen gives the Semitic title and Jerome says he found the book in Hebrew.
15. **Lens views.**
    - Removed: ch. 12 C (Trent; the Old Latin point is kept), ch. 16 C and P, and ch. 15 P. The Numbers 34 pointer moved into the deep section "Whose land?".
    - Luther is kept only in ch. 13 P.
    - Ch. 14 C now says only what Augustine says, and states that he does not discuss 14:41.
    - Ch. 14 P now names William Whitaker's *Disputation* (1588). **Partly rejected:** I did not add the source key, because a chapter view carries no `s`. The citation is inline, and it reuses Tobit's whitaker-disputation key only by name.
16. **Translation points.**
    - Changed: 12:47 "about two thousand", 12:53 "wipe out their memory from among men", 13:6 "because they hate us", 14:38 "In keeping with these things", 15:25 "so that he could not go out or come in", 15:19 "their lands".
    - 14:23 and 15:30 are handled by new entries (see 1).
17. **Notes.**
    - 15:11 now names the inscribed "For the victory of Tryphon" sling bullet (Gera, *IEJ* 35, 1985).
    - 15:5 now quotes the Plain English Translation ("any other exemptions").
    - 15:27 now cites Demetrius II and Tryphon in place of Demetrius I.
    - The 13:42 coin passage is cut back to a pointer to 15:6.
    - Both pointers to 2 Chronicles 26 now use the card's own question.
18. **Glosses.**
    - Cut: 12:31, 12:50, 13:7, 13:27, 14:45, 16:15 and 16:17.
    - 14:24 now reads "a vast sum in gold".
19. **Consistency.**
    - 12:43 now reads "all his Friends… his Friends".
    - The 12:3 note now gives the 8:15 rendering "council chamber".
20. **Readers lines.**
    - 15:16–21 is now marked as a likelihood.
    - 15:2–9 now cites 15:6 and its note.
21. **Spartan letters.** The ch. 12 deep section and the abraham topic now name Goldstein and Katzoff as defenders. The abraham topic also names Hengel and Bickerman, with Gruen, on the other side.

**Lanes.** Under tools/lanes.md the topic cores hasmoneans and seleucids, which I created earlier in content/topics/, were moved unchanged to content/proposals/works/topics/. I did not edit terms.json or any existing topic core.
