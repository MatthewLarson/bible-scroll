# Hostile review: Psalms of Solomon book-level files

Reviewed: `content/books/PsS/book.json` (all of it, including the `canon` block), `content/books/PsS/sources.json`, `tools/PsS-numbers.tsv`, `content/proposals/works/topics/pompey.json`, and the PsS section of `content/proposals/works/build.md`. Tier `other`; brief `tools/brief-pss.md`; model `content/books/3Ma/review-book.md`.

`cd bible && node tools/build.js --check PsS` gives 0 errors, 0 warnings (349 verses, 259 notes, 41 variants). Every source key resolves. `works.json` names the book correctly ("Psalms of Solomon", tier `other`, book `PsS`).

## What I opened in this session

- Swete, *Introduction* (1914) pp. 201-209, 282-284, and Swete's *Old Testament in Greek* vol. III front matter (the writer's `.cache` copies of the archive.org text).
- Gray in APOT 2 (the introduction §5 and the notes on Psalms 1 and 2).
- Ryle and James (1891), pp. xxi-xxv and xc-xcii.
- NETS "To the Reader" (ccat PDF text).
- Toy in the Jewish Encyclopedia (fetched now).
- Reid in the Catholic Encyclopedia (fetched now).
- Jongkind's page and the Junkermann abstract (the writer's cached copies in `.cache/dl/wiki-pss/`; the Internet Archive URLs in sources.json refused my fetch).
- Kirby's page of quotations (fetched now).
- Josephus, *Antiquities* (Whiston), from the writer's cache.
- OCA, Article VI, Westminster 1.3 and the EOTC list (cached).
- Rahlfs's digital text (cached), for the numbers table.
- A web search for the NETS translator.

Where I could not open something, I say so.

## Verdict

This is careful, honest work. Nothing is invented. Every quotation of Swete, Gray, Ryle and James, NETS, Toy, Reid, Jongkind, Kirby's three scholars and the church texts that I checked is real and sits where it is cited.

Specific checks that passed:
- Every quotation of the Plain English Translation of the 66 books matches the current text.
- The Psalms of Solomon verses cited in the lead, sections and `cited_in` say what is claimed, with the exceptions below.
- The reliability analysis is labeled "Claude's analysis, not a church's judgment" and ranks no church.
- Kenneth Atkinson is the right name for the NETS translator. A search confirms that the NETS table of contents and electronic edition give "Psalms of Salomon, tr. Kenneth Atkinson". The NETS text itself carries no byline in the copy I opened, but the key and "reading" entry are right.
- The numbers table is sound (finding 15).
- The list of other books' references is complete against a fresh grep (finding 15).

The weak points:
- The Essene and "unnamed group" views rest on a web-page aside and an undergraduate abstract.
- The Codex Alexandrinus claim states as fact what Swete says conditionally.
- The "why it was rejected" section contains an unsourced inference and a claim ("never thought to be Solomon's in any serious way") that its own other sections contradict.
- One `cited_in` link rests on a wrong anchor.
- One reliability point cites the wrong verse.
- The Oriental Orthodox and Ethiopian row is thin.

Findings: **0 critical, 6 major, 12 minor.**

## Findings

### Major

**1. Major: the Essene view and the "unnamed group" view have no scholarly holder, and the sources behind them are inadequate (authorship rows "Since the Dead Sea Scrolls" and "A devout group we cannot name"; audience.views "A wider devout circle"; sections "The devout and the sinners"; sources `jongkind-pss-notes`, `junkermann-pss-abstract`).**
- *Jongkind.* I read the page. The whole basis is one aside: "since the discovery of the Qumran documents this identification with the Pharisees is seen as less secure as it can be any conservative religious (Essene) group." Jongkind names no one who holds an Essene origin. He does not hold it himself; he calls the Pharisee reading "less secure."
- *Junkermann.* The page itself says "[Penelope Junkermann is a third-year undergraduate in the M.Theol. Honours programme ... --JRD]". The book calls it "A study on the University of St Andrews pseudepigrapha pages" and pairs her with Jongkind as "Jongkind and Junkermann" in audience.views. A reader is never told it is an undergraduate paper. (The sources.json key does say "undergraduate paper", but that never reaches the page.) It is not an adequate source for a scholarly position.
- *The consequence.* The brief asked for the Essene or Qumran view and the "unaligned devout group" view "with their strongest evidence and who holds it". The book gives neither a named holder and no evidence beyond "the Scrolls showed another strict party". It cites no Qumran text.
- *Missing authorities, all unopened.* A web search (snippets only) suggests the standard recent treatments are:
  - R. B. Wright in Charlesworth's OTP 2, whom the search ties to the term "Hasidim" for "the righteous";
  - Atkinson's own book *I Cried to the Lord* (Brill, 2001), a study of the psalms' social setting;
  - Winninge, *Sinners and the Righteous* (1995);
  - Charlesworth's remark that the Pharisee identification is circular;
  - the point that no copy of the psalms was found at Qumran.
  I could not open any of these, so I do not say what they conclude. A search also turned up the "no copies at Qumran" argument against an Essene origin, which the book omits. Atkinson is cited about 20 times in book.json, yet his own view of who wrote the psalms is never stated.
- *Fix:*
  - Open Wright's introduction (OTP 2) and Atkinson 2001, and state each view with its named holders. Do not use "Essene" unless someone in a source actually holds it.
  - Label Junkermann "an undergraduate paper" or drop her.
  - Remove "Jongkind and Junkermann" as holders in audience.views.
  - Add the Qumran-absence argument and the circularity objection if they are confirmed in an opened source.
  - Say plainly that only the Pharisee view has named, published advocates in the sources opened.

**2. Major: Codex Alexandrinus is stated as having contained the pages, where Swete is conditional and the book later says "not in any uncial MS" (lead; facts "Scripture for"; sections "The manuscripts"; canon.provenance "Kept by Christians"; rejected_why "It stood only at the edge of the Greek Bible").**
- *The book says* that "the pages themselves are lost" (lead) and "The leaves that held it are lost along with the end of 2 Clement" (manuscripts).
- *Swete, Introduction, p. 282:* "If the Codex itself contained these Psalms, they have perished together with a portion of Ps. Clem. ad Cor. II." That is a conditional. Gray says only that the catalogue lists it "after the final summary". Jongkind says the text "is missing from the codex."
- *The same book.json (rejected_why)* quotes Swete's other sentence: "though not actually included in any uncial MS." The page therefore asserts both "the leaves are lost" and "not in any uncial MS."
- *The splice.* The rejected_why quotation joins two things Swete says in his volume III preface. "have some peculiar claims to a place at the close of the Alexandrian Bible" is said of "three collections" together (the Psalms of Solomon, Enoch and a third), and he writes "if they cannot in strictness be said to belong to the Greek Old Testament". "Not actually included in any uncial MS" is said of the Psalms of Solomon alone, followed by "at one time followed the New Testament in the Codex Alexandrinus". The "peculiar claims" half cannot be pinned on this one book without saying so.
- *Fix:*
  - Say that the table of contents lists the Psalms of Solomon after the closing total.
  - Say "if the codex held them, the leaves are gone with the end of 2 Clement (Swete)".
  - Say that Swete's volume III preface treats them as "at one time" following the New Testament in the codex.
  - Reconcile the two statements, and attribute the "peculiar claims" sentence to Swete's "three collections".

**3. Major: "Its name is not its origin" overstates and contradicts the book's own sections, and ends in an unsourced inference about why the churches rejected it (canon.rejected_why, h "Its name is not its origin"; also lead and facts "Scripture for").**
- *Overstatement.* The text says "The book was never thought to be Solomon's in any serious way." The same book.json shows:
  - three manuscripts title it "Wisdom of Solomon" (Jongkind);
  - Alexandrinus and the lists title it "Psalms of Solomon";
  - Zonaras and Balsamon connect it with psalms "said to be Solomon's" (the Greek is "λεγόμενοι τοῦ Σολομῶντος", R&J p. xxiv);
  - Toy says "It is uncertain when and why the psalms were ascribed to Solomon."
  Reid's sentence "makes no pretensions to authorship by Solomon" is quoted, but Reid continues "and therefore is not, strictly speaking, apocryphal." That half undercuts the "rejected" framing and is omitted.
- *Unsourced inference.* "A book that came late, from one party, and with a borrowed name had little claim on the churches when they fixed their lists." No source opened says why any church omitted the book. This is the writer's reasoning, presented as the churches'.
- *Related.* The lead says "the Jewish community did not keep them". The evidence opened is silence: R&J's list of references is Christian, and Toy's "not contained in the Septuagint". That should be worded as "no Jewish source names the book" with R&J cited. Toy's "(and therefore not included in the Apocrypha)" is also questionable on the site's own evidence (Swete: stood in Alexandrinus's catalogue; Rahlfs prints it). It is quoted in the Judaism row without comment.
- *Fix:*
  - Say that some scribes did attach Solomon's name, and why (Atkinson; Toy).
  - Quote Reid fully.
  - Delete or source the last sentence of the section.
  - Reword the Jewish-silence claim.
  - Add a clause on Toy's wording.

**4. Major: the Galatians 2:15 `cited_in` entry rests on a wrong anchor and an unsupported attribution (canon.cited_in, "Galatians 2:15", at "1:1"; sections "The devout and the sinners": "The nations too are 'sinners' (2:1–2)").**
- *The claim.* The Gentile conqueror and the nations are "'sinners' as such (1:1; 2:1–2), as Gray notes."
- *The text.* In the Plain English Translation, 1:1 reads "to God when sinners attacked", and 1:4-8 describe those sinners as Jerusalem's own people: 1:7-8, "their sins were in secret ... beyond those of the nations". Gray's note on Psalm 1 says nothing about Gentiles. His note on 2:1 says "the sinner" may refer to Pompey or the Roman army. 2:2 calls the troops "foreign nations" (ἔθνη), not sinners. So "the nations ... are 'sinners' (2:1-2)" holds only for the singular "the sinner" of 2:1.
- *Better anchors.* 17:24-27 ("the nations that trample it", "law-breaking nations") and 17:25-26 ("drive the sinners out") set the nations and sinners side by side. Gray's attribution should be limited to 2:1.
- *Fix:* anchor at 2:1 (Gray's note) and 17:27 and state it in those terms, or drop the Galatians link. Remove "(1:1; ...)" and "as Gray notes" for 1:1. Fix the sentence in the section.

**5. Major: the reliability analysis cites the wrong verse, and its "tension with Romans 3:10" claim is overstated (canon.reliability §4, "Stands in tension").**
- *The claim.* "The book divides people ... so sharply that the devout seem to need mercy only for sins of ignorance (3:8–9; 13:10); Paul's 'No one is righteous' ... cuts against that line."
- *The text.*
  - 13:10 is about sinners: "sinners will be carried off to destruction".
  - 13:9 says the Lord "will spare his devout ones / and wipe out their offenses by discipline".
  - 3:5 says "The righteous person stumbled ... He fell."
  - 13:11 says "the mercy of the Lord is on the devout".
  - 9:13-15 (mercy for those who confess) is in the book's own outline.
  The devout in this book do sin and do need correction and mercy.
- *Why it matters.* The point is a fair comparison with the 66 books, but it is drawn from a misreading and one wrong citation.
- *Fix:* cite 3:5, 3:8-9, 13:9 and 13:11, and revise the sentence. A fair statement is that the devout are called righteous but are disciplined and forgiven for stumbling, with Romans 3:10 and Psalm 143:2 as the comparison. The brief's covenantal-nomism material (Sanders and critics) is absent from the book-level analysis; add it only from an opened source or say it is dealt with in the 9:7 note.

**6. Major: the church rows for Oriental Orthodox (including Ethiopian) and Eastern Orthodox are thinner than the brief and the sources allow (canon.accepted_by).**
- *The brief* asked for `accepted_by` rows for every church family: Eastern Orthodox, Oriental Orthodox, Ethiopian, Catholic, Anglican, Protestant, and Judaism. There is no separate Ethiopian row. The "Oriental Orthodox" row is the only place.
- *The evidence.* The whole Oriental Orthodox row rests on the Ethiopian list of 46 books. Coptic, Armenian, Syriac Orthodox and Malankara sources are not opened, though the same row discusses a Syriac version. "None of the church lists checked for this page counts the book as Scripture" is the weakest wording in the file. It is a hedge in all but name, and it follows a flat "Not in the Old Testament."
- *Eastern Orthodox.* The row rests on one OCA Q&A (which names no Psalms of Solomon) and Nicephorus. The 3 Maccabees review documents that the Orthodox Study Bible says the Orthodox Church "has never officially committed itself to a single text and list of Old Testament books." The row should say what an Orthodox source says about its own list, not what the OCA omits.
- *Fix:*
  - Split the Ethiopian church out, quoting its list.
  - Narrow the Oriental Orthodox row to what is shown ("the Ethiopian list of 46 books does not include it"). Add Coptic or Armenian sources only if opened.
  - Add the OSB sentence to the Orthodox row, as the 3 Maccabees fix did.
  - Remove "none of the church lists checked".

### Minor

**7. Minor: "Psalm 2 ends with" the dragon's death (lead; pompey.json lead and section "The dragon on the shore of Egypt").**
- Psalm 2 has 41 verses. The death is at 2:29-31, and 2:32-41 give the praise of the just Judge and the call to the rulers (the book's own outline: "the dragon's death in Egypt, the just Judge praised", and the spec box, which says Psalm 2 "ends ... by turning to the rulers"). The three statements contradict one another.
- *Fix:* "Psalm 2 climaxes with" or "includes".

**8. Minor: "Odes of Solomon" is named six times in book.json but is not in `content/works.json` or the proposals (facts, sections "The manuscripts", canon.provenance, links).**
- Writings outside the 66 are named as in works.json, and an unlisted name is not tier-marked.
- *Fix:* add `odes-of-solomon` (tier `other`) to `content/proposals/works/works.json`. Check whether the lead already carries it.

**9. Minor: the Magnificat parallels are credited to Swete, but they are Ryle and James's (canon.cited_in "Luke 1:46–55" at "10:7"; sections "The book and the New Testament").**
- Swete (*Intro*, p. 283) writes "there are interesting coincidences between the Greek phraseology of the Psalter and that of the Magnificat and other Lucan canticles" and footnotes "Ryle and James, p. xc ff."
- The list in the book ("mercy on the poor and the lowly, the proud scattered, Israel his servant remembered") is not Swete's. It is the writer's summary of R&J's table (pp. xci-xcii), whose own matches include 5:10-12, 10:7, 4:26/16:8, 2:35/17:8.
- *Fix:* "Swete, citing Ryle and James (pp. xc-xcii), notes ..." and take the specific matches from the R&J table.

**10. Minor: the Mark 12:35-37 entry states a Christian reading and a contested authorship as fact (canon.cited_in).**
- "among devout teachers of the law a century earlier" presupposes Pharisee or scribal authorship, which the authorship rows present as contested. "Jesus' answer from Psalm 110 points beyond a son of David who is only a man" is a Christian reading in the site's own voice. Toy and Reid are cited only for "merely human".
- *Fix:* "among devout Jews about 90 years earlier", and "Christians read Jesus' answer as pointing beyond ... (Mark 12:36-37)".

**11. Minor: an unsourced universal claim about every church (canon.reliability §4 "Christian readings"; lens C; how_to_read).**
- "Christians of every church read the psalm's son of David as a witness to the hope Jesus fulfilled" cites no church source. The brief wants Christian readings sourced.
- *Fix:* source it to a catechism or named theologian, or say "many Christians".

**12. Minor: manuscript dates and counts are not consistent with the sources (facts "Base text"; sections "The manuscripts"; canon.reliability §2 and provenance).**
- Swete gives r as 12th century and h as 11th. Gray's table gives R "11-12" and H "10-11". NETS dates manuscript 253 (Swete's r) "XI/XII". "None older than the 11th century" conflicts with Gray's "10-11" for H.
- Reliability §2 says all eleven Greek manuscripts are "late (11th century on)". NETS gives no dates for the three newer manuscripts (655, 659, 3004).
- The Greek translation's date: R&J's own words are "between 40 B.C. and 40 A.D.", with "the last decade of the 1st cent. B.C." as their preference (Introduction, p. xc), not only "before AD 70" (Gray's summary of their later argument). The book's "first century BC or AD, before AD 70" is acceptable but names R&J, Gray and Jongkind together; I could not find Jongkind's "first century AD" wording in the cached page (he gives only the consensus date of the psalms, "the second half of the first century BC"). Check the attribution in the Greek-date rows.
- *Fix:* "about 11th to 12th century (Swete; Gray)". Drop "all late (11th century on)" for the three new copies, or give their dates from Atkinson or Hann.

**13. Minor: "born" for 18:7 disagrees with the site's own translation (canon.cited_in "Luke 2:25–26").**
- The entry says "18:7 blesses those born in the days when God's good things come". The Plain English Translation of 18:7 reads "Happy are those who live in those days!"
- *Fix:* "who live in those days". The Greek is γινόμενοι; if "born" is meant, say so and give the Greek.

**14. Minor: hedges dropped or added against sources (facts "Date"; sections "Pompey and the date").**
- "The Temple still stands, so the book is older than AD 70 (VanderKam)". Kirby's quotation of VanderKam is "it is likely that the Psalms of Solomon were written before 70 CE", and the same passage says the date "cannot be determined precisely". Jongkind gives AD 70 as terminus ad quem. The book's flat "so" is stronger than its source.
- "Josephus, *Antiquities* 14.4" uses Whiston's chapter. The brief gives the standard 14.54-79. Give both.
- The English phrases in quotation marks beside Greek canon-list citations ("disputed and not read in church", "Psalms and Odes of Solomon, 2,100 lines", "private psalms", "said to be Solomon's") are the writer's translations of Greek. They read as quotations of an English source. Mark them as translations. The list of the Sixty Books has no date and no source key; Gray names Anastasius Sinaita (c. 640-700) as the text it is attached to, and Swete's p. 282 passage is the only source.

**15. Minor: the numbers table and build.md (spot-check passes; small precision issues).**
- *Method.* A script took the first and last three Greek words of each of Swete's 346 verses and found them in the digital Rahlfs text. For the Swete verses where both ends were found, the table's modern number matched in every case. The other 74 differ only because Swete and Rahlfs read a word differently at one end. I found no wrong mapping. The headline pairs are confirmed: Swete 17:23 = Rahlfs 17:21, 17:36 = 17:32, 9:7 = 9:4, 3:16 = 3:12, 2:30-31 = 2:26-27, 18:6 and 18:8 = 18:5 and 18:7, 17:42 = 17:37, 17:50 = 17:44.
- *Completeness.* A new grep of `content/` for "Psalms of Solomon N:N" finds 56 references; the table covers all of those outside the proposals' own files, which already use Swete's numbers.
- *Precision.*
  - book.json says "Only Psalms 1 and 16 keep the same numbers as Swete." In the table Swete 16:2 holds Rahlfs 16:1-2, so Psalm 16 differs at one verse. Say "apart from 16:2".
  - "Rahlfs 17:26-28 is Swete 17:28-31" is rounded: Swete 17:31 holds Rahlfs 17:28-29.
  - The build.md row "Luke 18-21 line 1363: 3:12 → 3:13-16" is wider than the table (Swete 3:15-16 = Rahlfs 3:12; Swete 3:13-14 = Rahlfs 3:10-11). That is defensible, since the note concerns the sinner and the righteous together, but say so.

**16. Minor: unused source and reading-list gaps (book.json `sources`, `reading`).**
- `dejonge-outside-ot` is in `sources` but nothing in book.json uses it. de Jonge's quoted lines (Pompey, Hasmoneans) would support the Pompey section; use it or remove it.
- Wright's *Psalms of Solomon: A Critical Edition of the Greek Text* (T&T Clark, 2007) is described in NETS as "forthcoming" but is the standard edition, and it is the likely source for authorship (finding 1). It is not in the reading list. The line "most widely used modern English translation" for Wright's OTP translation is unsourced (Jongkind says "most accessible").

**17. Minor: "clearer than anything in the Hebrew Bible except Daniel 12:2" (canon.reliability §4 "Goes beyond").**
- This leaves out Isaiah 26:19 and other passages that readers debate. It is a comparative claim with no source.
- *Fix:* "goes beyond most of the Hebrew Bible, which speaks of rising only in Daniel 12:2 and, in some readings, Isaiah 26:19".

**18. Minor: pompey.json refs (sections "The dragon on the shore of Egypt").**
- `refs` lists "Jeremiah 51:34", which the text never mentions. The Pompey topic's other claims check against Josephus (rams from Tyre; twelve thousand fell; "made Jerusalem tributary") and Plutarch's death account (a head cut off, a body thrown from the boat, a pyre of an old fishing boat). Tacitus 5:9 is quoted exactly as the site has it.
- *Fix:* explain the Jeremiah link (a dragon image) in the text or drop the ref.

## Verified

- **Canon lists** (Swete, *Introduction*; Gray §5; Ryle and James pp. xxi-xxv):
  - Alexandrinus's catalogue ends with "Ψαλμοὶ Σολομῶντος ιη΄" after the total, and Swete says the book "in the list immediately precedes them" is 2 Clement. This is consistent with the book (see finding 2 for the conditional).
  - The Pseudo-Athanasian *Synopsis* lists "ψαλμοὶ καὶ ᾠδὴ Σολομῶντος" among the antilegomena after the Maccabees and Ptolemaica, before Susanna (Gray). Sixth century is Gray's date; NETS says early sixth.
  - Nicephorus's list has "4. Ψαλμοὶ καὶ ᾠδαὶ Σολομῶντος στίχ. ,βρ΄" (2,100 lines) among those "Ὅσαι ἀντιλέγονται καὶ οὐκ ἐκκλησιάζονται" (Swete p. 208-9).
  - The Sixty Books list has "Ψαλμοὶ Σολομῶντος" between the Assumption of Moses and the Apocalypse of Elijah.
  - Laodicea 59 is "may be directed against" the book (Gray); Swete says the absence from the other uncials "may be due to" it; Zonaras and Balsamon are in R&J p. xxiv.
  - R&J's "solitary instance of an Old Testament book, which from being merely ἀντιλεγόμενον became ἀπόκρυφον" is exact.
- **Reid, Catholic Encyclopedia:** "composed in Hebrew", "as is commonly agreed, by a Pharisee of Palestine", "about the time of Pompey's capture of Jerusalem", "merely human", and the Pharisee sentence are exact.
- **Toy:** the Pharisee author, "perhaps a clerical error", the date "45 B.C." and "70-40", the Solomon passage and the Hebrew sentence are supported. He does not name Frankenberg; the book credits that to Gray, correctly (Gray: Frankenberg "is compelled, not very satisfactorily, to treat the description of the death ... as unrealized prophecy").
- **Gray quotations** ("now generally admitted", "single generation", "strongly partisan work", "in their entirety") are exact.
- **NETS:**
  - five Syriac manuscripts, none complete, differing in 62 verses (about 10%);
  - Baars 1972;
  - three new Greek manuscripts, eleven in all, and Hann 1982;
  - manuscript 253 as "the best and earliest";
  - the title from "son of David" in 17:21;
  - Rahlfs adopting Carrière's χριστὸς κυρίου, and a later Christian scribe;
  - "There is no standard versification ... follows Rahlfs' numbering".
- **Swete's base text:** the first edition came from Klostermann's 1893 collation of Romanus, and the present edition uses corrections and "a few of the conjectural emendations" from Gebhardt. The book's wording is fair.
- **Kirby's quotations:** Schürer, VanderKam and de Jonge are exact (see finding 14 for VanderKam's hedge).
- **Church lists:** Article VI's "other Books" list does not contain the book; Westminster 1.3 is exact; the OCA's list does not name it.
- **Authorship and Pompey in Josephus (Whiston):** battering rams from Tyre, "of the Jews there fell twelve thousand", the entry into the Temple, and "made Jerusalem tributary to the Romans".
- **Headings:** 16 headings have τῷ Σαλωμών (or Σαλωμὼν) and 4:0 has τοῦ Σαλωμών, as stated. 17:0 has "τῷ βασιλεῖ". 18:0 and 18:8 have χριστοῦ κυρίου.
- **The spec boxes:** 2:36 does begin "καὶ νῦν". The Plain English Translations of Psalm 2:10, 1 Maccabees 14:4, 14:12 and 14:41 match the quotations.
- **NT quotations** (Luke 1:32-33, 2:26, Acts 1:6, Galatians 2:15, Revelation 7:3 and 19:15, 2 Thessalonians 2:8, Romans 3:10, Daniel 12:2) match the current Plain English Translation.

I could not open the following: Jongkind and Junkermann on the Internet Archive (cached copies read instead), Wright's OTP introduction and Atkinson's 2001 book, Harris on Sinaiticus beyond Swete's footnote, and the Syriac manuscripts. I make no claim about them.

## Fixes applied

1. Fixed (lead decision 1). Opened this session: Unha Chai, "The Identification of 'the Righteous' in the Psalms of Solomon," Journal of Biblical Text Research 29 (2011) (new key `chai-righteous-pss2011`), and the Orion record of Atkinson's 1998 JSP article "... Sitz im Leben of an Unknown Jewish Sect" (new key `atkinson-redating-jsp1998`). Every view now names its holders: Pharisees (Ryle and James, Gray, Swete, Toy, Reid; Chai's "still ... most commonly identified" and his two objections); Essenes (Dupont-Sommer, with Franklyn and Hann's links to the Scrolls, via Chai), so the Essene row is kept; an unnamed group (O'Dell and Charlesworth via Chai; Atkinson's article title; Chai's conclusion quoted); Hasidim (Büchler, Flusser) and Zadokite priests (Kim), via Chai. Junkermann dropped from book.json, audience.views and sources.json. Wright's OTP introduction and Atkinson's 2001/2004 book could not be opened (no free text found; the only OTP 2 copy on archive.org is a pirated upload, not used; Google Books quota exhausted), so nothing is said of Wright's view. The Qumran-absence argument and Charlesworth's "circular" remark appeared only in a blog paraphrase, so they are not added.
2. Fixed (lead decision 2). Lead, facts, canon summary, lens C and the manuscripts section now say the table of contents lists the book after the total; Swete's own sentence is quoted ("If the Codex itself contained these Psalms, they have perished together with a portion" of 2 Clement), with his vol. 3 preface ("at one time followed the New Testament", "not actually included in any uncial MS.") and Jongkind's "missing from the codex". The "peculiar claims" sentence is now attributed to Swete's "three collections" (with Enoch and the Odes), and his Introduction's "a partial exception" is added.
3. Fixed (lead decision 3). "Its name is not its origin" is now "Its name came later": the overstatement is gone; Atkinson's "ascribes the collection to King Salomon", the "Wisdom of Solomon" titles, the canonists' "said to be Solomon's", Reid quoted in full (including "therefore is not, strictly speaking, apocryphal" and "the name ... became associated with it later") and Toy's "uncertain when and why". The closing inference is deleted. The Jewish-silence claim is reworded (lead, rejected_why) as "no Jewish source names the book" (Ryle and James; Jongkind's "only within Christian transmission"). Toy's Septuagint clause in the Judaism row now has a clause on Alexandrinus and the Swete and Rahlfs editions. The traditional-view row's unsourced "No ancient writer is known to have defended Solomon" is replaced by Atkinson, Reid and Jongkind.
4. Partly accepted. Gray's introduction (APOT 2, p. 630) does say "alien nations are as such 'sinners' (i. 1, ii. 1 f., 24 ff.)", so the attribution to Gray is right for 1:1 and 2:1-2; the reviewer read only his notes. The Galatians 2:15 entry is re-anchored at 2:1, quotes Gray exactly with his references, and adds "the sinner" of 2:1 and 17:26-27 ("drive the sinners out of the inheritance", "destroy law-breaking nations"); the section sentence is rewritten the same way.
5. Fixed. "Stands in tension" now cites 3:5, 3:8-9, 13:9 and 13:11 (the righteous stumble, are disciplined and spared by mercy), compares Romans 3:10 and Psalm 143:2 (both quoted from the current Plain English Translation), and points to the notes at 9:7 and 9:9; the wrong 13:10 citation is gone. No covenantal-nomism material added (no source opened for it).
6. Partly accepted. The "Oriental Orthodox" row is split into "Ethiopian and Eritrean Orthodox Tewahedo churches" (the 46-book list, which has Enoch, Jubilees and the Psalms but not this book, reread in the cached EOTC page) and "Syriac churches" (NETS on the five Syriac copies; Jongkind on the 7th-century fragment; Gray and Jongkind on the Odes), with "This page has no statement from the Syriac churches themselves", as in the 3 Maccabees model; "none of the church lists checked" removed. Declined: the Orthodox Study Bible sentence, because I could not open the OSB this session (searches found no copy) and STYLE rule 2 forbids taking it from the 3 Maccabees page; the Eastern Orthodox row stays on the OCA page (reread) and Nicephorus. No Coptic or Armenian row (no source opened).
7. Fixed. "ends with" is now "reaches its climax with" in the lead and in pompey.json.
8. Fixed. `odes-of-solomon` (tier `other`) added to content/proposals/works/works.json, with a note from Gray and Jongkind; it was not in works.json or any proposal.
9. Fixed. The Luke 1:46-55 entry and the NT section now say Swete pointed to Ryle and James; the matches are taken from R&J's table (pp. xci-xcii, opened) and checked against Swete's text: Luke 1:50 with 13:11; 1:52 with 2:35 and 17:8; 1:53 with 5:10-12 and 10:7; 1:54 with 12:7. "Best explained as a shared language of piety" is reduced to "no borrowing is claimed". `ryle-james-pss1891` now names pp. xc-xcii.
10. Fixed. Mark 12:35-37 now says "devout Jews two or three generations earlier", keeps Toy and Reid for "merely human", and states the reading of Psalm 110 as what Christians read (Mark 12:36-37).
11. Fixed. Reliability "Christian readings" now reads "read from the New Testament ..." (Mark 12:35-37; Romans 1:3-4); lens C says "as a Christian reader can today"; how_to_read drops "and never were".
12. Fixed. Manuscript dates now run "from the 11th century (h, v) to 1419 (p)" in Swete, with Gray's 10th-11th for H, and r as Swete's 12th or Gray's and NETS's 11th-12th; reliability §2 and provenance no longer say "all late (11th century on)" of all eleven. The Greek-date rows now give R&J's own words ("between 40 B.C. and 40 A.D.", most likely the last decade BC), Gray's summary (before AD 70) and Jongkind. Jongkind's "most often placed in the first-century AD" is in the cached page (the reviewer missed it), so his attribution stays, now alone, in audience.to.
13. Fixed. Luke 2:25-26 now quotes 18:7 as the Plain English Translation has it ("Happy are those who live in those days!"). Swete's Greek is γενόμενοι (not γινόμενοι); build.md's "born" remark corrected to match.
14. Fixed. VanderKam's "likely" and "cannot be determined precisely" restored (facts and Pompey section), with Jongkind's AD 70 terminus. Antiquities 14.4 now also gives sections 14.54-79 (checked on lexundria's Whiston: 14.54 begins the march on Jerusalem, 14.79 ends with Aristobulus taken to Rome), in book.json and pompey.json. The Greek canon-list phrases are no longer in English quotation marks: the Greek is given in italics with an unquoted gloss. The Sixty Books are tied to Anastasius Sinaita (c. 640-700) from Gray, and `swete-intro-pss` now names p. 281 for the list.
15. Fixed. "apart from 16:2" added (facts and numbering section); "whose last verse runs on into Rahlfs 17:29" added; the build.md Luke 18-21 row now explains why Swete 3:13-16 is given for Rahlfs 3:12. The numbers table needed no change.
16. Fixed. `dejonge-outside-ot` is now used (Pompey section and pompey.json, his sentence on Pompey's death). The OTP line now says Jongkind's "the most accessible". Added to the reading list: Wright's critical edition (2007; title and year checked on the Logos product page), Atkinson's I Cried to the Lord (Brill, 2004; checked on UNI ScholarWorks) and Chai (2011).
17. Fixed. "Goes beyond" now says "goes beyond most of the Hebrew Bible", with Daniel 12:2 and Isaiah 26:19 ("Your dead will live!") and the two readings of Isaiah 26:19 as the site's own note there gives them.
18. Fixed. pompey.json now explains Jeremiah 51:34: Gray compared it for the word "dragon" (APOT 2, note on 2:29, opened), quoting the site's Jeremiah 51:34 and noting the Greek δράκων.

Also: "scholars of every church value it as history" (rejected_why, unsourced) removed. For the lead: book.json now quotes PsS 2:1 ("the sinner"), 13:11, 17:26, 17:27 and 18:7 from the parts' current plain.txt; recheck them after the part fixes. `swete-vol3-pss` (in parts/01-08 sources.json, not my file) cites pp. xvi-xvii; the "three collections" sentence is in the vol. 3 preface, so that key's page range may need widening.
