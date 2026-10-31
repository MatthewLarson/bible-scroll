# Hostile review: Wisdom of Solomon book-level files (book.json, sources.json)

Reviewed: `content/books/Wis/book.json` (all of it, including the `canon` block and the `solomon` card) and `content/books/Wis/sources.json`. Brief: `tools/brief-wis.md`; model: `content/books/2Ma/review-book.md`.

How I checked:
- A script pulled every quoted string out of book.json and looked for it in the four parts' `plain.txt` (for Wisdom) and in the Plain of the 66 books. Every quotation of Wisdom matches the current Plain word for word, and each is cited at the right verse (spot-checked by hand: 2:1, 2:12, 2:18, 2:24, 3:1, 3:8, 5:17-18, 7:1, 7:24, 7:26, 8:7, 8:20, 9:1, 9:5, 9:13, 9:15, 11:5, 11:16, 11:17, 13:5, 13:6, 13:8, 13:10, 15:7, 15:10, 16:20, 18:15). The quotations from Matthew 27:43, Hebrews 1:3, Romans 1:20, 1:23, 5:12, 9:21, 11:34, Colossians 1:15, 2 Corinthians 5:1 and 5:4, Ephesians 6:11 and 6:14, Acts 17:27 and 17:29, John 6:31 and Romans 3:2 match the current Plain.
- Greek: `texts/orig/Wis.json`, Swete's apparatus `texts/src/Wis.app.json`, and `tools/lxx.py find` (see "Verified").
- Church and source statements, opened in this session by web fetch: Catholic Encyclopedia (Gigot), Jewish Encyclopedia (Kohler), the USCCB introduction, Oesterley's introduction (the PDF at gospelstudies.org.uk, read as text), Augustine *City of God* 17.20 and *Predestination of the Saints*, Eusebius, Athanasius, Rufinus, Jerome's preface (Edgecomb), the Muratorian Fragment (Metzger), 1 Clement, Trent session 4, *Dei Filius*, Catechism 120, Dositheus, Philaret, Luther's preface, Belgic Confession art. 6, the 1689 Confession 1.3, the OCA readings for 9 Oct 2019, the Carthage 397 list, and the EOTC canon page. Article VI and Westminster 1.3 could not be reached this session; see "Not checked".
- `VERBOSE=1 node tools/build.js --check Wis`: **0 errors, 0 warnings** (436 verses, 304 notes, 58 variants, 155 glosses, 19 chapter pages, 60 topic contributions). All source keys resolve, all topics exist (`soul` through the works proposal), and there are no em-dashes.

## Verdict

This is careful work with an unusually honest tone. Wisdom is never called Scripture in the site's own voice, no church is ranked, the reliability analysis is labeled as Claude's, and every Wisdom quotation matches the Plain. Most church statements check out in an open text (Trent, Dositheus, Athanasius, Rufinus, Augustine, Belgic, 1689, 1 Clement, Eusebius, NAB, Catechism 120). The weak points are these. (1) One quotation of Jerome is changed inside quotation marks, and it contradicts the other Jerome quote on the same page. (2) The Ethiopian row rests on a source that never names Wisdom. (3) The dating rests on 1901-1918 encyclopedias and commentaries, and it leaves out the point in Oesterley's own introduction that pushes the earliest date later. It also names no one after 1918, though the book's own reading list recommends Winston. (4) The `cited_in` list omits links that the 66 books' notes already draw. (5) The authorship card shows Reformed and Lutheran "answers" that no confession gives, and it makes an agreement look like a disagreement. The rest is precision.

Findings: **0 critical, 5 major, 14 minor.**

## Verified

- **Greek facts.** `ἀπαύγασμα` occurs in Swete's Septuagint only at Wis 7:26, and `σκῆνος` only at Wis 9:15 (`tools/lxx.py find`, run over Job, Psalms, Proverbs, Sirach, Isaiah, Ecclesiastes, Song, 1-2 Maccabees and Wisdom). Wis 2:24 reads `θάνατος εἰσῆλθεν εἰς τὸν κόσμον`, the same phrase as Romans 5:12 (for "sin", not "death"). 2 Cor 5:1, 4 use `σκῆνος`, and the verb `βαρύνω` is in Wis 9:15 (`βαρύνει`). Swete's apparatus gives the inscription `σοφια Σαλωμωνος` for ℵ, A and B.
- **The Greek never names Egypt, Moses, Pharaoh, Aaron, Abraham, Noah, Adam, Cain, Sodom, Canaan, Israel, Jacob or Solomon** (accent-stripped search of all 436 verses). The only proper names are the Red Sea (10:18, 19:7). So the claim in section 6 and the `spec` is correct for the Greek. See finding 17 on the Plain.
- **Gigot (CE 1912).**
  - Solomonic authorship is "a literary fiction" (quoting Vigouroux), and Philo, Zorobabel, Aristobulus and Apollos are all named and dismissed.
  - "Ptolemy IV Philopator (221-204 B.C.), or Ptolemy VII Physicon (145-117 B.C.)", with "confessedly difficult to decide".
  - The Protestant objection on 8:19-20.
  - "Formless matter" is "a Platonic expression which in no way affirms the eternity of matter".
  - The Hebrews 1:3 and Matthew 27:42-43 parallels are listed.
- **Kohler (JE).** "About the middle of the first century B.C.", "very close to the Platonic wisdom", "part of a Passover Haggadah recited in Egypt", Graetz and the apotheosis of Caligula, "three independent parts", and Nachmanides's mention of a Hebrew version. All as reported.
- **NAB introduction (USCCB).** "Written about fifty years before the coming of Christ", "a time when they had experienced suffering and oppression", and the author is "probably a member of the Jewish community at Alexandria".
- **Oesterley (1918).** Eichhorn (one author, the second part written in youth) and Goodrick (one author, Solomonic chapters added later). Toy's "relatively simple and direct" against "ambitious, grandiloquent". Wisdom nearly silent in the second part. The indirect and direct action of God. Goodrick on Caligula and AD 41-44. Toy and Grimm answering. Gregg on the missing Philonian Logos. The LXX quotations at 2:12 (Isa 3:10) and 15:10 (Isa 44:20). The Greek prophets before 132 BC. Thackeray's "had at one time made a close study". Goodrick on the potter against Oesterley's "strongest verbal likeness". See findings 3 and 7 for what is left out or bent.
- **Augustine, *City of God* 17.20.** "The more learned have no doubt that they are not his", the Church "especially the Western" received them into authority, and "the passion of Christ is most openly prophesied". All verbatim. ***Predestination of the Saints* 27:** "from the station of the readers", "from bishops downwards". Chapter 28 has the Cyprian citation of Wis 4:11.
- **Eusebius.** HE 5.8.8 "almost the precise words of the Wisdom of Solomon" is verbatim. HE 5.26 has Irenaeus's volume of "various Dissertations", mentioning Hebrews and "the so-called Wisdom of Solomon", "making quotations".
- **Muratorian Fragment (Metzger).** "[The book of] Wisdom, written by the friends of Solomon in his honour". Tregelles's note on "Philo" misread as "friends". Dated by the writer to about 170 (see finding 15).
- **Athanasius, Festal 39.** "Appointed by the Fathers to be read by those who newly join us", and Wisdom is in the list. **Rufinus 38.** "Ecclesiastical", Wisdom named, "not appealed to for the confirmation of doctrine". **Jerome.** Philo named, "falsely ascribed" (ψευδεπίγραφος), "never among the Hebrews", "not for confirming the authority of ecclesiastical dogmas".
- **Trent session 4 (8 April 1546)** lists "Wisdom" and anathematizes. ***Dei Filius* ch. 2** has God as author and confirms Trent's list. **CCC 120** reads "the Wisdom of Solomon". **Dositheus Q3** has "genuine parts of Scripture" with "The Wisdom of Solomon" named. **Belgic art. 6** lists "Wisdom" and reads "as far as they agree with the canonical books". **1689 1.3** is quoted correctly. **1 Clement 3:4** and **27:5** (Lightfoot) are verbatim. **OCA, 9 Oct 2019,** lists Wis 3:1-9, 5:15-6:3 and 4:7-15.
- **Luther's preface** (via stilkunst.de). "lange zeit im zanck gestanden", "eine auslegung des ersten gebots", "wol werd, das mans lese", and "Philo dieses Buchs Meister" are all present, and rulers are the chief addressees. See finding 8.

## Findings

### Major

**1. A quotation of Jerome is altered inside quotation marks, and it contradicts the Jerome quote in `sections[1]`.**
- Location: `facts` "Original language" (and `canon.accepted_by` "Judaism", `provenance`).
- The text reads: Jerome wrote that it "was never among the Hebrews, the very style of which is redolent of Greek speech."
- Edgecomb's translation (tertullian.org, the translation the `jerome-preface-solomon` key names) reads "The second was never among the Hebrews, the very style of which reeks of Greek eloquence."
- `redolent of Greek speech` is not in it. Section 2 of the same book.json quotes "Greek eloquence", so the page quotes the same sentence two ways. I could not open fourthcentury.com, the second site named in sources.json, so I could not tell whether it words the sentence differently.
- Fix: quote Edgecomb exactly ("reeks of Greek eloquence"), or paraphrase without quotation marks. If the wording came from another translation, name that one.

**2. The Ethiopian row claims more than its source says.**
- Location: `canon.accepted_by[2]`, `facts` "Scripture for", `lead[2]` (by implication).
- The EOTC page (ethiopianorthodox.org, "The Canonical Books") lists 46 Old Testament books. Entry 26 is "Metsihafe Tibeb (the books of wisdom)", between Tegsats (Reproof) and Ecclesiastes. The Wisdom of Solomon is **not named anywhere** in that list; entry 45 is Sirach ("Joshua the son of Sirac").
- The row says the list "includes" Metsihafe Tibeb "beside Proverbs and Ecclesiastes" and files this under "Scripture" for Wisdom. The page does not say that Metsihafe Tibeb is the Wisdom of Solomon. A web search I ran could not settle what the term denotes (the only hit was an AI-flagged fact-check site, which I do not rely on).
- The row is headed "Ethiopian and Eritrean", but the source covers the Ethiopian church only. The "81-book" figure is the page's own, but the facts card also says it "counts its books of wisdom", which is vague.
- Fix: either open a source that names the Wisdom of Solomon in the Ethiopian canon (Cowley's 1974 article on the canon, or Daniel Assefa's chapter in the Oxford Handbook of the Bible in Orthodox Christianity, are what the search pointed to; I did not open either), or say plainly that the church's list has a "books of wisdom" entry that is generally taken to include Wisdom, and cite who takes it so. Drop "Eritrean" unless a source for the Eritrean church is opened.

**3. The date argument rests on old encyclopedias, leaves out a point in its own source, and names no scholar after 1918.**
- Location: `facts` "Date", `sections[4]` "When was it written?", `lenses[3]`, `provenance[0]`, `reliability.verdict`.
- Every dating authority is from 1901-1918: Kohler (JE, 1901-06), Gigot (CE, 1912), Goodrick (1913), Oesterley (1918), Grimm and Toy via Oesterley, Gregg (1909), plus the NAB's one line. The Ptolemy numbering "Ptolemy VII Physcon" is Gigot's own and is not the usual modern numbering. The task flagged this.
- **Omitted evidence.** Oesterley's own introduction (pp. xv-xvii) points out that Wisdom quotes the Greek **Job** (12:12 from Job 9:12, 19) as well as Isaiah. He says that because Job belongs to the third division, "a considerably later date as the earliest possible one, say somewhere about the beginning of the Christian era" is suggested. book.json says "the earliest limit is its use of the Greek Bible: the Greek of the Prophets existed before 132 BC" and "later than the Septuagint of Isaiah", and gives that as the floor. It omits the very passage that puts the floor higher. It also does not report that Oesterley lists 12:12 among the quotations (the Plain of 12:12 is a good match, "Who will say, 'What have you done?'").
- **Missing modern views.** The reading list recommends Winston (Anchor Bible, 1979), yet the date section never says what Winston holds. A web search I ran reports Winston dating the book to the reign of Caligula (AD 37-41), and Larcher to 31-10 BC. Both come from secondary pages (Wikipedia mirrors), not the commentaries, so I did not verify them. The recommended fix is to open the commentaries or a current survey (deSilva, *Introducing the Apocrypha*, is in the reading list) and report where the field stands.
- `lenses[3]` says "(most say the first century BC)" and `facts` says "Many put it in the last half of the first century BC". Neither names a modern count or survey. The only support is Kohler (c. 50 BC), Oesterley (no earlier than c. 50 BC for chapters 1-9) and the NAB (c. 50 BC).
- Fix: add the Job point and the modern commentators, each from an opened source. Soften "most" to what the sources support, or remove it.

**4. `cited_in` omits links the 66 books' own notes already draw.**
- Location: `canon.cited_in` (13 entries).
- The content of the site already cites Wisdom from these places, with verse numbers, and none appears in `cited_in`:
  - Matthew 10:15 with Wis 19:13-15 and 11:23-24 (Sodom; `Mat/parts/08-10/notes.json`).
  - Galatians 4:3, 9 `stoicheia` with Wis 7:17 and 13:2 (`Gal/parts/04-06`).
  - Galatians 5:19-21 and Mark 7:21-22 with Wis 14:25-26 (vice lists).
  - James 3:17 with Wis 7:22-23 and James 5:6 with Wis 2:10-20 (`Jas/notes.json`).
  - Matthew 19:12 with Wis 3:14 (`Mat/parts/19-23`).
  - Exodus 1 with Wis 18:5 (`Exo/parts/01-15/notes.json`).
  - 2 Peter 1:13-14 with Wis 9:15 (in `2Co/parts/01-05/notes.json`).
- A second gap that the first two cards invite: Wis 12:12 and Romans 9:20 ("Who will say to him, 'What have you done?'"); Wis 11:23 and Romans 2:4 (mercy leading to repentance); Wis 6:3 and Romans 13:1 (rulers' power from the Lord). I raise these as candidates to check against a cross-reference index. I did not open one this session, and I am not asserting them.
- The back-links in the 66 books' notes are the right model; `cited_in` should be at least a superset of them.
- Fix: add the entries above with honest strengths (most will be "shared tradition" or "disputed"), after reading each 66-book note.

**5. The authorship card shows answers no church gives, and it makes agreement look like conflict.**
- Location: `traditions[0]` (Catholic, Lutheran, Reformed rows).
- All three answers are "no" (Catholic "not necessarily", which the row itself says most Catholic scholars take as "no"). That is a consensus, not a conflict. The real differences between the traditions are about the book's *authority*, which the card says it leaves to Proverbs.
- **Reformed row.** It says "No", and the sources are the Belgic Confession and Westminster. Neither says anything about who wrote Wisdom. The "No" is the writer's inference, and "the question of the author settles nothing in its favor" is the writer's gloss. The row should say the Reformed confessions do not address authorship, or cite a Reformed writer who does.
- **Lutheran row.** The row's final sentence says that for Lutherans Luther's preface is "one reason it stands among the Apocrypha". The only source is Luther. No Lutheran confession or church-body statement was opened. Luther's preface says "the Fathers" separated it from Scripture, which is a different statement.
- **Catholic row.** "Most Catholic scholars say no" is supported by CE 1912 and the NAB. "Most" is unsupported beyond those two.
- Orthodox, Anglican and Jewish views are absent. If none is distinct, the card should say that the traditions agree on authorship and differ on canon, and point to the Proverbs card (it already does), instead of labelling three rows as a disagreement.

### Minor

**6. `spec[0]` contains a hedge that STYLE.md rule 2 forbids.** "Whether a published scholar has argued this, Claude has not checked." Either check (search the literature on the unnamed figures in Wisdom, which is a known topic) or delete the sentence and leave the theory labeled as Claude's.

**7. Oesterley is bent on two points.**
- `sections[4]`: "Oesterley put chapters 1-9 not much earlier than 50 BC." Oesterley says "we should hesitate to date them **earlier** than about B.C. 50", which is a floor, not "not much earlier". He also says chapters 10-19 were written "before the middle of the first century A.D."; the card omits it.
- The same bullet lists Gregg's "perhaps a century before Philo" under "The first century BC". Philo was born about 20 BC (Oesterley's own parenthesis), so "a century before" is the second century BC or the early first. Gregg's view belongs in its own bullet, or in the Ptolemaic one.

**8. The Luther audience view is half the story.**
- Location: `audience.views[2]` and `traditions[0]` Lutheran row.
- Luther's preface (stilkunst.de) says that some hold Philo to be the author, and he links the book to Philo's embassy to Caligula and the persecution of the Jews of Alexandria, which supports the "written under persecution" view that the card sets against Toy and Grimm. It also names tyrants ("Euch Tyrannen gelten meine Rede") and says the book is chiefly for the powerful. The card gives only the rulers reading.

**9. Carthage 397.** `accepted_by[0]` says Carthage "counted 'five books of Solomon'". The list does not name Wisdom, and the source's note explains the five as Proverbs, Ecclesiastes, Song, Wisdom and Ecclesiasticus. The same page says Hefele dates the compilation to 419 and that the text may derive from Hippo (393). Say "five books of Solomon (usually understood to include Wisdom and Sirach)" and drop the bare "Carthage (397)" or add the dating note.

**10. Philaret and the OCA are read a little further than the sources go.**
- Philaret Q31-35 name Sirach "and certain others" ("they do not exist in the Hebrew"). The Wisdom of Solomon is not named there. The Orthodox row, `lenses[1]` and `rejected_why[0]` imply that Philaret leaves out Wisdom. Say "Sirach and certain others unnamed".
- The OCA page lists the three Wisdom readings under 9 Oct 2019 and the commemoration of St. Tikhon (and James son of Alphaeus), but does not tie the readings to Tikhon. The Orthodox row says they are "the readings for the feast of St. Tikhon". Reword to "listed on the day of".

**11. "Late 100s" for the Muratorian Fragment** (`facts`, `authorship`, `provenance`). Metzger's page gives about 170 (the author calls Pius I's episcopate recent). I did not open a source on the other side of the debate (a later date for the fragment is argued), so I cannot confirm or refute it. Either label the date "traditionally dated about 170" or leave it to the source.

**12. Catholic Encyclopedia attributed too directly.** `traditions[0]` Catholic row: "The Catholic Encyclopedia (1912) called Solomon's authorship 'a literary fiction'". The phrase is Vigouroux's, quoted by Gigot (the article also says it is "freely admitted" that Solomon did not write it). Cite it as quoted by Gigot.

**13. "Rare words" overstates two of the five New Testament links.** `lead[2]` says Hebrews 1:3, Romans 1 and 9, Ephesians 6 and 2 Corinthians 5 "share rare words and images". `πανοπλία` (Eph 6 and Wis 5:17) is not rare in the Greek Bible; the cited_in entry correctly says both build on Isaiah 59:17. Say "words and images", and keep "rare" for `ἀπαύγασμα` and `σκῆνος`.

**14. Unsourced "later rabbis".** `lenses[4]` and `sections[5]`: the book is a retelling "that later rabbis also used" and "many of the book's details have parallels in the later rabbis' retellings". Kohler cites rabbinic parallels (Pirke R. Eliezer, Mekhilta) but does not call them later than the book or say the rabbis used Wisdom. Say "parallels in rabbinic retellings (Kohler)".

**15. "Most scholars" / "Catholic, Protestant and Jewish scholars agree" in `authorship[3]`.** Supported for Catholic (Gigot, NAB) and Jewish (Kohler) and by Oesterley (Anglican). No Protestant source beyond Oesterley is opened. Add one or reword to the scholars named.

**16. Catholic sentence on Hebrew original.** `facts` "Original language": "The Catholic Encyclopedia (1912) set aside the theory of a Hebrew original." Gigot reports that some scholars proposed it and that "it has been felt that not Hebrew but Greek was the original". "Set aside" is fine, but Gigot is also the only support. A modern commentator would make this stronger.

**17. Plain and book.json differ on whether Egypt is named.** The `spec`, `sections[5]` and the `canon` text say the writer never names Egypt (true in the Greek, see Verified). The Plain of 16:3, 18:1-2 and others reads "the Egyptians" where the Greek has pronouns, and the chapter headings read "Out of Egypt" and "Darkness over Egypt". That is a part-level choice, not a book.json error, but the sentence in `sections[5]` "The writer never names Moses, Pharaoh or Egypt" invites the reader to find the contradiction in the Plain. Add "the Plain adds the names the reader is meant to supply" to that section or to the part notes.

**18. Josephus and Rufinus dates not rechecked.** "Josephus (about AD 95)" and "Rufinus (about 404)" are standard dates, but I could not open a source this session (the Josephus text did not load; the Rufinus page has no date). Writer's `sources-checked.md` lists the pages but not the dates. Keep them only if a source is opened, or say "late first century" and "about the turn of the fifth century".

**19. sources.json.** `jerome-preface-solomon` gives "about AD 398" and "public domain". The tertullian.org page gives no date for the prologue, only the translation's date (2006). The "398" comes from the fourthcentury.com page title. State that the translation is by Edgecomb, "posted at", and drop "public domain" unless the translator's page says so. The other nine keys match what was opened.

## Not checked

- Article VI of the Thirty-Nine Articles and Westminster 1.3 (both URLs I tried returned 404 or a different document). The wording quoted in book.json matches the text I know, but I cannot confirm it from an open page this session. The 1689 text, which echoes Westminster, was confirmed.
- Josephus, *Against Apion* 1.38-41 (the page did not load), the Catechism's *Lectionary* counts (eight Sundays, 2:12 and 17-20 in Year B), the Orthodox Church's use of Wisdom at services beyond the OCA date, and the Catholic Encyclopedia's Hebrews/Romans parallels beyond Hebrews 1:3 and Matthew 27:42-43.
- Winston, Larcher and any commentary after 1918, for the reasons in finding 3.

## Fixes applied
1. Fixed, partly accepted. Both wordings are Edgecomb's: tertullian.org reads "reeks of Greek eloquence", fourthcentury.com "is redolent of Greek speech" (both opened). The page now quotes the tertullian.org wording everywhere ("Original language" names Edgecomb), and sources.json says which page is quoted and that the other differs.
2. Fixed. Opened Cowley, "The Biblical Canon of the Ethiopian Orthodox Church Today" (Ostkirchliche Studien 23, 1974, at islamic-awareness.org): Tebäb is "(Wisdom)" among the books of Solomon, and Wisdom is among the 14 books "listed as equally fully canonical" in the printed Ge'ez-Amharic and Amharic Bibles. The row cites the EOTC list and Cowley (existing key `cowley-ethiopian`), "Eritrean" is dropped, and "Scripture for" now says "as Tebäb, 'Wisdom' (Cowley, 1974)".
3. Fixed. The date section now gives Oesterley's three Greek quotations (2:12, 12:12 from Job 9:12, 19, 15:10) and his "beginning of the Christian era" floor for the Job point, both from the Oesterley text opened. Winston (1979) is added: Caligula's reign, single author (publisher's description opened at bestcommentaries.com; new key `winston-wisdom-ab`). Larcher and deSilva are left out because neither was opened. "Most say" is gone from lens H. Facts "Date" and provenance[0] name who holds each date. Gigot's king is given as "the king he calls Ptolemy VII Physicon".
4. Partly accepted. Read every New Testament note that cites Wisdom and added 37 cited_in entries (50 in all), each with its strength, Greek words checked in texts/orig and Swete. These cover all the links the reviewer names (Mat 10:15, Gal 4:3, Gal 5:19-21, Mark 7:21-22, Jas 3:17, Jas 5:6, Mat 19:12, 2 Pet 1:13-14) and the NT back-links found by a search of all notes. Rom 9:19-20 (with 12:12) and Rom 2:4 (with 11:23 and 15:1) are added from the Greek and the Romans notes, and Rom 13:1 is added with 6:3. Declined for Exodus 1 and the other Old Testament notes: Wisdom draws on those books, and they cannot cite it.
5. Fixed (lead decision 1). The authorship card is gone. Its sourced content is now the section "Who wrote it?": Augustine, Jerome, Luther's preface, Gigot quoting Vigouroux, the NAB, and Dei Filius 2 on God as author. It gives no Reformed or Lutheran "answer". sections[0] now points to that section.
6. Fixed. The hedge sentence is deleted, and the theory stays labeled as Claude's.
7. Fixed. Oesterley's floor is quoted exactly ("hesitate to date ... earlier than about B.C. 50"), and his limit for chapters 10-19 (before the middle of the first century AD) is added. Gregg has his own bullet, quoted exactly, with Oesterley's reply.
8. Fixed. The persecution view now includes Luther (checked in the stilkunst.de German): Philo's embassy to Caligula, and the book arising from it to frighten the persecutors and comfort the Jews. The rulers view quotes "Euch Tyrannen gelten meine Rede" and "Sonderlich aber solten es lesen die grossen Hansen".
9. Fixed. The Catholic row gives the Carthage list with Hefele's view that it was taken from Hippo (393) and Augustine's five books of Solomon, from the bible-researcher.com note.
10. Fixed. Philaret now reads "Sirach 'and certain others,' unnamed" (Q31 checked at sermonindex.net), in the Orthodox row, lens O and rejected_why[0]. The OCA readings are "for 9 October 2019, the day of the glorification of St. Tikhon" (the page links no reading to a saint), and lens O no longer claims "many saints' days". The unverified `ware-orthodox` key is removed from the row, and the sources.json entry is reworded.
11. Fixed. "A list Metzger dates to about 170" (the Metzger page gives about 170, from the mention of Pius I) replaces "late 100s" in facts and authorship.
12. Fixed. In the new section, "literary fiction" is quoted as Vigouroux's, quoted by Gigot, beside Gigot's "freely admitted".
13. Fixed. The lead now reads "words and images ... two of them words that the Greek Old Testament uses only in this book". The NT section reads "two of them rare", and "Greek Bible" is now "Septuagint" for ἀπαύγασμα (rechecked over all of Swete's LXX: only Wis 7:26; σκῆνος only Wis 9:15).
14. Fixed. "Later rabbis" is replaced by "parallels in rabbinic retellings (Kohler)" in lens J, sections and reliability[2]. Kohler's "part of a Passover Haggadah recited in Egypt" is quoted exactly.
15. Fixed. authorship[3] names its scholars (Gigot, Kohler, Oesterley, NAB) instead of "Catholic, Protestant and Jewish scholars agree", and adds Winston. The "One book or two?" section now quotes Toy exactly and drops the unsourced "others see one design".
16. Fixed. "Original language" quotes Gigot exactly and says it is his report. No modern commentator was opened, so none is added.
17. Fixed. The Exodus section now says the Greek never names Moses, Pharaoh or Egypt, and that the Plain writes "the Egyptians" where the Greek has only a pronoun (16:3; 18:1-2, both checked in the plain.txt and Greek as they stand now).
18. Fixed. The dates for Josephus, Rufinus, 1 Clement and Irenaeus are removed because none was found in an opened source; the NPNF page for Rufinus gives a different, doubtful date. The Josephus wording was checked in Whiston's text (lexundria.com), with "an exact succession of prophets" quoted exactly.
19. Fixed. `jerome-preface-solomon` gives Edgecomb (2006) at tertullian.org, whose page says "All material on this page is in the public domain", and notes that fourthcentury.com gives "c. A.D. 398" with slightly different wording. rejected_why credits the 398 date to that page.
Not-checked items: Article VI (churchofengland.org) and Westminster 1.3 (Schaff, ccel.org) were opened, and the wording on the page matches. The lectionary was checked at catholic-resources.org: eight Ordinary Time Sundays, including 1:13-15 with 2:23-24 and 2:12, 17-20 in Year B, and All Souls 3:1-9 and 4:7-15 (ending at v. 14 in the USA edition). The Dei Filius 2 wording was checked at papalencyclicals.net. Also changed: rejected_why[0] now rests on Westminster's proof texts (Rom 3:2; Luke 24:27, 44), not on "Protestants argue". rejected_why[2-3] state only what Luther, Gigot, Belgic, Westminster, Augustine, Trent, Dositheus and Dei Filius say. The unsourced "most readers" and "others" sentences are removed. The 13:1 card is no longer named in book.json, because the 11-15 fixer may drop it (lead decision 7).
