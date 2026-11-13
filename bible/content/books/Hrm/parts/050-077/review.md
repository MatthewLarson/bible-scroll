# Hostile review: Shepherd of Hermas, part 050-077 (Similitudes 1-8)

## Verdict

The translation is sound. I read all 193 verses against Lake's Greek (`texts/orig/Hrm.json`) and found no mistranslation that changes a doctrine, no invented source, reading or fragment, and no copying of a modern translation. The Plain English Translation is readable, the key terms are consistent, and there are no em-dashes. `node tools/build.js --check Hrm/050-077` reports 0 warnings; its 6 errors are the book.json `cited_in` verses that belong to other parts. The weaknesses are in the apparatus around the text:

- One false priority claim ("the longest parable") contradicts another chapter of the same part.
- The Spirit/spirit capital is applied inconsistently at the doctrinal hinge of 59:5-60:4, and the topic text contradicts the note.
- Two source attributions go beyond what the opened sources say (Schaff on 56:3, and Schaff's and Chapman's views on Christology).
- Several views are credited to unnamed "readers".
- Several variants are missing for places where the translation or Lake's text departs from, or differs from, A.

Source checks done this session:
- Harnack, *History of Dogma* vol. 1, Gutenberg 19612: footnotes 254 and 261.
- Chapman, "Hermas", Catholic Encyclopedia, newadvent.org/cathen/07268b.htm.
- Schaff, *History of the Christian Church* vol. 2, §168, ccel.org/ccel/schaff/hcc2.v.xv.x.html.
- Lake's volume 2, local OCR `apostolicfathers02lakeuoft.txt`, for his footnotes and margin references.
- LSJ via lsj.gr for παντελῶς.

**Verified correct (the specific checks asked for):**
- **Harnack.** Every quoted phrase in the 59 deep section is in his note 254: "preserved entire", "pre-existent Son of God", "virtuous man", "did more than he was commanded", "adopted as a son and exalted", "though exaggerated, is not incredible", and "not certain whether he is identified with the chief Archangel". The Eusebius 5.28.3 citation is his own. The spec box's claim that Harnack saw the Jesus/believers parallel at Sim. 5.6.7 is right (his note 254, with note 261 on Sim. 5.6.7 itself).
- **Chapman.** The quotations are exact: "he did not distinguish the Son from the Holy Ghost", "he held that the Holy Ghost became the Son by His Incarnation", "rather misty and confused than definitely erroneous", and "As a layman, Hermas avoids dogma". The article is by John Chapman, 1910.
- **Schaff.** "represented as pre-existent and strictly divine", "seems to identify his pre-existent divine nature with the Holy Spirit", "a passage in a parable must not be pressed and it is differently explained", and "this meagre view ... closely connected with catholic orthodoxy" are all in §168 (footnote 1283 and the paragraph after it).
- **Lake.** The 59:6 footnote ("in which the Spirit had been incarnate ... of the Father and of the Son who is the Spirit"), the 69:3 footnote ("makes it very hard to reconstruct the Christology of Hermas"), the 60:2 "Gnostic tendency" footnote, "probably rightly" at 60:3, and the "Pius about 148" introduction all match the OCR.
- **The 59:1 variant.** Lake's printed footnote is "οὐ LE, om. A" (OCR line 8051, page 166). The digital apparatus mislocates the Latin addition of 59:3 at both 59:1 and 59:3, and the writer correctly worked round that.
- **Doubled φησίν at 64:3.** The digital text is the error, not Lake. His OCR (line 8681) has a single φησίν. The plain.txt rendering is unaffected, so nothing was lost.

## Findings

### Major

**1. [major] chapters.json ch 54 `sum`: "Similitude 5, the longest parable before Similitude 9" is false and contradicts ch 67.**
- Ch 67 `sum` says "Similitude 8 is the longest parable before Similitude 9".
- By the site's own division, Similitude 5 is chapters 54-60 (47 verses). Similitude 8 is chapters 67-77 (77 verses). Similitude 8 is the longer, so ch 54 is wrong.
- This is an unsourced "longest/first" claim (agent-reviewer-works.md item 6).
- Fix: delete the superlative at 54, or say "Similitude 5 is the longest of the first seven" if that is what is meant. Keep or source ch 67's claim by counting verses.

**2. [major] Spirit / spirit capital: inconsistent, and the note undercounts and omits 60:2.**
- Ch 59 note 57 ("The Spirit with a capital") says Hermas writes "the Holy Spirit" four times and "the spirit" three times in 59:5-7.
- The Greek has τὸ πνεῦμα τὸ ἅγιον (or the genitive) five times: 59:5 twice, 59:6, 59:6 end, 59:7. The bare πνεῦμα appears four times: 59:5 twice, 59:6, 59:7. The counts are wrong.
- 60:1 reads "so that the spirit that lives in it may testify for it". The Greek is τὸ πνεῦμα τὸ κατοικοῦν ἐν αὐτῇ, the same indwelling Spirit as 59:7 (τὸ πνεῦμα τὸ ἅγιον κατῴκησεν). Plain 60:1 lowercases it. Plain 60:2 (τὸ πνεῦμα τὸ ἅγιον) capitalizes it. 60:4 ("your flesh or your spirit") is lowercase.
- Note 57 explains only 60:1 and 60:4 ("may mean the believer's own spirit"). It never mentions 60:2, which sits between them and is capitalized. The brief and terms.json (entry 9: "a note wherever the capital decides a doctrine") require a note at every such place.
- The reader meets "spirit", then "Holy Spirit", then "spirit" in four verses with no explanation.
- topics.json `holy-spirit` contradicts the note. It says flatly: "Where Hermas speaks of the spirit in each believer, it is the Spirit of 1 Corinthians 6:19." The note says the word "may mean the believer's own spirit". Both cannot stand.
- Fix:
  - Correct the counts to five and four.
  - Add 60:2 to the note.
  - Capitalize 60:1 ("the Spirit that lives in it"), since the wording is that of 59:7. Or keep it lowercase and say why in a note on 60:1, and make the topic text match.
  - Decide 60:4 explicitly (see the same note).
  - Make `holy-spirit` agree with whatever is chosen.

**3. [major] Ch 59 deep section and linked notes and topics: attributions that go beyond the opened sources.**
- (a) "Near to later orthodoxy" third paragraph:
  - Schaff's text gives two things: the Son is "represented as pre-existent and strictly divine" and Hermas "seems to identify his pre-existent divine nature with the Holy Spirit". Both are quoted correctly.
  - The next sentence ("On this reading 'the Holy Spirit' names the divine nature of the Son, and the 'flesh' his humanity") is not Schaff's. Schaff never maps the "flesh" in 59:5-7 at all.
  - His "must not be pressed" remark is footnote 1283, about the Sim. 9.1 identification of the Son with the Spirit. He does not say how the passage "is differently explained", but sends the reader to Hilgenfeld, Harnack, Zahn and Link.
  - Fix: end the paragraph at Schaff's words. If the flesh/humanity reading is wanted, label it as Claude's gloss or find a named holder in an opened source.
- (b) chapters.json ch 59 `settings.views` "Ethics first": it puts Schaff's "a passage in a parable must not be pressed" behind the claim that the chapter's statements about the Son "should not be pressed". Schaff said it of the Spirit/Son identification at Sim. 9.1, not of 59 as a whole, and he did not hold an "ethics first" reading.
- (c) notes.json note 55 (59:5) says "Chapman ... says Hermas 'did not distinguish the Son from the Holy Ghost'". Chapman says "It has been thought with some reason that he did not distinguish ...", then "his words are not clear". The hedge is his and was dropped.
- (d) topics.json `son-of-god` says "Schaff and the Catholic Encyclopedia's John Chapman as unclear language near to later teaching". Chapman writes that Hermas's doctrine "is vague or incorrect", not "near to later teaching". Chapman does not belong in Schaff's group.
- (e) The angel Christology paragraph quotes Lake's note on 69:3 as if the Michael/Son clash alone "makes it very hard to reconstruct the Christology of Hermas". Lake's sentence is "This together with the [word unreadable in OCR] of the Son with the Spirit in Sim. ix. (cf. Sim. v. 5) makes it very hard ...". Ch 69 `views` H quotes it fully; 59 and the `michael` topic drop the Spirit half.

**4. [major] notes.json note 36 (56:3, `type` views): "Philip Schaff ... cites this verse when he says Hermas 'teaches not only the merit, but the supererogatory merit of good works.'"**
- In the CCEL text of §168 the sentence has no verse reference and no footnote marker. The same holds for the whole paragraph around it: it quotes no passage of Hermas.
- The quotation itself is right: "He teaches not only the merit, but the supererogatory merit of good works and the sin-atoning virtue of martyrdom".
- "Cites this verse" is an invented detail. Fix: "Schaff says of the book as a whole that he teaches ...". Optionally add that 56:3 is the obvious passage, as Claude's reading.
- Related: the part's `sources.json` entry `schaff-history-2-hermas` lists "note 710", which does not exist in §168 (the footnotes there run 1280-1300). Correct to the notes actually used (1283, 1284, 1285).

**5. [major] Views credited to unnamed "readers", "some", "many" (agent-reviewer-works.md item 6; brief-hrm.md says each Christology reading is "named from a source opened").**
- Ch 59 deep, "Angel Christology": "Some readers therefore see in Hermas a Christology in which the Son is pictured as the highest angel." The only people named are Lake and Harnack, and both say it is uncertain. No holder is given.
- Ch 59 `settings.views` "Christology first": no holder.
- Ch 59 `views` H: "The chapter's Christology is the main evidence for those who think the Similitudes come from a different stage or hand than the Visions". There is no named holder, "main evidence" is unsupported, and Lake's "can probably never be decided satisfactorily" (intro, OCR line 448) is about whether the book was written over twenty or thirty years. It does not mention Christology. Lake is credited with listing "that" among the questions, and he does not.
- Ch 69 note 96 and deep: readings (1) and (2) have no holder. Reading (3) is Lake's, correctly.
- Topic `michael`: "some readers identify Michael with the Son, others keep them apart".
- Ch 51 `views` D: "Readers have taken the parable as an early witness to the belief that the prayers of the poor help those who give to them."
- Ch 66 `views` N and note 81: "readers set 1 John 1:9 ..."; "Protestant readers stress instead texts like ..." with no Protestant source. The clause "in later practice the forgiven sinner made satisfaction through prayer, fasting and alms" is also unsourced.
- Ch 62 note 69: "Readers have connected this with Mark 3:29 and Hebrews 6:4-6."
- Ch 63 note 72: "Others see a parallel in 1 Corinthians 11:30-32".
- Ch 64 `views` D and note 76: "has been read in later debates about how long punishment lasts".
- Ch 68 note 92: "Some have suggested the church's altar and its discipline".
- Ch 59 note 58: "Others compare ...".
- Ch 67 note 86: "Some early Christian writers used a similar picture of the Word or Spirit, which is shared without being divided, like one flame lighting many lamps". No writer is named; this reads like a Justin or Tatian image from memory.
- Ch 69 note 97: "gave later readers an image of the order of penitents".
- Fix: name each holder from a source opened this session (Bucur's article on the Son and the angelomorphic Spirit turned up in my search but I did not open it; Lightfoot and Zahn are cited by Schaff), or delete the sentence, or relabel it as Claude's `spec`.

**6. [major] Priority and "earliest" claims, and site-voice statements of fact, with no opened source.**
- Ch 54 `sum`: the word "station" "appears here for the first time in Greek, as Lake notes". Lake says only that it "is not found elsewhere in Greek writers". That is a different claim, and "first" depends on dating Hermas.
- The same `sum` and `settings.readers`, and the topic `fasting` `common` entry ("Early Christians in Rome kept fixed fast days"), say the word "shows that the Roman church already had fixed fast days". Lake's note speaks of Latin writers using it for "a fixed time for fasting". That Hermas's own church kept stations is an inference, not a source, and it is stated as fact.
- Ch 56 `sum`: "one of the earliest Christian descriptions of how to keep a fast". This is an unsourced "earliest".
- Ch 51 `sum`: "one of the most loved in the book". There is no source, and brief-hrm.md bars "most popular" claims unless a source says so.
- Ch 64 `views` D and note 73: "not punishment after death" and "rather than about purgatory or hell" are stated as settled. Hermas himself speaks of "death" and "destruction forever" in the same similitude (62:3-4, 65:4). The reading is defensible but needs a named holder or hedge, and the "purgatory" clause names no church.
- Note 105 (72:3): a second baptism "which the church did not allow". No source, and no church named.
- Note 95 (69:2): "unusual but not unique among second-century Christians, who could call Christ the new law". No writer is named. Barnabas on the site (2:6) may be the intended witness.
- Ch 62 `views` J: "belong to the Jewish teaching of two spirits or two ways". The brief says the rabbinic yetzer and the Qumran spirits only from texts opened.
- Ch 54 `views` D: "practiced in Catholic, Orthodox and some other churches and rejected as binding by many Protestants". This is an unsourced church summary. The pointer to the Judith 8 and Matthew 4/6 cards is enough; drop the sentence.
- Ch 73 note 109: "The Roman church a generation earlier had written 1 Clement". With Pius at about 148 and 1 Clement at about 96, that is two generations. If the earlier date for Hermas is meant, say so.
- Fix: cite an opened source, soften to what Lake or the text says, or delete.

**7. [major] Missing variant entries, where Lake's footnote, or the plain translation, differs from A (lessons from the Tobit review: every departure and every difference in meaning needs an entry).**
- 59:6 `ἤρεσε γὰρ ἡ πορεία ...`. Lake: "ἤρεσε A, ἤρεσε τῷ θεῷ (or τῷ Κυρίῳ) L1L2". Plain 59:6 reads "pleased him", adding an object that the Greek of A and Lake lacks. That object is exactly where the Christology turns: who is pleased, God or the Spirit? There is no variant, and the note at 59:6 does not mention it.
- 70:2 `τάγματα τάγματα`. Lake's note: "emended in accordance with Sim. VIII ii. 8. A reads πάντα τὰ τάγματα: Funk emends to κατὰ τάγματα." Plain says "group by group". Ch 70 `views` H mentions the emendation; variants.json has no entry. Entering it would also record Funk's alternative.
- 73:1 `ἡμίξηροι`. Lake: "ἡμίξηροι L2E1; κατὰ τὸ αὐτὸ ἡμίξηροι A; tantummodo semiaridae L1; κατὰ τὸ αὐτό seems meaningless, and may be a misunderstood gloss". The chapter mentions it in `views` H, but variants.json has no entry.
- 55:2 (gap in the text). Note 31 describes it fully; there is no variant, though the Athos order and the Latin order differ (L1 *peregre profectus*; EL2 *peregre afuturus*).
- 55:7 `ἐπηγγειλάμην A; Hilgenfeld and others emend to ἐνετειλάμην`. Plain follows A ("promised"). The meaning differs, promise versus command.
- 56:8 `θεῷ A Ant.; κυρίῳ L Ath.` (God versus Lord). Plain follows θεῷ, and the ch 56 `views` H points to this quotation tradition without entering it.
- 50:6 `ἀνυβρίστως ἀγαλλιώμενος LE; ἀνυβρίστως καὶ ἀγαλλιωμένως A`. Note 6 describes it. A variant entry should exist, as the translation turns on it.
- Smaller omissions that are not meaning-bearing but belong in a complete apparatus: 51:1 (κύριε om. A), 51:4 (χαμαί om. Poxy), 53:5 (μηδέν A, μηδέ L; ch 53 H names it but no entry), 62:5, 63:4, 66:2, 66:5, 67:4 (two), 67:7, 67:11, 68:9, 69:3, 71:5, 72:6, 73:2, 73:3, 77:3 (καί). Several need only a one-line entry.

### Minor

**8. [minor] Slips in the digital Greek not in the brief's list (for the lead; do not enter in variants.json).**
- 64:3: the digital text has `Ἄκουε, φησίν, φησίν`. Lake's OCR (line 8681) has one φησίν, so this is a digital error. Add to `tools/lake-fixes.json`.
- 72:1: the digital text has `Βλέπων, φημί`. OCR (line 9776) has `Βλέπω, φημί, κύριε`. Probably also a digital error.
- 66:4: `θίψεσι ποικίλαις` (should be θλίψεσι) in both digital text and OCR (line 8876). It is likely Lake's own misprint, or both OCRs dropped the λ. The scan decides. The plain translation "all kinds of suffering" is correct.
- 69:2: `ἐστ᾽ κηρυχθεὶς` (elision before a consonant is impossible; probably ἐστὶν ὁ κηρυχθεὶς) and `τοῦ κηρύγματο` (κηρύγματος). The OCR shows both. The brief lists only ὅλοι. Check the scan.
- The part's plain text is unaffected by any of these.

**9. [minor] chapters.json ch 54 `views` H: "The Hamburg fragment (H) begins here".**
- Lake's introduction (OCR line 496) and the brief give H as Sim. 4.6-7 and 5.1-5. Ch 53's own `views` H correctly says H holds 53:6-7. So H does not begin at 54.
- Fix: "continues".

**10. [minor] 66:4 "Not at all" (οὐ παντελῶς).**
- LSJ (lsj.gr, παντελής) records "οὐ παντελῶς = not at all, Men. 5", so the rendering is supportable. The words can also mean "not entirely".
- The 66:4 variant's `why` and the chapter H view worry that "Not at all" would deny forgiveness. A short note on the ambiguity would remove that tension. Lake ("By no means") and Crombie ("Not at all") agree with the plain text.

**11. [minor] glosses.json.**
- 62:2 "to ruin" glossed "some for good, some just badly damaged". The anchor is only the second of two terms. The gloss muddles death (for good) and ruin (hope of renewal, 62:4).
- 66:4 "torment his own soul" glossed "be truly sorry, from the inside". This softens βασανίσαι, "torture, torment" (Lake: "torture"). A gloss should explain, not tone down.
- 76:3 "bore the name gladly" glossed "were glad to be called Christians". Hermas never uses "Christian" (Schaff: "The word Christian never occurs"). The gloss imports the word.
- 72:4 "betrayers" glossed "turned in its members". Note 106 says "probably informers"; the gloss states it flat.
- 51:5 "leans on the poor man" glossed "takes care of the poor man". The Greek (ἐπαναπαύομαι) is the rich man resting his hopes on the poor man's prayer; the gloss gives only the supply half.

**12. [minor] plain.txt 58:4 punctuation.**
- `"Could I have understood these things?" I said. "No. No one else could understand them either ..." Sir," I said, "make clear ...`
- All of this is Hermas speaking (the Greek is Hermas throughout). As punctuated it reads as though the Shepherd answers "No."
- Fix: recast as "Could I have understood these things? No, and no one else could either ...", all in one quotation.

**13. [minor] 59:5 `ἣν ἠβούλετο` rendered "flesh that he chose".**
- ἠβούλετο is "he wished/purposed" (Lake: "which he willed"). The word for "chose" is εἵλατο in 59:6, where plain also writes "chose".
- Using one English word for both removes the Greek's difference between God's prior purpose (59:5) and the later election of the flesh as partner (59:6). On the central Christology verses this matters.
- Fix: "the flesh he wanted", or "willed".

**14. [minor] `settings.to` and `readers`.**
- The stock phrase "Hermas alone, outside Rome; through him the Roman church, which he is to tell (58:1; 77:1)" is copied into chapters 50, 51, 52, 53, 58, 69 and 72. "Outside Rome" has no support in the text for those parables (Sim. 2 is "in the field"; Sim. 5's mountain is not located). Ch 54 puts the mountain "near Rome", and that has no support either.
- Ch 59 `readers` says "Roman Christians of the mid-second century" as settled. Lake (OCR line 448) allows composition over twenty or thirty years before about 148, and part 078-092's ch 89 deep says "a Roman Christian of the early 100s". The date given should be consistent across parts and hedged.
- This is the "one sentence copied into every chapter" problem (agent-reviewer-works.md item 6).

**15. [minor] Note-level slips against Lake and Scripture numbering.**
- Note 95 (69:2) sets Lake's "the law means the Christian rule of life, not (as in the N.T.) the Jewish Law" at 69:2. In Lake it is part of the footnote on 69:6-7 ("Suffer" means a martyr's death, and the law means ...), not on the identification of the law with the Son. Move it, or attribute it correctly.
- Note 72 (63:2): "Lake's margin elsewhere cites" Hebrews 12:5-11 and 12:6. Lake's Hermas margin cites only Hebrews 12:11, at 96:2, in another part.
- Note 75 (63:6): "Psalm 7:11 in the Greek, kritēs dikaios". The Greek Psalm is LXX 7:12; English 7:11. Lake's margin reads "Ps. 7, 12".
- Note 79 (66:1) and ch 69 `views` H paraphrase an unreadable word of Lake's note on 69:3 as "the Son's link to the Spirit". If the word cannot be read in either scan, quote the note without the paraphrase.
- Note 87 (67:6): the title "Thirteen kinds of sticks" disagrees with "about a dozen conditions" in its body, which then lists thirteen.
- Note 24 (54:1): the quoted Tertullian is from Lake's footnote and is correctly attributed to "Tertullian". The English "for we too are God's soldiers" is the writer's, not Lake's. Label it as the site's translation.

**16. [minor] Cross-part and build.**
- The `--check Hrm/050-077` errors are all book.json `cited_in[0..4,6]` verses that belong to parts 001-024, 025-049 and 093-114. Nothing in this part causes them.
- The `fasting` `common` entry should be deleted or sourced (see finding 6).
- Topic `holy-spirit` conflicts with note 57 (finding 2).
- Ch 89 (part 078-092) and ch 59 give different dates for the book's first Roman readers (finding 14).
- Ch 66 `echoes` lists "Hebrews 12:11; 3:1". A bare 3:1 means the book itself (Hrm 3:1), which is right but easy to misread; write "Shepherd of Hermas 3:1 (Vision 1.3.1)" or drop it.

## Fixes applied

1. Fixed. Ch 54 `sum`: superlative deleted. Ch 67 `sum` now "Similitude 8 (67-77, 77 verses) is the longest of the first eight Similitudes", counted from plain.txt (Similitude 5 has 47).
2. Fixed. Note 57 rewritten: five "the Holy Spirit", four bare "the spirit" in 59:5-7 (recounted in Lake's Greek). Capital kept through 60:1 ("the Spirit that lives in it", the verb of 59:7), 60:2, and 60:4 ("your flesh or the Spirit": σου goes with σάρκα only). The note says Lake lowercases 59:5 and 60:1 and gives the believer's-own-spirit reading. Topic `holy-spirit` now says the same thing.
3. Fixed (Schaff §168 and Chapman's article reopened). (a) The flesh/humanity sentence is cut. "Must not be pressed" is now placed in Schaff's note on Similitude 9.1 (78:1), with his pointer to Hilgenfeld, Harnack, Zahn and Link. (b) "Ethics first" now cites Chapman's "As a layman, Hermas avoids dogma"; "Christology first" names Harnack. (c) Note 55 keeps Chapman's own hedge ("it has been thought with some reason", "his words are not clear"). (d) `son-of-god` gives Schaff and Chapman separately, in their own words. (e) Lake's 69:3 note now carries the Son-and-Spirit half (OCR line 9536; the word itself cannot be read, so it is described, not quoted) in ch 59 deep, ch 69 H, notes 79 and 96 and topic `michael`.
4. Fixed. Note 36 says Schaff wrote this of the book as a whole, without citing a verse. 56:3 as the plainest case is labeled the site's reading. sources.json: "notes 1283-1284, and note 710" is now "note 1283".
5. Fixed. Unnamed holders are cut or rewritten as what the text itself leaves open: ch 59 deep (angel Christology), the ch 59 settings views (now Harnack and Chapman), ch 59 H (the "main evidence" sentence and the misused Lake quote cut), ch 69 deep and note 96 (two possible pictures, then Harnack and Lake), `michael`, ch 51 D, ch 66 N, note 81 (the unsourced "later practice" and "Protestant readers" cut), notes 69, 72, 58, 92, 86 (the uncited flame image cut) and 97. Also ch 58 D ("later readers"). Note 76's "later debates" is under 6.
6. Fixed. Ch 54 `sum` and `readers` and the `fasting` topic (section and `common`) now quote Lake exactly ("not found elsewhere in Greek writers", "a fixed time for fasting"); "first time" and "the Roman church already had" are cut. Cut: the 56 "earliest", the 51 "most loved", the ch 54 D church summary, the note 105 "which the church did not allow", "a generation earlier" in note 109 (now cites 1 Clement 46:5), and the 66 D "one of its clearest places". Ch 64 D and notes 73 and 76 now rest on the text's own "everyday life" (63:4), with the death and "destruction forever" of 62:3-4 named; purgatory is no longer mentioned. Note 95: the claim about second-century Christians is replaced by the site's Epistle of Barnabas 2:6 ("the new law of our Lord Jesus Christ"). Ch 62 J now quotes the site's 36:1 ("Two angels are with each human being") and Daniel 10, not "the Jewish teaching of two spirits".
7. Fixed. 25 new variant entries from Lake's footnotes (texts/src/Hrm.app.json, checked against the OCR for 59:6 and 70:2): 50:6, 51:1, 51:4 (χαμαί, Oxyrhynchus Papyrus 1172 per Lake's introduction), 53:5, 55:2, 55:7, 56:8, 59:6, 62:5, 63:4, 66:2, 66:5, 67:4 (two, Berlin Papyrus 6789), 67:7, 67:11, 68:9, 69:3, 70:2 (with Funk), 71:5, 72:6, 73:1, 73:2, 73:3, 77:3. 59:6 explains "pleased him" (A has no object; L1 L2 add "God" or "the Lord"), and the ch 59 H view points to it.
8. For the lead, not touched (texts/ and lake-fixes.json are the lead's): 64:3 doubled φησίν (Lake OCR line 8681 has one), 72:1 Βλέπων for Βλέπω (OCR 9776), 69:2 ἐστ᾽ and κηρύγματο (and the brief's ὅλοι), 66:4 θίψεσι (also in the OCR; scan to decide). The Plain English Translation follows Lake's page at each ("Listen," he said; "I see, sir"; "is the Son of God preached"; "all kinds of suffering"), so no verse changed.
9. Fixed. Ch 54 H: H "begins at 53:6, continues here" (Lake's introduction: Sim. IV. 6-7 and V. 1-5).
10. Partly. "Not at all" is kept (Lake: "By no means", OCR 8934). New word note on 66:4 "Not at all.": the Shepherd denies forgiveness "at once", not forgiveness (66:5; 77:3). LSJ could not be opened this session (lsj.gr and Perseus refused), so the "not entirely" sense is not stated.
11. Fixed. Glosses: 51:5 "rests his hopes on the poor man's prayers"; 62:2 "to being spoiled, though with hope of renewal (62:4)"; 66:4 "put himself through inner torment (Lake: 'torture')" (Lake OCR 8935); 72:4 "people who abandoned the church or betrayed it"; 76:3 "were glad to carry the Lord's name".
12. Fixed. 58:4 rebuilt from the Greek (μὴ οὖν, φημί ... ; οὐδὲ ἕτερος ... ἔτι, φημί, κύριε): it is now all one speaker, with "I said" set inside the quotes.
13. Fixed. 59:5 now "flesh that he wanted" (ἠβούλετο). Note 55 explains the difference from εἵλατο "chose" (59:6). The quotes are updated in note 55, the ch 59 `sum` and the topics `holy-spirit` and `son-of-god`. No other book quotes 59:5.
14. Fixed. "Outside Rome" is replaced in chapters 50-53, 58, 59, 69 and 72 by the setting the text gives (the field 51:1, the mountain 54:1, the plain 67:1 and 70:2) or by none. Ch 54 "near Rome" is cut. Ch 59 `readers` no longer gives a date and points to the book's introduction (lead decision: no part-level date). The ch 89 date (part 078-092) is for the lead.
15. Fixed. The Lake "law means the Christian rule of life" quote is moved from note 95 to note 98 and ch 69 D, as his note on 69:6-7 (OCR 9638-9640). Note 72: the "Lake's margin elsewhere" claim is cut. Note 75: Greek Psalm 7:12 (checked with tools/lxx.py) and Lake's margin "Ps. 7, 12". Notes 79 and 96 and ch 69 H no longer paraphrase the unreadable word. Note 87: "thirteen conditions". Note 24 and ch 54 R: the English of Tertullian is labeled the site's translation.
16. Fixed. The cited_in errors are gone (book.json was fixed by its own agent). `fasting` `common` and `holy-spirit` are under 6 and 2. Ch 66 `echoes`: 3:1 is moved to the front, so it no longer reads as Hebrews 3:1. The cross-part date is for the lead under 14.

Plain English Translation verses changed: 58:4, 59:5, 60:1, 60:4. Counts: 193 verses, 123 notes (+1), 51 variants (+25), 84 glosses, 28 chapter pages, 18 topic contributions. `VERBOSE=1 node tools/build.js --check Hrm/050-077`: 0 errors, 0 warnings.
