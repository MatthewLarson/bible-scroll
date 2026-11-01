# Hostile review: Jude

## Verdict

Jude is learned, mostly accurate, and fair on the big debates: Jesus or the Lord in 1:5, the Watchers, "other flesh," eternal fire, and the Enoch quotation. It passes `node tools/build.js --check Jud` with 0 errors and 0 warnings. I checked the facts the writer flagged and most hold up: Clement of Alexandria's humility remark (Adumbrationes on Jude), the Metzger and Wikgren dissent, NA28 and the ECM printing "Jesus" (2012–2013), Papyrus 72's θεὸς Χριστός, the content of Avot 5, 4Q204 preserving 1 Enoch 1:9, Genesis Rabbah 26:5, City of God 15.23, Testament of Naphtali 3:4–5, Targum Neofiti on Genesis 4:8, Didache 11, Hegesippus in Eusebius 3.19–20, Tertullian, Jerome, Origen, Luther, and the Peshitta. Five problems are serious. (1) In several verses the Plain English Translation is a patchwork of ESV and NIV wording, including choices that are not simply the literal Greek. (2) The list of which translations read "Jesus" in 1:5 is wrong. (3) Bauckham's reading of 1:22–23 is misquoted. (4) One note claims that *despotēs* is "almost always" a title of God, which is false. (5) Several of the new shared topic cores are written from one tradition (Lord's Supper, Holy Spirit, grace) or clash with other topics through duplicate `aka` names. The 62 notes are about four times Revelation's density, and roughly a dozen repeat each other. No finding is critical.

Counts: 0 critical, 9 major, 22 minor.

## Findings

### 1. Major: Plain English Translation borrows ESV and NIV wording (plain.txt 1:6, 1:10, 1:12, 1:19, 1:21, 1:23, 1:24–25)
STYLE rule 1 forbids reproducing copyrighted translations. I checked the ESV and NIV texts on BibleGateway, and several verses match them phrase for phrase, including wording that is not forced by the Greek:
- 1:23 "Save others by snatching them out of the fire. To still others show mercy with fear, hating even the clothing stained by the flesh." ESV: "save others by snatching them out of the fire; to others show mercy with fear, hating even the garment stained by the flesh." Only "garment" changes to "clothing," and "still" is added.
- 1:21 "Keep yourselves in the love of God as you wait for the mercy of our Lord Jesus Christ that leads to eternal life." This joins the ESV's "keep yourselves in the love of God ... the mercy of our Lord Jesus Christ that leads to eternal life" to the NIV's "as you wait for the mercy of our Lord Jesus Christ." "That leads to" is an ESV choice for εἰς ζωὴν αἰώνιον.
- 1:10 "slander whatever they do not understand ... the very things they do understand by instinct ... destroy them": this follows the NIV ("slander whatever they do not understand, and the very things they do understand by instinct ... will destroy them").
- 1:6 "their own position of authority ... proper [home]": ESV "their own position of authority, but left their proper dwelling."
- 1:12 "hidden reefs at your love feasts" (ESV), "shepherds who feed only themselves" (NIV, which adds "only" to ἑαυτοὺς ποιμαίνοντες), "blown along by the wind[s]" (NIV).
- 1:19 "These are the people who ... do not have the Spirit" (NIV, "These are the people who divide you ... and do not have the Spirit").
- 1:24–25 "keep/guard you from stumbling ... with great joy ... before all time ... now, and forever" (ESV) plus "glory, majesty, power, and authority" (NIV).

Each phrase alone could be coincidence. Together they show the writer working from these two translations.
**Fix:** Retranslate these verses from the Greek in the Plain English Translation's own voice. For example: 1:23 "Pull others out of the fire and save them. Show mercy to others too, but carefully, and hate even the shirt the flesh has stained." 1:21 "...wait for our Lord Jesus Christ to show you mercy and bring you eternal life." 1:10 "But these people insult anything they do not know. And what they know by nature, the way animals with no reason do, is what ruins them." 1:6 "their own rank / their own domain." 1:12 "shepherds who tend only themselves." 1:25 "glory, greatness, might and authority."

### 2. Major: Wrong list of which translations read "Jesus" in 1:5 (variants.json 1:5; chapters.json deep "Who saved Israel from Egypt?")
The variant gives only "the ESV and NET" for "Jesus" and says "most English Bibles, including the NIV" read "the Lord." The chapter page names "the ESV, NET and BSB." I checked current editions on BibleGateway:
- **Jesus:** ESV (since 2001, before NA28), NET, NLT, CSB (2017), NRSVue (2021), LEB, LSB, BSB, and Douay-Rheims (from the Vulgate).
- **The Lord:** KJV, NKJV, NIV (2011), NASB 1995 and 2020, NRSV (1989), NABRE, CEB, HCSB.

So the major recent revisions are moving toward "Jesus." "Most English Bibles" is true only if older and minor versions are counted. Note also that the NRSV/NRSVue pair shows the switch happening within a single translation family.
**Fix:** Replace both lists with the list above, or a fair selection from it. Say "Jesus" is read by "the ESV, CSB, NLT, NET, NRSVue and BSB," and "the Lord" by "the KJV, NKJV, NIV, NASB and NABRE."

### 3. Major: Bauckham's view of 1:22–23 is misquoted (variants.json 1:22 "b"; chapters.json deep "Two groups or three?"; notes.json 1:22 "Doubting, or disputing?")
The variant says Bauckham argued that a short text like Papyrus 72's is original: "snatch some from the fire, but on those who waver have mercy with fear." Bauckham does prefer the two-clause text. But his translation (WBC 50, p. 108) reads "Snatch some from the fire; but on those who **dispute** have mercy with fear." He takes διακρινομένους as "disputing," not "wavering," and that sense is part of his argument. Putting "waver" in his mouth reverses the point on which note 56 depends.
**Fix:** Variant 1:22: "Richard Bauckham argues for a two-clause text like Papyrus 72's, which he translates 'Snatch some from the fire; but on those who dispute have mercy with fear.'" In note 56, name Bauckham (and Neyrey) as holders of reading (2), "dispute." Consider adding that Moo counts at least six forms of the text.

### 4. Major: False claim about *despotēs* (notes.json 1:4 "Jesus the Master")
"Elsewhere in the New Testament it is almost always a title of God (Luke 2:29; Acts 4:24; Revelation 6:10)." This is false. About half of the other uses are for human slave owners: 1 Timothy 6:1–2, Titus 2:9, 1 Peter 2:18, and probably 2 Timothy 2:21. The writer's own opening line ("the owner of a slave") is the main sense. The real point is narrower: when the word names a divine being, it normally names God, and only Jude 4 and 2 Peter 2:1 give it to Jesus. 2 Timothy 2:21 may be a third case.
**Fix:** "When it is used of a divine master, it is a title of God (Luke 2:29; Acts 4:24; Revelation 6:10). Only here and in 2 Peter 2:1 is it clearly given to Jesus."

### 5. Major: Duplicate topic names across the shared pages (topics/enoch.json, fallen-angels.json, books-outside-the-bible.json, canon.json, mercy.json; also Ruth's hesed.json)
The rule is "one page per subject," and `aka` lists are how writers find existing pages. These new files collide:
- "Watchers" is an `aka` of both `enoch` and `fallen-angels`. Keep it only on `fallen-angels`.
- "apocrypha"/"Apocrypha" is an `aka` of both `books-outside-the-bible` and `canon`. The Apocrypha (deuterocanonical books) is a canon question, so remove it from `books-outside-the-bible`. Give that page a scope sentence: "books the Bible quotes or names; for which books are in the Bible, see canon."
- `mercy` (Jude) and `hesed` (Ruth) overlap. Ruth's `hesed` lists "mercy" as an `aka`, which points the alias at the wrong page. The mercy core also says *eleos* translates *chesed*. The `related` links help, but the writers should agree on the line between the pages: `hesed` as the Hebrew word study, `mercy` as the idea. Then remove "mercy" from hesed's `aka`. (Tell the Ruth writer.)
- This is not Jude's file, but Jude contributes to `angels` ("Angels in Revelation") and `balaam` ("Balaam and the Nicolaitans"). Those Revelation-specific titles need making general before other books add to them. Flag this to main.

### 6. Major: The `lords-supper` core is not fair to the whole church (topics/lords-supper.json)
(a) "At a Passover meal Jesus took bread" states one side of a famous problem as fact. Mark, Matthew and Luke present the Last Supper as a Passover meal. John places the crucifixion on the day of Preparation, before Passover (John 18:28; 19:14). Say "At a meal that Matthew, Mark and Luke present as the Passover (John's timeline puts it the evening before)." (b) The core says nothing about the main split among Christians over what the meal is: Catholic and Orthodox (real presence; the Mass as sacrifice), Lutheran (real presence), Reformed (spiritual presence), and memorial (Zwingli, many Baptists). A shared page needs one fair section on it, citing John 6:53–58 and 1 Corinthians 10:16; 11:24–29. (c) "Paul passes on the same words, adding 'Do this in remembrance of me'": Luke 22:19 has it too, in the longer text. Say "Paul and Luke include 'Do this in remembrance of me'."

### 7. Major: The `holy-spirit` and `grace` cores take one side (topics/holy-spirit.json, grace.json)
- **holy-spirit:** The whole page assumes the Christian doctrine, and nothing says that Jewish tradition reads *ruach ha-qodesh* as God's own presence and power, not a separate person. It also says nothing on how the doctrine of the Trinity developed (Nicaea–Constantinople, AD 381) or on the filioque split between East and West. Add a short section, "How Jews and Christians understand the Spirit." Add a link to "Holy Spirit in Judaism."
- **grace:** The lead "Grace is God's free, undeserved favor" is the Protestant definition. Catholic and Orthodox teaching also treats grace as God's life given to us, a power that heals and transforms (Catholic Catechism 1996–1999; Orthodox *theosis*, 2 Peter 1:4). Jewish thought speaks of *chen* and *chesed* within the covenant. Make the lead neutral ("God's favor and kindness, freely given") and add one paragraph on the views. Separately, "trains us 'to say no to ungodliness'" is the NIV's wording of Titus 2:12, so rephrase it.

### 8. Major: Too many notes, and many repeat each other (notes.json, book.json, chapters.json)
62 notes for 25 verses is 2.5 per verse. Revelation, the model, has 244 for 404 verses (0.6 per verse), and STYLE asks for "one note for every two to three verses, more in famous or difficult passages." Jude deserves more than the average, but about 40–45 notes would cover everything without repeating. Specific redundancies:
- **Three notes on "keep."** Note 3 (1:1) sets out the whole "keep" chain (1:6, 1:13, 1:21, 1:24). Note 54 (1:21) lists the same chain again. Note 59 (1:24) repeats it a third time. Notes 52 (1:20) and 54 (1:21) both explain that "keep" is the only command in 20–21. Cut the chain from 54 and 59, and keep the "only one command" point in 54 only.
- **Zechariah 3, four times.** Note 27 (1:9) and note 57 (1:23) both retell Zechariah 3:1–5 and point to each other. The spec note 58 (1:23) offers one Claude theory on the pair. The `mercy` topic's `claude` box offers a second, different Claude theory on the same pair (Michael's restraint as a frame). Merge 57 into 27 or the reverse, and keep one Claude theory, or label the two as parts of one idea.
- **The same spec theory twice.** book.json `spec` and chapters.json `deep` both carry "'Lord' means Jesus all through Jude," in slightly different words. Keep it in one place.
- **Note 11 ("Where does 'once' go?")** is a manuscript note (`kind: var`) whose content is already in variants.json 1:5 "b." STYLE says to prefer variants.json. Move the *hapax* placement and "this"/"all" difference into a proper variant entry, and delete the note.
- **Four notes on 1:14 (40, 41, 42, 43).** Fold note 40 ("seventh from Adam") into note 41.
- **Enoch's key words.** Note 44's last sentence ("harsh words ... set up 1:16") and note 46's "This ties back to Enoch's 'harsh words'" say the same thing.
- **Note 62 (1:25)** repeats variant 1:25 ("before all time"). Its claim that the four praise words are "exactly what the intruders rejected (1:8)" is stretched: 1:8 has *kyriotēs* and *doxai*, and only *doxa* matches. Cut the claim or trim the note to the doxology point.
- **Notes 34 and 35** both explain that the meal included the Lord's Supper.

### 9. Major: Wrong history of the "brothers of Jesus" views (topics/brothers-of-jesus.json; notes.json 1:1 "The brother of the Lord's brother")
The core says "Three views go back to the 300s," and the note says the Orthodox view comes "from Epiphanius." The half-brother (Joseph's earlier marriage) view is already in the *Protevangelium of James* (about AD 150) and is assumed by Origen (Commentary on Matthew 10.17). Clement of Alexandria, in the very passage the note cites, calls Jude "brother of the sons of Joseph." Only the debate of the 380s, Helvidius against Jerome with Epiphanius as champion, belongs to the 300s. Also, "The second and third views protect the belief" assigns a motive. Say "are tied to the belief."
**Fix:** "The half-brother view appears by about 150 (Protevangelium of James) and was defended by Epiphanius; Helvidius and Jerome argued the other two views in the 380s." In the note: "Eastern Orthodox (from the 100s, later championed by Epiphanius)."

### 10. Minor: Sodom core cites the wrong verse and leaves out Ezekiel 16:50 (topics/sodom.json)
"Jesus says a town that rejects his messengers will fare worse than Sodom (Matthew 10:15; Luke 17:28–32)." Luke 17:28–32 is about the suddenness of judgment ("Remember Lot's wife"). The parallel is Luke 10:12. Also, the core's list of Sodom's sins quotes Ezekiel 16:49 but stops before 16:50 ("they were haughty and did an abomination before me"). Traditional readers count 16:50 as evidence for the sexual reading, so leaving it out leans one way. Quote both verses and let the reader see the debate (the Jude contribution handles the "other flesh" debate fairly).

### 11. Minor: Words added to Clement of Alexandria (notes.json 1:1 "The brother of the Lord's brother")
"Clement ... thought it was humility: after Easter, he would only call himself Jesus's servant." Clement (Adumbrationes on Jude, preserved in Latin) says Jude, "though he knew the near relationship of the Lord, yet did not say that he himself was His brother," but "a servant of Jesus Christ," "of Him as Lord." The "after Easter" is the writer's gloss. Remove it, or mark it as an inference. Cite the Adumbrationes by name.

### 12. Minor: The *hyperonka* reading in Daniel 11:36 is Theodotion's (notes.json 1:16 "Swollen words")
"Greek versions of Daniel use it": λαλήσει ὑπέρογκα is Theodotion's Daniel 11:36. The Old Greek has a different wording (Thayer lists the verse as "Theod."). Say "Theodotion's Greek version of Daniel." You could add that the LXX uses ὑπέρογκον for "hard cases" in Exodus 18:22, 26. A stronger parallel to add: Bauckham notes that Testament of Moses 7:9 ("their mouth will speak great things") and 5:5 ("admiring persons," i.e. playing favorites) sit right behind 1:16 (see finding 21).

### 13. Minor: Give exact Mishnah Avot numbers (notes.json 1:11 Balaam and Korah; topics.json `korah`)
"Avot 5" is correct but vague. Korah ("dispute not for the sake of heaven") is Avot 5:17. The disciples of Balaam ("an evil eye, a haughty spirit, an expansive soul") are Avot 5:19. Prayer-book editions number them 5:20 and 5:22. Give both: "Avot 5:17 (5:20 in some editions)." "Greedy soul" is a fair rendering of *nefesh rechavah*, but say it is literally "a broad soul."

### 14. Minor: The Korah psalms are listed inconsistently (notes.json 1:11 "Korah: talking back to God's servant")
"Their descendants wrote several psalms (Psalms 42–49)." The Korah psalms are 42, 44–49, 84–85, 87–88 (43 belongs with 42 but has no title). The `korah` core correctly says eleven. Make them agree.

### 15. Minor: Wrong source key for Philo on Cain (notes.json 1:11 "Cain in Jewish tradition")
"Philo made Cain a picture of the self-lover" is cited to `philo-abraham` (On Abraham). Philo treats Cain as the *philautos* ("self-lover") in *That the Worse Attacks the Better* (Quod deterius 32, 78). Add a key for that work, or drop the source.

### 16. Minor: The date given for the turn away from the angel reading is too late (notes.json 1:6 "Which angels?"; topics/fallen-angels.json)
"From the 300s, many Jewish and Christian teachers rejected the idea." Rabbi Simeon bar Yohai (2nd century; Genesis Rabbah 26:5) and Targum Onqelos ("sons of the great ones") already did, and Julius Africanus (about 220) proposed the line of Seth. Say "From the 100s and 200s, and widely by the 400s." Also, the `augustine` key (Revelation's sources) is "The City of God, book 20," while the note cites 15.23. Add a general key for the City of God.

### 17. Minor: The preview names the wrong speaker in Zechariah 3:2 (notes.json 1:9 "Words from Zechariah 3")
The preview says "Michael's words are the angel's words to Satan in Zechariah 3:2." The body correctly says "The LORD says": the Masoretic Text has "the LORD said to Satan" (the Syriac has "the angel of the LORD"). Align the preview, or note the variant. The chapter spec relies on "the speaker is the LORD himself."

### 18. Minor: "Four 'ungodly' words" depends on the variant (notes.json 1:15)
The count of four holds only for the SBLGNT reading. NA28 reads πᾶσαν ψυχήν, so it has three. Add "(three in NA28, see the manuscript note)."

### 19. Minor: Deuteronomy 1:17 uses a different idiom (notes.json 1:16 "Admiring faces")
Deuteronomy 1:17 says *lo takiru panim* ("do not recognize faces"), not *nasa panim*. Leviticus 19:15 and Deuteronomy 10:17 do use *nasa panim*. Say "and the related idiom in Deuteronomy 1:17."

### 20. Minor: Name the Dead Sea Scroll (notes.json 1:14 "Jude quotes 1 Enoch")
"Including this very passage" is right. The Aramaic manuscript 4Q204 (4QEnoch-c), column 1, lines 15–17, preserves parts of 1 Enoch 1:9 ("[when he comes] with the myriads of his holy ones ... to carry out judgment against all"). Name it. Readers will want it, and the brief asked for it.

### 21. Minor: Missing cross-references
- 1:6: Isaiah 24:21–22 (the host of heaven "gathered as prisoners in a pit ... after many days punished") is the main Old Testament text behind bound angels awaiting judgment. Add it to note 15 or 16 and to the chapter's echoes.
- 1:16: Testament of Moses 5:5 and 7:7–9 ("admiring persons," "their mouth will speak great things") are close parallels, since Jude knew this book (1:9). Add them to note 46 or 47.
- 1:4: 1 Enoch 48:10 ("they denied the Lord of Spirits and his Anointed") is a parallel to "deny our only Master and Lord" (Bauckham).

### 22. Minor: An argument stated as fact in a shared topic (books/Jud/topics.json `lake-of-fire`)
"Fire and darkness cannot both be literal at once, which suggests both are pictures of a real ruin" is an argument for one side, stated without attribution. Traditionalists answer that the two images can describe one reality. Attribute it ("Some interpreters argue...") and give the reply.

### 23. Minor: The `jude-and-2-peter` lead overstates (topics/jude-and-2-peter.json)
"This is the closest literary relationship between two New Testament letters": Ephesians and Colossians is at least as close. Say "one of the two closest" (with Ephesians–Colossians). Also, "in the same order" in the lead should read "mostly in the same order," as the contribution itself says ("usually").

### 24. Minor: Papyrus 72 is not clearly the oldest copy of Jude (books/Jud/topics.json `textual-history`)
"Papyrus 72 ... is the oldest manuscript of Jude." Papyrus 78 (P.Oxy. 2684, Jude 4–5, 7–8) is from the same period (3rd/4th century). Say "the oldest complete copy of Jude."

### 25. Minor: "First" is wrong (topics/mercy.json lead)
"'Merciful and gracious' is how God first describes himself to Moses (Exodus 34:6)." God names himself to Moses at the bush (Exodus 3:14–15), and promises mercy in 20:6 and 33:19. Say "how God describes himself to Moses at Sinai."

### 26. Minor: The 1 Peter 3:19 view is not uncommon (books/Jud/topics.json `fallen-angels` uncommon)
The view that the "spirits in prison" are the bound angels of Genesis 6 (Dalton, Selwyn, Elliott, Achtemeier) is now arguably the majority view among commentators on 1 Peter. Move it to `common`, or reword it as a widely held scholarly view. Keep the uncommon slot for, say, Christ preaching to the dead in Hades.

### 27. Minor: The Targums and Mishnah are later than Jude (book.json section "Jude and Jewish tradition")
"Traditions about Cain, Balaam and Korah found in the Targums ... and the Mishnah": the Mishnah was compiled about AD 200, and the Palestinian Targums are later in their present form. Say "traditions later written down in the Targums and the Mishnah."

### 28. Minor: Check the KJV's "separate themselves" in 1:19 (notes.json 1:19 "Dividers")
The note calls the KJV's "separate themselves" a "third reading" of the verb. Several Textus Receptus editions read ἀποδιορίζοντες **ἑαυτούς** (with some later manuscripts), and the KJV translates that added word. The STEPBible data in texts/auto does not flag it, so check Scrivener/Stephanus before writing it. If confirmed, say the KJV follows a text that adds "themselves," and consider a small variant entry.

### 29. Minor: Plain English Translation wording (plain.txt)
- 1:1 "loved by God the Father": the Greek is ἐν θεῷ πατρί, "in God the Father." The variant's "why" even discusses "Loved in God." Either translate "in" and note the sense, or add a short note.
- 1:24 "to stand you before his glory" is awkward English. Use "to bring you before his glory" or "to set you in front of his glory."
- 1:8 "reject authority": *kyriotēs* is "lordship." Note 23 prefers the reading that ties it to the Lord of 1:4. "Reject the Lord's authority" or "reject lordship" would keep that link visible (optional).

### 30. Minor: The `moses` core leans on Jude, and the `canon` core covers only the New Testament (topics/moses.json, canon.json)
- `moses`: the lead "the greatest of the prophets before Jesus" frames Jewish honor for Moses in Christian terms. Judaism holds that no prophet arose like Moses (Deuteronomy 34:10; Maimonides' seventh principle). Say "Jews honor him as the greatest prophet (Deuteronomy 34:10); Christians see him as the forerunner of Jesus (Hebrews 3:1–6)." The core's only section is on his burial, which is Jude's interest. A neutral overview section (Exodus, Sinai, the wilderness) would make it usable by Exodus–Deuteronomy.
- `canon`: the lead mentions Jews and Catholics, but the only section is on the New Testament. Add a section on the Hebrew Bible canon and the deuterocanonical books: the Tanakh's three parts, the Septuagint's extra books, Trent (1546), the Protestant Apocrypha, and the Ethiopian canon. Mention the now-doubted "Council of Jamnia" theory, so other books do not re-create the page.

### 31. Minor: Glosses
The glosses are mostly good. "Beloved" → "dear friends, loved by God" adds "by God", whereas ἀγαπητοί is simply "loved ones," dear to Jude as well. Use "dear friends." "Suck up to people" is fine for the register, but "trash-talk angels" may read as flip on a page about slander. Consider "bad-mouth angels."

## Fixes applied

1. Fixed. Retranslated 1:6, 1:10, 1:12, 1:19, 1:21, 1:23, 1:24–25 from the Greek, checked only against BSB/KJV/WEB/ASV/YLT. I also redid 1:1, 1:2, 1:4, 1:5, 1:8, 1:11 and 1:15 where they ran close to the ESV/NIV ("May mercy, peace, and love be multiplied to you"; "For certain people have"; "Now I want to remind you"; "rushed for profit into Balaam's error"). New wording includes "sunken rocks", "shepherd themselves", "did not keep to their own rank... deserted the dwelling that was theirs", "draw dividing lines... lack the Spirit", "look forward to the mercy... which ends in eternal life", "grab them out of the fire... the tunic the flesh has soiled", "guard you from tripping... set you in front of his glory", "glory, greatness, might and authority, before every age". Every note, gloss, variant and topic section that quoted the old wording was updated.
2. Fixed. The 1:5 variant and the chapter deep dive now say: "Jesus" in the ESV, CSB, NLT, NET, NRSVue and BSB; "the Lord" in the KJV, NKJV, NIV, NASB and NABRE. The variant also notes the NRSV-to-NRSVue switch.
3. Fixed. Bauckham is now quoted with "those who dispute" (variant 1:22 and chapter deep dive). The 1:22 note names Bauckham and Neyrey for the "dispute" reading, and Moo's count of six forms is added.
4. Fixed. The despotēs note now lists the human-master uses (1 Timothy 6:1–2; Titus 2:9; 1 Peter 2:18). It says that only when the word names a divine master is it God's title, and that only Jude 4 and 2 Peter 2:1 clearly give it to Jesus.
5. Fixed. Removed "Watchers" from enoch's aka and "Apocrypha" from books-outside-the-bible. books-outside-the-bible now has a scope sentence pointing to canon. mercy gets "related": ["hesed","grace"] and a line marking hesed as the word page and mercy as the idea page. I asked the Ruth writer to drop "mercy" from hesed's aka. The angels and balaam titles were left to main, as instructed.
6. Fixed. lords-supper now says the Synoptics present a Passover meal while John's timeline differs (John 18:28; 19:14). It adds a section on the Catholic/Orthodox, Lutheran, Reformed and memorial views (John 6:53–58; 1 Corinthians 10:16; 11:24–29) and says "Paul and Luke include 'Do this in remembrance of me.'"
7. Fixed. holy-spirit gains a section on Jewish and Christian understandings: ruach ha-qodesh, Constantinople 381, the filioque, and non-Trinitarian groups. It also gets a Wikipedia link to "Holy Spirit in Judaism". grace gets a neutral lead and a section on the Protestant, Catholic (CCC 1996–1999), Orthodox (theosis, 2 Peter 1:4) and Jewish views. The NIV wording of Titus 2:12 was rephrased.
8. Fixed. Notes cut from 62 to 46 by merging repeats:
   - the "keep" chain is now explained once (1:1), and "only command" only at 1:21 (with the building/Trinity points merged in);
   - the Zechariah 3 retelling is now one echo note (1:23), with 1:9 pointing to it, and the two Claude theories are merged into one spec note (the mercy-topic claude box is removed);
   - the book-level spec was removed (it stays in the chapter deep dive);
   - the hapax note became a proper variant entry (1:5, "all this once and for all": SBL / NA28 / Byzantine);
   - "seventh from Adam" was folded into the Enoch-quotation note, and "has come" and "saints or angels" were merged;
   - the "harsh words" duplication was removed;
   - the 1:25 "All of time" note was cut, along with its stretched claim about 1:8;
   - the love-feast and bad-shepherd notes were merged, so the Lord's Supper is explained once.
   Further merges: Jude/brother of James, the two 1:3 notes, "like these" with "other flesh", the "woe" note into Cain, the restless sea into "four pictures", the swollen words with "admiring faces", the 1:17 and 1:18 notes, the 1:19 pair, and the 1:24 pair. 46 notes is about 1.8 per verse. That is still above the updated STYLE's "up to about one per verse" for short books, and inside the coordinator's 40–45 target only at its edge. Each remaining note makes a distinct point, and cutting further would mean dropping a crux or an Old Testament allusion. Flagged for the editor.
9. Fixed. The brothers-of-jesus core now dates the half-brother view to the Protevangelium of James (about 150) and Origen, with Epiphanius as its later champion. Helvidius and Jerome are placed in the 380s, and the wording is now "are tied to the belief". The 1:1 note matches.
10. Fixed. sodom now cites Luke 10:12 for the town that rejects messengers, keeps Luke 17:28–32 for suddenness, and quotes Ezekiel 16:50 with a sentence on the debate.
11. Fixed. Removed "after Easter". The 1:1 note now paraphrases Clement's Adumbrationes, under a new key clement-adumbrationes.
12. Fixed. The note now says "Theodotion's Greek version of Daniel" and adds Testament of Moses 5:5 and 7:9, per Bauckham. I left out Exodus 18:22, 26 as less relevant.
13. Fixed. Avot 5:17 (5:20) for Korah and Avot 5:19 (5:22) for Balaam, with "a broad soul, that is, a greedy one".
14. Fixed. The Korah psalms are now listed as Psalms 42, 44–49, 84–85, 87–88 (eleven), matching the core.
15. Fixed. New key philo-worse (That the Worse Attacks the Better 32, 78).
16. Fixed. The note and the fallen-angels core now say "from the 100s and 200s, and widely by the 400s", naming Simeon bar Yohai, Targum Onqelos (core) and Julius Africanus. New key augustine-city replaces the Revelation-specific augustine.
17. Fixed. The 1:9 echo note was merged into 1:23, and the remaining text says the LORD speaks the words in Zechariah 3:2 (Masoretic Text).
18. Fixed. Added "(three in NA28)" to the preview and the body.
19. Fixed. Deuteronomy 1:17 is now called "a related idiom".
20. Fixed. Named 4Q204 (4QEnoch-c).
21. Fixed. Added Isaiah 24:21–22 (1:6 note, the fallen-angels contribution, chapter echoes), Testament of Moses 5:5 and 7:9 (1:16 note), and 1 Enoch 48:10 (1:4 Master note).
22. Fixed. lake-of-fire now attributes the argument ("Some interpreters argue...") and gives the reply.
23. Fixed. The lead now says "mostly in the same order" and "one of the two closest... along with Ephesians and Colossians".
24. Fixed. Now "the oldest complete copy of Jude", with Papyrus 78 mentioned.
25. Fixed. Now "describes himself to Moses at Sinai".
26. Fixed. The 1 Peter 3:19 view moved to common, naming Selwyn, Dalton, Elliott and Achtemeier. The uncommon slot is now Christ preaching to the human dead in Hades.
27. Fixed. Now "traditions... that were later written down in the Targums and the Mishnah (about AD 200)".
28. Partly fixed. I could not check Scrivener or Stephanus here, and the STEPBible TR data does not show the added word. So I did not make a variant entry. The 1:19 note now says the KJV's "separate themselves" "may follow late copies that add 'themselves', or simply read the verb that way".
29. Fixed. 1:1 now reads "loved in God the Father", explained in the 1:1 note. 1:24 now reads "set you in front of his glory". 1:8 now reads "set aside lordship".
30. Fixed. The moses lead now gives the Jewish view (Deuteronomy 34:10) and the Christian view (Hebrews 3:1–6), and adds a "His life" overview section that mentions Maimonides. canon gains a section on the Hebrew Bible, the deuterocanonical books, Trent, the Protestant Apocrypha, the Orthodox and Ethiopian canons, and the doubted Jamnia theory.
31. Fixed. "Beloved" is now glossed "dear friends", and "trash-talk angels" is now "bad-mouth angels".

Also done: source keys renamed to the new STYLE pattern (bauckham-jude, nickelsburg-enoch, green-jude, davids-jude, and others).
