# Hostile review: Matthew 1–4 (part 01-04) and Mat/book.json

Reviewer: Claude (hostile review, nt lane), 2026-10-24. Scope: `parts/01-04/` (plain, notes, variants, glosses, chapters, topics, sources), `content/books/Mat/book.json`, the topic cores this writer proposed in `content/proposals/nt/topics/` (jesus, synoptic-problem, matthew, john-the-baptist, herod-family, magi, virgin-birth, galilee, nazareth, testing-of-jesus) and its five entries in `content/proposals/nt/works.json`.

Build: `VERBOSE=1 node tools/build.js --check Mat/01-04` gives 1 error and 2 warnings. The error (`tosefta-sukkah` defined differently in Num/Isa) is not in this part. Both warnings are in book.json, which this writer owns (finding 1).

## Verdict

This is strong work. The translation was built from the SBLGNT. I checked all 90 verses against the Greek and found no added or dropped clauses. The wording is mostly independent of the NIV and ESV. The Asaph and Amos readings are handled correctly. The 1:16 entry gives all three readings fairly. The notes are dense, mostly accurate and well sourced. I confirmed a sample of the history claims: Macrobius *Sat.* 2.4.11, Josephus *Ant.* 15.412, 17.213–218 and 18.116–119, b. Ketubot 96a, m. Bava Batra 8:6, Ignatius *Eph.* 19.2, the Priene inscription and Herodotus 1.101. All are right. Tischendorf's apparatus confirms that Bezae (D) has "her firstborn son" at 1:25 and has "You are" at 3:17 (with the Old Latin *a*).

It is not ready to publish yet, for these reasons:
- book.json still misquotes 27:25 and 28:19, so the build warns.
- The Mary traditions card says something false about the Reformed confessions. The 1:25 note claims more about Calvin than the card itself does.
- The 4:10 variant gets its witnesses wrong (Ephraemi, the early versions, Justin) and overstates the case.
- Several verses render the same Greek differently from their parallels in other parts, against the brief. 3:10 and 7:19 are the worst case, and a note here even claims the two match "word for word."
- The Jeconiah-curse material is not sourced.
- The church-and-Israel card cites a progressive-dispensationalist book for the classic dispensational view.
- The audience section leaves out the view that the evangelist was a Gentile.

None of these is critical. All can be fixed in place.

Counts: critical 0, major 7, minor 15.

## Findings

### 1. Major: book.json misquotes 27:25 and 28:19 (build warnings)
- **Location:** book.json, section "Matthew and the Jewish people" (27:25) and section "Matthew in the church" (28:19).
- **Problem:** The 27:25 quotation reads "His blood be on us and on our children". The Plain at 27:25 is "His blood on us, and on our children!". The 28:19 quotation reads "in the name of the Father..." but the Plain has "into the name of the Father and of the Son and of the Holy Spirit". The build warns on both. brief-nt requires 0 warnings. The 13:52 quotation that the build flagged earlier now matches its Plain.
- **Fix:** Quote the Plain exactly: "His blood on us, and on our children!" (27:25) and "baptizing them into the name of the Father and of the Son and of the Holy Spirit" (28:19). If the familiar wording is wanted, label it as the KJV. Also check "You have heard ... but I tell you" (5:21–48) in "Matthew and the Law": the Plain at 5:22 says "But I myself tell you."

### 2. Major: the Mary card misstates the Reformed confessions; the 1:25 note overstates Calvin
- **Location:** chapters.json ch. 1, `traditions` card (top `mary`), Reformed view; notes.json 1:25 "until".
- **Problem:** The card says "The Reformed confessions say nothing about it." That is false. Chapter 11 of the Second Helvetic Confession (Bullinger, 1566) calls Mary "ever virgin" (*semper virgo*). Zwingli affirmed her perpetual virginity strongly, and so did the 1534 Confession of Basel in substance. The later confessions (Belgic, Heidelberg, Westminster) only say "virgin." The note on "until" also says flatly that "Luther, Calvin and Wesley held that Mary remained a virgin." Calvin never affirmed this. On 1:25 he only refused to draw any conclusion from "until" or "firstborn," as this part's own card says. So the note contradicts the card.
- **Fix:**
  - Card: "Zwingli and Bullinger affirmed it, and the Second Helvetic Confession (ch. 11) calls Mary 'ever virgin.' Calvin would not argue either way from 'until' or 'firstborn.' The Westminster Standards say only 'virgin,' and most Reformed Christians today believe Mary had other children."
  - Note: "Catholic and Orthodox Christians held that Mary remained a virgin, and so did Luther, Zwingli and Wesley. Calvin declined to argue from this verse either way."
  - Consider adding an Anglican view: the Prayer Book and the Articles are silent, and divines such as Lancelot Andrewes and Jeremy Taylor affirmed it.

### 3. Major: the 4:10 variant ("behind me") has wrong witnesses and overstates the evidence
- **Location:** variants.json 4:10.
- **Problem:** Tischendorf (8th ed., 1:12, on 4:10) prints ὀπίσω μου in his text. He gives the following support:

  | Reading | Witnesses (Tischendorf) |
  |---|---|
  | Adds "behind me" | C\* D E L M U Z, about 150 minuscules, most Old Latin, the Curetonian Syriac and the Peshitta, Justin, Athanasius, Chrysostom |
  | Omits it | B, a corrector of C, K P S V Δ, f, k, the Vulgate, the Coptic versions, Irenaeus (Latin) and Tertullian |

  The entry gets this wrong in three ways:
  - It puts "Ephraemi (first hand)" with the omission, but Tischendorf cites C\* for the addition.
  - It credits "most early versions" to the shorter reading, but the Old Latin majority and the Syriac support the longer one.
  - It never names Justin, the earliest witness, who supports the addition.

  So the `why` ("The shorter reading has the older and wider support") is not true as stated. The shorter text is still very probably original: the two oldest Greek manuscripts omit the words, and the longer text could easily come from 16:23. Byzantine "majority" is correct for RP. The TR omits the words, as the entry says.
- **Fix:**
  - Reading 0: "Sinaiticus, Vaticanus, K, Δ, f1 and f13, the Vulgate and some Old Latin, the Coptic versions, Irenaeus (Latin), Origen."
  - Reading 1: "Bezae, L, Z, 33, 892, Ephraemi (C, first hand, as reported by Tischendorf; NA28 cites a corrector), most Old Latin, the Curetonian Syriac and the Peshitta, Justin Martyr (about 155), Byzantine majority."
  - Rewrite the `why`: "the two oldest Greek manuscripts omit it, and it is easily explained as a match to 16:23."
  - Check C against the NA28 apparatus or Metzger before printing either hand.

### 4. Major: the same Greek is translated differently from the other Matthew parts
- **Location:** plain.txt 3:10, 3:2/4:17, 4:3/4:6, 4:17, 4:23, 4:24; notes 3:10, 2:2, 4:24; ch. 4 VIEW L.
- **Problem:** brief-nt requires the same English for the same Greek. Here the earlier chapter (yours) is the model, but whichever part moves, the two must match. The mismatches:

  | This part | Other part | Greek | Difference |
  |---|---|---|---|
  | 3:10 "Any tree that fails to produce good fruit is being cut down and thrown into the fire." | 7:19 "...fails to yield good fruit gets chopped down and thrown into a fire." | identical: ...ἐκκόπτεται καὶ εἰς πῦρ βάλλεται | Every verb differs. The 3:10 note says "Jesus repeats the last line word for word." The Greek has no article, so "a fire" is closer. The 05-07 writer flagged this. |
  | 3:2; 4:17 "has drawn near" | 10:7 "has come near" | ἤγγικεν ἡ βασιλεία τῶν οὐρανῶν | The 3:2 settings card says the message is the same "word for word." |
  | 4:17 "From then on Jesus began" | 16:21 "From then on, Jesus started" | ἀπὸ τότε ἤρξατο ὁ Ἰησοῦς | Your 4:17 note and book.json rest Kingsbury's outline on this exact repetition. |
  | 4:23 "...cured every kind of disease and illness among the people" | 9:35 "...cured every disease and every illness" | πᾶσαν νόσον καὶ πᾶσαν μαλακίαν | Ch. 4 VIEW L says the summary is "repeated almost word for word." |
  | 4:3, 4:6 "If you are God's Son" | 27:40 "if you are the Son of God" | εἰ υἱὸς εἶ τοῦ θεοῦ | Your 4:3 note says "the same taunt returns at the cross." |
  | 4:24 "people who had seizures" | 17:15 "He is moonstruck" | σεληνιάζομαι | Your 4:24 note calls 17:15 the same word. |
  | 2:2, 2:8, 2:11, 4:9–10 "bow down" | 14:33 "fell down before him in worship"; 28:9 "bowed down to worship him"; 28:17 "bowed down in worship" | προσκυνέω | The 2:2 note promises "this one keeps the bodily act, 'bow down.'" |

- **Fix:**
  - Pick one rendering for each pair and have the lane lead align the other part.
  - 3:10: "...is cut down and thrown into a fire," or adopt 7:19's wording.
  - Make 3:2/4:17/10:7, 4:17/16:21 and 4:23/9:35 match.
  - Decide "God's Son" or "the Son of God" for εἰ υἱὸς εἶ τοῦ θεοῦ.
  - Decide "moonstruck" (with the note) or "had seizures."
  - Either propose a term for προσκυνέω in proposals/nt/terms.json, or soften the 2:2 note's claim.
  - List all of these pairs in your report for the lead.

### 5. Major: the Jeconiah-curse material is not sourced
- **Location:** notes.json 1:11 "Jeconiah, the cursed king".
- **Problem:** Two claims have no source:
  - "Readers have seen Matthew's virgin birth story as one answer" to Jeremiah 22:30.
  - "Some Jewish traditions held that the curse was lifted when Jeconiah repented in exile."

  The only source given is Brown, and Brown is not where either claim comes from. The Jewish tradition is real: b. Sanhedrin 37b–38a, Leviticus Rabbah 19:6 and Pesikta de-Rav Kahana 24:11 all say exile atoned for Jeconiah and the decree was cancelled. It needs those citations.

  The Christian argument (Jesus is Joseph's legal heir but not under the blood curse) is mostly a modern apologetic. It is common in evangelical writers such as Arnold Fruchtenbaum, and the "Luke gives Mary's line" view uses it too. It should be named as such, with its strongest counter-argument: by Matthew's own logic, a legal heir inherits the line's standing.
- **Fix:** Add the rabbinic references, and add a source key such as `talmud-sanhedrin` if none exists. Attribute the apologetic argument and give the counter-argument in one sentence. Optionally, note that Haggai 2:23 is the Bible's own reversal of Jeremiah 22:24.

### 6. Major: the church-and-Israel card cites the wrong book for its dispensationalist view
- **Location:** book.json `traditions` (top `church-israel`), Dispensationalist and Lutheran views.
- **Problem:** The Dispensationalist answer states the classic view: "two distinct programs," a kingdom "postponed, not cancelled." It cites `blaising-bock-progressive`. But Blaising and Bock's *Progressive Dispensationalism* (1993) argues against a sharp two-program, postponement model and stresses one plan of redemption. The citation contradicts the view it supports. The Lutheran view names the ELCA Declaration (1994) but has no source key.
- **Fix:** Cite a classic dispensationalist instead (Charles Ryrie, *Dispensationalism*; J. Dwight Pentecost, *Things to Come*). Or keep Blaising and Bock and say that progressive dispensationalists see more continuity: one people in Christ, with Israel's national promises still to come. Add a key for the ELCA Declaration.

### 7. Major: book.json `audience` leaves out the Gentile-evangelist view and states debated points as fact
- **Location:** book.json `audience.to`, `audience.views`, `facts` Author.
- **Problem:** The views cover Antioch, Galilee, inside or outside Judaism, and an early date. They leave out a real critical position: that the final evangelist and much of the community were Gentile Christians. K. W. Clark argued this in "The Gentile Bias in Matthew" (*JBL* 1947), and so did Georg Strecker, Poul Nepper-Christensen and others. They point to the evangelist's apparent misreading of Zechariah 9:9 at 21:7 and to 21:43 and 28:19. It is a minority view, but brief-nt asks for traditional and critical views fairly. The `to` also says as plain fact that the community "kept the law," which is one of the most disputed questions in Matthew studies. Your own "Matthew and the Law" section treats it as open.
- **Fix:** Add a fifth view, "A Gentile-Christian evangelist (minority)," with Clark and Strecker. Change "They kept the law" to "Many think they still kept the law."

### 8. Minor: the tense in 2:18 is wrong
- **Location:** plain.txt 2:18.
- **Problem:** "She will not be comforted." The Greek is the imperfect οὐκ ἤθελεν παρακληθῆναι: she refused, or would not be comforted. The Plain turns a past refusal into a future statement.
- **Fix:** "She would not be comforted" or "She refused to be comforted." The phrase also appears in the rachel topic contribution.

### 9. Minor: small losses and additions against the Greek
- **Location:** plain.txt 1:20, 2:1, 2:12, 2:22, 4:7, 4:9.
- **Problems and fixes:**

  | Verse | Problem | Fix |
  |---|---|---|
  | 1:20 | γάρ is dropped: "The child conceived in her comes from the Holy Spirit" loses the reason for not being afraid. | "...as your wife, because the child conceived in her..." |
  | 2:1 | "After that, look, magi" adds a time step that the Greek (a genitive absolute, then ἰδού) does not have, and it quietly supports the harmonizers' two-year gap. | "...while Herod was king, look, magi..." |
  | 2:12, 2:22 | χρηματισθέντες means "divinely warned." "A dream warned them" makes the dream the agent. | "Warned by God in a dream..." (2:22 already reads "Warned in a dream"). |
  | 4:7 | "It is written again" sounds like Scripture says the same thing twice. Πάλιν γέγραπται means "It is also written." | "It is also written." |
  | 4:9 | "fall at my feet" adds "at my feet." | "fall down and bow down to me." |

### 10. Minor: possible NIV echoes
- **Location:** plain.txt 1:20, 4:24.
- **Problem:** "don't be afraid to bring Mary into your home as your wife" follows the NIV's structure ("take Mary home as your wife") closely. "people who had seizures" is the NIV's interpretive rendering of σεληνιαζομένους. The Greek does not force either. Everything else in the four chapters reads as independent.
- **Fix:** 1:20: "don't be afraid to take Mary, your wife, into your home." 4:24: decide with finding 4 ("moonstruck" plus the existing note matches 17:15 and is not NIV-dependent).

### 11. Minor: the προσκυνέω count in the 2:2 note is wrong
- **Location:** notes.json 2:2 "Homage or worship?"
- **Problem:** "Matthew uses the word thirteen times for people before Jesus." Matthew uses προσκυνέω 13 times in all: 2:2, 8, 11; 4:9, 10; 8:2; 9:18; 14:33; 15:25; 18:26; 20:20; 28:9, 17. Of these, 10 are people before Jesus. 4:9–10 refer to the devil and to God, and 18:26 is a slave in a parable.
- **Fix:** "Matthew uses the word thirteen times, ten of them for people kneeling before Jesus."

### 12. Minor: quotations that do not match the site's Plain, or are garbled
- **Location:** notes 1:1, 3:15, 4:23; ch. 4 deep "Three tests"; book.json (see 1).
- **Problem:**
  - The 1:1 note gives "This is the book of the family history of Adam" as the wording of both Genesis 2:4 and 5:1. Genesis 2:4 is "the family history of the heavens and the earth," and only the Septuagint has *biblos* there.
  - The 3:15 note quotes Isaiah 53:12 as "was counted among the rebels." The Plain has "was counted with the rebels."
  - The 4:23 note quotes Isaiah 52:7 as "Your God reigns." The Plain has "Your God is King!"
  - The ch. 4 deep section quotes Genesis 3:6 as "good for food," "to make one wise." The Plain has "good to eat," "attractive for making a person wise."
- **Fix:** Use the site's Plain wording exactly (STYLE: quoting a book the site has translated). Split the 1:1 quotation: Genesis 2:4 in the Septuagint, "the book of the origin of heaven and earth"; Genesis 5:1, "This is the book of the family history of Adam."

### 13. Minor: variants that should have entries
- **Location:** variants.json.
- **Problem:** brief-nt asks for every place where the Byzantine text or the TR would make a KJV reader see a difference, and every place where SBL, NA28 and THGNT differ in the English. Missing:

  | Verse | Variant |
  |---|---|
  | 1:6 | TR/Byz repeat "the king": KJV "David the king begat Solomon." |
  | 4:23 | THGNT, Tregelles, TR and Byz add ὁ Ἰησοῦς: KJV "And Jesus went about all Galilee." This is an SBL/NA28 vs THGNT difference. Also 4:12 (TR/Byz "Jesus"), 4:18 (TR "Jesus") and 3:8 (TR "fruits," KJV). |
  | 1:11 | Θ, f1, 33 and others add "Josiah fathered Jehoiakim, and Jehoiakim fathered Jeconiah." This matters for the 1:17 count, which your note discusses. |
  | 1:18 | Metzger discusses τοῦ δὲ Ἰησοῦ Χριστοῦ against "of Christ" (Old Latin, Syriac, Irenaeus) and "of Christ Jesus" (B). |

- **Fix:** Add a short entry for 1:6 and 4:23, perhaps folding 4:12/4:18 into the 4:23 `b`. Mention the 1:11 and 1:18 readings in the 1:8/1:17 notes or in brief entries.

### 14. Minor: details in existing variant entries
- **Location:** variants.json 1:16, 1:25, 3:16, 4:17.
- **Problem:**
  - 1:16: reading 2 should also list the Curetonian Syriac, which Metzger reports in parentheses with Θ f13 and the Old Latin.
  - 1:25 `b`: the Jewish grave inscription from Egypt (5 BC) is real. It is the Arsinoe epitaph from Tell el-Yahudiyeh, CIJ II 1510. It is not sourced.
  - 3:16 `why`: "perhaps from Mark 1:10 ('he saw')" is muddled, because Mark 1:10 has no αὐτῷ either.
  - 4:17 `why`: "most think the word dropped out in an early translation" is unsourced. Tischendorf has nothing on this omission, and I could not confirm what Metzger says.
- **Fix:**
  - 1:16: add "Curetonian Syriac" to reading 2.
  - 1:25: cite the inscription as CIJ 1510 (Frey), or a commentary that reports it.
  - 3:16: say only that copyists more often added such a clarifying "to him."
  - 4:17: attribute the explanation ("the UBS committee rates the longer text as certain") or soften it to "most editors keep the word."

### 15. Minor: the 1:23 note does not give the traditional case on 'almah in its strongest form
- **Location:** notes.json 1:23 "Virgin or young woman?"
- **Problem:** The note says *'almah* "does not say whether she is a virgin (Hebrew has *betulah* for that)." It leaves out the strongest traditional argument: none of the Hebrew Bible's uses of *'almah* (Genesis 24:43, Exodus 2:8, Psalm 68:25, Proverbs 30:19, Song of Songs 1:3, 6:8) clearly refers to a married woman. It also does not say that *betulah* itself sometimes means a young woman of marriageable age (Joel 1:8; Gordon Wenham's study).
- **Fix:** Add one sentence on each point. The conclusion can stay as it is.

### 16. Minor: settings cards state debated points as settled, or overstate
- **Location:** chapters.json settings 3:2, 1:20–21, 2:23.
- **Problem:**
  - 3:2 `readers`: "John's message is word for word the message of Jesus (4:17) and of the disciples (10:7)." 10:7 has no "Repent."
  - 1:20–21 `readers`: "Jewish believers facing the charge that Jesus' birth was shameful." The charge is first attested with Celsus (about 175), so it is a likely setting, not a known one.
  - 2:23 `to`: readers "who ... were themselves called Nazarenes." Acts 24:5 shows the name was used, but not that Matthew's community bore it.
- **Fix:** 3:2: "the message of Jesus (4:17) and, in part, of the disciples (10:7)." Use "perhaps" or "many think" on the other two. Optionally add a card for the genealogy (1:1–17: Matthew to his readers, and what the list was meant to do for them), as you did for the fulfillment quotations.

### 17. Minor: ch. 4 VIEW T is wrong about Eastern Lenten reading
- **Location:** chapters.json ch. 4, VIEW T.
- **Problem:** "The forty days became the model for Lent in the Western and Eastern churches, and the testing is read on the first Sunday of Lent." In Byzantine use the first Sunday of Lent (Sunday of Orthodoxy) reads John 1:43–51, not the testing.
- **Fix:** "...and in the Western churches the testing is read on the first Sunday of Lent."

### 18. Minor: book.json sections are thin or vague in two places
- **Location:** book.json sections "Matthew, Mark and Luke" and "Matthew and the Jewish people"; `authorship` "Critical scholarship."
- **Problem:**
  - The Synoptic section is one paragraph. It does not mention the "minor agreements" of Matthew and Luke against Mark, which are the main evidence for the Farrer view, or Matthew's own material (often called M).
  - "Many Protestant and Orthodox bodies have made similar statements" names none. Examples: the WCC Amsterdam Assembly (1948), the ELCA Declaration (1994), the Presbyterian Church (USA) statement (1987). Orthodox statements are fewer, and the claim should be made carefully.
  - The critical reason "which an apostle who had been there would hardly need" gets no traditional reply. A traditional reader would say an apostle could follow Peter's account through Mark, as Augustine and modern defenders argue.
- **Fix:** Add one sentence on each. Name two or three church statements with keys, or say "several Protestant churches."

### 19. Minor: overlapping source keys
- **Location:** parts/01-04/sources.json: `chrysostom-hom-matthew`, `calvin-evangelists`, `ignatius` (shared).
- **Problem:** These duplicate keys that already exist:
  - `chrysostom-matthew` (1Ma/01-04: Chrysostom, *Homilies on Matthew*, "homilies 75–76, on Matthew 24"), and `chrysostom-homilies-matthew` (Mat/26-28). So one work now has three keys.
  - `calvin-harmony-gospels` (1Ma/01-04: the same Calvin commentary, "on Matthew 24:15").

  STYLE: "Reuse an existing key when it is the same work." The existing citations are narrowed to one passage, which is why they could not simply be reused. The shared key `ignatius` cites only "letters to the Ephesians and Philadelphians," but the 3:15 note also cites *To the Smyrnaeans* 1:1.
- **Fix:**
  - Use the existing keys `chrysostom-matthew` and `calvin-harmony-gospels` in all Matthew parts, and drop `chrysostom-hom-matthew`, `chrysostom-homilies-matthew` and `calvin-evangelists`.
  - Ask the lead, in proposals/nt/build.md, since the nt lane may not edit 1Ma files, to make the two 1Ma citations general (the whole work, with the passage moved into the 1Ma note text). Keep the Pringle-translation detail if wanted.
  - Ask the lead to widen `ignatius` to "letters" (Ephesians, Smyrnaeans, Philadelphians...), or add `ignatius-smyrnaeans`.

### 20. Minor: topic cores (proposals/nt/topics): no duplicates, but some errors and gaps
- **Location:** proposals/nt/topics/{nazareth, matthew, synoptic-problem, magi, virgin-birth, herod-family, galilee, testing-of-jesus, jesus}.json.
- **Duplicates:** I checked all 429 cores in content/topics/ and every proposals folder, by id, title and `aka`. None of the ten duplicates an existing topic. The nearest are `mary` (aka "Virgin Mary", "Immaculate Conception") beside `virgin-birth`, `genealogies` (aka "genealogy of Jesus") beside `jesus`, `chronicles-and-kings` (aka "synoptic parallels") and `jude-and-2-peter` beside `synoptic-problem`, and `bethlehem` and `wilderness` beside `magi` and `testing-of-jesus`. These are close, not duplicates.
- **Problems:**
  - **nazareth:** the lead says "the earliest outside mention is a synagogue inscription from Caesarea ... about AD 300." Julius Africanus (about 220, in Eusebius, *Church History* 1.7.14) already names "Nazara." The inscription is the earliest Jewish or non-Christian mention. The core also has no sources.
  - **matthew:** the aka "Levi" collides with the patriarch and tribe of Levi in search. The Papias wording differs from book.json's: "in the Hebrew language ... each one translated" against "in the Hebrew dialect ... each person translated." Quote one translation the same way in both.
  - **synoptic-problem:** "The facts to explain" leaves out the minor agreements, the strongest datum against Q, so the Farrer case is not given in its strongest form. Add one sentence.
  - **Whole-Bible leads:** `magi` could mention the Septuagint's *magoi* in Daniel 2:2, 2:10 and 5:7 and Balaam's star (Numbers 24:17). `virgin-birth` could mention Isaiah 7:14 and its debate. `jesus` could point to the Old Testament hopes it fulfills (link to messiah). The other leads are accurate and fair.
  - **Missing `related` lists:** virgin-birth→mary, genealogies; herod-family→edom (Herod was an Idumean); magi→bethlehem, sorcery; testing-of-jesus→wilderness, satan; galilee→nazareth; john-the-baptist→elijah, baptism; jesus→messiah, son-of-god.
- **Fix:** Correct the nazareth lead and add sources. Change the matthew aka to "Levi son of Alphaeus." Harmonize the Papias quotation. Add the minor agreements, the `related` lists and the whole-Bible clauses.

### 21. Minor: works.json and the "Gospel of the Nazarenes" label
- **Location:** proposals/nt/works.json `gospel-of-the-nazarenes`; notes.json 3:14.
- **Problem:** The 3:14 note quotes Jerome, *Against the Pelagians* 3.2, as the "Gospel of the Nazarenes." Jerome himself calls it the Gospel "according to the Hebrews." Tischendorf on 3:13 also reports it as Jerome's "ev. Hebr." Assigning it to the Nazarenes is a modern scholarly classification (Vielhauer and Strecker in Schneemelcher). Part 05-07 has proposed a separate `gospel-of-the-hebrews` work, so the site will have two works that can be confused. The other four entries (Ebionites, Protevangelium, Toledot Yeshu, Community Rule) are accurate and correctly tiered.
- **Fix:** In the note: "a Jewish-Christian gospel that Jerome calls 'according to the Hebrews' (usually classed today as the Gospel of the Nazarenes)." In the works.json note for `gospel-of-the-nazarenes`, add that Jerome's quotations go under the name "according to the Hebrews," and cross-refer to `gospel-of-the-hebrews`.

### 22. Minor: smaller fact and fairness points in the notes
- **Location:** notes 1:3, 1:19, 2:6, 3:7.
- **Problem:**
  - 1:3: "Tamar and Rahab were Canaanites." Genesis 38 never gives Tamar's people. Jewish tradition sometimes makes her an Aramean or a proselyte.
  - 1:19: "The angel's words in 1:20 fit the first view best" is the writer's own verdict on a debated point. Supporters of the reverence view (e.g. Léon-Dufour) read "do not be afraid" in their own favor.
  - 2:6: the transliteration *alephe* for בְּאַלְפֵי is odd. Use *'alfe* ("clans, thousands") against *'allufe* ("chiefs").
  - 3:7: "should not be read as a fair picture of Pharisees in general" is right, but it should be presented as the view of most historians (Sanders, Saldarini), not as a bare verdict.
- **Fix:** 1:3: "Tamar was probably a Canaanite (Genesis does not say)." 1:19: "Most commentators think the angel's words fit the first view best." 2:6: correct the transliteration. 3:7: add "most historians now agree."

## Fixes applied
1. Fixed: book.json now quotes 27:25 ("His blood on us, and on our children!"), 28:19 ("into the name of ...") and 5:21–48 ("But I myself tell you") in the current Plain; 13:52 already matched.
2. Fixed: Reformed view rewritten (Zwingli, Bullinger, Second Helvetic Confession ch. 11 "ever virgin", Calvin non-committal, Westminster "virgin"; new key second-helvetic-11); Anglican view added; 1:25 note now says Luther, Zwingli and Wesley held it and Calvin declined to argue from the verse.
3. Fixed: 4:10 witnesses rebuilt from Tischendorf as reported (C* with the addition, Justin, most Old Latin, Curetonian and Peshitta; omission B ℵ K Δ f1 f13 vg cop Irenaeus Origen); preview and why rewritten (oldest Greek omit, harmonization to 16:23).
4. Fixed in part, per lane decision that 01-04 is the model: 3:10 now "is being cut down and thrown into a fire" (article removed) and its note says "the same Greek line" instead of "word for word"; 4:24 now "moonstruck" to match 17:15, note rewritten; 2:2 note now states the terms rule ("bow down to" in every scene). Kept as model wording: 3:2/4:17 "has drawn near" (10:7 already matches), 4:17 "From then on Jesus began" (16:21 to align), 4:23 "cured every kind of disease and illness" (9:35 already matches), 4:3/4:6 "God's Son" (27:40 to align). Pairs reported to the lane.
5. Fixed: 1:11 note now cites b. Sanhedrin 37b–38a, Leviticus Rabbah 19:6, Pesikta de-Rav Kahana 24:11 (keys bavli-sanhedrin, leviticus-rabbah, pesikta-drk), names the apologetic argument as modern evangelical (Fruchtenbaum, new key) with the counter-argument, and keeps Haggai 2:23.
6. Fixed: Dispensationalist view now cites Ryrie and Pentecost (classic) and adds one sentence on progressive dispensationalism (Blaising, Bock); Lutheran view cites elca-declaration-1994.
7. Fixed: audience view "A Gentile-Christian evangelist (minority)" added (Clark 1947, Strecker; 21:7/Zechariah 9:9, 21:43, 28:19), with keys; "They kept the law" changed to "Many think they still kept the law."
8. Fixed: 2:18 "She would not be comforted" (imperfect); rachel contribution does not quote that line.
9. Fixed: 1:20 gar restored ("because the child..."); 2:1 "After that" removed; 2:12 and 2:22 "Warned by God in a dream"; 4:7 "It is also written"; 4:9 "fall down and bow down to me".
10. Fixed: 1:20 rebuilt ("take Mary, your wife, into your home"); 4:24 "moonstruck" (see 4).
11. Fixed: 2:2 note now "thirteen times, ten of them for people kneeling before Jesus" with the list.
12. Fixed: 1:1 note separates Genesis 2:4 (Septuagint wording) from Genesis 5:1 (Plain); 3:15 "counted with the rebels"; 4:23 "Your God is King!"; ch. 4 deep uses Genesis 3:6 Plain wording.
13. Fixed: new variants at 1:6 ("David the king") and 4:23 ("Jesus", an SBL/NA28 vs THGNT difference), whose b covers 4:12, 4:18 and 3:8 ("fruits"); the 1:11 Jehoiakim addition is mentioned in the 1:17 note; the 1:18 "of Christ"/"of Christ Jesus" readings are in the 1:18 variant b.
14. Fixed: 1:16 reading 2 adds the Curetonian Syriac (in part); 1:25 b cites the Arsinoe epitaph as CIJ 1510 (key frey-cij); 3:16 why no longer cites Mark 1:10; 4:17 why now "most editors keep the word, and the UBS committee rates the longer text as certain."
15. Fixed: 1:23 note adds the traditional argument from the other uses of 'almah and Wenham on betulah (key wenham-betulah).
16. Fixed: 3:2 readers "and, in part, of the disciples (10:7)"; 1:20–21 readers now say the charge is first recorded about AD 175 and "may already have faced"; 2:23 to "may themselves have been called Nazarenes"; new settings card for the genealogy (1:1–17).
17. Fixed: ch. 4 VIEW T now says the testing is read on the first Sunday of Lent in the Western churches.
18. Fixed: Synoptic section adds the minor agreements (26:68 / Luke 22:64) and M; Jewish-people section names the WCC (1948), PC(USA) (1987) and ELCA (1994) statements, with keys for the WCC and ELCA; authorship gives the traditional reply (an apostle could follow Peter's account in Mark, as Augustine supposed).
19. Not applied, by lane decision: chrysostom-hom-matthew and calvin-evangelists stay as the lane's general keys (the lane lead has asked the lead about the narrow 1Ma keys). The Smyrnaeans citation now has its own key, ignatius-smyrnaeans.
20. Fixed: nazareth lead now cites Julius Africanus (about 220, Eusebius 1.7.14) and calls the Caesarea inscription the earliest Jewish mention, with sources; matthew aka "Levi" changed to "Levi son of Alphaeus" and the Papias quotation matches book.json ("in the Hebrew dialect ... each person translated"); synoptic-problem adds the minor agreements; magi, virgin-birth and jesus leads get whole-Bible clauses; related lists added to all ten cores as suggested.
21. Fixed: 3:14 note now says Jerome calls it the gospel "according to the Hebrews" (usually classed as the Gospel of the Nazarenes); works notes for gospel-of-the-nazarenes and gospel-of-the-hebrews point at each other.
22. Fixed: 1:3 "Tamar probably one (Genesis does not say)"; 1:19 "Most commentators think ..., though supporters of the third read 'don't be afraid' in their favor"; 2:6 transliteration 'alfe / 'allufe; 3:7 "most historians now agree (Sanders, Saldarini)".
