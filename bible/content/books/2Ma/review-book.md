# Hostile review: 2 Maccabees book-level files (book.json, sources.json)

Reviewed: `content/books/2Ma/book.json` (title, subtitle, lead, facts, authorship, audience, outline, lenses, sections, spec, prompts, topics, links, reading, both traditions cards, and the whole `canon` block) and `content/books/2Ma/sources.json`.

Checked against:
- the Greek in `texts/orig/2Ma.json` (Swete, Alexandrinus), Swete's apparatus `texts/src/2Ma.app.json`, and the Vulgate and Douay in `texts/src/2Ma.lat.json`;
- the Plain English Translation in the four part folders. A script took every quotation in book.json and looked for it in the parts' plain.txt. All 89 quotations that should be 2 Maccabees Plain English Translation match the current Plain English Translation word for word. I then checked by hand that each one is cited at the right verse;
- the part variants, notes, chapters.json and the works lane's proposed terms (`content/proposals/works/terms.json`);
- every traditions card on the site (`content/books/*/chapters.json`, `*/parts/*/chapters.json`, `*/book.json`), and `app/app.js` for the headings that book.json points to;
- the Plain English Translation of the 66 books where book.json quotes them (John 10:22, Matthew 16:14 and Exodus 20:13 match), and the 66 books' notes for pointers back to 2 Maccabees.

`VERBOSE=1 node tools/build.js --check 2Ma` gives **0 errors and 1 warning**: 555 verses, 401 notes, 117 variants, 183 glosses, 15 chapter pages and 42 topic contributions. The warning comes from part 04-07 (notes[220], 7:36, John 4:14 not in the site's wording), not from book.json. Every source key resolves. There are no em-dashes. The verse count, 555, matches the lead and the facts.

## Verdict

This is careful, well-built work. In the site's own voice, 2 Maccabees is never called Scripture or "the Bible". The churches are not ranked. The reliability analysis is labeled as Claude's and keeps its four parts. Every 2 Maccabees quotation matches the parts' current Plain English Translation, and I found no NRSV wording in it.

Most of the claims the writer marked as resting on memory check out (see "Verified"). The weak points are these:
- **Two scholars are misreported.** Doran's words, "very little evidence that the work was known by Philo, Josephus, or the rabbinic tradition", are credited twice to Schwartz. And Doran is listed among those who date the letter of 11:27–33 to spring 164 BC, when his own chronology puts it in February or March 165.
- **One false claim weakens the case against Catholic and Orthodox readers.** book.json says that no other Old Testament book of any church speaks in the writer's voice of labor and sleepless nights. The prologue to Sirach does exactly that, and asks pardon too. That is the Catholic side's strongest parallel on the second card, and Newman uses it.
- **A church's view is given a source that does not say it.** Catechism 1032 is given as the source for the Catholic reading of 15:12–14 as the communion of saints. That paragraph cites only 12:46.
- **cited_in leaves out links that the parts and the works terms already draw.** The plainest is Galatians 1:13–14: outside 2 Maccabees, "Judaism" (Ioudaismos) appears in the Bible only there.

The rest is precision: a Venetus-only reading (15:27), Mattathias at 14:19, the numbers at 8:20, Calvin "not answering", the Leipzig wording, Luther's verb, the Orthodox and purgatory, Samson, the commentators' real names, and pointers to headings that do not exist.

Findings: **0 critical, 5 major, 20 minor.**

## Verified

All of the following were checked with web search or against the texts files.
- **Codex Sinaiticus.** It has 1 and 4 Maccabees but not 2; Vaticanus has no Maccabees. This is standard, and the 1Ma book.json lists ℵ for 1 Maccabees.
- **Cotton and Wörrle, ZPE 159 (2007), 191–205.** The inscription is a letter of Seleucus IV to Heliodorus, with covering notes from Heliodorus to Dorymenes and on to Diophanes. It dates to no earlier than August 178 BC. It appoints Olympiodoros as overseer of the sanctuaries of Coele-Syria and Phoenicia. It was found at Maresha (Beit Guvrin) (currentepigraphy.org; bibleplaces.com). On what book.json says about it, see finding 14.
- **Antiochus III**, killed in 187 BC while robbing a temple of Bel in Elymais. This is the standard account (Diodorus, Strabo, Justin), and it is correct.
- **Quintus Memmius and Titus Manius.** The ISBE / Biblical Training article says that no such legates are known, and that T. Manlius Torquatus went to Egypt, not Syria. "Otherwise unknown" is fair. Venetus adds Ερνιος after Manius (apparatus at 11:34).
- **Date of 11:27–33.** Xanthicus 148 SE is March–April 164 BC in the autumn (Macedonian) era. But Doran's own chronology gives February–March 165 BC (see finding 2).
- **Syriac and Armenian versions.** Doran (introduction) lists translations "into Syriac, Armenian, and Coptic". Bechtel says the Syriac "is often a paraphrase rather than a translation".
- **Hanhart.** *Maccabaeorum liber II, copiis usus quas reliquit Werner Kappler*, Septuaginta IX/2, 1959; 2nd ed. 1976. Confirmed from the NETS 2 Maccabees introduction, which also says that Hanhart rests mainly on A and the minuscules 55, 347 and 771.
- **Newman.** "On the Inspiration of Scripture", *The Nineteenth Century*, February 1884, excerpted in *The World's Best Essays* (1900). The words "Jason need not, the writer of the Second Book of Machabees must, have been inspired" are verbatim. Newman cites Luke's "careful inquiry", and he also discusses the prologue to Ecclesiasticus (see finding 3).
- **Calvin, *Institutes* 3.5.8** (Beveridge, CCEL). "I will not deign to reply, lest I should seem to include that work among the canonical books" is verbatim. So are "when in the end he asks pardon for any thing less properly expressed" and "He who confesses that his writings stand in need of pardon, certainly proclaims that they are not oracles of the Holy Spirit." See finding 9.
- **Luther.**
  - LW 32:96 (1521): "for that book is not among the books of Holy Scripture", and it "is not found in a Hebrew version" (aomin.org).
  - The 1534 preface, LW 35:352–353: the title "cannot be true"; "so it is proper that this second book should be thrown out, even though it contains some good things"; "But we include it anyway, for the sake of the good story of the seven Maccabean martyrs and their mother". On "include", see finding 11.
- **Augustine.**
  - *Letter* 204.7: "Non ergo fuit iste vir eligendae mortis sapiens, sed ferendae humilitatis impatiens", and "factum tamen eius narratum est, non laudatum" (romanletters.org). Correct.
  - *Sermon* 300: on the feast of the Maccabean martyrs, and it mentions their church at Antioch (Cult of Saints database, E02689). Correct.
- **Haydock on 2 Mach 15:39.**
  - Challoner, "This is not said with regard to the truth of the narration", and Calmet, "Inspiration did not exclude natural acquirements", are verbatim.
  - The comparison with Paul is given only in Latin, *imperitus sermone sed non scientia* (see finding 16).
- **Archibald Alexander (1826, CCEL text).** His words are verbatim: Razis "spoken of with high commendation", "suicide is not, in any case, agreeable to the word of God", the hidden fire "has very much the air of a fable", and Judas writing "six-and-thirty years after his death!"
- **Bechtel, CE "Machabees"** (newadvent):
  - "cannot in any case be very much later";
  - the second letter "about 163 B.C.";
  - the accounts "fit very well into one another";
  - 2 Maccabees reckons from autumn (Tishri);
  - the chapter 11 campaign "is not the same as that related in I Mach., iv.";
  - "Greek idioms and Greek constructions are very numerous". All are correct.
  - The "managed" reading at 1:18 is Bechtel's Codex 125 (Mosquensis), οἰκονομήσας (see finding 22).
- **NAB introduction** (vatican.va): the book is not in the Hebrew canon, being written in Greek; "exaggerated figures for the size of armies"; "transferring events from their proper chronological order"; "long, edifying discourses". All are correct.
- **Doran's introduction** (Fortress sample):
  - Clement's phrase, "the composer of the epitome of the Maccabees";
  - the martyrs "mentioned probably in Heb 11:35–38";
  - Abel and Habicht date the book to 124 BC, and van Henten to 124–63 BC;
  - Doran places the writer in the Diaspora;
  - reconstructing Jason is like tilting at "Don Quixote's windmills";
  - Bickerman's "basic consensus" on two letters;
  - Doran examines "each piece in itself". All match, with the exceptions in findings 1, 2 and 21.
- **cited_in sources** (biblehub). Each is real and fairly graded:
  - Ellicott on Matthew 16:14: 2 Maccabees 2 and 15;
  - Ellicott on Hebrews 11:35: Eleazar and the seven brethren;
  - the Cambridge Bible on Hebrews 11:3: 7:28; on Hebrews 11:35–36: 6:18–30, 7:1, 7:7, 7:9, 7:10, 7:13;
  - Vincent on Hebrews 11:35: 6:19, 28 and 7:9, 14;
  - JFB on Hebrews 11:35: the fourth brother, "no resurrection to life";
  - the Cambridge Bible on Acts 12:23 and Vincent on Acts 12:23: 9:9;
  - the Cambridge Bible on John 10:22: 2 Maccabees 10:1–8.
- **Polybius 31.9** (Paton): "died at Tabae in Persia, smitten with madness, as some people say". Correct.
- **The Greek and Latin.**
  - Alexandrinus at 1:10 reads ὀγδοηκοστοῦ καὶ ὀγδόου, and Venetus prefixes ἑκατοστοῦ καὶ, with "distinx post ογδ. V";
  - the Vulgate at 12:43 has *duodecim millia drachmas*;
  - Douay 12:46 is word for word;
  - the Vulgate splits 15:36 into 15:36–37, so 15:37–39 here is 15:38–40 there;
  - 6:28 γενναῖον/γενναίως, 6:31 γενναιότητος, 14:42 εὐγενῶς;
  - Hebrews 11:35 ἐτυμπανίσθησαν with 6:19, 28 τύμπανον; Hebrews 11:36 ἐμπαιγμῶν with 7:7 ἐμπαιγμόν. All are correct.
- **The Leipzig exchange.** It can be checked against a second source, though not against the Weimar edition itself. A Substack essay ("What Was Actually at Stake", judahlamb.substack.com) gives an English translation of the protocol in WA 59:433–605. It agrees with the site's gist: Luther says that the book "since it is not in the canon, is powerful only for the faithful; against the obstinate it avails nothing"; Eck answers that "the Church received them into the canon". See finding 10.

## Findings

### Major

**1. Major: Schwartz is credited with Doran's sentence (sections "2 Maccabees in worship and memory", "In Jewish memory"; canon.accepted_by "Judaism").**
- *What the site says:* "Daniel Schwartz finds very little evidence that Philo, Josephus or the rabbis knew it."
- *Whose words they are:* Doran's introduction: "there is very little evidence that the work was known by Philo, Josephus, or the rabbinic tradition."
- *The sources:* the Judaism row cites `doran-2macc`, not `schwartz-2macc`, so the key is right and the name is wrong. Schwartz holds that the book is a Diaspora work, and he may say something similar, but the site quotes Doran's wording.
- *Fix:* "Robert Doran finds very little evidence ..." in both places.

**2. Major: the date of 11:27–33 credited to Doran (reliability §3, "The letters of chapter 11").**
- *What the site says:* "Many historians, such as Habicht and Doran, think the letter of 11:27–33 is a genuine letter of Antiochus IV himself, from about the spring of 164 BC ..., though Doran thinks the date at its end unlikely."
- *What Doran says:* his chronology puts "Menelaus intervenes ... (11:27–33)" in **February/March 165 BC**, and he says that "the date given at the end of the letter is unlikely". So for Doran it is not spring 164 at all. The sentence is also self-contradictory as written.
- *Fix:* "Many historians think the letter of 11:27–33 is a genuine letter of Antiochus IV, written before his death and the Temple's purification. Habicht dates it, by its own date (Xanthicus 148), to March 164 BC; Doran thinks that date unlikely and places it in early 165 BC."
- *Unchecked:* Habicht's date is from my memory; check JSHRZ I/3 (1976) before naming him.

**3. Major: sections "How to read 2 Maccabees": "in a voice no other book in the Old Testament of any church uses".**
- *What the site says:* the writer's talk of "sweat and sleepless nights" (2:26) and his closing apology are in a voice that no other Old Testament book of any church uses.
- *Why that is false:* the translator's prologue to Sirach, in the Catholic and Orthodox Old Testament, speaks the same way. He says he brought "much sleeplessness and skill" (ἀγρυπνίαν, the word of 2:26), and he asks readers to "pardon" him where he seems to fall short. From memory; there is no Sir file in texts/orig, so check against Rahlfs or Swete.
- *Why it matters:* this is not a side point. On card 2 and in rejected_why ("The writer's own words"), the Protestant argument is that a writer who asks pardon cannot be inspired. The obvious Catholic and Orthodox answer is that another book in their canon does the same. Newman's essay, the card's own source, discusses the Ecclesiasticus prologue in exactly this connection (verified). As written, the site's voice backs one side of the card with a false premise.
- *Fix:* say "in a voice found elsewhere only in the translator's prologue to Sirach". Add the Sirach prologue to card 2's Catholic row (Newman) and to rejected_why "How the Catholic Church answers", "On the writer's apology".

**4. Major: reliability §4, "Each church's view": "(c) as witness to the communion of saints (*Catechism* 1032)".**
- *What the sentence does:* it gives CCC 1032 as the source for Catholics reading 15:12–14 as the dead praying for the living.
- *What 1032 says:* it cites only 2 Maccabees 12:46, for prayer for the dead. I know of no paragraph of the Catechism that cites 15:12–14. The brief requires that a church's view be "sourced by something that addresses the question itself".
- *Fix:* split the citation. 1032 is for (b). For (c), cite a Catholic writer who uses 15:12–14 for the saints' intercession: Bellarmine, *De sanctorum beatitudine*, is the classic case, and Catholic Answers tracts use it. That is from memory, so check it. Or state it without a church source: "Catholic writers have long cited 15:12–14 for the saints' intercession". Then point to the Revelation 5 card, as how_to_read already does.

**5. Major: canon.cited_in leaves out links that the parts and the works terms already draw.**
cited_in is printed under "Where the Bible refers to it". The five entries are all real and fairly graded (see "Verified"). But the part notes draw these links and cited_in has none of them:
- **Galatians 1:13–14 at 2:21** (and 8:1; 14:38). Paul's "in Judaism" (ἐν τῷ Ἰουδαϊσμῷ, Gal.json) is the only use of the word in the Bible outside 2 Maccabees. Part 01-03's notes and the works lane's proposed term for Ἰουδαϊσμός ("compare Galatians 1:13–14") already draw it. book.json itself makes much of "Judaism" (sections, the reliability verdict) without naming Galatians. Kind: shared tradition (vocabulary).
- **Acts 5:39 at 7:19.** Gamaliel's θεομάχοι, "fighters against God", against the brother's θεομαχεῖν ἐπιχειρήσας. The part notes draw it (three times). Kind: shared tradition. Lukan commentators often cite 2 Maccabees 7:19 here; check one (from memory).
- **Hebrews 11:38 at 6:11 / 10:6.** "In caves", hiding in caves (6:11; 10:6; compare 5:27). The part notes draw it (four times), and the 1Ma book.json already reads 11:38 with the Maccabean flight. Fold it into the Hebrews 11:35–36 entry.
- **Revelation 11:19 at 2:4–8.** The ark seen again in God's temple, against Jeremiah's hidden ark that will be shown "when God gathers his people" (2:7–8). The part notes draw it (three times). Kind: shared tradition.
- **Romans 4:17 at 7:28.** "Calls into being things that are not" (καλοῦντος τὰ μὴ ὄντα ὡς ὄντα). The part notes draw it (five times), and reliability §4 already cites it. Fold it into the Hebrews 11:3 entry.
- **1 Corinthians 15:29 at 12:44.** Baptism for the dead and "if the dead are not raised" against "if he had not expected the fallen to rise again". The part notes draw it (three times), and it is a standard point in the Catholic and Protestant exchange over 12:43–45. Kind: disputed.
- *Fix:* add each one with a commentary source checked as the existing entries were, or drop it with a reason, as the 1Ma writer did.

### Minor

**6. Minor: sections "Names and words to know": *epiphaneiai* "(2:21; 3:24; 12:22; 15:27)".**
- *The problem:* at 15:27 Swete prints ἐπιμελείᾳ, "care". The apparatus has "επιμελεια] επιφανεια V", and the Plain English Translation says "God's care for them". The 12-15 variant records this. So 15:27 is an epiphany only in Venetus, which is the quiet drift toward Venetus that the lessons warn about.
- *What the terms say:* the works terms proposal lists "2:21; 3:24; 5:4; 12:22; 14:15; at 15:27 only in Venetus".
- *Fix:* "(2:21; 3:24; 5:4; 12:22; 14:15)".

**7. Minor: sections "Two books about the same war": "2 Maccabees never names Mattathias".**
14:19 names a Mattathias, one of Nicanor's envoys (Ματταθίαν; Plain English Translation "Posidonius, Theodotus and Mattathias"). *Fix:* "never names Judas's father, Mattathias".

**8. Minor: reliability §3, "The numbers": "120,000 Galatians killed by 6,000 Jews and Macedonians (8:20)".**
- *What 8:20 says:* 8,000 Jews fought with 4,000 Macedonians. The Macedonians were "at their wits' end", and "the six thousand" destroyed 120,000. The 08-11 variant records the 6,000/8,000 problem.
- *Fix:* "120,000 Galatians destroyed by 'the six thousand' (8:20; the text has just said 8,000 Jews with 4,000 Macedonians)".

**9. Minor: Calvin "would not answer" (card 1 Reformed row; accepted_by Reformed; rejected_why "Prayer for the dead ...": "Calvin would not answer the argument at all").**
- *What Calvin does:* he says he "will not deign to reply", and then he replies. "We may add, that the piety of Judas is commended for no other reason than for having a firm hope of the final resurrection" (3.5.8).
- *The conflict with part 12-15:* that card says rightly that "Calvin granted that Judas acted from hope in the resurrection". book.json's "would not answer the argument at all" is wrong and contradicts it.
- *Fix:* "Calvin said he would not stoop to answer it, 'lest I should seem to include that work among the canonical books', and then argued that Judas is praised only for his hope of the resurrection".

**10. Minor: Leipzig 1519 (card 1 Lutheran and Catholic rows; rejected_why; `leipzig-1519` key).**
- *(a) A word dropped.* The translation of the protocol I could reach reads "is powerful **only** for the faithful". The site drops "only".
- *(b) Luther's concession left out.* Luther also said, "I know the Church receives this book", and he distinguished "'canon' in one sense and 'canon' in another". Fairness to Luther's position (and to Eck's reply) is better served if one clause gives this.
- *(c) Two points not verified.* Eck's "though not in the canon among the Hebrews", and his use of the Vulgate maxim "It is a holy and wholesome thought ...". The translation I saw has Eck say only that "the Church received them into the canon", citing Augustine. Gary Michuta (as quoted on Beggars All, 2011) says Eck appealed to 12:46.
- *(d) The source key.* The protocol is edited in **WA 59:433–605** (Leipzig 1983). The key's "WA 2:324" is unconfirmed: WA 2 holds Luther's *Resolutiones* on the Leipzig theses, but I could not confirm that page.
- *Fix:* cite WA 59, with the page if the writer can reach it. Keep the blog as "as quoted in". Add "only". Mark (c) "as reported by".

**11. Minor: Luther's 1534 preface (card 1 Lutheran row; accepted_by Lutheran): "he translated it anyway 'for the sake of the good story ...'".**
- *The verb.* LW 35:353 reads "But we **include** it anyway, for the sake of the good story ...". The point is that he kept it in his Bible, not that he translated it. He translated all the Apocrypha.
- *The phrase.* "Thrown out of the canon" adds "of the canon" to "thrown out". That is acceptable as paraphrase, since the contrast in LW is with "included among the sacred Scriptures", but keep it outside quotation marks.
- *Fix:* "says that it should be thrown out, though 'we include it anyway, for the sake of the good story of the seven Maccabean martyrs and their mother'".

**12. Minor: the Orthodox and purgatory (rejected_why "How the Orthodox churches answer"; reliability §4): "The Orthodox pray for the dead, but do not teach purgatory."**
- *Too flat.* Ware's wording, as I recall it, is that "most if not all Orthodox theologians" reject purgatory, "at any rate in this form". That is from memory; check *The Orthodox Church* (1993), the chapter on the dead.
- *What it leaves out.* The Confession of Dositheus (Jerusalem 1672, decree 18), which the same paragraph cites for the canon, speaks of souls who suffer after death and are helped by the church's prayers and the bloodless sacrifice. Catholic writers point to this, and Orthodox writers read it as other than purgatory.
- *Fix:* "Orthodox teachers reject purgatory as the Latin church defined it (Ware), while praying for the dead; the Confession of Dositheus (decree 18) speaks of souls helped by the church's prayers. That question belongs to the chapter 12 page."

**13. Minor: reliability §4, "Differs or may conflict" (a) Razis: "the 66 books tell of suicides (Saul, Ahithophel, Judas) without praise".**
- *The missing case.* The strongest counter-case is left out. Samson's death (Judges 16:28–30) is the one self-chosen death in the 66 that follows an answered prayer, and Hebrews 11:32 lists Samson among the faithful. Augustine discusses Samson in *City of God* 1.21 as a divinely prompted exception. Zimri (1 Kings 16:18) belongs in the list too.
- *Fix:* add "Samson's death (Judges 16:28–30), which Augustine explained as a special divine command (*City of God* 1.21)". The "may conflict" is then fairly weighed.

**14. Minor: reliability §3, the Heliodorus inscription "shows that the Heliodorus of chapter 3 and his interest in the temples are historical".**
- *Heliodorus was known already.* Appian (*Syrian Wars* 45) tells of his murder of Seleucus IV, and Delos inscriptions honor him.
- *The interest in temples is the king's.* The stele shows the *king's* interest in the temples: Seleucus appoints Olympiodoros over the sanctuaries of Coele-Syria and Phoenicia. Heliodorus only passes the order on.
- *The identification is probable, not certain.* Bibleplaces calls him "probably the same person".
- *Fix:* "shows that in 178 BC Seleucus IV, writing through his minister Heliodorus, put the temples of the province, including Jerusalem's, under a royal overseer, which fits the background of chapter 3".

**15. Minor: reliability §2, "How well the text survived".**
- *An early paraphrase exists.* "Josephus did not use the book, so there is no early paraphrase to check it against." But 4 Maccabees (first century AD) retells 6:18–7:42 at length, and the book says so in two other places. *Fix:* "...no early paraphrase, except 4 Maccabees for the martyr chapters".
- *Venetus is not a great codex.* The verdict's "though in only two of the great codices" counts Venetus (700s) as a great codex. The usual phrase means the fourth- and fifth-century uncials (B, ℵ, A, C), of which 2 Maccabees is in A only. *Fix:* "in only one of the great early codices (Alexandrinus) and in the eighth-century Venetus".

**16. Minor: card 2, Catholic row: Calmet "comparing Paul, 'unskilled in speech' (2 Corinthians 11:6)".**
- *Not Haydock's English.* Haydock gives the comparison in Latin only (*imperitus sermone sed non scientia*), so the English in quotation marks is the site's, not Calmet's.
- *Close to RSV and ESV.* "Unskilled in speech" is very close to RSV/ESV ("unskilled in speaking"). 2 Corinthians has no site Plain English Translation yet.
- *Fix:* fresh wording outside Calmet's quotation, e.g. comparing Paul, who admits he is "no trained speaker" (2 Corinthians 11:6).

**17. Minor: sources.json and the commentators' names.**
- `ellicott-matthew`: the Matthew volume of Ellicott's *New Testament Commentary for English Readers* is by **E. H. Plumptre** (from memory). The 1Ma review made the same point about Moulton for Hebrews, and this book already names Moulton. Write "Plumptre, in Ellicott's commentary, explains ...".
- `cambridge-acts`: the Cambridge Bible *Acts* is by **J. Rawson Lumby** (1879–1882; from memory, since biblehub does not print the name). Name him in the key.
- `hanhart-2macc`: correct as written. A 3rd edition (2008) exists, from my memory; add it if confirmed.
- `cotton-worrle-heliodorus`: add the pages, 191–205.
- `leipzig-1519`: see finding 10.

**18. Minor: card 1, Oriental Orthodox row, and accepted_by "Oriental Orthodox churches".**
- *Unsourced.* "Syriac and Armenian ... by long use" rests on nothing that addresses those churches. The keys are a Coptic diocese page and Metzger. Doran lists Syriac, Armenian **and Coptic** translations.
- *Fix:* cite Doran for the versions. Either find a Syriac Orthodox or Armenian source for the books' place in their Bibles, or soften the claim to "the Coptic church (by the diocese page) and, by their ancient translations, the Syriac and Armenian churches". Add "Coptic" to facts "Surviving in" and to provenance "The Latin and other versions".

**19. Minor: pointers to headings that do not exist.**
- sections "2 Maccabees in worship and memory" points to "Why others do not count it as Scripture". `app/app.js` prints rejected_why under **"Why most churches set it aside"**. Fix the pointer.
- For the coordinator: that app heading is wrong for this book, since Catholic and Orthodox Christians are most of the world's Christians. A neutral heading, such as "Why some churches and Judaism do not count it", would suit every tier-2 book.
- rejected_why "The writer's own words" says that card 2 is "the second card under 'Where Christians differ'". The cards are on the book's main page, not on the canon page where the sentence stands. Say "on the book page".

**20. Minor: "creation from nothing" stated as settled in the site's voice (reliability verdict and §1; §4 "Goes beyond" (a); cited_in Hebrews 11:3).**
- *The conflict with the part card.* Part 04-07 has a card that asks exactly this: "Did God create the world out of nothing, or shape it from matter that already existed?" Meanwhile book.json says, in Claude's voice, that the book gives "clear Jewish statements ... of creation from nothing" and that it is "stated more clearly than anywhere in the Hebrew Bible".
- *A smaller point.* cited_in gives the Greek as *ouk ex ontōn*, Swete's order. The Cambridge Bible actually quotes ἐξ οὐκ ὄντων, the other order.
- *Fix:* "the earliest Jewish statement often read as creation from nothing (7:28; whether it means that is asked on the chapter 7 page)", in the verdict, §1 and §4.

**21. Minor: smaller accuracy points.**
- authorship "Traditional view": "using the book's own word for its work (2:26, 28), as Robert Doran notes". Doran's point is that Clement chose the *participle of the verb* (συνταξάμενος) whose root the writer uses in his prologue and epilogue (σύνταξις, 15:38–39). Doran's own passage would have to be checked for which prologue verse he means. Either cite the epilogue (15:38–39, σύνταξις) with the prologue verse Doran gives, or drop "as Doran notes" and keep 2:26, 28 for ἐπιτομή.
- authorship "The letters at the head": Doran says that **Momigliano** and Habicht proposed that the second letter was appended to the first, with Goldstein making a similar suggestion. Add Momigliano.
- rejected_why "It differs from 1 Maccabees": "heavenly riders and angels, of which 1 Maccabees has none". 1 Maccabees 7:41 recalls the angel who struck Sennacherib's army. Say "no heavenly appearances".
- reliability §1: "the oldest account of the feasts of Hanukkah (10:5–8)". 1 Maccabees 4:52–59 is at least as old. Say "with 1 Maccabees 4, the oldest account".
- sections, "In the early church": the martyrs "became the first saints of the church's calendar who died before Christ" is unsourced, and "first" is unclear. Say "the only saints from before Christ with a feast in the general calendar of the West (August 1)", sourced, or drop it.
- The term "Day of Nicanor" (6 times in book.json) against "Nicanor's Day" (4 times in book.json, 12 in the parts). Use one form.
- The site's Hebrews 11:35–36 wording ("had their trial in mockings and whippings, and besides that in chains and prison") keeps the KJV's sentence shape ("had trial of ... mockings and scourgings, yea, moreover of bonds and imprisonment"). It also differs from the 1Ma book.json's paraphrase of the same verse ("tortured and turned down release to win a better resurrection"). Make one fresh rendering for both books until Hebrews has a Plain English Translation.

**22. Minor: reliability §4 (c), Nehemiah, "one later manuscript reads 'managed'".**
- *Correct, but unsourced.* It is Bechtel's Codex 125 (Mosquensis), οἰκονομήσας. Name it and Bechtel: "one later manuscript (Codex 125, as Bechtel reports) reads 'managed'".
- *For part 01-03.* The 1:18 variant does not record this reading. Since book.json relies on it, tell the 01-03 writer.

**23. Minor: overlap with the chapter 12 card (book card 1, Lutheran and Reformed rows; card 2, Reformed row).**
- *The overlap.* Part 12-15's purgatory card already gives Leipzig and 1521 (Lutheran row), and Calvin's "asks pardon ... no oracle of the Holy Spirit" (Reformed row). Book card 1 repeats Leipzig and 1521, and book card 2 builds its Reformed row on the same Calvin sentence.
- *Why it is minor.* The questions differ, so this is not a duplicate card.
- *Fix:* keep Calvin's pardon argument on card 2, the canon question on card 1, and purgatory on the chapter 12 card. Ask the 12-15 writer to cut "whose writer asks pardon for his style, is no oracle of the Holy Spirit" from their Reformed row and point to book card 2 instead.

**24. Minor: unsourced statements of each side (rejected_why).**
- *"Razis and other moral objections".* "Protestant writers also object that the book makes Judas offer a sin offering for men who died in idolatry ..." has no named writer. Calvin, 3.5.8, already a key, calls Judas's offering a mark of superstition and misguided zeal (the 12-15 card says so). Cite him.
- *"How the Catholic Church answers", "On the canon".* "Catholic teachers say the church received the Old Testament in Greek ..." names no teacher. Cite one who makes the argument (for example Akin or Michuta, as used on the 1Ma page), or attribute it to the councils only.

**25. Minor: audience.to and cross-references.**
- *(a) A debated destination stated as settled.* "So the book was meant to bind Jews far from Jerusalem to its Temple and its feasts." The Egyptian address belongs to the letters, which most scholars think were joined to the summary later (authorship, "The letters at the head"). For the summary itself, the Egyptian readership is Momigliano's and Doran's inference.
  - *Fix:* "In its present form, with the letters at its head, the book addresses the Jews of Egypt". Add the evidence for real early readers: 4 Maccabees (first century AD) and Hebrews 11, both Greek-speaking.
- *(b) Back-pointers missing from the 66.* book.json and the parts draw these links, but the 66 books do not point back:
  - **Deuteronomy 32:36** has no pointer to 7:6, where the brothers quote it in the site's own Plain English Translation wording;
  - **2 Kings 19:35 / Isaiah 37:36** have none to 8:19 and 15:22;
  - **Isaiah 14:12–15** has none to chapter 9.

  Matthew 16:14, John 10:22, Esther 9, Nehemiah, 2 Chronicles, Revelation and Genesis 1 already point to 2 Maccabees. Report the missing ones to the owners of Deuteronomy, 2 Kings and Isaiah.

## Fixes applied

All fixes were made in the book writer's generator. book.json was regenerated, and it adds nothing to the build: `VERBOSE=1 node tools/build.js --check 2Ma` gives 0 errors and 0 warnings. The quote check was re-run against the current Plain English Translation of all four parts, and every 2 Maccabees quotation matches. The quotations it does not find are from other sources (Calvin, Luther, Leipzig, Dositheus) or are my own short renderings of Galatians and Acts, which have no site Plain English Translation yet.

**Major findings**

1. **Doran, not Schwartz.** Fixed. Both places now read "Robert Doran finds very little evidence...".
2. **The date of 11:27–33.** Fixed. Habicht is no longer named for the date. The text now says that the letter's own date, Xanthicus 148 (11:33), would fall about March 164 BC, and that Doran thinks that date unlikely and places the letter in early 165 BC.
3. **The Sirach prologue.** Fixed. I checked the prologue against an open text: the Rahlfs Greek has πολλὴν ἀγρυπνίαν καὶ ἐπιστήμην προσενεγκάμενος and συγγνώμην ἔχειν, and the KJV prologue reads the same way. The changes:
   - In "How to read", the voice is now "found elsewhere in the Catholic and Orthodox Old Testament only in the translator's prologue to Sirach".
   - Card 2's Catholic row adds Newman's use of the Ecclesiasticus prologue. I verified this in the excerpt in *World's Best Essays*.
   - Both "The writer's own words" and "On the writer's apology" now give the Catholic parallel.
   - No translation of Sirach is quoted.
4. **Catechism 1032.** Fixed. 1032 is now cited only for prayer for the dead, "which cites 12:45". For 15:12–14 the text says only "Catholic writers have long cited (c) for the saints' intercession", gives no church source, and points to the Revelation 5 card. I found no Catechism paragraph that cites 15:12–14 (956 and 958 do not). I could not open a Bellarmine text, so he is not named.
5. **cited_in.**
   - *Added:* Galatians 1:13–14 at 2:21 (shared tradition). Meyer and Vincent on Galatians 1:13 cite 2:21, 8:1 and 14:38. New keys: `meyer-galatians`, `vincent-galatians`.
   - *Added:* Acts 5:39 at 7:19 (shared tradition). The Expositor's Greek Testament on Acts 5:39 cites θεομαχεῖν at 2 Maccabees 7:19. New key: `egt-acts`.
   - *Folded in:* Hebrews 11:38, into the Hebrews entry, which is now "Hebrews 11:35–38". The Cambridge Bible on 11:38 cites 5:27, 6:11 and 10:6, and JFB cites 5:27. Keys added: `cambridge-bible-hebrews` and `jfb-commentary`.
   - *Dropped:* Revelation 11:19, Romans 4:17 and 1 Corinthians 15:29. None of the commentaries on biblehub that I checked cites 2 Maccabees at these verses. They stay in the part notes, and reliability §4 still compares Romans 4:17.

**Minor findings**

6. Fixed: the list is now (2:21; 3:24; 5:4; 12:22; 14:15). The Venetus-only reading at 15:27 is dropped.
7. Fixed: "never names Judas's father, Mattathias".
8. Fixed. The text now quotes the Plain English Translation, "the six thousand destroyed a hundred and twenty thousand", and notes that the verse has just said 8,000 Jews fought with 4,000 Macedonians.
9. Fixed in all three places. Calvin "said he would not stoop to answer", then argued that Judas is praised only for his hope of the resurrection. The rejected_why passage quotes his sentence verbatim.
10. Fixed:
    - "only" is added, citing the English rendering.
    - Luther's concession is given ("I know the Church receives this book"; two senses of "canon").
    - Eck's Vulgate maxim and his "not in the canon among the Hebrews" are marked as reported.
    - The `leipzig-1519` key now cites WA 59:433–605 (the exchange cited at 59:527), lists WA 2:324 only as "also cited", and adds the Substack translation.
11. Fixed in both places: "should be thrown out, though 'we include it anyway, for the sake of the good story of the seven Maccabean martyrs and their mother'".
12. Fixed. The Orthodox, the text now says, "generally reject purgatory as the Latin church defined it". Decree 18 of Dositheus is quoted, from the English text at crivoice.org (checked), on souls who "depart into Hades" and are delivered "through the prayers of the Priests...". The text adds that Catholic writers point to this and Orthodox writers read it otherwise. New key: `dositheus-decree18`. In §4 I could not check Ware's own wording, so he is not quoted or named for it.
13. Fixed: Zimri (1 Kings 16:18) and Samson (Judges 16:28–30; Hebrews 11:32) are added. Augustine's *City of God* 1.21 is not cited, because I could not check it against an open text.
14. Fixed. The text now names Maresha and 178 BC, and says that Seleucus IV, writing through his minister Heliodorus ("probably the man of chapter 3"), put the temples of Coele-Syria and Phoenicia under Olympiodoros, which fits the background of chapter 3. The key gets pp. 191–205.
15. Fixed: "except 4 Maccabees ... for the martyr chapters". The verdict now reads "in only one of the great early codices (Alexandrinus) and in the eighth-century Venetus".
16. Fixed: Paul is now one "who admits he is no trained speaker (2 Corinthians 11:6)", outside the quotation marks.
17. Partly done:
    - `cambridge-acts` now names J. Rawson Lumby, confirmed by a listing for the CBSC volume on biblicalstudies.org.uk.
    - `cotton-worrle-heliodorus` gets its pages.
    - *Not done:* `ellicott-matthew` still names no author. I could not confirm Plumptre against an open text. The Hanhart 3rd edition (2008) could not be confirmed either and is not added.
18. Fixed. The text now speaks of the Coptic church (by the diocese page) and of the Syriac and Armenian churches by their ancient translations (Doran). `doran-2macc` is added to both rows. Coptic is added to facts, provenance and §2.
19. Fixed:
    - The pointer is now "Why most churches set it aside" on the canon page.
    - The card 2 pointer says "on the book page".
    - The neutral heading for the app is left to the coordinator, since app.js is not mine.
20. Fixed in the verdict, §1, §4 (a), cited_in Hebrews 11:3 and the early-church paragraph. Each now says "often read as creation from nothing", and the verdict, §1, §4 and Hebrews 11:3 add "whether it means that is asked on the chapter 7 page". The Greek is now ἐξ οὐκ ὄντων, the Cambridge order.
21. Fixed:
    - **Clement:** only the phrase is credited to Doran, and "epitome" is given as the book's word (2:26, 28).
    - **The letters:** Momigliano is added.
    - **1 Maccabees:** it "tells of no heavenly appearances", and the text notes that it recalls Sennacherib's angel (1 Maccabees 7:41).
    - **Hanukkah:** now "with 1 Maccabees 4 and 7, the oldest account".
    - **"First saints":** the claim is dropped. The text now says the martyrs were "honored as martyrs, with a feast on August 1".
    - **The feast's name:** it is "Nicanor's Day" throughout.
    - **Hebrews 11:35–36:** the verses are now paraphrased in fresh words, close to the 1 Maccabees page, with no quotation marks.
22. Fixed: "(Codex 125, as Bechtel reports)". I am asking the coordinator to tell part 01-03.
23. Card 2 is unchanged, as finding 23 itself recommends. The suggestion to the 12-15 writer goes through the coordinator.
24. Fixed. Calvin is now cited for the sin-offering objection ("misguided zeal"). "On the canon" is attributed to the councils.
25. (a) Fixed. The text now says the book "in its present form, with the letters at its head," addresses the Jews of Egypt, that whether the summary itself was written for them is inferred (Momigliano, Doran), and that 4 Maccabees and Hebrews were its first known Greek-speaking readers. (b) The back-pointers (Deuteronomy 32:36 to 7:6; 2 Kings 19:35 and Isaiah 37:36 to 8:19 and 15:22; Isaiah 14:12–15 to chapter 9) go to the coordinator for the owners of those books.

**Coordinator's later changes, also applied.** The pointer to the 12-15 card now uses that card's final q, with "to free them from the sin" (12:45) and the Psalm 130 note. The goddess is "Nanea" throughout. John 10:22 is quoted in the site's wording, "The Festival of Dedication".
