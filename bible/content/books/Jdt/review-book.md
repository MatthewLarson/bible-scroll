# Hostile review: Judith book-level files (book.json, sources.json, topics/judith.json)

Reviewed: `content/books/Jdt/book.json` (title, lead, facts, authorship, audience, outline, lenses, sections, spec, prompts, topics, links, reading, both traditions cards, and the whole `canon` block), `content/books/Jdt/sources.json` and `content/topics/judith.json`.

Checked against:
- the Greek in `texts/orig/Jdt.json` (Swete, Vaticanus) and Swete's apparatus `texts/src/Jdt.app.json`;
- the Latin in `texts/src/Jdt.lat.json`;
- the Plain in `parts/01-07/plain.txt` and `parts/08-16/plain.txt` (08-16 has a Plain only, no notes yet);
- the 01-07 notes.

`node tools/build.js --check Jdt` gives 10 errors. All of them belong to the parts: unknown topics `nebuchadnezzar` and `achior`, unknown keys `enslin-zeitlin-judith`, `grintz-judith` and `torrey-bethulia`, and the missing chapters.json. None comes from book.json. Every topic and source key that book.json uses resolves. There are no em-dashes. 340 verses.

## Verdict

This is careful work, and nearly every claim the writer marked "from memory" checks out against a source. That includes:
- the canon lists: Hippo/Carthage, Innocent I, Florence, Trent, Jerusalem 1672, Article VI, Belgic 6, Athanasius's "to be read", and Judith's absence from Cyril's list;
- Augustine, *City of God* 18.26, and Luther's "fine book" line;
- Holofernes the Cappadocian in 352 BC (EJ), Herodotus 1.98 and Shechem (Torrey) as Bethulia;
- the Edgecomb wording of Jerome's preface and Pope's article;
- the Rema (OC 670:2), the Tosafot and the Kol Bo, via Medan;
- the Tridentine Gradual, the Liturgy of the Hours antiphon and canticle, and the Guadalupe psalm;
- Alexander's "scarcely anything but falsehood", and the GAMEO and Coptic pages;
- the bibliography.

Judith is never called Scripture in the site's own voice. Each church's position is stated and no church is ranked. The reliability analysis is labeled as Claude's and keeps its four parts.

It is not ready to ship, for three reasons:
- **cited_in misleads under the app's heading "Where the Bible refers to it".** Two entries say in their own words that there is no link. Meanwhile parallels that the part notes and the standard lists draw are left out, and so is the strongest point of the Anna parallel, the age 105.
- **The Nicaea section tilts against the Catholic reading.** It argues from chronology the wrong way round ("still"), reads *legitur* as hearsay when it means "is found in writing", and understates Akin.
- **The moral answer on Judith's deceit is only the Augustinian-Thomist one.** It is labeled as the answer of "the churches that keep it", but the Eastern patristic tradition answers differently.

The rest are small factual slips about the story (Jael's tent, 8:1, Greek Esther), numbering, and the precision of sources.

Findings: **0 critical, 3 major, 22 minor.**

## Findings

### Major

**1. Major: canon.cited_in. Entries that are not links, and links that are missing.**
- *Where it shows.* `app/app.js` (canonPage) prints this list under the heading **"Where the Bible refers to it"**.
- *Matthew 9:36 (at 11:19)* ends "No link."
- *1 Corinthians 10:9–10 (at 8:12)* ends "Shared tradition; no one claims a link." The brief limits cited_in to places that quote, allude to, or are *argued* to depend on the book. An entry that says nobody argues a link should not be in it.
- *Matthew 9:36 also overstates "No link".* intertextual.bible lists Judith 11:19 ↔ Matthew 9:36 (citing Willitts 2016). Either rate it as a weak shared-tradition link without "No link", or drop it.
- *Missing entries.* These are drawn in the part notes or in standard lists, and none is in cited_in:
  - **Acts 7:2–53 and Acts 13:16–41** at 5:6–19: Achior's history of Israel set beside Stephen's and Paul's speeches. The 01-07 notes at 5:6 and 5:9 already make this link. intertextual.bible lists Judith 5:10 ↔ Acts 7:11.
  - **Luke 1:48, 52** at 6:19 and 7:32: *tapeinōsis*, God looking on the lowly. 01-07 notes make the link. Fold this into the Luke 1:46–55 entry, which now cites only 9:11, 13:20 and 16:5–7.
  - **Matthew 11:25 / Luke 10:21** at 9:12: "Master of heaven and earth" (δέσποτα τῶν οὐρανῶν καὶ τῆς γῆς). This is the same shared-tradition kind that the Tobit page lists at Tobit 7:17.
  - **Matthew 24:51; Matthew 8:12** (weeping) **and Revelation 14:10–11** (unending torment) at 16:17 "on the day of judgment... they will weep... forever". intertextual.bible lists Judith 16:17 ↔ Matthew 24:51 as well as Mark 9:46/48. The Mark entry could take these in.
  - **Luke 1:28 in the Byzantine text / KJV** ("blessed art thou among women"), alongside 1:42. KJV readers know the phrase from 1:28.
- *Anna (Luke 2:36–38).* The entry leaves out the strongest point. Luke 2:37 can be read as "a widow for eighty-four years" after seven years of marriage, which puts Anna at about 105, Judith's age at death (16:23). Commentators on Luke draw this parallel; one example is the Valparaiso "The Importance of Being Anna" study, and Bauckham discusses Anna at length in *Gospel Women*. Add it, with "if Luke's numbers are read this way", and anchor at 8:4–6 or 16:23 as well as 11:17.

**2. Major: canon.provenance, "What Jerome meant by Nicaea" (and rejected_why, "Jerome and the early lists"). The fairness of the Nicaea discussion.**
- *(a) The chronology runs the wrong way.* The page says: "Others note that no surviving document supports it, and that in his other prefaces Jerome still did not count Judith in the canon." The prefaces that exclude Judith come *before* the Judith preface:
  - the *Prologus Galeatus* to Samuel–Kings, about 391;
  - the preface to the books of Solomon, about 398;
  - the Judith preface, about 405–407 (sources.json; Akin; fourthcentury.com).

  "Still" implies that Jerome kept excluding the book after he had translated it, which these prefaces cannot show. "Others" also has no source.
- *(b) What legitur means.* The page says that *legitur* ("is read") is "the language of a report, not of a decree he had seen." *Synodus Nicaena... legitur computasse* means "the Nicene synod is read [that is, found in writing] to have counted it". If anything, the word points to a written source that Jerome read. Edgecomb, whom the page itself quotes, renders it "is found by the Nicene Council to have been counted". Presenting the word as hearsay weakens the Catholic reading the page is meant to give at full strength.
- *(c) Akin is understated.* Akin's article, "The First Ecumenical Council on the Book of Judith?" (Catholic Answers, 8/13/2013, checked), does more than take the remark as evidence that "some in Jerome's day believed" Nicaea had received the book.
  - He reads Jerome as reporting that the council *did* count Judith as Scripture. He suggests that council documents may still have existed 80 years later.
  - He infers, as an inference and not a proof, that Nicaea "likely recognized other deuterocanonical books as Scripture also".
  - He also says plainly that the reference "does not prove" that Nicaea dealt with the canon. Report both halves.
- *Fix:*
  - Rewrite the last three sentences: "Jimmy Akin argues that records of the council now lost may have survived into Jerome's day, so that Nicaea may really have counted Judith among the Scriptures, though he grants this does not prove it dealt with the canon as a whole. Others note that no surviving document supports the report, and that Jerome's earlier prefaces (to Samuel–Kings, about 391; to the books of Solomon, about 398) had placed Judith outside the canon."
  - Change "the language of a report, not of a decree he had seen" to "*legitur*, 'is found written', which tells us he relied on a document or report he does not name".
  - Correct the key title in sources.json to "The First Ecumenical Council on the Book of Judith?" (the question mark is part of the title).

**3. Major: canon.rejected_why, "How the churches that keep it answer", *On the lies*. Only one tradition's answer.**
- *What the paragraph gives.* It gives the Augustinian-Thomist position: lying is always wrong (Aquinas II-II q.110 a.3 ad 3; CCC 2482). The paragraph is headed as the answer of "the churches that keep it", and the Orthodox churches are among them.
- *The Eastern answer.* The Eastern patristic tradition did not hold Augustine's absolute ban on deception.
  - John Chrysostom, *On the Priesthood* 1.8–9, defends deceit used for a good end, citing generals' stratagems in war.
  - John Cassian, *Conferences* 17, discusses Rahab and other biblical deceptions with approval.
  - So the strongest Orthodox reading of Judith 9:10–13 is not "the book does not approve the means". It is closer to "deceiving an enemy who is waging an unjust war of extermination is not the sin of lying".
- *Protestant defenders.* Some Protestant moralists defended ruses of war against an aggressor, which is the Rahab question again. The page mentions only Protestant critics.
- *Verification.* The Chrysostom and Cassian references are from my own knowledge of the texts; I did not fetch them here. Check them before citing.
- *Fix:* split the paragraph:
  - "Catholic teaching (Augustine, Aquinas, CCC 2482–2485) holds that every lie is wrong, and reads the book as praising Judith's faith and courage, not the lie."
  - "Many Eastern Fathers, such as John Chrysostom (*On the Priesthood* 1.8–9), allowed deception for a just end, as in war, and Orthodox readers can read Judith's ruse as a stratagem against an aggressor rather than a lie."
  - Add the source keys. The reliability §4 "Each church's view" line ("so they read (a) to (d) in the ways given above") should then say that the two churches give different reasons.

### Minor

**4. Minor: sections, "One heroine, many forerunners": Jael's tent.** "Like Jael she welcomes an enemy general to her tent and kills him with a blow to the head." Jael welcomed Sisera into *her* tent and drove a peg through his temple (Judges 4:21). Judith is taken into *Holofernes'* tent (12:5, 13:1–2: Bagoas closes the tent from outside) and cuts off his head with two blows to the neck (13:8, ἐπάταξεν εἰς τὸν τράχηλον αὐτοῦ δίς). The parallel is real, but turned around: the enemy's tent, not hers. Fix: "Like Jael she is alone with an enemy general in a tent and kills him while he lies helpless."

**5. Minor: same section: "She traces her family to Simeon (8:1; 9:2–4)".** The genealogy in 8:1 does not name Simeon. It ends "...son of Salamiel son of Sarasadai son of Israel", that is, Shelumiel son of Zurishaddai, the leader of the tribe of Simeon (Numbers 1:6). Simeon is named in 9:2 ("my ancestor Simeon"). Say "(8:1, through Salamiel, Simeon's tribal leader in Numbers 1:6; 9:2)".

**6. Minor: same section: "like Esther and Daniel she keeps herself from Gentile food".** This holds only for Greek Esther (Addition C, 14:17 in the KJV numbering: she has not eaten at Haman's table nor drunk the wine of libations). Hebrew Esther says nothing about food laws. Say "like Esther in the Greek additions (Addition C)". Make the same change in provenance, "Esther and Daniel".

**7. Minor: the Judges 5:24 Greek.**
- *Where it appears.* cited_in, Luke 1:42: Judges 5:24 "whose Greek has 'among women' as Luke does".
- *Which Greek has it.* That holds for the Vaticanus form of Greek Judges: εὐλογηθείη ἐν γυναιξὶν Ιαηλ ... ἀπὸ γυναικῶν ἐν σκηναῖς (Swete/Rahlfs B text, checked on sacred-texts jdb005). The Alexandrinus form has ἐκ γυναικῶν twice (jda005, checked).
- *Fix:* "whose Greek (in the Vaticanus text) has *en gynaixin*, 'among women', as Luke does".

**8. Minor: section "Judith in worship...": the Liturgy of the Hours canticle "(16:2–3a, 13–15)".**
- *The reference is right but uses another numbering.* The reference is correct as the Liturgy of the Hours prints it (Wednesday Week I, Morning Prayer; the Diocese of Lake Charles table, checked). It uses the Neo-Vulgate/NAB numbering.
- *In this site's Greek numbering* the opening is 16:1–2 ("Strike up for my God with tambourines... the Lord is a God who shatters wars"). John Paul II's audience of 29 August 2001 cites it as 16:1–2a, 13–15.
- *Fix:* add "(16:1–2a, 13–15 in this site's numbering)", or give the site's numbers and say that the breviary numbers differ.

**9. Minor: lenses, "C": "its liturgy sings Judith's praise of Mary".** Judith does not praise Mary. The liturgy applies Uzziah's and the people's praise *of Judith* to Mary. Say "its liturgy applies the praises of Judith to Mary".

**10. Minor: traditions card 1, Catholic row: "'Deuterocanonical' means received later or after debate, not less inspired", sourced to `ccc`.** The Catechism (120) lists the books but does not use or define "deuterocanonical". The term comes from Sixtus of Siena (*Bibliotheca sancta*, 1566). Cite `bruns-judith-nce`, Pope, or a source that defines the term, or drop the source claim.

**11. Minor: accepted_by "The early church" and rejected_why, Augustine.**
- *Wording.* rejected_why says Augustine "noted the Jews had not received it". He says they "are said not to have received" it (*quem sane in canone Scripturarum Iudaei non recepisse dicuntur*; Dods, *City of God* 18.26, checked). The early-church row has it right; bring rejected_why into line.
- *An addition.* In the same sentence Augustine places the events of Judith in the post-exilic Persian period ("During the same time also those things were done which are written in the book of Judith"). That is a patristic historical reading, and it belongs in authorship, "Traditional view".

**12. Minor: Luther's preface (accepted_by Lutheran; card 1; card 2).**
- *Missing clause.* The opening sentence is verified (LW 35:337): "If one could prove from established and reliable histories that the events in Judith really happened, it would be a noble and fine book, and should properly be in the Bible." The page leaves out "and should properly be in the Bible", which is the clause that explains Luther's canon reasoning.
- *Missing framing.* Luther frames the allegory as one he likes ("Such an interpretation strikes my fancy"), and he thinks the poet "deliberately and painstakingly inserted the errors of time and name". That is the critical view of the "deliberate" errors, already in 1534. It is a striking point and would strengthen audience.views "A story for the whole people".
- *Fix:* add both, quoting a few words with LW 35.

**13. Minor: reliability §3, "Persian names".** It says "both names are known from the Persian army of Artaxerxes III in the 350s BC, as the *Encyclopaedia Judaica* notes for Holofernes."
- The EJ (checked on encyclopedia.com) gives Holofernes the Cappadocian in 352 BC, after Diodorus.
- Bagoas the eunuch belongs to Artaxerxes III's reconquest of Egypt in 343 BC (Diodorus 16.47–50), and he later poisoned the king (338). The decade is wrong, and the EJ says nothing about Bagoas beyond calling the name Persian.
- *Fix:* "Holofernes (Diodorus 31.19, dated 352 BC by the EJ) and Bagoas (Diodorus 16.47–50, 343 BC) are both known from the reign of Artaxerxes III", and add a Diodorus key.
- The authorship row's "352 BC" is right as the EJ gives it. Pope (CE) also speaks of a "Persian and even a Greek colouring", which could be cited.

**14. Minor: reliability §4, Achior.** He appears twice. "Goes beyond" lists "the rule that a Gentile may join Israel by circumcision, here applied to an Ammonite (14:10)", and "Differs or may conflict" (c) lists the conflict with Deuteronomy 23:3.
- Circumcision as the way for a foreigner to join is not beyond the Torah (Exodus 12:48).
- The part note at 6:16 says plainly that 14:10 **conflicts** with the letter of Deuteronomy 23:3, and cites Mishnah Yadayim 4:4.
- *Fix:* drop the "goes beyond" clause, call (c) "conflicts with the letter of", and add Yadayim 4:4 (the Ammonite proselyte Judah admitted on the ground that Sennacherib mixed the nations). That rabbinic answer is the strongest reconciliation and is already sourced in the part.

**15. Minor: sections, "The story and its themes", and cited_in, Luke 1:46–55: "helper of the weak (9:11)".** The Plain of 9:11 reads "the helper of the least, the protector of the weak" (ἐλαττόνων εἶ βοηθός, ἀντιλήμπτωρ ἀσθενούντων). Use the Plain's words: "the helper of the least, the protector of the weak".

**16. Minor: "Names and words to know": "Bethulia (Greek *Baitouloua*)".**
- *Swete's spelling.* Swete's Vaticanus spells it Βαιτυλουα (*Baityloua*) 15 times. Βαιτουλουα appears once (4:6), and Βετυλουα four times (counted in texts/orig).
- *ISBE.* ISBE (checked) prefers "Betuloua" as the Greek. It suggests a disguised "Beth Eloah", and it rejects Torrey's Shechem.
- *Fix:* "Greek *Baityloua*, in some places *Betyloua*".
- *Also:* "the feminine of Judah". *Yehudit* is the feminine of *Yehudi*, "Jew/Judahite", not of the name Judah. Say "the feminine of *Yehudi*, 'Jew'". The same section and authorship already say "Jewish woman".

**17. Minor: canon.provenance, "The Latin versions": "The Vulgate, and the Douay-Rheims made from it, were the Catholic Judith for over a thousand years."** The Douay-Rheims dates from 1609/10. Say "Jerome's Vulgate was the Catholic Judith for over a thousand years, and the Douay-Rheims (1609–10) translated it."

**18. Minor: rejected_why, unsourced "teachers" and "defenders".**
- *"Protestants, and some Orthodox and earlier Catholic teachers, argue..."* No one is named. Name Cajetan (via Metzger, as the Tobit page does) and an Orthodox source (Philaret Q. 34; Athanasius), or drop "earlier Catholic".
- *"On the killing. Defenders compare Jael..."* This has no source. Cite Pope (CE) or a Catholic or Orthodox commentary that makes the comparison, or say "Defenders commonly compare..." with `moore-judith`, if Moore reports it.

**19. Minor: rejected_why, "Jerome and the early lists": "That sentence is the source of Article VI."** It is, via "as Hierome saith". But Article VI quotes the sense of the preface to the books of Solomon, not its words. Say "the sentence Article VI echoes ('as Hierome saith')".

**20. Minor: canon.provenance, "The Greek forms".**
- *Verified:* the EJ's four forms (A, B, 58, 108) and ISBE's three (A/B; 19 and 108, Lucianic; 58 with the Old Latin and Syriac).
- *Not verified:* the Zondervan/Brockington four-group scheme. Mark it "as reported".
- *A counting error.* "Most scholars speak of three, leaving out the last group, as ISBE (1915) and J. E. Bruns do." ISBE's three are not "Brockington's four minus 106/107": ISBE counts 19/108 and 58 separately, and folds the uncials together. Say "ISBE and Bruns count three forms" without the "leaving out" claim.

**21. Minor: card 1 and accepted_by, Anglican row.** These are correct. But they say nothing on how the Church of England actually used Judith. If the writer can source it, add whether the 1559/1662 calendar of lessons appointed chapters of Judith at Morning and Evening Prayer. I believe it did, in early October, but I could not check the table, so this is a suggestion to verify, not an error.

**22. Minor: sources.json.**
- *`warburg-judith`:* I could not find the cited "Judith in the Renaissance and Baroque" exhibition at omeka.warburg.sas.ac.uk; search finds only the Warburg Iconographic Database. Verify the URL, or replace the source with a printed one on the *Speculum humanae salvationis* (for example Wilson and Wilson, *A Medieval Mirror*, 1984). The fact itself (Judith with Jael and Tomyris as types of Mary overcoming the devil) is standard.
- *`akin-nicaea-judith`:* the title needs its "?" (finding 2).
- *`herodotus-histories`, `josephus-apion`, `aquinas-summa`:* these are listed in `canon.s` and used in the text, which is fine. Add a Diodorus key (finding 13).

**23. Minor: topics/judith.json.**
- *`aka`.* It includes "Holofernes" and "Bethulia" on a `"kind":"People"` page about Judith. Auto-links from Holofernes or Bethulia would land on a page about someone else. Drop them, or make a separate place/person topic. The 01-07 notes already ask for an `achior` topic, and a `holofernes` one may follow.
- *Duplicate links.* "Book of Judith" in `aka` duplicates the works.json alias for the book (`"judith": {"aka": ["Book of Judith","Judith#"]}`). Check that the auto-linker does not now send "Book of Judith" to the person topic instead of the book.
- *Cross-references.* `related` names `deborah` and `mary`, but neither topic file mentions Judith. Ask their owners to add a line, or the links run one way only.

**24. Minor: reliability verdict: "As history, its setting cannot stand".** This is a fair AI judgment. But the next sentence, "older Catholic and some Orthodox readers defend its history", has no source for the Orthodox half. Soften it to "older Catholic readers, and some readers today, defend its history", or source an Orthodox defense.

**25. Minor: sections, "Judith in worship...": "Rashi explained the Talmud's saying..."** This is fine as written. If a tractate is named, it is Shabbat 23a (Rashi ad loc.: "the miracle was done by a woman", no name). The Tosafot that name Judith are at Pesachim 108b (Medan, checked). Give the two references, so that readers do not look for Judith in Rashi.

## Checked and found correct

- **Canon lists and decrees:**
  - Hippo 393 / Carthage 397 ("Tobit, Judith, Esther", bible-researcher).
  - Innocent I to Exsuperius, 405 ("Hester unus, Judith unus").
  - Florence, *Cantate Domino* (1442), from my knowledge of the text; the bible-researcher page did not load.
  - Trent, Session 4, with "an equal affection of piety and reverence".
  - Jerusalem 1672, the answer to "What Books do you call Sacred Scripture?": "The Wisdom of Solomon, Judith, Tobit..." as "genuine parts of Scripture" (Edgecomb's translation at bombaxo).
  - Article VI ("the Book of Judith") and Belgic Confession 6 (Judith named).
  - Athanasius, Festal Letter 39: "Wisdom of Solomon, Wisdom of Sirach, Esther, Judith, Tobit", "appointed by our fathers to be read" to "those just approaching", "not received as canonical".
  - Cyril of Jerusalem's 22-book list without Judith.
  - Augustine, *DDC* 2.8.13.
  - Westminster 1.3, London 1689 1.2–3, Wesley 1784.
- **Augustine, *City of God* 18.26:** "During the same time also those things were done which are written in the book of Judith, which, indeed, the Jews are said not to have received into the canon of the Scriptures" (Dods).
- **Luther:** the "noble and fine book" opening (LW 35:337) and the poet/play reading (35:338), quoted on Beggars All from LW.
- **Jerome's preface (Edgecomb, public domain, bombaxo.com):** "toward confirming those which have come into contention is judged less appropriate", "one short night's work", "the extremely faulty variety of the many books", the Nicene Council sentence, and the praise of Judith as a model of chastity for women and men. The date c. 405–407 matches Akin and fourthcentury.com.
- **Jerome's other prefaces:**
  - the *Prologus Galeatus*: "Iudith et Tobias et Pastor non sunt in canone";
  - the preface to Solomon: "legit quidem Ecclesia, sed eos inter canonicas scripturas non recipit... ad aedificationem plebis".
- **Hugh Pope, *Catholic Encyclopedia* (newadvent, checked):**
  - Calmet: "the Biblical Nabuchodonosor", Arphaxad = Phraortes;
  - Vigouroux: Ashurbanipal, Manasseh's captivity;
  - errors "ascribed to the translators... or to copyists";
  - Gaster's Hebrew MS of "the tenth or eleventh century", with Seleucus attacking Jerusalem;
  - "St. Paul seems to quote the Greek text of Judith 8:14, in 1 Corinthians 2:10";
  - the Nicaea uncertainty (council discussions or spurious canons);
  - Clement of Alexandria, Origen and Tertullian quoting it.
- **Encyclopaedia Judaica, Grintz and Bayer (encyclopedia.com):**
  - "in 352 b.c.e. a Cappadocian prince named Holofernes";
  - the historical kernel under Artaxerxes III;
  - "more probably... a historical novel written in the days of the Hasmoneans";
  - the alternative "end of the Persian period" view;
  - four Greek forms (A, B, 58, 108).
- **Bruns, *NCE*:** an edifying fiction; Bethulia from *betûlâ* and symbolic.
- **Places:**
  - Shechem as Bethulia: Torrey and the *Jewish Encyclopedia* ("beyond all question"); ISBE rejects it.
  - Herodotus 1.98: Deioces' Agbatana with seven concentric walls.
- **Jewish sources (Medan, etzion.org.il, translated by Kaeren Fish, checked):**
  - Rashi: "by a woman", no name;
  - the Tosafot name Yehudit;
  - Kol Bo §44, the cheese dish to make him thirsty;
  - the Rema, OC 670:2: eat cheese because the miracle came through "the milk which Yehudit fed to the enemy".
- **Liturgy:**
  - The Tridentine Gradual of the Immaculate Conception: "Benedicta es tu, Virgo Maria, a Domino Deo excelso... V. Tu gloria Ierusalem..." (Vulgate 13:23; 15:10; canticanova).
  - The Liturgy of the Hours, Dec 8 Evening Prayer: the antiphon to Psalm 126(127), "You are the glory of Jerusalem..." (Universalis).
  - The Judith canticle at Morning Prayer on Wednesday of Week I (see finding 8 on numbering).
  - The US lectionary for Our Lady of Guadalupe: responsorial Judith 13:18bcde, 19, refrain 15:9d, "You are the highest honor of our race".
- **Protestant and other church sources:**
  - Archibald Alexander (CCEL): "scarcely anything but falsehood to Holofernes", deceit asked of "the God of truth", the commendation of Simeon's slaughter, the chronology of the age 105.
  - GAMEO, "Apocrypha": Judith in the list; the Anabaptists followed the Reformers in "denying divine inspiration"; Menno and Dirk cite the books.
  - The Coptic Diocese of Los Angeles: Judith named; "found in the Coptic version, all dialects"; accepted by the Egyptian church.
- **Fathers (from the texts, as verified in the Tobit review):** Origen to Africanus 13 ("they have them not even in the Apocrypha in Hebrew"); 1 Clement 55.4–5 ("the blessed Judith", the Lord handed Holofernes over "into the hand of a woman"); Rufinus's "ecclesiastical" books.
- **Catholic teaching:** Aquinas, II-II q.110 a.3 ad 3; CCC 120 and 2482; *Divino Afflante Spiritu*; *Dei Verbum* 11–12.
- **Bibliography:** Hanhart, *Iudith*, Göttingen Septuaginta VIII/4 (1979); Moore, AB 40 (1985); Gera, CEJL (2014); Otzen, *Tobit and Judith* (2002); Nickelsburg (2nd ed. 2005); Gallagher and Meade (2017); deSilva (2002/2018); Metzger (1957).
- **Greek (texts/orig):**
  - 1:1 Ἀσσυρίων ἐν Νινευή; 1:2 the walls (70 × 50 cubits); 2:1 the eighteenth year; 4:3 προσφάτως... ἐκ τῆς αἰχμαλωσίας; 7:20 thirty-four days;
  - 8:14 βάθος / ἐρευνήσετε (= 1 Cor 2:10 βάθη / ἐραυνᾷ); 9:10 and 13:15 and 16:5 ἐν χειρὶ θηλείας; 9:11 ταπεινῶν;
  - 11:5 "I will not tell my lord a lie tonight"; 11:17 νυκτὸς καὶ ἡμέρας; 11:19 sheep without a shepherd, and the dog;
  - 13:18 Εὐλογητὴ σύ... παρὰ πάσας τὰς γυναῖκας (no "among women"); 13:20 ταπείνωσιν; 14:7 Εὐλογημένη σύ (= Luke 1:42);
  - 15:8 γερουσία; 16:2 θεὸς συντρίβων πολέμους (= LXX Exodus 15:3); 16:17 fire and worms; 16:23 aged 105.
- **Latin (texts/src):** Vulgate 13:23 (Uzziah's blessing), 15:10 (*Tu gloria Jerusalem*), 15:11 (*castitatem amaveris*), 16:31 (the feast "from that time until this day", Douay). The Vulgate verse numbers in how_to_read are right.
- **The Plain:** every quotation in book.json matches the current Plain: 3:8, 4:3, 5:5, 6:2, 8:12, 8:14, 8:27, 9:10, 11:5, 11:17, 13:18, 14:7, 15:9, 16:2, 16:17, 16:22–23. The exceptions are finding 15 and the paraphrase of 11:19, which is not in quotation marks. The Judges 5:24 and Exodus 15:3 wording matches the site's Plain of those books.
- **Spec theories:** 2:1 and Jeremiah 32:1 / 52:29 (the eighteenth year) and 2 Kings 25:8 (the nineteenth) are right; the theory is labeled as Claude's.
- **Structure and voice:** Judith is never called Scripture in the site's own voice. The tier-2 framing names the churches each time. No church is ranked. The reliability analysis is labeled as Claude's, in its four parts.

## Fixes applied

1. Fixed. Dropped Matthew 9:36 and 1 Corinthians 10:9–10, which said themselves there was no link. Also dropped Romans 11:33–34 ("not Paul's source"); it is now one sentence inside the 1 Corinthians 2:10 entry. Added Acts 7:2–53 / Acts 13:16–41 (at 5:6) and Matthew 11:25 / Luke 10:21 (at 9:12, "Master of heaven and earth"). Folded 6:19 and 7:32 (*tapeinōsis*) into the Luke 1:46–55 entry. The Mark 9:48 entry now covers Matthew 24:51, Matthew 8:12 and Revelation 14:10–11. Luke 1:28 (Byzantine text and KJV) is added to the 1:42 entry, after checking the Byzantine text in texts/orig/Luk. The Anna entry now gives the "widow for eighty-four years" reading and the age of about 105, hedged with "if Luke's numbers are read that way". It cites Marshall and Elliott (new keys `marshall-luke` and `elliott-anna`, the reading attributed to them as Wikipedia reports it; I did not check either work) and is anchored at 8:4–6 and 16:23 as well as 11:17.
2. Fixed. *legitur* is now glossed "is found written", that is, a document or report Jerome does not name. Akin is reported in both halves: his argument that Nicaea may really have counted Judith, his inference about the other books, and his admission that it is not proof. The "still" chronology is replaced with the dates of the earlier prefaces (about 391 and 398). The key title now has its "?" and the date 13 August 2013.
3. Fixed, with only what I could source. I checked both texts on newadvent. Chrysostom, *On the Priesthood* 1.8, says deceit has great value "provided it be not introduced with a mischievous intention" and praises generals' stratagems. Cassian, *Conferences* 17.17–19, compares a lie to hellebore, to be used only in grave danger, and approves Rahab and Hushai. Neither mentions Judith, and the page says so, adding "we have found no Orthodox ruling on Judith herself". The paragraph now gives both answers, and reliability §4 says that the two churches give different reasons on (a). The Protestant defenders of ruses of war are not added, because I had no source for them.
4. Fixed. Jael's tent was her own; Judith is taken into Holofernes' tent (13:1–2).
5. Fixed. The genealogy now runs through Salamiel son of Sarasadai, Simeon's tribal leader in Numbers 1:6 (8:1), and Simeon is named at 9:2.
6. Fixed in both places: the food laws are kept by Esther only in the Greek additions (Addition C).
7. Fixed. "In the Vaticanus text" is added (the reviewer's check; Swete's Judges was not available to me).
8. Fixed. Both numberings are given: 16:2–3a, 13–15 in the breviary, and 16:1–2a, 13–15 on this site.
9. Fixed. The lens C description now says the liturgy "applies the praises of Judith to Mary". The key and the lens set are unchanged.
10. Fixed. The definition of "deuterocanonical" is no longer attributed to the Catechism; the row now says only that the Catechism (120) lists the book. I did not add Sixtus of Siena, which I could not check.
11. Fixed. rejected_why now says "were said not to have received it". Augustine's post-exilic, Persian-period placing (*City of God* 18.26) is added to the Traditional view.
12. Fixed. Added "a noble and fine book" and "should properly be in the Bible", the allegory that "strikes my fancy", and Luther's view that the errors were put in on purpose (from the reviewer's check of LW 35:337–338).
13. Fixed. Holofernes is Diodorus 31.19, dated 352 BC by the EJ, and Bagoas is Diodorus 16.47–50, 343 BC. I reused the 08-16 part's key `diodorus-persian` and added Pope's "Persian and even a Greek colouring" (from the reviewer's check).
14. Fixed. The "goes beyond" clause is gone. Item (c) now reads "conflicts with the letter of" Deuteronomy 23:3 and gives Mishnah Yadayim 4:4 (existing key `mishnah-yadayim`).
15. Fixed. The page now uses the Plain's words, "the helper of the least, the protector of the weak".
16. Fixed. The Greek is now *Baityloua*, in some places *Betyloua*. Judith is now the feminine of *Yehudi*, "Jew".
17. Fixed. The Douay-Rheims is now dated 1609–10, as a translation of the Vulgate.
18. Fixed. Cajetan is now named, from Alexander's quotation, which I checked on CCEL, together with Philaret's catechism. "Defenders compare Jael" now rests on the book's own echo of Judges 5:24 at 13:18.
19. Fixed. Article VI now "echoes" Jerome ("as Hierome saith").
20. Fixed. The Brockington scheme is marked "as reported", and ISBE and Bruns "count three forms", without the "leaving out" claim.
21. Not done. I could not verify a 1559/1662 lesson table that appoints Judith, so nothing is added.
22. Kept, with the source made more precise. I fetched the Warburg exhibition page successfully earlier in this session (omeka.warburg.sas.ac.uk/exhibits/show/judithrenaissancebaroque/i--the-story-of-judith), and the key now gives that path. The Akin title is fixed and the Diodorus key added (see 2 and 13).
23. Fixed. "Holofernes", "Bethulia" and "Book of Judith" are removed from the aka list of `topics/judith.json`, which now has only Judith and Yehudit. Adding Judith to the deborah and mary topic files is left to their owners.
24. Fixed. "And some Orthodox" is now "and some readers today".
25. Fixed. The page now cites Shabbat 23a for Rashi, who does not name her, and Pesachim 108b for the Tosafot, in both places.

Also: every Judith quotation was re-matched by script to the final parts' Plain. 1:1 now reads "who ruled over the Assyrians in Nineveh" and "ruled over the Medes in Ecbatana". 7:32 now reads "great distress", with the Greek noun. book.json does not quote 15:12. `node tools/build.js --check Jdt`: 0 errors, 0 warnings.
