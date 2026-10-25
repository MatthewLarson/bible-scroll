# Hostile review: Matthew 19–23 (part 19-23)

Reviewer: Claude (hostile review per tools/agent-reviewer.md, tools/brief-nt.md, tools/brief-mat.md). Date: 2026-10-24.

## Verdict

This is a strong part. The Plain follows the SBLGNT word for word in every verse I checked against `sbl` and the TAGNT edition letters in `w`. It keeps the hard edges of the Greek ("yoked together", "make room for", "is your eye evil because I am good?", "He will destroy those evil men in an evil way", "muzzled"). It handles 19:16–17, 21:29–31 and 23:14 exactly as the brief requires. I found no verse that depends on the NIV or ESV; 22:21 comes closest, and only in its structure. The notes are dense, accurate and well sourced. I could verify almost every rabbinic, Josephus and Qumran citation, including Gittin 9:10, Ant. 4.253, CD 4:20–5:2, 11QT 45:12–14, Sanhedrin 98a and 90b, y. Berakhot 2:8, Sotah 22b, Kelim 25:1, Ma'aserot 4:5 and Shekalim 1:1. Chapter 23 is fair: it is honest about the polemic and about its later misuse without softening the text. The part still needs revision before it passes. Two witness claims in variants.json are wrong: Bezae at 19:9, and W at 23:14. The brief's rule that every SBL/NA28/THGNT disagreement gets an entry is broken at 22:13, and several KJV-visible differences have no entry. The 21:43 traditions card treats the Lutheran and Catholic traditions unevenly. The 19:14 card leaves out the Reformed view, which is the main covenantal argument from this very verse, and the 19:9 card has no Latter-day Saints or Methodist view. The build check reports 0 errors and 0 warnings in this part. The one error and two warnings it prints belong to Num/11-21 and to Mat/book.json. Overall verdict: **revise (minor-to-moderate), then pass**. Counts: 0 critical, 6 major, 17 minor.

## Findings

### 1. Major: variants.json 19:9 (first entry): Bezae is on the wrong side
- **Problem:** Reading 0 (μὴ ἐπὶ πορνείᾳ) lists "Bezae (05)", attributed to Metzger. In fact Bezae reads παρεκτὸς λόγου πορνείας with Vaticanus.
- **Evidence:** Tischendorf's apparatus on 19:9 (Source Library, book 6953a88c77f38f6761bd19d6, page 376) reads: "μη επι ... c. CEFGHIKMNSUVZΔ al fere150 ... BD al9 Or3 Chr^mosc παρεκτος λογου πορνειας". D stands with B. Reading 1 also leaves D out, and its witness list is thin ("family 1 and some other witnesses").
- **Fix:** Move Bezae (05) to reading 1. Check f13 and 33 in the NA28 apparatus or Metzger, and add them to reading 1 if they belong there. Name ℵ, C(corr), L, W, Z and Θ for reading 0 only as far as Metzger or NA28 actually supports each one.

### 2. Major: variants.json 23:14: W is placed wrongly, and the TR claim is uncertain
- **Problem:** Reading 1 says "Washington (W) and family 13 after 23:13; the Byzantine majority before 23:13".
- **Evidence:** The standard apparatus (NA27/28, as also reproduced in Comfort and in the UASV summary at uasvbible.org) gives the placement before 23:13 as "W 0102 0107 Maj it syr-p,h" and the placement after 23:13 as "f13 it syr-c (so TR)". W sits with the Byzantine text, not with f13. Metzger's own wording on where "the Textus Receptus" puts the verse should be checked too. The KJV prints the verse after 23:13; Stephanus' Greek may not, since printed TR editions differ here.
- **Fix:** Reading 1 should read: "W, 0102, 0107, Byzantine majority, some Old Latin and Syriac (before 23:13); family 13, some Old Latin, Curetonian Syriac (after 23:13); KJV (after 23:13)". Keep the 'b' text about the RP numbering.

### 3. Major: variant entries the brief requires are missing
- **Problem:** The brief requires an entry wherever SBL, NA28 and THGNT differ in English, and wherever the KJV reads visibly differently. These places have no entry:
  - **22:13:** THGNT (Y), the Byzantine text and the TR add ἄρατε αὐτὸν καὶ ("take him away", KJV). SBL and NA28 omit the words. This is an SBL-vs-THGNT difference (`w`: ἄρατε[YTB] καὶ[YTB]), so the brief makes the entry mandatory.
  - **23:35:** Codex Sinaiticus as first written (with ms 6 and Eusebius, per the NA apparatus) omits υἱοῦ Βαραχίου. Note #115 offers "a copyist added the name" as an explanation without telling the reader that a manuscript actually lacks the words. That is the strongest evidence for that explanation, and it is left out.
  - **22:44:** The Byzantine text and TR read ὑποπόδιον ("footstool", KJV "thy footstool"), where SBL and NA28 have ὑποκάτω ("under"). A KJV reader will notice.
  - **21:13** (Byzantine ἐποιήσατε, KJV "ye have made it") and **22:7** (Byzantine ἀκούσας, KJV "when the king heard thereof") are smaller cases. Add them or say why they are skipped.
- **Fix:** Add entries for 22:13, 23:35 and 22:44 at least, with witnesses taken from Metzger, NA28 or Tischendorf. Tie the 23:35 entry to note #115.

### 4. Major: chapters.json ch. 21 traditions card on 21:43: the traditions are treated unevenly
- **Problem:** The Catholic answer gives only the Church's best modern teaching (Nostra Aetate 4, Catechism 839). The Lutheran answer opens with Luther's 1543 *On the Jews and Their Lies* and only then reaches the ELCA's 1994 repudiation. One tradition gets its strongest form; the other gets its worst history. Catholic history had its own replacement readings and anti-Jewish practice (the Good Friday prayer "pro perfidis Judaeis" until 1959–62, Lateran IV). STYLE.md requires each view in its strongest form. The misuse belongs in the chapter's deep dive or in the J/T lenses, not in one church's doctrinal answer. Other problems on this card:
  - The Orthodox answer has no source.
  - Its sentence "the fathers read the passage of the transfer of the kingdom to the church" is garbled.
  - "Modern Orthodox teaching also rejects collective guilt" is unsourced.
  - The Dispensationalist answer pins a specific reading of 21:43 ("refers to the generation that rejected Jesus") on the Scofield Reference Bible. I could not confirm that Scofield's note on 21:43 says this.
- **Fix:**
  - Give the Lutheran answer from Lutheran teaching: the ELCA 1994 Declaration, plus the LCMS or a Lutheran theologian on church and Israel. Move the 1543 tract to the deep dive "The kingdom taken away" or to the T lens, next to Chrysostom.
  - Either add a sentence on Catholic history as well, or keep both answers purely doctrinal.
  - Source the Orthodox view (Ware, or the Ecumenical Patriarchate's statements on Judaism), or soften it.
  - Quote Scofield's actual note on 21:43, or cite a named dispensational commentator (Toussaint, *Behold the King*; Walvoord, *Matthew*).

### 5. Major: chapters.json ch. 19 traditions card on 19:14 (infant baptism): the Reformed view is missing
- **Problem:** The card gives Catholic, Orthodox, Lutheran, Anglican and Baptist answers. It leaves out the Reformed covenantal view, which argues from this very text: Calvin, *Institutes* 4.16.7, builds on Jesus receiving the children. The Reformed answer differs from the Lutheran one: children of believers belong to the covenant, and baptism is a sign and seal, not the means of regeneration. Westminster Confession 28.4 and Heidelberg Catechism 74 state it. The Orthodox answer is also unsourced.
- **Fix:** Add `["Reformed", "...", ["calvin-institutes","westminster"]]` (Heidelberg too, if a key exists). Source the Orthodox answer, for example from Ware or Schmemann, *Of Water and the Spirit*.

### 6. Major: chapters.json ch. 19 traditions card on 19:9 (divorce): the Latter-day Saints and Methodist views are missing, and one source is weak
- **Problem:** The commissioning brief for this review expects the divorce card to include the Latter-day Saints view. It does not: the LDS view appears only on the 22:30 card. The LDS teaching is distinct. Civil divorce and remarriage are allowed. A temple sealing stays in force until the First Presidency cancels it, and a woman needs that cancellation before a new sealing. Methodists, a major tradition, are also missing. The United Methodist *Book of Discipline* allows remarriage after divorce. The Anabaptist answer says "Traditionally strict: Mennonite and Amish confessions taught..." but cites only the 1995 *Confession of Faith in a Mennonite Perspective*, which does not document the older rule.
- **Fix:** Add a Latter-day Saints view, sourced to the *General Handbook* (sealing cancellation) or a statement of the Church, and a Methodist view (Book of Discipline ¶161, Social Principles on divorce). Cite the Dordrecht Confession (1632), article 12, for the traditional Anabaptist rule.

### 7. Minor: variants.json 23:4: the follow choice and its reason are weak
- **Problem:** The Plain follows the SBLGNT alone against NA28 (bracketed) and THGNT. Those editions keep καὶ δυσβάστακτα, which has B, D, W and the Byzantine text behind it, as the entry admits. The brief allows following NA28 or THGNT against SBL after weighing the evidence. The 'why' does not weigh anything; it only says the SBL is the base text. It also claims the SBL editor "judged the words an addition from Luke 11:46". The SBLGNT has no textual commentary, so that motive is a guess. Metzger reports that a majority of the UBS committee thought the words were accidentally omitted.
- **Fix:** Either follow NA28/THGNT, or give a real argument: the shorter text is supported by L, f1 and the Old Latin, the rare δυσβάστακτος is found in Luke 11:46, and assimilation to Luke is possible. Drop the motive assigned to Holmes, or label it as inference.

### 8. Minor: 21:44: the Plain is interpretive, and the variant's 'why' is garbled
- **Problem:** "Anyone who trips over this stone" renders ὁ πεσὼν ἐπὶ τὸν λίθον, "the one who falls on this stone". This hides the repeated πίπτω: the verse is about falling on the stone and the stone falling on someone (ἐφ' ὃν δ' ἂν πέσῃ). "Trips over" imports Isaiah 8:14 into the text, and the note already makes that link. The variant's 'why' says "in Matthew it sits a little after where Luke has it". That misstates the standard argument (Metzger): an interpolator would have placed the verse right after 21:42, and its omission is explained by the eye skipping from αὐτῆς (21:43) to αὐτόν (21:44). Tischendorf (page 394) also judged it taken from Luke, so the opposite view deserves a sentence.
- **Fix:** Use "Anyone who falls on this stone will be shattered, and anyone it falls on, it will scatter like chaff." Rewrite the 'why' with the αὐτῆς/αὐτόν explanation and the case for interpolation.

### 9. Minor: variants.json 21:12: the 'why' is inaccurate
- **Problem:** It says "'The temple of God' is a phrase found nowhere else in the Gospels". In English the phrase is in Matthew 26:61 (τὸν ναὸν τοῦ θεοῦ). Metzger's point is about τὸ ἱερὸν τοῦ θεοῦ.
- **Fix:** Say "the Greek phrase for the temple courts of God (τὸ ἱερὸν τοῦ θεοῦ) occurs nowhere else in the New Testament."

### 10. Minor: variants.json: witness gaps
- **Problem:**
  - At 19:20, reading 1 is labeled "Later manuscripts", but "from my youth" is in C and W (400s–500s) and in a form in D. "Later" is misleading.
  - At 22:30, neither reading names a single manuscript, which breaks the brief ("names the editions and the manuscripts behind each reading").
  - At 23:8, reading 1 names only the Byzantine majority, though καθηγητής is in D, L, W, Θ and others.
- **Fix:** Name the uncials for each reading from Metzger, NA28 or Tischendorf.

### 11. Minor: plain.txt: small accuracy and consistency points
- **20:15:** "Is it not lawful" renders ἔξεστιν, which is "permitted" at 19:3 and 22:17. Use "permitted" so readers see the same word.
- **21:25:** "why did you refuse to believe him?" sharpens οὐκ ἐπιστεύσατε. Use "did you not believe him".
- **22:25:** "in our town" adds to παρ' ἡμῖν ("among us").
- **22:46:** "not one of them had the nerve" narrows οὐδὲ ἐτόλμησέν τις, which means "nor did anyone dare".
- **22:12:** ἐφιμώθη ("was muzzled", as the same verb is rendered at 22:34) becomes "had nothing to say", and the link to 22:34 is lost. Use "was silenced" or "was speechless", or add a note.
- **19:10:** ἡ αἰτία echoes 19:3 κατὰ πᾶσαν αἰτίαν. "Position" against "ground" loses the echo. Consider "If that is the case of a man with his wife", or a note.
- **21:19:** "a single fig tree" overtranslates the indefinite μίαν. Use "a fig tree".
- **22:21:** "give Caesar back what is his, and give God what is God's" is structurally close to the NIV ("give back to Caesar ... and to God what is God's"). This is not copying; consider "Pay back to Caesar what belongs to Caesar, and to God what belongs to God", or keep it.
- **Fix:** As stated in each point.

### 12. Minor: chapters.json settings: debated dates are stated as settled
- **Problem:** The `readers` fields of 21:1–11, 21:33–46, 22:1–14, 23:13–36 and 23:37–39 all say "Matthew's readers after AD 70" without qualification. Note #72 itself presents Rengstorf and Gundry against the post-70 inference. The 21:1–11 setting says "the Sunday before Passover", and the 20:29–34 setting says "the day before the entry into Jerusalem". Matthew says neither; the timing is John's and tradition's.
- **Fix:** Write "probably after AD 70 (most critical scholars)" once per card, and use "traditionally Palm Sunday" for the day.

### 13. Minor: chapters.json ch. 23 deep dive "Matthew 23 and its misuse": a judgment stated as fact
- **Problem:** "the chapter is not a fair portrait of the Pharisees or of Judaism" is the writer's own verdict. Traditional commentators (France, Keener, Carson) hold that the woes target specific practices and leaders accurately and were never meant as a description of all Pharisees. That view should be given in its strongest form.
- **Fix:** Attribute the claim: "Many scholars, Jewish and Christian, judge that taken as a portrait of all Pharisees or of Judaism the chapter is unfair; others hold that it targets specific abuses...". Keep the misuse paragraph as it is.

### 14. Minor: notes.json: factual slips
- **#103 (23:15):** "a Pharisee named Eleazar urged King Izates". Josephus (Ant. 20.43) calls Eleazar a Galilean "very strict about the ancestral laws", not a Pharisee. Write "a Galilean named Eleazar, known for his strictness".
- **#63 (21:33):** "A new vineyard took about four years ... so the owner's first claim came only then." Under Leviticus 19:23–25 the fruit is forbidden for three years and holy in the fourth, so the owner eats only in the fifth year. Jeremias says the fifth year.
- **#79 (22:20):** "The denarius commonly used in Judea under Tiberius". Silver denarii were not common in Judean hoards before AD 70, where Tyrian coins dominated. Write "A denarius of Tiberius, the coin Rome's tribute was reckoned in, ...".
- **#3 (19:3):** "Josephus, writing as a Pharisee". Whether Josephus was a Pharisee is debated (Life 12; Steve Mason). Write "Josephus, who says he followed the Pharisees".
- **Fix:** As stated in each point.

### 15. Minor: chapters.json ch. 22 spec box "A ring of images": internal error
- **Problem:** The box says "Matthew 19–22 returns three times to Genesis 1" and counts 22:37. But 22:37 quotes Deuteronomy 6:5, not Genesis 1, so the "three times" is really two.
- **Fix:** Say "twice to Genesis 1 (19:4; 22:20), and then to the command to love God with the whole self (22:37)", or rephrase the theory.

### 16. Minor: notes #73 and #74: Augustine sources
- **Problem:** The wedding garment as love, and the mixed hall used against the Donatists, come mainly from Augustine's Sermon 90 (and his anti-Donatist writings). Both notes cite `augustine-city`, and *City of God* is not the place for the "love" reading.
- **Fix:** Add a source for Augustine's Sermon 90, or cite the anti-Donatist work, or drop the key.

### 17. Minor: notes: Old Testament and Apocrypha quotations that do not match this site's Plain (STYLE.md: quote the site's Plain exactly)
- **Problem:**
  - Note #52 has "a house of prayer for all peoples". The site's Plain of Isaiah 56:7 reads "a house of prayer for all the peoples".
  - Note #44 has "Look, your salvation comes". The site's Plain of Isaiah 62:11 reads "Look, your salvation is coming!".
  - Note #20 has "almsgiving delivers from death" (Tobit 4:9–10). The site's Plain of Tobit 4:10 reads "alms rescue from death".
- **Fix:** Quote the site's wording.

### 18. Minor: sources.json: duplicate keys for works already keyed elsewhere
- **Problem:** The brief says to reuse existing keys. These works already have keys in other parts:
  - `na28` (Jhn/01-04) = `nestle-aland-28`
  - `sblgnt` = `sblgnt-holmes`
  - `thgnt` = `thgnt-2017`
  - `levine-misunderstood` = `levine-misunderstood-jew`
  - `jerome-comm-matthew` (Mat/05-07) and `jerome-matthew` (1Ma) = `jerome-matthew-23`
  - `origen-matthew-commentary` (Mat/14-18) = `origen-comm-matthew`

  Parallel writing may explain the Matthew pairs, but John's keys existed already.
- **Fix:** Switch to the existing keys, or report the duplicates to the lane lead for merging.

### 19. Minor: topics: missing tags
- **Problem:**
  - The ch. 23 misuse deep dive, note #116 and the 21:43 material are not tagged `anti-judaism`. That topic exists in proposals/nt and part 26-28 already uses it.
  - topics.json contributes to `triumphal-entry`, but the chapter 21 `topics` list and the notes on 21:1–11 never use it.
  - `gehenna` (23:15, 23:33), `herod-family` (the Herodians, 22:16) and `john-the-baptist` (21:25–32) are not tagged.
- **Fix:** Add these ids to the chapter `topics` lists and to the relevant notes (`top`).

### 20. Minor: content/proposals/nt/topics/celibacy.json: thin core
- **Problem:** The id is unique; nothing in topics/ or proposals/ covers celibacy, eunuchs or virginity, so the new topic is justified. But `sources` is empty, and the core leaves out the Jewish context a reader needs:
  - the duty to marry and have children (Mishnah Yevamot 6:6), and Ben Azzai, the unmarried sage (b. Yevamot 63b);
  - the celibate Essenes in Josephus (War 2.120–121), Philo (Hypothetica 11.14) and Pliny (Natural History 5.73).

  The `aka` list repeats the id ("celibacy").
- **Fix:** Add a short "Jewish background" section with refs, and sources (`josephus`, `philo-...`, `mishnah-yevamot`).

### 21. Minor: chapters.json ch. 23 card "Call no one father": the Catholic source does not support the claim
- **Problem:** The Catholic answer cites `ccc` with no paragraph, and the Catechism has no paragraph on 23:9 or on calling priests "Father". The Orthodox and Baptist answers are unsourced.
- **Fix:** Cite a real Catholic source (a named commentator or apologist), or drop the key and keep 1 Corinthians 4:15 as the textual basis.

### 22. Minor: views missing or uncredited
- **Problem:**
  - The ch. 19 reading "Read as household teaching" is Warren Carter's thesis (*Households and Discipleship: A Study of Matthew 19–20*, 1994), and it is not credited.
  - The notes on 23:2–3 leave out Mark Allan Powell's influential reading ("Do and Keep What Moses Says", *JBL* 114, 1995): Moses' seat stands for the scribes' social role as those who held and read the Torah scrolls, so "whatever they say" means when they read Moses.
  - The Caesar card has no Orthodox view (symphonia).
- **Fix:** Credit Carter. Add Powell as reading (5) in note #94. Add an Orthodox answer to the Caesar card, or explain why there is none.

### 23. Minor: glosses and term consistency
- **Problem:**
  - The gloss on 19:23 "Amen, I tell you" gives "I tell you the truth". That is the NIV's own stock rendering of the phrase, so it brings back the familiar wording that the binding term was chosen to avoid. The term's note says Jesus' "amen" before a saying was unique.
  - Note #46 says "the Feast of Booths", but the binding term for σκηνοπηγία is "the Festival of Shelters". The term binds the Plain, but readers meet both names.
- **Fix:** Gloss 19:23 as "I tell you solemnly" or "mark my words". Write "the Festival of Shelters (Booths)" in note #46.

### Checked and found sound (no action)
- **Translation:** 19:9 (SBL text including the final clause NA28 omits, with an entry); 19:12; 19:17 (SBL "Why are you asking me about the good?"); 21:29–31 (ℵ order, matching NA28, SBL and THGNT); 21:43 (ἔθνει "a nation"); 22:17–19 ("head tax", "the coin you pay the tax with"); 23:2 (aorist ἐκάθισαν "have sat down"); 23:4 (follows SBL; see finding 7).
- **Omitted verse:** 23:14 follows the brief's formula exactly.
- **No NIV/ESV dependence found:** 19:6, 19:14, 19:24, 20:28, 21:13, 22:37–39, 23:3, 23:24, 23:27 and 23:37 all differ clearly from both.
- **Witness lists checked against Tischendorf:** 21:29–31 (B, 4, 13, 69, 124 ... cop, arm with the reversed order; D and the Old Latin with the first order and "ὁ ἔσχατος"; Jerome's comment on "novissimus" is quoted correctly) and 21:44 (omitted by D, 33, Old Latin, Origen, Irenaeus).
- **Variant entries consistent with Metzger as I know it:** 19:16, 19:17, 19:29 (both), 20:7, 20:16, 20:22, 21:12, 22:35, 23:8, 23:26 and 23:38.
- **Divorce settings card:** names Hillel and Shammai and the Torah rule at stake, as the brief asks.
- **Settings coverage:** all 23 settings cards are present; every parable, discourse and controversy has one.
- **Mechanics:** the build check is clean for this part (0 errors, 0 warnings). There are no em-dashes and no curly quotes.

## Fixes applied

1. Done. Witnesses for 19:9 are now taken from Tischendorf's apparatus. Bezae (05) moves to the "apart from a matter of" reading with Vaticanus. The first reading now names C, L, Z and most later manuscripts. In the second 19:9 entry, Ephraemi as first written now sits with the omission (Tischendorf); Sinaiticus is credited to the NA28 apparatus.
2. Done. 23:14 placement: W, 0102 and 0107 are listed with the Byzantine majority before 23:13 (NA28 apparatus), and family 13, some Old Latin and the Curetonian Syriac after 23:13 (Tischendorf, NA28 apparatus). The 'b' text says the KJV prints the verse after 23:13 and that printed TR editions differ. The RP numbering note is kept.
3. Done. New entries for 22:13 "take him away" (three readings, Bezae's form included), 22:44 "under" against "footstool", and 23:35 "son of Berechiah" (Sinaiticus as first written and two lectionaries omit it; Jerome's Nazarene reading "son of Jehoiada"). The 23:35 note now points to this entry. 21:13 and 22:7 are skipped: one is a change of tense ("you are making" / "you have made") and the other a change of word order. Neither changes the meaning, and both are visible only in KJV wording.
4. Done. The Lutheran answer now gives current Lutheran teaching (ELCA 1994). Luther's 1543 tract, Chrysostom and the Catholic Good Friday prayer "pro perfidis Judaeis" (wording changed 1959–62) are now in the deep dive "The kingdom taken away". The Orthodox answer is rewritten and sourced to Chrysostom. The Scofield claim is replaced by named dispensational commentators: Toussaint for a future, believing Israel and Walvoord for the church.
5. Done. Added a Reformed covenantal view (Calvin, Institutes 4.16.7; Westminster 28.4; Heidelberg 74), and the Orthodox answer is now sourced to Ware.
6. Done, following lane decision 1. The 19:9 card is trimmed to what 19:3–12 adds (Moses' concession, "from the beginning", remarriage) and points to the 5:32 card. It now has Methodist (Book of Discipline paragraph 161) and Latter-day Saints (General Handbook, chapter 38: civil divorce, and sealing cancellation by the First Presidency) views. The weakly sourced Anabaptist, Anglican and Baptist answers are left to the 5:32 card.
7. Done. 23:4 keeps the SBLGNT text but now gives a real argument. It names the witnesses on each side (Tischendorf). It labels the reasoning as our own because the SBLGNT has no commentary, and it gives Metzger's report of the committee majority and Tischendorf's doubt that the words came from Luke.
8. Done. The Plain now reads "Anyone who falls on this stone will be shattered, and anyone it falls on, it will scatter like chaff." The 'why' gives the case for interpolation (Tischendorf) and the case against it: an interpolator would have placed the verse after 21:42, and the eye could skip from autēs to auton (Metzger). The omission witnesses now follow Tischendorf.
9. Done. The 'why' for 21:12 now says the Greek phrase to hieron tou theou occurs nowhere else in the New Testament.
10. Done. Uncials are now named for 19:20 (C and D for "from my youth", D without "my"), 22:30 (B, D, Old Latin, Sahidic, Curetonian Syriac and Origen against most manuscripts) and 23:8 (Bezae and most later manuscripts for "leader"), all from Tischendorf.
11. Done. 20:15 "Am I not permitted"; 21:25 "why did you not believe him?"; 22:25 "among us"; 22:46 "no one dared"; 22:12 "The man was speechless", with a gloss noting it is the verb "muzzled" of 22:34; 21:19 "a fig tree"; 22:21 "So pay back to Caesar what belongs to Caesar, and to God what belongs to God", with every quotation of it updated. For 19:10 the note now explains the aitia echo with 19:3; the Plain is kept because "ground" in 19:10 reads badly.
12. Done. Each `readers` field now says "probably after AD 70 (the view of most critical scholars)". 21:1–11 says "traditionally Palm Sunday" and gives John 12 as the source of the day; 20:29–34 says "shortly before the entry".
13. Done. The verdict in the deep dive is now attributed ("many scholars, Jewish and Christian"). The other view is given as France and Keener hold it: the woes target specific practices and leaders, accurately. The misuse paragraph is unchanged.
14. Done. 23:15 "a Galilean named Eleazar, known for his strictness"; 21:33 three years forbidden, the fourth holy, the owner's harvest in the fifth (Jeremias); 22:20 "A denarius of Tiberius, the coin Rome's tribute was reckoned in"; 19:3 "Josephus, who says he followed the Pharisees' way of life (Life 12)".
15. Done. The spec box now says Matthew returns "twice to Genesis 1 (19:4; 22:20), and then to the great commandment (22:37)".
16. Done. Both notes now cite a new key, augustine-sermon-90, in place of augustine-city. The 22:10 note names Sermon 90.
17. Done. Quotes now match the site Plain: Isaiah 56:7 "for all the peoples", Isaiah 62:11 "Look, your salvation is coming!", Tobit 4:10 "alms rescue from death".
18. Done, following lane decision 4. The six duplicate keys are dropped and the existing ones reused: na28, sblgnt, thgnt, levine-misunderstood, jerome-comm-matthew, origen-matthew-commentary. Witnesses are now credited to Tischendorf (tischendorf-nt8), Metzger or the NA28 apparatus by name, or the entry names editions only (20:19, 23:19).
19. Done. Topic ids added to the chapter lists: triumphal-entry, john-the-baptist and anti-judaism (ch. 21); herod-family (ch. 22); gehenna and anti-judaism (ch. 23). Notes tagged with top: 21:10 triumphal-entry, 21:32 john-the-baptist, 22:16 herod-family, 23:33 gehenna, 23:36 anti-judaism.
20. Done. celibacy.json has a new "Jewish background" section (Mishnah Yevamot 6:6; Ben Azzai, b. Yevamot 63b; Essenes in Josephus War 2.120–121, 160–161, Philo Hypothetica 11.14 and Pliny Natural History 5.73), and its sources are filled in. The duplicate "celibacy" is removed from aka. New key philo-hypothetica is defined in parts/19-23/sources.json.
21. Done. The ccc key is removed from the Catholic answer, which now rests on 1 Corinthians 4:15 as the textual basis. The Orthodox and Baptist answers describe common practice and are left without a source.
22. Done. Carter (Households and Discipleship, 1994) is credited in the ch. 19 reading. Powell's JBL 1995 reading is added as reading (5) in the 23:3 note. An Orthodox answer is added to the Caesar card: Byzantine "symphonia", and the Russian Orthodox Basis of the Social Concept, section III, on refusing obedience when the state demands apostasy.
23. Done. The 19:23 gloss now reads "I tell you solemnly". "Festival of Shelters" replaces "Feast of Booths" in both the 21:8 note and its preview. Lane decision 2: the 22:13 refrain now follows 8:12, "There people will weep and grind their teeth." The note and gloss anchors are updated.

Check: `VERBOSE=1 node tools/build.js --check Mat/19-23` reports 0 errors and 0 warnings (195 verses, 120 notes, 27 variants, 67 glosses, 33 topic contributions).
