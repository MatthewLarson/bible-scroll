# Hostile review: Matthew 5–7 (part 05-07), the Sermon on the Mount

Reviewer: Claude (hostile review per tools/agent-reviewer.md). Files reviewed: plain.txt, notes.json (103),
variants.json (22), glosses.json (51), chapters.json (3 pages, 12 settings, 9 traditions cards), topics.json (20
contributions), sources.json, and the proposed cores content/proposals/nt/topics/sermon-on-the-mount.json,
gehenna.json, lords-prayer.json. I checked every verse against the SBLGNT and the TAGNT edition letters in
texts/orig/Mat.json, compared with texts/auto/Mat.json, and checked Tischendorf (Source Library) at 7:13–14.

`VERBOSE=1 node tools/build.js --check Mat/05-07`: no errors in this part (the 1 error reported is in
Num/11-21 sources.json, `tosefta-sukkah`). There are 2 warnings in this part (finding 13).

## Verdict

This is a strong part. The translation is built from the Greek, not from a memorized English Sermon, and drift
toward the NIV or ESV is low for such a famous text. It follows the SBLGNT, with two reasoned departures to
NA28/THGNT (6:25, 6:33) and NA28 at 7:14, and each has a variant entry. The six "But I myself tell you" sayings
are rendered the same way each time. 5:22 (no "without cause"), 5:32 *porneia* ("sexual sin", with a balanced
note), 5:39, 6:11 *epiousios* and 6:13 ("the evil one") are all defensible. Notes are dense and well sourced, and
the rabbinic citations I checked (Shabbat 31a, 116b, 151b; Avot 1:1, 1:3, 2:1, 2:4; Gittin 9:3, 9:10; Bava Kamma
8:6; Sotah 1:7; Yoma 8:9; Shekalim 5:6; Berakhot 5:1; Shevuot 4:13 and 36a; Nedarim 1:3 and 3:4; Arakhin 16b;
Taanit 7a; Sanhedrin 100b), as well as Seneca, Josephus, 1QS, 1QM and the Didache, are correct. Most catechism
and confession numbers in the nine traditions cards are correct. Bornkamm's proposal (6:19–7:12 follows the
petitions of the Lord's Prayer) is stated accurately. The Kimhi claim about Gehenna is substantially right but
overstated.

There are no critical errors, but five things must be fixed before publication. (1) A manuscript claim about the
doxology is wrong: the oldest Latin (k) and the Sahidic Coptic do have a short doxology. (2) The divorce material
leaves out the oldest and most widely held traditional reading: separation for *porneia* but no remarriage. (3)
The note that the binding term list requires at the first "Amen, I tell you" (5:18) is missing. (4) 7:19 is said
to repeat 3:10 "word for word", but the two Plain English Translation verses differ. (5) The Wink reading is wrongly said to have
shaped Martin Luther King Jr.'s movement. The minor findings are mostly about precision. **Verdict: pass after
revision** (0 critical, 5 major, 27 minor).

## Findings

### Major

**1. Major: the doxology at 6:13 (chapters.json ch. 6 deep "Why the doxology is missing"; variants.json 6:13)**
- *Problem:* The deep dive says that "the earliest Latin and Coptic witnesses" lack the doxology. That is wrong.
  The Old Latin Codex Bobiensis (k), often called the most important Old Latin witness for Matthew, ends with a
  short form ("for yours is the power for ever and ever"). The Sahidic Coptic has the two-part form "for yours is
  the power and the glory forever", the same form the Didache has. The variant entry is a little better ("most
  Old Latin", "the Coptic (Bohairic)"). But reading 0 treats the Coptic as simply lacking it, and the Bohairic
  manuscripts are divided. Reading 1 does not mention the k and Sahidic short forms. Reading 0 also lists Gregory
  of Nyssa among the commentators who explain the prayer without the doxology. Metzger names Tertullian, Origen
  and Cyprian. I could not confirm Gregory of Nyssa, so drop him or give a source.
- *Evidence:* Metzger, *Textual Commentary* on Matthew 6:13 lists the shorter forms: k "power" only; sa and the
  Didache "power and glory"; syr-c "kingdom and glory". The NA28 apparatus agrees.
- *Fix:* In the deep dive, write "the oldest Greek manuscripts (Sinaiticus, Vaticanus, Bezae), most Old Latin
  manuscripts and the Vulgate". Add that some early versions have shorter forms: the Old Latin k ("power"), and
  the Sahidic Coptic and the Didache ("power and glory"). In the variant, change "the Coptic (Bohairic)" to "part
  of the Bohairic Coptic". Name the k and Sahidic forms in reading 1's `w` or in `b`, and verify or remove Gregory
  of Nyssa.

**2. Major: the divorce material leaves out the main traditional reading (notes.json 5:32 "The exception: porneia"; chapters.json ch. 5 settings 5:31–32 views; traditions card "Does the exception ... allow divorce"; topics.json marriage)**
- *Problem:* The note gives three readings: adultery as grounds (most Protestants), forbidden kinship (Leviticus
  18), and betrothal. The settings card gives two. None gives the reading that dominated the church for its first
  1,500 years and is still the Catholic one, also held by some evangelical scholars (Heth and Wenham, *Jesus and
  Divorce*). On this reading the exception permits separation from an unfaithful spouse but not remarriage, so it
  qualifies "divorces" and not "marries". This was the view of Jerome and Augustine. The Council of Trent
  (Session 24, canon 7) defends it against the Protestant reading. The Catholic view on the card cites `trent`
  but never says what Trent taught. It cites "Catechism 2384" for separation; separation is Catechism 2383, and
  2384 is about remarriage. The Orthodox reading (divorce for adultery, remarriage by economy) appears on the
  card but not in the note.
- *Evidence:* Jerome, *Commentary on Matthew* 19:9; Augustine, *On Adulterous Marriages*; Council of Trent,
  Session 24, canon 7; Catechism of the Catholic Church 2382–2386.
- *Fix:* Add "(4) separation is allowed for *porneia*, but not remarriage while the spouse lives (Jerome,
  Augustine; Catholic teaching since Trent; some evangelicals)" to the note and to the settings `views`. In the
  card, cite Catechism 2383 for separation and state Trent canon 7 in the Catholic answer. Do not suggest that
  the Catholic reading of the exception is mainly about annulment.

**3. Major: no note at the first "Amen, I tell you" (5:18)**
- *Problem:* content/proposals/nt/terms.json, which is binding, requires "note at first use: Jesus puts 'amen'
  first, which no one else did." 5:18 is the first use in Matthew; Jesus does not say it in chapters 1–4. This
  part has only a gloss ("I tell you the truth, and I stake my word on it"). Readers will meet "Amen, I tell you"
  six more times in this part (5:26; 6:2, 5, 16) with no explanation.
- *Fix:* Add a `word` note at 5:18 on "Amen, I tell you" with `orig` ἀμὴν (γὰρ) λέγω ὑμῖν (amēn legō hymin). It
  should say that *amen* normally answers someone else's words ("so be it"), that Jesus puts it first to
  guarantee his own word, and how often Matthew uses it. Cite Jeremias, *New Testament Theology* (already keyed
  as `jeremias-theology`).

**4. Major: 7:19 does not match 3:10, though the note says it repeats it "word for word" (plain.txt 7:19; notes.json 7:19)**
- *Problem:* The Greek of 7:19 is that of 3:10 without οὖν. The brief says the same Greek gets the same English,
  and the note tells readers they are identical. The Plain English Translation differs. 3:10 (part 01-04) reads "Any tree that fails
  to produce good fruit is being cut down and thrown into the fire." 7:19 reads "Any tree that fails to yield
  good fruit gets chopped down and thrown into a fire."
- *Fix:* Make 7:19 match 3:10 ("Any tree that fails to produce good fruit is being cut down and thrown into the
  fire."), or agree a common wording with the 01-04 writer through the lane lead. Note that εἰς πῦρ has no
  article, so "into fire" or "into a fire" is arguably better in both verses. Report the pair to the lead. Update
  the 7:19 note's anchor if the wording changes. "Yields" in 7:17–18 may stay.

**5. Major: a false historical claim about Walter Wink and Martin Luther King Jr. (chapters.json ch. 5 deep "Turn the other cheek: four ways of reading", point 3)**
- *Problem:* "Many scholars find this too clever, but it has shaped modern movements such as Martin Luther King
  Jr.'s." Wink published this reading in the 1980s and 1990s (*Violence and Nonviolence in South Africa*, 1987;
  *Engaging the Powers*, 1992). King died in 1968. King's nonviolence drew on Gandhi and on the Sermon itself,
  and Wink drew on King, not the other way round.
- *Fix:* Write "It builds on the practice of Gandhi and Martin Luther King Jr., and has influenced later
  nonviolent movements", or drop the clause.

### Minor

**6. Minor: 7:13, wrong word for "leads" and a missing "for" (plain.txt 7:13; variants.json 7:13)**
The Greek is ὅτι πλατεῖα ἡ πύλη καὶ εὐρύχωρος ἡ ὁδὸς ἡ ἀπάγουσα εἰς τὴν ἀπώλειαν. The participle "leading"
goes with the road, as the Plain English Translation correctly has it in 7:14 ("the road leading to life"). In 7:13 the Plain English Translation says
"The gate that leads to ruin is wide, and its road is roomy", and it drops ὅτι. *Fix:* "For the gate is wide,
and the road that leads to ruin is roomy, and many are going in through it." Update the anchor and both
readings' `plain` in the 7:13 variant.

**7. Minor: 7:6 changes number and mood ("Holy things are not for dogs, so do not give them any")**
The Greek is a single command with a singular object: Μὴ δῶτε τὸ ἅγιον τοῖς κυσίν, "Do not give the holy thing
to the dogs." The Plain English Translation adds a statement that is not in the text and makes the object plural. The note's
suggestion that "the holy thing" may be sacrificial meat depends on the singular. *Fix:* "Do not give what is
holy to the dogs, and do not toss your pearls ..." Update the anchors of the note, the gloss and the traditions
card quotation.

**8. Minor: small sharpenings and additions**
- 6:15 "If you refuse to forgive": the Greek ἐὰν μὴ ἀφῆτε means "if you do not forgive".
- 6:33 "added to what you have": προστεθήσεται ὑμῖν means "will be added to you" or "given to you as well".
- 7:2 "measuring cup": μέτρον means a measure, not a cup.
- 7:3 "you never notice": οὐ κατανοεῖς means "you do not notice".
*Fix:* Use the plain sense in each case.

**9. Minor: places that come close to the NIV or ESV (compared in my head; only a few words quoted)**
Overall drift is low, but four spots are close:
- 5:16, "see your good works and give glory to your Father who is in heaven", is the ESV word for word, though it
  is also very literal.
- 5:29–30, "losing one part of your body ... your whole body", follows the NIV's distinctive "one part of your
  body" for ἓν τῶν μελῶν σου.
- 6:29, "Yet I tell you, Solomon with all his glory was never dressed like one of them", blends NIV and ESV.
- 7:29, "like a person who had authority, and not like their scribes", follows the ESV's structure.
*Fix:* Rework 5:29–30 ("one of your limbs") and 6:29 (for example, "I tell you, not even Solomon in all his
splendor wore clothes like one of these flowers"). Optionally recast 5:16.

**10. Minor: "P67 ... as reported by Metzger" at 5:22 (variants.json 5:22, reading 0)**
Metzger's commentary on 5:22 argues the case but does not, as far as I can find, list witnesses. P67 is cited in
the UBS apparatus, where NA28 cites P64 and P67 together because they are parts of one codex. Tregelles also
prints εἰκῆ (TAGNT letter G). *Fix:* "P64+67 (Barcelona and Oxford fragments of one codex, about AD 200; UBS5 and
NA28 apparatus)". Keep Metzger as the source for the argument.

**11. Minor: a missing KJV-visible variant at 7:2**
The Textus Receptus reads ἀντιμετρηθήσεται, KJV "it shall be measured to you again". The Byzantine text and all
the critical editions read μετρηθήσεται (TAGNT letters NnSYWGB, so the TR stands alone). The brief requires an
entry wherever the KJV reads differently in a way readers notice. *Fix:* Add an entry. Optional additions:
5:11 ψευδόμενοι (in brackets in NA28; Bezae and some Old Latin and Syriac omit it, so "falsely" is missing), and
6:28, where the first hand of Sinaiticus reads οὐ ξαίνουσιν, "they do not card wool".

**12. Minor: the reading-1 witnesses at 6:13 give no Old Latin or Sahidic forms**
See finding 1. Also give the Didache's form in `orig` or `b`, not only in prose.

**13. Minor: the build warns about two quotations (notes.json 6:13 "Testing or temptation?", 7:29 "Authority, and 'their' scribes")**
The 6:13 note quotes 26:41 as "pray that you may not come into testing". The Plain English Translation of the 26-28 part reads "Keep
awake and keep praying, so that you do not walk into testing." The 7:29 note quotes 28:18 as "All authority in
heaven and on earth has been given to me". The Plain English Translation reads "I have been given all authority, in heaven and on
earth." *Fix:* Quote the site's Plain English Translation exactly.

**14. Minor: the Kimhi claim is overstated and has no source (notes.json 5:22 Gehenna note; topics.json gehenna; proposals gehenna.json)**
The note says the garbage-dump idea "comes from a medieval commentator (David Kimhi, about 1200)". What can be
shown is that Kimhi's comment on Psalm 27:13 is the earliest known source; no one knows that he invented the
idea. The topic section words it better ("first appears"). Neither cites a source for this much-repeated
debunking. *Fix:* In the note, write "the earliest known source is a comment by David Kimhi (about 1200) on
Psalm 27:13". Cite Lloyd R. Bailey, "Gehenna: The Topography of Hell", *Biblical Archaeologist* 49 (1986), or
G. R. Beasley-Murray / D. F. Watson, "Gehenna" in the *Anchor Bible Dictionary*, and add the key.

**15. Minor: the Catholic–Protestant contrast on reward in the 6:4 note is wrong**
The note gives "God crowns his own gifts in us" as Calvin's answer against Catholic teaching on merit. The saying
is Augustine's (Letter 194.19). The Catechism itself quotes it in that very section, Catechism 2006: "in crowning
their merits you are crowning your own gifts" (from the Roman Missal). *Fix:* Credit Augustine. Say that both
sides use it, and that they differ on whether God's rewards are truly merited (*condign merit*) or are free gifts
only (Augsburg Confession article 20; Calvin, *Institutes* 3.18).

**16. Minor: wrong chronology at 6:13 (notes.json "Testing or temptation?")**
The note says the French bishops changed their wording "after Pope Francis said a father does not lead his child
into temptation". The French wording took effect on 3 December 2017. Francis made his remark a few days later,
praising the French change. *Fix:* Write "and Pope Francis supported the change, saying ..."

**17. Minor: "Flusser and Vermes" on rabbis saying "but I say" (notes.json 5:22 "But I myself tell you")**
The classic studies of this rabbinic formula are David Daube, *The New Testament and Rabbinic Judaism* (1956), and
Morton Smith, *Tannaitic Parallels to the Gospels* (1951). I cannot confirm that Vermes makes this point. *Fix:*
Name Daube (and Smith), or give a page for Flusser and Vermes, and add a source key.

**18. Minor: Jeremias is caricatured on *abba* (notes.json 6:9 "Our Father")**
Jeremias argued that the word came from children's speech and that Jesus' use of it in prayer was unique. He
later warned explicitly against equating it with "Daddy" (*New Testament Theology*, 1971). *Fix:* "Jeremias
argued that *abba* was a family word that no Jew before Jesus used to address God in prayer; James Barr ('Abba
isn't Daddy', 1988) and others showed ..."

**19. Minor: an anachronism at 5:38 (notes.json "Eye for eye: a limit, not a license")**
"By Jesus' time Jewish courts read it as payment of money (Mishnah Bava Kamma 8:1)." The Mishnah dates from about
AD 200. For the first century the evidence is Josephus, *Antiquities* 4.280, where the injured party may accept
money. *Fix:* Cite Josephus for Jesus' time and the Mishnah for the later rule.

**20. Minor: a contested point stated as fact at 5:19 (notes.json "Least and great")**
"Matthew's Jesus himself sets some laws aside in practice (15:11)". Many scholars note that Matthew leaves out
Mark's "declaring all foods clean" (Mark 7:19) and reads 15:11 within the handwashing dispute (15:20). *Fix:*
"Others reply that Matthew's Jesus reorders the Law's priorities (15:11; 23:23) and that 'keep' means keep as
Jesus interprets it."

**21. Minor: Origen's regret (notes.json 5:29)**
Eusebius (*Church History* 6.8) reports the act but not any regret. The idea of regret is drawn from Origen's
later *Commentary on Matthew* 15.1–3, where he rejects a literal reading of 19:12. *Fix:* Say so.

**22. Minor: two Greek forms of Tobit 12:8 run together (notes.json 6:1)**
The quotation ("Prayer joined with truth ...") follows the longer Greek form found in Codex Sinaiticus. Fasting
appears in the other Greek form, found in Vaticanus and Alexandrinus. As written, the note seems to contradict
itself. *Fix:* "...and in the shorter Greek form (Vaticanus) the verse reads 'prayer with fasting'."

**23. Minor: one Talmud citation covers two claims (chapters.json ch. 5 deep "The six ... sayings")**
"The Talmud calls anger a kind of idolatry and compares shaming someone in public to shedding blood (Bava Metzia
58b)." Only the shaming saying is in Bava Metzia 58b. Anger as idolatry is in Shabbat 105b. *Fix:* Cite both.

**24. Minor: the 6:25 note contradicts 6:26**
"Jesus does not forbid work or planning (birds gather food ...)". The next verse says the birds do no "gathering
into barns". The settings card makes the point better: birds "still hunt for food". *Fix:* Write "birds still
search for food".

**25. Minor: the same verse quoted two ways, and an ESV quotation**
- Tobit 4:15 is "Do not do to anyone what you hate" in the 7:12 note, but "What you hate, do not do to anyone" in
  the ch. 7 deep dive.
- Luke 11:4 is "for we too forgive" in the 6:12 note, but "for we ourselves forgive" in the ch. 6 deep dive.
- The 7:13 note's "strive to enter through the narrow door" (Luke 13:24) is the ESV's wording.
*Fix:* Use one wording for each verse, and translate Luke 13:24 from the Greek.

**26. Minor: glosses**
- 6:2 "paid in full" → "they got what they paid for". That idiom means a poor bargain; the sense is "they have
  already been paid". Use "that's all the pay they'll get".
- 6:9 "hallowed be your name" is archaic church English, not a modern paraphrase. Use "may people treat your name
  as holy".
- 5:46 "tax agents working for Rome's system" contradicts the 5:46 note, which says that in Galilee they worked
  for Herod Antipas. Use "local tax and toll agents, seen as collaborators".

**27. Minor: a duplicate source key (notes.json 7:12, `s: ["talmud-shabbat"]`)**
`talmud-shabbat` (from the Tobit part) and `bavli-shabbat` (in the shared sources.json) are the same work. This
part already uses `bavli-shabbat` at 5:7 and 5:17. *Fix:* Use `bavli-shabbat`.

**28. Minor: the Quaker quotation (traditions card on force, Quaker view)**
The 1660 Declaration reads "for any end, or under any pretence whatsoever", not "whatever". *Fix:* Correct the
quotation.

**29. Minor: traditions cards that repeat other cards in Matthew (coordination with other parts)**
- The divorce card at 5:32 asks almost the same question as the 19:9 card in part 19-23 (both top `marriage`).
- The fasting card at 6:16 duplicates the 9:15 card in part 08-10 ("Are Christians bound to keep set ...").
- The 5:18 card folds the Sabbath into top `law-of-moses`, while 12:1–14 has a top `sabbath` card.
- The force card at 5:39 uses `holy-war`, as Deuteronomy 20 and Joshua do, while 26:52 and John 18 ask the same
  question under `church-and-state`.
*Fix:* Report these to the lane lead. Suggestions: narrow 5:32 to the exception (what *porneia* allows) and leave
remarriage to 19:9; narrow 6:16 to "fasting in secret versus public fast days", or drop it; drop "including the
Sabbath" from the 5:18 question or move it to `sabbath`; have the lead pick one top for the war question.

**30. Minor: views in traditions cards with no source**
- Anglican (divorce): cite the General Synod resolution of 2002.
- Lutheran (perfection): cite Luther's *Lectures on Galatians* (1535) on *simul iustus et peccator*, or Formula
  of Concord, Solid Declaration 3.
- Methodist (open table): cite the United Methodist *This Holy Mystery* (2004) and Wesley's *Journal*, 27 June
  1740, for "converting ordinance".
- Baptist (fasting): no source given.
*Fix:* Add the keys.

**31. Minor: settings cards**
- (a) 5:38–42: "Zealot calls to resist Rome by force" is probably anachronistic. Josephus places the Zealots as
  a party in AD 66–68. *Fix:* "the 'fourth philosophy' of Judas the Galilean (AD 6), which taught that Israel
  should accept no master but God".
- (b) The brief says each parable gets its own card. The two builders (7:24–27) have only the general 7:13–27
  card. Add one.
- (c) 5:27–30: "to: the men among his hearers" narrows the audience. The sayings are addressed to "you", and
  5:29–30 apply to all. *Fix:* "all his hearers; the example is a man looking at a woman".

**32. Minor: "Dale Allison has shown" (chapters.json ch. 7 deep "How the sermon is built")**
Allison argued for the triadic structure (*Journal of Biblical Literature* 106, 1987). Some scholars dispute it,
and the same paragraph says neither proposal has won general agreement. *Fix:* "has argued". The Bornkamm
sentence is accurate. Optionally add that Guelich and Luz took up Bornkamm's proposal, and cite Bornkamm, "Der
Aufbau der Bergpredigt", *New Testament Studies* 24 (1978).

### Checked and found sound (no change needed)

- **The 6:25, 6:33 and 7:14 decisions:** the TAGNT letters confirm that NA28 and THGNT print ἢ τί πίητε (NA28 in
  brackets) and τοῦ θεοῦ (NA28 in brackets), and that NA28 and THGNT read τί at 7:14. Each departure from the SBL
  has an entry with honest reasons. Vaticanus' reversed order at 6:33 is correctly reported.
- **7:13 and 7:14 witnesses:** Tischendorf's apparatus lists the omission of ἡ πύλη in 7:13 as Old Latin a b c h
  k, Clement, Origen, Cyprian and Hilary (Lachmann omits it). It lists the first hands of Sinaiticus and Vaticanus
  for ὅτι in 7:14. Both entries agree.
- **5:4–5 order, 5:27, 5:30, 5:44, 5:47, 6:1, 6:4, 6:12, 6:15 and 7:24 entries:** they agree with the TAGNT
  edition letters. Codex Ephraemi is correctly not cited in its gap (5:15–7:5).
- **Other notes:** *epiousios* (Origen, *On Prayer* 27.7; Jerome's *mahar*; *supersubstantialem*) is accurate.
  The "evil one" reasoning and the hypocrite count (13 times) are correct. "Father" occurs 12 times in chapter 6,
  as claimed. *Merimnaō* occurs 6 times in 6:25–34, and Gehenna 7 times in Matthew, both correct.
- **Traditions citations:** the numbers I checked are correct: Catechism 1965–1974, 2153–2155, 2263–2265, 2309,
  2311, 2761/2774, 2838–2845, 2043; Westminster Confession 13.2, 19.3–5, 21.5, 21.7, 22, 23.2, 24.5–6, 29.8;
  Augsburg Confession articles 16 and 26; Thirty-Nine Articles 37 and 39; 1689 London Confession chapter 23;
  Schleitheim articles 6 and 7; Heidelberg Catechism 114 and 126; Westminster Shorter Catechism 99–107; Basil,
  Letter 188 canon 13; Lumen Gentium 40; Adventist Fundamental Beliefs 19–20; Scofield's "legal ground" note at
  6:12.
- **Proposed cores:** sermon-on-the-mount, gehenna and lords-prayer duplicate no existing topic ("hell" is
  nowhere else an id, and sheol covers Hades). Their `related` ids exist.
- **Style:** no em-dashes; the reading level is right for the audience.

## Fixes applied

1. Fixed. Doxology deep dive now says most Old Latin and the Vulgate lack it, and names the short forms in k ("power") and in the Sahidic and the Didache ("power and glory"). Variant: "part of the Bohairic Coptic"; reading 1 gives the k, Sahidic/Didache (with Greek) and Curetonian Syriac forms, as reported by Metzger. Gregory of Nyssa removed.
2. Fixed. Reading (4) added to the 5:32 note (separation without remarriage: Jerome, Augustine, Trent, some evangelicals), plus the Orthodox position. Added as a view on the 5:31–32 settings card and to the deep dive and the marriage topic. Catholic card view now cites Catechism 2383 for separation and 2384 for remarriage, states Trent session 24 canon 7, and drops the annulment framing. New keys: heth-wenham-divorce; reused augustine-adulterous.
3. Fixed. New `word` note at 5:18 on "Amen, I tell you" (orig ἀμὴν γὰρ λέγω ὑμῖν), citing jeremias-theology. It also mentions the Yavneh-Yam ostracon as a possible earlier parallel.
4. Fixed. 7:19 now matches 01-04's 3:10 exactly: "Any tree that fails to produce good fruit is being cut down and thrown into the fire." 7:17–18 now say "produce" for the same verb. The note says the Greek is 3:10's without οὖν, and that "the" is added for English. Anchor updated.
5. Fixed. The text now says Wink built on Gandhi and King and has influenced later movements.
6. Fixed. 7:13 now reads "For the gate is wide, and the road that leads to ruin is roomy, ..."; the variant anchor and both readings' plain text are updated.
7. Fixed. 7:6 now reads "Do not give what is holy to the dogs." The note anchor and text (singular "the holy thing"), the gloss, the traditions question and the lords-supper topic section are updated.
8. Fixed. 6:15 "If you do not forgive"; 6:33 "you will receive all these things in addition"; 7:2 "The measure you use"; 7:3 "you do not notice". Anchors updated.
9. Fixed. 5:29–30 now say "losing a single part of yourself". 6:29 now says "Solomon with all his glory never wore anything to match one of them". 5:16 recast as "so that they see the good you do and give glory...". 7:29 recast as "For he taught them as one who held authority, not as their scribes did."
10. Fixed. The witness is now "P64+67 (fragments of one codex, about AD 200, as cited in the UBS and NA28 apparatus)". Tregelles added to the εἰκῇ reading.
11. Fixed for 7:2: new variant (μετρηθήσεται vs the TR's ἀντιμετρηθήσεται, from Luke 6:38). Not done for 5:11 or 6:28: I could not verify those witnesses myself.
12. Fixed with 1.
13. Fixed. 26:41 and 28:18 are now quoted in the site Plain English Translation wording.
14. Fixed. The note and topic now say Kimhi on Psalm 27:13 is the earliest known source. Cites bailey-gehenna (new key; also added to the gehenna core's sources).
15. Fixed. The saying is credited to Augustine (Letter 194.19; Catechism 2006) and shown as used by both sides; the difference on merit is stated, citing Augsburg Confession 20 and Calvin, Institutes 3.18.
16. Fixed. Now reads "and Pope Francis supported the change".
17. Fixed. Daube and Morton Smith are named (new keys daube-nt-rabbinic, smith-tannaitic); Flusser and Vermes removed.
18. Fixed. Jeremias's view and his own warning against "Daddy" are stated; Barr cited with the 1988 title.
19. Fixed. Josephus, Antiquities 4.280, for Jesus' time; the Mishnah for the later rule.
20. Fixed. Uses the suggested wording and notes that Matthew lacks Mark 7:19's "declaring all foods clean".
21. Fixed. Origen's later Commentary on Matthew 15.1–3 is cited (origen-matthew-commentary); "regretted" removed.
22. Fixed. Both Greek forms of Tobit 12:8 are distinguished (Sinaiticus longer, Vaticanus "prayer with fasting").
23. Fixed. Shabbat 105b for anger, Bava Metzia 58b for shaming.
24. Fixed. Now "birds still search for food".
25. Fixed. Tobit 4:15 uses the site Plain English Translation wording in both places; Luke 11:4 is "for we ourselves forgive" in both; Luke 13:24 is translated fresh ("Struggle to get in through the narrow door").
26. Fixed. All three glosses changed as suggested.
27. Fixed. 7:12 now cites bavli-shabbat.
28. Fixed. Now "whatsoever".
29. Lane decisions applied. The 5:32 divorce card and 6:16 fasting card stay the full main cards. The 5:18 question no longer centers on the Sabbath ("still binds Christians, and which parts?"). The force card moved to the new top `nonviolence` (proposed core content/proposals/nt/topics/nonviolence.json); "turn the other cheek" is left out of its aka because the core eye-for-eye topic already uses it.
30. Fixed. Anglican: cofe-synod-2002. Lutheran perfection: luther-galatians-1535 and lutheran-formula. Methodist: wesley-journal-1740 and umc-holy-mystery. Baptist fasting: Second London Confession 22.5 (london-1689).
31. Fixed. (a) Zealots replaced by Judas the Galilean's "fourth philosophy" (AD 6), with josephus-ant cited; (b) new settings card for 7:24–27, the two builders; (c) 5:27–30 "to" now covers all hearers.
32. Fixed. "has argued (1987)"; Bornkamm (1978) with Guelich and Luz; new keys allison-jbl-structure and bornkamm-aufbau.
