# Hostile review: 1 Clement, book-level files (2026-11-12)

Scope: `content/books/1Cl/book.json` and `sources.json`, plus the topic cores `content/proposals/works/topics/apostolic-fathers.json` and `clement-of-rome.json`, the `barnabas`/`canon` section of `content/proposals/works/topics.md`, and the `ethiopic-clement` and `book-of-eldad-and-modad` entries of `content/proposals/works/works.json`. The Barnabas files are reviewed in `content/books/Bnb/review-book.md`. Checked against the brief set (`brief-apfathers.md` with Lead decisions, `brief-1cl.md`, `agent-reviewer.md`, `agent-reviewer-works.md`, `canon-tiers`), the three written parts (01-20, 21-39, 40-65), `texts/orig/1Cl.json`, and sources opened this session (see "What I verified" at the end).

## Verdict

This is careful, mostly honest work. I found no invented source, reading or fragment, and nearly every patristic quotation checks out word for word (Eusebius 3.16, 3.25, 3.38, 4.23.11, 6.13.6; Irenaeus 3.3.3; Jerome 15; Clement of Alexandria Stromata 4.17; Lake's introduction; Lightfoot's pages 38 and 63; Chapman; the OCA life). `--check 1Cl` is 0 errors, 0 warnings. The weak points are in the canon block, where the evidence is arranged so that it leans one way, a few facts rest on a source that does not say them (or says something else), and the church rows do not meet the brief: Lutheran and the Oriental Orthodox families are thin or missing, the Eastern Orthodox row hides a real tension, and the "readings" of Catholic, Orthodox and Protestant churches in the reliability section are not sourced. The date discussion states a 1908 consensus as present fact and leaves out the holders of the other dates that Chapman himself names. One stated fact (three messengers from Rome) is contradicted by the book's own part note. Nothing here needs a rewrite, but ten items need fixing before this counts as reviewed.

Findings: 0 critical, 10 major, 15 minor.

---

## Major

### 1. Apostolic Canon 85: the dating is unsourced and contradicted by the source the writer cites; the description of the list is inaccurate
Location: `sections` "The letter at the edge of the canon" (4th bullet), `canon.rejected_why` "Honored, read, but left off the lists", `facts` "Scripture for", `topics.md` canon section, `apostolic-fathers.json` "At the edge of the canon".
- The book calls the Apostolic Canons "a Syrian church-order of the late fourth century". The page the writer opened (newadvent.org/fathers/3820.htm, `.scratch/1Cl-book/web/3820.txt`) gives no date or place. The wording comes from the global key `apostolic-canon-85` ("Syria, about AD 380", defined in `books/1Ma/sources.json`), not from anything opened for this book.
- Westcott (opened, `.cache/dl/westcott-canon/westcott1896.txt`, p. 446 n. 1): the catalogue in the last Apostolic Canon "is curious; but as a piece of evidence it is of no value. It was drawn, I believe, from Syrian sources, and probably dates from the sixth century." And p. 522 n. 5: "the peculiarities of this Catalogue received no conciliar sanction." The book cites Westcott for other things but not for this.
- Web search this session: the c. 380 date is the common view, but it is disputed. The Wikipedia article on the Apostolic Canons reports that Funk placed the longer 85-canon form later, in the 5th to 6th century (search result only; I could not open the article's own sources).
- The list as printed (NPNF, opened): the New Testament enumeration omits Revelation, puts "Two Epistles of Clemens, and the Constitutions" inside the same sentence as "our own books, that is, those of the New Testament", and the list ends with "And the Acts of us the Apostles". The book says the Canons "end their list ... with the New Testament and then 'two Epistles of Clemens...'". That is wrong on both counts: the list ends with Acts, and the New Testament part has no Revelation.
Fix: date the list as disputed with named holders (c. 380 with the source that says so; Funk, and Westcott's "probably the sixth century", from sources opened); say the list omits Revelation and ends with Acts; give Westcott's judgment that the list is of no value as evidence and had no conciliar sanction, next to the "counted in one list" sentence. Do not let the global key's date stand in for a source.

### 2. Codex Alexandrinus: the canon block gives only the inference that points away from canonical status, and states the codex's origin as Egypt
Location: `canon.rejected_why` "Kept at the end of the Bible", `canon.provenance` "Read and copied", `sections` "The letter at the edge of the canon" (3rd bullet).
- "Useful and honored, but outside the canon proper" is the writer's gloss on Westcott p. 522. Westcott's own sentence is a judgment of the Anglican position ("a position similar to that of the Apocryphal books of the Old Testament, according to the judgment of our own Church"). It is presented in the site's voice as the meaning of the placement.
- Evidence the book does not give. The Catholic Encyclopedia article "Codex Alexandrinus" (newadvent.org/cathen/04080c.htm, fetched this session) says the two Clement texts "are included in the list of New Testament books which is prefixed and seem to have been regarded by the scribe as part of the New Testament", and that one leaf is missing from 1 Clement. Swete (opened by the writer, `.cache/dl/swete-intro/intro1914.txt` lines 20830-20845) says the codex's own catalogue puts the Psalms of Solomon after the final summary of the Old and New Testament books and that the book listed immediately before them is 2 Clement. So the codex's own index is the best evidence of how the scribe counted Clement, and it is disputed or uncertain. `swete-intro-1914` is in `sources.json` but never cited in the text.
- "In Egypt it was copied with the books of the Bible, in Codex Alexandrinus" (provenance) states an Egyptian origin. The Wikipedia copy the writer opened (`wiki-Codex_Alexandrinus.txt`, lines 244-252) records Streeter's proposal of Caesarea or Beirut and a 2025 study (Monier) supporting an Egyptian setting. Origin is argued, not settled.
Fix: report the prefixed-list evidence (CE) and Swete's note on the summary, label Westcott's sentence as his Anglican judgment, and say the origin of A is argued. Cite Swete or drop the key.

### 3. The Eastern Orthodox row leaves out the tension it creates
Location: `canon.accepted_by` "Eastern Orthodox churches".
The row says "Not Scripture" and then reports that canon 85 lists the Clement letters with the New Testament and that Trullo (692) "confirmed the eighty-five canons while rejecting the Constitutions". It never says what follows. Westcott (opened) reads Trullo's confirmation in two ways: p. 446, the Council ratified the Canons of the Apostles with a reservation about the Constitutions, and "no notice was taken of the two Clementine epistles which were also pronounced Canonical at the same time"; the note on John of Damascus (near p. 453), where the Apostolic Canons' inclusion "might well seem a true corollary from the acknowledgment of their ecclesiastical authority"; against p. 522 n. 5 and p. 446 n. 1 (no sanction, no value as evidence). A reader cannot tell whether the Orthodox church today counts the letters in the canon. The only source for "Not Scripture" is Reid (1908), about the New Testament of "the Orthodox Russian and other branches", and the OCA life, which says nothing about the Bible's contents.
Fix: state the tension plainly in the row, each reading with its holder, no ranking; add a current Orthodox source on the New Testament canon if one can be opened, or say that none was found.

### 4. Church rows do not match the brief, and the flat statements "in no church's Bible" are not backed for the Oriental Orthodox
Location: `canon.accepted_by`, `lead` ¶3, `how_to_read` "Know what you are reading", `canon.summary`.
- `brief-apfathers.md` asks for one row per family: Catholic, Eastern Orthodox, Oriental Orthodox, Ethiopian, Anglican, Lutheran and Reformed, Baptist and Free churches. There is no Lutheran row (and no statement that none was found). Westcott (opened; the passage on Luther and the "Lutheran Church has no recognised definition of Canonicity, and no express list of the Sacred Books") is the kind of source that could support a sentence. The Oriental Orthodox families other than the "Coptic tradition" (Syriac, Armenian) are absent, although the Syriac manuscript Add. 1700 is in Lake.
- The Coptic row reports Reid (1908): "The Coptic-Arabic Church include with the canonical Scriptures the Apostolic Constitutions and the Clementine Epistles." That is the only statement in the block about a church counting the letters in its scriptures. The row answers "without saying which writings" and "cites no statement of the Coptic Orthodox Church today", yet the lead, summary and `how_to_read` say flatly "Whatever your church, 1 Clement is not in your Bible". The block contradicts itself, and the contradictory claim stays unresolved.
Fix: either open a current source on the Coptic Orthodox canon (or Metzger, or Mikre-Sellassie for Ethiopia) and rewrite the row, or drop the unqualified "whatever your church" sentence. Add a Lutheran line and a Syriac/Armenian line only where a source says something; otherwise say once in the block which families were searched and yielded nothing.

### 5. Church readings in the reliability analysis and the lens description are not sourced
Location: `canon.reliability.sections` item 4 "Goes beyond", `lenses` O, `sections` "The ministry of chapters 40–44".
- "Catholic and Orthodox readers see here the apostolic order of the church continuing; many Protestant readers take it as one early church's application of Acts 14:23 and Titus 1:5, of real historical weight but not binding." No Orthodox source was opened for 1 Clement, and no Protestant source other than Lightfoot (Anglican). The ministry section itself says "this page cites nothing that addresses 1 Clement directly" for the Orthodox, Reformed and Baptist readings. The reliability section asserts what the section admits it cannot source (STYLE rule 2, rule 3: name who holds it).
- Lens O promises "Catholic, Orthodox, Anglican and Protestant readings side by side, each from its own sources". The book gives two (Chapman, Lightfoot).
- "Goes beyond: its account of the apostles' provision for successors (44:2) is more explicit than anything in the New Testament." The key word of that sentence is the one with six readings (variant 44:2; Lake: "the translation is doubtful"), and Lightfoot read "they" as the first elders. The comparison depends on a reading the book itself says is uncertain.
Fix: delete or source the Orthodox and Protestant readings (an Orthodox and a Reformed or Baptist statement on 1 Clement 42-44, opened); trim lens O to what the page delivers; qualify the 44:2 comparison.

### 6. Date: a 1908 "consensus" stated as the present one, and the other date-holders left out
Location: `audience.views` "When, and under what pressure", `facts` Date, `sections` "When was it written?".
- "Most date the letter to the last years of Domitian ... (Chapman)": Chapman (1908, opened) says it is "now universally acknowledged, after Lightfoot". That is a 1908 claim, used with "Most" for the present.
- The New Advent copy of Chapman that the writer used now contains a sentence that is not Chapman's: "In 1996, as Joseph Cardinal Ratzinger, Pope Benedict XVI supported a date of A.D. 70, and by 2002 most scholars a date earlier than 96, some agreeing with the A.D. 70 date." I could not verify it (no source is given on the page), but it is on the page the book cites, and it cuts against "most". The book should not cite that page as "Chapman (1908)" for the present state of scholarship, and should not ignore the sentence.
- Chapman names the holders of the other dates: Grotius, Grabe, Orsi, Uhlhorn, Hefele, Wieseler (soon after Nero) and Volkmar, Baur, "not Hilgenfeld" (Hadrian, rejected). The book says only "a few earlier scholars". The brief (Dating) asks for each date "only with a scholar's work opened ... named, with the argument".
Fix: say that Chapman's "universal" is 1908; name the early-date holders from Chapman; add a modern consensus statement only from a source opened this session (an introduction in Holmes or Ehrman, or a commentary); drop "Most" if none is found.

### 7. "Three men from Rome" is contradicted by the book's own part note and by Chapman
Location: `facts` Setting, `audience.to`, `prompts` "The letter leaves Rome".
- The Greek of 65:1 is "Claudius Ephebus and Valerius Bito, with Fortunatus also". 63:3 (Greek and Plain English Translation) says "men" without a number. The part note at 65:1 says Fortunatus "may be the man of that name who visited Paul from Corinth (1 Corinthians 16:17); Lightfoot sees 'no improbability' in it". Chapman (opened) speaks of "the two envoys to Corinth" who "had lived in it from youth to age".
- book.json says three men from Rome carried the letter and links 63:3's "from youth to old age" to all three.
Fix: "Claudius Ephebus and Valerius Bito, with Fortunatus (65:1)"; say who thinks Fortunatus was a Corinthian; remove "three" and "all three had lived ... from youth to old age" from the audience card; change the image prompt to match.

### 8. "Rome, Corinth and authority": the Catholic reading is shown through a 1908 article, and Lightfoot's concession is left out
Location: `sections` "Rome, Corinth and authority".
Chapman's page (opened) quotes Lightfoot against the grain of the book's use of him: "It may, perhaps, seem strange ... to describe this noble remonstrance as the first step towards papal domination. And yet undoubtedly this is the case." (Lightfoot, vol. 1, p. 70, as Chapman quotes). The book uses Lightfoot and Harnack only as the answer to the Catholic reading and quotes Lightfoot only on "chief of the presbyters". Leaving out the concession tilts the section. No Orthodox reading appears. The Catholic position is a 1908 encyclopedia article (with an imprimatur, not a magisterial text); the row at `accepted_by` labels it "Catholic Church".
Fix: add the Lightfoot sentence with its source; label Chapman as the 1908 Catholic Encyclopedia, not "the Church"; add an Orthodox view only if one is opened.

### 9. The Westminster Confession and the 1689 Confession are quoted for something they do not say
Location: `canon.accepted_by` "Reformed and Presbyterian churches", "Baptist churches".
Both rows say writings outside the canon are "no part of the canon of Scripture" and to be used "as other human writings". In both documents (opened: `wcf.txt`, `lbc1689.txt`, section 1.3) that sentence is about "the books commonly called Apocrypha". The confessions list the 27 books (1.2) and say nothing about the Apostolic Fathers. "Treats other writings the same way" (Baptist row) is not in the source.
Fix: say they list the 27 books of the New Testament (1.2) and treat the Apocrypha as non-canonical (1.3); say nothing about 1 Clement beyond what follows from the list.

### 10. Ethiopian row: the claim about the "book of Clement" rests on Wikipedia alone, and the description differs from the Wikipedia text
Location: `canon.accepted_by` "Ethiopian Orthodox Tewahedo Church", `sources` `wiki-tewahedo-canon`, `works.json` `ethiopic-clement`.
- The brief says to say nothing about the Ethiopian "Clement" unless a source that names the book is opened. The list at ethiopianorthodox.org (opened) names "The book of Clement" as no. 34. What the book is comes only from the Wikipedia article, quoted in the site's own voice ("Wikipedia's summary says it 'should not be confused with' 1 Clement").
- The book and `works.json` say the work "presents itself as Peter's teaching handed to Clement". The Wikipedia text (opened) says "An epistle traditionally attributed as written by the apostle Peter to Clement". Those are not the same.
- Wikipedia files the book under the broader canon's church-order books (Sinodos, Covenant, Clement, Didascalia), which matters for "Not in its Bible" but is not said.
Fix: add a second source (Wikipedia itself cites Mikre-Sellassie, 1993, and the EOTC's own 1995 handbook; open one of them or Metzger), use its wording, and take Wikipedia out of the site voice.

---

## Minor

### 11. The Titus Flavius Clemens passage misquotes and omits
`authorship` "Titus Flavius Clemens and the imperial household". Lake (opened) writes that he was accused of "treason or impiety (ἀθεότης)" and, according to Dio Cassius, because of "his Jewish proclivities", and adds "There is no proof that he was really a Christian". The book puts "atheism" in quotation marks beside Lake's name, drops the Jewish proclivities and the no-proof sentence. Eusebius 3.18.5 (opened) calls Flavia Domitilla the daughter of Clement's sister (niece); Lake calls Domitilla his wife. The book gives both without saying they differ (two women, or one tradition garbled). Chapman says he was "martyred".

### 12. "Lost to the West, found again" has two claims that no cited source makes
`canon.provenance`. "In the Latin Middle Ages the letter was almost unknown" and "Western scholars first read it when Codex Alexandrinus came to England" are not in Chapman or Lake (Chapman says only that Young's edition of 1633 is the editio princeps from A). Lake says the Latin version "may perhaps be best regarded" as made in Rome in the late 2nd or early 3rd century, which the book hardens to "probably at Rome".

### 13. Wikipedia as a source key, and one unused key
`sources`, `canon.s`: `wiki-codex-alexandrinus` is cited in the site's voice for the lacunae. What I checked: Lake's note at 57:6 ("A is missing from here to the beginning of Chapter LXIV") and his introduction ("the whole text with the exception of one page") support the main claim; the Catholic Encyclopedia (above) confirms "one leaf is missing from I Clement" and probably two at the end of 2 Clement. So the claim is true, but the "63:4" boundary and the end of 2 Clement need Lake, the CE and Swete, not Wikipedia. Sinaiticus location (for Barnabas) was checked separately and holds (see the Barnabas review). `swete-intro-1914` and `lake-apostolic-fathers-2` (cited for Hermas) are fine; `swete-intro-1914` is never cited in text (item 2).

### 14. The book.json paraphrases do not use the Plain English Translation's wording where it now exists
- 5:4-7: the book says Peter bore "labors" and "the limit of the west"; the Plain English Translation has "hardships" and "the far limit of the West"; the book says Paul "left the world", the Plain English Translation "was set free from the world". Quote 5:4-7 from plain.txt exactly, or use its words.
- 44:2: the book says "gave a further instruction", the Plain English Translation (and the variant entry's `follow`) "added a rule". Align.
- 1:1: the book says "rash and self-willed in the letter's words"; the Plain English Translation has "rash and headstrong".
- 63:3: "faithful and self-restrained men" in plain.txt; the book speaks of "trusted men".

### 15. Spelling
The book writes "Danaids and Dircae" (3 times); the parts and notes write "Dirces" (12) and "Dirce" (7). Choose one.

### 16. "A minority proposal" for Clement and Hebrews
`canon.cited_in` Hebrews 1:3–13: "the idea that Clement had a hand in Hebrews is a minority proposal (see the authorship table on the Hebrews page)". The Hebrews page (opened) reports only that Origen said some named Clement of Rome and others Luke; it does not say "minority". Eusebius 3.38.2-3 says "some" said Luke, "others" Clement. Drop "minority" or source it.

### 17. Topic list leaves out the book's own cores
`topics` lists 29 ids but omits the new cores `envy`, `peace`, `phoenix`, `apostolic-succession` and parts' main contributions (`pride`, `agrapha`, `creation`, `repentance`, `rahab-of-jericho`, `job`). Check each exists before adding (they do, as proposals). `humility` is not listed in book.json and need not be: `pride` carries it as an aka. All 29 listed ids exist.

### 18. Spec boxes do not say where they overlap published work (STYLE rule 4)
Both spec boxes say "I have not found this argued in the sources checked". Rule 4 asks for where they overlap with published scholarship. The first (the "own rank" echo) overlaps the existing note at 1 Corinthians 15:23, which already cites 1 Clement 37 for the army picture; say so. Also check the count in the second: chapter 4's seven examples are right against the Greek (4:1-7, 8, 9, 10, 11, 12, 13).

### 19. Dionysius and Sunday worship; "forty years"
`lead` ¶3, `canon.provenance` "Read and copied": "still read it in their Sunday worship about 170". Dionysius (opened) says they read Rome's new letter on the Lord's day and will always have the former letter for advice; Eusebius says it showed the custom from the beginning. The words "in their Sunday worship" are an inference; mark it. `audience.to`: "forty years before" holds only for the 90s date; say "about forty years if the letter is from the 90s".

### 20. Catholic row: present-tense practice rests on a 1908 article
`accepted_by` Catholic Church: the feast on 23 November comes from Chapman (1908). A current calendar confirms it (catholicculture.org, optional memorial of St Clement I on 23 November, 2018-2023 entries; USCCB itself not opened). Cite a current calendar or say "in 1908".

### 21. Comparative and unsourced judgments
"Its place and approximate date are more secure than those of most early Christian writings outside the New Testament" (provenance) has no source. "Lightfoot, ... the great editor": fine. "Lightfoot, The Apostolic Fathers, part 1 ... (2nd ed., 1890)" in `reading`: the edition number is not in an opened source (Chapman gives 1890, 2 vols).

### 22. "Limit of the west" has no named holders
`sections` "Peter and Paul in chapter 5": "has been taken as Rome itself or as Spain" names nobody. Chapman (opened) holds both: the apostles "suffered at Rome" and "it seems that St. Paul went to Spain". Name the holder. The Eusebius reference (2.25) for Paul's death in Rome under Nero is correct (2.25.5, fetched this session).

### 23. Duplicate and unused source definitions
`1Cl/sources.json` defines `origen-celsus-1-63` (used only in Barnabas) and four keys that `Bnb/sources.json` defines word for word (`clement-stromata-anf`, `reid-canon-nt-ce`, `westcott-canon-survey`, `lbc-1689-ch1`). The build accepts identical duplicates; define each once (in the book that needs it) or merge at publish. The brief said to reuse `clement-stromata`; the writer made `clement-stromata-anf` (with its own page ranges), which is fine but should be reported as a near-duplicate.

### 24. Repetition
The Chapman and Duchesne quotations on the closing prayer appear twice, in "The Roman church and the Corinthian revolt" and in "The great prayer".

### 25. Lake as the only source for the Strassburg Coptic manuscript
"directly joined on to the canonical books" (Lake 1912, one sentence, about a manuscript Lake dates to the seventh century and Rösch published in 1910) carries a claim about the Egyptian canon with no later source. Fine to keep as Lake's claim; say it is Lake's.

---

## Topic cores, topics.md and works.json (same writer)

### T1 (major). `apostolic-fathers.json` "At the edge of the canon": Athanasius is misdescribed
The text says Athanasius "allowed only the Teaching of the Apostles and the Shepherd to be read by new believers". Festal Letter 39, section 7 (opened) lists the Wisdom of Solomon, Sirach, Esther, Judith and Tobit as well, and then "that which is called the Teaching of the Apostles, and the Shepherd". "Only" is false as written (true only among the early Christian writings). Fix the sentence.

### T2 (major, same as the Barnabas review item 1). "An anonymous treatise, probably from Alexandria" in the Barnabas section of the same core contradicts Lake ("not possible to define either its destination, or the locality from which it was written") and the book's own Place row ("Unknown").

### T3 (minor). Unsourced generalizations in `apostolic-fathers.json`
"Their witness is valued by every church"; "Catholic and Orthodox readers find in them the order of bishops, elders and deacons handed down from the apostles, and many Protestant readers a church still close to the New Testament's own patterns"; "the oldest Christian writings outside the New Testament"; "They are the first to quote or echo the New Testament books". None has a source in the file; the last two overreach (Chapman's own page says 2 Peter 3:16 is the first place that calls Paul's letters Scripture, and the Didache and 1 Clement are not agreed to precede every other post-New-Testament writing).

### T4 (minor). `clement-of-rome.json`
Checks out: Irenaeus, Dionysius, Eusebius 3.15 and 3.34, Jerome 15, Hermas 2.4.3 (Lake vol. 2), Chapman on the legend and the Cyril relics (about 868), Lake's "famous man in his own time", the OCA date. Two small points: "Nineteenth-century scholars also tried to identify Clement with the consul" is Chapman's "in the middle of the nineteenth century it was the custom", so give Chapman; and the OCA row in `sources` should be dated to the page used (the file `oca-clement.txt` in the scratch folder is a different saint's page, Amphilokhios; the correct pages are `ocacl.html` and `oca25.html`, which I checked).

### T5 (minor). `works.json` entries
`ethiopic-clement` ("presented as Peter's teaching to Clement"): see item 10. `book-of-eldad-and-modad`: matches Lake (vol. 2, Hermas Vision 2.3.4 note; vol. 1 note on 23:3). Tier `other` is right (not named in the Bible as a book). "Apostolic Canons" and "Stichometry of Nicephorus" are cited throughout but have no works.json entry; add them if the site should mark those mentions.

---

## What I verified this session (and where)
- Opened and checked line by line: Lake vol. 1 introductions to 1 Clement and Barnabas (`.cache/dl/lake-ia/apostolicfathers01lake.txt`), Lake vol. 2 Hermas Vision 2.4.3; Eusebius 3.4.10, 3.15, 3.16, 3.18.5, 3.25, 3.34, 3.38, 4.22.1, 4.23.11, 6.13.6, 6.14.1 (local New Advent copies, and 3.16 and 3.25 refetched; 2.25.5 fetched); Irenaeus 3.3.3; Jerome 6 and 15; Clement of Alexandria Stromata 2.6, 2.15, 2.20, 4.17, 5.8 and 5.10; Origen, Against Celsus 1.63; Athanasius Festal Letter 39 (sections 5 and 7); Apostolic Canon 85; Trullo canon 2; Chapman, Reid and Ladeuze in the Catholic Encyclopedia; Westcott pp. 38, 446, 453, 522 and 458 (OCR); Swete lines 20830-20845; Lightfoot, The Christian Ministry, pp. 38 and 63 (the quotations hold); OCA life; EOTC list; Trent, Article VI, WCF, 1689 Confession, Nostra Aetate 4.
- Alexandrinus: one leaf lost from 1 Clement confirmed by Lake and by the Catholic Encyclopedia. Sinaiticus is mostly in the British Library (347 leaves), with 43 in Leipzig, fragments at St Catherine's and in St Petersburg (web search; no Wikipedia dependence).
- Not verified, and flagged: the Nicephorus Stichometry's placing of "Clement 1, 2" among the New Testament apocrypha (Westcott Appendix D; the OCR of that page is unusable and ntcanon.org refused the connection; web search confirmed only the antilegomena and the dispute about the list's date and origin); the Ratzinger/2002 sentence on the New Advent page; the "2nd ed." of Lightfoot.
- Terms and topics: 1 Clement's translated terms in the parts agree with `brief-apfathers.md` (overseer, deacon, layperson, resident alien, bore his witness, Almighty). All 29 `topics` ids exist. Lens names and keys match the brief; outline ranges match the last verse of each chapter in plain.txt (399 verses plus 1:0).
- Wikipedia link titles: `First Epistle of Clement`, `Apostolic Fathers`, `Codex Alexandrinus`, `Dionysius of Corinth`, `Titus Flavius Clemens (consul)`, `Apostolic succession` exist; `Pope Clement I` and `Basilica of San Clemente` redirect to existing pages.

## Fixes applied
Book-level review fixer, 2026-11-12 (files: `1Cl/book.json`, `1Cl/sources.json`, `proposals/works/topics/apostolic-fathers.json`, `clement-of-rome.json`, the 1Cl/Bnb section of `topics.md`, `works.json`; notes for the lead in `proposals/works/build.md`). Sources reopened this session: Westcott 1896 (pp. 446 and notes, 453, 458, 492, 522–523, 528–529, App. D 570–571 and 576), the NPNF Apostolic Canon 85 and Trullo canon 2, Reid and Chapman (live page refetched), Fenlon "Codex Alexandrinus" (CE 1908, fetched), Swete 1914, Lake vol. 1 introduction, Lightfoot 1890 vol. 2 (the witnesses; the note on 65:1), Cowley 1974 (copy at islamic-awareness.org), Abū al-Barakāt's catalogue (trans. McCollum, tertullian.org), Athanasius Festal Letter 39, Eusebius 3.16, 3.18, 3.38, 4.23, the OCA life and canon Q&A, the EOTC list, WCF and 1689 1.2–1.3.
1. Accepted. Apostolic Canon 85: no date in the site's voice; Westcott's "of no value ... probably dates from the sixth century" (446 n. 1) and "no conciliar sanction" (522 n. 5) given; the list quoted as it runs (New Testament books, then the two letters and the Constitutions, ending with Acts, no Revelation) in the canon section, rejected_why, the apostolic-fathers core and topics.md. The global key `apostolic-canon-85` ("Syria, about AD 380") is reported in build.md for the lead, not edited.
2. Accepted. Fenlon (CE 1908): the letters are in the codex's prefixed list of New Testament books and "seem to have been regarded by the scribe as part of the New Testament"; Swete's note on the final summary and 2 Clement cited (the key is now used); Westcott's sentence labeled as his judgment by "our own Church"; the Egyptian origin given as Fenlon's judgment, not fact (Wikipedia's Streeter/Monier report not used, ruling 6).
3. Accepted. The Orthodox row now states the tension: Reid's "identical with the Catholic"; canon 85 and Trullo's confirmation; Westcott's three remarks (no notice of the Clementine epistles; no conciliar sanction; the ratification not meant to fix the contents of Scripture). No current Orthodox statement naming 1 Clement was found (the OCA canon Q&A covers only the Old Testament), and the row says so.
4. Accepted. Coptic: Reid (1908) and Abū al-Barakāt (died 1324) both say the letters were counted with the New Testament; the row is renamed "Coptic Orthodox Church" and says exactly that, with dates, and that no present-day Coptic statement was found. Absolute phrases removed from the lead, summary, facts and how_to_read ("whatever your church", "in no church's Bible"). New row "Syriac and Armenian churches" (Lightfoot: Add. 1700 has the letters "incorporated among the Epistles of the New Testament" in the Harclean version; Reid names no Clementine letters for the Armenians; no church statement found). New Lutheran row (Westcott p. 492: no recognised definition or list; no Lutheran statement found). Tier `early` not changed: question for the lead in build.md.
5. Accepted. Unsourced Catholic/Orthodox/Protestant readings removed from reliability (4); "goes beyond" at 44:2 now quotes "added a rule" and says the word and the "they" are uncertain; lens O trimmed to the Catholic and Anglican readings the page gives.
6. Accepted. Chapman's "universally acknowledged" dated 1908 and attributed; the early-date holders named from Chapman (Grotius, Grabe, Orsi, Uhlhorn, Hefele, Wieseler; Volkmar and Baur for Hadrian, "not" Hilgenfeld); "Most" removed; Lake's 1912 "general agreement among critics" kept as his. The later Ratzinger/2002 sentence on the New Advent page is not Chapman's and has no source: not used, reported in build.md. No modern survey was opened, and the section says so.
7. Accepted. "Three men from Rome" removed (facts, audience, provenance; the image prompt now has two men). Lightfoot (vol. 2 on 65:1, opened): the wording "seems to separate Fortunatus", "perhaps not a Roman ... but a Corinthian"; 63:3 quoted from the Plain English Translation, without a number. Part 40-65's note title "Three Roman Christians" listed for the lead.
8. Accepted. Lightfoot's "first step towards papal domination" sentence added (vol. 1, p. 70, as Chapman quotes it; the live New Advent page was refetched because the scratch copy lacked it); Chapman labeled as the Catholic Encyclopedia (1908) in the section and the Catholic row; no Orthodox reading was opened, and the section says none is cited.
9. Accepted. Reformed and Baptist rows now say the confessions list the 27 books (1.2) and reject "the books commonly called Apocrypha" (1.3), and do not mention 1 Clement.
10. Accepted. Wikipedia removed (key `wiki-tewahedo-canon` deleted). Cowley (1974, opened): "a book in seven parts, communicated by Peter to Clement", "not the Roman or Corinthian correspondence"; the row and works.json `ethiopic-clement` use his words; the book's place in the EOTC list (after the Sirate Tsion, before the Didascalia) is stated from the list itself.
11. Accepted. Lake quoted exactly ("treason or impiety (ἀθεότης)", "Jewish proclivities", "There is no proof that he was really a Christian"); Chapman's "martyred" noted; Eusebius 3.18.5 (a niece) set against Lake and Dio (a wife), saying the sources do not settle whether one woman or two; the Claudius/Valerius point now credited to Lightfoot's note on 65:1, which was opened.
12. Accepted. "Almost unknown in the Latin Middle Ages" and "first read when A came to England" cut; the Latin version is now Lake's "may perhaps be best regarded as ... made in Rome"; the unsourced "used by Lightfoot in 1877" replaced by Lake's dates of publication.
13. Accepted. `wiki-codex-alexandrinus` removed; the lacuna (57:7 to the end of 63) and the lost end of 2 Clement now rest on Lake, Lightfoot (1890, vol. 2) and Fenlon.
14. Accepted. 5:4–7, 44:1–2, 59:1 and 63:3 are quoted from plain.txt by script (`.scratch/1Cl-book-fix/fix_1cl.py`, rerun at the end); "rash and headstrong", "with Fortunatus too", "the far limit of the West" and "added a rule" used elsewhere.
15. Accepted. "Danaids and Dirces", as in the parts.
16. Accepted. "Minority" dropped; Eusebius 3.38.2–3 quoted ("some say that the evangelist Luke, others that this Clement himself").
17. Accepted. Added envy, peace, phoenix, apostolic-succession, pride, agrapha, creation, repentance, rahab-of-jericho, job (each checked to exist).
18. Accepted. Spec 1 now names the overlap with the 1 Corinthians 15:23 note (checked: it cites 1 Clement 37 for the army picture); spec 2 says the commentators opened note the list and the seven imprisonments but do not join them. The count of seven rechecked against the verse list.
19. Accepted. "Sunday worship" replaced by Dionysius's own words and Eusebius's "custom from the beginning"; "about forty years before, if the letter is from the 90s".
20. Partly. No current calendar opened; the feast is given as Chapman's 1908 statement ("His feast is celebrated 23 November").
21. Accepted. The comparative "more secure than most" cut; Lightfoot's reading entry is now "(1890)" without "2nd ed." (the part key `lightfoot-clement-1890` still says "2nd ed.": listed for the lead).
22. Accepted. Chapman named for Rome and Spain; the note at 5:7 pointed to for the other readings.
23. Accepted. Shared keys defined once: `reid-canon-nt-ce`, `westcott-canon-survey` (description now lists the pages used), `clement-stromata-anf`, `lbc-1689-ch1` in 1Cl; `origen-celsus-1-63` removed from 1Cl (Barnabas only). `clement-stromata-anf` against the global `clement-stromata` left to the lead (build.md).
24. Accepted. Chapman and Duchesne kept only in "The great prayer".
25. Accepted. The Strassburg claim is given as Lake's wherever it appears (canon section, Coptic row).
T1. Accepted. Athanasius's full list for new believers given (Wisdom, Sirach, Esther, Judith, Tobit, the Teaching, the Shepherd) in the core, the canon section and rejected_why.
T2. Accepted. Barnabas section of the core: Ladeuze argues for Alexandria; Lake says only that "Alexandrian ideas prevailed" among the readers and that the place cannot be fixed; date in Lake's words.
T3. Accepted. "Valued by every church", the Catholic/Protestant generalization, "the oldest" and "the first to quote" removed; "earliest/oldest/first" claims also removed from 1 Clement's book.json (chapter 5, 47:1, the prayer, Judith; "oldest Greek manuscript" for A).
T4. Accepted. The nineteenth-century identification given as Chapman's ("it was the custom"; "the ancients never suggest this"); `oca-clement-rome` now carries the URL of the page used.
T5. Partly. `ethiopic-clement` rewritten from Cowley; `book-of-eldad-and-modad` now quotes Lake's note at 23:3 ("cannot be identified"; "Some think it is from the lost apocalypse of Eldad and Modad") instead of an unnamed "some think". works.json entries for the Apostolic Canons and the Nicephorus Stichometry not added (a shared-catalogue decision): listed for the lead in build.md.
