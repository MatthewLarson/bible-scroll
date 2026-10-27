# Hostile review: Revelation 12–16

Reviewer: hostile-reviewer (not the writer). Scope: Plain (plain.txt) 12:1–16:21 checked verse by verse against the
SBLGNT and Byzantine text in `texts/orig/Rev.json` (with the edition markers in `w`); notes, glosses, chapter pages
12–16 (including `settings` and `traditions` from `content/overlays/Rev.json`); variants (none yet). Source locations
are given for the fixer: `revelation/v2/src/plain.js` (Plain 12:1 is line 221, 16:21 is line 313),
`revelation/v2/src/notes3.js` (notes 12–16 are lines 6–54), `revelation/v2/src/glosses.js`, `revelation/v2/src/chdeep.js`,
`revelation/src/3-data.js`, `revelation/src/3b-extra.js`, and the overlay.

`node tools/import-rev.js` then `VERBOSE=1 node tools/build.js --check Rev`: 0 errors, 104 warnings, all quote
mismatches. The ones in or about this slice are in finding 16.

## Verdict

The notes and chapter pages for Revelation 12–16 are strong. They are well sourced, mostly accurate, and fair to the
four schools of reading, and the cards from the audience review are in place. The translation is the weak point. The
Plain was not built from the literal line, and in about 40 of the 92 verses it follows the NIV's sentence shape and
wording closely, in places word for word for a whole clause (12:7, 12:12, 13:4, 13:10b, 14:11, 14:18, 16:2–3, 16:10,
16:12, 16:19–21). Under the project's rules every one of those verses has to be rebuilt. The same NIV dependence
brings in NIV interpretive choices the Greek does not support: "on its behalf" for ἐνώπιον (13:12), "so much that
they were afraid to die" (12:11), "and yet lived" for ἔζησεν (13:14), "kept themselves pure" for παρθένοι (14:4),
"evil spirits" for ἀκάθαρτα (16:13), and miles for stadia (14:20). The Plain also breaks three binding terms ("the
saints", "repent", "unclean spirit") and the lead's δοῦλος decision (15:3). The slice has no variant entries, even
though it holds some of the most important variants in the New Testament (616, 13:7a, 13:10, 15:3, 15:6, the KJV's
"and shalt be" at 16:5). Smaller problems: material from chapter 16 shows on chapter 15's page, bare references point
to Revelation verses that do not exist, a few facts are off, and there is no "Where Christians differ" card on hell
anywhere in the book. Fix the translation first, then add the variants.

Counts: critical 1, major 15, minor 23.

---

## Findings

### 1. Critical. plain.txt 12–16 (plain.js lines 221–313): NIV wording and sentence shape in about 40 verses

The rule (agent-writer.md, drift audit): any run of five or more words in the same order that the Greek does not
force, any NIV interpretive word, means the verse is rebuilt from `node tools/literal.js Rev <c:v>`. I compared each
verse with the NIV (and the ESV) without writing their text out. Below, "NIV" means the clause matches the NIV in
order and wording except for one or two words, and "Greek" says whether the Greek forces it.

| Verse | What matches | Greek forces it? |
|---|---|---|
| 12:4b | "her child the moment ... born" shape, NIV | no ("so that when she bears, her child he may devour") |
| 12:6 | "taken care of for 1,260 days", NIV (also 12:14 "taken care of") | no (τρέφωσιν "they nourish") |
| 12:7 | second sentence identical to the NIV, whole clause | partly; NIV's "fought back" is not in the Greek |
| 12:8 | "there was no longer any place for them in heaven", ESV, 9 words | partly |
| 12:9 | "that ancient serpent called ... who leads the whole world astray", NIV | partly; πλανῶν "deceives" |
| 12:10 | "The accuser of our brothers and sisters, who accuses them ... day and night, has been thrown down", NIV order (the NIV puts the verb last, as here) | no |
| 12:11 | second sentence follows the NIV paraphrase ("so much as to shrink from death"); see finding 8 | no |
| 12:12 | "He is filled with fury, because he knows ... his time is short", NIV word for word | no |
| 12:14 | "the two wings of a great eagle", "out of the serpent's reach", NIV | no (Greek: "the great eagle", "from the face of the serpent") |
| 12:16 | "opened its mouth and swallowed the river that the dragon had poured from ...", ESV, 13 words | mostly (but ἔβαλεν is "threw") |
| 12:17 | "went off to ... war against the rest of her ...", "those who keep God's commands and hold ...", NIV | partly |
| 13:1 | "It had ten horns and seven heads, with ten ... crowns on its horns", NIV | mostly |
| 13:2 | "looked like a leopard, but ... feet like a bear's", NIV's "but" | no (καί) |
| 13:3 | "The whole world was ... and followed the beast", NIV | partly |
| 13:4 | "People worshiped the dragon because he had given authority to the beast", NIV, 11 words | partly |
| 13:10b | "This calls for patient endurance and faithfulness ... God's people", NIV | no (ὧδέ ἐστιν "here is") |
| 13:11 | "It had two horns like a lamb, but it spoke like a dragon", NIV and ESV | mostly |
| 13:12 | "uses all the authority of the first beast on its behalf", NIV; see finding 7 | no |
| 13:14 | "the beast that was wounded by the sword and yet lived", NIV; "to honor", NIV | no; see finding 6 |
| 13:16 | "It also forces everyone, ... rich and poor, free and slave, to receive a mark on their right hand(s) or on their forehead(s)", NIV | no ("to receive" is not in the Greek: "that they give them a mark") |
| 13:17 | "unless they have the mark, which is the name of the beast or the number of its name", NIV, 16 words | partly; "which is" is NIV's |
| 13:18 | "This calls for wisdom", NIV and ESV | no (ὧδε ἡ σοφία ἐστίν "here is wisdom") |
| 14:1 | "Then I looked, and there ... me was the Lamb, standing on Mount Zion", "who had his name and his Father's name written on their foreheads", NIV | partly |
| 14:2 | "like the roar of rushing waters and like ...", "The sound I heard was like harpists playing their harps", NIV | partly; "rushing" is NIV's (ὑδάτων πολλῶν "many waters"; same in 1:15 and 19:6, outside this slice) |
| 14:3 | whole verse NIV except two words | partly |
| 14:8 | "Fallen! Fallen is Babylon the Great", NIV | partly |
| 14:10 | "will drink the wine of God's ..., poured full strength into the cup of his wrath", NIV | partly |
| 14:11 | almost the whole verse, from "There is no rest day or night" through "or for anyone who receives the mark of its name", NIV | partly |
| 14:12 | "This calls for patient endurance", NIV | no |
| 14:15 | "because the time to reap has come ... the harvest of the earth is ripe", NIV | no (ἐξηράνθη "is dried, fully ripe"; πέμψον "send") |
| 14:16 | "swung his sickle over the earth, and the earth was harvested", NIV | partly (ἔβαλεν "threw") |
| 14:18 | "Still another angel", "gather the clusters of grapes from the earth's vine, because its grapes are ripe", NIV, 14 words | partly |
| 15:1 | structure "seven angels with the seven last plagues ... last, because with them God's ... is ...", NIV | no |
| 15:2 | "They held harps given to them by God", NIV (κιθάρας τοῦ θεοῦ "harps of God") | no |
| 15:4 | "Who will not fear you, Lord, and ... glory to your name? ... You alone are holy", NIV | partly |
| 16:2 | "Ugly, ... sores broke out on the people who had the mark of the beast and worshiped its image", NIV, 16 words | partly |
| 16:3 | "It turned into blood like the blood of a dead person, and every living thing in the sea died", NIV | partly |
| 16:5 | "the angel in charge of the waters", NIV | no (τοῦ ἀγγέλου τῶν ὑδάτων "the angel of the waters") |
| 16:9 | "but they refused to ...", NIV; "refused" is not in the Greek (οὐ μετενόησαν "did not repent") | no |
| 16:10 | "its kingdom was plunged into darkness", NIV word for word | no |
| 16:11 | "but they refused to ... what they had done", NIV | no |
| 16:12 | "Its water was dried up to prepare the way for the kings from the east", NIV word for word | mostly |
| 16:13 | "three evil spirits that looked like frogs", NIV 1984 word for word; see finding 4 | no |
| 16:15 | "keeps their clothes on", "be shamefully exposed", NIV | no (τηρῶν τὰ ἱμάτια "keeps his garments"; "and they see his shame") |
| 16:19 | "God remembered Babylon the Great and gave her the cup filled with the wine of ...", NIV, 15 words | partly |
| 16:20 | "Every island fled away, and the mountains could not be found", NIV word for word | mostly |
| 16:21 | "Huge hailstones, each weighing about a hundred pounds, fell ... on people", "because ... was so terrible", NIV | no |

Fix: rebuild each listed verse from `node tools/literal.js Rev <c:v>`, with a different sentence shape wherever the Greek
allows one, and keep the drift audit list in `.scratch/Rev-12-16/`. Where a note, gloss or chapter page quotes one of
these verses, change it to the new wording.

### 2. Major. plain.txt 15:3 (plain.js about line 284), note at 15:3 (notes3.js line 43), gloss 15:3: δοῦλος is still "servant"

τὴν ᾠδὴν Μωϋσέως τοῦ δούλου τοῦ θεοῦ. The lead decision in brief-rev.md names 15:3 (Moses). Fix: "the song of
Moses, the slave of God, and the song of the Lamb" (or "God's slave Moses"). Change the note anchor
(`the song of God's servant Moses and the song of the Lamb`) and the gloss anchor with it. A slave of God was an
honored title for Moses (Joshua 14:7 and many places in the Hebrew Bible, "ebed YHWH"), so the 1:1 note on slavery
could add one sentence on that.

### 3. Major. plain.txt 13:7, 13:10, 14:12, 16:6: οἱ ἅγιοι is "God's people", against the binding term "the saints"

terms.json: `["οἱ ἅγιοι", "the saints, as in Jude 1:3 (gloss at first use in each book: 'God's holy people')"]`, and
brief-nt.md lists "the saints" among the key choices. 16:6 makes it worse: αἷμα ἁγίων καὶ προφητῶν is "the blood of
your people and your prophets", which adds "your" twice. The whole book does the same (5:8, 8:3–4, 11:18, 17:6,
18:20, 18:24, 19:8, 20:9), so this needs one lead decision for all five slices. Either apply the term ("the saints",
with the gloss at first use in 5:8) or record in terms.json why Revelation is an exception. Until then, 13:7 and
16:6 should at least drop the added "your". The gloss at 13:7 (`make war on God's people` → "attack God's people")
adds nothing and must be removed anyway for the 13:7 variant (finding 11).

### 4. Major. plain.txt 16:13, note 16:13 (notes3.js line 51), gloss 16:13, chapter 16 `sum`: "evil spirits" for πνεύματα ἀκάθαρτα

terms.json: `["δαιμόνιον / πνεῦμα ἀκάθαρτον", "demon / unclean spirit"]`. "Evil spirits" is also the NIV 1984 reading
word for word. The note itself says frogs were unclean animals (Leviticus 11), and the Plain throws away the word
that makes that point. Fix: "three unclean spirits like frogs". Change the note anchor, the gloss anchor and the
chapter-16 summary ("Three evil spirits like frogs") with it.

### 5. Major. plain.txt 14:4 (plain.js about line 266): παρθένοι γάρ εἰσιν becomes "for they kept themselves pure"

The Greek says "for they are virgins". English can say that, and the note at 14:4 (notes3.js line 32, `w:'virgins'`)
is built on the word παρθένοι, which the reader can no longer see in the text. STYLE: "flatten only what English
cannot carry". "Did not make themselves impure" is also very close to the NIV's "did not defile themselves". Fix:
"These are the ones who did not make themselves unclean with women, because they are virgins." The note already
gives the readings (holy-war purity, faithfulness without idolatry, celibacy). The gloss at 14:4 ("stayed pure, like
soldiers on a mission") picks one of those debated views; see finding 31.

### 6. Major. plain.txt 13:14: ἔζησεν becomes "and yet lived", which hides the parody of the resurrection

ὃς ἔχει τὴν πληγὴν τῆς μαχαίρης καὶ ἔζησεν. Revelation uses the same verb for Christ, "the one who died and came back
to life" (2:8, ἔζησεν), and for the martyrs who "came to life" (20:4, ἔζησαν). With 13:3 ("slaughtered", ὡς
ἐσφαγμένην, the word used of the Lamb in 5:6), this is the core of the beast-as-counterfeit-Lamb picture that the
chapter page (fact box) and the "unholy-trinity" topic depend on. Fix: "the beast that had the sword wound and came
back to life". Add a short word note that links 2:8, 5:6, 13:3, 13:14 and 17:8.

### 7. Major. plain.txt 13:12 and 13:14: ἐνώπιον becomes "on its behalf" and "for"

ποιεῖ ἐνώπιον αὐτοῦ (13:12) and ἃ ἐδόθη αὐτῷ ποιῆσαι ἐνώπιον τοῦ θηρίου (13:14) mean "in its presence" or "before
it". "On its behalf" is the NIV's interpretive choice. In Revelation ἐνώπιον is the word for standing before a
throne (4:5–10; 7:9). The second beast acts as a courtier or priest in the first beast's presence, and that image
matters for the imperial-cult reading. Fix: "It uses all the authority of the first beast in its presence", and
"the signs it was allowed to do in front of the beast".

### 8. Major. plain.txt 12:11: an added fear clause, and διά with the accusative

(a) οὐκ ἠγάπησαν τὴν ψυχὴν αὐτῶν ἄχρι θανάτου is "they did not love their life, even to death". "So much that they
were afraid to die" adds "afraid", which is not in the Greek, and it follows the NIV's paraphrase. Fix: "They did not
cling to their lives, even when it meant death" or "They did not love their lives, even to the point of death".
(b) διὰ τὸ αἷμα ... διὰ τὸν λόγον: διά with the accusative usually means "because of", not "by means of". Many
commentators (Aune, Koester) note that the victory comes "because of" the Lamb's blood. "By" is defensible, so add a
`deb` word note giving both senses. The spec note at 12:11 (notes3.js) can point to it. The gloss at 12:11
(`They did not love their lives so much that they were afraid to die`) must follow the new wording.

### 9. Major. plain.txt 14:20, note 14:20 (notes3.js line 39), chapter 14 page: stadia changed to miles, which the note itself warns against

The Plain reads "for about 184 miles". The note says: "Converting it to miles hides the pattern, so most literal
translations keep 'stadia'." The Plain does the very thing its own note warns against, and it adds "about", which the
Greek (ἀπὸ σταδίων χιλίων ἑξακοσίων) does not have. Revelation's numbers carry meaning. 21:16 has the same problem ("about 1,400 miles" for 12,000 stadia), so tell the
17–22 slice and the lead, and treat both the same way. Fix: "for 1,600 stadia", with the miles in a gloss. The note anchor
changes to "1,600 stadia". The numbers also disagree: the note says 184 miles, the chapter-14 deep section
(chdeep.js line 94) "about 180 miles". Use one figure. The deep section's quote "as high as a horse's bridle for
1,600 stadia" (14:20) is a build warning; quote the new Plain exactly ("as high as horses' bridles for 1,600 stadia").

### 10. Major. plain.txt 12:17: σπέρμα becomes "children", which hides Genesis 3:15

τῶν λοιπῶν τοῦ σπέρματος αὐτῆς, "the rest of her seed (offspring)". Chapter 12 is built on Genesis 3:15 (the woman,
her seed, the ancient serpent), as the note at 12:9 and the chapter page ("Eve ... the woman's offspring") both say.
"Children" breaks the verbal link. Fix: "the rest of her offspring". The note at 12:9 can then say that 12:17 uses
Genesis 3:15's word (LXX σπέρμα).

### 11. Major. variants: none in chapters 12–16, and the 13:18 `var` note has to become a variant

The overlay has no `variants` key yet. Each entry below goes in `content/overlays/Rev.json` →
`variants: {"12": [...], ...}`. Check the anchors: a variant may not overlap any note or gloss at all. I give the
readings, the witnesses as Metzger's *Textual Commentary*, the NA28 apparatus and the standard commentaries (Aune,
Koester) report them, which reading the Plain follows, and why. **Before writing `w`, confirm each witness list in
Metzger (key `metzger`) or the NA28 apparatus.** Where I am not certain of a witness, I say so. Never add a witness
that cannot be confirmed.

Essential (they change the English or a major translation footnotes them):

1. **12:18 / 13:1 "he stood" or "I stood"** (anchor "Then the dragon stood"). (a) ἐστάθη "he (the dragon) stood":
   P47, Sinaiticus (01), Alexandrinus (02), Ephraemi (04), some minuscules, Latin, Syriac (Harklean), Armenian; NA28,
   SBLGNT. (b) ἐστάθην "I stood": 046, 051, most Byzantine manuscripts, the TR (KJV "And I stood upon the sand of
   the sea"). Follow (a): the earliest and best witnesses, and Metzger explains (b) as scribes matching the next
   word εἶδον "I saw". Say in `b` that in the KJV numbering this clause opens 13:1 (in NA28 it is 12:18), which is
   why the site's chapter 12 ends at 17. Reading (b)'s plain: "Then I stood on the shore of the sea."
2. **13:7a** (anchor: the whole first sentence of 13:7; remove the 13:7 gloss, which sits inside it). The clause "It
   was allowed to make war on the saints and to defeat them" is missing in P47, Alexandrinus, Ephraemi, P (025)
   and some minuscules (as Metzger reports; confirm), and present in Sinaiticus, 046, 051 and the Byzantine text.
   NA28 and SBLGNT print it. The usual explanation: the eye of a copyist skipped from the first καὶ ἐδόθη αὐτῷ to
   the second. Follow the longer reading, and say that the sentence repeats Daniel 7:21 (finding 12).
3. **13:10** (two anchors, one sentence each; the gloss on the first sentence must be removed or moved).
   (a) First clause: εἴ τις εἰς αἰχμαλωσίαν, εἰς αἰχμαλωσίαν ὑπάγει (Alexandrinus; NA28, SBLGNT) against
   forms with ἀπάγει or συνάγει, "if anyone leads into captivity" (several minuscules; TR, KJV "He that leadeth into
   captivity shall go into captivity"), and the single phrase in Sinaiticus and Ephraemi (check). (b) Second clause:
   ἀποκτανθῆναι ... ἀποκτανθῆναι, "if anyone is to be killed by the sword" (Alexandrinus; NA28, SBLGNT) against
   ἀποκτενεῖ, δεῖ αὐτὸν ... ἀποκτανθῆναι, "whoever kills with the sword must be killed with the sword" (most
   witnesses, Byzantine, TR, KJV). Follow Alexandrinus as NA28 does: it is the harder reading and matches Jeremiah
   15:2 and 43:11, while the other readings turn the verse into a warning against violence like Matthew 26:52. The
   reasons and the two meanings (accept suffering, or do not take up the sword) belong in `b`. The 13:9–10 setting
   card already mentions this; keep them consistent.
4. **13:18 666 / 616** (anchor "666"; remove note [134] from notes3.js line 27, and move its gematria content to a
   note on "a human number", see finding 12). Readings: (a) 666, written in words ἑξακόσιοι ἑξήκοντα ἕξ
   (Sinaiticus, Alexandrinus, 046, most manuscripts; Irenaeus, Hippolytus, Origen, Victorinus) or as the numeral
   χξϛ (P47, 051); (b) 616: P115 (P.Oxy. 4499, third century), Ephraemi (in words), a few Latin manuscripts,
   manuscripts Irenaeus knew (*Against Heresies* 5.30.1), Tyconius; (c) 665: minuscule 2344. Follow (a): the
   overwhelming evidence, and Irenaeus says 666 stood "in all the most approved and ancient copies". Say plainly
   that P115 is the oldest surviving copy of the verse, and that 616 matches the Latin spelling of Nero. Source
   keys: `metzger`, `irenaeus`, `aune`.
5. **14:1 "his name and his Father's name"** (anchor "his name and his Father's name"; note [136] anchor
   `his Father's name written on their foreheads` partly overlaps, so re-anchor it to "written on their
   foreheads"). The TR (KJV "having his Father's name written in their foreheads") lacks "his name and", with a
   minority of late manuscripts. Nearly all witnesses have the longer text (P47, Sinaiticus, Alexandrinus, Ephraemi,
   the Byzantine text). Follow the longer reading. The KJV's "a Lamb" (no article) can go in `b`.
6. **14:3 ὡς "as it were a new song"** (anchor "a new song"). SBLGNT prints ὡς (Alexandrinus, Ephraemi and others;
   check whether NA28 brackets it). P47, Sinaiticus and the Byzantine text omit it. The Plain silently follows the
   omission, against its own base text. Either translate it ("what sounded like a new song") or keep the omission
   and explain why.
7. **14:5 "before the throne of God"** (anchor "They are without fault."). The TR adds ἐνώπιον τοῦ θρόνου τοῦ θεοῦ
   (KJV "for they are without fault before the throne of God"), a late addition. γάρ ("for") is Byzantine and TR.
8. **15:3 "King of the nations / ages / saints"** (anchor "nations"). (a) ἐθνῶν, "nations": Sinaiticus (corrector),
   Alexandrinus, 046, 051, most manuscripts; NA28, THGNT, and the Plain. (b) αἰώνων, "ages": P47, Sinaiticus
   (first hand), Ephraemi and some minuscules; **SBLGNT and Westcott-Hort print this**. (c) ἁγίων, "saints": a very
   few late manuscripts and some Latin copies; TR, KJV "King of saints". The Plain departs from its base text here,
   so it must say why: Jeremiah 10:7 ("King of the nations"), which the song quotes; 15:4's "all nations will come";
   and NA28's choice. Give the strength of "ages" honestly (P47 with א* and C is very old).
9. **15:6 "linen" or "stone"** (anchor "clean, shining linen"). (a) λίνον "linen": P (025), 051, the Byzantine
   text; NA28, SBLGNT, TR. (b) λίθον "stone": Alexandrinus, Ephraemi, 2053, the Vulgate; Westcott-Hort print it.
   Other forms such as λινοῦν or λινοῦς are reported (Sinaiticus, 046; confirm). (b) is the harder reading and has
   very good witnesses. Ezekiel 28:13 (the king of Tyre dressed in precious stones) and the angel-priests of 1:13
   are offered in its support. Most editors judge it a one-letter copying slip (Ν/Θ). Follow (a), but say this is
   one of the few places where Alexandrinus and Ephraemi together are overruled.
10. **16:5 "who is and who was"** (anchor "the one who is and who was"). Every Greek manuscript reads ὁ ὢν καὶ ὁ ἦν,
    ὁ ὅσιος, "who is and who was, the Holy One". The KJV's "which art, and wast, and shalt be" comes from Theodore
    Beza's conjecture ὁ ἐσόμενος in his 1582/1589/1598 editions; no Greek manuscript has it. This variant is often
    asked about, and it ties in with the missing note in finding 12 (the third member, "who is coming", is dropped on
    purpose here and at 11:17).

KJV differences that are smaller but noticeable (one short entry each, or grouped into the `b` of the nearest
entry):
- 12:12 TR "Woe to the inhabiters of the earth and of the sea" (τοῖς κατοικοῦσιν; anchor "the earth and the sea").
- 12:17 TR "the testimony of Jesus Christ".
- 13:1 "names" or "name" of blasphemy: ὀνόματα (Alexandrinus and others; NA28 may bracket the ending) against
  ὄνομα (P47, Sinaiticus, Ephraemi?; THGNT, TR, KJV "the name of blasphemy"). The edition markers show THGNT has
  the singular, so this one counts under brief-nt's rule "where SBL, NA28 and THGNT disagree".
- 13:5 Byzantine (RP) adds πόλεμον, "to make war 42 months"; TR and KJV "to continue".
- 13:6 TR adds καί, "and them that dwell in heaven", which changes the apposition the Plain shows with "that is".
- 13:17 TR "the mark, or the name" (KJV), against "the mark, the name".
- 14:8 the Byzantine text has "fallen" once; TR, KJV "that great city".
- 15:2 TR adds "over his mark" (KJV).
- 16:7 TR "another out of the altar" (KJV); the Greek text has "the altar" speaking.
- 16:14 TR "the kings of the earth and of the whole world" (KJV).
- 16:17 TR, Byzantine "out of the temple of heaven" (KJV).
- 16:18 NA28 ἄνθρωπος ἐγένετο, "since a human being came to be on the earth" (singular, a hint at Adam), against
  SBLGNT ἄνθρωποι. Only a note-level point.

### 12. Major. notes: important Old Testament sources and cruxes in this slice have no note

- **13:7**: "make war on the saints and defeat them" quotes Daniel 7:21 (the little horn "made war with the holy ones
  and prevailed"). No note, no echo. This is the key text for the beast as Daniel's fourth beast and little horn.
- **13:10**: the captivity and sword saying is Jeremiah 15:2 (and 43:11). Only the settings card mentions it; there
  is no echo note and it is not in `echoes`.
- **13:18**: once note [134] becomes a variant, the slice has no note at all on what "a human number" means.
  Add a `views` note on "a human number": gematria and Nero, with the Murabba'at spelling; Irenaeus's own
  suggestions (Lateinos, Teitan, Euanthas; *Against Heresies* 5.30.3); the idealist "six short of seven"; the
  historicist and futurist readings; and the translation question "a man's number" or "a human number" (compare
  21:17, "a human measure"). The 13:16–18 settings card already has these views; the note should point the reader to
  it rather than repeat it.
- **14:10**: the cup of God's wrath, "unmixed" (ἀκράτου, strong wine not cut with water), comes from Psalm 75:8,
  Jeremiah 25:15–29 and Isaiah 51:17. There is no note. "Fire and sulfur" (Genesis 19:24; Isaiah 34:9) appears only
  in a gloss.
- **16:5**: God is called "the one who is and who was", without the "who is coming" of 1:4 and 1:8, because now he
  has come (as in 11:17). This is a well-known point (Bauckham, Koester) and there is no note in the book; grep finds
  only the 1:4 note.
- **16:19**: "the great city split into three parts". Which city? Jerusalem, called "the great city" at 11:8 (many
  preterists), or Babylon/Rome (most readers, since the verse goes on to Babylon). This is a real crux and has no
  note.
- **12:5**: the Psalm 2:9 quotation and ποιμαίνειν ("shepherd") is covered at 2:27, but 12:5 needs a one-line note
  or reference pointing there, since the reader of chapter 12 meets it here.
- **12:17 / 14:12**: "the testimony about Jesus" and "faith in Jesus" (τὴν μαρτυρίαν Ἰησοῦ, τὴν πίστιν Ἰησοῦ) are
  both debated genitives ("about Jesus" or "Jesus's own"; "faith in Jesus" or "faithfulness to Jesus" or "Jesus's
  faithfulness"). Add one `deb` note, or a reference to an existing one at 1:2 or 19:10 if there is one.
- **16:17**: "It is done" (γέγονεν) and 21:6, with John 19:30 (τετέλεσται). There is only a gloss.

### 13. Major. chapters.json 15 (from 3b-extra.js `ch15` and 3-data.js line 242): chapter 16's material is shown on chapter 15's page

The old study's station `ch15` covered chapters 15–16 (3-data.js: `ch:[15,16]`). The importer attaches the station's
fact, spec and links to chapter 15 only. So chapter 15's page carries the Tel Megiddo fact box, the spec "Frogs: the
last trick the magicians could copy" (about 16:13), and the links Armageddon, Tel Megiddo, Battle of Megiddo.
Chapter 16, where Armageddon is, has no `links` at all. Fix the cause: the import mapping in `tools/import-rev.js`
(STATION_AT / EXTRA, line 40), or split `ch15` in 3b-extra.js and 3-data.js into per-chapter extras. Do not hand-edit
the generated chapters.json. The fixer should check whether any other two-chapter station (grep `ch:[` in
3-data.js) has the same problem, and tell the lead.

### 14. Major. chapters.json 16 deep (chdeep.js lines 101 and 103): bare references point to Revelation verses that do not exist

In the bowls table, "Nile to blood (7:20)" and "Darkness (10:22)" are bare references in a cell about Exodus, so the
site reads them as Revelation 7:20 and Revelation 10:22. Neither exists (Revelation 7 has 17 verses, chapter 10 has
11). The same thing happens in "How Babylon fell the first time": "(Isaiah 44:27; Jeremiah 50:38; 51:36)" makes
51:36 a Revelation reference. Fix: "Exodus 7:20", "Exodus 10:22", "Jeremiah 51:36". The build did not warn about
these; tell the lead (proposals build.md) that the bare-ref check misses table cells.

### 15. Major. traditions: no card on hell at 14:9–11, and none on the Adventist reading of 12:17 and 14:12

Revelation 14:10–11 ("tormented with fire and sulfur", "the smoke of their torment rises forever and ever ... no
rest day or night") is one of the main texts in the debate over eternal punishment, and the book has no traditions
card on it, here or at 20:10–15 (the cards are sabbath, seven-churches, rapture, communion-of-saints, 144000,
woman-of-ch12, antichrist, babylon, millennium). The traditions really do conflict:
- Catholic: hell is eternal (Catechism 1033–1037).
- Orthodox: eternal, often explained as God's love felt as fire by those who refuse it (Isaac the Syrian); hope for
  all is allowed as a private opinion, not taught.
- Reformed: "everlasting torments" (Westminster Confession 33.2).
- Adventist: the wicked are destroyed, not tormented forever (Fundamental Beliefs on the state of the dead and the
  millennium), reading 14:11 with Isaiah 34:10 as note [141] does.
- Anglican: divided; John Stott held conditional immortality, as did the Church of England Doctrine Commission's *The
  Mystery of Salvation* (1995), which leaned toward annihilation.

Use `top: "lake-of-fire"` and cite only sources that exist (`ccc`, `westminster`, `white-controversy` or an Adventist
Fundamental Beliefs key; add keys as needed).

Second, weaker: Seventh-day Adventists identify themselves as the "remnant" of 12:17 ("those who keep God's commands
and hold to the testimony of Jesus"), and read "the testimony of Jesus" (with 19:10) as the gift of prophecy in
Ellen White (Fundamental Beliefs on the remnant and on the gift of prophecy). The note at 14:6 mentions Adventists,
but 12:17 says nothing. A views note at 12:17, or a card, would fix that. 13:8 (names written "since the world was
made") is a classic text in the election debate (compare 3:5), and the book has no election card; consider one.

### 16. Major. Quote warnings in this slice, and quotes that do not match but are not flagged

Build warnings (each must reach 0 before the book is done):
- notes[115] 12:5 (notes3.js line 6): quotes 12:5 as "caught up to God and to his throne"; the Plain says "snatched
  up to God and to his throne".
- notes[140] 14:8 (notes3.js line 35): Isaiah 21:9 and Jeremiah 51:7. The current Isaiah Plain is "Fallen! Fallen is
  Babylon!"; Jeremiah 51:7 is "A cup of gold, that was Babylon, / in the hand of the LORD, / getting the whole earth
  drunk." Quote those exactly, without the " / " marks, or with "..." for skipped words. The note's `p` ("Babylon has
  fallen, has fallen!") must change too.
- chapters 14 (chdeep.js lines 94–95): 14:20 (see finding 9) and 14:4 "first fruits to God and the Lamb" (Plain:
  "firstfruits to God and to the Lamb"; the heading "First fruits" is also inconsistent with the Plain's
  "firstfruits").
- Slices 1–5 and 17–22 quote 14:5 as "no lie in their mouths" (notes[242] at 3:9, chapters 21, topic say-are-not).
  The Plain reads "No lie was found in their mouths". If 14:5 is rebuilt, those quotes follow it; the lead's
  alignment pass handles them.

Not flagged, because no reference follows the quote, but still wrong:
- Chapter 15 deep table (chdeep.js line 97): "Great and wonderful are your works" (Plain: "Great and amazing"), "All
  nations will come and worship before you" (Plain: "in front of you"), "Your righteous acts have been revealed"
  (Plain: "your acts of justice have been made known").
- Chapter 12 deep "Exodus again": "the two wings of the great eagle" (Plain: "a great eagle"; the deep section is
  closer to the Greek, which supports changing the Plain, finding 1). The cast table writes "the devil" where the
  Plain has "the Devil".
- Note [141] quotes Isaiah 34:10 as "rises forever"; the Isaiah Plain is "its smoke will keep going up forever".

### 17. Minor. plain.txt 12:10 "his Christ"

τοῦ χριστοῦ αὐτοῦ is a title with an article and a possessive, from Psalm 2:2 ("against the LORD and against his
anointed"). "His Christ" is not natural English. terms.json gives "the Messiah" where Χριστός is a title. Consider
"his Messiah" (and the same at 11:15, in the other slice), with a note linking Psalm 2:2. This needs a lead decision
across both slices.

### 18. Minor. plain.txt 16:9, 16:11, note 16:9: μετανοέω is "turn away from their sins", against the term "repent"

terms.json: `["μετανοέω / μετάνοια", "repent / repentance (gloss at first use: 'turn your life around')"]`. The whole
book uses "turn away" (2:21–22; 9:20–21), so this is a book-wide lead decision like finding 3. Note [150]'s anchor
and its title "Plagues meant to turn people" depend on it. I list it as minor because the meaning is kept, but it is a
term breach.

### 19. Minor. plain.txt 13:1, 13:5, 13:6 and 16:9, 16:11, 16:21: one Greek root, two English words

βλασφημία / βλασφημέω is "insult God" in 13:1, 13:5–6 and "cursed" in 16:9, 11, 21. "Cursed" suggests swearing; the
Greek is speaking against God. Pick one family, for example "spoke against God" or "insulted God" throughout, so the
reader can see that the bowls' victims do what the beast did.

### 20. Minor. plain.txt 13:10 "prison" for αἰχμαλωσία

αἰχμαλωσία is captivity, being taken prisoner in war or exile, as in Jeremiah 15:2, which the line quotes. "Prison"
narrows it. Use "captivity". The gloss "If you're headed to prison..." changes with it.

### 21. Minor. plain.txt 12:14: "a great eagle" for τοῦ ἀετοῦ τοῦ μεγάλου

The Greek has articles: "the great eagle". Some commentators (and the chapter page itself) see in it a known eagle,
God's eagle of Exodus 19:4 and Deuteronomy 32:11. "A great eagle" is the NIV's choice.

### 22. Minor. plain.txt 12:3–17: the dragon is "it" in 12:3–4 and 12:15–16, "he" in 12:7–13 and 12:17

Choose one, or switch on purpose at 12:9 when the dragon is named as the devil, and keep to it after that (12:15
"its mouth", 12:16 "its mouth" against 12:13 "he").

### 23. Minor. plain.txt 12:1, 12:3, 15:1: ἐν τῷ οὐρανῷ is "in the sky" in 12:1, 3 and "in heaven" in 15:1

15:1 ἄλλο σημεῖον ἐν τῷ οὐρανῷ deliberately repeats 12:1 and 12:3 ("another sign"). Render the three the same way so
the link shows.

### 24. Minor. plain.txt 12:10–12, 15:3–4, 16:5–7: hymns without poetry line breaks

STYLE: songs are poetry and get " / " line breaks. The whole Revelation Plain has none (grep finds 0), so this is
book-wide; within this slice, the victory song (12:10–12), the song of Moses and the Lamb (15:3–4), and the angel's
and altar's praise (16:5–7) should be set as poetry. Lead decision.

### 25. Minor. note [125] 13:2 (notes3.js line 18): θηρίον count

"The word appears 38 times in Revelation, all for the beasts of chapters 11–20." The SBLGNT has θηρίον 39 times;
the 39th is 6:8 (ὑπὸ τῶν θηρίων τῆς γῆς, "the wild animals of the earth"), which is not one of the beasts. Fix: "39
times; 38 of them for the beasts of chapters 11–20 (the other is the wild animals of 6:8)".

### 26. Minor. note [128] 13:5: the 42 camps of Numbers 33 are stated as fact

"Forty-two months echoes Israel's 42 camps in the wilderness" is a suggestion some interpreters make, not an
established echo. Say "Some see an echo of..." and add the better-known links: Daniel 7:25 and 12:7 (three and a half
times) and Elijah's three and a half years of drought (Luke 4:25; James 5:17), which lies behind the two witnesses in
11:6.

### 27. Minor. note [150] 16:9 (notes3.js line 49): "Three times the bowls note people refusing to repent"

Only 16:9 and 16:11 say they did not repent. 16:21 says they cursed God and says nothing about repentance. The body
("16:9, 11 and 21 note that people curse God instead of repenting") is also wrong for 16:21. Fix: "Twice the bowls
note that people did not repent (16:9, 11), and three times that they cursed God (16:9, 11, 21)."

### 28. Minor. note [155] 16:21 (notes3.js line 54), chapter 16 deep (chdeep.js line 104), gloss 16:21: the talent and Josephus

- The weight of a talent is given three ways: note preview "75 to 100 pounds", note body "50–100 pounds", chapter
  page "60 to 100 pounds". Use one range (a common estimate is about 60–90 pounds; say it varied by region).
- Josephus, *Jewish War* 5.269–273: the Greek manuscripts have the watchmen shout "The son is coming" (ὁ υἱὸς
  ἔρχεται). "The stone is coming" is a modern correction, often explained as a pun on Hebrew *ben* "son" and *eben*
  "stone". Some preterists make much of the manuscript reading. Report both, and do not present the correction as
  what Josephus wrote.
- Chapter 16 deep: "The people's response is the same as Pharaoh's: they curse God". Pharaoh hardened his heart; he
  did not curse God. Say "Like Pharaoh, they harden themselves; worse, they curse God."
- The gloss "the size of cinder blocks" is wrong: the measure is weight, not size, and a cinder block weighs about 30
  to 35 pounds. Use something like "each as heavy as a grown child" or "heavy enough to crush a roof".

### 29. Minor. note [112] 12:1: Juno and the stars

The Isis comparison is well grounded (Apuleius, *Metamorphoses* 11.3–4, describes Isis with the moon on her brow and
a mantle of stars; cite it). "The Roman Juno ... shown ... with stars and the moon" is doubtful; drop Juno or source
it. The European-flag sentence is correctly hedged ("by its designer's later account"), though the Council of
Europe's official account gives a different reason; say so in half a sentence.

### 30. Minor. note [114] 12:4: the "third of the angels" view is not given its strongest form

The note calls it "popular belief" based on this verse, but its holders also rest it on 12:9 ("his angels were
thrown down with him") and 12:7, and many commentators (futurist and some idealist) read the stars of 12:4 as
angels. Add that sentence. The rest of the note (Daniel 8:10, Milton) is good.

### 31. Minor. glosses.js 12–16: glosses that interpret or that do not fit the site

- 12:1 "a crown for the twelve tribes": this is an interpretation (twelve apostles is the other main view). Use "a
  crown of twelve stars, like a queen's".
- 12:3 "a monster, red with blood": the "blood" is a guess; πυρρός is fiery red.
- 12:15 "a flood of lies and trouble": "lies" is an interpretation.
- 13:18 "a number that spells a man's name" assumes gematria, which the slice elsewhere presents as one view.
- 14:4 "stayed pure, like soldiers on a mission" picks one of the views the note sets side by side.
- 16:15 "be caught with their pants down" is flip for this site and audience; use "be caught unready and ashamed".
- 16:16 "Armageddon" → "the place of the last battle" contradicts note [154] ("It is not a word that means 'the end of
  the world'") and assumes a futurist reading. Use "Mount Megiddo, the old battlefield".
- 16:21: see finding 28.

### 32. Minor. note [118] 12:9: "Wisdom 2:24"

works.json names this work "Wisdom of Solomon" (aka "Wisdom of Solomon", "Book of Wisdom"). Write "Wisdom of
Solomon 2:24" so the site marks it as deuterocanonical, and add "(Scripture for Catholics and Orthodox)" in the body,
since the note uses it next to Romans.

### 33. Minor. note [146] 15:3: source key

The observation that the song never mentions the singers' own victory, and the conversion of the nations, is
Bauckham's in *The Climax of Prophecy* (chapter 9), key `climax`, as the chapter-15 page correctly cites. The note uses
`bauckham` (*The Theology of the Book of Revelation*). Use `climax`, or both.

### 34. Minor. note [129] 13:8: the word-order statement leans toward the Plain's choice

"The Greek word order allows" both readings. In fact the phrase ἀπὸ καταβολῆς κόσμου comes right after τοῦ ἀρνίου
τοῦ ἐσφαγμένου, so word order favors "the Lamb slain from the foundation of the world" (KJV, NIV), and the parallel
in 17:8 favors "written from the foundation" (ESV, NRSV), which the Plain follows. Say it that way, so the reader sees
that the Plain chose the reading word order does not favor, and why.

### 35. Minor. chapters.json 13, settings 13:16–18: "as Irenaeus already noted"

Irenaeus (*Against Heresies* 5.30.3) offered Lateinos as one possible name, with Euanthas and Teitan, and preferred
Teitan. He did not connect it to the papacy, which did not yet exist in that sense. Write: "through the Greek word
Lateinos, 'the Latin one', whose letters add up to 666, one of the names Irenaeus already suggested."

### 36. Minor. settings: a few speeches in 14 and 16 have no card

The 16:1 command from the temple ("Go and pour out...") and the 16:17 voice from the throne ("It is done!") are
speeches with no card; one short card for 16:1 and 16:17 would cover both. In 14:15–18 the angels' calls to reap are
covered only by the chapter page; they could be added to a 14:14–20 card ("the two harvests"), which would also give
the views (grain = gathering of believers, or judgment). Low priority.

### 37. Minor. chapters.json `echoes` for 12, 14 and 16 are thin

- 12: add Daniel 7:25; Daniel 10:13; Psalm 74:13–14; Isaiah 26:17–27:1; Micah 4:10; Job 1:6–12; Zechariah 3:1; Luke
  10:18; John 12:31.
- 13: add Daniel 7:21; Jeremiah 15:2.
- 14: add Psalm 75:8; Jeremiah 25:15; Isaiah 51:17; Genesis 19:24; Isaiah 34:9–10; Daniel 4:30.
- 16: add 2 Kings 23:29 (Josiah's death at Megiddo, which the old station text already mentions); Jeremiah 51:36;
  Daniel 12:1 (for 16:18); John 19:30 (for 16:17); Exodus 9:23–24 is there.

### 38. Minor. plain.txt 16:16: "Then the spirits gathered the kings"

συνήγαγεν is singular. With a neuter plural subject (πνεύματα) that is normal Greek, so "the spirits" is the likely
subject, but some read God as the one who gathers (compare 17:17; 20:8). The Plain names the subject outright.
"Then they gathered them" keeps the Greek's openness; or add half a sentence to note [154].

### 39. Minor. Outside this slice, found while checking: topic "antichrist"

The build warns `Rev/topics antichrist: quotes Revelation 16:4 as "the world-deceiver will appear as a son of God"`.
That is Didache 16:4, not Revelation 16:4. The reference is probably written as a bare "16:4" or the parser lost the
book name. This belongs to the book-level review (Rev-review-book.md); I list it so it is not missed.

---

## Notes for the fixer

- Change source files only, with exact-string edits (plain.js, notes3.js, glosses.js, chdeep.js, 3-data.js,
  3b-extra.js), and the overlay with a load / change chapters 12–16 / dump script. Then run `node tools/import-rev.js`
  and `VERBOSE=1 node tools/build.js --check Rev`.
- Findings 3, 17, 18, 24 and the book-wide parts of finding 1 (1:15, 19:6 "rushing waters") need the lead or the
  other slices. Do your chapters, and say in Fixes applied what you left for the alignment pass.
- Variant anchors may not overlap notes or glosses: remove or re-anchor the glosses at 13:7 and 13:10 and note [136]
  at 14:1 before adding those variants.

Sources consulted for witness checks: [Textual variants in the Book of Revelation (Wikipedia), for 13:18](https://en.wikipedia.org/wiki/Textual_variants_in_the_Book_of_Revelation);
the other witness lists are from Metzger's *Textual Commentary* and the NA28 apparatus as I recall them, and must be
confirmed by the fixer (finding 11).

## Fixes applied

Fixer: review-fixer for chapters 12–16 (2026-10-26). Sources edited: revelation/v2/src/plain.js, notes3.js, glosses.js,
chapters.js, chdeep.js; revelation/src/3-data.js, 3b-extra.js; content/overlays/Rev.json (settings and variants for
12–16 only). Drift audit list: .scratch/Rev-12-16-fix/audit.md.

1. Fixed. All 84 verses of 12:1–16:21 rebuilt from `literal.js` (SBLGNT base, Byzantine checked) with new sentence
   shapes, then drift-audited in the head. Runs kept only where the Greek forces them (12:6 "The woman fled into the
   wilderness", 14:7 "Fear God and give him glory", 14:13 "Blessed are the dead who die in the Lord", 14:8 "Fallen,
   fallen is Babylon the Great", which also matches the site's Isaiah 21:9). Every note, gloss and chapter-page quote
   in 12–16 re-anchored or re-quoted. "Rushing waters" at 1:15 and 19:6 left to those slices.
2. Fixed. 15:3 "the song of Moses, the slave of God, and the song of the Lamb"; note and gloss anchors follow; the
   15:3 note adds that "slave of God" was Moses' title of honor (Joshua 14:7; Deuteronomy 34:5). The general slavery
   note is the 01-05 fixer's (1:1).
3. Fixed (lead decision 5). "The saints" at 13:7, 13:10, 14:12, 16:6 (16:6 drops the added "your" twice). The 13:7
   gloss removed (the sentence is now a variant).
4. Fixed. 16:13 "three unclean spirits like frogs"; note (now explains <i>akatharta</i>), gloss and chapter 16 summary
   follow; the old station summary in 3-data.js too.
5. Fixed. 14:4 "did not soil themselves with women, for they are virgins"; note anchor follows; the 14:4 gloss that
   picked one view removed (finding 31); the WORDS body quotes the new wording.
6. Fixed. 13:14 "the beast that had the sword wound and came back to life"; new word note on "came back to life"
   linking 2:8, 5:6, 13:3, 17:8, 20:4.
7. Fixed. 13:12 "in its presence", 13:14 "in front of the beast".
8. Fixed. 12:11 "and they did not love their lives / even to the point of death"; "because of" for διά + accusative,
   with a new `deb` word note giving both senses (Aune, Koester); the spec note points to it; gloss re-anchored.
9. Fixed. 14:20 "for 1,600 stadia"; gloss "about 184 miles"; note anchor "1,600 stadia"; deep section now says 184
   miles and quotes the new Plain. 21:16 is the 17-22 slice's (tell the lead to treat it the same way).
10. Fixed. 12:17 "the rest of her offspring"; the 12:9 note now says 12:17 uses Genesis 3:15's σπέρμα.
11. Fixed. 22 variant entries in the overlay: 12:12, 12:17; 13:1 (he/I stood, with the 12:18 numbering and the
    names/name difference in `b`), 13:5, 13:6, 13:7, 13:10 (two entries), 13:17, 13:18 (666/616/665; the old `var`
    note n616 removed from notes3.js, its content moved to the variant and a new views note on "a human number");
    14:1 (note re-anchored to "written on their foreheads"), 14:3 (the Plain now translates SBLGNT's ὡς), 14:5, 14:8
    (with the TR's "city" in `b`); 15:2, 15:3 (follows NA28/THGNT "nations" against SBLGNT, with reasons), 15:6;
    16:5 (Beza's conjecture), 16:7, 16:14, 16:17, 16:18 (NA28 singular). Edition evidence checked against the `w`
    markers in texts/orig/Rev.json and texts/auto/Rev.json (e.g. NA28's brackets at 13:1 and 14:3). Manuscript
    witnesses named only where I am confident of Metzger's report, and marked "reported by Metzger"; witnesses I
    could not confirm were left out (15:6 "P, 051" and "2053", 14:3 "P47, Sinaiticus", 13:10 for THGNT/WH, which
    are named in `b` only for δεῖ). The Source Library's Tischendorf volume does not cover Revelation, so nothing came
    from it.
12. Fixed. New notes: 13:7 Daniel 7:21 (echo); 13:10 Jeremiah 15:2 and 43:11 (echo); 13:18 "a human number" (views:
    translation, gematria with the Murabba'at spelling, Irenaeus's names, idealist, historicist, futurist; points to
    the card); 14:10 the cup of wrath, ἄκρατος, Psalm 75:8, Isaiah 51:17, Jeremiah 25:15–29, Genesis 19:24 (echo);
    16:5 "who is and who was" without "who is coming" (word); 16:19 which great city (views); 12:5 shepherding with
    the iron rod, pointing to 2:27 (echo); 12:17 and 14:12 the debated genitives (two `deb` word notes, cross-linked);
    16:17 "It is done!" with 21:6 and John 19:30 (echo).
13. Fixed by the lead in import-rev.js (fact and spec now on chapter 16; confirmed after import). The links were still
    on chapter 15, so I added `links:16` to EXTRA_PLACE ch15 in chdeep.js; this also moves "Song of the Sea" to
    chapter 16 (EXTRA_PLACE places a station's links as one block). Also fixed a bare "(8:18–19)" in that station's
    spec, now Exodus 8:19. Other two-chapter stations (ch2, ch4, ch8, ch10, ch17, ch21): for the lead.
14. Fixed. "Exodus 7:20", "Exodus 10:22", "Jeremiah 51:36" (chdeep.js), and "Daniel 10:13; Daniel 10:21; Daniel
    12:1" in the cast table. The bare-ref check missing table cells is for the lead (proposals build.md).
15. Partly. The hell card goes at chapter 20 (lead decision 17, the 17-22 fixer); the 14:11 note now points to it.
    The Adventist reading of 12:17 and 14:12 added as a views note at 12:17 ("the rest of her offspring": remnant,
    Fundamental Beliefs 13 and 18, Ellen White) and a sentence in the 14:12 note. Election card at 13:8 declined: the
    13:8 note now names the election debate; the card belongs with Romans 9 or Ephesians 1.
16. Fixed within this slice: 12:5 (WORDS rapture body), 14:8 (Isaiah 21:9 and Jeremiah 51:7 quoted exactly), 14:20 and
    14:4 (chapter 14 deep, heading now "Firstfruits"), chapter 15 table (new wording), chapter 12 deep and cast table,
    Isaiah 34:10 in the 14:11 note; 12:14 in the chapter-12 fact box. Also on my pages: 21:1 and 11:15 quotes turned
    into paraphrase. Left for the lead's sync (quotes of 12–16 elsewhere): notes[255] 3:9 and chapter 21 (14:5);
    topics wrath (14:10), overcomer (12:11), michael (12:10–11), dragon (12:9, 12:12), woman-of-ch12 (12:17), 144000
    (14:4), mount-zion (14:1), euphrates (16:12), bowls (16:6), sea-of-glass (15:3), three-angels (14:6),
    say-are-not (14:5), armageddon (16:16), three-and-a-half (12:14); book.json (12:14).
17. Fixed (lead decision 9). 12:10 "the authority of his Messiah".
18. Fixed (lead decision 6). 16:9, 16:11 "repent"; note anchor and title follow (gloss at 2:5 is the 01-05 fixer's).
19. Fixed. βλασφημ- is "insult" throughout 13:1, 13:5, 13:6, 16:9, 16:11, 16:21.
20. Fixed. 13:10 "captivity"; gloss "headed for captivity" ("taken prisoner, or carried off into exile").
21. Fixed. 12:14 "the two wings of the great eagle"; note and gloss follow.
22. Fixed. The dragon is "it" until he is named at 12:9, "he" from then on (12:13–17).
23. Fixed. 12:1, 12:3 and 15:1 all "in heaven".
24. Fixed. 12:10–12, 15:3–4, 16:5–7 set as poetry with " / "; no anchor crosses a break.
25. Fixed. 39 times: 38 for the beasts, once for 6:8.
26. Fixed. Daniel 7:25, Daniel 12:7, Luke 4:25, James 5:17 and 11:6 added; Numbers 33 now "some also see".
27. Fixed. "Twice ... did not repent (16:9, 11), and three times that they insulted God (16:9, 11, 21)".
28. Fixed. One range, about 60–90 pounds, varying by region (note, gloss, deep section); Josephus 5.269–273 with
    the manuscripts' "The son is coming" and the "stone" correction; "Like Pharaoh, the people harden themselves;
    worse, they insult God"; gloss now "heavy enough to crush a roof".
29. Fixed. Juno dropped; Apuleius, <i>Metamorphoses</i> 11.3–4 cited; the Council of Europe's own explanation added.
30. Fixed. The 12:4 note gives the view's strongest form (12:7–9, commentators who read the stars as angels).
31. Fixed. 12:1 "a crown of twelve stars, like a queen's"; 12:3 "a monster, red as fire"; 12:15 "a flood meant to
    wipe her out"; 13:18 "a number people can work out"; 14:4 gloss removed; 16:15 "be caught unready and ashamed";
    16:16 "Mount Megiddo, the old battlefield"; 16:21 as finding 28.
32. Fixed. "Wisdom of Solomon 2:24, Scripture for Catholics and Orthodox".
33. Fixed. 15:3 note cites `climax` (and `bauckham`; the book fixer has since renamed them `bauckham-climax` and `bauckham-theology`), naming <i>The Climax of Prophecy</i>.
34. Fixed. The 13:8 note says word order favors "the Lamb slain from the foundation" and that the Plain follows 17:8
    against it.
35. Fixed. 13:16–18 card: Lateinos as one of Irenaeus's names (he preferred Teitan; no papacy then).
36. Fixed. New cards: 14:14–20 (the two harvests, with views) and 16:1–21 (the voice from the temple, "Go!" and "It is
    done!"). 16:5–7 card's speaker is now "the angel of the waters".
37. Fixed. Echoes added for 12, 13, 14 and 16 as listed (Isaiah 26:17–18 written as one range; Jeremiah 50:38 added
    at 16).
38. Fixed. 16:16 "And the kings were brought together", leaving the subject open; the Armageddon word note (WORDS) adds
    the singular verb and the readings.
39. Left for the book fixer (topic antichrist), as the lead instructed.

Notes for the lead: (a) import-rev.js copies only r, l, s, top from non-`w` notes, so the `kind` I gave the new word
notes (deb, nu) is dropped; existing non-`w` word notes have no kind either. (b) Base-text consistency across slices:
"the All-Powerful", "win the victory" (νικάω), θυμός "anger" and ὀργή "wrath" kept as the book had them; lightning
formula at 16:18 is now "lightning flashes, roaring voices, and thunder" (compare 4:5, 8:5, 11:19). (c) 2:27 is
assumed to carry the note on ποιμαίνω that the 12:5 note points to.
