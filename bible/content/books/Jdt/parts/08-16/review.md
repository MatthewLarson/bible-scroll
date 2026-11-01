# Hostile review: Judith 8–16, part 08-16

**Scope.** I reviewed every file in this folder: plain.txt (194 verses), notes.json (127), variants.json (24), glosses.json (62), chapters.json (9 pages), topics.json (20 contributions) and sources.json. I checked them against:
- texts/orig/Jdt.json `grc` (Swete's Vaticanus), read verse by verse beside the KJV Apocrypha (whose numbering runs one verse behind from 15:14 to 16:17);
- Swete's apparatus in texts/src/Jdt.app.json;
- the Vulgate and Douay in texts/src/Jdt.lat.json;
- part 01-07, book.json, content/terms.json, the site's Plain English Translation for the 66 books it has translated, and every `traditions` card on the site.

**Build.** `node tools/build.js --check Jdt/08-16` gives **0 errors, 0 warnings** (194 verses, 127 notes, 24 variants, 62 glosses, 9 chapter pages, 20 topic contributions).

**Quotations checked by script.**
- **Greek.** Every Greek `orig` string in notes.json and variants.json is in Swete's text or apparatus. Two are splices, and one misattributes a parenthesis (finding 7). **I found no invented Greek reading.**
- **Latin and Douay.** Every Latin quotation matches the Vulgate file. Every Douay quotation matches the Douay file except one, 13:20 (finding 7).
- **The 66 books.** Every quotation of a book the site has translated matches the site's Plain English Translation, except one at N68 (finding 13). I checked about forty by script and by hand: Genesis, Exodus, Numbers, Deuteronomy, Judges, Ruth, 1 Samuel, 1 Kings, Ezra, Esther, Job and Psalms.

**The texts file at 9:2.** When I first copied texts/orig/Jdt.json, it read ἐγύμωσαν. That is not a Greek word. Swete's own lemma confirms ἐγύμνωσαν: the apparatus at 9:2 reads `εγυμ- νωσαν] + μητραν παρθενου) εις μιασμα B*`. The live file was corrected to ἐγύμνωσαν at 00:38 today, and no other verse changed. No content file quotes the bad form, so nothing in this part needs fixing.

## Verdict

This is strong, careful work. The Plain English Translation is built from the Vaticanus Greek, verse by verse. I compared every verse in my head with the NRSV, RSV, NABRE, NJB, CEB, GNT and NETS, and with Moore's translation, and found no sentence shape that depends on them. Where wording coincides, the Greek forces it (for example 8:16 or 13:18).

**Departures from Vaticanus.** Both are handled openly, with full variant entries:
- 8:6, "and the new moons";
- 13:18, Swete printing κεφαλῆς (ℵA) against B's κεφαλήν.

I found no silent departure.

**Quotations and cross-references.** The site's Plain English Translation is used faithfully for the 66 books. The cross-references to Exodus 15, Judges 4–5, 1 Samuel 17, Deuteronomy 23:3 and Luke 1 are present and accurate in both directions. Every pointer to another card on the site (Joshua 2, Tobit 12, 1 Samuel 24, Deuteronomy 20, Joshua, Genesis 3, Job 2, 5 and 36, Judges 11, Jude 1, 1 Enoch 108) points to a card that exists. The Jewish and patristic claims I was asked to check hold up (see "Claims verified").

The weaknesses:
- **Three translation choices** shift the sense where the book's moral debate turns: 9:10 (who strikes), 8:12 (ὑπέρ with the genitive) and 16:14 ("Spirit").
- **Two of the three traditions cards** (chapters 15 and 16) have rows that dodge the question or repeat the book.json canon card. One deep section on deception puts an unsourced view in the Orthodox Church's mouth, the same fault the Tobit 12 review found.
- **Two sentences place Judith "in the Bible"** in the site's own voice.
- **A handful of factual slips**: "sixteen generations", Donatello's date, "before the Persians", and the canticle verse numbers.

Nothing is critical.

**Counts:** 0 critical, 7 major, 13 minor.

## Findings

### 1. MAJOR: plain.txt 9:10, "Let the deceit on my lips strike down the slave": God removed as the one who strikes

The Greek is an imperative addressed to God: πάταξον δοῦλον ἐκ χειλέων ἀπάτης μου ἐπ᾽ ἄρχοντι, "Strike the slave, by my deceitful lips, together with the ruler." The second clause is the same (θραῦσον, "shatter"). The Plain English Translation turns the first command into a third-person wish whose subject is "the deceit on my lips". God disappears as the agent, and Judith's deceit becomes the striker.

This is the verse on which N39, the chapter 9 deep section "Praying for deceit" and the views all turn. Their point is that Judith asks *God* to act through her deceit, and the translation should carry it.

**Fix:** "Strike down the slave with the ruler, and the ruler with his servant, by the deceit of my lips. Break their pride by a woman's hand." Move N39's anchor to match.

### 2. MAJOR: plain.txt 8:12, "to set yourselves above God"

The Greek is ἵστατε ὑπὲρ τοῦ θεοῦ. With the genitive, ὑπέρ means "on behalf of" or "in place of", not "above" (that would need the accusative). The KJV has "instead of God". Judith's charge is that the elders have put themselves in God's place by deciding when he must act. That is not quite the same as claiming to outrank him.

**Fix:** "and to stand in God's place among human beings". If you keep any other wording, add a `word` note (`deb`).

### 3. MAJOR: chapters.json ch. 11 `views.O` and the deception deep sections (chs. 9 and 11): an unsourced Orthodox position, and a lopsided set of views

**Orthodox (ch. 11 views.O).** It says "Orthodox readers have tended to read the speech as a stratagem of war, in the tradition of John Cassian and John Chrysostom… (Chrysostom, *On the Priesthood* 1.8)." The citation is real: Book I, chapters 8–9, is Chrysostom's defense of his own trick on Basil (checked: NPNF intro). But the passage is not about war, Judith or any Orthodox reading of this book. Cassian (*Conferences* 17) was a Latin-writing monk of Gaul and is not an Orthodox witness for the claim. The Tobit 07-14 review made exactly this point about the Tobit 12 card, and agent-writer-works.md's lesson is that "a church view needs a source that addresses the question itself."

**Fix:** say that one strand of Greek patristic teaching (Chrysostom, *On the Priesthood* 1.8–9) allowed a deception for another's salvation, and that this is how that strand would read 11:5–19. Do not present it as the Orthodox Church's reading of Judith. Otherwise drop views.O for chapter 11.

**Aquinas is half-told.** The deep sections give Aquinas only as "every lie is a sin" (II-II q.110 a.3 ad 3, quoted correctly). But Aquinas also treats deceiving an enemy in war at II-II q.40 a.3, which the chapter 13 deep section cites only for just war. There he allows concealing one's plans and laying ambushes, while forbidding false statements and broken promises. That distinction is what the Catholic tradition actually offers for Judith's speech: the feint of 14:2 is lawful, the false story of 11:11–15 is not. Add a sentence.

**Hodge.** "Charles Hodge held that deceiving an enemy in a just war is not the sin of lying" has no source key and no locus. Give *Systematic Theology*, vol. 3, his treatment of the ninth commandment, with a source key, or soften it to "some Protestant moralists".

**Jewish view.** Ch. 11 views.J ("Later Jewish ethics still debated when deceiving an enemy was allowed") names no one. Either name a source or cut the sentence.

### 4. MAJOR: chapters.json ch. 15 `traditions`, "Is Judith a figure of Mary?": rows that dodge or duplicate, a thin Catholic source, and a verse-numbering error

**Reformed and Anglican rows.** Both answer only "the Apocrypha may not ground doctrine": Westminster 1.3, and Articles VI and XXII. That is the book.json card "Is Judith inspired Scripture?" again, and it does not answer whether Judith is a figure of Mary or whether her praises may be sung of Mary. Article XXII is about invoking saints, which the question does not raise.

**Fix:** give each a distinct, sourced answer to the typology question, or drop them. A Reformed answer could be drawn from Reformed objections to Marian typology; an Anglican answer could note that the Prayer Book calendar and lectionary never apply Judith to Mary. Reduce the card to rows that really conflict, as the Tobit 12 card was reduced.

**Catholic row.** Its only sources are liturgical. For the claim "the church reads the Old Testament as foreshadowing… his mother", cite *Lumen Gentium* 55, which says the Old Testament brings "the figure of the woman, Mother of the Redeemer" into clearer light. The liturgical facts are all correct (see "Claims verified").

**Orthodox.** There is no Orthodox row, although Judith is in the Orthodox canon. Views.O says no regular Byzantine use was found. That is acceptable, but it is in the first person ("we have found"), which the site's voice should not use. Write "no regular use of Judith's praises is known in the Byzantine services."

**Canticle verses.** Both the ch. 15 deep section and ch. 16 views.C give the Liturgy of the Hours canticle as "16:2–3a, 13–15". That is the breviary's numbering. In the site's numbering, which follows the Greek, it is 16:1–2a, 13–15; on this site 16:2–3 are "the Lord… shatters wars" and "Assyria came down". book.json already says so: "16:2–3a, 13–15 in the breviary's numbering; 16:1–2a, 13–15 in this site's". John Paul II's catechesis of 29 August 2001 heads it "Canticle of Judith (16,1-2a.13-15)".

**Fix:** use the same wording as book.json in both places.

**Overlap (fine).** The card's pointer to the Genesis 3 card is correct, and there is no other card on the site about Judith as a figure of Mary. The other `mary` cards (1 Kings 2, 2 Samuel 6, Leviticus 12, Psalms 45 and 132, Revelation 12) ask different questions.

### 5. MAJOR: chapters.json ch. 16 `traditions`, "Is lifelong widowhood or celibacy a higher calling?": two rows do not answer the question

- **Anglican.** Article XXXII says that clergy may marry. It says nothing on whether widowhood or celibacy is a *higher calling*, and the row's own lead ("Not a higher state for clergy by law") shows the mismatch. Either find an Anglican source on the question (for example the 1662 marriage service's three causes of marriage, set against the revived Anglican religious orders), or drop the row.
- **Orthodox.** "Both are holy… Monastic life is honored as the angelic life" leaves the question open, and the only source is Ware for a set of rules about second marriage. Say plainly what Ware says on the rank of monastic celibacy and marriage, or narrow the row to what is sourced: second marriage allowed, with a penitential rite.
- **Sound rows.** Catholic: Trent session 24, canon 10; CCC 922 and 1618–1620. Lutheran: Augsburg 23 and 27; Apology 23, which grants that virginity is "a more excellent gift" but denies that it justifies. Reformed: Second Helvetic 29, which condemns those who condemn second marriages. All are accurate.
- **Duplication.** None. No other card on the site asks about celibacy or widowhood. The Tobit 8 marriage card asks what marriage is for, which is a different question.

### 6. MAJOR: the site's own voice places Judith in "the Bible"

- **chapters.json ch. 10, deep "Beauty as a weapon":** "She is the most beautiful woman of the Bible after Esther and Sarah." It is also a ranking that no text makes.
- **N93 (14:10):** "Achior is the Bible's clearest example of a Gentile who 'believes' and is circumcised."

Both treat Judith as part of "the Bible" in the site's voice, which agent-writer-works.md forbids. (The topics' "the Bible tradition's…" phrasing is borderline; see finding 19.)

**Fix:** "Her beauty is praised more often than any other heroine's in these books", and "Achior is the clearest example in Jewish literature of this period of…".

### 7. MAJOR: quotations that do not match the texts files exactly

- **N83 (13:16), Douay 13:20.** The note quotes "his angel *has kept me* both going hence…". The Douay file reads "his angel *hath been my keeper* both going hence, and abiding there, and returning from thence hither: and the Lord hath not suffered me his handmaid to be defiled". Copy it by script.
- **variants 8:1, reading 3, `orig`.** "υιου Ανανιου· υιου Γεδεων· υιου Ραφαιν· υιου Ακιθω·) A Ηλιου Bc om υιου Χελκειου A" splices three separate notes into one string, dropping Swete's `|` separators. One of them, Ηλιου Bᶜ, is a corrector of Vaticanus, so a B reading now sits inside the Alexandrinus witness. That is the "don't splice two witnesses" lesson. Quote A's addition and its omission of Χελκειου as two pieces, and drop Ηλιου Bᶜ, which is a different reading.
- **variants 8:1, reading 2.** The `orig` silently removes Swete's line-break bars. That is acceptable, but say "line breaks removed".
- **variants 8:6, reading 1, `orig`.** "(inter προ et νουμ. ins νουμηνιων κ) ℵ" quotes Swete's parenthesis, which explains how the corrector Bᵃᵇ inserted the word in the margin, and attaches it to ℵ. Quote the whole lemma instead: "προνουμηνιων] και νουμηνιων Bᵃᵇ(ᵐᵍ) … ℵ". The reading itself (ℵ and Bᵃᵇ add καὶ νουμηνιῶν) is correct.
- **OCR errors copied without comment.** At 13:10 the `orig` has "ουτων" (the digitized apparatus's recurring error for αυτων), and at 8:15 "σκεπασοι" (for σκεπασαι). Keep them if the rule is to copy the file, but add "[sic, for αὐτῶν]" so a reader is not misled.

### 8. MINOR: variants.json: the KJV-only entries (8:10, 8:21, 9:2, 10:8, 12:8, 13:11)

**Verdict: all six are sound, not noise.** Each marks a real difference in meaning between the KJV and the Greek printed here, which STYLE.md requires an entry for. Each correctly says that Swete's three manuscripts lack the KJV's reading. Some `why` texts overstate:

- **8:10.** "The KJV's Greek source added him to make the scene fit" is stated as fact. The RSV notes that "some authorities add Uzziah", so the name is in other Greek witnesses outside Swete's three; it is not a KJV invention. Say: "Uzziah is added in some later Greek manuscripts (not in B, ℵ or A), which the KJV follows; the addition fits 8:28." Note that modern versions differ over printing it.
- **8:21, reading 3.** Its `plain` ("he will hold us to account for its desecration") is not what the KJV says. It should render "at our mouth": "he will require its desecration from our mouth."
- **9:2.** The entry says all Swete's manuscripts read μήτραν, which is right. But it presents the KJV's "girdle" (μίτραν) only as an easier editorial correction. Many modern scholars and versions (the RSV, for example) prefer μίτραν as original, because "womb… womb" in one verse is awkward. Give that view too.
- **10:8, 12:8 and 13:11** are fine as written.

### 9. MINOR: variants.json: the 16:1 "my Lord" entry rests on an ambiguous note

As printed, Swete's note `τω κυριω] μου ℵA` replaces "the Lord" with "my", which cannot be the reading ("sing to me with cymbals"). Almost certainly a `+` was lost, in Swete's printing or in the digitization: ℵA read τῷ κυρίῳ μου, and so the KJV ("my Lord"). The entry's `w` hedges ("Swete's note gives μου"). Say plainly: "Swete's note, as digitized, reads τω κυριω] μου ℵA; it most likely means that ℵA add μου." The reading itself is sound.

### 10. MINOR: variants.json: missing entries

- **9:3.** `om απατην ℵ*ᵛⁱᵈ (hab απατη ℵ¹) A`: Sinaiticus (first hand) and Alexandrinus lack "their deceit". In a book where deceit is the theme (N31 is built on this phrase), that matters. Add an entry.
- **16:13.** `θεω μου] κω A` (the digitized note shows "??] κω A"). Alexandrinus and the KJV have "to the Lord" for "to my God". Add a minor entry, or mention it in N115.
- **16:11.** "and the enemy was routed" supplies a subject the Greek lacks. N113 discloses it, which may be enough because it is not a departure from B. But by the Tobit lesson ("every place where the Plain English Translation departs from the base text… needs a variant entry"), consider a `deb` note anchored on "the enemy", or an entry.

### 11. MINOR: plain.txt 16:14, "You sent out your Spirit"

A capital S imposes the Christian reading (the Holy Spirit) in the translation itself. N116 then reports that reading as what "Christian readers saw". πνεῦμα here is God's breath or spirit, as in the site's own Psalm 104:30 ("You send your breath out"). Use "your spirit" or "your breath", and keep the Christian reading in N116. Retitle N116 ("The breath that built creation").

### 12. MINOR: factual slips

- **N1 (8:1).** "the longest genealogy of any woman…, sixteen generations". The Plain English Translation follows Vaticanus, which lists twelve ancestors (Merari to Israel). Sixteen is only with the four names of ℵA. Say "twelve generations in Vaticanus, sixteen in Sinaiticus".
- **Ch. 13 deep, "As tyrannicide."** "When Florence expelled the Medici in 1495…" Piero de' Medici was expelled in November 1494. The statue was set up on the Piazza della Signoria in 1495 in memory of it. Write "After Florence expelled the Medici in 1494, Donatello's bronze… was set up in 1495…".
- **N124 (16:23).** "The book's own setting after the exile (4:3) could not fit that many years of peace before the Persians." The return from exile already happened under Persian rule (538 BC onward), so "before the Persians" makes no sense. The real problem is Nebuchadnezzar (died 562 BC) ruling while the exiles have returned. Say that the setting cannot be fitted to any real reign.
- **Variant 16:4 `why`.** "Holofernes' threat in 2:10 speaks of the 'borders' (ὅρια)". In 2:10 Nebuchadnezzar speaks, not Holofernes, and the Greek is singular, πᾶν ὅριον αὐτῶν (part 01-07: "all their territory").
- **N16 (8:18).** "when Jeremiah was still denouncing idols in Judah (Jeremiah 44)". Jeremiah 44 is addressed to Judeans in Egypt, after the fall. Cite Jeremiah 7 or 11 for Judah, or say "Judeans in Egypt".
- **N77 (13:4).** "the same words Samson used". The Greek verbs differ (κραταίωσόν με here, ἐνίσχυσόν με in Judges 16:28 LXX), and so does the English (the site's Plain English Translation has "Give me strength"). Say "a prayer like Samson's".
- **N85 (13:18).** "Christian writers from the early church on read Judith's blow… as Genesis 3:15". No early-church writer is named, and I know of none who makes this link before the Middle Ages. The ch. 15 deep section says "From the early Middle Ages", which is also unsourced. Name a writer (for example the *Speculum humanae salvationis*, 1300s, which book.json cites), or say "medieval Christian writers".

### 13. MINOR: N68 (12:4)

- **Quotation.** It quotes Abigail's oath as "as your soul lives" (1 Samuel 25:26). The site's Plain English Translation is "by your own life". Use the site's wording, or mark the quotation as the Greek (LXX ζῇ ἡ ψυχή σου).
- **Reading.** The `p` and body put "the Lord" in Judith's mouth ("'the Lord' will do by her hand"). That is Alexandrinus's reading, not the followed text, where the subject is left as "he". Say "he", as ch. 12's summary rightly does.

### 14. MINOR: smaller translation points

- **8:7, "She had a fine figure".** καλὴ τῷ εἴδει is "beautiful in appearance". "Figure" narrows it to the body, and the gloss ("a good figure") repeats it. Use "She was beautiful to look at".
- **8:9, "the bitter words".** ῥήματα… τὰ πονηρά is "the evil" or "hostile words" (as in 8:8, "a bad word"). "Bitter" softens it.
- **12:16, "Judith came in and lay down".** ἀνέπεσεν is the word for reclining at table (12:15, "recline"). In this scene "lay down" suggests more than the Greek does. Use "reclined".
- **13:10, "who put it in her food bag".** The Greek ἐνέβαλεν has no expressed subject, and the KJV has "she". Making it the maid is a fair choice, but it is a choice. Add it to N80, or write "and she put it".
- **11:11, "whenever they do this outrage".** "This" is added: ἀτοπίαν is "an outrage". Use "whenever they do what is not right".
- **9:11, "the rescuer of those without hope".** σωτήρ is the regular word for "savior". Elsewhere the part uses "save" for σωτηρία (8:17), and "savior" carries the book's theme. Consider "savior".

### 15. MINOR: unsourced lens views and claims

Most of these are generic and unsourced, against the lesson that a church view needs a source:
- ch. 9 views.P (used as "reasons why Judith cannot be Scripture");
- ch. 10 views.P ("beginning with the Reformers' debates");
- ch. 12 views.C ("read alongside the church's washings and vigils");
- ch. 13 views.P ("some Reformation writers used her as an example of… resisting a tyrant");
- ch. 14 views.P ("one reason Reformed writers gave for rejecting the book");
- ch. 14 views.C;
- N29 ("Readers who hold Judith as Scripture usually answer…").

Name one writer for each, or soften to "some readers". The ch. 14 Reformed claim would be strong if sourced (Whitaker or Rainolds, for example).

### 16. MINOR: chapters.json `settings`

- **Invented times.** 10:12–13 says "at dawn" and 11:5–19 "the morning she arrives". The text gives no time: she leaves "tonight" (8:33) and meets the patrol in the valley (10:11). Drop the times, or say "that night or at first light".
- **Boilerplate `readers`.** The same two sentences ("Most scholars: Jews in Judea under the Hasmonean high priests and kings, about 150–100 BC. They remembered… where Bethulia is set.") open the first setting of all nine chapters. This follows the Tobit fix (once per chapter), but it remains a stock line. The Hasmonean date is the majority view, but it is not settled, and no copy of Judith was found at Qumran. Add a `views` entry once (for example on 8:11–27) for the minority Persian-period or early Maccabean dating, and trim the repeat on the other cards to the passage-specific sentence that follows it.

### 17. MINOR: notes: small accuracy and style points

- **N64 (11:19).** Judith quotes the Greek of Exodus 11:7 word for word (οὐ γρύξει κύων τῇ γλώσσῃ αὐτοῦ). Say so. It is stronger than "an echo".
- **N44 (10:3).** "Additions to Esther 15:1–5; 16:7–8". Addition D is 15:1–16. The second reference (Addition E) has nothing to do with Esther's beauty. Drop it.
- **N60 (11:13).** "when Jews debated what could be done under siege (1 Maccabees 6:49, 53)". Those verses describe food running out in a sabbatical year, not a debate. Reword.
- **N9 and N63 repeat words.** N9: "The same is said of Job, of whom it is said". N63: "Micaiah saw Israel 'all Israel scattered…'".
- **N123 and the ch. 16 deep section.** "Paul told widows… more fortunate if she stays as she is": the plural and singular are mismatched.
- **N125.** "In the KJV and Vulgate she frees the maid at the end, as here" says nothing. Cut it.

### 18. MINOR: glosses.json

- **Synonyms, not glosses.** 8:7 "She had a fine figure → She had a good figure", 12:7 "his bodyguards → his guards", 13:1 "When it grew late → Late that evening" and 15:1 "they were stunned → they were in shock" are synonyms. Cut them, or replace them with glosses on customs or measures.
- **16:15, "those who fear you → those who honor you".** This weakens "fear" and contradicts the site's usage. Use "those who stand in awe of you".

### 19. MINOR: consistency with book.json and other parts

- **Tosafot.** book.json says "the Tosafot (on Pesachim 108b) named her Judith". This part says Tosafot on Megillah 4a (source key `tosafot-megillah`). I confirmed Megillah 4a, where Tosafot cites Rashbam: Purim through Esther, Hanukkah through Judith. Tell the book.json owner to check the Pesachim reference, or change it to Megillah 4a.
- **Topics phrasing.** topics.json "widows" says "Judith is the Bible tradition's great rich widow", and "song-of-moses" says "the latest of the Bible tradition's great victory songs". These are borderline in the site's voice; "in Jewish tradition" is safer.
- **Terms.** These all match part 01-07 and terms.json: names (Uzziah, Chabris, Charmis, Joakim, Betomasthaim, Choba, Achior, Bagoas), the council of elders (γερουσία), γαυρίαμα "delight", ὕψωμα "honor", καύχημα "boast", ἅβρα "maid", and ἀπατάω "deceive", rendered "seduce" at 12:16 with a note. The verb ἐγαυρίασαν at 9:7 is "boast", which is fine for the verb.
- **Fasting card.** The ch. 8 card's `s` list leaves out three keys the rows use: `paenitemini`, `ware-orthodox` and `westminster`.

### 20. MINOR: the ch. 8 fasting card: sound

All rows check out:
- Apostolic Canons 64 (no fasting on Sunday or Saturday except Holy Saturday) and 69 (Lent, Wednesday and Friday);
- CIC 1249–1253 and *Paenitemini* (17 February 1966);
- Augsburg 26;
- Calvin, *Institutes* 4.12.14–21 (public fasts commended; Lent called a superstitious imitation of Christ at 4.12.20);
- Westminster 21.5 ("solemn fastings… upon special occasions");
- the 1662 Prayer Book's "Table of the Vigils, Fasts, and Days of Fasting or Abstinence", which matches.

The card is fair and unranked, and no other card on the site asks this question. Only the `s` list needs fixing (finding 19).

## Checked and found sound

- **Translation.** It is faithful verse by verse apart from the items above. I checked names, numbers and who does what in every verse. These choices are good:
  - 12:4 keeps "he" ambiguous;
  - 12:16 "seduce" (ἀπατῆσαι), with N74 tying it to Judith's "deceit";
  - 8:21 "fall", with the note N17;
  - 16:2 keeps the hard Greek;
  - 16:11, with N113.
- **The departures from Vaticanus.**
  - 8:6: ℵ and Bᵃᵇ in the margin add καὶ νουμηνιῶν. The reasoning (pairs of eve and day; no fasting on new moons, Mishnah Ta'anit 2:10) is good.
  - 13:18: Swete prints κεφαλῆς ℵA against B's κεφαλήν, as his note says, and the entry is accurate.
  - There are no silent departures.
- **The other variant entries** match Swete's apparatus: 8:15, 9:13, 9:14, 10:4, 10:9, 12:4 (and "Sinaiticus is lost here": `excidit fol in ℵ` after 11:13), 13:10, 15:4, 15:7, 15:10, 16:1 (both), 16:4, 16:19 and 16:25.
- **Vulgate and Douay citations** all match, except N83 (finding 7): 8:4 (six months), 8:5, 8:6, 8:9, 8:27, 9:6, 9:13, 10:4, 10:5 (*caseum*), 13:23, 15:10, 16:2 (*psalmum novum*), 16:26 and 16:31.
- **Deuteronomy 23:3 and Achior.** N93, ch. 14 views and the deep section say "conflicts", as the lesson asks. They give the rabbinic answers accurately: Mishnah Yadayim 4:4 (Judah the Ammonite proselyte; Sennacherib mixed the nations), Berakhot 28a and Yevamot 76b–77a.
- **Genesis 34 and 49 at 9:2.** These are correctly labeled as a conflict. Jubilees 30 ("counted to them for righteousness") and Testament of Levi 5–6 (an angel gives Levi the sword) are accurate.
- **Status.** Apart from finding 6, the book is never called Scripture in the site's voice. The churches' positions are attributed to them.
- **Cross-references, both ways.**
  - Exodus 15 (9:7 and 16:2, the Greek of 15:3 correctly flagged; 15:20–21);
  - Judges 4–5 (4:9, 4:21, 5:24, 5:26, 5:31);
  - 1 Samuel 17:51, 54;
  - Deuteronomy 23:3;
  - Luke 1:42, 48, 52 and 68, and Luke 2:37.
  - All are present and accurate, and quoted in the site's Plain English Translation.
- **Other Jewish and Greek sources.**
  - Genesis Rabbah 55:2 (the potter testing sound jars, on Psalm 11:5);
  - Honi in Mishnah Ta'anit 3:8;
  - the Letter of Aristeas 305–306 (hands washed in the sea before prayer);
  - Josephus, *Antiquities* 12.138–142 (gerousia), 13.255–256 (Gerizim) and 13.257–258 (Idumeans);
  - Diodorus 16.47–50 (Bagoas under Artaxerxes III) and 31.19.2–3 (Holophernes of Cappadocia in Ochus' Egyptian war);
  - 1 Maccabees 7:47–49 (Nicanor's day, 13 Adar);
  - 2 Maccabees 10:7 (thyrsi).

## Claims verified (web search, 2026-10-24)

**Liturgy**
- **Pre-1970 Missal Gradual** for the Immaculate Conception: *Benedicta es tu, Virgo Maria…* with *Tu gloria Jerusalem…*, cited "Jth 13:23; 15:10". Confirmed (a parish propers insert; the extraordinaryform.org propers). Note that this Mass (*Gaudens gaudebo*) dates from 1863, not from the 1570 Missal. The part correctly says "the Missal used before 1970" and never claims 1570.
- ***Tota pulchra es*** uses the three titles. Confirmed.
- **LOTH canticle:** Wednesday Week I, Morning Prayer, "Judith 16:2–3a, 13–15" in the breviary's numbering (Diocese of Lake Charles list). John Paul II, General Audience of 29 August 2001, heads it "16,1-2a.13-15". So finding 4 stands.
- **Guadalupe (US lectionary):** responsorial psalm Judith 13:18bcde, 19, with the response from 15:9d. Confirmed.

**Church documents**
- **Aquinas II-II q.110 a.3 ad 3.** Confirmed verbatim in substance: "Judith is praised, not for lying to Holofernes, but for her desire to save the people, to which end she exposed herself to danger", and "her words contain truth in some mystical sense". Both renderings in the part are fair. q.97 (tempting God) and q.40 (war; a.3 on ambushes, see finding 3) are as I know them.
- **Apostolic Canons 64 and 69; Mishnah Ta'anit 2:10.** Search results consistent. These are standard texts and I did not open them.
- **Apology 23** ("a more excellent gift"). Confirmed in substance (a Lutheran study page). I did not confirm the paragraph number.
- **Calvin, *Institutes* 4.12.14–21.** Consistent with search results (Heidelblog and Reformation21 on Calvin and Lent).
- **From memory, not opened:** Trent session 24, canon 10; CCC 922 and 1618–1620; Westminster 1.3 and 21.5; Second Helvetic 29; Articles VI, XXII and XXXII; the 1662 table of fasts; CIC 1249–1253; *Paenitemini*. Their contents are as I know them and as the part states.

**Fathers**
- **Ambrose, *On Widows* 7.37–42.** Confirmed (NPNF via CCEL). He praises Judith's courage, sobriety ("Temperance… is the virtue of women", §40) and chastity, not her charm. N45 and the ch. 10 deep section are accurate.
- **Jerome, Letter 54.16 (to Furia).** Confirmed (New Advent). He uses Judith, with the hedge "if any one is of opinion that it should be received as canonical", and the line "chastity beheads lust". The part might quote that hedge; it is a useful datum for the canon card.
- **Chrysostom, *On the Priesthood* 1.8–9.** Confirmed as his defense of deceit for a good end (NPNF). See finding 3 on how it is used.
- **Cassian, *Conferences* 17.** Not opened. That it allows a "medicinal" lie is standard.

**Jewish sources**
- **Rashi on Shabbat 23a.** Confirmed: "the miracle was by the hand of a woman", with no name.
- **Tosafot on Megillah 4a.** Confirmed: citing Rashbam, "Chanukah, by Judith" (Sefaria sheet). See finding 19 on book.json's Pesachim 108b.
- **Rema, OC 670:2** (cheese, because of the milk Judith fed the enemy). Consistent with several sources (Etzion, OU). I did not open the text.
- **Genesis Rabbah 55:2.** Consistent with search results (the potter and the jars).
- **m. Yadayim 4:4 and m. Ta'anit 3:8.** Not opened; standard.

**History**
- **Josephus on Gerizim.** The destruction is dated about 112–107 BC; Wikipedia gives about 110 BC from Josephus's sequence. "About 111 BC" is fine.
- **Diodorus 31.19** (Holophernes of Cappadocia). Consistent (Smith's *Dictionary*; Jewish Encyclopedia, "Holofernes").
- **Aristeas 305–306.** Consistent with search results.

**Art**
- **Donatello.** The statue was placed in the Piazza della Signoria in 1495 in memory of Piero de' Medici's expulsion, which was in 1494 (finding 12).
- **Mantegna** (Washington panel): the maid holds the sack for the head. Confirmed.
- **Artemisia Gentileschi**, *Judith and Her Maidservant* (Florence): the maid carries the head in a basket. Consistent with N80's "often".

**The 9:2 typo.** Confirmed from Swete's own lemma (see the top of this report). It is now corrected in texts/orig/Jdt.json.

## Fixes applied

1. 9:10 Plain English Translation now "Strike down the slave with the ruler, and the ruler with his servant, by the deceit of my lips." (God strikes); N39 anchor, its body and preview, the ch. 9 summary and deep section, and the judith and rahab topic sections updated. (book.json quotes 9:10: coordinator told.)
2. 8:12 Plain English Translation now "and to stand in God's place among human beings?"
3. Ch. 11 views.O rewritten as one strand of Greek patristic teaching (Chrysostom, On the Priesthood 1.8–9), not the Orthodox Church's reading; Aquinas II-II q.40 a.3 (stratagem allowed, falsehood not) added to the ch. 9 deep section; Hodge now cited as Systematic Theology vol. 3 (ninth commandment), as on the Joshua 2 card; the unsourced Jewish-ethics sentence in ch. 11 views.J cut.
4. Ch. 15 card: Reformed and Anglican rows dropped (they restated the canon card); Lumen Gentium 55 added to the Catholic row (the Gradual noted as a Mass of 1863); views.O no longer in the first person; canticle numbering now "16:2–3a, 13–15 in the breviary's numbering; 16:1–2a, 13–15 in this site's" in the ch. 15 deep section and ch. 16 views.C.
5. Ch. 16 card: Anglican row (Article XXXII) dropped; Orthodox row narrowed to what Ware supports (remarriage allowed as a concession, with a penitential service; clergy may not remarry); s list fixed.
6. "Most beautiful woman of the Bible" replaced with "praised more often than any other heroine's in these books"; N93 now "the clearest example in Jewish literature of this period"; also fixed "few prayers in the Bible" (ch. 9 summary) and N1 ("any woman in the Bible's tradition").
7. N83 Douay 13:20 now copied by script ("hath been my keeper"); 8:1 A reading split into two Swete pieces, Ηλιου Bᶜ dropped; 8:1 ℵ reading marked "line breaks removed"; 8:6 orig now the whole lemma; [sic] added at 8:15 (σκεπασοι) and 13:10 (ουτων).
8. 8:10 why reworded (later Greek manuscripts, not a KJV invention; versions differ); 8:21 KJV reading's plain now "he will require its desecration from our mouth"; 9:2 why now gives the modern preference for μίτραν.
9. 16:1 witness now says the digitized note most likely means ℵA add μου.
10. New variants at 9:3 (ℵ* A omit ἀπάτην) and 16:13 (A and KJV "to the Lord", lemma lost in the digitized note); new deb note on "the enemy" at 16:11.
11. 16:14 Plain English Translation now "your spirit"; N116 retitled "The breath that built creation", with the lower case explained and the Christian reading kept.
12. N1 now twelve generations in B, sixteen in ℵA; Donatello: Medici expelled 1494, statue set up 1495; N124 now says the setting fits no real reign; variant 16:4 why corrected (Nebuchadnezzar, singular πᾶν ὅριον); N16 now cites Jeremiah 7:17–18 and 11:9–13; N77 "a prayer like Samson's"; N85 now names medieval writers and the Speculum humanae salvationis, and the ch. 15 deep section says "Medieval Latin writers".
13. N68: "the Lord" replaced by "he" in p and body; the Abigail parallel now gives the Greek ζῇ ἡ ψυχή σου rather than a non-site quotation.
14. Plain English Translation: 8:7 "She was beautiful, and very lovely to look at"; 8:9 "hostile words"; 12:16 "reclined"; 11:11 "whenever they do what is not right"; 9:11 "the savior of those without hope"; 13:10 kept as the maid, with N80 saying it is a choice (KJV "she").
15. Unsourced lens claims softened to "some readers" (ch. 9 P, ch. 10 P, ch. 13 P, ch. 14 P and C, N29); the ch. 12 C sentence on washings and vigils cut.
16. Settings: invented times removed (10:12–13, 11:5–19); the boilerplate readers lines kept only on 8:11–27, which now has a views entry for the minority datings; the other first settings start "For the book's first readers…" with only the passage-specific sentence.
17. N64 now says Judith quotes the Greek of Exodus 11:7 word for word; N44 refs now Additions to Esther 15:1–16; N60 reworded (food ran out in a sabbatical year, 1 Maccabees 6:49, 53); N9 and N63 repetitions fixed; singular/plural fixed in N123 and the ch. 16 deep section; N125 empty sentence cut.
18. Glosses at 8:7, 12:7, 13:1 and 15:1 cut; 16:15 now "those who stand in awe of you".
19. Tosafot: this part keeps Megillah 4a; the coordinator has been told to have the book.json owner check its Pesachim 108b reference. Topic phrasing changed to "of Jewish tradition" / "in Jewish tradition"; fasting card s list now includes paenitemini, ware-orthodox and westminster.
20. No change needed.

Checks after fixes: `--check Jdt/08-16` 0 errors, 0 warnings (128 notes, 26 variants, 58 glosses); `--check Jdt` 0 errors, 0 warnings.
