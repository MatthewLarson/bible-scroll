# Hostile review: Shepherd of Hermas, part 001-024 (Visions 1-4, chapters 1-24)

## Verdict

The part is careful and honest in its handling of Lake. I found no invented source, reading or fragment: every Lake footnote I checked against the local scan (OCR `apostolicfathers02lakeuoft.txt`) and `texts/src/Hrm.app.json` is quoted correctly, and Clement of Alexandria (*Stromata* 2.1, 2.12, 2.13) and Tertullian (*On Modesty* 7, 10) say what is claimed (checked this session on newadvent.org). The translation is mostly faithful. The serious problems are these:

- one mistranslation with a lost antecedent (24:4);
- the key verb μετανοέω rendered three ways;
- an "understanding" clash;
- a misreading of the "some asleep, some living" clause (13:1);
- a variants file that omits about a dozen Sinaiticus omissions and one reading Lake prints;
- one sentence pasted into five `readers`, with a date presented as settled;
- many "clearest / earliest / most / every church" claims and unsourced background facts, which STYLE rule 2 forbids.

`node tools/build.js --check Hrm/001-024` (VERBOSE) gives "3 errors, 0 warnings". All three are in `Hrm/book.json` `canon.cited_in` (39:6, 29:6, 93:5 "not a verse of Hrm"). They belong to the book-level writer and are not this part's; reported for the lead.

Counts: 0 critical, 9 major, 15 minor.

## Findings

### Major

**1. 24:4: lost antecedent and a wrong "their fire" (plain.txt, variants 24:4).** Greek: οἱ κατοικοῦντες ἐν αὐτοῖς. οἱ οὖν μείναντες καὶ πυρωθέντες ὑπ᾽ αὐτῶν καθαρισθήσεσθε. The "them" is "blood and fire" (24:3). Lake's footnote (OCR 3561 area; variant `why`) says exactly that.
- The Plain English Translation has "you who live among them are being tested too. ... those who hold out and go through their fire". After 24:3 the reader gets "among them" with no referent, and "their fire" turns "burned by them" (ὑπ᾽ αὐτῶν, agent) into a possession.
- The A/E reading "in it" (this world) is the one a reader would otherwise assume.
- Fix: "you who live in the midst of them (the blood and the fire)" and "those who stay and are refined by them". Put Lake's explanation in the note. Note 113 mentions it only in passing.

**2. μετανοέω is a key term (terms.json; brief: "repent") but is rendered "be sorry" at 1:9 and "change their minds" at 15:3.** The same verb is "repent" everywhere else, including 11:2, 13:5 and 21:4.
- 1:9 μετανοήσουσιν αἱ ψυχαὶ αὐτῶν: the plain text decides, on the writer's reading ("regret without hope"), what the Greek leaves open. Lake keeps "repent". Lake's apparatus (3:2 line) also notes a subjunctive/future variant at 3:2 that is not entered.
- 15:3 is defended in note 79, but "so the reader is not misled" is an editorial choice in the book's most doctrinal word.
- Fix: translate "repent" in both, and carry the irony and "too late" readings in the notes. If the lead wants an exception, it needs a terms.json entry with a "why", which the Man. entry has as a model.

**3. "Understanding" is used for two Greek words inside this part, and the part conflicts with the site's existing terms.**
- 3:4 σύνεσις "great understanding", and 16:5, 16:7 Ἐπιστήμη "Understanding".
- terms.json (Baruch 3:9) fixes σύνεσις = "discernment" and ἐπιστήμη = "understanding", and 4 Maccabees also has ἐπιστήμη = "understanding".
- The writer therefore broke the Baruch entry at 3:4, and 078-092 (92:2) repeats the break: Σύνεσις "Understanding" on the virgins' list.
- Fix for this part: 3:4 "discernment" (or another word kept apart). Lead: align 078-092 and the `proposals/works/terms.json` entries (rows 6 and 27 now collide).
- Related: ἀσύνετος at 14:5, 16:9 and 18:9 is "dense / senseless / without understanding" with no rule.

**4. 13:1 misreads the clause "some asleep, some still living" (note at 13:1 `a: apostles and overseers...` and chapter 13 `views.H`).**
- Greek: ... οἱ πορευθέντες ... οἱ μὲν κεκοιμημένοι, οἱ δὲ ἔτι ὄντες. The clause covers the whole four-part list.
- Note 71: "so the apostles belong to the past". Chapter 13 H: it "puts apostles in the past". The text does not say this. The apostles may be among those "still living", and the grammar cannot separate them. This is an inference stated as the text's content, on a point that bears on the date.
- The same chapter 13 H calls the verse "one of the earliest lists of church ministers from Rome": a superlative with no opened source (see 7).
- Fix: say the clause covers all four groups, so the verse cannot be used either way without a reading of "apostles", and delete "earliest".

**5. Variants incomplete against Lake's own apparatus (`variants.json`; `texts/src/Hrm.app.json`).** Entries missing for Sinaiticus omissions or differences Lake records:
- 9:2 ἐκείνης om. ℵ; 9:3 om. ℵ*; 11:1 ℵ and E omit "ἱλαρώτεροι γένωνται, καὶ ταῦτα" and alter the next sentence;
- 12:3 ℵ* omits εἰ ἄρα ... οὐκ ἔστιν; 14:1 ℵ omits καὶ μακρὰν ῥιπτομένους; 14:5 ℵ omits τοῦ αἰῶνος ... πλοῦτον;
- 14:7 ℵ omits the whole obscure sentence "καὶ γὰρ ... λίθων": note 76 discusses the sentence as Lake's obscurity and never says Sinaiticus lacks it;
- 16:11 ℵ and L1 omit "ἐντέλλομαι δέ σοι πρῶτον"; 17:8 ℵ* omits ὑμῶν; 18:8 and 20:2 ℵ omits; 21:4 ℵ and L2 omit περὶ ἀποκαλύψεως (the revelation-is-complete line, relevant to the canon question);
- 4:2 Lake prints πρῶτα against both Greek witnesses (ℵ omits, A has πρότερα, L has "priora"), with a conjecture about the archetype: a reading choice that rests on an inference and is not mentioned.
- The 24:5 `why` cites "11:1; 14:5; 18:8; 20:2; 24:7" as Sinaiticus gaps, but only 24:5 and 24:7 have entries.
- 7:4: Lake's fifth reading, "Eldad et Mudath A" (the siglum appears as "A" in the OCR and in the digital file, but A was already cited for the Greek; it may be E, as the writer suspected; I could not settle it from the OCR), is omitted from the entry altogether. Report the siglum question to the lead; add the reading with the siglum as printed.
- Fix: add entries for the substantive ones (11:1, 14:5, 14:7, 16:11, 21:4, 4:2); the trivial spelling differences (3:2, 5:4, 6:3 σου, 8:3, 10:2, 17:6, 17:9) can stay out.

**6. One sentence copied into several `readers`, and the date presented as settled (chapters.json).** Verbatim "The Christians of Rome in the first half of the 100s. The old woman orders the book read ..." appears in chapters 1, 3 (twice), 4, 5 and 24.
- "first half of the 100s" settles the date: Lake gives Pius about 148 and also "many critics" on twenty to thirty years earlier; 8:3's Clement and the Romans 16:14 Hermas point earlier.
- The brief's own lenses list the date as undecidable.
- Fix: write a `readers` that fits each setting (1:4-9, Hermas's family; 3:3-4, the congregation hearing the hymn; and so on), and drop or hedge the date, or say "Rome, in the 100s or possibly late 90s; see the book page".

**7. Superlatives and views credited to nobody (reviewer-works rule 6; STYLE rule 2).**
- Note 7 (1:6): "One of the clearest early Christian statements that God made the world out of nothing."
- Chapter 5 H: "one of the clearest pictures in early Christian writing of how a book was copied".
- Note 32 (6:3): the summary says "most read this" as a marriage lived without sex, but the body says only "may mean ... or ...". The summary contradicts the body and credits unnamed readers.
- Note 49 (8:1): "Christian readers have heard this ..." and "critics compare Jewish ideas that the world was made for Israel or for the Law". No critic named and no Jewish text opened.
- Note 50: "debated by historians and churches", with no one named. Chapter 8 D similarly.
- Chapter 16 D: "a pattern every church accepts". Chapter 13 D: "Every church reads 13:1 into its own account".
- Chapter 9 D: martyrs "an early witness to the special place the churches gave to those who died for Christ", although the text lists whips and prisons as well.
- Fix: delete, name a source opened this session, or state only what the text shows.

**8. Maximus (7:4): "bitter irony" / "warned not to deny again" stated as fact with no source.**
- Note 44 says "The message is bitter irony".
- The chapter 7 setting `why` says "To warn Maximus with irony not to deny again".
- Topic `tribulation` says he "is warned not to deny again".
- The Greek (ἐάν σοι φανῇ, πάλιν ἄρνησαι) is an imperative: "if it seems good to you, deny again". Irony is one reading. Lake's footnote offers none, and the part cites no scholar for it.
- "Maximus ... in Hermas's church ... who had denied" (note 44 `p`) also rests on the single word πάλιν.
- r cites Matthew 26:69-75 and 2 Timothy 4:10, which have nothing to do with this verse.
- Fix: state what the Greek says, say that the irony reading is an inference (with a source if one is opened), and fix the three places together. Also chapter 7 J: "shows Jewish writings outside the Hebrew Bible being read in his church" contradicts works.json, which calls the Book of Eldad and Modad "Jewish or Christian". Do not call it Jewish.

**9. Unsourced background facts and lexical claims (STYLE rule 2; none was opened).**
- Notes: 1:1 foundlings "kept and sold as slaves"; 2:1 ἀναγράφεται "used of entering a name or a debt in a register"; 2:3 ἀστομάχητος "from stomachos, the seat of anger"; 3:1 "in the Roman household the father ruled his children"; 4:1 "Early Christians faced east to pray"; 8:1 the Sibyl of Cumae as "the most famous in Italy", books of oracles "kept in Rome", "early Christians quoted them"; 17:3 "Rome was a city of great banquets and of crowds who lived on the free grain dole"; 21:3 "Greek thinkers from Empedocles on"; 22:4 bat qol as "an echo of God's speech"; 17:7 "Pharmakos ... covers medicine, poison and magic"; 19:3 acedia in "later monastic writers"; 10:1 "Christians in Rome had suffered all of these".
- Chapter 6 deep: Clement "about 200", Tertullian "about 210" and "after he had joined the strict Montanist party", Novatian "in the 250s ... the wider church restored them after penance". The Tertullian and Clement quotations are verified, but the dates and the Montanist statement are not in anything opened (the newadvent pages show the quotations, and ch. 1 of *On Modesty* calls the bishop "Pontifex Maximus"; no Montanist statement was found in what I read).
- Also variants 1:7 `b`: "a Roman freedman owed his former owner honor" and "common compliment".
- Fix: source each from a page opened this session, or cut it.

### Minor

**10. 9:2 ἐνδεὴς εἶ translated "so hungry".** Lake has "importunate". ἐνδεής means "in need, lacking". "Hungry" is an addition, and "hungry and eager" reads as a pun the Greek does not make. χονδρίζεις "where you grow your grain" is a guess: Lake has "where you are farming". I could not reach LSJ for the verb (Perseus gave 405; the search tool and the Gadsden LSJ copy returned only χόνδρος: "granule or lump of salt" and "groats"; no χονδρίζω entry), so the verb rests on Lake plus the writer's etymology, as the writer reported. The note is marked "deb", which is honest. Chapter 9 `sum` and the topics `rome` and `wealth` then state flatly that Hermas "farms" or "works a field". Ask the lead to check LSJ, BDAG or Lampe on a machine that can open them. Meanwhile gloss it as uncertain and say "in the country" in the summaries.

**11. 6:7 "pass in with the holy angels".** πάροδος is "passing, passage". Lake has "your passing", and his footnote concerns the just becoming angels after death. "Pass in" adds a direction, and note 38's "go into God's presence" is invented. Use "your passing may be with the holy angels" or "so that you may go on your way with the holy angels", and cut "God's presence".

**12. Small departures in the plain text.**
- 6:2 "a filthy mix of wickedness": "filthy" is not in συμφυρμοὺς.
- 3:1 "worn down" for κατεφθάρης ("were ruined, corrupted") softens; the note headings repeat "worn down".
- 6:1 "Fifteen days later, after I had fasted" can be read as "fasted, then fifteen days passed". The Greek is "after fifteen days, I having fasted". Use "After I had fasted fifteen days".
- 22:6 "its head looked like a clay pot" commits to "pot", while note 105 says the sense is uncertain (jar, tile, clay). Lake has "a piece of pottery"; use that. 22:6 "something from God" for θεῖον: Lake has "some portent".
- 9:6 "stop asking only about your sins": "only" is not in the Greek (πάντα ἐρωτῶν).
- 17:5 οἱ ὑπερέχοντες "you who have more than enough": the participle is "those who are above/excel" and Lake has a different sense. The rendering is defensible in context but should be noted.
- 18:7 ὑπὸ χεῖρα "again and again" is interpretive.

**13. Settings gaps.** No `settings` for chapter 10 (10:1-2 the old woman's speech), chapter 16 (the whole of 16:2-11, the old woman's explanation of the seven women and the end), chapter 18 (the woman and the young man, 18:6-10), and 22:4 (the voice). The settings of 11 (11:2-15:6) and 19 (19:1-21:4) cover only their own ranges. Chapter 9 starts at 9:6 and leaves 9:2-3 (the promise to appear) out.

**14. Note 22 (3:4) lists both Psalm 136:6 and Psalm 135:6 as separate parallels.** Lake's margin "Ps. 135, 6" is probably the LXX number for MT 136:6 (Lake mixes numberings: "Ps. 54, 23" at 19:3 is LXX, "Ps. 55, 22" at 23:4 is MT). It is a duplicate. In the site's (Hebrew) numbering Psalm 135:6 is another verse. Same issue at note 7 (1:6) with "Psalm 123:1".

**15. Note 42 (7:2) says "Lake's margin gives Hebrews 3:12".** The digital file has "Heb. 3, 15" at 7:2 and "Heb. 3, 12" at 15:2 (checked). My OCR grep found only the 15:2 reference (line 2474). The 7:2 margin is unconfirmed; the page needs checking, or the claim should say "Lake's margin gives Hebrews 3 (15:2)".

**16. Note 112/113 and Lake's "II Pet. 2, 20" at 24:3.** The reference is not a slip: it is in the OCR (line 3561, beside the Thegri note and the fire/blood lines) and in the digital file, and the verse fits 24:4 (ἐκφυγόντες τὸν κόσμον, "escaped this world"; 2 Peter 2:20 "having escaped the defilements of the world"; I did not reopen the verse's Greek, so this is for the lead to confirm). The part's notes at 24:3 and 24:4 omit the reference; add it at 24:4. The 7:4 siglum: see finding 5.

**17. Note 71 sends the reader to "the site's cards on bishops and elders (1 Timothy 3; Titus 1; Acts 20)".** The 1 Timothy 3 and Titus 1 cards are on bishops and elders; the Acts 20 card is about the Troas Sunday meeting. Note 50 (1 Timothy 3; Titus 1) is correct. The baptism cards (Acts 2, Mark 16, Romans 6) and the Romans 3 and James 2 cards exist.

**18. Naming of Eldad and Modad.** works.json: "Book of Eldad and Modad", aka includes "Modat". Note 45 `p` says "Modat", while `b` says "Modad". The agrapha topic uses "Modad" in its heading. The Plain English Translation keeps "Modat" for the Greek, which is fine, but the notes should use one form with the other explained once. Chapter 7 sum and J mix them.

**19. `glosses.json`.**
- 22:8 "with a rushing whoosh" for ῥοίζῳ is cute against a beast that could wreck a city.
- 10:8 "rough and flaking" loses the disease sense of "scabby" (ἐψωριακότες, "have the itch"), which note 62 states.
- 17:2 gloss "more than you need" asserts the meaning of ἐκ καταχύματος, and 17:4 "keeping it all for yourselves" asserts that of ἀσυνκρασία; Lake's reading of both is unchecked. I could not find a source for either (Lake's English: "unsociability"-type renderings were not located; the OCR does not carry the footnote), so mark them uncertain or drop the gloss.
- 11:1 "You are a clever one, aren't you" is a one-way softening of πανοῦργος.

**20. Cross-part claims the writer made about other parts, to align (not reviewed here).**
- Notes 60, 61, 68, 73 and 81 state facts about Similitude 9: 89:8 six glorious angels at the right and left, 90:2 the virgins are "holy spirits" and "powers of the Son of God", 86:7 and 90:5 "one stone", 82:1 and 91:2 the building halted.
- They come from the writer's script count and Lake, not from the 078-092 text. Check them against 078-092 after its fixes.
- Note 60's "stands on a great rock with a gate ... among twelve mountains, and is built by virgins" also needs the 078-092 writer's own wording.

**21. Invented connection: "his farm".** 22:2 says ὑπῆγον εἰς ἀγρόν ("into the country"); note 102, chapter 22 `sum` and `R`, and variants 1:3 `b` say "to his farm" or "his farm in 9:2 and 22:2". Neither verse says the place is his. Likewise "now works a field outside Rome" (note 53) and "lost his wealth" (notes 53, 76): 14:7 says only ὅτε ἐπλούτεις, and the book does not give the loss here. Chapter 3 `R` ("loss of fortune", "trading class") has the same inference.

**22. Contribution gaps.** The brief lists `sibylline-oracles` (mention only) among 001-024's topic contributions for 8:1; there is none in `topics.json`. The `church` and `rome` contributions are good. `rome` says Hermas's visions come "in his field outside the city (9:2)", with the same inference as finding 21.

**23. Smaller points in notes and chapters.**
- Note 63 and chapter 11: "a sly man" for πανοῦργος; Lake gives no parallel I found. A gloss note on the choice would help.
- Note 47 r "Acts 16:16" (the Python spirit girl) is a weak link to the Sibyl.
- Note 108 passes on Lake's "Hebrew word ... sagar, found in Dan. 6:22". Daniel 6 (6:23 in the MT) is in the Aramaic section; the Hebrew and Aramaic roots are the same, but say so.
- Note 17 "pansemnon 'all-holy'": the word is "all-venerable, very dignified"; the plain text "holy" is a stretch too.
- Chapter 1 H: "the only facts Hermas tells about himself" is false: the Visions give more, and Similitudes later.
- Chapter 1, 22 and 23 `links` and `links` for 8 (Pope Clement I): the labels are fine; not checked against link targets.
- Note 44: "Maximus ... He is offered the promise of 6:8 only if he does not do it again" is garbled (6:8 is about those who deny in the days to come).

## Verified this session (no action)

- Lake footnotes quoted in notes 1, 29 (continuous script), 34, 38, 45, 56, 69, 76, 80, 108, 113 and in variants 1:1, 1:3, 3:4, 6:8, 7:4, 9:6, 13:4, 15:6, 24:4: all match OCR or Hrm.app.json.
- Variant sigla and readings match Hrm.app.json for 1:1, 1:3, 1:7 (two), 3:1 (and Amherst at 3:1; Lake's list gives it as containing Vis. 1.1-2.?), 3:4, 5:1, 5:3, 6:4, 6:8, 9:6, 9:9, 10:5, 10:7, 13:2, 13:4, 14:2, 15:6, 16:4, 17:10, 18:4, 19:1, 22:1, 23:4, 24:4, 24:5, 24:7. "N%2" is ℵ* (first hand) per the OCR (lines 1316, 1695).
- 6:8 matches the lead's brief (ℵ* Χριστόν, ℵc ΑL2 κύριον, L1 filium).
- Clement of Alexandria *Stromata* 2.1 ("For the power that appeared in the vision to Hermas said, Whatever may be revealed to you, shall be revealed"), 2.12 ("The virtue, then, that encloses the Church in its grasp, as the Shepherd says, is Faith") and 2.13 ("the first and only repentance from sins"; "ought to sin no more"): verified on newadvent.org/fathers/02102.htm (the 2.12 sentence was cut at the tool's character limit after "is Faith"; the rest of note 82's quotation was not seen).
- Tertullian *On Modesty* 10: "the scripture of the Shepherd", "the only one which favours adulterers", "among apocryphal and false (writings)", "the ewe of (your) second repentance"; chapter 7 has the ewe parable (newadvent.org/fathers/0407.htm). The writer's `sources-checked.md` is at `.scratch/Hrm-001-024/` (the relevant file); consistent.
- Amherst, Oxyrhynchus and Berlin papyri: Lake's list was read for the Amherst range only.

## Fixes applied
1. Fixed. 24:4 rebuilt from the Greek: "you too are being tested, you who live in the midst of them, the blood and the fire. So those who hold out and are put through the fire by them will be made clean" (Lake's English opened: "you who live among them ... pass through the flames shall be purified by them"). Variant 24:4 re-anchored; note 113 now quotes Lake's footnote and explains the agent.
2. Fixed (lead decision 3). 1:9 "Their souls will repent, but they have no hope" (Lake: "Their hearts will repent; yet have they no hope"); 15:3 "they repent of it" (Lake "they repent"). Notes 11 and 79 carry the regret / irony senses; terms entry updated. The 3:2 mood variant (μετανοήσουσιν ℵ / μετανοήσωσιν A) left out as trivial, per the review's own list.
3. Fixed (lead decision 1). 3:4 σύνεσις "discernment"; 16:5, 16:7 stay "understanding" (note 84 says so); ἀσύνετος made "senseless" at 14:5, 16:9, 18:9 (gloss and note 64 updated); Hermas entry in proposals/works/terms.json gains σύνεσις = discernment and ἀσύνετος = senseless.
4. Fixed. Note 71 and chapter 13 H now say the "fallen asleep / still living" clause covers all four groups and cannot date the book; "earliest" deleted; chapter 13 D's "every church" sentence cut.
5. Fixed. New variants 4:2 (Lake's πρῶτα by inference), 11:1, 14:5, 14:7, 16:11, 21:4; 7:4 gains the fifth form "Eldad et Mudath" with its siglum A as printed (scan and digital file agree); 24:5 `why` corrected. For the lead: at 4:2 the scan has "S* A ... S* omits" where the digital file has "Na A ... N omits", so the entry says only "a hand of Sinaiticus"; the 7:4 siglum A for a Latin form looks like a misprint (E?).
6. Fixed. Every `readers` rewritten for its own setting (1, 3:3-4, 4, 5, 8:1, 24); the date "first half of the 100s" removed.
7. Fixed. Cut or narrowed: note 7 "clearest", chapter 5 H "clearest", note 32 "most read", note 49 "Christian readers / critics", note 50 "debated by historians and churches", chapter 16 D and 13 D "every church", chapter 9 D martyrs sentence (now quotes the list).
8. Fixed. Note 44 states the Greek (a command), gives irony as one reading, says "again" implies an earlier denial, r now Matthew 10:33; Luke 12:9; chapter 7 setting `why`/`to`, sum, J ("a book outside the Hebrew Bible", not "Jewish"), and topic `tribulation` aligned.
9. Fixed. Cut: note 1 foundling sentence, ἀναγράφεται register claim, stomachos, Roman father, facing east, Rome's banquets and grain dole, Empedocles, bat qol (note 103 now Lake's English plus John 12:28-29), pharmakos range, acedia (note 99, chapter 19 D), "Christians in Rome had suffered all of these" and crucifixion line (note 59), variant 1:7 freedman. Sibyl facts now sourced (Wikipedia "Cumaean Sibyl", opened this session: Greek colony near Naples, Tarquinius Superbus, Capitoline, emergencies) in note 47, variant 1:3, chapter 8 R and deep. Chapter 6 deep: Clement and Tertullian dates and "Montanist" cut; Novatian now from John Chapman, Catholic Encyclopedia "Novatian and Novatianism" (opened: 251, rival to Cornelius, no restoration for idolatry, lifelong penance); "wider church restored them" cut as not in the article.
10. Partly. 9:2 "so needy and so eager"; "go to the field where you farm" (Lake: "where you are farming"); note 53 rests the verb on Lake and no longer says "now works a field"; summaries say "his field in the country". LSJ for χονδρίζω still unchecked (for the lead).
11. Fixed. 6:7 "so that your passing may be with the holy angels" (Lake's words); note 38's "God's presence" cut.
12. Partly. Fixed: 6:2 "a jumble of wickedness"; 3:1 "ruined" (Lake "corrupted"; note 19 and chapter 3 sum updated); 22:6 "a piece of pottery" (Lake) and θεῖον "something divine"; 9:6 "stop asking everything about your sins". Declined: 6:1 (the Greek, like Lake, is "after fifteen days, when I had fasted"; the reviewer's wording would assert a fifteen-day fast the Greek does not state); 17:5 (Lake: "they who have over-abundance", so "more than enough" stands, no note needed); 18:7 (Lake: "ask constantly", so "again and again" stands).
13. Fixed. New settings 9:2-3, 10:1-2, 16:2-11, 18:6-10, 22:4.
14. Partly. Note 22: Psalm 135:6 dropped from r; the body says Lake's "Ps. 135, 6" matches the site's Psalm 136:6. Note 7's Psalm 123:1 declined: the site's Psalm 123:1 ("enthroned in the heavens") is the right verse for "who lives in heaven".
15. Fixed. Note 42 now says Lake's margin gives Hebrews 3:15 here and Hebrews 3:12 at 15:2 (Hrm.app.json).
16. Fixed. 2 Peter 2:20 (site wording) added to note 113 and its r.
17. Fixed. Acts 20 removed from note 71.
18. Fixed. Notes and chapter 7 use "Book of Eldad and Modad", with "Modat" explained once (note 45, chapter 7 sum); plain.txt keeps "Modat".
19. Partly. 22:8 gloss deleted; 10:8 gloss now "rough-faced, as if with a skin disease"; 11:1 gloss "crafty, always working an angle". 17:2 and 17:4 glosses declined: Lake's English (opened) has "a superabundant share" and "this lack of sharing", which the glosses follow.
20. Fixed against 078-092's current text: notes 60 (rock and gate 79:1-2, 89:1; mountains 78:4; stones handed in by virgins 90:4), 61 (86:7, 90:5 quoted), 68 (89:8 quoted), 73 (91:2 quoted, "pause"); 81 already matched 90:2.
21. Fixed. "his farm" removed (note 102, chapter 22 sum and R, variant 1:3 b, chapter 9 sum and R, note 53); "lost his wealth" removed (note 76); chapter 3 R rewritten from 7:1 and 14:7 only.
22. Partly. `rome` fixed ("a field in the country"). `sibylline-oracles` declined as a topic: it is a works.json entry, not a topic, and the brief says "mention only"; note 47 names the Sibylline Oracles.
23. Fixed: note 47 Acts 16:16 removed; note 108 explains Daniel 6 is Aramaic (segar, 6:23 in the Aramaic numbering; texts/orig/Dan.json opened); note 17 and 2:4 now "so revered" (Lake "a revered spirit"); chapter 1 H "first facts", with 14:7 added; note 44 rewritten. Links (8, 1, 22, 23) left as they are; πανοῦργος handled by the new 11:1 gloss.
