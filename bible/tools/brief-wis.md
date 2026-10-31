# Wisdom of Solomon: shared brief for the part writers

Book id `Wis` (works.json `wisdom-of-solomon`, tier dc). 436 verses in 19 chapters. Planned in the cloud project
(notes/bible-site-noncanon-status.md); this brief carries that plan forward.

Parts (all write at the same time and cannot see each other):
- 01-05 (102 vv): the "book of eschatology": love justice (1), the ungodly's speech and their plot against the
  righteous one (2), the souls of the righteous in God's hand, the barren and the eunuch (3), the early death of the
  righteous (4), the judgment scene where the ungodly see the righteous vindicated, and the divine warrior (5).
- 06-10 (115 vv): the "book of wisdom": kings, seek wisdom (6), Solomon's speech: his birth, his prayer, wisdom's 21
  attributes and her nature (7), wisdom as bride (8), Solomon's prayer for wisdom (9), wisdom in history from Adam to
  the Exodus (10).
- 11-15 (122 vv): the Exodus begins to be retold (11:1-14), God's mercy and the punishment of Egypt and Canaan
  (11:15-12:27), the critique of nature worship and idols (13-15).
- 16-19 (97 vv): the rest of the seven contrasts between Egypt and Israel: animals, hail and manna, darkness and
  light, the death of the firstborn and the all-powerful word (18:14-16), the Red Sea and the new creation (19).
- book.json and `content/books/Wis/sources.json` (book-wide keys): a separate book-level writer, as for 2 Maccabees.

## Rules
- Follow tools/agent-writer.md and tools/agent-writer-works.md exactly (Septuagint section). There is no gloss list:
  build every verse from the Greek in `texts/orig/Wis.json` (Swete, Codex Vaticanus) with a literal working line in
  `.scratch/wis-<part>/`, then Plain English, then the drift audit in your head against the NRSV, NABRE, RSV, NJB and
  NETS (never write their text out; log only verse, outcome and a few words of reason). The KJV in `texts/en/Wis.json`
  and the Douay/Vulgate in `texts/src/Wis.lat.json` are for sense only.
- Swete's footnotes are `texts/src/Wis.app.json` (ℵ, A, C and correctors). Every departure from Swete's text needs a
  variant entry; also enter differences in meaning from ℵ or A and from the KJV's text.
- Lenses (fixed): C Catholic, O Orthodox, P Protestant, H Historical-critical, J Jewish reception (the same as Tobit,
  Judith and the Maccabees).
- Wisdom is poetry in parallel lines: write ` / ` between lines, one verse per line.
- Speakers: "Solomon" speaks in the first person from 7:1 (the book never names him; say so in a note at 7:1 and
  9:7-8). Keep the voice of the ungodly in chapter 2 and 5:3-13 as their own speech.

## Terms (lead decisions; put new ones in content/proposals/works/terms.json after reading content/terms.json)
σοφία "wisdom" (personified: "Wisdom", capital W, where she acts as a person: 7:22-8:1 and 10; decide by the Greek,
not by a translation's habit; a note at first use in each part); ἀφθαρσία "incorruption" (never "immortality");
ἀθανασία "immortality"; ψυχή "soul"; λόγος "word"; ἀσεβής "the ungodly"; δίκαιος "the righteous" (singular in
2:12-20 and 5:1: "the righteous man", with the Christian reading in an echo note, not in the Plain); πνεῦμα "spirit";
παῖς θεοῦ in 2:13 "child of God" with a note on "servant/child" (Isaiah 52-53 Greek); ἐπισκοπή "visitation"
(3:7, 3:13, 4:15, 14:11, 19:15). κύριος = "the Lord" (the Greek does not give the divine name). Check terms.json for
existing renderings of shared words and reuse them.

## Parallels (the earlier book's Plain is the model where Wisdom retells it)
Genesis 1-3 (2:23-24 image and the devil's envy), 1 Kings 3:5-15 and 2 Chronicles 1:7-12 (Solomon's prayer, ch. 9),
Exodus 7-14 and Numbers 11, 16, 21 (chapters 10-19), Isaiah 44:9-20 and Psalm 115 (the idols, 13-15), Isaiah 52:13-
53:12 (the righteous one). Quote the site's current Plain exactly when you quote.

## Places that need full treatment (candidate links: check each in an open text before you assert it)
- 1:13-14 and 2:23-24: God did not make death; "through the devil's envy death entered the world" (compare Romans
  5:12; the devil or Cain read). 2:12-20 and 5:1-7: the righteous one; the Christian passion reading (Matthew 27:43)
  and the critical reading (Isaiah's servant, a type of the persecuted pious Jew).
- 3:1-9: "the souls of the righteous are in the hand of God", read at Catholic and Orthodox funerals (check the rites
  yourself). **Card (part 01-05): is the soul immortal by nature or by God's gift? top `soul`.** Give Catholic (Lateran
  V, 1513), Orthodox, Lutheran, Reformed (Westminster 32), Adventist and Jehovah's Witness answers from sources opened.
- 3:13-4:6 the barren woman and the eunuch (Isaiah 56:3-5).
- 7:22-8:1 Wisdom's attributes; 7:26 "a reflection of eternal light" beside Hebrews 1:3 (ἀπαύγασμα), and Colossians
  1:15; Arian and Nicene use of the verse (sources opened).
- 8:19-20 "a good soul fell to my lot; or rather, being good, I entered an undefiled body": **card (part 06-10):
  pre-existence of souls, top `soul`** (Origen, the condemnation at Constantinople 553, creationism vs traducianism in
  later teaching; only if each row has a source that addresses it). Point to the ch. 3 card; do not repeat it.
- 9:15 "a perishable body weighs down the soul" (Platonism read fairly; Augustine quotes it often: check where).
- 11:17 "formless matter" (ἐξ ἀμόρφου ὕλης) beside 2 Maccabees 7:28 (creation out of nothing): use the existing
  `creation` topic and the 2 Maccabees card; do not make a new card.
- 11:20 "measure, number and weight".
- 12:10, 12:19-20: repentance, mercy to enemies.
- 13:1-9 knowing the Creator from creation, beside Romans 1:18-32 (the NT thread agreed Romans 1:20 points here).
  **Card (part 11-15): natural theology, top `natural-revelation`** (Vatican I Dei Filius ch. 2, Aquinas, Calvin
  Institutes 1.3-5, Barth's "No!" to Brunner, Orthodox and Lutheran views; sources opened).
- 14:1-7 the wood that saves (14:7 "blessed is the wood through which righteousness comes", read by Fathers of the
  cross: check which), 14:12-31 the origin of idols (the grieving father, the ruler's image: `idolatry`,
  `imperial-cult`), 14:22-27 vice list beside Romans 1:29-31.
- 16:20-29 manna ("bread of angels", 16:20; John 6:31; Eucharistic readings), 18:14-16 the all-powerful word leaping
  from heaven (Christmas use in the Western liturgy; check the antiphon), 19:6-21 creation remade.
- Where Wisdom matches, goes beyond or conflicts with the 66 books, a `canon` note saying which.

## Who it was for, and why
Settings for each speech: the opening address to "rulers of the earth" (1:1, 6:1-11), the ungodly's speech (2), their
too-late confession (5:3-13), Solomon's speech (7-8), his prayer (9), the address to God from 10 or 11 to the end.
`readers`: Greek-speaking Jews, most likely in Alexandria, Egypt, under the Ptolemies or early Roman rule (scholars'
dates run from about 220 BC to about AD 40; give the main proposals with who holds them).

## Topics
Contribute to: wisdom, solomon, creation, natural-revelation, idolatry, exodus-related topics (check ids), death,
intermediate-state, resurrection, egypt, hellenism, imperial-cult, word-of-god, communion-of-saints only if relevant.
New core: `soul` ("The Soul and Immortality"), written by part 01-05 in content/proposals/works/topics/soul.json (check
that no topic has that title or alias first). One topic only; immortality is an alias, not a second page.

## book.json (book-level writer only)
Lead, facts, authorship (Solomon claimed in the person of 7-9; scholars: a Greek-writing Alexandrian Jew; the
Muratorian fragment's line on "the Wisdom written by friends of Solomon in his honor": check it in an open text),
audience, outline, the five lenses above, sections (Greek style, Plato and the Stoics, unity, date, the Exodus
midrash, Wisdom in the New Testament), spec, prompts, topics, sources, links. **Only one book traditions card:
authorship (is it Solomon's?).** The Proverbs book card already asks whether Wisdom is Scripture; point to it and do
not repeat it. The `canon` block: accepted_by (Catholic: Trent; Orthodox; Ethiopian; Anglican Article VI "for example
of life"), provenance, rejected_why (the Hebrew canon, Jerome, Luther's preface, Westminster 1.3), cited_in (Romans 1,
Hebrews 1:3, Ephesians 6:11-17 and 5, Matthew 27:43, John 1, 2 Corinthians 5:1-4: each with honest strength and who
disputes it), reliability, how_to_read.

## When you finish
`VERBOSE=1 node tools/build.js --check Wis/<part>` at 0 errors and no warnings in your part. Add your line to
content/books/Wis/progress.md. Report counts, decisions, every departure from Swete, anything uncertain.
