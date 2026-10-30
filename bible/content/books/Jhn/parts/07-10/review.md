# Hostile review: John 7–10 (part 07-10, including 7:53–8:11)

Reviewer: hostile reviewer (nt lane), 2026-10-24. Checked: plain.txt verse by verse against the SBLGNT (`sbl`), the TAGNT word list `w` (edition letters), and `byz`; every entry in variants.json, notes.json, glosses.json, chapters.json (settings, traditions, deep dives), topics.json and sources.json; the proposed topic content/proposals/nt/topics/i-am-sayings.json and the works entries didascalia-apostolorum and book-of-mormon in content/proposals/nt/works.json; content/terms.json and content/proposals/nt/terms.json; book.json lenses and audience. `VERBOSE=1 node tools/build.js --check Jhn/07-10` gives 0 errors and 0 warnings.

## Verdict

The part is good on substance. The research is broad and mostly accurate. 7:53–8:11 is translated faithfully from the NA28 form in TAGNT, with honest headings and a solid evidence section. The "I am" sayings at 8:24, 28 and 58 are handled correctly. The treatment of "the Jews" and of 8:44 is fair and does not soften the text. The six traditions cards are mostly fair and sourced. It cannot be published as it stands, for four reasons. (1) It breaks a binding term: σκηνοπηγία must be "the Festival of Shelters", never "Feast of Booths". The part also uses the ESV's "feast" for ἑορτή, while every other part of John says "festival". (2) Modern-version wording is still in the text. 8:25 is word for word the NRSV, and about twenty more verses follow the NIV or ESV where the Greek does not force it. (3) Several manuscript and edition claims are wrong. SBLGNT does not print 7:53–8:11, and THGNT puts it in the apparatus, not after John 21. THGNT is listed under the wrong reading at 7:39. The witness lists at 9:4 contradict each other. The 10:29 entry translates a reading that no edition prints. (4) At 8:38 the Plain English Translation settles a debated reading while its note says it leaves the question open. None of these is hard to fix.

Counts: 1 critical, 7 major, 17 minor.

## Findings

### 1. Critical: binding term broken; ESV festival vocabulary throughout
- **Location:** plain.txt 7:2, 7:8 (twice), 7:10, 7:11, 7:14, 7:37, 10:22; section headings "Teaching at the Feast of Booths" and the 10:22 heading; notes 7:2 (t "The Feast of Booths"), 7:14, 7:37, 8:12, 10:22; glosses 7:2, 7:37; chapters.json sums, readings, deep "The Feast of Booths in Jesus' day", settings `when` fields; topics.json feast-of-booths section heading.
- **Problem:** content/proposals/nt/terms.json requires `ἡ σκηνοπηγία (John 7:2)` → "the Festival of Shelters (Sukkot; never 'Feast of Booths' or 'Tabernacles' in the Plain English Translation; note gives those names)". The Plain English Translation says "the Feast of Booths". That is the ESV's exact name, and the ESV also has "Feast of Dedication" at 10:22. The other terms point to "festival" for ἑορτή ("the Festival of Unleavened Bread"). Every other part of John already uses "festival": 2:23, 4:45, 5:1 ("a festival of the Jews"), 6:4, 11:56, 12:12, 12:20, 13:1, 13:29. Here 7:2 reads "a feast of the Jews", which sits badly against 5:1, and 2:8–9 uses "feast" for a wedding banquet. The term entry was saved at 10:31, five minutes after this part's last write (10:26), so the writer may not have seen it. It binds all the same.
- **Evidence:** 7:2 ἡ ἑορτὴ τῶν Ἰουδαίων ἡ σκηνοπηγία; 10:22 τὰ ἐγκαίνια.
- **Fix:** 7:2 "a festival of the Jews was coming near, the Festival of Shelters"; "festival" for every ἑορτή (7:2, 8, 10, 11, 14, 37); 10:22 "the Festival of Dedication". The note on 7:2 should give "Booths", "Tabernacles" and "Sukkot", as the term asks. Update anchors and every prose mention in notes, glosses, chapters, settings and topics. The topic id `feast-of-booths` can stay as an id.

### 2. Major: 8:25 is word for word the NRSV
- **Location:** plain.txt 8:25.
- **Problem:** The Plain English Translation reads "...'Who are you?' Jesus said to them, 'Why do I speak to you at all?'" That is the NRSV verse word for word, except for an opening "So". STYLE.md bans the NRSV like the NIV and ESV. The question reading is fine and follows the SBL punctuation. The wording is the problem.
- **Evidence:** Τὴν ἀρχὴν ὅ τι καὶ λαλῶ ὑμῖν; (SBL). NRSV 8:25 as printed at biblestudytools.com/nrs/john/8-25.html.
- **Fix:** Rebuild the sentence from the Greek, for example "Why am I even talking to you?" or "Why should I speak to you at all?" Move the note anchor (`a`: "Why do I speak to you at all?") with it.

### 3. Major: verses that still follow NIV or ESV wording where the Greek does not force it
This part rebuilt fewer verses than the other parts of John, and it shows. I compared every verse with the NIV (2011) and ESV from memory. Verses where the shared wording comes straight from the Greek are not listed: for example 7:44, 8:29, 9:16 "This man is not from God", 9:31, 10:11, 10:27, 10:30. Each item below is a choice the Greek leaves open, made the same way as the NIV or ESV. Each verse should be redone from the Greek.
- **7:5** "His own brothers, too, did not believe": "his own" follows the NIV; the Greek is οὐδὲ γὰρ οἱ ἀδελφοὶ αὐτοῦ, "for not even his brothers". "Too" also weakens "not even". Keep γάρ.
- **7:22** the aside "(it did not really start with Moses ...)" follows the NIV's "though actually it did not come from Moses" ("really" for "actually").
- **7:30** "At that they tried to grab him" follows the NIV's "At this they tried to seize him". The Greek has only οὖν.
- **7:32** "heard the crowd murmuring these things about him ... sent officers" follows the ESV almost word for word: the ESV's own order "these things about him" against the Greek περὶ αὐτοῦ ταῦτα, and "officers".
- **7:45** "went back to the chief priests and Pharisees, who demanded" follows the NIV's "went back to the chief priests and the Pharisees, who asked them", with the ESV's "officers". The Greek is ἦλθον ... καὶ εἶπον αὐτοῖς ἐκεῖνοι.
- **7:49** "A curse is on them!" follows the NIV's "there is a curse on them".
- **7:50** "he had come to Jesus earlier" follows the NIV's "who had gone to Jesus earlier". The Greek has "him".
- **8:3** "The scribes and the Pharisees brought a woman who had been caught" matches the ESV's first ten words, and "They made her stand" matches the NIV.
- **8:6** "so they would have grounds to bring charges against him" follows the ESV's "some charge to bring against him".
- **8:9** "with the woman still there" follows the NIV's "with the woman still standing there". "Still" is not in the Greek.
- **8:22** "Is that why he says" is the NIV's exact rendering of ὅτι λέγει.
- **8:44** "and you want to carry out what your father craves" follows the NIV's "and you want to carry out your father's desires". θέλετε ποιεῖν is "want to do".
- **9:8** "the people who used to see him before as a beggar" follows the ESV's "those who had seen him before as a beggar".
- **9:9** "No, but he looks like him" and "He kept saying" follow the ESV's "No, but he is like him" and "He kept saying".
- **9:27** "you didn't listen. Why do you want to hear it again? ... his disciples too" is an NIV cluster.
- **9:32** "no one has heard of anybody opening the eyes of someone born blind" follows the NIV's "Nobody has ever heard of opening the eyes of a man born blind".
- **9:35** "Jesus heard they had thrown him out" is the NIV's wording.
- **9:37** "He is the one talking with you" follows the NIV's "he is the one speaking with you".
- **10:40** "He went away again ... to the place where John was baptizing at first" follows the ESV's "at first" for τὸ πρῶτον.
- **10:22** "The Feast of Dedication" is the ESV's name (see finding 1).
- **8:14 and 8:16** are borderline. "my testimony is true. I know where I came from and where I am going" and "even if I do judge" track the ESV closely, but the Greek mostly forces them. Rework if you are touching nearby verses.
- **Fix:** Redo each listed verse from the Greek, then compare again.

### 4. Major: 10:29 translates a reading that no edition prints, and the variant entry misdescribes the readings
- **Location:** plain.txt 10:29; variants.json 10:29.
- **Problem:** The Plain English Translation reads "My Father, the one who gave them to me, is greater than all". That is the reading ὅς ... μείζων of P66, the Byzantine text and the TR. The entry says the Plain English Translation follows SBL and THGNT. Their text is ὃ ... μείζων, with a neuter relative, and TAGNT confirms `ὃ` NnSYWG and `μεῖζόν` NnWG. In that reading ὃ is the object of δέδωκεν ("My Father, as to what he has given me, is greater than all"), so it does not mean "who". The entry's R0 has the orig ὃ ... μείζων with the English "who has given", and it adds P66/Byz/TR's ὅς in the witness note. That merges two readings into one. The reading of Codex Alexandrinus, ὅς ... μεῖζον, is missing. Burgon's survey lists ὅς ... μεῖζον for A (and X), ὃ ... μείζων for ℵ L, and ὃ ... μεῖζον for B alone with the Latin.
- **Evidence:** `w` 10:29: ὃ NnSYWG, μεῖζόν NnWG (so S and Y have μείζων); `byz` Ὁ πατήρ μου ὃς δέδωκέν μοι, μείζων πάντων ἐστίν.
- **Fix:** List the readings separately: (a) ὃ ... μεῖζον, B* lat (NA28); (b) ὃ ... μείζων, ℵ L W (SBL, THGNT); (c) ὅς ... μείζων, P66 Θ f1 f13 Byz TR; (d) ὅς ... μεῖζον, A. Check each witness against the NA28 apparatus or Tischendorf. Say plainly that the Plain English Translation's English renders (c), or that it treats SBL's ὃ as "who", which is how most English versions take the sentence. Either change "follow" or say so in `why`. Do not label (b) "who".

### 5. Major: wrong claims about how SBLGNT and THGNT print 7:53–8:11
- **Location:** variants.json 7:53, R0 `w` ("NA28 and SBLGNT print it in double brackets ...; THGNT prints it after John 21"); chapters.json chapter 8, deep "A later addition", last paragraph ("in brackets (NA28, SBL), at the end of John (THGNT)"); topics.json textual-history ("in brackets, at the end of John, or in place").
- **Problem:** The SBLGNT does not print the passage in its text. `sbl` has no 8:1–11, TAGNT has no S on those words, and brief-nt.md says the passage is "not in the SBL text". THGNT does not print it after John 21. It puts the whole passage in the apparatus, as a footnote (P. J. Williams and D. Jongkind, eds., 2017). The Byzantine-family manuscripts f1 put it after John 21. THGNT does not.
- **Evidence:** J. Snapp, "The Tyndale House Greek New Testament" (thetextofthegospels.com, Nov 2017): "the entire pericope adulterae is relegated to the apparatus". Review in JBTS (2020): it "is relegated to a footnote in the apparatus".
- **Fix:** "NA28 prints it in double brackets; SBLGNT and THGNT leave it out of the text and give it in the apparatus." Correct all three places.

### 6. Major: 9:4 variant puts P66 and P75 on two opposite readings
- **Location:** variants.json 9:4, R0 and R2.
- **Problem:** R0 (ἡμᾶς ... με) lists "Papyrus 66 and 75, Vaticanus, Bezae". R2 (ἡμᾶς ... ἡμᾶς) also lists "Papyrus 66 and 75". The same manuscripts cannot support both. In Metzger's account, P66 P75 B D support "we ... me", and ℵ* L W (with the Sahidic) support "we ... us".
- **Fix:** Take P66 and P75 out of R2, unless you can show a first-hand and corrector split. Recheck R2 against the NA28 apparatus or Tischendorf.

### 7. Major: 7:39 variant puts THGNT under the wrong reading
- **Location:** variants.json 7:39, R0 `w`.
- **Problem:** R0 (πνεῦμα alone) claims "NA28, SBLGNT, THGNT". TAGNT marks ἅγιον as present in Y (Tyndale House), along with G, T and B. By that data, THGNT has "Holy Spirit", which makes sense given how often it follows B. P66 is listed only as first hand under R1. R0 should name P66 corrected, if that is what Metzger reports.
- **Evidence:** `w` 7:39: ('ἅγιον', 'YGTB').
- **Fix:** Check THGNT. Move it to the reading it prints (R1, or R3 if it also has δεδομένον) and correct `b`/`why`. Then say that THGNT departs from NA28 and SBL here, as brief-nt.md requires.

### 8. Major: 8:38 settles a debated reading while the note says it stays open
- **Location:** plain.txt 8:38; notes.json 8:38 ("The Plain English Translation keeps the ambiguity with a lower-case 'father'"); variants.json 8:38 R0 `en`.
- **Problem:** A lowercase "father" means the devil, which reads ποιεῖτε as a statement. That is one of the two readings the note describes, so the ambiguity is not kept. "So you, too, do what you heard from the father" is also unclear English: it can be heard as a command, which would need "the Father". In the SBL text, with no "your", many take ποιεῖτε as a command and πατρός as God. The NRSV reads it that way, and the note itself gives both readings.
- **Fix:** Choose one reading and make the English clear. Either "And you do what you heard from your father" (statement; supply "your" with a note that the Greek lacks it), or "So you too must do what you heard from the Father" (command). Rewrite the note to say which reading was chosen and why. Do not claim the case removes the ambiguity.

### 9. Minor: 7:8 variant gets the NIV wrong
- **Location:** variants.json 7:8, `b`.
- **Problem:** The entry says English versions print "not yet" (NIV, KJV). The NIV (2011) prints "I am not going up to this festival" and gives "not yet" in a footnote. "Not yet" was the 1984 NIV.
- **Fix:** "...print 'not' (ESV, NIV, NRSV) with a footnote, or 'not yet' (KJV, NKJV, NIV 1984)." The rest of the entry is right: THGNT reads οὔπω (TAGNT: `οὐκ` NnSG, so Y and W differ; Snapp confirms), and Jerome reports Porphyry (*Against the Pelagians* 2.17).

### 10. Minor: 8:54 variant names no manuscripts
- **Location:** variants.json 8:54.
- **Problem:** R0 gives only "the Greek manuscripts are closely divided, as Metzger reports", and R1 gives only editions. brief-nt.md requires real witnesses with dates. The edition data is right: `ἡμῶν` NnSGB, so THGNT, WH and TR read ὑμῶν.
- **Fix:** Take the witnesses for ἡμῶν and ὑμῶν from the NA28 apparatus or Tischendorf (Source Library, book 6953a88c77f38f6761bd19d6) and attribute them. If a witness is uncertain, leave it out.

### 11. Minor: the 7:53–8:11 evidence is told three different ways
- **Location:** variants.json 7:53 R1 ("the Greek church writers before the 1000s") and `why` (wanders "after John 7:36, 7:52, 21:25 or Luke 21:38"); notes.json 7:53 ("for a thousand years"); chapters.json deep ("before the 1100s"; "after John 7:36, 7:44 or 21:25").
- **Problem:** Metzger says no Greek father comments on the passage before Euthymius Zigabenus in the 12th century. So "before the 1000s" is wrong, and the three statements disagree. "After 7:52" is the passage's usual place, not one it wanders to. The deep dive correctly has 7:44, from some Georgian manuscripts.
- **Fix:** Use "before the 1100s (Euthymius Zigabenus)" everywhere, and change "7:52" to "7:44" in `why`.

### 12. Minor: missing variant entries that KJV readers would notice
- **10:13:** the Byzantine text and TR add ὁ δὲ μισθωτὸς φεύγει (KJV "The hireling fleeth"); TAGNT has μισθωτὸς and φεύγει marked TB. The Plain English Translation starts "That is because he works for pay", so a KJV reader will notice.
- **7:40:** the Byzantine text and TR have Πολλοὶ (KJV "Many of the people"); the Plain English Translation has "Some in the crowd".
- **8:11:** the Byzantine text has κρίνω, "judge", where NA28 and TR have κατακρίνω. Add this to the existing 8:11 entry.
- **8:25:** P66* adds εἶπον ὑμῖν ("I told you at the beginning..."). The writer flagged this and the note mentions it, but there is no entry. Add one. The note credits Metzger; also cite the NA28 apparatus or Comfort.
- **Optional:** 8:28 and 10:32, where THGNT and the Byzantine text read "my Father" (μου YTB, YGTB).

### 13. Minor: chapter 8 summary misquotes the Plain English Translation
- **Location:** chapters.json chapter 8 `sum[0]`: "Go, and from now on, do not sin any more."
- **Problem:** The Plain English Translation of 8:11 is "do not keep on sinning", deliberately matched to 5:14. The topic capital-punishment also says "sin no more".
- **Fix:** Quote the Plain English Translation exactly.

### 14. Minor: small additions and losses in the translation
- **7:15** "the sacred writings": "sacred" is interpretation. γράμματα is "letters, learning", and the writer's own note says the point is formal study. Use "letters" or "learning".
- **7:17** "truly wants": "truly" is not in the Greek (θέλῃ).
- **7:22** "Consider this." does not translate διὰ τοῦτο ("for this reason, that is why"). It also hides an old punctuation question: many take διὰ τοῦτο with 7:21 ("you are all astonished because of it"). Translate it and add a short note.
- **8:18** "I testify about myself" flattens ἐγώ εἰμι ὁ μαρτυρῶν ("I am the one who testifies"). In this chapter of "I am" sayings, keep it.
- **8:19** "Where is this father of yours?" puts a sneer into the text. The Greek is Ποῦ ἐστιν ὁ πατήρ σου; ("Where is your father?"). The note discusses the possible taunt; the Plain English Translation should stay neutral.

### 15. Minor: σπέρμα rendered two ways
- **Location:** 7:42 "the family line of David"; 8:33 and 8:37 "Abraham's seed".
- **Fix:** Use one rendering ("seed" or "descendants") in both places, or explain the difference in a note.

### 16. Minor: "the Jews" left without a note where it means the authorities
- **Location:** 7:11, 9:18 (the same people as the Pharisees of 9:13–17), 10:24, 10:31, 10:33.
- **Problem:** The proposals term requires a note "at each place where it means the Jerusalem authorities or the people of Judea". The 7:1 note promises that "these notes say each time who seems to be meant". 7:1, 7:13, 7:35 (inside the 7:1 note), 8:31, 8:44 and 9:22 are covered. The places listed above are not.
- **Fix:** Add short notes, or one note per scene that names every place.

### 17. Minor: the Nazi-use claim at 8:44 is true but has no source
- **Location:** notes.json 8:44; chapters.json chapter 8 deep; topics.json jews-in-john.
- **Problem:** The claim checks out. Elvira Bauer's antisemitic children's book *Trau keinem Fuchs auf grüner Heid und keinem Jud bei seinem Eid* (Stürmer-Verlag, 1936) opens with the heading "Der Vater der Juden ist der Teufel" ("The father of the Jews is the devil"); see the German Propaganda Archive, Calvin University. A study of John 8:44 in Nazi children's literature appeared in *Biblical Interpretation* 31/3 (2022), 374–390. The Luther claim (*Von den Juden und ihren Lügen*, 1543) and *Nostra Aetate* §4 are also correct. The 8:32 claim about the CIA inscription is correct too: the verse, in KJV wording, is carved in the lobby of the Original Headquarters Building at Langley.
- **Fix:** Name Bauer's 1936 book, or cite the 2022 article or Reinhartz, so the claim has a source. A source key is needed.

### 18. Minor: the Orthodox view on the 7:53–8:11 card is vague and its source is weak
- **Location:** chapters.json chapter 8 traditions, canon card, Orthodox view; source `ware-orthodox`.
- **Problem:** "is read in its services, though not on Pentecost" is correct as far as it goes. chapter 7's VIEW T rightly says Pentecost reads 7:37–52 and 8:12. But the card does not say when the passage is read. In the Byzantine lectionary, John 8:3–11 is the reading for the feast of St Pelagia (8 October) and some other penitent women saints. Kallistos Ware's *The Orthodox Church* does not discuss the passage, so it does not support the claim. The 1904 Patriarchal text prints the passage in place.
- **Fix:** Give the lectionary use and cite a lectionary or a text-critical source (Metzger, or Knust and Wasserman, who cover the liturgical use). Drop the Ware citation for this claim.

### 19. Minor: "the only mention of Hanukkah in the Bible"
- **Location:** notes.json 10:22; topics.json hanukkah.
- **Problem:** Catholic and Orthodox Bibles include 1 and 2 Maccabees, which the same note cites for the feast's origin (1 Maccabees 4:36–59; 2 Maccabees 10:1–8).
- **Fix:** "the only mention in the Protestant Bible (and the Hebrew Bible)", or "the only mention in the New Testament".

### 20. Minor: 10:12 note gets the hired keeper's liability wrong
- **Location:** notes.json 10:12 ("The law allowed that a hired keeper was not liable for an animal killed by a wild beast (Exodus 22:10–13), so running from a wolf cost him nothing").
- **Problem:** Exodus 22:10–13 (Hebrew 22:9–12) deals with a keeper in general. The Mishnah, which applies it to the paid keeper, says "one wolf is not an unavoidable accident; two wolves are" (m. Bava Metzia 7:9). So a hired shepherd who ran from a single wolf was liable. That supports Jesus' picture: the hired man runs even when he should stand.
- **Fix:** Rewrite, citing Exodus 22:10–13 and Mishnah Bava Metzia 7:9 (source key `mishnah-...` as fits).

### 21. Minor: Rome's ban on Jewish executions stated as settled
- **Location:** notes.json 8:6 ("Under Roman rule the Jewish council did not have the right to carry out death sentences (18:31)"); chapters.json 7:53–8:11 setting `why`; topics.json capital-punishment.
- **Problem:** Scholars still argue whether the Sanhedrin could carry out death sentences under the prefects. Jean Juster and Paul Winter said yes, A. N. Sherwin-White said no. Stephen's stoning and the temple warning inscription are part of the evidence. The 18–21 part owns 18:31.
- **Fix:** Hedge the claim ("John 18:31 says...; whether this was true is debated") and refer to 18:31.

### 22. Minor: glosses
- **8:28** "the Human One of Daniel's vision": "the Human One" is the Common English Bible's own rendering of the title, and it is under copyright. Use "the human figure of Daniel 7".
- **7:3** "get out of this backwater" puts a sneer at Galilee into a neutral μετάβηθι ἐντεῦθεν.
- **9:34** "kicked him out of the community" settles whether ἐξέβαλον αὐτὸν ἔξω means expulsion from the synagogue or just throwing him out of the room. The writer's own 9:22 note treats this as debated. Use "drove him out".

### 23. Minor: gaps in the traditions cards
- **8:58 card (son-of-god):** it gives only Catholic, Orthodox, Jehovah's Witness and Latter-day Saint views. A reader could think only Catholics and Orthodox say "yes". Add a Protestant view (Lutheran, Reformed or Baptist) or say in the Catholic or Orthodox line that Protestants agree.
- **Brothers card:** the Lutheran line is right, but it leaves out that Calvin and Zwingli, and Wesley too, held that Mary remained a virgin. "Baptist" is not the only home of the Helvidian view.
- **Perseverance card:** there is no Orthodox view, which is close to the Catholic one.
- The other-sheep card (with the Latter-day Saint view from 3 Nephi 15:21 and 16:1–3, and the Jehovah's Witness view), the canon card (Trent, Calvin's comment on John 8, Carson) and the election card (Formula of Concord, article 11) are fair and correctly sourced.

### 24. Minor: proposed topic i-am-sayings.json
- **Problem 1:** It lists 9:5 as an "I am" saying. The Greek is φῶς εἰμι τοῦ κόσμου, with no ἐγώ, so it is not an egō eimi saying.
- **Problem 2:** The list of absolute sayings leaves out 13:19 ("so that ... you will believe that I am"), which the term entry names. It also leaves out 6:20 and 4:26, which are debated cases.
- **Problem 3:** "Others argue that 'I am he' means only ... the Messiah" names no one.
- **Fix:** Correct the list and name a scholar for the minority view. Otherwise the core is accurate: LXX Exodus 3:14 ἐγώ εἰμι ὁ ὤν; Isaiah 43:10 ἵνα ... πιστεύσητε ... ὅτι ἐγώ εἰμι; and it does not duplicate an existing topic (names-of-god is related, not the same).

### 25. Minor: works entry book-of-mormon
- **Location:** content/proposals/nt/works.json book-of-mormon `note`.
- **Problem:** "Scripture of The Church of Jesus Christ of Latter-day Saints ... It is in no other church's Bible." This implies the Book of Mormon is part of the Latter-day Saint Bible, but it is a separate book of scripture. It also leaves out Community of Christ and other churches of the Latter Day Saint movement that accept it. The 3 Nephi 15:21 citation is correct.
- **Fix:** "Scripture, alongside the Bible, for The Church of Jesus Christ of Latter-day Saints and other churches of the Latter Day Saint movement (such as Community of Christ); it is not part of any Bible."
- The didascalia-apostolorum entry is accurate: a Syrian church order of the 200s, kept in Syriac with Latin fragments, which tells the story in chapter 7 to urge mercy toward penitents.

## Checked and found sound (no action)
- 7:53–8:11 Plain English Translation against TAGNT NA28 words: faithful (8:4 ἐπ’ αὐτοφώρῳ; 8:5 ἡμῖν; 8:6 κατέγραφεν; 8:9 without the TR additions; 8:11 [καὶ] ἀπὸ τοῦ νῦν). Its heading and evidence section meet brief-nt.md.
- 7:8 ("not"), 7:37–38 (punctuation, with a fair note on both readings and Brown's view), 8:24, 28 and 58 (bare "I am"), and 8:25 punctuation (follows SBL; only the wording is a problem, finding 2).
- P66* "the Prophet" at 7:52 and P66 "I told you" at 8:25 are real readings. 10:8 witnesses agree with `byz` (the Byzantine text has no πρὸ ἐμοῦ) and with Metzger.
- Citations spot-checked and correct: Josephus *Ant.* 8.100, 12.325, 18.23, 18.116–119, 20.221; *War* 3.375; m. Sukkah 4:9, 5:1–4; m. Shabbat 7:2, 18:3; b. Yoma 85b (R. Eleazar); m. Ketubot 2:9; m. Shekalim 6:5; m. Avot 1:1, 2:5, 5:19; b. Sukkah 27b; b. Megillah 31a; b. Avodah Zarah 5a; b. Sanhedrin 43a; Justin *Dial.* 8, 69; 1 Enoch 48:6; 4 Ezra 3:14, 13:52; Origen *C. Cels.* 1.28, 32; Irenaeus *AH* 2.22.6, 5.15.2; Augustine *Tract.* 33.5, 36.9 and *De adulterinis coniugiis* 2.7.6; Jerome *Adv. Pelag.* 2.17; Eusebius *HE* 3.39.17; Pliny *NH* 28.7; Tacitus *Hist.* 4.81; Calvin on John 8; Trent session 4; Augsburg Confession 12; Formula of Concord 11; 3 Nephi 15:21; NWT 2013 at 8:58; the 2004 Siloam pool (Reich and Shukron); T. W. Manson on 8:6.
- No em-dashes; reading level suitable; 16 setting cards, each with `readers`; the spec box is labeled and names its overlap with Brown.

## Fixes applied
1. Critical (festival vocabulary): Fixed. The Plain English Translation now says "festival" for every ἑορτή, "the Festival of Shelters" at 7:2 and "the Festival of Dedication" at 10:22, and both headings are renamed. The 7:2 note gives "Tabernacles", "Booths" and "Sukkot". "Feast" is changed to "festival" in every note, gloss, chapter page, setting card and topic contribution; the topic id `feast-of-booths` stays.
2. Major (8:25): Rebuilt as "Why am I even talking to you?" and moved the note anchor with it.
3. Major (drift): Rebuilt from the literal lines with new sentence shapes: 7:5, 7:22, 7:30, 7:32, 7:45, 7:49, 7:50, 8:3, 8:6, 8:9, 8:14, 8:16, 8:22, 8:44, 9:8, 9:9, 9:27, 9:32, 9:35, 9:37, 10:40 and 10:22. Also redone after rechecking the rest: 7:15, 7:17, 7:42, 7:46, 8:18, 8:19, 8:59, 9:25, 9:34, 10:32 and 10:34. ὑπηρέται is now "guards", matching 18:3. 41 verses in all; logged in the scratch drift audit.
4. Major (10:29): The variant now lists four separate readings: ὅς…μείζων (P66, Byzantine text, TR), ὃ…μείζων (SBL, THGNT), ὃ…μεῖζον (NA28, B*), and ὅς…μεῖζον (A), with witnesses credited to Metzger. The Plain English Translation and `follow` both give reading (a). The `why` says so and explains how SBL's ὃ is usually read.
5. Major (how editions print 7:53–8:11): Corrected in the variant, the chapter 8 deep dive and the textual-history topic. NA28 prints it in double brackets; SBLGNT and THGNT give it only in the apparatus.
6. Major (9:4): Removed P66 and P75 from "we…us". That reading is now ℵ*, L, W and the Sahidic, as reported by Metzger. Every reading is credited.
7. Major (7:39): THGNT moved to "Holy Spirit", following the TAGNT data. P66 corrected was added to the short reading. The `why` now says THGNT departs from NA28 and SBL.
8. Major (8:38): The Plain English Translation now reads the statement, "You, in the same way, do the things you heard from your father." The note says this reading was chosen and why, that "your" is supplied, and that the command reading exists (Brown).
9. Minor (7:8): `b` now says ESV, NIV and NRSV print "not" with a footnote, and KJV, NKJV and the 1984 NIV print "not yet".
10. Minor (8:54): The entry now names editions only (NA28, SBLGNT and Byzantine against THGNT, WH and TR). The `why` says Metzger reports the manuscripts are closely divided. I could not check a manuscript list in the NA28 or Tischendorf apparatus (the Source Library Tischendorf covers only Matthew and Mark), so I named none.
11. Minor (7:53 evidence): The variant, the note and the deep dive all say "before Euthymius Zigabenus in the 1100s" and "after 7:36, 7:44 or 21:25, or after Luke 21:38".
12. Minor (missing variants): Added 7:40 (πολλοί), 10:13 (ὁ δὲ μισθωτὸς φεύγει) and 8:25 (P66* εἶπον ὑμῖν, Metzger and Comfort). Split 8:11 into NA28, TR and Byzantine (κρίνω). Did not add the optional 8:28 and 10:32 "my Father" entries.
13. Minor (8:11 quoted): The chapter 8 summary now quotes the Plain English Translation exactly. The capital-punishment topic says "the command to stop sinning".
14. Minor (small additions): 7:15 "such book learning"; 7:17 "truly" removed; 7:22 "That is why", with a new note on the punctuation question; 8:18 "I am the one who testifies about myself"; 8:19 "Where is your father?"
15. Minor (σπέρμα): "seed" is now used in 7:42 ("David's seed"), 8:33 and 8:37, with a gloss.
16. Minor ("the Jews"): New notes at 7:11, at 9:18, and at 10:24 (which also covers 10:31 and 10:33).
17. Minor (Nazi use): Named Elvira Bauer's 1936 book in the 8:44 note, the chapter 8 deep dive and the jews-in-john topic, with new source key `bauer-trau-keinem-fuchs`.
18. Minor (Orthodox canon view): Rewritten with the 1904 Patriarchal text and the reading of John 8:3–11 on St Pelagia's day (8 October). It now cites Metzger and Knust–Wasserman, not Ware.
19. Minor (Hanukkah): The note and the topic now say "the only mention in the New Testament and in the Protestant Bible" and name 1 and 2 Maccabees.
20. Minor (10:12): Rewritten with Exodus 22:10–13 and m. Bava Metzia 7:9 ("one wolf is not an unavoidable accident"). Reuses the source key `mishnah-bava-metzia`.
21. Minor (Roman execution ban): Hedged in the 8:6 note (Sherwin-White against Juster and Winter, reusing `sherwin-white-roman-law`), in the 7:53–8:11 setting card and in the capital-punishment topic.
22. Minor (glosses): 8:28 "the human figure of Daniel 7"; 7:3 "leave Galilee behind"; 9:34 "drove him out", glossed "forced him to leave".
23. Minor (traditions cards): Added a Reformed view to the 8:58 card (Calvin; Westminster Confession 8.2). Added Reformed (Calvin on Matthew 1:25; Zwingli) and Methodist (Wesley 1749) views to the brothers card, and qualified the Baptist line. Added an Orthodox view to the perseverance card.
24. Minor (i-am-sayings proposal): Took 9:5 out of the list, with a note that it has no ἐγώ. Added 13:19 and the debated 4:26 and 6:20. Named Bultmann and the NWT for the minority view, and added sources.
25. Minor (book-of-mormon work): The note now reads "Scripture, alongside the Bible, for The Church of Jesus Christ of Latter-day Saints and other churches of the Latter Day Saint movement (such as Community of Christ) … It is not part of any Bible."
26. Build (after fixes): `luther-jews-lies-1543` is no longer defined in Mat/19-23, so I defined it in this part's sources.json.
