# Hostile review: 4 Maccabees 1-6 (part 01-06)

## Verdict

The part is careful and mostly faithful. I found no invented source, reading or fragment. The three declared departures from Swete (1:35, 4:19, 6:11) are real and match the apparatus. `node tools/build.js --check 4Ma/01-06` gives 0 errors and 0 warnings. The main problems are these. 6:29 copies a modern version. The Cilicia dating and the Seleucus facts lean on secondary web sources. 4:19 is ambiguous about who built the gymnasium. One claim about food-law order is wrong. The Methodist card row overstates Wesley. The 1:35 variant work is incomplete. The cross-book quote of 5:4 in 2 Maccabees does not match. Counts: 0 critical, 8 major, 21 minor (items 9-29; item 30 records what was verified).

Method: I read every verse of the Plain English Translation against Swete's Greek in `texts/orig/4Ma.json` and the apparatus in `texts/src/4Ma.app.json`, and I read all notes, variants, glosses, chapter pages and topics. I ran a script comparing quotations of other books with the site's current Plain English Translation. I opened these sources this session: NRSV text of 4 Maccabees 6:28-29 (BibleGateway), Wikipedia "4 Maccabees" and "Seleucus IV Philopator", the Jewish Virtual Library Encyclopaedia Judaica article, the Augsburg Confession 18 at bookofconcord.org, Wesley Sermon 40 at CCEL, and a search on the Catechism. I could not open Sefaria's Avot 2:1 or Sanhedrin 74a text (the page loaded without it), so those two quotations are unverified by me.

## Major

1. **6:29, copy of a modern version (lead decision).** The Plain English Translation of 6:29 is "Make my blood their cleansing, and take my life in exchange for theirs." The NRSV reads (opened) "Make my blood their purification, and take my life in exchange for theirs." The last eight words are identical, and the sentence shape matches. 6:28 ("Be merciful to your nation. Let the penalty we pay ... be enough for you") also runs close to the NRSV's "Be merciful to your people, and let our punishment suffice for them", but the words differ enough to stand.
   Greek: καθάρσιον αὐτῶν ποίησον τὸ ἐμὸν αἷμα, καὶ ἀντίψυχον αὐτῶν λάβε τὴν ἐμὴν ψυχήν. ἀντίψυχον is a predicate noun ("as a soul-for-soul"). ψυχήν is the object.
   Fix: rebuild from the Greek, keeping the term "a life in exchange". For example: "Make my blood their cleansing. Accept my life as a life in exchange for theirs." Alternatively use "my soul" for ψυχήν, per the terms entry. Then update every echo:
   - plain.txt 6:29.
   - Notes at 6:29 (the `a` anchor "take my life in exchange for theirs", plus the quote in the 6:28 and 6:29 notes).
   - chapters.json: ch. 6 `sum[1]`, the `deep` paragraph, and the settings `why`.
   - topics.json `atonement`.
   - glosses 6:29 (the anchor "in exchange for theirs").
   - content/proposals/works/terms.json (entry quoting "take my life in exchange for theirs").
   - The 17:22 wording in part 13-18.
   - Quotes in 1 and 2 Maccabees notes.
   Run `grep -r "in exchange for theirs" bible/content`.

2. **4:2 dating note rests on secondhand sources (notes #48, #88; chapter 1 settings `views`, source `rochford-4macc`).**
   - The note says "David deSilva, as James Rochford summarizes him". The AD 19-72 window and the first-half-of-the-first-century date are reported from a blog summary, not from deSilva or the primary evidence. I could not trace the 19-72 window to Tacitus or to any provincial evidence in anything I opened.
   - The note's `p` line states "The three lands were joined in one Roman unit only in the first century AD" as fact. It is deSilva's claim, and I could not verify it.
   - Bickerman's "The Date of Fourth Maccabees" (1945) is the scholarly source of the argument. Cite it, or deSilva's own text, after opening it. Otherwise state only what is opened: that 2 Maccabees 3:5 has Coele-Syria and Phoenicia and 4:2 adds Cilicia, and that some scholars use that for dating.
   - Remove "as ... summarizes" from content. It is a hedge, and STYLE rule 2 forbids it.
   - Note #88 (6:29) says "many scholars date 4 Maccabees later than Mark". Note #48 lists Bickerman (20-54), Hadas (about 40) and deSilva (first half of the first century) as earlier, and only Dupont-Sommer and van Henten as later. The notes contradict each other. Reword: "dates run from about AD 20 to the early second century".
   - The same hedge ("as Wikipedia reports him", "as Neil Godfrey quotes him") appears in the ch. 6 `deep` text. Cite deSilva or van Henten directly, or drop the attribution.

3. **Seleucus facts (note #45, #54, key `wikipedia-seleucus-iv`; topic `seleucids`).** The lead asked for primary or scholarly sources.
   - The Wikipedia article itself cites Appian (the hostage swap of Demetrius for Antiochus; Heliodorus's replacement), Daniel 11:20, 2 Maccabees 3, and Dov Gera. Cite Appian (*Syrian Wars*) and 2 Maccabees 3:3, 4:7 directly after opening them.
   - Wikipedia says "The ancient sources do not record a motive" for Heliodorus's murder of Seleucus IV. The note #45 text "murdered ... by his minister Heliodorus, the man who in 2 Maccabees 3 tried to rob the temple" is fine as a bare fact, but it needs a primary source.
   - Note #45 says "'Nicanor' belongs to no Seleucid king" and calls it "a slip". I could not verify that no Seleucid king is called Nicanor in any source. Either open a source (LSJ, Appian, Josephus on Seleucus I's epithets) or soften to "the king meant is Seleucus IV; the epithet is that of Seleucus I, Nicator".

4. **4:19-20, unclear subject.** The Greek has ὃς (4:19), which is Jason. The Plain English Translation reads: "So Antiochus allowed him to be high priest ... 4:19 He made the nation give up its way of life ... 4:20 Not only did he build a gymnasium". A reader will take "He" as Antiochus, since 4:18's subject is Antiochus. The history then reads as Antiochus building the gymnasium, and 4:21 ("made war on Antiochus himself") becomes confusing.
   Fix: write "Jason made the nation give up its way of life" and "Not only did Jason build a gymnasium".

5. **Note #24 (1:34), false claim about order.** The note says the list "follows the order of the food laws in Leviticus 11 and Deuteronomy 14: water creatures, birds, and four-footed animals". In Leviticus 11 the order is land animals (11:2-8), water creatures (11:9-12), birds (11:13-19). In Deuteronomy 14 it is land animals (14:4-8), water creatures (14:9-10), birds (14:11-20). The 4 Maccabees order is water, birds, land, which differs from both. The claim is wrong. Fix: "The same three groups as Leviticus 11 and Deuteronomy 14, in a different order."

6. **Traditions card, chapter 2, Methodist row.**
   - The row says "By grace, and fully." The quoted Wesley (Sermon 40, II.20, II.28) is "so far perfect, as not to commit sin". Part I of the same sermon (I.4-I.9) says Christians are not perfect in knowledge and are still liable to mistakes, infirmities and temptation. "Fully" is the writer's gloss and conflicts with the source.
   - The words "freed from evil thoughts and evil tempers" are at II.21 and II.28, and 'purified their hearts by faith' at II.26. The citation "2.26-28" omits II.20-21.
   - Fix: replace "fully" with a wording that follows the sermon, for example "By grace; Wesley taught a Christian could be freed from sin and evil tempers, not from mistakes or weakness (I.9)."
   - The Catholic row quotes "are purified and elevated by divine grace". The Catechism sentence (1810), as I recall it and as a search summary suggests, is "Divine grace purifies and elevates them". The quotation marks are not verbatim. I could not open the exact page this session. Open it and use the exact words. The same phrase is in the `four-virtues` topic.
   - Orthodox is missing. The writer says no church-level text was found. For a book of tier `orth` that is a gap. A church-level candidate to open is the Confession of Dositheus (1672); I have not read it. If nothing is opened, keep the omission and say so in a one-line note on the card, as the brief allows.
   - Augsburg Confession 18, Westminster 9.3-4 and 16.3, and the Trent canons: I opened Augsburg 18 and it matches. I did not re-open Westminster or Trent, whose wording is standard but unverified by me.

7. **1:35, translation and variants.**
   - Swete's apparatus at 1:35 reads: "ανεχεται ℵ | ανακαμπτομενα (-μεθα A)] ανακοπτομενα ℵV φιλοτιμουνται] φιμουται ℵ (φειμ.) V".
   - There are two more readings than the one entered as a variant. ℵ has ἀνέχεται for Swete's ἀντέχεται. ℵV have ἀνακοπτόμενα ("checked, beaten back") for Swete's ἀνακαμπτόμενα ("bent back").
   - The Plain English Translation says "held back and bent back". "Held back" does not clearly render ἀντέχεται (middle of ἀντέχομαι, "hold out against, hold fast"). It looks closer to ℵ's ἀνέχεται or Brenton's "restrained". "Bent back" follows Swete's own correction of A, while φιμοῦται follows ℵV. The sentence therefore mixes readings without saying so.
   - The φιμοῦται departure itself is sound (ℵV against A, and the sense). The "why" says "muzzled" matches "held back and bent back", but the clause is not fully secured.
   - Fix: add variant entries for ἀντέχεται/ἀνέχεται and ἀνακαμπτόμενα/ἀνακοπτόμενα. Check ἀντέχομαι in LSJ and fix the rendering if needed. State plainly which witnesses each clause follows. Brenton's wording ("reined in") is attributed in the variant; confirm it against `texts/en/4Ma.json`, because I did not.

8. **Cross-book quote mismatch with 2 Maccabees (lead question).** The 2 Maccabees 04-07 notes.json (line near 1255, the 6:18 note on Eleazar) quotes 4 Maccabees 5:4 as "of priestly family" and expert in the law. This part's plain.txt 5:4 reads "He was a priest by birth and an expert in the law by training". The Greek is τὸ γένος ἱερεύς, "priest by birth". "A priest by birth" is the closer rendering, and the quoted verse is this part's. So change the 2 Maccabees note, not 5:4. The 2 Maccabees note should quote "a priest by birth" and "an expert in the law by training", per the rule that a note quoting another book uses that verse's current Plain English Translation exactly.

## Minor

9. **Terms: παιδεία.** content/proposals/works/terms.json has no entry for παιδεία in 4 Maccabees. The lead decision is "training" where the sense is education in the law.
   - 1:17 uses "training" (good). The 1:17 note says "Paideia is education, upbringing and discipline" without saying why this book's rendering differs from Sirach's "discipline/instruction".
   - 5:24 παιδεύει is "schools us", 5:23 ἐκδιδάσκει is "trains us thoroughly" and ἐξασκεῖν is "drills", 5:34 παιδευτά is "teacher", and 2:7 μεταπαιδεύεται is "trained over again". Decide and enter the term. If παιδεύω is "train" at 5:24 and παιδευτής "trainer" or "teacher" at 5:34, say so. Add a term entry and a note at 1:17.

10. **Missing variants, 1:6 and 1:27.**
    - 1:6: ℵV omit "καὶ φρονήσεως" ("and good sense"). That shortens the list of four virtues to three, which matters for the book's four-virtue theme.
    - 1:27: A has "λαιμαργία καὶ νομοφαγία"; ℵ has "μονοφαγία καὶ λαιμαργία"; V has only "καὶ μονοφαγία" (no λαιμαργία). The 1:27 note mentions only A's "slip".
    - Also 1:3: V reads "ἢ γὰρ" and Vᵃ "οὐ γὰρ μέν" for "εἰ ἄρα", which changes the logic of the sentence. Add entries or a note.

11. **1:15, base reading.** Plain follows A's "ὀρθοῦ βίου ... σοφίας λόγον", which is Swete's correction of A's slip "ὀρθούς". ℵ and V agree on ὀρθοῦ λόγου. The "why" speculates that A swapped words and that a copyist brought in the Stoic phrase. Both speculations are unsourced. State plainly that the printed text is a hybrid and that ℵV agree on the other reading. I could not check how other editions (such as Rahlfs) print it.

12. **Note #37 (3:1), wrong description of Sinaiticus.** The note says ℵ* "skipped from the end of 2:24 to the middle of 3:1, an easy slip when two lines end alike". The apparatus gives the omission as "κρατει ληθης ... εαυτου παθων ο λογισμος", from 2:24's first κρατεῖ to ὁ λογισμός in 3:1. That looks like a jump between two occurrences of ὁ λογισμός. It does not start "at the end of 2:24", and "two lines end alike" is guesswork. Describe it plainly or drop the explanation.

13. **Variant 6:28.** The "why" says "In this book the two prepositions often stand for one another" but gives one example (5:38). Give more examples from the Greek, or drop "often". The variant is otherwise accurate.

14. **Quote mismatches with the site's current text.**
    - Note #60 (4:26) quotes Paul "I was advancing in Judaism". Galatians 1:14 here reads "I was going further in Judaism".
    - Note #71 (5:22) quotes Colossians 2:8 as "philosophy and empty deceit". The site's Colossians 2:8 reads "with philosophy, with empty tricks".
    - Fix both.

15. **1:27 and 1:3, wording.** 1:27 renders λαιμαργία as "greed". 1:26 already has "love of money" (φιλαργυρία), so "greed" invites confusion. Use "gorging" or "gluttony" (γαστριμαργία is already "gluttony" at 1:3). 1:3 "the passions that hold back self-restraint, gluttony and craving" reads as three things held back. Greek: "...self-restraint: both gluttony and craving". Add a colon.

16. **1:11, "They became the reason".** Greek αἴτιοι is "the cause". "Reason" is the book's key term (λογισμός), so use "cause".

17. **1:29, μεταχέων.** The Plain English Translation says "waters it, and moves the soil in every way". The Greek (πάντα τρόπον μεταχέων) has no word for soil. Check the verb in LSJ (I recall "pour from one vessel to another") and fix the rendering. The note does not mention the uncertainty.

18. **4:26, κατεφρονεῖτο.** "Paid no attention to" softens "was treated with contempt". Same at 6:... where καταφρονέω is used. Use "despised" or "treated with contempt" to keep the term.

19. **5:4, "by training".** ἐπιστήμη is the brief's "understanding"; "by training" is a gloss. The same word is "understanding" at 5:35. Use "by knowledge" or "in understanding".

20. **6:25, ὑπερίπτοσαν.** "They threw him down" is unverified. The note admits the word is unclear. Open LSJ (ὑπερρίπτω) before keeping "threw him down".

21. **Overstated claims in notes.**
    - #87 (6:29) and the topic `atonement`: "the first Jewish text to ask in so many words". No source for "first". 2 Maccabees 7:37-38 is a close precursor. Hedge or delete.
    - #87: "which the New Testament gives to Jesus alone". Colossians 1:24, which the 2 Maccabees 7 note itself lists, shows a debated reading. The note should not decide the question the card asks.
    - #65 and ch. 5 `views.N`: "he says the food laws are no longer binding (Romans 14:14)" and "it set the food laws aside". This is one contested reading (Torah-observant and Messianic Christians read Romans 14 differently). Attribute it ("many Christians read...").
    - #60: "a change from 2 Maccabees, where officials do" enforce the food test. In 2 Maccabees 7 the king himself does (7:3, 39), so the claim is true only of Eleazar's scene.
    - #73: "the Torah gives no reason for most of the food laws" while citing Leviticus 11:44-45 ("be holy").
    - #56: "which is what 'put an end to the care of the temple' means" is stated as fact. It is interpretation.
    - #35: "it says nothing of the fall". True of 2:21-23; the book does mention the serpent's deceit at 18:7-8 (other part). Say "this passage".
    - #31: "likely draws on Deuteronomy 13" has no source and is not marked as Claude's theory.
    - #9 and ch. 3 `views.G`: reason as ruler of the lower parts is "the older Greek picture" (Plato/Aristotle), with no source opened. Either cite or label.
    - #71: "Philo and Josephus also presented Judaism as a philosophy" has no source.
    - #78: "Greek philosophers made similar claims for the wise man under torture" has no source.

22. **Note #63 vs the `spec` box (ch. 6).** Note #63 says "His priesthood matters: an old priest dying for the law is a kind of sacrifice, which fits his prayer", in the site's voice. The ch. 6 `spec` box then says the same idea is "my own suggestion" not seen argued in the opened sources. Label #63 too, or drop it.

23. **Sources and keys.**
    - `wp-4-maccabees-nov2026` (this part) and `wikipedia-4-maccabees` (book-level) are two keys for one Wikipedia article. Merge them.
    - The ch. 6 `deep` text cites Daniel Bailey (Tyndale Bulletin), but the `s` list for 6:27-29 has no `bailey-hilasterion` key.
    - Note #11 credits "Ewald and Freudenthal" to the EJ key as well as Wikipedia. The EJ article (opened) does not mention them. Only Wikipedia does. Drop `ej-4-maccabees` from that claim.
    - EJ says the Hanukkah idea has "no known link" to the martyrs and treats the tomb setting as more likely. The note should say so.
    - ch. 1 `views.H` says "Most scholars date the speech to the first century AD or a little later". Source and verify.
    - The same ch. 1 `views.H` says Josephus authorship was rejected for "its uncompromising stance". Wikipedia (opened) gives language, style, historical errors and Josephus's accommodation to Gentile practice. Align the wording.

24. **Topic proposals (lead question).** I searched titles and `aka` in content/topics and content/proposals/*/topics.
    - `four-virtues` has no existing duplicate. The Wisdom of Solomon 06-10 part contributes a `hellenism` section on 8:7. Cross-link rather than merge.
    - `passions-and-self-control` has no title duplicate, but overlaps: `fruit-of-the-spirit` (self-control, Galatians 5:23), `flesh`, `stoicism` (Stoic passions), `the-fall` (evil inclination, concupiscence). Its `aka` ("self-control", "enkrateia", "craving") will attract searches meant for `fruit-of-the-spirit`. Drop "self-control" and "enkrateia" from `aka`, keep "the passions", "pathē", "mastery of the passions", "godly reason", and add `related` links to `fruit-of-the-spirit`, `flesh`, `the-fall`. The page name is fine to keep.
    - Neither proposal duplicates the other.

25. **Glosses.** 2:1 "get the beautiful person" and 2:4 "cattle prod" are flippant and the first misreads "τὴν τοῦ κάλλους μετουσίαν". 5:35 narrows νομοθεσία to "the giving of the law at Sinai". Soften all three.

26. **Note #57 (4:21).** Fine, but the note and the terms entry both say "capitalized where personified". At 4:13 the lowercase "divine justice" is the Greek θείας δίκης, not clearly different. State the reason for the difference.

27. **Chapter 1 `views.J`.** "The book was not translated into Hebrew" is a claim of absence with no source. Say "no Hebrew version survives" or cite.

28. **Chapter 4 `views.N`.** "Daniel 11:28-31 ... stands behind Jesus' warning in Mark 13:14" is stated flatly. Say "many readers connect".

29. **Not checked.** I did not verify: the Sefaria quotations (Sanhedrin 74a, Avot 2:1 wording "be careful with a light commandment as with a grave one"); the Plato 427e wording "Clearly, then, it will be wise, brave, sober, and just"; Cicero's text; OCA's wording about Eleazar as the seven's teacher; Eusebius/Jerome's title; the count "more than forty" uses of τύραννος (the family has 48 occurrences in the whole book, 32 verses of the noun forms). Open each or soften.

30. **Verified without a finding.**
    - The apparatus readings for 1:1, 1:4, 1:7, 1:10, 2:19, 3:1, 3:20, 4:9, 4:17, 4:19, 4:24, 5:4, 5:34, 6:11 and 6:28.
    - The translation of 1:1-6:35 verse by verse, apart from the points above.
    - The fixed terms, which are applied consistently (godly reason, craving, the tyrant, endurance, pork, athlete, Abraham's children, divine Justice).
    - The audience cards (`settings`) cover every speech.
    - The Plain English Translation is modern English, and the poetry-free prose has no em-dashes.

## Fixes applied
1. Accepted (lead decision 1). 6:29 rebuilt from the Greek: "Make my blood their cleansing, and take my soul as a life in exchange for them." (ψυχή "soul" per terms; ἀντίψυχον "a life in exchange"). Updated notes 6:29 (anchor and both bodies), ch. 6 sum, readings, deep, settings why, topics atonement, gloss 6:29, proposals/works/terms.json entry. Not in my lane: book.json (two quotes) and part 13-18's 17:22; no 1 or 2 Maccabees note quotes 6:29.
2. Accepted (lead decision 3). Note 4:2 rewritten from Rochford's page (reopened, quoted in sources.json, cited as a summary of deSilva 355-356), "at some point between AD 19 and 72", plus the other dates from Wikipedia; the "later than Mark" contradiction removed from note 6:29 and the ch. 6 deep ("dates run from about AD 20 to the early second century"). The van Henten words are now quoted from Godfrey's page (157, 160, reopened), and the deSilva point is credited to Wikipedia's article citing deSilva 1998.
3. Accepted (lead decision 3). `wikipedia-seleucus-iv` removed. Notes 3:20 and 4:15 and topic seleucids now rest on Appian, Syrian Wars 45 (Livius, opened; new key appian-syrian-livius) and the site's 2 Maccabees 3:3, 3:7, 4:7. Reign dates dropped. "Nicanor belongs to no Seleucid king" softened to "seems to confuse him with Seleucus I Nicator".
4. Accepted. 4:19 "Jason made the nation...", 4:20 "Not only did Jason build..."; the 4:20 variant's anchor and readings updated.
5. Accepted. Note 1:34 now gives the real order (land, water, birds in Leviticus 11 and Deuteronomy 14, checked in the site text) and says 4 Maccabees starts with the sea.
6. Partly accepted. Methodist row rewritten from Sermon 40 (reopened: 1.9, 2.20, 2.21, 2.26); "fully" removed. Catholic row declined: Catechism 1810 opened at vatican.va, and it reads "are purified and elevated by divine grace" word for word. Orthodox row added from the Confession of Dositheus, decree 14 (crivoice.org, opened; key dositheus-decree14-crivoice, distinct from Jub's Question 3 key). Westminster 9.3, 9.4, 16.3 and Trent session 6, canons 1 and 18 reopened: they match.
7. Accepted. LSJ opened: ἀντέχω "hold out against, withstand"; LSJ quotes ℵ's ἀνέχεται at 4 Maccabees 1:35 under ἀνέχω "hold back, check". 1:35 now reads "resisted and bent back", following Swete for both verbs. New variants: ἀντέχεται/ἀνέχεται, and ἀνακαμπτόμενα/ἀνακοπτόμενα. The φιμοῦται variant's "why" now says that only that clause follows ℵV. Brenton's "reined in" confirmed in texts/en.
8. Accepted, no edit here: 5:4 stays "a priest by birth" (now "a priest by birth, and in his understanding an expert in the law", item 19). The lead syncs the 2 Maccabees 04-07 note at 6:18.
9. Accepted (lead decision 2). Note 1:17 explains "training" versus Sirach's "discipline"; terms entry παιδεία/παιδεύω/παιδευτής added to proposals/works/terms.json.
10. Accepted. New variants at 1:3 (V* ἢ γὰρ, Vᵃ οὐ γὰρ μέν), 1:6 (ℵV omit καὶ φρονήσεως) and 1:27 (ℵ order, V omits λαιμαργία); note 1:27 mentions them.
11. Accepted. The 1:15 variant's "why" now says Swete's text is a hybrid and ℵV agree on ὀρθοῦ λόγου; the speculation removed.
12. Accepted. Note 3:1 and the variant now describe the ℵ* gap exactly as Swete gives it; the "lines end alike" guess removed.
13. Accepted. "often" dropped; only the 5:38 example kept.
14. Accepted. Galatians 1:14 "I was going further in Judaism"; Colossians 2:8 "with philosophy, with empty tricks" ... "do not follow Christ".
15. Accepted. 1:27 "gorging" (gloss anchor too); 1:3 colon added.
16. Accepted. 1:11 "They became the cause of the tyranny over the nation being broken."
17. Accepted. LSJ μεταχέω "pour from one vessel into another" opened; 1:29 now "in every way moves it from place to place"; note 1:29 explains (Brenton "transplanting").
18. Accepted. 4:26 "Since the people despised his decrees" (as 5:10, 6:21).
19. Accepted. 5:4 "and in his understanding an expert in the law" (ἐπιστήμη "understanding"); topic maccabean-martyrs quote synced.
20. Partly accepted. LSJ knows only ὑπερρίπτω "throw the arm over a cross-bar"; 6:25 is now "They threw him over the fire", and the note says the verb is unclear, that "the fire" is supplied from context, and that other meanings are possible.
21. Accepted throughout: "first Jewish text" removed (note 6:29, topic atonement); "Jesus alone" reworded, with Colossians 1:24 added; Romans 14 attributed to "many Christians", with Messianic Jewish/Torah-observant readers dissenting (note 5:7, ch. 5 views N); note 4:26 limited to the Eleazar scene (2 Maccabees 6:18-21; 7:3); note 5:25 cites Leviticus 11:44; note 4:20 "may be what ... refers to"; note 2:21 "this passage" (18:8); note 2:10 "can be set beside"; note 1:6 and ch. 3 views G "older Greek picture" removed; Philo/Josephus and the "wise man under torture" sentences removed.
22. Accepted. Note 5:4 now points to the chapter's spec box as Claude's theory.
23. Partly accepted. The book-level wikipedia-4-maccabees key no longer exists, so there is nothing to merge. bailey-hilasterion added to the 6:27-29 settings, and Bailey quoted from the opened PDF. EJ key kept for what EJ says; Ewald and Freudenthal credited to Wikipedia; EJ's "no known association" with Hanukkah and its tomb setting added. Ch. 1 views H aligned with Wikipedia (dated about AD 20-130; language and style, errors, outlook: Josephus favored accommodation). The Date view rewritten.
24. Accepted. passions-and-self-control: "self-control" and "enkrateia" dropped from aka; related links to fruit-of-the-spirit, flesh and the-fall added. four-virtues: related hellenism added, with a Wisdom of Solomon 8:7 cross-link in the section.
25. Accepted. Glosses 2:1 "enjoy someone's beauty", 2:4 "the sharp prod that drives", 5:35 "the law God gave".
26. Accepted. Note 4:21 gives the reason for lowercase at 4:13 (it only names a cause) against 4:21 (Justice acts).
27. Accepted. "not translated into Hebrew in its own era" (Wikipedia).
28. Accepted. "Many readers ... connect it with Mark 13:14."
29. Accepted. Opened and verified: Sanhedrin 74a and Avot 2:1 (Sefaria API; Avot is Kulp's translation, now named), Plato Republic 427e, Cicero On Duties 2.5, OCA ("Teacher of the Holy Seven Maccabee Martyrs", now quoted), and the title per Wikipedia. τύραννος counted by script: 44 noun forms, now stated.
30. No action needed.
