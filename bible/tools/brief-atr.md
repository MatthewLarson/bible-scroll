# Brief: Atrahasis (Atr)

The first writing of the "Other peoples and religions" group (works.json tier `world`). Read `tools/agent-writer.md`,
`tools/agent-writer-works.md` and `tools/agent-writer-world.md` first; this brief adds what is particular to this book.

## The book
An Akkadian (Babylonian) poem in three tablets. Its ancient title is its first line, *inūma ilū awīlum*. It runs from
a time when the gods did all the work, through the making of humankind, to the plague, drought, famine and the Flood
that the god Enlil sends to silence humankind, and the hero Atrahasis, warned by the god Enki, who survives in a
boat. The best copy was written by the junior scribe Ipiq-Aya at Sippar in the reign of Ammi-saduqa, king of
Babylon; its colophons give 416 + 439 + 390 = 1,245 lines (checked on SEAL's pages, `.cache/dl/seal/node1515.html`,
`node39732.html`, `node1517.html`). Later copies (Middle Babylonian, Neo-Assyrian from Ashurbanipal's library, Late
Babylonian) fill gaps and sometimes differ.

Texts: `texts/orig/Atr.json` `akk` (one verse per tablet line; `line` gives the tablet line), the score with word
glosses in `texts/src/Atr.score.json` (`python tools/akk-literal.py Atr <chapter>`), SEAL's remarks in
`texts/src/Atr.notes.json` (where Tablet II's segments sit, parallels, colophons), the Middle Babylonian flood
versions and the Ark Tablet in `texts/src/Atr.flood.json`, copies that differ in `texts/auto/Atr.json`. Line labels:
Tablet I by line (I 1 to I 416), Tablet II by SEAL's segments (II A 1 ... II I 7), Tablet III by column (III i 1 ...
III viii 31').

## Chapters and parts
| Ch | Verses | Tablet lines | Episode | Part |
|---|---|---|---|---|
| 1 | 44 | I 1-38 | When the gods did the work: the lots, the digging of the rivers | 01-03 |
| 2 | 150 | I 39-173 | The gods' strike: tools burned, Enlil's house surrounded, Nusku, Anu and Enlil | 01-03 |
| 3 | 108 | I 174-260 | Enki's plan; Mami makes humankind from clay and a slain god's flesh and blood | 01-03 |
| 4 | 81 | I 261-351 | The birth goddesses; the first births; marriage; a broken stretch | 04-06 |
| 5 | 89 | I 352-416 | The noise of humankind; Enlil sends plague; Atrahasis and Enki; Namtar | 04-06 |
| 6 | 61 | II A-D | 1,200 years more; the drought | 04-06 |
| 7 | 103 | II E 1-78y | Rain withheld again; the world locked; the famine years | 07-09 |
| 8 | 137 | II E 79-175, F | Atrahasis pleads; Enki's answer; the worst years; the end of Tablet II | 07-09 |
| 9 | 176 | II G-I | Enki lets the fish loose; the gods' council; Enlil's oath and the Flood decreed | 07-09 |
| 10 | 83 | III i-ii | The dream and the reed wall; the boat; the elders; loading; the door shut | 10-12 |
| 11 | 82 | III iii-iv | The Flood; the gods' fear; Nintu's lament; the gods hungry and thirsty | 10-12 |
| 12 | 115 | III v-viii | The offering and the flies; Enlil's anger; Enki's answer; the new order; colophon | 10-12 |

Parts are `content/books/Atr/parts/01-03/` and so on. **book.json** is written by a separate writer ("book" part),
who also writes the `canon` block and the book's `traditions`. Part writers write only their part folder.

## Lenses (fixed)
- **C, Christian reading**: how a Christian who believes the Genesis account reads the passage: what it shares with
  the Bible, what it bends or lacks, and what the Bible says instead. The site's own voice (agent-writer-world.md).
- **H, Historical-critical**: Assyriologists and biblical scholars: dates, copies, what the poem meant in Babylon, and
  the theories of how Genesis relates to it (borrowing, common source, polemic), each with its holders.
- **M, Mesopotamian religion**: what the first hearers believed: the gods and their ranks, temples, offerings, omens,
  birth customs, the scribal schools that copied the poem.
- **S, Spiritual reading**: Christian readings of the unseen realm: the gods of the nations as nothing, as demons, or
  as fallen members of the divine council; the rebels and the Watchers; always labeled as readings, with holders.
- **J, Jewish and early Christian writings**: 1 Enoch, Jubilees, the Genesis Apocryphon, the Book of Giants, Josephus,
  Berossus (as quoted by Josephus and Eusebius), the church fathers and the rabbis, where they tell the same events.

## Shared wording (all parts use these; the lead aligns repeated passages afterward)
- The speech formula (*pâšu īpušamma iqabbi ... izakkar ana ...*): "X opened his mouth to speak, / and said to Y:".
- Gods: lowercase "god(s)". Anu, Enlil, Enki (the Old Babylonian copies; later copies say Ea: keep "Enki" throughout,
  with a note where the copy has Ea), Nusku (Enlil's minister), Ninurta, Ennugi, the Igigi, the Anunnaki, Mami (also
  called Nintu and Belet-ili: keep the name the line uses, with a note), Namtar, Adad, Nisaba, We-ila (the slain god;
  note the readings of his name), Atrahasis (the copies spell Atram-hasis; note at first use: "exceedingly wise").
- Key words: *dullu* "the work" (the forced labor, "toil" where the line is about its weight); *tupšikku* "the work
  basket" (gloss: the basket for carrying earth, the mark of forced labor); *šapšāqu* "hardship"; *rigmu* "noise";
  *ḫubūru* "uproar"; *ṭēmu* "understanding" and *eṭemmu* "ghost" (note the wordplay at first use, I 223-230); *abūbu*
  "the flood" (lowercase, as the Genesis Plain); *eleppu* "the boat" (never "ark", which is the site's word for
  Noah's *tevah*; a note compares them); *šassūru* "birth goddess" (plural "the birth goddesses"); *Apsu* "the Apsu"
  (note: the fresh waters under the earth, Enki's home).
- Repeated passages are rendered word for word the same: the strike speech (ch2), the plague, drought and famine
  cycles (I 352-416 = II A, II E; SEAL's notes list the parallels), and the formula lines. Part 04-06's wording of
  I 352-416 is the model; part 07-09 reads it if it exists when it reaches II E and otherwise follows the Akkadian,
  and the lead makes them agree afterward.
- Quote Genesis from the site's current Plain exactly (e.g. Genesis 6:14 "Make yourself an ark of gopher wood.").

## Places needing full treatment
- I 1 *inūma ilū awīlum*: "When the gods were man" / "like men" / "were human"; the crux and every reading.
- I 7-18: the lots that divide sky, earth and Apsu among Anu, Enlil and Enki (compare Psalm 115:16; Deuteronomy
  32:8-9; the divide among Zeus, Poseidon and Hades in the *Iliad*, only if checked).
- I 19-38: gods digging rivers, the Tigris and Euphrates (Genesis 2:10-14); 3,600 years of work.
- I 39-173: the strike: rebellion in heaven, and what Christians make of gods who rebel (S lens; the Watchers of
  1 Enoch 6-16; Isaiah 14; Revelation 12), and the gods' complaint about work (Genesis 2:15; 3:17-19; 5:29).
- I 189-260: humankind made to carry the gods' basket (contrast Genesis 1:26-28; 2:7, 15), from clay and the flesh
  and blood of a slain god who had "understanding", with the ghost that comes from his flesh,
  the Igigi spitting on the clay; blood as life (Genesis 9:4-6; Leviticus 17:11); God as potter (Isaiah 64:8;
  Jeremiah 18; Job 10:9); the "spec" link to a God whose own blood gives life (Acts 20:28) handled with care.
- I 261-305: the birth goddesses, the fourteen pieces of clay, seven males and seven females, birth customs, marriage
  (Genesis 1:27; 2:24); the brick of birth.
- I 352-416: 600 years, twice; the land grows, the people multiply, their noise; Enlil cannot sleep (contrast Psalm
  121:4); the plague; Atrahasis "whose ear was open" to his god. Compare Genesis 6:1, 5, 11-13 (multiplying,
  violence, outcry; Genesis 18:20-21 "outcry") and Genesis 6:3 (120 years beside 600 + 600 years).
- Tablet II: drought, famine, mothers eating daughters (compare Deuteronomy 28:53-57; 2 Kings 6:28-29; Lamentations
  4:10); Enki's freeing of the fish; the oath to bring the flood, and Enki's refusal (II G-H).
- III i: the dream, "Wall, listen!" (Enki speaks to the reed wall so he will not break his oath); "Tear down the
  house, build a boat; reject possessions, save life"; compare Genesis 6:13-22; Hebrews 11:7; 2 Peter 2:5 (Noah, "a
  preacher of righteousness"). The excuse to the elders (Enlil is angry with me). The Ark Tablet's boat plan
  (`texts/src/Atr.flood.json`) beside Genesis 6:15.
- III ii: clean and fat animals, birds, his family; the feast; he cannot sit or kneel, his heart broken; the door
  sealed with pitch (Genesis 6:14; 7:16 "The LORD shut him in").
- III iii-iv: the storm like a wild bull; seven days and seven nights (Genesis 7:4, 10, 12, 17); the gods afraid and
  famished; Nintu's lament for her children "like dragonflies" on the river (contrast Genesis 6:6; 8:1).
- III v: the offering, the gods "gathered like flies" over it (Genesis 8:20-21 "The LORD smelled the soothing
  smell"); Enlil's anger that anyone lived; Enki's defense.
- III vi-vii: the lapis lazuli flies of the necklace and the bow in the clouds (Genesis 9:12-17), only as far as the
  broken lines allow; the new order: women who do not bear, the demon who snatches babies, priestesses who may not
  bear children, set beside Genesis 9:1, 7 ("Be fruitful, grow many, fill the earth") and the covenant of Genesis 9.
- III viii: "I have sung of the flood to all people. Listen!" (if the lines support it); the colophon.

## Who's who (every part weighs these where its lines touch them; the book writer gathers them in canon.matches)
Atrahasis and Noah (and Ziusudra of the Sumerian Flood Story and Utnapishtim of the Epic of Gilgamesh); Enki and the
God who warns Noah; Enlil and the God who sends the Flood (the Bible's one God does both, for reasons the poem lacks);
the Igigi who rebel and the Watchers of 1 Enoch and the sons of God of Genesis 6:2; We-ila, the slain god, and the
first man or the Bible's teaching on life in the blood; Mami and Eve, "mother of all living" (Genesis 3:20);
Namtar and the destroyer of Exodus 12:23; the Anunnaki and the Nephilim or the divine council. Many will be
"unlikely": say so plainly, and say why. Do not invent a link to make a list longer.

## Topics
Contribute in each part's topics.json to the existing topics where the lines touch them: flood and noah (part 10-12),
creation, image-of-god and work (part 01-03, if a work topic exists), divine-council, fallen-angels and idolatry
(part 01-03 for the rebel gods), sacrifice (part 10-12), ancient-near-east (book writer). Search `content/topics/`
(titles and `aka`) before proposing a new core; a new core goes in `content/proposals/world/topics/<id>.json`.

## Models
Genesis 1-11 (`content/books/Gen/parts/01-11/`: its notes already compare Atrahasis; quote and cross-link them, and do
not contradict them silently: if a Genesis note is wrong about Atrahasis, say so in your report), and 1 Enoch
(`content/books/1En/`) for the canon block and the `canon` notes.

## Sources already in the site (reuse the keys)
`lambert-millard-atrahasis`, `frymer-kensky-atrahasis`, `kikawada-quinn`, `dalley-myths`, `heidel-gilgamesh`,
`george-gilgamesh`, `enuma-elish`, `lambert-creation`, `heidel-babylonian`, `wenham-gen`, `walton-gen`,
`jacobsen-kinglist`, `kramer-sumerians` (Genesis 01-11 sources.json), and this book's `seal-atrahasis` and
`wasserman-flood` (content/books/Atr/sources.json). Every claim still needs checking in an opened source this
session (STYLE.md rule 2). Open-access places worth trying: SEAL's pages, the Tyndale Bulletin archive (A. R.
Millard's essay on Atrahasis and Genesis), archive.org (Clay 1922; L. W. King 1918), and CDLI.

## Lead decisions
(Added after the reviews.)
