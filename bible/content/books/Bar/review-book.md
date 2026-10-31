# Hostile review: Baruch book-level files (book.json, sources.json)

Reviewed: `content/books/Bar/book.json` (title, subtitle, lead, facts, authorship, audience, outline, lenses, sections, spec, prompts, topics, links, reading, and the whole `canon` block) and `content/books/Bar/sources.json`. This covers Baruch 1-5 and the Letter of Jeremiah (chapter 6), tier dc.

Checked against:
- the parts' current Plain (`parts/01-05/plain.txt`, `parts/06-06/plain.txt`). A script took every quoted phrase in book.json and looked for it in those files and in the Plain of the 66 books and 2 Maccabees. Every Baruch quotation that is meant to be Baruch Plain matches word for word and is cited at the right verse (1:2, 1:15, 3:29-30, 3:36, 3:38, 4:1, 4:7, 6:3, 6:14, 6:43, 6:69, 6:71 and the rest). The 66-book quotations match the current Plain: Romans 10:6, John 1:14, John 3:13, 1 Corinthians 10:20, Revelation 9:20, Matthew 8:11, Jeremiah 43:6, Jeremiah 41:5, Jeremiah 51:61, Isaiah 43:5, Daniel 5:23, Romans 3:2, 1 Chronicles 6:13-15, Nehemiah 12:10 and 12:26, 2 Kings 25:18, and 2 Maccabees 2:2;
- the primary and secondary texts the claims rest on, which I opened in this session (see "Verified");
- the Jeremiah book card "Are Baruch and the Letter of Jeremiah part of the Bible?" (`content/books/Jer/book.json`), `content/works.json` and the proposals, and `tools/build.js` for the `"book": "Bar", "c": 6` entry.

`cd bible && VERBOSE=1 node tools/build.js --check Bar` gives **0 errors, 0 warnings** (213 verses, 160 notes, 17 variants, 65 glosses, 6 chapter pages, 30 topic contributions). The build accepts the lead's `letter-of-jeremiah` entry with `"book": "Bar", "c": 6` (build.js lines 209, 498, 503), so content/proposals/works/build.md is resolved. There are no em-dashes in book.json. Work names match works.json (Psalms of Solomon, Letter of Jeremiah, 4 Baruch, Sirach). All source keys resolve.

## Verdict

This is careful, well-sourced work. The site never calls Baruch or the Letter Scripture in its own voice. The churches are shown side by side without ranking. The reliability section is labeled as Claude's analysis and keeps its four parts. The `cited_in` strengths are honest: five of the six links are "shared tradition", and the writer says plainly that Paul and John do not quote Baruch. Almost every church and patristic claim checks out in an open text, and most scholarly attributions are accurate (Whitehouse, Harwell, Ball, Toy, Gigot, Adams). The weak points are few but real:
- one source is given more weight than its own scholars allow (Apostolic Constitutions 5.20 as proof that Jews read Baruch);
- Jerome is credited with a remark that the cited preface does not contain;
- an Adams sentence about the Letter is stretched to cover Baruch (Sinaiticus);
- Dositheus is shown as leaving Baruch out, when the same sentence adopts the Laodicea list that includes it.

The rest is precision: unsupported or misassigned attributions, a source key that does not match the claim, a few unsourced generalizations, and long sentences in the lead.

Findings: **0 critical, 4 major, 17 minor.**

## Verified

All of the following were checked in an open text this session. Where I opened only a secondary page, I say so.
- **Athanasius, Festal Letter 39** (newadvent 2806039): "Jeremiah with Baruch, Lamentations, and the epistle, one book". Verbatim.
- **Cyril of Jerusalem, Catechesis 4.35** (newadvent 310104): "of Jeremiah one, including Baruch and Lamentations and the Epistle". Matches the "same" claim.
- **Laodicea canon 60** (newadvent 3806): "Jeremiah, and Baruch, the Lamentations, and the Epistle"; the editor's note "of most questionable genuineness" is there. The date (about 363) is within the editors' stated range.
- **Eusebius, Church History 6.25** (newadvent 250106): Origen's list has "Jeremiah, with Lamentations and the epistle in one" and does not name Baruch.
- **Apostolic Constitutions 5.20** (newadvent 07155): "on the tenth day of the month Gorpiæus ... they read the Lamentations of Jeremiah ... and Baruch, in whom it is written, This is our God". See finding 1 for what it does not prove.
- **Irenaeus, Against Heresies 5.35.1**: "Jeremiah the prophet has pointed out". Verbatim, followed by Baruch 4:36 ff.
- **Cyprian, Testimonies 2.6** (heading "That Christ is God"): Baruch 3:35-37 (KJV numbers) is quoted "in Jeremiah", with "After this He was seen upon earth".
- **Hippolytus, Against Noetus 2 and 5**: Noetus's followers use "This is our God", and Hippolytus answers by reading it of the Son.
- **Trent, Session 4** (papalencyclicals.net): "Isaias, Jeremias, with Baruch"; "entire with all their parts, as they have been used to be read in the Catholic Church, and as they are contained in the old Latin vulgate edition"; "let him be anathema". The session is dated the eighth day of April. **CCC 120**: "Jeremiah, Lamentations, Baruch, Ezekiel". **Dei Verbum 11-12**: "variously historical, prophetic, poetic" and "that truth which God wanted put into sacred writings ... for the sake of salvation". Verbatim.
- **Article VI** and **Westminster 1.3**: confirmed by search results only (the Church of England page did not load in full). The quoted phrases ("as Hierome saith", "for example of life and instruction of manners", "to establish any doctrine", "Baruch the Prophet", "commonly called Apocrypha ... no part of the canon ... of no authority") match the several reprints found. I did not open the 1689 London Confession.
- **Dositheus** (crivoice.org, Q3): lists Wisdom, Judith, Tobit, Dragon, Susanna, Maccabees and Sirach, and does not name Baruch. See finding 4. **Philaret** (sermonindex, Q31-35): "19, of Jeremiah" in the 22. **OCA Q&A**: "the Prophecy of Baruch" among books "accepted by Orthodox Christianity as canonical scripture". **OCA readings, 24 December 2026**: "Jeremiah (Baruch 3:35-4:4)" twice. The Easter Vigil sixth reading "Baruch 3:9-15, 32-4:4" is confirmed by search; book.json gives no source key for it (finding 19).
- **Cowley 1974** (islamic-awareness.org transcription): Baruch is among the 14 further books counted in the 81. "The accepted text of Jeremiah 1-52 is followed by Baruch (5 chapters, but shorter than the LXX text), and Säqoqawä Eremyas." That book holds Lamentations (5 chapters), "the epistle to the captives (Lam. 6)", the prophecy against Pashhur (Lam. 7:1-5) and 4 Baruch. See finding 16.
- **Bava Batra 14b** (Sefaria): order of the Prophets Joshua and Judges, Samuel and Kings, Jeremiah and Ezekiel, Isaiah and the Twelve. **Megillah 16b** (Sefaria): "for as long as Baruch ben Neriah was alive in Babylonia, Ezra, who was his disciple, did not leave him". Both as stated.
- **Jerome, Preface to Jeremiah** (tertullian.org, Edgecomb): "the Book of Baruch, his scribe, which is neither read nor found among the Hebrews, we have omitted, standing ready ... for all the curses from the jealous". Verbatim in sense. The preface says nothing about the Letter. See finding 2.
- **Luther 1534**: German Wikipedia "Lutherbibel" lists "Buch Baruch (mit dem Brief des Jeremia)" and quotes Konrad Schmid for the 1534 heading "so der heiligen Schrifft nicht gleich gehalten vnd doch nützlich vnd gut zu lesen sind". The claim is correct. See finding 5 for the source key.
- **Whitehouse (APOT 1, 1913)** in the writer's downloaded copy: Ewald put the prose at the close of the Persian empire and thought Baruch preceded Daniel; Kneucker and Schürer read Nebuchadnezzar and Belshazzar as Vespasian and Titus; A.D. 74; the circle of Johanan ben Zakkai; Charles's note that both texts may adapt one Hebrew psalm; Amiatinus lacks Baruch; Athenagoras, Clement, Hippolytus, Origen (John commentary, Jer. Hom.), Lactantius, Ephrem; Syro-Hexapla 617 (Harwell says 616).
- **Harwell (1915)**: five Theodotion marginal readings; "Not found in the Hebrew" at 1:17 and twice at 2:3; asterisks at 2:1; the whole book under the obelus; Nestle's suggestion; prose editor wrote the introduction for earlier poems; Hebrew throughout; not later than 100 B.C.
- **Ball (APOT 1)**: seven generations counted from 597 gives 317 and from 586 gives 306; the Syriac reads seventy years; Babylonian worship drawn from life. **Adams (THB 2.4.2, Glasgow deposit)**: 7Q2 holds Ep Jer 43-44 in 22 letters, later Lucianic form; Greek after Alexander, likely the third or second centuries B.C.E.; Egypt, Babylon, Palestine proposed; Fritzsche and Schürer for Greek; Wright and Adams; scarecrow at Ep Jer 69 and Jeremiah 10:5 Hebrew; 2 Macc 2:2. **VanderKam, p. 36** (biblia.com): nothing from Baruch 1-5 at Qumran, the Letter on one Cave 7 copy in Greek.
- **Toy (Jewish Encyclopedia, 1902)**: "Very few scholars now hold that the book was composed by Jeremiah's secretary"; Daniel dependence; Maccabean dating; Gorpiaios "(probably Ab)"; Bava Batra 14b. **Gigot (CE, 1907)**: "Catholics easily disprove this last date"; "Their answers are considered sufficient by Catholic scholars generally"; "highly probable that Theodotion ... translated the Book of Baruch from a Hebrew original"; Jerome's "pseudepigraphos" reported as a view of some critics.
- **Sirach 24:8** in `texts/orig/Sir.json`: God tells wisdom "Ἐν Ἰακὼβ κατασκήνωσον". The claim that wisdom pitches her tent in Jacob is correct.

## Findings

### Major

**1. Apostolic Constitutions 5.20 is presented as evidence that Jews read Baruch, against the scholar it cites, and Toy is made to say more than he says.**
- Location: `audience.to`; `lenses[4]` ("Greek-speaking Jews read it, perhaps in a day of mourning for the Temple"); `canon.accepted_by[8]` (Judaism); `sections[4]` ("Jewish"); spec[1].
- `audience.to` says flatly, "Some Jewish groups that read Greek read it in worship", and then cites the Constitutions. The Constitutions are a Christian text. In 5.20 they speak of Jews as "they ... as themselves suppose ... unwillingly" read the Lamentations and Baruch "even now", and the passage is part of an argument that these books prove Christ. Toy, the one scholar cited, writes: "This statement, however, can hardly be considered authoritative; and even if it be correct, it can refer only to the usage of some group of Hellenistic Jews."
- Toy also says Gorpiaios is "(probably Ab)" and says nothing about the Temple being mourned. The clause "when the fall of the Temple was mourned" is the writer's addition, attached to Toy's name. (The Macedonian month Gorpiaios is usually placed in early autumn; I did not look this up, so I do not rely on it.)
- Spec 2 builds a "service for a day of mourning" on this point, and the audience "why" paragraph treats the book as "a service book". The spec is labeled, but the audience paragraph and the Judaism row are not.
- Fix: in `audience.to` and the Judaism row, say that the Apostolic Constitutions (a Christian source of about 380) claim that Jews read Lamentations and Baruch on the tenth of Gorpiaeus, and that Toy thought this hardly authoritative and at most true of some Hellenistic Jews. Remove "when the fall of the Temple was mourned" from Toy, or put it in Claude's voice as a guess. Lens J should say "a Christian source says some Greek-speaking Jews read it". Add Toy's remark that Alexandrian Jews accepted the book "as a work of edification", which he does say.

**2. Jerome is credited with calling the Letter a pseudepigraph, but the cited source does not contain this, and one place gives no attribution.**
- Location: `facts[1]` ("most scholars, and Jerome, think someone else wrote it in his name"); `authorship[2]`; `canon.rejected_why[1]`.
- The Jerome source key is the Preface to Jeremiah. That preface says nothing about the Letter, only that Baruch is "neither read nor found among the Hebrews". `rejected_why[1]` puts "He also called the Letter a pseudepigraph" in the same paragraph as the preface, so a reader will take it from there. The only support is Gigot's report: some critics "think that St. Jerome was decidedly correct when he called this writing pseudepigraphos". I looked for the Jerome text and could not find it.
- The `facts` row gives no "(as Gigot reports)" at all.
- Fix: in all three places write "Gigot reports that Jerome called the Letter pseudepigraphos", or find and cite the actual Jerome passage. Do not tuck it under the preface.

**3. Adams's explanation for Sinaiticus is about the Letter only, and is applied to both works.**
- Location: `canon.provenance[2]` ("Sinaiticus does not have either work, probably because of a gap in the manuscript after Lamentations 2:20 (Adams)"); `facts[6]` ("Codex Sinaiticus lacks both works").
- Adams: the Letter "is missing in Sinaiticus (LXXS), probably as part of the lacuna after Lam 2:20". In the Greek order the Letter follows Lamentations, so a gap after Lamentations 2:20 can remove it. Baruch comes before Lamentations. The same gap cannot explain its absence, and Adams does not say it does. I know of no source in the book's list that says why Sinaiticus lacks Baruch.
- Fix: say "Sinaiticus has neither work (for the Letter, Adams suggests the lacuna after Lamentations 2:20)" and either source the absence of Baruch or leave it as "Baruch is not in the surviving Sinaiticus". Check that Swete's note or Ziegler supports "lacks Baruch" before it stays.

**4. The Orthodox row says Dositheus names other books "but not these two", which leaves out that his sentence adopts the Laodicea list, and Laodicea 60 lists Baruch and the Letter.**
- Location: `canon.accepted_by[1]` ("The Synod of Jerusalem (1672) named other books of the Greek Bible but not these two"); the same wording is in Jeremiah's book card.
- Dositheus (Q3): "we call Sacred Scripture all those which Cyril [Lucaris] collected from the Synod of Laodicea, and enumerated, adding to Scripture those which he ... called Apocrypha", and then lists Wisdom, Judith, Tobit, the Dragon, Susanna, Maccabees and Sirach. So Dositheus accepts the Laodicea list as the base and adds seven books. Canon 60 of Laodicea names "Jeremiah, and Baruch, the Lamentations, and the Epistle". The same row cites Laodicea 60 as doubtful, which is right, but the reader is left thinking Dositheus omitted Baruch.
- Fix: write "Dositheus names the Laodicea list (which includes Jeremiah with Baruch, Lamentations and the epistle) as Scripture, and adds seven books; it does not name Baruch or the Letter among the additions." Pass the same correction to the Jeremiah card (lane owner).

### Minor

**5. The Luther claim is cited to a source key that does not match.**
`canon.accepted_by[5]` cites `luther-bible-1545` (the 1545 Wittenberg Bible) for a statement about 1534. The writer's check was German Wikipedia (see "Verified"), which quotes Schmid for the 1534 heading and lists "Buch Baruch (mit dem Brief des Jeremia)" for the Apocrypha. The claim is true. Fix: add a source key for Schmid, *Theologie des Alten Testaments* (Mohr Siebeck, 2019), p. 75, as quoted at de.wikipedia "Lutherbibel", or open Luther's 1534 Bible; do not use the 1545 key for 1534. The same key is in the Jeremiah card.

**6. Thackeray's evidence is stretched.**
`audience.views[3]` ("the Greek book ... its Greek is close to the second half of Greek Jeremiah (Thackeray, as Harwell reports)") and `canon.provenance[0]` ("Harwell ... argued that the whole book was translated ... by the hand that translated the second half of Greek Jeremiah"). Harwell: Thackeray's evidence "applies only to Bar. 1-2"; the whole book would be one hand "if the entire book was composed in Hebrew". Fix: "the prose of Baruch 1-2 (Thackeray); Harwell extended this to the whole book on the ground that it was written in Hebrew".

**7. Whitehouse is named for a view about the Syro-Hexapla notes that I cannot find in him.**
`canon.provenance[1]`: "Whitehouse and Gigot took these notes as evidence of a Hebrew text". Gigot says this. Whitehouse's introduction and notes (the writer's downloaded copy) do not mention the "not found in the Hebrew" notes or the obelus. Harwell names Nestle, not Whitehouse. Fix: name Gigot only, or give the page in Whitehouse. As written it is a Whitehouse attribution I could not confirm.

**8. 3:38: the subject of the verb is less open than book.json says.**
`canon.cited_in[1]`: "The Greek verb has no stated subject; the Plain takes it as wisdom, while the KJV, the Syriac (Whitehouse) and Cyprian read 'he'". Whitehouse's note says the Greek subject "is probably God as in verse 36, but it might be wisdom"; the Syriac, Latin and Arabic have "he". So "he" is not a minority reading of the Greek but, on Whitehouse's own judgment, the more likely one; the Plain's "she" is a choice. Fix: add Whitehouse's judgment so readers do not think the Fathers had to read against the Greek. (The part's note and variant at 3:38 should say the same: pass to the 01-05 fixer.)

**9. Toy's other options are left out.**
`canon.provenance[0]` gives Whitehouse's two ways to count the fifth year (587/586 or 597) but not Toy's, which are 581 or, "more probably", 592 (the fifth year of Jehoiachin's captivity, from Ezekiel). The `Names` list says the river Sud is "otherwise unknown; the Syriac has a different name", and leaves out Toy's guess that it is a miswriting of Kebar. Both are in the Jewish Encyclopedia article the book already cites. Fix: add both, labeled as Toy's.

**10. "Before the Christian era" for 7Q2 is not in the sources.**
`canon.reliability.sections[1]`: "The Qumran fragment 7Q2, if it is the Letter, shows that the Greek Letter was being copied before the Christian era". Adams says only that it would give "a firm terminus ante quem" and the "first evidential support" for its existence. VanderKam, as I opened him, gives no date for 7Q2. `sections[3]` correctly says "oldest copy". Fix: say "gives a latest date for the Greek Letter, set by the date of Cave 7 (cite the DJD edition or a scholar)", or drop "before the Christian era".

**11. Unnamed "Protestant writers".**
`canon.rejected_why[2]`: "Against Baruch in particular, Protestant writers have pointed to the historical problems of the frame and to the borrowed character of the prose." `reliability.sections[3]`: "Protestant readers take these as signs that the books are not Scripture". No Protestant writer or confession is named (STYLE rule 3 and rule 2). The historical problems are real, but they are raised by scholars of every church, as `rejected_why[3]` itself says. Fix: name one (for instance, one Reformation-era or Westminster-tradition critic, from a text you open) or say only that critical scholars have raised these points.

**12. The Catholic "literary form" paragraph is an inference.**
`canon.rejected_why[4]` and `reliability.sections[2]`: Dei Verbum 11-12 is quoted correctly, but the step "a Catholic reader may take the frame of Baruch ... as a literary setting" is the writer's, and the only Catholic voice for the book is Gigot (1907), who defended Baruch's authorship and treated the compilation question as open. No church document says this about Baruch. The paragraph is framed as "On this teaching", which helps. Fix: add "this is Claude's application of the teaching; no church text applies it to Baruch".

**13. Gigot is made firmer than he is.**
`audience.views[0]`: "Catholic scholars of the early 1900s, such as Gigot, held this view" (that the exiles' setting is real). Gigot states the grounds Catholics give, says the answers are "considered sufficient by Catholic scholars generally", and then says that if a later editor made the book it would still be inspired. He also records Jerome's Hebrew tradition (In Isaiah 30:6-7) that Baruch and Jeremiah both died in Egypt and says it "conflicts with" Baruch 1. Fix: "Gigot set out the Catholic case for this view and said it would stand even if a later inspired editor joined the pieces". The Jerome tradition belongs next to Megillah 16b in `rejected_why[4]` for fairness, since it is the other tradition about where Baruch went.

**14. Priestly line, 1:7: the list is shown without the part that fits.**
`canon.rejected_why[3]`, bullet on Joakim: "the priest Joakim (1:7) is not in the priestly lists" (`reliability.sections[2]`). Hilkiah son of Shallum is in 1 Chronicles 6:13; only Joakim is missing. The fair statement is that Baruch 1:7 names a son of a known high-priestly Hilkiah who is not listed, and that a priest Joiakim appears after the return (Nehemiah 12:10, 26). Fix: say it that way.

**15. A quotation that is not exact.**
`audience.views[2]`: 'Nebuchadnezzar and Belshazzar his son' in single quotes, cited to 1:11-12. The Plain has "Nebuchadnezzar king of Babylon ... his son Belshazzar" (1:11) and "in the shade of his son Belshazzar" (1:12). Fix: remove the quote marks or use the Plain's words.

**16. Cowley's Ethiopian book is described incompletely.**
`canon.accepted_by[2]`: the Lamentations book "holds Lamentations 1-5, the epistle to the captives as its chapter 6, and the story known as 4 Baruch". Cowley lists a fourth part between them: the prophecy against Pashhur (Lam. 7:1-5), then 4 Baruch (Lam. 7:6-11:63). The point of the row (Baruch is counted; the Letter sits inside the Lamentations book) is right. Fix: add Pashhur, or say "and other pieces, including 4 Baruch". Check that the Jeremiah card's Ethiopian row, which says the church counts "a further work in Baruch's name", matches.

**17. Coptic "Bohairic".**
`canon.accepted_by[3]`: "Coptic in both Bohairic and Sahidic (the Sahidic including the Letter)". Whitehouse (opened) names a Coptic version from the Cairo codex edited by Bsciai and a Sahidic version by Brugsch "including the Epistle of Jeremiah". It does not use the word Bohairic. Fix: say "a Coptic version from the Cairo codex and a Sahidic one that includes the Letter (Whitehouse)", or confirm Bohairic in a source you open.

**18. Orthodox row and the Jeremiah card pull in different directions.**
The Jeremiah card says "Orthodox teachers differ on whether to call them fully canonical". The book.json row says Baruch "has a stronger place than most of the books outside the Hebrew Bible" and cites the OCA answer. Both can be right (the OCA answer names Baruch but not the Letter; Philaret lists only Jeremiah), but a reader of both pages meets two tones. Fix: have the OCA sentence say that the answer names "the Prophecy of Baruch" and does not mention the Letter, and use the same wording on both pages.

**19. Missing source key for a claim the page makes.**
`lenses[0]` and `sections[4]` (Easter Vigil, sixth reading, Baruch 3:9-15, 32-4:4) rest on a diocesan worship aid the writer opened; no key for it or for the Roman Missal is in `s`. I confirmed the claim by search. Fix: add a key (the Roman Missal, Easter Vigil, or the lectionary page), as with the OCA readings.

**20. "A book of the Greek Old Testament" in the site's voice.**
`lead[0]`: "Baruch is a short book of the Greek Old Testament". That is the Septuagint reading, but many readers will hear it as "of the Old Testament". Fix: "a short book found in the Greek Old Testament (the Septuagint)".

**21. Reading level.**
`lead[0]` has one sentence of about 80 words, and `lead[2]`, `canon.summary` and several `accepted_by` rows have sentences over 40 words with several semicolons. The target is about 8th grade with short sentences (STYLE.md). Fix: split. Priority: `lead[0]` second sentence (the four pieces) and `canon.accepted_by[1]` (the Orthodox row, about 190 words with seven sources in one paragraph).

## Other checks (no finding)

- **Canon block fields.** `tier` dc, `work` "baruch", `summary`, `accepted_by` (10 rows), `provenance` (4), `rejected_why` (5), `cited_in` (6), `reliability` (verdict plus 4 sections), `how_to_read` (5) and `s` are all there. Reliability is labeled "This is Claude's analysis, not a church's judgment" and does not rank churches. The four required parts are present: witness to Jewish faith, text, history, and agreement with the 66 point by point.
- **cited_in.** All six `at` verses are right. The strengths are honest. Possible additions, not required: Luke 13:29 beside Matthew 8:11 (the same gathering from east and west). I did not check it, so it is a suggestion only.
- **Numbering.** The statement that the KJV's 3:35-37 are this site's 3:36-38, and that the OCA heading "3:35-4:4" is this site's 3:36-4:4, is correct against the Plain (3:36 "This is our God"). The Easter Vigil reading uses Vulgate numbers, which equal the site's.
- **Spec 1** (Seraiah and Baruch as brothers) is correctly labeled, rests on Jeremiah 51:59-64 and 32:12, and the quoted Jeremiah 51:61 matches the Plain.
- **Traditions.** No book-level traditions card, correctly, because Jeremiah's card already asks the question. The pointer in `lead[2]`, `how_to_read[0]` is accurate.
- **Lenses.** C O P H J. The O lens statement that Athanasius and Cyril counted both works with Jeremiah is right; the P lens is fair.

## Fixes applied
