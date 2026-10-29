# Hostile review: Galatians 4-6 (part 04-06)

## Verdict

The part is careful and mostly accurate. `node tools/build.js --check Gal/04-06` gives 0 errors and 0 warnings. Quotes of other books' Plain match exactly. All 8 settings are present and the 6 cards are fairly built. I found no invented source, fragment or reading. The weak points are these:

- The word "child" is used for three Greek words (`nepios`, `huios`, `tekna`), which damages the logic of 4:1-7. It also clashes with "sons" at 3:26 in part 01-03.
- Three Plain renderings are doubtful (4:13, 5:15, 6:14).
- One variant explanation is plainly wrong (6:2).
- One classical citation does not say what it is cited for (Strabo 12.5.3).
- The 4:25 omission is thinly sourced.
- Several tradition statements have no source and cannot be verified.

Findings: 0 critical, 7 major, 21 minor. Items marked "(web)" were checked on the web. Items marked "(verify)" I could not confirm and the fixer should check against the NA28 apparatus or the cited work.

---

## Major

### 1. Major. plain.txt 4:1, 4:3, 4:5-7 (and 3:26 in part 01-03): "child" renders `nepios`, `huios` and `tekna`; part 01-03 still says "sons"
- 4:1 and 4:3 render *nēpios* (minor, infant) as "child". 4:6-7 render *huios* (son) as "child".
- The English therefore reads: "the heir is a child… no better off than a slave" (4:1), then "You are no slave anymore. You are a child" (4:7). Paul's contrast is *nēpios* (a minor, like a slave) versus *huios* (a son with full standing). In English the two verses contradict each other.
- Part 01-03 renders 3:26 as "For you are all sons of God". The 4:6 note claims "the Plain follows its rule" of "children". The rule is not applied across the book.
- 4:22 and 4:30 use "son" for *huios*, so the Plain is not even consistent inside this chapter.
- Fix:
  - Render *nēpios* as "minor" or "underage child" at 4:1 and 4:3.
  - Keep "children of God" for *huioi* at 4:6-7, with a note on the heir-vs-minor contrast.
  - Align 3:26 (with the part 01-03 fixer) or add a note at 3:26 explaining why 3:26 and 4:6-7 differ.

### 2. Major. plain.txt 4:13, notes.json 4:13: `di' astheneian` translated "in a weakness"; note says "can mean ... 'during'"
- δι᾽ ἀσθένειαν takes the accusative, which means "because of". "During" is the genitive sense of *dia*.
- The Plain's "it was in a weakness of the flesh that I first told you" removes the causal reading: the illness occasioned the preaching. That is the reading that makes Ramsay's malaria theory and the South Galatian link the note itself discusses meaningful.
- Fix: translate "because of a weakness of my body". Delete or correct the "during" claim in the note. If the "in/amid" reading is wanted, cite who holds it.

### 3. Major. plain.txt 5:15: conditional turned into an imperative
- Greek: εἰ δὲ ἀλλήλους δάκνετε καὶ κατεσθίετε, βλέπετε. This is "But if you bite and devour one another, watch out."
- The Plain gives "Keep biting and devouring one another, and take care". That is an invented command. No sarcastic imperative is in the Greek.
- Fix: "But if you keep biting and devouring one another, take care: you may be destroyed by each other."

### 4. Major. notes.json 5:12 (and 4:8); sources `strabo-geography`: Strabo 12.5.3 cited for the self-castrating *galli*
- At 5:12 the note cites Strabo 12.5.3 and Catullus 63 for "eunuch priests (galli) of Cybele, at Pessinus ... who castrated themselves".
- 12.5.3 describes the Pessinus temple (Agdistis, "Mother of the gods"), the Tectosages and the priests as former potentates. It says nothing about castration (web: the retrieved text has no *galli* or castration).
- At 4:8 the citation is fine for the temple.
- The shared key `strabo-geography` is defined in 1 Maccabees 09-11 as "book 16 on Syria and Phoenicia (16.2.8)". It does not describe 12.5.3 at all.
- Fix:
  - Mark the 5:12 note's castration claim as resting on Catullus 63 and later writers.
  - Cite a text that actually says it (Strabo 10.3.12-13 on Phrygian cult personnel — verify; Lucian, *Syrian Goddess*; Lucretius 2.614-17 — verify).
  - Add a distinct key, for example `strabo-geography-12`, matching the sibling keys (`strabo-geography-8`, `-17`, `strabo-tarsus`) in Acts.

### 5. Major. variants.json 4:25 (and the witness lines throughout)
- The third reading names "some Greek witnesses that leave out 'Hagar' (reported by Metzger; the Greek witnesses were not rechecked here)". The entry names no Greek manuscript.
- Web search could not confirm the Greek witnesses (a blog cites Naber on Sinaiticus; the UBS handbook says "many old and reliable" ones). The Vulgate reading "Sina enim mons est in Arabia" is correct.
- The editions list for the first two readings matches texts/auto.
- The claim "Jerome knew of Latin copies that read this way" is attached to key `jerome-comm-galatians` with no passage. (verify) Jerome on 4:25 does comment on the Latin/Greek difference.
- The entry says Hagar's omission is "the easier reading". If the omission has strong early Greek support, the follow-choice and the "why" are weaker than presented.
- Fix: look up the NA28 apparatus and Metzger for 4:25. Name the Greek witnesses, or say plainly that the omission is attested mainly by versions. Cite the Jerome passage. Do the same for the unnamed witnesses at 4:19 (editions only) and 4:28.
- Other witness claims were consistent with web checks:
  - 4:7: P46 and B read διὰ θεοῦ (web).
  - 5:21: P46, ℵ and B omit *phonoi* (web).
  - Still verify the 4:6 claim for B, the 4:14 claim for ℵ, and the 6:13 claim (P46 and B read the perfect).

### 6. Major. chapters.json traditions: unsourced and unverifiable tradition statements
- Many entries have empty source arrays: Orthodox (4:4, 4:10, 5:4, 5:17), Baptist (4:4), Adventist, Dispensationalist, Messianic Jewish, Pentecostal and Baptist (5:4).
- The brief requires views "sourced to the churches' own teachers, confessions and documents".
- Chapter 6 card, Orthodox: "Modern Orthodox statements reject using it against the Jewish people". No statement is named. Name one (for example an Ecumenical Patriarchate or a Moscow Patriarchate document) or remove the sentence.
- 6:16, Reformed: Hodge and Murray are named but not keyed.
- Fix: add source keys or named documents. Candidates:
  - Orthodox: Chrysostom, Theophylact, the Orthodox Study Bible.
  - Adventist: Fundamental Beliefs 20.
  - Pentecostal: AG *Statement of Fundamental Truths* 8.
  - Baptist: BF&M 2000 articles II, V and VIII.

### 7. Major. variants.json 6:2: wrong explanation
- The text says ἀναπληρώσετε/-σατε differ by "one letter (e or a), and both would be pronounced alike in later Greek". ε and α were not pronounced alike (ε/αι were).
- The explanation is therefore wrong.
- The argument "the command is the easier reading" is also unsupported.
- Fix: drop the pronunciation claim. Give the real reasons: external witnesses (name them, verify) and the grammar of καὶ οὕτως.

---

## Minor

### 8. notes.json 4:6 (huioi): "only sons normally inherited" is too strong
- Roman law let daughters inherit. Jewish law favored sons (Num 27), and the firstborn had a double share.
- The same note says believers have "the full rights that a father's firstborn son had". Paul never says "firstborn".
- Fix: "in the law and custom Paul's readers knew, sons were the heirs". Delete "firstborn".

### 9. notes.json 4:25 (Hagar and Sinai): "hajar … is a guess"
- Lightfoot argued the Arabic *ḥajar* ("rock") explanation with some confidence in his excursus. (verify wording) "A guess" may mislead.
- Quote his level of confidence accurately.

### 10. notes.json 5:16 (walking): "Romans 8:4 says the same with a different verb"
- Romans 8:4 uses the same verb, *peripateō* (περιπατοῦσιν).
- Fix: "Romans 8:4 uses the same verb."

### 11. notes.json 5:20 (hairesis): "Only in the second century and later did the word come to mean a wrong teaching"
- The note's own `r` list includes 2 Peter 2:1 (αἱρέσεις ἀπωλείας). Titus 3:10 (αἱρετικός) is also relevant.
- Soften: "by the late first and early second century" and acknowledge the dating dispute.

### 12. notes.json 6:14 (boasting): Jeremiah 9:24 "turned on its head"
- Paul cites the same verse approvingly at 1 Corinthians 1:31, so "turns it on its head" is wrong.
- Say Paul applies "boast in the Lord" to the cross.

### 13. plain.txt 6:14: "Through it" is committed without a note
- δι᾽ οὗ may refer to the cross or to Christ. Commentators divide.
- Add one line in the 6:14 note, or footnote the alternative "through whom".

### 14. notes.json 5:11 (preach circumcision): Philippians 3:5-6 is cited for "a Pharisee who did require converts to follow the Torah"
- Philippians 3:5-6 says nothing about converts.
- Treat it as inference, or cite the source for Paul as a pre-Christian missionary for Torah (verify).
- topics.json `circumcision` says the charge "suggests he was known to have taught it to Jews". That is a weaker claim than the note's "two facts". Reconcile them.

### 15. notes.json 4:21: "He will argue ... that the law was never meant to put Gentiles under circumcision"
- Genesis 17 commands circumcision for Abraham's household. A Jewish reader will object.
- Reword: "Paul will argue that Genesis shows belonging to Abraham by promise before circumcision (Gen 15 before 17)".

### 16. notes.json 4:22: "a tradition of two sons ... which his readers would know from the Torah reading"
- Gentile Galatians knowing the synagogue reading is an assumption.
- Mark it as one view, or remove it.

### 17. notes.json 4:16: "the only one that is warm"
- 6:1-2 and 6:18 are also warm.
- Say "the most personal".

### 18. notes.json 4:15 (eyes): "he had a scribe or ended letters in his own hand"
- Garbled. The note at 6:11 handles scribes and autographs better.
- Delete it here.

### 19. notes.json 6:2 (law of Christ): view (4) is a muddle
- It names Barclay and also Dodd in the same item.
- Split it: Dodd's reading ("Christ's whole teaching") is a separate view. Barclay (verify) discusses the "phrase from opponents" idea.
- Quote the view holders accurately.

### 20. notes.json 6:18: garbled Betz sentence
- "Betz notes that the ending differs from the usual list of greetings and has none" is unclear.
- Rewrite so that it says what Betz observes, that there is no personal greeting list.

### 21. notes.json 5:17: "some Methodist and Holiness teachers" has no source
- The third reading is vague and unsourced.
- Name a teacher (Wesley, *Notes* on Gal 5:17 — verify) or remove it.
- Also see chapter 5 T lens: "Lutherans and Baptists divided within themselves". The Lutheran card shows one view. Reconcile.

### 22. chapters.json ch. 6 deep dive vs notes 6:16: word order
- The deep dive says the order "leaves the question undecided".
- The note says it "slightly favors two groups".
- Make them agree.
- The three readings are fair. One more reading could be added: mercy on Israel as a separate group from those who follow the rule (Richardson-type, verify). It is close to Mussner's view.
- Check the attributions to Lightfoot, Betz and Wright (church) and to Burton (Jewish Christians). Burton's own argument against *kai* = "even" should be cited accurately.

### 23. chapters.json ch. 6 J lens: Justin attribution
- "Levine, Boyarin and Fredriksen observe ... first called 'Israel' outright in Justin" is not sourced to any of them.
- Source it (Richardson, *Israel in the Apostolic Church*, is the standard reference — verify) or drop the names.

### 24. chapters.json ch. 5 H lens: the Hardin thesis is stated as fact
- "They were not protected by the exemption Jews had from the imperial cult" is Hardin's thesis, contested.
- Qualify it ("on Hardin's view").
- The 5:2 note and the ch. 5 deep dive also say "The agitators sided with the second" (Eleazar). That is inference. Add "on this reading".

### 25. chapters.json ch. 6 settings 6:1-10: "some wealthy and some poor"
- Nothing in the text says this.
- Remove it.

### 26. chapters.json cards: missing traditions
- Anglican is missing from the 5:4 card, although Article XVI is the source of the Methodist article cited.
- Anglican, Baptist and Methodist are also missing from the 4:21-31 card.
- Methodist: the "Methodist Articles of Religion" claim is right (Article XII), but give the source.
- Add a source key (such as `methodist-articles`) rather than leaving it in prose.

### 27. chapters.json 4:21-31 card and reading 3: no examples of the anti-Jewish history
- The history of anti-Jewish use is asserted ("read by many Christians for centuries") but none is named.
- Name concrete cases: Augustine, *City of God* 15-16; the use of 4:30 in medieval expulsion rhetoric (verify); Luther's anti-Jewish writings (verify).
- This is a sensitive claim and should be evidenced.

### 28. variants.json: missing entry at 5:24
- NA28 brackets Ἰησοῦ (οἱ δὲ τοῦ Χριστοῦ [Ἰησοῦ]); texts/auto lists it.
- SBL omits it. Consider a short entry.
- Also consider noting 6:10 ἔχομεν/ἔχωμεν (WH).

### 29. variants.json 6:13: the "why" is partly self-contradictory
- It calls the present "the harder reading" and says the perfect has "strong early support".
- State plainly which witnesses support which, and Metzger's committee preference (verify), instead of mixing the argument.

### 30. topics.json `spiritual-powers`
- The entry on the elements of 4:3 and 4:9 sits on `spiritual-powers`. The notes point to `elements-of-the-world`, which exists in proposals/nt.
- Put the contribution on the topic that matches the subject, or add one to both.
- The `the-collection` entry ties 6:10 to the collection. The 6:10 note hedges ("echoes"), but the topic title "Doing good to all" does not match its topic. Hedge it in the topic too.

### 31. Drift (describe only)
- 4:12 "be like me, for I have become like you" is close in rhythm to the common NIV/ESV wording of that clause. It is a near-literal rendering of the Greek, so tolerable.
- 5:1 "Christ has set us free, to live in freedom" keeps the NIV/ESV idea of "for freedom". The wording differs.
- No change required beyond a drift check by the fixer.

### 32. Mechanics
- notes.json 4:4: the note builds a case on *ginomai* vs *gennaō*, but the Plain uses "born" for both (4:4, 4:23, 4:29).
- Add "(the Greek differs)" in the note or in a gloss.

### 33. Other checked items (no change needed)
- Citations that checked out:
  - Cicero *Pro Rabirio* 16.
  - Aristotle *Politics* 3.13, 1284a (the key `aristotle-politics-3` is a fair label for that passage).
  - Yevamot 47a-b, 22a, 48b.
  - Berakhot 17a.
  - Shabbat 31a.
  - Genesis Rabbah 24:7, 53:11, 61:4 (and 45:1 in the deep dive).
  - Josephus *Ant.* 20.34-48.
  - Pliny *NH* 28.35.
  - Plutarch on the flatterer.
  - Barr 1988.
  - Gaventa 1990.
  - Catechism 422 and 488; Trent session 6 ch. 15 and canon 28; CCC 1861, 1264, 2515-2516.
  - WCF 13.2, 17, 21.7-8; Augsburg XII.
  - Wesley's 1751 tract and the sermon "On Sin in Believers".
- The 5:21 decision (Plain omits "murders", with the Tyndale House reading shown) is fairly stated.
- Hardin on the imperial calendar and Betz on the proverb of the eyes: the attributions are fair.

---

## Fixes applied

Fixes applied 2026-10-29 (review-fixer; lead decisions on nepios/huios/teknon, 4:13, 5:15, 6:14, 6:2, Strabo and the unverifiable witnesses were followed).

1. Accepted. Three words kept apart: nepios = "minor" (4:1, 4:3, gloss added), huios = "son" (4:5, 4:6, 4:7, with a gloss and note that women and men are included, 3:28), teknon = "child" (4:19, 4:25, 4:27-31 already). The 4:1, 4:5 and 4:6 notes and anchors, the glosses, the chapter 4 summary, the 4:1-11 setting, the spec box and the adoption topic contribution were updated to match. The 4:6 note says why 'sons' matches 3:26 (part 01-03 is being aligned by its own fixer).
2. Accepted. 4:13 now reads "because of a weakness of my body"; the note says dia with the accusative means "because of" and "during" belongs to the genitive. Note anchor and orig line updated.
3. Accepted. 5:15 now keeps the conditional: "But if you keep biting and devouring one another, take care: you may be destroyed by each other."
4. Accepted. 4:8 and 5:12 now cite a new local key strabo-geography-12 (Geography 12.5.3, Pessinus); strabo-geography (book 16) is untouched. The 5:12 note says Strabo does not mention castration there; the castration of Cybele's priests rests on Catullus 63 only, and the link to Paul is called a guess. I did not add Lucretius, Lucian or Strabo 10.3 because I could not verify them.
5. Partly accepted. 4:25 variant: the third reading no longer names Greek witnesses; it names the Vulgate and "as reported by Metzger, not rechecked". The unsupported Jerome claim is dropped (jerome-comm-galatians removed from that entry); the "easier reading" argument is replaced by an honest statement that the choice rests on the editions and is less certain. Named manuscripts removed at 4:6, 4:14 and 6:13 ("as reported, not rechecked"). 4:19 and 4:28 now say the evidence is editions only. 4:7 and 5:21 witness lines kept (the reviewer confirmed them). I could not look up the NA28 apparatus, so no new witnesses were named.
6. Partly accepted. Added keys only where I am sure of the document: bfm-2000 (Baptist 4:4, 4:10, 5:4), adventist-sabbath-20 (Adventist belief 20), ag-truths (Pentecostal 5:17), thirty-nine-articles and methodist-articles (5:4), and local keys hodge-romans-comm-gal and murray-romans-nicnt-gal (6:16 Reformed). "Modern Orthodox statements reject using it against the Jewish people" removed (6:16). Orthodox 4:10 trimmed to a description of practice. Orthodox (4:4, 5:4, 5:17), Dispensationalist and Messianic Jewish cards still have no source key: I could not verify a document, and I did not add one (Chrysostom, Theophylact and the Orthodox Study Bible were not checked).
7. Accepted. 6:2 variant: the "e and a pronounced alike" claim is gone. The why now gives the grammar (future indicative against aorist imperative), says support was not rechecked, and labels the scribal-assimilation idea as inference.
8. Accepted. "only sons normally inherited" replaced by "in the law and custom Paul's readers knew, sons were the heirs"; "firstborn" deleted.
9. Accepted. The hajar sentence no longer calls it "a guess"; it says Lightfoot proposed it, that its force is disputed and that his confidence was not rechecked.
10. Accepted. 5:16: "Romans 8:4 uses the same verb (peripateo)."
11. Accepted. 5:20 softened: the sense of wrong teaching is found by the late first or early second century (2 Peter 2:1; Titus 3:10), dating disputed, and Galatians most likely means a faction.
12. Accepted. 6:14: Paul applies "boast in the LORD" to the cross; 1 Corinthians 1:31 added.
13. Accepted. 6:14 is "through which"; the note gives "through whom" as the alternative.
14. Accepted. 5:11: Philippians 3:5-6 now supports only "Pharisee", with the Torah-pressing claim labeled an inference. The circumcision topic contribution was reconciled to the same weaker claim.
15. Accepted. 4:21 reworded (promise in Genesis 15 before the command of Genesis 17; Jewish readers' objection stated).
16. Accepted. 4:22: now "one view", with the assumption about Gentile Galatians stated.
17. Accepted. 4:16: "the most personal section", mentioning 6:1-2 and 6:18.
18. Accepted. 4:15: scribe clause deleted.
19. Accepted. 6:2 note split: (4) Dodd, (5) agitators' phrase "suggested by some scholars, source not rechecked", (6) Wright. Barclay no longer named; six readings.
20. Accepted. 6:18 Betz sentence rewritten.
21. Accepted. 5:17: the Methodist and Holiness attribution removed (third reading unattributed, pointing to the Methodist card with Wesley); chapter 5 T lens now cites Wesley's "On Sin in Believers" and no longer says Lutherans are divided.
22. Partly accepted. The note and the deep dive now agree that the word order does not settle it. Added a note that attributions to Lightfoot, Betz, Wright, Burton and Mussner are as reported in the surveys and not rechecked; I could not check Burton's own argument against kai = "even". The extra "separate group" reading was not added, since it is close to reading (3).
23. Accepted. The Levine/Boyarin/Fredriksen attribution is removed from the J lens; the Justin claim is stated as "the clearest early case this page can cite" (Dialogue 11.5), and the unsourced "Christians mostly called Israel the Jews" sentence is cut.
24. Accepted. Hardin's thesis is marked as his and debated (ch. 5 H lens); "on the usual reading" added to the 5:2 note and the chapter 5 deep dive.
25. Accepted. "some wealthy and some poor" removed from the 6:1-10 setting.
26. Partly accepted. Anglican added to the 5:4 card (Article XVI) and the 4:21-31 card (Article VII); Methodist 5:4 now keyed to methodist-articles; Baptist and Methodist views at 4:21-31 not added because I could not source a statement on this passage.
27. Partly accepted. The unevidenced claim that 4:30 was used to rationalize expelling Jews is removed from the 4:30 note. Chapter 4 reading 3 now says the Hagar = Old Covenant, Sarah = Church pairing was common (as the Catholic and Orthodox cards show) and says plainly that this page does not catalogue particular cases. I did not add Augustine or Luther examples I could not verify.
28. Accepted. New variant entries at 5:24 (Jesus bracketed in NA28) and 6:10 (echomen/echōmen, WH only), with editions from texts/auto.
29. Accepted. The 6:13 why rewritten: it lists which editions print which reading, says Metzger's reported early support for the perfect was not rechecked, drops the "harder reading" argument and calls it a close call.
30. Accepted. New elements-of-the-world contribution added; the spiritual-powers entry now says "one of several readings"; the-collection entry retitled "A possible echo" and hedged.
31. Drift reviewed, no change. 4:12 is near-literal; 5:1 differs in wording from the common versions.
32. Accepted. 4:4 note says the Plain uses "born" for both ginomai and gennao.
33. No change needed.
