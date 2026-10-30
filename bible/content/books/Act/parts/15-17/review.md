# Hostile review: Acts 15–17 (part 15-17)

Reviewer: hostile-reviewer (not the writer). Scope: plain.txt, notes.json, variants.json, glosses.json, chapters.json
(settings and traditions included), topics.json, sources.json; the proposal
`content/proposals/nt/topics/council-of-jerusalem.json`; the works.json entries `florilegium-4q174` and
`pseudo-dionysius` in `content/proposals/nt/works.json`. `VERBOSE=1 node tools/build.js --check Act/15-17` gives
0 errors and 0 warnings.

## Verdict

This is a strong part. I checked the Plain English Translation against the SBLGNT verse by verse and it is faithful. It keeps the
Greek's wordplay (the spirit "came out" and the owners' hope "had gone out", 16:18–19; "cast in their lot", 17:4;
"seed-picker", 17:18), handles the neuter of 17:23 correctly, and gives the decree consistently ("keep away
from", "sexual sin", "what is strangled"). "Sexual sin" for πορνεία matches Matthew 5:32 and 19:9, and
"food sacrificed to idols" matches Revelation 2:14 and 2:20. I found no invented sources, readings or finds.

I checked the points the lead raised:
- **Chrysostom.** All four attributions hold (there are four, not three). Homily 34 says the split was providential
  and did "a great good". Homily 36 has "washed them and was washed". Homily 38 has Anastasis as a goddess. On the
  Priesthood 4.7 makes Damaris Dionysius' wife.
- **Epimenides, Aratus and the altars.** The note on Epimenides (17:28, Ishodad of Merv) is accurate and properly
  hedged. So are Aratus (*Phaenomena* 5), Aristobulus (Eusebius, *Preparation for the Gospel* 13.12) and the altars
  (Pausanias 1.1.4, Philostratus 6.3, Diogenes Laertius 1.110, Jerome on Titus 1:12).
- **Amos 9:11–12.** Correct: yireshu/yidreshu and Edom/adam, the "Lord" added in Alexandrinus, Jeremiah 12:15 at
  the opening, 4Q174 and CD 7:16.
- **15:34.** Handled according to policy. The witnesses are right (C D 33 614 1739; D adds "and Judas went alone"),
  and the TR Greek is explained.
- **The four traditions cards.** These are well sourced.

The serious problems are:
- the 16:12–13 variant entries misreport the editions;
- the blood card nearly duplicates the Leviticus 17 card, and its source key duplicates an existing key;
- several notes repeat what other Acts parts already explain;
- one unsupported claim about Nicaea;
- some Byzantine/KJV differences a reader would notice have no variant entry.

**Note for 21:25 alignment.** The Greek of 21:25 (τό τε εἰδωλόθυτον καὶ αἷμα καὶ πνικτὸν καὶ πορνείαν) uses the
same nouns as 15:29. Part 21-23 should use "food sacrificed to idols", "blood", "what is strangled" and "sexual
sin" there. Its current "meat offered to idols ... anything strangled ... sexual immorality" should change. The verb
φυλάσσεσθαι can stay distinct ("guard themselves against").

Counts: critical 0, major 5, minor 21.

## Findings

### Major

**1. Major: variants.json 16:13 (and 16:12): the editions are misreported.**
- **What is wrong.** The writer's own source data (texts/auto/Act.json, from STEPBible) list NA28 with
  ἐνομίζετο προσευχή at 16:13, the same Greek as the Byzantine text and the TR. Only NA27, Tyndale House, SBL, WH
  and Tregelles have ἐνομίζομεν προσευχήν. The entry gets this wrong in three ways:
  - Reading 1's `w` names only "Later manuscripts; Byzantine text, Textus Receptus".
  - Reading 0 is silent about NA28.
  - The `why` describes NA28 as having "a different form of 'we supposed'". That is wrong: it has the other
    reading.
- **The translation of that reading is too narrow.** ἐνομίζετο can mean "was thought to be" ("where a place of
  prayer was thought to be"), not only the KJV's "where prayer was wont to be made". Reading 1's `en`/`plain` give
  only the KJV sense.
- **16:12 has the same gap.** The `why` says STEPBible lists NA28 with the manuscript reading πρώτη, but reading 0's
  `w` leaves NA28 out.
- **Fix.**
  - Put NA28 in each `w` where the edition data place it.
  - Add a sentence in both entries. The NA28 text in this data seems to follow the Editio Critica Maior of Acts
    (2017) here, while the printed NA27/UBS4 differ. Say "as the edition data report" rather than asserting the
    ECM reading.
  - Give reading 1 at 16:13 the plain "where there was thought to be a place of prayer". Note the KJV's
    "customary" sense separately.

**2. Major: chapters.json ch. 15 traditions card "Is the ban on eating blood still binding?" nearly duplicates the
Leviticus 17 card, and adds a duplicate source key.**
- **The duplicate card.** `content/books/Lev/parts/17-27/chapters.json` already has the card "Do the blood rules of
  Leviticus 17 and Acts 15 still apply, even to medicine?" (top `blood`). It gives Jehovah's Witnesses, Catholic
  (Cantate Domino), Orthodox (Trullo 67) and Lutheran (On the Councils) answers. The Acts card repeats the same
  answers with the same sources and adds only the Reformed view. CLAUDE.md asks for "one subject with many passages,
  not many copies".
- **The duplicate key.** The JW view cites a new key `watchtower-blood`, which is the same work as the existing key
  `jw-blood` ("How Can Blood Save Your Life?", 1990). The JW answer also leaves out what the Lev card has: since
  2000, minor fractions of blood are left to each member's conscience.
- **Fix, choosing one of two options.**
  - Reframe the Acts card on what is specific to the decree. Example: "Was the apostolic decree a permanent law for
    Gentile Christians or a temporary rule for shared tables?" Answers would come from Calvin, Luther, Florence,
    Orthodox canon law, and Messianic Jewish and "one law" readings.
  - Or drop the Acts card and move the Reformed (Calvin) view to the Lev card through the lead.
- **Either way.** Delete `watchtower-blood` from this part's sources.json and use `jw-blood`.

**3. Major: notes.json repeats points already made in other Acts parts.** The brief says to refer to a verse, not
repeat a point. Parallel writing explains it, but the fixer should trim:
- 15:1 "'Brothers' in Acts" (note 0) repeats 11-14's 11:1 note "'Brothers' means fellow believers".
- 15:13 "James, the Lord's brother" repeats 11-14's "James the brother of Jesus" (12:17) and 21-23's note of the same
  title. All three give Galatians 1:19, the pillars, and Josephus *Antiquities* 20.200.
- 15:37 "John Mark" repeats 11-14's "Mary's house and John Mark", "John Mark's role" and "Why did John Mark leave?".
  The Papias citation also appears in 01-04, 08-10, 11-14 and 21-23.
- 16:14 "'Worshipers of God'" (Kraabel, Aphrodisias) repeats 08-10's "God-fearers" and 11-14's "The God-fearers" and
  "Proselytes or God-fearers?". Aphrodisias also appears in 08-10 and 11-14.

Fix: cut each to what is new at this verse and point back ("see 12:17", "see 13:13", "see 10:2"):
- James: why he speaks last and his law-loyalty.
- Mark: the breach and its later healing.
- Lydia: Lydia as a God-worshiper.

**4. Major: chapters.json ch. 15 `views.T`: "the bishops at Nicaea and after used its formula, 'it seemed good to the
Holy Spirit and to us.'"**
- **The evidence.** I can find no support for Nicaea using the Acts 15:28 formula. Its canons use ἔδοξε τῇ ἁγίᾳ
  συνόδῳ ("it seemed good to the holy synod"), which echoes the verb but does not name the Spirit. The Spirit
  formula is attested for Western councils such as Cyprian's African councils and Arles (314). I did not verify
  those exact wordings, so the fixer should not add them without a source.
- **Fix.** Write: "later councils echoed its decree language, 'it seemed good ...', and some named the Holy Spirit
  as Acts does". Or cite a specific council with a source. Note 15:28 already says "Later church councils echoed
  the formula", which is safe.

**5. Major: variants.json: Byzantine/KJV differences that an English reader would notice have no entry** (brief-nt.md:
every such place gets an entry).
- **16:6.** The Byzantine text and TR have Διελθόντες ("Now when they had gone throughout", KJV). The SBL/NA have
  the finite Διῆλθον ("They crossed"). This bears directly on the North/South Galatia argument in the 16:6 note,
  which turns on the order of the participle. Add an entry and mention it in the note.
- **15:7.** SBL/NA ἐν ὑμῖν ("among you") against Byzantine/TR ἐν ἡμῖν (KJV "God made choice among us"). The Plain English Translation
  says "among you", and KJV readers will see a different pronoun. Add an entry.
- **Smaller ones.** Consider adding:
  - 15:37: ἐβουλεύσατο, KJV "determined to take" against "wanted";
  - 17:13: the Byzantine text omits "and throwing them into confusion";
  - 15:12: Bezae adds that the elders agreed with Peter, a Western expansion of the kind the brief asks for.

### Minor

**6. Minor: chapters.json ch. 16 traditions card on infant baptism in household baptisms.** The 2:38–39 card in
part 01-04 already asks whether "the promise includes infants". The Acts brief said to point to it if it covers
infants. The household question is a separate classic proof text, so keeping the card is defensible. Fix: shorten
the answers to how each tradition reads the household texts specifically. Example: Lutheran and Reformed on oikos
formulas (Jeremias against Aland); Baptist on 16:32, 34. Avoid restating the general infant-baptism answers.

**7. Minor: plain.txt: a few verses drift toward NIV wording.**
- **16:18.** The verse fronts "In the name of Jesus Christ I ..." exactly as the NIV does, differing by one verb. The
  Greek order is "I command you in the name ...". Reorder, for example "I order you, in the name of Jesus Christ,
  to come out of her!"
- **16:19.** "to face the authorities" is the NIV's phrase for ἐπὶ τοὺς ἄρχοντας. Use "before the city's rulers".
- **16:25.** "the other prisoners" adds the NIV's "other". The Greek is οἱ δέσμιοι. Write "and the prisoners were
  listening in".
- **17:26.** "From one person he made all the peoples" has the NIV's shape ("From one man he made all the nations").
  Reshape, for example "He made every nation of humankind from one ancestor, to live ...".
- **15:5 and 15:25.** These match the ESV for five or more words, but the Greek nearly forces them. The fixer may
  leave them.

**8. Minor: plain.txt 16:6 "since the Holy Spirit had stopped them".** κωλυθέντες is an aorist participle whose
timing and force are exactly what the North/South Galatia debate turns on (see the 16:6 note). "Since ... had"
settles it as cause and prior event. A more neutral rendering is "and the Holy Spirit kept them from speaking the
word in Asia", with the note explaining the participle.

**9. Minor: plain.txt 17:12 "So many of them came to believe".** This can be read as "such a large number". The Greek
πολλοὶ μὲν οὖν is "Many of them, then, believed". Write "Many of them, then, came to believe".

**10. Minor: plain.txt additions.**
- 16:15 "a true believer": "true" is not in πιστὴν τῷ κυρίῳ. Write "a believer in the Lord" or "faithful to the
  Lord".
- 16:18 "worn down and irritated": διαπονηθείς is "greatly annoyed", and "worn down" adds to it. Write "thoroughly
  annoyed". The gloss and the 16:18 note quote the phrase and would need the same change.

**11. Minor: plain.txt 15:5 "the Pharisees' school".** Other Acts parts render αἵρεσις as "party" (5:17) and "sect"
(24:5, 14; 26:5; 28:22). The 15:5 note itself shows it is one word across Acts. Use "party" (or "sect") here so the
reader can follow the word. Flag it for the cross-part alignment.

**12. Minor: plain.txt: sentences over the reading level.**
- 15:7: Peter's second sentence runs about 30 words.
- 15:22: about 28 words.
- 15:38: about 30 words.
- 17:4: about 32 words.
- 17:23: the first sentence runs about 27 words.

Split each one. For example, 15:38: "But Paul did not think it fitting to take him along. The man had walked away
from them in Pamphylia and had not kept on with them in the work."

**13. Minor: notes.json 17:32 "There is no resurrection": "The Corinthian church, a few months later, struggled with
the same doubt."** The church was founded months later, but 1 Corinthians 15 (about AD 53–55) is several years
later. Write "The church Paul founded at Corinth soon after had the same doubt a few years later (1 Corinthians
15:12)."

**14. Minor: notes.json 16:18 "In the name of Jesus Christ" misquotes 19:13.** It quotes "the Jesus whom Paul
preaches". 18-20's Plain English Translation reads "Jesus, the one Paul preaches". Quote the current Plain English Translation.

**15. Minor: chapters.json ch. 15 spec box "three witnesses" quotes James as "I rule" (15:19).** The Plain English Translation reads "my
decision is this". Quote the Plain English Translation, or mark "I rule" as a literal rendering of κρίνω.

**16. Minor: variants.json 15:18 reading 1's `plain` ends with a closing quote: "...are all his works.'"** The anchor
"things known from ages past." does not include the verse's closing ', so switching to that reading would show two
closing quotes. Drop the ' from the reading's `plain`, or extend the anchor and reading 0 to include it.

**17. Minor: variants.json 15:34 `p`.** It says the added verse is "But Silas decided to stay there". Reading 1's
`plain` is "But Silas decided to remain there." Make them the same.

**18. Minor: notes.json 16:8 Troas: "a few miles south of the ruins of Troy".** Alexandria Troas is roughly 12–15
miles (about 20 km) south-southwest of Hisarlik. Write "about fifteen miles".

**19. Minor: notes.json: some claims cite no source.**
- 16:9: "Some ancient readers took him as the guardian angel of Macedonia". Name the reader (Origen, *Homilies on
  Luke* 12, if the fixer confirms it) or remove the claim.
- 17:34: Chrysostom's guess that Damaris was Dionysius' wife comes from *On the Priesthood* 4.7, not the Acts
  homilies. Name the work and add a source key (reuse one if it exists).
- 15:14: Nils Dahl, "A People for His Name" (*New Testament Studies* 4, 1957–58), is named but not keyed.
- 17:6: Claudius' letter to the Alexandrians (AD 41, P.Lond. 1912) has no source.

**20. Minor: notes.json 15:11, Vielhauer.** The note says Vielhauer "thought the speech sounds more Pauline than
anything Peter is likely to have said". Vielhauer's point in "On the 'Paulinism' of Acts" is closer to this: the
only Pauline-sounding statement about the law is put in Peter's mouth, and its reason (an unbearable burden) is not
Paul's. Restate it that way, or name a scholar who made the attribution argument.

**21. Minor: the slave girl is treated two ways.**
- The ch. 16 reading "Read as a story of the gospel and Rome" counts "a slave girl freed from a spirit" among "three
  conversions".
- The 16:40 note lists "perhaps the freed slave girl" among the first believers. "Freed" is also ambiguous: freed
  from the spirit, but still a slave.
- The ch. 16 deep section rightly says Luke tells of her deliverance "but not of her faith".

Make all three consistent: "three people touched by the gospel", and drop her from the list of believers.

**22. Minor: chapters.json ch. 17 reading "Paul's first surviving letter was written to the church founded in this
chapter".** This is unhedged. Under the South Galatian, early-Galatians view (given fairly in the 15:2 and 16:6
notes), Galatians is earlier. Write "probably Paul's first surviving letter".

**23. Minor: chapters.json settings state debated points as settled.**
- 15:23–29 `why`: "it applied wherever Jewish and Gentile believers lived and ate together" takes the shared-meals
  view as fact. The 15:20 note gives the resident-alien view as the majority and shared meals as one view among
  several. Phrase it as purpose, without the debated point.
- 17:22–31 `to`: "The council of the Areopagus" is stated as fact, though the 17:19 note gives "a formal hearing"
  and "an informal gathering" as views. Write "The Athenians at the Areopagus, perhaps the council itself", or add
  `views`.
- Optional: there is no card for Barnabas and Paul's report to the council (15:12), or for Paul's daily debates in
  the synagogue and marketplace of Athens (17:17). These are short, but the NT brief asks for every speech.

**24. Minor: chapters.json ch. 15 card "What authority does a church council have?"**
- Anglicans hold a distinct, explicit position: Article 21 says general councils "may err, and sometimes have erred"
  and have authority only where their decisions can be shown from Scripture, yet the church receives the first four
  councils. Consider adding it.
- The Orthodox view cites only Ware. A reference to the reception doctrine (for example the 1848 Encyclical of the
  Eastern Patriarchs) would strengthen it.

**25. Minor: chapters.json ch. 15 deep "James and Amos" puts quotation marks around a rendering of the Hebrew of Amos
9:12, followed by "(Amos 9:12, put plainly)".** The site has no Amos Plain English Translation yet. When Amos is written, this will
trip the quote check or disagree with the Amos Plain English Translation. The 15:17 note does the same. Flag both for the lead to align
when Amos is done, or drop the quotation marks now.

**26. Minor: glosses.json 15:2 "apostles and elders => the Twelve and the senior leaders of the Jerusalem church".** By
this point James son of Zebedee is dead (12:2), and the leading figure, James the Lord's brother, is not one of the
Twelve. Write "the apostles (Jesus' first envoys) and the senior leaders of the Jerusalem church".

## Checked and found sound

- **Decree wording.** It is consistent between 15:20 and 15:29. 15:20 (ἀλισγημάτων, "pollution of idols") and 15:29
  (εἰδωλοθύτων, "food sacrificed to idols") differ only where the Greek differs. The order note in 15:29, that it
  follows Leviticus 17:8–18:26, is right.
- **The 15:20/29 Western readings.** Bezae and Irenaeus omit "strangled" and add the negative Golden Rule. P45 and
  the Ethiopic omit πορνεία. Bezae adds "carried along by the Holy Spirit" at 15:29. Tertullian, *On Modesty* 12,
  knows the decree without "strangled". All correct as reported by Metzger.
- **Bezae elsewhere.** The readings at 15:1, 15:2, 17:4, 17:12 and 17:34 are correctly reported, and Witherington's
  JBL 1984 article is correctly cited.
- **Quotations of other books.** All the Old Testament quotations I checked match the current Plain English Translation of Genesis,
  Deuteronomy, 1 Samuel, 1 Kings, Psalms and Isaiah. So do the Revelation 2:14 wording and Matthew 11:30 ("kind to
  wear"). "In the right way" at 17:31 matches Psalms 9:8, 96:13 and 98:9, so the departure from terms.json
  ("righteousness") is justified by the Psalm allusion. A short note saying so would help.
- **Works.json.** "Florilegium (4Q174)" and "Pseudo-Dionysius" are named per their entries. "Wisdom of Solomon",
  "Didache", "Polycarp's Letter to the Philippians" and "Damascus Document" match content/works.json.
- **Topic proposal.** `council-of-jerusalem` is the only council or decree topic in content/topics and the proposals
  folders. Its aliases do not collide with others, and the lead and sections are fair. It is good as proposed.
- **Facts checked and found correct:**
  - Izates and Eleazar (*Antiquities* 20.34–48);
  - Mishnah Kiddushin 3:12; Shaye Cohen's JBL 1986 article;
  - Philo, *Special Laws* 4.122; Plutarch, *Obsolescence of Oracles* 9;
  - Euripides, *Bacchae* 443–448; Cicero, *On the Laws* 2.19 and *Against Verres* 2.5.162;
  - Demosthenes, *On the Crown* 127 and *First Philippic* 10; Thucydides 3.38;
  - Aeschylus, *Eumenides* 647–648; Odyssey 9.416;
  - Eusebius, *Church History* 4.23.3 and 5.1.26; Tertullian, *To the Martyrs* 2 and *Apology* 9;
  - Kraabel 1981 and Reynolds and Tannenbaum 1987; E. A. Judge 1971; Robbins 1978;
  - Calvin, *Institutes* 1.3–6; Luther on Galatians 4:8; Dei Filius; CCC 36, 884, 891 and 1252;
  - Westminster 28.4 and 31; Second London Confession 26.15 and 29.2; Schleitheim art. 1; Trullo canon 67;
    Cantate Domino.

## Fixes applied
1. Partly accepted. Per the lead's decision (NA27 and NA28 have the same text of Acts; STEPBible's n/N marks there are not evidence), NA28 is now listed with NA27 for the conjecture πρώτης at 16:12 and for ἐνομίζομεν προσευχήν at 16:13; the "different form" claim is removed and each `why` says the electronic data marking NA28 otherwise are in error. Declined the ECM suggestion (no certain ECM reading in hand). Accepted the 16:13 translation point: reading 1 now "where there was thought to be a place of prayer", with the KJV's "customary" sense given in `en`, `p` and `why`.
2. Accepted (option 2, per the lead). Dropped the ch. 15 blood traditions card; the 15:29 note "What became of the decree" now points to the Leviticus 17 card and adds only what Acts adds (the "necessary things" are for a shared life, not salvation; Calvin's view that only the ban on sexual sin lasts; the Witnesses' reading of this verse), citing `calvin-acts` and the existing `jw-blood`. Removed `watchtower-blood` from sources.json. The Reformed (Calvin) view is not added to the Lev card (another book's file): for the lead.
3. Accepted. 15:1 "brothers" note now points to 11:1 and keeps only what is new (Jewish believers calling uncircumcised Gentiles "brothers", 15:23). 15:13 James note points to 12:17 and keeps why he speaks last and his law-loyalty (Josephus, Galatians 1:19, John 7:5 removed). 15:37 Mark note points to 12:12, 13:5, 13:13 and keeps the quarrel and the healed breach (Papias removed). 16:14 "Worshipers of God" became "Lydia, a God-worshiper", pointing to 10:2, 13:16, 13:43 (Kraabel and Aphrodisias removed).
4. Accepted. views.T now reads "later councils echoed its decree language, 'it seemed good ...,' and some named the Holy Spirit as Acts does." No council named.
5. Accepted. New variant entries at 15:7 (among you / among us), 15:12 (Bezae: the elders agreed with Peter), 15:37 (ἐβούλετο / ἐβουλεύσατο, "determined"), 16:6 (Διῆλθον / Διελθόντες) and 17:13 (Byzantine omits "and throwing them into confusion"). The 16:6 "Which Galatia?" note now explains the participle and points to the variant. Witnesses kept general ("older manuscripts", "later manuscripts") where no reported witness list was at hand.
6. Accepted. Infant-baptism card retitled "Did the household baptisms (16:15, 33) include infants?" and the Orthodox, Lutheran (Jeremias against Aland, new keys), Reformed (Abraham's household, "you and your household") and Anabaptist answers rewritten to the household texts; Catholic (CCC 1252) and Baptist were already household-specific.
7. Accepted. Rebuilt from the literal line: 16:18 ("I order you, in the name of Jesus Christ, to come out of her!"), 16:19 ("before the city's rulers"), 16:25 ("the prisoners"), 17:26 ("He made every nation of humankind out of one person, to live ..."). 15:5 and 15:25 kept (the Greek forces them).
8. Accepted. 16:6 now "and the Holy Spirit kept them from speaking the word in Asia"; the note explains the participle.
9. Accepted. 17:12 "Many of them, then, came to believe".
10. Accepted. 16:15 "a believer in the Lord"; 16:18 "thoroughly annoyed" (gloss and the 16:18 note updated).
11. Accepted per the lead: 15:5 "the Pharisees' party"; the note's anchor, title and text updated (party for the Jewish groups, sect where outsiders name the Way).
12. Accepted. Split 15:7, 15:22, 15:38, 17:4 and 17:23.
13. Accepted. 17:32 note reworded as proposed.
14. Accepted. 16:18 note quotes 19:13 as "Jesus, the one Paul preaches".
15. Accepted. Spec box now quotes "my decision is this" (15:19; literally "I judge").
16. Accepted. Removed the closing ' from the 15:18 reading 1 `plain`.
17. Accepted. 15:34 `p` now "But Silas decided to remain there".
18. Accepted. Troas "about fifteen miles south of the ruins of Troy".
19. Accepted. 16:9 names Origen, Homilies on Luke 12 (`origen-hom-luke`); 17:34 names On the Priesthood 4.7 (`chrysostom-priesthood`); Dahl keyed (`dahl-people`, new); 17:6 cites London Papyrus 1912 (`claudius-alexandrians`).
20. Accepted. 15:11 note restates Vielhauer's actual point (the Pauline-sounding sentence is put in Peter's mouth, and the "unbearable yoke" reason is not Paul's).
21. Accepted. Ch. 16 reading now "three people ... touched by the gospel" (two believe; of the girl only her deliverance); 16:40 note drops her from the believers.
22. Accepted. "Probably Paul's first surviving letter (unless Galatians is earlier)".
23. Accepted. 15:23–29 `why` no longer states the shared-meals view as fact; 17:22–31 `to` is "The Athenians gathered at the Areopagus, perhaps the council itself ..."; added settings cards for 15:12 (Barnabas and Paul's report) and 17:17 (the daily debates).
24. Accepted. Added an Anglican view (Article 21, `thirty-nine-articles`); the Orthodox view now cites the 1848 Encyclical of the Eastern Patriarchs (new key `encyclical-1848`).
25. Accepted. Removed the quotation marks around the rendering of Amos 9:12 in the "James and Amos" deep section and the 15:17 note (now paraphrase); the lead may quote the Amos Plain English Translation when Amos is written.
26. Accepted. Gloss now "the apostles (Jesus' first envoys) and the senior leaders of the Jerusalem church".
Also: 17:31 note now says why "in the right way" departs from the term ("righteousness"): the Psalms allusion. The 15:29 decree wording is unchanged and remains the model for 21:25.
