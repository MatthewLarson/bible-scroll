# Hostile review: Tobit 7–14, part 07-14

**Scope.** I reviewed every file in this folder: plain.txt, notes.json (90), variants.json (31), glosses.json (35), chapters.json (8 pages), topics.json (16 contributions) and sources.json. I checked them against:
- texts/orig/Tob.json: `grc` (Sinaiticus, the base) and `grc_b` (Vaticanus), read verse by verse;
- Swete's apparatus in texts/src/Tob.app.json;
- the Vulgate and Douay in texts/src/Tob.lat.json;
- part 01-06, the site's Plain for the 66 books it has translated, and every chapters.json and book.json traditions card on the site.

**Build.** `node tools/build.js --check Tob/07-14` gives **0 errors, 0 warnings** (131 verses, 90 notes, 31 variants, 35 glosses, 8 chapter pages, 16 topic contributions).

**Quotations checked by script.** Every Greek `orig` string in variants.json and notes.json is in Swete's Greek or apparatus, except κάτοικοι at 13:11, which the entry honestly labels as a correction. Every Latin quotation matches the Vulgate file, and every Douay quotation matches the Douay file. **I found no invented reading.**

## Verdict

This is careful, honest work. The translation is built from the Sinaiticus Greek, not from a modern version. I compared every verse in my head with the NRSV, NABRE and NETS and found no sentence shape that depends on them. Where the Greek forces the wording (for example 7:11 "She is given to you from today"), any likeness is the Greek's.

The four places where the Plain leaves Sinaiticus are all handled openly and well:
- 11:4, the dog;
- 11:12 and 11:19, the two missing verses;
- 13:6b–10a, the gap.

So are the hard places in Sinaiticus: Tobias/Tobit (7:2), Nabad (11:18), Athēr (14:4), the "I" of 14:10, and Achiacharus (14:15). All the claims I was asked to check by web search hold up where I could reach a source. The details are under "Claims verified" at the end.

The weaknesses:
- **Two traditions cards** (ch. 12 and ch. 13) are thinly sourced on the points that matter. In places they dodge the question or repeat a card the site already has.
- **One corrupt Sinaiticus line (13:16)** and several small additions are smoothed into the Plain without a variant or note.
- **Several meaningful Vaticanus/KJV differences** have no entry, above all 14:9 and 13:1.

Nothing is critical. Fix the four major findings before publishing.

**Counts:** 0 critical, 4 major, 20 minor.

## Findings

### 1. MAJOR: plain.txt 13:16 and elsewhere: silent smoothing of Sinaiticus

**13:16.** Sinaiticus reads ὅτι Ἰερουσαλὴμ οἰκοδομηθήσεται τῇ πόλει οἶκος αὐτοῦ εἰς πάντας τοὺς αἰῶνας. The Greek is garbled: a bare dative "the city", then a nominative "his house", and no πάλιν. The Plain gives "for Jerusalem will be built again, / and in the city, his house, for all the ages." That adds "again" and "and in", and makes a choice about a corrupt line, with no note or variant. Vaticanus has a different line (οἰκοδομηθήσεται Ἰερουσαλὴμ σαπφείρῳ καὶ σμαράγδῳ…). This is exactly the kind of silent correction the brief forbids.

Smaller additions of the same kind, none recorded:
- **12:14.** "to heal you and Sarah." Sinaiticus has ἰάσασθαι καὶ Σάρραν, with no σε. Either "you" is supplied, or καί means "Sarah too".
- **13:12.** "who says a hard word **against you**." Sinaiticus has only οἳ ἐροῦσιν λόγον σκληρόν.
- **11:13.** "he flaked **the white films** off." Sinaiticus has no object (καὶ ἀπελέπισεν ἑκατέραις ταῖς χερσὶν…). The words come from 11:8 or from Vaticanus.
- **13:10.** "and love every sufferer in you / **through** all the generations." In Sinaiticus πάσας τὰς γενεὰς τοῦ αἰῶνος is a second object of ἀγαπήσαι ("love… all the generations"). "Through" follows Vaticanus's εἰς πάσας.
- **13:11.** "the name of the chosen one **will stand**." There is no verb in the Greek.

**Fix:** add a `word` note (kind `var` or `deb`) or a variant at 13:16 that gives the Greek and the choice made. For the rest, either italicize the supplied sense in a short note or bring the Plain back to the Greek.

### 2. MAJOR: variants.json: meaningful Vaticanus/KJV differences with no entry

STYLE.md requires an entry where the witnesses differ in meaning or where the KJV reads differently. These are missing:

- **14:9.** Vaticanus (followed by the KJV) has σὺ δὲ τήρησον τὸν νόμον καὶ τὰ προστάγματα, καὶ γενοῦ φιλελεήμων καὶ δίκαιος: "keep the law and the commandments, and be merciful and just". That is a different command from the Sinaiticus charge to the children. It is the biggest unrecorded difference in the part.
- **13:1.** Vaticanus adds Τωβεὶτ ἔγραψεν προσευχὴν εἰς ἀγαλλίασιν, "Tobit wrote a prayer of rejoicing" (KJV). It titles the canticle and links to the command to write in 12:20. The 13:1–18 setting cites it, but readers of the verse see nothing.
- **11:15.** Vaticanus has ἐμαστίγωσας καὶ ἠλέησάς με, "you struck me and had mercy on me" (KJV), against Sinaiticus αὐτὸς ἐμαστίγωσέν με. The theme of striking and mercy (N42) rests on this verse.
- **14:8.** The 14:4 entry says Vaticanus repeats Jonah here, but 14:8 has no entry of its own. STYLE.md: "A variant that spans two verses: make one entry per verse."
- **12:13.** Vaticanus adds οὐκ ἔλαθές με ἀγαθοποιῶν, ἀλλὰ σὺν σοὶ ἤμην, "your good deed was not hidden from me; I was with you". It bears on the guardian-angel card in part 01-06.
- **Lesser ones:**
  - 7:1: Vaticanus has "Sarah met them" (KJV).
  - 14:7: a different text in Vaticanus.
  - 14:11: Vaticanus "righteousness delivers".
  - 14:4: λογισθήσονται, "counted", against Vaticanus σκορπισθήσονται, "scattered". Many read Sinaiticus's word as a slip.

### 3. MAJOR: chapters.json ch. 12 `traditions` ("Can an angel deceive?"): sourcing, dodged answers, overlap

- **Catholic row.** The sources (Catechism 2482–2485; Aquinas II-II q.110 a.3; Augustine on lying) establish that every lie is wrong. They say nothing about Raphael. The Thomist text that actually answers the card is *Summa* I q.51 a.3, which I checked:
  - Reply 1: "it is not contrary to the truth of the holy angels that through their assumed bodies they appear to be living men."
  - Reply 5: quotes Tobit 12:19 and calls the eating "not a true eating, but figurative of spiritual eating."

  Cite it. Also say where "the name truly describes his mission" comes from (which commentators), or label it an explanation that Catholic commentators give.
- **Orthodox row.** It is built on Chrysostom, *On the Priesthood* 1, where he defends his own trick on Basil. That passage is real, but it is not about angels or Tobit. "The fathers allowed that God's messengers may hide their identity" is not sourced.
  - **Fix:** say that one strand of Greek patristic teaching (Chrysostom; compare Cassian, *Conferences* 17) allowed a deception for another's salvation. Boniface Ramsey's "Two Traditions on Lying and Deception in the Ancient Church" (*The Thomist* 49, 1985) is the standard account. Present it as how that tradition would read 12:19, not as the Orthodox Church's stated reading of Tobit.
- **Lutheran and Anglican rows.** These dodge the question. Both answer "Tobit is not doctrine", which is the book.json card "May Tobit be used to establish doctrine?" again. Give an answer to the ethical question:
  - Lutheran: Luther's acceptance of the helpful lie (*Notlüge*) is a real, sourceable position.
  - Anglican: an answer from Anglican moral theology, or drop the row.
- **Reformed row (Whitaker).** I could not open the Tobit chapter of the *Disputation* (the monergism and archive.org copies stopped short of it, and archive.org was blocked). The claim matches what I recall of Whitaker, but it remains unverified. Give the Question and chapter, as in the Parker Society edition.
- **Overlap.** The card shares its core question with Joshua 2, "Was Rahab right to lie to save the spies?" Link to it ("Asked again at…") rather than re-arguing whether every lie is wrong, and keep this card to what is distinctive: angels taking human form and names.

### 4. MAJOR: chapters.json ch. 13 `traditions` ("earthly Jerusalem or the Church?"): overstated, near-unanimous, overlapping

- **Catholic row.** "Tobit's song is read in the Liturgy of the Hours as a hymn of that hope, **not of a restored earthly capital**." This overstates Catholic teaching. Catholic exegesis keeps Tobit's literal sense, the rebuilding of Jerusalem after the exile, and adds a spiritual sense. The Liturgy of the Hours itself titles the Friday Week IV canticle (13:8–11, 13–15) "Thanksgiving for the people's deliverance." Catechism 1045 is about the Church as "the holy city"; it does not comment on Tobit.
- **Too little disagreement.** Catholic, Orthodox and Reformed give essentially the same answer: the city is fulfilled in Christ, the Church and the new creation. Only the Dispensationalist row differs. So the card is really the millennium and land question, which already has cards:
  - Revelation 20 and Psalm 72 (`millennium`);
  - Numbers 34, Joshua 21 and Psalm 37 (`promised-land`).

  Either recast the card around what Tobit raises distinctively (does the Old Testament hope of a rebuilt *earthly* Jerusalem and Temple still stand?) and add Lutheran, Anglican and historic premillennial rows, or cut it and link this chapter to the existing `promised-land` and `millennium` cards.

### 5. MINOR: plain.txt 13:11 "the name of the chosen one"

N71 rightly says ἐκλεκτῆς is feminine and means Jerusalem. But the site renders 1 Enoch's messianic ḫəruy as "the Chosen One." A reader moving between the books will take Tobit's "the chosen one" as a messianic title. Write "the chosen city": the gender forces it, and it is not NRSV dependence.

### 6. MINOR: 14:15 and 14:10: the names Achiacharus and Ahiqar

- **The Plain's policy is inconsistent.** It corrects Sinaiticus elsewhere (Nabad becomes Nadab, Athēr becomes Assyria, κύριος becomes the dog, με becomes Ahiqar). Here it prints "Achiacharus king of Media", a form the variant itself calls a confusion with Ahiqar's name. Either print "Cyaxares", with the Sinaiticus form as a reading (as many translations do), or keep Achiacharus and say in the `p` that the Plain prints the manuscript's error on purpose.
- **The 14:10 readings clash with it.** R1 and R2 render Vaticanus's Ἀχιαχάρῳ as "Achiacharus." A reader who switches readings then sees the king of Media's name used for Ahiqar. Use "Ahiqar" in those `plain` strings.

### 7. MINOR: plain.txt 11:3 "for the ones coming behind"

ἐν ᾧ ἔρχονται means "while they are coming". The Plain turns a time clause into a beneficiary.

### 8. MINOR: plain.txt 7:11 "Seven men from our own kin have had her as their bride"

The Greek is ἔδωκα αὐτὴν ζ᾽ ἀνδράσιν, "I gave her to seven men." Raguel's own act, and his honesty about it, is lost.

### 9. MINOR: plain.txt 12:6 "so that they too may bless his name"

τοῦ εὐλογεῖν καὶ ὑμνεῖν τὸ ὄνομα αὐτοῦ is an articular infinitive with no new subject, most naturally "so as to bless and praise his name" (you). "They too" is interpretation.

### 10. MINOR: plain.txt 14:4 "For I know and believe"

The Greek is διὸ γινώσκω, "therefore I know." The Plain reverses the logic.

### 11. MINOR: inconsistent key terms within and across parts

- **σωτηρία** is "save us" (8:4), "be kept safe" (8:5) and "safety" (8:17).
- **τέφρα τοῦ θυμιάματος** is "glowing incense ashes" here (8:2) but "embers of the incense" in 6:17. "Glowing" is also an addition.
- **χειρόγραφον** is "signed bond" here (9:2, 9:5) but "a document in his own hand" in 5:3. Settle on one rendering, or explain the difference in N25.

### 12. MINOR: plain.txt 13:6b–13:9: no poetry line breaks

These lines are inside the hymn but are set as prose. The 13:6b sentence runs 44 words. Add ` / ` breaks.

### 13. MINOR: variants.json mechanics and small inaccuracies

- **13:11 R2.** Its `plain` is "(no such phrase: \"Many nations…\")". A reader who switches gets that parenthesis pasted into the verse. Give real replacement text, or move Vaticanus to `b`.
- **14:10 (second entry) R2.** "Manasseh gave alms, and" reads "Manasseh gave alms, and, he escaped from…". Fix the punctuation.
- **8:15 `why`.** "A corrector of Vaticanus also adds 'pure and holy'." Swete's note is `+ καθαρα και αγια BᵃᵇᵐᵍA`, so Alexandrinus has it too. Sinaiticus already has καθαρᾷ.
- **11:18.** The entry leaves out Swete's note that a corrector of Sinaiticus changed Αχεικαρ to Αχιαχαρος and οἱ ἐξάδελφοι to the singular. That bears on finding 6.
- **13:9 `why`.** It says ἁγίου echoes "the glory of the Holy One" in Vaticanus 12:12 and 12:15. Vaticanus 12:12 has only ἐνώπιον τοῦ ἁγίου; the "glory" is in 12:15.

### 14. MINOR: notes N20 and N74: quotations not in the site's Plain wording (the build missed them)

- **N20.** "we have become a laughingstock and a mockery" (Psalm 44:13–14; Psalm 79:4). The site's Plain is "a disgrace to our neighbors, / something to laugh at and sneer at."
- **N74.** "Bless the LORD, O my soul." The site's Plain is "Bless the LORD, my soul" (Psalm 103:1).
- **N74.** "the city of the great King." The site's Psalm 48:2 has "the town of the great King."

### 15. MINOR: N16 "Some manuscripts of Vaticanus put the words in a different order"

Vaticanus is a single manuscript. Say "Vaticanus puts the words in a different order (βοηθὸν Εὕαν στήριγμα)."

### 16. MINOR: N85 (and the 14:10 variant `why`): the Ahiqar plot is taken from the later versions

The Elephantine papyrus breaks off after the officer hides Ahiqar. The restoration and Nadin's punishment are known from the later Syriac, Armenian and other versions (Lindenberger). "Hides him in a pit" also needs checking: in the Aramaic he is hidden at the officer's house. Say which version supplies which part of the story.

### 17. MINOR: N41 "Protestants hold that Christians should give such honor to God only"

This overgeneralizes. Anglican and Lutheran calendars keep St Michael and All Angels (29 September). Narrow it to "Reformed and many other Protestants", or describe the honor that Protestants do give.

### 18. MINOR: N77 "Tobit and Revelation are the only places outside the Psalms…"

3 Maccabees 7:13, as I recall it, has the rescued Jews cry ἁλληλουια. Check it, and soften to "one of the few", as the `hallelujah` topic section already does.

### 19. MINOR: chapters.json ch. 8: unsourced claims

- **Deep, "A wedding text across the churches."** "Many Lutheran and Anglican couples still hear the prayer at weddings": source it to a current rite (for example Common Worship's list of readings, or Evangelical Lutheran Worship), or cut it.
- **Deep, "Three nights or one."** "Catholic teaching… treats the Greek text as the basis of modern translations" needs a source. Note that the Nova Vulgata Tobit does not follow Jerome's text.
- **Card, Orthodox row.** It is sourced only to Ware for a specific claim about practice ("does not ask newlyweds to keep a set time of continence"). Either soften it or source it to a service book.

Otherwise the card is good. It is fair and unranked, and its sources are real: Catechism 1601 and 2363, *Statuta* canon 13, the 1549 Book of Common Prayer, and Westminster Confession 24.2.

### 20. MINOR: inconsistency across parts on 12:9

The Tobit 4 card in part 01-06 quotes this part's verse as "almsgiving purges every sin" (12:9). The Plain here reads "Alms… cleanse away every sin." One of the two should change. Tell the 01-06 writer.

### 21. MINOR: chapters.json `settings`

- **Missing card.** The 12:1–5 dialogue about wages has none.
- **Double coverage.** 10:7 is covered twice (10:4–7 and 10:7–9).
- **Boilerplate.** The same `readers` sentence ("Most scholars: Jews of the diaspora around 200 BC, … without a Temple nearby.") is repeated word for word on about 20 cards. Say it once per chapter, and keep each card's `readers` to what is specific to that passage.

### 22. MINOR: glosses.json

- **12:7, "Government secrets".** This is anachronistic; "what a king keeps to himself" says it better.
- **8:17, "Master" glossed as "Lord who rules over everything".** This is a definition, not a gloss.

### 23. MINOR: N37 (Pliny)

The claim is right in substance: *Natural History* 32 gives fish gall for scars on the eye, from the callionymus. I could not open the text to confirm the section, so give the chapter (32.24 in Bostock–Riley) and name the fish.

### 24. MINOR: chapters.json ch. 12 `views.P`

"Lutheran and Reformed teachers objected to… the angel's assumed name… and to the claim that he only seemed to eat" has no source. Whitaker covers the name, if confirmed (finding 3). Name someone for the eating objection, or drop it.

## Checked and found sound

- **Translation.** It is faithful verse by verse, apart from the items above. Names and terms are consistent with part 01-06 ("alms", Azariah son of Hananiah, Gabael, Rages, Ecbatana, Ahiqar as Tobit's nephew at 1:22). The quotations of Genesis 2:18 at 8:6 and N15 handle the Greek "let us make" properly.
- **Readings from Vaticanus.** 11:4, 11:12, 11:19 and 13:6b–10a are correctly recorded, and the `why` reasoning is good. The 13:10 argument from "your" with no Jerusalem to refer to is strong.
- **The variants I was asked to check.**
  - 14:4 (Nahum or Jonah): Sinaiticus names Nahum, and Vaticanus and Alexandrinus name Jonah, with no note in Swete's apparatus.
  - 14:15: Swete's apparatus confirms that ℵ* reads Achiacharus and ℵc.a reads Nebuchadnezzar and Ahasuerus.
  - 14:10: με is correctly reported, and the interpretation is labeled as one.
  - 11:18: Nabad is correctly reported.
  - 13:6 and 13:9: the readings of Alexandrinus (στόματι; ἁγία) match Swete.
- **Ages.** The ages in 14:1, 14:2 and 14:14 (Sinaiticus, Vaticanus, Alexandrinus's εἴκοσι, Vulgate 102, 56/60 and 99) all match the files.
- **Vulgate and Douay.** The citations at 6:16–22, 8:4–5, 8:9–10, 12:9, 12:13, 12:15, 12:19 and 13:22 all match. (The file's Vulgate 12:9 has "viam æternam"; the note copies the file correctly.)
- **Quotations of the 66.** These match the site's Plain, apart from finding 14: Genesis, Deuteronomy, 1 Samuel, the Psalms, Judges, Job and Revelation.
- **Status.** Tobit is never called Scripture in the site's own voice. Every such statement is attributed to the Catholic or Orthodox churches.
- **Cross-references.** The links in both directions to Revelation 8:2–4, Revelation 21, Matthew 6, Acts 10:4, Luke 24:36 and 24:41–43, Luke 1:19 and 1 John 1:7 are present and accurate.
- **Cross-cards.** Every card the notes point to exists: chapter 2 (burial), chapter 4 (alms, close-kin marriage), chapter 6 (exorcism), 1 Enoch 20 and 99, Joshua 21 and Numbers 34.

## Claims verified (web search, 2026-10-23)

- **Elephantine marriage formula.** Confirmed: "She is my wife and I am her husband from this day for ever" (Mibtahiah contract, about 440 BC; also the 420 BC contract).
- **Aramaic Ahiqar at Elephantine.** Confirmed, but see finding 16 on the ending.
- **b. Sotah 2a.** The forty-days heavenly voice is as I recall it. I could not open Sefaria, because of a redirect.
- **Josephus.**
  - *Ant.* 9.214 confirmed: Jonah preached that Nineveh would "in a very little time… lose the dominion of Asia".
  - *Ant.* 1.197 confirmed: "they made a show of eating".
- **1549 Prayer Book.** Confirmed: "as thou didst send thy Angel Raphael to Tob[ie] and Sara, the daughter of Raguel." The line is absent from 1552 and 1662. I did not find a source stating the removal itself, but the later texts lack it.
- **Statuta Ecclesiae Antiqua canon 13.** It is consistent with the canon on couples keeping the first night in continence "pro reverentia benedictionis". I could not open the text, so the canon number is from memory.
- **Lectionary.** Confirmed: Tobit 7:6–14 and 8:4b–8 are both no. 801 (US Lectionary).
- **Liturgy of the Hours.** Confirmed: Tobit 13:1–8 at Morning Prayer, Tuesday Week I, and 13:8–11, 13–15 on Friday Week IV.
- **Aquinas.** II-II q.110 is correct for lying. The better citation for this card is I q.51 a.3, checked (finding 3).
- **Chrysostom.** *On the Priesthood* 1 is the right passage (the beneficial deceit of Basil).
- **Nahum at 14:4.** Supported. The *Word & World* article on Jonah reads 14:4 with Nahum, and Fitzmyer, Moore and the NRSV and NABRE print Nahum.
- **Not checked from a source (memory only).**
  - Whitaker on the false name (finding 3).
  - Pliny's section number (finding 23).
  - Raphael's feast on 29 September and the Synaxis on 8 November; both are standard.
  - Athur as Assyria (Old Persian Athurā, Aramaic ʾtwr); standard.
  - Catechism 334–336 (336 cites Tobit 12:12), 1045, 1434 (cites Tobit 12:8), 1601, 2360–2363, 2447 (cites Tobit 4) and 2482–2485. The paragraph contents are as I know them.

## Fixes applied

1. Agreed. 13:16 now reads "for Jerusalem will be built, / the city that is his house, for all the ages" (no "again"), with a variant giving the Greek, both ways of taking it, and Vaticanus. Variants added for 12:14 ("you" supplied), 11:13 (object supplied), 13:10 (Plain now "and all the generations", following Sinaiticus) and 13:11 (13:11 entry rebuilt). 13:12 brought back to the Greek ("A curse on all who speak harsh words!") and 13:11 made verbless ("and the name of the chosen city, for all the ages").
2. Agreed. Variants added for 14:9, 13:1, 11:15, 14:8, 12:13, 7:1, 14:7, 14:11 and 14:4 (counted/scattered).
3. Agreed. The card now has two rows: Catholic (Aquinas I q.51 a.3, replies 1 and 5; Challoner, Calmet and Menochius as gathered in Haydock's note on Tobit 5) and Reformed (Whitaker, as Haydock reports him: "would have this to be a lie"). The Orthodox, Lutheran and Anglican rows are dropped. The question points to the Joshua 2 Rahab card. Whitaker's Question and chapter are still unverified, because the monergism copy stops at Question I, chapter IV. New source key: haydock-commentary.
4. Agreed; per the coordinator, the card is dropped. Its content is now a ch. 13 deep section, "An earthly Jerusalem, or the Church?", with the Catholic view corrected (literal sense kept; Liturgy of the Hours canticle of thanksgiving) and pointers to the millennium (Revelation 20, Psalm 72) and promised-land (Numbers 34, Joshua 21) cards. Topics millennium and promised-land are added to ch. 13. Views.C was reworded the same way.
5. Agreed: "the chosen city"; note anchor and text updated.
6. Agreed in part. Achiacharus is kept, and the 14:15 `p` now says the Plain prints the first scribe's form on purpose. The 14:10 readings now use "Ahiqar" in their `plain`.
7. Agreed: "make the house ready while they are on their way."
8. Agreed: "I have given her to seven men from our own kin."
9. Agreed: "and so bless and sing praise to his name."
10. Agreed: "Therefore I know and believe."
11. Agreed. σωτηρία is now "keep ... safe" throughout (8:4, 8:5, 8:17), matching 6:18. 8:2 reads "the ashes of the incense", as in 6:17 (now revised in 01-06). χειρόγραφον is "the handwritten document" (9:2, 9:5, ch. 9 summary), after 5:3's "a document in his own hand"; N25 explains.
12. Agreed: 13:6b–13:9 set as poetry lines; the variant anchors are now each passage's first line.
13. Agreed, all five. 13:11 Vaticanus reading has real text; 14:10 R3 is "Because Manasseh gave alms"; 8:15 `why` names Bᵃᵇᵐᵍ and A and notes that ℵ has καθαρᾷ; 11:18 adds the ℵc.a corrector reading; 13:9 `why` corrected.
14. Agreed: N20 and N74 now quote the site's Plain (Psalm 79:4; Psalm 103:1; Psalm 47:2; Psalm 48:2 "the town of the great King").
15. Agreed: "Vaticanus puts the words in a different order (βοηθὸν Εὕαν στήριγμα)."
16. Agreed: N85 now says the Elephantine copy breaks off after the officer hides Ahiqar, and that the restoration and Nadin's end come from the later versions. "In a pit" is removed.
17. Agreed: N41 narrowed to Reformed and many other Protestants, noting the feast of St Michael and All Angels kept by Anglicans and Lutherans.
18. Agreed: N77 softened to "one of the few books outside the Psalms". 3 Maccabees 7:13 not checked.
19. Agreed. The "many Lutheran and Anglican couples" sentence is cut. "Greek as basis" is reduced to "modern Catholic translations are made from the Greek". The Orthodox continence claim is replaced by a softer statement.
20. Checked: book.json and part 01-06 now both have "cleanse away every sin" at 12:9. The 01-06 card no longer has "purges", so nothing to change.
21. Agreed. A 12:1–5 setting is added. 10:7–9 became 10:8–9. The shared `readers` sentence now appears only on each chapter's first setting.
22. Agreed: 12:7 "What a king keeps to himself"; 8:17 "Sovereign".
23. Agreed: N37 now cites 32.24 (Bostock–Riley) and names the callionymus. This still rests on memory, not on the text.
24. Agreed: the eating objection is dropped from views.P; the alms objection is sourced to the Apology, article 4, and the name objection to Whitaker.

Build after fixes: `--check Tob/07-14` and `--check Tob` give 0 errors, 0 warnings (90 notes, 45 variants).
