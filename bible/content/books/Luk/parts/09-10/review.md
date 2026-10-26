# Hostile review: Luke 9–10 (part 09-10)

Reviewer: a separate hostile-review agent, not the writer. I checked every verse of plain.txt against the SBLGNT, the Byzantine text and the TAGNT edition marks in `texts/orig/Luk.json`. I compared each shared pericope with Matthew's published Plain and Mark's reviewed Plain (`content/books/Mrk/parts/*/plain.txt`). I also read all 96 notes, 17 variants, 38 glosses, both chapter pages (20 settings cards, 3 traditions cards, 2 theory boxes), the 25 topic contributions, `proposals/nt/topics/discipleship.json` and the `letter-of-aristeas` entry in `proposals/nt/works.json`. Then I ran `VERBOSE=1 node tools/build.js --check Luk/09-10`.

## Verdict

This is a strong part, and the translation is faithful. I found no invented source, quotation or manuscript reading. Every outside reference I checked holds up:

- Josephus *Ant.* 18.28, 18.29–30, 18.116–119, 20.118–136; *Life* 269; *War* 2.75.
- Mishnah Berakhot 3:1, 5:5 and 6:1; Nazir 7:1; Sotah 3:4; Avot 1:4.
- Juvenal 3.14; Didache 11:4–6 and 13:1–2; Barnabas 15:9; 1QS 1:9–10 and 2:21–22.
- Philo *Spec. Laws* 2.63; Origen *Hom. Luc.* 34; Augustine *Quaest. Ev.* 2.19 and *Sermons* 103–104.
- Jerome Letter 108 (Adummim read as "of blood"); Eckhart's German Sermon 86 (Quint), which praises Martha.
- Aquinas II–II qq. 182 and 188; Catechism 87 and Lumen Gentium 20 on Luke 10:16; Augsburg Confession 27 and 28.
- Calvin on 10:38–42: he says the passage was "basely distorted" to praise the contemplative life.
- Metzger's NTS article on the seventy, Fee's essay on 10:42, Spencer's WTJ article, and the Martin Luther King Jr. quotation.

Parallels with Matthew and Mark are well kept and differ exactly where the Greek differs:

| Luke | Matches |
|---|---|
| 9:57–60 | Matthew 8:19–22 |
| 10:2 | Matthew 9:37–38 |
| 10:13–15a, 10:21 | Matthew 11:21–25 |
| 9:44 | Matthew 17:22 |
| 9:21–24 | Mark 8:30–35 |
| 9:33 | Mark 9:5 |
| 9:45 | Mark 9:32 |
| 9:48 | Mark 9:37 |
| 10:27 | Mark 12:30, with Luke's own order "strength ... mind" |

Some changes follow the Greek exactly: "lambs" for Matthew's "sheep" (ἄρνας), "be brought down" for Matthew's "go down", "knows who the Son is" for Matthew's "truly knows the Son", and "prophets and kings ... wanted" for "prophets and righteous people wanted badly". I found almost no NIV/ESV drift in plain.txt. The two-word "God's Messiah" (9:20) agrees with the NIV, but the Greek all but forces it.

Three choices against SBL (10:15, 10:39, 10:42):

- **10:42:** following NA28/THGNT's "one thing" against SBL's "few things, or one" is defensible and openly argued, with Fee's dissent given.
- **10:39:** following SBL/THGNT's "Jesus' feet" over NA28's "the Lord's feet" is defensible.
- **10:15:** following SBL/THGNT "be brought down" over NA28 "go down" is defensible, since "go down" could be a harmonization to Matthew 11:23 and Isaiah 14:15. However, all three entries name editions only, no manuscripts.

The real problems:

- A build error (one wrong source key).
- Settings cards that almost never say where Matthew and Mark place the same saying, which is the specific thing the brief and the Mark lead decision ask for.
- A boilerplate "readers" sentence pasted onto all 20 cards.
- Variant entries without manuscript witnesses.
- One variant whose reading switch produces a garbled verse.
- One broken parallel with Mark (κωλύω at 9:49).
- A tail of small factual slips.

The theory boxes are properly labeled. The first one claims more originality than it has.

Counts: **0 critical, 7 major, 27 minor.**

## Findings

### Major

**1. Major: build error, unknown source key.** `notes.json` 9:27 ("before they see the kingdom of God") and the chapter 9 deep section "The journey to Jerusalem" cite `conzelmann-theology`, which exists nowhere. The check reports `ERROR Luk/notes[23] 9:27: unknown source key "conzelmann-theology"`. Part 18-21 defines `conzelmann-theology-luke` for the same book. The progress log says the key was "reused from 03-05", but it is not there. *Fix:* use `conzelmann-theology-luke` in both places. Do not define a second key for the same work.

**2. Major: settings cards do not say where Matthew or Mark set the saying differently.** The NT brief requires this, as does the Mark lead decision ("each card says where Matthew or Luke set the saying differently"), and Matt asked for it specifically for parables and sayings. Only 10:13–15 does it. Missing:
- **9:3–5:** Matthew 10:5–15 is a long discourse to the Twelve that also forbids Gentile and Samaritan towns. Luke, by contrast, sends the very next group through Samaria (see the note at 9:52).
- **9:18–22:** Mark 8:27 and Matthew 16:13 put it "on the road" near Caesarea Philippi. Luke removes the place and puts it at prayer.
- **9:23–27:** Mark 8:34 addresses the crowd with the disciples. Matthew 16:24 addresses the disciples. Luke says "to them all."
- **9:47–48:** Mark 9:33 puts it in a house at Capernaum after the argument "on the road." Matthew 18:1 has the disciples ask the question.
- **9:57–62:** Matthew 8:18–22 puts it before the lake crossing, with a scribe and a disciple. This is said in note 9:57 but not on the card.
- **10:2–16:** Matthew 9:37–38, 10:16 and 10:40 belong to the charge to the Twelve.
- **10:21–22:** Matthew 11:25–27 follows the woes "at that time," with no returning mission.
- **10:23–24:** Matthew 13:16–17 sits in the parable chapter, explaining why the disciples understand.
- **10:25–28:** Mark 12:28–34 and Matthew 22:34–40 set it in the temple courts during the last week in Jerusalem. The question there is "which commandment is first," and Jesus himself gives the answer. Luke sets it early on the journey, with a different question about eternal life. The card's "views" mentions the friendly scribe but not the different time and place, which is the main point.

*Fix:* add one sentence to each `when` or `why` naming the parallel setting.

**3. Major: the same "readers" sentence is pasted onto all 20 cards.** Every `readers` field opens "Luke's first readers, Theophilus and the mixed churches of Gentile and Jewish believers he wrote for, probably in the 80s, ...". The Mark lead decision says the community setting is "stated once with its alternatives, not on every card." Repeating "probably in the 80s" twenty times also states a debated date as settled. The Luke brief lists 80–90, before 70, and second-century views. *Fix:* state the readership and date once (book.json audience), and start each `readers` with what is specific to that passage ("Readers who knew Paul's shaking off the dust at Pisidian Antioch ...").

**4. Major: several variant entries name editions or "the oldest manuscripts" but no manuscripts.** The NT brief requires "real witnesses with dates."
- **10:15:** reported in NA28 as καταβήσῃ P75 B D, against καταβιβασθήσῃ P45 ℵ A C L W Θ and the Byzantine text.
- **10:38:** no addition in P45 P75 B; εἰς τὴν οἰκίαν in ℵ* C* L; εἰς τὸν οἶκον αὐτῆς in A D W and the Byzantine text.
- **10:39:** κυρίου P3 ℵ B* D L; Ἰησοῦ P45 P75 A B² C W Θ and the Byzantine text.
- **9:10:** Metzger names πόλιν καλουμένην Βηθσαϊδά in P75 ℵ¹ B L Ξ* 33 and Coptic; κώμην in D; τόπον ἔρημον in ℵ* and the Old Syriac; the conflation in A C W and the Byzantine text. The entry now says only "the earliest witnesses."
- **9:3, 9:48, 9:50, 10:22:** "with the oldest manuscripts" only.

The witness lists above are what I recall from NA28 and Metzger. Verify each against NA28 or Metzger before writing it in, and attribute it ("as reported by NA28"). Do not copy my lists blind.

**5. Major: the 9:35 variant switch produces a garbled verse.** The anchor is "the Chosen One" and the other reading's `plain` is "my dearly loved Son". A reader who switches gets "This is my Son, my dearly loved Son." The `b` field admits this instead of fixing it, against the project rule to fix causes. *Fix:* anchor "my Son, the Chosen One" (follow 0) with alternative plain "my dearly loved Son". This matches Mark 9:7's Plain, "This is my dearly loved Son." Remove the apology from `b`.

**6. Major: 9:49 breaks the Mark parallel and the link to 9:50.** Luke's ἐκωλύομεν is Mark 9:38's ἐκωλύομεν, and Mark's Plain reads "We kept trying to hinder him." Luke has "We kept trying to stop him," then "Stop hindering him" in 9:50 (μὴ κωλύετε, = Mark 9:39 "Stop hindering him"). The exchange turns on John's verb being thrown back at him, and the Plain loses that while breaking the parallel. *Fix:* "We kept trying to hinder him, since he does not follow along with us." The second clause differs correctly from Mark (Luke: present tense, μεθ' ἡμῶν).

**7. Major: Bezae's reading at 10:41–42 is misrepresented.** The third reading says Codex Bezae and some Old Latin simply omit "There is need of only one thing." As reported by Metzger and NA28, D and Old Latin witnesses omit more: "you are worried and in a turmoil over many things" plus the need clause, reading roughly "Martha, Martha, you are troubled; Mary has chosen ...". Switching to that reading shows a 10:41 that Bezae does not have. *Fix:* describe Bezae's wording accurately in `w`/`b` (verify against Metzger), give its Greek instead of "(omitted)", and say that the switch only removes the 10:42 clause. Also: the followed text (NA28) has Μαριὰμ γάρ, and the Plain drops the "for" (see 15).

### Minor

**8. Minor: 9:24–25 loses Luke's repeated ἀπόλλυμι.** 9:24 renders ἀπολέσει / ἀπολέσῃ as "lose," but 9:25 renders ἑαυτὸν δὲ ἀπολέσας as "if he destroys himself." Luke's point (lose your life, lose yourself) needs the same verb, and note 9:25 is titled "Losing your self." *Fix:* "if he loses himself, or pays for it with himself."

**9. Minor: μένω is rendered inconsistently.** 9:4 has "remain there," 10:7 has "Stay in that same house," and Mark 6:10 has "stay there." *Fix:* "stay there" at 9:4.

**10. Minor: 9:7 loses the "because."** The Greek has διηπόρει διὰ τὸ λέγεσθαι: he was at a loss *because* some were saying. The Plain makes two unconnected sentences. *Fix:* "...and he could not make sense of it, because some people were saying ...".

**11. Minor: 9:32 διαγρηγορήσαντες.** It can mean "having stayed awake" or "when they became fully awake." The Plain takes one sense silently, and the note at 9:32 builds on it ("they nearly missed it, but they stayed awake"). *Fix:* add the other reading to that note.

**12. Minor: 10:18 "I was watching Satan, fallen like lightning."** After a verb of seeing, the aorist participle πεσόντα normally means "watching Satan fall." "Fallen" turns the event into a state. *Fix:* "I was watching Satan fall like lightning out of heaven." Update the note and the `satan` topic heading, which quote it.

**13. Minor: the 9:56 switched reading has no quotation marks.** Reading 1 runs on as narration: "For the Son of Man did not come ... to save them. So they traveled on." *Fix:* `"For the Son of Man did not come to destroy people's lives but to save them." So they traveled on`. The 9:55 reading already closes its quotation.

**14. Minor: places a KJV reader would notice that have no entry or note.**
- 9:1 "his twelve disciples" (TR).
- 9:43 "which Jesus did" (TR/Byz).
- 9:57 "Lord, I will follow thee" (Byz/TR κύριε).
- 10:19 "I give unto you" (δίδωμι, Byz/TR, against δέδωκα).
- 10:20 "but rather rejoice" (μᾶλλον, TR only).
- 10:35 "when he departed" (Byz/TR).

10:11 "unto you" is handled in a note, which is fine. Add short entries at least for 9:57 and 10:19, or one note that names the rest.

**15. Minor: dropped γάρ.** At 9:50 (ὃς γὰρ οὐκ ἔστιν) and 10:42 (Μαριὰμ γάρ, in NA28 as well as SBL) the Plain drops "for." In 10:42 the "for" gives the reason why one thing is enough. *Fix:* "...is on your side, for anyone ..." or start with "For"; at 10:42 "...only one thing, for Mary has picked out the good share ...".

**16. Minor: NIV/ESV wording outside plain.txt.**
- The gloss on 9:62, "fit to serve in God's kingdom," brings in the NIV's interpretive "for service," which the Greek does not have.
- The chapter 10 theory box says "Jesus himself has nowhere to lay his head (9:58)," which is the NIV/ESV phrasing. The site's Plain is "does not have anywhere to rest his head."

*Fix:* gloss "good enough for God's kingdom," and use the site's wording in the box.

**17. Minor: the 9:5 gloss contradicts the note.** The gloss "as a sign that you are finished with them" softens ἐπ' αὐτούς. The note on the same verse rightly says the act is "testimony on the day of judgment." *Fix:* "as a warning that will count against them."

**18. Minor: the 10:2–16 settings card misstates 1 Corinthians 9:14.** It says Paul "quotes its saying about the worker's pay." Paul only refers to the Lord's command that preachers live by the gospel. The note at 10:7 states this correctly. *Fix:* "Paul refers to the Lord's command behind it (1 Corinthians 9:14)."

**19. Minor: note 10:40 ("Diakonia") says the women of 8:3 "served" Jesus.** The site's own 8:3 reads "serving them" (SBL αὐτοῖς; αὐτῷ is a variant). *Fix:* "served Jesus and the Twelve."

**20. Minor: note 10:1 ("The Lord" as narrator's name) mislists verses.** 24:34 is speech ("The Lord really has been raised!"), not narration. 24:3 "of the Lord Jesus" is one of the Western non-interpolations, so it is textually uncertain. *Fix:* drop 24:34 and mark 24:3.

**21. Minor: note 9:52 (Samaritans and Galilean pilgrims) cites the wrong Josephus account.** It says Samaritans at Ginae "killed a Galilean pilgrim," citing *Antiquities* 20.118–136. *Antiquities* says many were killed. The single Galilean is in *Jewish War* 2.232. *Fix:* cite both, or say "killed Galilean pilgrims."

**22. Minor: note 10:1 (Seventy-two) states a disputed count as fact.** It says Moses' seventy elders "with Eldad and Medad made seventy-two." Numbers 11:26 says the two "were among those registered," which on its face makes them part of the seventy. The count of 72 (six per tribe) is a rabbinic reckoning (Babylonian Talmud, Sanhedrin 17a). *Fix:* "some counted seventy-two with Eldad and Medad (so later rabbinic tradition)."

**23. Minor: the Testaments of the Twelve Patriarchs are dated as settled.** Note 10:19 calls the Testament of Levi "a Jewish work from before or around Jesus' time." Note 10:27 lists the Testaments of Issachar and Dan among "other Jewish writings of the time." The Testaments survive only in a Christian form. Scholars disagree whether they are Jewish works with Christian additions or Christian compositions (de Jonge), and Testament of Levi 18 is among the passages most often thought Christian. The part's own source entries say "second century BC to second century AD." *Fix:* "a work preserved by Christians, with Jewish roots of debated date." Keep the citations, since the reference to Testament of Levi 18:12 is correct.

**24. Minor: note 9:62 gives the wrong Hesiod lines.** The straight-furrow lines in *Works and Days* are 441–445: 443 the straight furrow, 444–445 "no longer gaping after his fellows, but keeping his mind on his work," which is the part that fits "looks back." *Fix:* cite 441–445 (or 443–445).

**25. Minor: note 9:18 (Jesus at prayer) lists the prayer of 23:34 as plain fact.** 23:34a is one of Luke's best-known variants: absent from P75, B, D*, W. *Fix:* cite 23:46 alone, or add "(23:34, in many manuscripts)."

**26. Minor: note 9:41 overstates the Philippians 2:15 link.** It says Paul uses "the same words." Philippians 2:15 shares only διεστραμμένη (with σκολιᾶς), not ἄπιστος. *Fix:* "Paul echoes the same verse."

**27. Minor: note 9:31 (His exodus) misreads Wisdom of Solomon 3:2.** It says the righteous are those "whose 'going' looked like ruin." In 3:2 their ἔξοδος was "thought an affliction." "Destruction" (σύντριμμα) is 3:3. *Fix:* cite Wisdom of Solomon 3:2–3, or say "affliction."

**28. Minor: note 9:33 ("Master") mischaracterizes the speakers.** It says the title always comes "from disciples or people near him." In 17:13 it comes from men with skin disease who "stood at a distance." *Fix:* "from disciples and from people asking his help."

**29. Minor: note 10:6 (A son of peace) quotes Luke differently from Luke's own Plain.** It gives "sons of this age" (16:8; 20:34) and "sons of light" (16:8). Luke's Plain at 16:8 and 20:34 reads "children of this age" and "children of light." *Fix:* "literally 'sons of this age' (16:8, 'children of this age')."

**30. Minor: the chapter 10 J lens misplaces Hillel and Akiva.** It says love of God and neighbor was joined in "later Hillel and Akiva." Hillel was active before and during Jesus' youth, and neither saying joins the two commandments. Hillel's summary is the negative golden rule (Babylonian Talmud, Shabbat 31a). Akiva calls Leviticus 19:18 "a great principle of the Torah" (Sifra). *Fix:* name them as summarizing the law through love of neighbor, not as joining the two.

**31. Minor: note 9:2 (The same work as Jesus) has a mismatched reference list.** The body cites Acts 4:30 and Acts 8:6–7; `r` has Acts 8:12 instead. *Fix:* align them.

**32. Minor: note 9:23 (A daily cross) attributes a reading to Origen without evidence.** It credits the "daily Christian life" reading of "every day" to "Origen to modern scholars such as Fitzmyer." I could not confirm Origen. *Fix:* cite the passage, or say "many interpreters, such as Fitzmyer."

**33. Minor: two loose attributions in the variants.**
- 9:55 `why` says Metzger judged the words "perhaps a saying of Jesus known in oral tradition." I could not confirm that wording in Metzger. Check it, or attribute it more loosely ("some scholars").
- 9:3 `p` says the plural "staves" is "as in Matthew 10:10." That is true only of the Byzantine/TR text of Matthew. The critical text of Matthew 10:10, like this site's Matthew Plain ("no staff"), is singular. *Fix:* "as in the Byzantine text of Matthew 10:10."

**34. Minor: the first theory box claims too much originality, and the second needs a named overlap.**
- Chapter 9, "fire refused, Spirit given in Samaria": the John of 9:54 / John of Acts 8:14 pairing is commonly drawn in commentaries on Luke-Acts (e.g. Tannehill's *Narrative Unity of Luke-Acts*). Calling the "deliberate pair" reading "my own" claims more than it should. *Fix:* say the pairing is widely noted, and that the box's own contribution is only the claim that Luke designed it through John.
- Chapter 10, "the chapter of guests": a hospitality reading of Luke is also well developed (Brendan Byrne, *The Hospitality of God*; John Koenig). Name that overlap.

### Also checked, no action needed

- **Shared proposals:** `discipleship` is not a duplicate. No other core or proposal covers it; `church-discipline` and `discipline-of-children` are different subjects. Its lead and its one section are accurate.
- **`letter-of-aristeas` in `proposals/nt/works.json`:** the tier (other) and the note are right. One nuance: the name "Septuagint" comes from the later tradition that rounded Aristeas' seventy-two translators to seventy, so "the story it tells is the source of the name" would be more exact.
- **Chapter 9 Tradition lens:** Many Lutheran churches keep the Transfiguration on the last Sunday after Epiphany, not on August 6. "Many Lutherans" or "some Lutheran calendars" would be more exact.

## Fixes applied

1. Fixed: `conzelmann-theology` replaced by `conzelmann-theology-luke` (part 18-21's key) in the 9:27 note, the chapter 9 journey deep dive and two topic contributions; no new key.
2. Fixed: every settings card now says where Mark or Matthew set the saying or scene (or that only Luke has it): 9:3–5, 9:7–9, 9:12–14, 9:18–22, 9:23–27, 9:33–35, 9:41, 9:43–45, 9:47–48, 9:49–50, 9:54–55, 9:57–62, 10:2–16, 10:17–20, 10:21–22, 10:23–24, 10:25–28 (temple courts in the last week, "which commandment is first", Jesus answers; two views on Luke's placement), 10:30–37, 10:41–42.
3. Fixed: the boilerplate is gone. The first card of each chapter names Theophilus and Luke's churches and points to the book introduction for who they were and when Luke wrote (no date stated); the other 18 `readers` start from what that passage gave its readers.
4. Partly: witnesses added with dates where Metzger reports them (9:10, 9:35, 10:38, 10:42) or the NA28 apparatus is reported for the principal witnesses (10:15: P75 B D against P45 01 A Byz; 10:39: 01 B* against P45 P75 A Byz). At 9:3, 9:48, 9:50 and 10:22 the editions are named and the entries say the manuscripts are not checked here (lead decision), instead of "the oldest manuscripts". The 10:15 `why` now says why NA28 prints "go down". Witness lists rest on Metzger and the NA28 apparatus as reported, not a fresh collation; nothing beyond the commonly reported principal witnesses was added.
5. Fixed: 9:35 anchor is now "my Son, the Chosen One", other reading "my dearly loved Son" (= Mark 9:7); the apology in `b` removed.
6. Fixed: 9:49 "We kept trying to hinder him" (= Mark 9:38; lead decision), so 9:50 "Stop hindering him" throws John's verb back.
7. Fixed: Bezae's reading now described as Metzger reports it (10:41 only "Martha, Martha, you are troubled"; Old Latin witnesses lack both clauses), with its Greek; `b` says the switch removes only the 10:42 clause. Μαριὰμ γάρ restored (see 15).
8. Fixed: 9:25 "if he loses himself"; note anchor updated and the note names the repeated apollymi.
9. Fixed: 9:4 "stay there".
10. Fixed: 9:7 "...could not make sense of it, because some people were saying...".
11. Fixed: the 9:32 note gives both senses of diagrēgoreō; the chapter 9 deep dive says "kept awake, or woke fully".
12. Fixed: 10:18 "I was watching Satan fall like lightning out of heaven"; note anchor and grammar line, the 9:29 note's quote and the `satan` topic heading updated.
13. Fixed: the 9:56 reading now closes its quotation.
14. Fixed: new variant entries for 9:1 (TR "his twelve disciples"), 9:7 (Byz/TR "by him", not listed by the reviewer but the same kind), 9:43 ("which Jesus did"), 9:57 ("Lord"), 10:19 ("I give"), 10:20 (TR "rather"; the KJV's "are written" mentioned) and 10:35 ("when he departed"), from the edition marks in texts/orig; manuscripts marked unchecked.
15. Partly: 10:42 now "For Mary has picked out the good share". Declined at 9:50: Mark 9:40's Plain (same Greek, ὃς γάρ) also leaves the "for" unexpressed, and Luke follows Mark where the Greek matches; the lead may want both changed together.
16. Fixed: gloss on 9:62 "good enough for God's kingdom"; the chapter 10 theory box quotes the site's 9:58.
17. Fixed: gloss on 9:5 "as a warning that will count against them".
18. Fixed: "Paul refers to the Lord's command behind its saying about the worker's pay (1 Corinthians 9:14)".
19. Fixed: note 10:40 "served Jesus and the Twelve".
20. Fixed: 24:34 dropped from the 10:1 note and its `r`; 24:3 marked as lacking "of the Lord Jesus" in some manuscripts; 7:19 marked as edition-dependent too.
21. Fixed: "killed Galilean pilgrims" with Antiquities 20.118–136 (many) and Jewish War 2.232 (one); `josephus` added to the note's sources.
22. Fixed: Eldad and Medad's seventy-two given as later rabbinic counting (Babylonian Talmud, Sanhedrin 17a), with Numbers seeming to count them among the seventy.
23. Fixed: notes 10:19 and 10:27 (and the chapter 10 J lens) call the Testaments a work preserved by Christians with Jewish roots of debated date; Testament of Levi 18 flagged as often thought to have Christian additions.
24. Fixed: Hesiod Works and Days 441–445.
25. Fixed: note 9:18 "on the cross (23:46, and 23:34 in many manuscripts)".
26. Fixed: "Paul echoes the same verse".
27. Fixed: Wisdom of Solomon 3:2–3, "thought an affliction and their leaving a disaster".
28. Fixed: "from disciples or from people asking his help".
29. Fixed: "literally 'sons of this age' (16:8; 20:34, where the Plain has 'children of this age')" and "children of light".
30. Fixed: chapter 10 J lens no longer says Hillel and Akiva joined the two commandments: Hillel's negative golden rule (Shabbat 31a), Akiva on Leviticus 19:18 (Sifra).
31. Fixed: note 9:2 `r` now has Acts 4:30 and Acts 8:6–7.
32. Fixed: Origen dropped; "Many interpreters, such as Fitzmyer".
33. Fixed: 9:55 `why` no longer puts unconfirmed words in Metzger's mouth ("Metzger judged the words an addition...; some scholars think they may still preserve an old saying"); 9:3 `p` says "the Byzantine text of Matthew 10:10".
34. Fixed: chapter 9 box says the 9:54 / Acts 8 pairing is widely noted (Tannehill, `tannehill-narrative`) and claims only the design through John; chapter 10 box names Byrne and Koenig (new keys `byrne-hospitality`, `koenig-hospitality`) and claims only the 9:51–10:42 cycle answering 9:53.
Also: `bailey-middle-eastern-eyes` replaced by `bailey-middle-eastern` (01-02) everywhere in the part and dropped from sources.json (lead decision); chapter 9 T lens now says many Lutherans keep the Transfiguration on the last Sunday after Epiphany; `letter-of-aristeas` note now says later tradition rounded the seventy-two translators to seventy. discipleship.json unchanged (no finding).
