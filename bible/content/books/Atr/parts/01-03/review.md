# Hostile review: Atrahasis (Atr), part 01-03 (chapters 1-3, Tablet I lines 1-260)

Verse numbers are the CURRENT ones (new 2:145; old 2:145-150 are now 2:146-151; old 3:92-108 are now 3:91-107).

## Verdict

This is careful, honest work. The Plain tracks the Akkadian and SEAL's sense closely, and the sigla, museum numbers, colophon details and quoted scholars that I checked (SEAL node1515, Millard, Hasel, Irenaeus 5.15.2, Perseus Iliad 15, Daniel 3:8 and 6:24 Aramaic) are real. I found no invented witness, copy or reading, so nothing is critical. It is not ready to publish, though. There are four kinds of problem. (a) The viewpoint and fairness rules are not fully met: the critical borrowing case rests on three names relayed second-hand by one of its opponents, the S lens often has no named holders, and one Christian argument contains a factual error. (b) Acts 20:28 is used three times as proof of "God's own blood" with no mention of its textual and grammatical crux. (c) Some Plain choices go beyond the Akkadian (We-ila, "office"/"sentence", scribal line counts reported as lost lines). (d) The brief's variant rule is applied unevenly: restorations from other copies get a variant entry in some places and not in others. `--check Atr/01-03` shows 0 warnings; its 10 errors are all book.json `cited_in` pointing at unwritten chapters, which are not this part's.

Findings: 0 critical, 10 major, 24 minor.

## Major

**1. Acts 20:28 is built on without its crux** (notes.json 3:50 spec; chapters.json ch3 views.C; the `blood` topic). Severity: major.
The site's Greek (texts/orig/Act.json) reads "τοῦ κυρίου καὶ θεοῦ ... διὰ τοῦ αἵματος τοῦ ἰδίου", glossed "Lord and God ... with the blood of the own". Two things are open: the church's owner is "God", "Lord" or "Lord and God" depending on the text, and "τοῦ ἰδίου" can mean "his own blood" or "the blood of his Own (Son)". The brief said to handle it "with care". All three places quote "his own blood" as settled and then assert that "God the Son ... gives his own life (Acts 20:28)". The point is orthodox either way, but the page must say the verse is debated, say why, and lean on John 10:18, Hebrews 9:14 and Romans 5:8-9 for the point. Fix: add a sentence on the grammar and the textual variants to the spec, and do not use the verse alone as proof in the C view.

**2. A factual error in the Hasel argument** (notes.json 3:9 canon; chapters.json ch3 deep "A deliberate answer"). Severity: major.
The text says humans are "the only creatures God blesses". Genesis 1:22 says God blessed the sea creatures and birds. Hasel (hasel.txt, p. 90) says only that man "appears as the only one 'blessed' by God (1:28)" in context. The note and deep box turn that into a claim that is false on the site's own Genesis Plain. Fix: say "Hasel stresses that God blesses man and gives him food (Genesis 1:28-29)", or "the only creature made in his image".

**3. The borrowing question does not give the critical view in its strongest form** (chapters.json ch3 deep). Severity: major.
agent-writer-world.md asks for the critical view "fairly, with who holds it". Here it is three names (von Rad, Simpson, Hooke), all taken from Millard's 1967 paper, which argues against them, with no argument given. The brief lists sources the writer never opened (`frymer-kensky-atrahasis`, `kikawada-quinn`; the Gen 01-11 notes already compare the poems). The strongest case is the shared sequence (humans made, population grows and is noisy, a flood is sent, a survivor is warned, the boat, the offering, a new order). It is never stated. Also, Millard's "the two traditions describe the same events ... Who can say it was not so?" (millard.txt ~720-728) is about the Flood. The deep box applies it to the making of humans ("the likenesses in the making of humans"), which Millard says only in the separate passage on man's earthy constituency. Fix: state the sequence argument with a holder you have opened (a web search will give the Frymer-Kensky and Kikawada-Quinn claims), keep Millard's Flood conclusion for the Flood chapters, and label Millard's creation remark as what it is.

**4. Internal contradiction: "the Igigi are vindicated and never punished"** (chapters.json ch2 deep; topics.json `fallen-angels`: "vindicated and never punished"). Severity: major.
The same pages say We-ila led the revolt (ch2 sum, settings 2:3-26, note 2:11), that "one god" is chosen "to bear the sentence" (2:151), and that he is butchered (3:33-3:49). Note 2:99 even says "the ringleader punished after all". On the page's own account a rebel was put to death. The Igigi as a body are relieved, but "never punished" and "vindicated" are not supported, and "never" speaks for Tablets II and III, which this part does not own. Fix: "the Igigi get their relief; the god singled out dies" and keep the verdict "unlikely", which is fine.

**5. 2:149 and 2:151 (parṣu, "office" / "sentence") commit to one crux, and the note misattributes the other** (plain.txt 2:148-151; notes 2:148 and 2:149; settings 2:148-151; glosses 2:149, 2:151). Severity: major.
- The same Akkadian word *parṣu* (A: *parṣam*, 2:149 line I 171; I 173 *parṣi*) is "office" in 2:149 and "sentence" in 2:151. The reader cannot see that it is one word.
- SEAL's English at I 171 is "Carry the regulation, bring your force!" and SEAL's note on 173 says the *parṣu* is "thrown on" the chosen god so that he bears the decision. The Plain's "Take the office, take hold of the power" and the gloss "his position as ruler" make Enlil abdicate (ch2 sum: "offers to go up", settings: "offer to give way"). Note 2:149 then says "the SEAL editors take it as a command to enforce the ruling". SEAL does not say that in anything I opened; it is an inference from their English. The chapter pages state the abdication reading as the story, while the same pages say it is disputed.
- The gloss at 2:151, "make him pay", changes "sentence" into a penalty.
Fix: translate *parṣu* the same way in both places ("the decree" or "the rule"), consider following SEAL's English since the Plain follows SEAL at 2:148, have the summary say "readers differ", drop "make him pay", and say in the note that the enforcement reading is the writer's inference from SEAL's English.
New 2:145 "He spoke to his brother ..." (I 167b): K(+)M-NA preserves "*ana aḫišu Anu*", so the "..." could read "Anu"; and 2:145 and 2:147 now say the same thing twice. SEAL treats 167a-b and 168-169 as doublets in different copies. Add a note, or a variant entry, so the repetition does not look like a mistake.

**6. The name We-ila** (plain 2:11, 3:48; notes 2:11, 3:48, 3:37; ch2 sum and settings). Severity: major.
- 2:11: copy A has only `{d}we-e` (A i 47). "ila" is not in the line. The Plain's "We-ila" gives the reader a name the line does not have. MM-MB's longer line ("ša išû ilu ṭēma", "who had understanding") is not in variants.json, although note 2:11 leans on it.
- 3:48: A has `we-e i-la ša išû ṭēma`. The Plain renders one word, *ila*, twice: once inside the name "We-ila" and once as "the god who had understanding". That is the "god twice" the lead flagged, and it is a translation fault. Fix: "We, the god who had understanding" (or "We-ila, who had understanding").
- SEAL's own note (commentary on 47) is that the word order is probably a copying corruption in which *išû* and *ilu* were confused, and that "Alla" is wrong. Note 3:48 says SEAL "reads [NAGAR] as We". Yet SEAL's score, and SEAL's English for line 223, give bb and e as "Alla". The note should say that SEAL is not consistent between the two lines.
- Note 3:48 also does not mention that bb/e make Enlil the killer ("Alla whom Enlil slaughtered"); that appears only in note 3:49. Add a variant entry for 3:48-49 (name and killer).
- *We* is a name of its own in SEAL, and the English "we" confusion is a reason to hyphenate, but say so in the Plain's first use, not only in note 2:11.

**7. Scribal line counts reported as "lost" lines** (plain 2:85, 3:55; the score). Severity: major.
2:85 (I 114a) is A's lower-edge count "58" (score: `A ii Lo. Ed.: 58`); SEAL calls it "a scribal remark counting the lines so far". 3:55 (I 227a) is `A iv 20: 55[+2?]`, also a count. The Plain says "(One line is lost.)" for both. That is false, and it hides real evidence about how the copy was made. Fix: "(A scribe's count of lines is written here: 58.)" and "(A scribe's line count: 55, perhaps plus 2.)", and a short note. Related: 2:75 ("Two lines are lost") has traces in S+T+-NA (`ii 1`, `ii 2`) and 3:67 and 3:77 have traces too; "almost entirely lost" would be accurate.

**8. Restorations from other copies without variant entries** (variants.json versus agent-writer-world.md "Translating"). Severity: major.
The brief says that where the base copy is broken and the Plain follows another copy "that is a variant entry too". The writer did this at 2:20, 2:90, 2:92, 2:94, 3:93 (now 3:92) and 3:101 (now 3:100), but not for these places:
- 2:95-102 and 2:108-115: almost all of the speech is taken from ba and bb (Neo-Babylonian). A is broken (I 124-131 begin only with traces).
- 1:21 / 1:20: A's "[They ma]de the Igigi carry" against ba's "those of Enlil used to carry the work" (SEAL 20). This changes who carried the work.
- 3:48-49: see finding 6.
- 3:34: "ina qerbi" is not in A (broken after `i-[lu`); it comes from bb. See minor 11.
- 3:85-87: "House of Destiny", "Ninshiku-Enki" and "The birth goddesses were gathered" come only from P(+)R(+)KB-NA, a Neo-Assyrian copy. The note names the source but there is no variant entry.
- 2:76-80: known only from S+T+-NA ("not paralleled by any other manuscript", SEAL on 110a-g). Note 2:79 covers it, but the Plain gives it no flag.
- 2:73: A's `i-lí` (O gods) against Lambert and Millard's *i-ni* ("my eye"): note only.
Fix: add entries (the mechanism is already in place) or, if the lead rules that notes suffice, say so in the brief and make the part consistent.

**9. The "noise" theme is built into the translation and stated as fact in a word note** (plain 3:76; notes 3:76 and 2:41; chapters.json ch2 spec). Severity: major.
- 3:76 `taštaḫda rigma ana awīlūti`: SEAL glosses *šaḫādu* "to give, present" and notes that the verb occurs only here and in II vii 32. The Plain "passed the noise on to" adds a direction ("on") that suits the writer's spec that the noise starts with the gods. Note 3:76's p line says "the gods have handed their noise to humans", and its body says the noise "that the striking gods made (2:41) now belongs to humans". The Akkadian has neither "their" nor the link. This is the theory written into a note that is not labeled a theory. Fix: "You have given noise to humankind" (SEAL: "bestowed clamor"), and move the link to the spec.
- The spec at 2:41 says human noise is "the old cry of overworked laborers". The brief describes the later noise (I 352ff) as caused by humans multiplying. The spec does not weigh that against itself. The brief also asks for "where published scholarship has made the same point"; the note says only "my own reading". Do one search, or say none was found.

**10. S and J lenses: unnamed holders, a wrong lens, and an absolute claim** (chapters.json). Severity: major.
- Ch1 views.S ("Christian readers who see real spiritual powers ...") and ch3 views.S ("Some Christian readers see ... a dark copy of truths the Bible tells rightly") name no one. The second claim (a slain god as a "dark copy" of a divine death that brings life) is not attributed to anyone I can find in the sources opened. If it is the writer's, it is a spec and belongs in a labeled box, and it sits close to the line "never argue against Jesus being the Son". Fix: name holders from sources opened (the ch2 S view shows how: Justin, Augustine, Heiser) or relabel it.
- Ch1 views.J is about Homer, which is neither Jewish nor Christian writing, and ends "Jewish and Christian writers never adopted it". "Never" cannot be checked from anything opened. Move the Iliad to H or M and put real J material (1 Enoch, Jubilees, Josephus, Berossus as quoted by Josephus and Eusebius) here, or say there is none relevant in these lines.
- Ch3 views.J: "Jewish and Christian writers kept the clay and the potter (Isaiah 64:8; Job 33:6)". Those are two Bible books, not later writers; "left out the slain god entirely" is again an absolute claim.

## Minor

11. plain 3:34 "through it" takes George and al-Rawi's "thereby", which SEAL rejects (SEAL on 209: "from it"). Literal *ina qerbi* is "in the midst of it". Use "within it" or SEAL's sense, and keep note 3:34.
12. plain 2:1 *karṣī akālu* is "began to slander" and 3:3 the same idiom is "accusing". Make them agree (SEAL: "accuse"). Also "began" is not in the Akkadian.
13. plain 2:96 "with your counselor ..." (A has asyndeton; ba/bb add "and"): "with" suggests they stand beside Nusku and changes the sense from "sent me". Use "and" or a comma list. Same for 2:109.
14. plain 3:100 "reed knife": Akkadian *luṭû appāri*, SEAL "dagger of the canebrake". It is a knife of the reed bed, not made of reed. Note 3:100 says "a sharpened reed was a midwife's tool", which nothing I opened supports (STYLE rule 2). Remove or source it.
15. notes 3:86 says Ninshiku is the Sumerian title "that stands behind the Akkadian *nišsiku*"; note 1:16 says "Nishshiku"; the line itself is *naššiku* / *nin-ši-kù*. The three spellings disagree and the etymology is unsourced. Also 1:16 gives "the prince" and 3:86 "Ninshiku" for the same title.
16. notes 1:5 puts "the great Anunnaki, the Seven" in quotation marks after Lambert and Millard and Foster. The wording is Millard's 1967 rendering (millard.txt), not theirs; neither was opened. Attribute it to Millard 1967 or drop the quotation marks.
17. notes 1:6 says "sometimes for the gods of heaven and of the underworld": no source opened. Source or cut (STYLE rule 2). Gloss 1:9 "the king's chamberlain" for *guzalû* is also unsourced; SEAL says only "chair-bearer".
18. notes 3:5 claims "Lambert and Millard left the line incomplete": not checked in anything opened. Cut.
19. notes 2:37 says the NA lines (110a-g) "seem to bring the plan to make humans into the council's first meeting". The surviving words are "You ... Take ... They sat ... Belet-ili sat ... Summon one god"; nothing there is about making humans. Cut or label as a guess.
20. notes 2:40 "one scribe reading, another writing, both trained in the temple and school" is speculation. The edge note (`ana pî šaṭir`, with `?` marks in the score) is stated without them. Say "probably".
21. notes 2:99 "Readers have taken this in different ways: as realism; as a scapegoat ..." has no holders (STYLE rule 3). Name them or cut.
22. notes 3:80 "God names people, not the other way around" (Genesis 32:28) is contradicted by Hagar naming the LORD in Genesis 16:13. Weaken to "in this verse".
23. notes 3:74: "his blood makes free children of God (Romans 8:21)". Romans 8:21 is about creation's freedom, not blood. Use Galatians 4:4-7 or Romans 3:24-25. Also Hebrews 9:14 is fine.
24. note 3:57 (Mami and Eve, "unlikely") names no scholar who has argued the link, as agent-writer-world.md requires; say none was found if so. The verdict is sound.
25. note 3:9 (`lullû`): the Plain drops "primeval" from *lullû* and uses "human being" for it and for *awīlum*, so the wordplay on the two words is lost. The note explains it, but add the Akkadian to a gloss or footnote in the Plain's first use.
26. plain 1:35, 1:37 "the reeds for the basket". SEAL's English renders *ša šupšikki* "that of the basket (= reeds)" and says so; the Plain loses the bracket. The note covers it; show "that of the basket (reeds)". Plain 1:41 "work beyond all measure": *atram* is "excess/surplus"; "work" is added. 1:2 "down in the ditch" (2:2): "down" is added.
27. plain 2:94, 2:107 "bow down": *kamāsu* is "kneel". Brief-consistency with SEAL's "bow down" is fine, but the Plain's choice should be recorded in a gloss.
28. plain 3:59 "Once she had mixed that clay": *iblula* is plural in SEAL's English ("they"); the Plain has "she" and the previous line has Nintu mixing alone. Minor, but check.
29. plain 2:16 "(Only a trace of this line is left.)" is true of copy A, but J-NA and S+T+-NA keep text ("they did not offer incense"). Note 2:16 covers it; add a variant entry or change to "A has only a trace; see note".
30. chapters.json ch1 sum says the Igigi "raised the mountains and made the marshes". Lines 28-37 are all "..." in the Plain; note 1:35 says "seem to say". State it as the same hedge in the summary.
31. chapters.json ch2 settings[9] range "2:148-151" is now right; but check the other ranges against the new numbering (settings 3:89-95 is OK). Gloss 2:149 anchors "the office" correctly now.
32. No `traditions` cards in any of the three chapters. The brief names exactly this: the gods of the nations as nothing, as demons, or as fallen members of the council (Deuteronomy 32:8-9, 17; Psalm 82; 1 Corinthians 8:4, 10:20) is a real Christian disagreement, and ch1 and ch2 S views raise it. Either add a card (sourced, no ranking) or confirm the book-level traditions will carry it.
33. Source key `kvanvig-primeval` is cited for claims taken from a quotation on intertextual.bible (pp. 414-415), not from the book. The wording is a fair summary, but cite as "as quoted at intertextual.bible/p/5398" or open the book.
34. Shared key `hasel-polemic` (Gen 01-11 sources.json) says "46 (1974)". The PDF header the writer opened reads "Evangelical Quarterly 45.2 (April-June 1974): 81-102". The correct volume is 45. The key lives in the Gen part, so tell the lead; do not fix it here.

## Items the lead asked about, answered

- **1:1 "When the gods were man"**: acceptable. Note 1:1 gives L&M (locative "like men"), von Soden (nominative) and SEAL (metaphor), matches SEAL's commentary, and keeps the bare wording. Add SEAL's point that Streck notes a later copy replaces the metaphor with *kī*, and that SEAL says Wasserman 2003 and Loesov 2004 "should be abandoned" (both opened in SEAL).
- **1:5-6 "the seven" as Igigi**: fine and well noted (SEAL comment 5 states "no other grammatical option" and the note says so). See minor 16 for the quote.
- **We-ila and "god" twice**: see finding 6.
- **2:147-148 cruxes**: the "I will go up" reading follows SEAL and is flagged. The *parṣu* handling is finding 5.
- **3:85, 3:12-14, 2:95-115 notes instead of variants**: 3:12-14 are fine (breaks, no other copy). 3:85 and 2:95-115 need entries: finding 8.
- **Spec notes**: noise (finding 9), drum as heartbeat at 3:39 (labeled and modest; SEAL says *uppu* "drum" and bb misread it; acceptable, but add that Lambert and Millard's "drum" is the usual rendering only if you can open them, otherwise leave out), Acts 20:28 (finding 1).
- **Daniel 3:8, 6:24 and Job 33:6**: verified against texts/orig/Dan.json (`wa-akhalu qartsehon di Yehudaye`; `akhalu qartsohi di Daniel`) and the site Plain ("slandered"); Job 33:6 (*qorats-ti* "was nipped off") is fair as "close in sound and meaning", not claimed as cognate.
- **hasel-polemic volume**: 45 (45.2), see minor 34.
- **Quotes checked and correct**: Millard ("decided to depose their taskmaster", "labouring at the behest", "set fire to their tools and advanced", "something in common", "very different", "No hint of the use of dead deity", "denotes ... full moon", "no derived Sabbath", "yet to be shown"), Hasel ("combats pagan mythological notions"), Irenaeus ("manifesting the hand of God", AH 5.15.2), Iliad 15.187-193. The Daniel/Job cross-links and the sigla (A BM 78941+78943; ba IM 124646; bb IM 124649; J-NA K.10082; MM-MB MM 818; X-MB BE 39099; colophon of A, Ipiq-Aya, Ammi-saduqa's statue year) match SEAL's table.

## Fixes applied

