# Hostile review: 1 Esdras book-level files (book.json, sources.json) and the topic's numbering sentence

Reviewed: `content/books/1Es/book.json` (title through reading, and the whole `canon` block: summary, 8 accepted_by rows, provenance, rejected_why, 9 cited_in rows, the four-part reliability analysis, how_to_read), `content/books/1Es/sources.json` (7 keys), and the numbering sentence in `content/topics/first-esdras.json`. Model: `content/books/2Ma/review-book.md`.

Checked against:
- the Greek in `texts/orig/1Es.json` (Swete) and the KJV lines in `texts/en/1Es.json`, which are tagged with the KJV's own numbers;
- the three parts' current `plain.txt` (Swete numbering). A script pulled every quoted string out of book.json and looked for it in those files. Every 1 Esdras quotation matches except one (finding 7). The quotations from 2 Chronicles 35:22, Ezra 4:24, Nehemiah 8:9 and 8:13 and John 14:6 match the current Plain of those books;
- Ezra's `traditions` card (`content/books/Ezr/book.json`, top `first-esdras`) and Ezra's own note on verse numbers;
- `content/works.json` (`1-esdras` is "1 Esdras", aka 3 Esdras, Esdras A, Greek Ezra; `4-ezra` is the apocalypse; the book never uses "2 Esdras" for the apocalypse in its own voice) and the shared source keys.

`VERBOSE=1 node tools/build.js --check 1Es` gives **0 errors and 0 warnings** (431 verses, 246 notes, 54 variants, 151 glosses, 9 chapter pages, 36 topic contributions). There are no em-dashes in book.json. In the site's own voice the book is never called Scripture without saying for whom. The churches are not ranked. The reliability analysis is labeled and keeps its four parts.

## Verdict

This is careful work, and the checkable core is sound. All the church and early-writer claims I could open check out: Cyprian, Origen via Eusebius, Athanasius's "Ezra, the first and second are similarly one book", Jerome's preface to Ezra, the Clementine preface (the Latin sentence on 3 and 4 Esdras is verbatim), Swete, Torrey, Josephus, Mihăilă's abstract and Philaret's list. The weak points are these:
- **The Orthodox row is the book's soft spot.** It rests on one Romanian scholar's abstract, on a Russian catechism that does not name the book, and on Athanasius, whose "appointed to be read" list does not name it either. By the book's own reading of Athanasius it counts the book inside the 22, not below them. The facts and the O lens say "Greek and Russian Orthodox teachers" rank it as read-not-canonical, and no Greek teacher is cited. That framing also disagrees with Ezra's card.
- **Ezra's card and book.json disagree** in the Orthodox answer and in the Catholic reason for the 1592 appendix.
- **Three plain factual slips:** "nine-tenths" of the book is retelling (the guards' story alone is about a fifth); Ezra's reading of the law is dated to "the seventh year"; and the topic's numbering example gives the wrong verses.
- **Luther's Aesop sentence** was read in a blog and is cited to a page of Luther's Works. I could not open any text with it. It is also made to stand for "Lutheran churches".

The rest is precision: one quotation that is not the Plain's wording, three verse citations, a hedge, an absolute about the rabbis, and gaps in cited_in.

Findings: **0 critical, 6 major, 14 minor.**

## Verified (opened in this session)

- **Cyprian**, Letter 73 to Pompey, 9 (newadvent, ANF): "knowing that in Esdras also the truth conquers, as it is written:" then "Truth endures and grows strong to eternity, and lives and prevails for ever and ever." This matches 4:38 of the Greek (μένει καὶ ἰσχύει ... ζῇ καὶ κρατεῖ). The page gives no date. For the numbering, see finding 12.
- **Augustine**, City of God 18.36: Esdras "historical rather than prophetical"; may be taken as "prophesying of Christ" in the story of the three young men; the third "demonstrated that the truth is victorious over all"; "by consulting the Gospel we learn that Christ is the Truth." All as quoted. Augustine does not say here whether the book is canonical.
- **Eusebius**, Church History 6.25, Origen's list: "Esdras, First and Second in one, Ezra". Correct.
- **Athanasius**, Festal Letter 39: "Again Ezra, the first and second are similarly one book." Correct. His second list, "not indeed included in the Canon, but appointed by the Fathers to be read by those who newly join us", names Wisdom of Solomon, Sirach, Esther, Judith, Tobit, the Didache and the Shepherd. It does not name any Esdras (see finding 1).
- **Jerome**, Preface to Ezra (tertullian.org, DelCogliano): "among the Hebrews the texts of Ezra and Nehemiah comprise a single book" and "nor ought anyone take delight in the dreams found in the apocryphal third and fourth books". Verbatim.
- **Clementine preface**, *Praefatio ad lectorem (trium editionum Clementinarum)* at vatican.va: "Liber tertius et quartus Esdrae inscripti, quos inter Canonicos libros sacra Tridentina Synodus non annumeravit". Correct, and it is the Clementine preface reprinted in the Nova Vulgata appendix. The page names no author and no year, so "attributed to Bellarmine" (sources.json) and "1592" rest on other sources. The Latin names three editions (1592, 1593 and 1598).
- **Trent** Session 4 list: "the first book of Esdras, and the second which is entitled Nehemias"; "as they are contained in the old Latin vulgate edition". Checked in search result snippets of three copies.
- **Article VI** (1571): canonical "First Book of Esdras" and "Second Book of Esdras" (Ezra, Nehemiah); the read-not-for-doctrine list begins with the Third and Fourth Books. Checked in search result snippets, not on the Church of England page, which would not load.
- **Swete** (ccel.org, Introduction, Part III): Josephus "attracted perhaps by the superiority of the Greek style"; the story "certainly unhistorical" in its present form; "immortal proverb"; the ending compared with Mark 16:8; Thackeray's three views; Clement *Strom.* i.21, Origen *in Joann.* vi.1 and *in Jos. hom.* ix.10, and Cyprian *Ep.* 74.9; Jerome discarded it; the Vulgate appendix as 3 Esdras.
- **Torrey**, *Ezra Studies* (archive.org full text): "a rescued fragment of the old Greek translation of Chronicles-Ezra-Nehemiah"; the fragment runs to "Neh. 8:1-12 and the beginning of verse 13"; "a few quires plucked out of the middle of a" codex; "the words 'this was Zerubbabel' are secondary" at 4:13; the story of the Youths "written in Aramaic ... probably soon after 300 B.C."; the Greek version "in the latter part of the last century B.C."; the likeness to Deuteronomy 10:17 "probably purely accidental." All as book.json says.
- **Josephus**, *Antiquities* 11 (Perseus, Whiston): "immortal and eternal" in Zorobabel's speech (11.55); Ezra named at 11.120; the law read at the Feast of Tabernacles and no Nehemiah in 11.154–158 (Nehemiah first appears at 11.159); Ezra "buried in a magnificent manner at Jerusalem". The letter and Cambyses' reply are at 11.19 and 11.26 in that text, so "11.21–30" is slightly off at the start (finding 17).
- **Mihăilă**, CEEOL record: the Orthodox reckon ten books beyond the Hebrew canon, eight shared with Catholics and two not, "3 Maccabees and 1 Esdras (3 Ezra)". Correct, and abstract only.
- **Philaret** (1845 Blackmore translation of the Longer Catechism, on a blog copy): Cyril, Athanasius and John of Damascus "reckon them at twenty-two"; "The first book of Esdras, and the second, or, as it is entitled in Greek, the book of Nehemiah"; the others "appointed of the Fathers to be read by proselytes, who are preparing for admission into the Church." Verbatim. Philaret does not name this book.
- **Cowley** (islamic-awareness copy): "Enoch, Jubilees, Wisdom, 1 Esdras, Ezra Apocalypse ..." in the narrower list; the diglot Ge'ez-Amharic Bible vol. 3 contains "Enoch, Ezra Apocalypse, 1 Esdras, Tobit"; the Amharic Bible has "1 Esd.". Correct, with a caveat (finding 15).
- **KJV total**: 448 verses. Computed from the tagged KJV lines (chapter 8 runs to KJV 8:96). The facts line is right.
- **Jerome's numbering**: the Latin Bible's 1 and 2 Esdras are Ezra and Nehemiah. Ezra's book.json also says so.

## Findings

### Major

**1. The Orthodox basis is thinner than the text says, and Athanasius is misused.**
Location: `canon.accepted_by[0]` and `[1]`; `facts[0]` ("Greek and Russian Orthodox teachers rank it with the books that are not in the Hebrew Bible"); `lenses[0]` ("read for building up rather than for settling doctrine"); `sections[6]` (Swete's reading of the lists).
- The only support for the Greek side is Mihăilă's abstract (a Romanian scholar, abstract only). No Greek teacher or Greek synod is cited anywhere. The OCA answer and the Dositheus list, per the writer's own scratch file, do not name the book. So "Greek ... teachers rank it" has no source.
- Philaret (Russian) never names this book. "This book belongs to that second group" is an inference from his list, presented as a fact.
- Athanasius's "appointed to be read" list (opened) does not contain any Esdras. The row says its rank has been explained "following Athanasius" as among those books, below the twenty-two. But `sections[6]` says Swete read Origen's and Athanasius's "Ezra, first and second" as counting the two Greek books of Esdras inside the twenty-two. The book contradicts itself. If Swete is right, Athanasius puts it in the canon list. If the second list is meant, Athanasius does not name it.
- The quoted words "appointed of the Fathers to be read" are Philaret's translation, not the NPNF wording of Athanasius ("appointed by the Fathers").
- "Read for building up rather than for settling doctrine" is the Anglican Article VI idea. No Orthodox source in the file says it. Philaret's reason is preparation of catechumens.
- "No council of all the Orthodox churches has fixed its place" is an unverified negative. I did not open the documents. My own recollection is that Canon 2 of the Quinisext Council (692) approved the Laodicean and Carthaginian lists, which both name "Esdras" in two books (the same ambiguity the book notes for Origen and Athanasius). I did not check this in a text. Either source the claim or drop it. The same sentence is in Ezra's card.
- Fix: say what is sourced. "Mihăilă counts it among the ten; Philaret's catechism lists only Ezra and Nehemiah in the 22 and says the others were read by catechumens (it does not name this book); Athanasius names no Esdras in his reading list; Swete read his and Origen's 'Ezra' entry as including it in the 22." Delete "Greek" from "Greek and Russian Orthodox teachers" unless a Greek source is found. Drop "read for building up rather than for settling doctrine" from the O lens and the how_to_read row, or give the Orthodox source. Say plainly that Orthodox practice and the Russian Synodal Bible differ (the Synodal prints it among the non-canonical books; the Greek Orthodox Bibles print it in the Old Testament), if a source for the Synodal arrangement is opened. A search result I saw describes the Russian books of Ezra as "non-canonical", but I did not open an authoritative page.

**2. The book and Ezra's card disagree on two points.**
Location: `canon.accepted_by[0]`, `[3]` against Ezra `traditions[0]`.
- Orthodox. Ezra's card answers "Yes, for the Greek church. Greek Orthodox Bibles print it ... and read it with the rest of the Old Testament." The 1 Esdras facts and O lens say Orthodox teachers rank it with the books not in the Hebrew Bible, below the 22. A reader moving between the two pages meets "yes" on one and "ranked below the canon of the Hebrew Bible" on the other. Align both on what is sourced (finding 1).
- Catholic. Ezra's card says the 1592 Latin Bible printed it in an appendix "so that it would not be lost". The 1 Esdras row gives the reason from the preface: Trent did not count it among the canonical books. The writer's scratch file records that the preface text has no "lest they perish entirely" wording. So Ezra's purpose clause is unsupported by the text the book-level writer read. The 1 Esdras version is the sourced one. Report to the lead so the Ezra card is fixed. In 1 Esdras, nothing needs changing for this.
- The two pages also differ on the Reformed row: Ezra quotes "no more authority than other human writings" and 1 Esdras quotes "not being of divine inspiration". Both are in Westminster 1.3, so they agree.
- Ezra's card has no Ethiopian or Jewish rows. The 1 Esdras `canon` has both. That is fine, but the 1 Esdras `how_to_read[2]` sends readers to "the question on the book card for Ezra", which does not answer for the Ethiopian church.

**3. "Nine-tenths" of the book is not retelling.**
Location: `sections[0]` ("Nine-tenths of 1 Esdras retells 2 Chronicles 35–36, Ezra and Nehemiah 8"); `canon.rejected_why[1]` ("Since nine-tenths of the book retells ...").
- Chapters 3 (23 verses) and 4 (63 verses) are the guards' story. Add 5:1–6 and the lines on Josiah (1:21–22) and the book's own material is about 92 verses of 431, a little over a fifth, so about four-fifths is retelling. (Chapters 3–4 alone are 86 of 431, which is 20%.)
- Also, `sections[0]` says "Nehemiah 8", but the book retells Nehemiah 7:73–8:13 and uses no other Nehemiah material.
- Fix: "about four-fifths" in both places, or name the verse counts.

**4. The setting date for the reading of the law is wrong.**
Location: `facts[4]` ("Ezra's reading of the law in the seventh year of a king Artaxerxes (usually dated 458 BC)").
- 1 Esdras gives the seventh year for Ezra's arrival (8:6, "in the fifth month"). The reading is on "the first day of the seventh month" (9:37–40), and the book gives it no year. Between the two come the assembly in the ninth month and the sitting from the first day of the tenth month "until the first day of the first month" (8:91–9:17 and Ezra 10:9, 16–17), so the reading falls after the seventh year, in the seventh month of the following year at the earliest.
- 458 BC is the conventional date of Ezra's arrival. It is not a date for the reading.
- Fix: "from Josiah's eighteenth year (622 BC, 1:20) to Ezra's coming in the seventh year of a king Artaxerxes (8:6; usually dated 458 BC) and his reading of the law on the first day of the seventh month (9:37–40; the book gives no year)."

**5. The Luther quotation is not verified, and it carries a church row.**
Location: `canon.accepted_by[5]`; `sources.json` `luther-preface-baruch`; `canon.rejected_why[2]` ("Luther did not even translate it").
- The scratch file records the sentence "because they contain nothing that one could not find better in Aesop" as read "at beggarsallreformation blog", with "LW 35:349". The source entry cites *Luther's Works* 35 (1960), p. 349 as if that volume had been read. I tried to confirm it. The blog page I could reach is the 1534 preface to Esther and Daniel (LW 35:353). I found no open text of the Preface to Baruch with this sentence. I cannot confirm the wording, the page or the preface. It is plausible, because Luther did omit these books and loved Aesop, but that is not verification.
- The Lutheran row also states a church position from one man's remark. The Lutheran Confessions are not cited. Say "Luther" and not "Lutheran churches", or give a confessional source.
- Fix: either open LW 35 (or the Weimar German Bible prefaces) and quote the sentence, or change `luther-preface-baruch` to say it was read in a quoting page, with the page named. Rename the row to "Lutheran churches (Luther's own judgment)".

**6. The numbering sentence in `content/topics/first-esdras.json` is wrong and doubled.**
Location: `sections[0].b`, paragraph 1 ("Verse numbers in English Bibles also differ from Rahlfs' Greek edition") and paragraph 2 ("Cyrus's list of vessels is 1 Esdras 2:13–14 in the KJV but 2:9–11 in Rahlfs").
- The list of vessels is **2:12–13** in the Swete numbering the site uses: Greek 2:12 is the cups, censers and bowls, 2:13 the total of 5,469. KJV tags them 2:13 and 2:14. Ezra's own note on the Greek says "2:12–13 in Swete and 2:13–14 in the KJV". Swete 2:9–11 is Cyrus bringing out the vessels, handing them to Mithridates and on to Sanassar. It is not the list.
- "Rahlfs" is the wrong name for the site's numbering anyway, and I found no open Rahlfs text showing a 2:9–11 numbering. The sentence says "Rahlfs" in the first paragraph and then "Swete" in the second.
- The two paragraphs say the same thing twice. Fix: one paragraph: "This site cites 1 Esdras in the numbering of Swete's Greek text. The KJV divides chapters 1, 2, 3, 5, 6 and 8 more finely, so its numbers differ. For example, the list of Cyrus's vessels is 2:12–13 here and 2:13–14 in the KJV. The 1 Esdras pages show the KJV's number beside each verse." Remove "Rahlfs" or check a Rahlfs numbering in an open text first.

### Minor

**7. A quoted phrase is not the Plain's wording.** `sections[3].b`: "all the time of King Cyrus's life" is put in quotation marks with (5:70). The Plain reads "the whole time King Cyrus was alive." Quote the Plain or drop the quotation marks. (The Greek is πάντα τὸν χρόνον τῆς ζωῆς, and the KJV has "all the time that king Cyrus lived", so the phrase seems to be a modernized KJV line.) Every other 1 Esdras quotation matches.

**8. Wrong verse for Sanabassar.** `sections[0].b` has "Sanabassar at 6:18". The Plain has the name at 6:17 and 6:19 and none at 6:18. The Greek name (Σαναβάσσαρος) is in 6:19.

**9. "High priest" is cited at the wrong verse.** `cited_in[6].b` and `reliability.sections[3].b` give Ezra as "high priest" at 9:39–40, 49. The Greek ἀρχιερεύς is in 9:40 and 9:49 only. 9:39 says "priest and reader".

**10. Nehemiah range differs between sections.** `facts[5]` gives Nehemiah 7:73–8:12; `outline[18]`, `cited_in[7]` and `sections[1]` give 7:73–8:13 (the last word of the book is the first word of 8:13). Use 7:73–8:13 everywhere, saying that only its first word is in 1 Esdras.

**11. A hedge in a spec.** `spec[0].body`: "I have not found this pairing in the scholarship I could check". STYLE rule 2 allows no hedges about what was checked. Say what was done ("Not in Talshir's summary on the SBL page, Swete, Torrey or Bullard and Hatton") or leave the sentence out and keep the label "Claude's theory". The theory itself is clearly labeled and fair.

**12. Cyprian's letter has two numbers.** `authorship[0]` and `sections[6]` cite "Letter 73.9" (ANF numbering). Swete cites it as *Ep.* 74.9 (the Hartel numbering). Add "(74.9 in Swete's numbering)" so a reader with Swete's book finds it.

**13. An absolute about the rabbis.** `canon.accepted_by[7]` ("the rabbis do not cite it") and `lenses[2]` ("the rabbis do not use it"). I could find nothing that proves or disproves this, and I did not search rabbinic literature. A negative about a whole literature needs a source (or "no rabbinic text I found cites it"; but see finding 11 on hedges). Safer: drop it and say the book is not in the Hebrew Bible and no Hebrew or Aramaic copy is known. The medieval Hebrew *Yosippon* retells the Josephus version of Ezra's period, if that is relevant, but I did not check it.

**14. cited_in gaps and one overstatement.**
- Row 1 says "Scholars agree that 1 Esdras draws on this material, either from a Hebrew text of Chronicles or from an older edition of the Chronicler's history". That leaves out Thackeray's first option, which `authorship[2]` and `sections[1]` list: a compilation from the Greek of Chronicles. "Scholars agree" is not true. Say "Scholars divide on whether it used the Hebrew, an earlier Greek version or the Greek Chronicles."
- The text says "Nehemiah 7:6–73 repeats the same list" (row for Ezra 2) but gives no row for it, and says nothing for Zechariah 1:1, 4:6–10 (Zerubbabel) or for Jeremiah, whom 1:26–30 names (the lament; 2 Chronicles 35:25). 2 Kings 23:29–30 is the other account of Josiah's death. Add short rows or leave them to the notes and say so.
- Row 9 (Haggai 1:1) is fair and the "shared tradition" strength is honest everywhere.

**15. Cowley is used a little more firmly than his text allows.** `canon.accepted_by[2]`. In the same article (islamic-awareness copy), the prayer-book entry in the list is "2 Ezra and Ezra Apocalypse (listed as though they were the same)", and the *Fetha Nagast* list has "two books of Ezra" that Cowley says it does not identify. The row says Cowley found 1 Esdras in the narrower canon "given in its prayer book" and in the diglot Bible. Both points are supported by lines I saw, but the row should say "named in the narrower list and in vol. 3 of the Ge'ez-Amharic Bible; other lists say only 'Ezra'". I could not see the whole article, so my reading is partial.

**16. The Geneva Bible detail.** `sections[5].b`: "The KJV, like the English Bibles since the Geneva Bible of 1560 (Bullard and Hatton)". The handbook intro says English Bibles have called it 1 Esdras since 1560 (search result; the page itself would not load). I found no source in what I opened that names the Geneva Bible. Say "since 1560" or find the sentence.

**17. Josephus section numbers.** `sections[3]` and `[4]`: the Cambyses letter is "11.21–30". In the Whiston text I opened, the accusing letter is at 11.19 and Cambyses' reply at 11.26. Cite 11.19–30 or check the Niese section numbers, since Whiston's and Niese's sections differ.

**18. "Oldest surviving witness" in the lead.** `lead[2]`: "the oldest surviving witness to another form of the Ezra story". With the date stated everywhere as uncertain (100s or first century BC), "oldest" has no support except that it is the only Greek copy. Say "the earliest surviving retelling in Greek" or "an early witness".

**19. Josephus and the 22 books.** `sections[4].b` ends "though not, as far as he says, as a separate holy book." "As far as he says" is a hedge, and it hides what Josephus does say: *Against Apion* 1.38–41 counts 22 books, and he does not list Esdras. I did not reopen that passage in this session, so I cannot supply the line numbers. Say what he says, or leave the clause out. Wikipedia (not a source) says Josephus "treats it as Scripture", so a reader will want this sentence right.

**20. Unverified items and their status.** These are not errors, but they are quoted as read, and I could not open them. Each should carry its status in sources.json or the text.
- OCA "Canon of Scripture" answer does not name the book (`accepted_by[0]`): the OCA page 404'd for me. The writer's scratch file records it.
- Bullard and Hatton: "all scholars assume more material once existed" (`sections[7]`), "most scholars are comfortable with the first century BC" (`provenance[1]`). The handbook introduction would not load. A search result supports the first-century-BC wording, not the "all scholars" one.
- Russian Synodal Bible: the page `azbyka.ru` for "2-я книга Ездры" would not load for me. A search result agrees that the Russian tradition calls it the second book of Ezra and does not count it as canonical.
- Catechism 120 (the list including "Ezra and Nehemiah"): vatican.va would not give me paragraph 120. The writer's scratch file records it.
- Belgic Confession 6 and Westminster 1.3: checked only by the writer.

## Other checks (no finding)

- **Canon block.** Every church is named, with a source. The book is "Scripture for" Orthodox churches and the Ethiopian church, and "Among the Apocrypha" for Anglicans, in `facts[0]`. There is no ranking.
- **Reliability.** Labeled and balanced. "Conflicts" are listed point by point against the 66 and check out against the Greek and Plain: Artaxerxes before Darius, Darius sending Zerubbabel (4:47–5:6), 23rd of Adar at 7:5 against Ezra 6:15, Attarates at 9:49, "a thousand horsemen" at 5:2. Section 4's statement that the book teaches nothing about God, sin or salvation beyond the 66 is a judgment, and a plausible one, but it is not labeled as Claude's.
- **Attarates.** The book calls him "named Attarates" in `sections[0]`, `cited_in[7]` and `reliability.sections[3]`. The notes in part 06-09 correctly say the title *hattirshata* became a name. A reader of book.json alone will not know that. Add "(the governor's title, read as a name)" once.
- **Names.** "1 Esdras", "3 Esdras", "Esdras A", "4 Ezra" all match works.json. The table in `sections[5]` is accurate (KJV, Latin, Russian), and `facts[1]` agrees.
- **Fairness.** The two views of the book's origin (Torrey; Talshir) are stated in their strongest form with named holders. Catholic, Anglican, Lutheran, Reformed and Jewish positions are quoted from their own texts.
- **Prompts.** Three image prompts with no lettering and no frames.
- **Style.** Short sentences; no em-dashes in prose; the lead is long but readable.

## Fixes applied
Fixer, 2026-10-31. Every kept or added fact was reopened this session; list in `.scratch/1es-book-fix/sources-checked.md`.
1. Fixed. Orthodox rows rebuilt on sources opened now (lead decision 12): the Orthodox Study Bible's front matter ("never officially committed itself to a single text and list of Old Testament books"; its Orthodox OT lists "1 Ezra"), the Russian Synodal Bible at azbyka.ru (2 Ezra, asterisked "неканоническая"), Mihăilă's abstract, the OCA page (does not name it). Athanasius removed from the Orthodox row; Philaret quoted for what he says, with "Philaret does not name this book". "Greek and Russian Orthodox teachers rank it" and "read for building up rather than for settling doctrine" removed from facts, O lens, summary and how_to_read. "No council has fixed its place" replaced by the OSB sentence. New key `orthodox-study-bible`.
2. Partly fixed (book side). 1 Esdras keeps the sourced Catholic reason and now adds the appendix note's "lest they should perish completely" (lead decision 13: Gallagher's transcription, opened; new key `gallagher-vulgate-appendix`). how_to_read and lead now say this page's canon section gives the Ethiopian answer. Ezra's card is left to the lead (see report).
3. Fixed. "About four-fifths" in sections[0], rejected_why[1] and provenance[2] (3:1–5:6 plus 1:21–22 = 94 of 431 verses); "Nehemiah 8" made 7:73–8:13.
4. Fixed. facts[4]: Josiah's eighteenth year (1:20), Ezra's coming in Artaxerxes' seventh year (8:6), reading on the first day of the seventh month (9:37–40) with no year. BC dates (622, 458) removed, not verified in an opened source.
5. Fixed. Luther's Aesop sentence and LW page could not be found in any open text (searched; the beggarsall page reached is the Esther/Daniel preface): removed, with key `luther-preface-baruch`. Lutheran row now rests on the 1534 Wittenberg Bible's own list of the Apocrypha (image at the Gruber Collection, opened: eight items, no Esdras), labeled "Lutheran churches (Luther's Bible)"; new key `luther-bible-1534`. rejected_why[2] reworded to match.
6. Fixed in content/topics/first-esdras.json: the Rahlfs sentence and repeated paragraph replaced by one paragraph: Swete numbering, KJV divides chapters 1, 2, 3, 5, 6 and 8 more finely, vessel list 2:12–13 here and 2:13–14 in the KJV (checked in texts/en and plain).
7. Fixed. Quotes the Plain: "the whole time King Cyrus was alive" (5:70).
8. Fixed. Sanabassar at 6:17 and 6:19.
9. Fixed. "high priest" cited at 9:40, 49 in cited_in and reliability.
10. Fixed. 7:73–8:13 everywhere, facts[5] noting only the first words of 8:13.
11. Fixed. Hedge removed; the spec now says it builds on Talshir's view.
12. Fixed. "Letter 73.9; 74.9 in Swete's numbering" in authorship and sections[6]. Also removed "AD 256" (no date on the page opened).
13. Fixed. Rabbinic absolutes removed from the Judaism row and J lens; the row now cites Josephus' unnamed twenty-two books (Against Apion 1.38–41, opened).
14. Fixed. cited_in row 1 now gives Thackeray's three views and Torrey instead of "scholars agree"; rows added for 2 Kings 23:29–30, 2 Chronicles 35:25 (Jeremiah, with 1:26 against 2 Chronicles 35:22), Nehemiah 7:6–73 and Zechariah 4:6–10 (13 rows).
15. Fixed. Ethiopian row now: named in the narrower list ("The Prayers of the Church") and vol. 3 of the Ge'ez-Amharic Bible, judged undisputed by Cowley; the broader list's "1 Esdras and the Ezra Apocalypse"; other lists say only "two books of Ezra" (full article opened).
16. Fixed. "since 1560 (Bullard and Hatton)", Geneva removed (the handbook names no Bible).
17. Declined. In the Whiston text opened (lexundria) the letter to Cambyses begins at 11.21, his reply is 11.26, and the halt is 11.30; 11.19–20 is the Cutheans' bribery, so 11.21–30 stands.
18. Fixed. "an early witness".
19. Fixed. The hedge replaced by what Against Apion 1.38–41 says (opened): twenty-two books, unnamed, so it does not show whether he counted this book.
20. Fixed. OCA, Bullard and Hatton, Synodal Bible, CCC 120 (vatican.va concordance), Belgic and Westminster all opened now; sources.json updated (Bellarmine attribution and "1876" removed as unverified). Bullard's "all scholars" is now a direct quotation; "Others think the compiler chose to close..." removed (no named holder).
Other checks: Attarates explained once (hattirshata, texts/orig Neh 8:9); reliability doctrine line labeled "in Claude's judgment". Also removed for want of an opened source: Persian regnal years, Syriac version, "no Dead Sea Scroll/papyrus", "most historians", "most readers", "most scholars now agree", the unsourced Orthodox and "defenders" sentences in reliability §3, Egypt/Judea attributions in audience, Philaret's and Westminster's years; Talshir's book dated 2000 (SBL page); Ezra appears in "the last two chapters (8–9)", not three; Westminster quote corrected to "canon of the Scripture"; Augustine's view given as his "suggestion".
