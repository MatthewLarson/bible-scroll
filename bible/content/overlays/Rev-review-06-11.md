# Hostile review: Revelation 6–11

Reviewer: hostile-reviewer (separate agent; did not write Revelation). Scope: Plain 6:1–11:19 against the SBLGNT
(`texts/orig/Rev.json`), notes, glosses, chapter pages 6–11 (including `settings` and `traditions` from
`content/overlays/Rev.json`), and variants (none exist yet). `node tools/import-rev.js` was run, then
`VERBOSE=1 node tools/build.js --check Rev`: 0 errors, 104 warnings in the book. The warnings that fall in these
chapters are listed in finding 30.

All generated files are in `content/books/Rev/`. Each finding also gives the source to edit: `plain.js`,
`notes2.js`, `glosses.js` and `chdeep.js` are in `revelation/v2/src/`; `3-data.js` and `3b-extra.js` are in
`revelation/src/`.

## Verdict

Chapters 6–11 have good bones: the notes are lively, the views notes are mostly fair, the four-lens summaries are
useful, and the facts I checked mostly hold up (Suetonius on Domitian's vines, Carrhae and Rhandeia, Josephus on
the siege famine, Irenaeus *Against Heresies* 5.30.2 on Dan, Eusebius 3.5.3 on Pella, CCC 1138 on the 144,000,
Sibylline Oracles 4.130–136 on Vesuvius, Hal Lindsey's 200-million militia, the twelve uses of "a third" in
chapter 8). But the Plain English is not an independent translation. Verse after verse it follows the NIV's
sentence shapes and its distinctive word choices, and in places (9:11 "Destroyer", 11:1 "count the worshipers")
the NIV's own additions have come into the text. Under the site's rules that is the most serious kind of
failure, and the whole slice has to be redone from `literal.js`. On top of that:
- The lead's δοῦλος decision has not been applied.
- The site-wide terms ("the saints", "repent", "tell the good news", "Messiah") are not followed.
- There are no variant entries, though at least eighteen places need one, including several a KJV reader would
  notice at once (6:1 "Come and see", 8:7, 8:13, 11:4, 11:15, 11:17).
- About fifteen Old Testament quotations in notes and on chapter pages are NIV wording, some of them flagged by
  the build.
- An import bug silently drops the Greek (`orig`) from three word notes.

This slice is not ready to publish until the Plain is redone and the variants are written.

Findings: 1 critical, 14 major, 16 minor.

## Findings

### 1. Critical. plain.txt 6:1–11:19 (source `plain.js` lines 113–219): the Plain follows the NIV closely and throughout

I checked every verse against the Greek and then against the NIV and ESV from memory. Most verses in 6–11 keep the
NIV's clause order, its supplied words and its distinctive vocabulary even where the Greek suggests something
else. These are the closest (I describe them and quote only a few words):
- **6:4**: "power to take peace from the earth", then a purpose clause about people killing "each other", then
  the sword. This is the NIV's whole sentence frame.
- **6:8**: "Its rider was named Death, and Hades followed close behind him. They were given power over a fourth of
  the earth, to kill by sword, famine...". This is the NIV almost word for word. The Greek is "Hades was following
  with him" (μετ' αὐτοῦ), not "close behind".
- **6:11**: "until the full number of their fellow servants, their brothers and sisters" is an NIV phrase taken
  whole. "Full number" is the NIV's supplement, not in the Greek πληρωθῶσιν.
- **6:12–15**: "turned black like … made of goat hair, … the whole moon turned …"; "like a scroll being rolled up,
  and every mountain and island was … from its place"; "the kings of the earth, the …, the generals, the rich, the
  …, … hid in caves and among the rocks of the mountains". These differ from the NIV by one word at a time.
- **7:2–4**: 7:2 is the NIV with one verb changed ("holding" for "having"). 7:3 "put a seal on the foreheads of
  the servants of our God" and 7:4 "the number of those who were sealed: 144,000, from all the tribes of Israel"
  are effectively the NIV.
- **7:10–14**: "Salvation belongs to our God, who sits on the throne, and to the Lamb"; the doxology list beginning
  "Praise and glory and wisdom and thanks" (NIV's "Praise" for εὐλογία, where the usual rendering is "blessing");
  "Sir, you know".
- **8:3–5, 8:9, 8:12**: "a lot of incense to offer, along with the prayers of all God's people, on the gold
  altar in front of the throne"; "The smoke of the incense, together with the prayers of God's people, rose up";
  "peals of thunder, rumblings, flashes of lightning"; "a third of the living creatures in the sea died, and a
  third of the ships were destroyed"; "A third of the day had no light, and also a third of the night".
- **9:1, 9:7, 9:13–15, 9:20**: "The star was given the key to the shaft of the abyss"; "looked like horses
  prepared for battle … something like gold crowns"; "a voice coming from the four horns of the gold altar";
  "kept ready for this very hour"; "did not stop worshiping demons … idols that cannot see or hear or walk".
- **10:1, 10:5, 10:9–11**: "another mighty angel coming down from heaven"; "the angel I had seen standing on the
  sea and on the land raised his right hand to heaven" (identical); "It will turn your stomach sour, but in your
  mouth…"; "Then I was told, 'You must prophesy again about many peoples, nations, languages, and kings'"
  (identical).
- **11:4, 11:6, 11:11–13, 11:15**: "the two olive trees and the two lampstands that stand in front of the Lord of
  the earth"; "to strike the earth with every kind of plague as often as they want"; "the breath of life from God
  entered them, and they stood on their feet"; "while their enemies watched"; "At that very hour there was a great
  earthquake … The survivors were terrified and gave glory to the God of heaven"; "The kingdom of the world has
  become the kingdom of our Lord".

Evidence that this is dependence and not chance: the Plain takes over the NIV's additions to the Greek (9:11, see
finding 4; 11:1, see finding 5; "full number" in 6:11; "his legs" in 10:1) and its idiosyncratic choices ("Praise"
for εὐλογία, "rumblings" for φωναί, "the shaft of the abyss" for τοῦ φρέατος τῆς ἀβύσσου, "God's people" for
ἅγιοι).

Fix: redo every verse of 6–11 from `node tools/literal.js Rev 6` through `Rev 11`, following agent-writer.md and
the bible-translation skill. Build each verse from the Greek, keep Revelation's paratactic "and … and" where
English can carry it, and only then compare. Where a natural rendering happens to match a modern version in a
short phrase, that is fine. What has to go is the sentence-by-sentence matching. Fold in findings 2–8 while
redoing the verses.

### 2. Major. Lead decision on δοῦλος not applied: 6:11, 7:3, 10:7, 11:18 and the material that quotes them

The brief (`tools/brief-rev.md`, Lead decisions) says δοῦλος becomes "slave(s)":
- 6:11 σύνδουλοι → "fellow slaves" (Plain has "fellow servants").
- 7:3 τοὺς δούλους τοῦ θεοῦ ἡμῶν → "the slaves of our God".
- 10:7 τοὺς ἑαυτοῦ δούλους τοὺς προφήτας → "his own slaves the prophets" (note ἑαυτοῦ, "his own").
- 11:18 τοῖς δούλοις σου τοῖς προφήταις → "your slaves the prophets" (and see variant V14).

The following quote these verses and must change with them:
- ch7 `sum` ("seals God's servants")
- ch7 setting 7:1–3 `what` ("seal God's servants")
- ch11 setting 11:15–18 `why` ("reward your servants the prophets"): overlay `settings["7"]` and
  `settings["11"]`; chapter text in `chapters.js`
- note #99 10:7, the Amos 3:7 preview ("his servants the prophets"; also NIV wording, finding 8)
- topic warning `martyrs` (6:11), which is book-level, for the lead.

### 3. Major. No variants for 6–11; the two manuscript notes at 8:13 and 11:15 must become variants

`content/overlays/Rev.json` has no `variants` key at all. The brief requires an entry wherever the witnesses differ
in meaning, wherever a major English translation footnotes the difference, or wherever the KJV reads differently.
The full list, with witnesses and recommended choices, is in the section "Variants needed in 6–11" below.

Two existing notes are manuscript notes and collide with this:
- **Note #87 at 8:13** (`notes2.js` line 41, "An eagle or an angel?"). Move its content into variant V7's `b`,
  then delete the note or re-anchor it. A note may not share the variant's anchor "an eagle".
- **Note #109 at 11:15** (`notes2.js` line 69, kind `var`). The lead decision says this one becomes a variant (V13).
  Remove the note. If you want to keep the point "the world is pictured as one kingdom, the beast's, which
  changes hands", put it in the variant's `b`.

### 4. Major. 9:11 "which means Destroyer" is added to the text

The Greek says only ἐν τῇ Ἑλληνικῇ ὄνομα ἔχει Ἀπολλύων, "in Greek he has the name Apollyon". The gloss on the
name is the NIV's parenthesis "(that is, Destroyer)" carried into the Plain. STYLE.md: "Do not add interpretation
to the text." The meaning already sits in gloss #114 ("The Destroyer") and note #91.

The tense is also off: the Greek is present, ἔχουσιν ἐπ' αὐτῶν βασιλέα, "they have over them as king", while the
Plain says "Their king was".

Fix: "They have as king over them the angel of the abyss. His name in Hebrew is Abaddon, and in Greek he has the
name Apollyon." (or similar).

### 5. Major. 11:1 "and count the worshipers there" adds an interpretation

The Greek is μέτρησον τὸν ναὸν … καὶ τὸ θυσιαστήριον καὶ τοὺς προσκυνοῦντας ἐν αὐτῷ: "measure the temple … and
the altar and those who worship in it". The one verb "measure" governs all three objects, and that is the point
(measuring = marking off as protected, as note #101 and gloss #127 say). "Count" is the NIV 1984's rendering and
makes the worshipers a census.

Fix: "measure the temple of God and the altar, and those who worship there". If "measure people" feels odd, add a
gloss or note instead of changing the verb.

### 6. Major. 6:9 (and 6:4): σφάζω "slaughter" is flattened to "kill", so the link to the slaughtered Lamb is lost

In 6:9 τῶν ἐσφαγμένων is the same participle used for the Lamb in 5:6, 5:12 and 13:8, where the Plain rightly says
"slaughtered" (5:9 has the verb ἐσφάγης, "you were slaughtered"). John deliberately pictures the martyrs as sharing
the Lamb's death. Note #67 even says "The martyrs are pictured as sacrifices", but the Plain hides the word that
makes the point. The same verb σφάξουσιν stands in 6:4 ("so that they would slaughter one another").

Fix: 6:9 "the souls of those who had been slaughtered because of the word of God…", and 6:4 "slaughter one
another". terms.json already renders Hebrew shachat "slaughter", so this is consistent. Flag 18:24 (ἐσφαγμένων →
"killed") for the 17–22 reviewer.

### 7. Major. Site-wide terms not followed (content/terms.json is binding; brief-nt.md "Terms")

These are book-wide habits of the original Revelation study, so the lead should decide once for the whole book.
In this slice:
- **οἱ ἅγιοι** → terms: "the saints" (gloss at first use, "God's holy people"). The Plain has "God's people" in
  8:3 and 8:4 and "your people" in 11:18. The same NIV habit appears in 5:8, 13:7, 13:10, 14:12, 17:6, 18:20,
  18:24, 19:8 and 20:9.
- **μετανοέω** → terms: "repent" (gloss at first use, "turn your life around"). The Plain has "did not turn away
  from" in 9:20 and 9:21, and the same pattern in 2:5, 2:22 and 16:9. Note #94's title and topic are "repentance",
  and the chapter-9 deep section is headed "They did not repent", so the page contradicts its own text.
- **εὐαγγελίζομαι** → terms: "tell the good news" (note at first use). 10:7 ὡς εὐηγγέλισεν becomes "just as he
  announced". That loses the striking point that God's final "mystery", judgment included, is called good news
  given to the prophets (compare 14:6 εὐαγγέλιον αἰώνιον). Suggested: "as he told the good news to his own slaves
  the prophets".
- **Χριστός** → terms: "the Messiah" where it is a title with the article. 11:15 τοῦ χριστοῦ αὐτοῦ, "his
  anointed", echoes Psalm 2:2, which this site renders "against the LORD and against his anointed one". "His
  Christ" turns a title into a name. Suggested: "of our Lord and of his Messiah", with an echo note to Psalm 2:2
  (none exists; see finding 20). The same applies at 12:10, which belongs to the 12–16 reviewer.

### 8. Major. Notes and chapter pages quote copyrighted translations (mostly the NIV), several flagged by the build

CLAUDE.md: "No copyrighted translation text in content." STYLE.md: when the quoted book is on the site, use its
Plain exactly. Where the quoted book is not yet translated, quote your own fresh rendering, or paraphrase without
quotation marks.

| Place | Source line | Quoted | Problem |
|---|---|---|---|
| note #63 6:6 | notes2.js 13 | "NIV: two pounds of wheat…" | explicit NIV quotation; remove (link Bible Gateway if needed) |
| note #66 6:8 | notes2.js 16 | Ezekiel 14:21 "my four dreadful judgments…" | NIV wording |
| note #69 6:12 | notes2.js 19 | Joel 2:31 | NIV verbatim |
| note #70 6:16 | notes2.js 20 | Hosea 10:8 "…'Cover us!' and to the hills, 'Fall on us!'" | NIV verbatim; also check Luke 23:30, which is on site: "'Fall on us,' and the hills, 'Cover us'" |
| note #79 7:14 | notes2.js 31 | Isaiah 1:18 "though your sins are like scarlet…" | NIV; site Plain is "If your sins are scarlet, / like snow they will turn white" |
| note #80 7:17 (build warning) | notes2.js 32 | Isaiah 25:8 "The Sovereign LORD will wipe away…" | NIV; site Plain: "The Lord GOD will wipe the tears off every face" |
| note #99 10:7 | notes2.js 57 | Amos 3:7 "God does nothing without revealing his plan…" | NIV wording, with "God" put in for "the Sovereign LORD" |
| note #100 10:10 (build warning) | notes2.js 58 | Ezekiel 3:1–3; "lament and mourning and woe" (2:10) | NIV verbatim; also the bare "(2:10)" is read as Revelation 2:10 (finding 23) |
| note #104 11:4 | notes2.js 64 | Zechariah 4:14 "the two anointed ones who serve…" | NIV/ESV blend. The Hebrew is literally "the two sons of oil": a good mistranslation-watch point to add |
| ch7 deep "Every tear wiped away" (2 build warnings) | chdeep.js 62 | Isaiah 49:10; Isaiah 25:8 | NIV verbatim; use site Plain (Isaiah 49:10: "They will not go hungry or thirsty; / no scorching wind or sun will strike them") |
| ch8 deep "Silence, then trumpets" | chdeep.js 66 | Zephaniah 1:7 "Be silent before the Sovereign LORD…" | NIV verbatim |
| ch9 deep Joel table | chdeep.js 69 | "With a noise like that of chariots" (Joel 2:5); "It has the teeth of a lion" (Joel 1:6) | NIV verbatim. Proverbs 30:27 matches site Plain ("The locusts have no king"), fine |
| ch9 deep "Two hundred million" (build warning) | chdeep.js 71 | "twice ten thousand times ten thousand" (9:16) | RSV/NIV wording presented as Revelation's; quote the Plain or label the Greek ("literally 'double myriads of myriads'") |
| ch10 deep table | chdeep.js 74 | Amos 3:8 "The lion has roared… the Sovereign LORD has spoken"; Daniel 12:7 "it will be for a time, times and half a time" | NIV verbatim |
| ch10 fact box | 3b-extra.js ch10 | Malachi 4:5 "before the great and dreadful day of the Lord" | NIV/KJV; label "(KJV)" or paraphrase |

Also note #98 10:6 (from WORDS in `3-data.js` line 31) attributes "There will be no more delay" to the NKJV, ESV,
NIV and NASB. The NKJV and NASB actually say "delay no longer", so the attribution is false. Say "most modern
translations" and drop the list. The ch10 deep section (chdeep.js 76) correctly says "nearly all modern
translations".

### 9. Major. 11:17: no note or variant on the missing "and who is to come"

Everywhere else the title is threefold (1:4, 1:8, 4:8: "who is, who was, and who is coming"). Here every major
witness has only ὁ ὢν καὶ ὁ ἦν. Most commentators (Bauckham, Beale, Koester) read the omission as deliberate: at the
seventh trumpet God has now come and "begun to rule". This is one of the most theologically loaded small details
in the book, and the KJV ("and art to come") hides it.

Fix: variant V15 below, with that point in its `b`. Optionally add a short `word` note on "who is and who was"
(it must not share the variant's anchor). The same omission returns at 16:5, for the 12–16 reviewer.

### 10. Major. Import bug: `greek` (and `kind`) on non-WORDS notes are dropped, so three word notes lose their Greek

`tools/import-rev.js` (notes block) copies `orig` and `kind` only when a note uses `w:` (`if(w){ o.orig = w.greek;
o.kind = w.kind; }`). Notes that carry their own `greek:` lose it:
- 8:13 (#87)
- 9:11 (#91, "Ἀβαδδών … Ἀπολλύων")
- 9:21 (#95, "φαρμάκων (pharmakōn)…")

The same happens with 13 such notes book-wide (`grep -c "greek:"`: notes1 1, notes2 4, notes3 9). The generated
word notes then have no `orig` and no `kind`, against STYLE.md ("`word` notes also give `orig` … and `kind`").

Fix the cause in import-rev.js: `if(n.greek) o.orig = n.greek; if(n.kind) o.kind = n.kind;` after the WORDS
branch. Then give 9:11 and 9:21 a `kind` (`nu` and `com` respectively) in notes2.js.

### 11. Major. 9:21: the note and the chapter page name the wrong Greek word, and the gloss contradicts the note

The SBL/NA text followed by the Plain reads φαρμάκων (from φάρμακον, "drug, potion, spell"). φαρμακειῶν
("sorceries", pharmakeia) is the Byzantine reading (see V12). Yet note #95's title is "'Sorceries': pharmakeia" and
its body explains *pharmakeia*. The ch9 deep section (chdeep.js 72) says "The word for magic is *pharmakeia*". The
note's own (dropped) Greek field correctly says φαρμάκων.

Gloss #119 (glosses.js 135), "their witchcraft and drug-fueled rituals", brings back exactly the modern "drugs"
reading that note #95 says is not the ancient sense.

Fix:
- Retitle the note "Spells and potions: pharmaka"; say that the Byzantine text has pharmakeia, as at 18:23.
- Correct the deep section to match.
- Change the gloss to something like "their witchcraft and spells".

### 12. Major. Missing "Where Christians differ" card at 6:9–11 (the state of the dead)

The souls under the altar, conscious, speaking, robed and told to "rest a little longer", are the standard New
Testament text in the debate over the intermediate state.
- Catholic: CCC 1023–1029 on the souls of the just.
- Orthodox: prayers with and for the departed.
- Reformed: Westminster Confession 32.1, souls "immediately return to God".
- Lutheran: Luther's sleep language, though the confessions affirm the souls of the faithful are with Christ.
- Adventist: Fundamental Belief 26, death as unconscious sleep; reads 6:9–10 figuratively, like Abel's blood
  crying out in Genesis 4:10.
- Jehovah's Witnesses: also deny a conscious soul.

This is a real conflict, and the site already has a `top: "sheol"` series with 15 cards. Add a `traditions` card
to overlay `traditions_by_chapter["6"]` with `top: "sheol"`, citing the confessions.

Optionally, a second card with `top: "curse-psalms"` could take up 6:10's prayer for vengeance, where the six-card
series on imprecatory prayer already exists. The settings "views" entry "A prayer for revenge?" is a start.

### 13. Major. Missing `settings` cards (brief: one for every speech, prayer and song)

- **Chapter 9 has no settings at all** (overlay `settings` has no key "9"). 9:13–14 is a speech: a voice from the
  horns of the golden altar commands the sixth angel, "Release the four angels…". Like the altar voice in 16:7,
  this ties to the martyrs' prayers of 6:9–10 and 8:3–5, and the card's `why` should say so.
- **6:1–8**: the living creatures' four commands "Come!" and the voice from among the creatures in 6:6 (the
  wheat-and-barley price speech) have no card. Since variant V1 makes "Come!" either a summons to the riders or a
  call to John, the card should give both views.
- **11:12**: "Come up here!" to the witnesses has no card.
- **11:15–18**: `to: "God; heard by John"` is wrong for 11:15. The loud voices make a proclamation; they are not
  addressing God. Only the elders' thanksgiving in 11:17–18 is addressed to God. Split the card or fix `to`.
- 7:9–17 folds three songs and a dialogue into one card (the crowd 7:10, the angels 7:12, the elder 7:13–17).
  This is acceptable, but `by`/`to` should list each.

### 14. Major. Sibylline Oracles is cited but not in works.json

Note #85 (8:8) cites "*Sibylline Oracles* (4.130–136)", and the ch8 deep caption (chdeep.js 65) cites "the
Sibylline Oracles (book 4)". `content/works.json` has no Sibylline Oracles entry, and no proposal has one either.
CLAUDE.md: "Writings outside the 66 are named as in content/works.json."

Fix: the lead adds `sibylline-oracles` (name "Sibylline Oracles", tier `other`, note that books 3–5 are Jewish,
books 1–2 and others Christian-edited), and the note keeps that name.

### 15. Major. Gloss #99 (7:4) settles the 144,000 debate; gloss #117 (9:16) contradicts the verse

- **#99** (glosses.js 113): "144,000, from all the tribes of Israel" → "the whole army of God's people, every family
  accounted for". This takes the Reformed/idealist side of the very debate the 7:4 views note and the traditions
  card present as open. The futurist (ethnic Israel) and Jehovah's Witness readings are ruled out by a gloss. A
  gloss gives the feel, not the verdict. Suggested: "a full count, 12,000 from each of Israel's tribes".
- **#117** (glosses.js 133): "two hundred million" → "an army too big to count". The verse ends "I heard their
  number", so the point is that it was counted. Contrast 7:9, "that no one could count". Suggested: "a host of
  two hundred million, more than any army on earth".

### 16. Minor. 10:6: the KJV quotation on the chapter page is unlabeled

The ch10 deep section quotes "that there should be time no longer" (10:6) without "(KJV)" inside the parentheses,
so the build compares it to the Plain and warns. Write "(10:6, KJV)". The same fix applies wherever a KJV wording
is quoted on purpose.

### 17. Minor. Interpretive supplements and small omissions in the Plain

- **6:11**: "until the full number … was complete" supplies "number". The Greek ἕως πληρωθῶσιν καὶ οἱ σύνδουλοι
  αὐτῶν means "until their fellow slaves too are completed/filled up". Fine to supply, but a note should say so
  (and see V3, where Tyndale House and Tregelles read "until they complete [their course]").
- **6:12**: "turned red like blood" adds "red". The Greek is ἐγένετο ὡς αἷμα, "became like blood".
- **9:5**: drops ὅταν παίσῃ ἄνθρωπον, "when it strikes a person".
- **10:7**: drops "in the days of the sound of" (ἐν ταῖς ἡμέραις τῆς φωνῆς). ἐτελέσθη is an aorist used with
  future meaning: "will be finished", or more literally "is finished", deserves a word note.
- **7:14**: οἱ ἐρχόμενοι is present, "the ones coming out of the great suffering". The Plain's "who have come
  out" removes the ongoing sense that idealist readers cite. Note #78 should mention it. Κύριέ μου is "My lord";
  "Sir" drops "my" (minor, and an NIV match).
- **10:1**: πόδες is "feet". "Legs" is a defensible sense but an NIV/ESV choice. Note #96's preview says "feet like
  fire", contradicting the Plain, and wrongly says this "matches Jesus in chapter 1", where 1:15 has feet like
  bronze and 1:14 eyes like fire.
- **11:8–9**: τὸ πτῶμα is singular twice ("their corpse"), then plural; **11:13** ὀνόματα ἀνθρώπων is "names of
  people". Neither needs a change, but both are good `nu` word notes for a study site.
- **10:11**: προφητεῦσαι ἐπὶ λαοῖς can mean "about", "against" or "to" peoples (debated: Aune, Beale). A `deb`
  word note is missing.

### 18. Minor. The same Greek verb is rendered two ways, breaking a link the book builds

πικραίνω: 8:11 ἐπικράνθησαν → "made bitter", but 10:9 πικρανεῖ and 10:10 ἐπικράνθη → "turn your stomach sour". The
bitterness of Wormwood and the bitterness of the scroll are one word in Greek (and in Ezekiel and Jeremiah's
imagery). Use "bitter" in 10:9–10. Gloss #125 can stay. Also 8:11: ἐγένετο … εἰς ἄψινθον is "became wormwood";
"turned bitter" flattens the name-play the note discusses. Suggested: "A third of the waters became wormwood".

### 19. Minor. 6:6: "a full day's pay" then "a day's pay" for the same δηναρίου

Pick one wording for both halves, or keep "denarius" with gloss #87. Note #63's anchor depends on this.

### 20. Minor. Missing echo notes and topics

- **11:15–18**: no note on Psalm 2:1–2 (the nations rage, the LORD and his anointed). 11:18 "the nations were
  angry" (τὰ ἔθνη ὠργίσθησαν) also echoes Psalm 99:1 in the Greek Septuagint (ὀργιζέσθωσαν λαοί). This is the
  main Old Testament frame of the seventh trumpet. Add an echo note, and add Psalm 2 to the ch11 `echoes`.
- **11:11**: "breath of life … stood on their feet" is Ezekiel 37:10 (it is in `echoes` but has no note).
- **7:16–17**: the Isaiah 49:10 quotation has no note of its own, only a mention in #80. Note how Revelation
  changes "the one who pities them" to the Lamb.
- **11:19**: the ark seen in heaven is the hinge to 12:1. The Catholic and Orthodox reading of Mary as the Ark (the
  Assumption liturgy pairs 11:19 with 12:1–10; CCC 2676) should be cross-referenced to the ch12 `woman-of-ch12`
  card. Leave the card itself to the 12–16 reviewer.

### 21. Minor. Spec notes do not say where they overlap with scholarship, and two overstate their evidence

STYLE.md: a spec says "where they overlap with published scholarship".
- **#81 (8:1)**: b. Hagigah 12b says companies of angels sing by night and are silent by day "for the glory of
  Israel". That is not quite "so that Israel's prayers can be heard". The closer texts usually cited are Genesis
  Rabbah 65:21 and the targumic tradition at Ezekiel 3:12, as gathered by Bauckham (*Climax*, ch. 3); verify before
  citing. No source gives the evening incense offering a length of half an hour, so say this is a guess. Charles
  and others have related the silence to the incense offering, so say that too.
- **#107 (11:10)**: Beale (NIGTC) and others already note the allusion to Esther 9:19, 22. Only the "inversion of
  Purim" reading is Claude's. "In exactly those words" is too strong: LXX Esther has ἀποστέλλοντες μερίδας,
  Revelation δῶρα πέμψουσιν. The quotation "feasting and sending gifts to one another" is not the site's Esther
  Plain ("sending portions of food to one another"), so quote that.
- **ch7 spec box (Dan)**: fine, but it duplicates topic material (`topics2.js` line 236). Keep it in one place.

### 22. Minor. Factual overstatements

- **ch8 deep caption** (chdeep.js 65): "reminded some first-century readers of Vesuvius". There is no evidence of
  any first-century reader connecting 8:8 with Vesuvius. Write "Some modern scholars connect it with Vesuvius
  (AD 79); the Sibylline Oracles (book 4) treat that eruption as divine judgment."
- **Note #85 preview**: "a writer of the time described it in similar terms" is vague. Pliny the Younger
  (*Letters* 6.16, 6.20) describes the eruption but not as a mountain thrown into the sea. Name the source or drop
  the clause.
- **Note #110 preview**: "Missing since 586 BC" is stated as fact. The ark simply disappears from the record; many
  think it was lost or taken in 587/586, but some think it was gone earlier. Say "missing since the Babylonian
  destruction of the temple, or earlier".
- **Note #90** (9:5): the preterist claims (Florus's five months in AD 66; the five-month siege of AD 70) are cited
  only to `aune`, who does not hold them. Cite `gregg` (or Chilton's *Days of Vengeance* if it has a key).
- **ch7 Israel box**: "Dan and Ephraim are the two tribes linked to the golden calves (1 Kings 12:29)". The calves
  stood at Dan and Bethel (Bethel is Benjamin's border town), and Jeroboam was an Ephraimite. Say that.
- **ch10 caption vs note #96**: who holds that the angel is Christ? The caption says "especially in the Reformed
  tradition", the note "especially older historicists". Make them agree (Beale, Reformed, argues for the Angel of
  the LORD/Christ; many historicists held it too).
- **ch11 two-witnesses table**: "The Law and the Prophets … Some historicists" disagrees with ch11 views H "the Old
  and New Testaments". The Adventist and historicist reading is the Old and New Testaments (Ellen White, *The Great
  Controversy*, ch. 15). Fix the table.

### 23. Minor. Bare references that resolve to Revelation

A bare c:v means this book, so these become false or empty links:
- ch6 deep table (chdeep.js 54): "Zechariah 1:8; 6:1–3" → "Zechariah 1:8; Zechariah 6:1–3"; caption "(24:9)",
  "(24:29)" → "(Matthew 24:9)", "(Matthew 24:29)".
- ch7 spec box (3-data.js 141): "(48:32)" → "(Ezekiel 48:32)".
- note #100 (notes2.js 58): "(2:10)" → "(Ezekiel 2:10)". This is the cause of the build warning "quotes Revelation
  2:10".

### 24. Minor. Station material lands on the wrong chapter page (import cause)

The ch8 page has the fact box "Apollyon sounds like Apollo" (a chapter 9 subject; 3b-extra.js `ch8`). The ch10 page
has the Moses-and-Elijah fact box, the spec "The two witnesses as Israel and the church", and the links "Two
witnesses", "Transfiguration of Jesus" and "Third Temple", all chapter 11 material. import-rev.js attaches a
station's facts, spec and links to the station's first chapter (`STATION_AT`). Fix the cause: either key those
items by chapter in the source (move them to the `ch9` and `ch11` entries in 3b-extra.js) or have the import place
them by the chapter their refs point to.

### 25. Minor. Hymns are printed as prose

STYLE.md: songs and poetry take ` / ` line breaks. 7:10, 7:12, 7:15–17 (a hymn built from Isaiah 49 and 25) and
11:15, 11:17–18 are hymns. Revelation's Plain has no line breaks anywhere (`grep -c " / "` = 0), so this is a
book-wide decision for the lead. In this slice at least 7:15–17 and 11:17–18 should be set as poetry.

### 26. Minor. Gloss details

- **#105** (8:3): "a gold incense pan" → "a golden censer full of burning incense" turns modern words into an old
  church word, the opposite of a gloss's job. Suggested: "a gold pan for carrying hot coals and incense".
- **#106** (8:7): the meaning "A large part, but not all," ends in a stray comma.
- **#84** (6:2): "He set out to take over the world" assumes the conquest reading over the Christ/gospel reading
  that note #62 presents. Prefer "He rode out a winner, out to win".
- **#112** (9:7): "gold helmets" interprets στέφανοι; "gold-looking crowns" or "victory wreaths of gold" keeps the
  image.

### 27. Minor. 6:1–8 settings-level and views gaps on the four "Come!"s

The views note on the white rider (#62) is good. Nothing anywhere explains to whom "Come!" is said: the riders
(most modern commentators) or John (the reading behind "Come and see"). Put this in variant V1's `b` and the new
6:1–8 settings card (finding 13).

### 28. Minor. ch6 page: the readings box and the deep section give different famine multipliers

The deep section says "roughly ten times normal"; note #63 says "many times the normal cost". Pick one, with a
source (Cicero, *Against Verres* 2.3.81, is the usual one for normal wheat prices; Aune and Koester discuss it).

### 29. Minor. Note #64 and ch6 deep: "In AD 92"

The date of Domitian's vine edict is inferred (from Eusebius's *Chronicle*). Write "about AD 92".

### 30. Minor. Build warnings in or about chapters 6–11

From `VERBOSE=1 node tools/build.js --check Rev`.

In this slice:
- `notes[80] 7:17`: Isaiah 25:8 (finding 8).
- `notes[100] 10:10`: "Revelation 2:10" (finding 23).
- `chapters 7`: Isaiah 49:10 and Isaiah 25:8 (finding 8).
- `chapters 9`: Revelation 9:16 "twice ten thousand…" (finding 8).
- `chapters 10`: Revelation 10:6 "time no longer" (finding 16).

Elsewhere, quoting these chapters; leave these for the lead's alignment pass and re-check after the Plain is
redone:
- topics `wrath` and `bowls` (6:10)
- `martyrs` (6:11, "fellow servants")
- `rome` (6:4)
- `four-horsemen` (6:6)
- `144000` and `twelve-tribes` (7:9)
- `angels` (8:2, 10:1)
- `euphrates` (9:19)
- `trumpets` (9:20–21)
- `two-witnesses` (11:4, 11:13)
- `chapters 18` and `book.json` (11:8 "where their Lord was crucified": the Plain has "was also crucified").

### 31. Minor. Topic and density check (no action needed beyond the above)

Every chapter has notes (6: 10, 7: 9, 8: 7, 9: 8, 10: 5, 11: 10), which is the right density. Chapter 10 is thin
for its weight (Daniel 12, the seven thunders, the little scroll's identity). Add the 10:7 εὐαγγελίζω note
(finding 7) and a 10:11 ἐπί note (finding 17). All `top` ids resolve.

## Variants needed in 6–11

Format: as in `content/books/Jud/variants.json`, in overlay `variants["6"]` … `variants["11"]`. Each entry needs
`v`, `a` (exact Plain after the redo), `t`, `p`, `readings` (`w`, `orig`, `en`, `plain`), `follow`, `why`, and `s`
(`metzger`, plus `aune` or `koester` where useful).

Background for every `why` in Revelation, worth one sentence in each entry or a book-level note:
- Revelation's best witnesses are Codex Alexandrinus (A, 02, 400s) and Codex Ephraemi Rescriptus (C, 04, 400s).
  Codex Sinaiticus (א, 01, 300s) is less reliable here than elsewhere. P47 (late 200s) and P115 (about 300) agree
  with א more often.
- The two later groups are the Andreas group (around Andrew of Caesarea's commentary, about 600) and the
  Koine/Byzantine group (led by 046).
- Vaticanus (B, 03) lacks Revelation.
- The Textus Receptus (KJV) rests on Erasmus's single manuscript 2814 (12th century, an Andreas-type manuscript
  that lacked the last six verses) and his own Latin-based patches. (Metzger, *Text of the New Testament*; Hernández
  and others on 2814.)

Witnesses below marked *(confirm)* are from my knowledge of the NA28/Metzger apparatus and should be checked in
NA28 or Metzger before they are written. Do not write a witness you cannot confirm. Where I am unsure I say so.
Editions follow the `w` field of `texts/orig/Rev.json`.

**V1. 6:1, 3, 5, 7: "Come!" / "Come and see!"** (one entry per verse; each `p` says they go together)
- Reading 0, followed: Ἔρχου, "Come!". NA28, SBL, THGNT, WH; A C P 1611 2053 and others *(confirm)*.
- Reading 1: Ἔρχου καὶ ἴδε, "Come and see!". Byzantine/Majority (046 and most minuscules); also א at 6:1
  *(confirm which of the four verses א has it in)*.
- Reading 2: Ἔρχου καὶ βλέπε, "Come and look!". Textus Receptus (KJV "Come and see") in all four verses, with
  very slim manuscript support. At 6:3, 6:5 and 6:7 the `w` field shows καὶ βλέπε in TR only (and καὶ ἴδε in the
  Byzantine text at 6:5 and 6:7).
- why: the oldest and best witnesses for Revelation have the bare command. The addition looks like a scribe's
  attempt to make the command address John, who is then told to look. Without it, "Come!" summons each rider
  out.
- b: this changes who is addressed (finding 27). Metzger discusses it at 6:1.

**V2. 6:8 "They were given" (αὐτοῖς) / "He was given" (αὐτῷ)**: Byzantine αὐτῷ makes Death alone receive the power.
The TR agrees with NA (KJV "unto them"), so this is minor; include it because it changes who acts.

**V3. 6:11 "until … was complete" (πληρωθῶσιν) / "until they complete [their course]" (πληρώσωσιν)**: NA28/SBL/WH
read the passive. Tyndale House GNT, Tregelles and the Byzantine text read the active πληρώσωσιν (see `w`: the
passive is marked NnSW only). TR πληρώσονται (KJV "should be fulfilled"). Two major modern editions differ here, so
an entry is required by brief-nt.md.

**V4. 6:9 "the testimony they had kept" / "the testimony of the Lamb which they had"**: Byzantine adds τοῦ ἀρνίου.
Not in TR or KJV. Minor, but it changes the sense.

**V5. 6:17 "their anger" (αὐτῶν) / "his anger" (αὐτοῦ)**: NA28/SBL read αὐτῶν (God's and the Lamb's), with א C and
others *(confirm)*. αὐτοῦ is read by A, the Byzantine text and the TR (KJV "his wrath") *(confirm A)*. A real
choice, since A usually leads in Revelation. why: αὐτῶν is the harder reading, joining the Lamb to the one on the
throne after 6:16, and is well supported. αὐτοῦ smooths it to God alone. Metzger discusses it.

**V6. 8:7 "A third of the earth was burned up"**: missing from the TR and KJV ("the third part of trees was burnt
up" follows directly). The clause is in all the major witnesses and in the Byzantine text (`w` field: present in
NnSYWGB, absent in T). It is very likely dropped by Erasmus's text by eye-skip between the repeated κατεκάη
(*confirm the source of the omission before stating it*). This is a clear KJV-visible difference.

**V7. 8:13 "an eagle" (ἀετοῦ) / "an angel" (ἀγγέλου) / "an angel like an eagle"**:
- ἀετοῦ: א A P115 046, most minuscules, the Latin, Syriac and Coptic.
- ἀγγέλου: P, 2814 (Erasmus's manuscript), part of the Andreas tradition, and the TR (KJV "an angel").
- ἀγγέλου ὡς ἀετοῦ: 42.

This is the list in Wikipedia, "Textual variants in the Book of Revelation"; confirm with Metzger. Follow ἀετοῦ.
Replaces note #87 (finding 3).

**V8. 9:13 "the four horns" (τεσσάρων) / "the horns"**: SBL, Tyndale House, WH and Tregelles omit τεσσάρων. NA28
prints it in brackets; the Byzantine text and TR have it (`w`: NnTB). Omitted, as I recall, by P47 A and others;
included by א* and the Byzantine text *(confirm both)*. The Plain follows the bracketed NA/Byzantine reading
against its own base text, so the entry is required, with a reason. The one usually given: the shorter text may
have dropped the word because "horns of the altar" already implies four; "four" also makes the four horns answer
the four angels of 9:14. Or the Plain should follow SBL/THGNT and drop "four". Either way, say which and why.

**V9. 9:16 "two hundred million" (δισμυριάδες μυριάδων) / "myriads of myriads" / "two myriads of myriads"**:
- NA28/SBL/WH: δισμυριάδες.
- Byzantine: μυριάδες μυριάδων, "tens of thousands of tens of thousands", that is, countless.
- TR: δύο μυριάδες μυριάδων (KJV "two hundred thousand thousand", the same number as the Plain).

The Byzantine reading removes the exact figure that futurist readers build on, so it bears on note #93.

**V10. 9:20 / 9:21 φαρμάκων vs φαρμακειῶν**: see finding 11.
- φάρμακα ("drugs, potions, spells"): NA/SBL; A C and others *(confirm)*.
- φαρμακειῶν ("sorceries"): Byzantine and TR; א and 046 *(confirm)*. KJV "sorceries".

Anchor on "magic spells" only after moving note #95 off that exact anchor.

**V11. 9:21 "sexual sins" (πορνείας) / "wickedness" (πονηρίας)**: I recall πονηρίας in א* and A *(confirm in
NA28; if it cannot be confirmed, leave this out)*.

**V12. 10:6 "and the sea and everything in it"**: I recall this clause is omitted by א* A and some minuscules,
probably by eye-skip over the repeated καὶ τὰ ἐν αὐτῇ, and that NA prints it in brackets *(confirm)*. Include it
only if confirmed.

**V13. 11:15 "The kingdom of the world has" (ἡ βασιλεία … ἐγένετο) / "The kingdoms of this world are become"
(αἱ βασιλεῖαι … ἐγένοντο)**:
- Singular: all the major manuscripts and the Byzantine text (`w`: NnSYWGB).
- Plural: TR/KJV only, with negligible Greek support *(do not name minuscules without confirming)*.

Follow the singular. Replaces note #109 (finding 3).

**V14. 11:18 "your slaves the prophets" / "your slaves and the prophets"**:
- τοῖς δούλοις σου τοῖς προφήταις: A and the Byzantine text, followed by SBL/NA.
- τοῖς δούλοις σου καὶ τοῖς προφήταις: P47 א 0308.

The second makes "slaves" a wider group than the prophets. Follow A; why: A is the stronger witness in
Revelation, and "his slaves the prophets" is the book's own phrase (10:7; compare Amos 3:7).

**V15. 11:17 "who is and who was" / "who is and who was and who is to come"**:
- The shorter text: P47 א A C and the Byzantine text, including 2814 (as I recall; the list in Wikipedia, "Textual
  variants in the Book of Revelation", gives P47 א C and the Byzantine text with 2814; confirm A).
- Adds καὶ ὁ ἐρχόμενος: a few minuscules (Wikipedia names 051 1006 1841 2074 among others), the Bohairic, and
  Latin writers (Tyconius, Beatus); also the TR and KJV ("and art to come").

The addition assimilates to 1:4, 1:8 and 4:8. Since 2814 lacks it, the TR's addition probably came from the Latin
tradition (*confirm before stating*). See finding 9 for what the `b` should say.

**V16. 11:4 "the Lord of the earth" (κυρίου) / "the God of the earth" (θεοῦ)**: TR θεοῦ (KJV "the God of the
earth"). The `w` field shows κυρίου in every edition except the TR. Zechariah 4:14's "the Lord of all the earth"
supports κυρίου. KJV-visible, so it needs an entry.

**V17. 11:1 "I was told" / "and the angel stood, saying"**: the TR (KJV) adds καὶ ὁ ἄγγελος εἱστήκει, "and the
angel stood", giving the anacoluthic participle λέγων a subject. It is missing from the major witnesses and the
Byzantine text. A harmless but KJV-visible scribal clarification.

**V18. 11:12 "they heard" (ἤκουσαν) / "I heard" (ἤκουσα)**: Byzantine ἤκουσα (John hears). NA/SBL and the TR read
ἤκουσαν (KJV "they heard"). Witnesses: ἤκουσα in א* and the Byzantine text, as I recall *(confirm)*.

Smaller places worth one entry each if the fixer has room. All are visible in the `w`/`byz` fields; no
manuscript claims are needed beyond the editions:
- **7:5–8**: the TR repeats "were sealed" after every tribe (KJV), whereas NA/Byzantine have it only after Judah
  and Benjamin. One entry at 7:5 explaining the pattern.
- **10:1**: Byzantine lacks ἄλλον, "another". This matters to note #96, whose argument that the angel is not
  Christ leans on "another angel"; TR has ἄλλον.
- **10:2, 8, 9, 10**: βιβλαρίδιον / βιβλίον / βιβλιδάριον. At 10:8 NA/SBL read plain βιβλίον ("the scroll"), the
  Byzantine text βιβλιδάριον ("little scroll"). This bears on the settings view that the little scroll is the
  scroll of chapter 5 (Bauckham), which argues partly from 10:8's βιβλίον.
- **11:19**: the Byzantine text reads "the ark of the covenant of the Lord" and lacks "an earthquake". The TR has
  both as NA (KJV "ark of his testament … an earthquake").
- **11:2**: ἔξωθεν, "outside", vs ἔσωθεν, "inside", the court. I recall ἔσωθεν in some witnesses (א*?) *(confirm;
  include only if confirmed)*.

## Fixes applied

Fixer: review-fixer for 6–11 (2026-10-26), working under the lead's decisions in `.scratch/Rev-review-notes.md`. Scratch and drift audit: `.scratch/Rev-06-11-fix/`.

1. Fixed. All 115 verses of 6:1–11:19 rebuilt from `literal.js` against the SBLGNT, then drift-audited in the head (audit list in `.scratch/Rev-06-11-fix/drift-audit.txt`; every verse changed, 6 kept close only where the Greek forces the wording). The NIV supplements are gone ("which means Destroyer", "count the worshipers", "full number", "legs"), as are its word choices ("Praise" for εὐλογία is now "Blessing", "rumblings" is now "loud sounds", "shaft of the abyss" is now "pit of the abyss", "God's people" is now "the saints"). Every note, gloss and setting on a changed verse was re-anchored.
2. Fixed. δοῦλος is "slave(s)": 6:11 "fellow slaves", 7:3, 10:7 "his own slaves the prophets", 11:18. Section heading, ch7 `sum`, settings 7:1–3 and 11:16–18, and note 10:7 changed with them. The word note on slavery is the 01–05 fixer's job at 1:1. Topic `martyrs` (6:11) is left for the lead.
3. Fixed. 23 variant entries written in overlay `variants["6"]`–`["11"]` (see V1–V18 below). Note #87 (8:13) deleted; its content is in the 8:13 variant's `b`. The 11:15 `w:'kingdom'` note deleted; its point (one kingdom, which changes hands) is in the 11:15 variant's `b`.
4. Fixed. 9:11 now reads "They have a king over them, the angel of the abyss. In Hebrew his name is Abaddon, and in Greek he has the name Apollyon." It uses the present tense and drops "Destroyer". The meaning stays in the glosses and note.
5. Fixed. 11:1: "measure the temple of God and the altar, and the people who worship in it." The one verb governs all three objects.
6. Fixed. "slaughter" in 6:4 ("so that people would slaughter one another") and 6:9 ("had been slaughtered"). Note 6:9 now points to the shared word with 5:6, 9, 12. 18:24 is left for the 17–22 fixer.
7. Fixed. "the saints" in 8:3, 8:4 and 11:18. "repent" in 9:20–21. 10:7 "he told the good news", with a new word note (εὐαγγελίζω, the word behind "gospel"). 11:15 "his Messiah's", with a new word note (Psalm 2:2, mashiach). 6:10 δεσπότης is "Master" (terms.json). 12:10 is left to the 12–16 fixer.
8. Fixed. Every listed quotation was replaced with the site's Plain (Psalm 79:10, Luke 23:30, Isaiah 1:18, 25:8, 49:10, 11:12, Jeremiah 51:25, Esther 9:19, Matthew 24:8, Luke 10:18, 21:24), or with a paraphrase without quote marks where the book is not on the site yet (Ezekiel 14:21, Joel 2:31, Hosea 10:8, Jeremiah 9:15, Amos 3:7–8, Ezekiel 2:10, 3:1–3, Zechariah 4:14, Zephaniah 1:7, the Joel table, Daniel 12:7, Malachi 4:5). The NIV quotation in the `penny` word note is removed. The false NKJV/NASB attribution in the `time` word note is now "most modern translations", and 9:16 is labeled as Greek ("double myriads of myriads"). Zechariah 4:14 now has the "sons of oil" mistranslation point.
9. Fixed. The 11:17 variant (V15) puts the omission of "and who is coming" in its `b`. It also has a 11:18 echo note and the 11:16–18 setting ("he has come").
10. Fixed by the lead in import-rev.js: notes' own `greek:` now lands as `orig` (confirmed for 9:11, 9:21 and the new notes). Not fully fixed: import-rev.js still drops a non-WORDS note's `kind`. I gave 9:11 (`nu`), 9:21 (`com`) and the new word notes a `kind` in notes2.js, but none of them reaches notes.json. The lead should add `if(n.kind) o.kind = n.kind;` next to the `n.greek` line.
11. Fixed. Note 9:21 is now titled "Spells and potions: pharmaka" (kind `com`) and says the Byzantine text/KJV read pharmakeia, as at 18:23. The gloss is now "their witchcraft and spells", the ch9 deep section is corrected, and the variant is written (V10).
12. Fixed. Card added at overlay `traditions_by_chapter["6"]` (`top: "sheol"`): Catholic (CCC 1023–1029), Orthodox (Dositheus 18), Lutheran (Apology XXI), Reformed (Westminster 32.1), Baptist (2LCF 31.1), Adventist (FB 26, the Abel reading), Jehovah's Witnesses. Declined the optional second `curse-psalms` card: the 6:9–11 setting already has the "prayer for revenge?" view, and two cards on three verses would crowd the page.
13. Fixed. New settings: 6:1–8 (the four "Come!"s and the voice of 6:6, with both views of who is addressed), 9:13–15 (the altar voice, tied to 6:9–10, 8:3–5 and 16:7) and 11:12. The 11:15–18 card is split into 11:15 (a proclamation, to heaven and earth) and 11:16–18 (the elders, to God). 7:9–17 `by`/`to` now name each speaker and hearer. Existing cards were updated to the new Plain.
14. Partly. The notes name it "Sibylline Oracles", as finding 14 asks. The works.json entry is the book fixer's (lead decision 20); not edited here.
15. Fixed. 7:4 gloss is now "a full muster, with every tribe of Israel accounted for" (no verdict). The 9:16 gloss moves to "I heard how many there were" ("I heard the official head count"). The views note now says the host is counted, unlike 7:9.
16. Fixed. The ch10 deep section now has "(10:6, KJV)".
17. Fixed. 6:11 now adds "in number" and the variant `b` says so. 6:12 drops "red". 9:5 restores "when it strikes someone". 10:7 restores "in the days when the seventh angel's voice is heard", with a new word note on the aorist ἐτελέσθη. 7:14 "are coming out" and "My lord", with the tense point added to note 7:14. 10:1 "feet", with note 10:1 corrected (face/1:16, feet/1:15). 11:8 "Their corpse" has a new `nu` note. 11:13 has a new `nu` note ("names of people", plus the turning of the survivors, Bauckham). 10:11 has a new `deb` note on ἐπί.
18. Fixed. πικραίνω is "bitter" throughout: 8:11 "had been made bitter", 10:9 "make your stomach bitter", 10:10 "my stomach turned bitter". 8:11 is now "turned into wormwood". Note 10:10 and the ch10 deep section point out the link.
19. Fixed. "denarius" in both halves of 6:6. The gloss "for a denarius" reads "for a whole day's wages", and the `penny` note is re-anchored.
20. Fixed. New echo notes: 11:18 (Psalm 2:1 and the Greek of Psalm 99:1), 11:11 (Ezekiel 37), and 7:16 (Isaiah 49:10, where the Lamb takes the shepherd's role). Psalm 2:1–9, Psalm 99:1 and Esther 9:19–22 are added to the ch11 echoes. Note 11:19 now gives the Catholic/Orthodox ark–Mary pairing (Assumption liturgy, CCC 2676) and points to the ch12 card, which itself is left to 12–16.
21. Fixed. Note 8:1 rewritten: what Hagigah 12b actually says (and the `bavli-hagigah` key), the overlap with Charles and Bauckham, and the half-hour labeled as a guess with no ancient support. Note 11:10 rewritten: Beale already notes the allusion, the Greek of Esther differs, Esther 9:19 is quoted from the site's Plain, and only the "inverted Purim" is Claude's. Declined the duplicate Dan spec box: the topic copy (topics2.js) is the book fixer's material, and the station box is the chapter page's only spec; flagged for the book fixer.
22. Fixed. ch8 deep caption now says "some modern scholars". The note 8:8 preview drops the vague "writer of the time" and says no ancient reader is known to make the link. The 11:19 preview is now "Lost with the Babylonian destruction of the temple, or earlier". Note 9:5 now cites `gregg-four-views` for the preterist claims. The ch7 Israel box gives the calves at Dan and Bethel and Jeroboam as an Ephraimite. The ch10 table note and note 10:1 now agree (many older historicists, and Beale). The ch11 table row is now "The Old and New Testaments", held by many historicists including Ellen White, *The Great Controversy* ch. 15.
23. Fixed. "Zechariah 1:8; Zechariah 6:1–3", "(Matthew 24:9)", "(Matthew 24:29)", "(Ezekiel 48:32)", and "Ezekiel 2:10" in note 10:10. Also "Psalm 79:5; Psalm 79:10" in the ch6 table.
24. Fixed by the lead (EXTRA_PLACE in chdeep.js and import-rev.js placeOf). Confirmed: the Apollyon fact box is now on the ch9 page, and the Moses/Elijah fact and the olive-tree spec are on ch11.
25. Fixed. Line breaks added at 7:10, 7:12, 7:15–17, 11:15 and 11:17–18. No anchor crosses " / ".
26. Fixed. The 8:3 gloss is now "a gold pan for carrying hot coals and incense". The 8:7 stray comma is gone (the gloss now reads "a large share of the trees, but not all"). The 6:2 gloss is now "He rode out a winner, looking for more wins". The 9:7 gloss is now "what looked like gold victory wreaths".
27. Fixed. The 6:1 variant's `b` and the new 6:1–8 setting now say whom "Come!" is spoken to.
28. Fixed. The `penny` note and the ch6 deep section both say "roughly ten times normal", attributed to commentators' estimates from grain prices. Declined the Cicero citation: I could not confirm the passage.
29. Fixed. Note 6:6 and the ch6 deep section now say "about AD 92".
30. Fixed for this slice: `VERBOSE=1 --check Rev` shows no warning from the notes, glosses, variants or chapter pages of 6–11. Warnings elsewhere that quote these chapters are left for the lead's quote sync: chapters 18 and book.json (11:8); topics day-of-the-lord (6:17), wrath and bowls (6:10), martyrs (6:11), repentance (9:20–21, 11:13), angels (8:2, 10:1), two-witnesses (11:4, 11:8, 11:13), abaddon (9:11), 144000 and twelve-tribes (7:9), rome (6:4), jerusalem (11:8), three-and-a-half (11:6), trumpets (11:15, 9:20–21), ark (11:19), little-scroll (10:6).
31. No action needed. Chapter 10 gained three notes (10:7 twice, 10:11).

Variants: written, with witnesses limited to what could be confirmed (edition sigla from `texts/orig/Rev.json` `w`, the KJV from `texts/en`). V1 (6:1, 6:3, 6:5, 6:7). V2 6:8. V3 6:11: the Tyndale House reading is given, and the TR's Greek form is left unnamed because it could not be confirmed. V4 6:9. V5 6:17: the manuscript names were not confirmed, so the entry says "important early manuscripts". V6 8:7: the eye-skip is stated as "most likely". V7 8:13: the "angel like an eagle" reading was not confirmed and is left out. V8 9:13: the Plain now follows its base text, SBLGNT ("the horns"), with NA28's bracketed "four" as the other reading. V9 9:16. V10 9:21. V13 11:15. V15 11:17. V16 11:4. V17 11:1. V18 11:12. Smaller places: 7:5, 10:1, 10:8 and 11:19. Declined, because the witnesses could not be confirmed and no edition in `w` reads them: V11 (9:21 πονηρίας), V12 (10:6, the omitted sea clause), V14 (11:18 "and the prophets") and 11:2 ἔσωθεν.
