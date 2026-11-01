# Hostile review: 3 Maccabees book-level files (book.json, sources.json)

Reviewed: `content/books/3Ma/book.json` (title through reading, the traditions card "Is 3 Maccabees Scripture?", and the whole `canon` block) and `content/books/3Ma/sources.json`. Tier `orth`; brief `tools/brief-3ma.md`; model `content/books/2Ma/review-book.md`.

Checked against:
- A script took every quoted string in book.json and looked for it in the current `plain.txt` of both parts (01-03, 04-07). All 3 Maccabees quotations match word for word and sit at the verse cited (1:9, 1:11, 2:2, 2:22, 2:25, 2:28-30, 3:3, 4:14-21, 5:11, 5:28, 6:18, 6:28, 7:6, 7:9, 7:11-15, 7:23). The quotations of the 66 match the current Plain English Translation: Hebrews 9:7 and 11:33-34, Revelation 13:16, Galatians 6:17, Esther 3:8, 6:1 and 9:22, Deuteronomy 17:6, Romans 12:19. The 2 Maccabees quotation ("very beautiful in their glory") matches 2Ma 3:26. I also checked the cited verses of Daniel, Leviticus, 1 Kings, Acts, Jeremiah, Ezekiel, 2 Kings, Psalms and Proverbs against the Plain English Translation.
- The part variants and notes, `content/proposals/works/terms.json`, `works.json` (name "3 Maccabees", tier orth, book 3Ma: correct), and the brief.
- Sources I opened in this session:
  - the Emmet introduction in APOT vol. 1 (`.scratch/bar-book/dl/apot1.txt`, lines about 16545-17290);
  - Swete's Introduction (CCEL text in the writer's scratch folder);
  - Catholic Encyclopedia, Reid "Apocrypha" and Bechtel "Machabees";
  - Apostolic Canons 85 and Trullo canon 2 (New Advent);
  - Polybius 5.79-87 (Paton, Perseus text);
  - Josephus, *Against Apion* 2.5 (Whiston, juchre.org);
  - the NRSV Apocrypha introduction (oremus);
  - the Orthodox Study Bible front matter (writer's scratch text);
  - the ethiopianorthodox.org list;
  - Wikipedia "3 Maccabees";
  - the Bible Hub pages (Cambridge Bible and JFB on Revelation 13:16; Pulpit Commentary on Galatians 6:17; Vincent on Hebrews 11:33).
- Where I could not open a source, I say so.

`cd bible && VERBOSE=1 node tools/build.js --check 3Ma` gives **0 errors, 0 warnings** (228 verses, 151 notes, 34 variants, 82 glosses, 7 chapter pages, 29 topic contributions). There are no em-dashes in book.json or sources.json. Every source key resolves. `eotc-canon-list` is defined in `Wis/sources.json`, not in 3Ma's file, and its text is generic enough to serve both books (see finding 5).

## Verdict

This is careful, readable work, and its honesty is good. In the site's own voice 3 Maccabees is never called Scripture without saying for whom. The reliability analysis is labeled as Claude's and keeps the four parts without ranking any church. Every 3 Maccabees quotation matches the current Plain English Translation. The history is sound: Polybius at 5.79-86 (73 elephants, Theodotus killing the physician Andreas, Arsinoe riding the line, "crowns, sacrifices, altars"), and Josephus at *Against Apion* 2.5 ("naked and in bonds", "do with good reason celebrate this day") are quoted accurately. Emmet's introduction supports what is credited to him: the Hibeh papyrus, Theodoret, the Liturgy of St Clement, the Claromontanus stichometry, the Peshitta and Armenian versions, "over 100" rare words, "entirely credible", and no messianic hope or future life. I found nothing invented.

The weak points are these:
- **The Orthodox row is flatter than its own sources.** The Orthodox Study Bible says the Orthodox Church has never officially fixed one list. The Russian Synodal Bible marks the book non-canonical.
- **The Plain English Translation is described wrongly.** The book-level page says the Plain English Translation follows Swete and that 2:1 comes from Brenton. The parts follow Rahlfs for 2:1 and 1:19, and Venetus at 2:5 and 7:20-22.
- **Two cited_in links have no source.** They sit under "Where the Bible refers to it".
- **The Syriac and Armenian rows rest on a 1913 manuscript description and Wikipedia**, not on those churches.
- **The Ethiopian row sends a reader to a church list that really does say "III Maccabees"**, with no word on why that is another book.
- **The Apostolic Canons key names the wrong edition.**

Findings: **0 critical, 6 major, 14 minor.**

## Verified

All of the following were checked in this session.
- **Apostolic Canon 85** (Percival, NPNF 2.14, New Advent fathers/3820): "Let the following books be counted venerable and sacred by all of you, both clergy and laity ... of the Maccabees, three"; "[some texts read of Judith, one]"; Sirach "recommended to teach your young". The quotations are correct.
- **Trullo canon 2:** it ratifies "the eighty-five canons" and, in the same canon, the councils of Laodicea and Carthage and the lists of Athanasius and others. Carthage names two books of Maccabees, and Laodicea and Athanasius name none. The claim in the canon block is correct.
- **NRSV Apocrypha introduction** (bible.oremus.org/nrsvae/apocrypha-intro.html): the books from 1 Esdras through 3 Maccabees "are recognized as Deuterocanonical Scripture by the Greek and the Russian Churches", and "4 Maccabees appears in an appendix to the Greek Bible." Correct. The site drops the word "Deuterocanonical" without saying so. Not an error, but see finding 1.
- **Orthodox Study Bible front matter:**
  - 3 Maccabees follows 2 Maccabees, before Psalms, in the OT list.
  - The order is taken from "The Old Testament According to the Seventy ... Holy Synod of the Church of Greece ... first edition ... June, 1928".
  - The same page says: "the Orthodox Church has never officially committed itself to a single text and list of Old Testament books" (finding 1).
- **Emmet (APOT 1, §§3-9):**
  - The Peshitta "free and expanded rendering"; the Armenian "probably A.D. 400-600 ... most MSS. of the Armenian Bible".
  - The Aristeas links (including Aristeas 99).
  - "Entirely credible and probably has some foundation in fact".
  - "There are no references to the Messianic hope, or apocalyptic ideas, or the future life", and the angels "not seen by the Jews".
  - Titles of God found nowhere else in the LXX.
  - Theodoret "ad Dan. xi", and Swete's note on the Liturgy of St Clement (finding 8).
  - The "Hibeh P. 90" sentence, "a Dositheus son of Drimylus is found as an Alexander priest of 222 B.C." (finding 9).
  - The Claromontanus stichometry and "attestation is entirely Eastern".
  - "Wendland and Thackeray, 100-80 B.C." (finding 12).
- **Swete's Introduction:**
  - Mahaffy's "cannot be an invention".
  - The title *Ptolemaica*, and Wendland and Thackeray taking it to mean Aristeas.
  - Thackeray "c. 80 B.C."
  - Ewald, Hausrath and Reuss for Caligula.
  - Sinaiticus passing from the first book to the fourth.
- **Catholic Encyclopedia.** Reid: "a very weak piece of fiction", "abounds in absurdities and psychological impossibilities", "cannot be earlier than the first century B.C.", the Syrian Church "the first to give it a friendly reception", and "seems never to have been known to the Latins". Bechtel: the third "no doubt owes its name to the fact that like the others it treats of a persecution of the Jews". Note that the title explanation is Bechtel's, not Reid's (finding 13).
- **Polybius 5.79-87** (Paton): 73 elephants; Theodotus kills the physician Andreas, and the king was sleeping outside the principal tent; Arsinoe is with Ptolemy on the ride along the line; and "honouring Ptolemy with crowns, sacrifices, altars dedicated to him" (5.86). The reference to Jerusalem is absent, as the site says. Polybius 5.87 has Ptolemy three months in Syria and Phoenicia.
- **Josephus, *Against Apion* 2.5 (Whiston):** the Onias and Dositheus sentence, "exposed them naked and in bonds to his elephants", the drunk elephants turning on his friends, the "terrible ghost", the concubine "Ithaca ... Irene", and "the Alexandrian Jews do with good reason celebrate this day". The quotations are exact.
- **Commentary links** (Bible Hub):
  - The Cambridge Bible on Revelation 13:16: "In the so-called Third Book of Maccabees (which, stupid as it is, has perhaps some historical foundation) ... Ptolemy Philopator ordered the Jews of Alexandria to be branded with an ivy-leaf".
  - JFB on Revelation 13:16: "(2 Maccabees 6:7; 3 Maccabees 2:29)", though JFB attributes the brand to Antiochus Epiphanes.
  - The Pulpit Commentary on Galatians 6:17: "3Macc. 2:29 ... rather as a barbarous indignity ... than as an actual consecration".
- **Wikipedia "3 Maccabees":** the dating schools (Bickerman, Anderson, Johnson; Hadas, Tcherikover, Orian; Ewald, Willrich, Collins); Armenian Apostolic and Syriac Orthodox "count it as deuterocanon"; the Moravian Brethren; and the Alexandrinus and Sinaiticus claims.
- **deSilva, *Introducing the Apocrypha*, 2nd ed. (2018):** chapter 16 is 3 Maccabees.
- **Could not open:**
  - The Coptic diocese Q&A (qid 1503) returned 404 on my fetch. A search snippet shows the reader's question, which assumes 3 and 4 Maccabees are not canonical for the Coptic Church. The quotation "is not considered a canonical book by our church" is in the writer's checked list (`.scratch/3ma-book/sources-checked.md`), but I could not see the reply myself.
  - Tcherikover's *Zion* abstract.
  - The Dositheus Confession and OCA pages (checked by the writer in `sources-checked.md`).

## Findings

### Major

**1. Major: the Orthodox row says "Yes" and "Scripture for" more flatly than its own sources allow (lead "Who reads it as Scripture"; facts "Scripture for"; lenses "O"; traditions card "Orthodox"; canon.summary and accepted_by "Eastern Orthodox churches"; how_to_read "Know what you are reading").**
- *What the sources say.*
  - The Orthodox Study Bible front matter (cited as `osb-2008`) says "the Orthodox Church has never officially committed itself to a single text and list of Old Testament books".
  - The Russian Synodal Bible prints 3 Maccabees, but a Moscow Patriarchate edition from 1968 marks such books as non-canonical (an asterisk and a note). I found this only in secondary sources (Wikipedia, "Russian Synodal Bible", and a scholarly review that web search returned). It needs a primary check before it is stated outright.
  - Canon 85 also lists "two Epistles of Clement" and Clement's *Constitutions* among the books "venerable and sacred", and it lacks Wisdom, Tobit and Baruch. No Orthodox church holds that whole list, so the canon cannot stand alone as the Orthodox answer.
  - The NRSV says "Deuterocanonical Scripture" for the Greek and Russian churches. The site turns this into plain "Scripture".
- *Where it matters.* The card row and the canon page say "Yes", and the lead and the facts line call it Scripture for "the Eastern Orthodox churches" as a body. The rejected_why section "The Eastern lists themselves disagree" does give part of the picture, but the card and the facts line never reach it.
- *Fix:*
  - Make the card row read: "Yes, in practice: the book is printed in the Greek Old Testament and the Orthodox Study Bible, but the Orthodox Church has never fixed one list (OSB front matter), and Russian editions mark the book non-canonical (once opened and checked)."
  - Add the OSB sentence as a quotation.
  - Add to the Orthodox row that canon 85 also lists the Clementine writings.
  - Keep the NRSV word "Deuterocanonical" in quotation marks.
  - Make the same change in the lead, the facts line and how_to_read.

**2. Major: "About this translation" describes the base text wrongly (sections, "About this translation"; canon.provenance "The Greek witnesses").**
- *What the site says:* the Plain English Translation is translated from Swete's Greek, "who follows Codex Alexandrinus"; Swete's text "has no verse 2:1 ... which Brenton's English of 1851 has; the Plain English Translation supplies it"; "Brenton was used to check the sense".
- *What the parts did:*
  - 2:1 is translated from **Rahlfs** (1935, "read in its digital text"), and the variant says Brenton "has the same verse".
  - The Plain English Translation follows Rahlfs at 1:19 (the wedding rooms; the three variants at 1:18-19).
  - It follows Venetus at 2:5 and 7:20-22.
  - `progress.md` records all of this.
- *Result:*
  - A reader of the book page is told that Swete (Alexandrinus) is the whole base, with Brenton as a check.
  - Rahlfs is not mentioned, and `rahlfs-lxx` is in neither book.json `s` nor 3Ma/sources.json.
  - The Plain English Translation is not a Swete text at 2:1.
  - This is a provenance misstatement on the page that tells readers what the translation is.
- *Fix:*
  - Write: "Base text: Swete (Codex Alexandrinus). The Plain English Translation departs from Swete at 1:19 and 2:1 (Rahlfs, 1935), and at 2:5 and 7:20-22 (Codex Venetus); each is a variant note."
  - Add `rahlfs-lxx` to sources and to `s`. Check that the key exists in the global sources.
  - Keep Brenton as the English check text.

**3. Major: two of the four cited_in links have no source, and they sit under "Where the Bible refers to it" (canon.cited_in: Hebrews 9:7 at 1:11; Hebrews 11:33-34 at 6:6).**
- *The test the other two pass.* Revelation 13:16-17 and Galatians 6:17 each name a commentary that cites 3 Maccabees 2:29: the Cambridge Bible and JFB for Revelation, and the Pulpit Commentary for Galatians. I verified all three on Bible Hub.
- *The two that fail.* Hebrews 9:7 and Hebrews 11:33-34 carry `"s": []`. No commentary is cited that connects either verse to 3 Maccabees. I looked at Vincent on Hebrews 11:33 and Ellicott on 11:34: Vincent points to Daniel and 1 Maccabees 2:60, and Ellicott points to the Maccabean period in general. Neither names 3 Maccabees.
- *What they are.* The text admits it ("Hebrews does not cite 3 Maccabees"; "a shared way of telling Israel's history, not dependence"). That honesty is right. But the writer's own comparison of Leviticus 16 with Hebrews 9:7 is not "the Bible refers to the book", and the brief asks that cited_in links be "real" and "honestly graded".
- *Related gap.* The parts' own notes draw Hebrews 11:35 (3:27, *apotympanizo*) and Hebrews 11:36 (5:22, *empaigmos*), and Revelation 19:1 (7:13, *hallelu-yah*). cited_in omits them.
- *Fix:* move the two sourceless entries into the reliability §4 "Agrees" list, where Hebrews 9:7 already appears. If the writer wants them kept in cited_in, find a commentator for each, as was done for the others. Add the Hebrews 11:35-36 words only with a source.

**4. Major: the Syriac and Armenian claims rest on a manuscript description and Wikipedia, not on those churches (facts "Scripture for" and "Surviving in"; traditions card "Oriental Orthodox"; canon.accepted_by "Syriac and Armenian churches"; summary).**
- *The claim.* "It stands in the Bibles of some other Eastern churches (the Syriac and Armenian)" appears in the site's own voice, and the accepted_by row is headed "Read in their Bibles".
- *The evidence.*
  - Emmet (1913) describes a Syriac version in the Peshitta and an Armenian version "found in most MSS. of the Armenian Bible". That is about manuscripts, not about the churches' canons.
  - Wikipedia says the Armenian Apostolic Church and the Syriac Orthodox Church "count it as deuterocanon".
  - The Catholic Encyclopedia says the Syrian Church "was the first to give it a friendly reception", "presumably on the strength of its mention in the Apostolic Constitutions", and Reid presents that as his guess.
  - No source from those churches is cited, and the book's own brief says each church's practice must be "checked".
- *Coptic.* The Coptic row rests on one diocesan Q&A answer, presented as "The Coptic Orthodox Church does not count it". I could not open the answer (finding above), so I cannot confirm that the quotation is complete or that it speaks for the church and not for the diocese's writer. It is also a United States diocese page, not a synod statement.
- *Fix:*
  - Soften the facts line to "found in Syriac and Armenian manuscripts of the Bible; the Armenian Apostolic and Syriac Orthodox churches are listed as counting it (Wikipedia)".
  - Find an Armenian or Syriac Orthodox source for the books' standing, or mark the rows "not checked against those churches' own statements" in the site's voice and not as a hedge in the claim.
  - Attribute the Coptic quotation to "the Coptic Orthodox Diocese of the Southern United States".

**5. Major: the Ethiopian row sends the reader to a church list that appears to contradict it (traditions card "Ethiopian Orthodox"; canon.accepted_by; facts "Scripture for"; how_to_read; sources `eotc-canon-list`, `wiki-meqabyan`).**
- *What the cited list says.* I fetched ethiopianorthodox.org: OT item 20 is "I Maccabees" and item 21 is "II and III Maccabees". The page never uses the word Meqabyan.
- *What the site says.* "Not this book. Their list ... includes three books of 'Maccabees', but these are the Meqabyan, entirely different". The first sentence of the row says the list includes "books of 'Maccabees'", which is true. The second sentence, that these are Meqabyan, rests only on Wikipedia ("entirely different in their scope, content and subject").
- *Why it matters.* A reader who opens the cited church list sees "III Maccabees" and no explanation. That looks like the claim "the Ethiopian church does not have this book" being contradicted by its own source. The identification is almost certainly right, but it is a conclusion drawn by the site and attributed to the list.
- *Also.* Both keys are shared. `eotc-canon-list` is Wisdom's key (46 OT and 35 NT books) and is fine as a bibliographic entry, but 3Ma needs one more line saying what the list shows for Maccabees.
- *Fix:*
  - Rewrite the row as: "The church's own list names 'I Maccabees' and 'II and III Maccabees'. These are the Meqabyan, three books in Ge'ez that have nothing in common with the Greek books (Wikipedia, 'Meqabyan'; one independent source needed)."
  - Add one scholarly source, such as the Ethiopic book entry in the *Encyclopaedia Aethiopica* or a Metzger passage. I did not open one.
  - Make sure the statement "Ethiopian and Eritrean Orthodox churches (whose Meqabyan are other books)" is marked as the site's identification.

**6. Major: `apostolic-canons-anf` names the wrong edition (sources.json).**
- *What the key says.* "*The Apostolic Canons*, canon 85, in *Ante-Nicene Fathers*, vol. 7, ed. A. Roberts and J. Donaldson (1886), on newadvent.org/fathers/3820.htm".
- *What the page is.* The page at fathers/3820 closes with "Translated by Henry Percival. From Nicene and Post-Nicene Fathers, Second Series, Vol. 14. Edited by Philip Schaff and Wace (1900)." It is NPNF 2.14, not ANF 7. ANF 7 has a different translation of the canons, with different wording.
- *Why it matters.* The quotations "of the Maccabees, three" and "venerable and sacred" come from Percival's text. The key must name the edition the words come from.
- *Fix:* "*The Apostolic Canons*, canon 85, trans. Henry Percival, in *Nicene and Post-Nicene Fathers*, series 2, vol. 14 (1900), on newadvent.org/fathers/3820.htm". Rename the key if the build allows, or keep the key and fix the text.

### Minor

**7. Minor: hedge phrases in content (STYLE rule 2).**
- reliability §3: "The Orthodox churches have made no ruling on these questions that we could find". "That we could find" is a hedge. State only what was checked: "I found no ruling from an Orthodox church on these questions in the sources opened".
- authorship, provenance and sections use "Emmet reports" seven times and "as Emmet" three times. These are allowed, because I read Emmet's report (the Hibeh, Theodoret, Peshitta, Armenian and Swete-Liturgy sentences are all in his introduction). They are acceptable as they stand. In places the construction reads as a hedge ("a Dositheus ... is known from a papyrus of 222 BC (as Emmet reports)"); say "Emmet, citing Hibeh Papyrus 90".

**8. Minor: the Liturgy of St Clement sentence is a report of a report (canon.provenance "Early versions and use").**
- The text says "Swete noted (as Emmet reports) that the Liturgy of St. Clement joins words of Isaiah 57:15 with the opening of Simon's prayer (2:2)".
- Emmet says "Swete calls attention to an interesting combination of Isa. lvii. 15 with 3 Macc. ii. 2 in the Liturgy of St. Clement". I could not find it in the Swete chapter the writer opened.
- I looked at the Clementine liturgy in the Apostolic Constitutions (8.11 in the New Advent text) and found a related phrase: "who dwellest on high, the Holy One, that restest among the saints ... the only Potentate". That is close to Isaiah 57:15 and to 3 Maccabees 2:2, but it is not a verified quotation of the book, and I did not read the whole page.
- *Fix:* either cut the sentence, or write "Emmet cites Swete for a combination of Isaiah 57:15 with 3 Maccabees 2:2 in the Liturgy of St Clement" and drop "Swete noted". The Theodoret sentence is verified in Emmet ("ad Dan. xi") and can stay.

**9. Minor: Hibeh Papyrus 90 under "What fits" (canon.reliability §3).**
- Verified as Emmet's wording: "In the Hibeh P. 90 and elsewhere a Dositheus son of Drimylus is found as an Alexander priest of 222 B.C." Not checked in the papyrus edition; I found no independent source (my web search found only one commentary note and no text of the papyrus).
- Emmet's own use is different from the site's. He says the writer "apparently identifies the two" men (Josephus's Jewish general Dositheus and the papyrus priest) and "turns the son of Drimylus into a renegade Jew". Nothing says that the papyrus man was a Jew. Putting it under "What fits", as if the papyrus confirmed the book's Dositheus, overstates it.
- *Fix:* "Emmet notes that a Dositheus son of Drimylus is found in Hibeh Papyrus 90 as priest of Alexander in 222 BC, and thinks the writer borrowed the name and made him a renegade Jew." Do the same in sections "History or story".

**10. Minor: Lutheran and Baptist views (canon.accepted_by "Reformed, Lutheran and other Protestant churches"; traditions card).**
- The row is headed "Reformed, Lutheran and other Protestant churches" but cites only Westminster 1.3. No Lutheran source is given, and nothing for the Baptist view.
- The 2 Maccabees card has Lutheran and Reformed rows, each with its own source.
- *Fix:* either split the row and give Luther's Bible or the Lutheran confessions (opened and checked), or narrow the heading to "Reformed and other Protestant churches". Do not claim the Lutheran position without a source.

**11. Minor: "probably" and "if that is what the list means" for *Ptolemaica* disagree (canon.provenance "Early versions and use" against sections "Why is it called 'Maccabees'?").**
- provenance says the book appears "probably in the Synopsis of pseudo-Athanasius under the name *Ptolemaica*".
- sections says the title is that "if that is what the list ... means by that word; Wendland and Thackeray thought it meant the Letter of Aristeas instead". Emmet notes that Syncellus cites Aristeas as *Ptolemaica*, and that the Synopsis reading depends on Credner's emendation, with Zahn's *polemika* as another.
- *Fix:* in provenance say "the Synopsis of pseudo-Athanasius lists a *Ptolemaica*, which some take to be this book and others the Letter of Aristeas".

**12. Minor: smaller attribution and date slips.**
- Thackeray's date: facts, authorship and provenance say "about 80 BC". Swete quotes Thackeray "c. 80 B.C." but Emmet's footnote gives "Wendland and Thackeray, 100-80 B.C." Fine as Swete's figure, but say whose.
- "Ewald and Grimm thought the opening was lost" (authorship). Emmet: "a fragment of a larger work (Ewald, Fritzsche), or ... the opening has been lost (Grimm)". Two views, wrongly merged.
- Venetus date: book.json says 700s. The part variants say "700s-800s". Wikipedia says 8th-9th century. Use one form.
- Brenton: the page says "1851", and the shared key `brenton-lxx` says "(1844)". The OSB front matter says Brenton was "published in 1851". Align the key.
- Swete is "Swete (1912)" in the page and "1887-1894; revised 1907-1912" in the key. Fine, but say "the 1912 revision".

**13. Minor: the title explanation is credited to the wrong Catholic Encyclopedia article (sections "Why is it called 'Maccabees'?").**
- "The Catholic Encyclopedia suggested it got the name because, like the others, it tells of a persecution." That sentence is Bechtel's ("Machabees, The Books of", 1910), not Reid's "Apocrypha" article, which the key `reid-apocrypha-ce` names. Bechtel is in the page's `s` list and the Catholic row, so the fix is wording only.
- *Fix:* "The Catholic Encyclopedia (Bechtel) suggested ..." and keep Reid for "a very weak piece of fiction".

**14. Minor: a missing Josephus parallel (sections "History or story"; "Names and words to know").**
- Emmet's discussion, and Josephus at *Against Apion* 2.48-49, say that Ptolemy Euergetes, after conquering Syria, came to Jerusalem and sacrificed to God instead of to the Egyptian gods. This is a close neighbor of 1:9 (the king "sacrificed to the faithful God").
- *Fix:* one sentence in "History or story". I opened the passage in Whiston's translation, which has Euergetes "the third of those Ptolemies".

**15. Minor: Hadas and the census (audience.views "A protest against a census").**
- "Tcherikover and Moses Hadas read the census ... as a coded protest ... which counted those who paid the poll tax and lowered the standing of many Jews." The Orion abstract for Tcherikover supports "Augustan census for poll-tax payers" and "the spirit of national revolt in Palestine". Hadas is named only as an Augustan-date supporter in Wikipedia. The "coded protest" and the "lowered standing" are not shown for Hadas in anything opened.
- *Fix:* credit Tcherikover alone for the protest reading, and name Hadas only as dating the book with him (Wikipedia).

**16. Minor: "no Gentile may go in" rests on one reading (canon.cited_in Hebrews 9:7; reliability §4 "Agrees"; how_to_read).**
- The variant at 1:11 says Alexandrinus has "no Gentile" and Venetus and Rahlfs have "no one of our nation" (so no Jew), and that the second may be older. The cited_in text and §4 state the Gentile rule as the book's. The lead's quoted words (the high priest "only one time each year") are the same in both readings, so no harm to those.
- *Fix:* either drop "no Gentile" from the book.json statements, or add "(Alexandrinus; Venetus and Rahlfs read 'no one of our nation')".

**17. Minor: Heliodorus "heavenly riders" (sections, "3 Maccabees beside Esther, 2 Maccabees and the Letter of Aristeas").**
- 2 Maccabees 3:25 has one horse and rider, and 3:26 has two young men. "Struck down by heavenly riders and two young men" says more than the text. The quotation "very beautiful in their glory" is exact.
- *Fix:* "a horseman and two young men".

**18. Minor: Lucianic text and the Syriac (facts "Surviving in").**
- "Some with a Lucianic text" is correct for the Greek cursives (Emmet: manuscripts 19, 64 and others). Wikipedia says the Peshitta version is "notably Lucianic in character"; Emmet says it sometimes agrees with the Lucianic text. The facts line does not say which, and the Syriac sentence ("a free Syriac version") is brief. Add "and the Syriac sometimes agrees with it (Emmet)".

**19. Minor: back-pointers from the 66 books.**
- Revelation's topics page already names 3 Maccabees 2:29. Galatians 6:17, Hebrews 9:7, Hebrews 11 and Revelation 13:16 in their own notes do not. (Revelation is edited through the overlay.) Report to the owners of Galatians and Hebrews. Daniel 11, Wisdom 14 and 1 Esdras already point back.

**20. Minor: Esther comparison (sections).**
- Additions B and E: "the second letter blames the king's advisers and calls the Jews children of the living God (compare 6:28; 7:6)". The site's Esther variant at 8:12 says the Jews "are children of the Most High, the most mighty living God", which fits. Fine; no change except to cite the Esther variant note's wording ("Most High, the most mighty living God") and not "living God" alone.

## Fixes applied

1. Fixed. The Orthodox row now says what the sources say (lead decision 1): printed in Orthodox Bibles (OSB) and counted in Apostolic Canon 85, but "the Orthodox Church has never officially committed itself to a single text and list of Old Testament books" (OSB, quoted in the lead, facts, lens O, card, canon summary, accepted_by, rejected_why and how_to_read). The NRSV is now quoted with its word "Deuterocanonical Scripture". Canon 85's Clementine books are named, with Trullo canon 2's rejection of the Constitutions (both reopened on New Advent). Reid's "admitted into the canon of the Greek Church" added. The Russian Synodal non-canonical marking is left out: I could not open a primary source for it (Russian searches and azbyka.ru gave nothing), so only the NRSV's sentence on the Russian Church remains, quoted. "How the Orthodox answer" rewritten from the OSB, OCA and Dositheus texts only (the Dositheus Q3 text reopened on catholicity.elcore.net); unsourced claims about how Orthodox readers treat the story removed, and the audience view "Orthodox readers" dropped for the same reason.
2. Fixed. "About this translation" now names Swete as the base text, the "Swete's text" variants, and each departure as the parts have them now (re-read just before finishing): 1:19, 2:5, 2:20, 3:4, 5:32, 5:43 and 7:20-21; 7:22 is back on Swete, with Rahlfs cited as Rahlfs (`rahlfs-lxx` added to `s` and canon `s`); 2:1 is described as not in Swete, A or V and given in square brackets. The facts "Length" line, provenance "The Greek witnesses" and reliability §2 say the same. Brenton is cited with the parts' key `brenton-1851` (1851, as the OSB says) in place of `brenton-lxx`.
3. Fixed. Hebrews 9:7 and Hebrews 11:33-34 moved out of cited_in into reliability §4 "Agrees", with their quotations and the note that Hebrews does not cite the book. I found no commentary for Hebrews 11:35-36 or Revelation 19:1 that names 3 Maccabees in the pages opened, so they are not added. Added instead, with a source opened now: Acts 22:28 (Pulpit Commentary cites 3:21 for <i>politeia</i>), and the Pulpit Commentary on Revelation 13:16 (cites 2:29) beside the Cambridge Bible and JFB; JFB's misattribution to Antiochus is now stated.
4. Fixed. Wikipedia removed (lead decision 3). The Syriac and Armenian rows now state only what Emmet says about the versions and manuscripts, and Reid's "presumably" guess, with "This page has no statement from these churches themselves on the book's standing today." The Coptic row is attributed to the Diocese of the Southern United States; I opened the answer this session (qid 1503) and quote its full sentence ("There is no reason for you not to read it as long as you understand that it is not considered a canonical book by our church"), and add its remark that the Coptic Church did not take part in the 1672 synod.
5. Fixed. The Ethiopian row now quotes the church list as it stands ("I Maccabees", "II and III Maccabees", rechecked on ethiopianorthodox.org) and gives the identification from Cowley 1974 (`cowley-ethiopian`, opened now): the Mäqabeyan "are not the same as any of the 4 LXX books of Maccabees", with his summary of the three books. `wiki-meqabyan` deleted. `eotc-canon-list` kept as Wisdom defines it.
6. Fixed. The key is renamed `apostolic-canons-npnf` and names Percival's translation in NPNF series 2, vol. 14 (1900), as the New Advent page says (reopened). `apostolic-canons-anf` deleted from sources.json; no other book used it.
7. Fixed. "that we could find" removed (§3 now: "None of the Orthodox sources opened for this page rules on these questions"). Every "as Emmet reports" / "Emmet reports" reworded as a plain attribution ("according to Emmet", "Emmet notes", "Emmet dates") after rereading Emmet's introduction in APOT 1.
8. Fixed. Now "Emmet cites Swete for a combination of Isaiah 57:15 with 3 Maccabees 2:2 in the Liturgy of St. Clement"; "Swete noted" dropped. Theodoret kept, attributed to Emmet ("ad Dan. xi").
9. Fixed. Hibeh Papyrus 90 moved from "What fits" to "What does not" in §3 and reworded in "History or story" as Emmet's note and inference ("thinks the writer borrowed the name ... and made him a renegade Jew"), adding that nothing shows the papyrus official was a Jew.
10. Fixed. The row is narrowed to "Reformed and other Protestant churches"; no Lutheran claim is made. The Moravian sentence (Wikipedia only) removed. The KJV-Apocrypha claim rechecked on the eBible KJV contents (1 and 2 Maccabees only) and the Westminster 1.3 quotation rechecked.
11. Fixed. Provenance now: "The Synopsis of pseudo-Athanasius lists a Ptolemaica, which some take to be this book and others the Letter of Aristeas (Swete; Emmet)"; the title section gives Swete's suggestion, Credner's emendation, Wendland and Thackeray, and Syncellus (all from Swete's and Emmet's notes).
12. Fixed: Thackeray's date now "Swete quotes Thackeray for about 80 BC, and Emmet gives Wendland and Thackeray as 100-80 BC"; Ewald, Fritzsche and Grimm separated as Emmet has them; Venetus "700s-800s AD" and Alexandrinus "400s AD" from Swete's own table (opened on Bible Hub), matching the parts; Brenton 1851 via `brenton-1851` (the shared `brenton-lxx` key with "(1844)" is in 1Ch's sources.json, outside my files: for the lead); "Swete (1912)" dropped from the page, which now names his edition without a year.
13. Fixed. The title explanation is credited to Bechtel and quoted; Reid keeps "a very weak piece of fiction" and "abounds in absurdities", now named.
14. Fixed. One sentence added to "History or story": Ptolemy Euergetes, after taking Syria, came to Jerusalem and "offered many sacrifices to God" (Against Apion 2.48, Whiston on lexundria, opened now), compared with 1:9.
15. Fixed. The census view credits Tcherikover alone, from the English summary of his article (Orion bibliography, opened now: an extraordinary Augustan poll-tax census, the threat to civic status, the spirit of national revolt). Hadas, Bickerman, Anderson and Johnson removed (Wikipedia only); the Date fact now names only Emmet, Thackeray, Wendland, Tcherikover, and Ewald, Hausrath and Reuss (Swete). "About 25 to 15 BC" and "about AD 40" removed as unsourced.
16. Fixed. The provenance sentence on Leviticus 16 now adds that Alexandrinus reads "no Gentile" and Venetus "no one of the nation" (pointing to the variant at 1:11); the Hebrews comparison in §4 speaks only of the high priest once a year.
17. Fixed. "a horse and its rider and two young men" (2 Maccabees 3:25-26 Plain English Translation checked).
18. Fixed. Facts and "Early versions and use" now say the Syriac sometimes agrees with the Lucianic text (Emmet).
19. Not a change to my files: for the lead (back-pointers from Galatians 6:17, Hebrews 9:7, Hebrews 11:33-34, Revelation 13:16 and now Acts 22:28 to 3 Maccabees).
20. Fixed. The Esther comparison now quotes Addition E as the site's Esther variant at 8:12 has it ("children of the Most High, the most mighty living God") and names who is blamed in each letter (Haman; the king's Friends, 7:3).

Also, beyond the findings (lead decisions 3-4, 8, 10, 12): every fact kept was rechecked in a source opened in this session (Emmet in APOT 1; Swete's Introduction, including his manuscript table; Reid and Bechtel; Apostolic Canons 85; Trullo canon 2; Laodicea 60, Athanasius Letter 39 and Carthage 419, which confirm the lists lack 3 Maccabees; Polybius 5.81-86, where the 73 elephants are now cited as 5.82 (40 + 33) and Theodotus comes "just before daybreak"; Josephus Against Apion 2.48-55; the Letter of Aristeas 12-27, 99 in APOT 2; the OSB front matter; the NRSV introduction; OCA; Dositheus; deSilva's contents, now "chapter 16", with the unchecked "by a Protestant scholar" removed). "Late 300s" for the Apostolic Canons, "Philo" (`philo-embassy`), the unsourced claims about synagogues reading the Septuagint, and "left no trace among the rabbis" (now Emmet's "every ancient reference is Christian") were removed. The festival is stated as the book's claim (lead decision 8). The Song of the Three is called one of the Greek additions to Daniel (decision 10). The lens O and J sentences now rest on the OSB and on Emmet (decision 12). The 3 Maccabees quotations at 1:9, 2:22 and 5:28 were updated to the parts' current Plain English Translation. `wiki-3macc` and `wiki-meqabyan` deleted from sources.json; book.json now cites no Wikipedia.

Lead note applied after the parts finished: Physcon is now "Ptolemy VIII (Physcon)" throughout book.json, with Emmet's numbering (IX) noted once, in "History or story". The 5:28 quotation now reads "God, Master over all, was at work in this", and every 3 Maccabees quotation in book.json was rechecked by script against both parts' current plain.txt.
