# Hostile review: Revelation, book-level material

Scope: `content/books/Rev/book.json` (lead, facts, audience, traditions, lenses, sections, the views / keys /
beasts / israel / mythos / art pages, prompts, reading), `content/books/Rev/topics.json` (95 contributions), the 59
`content/topics/*.json` cores with `"origin":"Rev"`, and `content/books/Rev/sources.json`. The Plain English Translation is not reviewed
verse by verse here; the four chapter slices cover it.

Checks run: `node tools/import-rev.js` (244 notes, 290 glosses, 22 chapters, 95 topics), then
`VERBOSE=1 node tools/build.js --check Rev`: **0 errors, 104 warnings**, all quote warnings. 48 of them are in this slice
(46 in topics, 2 in book.json). Facts were checked against the Greek (`texts/orig/Rev.json`), works.json, the other
books' sources and topics, and web search where unsure.

## Verdict

The book-level material is rich and mostly accurate. The dating case, Irenaeus, Nero and the gematria (נרון קסר = 666,
נרו קסר = 616), the city histories (Tacitus, Strabo, Herodotus, Polybius), the imperial cult, the canon card (Dionysius,
Cyril, the Peshitta, Trent, Luther 1522/1530, Zwingli, Calvin) and the millennium and rapture histories all check out. I
found no invented source. The serious problems are elsewhere. (1) The topic sections quote unwritten books, and
sometimes Revelation itself, in copyrighted NIV (and once NRSV) wording. (2) About twenty Rev-origin topic cores are
now the shared pages for the whole Bible, but they still carry Revelation-only titles and leads. The importer rewrites
those titles and leads on every run, so the Acts cards on church elders land on "The Twenty-Four Elders," and Queen
Jezebel lands on "'Jezebel' of Thyatira." (3) Bare references after writings outside the 66, plus an importer bug that
strips HTML without spaces, produce wrong `refs`. The Didache becomes Revelation 16:4, the Testament of Levi becomes
Revelation 18:10–11, and 1QM becomes Revelation 17:6–7. (4) Several writings outside the 66 are named with no
works.json entry, and "4 Ezra (2 Esdras 3–14)" breaks the site's naming rule. (5) One "Claude's theory" box is simply
wrong about the Greek. (6) The four-views framing gives critical scholarship no seat, and the traditions cards miss
the final-punishment conflict, for which Revelation is the key text. (7) The source keys break the naming rule and clash with other books' keys. **Counts: 0 critical, 10 major, 18 minor.**

## Findings

### Major

**1. Copyrighted translation wording in quotations (topics; source `revelation/v2/src/topics1.js`, `topics2.js`,
`topics3.js`, `sayare.js`).**
Quotations of books the site has not yet translated reproduce NIV wording word for word, and the build cannot catch
them because no Plain English Translation exists to compare against. These are described here, not reproduced, with a few words each:
- new-creation [2]: 2 Peter 3:10 ("disappear with a roar ...", plus "laid bare"); Romans 8:21 ("liberated from its
  bondage to decay").
- white-throne [2]: Romans 2:6 ("repay each person ..."); Ephesians 2:8 ("by grace you have been saved").
- soon [2]: 2 Peter 3:8–9 ("not slow in keeping his promise ...").
- word-of-god [1]: Hebrews 4:12 ("alive and active, sharper ...").
- temple [2]: Hebrews 8:5 ("copy and shadow ...").
- say-are-not [2]: 2 Corinthians 11:13 ("masquerading as apostles").
- lampstands [1]: Zechariah 4:6 ("Not by might nor by power").
- lamb [3]: Zechariah 4:10 ("range throughout the earth").
- harvest [1]: Joel 3:13 ("Swing the sickle ...").
- white-throne [1]: Daniel 7:10 ("the court was seated ...").
- four-horsemen [1]: Ezekiel 14:21 ("four dreadful judgments").
- second-death [5]: 1 Corinthians 15:26.
- word-of-god [2]: Wisdom 18:15–16 is NRSV wording ("all-powerful word leaped from heaven ... stern warrior ...
  authentic command").

The same habit shows where the topics quote Revelation itself and differ from the site's Plain English Translation toward NIV wording. In
6:10 they have "How long, Sovereign Lord" (wrath [0], bowls [1]) where the Plain English Translation has "Holy and true Master." In 11:13
they have "the rest were terrified" (two-witnesses [2], repentance [4]) where the Plain English Translation has "The survivors were
terrified." In 20:11 they have "there was no place for them" (white-throne [0]).
*Fix:* quote the site's Plain English Translation where the book exists. For unwritten books, translate the phrase fresh from the
Hebrew/Greek or quote a public-domain version and name it, for example "(Hebrews 4:12, KJV)". Then grep the topic
sources for other NIV-shaped quotations of unwritten books: Hebrews, the Pauline letters, the Catholic letters, Daniel,
Ezekiel, the Minor Prophets.

**2. Quote warnings in this slice (48).** The build lists them. Topics: millennium, wrath, antichrist, white-throne (2),
lake-of-fire, book-of-life (2), new-creation (2), martyrs (2), repentance, overcomer, dating, lamb, angels (2),
living-creatures, elders, two-witnesses (2), woman-of-ch12, bride (3), 144000, philadelphia (2), rome, mount-zion,
euphrates, twelve-tribes, four-horsemen, trumpets, bowls (2), gems, wormwood, harvest, alpha-omega, word-of-god (2),
say-are-not (4). book.json: Revelation 1:4 "is, was and is to come" (beasts page, source `revelation/src/3-data.js`;
the Plain English Translation has "who is, who was, and who is coming") and Revelation 11:8 "where their Lord was crucified" (keys and
israel pages; the Plain English Translation has "was also crucified"). Isaiah and Jeremiah are now written, so their quotes (Isaiah 4:3,
14:12, 25:8, 49:2, 54:5, 54:11–12, 63:1–6, 66:7–8, 66:24, 11:4) must take the site's Isaiah wording. The δοῦλος →
"slave" decision will add more (6:11 "fellow servants", 19:10, 22:9). Not caught by the build: new-jerusalem [1]
quotes Tobit 13:17 as streets "paved with ruby and stones of Ophir." The site's Tobit reads "set like a mosaic / with
red gems and with stone of Ophir."
*Fix:* align each quote to the current Plain English Translation, after the slice fixers have changed the Plain English Translation.

**3. Rev-origin cores that other books now use for a different subject (`content/topics/elders.json`, `jezebel.json`,
`son-of-man.json`, `daniel.json`, `false-prophet.json`; source titles and leads in `revelation/v2/src/topics2.js` and
`topics3.js`).**
`tools/import-rev.js` rewrites title, kind and lead on every run while `origin` is "Rev". It keeps only `aka`, so
another writer's attempt to widen the page is silently undone.
- **elders**: titled "The Twenty-Four Elders," with a lead about Revelation 4:4. Its aka (added by someone else) is
  "presbyter, church elders, overseer, bishop." The Acts "Where Christians differ" cards on choosing elders (Acts
  14:23) and on whether bishops differ from elders (Acts 20:17, 28) carry `top: "elders"`. They are listed on a page
  about heavenly elders. Deuteronomy, Ezra, 1 Samuel, Judith and Psalms tag it for elders of Israel.
- **jezebel**: titled "'Jezebel' of Thyatira." 1 Kings and 2 Kings tag their notes on the queen to it.
- **son-of-man**: titled "'One Like a Son of Man'" (kind People), with a lead about Revelation 1. It is the shared page
  for Jesus's self-title across Matthew, Mark, Luke, John, Acts, Psalms and 1 Enoch (22 uses).
- **daniel**: titled "Revelation and Daniel" (kind Words). It is used by 1–2 Maccabees and a Nehemiah traditions card.
- **false-prophet**: the beast from the earth. Matthew and Mark tag Matthew 7:15 and 24:24 to it, but those belong on
  the existing `false-teachers` ("False Teachers and False Prophets").

*Fix:* generalize each core (whole-Bible title and lead, delete the `origin` line, so Revelation's lead becomes an
"In Revelation" section as the importer intends). For elders, either create a church-office topic (elders, overseers,
bishops) and move the Acts cards and aka there, or retitle elders as "Elders" with a section on the twenty-four. Move
Matthew 7:15 and 24:24 to false-teachers, or make false-prophet "related" to it.

**4. Other Rev-origin cores that now serve the whole Bible still have Revelation-only leads.** The importer still owns
them. Uses by other books are in brackets: martyrs [28], wrath [27], day-of-the-lord [14], bride [14], rome [13],
porneia [13], millennium [12], imperial-cult [11], abaddon [11], antichrist [10], new-jerusalem [9], rapture [7],
tribulation [7], hallelujah [7], armageddon [6], apocalyptic [5], four-views [5], soon [5], three-and-a-half [5],
wormwood [3]. Examples:
- The porneia lead counts only Revelation's 19 uses, though Matthew 5:32 / 19:9 and Acts 15 use the page.
- The abaddon lead is Revelation 9:11, though Job, Proverbs and Psalms use the page for the place.
- The day-of-the-lord lead centers on Revelation, which "never uses the exact phrase."

The progress note itself says "Topic leads are Revelation-specific; generalize when other books contribute." They now
do. *Fix:* write whole-Bible leads and drop `origin`, starting with the most used. While doing it, move day-of-the-lord
[3] ("The Lord's day", Revelation 1:10 = Sunday) to the `sabbath` page, where the chapter 1 traditions card already
sits. Make lake-of-fire, second-death and gehenna "related" (lake-of-fire [0] already defers to second-death).

**5. Wrong `refs` from references to writings outside the 66, plus an importer bug (topics; `tools/import-rev.js`
line 21; sources `topics1.js`, `topics2.js`, `topics3.js`).**
- antichrist [1]: refs "Isaiah 4:2; Revelation 16:4". "Ascension of Isaiah 4:2" is parsed as Isaiah 4:2, and the
  Didache's bare "(16:4)" becomes Revelation 16:4. This is also the source of the build warning "quotes Revelation 16:4
  as 'the world-deceiver ...'".
- tree-of-life [2]: "The Testament of Levi says ... (18:10–11)" becomes "Revelation 18:10–11" (Babylon's merchants).
- michael [2]: "(1QM 17:6–7)" becomes "Revelation 17:6–7".
- `strip = s => String(s).replace(/<[^>]+>/g, '')` joins table cells without a space ("Main featuresDaniel 7:8"), so
  references in tables lose their book. As a result antichrist [0] gets "Revelation 7:8; Revelation 8:9–12; Revelation
  4:3" (from Daniel 8:9–12 and 1 John 4:3), and daniel [0] gets "Revelation 7:8; Revelation 12:4; Revelation 4:1".
- exodus-pattern [1]: the Exodus column uses bare references ("A kingdom of priests (19:6)", "(19:4; 16)", "(19:16)",
  "(40:34–35)"). These become Revelation 19:6, 19:4 and 19:16. Fix it in the source text.
- More generally, these places put a bare c:v after another book, which STYLE forbids ("name every other book in full
  each time"): tribulation [3] (1 Thessalonians 5:9), antichrist [0], son-of-man [0] (Isaiah 49:2), michael [1],
  bride [0], jezebel [0], balaam [1], synagogue-of-satan [0] and [1], abaddon [0], euphrates [2], lampstands [1],
  four-horsemen [1], seal-of-god [4], wormwood [1], alpha-omega [2], other-traditions [1], say-are-not [3]. The same
  applies to the `refs` of several `claude` boxes (tribulation, millennium, antichrist, mark, 666, living-creatures,
  two-witnesses, 144000, babylon, sea, three-and-a-half, tree-of-life) and to the beasts page (Zechariah 6:1–8) and the
  israel page (Romans 11:17–24; 21:12).

*Fix:* change `strip` to replace tags with a space. Write "Didache 16:4", "Testament of Levi 18:10–11" and "Exodus
19:6" in full. Name the book on every reference. Re-import and re-check the generated refs.

**6. Writings outside the 66: naming and missing works.json entries (topics; book.json audience in
`content/overlays/Rev.json`).**
- apocalyptic [0] lists "4 Ezra (2 Esdras 3–14)", and the apocalyptic core links a Wikipedia label "2 Esdras". On this
  site "2 Esdras" means the Greek Ezra–Nehemiah and must never name the apocalypse (canon-tiers, works.json `_about`).
  Write "4 Ezra" and relabel the link, for example ["4 Ezra (Wikipedia: 2 Esdras)","2 Esdras"].
- These works are named but have no works.json entry, so the site cannot mark their tier:
  - Sibylline Oracles (666, nero, babylon, euphrates)
  - Apocalypse of Abraham (apocalyptic)
  - Martyrdom of Polycarp (smyrna, synagogue-of-satan)
  - the Thanksgiving Hymns, 1QH (abaddon)
  - the New Jerusalem text from Qumran (new-jerusalem)
  - the "Epistle to the Laodiceans" (laodicea)
  - Ignatius's letters (To the Ephesians, Magnesians, Philadelphians in several topics)

  Add them, with tier and aka, through the lead's proposals lane.
- The book.json audience cites "Polycarp's remark (*To the Philippians* 11.3)", which does not match the works.json
  name or aka ("Polycarp's Letter to the Philippians"). Write the name as listed.

**7. A "Claude's theory" box gets the Greek wrong (sevens, `claude`; source `revelation/v2/src/topics3.js`).**
Its title asks "Seven times 'Lord God, the All-Powerful'?" It then counts παντοκράτωρ alone (9 times) and concludes
that the pattern fails and readers should not over-find sevens. But the full title κύριος ὁ θεὸς ὁ παντοκράτωρ occurs
exactly seven times in the SBLGNT: 1:8; 4:8; 11:17; 15:3; 16:7; 19:6; 21:22. The two other uses of παντοκράτωρ (16:14;
19:15) are "God the Almighty" without κύριος. This is Bauckham's actual observation (*Climax of Prophecy*), so the box
both misstates the evidence and wrongly undercuts the source it relies on. *Fix:* rewrite it: the full title occurs
seven times (Bauckham), and παντοκράτωρ alone occurs nine. Keep the caution about over-finding patterns if wanted,
with a correct example.

**8. Fairness: critical scholarship has no seat in the "four views" (book.json lenses, views page, four-views topic;
sources `revelation/src/3-data.js`, `revelation/v2/src/app.js`, `topics1.js`).**
The framing is "Christians have read Revelation four main ways," and each one is a confessional reading. The academic
mainstream reads the book as addressed to Rome and the churches of John's day, with no claim that it predicts later
events: the "contemporary-historical" approach of Collins, Aune, Friesen and Koester. That is not the same as the
preterist lens, whose holders listed are Gentry and Sproul. A reader of the opening pages cannot tell this is the
consensus outside confessional circles. Jewish scholarly readings of Revelation as a Jewish apocalypse (Marshall,
Frankfurter) appear only deep in one topic (say-are-not). *Fix:* the lenses are fixed, so keep them. Add a paragraph to
book.json `sections`, the views page and four-views [0] that names the historical-critical reading, says it is the
majority view among academic scholars, and says who dissents. Mention the Jewish-apocalypse reading in the lead
section.

**9. "Where Christians differ": final punishment, the main live conflict tied to Revelation, has no card
(`content/overlays/Rev.json`; book-level or chapters 14/20).**
The cards cover canon (book), sabbath, the seven ages, the rapture, the saints' prayers, the 144,000, Mary, the papacy
as Antichrist, Babylon and the millennium, which is good coverage. But there is no card on the lake of fire and the
second death (14:10–11; 20:10, 14–15; 21:8):
- eternal conscious punishment: Catholic (Catechism 1033–1035), Orthodox, Reformed (Westminster 33), Baptist
- conditional immortality: Adventist (Fundamental Beliefs 27), Jehovah's Witnesses
- hope of final restoration: some Unitarian and Universalist writers

The second-death topic already has the material. Smaller gaps, worth one card each where the chapter slices agree:
Michael and Christ (12:7; Jehovah's Witnesses and Adventists against the rest, already described in michael [4]);
21:27 "nothing unclean will enter" as a Catholic text for purgatory against the Protestant reading; 22:18–19 and a
closed canon (Latter-day Saints, Pentecostal views of continuing prophecy). *Fix:* add at least the final-punishment
card with `top: "second-death"` (or `gehenna` if that becomes the general page), sourced to the catechisms and
confessions.

**10. Source keys break the key rule and clash (`content/books/Rev/sources.json`; source SRC in
`revelation/v2/src/topics1.js`).**
STYLE: keys must be "author plus a short word for the work ..., never a bare surname." Most of the 38 keys are bare
surnames, and several now collide in meaning with other books' keys:
- `collins` is Adela Yarbro Collins, *Combat Myth*, while the site also has John J. Collins, C. John Collins and John N.
  Collins.
- `gentry` is Kenneth Gentry, while `gentry-asterisked-job` is Peter Gentry.
- `thomas` (Robert L. Thomas) is ambiguous with the Gospel of Thomas and Aquinas.
- `marshall` will clash with I. Howard Marshall.

Duplicates of the same work: `augustine` (*City of God* bk 20) and the shared `augustine-city`; `suetonius` and
`suetonius-caesars` (Matthew). `metzger`, `irenaeus`, `josephus`, `didache` and `ignatius` are defined identically in
both Rev/sources.json and content/sources.json. `irenaeus` is described as book 5, but balaam cites *Against Heresies*
1.26.3 under it, and `irenaeus-heresies-1` exists. `koesterh` is an opaque key.

*Fix:* rename to specific keys (`collins-combat`, `gentry-jerusalem`, `thomas-rev`, `marshall-parables`,
`bauckham-theology`, `bauckham-climax`, `beale-rev`, `koester-rev`, `koester-end`, `aune-rev`, …). Map `augustine` →
`augustine-city` and `suetonius` → `suetonius-caesars`. Remove the duplicate definitions from Rev's SRC. Update every
`s`/`sources` list in the Revelation sources.

### Minor

**11. book.json facts, Author (`tools/import-rev.js`).** "John, who calls himself a servant and a prophet (1:1, 9;
22:9)". In 1:9 he calls himself "your brother." He never calls himself a prophet outright (22:9 "your brothers the
prophets" implies it; 1:3 and 22:7 call the book a prophecy). Under the lead's δοῦλος decision, "servant" becomes
"slave." *Fix:* "John, who calls himself God's slave and the prophets' brother (1:1, 9; 22:9)".

**12. About the Translations section (book.json `sections`; source `topics3.js`).** "The KJV's Greek rested on only one
incomplete manuscript" overstates it. Erasmus's first edition (1516) did, but later editions behind the KJV corrected
some readings from the Complutensian Polyglot, while others, such as "book of life" in 22:19, stayed. Also, "See the
page on how the text came down to us" points to nothing: book.json has no such page and the sentence is not linked.
*Fix:* reword, and link `/topic/textual-history`.

**13. Keys page, decoder (source `revelation/v2/src/app.js`).** "Every time it decodes a symbol, it decodes it into a
person, a group or a city, never into a date." The page's own list contradicts the first half: prayers (5:8), righteous
acts (19:8), the seven Spirits (4:5; 5:6), hills (17:9) and the second death (20:14). *Fix:* keep only "never into a
date."

**14. Beasts page and living-creatures [3]: the Gospel symbols (source `revelation/src/3-data.js`, `topics2.js`).**
"The four Gospels (Irenaeus; later Christian art: Matthew the man, Mark the lion, Luke the ox, John the eagle)". That
is Jerome's pairing. Irenaeus (*Against Heresies* 3.11.8) gives John the lion and Mark the eagle. *Fix:* say the
pairings differ, and that the familiar one is Jerome's.

**15. millennium lead (`topics1.js`).** "The Latin *mille annum* gives us 'millennium'" is not Latin grammar.
"Millennium" is formed from *mille* "thousand" + *annus* "year".

**16. wormwood [0] (`topics3.js`).** "Used ... against intestinal worms (hence its name)" is a folk etymology. The
English word comes from Old English *wermōd* (compare German *Wermut*, "vermouth").

**17. pergamum [4] and ark [3] (`topics3.js`).** "Jewish tradition said Jeremiah hid the ark, with the jar of manna,
until the Messiah came (2 Maccabees 2:4–8; 2 Baruch ...)". 2 Maccabees 2:4–8 names the tent, the ark and the incense
altar, not the manna. The hidden-manna-jar tradition is rabbinic (Tosefta Sotah 13:1; Talmud, Yoma 52b), and 2 Baruch
29:8 says manna will come down again, not that it was hidden with the ark. *Fix:* cite accurately.

**18. bowls [2] (`topics3.js`).** "Three times the people 'cursed the name of God' and 'did not repent' (16:9, 11,
21)": 16:21 has the cursing but not "did not repent."

**19. john topic [1] and [5] (`topics2.js`).** Eusebius did not simply list Revelation as "disputed." He placed it
both among the recognized books, "if it seems right," and among the spurious ones (*Church History* 3.25.2–4).
"John calls his book 'prophecy' seven times": προφητεία occurs seven times, but 11:6 (the witnesses' prophesying) and
19:10 ("the spirit of prophecy") are not about the book. Five uses refer to the book (1:3; 22:7, 10, 18, 19).

**20. Inconsistent date for Andrew of Caesarea.** The canon card (overlay) says "about 611," and textual-history [1]
(`topics1.js`) says "500s." Pick one ("about 600–611").

**21. Canon card, Lutheran view (overlay).** "Lutherans today read Revelation 14:6–7 on Reformation Day, though
Chemnitz counted it among the once-disputed books." The "though" runs history backward, since Chemnitz wrote in the
1560s. Reorder it. Optional: the Orthodox view could add the Council of Laodicea's list (canon 60), which also omits
it.

**22. sources.json `schurer`.** Schürer's "Die Prophetin Isabel in Thyatira" appeared in the 1892 Weizsäcker
Festschrift (*Theologische Abhandlungen*), not 1893.

**23. laodicea [2] (`topics3.js`).** "Since a 1958 article by Rudwick and Green, most scholars have read 'hot' and
'cold' as both good." Fair as a majority, but name the dissent. Koester (cited on this page) and others doubt the
local-water reading. This matches the audience reviewer's finding on the Laodicea card.

**24. three-and-a-half [3] (`topics3.js`).** "AD 538 (when the bishop of Rome gained power over the Ostrogoths'
city)" is garbled. The historicist date is the Ostrogoths' failed siege of Rome in 538, read as freeing the papacy from
Arian rule.

**25. Image prompts (book.json `prompts`, art page; source `revelation/v2/src/app.js`).** The page says each prompt
"follows the text's own details," but some add to the text:
- the land beast's "dragon's mouth breathing smoke" (13:11 says only that it spoke like a dragon)
- the armies "carrying no weapons" (19:14 is silent)
- the sea beast's "mouths like a lion's" (13:2 has one mouth)

*Fix:* trim to the text, or change the claim.

**26. The overlay has no `variants` key (`content/overlays/Rev.json`), so the build reports 0 variants.** The lead's
decision to turn the 11:15, 13:18 and 22:14 var notes into variants is not yet done, while `progress.md` says
"Status: published." This is for the slice fixers and the lead, not the book fixer, but the hand-over should not mark
Revelation done until it is.

**27. Mythos page summary (source `revelation/src/3b-extra.js` / `3-data.js`).** The Azi Dahaka row says "very close
story shape" with no dating caveat. The Pahlavi texts that tell the chaining story are 9th-century, and only the
other-traditions topic [3] says so. Add "written down much later" to the row, as the Norse rows do.

**28. Small style note, mythos and art pages.** Several labels use "my judgment" or "my" in the site's voice outside a
`spec` box ("'Strongest reading' is my judgment" on the beasts page). That is acceptable as a stated method, but STYLE
keeps first person for labeled Claude theories. Either mark the beasts page "Strongest reading (Claude's judgment)" or
drop "my."

## Fixes applied

1. Fixed. Every quotation listed was rewritten: on-site books now use the site's Plain English Translation (Isaiah, Tobit, Acts, Mark, Luke, John, Psalms, Proverbs, Exodus, Deuteronomy, Genesis), off-site books are translated fresh from the literal line (2 Peter 3:8–10, Romans 2:6 and 8:21, Ephesians 2:8–9 and 1:13, Hebrews 4:12, Zechariah 4:6 and 4:10, Joel 2:32 and 3:13, Daniel 7:10–11, 12:1, Ezekiel 14:21, 29:3, 33:11, Jeremiah 3:16, 8:16, 9:15, 15:16, 25:15, Micah 4:10, Hosea 2:19–20, Amos 5:7, Zephaniah 1:16, 2 Thessalonians 2:9, 2 Corinthians 11:13 and 12:4, 1 John 1:6, 2:4, 4:1, 4:20, 1 Corinthians 15:26) or paraphrased without quote marks (Galatians 3:29, Malachi 3:16, Hebrews 8:5 and 13:12, Romans 2:28–29, 1 John 4:2–3, 2 Corinthians 11:2), and Wisdom 18:15–16 is a fresh rendering of the Greek. The grep of topics, sayare.js, deep2.js, deep21.js and the book pages found and fixed the rest (Luke 21:20, John 2:19, 5:22, 1:29, Isaiah 27:1, 44:6, 54:5, 66:7–8, Psalm 29:3, Proverbs 15:11, Deuteronomy 29:18, Hebrews 12:22, Jeremiah 51:45 checked). Revelation quotes 6:10, 11:13 and 20:11 now use the current Plain English Translation. Jeremiah 1–31 is not yet on the site, so those quotes are fresh translations.
2. Partly (by design). All non-Revelation quote warnings in book.json and topics are gone (Isaiah, Tobit 13:17 and the rest synced). Quotes of Revelation's own verses are left for the lead's sync, since the slice fixers are rebuilding the Plain English Translation; about 100 such warnings remain, none of them mine to fix.
3. Fixed. elders ("Elders": Israel's elders, the Jerusalem council, church elders/overseers, and the twenty-four), jezebel ("Jezebel": the queen and the Thyatira teacher), son-of-man ("The Son of Man"), daniel ("The Book of Daniel") and false-prophet ("The False Prophet of Revelation", related to false-teachers) have whole-Bible titles and leads, no origin line, and Revelation's lead now becomes their "In Revelation" section. The Acts elder cards stay on elders, which now covers church office. For the lead: Matthew 24:24 and Mark 13:22 (and Matthew 7:15 if tagged) should be retagged to false-teachers in those books.
4. Fixed. Generalized martyrs, wrath, day-of-the-lord, bride, rome, porneia, millennium, imperial-cult, abaddon, antichrist, new-jerusalem, rapture, tribulation, hallelujah, armageddon, apocalyptic, four-views, soon, three-and-a-half and wormwood, plus ephesus, thyatira and euphrates (also used by Acts and 2 Samuel). The "Lord's day" (1:10) section moved from day-of-the-lord to a new Revelation contribution on the sabbath page. lake-of-fire, second-death and gehenna are now "related" to each other. Still Rev-origin but lightly used elsewhere (left as is): 666, beasts, other-traditions, overcomer, scroll-seals, seal-of-god, seven-churches, structure, two-witnesses, white-throne, woman-of-ch12.
5. Fixed. The strip bug was already fixed by the lead (tags now become a space); confirmed, and antichrist [0] now parses correctly. Written in full: Didache 16.4, Ascension of Isaiah 4.2 (dot form so it is not read as Isaiah 4:2), Testament of Levi 18:10–11, War Scroll 1QM column 17, 1QH column 11, every Exodus cell of exodus-pattern, every Daniel and Revelation cell of the daniel table, and all the bare references listed (tribulation, son-of-man, michael, bride, jezebel, balaam, synagogue-of-satan, abaddon, euphrates, lampstands, four-horsemen, seal-of-god, wormwood, alpha-omega, other-traditions, say-are-not, new-jerusalem), the Claude-box refs listed, the beasts page (Zechariah 6:1–8) and the israel page spec refs. One side effect of the space-strip: "<i>Title</i> 9:1" now reads as Revelation 9:1, so the one case (Ignatius, To the Magnesians) uses 9.1.
6. Fixed. works.json gains Sibylline Oracles, Apocalypse of Abraham, Martyrdom of Polycarp, Thanksgiving Hymns (1QH), New Jerusalem text (Qumran), Epistle to the Laodiceans and Letters of Ignatius (with aka for each letter). "4 Ezra (2 Esdras 3–14)" is now "4 Ezra", the link relabeled "4 Ezra (Wikipedia: 2 Esdras)". The audience now names "Polycarp's Letter to the Philippians".
7. Fixed. The sevens box now says the full title occurs exactly seven times (1:8; 4:8; 11:17; 15:3; 16:7; 19:6; 21:22, checked in the SBLGNT) and pantokratōr alone nine, crediting Bauckham, with a corrected caution.
8. Fixed. A historical-critical section (Collins, Aune, Friesen, Koester; majority view among academic scholars; who dissents; Marshall and Frankfurter's Jewish-apocalypse reading) added to four-views and to the views page; the book lead now mentions the academic and Jewish readings. book.json sections carries only the translations guide, so the paragraph went to the views page instead.
9. Declined here per the lead's decision: the final-punishment card goes at chapter 20 (17-22 fixer), with a pointer at 14:11 (12-16 fixer). The smaller cards (Michael, 21:27, 22:18–19) are left to the slice fixers.
10. Fixed. Renamed: gregg → gregg-four-views, bauckham → bauckham-theology, climax → bauckham-climax, beale → beale-rev, koester → koester-rev, aune → aune-rev, keener → keener-rev, gorman → gorman-reading, walvoord → walvoord-rev, thomas → thomas-rev, gentry → gentry-jerusalem, collins → collins-combat, hemer → hemer-letters, ramsay → ramsay-letters, ladd → ladd-rev, koesterh → koester-end, weber → weber-armageddon, boyer → boyer-prophecy, kovacs → kovacs-rowland, friesen → friesen-cults, blount → blount-rev, osborne → osborne-rev, mounce → mounce-rev, fiorenza → schussler-revelation, pippin → pippin-death, harland → harland-associations, schurer → schurer-isabel, frankfurter → frankfurter-jews, marshall → marshall-parables, epictetus → epictetus-discourses; augustine → augustine-city, suetonius → suetonius-caesars, budin → budin-myth (existing keys). Duplicate definitions of metzger, irenaeus, josephus, didache and ignatius removed from SRC. balaam cites irenaeus-heresies-1. Every use was updated in the Revelation sources, the overlay, content/topics/olivet-discourse.json and the other books that borrowed the bare keys (Act 11-14, 18-20; Isa 45-55, 56-66; Jhn 18-21; Lev 01-16, 17-27; Mat 24-25; Tob 07-14).
11. Fixed. Author: "John, who calls himself God's slave, his readers' brother, and a fellow slave with the prophets (1:1, 9; 22:9)" (tools/import-rev.js).
12. Fixed. Reworded (one manuscript for the 1516 edition; later editions corrected some readings from the Complutensian Polyglot; "book of life" stayed) and linked to the textual-history topic.
13. Fixed. Keys page now says only that the book never decodes a symbol into a date.
14. Fixed on the beasts page and living-creatures: the pairings differ (Irenaeus: John the lion, Mark the eagle; Augustine: Matthew the lion); the familiar one is Jerome's.
15. Fixed. "Millennium" from Latin mille "thousand" + annus "year".
16. Fixed. Old English wermōd (German Wermut, "vermouth"), with the worm link called folk etymology.
17. Fixed in pergamum and ark: 2 Maccabees 2:4–8 names tent, ark and incense altar; the manna jar is rabbinic (Tosefta Sotah 13:1; Talmud, Yoma 52b); 2 Baruch 29:8 is manna coming down again.
18. Fixed. Cursing at 16:9, 11, 21; "did not repent" at 16:9, 11 only.
19. Fixed. Eusebius placed it among the accepted books "if it seems right" and among the spurious (Church History 3.25.2–4); "prophecy" seven times, five of them the book itself.
20. Fixed. "About 600–611" in textual-history (now "Andrew of Caesarea") and in the canon card.
21. Fixed. Chemnitz (1560s) now comes before the present-day Reformation Day reading; the Orthodox view adds the Laodicea list (canon 60, with its authenticity noted as debated).
22. Already fixed by another fixer before I reached it (1892, in the Weizsäcker Festschrift); I renamed the key to schurer-isabel.
23. Fixed. Laodicea names the dissent (Koester and others doubt the local-water reading; hot and cold drinks at meals).
24. Fixed. AD 538 is now the Ostrogoths' failed siege of Rome, read as freeing the papacy from Arian rule.
25. Fixed by trimming the prompts to the text: one lion's mouth for the sea beast, the land beast speaking with a dragon's roar (no smoke), the armies in fine linen, white and clean (no "no weapons").
26. Not the book fixer's; for the record, the overlay now has variants (69 at my last check) from the slice fixers.
27. Fixed. The Azi Dahaka row now reads "very close story shape; written down much later (Pahlavi texts of the 800s AD)".
28. Fixed. The beasts page says "Strongest reading" is Claude's judgment, not a church's or a consensus.
