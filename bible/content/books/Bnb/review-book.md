# Hostile review: Epistle of Barnabas, book-level files (2026-11-12)

Scope: `content/books/Bnb/book.json` and `sources.json`, and the Barnabas parts of the proposals (`barnabas` section of `content/proposals/works/topics.md`, the Barnabas lines of `apostolic-fathers.json`). The 1 Clement files and the shared topic cores are reviewed in `content/books/1Cl/review-book.md`. Checked against `brief-apfathers.md` (with Lead decisions), `brief-bnb.md`, `agent-reviewer.md`, `agent-reviewer-works.md`, `canon-tiers`, the written part `parts/01-21`, `texts/orig/Bnb.json`, and sources opened this session (list at the end).

## Verdict

A careful, well-sourced book page. I found no invented source, reading or fragment, and the quotations from Lake, Ladeuze, the Jewish Encyclopedia, Westcott, Eusebius (3.25.4-6, 6.13.6, 6.14.1), Clement of Alexandria (Stromata 2.6, 2.15, 2.20, 5.8, 5.10), Origen (Against Celsus 1.63), Athanasius (Festal Letter 39), Nostra Aetate and bible-researcher.com's Claromontanus page all check against the opened texts. `--check Bnb` is 0 errors, 0 warnings. The problems are of a different kind: the book states Alexandria as "probable" in places while its own Place row says "Unknown" (and Lake says it cannot be defined); the "how each church answers" demand of the brief is met for the Catholic Church only, with a Reformation inference standing in for the rest; the two confessions are quoted for a sentence about the Apocrypha; the Orthodox row is a ninth-century list of disputed origin; the date is presented as narrower and firmer than the sources allow; and the Mishnah comparison for the sprinkling "boys" is not what Mishnah Parah says. Two small errors reach the reader: a Wikipedia link to the wrong page and a wording slip about Barnabas 4:9.

Findings: 0 critical, 6 major, 12 minor.

---

## Major

### 1. Alexandria is called "probable" while the book also says the place is unknown
Location: `canon.provenance` "A Christian teacher, about AD 100 to 130" ("The likeliest home is Alexandria ... (Lake; Ladeuze)"), `canon.reliability.sections` item 1 ("probably in Alexandria"), `facts` Place ("Unknown"), `apostolic-fathers.json` ("probably from Alexandria").
Lake (opened): "It is either a general treatise or was intended for some community in which Alexandrian ideas prevailed, though it is not possible to define either its destination, or the locality from which it was written, with any greater accuracy." Only Ladeuze argues for an Alexandrian writer (from the allegory and from the fact that "up to the fourth century only the Alexandrians were acquainted with it"). Lake does not say "likeliest home". The book cites Lake for it.
Fix: "Ladeuze argues for Alexandria; Lake says the place cannot be fixed, only that Alexandrian ideas prevailed among the readers." Use the same wording in the reliability section and in the shared core.

### 2. "How each church answers" is sourced for the Catholic Church only; "no church today holds these claims" is unsourced
Location: `lead` ¶2 ("No church teaches this today"), `canon.reliability.sections` item 4 "Conflicts", `canon.rejected_why` "Its teaching on Israel and the Law", `how_to_read` "Read its hard words honestly".
- `brief-bnb.md` (book.json): "The `reliability` section's point (4) must say plainly where Barnabas conflicts with the 66 books ..., and how each church answers, from sources." The book cites Nostra Aetate 4 (verified word for word: "the Jews should not be presented as rejected or accursed by God, as if this followed from the Holy Scriptures"; "God holds the Jews most dear for the sake of their Fathers; He does not repent of the gifts He makes"). For every other tradition it says: "the confessions of the Reformation, which take the Old Testament as the Word of God (Westminster Confession 1.2), leave no room for the claim that its commands were a deception." That is the writer's inference, not a statement by any Reformed text about Barnabas or Israel's covenant. No Orthodox, Lutheran, Anglican, Baptist or Ethiopian source on the question is cited.
- "No church today holds these claims" and "The churches today have rejected that teaching" are universal statements without a source per church. How Jews answer is a 1902 article (Toy and Kohler) only; the brief asks how Jews and today's churches answer.
Fix: add an opened source for at least the Orthodox and one Protestant family on the church and Israel (a statement on Romans 9-11 or on the Old Testament Law), or say which families no source was found for; relabel the Westminster sentence as the writer's inference, or delete it; limit the universal statements to what is sourced.

### 3. The Westminster and 1689 confessions are quoted for a sentence about the Apocrypha
Location: `canon.accepted_by` "Reformed and Presbyterian churches", "Baptist churches".
Both rows say that writings outside the canon are "no part of the canon of Scripture" and "to be used only 'as other human writings'" (Reformed) or "treats other writings the same way" (Baptist). In both documents (opened: WCF 1.3; 1689 LBC 1.3) that sentence reads "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon ...". Neither text addresses early Christian writings. Say so: they list the 27 books (section 2) and treat the Apocrypha as non-canonical (section 3). There is also no Lutheran row; the brief asks for "Lutheran and Reformed" (see the 1 Clement review, item 4).

### 4. The Eastern Orthodox row is a manuscript appendix of disputed date, presented as the church's position
Location: `canon.accepted_by` "Eastern Orthodox churches", `facts` Scripture for, `canon.rejected_why` "Rejected in the lists".
The row's only Orthodox-side evidence on Barnabas is "the Stichometry attached to the Chronography of Nicephorus ... (806–814)". Westcott (opened, p. 458) says it is "appended to the Chronographia" and "it is probable that he borrowed it as it stands from some earlier writer"; an online discussion found by web search (ntcanon.org) says its origin is not settled, perhaps Jerusalem, and whether it is older than 850 is open. The book hangs the patriarch's years on the list. Presented as an Orthodox church row, an appendix to a chronicle is not the church's teaching about Barnabas; the other source (Reid, 1908) is about the New Testament as a whole.
Fix: describe the Stichometry as a list of uncertain date attached to a ninth-century chronicle, separate from the row's statement of what the church counts; add an Orthodox source on Barnabas or say none was found.

### 5. Dating is presented as narrower and firmer than the sources, and a claim about the Temple is stated as fact
Location: `lead` ¶1 ("probably around AD 100 to 130"), `facts` Date ("after the destruction of the Temple in AD 70 (16:3–4)"), `canon.provenance` ("after the Temple's destruction in AD 70 and probably before the Bar Kokhba revolt of 132–135"), `canon.summary`.
- Lake (opened) gives two attempts and says "neither theory is quite satisfactory, but neither date is in itself impossible. The document no doubt belongs to the end of the first or beginning of the second century." He does not say "after AD 70". The ten-kings reading would put it "well within the limits of the first century", i.e. before 100. "AD 100 to 130" excludes Lake's first-century option and cuts off Ladeuze's 130-131 at the edge. (The range matches the global key `barnabas`, but that is no source.)
- "After the destruction of the Temple in AD 70" comes from Westcott's reading of 16:3-4 ("an allusion to the destruction of the Jewish Temple"), not from Lake. It is a reading of one verse, which the book itself says others take as the spiritual temple.
- "Probably before the Bar Kokhba revolt" is the writer's own inference. The Jewish Encyclopedia article the book cites (opened) reads the letter as a product of "the internal strife between the Paulinians and the Judæo-Christians, who still clung to the Jewish nation in its last struggle against Rome under Bar Kokba", which puts it in or after the revolt.
Fix: give the range as Lake's, name each dating with its holder (Lake; Ladeuze 130-131; the Jewish Encyclopedia, the revolt years), and put "after AD 70" under the 16:3-4 argument with Westcott.

### 6. The "boys who sprinkle" and the Mishnah comparison
Location: `outline` 7:1–8:7 ("the boys who sprinkle"), `canon.reliability.sections` item 3 ("for the boys who carry the heifer's ashes the Jewish Encyclopedia compares Mishnah Parah 3:3").
- The part (plain.txt 8:1, 8:3) says "children": Greek παιδία in 8:1, "οἱ ῥαντίζοντες παῖδες" in 8:3. The outline says "boys". The brief's term rule is "child or boy by context"; the two must match. 8:3's children are the twelve apostles, which "children" keeps.
- The Jewish Encyclopedia (opened) says the ashes "were taken up by boys, who sprinkled the people ... (compare Parah iii. 3)". Mishnah Parah 3:2-3 (Sefaria, fetched this session): children ride on oxen to the Shiloah spring and carry water in stone cups; in 3:3 Rabbi Yose has a child take the ashes and mix them into the water. So the Mishnah has children bringing water (and, for one view, mixing ashes), not boys carrying ashes and sprinkling the people. The book's sentence says "carry the heifer's ashes".
Fix: use "children" in the outline; say what Parah 3:2-3 actually has (children, water, the stone cups; Yose on the ashes) and that Barnabas's gathering of ashes and sprinkling are not in it, or leave the Mishnah out of the sentence; keep the Jewish Encyclopedia as its own claim with its own wording.

---

## Minor

### 7. Wrong link
`links`: `["Two Ways","Two Ways"]`. The Wikipedia title "Two Ways" redirects to an unrelated page ("Dva Puti, Dva Shliakhy", checked through the Wikipedia API this session). "The Two Ways" redirects to the Didache section. Use `Didache` or `The Two Ways`. The other titles (`Epistle of Barnabas`, `Barnabas`, `Codex Sinaiticus`, `Apostolic Fathers`, `Allegorical interpretation of the Bible`, `Supersessionism`) exist.

### 8. Wording slip about 4:9 and about "teacher"
`authorship` "What the letter says" says the writer states "twice ... that he writes not as a teacher but as one of them (1:8; 4:9)". 1:8 has "not as a teacher, but as one of you"; 4:9 has "not as a teacher, but as fits someone who loves you" (Greek checked); "as one of you" also stands at 4:6. `facts` Author says he "calls himself a teacher in all but name (1:8; 4:9)", which is not what those verses say; Ladeuze (opened) says the author had "exercised the office of a didaskalos" in the church (from 1:2, 4; 21:7, 9). Attribute that to Ladeuze.

### 9. "So women were among the readers"
`audience.to`: stated as fact from "sons and daughters" (1:1). It may be a generic address. Say "may".

### 10. "Nearly all scholars" and "often from memory"
`lead` ¶3 and `canon.summary`: "nearly all scholars agree" that Barnabas did not write it. Lake says "generally regarded as impossible to accept". Westcott says "unlikely". Use their words. `sections` "About this translation": "often from memory" says what the writer's process was; nobody knows (the part notes also say "probably summarizing from memory"). Say "freely, and sometimes joined".

### 11. Ladeuze's "unique point of view" is quoted without his correction
`canon.accepted_by` Catholic Church: "its literal denial of the Jewish rites 'represents a unique point of view in the struggle against Judaism' (Ladeuze)". Ladeuze's sentence begins "According to many scholars he teaches that ... the Jews never had a covenant with God, that circumcision was the work of the Devil, etc.; thus he represents a unique point of view", and the next sentence corrects it ("It might be said more exactly that he condemns the exercise of worship by the Jews in its entirety because ... the Jews did not know how to rise to the spiritual and typical meaning"). The section "The Jews and the covenant" gives this right; the row does not. Also label the source "Catholic Encyclopedia, 1907", not "the Church".

### 12. Claromontanus rests on an amateur site
`canon.rejected_why`, `facts`, `canon.provenance`: the Claromontanus list is sourced to bible-researcher.com, whose page itself says it reproduces the list from Westcott. I checked the page: Barnabas (850 lines) stands between Jude and Revelation, and the sentence "does not necessarily indicate that these were ever regarded as canonical books" is on it. Open Westcott's own pages (his Appendix D) or Metzger and cite them; give the date of the list and the manuscript (the manuscript is a Latin-Greek codex of the 6th century, but the list's own age is not stated in the book).

### 13. Romans 9:4-5 sits under kind `shared tradition`
`canon.cited_in`: the text says "Here the link is a conflict, not a borrowing", yet the card is labeled `shared tradition`. The build allows only quotation, allusion, shared tradition, disputed. If a conflict cannot be labeled, say so in the first words of `b` (it does), or drop the entry and keep the conflict in the reliability section.

### 14. "In Jerome's time it was read 'among the apocryphal writings'"
Jerome (opened): "which is reckoned among the apocryphal writings". "Read" is Westcott's word for the letter's use in Jerome's time. Attribute each.

### 15. Topic list
`topics` omits topics the part contributes to or the brief names: `abortion`, `satan`, `angels`, `new-creation`, `servant-of-the-lord`, `jacob`, `joseph`, `daniel`, `enoch`. All 29 listed ids exist.

### 16. The Plain English Translation could be quoted where the page paraphrases
The key verses are paraphrased in the book's words: 4:6-8 (the covenant "theirs and ours", lost at Sinai), 9:4 ("an evil angel misled them" in the lead; plain.txt "an evil angel was leading them on with clever lies"), 15:9, 16:3-4. Quote them from plain.txt (exactly) once each, in the section where the page argues from them.

### 17. Spec boxes and rule 4
Both boxes say "I have not found this ... in the sources checked". Rule 4 asks where they overlap published scholarship. The first (Exodus 32 and Exodus 34) should say whether Paul's and Barnabas's use of the tablets has been compared by others; the second (the two halves) overlaps the long-standing debate in Lake and the Jewish Encyclopedia about whether the Two Ways was added to the letter. The second box names that debate and then says the writer found the idea unargued; reconcile.

### 18. Source file duplicates
`Bnb/sources.json` defines `clement-stromata-anf`, `origen-celsus-1-63`, `reid-canon-nt-ce`, `westcott-canon-survey`, `lbc-1689-ch1` identically to `1Cl/sources.json` (and `origen-celsus-1-63` is used only here). Define each once.

---

## What I verified, and what I could not

- Lake's introduction to Barnabas (`.cache/dl/lake-ia/apostolicfathers01lake.txt`): anonymous; "impossible to accept"; Alexandrian ideas; the evil angel; the two dating attempts (his "chap. vi" is the ten kings of 4:4-5, as the brief said); ℵ, C, the eight G manuscripts, Latin to 17; "canonical in some circles"; Clement as Scripture; Origen's Catholic Epistle; Sinaiticus "following immediately after the Apocalypse". All in the book as Lake says.
- Ladeuze (CE 1907) quotations: "not always familiar with the Mosaic rites", "impossible to believe", "peaceful speculations of a catechist", "only in the abstract", "very free one", "not regarded by everyone as an inspired writing", "exaggerated allegory", 130-131, the didaskalos. All hold.
- Jewish Encyclopedia (Toy and Kohler): "astonishing familiarity", "anti-Judaic spirit of great bitterness", Güdemann's "converted Jew", the Two Ways "attached ... by some copyist at a much later time", Tischendorf 1862 and Bryennios 1875, the Hadrian article on 16:4 ("interpretation is disputed among scholars"). All hold.
- Westcott: "Apostolicity is more than questionable", "very naturally be attributed to the 'Apostle'", Origen and Eusebius silent, the Stichometria, and "In Jerome's time it was still read among the Apocryphal Scriptures" (p. 522 and ch. 1).
- Eusebius 3.25.4-6, 6.13.6, 6.14.1; Clement of Alexandria and Origen as above; Athanasius sections 5 and 7 name neither Barnabas nor Clement.
- Sinaiticus: Barnabas and then Hermas follow the New Testament (Lake; Ladeuze); the manuscript is mostly in the British Library (347 leaves), with 43 in Leipzig and fragments at St Catherine's and St Petersburg (web search; not from Wikipedia). Lake (1912) says "now at St. Petersburg", which is out of date and the book does not repeat it.
- Claromontanus order and the 850 lines (bible-researcher.com page, opened).
- Chapters 8:1, 8:3, 4:4-5, 4:9, 1:8, 15:9, 16:4, 18:1 of plain.txt against the Greek: consistent with what book.json says, apart from the items above. Outline ranges match the last verse of each chapter (194 verses).
- Not verified: the Nicephorus list's contents beyond Barnabas among the antilegomena (confirmed by web search); the Ethiopian list's absence of Barnabas rests on the one list opened (ethiopianorthodox.org, 35 New Testament books).

## Fixes applied
Book-level review fixer, 2026-11-12 (files: `Bnb/book.json`, `Bnb/sources.json`; the Barnabas lines of `apostolic-fathers.json` and `topics.md` are logged under 1 Clement's review, T2). Sources reopened this session: Lake vol. 1 introduction to Barnabas, Ladeuze (CE 1907), the Jewish Encyclopedia articles (Barnabas; Hadrian), Westcott 1896 (ch. 1 §4; pp. 458, 492, 522–523, 528–529; App. D 570–571, 576), Mishnah Parah 3:2–3 (Sefaria, Kulp's translation), the ELCA Declaration to the Jewish Community (1994, full text at the Jewish Virtual Library), Reid (CE 1908), the confessions, and plain.txt of part 01-21. Verse quotes are inserted by script (`.scratch/Bnb-book-fix/fix_bnb.py`, rerun at the end).
1. Accepted. "Probable"/"likeliest" Alexandria removed from provenance, reliability (1) and the shared core: Ladeuze argues for Alexandria; Lake says the readers were a community "in which Alexandrian ideas prevailed" and that the place cannot be defined (quoted in the Alexandria section).
2. Accepted. Reliability (4) now ends "How the churches answer": Nostra Aetate 4 (Catholic) and the ELCA declaration (1994, quoted: anti-Semitism "a contradiction and an affront to the Gospel", noting it does not discuss Barnabas or the covenant); for the Orthodox, Ethiopian, Anglican, Reformed and Baptist churches the page says no statement addressing these claims was found. The Westminster inference deleted; "No church teaches this today" (lead), "No church today holds these claims" and "The churches today have rejected that teaching" replaced by what the two sourced churches say.
3. Accepted. Reformed and Baptist rows say the confessions list the 27 books (1.2) and reject "the books commonly called Apocrypha" (1.3) without mentioning Barnabas. Lutheran row added (Westcott p. 492; no Lutheran statement on Barnabas found; ELCA 1994 on anti-Judaism).
4. Accepted. Orthodox row: Reid's statement first, then "no Orthodox church statement that names the Epistle of Barnabas" found; the Stichometry described as a table of books appended to a ninth-century chronicle, not a church decision, with Westcott's "probable that he borrowed it as it stands from some earlier writer" (458).
5. Accepted. Date given as Lake's range in the lead, facts, summary, provenance and the core; each dating with its holder (Lake's two arguments, with "well within the limits of the first century"; Ladeuze 130–131; the Jewish Encyclopedia and the Bar Kokhba years); "after AD 70" now Westcott's reading of 16:3–4 ("an allusion to the destruction of the Jewish Temple"); the writer's "probably before the Bar Kokhba revolt" cut. 16:4 quoted from the Plain English Translation.
6. Accepted. Outline says "children who sprinkle"; reliability (3) now quotes the Jewish Encyclopedia as its own claim and says what Parah 3:2–3 has (children, the Shiloah water, stone cups, a child putting the ashes in the water) and does not have (children gathering ashes into jars or sprinkling the people).
7. Accepted. Link changed to "The Two Ways" (checked with the Wikipedia API: redirects to the Didache article's section; "Two Ways" goes to an unrelated page).
8. Accepted. Authorship row now gives 1:8 ("but as one of you") and 4:9 ("but as fits someone who loves you") and 4:6; the facts row credits Ladeuze for the didaskalos inference (1:2, 4; 21:7, 9).
9. Accepted. "So women may have been among the readers."
10. Accepted. "Nearly all scholars" and "like most scholars" replaced by Lake's "generally regarded as impossible to accept" and Westcott's "unlikely"; "often from memory" replaced by "freely, and sometimes joining".
11. Accepted. Catholic row gives Ladeuze's "according to many scholars ... unique point of view" with his correction ("It might be said more exactly ..."), labeled Catholic Encyclopedia (1907).
12. Accepted. Claromontanus now from Westcott's own pages (528–529: the list "obviously imperfect and corrupt", its ending quoted, "no more than tables of contents"; App. D 576: Barnabas between Jude and the Revelation of John, with Tischendorf's note that the marks before Barnabas and three other books are by a fairly late hand). `bible-researcher-claromontanus` no longer cited. The age of the list and of the manuscript is not given, since no opened source states it.
13. Declined. The build allows only quotation, allusion, shared tradition and disputed; `b` already opens "Here the link is a conflict, not a borrowing", and the conflict is also in reliability (4).
14. Accepted. Jerome quoted ("is reckoned among the apocryphal writings"); "read" credited to Westcott ("in Jerome's time it was still read among the Apocryphal Scriptures").
15. Accepted. Added abortion, satan, angels, new-creation, servant-of-the-lord, jacob, joseph, daniel, enoch (each checked to exist).
16. Accepted. 9:4 (lead), 4:7 and 4:8 (the covenant section), 15:9 (reliability 1) and 16:4 (dating) quoted from plain.txt; 4:6 and 9:4 partly quoted in its words.
17. Accepted. Spec 1 says the writers opened (Lake, Ladeuze, Westcott, the Jewish Encyclopedia) do not compare the two scenes; spec 2 names the published debate over the Two Ways and says only the question-and-answer reading is the writer's.
18. Accepted. `clement-stromata-anf`, `reid-canon-nt-ce`, `westcott-canon-survey`, `lbc-1689-ch1` removed from Bnb/sources.json (defined once, in 1Cl); `origen-celsus-1-63` kept here only. `wiki-codex-sinaiticus` removed (ruling 6): Sinaiticus is now "published by Tischendorf in 1862" (Jewish Encyclopedia) with Barnabas and the Shepherd after the New Testament (Ladeuze; Lake), and the British Library location is cut.
Also, under ruling 6: "the earliest writers to quote it", "one of the first places ... introduced as Scripture", "one of the oldest Christian moral catechisms", the unsourced "collections of proof texts" inference (1 Peter card), "Historians of every school", the claim that the letter "helped shape centuries of Christian contempt", and "no church that knew the book made it part of its New Testament" (contradicted by Lake's "canonical in some circles") removed or reworded.
