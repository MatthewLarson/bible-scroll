# Hostile review: Acts 5–7 (part 05-07)

Reviewer: separate hostile-reviewer agent (not the writer). Files checked: plain.txt, notes.json, variants.json,
glosses.json, chapters.json, topics.json, sources.json; proposals `content/proposals/nt/topics/stephen.json`,
`deacons.json`, and the part's entries in `content/proposals/nt/terms.json` and `works.json` (Temple Scroll, 4Q169,
4Q175, Pseudo-Clementine Recognitions). `VERBOSE=1 node tools/build.js --check Act/05-07`: 0 errors, 0 warnings.

## Verdict

This is a strong part. I checked the translation verse by verse against the SBLGNT, the Byzantine text and the TAGNT
word list. It is faithful and readable, with no omissions, additions or wrong subjects that change the meaning. The
5:39/5:40 versification is right: "Gamaliel won them over" (SBL 5:39b) sits under KJV 5:40, as the regenerated
literal line has it. All the places the brief names get full treatment: Ananias and Sapphira, the Theudas problem
(three views, fairly given), the Seven and the diaconate, each place where Stephen's speech differs from the Old
Testament (7:4, 7:14, 7:16, 7:43, 7:53, plus the call in Mesopotamia and the three forties), the 7:46 crux, the
standing Son of Man, and prayer to Jesus.

The facts the writer marked as uncertain check out:
- Bezae's additions at 5:15, 5:18, 5:39 and 6:10 match the readings Metzger reports.
- The witnesses at 5:28 and 7:46 match.
- Jerome, Letter 108 (section 13), mentions the patriarchs' tombs at Shechem.
- Josephus, Antiquities 2.199 (the brothers buried at Hebron) and 20.131 (Ananus the temple commander) are correct.
- Sifre Deuteronomy 357 (the three forties), Trullo canon 16, CCC 685 and CCC 2665–2668 are correct.
- The Augustine line is properly hedged.

I found no invented source, reading or find. Three things still need fixing before publication:
- a false Greek claim, repeated three times, that one "fill" verb links 4:31 and 5:3;
- a false claim, made twice, that Stephen is the only person besides Jesus to use "the Son of Man";
- two settings cards that state a post-70 date for Acts as settled, which contradicts the book's own "Date" fact.

The rest are minor: quotations that are not the site's Plain English Translation, a few small factual slips, works naming, two KJV-visible
variants left out, and some wording.

Judgment on the two questions the lead asked:
- **7:46.** Following SBL and Tyndale House ("the God of Jacob") against NA28 ("the house of Jacob") is defensible,
  and the entry is honest about it: it gives NA28's harder-reading argument and the suspicion that scribes
  harmonized to Psalm 132:5.
- **χάρις as "favor" at 7:10 and 7:46.** This is right: "find favor before" is the Septuagint idiom, and "grace" at
  6:8 is a fair contextual difference. But the Plain English Translation of 7:46 recasts the clause (see finding 12).

## Findings

### 1. Major: "the same verb" for Satan's filling (5:3) and the Spirit's filling (4:31) is false
- **Where:** notes.json 5:3 ("Satan and the heart"); chapters.json ch. 5 `views.L`; the ch. 5 spec box "two kinds of
  filling".
- **What is wrong:** The note says "The same verb makes the contrast". In fact 4:31 has ἐπλήσθησαν (πίμπλημι) and
  5:3 has ἐπλήρωσεν (πληρόω).
  - 5:17 ἐπλήσθησαν ζήλου is πίμπλημι.
  - 5:28 πεπληρώκατε is πληρόω.
  - 6:3, 5, 8 and 7:55 use the adjective πλήρης.
  - So the spec box's claim that Luke "uses the verb" four times in four directions is wrong too.
- **Why it matters:** Readers who check the Greek will find the claim wrong. Luke's "filling" vocabulary still
  holds as a theme, but it is spread across two verbs and an adjective.
- **Fix:** In the note, say "The same idea, with a related verb (πληρόω here, πίμπλημι in 4:31), makes the
  contrast." In `views.L` and the spec box, speak of Luke's "filling words" and name the two verbs and πλήρης. The
  spec can stay as a theory about the vocabulary.

### 2. Major: Stephen is not "the only person in the New Testament besides Jesus" to use "the Son of Man"
- **Where:** notes.json 7:56 ("The Son of Man from someone else's lips"); topics.json `son-of-man` ("Stephen is the
  only person in the New Testament besides Jesus to call Jesus 'the Son of Man'").
- **Evidence:** In John 12:34 the crowd uses the full title twice. This site's Plain English Translation reads: "Then how can you say
  the Son of Man has to be lifted up? Who is this Son of Man?" The angels at the tomb also use it (Luke 24:7), though
  they are repeating Jesus' words.
- **Fix:** Say that this is the only place outside the Gospels where anyone but Jesus uses the title, and the only
  place where a believer uses it to confess Jesus. Revelation 1:13 and 14:14 have only "one like a son of man".
  Make the same change in the topic section.

### 3. Major: settings cards state a post-70 date for Acts as settled
- **Where:** chapters.json ch. 6, setting 6:11–14, `readers`: "Luke's readers, who knew that the temple had fallen in
  AD 70". Ch. 7, setting 7:2–53, `readers`: "For Luke's readers, after the temple fell in AD 70". Also notes.json
  6:14: "By the time Luke wrote, Rome had destroyed the temple in AD 70, and his first readers knew it."
- **What is wrong:** book.json "Date" gives three views: about AD 62, 80–90, or 100–120. The reviewer brief (item 7)
  forbids stating a debated date as settled.
- **Fix:** Make each statement conditional, for example: "If Acts was written after AD 70, as most scholars think,
  Luke's readers knew the temple had fallen; if it was written about 62, the speech read as a warning." Or add a
  `views` pair to the 7:2–53 card for the two datings.

### 4. Minor: quotations that are not the site's Plain English Translation
The build's checker misses these because of their form (same-book references, or a reference that does not directly
follow the quote). Each should quote the Plain English Translation exactly, or be reworded so it is not a quotation.
- **6:5 note "Philip the evangelist":** quotes "Philip the evangelist, one of the Seven" (21:8–9). The 21:8 Plain English Translation
  reads "the home of Philip the evangelist ... He was one of the Seven."
- **7:25 note:** "in ignorance" (3:17). The 3:17 Plain English Translation reads "you did not understand what you were doing".
- **7:54 note:** "cut to the heart" (2:37). The Plain English Translation reads "These words pierced their hearts."
- **7:48 note:** "made with hands" / "not made with hands" (Mark 14:58). The Mark Plain English Translation reads "that human hands
  made ... that no hands made".
- **6:15 note:** "like an angel of God" for 1 Samuel 29:9 and 2 Samuel 14:17. The Plain English Translation has "as good as an angel of
  God" and "like God's angel".
- **5:42 note:** "from house to house" (as in 2:46). The 2:46 Plain English Translation has "In one house after another". Present it as
  a gloss on κατ' οἶκον, not tied to 2:46.
- **7:55 note "Why is Jesus standing?":** "(Isaiah 3:13 in the Greek, 'the Lord stands to judge')". The Septuagint
  has καταστήσεται εἰς κρίσιν ("will take his place for judgment"); it is the Hebrew that has "stands". The site's
  Isaiah 3:13 reads "The LORD has risen to argue his case; / he is on his feet to judge the peoples." Cite that
  Plain English Translation instead, and add Isaiah 3:13 to `r`.

### 5. Minor: the dating of Isaiah 66 is stated as fact
- **Where:** notes.json 7:49: "Isaiah spoke to people rebuilding the temple after the exile".
- **What is wrong:** This is the critical (Third Isaiah) view. The traditional view assigns the chapter to Isaiah of
  Jerusalem.
- **Fix:** "Many scholars place this oracle among people rebuilding the temple after the exile; traditional readers
  assign it to Isaiah himself."

### 6. Minor: small factual slips
- **7:43 note "Moloch and Rephan":** "the R and K being easily confused" is not explained and, as written, is
  doubtful. Kappa and rho are not alike in Greek uncials. Say "probably a corruption of Kaiwan/Kiyyun in
  transmission" (Bruce, Barrett) without the letter claim, or say which script is meant and cite a source.
- **5:5 note:** "The Bible uses it only three times". ἐκψύχω also occurs in the Septuagint (Ezekiel 21:7, Greek
  21:12; Judges 4:21 in Alexandrinus). Say "The New Testament uses it only three times."
- **Ch. 6 deep "Were the Seven the first deacons?":** "since Stephen and Philip preach and baptize". Only Philip
  baptizes (8:12, 38). Say "preach, and Philip baptizes".
- **5:34 note "Gamaliel the Elder":** the legend that Gamaliel was buried beside Stephen comes from Lucian's
  *Revelatio* (415), not the Recognitions, but no source is cited for it. Add `lucian-revelatio`; the key already
  exists in the stephen proposal.
- **7:58 note "Saul enters the story":** the "line often credited to Augustine" is Sermon 382, whose authorship is
  doubted. Name the sermon and say so, so the hedge is concrete.

### 7. Minor: works naming
- **7:52 note "The Righteous One":** `r` has "Wisdom 2:12–20". The works.json name is "Wisdom of Solomon", and
  "Wisdom" is not an aka. The body correctly says "The Wisdom of Solomon". Use "Wisdom of Solomon 2:12–20" so the
  tier mark shows.
- **5:30 note "Hanging him on a tree":** "the Nahum commentary from Qumran" matches no name or aka of
  `nahum-pesher`. The aka is "Qumran commentary on Nahum". Write "the Nahum Pesher (4Q169)", or add "Nahum
  commentary" to the aka in the proposal.
- The four proposed works are accurate as written: Temple Scroll column 64; 4Q169 and the Lion of Wrath; 4Q175 dated
  about 100–75 BC; the Recognitions tiered early, "in no church's Bible".

### 8. Minor: KJV-visible variants left out
- **5:32:** the Byzantine text and TR add αὐτοῦ. The KJV reads "we are *his* witnesses of these things".
- **5:37:** the Byzantine text and TR have λαὸν ἱκανόν. The KJV reads "drew away *much* people".
- **7:18:** the Byzantine text and TR omit ἐπ' Αἴγυπτον. The KJV reads "another king arose", without "over Egypt".
- STYLE asks for an entry wherever the KJV reads noticeably differently. Add 5:32 and 7:18 at least. 5:37 can go
  in a note.

### 9. Minor: the reading text of the Bezae variant at 6:10
- **Where:** variants.json 6:10, reading 1.
- **What is wrong:** The `plain` ends on a dangling fragment ("... Unable to face the truth,"). When toggled, it runs
  into 6:11 "So they planted ...", and the result is ungrammatical. It also leaves out Bezae's other changes in the
  same verse, "the wisdom that was in him" and "the Holy Spirit", which Metzger reports.
- **Fix:** Make the `plain` a whole sentence, for example "... because he refuted them boldly. They could not face
  the truth." Mention the other Bezae changes in `b`.

### 10. Minor: officers and jail guards blur in 5:22–26
- **What is wrong:** The Plain English Translation uses "guards" for both ὑπηρέται (5:22, 26, the temple officers, per the nt term) and
  φύλακες (5:23, the sentries at the jail doors). As a result the guards report that "the guards were posted at the
  doors".
- **Fix:** Keep "guards" for ὑπηρέται as the term requires, and make φύλακες "the sentries" or "the jailers" in 5:23.

### 11. Minor: wording and drift in the Plain English Translation
- **5:39 "You might even find yourselves fighting against God":** the last five words match the NIV's phrasing. The
  Greek θεομάχοι εὑρεθῆτε also allows "be found to be God-fighters" / "be found fighting God". Recast, for example
  "You might even turn out to be fighting God."
- **6:3 "full of the Spirit and of wisdom":** the repeated "of" matches the ESV exactly. The Greek (πλήρεις
  πνεύματος καὶ σοφίας) does not force it. Consider "full of the Spirit and wisdom" (and the same in topics.json
  `deacons`).
- **5:20 "every word of this Life":** the capital L builds the interpretation from the 5:20 note into the text.
  STYLE says not to add interpretation. Use "this life" and leave the reading to the note.
- **5:38 "this scheme or this work":** βουλή is neutral ("plan, purpose"). "Scheme" makes Gamaliel sound hostile,
  which works against the note's "sincere counsel" reading. Use "plan".
- **6:13 "This man keeps on talking ... He never stops":** this renders οὐ παύεται λαλῶν twice. Use one of the two.
- **7:23 "it came up in his heart":** a Hebraism kept as it stands. STYLE asks for idioms in plain English ("he made
  up his mind to go and see").

### 12. Minor: 7:46 loses the find / find word play
- **The Greek:** ὃς εὗρεν χάριν ἐνώπιον τοῦ θεοῦ καὶ ᾐτήσατο εὑρεῖν σκήνωμα, "who found favor ... and asked to
  find a dwelling".
- **What is wrong:** The Plain English Translation changes the subject ("God looked on David with favor"). That loses both the Old
  Testament idiom "find favor before" (as at 7:10) and the echo between the two forms of "find".
- **Fix:** "David found favor with God, and he asked that he might find a dwelling for the God of Jacob."
- **The variant entry itself is sound.** Optionally, add Westcott-Hort and Tischendorf to the readings' witness
  lists, as the TAGNT and Tischendorf report them, so the reader sees that the editions really are split.

### 13. Minor: a wrong related topic in the deacons proposal
- **Where:** `content/proposals/nt/topics/deacons.json` `related`.
- **What is wrong:** It lists "elders", but `content/topics/elders.json` is "The Twenty-Four Elders" of Revelation.
  That topic was also the reason the brief let this part create `deacons` (no church-offices topic exists), so the
  link is wrong.
- **Fix:** Remove "elders" from `related`, or link a church-offices topic if one is made. Raise it with the lead in
  `content/proposals/nt/topics.md`.

### 14. Minor: traditions cards say more than their sources do
- **Ch. 5 trinity card, Catholic view:** "the church reads 5:3–4 as one of the texts that show it" is attached to
  CCC 685, which does not cite Acts 5. Either drop the clause or attribute it to the fathers (Basil, *On the Holy
  Spirit*; Ambrose), whom the 5:4 note already mentions.
- **Ch. 7 prayer card, Reformed view:** "ordinarily prayer is made to the Father ... but the Son may be addressed, as
  Stephen did (Westminster Confession 21.2–3)". WCF 21.2–3 says that worship goes to Father, Son and Spirit and that
  prayer is made in the Son's name by the Spirit's help. The "as Stephen did" part is not in the Confession. Mark it
  as commentary, or cite a Reformed theologian for it.
- The card is otherwise fair, and the real conflict (Jehovah's Witnesses) is stated as their own literature states
  it.

### 15. Minor: the "every difference" list leaves some out
- **Where:** chapters.json ch. 7 deep "Stephen's speech and the Old Testament: every difference".
- **What is missing:**
  - 7:29: Moses flees "at this word", where Exodus 2:15 says he fled because Pharaoh sought to kill him.
  - 7:32: he trembles, where Exodus 3:6 says he hid his face. The 7:32 note mentions this, but the list does not.
  - 7:5: Abraham had "not even room to plant a foot", but Genesis 23 has him buy a field. The 7:5 note touches on
    this.
- **Fix:** Add the three, or retitle the list "the main differences".

### 16. Minor: mechanics and meta text
- **Note `kind` on non-word notes:** the 7:19 note (`type` echo, `kind` "nu") and the 7:38 "living sayings" note
  (`type` views, `kind` "nu"). STYLE defines `kind` for `word` notes only. Make them `word` notes or drop `kind`.
- **7:42 note:** "Amos is not yet translated on this site" is production meta-text that will go stale. Drop it.
- **Note references:** some names in note bodies are missing from their `r` lists:
  - 6:1 "Widows" note: Deuteronomy 24:19–21.
  - 6:6 "Who laid hands" note: 28:8.
  - 6:15 note: Matthew 28:3 and 1 Samuel 29:9.
  - 7:25 note: Luke 18:34.
  - 7:55 note: Isaiah 3:13.

  Add them so the cited-by index is complete.

## Fixes applied
1. Fixed. The 5:3 note now names the two verbs (plēroō in 5:3, pimplēmi in 4:31). Chapter 5 `views.L` and the spec box now speak of Luke's "filling words" and name plēroō (5:3, 5:28), pimplēmi (4:31, 5:17) and the adjective plērēs (6:3, 5, 8; 7:55). The spec is kept as a theory about vocabulary.
2. Fixed. The 7:56 note now says the Gospel exceptions repeat Jesus' words (John 12:34, quoted from the site's Plain English Translation; Luke 24:7). It says Stephen is the only one outside the Gospels and the only believer to use the title to confess Jesus. Both are added to `r`. The son-of-man topic section is corrected the same way.
3. Fixed. The readers on the 6:11–14 and 7:2–53 settings cards and the 6:14 note are now conditional ("If Acts was written after AD 70, as most scholars think ... if about 62 ..."). This matches book.json "Date".
4. Fixed, all seven:
   - 6:5 now quotes the 21:8 Plain English Translation ("Philip the evangelist", "was one of the Seven").
   - 7:25 paraphrases 3:17.
   - 7:54 quotes "pierced their hearts".
   - 7:48 quotes the Mark 14:58 Plain English Translation.
   - 6:15 quotes the 1 Samuel 29:9 and 2 Samuel 14:17 Plain English Translation.
   - 5:42 no longer quotes 2:46; κατ' οἶκον is explained as a gloss.
   - 7:55 drops the wrong Greek claim, quotes the site's Isaiah 3:13 and adds it to `r`.
5. Fixed. The 7:49 note gives both the critical view (post-exilic) and the traditional one (Isaiah himself).
6. Fixed, all five:
   - 7:43 drops the R/K claim ("changed as the name was copied; just how is uncertain").
   - 5:5 now says "New Testament" and mentions the Septuagint use (Ezekiel 21:7).
   - The ch. 6 deep now says "preach, and Philip baptizes (8:12, 38)".
   - 5:34 credits the burial legend to Lucian's Revelatio and adds `lucian-revelatio`.
   - 7:58 names Sermon 382 and says its authorship is doubted.
7. Fixed. "Wisdom of Solomon 2:12–20" is used in the 7:52 body and `r`. 5:30 now says "the Nahum Pesher (4Q169)", the works.json name. No aka change was needed.
8. Fixed. New variant entries at 5:32 ("his witnesses", Byz/TR) and 7:18 ("over Egypt" lacking in Byz/TR; NA28 brackets it). The 5:37 Byz/TR "much people" (λαὸν ἱκανόν) is now in the Judas note.
9. Fixed. The Bezae reading at 6:10 is now whole sentences. A `b` reports Bezae's other changes ("the wisdom that was in him, and the Holy Spirit").
10. Fixed. In 5:23 φύλακες is now "the sentries". "Guards" stays for ὑπηρέται per the nt term.
11. Fixed, all six, each rebuilt from literal.js with a fresh drift audit:
   - 5:39: "You might even turn out to be fighting against God." This keeps "fighting against God", which Acts 24-28 quotes.
   - 6:3: "full of the Spirit and wisdom". The 6:3 variant and the deacons topic section are updated to match.
   - 5:20: "this life". The note anchor and title are updated, and the chapter 5 settings quote.
   - 5:38: "plan".
   - 6:13: "keeps on talking against the holy place and the law". "He never stops" is dropped, and the variant readings and note anchor are updated.
   - 7:23: "he made up his mind to go and see how his brothers, the Israelites, were doing".
12. Fixed, per the lead's decision ("favor" and "the God of Jacob" stay). The 7:46 Plain English Translation is now "David found favor with God. He asked to be allowed to find a dwelling for the God of Jacob." This restores the find/find echo and the 7:10 idiom. Westcott-Hort and Tregelles are added to the "God" witnesses (from TAGNT). Tischendorf is not added: it is not in our data.
13. Declined. The lead decided that `elders` will be retitled at publish as a whole-Bible "Elders" topic. The issue is already raised in proposals/nt/topics.md, so the `related` link stays.
14. Fixed.
   - Catholic trinity card: the unsupported clause is dropped. The 5:4 note already gives the fathers' reading.
   - Reformed prayer card: the card now says the Confession does not take up Stephen's case. "As Stephen did" is credited to Calvin's commentary on Acts (`calvin-acts`, an existing key, added to this part's sources).
15. Fixed. 7:5 (the Machpelah purchase), 7:29 (why Moses fled) and 7:32 (trembled / hid his face) are added. The list is retitled "the differences" and called "the main ones".
16. Fixed.
   - `kind` is removed from the 7:19 echo note and the 7:38 views note.
   - The "not yet translated" meta-text is dropped from 7:42, and its `r` is reordered so the bare 15:16–18 comes first.
   - Missing references are added: Deuteronomy 24:19–21 (6:1), 28:8 (6:6), Matthew 28:3 and 1 Samuel 29:9 (6:15), Luke 18:34 (7:25), Isaiah 3:13 (7:55).
   - Also fixed: bare references inside other books' brackets (6:1, 7:38, 7:42, 7:48, ch. 7 deep Genesis 12:4, and three others). The 6:13 note `r` is reordered so 21:28 is not read as Matthew.
