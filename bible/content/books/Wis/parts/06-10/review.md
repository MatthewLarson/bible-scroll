# Hostile review: Wisdom of Solomon 6-10 (part 06-10)

Reviewer: separate agent, 2026-10-31. Files read: plain.txt, notes.json (82), variants.json (11), glosses.json (41), chapters.json (5), topics.json (16), part sources.json, `.scratch/wis-06-10/` (sources-checked.md, drift-audit.md and the saved pages), `proposals/works/terms.json` and `proposals/works/topics/soul.json`, the Greek (`texts/orig/Wis.json`, Swete), Swete's apparatus (`texts/src/Wis.app.json`), the Vulgate/Douay (`texts/src/Wis.lat.json`), the KJV (`texts/en/Wis.json`), and the site's Plain of 1 Kings 3 and 2 Chronicles 1.
`cd bible && VERBOSE=1 node tools/build.js --check Wis/06-10` gives **0 errors, 0 warnings** (115 verses, 82 notes, 11 variants, 41 glosses, 5 chapter pages, 16 topic contributions).

## Verdict

The translation is mostly faithful. Checked verse by verse against Swete, I found no dropped clauses, wrong names or wrong numbers, and every variant entry matches Swete's apparatus. The weakness is the scholarship around the text, above all the 8:19-20 card that the brief singles out. Its Lutheran row is a Reformed theologian's 1870s inference about the Formula of Concord, and that confession says nothing about where the soul comes from. The Reformed and Orthodox rows rest on one individual author each. The "anathemas of 553" are stated as the council's act in three places, while the card itself hedges and the scholarship is disputed. The O Sapientia note cites a book the writer never opened, and its quoted English is the writer's own wording. Several key-term decisions are weak: `τύραννος` gets an invented "alone", and `παιδεία` is rendered "instruction" against the site's own Proverbs Plain. Chapter 9 is tied flatly to Gibeon although it presupposes the command to build the temple. About twenty factual claims are made from memory (STYLE rule 2). Nothing is invented outright, so I have no critical finding. Ten findings are major, thirteen minor. The part needs a fixer pass before it counts as reviewed.

**Findings: 0 critical, 10 major, 13 minor.**

What I verified in this session, with the source:
- Every Greek reading in variants.json against `Wis.app.json`: 6:12, 7:12, 7:14, 7:15, 7:30, 8:21, 9:16, 10:5 and 10:10 all match. For 10:13 the apparatus notes no difference, as the entry says.
- Latin lines quoted in notes (6:6 `tormenta patientur`, 7:25 `vapor`/`emanatio`, 8:20 `magis bonus`, 8:21 `continens`, 10:13 `a peccatoribus`) against the Vulgate/Douay file.
- 1 Kings 3:6-9 and 2 Chronicles 1:8-10 quotations against the site Plain.
- CCC 366 and the NPNF Origen quotations, via the writer's saved pages. Origen 2.9.6 "arrange His creatures according to their merit" and "harmony of one world" are present. 1.2.9 quotes Wisdom 7:25-26 and calls it the Wisdom of Solomon.
- Augustine, City of God 13.16 ("not by any body whatsoever, but by the body such as it has become in consequence of sin"), in the saved page.
- Confessions 10.29.40 and 10.31.45 (see minor finding 18).
- John of Damascus 2.12 ("body and soul were formed at one and the same time") and its argument against Origen, at newadvent.org/fathers/33042.htm.
- Felix Just's lectionary index (all the Wisdom 6-10 rows cited in chapters.json).
- D&C 93:29 wording, and Hodge on "began and ended with Origen".

## Major

**1. The Lutheran row of the 8:19-20 card is not the Lutherans' own document, and misstates it.**
Location: chapters.json ch. 8, `traditions[0].views` "Lutheran"; topics.json `soul` ("Catholic, Orthodox, Lutheran and Reformed teaching all reject it"); chapters.json ch. 8 `views.P`.
- The row reads "Divided over where souls come from, agreed against pre-existence. Charles Hodge reports that the Formula of Concord favors creation of each soul by God, but that most Lutheran theologians of the 1600s taught traducianism."
- Everything rests on Hodge, a Presbyterian writing in 1872 about another church. His sentence ("Even the Form of Concord ... favours creationism") is his inference, in his saved page `hodge-theology2.iii.iii.i.html`. He says nothing about Lutheran views of pre-existence, so "agreed against pre-existence" has no source at all. The topic text then upgrades it to "Lutheran teaching ... reject[s] it".
- I opened Solid Declaration I (bookofconcord.cph.org, `i_original_sin`). It says "God at the present day still creates and makes the human nature in people" (para. 7) and that God has created human nature "also since the fall" (para. 34). No paragraph says how a soul originates. The Formula does not take sides on creationism or traducianism.
- The row therefore attributes to a confession a position it does not state. The brief required "each row has a source that addresses it".
- The card also gives no locator for Hodge (vol. 2, Part III, ch. III, section 1 in the writer's own file), and sources.json has none either.
- Fix: open a Lutheran source that addresses the question (the Book of Concord itself, or Gerhard, Quenstedt or Pieper, read in this session) and rewrite the row from it. If none is found, say only what the Formula says: God creates human nature, and the confession does not settle the soul's origin. Or drop the row. Remove "Lutheran" from the topic sentence unless sourced. Add the Hodge locator.

**2. The Catholic, Orthodox and Reformed rows cite individual authors where the brief asked for the churches' own documents.**
Location: same card.
- Orthodox: only John of Damascus (an eighth-century father). That is a witness, not "Orthodox teaching". The row is honest about the quotation, but "Orthodox: Soul and body come into being together" is stated as the church's position.
- Reformed: only Hodge. A Reformed confession is available and is already a site source key (`westminster`); nobody opened it. Hodge's list "Calvin, Beza, Turrettin" is his, secondhand.
- Catholic: CCC 366 is a church document and is quoted correctly, but it says nothing about Wisdom 8:19-20 (see 9).
- Fix: for each of Orthodox and Reformed, open and cite a confession or catechism that speaks to the origin of the soul (I did not open any, so I cannot name the passage). Keep the individual authors as supporting witnesses and label them as such.

**3. "The anathemas of 553" are stated as the council's act in three places; the card hedges and the facts are disputed.**
Location: notes.json 8:20 canon note ("the Second Council of Constantinople's anathemas (553) condemned 'the fabulous pre-existence of souls'"); chapters.json ch. 8 Orthodox row ("condemned in the anathemas of 553"); topics.json `soul` ("the anathemas against Origen of 553 condemned it"). The card's Catholic row says the anathemas "come down with" the council, and the deep box says "of the 500s".
- The wording is accurate to its source. At newadvent.org/fathers/3812.htm the page headed "The Anathemas Against Origen" begins "If anyone asserts the fabulous pre-existence of souls, and shall assert the monstrous restoration". But that page does not say who issued them. The writer's own note (sources-checked.md) says so.
- A web search gave conflicting accounts: one source says the 15 anathemas were not part of the council's official acts and repeated an earlier 543 synod; others say the bishops issued them in 553 before the council formally opened; Richard Price's edition is said to include them in the Acts. I did not open Price or a primary text, so I do not assert which is right.
- Fix: use one wording everywhere, for example "the fifteen anathemas against Origen that tradition attaches to the Second Council of Constantinople (553); whether the council itself issued them is debated". Open Price (2009) or another actual source before stating who issued them. The "Catholic and Orthodox teaching" rows can then rest on the church documents of finding 2 rather than on 553.

**4. O Sapientia: the cited source was never opened, and the quoted English is the writer's own.**
Location: notes.json 8:1 ("O Sapientia"), `s: ["liturgy-hours"]`.
- sources-checked.md shows the only thing read was Wikipedia's "O Antiphons". The note cites `liturgy-hours`, the 1971/1975 *Liturgy of the Hours* with its General Instruction, which was not opened. That is a source credit for a book nobody read.
- The English in quotation marks ("O Wisdom, who came forth from the mouth of the Most High, reaching from end to end ... come and teach us the way of prudence") matches neither the Wikipedia English I fetched ("coming forth from the mouth of the Most High, reaching from one end to the other ...") nor any named translation.
- The Latin of 8:1 is given without Vulgate's "ergo" and with no ellipsis.
- The facts themselves check out in Wikipedia's page: 17 December, the first of the seven O Antiphons, sung as the Magnificat antiphon at Vespers, built from Sirach 24, Wisdom 8:1 and Proverbs 9:6.
- Fix: either open the Liturgy of the Hours (or the Roman Breviary/Missal text) and cite it, or cite the page actually read. Give the antiphon in Latin and mark any English as the writer's own rendering. Restore "ergo" or add an ellipsis.

**5. `τύραννος`: "you who rule alone" invents a word, and the term entry gives two renderings for one word.**
Location: plain.txt 6:9, 6:21, 8:15; notes.json 6:9; glosses.json 8:15; proposals/works/terms.json entry 1.
- The Greek has `ὦ τύραννοι` (6:9) and `τύραννοι λαῶν` (6:21). There is no word for "alone" (`μόνος`). The note claims "a tyrannos was a ruler who held power alone". I could not open LSJ (Perseus returned 403), so that definition is unverified. "Alone" also suggests a single monarch, which is not what the vocative plural says.
- The note says the word "stands beside 'kings' (6:1) as a respectful address". 6:1 is eight verses earlier, and "respectful" is a guess about tone.
- The same word is "absolute rulers" at 8:15 and in part 11-15 (12:14, 14:16, 14:21). One key term, two renderings, in the same book.
- The gloss at 8:15 turns "absolute rulers" into "dictators". That is anachronistic and loaded, and it contradicts the note's argument that the word need not be cruel.
- "Never 'tyrants'" is the writer's choice, but other site books use "tyrant" (2 Maccabees 4:25, 7:27; 3 Maccabees; Wisdom 16:4 "played the tyrant"). The term entry does not mention them.
- Fix: one rendering in all five places (for example "absolute rulers", with "you absolute rulers" for the address). Drop "alone". Drop "respectful ... beside kings (6:1)". Change the 8:15 gloss. Reconcile with the 16:4 verb.

**6. `παιδεία` as "instruction" breaks the site's own Proverbs rendering.**
Location: plain.txt 6:11, 6:17, 6:18, 6:25, 7:14; notes.json 6:17; proposals/works/terms.json entry 2.
- Note 6:17 says Proverbs "uses the same Greek word for its Hebrew *musar*" and cites Proverbs 1:2. The site's Plain of Proverbs 1:2-3 renders it "discipline". Key terms are meant to be the same across the Bible.
- The stated "why" (that "discipline" would read as punishment) is contradicted by the site's own Proverbs.
- The existing Wisdom entry (`παιδεύω ... discipline`) is also split for the same verb: 6:11 and 6:25 become "teach/instruct", while 3:5, 11:9 and 12:22 stay "discipline".
- 6:11 and 6:25 also turn the Greek passive (`παιδευθήσεσθε`, "you will be instructed") into an active "they will teach you". That is a small shift.
- Fix: keep "discipline" with a note that Greek and Hebrew both cover teaching and correction, or change Proverbs by the lead's decision. Do not split the term inside one book without that decision. If "instruction" stays, record the Proverbs conflict in the term entry.

**7. Solomon's prayer (ch. 9) is tied flatly to Gibeon, and the setting contradicts the verse.**
Location: chapters.json ch. 9 `sum`, `readings[0]`, `settings[0].when`; ch. 7 `settings[0].when` ("his prayer at Gibeon"); notes.json 7:7 ("the full prayer is given in 9:1-18"), 9:1.
- The book never mentions Gibeon or a dream. The `when` line says "at the start of his reign, before he built the temple (as at Gibeon, 1 Kings 3:5)". But 9:7-8 says "You told me to build a sanctuary". That command is not in the site's 1 Kings 3 (Plain 3:5-15) or 2 Chronicles 1:7-12, which have a dream or night offer and a request for a listening heart or wisdom and knowledge.
- Matching the prayer to those scenes is a reading, not a fact. Authors who think the temple command is later or elsewhere (David's charge, 1 Chronicles 28:11-19; Solomon's dedication prayer, 1 Kings 8) read the prayer as a composite. The chapter lists neither.
- `readings[0]` says the prayer "follows 1 Kings 3:6-9 closely: God's mercy, the king's weakness and youth". Youth is not in ch. 9. "Young as I am" is 8:10, and 1 Kings 3:7 is cited at 9:5 only for weakness. "Closely" overstates it. In Kings the opening is God's "great loyal love" to David, not mercy and creation.
- The site's quotations of 1 Kings 3:7, 3:9 and 2 Chronicles 1:10 in note 9:1 do match the Plain. That part is accurate.
- Fix: say "the book recalls the request of 1 Kings 3 and 2 Chronicles 1 but sets it with the temple command of 9:7-8 and does not name Gibeon". Remove "before he built the temple" or explain it. Add the missing parallels (1 Chronicles 28:11-19 for the "pattern", 1 Kings 8, and 1 Chronicles 29:19 if the writer opens it). Remove "youth".

**8. Many claims are made from memory (STYLE rule 2) with no opened source.**
None is hedged in the forbidden way; they are stated flatly, and nothing in `sources-checked.md` covers them. Each needs a source opened now, or removal.
- 7:2: Greek and Roman writers "often" gave pregnancy as ten months, in lunar months. The cheese comparison is given as ancient medical belief.
- 6:22: initiates of Isis and Demeter "swore not to reveal".
- 7:19: astronomy and astrology "often studied together" in Alexandria.
- 7:20: the "root-cutters" as a branch of Greek learning.
- 6:6: slaves' evidence "taken under torture" in Greek law.
- 7:14: Greek philosophers said "the wise are friends of the gods".
- 7:22 (`monogenes`): "Early Christian readers noticed both words". No father is named.
- 9:4: `paredros` used of a goddess beside a god.
- 9:5: a house-born slave "had the strongest claim on the master's protection".
- 10:6: `Pentapolis` "was a regular Greek name for a group of five towns". The note also does not point out that Zoar, one of the five, was spared (Genesis 19:20-23), so "fire on the Five Cities" needs a comment.
- 10:7: the plant "often identified with the Sodom apple (*Calotropis procera*)".
- 10:17: the wages explanation "answers the charge, made by critics of the Jews in Egypt, that Israel had robbed its hosts". No critic or text is named.
- 7:26 and ch. 7 `views.H`: "Most scholars think the New Testament writers drew on" this picture, and the verse is "the most important source for wisdom christology". Consensus claims need a named source.
- 6:1 note: "Most scholars think the address is a literary frame".
- 6:24: "The KJV's 'welfare of the world' is close". Check the KJV file; I did not.
- ch. 7 `views.O`: Hagia Sophia "was dedicated" to Christ the Wisdom of God. `views.O` at ch. 6: the Orthodox count Wisdom among the "readable" books "though not with the full authority ... in every Orthodox teacher". No Orthodox source is named, and "in every Orthodox teacher" is vague.
- ch. 6 `views.C`: Wisdom going to meet seekers "is read as a picture of God's grace that comes first". Ch. 9 `readings[1]`: the Church reads 9:13-18 "as the prayer of anyone who must decide without seeing the way". These put an interpretation in the Church's mouth with no source. The lectionary facts behind them are right (see 22).
- Note 10:12: the enemies and ambushes "are Laban and Esau". This is the writer's reading, presented as fact.
- Fix: for each item, open a source in the fixer's session and cite it, or cut. Keep the broad facts that need no locator (for example Plato's four virtues).

**9. Chapter 8 `views` attribute exegesis of 8:19-20 to churches that never gave it, and contradict the card.**
Location: chapters.json ch. 8 `views.C`, `views.O`, `views.P`; notes.json 8:20 (both notes).
- `views.C`: "Catholic teaching reads 8:19-20 without a pre-existence of souls ... (Catechism 366)". CCC 366 does not mention Wisdom 8:19-20. The Church has no official reading of this verse, as far as anything opened shows. It is a doctrinal teaching, not an exegesis.
- Note 8:20 (first): reading (2) "most Catholic commentators" and (3) have no named commentator. Note 8:20 (canon note): "Read as Catholic and Orthodox commentators read it, the verse only names the soul as the true self." This is unsourced and sweeping.
- `views.P`: "Reformed and Lutheran theologians long debated where souls come from". The card's Reformed row, from the same Hodge page, says the great majority of Reformed theologians were creationists. Hodge describes a debate among Lutherans, not "Reformed and Lutheran". The two statements contradict each other.
- `views.P` also says "most see in 8:19-20 a Greek idea ... that goes beyond the Bible", although Protestants are said not to count the book as Scripture. "Most" has no source.
- Fix: replace the church `views` on 8:19-20 with statements of what each church teaches about the origin of the soul, as in the card, and drop the claim of a church reading of the verse. Name commentators (for instance the NABRE introduction or note, if opened) for the "most Catholic commentators" claim, or cut it.

**10. The Jewish "early witness" claims are overstated.**
Location: notes.json 10:21 and 10:19; chapters.json ch. 10 `views.J`.
- The note says Rabbi Yose the Galilean's teaching of the singing infants (Bavli Sotah 30b) is "a form of the same tradition", and that "Wisdom knows" it "two or more centuries earlier". `views.J` says "Wisdom is an early witness to these traditions".
- Wisdom 10:21 says only that Wisdom opened the mouths of the mute and gave infants clear speech. A link to the later rabbinic story is possible, not shown. Josephus's account of the weapons (Antiquities 2.349, opened by the writer) is independent evidence, and Wisdom's "stripped the ungodly" does not mention weapons.
- The date gap is not given: book.json puts Wisdom between 221 BC and AD 44, so "two or more centuries" is not established. The rabbi's date is not stated, though the chain "Rabbi Yose the Galilean" is in the note.
- Fix: write "a similar idea appears later in Bavli Sotah 30b; whether it descends from this verse or from a shared tradition is not known". Do the same for the Josephus weapons parallel. Give the rabbi's period only if sourced.

## Minor

**11. Gloss at 8:20 is wrong.**
glosses.json 8:20 glosses "a body without stain" as "a clean, healthy body". `ἀμίαντον` is "undefiled" (ritual or moral purity), not healthy. This also pushes the debated reading of the verse. Fix: "a body with no defilement" or similar.

**12. Gloss at 6:14 imports a different picture.**
glosses.json 6:14 glosses "sitting at his gates" as "waiting on his front step". The note on the same phrase says the gate was the town's courthouse. The gloss and the note disagree.

**13. Capital-W decisions are not applied consistently.**
- Note 6:12 says lowercase "wisdom" is the quality a person learns, and lists 6:20 among them. But 6:17-18 speaks of "her laws", and 6:21 is the imperative "give wisdom honor" before 6:22's "what Wisdom is". The reader goes from "her" to "wisdom" to "Wisdom" in three verses.
- 9:2 ("by your wisdom you formed the human being") is lowercase, yet the same figure is "Wisdom" at 9:4 and 9:9 ("present when you were making the world"). 9:18 "and wisdom saved them" is lowercase, and 10:1 picks it up with "She".
- The 6:12 note's list of personified actions includes "a mother", but the Plain at 7:12 reads "where they come from". "Mother" is only the Alexandrinus variant (see 14).
- The brief said to decide by the Greek. The Greek has no capital, so the note is right that it is a translator's choice. But the line should be applied the same way across the chain. Fix: decide 6:20-21, 9:2 and 9:18 and state the reason. Remove "a mother" from the note, or put the variant in the Plain.

**14. Missing variants (rule: differences in meaning from ℵ or A).**
- 8:6: Swete's apparatus gives `τεχνιτης` (masculine "craftsman") for Bᵇ?, A and C against the printed `τεχνῖτις`. Note 7:22 says "The book calls Wisdom this again in 8:6" and builds on the feminine form. This needs a variant entry.
- 9:18: `+ σου` in ℵ ("by your wisdom"), which bears on the personification decision in 13.
- Optional: 6:20 `ἄρα] γάρ` in ℵ (the sorites conclusion). The 7:12 entry lists Vaticanus and Sinaiticus together for `γένεσιν`; the apparatus records a difference only for A, so naming ℵ is an inference.

**15. Note 9:4 ends with a stray ",.".**
"(Hebrews 1:3),." Fix the punctuation.

**16. Settings overlap and the `readers` boilerplate misfits.**
- Ch. 7's setting is `7:1-8:21` and ch. 8's is `8:2-21`, so 8:2-21 is covered twice.
- The same `readers` paragraph is pasted into all five settings. It ends "the speech showed that the wisdom of Israel's God was the best of all wisdom". That fits ch. 7 but not ch. 9, which is a prayer to God, or ch. 10, which is a history.
- Ch. 10 `why` ends "their own founding story set in their own land". The Exodus story is set in Egypt, where those readers lived, and the Land of Israel is where it ends. As written it is wrong.
- Ch. 9 `why` says the prayer shows the highest knowledge "is not reached by philosophy alone". 9:13-18 does not mention philosophy; this is the writer's inference, stated as the point.
- Ch. 6 `readers`: "last centuries BC or the early first century AD" does not match book.json ("221 BC to AD 41-44").
- Fix: give each setting its own `readers` line, keep the dates the same as book.json, split the overlap, and correct the ch. 10 sentence.

**17. KJV overlap in the Plain, and an audit I could not repeat.**
- Against the KJV (public domain, "for sense only" in the brief): 10:8 repeats a long run, "the world a memorial of their foolishness, so that"; 6:22 has "will not hide mysteries from you"; 10:7 "and a standing pillar of salt" (also the Douay); 8:20 "good ... I came into a body".
- Several of these follow the Greek closely, but 10:8 and 6:22 should be rebuilt.
- The drift audit against NRSV, NABRE, RSV, NJB and NETS is logged only per verse and was done in the head. I could not repeat it: Bible Gateway would not return the NRSVUE text for quoting, and bible.usccb.org returned 403 for NABRE. I therefore make no finding of drift for chapter 10 or the others. A fixer who can read those translations should compare the 33 verses the audit marks "kept", especially 6:4, 6:14, 6:15 and 8:5-6.

**18. Augustine note at 8:21 mixes two passages.**
Note 8:21 says Augustine quotes the Latin "again in his famous prayer, 'no man can be continent unless Thou give it' (10.31.45; compare 10.29.40)". I opened both. The sentence "no man can be continent unless Thou give it" is in Confessions 10.31.45. The Wisdom 8:21 citation in 10.29.40 is a different sentence ("could not otherwise obtain her, except God gave her me"), and 10.29.40 is where the well-known prayer is. Separate the two quotations and passages.

**19. The spec box in ch. 7 mislabels what Hebrews takes and conflicts with note 7:26.**
The theory says Hebrews 1:3 and Colossians 1:15 "take only the last steps, radiance and image". Hebrews 1:3 takes the radiance and the "exact stamp" (`charaktēr`), not `eikōn`. It also assumes that the New Testament writers chose from this list, while note 7:26 says whether they knew the book "is debated". Fix: say Hebrews has `apaugasma` and `charaktēr`, Colossians `eikōn`, and state the assumption.

**20. Arian-controversy note is one-sided, and some claims are stated as settled.**
- Note 7:26 ("7:25-26 in the fight over the Son") gives Origen and Athanasius (the Nicene side). The brief asked for Arian and Nicene use "sources opened". No Arian use is shown, though Athanasius reports Arian arguments.
- Note 7:25 says "Both words say that Wisdom shares God's own nature". That is a claim in the very dispute the next note covers; the original images (vapor, outflow) were read in several ways. Label it a reading.
- Note 7:27 (prophets): Luke 11:49 "shows that Jews of his time could speak of Wisdom as the one who sends the prophets". "Shows" is too strong for one saying.
- Note 7:26: 9:15's third reading "Protestant readers usually see ... a Greek view that Paul corrects" (note 9:15 canon) is a generalization about Protestants with no source.

**21. Works outside the 66 are cited without their status.**
Notes 7:20 ("Testament of Solomon") and 10:1 ("Life of Adam and Eve") are `tier: other` in works.json. They are named correctly but not marked as in no church's Bible. Add a short "not accepted as Scripture by any church" where they first appear, as the canon-tiers rule requires.

**22. Small translation points.**
- 6:5: `φρικτῶς καὶ ταχέως` is "swiftly and terribly", reversing the Greek order.
- 7:19 and 7:29: `θέσις` is "where the stars are set" in one verse and "every pattern of the stars" in the next. Note 7:19 itself calls it "positions".
- 6:9 and 8:4: `αἱρετίς` ("chooses his works") has a debated sense that the note does not mention.
- 8:21: the Plain supplies "her" as the object of "gave" (Greek has none). The note covers the two senses of `ἐγκρατής` but does not say the object is added.
- 10:7: `ἀτελέσιν ὥραις` is "at the wrong season and never matures". "Wrong season" is the writer's gloss on `ὥρα`.
- 9:1: the Greek has "God of the fathers". The note says "my" was added, which is true, but the note states it under "Solomon's prayer and 1 Kings 3" without mentioning that Kings has "my father David".

**23. Lectionary wording.**
Ch. 9 `views.C` says the reading is used "in the rite of anointing of the sick". Felix Just's index lists it as Lectionary 790.6, "Ritual Masses: Anointing of the Sick". Say "Ritual Mass for the Anointing of the Sick". The other lectionary facts (154-A, 493, 143-B, 494, doctors of the Church, 129-C) match the page.

## Checks passed (for the fixer's information)

- Translation: no omissions or additions of substance found in any of the 115 verses. Names, numbers and speakers are correct. The speaker is not named; the notes at 7:1 and 9:1 say so as required.
- Style: no em-dashes anywhere in the part; poetry breaks are present; reading level is acceptable.
- Terms: `ἀφθαρσία` "incorruption" and `ἀθανασία` "immortality" are kept apart (6:18-19 against 8:13, 8:17); `δεσπότης` "Master", `ψυχή` "soul", `ὅσιος` "holy" and `λόγος` "word" follow terms.json.
- Variants: every reading and witness cited matches Swete's apparatus. The KJV and Latin statements match the files.
- The Lectionary, CCC 366, Hodge's "began and ended with Origen", Origen 2.9.6, Athanasius's phrase and Plato's *Phaedo* 81c quotation are accurate to what was opened.
- Quote-matching against other books' Plain gives no warnings.

## Fixes applied
